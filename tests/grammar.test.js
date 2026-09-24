const test = require('node:test');
const assert = require('node:assert/strict');
require('../js/views/vocab.js'); // ECA.vocabQuiz — the shared quiz session
require('../js/views/grammar.js');
const { vocabQuiz, grammarQuiz } = globalThis.ECA;

// Three questions, the right answer is at index 1, 0, 2.
const qs = [{ answer: 1 }, { answer: 0 }, { answer: 2 }];

function fakeStore() {
  const calls = [];
  return {
    calls,
    recordScore(key, score, total) { calls.push([key, score, total]); return calls.length === 1; }
  };
}

test('an unfinished test writes nothing; a finished one is recorded once under grammar:<id>', () => {
  const store = fakeStore();
  let quiz = grammarQuiz.create(7);
  assert.equal(quiz.seed, 7);
  quiz.session = vocabQuiz.pick(quiz.session, qs, 1);
  quiz = grammarQuiz.finish(quiz, qs, store, 'grammar:a2-x');
  assert.equal(quiz.recorded, false);
  assert.deepEqual(store.calls, [], 'mid-test: nothing written');

  [0, 1].forEach((pick) => { quiz.session = vocabQuiz.pick(vocabQuiz.next(quiz.session), qs, pick); });
  quiz.session = vocabQuiz.next(quiz.session);
  quiz = grammarQuiz.finish(quiz, qs, store, 'grammar:a2-x');
  assert.deepEqual(store.calls, [['grammar:a2-x', 2, 3]]);
  assert.equal(quiz.recorded, true);
  assert.equal(quiz.newBest, true);

  quiz = grammarQuiz.finish(quiz, qs, store, 'grammar:a2-x');
  assert.equal(store.calls.length, 1, 'a rerender of the result screen does not write again');
  assert.equal(quiz.newBest, true, 'the "new best" flag survives the rerender');
});

test('keys: 1–4 pick an option until answered, Enter goes on only after an answer', () => {
  assert.deepEqual(grammarQuiz.keyAction('1', { answered: false, options: 3 }), { pick: 0 });
  assert.deepEqual(grammarQuiz.keyAction('3', { answered: false, options: 3 }), { pick: 2 });
  assert.equal(grammarQuiz.keyAction('4', { answered: false, options: 3 }), null, 'no fourth option');
  assert.equal(grammarQuiz.keyAction('2', { answered: true, options: 3 }), null, 'answer is final');
  assert.equal(grammarQuiz.keyAction('Enter', { answered: false, options: 3 }), null);
  assert.deepEqual(grammarQuiz.keyAction('Enter', { answered: true, options: 3 }), { next: true });
  assert.equal(grammarQuiz.keyAction('a', { answered: false, options: 3 }), null);
});

test('the seeded random source repeats itself, so the question order survives a language switch', () => {
  const a = grammarQuiz.seeded(42);
  const b = grammarQuiz.seeded(42);
  const seqA = [a(), a(), a()];
  assert.deepEqual([b(), b(), b()], seqA);
  seqA.forEach((x) => assert.ok(x >= 0 && x < 1));
  assert.notEqual(grammarQuiz.seeded(43)(), seqA[0]);
});
