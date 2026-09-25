// Grammar topic screen: hero + numbered tabs of typed blocks + a last "Test" tab.
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
      'grammar.newBest': 'Это ваш лучший результат.',
      'grammar.best': 'Лучший результат: {score} из {total}.',
      'grammar.retry': 'Ещё раз',
      'grammar.tabTest': 'Тест',
      'grammar.tabsLabel': 'Разделы темы',
      'grammar.tableOf': 'Таблица: {cols}',
      'grammar.notPassedTabs': 'Для зачёта нужно 80% верных ответов. Перечитайте вкладки темы и попробуйте ещё раз.'
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
      'grammar.newBest': 'This is your best result.',
      'grammar.best': 'Best result: {score} of {total}.',
      'grammar.retry': 'Try again',
      'grammar.tabTest': 'Test',
      'grammar.tabsLabel': 'Topic sections',
      'grammar.tableOf': 'Table: {cols}',
      'grammar.notPassedTabs': 'You need 80% correct answers to pass. Reread the topic tabs and try again.'
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

  // ---------- blocks of the tabbed schema (see CONTENT.md, «Тема грамматики») ----------
  var uid = 0;
  var pick = i18n.pick;
  function paras(v, lang) { var x = pick(v, lang); return Array.isArray(x) ? x : [x]; }
  function rich(tag, str, attrs) { return ui.setRich(el(tag, attrs || null), str); }
  function colorClass(c) { return c ? 'c-' + c : null; }
  function cls() { return [].slice.call(arguments).filter(Boolean).join(' '); }

  // A tab list inside a card: each tab shows its own panel (arrows, Home, End via ui.rovingTabs).
  function miniTabs(label, items, onSelect) {
    var list = el('div', { class: 'mini-tabs', role: 'tablist', 'aria-label': label });
    var buttons = items.map(function (item, i) {
      return el('button', {
        class: cls('mini-tab', colorClass(item.color)), type: 'button', role: 'tab', id: item.id,
        'aria-controls': item.panel, lang: item.lang || null, text: item.text,
        on: { click: function () { select(i); } }
      });
    });
    function select(i) { ui.markSelected(buttons, i); onSelect(i); }
    ui.rovingTabs(list, buttons, select);
    ui.append(list, buttons);
    select(0);
    return list;
  }

  var BLOCKS = {
    text: function (b, lang) {
      var ps = paras(b.body, lang).map(function (p) { return rich('p', p); });
      return b.color ? el('div', { class: cls('rule-box', colorClass(b.color)) }, ps) : el('div', { class: 'prose' }, ps);
    },
    rules: function (b, lang) {
      return el('div', { class: 'rule-grid' }, b.items.map(function (it) {
        return el('div', { class: cls('rule-card', colorClass(it.color)) }, [
          it.label ? el('p', { class: 'rule-card__label', text: pick(it.label, lang) }) : null,
          el('p', { class: 'rule-card__title', text: pick(it.title, lang) }),
          it.es ? rich('p', it.es, { class: 'rule-card__es', lang: 'es' }) : null,
          el('div', { class: 'rule-card__body' }, paras(it.body, lang).map(function (p) { return rich('p', p); }))
        ]);
      }));
    },
    triggers: function (b, lang) {
      return el('div', { class: 'trigger-list' }, b.items.map(function (it) {
        return el('div', { class: cls('trigger-card', colorClass(it.color)) }, [
          el('div', { class: 'trigger-card__head' }, [
            el('span', { class: 'trigger-card__num', text: it.num }),
            el('p', { class: 'trigger-card__title', text: pick(it.title, lang) }),
            it.sub ? el('p', { class: 'trigger-card__sub', text: pick(it.sub, lang) }) : null
          ]),
          el('div', { class: 'trigger-card__body' }, [
            it.body ? el('div', { class: 'prose' }, paras(it.body, lang).map(function (p) { return rich('p', p); })) : null,
            el('ul', { class: 'phrase-list', lang: 'es' }, it.phrases.map(function (ph) {
              return el('li', { class: cls('phrase', colorClass(it.color)), text: ph });
            })),
            it.ex ? el('div', { class: 'trigger-card__ex' }, [
              rich('p', it.ex.es, { lang: 'es' }),
              el('p', { class: 'trigger-card__tr', text: pick(it.ex, lang) })
            ]) : null
          ])
        ]);
      }));
    },
    conj: function (b, lang) {
      return el('div', { class: 'conj-grid' }, b.verbs.map(function (v) {
        var key = 'conj-' + (++uid);
        var panels = v.variants.map(function (va, i) {
          return el('div', {
            class: cls('conj-forms', colorClass(va.color)), role: 'tabpanel', id: key + '-p' + i,
            'aria-labelledby': key + '-t' + i, lang: 'es'
          }, va.rows.map(function (r) {
            return el('div', { class: 'form-row' }, [
              el('span', { class: 'form-row__pron', text: r[0] }),
              rich('span', r[1], { class: 'form-row__word' })
            ]);
          }));
        });
        var tabs = miniTabs(v.inf, v.variants.map(function (va, i) {
          return { id: key + '-t' + i, panel: key + '-p' + i, color: va.color,
            text: pick(va.label, lang), lang: typeof va.label === 'string' ? 'es' : null };
        }), function (i) { panels.forEach(function (p, j) { p.hidden = i !== j; }); });
        return el('div', { class: cls('conj-card', colorClass(v.variants[0].color)) }, [
          el('div', { class: 'conj-card__head' }, [
            el('span', { class: 'conj-card__verb', lang: 'es', text: v.inf }),
            v.tr ? el('span', { class: 'conj-card__tr', text: pick(v.tr, lang) }) : null
          ]),
          tabs
        ].concat(panels));
      }));
    },
    table: function (b, lang) {
      var rowHeads = b.head[0] === '';
      function cell(tag, c, attrs) {
        attrs = attrs || {};
        if (typeof c === 'string') attrs.lang = 'es';
        attrs.text = pick(c, lang);
        return el(tag, attrs);
      }
      var thead = el('thead', null, el('tr', null, b.head.map(function (h) { return cell('th', h, { scope: 'col' }); })));
      var tbody = el('tbody', null, b.rows.map(function (row) {
        return el('tr', null, row.map(function (c, i) {
          return rowHeads && i === 0 ? cell('th', c, { scope: 'row' }) : cell('td', c);
        }));
      }));
      // Focusable region, so a keyboard user can scroll a wide table; without a heading it is named by its columns.
      var name = b.heading ? pick(b.heading, lang)
        : t('grammar.tableOf', { cols: b.head.map(function (h) { return pick(h, lang); }).filter(Boolean).join(', ') });
      return el('div', { class: 'table-wrap', role: 'region', tabindex: '0', 'aria-label': name },
        el('table', { class: 'table grammar-table' }, [thead, tbody]));
    },
    markers: function (b, lang) {
      return el('div', { class: 'kw-grid' }, b.groups.map(function (g) {
        return el('div', { class: cls('kw-box', colorClass(g.color)) }, [
          el('p', { class: 'kw-box__title', text: pick(g.title, lang) }),
          el('ul', { class: 'kw-tags', lang: 'es' }, g.tags.map(function (tag) { return el('li', { class: 'kw-tag', text: tag }); }))
        ]);
      }));
    },
    examples: function (b, lang) {
      return el('ul', { class: 'ex-box' }, b.items.map(function (ex) {
        return el('li', { class: cls('ex-row', ex.badge ? 'ex-row--badged' : null, colorClass(ex.color)) }, [
          ex.badge ? el('span', { class: cls('ex-row__badge', colorClass(ex.color)), 'aria-hidden': 'true', text: ex.badge }) : null,
          rich('p', ex.es, { class: 'ex-row__es', lang: 'es' }),
          el('p', { class: 'ex-row__tr', text: pick(ex, lang) })
        ]);
      }));
    },
    tip: function (b, lang) {
      return el('aside', { class: 'tip' }, [
        el('p', { class: 'tip__title', text: pick(b.title, lang) }),
        el('div', { class: 'tip__body' }, paras(b.body, lang).map(function (p) { return rich('p', p); }))
      ]);
    }
  };

  // One block → one node: an optional group heading, then the block itself.
  function renderBlock(block, lang) {
    var draw = BLOCKS[block && block.type];
    if (!draw) throw new Error('Unknown grammar block type: ' + (block && block.type));
    lang = lang || i18n.lang();
    return el('div', { class: 'gblock gblock--' + block.type }, [
      block.heading ? el('h3', { class: 'group-title', text: pick(block.heading, lang) }) : null,
      draw(block, lang)
    ]);
  }
  ECA.grammarBlocks = { render: renderBlock, types: Object.keys(BLOCKS) };

  // ---------- test ----------
  // Paints the test into `quizBody`; the attempt lives in state.quiz, so it survives tab switches and language changes.
  function mountQuiz(quizBody, container, topic, state, opts) {
    var quizKey = 'grammar:' + topic.id;
    var store = ECA.store;

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
        if (state.quiz.recorded) opts.onRecord();
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
          text: t(passed ? 'grammar.passed' : 'grammar.notPassedTabs') }),
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

  function badgesNode(topic) {
    var node = el('div', { class: 'grammar-badges' });
    node.paint = function () {
      ui.clear(node);
      ui.append(node, [ui.doneBadge('grammar', topic)].concat(ui.quizBadges('grammar:' + topic.id)));
      node.hidden = !node.firstChild;
    };
    node.paint();
    return node;
  }

  function quizSection(container, topic, state, opts) {
    var quizBody = el('div', { class: 'grammar-quiz__body' });
    var section = el('section', { class: 'grammar-quiz panel', 'aria-labelledby': 'grammar-quiz-title' }, [
      el('h2', { class: 'grammar-quiz__title', id: 'grammar-quiz-title', text: t('grammar.check') }),
      quizBody
    ]);
    mountQuiz(quizBody, container, topic, state, opts);
    return section;
  }

  function render(container, ctx) {
    var topic = ctx.topic, lang = i18n.lang();
    var TEST = 'test';
    var ids = topic.tabs.map(function (tab) { return tab.id; }).concat(TEST);
    var wanted = ctx.route.tab;
    var active = ids.indexOf(wanted) >= 0 ? wanted : ids[0];
    var base = ui.href(ctx.levelId, 'grammar', topic.id);
    if (wanted && wanted !== active) replaceHash(base);   // unknown tab → first tab, clean address

    var badges = badgesNode(topic);
    badges.classList.add('hero__meta');
    container.appendChild(el('p', { class: 'grammar-back' }, ui.backLink(ctx.levelId, 'grammar')));
    container.appendChild(el('header', { class: 'hero grammar-hero' }, [
      rich('h1', topic.hero.es, { class: 'hero__title', lang: 'es' }),
      el('p', { class: 'hero__sub', text: pick(topic.hero.sub, lang) }),
      badges
    ]));

    var panel = el('div', { class: 'grammar-panel', id: 'grammar-panel', role: 'tabpanel' });
    var strip = ui.tabs({
      label: t('grammar.tabsLabel'),
      panelId: 'grammar-panel',
      active: active,
      items: topic.tabs.map(function (tab) { return { id: tab.id, label: pick(tab.label, lang) }; })
        .concat({ id: TEST, label: t('grammar.tabTest') }),
      onSelect: function (id) {
        if (id === active) return;
        active = id;
        strip.select(id);
        replaceHash(base + '/' + encodeURIComponent(id));
        paintPanel();
        showActive();
      }
    });
    strip.classList.add('grammar-tabs');
    container.appendChild(strip);
    container.appendChild(panel);
    showActive();

    // On a narrow strip that scrolls, keep the chosen tab in sight (e.g. "Test" opened from the address).
    function showActive() {
      var b = strip.querySelector('[aria-selected="true"]');
      if (!b) return;
      var left = b.offsetLeft - strip.offsetLeft, right = left + b.offsetWidth;
      if (left < strip.scrollLeft) strip.scrollLeft = left;
      else if (right > strip.scrollLeft + strip.clientWidth) strip.scrollLeft = right - strip.clientWidth;
    }

    function paintPanel() {
      ui.clear(panel);
      panel.setAttribute('aria-labelledby', 'tab-' + active);
      if (active === TEST) {
        panel.appendChild(quizSection(container, topic, ctx.state, { onRecord: badges.paint }));
        return;
      }
      var tab = topic.tabs[ids.indexOf(active)];
      ui.append(panel, tab.blocks.map(function (b) { return renderBlock(b, lang); }));
    }
    paintPanel();
  }

  function replaceHash(hash) {
    if (root.location.hash === hash) return;
    try { root.history.replaceState(null, '', hash); } catch (e) { /* some file:// setups refuse; the tab still switches */ }
  }

  ECA.views.register('grammar', render);
})(typeof window !== 'undefined' ? window : globalThis);
