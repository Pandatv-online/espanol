// Driving theory (DGT): preparing a trip, defensive driving, eco-driving and environmental labels.
// DGT «Manual básico», Tema 17.
ECA.data.addDgt([
  {
    id: 'eficiente',
    cats: ['A', 'B'],
    title: { ru: 'Предвидение и экономия', en: 'Defensive and eco-driving' },
    summary: {
      ru: 'Подготовка к поездке, «слепые зоны», дистанция в пробке, экономичная езда, ошибочные «лайфхаки», экологические наклейки DGT.',
      en: 'Trip preparation, blind spots, gaps in queues, eco-driving, false fuel “hacks”, DGT environmental labels.'
    },
    hero: {
      es: 'Conducción <b>preventiva y eficiente</b>',
      sub: { ru: 'Видеть заранее, тратить меньше', en: 'See ahead, spend less' }
    },
    tabs: [
      {
        id: 'viaje',
        label: { ru: 'Поездка', en: 'Trip' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'blue', title: { ru: 'В машине должны быть', en: 'Must be in the car' }, es: 'señal <b>V-16</b>, chaleco, rueda de repuesto', body: { ru: 'Маячок V-16, светоотражающий жилет, запасное колесо (или ремкомплект). Желательно — аптечка и запасные очки, если вы их носите.', en: 'A V-16 beacon, a reflective vest, a spare wheel (or repair kit). Advisable — a first-aid kit and spare glasses if you wear them.' } },
              { color: 'teal', title: { ru: 'Маршрут', en: 'Route' }, es: 'planificar <b>ruta y descansos</b>', body: { ru: 'Заранее выбрать безопасный маршрут с учётом работ, погоды и трафика, спланировать остановки.', en: 'Plan a safe route in advance considering works, weather and traffic, and plan your stops.' } },
              { color: 'purple', title: { ru: 'Зимой', en: 'In winter' }, es: 'cadenas, <b>depósito lleno</b>, ropa de abrigo', body: { ru: 'Цепи, полный бак, тёплая одежда, вода, еда, фонарик; по возможности не ехать ночью.', en: 'Chains, a full tank, warm clothes, water, food, a torch; avoid driving at night if possible.' } }
            ]
          }
        ]
      },
      {
        id: 'preventiva',
        label: { ru: 'Предвидение', en: 'Defensive' },
        blocks: [
          {
            type: 'rules', heading: { ru: 'Три принципа', en: 'Three principles' },
            items: [
              { color: 'blue', label: { ru: '1', en: '1' }, title: { ru: 'Обзор', en: 'Vision' }, es: 'mirar <b>lejos</b> (unos 20 s) y a los lados', body: { ru: 'Смотреть далеко вперёд — туда, где будете через ~20 секунд (чем быстрее, тем дальше), и регулярно в зеркала, даже без манёвра.', en: 'Look far ahead — where you’ll be in ~20 seconds (further at higher speed) — and check mirrors regularly, even without a manoeuvre.' } },
              { color: 'amber', label: { ru: '2', en: '2' }, title: { ru: 'Предвидение', en: 'Anticipation' }, es: '<b>anticiparse</b> a los demás', body: { ru: 'Угадывать действия других, вовремя показывать свои, не задерживаться в слепой зоне большой машины.', en: 'Predict what others will do, signal yours in time, don’t linger in a large vehicle’s blind spot.' } },
              { color: 'teal', label: { ru: '3', en: '3' }, title: { ru: 'Пространство', en: 'Space' }, es: '<b>espacio</b> delante, detrás y a los lados', body: { ru: 'Впереди 2–3 секунды (в дождь, туман, ночью — ещё секунду); если сзади «висят» — дистанцию впереди увеличить и тормозить плавнее; в пробке — 2–3 м до впереди стоящего, последнему в колонне — 5–6 м и аварийка.', en: 'Ahead 2–3 seconds (one more in rain, fog, at night); if someone tailgates — increase the gap ahead and brake more gently; in a queue — 2–3 m to the car in front; the last in line — 5–6 m and hazards.' } }
            ]
          },
          {
            type: 'text',
            body: {
              ru: 'У каждой машины есть <b>слепые зоны</b> — то, что не видно в зеркалах. Перед перестроением повернуть голову и посмотреть в окно. Датчик слепых зон (BSM) помогает, но не заменяет взгляд.',
              en: 'Every car has <b>blind spots</b> — areas the mirrors don’t show. Before changing lane, turn your head and look through the window. A blind-spot monitor (BSM) helps but doesn’t replace a look.'
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>«Вижу — предвижу — оставляю место».</b> В пробке: видишь шины впереди стоящей машины — дистанция нормальная.',
              en: '<b>“See — predict — leave room.”</b> In a queue: if you can see the tyres of the car ahead, the gap is fine.'
            }
          }
        ]
      },
      {
        id: 'eficiente',
        label: { ru: 'Экономия', en: 'Eco' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'teal', title: { ru: 'Пуск', en: 'Starting' }, es: 'arrancar <b>sin acelerar</b> y salir enseguida', body: { ru: 'Заводить без газа и сразу трогаться, первые минуты — спокойно, пока мотор не прогреется.', en: 'Start without throttle and move off at once; take it easy for the first minutes until the engine warms.' } },
              { color: 'blue', title: { ru: 'Передачи', en: 'Gears' }, es: 'a 2.ª enseguida, <b>marchas largas</b>', body: { ru: 'С первой — сразу на вторую, разгон плавный, ехать на максимально высокой передаче (в городе тоже).', en: 'From first straight to second, accelerate gently, drive in the highest possible gear (in town too).' } },
              { color: 'amber', title: { ru: 'Скорость', en: 'Speed' }, es: '<b>velocidad constante</b>; más de 80–90 km/h dispara el consumo', body: { ru: 'Ровная скорость без рывков; после 80–90 км/ч расход резко растёт.', en: 'Steady speed without jerks; above 80–90 km/h fuel use rises sharply.' } },
              { color: 'purple', title: { ru: 'Остановка', en: 'Slowing down' }, es: 'dejar <b>rodar</b> con la marcha puesta; apagar si es más de 1 min', body: { ru: 'Отпустить газ и катиться на передаче (двигатель почти не тратит топливо), тормозить плавно, глушить при стоянке больше минуты.', en: 'Lift off and roll in gear (the engine uses almost no fuel), brake gently, switch off if stopped over a minute.' } }
            ]
          },
          {
            type: 'rules', heading: { ru: 'Что увеличивает расход', en: 'What raises fuel use' },
            items: [
              { color: 'coral', title: { ru: 'Воздух', en: 'Air drag' }, es: '<b>baca</b>, ventanillas bajadas, remolque', body: { ru: 'Багажник на крыше, открытые окна на скорости, прицеп или дом на колёсах.', en: 'Roof rack, open windows at speed, a trailer or caravan.' } },
              { color: 'coral', title: { ru: 'Состояние', en: 'Condition' }, es: 'neumáticos <b>poco inflados</b>, filtro sucio', body: { ru: 'Недокачанные шины, грязный воздушный фильтр, высокий холостой ход, пропущенное ТО.', en: 'Underinflated tyres, a dirty air filter, a high idle, skipped servicing.' } },
              { color: 'coral', title: { ru: 'Город, груз, кондиционер', en: 'Town, load, A/C' }, es: 'ciudad, <b>peso</b>, aire acondicionado', body: { ru: 'Пробки и остановки, лишний вес, кондиционер (оптимально 23–24 °C).', en: 'Jams and stops, excess weight, air conditioning (23–24 °C is best).' } }
            ]
          },
          {
            type: 'text', color: 'coral',
            body: {
              ru: '<b>Ложная экономия</b>: заливать не то топливо, катиться под гору на <b>нейтрали</b> (хуже управляемость, перегрев тормозов), экономить на обслуживании. Разряженную машину нельзя заводить «с толкача» — несгоревшее топливо разрушит катализатор.',
              en: '<b>False savings</b>: using the wrong fuel, coasting downhill in <b>neutral</b> (less control, overheated brakes), skimping on maintenance. Don’t push-start a car with a flat battery — unburnt fuel destroys the catalytic converter.'
            }
          },
          {
            type: 'table', heading: { ru: 'Экологические наклейки DGT', en: 'DGT environmental labels' },
            head: [{ ru: 'Наклейка', en: 'Label' }, { ru: 'Кому', en: 'For' }],
            rows: [
              ['0 emisiones', { ru: 'Электро, гибриды с большим запасом', en: 'EVs, long-range plug-ins' }],
              ['ECO', { ru: 'Гибриды, газ', en: 'Hybrids, gas' }],
              ['C', { ru: 'Новые бензин и дизель', en: 'Newer petrol and diesel' }],
              ['B', { ru: 'Более старые', en: 'Older ones' }]
            ]
          },
          {
            type: 'text',
            body: {
              ru: 'Наклейку клеят на лобовое стекло справа. Города создают <b>зоны низких выбросов</b> (ZBE): въезд — только с указанной под знаком наклейкой. Машинам «0 emisiones» могут разрешать полосу VAO даже с одним водителем.',
              en: 'The label goes on the windscreen, right side. Cities set up <b>low-emission zones</b> (ZBE): entry only with the label shown under the sign. “0 emisiones” cars may be allowed in VAO lanes even with just the driver.'
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
              ['la conducción preventiva', { ru: 'предупредительное вождение', en: 'defensive driving' }],
              ['la conducción eficiente', { ru: 'экономичное вождение', en: 'eco-driving' }],
              ['el ángulo muerto', { ru: 'слепая зона', en: 'blind spot' }],
              ['anticiparse', { ru: 'предвидеть', en: 'to anticipate' }],
              ['el consumo', { ru: 'расход топлива', en: 'fuel consumption' }],
              ['el combustible', { ru: 'топливо', en: 'fuel' }],
              ['la marcha larga / corta', { ru: 'высокая / низкая передача', en: 'high / low gear' }],
              ['el punto muerto', { ru: 'нейтраль', en: 'neutral' }],
              ['el ralentí', { ru: 'холостой ход', en: 'idle' }],
              ['el catalizador', { ru: 'катализатор', en: 'catalytic converter' }],
              ['la baca', { ru: 'багажник на крыше', en: 'roof rack' }],
              ['el distintivo ambiental', { ru: 'экологическая наклейка', en: 'environmental label' }],
              ['la zona de bajas emisiones', { ru: 'зона низких выбросов', en: 'low-emission zone' }],
              ['el atasco', { ru: 'пробка', en: 'traffic jam' }],
              ['el botiquín', { ru: 'аптечка', en: 'first-aid kit' }],
              ['el Start-Stop', { ru: 'система старт-стоп', en: 'start-stop system' }]
            ]
          }
        ]
      }
    ],
    questions: [
      {
        id: 'ef-01',
        es: 'Antes de un viaje, ¿qué elementos debe llevar obligatoriamente en un turismo?',
        tr: { ru: 'Что обязательно должно быть в легковой перед поездкой?', en: 'Before a trip, what must you carry in a car?' },
        options: [
          { es: 'La señal V-16, un chaleco reflectante y la rueda de repuesto o un kit de reparación.', ru: 'Маячок V-16, светоотражающий жилет и запаска или ремкомплект.', en: 'A V-16 beacon, a reflective vest and a spare wheel or repair kit.' },
          { es: 'Un extintor y una linterna.', ru: 'Огнетушитель и фонарик.', en: 'An extinguisher and a torch.' },
          { es: 'Un botiquín y cadenas, siempre.', ru: 'Аптечку и цепи — всегда.', en: 'A first-aid kit and chains, always.' }
        ],
        answer: 0,
        explain: { ru: 'Обязательно: маячок V-16, жилет, запаска (или ремкомплект). Аптечка и запасные очки — рекомендуются; цепи — зимой в горах.', en: 'Compulsory: V-16 beacon, vest, spare (or kit). A first-aid kit and spare glasses are advisable; chains for winter mountain trips.' },
        hint: { ru: 'Маячок, жилет, колесо.', en: 'Beacon, vest, wheel.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-02',
        es: 'Para un viaje en invierno por montaña, ¿qué es aconsejable?',
        tr: { ru: 'Что стоит сделать для зимней поездки в горы?', en: 'For a winter mountain trip, what is advisable?' },
        options: [
          { es: 'Llevar cadenas, el depósito lleno, ropa de abrigo, agua y comida.', ru: 'Взять цепи, полный бак, тёплую одежду, воду и еду.', en: 'Carry chains, a full tank, warm clothes, water and food.' },
          { es: 'Viajar de noche para encontrar menos tráfico.', ru: 'Ехать ночью — меньше машин.', en: 'Travel at night for less traffic.' },
          { es: 'Llevar poco combustible para pesar menos.', ru: 'Залить мало топлива, чтобы меньше весить.', en: 'Carry little fuel to weigh less.' }
        ],
        answer: 0,
        explain: { ru: 'Зимой: цепи, полный бак (пробка в снегу может длиться часами), тёплые вещи, вода, еда, фонарик; по возможности не ехать ночью.', en: 'In winter: chains, a full tank (a snow jam can last hours), warm clothes, water, food, a torch; avoid night driving if possible.' },
        hint: { ru: 'Зима — полный бак и тёплая куртка.', en: 'Winter — full tank and a warm coat.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-03',
        es: '¿En qué tres principios se basa la conducción preventiva?',
        tr: { ru: 'На каких трёх принципах строится предупредительное вождение?', en: 'Which three principles underpin defensive driving?' },
        options: [
          { es: 'Visión, anticipación y espacio.', ru: 'Обзор, предвидение и пространство.', en: 'Vision, anticipation and space.' },
          { es: 'Velocidad, potencia y frenada.', ru: 'Скорость, мощность и торможение.', en: 'Speed, power and braking.' },
          { es: 'Luces, claxon y retrovisores.', ru: 'Свет, гудок и зеркала.', en: 'Lights, horn and mirrors.' }
        ],
        answer: 0,
        explain: { ru: 'Смотреть далеко и по сторонам, предугадывать действия других, держать пространство вокруг машины.', en: 'Look far and around, predict others’ actions, keep space around the car.' },
        hint: { ru: 'Вижу — предвижу — оставляю место.', en: 'See — predict — leave room.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-04',
        es: '¿Hasta dónde debe mirar hacia delante mientras conduce?',
        tr: { ru: 'Как далеко вперёд смотреть за рулём?', en: 'How far ahead should you look while driving?' },
        options: [
          { es: 'A la zona que recorrerá en los próximos 20 segundos, más lejos cuanto más rápido.', ru: 'Туда, где будете через ~20 секунд; чем быстрее — тем дальше.', en: 'To where you’ll be in about 20 seconds — further the faster you go.' },
          { es: 'Solo al vehículo de delante.', ru: 'Только на машину впереди.', en: 'Only at the car in front.' },
          { es: 'A unos 5 metros.', ru: 'Метров на 5.', en: 'About 5 metres.' }
        ],
        answer: 0,
        explain: { ru: 'Дальний взгляд (~20 секунд пути) позволяет заранее увидеть опасность и обойтись без резких тормозов и рывков.', en: 'Looking far (~20 seconds ahead) shows danger early and avoids harsh braking and jerks.' },
        hint: { ru: 'Смотри туда, где будешь через 20 секунд.', en: 'Look where you’ll be in 20 seconds.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-05',
        es: '¿Qué es el ángulo muerto?',
        tr: { ru: 'Что такое «слепая зона»?', en: 'What is the blind spot?' },
        options: [
          { es: 'La zona junto al vehículo que no se ve en los retrovisores.', ru: 'Зона рядом с машиной, которую не видно в зеркалах.', en: 'The area beside the car not visible in the mirrors.' },
          { es: 'Una curva sin visibilidad.', ru: 'Поворот без обзора.', en: 'A blind bend.' },
          { es: 'La parte del motor que no se refrigera.', ru: 'Часть мотора, которая не охлаждается.', en: 'A part of the engine that isn’t cooled.' }
        ],
        answer: 0,
        explain: { ru: 'Даже правильно настроенные зеркала не показывают зоны сбоку. Перед перестроением — повернуть голову.', en: 'Even well-set mirrors miss areas to the side. Turn your head before changing lanes.' },
        hint: { ru: 'Перестроение — сначала голова.', en: 'Lane change — head check first.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-06',
        es: '¿Cómo puede comprobar que no hay nadie en el ángulo muerto antes de cambiar de carril?',
        tr: { ru: 'Как убедиться, что в слепой зоне никого нет, перед перестроением?', en: 'How can you check the blind spot before changing lanes?' },
        options: [
          { es: 'Girando brevemente la cabeza y mirando por la ventanilla.', ru: 'Коротко повернуть голову и посмотреть в окно.', en: 'Briefly turn your head and look through the window.' },
          { es: 'Tocando el claxon.', ru: 'Посигналить.', en: 'Sound the horn.' },
          { es: 'Mirando solo el retrovisor interior.', ru: 'Посмотреть только в салонное зеркало.', en: 'Look only in the interior mirror.' }
        ],
        answer: 0,
        explain: { ru: 'Короткий взгляд через плечо показывает то, что не видно в зеркалах. Датчик слепых зон — помощник, а не замена.', en: 'A quick shoulder check shows what mirrors miss. A blind-spot monitor helps, it doesn’t replace it.' },
        hint: { ru: 'Зеркала + плечо.', en: 'Mirrors + shoulder.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-07',
        es: '¿Qué separación en tiempo se recomienda con el vehículo de delante en condiciones normales?',
        tr: { ru: 'Какой интервал по времени рекомендуется до впереди идущей машины в обычных условиях?', en: 'What time gap is recommended to the vehicle ahead in normal conditions?' },
        options: [
          { es: 'Dos o tres segundos.', ru: 'Две–три секунды.', en: 'Two or three seconds.' },
          { es: 'Medio segundo.', ru: 'Полсекунды.', en: 'Half a second.' },
          { es: 'Diez segundos.', ru: 'Десять секунд.', en: 'Ten seconds.' }
        ],
        answer: 0,
        explain: { ru: '2–3 секунды; в дождь, снег, туман, ночью или если сзади «висят» — минимум на секунду больше.', en: '2–3 seconds; in rain, snow, fog, at night or if someone tailgates — at least a second more.' },
        hint: { ru: '«Двадцать один, двадцать два, двадцать три».', en: '“One thousand one, two, three.”' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-08',
        es: 'El vehículo de detrás se le acerca demasiado. ¿Qué debe hacer?',
        tr: { ru: 'Машина сзади слишком близко. Что делать?', en: 'The vehicle behind is too close. What should you do?' },
        options: [
          { es: 'Aumentar la distancia con el de delante, señalizar antes y frenar suavemente.', ru: 'Увеличить дистанцию до впереди идущего, сигналить раньше и тормозить плавно.', en: 'Increase the gap ahead, signal earlier and brake gently.' },
          { es: 'Frenar de golpe para que se aleje.', ru: 'Резко затормозить, чтобы отстал.', en: 'Brake suddenly so he backs off.' },
          { es: 'Acelerar mucho.', ru: 'Сильно ускориться.', en: 'Speed up a lot.' }
        ],
        answer: 0,
        explain: { ru: 'Больший запас впереди позволяет тормозить мягко, и тот, кто сзади, успеет среагировать. «Наказывать» торможением — опасно.', en: 'A bigger gap ahead lets you brake gently so the driver behind can react. “Brake-checking” is dangerous.' },
        hint: { ru: 'Сзади тесно — впереди просторно.', en: 'Crowded behind — roomy ahead.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-09',
        es: 'Se detiene en un atasco. ¿Qué distancia es aconsejable dejar con el vehículo de delante?',
        tr: { ru: 'Вы остановились в пробке. Какую дистанцию оставить до впереди стоящей машины?', en: 'You stop in a queue. What gap should you leave to the car in front?' },
        options: [
          { es: 'Al menos dos o tres metros.', ru: 'Не меньше 2–3 метров.', en: 'At least two or three metres.' },
          { es: 'Unos 20 centímetros.', ru: 'Около 20 см.', en: 'About 20 cm.' },
          { es: 'Unos 30 metros.', ru: 'Около 30 м.', en: 'About 30 m.' }
        ],
        answer: 0,
        explain: { ru: '2–3 метра: успеете объехать сломавшуюся машину, предупредить, если она покатится назад, и не врежетесь в неё при ударе сзади. Последний в колонне — 5–6 м и аварийка.', en: '2–3 m: room to pass a stalled car, to warn if it rolls back, and not to be shunted into it. The last in line — 5–6 m and hazards.' },
        hint: { ru: 'Видны шины впереди стоящего — ок.', en: 'See the tyres ahead — OK.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-10',
        es: 'Es el último vehículo de una retención. ¿Qué es aconsejable?',
        tr: { ru: 'Вы последний в заторе. Что лучше сделать?', en: 'You are the last vehicle in a queue. What is advisable?' },
        options: [
          { es: 'Dejar 5 o 6 metros, mantener el freno pisado y encender la señal de emergencia.', ru: 'Оставить 5–6 м, держать тормоз и включить аварийку.', en: 'Leave 5–6 m, keep the brake pressed and switch on the hazards.' },
          { es: 'Pegarse al de delante.', ru: 'Прижаться к впереди стоящему.', en: 'Close up on the car in front.' },
          { es: 'Salir del vehículo.', ru: 'Выйти из машины.', en: 'Get out of the car.' }
        ],
        answer: 0,
        explain: { ru: 'Последнего могут ударить сзади: стоп-сигналы и аварийка предупреждают, а запас 5–6 м даёт место, чтобы не врезаться во впереди стоящего.', en: 'The last car may be hit from behind: brake lights and hazards warn others, and 5–6 m leaves room not to be pushed into the car ahead.' },
        hint: { ru: 'Последний — свети и держи запас.', en: 'Last in line — light up and keep a buffer.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-11',
        es: '¿Cómo debe arrancar el motor para conducir de forma eficiente?',
        tr: { ru: 'Как правильно заводить мотор при экономичной езде?', en: 'How should you start the engine for eco-driving?' },
        options: [
          { es: 'Sin pisar el acelerador e iniciar la marcha enseguida.', ru: 'Не нажимая газ и сразу трогаться.', en: 'Without pressing the throttle, and move off straight away.' },
          { es: 'Acelerando fuerte para calentarlo.', ru: 'С сильным газом, чтобы прогреть.', en: 'Revving hard to warm it up.' },
          { es: 'Dejándolo varios minutos al ralentí.', ru: 'Оставив на несколько минут на холостых.', en: 'Leaving it idling for several minutes.' }
        ],
        answer: 0,
        explain: { ru: 'Современный мотор прогревается на ходу. Заводите без газа и сразу трогайтесь, спокойно первые минуты.', en: 'Modern engines warm up while driving. Start without throttle and move off at once, gently for the first minutes.' },
        hint: { ru: 'Завёл — поехал (спокойно).', en: 'Start — go (gently).' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-12',
        es: '¿En qué marchas consume menos combustible un turismo?',
        tr: { ru: 'На каких передачах легковая расходует меньше топлива?', en: 'In which gears does a car use least fuel?' },
        options: [
          { es: 'En las más largas, como cuarta y quinta.', ru: 'На высоких, например 4-й и 5-й.', en: 'In the highest, such as fourth and fifth.' },
          { es: 'En primera.', ru: 'На первой.', en: 'In first.' },
          { es: 'En punto muerto.', ru: 'На нейтрали.', en: 'In neutral.' }
        ],
        answer: 0,
        explain: { ru: 'На высоких передачах мотор крутится медленнее и тратит меньше. Даже в городе — самая высокая передача, которую позволяет скорость.', en: 'High gears keep revs low and use less fuel. Even in town use the highest gear the speed allows.' },
        hint: { ru: 'Высокая передача — низкий расход.', en: 'High gear — low consumption.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-13',
        es: '¿Cuándo debe cambiar de primera a segunda marcha?',
        tr: { ru: 'Когда переключаться с первой на вторую?', en: 'When should you change from first to second?' },
        options: [
          { es: 'A los pocos segundos de iniciar la marcha.', ru: 'Через несколько секунд после начала движения.', en: 'A few seconds after moving off.' },
          { es: 'Cuando el motor llegue al máximo de revoluciones.', ru: 'Когда мотор раскрутится до максимума.', en: 'When the engine reaches maximum revs.' },
          { es: 'Después de 100 metros.', ru: 'Через 100 метров.', en: 'After 100 metres.' }
        ],
        answer: 0,
        explain: { ru: 'Первая нужна только чтобы тронуться: через пару секунд — на вторую, дальше плавно наращивать.', en: 'First is only to move off: after a couple of seconds into second, then build up smoothly.' },
        hint: { ru: 'Первая — только «сдвинуться».', en: 'First gear — just to get rolling.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-14',
        es: '¿A partir de qué velocidad aproximada aumenta mucho el consumo de un turismo?',
        tr: { ru: 'Примерно с какой скорости сильно растёт расход легковой?', en: 'Above roughly what speed does a car’s fuel use rise sharply?' },
        options: [
          { es: 'A partir de 80 o 90 km/h.', ru: 'После 80–90 км/ч.', en: 'Above 80–90 km/h.' },
          { es: 'A partir de 30 km/h.', ru: 'После 30 км/ч.', en: 'Above 30 km/h.' },
          { es: 'A partir de 150 km/h solamente.', ru: 'Только после 150 км/ч.', en: 'Only above 150 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'Сопротивление воздуха растёт резко: выше 80–90 км/ч расход и выбросы заметно увеличиваются.', en: 'Air resistance climbs fast: above 80–90 km/h fuel use and emissions rise noticeably.' },
        hint: { ru: 'После 90 — платишь ветру.', en: 'Over 90 — you’re paying the wind.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-15',
        es: 'Para reducir la velocidad de forma eficiente, ¿qué debe hacer?',
        tr: { ru: 'Как экономично снижать скорость?', en: 'How do you slow down efficiently?' },
        options: [
          { es: 'Levantar el pie del acelerador y dejar rodar con la marcha puesta.', ru: 'Отпустить газ и катиться на включённой передаче.', en: 'Lift off and roll with a gear engaged.' },
          { es: 'Poner punto muerto y frenar al final.', ru: 'Включить нейтраль и затормозить в конце.', en: 'Select neutral and brake at the end.' },
          { es: 'Frenar fuerte en el último momento.', ru: 'Резко затормозить в последний момент.', en: 'Brake hard at the last moment.' }
        ],
        answer: 0,
        explain: { ru: 'Накатом на передаче современный мотор почти не тратит топливо; на нейтрали он тратит его на холостой ход. Тормозить плавно и заранее.', en: 'Rolling in gear, a modern engine uses almost no fuel; in neutral it burns fuel to idle. Brake early and gently.' },
        hint: { ru: 'Катись на передаче, не на нейтрали.', en: 'Roll in gear, not in neutral.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-16',
        es: '¿Cuándo es aconsejable apagar el motor para ahorrar?',
        tr: { ru: 'Когда лучше заглушить мотор ради экономии?', en: 'When is it worth switching off the engine to save fuel?' },
        options: [
          { es: 'Si va a estar parado más de un minuto.', ru: 'Если стоите дольше минуты.', en: 'If you’ll be stopped for over a minute.' },
          { es: 'En cada semáforo, aunque dure segundos.', ru: 'На каждом светофоре, даже на секунды.', en: 'At every light, even for seconds.' },
          { es: 'Nunca.', ru: 'Никогда.', en: 'Never.' }
        ],
        answer: 0,
        explain: { ru: 'Остановка больше минуты — заглушить. Система Start-Stop делает это сама.', en: 'Stopping over a minute — switch off. A Start-Stop system does it for you.' },
        hint: { ru: 'Больше минуты — выключи.', en: 'Over a minute — switch off.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-17',
        es: '¿Qué hace que un vehículo consuma más combustible?',
        tr: { ru: 'Что увеличивает расход топлива?', en: 'What makes a car use more fuel?' },
        options: [
          { es: 'Llevar la baca puesta y los neumáticos poco inflados.', ru: 'Багажник на крыше и недокачанные шины.', en: 'A roof rack fitted and underinflated tyres.' },
          { es: 'Circular con marchas largas.', ru: 'Езда на высоких передачах.', en: 'Driving in high gears.' },
          { es: 'Mantener una velocidad constante.', ru: 'Ровная скорость.', en: 'Keeping a steady speed.' }
        ],
        answer: 0,
        explain: { ru: 'Расход растёт из-за сопротивления воздуха (багажник, открытые окна, прицеп), плохого состояния (шины, фильтр), города, груза и кондиционера.', en: 'Fuel use rises with drag (roof rack, open windows, trailer), poor condition (tyres, filter), town driving, load and air conditioning.' },
        hint: { ru: 'Ветер, вес и мягкие шины — враги кошелька.', en: 'Wind, weight and soft tyres empty your wallet.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-18',
        es: 'Bajar una pendiente en punto muerto para ahorrar combustible es…',
        tr: { ru: 'Спускаться под гору на нейтрали ради экономии — это…', en: 'Coasting downhill in neutral to save fuel is…' },
        options: [
          { es: 'una falsa medida de ahorro y es peligroso.', ru: '…ложная экономия и опасно.', en: '…a false saving and dangerous.' },
          { es: 'la forma más eficiente de conducir.', ru: '…самый экономичный способ.', en: '…the most efficient way to drive.' },
          { es: 'obligatorio en autovías.', ru: '…обязательно на автовиях.', en: '…compulsory on autovías.' }
        ],
        answer: 0,
        explain: { ru: 'На нейтрали машина менее устойчива, тормоза перегреваются, а мотор тратит топливо на холостой ход. На передаче — и безопаснее, и экономнее.', en: 'In neutral the car is less stable, brakes overheat and the engine burns fuel idling. In gear is both safer and cheaper.' },
        hint: { ru: 'Нейтраль под гору — ни экономии, ни контроля.', en: 'Neutral downhill — no saving, no control.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-19',
        es: 'Para ahorrar combustible a velocidad de carretera, ¿qué es mejor?',
        tr: { ru: 'Что экономичнее на трассе?', en: 'At road speeds, what saves more fuel?' },
        options: [
          { es: 'Llevar las ventanillas cerradas.', ru: 'Ехать с закрытыми окнами.', en: 'Keep the windows closed.' },
          { es: 'Llevar las ventanillas bajadas.', ru: 'Ехать с открытыми окнами.', en: 'Drive with the windows down.' },
          { es: 'Montar una baca vacía.', ru: 'Поставить пустой багажник на крышу.', en: 'Fit an empty roof rack.' }
        ],
        answer: 0,
        explain: { ru: 'Открытые окна и багажник на крыше ухудшают аэродинамику: на скорости машина тратит больше.', en: 'Open windows and roof racks spoil the aerodynamics: at speed the car uses more fuel.' },
        hint: { ru: 'Гладкая машина — экономная машина.', en: 'A sleek car is a thrifty car.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-20',
        es: '¿Por qué no se debe arrancar un vehículo empujándolo cuando la batería está descargada?',
        tr: { ru: 'Почему нельзя заводить машину «с толкача» при разряженном аккумуляторе?', en: 'Why shouldn’t you push-start a car with a flat battery?' },
        options: [
          { es: 'Porque el combustible sin quemar puede dañar el catalizador.', ru: 'Несгоревшее топливо может повредить катализатор.', en: 'Unburnt fuel can damage the catalytic converter.' },
          { es: 'Porque se gasta el embrague.', ru: 'Изнашивается сцепление.', en: 'It wears the clutch.' },
          { es: 'Porque está prohibido empujar coches.', ru: 'Толкать машины запрещено.', en: 'Pushing cars is banned.' }
        ],
        answer: 0,
        explain: { ru: 'Несгоревшее топливо попадает в катализатор (он очищает выхлоп) и разрушает его.', en: 'Unburnt fuel reaches the catalytic converter (which cleans exhaust gases) and destroys it.' },
        hint: { ru: 'Толкач — смерть катализатору.', en: 'Push-start — death to the catalyst.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-21',
        es: '¿Qué función tiene el catalizador?',
        tr: { ru: 'Для чего нужен катализатор?', en: 'What does the catalytic converter do?' },
        options: [
          { es: 'Reducir los gases contaminantes del escape.', ru: 'Снижает вредные выбросы выхлопа.', en: 'Reduces polluting exhaust gases.' },
          { es: 'Aumentar la potencia del motor.', ru: 'Повышает мощность мотора.', en: 'Increases engine power.' },
          { es: 'Enfriar el motor.', ru: 'Охлаждает мотор.', en: 'Cools the engine.' }
        ],
        answer: 0,
        explain: { ru: 'Катализатор в выхлопной системе превращает часть вредных газов в менее опасные.', en: 'The catalytic converter in the exhaust turns some harmful gases into less dangerous ones.' },
        hint: { ru: 'Катализатор — «фильтр» выхлопа.', en: 'The catalyst — the exhaust’s filter.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-22',
        es: '¿Qué temperatura del aire acondicionado se aconseja para no gastar de más?',
        tr: { ru: 'Какую температуру на кондиционере рекомендуют, чтобы не тратить лишнего?', en: 'What A/C temperature is advised to avoid wasting fuel?' },
        options: [
          { es: 'Unos 23–24 °C.', ru: 'Около 23–24 °C.', en: 'About 23–24 °C.' },
          { es: 'Unos 16 °C.', ru: 'Около 16 °C.', en: 'About 16 °C.' },
          { es: 'Lo más frío posible.', ru: 'Как можно холоднее.', en: 'As cold as possible.' }
        ],
        answer: 0,
        explain: { ru: 'Кондиционер увеличивает расход; оптимальная установка — 23–24 °C.', en: 'A/C raises fuel use; the best setting is 23–24 °C.' },
        hint: { ru: '23–24 — «комфорт без перерасхода».', en: '23–24 — comfort without waste.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-23',
        es: '¿Dónde se coloca el distintivo ambiental de la DGT?',
        tr: { ru: 'Куда клеят экологическую наклейку DGT?', en: 'Where does the DGT environmental label go?' },
        options: [
          { es: 'En el parabrisas, en la parte derecha.', ru: 'На лобовое стекло, справа.', en: 'On the windscreen, right side.' },
          { es: 'En la luna trasera.', ru: 'На заднее стекло.', en: 'On the rear window.' },
          { es: 'Junto a la matrícula.', ru: 'Рядом с номером.', en: 'Next to the number plate.' }
        ],
        answer: 0,
        explain: { ru: 'Экологическую наклейку клеят на лобовое стекло справа (на машинах без лобового стекла — на видное место).', en: 'The environmental label goes on the windscreen, right side (on vehicles without one, somewhere visible).' },
        hint: { ru: 'Справа на лобовом — как и ITV.', en: 'Right side of the windscreen — like the ITV.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-24',
        es: '¿Qué es una zona de bajas emisiones?',
        tr: { ru: 'Что такое зона низких выбросов?', en: 'What is a low-emission zone?' },
        options: [
          { es: 'Una zona urbana donde solo pueden entrar vehículos con determinados distintivos ambientales.', ru: 'Городская зона, куда пускают только машины с определёнными экологическими наклейками.', en: 'An urban area that only vehicles with certain environmental labels may enter.' },
          { es: 'Una zona donde está prohibido tocar el claxon.', ru: 'Зона, где нельзя сигналить.', en: 'An area where horns are banned.' },
          { es: 'Una zona de aparcamiento gratuito.', ru: 'Бесплатная парковка.', en: 'A free parking area.' }
        ],
        answer: 0,
        explain: { ru: 'Города создают зоны низких выбросов (ZBE): въезд разрешён только машинам с наклейкой, указанной под знаком зоны.', en: 'Cities create low-emission zones (ZBE): only vehicles with the label shown under the zone sign may enter.' },
        hint: { ru: 'ZBE — «пропуск по наклейке».', en: 'ZBE — a pass by label.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-25',
        es: '¿Qué ventaja pueden tener los vehículos con distintivo «cero emisiones»?',
        tr: { ru: 'Какое преимущество может быть у машин с наклейкой «0 emisiones»?', en: 'What advantage can “zero emissions” label vehicles have?' },
        options: [
          { es: 'Circular por el carril VAO aunque solo viaje el conductor.', ru: 'Ездить по полосе VAO даже с одним водителем.', en: 'Use the VAO lane even with only the driver.' },
          { es: 'Superar los límites de velocidad.', ru: 'Превышать скорость.', en: 'Exceed speed limits.' },
          { es: 'No pasar nunca la ITV.', ru: 'Никогда не проходить ITV.', en: 'Never take the ITV.' }
        ],
        answer: 0,
        explain: { ru: 'Власти могут давать «зелёным» машинам льготы: въезд в зоны, полосу VAO с одним водителем, скидки на парковку.', en: 'Authorities may give “green” vehicles perks: zone access, VAO lanes with only the driver, parking discounts.' },
        hint: { ru: 'Ноль выбросов — плюс привилегии.', en: 'Zero emissions — plus perks.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-26',
        es: '¿Qué hace la función Start-Stop?',
        tr: { ru: 'Что делает функция Start-Stop?', en: 'What does the Start-Stop function do?' },
        options: [
          { es: 'Apaga y enciende el motor automáticamente en las detenciones breves.', ru: 'Автоматически глушит и заводит мотор при коротких остановках.', en: 'Switches the engine off and on automatically during short stops.' },
          { es: 'Frena el vehículo ante un obstáculo.', ru: 'Тормозит перед препятствием.', en: 'Brakes for an obstacle.' },
          { es: 'Limita la velocidad máxima.', ru: 'Ограничивает максимальную скорость.', en: 'Limits top speed.' }
        ],
        answer: 0,
        explain: { ru: 'На светофоре или в пробке Start-Stop глушит мотор, а при отпускании тормоза (или нажатии сцепления) заводит снова — меньше расход и выбросы.', en: 'At lights or in jams Start-Stop stops the engine and restarts it when you release the brake (or press the clutch) — less fuel and emissions.' },
        hint: { ru: 'Стоишь — мотор отдыхает.', en: 'Standing still — the engine rests.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-27',
        es: 'En ciudad se consume más combustible porque…',
        tr: { ru: 'В городе расход выше, потому что…', en: 'In town fuel use is higher because…' },
        options: [
          { es: 'hay más paradas, arranques y cambios de velocidad.', ru: '…больше остановок, разгонов и переключений.', en: '…there are more stops, starts and speed changes.' },
          { es: 'se circula más rápido.', ru: '…ездят быстрее.', en: '…you drive faster.' },
          { es: 'el combustible es de peor calidad.', ru: '…топливо хуже.', en: '…the fuel is poorer.' }
        ],
        answer: 0,
        explain: { ru: 'Постоянные остановки и разгоны тратят много топлива. Короткие поездки лучше пешком или на общественном транспорте; избегайте часов пик.', en: 'Constant stopping and accelerating burns lots of fuel. Walk or take public transport for short trips; avoid rush hour.' },
        hint: { ru: 'Старт-стоп-старт — деньги в трубу.', en: 'Stop-start-stop — money up the exhaust.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-28',
        es: '¿Qué beneficio tiene la conducción eficiente además del ahorro?',
        tr: { ru: 'Какая польза от экономичного вождения, кроме экономии?', en: 'What benefit does eco-driving have besides saving money?' },
        options: [
          { es: 'Más seguridad, menos contaminación y más comodidad.', ru: 'Больше безопасности, меньше загрязнения, больше комфорта.', en: 'More safety, less pollution and more comfort.' },
          { es: 'Llegar siempre antes.', ru: 'Всегда приезжать раньше.', en: 'Always arriving sooner.' },
          { es: 'Poder saltarse los límites.', ru: 'Можно нарушать лимиты.', en: 'Being able to ignore limits.' }
        ],
        answer: 0,
        explain: { ru: 'Плавная предупредительная езда — это и экономия, и безопасность, и чистый воздух, и меньше шума, и спокойнее пассажирам.', en: 'Smooth, anticipatory driving means savings, safety, cleaner air, less noise and calmer passengers.' },
        hint: { ru: 'Плавно — значит и дёшево, и безопасно.', en: 'Smooth means cheap and safe.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-29',
        es: 'Al circular junto a un camión grande, ¿qué debe evitar?',
        tr: { ru: 'Чего избегать, едучи рядом с большим грузовиком?', en: 'Driving near a big lorry, what should you avoid?' },
        options: [
          { es: 'Permanecer mucho tiempo en su ángulo muerto.', ru: 'Долго находиться в его слепой зоне.', en: 'Staying long in its blind spot.' },
          { es: 'Adelantarle cuando sea seguro.', ru: 'Обгонять, когда безопасно.', en: 'Overtaking it when safe.' },
          { es: 'Mantener la distancia de seguridad.', ru: 'Держать дистанцию.', en: 'Keeping a safe distance.' }
        ],
        answer: 0,
        explain: { ru: 'У грузовика большие слепые зоны: если вы не видите его зеркал, он не видит вас. Не задерживайтесь рядом — обгоняйте или отставайте.', en: 'Lorries have big blind spots: if you can’t see its mirrors, it can’t see you. Don’t hang alongside — pass or drop back.' },
        hint: { ru: 'Не видишь его зеркал — он не видит тебя.', en: 'Can’t see his mirrors — he can’t see you.' },
        ref: 'DGT, Manual básico, tema 17'
      },
      {
        id: 'ef-30',
        es: 'Ponerle al vehículo un combustible distinto del que indica el fabricante para ahorrar…',
        tr: { ru: 'Заливать не то топливо, которое указал производитель, ради экономии…', en: 'Using a different fuel from the manufacturer’s to save money…' },
        options: [
          { es: 'puede averiar el motor y es una falsa medida de ahorro.', ru: '…может сломать мотор: это ложная экономия.', en: '…can damage the engine and is a false saving.' },
          { es: 'es una buena idea.', ru: '…хорошая идея.', en: '…is a good idea.' },
          { es: 'es obligatorio en verano.', ru: '…обязательно летом.', en: '…is compulsory in summer.' }
        ],
        answer: 0,
        explain: { ru: 'Неподходящее топливо разрушает двигатель. Ложные «лайфхаки»: не то топливо, нейтраль на спуске, экономия на обслуживании.', en: 'The wrong fuel destroys the engine. False “hacks”: wrong fuel, neutral downhill, skimping on servicing.' },
        hint: { ru: 'Дешёвое топливо — дорогой ремонт.', en: 'Cheap fuel — expensive repair.' },
        ref: 'DGT, Manual básico, tema 17'
      }
    ]
  }
]);
