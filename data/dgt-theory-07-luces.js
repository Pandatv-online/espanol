// DGT · theory, topic 07: vehicle lights and warnings. Sources: DGT «Teórica abreviada, lectura fácil» (2025),
// DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-luces', level: 'DGT',
    title: { ru: 'Световые приборы', en: 'Vehicle lights' },
    summary: {
      ru: 'Какой свет когда включать: габариты, ближний, дальний, противотуманные, аварийка; световые и звуковые сигналы.',
      en: 'Which light to use when: position, dipped, main beam, fog lights, hazards; light and horn warnings.'
    },
    hero: {
      es: 'Sistema de <b>luces</b>',
      sub: { ru: 'Видеть, быть видимым и предупреждать других', en: 'To see, to be seen and to warn others' }
    },
    tabs: [
      { id: 'when', label: { ru: 'Когда', en: 'When' }, blocks: [
        { type: 'text', body: {
          ru: ['Свет нужен <b>от заката до восхода</b> (<b>entre el ocaso y la salida del sol</b>) и <b>в любое время</b> в туннелях, подземных переездах и на участках со знаком «Túnel» (S-5), а также при плохой видимости: туман, сильный дождь, снег, дым, пыль (RGC, ст. 98 и 106).'],
          en: ['Lights are needed <b>from sunset to sunrise</b> (<b>entre el ocaso y la salida del sol</b>) and <b>at any time</b> in tunnels, underpasses and road sections with the “Túnel” sign (S-5), and in poor visibility: fog, heavy rain, snow, smoke, dust (RGC arts. 98 and 106).']
        } },
        { type: 'rules', heading: { ru: 'Три задачи света', en: 'Three jobs of lights' }, items: [
          { color: 'amber', label: { ru: 'Видеть', en: 'See' }, title: { ru: 'Освещать дорогу', en: 'Light the road' }, es: 'ver',
            body: { ru: 'Дальний, ближний, противотуманные передние.', en: 'Main beam, dipped beam, front fog lights.' } },
          { color: 'teal', label: { ru: 'Быть видимым', en: 'Be seen' }, title: { ru: 'Показать машину', en: 'Show the vehicle' }, es: 'ser vistos',
            body: { ru: 'Габариты, контурные огни, задний противотуманный, стоп-сигналы, аварийка, световозвращатели.', en: 'Position and outline lights, rear fog light, brake lights, hazards, reflectors.' } },
          { color: 'coral', label: { ru: 'Предупреждать', en: 'Warn' }, title: { ru: 'Сообщить о манёвре', en: 'Signal a manoeuvre' }, es: 'advertir',
            body: { ru: 'Указатели поворота и огонь заднего хода.', en: 'Indicators and the reversing light.' } }
        ] },
        { type: 'text', color: 'amber', body: {
          ru: '<b>Недостаточно освещённая дорога</b> (<b>vía insuficientemente iluminada</b>): нельзя прочитать номер машины за <b>10 м</b> или различить тёмный автомобиль за <b>50 м</b> (RGC, ст. 100.3).',
          en: 'A <b>poorly lit road</b> (<b>vía insuficientemente iluminada</b>): you cannot read a number plate at <b>10 m</b> or make out a dark car at <b>50 m</b> (RGC art. 100.3).'
        } },
        { type: 'signs', heading: { ru: 'Знаки про свет', en: 'Signs about lights' }, items: [
          { code: 'S-5', note: { ru: 'Туннель: свет обязателен в любое время суток', en: 'Tunnel: lights on at any time of day' } },
          { code: 'R-413', note: { ru: 'Обязательно как минимум ближний свет', en: 'At least dipped beam compulsory' } },
          { code: 'S-24', note: { ru: 'Конец обязательного ближнего света', en: 'End of compulsory dipped beam' } },
          { code: 'P-33', note: { ru: 'Опасность: участок с плохой видимостью', en: 'Danger: section with reduced visibility' } }
        ] },
        { type: 'text', color: 'coral', body: {
          ru: 'Сломалась фара в пути — снизьте скорость так, чтобы успеть остановиться в пределах освещённой зоны, и ремонтируйте свет при первой возможности (RGC, ст. 107).',
          en: 'If a light fails on the way, slow down so you can stop within the lit area, and get it fixed as soon as possible (RGC art. 107).'
        } }
      ] },
      { id: 'see', label: { ru: 'Видеть', en: 'Seeing' }, blocks: [
        { type: 'rules', heading: { ru: 'Фары', en: 'Headlights' }, items: [
          { color: 'amber', title: { ru: 'Дальний свет', en: 'Main beam' }, es: 'luz de largo alcance o de carretera',
            body: { ru: 'Обязателен <b>вне населённого пункта</b>, ночью, на неосвещённой дороге, на скорости <b>более 40 км/ч</b>, а также в плохо освещённых туннелях. Запрещён, когда машина <b>стоит</b>.', en: 'Compulsory <b>outside built-up areas</b> at night on unlit roads at <b>over 40 km/h</b>, and in poorly lit tunnels. Banned when the vehicle is <b>stationary</b>.' } },
          { color: 'amber', title: { ru: 'Ближний свет', en: 'Dipped beam' }, es: 'luz de corto alcance o de cruce',
            body: { ru: 'Ночью в городе и на освещённых дорогах, в освещённых туннелях; на неосвещённой дороге — если нет дальнего, при скорости <b>не выше 40 км/ч</b> или если можно ослепить других.', en: 'At night in towns and on lit roads, in lit tunnels; on unlit roads — if there is no main beam, at <b>40 km/h or less</b>, or if you could dazzle others.' } },
          { color: 'amber', title: { ru: 'Передние противотуманные', en: 'Front fog lights' }, es: 'antiniebla delantera',
            body: { ru: 'Туман, сильный дождь, снег, дым, пыль; а также узкие (≤ 6,5 м) дороги с серией поворотов, обозначенные знаками. Белые или жёлтые.', en: 'Fog, heavy rain, snow, smoke, dust; also narrow (≤ 6.5 m) signposted roads with a series of bends. White or yellow.' } }
        ] },
        { type: 'figure', heading: { ru: 'Ближний и дальний', en: 'Dipped vs main beam' }, src: 'img/dgt/luces-cruce-carretera.svg',
          alt: { ru: 'Два вида сверху: машина с ближним светом освещает короткий участок своей полосы и не слепит встречную; машина с дальним светом освещает дорогу далеко вперёд.', en: 'Two top views: a car on dipped beam lights a short stretch of its own lane without dazzling the oncoming car; a car on main beam lights the road far ahead.' },
          caption: { ru: 'Ближний освещает меньше, но не слепит. Дальний — только когда никого не ослепите.', en: 'Dipped beam lights less but does not dazzle. Main beam only when you will not dazzle anyone.' } },
        { type: 'rules', heading: { ru: 'Ослепление', en: 'Dazzle' }, items: [
          { color: 'coral', title: { ru: 'Переключитесь на ближний', en: 'Dip your lights' }, es: 'deslumbramiento',
            body: { ru: 'Как только можете ослепить встречного — <b>даже если он сам не переключился</b>; дальний включайте снова, только <b>разъехавшись</b>. То же — с машиной впереди (через зеркало).', en: 'As soon as you could dazzle an oncoming driver — <b>even if they do not dip theirs</b>; switch back only <b>after passing</b>. The same with a car ahead (via its mirror).' } },
          { color: 'coral', title: { ru: 'Если ослепили вас', en: 'If you are dazzled' }, es: 'reducir la velocidad',
            body: { ru: 'Снизьте скорость, при необходимости <b>до полной остановки</b> (RGC, ст. 102.3).', en: 'Slow down, <b>stopping completely</b> if necessary (RGC art. 102.3).' } }
        ] },
        { type: 'examples', items: [
          { es: 'Enciende la <b>luz de cruce</b> al entrar en el túnel.', ru: 'Включи ближний свет при въезде в туннель.', en: 'Switch on the dipped beam when entering the tunnel.' },
          { es: 'Cambia a <b>luz de cruce</b>: viene un coche de frente.', ru: 'Переключись на ближний: навстречу едет машина.', en: 'Dip your lights: a car is coming towards you.' },
          { es: 'Con niebla, pon la <b>antiniebla delantera</b>.', ru: 'В тумане включи передние противотуманки.', en: 'In fog, turn on the front fog lights.' },
          { es: 'Me ha <b>deslumbrado</b> un camión.', ru: 'Меня ослепил грузовик.', en: 'A lorry dazzled me.' }
        ] }
      ] },
      { id: 'seen', label: { ru: 'Быть видным', en: 'Being seen' }, blocks: [
        { type: 'table', heading: { ru: 'Огни и цвета', en: 'Lights and colours' },
          head: [{ ru: 'Огонь', en: 'Light' }, 'es', { ru: 'Цвет', en: 'Colour' }],
          rows: [
            [{ ru: 'Габарит передний', en: 'Front position' }, 'posición delantera', { ru: 'белый', en: 'white' }],
            [{ ru: 'Габарит задний', en: 'Rear position' }, 'posición trasera', { ru: 'красный', en: 'red' }],
            [{ ru: 'Боковой', en: 'Side marker' }, 'posición lateral', { ru: 'жёлтый (amarillo auto)', en: 'amber' }],
            [{ ru: 'Стоп-сигнал', en: 'Brake light' }, 'luz de frenado', { ru: 'красный', en: 'red' }],
            [{ ru: 'Противотуман. задний', en: 'Rear fog light' }, 'antiniebla trasera', { ru: 'красный', en: 'red' }],
            [{ ru: 'Задний ход', en: 'Reversing' }, 'marcha atrás', { ru: 'белый', en: 'white' }],
            [{ ru: 'Поворотники', en: 'Indicators' }, 'indicadores de dirección', { ru: 'жёлтый, мигает', en: 'amber, flashing' }]
          ] },
        { type: 'rules', heading: { ru: 'Огни, чтобы вас видели', en: 'Lights to be seen' }, items: [
          { color: 'teal', title: { ru: 'Габариты', en: 'Position lights' }, es: 'luces de posición',
            body: { ru: 'В движении всегда вместе с ближним или дальним. <b>Одни габариты</b> — только у стоящей машины.', en: 'When moving, always with dipped or main beam. <b>Position lights alone</b> — only on a stationary vehicle.' } },
          { color: 'teal', title: { ru: 'Контурные огни', en: 'Outline lights' }, es: 'luces de gálibo',
            body: { ru: 'Показывают ширину. Обязательны при ширине <b>более 2,10 м</b>, по желанию — от 1,80 до 2,10 м.', en: 'Show the width. Compulsory <b>over 2.10 m</b> wide, optional from 1.80 to 2.10 m.' } },
          { color: 'teal', title: { ru: 'Задний противотуманный', en: 'Rear fog light' }, es: 'antiniebla trasera',
            body: { ru: 'Только при <b>особенно</b> плохой погоде: густой туман, очень сильный дождь, сильный снегопад, густая пыль или дым. Включается вместе с ближним, дальним или передними противотуманными.', en: 'Only in <b>especially</b> bad conditions: thick fog, very heavy rain, heavy snowfall, dense dust or smoke. Works only with dipped, main beam or front fog lights.' } },
          { color: 'teal', title: { ru: 'Стоп-сигналы', en: 'Brake lights' }, es: 'luz de frenado · tercera luz de freno',
            body: { ru: 'Загораются при торможении. Третий стоп-сигнал выше остальных — по желанию у автомобилей, у мотоциклов запрещён.', en: 'Light up when braking. A third, higher brake light is optional on cars and banned on motorcycles.' } },
          { color: 'teal', title: { ru: 'Огонь заднего хода', en: 'Reversing light' }, es: 'luz de marcha atrás',
            body: { ru: 'Белый, включается сам при включении задней передачи. У мотоциклов запрещён.', en: 'White, switches on by itself when reverse gear is engaged. Banned on motorcycles.' } },
          { color: 'teal', title: { ru: 'Световозвращатели', en: 'Reflectors' }, es: 'catadióptricos',
            body: { ru: 'Отражают чужой свет: спереди белые, сзади красные, сбоку жёлтые; у прицепов сзади — треугольные.', en: 'Reflect other vehicles’ light: white at the front, red at the rear, amber at the sides; triangular at the rear of trailers.' } }
        ] },
        { type: 'examples', items: [
          { es: 'Las <b>luces de posición</b> traseras son rojas.', ru: 'Задние габариты — красные.', en: 'The rear position lights are red.' },
          { es: 'Solo pon la <b>antiniebla trasera</b> con niebla espesa.', ru: 'Задний противотуманный — только в густом тумане.', en: 'Use the rear fog light only in thick fog.' },
          { es: 'Al meter la marcha atrás se enciende la <b>luz de marcha atrás</b>.', ru: 'При включении задней передачи загорается фонарь заднего хода.', en: 'Engaging reverse switches on the reversing light.' }
        ] }
      ] },
      { id: 'warn', label: { ru: 'Сигналы', en: 'Warnings' }, blocks: [
        { type: 'rules', heading: { ru: 'Световые сигналы', en: 'Light signals' }, items: [
          { color: 'coral', title: { ru: 'Поворотник', en: 'Indicator' }, es: 'intermitente',
            body: { ru: 'Заранее перед каждым боковым смещением: поворот, перестроение, разворот. Выключить, как только машина заняла новую траекторию (RGC, ст. 109).', en: 'In good time before any sideways move: turning, changing lanes, U-turn. Switch it off as soon as the car is on its new path (RGC art. 109).' } },
          { color: 'coral', title: { ru: 'Аварийная сигнализация', en: 'Hazard lights' }, es: 'señal de emergencia',
            body: { ru: 'Мигают все поворотники; на панели — <b>красный мигающий</b> индикатор. Авария, поломка, упал груз, плохо пассажиру; остановка на <b>автомагистрали</b> или при плохой видимости; машина не может держать минимальную скорость; посадка и высадка детей из школьного автобуса.', en: 'All indicators flash; a <b>flashing red</b> tell-tale on the dash. Accident, breakdown, lost load, a passenger taken ill; stopping on a <b>motorway</b> or in poor visibility; a vehicle unable to keep the minimum speed; children getting on or off a school bus.' } },
          { color: 'coral', title: { ru: 'Мигание фарами', en: 'Flashing headlights' }, es: 'ráfagas de luz',
            body: { ru: 'Вместо звукового сигнала — <b>даже в городе</b>: короткие вспышки ближним или дальним, не ослепляя (RGC, ст. 109.3).', en: 'Instead of the horn — <b>even in towns</b>: short flashes of dipped or main beam without dazzling (RGC art. 109.3).' } },
          { color: 'coral', title: { ru: 'Остановка и торможение', en: 'Stopping and braking' }, es: 'luz de frenado reiterada',
            body: { ru: 'О резком торможении предупреждают, несколько раз нажимая на тормоз; чтобы встать у обочины — ещё и поворотником.', en: 'Warn of hard braking by tapping the brake several times; to pull over, use the indicator as well.' } }
        ] },
        { type: 'triggers', heading: { ru: 'Звуковой сигнал: только 3 случая', en: 'Horn: only 3 cases' }, items: [
          { num: '1', color: 'purple', title: { ru: 'Избежать аварии', en: 'Avoid an accident' }, phrases: ['evitar un accidente', 'vías estrechas con muchas curvas'],
            body: { ru: 'Особенно на узких дорогах со множеством поворотов.', en: 'Especially on narrow roads with many bends.' } },
          { num: '2', color: 'purple', title: { ru: 'Обгон вне города', en: 'Overtaking out of town' }, phrases: ['fuera de poblado', 'adelantar'],
            body: { ru: 'Предупредить водителя, что вы собираетесь его обогнать.', en: 'Warn a driver that you are about to overtake.' } },
          { num: '3', color: 'purple', title: { ru: 'Срочная поездка', en: 'Emergency trip' }, phrases: ['servicio de urgencia'],
            body: { ru: 'Обычная машина везёт, например, тяжелораненого (сигналя прерывисто, с аварийкой или машущим платком; RGC, ст. 70).', en: 'An ordinary car carrying, for example, a seriously injured person (intermittent horn plus hazard lights or a waved cloth; RGC art. 70).' } }
        ] },
        { type: 'signs', items: [
          { code: 'R-310', note: { ru: 'Звуковые сигналы запрещены (кроме как чтобы избежать аварии)', en: 'Horn prohibited (except to avoid an accident)' } }
        ] },
        { type: 'text', color: 'purple', body: {
          ru: 'Звук — не резкий, без злоупотребления: сигналить «просто так» запрещено (RGC, ст. 110).',
          en: 'The sound must not be shrill, and using the horn for no reason is banned (RGC art. 110).'
        } },
        { type: 'examples', items: [
          { es: 'Pon el <b>intermitente</b> antes de cambiar de carril.', ru: 'Включи поворотник перед сменой полосы.', en: 'Indicate before changing lanes.' },
          { es: 'Tras la avería, enciende las <b>luces de emergencia</b>.', ru: 'После поломки включи аварийку.', en: 'After the breakdown, switch on the hazard lights.' },
          { es: 'No se puede tocar el <b>claxon</b> sin motivo.', ru: 'Сигналить без причины нельзя.', en: 'You may not sound the horn for no reason.' }
        ] }
      ] },
      { id: 'cases', label: { ru: 'Ситуации', en: 'Situations' }, blocks: [
        { type: 'table', heading: { ru: 'Какой свет где', en: 'Which light where' },
          head: [{ ru: 'Ситуация', en: 'Situation' }, { ru: 'Свет', en: 'Light' }],
          rows: [
            [{ ru: 'Ночь, город', en: 'Night, town' }, 'cruce'],
            [{ ru: 'Ночь, трасса, > 40 км/ч', en: 'Night, open road, > 40' }, 'carretera'],
            [{ ru: 'Встречная машина', en: 'Oncoming car' }, 'cruce'],
            [{ ru: 'Туннель (днём тоже)', en: 'Tunnel (also by day)' }, 'cruce / carretera'],
            [{ ru: 'Мотоцикл днём', en: 'Motorcycle by day' }, 'cruce'],
            [{ ru: 'Реверсивная полоса', en: 'Reversible lane' }, 'cruce'],
            [{ ru: 'Туман, сильный дождь', en: 'Fog, heavy rain' }, 'antiniebla delantera'],
            [{ ru: 'Густой туман', en: 'Thick fog' }, '+ antiniebla trasera'],
            [{ ru: 'Стоянка ночью у дороги', en: 'Parked at night by road' }, 'posición'],
            [{ ru: 'Остановка на автомагистрали', en: 'Stopped on a motorway' }, 'emergencia + posición']
          ] },
        { type: 'text', color: 'teal', body: {
          ru: 'Машина <b>стоит ночью</b> на проезжей части или обочине — включены габариты (и контурные огни, если положены). На плохо освещённой улице-трассе (<b>travesía</b>) их можно заменить стояночными огнями; на хорошо освещённой городской улице габариты не обязательны (RGC, ст. 105).',
          en: 'A vehicle <b>stopped at night</b> on the carriageway or hard shoulder keeps its position lights on (and outline lights if fitted). On a poorly lit through-road (<b>travesía</b>) parking lights may replace them; on a well-lit town street they are not required (RGC art. 105).'
        } },
        { type: 'table', heading: { ru: 'Индикаторы на панели', en: 'Dashboard tell-tales' },
          head: [{ ru: 'Значок', en: 'Symbol' }, { ru: 'Цвет', en: 'Colour' }, { ru: 'Что включено', en: 'What is on' }],
          rows: [
            [{ ru: 'фара, прямые лучи', en: 'lamp, straight rays' }, { ru: 'синий', en: 'blue' }, 'carretera'],
            [{ ru: 'фара, лучи вниз', en: 'lamp, rays angled down' }, { ru: 'зелёный', en: 'green' }, 'cruce'],
            [{ ru: 'фара влево + волна', en: 'lamp left + wavy line' }, { ru: 'зелёный', en: 'green' }, 'antiniebla delantera'],
            [{ ru: 'фара вправо + волна', en: 'lamp right + wavy line' }, { ru: 'жёлтый', en: 'amber' }, 'antiniebla trasera'],
            [{ ru: 'две стрелки', en: 'two arrows' }, { ru: 'зелёный, мигает', en: 'green, flashing' }, 'intermitentes'],
            [{ ru: 'треугольник', en: 'triangle' }, { ru: 'красный, мигает', en: 'red, flashing' }, 'emergencia']
          ] },
        { type: 'tip', title: { ru: 'Запомнить', en: 'Remember' }, body: {
          ru: ['<b>Синий</b> на панели — дальний (может ослепить). <b>Жёлтый</b> противотуманный — задний: включайте только в очень плохую погоду.'],
          en: ['<b>Blue</b> on the dash — main beam (may dazzle). The <b>amber</b> fog symbol — rear fog light: only in very bad weather.']
        } }
      ] }
    ],
    quizCount: 20,
    quiz: [
      { es: '¿Cuándo es obligatorio llevar encendido el alumbrado durante el día?',
        prompt: { ru: 'Когда днём обязательно включать фары?', en: 'When are lights compulsory during the day?' },
        options: [
          { es: 'Al circular por un túnel.', ru: 'При проезде туннеля.', en: 'When driving through a tunnel.' },
          { es: 'Nunca durante el día.', ru: 'Днём — никогда.', en: 'Never in daytime.' },
          { es: 'Solo en autopistas.', ru: 'Только на автомагистралях.', en: 'Only on motorways.' }
        ],
        answer: 0,
        explain: { ru: 'В туннелях и на участках со знаком S-5 свет нужен в любое время суток (RGC, ст. 98).', en: 'In tunnels and S-5 sections lights are needed at any time of day (RGC art. 98).' } },
      { es: '¿Qué indica esta señal respecto al alumbrado?',
        prompt: { ru: 'Что означает этот знак в отношении света?', en: 'What does this sign mean for your lights?' },
        sign: 'S-5',
        options: [
          { es: 'Que solo hay que encender las luces de noche.', ru: 'Что свет нужен только ночью.', en: 'Lights only needed at night.' },
          { es: 'Que debe llevar el alumbrado encendido a cualquier hora del día.', ru: 'Что свет должен быть включён в любое время суток.', en: 'Lights must be on at any time of day.' },
          { es: 'Que está prohibido usar la luz de cruce.', ru: 'Что ближний свет запрещён.', en: 'Dipped beam is banned.' }
        ],
        answer: 1,
        explain: { ru: 'S-5 «Туннель»: свет обязателен днём и ночью (RGC, ст. 98–101).', en: 'S-5 “Tunnel”: lights are compulsory day and night (RGC arts. 98–101).' } },
      { es: 'Esta señal obliga a circular…',
        prompt: { ru: 'Этот знак обязывает ехать…', en: 'This sign requires you to drive…' },
        sign: 'R-413',
        options: [
          { es: 'con la luz antiniebla trasera.', ru: 'с задним противотуманным огнём.', en: 'with the rear fog light.' },
          { es: 'sin ninguna luz.', ru: 'без света.', en: 'with no lights.' },
          { es: 'con, al menos, la luz de corto alcance, sea de día o de noche.', ru: 'как минимум с ближним светом, днём и ночью.', en: 'with at least the dipped beam, day or night.' }
        ],
        answer: 2,
        explain: { ru: 'R-413: ближний свет обязателен независимо от освещения — до знака S-24.', en: 'R-413: dipped beam is compulsory regardless of light conditions — until sign S-24.' } },
      { es: '¿Qué indica esta señal?',
        prompt: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        sign: 'S-24',
        options: [
          { es: 'Fin de la obligación de llevar la luz de corto alcance.', ru: 'Конец обязательного ближнего света.', en: 'End of compulsory dipped beam.' },
          { es: 'Obligación de usar la luz de carretera.', ru: 'Обязателен дальний свет.', en: 'Main beam compulsory.' },
          { es: 'Túnel próximo.', ru: 'Скоро туннель.', en: 'Tunnel ahead.' }
        ],
        answer: 0,
        explain: { ru: 'S-24 отменяет обязанность, введённую знаком R-413.', en: 'S-24 ends the obligation set by sign R-413.' } },
      { es: 'Circulando de noche fuera de poblado, por una vía sin iluminar, a 90 km/h y sin otros vehículos, ¿qué luz debe llevar?',
        prompt: { ru: 'Ночь, вне населённого пункта, неосвещённая дорога, 90 км/ч, никого вокруг. Какой свет?', en: 'Night, outside a built-up area, unlit road, 90 km/h, no other traffic. Which light?' },
        options: [
          { es: 'La de cruce.', ru: 'Ближний.', en: 'Dipped beam.' },
          { es: 'La de carretera.', ru: 'Дальний.', en: 'Main beam.' },
          { es: 'Solo las de posición.', ru: 'Только габариты.', en: 'Position lights only.' }
        ],
        answer: 1,
        explain: { ru: 'Вне города ночью на неосвещённой дороге быстрее 40 км/ч обязателен дальний, если никого не ослепите (RGC, ст. 100).', en: 'Out of town at night on an unlit road above 40 km/h, main beam is compulsory unless it would dazzle (RGC art. 100).' } },
      { es: 'Por la noche, en una vía interurbana sin iluminar, circula a 30 km/h. ¿Qué luz puede llevar?',
        prompt: { ru: 'Ночь, загородная неосвещённая дорога, скорость 30 км/ч. Какой свет можно включить?', en: 'Night, unlit open road, 30 km/h. Which light may you use?' },
        options: [
          { es: 'Solo la antiniebla delantera.', ru: 'Только передние противотуманки.', en: 'Only the front fog lights.' },
          { es: 'Ninguna, a esa velocidad no es obligatoria.', ru: 'Никакой — на такой скорости не обязательно.', en: 'None — not required at that speed.' },
          { es: 'La de cruce o la de carretera.', ru: 'Ближний или дальний.', en: 'Dipped or main beam.' }
        ],
        answer: 2,
        explain: { ru: 'До 40 км/ч дальний не обязателен: можно ближний (или дальний, если никого не слепит) (RGC, ст. 101.2.b).', en: 'Up to 40 km/h main beam is not compulsory: dipped beam is fine (or main if it dazzles nobody) (RGC art. 101.2.b).' } },
      { es: '¿Cuándo está prohibido utilizar la luz de largo alcance?',
        prompt: { ru: 'Когда запрещён дальний свет?', en: 'When is the main beam forbidden?' },
        options: [
          { es: 'Cuando el vehículo está parado o estacionado.', ru: 'Когда машина стоит или припаркована.', en: 'When the vehicle is stopped or parked.' },
          { es: 'En vías interurbanas de noche.', ru: 'На загородных дорогах ночью.', en: 'On open roads at night.' },
          { es: 'Al circular a más de 40 km/h.', ru: 'На скорости выше 40 км/ч.', en: 'Above 40 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'Дальний запрещён у стоящей машины и для мигания вне предусмотренных случаев (RGC, ст. 100.2).', en: 'Main beam is banned on a stationary vehicle and for flashing outside the permitted cases (RGC art. 100.2).' } },
      { es: 'Se considera que una vía está insuficientemente iluminada cuando…',
        prompt: { ru: 'Дорога считается недостаточно освещённой, когда…', en: 'A road is considered poorly lit when…' },
        options: [
          { es: 'no hay farolas cada 50 metros.', ru: 'фонари стоят реже, чем через 50 м.', en: 'there are no street lights every 50 m.' },
          { es: 'no se puede leer una matrícula a 10 metros o no se distingue un vehículo oscuro a 50 metros.', ru: 'нельзя прочитать номер за 10 м или различить тёмную машину за 50 м.', en: 'you cannot read a plate at 10 m or make out a dark car at 50 m.' },
          { es: 'no se ve la línea central a 100 metros.', ru: 'не видна осевая линия за 100 м.', en: 'you cannot see the centre line at 100 m.' }
        ],
        answer: 1,
        explain: { ru: 'Критерий из RGC, ст. 100.3: номер — 10 м, тёмная машина — 50 м.', en: 'The test in RGC art. 100.3: plate — 10 m, dark car — 50 m.' } },
      { es: 'Circula con la luz de carretera y se cruza con otro vehículo. ¿Cuándo puede volver a encenderla?',
        prompt: { ru: 'Вы едете с дальним и встречаете машину. Когда можно снова включить дальний?', en: 'You are on main beam and meet an oncoming car. When can you switch it back on?' },
        img: 'img/dgt/luces-cruce-carretera.svg',
        options: [
          { es: 'Cuando el otro vehículo esté a 50 metros.', ru: 'Когда встречная будет в 50 м.', en: 'When the other car is 50 m away.' },
          { es: 'Cuando el otro conductor cambie a cruce.', ru: 'Когда встречный переключится на ближний.', en: 'When the other driver dips their lights.' },
          { es: 'Después de rebasar la posición del vehículo cruzado.', ru: 'После того как разъедетесь с ним.', en: 'Once you have passed the other vehicle.' }
        ],
        answer: 2,
        explain: { ru: 'Ближний держат до момента, когда разъедетесь со встречной машиной (RGC, ст. 102.1).', en: 'Keep dipped beam until you have passed the oncoming vehicle (RGC art. 102.1).' } },
      { es: 'Si el conductor que viene de frente no cambia a luz de cruce, usted…',
        prompt: { ru: 'Если встречный не переключается на ближний, вы…', en: 'If the oncoming driver does not dip their lights, you…' },
        options: [
          { es: 'debe poner igualmente la luz de cruce.', ru: 'всё равно переключаетесь на ближний.', en: 'must still dip yours.' },
          { es: 'puede mantener la de carretera.', ru: 'можете оставить дальний.', en: 'may keep the main beam.' },
          { es: 'debe hacerle ráfagas continuas.', ru: 'должны непрерывно мигать ему.', en: 'must flash him continuously.' }
        ],
        answer: 0,
        explain: { ru: 'Ближний обязателен, «даже если встречный этого не делает» (RGC, ст. 102.1).', en: 'You must dip “even if the other driver does not” (RGC art. 102.1).' } },
      { es: '¿Debe cambiar a luz de cruce cuando sigue a otro vehículo de cerca?',
        prompt: { ru: 'Нужно ли переключаться на ближний, когда едете близко за другой машиной?', en: 'Should you dip your lights when following another vehicle closely?' },
        options: [
          { es: 'No, solo con los que vienen de frente.', ru: 'Нет, только перед встречными.', en: 'No, only for oncoming traffic.' },
          { es: 'Sí, porque puede deslumbrarle a través del retrovisor.', ru: 'Да, можно ослепить водителя через зеркало.', en: 'Yes, you could dazzle the driver through the mirror.' },
          { es: 'Solo en autopista.', ru: 'Только на автомагистрали.', en: 'Only on motorways.' }
        ],
        answer: 1,
        explain: { ru: 'Та же осторожность — с машинами в попутном направлении (RGC, ст. 102.2).', en: 'The same care applies to vehicles in front going your way (RGC art. 102.2).' } },
      { es: 'Si sufre un deslumbramiento, ¿qué debe hacer?',
        prompt: { ru: 'Вас ослепили. Что делать?', en: 'You are dazzled. What should you do?' },
        options: [
          { es: 'Encender la luz de carretera para ver mejor.', ru: 'Включить дальний, чтобы лучше видеть.', en: 'Switch on the main beam to see better.' },
          { es: 'Mantener la velocidad y mirar al centro de la calzada.', ru: 'Сохранить скорость и смотреть в центр дороги.', en: 'Keep your speed and look at the centre of the road.' },
          { es: 'Reducir la velocidad, incluso hasta detenerse si es necesario.', ru: 'Снизить скорость, при необходимости до остановки.', en: 'Slow down, even to a stop if needed.' }
        ],
        answer: 2,
        explain: { ru: 'Ослеплённый водитель снижает скорость, при необходимости останавливается (RGC, ст. 102.3).', en: 'A dazzled driver slows down, stopping if needed (RGC art. 102.3).' } },
      { es: '¿Qué vehículos deben llevar la luz de cruce encendida también de día en cualquier vía?',
        prompt: { ru: 'Какие транспортные средства обязаны ездить с ближним светом и днём на любой дороге?', en: 'Which vehicles must use the dipped beam by day on any road?' },
        options: [
          { es: 'Las motocicletas.', ru: 'Мотоциклы.', en: 'Motorcycles.' },
          { es: 'Los turismos de color oscuro.', ru: 'Тёмные легковые машины.', en: 'Dark-coloured cars.' },
          { es: 'Los camiones de más de 3.500 kg.', ru: 'Грузовики тяжелее 3 500 кг.', en: 'Lorries over 3,500 kg.' }
        ],
        answer: 0,
        explain: { ru: 'Мотоциклы — всегда с ближним днём (RGC, ст. 104.a).', en: 'Motorcycles always use dipped beam by day (RGC art. 104.a).' } },
      { es: 'Por un carril reversible, de día, ¿qué luz debe llevar?',
        prompt: { ru: 'Днём вы едете по реверсивной полосе. Какой свет нужен?', en: 'By day you drive in a reversible lane. Which light?' },
        options: [
          { es: 'Ninguna, es de día.', ru: 'Никакой, сейчас день.', en: 'None, it is daytime.' },
          { es: 'La de corto alcance.', ru: 'Ближний.', en: 'Dipped beam.' },
          { es: 'La antiniebla trasera.', ru: 'Задний противотуманный.', en: 'Rear fog light.' }
        ],
        answer: 1,
        explain: { ru: 'На реверсивной, временной дополнительной полосе или полосе встречного направления — ближний и днём (RGC, ст. 104.b).', en: 'In reversible, temporary extra or contraflow lanes, dipped beam even by day (RGC art. 104.b).' } },
      { es: '¿Cuándo se puede usar la luz antiniebla delantera?',
        prompt: { ru: 'Когда можно включать передние противотуманные фары?', en: 'When may you use the front fog lights?' },
        options: [
          { es: 'Siempre de noche.', ru: 'Всегда ночью.', en: 'Always at night.' },
          { es: 'En ciudad, para que le vean mejor.', ru: 'В городе, чтобы вас лучше видели.', en: 'In towns, to be seen better.' },
          { es: 'Con niebla, lluvia intensa, nieve, humo o polvo, y en vías estrechas con muchas curvas señalizadas.', ru: 'В туман, сильный дождь, снег, дым, пыль и на узких извилистых дорогах со знаками.', en: 'In fog, heavy rain, snow, smoke or dust, and on narrow signposted winding roads.' }
        ],
        answer: 2,
        explain: { ru: 'Только при плохой видимости или на узких (≤ 6,5 м) дорогах с серией поворотов (RGC, ст. 106.2).', en: 'Only in poor visibility or on narrow (≤ 6.5 m) roads with a series of bends (RGC art. 106.2).' } },
      { es: '¿Cuándo debe encender la luz antiniebla trasera?',
        prompt: { ru: 'Когда нужно включать задний противотуманный огонь?', en: 'When should you use the rear fog light?' },
        options: [
          { es: 'Con condiciones especialmente desfavorables, como niebla espesa o lluvia muy intensa.', ru: 'При особенно плохих условиях: густой туман, очень сильный дождь.', en: 'In especially bad conditions such as thick fog or very heavy rain.' },
          { es: 'Siempre que llueva.', ru: 'Всегда, когда идёт дождь.', en: 'Whenever it rains.' },
          { es: 'De noche en autopista.', ru: 'Ночью на автомагистрали.', en: 'At night on motorways.' }
        ],
        answer: 0,
        explain: { ru: 'Задняя противотуманка сильно слепит идущих сзади, поэтому только в особо плохую погоду (RGC, ст. 106.2).', en: 'The rear fog light dazzles drivers behind, so only in especially bad weather (RGC art. 106.2).' } },
      { es: '¿Puede encenderse la luz antiniebla trasera sola, sin otras luces delanteras?',
        prompt: { ru: 'Можно ли включить задний противотуманный огонь без передних фар?', en: 'Can the rear fog light be used without any front lights?' },
        options: [
          { es: 'Sí, de día.', ru: 'Да, днём.', en: 'Yes, by day.' },
          { es: 'No; solo con la de cruce, la de carretera o la antiniebla delantera.', ru: 'Нет; только вместе с ближним, дальним или передними противотуманками.', en: 'No; only with dipped, main beam or front fog lights.' },
          { es: 'Sí, si hay niebla.', ru: 'Да, если туман.', en: 'Yes, if it is foggy.' }
        ],
        answer: 1,
        explain: { ru: 'Задний противотуманный работает только при включённых габаритах и ближнем, дальнем или передних противотуманных (Manual DGT, тема 16).', en: 'The rear fog light works only with position lights plus dipped, main or front fog lights (DGT Manual, topic 16).' } },
      { es: 'Con lluvia intensa, si no lleva la antiniebla delantera ni la de carretera, debe llevar…',
        prompt: { ru: 'Сильный дождь; вы не включили ни передние противотуманки, ни дальний. Нужно включить…', en: 'Heavy rain; you are using neither front fog lights nor main beam. You must use…' },
        options: [
          { es: 'solo las luces de posición.', ru: 'только габариты.', en: 'position lights only.' },
          { es: 'las luces de emergencia.', ru: 'аварийную сигнализацию.', en: 'the hazard lights.' },
          { es: 'la luz de corto alcance.', ru: 'ближний свет.', en: 'the dipped beam.' }
        ],
        answer: 2,
        explain: { ru: 'При плохой видимости нужен передний противотуманный, ближний или дальний (RGC, ст. 106.2).', en: 'In poor visibility use front fog lights, dipped or main beam (RGC art. 106.2).' } },
      { es: 'Si se le avería el alumbrado durante la marcha y tiene que circular con luces de menor intensidad, debe…',
        prompt: { ru: 'В пути отказали фары и приходится ехать с более слабым светом. Нужно…', en: 'Your headlights fail on the way and you must drive with weaker lights. You must…' },
        options: [
          { es: 'reducir la velocidad para poder detenerse dentro de la zona iluminada.', ru: 'снизить скорость, чтобы остановиться в пределах освещённой зоны.', en: 'slow down so you can stop within the lit area.' },
          { es: 'encender las luces de emergencia y seguir igual.', ru: 'включить аварийку и ехать как прежде.', en: 'switch on the hazards and carry on as before.' },
          { es: 'circular por el arcén.', ru: 'ехать по обочине.', en: 'drive on the hard shoulder.' }
        ],
        answer: 0,
        explain: { ru: 'Скорость — такая, чтобы остановиться в освещённой зоне (RGC, ст. 107).', en: 'Choose a speed that lets you stop within the lit area (RGC art. 107).' } },
      { es: '¿De qué color son las luces de posición traseras?',
        prompt: { ru: 'Какого цвета задние габаритные огни?', en: 'What colour are the rear position lights?' },
        options: [
          { es: 'Blancas.', ru: 'Белые.', en: 'White.' },
          { es: 'Rojas.', ru: 'Красные.', en: 'Red.' },
          { es: 'Amarillas.', ru: 'Жёлтые.', en: 'Amber.' }
        ],
        answer: 1,
        explain: { ru: 'Спереди белые, сзади красные, сбоку жёлтые (учебник DGT, тема 7).', en: 'White at the front, red at the rear, amber at the sides (DGT manual, topic 7).' } },
      { es: '¿Cuándo se pueden llevar encendidas solo las luces de posición?',
        prompt: { ru: 'Когда можно включать одни габариты, без фар?', en: 'When may you use position lights alone?' },
        options: [
          { es: 'En ciudad, de noche, circulando.', ru: 'Ночью в городе в движении.', en: 'At night in town while moving.' },
          { es: 'En túneles iluminados.', ru: 'В освещённых туннелях.', en: 'In lit tunnels.' },
          { es: 'Con el vehículo inmovilizado.', ru: 'Когда машина стоит.', en: 'When the vehicle is stationary.' }
        ],
        answer: 2,
        explain: { ru: 'В движении габариты всегда горят вместе с ближним или дальним; одни — только у стоящей машины (RGC, ст. 105).', en: 'When moving, position lights always go with dipped or main beam; alone only when stationary (RGC art. 105).' } },
      { es: '¿Qué vehículos deben llevar luces de gálibo?',
        prompt: { ru: 'Какие транспортные средства обязаны иметь контурные огни?', en: 'Which vehicles must have outline marker lights?' },
        options: [
          { es: 'Los de más de 2,10 metros de anchura.', ru: 'Шире 2,10 м.', en: 'Those over 2.10 m wide.' },
          { es: 'Todos los turismos.', ru: 'Все легковые.', en: 'All cars.' },
          { es: 'Los de más de 12 metros de longitud.', ru: 'Длиннее 12 м.', en: 'Those over 12 m long.' }
        ],
        answer: 0,
        explain: { ru: 'Контурные огни обязательны при ширине более 2,10 м; от 1,80 до 2,10 м — по желанию (RGC, ст. 99).', en: 'Outline lights are compulsory over 2.10 m wide; optional between 1.80 and 2.10 m (RGC art. 99).' } },
      { es: 'Un vehículo queda inmovilizado de noche en el arcén de una carretera. ¿Qué luces debe llevar encendidas?',
        prompt: { ru: 'Ночью машина остановилась на обочине загородной дороги. Какие огни должны гореть?', en: 'At night a car is stopped on the hard shoulder of a road. Which lights must be on?' },
        options: [
          { es: 'La luz de carretera.', ru: 'Дальний свет.', en: 'Main beam.' },
          { es: 'Las de posición y, en su caso, las de gálibo.', ru: 'Габариты и, если есть, контурные огни.', en: 'Position lights and, if fitted, outline lights.' },
          { es: 'Ninguna, si está fuera de la calzada.', ru: 'Никаких, если она вне проезжей части.', en: 'None if it is off the carriageway.' }
        ],
        answer: 1,
        explain: { ru: 'Стоящая ночью на проезжей части или обочине машина — с габаритами (и контурными огнями) (RGC, ст. 105.1).', en: 'A vehicle stopped at night on the carriageway or shoulder keeps position (and outline) lights on (RGC art. 105.1).' } },
      { es: 'Si se detiene por una avería en una autovía, además de las luces de posición si es de noche, debe encender…',
        prompt: { ru: 'Вы остановились из-за поломки на автомагистрали (autovía). Кроме габаритов ночью нужно включить…', en: 'You stop with a breakdown on an autovía. Besides position lights at night, you must use…' },
        options: [
          { es: 'la luz antiniebla trasera.', ru: 'задний противотуманный.', en: 'the rear fog light.' },
          { es: 'la luz de carretera.', ru: 'дальний свет.', en: 'the main beam.' },
          { es: 'la señal de emergencia.', ru: 'аварийную сигнализацию.', en: 'the hazard warning lights.' }
        ],
        answer: 2,
        explain: { ru: 'При остановке на автомагистрали или при плохой видимости — аварийка (RGC, ст. 109.2.c).', en: 'When stopped on a motorway or in poor visibility, use hazard lights (RGC art. 109.2.c).' } },
      { es: 'Cuando un autobús escolar se detiene para que suban o bajen los niños, debe llevar encendida…',
        prompt: { ru: 'Когда школьный автобус останавливается для посадки или высадки детей, должна быть включена…', en: 'When a school bus stops for children to get on or off, it must have on…' },
        options: [
          { es: 'la señal de emergencia, de día y de noche.', ru: 'аварийная сигнализация, днём и ночью.', en: 'the hazard lights, day and night.' },
          { es: 'la luz de carretera.', ru: 'дальний свет.', en: 'the main beam.' },
          { es: 'solo la luz interior.', ru: 'только подсветка салона.', en: 'only the interior light.' }
        ],
        answer: 0,
        explain: { ru: 'Школьный и детский транспорт включает аварийку на время посадки и высадки (Manual DGT, тема 16).', en: 'School and child transport use hazard lights while passengers board or leave (DGT Manual, topic 16).' } },
      { es: '¿De qué color es el testigo que se enciende en el cuadro cuando se usa la luz de carretera?',
        prompt: { ru: 'Какого цвета индикатор на панели, когда включён дальний свет?', en: 'What colour is the dashboard tell-tale when the main beam is on?' },
        options: [
          { es: 'Verde.', ru: 'Зелёный.', en: 'Green.' },
          { es: 'Azul.', ru: 'Синий.', en: 'Blue.' },
          { es: 'Rojo.', ru: 'Красный.', en: 'Red.' }
        ],
        answer: 1,
        explain: { ru: 'Дальний — синий значок фары с прямыми лучами; ближний — зелёный с лучами вниз.', en: 'Main beam — a blue lamp with straight rays; dipped beam — green with rays angled down.' } },
      { es: 'En el cuadro se enciende un testigo amarillo con una lámpara, una línea ondulada y rayos hacia la derecha. ¿Qué luz lleva encendida?',
        prompt: { ru: 'На панели горит жёлтый значок: фара, волнистая линия, лучи вправо. Что включено?', en: 'An amber tell-tale shows a lamp, a wavy line and rays to the right. Which light is on?' },
        options: [
          { es: 'La antiniebla trasera.', ru: 'Задний противотуманный.', en: 'The rear fog light.' },
          { es: 'La luz de cruce.', ru: 'Ближний свет.', en: 'The dipped beam.' },
          { es: 'La luz de marcha atrás.', ru: 'Огонь заднего хода.', en: 'The reversing light.' }
        ],
        answer: 0,
        explain: { ru: 'Задний противотуманный обозначается жёлтым (amarillo auto) индикатором (Manual DGT, тема 16); передний — зелёным.', en: 'The rear fog light has an amber tell-tale (DGT Manual, topic 16); the front one is green.' } },
      { es: '¿Cómo se indica en el cuadro que la señal de emergencia está funcionando?',
        prompt: { ru: 'Как на панели видно, что включена аварийная сигнализация?', en: 'How does the dashboard show that the hazard lights are on?' },
        options: [
          { es: 'Con una luz azul fija.', ru: 'Постоянный синий индикатор.', en: 'A steady blue light.' },
          { es: 'Con una luz verde fija.', ru: 'Постоянный зелёный индикатор.', en: 'A steady green light.' },
          { es: 'Con un testigo rojo intermitente.', ru: 'Мигающий красный индикатор.', en: 'A flashing red tell-tale.' }
        ],
        answer: 2,
        explain: { ru: 'Аварийка обозначается красным мигающим индикатором (Manual DGT, тема 16).', en: 'Hazard lights show a flashing red tell-tale (DGT Manual, topic 16).' } },
      { es: '¿Cuándo debe apagar el intermitente en un cambio de carril?',
        prompt: { ru: 'Когда выключать поворотник при перестроении?', en: 'When should you cancel the indicator after changing lanes?' },
        options: [
          { es: 'A los 100 metros.', ru: 'Через 100 м.', en: 'After 100 metres.' },
          { es: 'En cuanto el vehículo ha adoptado su nueva trayectoria.', ru: 'Как только машина заняла новую траекторию.', en: 'As soon as the car is on its new path.' },
          { es: 'Antes de empezar a moverse.', ru: 'До начала движения в сторону.', en: 'Before starting to move across.' }
        ],
        answer: 1,
        explain: { ru: 'Сигнал о боковом смещении заканчивают сразу после манёвра (RGC, ст. 109.2.a).', en: 'A sideways-move signal ends right after the manoeuvre (RGC art. 109.2.a).' } },
      { es: '¿En cuál de estos casos puede usar el claxon un vehículo no prioritario?',
        prompt: { ru: 'В каком из случаев неприоритетный автомобиль может подать звуковой сигнал?', en: 'In which case may an ordinary vehicle use the horn?' },
        options: [
          { es: 'Para saludar a un conocido.', ru: 'Чтобы поприветствовать знакомого.', en: 'To greet someone you know.' },
          { es: 'Para avisar, fuera de poblado, de que va a adelantar.', ru: 'Чтобы вне населённого пункта предупредить об обгоне.', en: 'Outside built-up areas, to warn that you will overtake.' },
          { es: 'En un atasco, para que avancen.', ru: 'В пробке, чтобы поторопить.', en: 'In a jam, to make others move.' }
        ],
        answer: 1,
        explain: { ru: 'Звук: избежать аварии; обгон вне населённого пункта; срочная поездка (RGC, ст. 110.2).', en: 'Horn: to avoid an accident; to overtake out of town; an emergency trip (RGC art. 110.2).' } },
      { es: 'Dentro de poblado, para advertir a otro conductor en lugar de usar el claxon, puede…',
        prompt: { ru: 'В городе вместо звукового сигнала можно…', en: 'In a town, instead of using the horn you may…' },
        options: [
          { es: 'encender la antiniebla trasera.', ru: 'включить задний противотуманный.', en: 'switch on the rear fog light.' },
          { es: 'dar ráfagas cortas con las luces sin deslumbrar.', ru: 'коротко мигнуть фарами, не ослепляя.', en: 'give short flashes of the lights without dazzling.' },
          { es: 'poner la luz de carretera fija.', ru: 'включить постоянный дальний.', en: 'keep the main beam on.' }
        ],
        answer: 1,
        explain: { ru: 'Световые сигналы вместо звуковых допустимы даже в населённом пункте (RGC, ст. 109.3).', en: 'Light warnings may replace the horn even in built-up areas (RGC art. 109.3).' } },
      { es: '¿Qué prohíbe esta señal?',
        prompt: { ru: 'Что запрещает этот знак?', en: 'What does this sign prohibit?' },
        sign: 'R-310',
        options: [
          { es: 'Prohibido usar señales acústicas, salvo para evitar un accidente.', ru: 'Звуковые сигналы запрещены, кроме как чтобы избежать аварии.', en: 'Horn prohibited, except to avoid an accident.' },
          { es: 'Obligatorio tocar el claxon.', ru: 'Обязательно сигналить.', en: 'Horn compulsory.' },
          { es: 'Prohibido usar el móvil.', ru: 'Запрещено пользоваться телефоном.', en: 'Mobile phones prohibited.' }
        ],
        answer: 0,
        explain: { ru: 'R-310 напоминает общий запрет звуковых сигналов, кроме как для предотвращения аварии.', en: 'R-310 restates the general horn ban, except to prevent an accident.' } },
      { es: '¿Qué indica esta señal de peligro?',
        prompt: { ru: 'О чём предупреждает этот знак?', en: 'What does this warning sign mean?' },
        sign: 'P-33',
        options: [
          { es: 'Túnel.', ru: 'Туннель.', en: 'Tunnel.' },
          { es: 'Deslumbramiento por el sol.', ru: 'Ослепление солнцем.', en: 'Sun glare.' },
          { es: 'Tramo con frecuente pérdida de visibilidad por niebla, lluvia, humo…', ru: 'Участок, где часто ухудшается видимость: туман, дождь, дым…', en: 'A section with frequent loss of visibility from fog, rain, smoke…' }
        ],
        answer: 2,
        explain: { ru: 'P-33 «Visibilidad reducida»: будьте готовы включить ближний или противотуманные.', en: 'P-33 “Reduced visibility”: be ready to use dipped beam or fog lights.' } },
      { es: '¿Qué vehículos tienen prohibido llevar luz de marcha atrás?',
        prompt: { ru: 'Каким транспортным средствам запрещён огонь заднего хода?', en: 'Which vehicles may not have a reversing light?' },
        options: [
          { es: 'Los turismos.', ru: 'Легковым автомобилям.', en: 'Cars.' },
          { es: 'Las motocicletas.', ru: 'Мотоциклам.', en: 'Motorcycles.' },
          { es: 'Las furgonetas.', ru: 'Фургонам.', en: 'Vans.' }
        ],
        answer: 1,
        explain: { ru: 'Огонь заднего хода обязателен у автомобилей, у мотоциклов запрещён (учебник DGT, тема 7).', en: 'Reversing lights are compulsory on cars and banned on motorcycles (DGT manual, topic 7).' } }
    ]
  }
]);
