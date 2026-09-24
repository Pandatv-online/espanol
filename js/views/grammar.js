// Grammar topic screen: explanation sections + "check yourself" quiz.
(function (root) {
  'use strict';
  var ECA = (root.ECA = root.ECA || {});

  if (typeof document === 'undefined' || !ECA.views || !ECA.i18n) return;

  ECA.i18n.add({
    ru: {
      'grammar.check': 'Проверь себя',
      'grammar.checkLead': '{n} вопросов с вариантами ответа. После каждого — пояснение, почему так.',
      'grammar.start': 'Начать тест',
      'grammar.progress': 'Вопрос {n} из {m}',
      'grammar.keys': 'Клавиши 1–{n} — выбрать ответ, Enter — дальше.',
      'grammar.right': 'Верно!',
      'grammar.wrong': 'Неверно. Правильный ответ: {answer}.',
      'grammar.wrongLead': 'Неверно. Правильный ответ:',
      'grammar.markRight': '— верный ответ',
      'grammar.markYours': '— ваш ответ',
      'grammar.next': 'Дальше',
      'grammar.toResult': 'Результат',
      'grammar.resultTitle': 'Результат: {score} из {total}',
      'grammar.passed': 'Тема пройдена — 80% верных ответов или больше.',
      'grammar.notPassed': 'Для зачёта нужно 80% верных ответов. Перечитайте разделы выше и попробуйте ещё раз.',
      'grammar.newBest': 'Это ваш лучший результат.',
      'grammar.best': 'Лучший результат: {score} из {total}.',
      'grammar.retry': 'Ещё раз'
    },
    en: {
      'grammar.check': 'Check yourself',
      'grammar.checkLead': '{n} multiple-choice questions. After each one you’ll see why the answer is right.',
      'grammar.start': 'Start the test',
      'grammar.progress': 'Question {n} of {m}',
      'grammar.keys': 'Keys 1–{n} pick an answer, Enter goes on.',
      'grammar.right': 'Correct!',
      'grammar.wrong': 'Not quite. The right answer is {answer}.',
      'grammar.wrongLead': 'Not quite. The right answer is',
      'grammar.markRight': '— right answer',
      'grammar.markYours': '— your answer',
      'grammar.next': 'Next',
      'grammar.toResult': 'See result',
      'grammar.resultTitle': 'Result: {score} of {total}',
      'grammar.passed': 'Topic passed — 80% or more correct answers.',
      'grammar.notPassed': 'You need 80% correct answers to pass. Reread the sections above and try again.',
      'grammar.newBest': 'This is your best result.',
      'grammar.best': 'Best result: {score} of {total}.',
      'grammar.retry': 'Try again'
    }
  });

  var ui = ECA.ui, i18n = ECA.i18n, el = ui.el, quiz = ECA.quiz, session = quiz.session;
  function t(key, params) { return i18n.t(key, params); }
  function plain(str) { return String(str || '').replace(/<[^>]*>/g, ''); }
  function newSeed() { return Math.floor(Math.random() * 4294967296); }

  // One live quiz at a time; the listener drops it once its node leaves the page.
  var activeKeys = null;
  document.addEventListener('keydown', function (e) {
    if (!activeKeys) return;
    if (!activeKeys.node.isConnected) { activeKeys = null; return; }
    if (!ui.shortcutsApply(e, activeKeys.node, activeKeys.screen)) return;
    var target = e.target;
    // Enter on a link or an ordinary button keeps its native click.
    if (e.key === 'Enter' && target && target.closest && target.closest('a, button:not(.option)')) return;
    if (activeKeys.handle(e.key)) e.preventDefault();
  });

  function renderSection(section) {
    var node = el('section', { class: 'grammar-section' }, [
      el('h2', { class: 'grammar-section__title', text: i18n.pick(section.heading) })
    ]);
    var paragraphs = (section.body && i18n.pick(section.body)) || [];
    if (paragraphs.length) {
      node.appendChild(el('div', { class: 'prose' }, paragraphs.map(function (p) { return ui.setRich(el('p'), p); })));
    }
    if (section.table) node.appendChild(renderTable(section.table, i18n.pick(section.heading)));
    if (section.examples && section.examples.length) {
      node.appendChild(el('ul', { class: 'grammar-examples' }, section.examples.map(function (ex) {
        return el('li', { class: 'example' }, [
          ui.es(ex.es, 'span'),
          el('span', { class: 'example__tr', text: i18n.pick(ex) })
        ]);
      })));
      node.querySelectorAll('.grammar-examples .es').forEach(function (n) { n.classList.add('example__es'); });
    }
    return node;
  }

  function renderTable(table, label) {
    var rowHeads = table.head[0] === '';
    var thead = el('thead', null, el('tr', null, table.head.map(function (h) {
      return el('th', { scope: 'col', text: h });
    })));
    var tbody = el('tbody', null, table.rows.map(function (row) {
      return el('tr', null, row.map(function (cell, i) {
        return rowHeads && i === 0 ? el('th', { scope: 'row', text: cell }) : el('td', { text: cell });
      }));
    }));
    // Focusable region, so a keyboard user can scroll a wide table.
    return el('div', { class: 'table-wrap', role: 'region', tabindex: '0', 'aria-label': label },
      el('table', { class: 'table grammar-table', lang: 'es' }, [thead, tbody]));
  }

  function render(container, ctx) {
    var topic = ctx.topic, state = ctx.state;
    var quizKey = 'grammar:' + topic.id;
    var store = ECA.store;

    var badges = el('div', { class: 'grammar-badges' });
    function paintBadges() {
      ui.clear(badges);
      ui.append(badges, [ui.doneBadge('grammar', topic)].concat(ui.quizBadges(quizKey)));
      badges.hidden = !badges.firstChild;
    }
    paintBadges();

    container.appendChild(ui.screenHead({
      back: ui.backLink(ctx.levelId, 'grammar'),
      title: i18n.pick(topic.title),
      lead: i18n.pick(topic.summary)
    }));
    container.appendChild(badges);

    var article = el('div', { class: 'grammar' }, (topic.sections || []).map(renderSection));
    container.appendChild(article);

    var quizBody = el('div', { class: 'grammar-quiz__body' });
    var quizSection = el('section', { class: 'grammar-quiz panel', 'aria-labelledby': 'grammar-quiz-title' }, [
      el('h2', { class: 'grammar-quiz__title', id: 'grammar-quiz-title', text: t('grammar.check') }),
      quizBody
    ]);
    container.appendChild(quizSection);

    function questions() {
      var q = state.quiz, lang = i18n.lang();
      if (!q.questions || q.lang !== lang) {
        q.questions = quiz.fromGrammar(topic, { lang: lang, rng: quiz.seeded(q.seed) });
        q.lang = lang;
      }
      return q.questions;
    }

    function begin() {
      state.quiz = quiz.attempt(newSeed());
      paint('#grammar-prompt');
    }

    function paint(focusSel) {
      ui.clear(quizBody);
      activeKeys = null;
      if (!state.quiz) paintIntro();
      else if (session.finished(state.quiz.session, questions())) paintResult();
      else paintQuestion();
      if (focusSel) {
        var target = quizBody.querySelector(focusSel);
        if (target) target.focus();
      }
    }

    function paintIntro() {
      var n = (topic.quiz || []).length;
      ui.append(quizBody, [
        el('p', { class: 'grammar-quiz__lead', text: t('grammar.checkLead', { n: n }) }),
        el('div', { class: 'btn-row' }, el('button', {
          class: 'btn btn--primary', type: 'button', text: t('grammar.start'), on: { click: begin }
        }))
      ]);
    }

    function paintQuestion() {
      var qs = questions();
      var s = state.quiz.session;
      var q = qs[s.index];
      var picked = s.picks[s.index];
      var answered = picked != null;
      var last = s.index === qs.length - 1;

      function choose(i) {
        if (session.answered(state.quiz.session)) return;
        state.quiz.session = session.pick(state.quiz.session, qs, i);
        paint('[data-next]');
        var right = i === q.answer;
        ui.announce((right ? t('grammar.right') : t('grammar.wrong', { answer: q.options[q.answer] })) +
          (q.explain ? ' ' + plain(q.explain) : ''));
      }
      function next() {
        if (!session.answered(state.quiz.session)) return;
        state.quiz.session = session.next(state.quiz.session);
        state.quiz = quiz.finish(state.quiz, qs, store, quizKey);
        if (state.quiz.recorded) paintBadges();
        paint(state.quiz.recorded ? '#grammar-result' : '#grammar-prompt');
      }

      var options = q.options.map(function (text, i) {
        var cls = 'option';
        var mark = null;
        if (answered && i === q.answer) { cls += ' is-correct'; mark = t('grammar.markRight'); }
        else if (answered && i === picked) { cls += ' is-wrong'; mark = t('grammar.markYours'); }
        return el('button', {
          class: cls, type: 'button', 'aria-disabled': answered ? 'true' : null,
          'aria-keyshortcuts': String(i + 1),
          on: { click: function () { choose(i); } }
        }, [
          el('span', { class: 'grammar-option__key', 'aria-hidden': 'true', text: String(i + 1) }),
          el('span', { lang: q.optionsLang === 'es' ? 'es' : null, text: text }),
          mark ? el('span', { class: 'visually-hidden', text: ' ' + mark }) : null
        ]);
      });

      var feedback = null;
      if (answered) {
        var right = picked === q.answer;
        feedback = el('div', { class: 'feedback ' + (right ? 'feedback--ok' : 'feedback--bad') }, [
          el('p', { class: 'grammar-feedback__verdict' }, right ? t('grammar.right') : [
            t('grammar.wrongLead') + ' ', el('b', { lang: 'es', text: q.options[q.answer] })
          ]),
          q.explain ? ui.setRich(el('p', { class: 'grammar-feedback__explain' }), q.explain) : null
        ]);
      }

      ui.append(quizBody, [
        el('p', { class: 'grammar-quiz__progress', text: t('grammar.progress', { n: s.index + 1, m: qs.length }) }),
        el('div', { class: 'meter', 'aria-hidden': 'true' },
          el('div', { class: 'meter__fill', style: 'width:' + Math.round((s.index + (answered ? 1 : 0)) / qs.length * 100) + '%' })),
        el('div', { class: 'grammar-question', id: 'grammar-prompt', tabindex: '-1' }, [
          el('p', { class: 'grammar-question__prompt', text: q.prompt }),
          q.es ? el('p', { class: 'grammar-question__es', lang: 'es', text: q.es }) : null
        ]),
        el('div', { class: 'options', role: 'group', 'aria-labelledby': 'grammar-prompt' }, options),
        feedback,
        answered ? el('div', { class: 'btn-row' }, el('button', {
          class: 'btn btn--primary', type: 'button', 'data-next': '',
          text: last ? t('grammar.toResult') : t('grammar.next'), on: { click: next }
        })) : null,
        el('p', { class: 'grammar-quiz__keys', text: t('grammar.keys', { n: q.options.length }) })
      ]);

      activeKeys = {
        node: quizBody,
        screen: container,
        handle: function (key) {
          var action = quiz.keyAction(key, { answered: answered, options: q.options.length });
          if (!action) return false;
          if (action.next) next(); else choose(action.pick);
          return true;
        }
      };
    }

    function paintResult() {
      var r = session.result(state.quiz.session, questions());
      var best = store.best(quizKey);
      var passed = ui.isPassed(r);
      ui.append(quizBody, [
        el('p', { class: 'grammar-result__score', id: 'grammar-result', tabindex: '-1',
          text: t('grammar.resultTitle', { score: r.score, total: r.total }) }),
        el('div', { class: 'meter', 'aria-hidden': 'true' },
          el('div', { class: 'meter__fill', style: 'width:' + Math.round(r.score / r.total * 100) + '%' })),
        el('p', { class: 'feedback ' + (passed ? 'feedback--ok' : 'feedback--bad'),
          text: passed ? t('grammar.passed') : t('grammar.notPassed') }),
        el('p', { class: 'grammar-result__best',
          text: state.quiz.newBest ? t('grammar.newBest')
            : best ? t('grammar.best', { score: best.score, total: best.total }) : null }),
        el('div', { class: 'btn-row' }, el('button', {
          class: 'btn btn--primary', type: 'button', text: t('grammar.retry'), on: { click: begin }
        }))
      ]);
    }

    paint(null);
  }

  ECA.views.register('grammar', render);
})(typeof window !== 'undefined' ? window : globalThis);
