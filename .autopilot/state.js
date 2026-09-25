window.STATE =
{
  "slug": "classic-style-grammar",
  "dir": "2026-09-24-classic-style-grammar",
  "title": "Грамматика и стиль как на старых страницах",
  "mode": "interview",
  "depth": "deep",
  "polish": null,
  "tier": "T2",
  "briefFile": "2026-09-24-brief.md",
  "memoryFile": "CLAUDE.md",
  "skillDir": "/Users/roman/.agents/skills/autopilot",
  "startedAt": "2026-09-24T19:01:27+03:00",
  "updatedAt": "2026-09-25T13:29:54+03:00",
  "finishedAt": "2026-09-25T13:29:54+03:00",
  "stages": [
    {
      "id": "preflight",
      "status": "done",
      "startedAt": "2026-09-24T19:01:27+03:00",
      "finishedAt": "2026-09-24T19:01:27+03:00"
    },
    {
      "id": "manifest",
      "status": "done",
      "startedAt": "2026-09-24T19:01:27+03:00",
      "finishedAt": "2026-09-24T19:01:27+03:00"
    },
    {
      "id": "briefing",
      "status": "done",
      "startedAt": "2026-09-24T19:01:27+03:00",
      "note": "3 вопроса",
      "finishedAt": "2026-09-24T19:04:36+03:00"
    },
    {
      "id": "spec",
      "status": "done",
      "startedAt": "2026-09-24T19:04:36+03:00",
      "finishedAt": "2026-09-24T19:06:48+03:00"
    },
    {
      "id": "plan",
      "status": "done",
      "startedAt": "2026-09-24T19:06:48+03:00",
      "note": "9 тасков в 4 волны, ярус T2 (+1 таск: объём контента)",
      "finishedAt": "2026-09-24T19:06:59+03:00"
    },
    {
      "id": "build",
      "status": "done",
      "startedAt": "2026-09-24T19:06:59+03:00",
      "note": "12 из 12 тасков готовы",
      "finishedAt": "2026-09-25T13:25:16+03:00"
    },
    {
      "id": "review",
      "status": "done",
      "startedAt": "2026-09-24T19:18:17+03:00",
      "note": "проверено 12 из 12",
      "finishedAt": "2026-09-25T13:25:16+03:00"
    },
    {
      "id": "final",
      "status": "done",
      "startedAt": "2026-09-25T13:25:16+03:00",
      "finishedAt": "2026-09-25T13:29:54+03:00",
      "note": "слепая приёмка: 10 из 10, расхождений нет"
    }
  ],
  "requirements": {
    "total": 16,
    "done": 16,
    "inTicket": 0,
    "inSpec": 0,
    "placeholder": 0,
    "deferred": 0,
    "dropped": 0
  },
  "tickets": [
    {
      "id": "11",
      "title": "Стиль старых страниц для всего сайта",
      "requirements": [
        "R01",
        "R02",
        "R09",
        "R10",
        "R11",
        "R13",
        "R14i",
        "R15i"
      ],
      "blockedBy": [],
      "wave": 1,
      "zone": [
        "css/base.css",
        "css/vocab.css",
        "index.html",
        "js/views/level.js"
      ],
      "status": "done",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0,
      "startedAt": "2026-09-24T19:06:59+03:00",
      "finishedAt": "2026-09-24T19:21:00+03:00",
      "commit": "f850215",
      "tests": {
        "passed": 39,
        "failed": 0
      }
    },
    {
      "id": "12",
      "title": "Грамматика вкладками: схема, рендерер, эталонная тема",
      "requirements": [
        "R03",
        "R04",
        "R05",
        "R06",
        "R08",
        "G01"
      ],
      "blockedBy": [
        "11"
      ],
      "wave": 2,
      "zone": [
        "js/views/grammar.js",
        "css/grammar.css",
        "tools/validate-content.js"
      ],
      "status": "done",
      "retries": 0,
      "repairs": 1,
      "handoffs": 0,
      "startedAt": "2026-09-24T19:21:00+03:00",
      "repairFindings": [
        "русский текст в поле es эталонной темы; hero.sub как простой текст; защита валидатора от кривых элементов"
      ],
      "finishedAt": "2026-09-24T19:37:17+03:00",
      "commit": "b75602b",
      "tests": {
        "passed": 44,
        "failed": 0
      }
    },
    {
      "id": "13",
      "title": "Грамматика A1 вкладками",
      "requirements": [
        "R07",
        "R08",
        "R04",
        "R05"
      ],
      "blockedBy": [
        "12"
      ],
      "wave": 3,
      "zone": [
        "data/grammar-a1.js"
      ],
      "status": "done",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0,
      "startedAt": "2026-09-24T19:37:17+03:00",
      "finishedAt": "2026-09-24T22:59:37+03:00",
      "commit": "440cdd4",
      "tests": {
        "passed": 44,
        "failed": 0
      }
    },
    {
      "id": "14",
      "title": "Грамматика A2 вкладками",
      "requirements": [
        "R07",
        "R08",
        "R04",
        "R05"
      ],
      "blockedBy": [
        "12"
      ],
      "wave": 3,
      "zone": [
        "data/grammar-a2*.js"
      ],
      "status": "done",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0,
      "startedAt": "2026-09-24T19:37:17+03:00",
      "finishedAt": "2026-09-24T22:59:37+03:00",
      "commit": "57f6f70",
      "tests": {
        "passed": 44,
        "failed": 0
      }
    },
    {
      "id": "15",
      "title": "Грамматика B1 вкладками",
      "requirements": [
        "R07",
        "R08",
        "R04",
        "R05",
        "R06"
      ],
      "blockedBy": [
        "12"
      ],
      "wave": 3,
      "zone": [
        "data/grammar-b1*.js"
      ],
      "status": "done",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0,
      "startedAt": "2026-09-24T19:37:17+03:00",
      "finishedAt": "2026-09-24T22:59:37+03:00",
      "commit": "1cbafa9",
      "tests": {
        "passed": 44,
        "failed": 0
      }
    },
    {
      "id": "16",
      "title": "Грамматика B2 вкладками",
      "requirements": [
        "R07",
        "R08",
        "R04",
        "R05",
        "R06"
      ],
      "blockedBy": [
        "12"
      ],
      "wave": 3,
      "zone": [
        "data/grammar-b2.js"
      ],
      "status": "done",
      "retries": 1,
      "repairs": 0,
      "handoffs": 0,
      "startedAt": "2026-09-24T19:47:31+03:00",
      "finishedAt": "2026-09-25T03:38:03+03:00",
      "commit": "0d9d1bc",
      "tests": {
        "passed": 44,
        "failed": 0
      }
    },
    {
      "id": "17",
      "title": "Грамматика C1 вкладками",
      "requirements": [
        "R07",
        "R08",
        "R04",
        "R05",
        "R06"
      ],
      "blockedBy": [
        "12"
      ],
      "wave": 3,
      "zone": [
        "data/grammar-c1.js"
      ],
      "status": "done",
      "retries": 1,
      "repairs": 0,
      "handoffs": 0,
      "startedAt": "2026-09-24T19:49:23+03:00",
      "finishedAt": "2026-09-25T03:38:03+03:00",
      "commit": "1a8b975",
      "tests": {
        "passed": 44,
        "failed": 0
      }
    },
    {
      "id": "18",
      "title": "Грамматика C2 вкладками",
      "requirements": [
        "R07",
        "R08",
        "R04",
        "R05",
        "R06"
      ],
      "blockedBy": [
        "12"
      ],
      "wave": 3,
      "zone": [
        "data/grammar-c2.js"
      ],
      "status": "done",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0,
      "startedAt": "2026-09-24T22:50:16+03:00",
      "finishedAt": "2026-09-25T03:38:03+03:00",
      "commit": "8f53a6e",
      "tests": {
        "passed": 44,
        "failed": 0
      }
    },
    {
      "id": "19",
      "title": "Строгая схема, аудит, сквозная проверка",
      "requirements": [
        "R03",
        "R09",
        "R10",
        "R15i",
        "R04"
      ],
      "blockedBy": [
        "13",
        "14",
        "15",
        "16",
        "17",
        "18"
      ],
      "wave": 4,
      "zone": [
        "tools/",
        "tests/"
      ],
      "status": "done",
      "retries": 0,
      "repairs": 0,
      "handoffs": 1,
      "startedAt": "2026-09-25T04:01:43+03:00",
      "finishedAt": "2026-09-25T04:43:00+03:00",
      "commit": "e79328d",
      "tests": {
        "passed": 50,
        "failed": 0
      }
    },
    {
      "id": "20",
      "title": "Единообразие тем грамматики A1–B1",
      "requirements": [
        "R04",
        "R05",
        "R08"
      ],
      "blockedBy": [
        "13",
        "14",
        "15"
      ],
      "wave": 4,
      "zone": [
        "data/grammar-a1.js",
        "data/grammar-a2*.js",
        "data/grammar-b1*.js"
      ],
      "status": "done",
      "retries": 1,
      "repairs": 1,
      "handoffs": 0,
      "startedAt": "2026-09-24T23:14:23+03:00",
      "repairFindings": [
        "jugar: подпись o → ue вместо u → ue; + 4 мелочи оформления"
      ],
      "finishedAt": "2026-09-25T03:54:47+03:00",
      "commit": "3efadda",
      "tests": {
        "passed": 44,
        "failed": 0
      }
    },
    {
      "id": "21",
      "title": "Единообразие тем грамматики B2–C2",
      "requirements": [
        "R04",
        "R05",
        "R08"
      ],
      "blockedBy": [
        "16",
        "17",
        "18"
      ],
      "wave": 4,
      "zone": [
        "data/grammar-b2.js",
        "data/grammar-c1.js",
        "data/grammar-c2.js"
      ],
      "status": "done",
      "retries": 0,
      "repairs": 1,
      "handoffs": 0,
      "startedAt": "2026-09-25T03:38:03+03:00",
      "repairFindings": [
        "c2-modo-contraste: переводы остались от старых испанских фраз"
      ],
      "finishedAt": "2026-09-25T04:01:43+03:00",
      "commit": "ce5689e",
      "tests": {
        "passed": 44,
        "failed": 0
      }
    },
    {
      "id": "22",
      "title": "Штриховка шапки темы и мелочи",
      "requirements": [
        "R09",
        "R03"
      ],
      "blockedBy": [
        "19"
      ],
      "wave": 5,
      "zone": [
        "css/",
        "js/views/grammar.js",
        "tools/e2e.js"
      ],
      "status": "done",
      "startedAt": "2026-09-25T04:43:00+03:00",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0,
      "finishedAt": "2026-09-25T13:25:16+03:00",
      "commit": "0ec98aa",
      "tests": {
        "passed": 52,
        "failed": 0
      }
    }
  ],
  "singlePass": null,
  "tests": {
    "passed": 52,
    "failed": 0
  },
  "debt": {
    "placeholders": [],
    "assumptions": [],
    "emptyEnv": []
  },
  "additions": [],
  "coverage": {
    "findings": 4,
    "fixed": 4,
    "notes": "карта вкладок для 28 тем, список тем про субхунтив, R12 в решениях, список перенесённых тем"
  },
  "concerns": [
    "[→ таск 19] 11 · контраст .rule-card__label, литералы цветов, дубли тёмных блоков, e2e на 4+ вкладки и порядок разделов, мелочи hero/trigger/visually-hidden",
    "[в отчёт] 11 · CLAUDE.md называет старые шрифты — обновить в финале",
    "[→ таск 19] 12 · e2e на сохранение теста при смене вкладки/языка и на экранирование опасной разметки должны уметь краснеть; roving-tabs и pick продублированы в grammar.js; таблица без heading — region без имени; два рендерера таблиц; .grammar-hero дублирует .hero; e2e сравнивает подписи вкладок с номером",
    "[→ таск 19] 12 · рамка фокуса вокруг hero-заголовка после загрузки на 1280",
    "[→ таск 20] 13–15 · id вкладок разного языка, цвета без единой схемы, длинные заголовки строк таблиц, сокращённые подписи, conj-листалки, повторы парадигм, перегруженные вкладки, блоки без heading",
    "[→ таск 19] 12 · e2e openGrammarTable не ждёт aria-selected выбранной вкладки; комментарий у GRAMMAR_TEST описывает непроверенное",
    "[→ таск 21] 16–17 · цвета: пары выбора одного цвета (Futuro/Condicional, -ra/-se), один цвет — два значения; перифразы с мини-вкладками по временам; списки слов через triggers вместо markers",
    "[в отчёт] 16–18 · правило «время → цвет по всему сайту» (моё, оркестратора) оказалось ошибкой — пары выбора стали одноцветными; заменено правилом «у вариантов выбора разные цвета»",
    "[в отчёт] 20 · a1-presente-ar: переводы образцов hablar/comer/vivir теперь только в примерах",
    "[→ таск 22] 19 · штриховка hero, region на языке lang, e2e EN без ожидания, мёртвый код e2e, тёмный блок в css.test",
    "[в отчёт] 19 · visually-hidden в двух копиях; tabs() и miniTabs по-разному отмечают выбор; ключ grammar.notPassedTabs — имя от переходного режима; «Список слов» без своего адреса; полоса из 7 вкладок на 320px прокручивается внутри себя",
    "[в отчёт] 22 · на ширине 560–900px полоса вкладок прокручивается вбок без видимой подсказки; TABLE_OF в grammar.js вне i18n; тест «одного источника фона hero» не видит @media и grammar.css; имя e2e-проверки обещает больше, чем проверяет"
  ],
  "reviewers": {
    "manifestSpec": "rev-ms6",
    "craft": "rev-craft6"
  },
  "blind": {
    "implemented": 10,
    "partial": 0,
    "missing": 0,
    "drift": [],
    "notes": [
      "все 10 пунктов брифа и дополнений реализованы; примеров грамматики 481 → 1421"
    ]
  }
}
