window.STATE =
{
  "slug": "classic-style-grammar",
  "dir": "2026-09-24-classic-style-grammar--wip",
  "title": "Грамматика и стиль как на старых страницах",
  "mode": "interview",
  "depth": "deep",
  "polish": null,
  "tier": "T2",
  "briefFile": "2026-09-24-brief.md",
  "memoryFile": "CLAUDE.md",
  "skillDir": "/Users/roman/.agents/skills/autopilot",
  "startedAt": "2026-09-24T19:01:27+03:00",
  "updatedAt": "2026-09-24T19:06:59+03:00",
  "finishedAt": null,
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
      "status": "active",
      "startedAt": "2026-09-24T19:06:59+03:00",
      "note": "0 из 9 тасков готовы"
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
    "total": 16,
    "done": 1,
    "inTicket": 15,
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
      "status": "in-progress",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0,
      "startedAt": "2026-09-24T19:06:59+03:00"
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
      "status": "pending",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
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
      "status": "pending",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
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
      "status": "pending",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
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
      "status": "pending",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
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
      "status": "pending",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
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
      "status": "pending",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
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
      "status": "pending",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
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
  "coverage": {
    "findings": 4,
    "fixed": 4,
    "notes": "карта вкладок для 28 тем, список тем про субхунтив, R12 в решениях, список перенесённых тем"
  },
  "concerns": [],
  "reviewers": {
    "manifestSpec": null,
    "craft": null
  },
  "blind": null
}
