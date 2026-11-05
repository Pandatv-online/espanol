// DGT · theory, topic 15: mechanics and maintenance. Sources: DGT «Teórica abreviada, lectura fácil» (2025),
// DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-mecanica', level: 'DGT',
    title: { ru: 'Устройство и обслуживание', en: 'Mechanics and maintenance' },
    summary: {
      ru: 'Восемь систем автомобиля, масло и охлаждающая жидкость, тормоза, шины (1,6 мм), техосмотр ITV и индикаторы.',
      en: 'The eight vehicle systems, oil and coolant, brakes, tyres (1.6 mm), the ITV inspection and warning lights.'
    },
    hero: {
      es: 'Mecánica y <b>mantenimiento</b>',
      sub: { ru: 'Что проверять самому, чтобы машина была исправной', en: 'What to check yourself to keep the car roadworthy' }
    },
    tabs: [
      { id: 'systems', label: { ru: 'Системы', en: 'Systems' }, blocks: [
        { type: 'markers', heading: { ru: 'Восемь систем', en: 'Eight systems' }, groups: [
          { title: { ru: 'Двигатель', en: 'Engine' }, tags: ['sistema de alimentación', 'sistema eléctrico', 'sistema de lubricación', 'sistema de refrigeración'] },
          { title: { ru: 'Ходовая часть', en: 'Running gear' }, tags: ['sistema de transmisión', 'sistema de dirección', 'sistema de suspensión', 'sistema de frenado'] }
        ] },
        { type: 'rules', heading: { ru: 'Питание и электрика', en: 'Fuel and electrics' }, items: [
          { color: 'blue', title: { ru: 'Система питания', en: 'Fuel and air supply' }, es: 'sistema de alimentación',
            body: { ru: 'Подаёт в двигатель воздух и топливо. <b>Воздушный фильтр</b> (<b>filtro de aire</b>) грязный — растёт расход, может идти <b>чёрный дым</b>. Проверять чаще летом и на пыльных дорогах.', en: 'Feeds air and fuel to the engine. A dirty <b>air filter</b> (<b>filtro de aire</b>) raises consumption and may cause <b>black smoke</b>. Check it more often in summer and on dusty roads.' } },
          { color: 'blue', title: { ru: 'Аккумулятор', en: 'Battery' }, es: 'batería',
            body: { ru: 'Даёт ток для запуска двигателя. Держать чистым, сухим и надёжно закреплённым.', en: 'Supplies current to start the engine. Keep it clean, dry and firmly fixed.' } },
          { color: 'blue', title: { ru: 'Зажигание', en: 'Ignition' }, es: 'circuito de encendido · bujía',
            body: { ru: 'Искра в <b>свече</b> (<b>bujía</b>) поджигает смесь воздуха и топлива. Свечи проверяют и меняют.', en: 'A spark at the <b>spark plug</b> (<b>bujía</b>) ignites the air–fuel mix. Plugs are checked and replaced.' } },
          { color: 'blue', title: { ru: 'Зарядка', en: 'Charging' }, es: 'circuito de carga · alternador',
            body: { ru: '<b>Генератор</b> (<b>alternador</b>) при работающем двигателе вырабатывает ток и заряжает аккумулятор; крутится от ремня — проверяйте его состояние.', en: 'With the engine running, the <b>alternator</b> makes current and charges the battery; it is belt-driven, so check the belt.' } }
        ] },
        { type: 'examples', items: [
          { es: 'El <b>filtro de aire</b> está sucio: gasto más combustible.', ru: 'Воздушный фильтр грязный — расход топлива выше.', en: 'The air filter is dirty: I use more fuel.' },
          { es: 'Se ha quedado sin carga la <b>batería</b>.', ru: 'Аккумулятор разрядился.', en: 'The battery has gone flat.' },
          { es: 'Hay que cambiar la <b>correa</b> del alternador.', ru: 'Нужно заменить ремень генератора.', en: 'The alternator belt needs replacing.' }
        ] }
      ] },
      { id: 'engine', label: { ru: 'Двигатель', en: 'Engine' }, blocks: [
        { type: 'rules', heading: { ru: 'Смазка', en: 'Lubrication' }, items: [
          { color: 'amber', title: { ru: 'Зачем масло', en: 'Why oil' }, es: 'sistema de lubricación',
            body: { ru: 'Масло покрывает детали двигателя плёнкой, чтобы они не тёрлись и меньше изнашивались.', en: 'Oil coats the engine parts so they do not rub and wear less.' } },
          { color: 'amber', title: { ru: 'Как проверить', en: 'How to check' }, es: 'varilla indicadora',
            body: { ru: 'По <b>щупу</b>, на ровном месте, двигатель <b>заглушён и холодный</b>; уровень — между min и max. Менять масло — на <b>тёплом</b> двигателе, машина стоит ровно.', en: 'With the <b>dipstick</b>, on level ground, engine <b>off and cold</b>; the level is between min and max. Change the oil with the engine <b>warm</b> and the car level.' } },
          { color: 'amber', title: { ru: 'Индикатор давления', en: 'Pressure warning' }, es: 'manómetro · testigo de aceite',
            body: { ru: 'Загорелся — мало масла или нет давления: <b>остановитесь</b> и не едьте, пока не устраните причину.', en: 'If it lights up, oil is low or has no pressure: <b>stop</b> and do not drive until the cause is fixed.' } }
        ] },
        { type: 'table', heading: { ru: 'Виды масла', en: 'Types of oil' },
          head: ['', { ru: 'Что это', en: 'What it is' }],
          rows: [
            ['Mineral', { ru: 'из нефти; сейчас редко', en: 'from crude oil; rare today' }],
            ['Sintético', { ru: 'лабораторное; самое стойкое', en: 'lab-made; most durable' }],
            ['Semisintético', { ru: 'смесь двух', en: 'a mix of both' }],
            ['10W/40', { ru: 'всесезонное (multigrado)', en: 'multigrade' }]
          ] },
        { type: 'text', color: 'amber', body: {
          ru: 'В маркировке <b>10W/40</b>: <b>10W</b> — масло хорошо течёт на холоде (W — winter), <b>40</b> — выдерживает высокую температуру. Синтетика лучше переносит холод и жару, дольше служит.',
          en: 'In <b>10W/40</b>: <b>10W</b> means it flows well when cold (W for winter), <b>40</b> that it withstands high temperatures. Synthetic oil copes better with cold and heat and lasts longer.'
        } },
        { type: 'rules', heading: { ru: 'Охлаждение', en: 'Cooling' }, items: [
          { color: 'teal', title: { ru: 'Как работает', en: 'How it works' }, es: 'líquido refrigerante · radiador',
            body: { ru: '<b>Охлаждающая жидкость</b> забирает тепло у двигателя, остывает в <b>радиаторе</b> и возвращается насосом (<b>bomba de agua</b>), который крутит ремень.', en: 'The <b>coolant</b> takes heat from the engine, cools in the <b>radiator</b> and is pumped back by the belt-driven <b>water pump</b>.' } },
          { color: 'teal', title: { ru: 'Что проверить', en: 'What to check' }, es: 'nivel entre mínimo y máximo',
            body: { ru: 'Уровень — на <b>холодном</b> двигателе, между min и max. В начале зимы — что жидкость не замёрзнет: лёд может разорвать двигатель.', en: 'The level with the engine <b>cold</b>, between min and max. At the start of winter make sure it will not freeze: ice can crack the engine.' } }
        ] },
        { type: 'table', heading: { ru: 'Цвет дыма', en: 'Exhaust smoke' },
          head: [{ ru: 'Дым', en: 'Smoke' }, { ru: 'Причина', en: 'Cause' }],
          rows: [
            ['humo negro', { ru: 'грязный воздушный фильтр', en: 'dirty air filter' }],
            ['humo blanco azulado', { ru: 'слишком много масла', en: 'too much oil' }],
            [{ ru: 'белый при холодном пуске', en: 'white on a cold start' }, { ru: 'пар, это нормально', en: 'steam, normal' }],
            [{ ru: 'белый на прогретом', en: 'white when warm' }, { ru: 'возможна поломка', en: 'possible fault' }]
          ] },
        { type: 'examples', items: [
          { es: 'Comprueba el <b>nivel de aceite</b> con el motor frío.', ru: 'Проверь уровень масла на холодном двигателе.', en: 'Check the oil level with the engine cold.' },
          { es: 'Se ha encendido el <b>testigo del aceite</b>: para el coche.', ru: 'Загорелся индикатор масла — останови машину.', en: 'The oil warning light is on: stop the car.' },
          { es: 'Antes del invierno revisa el <b>líquido refrigerante</b>.', ru: 'Перед зимой проверь охлаждающую жидкость.', en: 'Check the coolant before winter.' }
        ] }
      ] },
      { id: 'chassis', label: { ru: 'Ходовая', en: 'Chassis' }, blocks: [
        { type: 'table', heading: { ru: 'Привод', en: 'Drive' },
          head: ['', { ru: 'Ведущие колёса', en: 'Driven wheels' }],
          rows: [
            ['tracción', { ru: 'передние', en: 'front' }],
            ['propulsión', { ru: 'задние', en: 'rear' }],
            ['tracción total', { ru: 'все', en: 'all' }]
          ] },
        { type: 'text', body: {
          ru: ['<b>Трансмиссия</b> передаёт силу двигателя на колёса. Первая передача даёт <b>больше всего силы</b>, но она самая медленная.'],
          en: ['The <b>transmission</b> carries engine power to the wheels. First gear gives <b>the most force</b> but is the slowest.']
        } },
        { type: 'rules', heading: { ru: 'Руль, подвеска, тормоза', en: 'Steering, suspension, brakes' }, items: [
          { color: 'purple', title: { ru: 'Рулевое управление', en: 'Steering' }, es: 'sistema de dirección',
            body: { ru: 'Признаки неисправности: руль тугой (возможно, низкое давление в шинах) или с люфтом; машину <b>тянет в сторону</b> (разное давление); руль <b>вибрирует</b> (колёса не отбалансированы); шины быстро изнашиваются.', en: 'Fault signs: stiff wheel (maybe low tyre pressure) or too much play; the car <b>pulls to one side</b> (uneven pressures); the wheel <b>vibrates</b> (unbalanced wheels); tyres wear fast.' } },
          { color: 'purple', title: { ru: 'Усилитель руля', en: 'Power steering' }, es: 'dirección asistida (progresiva)',
            body: { ru: 'Уменьшает усилие. «Прогрессивный» — лёгкий руль на малой скорости и потяжелее на большой.', en: 'Reduces effort. “Progressive” means a light wheel at low speed and a firmer one at high speed.' } },
          { color: 'purple', title: { ru: 'Подвеска', en: 'Suspension' }, es: 'amortiguadores',
            body: { ru: 'Держит колёса на дороге. Изношенная: машина «клюёт» при торможении, раскачивается в поворотах, фары «прыгают» и слепят; растут <b>тормозной путь</b> и риск <b>аквапланирования</b>, хуже работает ABS.', en: 'Keeps the tyres on the road. When worn: the car dives under braking and rolls in bends, headlights bounce and dazzle; <b>braking distance</b> and <b>aquaplaning</b> risk grow, ABS works worse.' } },
          { color: 'coral', title: { ru: 'Тормоза', en: 'Brakes' }, es: 'líquido de frenos · pastillas · zapatas',
            body: { ru: 'Усилие от педали идёт через <b>тормозную жидкость</b> к <b>колодкам</b> (дисковые — pastillas, барабанные — zapatas). Проверять: уровень жидкости между min и max, износ колодок, давление в шинах.', en: 'Pedal force travels through the <b>brake fluid</b> to the <b>pads</b> (discs — pastillas) or <b>shoes</b> (drums — zapatas). Check the fluid level between min and max, pad wear and tyre pressure.' } }
        ] },
        { type: 'examples', items: [
          { es: 'El coche se <b>desvía</b> hacia la derecha al soltar el volante.', ru: 'Машину уводит вправо, если отпустить руль.', en: 'The car pulls to the right when you let go of the wheel.' },
          { es: 'Con los <b>amortiguadores</b> gastados frenas en más metros.', ru: 'С изношенными амортизаторами тормозной путь длиннее.', en: 'With worn shock absorbers you need more metres to stop.' },
          { es: 'Hay que cambiar las <b>pastillas de freno</b>.', ru: 'Нужно поменять тормозные колодки.', en: 'The brake pads need changing.' }
        ] }
      ] },
      { id: 'tyres', label: { ru: 'Шины', en: 'Tyres' }, blocks: [
        { type: 'rules', heading: { ru: 'Главное о шинах', en: 'Tyre essentials' }, items: [
          { color: 'blue', label: { ru: 'Минимум', en: 'Minimum' }, title: { ru: 'Глубина протектора', en: 'Tread depth' }, es: 'dibujo ≥ 1,6 mm',
            body: { ru: 'У легковых машин канавки протектора (<b>banda de rodamiento</b>) — не меньше <b>1,6 мм</b>. Они отводят воду, охлаждают шину и дают сцепление.', en: 'On cars the tread grooves (<b>banda de rodamiento</b>) must be at least <b>1.6 mm</b> deep. They clear water, cool the tyre and give grip.' } },
          { color: 'blue', label: { ru: 'Раз в месяц', en: 'Monthly' }, title: { ru: 'Давление', en: 'Pressure' }, es: 'presión de inflado',
            body: { ru: 'Значение задаёт производитель машины. Проверять минимум <b>раз в месяц</b>, перед дальней поездкой и с большим грузом — <b>на холодных шинах</b>, до начала поездки.', en: 'The car maker sets the value. Check at least <b>once a month</b>, before a long trip or a heavy load — with <b>cold tyres</b>, before setting off.' } },
          { color: 'blue', title: { ru: 'Запаска', en: 'Spare wheel' }, es: 'rueda de repuesto · rueda de galleta',
            body: { ru: 'Возите всегда, накачанной чуть сильнее остальных. Узкая «докатка» — только до мастерской: около <b>200 км</b> и не быстрее <b>80 км/ч</b>.', en: 'Always carry one, slightly more inflated than the others. A narrow space-saver is only to reach a garage: about <b>200 km</b> at no more than <b>80 km/h</b>.' } },
          { color: 'blue', title: { ru: 'Без повреждений', en: 'No damage' }, es: 'ampollas, grietas, cortes',
            body: { ru: 'Без вздутий, трещин, отслоений и видимого корда. Колёса балансируют после замены шины или потери грузиков.', en: 'No bulges, cracks, separated layers or exposed cords. Wheels are balanced after a tyre change or lost weights.' } }
        ] },
        { type: 'figure', heading: { ru: 'Глубина протектора', en: 'Tread depth' }, src: 'img/dgt/mecanica-dibujo.svg',
          alt: { ru: 'Разрез протектора: стрелка показывает глубину канавки, на дне одной канавки — жёлтый индикатор износа; подпись «mínimo 1,6 mm».', en: 'Tread cross-section: an arrow shows groove depth; a yellow wear bar sits at the bottom of one groove; label “mínimo 1,6 mm”.' },
          caption: { ru: 'Когда протектор стёрся до выступа-индикатора (<b>testigo de desgaste</b>), шину пора менять.', en: 'When the tread is worn down to the wear bar (<b>testigo de desgaste</b>), replace the tyre.' } },
        { type: 'figure', heading: { ru: 'Давление и износ', en: 'Pressure and wear' }, src: 'img/dgt/mecanica-neumaticos.svg',
          alt: { ru: 'Три шины: при нормальном давлении износ ровный; при низком изнашиваются края; при высоком — середина.', en: 'Three tyres: correct pressure wears evenly; low pressure wears the edges; high pressure wears the centre.' },
          caption: { ru: 'Низкое давление — износ по краям, нагрев, больше расход. Высокое — износ в центре, меньше сцепления.', en: 'Low pressure — edge wear, heat, more fuel. High pressure — centre wear, less grip.' } },
        { type: 'table', heading: { ru: 'Неправильное давление', en: 'Wrong pressure' },
          head: ['', 'presión baja', 'presión alta'],
          rows: [
            [{ ru: 'Износ', en: 'Wear' }, { ru: 'по краям, быстрее', en: 'edges, faster' }, { ru: 'в центре', en: 'centre' }],
            [{ ru: 'Сцепление', en: 'Grip' }, { ru: 'заносит на мокром', en: 'skids when wet' }, { ru: 'меньше контакт', en: 'less contact' }],
            [{ ru: 'Ещё', en: 'Also' }, { ru: 'нагрев, расход, разрыв', en: 'heat, fuel, blow-out' }, { ru: 'вибрации, амортизаторы', en: 'vibration, dampers' }]
          ] },
        { type: 'text', color: 'coral', body: {
          ru: '<b>Аквапланирование</b> (<b>aquaplaning</b>): шина не успевает отвести воду и скользит по ней. Опасней на большой скорости, с широкими или изношенными шинами. Лучшая защита — <b>снизить скорость</b> на лужах; после — проверьте тормоза.',
          en: '<b>Aquaplaning</b>: the tyre cannot clear the water and slides on it. It is worse at high speed and with wide or worn tyres. Best defence — <b>slow down</b> through water; afterwards, test your brakes.'
        } },
        { type: 'examples', items: [
          { es: 'El <b>dibujo</b> del neumático mide menos de 1,6 mm.', ru: 'Глубина протектора меньше 1,6 мм.', en: 'The tyre tread is less than 1.6 mm deep.' },
          { es: 'Comprueba la <b>presión</b> con los neumáticos fríos.', ru: 'Проверяй давление на холодных шинах.', en: 'Check the pressure with the tyres cold.' },
          { es: 'Con la <b>rueda de galleta</b> no pases de 80 km/h.', ru: 'На докатке не превышай 80 км/ч.', en: 'On the space-saver, do not exceed 80 km/h.' }
        ] }
      ] },
      { id: 'itv', label: { ru: 'ITV', en: 'ITV' }, blocks: [
        { type: 'text', body: {
          ru: ['<b>ITV</b> (<b>Inspección Técnica de Vehículos</b>) — обязательный техосмотр. За сроки отвечает <b>владелец</b> (<b>titular</b>). Внеочередной осмотр — после переделки машины или аварии с повреждением кузова.'],
          en: ['<b>ITV</b> (<b>Inspección Técnica de Vehículos</b>) is the compulsory roadworthiness test. The <b>registered keeper</b> (<b>titular</b>) is responsible for the dates. An extra test is needed after modifications or an accident that damaged the structure.']
        } },
        { type: 'table', heading: { ru: 'Сроки для легкового', en: 'Dates for a car' },
          head: [{ ru: 'Возраст машины', en: 'Car age' }, { ru: 'Как часто', en: 'How often' }],
          rows: [
            [{ ru: 'до 4 лет', en: 'up to 4 years' }, { ru: 'не нужно', en: 'not needed' }],
            [{ ru: 'от 4 до 10 лет', en: '4 to 10 years' }, { ru: 'раз в 2 года', en: 'every 2 years' }],
            [{ ru: 'старше 10 лет', en: 'over 10 years' }, { ru: 'каждый год', en: 'every year' }]
          ] },
        { type: 'text', color: 'blue', body: {
          ru: 'Прошли ITV — в карточке техосмотра (<b>tarjeta ITV</b>) ставят отметку и дату следующего, выдают <b>наклейку</b> для лобового стекла и отчёт, который возят в машине. Серьёзные дефекты — машину нужно отремонтировать и снова пройти осмотр.',
          en: 'After passing, the inspection card (<b>tarjeta ITV</b>) is stamped with the next date, and you get a <b>sticker</b> for the windscreen and a report to keep in the car. Serious defects mean the car must be repaired and re-tested.'
        } },
        { type: 'signs', items: [
          { code: 'S-102', note: { ru: 'Станция техосмотра ITV', en: 'ITV test station' } },
          { code: 'S-103', note: { ru: 'Автомастерская', en: 'Repair garage' } }
        ] },
        { type: 'triggers', heading: { ru: 'Индикаторы на панели', en: 'Dashboard warning lights' }, items: [
          { num: 'R', color: 'coral', title: { ru: 'Красный', en: 'Red' }, phrases: ['aceite', 'temperatura', 'frenos', 'batería'],
            body: { ru: 'Опасная неисправность: остановитесь, как только это безопасно, и заглушите двигатель.', en: 'A dangerous fault: stop as soon as it is safe and switch off the engine.' } },
          { num: 'A', color: 'amber', title: { ru: 'Жёлтый', en: 'Amber' }, phrases: ['ABS', 'motor', 'presión de neumáticos'],
            body: { ru: 'Предупреждение: можно доехать, но скоро в мастерскую.', en: 'A warning: you can carry on, but visit a garage soon.' } },
          { num: 'V', color: 'teal', title: { ru: 'Зелёный или синий', en: 'Green or blue' }, phrases: ['luces', 'intermitentes', 'control de crucero'],
            body: { ru: 'Информация: что-то включено.', en: 'Information: something is switched on.' } }
        ] },
        { type: 'examples', items: [
          { es: 'Mi coche tiene cinco años: pasa la <b>ITV</b> cada dos años.', ru: 'Моей машине пять лет — техосмотр раз в два года.', en: 'My car is five years old: it has its ITV every two years.' },
          { es: 'Pega la <b>pegatina</b> de la ITV en el parabrisas.', ru: 'Наклей наклейку ITV на лобовое стекло.', en: 'Stick the ITV sticker on the windscreen.' },
          { es: 'Se ha encendido un <b>testigo rojo</b>: paro en cuanto pueda.', ru: 'Загорелся красный индикатор — остановлюсь, как только смогу.', en: 'A red warning light came on: I’ll stop as soon as I can.' }
        ] }
      ] }
    ],
    quizCount: 20,
    quiz: [
      { es: '¿Cuál es la profundidad mínima del dibujo de los neumáticos de un turismo?',
        prompt: { ru: 'Какая минимальная глубина протектора у шин легкового автомобиля?', en: 'What is the minimum tread depth for car tyres?' },
        img: 'img/dgt/mecanica-dibujo.svg',
        options: [
          { es: '1,6 milímetros.', ru: '1,6 мм.', en: '1.6 mm.' },
          { es: '1 milímetro.', ru: '1 мм.', en: '1 mm.' },
          { es: '3 milímetros.', ru: '3 мм.', en: '3 mm.' }
        ],
        answer: 0,
        explain: { ru: 'Для легковых минимальная глубина канавок — 1,6 мм (учебник DGT, тема 5; RD 2822/1998).', en: 'For cars the minimum groove depth is 1.6 mm (DGT manual, topic 5; RD 2822/1998).' } },
      { es: '¿Cada cuánto tiempo, como mínimo, se recomienda comprobar la presión de los neumáticos?',
        prompt: { ru: 'Как часто, как минимум, рекомендуется проверять давление в шинах?', en: 'How often, at least, should tyre pressure be checked?' },
        options: [
          { es: 'Una vez al año.', ru: 'Раз в год.', en: 'Once a year.' },
          { es: 'Una vez al mes.', ru: 'Раз в месяц.', en: 'Once a month.' },
          { es: 'Solo en la ITV.', ru: 'Только на техосмотре.', en: 'Only at the ITV.' }
        ],
        answer: 1,
        explain: { ru: 'Давление проверяют минимум раз в месяц и перед дальней поездкой (учебник DGT, темы 5 и 15).', en: 'Check pressure at least monthly and before long trips (DGT manual, topics 5 and 15).' } },
      { es: '¿Cuándo se debe comprobar la presión de los neumáticos?',
        prompt: { ru: 'Когда правильно проверять давление в шинах?', en: 'When should tyre pressure be checked?' },
        options: [
          { es: 'Después de un viaje largo, con los neumáticos calientes.', ru: 'После долгой поездки, на горячих шинах.', en: 'After a long trip, with hot tyres.' },
          { es: 'Antes de empezar a circular, con los neumáticos fríos.', ru: 'До начала поездки, на холодных шинах.', en: 'Before setting off, with cold tyres.' },
          { es: 'Da igual, la presión no varía.', ru: 'Неважно, давление не меняется.', en: 'It does not matter; pressure does not change.' }
        ],
        answer: 1,
        explain: { ru: 'Нагретая шина показывает завышенное давление — проверяйте до поездки (учебник DGT, тема 15).', en: 'A hot tyre reads too high, so check before driving (DGT manual, topic 15).' } },
      { es: 'Un neumático con presión de inflado inferior a la recomendada…',
        prompt: { ru: 'Шина с давлением ниже рекомендованного…', en: 'A tyre inflated below the recommended pressure…' },
        img: 'img/dgt/mecanica-neumaticos.svg',
        options: [
          { es: 'se desgasta más por el centro.', ru: 'сильнее изнашивается в центре.', en: 'wears more in the centre.' },
          { es: 'reduce el consumo de combustible.', ru: 'снижает расход топлива.', en: 'reduces fuel consumption.' },
          { es: 'se calienta, se deforma y se desgasta antes, sobre todo por los bordes.', ru: 'греется, деформируется и быстрее изнашивается, особенно по краям.', en: 'heats up, deforms and wears faster, especially at the edges.' }
        ],
        answer: 2,
        explain: { ru: 'Низкое давление: перегрев, износ краёв, больше расход и риск разрыва (учебник DGT, тема 5).', en: 'Low pressure: overheating, edge wear, more fuel and a blow-out risk (DGT manual, topic 5).' } },
      { es: 'Si un neumático lleva más presión de la recomendada, se desgasta más…',
        prompt: { ru: 'Если давление в шине выше нормы, сильнее изнашивается…', en: 'If a tyre is over-inflated, which part wears more?' },
        options: [
          { es: 'por el centro de la banda de rodamiento.', ru: 'центр протектора.', en: 'the centre of the tread.' },
          { es: 'por los dos bordes.', ru: 'оба края.', en: 'both edges.' },
          { es: 'por el flanco exterior.', ru: 'наружная боковина.', en: 'the outer sidewall.' }
        ],
        answer: 0,
        explain: { ru: 'Перекачанная шина опирается серединой: центр изнашивается сильнее, сцепление хуже (учебник DGT, тема 5).', en: 'An over-inflated tyre rides on its centre, which wears faster and grips less (DGT manual, topic 5).' } },
      { es: '¿Qué favorece el aquaplaning?',
        prompt: { ru: 'Что способствует аквапланированию?', en: 'What makes aquaplaning more likely?' },
        options: [
          { es: 'Circular despacio por zonas con agua.', ru: 'Медленная езда по воде.', en: 'Driving slowly through water.' },
          { es: 'La velocidad alta y los neumáticos muy anchos o desgastados.', ru: 'Высокая скорость и очень широкие или изношенные шины.', en: 'High speed and very wide or worn tyres.' },
          { es: 'Llevar los neumáticos con la presión correcta.', ru: 'Правильное давление в шинах.', en: 'Correct tyre pressure.' }
        ],
        answer: 1,
        explain: { ru: 'Скорость и изношенный или широкий протектор мешают отводить воду (учебник DGT, тема 14).', en: 'Speed and worn or wide treads stop the tyre clearing water (DGT manual, topic 14).' } },
      { es: 'Después de atravesar una zona con mucha agua, conviene…',
        prompt: { ru: 'После проезда большой лужи стоит…', en: 'After driving through deep water, it is advisable to…' },
        options: [
          { es: 'acelerar para secar los neumáticos.', ru: 'разогнаться, чтобы просушить шины.', en: 'accelerate to dry the tyres.' },
          { es: 'apagar el motor.', ru: 'заглушить двигатель.', en: 'switch off the engine.' },
          { es: 'comprobar que los frenos funcionan bien.', ru: 'проверить, хорошо ли работают тормоза.', en: 'check that the brakes work properly.' }
        ],
        answer: 2,
        explain: { ru: 'Мокрые тормоза хуже тормозят — проверьте их, мягко нажав педаль (учебник DGT, тема 14).', en: 'Wet brakes work less well — test them with gentle pedal pressure (DGT manual, topic 14).' } },
      { es: 'La rueda de repuesto debe llevarse…',
        prompt: { ru: 'Запасное колесо нужно возить…', en: 'The spare wheel should be carried…' },
        options: [
          { es: 'un poco más inflada que las demás.', ru: 'накачанным чуть сильнее остальных.', en: 'slightly more inflated than the others.' },
          { es: 'desinflada para que no se estropee.', ru: 'спущенным, чтобы не портилось.', en: 'deflated so it does not deteriorate.' },
          { es: 'con la mitad de la presión.', ru: 'с половиной давления.', en: 'at half pressure.' }
        ],
        answer: 0,
        explain: { ru: 'Запаска со временем теряет воздух, поэтому её накачивают чуть сильнее (учебник DGT, тема 15).', en: 'A spare slowly loses air, so it is kept slightly over-inflated (DGT manual, topic 15).' } },
      { es: 'Con una rueda de galleta, ¿a qué velocidad máxima se recomienda circular?',
        prompt: { ru: 'С какой максимальной скоростью рекомендуется ехать на «докатке»?', en: 'What is the recommended top speed on a space-saver spare?' },
        options: [
          { es: '120 km/h.', ru: '120 км/ч.', en: '120 km/h.' },
          { es: '80 km/h.', ru: '80 км/ч.', en: '80 km/h.' },
          { es: '50 km/h.', ru: '50 км/ч.', en: '50 km/h.' }
        ],
        answer: 1,
        explain: { ru: 'Докатка — только до мастерской: около 200 км, не быстрее 80 км/ч (учебник DGT, тема 5).', en: 'A space-saver is only to reach a garage: about 200 km at up to 80 km/h (DGT manual, topic 5).' } },
      { es: 'Si el volante vibra mientras conduce, la causa puede ser…',
        prompt: { ru: 'Руль вибрирует при езде. Возможная причина…', en: 'The steering wheel vibrates while driving. A possible cause is…' },
        options: [
          { es: 'que el depósito está lleno.', ru: 'полный бак.', en: 'a full tank.' },
          { es: 'que el aceite es sintético.', ru: 'синтетическое масло.', en: 'synthetic oil.' },
          { es: 'que las ruedas no están bien equilibradas.', ru: 'колёса плохо отбалансированы.', en: 'unbalanced wheels.' }
        ],
        answer: 2,
        explain: { ru: 'Вибрация руля — типичный признак разбалансировки колёс (учебник DGT, тема 15).', en: 'A vibrating wheel is a typical sign of unbalanced wheels (DGT manual, topic 15).' } },
      { es: 'Si el vehículo se desvía hacia un lado al soltar el volante en una recta, puede deberse a…',
        prompt: { ru: 'Машину уводит в сторону, если на прямой отпустить руль. Причина может быть в том, что…', en: 'The car drifts to one side when you let go of the wheel on a straight. This may be because…' },
        options: [
          { es: 'unos neumáticos están más inflados que otros.', ru: 'одни шины накачаны сильнее других.', en: 'some tyres are more inflated than others.' },
          { es: 'el motor está frío.', ru: 'двигатель холодный.', en: 'the engine is cold.' },
          { es: 'la batería está descargada.', ru: 'аккумулятор разряжен.', en: 'the battery is flat.' }
        ],
        answer: 0,
        explain: { ru: 'Разное давление в шинах или проблемы с рулевым — машину тянет в сторону (учебник DGT, тема 15).', en: 'Uneven tyre pressures or steering faults make the car pull (DGT manual, topic 15).' } },
      { es: '¿Para qué sirve la dirección asistida progresiva?',
        prompt: { ru: 'Для чего нужен прогрессивный усилитель руля?', en: 'What does progressive power steering do?' },
        options: [
          { es: 'Para girar las cuatro ruedas.', ru: 'Чтобы поворачивать все четыре колеса.', en: 'Steers all four wheels.' },
          { es: 'Para que el volante sea suave a poca velocidad y más firme a velocidad alta.', ru: 'Руль лёгкий на малой скорости и потяжелее на высокой.', en: 'Makes the wheel light at low speed and firmer at high speed.' },
          { es: 'Para corregir solo la trayectoria del vehículo.', ru: 'Сам исправляет траекторию.', en: 'Corrects the car’s path by itself.' }
        ],
        answer: 1,
        explain: { ru: 'Так легко парковаться и проще удерживать машину на скорости (учебник DGT, тема 15).', en: 'Easy parking and better control at speed (DGT manual, topic 15).' } },
      { es: '¿Cuál es la función del sistema de suspensión?',
        prompt: { ru: 'Какая задача у подвески?', en: 'What is the job of the suspension?' },
        options: [
          { es: 'Mantener el contacto de los neumáticos con la calzada.', ru: 'Удерживать контакт шин с дорогой.', en: 'Keep the tyres in contact with the road.' },
          { es: 'Enfriar el motor.', ru: 'Охлаждать двигатель.', en: 'Cool the engine.' },
          { es: 'Llevar la fuerza del motor a las ruedas.', ru: 'Передавать силу двигателя на колёса.', en: 'Carry engine power to the wheels.' }
        ],
        answer: 0,
        explain: { ru: 'Подвеска держит колёса на дороге — это устойчивость и комфорт (учебник DGT, тема 15).', en: 'Suspension keeps the wheels on the road — stability and comfort (DGT manual, topic 15).' } },
      { es: 'Con los amortiguadores en mal estado…',
        prompt: { ru: 'С изношенными амортизаторами…', en: 'With worn shock absorbers…' },
        options: [
          { es: 'el vehículo frena en menos metros.', ru: 'машина тормозит на меньшем расстоянии.', en: 'the car stops in fewer metres.' },
          { es: 'aumenta la distancia de frenado y el riesgo de aquaplaning.', ru: 'растут тормозной путь и риск аквапланирования.', en: 'braking distance and aquaplaning risk increase.' },
          { es: 'los neumáticos duran más.', ru: 'шины служат дольше.', en: 'tyres last longer.' }
        ],
        answer: 1,
        explain: { ru: 'Плохая подвеска: длиннее тормозной путь, выше риск аквапланирования, хуже ABS (учебник DGT, тема 15).', en: 'Poor suspension: longer braking, higher aquaplaning risk, worse ABS (DGT manual, topic 15).' } },
      { es: 'Si las luces del vehículo suben y bajan al circular, puede indicar…',
        prompt: { ru: 'Если фары при езде «прыгают» вверх-вниз, это может означать…', en: 'If your headlights bounce up and down while driving, it may mean…' },
        options: [
          { es: 'que las lámparas son nuevas.', ru: 'новые лампы.', en: 'new bulbs.' },
          { es: 'que falta líquido refrigerante.', ru: 'мало охлаждающей жидкости.', en: 'low coolant.' },
          { es: 'un fallo en la suspensión.', ru: 'неисправность подвески.', en: 'a suspension fault.' }
        ],
        answer: 2,
        explain: { ru: 'Колебания фар — признак изношенной подвески; они ещё и слепят встречных (учебник DGT, тема 15).', en: 'Bouncing lights point to worn suspension, and they dazzle others (DGT manual, topic 15).' } },
      { es: '¿Cómo se debe comprobar el nivel de aceite del motor?',
        prompt: { ru: 'Как проверять уровень масла в двигателе?', en: 'How should you check the engine oil level?' },
        options: [
          { es: 'Con el motor en marcha.', ru: 'При работающем двигателе.', en: 'With the engine running.' },
          { es: 'Con la varilla, con el motor parado y frío.', ru: 'Щупом, на заглушённом холодном двигателе.', en: 'With the dipstick, engine off and cold.' },
          { es: 'Solo mirando el testigo del cuadro.', ru: 'Только по индикатору на панели.', en: 'Only by looking at the dashboard light.' }
        ],
        answer: 1,
        explain: { ru: 'Щуп, ровное место, двигатель заглушён и остыл; уровень между min и max (учебник DGT, тема 15).', en: 'Dipstick, level ground, engine off and cool; level between min and max (DGT manual, topic 15).' } },
      { es: 'Si se enciende el testigo de presión de aceite mientras circula, debe…',
        prompt: { ru: 'В пути загорелся индикатор давления масла. Нужно…', en: 'The oil-pressure warning light comes on while driving. You should…' },
        options: [
          { es: 'detener el vehículo y no continuar hasta conocer y solucionar la causa.', ru: 'остановиться и не ехать, пока не найдёте и не устраните причину.', en: 'stop and not continue until the cause is found and fixed.' },
          { es: 'seguir hasta la próxima revisión.', ru: 'ехать до следующего ТО.', en: 'carry on until the next service.' },
          { es: 'acelerar para aumentar la presión.', ru: 'прибавить газ, чтобы поднять давление.', en: 'rev the engine to raise the pressure.' }
        ],
        answer: 0,
        explain: { ru: 'Мало масла или нет давления — двигатель может разрушиться: остановитесь (учебник DGT, тема 15).', en: 'Low oil or no pressure can wreck the engine: stop (DGT manual, topic 15).' } },
      { es: '¿Qué significa el «10W» en un aceite 10W/40?',
        prompt: { ru: 'Что означает «10W» в маркировке масла 10W/40?', en: 'What does “10W” mean in a 10W/40 oil?' },
        options: [
          { es: 'Que soporta temperaturas muy altas.', ru: 'Выдерживает очень высокие температуры.', en: 'It withstands very high temperatures.' },
          { es: 'Que se cambia cada 10.000 km.', ru: 'Меняется каждые 10 000 км.', en: 'It is changed every 10,000 km.' },
          { es: 'Que fluye bien por el motor aunque haga frío.', ru: 'Хорошо растекается по двигателю даже в холод.', en: 'It flows well through the engine even in cold weather.' }
        ],
        answer: 2,
        explain: { ru: '10W — поведение на холоде, 40 — на жаре; это всесезонное масло (учебник DGT, тема 15).', en: '10W is cold behaviour, 40 is hot behaviour; it is a multigrade oil (DGT manual, topic 15).' } },
      { es: 'Si sale humo blanco azulado por el tubo de escape, puede indicar que…',
        prompt: { ru: 'Из выхлопной трубы идёт бело-голубой дым. Это может означать, что…', en: 'Bluish-white smoke comes from the exhaust. This may mean that…' },
        options: [
          { es: 'el filtro de aire está sucio.', ru: 'воздушный фильтр грязный.', en: 'the air filter is dirty.' },
          { es: 'el motor lleva demasiado aceite.', ru: 'в двигателе слишком много масла.', en: 'the engine has too much oil.' },
          { es: 'todo funciona correctamente.', ru: 'всё в порядке.', en: 'everything is fine.' }
        ],
        answer: 1,
        explain: { ru: 'Бело-голубой дым — лишнее масло; чёрный — грязный воздушный фильтр (учебник DGT, тема 15).', en: 'Bluish-white smoke means too much oil; black means a dirty air filter (DGT manual, topic 15).' } },
      { es: 'Un filtro de aire muy sucio puede provocar…',
        prompt: { ru: 'Очень грязный воздушный фильтр может вызвать…', en: 'A very dirty air filter can cause…' },
        options: [
          { es: 'humo negro y más consumo de combustible.', ru: 'чёрный дым и больший расход топлива.', en: 'black smoke and higher fuel consumption.' },
          { es: 'que se encienda la luz de carretera.', ru: 'включение дальнего света.', en: 'the main beam to switch on.' },
          { es: 'que el motor se enfríe demasiado.', ru: 'переохлаждение двигателя.', en: 'the engine to overcool.' }
        ],
        answer: 0,
        explain: { ru: 'Грязный фильтр мешает поступлению воздуха: растёт расход, появляется чёрный дым (учебник DGT, тема 15).', en: 'A dirty filter restricts air: more fuel and black smoke (DGT manual, topic 15).' } },
      { es: 'Al arrancar en un día frío sale humo blanco por el escape. ¿Qué indica?',
        prompt: { ru: 'При запуске в холодный день из выхлопной идёт белый дым. Что это значит?', en: 'On a cold morning, white smoke comes out at start-up. What does it mean?' },
        options: [
          { es: 'Que el motor quema aceite.', ru: 'Двигатель жжёт масло.', en: 'The engine is burning oil.' },
          { es: 'Una avería grave en los frenos.', ru: 'Серьёзная поломка тормозов.', en: 'A serious brake fault.' },
          { es: 'Es vapor de agua, normal al arrancar en frío.', ru: 'Это водяной пар — нормально при холодном пуске.', en: 'It is water vapour — normal on a cold start.' }
        ],
        answer: 2,
        explain: { ru: 'На холодном пуске белый дым — пар; если он идёт на прогретом двигателе — возможна поломка (учебник DGT, тема 15).', en: 'On a cold start white smoke is steam; if it continues with a warm engine, there may be a fault (DGT manual, topic 15).' } },
      { es: '¿Cuándo se debe comprobar el nivel del líquido refrigerante?',
        prompt: { ru: 'Когда проверяют уровень охлаждающей жидкости?', en: 'When should the coolant level be checked?' },
        options: [
          { es: 'Con el motor frío.', ru: 'На холодном двигателе.', en: 'With the engine cold.' },
          { es: 'Con el motor muy caliente.', ru: 'На очень горячем двигателе.', en: 'With the engine very hot.' },
          { es: 'Con el motor en marcha.', ru: 'При работающем двигателе.', en: 'With the engine running.' }
        ],
        answer: 0,
        explain: { ru: 'Уровень между min и max смотрят на холодном двигателе; горячую систему открывать опасно (учебник DGT, тема 15).', en: 'Check min–max with the engine cold; opening a hot system is dangerous (DGT manual, topic 15).' } },
      { es: '¿Por qué hay que revisar el líquido refrigerante al principio del invierno?',
        prompt: { ru: 'Зачем проверять охлаждающую жидкость в начале зимы?', en: 'Why check the coolant at the start of winter?' },
        options: [
          { es: 'Para que el motor gaste menos aceite.', ru: 'Чтобы двигатель расходовал меньше масла.', en: 'So the engine uses less oil.' },
          { es: 'Para que no se congele y dañe el motor.', ru: 'Чтобы она не замёрзла и не повредила двигатель.', en: 'So it does not freeze and damage the engine.' },
          { es: 'Porque en invierno no se usa.', ru: 'Потому что зимой она не нужна.', en: 'Because it is not used in winter.' }
        ],
        answer: 1,
        explain: { ru: 'Замёрзшая жидкость расширяется и может разорвать двигатель или радиатор (учебник DGT, тема 15).', en: 'Frozen coolant expands and can crack the engine or radiator (DGT manual, topic 15).' } },
      { es: '¿Qué pieza enfría el líquido refrigerante?',
        prompt: { ru: 'Какая деталь охлаждает охлаждающую жидкость?', en: 'Which part cools the coolant?' },
        options: [
          { es: 'El alternador.', ru: 'Генератор.', en: 'The alternator.' },
          { es: 'La bujía.', ru: 'Свеча зажигания.', en: 'The spark plug.' },
          { es: 'El radiador.', ru: 'Радиатор.', en: 'The radiator.' }
        ],
        answer: 2,
        explain: { ru: 'Жидкость остывает в радиаторе и насосом возвращается к двигателю (учебник DGT, тема 15).', en: 'The coolant cools in the radiator and is pumped back to the engine (DGT manual, topic 15).' } },
      { es: '¿Qué pieza produce la electricidad y recarga la batería con el motor en marcha?',
        prompt: { ru: 'Какая деталь вырабатывает ток и заряжает аккумулятор при работающем двигателе?', en: 'Which part produces electricity and charges the battery while the engine runs?' },
        options: [
          { es: 'El alternador.', ru: 'Генератор.', en: 'The alternator.' },
          { es: 'El radiador.', ru: 'Радиатор.', en: 'The radiator.' },
          { es: 'El embrague.', ru: 'Сцепление.', en: 'The clutch.' }
        ],
        answer: 0,
        explain: { ru: 'Генератор (alternador), приводимый ремнём, — часть цепи зарядки (учебник DGT, тема 15).', en: 'The belt-driven alternator is part of the charging circuit (DGT manual, topic 15).' } },
      { es: 'Un vehículo de propulsión es aquel en el que la fuerza del motor llega…',
        prompt: { ru: 'Автомобиль с «propulsión» — это когда сила двигателя передаётся…', en: 'A “propulsión” vehicle is one where the engine drives…' },
        options: [
          { es: 'a las ruedas delanteras.', ru: 'на передние колёса.', en: 'the front wheels.' },
          { es: 'a las ruedas traseras.', ru: 'на задние колёса.', en: 'the rear wheels.' },
          { es: 'a las cuatro ruedas.', ru: 'на все четыре колеса.', en: 'all four wheels.' }
        ],
        answer: 1,
        explain: { ru: 'Tracción — передний привод, propulsión — задний, tracción total — полный (учебник DGT, тема 15).', en: 'Tracción — front-wheel drive, propulsión — rear-wheel, tracción total — four-wheel (DGT manual, topic 15).' } },
      { es: '¿Qué debe comprobar en el sistema de frenos?',
        prompt: { ru: 'Что нужно проверять в тормозной системе?', en: 'What should you check in the braking system?' },
        options: [
          { es: 'El nivel del líquido de frenos y el desgaste de pastillas o zapatas.', ru: 'Уровень тормозной жидкости и износ колодок.', en: 'Brake fluid level and wear of pads or shoes.' },
          { es: 'La tensión de la correa del alternador.', ru: 'Натяжение ремня генератора.', en: 'Alternator belt tension.' },
          { es: 'El estado de las bujías.', ru: 'Состояние свечей.', en: 'The spark plugs.' }
        ],
        answer: 0,
        explain: { ru: 'Тормоза: жидкость между min и max, колодки не изношены, шины накачаны (учебник DGT, тема 15).', en: 'Brakes: fluid between min and max, pads not worn, tyres inflated (DGT manual, topic 15).' } },
      { es: '¿Cuándo debe pasar la primera ITV un turismo nuevo de uso particular?',
        prompt: { ru: 'Когда новый частный легковой автомобиль проходит первый техосмотр ITV?', en: 'When does a new private car have its first ITV?' },
        options: [
          { es: 'Al cumplir 2 años.', ru: 'В 2 года.', en: 'At 2 years.' },
          { es: 'Al cumplir 4 años.', ru: 'В 4 года.', en: 'At 4 years.' },
          { es: 'Al cumplir 6 años.', ru: 'В 6 лет.', en: 'At 6 years.' }
        ],
        answer: 1,
        explain: { ru: 'Легковой (до 9 мест): первый ITV в 4 года, затем раз в 2 года до 10 лет, потом ежегодно (учебник DGT, тема 2; RD 920/2017).', en: 'Cars (up to 9 seats): first ITV at 4 years, then every 2 years until 10, then yearly (DGT manual, topic 2; RD 920/2017).' } },
      { es: 'Un turismo particular de 7 años debe pasar la ITV…',
        prompt: { ru: 'Частный легковой автомобиль 7 лет проходит ITV…', en: 'A 7-year-old private car has its ITV…' },
        options: [
          { es: 'cada año.', ru: 'каждый год.', en: 'every year.' },
          { es: 'cada seis meses.', ru: 'раз в полгода.', en: 'every six months.' },
          { es: 'cada dos años.', ru: 'раз в два года.', en: 'every two years.' }
        ],
        answer: 2,
        explain: { ru: 'С 4 до 10 лет — раз в 2 года (RD 920/2017).', en: 'From 4 to 10 years — every 2 years (RD 920/2017).' } },
      { es: 'Un turismo particular de 12 años debe pasar la ITV…',
        prompt: { ru: 'Частный легковой автомобиль 12 лет проходит ITV…', en: 'A 12-year-old private car has its ITV…' },
        options: [
          { es: 'cada año.', ru: 'каждый год.', en: 'every year.' },
          { es: 'cada dos años.', ru: 'раз в два года.', en: 'every two years.' },
          { es: 'ya no tiene que pasarla.', ru: 'уже не проходит.', en: 'no longer needs one.' }
        ],
        answer: 0,
        explain: { ru: 'Старше 10 лет — ежегодно (RD 920/2017).', en: 'Over 10 years — every year (RD 920/2017).' } },
      { es: '¿Quién es responsable de que el vehículo pase la ITV en la fecha correspondiente?',
        prompt: { ru: 'Кто отвечает за то, чтобы машина вовремя прошла ITV?', en: 'Who is responsible for the car passing its ITV on time?' },
        options: [
          { es: 'El taller habitual.', ru: 'Постоянная мастерская.', en: 'The usual garage.' },
          { es: 'El titular del vehículo.', ru: 'Владелец (titular) машины.', en: 'The registered keeper (titular).' },
          { es: 'La Jefatura de Tráfico.', ru: 'Управление дорожного движения.', en: 'The Traffic Department.' }
        ],
        answer: 1,
        explain: { ru: 'Следить за сроками ITV должен владелец (учебник DGT, тема 2).', en: 'The keeper must keep track of ITV dates (DGT manual, topic 2).' } },
      { es: '¿Qué indica esta señal?',
        prompt: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        sign: 'S-102',
        options: [
          { es: 'Taller de reparación.', ru: 'Автомастерская.', en: 'Repair garage.' },
          { es: 'Gasolinera.', ru: 'Автозаправка.', en: 'Petrol station.' },
          { es: 'Estación de inspección técnica de vehículos (ITV).', ru: 'Станция техосмотра (ITV).', en: 'Vehicle inspection (ITV) station.' }
        ],
        answer: 2,
        explain: { ru: 'S-102 — станция ITV; мастерская — S-103.', en: 'S-102 — an ITV station; a repair garage is S-103.' } },
      { es: 'Si en el cuadro de instrumentos se enciende un testigo de color rojo, en general indica…',
        prompt: { ru: 'Если на панели загорелся красный индикатор, это обычно означает…', en: 'If a red warning light comes on in the dashboard, it usually means…' },
        options: [
          { es: 'que una función está activada, sin peligro.', ru: 'включена какая-то функция, опасности нет.', en: 'a function is switched on, no danger.' },
          { es: 'una avería o peligro grave: hay que parar en cuanto sea seguro.', ru: 'серьёзная неисправность: остановиться, как только это безопасно.', en: 'a serious fault or danger: stop as soon as it is safe.' },
          { es: 'que toca pasar la ITV.', ru: 'пора на техосмотр.', en: 'the ITV is due.' }
        ],
        answer: 1,
        explain: { ru: 'Красный — опасно (масло, температура, тормоза, зарядка); жёлтый — предупреждение; зелёный/синий — информация.', en: 'Red — danger (oil, temperature, brakes, charging); amber — warning; green/blue — information.' } }
    ]
  }
]);
