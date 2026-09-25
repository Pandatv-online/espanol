(function (root) {
  'use strict';
  var ECA = (root.ECA = root.ECA || {});

  var LEVEL_RE = /^[abc][12]$/i;

  function parseRoute(hash) {
    var path = String(hash || '').replace(/^#/, '').replace(/^\/+|\/+$/g, '');
    if (path === '') return { name: 'level', level: null };
    if (hash && String(hash).charAt(1) !== '/' && String(hash).charAt(0) === '#') return { name: 'notfound', level: null };
    var parts = path.split('/').map(function (p) { try { return decodeURIComponent(p); } catch (e) { return p; } });
    if (!LEVEL_RE.test(parts[0])) return { name: 'notfound', level: null };
    var level = parts[0].toUpperCase();
    if (parts.length === 1) return { name: 'level', level: level };
    if (parts[1] === 'words' && parts[2] && (parts.length === 3 || (parts.length === 4 && parts[3] === 'quiz'))) {
      return { name: 'words', level: level, topicId: parts[2], tab: parts[3] || null };
    }
    if (parts[1] === 'grammar' && parts[2] && (parts.length === 3 || (parts.length === 4 && parts[3]))) {
      return { name: 'grammar', level: level, topicId: parts[2], tab: parts[3] || null };
    }
    return { name: 'notfound', level: level };
  }

  ECA.app = { parseRoute: parseRoute, start: function () {} };
  if (typeof document === 'undefined') return;

  var i18n = ECA.i18n, store = ECA.store, ui = ECA.ui, data = ECA.data;
  var html = document.documentElement;

  i18n.add({
    ru: {
      'site.tagline': 'Учите испанские слова и грамматику по уровням, от A1 до C2.',
      'nav.skip': 'К содержанию',
      'lang.group': 'Язык интерфейса',
      'theme.label': 'Тёмная тема',
      'theme.short': 'Тёмная',
      'footer.by': 'Сайт сделал',
      'footer.reset': 'Сбросить прогресс',
      'footer.resetConfirm': 'Сбросить выученные слова и результаты тестов? Язык и тема останутся.',
      'footer.resetDone': 'Прогресс сброшен',
      'footer.noStorage': 'Прогресс не сохраняется в этом браузере',
      'notfound.page': 'Такой страницы нет',
      'notfound.topic': 'Такой темы нет',
      'notfound.text': 'Возможно, ссылка устарела или в ней опечатка.',
      'notfound.toLevel': 'К уровню {level}',
      'error.title': 'Что-то пошло не так',
      'error.text': 'Эта страница не открылась из-за ошибки. Обновите страницу или выберите другую тему.'
    },
    en: {
      'site.tagline': 'Learn Spanish words and grammar level by level, from A1 to C2.',
      'nav.skip': 'Skip to content',
      'lang.group': 'Interface language',
      'theme.label': 'Dark theme',
      'theme.short': 'Dark',
      'footer.by': 'Website by',
      'footer.reset': 'Reset progress',
      'footer.resetConfirm': 'Reset learned words and test results? Language and theme stay as they are.',
      'footer.resetDone': 'Progress reset',
      'footer.noStorage': 'Progress is not saved in this browser',
      'notfound.page': 'This page doesn’t exist',
      'notfound.topic': 'This topic doesn’t exist',
      'notfound.text': 'The link may be outdated or mistyped.',
      'notfound.toLevel': 'Go to level {level}',
      'error.title': 'Something went wrong',
      'error.text': 'This page failed to open because of an error. Reload the page or pick another topic.'
    }
  });

  // --- theme & language are applied immediately (scripts run in <head>) so there is no flash
  function systemDark() {
    return !!(root.matchMedia && root.matchMedia('(prefers-color-scheme: dark)').matches);
  }
  function effectiveTheme() {
    var p = store.pref('theme');
    return p === 'dark' || p === 'light' ? p : systemDark() ? 'dark' : 'light';
  }
  function applyTheme() {
    var p = store.pref('theme');
    if (p === 'dark' || p === 'light') html.setAttribute('data-theme', p);
    else html.removeAttribute('data-theme');
    // A manual choice overrides the system-based <meta name="theme-color"> pair.
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) {
      if (!m.hasAttribute('data-media')) m.setAttribute('data-media', m.getAttribute('media') || '');
      if (p === 'dark' || p === 'light') m.setAttribute('media', m.getAttribute('data-media').indexOf(p) >= 0 ? 'all' : 'not all');
      else m.setAttribute('media', m.getAttribute('data-media'));
    });
  }
  applyTheme();

  var savedLang = store.pref('lang');
  i18n.setLang(savedLang === 'ru' || savedLang === 'en' ? savedLang : i18n.detect(root.navigator ? root.navigator.languages || [root.navigator.language] : []));
  html.lang = i18n.lang();

  // --- rendering
  var current = null;      // { hash, route, state }
  var screenEl;

  function levelById(id) {
    var list = data.levels();
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  }

  function defaultLevel() {
    var saved = store.pref('level');
    return saved && levelById(saved) ? saved : 'A1';
  }

  function paintChrome() {
    html.lang = i18n.lang();
    document.querySelectorAll('[data-i18n]').forEach(function (n) { n.textContent = i18n.t(n.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (n) { n.setAttribute('aria-label', i18n.t(n.getAttribute('data-i18n-aria'))); });
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === i18n.lang() ? 'true' : 'false');
    });
    var dark = effectiveTheme() === 'dark';
    var toggle = document.getElementById('theme-toggle');
    toggle.setAttribute('aria-pressed', dark ? 'true' : 'false');
    var slot = document.getElementById('footer-tg-slot');
    ui.clear(slot).appendChild(ui.telegramLink('tg-link--large'));
    document.getElementById('storage-note').hidden = store.available;
  }

  function notFound(container, levelId, kind) {
    var lvl = levelId || defaultLevel();
    container.appendChild(ui.el('section', { class: 'notfound' }, [
      ui.screenHead({ title: i18n.t(kind === 'topic' ? 'notfound.topic' : 'notfound.page'), lead: i18n.t('notfound.text') }),
      ui.el('a', { class: 'btn btn--primary', href: ui.href(lvl), text: i18n.t('notfound.toLevel', { level: lvl }) })
    ]));
  }

  function soon(container, ctx) {
    container.appendChild(ui.screenHead({ back: ui.backLink(ctx.levelId, ctx.route.name), title: i18n.pick(ctx.topic.title) }));
    container.appendChild(ui.emptyState({ title: i18n.t('soon.title'), text: i18n.t('soon.text') }));
  }

  function broken(container, ctx) {
    container.appendChild(ui.el('section', { class: 'notfound' }, [
      ui.screenHead({ back: ui.backLink(ctx.levelId, ctx.route.name), title: i18n.t('error.title'), lead: i18n.t('error.text') }),
      ui.el('a', { class: 'btn btn--primary', href: ui.href(ctx.levelId), text: i18n.t('notfound.toLevel', { level: ctx.levelId }) })
    ]));
  }

  function render(opts) {
    opts = opts || {};
    var hash = root.location.hash;
    var route = parseRoute(hash);
    var prev = current;

    if (route.name === 'level' && !route.level) {
      route.level = defaultLevel();
      hash = ui.href(route.level);
      try { root.history.replaceState(null, '', hash); } catch (e) { /* file:// in some browsers */ }
    }

    // A grammar tab lives in the address, but the screen state (e.g. a test in progress) belongs to the topic.
    var key = route.name === 'grammar' ? [route.level, route.topicId].join('/') : hash;
    var sameScreen = prev && prev.key === key;
    var state = sameScreen ? prev.state : {};
    current = { hash: hash, key: key, route: route, state: state };

    var level = route.level ? levelById(route.level) : null;
    var ctx = { route: route, levelId: route.level, level: level, topic: null, state: state, rerender: !!opts.rerender };

    ui.clear(screenEl);
    var title = 'Español con amigos';
    if (route.name !== 'notfound' && !level) {
      notFound(screenEl, null, 'page');
    } else if (route.name === 'notfound') {
      notFound(screenEl, level ? level.id : null, 'page');
    } else {
      store.setPref('level', level.id);
      if (route.name === 'level') {
        (ECA.views.get('level') || function () {})(screenEl, ctx);
      } else {
        var topic = data.find(route.name, route.topicId);
        if (!topic || topic.level !== level.id) {
          notFound(screenEl, level.id, 'topic');
        } else {
          ctx.topic = topic;
          title = i18n.pick(topic.title) + ' | ' + title;
          var view = ECA.views.get(route.name);
          try {
            if (view) view(screenEl, ctx); else soon(screenEl, ctx);
          } catch (e) {
            if (root.console) console.error(e);
            ui.clear(screenEl);
            broken(screenEl, ctx);
          }
        }
      }
    }
    document.title = title;

    if (opts.rerender) return;
    var levelSwitch = prev && prev.route.name === 'level' && route.name === 'level' && prev.hash !== hash;
    if (levelSwitch) {
      var btn = screenEl.querySelector('[aria-current="page"][data-level]');
      if (btn) btn.focus({ preventScroll: true });
      return;
    }
    if (!prev) return; // first paint: leave focus at the top of the page
    root.scrollTo(0, 0);
    var h1 = screenEl.querySelector('h1');
    if (h1) {
      if (!h1.hasAttribute('tabindex')) h1.setAttribute('tabindex', '-1');
      h1.focus({ preventScroll: true });
    }
  }

  function start() {
    screenEl = document.getElementById('screen');
    paintChrome();

    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () {
        var l = b.getAttribute('data-lang');
        if (l === i18n.lang()) return;
        i18n.setLang(l);
      });
    });
    i18n.onChange(function (l) {
      store.setPref('lang', l);
      paintChrome();
      render({ rerender: true });
    });

    document.getElementById('theme-toggle').addEventListener('click', function () {
      store.setPref('theme', effectiveTheme() === 'dark' ? 'light' : 'dark');
      applyTheme();
      paintChrome();
    });
    if (root.matchMedia) {
      var mq = root.matchMedia('(prefers-color-scheme: dark)');
      var onSystem = function () { if (!store.pref('theme')) paintChrome(); };
      if (mq.addEventListener) mq.addEventListener('change', onSystem); else if (mq.addListener) mq.addListener(onSystem);
    }

    document.querySelector('.skip-link').addEventListener('click', function (e) {
      e.preventDefault();
      var target = screenEl.querySelector('h1') || document.getElementById('main');
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus();
    });

    document.getElementById('reset-progress').addEventListener('click', function () {
      if (!root.confirm(i18n.t('footer.resetConfirm'))) return;
      store.resetProgress();
      render({ rerender: true });
      ui.announce(i18n.t('footer.resetDone'));
    });

    store.onUnavailable(function () { document.getElementById('storage-note').hidden = false; });
    root.addEventListener('hashchange', function () { render(); });
    render();
  }

  ECA.app.start = start;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})(typeof window !== 'undefined' ? window : globalThis);
