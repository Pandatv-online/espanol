const test = require('node:test');
const assert = require('node:assert/strict');
require('../js/app.js');
const { parseRoute } = globalThis.ECA.app;

test('parseRoute: routes from interfaces.md', () => {
  assert.deepEqual(parseRoute(''), { name: 'level', level: null });
  assert.deepEqual(parseRoute('#/'), { name: 'level', level: null });
  assert.deepEqual(parseRoute('#/b1'), { name: 'level', level: 'B1' });
  assert.deepEqual(parseRoute('#/a1/words/a1-greetings'), { name: 'words', level: 'A1', topicId: 'a1-greetings', tab: null });
  assert.deepEqual(parseRoute('#/a1/words/a1-greetings/quiz'), { name: 'words', level: 'A1', topicId: 'a1-greetings', tab: 'quiz' });
  assert.deepEqual(parseRoute('#/c2/grammar/c2-x'), { name: 'grammar', level: 'C2', topicId: 'c2-x', tab: null });
  assert.deepEqual(parseRoute('#/a2/grammar/a2-x/conj'), { name: 'grammar', level: 'A2', topicId: 'a2-x', tab: 'conj' });
});

test('parseRoute: anything else is notfound (keeping a valid level for the way back)', () => {
  assert.deepEqual(parseRoute('#/d1'), { name: 'notfound', level: null });
  assert.deepEqual(parseRoute('#/a2/verbs'), { name: 'notfound', level: 'A2' });
  assert.deepEqual(parseRoute('#/a2/words'), { name: 'notfound', level: 'A2' });
  assert.deepEqual(parseRoute('#/a2/grammar/x/test/more'), { name: 'notfound', level: 'A2' });
  assert.deepEqual(parseRoute('#main'), { name: 'notfound', level: null });
});
