(function (root) {
  'use strict';
  var ECA = (root.ECA = root.ECA || {});

  // ---------- flash-card deck: pure, no DOM, no storage ----------
  // Deck = { queue: es[], total: number of topic words }. Functions never mutate their input.
  function shuffle(arr, rng) {
    return ECA.quiz ? ECA.quiz.shuffle(arr, rng) : arr.slice();
  }

  var vocabDeck = {
    // opts: { isLearned(es) -> bool, all: bool (take every word), rng }
    create: function (words, opts) {
      opts = opts || {};
      var isLearned = opts.isLearned || function () { return false; };
      var pool = (words || []).filter(function (w) { return w && (opts.all || !isLearned(w.es)); });
      return { queue: shuffle(pool.map(function (w) { return w.es; }), opts.rng), total: (words || []).length };
    },
    // "Знаю": the word leaves the deck.
    know: function (deck) { return { queue: deck.queue.slice(1), total: deck.total }; },
    // "Повторить": the word goes to the end of the deck.
    again: function (deck) {
      return { queue: deck.queue.length ? deck.queue.slice(1).concat(deck.queue[0]) : [], total: deck.total };
    },
    order: function (deck) { return deck.queue.slice(); },
    current: function (deck) { return deck.queue.length ? deck.queue[0] : null; },
    remaining: function (deck) { return deck.queue.length; },
    isDone: function (deck) { return deck.queue.length === 0; }
  };

  // ---------- quiz session: pure. Session = { index, picks[] } ----------
  var vocabQuiz = {
    start: function () { return { index: 0, picks: [] }; },
    answered: function (s) { return s.picks[s.index] != null; },
    // The first pick for a question is final; later picks return the same session.
    pick: function (s, questions, choice) {
      if (s.index >= questions.length || s.picks[s.index] != null) return s;
      var picks = s.picks.slice();
      picks[s.index] = choice;
      return { index: s.index, picks: picks };
    },
    next: function (s) { return vocabQuiz.answered(s) ? { index: s.index + 1, picks: s.picks } : s; },
    finished: function (s, questions) { return s.index >= questions.length; },
    result: function (s, questions) {
      var mistakes = [];
      questions.forEach(function (q, i) { if (s.picks[i] !== q.answer) mistakes.push(i); });
      return { score: questions.length - mistakes.length, total: questions.length, mistakes: mistakes };
    }
  };

  ECA.vocabDeck = vocabDeck;
  ECA.vocabQuiz = vocabQuiz;

  if (typeof document === 'undefined' || !ECA.views || !ECA.i18n) return;

  // ---------- screen ----------
  var i18n = ECA.i18n, ui = ECA.ui, store = ECA.store, data = ECA.data;
  var t = i18n.t;

  i18n.add({
    ru: {
      'vocab.tabs': 'Разделы темы',
      'vocab.tab.cards': 'Карточки',
      'vocab.tab.quiz': 'Тест',
      'vocab.tab.list': 'Список слов',
      'vocab.lead': '{m} слов · выучено {n}',
      'vocab.left': 'Осталось {n} из {m}',
      'vocab.flipHint': 'Нажмите, чтобы перевернуть',
      'vocab.again': 'Повторить',
      'vocab.know': 'Знаю',
      'vocab.keys': 'Пробел или Enter — перевернуть · ← повторить · → знаю',
      'vocab.saidKnown': '«{es}» — выучено. Осталось {n} из {m}.',
      'vocab.saidAgain': '«{es}» — в конец колоды.',
      'vocab.saidNext': 'Следующее слово: {es}',
      'vocab.done.title': 'Все слова темы выучены',
      'vocab.done.text': 'Проверьте себя в тесте или пройдите карточки ещё раз — отметки «выучено» останутся.',
      'vocab.done.quiz': 'Пройти тест',
      'vocab.done.again': 'Повторить все заново',
      'vocab.quiz.progress': 'Вопрос {n} из {m}',
      'vocab.quiz.toLang': 'Как это по-русски?',
      'vocab.quiz.toEs': 'Как это по-испански?',
      'vocab.quiz.options': 'Варианты ответа',
      'vocab.quiz.right': 'Верно!',
      'vocab.quiz.wrong': 'Неверно. Правильный ответ: {answer}',
      'vocab.quiz.markRight': '(правильный ответ)',
      'vocab.quiz.markYours': '(ваш ответ)',
      'vocab.quiz.next': 'Дальше',
      'vocab.quiz.finish': 'Показать результат',
      'vocab.quiz.keys': 'Клавиши 1–4 — выбрать ответ, Enter — дальше',
      'vocab.quiz.resultTitle': 'Результат теста',
      'vocab.quiz.score': '{score} из {total}',
      'vocab.quiz.best': 'Лучший результат: {score} из {total}',
      'vocab.quiz.newBest': 'Новый рекорд',
      'vocab.quiz.mistakes': 'Ошибки',
      'vocab.quiz.noMistakes': 'Ни одной ошибки — отлично!',
      'vocab.quiz.retry': 'Ещё раз',
      'vocab.quiz.toTopic': 'К теме',
      'vocab.quiz.tooFew': 'В этой теме пока слишком мало слов для теста.',
      'vocab.list.es': 'Испанский',
      'vocab.list.tr': 'Перевод',
      'vocab.list.learned': 'Выучено',
      'vocab.list.mark': 'Выучено: {es}',
      'vocab.list.count': 'Выучено {n} из {m}. Снимите галочку, чтобы слово вернулось в карточки.'
    },
    en: {
      'vocab.tabs': 'Topic sections',
      'vocab.tab.cards': 'Cards',
      'vocab.tab.quiz': 'Test',
      'vocab.tab.list': 'Word list',
      'vocab.lead': '{m} words · {n} learned',
      'vocab.left': '{n} of {m} left',
      'vocab.flipHint': 'Tap to flip',
      'vocab.again': 'Again',
      'vocab.know': 'I know it',
      'vocab.keys': 'Space or Enter — flip · ← again · → I know it',
      'vocab.saidKnown': '“{es}” learned. {n} of {m} left.',
      'vocab.saidAgain': '“{es}” moved to the end of the deck.',
      'vocab.saidNext': 'Next word: {es}',
      'vocab.done.title': 'You’ve learned every word in this topic',
      'vocab.done.text': 'Check yourself with the test or go through the cards again — your “learned” marks stay.',
      'vocab.done.quiz': 'Take the test',
      'vocab.done.again': 'Go through all again',
      'vocab.quiz.progress': 'Question {n} of {m}',
      'vocab.quiz.toLang': 'What is it in English?',
      'vocab.quiz.toEs': 'What is it in Spanish?',
      'vocab.quiz.options': 'Answer options',
      'vocab.quiz.right': 'Correct!',
      'vocab.quiz.wrong': 'Not quite. The right answer: {answer}',
      'vocab.quiz.markRight': '(right answer)',
      'vocab.quiz.markYours': '(your answer)',
      'vocab.quiz.next': 'Next',
      'vocab.quiz.finish': 'See the result',
      'vocab.quiz.keys': 'Keys 1–4 pick an answer, Enter goes next',
      'vocab.quiz.resultTitle': 'Test result',
      'vocab.quiz.score': '{score} of {total}',
      'vocab.quiz.best': 'Best result: {score} of {total}',
      'vocab.quiz.newBest': 'New best',
      'vocab.quiz.mistakes': 'Mistakes',
      'vocab.quiz.noMistakes': 'No mistakes at all — great job!',
      'vocab.quiz.retry': 'Try again',
      'vocab.quiz.toTopic': 'Back to topic',
      'vocab.quiz.tooFew': 'This topic doesn’t have enough words for a test yet.',
      'vocab.list.es': 'Spanish',
      'vocab.list.tr': 'Translation',
      'vocab.list.learned': 'Learned',
      'vocab.list.mark': 'Learned: {es}',
      'vocab.list.count': '{n} of {m} learned. Untick a word to bring it back to the cards.'
    }
  });

  // Seeded rng, so a language switch rebuilds the same quiz in the other language.
  function seeded(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) >>> 0;
      var x = Math.imul(a ^ (a >>> 15), 1 | a);
      x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Keyboard: one document listener, routed to the screen that is on the page now.
  var active = null;
  document.addEventListener('keydown', function (e) {
    if (!active || !active.root.isConnected) return;
    if (e.altKey || e.ctrlKey || e.metaKey || e.defaultPrevented) return;
    var tag = e.target && e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (e.target && e.target.isContentEditable)) return;
    if (!inScope(e.target, active)) return;
    active.onKey(e);
  });
  // Shortcuts act only when focus is inside the deck/quiz, on the screen heading or nowhere (body):
  // an arrow pressed on RU/EN, the theme button or a footer link must not mark a word.
  function inScope(node, a) {
    if (!node || node === document.body || node === document.documentElement) return true;
    if (a.scope && a.scope.contains(node)) return true;
    return node.tagName === 'H1' && a.root.contains(node);
  }
  function inTabs(node) { return !!(node && node.closest && node.closest('[role="tablist"]')); }
  function isControl(node) { return !!(node && node.closest && node.closest('a, button')); }

  // After a tab switch that changes the address, focus returns to the tab.
  var pendingTab = null;

  function wordByEs(topic, es) {
    for (var i = 0; i < topic.words.length; i++) if (topic.words[i].es === es) return topic.words[i];
    return null;
  }

  function render(container, ctx) {
    var el = ui.el;
    var topic = ctx.topic, state = ctx.state, levelId = ctx.levelId;
    var quizKey = 'words:' + topic.id;
    var topicHref = ui.href(levelId, 'words', topic.id);
    var quizHref = ui.href(levelId, 'words', topic.id, 'quiz');
    var isLearned = function (es) { return store.isLearned(topic.id, es); };
    var view;

    if (!state.tab) state.tab = ctx.route.tab === 'quiz' ? 'quiz' : 'cards';
    if (pendingTab && pendingTab.topic === topic.id) {
      if (ctx.route.tab !== 'quiz' && pendingTab.tab !== 'quiz') state.tab = pendingTab.tab;
      var focusTab = pendingTab.tab;
      pendingTab = null;
      // app.js focuses the h1 right after render; move focus back to the tab afterwards
      Promise.resolve().then(function () {
        var b = document.getElementById('tab-' + focusTab);
        if (b && b.isConnected) b.focus({ preventScroll: true });
      });
    }

    function selectTab(id) {
      if (id === state.tab) return;
      if (id === 'quiz' || state.tab === 'quiz') {
        pendingTab = { topic: topic.id, tab: id };
        root.location.hash = id === 'quiz' ? quizHref : topicHref;
        return;
      }
      state.tab = id;
      paint('#tab-' + id);
    }

    function paint(focusSel) {
      ui.clear(container);
      var learned = store.learnedCount(topic.id, topic.words);
      var badges = ui.quizBadges(quizKey).concat(ui.doneBadge('words', topic) || []);
      var head = ui.screenHead({
        back: ui.backLink(levelId, 'words'),
        title: i18n.pick(topic.title),
        lead: t('vocab.lead', { m: topic.words.length, n: learned })
      });
      if (badges.length) head.appendChild(el('div', { class: 'vocab-badges' }, badges));

      var panel = el('div', { class: 'vocab-panel', id: 'vocab-panel', role: 'tabpanel', 'aria-labelledby': 'tab-' + state.tab });
      view = el('div', { class: 'vocab' }, [
        head,
        ui.tabs({
          label: t('vocab.tabs'),
          active: state.tab,
          panelId: 'vocab-panel',
          onSelect: selectTab,
          items: [
            { id: 'cards', label: t('vocab.tab.cards') },
            { id: 'quiz', label: t('vocab.tab.quiz') },
            { id: 'list', label: t('vocab.tab.list') }
          ]
        }),
        panel
      ]);
      active = { root: view, scope: panel, onKey: function () {} };
      if (state.tab === 'quiz') paintQuiz(panel);
      else if (state.tab === 'list') paintList(panel);
      else paintCards(panel);
      container.appendChild(view);
      if (focusSel) {
        var target = view.querySelector(focusSel);
        if (target) target.focus({ preventScroll: true });
      }
    }

    // ----- cards -----
    function paintCards(panel) {
      if (!state.deck) state.deck = vocabDeck.create(topic.words, { isLearned: isLearned });
      var deck = state.deck;

      if (vocabDeck.isDone(deck)) {
        panel.appendChild(el('div', { class: 'deck-done' }, [
          el('span', { class: 'deck-done__mark', 'aria-hidden': 'true' }, ui.icon('check')),
          el('h2', { class: 'deck-done__title', id: 'deck-done-title', tabindex: '-1', text: t('vocab.done.title') }),
          el('p', { class: 'deck-done__text', text: t('vocab.done.text') }),
          el('div', { class: 'btn-row' }, [
            el('a', { class: 'btn btn--primary', href: quizHref, text: t('vocab.done.quiz') }),
            el('button', { class: 'btn btn--ghost', type: 'button', 'data-action': 'restart', text: t('vocab.done.again'),
              on: { click: function () {
                state.deck = vocabDeck.create(topic.words, { isLearned: isLearned, all: true });
                state.flipped = false;
                paint('.flashcard');
              } } })
          ])
        ]));
        return;
      }

      var es = vocabDeck.current(deck);
      var word = wordByEs(topic, es) || { es: es };
      var left = vocabDeck.remaining(deck);
      var tr = i18n.pick(word);
      var ex = word.ex;

      var front = el('span', { class: 'flashcard__face flashcard__face--front' }, [
        el('span', { class: 'flashcard__word', lang: 'es', text: es }),
        el('span', { class: 'flashcard__hint', text: t('vocab.flipHint') })
      ]);
      var back = el('span', { class: 'flashcard__face flashcard__face--back' }, [
        el('span', { class: 'flashcard__es', lang: 'es', text: es }),
        el('span', { class: 'flashcard__tr', text: tr }),
        ex ? el('span', { class: 'example flashcard__ex' }, [
          el('span', { class: 'example__es', lang: 'es', text: ex.es }),
          el('span', { class: 'example__tr', text: i18n.pick(ex) })
        ]) : null
      ]);
      var card = el('button', { class: 'flashcard', type: 'button', on: { click: flip } },
        el('span', { class: 'flashcard__inner' }, [front, back]));

      function setFlipped(on) {
        card.classList.toggle('is-flipped', on);
        front.setAttribute('aria-hidden', on ? 'true' : 'false');
        back.setAttribute('aria-hidden', on ? 'false' : 'true');
      }
      function flip() {
        state.flipped = !state.flipped;
        setFlipped(state.flipped);
        if (state.flipped) ui.announce(es + ' — ' + tr + (ex ? '. ' + ex.es + ' — ' + i18n.pick(ex) : ''));
        else ui.announce(es);
      }
      setFlipped(!!state.flipped);

      function act(kind) {
        var hadFocus = view.contains(document.activeElement);
        if (kind === 'know') {
          store.setLearned(topic.id, es, true);
          state.deck = vocabDeck.know(deck);
        } else {
          state.deck = vocabDeck.again(deck);
        }
        state.flipped = false;
        var done = vocabDeck.isDone(state.deck);
        var said = kind === 'know'
          ? t('vocab.saidKnown', { es: es, n: vocabDeck.remaining(state.deck), m: deck.total })
          : t('vocab.saidAgain', { es: es });
        if (!done) said += ' ' + t('vocab.saidNext', { es: vocabDeck.current(state.deck) });
        else said += ' ' + t('vocab.done.title');
        paint(done ? '#deck-done-title' : hadFocus ? '[data-action="' + kind + '"]' : null);
        ui.announce(said);
      }

      var done = deck.total - left;
      active.scope = panel.appendChild(el('div', { class: 'deck' }, [
        el('div', { class: 'deck__status' }, [
          el('p', { class: 'deck__left', text: t('vocab.left', { n: left, m: deck.total }) }),
          el('div', { class: 'meter deck__meter', 'aria-hidden': 'true' },
            el('span', { class: 'meter__fill', style: 'width:' + (deck.total ? (done / deck.total) * 100 : 0).toFixed(1) + '%' }))
        ]),
        card,
        el('div', { class: 'deck__actions' }, [
          el('button', { class: 'btn btn--ghost deck__btn', type: 'button', 'data-action': 'again',
            'aria-keyshortcuts': 'ArrowLeft', on: { click: function () { act('again'); } } }, [
            el('span', { 'aria-hidden': 'true', text: '←' }), t('vocab.again')
          ]),
          el('button', { class: 'btn btn--ok deck__btn', type: 'button', 'data-action': 'know',
            'aria-keyshortcuts': 'ArrowRight', on: { click: function () { act('know'); } } }, [
            t('vocab.know'), el('span', { 'aria-hidden': 'true', text: '→' })
          ])
        ]),
        el('p', { class: 'kbd-hint', text: t('vocab.keys') })
      ]));

      active.onKey = function (e) {
        if (inTabs(e.target)) return;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          e.preventDefault();
          act(e.key === 'ArrowRight' ? 'know' : 'again');
        } else if ((e.key === ' ' || e.key === 'Enter') && !isControl(e.target)) {
          e.preventDefault();
          flip();
        }
      };
    }

    // ----- quiz -----
    function newQuiz() { return { seed: Math.floor(Math.random() * 4294967296), session: vocabQuiz.start() }; }

    function questions() {
      var q = state.quiz, lang = i18n.lang();
      if (!q.questions || q.lang !== lang) {
        q.lang = lang;
        q.questions = ECA.quiz.fromVocab(topic, data.vocab(levelId), { lang: lang, rng: seeded(q.seed) });
      }
      return q.questions;
    }

    function paintQuiz(panel) {
      if (!state.quiz) state.quiz = newQuiz();
      var qs = questions();
      if (qs.length < 2) {
        panel.appendChild(ui.emptyState({ title: t('vocab.quiz.tooFew') }));
        return;
      }
      if (vocabQuiz.finished(state.quiz.session, qs)) paintResult(panel, qs);
      else paintQuestion(panel, qs);
    }

    function paintQuestion(panel, qs) {
      var s = state.quiz.session;
      var q = qs[s.index];
      var picked = s.picks[s.index];
      var answered = picked != null;
      var last = s.index === qs.length - 1;

      function choose(i) {
        if (vocabQuiz.answered(state.quiz.session)) return;
        state.quiz.session = vocabQuiz.pick(state.quiz.session, qs, i);
        paint('[data-next]');
        ui.announce(i === q.answer ? t('vocab.quiz.right') : t('vocab.quiz.wrong', { answer: q.options[q.answer] }));
      }
      function next() {
        if (!vocabQuiz.answered(state.quiz.session)) return;
        state.quiz.session = vocabQuiz.next(state.quiz.session);
        if (vocabQuiz.finished(state.quiz.session, qs) && !state.quiz.recorded) {
          var r = vocabQuiz.result(state.quiz.session, qs);
          state.quiz.recorded = true;
          state.quiz.newBest = store.recordScore(quizKey, r.score, r.total);
        }
        paint(vocabQuiz.finished(state.quiz.session, qs) ? '#quiz-result-title' : '#quiz-prompt');
      }

      var options = q.options.map(function (text, i) {
        var cls = 'option';
        var mark = null;
        if (answered && i === q.answer) { cls += ' is-correct'; mark = t('vocab.quiz.markRight'); }
        else if (answered && i === picked) { cls += ' is-wrong'; mark = t('vocab.quiz.markYours'); }
        return el('button', {
          class: cls, type: 'button', 'aria-disabled': answered ? 'true' : null,
          'aria-keyshortcuts': String(i + 1),
          on: { click: function () { choose(i); } }
        }, [
          el('span', { class: 'option__key', 'aria-hidden': 'true', text: String(i + 1) }),
          el('span', { class: 'option__text', lang: q.optionsLang === 'es' ? 'es' : null, text: text }),
          mark ? el('span', { class: 'visually-hidden', text: ' ' + mark }) : null
        ]);
      });

      var feedback = null;
      if (answered) {
        var ok = picked === q.answer;
        feedback = el('div', { class: 'feedback ' + (ok ? 'feedback--ok' : 'feedback--bad') }, [
          el('p', { class: 'quiz__verdict', text: ok ? t('vocab.quiz.right') : t('vocab.quiz.wrong', { answer: q.options[q.answer] }) }),
          q.explain ? el('p', { class: 'quiz__explain', text: q.explain }) : null
        ]);
      }

      panel.appendChild(el('div', { class: 'quiz' }, [
        el('div', { class: 'quiz__status' }, [
          el('p', { class: 'quiz__count', text: t('vocab.quiz.progress', { n: s.index + 1, m: qs.length }) }),
          el('div', { class: 'meter quiz__meter', 'aria-hidden': 'true' },
            el('span', { class: 'meter__fill', style: 'width:' + ((s.index + (answered ? 1 : 0)) / qs.length * 100).toFixed(1) + '%' }))
        ]),
        el('div', { class: 'quiz__card' }, [
          el('p', { class: 'quiz__ask', text: q.promptLang === 'es' ? t('vocab.quiz.toLang') : t('vocab.quiz.toEs') }),
          el('p', { class: 'quiz__prompt', id: 'quiz-prompt', tabindex: '-1', lang: q.promptLang === 'es' ? 'es' : null, text: q.prompt })
        ]),
        el('div', { class: 'options', role: 'group', 'aria-label': t('vocab.quiz.options') }, options),
        feedback,
        answered ? el('div', { class: 'btn-row quiz__next' }, el('button', {
          class: 'btn btn--primary', type: 'button', 'data-next': '', 'aria-keyshortcuts': 'Enter',
          text: last ? t('vocab.quiz.finish') : t('vocab.quiz.next'), on: { click: next }
        })) : null,
        el('p', { class: 'kbd-hint', text: t('vocab.quiz.keys') })
      ]));

      active.onKey = function (e) {
        if (/^[1-9]$/.test(e.key)) {
          var i = Number(e.key) - 1;
          if (!answered && i < q.options.length) { e.preventDefault(); choose(i); }
        } else if (e.key === 'Enter' && answered && !inTabs(e.target) && !(e.target && e.target.closest && e.target.closest('a'))) {
          e.preventDefault();
          next();
        }
      };
    }

    function paintResult(panel, qs) {
      var r = vocabQuiz.result(state.quiz.session, qs);
      var best = store.best(quizKey);
      var passed = ui.isPassed({ score: r.score, total: r.total });
      var mistakes = r.mistakes.map(function (i) {
        var q = qs[i];
        return el('li', { class: 'mistake' }, [
          el('span', { class: 'mistake__q', lang: q.promptLang === 'es' ? 'es' : null, text: q.prompt }),
          el('span', { class: 'mistake__arrow', 'aria-hidden': 'true', text: '→' }),
          el('span', { class: 'mistake__a', lang: q.optionsLang === 'es' ? 'es' : null, text: q.options[q.answer] })
        ]);
      });

      panel.appendChild(el('div', { class: 'quiz-result' + (passed ? ' is-passed' : '') }, [
        el('div', { class: 'quiz-result__top' }, [
          el('h2', { class: 'quiz-result__title', id: 'quiz-result-title', tabindex: '-1' }, [
            el('span', { class: 'quiz-result__label', text: t('vocab.quiz.resultTitle') }),
            el('span', { class: 'quiz-result__score', text: t('vocab.quiz.score', { score: r.score, total: r.total }) })
          ]),
          el('p', { class: 'quiz-result__best' }, [
            best ? t('vocab.quiz.best', { score: best.score, total: best.total }) : null,
            state.quiz.newBest ? ui.badge(t('vocab.quiz.newBest'), 'done') : null
          ])
        ]),
        el('h3', { class: 'quiz-result__sub', text: t('vocab.quiz.mistakes') }),
        mistakes.length
          ? el('ul', { class: 'mistakes', role: 'list' }, mistakes)
          : el('p', { class: 'quiz-result__clean', text: t('vocab.quiz.noMistakes') }),
        el('div', { class: 'btn-row' }, [
          el('button', { class: 'btn btn--primary', type: 'button', text: t('vocab.quiz.retry'),
            on: { click: function () { state.quiz = newQuiz(); paint('#quiz-prompt'); } } }),
          el('a', { class: 'btn btn--ghost', href: topicHref, text: t('vocab.quiz.toTopic'),
            on: { click: function () { pendingTab = null; } } })
        ])
      ]));
    }

    // ----- word list -----
    function paintList(panel) {
      var learned = store.learnedCount(topic.id, topic.words);
      var rows = topic.words.map(function (w, i) {
        var id = 'learned-' + i;
        var on = isLearned(w.es);
        return el('tr', { class: on ? 'is-learned' : null }, [
          el('td', { class: 'words-table__es', lang: 'es', text: w.es }),
          el('td', { class: 'words-table__tr', text: i18n.pick(w) }),
          el('td', { class: 'words-table__mark' }, el('label', { class: 'learn-toggle', for: id }, [
            el('input', { type: 'checkbox', id: id, checked: on, on: { change: function (e) {
              store.setLearned(topic.id, w.es, e.target.checked);
              state.deck = null; // the deck follows the new marks
              state.flipped = false;
              paint('#' + id);
            } } }),
            el('span', { class: 'visually-hidden', text: t('vocab.list.mark', { es: w.es }) })
          ]))
        ]);
      });
      panel.appendChild(el('div', { class: 'word-list' }, [
        el('p', { class: 'word-list__count', text: t('vocab.list.count', { n: learned, m: topic.words.length }) }),
        el('div', { class: 'table-wrap' }, el('table', { class: 'table words-table' }, [
          el('thead', null, el('tr', null, [
            el('th', { scope: 'col', text: t('vocab.list.es') }),
            el('th', { scope: 'col', text: t('vocab.list.tr') }),
            el('th', { scope: 'col', class: 'words-table__mark', text: t('vocab.list.learned') })
          ])),
          el('tbody', null, rows)
        ]))
      ]));
    }

    paint(null);
  }

  ECA.views.register('words', render);
})(typeof window !== 'undefined' ? window : globalThis);
