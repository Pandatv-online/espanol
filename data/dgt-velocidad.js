// Driving theory (DGT): speed limits and distances. RGC arts. 45–54; DGT «Manual básico», Tema 10.
ECA.data.addDgt([
  {
    id: 'velocidad',
    cats: ['A', 'B'],
    title: { ru: 'Скорость и дистанция', en: 'Speed and distance' },
    summary: {
      ru: 'Ограничения в городе и за городом, минимальная скорость, тормозной путь и безопасная дистанция.',
      en: 'Limits in town and out of town, minimum speed, stopping distance and safe following distance.'
    },
    hero: {
      es: '<b>Velocidad</b> y distancias',
      sub: { ru: 'Сколько можно, сколько нужно и сколько оставлять до впереди идущего', en: 'How fast you may go, how fast you must, and how far to keep back' }
    },
    tabs: [
      {
        id: 'limites',
        label: { ru: 'Лимиты', en: 'Limits' },
        blocks: [
          {
            type: 'table', heading: { ru: 'За городом: легковые и мотоциклы', en: 'Out of town: cars and motorbikes' },
            head: [{ ru: 'Дорога', en: 'Road' }, { ru: 'Максимум', en: 'Maximum' }, { ru: 'Минимум', en: 'Minimum' }],
            rows: [
              ['autopista / autovía', '120 km/h', '60 km/h'],
              ['carretera convencional', '90 km/h', '45 km/h'],
              ['autopista en poblado', '80 km/h', '60 km/h']
            ]
          },
          {
            type: 'table', heading: { ru: 'За городом: другие машины', en: 'Out of town: other vehicles' },
            head: [{ ru: 'Транспорт', en: 'Vehicle' }, 'autopista', 'convencional'],
            rows: [
              [{ ru: 'Автобусы', en: 'Buses' }, '100', '90'],
              [{ ru: 'Грузовики, фургоны, с прицепом', en: 'Lorries, vans, with trailer' }, '90', '80'],
              [{ ru: 'Мопеды', en: 'Mopeds' }, { ru: 'нельзя', en: 'not allowed' }, '45']
            ]
          },
          {
            type: 'table', heading: { ru: 'В городе', en: 'In town' },
            head: [{ ru: 'Улица', en: 'Street' }, { ru: 'Максимум', en: 'Maximum' }],
            rows: [
              [{ ru: '2+ полосы в одну сторону', en: '2+ lanes each way' }, '50 km/h'],
              [{ ru: '1 полоса в одну сторону', en: '1 lane each way' }, '30 km/h'],
              [{ ru: 'Тротуар и дорога на одном уровне', en: 'Road and pavement at one level' }, '20 km/h'],
              [{ ru: 'Опасные грузы', en: 'Dangerous goods' }, '40 km/h']
            ]
          },
          {
            type: 'text',
            body: {
              ru: ['<b>Минимальная скорость</b>: на автописте и автовии — 60 км/ч; на остальных дорогах — <b>половина</b> общего лимита для вашей машины (90 → 45). Медленнее можно только из-за пробки, поломки, плохой дороги; если из-за поломки опасно — включите аварийку.', 'Для <b>школьных автобусов</b> и <b>опасных грузов</b> лимит на 10 км/ч ниже. Превышать лимит при обгоне <b>нельзя</b>.'],
              en: ['<b>Minimum speed</b>: on autopista and autovía — 60 km/h; on other roads — <b>half</b> the general limit for your vehicle (90 → 45). Slower only because of traffic, a breakdown or a poor road; if it’s dangerous, switch on the hazard lights.', '<b>School transport</b> and <b>dangerous goods</b> have limits 10 km/h lower. You may <b>not</b> exceed the limit when overtaking.']
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: ['<b>120 – 90 – 50/30/20</b>: магистраль, обычная дорога, город. В городе считайте полосы: две и больше — 50, одна — 30, без бордюра — 20.', '<b>Минимум — половина</b> максимума, кроме магистрали (там всегда 60).'],
              en: ['<b>120 – 90 – 50/30/20</b>: motorway, ordinary road, town. In town count lanes: two or more — 50, one — 30, no kerb — 20.', '<b>The minimum is half</b> the maximum, except on motorways (always 60).']
            }
          }
        ]
      },
      {
        id: 'adecuada',
        label: { ru: 'По условиям', en: 'Conditions' },
        blocks: [
          {
            type: 'text',
            body: {
              ru: ['Лимит — это потолок, а не цель. <b>Адекватная скорость</b> зависит от вас (усталость), машины (груз), дороги, движения и погоды. Ехать 70 по льду при лимите 90 — <b>неадекватная</b> скорость.', 'Чем быстрее, тем уже поле зрения («туннельное зрение»): стоя — около 180°, на 130 км/ч — около 30°.'],
              en: ['The limit is a ceiling, not a target. <b>Appropriate speed</b> depends on you (fatigue), the vehicle (load), road, traffic and weather. Doing 70 on ice with a 90 limit is <b>inappropriate</b> speed.', 'The faster you go, the narrower your field of view (“tunnel vision”): about 180° standing still, about 30° at 130 km/h.']
            }
          },
          {
            type: 'rules', heading: { ru: 'Сбавьте скорость, а то и остановитесь', en: 'Slow down, or even stop' },
            items: [
              { color: 'coral', title: { ru: 'Люди и дети', en: 'People and children' }, es: 'peatones, <b>niños</b>, escuelas, mercados', body: { ru: 'Пешеходы на дороге, переходы без светофора, школы, рынки; автобус на остановке, особенно школьный.', en: 'Pedestrians on the road, crossings without lights, schools, markets; a bus at its stop, especially a school bus.' } },
              { color: 'teal', title: { ru: 'Велосипедисты и животные', en: 'Cyclists and animals' }, es: 'ciclistas, <b>animales</b>', body: { ru: 'Рядом велодорожки, на дороге или обочине велосипедисты, животные.', en: 'Near cycle lanes, cyclists on the road or shoulder, animals.' } },
              { color: 'amber', title: { ru: 'Не ваш приоритет', en: 'No priority for you' }, es: 'pasos a nivel, glorietas, cruces <b>sin prioridad</b>', body: { ru: 'Подъезжая к переезду, кольцу или перекрёстку, где вы уступаете, — не быстрее 50 км/ч.', en: 'Approaching a level crossing, roundabout or junction where you give way — 50 km/h at most.' } },
              { color: 'blue', title: { ru: 'Плохо видно и скользко', en: 'Poor view, slippery' }, es: 'niebla, lluvia, <b>deslumbramiento</b>, gravilla', body: { ru: 'Туман, дождь, снег, дым, вас ослепили фары, на дороге вода или гравий, узкое место, разъезд с грузовиком.', en: 'Fog, rain, snow, smoke, dazzled by headlights, water or gravel on the road, a narrow spot, meeting a lorry.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>Лимит — для идеальной погоды.</b> Всё, что хуже идеала, — минус скорость.',
              en: '<b>The limit is for perfect conditions.</b> Anything worse — take speed off.'
            }
          }
        ]
      },
      {
        id: 'distancias',
        label: { ru: 'Дистанции', en: 'Distances' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'blue', title: { ru: 'Путь реакции', en: 'Reaction distance' }, es: 'distancia de <b>reacción</b>', body: { ru: 'Сколько вы проезжаете, пока заметили опасность и нажали тормоз. Обычная реакция — около 0,75 секунды; усталость и алкоголь её удлиняют.', en: 'What you cover between seeing the danger and pressing the brake. A normal reaction takes about 0.75 s; fatigue and alcohol lengthen it.' } },
              { color: 'amber', title: { ru: 'Тормозной путь', en: 'Braking distance' }, es: 'distancia de <b>frenado</b>', body: { ru: 'От нажатия на тормоз до остановки. Растёт со скоростью (вдвое быстрее — вчетверо длиннее), грузом, мокрой дорогой, плохими шинами и тормозами.', en: 'From pressing the brake to a standstill. Grows with speed (twice as fast — four times as long), load, wet roads, poor tyres and brakes.' } },
              { color: 'coral', title: { ru: 'Остановочный путь', en: 'Stopping distance' }, es: 'distancia de <b>detención</b> = reacción + frenado', body: { ru: 'Сумма двух предыдущих.', en: 'The two added together.' } },
              { color: 'teal', title: { ru: 'Дистанция безопасности', en: 'Safe following distance' }, es: 'distancia de <b>seguridad</b>', body: { ru: 'Чтобы успеть остановиться, если передний резко затормозит. Больше — при большей скорости, плохой видимости, скользкой дороге, усталости.', en: 'Enough to stop if the vehicle ahead brakes hard. More at higher speed, poor visibility, slippery roads, when tired.' } },
              { color: 'purple', title: { ru: 'Боковой интервал', en: 'Side clearance' }, es: '<b>separación lateral</b>', body: { ru: 'При встречном разъезде и рядом идущих машинах. Больше — на скорости, на плохой дороге, в дождь и ветер.', en: 'When meeting or running alongside vehicles. More at speed, on poor roads, in rain and wind.' } }
            ]
          },
          {
            type: 'text',
            body: {
              ru: 'За городом машины тяжелее 3500 кг и составы длиннее 10 м держат между собой <b>не меньше 50 м</b>, если не обгоняют. Велосипедисты в группе могут ехать без дистанции между собой.',
              en: 'Out of town, vehicles over 3,500 kg and combinations longer than 10 m keep <b>at least 50 m</b> apart unless overtaking. Cyclists in a group may ride without a gap between them.'
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: ['<b>Правило двух секунд</b>: передняя машина проехала столб — скажите «двадцать один, двадцать два». Доехали до столба раньше — слишком близко. В дождь — четыре секунды.', '<b>Скорость ×2 → тормозной путь ×4.</b>'],
              en: ['<b>Two-second rule</b>: when the car ahead passes a post, say “one thousand one, one thousand two”. Reach the post sooner — you’re too close. In rain — four seconds.', '<b>Speed ×2 → braking distance ×4.</b>']
            }
          }
        ]
      },
      {
        id: 'palabras',
        label: { ru: 'Словарь', en: 'Glossary' },
        blocks: [
          {
            type: 'table',
            head: ['Español', { ru: 'Перевод', en: 'Translation' }],
            rows: [
              ['la velocidad máxima', { ru: 'максимальная скорость', en: 'maximum speed' }],
              ['la velocidad mínima', { ru: 'минимальная скорость', en: 'minimum speed' }],
              ['la velocidad genérica', { ru: 'общий лимит (по закону)', en: 'general legal limit' }],
              ['la velocidad adecuada', { ru: 'скорость по условиям', en: 'appropriate speed' }],
              ['el exceso de velocidad', { ru: 'превышение скорости', en: 'speeding' }],
              ['anormalmente reducida', { ru: 'слишком медленно', en: 'abnormally slow' }],
              ['la autopista / la autovía', { ru: 'автомагистраль', en: 'motorway' }],
              ['la carretera convencional', { ru: 'обычная дорога', en: 'ordinary road' }],
              ['en poblado', { ru: 'в населённом пункте', en: 'in a built-up area' }],
              ['la plataforma única', { ru: 'дорога и тротуар в уровень', en: 'shared level surface' }],
              ['la distancia de reacción', { ru: 'путь реакции', en: 'reaction distance' }],
              ['la distancia de frenado', { ru: 'тормозной путь', en: 'braking distance' }],
              ['la distancia de detención', { ru: 'остановочный путь', en: 'stopping distance' }],
              ['la distancia de seguridad', { ru: 'безопасная дистанция', en: 'safe following distance' }],
              ['la separación lateral', { ru: 'боковой интервал', en: 'side clearance' }],
              ['el deslumbramiento', { ru: 'ослепление светом', en: 'dazzle' }],
              ['frenar', { ru: 'тормозить', en: 'to brake' }],
              ['la calzada mojada', { ru: 'мокрая дорога', en: 'wet road' }]
            ]
          }
        ]
      }
    ],
    questions: [
      {
        id: 've-01',
        es: '¿Cuál es la velocidad máxima de un turismo en una autopista, si no hay otra señal?',
        tr: { ru: 'Какая максимальная скорость легкового автомобиля на автописте, если нет других знаков?', en: 'What is the maximum speed of a car on a motorway, with no other signs?' },
        options: [
          { es: '120 km/h.', ru: '120 км/ч.', en: '120 km/h.' },
          { es: '100 km/h.', ru: '100 км/ч.', en: '100 km/h.' },
          { es: '130 km/h.', ru: '130 км/ч.', en: '130 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'На автописте и автовии легковые и мотоциклы — до 120 км/ч.', en: 'On autopistas and autovías cars and motorbikes may do up to 120 km/h.' },
        hint: { ru: '120 – 90 – 50: магистраль, обычная, город.', en: '120 – 90 – 50: motorway, ordinary, town.' },
        ref: 'RGC, art. 48'
      },
      {
        id: 've-02',
        es: '¿Cuál es la velocidad máxima de una motocicleta en una carretera convencional?',
        tr: { ru: 'Какая максимальная скорость мотоцикла на обычной дороге?', en: 'What is the maximum speed of a motorbike on an ordinary road?' },
        options: [
          { es: '90 km/h.', ru: '90 км/ч.', en: '90 km/h.' },
          { es: '100 km/h.', ru: '100 км/ч.', en: '100 km/h.' },
          { es: '80 km/h.', ru: '80 км/ч.', en: '80 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'С 2019 года на обычных дорогах (не автописта и не автовия) легковые и мотоциклы — до 90 км/ч; 100 км/ч больше нет.', en: 'Since 2019 ordinary roads (not autopista/autovía) have a 90 km/h limit for cars and motorbikes; 100 km/h is gone.' },
        hint: { ru: 'Обычная дорога — 90, без «бонусов».', en: 'Ordinary road — 90, no bonuses.' },
        ref: 'RGC, art. 48'
      },
      {
        id: 've-03',
        es: '¿Cuál es la velocidad mínima en una autovía?',
        tr: { ru: 'Какая минимальная скорость на автовии?', en: 'What is the minimum speed on an autovía?' },
        options: [
          { es: '60 km/h.', ru: '60 км/ч.', en: '60 km/h.' },
          { es: '50 km/h.', ru: '50 км/ч.', en: '50 km/h.' },
          { es: '70 km/h.', ru: '70 км/ч.', en: '70 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'На автописте и автовии минимальная скорость — 60 км/ч.', en: 'On autopistas and autovías the minimum is 60 km/h.' },
        hint: { ru: 'Магистраль: меньше 60 — уже помеха.', en: 'Motorway: under 60 is a hazard.' },
        ref: 'RGC, art. 49'
      },
      {
        id: 've-04',
        es: 'En una carretera convencional con límite genérico de 90 km/h para turismos, ¿cuál es la velocidad mínima de un turismo?',
        tr: { ru: 'На обычной дороге с общим лимитом 90 км/ч для легковых какова минимальная скорость легковой?', en: 'On an ordinary road with a general 90 km/h car limit, what is the minimum speed for a car?' },
        options: [
          { es: '45 km/h.', ru: '45 км/ч.', en: '45 km/h.' },
          { es: '60 km/h.', ru: '60 км/ч.', en: '60 km/h.' },
          { es: 'No hay velocidad mínima.', ru: 'Минимума нет.', en: 'There is no minimum.' }
        ],
        answer: 0,
        explain: { ru: 'Вне автомагистралей минимум — половина общего лимита для этого типа машины: 90 / 2 = 45.', en: 'Off motorways the minimum is half the general limit for that vehicle: 90 / 2 = 45.' },
        hint: { ru: 'Минимум — половина максимума.', en: 'The minimum is half the maximum.' },
        ref: 'RGC, art. 49'
      },
      {
        id: 've-05',
        es: '¿Cuál es la velocidad máxima en una calle urbana con un único carril por sentido?',
        tr: { ru: 'Какая максимальная скорость на городской улице с одной полосой в каждую сторону?', en: 'What is the maximum speed on a town street with one lane in each direction?' },
        options: [
          { es: '30 km/h.', ru: '30 км/ч.', en: '30 km/h.' },
          { es: '50 km/h.', ru: '50 км/ч.', en: '50 km/h.' },
          { es: '40 km/h.', ru: '40 км/ч.', en: '40 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'В городе: одна полоса в каждую сторону — 30; две и больше — 50; дорога и тротуар на одном уровне — 20.', en: 'In town: one lane each way — 30; two or more — 50; road and pavement at one level — 20.' },
        hint: { ru: 'В городе считай полосы: одна — 30.', en: 'In town count lanes: one — 30.' },
        ref: 'RGC, art. 50'
      },
      {
        id: 've-06',
        es: '¿Cuál es la velocidad máxima en una calle con dos carriles en cada sentido, sin señales?',
        tr: { ru: 'Какая максимальная скорость на улице с двумя полосами в каждую сторону, без знаков?', en: 'What is the maximum speed on a street with two lanes each way, with no signs?' },
        options: [
          { es: '50 km/h.', ru: '50 км/ч.', en: '50 km/h.' },
          { es: '30 km/h.', ru: '30 км/ч.', en: '30 km/h.' },
          { es: '60 km/h.', ru: '60 км/ч.', en: '60 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'Две и больше полос в одну сторону — 50 км/ч.', en: 'Two or more lanes in one direction — 50 km/h.' },
        hint: { ru: 'Две полосы — 50.', en: 'Two lanes — 50.' },
        ref: 'RGC, art. 50'
      },
      {
        id: 've-07',
        es: 'En una calle de plataforma única, donde la calzada y la acera están al mismo nivel, ¿cuál es la velocidad máxima?',
        tr: { ru: 'На улице, где проезжая часть и тротуар на одном уровне, какая максимальная скорость?', en: 'On a street where road and pavement are at the same level, what is the maximum speed?' },
        options: [
          { es: '20 km/h.', ru: '20 км/ч.', en: '20 km/h.' },
          { es: '30 km/h.', ru: '30 км/ч.', en: '30 km/h.' },
          { es: '10 km/h.', ru: '10 км/ч.', en: '10 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'На «единой платформе» (без бордюра между дорогой и тротуаром) — 20 км/ч.', en: 'On a “single platform” street (no kerb between road and pavement) — 20 km/h.' },
        hint: { ru: 'Нет бордюра — пешеход рядом — 20.', en: 'No kerb — pedestrians right there — 20.' },
        ref: 'RGC, art. 50'
      },
      {
        id: 've-08',
        es: 'Una autovía que atraviesa una ciudad no tiene señal de velocidad. ¿Cuál es el límite?',
        tr: { ru: 'Автовия проходит через город, знака скорости нет. Какой лимит?', en: 'An autovía runs through a town and has no speed sign. What is the limit?' },
        options: [
          { es: '80 km/h.', ru: '80 км/ч.', en: '80 km/h.' },
          { es: '120 km/h.', ru: '120 км/ч.', en: '120 km/h.' },
          { es: '50 km/h.', ru: '50 км/ч.', en: '50 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'Автописта или автовия в пределах населённого пункта — 80 км/ч для всех, если нет других знаков.', en: 'An autopista or autovía inside a built-up area — 80 km/h for everyone unless signed otherwise.' },
        hint: { ru: 'Магистраль в городе — «восьмёрка».', en: 'Motorway in town — eighty.' },
        ref: 'RGC, art. 50'
      },
      {
        id: 've-09',
        es: '¿Cuál es la velocidad máxima de un camión en una autovía?',
        tr: { ru: 'Какая максимальная скорость грузовика на автовии?', en: 'What is the maximum speed of a lorry on an autovía?' },
        options: [
          { es: '90 km/h.', ru: '90 км/ч.', en: '90 km/h.' },
          { es: '100 km/h.', ru: '100 км/ч.', en: '100 km/h.' },
          { es: '80 km/h.', ru: '80 км/ч.', en: '80 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'Грузовики, фургоны и машины с прицепом: 90 на автомагистрали, 80 на обычной дороге.', en: 'Lorries, vans and vehicles with trailers: 90 on motorways, 80 on ordinary roads.' },
        hint: { ru: 'Тяжёлым — минус 30 и минус 10: 90 и 80.', en: 'Heavies: 90 and 80.' },
        ref: 'RGC, art. 48'
      },
      {
        id: 've-10',
        es: 'Un turismo arrastra un remolque ligero por una carretera convencional. ¿Cuál es su velocidad máxima?',
        tr: { ru: 'Легковая с лёгким прицепом едет по обычной дороге. Какой у неё лимит?', en: 'A car towing a light trailer is on an ordinary road. What is its limit?' },
        options: [
          { es: '80 km/h.', ru: '80 км/ч.', en: '80 km/h.' },
          { es: '90 km/h.', ru: '90 км/ч.', en: '90 km/h.' },
          { es: '70 km/h.', ru: '70 км/ч.', en: '70 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'С прицепом — те же лимиты, что у грузовиков: 90 на автомагистрали, 80 на обычной дороге.', en: 'With a trailer the lorry limits apply: 90 on motorways, 80 on ordinary roads.' },
        hint: { ru: 'Прицеп превращает вас в «грузовик» по скорости.', en: 'A trailer turns you into a “lorry” for speed.' },
        ref: 'RGC, art. 48'
      },
      {
        id: 've-11',
        es: 'Un autobús de transporte escolar circula por una carretera convencional. Su velocidad máxima es…',
        tr: { ru: 'Школьный автобус едет по обычной дороге. Его максимальная скорость…', en: 'A school bus is on an ordinary road. Its maximum speed is…' },
        options: [
          { es: '10 km/h menos que la de un autobús normal.', ru: '…на 10 км/ч ниже, чем у обычного автобуса.', en: '…10 km/h lower than an ordinary bus.' },
          { es: 'la misma que la de un autobús normal.', ru: '…такая же, как у обычного автобуса.', en: '…the same as an ordinary bus.' },
          { es: '20 km/h menos que la de un autobús normal.', ru: '…на 20 км/ч ниже, чем у обычного автобуса.', en: '…20 km/h lower than an ordinary bus.' }
        ],
        answer: 0,
        explain: { ru: 'Школьные перевозки и перевозка опасных грузов — лимит на 10 км/ч ниже обычного для этого типа машины (автобус: 90 → 80).', en: 'School transport and dangerous goods have a limit 10 km/h below that vehicle’s normal one (bus: 90 → 80).' },
        hint: { ru: 'Дети и опасный груз — минус десять.', en: 'Children or dangerous goods — minus ten.' },
        ref: 'RGC, art. 48'
      },
      {
        id: 've-12',
        es: 'Para adelantar en una carretera convencional, ¿puede superar la velocidad máxima permitida?',
        tr: { ru: 'Можно ли при обгоне на обычной дороге превысить лимит скорости?', en: 'May you exceed the speed limit to overtake on an ordinary road?' },
        options: [
          { es: 'No, en ningún caso.', ru: 'Нет, ни в каком случае.', en: 'No, never.' },
          { es: 'Sí, en 20 km/h.', ru: 'Да, на 20 км/ч.', en: 'Yes, by 20 km/h.' },
          { es: 'Sí, si el adelantamiento es corto.', ru: 'Да, если обгон короткий.', en: 'Yes, if the overtake is short.' }
        ],
        answer: 0,
        explain: { ru: 'Раньше можно было превысить на 20 км/ч при обгоне. С 2019 года это отменено: лимит действует всегда.', en: 'Formerly you could go 20 km/h over to overtake. Since 2019 that is abolished: the limit always applies.' },
        hint: { ru: 'Бонус +20 отменили — лимит есть лимит.', en: 'The +20 bonus is gone — a limit is a limit.' },
        ref: 'RGC, art. 48'
      },
      {
        id: 've-13',
        es: 'Al aproximarse a una intersección en la que no tiene prioridad, fuera de poblado, ¿a qué velocidad máxima debe circular?',
        tr: { ru: 'С какой максимальной скоростью подъезжать к перекрёстку за городом, где у вас нет приоритета?', en: 'Out of town, approaching a junction where you have no priority, what is your maximum speed?' },
        options: [
          { es: '50 km/h.', ru: '50 км/ч.', en: '50 km/h.' },
          { es: '70 km/h.', ru: '70 км/ч.', en: '70 km/h.' },
          { es: '30 km/h.', ru: '30 км/ч.', en: '30 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'Подъезжая к переезду, кольцу или перекрёстку, где вы не главный, — не быстрее 50 км/ч.', en: 'Approaching a level crossing, roundabout or junction where you lack priority — no faster than 50 km/h.' },
        hint: { ru: 'Не твой приоритет — «городская» скорость 50.', en: 'Not your priority — “town” speed, 50.' },
        ref: 'RGC, art. 46'
      },
      {
        id: 've-14',
        es: 'Su vehículo tiene una avería y no puede alcanzar la velocidad mínima, creando peligro. ¿Qué debe hacer?',
        tr: { ru: 'Из-за поломки ваша машина не может набрать минимальную скорость и создаёт опасность. Что делать?', en: 'A fault stops your vehicle reaching the minimum speed and it creates a hazard. What should you do?' },
        options: [
          { es: 'Encender la señal de emergencia.', ru: 'Включить аварийку.', en: 'Switch on the hazard lights.' },
          { es: 'Circular por el carril izquierdo.', ru: 'Ехать по левой полосе.', en: 'Use the left lane.' },
          { es: 'Encender las luces antiniebla traseras.', ru: 'Включить задний противотуманный фонарь.', en: 'Switch on the rear fog light.' }
        ],
        answer: 0,
        explain: { ru: 'Если машина не может держать минимальную скорость и это опасно, включите аварийную сигнализацию.', en: 'If your vehicle can’t keep the minimum speed and this is dangerous, switch on the hazard warning lights.' },
        hint: { ru: 'Медленнее положенного — мигай аварийкой.', en: 'Slower than allowed — flash the hazards.' },
        ref: 'RGC, art. 49'
      },
      {
        id: 've-15',
        es: 'Circula a 70 km/h por una carretera con límite de 90, pero hay placas de hielo. Su velocidad es…',
        tr: { ru: 'Вы едете 70 км/ч при лимите 90, но на дороге гололёд. Ваша скорость…', en: 'You drive at 70 km/h on a road limited to 90, but there are patches of ice. Your speed is…' },
        options: [
          { es: 'inadecuada, aunque esté dentro del límite.', ru: '…неадекватная, хотя и в пределах лимита.', en: '…inappropriate, though within the limit.' },
          { es: 'adecuada, porque no supera el límite.', ru: '…адекватная: лимит не превышен.', en: '…appropriate, as it doesn’t exceed the limit.' },
          { es: 'anormalmente reducida.', ru: '…слишком низкая.', en: '…abnormally slow.' }
        ],
        answer: 0,
        explain: { ru: 'Скорость должна соответствовать условиям: погоде, дороге, машине, водителю. На льду 70 — неадекватно, даже если лимит 90.', en: 'Speed must suit the conditions: weather, road, vehicle, driver. 70 on ice is inappropriate even with a 90 limit.' },
        hint: { ru: 'Лимит — для идеальной погоды.', en: 'The limit is for perfect conditions.' },
        ref: 'RGC, art. 45'
      },
      {
        id: 've-16',
        es: '¿En cuál de estas situaciones debe moderar la velocidad?',
        tr: { ru: 'В какой из этих ситуаций нужно снизить скорость?', en: 'In which of these situations must you slow down?' },
        options: [
          { es: 'Al acercarse a un autobús detenido, sobre todo si es escolar.', ru: 'Подъезжая к стоящему автобусу, особенно школьному.', en: 'Approaching a stopped bus, especially a school bus.' },
          { es: 'Al circular por una autovía con poco tráfico.', ru: 'На пустой автовии.', en: 'On an autovía with little traffic.' },
          { es: 'Cuando otro conductor le adelanta.', ru: 'Когда вас обгоняют.', en: 'When another driver overtakes you.' }
        ],
        answer: 0,
        explain: { ru: 'Из-за стоящего автобуса могут выйти люди, особенно дети. Это одна из ситуаций, где нужно сбавить скорость или остановиться.', en: 'People, especially children, may step out from behind a stopped bus. You must slow down or stop.' },
        hint: { ru: 'Где могут быть дети — там медленно.', en: 'Where children may be — go slow.' },
        ref: 'RGC, art. 46'
      },
      {
        id: 've-17',
        es: 'Otro vehículo le deslumbra con sus luces. ¿Qué debe hacer?',
        tr: { ru: 'Вас ослепили фары встречной машины. Что делать?', en: 'Another vehicle dazzles you with its lights. What should you do?' },
        options: [
          { es: 'Reducir la velocidad e incluso detenerse si es necesario.', ru: 'Снизить скорость, при необходимости остановиться.', en: 'Slow down, even stop if necessary.' },
          { es: 'Encender las luces largas para avisarle.', ru: 'Включить дальний, чтобы предупредить.', en: 'Switch on main beam to warn him.' },
          { es: 'Mantener la velocidad mirando al centro de la calzada.', ru: 'Держать скорость, глядя в центр дороги.', en: 'Keep your speed looking at the centre of the road.' }
        ],
        answer: 0,
        explain: { ru: 'При ослеплении сбавьте скорость, смотрите на правый край дороги, при необходимости остановитесь. Ослеплять в ответ нельзя.', en: 'When dazzled, slow down, look at the right edge of the road and stop if needed. Never dazzle back.' },
        hint: { ru: 'Ослепили — сбавь и смотри вправо.', en: 'Dazzled — slow down and look right.' },
        ref: 'RGC, art. 46'
      },
      {
        id: 've-18',
        es: '¿Qué ocurre con el campo visual del conductor al aumentar la velocidad?',
        tr: { ru: 'Что происходит с полем зрения водителя при увеличении скорости?', en: 'What happens to a driver’s field of vision as speed rises?' },
        options: [
          { es: 'Se reduce (visión de túnel).', ru: 'Сужается («туннельное зрение»).', en: 'It narrows (tunnel vision).' },
          { es: 'Aumenta.', ru: 'Расширяется.', en: 'It widens.' },
          { es: 'No cambia.', ru: 'Не меняется.', en: 'It does not change.' }
        ],
        answer: 0,
        explain: { ru: 'Чем выше скорость, тем уже поле зрения: при 130 км/ч — около 30°, и вы почти не видите, что происходит по бокам.', en: 'The faster you go, the narrower your view: about 30° at 130 km/h, so you barely see what happens to the sides.' },
        hint: { ru: 'Быстрее — как в туннеле.', en: 'Faster — like in a tunnel.' },
        ref: 'DGT, Manual básico, tema 10'
      },
      {
        id: 've-19',
        es: 'La distancia de detención es…',
        tr: { ru: 'Остановочный путь — это…', en: 'Stopping distance is…' },
        options: [
          { es: 'la suma de la distancia de reacción y la de frenado.', ru: '…сумма пути реакции и тормозного пути.', en: '…reaction distance plus braking distance.' },
          { es: 'solo la distancia que recorre el vehículo al frenar.', ru: '…только путь при торможении.', en: '…only the distance covered while braking.' },
          { es: 'la distancia que hay que dejar con el vehículo de delante.', ru: '…дистанция до впереди идущей машины.', en: '…the gap to keep to the vehicle ahead.' }
        ],
        answer: 0,
        explain: { ru: 'Остановочный путь = путь реакции (пока вы среагировали) + тормозной путь (пока машина тормозит).', en: 'Stopping distance = reaction distance (until you react) + braking distance (while the car brakes).' },
        hint: { ru: 'Остановиться = заметить + затормозить.', en: 'To stop = notice + brake.' },
        ref: 'DGT, Manual básico, tema 10'
      },
      {
        id: 've-20',
        es: '¿Cuánto dura aproximadamente el tiempo de reacción normal de un conductor?',
        tr: { ru: 'Сколько примерно длится обычное время реакции водителя?', en: 'About how long is a driver’s normal reaction time?' },
        options: [
          { es: 'Unos 0,75 segundos.', ru: 'Около 0,75 секунды.', en: 'About 0.75 seconds.' },
          { es: 'Unos 3 segundos.', ru: 'Около 3 секунд.', en: 'About 3 seconds.' },
          { es: 'Unos 0,1 segundos.', ru: 'Около 0,1 секунды.', en: 'About 0.1 seconds.' }
        ],
        answer: 0,
        explain: { ru: 'Нормальное время реакции — около 0,75 с (почти секунда). Усталость, алкоголь, лекарства и отвлечение его увеличивают.', en: 'Normal reaction time is about 0.75 s (nearly a second). Fatigue, alcohol, medicines and distraction lengthen it.' },
        hint: { ru: 'Реакция — «почти секунда».', en: 'Reaction — “almost a second”.' },
        ref: 'DGT, Manual básico, tema 10'
      },
      {
        id: 've-21',
        es: 'Si duplica la velocidad, la distancia de frenado…',
        tr: { ru: 'Если скорость увеличить вдвое, тормозной путь…', en: 'If you double your speed, the braking distance…' },
        options: [
          { es: 'se multiplica aproximadamente por cuatro.', ru: '…вырастет примерно в четыре раза.', en: '…roughly quadruples.' },
          { es: 'se duplica.', ru: '…вырастет вдвое.', en: '…doubles.' },
          { es: 'no varía.', ru: '…не изменится.', en: '…stays the same.' }
        ],
        answer: 0,
        explain: { ru: 'Тормозной путь растёт пропорционально квадрату скорости: вдвое быстрее — примерно вчетверо длиннее.', en: 'Braking distance grows with the square of speed: twice as fast — about four times as long.' },
        hint: { ru: 'Скорость ×2 → путь ×4.', en: 'Speed ×2 → distance ×4.' },
        ref: 'DGT, Manual básico, tema 10'
      },
      {
        id: 've-22',
        es: '¿Cuál de estos factores aumenta la distancia de frenado?',
        tr: { ru: 'Какой из этих факторов увеличивает тормозной путь?', en: 'Which of these factors increases braking distance?' },
        options: [
          { es: 'Llevar mucha carga y circular con la calzada mojada.', ru: 'Большой груз и мокрая дорога.', en: 'A heavy load and a wet road.' },
          { es: 'Llevar las luces de cruce encendidas.', ru: 'Включённый ближний свет.', en: 'Having dipped headlights on.' },
          { es: 'Circular por una autovía.', ru: 'Езда по автовии.', en: 'Driving on an autovía.' }
        ],
        answer: 0,
        explain: { ru: 'Тормозной путь удлиняют скорость, груз, мокрая или скользкая дорога, изношенные шины и тормоза.', en: 'Speed, load, a wet or slippery road, worn tyres and brakes all lengthen braking distance.' },
        hint: { ru: 'Тяжелее и мокрее — дольше тормозишь.', en: 'Heavier and wetter — longer to stop.' },
        ref: 'DGT, Manual básico, tema 10'
      },
      {
        id: 've-23',
        es: 'La distancia de seguridad con el vehículo de delante debe permitirle…',
        tr: { ru: 'Безопасная дистанция до впереди идущей машины должна позволять вам…', en: 'The safe distance to the vehicle ahead must allow you to…' },
        options: [
          { es: 'detenerse sin chocar si frena bruscamente.', ru: '…остановиться без столкновения, если она резко затормозит.', en: '…stop without hitting it if it brakes hard.' },
          { es: 'ver su matrícula.', ru: '…видеть её номер.', en: '…read its number plate.' },
          { es: 'adelantarle en cualquier momento.', ru: '…обогнать её в любой момент.', en: '…overtake it at any moment.' }
        ],
        answer: 0,
        explain: { ru: 'Дистанция безопасности — такая, чтобы успеть остановиться при резком торможении впереди идущего.', en: 'The safe distance is enough to stop if the vehicle ahead brakes suddenly.' },
        hint: { ru: 'Правило двух секунд, в дождь — четыре.', en: 'Two-second rule, four in the rain.' },
        ref: 'RGC, art. 54'
      },
      {
        id: 've-24',
        es: '¿Cuándo debe aumentar la distancia de seguridad?',
        tr: { ru: 'Когда нужно увеличить дистанцию?', en: 'When should you increase the following distance?' },
        options: [
          { es: 'Cuando la calzada está mojada o hay poca visibilidad.', ru: 'На мокрой дороге или при плохой видимости.', en: 'On a wet road or with poor visibility.' },
          { es: 'Cuando circula a menos velocidad.', ru: 'Когда едете медленнее.', en: 'When driving slower.' },
          { es: 'Cuando el vehículo de delante es un turismo.', ru: 'Когда впереди легковая.', en: 'When the vehicle ahead is a car.' }
        ],
        answer: 0,
        explain: { ru: 'Дистанцию увеличивают при большей скорости, плохой видимости, скользкой дороге, плохом самочувствии.', en: 'Increase the gap at higher speed, poor visibility, slippery roads, or when you feel unwell.' },
        hint: { ru: 'Всё, что хуже идеала, — плюс метры.', en: 'Anything worse than ideal — add metres.' },
        ref: 'RGC, art. 54'
      },
      {
        id: 've-25',
        es: 'Fuera de poblado, ¿qué separación mínima deben dejar entre sí los camiones de más de 3.500 kg cuando no adelantan?',
        tr: { ru: 'Какую минимальную дистанцию за городом держат между собой грузовики тяжелее 3500 кг, если не обгоняют?', en: 'Out of town, what minimum gap must lorries over 3,500 kg keep between them when not overtaking?' },
        options: [
          { es: '50 metros.', ru: '50 метров.', en: '50 metres.' },
          { es: '100 metros.', ru: '100 метров.', en: '100 metres.' },
          { es: '25 metros.', ru: '25 метров.', en: '25 metres.' }
        ],
        answer: 0,
        explain: { ru: 'Машины тяжелее 3500 кг и составы длиннее 10 м держат за городом не меньше 50 м, чтобы их могли обгонять.', en: 'Vehicles over 3,500 kg and combinations over 10 m keep at least 50 m out of town so others can overtake.' },
        hint: { ru: 'Большие — пятьдесят, чтобы между ними поместилась машина.', en: 'Big ones — fifty, so a car fits in between.' },
        ref: 'RGC, art. 54'
      },
      {
        id: 've-26',
        es: '¿Quiénes pueden circular sin guardar la distancia de seguridad entre ellos?',
        tr: { ru: 'Кому разрешено ехать без безопасной дистанции друг с другом?', en: 'Who may ride without keeping a safe distance between them?' },
        options: [
          { es: 'Los ciclistas que circulan en grupo.', ru: 'Велосипедистам, едущим группой.', en: 'Cyclists riding in a group.' },
          { es: 'Los motoristas en grupo.', ru: 'Мотоциклистам группой.', en: 'Motorcyclists in a group.' },
          { es: 'Los vehículos de una misma empresa.', ru: 'Машинам одной компании.', en: 'Vehicles of the same company.' }
        ],
        answer: 0,
        explain: { ru: 'Только велосипедисты в группе могут ехать без дистанции между собой; остальные должны её держать.', en: 'Only cyclists in a group may ride without a gap between them; everyone else must keep one.' },
        hint: { ru: 'Группа велосипедистов — один длинный велосипед.', en: 'A group of cyclists is one long bicycle.' },
        ref: 'RGC, art. 54'
      },
      {
        id: 've-27',
        es: '¿Cuándo debe dejar una mayor separación lateral al cruzarse con otro vehículo?',
        tr: { ru: 'Когда при встречном разъезде нужно оставлять больший боковой интервал?', en: 'When should you leave more side clearance when meeting another vehicle?' },
        options: [
          { es: 'Cuando circula rápido, la vía está en mal estado o hay viento o lluvia.', ru: 'На скорости, на плохой дороге, в ветер или дождь.', en: 'At speed, on a poor road, or in wind or rain.' },
          { es: 'Solo de noche.', ru: 'Только ночью.', en: 'Only at night.' },
          { es: 'Cuando el otro vehículo es más pequeño.', ru: 'Когда встречная машина меньше.', en: 'When the other vehicle is smaller.' }
        ],
        answer: 0,
        explain: { ru: 'Боковой интервал увеличивают при высокой скорости, плохой дороге, плотном встречном потоке, дожде, снеге, тумане, ветре.', en: 'Increase side clearance at speed, on poor roads, in heavy oncoming traffic, rain, snow, fog or wind.' },
        hint: { ru: 'Ветер толкает вбок — оставь место.', en: 'Wind pushes sideways — leave room.' },
        ref: 'DGT, Manual básico, tema 10'
      },
      {
        id: 've-28',
        es: 'Conducir rápido por una carretera en buen estado durante mucho tiempo puede hacer que…',
        tr: { ru: 'Долгая быстрая езда по хорошей дороге может привести к тому, что…', en: 'Driving fast on a good road for a long time can make you…' },
        options: [
          { es: 'crea que va más despacio de lo que realmente va.', ru: '…вам кажется, что вы едете медленнее, чем на самом деле.', en: '…think you’re going slower than you really are.' },
          { es: 'reaccione más rápido.', ru: '…вы реагируете быстрее.', en: '…react faster.' },
          { es: 'consuma menos combustible.', ru: '…расходуете меньше топлива.', en: '…use less fuel.' }
        ],
        answer: 0,
        explain: { ru: 'К скорости привыкают: после долгой быстрой езды кажется, что едешь медленно. Плюс растут усталость и агрессивность.', en: 'You get used to speed: after a long fast stretch it feels slow. Fatigue and aggression also rise.' },
        hint: { ru: 'Скорость «засыпает» — проверяй спидометр.', en: 'Speed “fades” — check the speedometer.' },
        ref: 'DGT, Manual básico, tema 10'
      },
      {
        id: 've-29',
        es: '¿Se puede circular por debajo de la velocidad mínima?',
        tr: { ru: 'Можно ли ехать медленнее минимальной скорости?', en: 'May you drive below the minimum speed?' },
        options: [
          { es: 'Sí, por razones justificadas como tráfico denso, avería o mal estado de la vía.', ru: 'Да, по уважительной причине: пробка, поломка, плохая дорога.', en: 'Yes, for good reason: heavy traffic, a breakdown, a poor road.' },
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' },
          { es: 'Sí, siempre que no haya otros vehículos.', ru: 'Да, если нет других машин.', en: 'Yes, as long as there are no other vehicles.' }
        ],
        answer: 0,
        explain: { ru: 'Медленнее минимума — только по причине (пробка, поломка, плохая дорога и т. п.). Даже на пустой дороге без причины нельзя.', en: 'Below the minimum only for a reason (traffic, a fault, a poor road, etc.). Not without reason, even on an empty road.' },
        hint: { ru: 'Слишком медленно — тоже нарушение.', en: 'Too slow is also an offence.' },
        ref: 'RGC, art. 49'
      },
      {
        id: 've-30',
        es: '¿Se pueden hacer competiciones de velocidad en carreteras abiertas al tráfico?',
        tr: { ru: 'Можно ли устраивать гонки на дорогах общего пользования?', en: 'May speed races be held on public roads?' },
        options: [
          { es: 'No, salvo que estén autorizadas y la vía esté cerrada al tráfico.', ru: 'Нет, если только они не разрешены и дорога не перекрыта.', en: 'No, unless authorised with the road closed to traffic.' },
          { es: 'Sí, de noche y sin tráfico.', ru: 'Да, ночью без машин.', en: 'Yes, at night with no traffic.' },
          { es: 'Sí, en tramos rectos.', ru: 'Да, на прямых участках.', en: 'Yes, on straight stretches.' }
        ],
        answer: 0,
        explain: { ru: 'Гонки на дорогах запрещены, кроме разрешённых соревнований с мерами безопасности. За участие снимают баллы.', en: 'Racing on public roads is banned except authorised events with safety measures. Taking part costs points.' },
        hint: { ru: 'Гонка — только на закрытой трассе.', en: 'Racing — only on a closed course.' },
        ref: 'RGC, art. 55'
      }
    ]
  }
]);
