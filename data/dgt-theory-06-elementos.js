// DGT · theory, topic 06: vehicle controls and equipment. Sources: DGT «Teórica abreviada, lectura fácil» (2025),
// DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-elementos', level: 'DGT',
    title: { ru: 'Органы управления и оборудование', en: 'Controls and equipment' },
    summary: {
      ru: 'Педали, руль, зеркала и «слепая зона», посадка, системы помощи водителю, телефон и навигатор.',
      en: 'Pedals, steering wheel, mirrors and blind spots, seating, driver-assistance systems, phone and sat-nav.'
    },
    hero: {
      es: 'Elementos del <b>vehículo</b>',
      sub: { ru: 'Органы управления, обзор, посадка и электронные помощники', en: 'Controls, visibility, seating position and electronic assistants' }
    },
    tabs: [
      { id: 'controls', label: { ru: 'Управление', en: 'Controls' }, blocks: [
        { type: 'text', body: {
          ru: ['Одни органы управления (<b>mandos</b>) работают ногами, другие — руками. На экзамене спрашивают, <b>чем</b> нажимают педаль и <b>что</b> она делает.'],
          en: ['Some controls (<b>mandos</b>) are worked with the feet, others with the hands. The exam asks <b>which foot</b> presses a pedal and <b>what</b> it does.']
        } },
        { type: 'rules', heading: { ru: 'Педали', en: 'Pedals' }, items: [
          { color: 'blue', label: { ru: 'Правая нога', en: 'Right foot' }, title: { ru: 'Газ', en: 'Accelerator' }, es: 'pedal del acelerador',
            body: { ru: 'Регулирует, сколько топлива поступает в двигатель: чем сильнее нажимаете, тем быстрее едете.', en: 'Controls how much fuel reaches the engine: the harder you press, the faster you go.' } },
          { color: 'coral', label: { ru: 'Правая нога', en: 'Right foot' }, title: { ru: 'Тормоз', en: 'Brake' }, es: 'pedal del freno',
            body: { ru: 'Снижает скорость или останавливает машину; действует <b>на все колёса</b>. Нажимать плавно.', en: 'Slows or stops the car and acts on <b>all wheels</b>. Press it smoothly.' } },
          { color: 'teal', label: { ru: 'Левая нога', en: 'Left foot' }, title: { ru: 'Сцепление', en: 'Clutch' }, es: 'pedal de embrague',
            body: { ru: 'Выжатое до конца — двигатель отсоединён от коробки передач (<b>caja de cambios</b>), можно переключить передачу.', en: 'Fully pressed, it disconnects the engine from the gearbox (<b>caja de cambios</b>) so you can change gear.' } }
        ] },
        { type: 'rules', heading: { ru: 'Руками', en: 'Hand controls' }, items: [
          { color: 'purple', title: { ru: 'Руль', en: 'Steering wheel' }, es: 'volante',
            body: { ru: 'Двумя руками, <b>за внешний обод</b>, крепко, но без силы, не перекрещивая руки. Одну руку отпускают только на время работы с другими органами.', en: 'Both hands, <b>on the outer rim</b>, firmly but without force, without crossing your hands. Let go with one hand only to work another control.' } },
          { color: 'amber', title: { ru: 'Стояночный тормоз', en: 'Parking brake' }, es: 'freno de mano',
            body: { ru: 'Рычаг под правую руку; тормозит <b>задние колёса</b> и удерживает машину на месте.', en: 'A lever for the right hand; it brakes the <b>rear wheels</b> and holds the car still.' } }
        ] },
        { type: 'examples', heading: { ru: 'Слова в предложениях', en: 'Words in sentences' }, items: [
          { es: 'Pisa el <b>embrague</b> a fondo antes de cambiar de marcha.', ru: 'Выжми сцепление до конца, прежде чем переключить передачу.', en: 'Press the clutch all the way down before changing gear.' },
          { es: 'Coge el <b>volante</b> con las dos manos.', ru: 'Держи руль двумя руками.', en: 'Hold the steering wheel with both hands.' },
          { es: 'Echa el <b>freno de mano</b> al aparcar en cuesta.', ru: 'Затяни ручник, когда паркуешься на склоне.', en: 'Put the handbrake on when you park on a slope.' }
        ] }
      ] },
      { id: 'visibility', label: { ru: 'Обзор', en: 'Visibility' }, blocks: [
        { type: 'rules', heading: { ru: 'Что помогает видеть', en: 'What helps you see' }, items: [
          { color: 'blue', title: { ru: 'Дворники', en: 'Wipers' }, es: 'limpiaparabrisas',
            body: { ru: 'Используйте самую медленную скорость, что справляется. По <b>сухому</b> стеклу не включать — царапают. Щётку (<b>escobilla</b>) менять, когда оставляет следы.', en: 'Use the slowest speed that copes. Never on a <b>dry</b> screen — they scratch it. Replace the blade (<b>escobilla</b>) when it leaves streaks.' } },
          { color: 'blue', title: { ru: 'Омыватель', en: 'Washer' }, es: 'lavaparabrisas',
            body: { ru: 'Брызгает жидкость на стекло. Следите, чтобы бачок не был пустым; можно воду с каплей моющего средства.', en: 'Sprays fluid on the glass. Keep the reservoir topped up; water with a little detergent will do.' } },
          { color: 'blue', title: { ru: 'Обогрев заднего стекла', en: 'Rear demister' }, es: 'luneta térmica',
            body: { ru: 'Нити на заднем стекле убирают лёд и запотевание.', en: 'The lines on the rear window clear ice and mist.' } },
          { color: 'blue', title: { ru: 'Зеркала', en: 'Mirrors' }, es: 'retrovisores',
            body: { ru: 'Легковой автомобиль и грузовик до 3 500 кг: <b>внутреннее</b> и <b>левое наружное</b> — обязательны, правое наружное — рекомендуется.', en: 'Cars and vans up to 3,500 kg: the <b>interior</b> and the <b>left exterior</b> mirror are compulsory; the right exterior one is recommended.' } }
        ] },
        { type: 'text', color: 'coral', body: {
          ru: 'Стекла должны давать чистый обзор: запрещены плёнки и наклейки, мешающие видеть, и <b>неомологированные</b> тонированные стёкла. Шторки от солнца на задних боковых стёклах — только если есть <b>оба</b> наружных зеркала (RGC, ст. 19).',
          en: 'The glass must give a clear view: films and stickers that block vision and <b>non-approved</b> tinted glass are banned. Sun blinds on the rear side windows are allowed only with <b>both</b> exterior mirrors fitted (RGC art. 19).'
        } },
        { type: 'figure', heading: { ru: 'Слепые зоны', en: 'Blind spots' }, src: 'img/dgt/elementos-angulo-muerto.svg',
          alt: { ru: 'Вид сверху: машина на двухполосной дороге, синие сектора — что видно в зеркалах, красные зоны сзади слева и справа — слепые зоны.', en: 'Top view: a car on a two-lane road; blue sectors show what the mirrors cover, red zones behind on the left and right are blind spots.' },
          caption: { ru: '<b>Ángulo muerto</b> — зона, которую не видно ни в одном зеркале. Перед перестроением коротко поверните голову.', en: 'The <b>ángulo muerto</b> is the zone no mirror shows. Before changing lanes, take a quick look over your shoulder.' } },
        { type: 'examples', items: [
          { es: 'Antes de cambiar de carril, comprueba el <b>ángulo muerto</b>.', ru: 'Перед сменой полосы проверь слепую зону.', en: 'Before changing lanes, check the blind spot.' },
          { es: 'El <b>retrovisor</b> exterior izquierdo es obligatorio.', ru: 'Левое наружное зеркало обязательно.', en: 'The left exterior mirror is compulsory.' },
          { es: 'No uses el <b>limpiaparabrisas</b> con el cristal seco.', ru: 'Не включай дворники на сухом стекле.', en: 'Do not use the wipers on a dry windscreen.' }
        ] }
      ] },
      { id: 'posture', label: { ru: 'Посадка', en: 'Seating' }, blocks: [
        { type: 'text', body: {
          ru: ['Перед поездкой проверьте по порядку: <b>сиденье и спинка</b> → <b>зеркала</b> → <b>ремень</b>. Хорошая посадка снижает усталость и ускоряет реакцию.'],
          en: ['Before driving, check in order: <b>seat and backrest</b> → <b>mirrors</b> → <b>seat belt</b>. A good position reduces fatigue and speeds up reactions.']
        } },
        { type: 'triggers', heading: { ru: 'Как проверить', en: 'How to check' }, items: [
          { num: '1', color: 'teal', title: { ru: 'Сиденье', en: 'Seat' }, phrases: ['asiento', 'pedales a fondo'],
            body: { ru: 'Педали выжимаются до конца без вытягивания стопы, ноги слегка согнуты. Голова — <b>выше руля</b>. Если роста не хватает — закреплённая на сиденье подставка, но <b>не подушка</b>.', en: 'You can press the pedals fully without stretching your ankles; legs slightly bent. Your head is <b>above the wheel</b>. If you are short, use a fixed seat raiser — <b>not a cushion</b>.' } },
          { num: '2', color: 'teal', title: { ru: 'Спинка', en: 'Backrest' }, phrases: ['respaldo', 'muñecas sobre el volante'],
            body: { ru: 'Спина прижата к спинке, руки вытянуты — <b>запястья ложатся на верх руля</b>.', en: 'Back against the backrest, arms straight — your <b>wrists rest on top of the wheel</b>.' } },
          { num: '3', color: 'teal', title: { ru: 'Подголовник', en: 'Head restraint' }, phrases: ['reposacabezas'],
            body: { ru: 'На <b>высоте головы</b> — защищает шею при ударе сзади.', en: 'At <b>head height</b> — it protects the neck in a rear impact.' } },
          { num: '4', color: 'blue', title: { ru: 'Зеркала', en: 'Mirrors' }, phrases: ['retrovisor interior', 'retrovisores exteriores'],
            body: { ru: 'Во внутреннем видны <b>все четыре края</b> заднего стекла; в наружных — дорога и немного борта своей машины. Сбились в пути — остановитесь на ровном месте и поправьте.', en: 'The interior mirror shows <b>all four edges</b> of the rear window; the exterior ones show the road and a little of your own car’s side. If they move while driving, stop on level ground and fix them.' } }
        ] },
        { type: 'examples', items: [
          { es: 'Ajusta el <b>reposacabezas</b> a la altura de la cabeza.', ru: 'Отрегулируй подголовник по высоте головы.', en: 'Set the head restraint at head height.' },
          { es: 'Abróchate el <b>cinturón</b> antes de arrancar.', ru: 'Пристегнись до того, как тронешься.', en: 'Fasten your seat belt before setting off.' }
        ] }
      ] },
      { id: 'assist', label: { ru: 'Помощники', en: 'Assistants' }, blocks: [
        { type: 'text', body: {
          ru: ['Электронные помощники (по-английски ADAS) <b>помогают</b>, но не ведут машину за вас: водитель отвечает за всё и может прервать манёвр в любой момент.'],
          en: ['Electronic assistants (ADAS) <b>help</b> but do not drive for you: the driver stays responsible and can stop a manoeuvre at any moment.']
        } },
        { type: 'table', heading: { ru: 'Системы и что они делают', en: 'Systems and what they do' },
          head: ['', { ru: 'Что делает', en: 'What it does' }],
          rows: [
            ['TSR', { ru: 'читает знаки скорости', en: 'reads speed-limit signs' }],
            ['LDW', { ru: 'сигнал о съезде с полосы', en: 'warns of lane departure' }],
            ['LKA', { ru: 'удерживает в полосе', en: 'keeps you in the lane' }],
            ['RCTA', { ru: 'машины сбоку при задн. ходе', en: 'cross traffic when reversing' }],
            ['AEB', { ru: 'тормозит сам при опасности', en: 'brakes itself in danger' }],
            ['ABS', { ru: 'колёса не блокируются', en: 'wheels do not lock' }],
            ['ESP', { ru: 'гасит занос', en: 'stops skids' }],
            [{ ru: 'Круиз-контроль', en: 'Cruise control' }, { ru: 'держит заданную скорость', en: 'holds a set speed' }]
          ] },
        { type: 'rules', heading: { ru: 'Подробнее', en: 'In more detail' }, items: [
          { color: 'purple', title: { ru: 'Распознавание знаков', en: 'Sign recognition' }, es: 'reconocimiento de señales (TSR)',
            body: { ru: 'Показывает ограничение на приборной панели (<b>cuadro de instrumentos</b>); в некоторых машинах сам снижает скорость.', en: 'Shows the limit on the instrument panel (<b>cuadro de instrumentos</b>); in some cars it also slows the car down.' } },
          { color: 'purple', title: { ru: 'Выезд с полосы', en: 'Lane departure' }, es: 'aviso de salida de carril (LDW)',
            body: { ru: 'Сигнал светом, звуком или <b>вибрацией</b> руля или сиденья, если вы ушли с полосы без поворотника — например, задремав.', en: 'Warns with a light, a sound or <b>vibration</b> of the wheel or seat if you drift out of the lane without indicating — for example when drowsy.' } },
          { color: 'purple', title: { ru: 'Камеры и парковка', en: 'Cameras and parking' }, es: 'cámara 360° · asistente de aparcamiento',
            body: { ru: 'Камера заднего хода и камера 360° показывают препятствия; ассистент ищет место и может сам крутить руль.', en: 'The reversing and 360° cameras show obstacles; the parking assistant finds a space and may steer by itself.' } },
          { color: 'purple', title: { ru: 'Старт на подъёме', en: 'Hill start assist' }, es: 'ayuda de salida en pendiente',
            body: { ru: 'Не даёт машине откатиться назад, пока вы переносите ногу с тормоза на газ.', en: 'Stops the car rolling back while you move your foot from brake to accelerator.' } }
        ] },
        { type: 'tip', title: { ru: 'Помни', en: 'Remember' }, body: {
          ru: 'Помощник не снимает ответственности: смотрите в зеркала и по сторонам, даже если камера «всё видит».',
          en: 'An assistant never takes the responsibility off you: check mirrors and around you even if the camera “sees everything”.'
        } }
      ] },
      { id: 'rules', label: { ru: 'Правила', en: 'Rules' }, blocks: [
        { type: 'rules', heading: { ru: 'Отвлекающие устройства', en: 'Distracting devices' }, items: [
          { color: 'coral', label: { ru: 'Запрещено', en: 'Banned' }, title: { ru: 'Телефон в руке', en: 'Phone in hand' }, es: 'móvil en la mano',
            body: { ru: 'Пользоваться телефоном за рулём запрещено. Можно только без рук и без наушников (громкая связь). Держать телефон в руке — <b>200 € и 6 баллов</b>.', en: 'Using a phone while driving is banned; it is allowed only hands-free and without earphones. Holding it in your hand costs <b>€200 and 6 points</b>.' } },
          { color: 'coral', label: { ru: 'Запрещено', en: 'Banned' }, title: { ru: 'Наушники', en: 'Earphones' }, es: 'auriculares',
            body: { ru: 'Любые наушники, подключённые к источнику звука. Ручное управление навигатором в движении — тоже нарушение (3 балла).', en: 'Any earphones connected to a sound source. Operating a sat-nav by hand while moving is also an offence (3 points).' } },
          { color: 'coral', label: { ru: 'Запрещено', en: 'Banned' }, title: { ru: 'Экраны', en: 'Screens' }, es: 'pantallas, vídeo, DVD',
            body: { ru: 'Экраны с интернетом, ТВ и видео в движении. Разрешены <b>GPS</b>, камера заднего хода и мониторы посадки пассажиров.', en: 'Screens with internet, TV and video while moving. <b>GPS</b>, the reversing camera and passenger-door monitors are allowed.' } },
          { color: 'coral', label: { ru: 'Запрещено', en: 'Banned' }, title: { ru: 'Антирадары', en: 'Radar devices' }, es: 'detectores e inhibidores de radar',
            body: { ru: 'Запрещены и детекторы, и глушилки радаров. Разрешены приложения, которые лишь сообщают, где стоят камеры.', en: 'Both radar detectors and jammers are banned. Apps that only tell you where cameras are located are allowed.' } }
        ] },
        { type: 'rules', heading: { ru: 'Двери и двигатель', en: 'Doors and engine' }, items: [
          { color: 'teal', title: { ru: 'Двери', en: 'Doors' }, es: 'puertas',
            body: { ru: 'Не ездить с открытыми дверями, не открывать до полной остановки и не убедившись, что никому не мешаете (особенно велосипедистам). Выходить — со стороны <b>ближнего края дороги</b> (RGC, ст. 114).', en: 'Do not drive with doors open, do not open them before a full stop or without checking it is safe (especially for cyclists). Get out on the side <b>nearest the kerb</b> (RGC art. 114).' } },
          { color: 'teal', title: { ru: 'Двигатель', en: 'Engine' }, es: 'apagar el motor',
            body: { ru: 'Глушить при заправке и при остановке в туннеле или закрытом месте; в туннеле дольше <b>2 минут</b> — заглушить, оставив габариты (RGC, ст. 115).', en: 'Switch off when refuelling and when stopped in a tunnel or closed space; in a tunnel for more than <b>2 minutes</b>, switch off and keep the position lights on (RGC art. 115).' } }
        ] },
        { type: 'examples', items: [
          { es: 'Está prohibido conducir con <b>auriculares</b>.', ru: 'Водить в наушниках запрещено.', en: 'Driving with earphones is forbidden.' },
          { es: 'Puedes hablar por el <b>manos libres</b> sin coger el móvil.', ru: 'Можно говорить по громкой связи, не беря телефон.', en: 'You may talk hands-free without picking up the phone.' },
          { es: 'No <b>abras la puerta</b> sin mirar si viene una bicicleta.', ru: 'Не открывай дверь, не посмотрев, не едет ли велосипед.', en: 'Do not open the door without checking for bicycles.' },
          { es: 'En la gasolinera hay que <b>apagar el motor</b>.', ru: 'На заправке нужно заглушить двигатель.', en: 'At the petrol station you must switch off the engine.' }
        ] }
      ] }
    ],
    quizCount: 20,
    quiz: [
      { es: '¿Con qué pie se pisa el pedal de embrague?',
        prompt: { ru: 'Какой ногой выжимают педаль сцепления?', en: 'Which foot presses the clutch pedal?' },
        options: [
          { es: 'Con el izquierdo.', ru: 'Левой.', en: 'The left one.' },
          { es: 'Con el derecho.', ru: 'Правой.', en: 'The right one.' },
          { es: 'Con cualquiera de los dos.', ru: 'Любой из двух.', en: 'Either of them.' }
        ],
        answer: 0,
        explain: { ru: 'Сцепление — левая нога; газ и тормоз — правая (учебник DGT, тема 6).', en: 'Clutch — left foot; accelerator and brake — right foot (DGT manual, topic 6).' } },
      { es: 'El pedal del freno de un turismo actúa…',
        prompt: { ru: 'Педаль тормоза легкового автомобиля действует…', en: 'The brake pedal of a car acts…' },
        options: [
          { es: 'solo sobre las ruedas delanteras.', ru: 'только на передние колёса.', en: 'only on the front wheels.' },
          { es: 'sobre todas las ruedas.', ru: 'на все колёса.', en: 'on all the wheels.' },
          { es: 'solo sobre las ruedas traseras.', ru: 'только на задние колёса.', en: 'only on the rear wheels.' }
        ],
        answer: 1,
        explain: { ru: 'Рабочий тормоз действует на все колёса; только на задние — стояночный (учебник DGT, тема 6).', en: 'The service brake acts on all wheels; the parking brake acts on the rear ones only (DGT manual, topic 6).' } },
      { es: '¿Sobre qué ruedas actúa normalmente el freno de mano?',
        prompt: { ru: 'На какие колёса обычно действует стояночный тормоз?', en: 'Which wheels does the handbrake normally act on?' },
        options: [
          { es: 'Sobre las delanteras.', ru: 'На передние.', en: 'The front ones.' },
          { es: 'Sobre todas.', ru: 'На все.', en: 'All of them.' },
          { es: 'Sobre las traseras.', ru: 'На задние.', en: 'The rear ones.' }
        ],
        answer: 2,
        explain: { ru: 'Ручник тормозит задние колёса и удерживает машину на месте (учебник DGT, тема 6).', en: 'The handbrake brakes the rear wheels and holds the car still (DGT manual, topic 6).' } },
      { es: '¿Para qué sirve pisar a fondo el pedal de embrague?',
        prompt: { ru: 'Зачем выжимать сцепление до конца?', en: 'Why press the clutch pedal all the way down?' },
        options: [
          { es: 'Para separar el motor de la caja de cambios y poder cambiar de marcha.', ru: 'Чтобы отсоединить двигатель от коробки и переключить передачу.', en: 'To disconnect the engine from the gearbox so you can change gear.' },
          { es: 'Para que entre más combustible en el motor.', ru: 'Чтобы в двигатель поступало больше топлива.', en: 'To let more fuel into the engine.' },
          { es: 'Para frenar las ruedas traseras.', ru: 'Чтобы затормозить задние колёса.', en: 'To brake the rear wheels.' }
        ],
        answer: 0,
        explain: { ru: 'Выжатое сцепление разрывает связь двигателя с коробкой передач и колёсами (учебник DGT, тема 6).', en: 'With the clutch down, the engine is cut off from the gearbox and wheels (DGT manual, topic 6).' } },
      { es: '¿Cómo se debe coger el volante?',
        prompt: { ru: 'Как правильно держать руль?', en: 'How should you hold the steering wheel?' },
        options: [
          { es: 'Con una mano por la parte interior.', ru: 'Одной рукой за внутреннюю часть.', en: 'With one hand on the inner part.' },
          { es: 'Con las dos manos por la parte exterior, sin cruzarlas al girar.', ru: 'Двумя руками за внешний обод, не перекрещивая их в повороте.', en: 'With both hands on the outer rim, without crossing them when turning.' },
          { es: 'Con las dos manos cruzadas para girar más rápido.', ru: 'Скрестив руки, чтобы быстрее поворачивать.', en: 'With crossed hands to turn faster.' }
        ],
        answer: 1,
        explain: { ru: 'Две руки, внешний обод, крепко без лишней силы, руки не перекрещивать (учебник DGT, тема 6).', en: 'Both hands, outer rim, firm but relaxed, never crossed (DGT manual, topic 6).' } },
      { es: '¿Qué retrovisores son obligatorios en un turismo?',
        prompt: { ru: 'Какие зеркала обязательны у легкового автомобиля?', en: 'Which mirrors are compulsory on a car?' },
        options: [
          { es: 'Solo los dos exteriores.', ru: 'Только два наружных.', en: 'Only the two exterior ones.' },
          { es: 'Solo el interior.', ru: 'Только внутреннее.', en: 'Only the interior one.' },
          { es: 'El interior y el exterior izquierdo.', ru: 'Внутреннее и левое наружное.', en: 'The interior and the left exterior one.' }
        ],
        answer: 2,
        explain: { ru: 'По учебнику DGT обязательны внутреннее и левое наружное зеркало; правое рекомендуется (тема 6).', en: 'Per the DGT manual the interior and left exterior mirrors are compulsory; the right one is recommended (topic 6).' } },
      { es: '¿Cuándo se pueden llevar cortinillas contra el sol en las ventanillas traseras?',
        prompt: { ru: 'Когда разрешены солнцезащитные шторки на задних боковых окнах?', en: 'When are sun blinds allowed on the rear side windows?' },
        options: [
          { es: 'Cuando el vehículo lleva los dos retrovisores exteriores.', ru: 'Когда у машины есть оба наружных зеркала.', en: 'When the car has both exterior mirrors.' },
          { es: 'Nunca.', ru: 'Никогда.', en: 'Never.' },
          { es: 'Solo de noche.', ru: 'Только ночью.', en: 'Only at night.' }
        ],
        answer: 0,
        explain: { ru: 'Шторки и плёнки на задних окнах допустимы только при двух наружных зеркалах (RGC, ст. 19).', en: 'Blinds or films on rear windows are only allowed with two exterior mirrors (RGC art. 19).' } },
      { es: '¿Qué es el ángulo muerto?',
        prompt: { ru: 'Что такое «ángulo muerto»?', en: 'What is the “ángulo muerto”?' },
        img: 'img/dgt/elementos-angulo-muerto.svg',
        options: [
          { es: 'La zona alrededor del vehículo que no se ve por los retrovisores.', ru: 'Зона вокруг машины, которую не видно в зеркалах.', en: 'The area around the car that the mirrors do not show.' },
          { es: 'El ángulo máximo que puede girar el volante.', ru: 'Максимальный угол поворота руля.', en: 'The maximum angle the steering wheel can turn.' },
          { es: 'La zona que ilumina la luz de cruce.', ru: 'Зона, которую освещает ближний свет.', en: 'The area lit by the dipped beam.' }
        ],
        answer: 0,
        explain: { ru: 'Слепая зона — сзади сбоку, её не видно в зеркалах; перед перестроением поверните голову.', en: 'The blind spot is behind and to the side, out of mirror view; glance over your shoulder before changing lanes.' } },
      { es: 'Antes de cambiar de carril a la izquierda, para controlar el ángulo muerto debe…',
        prompt: { ru: 'Перед перестроением влево, чтобы проверить слепую зону, нужно…', en: 'Before moving into the left lane, to check the blind spot you should…' },
        options: [
          { es: 'mirar solo el retrovisor interior.', ru: 'посмотреть только во внутреннее зеркало.', en: 'look only in the interior mirror.' },
          { es: 'girar brevemente la cabeza además de mirar los retrovisores.', ru: 'кроме зеркал, коротко повернуть голову.', en: 'glance briefly over your shoulder as well as checking the mirrors.' },
          { es: 'tocar el claxon.', ru: 'посигналить.', en: 'sound the horn.' }
        ],
        answer: 1,
        explain: { ru: 'Зеркала не показывают слепую зону — нужен короткий взгляд через плечо (RGC, ст. 74: убедиться, что манёвр безопасен).', en: 'Mirrors miss the blind spot, so take a quick look over your shoulder (RGC art. 74: make sure the manoeuvre is safe).' } },
      { es: 'El retrovisor interior está bien colocado cuando…',
        prompt: { ru: 'Внутреннее зеркало настроено правильно, когда…', en: 'The interior mirror is correctly set when…' },
        options: [
          { es: 'se ve la cara del conductor.', ru: 'в нём видно лицо водителя.', en: 'you can see the driver’s face.' },
          { es: 'se ven los asientos traseros.', ru: 'видны задние сиденья.', en: 'you can see the rear seats.' },
          { es: 'se ven los cuatro bordes de la luneta trasera.', ru: 'видны все четыре края заднего стекла.', en: 'you can see all four edges of the rear window.' }
        ],
        answer: 2,
        explain: { ru: 'Правильная настройка: в зеркале целиком помещается заднее стекло (учебник DGT, тема 6).', en: 'Correct setting: the whole rear window fits in the mirror (DGT manual, topic 6).' } },
      { es: 'Si durante la marcha nota que un retrovisor está mal colocado, ¿qué debe hacer?',
        prompt: { ru: 'В пути вы заметили, что зеркало сбилось. Что делать?', en: 'While driving you notice a mirror is out of position. What should you do?' },
        options: [
          { es: 'Ajustarlo sin parar, con una mano.', ru: 'Поправить одной рукой на ходу.', en: 'Adjust it with one hand while moving.' },
          { es: 'Parar en un lugar adecuado, llano y recto, y ajustarlo.', ru: 'Остановиться в подходящем ровном месте и поправить.', en: 'Stop in a suitable, flat, straight place and adjust it.' },
          { es: 'Seguir sin usarlo hasta llegar al destino.', ru: 'Ехать дальше, не пользуясь им.', en: 'Carry on without using it until you arrive.' }
        ],
        answer: 1,
        explain: { ru: 'Зеркала регулируют до поездки; если сбились — остановиться и настроить (учебник DGT, тема 6).', en: 'Mirrors are set before driving; if they move, stop and adjust them (DGT manual, topic 6).' } },
      { es: '¿Cómo comprueba que el respaldo del asiento está a la distancia correcta?',
        prompt: { ru: 'Как проверить, что спинка сиденья на правильном расстоянии?', en: 'How do you check the backrest is at the right distance?' },
        options: [
          { es: 'Con la espalda apoyada y los brazos estirados, las muñecas llegan a la parte superior del volante.', ru: 'Спина прижата, руки вытянуты — запястья достают до верха руля.', en: 'Back against the seat, arms straight — your wrists reach the top of the wheel.' },
          { es: 'Tocando el parabrisas con la mano.', ru: 'Дотянувшись рукой до лобового стекла.', en: 'By touching the windscreen with your hand.' },
          { es: 'Con los codos totalmente doblados.', ru: 'Локти полностью согнуты.', en: 'With your elbows fully bent.' }
        ],
        answer: 0,
        explain: { ru: 'Тест «запястья на руле»: так вы дотягиваетесь до всех органов, не отрывая спину (учебник DGT, тема 6).', en: 'The “wrists on the wheel” test means you reach every control without leaving the backrest (DGT manual, topic 6).' } },
      { es: '¿A qué altura debe estar el reposacabezas?',
        prompt: { ru: 'На какой высоте должен быть подголовник?', en: 'How high should the head restraint be?' },
        options: [
          { es: 'A la altura del cuello.', ru: 'На уровне шеи.', en: 'At neck height.' },
          { es: 'Lo más bajo posible.', ru: 'Как можно ниже.', en: 'As low as possible.' },
          { es: 'A la altura de la cabeza.', ru: 'На уровне головы.', en: 'At head height.' }
        ],
        answer: 2,
        explain: { ru: 'Подголовник на высоте головы защищает шею при ударе сзади (учебник DGT, тема 6).', en: 'At head height the restraint protects your neck in a rear impact (DGT manual, topic 6).' } },
      { es: 'Si por su estatura no ve por encima del volante, ¿qué puede usar?',
        prompt: { ru: 'Если из-за роста вы не видите поверх руля, что можно использовать?', en: 'If you are too short to see over the wheel, what may you use?' },
        options: [
          { es: 'Un cojín cualquiera.', ru: 'Любую подушку.', en: 'Any cushion.' },
          { es: 'Un complemento adecuado bien sujeto al asiento, que no sea un cojín.', ru: 'Подходящую подставку, закреплённую на сиденье, но не подушку.', en: 'A suitable raiser fixed to the seat, not a cushion.' },
          { es: 'Nada: debe mirar a través del volante.', ru: 'Ничего: смотреть сквозь руль.', en: 'Nothing: look through the wheel.' }
        ],
        answer: 1,
        explain: { ru: 'Голова должна быть выше руля; допустимо закреплённое приспособление, но не подушка (учебник DGT, тема 6).', en: 'Your head must be above the wheel; a fixed raiser is fine, a cushion is not (DGT manual, topic 6).' } },
      { es: '¿Qué debe hacer en último lugar antes de empezar a circular?',
        prompt: { ru: 'Что делают последним перед началом движения?', en: 'What do you do last before setting off?' },
        options: [
          { es: 'Ajustar el asiento.', ru: 'Регулируют сиденье.', en: 'Adjust the seat.' },
          { es: 'Ajustar los retrovisores.', ru: 'Настраивают зеркала.', en: 'Adjust the mirrors.' },
          { es: 'Abrocharse el cinturón de seguridad.', ru: 'Пристёгивают ремень безопасности.', en: 'Fasten the seat belt.' }
        ],
        answer: 2,
        explain: { ru: 'Порядок: сиденье → зеркала → ремень; ремень застёгивают после всех настроек (учебник DGT, тема 6).', en: 'Order: seat → mirrors → belt; the belt goes on after all adjustments (DGT manual, topic 6).' } },
      { es: '¿Por qué no se debe usar el limpiaparabrisas con el cristal seco?',
        prompt: { ru: 'Почему нельзя включать дворники на сухом стекле?', en: 'Why should you not use the wipers on a dry windscreen?' },
        options: [
          { es: 'Porque gasta mucha batería.', ru: 'Тратят много заряда аккумулятора.', en: 'They drain the battery.' },
          { es: 'Porque puede rayar el cristal.', ru: 'Могут поцарапать стекло.', en: 'They can scratch the glass.' },
          { es: 'Porque está prohibido de día.', ru: 'Днём это запрещено.', en: 'It is banned in daytime.' }
        ],
        answer: 1,
        explain: { ru: 'Щётки по сухому стеклу царапают его; сначала включают омыватель (учебник DGT, тема 6).', en: 'Blades on dry glass scratch it; use the washer first (DGT manual, topic 6).' } },
      { es: '¿Para qué sirve la luneta térmica?',
        prompt: { ru: 'Для чего нужен обогрев заднего стекла?', en: 'What is the rear window heater for?' },
        options: [
          { es: 'Para calentar el habitáculo.', ru: 'Чтобы обогревать салон.', en: 'To heat the cabin.' },
          { es: 'Para que no se vea el interior.', ru: 'Чтобы не было видно салон.', en: 'To hide the interior.' },
          { es: 'Para quitar el hielo y el vaho del cristal trasero.', ru: 'Чтобы убирать лёд и запотевание с заднего стекла.', en: 'To clear ice and mist from the rear window.' }
        ],
        answer: 2,
        explain: { ru: 'Нити на заднем стекле нагреваются и очищают его (учебник DGT, тема 6).', en: 'The heated lines on the rear window clear it (DGT manual, topic 6).' } },
      { es: '¿Está permitido colocar láminas adhesivas que reduzcan la visibilidad en el parabrisas?',
        prompt: { ru: 'Можно ли клеить на лобовое стекло плёнки, ухудшающие обзор?', en: 'May you stick films on the windscreen that reduce visibility?' },
        options: [
          { es: 'Sí, si son de color oscuro.', ru: 'Да, если они тёмные.', en: 'Yes, if they are dark.' },
          { es: 'No, el conductor debe tener una visibilidad diáfana.', ru: 'Нет, у водителя должен быть ясный обзор.', en: 'No, the driver must have a clear view.' },
          { es: 'Sí, solo en verano.', ru: 'Да, только летом.', en: 'Yes, in summer only.' }
        ],
        answer: 1,
        explain: { ru: 'Стёкла должны давать чистый обзор без плёнок и наклеек; неомологированная тонировка запрещена (RGC, ст. 19).', en: 'Glass must give a clear view without films or stickers; non-approved tint is banned (RGC art. 19).' } },
      { es: '¿Qué hace el sistema de reconocimiento de señales de tráfico (TSR)?',
        prompt: { ru: 'Что делает система распознавания знаков (TSR)?', en: 'What does traffic sign recognition (TSR) do?' },
        options: [
          { es: 'Detecta las señales de límite de velocidad y las muestra en el cuadro de instrumentos.', ru: 'Распознаёт знаки ограничения скорости и показывает их на панели приборов.', en: 'Detects speed-limit signs and shows them on the instrument panel.' },
          { es: 'Enciende las luces automáticamente.', ru: 'Сама включает фары.', en: 'Switches the lights on automatically.' },
          { es: 'Avisa de que los neumáticos tienen poca presión.', ru: 'Предупреждает о низком давлении в шинах.', en: 'Warns of low tyre pressure.' }
        ],
        answer: 0,
        explain: { ru: 'TSR читает знаки скорости; некоторые машины ещё и сами снижают скорость (учебник DGT, тема 6).', en: 'TSR reads speed signs; some cars also slow down by themselves (DGT manual, topic 6).' } },
      { es: 'El aviso de salida de carril (LDW) avisa al conductor…',
        prompt: { ru: 'Система LDW предупреждает водителя…', en: 'Lane departure warning (LDW) warns the driver…' },
        options: [
          { es: 'cuando hay un radar.', ru: 'о радаре впереди.', en: 'when there is a speed camera.' },
          { es: 'cuando cambia de carril de forma imprevista, por ejemplo por distracción o sueño.', ru: 'когда машина уходит с полосы непреднамеренно — из-за отвлечения или сонливости.', en: 'when the car leaves the lane unintentionally, e.g. through distraction or drowsiness.' },
          { es: 'cuando el depósito está casi vacío.', ru: 'когда бак почти пуст.', en: 'when the tank is nearly empty.' }
        ],
        answer: 1,
        explain: { ru: 'LDW сигналит светом, звуком или вибрацией руля/сиденья (учебник DGT, тема 6).', en: 'LDW warns with a light, sound or wheel/seat vibration (DGT manual, topic 6).' } },
      { es: '¿Cuál es la función de la asistencia de mantenimiento de carril (LKA)?',
        prompt: { ru: 'Что делает система удержания в полосе (LKA)?', en: 'What does lane keeping assist (LKA) do?' },
        options: [
          { es: 'Mantiene la distancia con el vehículo de delante.', ru: 'Держит дистанцию до машины впереди.', en: 'Keeps the distance to the car ahead.' },
          { es: 'Aparca el vehículo sin conductor.', ru: 'Паркует машину без водителя.', en: 'Parks the car without a driver.' },
          { es: 'Detecta las líneas de la calzada y ayuda a no salirse del carril.', ru: 'Видит разметку и помогает не выехать из полосы.', en: 'Detects road lines and helps you stay in the lane.' }
        ],
        answer: 2,
        explain: { ru: 'LKA распознаёт линии и подруливает, чтобы машина оставалась в своей полосе (учебник DGT, тема 6).', en: 'LKA reads the lines and steers to keep you in your lane (DGT manual, topic 6).' } },
      { es: 'El sistema de alerta de tráfico cruzado trasero (RCTA) es útil sobre todo…',
        prompt: { ru: 'Система RCTA особенно полезна…', en: 'Rear cross-traffic alert (RCTA) is most useful…' },
        options: [
          { es: 'al salir marcha atrás de una plaza de aparcamiento.', ru: 'при выезде задним ходом с парковочного места.', en: 'when reversing out of a parking space.' },
          { es: 'al adelantar en autovía.', ru: 'при обгоне на автомагистрали.', en: 'when overtaking on a dual carriageway.' },
          { es: 'al circular con niebla.', ru: 'при езде в тумане.', en: 'when driving in fog.' }
        ],
        answer: 0,
        explain: { ru: 'RCTA подаёт звук, если сзади-сбоку приближается машина, пока вы едете задним ходом (учебник DGT, тема 6).', en: 'RCTA beeps if a vehicle approaches from the side while you reverse (DGT manual, topic 6).' } },
      { es: 'Si el asistente de aparcamiento gira el volante por sí solo, el conductor…',
        prompt: { ru: 'Если парковочный ассистент сам вращает руль, водитель…', en: 'If the parking assistant steers by itself, the driver…' },
        options: [
          { es: 'puede bajarse del vehículo.', ru: 'может выйти из машины.', en: 'may get out of the car.' },
          { es: 'debe vigilar la maniobra y puede detenerla en cualquier momento.', ru: 'должен следить за манёвром и может прервать его в любой момент.', en: 'must watch the manoeuvre and can stop it at any time.' },
          { es: 'no tiene ninguna responsabilidad.', ru: 'ни за что не отвечает.', en: 'bears no responsibility.' }
        ],
        answer: 1,
        explain: { ru: 'Ассистент лишь помогает; ответственность и контроль остаются у водителя (учебник DGT, тема 6).', en: 'The assistant only helps; control and responsibility stay with the driver (DGT manual, topic 6).' } },
      { es: '¿Para qué sirve el sistema de ayuda de salida en pendiente?',
        prompt: { ru: 'Для чего нужна система помощи при старте на подъёме?', en: 'What is hill start assist for?' },
        options: [
          { es: 'Para bajar cuestas sin frenar.', ru: 'Чтобы спускаться без торможения.', en: 'To go downhill without braking.' },
          { es: 'Para subir más rápido.', ru: 'Чтобы быстрее подниматься.', en: 'To climb faster.' },
          { es: 'Para que el vehículo no se vaya hacia atrás al arrancar en una cuesta.', ru: 'Чтобы машина не откатилась назад при старте на подъёме.', en: 'To stop the car rolling back when starting on a hill.' }
        ],
        answer: 2,
        explain: { ru: 'Система удерживает машину, пока нога переходит с тормоза на газ (учебник DGT, тема 6).', en: 'It holds the car while your foot moves from brake to accelerator (DGT manual, topic 6).' } },
      { es: '¿Qué hace el control de crucero?',
        prompt: { ru: 'Что делает круиз-контроль?', en: 'What does cruise control do?' },
        options: [
          { es: 'Mantiene la velocidad elegida por el conductor.', ru: 'Поддерживает скорость, выбранную водителем.', en: 'Keeps the speed chosen by the driver.' },
          { es: 'Impide que las ruedas se bloqueen.', ru: 'Не даёт колёсам заблокироваться.', en: 'Stops the wheels locking.' },
          { es: 'Avisa de la presencia de peatones.', ru: 'Предупреждает о пешеходах.', en: 'Warns of pedestrians.' }
        ],
        answer: 0,
        explain: { ru: 'Круиз-контроль держит заданную скорость; от блокировки колёс защищает ABS. Внимание водителя по-прежнему нужно.', en: 'Cruise control holds a set speed; ABS is what stops wheels locking. The driver must still pay attention.' } },
      { es: '¿Está permitido conducir utilizando el móvil sujeto con la mano?',
        prompt: { ru: 'Можно ли за рулём пользоваться телефоном, держа его в руке?', en: 'May you drive using a phone held in your hand?' },
        options: [
          { es: 'Sí, si se circula a menos de 30 km/h.', ru: 'Да, если скорость ниже 30 км/ч.', en: 'Yes, below 30 km/h.' },
          { es: 'Sí, solo para leer mensajes.', ru: 'Да, только чтобы читать сообщения.', en: 'Yes, only to read messages.' },
          { es: 'No; es una infracción grave que resta 6 puntos.', ru: 'Нет; это грубое нарушение, минус 6 баллов.', en: 'No; it is a serious offence costing 6 points.' }
        ],
        answer: 2,
        explain: { ru: 'Телефон в руке запрещён (RGC, ст. 18.2); штраф 200 € и 6 баллов (LSV, ст. 76 и приложение II).', en: 'A phone in the hand is banned (RGC art. 18.2); €200 fine and 6 points (LSV art. 76 and annex II).' } },
      { es: '¿Cuándo se puede hablar por teléfono mientras se conduce?',
        prompt: { ru: 'Когда можно говорить по телефону за рулём?', en: 'When may you talk on the phone while driving?' },
        options: [
          { es: 'Cuando se hace sin usar las manos ni auriculares.', ru: 'Когда разговор идёт без рук и без наушников.', en: 'When it is done without hands and without earphones.' },
          { es: 'Con un solo auricular.', ru: 'С одним наушником.', en: 'With one earphone.' },
          { es: 'Nunca, ni siquiera con manos libres.', ru: 'Никогда, даже по громкой связи.', en: 'Never, not even hands-free.' }
        ],
        answer: 0,
        explain: { ru: 'Разрешено только без рук и без наушников (громкая связь машины) (RGC, ст. 18.2.b).', en: 'Only hands-free without earphones, e.g. the car’s system (RGC art. 18.2.b).' } },
      { es: '¿Cuál de estos dispositivos puede utilizar el conductor con el vehículo en movimiento?',
        prompt: { ru: 'Каким из этих устройств водитель может пользоваться в движении?', en: 'Which of these devices may the driver use while moving?' },
        options: [
          { es: 'Un reproductor de DVD.', ru: 'DVD-проигрывателем.', en: 'A DVD player.' },
          { es: 'El navegador GPS, sin manipularlo con las manos.', ru: 'GPS-навигатором, не трогая его руками.', en: 'The GPS sat-nav, without operating it by hand.' },
          { es: 'Una pantalla con acceso a internet.', ru: 'Экраном с доступом в интернет.', en: 'A screen with internet access.' }
        ],
        answer: 1,
        explain: { ru: 'GPS разрешён (RGC, ст. 18.1), но управлять им руками в движении — нарушение (3 балла).', en: 'GPS is allowed (RGC art. 18.1), but operating it by hand while moving is an offence (3 points).' } },
      { es: '¿Se pueden llevar detectores de radar en el vehículo?',
        prompt: { ru: 'Можно ли возить в машине детектор радаров?', en: 'May you carry a radar detector in the car?' },
        options: [
          { es: 'Sí, si está apagado.', ru: 'Да, если он выключен.', en: 'Yes, if it is switched off.' },
          { es: 'No; solo se permiten los avisadores que informan de dónde están los radares.', ru: 'Нет; разрешены только оповещатели о местах установки радаров.', en: 'No; only apps that tell you where cameras are located are allowed.' },
          { es: 'Sí, fuera de poblado.', ru: 'Да, вне населённых пунктов.', en: 'Yes, outside built-up areas.' }
        ],
        answer: 1,
        explain: { ru: 'Детекторы и глушилки радаров запрещены; разрешены только предупреждения о местах контроля (RGC, ст. 18.3).', en: 'Detectors and jammers are banned; only location warnings are allowed (RGC art. 18.3).' } },
      { es: '¿Cuándo se pueden abrir las puertas del vehículo?',
        prompt: { ru: 'Когда можно открывать двери машины?', en: 'When may you open the car doors?' },
        options: [
          { es: 'Cuando el vehículo está totalmente parado y no hay peligro para nadie.', ru: 'Когда машина полностью остановилась и это никому не угрожает.', en: 'When the car is fully stopped and it is safe for everyone.' },
          { es: 'Cuando el vehículo va a menos de 10 km/h.', ru: 'Когда машина едет медленнее 10 км/ч.', en: 'When the car is below 10 km/h.' },
          { es: 'En cualquier momento si no hay coches detrás.', ru: 'В любой момент, если сзади нет машин.', en: 'Any time if there are no cars behind.' }
        ],
        answer: 0,
        explain: { ru: 'Открывать двери можно только после полной остановки, убедившись в безопасности, особенно для велосипедистов (RGC, ст. 114).', en: 'Doors may only be opened after a full stop and once it is safe, especially for cyclists (RGC art. 114).' } },
      { es: 'Por regla general, ¿por qué lado se debe salir del vehículo?',
        prompt: { ru: 'Как правило, с какой стороны выходят из машины?', en: 'As a rule, on which side should you get out of the car?' },
        options: [
          { es: 'Por el lado de la calzada.', ru: 'Со стороны проезжей части.', en: 'On the traffic side.' },
          { es: 'Por cualquier lado.', ru: 'С любой стороны.', en: 'On either side.' },
          { es: 'Por el lado más próximo al borde de la vía.', ru: 'Со стороны ближнего края дороги.', en: 'On the side nearest the edge of the road.' }
        ],
        answer: 2,
        explain: { ru: 'Садятся и выходят со стороны края дороги и только при стоящей машине (RGC, ст. 114.2).', en: 'Get in and out on the kerb side and only when stopped (RGC art. 114.2).' } },
      { es: 'Si permanece detenido en un túnel más de dos minutos, debe…',
        prompt: { ru: 'Если вы стоите в туннеле больше двух минут, нужно…', en: 'If you are held up in a tunnel for more than two minutes, you must…' },
        options: [
          { es: 'encender la luz de carretera.', ru: 'включить дальний свет.', en: 'switch on the main beam.' },
          { es: 'parar el motor y mantener encendidas las luces de posición.', ru: 'заглушить двигатель и оставить габаритные огни.', en: 'switch off the engine and keep the position lights on.' },
          { es: 'salir del vehículo y caminar hasta la salida.', ru: 'выйти и идти к выезду.', en: 'get out and walk to the exit.' }
        ],
        answer: 1,
        explain: { ru: 'В туннеле дольше 2 минут — заглушить двигатель, габариты не выключать (RGC, ст. 115.2).', en: 'In a tunnel for over 2 minutes, switch off the engine but keep position lights on (RGC art. 115.2).' } },
      { es: '¿Está permitido conducir con auriculares conectados a un reproductor de música?',
        prompt: { ru: 'Можно ли водить в наушниках, подключённых к плееру?', en: 'May you drive with earphones connected to a music player?' },
        options: [
          { es: 'Sí, si el volumen es bajo.', ru: 'Да, если громкость тихая.', en: 'Yes, at low volume.' },
          { es: 'Sí, en autopista.', ru: 'Да, на автомагистрали.', en: 'Yes, on a motorway.' },
          { es: 'No, está prohibido.', ru: 'Нет, запрещено.', en: 'No, it is forbidden.' }
        ],
        answer: 2,
        explain: { ru: 'Любые наушники, подключённые к источнику звука, запрещены (RGC, ст. 18.2); минус 3 балла.', en: 'Any earphones connected to a sound source are banned (RGC art. 18.2); 3 points.' } }
    ]
  }
]);
