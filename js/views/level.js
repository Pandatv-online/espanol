(function (root) {
  'use strict';
  var ECA = (root.ECA = root.ECA || {});
  var i18n = ECA.i18n, ui = ECA.ui, data = ECA.data, store = ECA.store;

  i18n.add({
    ru: {
      'level.pick': 'Уровень',
      'level.progress': 'Выучено {n} из {m} слов · тестов пройдено {k} из {l}',
      'level.topics': 'Тем: {n}',
      'level.current': '{code}, {name}'
    },
    en: {
      'level.pick': 'Level',
      'level.progress': 'Learned {n} of {m} words · tests passed {k} of {l}',
      'level.topics': 'Topics: {n}',
      'level.current': '{code}, {name}'
    }
  });

  function levelPicker(activeId) {
    var el = ui.el;
    return el('div', { class: 'level-steps', role: 'group', 'aria-label': i18n.t('level.pick') },
      data.levels().map(function (lvl, i) {
        var active = lvl.id === activeId;
        return el('button', {
          type: 'button', class: 'level-tile', 'data-level': lvl.id, style: '--step:' + i,
          'aria-pressed': active ? 'true' : 'false',
          on: { click: function () { root.location.hash = ui.href(lvl.id); } }
        }, [
          el('span', { class: 'level-tile__code', text: lvl.id }),
          el('span', { class: 'level-tile__name', text: i18n.pick(lvl.name) })
        ]);
      }));
  }

  // Word cards take turns through the old pages' category colours.
  var CARD_COLORS = ['teal', 'blue', 'coral', 'amber', 'purple'];

  function wordCard(levelId, topic, i) {
    var el = ui.el;
    var learned = store.learnedCount(topic.id, topic.words);
    return el('li', null, el('a', { class: 'topic-card c-' + CARD_COLORS[i % CARD_COLORS.length], href: ui.href(levelId, 'words', topic.id) }, [
      el('span', { class: 'topic-card__icon', 'aria-hidden': 'true', text: topic.icon || '•' }),
      el('span', { class: 'topic-card__title', text: i18n.pick(topic.title) }),
      el('span', { class: 'topic-card__meta' }, [
        ui.badge(i18n.t('badge.words', { n: learned, m: topic.words.length }), learned && learned === topic.words.length ? 'done' : null)
      ].concat(ui.quizBadges('words:' + topic.id), ui.doneBadge('words', topic) || []))
    ]));
  }

  function grammarRow(levelId, topic, i) {
    var el = ui.el;
    var badges = ui.quizBadges('grammar:' + topic.id).concat(ui.doneBadge('grammar', topic) || []);
    var summary = topic.summary || (topic.hero && topic.hero.sub);
    return el('li', null, el('a', { class: 'topic-row', href: ui.href(levelId, 'grammar', topic.id) }, [
      el('span', { class: 'topic-row__num', 'aria-hidden': 'true', text: String(i + 1) }),
      el('span', { class: 'topic-row__text' }, [
        el('span', { class: 'topic-row__title', text: i18n.pick(topic.title) }),
        summary ? el('span', { class: 'topic-row__summary', text: i18n.pick(summary) }) : null
      ]),
      badges.length ? el('span', { class: 'topic-row__meta' }, badges) : null
    ]));
  }

  function section(key, count, body) {
    var id = 'section-' + key;
    return ui.el('section', { class: 'topic-section', 'aria-labelledby': id }, [
      ui.el('h2', { class: 'section-title', id: id }, [
        i18n.t('section.' + key),
        count ? ui.el('span', { class: 'section-title__count', text: String(count) }) : null
      ]),
      body
    ]);
  }

  function progressLine(levelId, vocab, grammar) {
    var total = 0, learned = 0, passed = 0;
    vocab.forEach(function (t) {
      total += t.words.length;
      learned += store.learnedCount(t.id, t.words);
      if (ui.isPassed(store.best('words:' + t.id))) passed++;
    });
    grammar.forEach(function (t) { if (ui.isPassed(store.best('grammar:' + t.id))) passed++; });
    var ratio = total ? learned / total : 0;
    return ui.el('div', { class: 'level-progress' }, [
      ui.el('div', { class: 'meter', 'aria-hidden': 'true' },
        ui.el('span', { class: 'meter__fill', style: 'width:' + (ratio * 100).toFixed(1) + '%' })),
      ui.el('p', { class: 'level-progress__text', text: i18n.t('level.progress', { n: learned, m: total, k: passed, l: vocab.length + grammar.length }) })
    ]);
  }

  ECA.views.register('level', function (container, ctx) {
    var el = ui.el;
    var level = ctx.level;
    var vocab = data.vocab(level.id);
    var grammar = data.grammar(level.id);

    container.appendChild(el('section', { class: 'level-hero' }, [
      levelPicker(level.id),
      el('div', { class: 'level-intro' }, [
        el('h1', { class: 'screen-title level-intro__title', tabindex: '-1' }, [
          el('span', { class: 'visually-hidden', text: level.id + ', ' }),
          i18n.pick(level.name)
        ]),
        el('p', { class: 'level-intro__cando', text: i18n.pick(level.canDo) }),
        vocab.length || grammar.length ? progressLine(level.id, vocab, grammar) : null
      ])
    ]));

    if (!vocab.length && !grammar.length) {
      container.appendChild(ui.emptyState({ title: i18n.t('empty.level'), text: i18n.t('empty.levelText'), telegram: true }));
      return;
    }

    // Grammar first, then words.
    container.appendChild(section('grammar', grammar.length, grammar.length
      ? el('ul', { class: 'topic-list', role: 'list' }, grammar.map(function (t, i) { return grammarRow(level.id, t, i); }))
      : ui.emptyState({ title: i18n.t('empty.level'), telegram: true })));

    container.appendChild(section('words', vocab.length, vocab.length
      ? el('ul', { class: 'topic-grid', role: 'list' }, vocab.map(function (t, i) { return wordCard(level.id, t, i); }))
      : ui.emptyState({ title: i18n.t('empty.level'), telegram: true })));
  });
})(typeof window !== 'undefined' ? window : globalThis);
