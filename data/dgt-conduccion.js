// Driving theory (DGT): safe driving — bends and skids, night, weather, tunnels and level crossings.
// RGC arts. 45–46, 99–106, 160; DGT «Manual básico», Temas 12 (túneles, pasos a nivel) y 14.
ECA.data.addDgt([
  {
    id: 'conduccion',
    cats: ['A', 'B'],
    title: { ru: 'Безопасное вождение', en: 'Safe driving' },
    summary: {
      ru: 'Повороты и занос, ночь, дождь и аквапланирование, снег и лёд, туман, ветер, жара, туннели и ж/д переезды.',
      en: 'Bends and skids, night, rain and aquaplaning, snow and ice, fog, wind, heat, tunnels and level crossings.'
    },
    hero: {
      es: 'Conducir de forma <b>segura</b>',
      sub: { ru: 'Дорога, погода и особые места', en: 'The road, the weather and special places' }
    },
    tabs: [
      {
        id: 'curvas',
        label: { ru: 'Повороты', en: 'Bends' },
        blocks: [
          {
            type: 'rules', heading: { ru: 'Как проходить поворот', en: 'How to take a bend' },
            items: [
              { color: 'blue', label: { ru: '1', en: '1' }, title: { ru: 'До поворота', en: 'Before' }, es: 'reducir la velocidad <b>antes</b> de la curva', body: { ru: 'Тормозите на прямой, держитесь правого края.', en: 'Brake on the straight and keep to the right.' } },
              { color: 'amber', label: { ru: '2', en: '2' }, title: { ru: 'В повороте', en: 'In the bend' }, es: 'volante suave, <b>sin frenazos</b>', body: { ru: 'Плавно рулите, не тормозите резко, слегка поддерживайте газ.', en: 'Steer smoothly, no harsh braking, keep a light throttle.' } },
              { color: 'teal', label: { ru: '3', en: '3' }, title: { ru: 'На выходе', en: 'On the way out' }, es: 'acelerar <b>poco a poco</b>', body: { ru: 'Выпрямляйте руль и постепенно разгоняйтесь.', en: 'Straighten the wheel and accelerate gradually.' } }
            ]
          },
          {
            type: 'table', heading: { ru: 'Занос: что делать', en: 'Skids: what to do' },
            head: [{ ru: 'Машина', en: 'Car' }, { ru: 'Заносит', en: 'Skidding' }, { ru: 'Действие', en: 'Action' }],
            rows: [
              [{ ru: 'Передний привод', en: 'Front-wheel drive' }, { ru: 'Зад', en: 'Rear' }, { ru: 'Не тормозить, руль в занос, мягко газ', en: 'No brake, steer into it, ease on gas' }],
              [{ ru: 'Задний привод', en: 'Rear-wheel drive' }, { ru: 'Зад', en: 'Rear' }, { ru: 'Не тормозить, сбросить газ, руль в занос', en: 'No brake, lift off, steer into it' }],
              [{ ru: 'Любой', en: 'Any' }, { ru: 'Перед', en: 'Front' }, { ru: 'Сбросить газ, выровнять руль', en: 'Lift off, straighten the wheel' }]
            ]
          },
          {
            type: 'text',
            body: {
              ru: 'Занос вызывают высокая скорость, резкий руль, резкое торможение, изношенные шины или амортизаторы, плохо уложенный груз. В зоне дорожных работ знаки на <b>жёлтом</b> фоне и жёлтая разметка главнее обычных; слушайтесь рабочих-регулировщиков.',
              en: 'Skids come from speed, harsh steering, harsh braking, worn tyres or dampers, badly placed loads. In road works, signs on a <b>yellow</b> background and yellow markings override normal ones; follow the works staff.'
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>«Тормози прямо — поворачивай плавно — газ на выходе».</b> В заносе — <b>руль туда, куда уходит зад</b>, тормоз не трогать.',
              en: '<b>“Brake straight — turn smooth — gas on the way out.”</b> In a skid — <b>steer where the back is going</b>, keep off the brake.'
            }
          }
        ]
      },
      {
        id: 'noche',
        label: { ru: 'Ночь', en: 'Night' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'blue', title: { ru: 'Скорость', en: 'Speed' }, es: 'más <b>despacio</b> si no se ve bien', body: { ru: 'Ночью видно хуже — едьте так, чтобы остановиться в пределах освещённого участка. Глазам нужно несколько секунд, чтобы привыкнуть к темноте после света.', en: 'You see less at night — drive so you can stop within the lit distance. Eyes need a few seconds to adjust from light to dark.' } },
              { color: 'amber', title: { ru: 'Ослепление', en: 'Dazzle' }, es: 'guiarse por la <b>línea del borde derecho</b>', body: { ru: 'Сбавить скорость, смотреть на правую линию, не менять полосу. Тёмные очки ночью нельзя: видно хуже. Не перегружайте багажник — фары задираются и слепят.', en: 'Slow down, follow the right edge line, don’t change lanes. No sunglasses at night: you see less. Don’t overload the boot — headlights tilt up and dazzle.' } },
              { color: 'teal', title: { ru: 'Обгон ночью', en: 'Overtaking at night' }, es: 'cruce al acercarse, <b>largas</b> al emparejarse', body: { ru: 'Подъезжая сзади — ближний (не слепить через зеркало), поравнявшись — снова дальний. Вас обгоняют — держите дальний, пока обгоняющий не поравняется, он светит вам обоим.', en: 'Closing up — dipped (don’t dazzle via the mirror); once alongside — main beam again. Being overtaken — keep main beam until he’s alongside; it lights the road for both.' } },
              { color: 'purple', title: { ru: 'Ночной поворот', en: 'Night bend' }, es: 'cambia a cruce el que va por <b>dentro</b> de la curva', body: { ru: 'При разъезде в повороте первым переключает на ближний тот, кто едет по внутренней стороне: его свет бьёт прямо во встречного.', en: 'When meeting on a bend, the driver on the inside dips first: their beams shine straight at the other.' } }
            ]
          }
        ]
      },
      {
        id: 'clima',
        label: { ru: 'Погода', en: 'Weather' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'blue', title: { ru: 'Дождь', en: 'Rain' }, es: 'primeras gotas: <b>barro</b> resbaladizo', body: { ru: 'Первые капли смешиваются с пылью и маслом — очень скользко. Сбавьте скорость, увеличьте дистанцию, тормозите плавно, после лужи проверьте тормоза. Мотоциклистам скользко на разметке.', en: 'The first drops mix with dust and oil — very slippery. Slow down, increase the gap, brake gently, test the brakes after a puddle. Motorcyclists slip on road paint.' } },
              { color: 'teal', title: { ru: 'Аквапланирование', en: 'Aquaplaning' }, es: '<b>aquaplaning</b>: soltar el acelerador sin frenar', body: { ru: 'Шина не успевает отвести воду и «всплывает». Чаще на скорости, на широких и изношенных шинах. Отпустите газ, руль прямо, не тормозите.', en: 'The tyre can’t clear the water and floats. More likely at speed with wide or worn tyres. Lift off, keep straight, don’t brake.' } },
              { color: 'purple', title: { ru: 'Снег и лёд', en: 'Snow and ice' }, es: '<b>marchas largas</b> para arrancar; cadenas con R-412', body: { ru: 'Трогаться с прямыми колёсами на высокой передаче, без резких движений; спуск на 1-й или 2-й; ехать по колее. Знак R-412 — цепи обязательны (минимум на ведущих колёсах, по одной с каждой стороны). Лёд — на мостах, в тени, во влажных низинах, утром и ночью.', en: 'Move off with straight wheels in a higher gear, no sudden moves; descend in 1st or 2nd; follow the tracks. Sign R-412 — chains required (at least on driven wheels, one each side). Ice on bridges, in shade, damp hollows, at night and dawn.' } },
              { color: 'amber', title: { ru: 'Туман, дым, пыль', en: 'Fog, smoke, dust' }, es: 'cruce + <b>antiniebla</b>, mucha distancia', body: { ru: 'Ближний и противотуманки, медленно, большая дистанция, ориентир — разметка, обгон без крайней нужды не делать, проветривать стёкла.', en: 'Dipped beam and fog lights, slowly, a big gap, follow the road markings, don’t overtake unless necessary, keep windows clear.' } },
              { color: 'coral', title: { ru: 'Боковой ветер', en: 'Crosswind' }, es: 'volante <b>firme</b> hacia el viento', body: { ru: 'Медленнее, руль крепко и чуть против ветра. Опасно на выезде из-за грузовика, у мостов, между зданиями. Сильнее страдают мотоциклы и машины с прицепом.', en: 'Slower, grip the wheel and steer slightly into the wind. Dangerous when passing lorries, by bridges, between buildings. Motorbikes and trailers suffer most.' } },
              { color: 'amber', title: { ru: 'Жара', en: 'Heat' }, es: 'aire acondicionado a <b>20–23 °C</b>', body: { ru: 'Раньше приходят усталость и раздражение. Кондиционер 20–23 °C, больше остановок, пейте воду, светлая лёгкая одежда.', en: 'Fatigue and irritability come sooner. A/C at 20–23 °C, more breaks, drink water, light loose clothing.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>Скользко — всё «мягко»</b>: мягкий газ, мягкий руль, мягкий тормоз и большая дистанция.',
              en: '<b>Slippery — everything gentle</b>: gentle throttle, steering, brakes, and a big gap.'
            }
          }
        ]
      },
      {
        id: 'tuneles',
        label: { ru: 'Туннели', en: 'Tunnels' },
        blocks: [
          {
            type: 'rules', heading: { ru: 'Туннели', en: 'Tunnels' },
            items: [
              { color: 'blue', title: { ru: 'Дистанция', en: 'Following distance' }, es: '<b>100 m</b> (4 s); más de 3.500 kg: 150 m (6 s)', body: { ru: 'Красный светофор на въезде — не въезжать. В туннеле нельзя разворачиваться, ехать задом, останавливаться без необходимости.', en: 'A red light at the entrance — don’t enter. In a tunnel no U-turns, reversing or needless stops.' } },
              { color: 'amber', title: { ru: 'Пробка в туннеле', en: 'Queue in a tunnel' }, es: 'motor parado, luces de <b>posición</b>', body: { ru: 'Все остаются в машине; заглушите двигатель, оставьте габариты; останавливаясь, мигните аварийкой.', en: 'Everyone stays inside; stop the engine, leave the sidelights on; flash the hazards as you stop.' } },
              { color: 'coral', title: { ru: 'Поломка', en: 'Breakdown' }, es: 'apartadero, <b>poste SOS</b>, salida de emergencia', body: { ru: 'Заглушить, габариты и аварийка, в карман или к правому краю, маячок, вызвать помощь с SOS-поста, все — к убежищу или выходу.', en: 'Engine off, sidelights and hazards, into a lay-by or to the right, beacon, call from the SOS post, everyone to the refuge or exit.' } },
              { color: 'coral', title: { ru: 'Пожар', en: 'Fire' }, es: 'a la derecha, llave puesta, <b>salir a pie</b>', body: { ru: 'Прижаться вправо, заглушить, ключ оставить в замке, уйти к аварийному выходу.', en: 'Pull right, engine off, leave the key in, walk to an emergency exit.' } }
            ]
          },
          {
            type: 'rules', heading: { ru: 'Ж/д переезды', en: 'Level crossings' },
            items: [
              { color: 'purple', title: { ru: 'Нельзя пересекать', en: 'Don’t cross' }, es: 'cerrado, <b>barreras en movimiento</b> o semáforo rojo', body: { ru: 'Шлагбаум закрыт или движется, горит красный — ждать в своей полосе по очереди. Без шлагбаума — убедиться, что поезда нет. Проезжать быстро и только если не застрянете.', en: 'Barriers closed or moving, red light — wait in your lane in turn. No barriers — make sure no train is coming. Cross briskly and only if you won’t get stuck.' } },
              { color: 'coral', title: { ru: 'Застряли на путях', en: 'Stuck on the tracks' }, es: 'bajan los <b>pasajeros</b>, luego avisar', body: { ru: 'Пассажиры сразу выходят. Водитель пробует завести; не получилось — выходит и предупреждает поезд и другие машины.', en: 'Passengers get out at once. The driver tries to restart; failing that, gets out and warns the train and other traffic.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>Туннель: 100 метров или 4 секунды.</b> Пожар — «ключ в замке, ноги к выходу».',
              en: '<b>Tunnel: 100 metres or 4 seconds.</b> Fire — “key in, feet to the exit”.'
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
              ['la curva', { ru: 'поворот', en: 'bend' }],
              ['derrapar', { ru: 'уйти в занос', en: 'to skid' }],
              ['la tracción delantera', { ru: 'передний привод', en: 'front-wheel drive' }],
              ['la propulsión trasera', { ru: 'задний привод', en: 'rear-wheel drive' }],
              ['la adherencia', { ru: 'сцепление с дорогой', en: 'grip' }],
              ['el aquaplaning', { ru: 'аквапланирование', en: 'aquaplaning' }],
              ['el charco', { ru: 'лужа', en: 'puddle' }],
              ['la niebla', { ru: 'туман', en: 'fog' }],
              ['el hielo / la placa de hielo', { ru: 'лёд, гололёд', en: 'ice / ice patch' }],
              ['las cadenas', { ru: 'цепи на колёса', en: 'snow chains' }],
              ['el viento lateral', { ru: 'боковой ветер', en: 'crosswind' }],
              ['el limpiaparabrisas', { ru: 'стеклоочиститель', en: 'windscreen wiper' }],
              ['empañarse', { ru: 'запотеть', en: 'to mist up' }],
              ['el paso a nivel', { ru: 'ж/д переезд', en: 'level crossing' }],
              ['la barrera', { ru: 'шлагбаум', en: 'barrier' }],
              ['la salida de emergencia', { ru: 'аварийный выход', en: 'emergency exit' }],
              ['el apartadero', { ru: 'аварийный карман', en: 'lay-by' }]
            ]
          }
        ]
      }
    ],
    questions: [
      {
        id: 'cs-01',
        es: '¿Cuándo debe reducir la velocidad para tomar una curva?',
        tr: { ru: 'Когда сбрасывать скорость перед поворотом?', en: 'When should you slow down for a bend?' },
        options: [
          { es: 'Antes de entrar en la curva.', ru: 'До входа в поворот.', en: 'Before entering the bend.' },
          { es: 'En mitad de la curva.', ru: 'В середине поворота.', en: 'In the middle of the bend.' },
          { es: 'Al salir de la curva.', ru: 'На выходе из поворота.', en: 'On the way out.' }
        ],
        answer: 0,
        explain: { ru: 'Тормозят на прямой до поворота. В самом повороте резкое торможение может вызвать занос.', en: 'Brake on the straight before the bend. Harsh braking in the bend can cause a skid.' },
        hint: { ru: 'Тормози прямо — поворачивай плавно.', en: 'Brake straight — turn smooth.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-02',
        es: 'En una curva, ¿qué debe hacer con el acelerador?',
        tr: { ru: 'Что делать с газом в повороте?', en: 'In a bend, what should you do with the throttle?' },
        options: [
          { es: 'Mantener una aceleración suave y constante.', ru: 'Держать мягкий ровный газ.', en: 'Keep a gentle, steady throttle.' },
          { es: 'Soltarlo de golpe.', ru: 'Резко отпустить.', en: 'Release it suddenly.' },
          { es: 'Pisarlo a fondo.', ru: 'Нажать до упора.', en: 'Floor it.' }
        ],
        answer: 0,
        explain: { ru: 'В повороте — плавный руль и мягкий ровный газ, без резких движений; разгоняются на выходе.', en: 'In a bend — smooth steering and gentle steady throttle, no sudden moves; accelerate on the way out.' },
        hint: { ru: 'Газ на выходе, а не в середине.', en: 'Gas on the way out, not in the middle.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-03',
        es: 'En un turismo de tracción delantera derrapan las ruedas traseras. ¿Qué debe hacer?',
        tr: { ru: 'У переднеприводной машины занесло задние колёса. Что делать?', en: 'A front-wheel-drive car’s rear wheels skid. What should you do?' },
        options: [
          { es: 'No frenar, girar el volante hacia el lado del derrape y acelerar suavemente.', ru: 'Не тормозить, руль в сторону заноса, мягко добавить газ.', en: 'Don’t brake, steer towards the skid and accelerate gently.' },
          { es: 'Frenar a fondo.', ru: 'Тормозить в пол.', en: 'Brake hard.' },
          { es: 'Girar el volante en sentido contrario al derrape.', ru: 'Рулить против заноса.', en: 'Steer away from the skid.' }
        ],
        answer: 0,
        explain: { ru: 'Передний привод, занос задней оси: не тормозить, руль туда, куда уходит зад, и мягко добавить газ — передние колёса «вытянут» машину.', en: 'Front-wheel drive, rear skid: no braking, steer where the back goes and add gentle throttle — the front wheels pull the car straight.' },
        hint: { ru: 'Передний привод «тянет» — подгазуй.', en: 'Front drive pulls — add a little gas.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-04',
        es: 'En un vehículo de propulsión trasera derrapan las ruedas traseras. ¿Qué debe hacer?',
        tr: { ru: 'У заднеприводной машины занесло задние колёса. Что делать?', en: 'A rear-wheel-drive car’s rear wheels skid. What should you do?' },
        options: [
          { es: 'No frenar, dejar de acelerar suavemente y girar el volante hacia el lado del derrape.', ru: 'Не тормозить, плавно сбросить газ и рулить в сторону заноса.', en: 'Don’t brake, ease off the throttle and steer towards the skid.' },
          { es: 'Acelerar a fondo.', ru: 'Газ в пол.', en: 'Accelerate hard.' },
          { es: 'Frenar y girar a la contra.', ru: 'Тормозить и рулить против.', en: 'Brake and steer the other way.' }
        ],
        answer: 0,
        explain: { ru: 'Задний привод: газ «толкает» зад ещё сильнее, поэтому газ плавно сбросить, руль в сторону заноса, не тормозить.', en: 'Rear-wheel drive: throttle pushes the back out further, so ease off, steer into the skid, no braking.' },
        hint: { ru: 'Задний привод «толкает» — отпусти газ.', en: 'Rear drive pushes — lift off.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-05',
        es: '¿Qué color tienen las señales provisionales de una zona de obras?',
        tr: { ru: 'Какого цвета временные знаки в зоне дорожных работ?', en: 'What colour are temporary signs in road works?' },
        options: [
          { es: 'Fondo amarillo.', ru: 'Жёлтый фон.', en: 'Yellow background.' },
          { es: 'Fondo blanco.', ru: 'Белый фон.', en: 'White background.' },
          { es: 'Fondo verde.', ru: 'Зелёный фон.', en: 'Green background.' }
        ],
        answer: 0,
        explain: { ru: 'В зоне работ знаки на жёлтом фоне и жёлтая разметка; они главнее обычных.', en: 'Works signs have a yellow background, with yellow markings; they override the normal ones.' },
        hint: { ru: 'Жёлтый — «временно, главнее».', en: 'Yellow — temporary, and it wins.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-06',
        es: '¿Se recomienda usar gafas de sol para conducir de noche?',
        tr: { ru: 'Стоит ли надевать солнечные очки ночью за рулём?', en: 'Should you wear sunglasses to drive at night?' },
        options: [
          { es: 'No, se ve mucho peor la vía.', ru: 'Нет: дорогу видно гораздо хуже.', en: 'No, you see the road much worse.' },
          { es: 'Sí, para no deslumbrarse.', ru: 'Да, чтобы не слепили.', en: 'Yes, to avoid dazzle.' },
          { es: 'Sí, si llueve.', ru: 'Да, если дождь.', en: 'Yes, if it rains.' }
        ],
        answer: 0,
        explain: { ru: 'Тёмные очки ночью уменьшают ослепление, но ещё сильнее уменьшают всё остальное: дорогу, людей, препятствия.', en: 'Sunglasses at night reduce dazzle but reduce everything else even more: road, people, obstacles.' },
        hint: { ru: 'Ночью — никаких тёмных очков.', en: 'At night — no dark glasses.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-07',
        es: 'Le deslumbra un vehículo de noche. ¿Hacia dónde debe dirigir la mirada?',
        tr: { ru: 'Ночью вас слепит встречная машина. Куда смотреть?', en: 'You’re dazzled at night. Where should you look?' },
        options: [
          { es: 'Hacia la línea del borde derecho de la calzada.', ru: 'На линию правого края дороги.', en: 'At the right-hand edge line.' },
          { es: 'A los faros del otro vehículo.', ru: 'На фары встречной машины.', en: 'At the other vehicle’s headlights.' },
          { es: 'Al retrovisor interior.', ru: 'В салонное зеркало.', en: 'Into the interior mirror.' }
        ],
        answer: 0,
        explain: { ru: 'Сбавьте скорость, ориентируйтесь по правой линии, не меняйте полосу, при необходимости остановитесь.', en: 'Slow down, follow the right edge line, don’t change lane, stop if necessary.' },
        hint: { ru: 'Ослепили — глаза вправо.', en: 'Dazzled — eyes right.' },
        ref: 'RGC, art. 102'
      },
      {
        id: 'cs-08',
        es: 'Va a adelantar de noche con las luces largas. ¿Qué debe hacer al acercarse al otro vehículo?',
        tr: { ru: 'Ночью вы с дальним догоняете машину для обгона. Что делать при приближении?', en: 'At night on main beam you close on a vehicle to overtake. What should you do?' },
        options: [
          { es: 'Poner las de cruce y volver a las largas al ponerse a su altura.', ru: 'Включить ближний, а поравнявшись — снова дальний.', en: 'Dip, then switch back to main beam once alongside.' },
          { es: 'Mantener las largas todo el tiempo.', ru: 'Всё время держать дальний.', en: 'Keep main beam throughout.' },
          { es: 'Apagar todas las luces.', ru: 'Выключить весь свет.', en: 'Switch all lights off.' }
        ],
        answer: 0,
        explain: { ru: 'Сзади дальний слепит водителя через зеркала — ближний. Поравнявшись, снова дальний, чтобы видеть дорогу впереди.', en: 'From behind, main beam dazzles via the mirrors — dip. Once alongside, main beam again to see ahead.' },
        hint: { ru: 'Сзади — ближний, рядом — дальний.', en: 'Behind — dipped; alongside — main.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-09',
        es: 'De noche le está adelantando otro vehículo. ¿Qué luces debe llevar?',
        tr: { ru: 'Ночью вас обгоняют. Какой свет держать?', en: 'At night another vehicle is overtaking you. Which lights?' },
        options: [
          { es: 'Las largas hasta que el otro se ponga a su altura, si no deslumbra a nadie.', ru: 'Дальний, пока он не поравняется (если никого не слепите).', en: 'Main beam until he’s alongside, if you dazzle nobody.' },
          { es: 'Ninguna.', ru: 'Никакой.', en: 'None.' },
          { es: 'La antiniebla trasera.', ru: 'Задний противотуманный.', en: 'The rear fog light.' }
        ],
        answer: 0,
        explain: { ru: 'По пособию DGT обгоняемый держит дальний, освещая дорогу обоим, пока обгоняющий не поравняется, — затем переключается, чтобы не слепить его в зеркала.', en: 'Per the DGT manual, the overtaken driver keeps main beam, lighting the road for both, until the other is alongside — then dips so as not to dazzle via the mirrors.' },
        hint: { ru: 'Свети для двоих, пока он сзади.', en: 'Light for two while he’s behind.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-10',
        es: 'De noche, dos vehículos se cruzan en una curva. ¿Quién debe cambiar primero a luces de cruce?',
        tr: { ru: 'Ночью две машины разъезжаются в повороте. Кто первым переключает на ближний?', en: 'At night two vehicles meet on a bend. Who dips first?' },
        options: [
          { es: 'El que circula por el interior de la curva.', ru: 'Тот, кто едет по внутренней стороне поворота.', en: 'The one on the inside of the bend.' },
          { es: 'El que circula por el exterior.', ru: 'Тот, кто по внешней стороне.', en: 'The one on the outside.' },
          { es: 'El que circula más rápido.', ru: 'Тот, кто быстрее.', en: 'The faster one.' }
        ],
        answer: 0,
        explain: { ru: 'Фары машины на внутренней стороне светят прямо во встречного; у машины на внешней стороне свет уходит за дорогу.', en: 'The inside car’s lights shine straight at the oncoming driver; the outside car’s light goes off the road.' },
        hint: { ru: 'Внутри поворота — «прожектор в лицо».', en: 'Inside the bend — a searchlight in the face.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-11',
        es: '¿Cuándo es más resbaladiza la calzada con lluvia?',
        tr: { ru: 'Когда дорога в дождь наиболее скользкая?', en: 'When is a road most slippery in rain?' },
        options: [
          { es: 'Al empezar a llover, con las primeras gotas.', ru: 'В начале дождя, с первыми каплями.', en: 'When it starts raining, with the first drops.' },
          { es: 'Tras horas de lluvia intensa.', ru: 'После нескольких часов ливня.', en: 'After hours of heavy rain.' },
          { es: 'Cuando deja de llover.', ru: 'Когда дождь закончился.', en: 'When the rain stops.' }
        ],
        answer: 0,
        explain: { ru: 'Первые капли смешиваются с пылью, маслом и резиной — получается скользкая плёнка. Потом сильный дождь её смывает.', en: 'The first drops mix with dust, oil and rubber into a slippery film. Heavy rain later washes it away.' },
        hint: { ru: 'Первые капли — самые коварные.', en: 'The first drops are the treacherous ones.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-12',
        es: '¿Qué es el aquaplaning?',
        tr: { ru: 'Что такое аквапланирование?', en: 'What is aquaplaning?' },
        options: [
          { es: 'La pérdida de adherencia porque el neumático no puede evacuar el agua.', ru: 'Потеря сцепления: шина не успевает отвести воду.', en: 'Loss of grip because the tyre can’t clear the water.' },
          { es: 'Un sistema de frenado para la lluvia.', ru: 'Система торможения для дождя.', en: 'A braking system for rain.' },
          { es: 'El empañamiento de los cristales.', ru: 'Запотевание стёкол.', en: 'Misting of the windows.' }
        ],
        answer: 0,
        explain: { ru: 'Между шиной и дорогой образуется водяной клин, машина «плывёт». Чаще на скорости и с изношенными или широкими шинами.', en: 'A wedge of water forms between tyre and road and the car floats. More likely at speed and with worn or wide tyres.' },
        hint: { ru: 'Аква-«лыжи»: машина едет по воде.', en: 'Water skis — the car rides on water.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-13',
        es: 'Su vehículo empieza a hacer aquaplaning. ¿Qué debe hacer?',
        tr: { ru: 'Машину начало «нести» по воде. Что делать?', en: 'Your car starts aquaplaning. What should you do?' },
        options: [
          { es: 'Soltar el acelerador sin frenar y mantener el volante recto.', ru: 'Отпустить газ, не тормозить, руль прямо.', en: 'Lift off the throttle without braking, keep the wheel straight.' },
          { es: 'Frenar fuerte.', ru: 'Резко тормозить.', en: 'Brake hard.' },
          { es: 'Girar bruscamente para salir del agua.', ru: 'Резко вырулить из воды.', en: 'Steer sharply out of the water.' }
        ],
        answer: 0,
        explain: { ru: 'Колёса не касаются дороги — тормоз и руль не работают. Плавно отпустите газ, держите руль прямо, пока шины снова не «сцепятся». Лучшая профилактика — медленно по воде.', en: 'The tyres aren’t touching the road — brakes and steering don’t work. Ease off, keep straight until grip returns. Best prevention: go slowly through water.' },
        hint: { ru: 'Плывёшь — не дёргайся.', en: 'Floating — don’t jerk.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-14',
        es: 'Después de atravesar un charco profundo, ¿qué conviene hacer?',
        tr: { ru: 'Что сделать после глубокой лужи?', en: 'After driving through a deep puddle, what should you do?' },
        options: [
          { es: 'Comprobar que los frenos funcionan, frenando suavemente.', ru: 'Проверить тормоза, мягко нажав на педаль.', en: 'Check the brakes work by braking gently.' },
          { es: 'Acelerar para secar los frenos.', ru: 'Разогнаться, чтобы высушить тормоза.', en: 'Speed up to dry the brakes.' },
          { es: 'Nada.', ru: 'Ничего.', en: 'Nothing.' }
        ],
        answer: 0,
        explain: { ru: 'Мокрые тормоза работают хуже. Несколько лёгких нажатий подсушат колодки и покажут, всё ли в порядке.', en: 'Wet brakes work less well. A few light presses dry the pads and show they’re working.' },
        hint: { ru: 'Лужа — проверь тормоз.', en: 'Puddle — test the brakes.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-15',
        es: 'Con nieve, ¿cómo debe arrancar el vehículo?',
        tr: { ru: 'Как трогаться на снегу?', en: 'How should you move off on snow?' },
        options: [
          { es: 'Con las ruedas rectas y una marcha que dé poca fuerza (más larga).', ru: 'С прямыми колёсами на более высокой передаче (меньше тяги).', en: 'With wheels straight and a higher gear for less force.' },
          { es: 'En primera y acelerando fuerte.', ru: 'На первой с сильным газом.', en: 'In first with lots of throttle.' },
          { es: 'Con las ruedas giradas.', ru: 'С повёрнутыми колёсами.', en: 'With the wheels turned.' }
        ],
        answer: 0,
        explain: { ru: 'Меньше тяги — меньше пробуксовка. Трогаться прямо, на более высокой передаче, мягко.', en: 'Less force — less wheelspin. Move off straight, in a higher gear, gently.' },
        hint: { ru: 'Снег — «высокая» передача и мягкая нога.', en: 'Snow — a higher gear and a soft foot.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-16',
        es: 'Al bajar una pendiente con nieve, ¿qué marcha es aconsejable?',
        tr: { ru: 'Какую передачу использовать на спуске по снегу?', en: 'Going downhill on snow, which gear is advisable?' },
        options: [
          { es: 'Una marcha corta, primera o segunda, para retener.', ru: 'Низкую — первую или вторую, чтобы тормозить двигателем.', en: 'A low gear, first or second, to hold the car back.' },
          { es: 'Punto muerto.', ru: 'Нейтраль.', en: 'Neutral.' },
          { es: 'La más larga posible.', ru: 'Самую высокую.', en: 'The highest possible.' }
        ],
        answer: 0,
        explain: { ru: 'На спуске низкая передача держит машину двигателем, и тормозить почти не нужно.', en: 'On a descent a low gear holds the car with the engine, so you barely need the brakes.' },
        hint: { ru: 'Вниз — низкая передача.', en: 'Down the hill — low gear.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-17',
        es: 'La señal R-412 obliga a…',
        tr: { ru: 'Знак R-412 обязывает…', en: 'Sign R-412 requires you to…' },
        options: [
          { es: 'usar cadenas para nieve u otros dispositivos autorizados.', ru: '…использовать цепи или другие разрешённые средства.', en: '…use snow chains or other approved devices.' },
          { es: 'encender las luces antiniebla.', ru: '…включить противотуманки.', en: '…switch on fog lights.' },
          { es: 'circular a menos de 30 km/h.', ru: '…ехать медленнее 30 км/ч.', en: '…drive under 30 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'R-412 — цепи обязательны. Их надевают минимум на ведущие колёса, по одной с каждой стороны.', en: 'R-412 — chains compulsory. Fit them at least to the driven wheels, one each side.' },
        hint: { ru: 'R-412 — «цепи надень».', en: 'R-412 — chains on.' },
        ref: 'RGC, art. 155'
      },
      {
        id: 'cs-18',
        es: '¿Dónde es más probable encontrar hielo en la calzada?',
        tr: { ru: 'Где на дороге вероятнее всего лёд?', en: 'Where is ice most likely on the road?' },
        options: [
          { es: 'En puentes, zonas de sombra y zonas húmedas, de noche o de madrugada.', ru: 'На мостах, в тени и сырых местах, ночью и рано утром.', en: 'On bridges, in shade and damp spots, at night or dawn.' },
          { es: 'En rectas soleadas a mediodía.', ru: 'На солнечных прямых в полдень.', en: 'On sunny straights at midday.' },
          { es: 'Dentro de los túneles largos.', ru: 'В длинных туннелях.', en: 'Inside long tunnels.' }
        ],
        answer: 0,
        explain: { ru: 'Мосты остывают быстрее (воздух снизу), тень и сырые низины не прогреваются. Самое опасное время — ночь и раннее утро.', en: 'Bridges cool faster (air underneath), shade and damp hollows stay cold. The riskiest time is night and early morning.' },
        hint: { ru: 'Мост и тень — каток.', en: 'Bridge and shade — an ice rink.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-19',
        es: 'Con niebla, ¿qué es lo más aconsejable?',
        tr: { ru: 'Что лучше всего делать в тумане?', en: 'In fog, what is most advisable?' },
        options: [
          { es: 'Reducir la velocidad, aumentar la distancia y guiarse por las marcas viales.', ru: 'Снизить скорость, увеличить дистанцию, ориентироваться по разметке.', en: 'Slow down, increase the gap and follow the road markings.' },
          { es: 'Llevar las luces largas.', ru: 'Ехать с дальним.', en: 'Use main beam.' },
          { es: 'Seguir muy de cerca al vehículo de delante.', ru: 'Держаться вплотную за передней машиной.', en: 'Follow the car ahead very closely.' }
        ],
        answer: 0,
        explain: { ru: 'В тумане — ближний и противотуманки, медленно, большая дистанция, ориентир — разметка, без лишних обгонов. Дальний отражается от тумана и слепит.', en: 'In fog — dipped plus fog lights, slowly, a big gap, follow the markings, no needless overtaking. Main beam reflects off fog and dazzles.' },
        hint: { ru: 'Туман — «медленно, далеко, по линии».', en: 'Fog — slow, far back, follow the line.' },
        ref: 'RGC, art. 106'
      },
      {
        id: 'cs-20',
        es: 'Con fuerte viento lateral, ¿qué vehículos son más afectados?',
        tr: { ru: 'Какие машины сильнее страдают от бокового ветра?', en: 'In strong crosswinds, which vehicles are most affected?' },
        options: [
          { es: 'Los de dos ruedas y los que llevan remolque.', ru: 'Двухколёсные и машины с прицепом.', en: 'Two-wheelers and vehicles with trailers.' },
          { es: 'Los turismos pequeños, solo en ciudad.', ru: 'Маленькие легковые, только в городе.', en: 'Small cars, only in town.' },
          { es: 'Ninguno en particular.', ru: 'Никакие особенно.', en: 'None in particular.' }
        ],
        answer: 0,
        explain: { ru: 'Ветер сильнее всего сдувает мотоциклы, мопеды, велосипеды и машины с прицепом (особенно с высоким, как дом на колёсах).', en: 'Wind affects motorbikes, mopeds, bicycles and vehicles towing (especially tall ones like caravans) the most.' },
        hint: { ru: 'Лёгкий и высокий — первый под ветер.', en: 'Light or tall — first to be blown.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-21',
        es: 'Con viento lateral fuerte, ¿cómo debe sujetar el volante?',
        tr: { ru: 'Как держать руль при сильном боковом ветре?', en: 'In strong crosswinds, how should you hold the wheel?' },
        options: [
          { es: 'Con firmeza, corrigiendo hacia el lado del que viene el viento.', ru: 'Крепко, подруливая в сторону, откуда дует.', en: 'Firmly, correcting towards the side the wind comes from.' },
          { es: 'Con una sola mano.', ru: 'Одной рукой.', en: 'With one hand.' },
          { es: 'Suelto, para que el coche se adapte.', ru: 'Свободно, чтобы машина «подстроилась».', en: 'Loosely, so the car adapts.' }
        ],
        answer: 0,
        explain: { ru: 'Крепко держать руль, чуть против ветра, ехать медленнее, окна закрыты. Осторожно при выезде из-за грузовика, у мостов и просветов между зданиями.', en: 'Grip firmly, steer slightly into the wind, slow down, windows closed. Watch out when passing lorries, by bridges and gaps between buildings.' },
        hint: { ru: 'Ветер толкает — ты упираешься.', en: 'The wind pushes — you push back.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-22',
        es: '¿Qué distancia mínima debe guardar un turismo con el vehículo de delante dentro de un túnel?',
        tr: { ru: 'Какую минимальную дистанцию держит легковая в туннеле?', en: 'What minimum gap must a car keep in a tunnel?' },
        options: [
          { es: '100 metros o 4 segundos.', ru: '100 м или 4 секунды.', en: '100 m or 4 seconds.' },
          { es: '50 metros o 2 segundos.', ru: '50 м или 2 секунды.', en: '50 m or 2 seconds.' },
          { es: '150 metros o 6 segundos.', ru: '150 м или 6 секунд.', en: '150 m or 6 seconds.' }
        ],
        answer: 0,
        explain: { ru: 'В туннеле легковые — не меньше 100 м (4 с), машины тяжелее 3500 кг — 150 м (6 с).', en: 'In tunnels cars keep at least 100 m (4 s), vehicles over 3,500 kg 150 m (6 s).' },
        hint: { ru: 'Туннель — сотня метров.', en: 'Tunnel — a hundred metres.' },
        ref: 'DGT, Manual básico, tema 12'
      },
      {
        id: 'cs-23',
        es: 'Dentro de un túnel se forma un atasco y se detiene. ¿Qué debe hacer?',
        tr: { ru: 'В туннеле пробка, вы стоите. Что делать?', en: 'Traffic stops in a tunnel and you halt. What should you do?' },
        options: [
          { es: 'Parar el motor, dejar las luces de posición y permanecer en el vehículo.', ru: 'Заглушить двигатель, оставить габариты и сидеть в машине.', en: 'Stop the engine, leave the sidelights on and stay in the car.' },
          { es: 'Salir a pie hacia la salida.', ru: 'Идти пешком к выходу.', en: 'Walk to the exit.' },
          { es: 'Dar la vuelta.', ru: 'Развернуться.', en: 'Turn round.' }
        ],
        answer: 0,
        explain: { ru: 'В пробке в туннеле все остаются в машине, двигатель глушат (меньше выхлопа), габариты оставляют, при остановке на секунду включают аварийку.', en: 'In a tunnel queue everyone stays inside, the engine goes off (less exhaust), sidelights stay on, and hazards flash briefly on stopping.' },
        hint: { ru: 'Стоим в туннеле — мотор выкл., габариты вкл.', en: 'Stuck in a tunnel — engine off, sidelights on.' },
        ref: 'DGT, Manual básico, tema 12'
      },
      {
        id: 'cs-24',
        es: 'Hay un incendio dentro de un túnel y no puede avanzar. ¿Qué debe hacer?',
        tr: { ru: 'В туннеле пожар, проехать нельзя. Что делать?', en: 'There’s a fire in a tunnel and you can’t move on. What should you do?' },
        options: [
          { es: 'Apartarse a la derecha, parar el motor, dejar la llave puesta y salir a pie a la salida de emergencia.', ru: 'Прижаться вправо, заглушить, оставить ключ и уйти к аварийному выходу.', en: 'Pull right, stop the engine, leave the key in and walk to an emergency exit.' },
          { es: 'Quedarse en el coche con las ventanillas cerradas.', ru: 'Сидеть в машине с закрытыми окнами.', en: 'Stay in the car with windows shut.' },
          { es: 'Dar marcha atrás hasta la entrada.', ru: 'Сдать задом до въезда.', en: 'Reverse to the entrance.' }
        ],
        answer: 0,
        explain: { ru: 'При пожаре машину оставляют справа (ключ в замке — чтобы её могли убрать спасатели) и уходят к аварийному выходу.', en: 'In a fire leave the car on the right (key in so rescuers can move it) and walk to an emergency exit.' },
        hint: { ru: 'Пожар — ключ в замке, ноги к выходу.', en: 'Fire — key in, feet to the exit.' },
        ref: 'DGT, Manual básico, tema 12'
      },
      {
        id: 'cs-25',
        es: '¿Puede entrar en un túnel si el semáforo de entrada está en rojo?',
        tr: { ru: 'Можно ли въехать в туннель на красный светофор у входа?', en: 'May you enter a tunnel when the entrance light is red?' },
        options: [
          { es: 'No.', ru: 'Нет.', en: 'No.' },
          { es: 'Sí, con precaución.', ru: 'Да, осторожно.', en: 'Yes, carefully.' },
          { es: 'Sí, si no ve vehículos dentro.', ru: 'Да, если внутри не видно машин.', en: 'Yes, if you see no vehicles inside.' }
        ],
        answer: 0,
        explain: { ru: 'Красный у входа означает проблему внутри (пожар, авария) — въезжать нельзя.', en: 'Red at the entrance means trouble inside (fire, crash) — don’t enter.' },
        hint: { ru: 'Красный у туннеля — внутри беда.', en: 'Red at a tunnel — trouble inside.' },
        ref: 'DGT, Manual básico, tema 12'
      },
      {
        id: 'cs-26',
        es: 'Las barreras de un paso a nivel empiezan a bajar. ¿Qué debe hacer?',
        tr: { ru: 'Шлагбаум переезда начал опускаться. Что делать?', en: 'The barriers of a level crossing start coming down. What should you do?' },
        options: [
          { es: 'Detenerse y esperar.', ru: 'Остановиться и ждать.', en: 'Stop and wait.' },
          { es: 'Acelerar para pasar antes de que bajen.', ru: 'Ускориться, чтобы проскочить.', en: 'Speed up to get through.' },
          { es: 'Pasar si no se ve el tren.', ru: 'Проехать, если поезда не видно.', en: 'Cross if no train is visible.' }
        ],
        answer: 0,
        explain: { ru: 'Пересекать переезд нельзя, если он закрыт, шлагбаум движется или горит красный. Ждать в своей полосе по очереди.', en: 'You may not cross if it’s closed, the barriers are moving or the light is red. Wait in your lane, in turn.' },
        hint: { ru: 'Шлагбаум шевелится — ты стоишь.', en: 'Barrier moving — you stay put.' },
        ref: 'DGT, Manual básico, tema 12'
      },
      {
        id: 'cs-27',
        es: 'Su vehículo queda detenido sobre las vías de un paso a nivel. ¿Qué es lo primero que deben hacer los pasajeros?',
        tr: { ru: 'Машина заглохла на путях переезда. Что первым делают пассажиры?', en: 'Your car stalls on the tracks of a level crossing. What should passengers do first?' },
        options: [
          { es: 'Bajar del vehículo.', ru: 'Выйти из машины.', en: 'Get out of the car.' },
          { es: 'Quedarse dentro con el cinturón.', ru: 'Остаться внутри пристёгнутыми.', en: 'Stay inside, belted.' },
          { es: 'Empujar el vehículo sin bajarse.', ru: 'Толкать, не выходя.', en: 'Push the car without getting out.' }
        ],
        answer: 0,
        explain: { ru: 'Пассажиры сразу выходят. Водитель пытается завести; если нет — тоже выходит и предупреждает поезд и другие машины.', en: 'Passengers get out at once. The driver tries to restart; if not, gets out too and warns the train and other traffic.' },
        hint: { ru: 'На рельсах — сначала люди наружу.', en: 'On the rails — people out first.' },
        ref: 'DGT, Manual básico, tema 12'
      },
      {
        id: 'cs-28',
        es: 'Con mucho calor, ¿qué temperatura se recomienda en el aire acondicionado?',
        tr: { ru: 'Какую температуру ставить на кондиционере в жару?', en: 'In hot weather, what A/C temperature is recommended?' },
        options: [
          { es: 'Entre 20 y 23 °C.', ru: '20–23 °C.', en: '20–23 °C.' },
          { es: 'Entre 15 y 17 °C.', ru: '15–17 °C.', en: '15–17 °C.' },
          { es: 'Unos 28 °C.', ru: 'Около 28 °C.', en: 'About 28 °C.' }
        ],
        answer: 0,
        explain: { ru: 'В жару быстрее наступают усталость и раздражение. Оптимально 20–23 °C, больше остановок, больше воды.', en: 'Heat brings fatigue and irritability sooner. Best is 20–23 °C, more breaks, more water.' },
        hint: { ru: '20–23 — «весна» в салоне.', en: '20–23 — spring in the cabin.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-29',
        es: '¿Por qué es más peligroso conducir de noche?',
        tr: { ru: 'Почему ночью ездить опаснее?', en: 'Why is driving at night more dangerous?' },
        options: [
          { es: 'Porque se calculan peor las distancias y hay deslumbramientos.', ru: 'Хуже оцениваются расстояния и бывают ослепления.', en: 'Distances are harder to judge and there is dazzle.' },
          { es: 'Porque hay más tráfico.', ru: 'Машин больше.', en: 'There is more traffic.' },
          { es: 'Porque los frenos funcionan peor.', ru: 'Тормоза хуже работают.', en: 'Brakes work less well.' }
        ],
        answer: 0,
        explain: { ru: 'Ночью меньше света, хуже видно людей и препятствия, сложнее оценить расстояния, мешают встречные фары, глазам нужно время на адаптацию.', en: 'At night there’s less light, people and obstacles are harder to see, distances harder to judge, oncoming lights dazzle, eyes need time to adjust.' },
        hint: { ru: 'Ночь — меньше видишь, позже реагируешь.', en: 'Night — see less, react later.' },
        ref: 'DGT, Manual básico, tema 14'
      },
      {
        id: 'cs-30',
        es: 'Pasa de una zona muy iluminada a otra oscura. ¿Qué debe tener en cuenta?',
        tr: { ru: 'Вы въезжаете из ярко освещённого места в тёмное. Что учесть?', en: 'You go from a brightly lit area into a dark one. What should you consider?' },
        options: [
          { es: 'Que la vista tarda unos segundos en adaptarse; conviene reducir la velocidad.', ru: 'Глазам нужно несколько секунд на привыкание — лучше сбавить скорость.', en: 'Your eyes take a few seconds to adapt; slow down.' },
          { es: 'Que se ve mejor inmediatamente.', ru: 'Сразу видно лучше.', en: 'You see better immediately.' },
          { es: 'Que debe poner la antiniebla trasera.', ru: 'Нужно включить задний противотуманный.', en: 'You must switch on the rear fog light.' }
        ],
        answer: 0,
        explain: { ru: 'При переходе от света к темноте (и на выезде из туннеля — наоборот) глаза адаптируются несколько секунд: сбавьте скорость.', en: 'Going from light to dark (and the reverse leaving a tunnel) eyes need a few seconds to adapt: slow down.' },
        hint: { ru: 'Свет → тьма: секунды слепоты.', en: 'Light → dark: seconds of blindness.' },
        ref: 'DGT, Manual básico, tema 14'
      }
    ]
  }
]);
