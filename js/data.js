(function (root) {
  'use strict';
  var ECA = (root.ECA = root.ECA || {});

  var levelList = [];
  var vocabByLevel = {};
  var grammarByLevel = {};
  var dgtTopics = [];      // Spanish driving-theory topics (DGT), not tied to a CEFR level
  var dgtOrphans = [];     // questions added for a topic id that doesn't exist (reported by the validator)

  function push(map, level, topics) {
    var key = String(level).toUpperCase();
    map[key] = (map[key] || []).concat(topics || []);
  }

  ECA.data = {
    addLevels: function (levels) { levelList = levelList.concat(levels || []); },
    addVocab: function (level, topics) { push(vocabByLevel, level, topics); },
    addGrammar: function (level, topics) { push(grammarByLevel, level, topics); },
    addDgt: function (topics) { dgtTopics = dgtTopics.concat(topics || []); },
    // Extra questions for topics already added: { topicId: [question, …] } (e.g. official DGT test items).
    addDgtQuestions: function (map) {
      for (var id in map) {
        var topic = null;
        for (var i = 0; i < dgtTopics.length; i++) if (dgtTopics[i] && dgtTopics[i].id === id) topic = dgtTopics[i];
        if (topic) topic.questions = (topic.questions || []).concat(map[id]);
        else dgtOrphans.push(id);
      }
    },
    dgtOrphans: function () { return dgtOrphans.slice(); },
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
