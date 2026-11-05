# Раздел «Права в Испании (DGT, permiso B)»: план и прогресс

Этот файл нужен, чтобы продолжить работу в новой сессии (например, после сброса лимита).
Скажите «продолжи раздел DGT по docs/dgt/PLAN.md»: новая сессия прочитает этот файл и
продолжит с первой неотмеченной задачи. Ветка: `ccr-3c497d48-v3vd5n`.

## Решения пользователя (05.11.2026)
- Всё делаем в нашей ветке и в шаблоне сайта: те же механики, что у слов и грамматики.
- Знаки распределяем по темам. Отдельный большой блок «Señales»: все знаки из каталога BOE,
  карточки и тест на готовой механике слов.
- По каждой теме — вопросы с объяснениями на RU и EN, испанский оригинал рядом.
- Недостающие темы добавляем. Тесты по темам собираем по материалам, которые есть.
- Пушим в ветку регулярно, задачи раздаём субагентам.
- Чужие базы (testruta, autoviatest, vialtest, фото и инфографика Revista DGT) — «только для себя».
  На публичный сайт их **не копируем** (testruta запрещает массовое копирование базы вопросов,
  autoviatest — копирование и ботов, Revista DGT — картинки без письменного разрешения).
  Вопросы на сайте пишем сами по официальным текстам (BOE, учебники DGT): факты и правила
  не охраняются, формулировки и картинки — свои.

## Источники (на Google Drive, папка « Español drive», подпапка «Nuevos Libros»)
- `BOE-A-2025-12199.pdf` — каталог знаков (RD 465/2025): официальный, без авторского права (ст. 13 LPI).
- `Manual-I-Normas-y-Senales-2025.pdf` — пособие DGT «Normas y señales», главный источник по правилам.
- `TeoricaAbreviada_LecturaFacil_2025-06_Interactivo.pdf`, `manual-lectura-facil.pdf`, `manual-permiso-b.pdf`,
  `221_Teorica_Comun_B.pdf` — учебники на категорию B.
- `Resumen-dgt-permiso-b-en-222-frases.pdf` — конспект в 222 фразах, удобный чек-лист фактов.
- `BOE-A-2003-23514` (RGC), `BOE-A-2015-11722` (закон о движении), `CRITERIOS-PISTA.pdf`, `NOTA-DE-PRENSA.pdf`.
- Revista DGT (`*.webarchive`, `N279-pdf-online-.pdf`, `N-240-SUP-ESP-TEST-WOP.pdf`): тексты можно цитировать
  со ссылкой на журнал, картинки — нельзя.

## Архитектура (как встроено в сайт)
- Новый «уровень» `DGT` (маршрут `#/dgt`): плитка рядом с A1–C2, файл `data/dgt-level.js`.
- Теория — темы грамматики уровня DGT (`data/dgt-theory-*.js`, `addGrammar('DGT', …)`):
  вкладки с блоками + тест последней вкладкой. Для DGT валидатор не требует 20 примеров,
  в `quiz` от 10 вопросов, за один заход тест берёт случайные 20.
- Вопрос DGT: `{ es, prompt:{ru,en}, options:[{es,ru,en}], answer, explain:{ru,en}, sign?, img? }`.
- Новые блоки: `signs` (сетка знаков по кодам из каталога) и `figure` (своя SVG-иллюстрация из `img/dgt/`).
- Знаки — темы слов уровня DGT (`data/dgt-signs.js`, `addVocab('DGT', …)`): слово `{ es, ru, en, sign, ex }`,
  картинка `img/signs/<код>.png`. Тест по знакам показывает картинку и спрашивает значение.
- Картинки знаков: `python3 -I tools/extract-signs.py BOE-A-2025-12199.pdf <out>` → `signs.json` + PNG.

## Задачи
- [x] Источник картинок знаков: каталог BOE, 457 знаков (стр. 35–149), `tools/extract-signs.py`
- [x] Каркас: уровень DGT, маршрут, валидатор, блоки `signs`/`figure`, вопросы с картинкой и переводом (commit 166e841)
- [x] Знаки: `img/signs/*.png` + `data/dgt-signs-{a,b,c}.js` — 10 тем, 457 знаков, RU/EN, описание из BOE
- [ ] Темы теории — по 17 темам официального учебника DGT «lectura fácil», ТЗ: `docs/dgt/THEORY-SPEC.md`.
  Файл `data/dgt-theory-NN-<slug>.js`, картинки `img/dgt/<slug>-*.svg`. После готовности — подключить в `index.html`.
  Справочные тексты (пересоздать, если контейнер новый): учебник lectura fácil (ZIP с sede DGT) → `pdftotext -layout`,
  разрезать по «Tema N.»; Manual I 2025 (sede DGT); RGC/LSV/RGCond (BOE consolidado) → `pdftotext -layout`.
  - [ ] 01 definiciones · [ ] 02 documentacion · [ ] 03 conductor · [ ] 04 obligaciones · [ ] 05 seguridad
  - [ ] 06 elementos · [ ] 07 luces · [ ] 08 senales · [ ] 09 via · [ ] 10 velocidad · [ ] 11 maniobras
  - [ ] 12 preferencia · [ ] 13 transporte · [ ] 14 conducir-seguro · [ ] 15 mecanica · [ ] 16 accidentes · [ ] 17 eficiente
- [ ] Пробный экзамен: 30 вопросов из всех тем, не больше 3 ошибок
- [ ] Папка `private/` (в .gitignore) для материалов только для себя: сайт подхватывает `private/dgt-private.js`, если файл есть
- [ ] e2e-сценарии и скриншоты, обновить CLAUDE.md и CONTENT.md
- [ ] Только для себя: тесты Revista DGT → Google Drive (не в репозиторий)
