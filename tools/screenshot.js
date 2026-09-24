#!/usr/bin/env node
// Dev-only: screenshots of the site via Playwright (not part of the site).
// Run: npx -y -p playwright@1.63.0 node tools/screenshot.js [outDir] [hash ...]
'use strict';
const path = require('node:path');
const fs = require('node:fs');
// `npx -p playwright@1.63.0` puts its node_modules/.bin on PATH; resolve the package from there.
function loadPlaywright() {
  try { return require('playwright'); } catch (e) { /* fall through */ }
  for (const dir of (process.env.PATH || '').split(path.delimiter)) {
    const mod = path.join(dir, '..', 'playwright');
    if (dir.endsWith(path.join('node_modules', '.bin')) && fs.existsSync(mod)) return require(mod);
  }
  throw new Error('Playwright not found: run via `npx -y -p playwright@1.63.0 node tools/screenshot.js`');
}
const { chromium } = loadPlaywright();

const outDir = process.argv[2] || path.join(__dirname, '..', 'shots');
const hashes = process.argv.slice(3);
const routes = hashes.length ? hashes : ['#/a1'];
const url = 'file://' + path.join(__dirname, '..', 'index.html');

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  let problems = 0;
  for (const scheme of ['light', 'dark']) {
    for (const width of [375, 1280]) {
      for (const hash of routes) {
        const page = await browser.newPage({ viewport: { width, height: 900 }, colorScheme: scheme, locale: 'ru-RU' });
        const errors = [];
        page.on('pageerror', (e) => errors.push(e.message));
        page.on('console', (m) => { if (m.type() === 'error' && !/fonts\.g/.test(m.text())) errors.push(m.text()); });
        await page.goto(url + hash);
        await page.waitForTimeout(400);
        const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        const name = `${hash.replace(/[#/]+/g, '_') || 'home'}-${scheme}-${width}.png`;
        await page.screenshot({ path: path.join(outDir, name), fullPage: true });
        const note = [overflow > 0 ? `HORIZONTAL OVERFLOW ${overflow}px` : '', errors.join(' | ')].filter(Boolean).join(' ; ');
        if (note) problems++;
        console.log(`${name}${note ? '  !! ' + note : ''}`);
        await page.close();
      }
    }
  }
  await browser.close();
  process.exit(problems ? 1 : 0);
})();
