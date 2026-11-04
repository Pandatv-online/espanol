// Driving theory (DGT): signs, traffic lights, officers and road markings. RGC, Título IV (arts. 132–173).
// Source checked against the DGT «Manual básico permiso B — Lectura fácil», Tema 8. Signs drawn by us.
ECA.data.addDgt([
  {
    id: 'senales',
    cats: ['A', 'B'],
    title: { ru: 'Знаки и разметка', en: 'Signs and markings' },
    summary: {
      ru: 'Жесты регулировщика, светофоры, формы и цвета знаков, линии и цвет разметки.',
      en: 'Officer signals, traffic lights, sign shapes and colours, lines and coloured markings.'
    },
    hero: {
      es: '<b>Señales</b> de circulación',
      sub: { ru: 'Регулировщик, светофор, знак, разметка — и что главнее', en: 'Officer, lights, signs, markings — and which one wins' }
    },
    tabs: [
      {
        id: 'agentes',
        label: { ru: 'Регулировщик', en: 'Officer' },
        blocks: [
          {
            type: 'text',
            body: {
              ru: ['Сигналы регулировщика (<b>agente</b>) выполняются <b>всегда</b> и главнее светофоров, знаков и разметки.', 'Регулировщик носит одежду и предметы, которые видно за 150 м, и подаёт сигналы рукой, свистком или из машины.'],
              en: ['An officer’s (<b>agente</b>) signals are <b>always</b> obeyed and beat lights, signs and markings.', 'Officers wear clothing and items visible from 150 m and signal with an arm, a whistle or from a vehicle.']
            }
          },
          {
            type: 'rules', heading: { ru: 'Жесты', en: 'Arm signals' },
            items: [
              { color: 'coral', title: { ru: 'Рука вверх', en: 'Arm raised' }, es: 'brazo levantado <b>verticalmente</b>', body: { ru: 'Стоп для всех, кто подъезжает. Кто уже внутри перекрёстка — выезжает.', en: 'Stop for everyone approaching. Those already inside the junction carry on out.' } },
              { color: 'coral', title: { ru: 'Руки в стороны', en: 'Arms out sideways' }, es: 'brazo o brazos extendidos <b>horizontalmente</b>', body: { ru: 'Стоп для тех, кто подъезжает со стороны рук (спереди и сзади). Действует, даже если он опустит руки, пока не даст другой сигнал.', en: 'Stop for those approaching across the arms’ line (from front and back). It stays in force even if the arms drop, until another signal.' } },
              { color: 'amber', title: { ru: 'Красный или жёлтый фонарь', en: 'Red or amber lamp' }, es: 'balanceo de una <b>luz roja o amarilla</b>', body: { ru: 'Остановиться тем, на кого направлен свет.', en: 'Stop if the light is aimed at you.' } },
              { color: 'blue', title: { ru: 'Рука вверх-вниз', en: 'Arm moving up and down' }, es: 'brazo extendido moviéndose <b>de arriba abajo</b>', body: { ru: 'Снизить скорость тем, кто подъезжает с этой стороны.', en: 'Slow down if you approach from that side.' } }
            ]
          },
          {
            type: 'rules', heading: { ru: 'Свисток и машина полиции', en: 'Whistle and police car' },
            items: [
              { color: 'coral', title: { ru: 'Короткие частые свистки', en: 'Short, repeated whistles' }, es: 'toques <b>cortos y repetidos</b>', body: { ru: 'Остановиться.', en: 'Stop.' } },
              { color: 'teal', title: { ru: 'Один длинный свисток', en: 'One long whistle' }, es: 'un toque <b>largo</b>', body: { ru: 'Можно ехать дальше.', en: 'You may move on.' } },
              { color: 'purple', title: { ru: 'Полиция впереди с мигалкой', en: 'Police car ahead with flashing light' }, es: 'luz roja o amarilla intermitente y <b>señal acústica</b>', body: { ru: 'Остановиться справа впереди или позади полицейской машины и оставаться в машине, выполняя указания.', en: 'Stop on the right, ahead of or behind the police car, and stay in your vehicle following instructions.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: ['<b>Руки — шлагбаум.</b> Вытянутые руки перекрывают дорогу тем, кто «упирается» в них.', '<b>Коротко-коротко — стоп, долго — езжай</b>, как азбука Морзе: «стоп-стоп-стоп» и «поехали».'],
              en: ['<b>Arms are a barrier.</b> Outstretched arms close the road to those facing them.', '<b>Short-short means stop, long means go</b>: “stop-stop-stop” versus “gooo”.']
            }
          }
        ]
      },
      {
        id: 'semaforos',
        label: { ru: 'Светофоры', en: 'Lights' },
        blocks: [
          {
            type: 'table', heading: { ru: 'Круглый светофор', en: 'Round traffic light' },
            head: [{ ru: 'Сигнал', en: 'Signal' }, { ru: 'Значение', en: 'Meaning' }],
            rows: [
              [{ ru: 'Красный', en: 'Red' }, { ru: 'Проезд запрещён', en: 'No entry' }],
              [{ ru: 'Жёлтый постоянный', en: 'Steady amber' }, { ru: 'Стоп, если можно безопасно', en: 'Stop unless you can’t safely' }],
              [{ ru: 'Жёлтый мигающий', en: 'Flashing amber' }, { ru: 'Осторожно, правила приоритета', en: 'Caution, priority rules apply' }],
              [{ ru: 'Красный мигающий', en: 'Flashing red' }, { ru: 'Стоп: переезд, мост', en: 'Stop: level crossing, bridge' }],
              [{ ru: 'Зелёный', en: 'Green' }, { ru: 'Проезд разрешён', en: 'Go' }],
              [{ ru: 'Зелёная стрелка', en: 'Green arrow' }, { ru: 'Можно туда, уступая', en: 'Go that way, giving way' }]
            ]
          },
          {
            type: 'table', heading: { ru: 'Светофор над полосой (квадратный)', en: 'Lane-control light (square)' },
            head: [{ ru: 'Сигнал', en: 'Signal' }, { ru: 'Значение', en: 'Meaning' }],
            rows: [
              [{ ru: 'Красный крест', en: 'Red X' }, { ru: 'Полоса закрыта — покинуть', en: 'Lane closed — leave it' }],
              [{ ru: 'Зелёная стрелка вниз', en: 'Green arrow down' }, { ru: 'Полоса открыта', en: 'Lane open' }],
              [{ ru: 'Белая/жёлтая стрелка вбок', en: 'White/amber slanted arrow' }, { ru: 'Перестроиться туда', en: 'Move into that lane' }]
            ]
          },
          {
            type: 'text',
            body: {
              ru: ['Светофор с <b>велосипедом</b> — только для велосипедов и мопедов. Светофор с <b>белой полосой на чёрном круге</b> — для трамваев и автобусов, не для легковых.', 'Если на перекрёстке со светофором стоит знак (например, «Стоп»), а светофор работает — выполняйте светофор. Если светофор выключен или мигает жёлтым — знак.'],
              en: ['A light with a <b>bicycle</b> is for cycles and mopeds only. A light with a <b>white bar on a black disc</b> is for trams and buses, not cars.', 'If a junction has lights and a sign (e.g. Stop) and the lights work — obey the lights. If they are off or flashing amber — the sign.']
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>Мигает — значит «думай сам»</b>: жёлтый мигающий не управляет движением, работают знаки и правило правой руки.',
              en: '<b>Flashing means “think for yourself”</b>: flashing amber doesn’t control traffic; signs and the right-hand rule do.'
            }
          }
        ]
      },
      {
        id: 'verticales',
        label: { ru: 'Знаки', en: 'Signs' },
        blocks: [
          {
            type: 'rules', heading: { ru: 'Форма и цвет говорят сами', en: 'Shape and colour tell you' },
            items: [
              { color: 'coral', title: { ru: 'Треугольник с красной каймой', en: 'Red-rimmed triangle' }, es: 'señales de <b>advertencia de peligro</b> (P)', body: { ru: 'Предупреждают об опасности.', en: 'Warn of danger.' } },
              { color: 'coral', title: { ru: 'Круг с красной каймой', en: 'Red-rimmed circle' }, es: 'señales de <b>prohibición</b> (R-100…R-308)', body: { ru: 'Запрещают.', en: 'Prohibit.' } },
              { color: 'blue', title: { ru: 'Синий круг', en: 'Blue circle' }, es: 'señales de <b>obligación</b> (R-400…)', body: { ru: 'Обязывают.', en: 'Order you to do something.' } },
              { color: 'teal', title: { ru: 'Прямоугольник / квадрат', en: 'Rectangle / square' }, es: 'señales de <b>indicación</b> (S)', body: { ru: 'Информируют и указывают направление.', en: 'Inform and give directions.' } },
              { color: 'purple', title: { ru: 'Перечёркнутый серым/чёрным', en: 'Struck through in grey/black' }, es: 'señales de <b>fin de</b> prohibición (R-500…)', body: { ru: 'Запрет закончился.', en: 'The restriction ends.' } }
            ]
          },
          {
            type: 'signs', heading: { ru: 'Частые знаки', en: 'Common signs' },
            items: [
              { src: 'img/dgt/senal-r101.svg', code: 'R-101', es: 'Entrada prohibida', ru: 'Въезд запрещён всем транспортным средствам.', en: 'No entry for all vehicles.' },
              { src: 'img/dgt/senal-r301.svg', code: 'R-301', es: 'Velocidad máxima', ru: 'Нельзя ехать быстрее указанного числа (км/ч).', en: 'Do not exceed the number shown (km/h).' },
              { src: 'img/dgt/senal-r411.svg', code: 'R-411', es: 'Velocidad mínima', ru: 'Нельзя ехать медленнее указанного числа, если позволяют условия.', en: 'Do not drive slower than the number shown, conditions permitting.' },
              { src: 'img/dgt/senal-r305.svg', code: 'R-305', es: 'Adelantamiento prohibido', ru: 'Запрещено обгонять машины (кроме двухколёсных).', en: 'No overtaking of motor vehicles (two-wheelers excepted).' },
              { src: 'img/dgt/senal-r502.svg', code: 'R-502', es: 'Fin de la prohibición de adelantar', ru: 'Запрет обгона закончился.', en: 'End of the no-overtaking zone.' },
              { src: 'img/dgt/senal-r308.svg', code: 'R-308', es: 'Estacionamiento prohibido', ru: 'Стоянка запрещена; короткая остановка разрешена.', en: 'No parking; a short stop is allowed.' },
              { src: 'img/dgt/senal-r307.svg', code: 'R-307', es: 'Parada y estacionamiento prohibido', ru: 'Запрещены и остановка, и стоянка.', en: 'No stopping and no parking.' },
              { src: 'img/dgt/senal-r400.svg', code: 'R-400a', es: 'Sentido obligatorio', ru: 'Ехать только в направлении стрелки.', en: 'Drive only in the direction of the arrow.' },
              { src: 'img/dgt/senal-p13.svg', code: 'P-13a', es: 'Curva peligrosa hacia la derecha', ru: 'Опасный поворот направо.', en: 'Dangerous bend to the right.' },
              { src: 'img/dgt/senal-p18.svg', code: 'P-18', es: 'Obras', ru: 'Дорожные работы.', en: 'Road works.' },
              { src: 'img/dgt/senal-p20.svg', code: 'P-20', es: 'Peatones', ru: 'Опасное место с пешеходами (часто переход).', en: 'Pedestrians (often a crossing).' }
            ]
          },
          {
            type: 'text',
            body: {
              ru: ['Знак действует на <b>всю ширину</b> дороги; если правило разное для полос, это показывают разметкой.', 'Выполняйте знаки <b>справа</b>. Знак слева выполняют, когда поворачивают налево или едут прямо и справа знака нет — или когда знаки справа и слева разные.'],
              en: ['A sign applies to the <b>whole width</b> of the road; lane-specific rules are shown by markings.', 'Obey the signs on the <b>right</b>. A sign on the left applies when you turn left or go straight and there is no sign on the right — or when the right and left signs differ.']
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>Красный — нельзя, синий — надо, треугольник — внимание, прямоугольник — справка.</b> Синий круг с красной каймой (стоянка) — «синее место, где нельзя».',
              en: '<b>Red — don’t, blue — do, triangle — watch out, rectangle — info.</b> A blue circle with a red rim (parking) is “a blue spot where you can’t”.'
            }
          }
        ]
      },
      {
        id: 'marcas',
        label: { ru: 'Разметка', en: 'Markings' },
        blocks: [
          {
            type: 'rules', heading: { ru: 'Белые линии', en: 'White lines' },
            items: [
              { color: 'coral', title: { ru: 'Сплошная', en: 'Solid line' }, es: 'línea longitudinal <b>continua</b>', body: { ru: 'Нельзя пересекать и ехать по ней.', en: 'Do not cross or drive on it.' } },
              { color: 'teal', title: { ru: 'Прерывистая', en: 'Broken line' }, es: 'línea longitudinal <b>discontinua</b>', body: { ru: 'Разделяет полосы, пересекать можно.', en: 'Separates lanes; you may cross it.' } },
              { color: 'amber', title: { ru: 'Частая прерывистая', en: 'Closely spaced broken line' }, es: 'discontinua con trazos <b>más largos y juntos</b>', body: { ru: 'Предупреждает: скоро сплошная или опасное место.', en: 'Warns that a solid line or a hazard is coming.' } },
              { color: 'blue', title: { ru: 'Двойная: сплошная + прерывистая', en: 'Double: solid + broken' }, es: 'línea <b>continua adosada</b> a discontinua', body: { ru: 'Учитывайте ту, что ближе к вам.', en: 'The line on your side is the one that counts.' } },
              { color: 'purple', title: { ru: 'Поперечная сплошная', en: 'Transverse solid line' }, es: '<b>línea de detención</b>', body: { ru: 'Стоп-линия у знака «Стоп» или светофора.', en: 'Stop line at a Stop sign or traffic light.' } },
              { color: 'purple', title: { ru: 'Поперечная прерывистая', en: 'Transverse broken line' }, es: 'línea de <b>ceda el paso</b>', body: { ru: 'Здесь уступают дорогу; останавливаться не обязательно.', en: 'Give way here; stopping is not required.' } }
            ]
          },
          {
            type: 'figure', src: 'img/dgt/senal-r1.svg',
            alt: { ru: 'Знак «Уступите дорогу»', en: 'Give way sign' },
            caption: { ru: 'Треугольник «Ceda el paso» бывает и нарисован на асфальте.', en: 'The give-way triangle can also be painted on the road.' }
          },
          {
            type: 'table', heading: { ru: 'Цветная разметка', en: 'Coloured markings' },
            head: [{ ru: 'Цвет', en: 'Colour' }, { ru: 'Значение', en: 'Meaning' }],
            rows: [
              [{ ru: 'Жёлтая сплошная у края', en: 'Yellow solid at the kerb' }, { ru: 'Нельзя останавливаться и стоять', en: 'No stopping or parking' }],
              [{ ru: 'Жёлтая зигзаг', en: 'Yellow zigzag' }, { ru: 'Нельзя стоять (остановка — да)', en: 'No parking (stopping OK)' }],
              [{ ru: 'Жёлтая прерывистая у края', en: 'Yellow broken at the kerb' }, { ru: 'Нельзя стоять', en: 'No parking' }],
              [{ ru: 'Синяя', en: 'Blue' }, { ru: 'Стоянка платная/ограничена', en: 'Paid / limited parking' }],
              [{ ru: 'Жёлтая решётка', en: 'Yellow criss-cross grid' }, { ru: 'Не вставать: выезд/перекрёсток', en: 'Don’t stop on it: box junction' }],
              [{ ru: 'Оранжевая/жёлтая временная', en: 'Orange/yellow temporary' }, { ru: 'Работы: главнее белой', en: 'Works: beats the white lines' }]
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: ['<b>Сплошная — стена, прерывистая — дверь.</b>', 'Двойная линия: <b>смотрите на «свою» сторону</b> — если ближе к вам прерывистая, пересекать можно.', '<b>Жёлтая у бордюра — «здесь не стоят»</b>, синяя — «стоят за деньги».'],
              en: ['<b>Solid is a wall, broken is a door.</b>', 'Double line: <b>look at your own side</b> — if the broken one is nearer, you may cross.', '<b>Yellow at the kerb — no waiting</b>, blue — paid waiting.']
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
              ['el agente de tráfico', { ru: 'регулировщик, полицейский', en: 'traffic officer' }],
              ['el silbato', { ru: 'свисток', en: 'whistle' }],
              ['el semáforo', { ru: 'светофор', en: 'traffic light' }],
              ['la luz intermitente', { ru: 'мигающий сигнал', en: 'flashing light' }],
              ['la flecha', { ru: 'стрелка', en: 'arrow' }],
              ['el aspa', { ru: 'крест (X)', en: 'X, cross' }],
              ['el carril', { ru: 'полоса', en: 'lane' }],
              ['la señal vertical', { ru: 'дорожный знак', en: 'road sign' }],
              ['la marca vial', { ru: 'разметка', en: 'road marking' }],
              ['la línea continua', { ru: 'сплошная линия', en: 'solid line' }],
              ['la línea discontinua', { ru: 'прерывистая линия', en: 'broken line' }],
              ['la línea de detención', { ru: 'стоп-линия', en: 'stop line' }],
              ['el balizamiento', { ru: 'ограждение (конусы, огни)', en: 'barriers, cones, beacons' }],
              ['el panel de mensaje variable', { ru: 'электронное табло', en: 'variable message sign' }],
              ['adelantar', { ru: 'обгонять', en: 'to overtake' }],
              ['la parada', { ru: 'остановка (короткая)', en: 'stopping' }],
              ['el estacionamiento', { ru: 'стоянка, парковка', en: 'parking' }],
              ['la prohibición', { ru: 'запрет', en: 'prohibition' }],
              ['la obligación', { ru: 'обязанность', en: 'obligation' }],
              ['las obras', { ru: 'дорожные работы', en: 'road works' }]
            ]
          }
        ]
      }
    ],
    questions: [
      {
        id: 'se-01',
        es: 'Un agente de tráfico levanta el brazo verticalmente. ¿Qué indica?',
        tr: { ru: 'Регулировщик поднял руку вертикально вверх. Что это значит?', en: 'An officer raises an arm vertically. What does it mean?' },
        options: [
          { es: 'Detención para todos los que se aproximan, salvo los que ya están dentro de la intersección.', ru: 'Стоп для всех подъезжающих, кроме уже въехавших на перекрёсток.', en: 'Stop for everyone approaching, except those already inside the junction.' },
          { es: 'Que deben detenerse solo los vehículos que circulan por la derecha.', ru: 'Остановиться должны только те, кто справа.', en: 'Only vehicles on the right must stop.' },
          { es: 'Que pueden continuar todos los vehículos con precaución.', ru: 'Все могут осторожно продолжать движение.', en: 'Everyone may carry on with care.' }
        ],
        answer: 0,
        explain: { ru: 'Рука вверх — «внимание, стоп» для всех, кто подъезжает. Те, кто уже на перекрёстке, должны его освободить.', en: 'An arm raised means “attention, stop” for everyone approaching. Those already in the junction must clear it.' },
        hint: { ru: 'Рука вверх — как поднятый шлагбаум для всех сразу.', en: 'Arm up — a barrier for everyone at once.' },
        ref: 'RGC, art. 143'
      },
      {
        id: 'se-02',
        es: 'El agente tiene los brazos extendidos horizontalmente y usted se acerca de frente a él. ¿Qué debe hacer?',
        tr: { ru: 'Регулировщик стоит с руками в стороны, вы подъезжаете к нему лицом. Что делать?', en: 'The officer has both arms out sideways and you approach facing him. What should you do?' },
        options: [
          { es: 'Detenerse.', ru: 'Остановиться.', en: 'Stop.' },
          { es: 'Continuar, porque el agente le da paso.', ru: 'Ехать: он вас пропускает.', en: 'Carry on, he is letting you through.' },
          { es: 'Girar obligatoriamente a la derecha.', ru: 'Обязательно повернуть направо.', en: 'You must turn right.' }
        ],
        answer: 0,
        explain: { ru: 'Вытянутые в стороны руки — стоп для тех, кто подъезжает спереди и сзади (поперёк линии рук).', en: 'Arms outstretched mean stop for those approaching from the front and the back (across the line of the arms).' },
        hint: { ru: 'Руки — шлагбаум: кто в него «упирается», тот стоит.', en: 'Arms are a barrier: whoever faces it stops.' },
        ref: 'RGC, art. 143'
      },
      {
        id: 'se-03',
        es: 'Un agente con los brazos extendidos los baja sin hacer otra señal. ¿Puede usted continuar?',
        tr: { ru: 'Регулировщик опустил вытянутые руки, но другого сигнала не подал. Можно ехать?', en: 'An officer with outstretched arms lowers them without giving another signal. May you go?' },
        options: [
          { es: 'No, la orden de detención sigue vigente hasta que dé otra indicación.', ru: 'Нет: стоп действует, пока он не подаст другой сигнал.', en: 'No, the stop order stands until he gives another signal.' },
          { es: 'Sí, al bajar los brazos se permite el paso.', ru: 'Да: опущенные руки разрешают движение.', en: 'Yes, lowering the arms lets you go.' },
          { es: 'Sí, si no vienen otros vehículos.', ru: 'Да, если никого нет.', en: 'Yes, if no other vehicles are coming.' }
        ],
        answer: 0,
        explain: { ru: 'Сигнал «стоп» руками действует, пока регулировщик не подаст другой, даже если он опустил руки.', en: 'The stop signal stays in force until the officer gives another one, even if he lowers his arms.' },
        hint: { ru: 'Регулировщик отменяет сигнал только новым сигналом.', en: 'An officer cancels a signal only with a new signal.' },
        ref: 'RGC, art. 143'
      },
      {
        id: 'se-04',
        es: 'Un agente mueve el brazo extendido de arriba abajo. ¿Qué indica a los conductores que se acercan por ese lado?',
        tr: { ru: 'Регулировщик двигает вытянутой рукой вверх-вниз. Что он показывает тем, кто подъезжает с этой стороны?', en: 'An officer moves an outstretched arm up and down. What does this tell drivers approaching from that side?' },
        options: [
          { es: 'Que reduzcan la velocidad.', ru: 'Снизить скорость.', en: 'To slow down.' },
          { es: 'Que aceleren.', ru: 'Ускориться.', en: 'To speed up.' },
          { es: 'Que se detengan en el arcén.', ru: 'Остановиться на обочине.', en: 'To stop on the shoulder.' }
        ],
        answer: 0,
        explain: { ru: 'Движение рукой вверх-вниз — «сбавьте скорость».', en: 'An arm moving up and down means “slow down”.' },
        hint: { ru: 'Рука «придавливает» воздух — притормози.', en: 'The arm “presses down” — ease off.' },
        ref: 'RGC, art. 143'
      },
      {
        id: 'se-05',
        es: 'Un agente toca el silbato con varios toques cortos y repetidos. ¿Qué significa?',
        tr: { ru: 'Регулировщик подаёт несколько коротких частых свистков. Что это значит?', en: 'An officer gives several short, repeated blasts on the whistle. What does it mean?' },
        options: [
          { es: 'Que debe detenerse.', ru: 'Нужно остановиться.', en: 'You must stop.' },
          { es: 'Que puede reanudar la marcha.', ru: 'Можно продолжать движение.', en: 'You may move off again.' },
          { es: 'Que debe ceder el paso a los peatones.', ru: 'Нужно пропустить пешеходов.', en: 'You must give way to pedestrians.' }
        ],
        answer: 0,
        explain: { ru: 'Короткие частые свистки — остановиться. Один длинный — продолжить движение.', en: 'Short repeated blasts mean stop. One long blast means move on.' },
        hint: { ru: 'Коротко-коротко — «стоп-стоп-стоп», длинно — «поехали».', en: 'Short-short — “stop-stop-stop”, long — “gooo”.' },
        ref: 'RGC, art. 143'
      },
      {
        id: 'se-06',
        es: 'Un vehículo de policía se sitúa delante de usted con una luz roja intermitente y señal acústica. ¿Qué debe hacer?',
        tr: { ru: 'Перед вами полицейская машина с мигающим красным огнём и звуковым сигналом. Что делать?', en: 'A police car pulls in front of you with a flashing red light and siren. What should you do?' },
        options: [
          { es: 'Detenerse a la derecha y seguir sus instrucciones sin bajar del vehículo, salvo que se lo pidan.', ru: 'Остановиться справа и выполнять указания, не выходя из машины без просьбы.', en: 'Stop on the right and follow instructions without getting out unless asked.' },
          { es: 'Adelantarlo con precaución.', ru: 'Осторожно его обогнать.', en: 'Overtake it carefully.' },
          { es: 'Salir del vehículo y acercarse al agente.', ru: 'Выйти и подойти к полицейскому.', en: 'Get out and walk up to the officer.' }
        ],
        answer: 0,
        explain: { ru: 'Сигнал из полицейской машины обязывает остановиться справа и выполнять указания агента, оставаясь в машине.', en: 'A signal from a police car requires you to stop on the right and follow the officer’s instructions, staying in your vehicle.' },
        hint: { ru: 'Полиция впереди с мигалкой — «прижмись и жди».', en: 'Police ahead with lights — pull in and wait.' },
        ref: 'RGC, art. 143'
      },
      {
        id: 'se-07',
        es: 'Un semáforo circular muestra luz amarilla fija. ¿Qué debe hacer?',
        tr: { ru: 'На круглом светофоре горит постоянный жёлтый. Что делать?', en: 'A round traffic light shows a steady amber. What should you do?' },
        options: [
          { es: 'Detenerse como en rojo, salvo que no pueda hacerlo en condiciones de seguridad.', ru: 'Остановиться, как на красный, если только нельзя остановиться безопасно.', en: 'Stop as for red, unless you cannot do so safely.' },
          { es: 'Acelerar para pasar antes de que se ponga en rojo.', ru: 'Ускориться, чтобы проскочить до красного.', en: 'Speed up to get through before red.' },
          { es: 'Pasar con precaución, cediendo el paso a la derecha.', ru: 'Проехать осторожно, уступая справа.', en: 'Go carefully, giving way to the right.' }
        ],
        answer: 0,
        explain: { ru: 'Постоянный жёлтый запрещает проезд так же, как красный. Исключение — если вы уже так близко, что безопасно остановиться нельзя.', en: 'A steady amber forbids passing like red. The exception is when you are so close you cannot stop safely.' },
        hint: { ru: 'Жёлтый — это «красный для тех, кто успевает затормозить».', en: 'Amber is “red for anyone who can still brake”.' },
        ref: 'RGC, art. 146'
      },
      {
        id: 'se-08',
        es: 'En un semáforo hay una luz amarilla intermitente. ¿Qué significa?',
        tr: { ru: 'Светофор мигает жёлтым. Что это значит?', en: 'A traffic light shows flashing amber. What does it mean?' },
        options: [
          { es: 'Que debe extremar la precaución y, si es preciso, ceder el paso.', ru: 'Максимальная осторожность и, если нужно, уступить дорогу.', en: 'Take extra care and give way if necessary.' },
          { es: 'Que tiene prioridad sobre los demás.', ru: 'У вас приоритет перед остальными.', en: 'You have priority over others.' },
          { es: 'Que está prohibido el paso.', ru: 'Проезд запрещён.', en: 'Passing is prohibited.' }
        ],
        answer: 0,
        explain: { ru: 'Мигающий жёлтый не регулирует движение: будьте особенно внимательны и уступайте по знакам или правилу правой руки, пропускайте пешеходов.', en: 'Flashing amber does not control traffic: take extra care and give way by the signs or right-hand rule; let pedestrians cross.' },
        hint: { ru: 'Мигает — значит «думай сам».', en: 'Flashing means “think for yourself”.' },
        ref: 'RGC, art. 146'
      },
      {
        id: 'se-09',
        es: 'Un semáforo de carril muestra una luz roja en forma de aspa sobre su carril. ¿Qué indica?',
        tr: { ru: 'Над вашей полосой горит красный крест. Что это значит?', en: 'A lane light shows a red X over your lane. What does it mean?' },
        options: [
          { es: 'Que no puede circular por ese carril y debe abandonarlo.', ru: 'По этой полосе ехать нельзя, нужно с неё уйти.', en: 'You may not use that lane and must leave it.' },
          { es: 'Que debe detenerse en ese carril.', ru: 'Нужно остановиться на этой полосе.', en: 'You must stop in that lane.' },
          { es: 'Que ese carril es solo para adelantar.', ru: 'Эта полоса только для обгона.', en: 'That lane is for overtaking only.' }
        ],
        answer: 0,
        explain: { ru: 'Красный крест над полосой — полоса закрыта, её нужно как можно скорее покинуть.', en: 'A red X over a lane means it is closed; leave it as soon as possible.' },
        hint: { ru: 'Крест — «вычеркнутая» полоса.', en: 'An X — the lane is “crossed out”.' },
        ref: 'RGC, art. 146'
      },
      {
        id: 'se-10',
        es: 'Sobre su carril hay una flecha verde que apunta hacia abajo. ¿Qué indica?',
        tr: { ru: 'Над вашей полосой зелёная стрелка вниз. Что это значит?', en: 'Over your lane there is a green arrow pointing down. What does it mean?' },
        options: [
          { es: 'Que está permitido circular por ese carril.', ru: 'Ехать по этой полосе можно.', en: 'You may use that lane.' },
          { es: 'Que debe cambiarse de carril.', ru: 'Нужно перестроиться.', en: 'You must change lanes.' },
          { es: 'Que debe reducir la velocidad a 50 km/h.', ru: 'Нужно сбросить до 50 км/ч.', en: 'You must slow to 50 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'Зелёная стрелка вниз — полоса открыта.', en: 'A green arrow down means the lane is open.' },
        hint: { ru: 'Стрелка «показывает» на вашу полосу: она ваша.', en: 'The arrow points at your lane: it’s yours.' },
        ref: 'RGC, art. 146'
      },
      {
        id: 'se-11',
        es: 'Un semáforo con una franja blanca horizontal sobre fondo negro, ¿a quién va dirigido?',
        tr: { ru: 'Светофор с белой горизонтальной полосой на чёрном фоне — для кого он?', en: 'A traffic light with a horizontal white bar on a black background — who is it for?' },
        options: [
          { es: 'A los vehículos de transporte público como tranvías o autobuses.', ru: 'Для общественного транспорта: трамваев, автобусов.', en: 'Public transport such as trams or buses.' },
          { es: 'A todos los vehículos.', ru: 'Для всех.', en: 'All vehicles.' },
          { es: 'A los peatones.', ru: 'Для пешеходов.', en: 'Pedestrians.' }
        ],
        answer: 0,
        explain: { ru: 'Светофоры с белыми полосами на чёрном круге — для трамваев и автобусов; легковые их не выполняют.', en: 'Lights with white bars on a black disc are for trams and buses; cars ignore them.' },
        hint: { ru: 'Чёрно-белый — «служебный», не для вас.', en: 'Black and white — “staff only”, not for you.' },
        ref: 'RGC, art. 146'
      },
      {
        id: 'se-12',
        es: 'En una intersección hay un semáforo en verde y una señal de ceda el paso. ¿Qué debe obedecer?',
        tr: { ru: 'На перекрёстке зелёный светофор и знак «Уступите дорогу». Что выполнять?', en: 'At a junction there is a green light and a give-way sign. Which do you obey?' },
        options: [
          { es: 'El semáforo.', ru: 'Светофор.', en: 'The traffic light.' },
          { es: 'La señal de ceda el paso.', ru: 'Знак «Уступите дорогу».', en: 'The give-way sign.' },
          { es: 'Los dos a la vez.', ru: 'Оба одновременно.', en: 'Both at once.' }
        ],
        answer: 0,
        explain: { ru: 'Светофор стоит выше знаков в порядке приоритета. Знак начинает действовать, если светофор выключен или мигает жёлтым.', en: 'Lights rank above signs. The sign applies when the lights are off or flashing amber.' },
        hint: { ru: 'Свет главнее металла.', en: 'Light beats metal.' },
        ref: 'RGC, art. 133'
      },
      {
        id: 'se-13',
        es: 'En la misma intersección hay una señal de stop y una de ceda el paso que parecen contradecirse. ¿Cuál obedece?',
        tr: { ru: 'На одном перекрёстке знаки «Стоп» и «Уступите дорогу» противоречат друг другу. Какой выполнять?', en: 'At the same junction a Stop sign and a give-way sign seem to contradict each other. Which do you obey?' },
        options: [
          { es: 'La de stop, por ser la más restrictiva.', ru: '«Стоп»: он строже.', en: 'Stop, as the stricter one.' },
          { es: 'La de ceda el paso.', ru: '«Уступите дорогу».', en: 'Give way.' },
          { es: 'La que esté a la izquierda.', ru: 'Тот, что слева.', en: 'Whichever is on the left.' }
        ],
        answer: 0,
        explain: { ru: 'Между сигналами одного вида выполняют более строгий: «Стоп» строже «Уступите дорогу».', en: 'Between signals of the same kind, obey the stricter: Stop is stricter than give way.' },
        hint: { ru: 'Сомневаешься — выбирай строже.', en: 'In doubt — choose the stricter.' },
        ref: 'RGC, art. 133'
      },
      {
        id: 'se-14',
        es: 'Hay conos y luces amarillas en la calzada que contradicen la señal vertical. ¿Qué debe obedecer?',
        tr: { ru: 'Конусы и жёлтые огни на дороге противоречат знаку. Что выполнять?', en: 'Cones and amber lights on the road contradict a road sign. Which do you obey?' },
        options: [
          { es: 'El balizamiento (conos y luces).', ru: 'Ограждение (конусы и огни).', en: 'The temporary barriers (cones and lights).' },
          { es: 'La señal vertical.', ru: 'Знак.', en: 'The road sign.' },
          { es: 'La que sea menos restrictiva.', ru: 'Менее строгое.', en: 'Whichever is less strict.' }
        ],
        answer: 0,
        explain: { ru: 'Временная сигнализация и ограждение (2-е место) главнее светофоров, знаков и разметки.', en: 'Temporary signs and barriers (2nd place) beat lights, signs and markings.' },
        hint: { ru: 'Временное главнее постоянного — оно поставлено «сегодня».', en: 'Temporary beats permanent — it was put there “today”.' },
        ref: 'RGC, art. 133'
      },
      {
        id: 'se-15', img: 'img/dgt/senal-r101.svg', alt: { ru: 'Знак R-101', en: 'Sign R-101' },
        es: '¿Qué indica esta señal?',
        tr: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Entrada prohibida a todos los vehículos.', ru: 'Въезд запрещён всем.', en: 'No entry for all vehicles.' },
          { es: 'Circulación prohibida solo a camiones.', ru: 'Движение запрещено только грузовикам.', en: 'No traffic for lorries only.' },
          { es: 'Calle sin salida.', ru: 'Тупик.', en: 'Dead end.' }
        ],
        answer: 0,
        explain: { ru: 'R-101: въезд запрещён всем транспортным средствам. С другой стороны движение может быть разрешено.', en: 'R-101: no entry for any vehicle. Traffic may be allowed from the other side.' },
        hint: { ru: '«Кирпич» — красная стена с белой щелью.', en: 'A red wall with a white slot — nobody gets in.' },
        ref: 'RGC, art. 152'
      },
      {
        id: 'se-16', img: 'img/dgt/senal-r301.svg', alt: { ru: 'Знак R-301', en: 'Sign R-301' },
        es: '¿Qué indica esta señal?',
        tr: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Que no se puede superar los 50 km/h.', ru: 'Нельзя ехать быстрее 50 км/ч.', en: 'Do not exceed 50 km/h.' },
          { es: 'Que hay que circular a 50 km/h como mínimo.', ru: 'Нужно ехать не медленнее 50 км/ч.', en: 'You must drive at least 50 km/h.' },
          { es: 'Velocidad recomendada de 50 km/h.', ru: 'Рекомендуемая скорость 50 км/ч.', en: 'Recommended speed 50 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'Красный круг с числом — максимальная скорость. Минимальная — белое число на синем круге, рекомендуемая — на синем прямоугольнике.', en: 'A red circle with a number is a maximum. The minimum is a white number on a blue circle; recommended — on a blue rectangle.' },
        hint: { ru: 'Красный — «не больше», синий — «не меньше».', en: 'Red — “no more than”, blue — “no less than”.' },
        ref: 'RGC, art. 154'
      },
      {
        id: 'se-17', img: 'img/dgt/senal-r411.svg', alt: { ru: 'Знак R-411', en: 'Sign R-411' },
        es: '¿Qué indica esta señal?',
        tr: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Velocidad mínima de 60 km/h, si las condiciones lo permiten.', ru: 'Минимальная скорость 60 км/ч, если позволяют условия.', en: 'Minimum speed 60 km/h, conditions permitting.' },
          { es: 'Velocidad máxima de 60 km/h.', ru: 'Максимальная скорость 60 км/ч.', en: 'Maximum speed 60 km/h.' },
          { es: 'Fin de la limitación de 60 km/h.', ru: 'Конец ограничения 60 км/ч.', en: 'End of the 60 km/h limit.' }
        ],
        answer: 0,
        explain: { ru: 'Синий круг — обязывающий знак: ехать не медленнее указанного, если позволяют дорога, погода и движение.', en: 'A blue circle is mandatory: do not go slower than shown if road, weather and traffic allow.' },
        hint: { ru: 'Синий — «надо»: надо ехать хотя бы 60.', en: 'Blue — “must”: you must do at least 60.' },
        ref: 'RGC, art. 155'
      },
      {
        id: 'se-18', img: 'img/dgt/senal-r305.svg', alt: { ru: 'Знак R-305', en: 'Sign R-305' },
        es: 'Con esta señal, ¿puede adelantar a una bicicleta?',
        tr: { ru: 'Можно ли при этом знаке обогнать велосипед?', en: 'With this sign, may you overtake a bicycle?' },
        options: [
          { es: 'Sí, se puede adelantar a vehículos de dos ruedas si hay visibilidad y espacio.', ru: 'Да: двухколёсные можно обгонять, если видно и есть место.', en: 'Yes, two-wheelers may be overtaken if there is visibility and room.' },
          { es: 'No, está prohibido adelantar a cualquier vehículo.', ru: 'Нет: обгонять запрещено кого угодно.', en: 'No, overtaking any vehicle is prohibited.' },
          { es: 'Solo si la bicicleta circula por el arcén.', ru: 'Только если велосипед едет по обочине.', en: 'Only if the bicycle is on the shoulder.' }
        ],
        answer: 0,
        explain: { ru: 'R-305 запрещает обгонять машины, но не двухколёсные транспортные средства (велосипеды, мопеды, мотоциклы), если это безопасно.', en: 'R-305 forbids overtaking motor vehicles, but not two-wheelers (bicycles, mopeds, motorbikes), when safe.' },
        hint: { ru: 'На знаке нарисованы машины, а не велосипеды.', en: 'The sign shows cars, not bicycles.' },
        ref: 'RGC, art. 154'
      },
      {
        id: 'se-19', img: 'img/dgt/senal-r502.svg', alt: { ru: 'Знак R-502', en: 'Sign R-502' },
        es: '¿Qué indica esta señal?',
        tr: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Fin de la prohibición de adelantar.', ru: 'Конец запрета обгона.', en: 'End of the no-overtaking zone.' },
          { es: 'Prohibido adelantar.', ru: 'Обгон запрещён.', en: 'No overtaking.' },
          { es: 'Prohibido el paso a automóviles.', ru: 'Въезд автомобилям запрещён.', en: 'No entry for cars.' }
        ],
        answer: 0,
        explain: { ru: 'Белый круг с серым рисунком и чёрными косыми полосами — конец запрета.', en: 'A white disc with grey pictogram and black diagonal stripes ends the restriction.' },
        hint: { ru: 'Перечёркнуто и серое — запрет «выцвел» и закончился.', en: 'Struck out and grey — the ban has “faded” and ended.' },
        ref: 'RGC, art. 156'
      },
      {
        id: 'se-20', img: 'img/dgt/senal-r308.svg', alt: { ru: 'Знак R-308', en: 'Sign R-308' },
        es: 'Con esta señal, ¿puede detenerse un momento para que baje un pasajero?',
        tr: { ru: 'Можно ли при этом знаке ненадолго остановиться, чтобы высадить пассажира?', en: 'With this sign, may you stop briefly to let a passenger out?' },
        options: [
          { es: 'Sí, porque prohíbe el estacionamiento, pero no la parada.', ru: 'Да: запрещена стоянка, но не остановка.', en: 'Yes, it bans parking but not stopping.' },
          { es: 'No, prohíbe la parada y el estacionamiento.', ru: 'Нет: запрещены и остановка, и стоянка.', en: 'No, it bans stopping and parking.' },
          { es: 'Solo si el conductor no se baja y dura más de dos minutos.', ru: 'Только если водитель не выходит и дольше двух минут.', en: 'Only if the driver stays inside for over two minutes.' }
        ],
        answer: 0,
        explain: { ru: 'Одна косая черта (R-308) — стоянка запрещена. Остановка (до 2 минут, без ухода водителя) разрешена.', en: 'One slash (R-308) — no parking. Stopping (up to 2 minutes, driver not leaving) is allowed.' },
        hint: { ru: 'Одна черта — один запрет (стоянка), крест — два (остановка и стоянка).', en: 'One slash — one ban (parking), a cross — two (stopping and parking).' },
        ref: 'RGC, art. 154'
      },
      {
        id: 'se-21', img: 'img/dgt/senal-r307.svg', alt: { ru: 'Знак R-307', en: 'Sign R-307' },
        es: '¿Qué prohíbe esta señal?',
        tr: { ru: 'Что запрещает этот знак?', en: 'What does this sign prohibit?' },
        options: [
          { es: 'La parada y el estacionamiento.', ru: 'Остановку и стоянку.', en: 'Stopping and parking.' },
          { es: 'Solo el estacionamiento.', ru: 'Только стоянку.', en: 'Parking only.' },
          { es: 'La circulación de vehículos.', ru: 'Движение транспорта.', en: 'All traffic.' }
        ],
        answer: 0,
        explain: { ru: 'Красный крест на синем фоне (R-307) — нельзя ни останавливаться, ни стоять.', en: 'A red X on blue (R-307) — no stopping and no parking.' },
        hint: { ru: 'Крест — два запрета сразу.', en: 'A cross — two bans at once.' },
        ref: 'RGC, art. 154'
      },
      {
        id: 'se-22', img: 'img/dgt/senal-r400.svg', alt: { ru: 'Знак R-400a', en: 'Sign R-400a' },
        es: '¿Qué tipo de señal es esta?',
        tr: { ru: 'Что это за знак?', en: 'What kind of sign is this?' },
        options: [
          { es: 'De obligación: hay que seguir el sentido de la flecha.', ru: 'Предписывающий: ехать по стрелке.', en: 'Mandatory: follow the arrow.' },
          { es: 'De indicación: recomienda girar a la derecha.', ru: 'Информационный: советует повернуть направо.', en: 'Informative: recommends turning right.' },
          { es: 'De peligro: curva a la derecha.', ru: 'Предупреждающий: поворот направо.', en: 'Warning: bend to the right.' }
        ],
        answer: 0,
        explain: { ru: 'Синий круг — знак обязанности. Стрелка — единственное разрешённое направление.', en: 'A blue circle is a mandatory sign. The arrow is the only permitted direction.' },
        hint: { ru: 'Синий круг — «надо».', en: 'Blue circle — “must”.' },
        ref: 'RGC, art. 155'
      },
      {
        id: 'se-23', img: 'img/dgt/senal-p13.svg', alt: { ru: 'Знак P-13a', en: 'Sign P-13a' },
        es: '¿Qué indica esta señal?',
        tr: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Curva peligrosa hacia la derecha.', ru: 'Опасный поворот направо.', en: 'Dangerous bend to the right.' },
          { es: 'Obligación de girar a la derecha.', ru: 'Обязательно повернуть направо.', en: 'You must turn right.' },
          { es: 'Prohibido girar a la derecha.', ru: 'Поворот направо запрещён.', en: 'No right turn.' }
        ],
        answer: 0,
        explain: { ru: 'Треугольник с красной каймой — предупреждение об опасности, здесь опасный поворот направо.', en: 'A red-rimmed triangle warns of danger — here a dangerous bend to the right.' },
        hint: { ru: 'Треугольник — «внимание», не приказ.', en: 'Triangle — “watch out”, not an order.' },
        ref: 'RGC, art. 149'
      },
      {
        id: 'se-24', img: 'img/dgt/senal-p20.svg', alt: { ru: 'Знак P-20', en: 'Sign P-20' },
        es: '¿Qué indica esta señal?',
        tr: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Peligro por la proximidad de un lugar frecuentado por peatones.', ru: 'Опасность: впереди место, где часто ходят люди.', en: 'Danger: a place often used by pedestrians ahead.' },
          { es: 'Calle peatonal: prohibido el paso de vehículos.', ru: 'Пешеходная улица: въезд запрещён.', en: 'Pedestrian street: no vehicles.' },
          { es: 'Paso de peatones con semáforo.', ru: 'Переход со светофором.', en: 'Crossing with traffic lights.' }
        ],
        answer: 0,
        explain: { ru: 'P-20 предупреждает о месте, где часто бывают пешеходы (например, переход). Снизьте скорость и будьте готовы остановиться.', en: 'P-20 warns of a place pedestrians use often (e.g. a crossing). Slow down and be ready to stop.' },
        hint: { ru: 'Треугольник с человеком — «впереди люди».', en: 'Triangle with a person — “people ahead”.' },
        ref: 'RGC, art. 149'
      },
      {
        id: 'se-25',
        es: 'Las señales de forma triangular con borde rojo, ¿qué tipo de señales son?',
        tr: { ru: 'Треугольные знаки с красной каймой — это какие знаки?', en: 'Triangular signs with a red border — what kind of signs are they?' },
        options: [
          { es: 'De advertencia de peligro.', ru: 'Предупреждающие об опасности.', en: 'Danger warning signs.' },
          { es: 'De prohibición.', ru: 'Запрещающие.', en: 'Prohibition signs.' },
          { es: 'De indicación.', ru: 'Информационные.', en: 'Information signs.' }
        ],
        answer: 0,
        explain: { ru: 'Треугольник — предупреждение (P), красный круг — запрет, синий круг — обязанность, прямоугольник — информация. Исключение — перевёрнутый треугольник «Уступите дорогу».', en: 'Triangle — warning (P), red circle — prohibition, blue circle — obligation, rectangle — information. Exception: the inverted give-way triangle.' },
        hint: { ru: 'Треугольник — «внимание», красный круг — «нельзя», синий — «надо».', en: 'Triangle — “watch out”, red circle — “don’t”, blue — “do”.' },
        ref: 'RGC, art. 148'
      },
      {
        id: 'se-26',
        es: 'Hay una señal vertical a la derecha y otra distinta a la izquierda. Usted va a girar a la izquierda. ¿Cuál debe obedecer?',
        tr: { ru: 'Справа один знак, слева другой. Вы поворачиваете налево. Какой выполнять?', en: 'There is one sign on the right and a different one on the left. You are turning left. Which do you obey?' },
        options: [
          { es: 'La de la izquierda.', ru: 'Левый.', en: 'The one on the left.' },
          { es: 'La de la derecha.', ru: 'Правый.', en: 'The one on the right.' },
          { es: 'Ninguna de las dos.', ru: 'Ни один.', en: 'Neither.' }
        ],
        answer: 0,
        explain: { ru: 'Обычно выполняют знаки справа. Но если знаки справа и слева разные, а вы едете налево или прямо, — выполняйте левый.', en: 'Normally the right-hand signs apply. But if right and left signs differ and you go left or straight, obey the left one.' },
        hint: { ru: 'Знак «на твоей стороне манёвра» — для тебя.', en: 'The sign on the side of your manoeuvre is yours.' },
        ref: 'DGT, Manual básico, tema 8'
      },
      {
        id: 'se-27',
        es: '¿Se puede atravesar una línea longitudinal continua?',
        tr: { ru: 'Можно ли пересекать сплошную продольную линию?', en: 'May you cross a solid longitudinal line?' },
        options: [
          { es: 'No, ni circular sobre ella.', ru: 'Нет, и ехать по ней тоже нельзя.', en: 'No, nor drive on it.' },
          { es: 'Sí, para adelantar si no viene nadie.', ru: 'Да, для обгона, если никого нет.', en: 'Yes, to overtake if nobody is coming.' },
          { es: 'Sí, pero solo de noche.', ru: 'Да, но только ночью.', en: 'Yes, but only at night.' }
        ],
        answer: 0,
        explain: { ru: 'Сплошную линию нельзя пересекать и по ней нельзя ехать (кроме особых случаев, например объезда препятствия по правилам).', en: 'A solid line may not be crossed or driven on (except special cases such as passing an obstacle as the rules allow).' },
        hint: { ru: 'Сплошная — стена.', en: 'Solid is a wall.' },
        ref: 'RGC, art. 167'
      },
      {
        id: 'se-28',
        es: 'Hay una línea continua junto a una discontinua y la discontinua está en su lado. ¿Puede atravesarlas para adelantar?',
        tr: { ru: 'Двойная линия: сплошная и прерывистая, причём прерывистая с вашей стороны. Можно ли пересечь их для обгона?', en: 'A solid line runs alongside a broken one, and the broken one is on your side. May you cross them to overtake?' },
        options: [
          { es: 'Sí, si se cumplen las demás condiciones del adelantamiento.', ru: 'Да, если соблюдены остальные условия обгона.', en: 'Yes, if the other overtaking conditions are met.' },
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' },
          { es: 'Solo para girar a la izquierda.', ru: 'Только для поворота налево.', en: 'Only to turn left.' }
        ],
        answer: 0,
        explain: { ru: 'У двойной линии учитывают ту, что ближе к водителю. Ближе прерывистая — пересекать можно (и вернуться обратно тоже).', en: 'With a double line, the one nearer the driver counts. If the broken one is nearer, you may cross (and return).' },
        hint: { ru: 'Смотри на «свою» сторону.', en: 'Look at your own side.' },
        ref: 'RGC, art. 167'
      },
      {
        id: 'se-29',
        es: 'Una línea transversal discontinua pintada en la calzada indica…',
        tr: { ru: 'Поперечная прерывистая линия на дороге означает…', en: 'A broken transverse line painted across the road means…' },
        options: [
          { es: 'el lugar donde hay que ceder el paso, sin obligación de detenerse si no viene nadie.', ru: '…место, где уступают дорогу; останавливаться не обязательно, если никого нет.', en: '…the place to give way, without having to stop if nobody comes.' },
          { es: 'el lugar donde es obligatorio detenerse siempre.', ru: '…место, где нужно всегда останавливаться.', en: '…a place where you must always stop.' },
          { es: 'el final de una calle peatonal.', ru: '…конец пешеходной улицы.', en: '…the end of a pedestrian street.' }
        ],
        answer: 0,
        explain: { ru: 'Поперечная прерывистая — линия «Уступите дорогу». Сплошная поперечная — стоп-линия, перед ней останавливаются.', en: 'A broken transverse line is a give-way line. A solid transverse line is a stop line where you stop.' },
        hint: { ru: 'Прерывистая — «можно не стоять», сплошная — «стой».', en: 'Broken — “no need to stop”, solid — “stop”.' },
        ref: 'RGC, art. 168'
      },
      {
        id: 'se-30',
        es: 'Una línea amarilla continua pintada en el bordillo indica…',
        tr: { ru: 'Сплошная жёлтая линия на бордюре означает…', en: 'A solid yellow line painted on the kerb means…' },
        options: [
          { es: 'prohibición de parar y estacionar.', ru: '…остановка и стоянка запрещены.', en: '…no stopping or parking.' },
          { es: 'estacionamiento con tiempo limitado.', ru: '…стоянка ограничена по времени.', en: '…time-limited parking.' },
          { es: 'zona de carga y descarga.', ru: '…зона погрузки-разгрузки.', en: '…loading zone.' }
        ],
        answer: 0,
        explain: { ru: 'Жёлтая сплошная у края — нельзя ни останавливаться, ни стоять. Жёлтая прерывистая или зигзаг — запрет стоянки. Синяя — платная/ограниченная стоянка.', en: 'Solid yellow at the edge — no stopping or parking. Broken yellow or zigzag — no parking. Blue — paid/limited parking.' },
        hint: { ru: 'Жёлтая сплошная — «здесь вообще не стоят».', en: 'Solid yellow — “no waiting at all”.' },
        ref: 'RGC, art. 171'
      },
      {
        id: 'se-31',
        es: 'Las marcas viales de color azul junto a la acera indican…',
        tr: { ru: 'Синяя разметка у тротуара означает…', en: 'Blue road markings by the pavement mean…' },
        options: [
          { es: 'estacionamiento con limitación horaria, normalmente de pago.', ru: '…стоянку с ограничением по времени, обычно платную.', en: '…time-limited parking, usually paid.' },
          { es: 'prohibición de estacionar.', ru: '…запрет стоянки.', en: '…no parking.' },
          { es: 'parada de autobús.', ru: '…автобусную остановку.', en: '…a bus stop.' }
        ],
        answer: 0,
        explain: { ru: 'Синие линии — зона ограниченной стоянки (часто платной, «zona azul»).', en: 'Blue lines mark a limited-parking zone (often paid, the “zona azul”).' },
        hint: { ru: 'Синяя зона — «стоишь, но платишь».', en: 'Blue zone — “park, but pay”.' },
        ref: 'RGC, art. 171'
      },
      {
        id: 'se-32',
        es: 'En una zona de obras, las marcas viales provisionales de color amarillo o naranja contradicen las blancas. ¿Cuáles debe seguir?',
        tr: { ru: 'В зоне работ временная жёлтая или оранжевая разметка противоречит белой. Какую выполнять?', en: 'In road works, temporary yellow or orange markings contradict the white ones. Which do you follow?' },
        options: [
          { es: 'Las amarillas o naranjas.', ru: 'Жёлтую или оранжевую.', en: 'The yellow or orange ones.' },
          { es: 'Las blancas.', ru: 'Белую.', en: 'The white ones.' },
          { es: 'Las que estén más cerca del arcén.', ru: 'Ту, что ближе к обочине.', en: 'Whichever is nearer the shoulder.' }
        ],
        answer: 0,
        explain: { ru: 'Временная разметка работ относится к временной сигнализации и главнее постоянной белой.', en: 'Temporary works markings count as temporary signalling and beat the permanent white lines.' },
        hint: { ru: 'Временное главнее постоянного.', en: 'Temporary beats permanent.' },
        ref: 'RGC, art. 133'
      }
    ]
  }
]);
