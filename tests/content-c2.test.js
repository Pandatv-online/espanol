const test = require('node:test');
const assert = require('node:assert/strict');
require('../js/data.js');
require('../data/vocab-c2.js');
const { data } = globalThis.ECA;
const word = (topicId, es) => data.find('words', topicId).words.find((w) => w.es === es);

// Traps that only exist through English: the Russian note must say so, or it reads as nonsense.
test('c2-false-friends: English-only traps are named as such in the Russian note', () => {
  const englishTraps = ['embarazada', 'el/la pariente', 'la carpeta', 'el éxito', 'la librería', 'la fábrica',
    'molestar', 'sensible', 'realizar', 'la decepción'];
  for (const es of englishTraps) {
    assert.match(word('c2-false-friends', es).ru, /англ\./, es);
  }
});

// Each pair was a quiz with two right answers: meanings must not overlap inside one topic.
test('c2 slang and proverbs: entries with overlapping meanings are gone', () => {
  const tio = word('c2-slang-spain', 'tío/a'), chaval = word('c2-slang-spain', 'el chaval / la chavala');
  assert.doesNotMatch(chaval.ru, /парень/);
  assert.doesNotMatch(tio.ru + chaval.ru, /чувак[\s\S]*пацан|пацан[\s\S]*чувак/);
  const proverbs = data.find('words', 'c2-proverbs').words.map((w) => w.es);
  const early = proverbs.filter((es) => /^Camarón que se duerme|^A quien madruga/.test(es));
  assert.equal(early.length, 1, early.join(' | '));
});
