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
- [x] Найти источник картинок знаков: каталог BOE, 457 знаков (страницы 35–149), `tools/extract-signs.py`
- [ ] Каркас: уровень DGT, маршрут, валидатор, блоки `signs`/`figure`, вопросы с картинкой и переводом
- [ ] Знаки: `img/signs/*.png` + `data/dgt-signs.js` (группы каталога, перевод RU/EN, описание из BOE как пример)
- [ ] Темы теории (по 25–40 вопросов в каждой):
  - [ ] 1 Vía pública, usuarios, vehículos (определения)
  - [ ] 2 Señales: jerarquía, agentes, semáforos, marcas viales
  - [ ] 3 Velocidad (límites, adecuación)
  - [ ] 4 Posición en la vía, carriles, sentido
  - [ ] 5 Prioridad de paso (intersecciones, glorietas, estrechamientos)
  - [ ] 6 Adelantamientos
  - [ ] 7 Maniobras: incorporación, cambio de dirección, marcha atrás
  - [ ] 8 Parada y estacionamiento
  - [ ] 9 Alumbrado y señalización óptica; advertencias
  - [ ] 10 Autopistas, autovías, túneles, pasos a nivel
  - [ ] 11 Documentación, permiso por puntos, sanciones
  - [ ] 12 Alcohol, drogas, fatiga, distracciones, medicamentos
  - [ ] 13 Seguridad pasiva: cinturón, SRI, casco
  - [ ] 14 Vehículo: mantenimiento, neumáticos, carga, remolque
  - [ ] 15 Conducción eficiente y medio ambiente
  - [ ] 16 Accidentes y primeros auxilios (PAS)
  - [ ] 17 Usuarios vulnerables: peatones, ciclistas, VMP
- [ ] Иллюстрации SVG к темам (`img/dgt/`): перекрёстки, круговое движение, разметка, дистанция
- [ ] Пробный экзамен: 30 вопросов из всех тем, не больше 3 ошибок
- [ ] e2e-сценарии и скриншоты, обновить CLAUDE.md и CONTENT.md
- [ ] Только для себя: тесты Revista DGT → Google Drive (не в репозиторий)
