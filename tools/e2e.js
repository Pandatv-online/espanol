#!/usr/bin/env node
// Dev-only smoke check of the shell in a real browser (file://).
// Run: npx -y -p playwright@1.63.0 node tools/e2e.js
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

const checks = [];
const check = (name, fn) => checks.push([name, fn]);

check('first visit: language from browser, A1 selected, hash #/a1', async (page) => {
  await page.goto(url);
  assert.equal(await page.getAttribute('html', 'lang'), 'ru');
  assert.equal(new URL(page.url()).hash, '#/a1');
  assert.equal(await page.getAttribute('[data-level="A1"]', 'aria-pressed'), 'true');
  assert.equal(await page.locator('.level-tile[aria-pressed="true"]').count(), 1);
});

check('level click: B1 in address, pressed, remembered after reload', async (page) => {
  await page.goto(url + '#/a1');
  await page.click('[data-level="B1"]');
  await page.waitForFunction(() => location.hash === '#/b1');
  assert.equal(await page.getAttribute('[data-level="B1"]', 'aria-pressed'), 'true');
  await page.goto(url);
  assert.equal(new URL(page.url()).hash, '#/b1');
});

check('language switch keeps the screen and is remembered', async (page) => {
  await page.goto(url + '#/a1/grammar/a1-presente-ar');
  await page.click('[data-lang="en"]');
  assert.equal(await page.getAttribute('html', 'lang'), 'en');
  assert.equal(new URL(page.url()).hash, '#/a1/grammar/a1-presente-ar');
  assert.match(await page.textContent('.backlink'), /A1 · Grammar/);
  await page.reload();
  assert.equal(await page.getAttribute('html', 'lang'), 'en');
  assert.match(await page.textContent('#reset-progress'), /Reset progress/);
});

check('theme toggle sets data-theme and survives reload', async (page) => {
  await page.goto(url + '#/a1');
  await page.click('#theme-toggle');
  assert.equal(await page.getAttribute('html', 'data-theme'), 'dark');
  await page.reload();
  assert.equal(await page.getAttribute('html', 'data-theme'), 'dark');
  assert.equal(await page.getAttribute('#theme-toggle', 'aria-pressed'), 'true');
});

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

check('footer: Telegram and verzo.pro links, reset keeps language', async (page) => {
  await page.goto(url + '#/a1');
  const tg = page.locator('.site-footer a.tg-link');
  assert.equal(await tg.getAttribute('href'), 'https://t.me/espanolconamigos');
  assert.equal(await tg.getAttribute('target'), '_blank');
  assert.equal(await tg.getAttribute('rel'), 'noopener');
  assert.equal(await page.getAttribute('.footer-meta__by a', 'href'), 'https://verzo.pro');
  await page.click('[data-lang="en"]');
  page.once('dialog', (d) => d.accept());
  await page.click('#reset-progress');
  assert.equal(await page.getAttribute('html', 'lang'), 'en');
  assert.equal(await page.locator('#storage-note').isHidden(), true);
});

(async () => {
  const browser = await chromium.launch();
  let failed = 0;
  for (const [name, fn] of checks) {
    const context = await browser.newContext({ locale: 'ru-RU', colorScheme: 'light' });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    try {
      await fn(page);
      assert.deepEqual(errors, []);
      console.log('ok   ' + name);
    } catch (e) {
      failed++;
      console.log('FAIL ' + name + '\n     ' + String(e.message).split('\n')[0]);
    }
    await context.close();
  }
  await browser.close();
  console.log(failed ? `${failed} failed` : 'all passed');
  process.exit(failed ? 1 : 0);
})();
