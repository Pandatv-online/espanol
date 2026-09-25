<!-- autopilot:start -->
# Español con amigos — сайт для изучения испанского

Статический сайт без сборки: грамматика (тема-страница с нумерованными вкладками + тест последней вкладкой) и слова (карточки, тест, список) по уровням A1–C2 для русско- и англоязычных учеников; интерфейс RU/EN, прогресс в `localStorage`. Работает с `file://` и с GitHub Pages (`.nojekyll`). Вид — как у старых страниц автора (`archive/*.html`): navy-hero со штриховкой, янтарный акцент, бумажный фон.

## Команды

| Команда | Что делает |
|---------|------------|
| открыть `index.html` в браузере | Запустить сайт, сервер не нужен |
| `node --test tests/` | Все юнит-тесты (54) через `tests/index.js` |
| `node --test tests/store.test.js` | Один файл тестов |
| `node tools/icons.js` | Пересобрать `js/icons.js` (иконки Phosphor Duotone, которые темы слов называют в `icon`); качает `@phosphor-icons/core` через `npm pack` |
| `node tools/validate-content.js` | Проверка `data/`: «OK: уровней 6, тем слов 52, тем грамматики 28» или список ошибок и код 1 |
| `npx -y -p playwright@1.63.0 node tools/e2e.js` | 41 браузерный сценарий по `file://` (в т.ч. все 28 тем грамматики, 320/375/1280 px); `--shots <папка>` — плюс скриншоты ключевых экранов |
| `npx -y -p playwright@1.63.0 node tools/screenshot.js "$TMPDIR/eca-shots" '#/a1' '#/a2/grammar/a2-perfecto-indefinido/conj'` | Скриншоты 375/1280 × светлая/тёмная; код 1 при горизонтальном скролле или ошибке в консоли |
| `npx -y playwright@1.63.0 install chromium` | Поставить браузер, если Playwright его не нашёл |

## Структура

```
index.html     единственная страница: шапка, #screen, футер; шрифты Google Fonts; фиксирует порядок всех <script>
js/            data, i18n, store, quiz, icons (генерируется tools/icons.js) — без DOM; ui.js — DOM-хелперы и реестр экранов; app.js — роутер
js/views/      экраны: level.js (уровень), vocab.js (тема слов), grammar.js (тема грамматики + ECA.grammarBlocks)
data/          контент: levels.js, vocab-<lvl>.js, grammar-<lvl>.js (+ grammar-a2-more.js, grammar-b1-more.js)
css/           base.css — токены, общие компоненты и компоненты блоков грамматики; vocab.css, grammar.css — экраны
tests/         node:test, *.test.js; index.js — точка входа для `node --test tests/`
tools/         только для разработки: validate-content.js, icons.js, e2e.js, screenshot.js
archive/       старые HTML-страницы грамматики (образец стиля); PORT-CHECKLIST.md — что куда перенесено; сайт их не подключает
docs/adr/      решения: статика без сборки, hash-роутинг, контент как JS, ru/en в данных, localStorage, node:test + Playwright
CONTENT.md     инструкция автора контента: слова, «Как записывать слова», «Тема грамматики» (полная схема, типы блоков, правила оформления)
```

## Ключевые файлы

- `index.html` — порядок `<script>` = порядок зависимостей; новый файл в `data/` подключается только здесь.
- `js/app.js` — `parseRoute` (доступен и в Node), рендер экрана, тема, язык, сброс прогресса.
- `js/ui.js` — `ECA.ui` (`el`, `es`, `richText`/`setRich`, `screenHead`, `tabs`, `markSelected`, `rovingTabs`, `badge`, `isTopicDone`, `outline`, `announce`, `shortcutsApply`…), `ECA.views`, общие строки `section.* badge.* back.to empty.* soon.* tg.*`.
- `js/quiz.js` — единый движок теста обоих экранов: генерация вопросов, `seeded`, `session`, `attempt`, `finish`, `keyAction`.
- `js/views/grammar.js` — экран грамматики: hero, полоса вкладок, отрисовка блоков (`ECA.grammarBlocks.render(block, lang) → Node`, `.types`), тест во вкладке `test`.
- `js/views/vocab.js` — экран слов и чистый `ECA.vocabDeck` (колода карточек).
- `tools/validate-content.js` — все правила контента; `module.exports = { validate, loadSite }`.
- Эталон темы грамматики — `a2-perfecto-indefinido` в `data/grammar-a2.js`.

## Архитектура

- Всё живёт в `window.ECA`; скрипты грузятся синхронно в `<head>`: `js/data, i18n, store, quiz, icons` → `data/*.js` → `js/ui` → `views/level, vocab, grammar` → `js/app` (стартует на `DOMContentLoaded`).
- `ECA.data` — реестр: файлы данных при загрузке зовут `addLevels` / `addVocab(level, topics)` / `addGrammar(level, topics)`; чтение — `levels()`, `vocab(lvl)`, `grammar(lvl)`, `find('words'|'grammar', topicId)`.
- `ECA.i18n`: язык = `store.pref('lang')`, иначе `detect(navigator.languages)` (ru/uk/be/kk → ru, остальное → en); `t(key, {param})` с фолбэком en → ru → сам ключ; `pick(obj, lang?)` — сторона `{ru,en}` (по умолчанию текущий язык, пустая → другая, строка — как есть); `onChange` → app сохраняет pref, перерисовывает шапку/футер (`data-i18n`, `data-i18n-aria`) и экран с `rerender: true`.
- `ECA.store` — один JSON в `localStorage['eca:v1']`: `prefs` (`lang`, `theme`, `level`), `learned` (ключ `topicId|es`), `scores` (ключи `words:<id>`, `grammar:<id>` → лучший `{score,total}`); `recordScore` → `true` при новом рекорде; `resetProgress` сохраняет `lang` и `theme`; без хранилища — `onUnavailable` показывает заметку в футере.
- `ECA.quiz`: `fromVocab` — 10 вопросов, направления es→язык и язык→es чередуются, отвлекающие варианты — из той же темы, затем из других тем уровня; `fromGrammar` — вопросы из `topic.quiz` с перемешанными вариантами.
- `Question = { prompt, promptLang, es?, options (3–4), optionsLang, answer (индекс), explain? }`.
- Маршруты: `#/<lvl>` · `#/<lvl>/words/<id>` · `#/<lvl>/words/<id>/quiz` · `#/<lvl>/grammar/<id>` · `#/<lvl>/grammar/<id>/<tab>`; в URL `a1`…`c2`, внутри `A1`…`C2`.
- Вкладка грамматики: id вкладки из данных или `test` (тест, всегда последняя); нет вкладки → первая; неизвестная → первая и адрес чистится `replaceState`; переключение — `replaceState` (без записи в историю).
- Пустой hash → `store.pref('level')` или `A1` через `replaceState`; неразобранный адрес → «Такой страницы нет»; темы нет или её `level` ≠ уровню из URL → «Такой темы нет»; экран бросил исключение → «Что-то пошло не так»; экран не зарегистрирован → «скоро».
- Экран: `ECA.views.register(name, render(container, ctx))`, имена `level`, `words` (и `/quiz`: `ctx.route.tab === 'quiz'`), `grammar` (`ctx.route.tab` — id вкладки или `null`).
- `ctx = { route: {name, level, topicId, tab}, levelId, level, topic, state, rerender }`; app сам чистит контейнер, ставит `<title>`, после перехода скроллит вверх и фокусирует `h1`.
- `ctx.state` живёт, пока не сменился hash, у грамматики — пока не сменилась тема (ключ уровень+тема): тест не сбрасывается при смене вкладки и языка; вкладка, колода, позиция и seed теста хранятся там.
- Страница уровня: ступеньки уровней — ссылки `<a class="level-tile">` в `nav`, выбранная — `aria-current="page"` (при смене уровня фокус возвращается на неё); ниже — «Грамматика», затем «Слова».
- Строка темы грамматики на странице уровня показывает `summary` или `hero.sub`; карточки слов по кругу красятся `.c-teal/blue/coral/amber/purple`, иконка темы — `ui.topicIcon(topic.icon)`: SVG из `ECA.icons` (`имя → [[d, opacity?], …]`, бокс 256, `currentColor` = `--c-hi`); неизвестное имя выводится текстом.
- Ход теста у обоих экранов общий: `quiz.attempt(seed)` → `{seed, session, recorded, newBest}`; `quiz.session` (`start/pick/next/answered/finished/result`, повторный выбор игнорируется); `quiz.finish` пишет результат один раз и только когда отвечены все вопросы, `newBest` — только если был прежний результат и он побит.
- Клавиатура: `quiz.keyAction(key, {answered, options})` → `{pick:i}` (цифры) | `{next:true}` (Enter или пробел) | `null`; `ui.shortcutsApply(e, scope, screen)` пропускает клавиши, только если фокус в колоде/тесте, на вкладках экрана, на `h1` экрана или на `body` (на вкладках ←/→ остаются за вкладками; Enter/пробел на ссылке или обычной кнопке — нативные).
- Колода карточек: пробел/Enter — перевернуть, ← — назад (`vocabDeck.back` по `history` колоды отменяет последний шаг и снимает «знаю», если слово не было выучено раньше), ↓ — «Повторить» (в конец), → — «Знаю»; после кнопки фокус уходит на новую карточку, чтобы пробел переворачивал её, а не нажимал кнопку снова.
- Вкладки: `ui.tabs({items, active, onSelect, label, panelId, numbered})` — полоса `.tabs > .tab > .tab__num + .tab__label` (`numbered: false` — без номеров), `list.select(id)`; мини-вкладки и свои списки вкладок — через `ui.markSelected(buttons, i)` (aria-selected + roving tabindex) и `ui.rovingTabs(list, buttons, select)` (←/→ по кругу, Home, End).
- «Пройдено» (`ui.isTopicDone`): слова — все выучены И тест ≥ 80 %; грамматика — тест ≥ 80 % (`ui.PASS_RATIO`).
- Движение (раздел `motion` в `base.css`): `ui.outline(a)` добавляет в ссылку `svg.outline-draw` из двух путей (`pathLength=1`) — при `:hover`/`:focus-visible` линии рисуются из левого верхнего и правого нижнего углов и встречаются; пути меряются по рамке и радиусам на каждом наведении; сейчас так оформлены `.level-tile`, `.topic-card`, `.topic-row`. Параллакс `.site-header`/`.hero` — только CSS scroll-driven (`view-timeline: --band`), под `@supports` и `prefers-reduced-motion: no-preference`.
- Тема оформления: `pref('theme')` или системная; ставится `data-theme` на `<html>` до отрисовки и переключаются `<meta name="theme-color">`.

## Соглашения кода

- Только классические `<script src>` (без `type="module"`), никакого `fetch` локальных файлов, только относительные пути — иначе сайт не откроется с `file://`.
- Файл в `js/` — IIFE `(function (root) { var ECA = (root.ECA = root.ECA || {}); … })(typeof window !== 'undefined' ? window : globalThis)`; чистая логика — до `if (typeof document === 'undefined') return;`, DOM — после (так файл грузится в Node).
- `js/` написан в стиле ES5 (`var`, `function`); `tools/` и `tests/` — `const` и стрелки. Идентификаторы и редкие комментарии — по-английски.
- Тексты интерфейса — только `ECA.i18n.t(key)`; каждый экран регистрирует свои строки через `ECA.i18n.add({ru, en})` с префиксом (`level.*`, `vocab.*`, `grammar.*`); поля `{ru, en}` из данных — через `ECA.i18n.pick`.
- Испанский текст — в элементе с `lang="es"` (`ui.es(text, tag?)`).
- DOM — через `ui.el(tag, {class, text, on, dataset, …атрибуты}, children)` / `textContent`; `innerHTML` только через `ui.setRich` / `ui.richText` (пропускает `<b> <i> <em> <strong> <br>` без атрибутов).
- `localStorage` — только через `ECA.store`.
- CSS: цвета — только токены из `:root` в `css/base.css` (проверяет `tests/css.test.js`); шрифты `--font-display` (Playfair Display) и `--font-body` (Noto Sans); шкалы `--step-*`, `--space-*`, `--radius-*`; кнопки не меньше `--tap` (44px).
- Токены — палитра старых страниц: `--bg --surface --surface-2 --ink --ink-soft --heading --em --link --line --accent* --sun* --ok* --bad* --focus --tg`; hero и полоса вкладок — `--hero-*` (`bg ink soft faint accent focus tint stripe…`); 5 цветов `blue amber teal coral purple` × `'' -soft -ink -on -hi` (`-hi` — выделенные слова на `--surface`: примеры, окончания `--ending`). Фон страницы — бумага: `body` кладёт поверх `--bg` токены `--paper-grain` (мелкое зерно) и `--paper-mottle` (крупные пятна) — SVG-шум `feTurbulence` в data-URI, свой в тёмной теме — и два мягких `radial-gradient`; карточки на `--surface` остаются гладкими.
- Цвет компонента — класс `.c-blue/.c-amber/.c-teal/.c-coral/.c-purple` (задаёт `--c --c-soft --c-ink --c-on --c-hi`, стоят в конце `base.css`); компонент читает `var(--c)`, а не конкретный цвет.
- Тёмная тема: два блока (`@media (prefers-color-scheme: dark) :root:not([data-theme="light"])` и `:root[data-theme="dark"]`) объявляют одинаковые токены; одинаковые значения внутри блока — через `var()`, не повтором литерала.
- `.hero` (тема грамматики) красится одним правилом вместе с `.site-header` (navy + штриховка `repeating-linear-gradient`); `.hero + .tabs` стыкуются; при 4+ вкладках уже 560px подпись видна только у активной.
- Общие компоненты (`.btn`, `.chip`, `.tabs`, `.mini-tabs`, `.badge`, `.options > .option`, `.feedback`, блоки грамматики `.rule-card`, `.trigger-card`, `.kw-box`, `.ex-box`, `.conj-card`, `.tip`, `.table`…) — в `base.css`; стили экранов — в `vocab.css` / `grammar.css`.
- Контент — только в `data/`; файлы данных не IIFE, а прямой вызов `ECA.data.addVocab('A1', [...])` / `addGrammar('A2', [...])`.
- Тема слов: `{ id: 'a1-greetings', level, icon: 'hand-waving', title: {ru,en}, words: [{ es, ru, en, ex?: {es,ru,en} }] }`; ≥ 12 слов, `ex` у ≥ половины, существительные с артиклем (`el libro`), `es` уникален в теме.
- Тема грамматики: `{ id, level, title, hero: {es, sub}, tabs: [{ id, label, blocks: [{ type, heading?, … }] }], quiz }` — полный контракт в `CONTENT.md`, «Тема грамматики».
- Блоки: `text rules triggers conj table markers examples tip`; цвета — только 5 названий палитры; 4–6 вкладок (id `[a-z0-9-]`, уникальны, не `test`, подпись ≤ 12), ≥ 20 примеров с `<b>` в `es`, у `conj` ≥ 2 вариантов (мини-вкладки), ячейки таблиц ≤ 30 символов.
- `quiz`: 8–10 вопросов `{ prompt: {ru,en}, es?, options (3–4), answer, explain: {ru,en} }`; старый формат `sections` валидатор отвергает.
- `id` темы уникален по всему сайту и не меняется (на нём прогресс); `level` темы совпадает с уровнем в `addVocab`/`addGrammar`.

## Тесты

- `node:test` + `node:assert/strict`, без пакетов; новый `tests/<name>.test.js` подхватывается `tests/index.js` сам.
- Тест делает `require('../js/<module>.js')` и берёт модуль из `globalThis.ECA`; все файлы идут в одном процессе, `ECA` общий.
- `store` тестируется через `store._setBackend(fakeStorage)`; из `js/app.js` в Node доступен только `ECA.app.parseRoute`.
- `tests/validate.test.js` и `tests/grammar-schema.test.js` — правила валидатора (схема вкладок и блоков); `tests/content.test.js` — в теме слов нет двух слов с одинаковым переводом.
- `tests/css.test.js` — читает CSS как текст: нет hex/rgb вне токен-блоков, два тёмных блока совпадают, нет повторённых литералов, `.hero` красится одним правилом с `.site-header`.
- `ECA.grammarBlocks` в Node не грузится (нужен DOM) — отрисовку блоков проверяет e2e.
- e2e — `tools/e2e.js`: свой мини-раннер (`check(name, fn, opts)`), Chromium по `file://`, падает на ошибках консоли (кроме шрифтов и `net::ERR`) и горизонтальном скролле; фильтра по одному сценарию нет.

## Подводные камни

- Node 22 не раскрывает каталог в `node --test tests/` — вход идёт через `tests/index.js`, не удалять.
- Новое имя в `icon` темы слов — сначала `node tools/icons.js`, иначе валидатор: «иконки … нет в js/icons.js»; `js/icons.js` руками не правят.
- Новый файл в `data/` без `<script>` в `index.html` на сайте не виден, валидатор падает («файл не подключён в index.html»).
- `views/vocab.js` бросает ошибку, если `js/quiz.js` не загружен раньше.
- `ui.js` регистрирует свои строки, только если `ECA.i18n` уже загружен.
- Порядок вопросов берётся из seed в `ctx.state` (при смене языка вопросы те же); вопросы строятся с `rng: quiz.seeded(seed)`, `Math.random` — только для seed новой попытки.
- В испанских полях грамматики (`hero.es`, `es`, `phrases`, `tags`, `inf`, `rows`, строковые ячейки) кириллица — ошибка валидатора; всё языковое — в `{ru, en}`.
- Новый цвет или hex прямо в правиле CSS роняет `tests/css.test.js` — сначала токен в оба тёмных блока и в `:root`.
- `tools/screenshot.js` без аргумента пишет в `shots/` в корне репозитория, а `shots/` не в `.gitignore` — указывать папку вне репо.
- Шрифты (Playfair Display, Noto Sans) грузятся с Google Fonts; офлайн — системные фолбэки.

## Как здесь работает Autopilot

Сборка ведётся навыком `/autopilot`. Требования, спецификация и таски — в `.autopilot/`.
Прогресс — `.autopilot/dashboard.html`. Правило: требование из `manifest.md`
может снять только пользователь.

Если работа продолжается — скажи «продолжи автопилот»: состояние поднимется
из `.autopilot/state.js`, переспрашивать ничего не нужно.
<!-- autopilot:end -->
