const test = require('node:test');
const assert = require('node:assert/strict');
require('../js/quiz.js');
require('../js/views/vocab.js');
const { vocabDeck } = globalThis.ECA;

const words = ['uno', 'dos', 'tres', 'cuatro', 'cinco'].map((es) => ({ es, ru: es, en: es }));
const learnedSet = (...list) => (es) => list.includes(es);
const zero = () => 0;

test('deck holds only unlearned words, shuffled; M is the topic size', () => {
  const deck = vocabDeck.create(words, { isLearned: learnedSet('dos'), rng: zero });
  // Fisher–Yates with rng()=0 over [uno, tres, cuatro, cinco], worked by hand
  assert.deepEqual(vocabDeck.order(deck), ['tres', 'cuatro', 'cinco', 'uno']);
  assert.equal(vocabDeck.current(deck), 'tres');
  assert.equal(vocabDeck.remaining(deck), 4);
  assert.equal(deck.total, 5);
  assert.equal(vocabDeck.isDone(deck), false);
});

test('"Повторить" sends the current word to the end; "Знаю" removes it; the deck ends empty', () => {
  const start = vocabDeck.create(words.slice(0, 3), { rng: zero }); // [dos, tres, uno]
  const again = vocabDeck.again(start);
  assert.deepEqual(vocabDeck.order(again), ['tres', 'uno', 'dos']);
  assert.equal(vocabDeck.remaining(again), 3);
  assert.deepEqual(vocabDeck.order(start), ['dos', 'tres', 'uno'], 'input deck is not mutated');

  let d = vocabDeck.know(again);
  assert.deepEqual(vocabDeck.order(d), ['uno', 'dos']);
  assert.equal(vocabDeck.remaining(d), 2);
  d = vocabDeck.know(vocabDeck.know(d));
  assert.equal(vocabDeck.isDone(d), true);
  assert.equal(vocabDeck.current(d), null);
  assert.equal(d.total, 3);
  assert.equal(vocabDeck.isDone(vocabDeck.again(d)), true, 'again on an empty deck is harmless');
});

test('all words learned → the deck is empty; "Повторить все заново" takes every word back', () => {
  const all = learnedSet('uno', 'dos', 'tres', 'cuatro', 'cinco');
  assert.equal(vocabDeck.isDone(vocabDeck.create(words, { isLearned: all, rng: zero })), true);
  const again = vocabDeck.create(words, { isLearned: all, all: true, rng: zero });
  assert.equal(vocabDeck.remaining(again), 5);
  assert.equal(again.total, 5);
});

test('quiz session: first pick counts, a repeat click changes nothing, result lists mistakes', () => {
  const { vocabQuiz } = globalThis.ECA;
  const qs = [{ answer: 0 }, { answer: 2 }, { answer: 1 }];
  let s = vocabQuiz.start();
  assert.equal(vocabQuiz.answered(s), false);
  assert.equal(vocabQuiz.next(s).index, 0, 'cannot skip an unanswered question');

  s = vocabQuiz.pick(s, qs, 0);
  assert.equal(vocabQuiz.answered(s), true);
  assert.equal(vocabQuiz.pick(s, qs, 3), s, 'second click after answering is ignored');
  s = vocabQuiz.next(s);
  s = vocabQuiz.next(vocabQuiz.pick(s, qs, 1));        // wrong
  assert.equal(vocabQuiz.finished(s, qs), false);
  s = vocabQuiz.next(vocabQuiz.pick(s, qs, 1));        // right
  assert.equal(vocabQuiz.finished(s, qs), true);
  assert.deepEqual(vocabQuiz.result(s, qs), { score: 2, total: 3, mistakes: [1] });
});
