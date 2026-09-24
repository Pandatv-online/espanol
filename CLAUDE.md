<!-- autopilot:start -->
# Español con amigos — сайт для изучения испанского

Статический сайт без сборки: слова (карточки, тест, список) и грамматика (объяснение + тест) по уровням A1–C2 для русско- и англоязычных учеников; интерфейс RU/EN, прогресс в `localStorage`. Работает с `file://` и с GitHub Pages (`.nojekyll`).

## Команды

| Команда | Что делает |
|---------|------------|
| открыть `index.html` в браузере | Запустить сайт, сервер не нужен |
| `node --test tests/` | Все юнит-тесты (39) через `tests/index.js` |
| `node --test tests/store.test.js` | Один файл тестов |
| `node tools/validate-content.js` | Проверка `data/`: «OK: уровней 6, тем слов 52, тем грамматики 28» или список ошибок и код 1 |
| `npx -y -p playwright@1.63.0 node tools/e2e.js` | 20 браузерных сценариев по `file://`; `--shots <папка>` — плюс скриншоты ключевых экранов |
| `npx -y -p playwright@1.63.0 node tools/screenshot.js "$TMPDIR/eca-shots" '#/a1' '#/a1/grammar/a1-presente-ar'` | Скриншоты 375/1280 × светлая/тёмная; код 1 при горизонтальном скролле или ошибке в консоли |
| `npx -y playwright@1.63.0 install chromium` | Поставить браузер, если Playwright его не нашёл |

## Структура

```
index.html     единственная страница: шапка, #screen, футер; фиксирует порядок всех <script>
js/            data, i18n, store, quiz — без DOM; ui.js — DOM-хелперы и реестр экранов; app.js — роутер
js/views/      экраны: level.js (уровень), vocab.js (тема слов), grammar.js (тема грамматики)
data/          контент: levels.js, vocab-<lvl>.js, grammar-<lvl>.js (+ grammar-a2-more.js, grammar-b1-more.js)
css/           base.css — токены и общие компоненты; vocab.css, grammar.css — экраны
tests/         node:test, *.test.js; index.js — точка входа для `node --test tests/`
tools/         только для разработки: validate-content.js, e2e.js, screenshot.js
archive/       старые одиночные HTML-страницы грамматики; PORT-CHECKLIST.md — что куда перенесено; сайт их не подключает
CONTENT.md     инструкция для автора контента: как добавить слово/тему, «Как записывать слова» (правила оформления переводов)
```

## Ключевые файлы

- `index.html` — порядок `<script>` = порядок зависимостей; новый файл в `data/` подключается только здесь.
- `js/app.js` — `parseRoute` (доступен и в Node), рендер экрана, тема, язык, сброс прогресса.
- `js/ui.js` — `ECA.ui` (`el`, `es`, `richText`/`setRich`, `screenHead`, `tabs`, `badge`, `isTopicDone`, `announce`, `shortcutsApply`…), `ECA.views`, общие строки `section.* badge.* back.to empty.* soon.* tg.*`.
- `js/quiz.js` — единый движок теста обоих экранов: генерация вопросов, `seeded`, `session`, `attempt`, `finish`, `keyAction`.
- `js/views/vocab.js` — экран слов и чистый `ECA.vocabDeck` (колода карточек); `js/views/grammar.js` — экран грамматики.
- `tools/validate-content.js` — все правила контента; `module.exports = { validate, loadSite }`.

## Архитектура

- Всё живёт в `window.ECA`; скрипты грузятся синхронно в `<head>`: `js/data, i18n, store, quiz` → `data/*.js` → `js/ui` → `views/level, vocab, grammar` → `js/app` (стартует на `DOMContentLoaded`).
- `ECA.data` — реестр: файлы данных при загрузке зовут `addLevels` / `addVocab(level, topics)` / `addGrammar(level, topics)`; чтение — `levels()`, `vocab(lvl)`, `grammar(lvl)`, `find('words'|'grammar', topicId)`.
- `ECA.i18n`: язык = `store.pref('lang')`, иначе `detect(navigator.languages)` (ru/uk/be/kk → ru, остальное → en); `t(key, {param})` с фолбэком en → ru → сам ключ; `onChange` → app сохраняет pref, перерисовывает шапку/футер (`data-i18n`, `data-i18n-aria`) и экран с `rerender: true`.
- `ECA.store` — один JSON в `localStorage['eca:v1']`: `prefs` (`lang`, `theme`, `level`), `learned` (ключ `topicId|es`), `scores` (ключи `words:<id>`, `grammar:<id>` → лучший `{score,total}`); `recordScore` → `true` при новом рекорде; `resetProgress` сохраняет `lang` и `theme`; без хранилища — `onUnavailable` показывает заметку в футере.
- `ECA.quiz`: `fromVocab` — 10 вопросов, направления es→язык и язык→es чередуются, отвлекающие варианты — из той же темы, затем из других тем уровня; `fromGrammar` — вопросы из `topic.quiz` с перемешанными вариантами.
- `Question = { prompt, promptLang, es?, options (3–4), optionsLang, answer (индекс), explain? }`.
- Маршруты: `#/<lvl>` · `#/<lvl>/words/<id>` · `#/<lvl>/words/<id>/quiz` · `#/<lvl>/grammar/<id>`; в URL `a1`…`c2`, внутри `A1`…`C2`.
- Пустой hash → `store.pref('level')` или `A1` через `replaceState`; неразобранный адрес → «Такой страницы нет»; темы нет или её `level` ≠ уровню из URL → «Такой темы нет»; экран бросил исключение → «Что-то пошло не так»; экран не зарегистрирован → «скоро».
- Экран: `ECA.views.register(name, render(container, ctx))`, имена `level`, `words` (и `/quiz`: `ctx.route.tab === 'quiz'`), `grammar`.
- `ctx = { route: {name, level, topicId, tab}, levelId, level, topic, state, rerender }`; app сам чистит контейнер, ставит `<title>`, после перехода скроллит вверх и фокусирует `h1`.
- `ctx.state` живёт, пока не сменился hash (перерисовка при смене языка) — вкладка, колода, позиция и seed теста хранятся там.
- Ход теста у обоих экранов общий: `quiz.attempt(seed)` → `{seed, session, recorded, newBest}`; `quiz.session` (`start/pick/next/answered/finished/result`, повторный выбор игнорируется); `quiz.finish` пишет результат один раз и только когда отвечены все вопросы, `newBest` — только если был прежний результат и он побит.
- Клавиатура: `quiz.keyAction(key, {answered, options})` → `{pick:i}` (цифры) | `{next:true}` (Enter) | `null`; `ui.shortcutsApply(e, scope, screen)` пропускает клавиши, только если фокус в колоде/тесте, на `h1` экрана или на `body`.
- «Пройдено» (`ui.isTopicDone`): слова — все выучены И тест ≥ 80 %; грамматика — тест ≥ 80 % (`ui.PASS_RATIO`).
- Тема оформления: `pref('theme')` или системная; ставится `data-theme` на `<html>` до отрисовки и переключаются `<meta name="theme-color">`.

## Соглашения кода

- Только классические `<script src>` (без `type="module"`), никакого `fetch` локальных файлов, только относительные пути — иначе сайт не откроется с `file://`.
- Файл в `js/` — IIFE `(function (root) { var ECA = (root.ECA = root.ECA || {}); … })(typeof window !== 'undefined' ? window : globalThis)`; чистая логика — до `if (typeof document === 'undefined') return;`, DOM — после (так файл грузится в Node).
- `js/` написан в стиле ES5 (`var`, `function`); `tools/` и `tests/` — `const` и стрелки. Идентификаторы и редкие комментарии — по-английски.
- Тексты интерфейса — только `ECA.i18n.t(key)`; каждый экран регистрирует свои строки через `ECA.i18n.add({ru, en})` с префиксом (`vocab.*`, `grammar.*`); поля `{ru, en}` из данных — через `ECA.i18n.pick`.
- Испанский текст — в элементе с `lang="es"` (`ui.es(text, tag?)`).
- DOM — через `ui.el(tag, {class, text, on, dataset, …атрибуты}, children)` / `textContent`; `innerHTML` только через `ui.setRich` / `ui.richText` (пропускает `<b> <i> <em> <strong> <br>` без атрибутов).
- `localStorage` — только через `ECA.store`.
- CSS: цвета — только токены из `css/base.css` (`--bg --surface --ink --accent --ok --bad --focus --tg`…, шкалы `--step-*`, `--space-*`, `--radius-*`); кнопки не меньше `--tap` (44px); общие компоненты (`.btn`, `.chip`, `.tabs`, `.badge`, `.options > .option`, `.feedback`…) — в `base.css`, стили экранов — в `vocab.css` / `grammar.css`.
- Контент — только в `data/`; файлы данных не IIFE, а прямой вызов `ECA.data.addVocab('A1', [...])` / `addGrammar('A2', [...])`.
- Тема слов: `{ id: 'a1-greetings', level, icon, title: {ru,en}, words: [{ es, ru, en, ex?: {es,ru,en} }] }`; ≥ 12 слов, `ex` у ≥ половины, существительные с артиклем (`el libro`), `es` уникален в теме.
- Тема грамматики: `{ id, level, title, summary, sections: [{ heading, body: {ru: [абзацы], en: [...]}, table?: {head, rows}, examples?: [{es,ru,en}] }], quiz: [{ prompt: {ru,en}, es?, options, answer, explain: {ru,en} }] }`; 8–10 вопросов.
- `id` темы уникален по всему сайту, `level` темы совпадает с уровнем в `addVocab`/`addGrammar`.

## Тесты

- `node:test` + `node:assert/strict`, без пакетов; новый `tests/<name>.test.js` подхватывается `tests/index.js` сам.
- Тест делает `require('../js/<module>.js')` и берёт модуль из `globalThis.ECA`; все файлы идут в одном процессе, `ECA` общий.
- `store` тестируется через `store._setBackend(fakeStorage)`; из `js/app.js` в Node доступен только `ECA.app.parseRoute`.
- `tests/validate.test.js` — правила валидатора; `tests/content.test.js` — в теме слов нет двух слов с одинаковым переводом.
- e2e — `tools/e2e.js`: свой мини-раннер (`check(name, fn, opts)`), Chromium по `file://`, падает на ошибках консоли (кроме шрифтов и `net::ERR`) и горизонтальном скролле; фильтра по одному сценарию нет.

## Подводные камни

- Node 22 не раскрывает каталог в `node --test tests/` — вход идёт через `tests/index.js`, не удалять.
- Новый файл в `data/` без `<script>` в `index.html` на сайте не виден, валидатор падает («файл не подключён в index.html»).
- `views/vocab.js` бросает ошибку, если `js/quiz.js` не загружен раньше.
- `ui.js` регистрирует свои строки, только если `ECA.i18n` уже загружен.
- Порядок вопросов берётся из seed в `ctx.state` (при смене языка вопросы те же); вопросы строятся с `rng: quiz.seeded(seed)`, `Math.random` — только для seed новой попытки.
- Ячейки `table` в грамматике — только строки без `{ru, en}`: всё, что зависит от языка, пишется в `body`.
- `tools/screenshot.js` без аргумента пишет в `shots/` в корне репозитория, а `shots/` не в `.gitignore` — указывать папку вне репо.
- Шрифты (Unbounded, Onest) грузятся с Google Fonts; офлайн — системные фолбэки.

## Как здесь работает Autopilot

Сборка ведётся навыком `/autopilot`. Требования, спецификация и таски — в `.autopilot/`.
Прогресс — `.autopilot/dashboard.html`. Правило: требование из `manifest.md`
может снять только пользователь.

Если работа продолжается — скажи «продолжи автопилот»: состояние поднимется
из `.autopilot/state.js`, переспрашивать ничего не нужно.
<!-- autopilot:end -->
