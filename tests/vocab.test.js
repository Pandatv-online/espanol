const test = require('node:test');
const assert = require('node:assert/strict');
require('../js/quiz.js');
require('../js/views/vocab.js');
const { vocabDeck, quiz } = globalThis.ECA;

const words = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho'].map((es) => ({ es, ru: es, en: es }));
const learnedSet = (...list) => (es) => list.includes(es);
const sorted = (arr) => [...arr].sort();

test('deck holds exactly the unlearned words; M is the topic size', () => {
  const deck = vocabDeck.create(words, { isLearned: learnedSet('dos', 'seis'), rng: quiz.seeded(1) });
  assert.deepEqual(sorted(vocabDeck.order(deck)), sorted(['uno', 'tres', 'cuatro', 'cinco', 'siete', 'ocho']));
  assert.equal(vocabDeck.current(deck), vocabDeck.order(deck)[0]);
  assert.equal(vocabDeck.remaining(deck), 6);
  assert.equal(deck.total, 8);
  assert.equal(vocabDeck.isDone(deck), false);
});

test('deck is shuffled: another random source gives another order', () => {
  const orders = new Set();
  for (let seed = 1; seed <= 5; seed++) {
    orders.add(vocabDeck.order(vocabDeck.create(words, { rng: quiz.seeded(seed) })).join(','));
  }
  assert.ok(orders.size > 1, 'five seeds, one order');
  const same = (seed) => vocabDeck.order(vocabDeck.create(words, { rng: quiz.seeded(seed) }));
  assert.deepEqual(same(9), same(9), 'one seed, one order');
});

test('"Повторить" sends the current word to the end; "Знаю" removes it; the deck ends empty', () => {
  const start = vocabDeck.create(words.slice(0, 3), { rng: quiz.seeded(3) });
  const [a, b, c] = vocabDeck.order(start);
  const again = vocabDeck.again(start);
  assert.deepEqual(vocabDeck.order(again), [b, c, a]);
  assert.equal(vocabDeck.remaining(again), 3);
  assert.deepEqual(vocabDeck.order(start), [a, b, c], 'input deck is not mutated');

  let d = vocabDeck.know(again);
  assert.deepEqual(vocabDeck.order(d), [c, a]);
  assert.equal(vocabDeck.remaining(d), 2);
  d = vocabDeck.know(vocabDeck.know(d));
  assert.equal(vocabDeck.isDone(d), true);
  assert.equal(vocabDeck.current(d), null);
  assert.equal(d.total, 3);
  assert.equal(vocabDeck.isDone(vocabDeck.again(d)), true, 'again on an empty deck is harmless');
});

test('"Назад" undoes the last step: its word is on top again, whatever the step was', () => {
  const start = vocabDeck.create(words.slice(0, 3), { rng: quiz.seeded(3) });
  const [a, b, c] = vocabDeck.order(start);
  assert.equal(vocabDeck.lastStep(start), null);
  assert.equal(vocabDeck.back(start), start, 'nothing to undo on a fresh deck');

  const known = vocabDeck.know(start, false);
  assert.deepEqual(vocabDeck.lastStep(known), { es: a, kind: 'know', wasLearned: false });
  const again = vocabDeck.again(known);                       // b goes to the end: [c, b]
  assert.deepEqual(vocabDeck.order(again), [c, b]);

  let d = vocabDeck.back(again);
  assert.deepEqual(vocabDeck.order(d), [b, c], 'the word sent to the end comes back to the top');
  d = vocabDeck.back(d);
  assert.deepEqual(vocabDeck.order(d), [a, b, c], 'the known word is back in the deck');
  assert.equal(vocabDeck.remaining(d), 3);
  assert.equal(vocabDeck.lastStep(d), null);
  assert.deepEqual(vocabDeck.order(again), [c, b], 'input deck is not mutated');

  const finished = vocabDeck.know(vocabDeck.know(vocabDeck.know(start)));
  assert.equal(vocabDeck.isDone(finished), true);
  assert.equal(vocabDeck.current(vocabDeck.back(finished)), c, 'back from the finished deck shows the last word');
  assert.equal(vocabDeck.know(vocabDeck.create([])).history.length, 0, 'no step on an empty deck');
});

test('all words learned → the deck is empty; "Повторить все заново" takes every word back', () => {
  const all = learnedSet(...words.map((w) => w.es));
  assert.equal(vocabDeck.isDone(vocabDeck.create(words, { isLearned: all })), true);
  const again = vocabDeck.create(words, { isLearned: all, all: true });
  assert.deepEqual(sorted(vocabDeck.order(again)), sorted(words.map((w) => w.es)));
  assert.equal(again.total, 8);
});

test('without ECA.quiz the deck fails loudly instead of staying unshuffled', () => {
  const saved = globalThis.ECA.quiz;
  delete globalThis.ECA.quiz;
  try {
    assert.throws(() => vocabDeck.create(words), /quiz\.js/);
  } finally {
    globalThis.ECA.quiz = saved;
  }
});
