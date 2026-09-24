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
