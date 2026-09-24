window.STATE =
{
  "slug": "spanish-learning-site",
  "dir": "2026-09-24-spanish-learning-site--wip",
  "title": "Интерактивный сайт для изучения испанского (RU/EN, A1–C2)",
  "mode": "interview",
  "depth": "deep",
  "polish": null,
  "tier": "T2",
  "briefFile": "2026-09-24-brief.md",
  "memoryFile": "CLAUDE.md",
  "skillDir": "/Users/roman/.agents/skills/autopilot",
  "startedAt": "2026-09-24T02:12:53+03:00",
  "updatedAt": "2026-09-24T03:25:14+03:00",
  "finishedAt": null,
  "stages": [
    {
      "id": "preflight",
      "status": "done",
      "startedAt": "2026-09-24T02:12:53+03:00",
      "finishedAt": "2026-09-24T02:13:40+03:00"
    },
    {
      "id": "manifest",
      "status": "active",
      "startedAt": "2026-09-24T02:13:40+03:00"
    },
    {
      "id": "briefing",
      "status": "pending"
    },
    {
      "id": "spec",
      "status": "pending"
    },
    {
      "id": "plan",
      "status": "pending"
    },
    {
      "id": "build",
      "status": "pending"
    },
    {
      "id": "review",
      "status": "pending"
    },
    {
      "id": "final",
      "status": "pending"
    }
  ],
  "requirements": {
    "total": 25,
    "done": 0,
    "inTicket": 0,
    "inSpec": 25,
    "placeholder": 0,
    "deferred": 0,
    "dropped": 0
  },
  "tickets": [
    {
      "id": "01",
      "title": "Каркас сайта, дизайн, уровни, футер",
      "requirements": [
        "G02",
        "G03",
        "G04",
        "G05",
        "R01",
        "R02",
        "R03",
        "R04",
        "R05",
        "R06",
        "R07",
        "R08",
        "R09",
        "R10",
        "R11",
        "R13",
        "R15i",
        "R17i",
        "R18i",
        "R19i",
        "R20i"
      ],
      "blockedBy": [],
      "wave": 1,
      "zone": [
        "index.html",
        "css/base.css",
        "js/",
        "data/levels.js",
        "tests/",
        "tools/",
        "archive/"
      ],
      "status": "pending",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
    },
    {
      "id": "02",
      "title": "Тема слов: карточки, тест, список",
      "requirements": [
        "R04",
        "R05",
        "R14i",
        "R19i"
      ],
      "blockedBy": [
        "01"
      ],
      "wave": 2,
      "zone": [
        "js/views/vocab.js",
        "css/vocab.css"
      ],
      "status": "pending",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
    },
    {
      "id": "03",
      "title": "Грамматика: экран и перенос 4 старых тем",
      "requirements": [
        "G01",
        "R05",
        "R16i",
        "R19i"
      ],
      "blockedBy": [
        "01"
      ],
      "wave": 2,
      "zone": [
        "js/views/grammar.js",
        "css/grammar.css",
        "data/grammar-a2.js",
        "data/grammar-b1.js"
      ],
      "status": "pending",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
    },
    {
      "id": "04",
      "title": "Слова: A1, A2, B1",
      "requirements": [
        "R03",
        "R15i"
      ],
      "blockedBy": [
        "01"
      ],
      "wave": 2,
      "zone": [
        "data/vocab-a1..b1.js"
      ],
      "status": "pending",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
    },
    {
      "id": "05",
      "title": "Слова: B2, C1, C2",
      "requirements": [
        "R03",
        "R15i"
      ],
      "blockedBy": [
        "01"
      ],
      "wave": 2,
      "zone": [
        "data/vocab-b2..c2.js"
      ],
      "status": "pending",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
    },
    {
      "id": "06",
      "title": "Грамматика: A1 и новые темы A2, B1",
      "requirements": [
        "G01",
        "R16i"
      ],
      "blockedBy": [
        "01"
      ],
      "wave": 2,
      "zone": [
        "data/grammar-a1.js",
        "data/grammar-*-more.js"
      ],
      "status": "pending",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
    },
    {
      "id": "07",
      "title": "Грамматика: B2, C1, C2",
      "requirements": [
        "G01"
      ],
      "blockedBy": [
        "01"
      ],
      "wave": 2,
      "zone": [
        "data/grammar-b2..c2.js"
      ],
      "status": "pending",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
    },
    {
      "id": "08",
      "title": "Аудит по web-design-guidelines и сквозная проверка",
      "requirements": [
        "R04",
        "R05",
        "R12",
        "R18i",
        "R20i"
      ],
      "blockedBy": [
        "02",
        "03",
        "04",
        "05",
        "06",
        "07"
      ],
      "wave": 3,
      "zone": [
        "tools/e2e*"
      ],
      "status": "pending",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
    }
  ],
  "singlePass": null,
  "tests": null,
  "debt": {
    "placeholders": [],
    "assumptions": [],
    "emptyEnv": []
  },
  "additions": [],
  "coverage": { "findings": 4, "fixed": 4, "notes": "≥650→≥700 слов; web-design-guidelines: исправлять всё; перенос грамматики — чек-лист; публикация — вопрос в конце. 20 пунктов «нет в брифе» — проработка R##.n на глубине deep, оставлены" },
  "concerns": [],
  "reviewers": {
    "manifestSpec": null,
    "craft": null
  },
  "blind": null
}
