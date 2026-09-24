const test = require('node:test');
const assert = require('node:assert/strict');
require('../js/ui.js');
const { ui } = globalThis.ECA;

test('richText keeps only <b> <i> <em> <strong> <br>', () => {
  assert.equal(
    ui.richText('<b>yo</b> <i>soy</i> <em>tú</em> <strong>él</strong><br><br/>'),
    '<b>yo</b> <i>soy</i> <em>tú</em> <strong>él</strong><br><br>'
  );
});

test('richText escapes every other tag, attribute and entity', () => {
  assert.equal(ui.richText('<script>alert(1)</script>'), '&lt;script&gt;alert(1)&lt;/script&gt;');
  assert.equal(ui.richText('<img src=x onerror=alert(1)>'), '&lt;img src=x onerror=alert(1)&gt;');
  assert.equal(ui.richText('<b onclick="x()">hola</b>'), '&lt;b onclick=&quot;x()&quot;&gt;hola</b>');
  assert.equal(ui.richText('<a href="#">¡ojo!</a> & <u>no</u>'),
    '&lt;a href=&quot;#&quot;&gt;¡ojo!&lt;/a&gt; &amp; &lt;u&gt;no&lt;/u&gt;');
  assert.equal(ui.richText('<B>Sí</B>'), '<b>Sí</b>');
});

test('isTopicDone: words need every word learned AND best test ≥ 80%; grammar needs best test ≥ 80%', () => {
  require('../js/store.js');
  const { store } = globalThis.ECA;
  const m = new Map();
  store._setBackend({ getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: (k) => m.delete(k) });
  const words = { id: 'a1-x', words: [{ es: 'uno' }, { es: 'dos' }] };
  const grammar = { id: 'a1-g' };

  store.setLearned('a1-x', 'uno', true);
  store.recordScore('words:a1-x', 10, 10);
  assert.equal(ui.isTopicDone('words', words), false, 'one word not learned yet');
  store.setLearned('a1-x', 'dos', true);
  assert.equal(ui.isTopicDone('words', words), true);

  store._setBackend({ getItem: () => null, setItem: () => {}, removeItem: () => {} });
  store.setLearned('a1-x', 'uno', true);
  store.setLearned('a1-x', 'dos', true);
  store.recordScore('words:a1-x', 7, 10);
  assert.equal(ui.isTopicDone('words', words), false, '70% is not passed');
  store.recordScore('words:a1-x', 8, 10);
  assert.equal(ui.isTopicDone('words', words), true, '80% is passed');

  assert.equal(ui.isTopicDone('grammar', grammar), false, 'no test taken');
  store.recordScore('grammar:a1-g', 7, 9);   // 77.8%
  assert.equal(ui.isTopicDone('grammar', grammar), false);
  store.recordScore('grammar:a1-g', 8, 10);
  assert.equal(ui.isTopicDone('grammar', grammar), true);
});
