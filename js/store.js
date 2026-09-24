(function (root) {
  'use strict';
  var ECA = (root.ECA = root.ECA || {});

  var KEY = 'eca:v1';
  var KEEP_ON_RESET = ['lang', 'theme'];
  var backend = null;
  var state = blank();
  var failListeners = [];

  function blank() { return { prefs: {}, learned: {}, scores: {} }; }

  function isObj(v) { return v && typeof v === 'object' && !Array.isArray(v); }

  function defaultBackend() {
    try { return root.localStorage || null; } catch (e) { return null; }
  }

  function probe(b) {
    if (!b) return false;
    try {
      b.setItem(KEY + ':probe', '1');
      b.removeItem(KEY + ':probe');
      return true;
    } catch (e) { return false; }
  }

  function load() {
    state = blank();
    if (!api.available) return;
    try {
      var raw = backend.getItem(KEY);
      if (!raw) return;
      var parsed = JSON.parse(raw);
      if (!isObj(parsed)) return;
      if (isObj(parsed.prefs)) state.prefs = parsed.prefs;
      if (isObj(parsed.learned)) state.learned = parsed.learned;
      if (isObj(parsed.scores)) state.scores = parsed.scores;
    } catch (e) {
      state = blank();
    }
  }

  function save() {
    if (!api.available) return;
    try { backend.setItem(KEY, JSON.stringify(state)); } catch (e) {
      // storage full or blocked mid-session: keep working in memory and tell the UI
      api.available = false;
      failListeners.slice().forEach(function (fn) { try { fn(); } catch (err) { /* listener bug */ } });
    }
  }

  function wordKey(topicId, es) { return topicId + '|' + es; }

  var api = {
    available: false,
    pref: function (key) {
      return Object.prototype.hasOwnProperty.call(state.prefs, key) ? state.prefs[key] : null;
    },
    setPref: function (key, val) {
      if (val == null) delete state.prefs[key]; else state.prefs[key] = val;
      save();
    },
    isLearned: function (topicId, es) { return state.learned[wordKey(topicId, es)] === 1; },
    setLearned: function (topicId, es, on) {
      if (on) state.learned[wordKey(topicId, es)] = 1; else delete state.learned[wordKey(topicId, es)];
      save();
    },
    learnedCount: function (topicId, words) {
      var n = 0;
      (words || []).forEach(function (w) { if (w && api.isLearned(topicId, w.es)) n++; });
      return n;
    },
    best: function (quizKey) {
      var s = state.scores[quizKey];
      if (!isObj(s) || typeof s.score !== 'number' || typeof s.total !== 'number' || s.total <= 0) return null;
      return { score: s.score, total: s.total };
    },
    // Returns true when this result became the new best.
    recordScore: function (quizKey, score, total) {
      if (!(total > 0)) return false;
      var prev = api.best(quizKey);
      if (prev && prev.score / prev.total >= score / total) return false;
      state.scores[quizKey] = { score: score, total: total };
      save();
      return true;
    },
    resetProgress: function () {
      var prefs = {};
      KEEP_ON_RESET.forEach(function (k) {
        if (Object.prototype.hasOwnProperty.call(state.prefs, k)) prefs[k] = state.prefs[k];
      });
      state = blank();
      state.prefs = prefs;
      save();
    },
    onUnavailable: function (fn) {
      failListeners.push(fn);
      return function () { failListeners = failListeners.filter(function (f) { return f !== fn; }); };
    },
    _setBackend: function (b) {
      backend = b || null;
      api.available = probe(backend);
      load();
    }
  };

  ECA.store = api;
  api._setBackend(defaultBackend());
})(typeof window !== 'undefined' ? window : globalThis);
