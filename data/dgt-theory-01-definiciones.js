// DGT · theory, topic 01: Definitions. Sources: DGT «Teórica abreviada, lectura fácil» (2025),
// DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-definiciones', level: 'DGT',
    title: { ru: 'Определения', en: 'Definitions' },
    summary: { ru: 'Части дороги, типы дорог, виды транспорта и участники движения — термины из закона.',
               en: 'Parts of the road, road types, kinds of vehicles and road users — the legal terms.' },
    hero: { es: '<b>Definiciones</b> básicas',
            sub: { ru: 'Термины, на которых построены все правила', en: 'The terms every other rule is built on' } },
    tabs: [
      { id: 'road', label: { ru: 'Дорога', en: 'Road' }, blocks: [
        { type: 'text', body: {
          ru: ['<b>Vía</b> — любая улица, дорога или проезд, общественные или частные, по которым ездят транспорт и ходят пешеходы. В экзамене важно точно различать части дороги: вопросы часто ловят на путанице <b>calzada</b> и <b>plataforma</b>.'],
          en: ['A <b>vía</b> is any street, road or track, public or private, used by vehicles and pedestrians. The exam often tests whether you can tell the parts apart — especially <b>calzada</b> and <b>plataforma</b>.'] } },
        { type: 'figure', src: 'img/dgt/definiciones-seccion.svg',
          alt: { ru: 'Схема дороги сверху: тротуар, обочина, две полосы, разделительная полоса, ещё две полосы, обочина, тротуар; скобками показаны calzada и plataforma.',
                 en: 'Road seen from above: pavement, hard shoulder, two lanes, central reservation, two more lanes, hard shoulder, pavement; brackets mark the calzada and the plataforma.' },
          caption: { ru: '<b>Plataforma</b> = calzada + arcenes. <b>Calzada</b> = только полосы для движения. У дороги с <b>mediana</b> две отдельные проезжие части.',
                     en: '<b>Plataforma</b> = calzada + hard shoulders. <b>Calzada</b> = the traffic lanes only. A road with a <b>mediana</b> has two separate carriageways.' } },
        { type: 'rules', heading: { ru: 'Части дороги', en: 'Parts of the road' }, items: [
          { color: 'blue', title: { ru: 'Проезжая часть', en: 'Carriageway' }, es: 'calzada',
            body: { ru: 'Часть дороги для движения транспорта; состоит из полос. Уже 6,5 м — <b>calzada estrecha</b>.',
                    en: 'The part of the road for vehicle traffic; made up of lanes. Under 6.5 m wide it is a <b>calzada estrecha</b>.' } },
          { color: 'blue', title: { ru: 'Полоса', en: 'Lane' }, es: 'carril',
            body: { ru: 'Продольная полоса проезжей части, достаточно широкая для одного ряда автомобилей (не мотоциклов). Уже 3 м — <b>carril estrecho</b>.',
                    en: 'A strip of the carriageway wide enough for one row of cars (not motorcycles). Under 3 m it is a <b>carril estrecho</b>.' } },
          { color: 'amber', title: { ru: 'Обочина', en: 'Hard shoulder' }, es: 'arcén',
            body: { ru: 'Укреплённая полоса рядом с проезжей частью. Автомобили по ней не ездят, кроме исключительных случаев (поломка, экстренная ситуация).',
                    en: 'A paved strip next to the carriageway. Cars do not use it except in exceptional cases (breakdown, emergency).' } },
          { color: 'teal', title: { ru: 'Платформа', en: 'Road platform' }, es: 'plataforma = calzada + arcenes',
            body: { ru: 'Вся зона дороги для транспорта — проезжая часть вместе с обочинами.',
                    en: 'All of the road used by vehicles: the carriageway together with the hard shoulders.' } },
          { color: 'coral', title: { ru: 'Тротуар и зона для пешеходов', en: 'Pavement and pedestrian zone' }, es: 'acera · zona peatonal · refugio',
            body: { ru: '<b>Acera</b> — полоса для пешеходов. <b>Refugio</b> — островок безопасности для пешеходов прямо на проезжей части.',
                    en: '<b>Acera</b> is the strip for pedestrians. A <b>refugio</b> is a pedestrian island in the middle of the carriageway.' } },
          { color: 'purple', title: { ru: 'Разделительная полоса', en: 'Central reservation' }, es: 'mediana',
            body: { ru: 'Полоса между двумя проезжими частями, по которой не ездят.',
                    en: 'The strip between two carriageways that nobody drives on.' } }
        ] },
        { type: 'table', heading: { ru: 'Другие места на дороге', en: 'Other places on the road' },
          head: ['', { ru: 'Что это', en: 'What it is' }],
          rows: [
            ['intersección', { ru: 'перекрёсток в одном уровне', en: 'junction at one level' }],
            ['glorieta', { ru: 'кольцо вокруг островка', en: 'ring around a central island' }],
            ['paso a nivel', { ru: 'ж/д переезд', en: 'railway level crossing' }],
            ['isleta', { ru: 'островок для направления', en: 'traffic island' }],
            ['vía ciclista', { ru: 'путь для велосипедов', en: 'cycle route' }]
          ] },
        { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
          { es: 'Los turismos no circulan por el <b>arcén</b>.', ru: 'Легковые машины не ездят по обочине.', en: 'Cars do not drive on the hard shoulder.' },
          { es: 'Esta <b>calzada</b> tiene tres <b>carriles</b>.', ru: 'У этой проезжей части три полосы.', en: 'This carriageway has three lanes.' },
          { es: 'La <b>plataforma</b> está formada por la calzada y los arcenes.', ru: 'Платформа состоит из проезжей части и обочин.', en: 'The platform is made up of the carriageway and the hard shoulders.' },
          { es: 'Espera en el <b>refugio</b> hasta que el semáforo cambie.', ru: 'Подожди на островке безопасности, пока светофор не переключится.', en: 'Wait on the pedestrian island until the light changes.' }
        ] }
      ] },
      { id: 'roads', label: { ru: 'Типы дорог', en: 'Road types' }, blocks: [
        { type: 'rules', heading: { ru: 'Где проходит дорога', en: 'Where the road runs' }, items: [
          { color: 'teal', title: { ru: 'Населённый пункт', en: 'Built-up area' }, es: 'poblado',
            body: { ru: 'Зона с застройкой, на въезде и выезде из которой стоят знаки начала и конца населённого пункта (S-500, S-510).',
                    en: 'An area with buildings, with entry and exit signs on its roads (S-500, S-510).' } },
          { color: 'teal', title: { ru: 'Городская дорога', en: 'Urban road' }, es: 'vía urbana',
            body: { ru: 'Дорога внутри населённого пункта, <b>кроме</b> travesías.', en: 'A road inside a built-up area, <b>except</b> travesías.' } },
          { color: 'amber', title: { ru: 'Загородная дорога', en: 'Interurban road' }, es: 'vía interurbana',
            body: { ru: 'Дорога вне населённого пункта.', en: 'A road outside built-up areas.' } },
          { color: 'coral', title: { ru: 'Проезд через посёлок', en: 'Through-road' }, es: 'travesía',
            body: { ru: 'Участок загородной дороги (carretera), который проходит через населённый пункт. Если есть объездная, участок travesía не считается.',
                    en: 'A stretch of a main road (carretera) that runs through a built-up area. If a bypass is available, it is not a travesía.' } }
        ] },
        { type: 'rules', heading: { ru: 'Какая это дорога', en: 'What kind of road' }, items: [
          { color: 'blue', title: { ru: 'Автомагистраль', en: 'Motorway' }, es: 'autopista',
            body: { ru: 'Только для автомобилей. Соседние участки <b>не имеют</b> выезда на неё; нет пересечений в одном уровне; отдельная проезжая часть для каждого направления. Может быть платной (<b>de peaje</b>).',
                    en: 'Cars only. Neighbouring properties have <b>no</b> access; no level crossings or junctions; separate carriageways for each direction. May be a toll road (<b>de peaje</b>).' } },
          { color: 'blue', title: { ru: 'Скоростная дорога', en: 'Dual carriageway' }, es: 'autovía',
            body: { ru: 'Как автописта, но у соседних участков <b>ограниченный</b> выезд на неё. Обычно бесплатная.',
                    en: 'Like an autopista, but neighbouring properties have <b>limited</b> access. Usually free.' } },
          { color: 'purple', title: { ru: 'Дорога для автомобилей', en: 'Road for motor cars' }, es: 'vía para automóviles',
            body: { ru: 'Только для автомобилей, <b>одна</b> проезжая часть, выезды с соседних участков полностью закрыты. Знаки S-3 и S-4.',
                    en: 'Cars only, <b>one</b> carriageway, no access at all from neighbouring properties. Signs S-3 and S-4.' } },
          { color: 'amber', title: { ru: 'Обычная дорога', en: 'Conventional road' }, es: 'carretera convencional',
            body: { ru: 'Любая дорога, которая не autopista, не autovía и не vía para automóviles.',
                    en: 'Any road that is not an autopista, autovía or vía para automóviles.' } }
        ] },
        { type: 'signs', heading: { ru: 'Знаки типов дорог', en: 'Road-type signs' }, items: [
          'S-1', 'S-1a', 'S-1b', 'S-1c', 'S-2', 'S-2a', 'S-3', 'S-4',
          { code: 'S-500', note: { ru: 'начало населённого пункта', en: 'start of a built-up area' } },
          { code: 'S-510', note: { ru: 'конец населённого пункта', en: 'end of a built-up area' } }
        ] },
        { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
          { es: 'Para circular por esta <b>autopista de peaje</b> hay que pagar.', ru: 'За проезд по этой платной магистрали нужно платить.', en: 'You have to pay to drive on this toll motorway.' },
          { es: 'La <b>travesía</b> atraviesa el pueblo.', ru: 'Транзитный участок дороги проходит через посёлок.', en: 'The through-road crosses the village.' },
          { es: 'Estamos en una <b>vía interurbana</b>, fuera de poblado.', ru: 'Мы на загородной дороге, вне населённого пункта.', en: 'We are on an interurban road, outside a built-up area.' }
        ] }
      ] },
      { id: 'vehicles', label: { ru: 'Транспорт', en: 'Vehicles' }, blocks: [
        { type: 'text', body: {
          ru: ['Главное деление: <b>vehículo de motor</b> — всё, что движется мотором, <b>кроме</b> мопедов (ciclomotores), трамваев и колясок для людей с ограниченной подвижностью. <b>Automóvil</b> — транспорт с мотором для перевозки людей или грузов, <b>кроме</b> спецтехники (vehículos especiales).'],
          en: ['The key split: a <b>vehículo de motor</b> is anything driven by an engine <b>except</b> mopeds (ciclomotores), trams and vehicles for people with reduced mobility. An <b>automóvil</b> is a motor vehicle for carrying people or goods, <b>except</b> special vehicles (vehículos especiales).'] } },
        { type: 'rules', heading: { ru: 'Главные виды', en: 'Main kinds' }, items: [
          { color: 'blue', title: { ru: 'Легковой автомобиль', en: 'Passenger car' }, es: 'turismo',
            body: { ru: 'Для перевозки людей, минимум 4 колеса, не больше <b>9 мест вместе с водителем</b>.',
                    en: 'For carrying people, at least 4 wheels, no more than <b>9 seats including the driver</b>.' } },
          { color: 'blue', title: { ru: 'Автобус', en: 'Bus or coach' }, es: 'autobús o autocar',
            body: { ru: '<b>Больше 9 мест</b> вместе с водителем; для людей и их багажа. Троллейбус тоже считается автобусом.',
                    en: '<b>More than 9 seats</b> including the driver; for people and their luggage. A trolleybus counts as a bus too.' } },
          { color: 'amber', title: { ru: 'Грузовик и фургон', en: 'Lorry and van' }, es: 'camión · furgón',
            body: { ru: 'Оба для грузов. У <b>camión</b> кабина отдельно от кузова, у <b>furgón/furgoneta</b> кабина и грузовой отсек — единое целое.',
                    en: 'Both carry goods. A <b>camión</b> has a cab separate from the body; in a <b>furgón/furgoneta</b> the cab and the load space are one unit.' } },
          { color: 'coral', title: { ru: 'Мопед', en: 'Moped' }, es: 'ciclomotor',
            body: { ru: '2, 3 или 4 колеса, конструктивная скорость <b>не больше 45 км/ч</b>, двигатель до 50 см³ (или электромотор до 4 кВт).',
                    en: '2, 3 or 4 wheels, design speed <b>no more than 45 km/h</b>, engine up to 50 cc (or an electric motor up to 4 kW).' } },
          { color: 'coral', title: { ru: 'Мотоцикл', en: 'Motorcycle' }, es: 'motocicleta',
            body: { ru: 'Двигатель <b>больше 50 см³</b> и/или скорость <b>больше 45 км/ч</b>. С коляской — motocicleta con sidecar.',
                    en: 'Engine <b>over 50 cc</b> and/or speed <b>over 45 km/h</b>. With a sidecar — motocicleta con sidecar.' } },
          { color: 'teal', title: { ru: 'СИМ (самокат и т. п.)', en: 'Personal mobility vehicle' }, es: 'vehículo de movilidad personal (VMP)',
            body: { ru: 'Одно место, только электромотор, конструктивная скорость <b>от 6 до 25 км/ч</b>. Например, электросамокат (patinete eléctrico).',
                    en: 'One seat, electric motor only, design speed <b>between 6 and 25 km/h</b>. For example, an e-scooter (patinete eléctrico).' } },
          { color: 'purple', title: { ru: 'Спецтехника', en: 'Special vehicle' }, es: 'vehículo especial',
            body: { ru: 'Для определённых работ: трактор, мотоблок (motocultor), строительные и сельхозмашины, квадроцикл quad-ATV.',
                    en: 'Built for specific work: tractor, walking tractor (motocultor), construction and farm machines, quad-ATV.' } },
          { color: 'purple', title: { ru: 'Прицеп и полуприцеп', en: 'Trailer and semi-trailer' }, es: 'remolque · semirremolque',
            body: { ru: 'Прицеп буксируют; полуприцеп частью опирается на тягач (tractocamión). <b>Remolque ligero</b> — разрешённая максимальная масса до 750 кг.',
                    en: 'A trailer is towed; a semi-trailer partly rests on the tractor unit (tractocamión). A <b>remolque ligero</b> has a maximum authorised mass up to 750 kg.' } }
        ] },
        { type: 'table', heading: { ru: 'Цифры, которые спрашивают', en: 'Numbers the exam asks' },
          head: ['', { ru: 'Граница', en: 'Limit' }],
          rows: [
            ['turismo', { ru: 'до 9 мест с водителем', en: 'up to 9 seats with driver' }],
            ['autobús', { ru: 'больше 9 мест', en: 'more than 9 seats' }],
            ['ciclomotor', { ru: '≤ 45 км/ч, ≤ 50 см³', en: '≤ 45 km/h, ≤ 50 cc' }],
            ['motocicleta', { ru: '> 50 см³ и/или > 45 км/ч', en: '> 50 cc and/or > 45 km/h' }],
            ['VMP', { ru: '6–25 км/ч, 1 место', en: '6–25 km/h, 1 seat' }],
            ['remolque ligero', { ru: 'MMA ≤ 750 кг', en: 'MMA ≤ 750 kg' }],
            ['bici con pedaleo asistido', { ru: '≤ 250 Вт, до 25 км/ч', en: '≤ 250 W, up to 25 km/h' }]
          ] },
        { type: 'text', color: 'amber', body: {
          ru: '<b>Велосипед с электроприводом</b> (pedaleo asistido: мотор до 250 Вт, отключается на 25 км/ч или когда перестаёшь крутить педали) — это <b>ciclo</b>, а не мопед и не СИМ.',
          en: 'An <b>e-bike</b> (pedaleo asistido: motor up to 250 W that cuts out at 25 km/h or when you stop pedalling) is a <b>ciclo</b>, not a moped or a PMV.' } },
        { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
          { es: 'Un <b>ciclomotor</b> no puede pasar de 45 km/h.', ru: 'Мопед не может ехать быстрее 45 км/ч.', en: 'A moped cannot go faster than 45 km/h.' },
          { es: 'El <b>patinete eléctrico</b> es un vehículo de movilidad personal.', ru: 'Электросамокат — средство индивидуальной мобильности.', en: 'An e-scooter is a personal mobility vehicle.' },
          { es: 'Mi coche lleva un <b>remolque ligero</b>.', ru: 'Моя машина тянет лёгкий прицеп.', en: 'My car is towing a light trailer.' },
          { es: 'El tractor es un <b>vehículo especial</b>.', ru: 'Трактор — это спецтехника.', en: 'A tractor is a special vehicle.' }
        ] }
      ] },
      { id: 'people', label: { ru: 'Люди и масса', en: 'People, mass' }, blocks: [
        { type: 'rules', heading: { ru: 'Кто есть кто', en: 'Who is who' }, items: [
          { color: 'blue', title: { ru: 'Водитель', en: 'Driver' }, es: 'conductor',
            body: { ru: 'Тот, кто управляет транспортом или ведёт животных. В учебной машине автошколы водитель — <b>инструктор</b> у дополнительных педалей.',
                    en: 'Whoever controls a vehicle or leads animals. In a driving-school car the driver is the <b>instructor</b> at the dual controls.' } },
          { color: 'coral', title: { ru: 'Пешеход', en: 'Pedestrian' }, es: 'peatón',
            body: { ru: 'Идёт пешком. Пешеходы также: кто толкает детскую или инвалидную коляску, ведёт рядом велосипед или двухколёсный мопед, едет шагом в инвалидной коляске (с мотором или без).',
                    en: 'Goes on foot. Also pedestrians: people pushing a pram or wheelchair, walking a bicycle or two-wheeled moped, or moving at walking pace in a wheelchair (motorised or not).' } },
          { color: 'amber', title: { ru: 'Владелец', en: 'Registered keeper' }, es: 'titular del vehículo',
            body: { ru: 'Человек, на которого машина записана в официальном реестре.', en: 'The person in whose name the vehicle is entered in the official register.' } },
          { color: 'amber', title: { ru: 'Постоянный водитель', en: 'Usual driver' }, es: 'conductor habitual',
            body: { ru: 'Тот, кто чаще всего водит машину; его с его согласия сообщает в реестр владелец. Если у владельца нет прав, назначить постоянного водителя <b>обязательно</b>.',
                    en: 'The person who drives the vehicle most often, reported by the keeper with their consent. If the keeper has no licence, naming one is <b>compulsory</b>.' } }
        ] },
        { type: 'rules', heading: { ru: 'Масса', en: 'Mass' }, items: [
          { color: 'teal', title: { ru: 'Снаряжённая масса', en: 'Tare' }, es: 'tara',
            body: { ru: 'Машина с топливом, жидкостями и инструментом, но <b>без</b> людей и груза.', en: 'The vehicle with fuel, fluids and tools, but <b>without</b> people or load.' } },
          { color: 'teal', title: { ru: 'Масса с грузом', en: 'Laden mass' }, es: 'masa en carga',
            body: { ru: 'Фактическая масса машины в данный момент: с грузом, водителем и пассажирами.', en: 'The actual mass right now: with load, driver and passengers.' } },
          { color: 'purple', title: { ru: 'Разрешённая максимальная масса', en: 'Max. authorised mass' }, es: 'MMA',
            body: { ru: 'Максимальная масса с грузом, с которой машине разрешено ездить по дорогам. Многие правила зависят от границы <b>3500 кг</b>.',
                    en: 'The highest laden mass at which the vehicle may be used on public roads. Many rules depend on the <b>3,500 kg</b> line.' } }
        ] },
        { type: 'table', heading: { ru: 'Категории по назначению', en: 'Categories by use' },
          head: [{ ru: 'Категория', en: 'Category' }, { ru: 'Для чего', en: 'What for' }],
          rows: [
            ['M', { ru: 'люди и багаж', en: 'people and luggage' }],
            ['N', { ru: 'грузы', en: 'goods' }],
            ['O', { ru: 'прицепы', en: 'trailers' }]
          ] },
        { type: 'text', color: 'coral', body: {
          ru: '<b>Уязвимые участники движения</b> (usuarios vulnerables): пешеходы (особенно дети, пожилые, люди с инвалидностью), велосипедисты, водители СИМ, водители и пассажиры мотоциклов и мопедов.',
          en: '<b>Vulnerable road users</b> (usuarios vulnerables): pedestrians (especially children, older people, disabled people), cyclists, PMV riders, and riders and passengers of motorcycles and mopeds.' } },
        { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
          { es: 'El <b>titular</b> del coche es mi padre.', ru: 'Машина записана на моего отца.', en: 'The car is registered to my father.' },
          { es: 'Si empujas la bici a pie, eres <b>peatón</b>.', ru: 'Если ведёшь велосипед рядом, ты пешеход.', en: 'If you push your bike on foot, you are a pedestrian.' },
          { es: 'La <b>MMA</b> de esta furgoneta es de 3.500 kilos.', ru: 'Разрешённая максимальная масса этого фургона — 3500 кг.', en: 'This van has a maximum authorised mass of 3,500 kg.' }
        ] }
      ] }
    ],
    quizCount: 20,
    quiz: [
      { es: '¿Cuántas plazas puede tener como máximo un turismo?',
        prompt: { ru: 'Сколько мест максимум может быть у легкового автомобиля (turismo)?', en: 'What is the maximum number of seats in a passenger car (turismo)?' },
        options: [
          { es: 'Nueve, incluida la del conductor.', ru: 'Девять, включая место водителя.', en: 'Nine, including the driver’s seat.' },
          { es: 'Siete, sin contar la del conductor.', ru: 'Семь, не считая места водителя.', en: 'Seven, not counting the driver’s seat.' },
          { es: 'Doce, incluida la del conductor.', ru: 'Двенадцать, включая место водителя.', en: 'Twelve, including the driver’s seat.' }
        ], answer: 0,
        explain: { ru: 'Turismo — до 8 пассажирских мест плюс водитель, то есть 9 всего (LSV, приложение I, п. 15).', en: 'A turismo has up to 8 passenger seats plus the driver, 9 in total (LSV, Annex I, item 15).' } },
      { es: '¿Qué vehículo tiene más de nueve plazas, incluida la del conductor?',
        prompt: { ru: 'У какого транспорта больше девяти мест вместе с водителем?', en: 'Which vehicle has more than nine seats including the driver’s?' },
        options: [
          { es: 'El vehículo mixto adaptable.', ru: 'Грузопассажирский трансформер (mixto adaptable).', en: 'The convertible mixed-use vehicle (mixto adaptable).' },
          { es: 'El autobús o autocar.', ru: 'Автобус.', en: 'The bus or coach.' },
          { es: 'El turismo.', ru: 'Легковой автомобиль.', en: 'The passenger car.' }
        ], answer: 1,
        explain: { ru: 'Автобус — больше 9 мест вместе с водителем; у mixto adaptable и turismo максимум 9 (LSV, прил. I, пп. 15, 16, 19).', en: 'A bus has more than 9 seats including the driver; a mixto adaptable and a turismo have at most 9 (LSV, Annex I, items 15, 16, 19).' } },
      { es: '¿Cuál es la velocidad máxima por construcción de un ciclomotor?',
        prompt: { ru: 'Какова конструктивная максимальная скорость мопеда (ciclomotor)?', en: 'What is the maximum design speed of a moped (ciclomotor)?' },
        options: [
          { es: '25 km/h.', ru: '25 км/ч.', en: '25 km/h.' },
          { es: '50 km/h.', ru: '50 км/ч.', en: '50 km/h.' },
          { es: '45 km/h.', ru: '45 км/ч.', en: '45 km/h.' }
        ], answer: 2,
        explain: { ru: 'Мопед — не больше 45 км/ч по конструкции. 25 км/ч — верхняя граница для СИМ, 50 — это объём двигателя в см³ (LSV, прил. I, п. 9).', en: 'A moped’s design speed is at most 45 km/h. 25 km/h is the PMV limit and 50 is the engine size in cc (LSV, Annex I, item 9).' } },
      { es: 'Una moto de gasolina con un motor de 125 cm³, ¿qué vehículo es?',
        prompt: { ru: 'Бензиновый мотоцикл с двигателем 125 см³ — это какой транспорт?', en: 'A petrol two-wheeler with a 125 cc engine — what kind of vehicle is it?' },
        options: [
          { es: 'Una motocicleta.', ru: 'Мотоцикл.', en: 'A motorcycle.' },
          { es: 'Un ciclomotor.', ru: 'Мопед.', en: 'A moped.' },
          { es: 'Un vehículo de movilidad personal.', ru: 'Средство индивидуальной мобильности.', en: 'A personal mobility vehicle.' }
        ], answer: 0,
        explain: { ru: 'Больше 50 см³ — уже motocicleta, даже если скорость невысокая (LSV, прил. I, п. 14).', en: 'Over 50 cc makes it a motocicleta, whatever its speed (LSV, Annex I, item 14).' } },
      { es: '¿Entre qué velocidades por diseño está un vehículo de movilidad personal?',
        prompt: { ru: 'В каком диапазоне конструктивной скорости находится средство индивидуальной мобильности (VMP)?', en: 'What is the design-speed range of a personal mobility vehicle (VMP)?' },
        options: [
          { es: 'Entre 10 y 45 km/h.', ru: 'От 10 до 45 км/ч.', en: 'Between 10 and 45 km/h.' },
          { es: 'Entre 6 y 25 km/h.', ru: 'От 6 до 25 км/ч.', en: 'Between 6 and 25 km/h.' },
          { es: 'Hasta 30 km/h.', ru: 'До 30 км/ч.', en: 'Up to 30 km/h.' }
        ], answer: 1,
        explain: { ru: 'VMP — одно место, электромотор, 6–25 км/ч по конструкции (Manual I DGT, тема 2; RGVeh, прил. II).', en: 'A VMP has one seat, an electric motor and a design speed of 6–25 km/h (DGT Manual I, topic 2; RGVeh, Annex II).' } },
      { es: '¿Cuántas personas pueden ir en un patinete eléctrico?',
        prompt: { ru: 'Сколько человек может ехать на электросамокате?', en: 'How many people may ride an e-scooter?' },
        options: [
          { es: 'Dos, si el pasajero lleva casco.', ru: 'Двое, если пассажир в шлеме.', en: 'Two, if the passenger wears a helmet.' },
          { es: 'Dos, si el pasajero es menor de 12 años.', ru: 'Двое, если пассажиру меньше 12 лет.', en: 'Two, if the passenger is under 12.' },
          { es: 'Solo una.', ru: 'Только один.', en: 'Only one.' }
        ], answer: 2,
        explain: { ru: 'У VMP по определению одно место — пассажиров возить нельзя (Manual I DGT, тема 2).', en: 'By definition a VMP has a single seat, so no passengers (DGT Manual I, topic 2).' } },
      { es: '¿Qué masa máxima autorizada puede tener un remolque ligero?',
        prompt: { ru: 'Какая разрешённая максимальная масса может быть у лёгкого прицепа?', en: 'What is the maximum authorised mass of a light trailer?' },
        options: [
          { es: 'Hasta 750 kilos.', ru: 'До 750 кг.', en: 'Up to 750 kg.' },
          { es: 'Hasta 1.500 kilos.', ru: 'До 1500 кг.', en: 'Up to 1,500 kg.' },
          { es: 'Hasta 3.500 kilos.', ru: 'До 3500 кг.', en: 'Up to 3,500 kg.' }
        ], answer: 0,
        explain: { ru: 'Remolque ligero — MMA не больше 750 кг (LSV, прил. I, п. 21). 3500 кг — граница для других правил.', en: 'A remolque ligero has an MMA of no more than 750 kg (LSV, Annex I, item 21). 3,500 kg is the line for other rules.' } },
      { es: '¿Es un ciclomotor un vehículo de motor?',
        prompt: { ru: 'Считается ли мопед «vehículo de motor»?', en: 'Is a moped a «vehículo de motor»?' },
        options: [
          { es: 'Sí, porque tiene motor.', ru: 'Да, ведь у него есть мотор.', en: 'Yes, because it has an engine.' },
          { es: 'No, la ley lo excluye de esa definición.', ru: 'Нет, закон исключает его из этого определения.', en: 'No, the law excludes it from that definition.' },
          { es: 'Solo si tiene cuatro ruedas.', ru: 'Только если у него четыре колеса.', en: 'Only if it has four wheels.' }
        ], answer: 1,
        explain: { ru: 'Из «vehículo de motor» исключены мопеды, трамваи и коляски для людей с ограниченной подвижностью (LSV, прил. I, п. 12).', en: 'Mopeds, trams and vehicles for people with reduced mobility are excluded from «vehículo de motor» (LSV, Annex I, item 12).' } },
      { es: 'Un tractor agrícola, ¿es un automóvil?',
        prompt: { ru: 'Сельскохозяйственный трактор — это automóvil?', en: 'Is a farm tractor an automóvil?' },
        options: [
          { es: 'Sí, porque transporta cosas.', ru: 'Да, ведь он перевозит грузы.', en: 'Yes, because it carries things.' },
          { es: 'Sí, si su MMA supera 3.500 kilos.', ru: 'Да, если его MMA больше 3500 кг.', en: 'Yes, if its MMA is over 3,500 kg.' },
          { es: 'No, es un vehículo especial.', ru: 'Нет, это спецтехника (vehículo especial).', en: 'No, it is a special vehicle.' }
        ], answer: 2,
        explain: { ru: 'Automóvil не включает vehículos especiales, а трактор — спецтехника (LSV, прил. I, пп. 13, 28).', en: 'Automóvil excludes vehículos especiales, and a tractor is one (LSV, Annex I, items 13, 28).' } },
      { es: 'Una persona que va andando y empuja su bicicleta, ¿qué es?',
        prompt: { ru: 'Человек идёт пешком и ведёт рядом свой велосипед. Кем он считается?', en: 'Someone is walking and pushing their bicycle. What are they?' },
        options: [
          { es: 'Un peatón.', ru: 'Пешеходом.', en: 'A pedestrian.' },
          { es: 'Un conductor.', ru: 'Водителем.', en: 'A driver.' },
          { es: 'Un ciclista.', ru: 'Велосипедистом.', en: 'A cyclist.' }
        ], answer: 0,
        explain: { ru: 'Кто ведёт пешком велосипед или двухколёсный мопед — пешеход (LSV, прил. I, п. 4).', en: 'Anyone walking a bicycle or two-wheeled moped is a pedestrian (LSV, Annex I, item 4).' } },
      { es: 'Una persona que circula al paso en una silla de ruedas con motor, ¿qué es?',
        prompt: { ru: 'Человек едет шагом в инвалидной коляске с мотором. Кем он считается?', en: 'Someone moves at walking pace in a motorised wheelchair. What are they?' },
        options: [
          { es: 'Conductor de un ciclomotor.', ru: 'Водителем мопеда.', en: 'A moped rider.' },
          { es: 'Conductor de un vehículo de movilidad personal.', ru: 'Водителем СИМ.', en: 'A PMV rider.' },
          { es: 'Peatón.', ru: 'Пешеходом.', en: 'A pedestrian.' }
        ], answer: 2,
        explain: { ru: 'Люди в инвалидной коляске, которые едут шагом, с мотором или без, — пешеходы (LSV, прил. I, п. 4).', en: 'People in a wheelchair at walking pace, motorised or not, are pedestrians (LSV, Annex I, item 4).' } },
      { es: 'En un coche de autoescuela durante una clase, ¿quién es el conductor?',
        prompt: { ru: 'Кто считается водителем учебной машины автошколы во время урока?', en: 'In a driving-school car during a lesson, who is the driver?' },
        options: [
          { es: 'El alumno que lleva el volante.', ru: 'Ученик за рулём.', en: 'The learner at the wheel.' },
          { es: 'La persona que está a cargo de los mandos adicionales.', ru: 'Тот, кто отвечает за дополнительные педали (инструктор).', en: 'The person in charge of the dual controls.' },
          { es: 'El titular del vehículo.', ru: 'Владелец машины.', en: 'The registered keeper.' }
        ], answer: 1,
        explain: { ru: 'При обучении водителем считается человек у дополнительных органов управления (LSV, прил. I, п. 1).', en: 'During training, the person at the additional controls is legally the driver (LSV, Annex I, item 1).' } },
      { es: '¿Quién es el titular de un vehículo?',
        prompt: { ru: 'Кто такой titular (владелец) транспортного средства?', en: 'Who is the titular (registered keeper) of a vehicle?' },
        options: [
          { es: 'La persona que lo conduce más a menudo.', ru: 'Тот, кто водит его чаще всех.', en: 'Whoever drives it most often.' },
          { es: 'La persona que lo ha pagado.', ru: 'Тот, кто за него заплатил.', en: 'Whoever paid for it.' },
          { es: 'La persona a cuyo nombre está inscrito en el registro.', ru: 'Тот, на кого машина записана в реестре.', en: 'The person in whose name it is entered in the register.' }
        ], answer: 2,
        explain: { ru: 'Titular — человек, на которого машина записана в официальном реестре; кто водит чаще всех — conductor habitual (LSV, прил. I, пп. 2, 5).', en: 'The titular is the person in whose name it is registered; whoever drives it most is the conductor habitual (LSV, Annex I, items 2, 5).' } },
      { es: '¿Cuándo es obligatorio designar un conductor habitual?',
        prompt: { ru: 'Когда обязательно назначить постоянного водителя (conductor habitual)?', en: 'When must a usual driver (conductor habitual) be named?' },
        options: [
          { es: 'Cuando el titular que matricula el vehículo no tiene permiso de conducir.', ru: 'Когда владелец, регистрирующий машину, не имеет прав.', en: 'When the keeper registering the vehicle has no driving licence.' },
          { es: 'Siempre que el vehículo tenga más de diez años.', ru: 'Всегда, если машине больше десяти лет.', en: 'Whenever the vehicle is more than ten years old.' },
          { es: 'Nunca, es voluntario.', ru: 'Никогда, это добровольно.', en: 'Never, it is voluntary.' }
        ], answer: 0,
        explain: { ru: 'Если машину регистрирует человек без водительского удостоверения, назначить conductor habitual обязательно (LSV, прил. I, п. 2).', en: 'If someone without a licence registers the vehicle, naming a conductor habitual is compulsory (LSV, Annex I, item 2).' } },
      { es: '¿Qué es la tara de un vehículo?',
        prompt: { ru: 'Что такое tara (снаряжённая масса) машины?', en: 'What is a vehicle’s tara (tare)?' },
        options: [
          { es: 'Su masa con la carga máxima permitida.', ru: 'Масса с максимально разрешённым грузом.', en: 'Its mass with the maximum load allowed.' },
          { es: 'Su masa sin personas ni carga, con combustible y accesorios.', ru: 'Масса без людей и груза, но с топливом и принадлежностями.', en: 'Its mass without people or load, but with fuel and accessories.' },
          { es: 'La masa que soporta cada eje.', ru: 'Масса, приходящаяся на каждую ось.', en: 'The mass carried by each axle.' }
        ], answer: 1,
        explain: { ru: 'Tara — машина с топливом, жидкостями, инструментом, без водителя, пассажиров и груза (LSV, прил. I, п. 35). С грузом — это MMA или masa en carga.', en: 'Tara is the vehicle with fuel, fluids and tools, without driver, passengers or load (LSV, Annex I, item 35). With load it is the MMA or masa en carga.' } },
      { es: '¿Qué es la masa máxima autorizada (MMA)?',
        prompt: { ru: 'Что такое разрешённая максимальная масса (MMA)?', en: 'What is the maximum authorised mass (MMA)?' },
        options: [
          { es: 'La masa del vehículo vacío.', ru: 'Масса пустой машины.', en: 'The mass of the empty vehicle.' },
          { es: 'La masa real del vehículo en este momento.', ru: 'Фактическая масса машины в данный момент.', en: 'The vehicle’s actual mass right now.' },
          { es: 'La masa máxima con carga con la que puede circular por vías públicas.', ru: 'Наибольшая масса с грузом, с которой можно ездить по дорогам общего пользования.', en: 'The highest laden mass at which it may be used on public roads.' }
        ], answer: 2,
        explain: { ru: 'MMA — предел массы с грузом для движения по дорогам (LSV, прил. I, п. 37). Фактическая масса — masa en carga, пустая — tara.', en: 'MMA is the laden-mass limit for driving on public roads (LSV, Annex I, item 37). The actual mass is masa en carga; empty is tara.' } },
      { es: 'La masa efectiva del vehículo con su carga, conductor y pasajeros se llama...',
        prompt: { ru: 'Фактическая масса машины вместе с грузом, водителем и пассажирами называется…', en: 'The actual mass of the vehicle with its load, driver and passengers is called…' },
        options: [
          { es: 'Masa en carga.', ru: 'Masa en carga (масса с грузом).', en: 'Masa en carga (laden mass).' },
          { es: 'Tara.', ru: 'Tara (снаряжённая масса).', en: 'Tara (tare).' },
          { es: 'Masa por eje.', ru: 'Masa por eje (нагрузка на ось).', en: 'Masa por eje (axle load).' }
        ], answer: 0,
        explain: { ru: 'Masa en carga — фактическая масса вместе с грузом и людьми (LSV, прил. I, п. 36).', en: 'Masa en carga is the actual mass including load and people (LSV, Annex I, item 36).' } },
      { es: '¿Qué forman la calzada y los arcenes juntos?',
        prompt: { ru: 'Что вместе образуют проезжая часть и обочины?', en: 'What do the carriageway and the hard shoulders form together?' },
        options: [
          { es: 'El carril.', ru: 'Полосу (carril).', en: 'The lane (carril).' },
          { es: 'La plataforma.', ru: 'Платформу (plataforma).', en: 'The platform (plataforma).' },
          { es: 'La mediana.', ru: 'Разделительную полосу (mediana).', en: 'The central reservation (mediana).' }
        ], answer: 1,
        explain: { ru: 'Plataforma = calzada + arcenes (LSV, прил. I, п. 54). Carril — часть calzada, mediana — между проезжими частями.', en: 'Plataforma = calzada + arcenes (LSV, Annex I, item 54). A carril is part of the calzada; the mediana lies between carriageways.' } },
      { es: '¿Para qué debe ser suficientemente ancho un carril?',
        prompt: { ru: 'Для чего должна быть достаточно широкой полоса движения (carril)?', en: 'What must a lane (carril) be wide enough for?' },
        options: [
          { es: 'Para que circulen dos turismos en paralelo.', ru: 'Чтобы рядом ехали две легковые машины.', en: 'For two cars side by side.' },
          { es: 'Para que circule una fila de motocicletas.', ru: 'Чтобы ехал ряд мотоциклов.', en: 'For one row of motorcycles.' },
          { es: 'Para que circule una fila de automóviles que no sean motocicletas.', ru: 'Чтобы ехал один ряд автомобилей (не мотоциклов).', en: 'For one row of motor vehicles other than motorcycles.' }
        ], answer: 2,
        explain: { ru: 'Carril — полоса шириной на один ряд автомобилей, не считая мотоциклов (LSV, прил. I, п. 56).', en: 'A carril is wide enough for one row of motor vehicles other than motorcycles (LSV, Annex I, item 56).' } },
      { es: '¿Puede un turismo circular por el arcén?',
        prompt: { ru: 'Может ли легковой автомобиль ехать по обочине?', en: 'May a car drive on the hard shoulder?' },
        options: [
          { es: 'Sí, si va más lento que el resto.', ru: 'Да, если он едет медленнее остальных.', en: 'Yes, if it is slower than the rest.' },
          { es: 'Solo en circunstancias excepcionales, como una emergencia.', ru: 'Только в исключительных случаях, например при экстренной ситуации.', en: 'Only in exceptional circumstances, such as an emergency.' },
          { es: 'Sí, para adelantar por la derecha.', ru: 'Да, чтобы обогнать справа.', en: 'Yes, to overtake on the right.' }
        ], answer: 1,
        explain: { ru: 'Arcén не предназначен для автомобилей, кроме исключительных обстоятельств (LSV, прил. I, п. 61; RGC, ст. 30–31).', en: 'The arcén is not for motor cars except in exceptional circumstances (LSV, Annex I, item 61; RGC arts. 30–31).' } },
      { es: '¿Qué es una travesía?',
        prompt: { ru: 'Что такое travesía?', en: 'What is a travesía?' },
        options: [
          { es: 'Un tramo de carretera que pasa por un poblado.', ru: 'Участок загородной дороги, проходящий через населённый пункт.', en: 'A stretch of main road running through a built-up area.' },
          { es: 'Una calle peatonal del centro.', ru: 'Пешеходная улица в центре.', en: 'A pedestrian street in the centre.' },
          { es: 'Una vía de servicio paralela a la autopista.', ru: 'Дублёр вдоль автомагистрали.', en: 'A service road alongside a motorway.' }
        ], answer: 0,
        explain: { ru: 'Travesía — участок carretera, идущий через poblado; если есть объездная, это не travesía (LSV, прил. I, п. 71).', en: 'A travesía is a stretch of carretera running through a poblado; if a bypass exists it is not one (LSV, Annex I, item 71).' } },
      { es: '¿Qué es una vía urbana?',
        prompt: { ru: 'Что такое vía urbana?', en: 'What is a vía urbana?' },
        options: [
          { es: 'Cualquier vía con aceras.', ru: 'Любая дорога с тротуарами.', en: 'Any road with pavements.' },
          { es: 'La vía situada dentro de poblado, excepto las travesías.', ru: 'Дорога внутри населённого пункта, кроме travesías.', en: 'A road inside a built-up area, except travesías.' },
          { es: 'La vía situada fuera de poblado.', ru: 'Дорога вне населённого пункта.', en: 'A road outside a built-up area.' }
        ], answer: 1,
        explain: { ru: 'Vía urbana — внутри poblado, но travesías сюда не входят; вне poblado — vía interurbana (LSV, прил. I, пп. 72–73).', en: 'A vía urbana is inside a poblado, travesías excluded; outside it is a vía interurbana (LSV, Annex I, items 72–73).' } },
      { es: '¿En qué se diferencia una autovía de una autopista?',
        prompt: { ru: 'Чем autovía отличается от autopista?', en: 'How does an autovía differ from an autopista?' },
        options: [
          { es: 'La autovía tiene una sola calzada.', ru: 'У autovía одна проезжая часть.', en: 'The autovía has a single carriageway.' },
          { es: 'En la autovía hay cruces a nivel con otras vías.', ru: 'На autovía есть пересечения в одном уровне.', en: 'The autovía has level junctions with other roads.' },
          { es: 'En la autovía las propiedades de al lado tienen acceso limitado.', ru: 'На autovía у соседних участков есть ограниченный выезд.', en: 'On an autovía neighbouring properties have limited access.' }
        ], answer: 2,
        explain: { ru: 'Обе без пересечений в одном уровне и с раздельными проезжими частями; у autopista соседние участки выезда не имеют вовсе, у autovía — ограниченный (LSV, прил. I, пп. 66–67).', en: 'Both have no level crossings and separate carriageways; an autopista gives neighbouring properties no access, an autovía limited access (LSV, Annex I, items 66–67).' } },
      { es: '¿Qué característica tiene una vía para automóviles?',
        prompt: { ru: 'Какая особенность у «vía para automóviles»?', en: 'What is a feature of a «vía para automóviles»?' },
        options: [
          { es: 'Una sola calzada y sin acceso desde las propiedades colindantes.', ru: 'Одна проезжая часть и никаких выездов с соседних участков.', en: 'A single carriageway and no access from neighbouring properties.' },
          { es: 'Dos calzadas separadas por una mediana.', ru: 'Две проезжие части, разделённые полосой.', en: 'Two carriageways separated by a central reservation.' },
          { es: 'Siempre es de peaje.', ru: 'Она всегда платная.', en: 'It is always a toll road.' }
        ], answer: 0,
        explain: { ru: 'Vía para automóviles — только для автомобилей, одна проезжая часть, выезды полностью ограничены; знаки S-3/S-4 (LSV, прил. I, п. 68).', en: 'A vía para automóviles is cars-only, one carriageway, with access fully restricted; signs S-3/S-4 (LSV, Annex I, item 68).' },
        sign: 'S-3' },
      { es: '¿Qué indica esta señal?',
        prompt: { ru: 'Что обозначает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Autovía.', ru: 'Autovía (скоростная дорога).', en: 'Autovía (dual carriageway).' },
          { es: 'Autopista.', ru: 'Autopista (автомагистраль).', en: 'Autopista (motorway).' },
          { es: 'Vía para automóviles.', ru: 'Дорога для автомобилей.', en: 'Road for motor cars.' }
        ], answer: 1,
        explain: { ru: 'S-1 — начало автомагистрали (autopista). У autovía знак S-1a, у vía para automóviles — S-3 (RGC, прил. I — каталог знаков).', en: 'S-1 marks the start of an autopista. The autovía sign is S-1a, the vía para automóviles sign is S-3 (RGC, Annex I — sign catalogue).' },
        sign: 'S-1' },
      { es: 'Esta señal indica el comienzo de...',
        prompt: { ru: 'Этот знак обозначает начало…', en: 'This sign marks the start of…' },
        options: [
          { es: 'Una carretera multicarril.', ru: 'Многополосной дороги.', en: 'A multi-lane road.' },
          { es: 'Una vía para automóviles.', ru: 'Дороги для автомобилей.', en: 'A road for motor cars.' },
          { es: 'Una autovía.', ru: 'Скоростной дороги (autovía).', en: 'An autovía.' }
        ], answer: 2,
        explain: { ru: 'S-1a — autovía. Многополосная дорога — новый знак S-1b, дорога для автомобилей — S-3 (RGC, прил. I — каталог знаков).', en: 'S-1a is autovía. A multi-lane road is the new S-1b; a road for motor cars is S-3 (RGC, Annex I — sign catalogue).' },
        sign: 'S-1a' },
      { es: '¿Qué significa esta señal?',
        prompt: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Entrada a poblado.', ru: 'Въезд в населённый пункт.', en: 'Entering a built-up area.' },
          { es: 'Fin de poblado.', ru: 'Конец населённого пункта.', en: 'End of a built-up area.' },
          { es: 'Lugar de interés turístico.', ru: 'Туристическая достопримечательность.', en: 'Tourist attraction.' }
        ], answer: 0,
        explain: { ru: 'S-500 — въезд в poblado; с этого места действуют правила городской дороги. Конец — S-510 (RGC, прил. I — каталог знаков).', en: 'S-500 marks entering a poblado; urban-road rules apply from here. The end is S-510 (RGC, Annex I — sign catalogue).' },
        sign: 'S-500' },
      { es: '¿Qué final indica esta señal?',
        prompt: { ru: 'Конец чего обозначает этот знак?', en: 'What does this sign mark the end of?' },
        options: [
          { es: 'Fin de autovía.', ru: 'Конец autovía.', en: 'End of autovía.' },
          { es: 'Fin de vía reservada para automóviles.', ru: 'Конец дороги для автомобилей.', en: 'End of road reserved for motor cars.' },
          { es: 'Fin de carril bus.', ru: 'Конец полосы для автобусов.', en: 'End of bus lane.' }
        ], answer: 1,
        explain: { ru: 'S-4 — конец vía para automóviles (пара к S-3). Конец autovía — S-2a (RGC, прил. I — каталог знаков).', en: 'S-4 ends a vía para automóviles (pair of S-3). End of autovía is S-2a (RGC, Annex I — sign catalogue).' },
        sign: 'S-4' },
      { es: '¿Qué es una glorieta?',
        prompt: { ru: 'Что такое glorieta?', en: 'What is a glorieta?' },
        options: [
          { es: 'Un cruce con semáforos.', ru: 'Перекрёсток со светофорами.', en: 'A junction with traffic lights.' },
          { es: 'Una intersección con un anillo de circulación alrededor de una isleta central.', ru: 'Перекрёсток, где движение идёт по кольцу вокруг центрального островка.', en: 'A junction where traffic goes round a ring about a central island.' },
          { es: 'Un paso elevado sobre la autopista.', ru: 'Эстакада над магистралью.', en: 'A flyover above the motorway.' }
        ], answer: 1,
        explain: { ru: 'Glorieta — особый перекрёсток, где въезды соединены кольцом вокруг центрального островка (LSV, прил. I, п. 63).', en: 'A glorieta is a junction whose roads meet on a ring around a central island (LSV, Annex I, item 63).' } },
      { es: '¿Qué es un paso a nivel?',
        prompt: { ru: 'Что такое paso a nivel?', en: 'What is a paso a nivel?' },
        options: [
          { es: 'Un cruce de una vía con una línea de ferrocarril a la misma altura.', ru: 'Пересечение дороги с железной дорогой в одном уровне.', en: 'A crossing of a road and a railway line at the same level.' },
          { es: 'Un paso de peatones elevado.', ru: 'Приподнятый пешеходный переход.', en: 'A raised pedestrian crossing.' },
          { es: 'Un puente sobre las vías del tren.', ru: 'Мост над железной дорогой.', en: 'A bridge over the railway.' }
        ], answer: 0,
        explain: { ru: 'Paso a nivel — железнодорожный переезд в одном уровне с дорогой (LSV, прил. I, п. 64).', en: 'A paso a nivel is a road–railway crossing at the same level (LSV, Annex I, item 64).' } },
      { es: '¿Qué es una parada?',
        prompt: { ru: 'Что такое parada (остановка)?', en: 'What is a parada (stop)?' },
        options: [
          { es: 'Inmovilizar el vehículo más de dos minutos.', ru: 'Неподвижность машины больше двух минут.', en: 'Keeping the vehicle still for over two minutes.' },
          { es: 'Detenerse por una emergencia o por un semáforo.', ru: 'Остановиться из-за экстренной ситуации или светофора.', en: 'Stopping for an emergency or a traffic light.' },
          { es: 'Inmovilizar el vehículo menos de dos minutos sin que el conductor lo abandone.', ru: 'Неподвижность машины меньше двух минут, водитель её не покидает.', en: 'Keeping the vehicle still for under two minutes without the driver leaving it.' }
        ], answer: 2,
        explain: { ru: 'Parada — до 2 минут, водитель остаётся. Остановка из-за экстренной ситуации или по правилам — detención; всё остальное — estacionamiento (LSV, прил. I, пп. 80–82).', en: 'A parada is under 2 minutes with the driver staying. Stopping for an emergency or traffic is a detención; anything else is estacionamiento (LSV, Annex I, items 80–82).' } },
      { es: '¿Qué es un refugio?',
        prompt: { ru: 'Что такое refugio?', en: 'What is a refugio?' },
        options: [
          { es: 'Un aparcamiento cubierto.', ru: 'Крытая парковка.', en: 'A covered car park.' },
          { es: 'Una zona peatonal situada en la calzada y protegida del tráfico.', ru: 'Пешеходная зона на проезжей части, защищённая от движения.', en: 'A pedestrian area on the carriageway, protected from traffic.' },
          { es: 'Un apartadero para vehículos averiados.', ru: 'Карман для сломанных машин.', en: 'A lay-by for broken-down vehicles.' }
        ], answer: 1,
        explain: { ru: 'Refugio — островок безопасности для пешеходов прямо на проезжей части (LSV, прил. I, п. 60).', en: 'A refugio is a pedestrian island on the carriageway (LSV, Annex I, item 60).' } },
      { es: '¿Qué diferencia un furgón de un camión?',
        prompt: { ru: 'Чем фургон (furgón) отличается от грузовика (camión)?', en: 'What makes a van (furgón) different from a lorry (camión)?' },
        options: [
          { es: 'El furgón tiene la cabina integrada con el resto de la carrocería.', ru: 'У фургона кабина объединена с кузовом.', en: 'The van’s cab is integrated with the rest of the body.' },
          { es: 'El furgón solo transporta personas.', ru: 'Фургон возит только людей.', en: 'The van carries only people.' },
          { es: 'El furgón siempre pesa menos de 750 kilos.', ru: 'Фургон всегда легче 750 кг.', en: 'The van always weighs under 750 kg.' }
        ], answer: 0,
        explain: { ru: 'Оба для грузов, но у camión кабина отдельно от кузова, а у furgón — единое целое (LSV, прил. I, п. 18; учебник DGT, тема 1).', en: 'Both carry goods, but a camión’s cab is separate from the body while a furgón’s is integrated (LSV, Annex I, item 18; DGT manual, topic 1).' } },
      { es: 'Una bicicleta de pedaleo asistido con motor de 250 W que se corta a 25 km/h, ¿qué es?',
        prompt: { ru: 'Велосипед с электроприводом (250 Вт, отключается на 25 км/ч) — это…', en: 'An e-bike with a 250 W motor that cuts out at 25 km/h is…' },
        options: [
          { es: 'Un ciclomotor.', ru: 'Мопед.', en: 'A moped.' },
          { es: 'Un vehículo de movilidad personal.', ru: 'СИМ.', en: 'A personal mobility vehicle.' },
          { es: 'Un ciclo.', ru: 'Велосипед (ciclo).', en: 'A cycle (ciclo).' }
        ], answer: 2,
        explain: { ru: 'Велосипеды с педальным ассистентом входят в определение ciclo (LSV, прил. I, п. 7; Manual I DGT, тема 2).', en: 'Pedal-assisted bicycles fall within the definition of ciclo (LSV, Annex I, item 7; DGT Manual I, topic 2).' } },
      { es: 'Los vehículos de la categoría N sirven para transportar...',
        prompt: { ru: 'Транспорт категории N предназначен для перевозки…', en: 'Category N vehicles are for carrying…' },
        options: [
          { es: 'Mercancías.', ru: 'Грузов.', en: 'Goods.' },
          { es: 'Personas y sus equipajes.', ru: 'Людей и их багажа.', en: 'People and their luggage.' },
          { es: 'Animales vivos únicamente.', ru: 'Только живых животных.', en: 'Live animals only.' }
        ], answer: 0,
        explain: { ru: 'M — люди, N — грузы, O — прицепы (учебник DGT, тема 1).', en: 'M — people, N — goods, O — trailers (DGT manual, topic 1).' } },
      { es: '¿Cuál de estos NO es un usuario vulnerable de la vía?',
        prompt: { ru: 'Кто из них НЕ считается уязвимым участником движения?', en: 'Which of these is NOT a vulnerable road user?' },
        options: [
          { es: 'El conductor de un patinete eléctrico.', ru: 'Водитель электросамоката.', en: 'An e-scooter rider.' },
          { es: 'El pasajero de una motocicleta.', ru: 'Пассажир мотоцикла.', en: 'A motorcycle passenger.' },
          { es: 'El conductor de un turismo.', ru: 'Водитель легкового автомобиля.', en: 'A car driver.' }
        ], answer: 2,
        explain: { ru: 'Уязвимые — пешеходы, велосипедисты, водители СИМ, водители и пассажиры мотоциклов и мопедов (LSV, прил. I, п. 86).', en: 'Vulnerable users are pedestrians, cyclists, PMV riders, and riders and passengers of motorcycles and mopeds (LSV, Annex I, item 86).' } },
      { es: '¿Qué es un poblado?',
        prompt: { ru: 'Что такое poblado?', en: 'What is a poblado?' },
        options: [
          { es: 'Cualquier lugar donde hay al menos diez casas.', ru: 'Любое место, где есть хотя бы десять домов.', en: 'Any place with at least ten houses.' },
          { es: 'Un espacio con edificios, con señales de entrada y salida de poblado en sus vías.', ru: 'Территория с застройкой, на дорогах которой стоят знаки въезда и выезда.', en: 'An area with buildings, with built-up-area entry and exit signs on its roads.' },
          { es: 'Solo las ciudades de más de 50.000 habitantes.', ru: 'Только города с населением больше 50 000 человек.', en: 'Only towns of over 50,000 people.' }
        ], answer: 1,
        explain: { ru: 'Poblado определяется знаками: застройка плюс знаки начала и конца на въездах и выездах (LSV, прил. I, п. 70).', en: 'A poblado is defined by the signs: buildings plus entry and exit signs on its roads (LSV, Annex I, item 70).' } }
    ]
  }
]);
