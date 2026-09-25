// Validator rules for the grammar schema (tabs → blocks). The old `sections` format is rejected.
const test = require('node:test');
const assert = require('node:assert/strict');
const { validate } = require('../tools/validate-content.js');

const L = (ru, en) => ({ ru, en });
const level = { id: 'A2', name: L('Элементарный', 'Elementary'), canDo: L('Рассказываю о прошлом', 'I talk about the past') };
const question = () => ({ prompt: L('Выберите', 'Choose'), es: 'Hoy ___ comido.', options: ['he', 'ha', 'hemos'], answer: 0,
  explain: L('yo → he', 'yo → he') });
const example = (i) => ({ es: `Hoy <b>he comido</b> ${i}.`, ru: `Сегодня я поел ${i}.`, en: `I have eaten ${i} today.` });

function tabbedTopic() {
  return {
    id: 'a2-new', level: 'A2', title: L('Perfecto', 'Perfecto'),
    hero: { es: 'Pretérito <b>Perfecto</b>', sub: L('Прошедшее время', 'A past tense') },
    tabs: [
      { id: 'diff', label: L('Разница', 'Difference'), blocks: [
        { type: 'text', body: { ru: ['<b>Perfecto</b> — связь с настоящим.'], en: ['<b>Perfecto</b> — linked to now.'] } },
        { type: 'text', color: 'amber', body: L('Заметка', 'A note') },
        { type: 'rules', items: [{ color: 'blue', label: L('Время', 'Tense'), title: L('Perfecto', 'Perfecto'), body: L('сейчас', 'now'), es: 'haber + participio' },
          { color: 'amber', title: L('Indefinido', 'Indefinido'), body: L('тогда', 'then') }] },
        { type: 'table', heading: L('Сравнение', 'Side by side'), head: ['', 'perfecto', 'indefinido'],
          rows: [[L('Связь', 'Link'), L('есть', 'yes'), L('нет', 'no')], ['señal', 'hoy', 'ayer']] }
      ] },
      { id: 'conj', label: L('Спряжение', 'Conjugation'), blocks: [
        { type: 'conj', verbs: [{ inf: 'hablar', tr: L('говорить', 'to speak'), variants: [
          { label: 'Perfecto', color: 'blue', rows: [['yo', 'he hablado'], ['tú', 'has hablado']] },
          { label: L('Прошлое', 'Past'), color: 'amber', rows: [['yo', 'habl<b>é</b>'], ['tú', 'hablaste']] }] }] }
      ] },
      { id: 'when', label: L('Когда', 'When'), blocks: [
        { type: 'triggers', items: [{ num: 'W', title: L('Желание', 'Wish'), sub: L('хотеть', 'to want'), phrases: ['quiero que'],
          ex: { es: 'Quiero que <b>vengas</b>.', ru: 'Хочу, чтобы ты пришёл.', en: 'I want you to come.' } }] },
        { type: 'markers', groups: [{ color: 'blue', title: L('Perfecto', 'Perfecto'), tags: ['hoy', 'esta semana'] }] },
        { type: 'tip', title: L('Шпаргалка', 'Cheat sheet'), body: L('Период не закончился → Perfecto.', 'Period not over → Perfecto.') }
      ] },
      { id: 'examples', label: L('Примеры', 'Examples'), blocks: [
        { type: 'examples', items: Array.from({ length: 20 }, (_, i) => Object.assign(example(i), i % 2 ? { badge: 'P', color: 'blue' } : {})) }
      ] }
    ],
    quiz: Array.from({ length: 8 }, question)
  };
}
const eca = (grammar) => ({ data: { levels: () => [level], vocab: () => [], grammar: () => grammar } });

test('tabbed topic: a well-formed topic with every block type gives no errors', () => {
  assert.deepEqual(validate(eca([tabbedTopic()])), []);
});

test('tabbed topic: each schema rule is reported at its path', () => {
  const t = tabbedTopic();
  const diff = t.tabs[0].blocks, conj = t.tabs[1].blocks[0], when = t.tabs[2].blocks;
  t.tabs[1].id = 'diff';                                      // duplicate tab id
  t.tabs[2].label.en = 'Very long label';                     // label > 12 characters
  diff[0].body.en = ['Linked to now.<hr>'];                     // tag outside <b><i><em><strong><br>
  diff[2].items[0].color = 'green';                           // colour outside the palette
  diff[3].rows[1][1] = 'una celda mucho más larga que treinta';  // cell > 30 characters
  diff[3].rows[0] = diff[3].rows[0].slice(0, 2);              // row shorter than head
  conj.verbs[0].variants.pop();                               // conj with one variant
  when[0].items[0].phrases = [];                              // trigger without phrases
  when[1].groups[0].tags = [''];                              // empty marker tag
  when[2].body.ru = '';                                       // empty {ru, en}
  t.tabs[3].blocks.push({ type: 'video' });                   // unknown block type
  t.tabs[3].blocks[0].items = t.tabs[3].blocks[0].items.slice(0, 19);  // 19 examples
  t.tabs[3].blocks[0].items[0].es = 'Hoy he comido.';         // example without the form in <b>
  const errors = validate(eca([t])).join('\n');
  const expect = [
    /tabs\[1\]\.id — .*повторяется/,
    /tabs\[2\]\.label\.en — .*12/,
    /tabs\[0\]\.blocks\[0\]\.body\.en\[0\] — недопустимый тег/,
    /tabs\[0\]\.blocks\[2\]\.items\[0\]\.color/,
    /tabs\[0\]\.blocks\[3\]\.rows\[1\]\[1\] — .*30/,
    /tabs\[0\]\.blocks\[3\]\.rows\[0\] — .*3 ячеек/,
    /tabs\[1\]\.blocks\[0\]\.verbs\[0\]\.variants — .*2/,
    /tabs\[2\]\.blocks\[0\]\.items\[0\]\.phrases/,
    /tabs\[2\]\.blocks\[1\]\.groups\[0\]\.tags\[0\]/,
    /tabs\[2\]\.blocks\[2\]\.body\.ru — пустое поле/,
    /tabs\[3\]\.blocks\[1\]\.type — .*video/,
    /a2-new · examples — примеров 19, нужно не меньше 20/,
    /tabs\[3\]\.blocks\[0\]\.items\[0\]\.es — .*<b>/
  ];
  expect.forEach((re) => assert.match(errors, re));
  assert.equal(errors.split('\n').length, expect.length, 'no extra errors:\n' + errors);
});

test('tabbed topic: 4–6 tabs, reserved id "test", hero required, no sections next to tabs', () => {
  const three = tabbedTopic(); three.id = 'a2-three'; three.tabs = three.tabs.slice(0, 3);
  three.tabs[2].blocks.push({ type: 'examples', items: Array.from({ length: 20 }, (_, i) => example(i)) });
  const reserved = tabbedTopic(); reserved.id = 'a2-reserved'; reserved.tabs[0].id = 'test';
  const noHero = tabbedTopic(); noHero.id = 'a2-nohero'; delete noHero.hero;
  const mixed = tabbedTopic(); mixed.id = 'a2-mixed'; mixed.sections = [];
  const errors = validate(eca([three, reserved, noHero, mixed])).join('\n');
  assert.match(errors, /a2-three · tabs — вкладок 3, нужно 4–6/);
  assert.match(errors, /a2-reserved · tabs\[0\]\.id — .*test/);
  assert.match(errors, /a2-nohero · hero/);
  assert.match(errors, /a2-mixed · sections — .*старый формат/);
});

test('the old `sections` format is rejected, with or without tabs', () => {
  const old = { id: 'a2-old', level: 'A2', title: L('Старая', 'Old'), summary: L('Кратко', 'In short'),
    sections: [{ heading: L('Формы', 'Forms'), body: { ru: ['<b>he</b>'], en: ['<b>he</b>'] } }], quiz: Array.from({ length: 8 }, question) };
  const errors = validate(eca([old])).join('\n');
  assert.match(errors, /a2-old · sections — .*старый формат/);
  assert.match(errors, /a2-old · tabs — /);
});

test('markers: a group colour is optional (no colour = neutral box), a wrong one is still an error', () => {
  const t = tabbedTopic();
  const groups = t.tabs[2].blocks[1].groups;
  delete groups[0].color;
  groups.push({ color: 'green', title: L('Другие', 'Others'), tags: ['ayer'] });
  const errors = validate(eca([t]));
  assert.equal(errors.length, 1, errors.join('\n'));
  assert.match(errors[0], /groups\[1\]\.color/);
});

test('tabbed topic: Spanish fields hold no Cyrillic; hero.sub is plain one-line text', () => {
  const t = tabbedTopic();
  t.tabs[0].blocks[2].items[1].es = 'собственные окончания';
  t.tabs[3].blocks[0].items[1].es = 'Hoy <b>he comido</b> пирог.';
  t.tabs[2].blocks[1].groups[0].tags[0] = 'сегодня';
  t.hero.sub = { ru: ['<b>Прошедшее</b>'], en: 'A past tense' };
  const errors = validate(eca([t])).join('\n');
  assert.match(errors, /tabs\[0\]\.blocks\[2\]\.items\[1\]\.es — .*кириллица/);
  assert.match(errors, /tabs\[3\]\.blocks\[0\]\.items\[1\]\.es — .*кириллица/);
  assert.match(errors, /tabs\[2\]\.blocks\[1\]\.groups\[0\]\.tags\[0\] — .*кириллица/);
  assert.match(errors, /hero\.sub\.ru — /);
  assert.equal(errors.split('\n').length, 4, errors);
});

test('tabbed topic: a malformed element is reported, never thrown', () => {
  const t = tabbedTopic();
  t.tabs[0].blocks[2].items = [null];
  t.tabs[1].blocks[0].verbs = [null];
  t.tabs[1].blocks.push({ type: 'conj', verbs: [{ inf: 'ser', variants: [null, 7] }] });
  t.tabs[2].blocks[0].items = ['x'];
  t.tabs[2].blocks[1].groups = [null];
  t.tabs[3].blocks[0].items.push(null);
  let errors;
  assert.doesNotThrow(() => { errors = validate(eca([t])).join('\n'); });
  assert.match(errors, /tabs\[0\]\.blocks\[2\]\.items\[0\] — .*объект/);
  assert.match(errors, /tabs\[1\]\.blocks\[0\]\.verbs\[0\] — .*объект/);
  assert.match(errors, /tabs\[1\]\.blocks\[1\]\.verbs\[0\]\.variants\[1\] — .*объект/);
  assert.match(errors, /tabs\[2\]\.blocks\[0\]\.items\[0\] — .*объект/);
  assert.match(errors, /tabs\[2\]\.blocks\[1\]\.groups\[0\] — .*объект/);
  assert.match(errors, /tabs\[3\]\.blocks\[0\]\.items\[20\] — .*объект/);
});
