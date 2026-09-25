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
// opts: { locale, colorScheme, width, reducedMotion, expectConsoleError }
const check = (name, fn, opts) => checks.push([name, fn, opts || {}]);

const WORDS = '#/a1/words/a1-greetings';
const GRAMMAR = '#/a1/grammar/a1-presente-ar';
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

// Opens the first tab of the topic that has a table block and waits until that tab is the selected one.
async function openGrammarTable(page, hash) {
  await page.goto(url + hash);
  const tab = await page.evaluate((id) => {
    const hit = ECA.data.find('grammar', id).tabs.find((x) => x.blocks.some((b) => b.type === 'table'));
    return hit ? hit.id : null;
  }, hash.split('/').pop());
  assert.ok(tab, hash + ': a tab with a table');
  await page.goto(url + hash + '/' + tab);
  await page.waitForSelector(`#tab-${tab}[aria-selected="true"]`);
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
  // Level steps are navigation: real links (Cmd/middle-click work), the chosen one is aria-current.
  assert.equal(await page.locator('nav.level-steps a.level-tile[href]').count(), 6);
  assert.equal(await page.getAttribute('[data-level="A1"]', 'aria-current'), 'page');
  assert.equal(await page.locator('.level-tile[aria-current="page"]').count(), 1);
  assert.equal(await page.getAttribute('[data-level="B1"]', 'href'), '#/b1');
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
  assert.equal(await page.getAttribute('[data-level="B1"]', 'aria-current'), 'page');
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
  assert.ok(await page.locator('.gblock').count() > 0, 'topic has an explanation');
  await openGrammarTable(page, GRAMMAR);
  assert.ok(await page.locator('#grammar-panel .table').count() > 0, 'topic has a table');
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

check('every word topic card on every level draws its Phosphor icon in the card colour', async (page) => {
  for (const lvl of ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']) {
    await page.goto(url + '#/' + lvl);
    const icons = await page.$$eval('.topic-card__icon', (spans) => spans.map((s) => {
      const svg = s.querySelector('svg.icon--topic');
      return { svg: !!svg, paths: svg ? svg.querySelectorAll('path').length : 0, text: s.textContent.trim(),
        color: getComputedStyle(s).color, bg: getComputedStyle(s).backgroundColor };
    }));
    assert.ok(icons.length >= 8, lvl + ': cards ' + icons.length);
    icons.forEach((ic, i) => {
      assert.ok(ic.svg && ic.paths >= 1 && ic.text === '', `${lvl} card ${i}: no svg icon`);
      assert.notEqual(ic.color, ic.bg, `${lvl} card ${i}: icon colour equals its background`);
    });
  }
}, { width: 375 });

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
  // The button shows the current theme; its accessible name starts with it and says what a click does.
  const toggle = () => page.evaluate(() => {
    const b = document.getElementById('theme-toggle');
    return [b.querySelector('.theme-toggle__icon').textContent, b.querySelector('.theme-toggle__text').textContent, b.getAttribute('aria-label')];
  });
  assert.deepEqual(await toggle(), ['☾', 'Тёмная', 'Тёмная тема — включить светлую']);
  await page.click('#theme-toggle');
  assert.equal(await page.getAttribute('html', 'data-theme'), 'light');
  assert.deepEqual(await toggle(), ['☀', 'Светлая', 'Светлая тема — включить тёмную']);
  await page.click('[data-lang="en"]');
  assert.deepEqual(await toggle(), ['☀', 'Light', 'Light theme — switch to dark']);
  await page.click('[data-lang="ru"]');
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

const tabState = (page) => page.$$eval('.grammar-tabs [role="tab"]', (bs) => bs.map((b) => [b.id, b.getAttribute('aria-selected'), b.querySelector('.tab__label').textContent]));

check('tabbed grammar: hero, numbered tabs with "Test" last, tab in the address, arrows, unknown tab → first', async (page) => {
  await page.goto(url + TABBED);
  assert.match(await page.textContent('.hero h1'), /Perfecto vs Indefinido/);
  assert.equal(await page.getAttribute('.hero h1', 'lang'), 'es');
  let tabs = await tabState(page);
  assert.deepEqual(tabs.map((t) => t[2]), ['Разница', 'Спряжение', 'Неправильные', 'Маркеры', 'Примеры', 'Тест']);
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

check('cards: after a click Space / Enter flip the card; ← goes back and undoes "know"; ↓ is "again"', async (page) => {
  await page.goto(url + WORDS);
  const word = () => page.textContent('.flashcard__word');
  const flipped = () => page.locator('.flashcard.is-flipped').count();
  const first = await word();
  assert.ok(await page.isDisabled('[data-action="back"]'), 'nothing to go back to yet');
  await page.click('[data-action="know"]');
  const second = await word();
  await page.keyboard.press('Space');
  assert.equal(await flipped(), 1, 'Space flips the card, not "know" again');
  await page.keyboard.press('Enter');
  assert.equal(await flipped(), 0);
  assert.equal(await word(), second);
  assert.equal(await learnedCount(page), 1);
  await page.keyboard.press('ArrowLeft');
  assert.equal(await word(), first, '← shows the previous word');
  assert.equal(await learnedCount(page), 0, '← undoes its "know"');
  await page.keyboard.press('ArrowDown');
  assert.equal(await word(), second);
  await page.keyboard.press('ArrowLeft');
  assert.equal(await word(), first, '← after "again" brings that word back');
  assert.equal(await learnedCount(page), 0);
});

check('tests take keys right after the "Test" tab is clicked; Space goes on like Enter', async (page) => {
  const answered = (s) => page.locator(s + ' .option.is-correct').count();
  await page.goto(url + WORDS);
  await page.click('#tab-quiz');
  await page.waitForSelector('.quiz .option');
  assert.equal(await page.evaluate(() => document.activeElement.id), 'tab-quiz');
  await page.keyboard.press('1');
  assert.equal(await answered('.quiz'), 1, 'digit with focus on the tab');
  await page.keyboard.press(' ');
  assert.match(await page.textContent('.quiz__count'), /^Вопрос 2 /);
  await page.keyboard.press('2');
  await page.keyboard.press('Enter');
  assert.match(await page.textContent('.quiz__count'), /^Вопрос 3 /);
  await page.click('.quiz .option');
  await page.keyboard.press(' ');
  assert.match(await page.textContent('.quiz__count'), /^Вопрос 4 /, 'Space on "Next" goes one question on');

  await page.goto(url + GRAMMAR_TEST);
  await page.locator('.grammar-quiz .btn--primary').click();
  await page.focus('#tab-test');
  await page.keyboard.press('1');
  assert.equal(await answered('.grammar-quiz'), 1);
  await page.keyboard.press(' ');
  assert.match(await page.textContent('.grammar-quiz__progress'), /^Вопрос 2 /);
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
        assert.equal(await page.locator(kind === 'words' ? '.flashcard' : '.gblock').count() > 0, true, `${id} content`);
      }
    }
  }
});

// ---------- task 19: strict schema, review defects ----------

// WCAG contrast of an element's text against the first opaque background up the tree (text opacity blended in).
const CONTRAST_FN = `(node) => {
  const rgb = (s) => (s.match(/[\\d.]+/g) || []).map(Number);
  const bgOf = (n) => { for (; n; n = n.parentElement) { const c = rgb(getComputedStyle(n).backgroundColor); if (c.length === 3 || c[3] === 1) return c.slice(0, 3); } return [255, 255, 255]; };
  const cs = getComputedStyle(node);
  const bg = bgOf(node);
  let fg = rgb(cs.color); const a = (fg[3] == null ? 1 : fg[3]) * Number(cs.opacity);
  fg = fg.slice(0, 3).map((v, i) => v * a + bg[i] * (1 - a));
  const lum = (c) => { const [r, g, b] = c.map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  const [l1, l2] = [lum(fg), lum(bg)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}`;

check('conjugation endings stand out from the stem and the card in all five colours, light and dark', async (page) => {
  await page.goto(url + TABBED);
  for (const theme of ['light', 'dark']) {
    const rows = await page.evaluate(([theme, fn]) => {
      document.documentElement.setAttribute('data-theme', theme);
      const contrast = eval(fn);
      const L = (s) => ({ ru: s, en: s });
      const node = ECA.grammarBlocks.render({ type: 'conj', verbs: ['blue', 'amber', 'teal', 'coral', 'purple'].map((c) =>
        ({ inf: 'hablar', variants: [{ label: L(c), color: c, rows: [['yo', 'habl<b>é</b>']] }] })) }, 'ru');
      document.getElementById('grammar-panel').appendChild(node);
      const out = [...node.querySelectorAll('.form-row__word')].map((w) => {
        const b = w.querySelector('b');
        return [w.parentElement.parentElement.className, contrast(b), getComputedStyle(w).color, getComputedStyle(b).color];
      });
      node.remove();
      return out;
    }, [theme, CONTRAST_FN]);
    for (const [cls, r, stem, ending] of rows) {
      assert.ok(r >= 4.5, `${theme} ${cls}: ending ${r.toFixed(2)}:1`);
      assert.notEqual(stem, ending, `${theme} ${cls}: ending has the stem's colour`);
    }
  }
});

check('highlighted words in examples: ≥ 4.5:1 on the card and clearly apart from the sentence (all colours, light and dark)', async (page) => {
  await page.goto(url + TABBED);
  for (const theme of ['light', 'dark']) {
    const rows = await page.evaluate(([theme, fn]) => {
      document.documentElement.setAttribute('data-theme', theme);
      const contrast = eval(fn);
      const node = ECA.grammarBlocks.render({ type: 'examples', items: [null, 'blue', 'amber', 'teal', 'coral', 'purple'].map((c) =>
        ({ es: 'Ayer <b>comí</b> paella.', ru: 'Вчера я ел паэлью.', en: 'I ate paella yesterday.', color: c || undefined })) }, 'ru');
      document.getElementById('grammar-panel').appendChild(node);
      // The sentence's own colour stands in as the "background" to measure how far the highlight is from it.
      const vs = (b) => { const p = b.parentElement; const bg = p.style.backgroundColor; p.style.backgroundColor = getComputedStyle(p).color;
        const r = contrast(b); p.style.backgroundColor = bg; return r; };
      const out = [...node.querySelectorAll('.ex-row__es b')].map((b) => [b.closest('.ex-row').className, contrast(b), vs(b)]);
      node.remove();
      return out;
    }, [theme, CONTRAST_FN]);
    for (const [cls, onCard, fromText] of rows) {
      assert.ok(onCard >= 4.5, `${theme} ${cls}: ${onCard.toFixed(2)}:1 on the card`);
      assert.ok(fromText >= 1.7, `${theme} ${cls}: only ${fromText.toFixed(2)}:1 apart from the sentence`);
    }
  }
});

check('rule-card labels have contrast ≥ 4.5:1 in all five colours, light and dark', async (page) => {
  await page.goto(url + TABBED);
  for (const theme of ['light', 'dark']) {
    const ratios = await page.evaluate(([theme, fn]) => {
      document.documentElement.setAttribute('data-theme', theme);
      const contrast = eval(fn);
      const L = (s) => ({ ru: s, en: s });
      const node = ECA.grammarBlocks.render({ type: 'rules', items: ['blue', 'amber', 'teal', 'coral', 'purple'].map((c) =>
        ({ color: c, label: L('Метка'), title: L(c), body: L('текст') })) }, 'ru');
      document.getElementById('grammar-panel').appendChild(node);
      return [...node.querySelectorAll('.rule-card__label')].map((n) => [n.parentElement.className, contrast(n)]);
    }, [theme, CONTRAST_FN]);
    for (const [cls, r] of ratios) assert.ok(r >= 4.5, `${theme} ${cls}: ${r.toFixed(2)}:1`);
  }
});

check('hero: tokens of .hero, square bottom only above tabs, no focus ring on the programmatically focused title', async (page) => {
  await page.goto(url + '#/a2');
  await page.evaluate((h) => { location.hash = h; }, TABBED);
  await page.waitForFunction(() => document.activeElement && document.activeElement.matches('.hero__title'));
  const r = await page.evaluate(() => {
    const hero = document.querySelector('.grammar-hero');
    const plain = document.createElement('header');
    plain.className = 'hero';
    document.getElementById('screen').appendChild(plain);
    const h = getComputedStyle(hero), p = getComputedStyle(plain), t = getComputedStyle(document.activeElement);
    return { active: document.activeElement.className, outline: t.outlineStyle, heroBottom: h.borderBottomLeftRadius,
      plainBottom: p.borderBottomLeftRadius, sameBg: h.backgroundColor === p.backgroundColor, plainBg: p.backgroundColor };
  });
  assert.match(r.active, /hero__title/, 'focus lands on the hero title');
  assert.equal(r.outline, 'none', 'no focus ring after load');
  assert.equal(r.heroBottom, '0px', 'hero above the tab strip: square bottom');
  assert.notEqual(r.plainBottom, '0px', 'a hero alone keeps round corners');
  assert.ok(r.sameBg && r.plainBg !== 'rgba(0, 0, 0, 0)', '.hero itself carries the navy band');
});

check('tab strip with 6 tabs at 320px: the chosen tab is never clipped, each tab named by its label; level page: Grammar before Words', async (page) => {
  await page.goto(url + TABBED);
  const ids = await page.$$eval('.grammar-tabs [role="tab"]', (bs) => bs.map((b) => b.id));
  assert.equal(ids.length, 6);
  for (const id of ids) {
    await page.click('#' + id);
    const r = await page.evaluate((id) => {
      const strip = document.querySelector('.grammar-tabs'), box = strip.getBoundingClientRect();
      const x = document.getElementById(id).getBoundingClientRect();
      const small = [...strip.children].filter((b) => b.offsetWidth < 44 || b.offsetHeight < 44).map((b) => b.id);
      return { inside: x.left >= box.left - 0.5 && x.right <= box.right + 0.5, small, pageOver: document.documentElement.scrollWidth - document.documentElement.clientWidth };
    }, id);
    assert.ok(r.inside, `${id}: the selected tab is fully visible in the strip`);
    assert.deepEqual(r.small, [], 'every tab ≥ 44×44');
    assert.ok(r.pageOver <= 0, 'the page does not scroll sideways');
  }
  for (const name of ['Разница', 'Спряжение', 'Неправильные', 'Маркеры', 'Примеры', 'Тест']) {
    assert.equal(await page.getByRole('tab', { name, exact: true }).count(), 1, `tab named «${name}»`);
  }
  await page.goto(url + '#/a1');
  assert.deepEqual(await page.$$eval('.topic-section h2', (hs) => hs.map((h) => h.firstChild.textContent.trim())), ['Грамматика', 'Слова']);
}, { width: 320 });

check('a started test survives a tab change through location.hash and a language switch', async (page) => {
  await page.goto(url + TABBED + '/test');
  await page.locator('.grammar-quiz .btn--primary').click();
  await page.locator('.grammar-quiz .option').first().click();
  await page.locator('[data-next]').click();
  const second = await page.textContent('.grammar-question__es');
  await page.evaluate((h) => { location.hash = h; }, TABBED + '/conj');
  await page.waitForSelector('#tab-conj[aria-selected="true"]');
  await page.evaluate((h) => { location.hash = h; }, TABBED + '/test');
  await page.waitForSelector('.grammar-quiz__progress');
  assert.match(await page.textContent('.grammar-quiz__progress'), /Вопрос 2 из 10/);
  assert.equal(await page.textContent('.grammar-question__es'), second, 'same question');
  await page.click('[data-lang="en"]');
  assert.match(await page.textContent('.grammar-quiz__progress'), /Question 2 of 10/);
  assert.equal(await page.textContent('.grammar-question__es'), second, 'same question after the language switch');
});

check('grammar blocks escape dangerous markup from data', async (page) => {
  await page.goto(url + TABBED);
  const out = await page.evaluate(() => {
    const bad = '<a href="https://x.test">link</a> <script>window.pwned=1</script> <b onclick="window.pwned=2">form</b> <img src=x onerror="window.pwned=3">';
    const L = (s) => ({ ru: s, en: s });
    const blocks = [
      { type: 'text', body: L(bad) }, { type: 'text', color: 'amber', body: L([bad]) },
      { type: 'rules', items: [{ color: 'teal', title: L('t'), body: L(bad), es: bad }] },
      { type: 'triggers', items: [{ num: '1', title: L('t'), body: L(bad), phrases: [bad], ex: { es: bad, ru: bad, en: bad } }] },
      { type: 'conj', verbs: [{ inf: bad, variants: [{ label: bad, color: 'blue', rows: [['yo', bad]] }, { label: 'x', color: 'amber', rows: [['yo', bad]] }] }] },
      { type: 'table', head: ['', bad], rows: [[bad, bad]] }, { type: 'markers', groups: [{ title: L(bad), tags: [bad] }] },
      { type: 'examples', items: [{ es: bad, ru: bad, en: bad }] }, { type: 'tip', title: L(bad), body: L(bad) }
    ];
    return blocks.map((b) => {
      const node = ECA.grammarBlocks.render(b, 'ru');
      document.getElementById('grammar-panel').appendChild(node);
      return { type: b.type, tags: node.querySelectorAll('a, script, img').length,
        attrs: [...node.querySelectorAll('b, i, em, strong')].filter((x) => x.attributes.length).length,
        literal: node.textContent.includes('<script>'), pwned: window.pwned || 0 };
    });
  });
  for (const r of out) {
    assert.equal(r.tags, 0, `${r.type}: no <a>/<script>/<img> elements`);
    assert.equal(r.attrs, 0, `${r.type}: no attributes on <b>`);
    assert.ok(r.literal, `${r.type}: the markup is shown as text`);
    assert.equal(r.pwned, 0, `${r.type}: nothing ran`);
  }
});

check('markers without colour are neutral; a table without heading is a named region', async (page) => {
  await page.goto(url + TABBED);
  const r = await page.evaluate(() => {
    const L = (s) => ({ ru: s, en: s });
    const panel = document.getElementById('grammar-panel');
    const m = ECA.grammarBlocks.render({ type: 'markers', groups: [{ title: L('Союзы'), tags: ['aunque'] }] }, 'ru');
    const table = { type: 'table', head: ['', 'hablar', 'comer'], rows: [['yo', 'hablo', 'como']] };
    const tb = ECA.grammarBlocks.render(table, 'ru');
    const tbEn = ECA.grammarBlocks.render(table, 'en');
    panel.append(m, tb);
    const box = m.querySelector('.kw-box');
    const probe = document.createElement('div'); probe.style.background = 'var(--surface)'; panel.appendChild(probe);
    return { cls: box.className, bg: getComputedStyle(box).backgroundColor, surface: getComputedStyle(probe).backgroundColor,
      name: tb.querySelector('[role="region"]').getAttribute('aria-label'),
      nameEn: tbEn.querySelector('[role="region"]').getAttribute('aria-label') };
  });
  assert.equal(r.cls, 'kw-box', 'no colour class');
  assert.equal(r.bg, r.surface, 'neutral paper background');
  assert.equal(r.name, 'Таблица: hablar, comer', 'region named by its columns, in the language passed to render');
  assert.equal(r.nameEn, 'Table: hablar, comer', 'the same table rendered for English is named in English');
});

// Every topic, every tab, at 320px in the dark theme: no errors, no sideways scroll, mini-tabs switch, the test finishes.
check('all 28 grammar topics: every tab, mini-tabs and the test work (320px, dark)', async (page) => {
  await page.goto(url + '#/a1');
  const topics = await page.evaluate(() => ECA.data.levels().flatMap((l) => ECA.data.grammar(l.id).map((t) =>
    ({ hash: `#/${l.id.toLowerCase()}/grammar/${t.id}`, tabs: t.tabs.map((x) => x.id) }))));
  assert.equal(topics.length, 28);
  for (const t of topics) {
    await page.goto(url + t.hash);
    for (const id of t.tabs) {
      await page.click(`#tab-${id}`);
      await page.waitForSelector(`#tab-${id}[aria-selected="true"]`);
      assert.ok(await page.locator('#grammar-panel .gblock').count() > 0, `${t.hash}/${id}: blocks drawn`);
      await noHorizontalScroll(page, `${t.hash}/${id}`);
      const cards = page.locator('#grammar-panel .conj-card');
      for (let i = 0; i < await cards.count(); i++) {
        const card = cards.nth(i);
        const shown = () => card.locator('.conj-forms:not([hidden])').getAttribute('id');
        const before = await shown();
        await card.locator('.mini-tab').nth(1).click();
        assert.notEqual(await shown(), before, `${t.hash}/${id}: mini-tab switches card ${i}`);
      }
    }
    await page.click('#tab-test');
    const result = await finishGrammarQuiz(page);
    assert.match(result, /Результат: \d+ из \d+/, `${t.hash}: test finishes`);
    await noHorizontalScroll(page, `${t.hash}/test`);
  }
}, { width: 320, colorScheme: 'dark' });

check('EN interface: every grammar topic has English tab labels and hero line', async (page) => {
  await page.goto(url + '#/a1');
  const bad = await page.evaluate(async () => {
    const out = [];
    for (const l of ECA.data.levels()) for (const t of ECA.data.grammar(l.id)) {
      location.hash = `#/${l.id.toLowerCase()}/grammar/${t.id}`;
      // wait for this topic's own h1, so the previous topic's screen is never the one checked
      const title = t.hero.es.replace(/<[^>]*>/g, '');
      for (let i = 0; i < 200 && document.querySelector('h1.hero__title')?.textContent !== title; i++) await new Promise((r) => setTimeout(r, 10));
      if (document.querySelector('h1.hero__title')?.textContent !== title) { out.push(t.id + ': no h1'); continue; }
      const text = [...document.querySelectorAll('.tab__label, .hero__sub, #grammar-panel')].map((n) => n.textContent).join(' ');
      if (/[а-яё]/i.test(text)) out.push(t.id);
    }
    return out;
  });
  assert.deepEqual(bad, []);
}, { locale: 'en-US' });

check('1280px: every tab of every grammar topic holds its label with padding (no labels running together)', async (page) => {
  await page.goto(url + '#/a1');
  const hashes = await page.evaluate(() => ECA.data.levels().flatMap((l) => ECA.data.grammar(l.id).map((t) => `#/${l.id.toLowerCase()}/grammar/${t.id}`)));
  const tight = [];
  for (const hash of hashes) {
    await page.goto(url + hash);
    await page.waitForSelector('.tabs .tab');
    tight.push(...(await page.$$eval('.tabs .tab', (ts, h) => ts.filter((t) => t.scrollWidth > t.clientWidth)
      .map((t) => `${h}: «${t.textContent.trim()}» +${t.scrollWidth - t.clientWidth}px`), hash)));
  }
  assert.equal(tight.length, 0, 'labels overflow their tab: ' + tight.join(' | '));
}, { width: 1280 });

check('4-column tables fit a 375px screen without scrolling inside', async (page) => {
  await page.goto(url + '#/a1');
  const topics = await page.evaluate(() => ECA.data.levels().flatMap((l) => ECA.data.grammar(l.id).flatMap((t) =>
    t.tabs.filter((x) => x.blocks.some((b) => b.type === 'table' && b.head.length <= 4)).map((x) => `#/${l.id.toLowerCase()}/grammar/${t.id}/${x.id}`))));
  const over = [];
  for (const hash of topics) {
    await page.goto(url + hash);
    await page.waitForSelector('#grammar-panel .gblock');
    over.push(...(await page.$$eval('#grammar-panel .table-wrap', (ws, h) => ws
      .filter((w) => w.querySelector('tr').children.length <= 4 && w.scrollWidth > w.clientWidth)
      .map((w) => `${h}: ${w.scrollWidth - w.clientWidth}px`), hash)));
  }
  assert.deepEqual(over, []);
}, { width: 375 });

// ---------- motion: drawn outline, scroll parallax ----------

// State of the drawn outline inside `selector` (first match): two paths, their dash offset and end points.
const outlineOf = (page, selector) => page.$eval(selector, (node) => {
  const paths = [...node.querySelectorAll(':scope > .outline-draw path')];
  const box = node.getBoundingClientRect();
  const at = (p, t) => { if (!p.getAttribute('d')) return null; const q = p.getPointAtLength(p.getTotalLength() * t); return [q.x / box.width, q.y / box.height]; };
  return {
    count: paths.length,
    offsets: paths.map((p) => parseFloat(getComputedStyle(p).strokeDashoffset)),
    ends: paths.map((p) => [at(p, 0), at(p, 1)])
  };
});
const settle = (page) => page.waitForTimeout(900);

check('hover draws the outline: two lines from opposite corners meet; leaving erases it', async (page) => {
  await page.goto(url + '#/a1');
  for (const sel of ['.topic-card', '.topic-row', '.level-tile:not([aria-current])']) {
    assert.deepEqual((await outlineOf(page, sel)).offsets, [1, 1], sel + ': hidden before hover');
    await page.hover(sel);
    await settle(page);
    const o = await outlineOf(page, sel);
    assert.equal(o.count, 2, sel + ': two lines');
    assert.deepEqual(o.offsets, [0, 0], sel + ': both lines fully drawn');
    // Line A runs from the top-left corner to the bottom-right one, line B back: together they close the outline.
    const [[a0, a1], [b0, b1]] = o.ends;
    assert.ok(a0[0] < 0.3 && a0[1] < 0.5 && a1[0] > 0.7 && a1[1] > 0.5, sel + ': line A top-left → bottom-right ' + JSON.stringify(o.ends[0]));
    assert.deepEqual(b0.map((v) => v.toFixed(2)), a1.map((v) => v.toFixed(2)), sel + ': line B starts where A ends');
    assert.deepEqual(b1.map((v) => v.toFixed(2)), a0.map((v) => v.toFixed(2)), sel + ': line B ends where A starts');
    await page.mouse.move(1, 1);
    await settle(page);
    assert.deepEqual((await outlineOf(page, sel)).offsets, [1, 1], sel + ': erased after leaving');
  }
  const current = await page.$eval('.level-tile[aria-current] > .outline-draw', (s) => getComputedStyle(s).display);
  assert.equal(current, 'none', 'the chosen level (filled amber) draws no outline');
});

check('keyboard focus draws the outline too', async (page) => {
  await page.goto(url + '#/a1');
  let onRow = false;
  for (let i = 0; i < 40 && !onRow; i++) {
    await page.keyboard.press('Tab');
    onRow = await page.evaluate(() => document.activeElement.classList.contains('topic-row'));
  }
  assert.ok(onRow, 'Tab reaches a grammar row');
  await settle(page);
  assert.deepEqual((await outlineOf(page, '.topic-row:focus')).offsets, [0, 0]);
});

// Background offset of the hatching and the lag of the hero title as the band scrolls away.
const parallax = (page, sel) => page.$eval(sel, (n) => ({
  bg: getComputedStyle(n).backgroundPositionY,
  title: n.querySelector('.hero__title') ? getComputedStyle(n.querySelector('.hero__title')).transform : null,
  animated: n.getAnimations().length
}));

check('scroll parallax: the hatching of the header and hero drifts, the hero title lags behind', async (page) => {
  await page.goto(url + TABBED);
  const top = await parallax(page, '.hero');
  const headTop = await parallax(page, '.site-header');
  assert.equal(top.animated, 1, 'hero hatching is scroll-driven');
  await page.evaluate(() => {
    const hero = document.querySelector('.hero');
    window.scrollTo(0, hero.getBoundingClientRect().top + scrollY + hero.offsetHeight / 2);
  });
  await page.waitForTimeout(100);
  const mid = await parallax(page, '.hero');
  assert.notEqual(mid.bg, top.bg, 'hero hatching moved');
  assert.notEqual(mid.title, top.title, 'hero title lags');
  assert.notEqual((await parallax(page, '.site-header')).bg, headTop.bg, 'header hatching moved');
  await noHorizontalScroll(page, 'parallax');
}, { width: 375 });

check('reduced motion: no parallax, the outline appears at once', async (page) => {
  await page.goto(url + TABBED);
  assert.equal((await parallax(page, '.hero')).animated, 0, 'hero');
  assert.equal((await parallax(page, '.site-header')).animated, 0, 'header');
  await page.goto(url + '#/a1');
  await page.hover('.topic-card');
  await page.waitForTimeout(50);
  assert.deepEqual((await outlineOf(page, '.topic-card')).offsets, [0, 0]);
}, { reducedMotion: 'reduce' });

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
      locale: opts.locale || 'ru-RU', colorScheme: opts.colorScheme || 'light', reducedMotion: opts.reducedMotion || 'no-preference',
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
