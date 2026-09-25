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

test('tokens with the same value in the light theme refer to one another', () => {
  const light = block(base, ':root').join(';\n');
  const literals = {};
  (light.match(/--[\w-]+: #[0-9a-f]{6}/gi) || []).forEach((d) => {
    const [name, value] = d.split(': ');
    (literals[value.toLowerCase()] = literals[value.toLowerCase()] || []).push(name);
  });
  const dup = Object.entries(literals).filter(([, names]) => names.length > 1);
  assert.deepEqual(dup, []);
});
