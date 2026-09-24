const test = require('node:test');
const assert = require('node:assert/strict');
require('../js/store.js');
const { store } = globalThis.ECA;

function memory(initial) {
  const m = new Map(Object.entries(initial || {}));
  return {
    map: m,
    getItem: (k) => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => m.set(k, String(v)),
    removeItem: (k) => m.delete(k)
  };
}

test('store: preferences, learned words and scores survive a reload', () => {
  const backend = memory();
  store._setBackend(backend);
  assert.equal(store.available, true);
  store.setPref('lang', 'ru');
  store.setPref('theme', 'dark');
  store.setPref('level', 'B1');
  store.setLearned('a1-greetings', 'hola', true);
  store.setLearned('a1-greetings', 'adiós', true);
  store.setLearned('a1-greetings', 'adiós', false);
  store.recordScore('words:a1-greetings', 7, 10);
  store.recordScore('words:a1-greetings', 5, 10);

  store._setBackend(backend); // same storage, fresh read = page reload
  assert.equal(store.pref('lang'), 'ru');
  assert.equal(store.pref('theme'), 'dark');
  assert.equal(store.pref('level'), 'B1');
  assert.equal(store.isLearned('a1-greetings', 'hola'), true);
  assert.equal(store.isLearned('a1-greetings', 'adiós'), false);
  assert.deepEqual(store.best('words:a1-greetings'), { score: 7, total: 10 });
  assert.equal(store.best('grammar:nope'), null);
  assert.ok(backend.getItem('eca:v1'), 'data lives under eca:v1');
});

test('store: learnedCount counts only the words passed in', () => {
  store._setBackend(memory());
  store.setLearned('t', 'uno', true);
  store.setLearned('t', 'dos', true);
  store.setLearned('t', 'removed-word', true);
  assert.equal(store.learnedCount('t', [{ es: 'uno' }, { es: 'dos' }, { es: 'tres' }]), 2);
});

test('store: corrupted JSON starts from a clean slate', () => {
  store._setBackend(memory({ 'eca:v1': '{not json' }));
  assert.equal(store.pref('lang'), null);
  assert.equal(store.isLearned('t', 'uno'), false);
  store.setPref('lang', 'en');
  assert.equal(store.pref('lang'), 'en');
});

test('store: unavailable storage reports available=false and never throws', () => {
  const broken = {
    getItem() { throw new Error('SecurityError'); },
    setItem() { throw new Error('QuotaExceeded'); },
    removeItem() { throw new Error('SecurityError'); }
  };
  assert.doesNotThrow(() => store._setBackend(broken));
  assert.equal(store.available, false);
  assert.doesNotThrow(() => {
    store.setPref('lang', 'ru');
    store.setLearned('t', 'uno', true);
    store.recordScore('words:t', 3, 10);
    store.resetProgress();
  });
  assert.doesNotThrow(() => store._setBackend(null));
  assert.equal(store.available, false);
});

test('store: resetProgress keeps language and theme only', () => {
  const backend = memory();
  store._setBackend(backend);
  store.setPref('lang', 'ru');
  store.setPref('theme', 'light');
  store.setPref('level', 'C1');
  store.setLearned('t', 'uno', true);
  store.recordScore('grammar:t', 8, 8);
  store.resetProgress();
  store._setBackend(backend);
  assert.equal(store.pref('lang'), 'ru');
  assert.equal(store.pref('theme'), 'light');
  assert.equal(store.pref('level'), null);
  assert.equal(store.isLearned('t', 'uno'), false);
  assert.equal(store.best('grammar:t'), null);
});
