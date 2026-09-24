(function (root) {
  'use strict';
  var ECA = (root.ECA = root.ECA || {});

  function shuffle(arr, rng) {
    var r = rng || Math.random;
    var out = (arr || []).slice();
    for (var i = out.length - 1; i > 0; i--) {
      var j = Math.floor(r() * (i + 1));
      var tmp = out[i]; out[i] = out[j]; out[j] = tmp;
    }
    return out;
  }

  function side(word, key) {
    var v = word && word[key];
    return typeof v === 'string' ? v.trim() : '';
  }

  // Up to `need` distractor strings: topic words first, then the rest of the level.
  function distractors(word, fromKey, toKey, pools, need, rng) {
    var correct = side(word, toKey);
    var prompt = side(word, fromKey);
    var picked = [];
    var seen = {};
    seen[correct] = true;
    for (var p = 0; p < pools.length && picked.length < need; p++) {
      var candidates = shuffle(pools[p], rng);
      for (var i = 0; i < candidates.length && picked.length < need; i++) {
        var c = candidates[i];
        var text = side(c, toKey);
        // skip blanks, duplicates and synonyms that would also be correct
        if (!text || seen[text] || side(c, fromKey) === prompt) continue;
        seen[text] = true;
        picked.push(text);
      }
    }
    return picked;
  }

  function fromVocab(topic, levelTopics, opts) {
    opts = opts || {};
    var lang = opts.lang === 'ru' ? 'ru' : 'en';
    var count = opts.count > 0 ? opts.count : 10;
    var rng = opts.rng || Math.random;
    var words = (topic && topic.words) || [];
    var levelWords = [];
    (levelTopics || []).forEach(function (t) {
      if (t && t !== topic && t.id !== (topic && topic.id)) levelWords = levelWords.concat(t.words || []);
    });

    var chosen = shuffle(words, rng).slice(0, Math.min(count, words.length));
    var startWithEs = rng() < 0.5;
    return chosen.map(function (word, idx) {
      var esFirst = (idx % 2 === 0) === startWithEs;
      var fromKey = esFirst ? 'es' : lang;
      var toKey = esFirst ? lang : 'es';
      var others = words.filter(function (w) { return w !== word; });
      var wrong = distractors(word, fromKey, toKey, [others, levelWords], 3, rng);
      var options = shuffle([side(word, toKey)].concat(wrong), rng);
      return {
        prompt: side(word, fromKey),
        promptLang: esFirst ? 'es' : lang,
        options: options,
        optionsLang: esFirst ? lang : 'es',
        answer: options.indexOf(side(word, toKey)),
        explain: side(word, 'es') + ' — ' + side(word, lang)
      };
    });
  }

  function pickLang(obj, lang) {
    if (obj == null) return undefined;
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj.en || obj.ru || '';
  }

  function fromGrammar(topic, opts) {
    opts = opts || {};
    var lang = opts.lang === 'ru' ? 'ru' : 'en';
    var rng = opts.rng || Math.random;
    return ((topic && topic.quiz) || []).map(function (item) {
      var order = shuffle(item.options.map(function (_, i) { return i; }), rng);
      var q = {
        prompt: pickLang(item.prompt, lang),
        promptLang: lang,
        options: order.map(function (i) { return item.options[i]; }),
        optionsLang: 'es',
        answer: order.indexOf(item.answer)
      };
      if (item.es) q.es = item.es;
      if (item.explain) q.explain = pickLang(item.explain, lang);
      return q;
    });
  }

  // Deterministic random source (mulberry32): one seed gives the same quiz in RU and EN.
  function seeded(seed) {
    var a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) >>> 0;
      var x = Math.imul(a ^ (a >>> 15), 1 | a);
      x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    };
  }

  // The run through one test, shared by the words and grammar screens. Session = { index, picks[] }.
  var session = {
    start: function () { return { index: 0, picks: [] }; },
    answered: function (s) { return s.picks[s.index] != null; },
    // The first pick for a question is final; later picks return the same session.
    pick: function (s, questions, choice) {
      if (s.index >= questions.length || s.picks[s.index] != null) return s;
      var picks = s.picks.slice();
      picks[s.index] = choice;
      return { index: s.index, picks: picks };
    },
    next: function (s) { return session.answered(s) ? { index: s.index + 1, picks: s.picks } : s; },
    finished: function (s, questions) { return s.index >= questions.length; },
    result: function (s, questions) {
      var mistakes = [];
      questions.forEach(function (q, i) { if (s.picks[i] !== q.answer) mistakes.push(i); });
      return { score: questions.length - mistakes.length, total: questions.length, mistakes: mistakes };
    }
  };

  // Attempt = { seed, session, recorded, newBest } — one go at a test, seeded for a stable order.
  function attempt(seed) {
    return { seed: seed >>> 0, session: session.start(), recorded: false, newBest: false };
  }

  // Records the score once, and only when every question is answered.
  // "New best" means an earlier result existed and this one beat it.
  function finish(a, questions, store, key) {
    if (a.recorded || !session.finished(a.session, questions)) return a;
    var r = session.result(a.session, questions);
    var hadBest = !!store.best(key);
    var isBest = store.recordScore(key, r.score, r.total);
    var out = {};
    for (var k in a) out[k] = a[k];
    out.recorded = true;
    out.newBest = hadBest && !!isBest;
    return out;
  }

  // Keyboard: digits pick an option while unanswered; Enter moves on after an answer.
  function keyAction(key, s) {
    if (key === 'Enter') return s.answered ? { next: true } : null;
    if (/^[1-9]$/.test(key)) {
      var i = Number(key) - 1;
      return !s.answered && i < s.options ? { pick: i } : null;
    }
    return null;
  }

  ECA.quiz = {
    fromVocab: fromVocab, fromGrammar: fromGrammar, shuffle: shuffle, seeded: seeded,
    session: session, attempt: attempt, finish: finish, keyAction: keyAction
  };
})(typeof window !== 'undefined' ? window : globalThis);
