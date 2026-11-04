// Driving theory (DGT): manoeuvres — RSM rule, overtaking, turning, U-turns, reversing, stopping and parking.
// RGC arts. 72–94, 109–113, 130; DGT «Manual básico», Tema 11.
ECA.data.addDgt([
  {
    id: 'maniobras',
    cats: ['A', 'B'],
    title: { ru: 'Манёвры', en: 'Manoeuvres' },
    summary: {
      ru: 'Правило «зеркало — сигнал — манёвр», обгон, повороты и развороты, задний ход, остановка, стоянка, поломка.',
      en: 'Mirror–signal–manoeuvre, overtaking, turns and U-turns, reversing, stopping, parking, breakdowns.'
    },
    hero: {
      es: '<b>Maniobras</b>',
      sub: { ru: 'Обгон, повороты, задний ход, остановка и стоянка', en: 'Overtaking, turns, reversing, stopping and parking' }
    },
    tabs: [
      {
        id: 'rsm',
        label: { ru: 'З-С-М', en: 'M-S-M' },
        blocks: [
          {
            type: 'rules', heading: { ru: 'Любой манёвр — в три шага', en: 'Every manoeuvre in three steps' },
            items: [
              { color: 'blue', label: { ru: '1', en: '1' }, title: { ru: 'Зеркало', en: 'Mirror' }, es: '<b>R</b>etrovisor: observar', body: { ru: 'Посмотрите в зеркала и прямо (через плечо): можно ли сейчас?', en: 'Check mirrors and directly (over the shoulder): is it safe now?' } },
              { color: 'amber', label: { ru: '2', en: '2' }, title: { ru: 'Сигнал', en: 'Signal' }, es: '<b>S</b>eñal: avisar', body: { ru: 'Покажите манёвр указателем или рукой заранее; выключите указатель сразу после манёвра.', en: 'Signal in good time with the indicator or arm; switch the indicator off right after.' } },
              { color: 'teal', label: { ru: '3', en: '3' }, title: { ru: 'Манёвр', en: 'Manoeuvre' }, es: '<b>M</b>aniobra: hacer', body: { ru: 'Выполните плавно, с подходящей скоростью, никому не мешая.', en: 'Do it smoothly, at a suitable speed, without hindering anyone.' } }
            ]
          },
          {
            type: 'table', heading: { ru: 'Сигналы рукой', en: 'Arm signals' },
            head: [{ ru: 'Манёвр', en: 'Manoeuvre' }, { ru: 'Рука', en: 'Arm' }],
            rows: [
              [{ ru: 'Влево', en: 'Left' }, { ru: 'Горизонтально, ладонь вниз', en: 'Straight out, palm down' }],
              [{ ru: 'Вправо', en: 'Right' }, { ru: 'Согнута вверх, ладонь вверх', en: 'Bent upwards, palm up' }],
              [{ ru: 'Задний ход', en: 'Reversing' }, { ru: 'Горизонтально, ладонь назад', en: 'Straight out, palm back' }],
              [{ ru: 'Торможение', en: 'Braking' }, { ru: 'Короткие взмахи вверх-вниз', en: 'Short up-and-down moves' }]
            ]
          },
          {
            type: 'text',
            body: {
              ru: ['Сигнал рукой, если его хорошо видно, <b>главнее</b> сигнала светом.', 'Въезжая на дорогу с полосы разгона, уступите тем, кто уже едет; если нужно — остановитесь в <b>начале</b> полосы разгона, потом разгонитесь до скорости потока. Едущие должны по возможности облегчить вам въезд.'],
              en: ['An arm signal, if clearly visible, <b>prevails</b> over a light signal.', 'Joining from an acceleration lane, give way to traffic already on the road; if needed stop at the <b>start</b> of the lane, then match the traffic speed. Drivers on the road should make room where possible.']
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>R-S-M = «Retrovisor, Señal, Maniobra»</b>. По-русски: «Посмотрел — показал — поехал».',
              en: '<b>R-S-M = “Retrovisor, Señal, Maniobra”</b>: look, signal, move.'
            }
          }
        ]
      },
      {
        id: 'adelantar',
        label: { ru: 'Обгон', en: 'Overtaking' },
        blocks: [
          {
            type: 'rules', heading: { ru: 'Как обгонять', en: 'How to overtake' },
            items: [
              { color: 'blue', title: { ru: 'Слева', en: 'On the left' }, es: 'por la <b>izquierda</b>', body: { ru: 'Обгоняют слева. Справа — только того, кто явно поворачивает налево или останавливается слева, трамвай посередине дороги, а в городе — где 2+ полосы в одну сторону.', en: 'Overtake on the left. On the right only a vehicle clearly turning or stopping on the left, a tram in the middle of the road, or in town with 2+ lanes one way.' } },
              { color: 'amber', title: { ru: 'Проверить', en: 'Check' }, es: 'espacio, visibilidad y <b>vuelta</b> segura', body: { ru: 'Видно далеко, встречная свободна, никто сзади уже не обгоняет вас, а передний не показал, что сам обгоняет. Можно предупредить светом или (за городом) гудком.', en: 'Clear view, oncoming lane free, nobody behind already overtaking you, and the one ahead hasn’t signalled to pull out. You may warn with lights or (out of town) the horn.' } },
              { color: 'teal', title: { ru: 'Велосипед — 1,5 м', en: 'Bicycle — 1.5 m' }, es: 'al menos <b>1,5 metros</b>', body: { ru: 'Велосипед и мопед обгоняют, полностью перестроившись на соседнюю полосу, с интервалом не меньше 1,5 м — и в городе, и за городом.', en: 'Overtake a bicycle or moped by moving fully into the next lane, leaving at least 1.5 m — in and out of town.' } },
              { color: 'coral', title: { ru: 'Без превышения', en: 'No speeding' }, es: 'sin superar la <b>velocidad máxima</b>', body: { ru: 'Лимит скорости при обгоне не превышают. Закончив, включите правый указатель и вернитесь, никого не подрезая.', en: 'Never exceed the limit while overtaking. When done, signal right and pull back in without cutting anyone up.' } }
            ]
          },
          {
            type: 'rules', heading: { ru: 'Вас обгоняют', en: 'Being overtaken' },
            items: [
              { color: 'purple', title: { ru: 'Не мешать', en: 'Don’t hinder' }, es: 'prohibido <b>aumentar la velocidad</b>', body: { ru: 'Не ускоряйтесь, прижмитесь к правому краю полосы (не на обочину), при опасности сбавьте скорость. Большая машина может показать «обгоняй» рукой или правым поворотником.', en: 'Don’t speed up; keep to the right of your lane (not the shoulder); slow down if danger appears. A large vehicle may signal “go ahead” by arm or right indicator.' } }
            ]
          },
          {
            type: 'rules', heading: { ru: 'Обгон запрещён', en: 'Overtaking is banned' },
            items: [
              { color: 'coral', title: { ru: 'Не видно', en: 'No view' }, es: 'curvas y <b>cambios de rasante</b> sin visibilidad', body: { ru: 'Поворот или вершина подъёма без обзора, туман, сильный дождь, слепит солнце — если надо выезжать на встречку.', en: 'Blind bends or hill crests, fog, heavy rain, low sun — when you’d have to use the oncoming lane.' } },
              { color: 'coral', title: { ru: 'Переходы и переезды', en: 'Crossings' }, es: 'pasos de <b>peatones</b>, para ciclistas y a <b>nivel</b>', body: { ru: 'На них и рядом с ними (двухколёсные можно обгонять при обзоре).', en: 'On them and near them (two-wheelers may be overtaken with a clear view).' } },
              { color: 'coral', title: { ru: 'Перекрёстки', en: 'Junctions' }, es: 'en las <b>intersecciones</b> y cerca', body: { ru: 'Кроме: кольца, обгона справа, обгона двухколёсного, когда вы на главной.', en: 'Except: roundabouts, overtaking on the right, overtaking a two-wheeler, when you’re on the priority road.' } },
              { color: 'coral', title: { ru: 'Туннель с двусторонним', en: 'Two-way tunnel' }, es: '<b>túneles</b> de doble sentido con un carril', body: { ru: 'Если в вашем направлении одна полоса.', en: 'If there is one lane in your direction.' } }
            ]
          },
          {
            type: 'text',
            body: {
              ru: 'Не считается обгоном (и разрешено): ехать быстрее в соседней полосе в пробке, на полосе разгона или торможения, по выделенной полосе (автобус), объезд стоящей машины или препятствия.',
              en: 'Not counted as overtaking (and allowed): moving faster in another lane in a jam, on an acceleration or deceleration lane, in a reserved lane (bus), passing a stopped vehicle or obstacle.'
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: ['<b>«Не вижу — не обгоняю».</b>', '<b>Полтора метра — длина вытянутой руки и ещё полметра</b>: столько до велосипедиста.'],
              en: ['<b>“Can’t see — don’t pass.”</b>', '<b>One and a half metres — an arm’s length and a bit more</b>: that’s the gap to a cyclist.']
            }
          }
        ]
      },
      {
        id: 'giros',
        label: { ru: 'Повороты', en: 'Turns' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'blue', title: { ru: 'Направо', en: 'Right turn' }, es: 'lo más cerca posible del <b>borde derecho</b>', body: { ru: 'Прижмитесь к правому краю.', en: 'Keep as close as possible to the right edge.' } },
              { color: 'amber', title: { ru: 'Налево', en: 'Left turn' }, es: 'junto a la <b>línea central</b>; dejar el centro del cruce a la izquierda', body: { ru: 'На двусторонней дороге — у осевой; на односторонней — у левого края; на трёхполосной — в средней полосе. Поворачивайте, оставляя центр перекрёстка слева, не по диагонали.', en: 'On a two-way road — by the centre line; one-way — by the left edge; three-lane — in the middle lane. Turn leaving the centre of the junction on your left, not diagonally.' } },
              { color: 'teal', title: { ru: 'Разворот', en: 'U-turn' }, es: '<b>cambio de sentido</b> en un solo giro', body: { ru: 'Одним движением, без заднего хода. Если мешаете — остановитесь справа на обочине и подождите. Лучше на кольце или «ракетке».', en: 'In one move, without reversing. If you’d hinder others — wait on the right shoulder. Best at a roundabout or turning loop.' } },
              { color: 'coral', title: { ru: 'Разворот запрещён', en: 'No U-turns' }, es: 'curvas, túneles, pasos a nivel, <b>autopistas</b>', body: { ru: 'Повороты и вершины без обзора, туннели, переезды, автомагистрали (кроме специальных мест), односторонние дороги, там, где запрещён обгон.', en: 'Blind bends and crests, tunnels, level crossings, motorways (except designated places), one-way roads, where overtaking is banned.' } },
              { color: 'purple', title: { ru: 'Задний ход', en: 'Reversing' }, es: 'máximo <b>15 metros</b>, sin invadir un cruce', body: { ru: 'Только для парковки или когда иначе не выехать; не больше 15 м и не въезжая задом на перекрёсток. На автомагистрали — запрещён всегда.', en: 'Only to park or when there’s no other way out; at most 15 m and never reversing into a junction. Always banned on motorways.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: ['<b>Налево — центр перекрёстка слева от вас</b>, как будто объезжаете невидимую клумбу.', '<b>Задом — не больше 15 м</b>: примерно три длины машины.'],
              en: ['<b>Turning left — keep the junction centre on your left</b>, as if driving round an invisible flowerbed.', '<b>Reverse no more than 15 m</b>: about three car lengths.']
            }
          }
        ]
      },
      {
        id: 'parar',
        label: { ru: 'Стоянка', en: 'Parking' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'blue', title: { ru: 'Остановка', en: 'Stopping' }, es: '<b>parada</b>: menos de 2 minutos', body: { ru: 'До 2 минут, водитель не уходит.', en: 'Under 2 minutes, the driver stays with the vehicle.' } },
              { color: 'teal', title: { ru: 'Стоянка', en: 'Parking' }, es: '<b>estacionamiento</b>: más de 2 minutos', body: { ru: 'Больше 2 минут или водитель ушёл.', en: 'Over 2 minutes or the driver has left.' } },
              { color: 'amber', title: { ru: 'Где ставить', en: 'Where' }, es: 'a la <b>derecha</b>, paralelo al bordillo', body: { ru: 'За городом — справа, вне обочины по возможности. На двусторонней улице — справа, на односторонней — справа или слева. Параллельно краю.', en: 'Out of town — on the right, off the shoulder where possible. Two-way street — right; one-way — either side. Parallel to the edge.' } },
              { color: 'purple', title: { ru: 'Уходя', en: 'Leaving the car' }, es: 'motor parado, <b>freno de mano</b>, marcha', body: { ru: 'Заглушить, ручник; на подъёме — первая передача, на спуске — задняя, автомат — «P». Колесо к бордюру: на подъёме — от бордюра, на спуске — к бордюру.', en: 'Engine off, handbrake; uphill — first gear, downhill — reverse, automatic — “P”. Wheels: uphill turned away from the kerb, downhill towards it.' } }
            ]
          },
          {
            type: 'table', heading: { ru: 'Где нельзя', en: 'Where not' },
            head: [{ ru: 'Нельзя остановиться и стоять', en: 'No stopping or parking' }, { ru: 'Остановиться можно, стоять — нет', en: 'Stop OK, no parking' }],
            rows: [
              [{ ru: 'Повороты и вершины без обзора', en: 'Blind bends and crests' }, { ru: 'Зона погрузки (в её часы)', en: 'Loading bay (in its hours)' }],
              [{ ru: 'Туннели, переезды, переходы', en: 'Tunnels, crossings' }, { ru: 'Перед въездом во двор (vado)', en: 'In front of a driveway (vado)' }],
              [{ ru: 'Полосы для автобусов, такси, вело', en: 'Bus, taxi, cycle lanes' }, { ru: 'Во втором ряду', en: 'Double parking' }],
              [{ ru: 'Перекрёстки, рельсы трамвая', en: 'Junctions, tram rails' }, { ru: 'Платная зона без билета', en: 'Paid zone without ticket' }],
              [{ ru: 'Автомагистраль (кроме зон отдыха)', en: 'Motorway (except rest areas)' }, { ru: 'Остановка автобуса', en: 'Bus stop' }],
              [{ ru: 'Места для инвалидов', en: 'Disabled spaces' }, { ru: '—', en: '—' }]
            ]
          },
          {
            type: 'text',
            body: {
              ru: 'Опасно и запрещено ставить машину так, чтобы до встречной стороны или сплошной оставалось <b>меньше 3 м</b>, закрывать знаки, мешать выехать другим или пройти людям.',
              en: 'It is dangerous and banned to leave <b>less than 3 m</b> to the other side or the solid line, to hide signs, or to block others from leaving or people from passing.'
            }
          },
          {
            type: 'rules', heading: { ru: 'Поломка на дороге', en: 'Breakdown on the road' },
            items: [
              { color: 'coral', title: { ru: 'Свет', en: 'Lights' }, es: 'luces de <b>emergencia</b> y de posición', body: { ru: 'Аварийка; ночью или при плохой видимости — ещё и габариты.', en: 'Hazards; at night or in poor visibility, sidelights too.' } },
              { color: 'amber', title: { ru: 'Маячок V-16', en: 'V-16 beacon' }, es: 'señal <b>V-16</b> conectada en el techo', body: { ru: 'С 2026 года обязателен подключённый жёлтый маячок V-16 на крыше; треугольники его больше не заменяют.', en: 'Since 2026 a connected amber V-16 beacon on the roof is mandatory; warning triangles no longer replace it.' } },
              { color: 'teal', title: { ru: 'Люди', en: 'People' }, es: '<b>chaleco</b> reflectante y lugar seguro', body: { ru: 'Надеть светоотражающий жилет до выхода, выйти и уйти в безопасное место. Если безопасного места нет — сидеть в машине пристёгнутыми.', en: 'Put on a reflective vest before getting out and move to a safe place. If there is none, stay inside with belts on.' } },
              { color: 'blue', title: { ru: 'Буксир', en: 'Towing' }, es: 'solo <b>vehículos de auxilio</b>', body: { ru: 'Сломанную машину буксирует только эвакуатор/техпомощь, а не любая машина.', en: 'A broken-down car is towed only by a recovery vehicle, not by any car.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: ['<b>Остановка — «две минуты и я рядом»</b>, всё остальное — стоянка.', '<b>На подъёме — первая, на спуске — задняя</b>: передача «держит» машину против уклона.'],
              en: ['<b>Stopping — “two minutes and I’m right here”</b>; anything else is parking.', '<b>Uphill — first gear, downhill — reverse</b>: the gear holds the car against the slope.']
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
              ['el retrovisor', { ru: 'зеркало заднего вида', en: 'mirror' }],
              ['el intermitente', { ru: 'указатель поворота', en: 'indicator' }],
              ['adelantar', { ru: 'обгонять', en: 'to overtake' }],
              ['el adelantamiento', { ru: 'обгон', en: 'overtaking' }],
              ['el cambio de rasante', { ru: 'вершина подъёма', en: 'hill crest' }],
              ['el cambio de dirección', { ru: 'поворот', en: 'turn' }],
              ['el cambio de sentido', { ru: 'разворот', en: 'U-turn' }],
              ['la raqueta', { ru: 'петля для разворота', en: 'turning loop' }],
              ['la marcha atrás', { ru: 'задний ход', en: 'reverse' }],
              ['el carril de aceleración', { ru: 'полоса разгона', en: 'acceleration lane' }],
              ['incorporarse', { ru: 'выехать в поток', en: 'to join traffic' }],
              ['la parada', { ru: 'остановка', en: 'stopping' }],
              ['estacionar / aparcar', { ru: 'ставить на стоянку', en: 'to park' }],
              ['la doble fila', { ru: 'второй ряд', en: 'double parking' }],
              ['el vado', { ru: 'въезд во двор/гараж', en: 'driveway' }],
              ['la carga y descarga', { ru: 'погрузка-разгрузка', en: 'loading and unloading' }],
              ['el freno de estacionamiento', { ru: 'стояночный тормоз', en: 'handbrake' }],
              ['el calzo', { ru: 'противооткатный упор', en: 'wheel chock' }],
              ['la avería', { ru: 'поломка', en: 'breakdown' }],
              ['el chaleco reflectante', { ru: 'светоотражающий жилет', en: 'reflective vest' }],
              ['la grúa', { ru: 'эвакуатор', en: 'tow truck' }]
            ]
          }
        ]
      }
    ],
    questions: [
      {
        id: 'ma-01',
        es: '¿Qué significan las siglas R.S.M. al hacer una maniobra?',
        tr: { ru: 'Что означает R.S.M. при выполнении манёвра?', en: 'What do the letters R.S.M. mean when making a manoeuvre?' },
        options: [
          { es: 'Retrovisor, Señal, Maniobra.', ru: 'Зеркало, сигнал, манёвр.', en: 'Mirror, signal, manoeuvre.' },
          { es: 'Reducir, Señalizar, Mirar.', ru: 'Сбавить, показать, посмотреть.', en: 'Reduce, signal, look.' },
          { es: 'Revisar, Seguir, Mover.', ru: 'Проверить, следовать, двигаться.', en: 'Review, follow, move.' }
        ],
        answer: 0,
        explain: { ru: 'Правило безопасности любого манёвра: сначала посмотреть (зеркала и напрямую), потом подать сигнал, потом выполнить манёвр.', en: 'The safety rule for any manoeuvre: first look (mirrors and directly), then signal, then manoeuvre.' },
        hint: { ru: 'Посмотрел — показал — поехал.', en: 'Look — signal — go.' },
        ref: 'DGT, Manual básico, tema 11'
      },
      {
        id: 'ma-02',
        es: '¿Cómo se indica con el brazo que se va a girar a la izquierda?',
        tr: { ru: 'Как показать рукой поворот налево?', en: 'How do you signal a left turn by arm?' },
        options: [
          { es: 'Con el brazo extendido horizontalmente y la palma hacia abajo.', ru: 'Рука вытянута горизонтально, ладонь вниз.', en: 'Arm straight out, palm down.' },
          { es: 'Con el brazo doblado hacia arriba.', ru: 'Рука согнута вверх.', en: 'Arm bent upwards.' },
          { es: 'Moviendo el brazo de arriba abajo.', ru: 'Взмахи рукой вверх-вниз.', en: 'Moving the arm up and down.' }
        ],
        answer: 0,
        explain: { ru: 'Налево — рука горизонтально, ладонь вниз. Направо — рука согнута вверх. Торможение — короткие взмахи вверх-вниз.', en: 'Left — arm straight out, palm down. Right — arm bent upwards. Braking — short up-and-down moves.' },
        hint: { ru: 'Водитель сидит слева: прямая рука «показывает» налево.', en: 'The driver sits on the left: a straight arm points left.' },
        ref: 'RGC, art. 109'
      },
      {
        id: 'ma-03',
        es: 'Si señaliza una maniobra con el brazo y con el intermitente a la vez, ¿cuál prevalece?',
        tr: { ru: 'Если вы показываете манёвр и рукой, и указателем, что главнее?', en: 'If you signal with both your arm and the indicator, which prevails?' },
        options: [
          { es: 'La del brazo, si es correcta y se ve bien.', ru: 'Рука, если сигнал правильный и хорошо виден.', en: 'The arm, if correct and clearly visible.' },
          { es: 'La del intermitente.', ru: 'Указатель.', en: 'The indicator.' },
          { es: 'Ninguna; se contradicen.', ru: 'Ни один: они противоречат.', en: 'Neither; they contradict.' }
        ],
        answer: 0,
        explain: { ru: 'Сигнал рукой, если его хорошо видно и он правильный, имеет преимущество перед световым.', en: 'A correct and clearly visible arm signal prevails over a light signal.' },
        hint: { ru: 'Человек главнее лампочки.', en: 'A person beats a bulb.' },
        ref: 'RGC, art. 109'
      },
      {
        id: 'ma-04',
        es: '¿Cuándo debe apagar el intermitente?',
        tr: { ru: 'Когда нужно выключить указатель поворота?', en: 'When should you switch off the indicator?' },
        options: [
          { es: 'En cuanto termine la maniobra.', ru: 'Сразу как закончили манёвр.', en: 'As soon as the manoeuvre is finished.' },
          { es: 'Cuando empiece la maniobra.', ru: 'Когда начали манёвр.', en: 'When starting the manoeuvre.' },
          { es: 'Unos 100 metros después de la maniobra.', ru: 'Метров через 100 после манёвра.', en: 'About 100 m after the manoeuvre.' }
        ],
        answer: 0,
        explain: { ru: 'Указатель включён весь манёвр и выключается сразу после него, чтобы не вводить других в заблуждение.', en: 'The indicator stays on throughout and goes off right after, so as not to mislead others.' },
        hint: { ru: 'Забытый поворотник — ложный сигнал.', en: 'A forgotten indicator is a false signal.' },
        ref: 'RGC, art. 109'
      },
      {
        id: 'ma-05',
        es: 'Está en el carril de aceleración y por la vía principal se acerca un vehículo. ¿Qué debe hacer si no puede incorporarse sin peligro?',
        tr: { ru: 'Вы на полосе разгона, по основной дороге приближается машина. Что делать, если безопасно влиться нельзя?', en: 'You are on an acceleration lane and a vehicle approaches on the main road. What if you can’t join safely?' },
        options: [
          { es: 'Detenerse al principio del carril de aceleración y esperar.', ru: 'Остановиться в начале полосы разгона и подождать.', en: 'Stop at the start of the acceleration lane and wait.' },
          { es: 'Detenerse al final del carril de aceleración.', ru: 'Остановиться в конце полосы разгона.', en: 'Stop at the end of the acceleration lane.' },
          { es: 'Entrar, porque el otro debe dejarle paso.', ru: 'Въехать: другой обязан уступить.', en: 'Join anyway, the other must let you in.' }
        ],
        answer: 0,
        explain: { ru: 'Въезжающий уступает. Если надо ждать — в начале полосы разгона, чтобы потом успеть набрать скорость потока.', en: 'The joining driver gives way. If you must wait, do it at the start of the lane so you can then build up to traffic speed.' },
        hint: { ru: 'Ждать в начале — значит иметь «разбег».', en: 'Wait at the start — keep your run-up.' },
        ref: 'RGC, art. 72'
      },
      {
        id: 'ma-06',
        es: 'Como norma general, ¿por qué lado se adelanta?',
        tr: { ru: 'С какой стороны, как правило, обгоняют?', en: 'As a rule, on which side do you overtake?' },
        options: [
          { es: 'Por la izquierda.', ru: 'Слева.', en: 'On the left.' },
          { es: 'Por la derecha.', ru: 'Справа.', en: 'On the right.' },
          { es: 'Por cualquier lado.', ru: 'С любой стороны.', en: 'Either side.' }
        ],
        answer: 0,
        explain: { ru: 'Обгоняют слева. Справа — только в исключениях: передний явно поворачивает налево, трамвай посередине, в городе 2+ полосы в одну сторону.', en: 'You overtake on the left. On the right only in exceptions: the vehicle ahead clearly turning left, a tram in the middle, 2+ lanes one way in town.' },
        hint: { ru: 'Едем справа — обгоняем слева.', en: 'Drive right — pass left.' },
        ref: 'RGC, art. 82'
      },
      {
        id: 'ma-07',
        es: 'El vehículo de delante indica claramente que va a girar a la izquierda. ¿Por dónde puede adelantarlo?',
        tr: { ru: 'Передняя машина явно показывает поворот налево. С какой стороны можно её обогнать?', en: 'The vehicle ahead clearly signals a left turn. Where may you overtake it?' },
        options: [
          { es: 'Por la derecha.', ru: 'Справа.', en: 'On the right.' },
          { es: 'Por la izquierda.', ru: 'Слева.', en: 'On the left.' },
          { es: 'No puede adelantarlo.', ru: 'Обгонять нельзя.', en: 'You may not overtake it.' }
        ],
        answer: 0,
        explain: { ru: 'Того, кто поворачивает налево или останавливается слева, обгоняют справа.', en: 'A vehicle turning or stopping on the left is overtaken on the right.' },
        hint: { ru: 'Он уходит влево — ты объезжаешь справа.', en: 'He goes left — you pass right.' },
        ref: 'RGC, art. 82'
      },
      {
        id: 'ma-08',
        es: 'Para adelantar a una bicicleta, ¿qué separación lateral mínima debe dejar?',
        tr: { ru: 'Какой минимальный боковой интервал нужен при обгоне велосипеда?', en: 'What minimum side gap must you leave when overtaking a bicycle?' },
        options: [
          { es: '1,5 metros, cambiando por completo de carril.', ru: '1,5 м, полностью перестроившись.', en: '1.5 m, moving fully into the other lane.' },
          { es: '1 metro.', ru: '1 м.', en: '1 m.' },
          { es: '50 centímetros.', ru: '50 см.', en: '50 cm.' }
        ],
        answer: 0,
        explain: { ru: 'Велосипеды и мопеды обгоняют с интервалом не меньше 1,5 м, полностью заняв соседнюю полосу, и в городе, и за городом.', en: 'Bicycles and mopeds are overtaken with at least 1.5 m, fully occupying the next lane, in town and out of town.' },
        hint: { ru: 'Полтора метра и целая полоса.', en: 'One and a half metres and a whole lane.' },
        ref: 'RGC, art. 85'
      },
      {
        id: 'ma-09',
        es: '¿Se puede adelantar a una bicicleta en un tramo con línea continua?',
        tr: { ru: 'Можно ли обогнать велосипед там, где сплошная линия?', en: 'May you overtake a bicycle where there is a solid line?' },
        options: [
          { es: 'Sí, si se puede hacer sin peligro y con la separación debida, aunque invada el carril contrario.', ru: 'Да, если безопасно и с нужным интервалом, даже заехав на встречную.', en: 'Yes, if safe and with the proper gap, even using the oncoming lane.' },
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' },
          { es: 'Solo dentro de poblado.', ru: 'Только в городе.', en: 'Only in town.' }
        ],
        answer: 0,
        explain: { ru: 'Велосипед можно обогнать даже через сплошную, если это безопасно, с интервалом 1,5 м и без помех встречным.', en: 'A bicycle may be overtaken even across a solid line if safe, with 1.5 m and without hindering oncoming traffic.' },
        hint: { ru: 'Велосипед — исключение даже из сплошной.', en: 'A bicycle is an exception even to the solid line.' },
        ref: 'RGC, art. 88'
      },
      {
        id: 'ma-10',
        es: 'Al adelantar, ¿puede superar la velocidad máxima de la vía?',
        tr: { ru: 'Можно ли при обгоне превышать лимит скорости дороги?', en: 'When overtaking, may you exceed the road’s speed limit?' },
        options: [
          { es: 'No.', ru: 'Нет.', en: 'No.' },
          { es: 'Sí, en 20 km/h.', ru: 'Да, на 20 км/ч.', en: 'Yes, by 20 km/h.' },
          { es: 'Sí, si no hay tráfico.', ru: 'Да, если нет машин.', en: 'Yes, if there is no traffic.' }
        ],
        answer: 0,
        explain: { ru: 'При обгоне нельзя превышать лимит (прежний «бонус» +20 км/ч отменён в 2019 году).', en: 'You may not exceed the limit when overtaking (the old +20 km/h allowance was abolished in 2019).' },
        hint: { ru: 'Лимит есть лимит.', en: 'A limit is a limit.' },
        ref: 'RGC, art. 48'
      },
      {
        id: 'ma-11',
        es: 'Otro vehículo le está adelantando. ¿Qué debe hacer?',
        tr: { ru: 'Вас обгоняют. Что делать?', en: 'Another vehicle is overtaking you. What should you do?' },
        options: [
          { es: 'Ceñirse al borde derecho del carril y no aumentar la velocidad.', ru: 'Прижаться к правому краю полосы и не ускоряться.', en: 'Keep to the right of your lane and not speed up.' },
          { es: 'Acelerar para que termine antes.', ru: 'Ускориться, чтобы он быстрее закончил.', en: 'Speed up so he finishes sooner.' },
          { es: 'Salir al arcén.', ru: 'Съехать на обочину.', en: 'Move onto the shoulder.' }
        ],
        answer: 0,
        explain: { ru: 'Обгоняемый не ускоряется, держится правее в своей полосе (не на обочине), при опасности сбавляет скорость и даёт вернуться.', en: 'The overtaken driver doesn’t speed up, keeps right in the lane (not on the shoulder), slows down if needed and lets the other pull in.' },
        hint: { ru: 'Тебя обгоняют — помоги, а не соревнуйся.', en: 'Being overtaken — help, don’t race.' },
        ref: 'RGC, art. 86'
      },
      {
        id: 'ma-12',
        es: '¿Dónde está prohibido adelantar si hay que invadir el sentido contrario?',
        tr: { ru: 'Где запрещён обгон с выездом на встречную?', en: 'Where is overtaking banned if you must use the oncoming lane?' },
        options: [
          { es: 'En curvas y cambios de rasante de visibilidad reducida.', ru: 'В поворотах и на вершинах подъёма с плохим обзором.', en: 'On bends and hill crests with poor visibility.' },
          { es: 'En rectas con buena visibilidad.', ru: 'На прямых с хорошим обзором.', en: 'On straights with good visibility.' },
          { es: 'En autovías.', ru: 'На автовиях.', en: 'On autovías.' }
        ],
        answer: 0,
        explain: { ru: 'Обгон с выездом на встречку запрещён там, где не видно дорогу впереди: поворот, вершина подъёма, туман, ослепление.', en: 'Overtaking into the oncoming lane is banned where you can’t see ahead: bends, crests, fog, dazzle.' },
        hint: { ru: 'Не вижу — не обгоняю.', en: 'Can’t see — don’t pass.' },
        ref: 'RGC, art. 87'
      },
      {
        id: 'ma-13',
        es: '¿Se puede adelantar en un paso de peatones señalizado?',
        tr: { ru: 'Можно ли обгонять на обозначенном пешеходном переходе?', en: 'May you overtake on a marked pedestrian crossing?' },
        options: [
          { es: 'No, salvo a vehículos de dos ruedas o a muy baja velocidad para poder detenerse.', ru: 'Нет, кроме двухколёсных или на очень малой скорости, чтобы успеть остановиться.', en: 'No, except two-wheelers or at very low speed so you can stop.' },
          { es: 'Sí, siempre que no haya peatones.', ru: 'Да, если нет пешеходов.', en: 'Yes, if there are no pedestrians.' },
          { es: 'Sí, si se toca el claxon.', ru: 'Да, если посигналить.', en: 'Yes, if you sound the horn.' }
        ],
        answer: 0,
        explain: { ru: 'На пешеходных переходах и рядом с ними обгон запрещён; пособие DGT допускает исключения для двухколёсных и движения так медленно, чтобы остановиться перед пешеходом.', en: 'Overtaking on and near pedestrian crossings is banned; the DGT manual allows exceptions for two-wheelers and moving slowly enough to stop for a pedestrian.' },
        hint: { ru: '«Зебра» — не место для обгона.', en: 'A zebra is no place to overtake.' },
        ref: 'RGC, art. 87'
      },
      {
        id: 'ma-14',
        es: '¿Se puede adelantar en una intersección?',
        tr: { ru: 'Можно ли обгонять на перекрёстке?', en: 'May you overtake at a junction?' },
        options: [
          { es: 'Solo en casos como glorietas, por la derecha, a dos ruedas o si tiene prioridad señalizada.', ru: 'Только в отдельных случаях: кольцо, справа, двухколёсного или если вы на главной.', en: 'Only in cases like roundabouts, on the right, two-wheelers, or with signed priority.' },
          { es: 'Sí, siempre.', ru: 'Да, всегда.', en: 'Yes, always.' },
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' }
        ],
        answer: 0,
        explain: { ru: 'На перекрёстках и рядом обгон запрещён, кроме: кольца, обгона справа, обгона двухколёсного, когда у вас приоритет по знакам.', en: 'Overtaking at or near junctions is banned except: roundabouts, overtaking on the right, two-wheelers, when you have signed priority.' },
        hint: { ru: 'Перекрёсток — нельзя, кроме «кольцо, справа, двухколёсный, главная».', en: 'Junction — no, except “roundabout, right side, two-wheeler, priority road”.' },
        ref: 'RGC, art. 87'
      },
      {
        id: 'ma-15',
        es: '¿Es un adelantamiento pasar a un vehículo detenido por avería?',
        tr: { ru: 'Объехать машину, стоящую из-за поломки, — это обгон?', en: 'Is passing a vehicle stopped by a breakdown an overtake?' },
        options: [
          { es: 'No, se considera rebasar un obstáculo.', ru: 'Нет, это объезд препятствия.', en: 'No, it counts as passing an obstacle.' },
          { es: 'Sí, y se aplican todas las prohibiciones.', ru: 'Да, и все запреты обгона действуют.', en: 'Yes, and all overtaking bans apply.' },
          { es: 'Solo si es un camión.', ru: 'Только если это грузовик.', en: 'Only if it is a lorry.' }
        ],
        answer: 0,
        explain: { ru: 'Объезд стоящей машины или препятствия обгоном не считается; это можно делать даже там, где обгон запрещён, если безопасно.', en: 'Passing a stopped vehicle or obstacle is not overtaking; it’s allowed even where overtaking is banned, if safe.' },
        hint: { ru: 'Обгоняют того, кто едет.', en: 'You overtake things that move.' },
        ref: 'RGC, art. 88'
      },
      {
        id: 'ma-16',
        es: 'En una calle de doble sentido, ¿dónde debe colocarse para girar a la izquierda?',
        tr: { ru: 'Где встать для поворота налево на улице с двусторонним движением?', en: 'On a two-way street, where should you position to turn left?' },
        options: [
          { es: 'Junto a la línea que separa los sentidos.', ru: 'У линии, разделяющей встречные потоки.', en: 'Next to the line separating the directions.' },
          { es: 'Junto al borde derecho.', ru: 'У правого края.', en: 'Next to the right edge.' },
          { es: 'En el centro de su carril.', ru: 'В середине своей полосы.', en: 'In the middle of your lane.' }
        ],
        answer: 0,
        explain: { ru: 'Для левого поворота на двусторонней дороге держитесь у осевой (не заезжая на встречку); на односторонней — у левого края.', en: 'For a left turn on a two-way road keep by the centre line (not crossing it); on a one-way road — by the left edge.' },
        hint: { ru: 'Налево — ближе к левому краю «своей» дороги.', en: 'Left turn — hug the left side of your own road.' },
        ref: 'RGC, art. 75'
      },
      {
        id: 'ma-17',
        es: 'Al girar a la izquierda en una intersección, ¿cómo debe hacerlo?',
        tr: { ru: 'Как поворачивать налево на перекрёстке?', en: 'How should you turn left at a junction?' },
        options: [
          { es: 'Dejando el centro de la intersección a su izquierda.', ru: 'Оставляя центр перекрёстка слева от себя.', en: 'Leaving the centre of the junction on your left.' },
          { es: 'Cortando en diagonal para ganar tiempo.', ru: 'Срезая по диагонали.', en: 'Cutting across diagonally.' },
          { es: 'Pasando por la derecha del centro.', ru: 'Проезжая справа от центра.', en: 'Passing to the right of the centre.' }
        ],
        answer: 0,
        explain: { ru: 'При левом повороте центр перекрёстка остаётся слева от вас; срезать по диагонали нельзя.', en: 'Turning left, keep the junction centre on your left; never cut diagonally.' },
        hint: { ru: 'Объезжай невидимую клумбу в центре.', en: 'Drive round an invisible flowerbed in the middle.' },
        ref: 'RGC, art. 75'
      },
      {
        id: 'ma-18',
        es: '¿Cómo debe hacerse un cambio de sentido?',
        tr: { ru: 'Как выполнять разворот?', en: 'How should a U-turn be made?' },
        options: [
          { es: 'En un solo giro, sin usar la marcha atrás salvo que sea imprescindible.', ru: 'Одним движением, без заднего хода, если без него можно обойтись.', en: 'In one move, without reversing unless essential.' },
          { es: 'Con varias maniobras de marcha atrás.', ru: 'В несколько приёмов с задним ходом.', en: 'With several reversing moves.' },
          { es: 'Siempre desde el arcén izquierdo.', ru: 'Всегда с левой обочины.', en: 'Always from the left shoulder.' }
        ],
        answer: 0,
        explain: { ru: 'Разворот — одним движением, начиная от осевой (или от правого края, если иначе нельзя). Задний ход — только если по-другому никак.', en: 'A U-turn is one move, starting by the centre line (or the right edge if not possible). Reversing only if there’s no other way.' },
        hint: { ru: 'Разворот — «одной дугой».', en: 'A U-turn is “one arc”.' },
        ref: 'RGC, art. 78'
      },
      {
        id: 'ma-19',
        es: '¿En cuál de estos lugares está prohibido cambiar de sentido?',
        tr: { ru: 'Где из перечисленного разворот запрещён?', en: 'Where of these is a U-turn banned?' },
        options: [
          { es: 'En un túnel.', ru: 'В туннеле.', en: 'In a tunnel.' },
          { es: 'En una glorieta.', ru: 'На кольце.', en: 'At a roundabout.' },
          { es: 'En una raqueta señalizada.', ru: 'На обозначенной петле для разворота.', en: 'At a marked turning loop.' }
        ],
        answer: 0,
        explain: { ru: 'Разворот запрещён в туннелях, на переездах, в поворотах и на вершинах без обзора, на автомагистралях (кроме спецмест), на односторонних дорогах и там, где запрещён обгон.', en: 'U-turns are banned in tunnels, at level crossings, on blind bends and crests, on motorways (except designated spots), on one-way roads and where overtaking is banned.' },
        hint: { ru: 'Где нельзя обгонять — нельзя и разворачиваться.', en: 'Where you can’t overtake, you can’t U-turn.' },
        ref: 'RGC, art. 79'
      },
      {
        id: 'ma-20',
        es: 'Quiere cambiar de sentido en una carretera, pero obligaría a frenar a los que vienen. ¿Qué debe hacer?',
        tr: { ru: 'Вы хотите развернуться на дороге, но заставите других тормозить. Что делать?', en: 'You want to U-turn on a road but would force others to brake. What should you do?' },
        options: [
          { es: 'Salir de la calzada por la derecha y esperar a que sea seguro.', ru: 'Съехать вправо с проезжей части и подождать, пока станет безопасно.', en: 'Pull off to the right and wait until it is safe.' },
          { es: 'Detenerse en el centro de la calzada con el intermitente.', ru: 'Встать посреди дороги с поворотником.', en: 'Stop in the middle of the road with the indicator on.' },
          { es: 'Girar rápido para no molestar.', ru: 'Быстро развернуться, чтобы не мешать.', en: 'Turn quickly so as not to bother anyone.' }
        ],
        answer: 0,
        explain: { ru: 'Если разворот помешает, съезжайте вправо (на обочину) и ждите. Нет места — едьте до удобного места.', en: 'If the U-turn would hinder others, pull onto the right shoulder and wait. No room — carry on to a suitable place.' },
        hint: { ru: 'Разворот налево начинается справа.', en: 'A U-turn left starts from the right.' },
        ref: 'RGC, art. 78'
      },
      {
        id: 'ma-21',
        es: '¿Cuál es la distancia máxima que se puede recorrer marcha atrás?',
        tr: { ru: 'Какое максимальное расстояние можно проехать задним ходом?', en: 'What is the maximum distance you may reverse?' },
        options: [
          { es: '15 metros.', ru: '15 метров.', en: '15 metres.' },
          { es: '50 metros.', ru: '50 метров.', en: '50 metres.' },
          { es: 'No hay límite.', ru: 'Ограничения нет.', en: 'There is no limit.' }
        ],
        answer: 0,
        explain: { ru: 'Задним ходом — не больше 15 м и не въезжая на перекрёсток; только для парковки или когда вперёд никак.', en: 'Reverse no more than 15 m and never into a junction; only to park or when you can’t go forward.' },
        hint: { ru: '15 м — около трёх машин.', en: '15 m — about three cars.' },
        ref: 'RGC, art. 80'
      },
      {
        id: 'ma-22',
        es: '¿Está permitida la marcha atrás en una autovía?',
        tr: { ru: 'Разрешён ли задний ход на автовии?', en: 'Is reversing allowed on an autovía?' },
        options: [
          { es: 'No, está prohibida siempre.', ru: 'Нет, запрещён всегда.', en: 'No, it is always banned.' },
          { es: 'Sí, por el arcén.', ru: 'Да, по обочине.', en: 'Yes, along the shoulder.' },
          { es: 'Sí, si se ha pasado la salida.', ru: 'Да, если проехали съезд.', en: 'Yes, if you missed your exit.' }
        ],
        answer: 0,
        explain: { ru: 'На автописте и автовии задний ход запрещён всегда, даже если проехали съезд.', en: 'Reversing is always banned on autopistas and autovías, even if you missed the exit.' },
        hint: { ru: 'Проехал съезд — едь до следующего.', en: 'Missed the exit — take the next one.' },
        ref: 'RGC, art. 80'
      },
      {
        id: 'ma-23',
        es: '¿Qué diferencia hay entre parada y estacionamiento?',
        tr: { ru: 'Чем остановка отличается от стоянки?', en: 'What is the difference between stopping and parking?' },
        options: [
          { es: 'La parada dura menos de dos minutos y el conductor no abandona el vehículo.', ru: 'Остановка — меньше двух минут, водитель не уходит.', en: 'Stopping lasts under two minutes and the driver stays.' },
          { es: 'La parada dura menos de diez minutos.', ru: 'Остановка — меньше десяти минут.', en: 'Stopping lasts under ten minutes.' },
          { es: 'No hay diferencia.', ru: 'Разницы нет.', en: 'There is no difference.' }
        ],
        answer: 0,
        explain: { ru: 'Остановка — до 2 минут, водитель в машине или рядом. Всё дольше или когда водитель ушёл — стоянка.', en: 'Stopping — up to 2 minutes, driver in or by the car. Longer, or the driver has left — parking.' },
        hint: { ru: 'Две минуты и я рядом.', en: 'Two minutes and I’m right here.' },
        ref: 'RGC, art. 90'
      },
      {
        id: 'ma-24',
        es: 'Fuera de poblado, ¿dónde debe parar o estacionar?',
        tr: { ru: 'Где за городом останавливаться или ставить машину?', en: 'Out of town, where should you stop or park?' },
        options: [
          { es: 'A la derecha, fuera de la calzada y dejando libre el arcén si es posible.', ru: 'Справа, вне проезжей части и, по возможности, не на обочине.', en: 'On the right, off the carriageway and leaving the shoulder free if possible.' },
          { es: 'En el carril izquierdo.', ru: 'На левой полосе.', en: 'In the left lane.' },
          { es: 'En el centro de la calzada.', ru: 'Посреди дороги.', en: 'In the middle of the road.' }
        ],
        answer: 0,
        explain: { ru: 'За городом — справа, вне проезжей части, по возможности оставляя обочину свободной.', en: 'Out of town — on the right, off the carriageway, leaving the shoulder free where possible.' },
        hint: { ru: 'Остановился — освободи дорогу.', en: 'Stopping — clear the road.' },
        ref: 'RGC, art. 90'
      },
      {
        id: 'ma-25',
        es: 'En una calle de sentido único, ¿en qué lado puede estacionar?',
        tr: { ru: 'На улице с односторонним движением с какой стороны можно поставить машину?', en: 'On a one-way street, on which side may you park?' },
        options: [
          { es: 'A la derecha o a la izquierda.', ru: 'Справа или слева.', en: 'On the right or the left.' },
          { es: 'Solo a la derecha.', ru: 'Только справа.', en: 'Only on the right.' },
          { es: 'Solo a la izquierda.', ru: 'Только слева.', en: 'Only on the left.' }
        ],
        answer: 0,
        explain: { ru: 'На односторонней улице можно с обеих сторон (если не запрещено); на двусторонней — только справа.', en: 'On a one-way street either side (unless prohibited); on a two-way street only on the right.' },
        hint: { ru: 'Нет встречных — обе стороны «твои».', en: 'No oncoming traffic — both sides are yours.' },
        ref: 'RGC, art. 91'
      },
      {
        id: 'ma-26',
        es: 'Estaciona un turismo en una calle con pendiente hacia abajo. ¿Qué marcha debe dejar puesta?',
        tr: { ru: 'Вы ставите легковую на улице под уклон вниз. Какую передачу оставить?', en: 'You park a car on a downhill street. Which gear should you leave engaged?' },
        options: [
          { es: 'La marcha atrás.', ru: 'Заднюю.', en: 'Reverse.' },
          { es: 'La primera.', ru: 'Первую.', en: 'First.' },
          { es: 'Punto muerto.', ru: 'Нейтраль.', en: 'Neutral.' }
        ],
        answer: 0,
        explain: { ru: 'Вниз — задняя передача, вверх — первая, автомат — «P». Плюс стояночный тормоз и заглушённый двигатель.', en: 'Downhill — reverse, uphill — first, automatic — “P”. Plus the handbrake and engine off.' },
        hint: { ru: 'Передача «упирается» против уклона.', en: 'The gear pushes against the slope.' },
        ref: 'RGC, art. 92'
      },
      {
        id: 'ma-27',
        es: '¿Dónde está prohibido parar?',
        tr: { ru: 'Где запрещена остановка?', en: 'Where is stopping prohibited?' },
        options: [
          { es: 'En los pasos para peatones.', ru: 'На пешеходных переходах.', en: 'On pedestrian crossings.' },
          { es: 'En doble fila, si el conductor no se baja.', ru: 'Во втором ряду, если водитель не выходит.', en: 'Double-parked, if the driver stays inside.' },
          { es: 'En una zona de carga y descarga.', ru: 'В зоне погрузки-разгрузки.', en: 'In a loading zone.' }
        ],
        answer: 0,
        explain: { ru: 'На переходах, в туннелях, на переездах, в поворотах без обзора, на перекрёстках нельзя даже остановиться. Во втором ряду и в зоне погрузки — запрещена только стоянка.', en: 'On crossings, in tunnels, at level crossings, on blind bends, at junctions you may not even stop. Double-parking and loading zones ban only parking.' },
        hint: { ru: 'Где ходят люди — даже на секунду нельзя.', en: 'Where people walk — not even for a second.' },
        ref: 'RGC, art. 94'
      },
      {
        id: 'ma-28',
        es: '¿Se puede parar o estacionar en una autopista?',
        tr: { ru: 'Можно ли останавливаться или стоять на автописте?', en: 'May you stop or park on a motorway?' },
        options: [
          { es: 'Solo en las áreas de descanso o de servicio.', ru: 'Только на площадках отдыха или обслуживания.', en: 'Only in rest or service areas.' },
          { es: 'Sí, en el arcén.', ru: 'Да, на обочине.', en: 'Yes, on the shoulder.' },
          { es: 'Sí, durante menos de dos minutos.', ru: 'Да, меньше двух минут.', en: 'Yes, for under two minutes.' }
        ],
        answer: 0,
        explain: { ru: 'На автомагистралях остановка и стоянка запрещены, кроме зон отдыха и обслуживания (и вынужденной остановки при поломке).', en: 'Stopping and parking on motorways is banned except in rest and service areas (and forced stops for a breakdown).' },
        hint: { ru: 'Магистраль — только для движения.', en: 'Motorways are for moving.' },
        ref: 'RGC, art. 94'
      },
      {
        id: 'ma-29',
        es: '¿Cuándo es peligroso y está prohibido estacionar en relación con la anchura libre?',
        tr: { ru: 'Когда по ширине оставшейся дороги стоянка опасна и запрещена?', en: 'When is parking dangerous and banned because of the width left free?' },
        options: [
          { es: 'Cuando entre el vehículo y el lado opuesto o una línea continua quedan menos de 3 metros.', ru: 'Когда до противоположной стороны или сплошной остаётся меньше 3 м.', en: 'When less than 3 m remains to the opposite side or a solid line.' },
          { es: 'Cuando quedan menos de 5 metros.', ru: 'Когда остаётся меньше 5 м.', en: 'When less than 5 m remains.' },
          { es: 'Nunca, si se deja el intermitente.', ru: 'Никогда, если включён поворотник.', en: 'Never, if the indicator is on.' }
        ],
        answer: 0,
        explain: { ru: 'Если между машиной и другой стороной (или сплошной) остаётся меньше 3 м, другие не проедут — так ставить нельзя.', en: 'If less than 3 m is left between your car and the other side (or a solid line), others can’t pass — you may not park there.' },
        hint: { ru: 'Три метра — ширина одной машины с запасом.', en: 'Three metres — one vehicle’s width with room to spare.' },
        ref: 'RGC, art. 91'
      },
      {
        id: 'ma-30',
        es: 'Su turismo se avería en una autovía y debe quedarse parado. ¿Qué dispositivo es obligatorio colocar desde 2026?',
        tr: { ru: 'Ваша машина сломалась на автовии и стоит. Какое устройство с 2026 года обязательно установить?', en: 'Your car breaks down on an autovía and must stay. Which device is mandatory since 2026?' },
        options: [
          { es: 'La señal luminosa V-16 conectada, en el techo.', ru: 'Подключённый маячок V-16 на крыше.', en: 'The connected V-16 beacon on the roof.' },
          { es: 'Dos triángulos a 50 metros.', ru: 'Два треугольника в 50 м.', en: 'Two triangles 50 m away.' },
          { es: 'Ninguno, basta con las luces de emergencia.', ru: 'Никакое, хватит аварийки.', en: 'None, hazard lights are enough.' }
        ],
        answer: 0,
        explain: { ru: 'С 1 января 2026 года аварийный знак-треугольник заменён подключённым маячком V-16, который ставят на крышу, не выходя на дорогу. Плюс аварийка и жилет.', en: 'Since 1 January 2026 warning triangles are replaced by a connected V-16 beacon placed on the roof without walking on the road. Plus hazards and a vest.' },
        hint: { ru: 'V-16 — «маячок вместо прогулки с треугольником».', en: 'V-16 — a beacon instead of a walk with a triangle.' },
        ref: 'RGC, art. 130'
      },
      {
        id: 'ma-31',
        es: 'Su vehículo queda inmovilizado en la vía. ¿Qué deben hacer los ocupantes?',
        tr: { ru: 'Ваша машина обездвижена на дороге. Что делают пассажиры?', en: 'Your vehicle is immobilised on the road. What should the occupants do?' },
        options: [
          { es: 'Ponerse el chaleco reflectante antes de salir y esperar en un lugar seguro.', ru: 'Надеть жилет до выхода и ждать в безопасном месте.', en: 'Put on reflective vests before getting out and wait in a safe place.' },
          { es: 'Quedarse siempre dentro con el cinturón quitado.', ru: 'Всегда оставаться внутри, отстегнувшись.', en: 'Always stay inside with belts off.' },
          { es: 'Caminar por la calzada hasta la siguiente salida.', ru: 'Идти по дороге до следующего съезда.', en: 'Walk along the road to the next exit.' }
        ],
        answer: 0,
        explain: { ru: 'Сначала жилет, потом выход в безопасное место (за ограждение). Если безопасного места нет — оставайтесь в машине пристёгнутыми.', en: 'Vest first, then out to a safe place (behind the barrier). If there is none — stay inside with belts fastened.' },
        hint: { ru: 'Жилет — до того, как открыть дверь.', en: 'Vest on before the door opens.' },
        ref: 'RGC, art. 130'
      },
      {
        id: 'ma-32',
        es: 'Su vehículo averiado necesita ser remolcado. ¿Quién puede hacerlo?',
        tr: { ru: 'Сломанную машину нужно отбуксировать. Кто может это сделать?', en: 'Your broken-down vehicle needs towing. Who may do it?' },
        options: [
          { es: 'Un vehículo de auxilio en carretera, como una grúa.', ru: 'Машина техпомощи, например эвакуатор.', en: 'A roadside recovery vehicle such as a tow truck.' },
          { es: 'Cualquier turismo con una cuerda.', ru: 'Любая легковая на тросе.', en: 'Any car with a rope.' },
          { es: 'Cualquier vehículo si va despacio.', ru: 'Любая машина, если едет медленно.', en: 'Any vehicle if it goes slowly.' }
        ],
        answer: 0,
        explain: { ru: 'Буксировать сломанную машину может только специальный транспорт техпомощи; легковая на тросе — нельзя.', en: 'Only a dedicated recovery vehicle may tow a broken-down car; a car with a rope may not.' },
        hint: { ru: 'Трос в Испании — не для буксировки.', en: 'In Spain a tow rope isn’t for towing.' },
        ref: 'RGC, art. 130'
      }
    ]
  }
]);
