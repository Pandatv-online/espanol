# Интерфейсы — прогон classic-style-grammar

Правила проекта и модули — в CLAUDE.md (раздел autopilot) и ниже. Прошлый прогон: 2026-09-24-spanish-learning-site/interfaces.md — читать только при необходимости.

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

## Границы, решённые в спецификации этого прогона


| Модуль | Владеет | Выставляет | Прячет |
|---|---|---|---|
| `data` | реестр тем | без изменений | — |
| `grammar view` (`js/views/grammar.js`, `css/grammar.css`) | отрисовку темы по новой схеме | `ECA.views.register('grammar')`; `ECA.grammarBlocks.render(block, lang) -> Node` (для тестов); маршрут `#/<lvl>/grammar/<id>/<tab>` | разметку блоков, мини-вкладки |
| `validate` (`tools/validate-content.js`) | проверку схемы | валидирует `tabs/blocks` всех типов, id вкладок уникальны, ≥ 4 вкладок, ≥ 20 примеров, ячейки ≤ 30 символов, у `conj` ≥ 2 варианта, разрешённые теги | правила |
| `base.css` | токены светлой/тёмной темы старой палитры и базовые компоненты | CSS-переменные, классы компонентов | — |

Швы для тестов: `validate` (node --test), `grammarBlocks.render` (node --test с минимальным DOM или проверка в e2e), e2e по реальной странице.


### Схема темы грамматики (новая)

```js
{ id: 'a2-perfecto-indefinido', level: 'A2',
  title: { ru, en },                 // «Perfecto vs Indefinido»
  hero: { es: 'Pretérito Perfecto vs Indefinido', sub: { ru, en } },
  tabs: [
    { id: 'diff', label: { ru: 'Разница', en: 'Difference' },
      blocks: [
        { type: 'text',     body: { ru: ['…'], en: ['…'] } },                           // <b><i><em><strong><br>
        { type: 'rules',    items: [ { color: 'blue'|'amber'|'teal'|'coral'|'purple',
                                        title: { ru, en }, body: { ru, en }, es?: '…' } ] },
        { type: 'triggers', items: [ { num: 'W', title: { ru, en }, sub: { ru, en },
                                        phrases: ['quiero que', 'espero que'] } ] },
        { type: 'conj',     verbs: [ { inf: 'hablar', tr: { ru, en },
                                        variants: [ { label: 'Perfecto', color: 'blue',
                                                      rows: [['yo', 'he hablado'], …] },
                                                    { label: 'Indefinido', color: 'amber', rows: [...] } ] } ] },
        { type: 'table',    head: [...], rows: [[...]] },                               // ячейки ≤ 30 символов
        { type: 'markers',  groups: [ { color, title: { ru, en }, tags: ['hoy', 'esta semana'] } ] },
        { type: 'examples', items: [ { es: 'Hoy <b>he comido</b> paella.', ru, en } ] }, // <b> выделяет форму
        { type: 'tip',      title: { ru, en }, body: { ru, en } }                        // шпаргалка / мнемоника
      ] } ],
  quiz: [ …как сейчас… ] }
```


- Движок теста: `ECA.quiz.seeded / session / attempt / finish / keyAction` (js/quiz.js), фильтр клавиш `ECA.ui.shortcutsApply` — использовать, не дублировать.
- Ключи прогресса `grammar:<id>` и id тем не меняются.

## Что построили таски

## Из таска 11 — стиль старых страниц

- Токены (base.css): `--bg --surface --surface-2 --ink --ink-soft --heading --em --link --line --line-strong --accent --accent-ink --accent-soft --accent-stripe --accent-hi --sun* --ok* --bad* --focus --tg`; hero: `--hero-bg --hero-ink --hero-soft --hero-faint --hero-accent --hero-focus`; палитра `{blue,amber,teal,coral,purple}` × `{"", -soft, -ink, -on}`; шрифты `--font-display` (Playfair Display), `--font-body` (Noto Sans).
- Цветовые классы `.c-blue/.c-amber/.c-teal/.c-coral/.c-purple` задают `--c --c-soft --c-ink --c-on` (стоят в конце base.css, перекрывают умолчания компонентов).
- Hero темы: `.hero > .hero__title` (`<b>` или `.hero__accent` — янтарь), `.hero__sub`, `.hero__meta`; идущая следом `.tabs` стыкуется с hero.
- Полоса вкладок: `ui.tabs(opts)` рисует `.tab > .tab__num + .tab__label` (`numbered:false` — без номеров); при 4+ вкладках уже 560px подпись только у активной.
- Мини-вкладки: `.mini-tabs > .mini-tab.c-*`, активная — `[aria-selected="true"]` или `[aria-pressed="true"]`.
- Правила: `.rule-grid > .rule-card.c-*` (`__label __title __es __body`), `.c-blue` — заливка navy; заметки `.rule-box.c-*`.
- Триггеры: `.trigger-list > .trigger-card` (`__head __num __title __sub __body __ex`); `.phrase-list > .phrase(.c-*)`.
- Маркеры: `.kw-grid > .kw-box.c-* > .kw-box__title + .kw-tags > .kw-tag`.
- Примеры: `ul.ex-box > li.ex-row(.c-*) > .ex-row__es` (`<b>` — форма) + `.ex-row__tr`; `.ex-row--badged + .ex-row__badge.c-*`.
- Спряжение: `.conj-grid > .conj-card.c-* > .conj-card__head (__verb, __tr) + .mini-tabs + .conj-forms(.c-*) > .form-row > __pron + __word`.
- Шпаргалка: `.tip > .tip__title + .tip__body`. Также `.section-intro`, `.group-title(.c-*)`, `.table` (navy-шапка), `.example__es b`.
- Строка темы грамматики на странице уровня показывает подзаголовок, если у темы есть `summary` или `hero.sub`.

## Из таска 12 — грамматика вкладками

- Маршрут `#/<lvl>/grammar/<id>/<tab>`; `parseRoute` → `{name:'grammar', level, topicId, tab|null}`; id вкладки `test` зарезервирован; неизвестная вкладка → первая (адрес чистится replaceState); переключение вкладок — replaceState, без записи в историю. Состояние экрана грамматики хранится по уровню+теме (тест не сбрасывается при смене вкладки/языка).
- `ECA.grammarBlocks.render(block, lang) -> Node`, `ECA.grammarBlocks.types`. Ключи i18n `grammar.tabTest`, `grammar.tabsLabel`, `grammar.notPassedTabs`.
- **Полный контракт данных темы — раздел «Тема грамматики» в `CONTENT.md`.** Отличия от спеки: `heading {ru,en}` у любого блока; `text.color`; `rules.items[].label`; `triggers.items[].color/body/ex`; `examples.items[].color/badge` (1–3 символа); `conj` variant `label` — строка или `{ru,en}` (≤ 16); ячейка `table` — испанская строка или `{ru,en}` (≤ 30); любой `body` — `{ru,en}`, каждая сторона строка или массив абзацев.
- Валидатор: формат по `Array.isArray(topic.tabs)` (иначе старый `sections`, оба сразу — ошибка); `hero {es, sub}` обязателен; 4–6 вкладок, id `[a-z0-9-]`, уникальны, не `test`, подпись ≤ 12; ≥ 20 примеров, в каждом `<b>` в es; conj ≥ 2 вариантов; цвета из 5; только разрешённые теги.
