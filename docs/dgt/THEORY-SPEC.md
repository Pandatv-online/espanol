# ТЗ для тем теории DGT (permiso B)

Одна тема = один файл `data/dgt-theory-NN-<slug>.js`:

```js
// DGT · theory, topic NN: <short English name>. Sources: DGT «Teórica abreviada, lectura fácil» (2025),
// DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-velocidad', level: 'DGT',
    title: { ru: 'Скорость и дистанция', en: 'Speed and distance' },
    summary: { ru: 'Одна строка: о чём тема.', en: 'One line: what the topic covers.' },
    hero: { es: 'Velocidad y distancias', sub: { ru: 'Одна строка под заголовком', en: 'One line under the title' } },
    tabs: [ /* 3–6 вкладок */ ],
    quizCount: 20,
    quiz: [ /* 30–40 вопросов */ ]
  }
]);
```

## Содержание
- Темы и порядок — как в официальном учебнике DGT «lectura fácil» (17 тем). Источник по теме дан в задаче.
- Пишите для человека, который учит испанский и сдаёт теорию: объяснение на RU/EN, испанские
  термины — рядом (`rules[].es`, `examples`, `table`). Цифры (скорости, сроки, промилле, баллы, штрафы)
  — точно по действующим нормам, сверяйте с RGC/LSV/RGCond, которые даны текстом.
- Учитывайте изменения 2021–2025: 30 км/ч на улицах с одной полосой в каждую сторону; запрет обгона
  +20 км/ч на дорогах; V-16 вместо треугольников с 01.01.2026; новые знаки RD 465/2025; ВМП (patinetes).
  Если не уверены в цифре — найдите её в тексте закона или не пишите её.
- Вкладки 3–6 (`id` латиницей, подпись ≤ 12 символов в ru и en). Последняя вкладка «Тест» добавляется сама.
- Блоки (подробно — `CONTENT.md`, раздел «Тема грамматики», и эталон `a2-perfecto-indefinido` в `data/grammar-a2.js`):
  `text`, `rules`, `triggers`, `table`, `markers`, `examples`, `tip`, плюс два блока DGT:
  - `{ type: 'signs', heading?, items: ['R-301', { code: 'R-305', note: { ru, en } }] }` — сетка знаков из каталога
    (коды — из `docs/dgt/signs-boe.json`, картинки уже в `img/signs/`). Используйте там, где тема касается знаков.
  - `{ type: 'figure', heading?, src: 'img/dgt/<slug>-<name>.svg', alt: { ru, en }, caption?: { ru, en } }` — своя схема.
- Примеры `examples` — испанская фраза с выделенным `<b>…</b>` термином + ru/en. 20 примеров не обязательно, но 4–10 на тему
  полезны (это сайт про испанский).
- Ячейки таблиц ≤ 30 символов; в испанских полях нет кириллицы; теги только `<b> <i> <em> <strong> <br>`.
- Цвета только `blue amber teal coral purple`.

## Иллюстрации (`img/dgt/*.svg`)
- 1–3 своих SVG на тему, где схема реально помогает (перекрёсток, кольцо, разметка, дистанция, позиция на дороге,
  схема ПАС, шины…). Рисуйте сами, без чужих картинок и без внешних ссылок/шрифтов (`font-family="sans-serif"`).
- `viewBox`, ширина 600–800, светлый фон рисует CSS (белая плашка), поэтому сам рисунок — на прозрачном/белом фоне.
  Асфальт `#5b6470`, разметка `#ffffff`, машины — простые прямоугольники со скруглением разных цветов, стрелки движения.
  Подписи крупные (≥ 16 px в координатах viewBox), испанскими терминами.
- Имя файла `img/dgt/<id темы без dgt->-<что>.svg`.

## Тест (`quiz`)
- 30–40 вопросов, `quizCount: 20` (за один заход — 20 случайных). Стиль — как на экзамене DGT: 3 варианта, один верный.
- Формулировки — свои (не копируйте чужие базы вопросов). Факты — из официальных текстов.
- Вопрос:
```js
{ es: '¿A qué velocidad máxima puede circular un turismo por una autovía?',
  prompt: { ru: 'С какой максимальной скоростью легковой автомобиль может ехать по автомагистрали (autovía)?',
            en: 'What is the maximum speed for a car on an autovía (dual carriageway)?' },
  options: [
    { es: '120 km/h.', ru: '120 км/ч.', en: '120 km/h.' },
    { es: '100 km/h.', ru: '100 км/ч.', en: '100 km/h.' },
    { es: '130 km/h.', ru: '130 км/ч.', en: '130 km/h.' }
  ],
  answer: 0,
  explain: { ru: 'Почему так, со ссылкой: RGC, ст. 48.', en: 'Why, with a reference: RGC art. 48.' },
  sign: 'R-301' }            // необязательно: вопрос по знаку (картинка из img/signs/)
  // img: 'img/dgt/velocidad-x.svg' — необязательно: вопрос по своей схеме
```
- `es` уникален в теме, без кириллицы; варианты не повторяются; `answer` — индекс верного варианта.
  Верный ответ ставьте на разные позиции (варианты всё равно перемешиваются, но так проще проверять).
- Объяснение — 1–3 предложения: почему верно, чем ловушка в неверных, ссылка на статью.
- 5–10 вопросов на тему — по знакам (`sign`), если тема касается знаков.

## Проверка перед сдачей
```
node -e "global.window=global;global.ECA={};require('./js/data.js');require('./data/<файл>.js');console.log(ECA.data.grammar('DGT').map(t=>t.id+' quiz:'+t.quiz.length))"
node -e "const {validate}=require('./tools/validate-content.js');global.window=global;global.ECA={};require('./js/data.js');require('./data/dgt-level.js');require('./data/dgt-signs-a.js');require('./data/dgt-signs-b.js');require('./data/dgt-signs-c.js');require('./data/<файл>.js');const fs=require('fs');console.log(validate(ECA,{fileExists:p=>fs.existsSync(p)}).join('\n')||'OK')"
```
Вторая команда должна напечатать `OK`. `index.html` не трогайте — файл подключит координатор. Не коммитьте.
SVG проверьте глазами: `npx -y -p playwright@1.63.0 node -e` со скриншотом или откройте через Read как картинку
(сначала сконвертируйте: `node` + Playwright `page.setContent('<img src=data:...>')` → png), если есть время.
