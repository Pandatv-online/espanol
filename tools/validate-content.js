#!/usr/bin/env node
// Content checker: `node tools/validate-content.js` → exit 0 when data/*.js is valid, 1 with a list of errors.
'use strict';
const fs = require('node:fs');
const path = require('node:path');

const MIN_WORDS = 12;
const QUIZ_MIN = 8;
const QUIZ_MAX = 10;
const RICH_OK = /^(b|i|em|strong|br)$/i;

function validate(ECA) {
  const errors = [];
  const data = ECA && ECA.data;
  if (!data) return ['ECA.data is missing'];
  const seenIds = new Map();

  const nonEmpty = (v) => typeof v === 'string' && v.trim() !== '';
  const report = (where, field, msg) => errors.push(where.concat(field).filter(Boolean).join(' · ') + ' — ' + msg);
  const both = (where, obj, field) => {
    if (!obj || typeof obj !== 'object') return report(where, field, 'нужен объект { ru, en }');
    ['ru', 'en'].forEach((l) => { if (!nonEmpty(obj[l])) report(where, field + '.' + l, 'пустое поле'); });
  };
  const trio = (where, obj, field) => {
    if (!obj || typeof obj !== 'object') return report(where, field, 'нужен объект { es, ru, en }');
    ['es', 'ru', 'en'].forEach((l) => { if (!nonEmpty(obj[l])) report(where, field + '.' + l, 'пустое поле'); });
  };
  const richTags = (where, field, str) => {
    const tags = String(str).match(/<\/?\s*([a-z0-9]+)[^>]*>/gi) || [];
    tags.forEach((tag) => {
      const name = tag.replace(/[<>\/\s]/g, ' ').trim().split(/\s+/)[0];
      if (!RICH_OK.test(name) || /\s\w+=/.test(tag)) report(where, field, 'недопустимый тег ' + tag + ' (можно <b> <i> <em> <strong> <br>)');
    });
  };
  const topicHead = (where, topic, levelId) => {
    if (!nonEmpty(topic.id)) report(where, 'id', 'нет id темы');
    else if (seenIds.has(topic.id)) report(where, 'id', 'id уже занят темой в ' + seenIds.get(topic.id));
    else seenIds.set(topic.id, levelId);
    if (topic.level !== levelId) report(where, 'level', `тема помечена «${topic.level}», а добавлена в ${levelId}`);
    both(where, topic.title, 'title');
  };

  const levels = data.levels() || [];
  if (!levels.length) errors.push('levels — нет ни одного уровня (data/levels.js)');
  levels.forEach((lvl) => {
    const L = [lvl.id || '?'];
    both(L, lvl.name, 'name');
    both(L, lvl.canDo, 'canDo');

    (data.vocab(lvl.id) || []).forEach((topic, ti) => {
      const where = [lvl.id, topic && topic.id ? topic.id : 'тема #' + (ti + 1)];
      if (!topic || typeof topic !== 'object') return report(where, '', 'тема должна быть объектом');
      topicHead(where, topic, lvl.id);
      if (!nonEmpty(topic.icon)) report(where, 'icon', 'нет иконки');
      const list = Array.isArray(topic.words) ? topic.words : [];
      if (list.length < MIN_WORDS) report(where, 'words', `слов ${list.length}, нужно не меньше ${MIN_WORDS}`);
      const seenEs = new Set();
      let withEx = 0;
      list.forEach((w, wi) => {
        const f = `words[${wi}]`;
        if (!w || typeof w !== 'object') return report(where, f, 'слово должно быть объектом');
        ['es', 'ru', 'en'].forEach((l) => { if (!nonEmpty(w[l])) report(where, `${f}.${l}`, 'пустое поле'); });
        if (nonEmpty(w.es)) {
          const key = w.es.trim().toLowerCase();
          if (seenEs.has(key)) report(where, `${f}.es`, `«${w.es}» уже есть в этой теме`);
          seenEs.add(key);
        }
        if (w.ex !== undefined) { withEx++; trio(where, w.ex, `${f}.ex`); }
      });
      if (list.length && withEx * 2 < list.length) report(where, 'words', `примеры (ex) у ${withEx} из ${list.length} слов, нужно хотя бы у половины`);
    });

    (data.grammar(lvl.id) || []).forEach((topic, ti) => {
      const where = [lvl.id, topic && topic.id ? topic.id : 'тема #' + (ti + 1)];
      if (!topic || typeof topic !== 'object') return report(where, '', 'тема должна быть объектом');
      topicHead(where, topic, lvl.id);
      both(where, topic.summary, 'summary');
      const sections = Array.isArray(topic.sections) ? topic.sections : [];
      if (!sections.length) report(where, 'sections', 'нет ни одного раздела объяснения');
      sections.forEach((s, si) => {
        const f = `sections[${si}]`;
        both(where, s && s.heading, `${f}.heading`);
        ['ru', 'en'].forEach((l) => {
          const paras = s && s.body && s.body[l];
          if (!Array.isArray(paras) || !paras.length) return report(where, `${f}.body.${l}`, 'нужен список абзацев');
          paras.forEach((p, pi) => {
            if (!nonEmpty(p)) report(where, `${f}.body.${l}[${pi}]`, 'пустой абзац');
            else richTags(where, `${f}.body.${l}[${pi}]`, p);
          });
        });
        if (s && s.table !== undefined) {
          const tb = s.table;
          if (!tb || !Array.isArray(tb.head) || !Array.isArray(tb.rows)) report(where, `${f}.table`, 'нужны head: [] и rows: [[]]');
          else tb.rows.forEach((r, ri) => {
            if (!Array.isArray(r) || r.length !== tb.head.length) report(where, `${f}.table.rows[${ri}]`, `в строке должно быть ${tb.head.length} ячеек`);
          });
        }
        if (s && s.examples !== undefined) {
          if (!Array.isArray(s.examples)) report(where, `${f}.examples`, 'нужен список');
          else s.examples.forEach((ex, ei) => trio(where, ex, `${f}.examples[${ei}]`));
        }
      });
      const quiz = Array.isArray(topic.quiz) ? topic.quiz : [];
      if (quiz.length < QUIZ_MIN || quiz.length > QUIZ_MAX) report(where, 'quiz', `вопросов ${quiz.length}, нужно ${QUIZ_MIN}–${QUIZ_MAX}`);
      quiz.forEach((q, qi) => {
        const f = `quiz[${qi}]`;
        if (!q || typeof q !== 'object') return report(where, f, 'вопрос должен быть объектом');
        both(where, q.prompt, `${f}.prompt`);
        both(where, q.explain, `${f}.explain`);
        if (q.es !== undefined && !nonEmpty(q.es)) report(where, `${f}.es`, 'пустое поле');
        const opts = Array.isArray(q.options) ? q.options : [];
        if (opts.length < 3 || opts.length > 4) report(where, `${f}.options`, `вариантов ${opts.length}, нужно 3–4`);
        if (opts.some((o) => !nonEmpty(o))) report(where, `${f}.options`, 'пустой вариант');
        if (new Set(opts.map((o) => String(o).trim())).size !== opts.length) report(where, `${f}.options`, 'варианты повторяются');
        if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= opts.length) {
          report(where, `${f}.answer`, `answer = ${q.answer}, а варианты пронумерованы 0–${Math.max(opts.length - 1, 0)}`);
        }
      });
    });
  });
  return errors;
}

// Load js/data.js and every data/*.js in the order index.html uses.
function loadSite(rootDir) {
  const indexPath = path.join(rootDir, 'index.html');
  let files = [];
  if (fs.existsSync(indexPath)) {
    const html = fs.readFileSync(indexPath, 'utf8');
    files = [...html.matchAll(/<script[^>]+src="(data\/[^"]+\.js)"/g)].map((m) => m[1]);
  }
  const onDisk = fs.readdirSync(path.join(rootDir, 'data')).filter((f) => f.endsWith('.js')).map((f) => 'data/' + f);
  const missing = onDisk.filter((f) => !files.includes(f));
  const notFound = files.filter((f) => !fs.existsSync(path.join(rootDir, f)));
  require(path.join(rootDir, 'js', 'data.js'));
  files.concat(missing).forEach((f) => { if (fs.existsSync(path.join(rootDir, f))) require(path.join(rootDir, f)); });
  return { ECA: globalThis.ECA, missing, notFound };
}

if (require.main === module) {
  const rootDir = path.join(__dirname, '..');
  let result;
  try {
    result = loadSite(rootDir);
  } catch (e) {
    console.error('Файл данных не загрузился: ' + (e && e.stack ? e.stack.split('\n').slice(0, 3).join('\n') : e));
    process.exit(1);
  }
  const errors = validate(result.ECA);
  result.missing.forEach((f) => errors.push(`${f} — файл не подключён в index.html, на сайте его не будет видно`));
  result.notFound.forEach((f) => errors.push(`${f} — подключён в index.html, но файла нет`));
  if (errors.length) {
    console.error(`Найдено ошибок: ${errors.length}\n` + errors.map((e) => '  ✗ ' + e).join('\n'));
    process.exit(1);
  }
  const d = result.ECA.data;
  const levels = d.levels();
  const nVocab = levels.reduce((n, l) => n + d.vocab(l.id).length, 0);
  const nGrammar = levels.reduce((n, l) => n + d.grammar(l.id).length, 0);
  console.log(`OK: уровней ${levels.length}, тем слов ${nVocab}, тем грамматики ${nGrammar}`);
}

module.exports = { validate, loadSite };
