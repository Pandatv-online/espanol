(function (root) {
  'use strict';
  var ECA = (root.ECA = root.ECA || {});

  var TELEGRAM_URL = 'https://t.me/espanolconamigos';
  var PASS_RATIO = 0.8;
  var SVG_NS = 'http://www.w3.org/2000/svg';

  if (ECA.i18n) {
    ECA.i18n.add({
      ru: {
        'section.words': 'Слова',
        'section.grammar': 'Грамматика',
        'badge.words': '{n}/{m} слов',
        'badge.test': 'тест: {score}/{total}',
        'badge.passed': '✓ пройдено',
        'badge.noTest': 'тест не пройден',
        'back.to': '← {level} · {section}',
        'tg.name': 'Español con amigos',
        'tg.caption': 'Больше учебных материалов — в нашем Telegram-канале',
        'tg.newTab': '(откроется в новой вкладке)',
        'empty.level': 'Темы для этого уровня скоро появятся',
        'empty.levelText': 'Мы готовим слова и грамматику. Пока загляните в наш Telegram-канал — там уже есть материалы.',
        'empty.section': 'Здесь пока пусто',
        'soon.title': 'Этот раздел скоро откроется',
        'soon.text': 'Урок уже в работе. Вернитесь к уровню и выберите другую тему.'
      },
      en: {
        'section.words': 'Words',
        'section.grammar': 'Grammar',
        'badge.words': '{n}/{m} words',
        'badge.test': 'test: {score}/{total}',
        'badge.passed': '✓ passed',
        'badge.noTest': 'test not taken',
        'back.to': '← {level} · {section}',
        'tg.name': 'Español con amigos',
        'tg.caption': 'More learning materials in our Telegram channel',
        'tg.newTab': '(opens in a new tab)',
        'empty.level': 'Topics for this level are coming soon',
        'empty.levelText': 'We are preparing words and grammar. Meanwhile, visit our Telegram channel — there are materials already.',
        'empty.section': 'Nothing here yet',
        'soon.title': 'This section opens soon',
        'soon.text': 'The lesson is in progress. Go back to the level and pick another topic.'
      }
    });
  }

  function t(key, params) { return ECA.i18n ? ECA.i18n.t(key, params) : key; }

  // Escape everything, then restore bare <b> <i> <em> <strong> <br> (no attributes).
  function richText(str) {
    var escaped = String(str == null ? '' : str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    return escaped
      .replace(/&lt;(\/?)(b|i|em|strong)&gt;/gi, function (m, slash, tag) { return '<' + slash + tag.toLowerCase() + '>'; })
      .replace(/&lt;br\s*\/?&gt;/gi, '<br>');
  }

  // el('a', {class: 'x', href: '#/a1', text: 'Hi', lang: 'es', on: {click: fn}}, [children])
  function el(tag, props, children) {
    var node = document.createElement(tag);
    props = props || {};
    for (var k in props) {
      var v = props[k];
      if (v == null || v === false) continue;
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else if (k === 'on') for (var ev in v) node.addEventListener(ev, v[ev]);
      else if (k === 'dataset') for (var d in v) node.dataset[d] = v[d];
      else node.setAttribute(k, v === true ? '' : v);
    }
    // Spanish is the subject of study: browser auto-translate must leave it alone.
    if (props.lang === 'es' && props.translate == null) node.setAttribute('translate', 'no');
    append(node, children);
    return node;
  }

  function append(node, children) {
    if (children == null) return node;
    (Array.isArray(children) ? children : [children]).forEach(function (c) {
      if (c == null || c === false) return;
      node.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
    });
    return node;
  }

  function es(text, tag) { return el(tag || 'span', { lang: 'es', class: 'es', text: text }); }

  function setRich(node, str) { node.innerHTML = richText(str); return node; }

  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); return node; }

  var ICONS = {
    telegram: { box: '0 0 24 24', d: 'M9.04 15.47 8.7 20.2c.49 0 .7-.21.96-.46l2.3-2.2 4.77 3.49c.87.48 1.49.23 1.73-.8l3.13-14.67c.28-1.3-.47-1.8-1.32-1.49L1.9 11.1c-1.26.49-1.24 1.19-.22 1.5l4.71 1.47L17.32 7.2c.52-.34.99-.15.6.2' },
    sun: { box: '0 0 24 24', d: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-15v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41', stroke: true },
    moon: { box: '0 0 24 24', d: 'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z', stroke: true },
    check: { box: '0 0 24 24', d: 'm5 12.5 4.5 4.5L19 7.5', stroke: true }
  };

  function icon(name) {
    var spec = ICONS[name];
    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', spec.box);
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.setAttribute('class', 'icon icon--' + name);
    var path = document.createElementNS(SVG_NS, 'path');
    path.setAttribute('d', spec.d);
    if (spec.stroke) {
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', 'currentColor');
      path.setAttribute('stroke-width', '2');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
    } else {
      path.setAttribute('fill', 'currentColor');
    }
    svg.appendChild(path);
    return svg;
  }

  function telegramLink(extraClass) {
    return el('a', {
      class: 'tg-link' + (extraClass ? ' ' + extraClass : ''),
      href: TELEGRAM_URL, target: '_blank', rel: 'noopener'
    }, [
      el('span', { class: 'tg-link__badge' }, icon('telegram')),
      el('span', { class: 'tg-link__name', lang: 'es', text: t('tg.name') }),
      el('span', { class: 'visually-hidden', text: ' ' + t('tg.newTab') })
    ]);
  }

  function emptyState(opts) {
    opts = opts || {};
    return el('div', { class: 'empty' }, [
      el('p', { class: 'empty__title', text: opts.title || t('empty.section') }),
      opts.text ? el('p', { class: 'empty__text', text: opts.text }) : null,
      opts.telegram ? telegramLink('tg-link--compact') : null
    ]);
  }

  function href(levelId) {
    var parts = ['#', String(levelId).toLowerCase()].concat([].slice.call(arguments, 1));
    return parts.join('/');
  }

  function backLink(levelId, section) {
    var sectionName = section === 'grammar' ? t('section.grammar') : t('section.words');
    return el('a', { class: 'backlink', href: href(levelId), text: t('back.to', { level: levelId, section: sectionName }) });
  }

  // Screen header. The <h1> gets focus after navigation.
  function screenHead(opts) {
    opts = opts || {};
    return el('header', { class: 'screen-head' }, [
      opts.back || null,
      el('h1', { class: 'screen-title', tabindex: '-1', lang: opts.titleLang || null, text: opts.title }),
      opts.lead ? el('p', { class: 'screen-lead', text: opts.lead }) : null
    ]);
  }

  function badge(text, variant) {
    return el('span', { class: 'badge' + (variant ? ' badge--' + variant : ''), text: text });
  }

  function isPassed(best) { return !!best && best.total > 0 && best.score / best.total >= PASS_RATIO; }

  function quizBadges(quizKey) {
    var best = ECA.store ? ECA.store.best(quizKey) : null;
    if (!best) return [];
    return [badge(t('badge.test', { score: best.score, total: best.total }), 'score')];
  }

  // Topic is done: grammar — best test ≥ PASS_RATIO; words — also every word learned.
  function isTopicDone(kind, topic) {
    if (!topic || !ECA.store) return false;
    var store = ECA.store;
    if (!isPassed(store.best(kind + ':' + topic.id))) return false;
    if (kind !== 'words') return true;
    var words = topic.words || [];
    return words.length > 0 && store.learnedCount(topic.id, words) === words.length;
  }

  function doneBadge(kind, topic) { return isTopicDone(kind, topic) ? badge(t('badge.passed'), 'done') : null; }

  // Accessible tabs: [{id, label}], roving tabindex, arrow keys.
  function tabs(opts) {
    var list = el('div', { class: 'tabs', role: 'tablist', 'aria-label': opts.label || null });
    var buttons = opts.items.map(function (item) {
      var selected = item.id === opts.active;
      return el('button', {
        class: 'tab', type: 'button', role: 'tab', id: 'tab-' + item.id,
        'aria-selected': selected ? 'true' : 'false',
        'aria-controls': opts.panelId || null,
        tabindex: selected ? '0' : '-1',
        text: item.label,
        on: { click: function () { opts.onSelect(item.id); } }
      });
    });
    list.addEventListener('keydown', function (e) {
      var i = buttons.indexOf(document.activeElement);
      if (i < 0) return;
      var next = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? buttons.length - 1 : null;
      if (next == null) return;
      e.preventDefault();
      next = (next + buttons.length) % buttons.length;
      buttons[next].focus();
      buttons[next].click();
    });
    append(list, buttons);
    return list;
  }

  // Polite screen-reader announcement (answer results etc.).
  function announce(text) {
    var live = document.getElementById('live');
    if (!live) return;
    live.textContent = '';
    setTimeout(function () { live.textContent = text; }, 30);
  }

  // Screen shortcuts (arrows, 1–4, Enter) act only with focus inside `scope` (the deck or the test),
  // on the screen's <h1> or nowhere (body): keys pressed on RU/EN, the theme button or a footer link stay theirs.
  function shortcutsApply(e, scope, screen) {
    if (e.altKey || e.ctrlKey || e.metaKey || e.defaultPrevented) return false;
    var node = e.target;
    if (!node || node === document.body || node === document.documentElement) return true;
    if (node.isContentEditable || (node.closest && node.closest('input, textarea, select'))) return false;
    if (scope && scope.contains(node)) return true;
    return node.tagName === 'H1' && !!screen && screen.contains(node);
  }

  ECA.ui = {
    TELEGRAM_URL: TELEGRAM_URL,
    PASS_RATIO: PASS_RATIO,
    richText: richText,
    el: el,
    append: append,
    es: es,
    setRich: setRich,
    clear: clear,
    icon: icon,
    telegramLink: telegramLink,
    emptyState: emptyState,
    href: href,
    backLink: backLink,
    screenHead: screenHead,
    badge: badge,
    isPassed: isPassed,
    isTopicDone: isTopicDone,
    doneBadge: doneBadge,
    quizBadges: quizBadges,
    tabs: tabs,
    announce: announce,
    shortcutsApply: shortcutsApply
  };

  var registry = {};
  ECA.views = {
    register: function (name, render) { registry[name] = render; },
    get: function (name) { return registry[name] || null; }
  };
})(typeof window !== 'undefined' ? window : globalThis);
