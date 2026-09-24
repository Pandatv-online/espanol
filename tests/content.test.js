const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
require('../js/data.js');
const dataDir = path.join(__dirname, '..', 'data');
require(path.join(dataDir, 'levels.js'));
fs.readdirSync(dataDir).filter((f) => /^vocab-.*\.js$/.test(f)).forEach((f) => require(path.join(dataDir, f)));
const { data } = globalThis.ECA;

// Two words of one topic with the same translation make a quiz question with two right answers.
// A note in brackets ("рука (кисть)" / "рука (от плеча)") is what tells such words apart.
test('no topic has two words with the same translation', () => {
  const clashes = [];
  for (const level of data.levels()) {
    for (const topic of data.vocab(level.id)) {
      for (const lang of ['ru', 'en']) {
        const seen = new Map();
        for (const w of topic.words) {
          const key = String(w[lang]).trim().replace(/\s+/g, ' ').toLowerCase();
          if (seen.has(key)) clashes.push(`${topic.id} ${lang}: ${seen.get(key)} / ${w.es} → ${w[lang]}`);
          else seen.set(key, w.es);
        }
      }
    }
  }
  assert.deepEqual(clashes, []);
});
