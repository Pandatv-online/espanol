// DGT · theory, topic 08: road signs and signals. Sources: DGT «Teórica abreviada, lectura fácil» (2025),
// DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003, anexo I as amended by RD 465/2025), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-senales', level: 'DGT',
    title: { ru: 'Сигналы и знаки', en: 'Traffic signs and signals' },
    summary: { ru: 'Порядок подчинения сигналам, жесты регулировщика, светофоры, временные знаки, семьи знаков и разметка.',
               en: 'Which signal wins, police gestures, traffic lights, temporary signs, sign families and road markings.' },
    hero: { es: 'Señales de <b>circulación</b>',
            sub: { ru: 'Кто главнее: регулировщик, светофор, знак или разметка', en: 'Who wins: officer, traffic light, sign or road marking' } },
    tabs: [
      {
        id: 'order', label: { ru: 'Порядок', en: 'Hierarchy' },
        blocks: [
          { type: 'text', body: {
            ru: ['Все водители и пешеходы обязаны подчиняться сигналам. Знак действует на всю ширину проезжей части; если у полос разные правила, это показывает разметка или знаки над полосой. Менять или убирать знаки без уважительной причины запрещено.'],
            en: ['All drivers and pedestrians must obey traffic signals. A sign applies to the whole width of the carriageway; if lanes have different rules, markings or overhead signs show it. Moving or removing signs without good reason is forbidden.'] } },
          { type: 'triggers', heading: { ru: 'Порядок приоритета (RGC, ст. 133)', en: 'Order of precedence (RGC art. 133)' }, items: [
            { num: '1', color: 'coral', title: { ru: 'Регулировщик', en: 'Traffic officer' }, phrases: ['agentes de tráfico'],
              sub: { ru: 'сигналы и команды агентов', en: 'signals and orders of officers' } },
            { num: '2', color: 'amber', title: { ru: 'Временные знаки', en: 'Temporary signs' }, phrases: ['señalización circunstancial', 'balizamiento'],
              sub: { ru: 'табло, конусы, ограждения', en: 'message panels, cones, barriers' } },
            { num: '3', color: 'teal', title: { ru: 'Светофоры', en: 'Traffic lights' }, phrases: ['semáforos'] },
            { num: '4', color: 'blue', title: { ru: 'Вертикальные знаки', en: 'Vertical signs' }, phrases: ['señales verticales'] },
            { num: '5', color: 'purple', title: { ru: 'Разметка', en: 'Road markings' }, phrases: ['marcas viales'] }
          ] },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Противоречие:</b> побеждает сигнал более высокого уровня. Если противоречат два сигнала одного типа — выполняют <b>более строгий</b> (STOP строже, чем «Уступи дорогу»).'],
            en: ['<b>Conflict:</b> the higher-ranking signal wins. If two signals of the same type conflict, obey the <b>more restrictive</b> one (STOP is stricter than Give way).'] } },
          { type: 'table', heading: { ru: 'Сигналы противоречат — что делать', en: 'Conflicting signals — what to do' },
            head: [{ ru: 'Ситуация', en: 'Situation' }, { ru: 'Что выполнять', en: 'What to obey' }],
            rows: [
              ['STOP + semáforo verde', { ru: 'зелёный светофор', en: 'the green light' }],
              ['STOP + ceda el paso', { ru: 'STOP (строже)', en: 'STOP (stricter)' }],
              ['agente + semáforo', { ru: 'регулировщика', en: 'the officer' }],
              ['panel 80 + señal 100', { ru: 'табло: 80 км/ч', en: 'the panel: 80 km/h' }],
              ['verde + giro prohibido', { ru: 'оба сигнала', en: 'both signals' }]
            ] },
          { type: 'text', color: 'blue', body: {
            ru: ['<b>Справа или слева?</b> Выполняют светофоры и знаки <b>справа</b>, над проезжей частью или над своей полосой. Если их там нет и вы едете прямо или поворачиваете налево — выполняют знаки <b>слева</b>. Если справа и слева разные указания, для поворота налево и движения прямо действуют левые.'],
            en: ['<b>Right or left?</b> Obey the lights and signs on the <b>right</b>, above the road or above your lane. If there are none and you go straight on or turn left, obey those on the <b>left</b>. If left and right say different things, drivers going straight on or turning left follow the left ones.'] } },
          { type: 'text', color: 'blue', body: {
            ru: ['Знак ограничения рядом с табличкой с названием населённого пункта действует <b>во всём населённом пункте</b>, если другие знаки не говорят иного.'],
            en: ['A regulatory sign next to the town-name sign applies to the <b>whole town</b>, unless other signs say otherwise.'] } }
        ]
      },
      {
        id: 'officers', label: { ru: 'Регулировщик', en: 'Officers' },
        blocks: [
          { type: 'figure', src: 'img/dgt/senales-agente.svg',
            alt: { ru: 'Четыре жеста регулировщика: рука вверх, руки в стороны, рука вверх-вниз, качание красного фонаря',
                   en: 'Four officer gestures: arm raised, arms out to the sides, arm moving up and down, swinging a red light' },
            caption: { ru: 'Регулировщика видно издалека: светоотражающая одежда заметна минимум за 150 м.',
                       en: 'Officers are easy to spot: reflective clothing visible from at least 150 m.' } },
          { type: 'rules', heading: { ru: 'Жесты рукой', en: 'Arm signals' }, items: [
            { color: 'coral', title: { ru: 'Рука поднята вверх', en: 'Arm raised vertically' }, es: 'brazo levantado verticalmente',
              body: { ru: 'Остановиться должны <b>все</b>, кто приближается. Тот, кто уже въехал на перекрёсток, продолжает движение; кто не может безопасно остановиться — тоже.',
                      en: '<b>Everyone</b> approaching must stop. Drivers already inside the junction carry on, as do those who cannot stop safely.' } },
            { color: 'coral', title: { ru: 'Руки в стороны', en: 'Arms out sideways' }, es: 'brazo o brazos extendidos horizontalmente',
              body: { ru: 'Стоят все, кто едет на регулировщика <b>спереди и сзади</b> (поперёк вытянутых рук). Приказ действует, даже если он опустил руки, пока не сменит позу.',
                      en: 'Everyone coming at the officer <b>from the front or the back</b> (across the arms) stops. The order holds even if the arms are lowered, until the officer changes position.' } },
            { color: 'amber', title: { ru: 'Рука вверх-вниз', en: 'Arm moved up and down' }, es: 'brazo extendido de arriba abajo',
              body: { ru: '<b>Снизить скорость</b> тем, кто приближается со стороны этой руки.',
                      en: 'Drivers approaching from the side of that arm must <b>slow down</b>.' } },
            { color: 'coral', title: { ru: 'Качание фонаря', en: 'Swinging a light' }, es: 'balanceo de una luz roja o amarilla',
              body: { ru: 'Остановиться тем, на кого направлен красный или жёлтый свет.',
                      en: 'Drivers the red or yellow light is aimed at must stop.' } }
          ] },
          { type: 'table', heading: { ru: 'Свисток и сигналы с машины', en: 'Whistle and signals from a vehicle' },
            head: [{ ru: 'Сигнал', en: 'Signal' }, { ru: 'Значение', en: 'Meaning' }],
            rows: [
              ['toques cortos y frecuentes', { ru: 'остановиться', en: 'stop' }],
              ['un toque largo', { ru: 'продолжить движение', en: 'move on' }],
              ['bandera roja', { ru: 'дорога закрыта', en: 'road closed' }],
              ['bandera verde', { ru: 'дорога снова открыта', en: 'road open again' }],
              ['bandera amarilla', { ru: 'внимание, опасность', en: 'caution, danger' }],
              ['brazo hacia abajo y fijo', { ru: 'остановиться справа', en: 'pull over on the right' }]
            ] },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Полиция сзади</b> включила проблесковый маяк, сирену и <b>красный мигающий свет вперёд</b>: остановитесь справа, <b>перед</b> полицейской машиной, в безопасном месте, и оставайтесь в салоне. Указания — через громкоговоритель (RGC, ст. 69).'],
            en: ['<b>A police car behind you</b> has its beacon and siren on and shows a <b>flashing red light forwards</b>: pull over on the right, <b>in front of</b> the police car, somewhere safe, and stay inside. Instructions come over the loudspeaker (RGC art. 69).'] } },
          { type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' }, body: {
            ru: ['Рука вверх — «стоп всем». Руки в стороны — «я шлагбаум»: стоят те, кто упирается в грудь или спину. Рука машет — «тише».'],
            en: ['Arm up — “everyone stop”. Arms out — “I am a barrier”: those facing my chest or back stop. Arm waving — “slow down”.'] } }
        ]
      },
      {
        id: 'lights', label: { ru: 'Светофоры', en: 'Lights' },
        blocks: [
          { type: 'table', heading: { ru: 'Круглый светофор для машин', en: 'Round traffic light for vehicles' },
            head: [{ ru: 'Сигнал', en: 'Signal' }, { ru: 'Значение', en: 'Meaning' }],
            rows: [
              ['roja fija', { ru: 'проезд запрещён', en: 'no passing' }],
              ['roja intermitente', { ru: 'стоп: переезд, мост…', en: 'stop: level crossing etc.' }],
              ['amarilla fija', { ru: 'стоп, если можно успеть', en: 'stop if you safely can' }],
              ['amarilla intermitente', { ru: 'осторожно, уступить', en: 'take care, give way' }],
              ['verde fija', { ru: 'проезд с приоритетом', en: 'go, with priority' }],
              ['flecha negra', { ru: 'цвет — только для стрелки', en: 'colour applies to arrow' }],
              ['flecha verde', { ru: 'можно в сторону стрелки', en: 'go that way, with care' }]
            ] },
          { type: 'rules', heading: { ru: 'Важные детали', en: 'Key details' }, items: [
            { color: 'coral', title: { ru: 'Красный мигающий', en: 'Flashing red' }, es: 'una o dos luces rojas intermitentes',
              body: { ru: 'Временно запрещает проезд перед <b>железнодорожным переездом</b>, разводным мостом, паромом, выездом пожарных машин или при низко летящем самолёте.',
                      en: 'Temporarily stops traffic before a <b>level crossing</b>, a lifting bridge, a ferry, a fire-station exit or a low-flying aircraft.' } },
            { color: 'amber', title: { ru: 'Жёлтый мигающий', en: 'Flashing amber' }, es: 'amarilla intermitente',
              body: { ru: 'Светофор как будто выключен: <b>особая осторожность</b> и уступить, кому положено (знакам, правилу «помеха справа», пешеходам). Другие знаки остановки продолжают действовать.',
                      en: 'As if the light were off: <b>extra care</b>, give way where the rules say so (signs, priority to the right, pedestrians). Other stop signs still apply.' } },
            { color: 'teal', title: { ru: 'Зелёная стрелка', en: 'Green arrow' }, es: 'flecha verde sobre fondo negro',
              body: { ru: 'Можно ехать в её направлении при любом другом сигнале, но <b>уступая</b> пешеходам и машинам на полосе, куда въезжаете.',
                      en: 'You may go that way whatever the other light shows, but <b>give way</b> to pedestrians and to traffic in the lane you join.' } },
            { color: 'teal', title: { ru: 'Зелёный — не всегда «езжай»', en: 'Green is not always “go”' }, es: 'verde fija',
              body: { ru: 'Не въезжайте на перекрёсток, если застрянете на нём и перекроете поперечное движение (RGC, ст. 59).',
                      en: 'Do not enter a junction if you will get stuck there and block crossing traffic (RGC art. 59).' } }
          ] },
          { type: 'table', heading: { ru: 'Квадратный светофор над полосой', en: 'Square lane-control light' },
            head: [{ ru: 'Сигнал', en: 'Signal' }, { ru: 'Значение', en: 'Meaning' }],
            rows: [
              ['aspa roja', { ru: 'полоса закрыта — уйти', en: 'lane closed — leave it' }],
              ['flecha verde hacia abajo', { ru: 'по полосе можно ехать', en: 'lane open' }],
              ['flecha oblicua blanca', { ru: 'перестроиться по стрелке', en: 'move over as shown' }]
            ] },
          { type: 'text', color: 'teal', body: {
            ru: ['<b>Особые светофоры:</b> с силуэтом велосипеда — только для велосипедов; белая полоса на чёрном круге — для трамваев и автобусов регулярных линий. Пешеходный светофор (человечек) водителям не адресован.'],
            en: ['<b>Special lights:</b> a bicycle symbol — for cycles only; a white bar on a black disc — for trams and scheduled buses. The pedestrian light (little figure) is not for drivers.'] } }
        ]
      },
      {
        id: 'temporary', label: { ru: 'Временные', en: 'Temporary' },
        blocks: [
          { type: 'text', body: {
            ru: ['<b>Señalización circunstancial</b> — знаки, которые меняют обычный режим дороги на время: электронные табло, знаки на жёлтом фоне в зоне работ, ограждения. Они стоят выше светофоров, обычных знаков и разметки.'],
            en: ['<b>Señalización circunstancial</b> — signs that change the normal rules of the road for a while: electronic panels, yellow-background signs at roadworks, barriers. They outrank traffic lights, ordinary signs and markings.'] } },
          { type: 'rules', heading: { ru: 'Виды', en: 'Types' }, items: [
            { color: 'amber', title: { ru: 'Табло переменной информации', en: 'Variable message panels' }, es: 'paneles de mensaje variable',
              body: { ru: 'Информируют, предупреждают об опасности и дают <b>обязательные</b> указания (например, ограничение скорости). Не больше двух сообщений по очереди.',
                      en: 'They inform, warn of hazards and give <b>mandatory</b> instructions (for example a speed limit). No more than two alternating messages.' } },
            { color: 'amber', title: { ru: 'Знаки зоны работ', en: 'Roadworks signs' }, es: 'fondo amarillo',
              body: { ru: 'В зоне работ знаки опасности и многие запрещающие — на <b>жёлтом фоне</b>. Они временно отменяют обычные знаки.',
                      en: 'At roadworks, warning signs and many prohibitory signs have a <b>yellow background</b>. They temporarily override the normal signs.' } },
            { color: 'amber', title: { ru: 'Ограждение', en: 'Barriers and cones' }, es: 'balizamiento',
              body: { ru: 'Конусы, флажки, временные направляющие щиты: проезжать между ними и через линию, которая их соединяет, <b>запрещено</b>.',
                      en: 'Cones, flags and temporary chevron boards: you must <b>not</b> drive between them or across the line joining them.' } }
          ] },
          { type: 'table', heading: { ru: 'Элементы ограждения', en: 'Delineation devices' },
            head: [{ ru: 'Элемент', en: 'Device' }, { ru: 'Значение', en: 'Meaning' }],
            rows: [
              ['panel direccional provisional', { ru: 'проезд закрыт + куда ехать', en: 'closed + which way to go' }],
              ['conos, banderitas', { ru: 'между ними не проезжать', en: 'do not pass between' }],
              ['luz roja fija', { ru: 'дорога полностью закрыта', en: 'road fully closed' }],
              ['luces amarillas', { ru: 'не проезжать между ними', en: 'do not pass between' }],
              ['1 panel permanente', { ru: 'умеренная опасность', en: 'moderate danger' }],
              ['2 paneles', { ru: 'значительная опасность', en: 'considerable danger' }],
              ['3 paneles', { ru: 'большая опасность', en: 'high danger' }]
            ] },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Постоянные направляющие щиты</b> (бело-синие или бело-красные «стрелки» на повороте) показывают изгиб дороги: чем их больше, тем опаснее поворот и тем сильнее надо снизить скорость.'],
            en: ['<b>Permanent chevron panels</b> (white and blue or white and red arrows on a bend) show the curve: the more panels, the more dangerous the bend and the more you must slow down.'] } },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Аварийная остановка:</b> с 1 января 2026 года в Испании вместо треугольников используется подключённый к DGT маячок <b>V-16</b>. Его ставят на крышу, не выходя на проезжую часть, и включают вместе с аварийкой (RGC, ст. 130).'],
            en: ['<b>Breakdown:</b> since 1 January 2026, Spain uses the connected <b>V-16</b> beacon instead of warning triangles. You put it on the roof without walking onto the road and switch it on along with the hazard lights (RGC art. 130).'] } }
        ]
      },
      {
        id: 'signs', label: { ru: 'Знаки', en: 'Signs' },
        blocks: [
          { type: 'table', heading: { ru: 'Форма и цвет', en: 'Shape and colour' },
            head: [{ ru: 'Группа', en: 'Group' }, { ru: 'Как выглядит', en: 'What it looks like' }],
            rows: [
              [{ ru: 'Опасность (P)', en: 'Danger (P)' }, { ru: 'треугольник, красный кант', en: 'triangle, red border' }],
              [{ ru: 'Приоритет (R-1…R-6)', en: 'Priority (R-1…R-6)' }, { ru: 'разные формы', en: 'various shapes' }],
              [{ ru: 'Запрет (R-1xx–3xx)', en: 'Prohibition (R-1xx–3xx)' }, { ru: 'круг, красный кант', en: 'circle, red border' }],
              [{ ru: 'Обязанность (R-4xx)', en: 'Obligation (R-4xx)' }, { ru: 'синий круг', en: 'blue circle' }],
              [{ ru: 'Конец запрета (R-5xx)', en: 'End of rule (R-5xx)' }, { ru: 'белый круг с полосой', en: 'white disc, diagonal bar' }],
              [{ ru: 'Указание (S)', en: 'Information (S)' }, { ru: 'прямоугольник, синий', en: 'rectangle, mostly blue' }]
            ] },
          { type: 'signs', heading: { ru: 'Опасность — буква P', en: 'Danger — letter P' }, items: [
            'P-1', 'P-2', 'P-4', 'P-13a', 'P-18', 'P-20a', 'P-25',
            { code: 'P-50', note: { ru: 'другая опасность — смотрите табличку', en: 'other danger — read the plate' } }
          ] },
          { type: 'signs', heading: { ru: 'Приоритет', en: 'Priority' }, items: [
            { code: 'R-1', note: { ru: 'перевёрнутый треугольник', en: 'inverted triangle' } },
            { code: 'R-2', note: { ru: 'восьмиугольник: полная остановка', en: 'octagon: full stop' } },
            'R-3', 'R-4', 'R-5', 'R-6'
          ] },
          { type: 'signs', heading: { ru: 'Запрет и ограничение', en: 'Prohibition and restriction' }, items: [
            { code: 'R-100', note: { ru: 'нельзя ни в одну сторону', en: 'closed in both directions' } },
            { code: 'R-101', note: { ru: 'въезд запрещён (встречные бывают)', en: 'no entry (oncoming traffic may exist)' } },
            'R-301', 'R-305',
            { code: 'R-307', note: { ru: 'нельзя ни останавливаться, ни стоять', en: 'no stopping, no parking' } },
            { code: 'R-308', note: { ru: 'остановка можно, стоянка нет', en: 'stopping yes, parking no' } }
          ] },
          { type: 'signs', heading: { ru: 'Обязанность и конец запрета', en: 'Obligation and end of restriction' }, items: [
            'R-400a', 'R-402',
            { code: 'R-411', note: { ru: 'минимальная скорость', en: 'minimum speed' } },
            'R-413', 'R-500', 'R-501', 'R-502'
          ] },
          { type: 'signs', heading: { ru: 'Указательные — буква S', en: 'Information — letter S' }, items: [
            'S-1', { code: 'S-7', note: { ru: 'рекомендация, не запрет', en: 'advice, not a limit' } }, 'S-13', 'S-17',
            { code: 'S-28', note: { ru: 'зона отдыха и игр: не быстрее 10 км/ч', en: 'home zone (play street): max 10 km/h' } }, 'S-51a'
          ] }
        ]
      },
      {
        id: 'markings', label: { ru: 'Разметка', en: 'Markings' },
        blocks: [
          { type: 'figure', src: 'img/dgt/senales-lineas.svg',
            alt: { ru: 'Четыре участка дороги: сплошная, прерывистая, двойная смешанная линия и зона штриховки',
                   en: 'Four road sections: solid line, broken line, mixed double line and hatched area' },
            caption: { ru: 'У смешанной линии каждый смотрит на линию <b>со своей стороны</b>: A (прерывистая) может пересечь, B (сплошная) — нет.',
                       en: 'With a mixed line, each driver looks at the line <b>on their own side</b>: A (broken) may cross, B (solid) may not.' } },
          { type: 'rules', heading: { ru: 'Продольные линии', en: 'Longitudinal lines' }, items: [
            { color: 'coral', title: { ru: 'Сплошная', en: 'Solid' }, es: 'línea continua',
              body: { ru: 'Нельзя пересекать, ехать по ней и (если она разделяет встречные потоки) ехать слева от неё. Двойная сплошная значит то же самое. Широкая сплошная отделяет особую полосу.',
                      en: 'Do not cross it, drive on it or (if it separates opposite flows) drive to its left. A double solid line means the same. A wide solid line marks a special lane.' } },
            { color: 'teal', title: { ru: 'Прерывистая', en: 'Broken' }, es: 'línea discontinua',
              body: { ru: 'Разделяет полосы. Ехать по ней нельзя (кроме слишком узких полос), но пересекать для разрешённых манёвров можно. Частые штрихи — скоро сплошная или опасное место.',
                      en: 'Separates lanes. Do not drive along it (unless lanes are too narrow), but you may cross it for permitted manoeuvres. Short gaps warn of a solid line or hazard ahead.' } },
            { color: 'purple', title: { ru: 'Смешанная', en: 'Mixed' }, es: 'continua adosada a discontinua',
              body: { ru: 'Учитывают только линию со своей стороны. Кто начал обгон со стороны прерывистой, может вернуться через сплошную.',
                      en: 'Only the line on your side counts. A driver who began overtaking from the broken side may cross the solid line to get back.' } },
            { color: 'teal', title: { ru: 'Двойная прерывистая', en: 'Double broken' }, es: 'discontinuas dobles',
              body: { ru: 'С обеих сторон полосы — <b>реверсивная</b> полоса: направление меняют светофоры над полосой.',
                      en: 'On both sides of a lane — a <b>reversible</b> lane: lane-control lights set the direction.' } }
          ] },
          { type: 'table', heading: { ru: 'Поперечные линии и знаки на асфальте', en: 'Transverse lines and road symbols' },
            head: [{ ru: 'Разметка', en: 'Marking' }, { ru: 'Значение', en: 'Meaning' }],
            rows: [
              ['línea de detención', { ru: 'стоп-линия (сплошная)', en: 'stop line (solid)' }],
              ['transversal discontinua', { ru: 'линия «уступи дорогу»', en: 'give-way line' }],
              ['triángulo pintado', { ru: '«Уступи дорогу»', en: 'Give way' }],
              ['STOP pintado', { ru: 'остановиться у линии', en: 'stop at the line' }],
              ['cebreado', { ru: 'заезжать нельзя', en: 'do not enter' }],
              ['flecha de retorno', { ru: 'скоро сплошная — вправо', en: 'solid line ahead — keep right' }],
              ['P N en el suelo', { ru: 'ж/д переезд рядом', en: 'level crossing ahead' }]
            ] },
          { type: 'text', color: 'purple', body: {
            ru: ['<b>Стоп-линия сама по себе не обязывает</b> останавливаться: она показывает, где стоять, когда этого требует знак STOP, светофор, регулировщик, пешеходный переход или переезд.'],
            en: ['<b>A stop line does not oblige you to stop on its own</b>: it shows where to stop when a STOP sign, traffic light, officer, pedestrian crossing or level crossing requires it.'] } },
          { type: 'markers', groups: [
            { color: 'amber', title: { ru: 'Жёлтая разметка', en: 'Yellow markings' },
              tags: ['continua: no parar', 'discontinua: no estacionar', 'zigzag: no estacionar', 'cuadrícula: no entrar si te quedas'] },
            { color: 'blue', title: { ru: 'Синяя и красно-белая', en: 'Blue and red-white' },
              tags: ['zona azul: aparcar pagando', 'cuadros rojos y blancos: lecho de frenado'] }
          ] },
          { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
            { color: 'coral', es: 'No pises la <b>línea continua</b>.', ru: 'Не наезжай на сплошную линию.', en: 'Don’t drive over the solid line.' },
            { color: 'teal', es: 'Puedes adelantar: la línea es <b>discontinua</b>.', ru: 'Можно обгонять: линия прерывистая.', en: 'You can overtake: the line is broken.' },
            { color: 'purple', es: 'El agente tiene el <b>brazo levantado</b>: para.', ru: 'Регулировщик поднял руку: остановись.', en: 'The officer has raised his arm: stop.' },
            { color: 'amber', es: 'El <b>semáforo</b> está en ámbar intermitente.', ru: 'Светофор мигает жёлтым.', en: 'The traffic light is flashing amber.' },
            { color: 'blue', es: 'Detente antes de la <b>línea de detención</b>.', ru: 'Остановись перед стоп-линией.', en: 'Stop before the stop line.' },
            { color: 'amber', es: 'No aparques junto a la <b>línea amarilla</b>.', ru: 'Не паркуйся у жёлтой линии.', en: 'Don’t park next to the yellow line.' }
          ] }
        ]
      }
    ],
    quizCount: 20,
    quiz: [
      { es: '¿Qué señal tiene preferencia sobre todas las demás?',
        prompt: { ru: 'Какой сигнал имеет приоритет над всеми остальными?', en: 'Which signal takes precedence over all the others?' },
        options: [
          { es: 'Las señales de los agentes de tráfico.', ru: 'Сигналы регулировщиков.', en: 'Signals given by traffic officers.' },
          { es: 'Los semáforos.', ru: 'Светофоры.', en: 'Traffic lights.' },
          { es: 'Las señales verticales.', ru: 'Вертикальные знаки.', en: 'Vertical signs.' }
        ],
        answer: 0,
        explain: { ru: 'Порядок: регулировщик → временные знаки и ограждение → светофоры → знаки → разметка (RGC, ст. 133).', en: 'Order: officer → temporary signs and barriers → traffic lights → signs → markings (RGC art. 133).' } },
      { es: 'Un semáforo está en verde y en el mismo cruce hay una señal de STOP. ¿Qué debe hacer?',
        prompt: { ru: 'На перекрёстке зелёный светофор и одновременно знак STOP. Что делать?', en: 'At a junction the light is green and there is also a STOP sign. What do you do?' },
        options: [
          { es: 'Detenerse, porque la señal de STOP es más restrictiva.', ru: 'Остановиться: STOP строже.', en: 'Stop, because STOP is more restrictive.' },
          { es: 'Pasar, porque el semáforo prevalece sobre la señal vertical.', ru: 'Проехать: светофор важнее вертикального знака.', en: 'Go, because the light outranks the vertical sign.' },
          { es: 'Ceder el paso a los vehículos de la derecha.', ru: 'Уступить машинам справа.', en: 'Give way to vehicles from the right.' }
        ],
        answer: 1,
        explain: { ru: 'Светофор стоит в иерархии выше вертикальных знаков. Правило «более строгий» действует только между сигналами одного типа (RGC, ст. 133).', en: 'Traffic lights rank above vertical signs. The “more restrictive” rule only applies between signals of the same type (RGC art. 133).' } },
      { es: 'En un cruce hay una señal de STOP y otra de ceda el paso. ¿Cuál debe obedecer?',
        prompt: { ru: 'На перекрёстке стоят знак STOP и знак «Уступи дорогу». Какой выполнять?', en: 'A junction has both a STOP sign and a Give way sign. Which do you obey?' },
        options: [
          { es: 'La de ceda el paso.', ru: '«Уступи дорогу».', en: 'The Give way sign.' },
          { es: 'Cualquiera de las dos.', ru: 'Любой из двух.', en: 'Either of them.' },
          { es: 'La de STOP.', ru: 'STOP.', en: 'The STOP sign.' }
        ],
        answer: 2,
        explain: { ru: 'Оба знака одного типа, поэтому выполняют более строгий — STOP (RGC, ст. 133.2).', en: 'Both are the same type of signal, so the more restrictive one wins — STOP (RGC art. 133.2).' } },
      { es: 'Un panel de mensaje variable indica 80 km/h y una señal vertical fija indica 100 km/h. ¿A qué velocidad máxima puede circular?',
        prompt: { ru: 'Электронное табло показывает 80 км/ч, а постоянный знак — 100 км/ч. Какая максимальная скорость?', en: 'A variable message panel shows 80 km/h and a fixed sign shows 100 km/h. What is your speed limit?' },
        options: [
          { es: 'A 80 km/h.', ru: '80 км/ч.', en: '80 km/h.' },
          { es: 'A 100 km/h.', ru: '100 км/ч.', en: '100 km/h.' },
          { es: 'A 90 km/h, la media de las dos.', ru: '90 км/ч, среднее.', en: '90 km/h, the average.' }
        ],
        answer: 0,
        explain: { ru: 'Табло — это временная сигнализация (señalización circunstancial), она стоит выше вертикальных знаков (RGC, ст. 133).', en: 'The panel is temporary signalling (señalización circunstancial), which outranks vertical signs (RGC art. 133).' } },
      { es: 'Quiere girar a la izquierda y solo hay un semáforo situado a su izquierda. ¿Debe obedecerlo?',
        prompt: { ru: 'Вы поворачиваете налево, и светофор есть только слева. Нужно его выполнять?', en: 'You are turning left and the only traffic light is on your left. Must you obey it?' },
        options: [
          { es: 'No, solo se obedecen los semáforos de la derecha.', ru: 'Нет, выполняют только правые светофоры.', en: 'No, only lights on the right count.' },
          { es: 'Sí.', ru: 'Да.', en: 'Yes.' },
          { es: 'Solo si es de noche.', ru: 'Только ночью.', en: 'Only at night.' }
        ],
        answer: 1,
        explain: { ru: 'Если справа сигналов нет, тот, кто едет прямо или поворачивает налево, выполняет сигналы слева (RGC, ст. 132.3).', en: 'If there is nothing on the right, drivers going straight on or turning left obey signals on the left (RGC art. 132.3).' } },
      { es: 'Una señal de velocidad máxima de 40 colocada junto al cartel con el nombre del pueblo indica que…',
        prompt: { ru: 'Знак «40» рядом с табличкой с названием посёлка означает, что…', en: 'A 40 speed-limit sign next to the town-name sign means that…' },
        options: [
          { es: 'el límite se aplica solo hasta el siguiente cruce.', ru: 'ограничение действует только до ближайшего перекрёстка.', en: 'the limit applies only up to the next junction.' },
          { es: 'es solo una recomendación.', ru: 'это лишь рекомендация.', en: 'it is only a recommendation.' },
          { es: 'el límite de 40 km/h rige en todo el poblado, salvo otra señal.', ru: '40 км/ч действует во всём посёлке, если нет других знаков.', en: 'the 40 km/h limit applies throughout the town unless other signs say otherwise.' }
        ],
        answer: 2,
        explain: { ru: 'Знак ограничения рядом с названием населённого пункта действует на весь пункт (RGC, ст. 145.3).', en: 'A regulatory sign beside the town name applies to the whole town (RGC art. 145.3).' } },
      { es: 'El agente tiene el brazo levantado verticalmente. Usted ya está dentro del cruce. ¿Qué hace?',
        prompt: { ru: 'Регулировщик поднял руку вертикально, а вы уже на перекрёстке. Что делать?', en: 'The officer raises an arm vertically and you are already inside the junction. What do you do?' },
        options: [
          { es: 'Termino de cruzar.', ru: 'Завершаю проезд.', en: 'I finish crossing.' },
          { es: 'Me detengo en medio del cruce.', ru: 'Останавливаюсь посреди перекрёстка.', en: 'I stop in the middle of the junction.' },
          { es: 'Doy marcha atrás.', ru: 'Сдаю назад.', en: 'I reverse.' }
        ],
        answer: 0,
        explain: { ru: 'Рука вверх останавливает всех приближающихся, но не тех, кто уже въехал на перекрёсток (RGC, прил. I, 1.1.a).', en: 'A raised arm stops everyone approaching, but not those already in the junction (RGC annex I, 1.1.a).' },
        img: 'img/dgt/senales-agente.svg' },
      { es: 'El agente tiene los dos brazos extendidos en horizontal. ¿Quién debe detenerse?',
        prompt: { ru: 'Регулировщик вытянул обе руки горизонтально. Кто должен остановиться?', en: 'The officer holds both arms out horizontally. Who must stop?' },
        options: [
          { es: 'Solo los que se acercan por su derecha.', ru: 'Только приближающиеся справа от него.', en: 'Only those approaching from his right.' },
          { es: 'Los que se acercan de frente y por detrás de él.', ru: 'Те, кто приближается к нему спереди и сзади.', en: 'Those approaching from his front and back.' },
          { es: 'Nadie; solo indica que se reduzca la velocidad.', ru: 'Никто, это лишь сигнал снизить скорость.', en: 'Nobody; it only means slow down.' }
        ],
        answer: 1,
        explain: { ru: 'Руки работают как шлагбаум: стоят те, чьё направление пересекает линию рук, то есть спереди и сзади (RGC, прил. I, 1.1.b).', en: 'The arms act as a barrier: those whose path crosses the line of the arms stop — front and back (RGC annex I, 1.1.b).' } },
      { es: 'El agente bajó los brazos después de tenerlos extendidos, pero no cambió de posición. ¿Sigue vigente la orden?',
        prompt: { ru: 'Регулировщик держал руки в стороны, потом опустил их, но не повернулся. Приказ ещё действует?', en: 'The officer had both arms out, then lowered them without changing position. Does the order still apply?' },
        options: [
          { es: 'No, al bajar los brazos se puede pasar.', ru: 'Нет, раз руки опущены, можно ехать.', en: 'No, once the arms are down you may go.' },
          { es: 'Solo para los camiones.', ru: 'Только для грузовиков.', en: 'Only for lorries.' },
          { es: 'Sí, hasta que cambie de posición o haga otra señal.', ru: 'Да, пока он не сменит позу или не подаст другой сигнал.', en: 'Yes, until he changes position or gives another signal.' }
        ],
        answer: 2,
        explain: { ru: 'Сигнал «руки в стороны» остаётся в силе, даже если руки опущены, пока регулировщик не повернётся или не даст новый сигнал (RGC, прил. I, 1.1.b).', en: 'The arms-out signal stays in force even with arms lowered until the officer turns or gives a new signal (RGC annex I, 1.1.b).' } },
      { es: 'Un agente mueve el brazo extendido de arriba abajo. Significa que debe…',
        prompt: { ru: 'Регулировщик двигает вытянутой рукой вверх-вниз. Это значит, что нужно…', en: 'An officer moves an outstretched arm up and down. It means you must…' },
        options: [
          { es: 'reducir la velocidad.', ru: 'снизить скорость.', en: 'slow down.' },
          { es: 'detenerse inmediatamente.', ru: 'немедленно остановиться.', en: 'stop immediately.' },
          { es: 'aumentar la velocidad.', ru: 'ускориться.', en: 'speed up.' }
        ],
        answer: 0,
        explain: { ru: 'Это сигнал снизить скорость для тех, кто приближается со стороны этой руки (RGC, прил. I, 1.1.d).', en: 'It tells drivers approaching on that arm’s side to slow down (RGC annex I, 1.1.d).' } },
      { es: '¿Qué significa un toque largo de silbato del agente?',
        prompt: { ru: 'Что означает длинный свисток регулировщика?', en: 'What does one long blast of the officer’s whistle mean?' },
        options: [
          { es: 'Detener el vehículo.', ru: 'Остановиться.', en: 'Stop the vehicle.' },
          { es: 'Reanudar la marcha.', ru: 'Продолжить движение.', en: 'Move on again.' },
          { es: 'Encender las luces.', ru: 'Включить фары.', en: 'Switch on the lights.' }
        ],
        answer: 1,
        explain: { ru: 'Частые короткие свистки — стоп, один длинный — можно ехать (RGC, прил. I, 1.1.e).', en: 'Short, repeated blasts mean stop; one long blast means move on (RGC annex I, 1.1.e).' } },
      { es: 'Un vehículo de policía se sitúa detrás de usted con luz roja intermitente hacia delante. ¿Qué debe hacer?',
        prompt: { ru: 'Сзади пристроилась полицейская машина с красным мигающим светом вперёд. Что делать?', en: 'A police car gets behind you showing a flashing red light forwards. What should you do?' },
        options: [
          { es: 'Detenerse a la izquierda y salir del coche.', ru: 'Остановиться слева и выйти из машины.', en: 'Stop on the left and get out.' },
          { es: 'Apartarse y seguir circulando.', ru: 'Прижаться и ехать дальше.', en: 'Move aside and keep going.' },
          { es: 'Detenerse a la derecha, delante del vehículo policial, y quedarse dentro.', ru: 'Остановиться справа, перед полицейской машиной, и остаться в салоне.', en: 'Stop on the right, in front of the police car, and stay inside.' }
        ],
        answer: 2,
        explain: { ru: 'Так полиция требует остановиться: справа, перед ней, в безопасном месте; выходить не нужно, указания — по громкоговорителю (RGC, ст. 69).', en: 'This is a police order to stop: on the right, in front of them, somewhere safe; stay inside and follow loudspeaker instructions (RGC art. 69).' } },
      { es: '¿Qué indica una bandera roja mostrada desde un vehículo de los agentes?',
        prompt: { ru: 'Что означает красный флаг, который показывают из машины полиции?', en: 'What does a red flag shown from a police vehicle mean?' },
        options: [
          { es: 'Que la vía queda cerrada al tráfico.', ru: 'Дорога закрыта для движения.', en: 'The road is closed to traffic.' },
          { es: 'Que hay un peligro y hay que extremar la atención.', ru: 'Опасность, будьте внимательны.', en: 'There is a hazard; take extra care.' },
          { es: 'Que la vía vuelve a estar abierta.', ru: 'Дорога снова открыта.', en: 'The road is open again.' }
        ],
        answer: 0,
        explain: { ru: 'Красный флаг — дорога закрыта; зелёный — снова открыта; жёлтый — опасность (RGC, прил. I, 1.2).', en: 'Red flag — road closed; green — open again; yellow — danger (RGC annex I, 1.2).' } },
      { es: 'Un semáforo circular muestra luz amarilla fija y usted está tan cerca que no puede detenerse con seguridad. ¿Qué hace?',
        prompt: { ru: 'Загорелся жёлтый (не мигающий), а вы так близко, что безопасно остановиться не успеете. Что делать?', en: 'The light turns steady amber and you are too close to stop safely. What do you do?' },
        options: [
          { es: 'Frenar bruscamente.', ru: 'Резко тормозить.', en: 'Brake hard.' },
          { es: 'Pasar con precaución.', ru: 'Проехать с осторожностью.', en: 'Go through with care.' },
          { es: 'Dar marcha atrás.', ru: 'Сдать назад.', en: 'Reverse.' }
        ],
        answer: 1,
        explain: { ru: 'Жёлтый означает то же, что красный, кроме случая, когда остановиться безопасно уже нельзя (RGC, прил. I, 4.2.c).', en: 'Amber means the same as red, except when you can no longer stop safely (RGC annex I, 4.2.c).' } },
      { es: '¿Qué obliga a hacer un semáforo con luz amarilla intermitente?',
        prompt: { ru: 'Что требует светофор с мигающим жёлтым?', en: 'What does a flashing amber light require?' },
        options: [
          { es: 'Detenerse siempre.', ru: 'Всегда останавливаться.', en: 'Always stop.' },
          { es: 'Pasar con prioridad.', ru: 'Ехать с приоритетом.', en: 'Go with priority.' },
          { es: 'Extremar la precaución y, en su caso, ceder el paso.', ru: 'Быть особо осторожным и при необходимости уступить.', en: 'Take extra care and give way where required.' }
        ],
        answer: 2,
        explain: { ru: 'Мигающий жёлтый не даёт приоритета: действуют знаки и общие правила проезда, другие знаки остановки остаются в силе (RGC, прил. I, 4.2.d).', en: 'Flashing amber gives no priority: signs and general priority rules apply, and other stop signs remain valid (RGC annex I, 4.2.d).' } },
      { es: '¿Dónde se suele encontrar un semáforo con dos luces rojas que se encienden alternativamente?',
        prompt: { ru: 'Где обычно стоит светофор с двумя попеременно мигающими красными огнями?', en: 'Where do you usually find a light with two alternately flashing red lamps?' },
        options: [
          { es: 'Antes de un paso a nivel o un puente móvil.', ru: 'Перед ж/д переездом или разводным мостом.', en: 'Before a level crossing or a lifting bridge.' },
          { es: 'En los pasos de peatones de colegios.', ru: 'У школьных пешеходных переходов.', en: 'At school pedestrian crossings.' },
          { es: 'En la entrada de las autopistas.', ru: 'На въезде на автомагистраль.', en: 'At motorway entrances.' }
        ],
        answer: 0,
        explain: { ru: 'Мигающие красные временно запрещают проезд у переездов, разводных мостов, паромов, выездов пожарных и при низко летящих самолётах (RGC, прил. I, 4.2.b).', en: 'Flashing red lights temporarily stop traffic at level crossings, lifting bridges, ferries, fire-station exits and low-flying aircraft (RGC annex I, 4.2.b).' } },
      { es: 'Con el semáforo en rojo se enciende una flecha verde hacia la derecha. ¿Puede girar a la derecha?',
        prompt: { ru: 'Горит красный, и зажглась зелёная стрелка направо. Можно повернуть направо?', en: 'The light is red and a green right arrow comes on. May you turn right?' },
        options: [
          { es: 'No, manda la luz roja.', ru: 'Нет, главный — красный.', en: 'No, the red light rules.' },
          { es: 'Sí, con precaución y cediendo el paso a peatones y vehículos del carril al que se incorpora.', ru: 'Да, осторожно, уступая пешеходам и машинам на полосе, куда въезжаете.', en: 'Yes, carefully, giving way to pedestrians and traffic in the lane you join.' },
          { es: 'Sí, y con prioridad sobre los peatones.', ru: 'Да, и с приоритетом над пешеходами.', en: 'Yes, with priority over pedestrians.' }
        ],
        answer: 1,
        explain: { ru: 'Зелёная стрелка разрешает движение в её направлении при любом другом сигнале, но без приоритета (RGC, прил. I, 4.2.g).', en: 'A green arrow allows that movement whatever else is lit, but without priority (RGC annex I, 4.2.g).' } },
      { es: 'Sobre su carril se enciende un aspa roja. ¿Qué significa?',
        prompt: { ru: 'Над вашей полосой загорелся красный крест. Что это значит?', en: 'A red X lights up above your lane. What does it mean?' },
        options: [
          { es: 'Que debe detenerse bajo el semáforo.', ru: 'Нужно остановиться под светофором.', en: 'You must stop under the light.' },
          { es: 'Que el carril es solo para autobuses.', ru: 'Полоса только для автобусов.', en: 'The lane is for buses only.' },
          { es: 'Que está prohibido ocupar ese carril y debe abandonarlo cuanto antes.', ru: 'Занимать полосу запрещено, нужно как можно скорее её покинуть.', en: 'The lane must not be used; leave it as soon as possible.' }
        ],
        answer: 2,
        explain: { ru: 'Квадратные светофоры над полосой: красный крест — полоса закрыта, зелёная стрелка вниз — открыта (RGC, прил. I, 4.3).', en: 'Lane-control lights: red X — lane closed; green down arrow — lane open (RGC annex I, 4.3).' } },
      { es: 'Un semáforo muestra la silueta de una bicicleta en rojo. ¿A quién afecta?',
        prompt: { ru: 'Светофор показывает красный силуэт велосипеда. К кому он относится?', en: 'A light shows a red bicycle symbol. Who must obey it?' },
        options: [
          { es: 'Solo a los ciclos.', ru: 'Только к велосипедам.', en: 'Only cycles.' },
          { es: 'A todos los vehículos.', ru: 'Ко всем машинам.', en: 'All vehicles.' },
          { es: 'A los peatones.', ru: 'К пешеходам.', en: 'Pedestrians.' }
        ],
        answer: 0,
        explain: { ru: 'Светофор с силуэтом велосипеда регулирует только велосипеды (RGC, прил. I, 4.4).', en: 'A light with a bicycle symbol applies to cycles only (RGC annex I, 4.4).' } },
      { es: 'En unas obras encuentra una fila de conos. ¿Qué indican?',
        prompt: { ru: 'В зоне работ стоит ряд конусов. Что они означают?', en: 'At roadworks there is a row of cones. What do they mean?' },
        options: [
          { es: 'Que puede pasar entre ellos si va despacio.', ru: 'Между ними можно проезжать медленно.', en: 'You may pass between them slowly.' },
          { es: 'Que está prohibido pasar a través de la línea que los une.', ru: 'Пересекать линию, которая их соединяет, запрещено.', en: 'You must not cross the line joining them.' },
          { es: 'Que el límite es 30 km/h.', ru: 'Ограничение 30 км/ч.', en: 'The limit is 30 km/h.' }
        ],
        answer: 1,
        explain: { ru: 'Конусы и флажки — разграничивающие элементы: проезжать между ними нельзя (RGC, ст. 142 и прил. I, 3.1.1).', en: 'Cones and flags are delineation devices: you must not pass between them (RGC art. 142 and annex I, 3.1.1).' } },
      { es: 'En una curva hay tres paneles direccionales permanentes. ¿Qué le indican?',
        prompt: { ru: 'На повороте стоят три постоянных направляющих щита. О чём они говорят?', en: 'A bend has three permanent chevron panels. What do they tell you?' },
        options: [
          { es: 'Que hay tres carriles.', ru: 'Что там три полосы.', en: 'There are three lanes.' },
          { es: 'Que el peligro es moderado.', ru: 'Опасность умеренная.', en: 'The danger is moderate.' },
          { es: 'Que la curva es muy peligrosa y hay que reducir bastante la velocidad.', ru: 'Поворот очень опасный, нужно сильно снизить скорость.', en: 'The bend is very dangerous; slow right down.' }
        ],
        answer: 2,
        explain: { ru: 'Один щит — умеренная опасность, два — значительная, три — большая (DGT, тема 8; RGC, прил. I, 3.1.2).', en: 'One panel — moderate danger, two — considerable, three — high (DGT topic 8; RGC annex I, 3.1.2).' } },
      { es: 'Desde el 1 de enero de 2026, ¿cómo debe señalizar un turismo inmovilizado por avería en la calzada?',
        prompt: { ru: 'Как с 1 января 2026 года обозначать легковой автомобиль, ставший из-за поломки на дороге?', en: 'Since 1 January 2026, how must a car broken down on the road be signalled?' },
        options: [
          { es: 'Con la luz V-16 conectada, además de la luz de emergencia.', ru: 'Подключённым маячком V-16 и аварийкой.', en: 'With the connected V-16 light plus hazard lights.' },
          { es: 'Con dos triángulos a 50 metros.', ru: 'Двумя треугольниками в 50 м.', en: 'With two triangles 50 m away.' },
          { es: 'Solo con la luz de emergencia.', ru: 'Только аварийкой.', en: 'With hazard lights only.' }
        ],
        answer: 0,
        explain: { ru: 'С 2026 года обязательный аварийный сигнал — подключённый маячок V-16; треугольники больше не годятся (RGC, ст. 130.4; RD 159/2021).', en: 'Since 2026 the required warning device is the connected V-16 beacon; triangles are no longer valid (RGC art. 130.4; RD 159/2021).' } },
      { es: '¿Qué forma tienen las señales de advertencia de peligro?',
        prompt: { ru: 'Какой формы предупреждающие знаки опасности?', en: 'What shape are danger warning signs?' },
        options: [
          { es: 'Circular con borde rojo.', ru: 'Круглые с красным кантом.', en: 'Round with a red border.' },
          { es: 'Triangular con borde rojo.', ru: 'Треугольные с красным кантом.', en: 'Triangular with a red border.' },
          { es: 'Rectangular azul.', ru: 'Синие прямоугольные.', en: 'Blue rectangles.' }
        ],
        answer: 1,
        explain: { ru: 'Знаки опасности (P) — треугольник остриём вверх с красной каймой; в зоне работ фон жёлтый (RGC, ст. 144).', en: 'Danger signs (P) are point-up triangles with a red border; at roadworks the background is yellow (RGC art. 144).' },
        sign: 'P-50' },
      { es: '¿Qué indica esta señal?',
        prompt: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Circulación prohibida en ambos sentidos.', ru: 'Движение запрещено в обоих направлениях.', en: 'No vehicles in either direction.' },
          { es: 'Fin de todas las prohibiciones.', ru: 'Конец всех запретов.', en: 'End of all restrictions.' },
          { es: 'Entrada prohibida.', ru: 'Въезд запрещён.', en: 'No entry.' }
        ],
        answer: 2,
        explain: { ru: 'R-101 запрещает въезд с этой стороны; с другой стороны машины могут ехать навстречу. R-100 (белый круг) запрещает движение в обе стороны (RGC, ст. 145).', en: 'R-101 forbids entry from this side; vehicles may still come the other way. R-100 (white disc) closes the road both ways (RGC art. 145).' },
        sign: 'R-101' },
      { es: 'Esta señal prohíbe…',
        prompt: { ru: 'Этот знак запрещает…', en: 'This sign prohibits…' },
        options: [
          { es: 'la circulación de toda clase de vehículos en ambos sentidos.', ru: 'движение всех транспортных средств в обоих направлениях.', en: 'all vehicles in both directions.' },
          { es: 'solo la entrada de camiones.', ru: 'только въезд грузовиков.', en: 'only lorries entering.' },
          { es: 'solo el estacionamiento.', ru: 'только стоянку.', en: 'only parking.' }
        ],
        answer: 0,
        explain: { ru: 'R-100 «Движение запрещено» — закрыто для всех и в обе стороны (RGC, ст. 145).', en: 'R-100 “No vehicles” — closed to everyone in both directions (RGC art. 145).' },
        sign: 'R-100' },
      { es: 'Esta señal, ¿qué le permite hacer?',
        prompt: { ru: 'Что этот знак разрешает?', en: 'What does this sign allow you to do?' },
        options: [
          { es: 'Parar, pero no estacionar.', ru: 'Останавливаться, но не ставить машину на стоянку.', en: 'Stop, but not park.' },
          { es: 'Ni parar ni estacionar.', ru: 'Ни остановки, ни стоянки.', en: 'Neither stop nor park.' },
          { es: 'Estacionar solo los días pares.', ru: 'Стоять только по чётным дням.', en: 'Park on even days only.' }
        ],
        answer: 0,
        explain: { ru: 'R-308 (одна косая черта) запрещает только стоянку. R-307 (крест) запрещает и остановку, и стоянку (RGC, ст. 145).', en: 'R-308 (one diagonal bar) bans parking only. R-307 (a cross) bans both stopping and parking (RGC art. 145).' },
        sign: 'R-308' },
      { es: '¿Qué obliga a hacer esta señal?',
        prompt: { ru: 'Что требует этот знак?', en: 'What does this sign require?' },
        options: [
          { es: 'No superar esa velocidad.', ru: 'Не превышать эту скорость.', en: 'Not to exceed that speed.' },
          { es: 'Circular, como mínimo, a esa velocidad.', ru: 'Ехать не медленнее этой скорости.', en: 'To drive at least at that speed.' },
          { es: 'Es solo una velocidad aconsejada.', ru: 'Это лишь рекомендуемая скорость.', en: 'It is only an advised speed.' }
        ],
        answer: 1,
        explain: { ru: 'Синий круг — обязанность: R-411 «Минимальная скорость» (RGC, ст. 145.2.e).', en: 'A blue circle means an obligation: R-411 “Minimum speed” (RGC art. 145.2.e).' },
        sign: 'R-411' },
      { es: 'La velocidad que indica esta señal es…',
        prompt: { ru: 'Скорость на этом знаке —…', en: 'The speed on this sign is…' },
        options: [
          { es: 'obligatoria como máximo.', ru: 'обязательный максимум.', en: 'a mandatory maximum.' },
          { es: 'obligatoria como mínimo.', ru: 'обязательный минимум.', en: 'a mandatory minimum.' },
          { es: 'aconsejada, no obligatoria.', ru: 'рекомендуемая, а не обязательная.', en: 'advised, not mandatory.' }
        ],
        answer: 2,
        explain: { ru: 'S-7 — синий прямоугольник, указательный знак: рекомендуемая максимальная скорость (RGC, ст. 146).', en: 'S-7 is a blue rectangle, an information sign: advised maximum speed (RGC art. 146).' },
        sign: 'S-7' },
      { es: '¿Qué significa esta señal?',
        prompt: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Fin de la limitación de velocidad.', ru: 'Конец ограничения скорости.', en: 'End of the speed limit.' },
          { es: 'Fin de todas las prohibiciones señalizadas antes.', ru: 'Конец всех ранее установленных запретов.', en: 'End of all previously signed restrictions.' },
          { es: 'Prohibido adelantar.', ru: 'Обгон запрещён.', en: 'No overtaking.' }
        ],
        answer: 1,
        explain: { ru: 'R-500 — белый круг с косыми линиями: отменяет все запреты, введённые знаками для движущихся машин (RGC, ст. 145.2.f).', en: 'R-500 — white disc with diagonal lines: lifts all restrictions previously signed for moving vehicles (RGC art. 145.2.f).' },
        sign: 'R-500' },
      { es: 'Esta señal prohíbe adelantar. ¿A quién puede adelantar, sin invadir el sentido contrario?',
        prompt: { ru: 'Этот знак запрещает обгон. Кого всё же можно обогнать, не выезжая на встречную?', en: 'This sign bans overtaking. Whom may you still overtake without entering the opposite lane?' },
        options: [
          { es: 'A cualquier turismo lento.', ru: 'Любой медленный легковой автомобиль.', en: 'Any slow car.' },
          { es: 'A nadie.', ru: 'Никого.', en: 'Nobody.' },
          { es: 'A motocicletas de dos ruedas.', ru: 'Двухколёсные мотоциклы.', en: 'Two-wheeled motorcycles.' }
        ],
        answer: 2,
        explain: { ru: 'Под R-305 можно обогнать двухколёсный мотоцикл, если не заезжаете на встречную полосу (DGT, тема 8; RGC, ст. 145).', en: 'Under R-305 you may overtake a two-wheeled motorcycle if you do not cross into the opposite lane (DGT topic 8; RGC art. 145).' },
        sign: 'R-305' },
      { es: 'Una línea longitudinal continua que separa sentidos, ¿qué prohíbe?',
        prompt: { ru: 'Что запрещает сплошная продольная линия, разделяющая встречные потоки?', en: 'What does a solid line separating opposite flows prohibit?' },
        options: [
          { es: 'Atravesarla, circular sobre ella y circular por su izquierda.', ru: 'Пересекать её, ехать по ней и ехать слева от неё.', en: 'Crossing it, driving on it and driving to its left.' },
          { es: 'Solo circular sobre ella.', ru: 'Только ехать по ней.', en: 'Only driving on it.' },
          { es: 'Nada, si no hay vehículos de frente.', ru: 'Ничего, если нет встречных.', en: 'Nothing, if there is no oncoming traffic.' }
        ],
        answer: 0,
        explain: { ru: 'Сплошную нельзя пересекать, по ней нельзя ехать, а если она делит встречные потоки — нельзя ехать слева от неё (RGC, прил. I, 5, M-2).', en: 'A solid line may not be crossed or driven on, and if it separates directions you may not drive to its left (RGC annex I, 5, M-2).' } },
      { es: '¿Se puede atravesar una línea longitudinal discontinua?',
        prompt: { ru: 'Можно ли пересекать прерывистую продольную линию?', en: 'May you cross a broken longitudinal line?' },
        options: [
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' },
          { es: 'Sí, para maniobras permitidas, pero no circular sobre ella.', ru: 'Да, для разрешённых манёвров, но ехать по ней нельзя.', en: 'Yes, for permitted manoeuvres, but do not drive along it.' },
          { es: 'Solo los vehículos de urgencia.', ru: 'Только спецмашины.', en: 'Only emergency vehicles.' }
        ],
        answer: 1,
        explain: { ru: 'Прерывистую можно пересечь для обгона, поворота, перестроения, уступив тем, кто едет по занимаемой полосе; ехать по ней нельзя без необходимости (RGC, прил. I, 5, M-1).', en: 'A broken line may be crossed to overtake, turn or change lane, giving way to traffic in that lane; do not drive along it unless necessary (RGC annex I, 5, M-1).' } },
      { es: 'En la línea mixta de la imagen, ¿qué vehículo puede atravesarla para adelantar?',
        prompt: { ru: 'Кто на рисунке может пересечь смешанную линию для обгона?', en: 'In the picture, which vehicle may cross the mixed line to overtake?' },
        options: [
          { es: 'El vehículo A.', ru: 'Машина A.', en: 'Vehicle A.' },
          { es: 'El vehículo B.', ru: 'Машина B.', en: 'Vehicle B.' },
          { es: 'Los dos.', ru: 'Обе.', en: 'Both.' }
        ],
        answer: 0,
        explain: { ru: 'У смешанной линии учитывают только линию со своей стороны: у A — прерывистая, у B — сплошная (RGC, прил. I, 5, M-3).', en: 'With a mixed line only the line on your side counts: A has the broken one, B the solid one (RGC annex I, 5, M-3).' },
        img: 'img/dgt/senales-lineas.svg' },
      { es: '¿Quién puede entrar en una zona de cebreado?',
        prompt: { ru: 'Кому можно въезжать в зону штриховки (cebreado)?', en: 'Who may drive into a hatched area (cebreado)?' },
        options: [
          { es: 'Cualquier vehículo para adelantar.', ru: 'Любой машине для обгона.', en: 'Any vehicle, to overtake.' },
          { es: 'Los turismos para estacionar.', ru: 'Легковым — для стоянки.', en: 'Cars, to park.' },
          { es: 'Solo los vehículos obligados a circular por el arcén.', ru: 'Только тем, кто обязан ехать по обочине.', en: 'Only vehicles required to use the hard shoulder.' }
        ],
        answer: 2,
        explain: { ru: 'В зону штриховки въезжать нельзя, кроме тех, кто обязан ехать по обочине (велосипеды, медленные машины) (RGC, ст. 147.2.d).', en: 'Nobody may enter a hatched area except those required to ride on the hard shoulder (cycles, slow vehicles) (RGC art. 147.2.d).' } },
      { es: '¿Qué indica una línea transversal discontinua en una intersección?',
        prompt: { ru: 'Что означает поперечная прерывистая линия на перекрёстке?', en: 'What does a broken transverse line at a junction mean?' },
        options: [
          { es: 'Que hay que detenerse siempre.', ru: 'Нужно всегда останавливаться.', en: 'You must always stop.' },
          { es: 'Dónde detenerse si hay que ceder el paso.', ru: 'Где остановиться, если нужно уступить дорогу.', en: 'Where to stop if you have to give way.' },
          { es: 'Un paso para ciclistas.', ru: 'Велосипедный переезд.', en: 'A cycle crossing.' }
        ],
        answer: 1,
        explain: { ru: 'Поперечная прерывистая — линия «уступи дорогу»: её не пересекают, пока нужно уступать (знак R-1, треугольник на асфальте, правило «помеха справа») (RGC, прил. I, 5, M-4.2).', en: 'A broken transverse line is the give-way line: do not cross it while you must give way (R-1, painted triangle, right-hand rule) (RGC annex I, 5, M-4.2).' } },
      { es: 'Una línea amarilla continua junto al bordillo prohíbe…',
        prompt: { ru: 'Сплошная жёлтая линия у бордюра запрещает…', en: 'A solid yellow line along the kerb prohibits…' },
        options: [
          { es: 'solo estacionar.', ru: 'только стоянку.', en: 'parking only.' },
          { es: 'parar y estacionar.', ru: 'остановку и стоянку.', en: 'stopping and parking.' },
          { es: 'circular por ese carril.', ru: 'движение по этой полосе.', en: 'driving in that lane.' }
        ],
        answer: 1,
        explain: { ru: 'Жёлтая сплошная — нельзя ни останавливаться, ни стоять; жёлтая прерывистая и зигзаг — нельзя стоять (RGC, прил. I, 5, M-7.7–M-7.9).', en: 'Solid yellow — no stopping or parking; broken yellow and zigzag — no parking (RGC annex I, 5, M-7.7–M-7.9).' } },
      { es: '¿Qué indica una cuadrícula de líneas amarillas pintada en un cruce?',
        prompt: { ru: 'Что означает жёлтая сетка, нарисованная на перекрёстке?', en: 'What does a yellow grid painted on a junction mean?' },
        options: [
          { es: 'No entrar si puede quedarse detenido en ella obstaculizando el tráfico.', ru: 'Не въезжать, если можете застрять на ней и помешать движению.', en: 'Do not enter if you may get stuck on it and block traffic.' },
          { es: 'Zona de estacionamiento de pago.', ru: 'Платная парковка.', en: 'Paid parking area.' },
          { es: 'Zona de carga y descarga.', ru: 'Зона погрузки и разгрузки.', en: 'Loading area.' }
        ],
        answer: 0,
        explain: { ru: 'Жёлтая сетка напоминает: не въезжать на перекрёсток, даже на зелёный, если там можно застрять (RGC, прил. I, 5, M-7.10; ст. 59).', en: 'The yellow grid reminds you not to enter the junction, even on green, if you might get stuck (RGC annex I, 5, M-7.10; art. 59).' } },
      { es: 'Una línea de detención pintada en la calzada, sin ninguna otra señal, ¿obliga a detenerse?',
        prompt: { ru: 'Стоп-линия на асфальте без каких-либо других сигналов обязывает остановиться?', en: 'Does a painted stop line on its own, with no other signal, oblige you to stop?' },
        options: [
          { es: 'Sí, siempre.', ru: 'Да, всегда.', en: 'Yes, always.' },
          { es: 'Solo de noche.', ru: 'Только ночью.', en: 'Only at night.' },
          { es: 'No, solo indica dónde detenerse cuando otra señal lo exige.', ru: 'Нет, она лишь показывает, где остановиться, когда этого требует другой сигнал.', en: 'No, it only shows where to stop when another signal requires it.' }
        ],
        answer: 2,
        explain: { ru: 'Стоп-линия обязывает только вместе со знаком STOP, светофором, регулировщиком, пешеходным переходом или переездом (RGC, прил. I, 5, M-4.1).', en: 'A stop line only applies together with a STOP sign, light, officer, pedestrian crossing or level crossing (RGC annex I, 5, M-4.1).' } },
      { es: 'Las líneas discontinuas dobles a ambos lados de un carril indican que es…',
        prompt: { ru: 'Двойные прерывистые линии с обеих сторон полосы означают, что это…', en: 'Double broken lines on both sides of a lane mean it is…' },
        options: [
          { es: 'un carril reservado para autobuses.', ru: 'полоса для автобусов.', en: 'a bus lane.' },
          { es: 'un carril reversible.', ru: 'реверсивная полоса.', en: 'a reversible lane.' },
          { es: 'un carril de aceleración.', ru: 'полоса разгона.', en: 'an acceleration lane.' }
        ],
        answer: 1,
        explain: { ru: 'Двойные прерывистые обозначают реверсивную полосу: направление задают светофоры над ней (RGC, прил. I, 5, M-1.4).', en: 'Double broken lines mark a reversible lane whose direction is set by overhead lights (RGC annex I, 5, M-1.4).' } }
    ]
  }
]);
