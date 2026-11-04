// Driving theory (DGT): right of way at junctions. Rules: Reglamento General de Circulación (RGC, RD 1428/2003).
// Photos and the narrow-road drawings come from the DGT «Manual básico permiso B — Lectura fácil» (2025); signs and junction diagrams are ours.
ECA.data.addDgt([
  {
    id: 'prioridad',
    cats: ['A', 'B'],
    title: { ru: 'Приоритет и перекрёстки', en: 'Right of way and junctions' },
    summary: {
      ru: 'Кто проезжает первым: правило правой руки, кольцо, знаки, пешеходы, спецмашины, узкие места.',
      en: 'Who goes first: the right-hand rule, roundabouts, signs, pedestrians, emergency vehicles, narrow roads.'
    },
    hero: {
      es: 'Normas de <b>preferencia de paso</b>',
      sub: { ru: 'Кто проезжает первым — по Reglamento General de Circulación', en: 'Who goes first — by the Reglamento General de Circulación' }
    },
    tabs: [
      {
        id: 'cruces',
        label: { ru: 'Перекрёстки', en: 'Crossroads' },
        blocks: [
          {
            type: 'figure', src: 'img/dgt/foto-cruce.jpg', credit: 'DGT',
            alt: { ru: 'Перекрёсток без знаков в жилом квартале, машины подъезжают с разных сторон', en: 'An unmarked junction in a residential street, cars arriving from different sides' }
          },
          {
            type: 'text',
            body: {
              ru: ['На перекрёстке <b>без знаков</b> вы уступаете тому, кто подъезжает <b>справа</b>. Даже если он едет по узкой или плохой дороге, а вы — по широкой.', 'Не важно, кто подъехал раньше, кто едет прямо, а кто поворачивает.'],
              en: ['At an <b>unmarked</b> junction you give way to whoever comes from your <b>right</b>. Even if they come from a narrow or poor road and you are on a wide one.', 'It doesn’t matter who arrived first, or who goes straight and who turns.']
            }
          },
          {
            type: 'figure', src: 'img/dgt/cruce-derecha.svg',
            alt: { ru: 'Схема: вы едете снизу вверх, красная машина подъезжает справа — она проезжает первой', en: 'Diagram: you drive up from the bottom, a red car comes from the right — it goes first' },
            caption: { ru: 'Красная машина справа от вас — она проезжает первой.', en: 'The red car is on your right — it goes first.' }
          },
          {
            type: 'rules', heading: { ru: 'Четыре исключения: правая рука не работает', en: 'Four exceptions: the right-hand rule does not apply' },
            items: [
              { color: 'blue', label: { ru: 'Р', en: 'R' }, title: { ru: 'Рельсы', en: 'Rails' }, es: 'vehículos que circulan por <b>raíles</b>', body: { ru: 'Трамвай проезжает первым, откуда бы он ни ехал.', en: 'A tram goes first, whichever side it comes from.' } },
              { color: 'teal', label: { ru: 'А', en: 'A' }, title: { ru: 'Асфальт', en: 'Asphalt' }, es: 'vía <b>pavimentada</b> sobre vía sin pavimentar', body: { ru: 'Дорога с покрытием главнее грунтовой.', en: 'A paved road beats a dirt road.' } },
              { color: 'amber', label: { ru: 'Г', en: 'G' }, title: { ru: 'Глорьета (кольцо)', en: 'Glorieta (roundabout)' }, es: 'los que ya circulan <b>dentro de la glorieta</b>', body: { ru: 'Кто уже на кольце, едет первым; въезжающий ждёт.', en: 'Those already on the roundabout go first; the one entering waits.' } },
              { color: 'coral', label: { ru: 'А', en: 'A' }, title: { ru: 'Автомагистраль', en: 'Autopista' }, es: 'los que ya circulan por la <b>autopista o autovía</b>', body: { ru: 'Кто уже на автомагистрали, едет первым; въезжающий ждёт.', en: 'Those already on the motorway go first; the one joining waits.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: ['<b>Derecha</b> (право) похоже на <b>derecho</b> — «право»: у того, кто справа, есть право.', 'Исключения — <b>РАГА</b>: Рельсы, Асфальт, Глорьета, Автомагистраль. В этих четырёх случаях первым едет тот, кто «уже внутри» или «на лучшей дороге».'],
              en: ['<b>Derecha</b> (right) sounds like <b>derecho</b> — “a right”: whoever is on your right has the right.', 'Exceptions spell <b>RAGA</b>: Rails, Asphalt, Glorieta, Autopista. In these four cases the one “already inside” or “on the better road” goes first.']
            }
          },
          {
            type: 'figure', src: 'img/dgt/glorieta.svg',
            alt: { ru: 'Схема кольца: красная машина уже на кольце, вы подъезжаете снизу', en: 'Roundabout diagram: a red car is already on the ring, you approach from below' },
            caption: { ru: 'На кольце первым едет тот, кто уже внутри, — хотя он слева от вас.', en: 'On a roundabout whoever is already inside goes first — even though they are on your left.' }
          },
          {
            type: 'rules', heading: { ru: 'Как уступать и как не застрять', en: 'How to give way and not get stuck' },
            items: [
              { color: 'blue', title: { ru: 'Покажите, что уступаете', en: 'Show that you give way' }, es: 'reducir la velocidad <b>paulatinamente</b>', body: { ru: 'Заранее и плавно снижайте скорость, чтобы другой водитель видел: вы его пропускаете. Нельзя трогаться, если ему придётся резко тормозить или объезжать вас.', en: 'Slow down early and smoothly so the other driver sees you are letting them through. Do not move off if they would have to brake hard or swerve.' } },
              { color: 'coral', title: { ru: 'Не въезжайте в пробку', en: 'Do not drive into a jam' }, es: 'no entrar si va a quedar <b>detenido</b> dentro', body: { ru: 'Даже на зелёный нельзя въезжать на перекрёсток, пешеходный или велопереход, если впереди затор и вы там встанете.', en: 'Even on green, do not enter a junction, a pedestrian or cycle crossing if traffic ahead is stuck and you would stop there.' } },
              { color: 'teal', title: { ru: 'Застряли — выезжайте', en: 'Stuck — get out' }, es: 'salir del cruce sin esperar al <b>verde</b>', body: { ru: 'Если вы всё же встали на перекрёстке со светофором и мешаете, выезжайте, не дожидаясь своего зелёного, но не мешая тем, кто едет на разрешающий сигнал.', en: 'If you did stop inside a junction with lights and block it, get out without waiting for your green, without hindering those who move on their green.' } }
            ]
          }
        ]
      },
      {
        id: 'senales',
        label: { ru: 'Знаки', en: 'Signs' },
        blocks: [
          {
            type: 'signs', heading: { ru: 'Знаки приоритета (R)', en: 'Priority signs (R)' },
            items: [
              { src: 'img/dgt/senal-r1.svg', code: 'R-1', es: 'Ceda el paso', ru: 'Уступите дорогу тем, кто едет по дороге, на которую вы выезжаете.', en: 'Give way to traffic on the road you are entering.' },
              { src: 'img/dgt/senal-r2.svg', code: 'R-2', es: 'Detención obligatoria (Stop)', ru: 'Полная остановка у стоп-линии (а без неё — перед перекрёстком), затем уступить. Даже если никого нет.', en: 'Full stop at the stop line (or, without one, just before the junction), then give way. Even if nobody is coming.' },
              { src: 'img/dgt/senal-r3.svg', code: 'R-3', es: 'Calzada con prioridad', ru: 'Вы на главной дороге: на перекрёстках уступают вам.', en: 'You are on a priority road: at junctions others give way to you.' },
              { src: 'img/dgt/senal-r4.svg', code: 'R-4', es: 'Fin de prioridad', ru: 'Главная дорога закончилась — дальше обычные правила.', en: 'The priority road ends — normal rules apply from here.' },
              { src: 'img/dgt/senal-r5.svg', code: 'R-5', es: 'Prioridad en sentido contrario', ru: 'В узком месте уступите встречным: не въезжайте, если им придётся останавливаться.', en: 'At a narrow section give way to oncoming traffic: do not enter if they would have to stop.' },
              { src: 'img/dgt/senal-r6.svg', code: 'R-6', es: 'Prioridad respecto al sentido contrario', ru: 'В узком месте вы проезжаете первым, встречные уступают.', en: 'At a narrow section you go first; oncoming traffic gives way.' }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить R-5 и R-6', en: 'How to remember R-5 and R-6' },
            body: {
              ru: 'Смотрите на <b>свою</b> стрелку — ту, что вверх. Красная и тонкая (R-5, круглый знак) — вы уступаете. Белая и большая (R-6, синий квадрат) — вы главный. Круг с красной каймой запрещает, синий квадрат разрешает.',
              en: 'Look at <b>your</b> arrow — the one pointing up. Red and thin (R-5, round sign) — you give way. White and big (R-6, blue square) — you have priority. A red-rimmed circle forbids, a blue square allows.'
            }
          },
          {
            type: 'signs', heading: { ru: 'Предупреждающие знаки (P)', en: 'Warning signs (P)' },
            items: [
              { src: 'img/dgt/senal-p1.svg', code: 'P-1', es: 'Intersección con prioridad', ru: 'Впереди перекрёсток, на котором у вас приоритет.', en: 'Junction ahead where you have priority.' },
              { src: 'img/dgt/senal-p2.svg', code: 'P-2', es: 'Intersección con prioridad de la derecha', ru: 'Впереди перекрёсток, где действует правило правой руки.', en: 'Junction ahead where the right-hand rule applies.' },
              { src: 'img/dgt/senal-p4.svg', code: 'P-4', es: 'Intersección con circulación giratoria', ru: 'Впереди кольцо (glorieta).', en: 'Roundabout (glorieta) ahead.' }
            ]
          },
          {
            type: 'table', heading: { ru: 'Кого слушать, если сигналы спорят', en: 'Whom to obey when signals disagree' },
            head: ['', { ru: 'Что', en: 'What' }, 'Español'],
            rows: [
              ['1', { ru: 'Регулировщик', en: 'Traffic officer' }, 'agentes de circulación'],
              ['2', { ru: 'Временные знаки, конусы', en: 'Temporary signs, cones' }, 'señalización circunstancial'],
              ['3', { ru: 'Светофор', en: 'Traffic lights' }, 'semáforos'],
              ['4', { ru: 'Дорожные знаки', en: 'Road signs' }, 'señales verticales'],
              ['5', { ru: 'Разметка', en: 'Road markings' }, 'marcas viales']
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить порядок', en: 'How to remember the order' },
            body: {
              ru: ['<b>Чем «живее» и новее сигнал, тем он главнее.</b> Человек → временное → свет → металл → краска.', 'Если спорят два сигнала одного вида (два знака), выполняйте <b>более строгий</b>.'],
              en: ['<b>The more “alive” and recent a signal is, the more it counts.</b> Person → temporary → light → metal → paint.', 'If two signals of the same kind disagree (two signs), obey the <b>stricter</b> one.']
            }
          }
        ]
      },
      {
        id: 'especiales',
        label: { ru: 'Особые', en: 'Special' },
        blocks: [
          {
            type: 'rules', heading: { ru: 'Велосипедисты едут первыми, когда…', en: 'Cyclists go first when…' },
            items: [
              { color: 'teal', title: { ru: 'Их полоса', en: 'Their lane' }, es: '<b>carril bici</b>, paso para ciclistas o arcén señalizado', body: { ru: 'Едут по велополосе, велопереходу или размеченной обочине.', en: 'They ride in a cycle lane, on a cycle crossing or on a marked hard shoulder.' } },
              { color: 'blue', title: { ru: 'Вы поворачиваете', en: 'You turn' }, es: 'usted <b>gira</b> y hay un ciclista cerca', body: { ru: 'Вы поворачиваете направо или налево, а рядом велосипедист.', en: 'You turn right or left and a cyclist is close by.' } },
              { color: 'amber', title: { ru: 'Группа', en: 'A group' }, es: 'el primero del grupo ya ha <b>entrado</b>', body: { ru: 'Первый из группы уже въехал на перекрёсток или кольцо — ждите, пока проедут все.', en: 'The first one of a group has entered the junction or roundabout — wait until all of them pass.' } }
            ]
          },
          {
            type: 'figure', src: 'img/dgt/foto-ciclistas.jpg', credit: 'DGT',
            alt: { ru: 'Велосипедисты на велодорожке, которая пересекает дорогу', en: 'Cyclists on a cycle path that crosses the road' }
          },
          {
            type: 'rules', heading: { ru: 'Пешеходы идут первыми, когда…', en: 'Pedestrians go first when…' },
            items: [
              { color: 'blue', title: { ru: 'Переход и тротуар', en: 'Crossing and pavement' }, es: '<b>paso de peatones</b>, acera, zona peatonal', body: { ru: 'На пешеходном переходе и везде, где вы пересекаете пешеходную зону, например тротуар при выезде из гаража.', en: 'On a pedestrian crossing and wherever you cross a pedestrian area, e.g. the pavement when leaving a garage.' } },
              { color: 'coral', title: { ru: 'Вы поворачиваете', en: 'You turn' }, es: 'usted <b>gira</b> y cruzan peatones', body: { ru: 'Вы поворачиваете на другую улицу, а её переходят люди — даже без «зебры».', en: 'You turn into another street and people are crossing it — even without a zebra.' } },
              { color: 'amber', title: { ru: 'Обочина без тротуара', en: 'Shoulder, no pavement' }, es: 'cruza un <b>arcén</b> con peatones', body: { ru: 'Вы пересекаете обочину, по которой идут люди, потому что тротуара нет.', en: 'You cross a hard shoulder where people walk because there is no pavement.' } },
              { color: 'purple', title: { ru: 'Автобус и группы', en: 'Bus stop and groups' }, es: 'parada de autobús, <b>filas escolares</b>, comitivas', body: { ru: 'Люди между автобусом на остановке и тротуаром; школьники колонной, организованные группы, войска в строю.', en: 'People between a bus at its stop and the pavement; school children in line, organised groups, troops in formation.' } }
            ]
          },
          {
            type: 'figure', src: 'img/dgt/foto-garaje.jpg', credit: 'DGT',
            alt: { ru: 'Машина выезжает из гаража, по тротуару идёт женщина — она проходит первой', en: 'A car leaves a garage while a woman walks along the pavement — she goes first' }
          },
          {
            type: 'rules', heading: { ru: 'Спецмашины', en: 'Emergency vehicles' },
            items: [
              { color: 'coral', title: { ru: 'Сирена и мигалка', en: 'Siren and lights' }, es: 'policía, bomberos, protección civil, <b>ambulancias</b>', body: { ru: 'Полиция, пожарные, спасатели, скорая с включённой сиреной и маячками едут первыми везде. Уйдите вправо, при необходимости остановитесь. Пешеходы ждут на тротуаре.', en: 'Police, fire, rescue and ambulances with siren and lights on go first everywhere. Move to the right and stop if needed. Pedestrians wait on the pavement.' } },
              { color: 'blue', title: { ru: 'Что выполняют они', en: 'What they obey' }, es: 'solo las órdenes de los <b>agentes</b>', body: { ru: 'Могут превышать скорость и не выполнять знаки и светофоры, но обязаны слушаться регулировщика и никого не подвергать опасности.', en: 'They may speed and ignore signs and lights, but must obey traffic officers and must not endanger anyone.' } },
              { color: 'amber', title: { ru: 'Обычная машина в беде', en: 'An ordinary car in an emergency' }, es: '<b>claxon</b> intermitente, luces de emergencia, pañuelo', body: { ru: 'Везёте тяжело больного: прерывистый гудок, аварийка или платок в окне. Правила при этом соблюдаете, особенно на перекрёстках.', en: 'Taking someone seriously ill to hospital: intermittent horn, hazard lights or a handkerchief out of the window. You still follow the rules, especially at junctions.' } }
            ]
          },
          {
            type: 'figure', src: 'img/dgt/foto-urgencias.jpg', credit: 'DGT',
            alt: { ru: 'Скорая едет по шоссе, машины прижимаются в стороны', en: 'An ambulance drives along a road while cars move aside' }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: ['<b>Группа велосипедистов — это один длинный велосипед.</b> Первый въехал — значит, въехали все.', '<b>Повернул — уступи.</b> Поворачиваете — пропускаете и пешеходов, и велосипедистов на той улице.', 'Обычная машина в беде: <b>гудок, аварийка, платок</b>.'],
              en: ['<b>A group of cyclists is one long bicycle.</b> If the first one has entered, they all have.', '<b>Turning means yielding.</b> When you turn, you let both pedestrians and cyclists on that street go first.', 'Ordinary car in an emergency: <b>horn, hazards, handkerchief</b>.']
            }
          }
        ]
      },
      {
        id: 'estrechos',
        label: { ru: 'Узкие места', en: 'Narrow roads' },
        blocks: [
          {
            type: 'text',
            body: {
              ru: ['Если есть знаки (R-5, R-6), светофор или регулировщик — слушайтесь их. Если ничего нет, проезжает тот, кто <b>первым въехал</b> в узкое место.', 'Если непонятно, кто был первым, первым едет тот, кому <b>труднее маневрировать</b>.'],
              en: ['If there are signs (R-5, R-6), lights or an officer, follow them. If there is nothing, whoever <b>entered first</b> goes first.', 'If it is unclear who was first, the vehicle that is <b>harder to manoeuvre</b> goes first.']
            }
          },
          {
            type: 'table', heading: { ru: 'Кто едет первым (сверху вниз)', en: 'Who goes first (top to bottom)' },
            head: ['', { ru: 'Транспорт', en: 'Vehicle' }],
            rows: [
              ['1', { ru: 'Негабаритные спецмашины', en: 'Oversize special vehicles' }],
              ['2', { ru: 'Составы (тягач + прицеп)', en: 'Vehicle combinations' }],
              ['3', { ru: 'Гужевые повозки', en: 'Animal-drawn vehicles' }],
              ['4', { ru: 'Автодома; легковые с прицепом ≤ 750 кг', en: 'Motorhomes; cars with trailer ≤ 750 kg' }],
              ['5', { ru: 'Автобусы', en: 'Buses' }],
              ['6', { ru: 'Грузовики и фургоны', en: 'Lorries and vans' }],
              ['7', { ru: 'Легковые', en: 'Cars' }],
              ['8', { ru: 'Квадрициклы, обычные спецмашины', en: 'Quadricycles, normal special vehicles' }],
              ['9', { ru: 'Трёхколёсные, мото с коляской', en: 'Three-wheelers, sidecars' }],
              ['10', { ru: 'Мотоциклы, мопеды, велосипеды', en: 'Motorbikes, mopeds, bicycles' }]
            ]
          },
          {
            type: 'figure', src: 'img/dgt/estrecho-autobus.png', credit: 'DGT',
            alt: { ru: 'Автобус и грузовик на узком мосту', en: 'A bus and a lorry on a narrow bridge' },
            caption: { ru: 'Автобус (5) проезжает, грузовик (6) сдаёт назад.', en: 'The bus (5) goes on, the lorry (6) reverses.' }
          },
          {
            type: 'rules', heading: { ru: 'Если машины одного типа', en: 'If both vehicles are of the same type' },
            items: [
              { color: 'blue', title: { ru: 'Кому дальше пятиться', en: 'Who would reverse further' }, es: 'quien tenga que dar <b>marcha atrás</b> mayor distancia', body: { ru: 'Едет тот, кому пришлось бы сдавать назад дальше.', en: 'The one who would have to reverse a longer distance goes first.' } },
              { color: 'teal', title: { ru: 'Поровну', en: 'Equal distance' }, es: 'el de mayor <b>anchura, longitud o masa</b>', body: { ru: 'Едет более широкий, длинный или тяжёлый.', en: 'The wider, longer or heavier one goes first.' } }
            ]
          },
          {
            type: 'figure', src: 'img/dgt/pendiente.png', credit: 'DGT',
            alt: { ru: 'Крутой узкий спуск: грузовик едет вниз, легковая вверх', en: 'A steep narrow slope: a lorry going down, a car going up' },
            caption: { ru: 'На крутом подъёме первым едет тот, кто поднимается, — здесь легковая. Грузовик сдаёт назад.', en: 'On a steep slope the one going up goes first — here the car. The lorry reverses.' }
          },
          {
            type: 'text', color: 'amber',
            body: {
              ru: 'На <b>крутом узком подъёме</b> первым едет тот, кто <b>поднимается</b>, — если только у него самого «карман» (apartadero) не ближе. Если сомневаетесь — по таблице выше.',
              en: 'On a <b>steep narrow slope</b> the one going <b>up</b> goes first — unless they themselves are closer to a passing place (apartadero). If in doubt — use the table above.'
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: ['<b>Кому труднее сдать назад, тот и едет.</b> Огромный состав пятиться почти не может, мотоцикл — легко.', '<b>Вверх тяжелее тронуться</b> — поэтому уступает тот, кто едет вниз.'],
              en: ['<b>Whoever finds it harder to reverse goes first.</b> A huge combination can barely back up, a motorbike easily can.', '<b>Moving off uphill is harder</b> — so the one going down gives way.']
            }
          }
        ]
      },
      {
        id: 'palabras',
        label: { ru: 'Словарь', en: 'Glossary' },
        blocks: [
          {
            type: 'text',
            body: {
              ru: 'Экзамен для русскоязычных идёт на испанском (или английском). Эти слова встречаются в вопросах о приоритете постоянно.',
              en: 'Russian speakers take the exam in Spanish (English is also offered). These words keep coming up in right-of-way questions.'
            }
          },
          {
            type: 'table',
            head: ['Español', { ru: 'Перевод', en: 'Translation' }],
            rows: [
              ['ceder el paso', { ru: 'уступить дорогу', en: 'to give way' }],
              ['la preferencia de paso', { ru: 'преимущество, приоритет', en: 'right of way' }],
              ['la intersección', { ru: 'перекрёсток', en: 'junction' }],
              ['el cruce', { ru: 'перекрёсток (разг.)', en: 'crossroads' }],
              ['la glorieta / la rotonda', { ru: 'кольцо', en: 'roundabout' }],
              ['sin señalizar', { ru: 'без знаков', en: 'unmarked' }],
              ['por la derecha', { ru: 'справа', en: 'from the right' }],
              ['la vía pavimentada', { ru: 'дорога с покрытием', en: 'paved road' }],
              ['los raíles', { ru: 'рельсы', en: 'rails' }],
              ['la calzada', { ru: 'проезжая часть', en: 'carriageway' }],
              ['el arcén', { ru: 'обочина', en: 'hard shoulder' }],
              ['la acera', { ru: 'тротуар', en: 'pavement' }],
              ['el paso de peatones', { ru: 'пешеходный переход', en: 'pedestrian crossing' }],
              ['el carril bici', { ru: 'велополоса', en: 'cycle lane' }],
              ['el estrechamiento', { ru: 'сужение дороги', en: 'narrowing' }],
              ['dar marcha atrás', { ru: 'сдать назад', en: 'to reverse' }],
              ['la pendiente', { ru: 'уклон, подъём', en: 'slope' }],
              ['el apartadero', { ru: 'карман для разъезда', en: 'passing place' }],
              ['el agente', { ru: 'регулировщик', en: 'traffic officer' }],
              ['el semáforo', { ru: 'светофор', en: 'traffic light' }],
              ['la línea de detención', { ru: 'стоп-линия', en: 'stop line' }],
              ['el vehículo prioritario', { ru: 'спецмашина', en: 'emergency vehicle' }],
              ['el turismo', { ru: 'легковой автомобиль', en: 'car' }],
              ['el conjunto de vehículos', { ru: 'автопоезд, состав', en: 'vehicle combination' }]
            ]
          }
        ]
      }
    ],
    questions: [
      {
        id: 'pr-01', img: 'img/dgt/cruce-derecha.svg',
        alt: { ru: 'Перекрёсток без знаков: вы снизу, красная машина справа', en: 'Unmarked junction: you at the bottom, a red car on the right' },
        es: 'En esta intersección sin señalizar, ¿quién debe pasar primero?',
        tr: { ru: 'На этом перекрёстке без знаков кто должен проехать первым?', en: 'At this unmarked junction, who must go first?' },
        options: [
          { es: 'El turismo rojo, porque se aproxima por su derecha.', ru: 'Красная машина: она подъезжает справа.', en: 'The red car, because it comes from your right.' },
          { es: 'Usted, porque sigue recto.', ru: 'Вы, потому что едете прямо.', en: 'You, because you go straight on.' },
          { es: 'El que haya llegado antes a la intersección.', ru: 'Тот, кто раньше подъехал к перекрёстку.', en: 'Whoever reached the junction first.' }
        ],
        answer: 0,
        explain: { ru: 'Без знаков действует правило правой руки: уступаете тому, кто справа. Направление движения и кто подъехал раньше — не важны.', en: 'With no signs the right-hand rule applies: you give way to whoever is on your right. Direction and who arrived first do not matter.' },
        hint: { ru: 'Derecha ≈ derecho («право»): у того, кто справа, есть право.', en: 'Derecha ≈ derecho (“a right”): whoever is on the right has the right.' },
        ref: 'RGC, art. 57.1'
      },
      {
        id: 'pr-02',
        es: 'En una intersección sin señalizar, por su derecha llega un vehículo por un camino estrecho y en mal estado, pero asfaltado. ¿Debe cederle el paso?',
        tr: { ru: 'На перекрёстке без знаков справа подъезжает машина по узкой разбитой, но асфальтированной дороге. Нужно ли её пропустить?', en: 'At an unmarked junction a vehicle comes from your right along a narrow, poor but paved road. Must you give way?' },
        options: [
          { es: 'Sí, porque se aproxima por su derecha.', ru: 'Да: она подъезжает справа.', en: 'Yes, because it comes from your right.' },
          { es: 'No, porque usted circula por una vía más ancha.', ru: 'Нет: ваша дорога шире.', en: 'No, because your road is wider.' },
          { es: 'No, porque su vía está en mejor estado.', ru: 'Нет: ваша дорога в лучшем состоянии.', en: 'No, because your road is in better condition.' }
        ],
        answer: 0,
        explain: { ru: 'Ширина и состояние дороги не важны. Исключение — только если дорога справа вообще без покрытия (грунтовка).', en: 'Width and condition do not matter. The only exception is a road with no paving at all (a dirt track).' },
        hint: { ru: 'Узкая ≠ грунтовая. Важен только асфальт: РАГА.', en: 'Narrow ≠ unpaved. Only paving counts: RAGA.' },
        ref: 'RGC, art. 57.1'
      },
      {
        id: 'pr-03',
        es: 'Usted circula por una vía pavimentada y por su derecha se acerca un vehículo por un camino de tierra. ¿Quién tiene preferencia?',
        tr: { ru: 'Вы едете по дороге с покрытием, а справа по грунтовке подъезжает машина. У кого приоритет?', en: 'You are on a paved road and a vehicle approaches from your right along a dirt track. Who has priority?' },
        options: [
          { es: 'Usted, porque circula por una vía pavimentada.', ru: 'У вас: вы на дороге с покрытием.', en: 'You, because you are on a paved road.' },
          { es: 'El otro vehículo, porque viene por la derecha.', ru: 'У другой машины: она справа.', en: 'The other vehicle, because it comes from the right.' },
          { es: 'El que circule a mayor velocidad.', ru: 'У того, кто едет быстрее.', en: 'Whoever is going faster.' }
        ],
        answer: 0,
        explain: { ru: 'Дорога с покрытием главнее дороги без покрытия — это одно из исключений из правила правой руки.', en: 'A paved road has priority over an unpaved one — one of the exceptions to the right-hand rule.' },
        hint: { ru: 'РАГА: «А» — асфальт.', en: 'RAGA: “A” for asphalt.' },
        ref: 'RGC, art. 57.1.a'
      },
      {
        id: 'pr-04',
        es: 'En una intersección sin señalizar se aproxima un tranvía por su izquierda. ¿Quién tiene preferencia?',
        tr: { ru: 'К перекрёстку без знаков слева подъезжает трамвай. У кого приоритет?', en: 'A tram approaches an unmarked junction from your left. Who has priority?' },
        options: [
          { es: 'El tranvía, porque circula sobre raíles.', ru: 'У трамвая: он едет по рельсам.', en: 'The tram, because it runs on rails.' },
          { es: 'Usted, porque el tranvía viene por la izquierda.', ru: 'У вас: трамвай слева.', en: 'You, because the tram comes from the left.' },
          { es: 'El que llegue antes.', ru: 'У того, кто подъедет раньше.', en: 'Whoever arrives first.' }
        ],
        answer: 0,
        explain: { ru: 'Транспорт на рельсах проезжает первым на перекрёстке без знаков, с какой бы стороны он ни ехал.', en: 'Vehicles on rails go first at an unmarked junction, whichever side they come from.' },
        hint: { ru: 'РАГА: «Р» — рельсы. Трамвай не свернёт и быстро не остановится.', en: 'RAGA: “R” for rails. A tram can’t swerve or stop quickly.' },
        ref: 'RGC, art. 57.1.b'
      },
      {
        id: 'pr-05', img: 'img/dgt/glorieta.svg',
        alt: { ru: 'Кольцо: красная машина уже внутри, вы на въезде', en: 'Roundabout: a red car is inside, you are at the entry' },
        es: 'En una glorieta sin señalizar, ¿quién tiene preferencia de paso?',
        tr: { ru: 'На кольце без знаков у кого приоритет?', en: 'At an unmarked roundabout, who has priority?' },
        options: [
          { es: 'Los vehículos que ya circulan por la glorieta.', ru: 'У тех, кто уже едет по кольцу.', en: 'Vehicles already on the roundabout.' },
          { es: 'Los que quieren entrar, porque vienen por la derecha.', ru: 'У въезжающих: они справа.', en: 'Those entering, because they come from the right.' },
          { es: 'Los vehículos de mayor tamaño.', ru: 'У более крупных машин.', en: 'The larger vehicles.' }
        ],
        answer: 0,
        explain: { ru: 'Кто уже на кольце, едет первым, хотя для въезжающего он слева. Это исключение из правила правой руки.', en: 'Whoever is already on the roundabout goes first, even though they are on the entering driver’s left. An exception to the right-hand rule.' },
        hint: { ru: 'РАГА: «Г» — глорьета. Кто внутри — тот главный.', en: 'RAGA: “G” for glorieta. Whoever is inside rules.' },
        ref: 'RGC, art. 57.1.c'
      },
      {
        id: 'pr-06',
        es: '¿Quién tiene preferencia: el vehículo que circula por una autopista o el que pretende acceder a ella?',
        tr: { ru: 'У кого приоритет: у машины на автомагистрали или у той, что хочет на неё въехать?', en: 'Who has priority: a vehicle on the motorway or one trying to join it?' },
        options: [
          { es: 'El que ya circula por la autopista.', ru: 'У той, что уже на автомагистрали.', en: 'The one already on the motorway.' },
          { es: 'El que pretende acceder, si viene por la derecha.', ru: 'У въезжающей, если она справа.', en: 'The one joining, if it comes from the right.' },
          { es: 'El que circule a mayor velocidad.', ru: 'У той, что едет быстрее.', en: 'Whichever is faster.' }
        ],
        answer: 0,
        explain: { ru: 'Кто уже едет по автописте или автовии, проезжает первым; въезжающий уступает.', en: 'Whoever is already on the autopista or autovía goes first; the joining driver gives way.' },
        hint: { ru: 'РАГА: последняя «А» — автомагистраль. Кто внутри — тот главный.', en: 'RAGA: the last “A” for autopista. Whoever is inside rules.' },
        ref: 'RGC, art. 57.1.d'
      },
      {
        id: 'pr-07',
        es: 'En una intersección sin señalizar, ¿en cuál de estos casos NO tiene preferencia el vehículo que llega por su derecha?',
        tr: { ru: 'На перекрёстке без знаков в каком случае машина справа НЕ имеет приоритета?', en: 'At an unmarked junction, in which case does the vehicle from your right NOT have priority?' },
        options: [
          { es: 'Cuando usted ya circula dentro de una glorieta.', ru: 'Когда вы уже едете по кольцу.', en: 'When you are already on a roundabout.' },
          { es: 'Cuando la vía de la derecha es más estrecha.', ru: 'Когда дорога справа уже вашей.', en: 'When the road on the right is narrower.' },
          { es: 'Cuando el vehículo de la derecha es una motocicleta.', ru: 'Когда справа мотоцикл.', en: 'When the vehicle on the right is a motorbike.' }
        ],
        answer: 0,
        explain: { ru: 'Исключения только четыре: рельсы, дорога с покрытием против грунтовки, кольцо, автомагистраль. Ширина дороги и тип машины — не исключения.', en: 'There are only four exceptions: rails, paved vs. unpaved, roundabout, motorway. Road width and vehicle type are not exceptions.' },
        hint: { ru: 'Если варианта нет в РАГА — работает правая рука.', en: 'If it isn’t in RAGA, the right-hand rule applies.' },
        ref: 'RGC, art. 57.1'
      },
      {
        id: 'pr-08',
        es: 'Cuando tiene que ceder el paso, ¿cómo debe mostrarlo al otro conductor?',
        tr: { ru: 'Когда вы должны уступить, как показать это другому водителю?', en: 'When you must give way, how should you show it to the other driver?' },
        options: [
          { es: 'Reduciendo la velocidad paulatinamente y con antelación.', ru: 'Заранее и плавно снижая скорость.', en: 'By slowing down gradually and in good time.' },
          { es: 'Haciendo ráfagas con las luces largas.', ru: 'Мигая дальним светом.', en: 'By flashing your main beam.' },
          { es: 'Tocando el claxon.', ru: 'Посигналив.', en: 'By sounding the horn.' }
        ],
        answer: 0,
        explain: { ru: 'Правило требует показать манерой езды, прежде всего плавным снижением скорости, что вы уступаете. Свет и гудок — не способ уступить.', en: 'The rule asks you to show it by the way you drive, above all by slowing down gradually. Lights and horn are not a way of giving way.' },
        hint: { ru: 'Уступают ногой на тормозе, а не руками.', en: 'You give way with your foot on the brake, not with your hands.' },
        ref: 'RGC, art. 58.1'
      },
      {
        id: 'pr-09',
        es: 'El conductor que debe ceder el paso, ¿puede continuar si obliga al que tiene preferencia a frenar o desviarse bruscamente?',
        tr: { ru: 'Может ли уступающий водитель ехать дальше, если из-за этого водитель с приоритетом должен резко тормозить или отворачивать?', en: 'May a driver who must give way carry on if this forces the driver with priority to brake or swerve sharply?' },
        options: [
          { es: 'No.', ru: 'Нет.', en: 'No.' },
          { es: 'Sí, si lo hace despacio.', ru: 'Да, если едет медленно.', en: 'Yes, if they do it slowly.' },
          { es: 'Sí, si ha llegado antes a la intersección.', ru: 'Да, если подъехал к перекрёстку раньше.', en: 'Yes, if they reached the junction first.' }
        ],
        answer: 0,
        explain: { ru: 'Трогаться или продолжать манёвр можно, только убедившись, что водитель с приоритетом не будет резко менять скорость или траекторию.', en: 'You may move off or continue only once you are sure the driver with priority won’t have to change speed or course sharply.' },
        hint: { ru: 'Уступить — значит, что другой вообще не заметил вашей помехи.', en: 'Giving way means the other driver does not even notice you.' },
        ref: 'RGC, art. 58.1'
      },
      {
        id: 'pr-10',
        es: 'El semáforo está en verde, pero hay retención y su vehículo quedaría detenido dentro del cruce. ¿Qué debe hacer?',
        tr: { ru: 'Светофор зелёный, но впереди затор, и вы остановились бы прямо на перекрёстке. Что делать?', en: 'The light is green but traffic is queuing and you would end up stopped inside the junction. What should you do?' },
        options: [
          { es: 'No entrar en el cruce y esperar.', ru: 'Не въезжать на перекрёсток и ждать.', en: 'Not enter the junction and wait.' },
          { es: 'Entrar, porque el semáforo está en verde.', ru: 'Въехать: ведь зелёный.', en: 'Enter, because the light is green.' },
          { es: 'Entrar y avisar con el claxon.', ru: 'Въехать и посигналить.', en: 'Enter and sound the horn.' }
        ],
        answer: 0,
        explain: { ru: 'Нельзя въезжать на перекрёсток, если из-за затора вы там остановитесь и перекроете движение, даже на зелёный.', en: 'You must not enter a junction if the queue would leave you stopped there blocking traffic, even on green.' },
        hint: { ru: 'Въехал — должен выехать. Не видишь, куда выехать, — стой.', en: 'If you go in, you must be able to get out. Can’t see the way out — stay put.' },
        ref: 'RGC, art. 59.1'
      },
      {
        id: 'pr-11',
        es: 'Ha quedado detenido dentro de una intersección regulada por semáforo y obstaculiza la circulación. ¿Qué debe hacer?',
        tr: { ru: 'Вы застряли на перекрёстке со светофором и мешаете движению. Что делать?', en: 'You are stuck inside a junction with traffic lights and are blocking traffic. What should you do?' },
        options: [
          { es: 'Salir, aunque su semáforo no lo permita, sin entorpecer a los que circulan en el sentido permitido.', ru: 'Выехать, даже если ваш сигнал не разрешает, не мешая тем, кто едет на разрешающий.', en: 'Get out, even if your light doesn’t allow it, without hindering those moving on their green.' },
          { es: 'Quedarse donde está hasta que su semáforo vuelva a ponerse en verde.', ru: 'Стоять, пока ваш светофор снова не станет зелёным.', en: 'Stay where you are until your light turns green again.' },
          { es: 'Dar marcha atrás para salir del cruce.', ru: 'Сдать назад, чтобы покинуть перекрёсток.', en: 'Reverse out of the junction.' }
        ],
        answer: 0,
        explain: { ru: 'Застрявший на перекрёстке должен его освободить, не дожидаясь своего сигнала, но не мешая тем, кто едет на разрешающий сигнал.', en: 'A driver stuck in a junction must clear it without waiting for their light, but without hindering those moving on their green.' },
        hint: { ru: 'Застрял — освободи перекрёсток вперёд, а не назад.', en: 'Stuck — clear the junction forwards, not backwards.' },
        ref: 'RGC, art. 59.2'
      },
      {
        id: 'pr-12',
        es: 'Delante de un paso de peatones hay vehículos parados y usted quedaría detenido encima del paso. ¿Qué debe hacer?',
        tr: { ru: 'За пешеходным переходом стоят машины, и вы остановились бы прямо на «зебре». Что делать?', en: 'Vehicles are stopped beyond a pedestrian crossing and you would end up stopped on it. What should you do?' },
        options: [
          { es: 'Detenerse antes del paso de peatones.', ru: 'Остановиться перед переходом.', en: 'Stop before the crossing.' },
          { es: 'Avanzar y quedarse sobre el paso.', ru: 'Проехать и встать на переходе.', en: 'Drive on and stop on the crossing.' },
          { es: 'Avanzar solo si no hay peatones cruzando.', ru: 'Проехать, только если никто не переходит.', en: 'Drive on only if nobody is crossing.' }
        ],
        answer: 0,
        explain: { ru: 'Запрет въезжать, если застрянешь, касается и пешеходных, и велопереходов, а не только перекрёстков.', en: 'The ban on entering if you would get stuck covers pedestrian and cycle crossings too, not just junctions.' },
        hint: { ru: '«Зебра» — тот же маленький перекрёсток: не встал на ней.', en: 'A zebra is a little junction too: never stop on it.' },
        ref: 'RGC, art. 59.1'
      },
      {
        id: 'pr-13', img: 'img/dgt/senal-r1.svg', alt: { ru: 'Знак R-1', en: 'Sign R-1' },
        es: '¿Qué indica esta señal?',
        tr: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Obligación de ceder el paso en la próxima intersección.', ru: 'Нужно уступить на ближайшем перекрёстке.', en: 'You must give way at the next junction.' },
          { es: 'Obligación de detenerse siempre.', ru: 'Нужно обязательно остановиться.', en: 'You must always stop.' },
          { es: 'Peligro por la proximidad de una intersección.', ru: 'Опасность: близко перекрёсток.', en: 'Danger: junction ahead.' }
        ],
        answer: 0,
        explain: { ru: 'R-1 «Ceda el paso»: уступите тем, кто едет по дороге, на которую вы выезжаете. Останавливаться обязательно только если кто-то едет.', en: 'R-1 “Ceda el paso”: give way to traffic on the road you are entering. You only have to stop if someone is coming.' },
        hint: { ru: 'Треугольник вершиной вниз — как воронка: вы «вливаетесь» и пропускаете.', en: 'A triangle pointing down is like a funnel: you merge in and let others pass.' },
        ref: 'RGC, art. 151'
      },
      {
        id: 'pr-14', img: 'img/dgt/senal-r2.svg', alt: { ru: 'Знак R-2', en: 'Sign R-2' },
        es: 'Ante esta señal, si no se acerca ningún vehículo, ¿es obligatorio detenerse?',
        tr: { ru: 'Перед этим знаком обязательно останавливаться, если никого нет?', en: 'At this sign, must you stop if no vehicle is coming?' },
        options: [
          { es: 'Sí, siempre hay que detenerse por completo.', ru: 'Да, всегда полная остановка.', en: 'Yes, you must always stop completely.' },
          { es: 'No, basta con reducir la velocidad.', ru: 'Нет, достаточно сбавить скорость.', en: 'No, slowing down is enough.' },
          { es: 'Solo si hay otros vehículos.', ru: 'Только если есть другие машины.', en: 'Only if there are other vehicles.' }
        ],
        answer: 0,
        explain: { ru: 'R-2 «Stop»: полная остановка обязательна всегда, даже если дорога пустая. Потом уступите тем, кто едет по главной.', en: 'R-2 “Stop”: a full stop is always required, even on an empty road. Then give way to traffic on the main road.' },
        hint: { ru: 'Восьмиугольник один такой: колёса должны замереть.', en: 'The only eight-sided sign: the wheels must come to a standstill.' },
        ref: 'RGC, art. 151'
      },
      {
        id: 'pr-15', img: 'img/dgt/senal-r2.svg', alt: { ru: 'Знак R-2', en: 'Sign R-2' },
        es: 'Ante esta señal, si no hay línea de detención, ¿dónde debe detenerse?',
        tr: { ru: 'Где останавливаться перед этим знаком, если нет стоп-линии?', en: 'At this sign, where must you stop if there is no stop line?' },
        options: [
          { es: 'Inmediatamente antes de la intersección, donde tenga visibilidad.', ru: 'Прямо перед перекрёстком, где видно дорогу.', en: 'Just before the junction, where you can see.' },
          { es: 'Junto a la señal, aunque desde allí no vea la vía.', ru: 'У самого знака, даже если оттуда не видно дорогу.', en: 'Next to the sign, even if you cannot see the road from there.' },
          { es: 'Dentro de la intersección.', ru: 'Уже на перекрёстке.', en: 'Inside the junction.' }
        ],
        answer: 0,
        explain: { ru: 'Останавливаются у стоп-линии; если её нет — непосредственно перед перекрёстком, в месте, откуда видно, кто едет.', en: 'You stop at the stop line; if there is none, right before the junction, at a point from which you can see who is coming.' },
        hint: { ru: 'Стоп — там, откуда видно.', en: 'Stop where you can see.' },
        ref: 'RGC, art. 151'
      },
      {
        id: 'pr-16', img: 'img/dgt/senal-r3.svg', alt: { ru: 'Знак R-3', en: 'Sign R-3' },
        es: '¿Qué indica esta señal?',
        tr: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Que la calzada por la que circula tiene prioridad en las intersecciones.', ru: 'Ваша дорога главная на перекрёстках.', en: 'Your road has priority at junctions.' },
          { es: 'Que debe ceder el paso.', ru: 'Нужно уступить.', en: 'You must give way.' },
          { es: 'El fin de una calzada con prioridad.', ru: 'Конец главной дороги.', en: 'End of the priority road.' }
        ],
        answer: 0,
        explain: { ru: 'R-3 «Calzada con prioridad»: на перекрёстках уступают вам.', en: 'R-3 “Calzada con prioridad”: at junctions others give way to you.' },
        hint: { ru: 'Жёлтый ромб — «золотая» дорога.', en: 'Yellow diamond — the “golden” road.' },
        ref: 'RGC, art. 151'
      },
      {
        id: 'pr-17', img: 'img/dgt/senal-r4.svg', alt: { ru: 'Знак R-4', en: 'Sign R-4' },
        es: '¿Qué indica esta señal?',
        tr: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'El fin de la prioridad de la calzada por la que circula.', ru: 'Конец главной дороги.', en: 'End of priority on your road.' },
          { es: 'Que la calzada tiene prioridad.', ru: 'Дорога главная.', en: 'The road has priority.' },
          { es: 'Prohibido adelantar.', ru: 'Обгон запрещён.', en: 'No overtaking.' }
        ],
        answer: 0,
        explain: { ru: 'R-4 «Fin de prioridad»: главная дорога закончилась, дальше обычные правила (в том числе правая рука).', en: 'R-4 “Fin de prioridad”: the priority road ends, normal rules apply (including the right-hand rule).' },
        hint: { ru: 'Перечёркнутое = закончилось. Это правило для всех знаков «fin de…».', en: 'Crossed out = it’s over. True for every “fin de…” sign.' },
        ref: 'RGC, art. 151'
      },
      {
        id: 'pr-18', img: 'img/dgt/senal-r5.svg', alt: { ru: 'Знак R-5', en: 'Sign R-5' },
        es: '¿Qué indica esta señal?',
        tr: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Que debe ceder el paso a los que vienen en sentido contrario en el paso estrecho.', ru: 'В узком месте уступите встречным.', en: 'Give way to oncoming traffic at the narrow section.' },
          { es: 'Que tiene prioridad sobre los que vienen de frente.', ru: 'У вас приоритет перед встречными.', en: 'You have priority over oncoming traffic.' },
          { es: 'Calzada de doble sentido.', ru: 'Дорога с двусторонним движением.', en: 'Two-way road.' }
        ],
        answer: 0,
        explain: { ru: 'R-5: нельзя въезжать в узкое место, пока встречным придётся из-за вас останавливаться.', en: 'R-5: do not enter the narrow section while oncoming drivers would have to stop for you.' },
        hint: { ru: 'Ваша стрелка (вверх) красная — вы уступаете.', en: 'Your arrow (up) is red — you give way.' },
        ref: 'RGC, art. 151'
      },
      {
        id: 'pr-19', img: 'img/dgt/senal-r6.svg', alt: { ru: 'Знак R-6', en: 'Sign R-6' },
        es: '¿Qué indica esta señal?',
        tr: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Que tiene prioridad respecto a los vehículos que vienen en sentido contrario.', ru: 'У вас приоритет перед встречными.', en: 'You have priority over oncoming vehicles.' },
          { es: 'Que debe ceder el paso a los que vienen de frente.', ru: 'Уступите встречным.', en: 'Give way to oncoming traffic.' },
          { es: 'Calle de sentido único.', ru: 'Улица с односторонним движением.', en: 'One-way street.' }
        ],
        answer: 0,
        explain: { ru: 'R-6: в узком месте вы проезжаете первым, встречные уступают вам.', en: 'R-6: at the narrow section you go first; oncoming traffic gives way to you.' },
        hint: { ru: 'Ваша стрелка большая и белая, знак синий — вы главный.', en: 'Your arrow is big and white, the sign is blue — you rule.' },
        ref: 'RGC, art. 151'
      },
      {
        id: 'pr-20', img: 'img/dgt/senal-p2.svg', alt: { ru: 'Знак P-2', en: 'Sign P-2' },
        es: '¿Qué indica esta señal?',
        tr: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Intersección en la que rige la prioridad de la derecha.', ru: 'Перекрёсток, где действует правило правой руки.', en: 'Junction where the right-hand rule applies.' },
          { es: 'Intersección en la que usted tiene prioridad.', ru: 'Перекрёсток, где приоритет у вас.', en: 'Junction where you have priority.' },
          { es: 'Paso a nivel sin barreras.', ru: 'Ж/д переезд без шлагбаума.', en: 'Level crossing without barriers.' }
        ],
        answer: 0,
        explain: { ru: 'P-2 предупреждает о перекрёстке равнозначных дорог: уступаете тем, кто справа.', en: 'P-2 warns of a junction of equal roads: give way to those on your right.' },
        hint: { ru: 'Крест «X» — дороги равны, значит, работает правая рука.', en: 'An “X” — the roads are equal, so the right-hand rule applies.' },
        ref: 'RGC, art. 149'
      },
      {
        id: 'pr-21', img: 'img/dgt/senal-p1.svg', alt: { ru: 'Знак P-1', en: 'Sign P-1' },
        es: 'Esta señal advierte de una intersección en la que…',
        tr: { ru: 'Этот знак предупреждает о перекрёстке, на котором…', en: 'This sign warns of a junction where…' },
        options: [
          { es: 'usted tiene prioridad.', ru: '…приоритет у вас.', en: '…you have priority.' },
          { es: 'debe ceder el paso.', ru: '…вы должны уступить.', en: '…you must give way.' },
          { es: 'rige la prioridad de la derecha.', ru: '…действует правило правой руки.', en: '…the right-hand rule applies.' }
        ],
        answer: 0,
        explain: { ru: 'P-1: впереди перекрёсток, на котором ваша дорога главная. Толстая линия — ваша дорога, тонкая — второстепенная.', en: 'P-1: junction ahead where your road has priority. The thick line is your road, the thin one is the minor road.' },
        hint: { ru: 'Толстая линия — это вы.', en: 'The thick line is you.' },
        ref: 'RGC, art. 149'
      },
      {
        id: 'pr-22', img: 'img/dgt/senal-p4.svg', alt: { ru: 'Знак P-4', en: 'Sign P-4' },
        es: '¿Qué indica esta señal?',
        tr: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Proximidad de una intersección con circulación giratoria.', ru: 'Впереди кольцо.', en: 'Roundabout ahead.' },
          { es: 'Obligación de dar media vuelta.', ru: 'Нужно развернуться.', en: 'You must turn around.' },
          { es: 'Calle de sentido único.', ru: 'Улица с односторонним движением.', en: 'One-way street.' }
        ],
        answer: 0,
        explain: { ru: 'P-4 предупреждает о кольце (glorieta). На нём первыми едут те, кто уже внутри.', en: 'P-4 warns of a roundabout (glorieta). Those already on it go first.' },
        hint: { ru: 'Стрелки бегут по кругу — значит, кольцо.', en: 'Arrows chasing each other in a circle — a roundabout.' },
        ref: 'RGC, art. 149'
      },
      {
        id: 'pr-23',
        es: 'Un agente le indica que pase, pero el semáforo está en rojo. ¿Qué debe hacer?',
        tr: { ru: 'Регулировщик показывает вам ехать, а светофор красный. Что делать?', en: 'An officer signals you to go, but the light is red. What should you do?' },
        options: [
          { es: 'Pasar, porque las indicaciones del agente prevalecen sobre el semáforo.', ru: 'Ехать: указания регулировщика главнее светофора.', en: 'Go, because the officer’s signals prevail over the light.' },
          { es: 'Esperar a que el semáforo se ponga en verde.', ru: 'Ждать зелёного.', en: 'Wait for the green light.' },
          { es: 'Detenerse y después pasar con precaución.', ru: 'Остановиться, потом осторожно проехать.', en: 'Stop, then go carefully.' }
        ],
        answer: 0,
        explain: { ru: 'Сигналы и приказы регулировщика — на первом месте, они главнее любых светофоров, знаков и разметки.', en: 'An officer’s signals and orders come first and prevail over any lights, signs and markings.' },
        hint: { ru: 'Человек главнее любой железки.', en: 'A person beats any piece of hardware.' },
        ref: 'RGC, art. 133'
      },
      {
        id: 'pr-24',
        es: 'En una intersección hay un semáforo en verde y una señal de stop. ¿Qué debe obedecer?',
        tr: { ru: 'На перекрёстке зелёный светофор и знак «Стоп». Что выполнять?', en: 'At a junction there is a green light and a stop sign. Which do you obey?' },
        options: [
          { es: 'El semáforo.', ru: 'Светофор.', en: 'The traffic light.' },
          { es: 'La señal de stop.', ru: 'Знак «Стоп».', en: 'The stop sign.' },
          { es: 'La señal más restrictiva.', ru: 'Более строгий сигнал.', en: 'The stricter signal.' }
        ],
        answer: 0,
        explain: { ru: 'Светофор стоит выше знаков. Знак «Стоп» начинает действовать, когда светофор выключен или мигает жёлтым.', en: 'Traffic lights rank above signs. The stop sign applies when the lights are off or flashing amber.' },
        hint: { ru: 'Свет главнее металла.', en: 'Light beats metal.' },
        ref: 'RGC, art. 133'
      },
      {
        id: 'pr-25',
        es: 'Una señal vertical y una marca vial indican cosas contradictorias. ¿Cuál prevalece?',
        tr: { ru: 'Дорожный знак и разметка противоречат друг другу. Что главнее?', en: 'A road sign and a road marking contradict each other. Which prevails?' },
        options: [
          { es: 'La señal vertical.', ru: 'Знак.', en: 'The sign.' },
          { es: 'La marca vial.', ru: 'Разметка.', en: 'The marking.' },
          { es: 'La que se haya colocado más recientemente.', ru: 'Тот сигнал, что поставили позже.', en: 'Whichever was put there more recently.' }
        ],
        answer: 0,
        explain: { ru: 'Разметка — на последнем месте в порядке приоритета; знак главнее её.', en: 'Markings are last in the order of priority; a sign prevails over them.' },
        hint: { ru: 'Металл главнее краски.', en: 'Metal beats paint.' },
        ref: 'RGC, art. 133'
      },
      {
        id: 'pr-26',
        es: '¿Cuál es el orden de prioridad entre las señales, de mayor a menor?',
        tr: { ru: 'Каков порядок приоритета сигналов, от главного к второстепенному?', en: 'What is the order of priority of signals, from highest to lowest?' },
        options: [
          { es: 'Agentes, señalización circunstancial, semáforos, señales verticales, marcas viales.', ru: 'Регулировщик, временные знаки, светофор, знаки, разметка.', en: 'Officers, temporary signs, lights, road signs, markings.' },
          { es: 'Semáforos, agentes, señales verticales, marcas viales.', ru: 'Светофор, регулировщик, знаки, разметка.', en: 'Lights, officers, road signs, markings.' },
          { es: 'Señales verticales, semáforos, agentes, marcas viales.', ru: 'Знаки, светофор, регулировщик, разметка.', en: 'Road signs, lights, officers, markings.' }
        ],
        answer: 0,
        explain: { ru: 'Порядок: 1) регулировщики; 2) временные знаки и ограждения; 3) светофоры; 4) вертикальные знаки; 5) разметка.', en: 'The order: 1) officers; 2) temporary signs and barriers; 3) traffic lights; 4) road signs; 5) markings.' },
        hint: { ru: 'Человек → временное → свет → металл → краска.', en: 'Person → temporary → light → metal → paint.' },
        ref: 'RGC, art. 133'
      },
      {
        id: 'pr-27',
        es: 'Dos señales del mismo tipo parecen contradecirse. ¿Cuál debe obedecer?',
        tr: { ru: 'Два знака одного вида противоречат друг другу. Какой выполнять?', en: 'Two signs of the same kind seem to contradict each other. Which do you obey?' },
        options: [
          { es: 'La más restrictiva.', ru: 'Более строгий.', en: 'The stricter one.' },
          { es: 'La que esté más cerca.', ru: 'Тот, что ближе.', en: 'The nearer one.' },
          { es: 'Cualquiera de las dos.', ru: 'Любой из двух.', en: 'Either of them.' }
        ],
        answer: 0,
        explain: { ru: 'Между сигналами разного вида — порядок приоритета; между сигналами одного вида — более строгий.', en: 'Between different kinds — the order of priority; between the same kind — the stricter one.' },
        hint: { ru: 'Сомневаешься — выбирай строже.', en: 'In doubt — choose the stricter.' },
        ref: 'RGC, art. 133'
      },
      {
        id: 'pr-28', img: 'img/dgt/foto-ciclistas.jpg', alt: { ru: 'Велосипедисты на велодорожке', en: 'Cyclists on a cycle path' },
        es: 'Va a girar a la derecha para entrar en otra vía y un ciclista circula cerca de usted. ¿Quién tiene preferencia?',
        tr: { ru: 'Вы поворачиваете направо на другую дорогу, а рядом едет велосипедист. У кого приоритет?', en: 'You are turning right into another road and a cyclist is riding close to you. Who has priority?' },
        options: [
          { es: 'El ciclista.', ru: 'У велосипедиста.', en: 'The cyclist.' },
          { es: 'Usted, porque los vehículos de motor tienen prioridad sobre las bicicletas.', ru: 'У вас: машины главнее велосипедов.', en: 'You, because motor vehicles have priority over bicycles.' },
          { es: 'El que llegue antes.', ru: 'У того, кто раньше.', en: 'Whoever gets there first.' }
        ],
        answer: 0,
        explain: { ru: 'Когда машина поворачивает направо или налево, а рядом велосипедист, приоритет у велосипедиста.', en: 'When a motor vehicle turns right or left with a cyclist nearby, the cyclist has priority.' },
        hint: { ru: 'Повернул — уступи.', en: 'Turning means yielding.' },
        ref: 'RGC, art. 64'
      },
      {
        id: 'pr-29',
        es: 'Un grupo de ciclistas cruza una intersección y el primero ya ha entrado en ella. ¿Qué debe hacer?',
        tr: { ru: 'Группа велосипедистов пересекает перекрёсток, первый уже въехал. Что делать?', en: 'A group of cyclists is crossing a junction and the first one has already entered. What should you do?' },
        options: [
          { es: 'Esperar a que pase todo el grupo.', ru: 'Ждать, пока проедет вся группа.', en: 'Wait until the whole group has passed.' },
          { es: 'Pasar en cuanto haya un hueco entre ellos.', ru: 'Проехать, как только появится просвет.', en: 'Go as soon as there is a gap between them.' },
          { es: 'Pasar, porque los ciclistas no tienen preferencia en las intersecciones.', ru: 'Проехать: у велосипедистов нет приоритета на перекрёстке.', en: 'Go, because cyclists have no priority at junctions.' }
        ],
        answer: 0,
        explain: { ru: 'Если первый из группы уже въехал на перекрёсток или кольцо, приоритет у всей группы.', en: 'If the first of a group has entered the junction or roundabout, the whole group has priority.' },
        hint: { ru: 'Группа велосипедистов — один длинный велосипед.', en: 'A group of cyclists is one long bicycle.' },
        ref: 'RGC, art. 64'
      },
      {
        id: 'pr-30',
        es: 'Gira para entrar en otra calle y hay peatones cruzándola, aunque no hay paso de peatones. ¿Quién tiene preferencia?',
        tr: { ru: 'Вы поворачиваете на другую улицу, а её переходят люди, хотя «зебры» нет. У кого приоритет?', en: 'You turn into another street and pedestrians are crossing it, though there is no crossing. Who has priority?' },
        options: [
          { es: 'Los peatones.', ru: 'У пешеходов.', en: 'The pedestrians.' },
          { es: 'Usted, porque no hay paso de peatones.', ru: 'У вас: перехода нет.', en: 'You, because there is no crossing.' },
          { es: 'Usted, si ha puesto el intermitente.', ru: 'У вас, если включён поворотник.', en: 'You, if you have indicated.' }
        ],
        answer: 0,
        explain: { ru: 'Поворачивая на другую дорогу, вы пропускаете пешеходов, которые её переходят, даже если перехода нет.', en: 'When turning into another road you let pedestrians crossing it go first, even without a crossing.' },
        hint: { ru: 'Повернул — уступи.', en: 'Turning means yielding.' },
        ref: 'RGC, art. 65.1.b'
      },
      {
        id: 'pr-31', img: 'img/dgt/foto-garaje.jpg', alt: { ru: 'Машина выезжает из гаража через тротуар', en: 'A car leaving a garage across the pavement' },
        es: 'Sale de un garaje y tiene que cruzar la acera. ¿Quién tiene preferencia?',
        tr: { ru: 'Вы выезжаете из гаража через тротуар. У кого приоритет?', en: 'You are leaving a garage and must cross the pavement. Who has priority?' },
        options: [
          { es: 'Los peatones que circulan por la acera.', ru: 'У пешеходов на тротуаре.', en: 'Pedestrians on the pavement.' },
          { es: 'Usted, porque está saliendo.', ru: 'У вас: вы выезжаете.', en: 'You, because you are coming out.' },
          { es: 'Usted, si avisa con el claxon.', ru: 'У вас, если посигналите.', en: 'You, if you sound the horn.' }
        ],
        answer: 0,
        explain: { ru: 'Пересекая пешеходную зону (тротуар), водитель пропускает людей, которые по ней идут.', en: 'When crossing a pedestrian area (the pavement), the driver lets the people walking there go first.' },
        hint: { ru: 'Тротуар — территория пешехода, вы там гость.', en: 'The pavement is pedestrian ground; you are a guest there.' },
        ref: 'RGC, art. 65.2'
      },
      {
        id: 'pr-32',
        es: 'Unos peatones están entre un autobús detenido en su parada y la acera. ¿Qué debe hacer?',
        tr: { ru: 'Между автобусом на остановке и тротуаром находятся люди. Что делать?', en: 'Some pedestrians are between a bus stopped at its stop and the pavement. What should you do?' },
        options: [
          { es: 'Cederles el paso.', ru: 'Пропустить их.', en: 'Give way to them.' },
          { es: 'Pasar con precaución, porque no hay paso de peatones.', ru: 'Осторожно проехать: перехода нет.', en: 'Drive past carefully, there is no crossing.' },
          { es: 'Avisarles con el claxon.', ru: 'Посигналить им.', en: 'Warn them with the horn.' }
        ],
        answer: 0,
        explain: { ru: 'Нужно пропустить людей, которые садятся в автобус или вышли из него на остановке и идут к тротуару.', en: 'You must let people getting on or off a bus at its stop reach the pavement.' },
        hint: { ru: 'Вышел из автобуса — ещё «пассажир», а не пешеход на дороге.', en: 'Just off the bus — still a “passenger”, not a jaywalker.' },
        ref: 'RGC, art. 65.3.a'
      },
      {
        id: 'pr-33', img: 'img/dgt/foto-grupo.jpg', alt: { ru: 'Группа школьников идёт вдоль дороги', en: 'A group of school children walking by the road' },
        es: 'Una fila escolar va a cruzar la calzada por un lugar sin paso de peatones. ¿Qué debe hacer?',
        tr: { ru: 'Колонна школьников переходит дорогу в месте без «зебры». Что делать?', en: 'A line of school children is about to cross where there is no crossing. What should you do?' },
        options: [
          { es: 'Cederles el paso.', ru: 'Пропустить их.', en: 'Give way to them.' },
          { es: 'Continuar, porque no hay paso de peatones.', ru: 'Ехать дальше: перехода нет.', en: 'Carry on, there is no crossing.' },
          { es: 'Cederles el paso solo si les acompaña un agente.', ru: 'Пропустить, только если с ними полицейский.', en: 'Give way only if an officer is with them.' }
        ],
        answer: 0,
        explain: { ru: 'Школьные колонны, организованные шествия и войска в строю пропускают всегда, переход не нужен.', en: 'School lines, organised processions and troops in formation are always given way to; no crossing is needed.' },
        hint: { ru: 'Колонна — как поезд: её не разрезают.', en: 'A line of people is like a train: you don’t cut through it.' },
        ref: 'RGC, art. 65.3.b'
      },
      {
        id: 'pr-34', img: 'img/dgt/foto-urgencias.jpg', alt: { ru: 'Скорая на дороге', en: 'An ambulance on the road' },
        es: 'Una ambulancia se acerca con la señal acústica y luminosa encendida. ¿Qué debe hacer?',
        tr: { ru: 'Сзади приближается скорая с сиреной и маячками. Что делать?', en: 'An ambulance approaches with siren and lights on. What should you do?' },
        options: [
          { es: 'Facilitarle el paso, apartándose a la derecha o deteniéndose si es necesario.', ru: 'Пропустить: прижаться вправо или остановиться, если нужно.', en: 'Let it through: pull to the right or stop if needed.' },
          { es: 'Acelerar para dejarle la vía libre.', ru: 'Ускориться, чтобы освободить дорогу.', en: 'Speed up to clear the road.' },
          { es: 'Seguir igual, porque debe respetar las normas como todos.', ru: 'Ехать как ехал: она тоже обязана соблюдать правила.', en: 'Carry on as before; it must follow the rules like everyone.' }
        ],
        answer: 0,
        explain: { ru: 'Услышав сирену или увидев маячки, освободите дорогу: обычно уйдите вправо, при необходимости остановитесь.', en: 'On hearing the siren or seeing the lights, clear the way: normally move right and stop if necessary.' },
        hint: { ru: 'Сирена + мигалка = прижмись вправо.', en: 'Siren + lights = pull to the right.' },
        ref: 'RGC, art. 69'
      },
      {
        id: 'pr-35',
        es: '¿Qué indicaciones deben obedecer siempre los conductores de vehículos prioritarios en servicio de urgencia?',
        tr: { ru: 'Какие указания всегда обязаны выполнять водители спецмашин на срочном вызове?', en: 'Which instructions must drivers of emergency vehicles on an urgent call always obey?' },
        options: [
          { es: 'Las de los agentes de la circulación.', ru: 'Указания регулировщиков.', en: 'Those of traffic officers.' },
          { es: 'Todas las señales, como el resto de conductores.', ru: 'Все знаки, как остальные водители.', en: 'All signs, like other drivers.' },
          { es: 'Solo las de los semáforos.', ru: 'Только сигналы светофора.', en: 'Only traffic lights.' }
        ],
        answer: 0,
        explain: { ru: 'На вызове спецмашины могут не выполнять знаки и светофоры, но приказы регулировщика — обязаны. И никого не подвергать опасности.', en: 'On an urgent call emergency vehicles may ignore signs and lights but must obey officers, and must not endanger anyone.' },
        hint: { ru: 'Регулировщик — на первом месте для всех, даже для скорой.', en: 'The officer is number one for everyone, even an ambulance.' },
        ref: 'RGC, art. 68'
      },
      {
        id: 'pr-36',
        es: 'Lleva a un herido grave al hospital en su turismo. ¿Cómo puede indicar la situación de urgencia?',
        tr: { ru: 'Вы везёте тяжело раненого в больницу на своей машине. Как обозначить срочность?', en: 'You are taking a badly injured person to hospital in your car. How can you show it is an emergency?' },
        options: [
          { es: 'Con el claxon de forma intermitente y el alumbrado de emergencia, o agitando un pañuelo.', ru: 'Прерывистым гудком и аварийкой или размахивая платком.', en: 'With an intermittent horn and hazard lights, or by waving a handkerchief.' },
          { es: 'Con las luces largas encendidas de forma continua.', ru: 'Постоянно включённым дальним светом.', en: 'With main beam on all the time.' },
          { es: 'No puede; debe circular como siempre.', ru: 'Никак: нужно ехать как обычно.', en: 'You can’t; you must drive as usual.' }
        ],
        answer: 0,
        explain: { ru: 'Обычная машина в срочной ситуации подаёт прерывистый звуковой сигнал, включает аварийку или машет платком из окна. Правила при этом соблюдаются.', en: 'An ordinary car in an emergency uses an intermittent horn, hazard lights or a handkerchief out of the window, while still following the rules.' },
        hint: { ru: 'Гудок, аварийка, платок.', en: 'Horn, hazards, handkerchief.' },
        ref: 'RGC, art. 70'
      },
      {
        id: 'pr-37',
        es: 'En poblado, un autobús quiere salir de una parada señalizada. ¿Qué debe hacer?',
        tr: { ru: 'В городе автобус отъезжает от остановки. Что делать?', en: 'In town, a bus wants to pull out of a marked stop. What should you do?' },
        options: [
          { es: 'Reducir la velocidad y, si es preciso, detenerse para facilitarle la salida.', ru: 'Сбавить скорость и при необходимости остановиться, чтобы он выехал.', en: 'Slow down and stop if necessary to let it pull out.' },
          { es: 'Mantener la velocidad, porque usted tiene preferencia.', ru: 'Не сбавлять: у вас приоритет.', en: 'Keep your speed, you have priority.' },
          { es: 'Avisar con el claxon para que espere.', ru: 'Посигналить, чтобы подождал.', en: 'Sound the horn so it waits.' }
        ],
        answer: 0,
        explain: { ru: 'В населённом пункте водители должны помочь автобусу отъехать от обозначенной остановки: снизить скорость, при необходимости остановиться.', en: 'In built-up areas drivers must help a bus pull out of a marked stop: slow down, stopping if needed.' },
        hint: { ru: 'В городе автобус — «свой»: выпусти его.', en: 'In town the bus is “one of us”: let it out.' },
        ref: 'RGC, art. 73'
      },
      {
        id: 'pr-38',
        es: 'En un estrechamiento sin señalizar, ¿quién tiene preferencia de paso?',
        tr: { ru: 'В узком месте без знаков у кого приоритет?', en: 'At an unmarked narrowing, who has priority?' },
        options: [
          { es: 'El que haya entrado primero.', ru: 'У того, кто въехал первым.', en: 'Whoever entered first.' },
          { es: 'El que venga por la derecha.', ru: 'У того, кто справа.', en: 'Whoever comes from the right.' },
          { es: 'El vehículo más pequeño.', ru: 'У машины поменьше.', en: 'The smaller vehicle.' }
        ],
        answer: 0,
        explain: { ru: 'В узком месте без знаков едет тот, кто въехал первым. Если неясно, кто был первым, — тот, кому труднее маневрировать.', en: 'At an unmarked narrowing whoever entered first goes on. If unclear, the one that is harder to manoeuvre.' },
        hint: { ru: 'Кто уже внутри — тот и едет (как на кольце).', en: 'Whoever is already inside goes (like a roundabout).' },
        ref: 'RGC, art. 60'
      },
      {
        id: 'pr-39', img: 'img/dgt/estrecho-autobus.png', alt: { ru: 'Автобус и грузовик на узком мосту', en: 'A bus and a lorry on a narrow bridge' },
        es: 'En un puente estrecho sin señalizar se encuentran un autobús y un camión y no se sabe quién entró primero. ¿Quién debe retroceder?',
        tr: { ru: 'На узком мосту без знаков встретились автобус и грузовик, и неясно, кто въехал первым. Кто сдаёт назад?', en: 'A bus and a lorry meet on a narrow unmarked bridge and it’s unclear who entered first. Who must reverse?' },
        options: [
          { es: 'El camión.', ru: 'Грузовик.', en: 'The lorry.' },
          { es: 'El autobús.', ru: 'Автобус.', en: 'The bus.' },
          { es: 'El que circule más despacio.', ru: 'Тот, кто ехал медленнее.', en: 'Whichever was going slower.' }
        ],
        answer: 0,
        explain: { ru: 'В порядке приоритета автобусы (5) стоят выше грузовиков и фургонов (6), так что сдаёт назад грузовик.', en: 'In the order of priority buses (5) come before lorries and vans (6), so the lorry reverses.' },
        hint: { ru: 'В автобусе пассажиры — им сдавать назад опаснее.', en: 'A bus carries passengers — reversing it is riskier.' },
        ref: 'RGC, art. 62'
      },
      {
        id: 'pr-40', img: 'img/dgt/estrecho-conjunto.png', alt: { ru: 'Легковая с прицепом и грузовик с прицепом на узком мосту', en: 'A car with a trailer and a lorry with a trailer on a narrow bridge' },
        es: 'En un paso estrecho sin señalizar se encuentran un turismo con remolque ligero y un camión con remolque. ¿Quién tiene preferencia?',
        tr: { ru: 'В узком месте без знаков встретились легковая с лёгким прицепом и грузовик с прицепом. У кого приоритет?', en: 'A car with a light trailer and a lorry with a trailer meet at an unmarked narrow section. Who has priority?' },
        options: [
          { es: 'El camión con remolque.', ru: 'У грузовика с прицепом.', en: 'The lorry with a trailer.' },
          { es: 'El turismo con remolque.', ru: 'У легковой с прицепом.', en: 'The car with a trailer.' },
          { es: 'El que tenga que dar marcha atrás menos distancia.', ru: 'У того, кому меньше сдавать назад.', en: 'Whoever would reverse a shorter distance.' }
        ],
        answer: 0,
        explain: { ru: 'Грузовик с прицепом — «состав» (2-е место), легковая с лёгким прицепом — 4-е место. Едет грузовик.', en: 'A lorry with a trailer is a “combination” (2nd place); a car with a light trailer is 4th. The lorry goes.' },
        hint: { ru: 'Кому труднее сдать назад, тот и едет.', en: 'Whoever finds it harder to reverse goes first.' },
        ref: 'RGC, art. 62'
      },
      {
        id: 'pr-41',
        es: 'En un estrechamiento sin señalizar se encuentran una motocicleta y un turismo y no se sabe quién entró primero. ¿Quién debe retroceder?',
        tr: { ru: 'В узком месте без знаков встретились мотоцикл и легковая, и неясно, кто въехал первым. Кто сдаёт назад?', en: 'A motorbike and a car meet at an unmarked narrowing and it’s unclear who entered first. Who must reverse?' },
        options: [
          { es: 'La motocicleta.', ru: 'Мотоцикл.', en: 'The motorbike.' },
          { es: 'El turismo.', ru: 'Легковая.', en: 'The car.' },
          { es: 'El que circule por la izquierda.', ru: 'Тот, кто слева.', en: 'Whoever is on the left.' }
        ],
        answer: 0,
        explain: { ru: 'Мотоциклы, мопеды и велосипеды — в самом конце списка (10), легковые — 7-е. Уступает мотоцикл.', en: 'Motorbikes, mopeds and bicycles are last on the list (10); cars are 7th. The motorbike gives way.' },
        hint: { ru: 'Мотоциклу развернуться и сдать назад проще всех.', en: 'A motorbike is the easiest to turn round or back up.' },
        ref: 'RGC, art. 62'
      },
      {
        id: 'pr-42',
        es: 'Dos turismos se encuentran en un estrechamiento sin señalizar y no se sabe quién entró primero. ¿Quién tiene preferencia?',
        tr: { ru: 'Две легковые встретились в узком месте без знаков, неясно, кто въехал первым. У кого приоритет?', en: 'Two cars meet at an unmarked narrowing and it’s unclear who entered first. Who has priority?' },
        options: [
          { es: 'El que tendría que dar marcha atrás mayor distancia.', ru: 'У того, кому пришлось бы дольше сдавать назад.', en: 'The one who would have to reverse further.' },
          { es: 'El que tendría que dar marcha atrás menor distancia.', ru: 'У того, кому сдавать назад меньше.', en: 'The one who would have to reverse less.' },
          { es: 'El que circula hacia la derecha.', ru: 'У того, кто едет вправо.', en: 'The one heading right.' }
        ],
        answer: 0,
        explain: { ru: 'У машин одного типа едет та, которой пришлось бы сдавать назад дальше. При равенстве — более широкая, длинная или тяжёлая.', en: 'Between vehicles of the same type, the one that would reverse further goes first. If equal — the wider, longer or heavier one.' },
        hint: { ru: 'Кому дальше пятиться — тот и едет.', en: 'Whoever would reverse further goes on.' },
        ref: 'RGC, art. 62'
      },
      {
        id: 'pr-43', img: 'img/dgt/pendiente.png', alt: { ru: 'Крутой узкий спуск: грузовик вниз, легковая вверх', en: 'Steep narrow slope: lorry going down, car going up' },
        es: 'En un tramo estrecho de gran pendiente, sin señalizar, ¿quién tiene preferencia?',
        tr: { ru: 'На узком крутом участке без знаков у кого приоритет?', en: 'On a steep, narrow, unmarked stretch, who has priority?' },
        options: [
          { es: 'El que sube, salvo que tenga más cerca un apartadero.', ru: 'У того, кто поднимается, если только «карман» не ближе к нему.', en: 'The one going up, unless they are closer to a passing place.' },
          { es: 'El que baja, porque le cuesta más frenar.', ru: 'У того, кто спускается: ему труднее тормозить.', en: 'The one going down, because braking is harder.' },
          { es: 'Siempre el vehículo más grande.', ru: 'Всегда у более крупной машины.', en: 'Always the larger vehicle.' }
        ],
        answer: 0,
        explain: { ru: 'На крутом узком участке первым едет тот, кто поднимается, — если только он сам не ближе к «карману» для разъезда. Если сомневаетесь — порядок по типу транспорта.', en: 'On a steep narrow stretch the one going up goes first — unless they are closer to a passing place themselves. If in doubt — the order by vehicle type.' },
        hint: { ru: 'Вверх тяжелее тронуться — уступает тот, кто едет вниз.', en: 'Moving off uphill is harder — the one going down gives way.' },
        ref: 'RGC, art. 63'
      }
    ]
  }
]);
