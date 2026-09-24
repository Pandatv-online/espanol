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
