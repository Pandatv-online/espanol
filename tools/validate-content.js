#!/usr/bin/env node
// Content checker: `node tools/validate-content.js` → exit 0 when data/*.js is valid, 1 with a list of errors.
'use strict';
const fs = require('node:fs');
const path = require('node:path');

const MIN_WORDS = 12;
const QUIZ_MIN = 8;
const QUIZ_MAX = 10;
const RICH_OK = /^(b|i|em|strong|br)$/i;
const TABS_MIN = 4;
const TABS_MAX = 6;
const TAB_ID = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const LABEL_MAX = 12;
const MINI_LABEL_MAX = 16;   // conj variant label (mini-tab)
const CYRILLIC = /[\u0400-\u04FF]/;
const CELL_MAX = 30;
const EXAMPLES_MIN = 20;
const COLORS = ['blue', 'amber', 'teal', 'coral', 'purple'];

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
  // A text field shown through ui.richText: non-empty string with allowed tags only.
  const richText = (where, field, str) => {
    if (!nonEmpty(str)) return report(where, field, 'пустое поле');
    richTags(where, field, str);
  };
  // { ru, en } where each side is a string or a list of paragraphs.
  const richBoth = (where, obj, field) => {
    if (!obj || typeof obj !== 'object') return report(where, field, 'нужен объект { ru, en }');
    ['ru', 'en'].forEach((l) => {
      const v = obj[l];
      if (Array.isArray(v)) {
        if (!v.length) report(where, `${field}.${l}`, 'нужен хотя бы один абзац');
        v.forEach((p, pi) => richText(where, `${field}.${l}[${pi}]`, p));
      } else richText(where, `${field}.${l}`, v);
    });
  };
  const color = (where, field, c, optional) => {
    if (c === undefined && optional) return;
    if (!COLORS.includes(c)) report(where, field, `цвет «${c}», можно: ${COLORS.join(', ')}`);
  };
  const list = (where, field, v) => {
    if (!Array.isArray(v) || !v.length) { report(where, field, 'нужен непустой список'); return []; }
    return v;
  };
  // Walks a list of objects; a missing or malformed element is reported, never thrown on.
  const each = (where, field, v, fn) => list(where, field, v).forEach((it, i) => {
    const g = `${field}[${i}]`;
    if (!it || typeof it !== 'object' || Array.isArray(it)) return report(where, g, 'элемент должен быть объектом');
    fn(it, g);
  });
  // Spanish-only field (shown with lang="es"): must not contain Cyrillic.
  const spanish = (where, field, str) => {
    if (typeof str === 'string' && CYRILLIC.test(str)) report(where, field, 'кириллица в испанском поле — перевод пишут в ru/en');
  };
  const spanishRich = (where, field, str) => { richText(where, field, str); spanish(where, field, str); };
  // { ru, en } of plain one-line text (printed as text, tags would show literally).
  const plainBoth = (where, obj, field) => {
    if (!obj || typeof obj !== 'object') return report(where, field, 'нужен объект { ru, en }');
    ['ru', 'en'].forEach((l) => {
      const v = obj[l];
      if (!nonEmpty(v)) report(where, `${field}.${l}`, 'нужна непустая строка');
      else if (/[<>\n]/.test(v)) report(where, `${field}.${l}`, 'простой текст в одну строку, без тегов');
    });
  };
  // A Spanish string or a { ru, en } pair (table cells, mini-tab labels).
  const cell = (where, field, c, max) => {
    if (c && typeof c === 'object') {
      both(where, c, field);
      ['ru', 'en'].forEach((l) => { if (max && nonEmpty(c[l]) && c[l].length > max) report(where, `${field}.${l}`, `ячейка длиннее ${max} символов — перенесите объяснение в text`); });
    } else if (typeof c !== 'string') report(where, field, 'нужна строка или { ru, en }');
    else {
      if (max && c.length > max) report(where, field, `ячейка длиннее ${max} символов — перенесите объяснение в text`);
      spanish(where, field, c);
    }
  };
  const BLOCKS = {
    text: (w, b, f) => { color(w, `${f}.color`, b.color, true); richBoth(w, b.body, `${f}.body`); },
    rules: (w, b, f) => each(w, `${f}.items`, b.items, (it, g) => {
      color(w, `${g}.color`, it.color);
      if (it.label !== undefined) both(w, it.label, `${g}.label`);
      both(w, it.title, `${g}.title`);
      richBoth(w, it.body, `${g}.body`);
      if (it.es !== undefined) spanishRich(w, `${g}.es`, it.es);
    }),
    triggers: (w, b, f) => each(w, `${f}.items`, b.items, (it, g) => {
      if (!nonEmpty(it.num)) report(w, `${g}.num`, 'пустое поле');
      color(w, `${g}.color`, it.color, true);
      both(w, it.title, `${g}.title`);
      if (it.sub !== undefined) both(w, it.sub, `${g}.sub`);
      if (it.body !== undefined) richBoth(w, it.body, `${g}.body`);
      list(w, `${g}.phrases`, it.phrases).forEach((p, pi) => {
        if (!nonEmpty(p)) report(w, `${g}.phrases[${pi}]`, 'пустая фраза'); else spanish(w, `${g}.phrases[${pi}]`, p);
      });
      if (it.ex !== undefined) { trio(w, it.ex, `${g}.ex`); if (it.ex && nonEmpty(it.ex.es)) spanishRich(w, `${g}.ex.es`, it.ex.es); }
    }),
    conj: (w, b, f) => each(w, `${f}.verbs`, b.verbs, (v, g) => {
      if (!nonEmpty(v.inf)) report(w, `${g}.inf`, 'пустое поле'); else spanish(w, `${g}.inf`, v.inf);
      if (v.tr !== undefined) both(w, v.tr, `${g}.tr`);
      const vars = Array.isArray(v.variants) ? v.variants : [];
      if (vars.length < 2) return report(w, `${g}.variants`, `вариантов ${vars.length}, нужно не меньше 2 — это мини-вкладки`);
      each(w, `${g}.variants`, vars, (va, h) => {
        cell(w, `${h}.label`, va.label, MINI_LABEL_MAX);
        color(w, `${h}.color`, va.color);
        list(w, `${h}.rows`, va.rows).forEach((r, ri) => {
          if (!Array.isArray(r) || r.length !== 2) return report(w, `${h}.rows[${ri}]`, 'строка — [местоимение, форма]');
          if (!nonEmpty(r[0])) report(w, `${h}.rows[${ri}][0]`, 'пустое поле'); else spanish(w, `${h}.rows[${ri}][0]`, r[0]);
          spanishRich(w, `${h}.rows[${ri}][1]`, r[1]);
        });
      });
    }),
    table: (w, b, f) => {
      const head = list(w, `${f}.head`, b.head);
      head.forEach((c, ci) => { if (c !== '') cell(w, `${f}.head[${ci}]`, c, CELL_MAX); });
      list(w, `${f}.rows`, b.rows).forEach((r, ri) => {
        if (!Array.isArray(r) || r.length !== head.length) report(w, `${f}.rows[${ri}]`, `в строке должно быть ${head.length} ячеек`);
        (Array.isArray(r) ? r : []).forEach((c, ci) => { if (c !== '') cell(w, `${f}.rows[${ri}][${ci}]`, c, CELL_MAX); });
      });
    },
    markers: (w, b, f) => each(w, `${f}.groups`, b.groups, (g0, g) => {
      color(w, `${g}.color`, g0.color);
      both(w, g0.title, `${g}.title`);
      list(w, `${g}.tags`, g0.tags).forEach((t, ti) => {
        if (!nonEmpty(t)) report(w, `${g}.tags[${ti}]`, 'пустая метка'); else spanish(w, `${g}.tags[${ti}]`, t);
      });
    }),
    examples: (w, b, f) => each(w, `${f}.items`, b.items, (ex, g) => {
      trio(w, ex, g);
      if (!nonEmpty(ex.es)) return;
      spanishRich(w, `${g}.es`, ex.es);
      if (!/<b>[^<]+<\/b>/.test(ex.es)) report(w, `${g}.es`, 'изучаемая форма не выделена <b>…</b>');
      color(w, `${g}.color`, ex.color, true);
      if (ex.badge !== undefined && (!nonEmpty(ex.badge) || ex.badge.length > 3)) report(w, `${g}.badge`, 'метка — 1–3 символа');
    }),
    tip: (w, b, f) => { both(w, b.title, `${f}.title`); richBoth(w, b.body, `${f}.body`); }
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
      if (Array.isArray(topic.tabs)) {
        tabbedTopic(where, topic);
        if (topic.sections !== undefined) report(where, 'sections', 'у темы должно быть либо tabs, либо sections — не оба');
      } else legacyTopic(where, topic);
      quizCheck(where, topic);
    });
  });
  return errors;

  // Legacy format (kept while topics are being moved to tabs): sections one after another.
  function legacyTopic(where, topic) {
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
  }

  function quizCheck(where, topic) {
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
  }

  // Tabbed format: hero + 4–6 tabs of typed blocks (see CONTENT.md, «Тема грамматики»).
  function tabbedTopic(where, topic) {
    if (topic.summary !== undefined) both(where, topic.summary, 'summary');
    if (!topic.hero || typeof topic.hero !== 'object') report(where, 'hero', 'нужен hero: { es, sub: { ru, en } }');
    else {
      spanishRich(where, 'hero.es', topic.hero.es);
      plainBoth(where, topic.hero.sub, 'hero.sub');
    }
    const tabs = topic.tabs;
    if (tabs.length < TABS_MIN || tabs.length > TABS_MAX) report(where, 'tabs', `вкладок ${tabs.length}, нужно ${TABS_MIN}–${TABS_MAX} (плюс «Тест», его не описывают)`);
    const ids = new Set();
    let examples = 0;
    tabs.forEach((tab, ti) => {
      const f = `tabs[${ti}]`;
      if (!tab || typeof tab !== 'object') return report(where, f, 'вкладка должна быть объектом');
      if (!nonEmpty(tab.id) || !TAB_ID.test(tab.id)) report(where, `${f}.id`, 'нужен id из латиницы, цифр и дефиса');
      else if (tab.id === 'test') report(where, `${f}.id`, 'id «test» занят вкладкой «Тест»');
      else if (ids.has(tab.id)) report(where, `${f}.id`, `id «${tab.id}» повторяется`);
      ids.add(tab.id);
      both(where, tab.label, `${f}.label`);
      if (tab.label) ['ru', 'en'].forEach((l) => {
        if (nonEmpty(tab.label[l]) && tab.label[l].length > LABEL_MAX) report(where, `${f}.label.${l}`, `подпись длиннее ${LABEL_MAX} символов`);
      });
      const blocks = Array.isArray(tab.blocks) ? tab.blocks : [];
      if (!blocks.length) report(where, `${f}.blocks`, 'во вкладке нет ни одного блока');
      blocks.forEach((b, bi) => {
        const bf = `${f}.blocks[${bi}]`;
        if (!b || typeof b !== 'object') return report(where, bf, 'блок должен быть объектом');
        if (b.heading !== undefined) both(where, b.heading, `${bf}.heading`);
        const check = BLOCKS[b.type];
        if (!check) return report(where, `${bf}.type`, `неизвестный тип блока «${b.type}» (можно: ${Object.keys(BLOCKS).join(', ')})`);
        if (b.type === 'examples' && Array.isArray(b.items)) examples += b.items.length;
        check(where, b, bf);
      });
    });
    if (examples < EXAMPLES_MIN) report(where, 'examples', `примеров ${examples}, нужно не меньше ${EXAMPLES_MIN} (блоки type: 'examples')`);
  }
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
