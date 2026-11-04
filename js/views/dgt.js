// Driving theory (DGT): hub, topic screen (tabs of blocks + practice test) and the mock exam.
// Questions are in Spanish, as in the real exam; translation, explanation, mnemonic and the rule's article in RU/EN.
(function (root) {
  'use strict';
  var ECA = (root.ECA = root.ECA || {});

  if (typeof document === 'undefined' || !ECA.views || !ECA.i18n) return;

  ECA.i18n.add({
    ru: {
      'dgt.title': 'Теория на права в Испании',
      'dgt.lead': 'Вопросы на испанском — как на экзамене DGT. К каждому: перевод, объяснение по правилам, подсказка, как запомнить, и статья Reglamento.',
      'dgt.cats': 'Категории {cats}',
      'dgt.examTitle': 'Пробный экзамен',
      'dgt.examLead': '{n} вопросов · {min} минут · можно ошибиться не больше {err} раз. Как на настоящем экзамене: ответы видны только в конце.',
      'dgt.examStart': 'Начать экзамен',
      'dgt.examOpen': 'К экзамену',
      'dgt.topics': 'Темы',
      'dgt.questionsN': '{n} вопросов',
      'dgt.soon': 'Скоро',
      'dgt.catPick': 'Категория экзамена',
      'dgt.catB': 'B — легковые',
      'dgt.catA': 'A — мотоциклы',
      'dgt.disclaimer': 'Это не официальный сайт DGT. Правила изложены по Reglamento General de Circulación; часть иллюстраций — из бесплатного пособия DGT «Manual básico» (lectura fácil).',
      'dgt.dgtLink': 'Пособие на сайте DGT',
      'dgt.back': '← Права в Испании',
      'dgt.tabsLabel': 'Разделы темы',
      'dgt.tabTest': 'Тест',
      'dgt.credit': 'Иллюстрация: {src}',
      'dgt.trOn': 'Перевод: вкл.',
      'dgt.trOff': 'Перевод: выкл.',
      'dgt.trLabel': 'Показывать перевод вопросов',
      'dgt.practiceTitle': 'Тренировка',
      'dgt.practiceLead': '{n} вопросов этой темы в случайном порядке. После каждого ответа — объяснение и подсказка, как запомнить.',
      'dgt.start': 'Начать',
      'dgt.progress': 'Вопрос {n} из {m}',
      'dgt.keys': 'Клавиши 1–{n} — выбрать ответ, Enter или пробел — дальше.',
      'dgt.examKeys': 'Клавиши 1–{n} — выбрать ответ, Enter — дальше.',
      'dgt.right': 'Верно!',
      'dgt.wrongLead': 'Неверно. Правильный ответ:',
      'dgt.markRight': '— верный ответ',
      'dgt.markYours': '— ваш ответ',
      'dgt.markPicked': '— выбрано',
      'dgt.hint': 'Как запомнить',
      'dgt.ref': 'Правило: {ref}',
      'dgt.next': 'Дальше',
      'dgt.prev': 'Назад',
      'dgt.finish': 'Завершить',
      'dgt.toResult': 'Результат',
      'dgt.result': 'Результат: {score} из {total}',
      'dgt.passedTopic': 'Отлично — 90% верных ответов или больше, как нужно на экзамене.',
      'dgt.notPassedTopic': 'На экзамене нужно 90% верных ответов. Перечитайте тему и попробуйте ещё раз.',
      'dgt.best': 'Лучший результат: {score} из {total}.',
      'dgt.newBest': 'Это ваш лучший результат.',
      'dgt.retry': 'Ещё раз',
      'dgt.review': 'Разбор ошибок',
      'dgt.noAnswer': 'нет ответа',
      'dgt.yourAnswer': 'Ваш ответ: ',
      'dgt.rightAnswer': 'Верно: ',
      'dgt.timeLeft': 'Осталось {time}',
      'dgt.timeUp': 'Время вышло',
      'dgt.examPassed': 'Экзамен сдан: ошибок {m} из {err} допустимых.',
      'dgt.examFailed': 'Не сдан: ошибок {m}, а можно не больше {err}.',
      'dgt.answered': 'Отвечено {n} из {m}',
      'dgt.noQuestions': 'Вопросов пока нет',
      'dgt.official': 'Вопрос DGT'
    },
    en: {
      'dgt.title': 'Spanish driving theory test',
      'dgt.lead': 'Questions in Spanish, as in the DGT exam. Each comes with a translation, an explanation of the rule, a memory trick and the article of the Reglamento.',
      'dgt.cats': 'Categories {cats}',
      'dgt.examTitle': 'Mock exam',
      'dgt.examLead': '{n} questions · {min} minutes · at most {err} mistakes allowed. As in the real exam, answers are shown only at the end.',
      'dgt.examStart': 'Start the exam',
      'dgt.examOpen': 'Go to the exam',
      'dgt.topics': 'Topics',
      'dgt.questionsN': '{n} questions',
      'dgt.soon': 'Coming soon',
      'dgt.catPick': 'Exam category',
      'dgt.catB': 'B — cars',
      'dgt.catA': 'A — motorcycles',
      'dgt.disclaimer': 'This is not an official DGT website. The rules follow the Reglamento General de Circulación; some illustrations come from the free DGT “Manual básico” (easy-read).',
      'dgt.dgtLink': 'The manual on the DGT website',
      'dgt.back': '← Driving test',
      'dgt.tabsLabel': 'Topic sections',
      'dgt.tabTest': 'Test',
      'dgt.credit': 'Illustration: {src}',
      'dgt.trOn': 'Translation: on',
      'dgt.trOff': 'Translation: off',
      'dgt.trLabel': 'Show question translations',
      'dgt.practiceTitle': 'Practice',
      'dgt.practiceLead': '{n} questions of this topic in random order. After each answer — an explanation and a memory trick.',
      'dgt.start': 'Start',
      'dgt.progress': 'Question {n} of {m}',
      'dgt.keys': 'Keys 1–{n} pick an answer, Enter or Space goes on.',
      'dgt.examKeys': 'Keys 1–{n} pick an answer, Enter goes on.',
      'dgt.right': 'Correct!',
      'dgt.wrongLead': 'Not quite. The right answer is',
      'dgt.markRight': '— right answer',
      'dgt.markYours': '— your answer',
      'dgt.markPicked': '— selected',
      'dgt.hint': 'How to remember',
      'dgt.ref': 'Rule: {ref}',
      'dgt.next': 'Next',
      'dgt.prev': 'Back',
      'dgt.finish': 'Finish',
      'dgt.toResult': 'See result',
      'dgt.result': 'Result: {score} of {total}',
      'dgt.passedTopic': 'Great — 90% or more correct, as the exam requires.',
      'dgt.notPassedTopic': 'The exam needs 90% correct answers. Reread the topic and try again.',
      'dgt.best': 'Best result: {score} of {total}.',
      'dgt.newBest': 'This is your best result.',
      'dgt.retry': 'Try again',
      'dgt.review': 'Your mistakes',
      'dgt.noAnswer': 'no answer',
      'dgt.yourAnswer': 'Your answer: ',
      'dgt.rightAnswer': 'Correct: ',
      'dgt.timeLeft': '{time} left',
      'dgt.timeUp': 'Time is up',
      'dgt.examPassed': 'Exam passed: {m} mistakes, {err} allowed.',
      'dgt.examFailed': 'Not passed: {m} mistakes, at most {err} allowed.',
      'dgt.answered': 'Answered {n} of {m}',
      'dgt.noQuestions': 'No questions yet',
      'dgt.official': 'DGT question'
    }
  });

  var ui = ECA.ui, i18n = ECA.i18n, el = ui.el, quiz = ECA.quiz, session = quiz.session, store = ECA.store, data = ECA.data;
  var pick = i18n.pick;
  function t(key, params) { return i18n.t(key, params); }
  function newSeed() { return Math.floor(Math.random() * 4294967296); }
  function plain(str) { return String(str || '').replace(/<[^>]*>/g, ''); }

  var EXAM = { count: 30, minutes: 30, mistakes: 3 };
  var PASS = 0.9;                       // the DGT exam: 27 of 30
  function examKey(cat) { return 'dgt:exam:' + cat; }
  var DGT_URL = 'https://www.dgt.es/nuestros-servicios/permisos-de-conducir/accesibilidad/';
  ECA.dgt = { EXAM: EXAM, PASS: PASS };

  function passed(best) { return !!best && best.total > 0 && best.score / best.total >= PASS; }
  function topicKey(topic) { return 'dgt:' + topic.id; }
  // Questions of every topic for category `cat` (none → all categories).
  function allQuestions(cat) {
    return data.dgt().reduce(function (all, topic) {
      return cat && (topic.cats || []).indexOf(cat) < 0 ? all : all.concat(topic.questions || []);
    }, []);
  }
  function examCat() { return store.pref('dgtCat') === 'A' ? 'A' : 'B'; }

  // Topics still being written: shown on the hub as «coming soon» until a data file adds them.
  var PLANNED = [
    { id: 'senales', ru: 'Знаки и разметка', en: 'Signs and markings' },
    { id: 'velocidad', ru: 'Скорость и дистанция', en: 'Speed and distance' },
    { id: 'maniobras', ru: 'Манёвры', en: 'Manoeuvres' },
    { id: 'via', ru: 'Дорога и полосы', en: 'The road and lanes' },
    { id: 'luces', ru: 'Свет', en: 'Lights' },
    { id: 'documentacion', ru: 'Документы и баллы', en: 'Documents and points' },
    { id: 'conductor', ru: 'Алкоголь, усталость, лекарства', en: 'Alcohol, fatigue, medicines' },
    { id: 'seguridad', ru: 'Ремни, дети, груз', en: 'Belts, children, loads' },
    { id: 'conduccion', ru: 'Безопасное вождение', en: 'Safe driving' },
    { id: 'mecanica', ru: 'Устройство машины', en: 'The vehicle' },
    { id: 'accidentes', ru: 'ДТП и первая помощь', en: 'Accidents and first aid' },
    { id: 'eficiente', ru: 'Экономичное вождение', en: 'Eco-driving' },
    { id: 'motos', ru: 'Мотоциклы (A)', en: 'Motorcycles (A)' }
  ];

  // One live test at a time; the listener drops it once its node leaves the page.
  var activeKeys = null;
  document.addEventListener('keydown', function (e) {
    if (!activeKeys) return;
    if (!activeKeys.node.isConnected) { activeKeys = null; return; }
    if (!ui.shortcutsApply(e, activeKeys.node, activeKeys.screen)) return;
    var target = e.target;
    if ((e.key === 'Enter' || e.key === ' ') && target && target.closest && target.closest('a, button:not(.option):not([role="tab"])')) return;
    if (activeKeys.handle(e.key)) e.preventDefault();
  });

  // ---------- translation toggle (one preference for practice and exam) ----------
  function showTr() { return store.pref('dgtTr') !== 'off'; }
  function trToggle(onChange) {
    var on = showTr();
    return el('button', {
      class: 'chip dgt-tr-toggle', type: 'button', 'aria-pressed': on ? 'true' : 'false', title: t('dgt.trLabel'),
      text: t(on ? 'dgt.trOn' : 'dgt.trOff'),
      on: { click: function () { store.setPref('dgtTr', showTr() ? 'off' : 'on'); onChange(); } }
    });
  }

  // ---------- blocks: the grammar blocks plus `figure` and `signs` ----------
  function figure(b, lang) {
    var cap = b.caption ? pick(b.caption, lang) : '';
    var credit = b.credit ? t('dgt.credit', { src: b.credit }) : '';
    return el('figure', { class: 'dgt-figure' + (/senal-/.test(b.src) ? ' dgt-figure--sign' : '') }, [
      el('img', { src: b.src, alt: pick(b.alt, lang), loading: 'lazy', decoding: 'async' }),
      cap || credit ? el('figcaption', null, [
        cap ? el('span', { text: cap }) : null,
        credit ? el('span', { class: 'dgt-figure__credit', text: credit }) : null
      ]) : null
    ]);
  }

  function signs(b, lang) {
    return el('ul', { class: 'sign-grid', role: 'list' }, b.items.map(function (s) {
      return el('li', { class: 'sign-card' }, [
        el('img', { class: 'sign-card__img', src: s.src, alt: '', loading: 'lazy', decoding: 'async' }),
        el('div', { class: 'sign-card__text' }, [
          el('p', { class: 'sign-card__name' }, [
            el('span', { class: 'sign-card__code', text: s.code }), ' ',
            el('span', { lang: 'es', text: s.es })
          ]),
          el('p', { class: 'sign-card__meaning', text: pick(s, lang) })
        ])
      ]);
    }));
  }

  var OWN = { figure: figure, signs: signs };
  function renderBlock(block, lang) {
    if (!OWN[block.type]) return ECA.grammarBlocks.render(block, lang);
    return el('div', { class: 'gblock gblock--' + block.type }, [
      block.heading ? el('h3', { class: 'group-title', text: pick(block.heading, lang) }) : null,
      OWN[block.type](block, lang)
    ]);
  }
  ECA.dgtBlocks = { render: renderBlock, types: Object.keys(OWN).concat(ECA.grammarBlocks ? ECA.grammarBlocks.types : []) };

  // ---------- question card, shared by practice and exam ----------
  // mode: 'practice' (answer shown at once) | 'exam' (choice can change, nothing revealed) | 'review'
  function questionNode(q, opts) {
    var lang = i18n.lang(), tr = showTr();
    var picked = opts.picked, reveal = opts.reveal;
    var options = q.options.map(function (o, i) {
      var cls = 'option dgt-option';
      var mark = null;
      if (reveal && i === q.answer) { cls += ' is-correct'; mark = t('dgt.markRight'); }
      else if (reveal && i === picked) { cls += ' is-wrong'; mark = t('dgt.markYours'); }
      else if (!reveal && i === picked) { cls += ' is-picked'; mark = t('dgt.markPicked'); }
      return el('button', {
        class: cls, type: 'button', 'aria-keyshortcuts': String(i + 1),
        'aria-disabled': reveal ? 'true' : null, 'aria-pressed': !reveal && opts.mode === 'exam' ? String(i === picked) : null,
        on: { click: function () { if (opts.onPick) opts.onPick(i); } }
      }, [
        el('span', { class: 'grammar-option__key', 'aria-hidden': 'true', text: String(i + 1) }),
        el('span', { class: 'dgt-option__text' }, [
          el('span', { class: 'dgt-option__es', lang: 'es', text: o.es }),
          tr ? el('span', { class: 'dgt-option__tr', text: pick(o, lang) }) : null
        ]),
        mark ? el('span', { class: 'visually-hidden', text: ' ' + mark }) : null
      ]);
    });
    return el('div', { class: 'dgt-q' }, [
      q.img ? el('img', { class: 'dgt-q__img' + (/senal-/.test(q.img) ? ' dgt-q__img--sign' : ''), src: q.img, alt: pick(q.alt, lang) || '' }) : null,
      el('div', { class: 'grammar-question dgt-q__prompt', id: 'dgt-prompt', tabindex: '-1' }, [
        q.source === 'dgt' ? el('p', { class: 'dgt-q__source' }, ui.badge(t('dgt.official'), 'cat')) : null,
        el('p', { class: 'grammar-question__es', lang: 'es', text: q.es }),
        tr ? el('p', { class: 'dgt-q__tr', text: pick(q.tr, lang) }) : null
      ]),
      el('div', { class: 'options', role: 'group', 'aria-labelledby': 'dgt-prompt' }, options)
    ]);
  }

  function explainNode(q, right) {
    var lang = i18n.lang();
    return el('div', { class: 'feedback ' + (right ? 'feedback--ok' : 'feedback--bad') }, [
      el('p', { class: 'grammar-feedback__verdict' }, right ? t('dgt.right') : [
        t('dgt.wrongLead') + ' ', el('b', { lang: 'es', text: q.options[q.answer].es })
      ]),
      ui.setRich(el('p', { class: 'grammar-feedback__explain' }), pick(q.explain, lang)),
      q.hint ? el('p', { class: 'dgt-hint' }, [el('b', { text: t('dgt.hint') + ': ' }), pick(q.hint, lang)]) : null,
      q.ref ? el('p', { class: 'dgt-ref', text: t('dgt.ref', { ref: q.ref }) }) : null
    ]);
  }

  function meter(ratio) {
    return el('div', { class: 'meter', 'aria-hidden': 'true' },
      el('div', { class: 'meter__fill', style: 'width:' + Math.round(ratio * 100) + '%' }));
  }

  // Wrong or unanswered questions with the right answer and the explanation.
  function review(qs, picks) {
    var lang = i18n.lang();
    var wrong = qs.map(function (q, i) { return i; }).filter(function (i) { return picks[i] !== qs[i].answer; });
    if (!wrong.length) return null;
    return el('section', { class: 'dgt-review', 'aria-labelledby': 'dgt-review-title' }, [
      el('h3', { class: 'group-title', id: 'dgt-review-title', text: t('dgt.review') + ' · ' + wrong.length }),
      el('ol', { class: 'dgt-review__list' }, wrong.map(function (i) {
        var q = qs[i], p = picks[i];
        return el('li', { class: 'dgt-review__item' }, [
          el('p', { class: 'dgt-review__q', lang: 'es', text: q.es }),
          showTr() ? el('p', { class: 'dgt-q__tr', text: pick(q.tr, lang) }) : null,
          el('p', { class: 'dgt-review__yours' }, [t('dgt.yourAnswer'),
            p == null ? el('i', { text: t('dgt.noAnswer') }) : el('span', { lang: 'es', text: q.options[p].es })]),
          el('p', { class: 'dgt-review__right' }, [t('dgt.rightAnswer'), el('b', { lang: 'es', text: q.options[q.answer].es })]),
          ui.setRich(el('p', { class: 'dgt-review__explain' }), pick(q.explain, lang)),
          q.hint ? el('p', { class: 'dgt-hint' }, [el('b', { text: t('dgt.hint') + ': ' }), pick(q.hint, lang)]) : null,
          q.ref ? el('p', { class: 'dgt-ref', text: t('dgt.ref', { ref: q.ref }) }) : null
        ]);
      }))
    ]);
  }

  // ---------- practice: every question of a topic, answer shown at once ----------
  function mountPractice(body, container, topic, state, onRecord) {
    var key = topicKey(topic);
    function questions() {
      var q = state.practice;
      if (!q.questions) q.questions = quiz.fromDgt(topic.questions, { rng: quiz.seeded(q.seed) });
      return q.questions;
    }
    function begin() { state.practice = quiz.attempt(newSeed()); paint('#dgt-prompt'); }

    function paint(focusSel) {
      ui.clear(body);
      activeKeys = null;
      if (!state.practice) intro();
      else if (session.finished(state.practice.session, questions())) result();
      else question();
      if (focusSel) { var n = body.querySelector(focusSel); if (n) n.focus(); }
    }

    function intro() {
      ui.append(body, [
        el('p', { class: 'grammar-quiz__lead', text: t('dgt.practiceLead', { n: topic.questions.length }) }),
        el('div', { class: 'btn-row' }, [
          el('button', { class: 'btn btn--primary', type: 'button', text: t('dgt.start'), on: { click: begin } }),
          trToggle(function () { paint(null); })
        ])
      ]);
    }

    function question() {
      var qs = questions(), s = state.practice.session, q = qs[s.index];
      var picked = s.picks[s.index], answered = picked != null, last = s.index === qs.length - 1;
      function choose(i) {
        if (session.answered(state.practice.session)) return;
        state.practice.session = session.pick(state.practice.session, qs, i);
        paint('[data-next]');
        ui.announce((i === q.answer ? t('dgt.right') : t('dgt.wrongLead') + ' ' + q.options[q.answer].es) + ' ' + plain(pick(q.explain)));
      }
      function next() {
        if (!session.answered(state.practice.session)) return;
        state.practice.session = session.next(state.practice.session);
        state.practice = quiz.finish(state.practice, qs, store, key);
        if (state.practice.recorded) onRecord();
        paint(state.practice.recorded ? '#dgt-result' : '#dgt-prompt');
      }
      ui.append(body, [
        el('div', { class: 'dgt-bar' }, [
          el('p', { class: 'grammar-quiz__progress', text: t('dgt.progress', { n: s.index + 1, m: qs.length }) }),
          trToggle(function () { paint(null); })
        ]),
        meter((s.index + (answered ? 1 : 0)) / qs.length),
        questionNode(q, { mode: 'practice', picked: picked, reveal: answered, onPick: choose }),
        answered ? explainNode(q, picked === q.answer) : null,
        answered ? el('div', { class: 'btn-row' }, el('button', {
          class: 'btn btn--primary', type: 'button', 'data-next': '', text: t(last ? 'dgt.toResult' : 'dgt.next'), on: { click: next }
        })) : null,
        el('p', { class: 'grammar-quiz__keys', text: t('dgt.keys', { n: q.options.length }) })
      ]);
      activeKeys = { node: body, screen: container, handle: function (k) {
        var a = quiz.keyAction(k, { answered: answered, options: q.options.length });
        if (!a) return false;
        if (a.next) next(); else choose(a.pick);
        return true;
      } };
    }

    function result() {
      var qs = questions(), r = session.result(state.practice.session, qs), best = store.best(key), ok = r.score / r.total >= PASS;
      ui.append(body, [
        el('p', { class: 'grammar-result__score', id: 'dgt-result', tabindex: '-1', text: t('dgt.result', { score: r.score, total: r.total }) }),
        meter(r.score / r.total),
        el('p', { class: 'feedback ' + (ok ? 'feedback--ok' : 'feedback--bad'), text: t(ok ? 'dgt.passedTopic' : 'dgt.notPassedTopic') }),
        el('p', { class: 'grammar-result__best', text: state.practice.newBest ? t('dgt.newBest') : best ? t('dgt.best', { score: best.score, total: best.total }) : null }),
        el('div', { class: 'btn-row' }, el('button', { class: 'btn btn--primary', type: 'button', text: t('dgt.retry'), on: { click: begin } })),
        review(qs, state.practice.session.picks)
      ]);
    }

    paint(null);
  }

  // ---------- mock exam: 30 questions from every topic, 30 minutes, ≤ 3 mistakes ----------
  function fmtTime(ms) {
    var s = Math.max(0, Math.ceil(ms / 1000));
    var m = Math.floor(s / 60);
    return m + ':' + (s % 60 < 10 ? '0' : '') + (s % 60);
  }

  function mountExam(body, container, state) {
    var timer = null;

    function begin() {
      var seed = newSeed(), cat = examCat(), pool = allQuestions(cat);
      state.exam = { cat: cat, seed: seed, questions: quiz.fromDgt(pool, { rng: quiz.seeded(seed), count: EXAM.count }),
        picks: [], index: 0, startedAt: Date.now(), done: false, recorded: false, newBest: false };
      paint('#dgt-prompt');
    }
    function remaining() { return state.exam.startedAt + EXAM.minutes * 60000 - Date.now(); }

    function finish() {
      var ex = state.exam;
      if (ex.done) return;
      ex.done = true;
      var r = session.result({ picks: ex.picks }, ex.questions);
      var key = examKey(ex.cat || 'B'), had = !!store.best(key);
      var isBest = store.recordScore(key, r.score, r.total);
      ex.newBest = had && !!isBest;
      ex.recorded = true;
      paint('#dgt-result');
    }

    function paint(focusSel) {
      if (timer) { clearInterval(timer); timer = null; }
      ui.clear(body);
      activeKeys = null;
      if (!state.exam) intro();
      else if (state.exam.done || remaining() <= 0) { if (!state.exam.done) { finish(); return; } result(); }
      else question();
      if (focusSel) { var n = body.querySelector(focusSel); if (n) n.focus(); }
    }

    function intro() {
      var cat = examCat(), best = store.best(examKey(cat)), pool = allQuestions(cat);
      var cats = el('div', { class: 'btn-row dgt-cats', role: 'group', 'aria-label': t('dgt.catPick') }, ['B', 'A'].map(function (c) {
        return el('button', { class: 'chip', type: 'button', 'aria-pressed': String(c === cat), text: t('dgt.cat' + c),
          on: { click: function () { store.setPref('dgtCat', c); paint(null); } } });
      }));
      ui.append(body, [
        cats,
        el('p', { class: 'grammar-quiz__lead', text: t('dgt.examLead', { n: Math.min(EXAM.count, pool.length), min: EXAM.minutes, err: EXAM.mistakes }) }),
        best ? el('p', { class: 'grammar-result__best', text: t('dgt.best', { score: best.score, total: best.total }) }) : null,
        el('div', { class: 'btn-row' }, [
          el('button', { class: 'btn btn--primary', type: 'button', text: t('dgt.examStart'), on: { click: begin }, disabled: pool.length ? null : true }),
          trToggle(function () { paint(null); })
        ])
      ]);
    }

    function question() {
      var ex = state.exam, qs = ex.questions, q = qs[ex.index], picked = ex.picks[ex.index], last = ex.index === qs.length - 1;
      var answeredN = ex.picks.filter(function (p) { return p != null; }).length;
      function choose(i) { ex.picks[ex.index] = i; paint('[data-next]'); }
      function go(d) {
        if (d > 0 && last) { finish(); return; }
        ex.index = Math.max(0, Math.min(qs.length - 1, ex.index + d));
        paint('#dgt-prompt');
      }
      var clock = el('p', { class: 'dgt-clock', role: 'timer', 'aria-live': 'off', text: t('dgt.timeLeft', { time: fmtTime(remaining()) }) });
      ui.append(body, [
        el('div', { class: 'dgt-bar' }, [
          el('p', { class: 'grammar-quiz__progress', text: t('dgt.progress', { n: ex.index + 1, m: qs.length }) + ' · ' + t('dgt.answered', { n: answeredN, m: qs.length }) }),
          clock,
          trToggle(function () { paint(null); })
        ]),
        meter(answeredN / qs.length),
        questionNode(q, { mode: 'exam', picked: picked, reveal: false, onPick: choose }),
        el('div', { class: 'btn-row' }, [
          ex.index > 0 ? el('button', { class: 'btn', type: 'button', text: t('dgt.prev'), on: { click: function () { go(-1); } } }) : null,
          el('button', { class: 'btn btn--primary', type: 'button', 'data-next': '', text: t(last ? 'dgt.finish' : 'dgt.next'), on: { click: function () { go(1); } } })
        ]),
        el('p', { class: 'grammar-quiz__keys', text: t('dgt.examKeys', { n: q.options.length }) })
      ]);
      timer = setInterval(function () {
        if (!clock.isConnected) { clearInterval(timer); timer = null; return; }
        if (remaining() <= 0) { clearInterval(timer); timer = null; ui.announce(t('dgt.timeUp')); finish(); return; }
        clock.textContent = t('dgt.timeLeft', { time: fmtTime(remaining()) });
      }, 1000);
      activeKeys = { node: body, screen: container, handle: function (k) {
        if (k === 'Enter') { go(1); return true; }
        var a = quiz.keyAction(k, { answered: false, options: q.options.length });
        if (!a || a.next) return false;
        choose(a.pick);
        return true;
      } };
    }

    function result() {
      var ex = state.exam, qs = ex.questions, r = session.result({ picks: ex.picks }, qs);
      var mistakes = r.total - r.score, ok = mistakes <= EXAM.mistakes, best = store.best(examKey(ex.cat || 'B'));
      ui.append(body, [
        el('p', { class: 'grammar-result__score', id: 'dgt-result', tabindex: '-1', text: t('dgt.result', { score: r.score, total: r.total }) }),
        meter(r.score / r.total),
        el('p', { class: 'feedback ' + (ok ? 'feedback--ok' : 'feedback--bad'), text: t(ok ? 'dgt.examPassed' : 'dgt.examFailed', { m: mistakes, err: EXAM.mistakes }) }),
        el('p', { class: 'grammar-result__best', text: ex.newBest ? t('dgt.newBest') : best ? t('dgt.best', { score: best.score, total: best.total }) : null }),
        el('div', { class: 'btn-row' }, el('button', { class: 'btn btn--primary', type: 'button', text: t('dgt.retry'), on: { click: begin } })),
        review(qs, ex.picks)
      ]);
    }

    paint(null);
  }

  // ---------- screens ----------
  function catsBadges(topic) {
    return (topic.cats || []).map(function (c) { return ui.badge(c, 'cat'); });
  }

  function hero(title, sub, extra, titleLang) {
    return el('header', { class: 'hero dgt-hero' }, [
      ui.setRich(el('h1', { class: 'hero__title', lang: titleLang || null, tabindex: '-1' }), title),
      sub ? el('p', { class: 'hero__sub', text: sub }) : null,
      extra || null
    ]);
  }

  function soonNode() {
    var have = data.dgt().map(function (x) { return x.id; });
    var left = PLANNED.filter(function (x) { return have.indexOf(x.id) < 0; });
    return left.length ? el('p', { class: 'dgt-soon' }, [el('b', { text: t('dgt.soon') + ': ' }),
      left.map(function (x) { return pick(x); }).join(' · ')]) : null;
  }

  function backLink() { return el('p', { class: 'grammar-back' }, el('a', { class: 'backlink', href: '#/dgt', text: t('dgt.back') })); }

  ECA.views.register('dgt', function (container) {
    var topics = data.dgt(), examBest = store.best(examKey(examCat())), n = allQuestions(examCat()).length;
    container.appendChild(hero(t('dgt.title'), t('dgt.lead'),
      el('div', { class: 'grammar-badges hero__meta' }, [ui.badge(t('dgt.cats', { cats: 'A · B' }), 'cat')])));

    container.appendChild(el('section', { class: 'panel dgt-exam-card', 'aria-labelledby': 'dgt-exam-title' }, [
      el('h2', { class: 'grammar-quiz__title', id: 'dgt-exam-title', text: t('dgt.examTitle') }),
      el('p', { class: 'grammar-quiz__lead', text: t('dgt.examLead', { n: Math.min(EXAM.count, n), min: EXAM.minutes, err: EXAM.mistakes }) }),
      examBest ? el('p', null, ui.badge(t('badge.test', { score: examBest.score, total: examBest.total }), passed(examBest) ? 'done' : 'score')) : null,
      el('p', { class: 'btn-row' }, el('a', { class: 'btn btn--primary', href: '#/dgt/examen', text: t('dgt.examOpen') }))
    ]));

    container.appendChild(el('section', { class: 'topic-section', 'aria-labelledby': 'section-dgt' }, [
      el('h2', { class: 'section-title', id: 'section-dgt' }, [t('dgt.topics'), el('span', { class: 'section-title__count', text: String(topics.length) })]),
      topics.length ? el('ul', { class: 'topic-list', role: 'list' }, topics.map(function (topic, i) {
        var best = store.best(topicKey(topic));
        var badges = catsBadges(topic).concat(ui.badge(t('dgt.questionsN', { n: topic.questions.length })));
        if (best) badges.push(ui.badge(t('badge.test', { score: best.score, total: best.total }), 'score'));
        if (passed(best)) badges.push(ui.badge(t('badge.passed'), 'done'));
        return el('li', null, ui.outline(el('a', { class: 'topic-row', href: '#/dgt/' + encodeURIComponent(topic.id) }, [
          el('span', { class: 'topic-row__num', 'aria-hidden': 'true', text: String(i + 1) }),
          el('span', { class: 'topic-row__text' }, [
            el('span', { class: 'topic-row__title', text: pick(topic.title) }),
            topic.summary ? el('span', { class: 'topic-row__summary', text: pick(topic.summary) }) : null
          ]),
          el('span', { class: 'topic-row__meta' }, badges)
        ])));
      })) : ui.emptyState({ title: t('dgt.noQuestions') }),
      soonNode()
    ]));

    container.appendChild(el('p', { class: 'dgt-disclaimer' }, [
      t('dgt.disclaimer') + ' ',
      el('a', { href: DGT_URL, target: '_blank', rel: 'noopener' }, [t('dgt.dgtLink'), el('span', { class: 'visually-hidden', text: ' ' + t('tg.newTab') })])
    ]));
  });

  ECA.views.register('dgt-exam', function (container, ctx) {
    container.appendChild(backLink());
    container.appendChild(hero(t('dgt.examTitle'), null, null));
    var body = el('div', { class: 'grammar-quiz__body' });
    container.appendChild(el('section', { class: 'grammar-quiz panel dgt-quiz', 'aria-label': t('dgt.examTitle') }, body));
    mountExam(body, container, ctx.state);
  });

  ECA.views.register('dgt-topic', function (container, ctx) {
    var topic = ctx.topic, lang = i18n.lang(), TEST = 'test';
    var ids = topic.tabs.map(function (tab) { return tab.id; }).concat(TEST);
    var wanted = ctx.route.tab;
    var active = ids.indexOf(wanted) >= 0 ? wanted : ids[0];
    var base = '#/dgt/' + encodeURIComponent(topic.id);
    if (wanted && wanted !== active) replaceHash(base);

    var badges = el('div', { class: 'grammar-badges hero__meta' });
    function paintBadges() {
      ui.clear(badges);
      var best = store.best(topicKey(topic));
      ui.append(badges, catsBadges(topic).concat(best ? [ui.badge(t('badge.test', { score: best.score, total: best.total }), 'score')] : [],
        passed(best) ? [ui.badge(t('badge.passed'), 'done')] : []));
    }
    paintBadges();

    container.appendChild(backLink());
    container.appendChild(hero(topic.hero.es, pick(topic.hero.sub, lang), badges, 'es'));

    var panel = el('div', { class: 'grammar-panel', id: 'dgt-panel', role: 'tabpanel' });
    var strip = ui.tabs({
      label: t('dgt.tabsLabel'), panelId: 'dgt-panel', active: active,
      items: topic.tabs.map(function (tab) { return { id: tab.id, label: pick(tab.label, lang) }; })
        .concat({ id: TEST, label: t('dgt.tabTest') }),
      onSelect: function (id) {
        if (id === active) return;
        active = id;
        strip.select(id);
        replaceHash(base + '/' + encodeURIComponent(id));
        paintPanel();
      }
    });
    strip.classList.add('grammar-tabs');
    container.appendChild(strip);
    container.appendChild(panel);

    function paintPanel() {
      ui.clear(panel);
      panel.setAttribute('aria-labelledby', 'tab-' + active);
      if (active === TEST) {
        var body = el('div', { class: 'grammar-quiz__body' });
        panel.appendChild(el('section', { class: 'grammar-quiz panel dgt-quiz', 'aria-labelledby': 'dgt-quiz-title' }, [
          el('h2', { class: 'grammar-quiz__title', id: 'dgt-quiz-title', text: t('dgt.practiceTitle') }), body
        ]));
        mountPractice(body, container, topic, ctx.state, paintBadges);
        return;
      }
      var tab = topic.tabs[ids.indexOf(active)];
      ui.append(panel, tab.blocks.map(function (b) { return renderBlock(b, lang); }));
    }
    paintPanel();
    var sel = strip.querySelector('[aria-selected="true"]');
    if (sel && sel.scrollIntoView && active !== ids[0]) strip.scrollLeft = sel.offsetLeft - strip.offsetLeft;
  });

  function replaceHash(hash) {
    if (root.location.hash === hash) return;
    try { root.history.replaceState(null, '', hash); } catch (e) { /* file:// may refuse; the tab still switches */ }
  }
})(typeof window !== 'undefined' ? window : globalThis);
