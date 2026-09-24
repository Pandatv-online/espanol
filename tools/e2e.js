#!/usr/bin/env node
// Dev-only end-to-end check of the whole site in a real browser (file://).
// Run: npx -y -p playwright@1.63.0 node tools/e2e.js [--shots <dir>]
// --shots also saves screenshots of the key screens (375/1280, light/dark).
'use strict';
const path = require('node:path');
const fs = require('node:fs');
const assert = require('node:assert/strict');

function loadPlaywright() {
  try { return require('playwright'); } catch (e) { /* fall through */ }
  for (const dir of (process.env.PATH || '').split(path.delimiter)) {
    const mod = path.join(dir, '..', 'playwright');
    if (dir.endsWith(path.join('node_modules', '.bin')) && fs.existsSync(mod)) return require(mod);
  }
  throw new Error('Playwright not found: run via npx -y -p playwright@1.63.0 node tools/e2e.js');
}
const { chromium } = loadPlaywright();
const url = 'file://' + path.join(__dirname, '..', 'index.html');
const shotsIdx = process.argv.indexOf('--shots');
const shotsDir = shotsIdx > 0 ? process.argv[shotsIdx + 1] : null;
if (shotsIdx > 0 && (!shotsDir || shotsDir.startsWith('--'))) {
  console.error('--shots needs a directory: node tools/e2e.js --shots <dir>');
  process.exit(2);
}

const checks = [];
// opts: { locale, colorScheme, width, expectConsoleError }
const check = (name, fn, opts) => checks.push([name, fn, opts || {}]);

const WORDS = '#/a1/words/a1-greetings';
const GRAMMAR = '#/a1/grammar/a1-presente-ar';
// The test is the last tab of a tabbed topic; a legacy topic ignores the tab and shows its test below the sections.
const GRAMMAR_TEST = GRAMMAR + '/test';
const TABBED = '#/a2/grammar/a2-perfecto-indefinido';

async function noHorizontalScroll(page, label) {
  const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  assert.ok(over <= 0, `${label}: horizontal overflow ${over}px`);
}

async function learnedCount(page) {
  const lead = await page.textContent('.screen-lead');
  const m = lead.match(/(?:выучено|·)\s*(\d+)/);
  return Number(m[1]);
}

// Answers every question of a vocab quiz; returns the result text.
async function finishWordsQuiz(page) {
  for (let i = 0; i < 40 && (await page.locator('.quiz-result').count()) === 0; i++) {
    await page.locator('.options .option').first().click();
    await page.locator('[data-next]').click();
  }
  return page.textContent('.quiz-result');
}

// Opens the topic where it shows a table: the first tab with a table block, or the legacy page.
async function openGrammarTable(page, hash) {
  await page.goto(url + hash);
  const tab = await page.evaluate((id) => {
    const t = ECA.data.find('grammar', id);
    const hit = t && t.tabs && t.tabs.find((x) => x.blocks.some((b) => b.type === 'table'));
    return hit ? hit.id : null;
  }, hash.split('/').pop());
  if (tab) await page.goto(url + hash + '/' + tab);
}

async function finishGrammarQuiz(page) {
  await page.locator('.grammar-quiz .btn--primary').click();
  for (let i = 0; i < 20 && (await page.locator('#grammar-result').count()) === 0; i++) {
    await page.locator('.grammar-quiz .option').first().click();
    await page.locator('[data-next]').click();
  }
  return page.textContent('#grammar-result');
}

// ---------- first visit, language, level ----------

check('first visit (ru browser): RU interface, A1 selected, hash #/a1', async (page) => {
  await page.goto(url);
  assert.equal(await page.getAttribute('html', 'lang'), 'ru');
  assert.equal(new URL(page.url()).hash, '#/a1');
  assert.equal(await page.getAttribute('[data-level="A1"]', 'aria-pressed'), 'true');
  assert.equal(await page.locator('.level-tile[aria-pressed="true"]').count(), 1);
});

check('first visit (en browser): EN interface', async (page) => {
  await page.goto(url);
  assert.equal(await page.getAttribute('html', 'lang'), 'en');
  assert.match(await page.textContent('#reset-progress'), /Reset progress/);
}, { locale: 'en-US' });

check('RU/EN switch on a topic screen keeps the screen and tab, and is remembered', async (page) => {
  await page.goto(url + WORDS + '/quiz');
  await page.click('[data-lang="en"]');
  assert.equal(await page.getAttribute('html', 'lang'), 'en');
  assert.equal(new URL(page.url()).hash, WORDS + '/quiz');
  assert.equal(await page.getAttribute('#tab-quiz', 'aria-selected'), 'true');
  assert.match(await page.textContent('.backlink'), /A1 · Words/);
  await page.reload();
  assert.equal(await page.getAttribute('html', 'lang'), 'en');
});

check('level change: B1 in address and remembered after reload', async (page) => {
  await page.goto(url + '#/a1');
  await page.click('[data-level="B1"]');
  await page.waitForFunction(() => location.hash === '#/b1');
  assert.equal(await page.getAttribute('[data-level="B1"]', 'aria-pressed'), 'true');
  await page.goto(url);
  assert.equal(new URL(page.url()).hash, '#/b1');
});

// ---------- words ----------

check('cards: Know / Again, learned words survive a reload', async (page) => {
  await page.goto(url + WORDS);
  assert.equal(await learnedCount(page), 0);
  const first = await page.textContent('.flashcard__word');
  await page.click('[data-action="again"]');
  assert.notEqual(await page.textContent('.flashcard__word'), first);
  await page.click('[data-action="know"]');
  await page.click('[data-action="know"]');
  await page.reload();
  assert.equal(await learnedCount(page), 2);
  const total = Number((await page.textContent('.screen-lead')).match(/^(\d+)/)[1]);
  assert.equal(await page.textContent('.deck__left'), `Осталось ${total - 2} из ${total}`);
});

check('words test to the result; best score shown as a badge', async (page) => {
  await page.goto(url + WORDS + '/quiz');
  const result = await finishWordsQuiz(page);
  assert.match(result, /\d+\s*\/\s*10|\d+ из 10/);
  assert.match(await page.textContent('.quiz-result__best'), /Лучший результат: \d+ из 10/);
  assert.equal(await page.locator('.quiz-result .badge--done').count(), 0, 'a first attempt is not a new record');
  await page.reload();
  assert.equal(await page.locator('.vocab-badges .badge--score').count(), 1);
});

check('grammar test to the result', async (page) => {
  await page.goto(url + GRAMMAR);
  assert.ok(await page.locator('.grammar-section, .gblock').count() > 0, 'topic has an explanation');
  await openGrammarTable(page, GRAMMAR);
  assert.ok(await page.locator('.grammar-table, .table').count() > 0, 'topic has a table');
  await page.goto(url + GRAMMAR_TEST);
  const result = await finishGrammarQuiz(page);
  assert.match(result, /\d+/);
  assert.match(await page.textContent('.grammar-result__best'), /^Лучший результат: \d+ из \d+/, 'a first attempt is not a new record');
  assert.equal(await page.locator('.grammar-badges .badge--score').count(), 1);
});

check('reset progress clears learned words and scores, keeps language', async (page) => {
  await page.goto(url + WORDS);
  await page.click('[data-action="know"]');
  await page.click('[data-lang="en"]');
  page.once('dialog', (d) => d.accept());
  await page.click('#reset-progress');
  assert.equal(await page.getAttribute('html', 'lang'), 'en');
  assert.equal(await learnedCount(page), 0);
  await page.reload();
  assert.equal(await learnedCount(page), 0);
  assert.equal(await page.getAttribute('html', 'lang'), 'en');
});

// ---------- navigation, errors ----------

check('unknown address and topic show the not-found screen with a way back', async (page) => {
  await page.goto(url + '#/a2/words/nope');
  assert.match(await page.textContent('h1'), /Такой темы нет/);
  await page.goto(url + '#/whatever');
  assert.match(await page.textContent('h1'), /Такой страницы нет/);
  await page.click('.notfound .btn');
  await page.waitForSelector('.level-steps', { timeout: 3000 });
});

check('back button returns to the previous screen; focus lands on the heading', async (page) => {
  await page.goto(url + '#/a1');
  await page.click('.topic-card');
  await page.waitForFunction(() => location.hash.startsWith('#/a1/words/'));
  assert.equal(await page.evaluate(() => document.activeElement.tagName), 'H1');
  await page.goBack();
  await page.waitForFunction(() => location.hash === '#/a1');
  assert.equal(await page.locator('.level-steps').count(), 1);
});

check('footer: Telegram and verzo.pro links', async (page) => {
  await page.goto(url + '#/a1');
  const tg = page.locator('.site-footer a.tg-link');
  assert.equal(await tg.getAttribute('href'), 'https://t.me/espanolconamigos');
  assert.equal(await tg.getAttribute('target'), '_blank');
  assert.equal(await tg.getAttribute('rel'), 'noopener');
  assert.equal(await page.getAttribute('.footer-meta__by a', 'href'), 'https://verzo.pro');
  assert.equal(await page.locator('#storage-note').isHidden(), true);
});

// ---------- theme ----------

check('dark theme: follows the system, toggle is remembered', async (page) => {
  await page.goto(url + '#/a1');
  const bg = () => page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  const lum = (c) => c.match(/\d+/g).slice(0, 3).reduce((a, b) => a + Number(b), 0);
  assert.ok(lum(await bg()) < 200, 'system dark gives a dark page');
  // The button is the "dark theme" switch: its moon icon and label mean the same in both states.
  const toggle = () => page.evaluate(() => {
    const b = document.getElementById('theme-toggle');
    return [b.getAttribute('aria-pressed'), b.querySelector('.theme-toggle__icon').textContent, b.getAttribute('aria-label')];
  });
  assert.deepEqual(await toggle(), ['true', '☾', 'Тёмная тема']);
  await page.click('#theme-toggle');
  assert.equal(await page.getAttribute('html', 'data-theme'), 'light');
  assert.deepEqual(await toggle(), ['false', '☾', 'Тёмная тема']);
  assert.ok(lum(await bg()) > 600, 'light after toggle');
  await page.reload();
  assert.equal(await page.getAttribute('html', 'data-theme'), 'light');
  const themeColor = await page.evaluate(() => [...document.querySelectorAll('meta[name="theme-color"]')]
    .filter((m) => matchMedia(m.media).matches).map((m) => m.content));
  assert.deepEqual(themeColor, ['#0d2b4e'], 'theme-color follows the manual choice');
}, { colorScheme: 'dark' });

check('Spanish text and brand names are protected from auto-translate', async (page) => {
  await page.goto(url + WORDS);
  const bad = await page.evaluate(() => [...document.querySelectorAll('[lang="es"]')].filter((n) => n.getAttribute('translate') !== 'no').length);
  assert.equal(bad, 0);
  assert.equal(await page.getAttribute('.footer-meta__by a', 'translate'), 'no');
});

// ---------- tabbed grammar topic ----------

const tabState = (page) => page.$$eval('.grammar-tabs [role="tab"]', (bs) => bs.map((b) => [b.id, b.getAttribute('aria-selected'), b.textContent]));

check('tabbed grammar: hero, numbered tabs with "Test" last, tab in the address, arrows, unknown tab → first', async (page) => {
  await page.goto(url + TABBED);
  assert.match(await page.textContent('.hero h1'), /Perfecto vs Indefinido/);
  assert.equal(await page.getAttribute('.hero h1', 'lang'), 'es');
  let tabs = await tabState(page);
  assert.deepEqual(tabs.map((t) => t[2]), ['1Разница', '2Спряжение', '3Неправильные', '4Маркеры', '5Примеры', '6Тест']);
  assert.equal(tabs[0][1], 'true');
  assert.equal(await page.getAttribute('#grammar-panel', 'role'), 'tabpanel');
  assert.equal(await page.getAttribute('#grammar-panel', 'aria-labelledby'), 'tab-diff');
  await page.evaluate(() => window.scrollTo(0, 300));
  await page.click('#tab-irreg');
  assert.equal(new URL(page.url()).hash, TABBED + '/irreg');
  assert.ok(await page.evaluate(() => window.scrollY) > 0, 'switching a tab does not jump to the top');
  assert.ok(await page.locator('#grammar-panel .table').count() > 0, 'irregular table shown');
  await page.focus('#tab-irreg');
  await page.keyboard.press('ArrowRight');
  assert.equal(await page.getAttribute('#tab-keys', 'aria-selected'), 'true');
  assert.equal(await page.evaluate(() => document.activeElement.id), 'tab-keys');
  assert.ok(await page.locator('#grammar-panel .kw-tag').count() >= 20, 'markers shown');
  await page.click('[data-lang="en"]');
  assert.equal(new URL(page.url()).hash, TABBED + '/keys', 'tab survives the language switch');
  assert.equal(await page.getAttribute('#tab-keys', 'aria-selected'), 'true');
  assert.match(await page.textContent('#tab-keys'), /Markers/);
  await page.goto(url + TABBED + '/nope');
  await page.waitForFunction(() => location.hash.endsWith('a2-perfecto-indefinido'));
  tabs = await tabState(page);
  assert.equal(tabs[0][1], 'true', 'unknown tab → first tab');
  await page.goto(url + TABBED + '/examples');
  assert.ok(await page.locator('#grammar-panel .ex-row').count() >= 18, 'examples tab');
  assert.equal(await page.locator('#grammar-panel .ex-row__es b').count() >= 18, true, 'the form is highlighted');
});

check('tabbed grammar: mini-tabs switch one verb only, by mouse and keyboard', async (page) => {
  await page.goto(url + TABBED + '/conj');
  const cards = page.locator('.conj-card');
  const visible = (i) => cards.nth(i).locator('.conj-forms:not([hidden]) .form-row__word').first().textContent();
  assert.equal(await visible(0), 'he hablado');
  assert.equal(await visible(1), 'he comido');
  await cards.nth(0).locator('.mini-tab').nth(1).click();
  assert.equal(await visible(0), 'hablé');
  assert.equal(await visible(1), 'he comido', 'the other verb is untouched');
  assert.equal(await cards.nth(0).locator('.mini-tab').nth(1).getAttribute('aria-selected'), 'true');
  await cards.nth(1).locator('.mini-tab').first().focus();
  await page.keyboard.press('ArrowRight');
  assert.equal(await visible(1), 'comí');
  assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Indefinido');
  await page.keyboard.press('ArrowRight');
  assert.equal(await visible(1), 'he comido', 'arrows wrap around');
});

check('tabbed grammar: the test is the last tab and survives switching tabs', async (page) => {
  await page.goto(url + TABBED + '/test');
  await page.locator('.grammar-quiz .btn--primary').click();
  await page.locator('.grammar-quiz .option').first().click();
  await page.locator('[data-next]').click();
  const progress = await page.textContent('.grammar-quiz__progress');
  assert.match(progress, /Вопрос 2 из 10/);
  await page.click('#tab-diff');
  await page.click('#tab-test');
  assert.equal(await page.textContent('.grammar-quiz__progress'), progress, 'the attempt goes on');
  for (let i = 0; i < 20 && (await page.locator('#grammar-result').count()) === 0; i++) {
    await page.locator('.grammar-quiz .option').first().click();
    await page.locator('[data-next]').click();
  }
  assert.match(await page.textContent('#grammar-result'), /Результат: \d+ из 10/);
  const best = await page.evaluate(() => JSON.parse(localStorage.getItem('eca:v1')).scores['grammar:a2-perfecto-indefinido']);
  assert.equal(best.total, 10, 'progress key unchanged');
  assert.ok(await page.locator('.hero .badge').count() > 0, 'score badge in the hero');
});

check('grammarBlocks.render draws every block type from the schema', async (page) => {
  await page.goto(url + TABBED);
  const out = await page.evaluate(() => {
    const topic = ECA.data.find('grammar', 'a2-perfecto-indefinido');
    const seen = {};
    topic.tabs.forEach((tab) => tab.blocks.forEach((b) => { if (!seen[b.type]) seen[b.type] = b; }));
    seen.triggers = { type: 'triggers', items: [{ num: 'W', title: { ru: 'Желание', en: 'Wish' }, phrases: ['quiero que'],
      ex: { es: 'Quiero que <b>vengas</b>.', ru: 'Хочу, чтобы ты пришёл.', en: 'I want you to come.' } }] };
    const r = {};
    Object.keys(seen).forEach((type) => {
      const node = ECA.grammarBlocks.render(seen[type], 'en');
      r[type] = { cls: node.firstElementChild && node.lastElementChild.className, es: !!node.querySelector('[lang="es"]'),
        text: node.textContent.slice(0, 40), script: !!node.querySelector('script, a') };
    });
    return { types: ECA.grammarBlocks.types, r };
  });
  assert.deepEqual(out.types.sort(), ['conj', 'examples', 'markers', 'rules', 'table', 'text', 'tip', 'triggers']);
  const want = { text: /prose|rule-box/, rules: /rule-grid/, triggers: /trigger-list/, conj: /conj-grid/, table: /table-wrap/, markers: /kw-grid/, examples: /ex-box/, tip: /^tip$/ };
  for (const [type, re] of Object.entries(want)) {
    assert.ok(out.r[type], `${type} rendered`);
    assert.match(out.r[type].cls, re, type);
    assert.equal(out.r[type].script, false, `${type}: no unsafe markup`);
  }
  for (const type of ['rules', 'triggers', 'conj', 'table', 'markers', 'examples']) assert.ok(out.r[type].es, `${type}: Spanish in lang="es"`);
  assert.match(out.r.tip.text, /Choose in three seconds/, 'lang argument picks English');
});

// ---------- 320px ----------

check('no horizontal scroll at 320px on every screen', async (page) => {
  const screens = ['#/a1', '#/c2', WORDS, WORDS + '/quiz', TABBED, TABBED + '/conj', TABBED + '/irreg', TABBED + '/keys', TABBED + '/examples', TABBED + '/test', '#/zz'];
  for (const hash of screens) {
    await page.goto(url + hash);
    await noHorizontalScroll(page, hash);
  }
  await page.goto(url + WORDS);
  await page.click('.flashcard');
  await noHorizontalScroll(page, 'flipped card');
  await page.click('#tab-list');
  await noHorizontalScroll(page, 'word list');
  await page.goto(url + WORDS + '/quiz');
  await finishWordsQuiz(page);
  await noHorizontalScroll(page, 'words result');
  await page.goto(url + GRAMMAR_TEST);
  await finishGrammarQuiz(page);
  await noHorizontalScroll(page, 'grammar result');
}, { width: 320 });

check('tabs component fits 320px outside the words screen (base .tabs)', async (page) => {
  await page.goto(url + '#/a1');
  const clipped = await page.evaluate(() => {
    const t = ECA.ui.tabs({ label: 'x', active: 'a', onSelect() {}, items: [
      { id: 'a', label: 'Карточки' }, { id: 'b', label: 'Тест' }, { id: 'c', label: 'Список слов' }] });
    document.getElementById('screen').prepend(t);
    const box = t.getBoundingClientRect();
    return [...t.children].some((b) => b.getBoundingClientRect().right > box.right + 0.5) || t.scrollWidth > t.clientWidth;
  });
  assert.equal(clipped, false);
}, { width: 320 });

// ---------- defects from review ----------

check('arrow keys mark words only with focus in the deck or on body', async (page) => {
  await page.goto(url + WORDS);
  for (const sel of ['[data-lang="en"]', '#theme-toggle', '.backlink', '#reset-progress']) {
    await page.focus(sel);
    await page.keyboard.press('ArrowRight');
  }
  await page.reload();
  assert.equal(await learnedCount(page), 0, 'arrows outside the deck must not mark words');
  await page.focus('[data-action="know"]');
  await page.keyboard.press('ArrowRight');
  await page.evaluate(() => document.activeElement.blur());
  await page.keyboard.press('ArrowRight');
  await page.reload();
  assert.equal(await learnedCount(page), 2);
});

check('grammar digit keys pick an answer only with focus in the test or on body', async (page) => {
  await page.goto(url + GRAMMAR_TEST);
  await page.locator('.grammar-quiz .btn--primary').click();
  await page.focus('[data-lang="en"]');
  await page.keyboard.press('1');
  assert.equal(await page.locator('.grammar-quiz .option.is-correct, .grammar-quiz .option.is-wrong').count(), 0);
  await page.evaluate(() => document.activeElement.blur());
  await page.keyboard.press('1');
  assert.ok(await page.locator('.grammar-quiz .option.is-correct').count() > 0);
});

check('an exception inside a screen shows "something went wrong" and logs it', async (page) => {
  await page.goto(url + '#/a1');
  await page.evaluate(() => ECA.views.register('grammar', () => { throw new Error('boom'); }));
  const logged = page.waitForEvent('console', (m) => m.type() === 'error');
  await page.evaluate(() => { location.hash = '#/a1/grammar/a1-presente-ar'; });
  await logged;
  assert.match(await page.textContent('#screen'), /Что-то пошло не так/);
  assert.doesNotMatch(await page.textContent('#screen'), /скоро/);
  await page.click('[data-lang="en"]');
  assert.match(await page.textContent('#screen'), /Something went wrong/);
}, { expectConsoleError: true });

check('a storage write failing mid-session shows "progress is not saved"', async (page) => {
  await page.goto(url + WORDS);
  assert.equal(await page.locator('#storage-note').isHidden(), true);
  await page.evaluate(() => { Storage.prototype.setItem = function () { throw new Error('QuotaExceededError'); }; });
  await page.click('[data-action="know"]');
  assert.equal(await page.locator('#storage-note').isVisible(), true);
});

// ---------- every topic of every level opens ----------

check('all 6 levels have word and grammar topics; each topic opens cleanly', async (page) => {
  await page.goto(url + '#/a1');
  const topics = await page.evaluate(() => ECA.data.levels().map((l) => ({
    level: l.id,
    words: ECA.data.vocab(l.id).map((t) => [t.id, ECA.i18n.pick(t.title)]),
    grammar: ECA.data.grammar(l.id).map((t) => [t.id, t.hero ? t.hero.es.replace(/<[^>]*>/g, '') : ECA.i18n.pick(t.title)])
  })));
  assert.equal(topics.length, 6);
  for (const t of topics) {
    assert.ok(t.words.length > 0 && t.grammar.length > 0, `${t.level} has words and grammar`);
    for (const [kind, ids] of [['words', t.words], ['grammar', t.grammar]]) {
      for (const [id, title] of ids) {
        await page.evaluate((h) => { location.hash = h; }, `#/${t.level.toLowerCase()}/${kind}/${id}`);
        // Wait for this very topic to be drawn, not just for the address to change.
        await page.waitForFunction((want) => {
          const h1 = document.querySelector('#screen h1');
          return !!h1 && h1.textContent === want;
        }, title, { timeout: 5000 }).catch(() => { throw new Error(`${id}: heading never became "${title}"`); });
        const text = await page.textContent('#screen');
        assert.ok(!/Такой темы нет|скоро откроется|Что-то пошло не так/.test(text), `${id} renders`);
        assert.equal(await page.locator(kind === 'words' ? '.flashcard' : '.grammar-section, .gblock').count() > 0, true, `${id} content`);
      }
    }
  }
});

// ---------- screenshots (optional) ----------

async function shots(browser) {
  fs.mkdirSync(shotsDir, { recursive: true });
  const steps = [
    ['home', async (p) => p.goto(url + '#/a1')],
    ['level-c1', async (p) => p.goto(url + '#/c1')],
    ['card', async (p) => { await p.goto(url + WORDS); await p.click('.flashcard'); }],
    ['words-quiz', async (p) => { await p.goto(url + WORDS + '/quiz'); await p.locator('.options .option').nth(1).click(); }],
    ['words-result', async (p) => { await p.goto(url + WORDS + '/quiz'); await finishWordsQuiz(p); }],
    ['grammar-topic', async (p) => openGrammarTable(p, GRAMMAR)],
    ['grammar-quiz', async (p) => { await p.goto(url + GRAMMAR_TEST); await p.locator('.grammar-quiz .btn--primary').click(); await p.locator('.grammar-quiz .option').nth(1).click(); await p.locator('#grammar-prompt').scrollIntoViewIfNeeded(); }],
    ['grammar-result', async (p) => { await p.goto(url + GRAMMAR_TEST); await finishGrammarQuiz(p); }],
    ['tabbed-diff', async (p) => p.goto(url + TABBED)],
    ['tabbed-conj', async (p) => { await p.goto(url + TABBED + '/conj'); await p.locator('.conj-card .mini-tab').nth(1).click(); }],
    ['tabbed-irreg', async (p) => p.goto(url + TABBED + '/irreg')],
    ['tabbed-keys', async (p) => p.goto(url + TABBED + '/keys')],
    ['tabbed-test', async (p) => { await p.goto(url + TABBED + '/test'); await p.locator('.grammar-quiz .btn--primary').click(); }]
  ];
  for (const scheme of ['light', 'dark']) {
    for (const width of [375, 1280]) {
      const ctx = await browser.newContext({ locale: 'ru-RU', colorScheme: scheme, viewport: { width, height: 860 } });
      const page = await ctx.newPage();
      const files = [];
      for (const [name, go] of steps) {
        await page.goto('about:blank'); // a real load per step: hash-only navigation would keep screen state
        await go(page);
        await page.waitForTimeout(250);
        if (name === 'grammar-topic' && await page.locator('.table-wrap').count()) await page.locator('.table-wrap').first().scrollIntoViewIfNeeded();
        const file = path.join(shotsDir, `${name}-${scheme}-${width}.png`);
        await page.screenshot({ path: file });
        files.push([name, file]);
      }
      // One contact sheet per scheme and width, so all screens can be reviewed at a glance.
      const cols = width < 600 ? 4 : 2;
      await page.setViewportSize({ width: cols * (width < 600 ? 390 : 1290), height: 900 });
      await page.setContent('<body style="margin:0;background:#888;display:grid;grid-template-columns:repeat(' + cols + ',auto);gap:10px;font:14px sans-serif">' +
        files.map(([n, f]) => `<figure style="margin:0"><figcaption>${n}</figcaption><img src="data:image/png;base64,${fs.readFileSync(f).toString('base64')}"></figure>`).join('') + '</body>');
      await page.screenshot({ path: path.join(shotsDir, `sheet-${scheme}-${width}.png`), fullPage: true });
      await ctx.close();
    }
  }
  console.log('screenshots → ' + shotsDir);
}

(async () => {
  const browser = await chromium.launch();
  let failed = 0;
  for (const [name, fn, opts] of checks) {
    const context = await browser.newContext({
      locale: opts.locale || 'ru-RU', colorScheme: opts.colorScheme || 'light',
      viewport: { width: opts.width || 1280, height: 800 }
    });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (m) => {
      // Google Fonts may be unreachable offline; that is a network note, not a site error.
      if (m.type() === 'error' && !/fonts\.g|net::ERR/.test(m.text()) && !opts.expectConsoleError) errors.push(m.text());
    });
    try {
      await fn(page);
      assert.deepEqual(errors, [], 'console errors');
      console.log('ok   ' + name);
    } catch (e) {
      failed++;
      console.log('FAIL ' + name + '\n     ' + String(e.message).split('\n')[0]);
    }
    await context.close();
  }
  if (shotsDir) await shots(browser);
  await browser.close();
  console.log(failed ? `${failed} failed` : 'all passed');
  process.exit(failed ? 1 : 0);
})();
