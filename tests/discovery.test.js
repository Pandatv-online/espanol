const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { generate } = require('../tools/generate-discovery');

const root = path.join(__dirname, '..');
const siteUrl = fs.readFileSync(path.join(root, 'tools', 'site-url.txt'), 'utf8').trim();

test('published discovery files match the content data and have crawlable URLs', () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'eca-discovery-'));
  try {
    const result = generate(siteUrl, tmp);
    const sitemap = fs.readFileSync(path.join(tmp, 'sitemap.xml'), 'utf8');
    const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
    assert.equal(urls.length, result.urlCount);
    assert.equal(new Set(urls).size, urls.length);
    assert.ok(urls.every((url) => url.startsWith(siteUrl) && !url.includes('#')));
    for (const url of urls.slice(1)) {
      const rel = url.slice(siteUrl.length);
      const html = fs.readFileSync(path.join(tmp, rel), 'utf8');
      assert.match(html, new RegExp(`<link rel="canonical" href="${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}">`));
      assert.match(html, /<h1>/);
      assert.doesNotMatch(html, /<script\b/);
      for (const match of html.matchAll(/\bhref="([^"]+)"/g)) {
        const target = new URL(match[1], url);
        if (target.origin !== new URL(siteUrl).origin) continue;
        const targetRel = target.href.split('#')[0].slice(siteUrl.length) || 'index.html';
        assert.ok(fs.existsSync(path.join(root, targetRel)), `broken link in ${rel}: ${match[1]}`);
      }
    }
    const files = ['sitemap.xml', 'robots.txt', 'llms.txt', 'llms-full.txt', ...urls.slice(1).map((url) => url.slice(siteUrl.length))];
    for (const rel of files) {
      assert.equal(fs.readFileSync(path.join(root, rel), 'utf8'), fs.readFileSync(path.join(tmp, rel), 'utf8'), `${rel} must be regenerated`);
    }
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});
