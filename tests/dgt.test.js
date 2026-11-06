const test = require('node:test');
const assert = require('node:assert/strict');
require('../js/quiz.js');
require('../js/app.js');
const { validate } = require('../tools/validate-content.js');
const { quiz, app } = globalThis.ECA;

const signs = {
  id: 'dgt-signs-test', level: 'DGT', icon: 'sign:R-1', kind: 'signs',
  words: ['R-1', 'R-2', 'R-100', 'R-101', 'R-102', 'P-1'].map((code, i) => ({
    es: `señal ${i}`, ru: `знак ${i}`, en: `sign ${i}`, sign: code
  }))
};

const opt = (es, ru, en) => ({ es, ru, en });
const bank = Array.from({ length: 30 }, (_, i) => ({
  es: `¿Pregunta ${i}?`,
  prompt: { ru: `Вопрос ${i}?`, en: `Question ${i}?` },
  options: [opt(`sí ${i}`, `да ${i}`, `yes ${i}`), opt(`no ${i}`, `нет ${i}`, `no ${i}`), opt(`quizá ${i}`, `может ${i}`, `maybe ${i}`)],
  answer: 0,
  explain: { ru: 'потому что', en: 'because' },
  sign: 'R-1'
}));

test('parseRoute: the DGT track has its own address', () => {
  assert.deepEqual(app.parseRoute('#/dgt'), { name: 'level', level: 'DGT' });
  assert.equal(app.parseRoute('#/dgt/grammar/dgt-velocidad/test').topicId, 'dgt-velocidad');
  assert.equal(app.parseRoute('#/dgt/words/dgt-signs-peligro').name, 'words');
});

test('fromVocab: a sign word asks with the picture, never prints the answer in the prompt', () => {
  const qs = quiz.fromVocab(signs, [signs], { lang: 'ru', rng: quiz.seeded(7), count: 6 });
  assert.equal(qs.length, 6);
  qs.forEach((q) => {
    assert.ok(q.img);
    assert.equal(q.prompt, '');
    const word = signs.words.find((w) => w.sign === q.img);
    const right = q.optionsLang === 'es' ? word.es : word.ru;
    assert.equal(q.options[q.answer], right);
    assert.equal(new Set(q.options).size, q.options.length);
  });
  assert.ok(qs.some((q) => q.optionsLang === 'es') && qs.some((q) => q.optionsLang === 'ru'));
});

test('fromGrammar: a big bank gives quizCount questions; options keep Spanish with a translation', () => {
  const topic = { id: 'dgt-x', quiz: bank, quizCount: 20 };
  const qs = quiz.fromGrammar(topic, { lang: 'en', rng: quiz.seeded(3) });
  assert.equal(qs.length, 20);
  qs.forEach((q) => {
    assert.match(q.options[q.answer], /^sí \d+$/);
    assert.match(q.optionsTr[q.answer], /^yes \d+$/);
    assert.equal(q.img, 'R-1');
    assert.match(q.es, /^¿Pregunta/);
  });
  // same seed → same questions, in RU too
  const ru = quiz.fromGrammar(topic, { lang: 'ru', rng: quiz.seeded(3) });
  assert.deepEqual(ru.map((q) => q.es), qs.map((q) => q.es));
});

test('validator: DGT topics accept question banks, sign blocks and sign words; demand the Spanish original', () => {
  const data = {
    levels: () => [{ id: 'DGT', kind: 'dgt', name: { ru: 'П', en: 'D' }, canDo: { ru: 'а', en: 'b' } }],
    vocab: () => [Object.assign({ title: { ru: 'Знаки', en: 'Signs' } }, signs, {
      words: signs.words.concat(Array.from({ length: 6 }, (_, i) => ({ es: `otra ${i}`, ru: `другой ${i}`, en: `other ${i}`, sign: 'P-1' })))
        .map((w) => Object.assign({ ex: { es: 'x', ru: 'х', en: 'x' } }, w))
    })],
    grammar: () => [{
      id: 'dgt-g', level: 'DGT', title: { ru: 'Т', en: 'T' },
      hero: { es: 'Velocidad', sub: { ru: 'с', en: 's' } },
      tabs: [
        { id: 'a', label: { ru: 'а', en: 'a' }, blocks: [{ type: 'signs', items: ['R-1', { code: 'R-2', note: { ru: 'н', en: 'n' } }] }] },
        { id: 'b', label: { ru: 'б', en: 'b' }, blocks: [{ type: 'figure', src: 'img/dgt/x.svg', alt: { ru: 'р', en: 'p' } }] }
      ],
      quiz: bank, quizCount: 20
    }]
  };
  assert.deepEqual(validate({ data }), []);
  const noEs = bank.map((q) => Object.assign({}, q, { es: undefined }));
  const errors = validate({ data: Object.assign({}, data, { grammar: () => [Object.assign(data.grammar()[0], { quiz: noEs })] }) });
  assert.ok(errors.some((e) => /испанский оригинал/.test(e)));
  const badSign = validate({ data }, { fileExists: (p) => !p.includes('R-2') });
  assert.ok(badSign.some((e) => /img\/signs\/R-2\.png/.test(e)));
});

test('data.remove drops a topic so a local overlay can merge it elsewhere', () => {
  require('../js/data.js');
  const { data } = globalThis.ECA;
  data.addGrammar('ZZ', [{ id: 'zz-a', level: 'ZZ' }, { id: 'zz-b', level: 'ZZ' }]);
  assert.equal(data.remove('grammar', 'zz-a'), true);
  assert.deepEqual(data.grammar('ZZ').map((t) => t.id), ['zz-b']);
  assert.equal(data.find('grammar', 'zz-a'), null);
  assert.equal(data.remove('grammar', 'zz-a'), false);
});
