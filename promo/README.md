# Промо-ролик сайта

29 секунд, 1080×1920 (9:16), 24 fps, H.264 + AAC (−16 LUFS), в конце — ссылка на espanolconamigos.com. Сделан скиллом
[hand-drawn-canvas-animation](https://github.com/alesha-pro/tools/tree/main/skills/hand-drawn-canvas-animation):
рисованные позы на Canvas 2D, рендер через headless Chrome и ffmpeg.

- `out/espanol-promo.mp4` — готовый ролик.
- `out/espanol-promo-contact.jpg` — раскадровка, по 2 кадра в секунду.
- `espanol-promo.html` — исходник: бриф, раскадровка, позы амиго, сцены, музыка. Открывается в браузере, есть плеер.

## Раскадровка

| Время | Сцена | Что происходит |
|-------|-------|----------------|
| 0–4.5 с | «Хочешь заговорить по-испански?» | амиго моргает, задумывается («¿...?»), подпрыгивает |
| 4.5–10 с | «Слова — на карточках» | el sol / la casa / el café переворачиваются в солнце / дом / кофе |
| 10–15.5 с | «Грамматика — по полочкам» | спряжение hablar, окончания выделены цветом |
| 15.5–21.5 с | «Тесты и уровни от A1 до C2» | амиго прыгает по ступенькам A1→C2, «¡Bravo!» |
| 21.5–25 с | «Учим испанский вместе» | три амиго: ¡Hola! ¿Qué tal? ¡Vamos! |
| 25–29 с | «Español con amigos» | «Заходи на сайт!», espanolconamigos.com, бумажный самолётик |

Цвета (navy, amber, coral, teal…), бумажный фон и полоса со штриховкой взяты из `css/base.css`.
Музыка собрана в коде (андалузская каденция Am–G–F–E) и звучит в такт событиям на экране.

## Пересобрать

Нужны Node ≥ 22.12, Chrome/Chromium и ffmpeg.

```bash
cd promo
npm i --no-audit --no-fund
node render.mjs espanol-promo.html --grid 24 --width 540   # быстрая раскадровка → out/espanol-promo-grid.jpg
node render.mjs espanol-promo.html                         # полный рендер → out/espanol-promo-final.mp4
ffmpeg -i out/espanol-promo-final.mp4 -c:v copy -af loudnorm=I=-16:TP=-1.5:LRA=11 \
  -c:a aac -b:a 192k -ar 48000 -shortest -movflags +faststart out/espanol-promo.mp4
```

Если Chrome не находится сам, укажите путь: `CHROME=/путь/к/chrome node render.mjs …`.
`render.mjs` взят из скилла, с одной правкой: под root Chrome запускается с `--no-sandbox`.
`core.js`, `studio.js`, `cels.js` — модули скилла без изменений. `fonts.css` — встроенные шрифты Caveat,
Playfair Display и Noto Sans (Google Fonts, OFL), чтобы рендер не зависел от системных шрифтов.

Папка не входит в сборку сайта: `scripts/build-site.sh` копирует в `dist/` только файлы сайта.
