// DGT · theory, topic 17: preventive and efficient driving. Sources: DGT «Teórica abreviada, lectura fácil» (2025),
// DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-eficiente', level: 'DGT',
    title: { ru: 'Превентивное и экономичное вождение', en: 'Preventive and efficient driving' },
    summary: {
      ru: 'Подготовка к поездке, взгляд вдаль, предвидение и дистанция, экономия топлива, экологические метки DGT и зоны ZBE.',
      en: 'Trip preparation, looking ahead, anticipation and space, saving fuel, DGT environmental labels and low-emission zones.'
    },
    hero: {
      es: 'Conducción <b>preventiva</b> y <b>eficiente</b>',
      sub: { ru: 'Предвидеть опасность и тратить меньше топлива', en: 'Anticipate danger and use less fuel' }
    },
    tabs: [
      { id: 'trip', label: { ru: 'Подготовка', en: 'Preparation' }, blocks: [
        { type: 'rules', heading: { ru: 'Перед поездкой', en: 'Before the trip' }, items: [
          { color: 'purple', title: { ru: 'Что должно быть в машине', en: 'What must be in the car' }, es: 'V-16, chaleco, rueda de repuesto',
            body: { ru: 'Маячок <b>V-16</b>, <b>светоотражающий жилет</b>, <b>запасное колесо</b> (или докатка, ремкомплект). Желательно — аптечка и запасные очки, если вы их носите.',
                    en: 'The <b>V-16</b> beacon, a <b>reflective vest</b>, a <b>spare wheel</b> (or space-saver, repair kit). Advisable: a first-aid kit and spare glasses if you wear them.' } },
          { color: 'purple', title: { ru: 'Маршрут', en: 'The route' }, es: 'planificar la ruta',
            body: { ru: 'Выбрать самый безопасный и удобный путь с учётом ремонтов, погоды и загруженности; заранее запланировать остановки для отдыха.',
                    en: 'Choose the safest, most comfortable route given roadworks, weather and traffic; plan rest stops in advance.' } },
          { color: 'purple', title: { ru: 'Зимой', en: 'In winter' }, es: 'cadenas y depósito lleno',
            body: { ru: 'Цепи, полный бак, тёплая одежда, вода, еда и фонарь; по возможности не ехать ночью.',
                    en: 'Chains, a full tank, warm clothes, water, food and a torch; avoid driving at night if you can.' } }
        ] }
      ] },
      { id: 'preventive', label: { ru: 'Предвидение', en: 'Preventive' }, blocks: [
        { type: 'text', color: 'blue', body: {
          ru: '<b>Превентивное вождение</b> — заранее замечать опасность и успевать на неё реагировать. Три принципа: <b>взгляд</b> (visión), <b>предвидение</b> (anticipación), <b>пространство</b> (espacio).',
          en: '<b>Preventive driving</b> means spotting danger early and having time to react. Three principles: <b>vision</b> (visión), <b>anticipation</b> (anticipación), <b>space</b> (espacio).' } },
        { type: 'rules', heading: { ru: 'Три принципа', en: 'Three principles' }, items: [
          { color: 'blue', label: { ru: 'Взгляд', en: 'Vision' }, title: { ru: 'Смотреть далеко и по сторонам', en: 'Look far and around' }, es: 'mirar a lo lejos',
            body: { ru: 'Смотреть на участок, который вы проедете за следующие <b>20 секунд</b>; чем выше скорость, тем дальше. Часто и коротко поглядывать в зеркала, перед перестроением — повернуть голову: у зеркал есть <b>мёртвые зоны</b>.',
                    en: 'Look at the stretch you will cover in the next <b>20 seconds</b>; the faster you go, the further ahead. Check the mirrors often and briefly; before changing lane turn your head — mirrors have <b>blind spots</b>.' } },
          { color: 'blue', label: { ru: 'Предвидение', en: 'Anticipation' }, title: { ru: 'Угадывать чужие манёвры', en: 'Predict others’ moves' }, es: 'prever',
            body: { ru: 'Скорость по обстановке, нужный свет, заранее показывать манёвры, не задерживаться в мёртвой зоне чужих машин, особенно грузовиков.',
                    en: 'Speed to suit conditions, the right lights, signal manoeuvres early, don’t linger in other vehicles’ blind spots, especially lorries’.' } },
          { color: 'blue', label: { ru: 'Пространство', en: 'Space' }, title: { ru: 'Держать запас со всех сторон', en: 'Keep space all round' }, es: 'distancia de seguridad',
            body: { ru: 'Впереди — <b>2–3 секунды</b>, а в дождь, снег, туман, ночью или если сзади прижимаются — на секунду больше. Если сзади едут слишком близко — увеличьте дистанцию впереди, сигнальте раньше, тормозите мягко.',
                    en: 'Ahead — <b>2–3 seconds</b>; in rain, snow, fog, at night or with a tailgater — one second more. If someone is too close behind, increase the gap ahead, signal earlier and brake gently.' } }
        ] },
        { type: 'table', heading: { ru: 'Дистанции', en: 'Gaps' },
          head: [{ ru: 'Ситуация', en: 'Situation' }, { ru: 'Запас', en: 'Gap' }],
          rows: [
            [{ ru: 'В движении', en: 'Moving' }, { ru: '2–3 секунды', en: '2–3 seconds' }],
            [{ ru: 'Дождь, ночь, туман', en: 'Rain, night, fog' }, { ru: '+1 секунда', en: '+1 second' }],
            [{ ru: 'Стоя в пробке', en: 'Stopped in a queue' }, { ru: '2–3 метра', en: '2–3 metres' }],
            [{ ru: 'Последний в пробке', en: 'Last in the queue' }, { ru: '5–6 метров', en: '5–6 metres' }]
          ] },
        { type: 'text', color: 'blue', body: {
          ru: 'Стоя за машиной, оставляйте <b>2–3 м</b>: успеете объехать её или предупредить, если она покатится назад, и не врежетесь в неё при ударе сзади. Последний в пробке держит 5–6 м, педаль тормоза нажатой, включает аварийку и следит за зеркалом.',
          en: 'When stopped behind a car leave <b>2–3 m</b>: you can drive round it or warn it if it rolls back, and you won’t be pushed into it if hit from behind. The last car in a queue keeps 5–6 m, holds the brake, turns on the hazard lights and watches the mirror.' } }
      ] },
      { id: 'efficient', label: { ru: 'Экономия', en: 'Eco driving' }, blocks: [
        { type: 'text', color: 'teal', body: {
          ru: '<b>Экономичное вождение</b> (conducción eficiente): меньше топлива и выбросов, меньше шума, дешевле обслуживание, удобнее пассажирам — и безопаснее, потому что приёмы те же, что у превентивного вождения.',
          en: '<b>Efficient driving</b> (conducción eficiente): less fuel and emissions, less noise, cheaper upkeep, more comfort — and safer, since the techniques match preventive driving.' } },
        { type: 'triggers', heading: { ru: 'Приёмы', en: 'Techniques' }, items: [
          { num: '1', color: 'teal', title: { ru: 'Пуск и старт', en: 'Starting off' }, phrases: ['arrancar sin acelerar'],
            body: { ru: 'Заводить без газа и сразу трогаться; первые километры — спокойно, пока двигатель не прогреется. Прогрев на месте не нужен.',
                    en: 'Start without pressing the throttle and move off straight away; drive gently for the first kilometres until the engine warms up. No idling to warm up.' } },
          { num: '2', color: 'teal', title: { ru: 'Передачи', en: 'Gears' }, phrases: ['marchas largas', 'pocas revoluciones'],
            body: { ru: 'Первая — только чтобы тронуться, через пару секунд вторая; затем плавно вверх. Меньше всего расход на <b>4-й и 5-й</b>; в городе — самая высокая возможная передача.',
                    en: 'First only to move off, second after a couple of seconds, then up smoothly. Consumption is lowest in <b>4th and 5th</b>; in town use the highest gear you can.' } },
          { num: '3', color: 'teal', title: { ru: 'Скорость', en: 'Speed' }, phrases: ['velocidad constante'],
            body: { ru: 'Ровная скорость без рывков. Выше <b>80–90 км/ч</b> расход и выбросы резко растут.',
                    en: 'A steady speed without bursts. Above <b>80–90 km/h</b> fuel use and emissions rise sharply.' } },
          { num: '4', color: 'teal', title: { ru: 'Торможение', en: 'Slowing down' }, phrases: ['rodar por inercia'],
            body: { ru: 'Отпустить газ и катиться <b>на передаче</b> (двигатель тогда почти не тратит топливо), тормозить мягко. Стоите больше <b>минуты</b> — заглушите двигатель.',
                    en: 'Lift off and roll <b>in gear</b> (the engine then uses almost no fuel), brake gently. Stopped for more than a <b>minute</b>? Switch the engine off.' } }
        ] },
        { type: 'table', heading: { ru: 'Что увеличивает расход', en: 'What raises consumption' },
          head: [{ ru: 'Причина', en: 'Cause' }, { ru: 'Что делать', en: 'What to do' }],
          rows: [
            [{ ru: 'Сопротивление воздуха', en: 'Air resistance' }, { ru: 'без багажника на крыше', en: 'no roof rack' }],
            [{ ru: 'Открытые окна', en: 'Open windows' }, { ru: 'закрыть на скорости', en: 'close them at speed' }],
            [{ ru: 'Низкое давление шин', en: 'Low tyre pressure' }, { ru: 'проверять раз в месяц', en: 'check monthly' }],
            [{ ru: 'Кондиционер', en: 'Air conditioning' }, { ru: '23–24 °C в салоне', en: '23–24 °C inside' }],
            [{ ru: 'Лишний груз', en: 'Extra load' }, { ru: 'возить только нужное', en: 'carry only what’s needed' }],
            [{ ru: 'Город, пробки', en: 'Town, jams' }, { ru: 'транспорт, не в час пик', en: 'public transport, off-peak' }]
          ] },
        { type: 'text', color: 'teal', body: {
          ru: ['<b>Ложная экономия:</b> заливать не то топливо, что указал производитель; спускаться с горы <b>на нейтрали</b> (машина менее устойчива, тормоза перегреваются); экономить на обслуживании.',
               '<b>Start-Stop</b> глушит двигатель на коротких остановках, <b>режим Eco</b> ограничивает мощность. <b>Катализатор</b> уменьшает вредные выбросы; машину с севшим аккумулятором не заводят «с толкача» — несгоревшее топливо испортит катализатор.'],
          en: ['<b>False savings:</b> using a fuel other than the one the maker specifies; going downhill <b>in neutral</b> (the car is less stable and the brakes overheat); skimping on maintenance.',
               '<b>Start-Stop</b> switches the engine off at short stops; <b>Eco mode</b> limits power. The <b>catalytic converter</b> cuts harmful emissions; don’t push-start a car with a flat battery — unburnt fuel ruins the converter.'] } }
      ] },
      { id: 'labels', label: { ru: 'Эко-метки', en: 'Eco labels' }, blocks: [
        { type: 'figure', src: 'img/dgt/eficiente-distintivos.svg',
          alt: { ru: 'Четыре круглые экологические метки DGT: синяя «0 emisiones» (электромобили, подключаемые гибриды с запасом хода на электричестве от 40 км, водород), сине-зелёная ECO (гибриды, подключаемые гибриды до 40 км, газ), зелёная C (бензин Евро 4–6, дизель Евро 6), жёлтая B (бензин Евро 3, дизель Евро 4–5). Без метки — самые старые машины.',
                 en: 'Four round DGT environmental labels: blue “0 emisiones” (electric cars, plug-in hybrids with 40 km or more electric range, hydrogen), blue-green ECO (hybrids, plug-ins under 40 km, gas), green C (petrol Euro 4–6, diesel Euro 6), yellow B (petrol Euro 3, diesel Euro 4–5). No label — the oldest cars.' },
          caption: { ru: 'Экологические метки (distintivos ambientales) по классу в реестре DGT.', en: 'Environmental labels (distintivos ambientales) by class in the DGT register.' } },
        { type: 'rules', heading: { ru: 'Метки и зоны', en: 'Labels and zones' }, items: [
          { color: 'amber', title: { ru: 'Где клеить', en: 'Where it goes' }, es: 'ángulo inferior derecho del parabrisas',
            body: { ru: 'В <b>правом нижнем углу лобового стекла</b>, изнутри; у машин без стекла — на видном месте. Категория A (без метки) — самые загрязняющие машины.',
                    en: 'In the <b>bottom right corner of the windscreen</b>, inside; on vehicles without one, somewhere visible. Category A (no label) covers the most polluting cars.' } },
          { color: 'amber', title: { ru: 'Зоны низких выбросов', en: 'Low-emission zones' }, es: 'zona de bajas emisiones (ZBE)',
            body: { ru: 'Город может пускать в <b>ZBE</b> только машины с определёнными метками; въезд показывает знак <b>R-120</b> с табличкой. Создать их обязаны муниципалитеты с населением <b>больше 50 000</b> жителей и островные территории (Ley 7/2021 об изменении климата, ст. 14.3).',
                    en: 'A town may admit only vehicles with certain labels into a <b>ZBE</b>; the entrance has sign <b>R-120</b> with a panel. Municipalities with <b>more than 50,000</b> inhabitants and island territories must set them up (climate change law 7/2021, art. 14.3).' } },
          { color: 'amber', title: { ru: 'Льготы', en: 'Perks' }, es: 'carril VAO',
            body: { ru: 'Машинам «0 emisiones» могут разрешить полосу <b>VAO</b> (для машин с пассажирами) даже с одним водителем, скидки на парковку и въезд в дни сильного загрязнения.',
                    en: '“0 emisiones” cars may be allowed in the <b>VAO</b> (high-occupancy) lane even with only the driver, plus parking discounts and access on high-pollution days.' } }
        ] },
        { type: 'signs', heading: { ru: 'Знаки', en: 'Signs' }, items: [
          { code: 'R-120', note: { ru: 'Въезд по экологической метке', en: 'Entry by environmental label' } },
          { code: 'S-51b', note: { ru: 'Полоса VAO', en: 'VAO lane' } },
          { code: 'S-105e', note: { ru: 'Зарядная станция', en: 'Charging station' } }
        ] }
      ] },
      { id: 'examples', label: { ru: 'Примеры', en: 'Examples' }, blocks: [
        { type: 'examples', items: [
          { color: 'purple', es: 'Antes de salir, <b>planifica la ruta</b> y los descansos.', ru: 'Перед выездом спланируй маршрут и остановки.', en: 'Before leaving, plan the route and the breaks.' },
          { color: 'blue', es: 'Mira <b>a lo lejos</b>, no solo al coche de delante.', ru: 'Смотри вдаль, а не только на машину впереди.', en: 'Look far ahead, not just at the car in front.' },
          { color: 'blue', es: 'Gira la cabeza para ver el <b>ángulo muerto</b>.', ru: 'Поверни голову, чтобы проверить мёртвую зону.', en: 'Turn your head to check the blind spot.' },
          { color: 'blue', es: 'Deja <b>tres segundos</b> con el vehículo de delante.', ru: 'Держи три секунды до машины впереди.', en: 'Keep three seconds from the vehicle ahead.' },
          { color: 'teal', es: 'Cambia a una <b>marcha más larga</b>.', ru: 'Переключись на более высокую передачу.', en: 'Shift to a higher gear.' },
          { color: 'teal', es: 'Levanta el pie y deja <b>rodar</b> el coche.', ru: 'Отпусти газ и дай машине катиться.', en: 'Lift your foot and let the car roll.' },
          { color: 'teal', es: '<b>Apaga el motor</b> si vas a estar parado más de un minuto.', ru: 'Заглуши двигатель, если стоишь больше минуты.', en: 'Switch off the engine if you will stop for over a minute.' },
          { color: 'teal', es: 'Quita la <b>baca</b>: gasta más combustible.', ru: 'Сними багажник с крыши: с ним больше расход.', en: 'Take off the roof rack: it uses more fuel.' },
          { color: 'amber', es: 'Mi coche tiene la <b>etiqueta ECO</b>.', ru: 'У моей машины метка ECO.', en: 'My car has the ECO label.' },
          { color: 'amber', es: 'Sin etiqueta no puedes entrar en la <b>zona de bajas emisiones</b>.', ru: 'Без метки в зону низких выбросов не въехать.', en: 'Without a label you can’t enter the low-emission zone.' },
          { color: 'amber', es: 'Voy a <b>cargar</b> el coche eléctrico.', ru: 'Я поставлю электромобиль на зарядку.', en: 'I’m going to charge the electric car.' }
        ] },
        { type: 'markers', groups: [
          { color: 'blue', title: { ru: 'Превентивно', en: 'Preventive' }, tags: ['visión', 'anticipación', 'espacio', 'ángulo muerto', 'retrovisor'] },
          { color: 'teal', title: { ru: 'Экономично', en: 'Efficient' }, tags: ['marcha larga', 'revoluciones', 'inercia', 'Start-Stop', 'modo Eco', 'presión de inflado'] },
          { color: 'amber', title: { ru: 'Метки', en: 'Labels' }, tags: ['0 emisiones', 'ECO', 'C', 'B', 'ZBE', 'VAO'] }
        ] }
      ] }
    ],
    quizCount: 20,
    quiz: [
      { es: '¿Qué elementos debe llevar obligatoriamente un turismo en 2026?',
        prompt: { ru: 'Что обязательно должно быть в легковом автомобиле в 2026 году?', en: 'What must a car carry by law in 2026?' },
        options: [
          { es: 'Dispositivo V-16, chaleco reflectante y rueda de repuesto o sistema alternativo.', ru: 'Маячок V-16, светоотражающий жилет и запаска или её замена.', en: 'A V-16 beacon, a reflective vest and a spare wheel or alternative.' },
          { es: 'Dos triángulos, extintor y botiquín.', ru: 'Два треугольника, огнетушитель и аптечка.', en: 'Two triangles, an extinguisher and a first-aid kit.' },
          { es: 'Solo el chaleco reflectante.', ru: 'Только жилет.', en: 'Only the reflective vest.' }
        ], answer: 0,
        explain: { ru: 'Manual I, тема 18 (п. 9): V-16, жилет и запасное колесо (докатка или альтернативная система). Аптечка рекомендуется, огнетушитель обязателен для автобусов и грузовиков тяжелее 3500 кг.',
                   en: 'Manual I, topic 18 (item 9): V-16, vest and spare wheel (space-saver or alternative system). A first-aid kit is advisable; an extinguisher is required for buses and lorries over 3,500 kg.' } },
      { es: '¿En qué consiste la conducción preventiva?',
        prompt: { ru: 'В чём суть превентивного вождения?', en: 'What is preventive driving?' },
        options: [
          { es: 'En conducir siempre por debajo de 50 km/h.', ru: 'Всегда ехать медленнее 50 км/ч.', en: 'Always driving below 50 km/h.' },
          { es: 'En adelantarse a los imprevistos y reaccionar bien ante ellos.', ru: 'Заранее предвидеть неожиданности и правильно на них реагировать.', en: 'Anticipating the unexpected and reacting well to it.' },
          { es: 'En usar el claxon para avisar a los demás.', ru: 'Пользоваться сигналом, чтобы предупреждать других.', en: 'Using the horn to warn others.' }
        ], answer: 1,
        explain: { ru: 'Превентивный водитель собирает информацию, предвидит опасности и приспосабливается к обстановке (учебник DGT, тема 17).',
                   en: 'A preventive driver gathers information, anticipates hazards and adapts to conditions (DGT manual, topic 17).' } },
      { es: '¿En qué tres principios se basa la conducción preventiva?',
        prompt: { ru: 'На каких трёх принципах строится превентивное вождение?', en: 'Which three principles is preventive driving based on?' },
        options: [
          { es: 'Velocidad, potencia y frenada.', ru: 'Скорость, мощность и торможение.', en: 'Speed, power and braking.' },
          { es: 'Luces, claxon e intermitentes.', ru: 'Свет, сигнал и поворотники.', en: 'Lights, horn and indicators.' },
          { es: 'Visión, anticipación y espacio.', ru: 'Взгляд, предвидение и пространство.', en: 'Vision, anticipation and space.' }
        ], answer: 2,
        explain: { ru: 'Учебник DGT, тема 17: visión (смотреть всюду), anticipación (предвидеть чужие манёвры), espacio (держать дистанцию).',
                   en: 'DGT manual, topic 17: visión (look everywhere), anticipación (predict others), espacio (keep your distance).' } },
      { es: '¿Hasta dónde conviene mirar hacia delante cuando conduce?',
        prompt: { ru: 'Насколько далеко вперёд стоит смотреть за рулём?', en: 'How far ahead should you look while driving?' },
        options: [
          { es: 'Hasta el espacio que recorrerá en los próximos 20 segundos.', ru: 'На участок, который проедете за следующие 20 секунд.', en: 'To the stretch you will cover in the next 20 seconds.' },
          { es: 'Solo al vehículo que lleva delante.', ru: 'Только на машину впереди.', en: 'Only at the vehicle in front.' },
          { es: 'A unos 5 metros del capó.', ru: 'Метров на 5 перед капотом.', en: 'About 5 metres beyond the bonnet.' }
        ], answer: 0,
        explain: { ru: 'Взгляд на 20 секунд вперёд даёт время заметить опасность и избежать резких торможений; чем быстрее едете, тем дальше смотрите (учебник DGT, тема 17).',
                   en: 'Looking 20 seconds ahead gives time to spot hazards and avoid harsh braking; the faster you go, the further you look (DGT manual, topic 17).' } },
      { es: '¿Qué son los ángulos muertos?',
        prompt: { ru: 'Что такое мёртвые зоны?', en: 'What are blind spots?' },
        options: [
          { es: 'Curvas sin visibilidad.', ru: 'Повороты без обзора.', en: 'Bends with no visibility.' },
          { es: 'Zonas a los lados del vehículo que no se ven por los retrovisores.', ru: 'Участки сбоку от машины, которые не видны в зеркала.', en: 'Areas beside the car that the mirrors do not show.' },
          { es: 'Zonas de la carretera sin iluminación.', ru: 'Неосвещённые участки дороги.', en: 'Unlit stretches of road.' }
        ], answer: 1,
        explain: { ru: 'Даже правильно настроенные зеркала оставляют зоны по бокам; перед перестроением нужно повернуть голову (учебник DGT, тема 17).',
                   en: 'Even well-adjusted mirrors leave zones at the sides; turn your head before changing lane (DGT manual, topic 17).' } },
      { es: '¿Cómo puede comprobar que no hay nadie en el ángulo muerto antes de cambiar de carril?',
        prompt: { ru: 'Как проверить, что в мёртвой зоне никого нет, перед перестроением?', en: 'How can you check the blind spot is clear before changing lane?' },
        options: [
          { es: 'Tocando el claxon.', ru: 'Посигналив.', en: 'By sounding the horn.' },
          { es: 'Mirando solo el retrovisor interior.', ru: 'Посмотрев только в салонное зеркало.', en: 'By looking only in the interior mirror.' },
          { es: 'Girando la cabeza y mirando por la ventanilla.', ru: 'Повернув голову и посмотрев в боковое окно.', en: 'By turning your head and looking through the side window.' }
        ], answer: 2,
        explain: { ru: 'Короткий взгляд через плечо в окно — единственный надёжный способ; датчик мёртвых зон (BSM) только помогает (учебник DGT, тема 17).',
                   en: 'A quick look over the shoulder through the window is the reliable way; a blind-spot monitor (BSM) only helps (DGT manual, topic 17).' } },
      { es: '¿Con qué frecuencia debe mirar por los retrovisores?',
        prompt: { ru: 'Как часто смотреть в зеркала?', en: 'How often should you check the mirrors?' },
        options: [
          { es: 'Con frecuencia y de forma breve, aunque no vaya a maniobrar.', ru: 'Часто и коротко, даже если не собираетесь маневрировать.', en: 'Often and briefly, even when not about to manoeuvre.' },
          { es: 'Solo antes de adelantar.', ru: 'Только перед обгоном.', en: 'Only before overtaking.' },
          { es: 'Solo al aparcar.', ru: 'Только при парковке.', en: 'Only when parking.' }
        ], answer: 0,
        explain: { ru: 'Зеркала проверяют регулярно, коротким взглядом, чтобы всегда знать обстановку сзади и сбоку (учебник DGT, тема 17).',
                   en: 'Check the mirrors regularly with quick glances so you always know what is behind and beside you (DGT manual, topic 17).' } },
      { es: 'En condiciones normales, ¿qué separación en tiempo se aconseja con el vehículo de delante?',
        prompt: { ru: 'Какой интервал по времени рекомендуют до машины впереди в обычных условиях?', en: 'In normal conditions, what time gap is advised from the vehicle ahead?' },
        options: [
          { es: 'Medio segundo.', ru: 'Полсекунды.', en: 'Half a second.' },
          { es: 'Dos o tres segundos.', ru: 'Две-три секунды.', en: 'Two or three seconds.' },
          { es: 'Diez segundos.', ru: 'Десять секунд.', en: 'Ten seconds.' }
        ], answer: 1,
        explain: { ru: 'Учебник DGT, тема 17: 2–3 секунды; в дождь, снег, туман, ночью или если сзади прижимаются — минимум на секунду больше.',
                   en: 'DGT manual, topic 17: 2–3 seconds; in rain, snow, fog, at night or with a tailgater — at least one second more.' } },
      { es: 'Un vehículo le sigue muy de cerca. ¿Qué es correcto?',
        prompt: { ru: 'За вами едут вплотную. Что правильно?', en: 'A vehicle is following you very closely. Which is correct?' },
        options: [
          { es: 'Frenar de golpe para que se aleje.', ru: 'Резко затормозить, чтобы он отстал.', en: 'Brake sharply to make it back off.' },
          { es: 'Acelerar para alejarse.', ru: 'Разогнаться, чтобы оторваться.', en: 'Speed up to get away.' },
          { es: 'Aumentar la distancia con el de delante y frenar con suavidad.', ru: 'Увеличить дистанцию до машины впереди и тормозить плавно.', en: 'Increase the gap ahead and brake gently.' }
        ], answer: 2,
        explain: { ru: 'Больший запас впереди позволяет не тормозить резко, а ранние сигналы и мягкое торможение дают заднему время среагировать (учебник DGT, тема 17).',
                   en: 'A bigger gap ahead avoids sudden braking, and early signals and gentle braking give the driver behind time to react (DGT manual, topic 17).' } },
      { es: 'Se detiene en un atasco detrás de otro vehículo. ¿Qué distancia conviene dejar?',
        prompt: { ru: 'Вы остановились в пробке за другой машиной. Какое расстояние лучше оставить?', en: 'You stop in a jam behind another vehicle. What gap should you leave?' },
        options: [
          { es: 'Unos 20 centímetros.', ru: 'Сантиметров 20.', en: 'About 20 centimetres.' },
          { es: 'Al menos dos o tres metros.', ru: 'Не меньше 2–3 метров.', en: 'At least two or three metres.' },
          { es: 'Más de 20 metros.', ru: 'Больше 20 метров.', en: 'Over 20 metres.' }
        ], answer: 1,
        explain: { ru: 'Учебник DGT, тема 17: 2–3 м позволяют объехать машину, предупредить её, если она покатится назад, и не врезаться в неё при ударе сзади.',
                   en: 'DGT manual, topic 17: 2–3 m lets you drive round the car, warn it if it rolls back, and avoid being pushed into it if hit from behind.' } },
      { es: 'Es el último vehículo de una retención en autovía. ¿Qué es aconsejable?',
        prompt: { ru: 'Вы последний в пробке на autovía. Что рекомендуется?', en: 'You are the last vehicle in a queue on an autovía. What is advisable?' },
        options: [
          { es: 'Apagar todas las luces.', ru: 'Выключить весь свет.', en: 'Switch off all lights.' },
          { es: 'Salir del coche a avisar a los que llegan.', ru: 'Выйти из машины и предупреждать подъезжающих.', en: 'Get out to warn approaching drivers.' },
          { es: 'Encender las luces de emergencia y mantener el freno pisado.', ru: 'Включить аварийку и держать тормоз нажатым.', en: 'Turn on the hazard lights and keep the brake pressed.' }
        ], answer: 2,
        explain: { ru: 'Аварийка и стоп-сигналы делают вас заметнее; 5–6 м до машины впереди и взгляд в зеркало помогают избежать удара сзади (учебник DGT, тема 17).',
                   en: 'Hazards and brake lights make you more visible; 5–6 m to the car ahead and watching the mirror help avoid a rear-end hit (DGT manual, topic 17).' } },
      { es: '¿Cuál es una ventaja de la conducción eficiente?',
        prompt: { ru: 'Какое преимущество даёт экономичное вождение?', en: 'What is one benefit of efficient driving?' },
        options: [
          { es: 'Se llega siempre antes.', ru: 'Всегда приезжаешь раньше.', en: 'You always arrive sooner.' },
          { es: 'Se gasta menos combustible y aumenta la seguridad.', ru: 'Меньше расход топлива и больше безопасности.', en: 'Less fuel is used and safety improves.' },
          { es: 'Se puede circular sin revisiones.', ru: 'Можно не проходить обслуживание.', en: 'You can skip servicing.' }
        ], answer: 1,
        explain: { ru: 'Экономичное вождение снижает расход, выбросы, шум и затраты, повышает комфорт и безопасность (учебник DGT, тема 17).',
                   en: 'Efficient driving cuts fuel, emissions, noise and costs, and improves comfort and safety (DGT manual, topic 17).' } },
      { es: '¿Cómo se debe arrancar el motor para conducir de forma eficiente?',
        prompt: { ru: 'Как правильно заводить двигатель при экономичном вождении?', en: 'How should you start the engine for efficient driving?' },
        options: [
          { es: 'Sin pisar el acelerador y empezar a circular enseguida.', ru: 'Не нажимая газ и сразу трогаясь.', en: 'Without pressing the throttle, then move off straight away.' },
          { es: 'Pisando a fondo el acelerador.', ru: 'Нажав газ до упора.', en: 'Pressing the throttle fully.' },
          { es: 'Dejándolo varios minutos al ralentí.', ru: 'Дав ему поработать на холостых несколько минут.', en: 'Letting it idle for several minutes.' }
        ], answer: 0,
        explain: { ru: 'Современный двигатель лучше прогревается в движении на малой нагрузке; прогрев на месте только тратит топливо (учебник DGT, тема 17).',
                   en: 'A modern engine warms up best while driving gently; idling just wastes fuel (DGT manual, topic 17).' } },
      { es: '¿Qué ocurre si circula a mucha velocidad con el motor frío?',
        prompt: { ru: 'Что будет, если ехать быстро на холодном двигателе?', en: 'What happens if you drive fast with a cold engine?' },
        options: [
          { es: 'El motor se calienta antes y consume menos.', ru: 'Двигатель быстрее прогреется и будет тратить меньше.', en: 'The engine warms up sooner and uses less.' },
          { es: 'No tiene ningún efecto.', ru: 'Ничего.', en: 'Nothing at all.' },
          { es: 'Aumenta el consumo y el motor se desgasta antes.', ru: 'Растёт расход и двигатель быстрее изнашивается.', en: 'Consumption rises and the engine wears faster.' }
        ], answer: 2,
        explain: { ru: 'Учебник DGT, тема 17: пока двигатель холодный, ехать спокойно — иначе больше расход и износ.',
                   en: 'DGT manual, topic 17: drive gently while the engine is cold — otherwise more fuel and wear.' } },
      { es: '¿En qué marchas consume menos combustible un turismo?',
        prompt: { ru: 'На каких передачах легковой автомобиль тратит меньше топлива?', en: 'In which gears does a car use the least fuel?' },
        options: [
          { es: 'En primera y segunda.', ru: 'На первой и второй.', en: 'In first and second.' },
          { es: 'En cuarta y quinta.', ru: 'На четвёртой и пятой.', en: 'In fourth and fifth.' },
          { es: 'En marcha atrás.', ru: 'На задней.', en: 'In reverse.' }
        ], answer: 1,
        explain: { ru: 'На высоких передачах двигатель работает на низких оборотах — расход минимальный. Первая — только чтобы тронуться (учебник DGT, тема 17).',
                   en: 'High gears keep revs low, so consumption is lowest. First gear is only for moving off (DGT manual, topic 17).' } },
      { es: 'Dentro de poblado, ¿qué marcha es más eficiente?',
        prompt: { ru: 'Какая передача экономичнее в городе?', en: 'In town, which gear is most efficient?' },
        options: [
          { es: 'La más larga posible respetando los límites de velocidad.', ru: 'Самая высокая из возможных при соблюдении лимитов.', en: 'The highest possible while keeping to the limits.' },
          { es: 'Siempre la segunda.', ru: 'Всегда вторая.', en: 'Always second.' },
          { es: 'Punto muerto siempre que se pueda.', ru: 'Нейтраль, когда только можно.', en: 'Neutral whenever possible.' }
        ], answer: 0,
        explain: { ru: 'Учебник DGT, тема 17: в городе ехать на самой высокой возможной передаче, не превышая скорость.',
                   en: 'DGT manual, topic 17: in town use the highest gear possible without exceeding the limit.' } },
      { es: '¿A partir de qué velocidad aproximada aumenta mucho el consumo de combustible?',
        prompt: { ru: 'Примерно с какой скорости расход топлива резко растёт?', en: 'From roughly what speed does fuel consumption rise sharply?' },
        options: [
          { es: 'A partir de 40 km/h.', ru: 'С 40 км/ч.', en: 'From 40 km/h.' },
          { es: 'A partir de 130 km/h.', ru: 'Со 130 км/ч.', en: 'From 130 km/h.' },
          { es: 'A partir de 80 o 90 km/h.', ru: 'С 80–90 км/ч.', en: 'From 80 or 90 km/h.' }
        ], answer: 2,
        explain: { ru: 'Учебник DGT, тема 17: выше 80–90 км/ч сопротивление воздуха растёт, а с ним расход и выбросы.',
                   en: 'DGT manual, topic 17: above 80–90 km/h air resistance grows, and with it fuel use and emissions.' } },
      { es: 'Para reducir la velocidad de forma eficiente, ¿qué debe hacer?',
        prompt: { ru: 'Как экономично снижать скорость?', en: 'How do you slow down efficiently?' },
        options: [
          { es: 'Poner punto muerto y frenar.', ru: 'Поставить нейтраль и тормозить.', en: 'Shift to neutral and brake.' },
          { es: 'Levantar el pie del acelerador y dejar rodar el vehículo con la marcha puesta.', ru: 'Отпустить газ и катиться на включённой передаче.', en: 'Lift off the throttle and roll with the gear engaged.' },
          { es: 'Frenar fuerte en el último momento.', ru: 'Резко тормозить в последний момент.', en: 'Brake hard at the last moment.' }
        ], answer: 1,
        explain: { ru: 'Качение на передаче почти не тратит топливо и тормозит двигателем; нейтраль и резкие торможения — наоборот (учебник DGT, тема 17).',
                   en: 'Rolling in gear uses almost no fuel and gives engine braking; neutral and harsh braking do the opposite (DGT manual, topic 17).' } },
      { es: '¿Cuándo es aconsejable apagar el motor en una detención?',
        prompt: { ru: 'Когда стоит глушить двигатель во время остановки?', en: 'When is it advisable to switch the engine off while stopped?' },
        options: [
          { es: 'Si va a estar parado más de un minuto.', ru: 'Если стоите больше минуты.', en: 'If you will be stopped for over a minute.' },
          { es: 'Nunca, gasta más volver a arrancar.', ru: 'Никогда — повторный пуск дороже.', en: 'Never, restarting uses more.' },
          { es: 'Solo si está parado más de diez minutos.', ru: 'Только если стоите больше десяти минут.', en: 'Only if stopped for over ten minutes.' }
        ], answer: 0,
        explain: { ru: 'Учебник DGT, тема 17: при остановке дольше минуты выгоднее заглушить двигатель. Система Start-Stop делает это сама.',
                   en: 'DGT manual, topic 17: if stopped for more than a minute, switch off. Start-Stop does it automatically.' } },
      { es: '¿Por qué no es eficiente bajar las pendientes en punto muerto?',
        prompt: { ru: 'Почему неправильно спускаться с горы на нейтрали?', en: 'Why is coasting downhill in neutral not efficient?' },
        options: [
          { es: 'Porque está prohibido usar el freno en las bajadas.', ru: 'Потому что на спуске нельзя тормозить.', en: 'Because braking downhill is forbidden.' },
          { es: 'Porque el vehículo pierde estabilidad y hay que abusar de los frenos.', ru: 'Машина менее устойчива, и приходится перегружать тормоза.', en: 'The car loses stability and the brakes are overused.' },
          { es: 'Porque el motor se apaga solo.', ru: 'Потому что двигатель сам глохнет.', en: 'Because the engine stalls by itself.' }
        ], answer: 1,
        explain: { ru: 'Это «ложная экономия»: на нейтрали двигатель всё равно тратит топливо на холостых, машина хуже управляется, а тормоза перегреваются (учебник DGT, тема 17).',
                   en: 'It is a “false saving”: in neutral the engine still burns fuel at idle, the car is harder to control and the brakes overheat (DGT manual, topic 17).' } },
      { es: '¿Qué aumenta el consumo de combustible por resistencia al aire?',
        prompt: { ru: 'Что увеличивает расход из-за сопротивления воздуха?', en: 'What increases fuel use through air resistance?' },
        options: [
          { es: 'Llevar el equipaje en el maletero.', ru: 'Возить багаж в багажнике.', en: 'Carrying luggage in the boot.' },
          { es: 'Llevar las ventanillas cerradas.', ru: 'Ехать с закрытыми окнами.', en: 'Driving with windows closed.' },
          { es: 'Llevar una baca en el techo.', ru: 'Багажник на крыше.', en: 'A roof rack.' }
        ], answer: 2,
        explain: { ru: 'Багажник на крыше, открытые окна, прицеп шире машины увеличивают сопротивление воздуха и расход (учебник DGT, тема 17).',
                   en: 'A roof rack, open windows and a trailer wider than the car increase drag and consumption (DGT manual, topic 17).' } },
      { es: '¿Qué temperatura se recomienda en el interior del vehículo para ahorrar combustible con el aire acondicionado?',
        prompt: { ru: 'Какую температуру в салоне рекомендуют для экономии топлива при кондиционере?', en: 'What cabin temperature is recommended to save fuel with the air-con on?' },
        options: [
          { es: '18 grados.', ru: '18 градусов.', en: '18 degrees.' },
          { es: '23 o 24 grados.', ru: '23–24 градуса.', en: '23 or 24 degrees.' },
          { es: '28 grados.', ru: '28 градусов.', en: '28 degrees.' }
        ], answer: 1,
        explain: { ru: 'Учебник DGT, тема 17: 23–24 °C в салоне. (В теме 14 для борьбы с усталостью в жару советуют 20–23 °C.)',
                   en: 'DGT manual, topic 17: 23–24 °C in the cabin. (Topic 14 suggests 20–23 °C to fight fatigue in hot weather.)' } },
      { es: 'Unos neumáticos con poca presión, ¿cómo afectan al consumo?',
        prompt: { ru: 'Как низкое давление в шинах влияет на расход?', en: 'How does low tyre pressure affect consumption?' },
        options: [
          { es: 'Lo aumentan.', ru: 'Увеличивает его.', en: 'It increases it.' },
          { es: 'Lo reducen.', ru: 'Уменьшает его.', en: 'It reduces it.' },
          { es: 'No influyen.', ru: 'Не влияет.', en: 'It has no effect.' }
        ], answer: 0,
        explain: { ru: 'Спущенная шина сильнее сопротивляется качению: больше расход, перегрев и износ (учебник DGT, темы 5 и 17).',
                   en: 'An underinflated tyre has more rolling resistance: more fuel, heat and wear (DGT manual, topics 5 and 17).' } },
      { es: 'Su coche no arranca porque la batería está descargada. ¿Por qué no debe arrancarlo empujando?',
        prompt: { ru: 'Машина не заводится из-за севшего аккумулятора. Почему нельзя заводить «с толкача»?', en: 'Your car won’t start because the battery is flat. Why shouldn’t you push-start it?' },
        options: [
          { es: 'Porque se rompe el embrague siempre.', ru: 'Потому что всегда ломается сцепление.', en: 'Because the clutch always breaks.' },
          { es: 'Porque está prohibido empujar vehículos.', ru: 'Потому что толкать машины запрещено.', en: 'Because pushing vehicles is forbidden.' },
          { es: 'Porque el combustible sin quemar puede dañar el catalizador.', ru: 'Несгоревшее топливо может повредить катализатор.', en: 'Because unburnt fuel can damage the catalytic converter.' }
        ], answer: 2,
        explain: { ru: 'Учебник DGT, тема 17: при пуске с толкача в катализатор попадает несгоревшее топливо и разрушает его.',
                   en: 'DGT manual, topic 17: push-starting sends unburnt fuel into the catalytic converter and destroys it.' } },
      { es: '¿Qué hace la función Start-Stop?',
        prompt: { ru: 'Что делает функция Start-Stop?', en: 'What does the Start-Stop function do?' },
        options: [
          { es: 'Limita la velocidad máxima.', ru: 'Ограничивает максимальную скорость.', en: 'It limits the top speed.' },
          { es: 'Detiene el motor en las paradas breves y lo arranca al seguir.', ru: 'Глушит двигатель на коротких остановках и заводит при трогании.', en: 'It stops the engine at short stops and restarts it to move on.' },
          { es: 'Frena el vehículo ante un obstáculo.', ru: 'Тормозит перед препятствием.', en: 'It brakes for obstacles.' }
        ], answer: 1,
        explain: { ru: 'На светофоре или в пробке двигатель не работает — нет расхода и выбросов (учебник DGT, тема 17).',
                   en: 'At lights or in a jam the engine is off — no fuel used, no emissions (DGT manual, topic 17).' } },
      { es: '¿Cuántos tipos de distintivo ambiental hay?',
        prompt: { ru: 'Сколько видов экологических меток существует?', en: 'How many types of environmental label are there?' },
        options: [
          { es: 'Cuatro: 0 emisiones, ECO, C y B.', ru: 'Четыре: 0 emisiones, ECO, C и B.', en: 'Four: 0 emisiones, ECO, C and B.' },
          { es: 'Tres: A, B y C.', ru: 'Три: A, B и C.', en: 'Three: A, B and C.' },
          { es: 'Dos: verde y amarillo.', ru: 'Две: зелёная и жёлтая.', en: 'Two: green and yellow.' }
        ], answer: 0,
        explain: { ru: 'Manual I, тема 19 (V-25): метки 0 emisiones, ECO, C и B. Для категории A метки нет.',
                   en: 'Manual I, topic 19 (V-25): labels 0 emisiones, ECO, C and B. There is no label for category A.' } },
      { es: '¿Qué distintivo ambiental corresponde a un turismo híbrido no enchufable?',
        prompt: { ru: 'Какая метка у обычного (неподключаемого) гибрида?', en: 'Which label does a non-plug-in hybrid car get?' },
        options: [
          { es: 'C.', ru: 'C.', en: 'C.' },
          { es: '0 emisiones.', ru: '0 emisiones.', en: '0 emisiones.' },
          { es: 'ECO.', ru: 'ECO.', en: 'ECO.' }
        ], answer: 2,
        explain: { ru: 'ECO получают гибриды (HEV), подключаемые гибриды с электрическим запасом хода меньше 40 км и машины на газе. «0 emisiones» — электромобили и подключаемые гибриды от 40 км.',
                   en: 'ECO goes to hybrids (HEV), plug-ins with under 40 km electric range and gas vehicles. “0 emisiones” is for electric cars and plug-ins with 40 km or more.' } },
      { es: '¿Dónde se coloca el distintivo ambiental en un turismo?',
        prompt: { ru: 'Куда клеят экологическую метку в легковом автомобиле?', en: 'Where does the environmental label go on a car?' },
        options: [
          { es: 'En la luna trasera.', ru: 'На заднее стекло.', en: 'On the rear window.' },
          { es: 'En el ángulo inferior derecho del parabrisas, por dentro.', ru: 'В правый нижний угол лобового стекла, изнутри.', en: 'In the bottom right corner of the windscreen, inside.' },
          { es: 'Junto a la matrícula delantera.', ru: 'Рядом с передним номером.', en: 'Next to the front number plate.' }
        ], answer: 1,
        explain: { ru: 'Manual I, тема 19 (V-25): правый нижний угол лобового стекла, изнутри; без стекла — на видном месте.',
                   en: 'Manual I, topic 19 (V-25): bottom right corner of the windscreen, inside; with no windscreen, somewhere visible.' } },
      { es: '¿Qué es una zona de bajas emisiones (ZBE)?',
        prompt: { ru: 'Что такое зона низких выбросов (ZBE)?', en: 'What is a low-emission zone (ZBE)?' },
        options: [
          { es: 'Una zona donde solo pueden entrar los vehículos con determinados distintivos ambientales.', ru: 'Зона, куда могут въезжать только машины с определёнными экологическими метками.', en: 'An area only vehicles with certain environmental labels may enter.' },
          { es: 'Una zona de aparcamiento gratuito.', ru: 'Зона бесплатной парковки.', en: 'A free parking area.' },
          { es: 'Una carretera con límite de 30 km/h.', ru: 'Дорога с лимитом 30 км/ч.', en: 'A road limited to 30 km/h.' }
        ], answer: 0,
        explain: { ru: 'Город ограничивает въезд по меткам, чтобы улучшить качество воздуха; въезд обозначен знаком R-120 (учебник DGT, тема 17).',
                   en: 'A town restricts entry by label to improve air quality; the entrance is marked by sign R-120 (DGT manual, topic 17).' } },
      { es: '¿Qué indica esta señal?',
        prompt: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Prohibido circular a vehículos eléctricos.', ru: 'Электромобилям въезд запрещён.', en: 'No electric vehicles.' },
          { es: 'Entrada prohibida a vehículos según su distintivo ambiental u otros criterios ambientales.', ru: 'Въезд запрещён машинам в зависимости от их экологической метки или других экологических критериев.', en: 'No entry for vehicles depending on their environmental label or other environmental criteria.' },
          { es: 'Zona de recarga eléctrica.', ru: 'Зона зарядки электромобилей.', en: 'Charging zone.' }
        ], answer: 1, sign: 'R-120',
        explain: { ru: 'R-120 ставят на въезде в зону низких выбросов; табличка под ним говорит, каким меткам въезд разрешён.',
                   en: 'R-120 stands at the entrance to a low-emission zone; the panel below says which labels may enter.' } },
      { es: 'Un turismo con distintivo «0 emisiones» y solo el conductor, ¿puede circular por un carril VAO?',
        prompt: { ru: 'Может ли машина с меткой «0 emisiones» и одним водителем ехать по полосе VAO?', en: 'May a “0 emisiones” car with only the driver use a VAO lane?' },
        options: [
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' },
          { es: 'Solo los domingos.', ru: 'Только по воскресеньям.', en: 'Only on Sundays.' },
          { es: 'Sí, si así lo permite la autoridad competente.', ru: 'Да, если это разрешил ответственный орган.', en: 'Yes, if the competent authority allows it.' }
        ], answer: 2,
        explain: { ru: 'Учебник DGT, тема 17: власти могут разрешить машинам «0 emisiones» полосу VAO даже с одним водителем — это одна из льгот экологической метки.',
                   en: 'DGT manual, topic 17: authorities may let “0 emisiones” cars use VAO lanes even with only the driver — one of the label’s perks.' } }
    ]
  }
]);
