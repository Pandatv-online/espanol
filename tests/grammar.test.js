const test = require('node:test');
const assert = require('node:assert/strict');
require('../js/quiz.js');
require('../js/store.js');
const { quiz, store } = globalThis.ECA;

// Three questions, the right answer is at index 1, 0, 2.
const qs = [{ answer: 1 }, { answer: 0 }, { answer: 2 }];

function memoryStore() {
  const m = new Map();
  store._setBackend({ getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: (k) => m.delete(k) });
  return store;
}

// Answers every question with `picks` and finishes the attempt.
function play(picks, key) {
  let a = quiz.attempt(1);
  picks.forEach((p) => { a.session = quiz.session.next(quiz.session.pick(a.session, qs, p)); });
  return quiz.finish(a, qs, store, key);
}

test('an unfinished test writes nothing; a finished one is recorded once', () => {
  memoryStore();
  let a = quiz.attempt(7);
  assert.equal(a.seed, 7);
  a.session = quiz.session.pick(a.session, qs, 1);
  a = quiz.finish(a, qs, store, 'grammar:a2-x');
  assert.equal(a.recorded, false);
  assert.equal(store.best('grammar:a2-x'), null, 'mid-test: nothing written');

  [0, 1].forEach((p) => { a.session = quiz.session.pick(quiz.session.next(a.session), qs, p); });
  a.session = quiz.session.next(a.session);
  a = quiz.finish(a, qs, store, 'grammar:a2-x');
  assert.equal(a.recorded, true);
  assert.deepEqual(store.best('grammar:a2-x'), { score: 2, total: 3 });

  store.recordScore('grammar:a2-x', 0, 3); // would not be a best anyway; make sure finish does not write again
  const again = quiz.finish(a, qs, store, 'grammar:a2-x');
  assert.equal(again.recorded, true);
  assert.deepEqual(store.best('grammar:a2-x'), { score: 2, total: 3 });
});

test('"new best" only when an earlier result existed and was beaten', () => {
  memoryStore();
  assert.equal(play([0, 0, 0], 'words:k').newBest, false, 'first attempt is not a record');   // 1/3
  assert.equal(play([0, 1, 0], 'words:k').newBest, false, 'equal score is not a record');      // 1/3
  const beaten = play([1, 0, 2], 'words:k');                                                    // 3/3
  assert.equal(beaten.newBest, true);
  assert.equal(quiz.finish(beaten, qs, store, 'words:k').newBest, true, 'the flag survives a rerender');
  assert.equal(play([1, 0, 0], 'words:k').newBest, false, 'worse score');                      // 2/3
});

test('keys: 1–4 pick an option until answered, Enter goes on only after an answer', () => {
  assert.deepEqual(quiz.keyAction('1', { answered: false, options: 3 }), { pick: 0 });
  assert.deepEqual(quiz.keyAction('3', { answered: false, options: 3 }), { pick: 2 });
  assert.equal(quiz.keyAction('4', { answered: false, options: 3 }), null, 'no fourth option');
  assert.equal(quiz.keyAction('2', { answered: true, options: 3 }), null, 'answer is final');
  assert.equal(quiz.keyAction('Enter', { answered: false, options: 3 }), null);
  assert.deepEqual(quiz.keyAction('Enter', { answered: true, options: 3 }), { next: true });
  assert.equal(quiz.keyAction('a', { answered: false, options: 3 }), null);
});

test('question order survives a language switch: one seed gives one order in ru and en', () => {
  const topic = { id: 'a1-x', quiz: ['a', 'b', 'c', 'd', 'e', 'f'].map((x) => ({
    prompt: { ru: 'Вопрос ' + x, en: 'Question ' + x }, options: [x + '1', x + '2', x + '3', x + '4'], answer: 0
  })) };
  for (const seed of [1, 2, 3, 42]) {
    const ru = quiz.fromGrammar(topic, { lang: 'ru', rng: quiz.seeded(seed) });
    const en = quiz.fromGrammar(topic, { lang: 'en', rng: quiz.seeded(seed) });
    assert.deepEqual(ru.map((q) => q.options), en.map((q) => q.options), 'seed ' + seed);
    assert.deepEqual(ru.map((q) => q.answer), en.map((q) => q.answer));
    assert.notDeepEqual(ru.map((q) => q.prompt), en.map((q) => q.prompt), 'the language did change');
  }
});
