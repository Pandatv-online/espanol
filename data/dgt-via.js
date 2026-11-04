// Driving theory (DGT): the road, its parts, lanes, reserved lanes, hard shoulder and motorways.
// RGC arts. 29–38; Anexo I of the Ley de Tráfico (definitions); DGT «Manual básico», Temas 1 y 9.
ECA.data.addDgt([
  {
    id: 'via',
    cats: ['A', 'B'],
    title: { ru: 'Дорога и полосы', en: 'The road and lanes' },
    summary: {
      ru: 'Части дороги, типы дорог, какую полосу занимать, выделенные и реверсивные полосы, обочина, автомагистрали.',
      en: 'Parts of the road, road types, which lane to use, reserved and reversible lanes, hard shoulder, motorways.'
    },
    hero: {
      es: 'La <b>vía</b> y los carriles',
      sub: { ru: 'Из чего состоит дорога и где по ней ехать', en: 'What a road is made of and where to drive on it' }
    },
    tabs: [
      {
        id: 'partes',
        label: { ru: 'Части', en: 'Parts' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'blue', title: { ru: 'Платформа', en: 'Platform' }, es: '<b>plataforma</b> = calzada + arcenes', body: { ru: 'Вся часть дороги для машин: проезжая часть и обочины.', en: 'The whole part of the road for vehicles: carriageway plus shoulders.' } },
              { color: 'teal', title: { ru: 'Проезжая часть', en: 'Carriageway' }, es: '<b>calzada</b>; estrecha si mide menos de 6,5 m', body: { ru: 'Где едут машины. Уже 6,5 м — узкая.', en: 'Where vehicles drive. Under 6.5 m it is narrow.' } },
              { color: 'amber', title: { ru: 'Полоса', en: 'Lane' }, es: '<b>carril</b>; estrecho si mide menos de 3 m', body: { ru: 'Часть проезжей части для одного ряда машин. Уже 3 м — узкая.', en: 'Part of the carriageway for one line of vehicles. Under 3 m it is narrow.' } },
              { color: 'purple', title: { ru: 'Обочина', en: 'Hard shoulder' }, es: '<b>arcén</b>: franja junto a la calzada', body: { ru: 'Укреплённая полоса по краям, по ней обычно не едут.', en: 'A paved strip along the edges, not normally driven on.' } },
              { color: 'coral', title: { ru: 'Разделительная', en: 'Central reserve' }, es: '<b>mediana</b>: entre dos calzadas', body: { ru: 'Полоса между двумя проезжими частями, по ней не ездят.', en: 'The strip between two carriageways; not for driving.' } }
            ]
          },
          {
            type: 'table', heading: { ru: 'Другие слова', en: 'Other terms' },
            head: ['Español', { ru: 'Что это', en: 'What it is' }],
            rows: [
              ['el apartadero', { ru: 'Карман, чтобы встать вне потока', en: 'Lay-by to pull out of traffic' }],
              ['la zona de frenado', { ru: 'Аварийный улавливатель', en: 'Runaway / escape lane' }],
              ['la isleta / el cebreado', { ru: 'Островок / «зебра» направляющая', en: 'Traffic island / hatching' }],
              ['el refugio', { ru: 'Островок безопасности', en: 'Pedestrian refuge' }],
              ['la travesía', { ru: 'Дорога через населённый пункт', en: 'Road through a town' }],
              ['la vía de servicio', { ru: 'Дублёр вдоль трассы', en: 'Service road' }],
              ['el cambio de rasante', { ru: 'Перелом профиля, вершина', en: 'Change of gradient, crest' }]
            ]
          },
          {
            type: 'rules', heading: { ru: 'Типы дорог', en: 'Road types' },
            items: [
              { color: 'blue', title: { ru: 'Автописта', en: 'Autopista' }, es: '<b>autopista</b>: accesos controlados, sin cruces', body: { ru: 'Только для автомобилей, въезд только по съездам, без пересечений, раздельные проезжие части. Может быть платной.', en: 'Motor vehicles only, access only via slip roads, no crossings, separate carriageways. May be tolled.' } },
              { color: 'teal', title: { ru: 'Автовия', en: 'Autovía' }, es: '<b>autovía</b>: como autopista, con más accesos', body: { ru: 'Похожа на автописту, но допускает въезды от соседних участков; бесплатная.', en: 'Like an autopista but allows access from adjoining property; toll-free.' } },
              { color: 'amber', title: { ru: 'Дорога для автомобилей', en: 'Vía para automóviles' }, es: '<b>vía para automóviles</b>: una sola calzada', body: { ru: 'Только для автомобилей, одна проезжая часть, без въездов с участков (знаки S-3/S-4).', en: 'Motor vehicles only, one carriageway, no access from adjoining land (signs S-3/S-4).' } },
              { color: 'purple', title: { ru: 'Обычная', en: 'Conventional' }, es: '<b>carretera convencional</b>', body: { ru: 'Все остальные дороги.', en: 'All other roads.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>Направление — линия между городами, смысл (sentido) — «туда» или «обратно».</b> Две машины на одной дороге навстречу друг другу: одно направление, разные sentidos.',
              en: '<b>Dirección is the line between two places; sentido is “there” or “back”.</b> Two cars approaching each other on one road: same dirección, different sentidos.'
            }
          }
        ]
      },
      {
        id: 'carriles',
        label: { ru: 'Полосы', en: 'Lanes' },
        blocks: [
          {
            type: 'text',
            body: {
              ru: ['Едут <b>справа</b>, как можно ближе к краю, особенно в поворотах и на вершинах без обзора. Встречную часть дороги всегда оставляют свободной. Островок объезжают справа (на односторонней — с любой стороны).', 'Автомобили не едут по обочине, кроме поломки или крайней необходимости.'],
              en: ['Drive on the <b>right</b>, as close to the edge as possible, especially on blind bends and crests. Always leave the oncoming half free. Pass islands on the right (on one-way roads, either side).', 'Cars don’t drive on the shoulder except for a breakdown or emergency.']
            }
          },
          {
            type: 'table', heading: { ru: 'Какую полосу занимать', en: 'Which lane to use' },
            head: [{ ru: 'Дорога', en: 'Road' }, { ru: 'Правило', en: 'Rule' }],
            rows: [
              [{ ru: 'Двусторонняя, 2 полосы', en: 'Two-way, 2 lanes' }, { ru: 'Своя правая', en: 'Your right-hand lane' }],
              [{ ru: 'Двусторонняя, 3 полосы', en: 'Two-way, 3 lanes' }, { ru: 'Средняя — обгон и налево', en: 'Middle: overtaking, left turns' }],
              [{ ru: 'Город, 2+ в одну сторону', en: 'Town, 2+ one way' }, { ru: 'Любая, без «прыжков»', en: 'Any, without weaving' }],
              [{ ru: 'Трасса, 2 в одну сторону', en: 'Out of town, 2 one way' }, { ru: 'Правая; левая — для обгона', en: 'Right; left to overtake' }],
              [{ ru: 'Трасса, 3+ в одну сторону', en: 'Out of town, 3+ one way' }, { ru: 'Правая, при нужде соседняя', en: 'Right; next one if needed' }]
            ]
          },
          {
            type: 'text',
            body: {
              ru: ['На трёхполосной двусторонней дороге <b>левую</b> полосу (встречную) не занимают никогда.', 'Грузовики тяжелее 3500 кг и составы длиннее 7 м на дорогах с тремя и более полосами в одну сторону едут по правой, могут занять только соседнюю. Велосипеды, мопеды и коляски для инвалидов в городе всегда справа.'],
              en: ['On a three-lane two-way road never use the <b>left</b> (oncoming) lane.', 'Lorries over 3,500 kg and combinations over 7 m on roads with three or more lanes one way use the right lane and may use only the next one. Bicycles, mopeds and mobility vehicles keep right in town.']
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>В городе — «где удобно», за городом — «правая, если не обгоняешь».</b>',
              en: '<b>In town — “wherever suits”, out of town — “keep right unless overtaking”.</b>'
            }
          }
        ]
      },
      {
        id: 'especiales',
        label: { ru: 'Особые', en: 'Special' },
        blocks: [
          {
            type: 'rules', heading: { ru: 'Выделенные полосы', en: 'Reserved lanes' },
            items: [
              { color: 'blue', title: { ru: 'Автобус (и такси)', en: 'Bus (and taxi)' }, es: 'carril <b>BUS</b>, con TAXI si está escrito', body: { ru: 'Остальным ехать нельзя; такси — если написано TAXI. Отделена широкой белой линией.', en: 'Others may not drive in it; taxis only if TAXI is written. Separated by a wide white line.' } },
              { color: 'teal', title: { ru: 'VAO', en: 'HOV lane (VAO)' }, es: 'vehículos de <b>alta ocupación</b>', body: { ru: 'Легковые и мотоциклы с указанным минимумом людей (до 3500 кг, только пассажиры), автобусы, машины инвалидов (даже с одним водителем), экстренные службы.', en: 'Cars and motorbikes with the posted minimum of occupants (≤ 3,500 kg, passengers only), buses, disabled drivers’ vehicles (even alone), emergency services.' } },
              { color: 'amber', title: { ru: 'Разгон и торможение', en: 'Acceleration and deceleration' }, es: 'carriles de <b>entrada y salida</b>', body: { ru: 'Для съезда: заранее займите ближнюю полосу, въезжайте в полосу торможения как можно раньше и тормозите уже на ней.', en: 'To exit: move to the nearest lane early, enter the deceleration lane as soon as possible and slow down in it.' } }
            ]
          },
          {
            type: 'rules', heading: { ru: 'Реверсивные, встречные, дополнительные', en: 'Reversible, contraflow, additional' },
            items: [
              { color: 'purple', title: { ru: 'Реверсивная', en: 'Reversible lane' }, es: 'carril <b>reversible</b>: discontinuas dobles', body: { ru: 'Направление меняется; по краям двойная прерывистая. Ближний свет днём и ночью.', en: 'Direction changes; double broken lines on each side. Dipped headlights day and night.' } },
              { color: 'coral', title: { ru: 'Встречная (временная)', en: 'Contraflow' }, es: 'carril en <b>sentido contrario</b> al habitual', body: { ru: 'Только легковые и мотоциклы, ближний свет, 60–80 км/ч, без перестроений даже для обгона.', en: 'Cars and motorbikes only, dipped lights, 60–80 km/h, no lane changes even to overtake.' } },
              { color: 'amber', title: { ru: 'Дополнительная', en: 'Additional lane' }, es: 'carril <b>adicional</b> con balizamiento', body: { ru: 'Создаётся за счёт обочины, обозначена конусами. Ближний свет, 60–80 км/ч, не перестраиваться, не задевать конусы.', en: 'Made from the shoulder, marked with cones. Dipped lights, 60–80 km/h, no lane changes, don’t touch the cones.' } }
            ]
          },
          {
            type: 'rules', heading: { ru: 'Обочина', en: 'Hard shoulder' },
            items: [
              { color: 'teal', title: { ru: 'Кто едет по обочине', en: 'Who uses the shoulder' }, es: 'ciclos, <b>ciclomotores</b>, carros, vehículos especiales ≤ 3.500 kg', body: { ru: 'Если нет своей полосы: велосипеды, мопеды, повозки, лёгкие спецмашины, коляски для инвалидов. Нет обочины — только самый край полосы.', en: 'If they have no lane of their own: bicycles, mopeds, carts, light special vehicles, mobility vehicles. No shoulder — only the very edge of the lane.' } },
              { color: 'blue', title: { ru: 'В колонну по одному', en: 'Single file' }, es: 'en <b>fila de uno</b>; bicicletas, en paralelo de dos', body: { ru: 'Все по одному; велосипедисты — по двое, но в одну линию на участках без обзора и при плотном движении.', en: 'Everyone in single file; cyclists two abreast, but single file on blind stretches and in heavy traffic.' } },
              { color: 'amber', title: { ru: 'Обгон с обочины', en: 'Overtaking from the shoulder' }, es: 'máximo <b>15 segundos</b> y 200 metros', body: { ru: 'Кто обязан ехать по обочине, может обгонять, только если обгон не дольше 15 секунд и короче 200 м (велосипедисты — без этих ограничений).', en: 'Those obliged to use the shoulder may overtake only if it takes under 15 s and 200 m (cyclists are exempt).' } }
            ]
          }
        ]
      },
      {
        id: 'autopistas',
        label: { ru: 'Магистрали', en: 'Motorways' },
        blocks: [
          {
            type: 'text',
            body: {
              ru: ['По автописте и автовии <b>нельзя</b>: пешеходам, животным, велосипедам, мопедам, колясочкам для инвалидов, самокатам (VMP). Велосипедисты <b>старше 14 лет</b> могут ехать по обочине <b>автовии</b>, если нет запрещающего знака.', 'Пункт оплаты открыт — зелёная стрелка; закрыт — красный крест.'],
              en: ['Not allowed on autopistas and autovías: pedestrians, animals, bicycles, mopeds, mobility vehicles, e-scooters (VMP). Cyclists <b>over 14</b> may ride on the shoulder of an <b>autovía</b> unless a sign forbids it.', 'A toll booth is open with a green arrow; closed with a red X.']
            }
          },
          {
            type: 'rules', heading: { ru: 'Беда на магистрали', en: 'Trouble on the motorway' },
            items: [
              { color: 'amber', title: { ru: 'Едет, но медленно', en: 'Moving, but slowly' }, es: 'salir por la <b>primera salida</b>', body: { ru: 'Покиньте магистраль на первом съезде; машины до 3500 кг — по правой обочине.', en: 'Leave at the first exit; vehicles up to 3,500 kg may use the right shoulder.' } },
              { color: 'coral', title: { ru: 'Встала', en: 'Stopped' }, es: 'en el <b>arcén</b> o la mediana; poste SOS', body: { ru: 'На обочине (или в разделительной полосе). Помощь — с ближайшего SOS-телефона. Пассажирам нельзя ходить по проезжей части.', en: 'On the shoulder (or central reserve). Call for help from the nearest SOS post. Occupants must not walk on the carriageway.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>На магистраль — только «с мотором и быстро»</b>: всё, что не умеет держать 60 км/ч, туда не пускают (кроме велосипедиста 14+ на обочине автовии).',
              en: '<b>Motorways are for the “motorised and fast”</b>: anything that can’t hold 60 km/h is kept out (except a cyclist 14+ on an autovía shoulder).'
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
              ['la vía', { ru: 'дорога, улица', en: 'road, street' }],
              ['la plataforma', { ru: 'проезжая часть с обочинами', en: 'road platform' }],
              ['la calzada', { ru: 'проезжая часть', en: 'carriageway' }],
              ['el carril', { ru: 'полоса', en: 'lane' }],
              ['el arcén', { ru: 'обочина', en: 'hard shoulder' }],
              ['la mediana', { ru: 'разделительная полоса', en: 'central reserve' }],
              ['la acera', { ru: 'тротуар', en: 'pavement' }],
              ['el poblado', { ru: 'населённый пункт', en: 'built-up area' }],
              ['la vía urbana / interurbana', { ru: 'городская / загородная', en: 'urban / rural road' }],
              ['la travesía', { ru: 'участок через город', en: 'road through town' }],
              ['el sentido único', { ru: 'одностороннее движение', en: 'one-way' }],
              ['el doble sentido', { ru: 'двустороннее движение', en: 'two-way' }],
              ['el carril reversible', { ru: 'реверсивная полоса', en: 'reversible lane' }],
              ['el carril VAO', { ru: 'полоса для полных машин', en: 'HOV lane' }],
              ['el carril de deceleración', { ru: 'полоса торможения', en: 'deceleration lane' }],
              ['el peaje', { ru: 'платная дорога, оплата', en: 'toll' }],
              ['el poste SOS', { ru: 'SOS-телефон', en: 'SOS phone' }],
              ['la vía ciclista', { ru: 'велодорожка', en: 'cycle path' }]
            ]
          }
        ]
      }
    ],
    questions: [
      {
        id: 'vi-01',
        es: '¿Qué es la calzada?',
        tr: { ru: 'Что такое «calzada»?', en: 'What is the “calzada”?' },
        options: [
          { es: 'La parte de la vía destinada a la circulación de vehículos.', ru: 'Часть дороги для движения транспорта.', en: 'The part of the road for vehicle traffic.' },
          { es: 'La franja lateral que no está destinada a vehículos.', ru: 'Боковая полоса не для машин.', en: 'The side strip not meant for vehicles.' },
          { es: 'El espacio entre dos plataformas.', ru: 'Пространство между двумя платформами.', en: 'The space between two platforms.' }
        ],
        answer: 0,
        explain: { ru: 'Calzada — проезжая часть. Arcén — обочина. Mediana — разделительная полоса между проезжими частями.', en: 'Calzada — carriageway. Arcén — hard shoulder. Mediana — the strip between carriageways.' },
        hint: { ru: 'Calzada — где «колёса» (calzar — обувать).', en: 'Calzada — where the wheels go.' },
        ref: 'Ley de Tráfico, anexo I'
      },
      {
        id: 'vi-02',
        es: '¿Cuándo se considera que una calzada es estrecha?',
        tr: { ru: 'Когда проезжая часть считается узкой?', en: 'When is a carriageway considered narrow?' },
        options: [
          { es: 'Cuando mide menos de 6,5 metros.', ru: 'Когда она уже 6,5 м.', en: 'When it is under 6.5 m wide.' },
          { es: 'Cuando mide menos de 3 metros.', ru: 'Когда уже 3 м.', en: 'When it is under 3 m.' },
          { es: 'Cuando no tiene arcén.', ru: 'Когда нет обочины.', en: 'When it has no shoulder.' }
        ],
        answer: 0,
        explain: { ru: 'Узкая проезжая часть — уже 6,5 м. Узкая полоса — уже 3 м.', en: 'A narrow carriageway is under 6.5 m. A narrow lane is under 3 m.' },
        hint: { ru: 'Дорога — 6,5, полоса — 3.', en: 'Road — 6.5, lane — 3.' },
        ref: 'DGT, Manual básico, tema 9'
      },
      {
        id: 'vi-03',
        es: '¿Cuándo se considera que un carril es estrecho?',
        tr: { ru: 'Когда полоса считается узкой?', en: 'When is a lane considered narrow?' },
        options: [
          { es: 'Cuando mide menos de 3 metros.', ru: 'Когда она уже 3 м.', en: 'When it is under 3 m wide.' },
          { es: 'Cuando mide menos de 6,5 metros.', ru: 'Когда уже 6,5 м.', en: 'When it is under 6.5 m.' },
          { es: 'Cuando está separado por una línea continua.', ru: 'Когда отделена сплошной.', en: 'When separated by a solid line.' }
        ],
        answer: 0,
        explain: { ru: 'Полоса уже 3 м — узкая.', en: 'A lane under 3 m wide is narrow.' },
        hint: { ru: 'Полоса — 3, дорога — 6,5.', en: 'Lane — 3, road — 6.5.' },
        ref: 'DGT, Manual básico, tema 9'
      },
      {
        id: 'vi-04',
        es: '¿Qué es el arcén?',
        tr: { ru: 'Что такое «arcén»?', en: 'What is the “arcén”?' },
        options: [
          { es: 'La franja longitudinal afirmada contigua a la calzada, no destinada normalmente a vehículos de motor.', ru: 'Укреплённая полоса вдоль проезжей части, обычно не для автомобилей.', en: 'The paved strip alongside the carriageway, not normally for motor vehicles.' },
          { es: 'Un carril para adelantar.', ru: 'Полоса для обгона.', en: 'An overtaking lane.' },
          { es: 'La zona reservada a peatones en ciudad.', ru: 'Зона для пешеходов в городе.', en: 'The pedestrian area in town.' }
        ],
        answer: 0,
        explain: { ru: 'Arcén — обочина: укреплённая полоса по краю, по ней обычно не едут автомобили.', en: 'Arcén — hard shoulder: a paved edge strip that cars don’t normally drive on.' },
        hint: { ru: 'Arcén — «запасной край».', en: 'Arcén — the spare edge.' },
        ref: 'Ley de Tráfico, anexo I'
      },
      {
        id: 'vi-05',
        es: 'Dos vehículos circulan por la misma carretera, uno de ida y otro de vuelta. Circulan en…',
        tr: { ru: 'Две машины едут по одной дороге: одна туда, другая обратно. Они едут…', en: 'Two vehicles use the same road, one going and one coming back. They travel in…' },
        options: [
          { es: 'la misma dirección y distinto sentido.', ru: '…в одном направлении (dirección), но в разном смысле (sentido).', en: '…the same dirección but different sentido.' },
          { es: 'distinta dirección y el mismo sentido.', ru: '…в разных направлениях, одном смысле.', en: '…different dirección, same sentido.' },
          { es: 'la misma dirección y el mismo sentido.', ru: '…в одном направлении и одном смысле.', en: '…same dirección, same sentido.' }
        ],
        answer: 0,
        explain: { ru: 'Dirección — линия дороги между двумя местами; sentido — туда или обратно по этой линии.', en: 'Dirección is the line of the road between places; sentido is going or coming along it.' },
        hint: { ru: 'Одна дорога — одна dirección; туда/обратно — два sentidos.', en: 'One road — one dirección; there/back — two sentidos.' },
        ref: 'DGT, Manual básico, tema 9'
      },
      {
        id: 'vi-06',
        es: '¿Qué es una travesía?',
        tr: { ru: 'Что такое «travesía»?', en: 'What is a “travesía”?' },
        options: [
          { es: 'El tramo de carretera que atraviesa un poblado.', ru: 'Участок трассы, проходящий через населённый пункт.', en: 'A stretch of road passing through a town.' },
          { es: 'Una calle peatonal.', ru: 'Пешеходная улица.', en: 'A pedestrian street.' },
          { es: 'Un camino rural sin asfaltar.', ru: 'Грунтовая сельская дорога.', en: 'An unpaved rural track.' }
        ],
        answer: 0,
        explain: { ru: 'Travesía — часть загородной дороги, которая идёт через город или посёлок; там действуют городские правила.', en: 'A travesía is the part of an inter-urban road that runs through a town; town rules apply there.' },
        hint: { ru: 'Travesía — «траверс» через город.', en: 'Travesía — traversing a town.' },
        ref: 'Ley de Tráfico, anexo I'
      },
      {
        id: 'vi-07',
        es: '¿Qué diferencia una autovía de una autopista?',
        tr: { ru: 'Чем автовия отличается от автописты?', en: 'What distinguishes an autovía from an autopista?' },
        options: [
          { es: 'La autovía puede tener accesos desde propiedades colindantes.', ru: 'На автовию возможны въезды с соседних участков.', en: 'An autovía may have access from adjoining properties.' },
          { es: 'En la autovía pueden circular bicicletas de cualquier edad.', ru: 'По автовии могут ехать велосипедисты любого возраста.', en: 'Cyclists of any age may use an autovía.' },
          { es: 'La autovía tiene una sola calzada.', ru: 'У автовии одна проезжая часть.', en: 'An autovía has one carriageway.' }
        ],
        answer: 0,
        explain: { ru: 'Автовия похожа на автописту (раздельные проезжие части, без пересечений), но допускает въезды от соседних участков и обычно бесплатна.', en: 'An autovía is like an autopista (separate carriageways, no crossings) but allows access from adjoining property and is usually free.' },
        hint: { ru: 'Автописта — «закрытый клуб», автовия — с калитками.', en: 'Autopista — a closed club; autovía — with side gates.' },
        ref: 'Ley de Tráfico, anexo I'
      },
      {
        id: 'vi-08',
        es: 'Como norma general, ¿por dónde se circula?',
        tr: { ru: 'Как правило, по какой части дороги ехать?', en: 'As a rule, where do you drive?' },
        options: [
          { es: 'Por la derecha y lo más cerca posible del borde de la calzada.', ru: 'Справа, как можно ближе к краю проезжей части.', en: 'On the right, as close as possible to the edge.' },
          { es: 'Por el centro de la calzada.', ru: 'По центру проезжей части.', en: 'In the middle of the carriageway.' },
          { es: 'Por el carril que se prefiera.', ru: 'По любой полосе.', en: 'In whichever lane you like.' }
        ],
        answer: 0,
        explain: { ru: 'Держитесь правее, особенно в поворотах и на вершинах без обзора, и оставляйте встречную часть свободной.', en: 'Keep right, especially on blind bends and crests, and leave the oncoming half free.' },
        hint: { ru: 'Испания — правостороннее движение и «правее — безопаснее».', en: 'Spain drives on the right, and further right is safer.' },
        ref: 'RGC, art. 29'
      },
      {
        id: 'vi-09',
        es: 'En una carretera de doble sentido con tres carriles separados por líneas discontinuas, ¿para qué se usa el carril central?',
        tr: { ru: 'На двусторонней дороге с тремя полосами, разделёнными прерывистыми, для чего средняя полоса?', en: 'On a two-way road with three lanes separated by broken lines, what is the middle lane for?' },
        options: [
          { es: 'Solo para adelantar y para girar a la izquierda.', ru: 'Только для обгона и поворота налево.', en: 'Only for overtaking and turning left.' },
          { es: 'Para circular normalmente.', ru: 'Для обычной езды.', en: 'For normal driving.' },
          { es: 'Para los vehículos lentos.', ru: 'Для медленных машин.', en: 'For slow vehicles.' }
        ],
        answer: 0,
        explain: { ru: 'Средняя полоса общая: ею пользуются для обгона и для поворота налево. Левую (встречную) не занимают никогда.', en: 'The middle lane is shared: used for overtaking and left turns. Never use the left (oncoming) one.' },
        hint: { ru: 'Середина — «ничейная», только на время манёвра.', en: 'The middle belongs to nobody — only for a manoeuvre.' },
        ref: 'RGC, arts. 31–32'
      },
      {
        id: 'vi-10',
        es: 'Dentro de poblado, en una calzada con dos carriles en el mismo sentido delimitados por marcas, ¿por qué carril puede circular un turismo?',
        tr: { ru: 'В городе, на дороге с двумя размеченными полосами в одну сторону, по какой полосе может ехать легковая?', en: 'In town, on a road with two marked lanes in the same direction, which lane may a car use?' },
        options: [
          { es: 'Por el que mejor convenga a su destino.', ru: 'По той, что удобнее для маршрута.', en: 'Whichever best suits its destination.' },
          { es: 'Solo por el derecho.', ru: 'Только по правой.', en: 'Only the right one.' },
          { es: 'Solo por el izquierdo.', ru: 'Только по левой.', en: 'Only the left one.' }
        ],
        answer: 0,
        explain: { ru: 'В городе при размеченных полосах в одну сторону легковые едут по любой, не меняя её без причины (поворот, стоянка, обгон).', en: 'In town with marked lanes one way, cars may use any lane, changing only for a reason (turning, parking, overtaking).' },
        hint: { ru: 'В городе — «где удобно».', en: 'In town — wherever suits.' },
        ref: 'RGC, art. 33'
      },
      {
        id: 'vi-11',
        es: 'Fuera de poblado, en una autovía con dos carriles por sentido, ¿por cuál debe circular un turismo normalmente?',
        tr: { ru: 'За городом, на автовии с двумя полосами в одну сторону, по какой обычно ехать легковой?', en: 'Out of town, on an autovía with two lanes each way, which lane should a car normally use?' },
        options: [
          { es: 'Por el derecho, usando el izquierdo para adelantar.', ru: 'По правой; левая — для обгона.', en: 'The right one, using the left to overtake.' },
          { es: 'Por el izquierdo, que es más rápido.', ru: 'По левой — она быстрее.', en: 'The left one, it’s faster.' },
          { es: 'Por cualquiera de los dos.', ru: 'По любой.', en: 'Either.' }
        ],
        answer: 0,
        explain: { ru: 'За городом — правая полоса; левая — для обгона или когда это требует движение, никому не мешая.', en: 'Out of town — the right lane; the left is for overtaking or when traffic requires, without hindering anyone.' },
        hint: { ru: 'За городом: правая, если не обгоняешь.', en: 'Out of town: keep right unless overtaking.' },
        ref: 'RGC, arts. 31–32'
      },
      {
        id: 'vi-12',
        es: 'En una autovía de tres carriles por sentido, ¿por qué carriles puede circular un camión de más de 3.500 kg?',
        tr: { ru: 'На автовии с тремя полосами в одну сторону по каким полосам может ехать грузовик тяжелее 3500 кг?', en: 'On an autovía with three lanes each way, which lanes may a lorry over 3,500 kg use?' },
        options: [
          { es: 'Por el derecho y, si es necesario, por el contiguo.', ru: 'По правой и при необходимости по соседней.', en: 'The right lane and, if needed, the next one.' },
          { es: 'Por cualquiera de los tres.', ru: 'По любой из трёх.', en: 'Any of the three.' },
          { es: 'Solo por el central.', ru: 'Только по средней.', en: 'Only the middle one.' }
        ],
        answer: 0,
        explain: { ru: 'Грузовики > 3500 кг и составы > 7 м на дорогах с 3+ полосами в одну сторону — правая полоса, при нужде соседняя, но не дальше.', en: 'Lorries > 3,500 kg and combinations > 7 m on roads with 3+ lanes one way — right lane, the next one if needed, no further.' },
        hint: { ru: 'Тяжёлым — две правые полосы.', en: 'Heavies — the two right-hand lanes.' },
        ref: 'RGC, arts. 31–32'
      },
      {
        id: 'vi-13',
        es: '¿Puede circular un turismo por un carril bus en el que no está escrito TAXI?',
        tr: { ru: 'Может ли легковая ехать по автобусной полосе без надписи TAXI?', en: 'May a car use a bus lane without TAXI written on it?' },
        options: [
          { es: 'No.', ru: 'Нет.', en: 'No.' },
          { es: 'Sí, si no hay autobuses.', ru: 'Да, если нет автобусов.', en: 'Yes, if there are no buses.' },
          { es: 'Sí, durante la noche.', ru: 'Да, ночью.', en: 'Yes, at night.' }
        ],
        answer: 0,
        explain: { ru: 'Автобусная полоса — только для автобусов; такси — если на ней написано TAXI. Остальным ехать нельзя (пересечь для поворота или парковки — можно по правилам).', en: 'A bus lane is for buses; taxis only if TAXI is written. Others may not drive in it (crossing it to turn or park is allowed per the rules).' },
        hint: { ru: 'Что написано на полосе — тому и можно.', en: 'What’s written on the lane — who may use it.' },
        ref: 'RGC, art. 35'
      },
      {
        id: 'vi-14',
        es: '¿Puede circular por un carril VAO un turismo con solo el conductor, si su conductor tiene discapacidad?',
        tr: { ru: 'Может ли легковая с одним водителем-инвалидом ехать по полосе VAO?', en: 'May a car with only its driver, who is disabled, use a VAO lane?' },
        options: [
          { es: 'Sí, los vehículos de personas con discapacidad pueden usarlo aunque solo viaje el conductor.', ru: 'Да: машины инвалидов могут, даже если в них только водитель.', en: 'Yes, disabled drivers’ vehicles may use it even with only the driver.' },
          { es: 'No, debe llevar al menos dos personas.', ru: 'Нет: нужно минимум двое.', en: 'No, it must carry at least two people.' },
          { es: 'Solo si es un vehículo eléctrico.', ru: 'Только если машина электрическая.', en: 'Only if it’s electric.' }
        ],
        answer: 0,
        explain: { ru: 'По VAO едут машины с указанным минимумом людей, автобусы, экстренные службы и машины людей с инвалидностью — даже с одним водителем.', en: 'VAO lanes are for vehicles with the posted minimum of occupants, buses, emergency services and disabled drivers’ vehicles — even with just the driver.' },
        hint: { ru: 'VAO — «полные машины», а инвалид — особый случай.', en: 'VAO — “full cars”; disabled drivers are a special case.' },
        ref: 'RGC, art. 35'
      },
      {
        id: 'vi-15',
        es: 'Va a salir de una autovía. ¿Dónde debe empezar a reducir la velocidad?',
        tr: { ru: 'Вы съезжаете с автовии. Где начинать снижать скорость?', en: 'You’re leaving an autovía. Where should you start slowing down?' },
        options: [
          { es: 'En el carril de deceleración.', ru: 'На полосе торможения.', en: 'In the deceleration lane.' },
          { es: 'En el carril principal, antes de la salida.', ru: 'На основной полосе, перед съездом.', en: 'In the main lane before the exit.' },
          { es: 'En el arcén.', ru: 'На обочине.', en: 'On the shoulder.' }
        ],
        answer: 0,
        explain: { ru: 'Заранее перестройтесь в правую полосу, как можно раньше въедьте в полосу торможения и тормозите уже на ней, не мешая потоку.', en: 'Move to the right lane early, enter the deceleration lane as soon as possible and brake there, not in the main flow.' },
        hint: { ru: 'Полоса торможения — для торможения.', en: 'The deceleration lane is for decelerating.' },
        ref: 'DGT, Manual básico, tema 9'
      },
      {
        id: 'vi-16',
        es: '¿Cómo se identifica un carril reversible?',
        tr: { ru: 'Как распознать реверсивную полосу?', en: 'How do you recognise a reversible lane?' },
        options: [
          { es: 'Por líneas dobles discontinuas a ambos lados.', ru: 'По двойным прерывистым линиям с обеих сторон.', en: 'By double broken lines on both sides.' },
          { es: 'Por una línea continua amarilla.', ru: 'По сплошной жёлтой линии.', en: 'By a solid yellow line.' },
          { es: 'Por conos de color naranja.', ru: 'По оранжевым конусам.', en: 'By orange cones.' }
        ],
        answer: 0,
        explain: { ru: 'Реверсивная полоса обозначена двойными прерывистыми по краям; направление на ней показывают светофоры над полосой. Ехать — с ближним светом.', en: 'A reversible lane is marked by double broken lines on each side; lane-control lights show its direction. Drive with dipped headlights.' },
        hint: { ru: 'Двойная прерывистая — «двойная жизнь» полосы.', en: 'Double broken line — the lane lives a double life.' },
        ref: 'RGC, art. 37'
      },
      {
        id: 'vi-17',
        es: 'Por un carril reversible, ¿qué luces debe llevar encendidas?',
        tr: { ru: 'Какие фары включать на реверсивной полосе?', en: 'Which lights must you have on in a reversible lane?' },
        options: [
          { es: 'Las de corto alcance, de día y de noche.', ru: 'Ближний свет днём и ночью.', en: 'Dipped headlights, day and night.' },
          { es: 'Solo las de posición.', ru: 'Только габариты.', en: 'Only sidelights.' },
          { es: 'Ninguna durante el día.', ru: 'Днём никакие.', en: 'None by day.' }
        ],
        answer: 0,
        explain: { ru: 'На реверсивной, встречной (временной) и дополнительной полосах — ближний свет круглосуточно.', en: 'On reversible, contraflow and additional lanes — dipped headlights around the clock.' },
        hint: { ru: 'Особая полоса — особенно заметным.', en: 'Special lane — be extra visible.' },
        ref: 'RGC, art. 37'
      },
      {
        id: 'vi-18',
        es: 'Circula por un carril habilitado en sentido contrario al habitual. ¿Qué debe hacer?',
        tr: { ru: 'Вы едете по полосе, временно открытой «против обычного направления». Что делать?', en: 'You’re in a lane opened against its usual direction. What should you do?' },
        options: [
          { es: 'Circular entre 60 y 80 km/h, con luces de cruce y sin cambiar de carril.', ru: 'Ехать 60–80 км/ч, с ближним светом и не перестраиваться.', en: 'Drive at 60–80 km/h with dipped lights and no lane changes.' },
          { es: 'Adelantar solo a camiones.', ru: 'Обгонять только грузовики.', en: 'Overtake lorries only.' },
          { es: 'Circular a 120 km/h si es una autovía.', ru: 'Ехать 120 км/ч, если это автовия.', en: 'Drive at 120 km/h if on an autovía.' }
        ],
        answer: 0,
        explain: { ru: 'На таких полосах — только легковые и мотоциклы, ближний свет, скорость 60–80 км/ч, без перестроений даже для обгона.', en: 'Such lanes are for cars and motorbikes only, with dipped lights, at 60–80 km/h, no lane changes even to overtake.' },
        hint: { ru: 'Встречная полоса — «коридор»: 60–80 и без манёвров.', en: 'Contraflow — a corridor: 60–80, no manoeuvres.' },
        ref: 'RGC, art. 37'
      },
      {
        id: 'vi-19',
        es: '¿Qué vehículos pueden circular por un carril abierto en sentido contrario al habitual?',
        tr: { ru: 'Кому можно ехать по полосе, открытой против обычного направления?', en: 'Which vehicles may use a lane opened against its usual direction?' },
        options: [
          { es: 'Turismos y motocicletas.', ru: 'Легковым и мотоциклам.', en: 'Cars and motorbikes.' },
          { es: 'Todos los vehículos.', ru: 'Всем.', en: 'All vehicles.' },
          { es: 'Solo camiones.', ru: 'Только грузовикам.', en: 'Lorries only.' }
        ],
        answer: 0,
        explain: { ru: 'Встречную временную полосу (для разгрузки трафика) могут использовать только легковые и мотоциклы.', en: 'A temporary contraflow lane (to relieve traffic) is for cars and motorbikes only.' },
        hint: { ru: 'Узкий коридор — для лёгких.', en: 'A narrow corridor — for light vehicles.' },
        ref: 'RGC, art. 37'
      },
      {
        id: 'vi-20',
        es: '¿Qué vehículos deben circular por el arcén si no hay una vía o parte de ella destinada a ellos?',
        tr: { ru: 'Какие транспортные средства обязаны ехать по обочине, если нет предназначенной им полосы?', en: 'Which vehicles must use the shoulder if there is no lane for them?' },
        options: [
          { es: 'Ciclos, ciclomotores y vehículos de tracción animal, entre otros.', ru: 'Велосипеды, мопеды, гужевые повозки и др.', en: 'Bicycles, mopeds and animal-drawn vehicles, among others.' },
          { es: 'Motocicletas de más de 125 cc.', ru: 'Мотоциклы свыше 125 см³.', en: 'Motorbikes over 125 cc.' },
          { es: 'Turismos lentos.', ru: 'Медленные легковые.', en: 'Slow cars.' }
        ],
        answer: 0,
        explain: { ru: 'По обочине (если она проходима) едут велосипеды, мопеды, повозки, лёгкие спецмашины (≤ 3500 кг), коляски для инвалидов, а также машины, сопровождающие велосипедистов.', en: 'If usable, the shoulder is for bicycles, mopeds, carts, light special vehicles (≤ 3,500 kg), mobility vehicles and vehicles escorting cyclists.' },
        hint: { ru: 'Медленные «малыши» — на обочину.', en: 'Slow little ones — on the shoulder.' },
        ref: 'RGC, art. 36'
      },
      {
        id: 'vi-21',
        es: 'Los ciclistas que circulan por el arcén, ¿pueden ir en paralelo?',
        tr: { ru: 'Могут ли велосипедисты на обочине ехать рядом друг с другом?', en: 'May cyclists on the shoulder ride side by side?' },
        options: [
          { es: 'Sí, de dos en dos, salvo en tramos sin visibilidad o con mucho tráfico.', ru: 'Да, по двое, кроме участков без обзора и при плотном движении.', en: 'Yes, two abreast, except on blind stretches or in heavy traffic.' },
          { es: 'No, siempre en fila de uno.', ru: 'Нет, всегда по одному.', en: 'No, always single file.' },
          { es: 'Sí, de tres en tres.', ru: 'Да, по трое.', en: 'Yes, three abreast.' }
        ],
        answer: 0,
        explain: { ru: 'Все, кто едет по обочине, — по одному. Велосипедисты могут по двое, но по одному на участках без обзора и при плотном движении.', en: 'Everyone on the shoulder rides single file. Cyclists may go two abreast, but single file on blind stretches and in heavy traffic.' },
        hint: { ru: 'Велосипедисты — парами, но «не видно — в линию».', en: 'Cyclists — in pairs, but “no view — single file”.' },
        ref: 'RGC, art. 36'
      },
      {
        id: 'vi-22',
        es: 'Un ciclomotor que circula por el arcén, ¿puede adelantar a otro vehículo?',
        tr: { ru: 'Может ли мопед, едущий по обочине, обогнать другую машину?', en: 'May a moped riding on the shoulder overtake another vehicle?' },
        options: [
          { es: 'Sí, si el adelantamiento dura menos de 15 segundos y requiere menos de 200 metros.', ru: 'Да, если обгон короче 15 секунд и 200 м.', en: 'Yes, if it takes under 15 s and under 200 m.' },
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' },
          { es: 'Sí, sin limitación.', ru: 'Да, без ограничений.', en: 'Yes, without limits.' }
        ],
        answer: 0,
        explain: { ru: 'Кто обязан ехать по обочине, может обгонять, если обгон занимает меньше 15 секунд и меньше 200 м. Велосипеды — без этих ограничений.', en: 'Those required to use the shoulder may overtake if it takes under 15 s and under 200 m. Bicycles are exempt.' },
        hint: { ru: '15 секунд и 200 метров.', en: '15 seconds and 200 metres.' },
        ref: 'RGC, art. 36'
      },
      {
        id: 'vi-23',
        es: '¿Pueden circular las bicicletas por una autovía?',
        tr: { ru: 'Можно ли ездить на велосипеде по автовии?', en: 'May bicycles use an autovía?' },
        options: [
          { es: 'Sí, por el arcén, los ciclistas mayores de 14 años, salvo señal que lo prohíba.', ru: 'Да, по обочине, велосипедистам старше 14 лет, если нет запрещающего знака.', en: 'Yes, on the shoulder, cyclists over 14, unless a sign prohibits it.' },
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' },
          { es: 'Sí, por el carril derecho.', ru: 'Да, по правой полосе.', en: 'Yes, in the right lane.' }
        ],
        answer: 0,
        explain: { ru: 'По автописте велосипедам нельзя. По обочине автовии — можно с 14 лет, если нет запрета.', en: 'Bicycles are banned on autopistas. On autovía shoulders they’re allowed from 14, unless prohibited.' },
        hint: { ru: 'Автовия — калитка открыта для велосипеда 14+.', en: 'Autovía — the gate is open for a cyclist 14+.' },
        ref: 'RGC, art. 38'
      },
      {
        id: 'vi-24',
        es: '¿Pueden circular ciclomotores por una autopista?',
        tr: { ru: 'Можно ли мопедам по автописте?', en: 'May mopeds use an autopista?' },
        options: [
          { es: 'No.', ru: 'Нет.', en: 'No.' },
          { es: 'Sí, por el arcén.', ru: 'Да, по обочине.', en: 'Yes, on the shoulder.' },
          { es: 'Sí, si su conductor es mayor de edad.', ru: 'Да, если водитель совершеннолетний.', en: 'Yes, if the rider is an adult.' }
        ],
        answer: 0,
        explain: { ru: 'На автомагистрали нельзя: пешеходам, животным, мопедам, коляскам для инвалидов, самокатам (VMP); велосипедам — тоже, кроме обочины автовии 14+.', en: 'Banned on motorways: pedestrians, animals, mopeds, mobility vehicles, e-scooters (VMP); bicycles too, except autovía shoulders 14+.' },
        hint: { ru: 'Не держит 60 — не на магистраль.', en: 'Can’t hold 60 — not on the motorway.' },
        ref: 'RGC, art. 38'
      },
      {
        id: 'vi-25',
        es: 'En una autopista de peaje, una cabina tiene encima un aspa roja. ¿Qué indica?',
        tr: { ru: 'Над кабиной оплаты на платной дороге горит красный крест. Что это значит?', en: 'On a toll motorway a booth shows a red X. What does it mean?' },
        options: [
          { es: 'Que la cabina está cerrada.', ru: 'Кабина закрыта.', en: 'The booth is closed.' },
          { es: 'Que es solo para pago con tarjeta.', ru: 'Только оплата картой.', en: 'Card payment only.' },
          { es: 'Que es para camiones.', ru: 'Для грузовиков.', en: 'For lorries.' }
        ],
        answer: 0,
        explain: { ru: 'Красный крест — кабина закрыта; зелёная стрелка — открыта.', en: 'Red X — booth closed; green arrow — open.' },
        hint: { ru: 'Крест — «вычеркнуто».', en: 'X — crossed out.' },
        ref: 'DGT, Manual básico, tema 9'
      },
      {
        id: 'vi-26',
        es: 'Su vehículo tiene una avería y solo puede circular muy despacio por una autovía. ¿Qué debe hacer?',
        tr: { ru: 'Из-за поломки ваша машина может ехать по автовии только очень медленно. Что делать?', en: 'A fault means your car can only crawl along an autovía. What should you do?' },
        options: [
          { es: 'Abandonar la autovía por la primera salida.', ru: 'Покинуть автовию на первом съезде.', en: 'Leave at the first exit.' },
          { es: 'Seguir por el carril izquierdo.', ru: 'Ехать дальше по левой полосе.', en: 'Carry on in the left lane.' },
          { es: 'Dar la vuelta por la mediana.', ru: 'Развернуться через разделительную.', en: 'Turn round across the central reserve.' }
        ],
        answer: 0,
        explain: { ru: 'Медленная машина на магистрали опасна: уезжайте на первом съезде; машины до 3500 кг могут ехать по правой обочине.', en: 'A slow vehicle on a motorway is dangerous: leave at the first exit; vehicles up to 3,500 kg may use the right shoulder.' },
        hint: { ru: 'Сломался на магистрали — первый же съезд твой.', en: 'Trouble on the motorway — take the very first exit.' },
        ref: 'RGC, art. 49'
      },
      {
        id: 'vi-27',
        es: 'Tras un accidente en una autopista, ¿pueden los ocupantes caminar por la calzada para pedir ayuda?',
        tr: { ru: 'Можно ли после ДТП на автописте пассажирам идти по проезжей части за помощью?', en: 'After a crash on a motorway, may occupants walk along the carriageway for help?' },
        options: [
          { es: 'No; deben ir a un lugar seguro y pedir ayuda, por ejemplo, desde un poste SOS.', ru: 'Нет: уйти в безопасное место и вызвать помощь, например с SOS-телефона.', en: 'No; go to a safe place and call for help, e.g. from an SOS post.' },
          { es: 'Sí, por el carril derecho.', ru: 'Да, по правой полосе.', en: 'Yes, along the right lane.' },
          { es: 'Sí, si llevan chaleco.', ru: 'Да, если в жилетах.', en: 'Yes, if wearing vests.' }
        ],
        answer: 0,
        explain: { ru: 'Ходить по проезжей части магистрали запрещено. Уйдите за ограждение и позвоните 112 или с SOS-столба.', en: 'Walking on a motorway carriageway is forbidden. Get behind the barrier and call 112 or use an SOS post.' },
        hint: { ru: 'Магистраль — не тротуар, даже в жилете.', en: 'A motorway is no pavement, even in a vest.' },
        ref: 'RGC, art. 121'
      },
      {
        id: 'vi-28',
        es: 'En una vía de doble sentido, al encontrar una isleta en el centro, ¿por dónde debe pasar?',
        tr: { ru: 'На двусторонней дороге посредине островок. С какой стороны его объезжать?', en: 'On a two-way road there is an island in the middle. Which side do you pass?' },
        options: [
          { es: 'Por la derecha.', ru: 'Справа.', en: 'On the right.' },
          { es: 'Por la izquierda.', ru: 'Слева.', en: 'On the left.' },
          { es: 'Por cualquier lado.', ru: 'С любой стороны.', en: 'Either side.' }
        ],
        answer: 0,
        explain: { ru: 'На двусторонней дороге островки объезжают справа. На односторонней — с любой стороны, если нет знаков.', en: 'On a two-way road pass islands on the right. On a one-way road either side unless signed.' },
        hint: { ru: 'Едем справа — объезжаем справа.', en: 'Drive right — pass right.' },
        ref: 'RGC, art. 30'
      },
      {
        id: 'vi-29',
        es: '¿Qué es una zona de frenado de emergencia?',
        tr: { ru: 'Что такое «зона аварийного торможения»?', en: 'What is an emergency braking area?' },
        options: [
          { es: 'Una zona preparada para detener vehículos que se quedan sin frenos.', ru: 'Участок, где можно остановить машину с отказавшими тормозами.', en: 'An area built to stop vehicles whose brakes have failed.' },
          { es: 'Un lugar para comprobar los frenos.', ru: 'Место для проверки тормозов.', en: 'A place to test brakes.' },
          { es: 'Un apartadero para descansar.', ru: 'Карман для отдыха.', en: 'A lay-by for resting.' }
        ],
        answer: 0,
        explain: { ru: 'Аварийный улавливатель (обычно с гравием) останавливает машину, даже если тормоза не работают. Чаще всего — на длинных спусках.', en: 'An escape lane (often gravel) stops a vehicle even if the brakes don’t work. Usually on long descents.' },
        hint: { ru: 'Гравийная «подушка» для машины без тормозов.', en: 'A gravel cushion for a brakeless vehicle.' },
        ref: 'DGT, Manual básico, tema 9'
      },
      {
        id: 'vi-30',
        es: 'En los paneles informativos, una vía marcada en color negro indica…',
        tr: { ru: 'На информационных табло дорога, отмеченная чёрным, означает…', en: 'On traffic information displays, a road marked in black means…' },
        options: [
          { es: 'que la carretera está cortada.', ru: '…дорога перекрыта.', en: '…the road is closed.' },
          { es: 'circulación normal.', ru: '…движение нормальное.', en: '…normal traffic.' },
          { es: 'tráfico lento.', ru: '…медленное движение.', en: '…slow traffic.' }
        ],
        answer: 0,
        explain: { ru: 'Цвета состояния дороги: белый — нормально, зелёный — нельзя ехать с макс. скоростью, жёлтый — заторы местами, красный — сильные заторы, чёрный — дорога перекрыта.', en: 'Road status colours: white — normal, green — can’t reach the limit, amber — some queues, red — heavy queues, black — road closed.' },
        hint: { ru: 'Чёрный — «траур»: дороги нет.', en: 'Black — mourning: the road is gone.' },
        ref: 'DGT, Manual básico, tema 9'
      }
    ]
  }
]);
