const test = require('node:test');
const assert = require('node:assert/strict');
require('../js/quiz.js');
const { quiz } = globalThis.ECA;

function seeded(seed) {
  let s = seed;
  return () => ((s = (s * 1103515245 + 12345) % 2147483648) / 2147483648);
}

const nums = [
  ['uno', 'один', 'one'], ['dos', 'два', 'two'], ['tres', 'три', 'three'], ['cuatro', 'четыре', 'four'],
  ['cinco', 'пять', 'five'], ['seis', 'шесть', 'six'], ['siete', 'семь', 'seven'], ['ocho', 'восемь', 'eight'],
  ['nueve', 'девять', 'nine'], ['diez', 'десять', 'ten'], ['once', 'одиннадцать', 'eleven'], ['doce', 'двенадцать', 'twelve']
].map(([es, ru, en]) => ({ es, ru, en }));
const numbers = { id: 'a1-numbers', level: 'A1', words: nums };
const tiny = { id: 'a1-tiny', level: 'A1', words: [
  { es: 'el sol', ru: 'солнце', en: 'sun' }, { es: 'la luna', ru: 'луна', en: 'moon' }
] };

test('fromVocab: 10 questions from a 12-word topic, each with 4 unique options including the answer', () => {
  const qs = quiz.fromVocab(numbers, [numbers], { lang: 'ru', rng: seeded(1) });
  assert.equal(qs.length, 10);
  for (const q of qs) {
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options).size, 4);
    assert.ok(q.answer >= 0 && q.answer < 4);
    const word = nums.find((w) => w.es === q.prompt || w.ru === q.prompt);
    assert.ok(word, 'prompt comes from the topic: ' + q.prompt);
    const expected = q.promptLang === 'es' ? word.ru : word.es;
    assert.equal(q.options[q.answer], expected);
    const pool = q.optionsLang === 'es' ? nums.map((w) => w.es) : nums.map((w) => w.ru);
    for (const o of q.options) assert.ok(pool.includes(o), 'distractor from the topic: ' + o);
  }
});

test('fromVocab: asks in both directions (es → interface language and back)', () => {
  const qs = quiz.fromVocab(numbers, [numbers], { lang: 'en', rng: seeded(7) });
  const dirs = new Set(qs.map((q) => q.promptLang + '>' + q.optionsLang));
  assert.deepEqual([...dirs].sort(), ['en>es', 'es>en']);
});

test('fromVocab: short topic gives fewer questions and borrows distractors from the level', () => {
  const qs = quiz.fromVocab(tiny, [tiny, numbers], { lang: 'en', count: 10, rng: seeded(3) });
  assert.equal(qs.length, 2);
  for (const q of qs) {
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options).size, 4);
    const word = tiny.words.find((w) => w.es === q.prompt || w.en === q.prompt);
    assert.equal(q.options[q.answer], q.promptLang === 'es' ? word.en : word.es);
  }
});

test('fromVocab: respects count', () => {
  assert.equal(quiz.fromVocab(numbers, [numbers], { lang: 'ru', count: 5, rng: seeded(2) }).length, 5);
});

const grammarTopic = { id: 'a1-ser', level: 'A1', quiz: [
  { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Yo ___ estudiante.',
    options: ['soy', 'eres', 'es'], answer: 0, explain: { ru: 'yo → soy', en: 'yo → soy' } },
  { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Ellos ___ de Madrid.',
    options: ['es', 'somos', 'son', 'sois'], answer: 2, explain: { ru: 'ellos → son', en: 'ellos → son' } }
] };

test('fromGrammar: keeps every question, answer still points at the correct option', () => {
  const qs = quiz.fromGrammar(grammarTopic, { lang: 'en', rng: seeded(5) });
  assert.equal(qs.length, 2);
  assert.equal(qs[0].prompt, 'Choose the form');
  assert.equal(qs[0].promptLang, 'en');
  assert.equal(qs[0].es, 'Yo ___ estudiante.');
  assert.equal(qs[0].optionsLang, 'es');
  assert.equal(qs[0].options[qs[0].answer], 'soy');
  assert.equal(qs[1].options[qs[1].answer], 'son');
  assert.equal(qs[1].options.length, 4);
  assert.equal(qs[1].explain, 'ellos → son');
  const ru = quiz.fromGrammar(grammarTopic, { lang: 'ru', rng: seeded(5) });
  assert.equal(ru[0].prompt, 'Выберите форму');
});

test('shuffle: returns a new permutation and leaves the input untouched', () => {
  const src = [1, 2, 3, 4, 5, 6];
  const out = quiz.shuffle(src, seeded(9));
  assert.deepEqual(src, [1, 2, 3, 4, 5, 6]);
  assert.notEqual(out, src);
  assert.deepEqual([...out].sort(), src);
});
