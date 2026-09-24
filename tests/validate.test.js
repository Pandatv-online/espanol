const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { validate } = require('../tools/validate-content.js');

const L = (ru, en) => ({ ru, en });
const level = { id: 'A1', name: L('Начальный', 'Beginner'), canDo: L('Понимаю простые фразы', 'I understand simple phrases') };
function words(n) {
  return Array.from({ length: n }, (_, i) => ({ es: 'palabra' + i, ru: 'слово' + i, en: 'word' + i,
    ex: i % 2 ? undefined : { es: 'Ejemplo ' + i, ru: 'Пример ' + i, en: 'Example ' + i } }));
}
function vocabTopic(over) {
  return Object.assign({ id: 'a1-test', level: 'A1', icon: '👋', title: L('Тест', 'Test'), words: words(12) }, over);
}
function question(over) {
  return Object.assign({ prompt: L('Выберите', 'Choose'), es: 'Yo ___ Ana.', options: ['soy', 'es', 'eres'], answer: 0,
    explain: L('yo → soy', 'yo → soy') }, over);
}
function grammarTopic(over) {
  return Object.assign({ id: 'a1-ser', level: 'A1', title: L('Ser', 'Ser'), summary: L('Глагол ser', 'The verb ser'),
    sections: [{ heading: L('Формы', 'Forms'), body: { ru: ['<b>soy</b>'], en: ['<b>soy</b>'] },
      table: { head: ['', 'ser'], rows: [['yo', 'soy']] }, examples: [{ es: 'Soy Ana.', ru: 'Я Ана.', en: "I'm Ana." }] }],
    quiz: Array.from({ length: 8 }, () => question()) }, over);
}
function eca({ vocab = [], grammar = [], levels = [level] } = {}) {
  return { data: {
    levels: () => levels,
    vocab: (l) => vocab.filter((t) => t.__reg === l || (!t.__reg && l === 'A1')),
    grammar: (l) => grammar.filter((t) => t.__reg === l || (!t.__reg && l === 'A1'))
  } };
}

test('validate: well-formed content gives no errors', () => {
  assert.deepEqual(validate(eca({ vocab: [vocabTopic()], grammar: [grammarTopic()] })), []);
});

test('validate: empty translation is reported as level · topic · field', () => {
  const t = vocabTopic();
  t.words[3] = { es: 'hola', ru: '', en: 'hello' };
  const errors = validate(eca({ vocab: [t] }));
  assert.equal(errors.length, 1);
  assert.match(errors[0], /^A1 · a1-test · words\[3\]\.ru/);
});

test('validate: catches the structural rules', () => {
  const few = vocabTopic({ id: 'a1-few', words: words(11) });
  const dup = vocabTopic({ id: 'a1-dup' });
  dup.words[1].es = dup.words[0].es;
  const sameId = grammarTopic({ id: 'a1-dup' });
  const wrongLevel = vocabTopic({ id: 'a1-level', level: 'A2' });
  const badQuiz = grammarTopic({ id: 'a1-quiz', quiz: [
    question({ answer: 3 }), question({ options: ['a', 'b'], answer: 0 }),
    question({ options: ['a', 'b', 'c', 'd', 'e'] }), ...Array.from({ length: 5 }, () => question())
  ] });
  const errors = validate(eca({ vocab: [few, dup, wrongLevel], grammar: [sameId, badQuiz] })).join('\n');
  assert.match(errors, /a1-few · words/);            // fewer than 12 words
  assert.match(errors, /a1-dup · words\[1\]\.es/);    // duplicate es inside topic
  assert.match(errors, /a1-dup · id/);                // topic id not unique
  assert.match(errors, /a1-level · level/);          // level mismatch
  assert.match(errors, /a1-quiz · quiz\[0\]\.answer/);
  assert.match(errors, /a1-quiz · quiz\[1\]\.options/);
  assert.match(errors, /a1-quiz · quiz\[2\]\.options/);
});

test('validate: level needs name and canDo in both languages', () => {
  const errors = validate(eca({ levels: [{ id: 'B2', name: L('Выше среднего', ''), canDo: L('', 'x') }] }));
  assert.equal(errors.length, 2);
  assert.match(errors[0], /^B2 · name\.en/);
});

test('CLI: real site content is valid (exit code 0)', () => {
  const out = execFileSync('node', [path.join(__dirname, '..', 'tools', 'validate-content.js')], { encoding: 'utf8' });
  assert.match(out, /OK/);
});
