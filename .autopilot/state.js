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
  "updatedAt": "2026-09-24T12:58:36+03:00",
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
      "status": "pending",
      "note": "приёмка; 2 таска по итогам разбора замечаний"
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
      "startedAt": "2026-09-24T03:26:19+03:00",
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
      "status": "done",
      "finishedAt": "2026-09-24T04:02:41+03:00",
      "tests": {
        "passed": 25,
        "failed": 0
      },
      "commit": "e794d8e",
      "retries": 0,
      "repairs": 1,
      "repairFindings": [
        "кнопки RU/EN и .btn--small меньше 44px — R18i",
        "«✓ пройдено»: порог 0.7 и без учёта выученных слов — R19i"
      ],
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
      "status": "done",
      "finishedAt": "2026-09-24T04:18:06+03:00",
      "tests": {
        "passed": 29,
        "failed": 0
      },
      "commit": "299f704",
      "startedAt": "2026-09-24T04:05:40+03:00",
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
      "status": "done",
      "finishedAt": "2026-09-24T12:27:31+03:00",
      "tests": {
        "passed": 32,
        "failed": 0
      },
      "commit": "f7c091d",
      "startedAt": "2026-09-24T04:07:39+03:00",
      "retries": 0,
      "repairs": 1,
      "repairFindings": [
        "3 вопроса с двумя верными ответами (imperfecto Q6, subjuntivo Q4, Q9); маркер en aquella época; атрибуты через ui.el"
      ],
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
      "status": "done",
      "finishedAt": "2026-09-24T04:07:39+03:00",
      "tests": {
        "passed": 25,
        "failed": 0
      },
      "commit": "d9442c4",
      "startedAt": "2026-09-24T03:59:26+03:00",
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
      "status": "done",
      "finishedAt": "2026-09-24T12:22:59+03:00",
      "tests": {
        "passed": 29,
        "failed": 0
      },
      "commit": "c0c0d9b",
      "startedAt": "2026-09-24T03:59:26+03:00",
      "retries": 0,
      "repairs": 2,
      "repairFindings": [
        "повторы estar harto/a de, las energías renovables; hallazgo/descubrimiento, memoria/recuerdo — двусмысленный тест",
        "повторы слов A1–B1 в B2/C1 — CEFR",
        "desasosiego/desazón и c2-synonyms — двусмысленный тест",
        "лица только в мужском роде, ложные друзья по разному шаблону"
      ],
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
      "status": "done",
      "finishedAt": "2026-09-24T04:11:42+03:00",
      "tests": {
        "passed": 25,
        "failed": 0
      },
      "commit": "fc7a669",
      "startedAt": "2026-09-24T03:59:26+03:00",
      "retries": 0,
      "repairs": 1,
      "repairFindings": [
        "a2-reflexivos quiz[9]: два верных ответа (Me/Te) — R16i.3; + 2 пограничных вопроса и RU-фраза"
      ],
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
      "status": "done",
      "finishedAt": "2026-09-24T12:31:45+03:00",
      "tests": {
        "passed": 32,
        "failed": 0
      },
      "commit": "ae79274",
      "startedAt": "2026-09-24T04:09:18+03:00",
      "retries": 0,
      "repairs": 2,
      "repairFindings": [
        "при переделке таблиц потерян материал: c2-modo-contraste, c1-conectores",
        "лаísmo/лоísmo — смесь алфавитов; таблицы из целых фраз шире экрана"
      ],
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
      "status": "done",
      "finishedAt": "2026-09-24T12:46:40+03:00",
      "tests": {
        "passed": 35,
        "failed": 0
      },
      "commit": "10c13e2",
      "startedAt": "2026-09-24T12:31:45+03:00",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
    },
    {
      "id": "09",
      "title": "Общий движок теста и надёжность проверок",
      "requirements": [
        "R05",
        "R14i",
        "R16i",
        "R19i"
      ],
      "blockedBy": [
        "08"
      ],
      "wave": 4,
      "zone": [
        "js/",
        "tests/",
        "tools/e2e.js"
      ],
      "status": "done",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0,
      "startedAt": "2026-09-24T12:50:00+03:00",
      "finishedAt": "2026-09-24T12:58:36+03:00",
      "commit": "92b0c0a",
      "tests": {
        "passed": 39,
        "failed": 0
      }
    },
    {
      "id": "10",
      "title": "Единообразие контента слов",
      "requirements": [
        "R14i",
        "R15i"
      ],
      "blockedBy": [
        "08"
      ],
      "wave": 4,
      "zone": [
        "data/vocab-*.js",
        "CONTENT.md"
      ],
      "status": "done",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0,
      "startedAt": "2026-09-24T12:50:00+03:00",
      "finishedAt": "2026-09-24T12:57:44+03:00",
      "commit": "452b154",
      "tests": {
        "passed": 35,
        "failed": 0
      }
    }
  ],
  "singlePass": null,
  "tests": {
    "passed": 39,
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
    "notes": "≥650→≥700 слов; web-design-guidelines: исправлять всё; перенос грамматики — чек-лист; публикация — вопрос в конце. 20 пунктов «нет в брифе» — проработка R##.n на глубине deep, оставлены"
  },
  "concerns": [
    "[→ таск 09] 08 · фильтр клавиш написан дважды (vocab/grammar), копии расходятся по h1",
    "[→ таск 09] 08 · e2e «each topic opens cleanly» не ждёт отрисовки темы — может пройти вхолостую",
    "[→ таск 09] 08 · tests/content-c2.test.js проверяет формулировки, а не свойство",
    "[→ таск 10] 08 · c2-false-friends ru-пометки 105–114 символов — вариант выделяется длиной; molestar «домогаться» = acosar",
    "[в отчёт] 08 · theme-color продублирован с --bg без комментария",
    "[в отчёт] 08 · экран ошибки дублирует разметку «не найдено»",
    "[в отчёт] 08 · e2e --shots без каталога молча пропускает",
    "[в отчёт] 03 · grammar.js: класс example__es ставится через querySelectorAll после отрисовки",
    "[в отчёт] 03 · grammarQuiz.finish возвращает новый объект и теряет поля; два ключа i18n для одного сообщения",
    "[→ таск 09] 03 · tests/grammar.test.js:49 проверяет только детерминизм rng, а не порядок при смене языка",
    "[снято: исправлено позже] 07 · c2-leismo-laismo: «лаísmo/лоísmo» — смесь кириллицы и латиницы",
    "[снято: исправлено позже] 07 · таблицы из целых фраз (40–57 символов в ячейке, nowrap) — на 320px прокрутка в ~3 экрана",
    "[→ таск 10] 07 · формат подсказки глагола в es/prompt неединообразен",
    "[в отчёт] 07 · b2-subjuntivo-indicativo частично повторяет b1-subjuntivo-presente",
    "[снято: исправлено позже] 05 · c2-false-friends: ru-пометки копируют английские ловушки (fábrica — не «ткань», carpeta — не «ковёр») — для русскоязычного бессмысленны",
    "[снято: исправлено позже] 05 · tío/a и chaval в c2-slang пересекаются по переводу «парень»; пословицы Camarón… и A quien madruga… близки",
    "[→ таск 10] 05 · запятая в ru-переводах лиц — то пара по роду, то синонимы",
    "[→ таск 10] 05 · c2-look-alikes: el porqué без пары",
    "[→ таск 10] 05 · пояснения в скобках делают варианты c2-latam/c2-false-friends длиннее соседних (до 75 символов)",
    "[→ таск 09] 03 · grammar.js зависит от ECA.vocabQuiz из views/vocab.js и держит свою копию seeded rng",
    "[→ таск 09] 02 · ECA.vocabQuiz — общий ход теста живёт в файле экрана слов; перенести к ECA.quiz",
    "[→ таск 09] 02 · seeded rng внутри экрана — дубль; должен быть в ECA.quiz",
    "[→ таск 09] 02 · shuffle без ECA.quiz молча не перемешивает",
    "[→ таск 09] 02 · tests/vocab.test.js завязан на конкретную перестановку quiz.shuffle",
    "[снято: исправлено позже] 02 · стрелки ←/→ срабатывают при фокусе на RU/EN, ☾, ссылках — должны только в колоде",
    "[в отчёт] 02 · pendingTab и возврат фокуса через гонку микрозадач с app.js",
    "[снято: исправлено позже] 02 · .tabs переполнение исправлено только для .vocab — должно быть в base.css",
    "[снято: исправлено позже] 02 · base.css .tabs переполняется на 320px — исправлено только в vocab.css",
    "[→ таск 09] 06 · answer: 0 у 97 из 100 вопросов; перемешивание fromGrammar не покрыто тестом, правило не записано в CONTENT.md",
    "[в отчёт] 06 · id a1-presente-ar не соответствует содержанию (-ar/-er/-ir)",
    "[в отчёт] 06 · широкие таблицы (4 колонки, ячейки 23–27 символов) — на 320px зависят от прокрутки .table-wrap в экране 03",
    "[→ таск 10] 06 · a2-ir-a-infinitivo — подсказка лица в es стоит в разных местах",
    "[→ таск 10] 04 · пары по роду записаны тремя способами (el/la turista, el periodista / la periodista…) — унифицировать и описать в CONTENT.md",
    "[→ таск 10] 04 · пометка лат.-ам. варианта у el piso не по шаблону",
    "[снято: исправлено позже] 04 · длинные ru/en (50+ символов) из-за пометок — проверить в вариантах теста на 320px",
    "[→ таск 10] 04 · глагольные выражения переводятся по-разному в ru/en, обрывок «wish happy…» у felicitar",
    "[снято: исправлено позже] 01 · js/app.js:165 — исключение во view показывается как «скоро», а не как ошибка",
    "[снято: исправлено позже] 01 · js/store.js:45 — неудачный setItem после probe не переводит store.available в false",
    "[в отчёт] 01 · tools/validate-content.js:10 — список разрешённых тегов продублирован с ui.richText",
    "[в отчёт] 01 · tools/validate-content.js:45 — темы под неизвестным уровнем не валидируются",
    "[в отчёт] 01 · tools/e2e.js / screenshot.js — loadPlaywright скопирован",
    "[в отчёт] 01 · js/quiz.js:72 — pickLang дублирует i18n.pick",
    "[в отчёт] 01 · js/ui.js:17, views/level.js — неиспользуемые ключи i18n",
    "[в отчёт] 01 · tests/router.test.js — тест на parseRoute, не объявленный в interfaces.md",
    "[в отчёт] 01 · tests/validate.test.js:29 — неиспользуемая ветка __reg в моке",
    "[в отчёт] 01 · tests/validate.test.js — не все правила валидатора покрыты тестами",
    "[→ таск 10] 04 · vocab-b1 el portátil, vocab-a1 la chaqueta — нет пометки лат.-ам. варианта",
    "[→ таск 10] 04 · vocab-b1 trabajador/a — EN-пример выбирает She's при неуказанном роде",
    "[в отчёт] 10 · ru-пары по роду: у части лиц (profesor, abogado, cocinero…) женская форма не указана",
    "[в отчёт] 10 · tío/a без артикля в c2-slang-spain",
    "[в отчёт] 10 · CONTENT.md не описывает форму «страна; в Испании — X» из c2-latam",
    "[в отчёт] 10 · llover/nevar переведены не инфинитивом",
    "[в отчёт] 10 · c2-false-friends: ru-пометка не называет правильное испанское слово, en называет",
    "[в отчёт] 10 · molestar en: acosar = to harass; to molest точнее abusar de",
    "[в отчёт] 09 · tests/quiz.test.js держит свою копию seeded",
    "[в отчёт] 09 · tests/content.test.js ловит только полные дубли перевода",
    "[в отчёт] 09 · исключение для Enter по-прежнему разное в vocab и grammar",
    "[в отчёт] 09 · tests/grammar.test.js проверяет ядро теста — имя не соответствует"
  ],
  "reviewers": {
    "manifestSpec": null,
    "craft": null
  },
  "blind": {
    "implemented": 16,
    "partial": 2,
    "missing": 0,
    "drift": [],
    "notes": [
      "R20i GitHub Pages — готов, не опубликован: публикация ждёт разрешения (R20i.2)",
      "G02 подсказка к уровням — строка только для выбранного уровня, как в выбранном варианте ответа 9; проверка сочла «частично»"
    ]
  }
}
