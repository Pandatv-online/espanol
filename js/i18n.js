(function (root) {
  'use strict';
  var ECA = (root.ECA = root.ECA || {});

  var LANGS = ['ru', 'en'];
  var RU_FAMILY = ['ru', 'uk', 'be', 'kk'];
  var dict = { ru: {}, en: {} };
  var current = 'en';
  var listeners = [];

  function detect(languages) {
    var first = languages && languages.length ? String(languages[0]).toLowerCase() : '';
    var prefix = first.split(/[-_]/)[0];
    return RU_FAMILY.indexOf(prefix) >= 0 ? 'ru' : 'en';
  }

  function setLang(l) {
    if (LANGS.indexOf(l) < 0 || l === current) return;
    current = l;
    listeners.slice().forEach(function (fn) { fn(current); });
  }

  function t(key, params) {
    var s = dict[current][key];
    if (s == null) s = dict.en[key];
    if (s == null) s = dict.ru[key];
    if (s == null) return key;
    if (!params) return s;
    return s.replace(/\{(\w+)\}/g, function (m, name) {
      return Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : m;
    });
  }

  function pick(obj) {
    if (obj == null) return '';
    if (typeof obj === 'string') return obj;
    var v = obj[current];
    if (v == null || v === '') v = obj.en != null && obj.en !== '' ? obj.en : obj.ru;
    return v == null ? '' : v;
  }

  function add(strings) {
    LANGS.forEach(function (l) {
      var src = (strings && strings[l]) || {};
      for (var k in src) dict[l][k] = src[k];
    });
  }

  ECA.i18n = {
    detect: detect,
    lang: function () { return current; },
    setLang: setLang,
    t: t,
    pick: pick,
    onChange: function (fn) { listeners.push(fn); },
    add: add
  };
})(typeof window !== 'undefined' ? window : globalThis);
