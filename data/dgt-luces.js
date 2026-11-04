// Driving theory (DGT): vehicle lights and the horn. RGC arts. 98–110; DGT «Manual básico», Tema 7.
ECA.data.addDgt([
  {
    id: 'luces',
    cats: ['A', 'B'],
    title: { ru: 'Свет и звуковой сигнал', en: 'Lights and horn' },
    summary: {
      ru: 'Когда какой свет включать: габариты, ближний, дальний, противотуманки, аварийка; когда можно сигналить.',
      en: 'Which light when: sidelights, dipped, main beam, fog lights, hazards; when you may use the horn.'
    },
    hero: {
      es: 'Las <b>luces</b> del vehículo',
      sub: { ru: 'Видеть и быть видимым — и никого не ослепить', en: 'See and be seen — without dazzling anyone' }
    },
    tabs: [
      {
        id: 'cuando',
        label: { ru: 'Когда', en: 'When' },
        blocks: [
          {
            type: 'text',
            body: {
              ru: ['Ночью свет включён всегда. <b>Днём</b> — в тёмный день, в <b>туннеле</b>, на <b>реверсивной</b>, встречной временной и дополнительной полосе.', 'Дорога считается плохо освещённой, если нельзя прочитать номер впереди идущей машины с <b>10 м</b> или не видно тёмную машину с <b>50 м</b>.', 'Отказал свет в пути — снизьте скорость, включите то, что работает, и в освещённом месте остановитесь до ремонта.'],
              en: ['At night lights are always on. <b>By day</b> — on dark days, in <b>tunnels</b>, in <b>reversible</b>, contraflow and additional lanes.', 'A road is poorly lit if you can’t read the number plate ahead from <b>10 m</b> or can’t see a dark car at <b>50 m</b>.', 'If lights fail while driving, slow down, use what works, and stop in a lit place until repaired.']
            }
          },
          {
            type: 'table', heading: { ru: 'Какой свет', en: 'Which light' },
            head: [{ ru: 'Свет', en: 'Light' }, { ru: 'Когда', en: 'When' }],
            rows: [
              [{ ru: 'Габариты', en: 'Sidelights' }, { ru: 'Всегда вместе с другим; одни — на стоянке', en: 'With other lights; alone when parked' }],
              [{ ru: 'Ближний', en: 'Dipped' }, { ru: 'Ночью везде; днём в туннеле', en: 'Night everywhere; tunnels by day' }],
              [{ ru: 'Дальний', en: 'Main beam' }, { ru: 'Вне города, темно, > 40 км/ч', en: 'Out of town, dark, > 40 km/h' }],
              [{ ru: 'Противотуманный перед.', en: 'Front fog' }, { ru: 'Туман, снег, ливень, дым', en: 'Fog, snow, heavy rain, smoke' }],
              [{ ru: 'Противотуманный задний', en: 'Rear fog' }, { ru: 'Только очень плохая видимость', en: 'Only very poor visibility' }],
              [{ ru: 'Аварийка', en: 'Hazards' }, { ru: 'Поломка, срочная поездка, школьный автобус', en: 'Breakdown, emergency trip, school bus' }]
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: ['<b>Туннель = ночь</b>: в туннеле всегда ближний (а в тёмном загородном — дальний).', '<b>Задняя противотуманка — «последний шанс»</b>: она слепит того, кто сзади.'],
              en: ['<b>A tunnel is night</b>: always dipped lights in a tunnel (main beam in a dark rural one).', '<b>The rear fog light is a last resort</b>: it dazzles the driver behind.']
            }
          }
        ]
      },
      {
        id: 'largas',
        label: { ru: 'Дальний', en: 'Main beam' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'blue', title: { ru: 'Обязателен', en: 'Required' }, es: 'de noche, fuera de poblado, <b>más de 40 km/h</b>', body: { ru: 'Ночью на неосвещённой загородной дороге быстрее 40 км/ч; днём и ночью в плохо освещённом загородном туннеле.', en: 'At night on an unlit rural road above 40 km/h; day and night in a poorly lit rural tunnel.' } },
              { color: 'coral', title: { ru: 'Запрещён', en: 'Forbidden' }, es: 'en <b>poblado</b>, parado, o si <b>deslumbra</b>', body: { ru: 'В городе, на стоящей машине, при встречной машине, когда едете за другой машиной близко, рядом с пешеходами или велосипедистами, которых он слепит.', en: 'In town, when stationary, when meeting a vehicle, when following closely, near pedestrians or cyclists it would dazzle.' } },
              { color: 'amber', title: { ru: 'Предупредить', en: 'Warning flash' }, es: 'ráfagas <b>intermitentes</b>', body: { ru: 'Короткими вспышками можно предупредить об опасности или обгоне — не ослепляя.', en: 'Short flashes may warn of danger or an overtake — without dazzling.' } }
            ]
          },
          {
            type: 'text',
            body: {
              ru: 'Вас ослепили — сбавьте скорость, смотрите на правый край дороги, при необходимости остановитесь. Отвечать дальним нельзя.',
              en: 'If dazzled, slow down, look at the right edge and stop if needed. Never answer with your main beam.'
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>Дальний — «только для пустой тёмной трассы»</b>: увидел чьи-то глаза или фары — переключи на ближний.',
              en: '<b>Main beam is for an empty dark road</b>: see someone’s eyes or lights — dip.'
            }
          }
        ]
      },
      {
        id: 'otras',
        label: { ru: 'Другие', en: 'Others' },
        blocks: [
          {
            type: 'table', heading: { ru: 'Цвета', en: 'Colours' },
            head: [{ ru: 'Где', en: 'Where' }, { ru: 'Габариты и отражатели', en: 'Sidelights and reflectors' }],
            rows: [
              [{ ru: 'Спереди', en: 'Front' }, { ru: 'Белые', en: 'White' }],
              [{ ru: 'Сзади', en: 'Rear' }, { ru: 'Красные', en: 'Red' }],
              [{ ru: 'Сбоку', en: 'Side' }, { ru: 'Жёлтые (оранжевые)', en: 'Amber' }],
              [{ ru: 'Прицеп сзади', en: 'Trailer rear' }, { ru: 'Красные треугольники', en: 'Red triangles' }]
            ]
          },
          {
            type: 'rules',
            items: [
              { color: 'purple', title: { ru: 'Контурные огни', en: 'End-outline lights' }, es: 'luces de <b>gálibo</b>', body: { ru: 'Показывают полную ширину; обязательны для машин и прицепов шире 2,10 м.', en: 'Show the full width; required on vehicles and trailers wider than 2.10 m.' } },
              { color: 'teal', title: { ru: 'Задний ход', en: 'Reversing light' }, es: 'luz de <b>marcha atrás</b>, blanca', body: { ru: 'Белая, включается сама. Обязательна для автомобилей, у мотоциклов запрещена.', en: 'White, comes on automatically. Required on cars, forbidden on motorbikes.' } },
              { color: 'coral', title: { ru: 'Стоп-сигналы', en: 'Brake lights' }, es: 'luces de <b>frenado</b> y tercera luz', body: { ru: 'Красные, при любом торможении. Третий стоп-сигнал для автомобилей не обязателен, у мотоциклов запрещён.', en: 'Red, with any braking. A third brake light is optional on cars, forbidden on motorbikes.' } },
              { color: 'amber', title: { ru: 'Аварийная сигнализация', en: 'Hazard warning' }, es: '<b>señal de emergencia</b>: todos los intermitentes', body: { ru: 'Поломка, из-за которой не держите минимум; срочная поездка; предупредить о стоящей машине или пробке; посадка-высадка детей из школьного автобуса.', en: 'A fault stopping you reaching the minimum; an emergency trip; to warn of a stopped vehicle or queue; children getting on/off a school bus.' } }
            ]
          },
          {
            type: 'rules', heading: { ru: 'Звуковой сигнал', en: 'Horn' },
            items: [
              { color: 'blue', title: { ru: 'Можно только чтобы', en: 'Only to' }, es: '<b>evitar un accidente</b>, adelantar fuera de poblado, servicio urgente', body: { ru: 'Избежать ДТП; за городом — предупредить об обгоне; при срочной поездке (прерывистый сигнал). Для приветствия и «поторопить» — нельзя.', en: 'Avoid a collision; out of town — warn you’re overtaking; on an emergency trip (intermittent). Never to greet or hurry someone.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>Спереди белое, сзади красное, сбоку жёлтое</b> — как и у велосипеда. Мотоциклу задний ход и третий стоп «не положены».',
              en: '<b>White at the front, red at the back, amber at the sides</b> — like a bicycle. Motorbikes get no reversing light or third brake light.'
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
              ['el alumbrado', { ru: 'освещение, фары', en: 'lighting' }],
              ['la luz de posición', { ru: 'габариты', en: 'sidelight' }],
              ['la luz de corto alcance / de cruce', { ru: 'ближний свет', en: 'dipped beam' }],
              ['la luz de largo alcance / de carretera', { ru: 'дальний свет', en: 'main beam' }],
              ['la luz antiniebla', { ru: 'противотуманный фонарь', en: 'fog light' }],
              ['la luz de gálibo', { ru: 'контурный огонь', en: 'end-outline light' }],
              ['el catadióptrico', { ru: 'катафот, отражатель', en: 'reflector' }],
              ['el intermitente', { ru: 'указатель поворота', en: 'indicator' }],
              ['la señal de emergencia', { ru: 'аварийная сигнализация', en: 'hazard lights' }],
              ['la luz de frenado', { ru: 'стоп-сигнал', en: 'brake light' }],
              ['la luz de marcha atrás', { ru: 'фонарь заднего хода', en: 'reversing light' }],
              ['la luz de circulación diurna', { ru: 'дневные ходовые огни', en: 'daytime running light' }],
              ['deslumbrar', { ru: 'ослеплять', en: 'to dazzle' }],
              ['la ráfaga', { ru: 'вспышка фарами', en: 'headlight flash' }],
              ['el claxon / la señal acústica', { ru: 'звуковой сигнал', en: 'horn' }],
              ['el túnel', { ru: 'туннель', en: 'tunnel' }]
            ]
          }
        ]
      }
    ],
    questions: [
      {
        id: 'lu-01',
        es: '¿Debe encender las luces al circular por un túnel durante el día?',
        tr: { ru: 'Нужно ли включать фары в туннеле днём?', en: 'Must you switch on your lights in a tunnel by day?' },
        options: [
          { es: 'Sí, siempre.', ru: 'Да, всегда.', en: 'Yes, always.' },
          { es: 'Solo si el túnel no está iluminado.', ru: 'Только если туннель не освещён.', en: 'Only if the tunnel is unlit.' },
          { es: 'No, de día no es necesario.', ru: 'Нет, днём не нужно.', en: 'No, not by day.' }
        ],
        answer: 0,
        explain: { ru: 'В туннеле свет нужен всегда, даже днём и даже если туннель освещён (как минимум ближний).', en: 'Lights are always needed in a tunnel, even by day and even if lit (at least dipped).' },
        hint: { ru: 'Туннель = ночь.', en: 'A tunnel is night.' },
        ref: 'RGC, art. 104'
      },
      {
        id: 'lu-02',
        es: 'Circula de noche por una carretera interurbana sin iluminar a 80 km/h y no viene nadie. ¿Qué luces debe llevar?',
        tr: { ru: 'Ночью вы едете 80 км/ч по неосвещённой загородной дороге, никого нет. Какой свет нужен?', en: 'At night you drive at 80 km/h on an unlit rural road with nobody around. Which lights?' },
        options: [
          { es: 'Las de largo alcance.', ru: 'Дальний.', en: 'Main beam.' },
          { es: 'Las de corto alcance.', ru: 'Ближний.', en: 'Dipped beam.' },
          { es: 'Las de posición.', ru: 'Габариты.', en: 'Sidelights.' }
        ],
        answer: 0,
        explain: { ru: 'Ночью на неосвещённой загородной дороге быстрее 40 км/ч дальний обязателен, если никого не слепите.', en: 'At night on an unlit rural road above 40 km/h, main beam is required unless it would dazzle someone.' },
        hint: { ru: 'Темно, трасса, больше 40 — дальний.', en: 'Dark, rural, over 40 — main beam.' },
        ref: 'RGC, art. 100'
      },
      {
        id: 'lu-03',
        es: '¿Se pueden usar las luces de largo alcance dentro de poblado?',
        tr: { ru: 'Можно ли использовать дальний свет в населённом пункте?', en: 'May you use main beam in a built-up area?' },
        options: [
          { es: 'No.', ru: 'Нет.', en: 'No.' },
          { es: 'Sí, si la calle está mal iluminada.', ru: 'Да, если улица плохо освещена.', en: 'Yes, if the street is poorly lit.' },
          { es: 'Sí, si no hay peatones.', ru: 'Да, если нет пешеходов.', en: 'Yes, if there are no pedestrians.' }
        ],
        answer: 0,
        explain: { ru: 'Дальний свет в населённом пункте запрещён; там используют ближний.', en: 'Main beam is forbidden in built-up areas; use dipped.' },
        hint: { ru: 'Город — никаких «прожекторов».', en: 'Town — no searchlights.' },
        ref: 'RGC, art. 100'
      },
      {
        id: 'lu-04',
        es: 'Circula de noche con las luces largas y se cruza con otro vehículo. ¿Qué debe hacer?',
        tr: { ru: 'Ночью вы едете с дальним, навстречу машина. Что делать?', en: 'At night you’re on main beam and meet another vehicle. What should you do?' },
        options: [
          { es: 'Cambiar a las luces de corto alcance para no deslumbrar.', ru: 'Переключиться на ближний, чтобы не ослепить.', en: 'Switch to dipped beam so as not to dazzle.' },
          { es: 'Mantener las largas si el otro no las cambia.', ru: 'Не переключать, если тот не переключил.', en: 'Keep main beam if the other doesn’t dip.' },
          { es: 'Apagar todas las luces un momento.', ru: 'На секунду выключить весь свет.', en: 'Switch all lights off for a moment.' }
        ],
        answer: 0,
        explain: { ru: 'При встречном разъезде дальний переключают на ближний, даже если встречный этого не сделал.', en: 'When meeting a vehicle, dip your lights, even if the other doesn’t.' },
        hint: { ru: 'Увидел фары — переключи.', en: 'See headlights — dip.' },
        ref: 'RGC, art. 102'
      },
      {
        id: 'lu-05',
        es: 'Otro vehículo le deslumbra con sus luces. ¿Qué debe hacer?',
        tr: { ru: 'Встречная машина слепит вас дальним. Что делать?', en: 'An oncoming vehicle dazzles you. What should you do?' },
        options: [
          { es: 'Reducir la velocidad y mirar hacia el borde derecho de la calzada.', ru: 'Снизить скорость и смотреть на правый край дороги.', en: 'Slow down and look towards the right edge of the road.' },
          { es: 'Responder con las luces largas.', ru: 'Ответить дальним.', en: 'Flash your main beam back.' },
          { es: 'Mirar fijamente a sus faros.', ru: 'Смотреть прямо на его фары.', en: 'Stare at its headlights.' }
        ],
        answer: 0,
        explain: { ru: 'При ослеплении: сбавить скорость, смотреть вправо на край дороги, при необходимости остановиться. Ослеплять в ответ нельзя.', en: 'When dazzled: slow down, look at the right edge, stop if needed. Never dazzle back.' },
        hint: { ru: 'Ослепили — глаза вправо, нога на тормоз.', en: 'Dazzled — eyes right, foot on the brake.' },
        ref: 'RGC, art. 102'
      },
      {
        id: 'lu-06',
        es: '¿Para qué se pueden usar las luces largas de forma intermitente (ráfagas)?',
        tr: { ru: 'Для чего можно мигать дальним светом?', en: 'What may short flashes of main beam be used for?' },
        options: [
          { es: 'Para avisar de un peligro o de un adelantamiento, sin deslumbrar.', ru: 'Предупредить об опасности или обгоне, не ослепляя.', en: 'To warn of a danger or an overtake, without dazzling.' },
          { es: 'Para saludar a otro conductor.', ru: 'Поприветствовать другого водителя.', en: 'To greet another driver.' },
          { es: 'Para protestar por la conducta de otro.', ru: 'Выразить недовольство другим водителем.', en: 'To protest about someone’s driving.' }
        ],
        answer: 0,
        explain: { ru: 'Короткие вспышки дальним — сигнал предупреждения (опасность, обгон), а не способ общаться.', en: 'Short flashes are a warning signal (danger, overtaking), not a way to chat.' },
        hint: { ru: 'Вспышка — «внимание», а не «привет».', en: 'A flash means “watch out”, not “hi”.' },
        ref: 'DGT, Manual básico, tema 7'
      },
      {
        id: 'lu-07',
        es: '¿Cuándo debe llevar encendidas las luces de corto alcance durante el día?',
        tr: { ru: 'Когда днём нужен ближний свет?', en: 'When must you use dipped headlights by day?' },
        options: [
          { es: 'Al circular por un carril reversible o adicional.', ru: 'На реверсивной или дополнительной полосе.', en: 'In a reversible or additional lane.' },
          { es: 'Siempre que circule por autopista.', ru: 'Всегда на автописте.', en: 'Whenever on a motorway.' },
          { es: 'Solo con lluvia muy fuerte.', ru: 'Только в сильный ливень.', en: 'Only in very heavy rain.' }
        ],
        answer: 0,
        explain: { ru: 'Днём ближний обязателен в туннелях, на реверсивных, встречных временных и дополнительных полосах, при плохой видимости.', en: 'By day dipped lights are required in tunnels, reversible, contraflow and additional lanes, and in poor visibility.' },
        hint: { ru: 'Особая полоса — особенно заметным.', en: 'Special lane — be extra visible.' },
        ref: 'RGC, art. 104'
      },
      {
        id: 'lu-08',
        es: '¿Qué luces debe llevar encendidas una motocicleta durante el día?',
        tr: { ru: 'Какой свет должен гореть у мотоцикла днём?', en: 'Which lights must a motorbike have on by day?' },
        options: [
          { es: 'Las de corto alcance, en cualquier vía.', ru: 'Ближний, на любой дороге.', en: 'Dipped beam, on any road.' },
          { es: 'Ninguna.', ru: 'Никакой.', en: 'None.' },
          { es: 'Solo las de posición en ciudad.', ru: 'Только габариты в городе.', en: 'Only sidelights in town.' }
        ],
        answer: 0,
        explain: { ru: 'Мотоциклы обязаны ездить с ближним светом и днём, на любых дорогах, — чтобы их было видно.', en: 'Motorbikes must use dipped lights by day on all roads, to be seen.' },
        hint: { ru: 'Мотоцикл маленький — пусть светится.', en: 'A bike is small — let it shine.' },
        ref: 'RGC, art. 104'
      },
      {
        id: 'lu-09',
        es: '¿Cuándo debe utilizar la luz antiniebla trasera?',
        tr: { ru: 'Когда включать задний противотуманный фонарь?', en: 'When should you use the rear fog light?' },
        options: [
          { es: 'Solo con condiciones muy desfavorables, como niebla espesa o lluvia muy intensa.', ru: 'Только в очень плохих условиях: густой туман, сильнейший ливень.', en: 'Only in very bad conditions such as thick fog or very heavy rain.' },
          { es: 'Siempre que llueva.', ru: 'Всегда в дождь.', en: 'Whenever it rains.' },
          { es: 'De noche en cualquier carretera.', ru: 'Ночью на любой дороге.', en: 'At night on any road.' }
        ],
        answer: 0,
        explain: { ru: 'Задняя противотуманка слепит водителя сзади, поэтому её включают только при очень плохой видимости: густой туман, сильный ливень или снегопад, густой дым.', en: 'The rear fog light dazzles the driver behind, so use it only in very poor visibility: thick fog, very heavy rain or snow, dense smoke.' },
        hint: { ru: 'Задняя противотуманка — последний шанс.', en: 'Rear fog — last resort.' },
        ref: 'RGC, art. 106'
      },
      {
        id: 'lu-10',
        es: 'Las luces antiniebla delanteras, ¿con qué otras luces se pueden encender?',
        tr: { ru: 'С каким светом можно включать передние противотуманки?', en: 'With which other lights may front fog lights be used?' },
        options: [
          { es: 'Con las de posición, de corto o de largo alcance.', ru: 'С габаритами, ближним или дальним.', en: 'With sidelights, dipped or main beam.' },
          { es: 'Solo con las de largo alcance.', ru: 'Только с дальним.', en: 'Only with main beam.' },
          { es: 'Solas, sin otras luces.', ru: 'Одни, без другого света.', en: 'Alone, with no other lights.' }
        ],
        answer: 0,
        explain: { ru: 'Передние противотуманки работают вместе с габаритами и могут сочетаться с ближним или дальним.', en: 'Front fog lights go with sidelights and may be combined with dipped or main beam.' },
        hint: { ru: 'Противотуманки — «дополнение», не замена.', en: 'Fog lights are an add-on, not a replacement.' },
        ref: 'RGC, art. 106'
      },
      {
        id: 'lu-11',
        es: '¿Cuándo se considera que una vía está insuficientemente iluminada?',
        tr: { ru: 'Когда дорога считается недостаточно освещённой?', en: 'When is a road considered poorly lit?' },
        options: [
          { es: 'Cuando no se puede leer una matrícula a 10 metros o ver un vehículo oscuro a 50 metros.', ru: 'Когда нельзя прочитать номер с 10 м или увидеть тёмную машину с 50 м.', en: 'When you can’t read a plate at 10 m or see a dark car at 50 m.' },
          { es: 'Cuando no hay farolas cada 10 metros.', ru: 'Когда фонари стоят реже, чем через 10 м.', en: 'When there isn’t a lamp every 10 m.' },
          { es: 'Siempre que es de noche.', ru: 'Всегда ночью.', en: 'Whenever it’s night.' }
        ],
        answer: 0,
        explain: { ru: 'Критерий: номер не читается с 10 м или тёмная машина не видна с 50 м.', en: 'The test: you can’t read a plate at 10 m or see a dark vehicle at 50 m.' },
        hint: { ru: '10 — номер, 50 — машина.', en: '10 — plate, 50 — car.' },
        ref: 'DGT, Manual básico, tema 7'
      },
      {
        id: 'lu-12',
        es: 'Se le estropean algunas luces de noche. ¿Qué debe hacer?',
        tr: { ru: 'Ночью у вас отказала часть фар. Что делать?', en: 'Some of your lights fail at night. What should you do?' },
        options: [
          { es: 'Reducir la velocidad, usar las que funcionen y detenerse en un lugar iluminado hasta repararlas.', ru: 'Снизить скорость, использовать работающие и встать в освещённом месте до ремонта.', en: 'Slow down, use those that work and stop somewhere lit until repaired.' },
          { es: 'Seguir con las luces de emergencia.', ru: 'Ехать дальше с аварийкой.', en: 'Carry on with hazard lights.' },
          { es: 'Seguir sin cambios hasta casa.', ru: 'Ехать как ни в чём не бывало домой.', en: 'Carry on home as normal.' }
        ],
        answer: 0,
        explain: { ru: 'Если свет отказал, сбавьте скорость, включите что работает и в освещённом месте остановитесь до ремонта.', en: 'If lights fail, slow down, use what works and stop in a lit place until it’s fixed.' },
        hint: { ru: 'Нет света — нет поездки.', en: 'No lights — no trip.' },
        ref: 'DGT, Manual básico, tema 7'
      },
      {
        id: 'lu-13',
        es: 'Las luces de posición, ¿cuándo pueden ir encendidas solas, sin otras luces?',
        tr: { ru: 'Когда габариты могут гореть одни, без другого света?', en: 'When may sidelights be on alone, without other lights?' },
        options: [
          { es: 'Cuando el vehículo está parado o estacionado en una vía mal iluminada.', ru: 'Когда машина стоит на плохо освещённой дороге.', en: 'When the vehicle is stopped or parked on a poorly lit road.' },
          { es: 'Al circular por ciudad de noche.', ru: 'При езде по городу ночью.', en: 'When driving in town at night.' },
          { es: 'Al circular por autopista de día.', ru: 'При езде по автописте днём.', en: 'On a motorway by day.' }
        ],
        answer: 0,
        explain: { ru: 'В движении габариты горят вместе с ближним или дальним. Одни — только на стоящей машине в плохо освещённом месте.', en: 'When moving, sidelights go with dipped or main beam. Alone only on a stationary vehicle in a poorly lit place.' },
        hint: { ru: 'Габариты одни — «я стою».', en: 'Sidelights alone — “I’m parked”.' },
        ref: 'RGC, art. 105'
      },
      {
        id: 'lu-14',
        es: '¿De qué color son los catadióptricos traseros?',
        tr: { ru: 'Какого цвета задние отражатели (катафоты)?', en: 'What colour are rear reflectors?' },
        options: [
          { es: 'Rojos.', ru: 'Красные.', en: 'Red.' },
          { es: 'Blancos.', ru: 'Белые.', en: 'White.' },
          { es: 'Amarillos.', ru: 'Жёлтые.', en: 'Amber.' }
        ],
        answer: 0,
        explain: { ru: 'Спереди белые, сзади красные, сбоку жёлтые. У прицепов сзади — красные треугольные.', en: 'Front white, rear red, sides amber. Trailers have red triangular ones at the rear.' },
        hint: { ru: 'Спереди белое, сзади красное, сбоку жёлтое.', en: 'Front white, back red, side amber.' },
        ref: 'DGT, Manual básico, tema 7'
      },
      {
        id: 'lu-15',
        es: '¿Qué vehículos deben llevar obligatoriamente luces de gálibo?',
        tr: { ru: 'На каких машинах обязательны контурные огни?', en: 'Which vehicles must have end-outline marker lights?' },
        options: [
          { es: 'Los de más de 2,10 metros de anchura.', ru: 'На машинах шире 2,10 м.', en: 'Those wider than 2.10 m.' },
          { es: 'Todos los turismos.', ru: 'На всех легковых.', en: 'All cars.' },
          { es: 'Las motocicletas de gran cilindrada.', ru: 'На мощных мотоциклах.', en: 'Large motorbikes.' }
        ],
        answer: 0,
        explain: { ru: 'Контурные огни показывают ширину; обязательны для автомобилей, прицепов и полуприцепов шире 2,10 м.', en: 'End-outline lights show width; required on vehicles, trailers and semi-trailers wider than 2.10 m.' },
        hint: { ru: 'Gálibo — «габарит» по ширине.', en: 'Gálibo — the vehicle’s width.' },
        ref: 'DGT, Manual básico, tema 7'
      },
      {
        id: 'lu-16',
        es: '¿En cuál de estos casos debe usar la señal de emergencia (intermitentes a la vez)?',
        tr: { ru: 'В каком случае включают аварийную сигнализацию?', en: 'In which case should you use the hazard warning lights?' },
        options: [
          { es: 'Cuando por una avería no puede alcanzar la velocidad mínima.', ru: 'Когда из-за поломки не можете держать минимальную скорость.', en: 'When a fault stops you reaching the minimum speed.' },
          { es: 'Al estacionar en doble fila un momento.', ru: 'Ставя машину во второй ряд «на минутку».', en: 'When double-parking “for a minute”.' },
          { es: 'Para agradecer que le dejen pasar.', ru: 'Чтобы поблагодарить за пропуск.', en: 'To thank someone for letting you in.' }
        ],
        answer: 0,
        explain: { ru: 'Аварийка — для опасности: поломка, срочная поездка, предупредить о стоящей машине или пробке, посадка детей в школьный автобус. Не для «спасибо» и не для второго ряда.', en: 'Hazards are for danger: a fault, an emergency trip, warning of a stopped vehicle or queue, children boarding a school bus. Not for “thanks” or double-parking.' },
        hint: { ru: 'Аварийка — «у меня проблема», а не «спасибо».', en: 'Hazards mean “I have a problem”, not “thanks”.' },
        ref: 'DGT, Manual básico, tema 7'
      },
      {
        id: 'lu-17',
        es: 'Un autobús de transporte escolar se detiene para que bajen los niños. ¿Qué luces debe encender?',
        tr: { ru: 'Школьный автобус остановился высадить детей. Какой свет он включает?', en: 'A school bus stops to let children off. Which lights must it switch on?' },
        options: [
          { es: 'La señal de emergencia.', ru: 'Аварийную сигнализацию.', en: 'The hazard warning lights.' },
          { es: 'Las luces largas.', ru: 'Дальний свет.', en: 'Main beam.' },
          { es: 'La antiniebla trasera.', ru: 'Задний противотуманный.', en: 'The rear fog light.' }
        ],
        answer: 0,
        explain: { ru: 'При посадке и высадке детей школьный автобус включает аварийку, чтобы остальные снизили скорость.', en: 'When children get on or off, a school bus uses its hazards so others slow down.' },
        hint: { ru: 'Мигает школьный автобус — рядом дети.', en: 'School bus flashing — children nearby.' },
        ref: 'DGT, Manual básico, tema 7'
      },
      {
        id: 'lu-18',
        es: '¿Qué indica la luz de marcha atrás?',
        tr: { ru: 'Что показывает фонарь заднего хода?', en: 'What does the reversing light show?' },
        options: [
          { es: 'Que el vehículo va o va a ir hacia atrás.', ru: 'Машина едет или поедет назад.', en: 'The vehicle is or is about to go backwards.' },
          { es: 'Que el vehículo va a frenar.', ru: 'Машина будет тормозить.', en: 'The vehicle is about to brake.' },
          { es: 'Que el vehículo está averiado.', ru: 'Машина сломана.', en: 'The vehicle has broken down.' }
        ],
        answer: 0,
        explain: { ru: 'Белый фонарь заднего хода включается автоматически при включении задней передачи и освещает дорогу сзади.', en: 'The white reversing light comes on automatically with reverse gear and lights the road behind.' },
        hint: { ru: 'Белый сзади — едет назад.', en: 'White at the back — going backwards.' },
        ref: 'DGT, Manual básico, tema 7'
      },
      {
        id: 'lu-19',
        es: '¿Qué indica la luz de frenado?',
        tr: { ru: 'Что показывает стоп-сигнал?', en: 'What does the brake light show?' },
        options: [
          { es: 'Que el conductor está frenando.', ru: 'Водитель тормозит.', en: 'The driver is braking.' },
          { es: 'Que el vehículo va a girar.', ru: 'Машина повернёт.', en: 'The vehicle will turn.' },
          { es: 'Que el vehículo está estacionado.', ru: 'Машина на стоянке.', en: 'The vehicle is parked.' }
        ],
        answer: 0,
        explain: { ru: 'Стоп-сигналы (красные, яркие) загораются при любом торможении. Предупредить о торможении можно, несколько раз нажав на тормоз.', en: 'Brake lights (bright red) come on with any braking. You can warn of braking by pressing the pedal a few times.' },
        hint: { ru: 'Красный яркий — «торможу».', en: 'Bright red — “braking”.' },
        ref: 'DGT, Manual básico, tema 7'
      },
      {
        id: 'lu-20',
        es: 'Dentro de poblado, ¿cuándo puede usar el claxon?',
        tr: { ru: 'Когда можно сигналить в городе?', en: 'When may you use the horn in town?' },
        options: [
          { es: 'Para evitar un posible accidente.', ru: 'Чтобы избежать ДТП.', en: 'To avoid a possible collision.' },
          { es: 'Para avisar de que va a adelantar.', ru: 'Чтобы предупредить об обгоне.', en: 'To warn you’re overtaking.' },
          { es: 'Para saludar a un conocido.', ru: 'Чтобы поприветствовать знакомого.', en: 'To greet a friend.' }
        ],
        answer: 0,
        explain: { ru: 'Звуковой сигнал — только чтобы избежать ДТП; об обгоне им предупреждают только за городом; при срочной поездке — прерывистый. Приветствовать гудком нельзя.', en: 'The horn is only to avoid a crash; warning of an overtake is only out of town; on an emergency trip — intermittent. Never to greet.' },
        hint: { ru: 'Гудок — тормоз для чужой ошибки.', en: 'The horn brakes someone else’s mistake.' },
        ref: 'RGC, art. 110'
      },
      {
        id: 'lu-21',
        es: 'Fuera de poblado, ¿puede usar el claxon para avisar de que va a adelantar?',
        tr: { ru: 'Можно ли за городом посигналить, предупреждая об обгоне?', en: 'Out of town, may you sound the horn to warn you’re overtaking?' },
        options: [
          { es: 'Sí.', ru: 'Да.', en: 'Yes.' },
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' },
          { es: 'Solo de noche.', ru: 'Только ночью.', en: 'Only at night.' }
        ],
        answer: 0,
        explain: { ru: 'За городом гудком можно предупредить об обгоне (ночью лучше вспышкой фар). В городе — только чтобы избежать ДТП.', en: 'Out of town the horn may warn of overtaking (a flash is better at night). In town — only to avoid a crash.' },
        hint: { ru: 'Трасса — «бип, обгоняю» можно.', en: 'Open road — a “beep, passing” is OK.' },
        ref: 'RGC, art. 110'
      },
      {
        id: 'lu-22',
        es: 'Al seguir de noche a otro vehículo a poca distancia, ¿qué luces debe llevar?',
        tr: { ru: 'Ночью вы едете близко за другой машиной. Какой свет нужен?', en: 'At night you follow another vehicle closely. Which lights?' },
        options: [
          { es: 'Las de corto alcance, para no deslumbrarle por el retrovisor.', ru: 'Ближний, чтобы не слепить его через зеркало.', en: 'Dipped, so as not to dazzle him via the mirror.' },
          { es: 'Las de largo alcance, para ver mejor.', ru: 'Дальний, чтобы лучше видеть.', en: 'Main beam, to see better.' },
          { es: 'Solo las de posición.', ru: 'Только габариты.', en: 'Only sidelights.' }
        ],
        answer: 0,
        explain: { ru: 'Дальний слепит и того, за кем вы едете (через зеркала). Поэтому за машиной — ближний.', en: 'Main beam dazzles the driver ahead through the mirrors, so use dipped when following.' },
        hint: { ru: 'Видишь чьи-то фонари — ближний.', en: 'See someone’s tail lights — dip.' },
        ref: 'RGC, art. 102'
      },
      {
        id: 'lu-23',
        es: '¿Puede una motocicleta llevar luz de marcha atrás?',
        tr: { ru: 'Может ли у мотоцикла быть фонарь заднего хода?', en: 'May a motorbike have a reversing light?' },
        options: [
          { es: 'No, la tiene prohibida.', ru: 'Нет, он запрещён.', en: 'No, it is forbidden.' },
          { es: 'Sí, es obligatoria.', ru: 'Да, обязателен.', en: 'Yes, it’s mandatory.' },
          { es: 'Sí, es opcional.', ru: 'Да, по желанию.', en: 'Yes, optional.' }
        ],
        answer: 0,
        explain: { ru: 'Фонарь заднего хода обязателен для автомобилей и запрещён для мотоциклов; третий стоп-сигнал у мотоциклов тоже запрещён.', en: 'A reversing light is required on cars and forbidden on motorbikes; a third brake light is also forbidden on motorbikes.' },
        hint: { ru: 'Мотоциклу «задний» свет не положен.', en: 'No reversing light for bikes.' },
        ref: 'DGT, Manual básico, tema 7'
      },
      {
        id: 'lu-24',
        es: 'Al circular por un túnel interurbano sin iluminar, a más de 40 km/h, ¿qué luces debe llevar si no viene nadie?',
        tr: { ru: 'В неосвещённом загородном туннеле быстрее 40 км/ч, если никого нет, какой свет нужен?', en: 'In an unlit rural tunnel above 40 km/h with nobody around, which lights?' },
        options: [
          { es: 'Las de largo alcance.', ru: 'Дальний.', en: 'Main beam.' },
          { es: 'Ninguna, si el túnel es corto.', ru: 'Никакой, если туннель короткий.', en: 'None, if the tunnel is short.' },
          { es: 'Las antiniebla traseras.', ru: 'Задние противотуманки.', en: 'Rear fog lights.' }
        ],
        answer: 0,
        explain: { ru: 'Плохо освещённый загородный туннель — как ночная дорога: дальний обязателен, если никого не слепите.', en: 'A poorly lit rural tunnel is like a night road: main beam required unless it would dazzle someone.' },
        hint: { ru: 'Тёмный туннель за городом = ночная трасса.', en: 'A dark rural tunnel = a night road.' },
        ref: 'RGC, art. 100'
      },
      {
        id: 'lu-25',
        es: 'Hay niebla espesa y apenas se ve. ¿Qué luces puede encender?',
        tr: { ru: 'Густой туман, почти ничего не видно. Какой свет можно включить?', en: 'There is thick fog and you can barely see. Which lights may you use?' },
        options: [
          { es: 'Las antiniebla delanteras y la antiniebla trasera, junto a las de cruce.', ru: 'Передние и задний противотуманные вместе с ближним.', en: 'Front fog lights and the rear fog light, with dipped beam.' },
          { es: 'Solo las de largo alcance.', ru: 'Только дальний.', en: 'Main beam only.' },
          { es: 'Ninguna; la luz rebota en la niebla.', ru: 'Никакой: свет отражается от тумана.', en: 'None; light bounces off fog.' }
        ],
        answer: 0,
        explain: { ru: 'В густом тумане — ближний с передними противотуманками и задний противотуманный. Дальний в тумане ослепляет вас самих отражением.', en: 'In thick fog — dipped with front fog lights and the rear fog light. Main beam dazzles you by reflection.' },
        hint: { ru: 'Туман — «низкий свет»: ближний и противотуманки.', en: 'Fog — low light: dipped plus fog lights.' },
        ref: 'RGC, art. 106'
      },
      {
        id: 'lu-26',
        es: 'Detiene el vehículo por una emergencia en una autovía de noche. ¿Qué luces debe encender?',
        tr: { ru: 'Ночью вы вынужденно остановились на автовии. Какой свет включить?', en: 'At night you make an emergency stop on an autovía. Which lights?' },
        options: [
          { es: 'La señal de emergencia y las luces de posición.', ru: 'Аварийку и габариты.', en: 'Hazard lights and sidelights.' },
          { es: 'Solo las de largo alcance.', ru: 'Только дальний.', en: 'Main beam only.' },
          { es: 'Ninguna, para no gastar batería.', ru: 'Никакой, чтобы не сажать аккумулятор.', en: 'None, to save the battery.' }
        ],
        answer: 0,
        explain: { ru: 'При вынужденной остановке на магистрали, в туннеле или где плохо видно — аварийка и габариты (плюс маячок V-16).', en: 'Stopping in an emergency on a motorway, in a tunnel or where visibility is poor — hazards and sidelights (plus the V-16 beacon).' },
        hint: { ru: 'Стою в темноте — мигаю и «показываю ширину».', en: 'Stopped in the dark — flash and show your width.' },
        ref: 'RGC, art. 130'
      },
      {
        id: 'lu-27',
        es: 'Un turismo con avería circula muy despacio por una carretera, creando peligro. ¿Qué debe hacer con las luces?',
        tr: { ru: 'Легковая с поломкой ползёт по дороге и создаёт опасность. Что со светом?', en: 'A broken-down car is crawling along a road, creating a hazard. What about lights?' },
        options: [
          { es: 'Encender la señal de emergencia.', ru: 'Включить аварийку.', en: 'Switch on the hazards.' },
          { es: 'Encender la antiniebla trasera.', ru: 'Включить задний противотуманный.', en: 'Switch on the rear fog light.' },
          { es: 'Encender las luces largas.', ru: 'Включить дальний.', en: 'Switch on main beam.' }
        ],
        answer: 0,
        explain: { ru: 'Не держите минимальную скорость из-за поломки и это опасно — аварийная сигнализация.', en: 'Unable to keep the minimum speed due to a fault, creating danger — hazard warning lights.' },
        hint: { ru: 'Медленнее положенного — аварийка.', en: 'Slower than allowed — hazards.' },
        ref: 'DGT, Manual básico, tema 7'
      },
      {
        id: 'lu-28',
        es: 'Cerca de usted hay un vehículo que ha sufrido un accidente en un túnel. ¿Puede usar la señal de emergencia para avisar a los que vienen detrás?',
        tr: { ru: 'Впереди в туннеле авария. Можно ли включить аварийку, чтобы предупредить едущих сзади?', en: 'There is a crash ahead in a tunnel. May you use your hazards to warn those behind?' },
        options: [
          { es: 'Sí, para advertir de un vehículo detenido o de un peligro.', ru: 'Да, чтобы предупредить о стоящей машине или опасности.', en: 'Yes, to warn of a stopped vehicle or danger.' },
          { es: 'No, solo si su vehículo está averiado.', ru: 'Нет, только если сломана ваша машина.', en: 'No, only if your own car has broken down.' },
          { es: 'No, en los túneles está prohibida.', ru: 'Нет, в туннелях она запрещена.', en: 'No, it’s banned in tunnels.' }
        ],
        answer: 0,
        explain: { ru: 'Аварийкой можно предупредить едущих сзади о стоящей машине, аварии или резком заторе — на любой дороге и в туннеле.', en: 'Hazards may warn following traffic of a stopped vehicle, crash or sudden queue — on any road and in tunnels.' },
        hint: { ru: 'Аварийка — «внимание, впереди беда».', en: 'Hazards — “trouble ahead”.' },
        ref: 'DGT, Manual básico, tema 7'
      }
    ]
  }
]);
