const test = require('node:test');
const assert = require('node:assert/strict');
require('../js/quiz.js');
const { validate } = require('../tools/validate-content.js');
const { quiz } = globalThis.ECA;

const L = (ru, en) => ({ ru, en });
const opt = (es) => ({ es, ru: es + ' ru', en: es + ' en' });
function question(i, over) {
  return Object.assign({ id: 'q-' + i, es: '¿Quién pasa ' + i + '?', tr: L('Кто едет?', 'Who goes?'),
    options: [opt('El de la derecha ' + i), opt('Usted ' + i), opt('Nadie ' + i)], answer: 0,
    explain: L('Правая рука', 'Right-hand rule'), ref: 'RGC, art. 57' }, over);
}
function topic(over) {
  return Object.assign({ id: 'prio', cats: ['A', 'B'], title: L('Приоритет', 'Priority'),
    hero: { es: 'La <b>prioridad</b>', sub: L('Кто первый', 'Who goes first') },
    tabs: [{ id: 'rules', label: L('Правила', 'Rules'), blocks: [{ type: 'text', body: L('Текст', 'Text') }] }],
    questions: Array.from({ length: 10 }, (_, i) => question(i)) }, over);
}
const eca = (topics) => ({ data: {
  levels: () => [{ id: 'A1', name: L('A', 'A'), canDo: L('a', 'a') }], vocab: () => [], grammar: () => [], dgt: () => topics
} });

test('fromDgt: shuffles questions and options, keeps the right answer and every language', () => {
  const qs = Array.from({ length: 12 }, (_, i) => question(i));
  const out = quiz.fromDgt(qs, { rng: quiz.seeded(7), count: 5 });
  assert.equal(out.length, 5);
  out.forEach((q) => {
    const src = qs.find((x) => x.id === q.id);
    assert.equal(q.options[q.answer].es, src.options[src.answer].es);
    assert.equal(q.options[q.answer].ru, src.options[src.answer].ru);
    assert.equal(q.tr.ru, src.tr.ru);
  });
  assert.deepEqual(quiz.fromDgt(qs, { rng: quiz.seeded(7), count: 5 }).map((q) => q.id), out.map((q) => q.id), 'same seed, same exam');
  assert.equal(qs[0].options[0].es, 'El de la derecha 0', 'source untouched');
});

test('validate: a well-formed DGT topic passes', () => {
  assert.deepEqual(validate(eca([topic()])), []);
});

test('validate: DGT topic rules', () => {
  const errs = (t) => validate(eca([t])).join('\n');
  assert.match(errs(topic({ cats: ['C'] })), /cats/);
  assert.match(errs(topic({ id: 'examen' })), /занят адресом/);
  assert.match(errs(topic({ questions: [question(1)] })), /вопросов 1/);
  assert.match(errs(topic({ questions: Array.from({ length: 10 }, (_, i) => question(i, { ref: '' })) })), /ссылки на правило/);
  assert.match(errs(topic({ questions: Array.from({ length: 10 }, (_, i) => question(i, { es: 'Кто?' })) })), /кириллица/);
  assert.match(errs(topic({ questions: Array.from({ length: 10 }, (_, i) => question(i, { answer: 3 })) })), /answer = 3/);
  assert.match(errs(topic({ questions: Array.from({ length: 10 }, (_, i) => question(i, { img: 'http://x/y.png', alt: L('a', 'a') })) })), /img\/dgt/);
  assert.match(errs(topic({ tabs: [{ id: 'x', label: L('X', 'X'), blocks: [{ type: 'figure', src: 'img/dgt/a.svg' }] }] })), /alt/);
  assert.match(errs(topic({ questions: Array.from({ length: 10 }, () => question(1)) })), /id вопроса повторяется/);
});

test('validate: extra questions for a missing topic and a wrong source are reported', () => {
  const e = eca([topic({ questions: Array.from({ length: 10 }, (_, i) => question(i, i === 0 ? { source: 'blog' } : {})) })]);
  e.data.dgtOrphans = () => ['nope'];
  const errs = validate(e).join('\n');
  assert.match(errs, /addDgtQuestions \/ addDgtBlocks: темы или вкладки с таким id нет/);
  assert.match(errs, /source может быть только/);
});
