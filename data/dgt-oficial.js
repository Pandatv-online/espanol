// Official DGT questions from the magazine «Tráfico y Seguridad Vial», supplement «¿Aprobaría usted el examen?»
// (50 preguntas, selección de la Subdirección Adjunta de Conocimiento Vial, DGT). Spanish wording and answers are DGT's;
// translations, explanations and hints are ours. Left out: three items that need the magazine's picture and one outdated
// item (overtaking 20 km/h above the limit, abolished in 2019). Loaded after the topic files: it adds to their questions.
ECA.data.addDgtQuestions({
  prioridad: [
    {
      id: 'of-14', source: 'dgt',
      es: 'Se ve obligado a trasladar en su turismo a un herido. ¿Debe respetar las normas de circulación?',
      tr: { ru: 'Вам пришлось везти раненого на своей машине. Нужно ли соблюдать правила движения?', en: 'You have to take an injured person in your car. Must you follow the traffic rules?' },
      options: [
        { es: 'Sí, y me aseguraré de que no pongo en peligro a otros usuarios.', ru: 'Да, и убедиться, что не создаю опасности другим.', en: 'Yes, making sure I don’t endanger other road users.' },
        { es: 'Sí, pero sólo en las intersecciones.', ru: 'Да, но только на перекрёстках.', en: 'Yes, but only at junctions.' },
        { es: 'No, y estoy exento de respetar las señales de los agentes.', ru: 'Нет, и сигналы регулировщиков можно не выполнять.', en: 'No, and I needn’t obey officers’ signals.' }
      ],
      answer: 0,
      explain: { ru: 'Обычная машина в срочной поездке может просить дорогу (гудок, аварийка, платок), но правила соблюдает полностью, особенно на перекрёстках.', en: 'An ordinary car on an emergency trip may ask for way (horn, hazards, handkerchief) but must follow every rule, especially at junctions.' },
      hint: { ru: 'Обычная машина — не скорая.', en: 'An ordinary car isn’t an ambulance.' },
      ref: 'RGC, art. 70'
    },
    {
      id: 'of-16', source: 'dgt',
      es: 'En los estrechamientos en tramos de gran pendiente, si no hay señalización expresa al efecto, tendrá la preferencia de paso el vehículo que circule en sentido…',
      tr: { ru: 'В узком месте на крутом уклоне без знаков приоритет у машины, которая едет…', en: 'At a narrowing on a steep slope with no signs, priority goes to the vehicle travelling…' },
      options: [
        { es: 'descendente, salvo si pudiera llegar antes a un apartadero.', ru: '…вниз, если только она не ближе к «карману».', en: '…downhill, unless it is nearer a passing place.' },
        { es: 'ascendente, salvo si pudiera llegar antes a un apartadero.', ru: '…вверх, если только она не ближе к «карману».', en: '…uphill, unless it is nearer a passing place.' },
        { es: 'ascendente, en todo caso.', ru: '…вверх, в любом случае.', en: '…uphill, in every case.' }
      ],
      answer: 1,
      explain: { ru: 'Едет тот, кто поднимается, — кроме случая, когда он сам ближе к карману для разъезда.', en: 'The one going uphill goes first — unless they themselves are nearer a passing place.' },
      hint: { ru: 'Вверх тяжелее тронуться.', en: 'Moving off uphill is harder.' },
      ref: 'RGC, art. 63'
    },
    {
      id: 'of-24', source: 'dgt',
      es: 'En una glorieta regulada exclusivamente por la señal de intersección con circulación giratoria, ¿quién tiene prioridad de paso?',
      tr: { ru: 'На кольце, где стоит только знак «Пересечение с круговым движением», у кого приоритет?', en: 'At a roundabout marked only by the “roundabout ahead” sign, who has priority?' },
      img: 'img/dgt/senal-p4.svg', alt: { ru: 'Знак P-4', en: 'Sign P-4' },
      options: [
        { es: 'Siempre el vehículo que tenga libre su derecha.', ru: 'Всегда тот, у кого свободно справа.', en: 'Always the vehicle with a clear right.' },
        { es: 'El vehículo que pretende acceder a la glorieta.', ru: 'Тот, кто хочет въехать на кольцо.', en: 'The vehicle trying to enter.' },
        { es: 'El vehículo que se encuentra dentro de la calzada circular.', ru: 'Тот, кто уже на кольце.', en: 'The vehicle already on the circular carriageway.' }
      ],
      answer: 2,
      explain: { ru: 'На кольце приоритет у тех, кто уже внутри. Въезжающий уступает, хотя они слева.', en: 'On a roundabout those already inside have priority. The entering driver gives way though they’re on the left.' },
      hint: { ru: 'РАГА: «Г» — глорьета.', en: 'RAGA: “G” for glorieta.' },
      ref: 'RGC, art. 57'
    }
  ],
  senales: [
    {
      id: 'of-23', source: 'dgt',
      es: 'En una vía, la separación entre los trazos de la línea discontinua es sensiblemente más corta que en el caso general; ¿qué puede anunciar?',
      tr: { ru: 'Промежутки между штрихами прерывистой линии заметно короче обычного. О чём это может предупреждать?', en: 'The gaps in a broken line are noticeably shorter than usual. What can this announce?' },
      options: [
        { es: 'La proximidad de una travesía.', ru: 'Близость участка дороги через город.', en: 'A road through a town ahead.' },
        { es: 'La proximidad de un tramo de vía que presenta un riesgo especial.', ru: 'Близость участка с особой опасностью.', en: 'A stretch with a special hazard ahead.' },
        { es: 'La proximidad de un carril especial.', ru: 'Близость особой полосы.', en: 'A special lane ahead.' }
      ],
      answer: 1,
      explain: { ru: 'Частая прерывистая предупреждает об опасном участке или о том, что скоро начнётся сплошная.', en: 'A closely spaced broken line warns of a hazardous stretch or that a solid line is coming.' },
      hint: { ru: 'Штрихи сгущаются — опасность ближе.', en: 'Dashes bunch up — danger is near.' },
      ref: 'RGC, art. 167'
    },
    {
      id: 'of-25', source: 'dgt',
      es: 'Las señales horizontales o marcas viales de color blanco, ¿tienen el mismo significado que las señales verticales?',
      tr: { ru: 'Имеет ли белая дорожная разметка такое же значение, как дорожные знаки?', en: 'Do white road markings have the same meaning as vertical signs?' },
      options: [
        { es: 'Sí.', ru: 'Да.', en: 'Yes.' },
        { es: 'No, en ningún caso.', ru: 'Нет, ни в каком случае.', en: 'No, never.' },
        { es: 'No, salvo las señales de «ceda el paso» y «stop».', ru: 'Нет, кроме «Уступите дорогу» и «Стоп».', en: 'No, except “give way” and “stop”.' }
      ],
      answer: 0,
      explain: { ru: 'Разметка — тоже сигнал, обязательный к исполнению; знак «Стоп» или треугольник на асфальте значит то же, что и на столбе. При противоречии знак главнее разметки.', en: 'Markings are signals too and must be obeyed; a painted Stop or give-way triangle means the same as the sign. If they conflict, the sign prevails.' },
      hint: { ru: 'Краска — тоже закон, просто последняя в очереди.', en: 'Paint is law too, just last in line.' },
      ref: 'RGC, art. 165'
    },
    {
      id: 'of-26', source: 'dgt',
      es: 'En una intersección con señal de stop no hay línea de detención; ¿dónde hay que detenerse?',
      tr: { ru: 'На перекрёстке со знаком «Стоп» нет стоп-линии. Где останавливаться?', en: 'At a junction with a Stop sign there is no stop line. Where must you stop?' },
      img: 'img/dgt/senal-r2.svg', alt: { ru: 'Знак R-2', en: 'Sign R-2' },
      options: [
        { es: 'Antes de entrar en la intersección.', ru: 'Перед въездом на перекрёсток.', en: 'Before entering the junction.' },
        { es: 'A una distancia mínima de 5 metros antes de la intersección.', ru: 'Минимум за 5 м до перекрёстка.', en: 'At least 5 m before the junction.' },
        { es: 'Dentro de la intersección.', ru: 'Внутри перекрёстка.', en: 'Inside the junction.' }
      ],
      answer: 0,
      explain: { ru: 'Без стоп-линии останавливаются непосредственно перед перекрёстком, там, откуда видно дорогу. «5 метров» — ловушка.', en: 'Without a stop line, stop just before the junction where you can see. “5 metres” is a trap.' },
      hint: { ru: 'Стоп — там, откуда видно.', en: 'Stop where you can see.' },
      ref: 'RGC, art. 151'
    }
  ],
  velocidad: [
    {
      id: 'of-09', source: 'dgt',
      es: '¿A qué velocidad máxima puede circular por una autopista un turismo que arrastra un remolque ligero?',
      tr: { ru: 'С какой максимальной скоростью легковая с лёгким прицепом может ехать по автописте?', en: 'What is the top speed on a motorway for a car towing a light trailer?' },
      options: [
        { es: '120 km/h.', ru: '120 км/ч.', en: '120 km/h.' },
        { es: '100 km/h.', ru: '100 км/ч.', en: '100 km/h.' },
        { es: '90 km/h.', ru: '90 км/ч.', en: '90 km/h.' }
      ],
      answer: 2,
      explain: { ru: 'С прицепом — лимиты как у грузовиков: 90 на автомагистрали, 80 на обычной дороге.', en: 'With a trailer the lorry limits apply: 90 on motorways, 80 on ordinary roads.' },
      hint: { ru: 'Прицеп — «грузовик» по скорости.', en: 'A trailer makes you a “lorry” for speed.' },
      ref: 'RGC, art. 48'
    },
    {
      id: 'of-22', source: 'dgt',
      es: 'Circula con su turismo detrás de un camión por una vía interurbana con un carril para cada sentido; si no pretende adelantarlo, ¿qué distancia de seguridad debe dejar?',
      tr: { ru: 'Вы едете за грузовиком по загородной дороге с одной полосой в каждую сторону и не собираетесь его обгонять. Какую дистанцию держать?', en: 'You’re behind a lorry on a rural road with one lane each way and don’t intend to overtake. What gap should you keep?' },
      options: [
        { es: '150 metros.', ru: '150 м.', en: '150 m.' },
        { es: 'La que permita al vehículo que circule detrás adelantarme con seguridad.', ru: 'Такую, чтобы едущий за мной мог безопасно меня обогнать.', en: 'Enough for the vehicle behind me to overtake me safely.' },
        { es: '50 metros.', ru: '50 м.', en: '50 m.' }
      ],
      answer: 1,
      explain: { ru: 'Если не обгоняете, оставьте место, куда сможет «встроиться» обгоняющий вас. 50 м — норма для тяжёлых машин и длинных составов, не для легковой.', en: 'If you’re not overtaking, leave room for someone overtaking you to pull in. 50 m is the rule for heavy vehicles and long combinations, not cars.' },
      hint: { ru: 'Не обгоняешь — оставь «окно» для того, кто обгоняет.', en: 'Not overtaking — leave a slot for those who are.' },
      ref: 'RGC, art. 54'
    },
    {
      id: 'of-31', source: 'dgt',
      es: 'Los excesos de velocidad…',
      tr: { ru: 'Превышение скорости…', en: 'Speeding…' },
      options: [
        { es: 'hoy apenas tienen incidencia en los accidentes, debido a la seguridad de los vehículos.', ru: '…сегодня почти не влияет на аварии благодаря безопасности машин.', en: '…hardly affects crashes today thanks to vehicle safety.' },
        { es: 'son responsables de la mayoría de los accidentes, en vías de doble sentido solamente.', ru: '…виновато в большинстве аварий, но только на двусторонних дорогах.', en: '…causes most crashes, but only on two-way roads.' },
        { es: 'junto con las distracciones, son responsables de la mayoría de los accidentes.', ru: '…вместе с отвлечениями — причина большинства аварий.', en: '…together with distraction, causes most crashes.' }
      ],
      answer: 2,
      explain: { ru: 'Скорость и отвлечения — две главные причины ДТП на любых дорогах. Системы безопасности этого не отменяют.', en: 'Speed and distraction are the two main crash causes on every kind of road. Safety systems don’t change that.' },
      hint: { ru: 'Скорость + отвлечение = большинство ДТП.', en: 'Speed + distraction = most crashes.' },
      ref: 'DGT, Manual básico, tema 10'
    }
  ],
  maniobras: [
    {
      id: 'of-03', source: 'dgt',
      es: 'En un túnel con un carril para cada sentido de circulación, ¿está permitido adelantar?',
      tr: { ru: 'Можно ли обгонять в туннеле с одной полосой в каждую сторону?', en: 'May you overtake in a tunnel with one lane in each direction?' },
      options: [
        { es: 'Sí, cuando no haya señales que lo prohíban.', ru: 'Да, если нет запрещающих знаков.', en: 'Yes, unless signs prohibit it.' },
        { es: 'No.', ru: 'Нет.', en: 'No.' },
        { es: 'Sí, si hay suficiente visibilidad.', ru: 'Да, если хороший обзор.', en: 'Yes, with enough visibility.' }
      ],
      answer: 1,
      explain: { ru: 'В туннеле с двусторонним движением и одной полосой в каждую сторону обгон запрещён всегда, даже без знаков.', en: 'In a two-way tunnel with one lane each way, overtaking is always banned, even without signs.' },
      hint: { ru: 'Туннель на две полосы — без обгонов.', en: 'Two-lane tunnel — no overtaking.' },
      ref: 'RGC, art. 87'
    },
    {
      id: 'of-04', source: 'dgt',
      es: 'Como norma general, ¿dónde está prohibido adelantar?',
      tr: { ru: 'Где, как правило, запрещён обгон?', en: 'As a rule, where is overtaking prohibited?' },
      options: [
        { es: 'En las calzadas de menos de 8 m de anchura.', ru: 'На дорогах уже 8 м.', en: 'On carriageways narrower than 8 m.' },
        { es: 'En todas las curvas y cambios de rasante.', ru: 'Во всех поворотах и на всех вершинах.', en: 'On all bends and crests.' },
        { es: 'En las intersecciones y en sus proximidades.', ru: 'На перекрёстках и рядом с ними.', en: 'At junctions and near them.' }
      ],
      answer: 2,
      explain: { ru: 'Перекрёстки — общий запрет (с исключениями: кольцо, обгон справа, двухколёсный, главная дорога). Повороты и вершины — только при плохом обзоре, а не «все».', en: 'Junctions are a general ban (exceptions: roundabout, overtaking on the right, a two-wheeler, priority road). Bends and crests only when visibility is poor, not “all”.' },
      hint: { ru: '«Все повороты» — ловушка: только без обзора.', en: '“All bends” is the trap: only blind ones.' },
      ref: 'RGC, art. 87'
    },
    {
      id: 'of-05', source: 'dgt',
      es: '¿Qué es una detención?',
      tr: { ru: 'Что такое «detención» (вынужденная остановка)?', en: 'What is a “detención”?' },
      options: [
        { es: 'Un estacionamiento sin bajarse del vehículo.', ru: 'Стоянка без выхода из машины.', en: 'Parking without getting out.' },
        { es: 'La inmovilización del vehículo por necesidades de la circulación.', ru: 'Остановка по требованиям движения.', en: 'Stopping because traffic requires it.' },
        { es: 'Una parada por cualquier causa.', ru: 'Остановка по любой причине.', en: 'A stop for any reason.' }
      ],
      answer: 1,
      explain: { ru: 'Detención — когда стоите из-за движения: светофор, пробка, знак, регулировщик. Parada — короткая остановка по своей воле (до 2 мин). Estacionamiento — стоянка.', en: 'Detención — stopping because of traffic: a light, a queue, a sign, an officer. Parada — a short voluntary stop (under 2 min). Estacionamiento — parking.' },
      hint: { ru: 'Detención — «меня остановили», parada — «я сам встал».', en: 'Detención — “I was stopped”; parada — “I chose to stop”.' },
      ref: 'Ley de Tráfico, anexo I'
    },
    {
      id: 'of-50', source: 'dgt',
      es: 'Al adelantar a un vehículo de dos ruedas, ¿qué separación lateral de seguridad es obligatorio dejar?',
      tr: { ru: 'Какой боковой интервал обязателен при обгоне двухколёсного?', en: 'What side gap is compulsory when overtaking a two-wheeler?' },
      options: [
        { es: 'Aquella que le permita realizar el adelantamiento sin ocupar nunca el carril contiguo de la calzada.', ru: 'Такой, чтобы обогнать, не заезжая на соседнюю полосу.', en: 'One that lets you pass without ever entering the next lane.' },
        { es: 'Una separación inferior a 1,5 metros, como mínimo, en todo caso.', ru: 'Меньше 1,5 м, как минимум, в любом случае.', en: 'Less than 1.5 m, as a minimum, in any case.' },
        { es: 'Al menos 1,5 metros.', ru: 'Не меньше 1,5 м.', en: 'At least 1.5 m.' }
      ],
      answer: 2,
      explain: { ru: 'Велосипед и мопед обгоняют с интервалом не меньше 1,5 м, полностью заняв соседнюю полосу.', en: 'Bicycles and mopeds are overtaken with at least 1.5 m, moving fully into the next lane.' },
      hint: { ru: 'Полтора метра и целая полоса.', en: 'One and a half metres and a whole lane.' },
      ref: 'RGC, art. 85'
    }
  ],
  via: [
    {
      id: 'of-10', source: 'dgt',
      es: 'La utilización del carril habilitado para VAO…',
      tr: { ru: 'Использование полосы VAO…', en: 'Use of the VAO (high-occupancy) lane…' },
      options: [
        { es: 'se limita a primeras horas de la mañana.', ru: '…разрешено только ранним утром.', en: '…is limited to early morning.' },
        { es: 'está prohibida para vehículos con remolque.', ru: '…запрещено машинам с прицепом.', en: '…is banned for vehicles with a trailer.' },
        { es: 'está permitida a ciclomotores.', ru: '…разрешено мопедам.', en: '…is allowed for mopeds.' }
      ],
      answer: 1,
      explain: { ru: 'По VAO едут машины с нужным числом людей, мотоциклы, автобусы, машины инвалидов, экстренные службы. С прицепом — нельзя; мопедам — тоже.', en: 'VAO lanes are for vehicles with enough occupants, motorbikes, buses, disabled drivers and emergency services. Not with a trailer, nor mopeds.' },
      hint: { ru: 'VAO — быстрая полоса; прицеп и мопед её тормозят.', en: 'VAO is fast; trailers and mopeds slow it.' },
      ref: 'RGC, art. 35'
    },
    {
      id: 'of-13', source: 'dgt',
      es: 'A un turismo, ¿cuándo le está permitido circular por el arcén?',
      tr: { ru: 'Когда легковой можно ехать по обочине?', en: 'When may a car drive on the hard shoulder?' },
      options: [
        { es: 'En ningún caso.', ru: 'Никогда.', en: 'Never.' },
        { es: 'Cuando por razones de emergencia, circule a velocidad anormalmente reducida.', ru: 'Когда из-за чрезвычайной ситуации едет аномально медленно.', en: 'When, in an emergency, it is moving abnormally slowly.' },
        { es: 'Por razones de fluidez, siempre que el tráfico esté congestionado.', ru: 'Для скорости, когда пробка.', en: 'To keep moving whenever traffic is jammed.' }
      ],
      answer: 1,
      explain: { ru: 'Автомобиль может ехать по обочине только в экстренной ситуации (поломка), если едет аномально медленно. Объезжать пробку по обочине нельзя.', en: 'A car may use the shoulder only in an emergency (a fault) when going abnormally slowly. Never to bypass a jam.' },
      hint: { ru: 'Обочина — для беды, не для спешки.', en: 'The shoulder is for trouble, not for hurry.' },
      ref: 'RGC, art. 36'
    },
    {
      id: 'of-15', source: 'dgt',
      es: 'Como norma general, en una vía interurbana que no dispone de zona peatonal, ¿por qué lado deben circular los peatones?',
      tr: { ru: 'По какой стороне загородной дороги без тротуара обычно идут пешеходы?', en: 'On a rural road with no footway, which side should pedestrians walk on?' },
      options: [
        { es: 'Por su izquierda.', ru: 'По левой (навстречу машинам).', en: 'On their left (facing traffic).' },
        { es: 'Por su derecha.', ru: 'По правой.', en: 'On their right.' },
        { es: 'Indistintamente, por cualquiera de los dos lados.', ru: 'По любой.', en: 'Either side.' }
      ],
      answer: 0,
      explain: { ru: 'За городом пешеходы идут по левому краю — навстречу движению, чтобы видеть приближающиеся машины.', en: 'Out of town pedestrians walk on the left — facing traffic, so they can see oncoming vehicles.' },
      hint: { ru: 'Пешеход смотрит машинам в лицо.', en: 'Pedestrians face the traffic.' },
      ref: 'RGC, art. 122'
    },
    {
      id: 'of-37', source: 'dgt',
      es: 'Las autovías y las autopistas, en general, son en relación con las carreteras convencionales…',
      tr: { ru: 'Автовии и автописты по сравнению с обычными дорогами в целом…', en: 'Compared with conventional roads, motorways are generally…' },
      options: [
        { es: 'más seguras.', ru: '…безопаснее.', en: '…safer.' },
        { es: 'igual de seguras.', ru: '…так же безопасны.', en: '…just as safe.' },
        { es: 'menos seguras.', ru: '…опаснее.', en: '…less safe.' }
      ],
      answer: 0,
      explain: { ru: 'На автомагистралях нет встречного движения, перекрёстков и пешеходов, поэтому они безопаснее. Больше всего погибших — на обычных дорогах.', en: 'Motorways have no oncoming traffic, junctions or pedestrians, so they are safer. Most deaths happen on conventional roads.' },
      hint: { ru: 'Нет встречки — нет лобовых.', en: 'No oncoming traffic — no head-ons.' },
      ref: 'DGT, Manual básico, tema 9'
    }
  ],
  luces: [
    {
      id: 'of-07', source: 'dgt',
      es: 'La luz antiniebla trasera deberá utilizarse en caso de…',
      tr: { ru: 'Задний противотуманный фонарь включают при…', en: 'The rear fog light must be used in…' },
      options: [
        { es: 'fuerte viento.', ru: '…сильном ветре.', en: '…strong wind.' },
        { es: 'circulación intensa.', ru: '…плотном движении.', en: '…heavy traffic.' },
        { es: 'lluvia muy intensa.', ru: '…очень сильном дожде.', en: '…very heavy rain.' }
      ],
      answer: 2,
      explain: { ru: 'Задняя противотуманка — только при очень плохой видимости: густой туман, очень сильный дождь или снегопад, густой дым или пыль.', en: 'The rear fog light is only for very poor visibility: thick fog, very heavy rain or snow, dense smoke or dust.' },
      hint: { ru: 'Задняя противотуманка — последний шанс.', en: 'Rear fog — last resort.' },
      ref: 'RGC, art. 106'
    },
    {
      id: 'of-08', source: 'dgt',
      es: 'Un turismo que circula entre la puesta y la salida del sol, ¿debe llevar iluminadas las placas de matrícula?',
      tr: { ru: 'Должны ли быть освещены номерные знаки у легковой, которая едет от заката до рассвета?', en: 'Must a car driving between sunset and sunrise have its number plates lit?' },
      options: [
        { es: 'Sólo la delantera.', ru: 'Только передний.', en: 'Only the front one.' },
        { es: 'Sólo la trasera.', ru: 'Только задний.', en: 'Only the rear one.' },
        { es: 'Sí, tanto la delantera como la trasera.', ru: 'Да, и передний, и задний.', en: 'Yes, front and rear.' }
      ],
      answer: 1,
      explain: { ru: 'Освещается только задний номер — у него есть специальная подсветка. Передний освещают фары встречных машин.', en: 'Only the rear plate is lit — it has its own lamp. The front plate is lit by others’ headlights.' },
      hint: { ru: 'Подсветка номера — сзади.', en: 'The plate lamp is at the back.' },
      ref: 'RGC, art. 103'
    },
    {
      id: 'of-18', source: 'dgt',
      es: 'Circulando por autopista, prevé que su vehículo va a quedar inmovilizado por circunstancias del tráfico; ¿cómo deberá advertirlo?',
      tr: { ru: 'На автописте вы видите, что сейчас встанете из-за затора. Как предупредить едущих сзади?', en: 'On a motorway you see you’re about to stop because of traffic. How should you warn others?' },
      options: [
        { es: 'Mediante el empleo reiterado de las luces de frenado.', ru: 'Несколько раз нажимая на тормоз (мигая стоп-сигналами).', en: 'By flashing the brake lights repeatedly.' },
        { es: 'Mediante la luz antiniebla trasera y la señal de emergencia.', ru: 'Задним противотуманным и аварийкой.', en: 'With the rear fog light and hazards.' },
        { es: 'Encendiendo las luces de posición, aunque sea de día.', ru: 'Включив габариты, даже днём.', en: 'By switching on sidelights, even by day.' }
      ],
      answer: 0,
      explain: { ru: 'Предупредить о внезапной остановке из-за движения можно, несколько раз коротко нажав на тормоз — мигающие стоп-сигналы видны издалека. Противотуманку для этого не используют.', en: 'To warn of a sudden traffic stop, tap the brake repeatedly — flashing brake lights are seen from afar. The fog light isn’t for this.' },
      hint: { ru: 'Пробка впереди — «поморгай» тормозом.', en: 'Queue ahead — blink your brake lights.' },
      ref: 'RGC, art. 109'
    },
    {
      id: 'of-33', source: 'dgt',
      es: 'Las lámparas de xenón…',
      tr: { ru: 'Ксеноновые лампы…', en: 'Xenon lamps…' },
      options: [
        { es: 'aumentan la fatiga ocular del conductor.', ru: '…увеличивают усталость глаз водителя.', en: '…increase the driver’s eye strain.' },
        { es: 'mejoran la iluminación de la vía y reducen la fatiga ocular del conductor.', ru: '…лучше освещают дорогу и уменьшают усталость глаз.', en: '…light the road better and reduce eye strain.' },
        { es: 'iluminan peor la vía, pero reducen la fatiga ocular del conductor.', ru: '…хуже освещают дорогу, но уменьшают усталость глаз.', en: '…light the road worse but reduce eye strain.' }
      ],
      answer: 1,
      explain: { ru: 'Ксенон даёт больше света, ближе к дневному, поэтому дорогу видно лучше и глаза меньше устают.', en: 'Xenon gives more, more daylight-like light, so you see the road better and your eyes tire less.' },
      hint: { ru: 'Ксенон — «ближе к дню».', en: 'Xenon — closer to daylight.' },
      ref: 'DGT, revista Tráfico'
    }
  ],
  documentacion: [
    {
      id: 'of-01', source: 'dgt',
      es: 'Conducir, con un permiso de la clase B, un turismo que arrastra un remolque ligero, ¿está permitido?',
      tr: { ru: 'Можно ли с правами B водить легковую с лёгким прицепом?', en: 'With a B licence, may you drive a car towing a light trailer?' },
      options: [
        { es: 'No, en ningún caso.', ru: 'Нет, ни в каком случае.', en: 'No, never.' },
        { es: 'Solo si la masa máxima autorizada del conjunto no supera los 3.500 kilogramos.', ru: 'Только если полная масса состава не больше 3500 кг.', en: 'Only if the combination’s maximum mass is ≤ 3,500 kg.' },
        { es: 'Sí, en cualquier caso.', ru: 'Да, в любом случае.', en: 'Yes, in any case.' }
      ],
      answer: 2,
      explain: { ru: 'Лёгкий прицеп (до 750 кг) с правами B можно тянуть всегда. Условие 3500 кг касается тяжёлых прицепов.', en: 'A light trailer (up to 750 kg) may always be towed with B. The 3,500 kg condition is for heavier trailers.' },
      hint: { ru: 'Лёгкий прицеп — всегда «B».', en: 'Light trailer — always B.' },
      ref: 'Reglamento General de Conductores, art. 4'
    },
    {
      id: 'of-02', source: 'dgt',
      es: 'Si realiza una reforma de importancia en un vehículo, ¿es obligatorio pasar una inspección técnica extraordinaria?',
      tr: { ru: 'Если вы серьёзно переделали машину, нужен ли внеочередной техосмотр?', en: 'After a major modification to a vehicle, is an extra technical inspection compulsory?' },
      options: [
        { es: 'Sí, en un taller autorizado.', ru: 'Да, в авторизованной мастерской.', en: 'Yes, at an authorised garage.' },
        { es: 'Sí, en una estación ITV.', ru: 'Да, на станции ITV.', en: 'Yes, at an ITV station.' },
        { es: 'No, no es necesario.', ru: 'Нет, не нужно.', en: 'No, not needed.' }
      ],
      answer: 1,
      explain: { ru: 'После серьёзной переделки (или аварии с повреждением конструкции) машину проверяют на станции ITV, а не в мастерской.', en: 'After a major modification (or a crash damaging the structure) the vehicle is checked at an ITV station, not a garage.' },
      hint: { ru: 'Переделал — на ITV.', en: 'Modified — to the ITV.' },
      ref: 'RD 920/2017 (ITV)'
    },
    {
      id: 'of-20', source: 'dgt',
      es: 'Arrojar un cigarro por la ventanilla de un turismo, ¿puede suponer una infracción?',
      tr: { ru: 'Выбросить сигарету из окна машины — это нарушение?', en: 'Can throwing a cigarette out of a car window be an offence?' },
      options: [
        { es: 'Sí, y además conlleva pérdida de puntos.', ru: 'Да, и ещё с потерей баллов.', en: 'Yes, and it also costs points.' },
        { es: 'Sí, pero no conlleva pérdida de puntos.', ru: 'Да, но без потери баллов.', en: 'Yes, but without losing points.' },
        { es: 'No, pero no se debe hacer.', ru: 'Нет, но так делать не стоит.', en: 'No, but you shouldn’t.' }
      ],
      answer: 0,
      explain: { ru: 'Выбросить на дорогу предмет, который может вызвать пожар или аварию (окурок), — 6 баллов и штраф.', en: 'Throwing an object that can start a fire or cause a crash (a cigarette end) costs 6 points and a fine.' },
      hint: { ru: 'Окурок из окна — минус шесть.', en: 'Cigarette out of the window — minus six.' },
      ref: 'Ley de Tráfico, anexo II'
    }
  ],
  conductor: [
    {
      id: 'of-36', source: 'dgt',
      es: 'Conducir con sueño, ¿por qué es peligroso?',
      tr: { ru: 'Почему опасно вести машину сонным?', en: 'Why is driving while sleepy dangerous?' },
      options: [
        { es: 'Porque disminuye la concentración.', ru: 'Снижается концентрация.', en: 'Concentration drops.' },
        { es: 'Porque se circula más rápido.', ru: 'Едешь быстрее.', en: 'You drive faster.' },
        { es: 'Porque el viaje dura más.', ru: 'Поездка длится дольше.', en: 'The trip takes longer.' }
      ],
      answer: 0,
      explain: { ru: 'Сонливость снижает внимание и замедляет реакцию; можно «отключиться» на несколько секунд, не заметив этого.', en: 'Sleepiness lowers attention and slows reactions; you can “black out” for seconds without noticing.' },
      hint: { ru: 'Против сна — только сон.', en: 'The only cure for sleep is sleep.' },
      ref: 'DGT, Manual básico, tema 3'
    },
    {
      id: 'of-39', source: 'dgt',
      es: 'Hablar por un teléfono con dispositivo de manos libres durante la conducción…',
      tr: { ru: 'Разговор по телефону через громкую связь за рулём…', en: 'Talking on a hands-free phone while driving…' },
      options: [
        { es: 'permite mantener sin riesgo largas conversaciones al volante.', ru: '…позволяет без риска долго разговаривать.', en: '…allows long risk-free conversations.' },
        { es: 'tiene un cierto riesgo debido a la pérdida de atención.', ru: '…несёт определённый риск из-за потери внимания.', en: '…carries some risk through loss of attention.' },
        { es: 'está prohibido.', ru: '…запрещён.', en: '…is prohibited.' }
      ],
      answer: 1,
      explain: { ru: 'Громкая связь разрешена, но разговор отнимает внимание. Лучше говорить коротко или остановиться.', en: 'Hands-free is allowed, but conversation takes attention. Keep calls short or stop.' },
      hint: { ru: 'Руки свободны, голова — нет.', en: 'Hands free, mind not.' },
      ref: 'RGC, art. 18'
    },
    {
      id: 'of-40', source: 'dgt',
      es: 'Un conductor que es requerido por los agentes para una prueba de alcoholemia, ¿está obligado a someterse a ella?',
      tr: { ru: 'Обязан ли водитель пройти тест на алкоголь, если этого требует полицейский?', en: 'Must a driver take an alcohol test when asked by officers?' },
      options: [
        { es: 'Sólo si está implicado en un accidente.', ru: 'Только если участвовал в ДТП.', en: 'Only if involved in a crash.' },
        { es: 'Sí.', ru: 'Да.', en: 'Yes.' },
        { es: 'Sólo si está implicado en un accidente o ha cometido alguna infracción.', ru: 'Только при ДТП или нарушении.', en: 'Only after a crash or an offence.' }
      ],
      answer: 1,
      explain: { ru: 'Любой водитель обязан пройти тест по требованию агента, в том числе на плановом контроле. Отказ — 6 баллов и уголовное преступление.', en: 'Every driver must take the test when an officer asks, including at routine checks. Refusing costs 6 points and is a crime.' },
      hint: { ru: 'Попросили дунуть — дуешь.', en: 'Asked to blow — you blow.' },
      ref: 'RGC, art. 21'
    },
    {
      id: 'of-42', source: 'dgt',
      es: 'Un conductor novel, ¿puede sentirse fatigado más fácilmente?',
      tr: { ru: 'Может ли водитель-новичок уставать быстрее?', en: 'Can a novice driver tire more easily?' },
      options: [
        { es: 'Sí, por la falta de experiencia al volante.', ru: 'Да, из-за недостатка опыта.', en: 'Yes, through lack of experience.' },
        { es: 'No.', ru: 'Нет.', en: 'No.' },
        { es: 'Únicamente cuando sea una persona mayor.', ru: 'Только если он пожилой.', en: 'Only if elderly.' }
      ],
      answer: 0,
      explain: { ru: 'Новичку всё требует сознательных усилий — внимание и напряжение выше, поэтому усталость приходит раньше.', en: 'For a novice everything takes conscious effort — more attention and tension, so fatigue comes sooner.' },
      hint: { ru: 'Новичок работает «вручную» — устаёт быстрее.', en: 'A novice drives “manually” — tires faster.' },
      ref: 'DGT, Manual básico, tema 3'
    },
    {
      id: 'of-44', source: 'dgt',
      es: 'La persona que conduce bajo los efectos de las drogas…',
      tr: { ru: 'Человек, который ведёт машину под действием наркотиков…', en: 'A person driving under the influence of drugs…' },
      options: [
        { es: 'pone a todos los que le rodean en un grave riesgo de accidente.', ru: '…подвергает всех вокруг серьёзному риску аварии.', en: '…puts everyone around at serious risk of a crash.' },
        { es: 'solo pone en riesgo su propia vida.', ru: '…рискует только своей жизнью.', en: '…only risks their own life.' },
        { es: 'asume menos riesgos.', ru: '…рискует меньше.', en: '…takes fewer risks.' }
      ],
      answer: 0,
      explain: { ru: 'Наркотики меняют восприятие, реакцию и поведение — опасность создаётся для всех на дороге.', en: 'Drugs alter perception, reactions and behaviour — the danger is for everyone on the road.' },
      hint: { ru: 'Наркотики за рулём — риск для всех.', en: 'Drugged driving — a risk for all.' },
      ref: 'DGT, Manual básico, tema 3'
    },
    {
      id: 'of-45', source: 'dgt',
      es: 'Tomar un analgésico para el dolor de cabeza, ¿puede afectar a la conducción?',
      tr: { ru: 'Может ли обезболивающее от головной боли повлиять на вождение?', en: 'Can taking a painkiller for a headache affect driving?' },
      options: [
        { es: 'Sólo si se mezcla con alcohol.', ru: 'Только если вместе с алкоголем.', en: 'Only if mixed with alcohol.' },
        { es: 'No, los analgésicos son inofensivos.', ru: 'Нет, обезболивающие безвредны.', en: 'No, painkillers are harmless.' },
        { es: 'Sí.', ru: 'Да.', en: 'Yes.' }
      ],
      answer: 2,
      explain: { ru: 'Обезболивающие могут вызывать сонливость, головокружение и рассеянность — даже без алкоголя.', en: 'Painkillers can cause drowsiness, dizziness and poor concentration — even without alcohol.' },
      hint: { ru: 'Любое лекарство — сначала инструкция.', en: 'Any medicine — read the leaflet first.' },
      ref: 'DGT, Manual básico, tema 3'
    }
  ],
  seguridad: [
    {
      id: 'of-06', source: 'dgt',
      es: 'Si por cualquier circunstancia tuviera que realizar la operación de descarga de su vehículo dentro de la vía pública, ¿cómo deberá hacerlo?',
      tr: { ru: 'Если пришлось разгружать машину прямо на дороге, как это делать?', en: 'If you must unload your vehicle on the public road, how should you do it?' },
      options: [
        { es: 'Depositando la mercancía en el arcén o en la zona peatonal más próxima.', ru: 'Складывая груз на обочину или ближайшую пешеходную зону.', en: 'Putting the goods on the shoulder or nearest footway.' },
        { es: 'Efectuando la descarga lo antes posible, evitando ruidos y molestias innecesarias.', ru: 'Как можно быстрее, без лишнего шума и неудобств.', en: 'As quickly as possible, avoiding needless noise and nuisance.' },
        { es: 'En ningún caso debe realizarse la operación de descarga dentro de la vía.', ru: 'На дороге разгружать нельзя ни в каком случае.', en: 'Unloading on the road is never allowed.' }
      ],
      answer: 1,
      explain: { ru: 'Разгрузка — по возможности вне дороги; если иначе нельзя — быстро, со стороны тротуара, без шума и помех. Оставлять груз на дороге, обочине или тротуаре запрещено.', en: 'Unload off the road where possible; if not — quickly, on the kerb side, without noise or obstruction. Leaving goods on the road, shoulder or pavement is banned.' },
      hint: { ru: 'Разгрузка на улице — быстро и тихо.', en: 'Unloading in the street — quick and quiet.' },
      ref: 'RGC, art. 16'
    },
    {
      id: 'of-32', source: 'dgt',
      es: '¿Es recomendable la utilización de los reposacabezas en todos los asientos de un turismo?',
      tr: { ru: 'Рекомендуется ли использовать подголовники на всех сиденьях легковой?', en: 'Is it advisable to use head restraints in every seat of a car?' },
      options: [
        { es: 'Sí, puede evitar lesiones graves en la zona cervical.', ru: 'Да, они могут предотвратить тяжёлые травмы шеи.', en: 'Yes, they can prevent serious neck injuries.' },
        { es: 'No, es un elemento que puede ser perjudicial para la seguridad de los ocupantes.', ru: 'Нет, они могут вредить безопасности.', en: 'No, they can harm occupants’ safety.' },
        { es: 'No, al ser un elemento decorativo.', ru: 'Нет, это элемент декора.', en: 'No, they’re decorative.' }
      ],
      answer: 0,
      explain: { ru: 'Подголовник — элемент пассивной безопасности, а не комфорта: защищает шею при ударе, особенно сзади. Отрегулируйте его на всех местах.', en: 'A head restraint is passive safety, not comfort: it protects the neck in a crash, especially from behind. Adjust it in every seat.' },
      hint: { ru: 'Подголовник — щит для шеи.', en: 'A shield for your neck.' },
      ref: 'DGT, Manual básico, tema 5'
    },
    {
      id: 'of-38', source: 'dgt',
      es: 'Los sistemas de seguridad pasiva incluyen…',
      tr: { ru: 'К системам пассивной безопасности относятся…', en: 'Passive safety systems include…' },
      options: [
        { es: 'alumbrado, neumáticos, frenos y suspensión.', ru: '…свет, шины, тормоза и подвеска.', en: '…lights, tyres, brakes and suspension.' },
        { es: 'frenos, neumáticos, airbags y cinturones de seguridad.', ru: '…тормоза, шины, подушки и ремни.', en: '…brakes, tyres, airbags and seat belts.' },
        { es: 'cinturones de seguridad, airbags, apoyacabezas y casco.', ru: '…ремни, подушки, подголовники и шлем.', en: '…seat belts, airbags, head restraints and helmet.' }
      ],
      answer: 2,
      explain: { ru: 'Пассивная безопасность уменьшает травмы при аварии: ремни, подушки, подголовники, шлем, кузов. Тормоза, шины, свет — активная.', en: 'Passive safety reduces injuries in a crash: belts, airbags, head restraints, helmet, body shell. Brakes, tyres, lights are active.' },
      hint: { ru: 'Пассивная — когда уже поздно.', en: 'Passive — once it’s too late.' },
      ref: 'DGT, Manual básico, tema 5'
    },
    {
      id: 'of-49', source: 'dgt',
      es: 'En un turismo con cinco plazas, como norma general, ¿en qué asiento debe viajar un niño de tres años?',
      tr: { ru: 'На каком месте пятиместной легковой, как правило, должен ехать трёхлетний ребёнок?', en: 'In a five-seat car, as a rule, where should a three-year-old sit?' },
      options: [
        { es: 'En cualquiera, mientras utilice un sistema de retención infantil adecuado.', ru: 'На любом, если в подходящем детском кресле.', en: 'Any seat, if in a suitable child restraint.' },
        { es: 'En un asiento trasero.', ru: 'На заднем сиденье.', en: 'In a rear seat.' },
        { es: 'En el asiento delantero.', ru: 'На переднем сиденье.', en: 'In the front seat.' }
      ],
      answer: 1,
      explain: { ru: 'Дети ниже 135 см едут сзади в детском кресле; спереди — только в исключительных случаях (нет задних мест, они заняты другими детьми и т. п.).', en: 'Children under 135 cm ride in the back in a child restraint; in front only in exceptions (no rear seats, taken by other children, etc.).' },
      hint: { ru: 'Ниже 135 — кресло и назад.', en: 'Under 135 — a seat and the back.' },
      ref: 'RGC, art. 117'
    }
  ],
  conduccion: [
    {
      id: 'of-11', source: 'dgt',
      es: 'Si queda inmovilizado por una emergencia en un túnel, deberá…',
      tr: { ru: 'Если ваша машина встала в туннеле из-за чрезвычайной ситуации, нужно…', en: 'If you are stopped by an emergency in a tunnel, you must…' },
      options: [
        { es: 'dejar el vehículo cerrado y salir del túnel cuanto antes.', ru: '…запереть машину и как можно быстрее выйти из туннеля.', en: '…lock the vehicle and leave the tunnel as soon as possible.' },
        { es: 'apagar todas las luces si el túnel está iluminado y solicitar auxilio a través del teléfono móvil.', ru: '…выключить весь свет, если туннель освещён, и вызвать помощь по мобильному.', en: '…switch off all lights if the tunnel is lit and call for help on a mobile.' },
        { es: 'apagar el motor, conectar la señal de emergencia y mantener encendidas las luces de posición.', ru: '…заглушить двигатель, включить аварийку и оставить габариты.', en: '…stop the engine, switch on the hazards and keep the sidelights on.' }
      ],
      answer: 2,
      explain: { ru: 'В туннеле при вынужденной остановке: мотор заглушить, аварийка и габариты, по возможности в аварийный карман, помощь — с SOS-поста. Свет не выключают, машину не запирают.', en: 'Stopping in a tunnel: engine off, hazards and sidelights on, into an emergency bay if possible, call from the SOS post. Never switch lights off or lock the car.' },
      hint: { ru: 'Туннель: мотор — выкл., свет — вкл.', en: 'Tunnel: engine off, lights on.' },
      ref: 'DGT, Manual básico, tema 12'
    },
    {
      id: 'of-41', source: 'dgt',
      es: 'Circulando en un día de calor…',
      tr: { ru: 'В жаркий день…', en: 'Driving on a hot day…' },
      options: [
        { es: 'se deben hacer menos descansos, para llegar al destino cuanto antes.', ru: '…делать меньше остановок, чтобы быстрее доехать.', en: '…take fewer breaks to arrive sooner.' },
        { es: 'hay que realizar los mismos descansos que si la temperatura es normal.', ru: '…столько же остановок, как в обычную погоду.', en: '…take the same breaks as in normal weather.' },
        { es: 'se deben hacer más descansos, ya que la fatiga aparece más fácilmente.', ru: '…больше остановок: усталость приходит быстрее.', en: '…take more breaks, as fatigue comes more easily.' }
      ],
      answer: 2,
      explain: { ru: 'В жару усталость и сонливость наступают раньше: больше остановок, вода, кондиционер 20–23 °C.', en: 'Heat brings fatigue and drowsiness sooner: more breaks, water, A/C at 20–23 °C.' },
      hint: { ru: 'Жара — чаще отдыхай.', en: 'Heat — rest more often.' },
      ref: 'DGT, Manual básico, tema 14'
    }
  ],
  mecanica: [
    {
      id: 'of-12', source: 'dgt',
      es: 'Antes de repostar combustible es necesario…',
      tr: { ru: 'Перед заправкой нужно…', en: 'Before refuelling you must…' },
      options: [
        { es: 'parar el motor y apagar las luces, únicamente.', ru: '…только заглушить двигатель и выключить фары.', en: '…only stop the engine and switch off the lights.' },
        { es: 'únicamente parar el motor.', ru: '…только заглушить двигатель.', en: '…only stop the engine.' },
        { es: 'parar el motor, desconectar los sistemas eléctricos y apagar los teléfonos móviles.', ru: '…заглушить двигатель, выключить электрооборудование и мобильные телефоны.', en: '…stop the engine, switch off electrical systems and mobile phones.' }
      ],
      answer: 2,
      explain: { ru: 'На заправке — заглушить мотор, выключить электроприборы (свет, радио) и телефоны, чтобы не было искры рядом с парами топлива.', en: 'At the pump — engine off, electrical devices (lights, radio) and phones off, so no spark is near the fuel vapour.' },
      hint: { ru: 'Пары топлива + искра = пожар.', en: 'Fuel vapour + spark = fire.' },
      ref: 'RGC, art. 13'
    },
    {
      id: 'of-17', source: 'dgt',
      es: 'Un turismo con cortinillas contra el sol en las ventanillas traseras, ¿puede circular?',
      tr: { ru: 'Может ли ездить легковая со шторками от солнца на задних окнах?', en: 'May a car with sun blinds on the rear windows be driven?' },
      options: [
        { es: 'No.', ru: 'Нет.', en: 'No.' },
        { es: 'Sí, siempre.', ru: 'Да, всегда.', en: 'Yes, always.' },
        { es: 'Sólo cuando el vehículo lleva dos espejos retrovisores exteriores.', ru: 'Только если у машины два наружных зеркала.', en: 'Only if it has two exterior mirrors.' }
      ],
      answer: 2,
      explain: { ru: 'Шторки закрывают вид назад в салонном зеркале, поэтому нужны оба наружных зеркала — левое и правое.', en: 'Blinds block the interior mirror’s view, so both exterior mirrors — left and right — are required.' },
      hint: { ru: 'Шторки сзади — два боковых зеркала.', en: 'Rear blinds — two side mirrors.' },
      ref: 'DGT, Manual básico, tema 6'
    },
    {
      id: 'of-19', source: 'dgt',
      es: '¿Cómo se deben regular los espejos en los vehículos?',
      tr: { ru: 'Как регулировать зеркала?', en: 'How should mirrors be adjusted?' },
      options: [
        { es: 'Con el vehículo parado en calzada recta.', ru: 'На стоящей машине, на ровной прямой дороге.', en: 'With the vehicle stopped on a straight road.' },
        { es: 'Con el vehículo en movimiento para ver mejor.', ru: 'На ходу, чтобы лучше видеть.', en: 'While moving, to see better.' },
        { es: 'Con el vehículo parado o en movimiento, es igual.', ru: 'Без разницы, на ходу или стоя.', en: 'Stopped or moving, it doesn’t matter.' }
      ],
      answer: 0,
      explain: { ru: 'Зеркала настраивают до поездки, на стоящей машине на ровном прямом месте. Обнаружили в пути, что сбиты, — остановитесь и поправьте.', en: 'Adjust mirrors before driving, stopped on a level straight. If you notice they’re off while driving, stop and fix them.' },
      hint: { ru: 'Зеркала — до старта.', en: 'Mirrors — before you go.' },
      ref: 'DGT, Manual básico, tema 6'
    },
    {
      id: 'of-35', source: 'dgt',
      es: 'La presión de los neumáticos deberá comprobarse con los neumáticos…',
      tr: { ru: 'Давление в шинах проверяют на шинах…', en: 'Tyre pressure should be checked with the tyres…' },
      options: [
        { es: 'fríos.', ru: '…холодных.', en: '…cold.' },
        { es: 'calientes.', ru: '…горячих.', en: '…hot.' },
        { es: 'fríos o calientes, es indiferente.', ru: '…холодных или горячих — не важно.', en: '…cold or hot, it doesn’t matter.' }
      ],
      answer: 0,
      explain: { ru: 'Горячая шина показывает завышенное давление; проверяют на холодных шинах.', en: 'A hot tyre reads high; check them cold.' },
      hint: { ru: 'Давление — на холодную.', en: 'Pressure — when cold.' },
      ref: 'DGT, Manual básico, tema 15'
    }
  ],
  accidentes: [
    {
      id: 'of-21', source: 'dgt',
      es: 'En caso de un accidente donde la ayuda ya está organizada, ¿debe detenerse a prestar auxilio?',
      tr: { ru: 'Нужно ли останавливаться у ДТП, где помощь уже организована?', en: 'At a crash where help is already organised, must you stop to help?' },
      options: [
        { es: 'Sí, en vías interurbanas o donde no exista poste SOS.', ru: 'Да, за городом или где нет SOS-столба.', en: 'Yes, on rural roads or where there’s no SOS post.' },
        { es: 'Sí, debe detenerse y colaborar siempre.', ru: 'Да, всегда остановиться и помогать.', en: 'Yes, always stop and help.' },
        { es: 'No, si no está implicado debe continuar la marcha.', ru: 'Нет: если вы не участник, проезжайте дальше.', en: 'No, if not involved you should carry on.' }
      ],
      answer: 2,
      explain: { ru: 'Если помощь уже на месте, а вы не участник, — проезжайте, не создавая пробку и опасность.', en: 'If help is already there and you’re not involved — carry on without causing a jam or danger.' },
      hint: { ru: 'Помощь есть — не мешай.', en: 'Help is there — don’t get in the way.' },
      ref: 'RGC, art. 129'
    },
    {
      id: 'of-34', source: 'dgt',
      es: '¿Es conveniente circular en paralelo junto a un vehículo de dos ruedas?',
      tr: { ru: 'Стоит ли ехать рядом (параллельно) с двухколёсным?', en: 'Is it advisable to ride alongside a two-wheeler?' },
      options: [
        { es: 'Sí.', ru: 'Да.', en: 'Yes.' },
        { es: 'No.', ru: 'Нет.', en: 'No.' },
        { es: 'No, salvo en vías urbanas o con mucho tráfico.', ru: 'Нет, кроме города или плотного движения.', en: 'No, except in town or heavy traffic.' }
      ],
      answer: 1,
      explain: { ru: 'Рядом с мотоциклом или велосипедом вы в его слепой зоне и не оставляете ему места для манёвра. Держитесь впереди или позади.', en: 'Alongside a bike you’re in its blind spot and leave it no room to manoeuvre. Stay ahead or behind.' },
      hint: { ru: 'С мотоциклом — не бок о бок.', en: 'Never side by side with a bike.' },
      ref: 'DGT, Manual básico, tema 16'
    },
    {
      id: 'of-43', source: 'dgt',
      es: 'Los accidentes de tráfico generan…',
      tr: { ru: 'ДТП приводят к…', en: 'Road crashes cause…' },
      options: [
        { es: 'daños materiales y costes sanitarios, únicamente.', ru: '…только материальному ущербу и медицинским расходам.', en: '…only material damage and medical costs.' },
        { es: 'daños materiales, costes sanitarios y administrativos.', ru: '…материальному ущербу, медицинским и административным расходам.', en: '…material damage, medical and administrative costs.' },
        { es: 'un enorme impacto económico, solamente.', ru: '…только огромным экономическим потерям.', en: '…only a huge economic impact.' }
      ],
      answer: 1,
      explain: { ru: 'Помимо человеческих потерь, ДТП стоят обществу ремонтов, лечения, работы полиции, страховых и административных расходов.', en: 'Beyond the human toll, crashes cost society repairs, medical care, police work, insurance and administrative costs.' },
      hint: { ru: 'Авария платит вся страна.', en: 'The whole country pays for a crash.' },
      ref: 'DGT, Manual básico, tema 16'
    }
  ],
  eficiente: [
    {
      id: 'of-30', source: 'dgt',
      es: 'Para ahorrar carburante, ¿qué debe hacer?',
      tr: { ru: 'Что делать, чтобы сэкономить топливо?', en: 'What should you do to save fuel?' },
      options: [
        { es: 'Circular a 90 kilómetros por hora, siempre.', ru: 'Всегда ехать 90 км/ч.', en: 'Always drive at 90 km/h.' },
        { es: 'Circular con marchas cortas.', ru: 'Ехать на низких передачах.', en: 'Drive in low gears.' },
        { es: 'Adaptar las marchas a las necesidades del vehículo.', ru: 'Подбирать передачу под нужды машины.', en: 'Match the gear to the vehicle’s needs.' }
      ],
      answer: 2,
      explain: { ru: 'Экономия — в правильной передаче: как можно выше, но без перегрузки мотора. Низкие передачи и «всегда 90» — не ответ.', en: 'Saving comes from the right gear: as high as possible without labouring the engine. Low gears or “always 90” are wrong.' },
      hint: { ru: 'Высокая, но не мучительная передача.', en: 'High gear, but not labouring.' },
      ref: 'DGT, Manual básico, tema 17'
    }
  ],
  motos: [
    {
      id: 'of-46', source: 'dgt',
      es: 'El conductor de una motocicleta que cuenta con estructura de autoprotección y cinturón de seguridad, ¿está obligado a utilizar casco?',
      tr: { ru: 'Должен ли надевать шлем водитель мотоцикла с защитным каркасом и ремнём безопасности?', en: 'Must the rider of a motorbike with a protective cell and seat belt wear a helmet?' },
      options: [
        { es: 'No, debiendo utilizar el cinturón de seguridad.', ru: 'Нет, но должен пристегнуться ремнём.', en: 'No, but must wear the seat belt.' },
        { es: 'Sí, como en cualquier motocicleta.', ru: 'Да, как на любом мотоцикле.', en: 'Yes, as on any motorbike.' },
        { es: 'Sí, el casco siempre es obligatorio para los conductores de motocicletas.', ru: 'Да, шлем мотоциклисту обязателен всегда.', en: 'Yes, a helmet is always compulsory for riders.' }
      ],
      answer: 0,
      explain: { ru: 'Исключение из правила: мотоциклы с защитным каркасом и ремнями, сертифицированные для этого (как скутеры с крышей), можно водить без шлема — но пристёгнутым.', en: 'An exception: motorbikes with an approved protective structure and belts (like roofed scooters) may be ridden without a helmet — but belted.' },
      hint: { ru: 'Есть каркас и ремень — ремень вместо шлема.', en: 'A cage and belt — the belt replaces the helmet.' },
      ref: 'RGC, art. 118'
    },
    {
      id: 'of-48', source: 'dgt',
      es: 'Cuando el casco no tiene pantalla de protección, ¿es conveniente ponerse unas gafas de seguridad?',
      tr: { ru: 'Если у шлема нет визора, стоит ли надевать защитные очки?', en: 'If the helmet has no visor, should you wear safety goggles?' },
      options: [
        { es: 'Sí, porque es obligatorio.', ru: 'Да, потому что это обязательно.', en: 'Yes, because it’s compulsory.' },
        { es: 'Sí, para proteger los ojos.', ru: 'Да, чтобы защитить глаза.', en: 'Yes, to protect the eyes.' },
        { es: 'No.', ru: 'Нет.', en: 'No.' }
      ],
      answer: 1,
      explain: { ru: 'Очки не обязательны по закону, но защищают глаза от ветра, насекомых и камешков — это рекомендация.', en: 'Goggles aren’t legally required, but protect the eyes from wind, insects and stones — they’re recommended.' },
      hint: { ru: '«Обязательно» — ловушка; «полезно» — ответ.', en: '“Compulsory” is the trap; “useful” is the answer.' },
      ref: 'DGT, revista Tráfico'
    }
  ]
});
