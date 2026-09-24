// Node 22 resolves `node --test tests/` to this file; it loads every *.test.js here.
const fs = require('node:fs');
const path = require('node:path');
fs.readdirSync(__dirname)
  .filter((f) => f.endsWith('.test.js'))
  .sort()
  .forEach((f) => require(path.join(__dirname, f)));
