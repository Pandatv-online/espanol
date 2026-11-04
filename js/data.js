(function (root) {
  'use strict';
  var ECA = (root.ECA = root.ECA || {});

  var levelList = [];
  var vocabByLevel = {};
  var grammarByLevel = {};
  var dgtTopics = [];      // Spanish driving-theory topics (DGT), not tied to a CEFR level

  function push(map, level, topics) {
    var key = String(level).toUpperCase();
    map[key] = (map[key] || []).concat(topics || []);
  }

  ECA.data = {
    addLevels: function (levels) { levelList = levelList.concat(levels || []); },
    addVocab: function (level, topics) { push(vocabByLevel, level, topics); },
    addGrammar: function (level, topics) { push(grammarByLevel, level, topics); },
    addDgt: function (topics) { dgtTopics = dgtTopics.concat(topics || []); },
    levels: function () { return levelList.slice(); },
    vocab: function (level) { return (vocabByLevel[String(level).toUpperCase()] || []).slice(); },
    grammar: function (level) { return (grammarByLevel[String(level).toUpperCase()] || []).slice(); },
    dgt: function () { return dgtTopics.slice(); },
    find: function (kind, topicId) {
      if (kind === 'dgt') {
        for (var j = 0; j < dgtTopics.length; j++) if (dgtTopics[j] && dgtTopics[j].id === topicId) return dgtTopics[j];
        return null;
      }
      var map = kind === 'words' ? vocabByLevel : kind === 'grammar' ? grammarByLevel : null;
      if (!map) return null;
      for (var level in map) {
        for (var i = 0; i < map[level].length; i++) {
          if (map[level][i] && map[level][i].id === topicId) return map[level][i];
        }
      }
      return null;
    }
  };
})(typeof window !== 'undefined' ? window : globalThis);
