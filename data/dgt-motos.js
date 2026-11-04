// Driving theory (DGT): motorcycle-specific knowledge for category A (A1, A2, A).
// RGC arts. 12, 15, 36, 85, 104, 118; Reglamento General de Conductores, art. 4;
// DGT «Manual básico», Temas 2, 3, 5, 6, 11, 13 (motorcycle passages).
ECA.data.addDgt([
  {
    id: 'motos',
    cats: ['A'],
    title: { ru: 'Мотоциклы (категория A)', en: 'Motorcycles (category A)' },
    summary: {
      ru: 'Категории A1/A2/A, экипировка и шлем, органы управления, посадка, торможение, пассажир и груз, видимость.',
      en: 'A1/A2/A categories, gear and helmet, controls, riding position, braking, passengers and loads, being seen.'
    },
    hero: {
      es: 'Conducir una <b>motocicleta</b>',
      sub: { ru: 'Что нужно знать сверх общей части для категории A', en: 'What category A riders need on top of the common part' }
    },
    tabs: [
      {
        id: 'permisos',
        label: { ru: 'Права', en: 'Licences' },
        blocks: [
          {
            type: 'table',
            head: [{ ru: 'Права', en: 'Licence' }, { ru: 'Мотоцикл', en: 'Motorbike' }, { ru: 'Возраст', en: 'Age' }],
            rows: [
              ['AM', { ru: 'Мопед до 45 км/ч', en: 'Moped up to 45 km/h' }, '15'],
              ['A1', { ru: 'До 125 см³ и 11 кВт', en: 'Up to 125 cc and 11 kW' }, '16'],
              ['A2', { ru: 'До 35 кВт', en: 'Up to 35 kW' }, '18'],
              ['A', { ru: 'Любой', en: 'Any' }, '20']
            ]
          },
          {
            type: 'text',
            body: {
              ru: 'С правами B больше трёх лет в Испании можно ездить на мотоцикле категории A1 (до 125 см³). Мопеды не ездят по автомагистралям. Скорости мотоцикла — как у легковой: 120 на автомагистрали, 90 на обычной дороге.',
              en: 'With a B licence held for over three years you may ride an A1 bike (up to 125 cc) in Spain. Mopeds may not use motorways. Motorbike speed limits match cars: 120 on motorways, 90 on ordinary roads.'
            }
          }
        ]
      },
      {
        id: 'equipo',
        label: { ru: 'Экипировка', en: 'Gear' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'coral', title: { ru: 'Шлем', en: 'Helmet' }, es: '<b>casco</b> homologado y abrochado, conductor y pasajero', body: { ru: 'Обязателен водителю и пассажиру на любой дороге. Лучше интегральный, по размеру, застёгнутый, светлый; после сильного удара — заменить; наклейки и краска могут ухудшить защиту.', en: 'Compulsory for rider and passenger on every road. Best is a full-face, the right size, fastened, light-coloured; replace it after a hard impact; stickers and paint can weaken it.' } },
              { color: 'amber', title: { ru: 'Одежда', en: 'Clothing' }, es: 'traje, <b>guantes</b>, botas, colores vivos', body: { ru: 'Кожаный (или аналогичный) костюм по фигуре, перчатки с защитой, высокие крепкие ботинки, яркие цвета. У мотоцикла нет кузова — защищает только экипировка.', en: 'A fitted leather (or similar) suit, protective gloves, sturdy high boots, bright colours. A bike has no bodywork — only your gear protects you.' } },
              { color: 'blue', title: { ru: 'Свет днём', en: 'Lights by day' }, es: 'luz de <b>corto alcance</b> siempre encendida', body: { ru: 'Мотоцикл всегда едет с ближним светом, и днём тоже — его должны видеть.', en: 'A motorbike always rides with dipped headlights, by day too — it must be seen.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>«Кузов мотоциклиста — его одежда».</b> Шлем, перчатки, ботинки, яркий цвет и ближний свет — всегда.',
              en: '<b>“A rider’s bodywork is their clothing.”</b> Helmet, gloves, boots, bright colours and dipped lights — always.'
            }
          }
        ]
      },
      {
        id: 'manejo',
        label: { ru: 'Управление', en: 'Handling' },
        blocks: [
          {
            type: 'table', heading: { ru: 'Органы управления', en: 'Controls' },
            head: [{ ru: 'Где', en: 'Where' }, { ru: 'Что', en: 'What' }],
            rows: [
              [{ ru: 'Левая рука', en: 'Left hand' }, { ru: 'Сцепление, сигнал, свет', en: 'Clutch, horn, lights' }],
              [{ ru: 'Правая рука', en: 'Right hand' }, { ru: 'Передний тормоз, газ', en: 'Front brake, throttle' }],
              [{ ru: 'Правая нога', en: 'Right foot' }, { ru: 'Задний тормоз', en: 'Rear brake' }],
              [{ ru: 'Левая нога', en: 'Left foot' }, { ru: 'Переключение передач', en: 'Gear change' }]
            ]
          },
          {
            type: 'rules',
            items: [
              { color: 'teal', title: { ru: 'Посадка', en: 'Position' }, es: 'postura natural, <b>pies en los reposapiés</b>', body: { ru: 'Естественная посадка, руки расслаблены, локти не прижаты, руки не выпрямлены до конца, ноги на подножках. В повороте — небольшой наклон, без «гоночных» крайностей.', en: 'A natural posture, relaxed arms, elbows not tucked, arms not locked straight, feet on the pegs. Lean slightly in bends, no racing extremes.' } },
              { color: 'coral', title: { ru: 'Торможение', en: 'Braking' }, es: 'usar los <b>dos frenos</b>; el delantero frena más', body: { ru: 'Тормозить обоими тормозами, плавно; передний даёт большую часть замедления. На прямой и до поворота; в наклоне резко не тормозить. Чем больше вес (пассажир), тем труднее заблокировать колесо.', en: 'Use both brakes, smoothly; the front does most of the work. Brake upright and before the bend; no hard braking while leaned. More weight (a passenger) makes wheel lock harder.' } },
              { color: 'amber', title: { ru: 'Скользко', en: 'Slippery' }, es: '<b>marcas viales</b>, tapas, gravilla y primeras gotas', body: { ru: 'На разметке, люках, гравии, в первые минуты дождя мотоцикл легко скользит — не тормозить и не наклоняться резко.', en: 'Road paint, manhole covers, gravel and the first rain are very slippery on a bike — avoid hard braking and sharp leans.' } },
              { color: 'purple', title: { ru: 'Ветер', en: 'Wind' }, es: 'viento lateral: más <b>despacio</b>', body: { ru: 'Боковой ветер сильнее всего действует на двухколёсных — медленнее, крепко держать руль, осторожно рядом с грузовиками и на мостах.', en: 'Crosswinds hit two-wheelers hardest — slow down, grip firmly, take care near lorries and on bridges.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>Правая сторона — «стоп и газ»</b> (передний тормоз рукой, задний ногой), <b>левая — «сцепление и передачи»</b>.',
              en: '<b>Right side — stop and go</b> (front brake by hand, rear by foot); <b>left — clutch and gears</b>.'
            }
          }
        ]
      },
      {
        id: 'pasajero',
        label: { ru: 'Пассажир', en: 'Passenger' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'blue', title: { ru: 'Кто может ехать', en: 'Who may ride' }, es: 'mayor de <b>12 años</b>; desde 7 con padre, madre o adulto autorizado', body: { ru: 'Пассажир старше 12 лет; с 7 лет — если ведёт родитель или уполномоченный взрослый.', en: 'A passenger over 12; from 7 if the rider is a parent or authorised adult.' } },
              { color: 'teal', title: { ru: 'Как ехать', en: 'How' }, es: '<b>detrás</b> del conductor, a horcajadas, pies en los reposapiés', body: { ru: 'Только на сиденье за водителем, верхом, ноги на подножках, в шлеме. Никогда между водителем и рулём.', en: 'Only on the seat behind the rider, astride, feet on the pegs, helmeted. Never between the rider and the handlebars.' } }
            ]
          },
          {
            type: 'rules', heading: { ru: 'Груз и прицеп', en: 'Loads and trailers' },
            items: [
              { color: 'amber', title: { ru: 'Груз', en: 'Load' }, es: 'no por delante; <b>0,25 m</b> detrás; 0,50 m a cada lado del eje', body: { ru: 'У машин уже 1 м (мотоцикл): спереди груз не выступает, сзади — до 0,25 м, в стороны — до 0,50 м от оси. Груз не должен нарушать равновесие.', en: 'On vehicles narrower than 1 m (a motorbike): nothing ahead, up to 0.25 m behind, up to 0.50 m each side from the centre line. The load must not upset balance.' } },
              { color: 'purple', title: { ru: 'Прицеп', en: 'Trailer' }, es: 'remolque: <b>de día</b>, más despacio, sin personas', body: { ru: 'Мотоцикл может тянуть лёгкий прицеп при условиях: днём и при хорошей видимости, медленнее обычного лимита, людей в прицепе нет.', en: 'A motorbike may tow a light trailer under conditions: by day with good visibility, below the normal limit, nobody riding in the trailer.' } }
            ]
          },
          {
            type: 'rules', heading: { ru: 'Зеркала и свет мотоцикла', en: 'Motorbike mirrors and lights' },
            items: [
              { color: 'blue', title: { ru: 'Зеркала', en: 'Mirrors' }, es: 'hasta 100 km/h: <b>izquierdo</b>; más: los dos', body: { ru: 'Мотоцикл, который едет не быстрее 100 км/ч, — левое зеркало; быстрее — оба. Мопед — левое обязательно.', en: 'A bike that can’t exceed 100 km/h — left mirror; faster — both. Moped — left mirror compulsory.' } },
              { color: 'coral', title: { ru: 'Запрещено', en: 'Forbidden' }, es: 'luz de <b>marcha atrás</b> y tercera luz de freno', body: { ru: 'Мотоциклу запрещены фонарь заднего хода и третий стоп-сигнал.', en: 'A motorbike may not have a reversing light or a third brake light.' } }
            ]
          }
        ]
      },
      {
        id: 'riesgos',
        label: { ru: 'Риски', en: 'Risks' },
        blocks: [
          {
            type: 'text',
            body: {
              ru: ['Мотоцикл хрупкий и плохо заметный: частые аварии — лобовые и боковые при обгоне, чаще в городе; тяжелее — без шлема. Типичные ошибки других водителей — не уступили мотоциклу, выехали на встречку, отвлеклись.', 'Мотоциклисту: держитесь вне «слепых зон» машин, обгоняйте с интервалом 1,5 м за городом, не стойте сбоку, будьте заметны.'],
              en: ['A motorbike is fragile and hard to see: common crashes are head-on and side impacts when overtaking, mostly in town; worse without a helmet. Typical car-driver errors — failing to yield to the bike, crossing into its lane, distraction.', 'As a rider: stay out of cars’ blind spots, overtake with 1.5 m out of town, don’t ride alongside, be visible.']
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>«Езди так, будто тебя не видят».</b>',
              en: '<b>“Ride as if they can’t see you.”</b>'
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
              ['la motocicleta', { ru: 'мотоцикл', en: 'motorcycle' }],
              ['el ciclomotor', { ru: 'мопед', en: 'moped' }],
              ['la cilindrada', { ru: 'объём двигателя', en: 'engine capacity' }],
              ['la potencia (kW)', { ru: 'мощность (кВт)', en: 'power (kW)' }],
              ['el manillar', { ru: 'руль мотоцикла', en: 'handlebars' }],
              ['el puño del acelerador', { ru: 'ручка газа', en: 'throttle grip' }],
              ['la maneta del embrague', { ru: 'рычаг сцепления', en: 'clutch lever' }],
              ['el freno delantero / trasero', { ru: 'передний / задний тормоз', en: 'front / rear brake' }],
              ['el pedal de cambio', { ru: 'педаль переключения', en: 'gear lever' }],
              ['los reposapiés', { ru: 'подножки', en: 'footrests' }],
              ['el casco integral', { ru: 'интегральный шлем', en: 'full-face helmet' }],
              ['el pasajero', { ru: 'пассажир', en: 'pillion passenger' }],
              ['a horcajadas', { ru: 'верхом', en: 'astride' }],
              ['el sidecar', { ru: 'коляска', en: 'sidecar' }],
              ['inclinarse', { ru: 'наклоняться', en: 'to lean' }],
              ['la tapa de alcantarilla', { ru: 'крышка люка', en: 'manhole cover' }]
            ]
          }
        ]
      }
    ],
    questions: [
      {
        id: 'mo-01',
        es: '¿Qué motocicletas autoriza a conducir el permiso A1?',
        tr: { ru: 'Какие мотоциклы разрешают права A1?', en: 'Which motorbikes does an A1 licence allow?' },
        options: [
          { es: 'Hasta 125 cc y 11 kW de potencia.', ru: 'До 125 см³ и 11 кВт.', en: 'Up to 125 cc and 11 kW.' },
          { es: 'Hasta 35 kW.', ru: 'До 35 кВт.', en: 'Up to 35 kW.' },
          { es: 'Cualquier motocicleta.', ru: 'Любые.', en: 'Any motorbike.' }
        ],
        answer: 0,
        explain: { ru: 'A1 — до 125 см³ и 11 кВт (с 16 лет); A2 — до 35 кВт (с 18); A — любые (с 20).', en: 'A1 — up to 125 cc and 11 kW (from 16); A2 — up to 35 kW (from 18); A — any (from 20).' },
        hint: { ru: 'A1 — «сто двадцать пять».', en: 'A1 — one-two-five.' },
        ref: 'Reglamento General de Conductores, art. 4'
      },
      {
        id: 'mo-02',
        es: '¿A partir de qué edad se puede obtener el permiso A2?',
        tr: { ru: 'С какого возраста можно получить права A2?', en: 'From what age can you get an A2 licence?' },
        options: [
          { es: '18 años.', ru: '18 лет.', en: '18.' },
          { es: '16 años.', ru: '16 лет.', en: '16.' },
          { es: '20 años.', ru: '20 лет.', en: '20.' }
        ],
        answer: 0,
        explain: { ru: 'AM — 15, A1 — 16, A2 — 18, A — 20.', en: 'AM — 15, A1 — 16, A2 — 18, A — 20.' },
        hint: { ru: '15 – 16 – 18 – 20.', en: '15 – 16 – 18 – 20.' },
        ref: 'Reglamento General de Conductores, art. 4'
      },
      {
        id: 'mo-03',
        es: 'Con un permiso B de más de tres años de antigüedad, ¿qué motocicleta puede conducir en España?',
        tr: { ru: 'Какой мотоцикл можно водить в Испании с правами B старше трёх лет?', en: 'With a B licence held over three years, which motorbike may you ride in Spain?' },
        options: [
          { es: 'Una motocicleta de la clase A1 (hasta 125 cc).', ru: 'Мотоцикл класса A1 (до 125 см³).', en: 'An A1-class bike (up to 125 cc).' },
          { es: 'Cualquier motocicleta.', ru: 'Любой мотоцикл.', en: 'Any motorbike.' },
          { es: 'Ninguna.', ru: 'Никакой.', en: 'None.' }
        ],
        answer: 0,
        explain: { ru: 'Владельцы прав B со стажем больше трёх лет могут ездить на мотоциклах A1 по Испании.', en: 'B licence holders with over three years may ride A1 motorbikes in Spain.' },
        hint: { ru: 'B + 3 года = 125 кубиков.', en: 'B + 3 years = 125 cc.' },
        ref: 'Reglamento General de Conductores'
      },
      {
        id: 'mo-04',
        es: '¿Quién debe llevar casco en una motocicleta?',
        tr: { ru: 'Кто должен быть в шлеме на мотоцикле?', en: 'Who must wear a helmet on a motorbike?' },
        options: [
          { es: 'El conductor y el pasajero, en cualquier vía.', ru: 'Водитель и пассажир, на любой дороге.', en: 'Rider and passenger, on any road.' },
          { es: 'Solo el conductor.', ru: 'Только водитель.', en: 'Only the rider.' },
          { es: 'Solo fuera de poblado.', ru: 'Только за городом.', en: 'Only out of town.' }
        ],
        answer: 0,
        explain: { ru: 'Сертифицированный шлем обязателен и водителю, и пассажиру мотоцикла и мопеда, в городе и за городом.', en: 'An approved helmet is compulsory for rider and passenger of motorbikes and mopeds, in and out of town.' },
        hint: { ru: 'На двух колёсах — без шлема ни метра.', en: 'On two wheels — not a metre without a helmet.' },
        ref: 'RGC, art. 118'
      },
      {
        id: 'mo-05',
        es: '¿Qué tipo de casco ofrece mayor protección?',
        tr: { ru: 'Какой шлем защищает лучше всего?', en: 'Which helmet offers most protection?' },
        options: [
          { es: 'El integral, que protege también la mandíbula.', ru: 'Интегральный — закрывает и челюсть.', en: 'The full-face, which also covers the jaw.' },
          { es: 'El abierto tipo «jet».', ru: 'Открытый «джет».', en: 'An open-face “jet”.' },
          { es: 'Cualquiera, si es de color oscuro.', ru: 'Любой, если тёмный.', en: 'Any, if dark-coloured.' }
        ],
        answer: 0,
        explain: { ru: 'Интегральный шлем защищает и лицо, и челюсть. Он должен быть сертифицирован, по размеру, застёгнут; светлые цвета заметнее.', en: 'A full-face helmet protects face and jaw. It must be approved, the right size and fastened; light colours are more visible.' },
        hint: { ru: 'Интегральный — «весь череп».', en: 'Full-face — the whole head.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'mo-06',
        es: 'Tras un golpe fuerte, ¿qué debe hacer con el casco?',
        tr: { ru: 'Что делать со шлемом после сильного удара?', en: 'After a hard impact, what should you do with the helmet?' },
        options: [
          { es: 'Sustituirlo, aunque no se vean daños.', ru: 'Заменить, даже если повреждений не видно.', en: 'Replace it, even with no visible damage.' },
          { es: 'Pintarlo para tapar los golpes.', ru: 'Покрасить, чтобы скрыть следы.', en: 'Paint it to hide the marks.' },
          { es: 'Seguir usándolo.', ru: 'Пользоваться дальше.', en: 'Keep using it.' }
        ],
        answer: 0,
        explain: { ru: 'После удара внутренний амортизирующий слой может быть разрушен незаметно. Краска и наклейки тоже могут ослабить материал.', en: 'After a blow the inner shock-absorbing layer may be damaged invisibly. Paint and stickers can also weaken the material.' },
        hint: { ru: 'Шлем — одноразовая защита от удара.', en: 'A helmet absorbs one impact.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'mo-07',
        es: '¿Qué ropa es más adecuada para conducir una motocicleta?',
        tr: { ru: 'Какая одежда лучше всего для езды на мотоцикле?', en: 'What clothing is best for riding a motorbike?' },
        options: [
          { es: 'Traje ajustado de cuero o similar, guantes, botas altas y colores vivos.', ru: 'Облегающий кожаный костюм, перчатки, высокие ботинки, яркие цвета.', en: 'A fitted leather suit, gloves, high boots and bright colours.' },
          { es: 'Ropa ligera de colores oscuros.', ru: 'Лёгкая тёмная одежда.', en: 'Light, dark clothing.' },
          { es: 'Chanclas para manejar mejor el cambio.', ru: 'Шлёпанцы, чтобы удобнее переключать.', en: 'Flip-flops to work the gears better.' }
        ],
        answer: 0,
        explain: { ru: 'У мотоцикла нет кузова: защищают кожаный костюм (или аналог), перчатки, крепкие ботинки; яркие цвета делают заметнее.', en: 'A bike has no bodywork: a leather (or similar) suit, gloves and sturdy boots protect you; bright colours make you visible.' },
        hint: { ru: 'Одежда — кузов мотоциклиста.', en: 'Clothing is the rider’s bodywork.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'mo-08',
        es: '¿Con qué luces debe circular una motocicleta durante el día?',
        tr: { ru: 'С каким светом мотоцикл едет днём?', en: 'Which lights must a motorbike use by day?' },
        options: [
          { es: 'Con la luz de corto alcance.', ru: 'С ближним светом.', en: 'Dipped headlight.' },
          { es: 'Sin luces.', ru: 'Без света.', en: 'No lights.' },
          { es: 'Con la antiniebla trasera.', ru: 'С задним противотуманным.', en: 'Rear fog light.' }
        ],
        answer: 0,
        explain: { ru: 'Мотоциклы обязаны ездить с ближним светом и днём, на любых дорогах.', en: 'Motorbikes must use dipped headlights by day on all roads.' },
        hint: { ru: 'Мотоцикл маленький — пусть светится.', en: 'A bike is small — let it shine.' },
        ref: 'RGC, art. 104'
      },
      {
        id: 'mo-09',
        es: 'En una motocicleta, ¿con qué se acciona el freno delantero?',
        tr: { ru: 'Чем на мотоцикле включается передний тормоз?', en: 'On a motorbike, what operates the front brake?' },
        options: [
          { es: 'Con la mano derecha, mediante una maneta.', ru: 'Правой рукой, рычагом.', en: 'The right hand, via a lever.' },
          { es: 'Con el pie derecho.', ru: 'Правой ногой.', en: 'The right foot.' },
          { es: 'Con la mano izquierda.', ru: 'Левой рукой.', en: 'The left hand.' }
        ],
        answer: 0,
        explain: { ru: 'Правая рука — передний тормоз и газ; правая нога — задний тормоз; левая рука — сцепление; левая нога — передачи.', en: 'Right hand — front brake and throttle; right foot — rear brake; left hand — clutch; left foot — gears.' },
        hint: { ru: 'Справа — стоп и газ.', en: 'Right — stop and go.' },
        ref: 'DGT, Manual básico, tema 6'
      },
      {
        id: 'mo-10',
        es: 'En una motocicleta, ¿dónde suele estar el pedal del cambio de marchas?',
        tr: { ru: 'Где обычно находится педаль переключения передач на мотоцикле?', en: 'Where is the gear-change pedal usually on a motorbike?' },
        options: [
          { es: 'En el lado izquierdo, se acciona con el pie.', ru: 'Слева, под ногу.', en: 'On the left, worked by foot.' },
          { es: 'En el manillar derecho.', ru: 'На правой ручке руля.', en: 'On the right handlebar.' },
          { es: 'En el lado derecho, junto al freno.', ru: 'Справа, рядом с тормозом.', en: 'On the right, next to the brake.' }
        ],
        answer: 0,
        explain: { ru: 'Передачи переключают левой ногой; задний тормоз — правой.', en: 'Gears are changed with the left foot; the rear brake is on the right.' },
        hint: { ru: 'Слева — сцепление и передачи.', en: 'Left — clutch and gears.' },
        ref: 'DGT, Manual básico, tema 6'
      },
      {
        id: 'mo-11',
        es: '¿Cómo se debe frenar normalmente con una motocicleta?',
        tr: { ru: 'Как обычно тормозить на мотоцикле?', en: 'How should you normally brake on a motorbike?' },
        options: [
          { es: 'Usando los dos frenos de forma progresiva.', ru: 'Обоими тормозами, плавно.', en: 'Using both brakes progressively.' },
          { es: 'Solo con el freno trasero.', ru: 'Только задним.', en: 'Only the rear brake.' },
          { es: 'Solo con el freno delantero a fondo.', ru: 'Только передним в упор.', en: 'Only the front brake, hard.' }
        ],
        answer: 0,
        explain: { ru: 'Оба тормоза одновременно и плавно; передний даёт большую часть замедления, задний стабилизирует.', en: 'Both brakes together and smoothly; the front does most of the slowing, the rear stabilises.' },
        hint: { ru: 'Два колеса — два тормоза.', en: 'Two wheels — two brakes.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'mo-12',
        es: 'En una curva, con la motocicleta inclinada, ¿qué debe evitar?',
        tr: { ru: 'Чего избегать в повороте, когда мотоцикл наклонён?', en: 'In a bend with the bike leaned over, what should you avoid?' },
        options: [
          { es: 'Frenar bruscamente, sobre todo con el freno delantero.', ru: 'Резко тормозить, особенно передним.', en: 'Braking hard, especially with the front brake.' },
          { es: 'Mantener el gas suave.', ru: 'Держать ровный газ.', en: 'Keeping a gentle throttle.' },
          { es: 'Mirar hacia la salida de la curva.', ru: 'Смотреть на выход из поворота.', en: 'Looking towards the exit.' }
        ],
        answer: 0,
        explain: { ru: 'В наклоне сцепление шины частично уходит на удержание траектории: резкое торможение (особенно передним) может уронить мотоцикл. Тормозить до поворота, на прямой.', en: 'Leaned over, the tyre’s grip is busy holding the line: hard braking (especially front) can drop the bike. Brake before the bend, upright.' },
        hint: { ru: 'Тормози прямо, наклоняйся без тормоза.', en: 'Brake upright, lean without braking.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'mo-13',
        es: 'Con lluvia, ¿por qué debe tener especial cuidado un motorista con las marcas viales?',
        tr: { ru: 'Почему мотоциклисту в дождь нужно быть особенно осторожным на разметке?', en: 'In rain, why should a rider take special care on road markings?' },
        options: [
          { es: 'Porque son muy resbaladizas.', ru: 'Она очень скользкая.', en: 'They are very slippery.' },
          { es: 'Porque desaparecen.', ru: 'Она исчезает.', en: 'They disappear.' },
          { es: 'Porque reflejan la luz y deslumbran.', ru: 'Она отражает свет и слепит.', en: 'They reflect light and dazzle.' }
        ],
        answer: 0,
        explain: { ru: 'Мокрая разметка, люки и рельсы почти не держат шину. На них не тормозить и не наклоняться резко.', en: 'Wet paint, manhole covers and rails barely grip. Don’t brake or lean sharply on them.' },
        hint: { ru: 'Краска мокрая — как лёд.', en: 'Wet paint — like ice.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'mo-14',
        es: '¿Cuál es la postura correcta para conducir una motocicleta?',
        tr: { ru: 'Какая посадка правильная на мотоцикле?', en: 'What is the correct riding posture?' },
        options: [
          { es: 'Natural, con los brazos relajados y los pies en los reposapiés.', ru: 'Естественная, руки расслаблены, ноги на подножках.', en: 'Natural, arms relaxed, feet on the footrests.' },
          { es: 'Con los brazos totalmente estirados.', ru: 'С полностью выпрямленными руками.', en: 'With arms fully straight.' },
          { es: 'Con los pies colgando para equilibrarse.', ru: 'Свесив ноги для равновесия.', en: 'With feet dangling for balance.' }
        ],
        answer: 0,
        explain: { ru: 'Неестественные позы (выпрямленные руки, прижатые локти, сильный наклон) утомляют и замедляют реакцию. Ноги — на подножках, как только мотоцикл поехал.', en: 'Unnatural postures (locked arms, tucked elbows, extreme lean) tire you and slow reactions. Feet on the pegs once moving.' },
        hint: { ru: 'Расслабленные руки — быстрый руль.', en: 'Relaxed arms — quick steering.' },
        ref: 'DGT, Manual básico, tema 6'
      },
      {
        id: 'mo-15',
        es: '¿Cuál es la edad mínima, como norma general, de un pasajero de motocicleta?',
        tr: { ru: 'Какой, как правило, минимальный возраст пассажира мотоцикла?', en: 'As a rule, what is the minimum age of a motorbike passenger?' },
        options: [
          { es: 'Más de 12 años.', ru: 'Старше 12 лет.', en: 'Over 12.' },
          { es: 'Más de 14 años.', ru: 'Старше 14 лет.', en: 'Over 14.' },
          { es: 'Más de 16 años.', ru: 'Старше 16 лет.', en: 'Over 16.' }
        ],
        answer: 0,
        explain: { ru: 'Пассажир — старше 12 лет; с 7 лет — если ведёт родитель или уполномоченный взрослый.', en: 'A passenger must be over 12; from 7 with a parent or authorised adult riding.' },
        hint: { ru: '12 — с кем угодно, 7 — с родителем.', en: '12 — with anyone, 7 — with a parent.' },
        ref: 'RGC, art. 12'
      },
      {
        id: 'mo-16',
        es: '¿Dónde debe ir el pasajero de una motocicleta?',
        tr: { ru: 'Где должен сидеть пассажир мотоцикла?', en: 'Where must a motorbike passenger sit?' },
        options: [
          { es: 'Detrás del conductor, a horcajadas, con los pies en los reposapiés.', ru: 'За водителем, верхом, ноги на подножках.', en: 'Behind the rider, astride, feet on the footrests.' },
          { es: 'Entre el conductor y el manillar.', ru: 'Между водителем и рулём.', en: 'Between the rider and the handlebars.' },
          { es: 'De lado, si es más cómodo.', ru: 'Боком, если так удобнее.', en: 'Side-saddle, if more comfortable.' }
        ],
        answer: 0,
        explain: { ru: 'Пассажир — только на сиденье позади водителя, верхом, ноги на подножках, в шлеме. Перед водителем — никогда.', en: 'The passenger rides only on the seat behind, astride, feet on footrests, helmeted. Never in front of the rider.' },
        hint: { ru: 'Пассажир — за спиной.', en: 'Passenger — behind you.' },
        ref: 'RGC, art. 12'
      },
      {
        id: 'mo-17',
        es: 'Un niño de 8 años quiere ir de pasajero en la moto de su madre. ¿Puede?',
        tr: { ru: 'Ребёнок 8 лет хочет поехать пассажиром на мотоцикле мамы. Можно?', en: 'An 8-year-old wants to ride on their mother’s motorbike. May they?' },
        options: [
          { es: 'Sí, cumpliendo las normas de los pasajeros (casco, reposapiés…).', ru: 'Да, соблюдая правила для пассажиров (шлем, подножки…).', en: 'Yes, following passenger rules (helmet, footrests…).' },
          { es: 'No, solo a partir de 12 años.', ru: 'Нет, только с 12 лет.', en: 'No, only from 12.' },
          { es: 'Solo dentro de poblado.', ru: 'Только в городе.', en: 'Only in town.' }
        ],
        answer: 0,
        explain: { ru: 'С 7 лет ребёнок может ехать, если водитель — родитель или уполномоченный взрослый, с соблюдением всех правил для пассажира.', en: 'From 7 a child may ride if the rider is a parent or authorised adult, following all passenger rules.' },
        hint: { ru: 'С мамой — с семи.', en: 'With mum — from seven.' },
        ref: 'RGC, art. 12'
      },
      {
        id: 'mo-18',
        es: 'Lleva carga en una motocicleta. ¿Puede sobresalir por delante?',
        tr: { ru: 'Вы везёте груз на мотоцикле. Может ли он выступать спереди?', en: 'You carry a load on a motorbike. May it stick out at the front?' },
        options: [
          { es: 'No.', ru: 'Нет.', en: 'No.' },
          { es: 'Sí, hasta 0,25 m.', ru: 'Да, до 0,25 м.', en: 'Yes, up to 0.25 m.' },
          { es: 'Sí, si se señaliza.', ru: 'Да, если обозначить.', en: 'Yes, if marked.' }
        ],
        answer: 0,
        explain: { ru: 'У машин уже 1 м: спереди груз не выступает, сзади — до 0,25 м, в стороны — до 0,50 м от оси.', en: 'On vehicles narrower than 1 m: nothing ahead, up to 0.25 m behind, up to 0.50 m each side from the centre line.' },
        hint: { ru: 'Спереди — ноль, сзади — четверть метра.', en: 'Front — zero, back — a quarter metre.' },
        ref: 'RGC, art. 15'
      },
      {
        id: 'mo-19',
        es: 'En una motocicleta, ¿cuánto puede sobresalir la carga por cada lado?',
        tr: { ru: 'Насколько груз может выступать в стороны на мотоцикле?', en: 'On a motorbike, how far may the load stick out each side?' },
        options: [
          { es: 'Hasta 0,50 m desde el eje del vehículo.', ru: 'До 0,50 м от оси машины.', en: 'Up to 0.50 m from the vehicle’s centre line.' },
          { es: 'Hasta 1 m.', ru: 'До 1 м.', en: 'Up to 1 m.' },
          { es: 'No puede sobresalir nada.', ru: 'Ничего не должно выступать.', en: 'Nothing may stick out.' }
        ],
        answer: 0,
        explain: { ru: 'По бокам — не дальше 0,50 м от оси, то есть общая ширина с грузом — около метра.', en: 'Sideways — no more than 0.50 m from the centre line, so total width with load about one metre.' },
        hint: { ru: 'Полметра в каждую сторону от середины.', en: 'Half a metre each side of the middle.' },
        ref: 'RGC, art. 15'
      },
      {
        id: 'mo-20',
        es: '¿En qué condiciones puede una motocicleta arrastrar un remolque?',
        tr: { ru: 'При каких условиях мотоцикл может тянуть прицеп?', en: 'Under what conditions may a motorbike tow a trailer?' },
        options: [
          { es: 'De día, a menor velocidad de la permitida y sin personas en el remolque.', ru: 'Днём, медленнее разрешённого и без людей в прицепе.', en: 'By day, below the permitted speed and with nobody in the trailer.' },
          { es: 'Nunca.', ru: 'Никогда.', en: 'Never.' },
          { es: 'Siempre, igual que un turismo.', ru: 'Всегда, как легковая.', en: 'Always, like a car.' }
        ],
        answer: 0,
        explain: { ru: 'Мотоцикл может тянуть лёгкий прицеп днём при хорошей видимости, медленнее обычного лимита и без людей в прицепе.', en: 'A motorbike may tow a light trailer by day with good visibility, below the normal limit, with nobody in it.' },
        hint: { ru: 'Прицеп у мото — днём, медленно, без людей.', en: 'Bike trailer — daytime, slow, no people.' },
        ref: 'DGT, Manual básico, tema 13'
      },
      {
        id: 'mo-21',
        es: 'Una motocicleta que puede superar los 100 km/h, ¿cuántos retrovisores debe llevar?',
        tr: { ru: 'Сколько зеркал нужно мотоциклу, который может ехать быстрее 100 км/ч?', en: 'How many mirrors must a motorbike capable of over 100 km/h have?' },
        options: [
          { es: 'Dos, uno a cada lado.', ru: 'Два, по одному с каждой стороны.', en: 'Two, one each side.' },
          { es: 'Uno, el izquierdo.', ru: 'Одно, левое.', en: 'One, on the left.' },
          { es: 'Ninguno es obligatorio.', ru: 'Ни одно не обязательно.', en: 'None is compulsory.' }
        ],
        answer: 0,
        explain: { ru: 'Мотоцикл быстрее 100 км/ч — два зеркала; до 100 — только левое. Мопед — левое обязательно.', en: 'A bike faster than 100 km/h — two mirrors; up to 100 — the left one. Moped — left compulsory.' },
        hint: { ru: 'Больше 100 — два зеркала.', en: 'Over 100 — two mirrors.' },
        ref: 'DGT, Manual básico, tema 6'
      },
      {
        id: 'mo-22',
        es: '¿Qué luz tiene prohibido llevar una motocicleta?',
        tr: { ru: 'Какой фонарь запрещён на мотоцикле?', en: 'Which light may a motorbike not have?' },
        options: [
          { es: 'La luz de marcha atrás.', ru: 'Фонарь заднего хода.', en: 'A reversing light.' },
          { es: 'La luz de freno.', ru: 'Стоп-сигнал.', en: 'A brake light.' },
          { es: 'Los intermitentes.', ru: 'Указатели поворота.', en: 'Indicators.' }
        ],
        answer: 0,
        explain: { ru: 'На мотоцикле запрещены фонарь заднего хода и третий стоп-сигнал; обычные стоп-сигнал и указатели — обязательны.', en: 'Motorbikes may not have a reversing light or a third brake light; normal brake lights and indicators are required.' },
        hint: { ru: 'Мото назад не ездит — и фонарь не нужен.', en: 'Bikes don’t reverse — no reversing light.' },
        ref: 'DGT, Manual básico, tema 7'
      },
      {
        id: 'mo-23',
        es: '¿Cuál es la velocidad máxima de una motocicleta en autopista?',
        tr: { ru: 'Какая максимальная скорость мотоцикла на автописте?', en: 'What is a motorbike’s top speed on a motorway?' },
        options: [
          { es: '120 km/h.', ru: '120 км/ч.', en: '120 km/h.' },
          { es: '100 km/h.', ru: '100 км/ч.', en: '100 km/h.' },
          { es: '90 km/h.', ru: '90 км/ч.', en: '90 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'Мотоциклы — как легковые: 120 км/ч на автописте и автовии, 90 на обычной дороге.', en: 'Motorbikes are like cars: 120 km/h on motorways, 90 on ordinary roads.' },
        hint: { ru: 'Мото = легковая по скорости.', en: 'Bike = car for speed.' },
        ref: 'RGC, art. 48'
      },
      {
        id: 'mo-24',
        es: '¿Puede circular un ciclomotor por una autovía?',
        tr: { ru: 'Может ли мопед ехать по автовии?', en: 'May a moped use an autovía?' },
        options: [
          { es: 'No.', ru: 'Нет.', en: 'No.' },
          { es: 'Sí, por el arcén.', ru: 'Да, по обочине.', en: 'Yes, on the shoulder.' },
          { es: 'Sí, por el carril derecho a 45 km/h.', ru: 'Да, по правой полосе 45 км/ч.', en: 'Yes, in the right lane at 45 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'Мопеды не держат минимальную скорость автомагистрали (60) — им туда нельзя.', en: 'Mopeds can’t reach the motorway minimum (60) — they’re banned.' },
        hint: { ru: '45 км/ч — не для магистрали.', en: '45 km/h — not for motorways.' },
        ref: 'RGC, art. 38'
      },
      {
        id: 'mo-25',
        es: 'Conduce una motocicleta fuera de poblado y adelanta a un turismo. ¿Qué separación lateral debe dejar?',
        tr: { ru: 'Вы на мотоцикле за городом обгоняете легковую. Какой боковой интервал оставить?', en: 'Riding out of town, you overtake a car. What side gap must you leave?' },
        options: [
          { es: 'Al menos 1,5 metros.', ru: 'Не меньше 1,5 м.', en: 'At least 1.5 m.' },
          { es: 'Unos 50 cm.', ru: 'Около 50 см.', en: 'About 50 cm.' },
          { es: 'No hay mínimo.', ru: 'Минимума нет.', en: 'There’s no minimum.' }
        ],
        answer: 0,
        explain: { ru: 'За городом двухколёсный при обгоне любого транспортного средства оставляет не меньше 1,5 м.', en: 'Out of town, a two-wheeler overtaking any vehicle leaves at least 1.5 m.' },
        hint: { ru: 'Полтора метра — в обе стороны.', en: '1.5 m — both ways.' },
        ref: 'RGC, art. 85'
      },
      {
        id: 'mo-26',
        es: '¿Qué tipo de accidente es más frecuente en motocicletas al adelantar?',
        tr: { ru: 'Какие ДТП чаще всего случаются с мотоциклами при обгоне?', en: 'Which crashes are most common for motorbikes when overtaking?' },
        options: [
          { es: 'Choques frontales y laterales.', ru: 'Лобовые и боковые столкновения.', en: 'Head-on and side impacts.' },
          { es: 'Alcances por detrás a baja velocidad.', ru: 'Удары сзади на малой скорости.', en: 'Low-speed rear-end shunts.' },
          { es: 'Vuelcos en aparcamientos.', ru: 'Падения на парковке.', en: 'Tip-overs in car parks.' }
        ],
        answer: 0,
        explain: { ru: 'По пособию DGT, при обгоне мотоциклы чаще всего попадают в лобовые и боковые столкновения; большинство — в городе.', en: 'Per the DGT manual, overtaking bikes mostly suffer head-on and side impacts; most happen in town.' },
        hint: { ru: 'Обгон на мото — проверь встречку дважды.', en: 'Overtaking on a bike — check oncoming twice.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'mo-27',
        es: 'Como motorista, ¿qué debe evitar respecto a los demás vehículos?',
        tr: { ru: 'Чего мотоциклисту следует избегать рядом с машинами?', en: 'As a rider, what should you avoid around other vehicles?' },
        options: [
          { es: 'Circular en su ángulo muerto o justo a su lado.', ru: 'Ехать в их слепой зоне или прямо рядом сбоку.', en: 'Riding in their blind spot or right beside them.' },
          { es: 'Llevar la luz encendida.', ru: 'Ехать со светом.', en: 'Riding with your light on.' },
          { es: 'Mantener la distancia de seguridad.', ru: 'Держать дистанцию.', en: 'Keeping a safe distance.' }
        ],
        answer: 0,
        explain: { ru: 'Мотоцикл в слепой зоне машины невидим для водителя: держитесь впереди или позади, а не сбоку.', en: 'A bike in a car’s blind spot is invisible to the driver: stay ahead or behind, not alongside.' },
        hint: { ru: 'Езди так, будто тебя не видят.', en: 'Ride as if they can’t see you.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'mo-28',
        es: 'El viento lateral fuerte afecta especialmente a…',
        tr: { ru: 'Сильный боковой ветер особенно опасен для…', en: 'Strong crosswinds especially affect…' },
        options: [
          { es: 'los vehículos de dos ruedas.', ru: '…двухколёсных.', en: '…two-wheelers.' },
          { es: 'los turismos pesados.', ru: '…тяжёлых легковых.', en: '…heavy cars.' },
          { es: 'los autobuses en ciudad.', ru: '…городских автобусов.', en: '…city buses.' }
        ],
        answer: 0,
        explain: { ru: 'Мотоциклы лёгкие и с большой «парусностью» водителя: ветер сдвигает их сильнее. Медленнее, крепко держать руль, осторожно рядом с грузовиками и на мостах.', en: 'Bikes are light and the rider catches wind: gusts push them most. Slow down, grip firmly, take care near lorries and on bridges.' },
        hint: { ru: 'Лёгкий — первый под ветер.', en: 'Light — first to be blown.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'mo-29',
        es: 'Al tomar una curva con la motocicleta, ¿cómo debe inclinarse?',
        tr: { ru: 'Как наклоняться в повороте на мотоцикле?', en: 'How should you lean when taking a bend on a motorbike?' },
        options: [
          { es: 'Ligeramente, acompañando a la moto, sin exagerar.', ru: 'Слегка, вместе с мотоциклом, без крайностей.', en: 'Slightly, with the bike, without exaggeration.' },
          { es: 'Mucho, como los pilotos de carreras.', ru: 'Сильно, как гонщики.', en: 'A lot, like racers.' },
          { es: 'Hacia el lado contrario a la curva.', ru: 'В сторону, противоположную повороту.', en: 'Away from the bend.' }
        ],
        answer: 0,
        explain: { ru: 'Пособие DGT: немного наклоняться в повороте вместе с мотоциклом, без «гоночной» посадки. Смотреть на выход из поворота.', en: 'The DGT manual: lean slightly with the bike in bends, not like a racer. Look towards the exit.' },
        hint: { ru: 'Наклон — «чуть-чуть», взгляд — на выход.', en: 'Lean a little, eyes on the exit.' },
        ref: 'DGT, Manual básico, tema 6'
      },
      {
        id: 'mo-30',
        es: 'Al frenar, ¿cómo influye llevar un pasajero en la motocicleta?',
        tr: { ru: 'Как пассажир влияет на торможение мотоцикла?', en: 'How does carrying a passenger affect braking on a motorbike?' },
        options: [
          { es: 'Aumenta la distancia de frenado, aunque las ruedas se bloquean con más dificultad.', ru: 'Тормозной путь длиннее, хотя колёса блокируются труднее.', en: 'Braking distance grows, although the wheels lock less easily.' },
          { es: 'No influye.', ru: 'Не влияет.', en: 'It makes no difference.' },
          { es: 'Reduce la distancia de frenado a la mitad.', ru: 'Сокращает тормозной путь вдвое.', en: 'It halves the braking distance.' }
        ],
        answer: 0,
        explain: { ru: 'Больше вес — больше инерция и длиннее тормозной путь; при этом колесо под нагрузкой блокируется труднее (пособие DGT). Тормозить раньше и плавнее.', en: 'More weight — more inertia and longer braking; yet a loaded wheel locks less easily (DGT manual). Brake earlier and more gently.' },
        hint: { ru: 'С пассажиром — тормози раньше.', en: 'With a passenger — brake earlier.' },
        ref: 'DGT, Manual básico, tema 5'
      }
    ]
  }
]);
