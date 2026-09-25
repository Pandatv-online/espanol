const test = require('node:test');
const assert = require('node:assert/strict');
require('../js/i18n.js');
const { i18n } = globalThis.ECA;

test('detect: Russian-family browser languages give ru', () => {
  for (const tag of ['ru', 'ru-RU', 'uk-UA', 'be', 'kk-KZ']) {
    assert.equal(i18n.detect([tag, 'en-US']), 'ru', tag);
  }
});

test('detect: anything else, or an empty list, gives en', () => {
  assert.equal(i18n.detect(['en-US', 'ru-RU']), 'en');
  assert.equal(i18n.detect(['es-ES']), 'en');
  assert.equal(i18n.detect(['bg']), 'en');
  assert.equal(i18n.detect([]), 'en');
  assert.equal(i18n.detect(undefined), 'en');
});

test('t: strings follow the active language, with {param} substitution', () => {
  i18n.add({ ru: { 'x.hello': 'Привет, {name}!' }, en: { 'x.hello': 'Hi, {name}!' } });
  i18n.setLang('ru');
  assert.equal(i18n.t('x.hello', { name: 'Ана' }), 'Привет, Ана!');
  i18n.setLang('en');
  assert.equal(i18n.t('x.hello', { name: 'Ana' }), 'Hi, Ana!');
});

test('pick and onChange follow setLang', () => {
  const seen = [];
  i18n.onChange((l) => seen.push(l));
  i18n.setLang('ru');
  assert.equal(i18n.lang(), 'ru');
  assert.equal(i18n.pick({ ru: 'слово', en: 'word' }), 'слово');
  i18n.setLang('en');
  assert.equal(i18n.pick({ ru: 'слово', en: 'word' }), 'word');
  assert.deepEqual(seen, ['ru', 'en']);
});

test('pick: an explicit language wins over the active one; strings and lists pass through', () => {
  i18n.setLang('ru');
  const v = { ru: 'Разница', en: 'Difference' };
  assert.equal(i18n.pick(v), 'Разница');
  assert.equal(i18n.pick(v, 'en'), 'Difference');
  assert.equal(i18n.pick({ ru: 'только', en: '' }, 'en'), 'только');
  assert.equal(i18n.pick('hablar', 'en'), 'hablar');
  assert.deepEqual(i18n.pick({ ru: ['а'], en: ['b'] }, 'en'), ['b']);
});
