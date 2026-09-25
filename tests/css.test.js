// Style rules checked on the stylesheets themselves: colours come only from tokens, both dark blocks agree.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const read = (f) => fs.readFileSync(path.join(__dirname, '..', 'css', f), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
const base = read('base.css');
const COLOR = /#[0-9a-f]{3,8}\b|\b(?:rgba?|hsla?)\(/i;

// Declarations of the first rule whose selector (optionally inside `@media prefix`) is `selector`.
function block(css, selector) {
  const at = css.indexOf(selector + ' {');
  assert.ok(at >= 0, 'no block ' + selector);
  const body = css.slice(at + selector.length + 2, css.indexOf('}', at));
  return body.split(';').map((d) => d.trim().replace(/\s+/g, ' ')).filter(Boolean);
}

test('the two dark-theme blocks (system and toggle) declare the same tokens', () => {
  assert.deepEqual(block(base, ':root:not([data-theme="light"])').sort(), block(base, ':root[data-theme="dark"]').sort());
});

test('component rules use colour tokens only: no hex / rgb() literals outside the token blocks', () => {
  const tokenBlocks = /:root(?::not\(\[data-theme="light"\]\)|\[data-theme="dark"\])?\s*\{[^}]*\}/g;
  for (const f of ['base.css', 'vocab.css', 'grammar.css']) {
    const rules = read(f).replace(tokenBlocks, '').split('}');
    const bad = rules.filter((r) => COLOR.test(r)).map((r) => r.trim().split('{')[0].trim());
    assert.deepEqual(bad, [], f);
  }
});

// Hex literals shared by two or more tokens of one block: each group should be one literal plus var() references.
function duplicateLiterals(selector) {
  const literals = {};
  block(base, selector).forEach((d) => {
    const m = d.match(/^(--[\w-]+): (#[0-9a-f]{6})$/i);
    if (m) (literals[m[2].toLowerCase()] = literals[m[2].toLowerCase()] || []).push(m[1]);
  });
  return Object.entries(literals).filter(([, names]) => names.length > 1);
}

test('tokens with the same value in the light theme refer to one another', () => {
  assert.deepEqual(duplicateLiterals(':root'), []);
});

test('tokens with the same value in the dark theme refer to one another', () => {
  assert.deepEqual(duplicateLiterals(':root[data-theme="dark"]'), []);
});

test('the topic hero gets its navy band with the hatching from one rule, like the site header', () => {
  const rules = base.split('}').map((r) => r.split('{')).filter((r) => r.length === 2);
  const heroRules = rules.filter(([sel]) => sel.split(',').some((s) => s.trim() === '.hero'));
  const painting = heroRules.filter(([, body]) => /(^|;)\s*(background|background-color|background-image|color)\s*:/.test(body));
  assert.equal(painting.length, 1, 'rules painting .hero: ' + painting.map(([s]) => s.trim()).join(' | '));
  assert.match(painting[0][0], /\.site-header/);
  assert.match(painting[0][1], /repeating-linear-gradient/);
});
