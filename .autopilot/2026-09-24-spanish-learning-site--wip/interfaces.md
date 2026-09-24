# Интерфейсы

## Правила проекта

- **Стек:** чистые HTML5, CSS, JavaScript (ES2020) в браузере. Никаких фреймворков, сборщиков, npm-зависимостей в рантайме.
- **Сайт открывается двойным кликом по `index.html` (file://) и с GitHub Pages.** Поэтому: только классические `<script src>` (не `type="module"`), никакого `fetch` локальных файлов, только относительные пути.
- **Пространство имён:** всё в `window.ECA`. Каждый JS-файл — IIFE `(function (root) { … })(typeof window !== 'undefined' ? window : globalThis)`, регистрирующий себя в `root.ECA = root.ECA || {}`. Так модули без DOM загружаются в Node через `require`.
- **Язык кода:** идентификаторы на английском; комментарии — редко, по-английски.
- **Тесты:** `node --test tests/` (Node 22, встроенный раннер, без пакетов). Проверка контента: `node tools/validate-content.js`. Оба должны быть зелёными после каждого таска.
- **Инструменты разработки** (не часть сайта) живут в `tools/`. Скриншоты/проверка в браузере: Playwright через `npx -y playwright@1.63.0` (браузер ставится `npx -y playwright@1.63.0 install chromium`, это разрешено). Сайт от них не зависит.
- **Не трогать:** `.autopilot/`, `CLAUDE.md`, `.gitignore`, файлы вне своей зоны. Нужна зависимость, которой нет → вернуть `BLOCKED`, а не ставить её.
- **Безопасность:** данные вставляются в DOM через `textContent`/`createElement`. `innerHTML` — только через `ECA.ui.richText(str)`, которая пропускает лишь `<b> <i> <em> <strong> <br>` (остальное экранирует).
- **Хранилище:** только через `ECA.store`. Прямого `localStorage` в других модулях нет.
- **Тексты интерфейса:** только через `ECA.i18n.t(key)`; поля данных `{ru, en}` — через `ECA.i18n.pick(obj)`. Испанский текст оборачивается в элемент с `lang="es"`.

## Границы, решённые в спецификации

| Модуль | Владеет | Выставляет | Прячет |
|---|---|---|---|
| `data` (`js/data.js`) | реестр уровней и тем | `ECA.data.addLevels(levels)`, `addVocab(level, topics)`, `addGrammar(level, topics)`, `levels() -> Level[]`, `vocab(level) -> Topic[]`, `grammar(level) -> Topic[]`, `find(kind, topicId) -> Topic\|null` (`kind` = `'words'`\|`'grammar'`) | порядок регистрации, индексы |
| `i18n` (`js/i18n.js`) | язык интерфейса и строки | `ECA.i18n.detect(languages[]) -> 'ru'\|'en'`, `lang()`, `setLang(l)`, `t(key, params?) -> string`, `pick({ru,en}) -> string`, `onChange(fn)`, `add({ru:{…}, en:{…}})` — каждый view регистрирует свои строки сам | словарь строк, подстановку `{param}` |
| `store` (`js/store.js`) | всё в `localStorage` | `ECA.store.available -> bool`, `pref(key)`, `setPref(key, val)` (`lang`, `theme`, `level`), `isLearned(topicId, es)`, `setLearned(topicId, es, bool)`, `learnedCount(topicId, words[])`, `best(quizKey) -> {score,total}\|null`, `recordScore(quizKey, score, total)`, `resetProgress()` (сохраняет `lang`, `theme`), `_setBackend(obj)` — только для тестов | ключ `eca:v1`, JSON, try/catch, восстановление после порчи |
| `quiz` (`js/quiz.js`) | составление вопросов, без DOM | `ECA.quiz.fromVocab(topic, levelTopics, {lang, count=10, rng}) -> Question[]`, `ECA.quiz.fromGrammar(topic, {lang, rng}) -> Question[]`, `ECA.quiz.shuffle(arr, rng)` | выбор отвлекающих вариантов, направление вопроса |
| `app` (`js/app.js`, `js/ui.js`, `js/views/*.js`) | DOM, роутинг, тема оформления | `ECA.app.start()`; `ECA.ui.*` — общие помощники; `ECA.views.register(name, renderFn)` | всё остальное |
| `validate` (`tools/validate-content.js`) | проверку данных | CLI → код 0/1 и список ошибок; `module.exports.validate(ECA) -> errors[]` | правила проверки |

```js
Question = { prompt: string,          // на языке интерфейса или испанский (см. promptLang)
             promptLang: 'es'|'ru'|'en',
             es?: string,              // испанская часть вопроса грамматики
             options: string[],        // 3–4 варианта
             optionsLang: 'es'|'ru'|'en',
             answer: number,           // индекс верного варианта
             explain?: string }        // пояснение на языке интерфейса
```

Ключи прогресса: слово — `topicId + '|' + es`; тест слов — `'words:' + topicId`; тест грамматики — `'grammar:' + topicId`.

### Схема данных

```js
// data/levels.js
ECA.data.addLevels([{ id: 'A1', name: { ru, en }, canDo: { ru, en } }, … 'C2'])

// Тема слов — data/vocab-<level>.js → ECA.data.addVocab('A1', [topic, …])
{ id: 'a1-greetings', level: 'A1', icon: '👋', title: { ru, en },
  words: [ { es: 'hola', ru: 'привет', en: 'hello', ex?: { es, ru, en } } ] }
// существительные — с артиклем: 'el libro', 'la casa'; es уникален внутри темы; ≥ 12 слов; ex — у ≥ половины слов

// Тема грамматики — data/grammar-<level>*.js → ECA.data.addGrammar('A2', [topic, …])
{ id: 'a2-perfecto-indefinido', level: 'A2', title: { ru, en }, summary: { ru, en },
  sections: [ { heading: { ru, en },
                body: { ru: ['абзац', …], en: ['paragraph', …] },          // допустимы <b><i><em><strong><br>
                table?: { head: ['', 'hablar'], rows: [['yo', 'hablo']] }, // испанский/нейтральный текст
                examples?: [ { es, ru, en } ] } ],
  quiz: [ { prompt: { ru, en }, es?: 'Ayer ___ (comer, yo) paella.',
            options: ['comí', 'comía', 'he comido'], answer: 0, explain: { ru, en } } ] }  // 8–10 вопросов
```

### Маршруты

`#/<level>` · `#/<level>/words/<topicId>` · `#/<level>/words/<topicId>/quiz` · `#/<level>/grammar/<topicId>`; `<level>` в нижнем регистре (`a1`…`c2`). Пусто → уровень из `store.pref('level')` или `a1`. Иначе — экран «Такой страницы нет».

### Порядок подключения скриптов в `index.html` (фиксируется в таске 01)

`js/data.js`, `js/i18n.js`, `js/store.js`, `js/quiz.js`, `data/levels.js`,
`data/vocab-a1.js` … `data/vocab-c2.js`,
`data/grammar-a1.js`, `data/grammar-a2.js`, `data/grammar-a2-more.js`, `data/grammar-b1.js`, `data/grammar-b1-more.js`, `data/grammar-b2.js`, `data/grammar-c1.js`, `data/grammar-c2.js`,
`js/ui.js`, `js/views/level.js`, `js/views/vocab.js`, `js/views/grammar.js`, `js/app.js`.
Стили: `css/base.css` (таск 01), `css/vocab.css` (таск 02), `css/grammar.css` (таск 03) — подключены в `index.html` таском 01; дизайн-токены (CSS-переменные светлой и тёмной темы) — только в `base.css`, остальные файлы ими пользуются.
Файлы данных создаются в таске 01 заглушками (`addVocab('B2', [])`), чтобы остальные таски не трогали `index.html`.

## Что построили таски

## Из таска 01 — каркас и общие модули

- `ECA.data`, `ECA.i18n`, `ECA.store`, `ECA.quiz` — ровно по сигнатурам выше. `store.recordScore` возвращает `true`, если это новый лучший результат. `quiz.fromVocab` чередует направления es→язык и язык→es и кладёт в `explain` строку «es — перевод».
- **Экран:** `ECA.views.register(name, render(container, ctx))`, имена `'words'` (обслуживает и `#/<lvl>/words/<id>/quiz`, там `ctx.route.tab === 'quiz'`) и `'grammar'`. `ctx = { route: {name, level, topicId, tab}, levelId: 'A1', level, topic, state: {}, rerender: bool }`. `ctx.state` живёт, пока не сменился адрес (например, при перерисовке из-за смены языка) — храни там вкладку, колоду, позицию. Приложение само очищает контейнер, проверяет, что тема есть и её уровень совпадает (иначе «Такой темы нет»), ставит `<title>`, после перехода прокручивает вверх и фокусирует первый `h1`. Без зарегистрированного экрана показывается «скоро».
- **`ECA.ui`** (используй, не пиши своё): `el(tag, {class, text, on, dataset, …любые другие ключи ставятся как атрибуты через setAttribute}, children)`, `append`, `es(text, tag?)` (ставит `lang="es"`), `richText(str) -> string`, `setRich(node, str)`, `clear`, `icon('telegram'|'sun'|'moon'|'check')`, `telegramLink(extraClass?)`, `emptyState({title, text, telegram})`, `href(levelId, ...parts)`, `backLink(levelId, 'words'|'grammar')`, `screenHead({back, title, titleLang, lead})`, `badge(text, 'score'|'done'?)`, `isPassed(best)` (≥ 80%), `isTopicDone(kind, topic)` (слова: все выучены И тест ≥ 80%; грамматика: тест ≥ 80%), `doneBadge(kind, topic)` → бейдж «✓ пройдено» или `null`, `quizBadges(quizKey)` (только «тест: x/y»), `tabs({label, items: [{id, label}], active, onSelect, panelId})`, `announce(text)` (пишет в `#live`, aria-live), `TELEGRAM_URL`, `PASS_RATIO` (= 0.8). Все кнопки (`.btn` и варианты, `.chip`, `.tab`, `.segmented__btn`) — min 44×44 (`--tap`); свои кнопки не уменьшать.
- Ключи i18n уже есть: `section.words/grammar`, `badge.*`, `back.to`, `empty.*`, `soon.*`, `tg.*`. Свои — через `ECA.i18n.add`.
- **CSS-компоненты** (`css/base.css`): `.btn` (`--primary --ok --ghost --small`), `.btn-row`, `.linkish`, `.chip[aria-pressed]`, `.tabs/.tab[aria-selected]`, `.badge` (`--score --done`), `.topic-card`, `.topic-row`, `.panel`, `.prose`, `.table-wrap > .table`, `.example` (`__es`, `__tr`), `.options > .option` (`.is-correct` / `.is-wrong` — добавляют ✓/✗), `.feedback` (`--ok/--bad`), `.empty`, `.screen-head/.screen-title/.screen-lead`, `.backlink`, `.meter/.meter__fill`, `.visually-hidden`, `.es`.
- **Токены:** `--bg --surface --surface-2 --ink --ink-soft --line --line-strong --accent --accent-ink --accent-soft --sun --sun-soft --sun-ink --ok --ok-soft --bad --bad-soft --focus --tg`; шрифты `--font-display` (Unbounded), `--font-body` (Onest); `--step--1…--step-4`, `--space-1…--space-7`, `--radius-s/m/l/pill`, `--shadow-lift`, `--tap` (44px). Своих цветов не заводить — только эти токены.
- **Тесты:** `node --test tests/` идёт через `tests/index.js`, который подключает все `tests/*.test.js` (Node 22 не раскрывает каталог). Новый файл `tests/<name>.test.js` подхватывается сам. Проверка в браузере: `npx -y -p playwright@1.63.0 node tools/e2e.js`, скриншоты — `tools/screenshot.js`.
- Образцовые данные: тема слов `a1-greetings` (16 слов) в `data/vocab-a1.js`, тема грамматики `a1-presente-ar` (9 вопросов) в `data/grammar-a1.js`.

## Из таска 02 — экран темы слов

- `ECA.views.register('words', render)`; вкладки `tab-cards` / `tab-quiz` / `tab-list`; строки i18n с префиксом `vocab.*`.
- `ECA.vocabDeck`: `create(words, {isLearned(es), all, rng}) -> {queue, total}`, `know(d)`, `again(d)`, `current(d) -> es|null`, `remaining(d)`, `isDone(d)`, `order(d)`.
- `ECA.vocabQuiz` (ход теста без DOM — годится и для грамматики, не пиши второй): `start() -> {index, picks[]}`, `pick(s, qs, i)` (повторный выбор игнорируется), `next(s)`, `answered(s)`, `finished(s, qs)`, `result(s, qs) -> {score, total, mistakes: idx[]}`.
- `.tabs` из base.css на 320px обрезает третью вкладку — в vocab.css поправлено только для `.vocab .tab`.

## Из таска 03 — экран грамматики и перенос

- `ECA.views.register('grammar', render)`; строки i18n `grammar.*`. Тест начинается кнопкой «Начать тест»; ход теста — через `ECA.vocabQuiz` (grammar.js зависит от загрузки vocab.js раньше — так в index.html).
- `ECA.grammarQuiz`: `create(seed) -> {seed, session, recorded, newBest}`, `finish(quiz, questions, store, key)` (пишет результат один раз и только по завершении), `keyAction(key, {answered, options}) -> {pick:i}|{next:true}|null`, `seeded(seed) -> rng` (третья копия seeded rng — в concerns).
- Темы: `a2-perfecto-indefinido`, `a2-imperfecto`, `b1-imperativo-pronombres`, `b1-subjuntivo-presente`. Ячейки таблиц — только строки (без RU/EN), поэтому сравнительные таблицы старых страниц стали абзацами.
