// DGT · theory, topic 14: driving safely. Sources: DGT «Teórica abreviada, lectura fácil» (2025),
// DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-conducir-seguro', level: 'DGT',
    title: { ru: 'Безопасное вождение', en: 'Driving safely' },
    summary: {
      ru: 'Повороты и занос, ночь и ослепление, тоннели, дождь, туман, снег и лёд, ветер, autopista и уязвимые участники движения.',
      en: 'Bends and skids, night and dazzle, tunnels, rain, fog, snow and ice, wind, motorways and vulnerable road users.'
    },
    hero: {
      es: 'Conducir de forma <b>segura</b>',
      sub: { ru: 'Как ехать, когда дорога, погода или темнота против вас', en: 'How to drive when the road, the weather or the dark is against you' }
    },
    tabs: [
      { id: 'road', label: { ru: 'Дорога', en: 'The road' }, blocks: [
        { type: 'text', color: 'amber', body: {
          ru: '<b>Посадка за рулём.</b> Спина прижата к спинке, руки слегка согнуты, запястья достают до верха руля; ноги выжимают педали до упора, не выпрямляясь полностью. Руль держите двумя руками («без пятнадцати три» или «десять минут третьего»). Зеркала настраивайте до поездки.',
          en: '<b>Seating position.</b> Back against the seat, arms slightly bent, wrists reach the top of the wheel; legs press the pedals fully without locking straight. Hold the wheel with both hands (“quarter to three” or “ten to two”). Adjust the mirrors before setting off.' } },
        { type: 'rules', heading: { ru: 'Поворот в три шага', en: 'A bend in three steps' }, items: [
          { color: 'amber', label: { ru: 'До', en: 'Before' }, title: { ru: 'Сбросить скорость', en: 'Slow down' }, es: 'antes de la curva',
            body: { ru: 'Тормозите <b>на прямой</b>, до поворота, и держитесь ближе к правому краю.', en: 'Brake <b>on the straight</b>, before the bend, and keep close to the right edge.' } },
          { color: 'amber', label: { ru: 'В повороте', en: 'In the bend' }, title: { ru: 'Плавно', en: 'Smoothly' }, es: 'dentro de la curva',
            body: { ru: 'Руль поворачивайте плавно, без резких газа и тормоза; слегка подгазовывайте.', en: 'Turn the wheel smoothly, no sharp throttle or braking; accelerate gently.' } },
          { color: 'amber', label: { ru: 'После', en: 'After' }, title: { ru: 'Выпрямить и разогнаться', en: 'Straighten, speed up' }, es: 'a la salida',
            body: { ru: 'Плавно выпрямите руль и постепенно наберите скорость.', en: 'Straighten the wheel smoothly and pick up speed gradually.' } }
        ] },
        { type: 'table', heading: { ru: 'Если машину заносит', en: 'If the car skids' },
          head: [{ ru: 'Что заносит', en: 'What skids' }, { ru: 'Что делать', en: 'What to do' }],
          rows: [
            [{ ru: 'Зад, передний привод', en: 'Rear, front-wheel drive' }, { ru: 'без тормоза, руль в занос, газ', en: 'no brake, steer into it, gas' }],
            [{ ru: 'Зад, задний привод', en: 'Rear, rear-wheel drive' }, { ru: 'без тормоза, мягко убрать газ', en: 'no brake, ease off the gas' }],
            [{ ru: 'Перед (машина «уходит прямо»)', en: 'Front (car goes straight)' }, { ru: 'сбросить газ, выровнять руль', en: 'lift off, straighten wheel' }]
          ] },
        { type: 'text', body: {
          ru: '«Руль в занос» — поворачивайте туда, куда уходит задняя часть машины. Занос чаще всего вызывают: высокая скорость, резкий поворот руля, резкое торможение, изношенные шины или амортизаторы, плохо размещённый груз.',
          en: '“Steer into the skid” — turn towards where the rear of the car is sliding. Skids are usually caused by: high speed, a sharp turn of the wheel, harsh braking, worn tyres or shock absorbers, badly loaded cargo.' } },
        { type: 'text', color: 'amber', body: {
          ru: '<b>Ремонтные работы.</b> Знаки на <b>жёлтом фоне</b> и <b>жёлтая разметка</b> действуют временно и важнее обычных белых. Выполняйте указания рабочих-регулировщиков.',
          en: '<b>Roadworks.</b> Signs on a <b>yellow background</b> and <b>yellow road markings</b> are temporary and override the usual white ones. Follow the instructions of the road crew.' } },
        { type: 'signs', heading: { ru: 'Знаки', en: 'Signs' }, items: ['P-18', 'P-19', 'P-26', 'P-29'] }
      ] },
      { id: 'night', label: { ru: 'Ночь/тоннель', en: 'Night/tunnel' }, blocks: [
        { type: 'text', color: 'blue', body: {
          ru: ['Ночью хуже видно расстояния, людей и препятствия, а встречные фары слепят. Ехать нужно так, чтобы <b>остановиться в пределах освещённой зоны</b>.',
               'Дальний свет переключайте на ближний, как только можете ослепить встречного <b>или</b> того, кто едет впереди (через зеркало). Включать дальний снова можно, когда встречная машина уже прошла (RGC, ст. 102).'],
          en: ['At night distances, people and obstacles are harder to see and oncoming headlights dazzle. Drive so that you can <b>stop within the lit area</b>.',
               'Switch from main beam to dipped as soon as you might dazzle an oncoming driver <b>or</b> the one ahead (through the mirror). Main beam can go back on once the oncoming car has passed (RGC art. 102).'] } },
        { type: 'rules', heading: { ru: 'Если вас ослепили', en: 'If you are dazzled' }, items: [
          { color: 'blue', title: { ru: 'Сбавить скорость', en: 'Slow down' }, es: 'reducir la velocidad',
            body: { ru: 'Снижайте скорость — <b>вплоть до полной остановки</b>, не меняя полосы. Ориентируйтесь по <b>правой краевой линии</b>.',
                    en: 'Slow down — <b>even to a full stop</b> — without changing lane. Use the <b>right edge line</b> as a guide.' } },
          { color: 'blue', title: { ru: 'Без тёмных очков', en: 'No sunglasses' }, es: 'sin gafas de sol',
            body: { ru: 'Ночью тёмные очки не надевают: слепить будет меньше, но дорогу вы увидите намного хуже.',
                    en: 'Do not wear sunglasses at night: the glare is less, but you see the road far worse.' } }
        ] },
        { type: 'table', heading: { ru: 'Тоннель', en: 'In a tunnel' },
          head: [{ ru: 'Правило', en: 'Rule' }, { ru: 'Что нужно', en: 'What applies' }],
          rows: [
            [{ ru: 'Свет', en: 'Lights' }, { ru: 'включён в любое время', en: 'on at any time of day' }],
            [{ ru: 'Дистанция, легковая', en: 'Gap, car' }, { ru: '≥ 100 м или 4 секунды', en: '≥ 100 m or 4 seconds' }],
            [{ ru: 'Дистанция, > 3500 кг', en: 'Gap, > 3,500 kg' }, { ru: '≥ 150 м или 6 секунд', en: '≥ 150 m or 6 seconds' }],
            [{ ru: 'Обгон, встречное движение', en: 'Overtaking, two-way' }, { ru: 'запрещён', en: 'forbidden' }],
            [{ ru: 'Стоянка, разворот, задний', en: 'Stop, U-turn, reverse' }, { ru: 'запрещены', en: 'forbidden' }]
          ] },
        { type: 'text', color: 'blue', body: {
          ru: ['<b>Пробка в тоннеле:</b> остаёмся в машине, глушим двигатель, габариты не выключаем, держим большую дистанцию.',
               '<b>Поломка или авария в тоннеле:</b> аварийка и габариты, по возможности — в аварийный карман, двигатель выключить, поставить V-16, вызвать помощь с поста SOS и выйти всем к ближайшему убежищу или выходу. <b>Пожар:</b> прижаться вправо, заглушить, ключ оставить, двери открыть, уходить в сторону от огня.'],
          en: ['<b>Jam in a tunnel:</b> stay in the car, switch the engine off, keep the side lights on, leave a big gap.',
               '<b>Breakdown or crash in a tunnel:</b> hazard and side lights, an emergency bay if possible, engine off, place the V-16, call for help at the SOS post, and everyone walks to the nearest shelter or exit. <b>Fire:</b> pull to the right, engine off, leave the key, doors open, walk away from the fire.'] } },
        { type: 'signs', heading: { ru: 'Знаки', en: 'Signs' }, items: ['S-5', 'R-413', 'S-34a', 'S-980'] }
      ] },
      { id: 'weather', label: { ru: 'Дождь, туман', en: 'Rain & fog' }, blocks: [
        { type: 'rules', heading: { ru: 'Дождь', en: 'Rain' }, items: [
          { color: 'teal', title: { ru: 'Первые капли', en: 'The first drops' }, es: 'las primeras gotas',
            body: { ru: 'Самый опасный момент: вода смешивается с пылью и маслом, получается скользкая грязь. Мотоциклистам опасна мокрая разметка.',
                    en: 'The most dangerous moment: water mixes with dust and oil into slippery mud. For motorcyclists wet road markings are dangerous.' } },
          { color: 'teal', title: { ru: 'Что делать', en: 'What to do' }, es: 'más distancia',
            body: { ru: 'Снизить скорость, <b>увеличить дистанцию</b>, тормозить плавно, после глубокой лужи проверить тормоза. Если колёса скользят — убрать ногу с газа, <b>не тормозя</b>.',
                    en: 'Slow down, <b>increase the gap</b>, brake gently, test the brakes after a deep puddle. If the wheels slip, lift off the throttle <b>without braking</b>.' } }
        ] },
        { type: 'text', color: 'teal', body: {
          ru: '<b>Аквапланирование</b> (<i>aquaplaning</i>): шина не успевает отвести воду и «всплывает» — руль и тормоза не работают. Риск выше при высокой скорости и широких или изношенных шинах. Профилактика — <b>медленно</b> через воду. Если началось: не тормозить и не крутить руль, плавно отпустить газ.',
          en: '<b>Aquaplaning</b>: the tyre cannot clear the water and rides up on it — steering and brakes stop working. The risk is higher at speed and with wide or worn tyres. Prevention: go <b>slowly</b> through water. If it happens: no braking, no steering, ease off the throttle.' } },
        { type: 'rules', heading: { ru: 'Туман, пыль, дым', en: 'Fog, dust, smoke' }, items: [
          { color: 'teal', title: { ru: 'Свет', en: 'Lights' }, es: 'luces de cruce y antiniebla',
            body: { ru: 'Ближний свет и <b>передние противотуманные</b>. <b>Задний противотуманный</b> — только при особенно плохой видимости: густой туман, ливень, сильный снегопад, плотный дым или пыль (RGC, ст. 106).',
                    en: 'Dipped beam and <b>front fog lights</b>. The <b>rear fog light</b> only when visibility is especially bad: thick fog, very heavy rain, heavy snow, dense smoke or dust (RGC art. 106).' } },
          { color: 'teal', title: { ru: 'Как ехать', en: 'How to drive' }, es: 'despacio y sin adelantar',
            body: { ru: 'Медленно, с большой дистанцией, по разметке; без обгонов без необходимости; осторожно на перекрёстках; проветривать салон, чтобы стёкла не запотевали.',
                    en: 'Slowly, with a big gap, following the markings; no overtaking unless necessary; care at junctions; ventilate so the windows do not mist up.' } }
        ] },
        { type: 'rules', heading: { ru: 'Ветер и жара', en: 'Wind and heat' }, items: [
          { color: 'teal', title: { ru: 'Боковой ветер', en: 'Crosswind' }, es: 'viento lateral',
            body: { ru: 'Опаснее всего для мотоциклов и машин с прицепом — при обгоне большой машины, на мостах, при выезде из-за зданий и деревьев. Сбавить скорость, крепко держать руль против ветра, закрыть окна.',
                    en: 'Most dangerous for motorbikes and cars with trailers — when passing a large vehicle, on bridges, when leaving the shelter of buildings or trees. Slow down, hold the wheel firmly against the wind, close the windows.' } },
          { color: 'teal', title: { ru: 'Жара', en: 'Heat' }, es: 'entre 20 y 23 grados',
            body: { ru: 'Раньше приходят сонливость и усталость, растёт время реакции и раздражительность. Кондиционер на <b>20–23 °C</b>, чаще отдыхать, пить воду, после еды быть внимательнее.',
                    en: 'Drowsiness and fatigue come sooner, reaction time and irritability grow. Air-con at <b>20–23 °C</b>, rest more often, drink water, take extra care after meals.' } }
        ] },
        { type: 'signs', heading: { ru: 'Знаки', en: 'Signs' }, items: ['P-33', 'P-29', 'S-890c'] }
      ] },
      { id: 'winter', label: { ru: 'Снег и лёд', en: 'Snow & ice' }, blocks: [
        { type: 'rules', heading: { ru: 'Как ехать по снегу и льду', en: 'Driving on snow and ice' }, items: [
          { color: 'purple', title: { ru: 'Трогание', en: 'Moving off' }, es: 'ruedas rectas',
            body: { ru: 'Колёса прямо, <b>высокая передача</b> и мало газа, чтобы колёса не буксовали.',
                    en: 'Wheels straight, a <b>higher gear</b> and little throttle so the wheels do not spin.' } },
          { color: 'purple', title: { ru: 'В движении', en: 'On the move' }, es: 'por las rodadas',
            body: { ru: 'Без резких движений рулём и газом, <b>большая дистанция</b>, тормозить мало и мягко, ехать по колеям других машин. Под горку — медленно, на <b>1-й или 2-й</b> передаче.',
                    en: 'No sudden steering or throttle, a <b>big gap</b>, brake little and gently, follow the tracks of other cars. Downhill — slowly, in <b>1st or 2nd</b> gear.' } }
        ] },
        { type: 'text', color: 'purple', body: {
          ru: ['<b>Цепи</b> (<i>cadenas</i>): знак <b>R-412</b> запрещает ехать дальше без цепей или другого разрешённого средства (зимние шины). Цепи ставят на <b>ведущие колёса</b> — минимум по одному с каждой стороны ведущей оси.',
               '<b>Где бывает лёд:</b> ночью и рано утром, во влажных местах, в тени, на <b>мостах и эстакадах</b>, в низинах; там, где стоит знак P-34. Перед поездкой очистите все стёкла и зеркала ото льда.'],
          en: ['<b>Chains</b> (<i>cadenas</i>): sign <b>R-412</b> forbids continuing without chains or another authorised device (winter tyres). Chains go on the <b>driven wheels</b> — at least one on each side of the driven axle.',
               '<b>Where ice forms:</b> at night and early morning, in damp spots, in shade, on <b>bridges and flyovers</b>, in dips; wherever sign P-34 stands. Before setting off, clear all windows and mirrors of ice.'] } },
        { type: 'signs', heading: { ru: 'Знаки', en: 'Signs' }, items: [
          { code: 'R-412', note: { ru: 'Без цепей дальше нельзя', en: 'No further without chains' } },
          { code: 'P-34', note: { ru: 'Лёд или снег', en: 'Ice or snow' } },
          'S-890a', 'S-129'
        ] },
        { type: 'tip', title: { ru: 'Зимой в дорогу', en: 'Winter trips' }, body: {
          ru: 'Полный бак, цепи, тёплая одежда, вода, еда и фонарь. Проверяйте прогноз и состояние дорог до выезда. Когда после снегопада выходит солнце, пригодятся тёмные очки.',
          en: 'A full tank, chains, warm clothes, water, food and a torch. Check the forecast and road conditions before leaving. When the sun comes out after snow, sunglasses help.' } }
      ] },
      { id: 'users', label: { ru: 'Трасса, люди', en: 'Roads, users' }, blocks: [
        { type: 'figure', src: 'img/dgt/conducir-seguro-ciclista.svg',
          alt: { ru: 'Схема обгона велосипедиста на дороге с одной полосой в каждую сторону: машина полностью уходит на встречную полосу, боковой интервал не меньше 1,5 м; за городом скорость на 20 км/ч ниже разрешённой; при двух полосах в одну сторону — полная смена полосы.',
                 en: 'Diagram of overtaking a cyclist on a road with one lane each way: the car moves fully into the opposite lane, side gap at least 1.5 m; outside towns, speed at least 20 km/h below the limit; with two lanes each way, a full lane change.' },
          caption: { ru: 'Обгон велосипедиста (RGC, ст. 85.4).', en: 'Overtaking a cyclist (RGC art. 85.4).' } },
        { type: 'rules', heading: { ru: 'Уязвимые участники', en: 'Vulnerable road users' }, items: [
          { color: 'coral', title: { ru: 'Велосипедисты', en: 'Cyclists' }, es: 'separación de 1,5 m',
            body: { ru: 'Обгон — с интервалом <b>не меньше 1,5 м</b>, частично или полностью по соседней полосе; при двух полосах в одну сторону — <b>полностью</b> перестроиться. За городом скорость на <b>20 км/ч ниже</b> лимита дороги. Нельзя, если мешаете встречным, даже тем, кто едет по обочине. Группа велосипедистов — одно целое. Нарушение — 6 баллов.',
                    en: 'Overtake with a gap of <b>at least 1.5 m</b>, partly or fully in the next lane; with two lanes each way, change lane <b>fully</b>. Outside towns, at least <b>20 km/h below</b> the road’s limit. Not allowed if it endangers oncoming users, even on the shoulder. A group of cyclists counts as one unit. Breaking this costs 6 points.' } },
          { color: 'coral', title: { ru: 'Мотоциклы', en: 'Motorbikes' }, es: 'ángulo muerto',
            body: { ru: 'Их плохо видно: проверяйте <b>мёртвую зону</b> перед перестроением, не едьте рядом с мотоциклом — либо впереди, либо позади, держите дистанцию.',
                    en: 'They are hard to see: check the <b>blind spot</b> before changing lane, do not ride alongside a motorbike — be ahead or behind — and keep your distance.' } },
          { color: 'coral', title: { ru: 'Пешеходы', en: 'Pedestrians' }, es: 'niños y mayores',
            body: { ru: 'Больше всего рискуют <b>дети</b> (их плохо видно, они не чувствуют опасности) и <b>пожилые</b> (хуже видят и слышат, медленнее переходят). Осторожно у школ, стоящих автобусов и при выезде из гаража.',
                    en: 'Most at risk are <b>children</b> (hard to see, little sense of danger) and <b>the elderly</b> (poorer sight and hearing, slower crossing). Take care near schools, stopped buses and when leaving a garage.' } },
          { color: 'coral', title: { ru: 'Самокаты (VMP)', en: 'E-scooters (VMP)' }, es: 'vehículos de movilidad personal',
            body: { ru: 'Нельзя на autopista, autovía, травесиях, загородных дорогах и в городских тоннелях. Шлем обязателен, свет всегда включён, водителю — не меньше 15 лет.',
                    en: 'Not allowed on autopistas, autovías, travesías, interurban roads or urban tunnels. Helmet compulsory, lights always on, riders at least 15.' } }
        ] },
        { type: 'rules', heading: { ru: 'Autopista и autovía', en: 'Motorways' }, items: [
          { color: 'blue', title: { ru: 'Скорость', en: 'Speed' }, es: 'mínimo 60 km/h',
            body: { ru: 'Легковым — до 120 км/ч; медленнее <b>60 км/ч</b> ехать нельзя без уважительной причины (RGC, ст. 49).',
                    en: 'Cars up to 120 km/h; going slower than <b>60 km/h</b> without good reason is not allowed (RGC art. 49).' } },
          { color: 'blue', title: { ru: 'Полосы', en: 'Lanes' }, es: 'carril derecho',
            body: { ru: 'Въезд — по <b>полосе разгона</b>, набрав скорость потока. Ехать по <b>правой</b> свободной полосе, левые — для обгона. Задний ход и разворот запрещены. Отдыхайте каждые <b>2 часа или 200 км</b>.',
                    en: 'Join via the <b>acceleration lane</b> at traffic speed. Keep to the <b>right</b>-most free lane; the left ones are for overtaking. Reversing and U-turns are forbidden. Rest every <b>2 hours or 200 km</b>.' } }
        ] }
      ] },
      { id: 'examples', label: { ru: 'Примеры', en: 'Examples' }, blocks: [
        { type: 'examples', items: [
          { color: 'amber', es: 'Reduce la velocidad <b>antes de la curva</b>.', ru: 'Сбавь скорость до поворота.', en: 'Slow down before the bend.' },
          { color: 'amber', es: 'El coche ha empezado a <b>derrapar</b>.', ru: 'Машину начало заносить.', en: 'The car has started to skid.' },
          { color: 'blue', es: 'Pon las <b>luces de cruce</b>, que viene un coche.', ru: 'Включи ближний — едет машина.', en: 'Switch to dipped beam, a car is coming.' },
          { color: 'blue', es: 'Me ha <b>deslumbrado</b> un camión.', ru: 'Меня ослепил грузовик.', en: 'A lorry dazzled me.' },
          { color: 'blue', es: 'Dentro del <b>túnel</b> no se puede adelantar.', ru: 'В тоннеле обгонять нельзя.', en: 'You can’t overtake in the tunnel.' },
          { color: 'teal', es: 'Con lluvia, deja más <b>distancia de seguridad</b>.', ru: 'В дождь оставляй большую дистанцию.', en: 'In the rain, leave a bigger safety gap.' },
          { color: 'teal', es: 'Enciende las <b>luces antiniebla</b>.', ru: 'Включи противотуманные фары.', en: 'Turn on the fog lights.' },
          { color: 'teal', es: 'Sopla un fuerte <b>viento lateral</b>.', ru: 'Дует сильный боковой ветер.', en: 'There is a strong crosswind.' },
          { color: 'purple', es: 'Hay que poner las <b>cadenas</b> para subir el puerto.', ru: 'Чтобы подняться на перевал, нужно надеть цепи.', en: 'You need to fit chains to go up the pass.' },
          { color: 'purple', es: 'Cuidado: en el puente puede haber <b>hielo</b>.', ru: 'Осторожно: на мосту может быть лёд.', en: 'Careful: there may be ice on the bridge.' },
          { color: 'coral', es: 'Deja <b>metro y medio</b> al adelantar a un ciclista.', ru: 'Оставляй полтора метра, обгоняя велосипедиста.', en: 'Leave a metre and a half when passing a cyclist.' },
          { color: 'coral', es: 'Mira el <b>ángulo muerto</b> antes de cambiar de carril.', ru: 'Проверь мёртвую зону перед перестроением.', en: 'Check the blind spot before changing lane.' }
        ] },
        { type: 'markers', groups: [
          { color: 'teal', title: { ru: 'Погода', en: 'Weather' }, tags: ['lluvia', 'niebla', 'viento', 'calor', 'polvo', 'humo'] },
          { color: 'purple', title: { ru: 'Зима', en: 'Winter' }, tags: ['nieve', 'hielo', 'cadenas', 'neumáticos de invierno', 'puerto'] },
          { color: 'blue', title: { ru: 'Свет', en: 'Lights' }, tags: ['luz de cruce', 'luz de carretera', 'antiniebla delantera', 'antiniebla trasera'] }
        ] }
      ] }
    ],
    quizCount: 20,
    quiz: [
      { es: '¿Cuándo debe reducir la velocidad para tomar una curva?',
        prompt: { ru: 'Когда нужно снижать скорость, чтобы пройти поворот?', en: 'When should you slow down for a bend?' },
        options: [
          { es: 'Antes de entrar en la curva.', ru: 'До въезда в поворот.', en: 'Before entering the bend.' },
          { es: 'En el centro de la curva.', ru: 'В середине поворота.', en: 'In the middle of the bend.' },
          { es: 'Al salir de la curva.', ru: 'На выходе из поворота.', en: 'When leaving the bend.' }
        ], answer: 0,
        explain: { ru: 'Тормозят на прямой до поворота; в самом повороте резкое торможение может вызвать занос (учебник DGT, тема 14).',
                   en: 'Brake on the straight before the bend; harsh braking in the bend itself can cause a skid (DGT manual, topic 14).' } },
      { es: 'En un turismo de tracción delantera derrapan las ruedas traseras. ¿Qué debe hacer?',
        prompt: { ru: 'У переднеприводной машины занесло задние колёса. Что делать?', en: 'In a front-wheel-drive car the rear wheels skid. What should you do?' },
        options: [
          { es: 'Frenar con fuerza.', ru: 'Резко затормозить.', en: 'Brake hard.' },
          { es: 'No frenar, girar el volante hacia el lado del derrape y acelerar suavemente.', ru: 'Не тормозить, повернуть руль в сторону заноса и плавно добавить газ.', en: 'Don’t brake, steer towards the skid and accelerate gently.' },
          { es: 'Girar el volante hacia el lado contrario al derrape.', ru: 'Повернуть руль в сторону, противоположную заносу.', en: 'Steer away from the skid.' }
        ], answer: 1,
        explain: { ru: 'Переднему приводу лёгкий газ помогает «вытянуть» машину; руль — туда, куда уходит зад. Торможение усиливает занос (учебник DGT, тема 14).',
                   en: 'With front-wheel drive, gentle throttle pulls the car straight; steer where the rear is sliding. Braking makes the skid worse (DGT manual, topic 14).' } },
      { es: 'En una zona de obras, una marca vial amarilla y una blanca se contradicen. ¿Cuál debe obedecer?',
        prompt: { ru: 'В зоне работ жёлтая и белая разметка противоречат друг другу. Какую соблюдать?', en: 'In a roadworks area, a yellow and a white road marking contradict each other. Which do you obey?' },
        options: [
          { es: 'La blanca, porque es permanente.', ru: 'Белую — она постоянная.', en: 'The white one, it is permanent.' },
          { es: 'Cualquiera de las dos.', ru: 'Любую из двух.', en: 'Either of them.' },
          { es: 'La amarilla, porque es provisional y prevalece.', ru: 'Жёлтую — она временная и имеет приоритет.', en: 'The yellow one, it is temporary and prevails.' }
        ], answer: 2,
        explain: { ru: 'Жёлтая разметка зоны работ — временная сигнализация, которая меняет обычный режим дороги; она важнее постоянной белой (RGC, ст. 133.1.b; учебник DGT, тема 14).',
                   en: 'Yellow roadworks markings are temporary signage that changes the road’s normal use; they take precedence over the permanent white ones (RGC art. 133.1.b; DGT manual, topic 14).' } },
      { es: 'De noche le deslumbra un vehículo que viene de frente. ¿Qué debe hacer?',
        prompt: { ru: 'Ночью вас ослепил встречный автомобиль. Что делать?', en: 'At night an oncoming vehicle dazzles you. What should you do?' },
        options: [
          { es: 'Reducir la velocidad, incluso detenerse, sin cambiar de carril.', ru: 'Снизить скорость, вплоть до остановки, не меняя полосы.', en: 'Slow down, even stop, without changing lane.' },
          { es: 'Encender las luces de largo alcance para avisarle.', ru: 'Включить дальний свет, чтобы предупредить его.', en: 'Turn on main beam to warn the driver.' },
          { es: 'Acelerar para cruzarse con él cuanto antes.', ru: 'Разогнаться, чтобы скорее разъехаться.', en: 'Speed up to pass it sooner.' }
        ], answer: 0,
        explain: { ru: 'RGC, ст. 102.3: ослеплённый водитель снижает скорость насколько нужно, вплоть до остановки. Ответное ослепление дальним — нарушение.',
                   en: 'RGC art. 102.3: a dazzled driver slows down as much as needed, even to a stop. Dazzling back with main beam is an offence.' } },
      { es: 'Si le deslumbran, ¿qué referencia conviene seguir?',
        prompt: { ru: 'По чему лучше ориентироваться, если вас ослепили?', en: 'If you are dazzled, what should you use as a guide?' },
        options: [
          { es: 'La línea central de la calzada.', ru: 'По осевой линии.', en: 'The centre line.' },
          { es: 'Las luces del vehículo que viene de frente.', ru: 'По фарам встречной машины.', en: 'The lights of the oncoming car.' },
          { es: 'La línea del borde derecho.', ru: 'По правой краевой линии.', en: 'The right edge line.' }
        ], answer: 2,
        explain: { ru: 'Смотрите на правый край дороги, а не на фары: так глаза меньше слепнут и машина не уходит к встречной полосе (учебник DGT, тема 14).',
                   en: 'Look at the right edge of the road, not at the lights: your eyes are less dazzled and you don’t drift towards oncoming traffic (DGT manual, topic 14).' } },
      { es: '¿Es aconsejable conducir con gafas de sol por la noche?',
        prompt: { ru: 'Стоит ли надевать тёмные очки ночью за рулём?', en: 'Is it advisable to drive with sunglasses at night?' },
        options: [
          { es: 'Sí, reducen los deslumbramientos.', ru: 'Да, они уменьшают ослепление.', en: 'Yes, they reduce glare.' },
          { es: 'No, porque se ve mucho peor la carretera.', ru: 'Нет, дорогу видно намного хуже.', en: 'No, you see the road much worse.' },
          { es: 'Solo en carreteras iluminadas.', ru: 'Только на освещённых дорогах.', en: 'Only on lit roads.' }
        ], answer: 1,
        explain: { ru: 'Ночью света и так мало; тёмные очки немного снижают ослепление, но сильно ухудшают видимость (учебник DGT, тема 14).',
                   en: 'Light is already scarce at night; sunglasses cut glare a little but reduce visibility a lot (DGT manual, topic 14).' } },
      { es: 'Circula de noche con luz de largo alcance detrás de otro vehículo. ¿Qué debe hacer?',
        prompt: { ru: 'Ночью вы едете с дальним светом за другой машиной. Что нужно сделать?', en: 'At night you are driving on main beam behind another vehicle. What should you do?' },
        options: [
          { es: 'Mantener la luz de largo alcance para verlo mejor.', ru: 'Оставить дальний, чтобы лучше его видеть.', en: 'Keep main beam to see it better.' },
          { es: 'Apagar todas las luces menos las de posición.', ru: 'Выключить всё, кроме габаритов.', en: 'Switch everything off except side lights.' },
          { es: 'Cambiar a la luz de cruce para no deslumbrarlo por el retrovisor.', ru: 'Переключиться на ближний, чтобы не слепить его через зеркало.', en: 'Switch to dipped beam so you don’t dazzle the driver through the mirror.' }
        ], answer: 2,
        explain: { ru: 'RGC, ст. 102.2: дальний переключают на ближний и ради тех, кто едет впереди в том же направлении.',
                   en: 'RGC art. 102.2: main beam must also be dipped for drivers ahead going the same way.' } },
      { es: 'Dentro de un túnel, ¿qué distancia mínima debe guardar un turismo con el vehículo de delante?',
        prompt: { ru: 'Какую минимальную дистанцию легковой автомобиль держит в тоннеле до впереди идущей машины?', en: 'In a tunnel, what minimum gap must a car keep from the vehicle ahead?' },
        options: [
          { es: '50 metros o 2 segundos.', ru: '50 м или 2 секунды.', en: '50 m or 2 seconds.' },
          { es: '100 metros o 4 segundos.', ru: '100 м или 4 секунды.', en: '100 m or 4 seconds.' },
          { es: '150 metros o 6 segundos.', ru: '150 м или 6 секунд.', en: '150 m or 6 seconds.' }
        ], answer: 1,
        explain: { ru: 'Manual I, тема 8 (5.10.2): не меньше 100 м или 4 секунд; для машин тяжелее 3500 кг — 150 м или 6 секунд.',
                   en: 'Manual I, topic 8 (5.10.2): at least 100 m or 4 seconds; for vehicles over 3,500 kg, 150 m or 6 seconds.' } },
      { es: 'En un túnel con un solo carril en cada sentido, ¿está permitido adelantar?',
        prompt: { ru: 'Можно ли обгонять в тоннеле с одной полосой в каждую сторону?', en: 'In a tunnel with one lane in each direction, may you overtake?' },
        options: [
          { es: 'No, está prohibido.', ru: 'Нет, запрещено.', en: 'No, it is forbidden.' },
          { es: 'Sí, si el túnel está iluminado.', ru: 'Да, если тоннель освещён.', en: 'Yes, if the tunnel is lit.' },
          { es: 'Sí, a vehículos lentos.', ru: 'Да, медленные машины.', en: 'Yes, slow vehicles.' }
        ], answer: 0,
        explain: { ru: 'Manual I, тема 8 (5.10.3): в тоннеле с двусторонним движением обгон запрещён, если в вашу сторону только одна полоса.',
                   en: 'Manual I, topic 8 (5.10.3): in a two-way tunnel overtaking is forbidden unless there is more than one lane in your direction.' } },
      { es: 'Queda detenido dentro de un túnel por un atasco. ¿Qué debe hacer?',
        prompt: { ru: 'Вы стоите в тоннеле в пробке. Что делать?', en: 'You are stopped in a tunnel by a traffic jam. What should you do?' },
        options: [
          { es: 'Salir del vehículo y esperar en la acera.', ru: 'Выйти из машины и ждать на тротуаре.', en: 'Get out and wait on the walkway.' },
          { es: 'Dar marcha atrás hasta la entrada.', ru: 'Сдать задним ходом к въезду.', en: 'Reverse back to the entrance.' },
          { es: 'Quedarse en el vehículo, apagar el motor y mantener las luces de posición.', ru: 'Остаться в машине, заглушить двигатель и оставить габариты.', en: 'Stay in the car, switch the engine off and keep the side lights on.' }
        ], answer: 2,
        explain: { ru: 'Manual I, тема 8 (5.10.4.b): при остановке из-за движения из машины не выходят, двигатель глушат, габариты оставляют, держат большую дистанцию.',
                   en: 'Manual I, topic 8 (5.10.4.b): when stopped by traffic, stay inside, switch off the engine, keep side lights on and a big gap.' } },
      { es: 'Su vehículo se avería dentro de un túnel y no puede seguir. ¿Qué es correcto?',
        prompt: { ru: 'Ваша машина сломалась в тоннеле и дальше не едет. Что правильно?', en: 'Your car breaks down in a tunnel and cannot move. Which is correct?' },
        options: [
          { es: 'Quedarse dentro con el motor en marcha.', ru: 'Остаться в салоне с работающим двигателем.', en: 'Stay inside with the engine running.' },
          { es: 'Apagar el motor, activar la V-16, pedir auxilio en el poste SOS e ir al refugio o salida.', ru: 'Заглушить двигатель, включить V-16, вызвать помощь с поста SOS и идти к убежищу или выходу.', en: 'Engine off, activate the V-16, call from the SOS post and go to a shelter or exit.' },
          { es: 'Caminar por la calzada hasta la salida.', ru: 'Идти к выходу по проезжей части.', en: 'Walk along the carriageway to the exit.' }
        ], answer: 1,
        explain: { ru: 'RGC, ст. 97.3 (Manual I, тема 8): двигатель выключить, аварийка, V-16, пост SOS, все уходят к убежищу или выходу, не по проезжей части.',
                   en: 'RGC art. 97.3 (Manual I, topic 8): engine off, hazards, V-16, SOS post, everyone goes to a shelter or exit, not along the carriageway.' } },
      { es: '¿Qué indica esta señal?',
        prompt: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Obligatorio circular con alumbrado de corto alcance.', ru: 'Обязательно ехать с ближним светом.', en: 'Dipped headlights compulsory.' },
          { es: 'Prohibido usar las luces de largo alcance de día.', ru: 'Днём дальний свет запрещён.', en: 'No main beam during the day.' },
          { es: 'Túnel iluminado.', ru: 'Освещённый тоннель.', en: 'Lit tunnel.' }
        ], answer: 0, sign: 'R-413',
        explain: { ru: 'R-413 обязывает ехать как минимум с ближним светом, независимо от освещения и видимости, до знака конца этой обязанности.',
                   en: 'R-413 requires at least dipped headlights, whatever the light or visibility, until the end-of-obligation sign.' } },
      { es: 'Con lluvia, ¿cuándo es más peligrosa la calzada?',
        prompt: { ru: 'Когда в дождь дорога особенно опасна?', en: 'In the rain, when is the road most dangerous?' },
        options: [
          { es: 'Después de varias horas lloviendo.', ru: 'После нескольких часов дождя.', en: 'After several hours of rain.' },
          { es: 'Al caer las primeras gotas.', ru: 'Когда падают первые капли.', en: 'When the first drops fall.' },
          { es: 'Cuando deja de llover.', ru: 'Когда дождь кончился.', en: 'When the rain stops.' }
        ], answer: 1,
        explain: { ru: 'Первые капли смешиваются с пылью, маслом и грязью — получается скользкая плёнка. Сильный дождь её постепенно смывает (учебник DGT, тема 14).',
                   en: 'The first drops mix with dust, oil and dirt into a slippery film. Steady rain gradually washes it away (DGT manual, topic 14).' } },
      { es: '¿Qué es el aquaplaning?',
        prompt: { ru: 'Что такое аквапланирование?', en: 'What is aquaplaning?' },
        options: [
          { es: 'Que los cristales se empañan por la humedad.', ru: 'Запотевание стёкол от влажности.', en: 'Windows misting up from damp.' },
          { es: 'Que el agua entra en el motor.', ru: 'Попадание воды в двигатель.', en: 'Water getting into the engine.' },
          { es: 'Que el neumático pierde contacto con el suelo por una capa de agua.', ru: 'Шина теряет контакт с дорогой из-за слоя воды.', en: 'The tyre loses contact with the road on a layer of water.' }
        ], answer: 2,
        explain: { ru: 'Шина не успевает отвести воду и скользит по ней: руль и тормоза не действуют (учебник DGT, тема 14).',
                   en: 'The tyre cannot clear the water and slides on it: steering and brakes do not respond (DGT manual, topic 14).' } },
      { es: '¿Qué favorece el aquaplaning?',
        prompt: { ru: 'Что повышает риск аквапланирования?', en: 'What makes aquaplaning more likely?' },
        options: [
          { es: 'Circular rápido con neumáticos desgastados.', ru: 'Быстрая езда на изношенных шинах.', en: 'Driving fast on worn tyres.' },
          { es: 'Circular despacio con neumáticos nuevos.', ru: 'Медленная езда на новых шинах.', en: 'Driving slowly on new tyres.' },
          { es: 'Llevar las luces antiniebla encendidas.', ru: 'Включённые противотуманки.', en: 'Having the fog lights on.' }
        ], answer: 0,
        explain: { ru: 'Риск растёт со скоростью, шириной и износом шин. Лучшая защита — медленно проезжать места с водой.',
                   en: 'Risk grows with speed and with wide or worn tyres. The best protection is to go slowly through water.' } },
      { es: 'Nota que las ruedas patinan sobre el agua. ¿Qué debe hacer?',
        prompt: { ru: 'Вы чувствуете, что колёса скользят по воде. Что делать?', en: 'You feel the wheels sliding on water. What should you do?' },
        options: [
          { es: 'Frenar a fondo.', ru: 'Затормозить до упора.', en: 'Brake hard.' },
          { es: 'Girar el volante con fuerza.', ru: 'Резко повернуть руль.', en: 'Turn the wheel sharply.' },
          { es: 'Levantar el pie del acelerador sin frenar.', ru: 'Убрать ногу с газа, не тормозя.', en: 'Lift off the throttle without braking.' }
        ], answer: 2,
        explain: { ru: 'Учебник DGT, тема 14: когда колёса скользят, отпускают газ, но не тормозят и не делают резких движений рулём.',
                   en: 'DGT manual, topic 14: when the wheels slide, lift off the throttle but don’t brake or make sudden steering movements.' } },
      { es: '¿Cuándo debe llevar encendida la luz antiniebla trasera?',
        prompt: { ru: 'Когда нужно включать задний противотуманный фонарь?', en: 'When must you use the rear fog light?' },
        options: [
          { es: 'Siempre que llueva.', ru: 'Всегда, когда идёт дождь.', en: 'Whenever it rains.' },
          { es: 'Con condiciones especialmente desfavorables, como niebla espesa.', ru: 'При особенно плохих условиях, например в густом тумане.', en: 'In especially bad conditions, such as thick fog.' },
          { es: 'Siempre de noche fuera de poblado.', ru: 'Всегда ночью за городом.', en: 'Always at night outside towns.' }
        ], answer: 1,
        explain: { ru: 'RGC, ст. 106.2: задний противотуманный — только при густом тумане, сильном ливне, сильном снегопаде, плотном дыме или пыли. В обычный дождь он слепит едущих сзади.',
                   en: 'RGC art. 106.2: the rear fog light only in thick fog, very heavy rain, heavy snow, dense smoke or dust. In ordinary rain it dazzles drivers behind.' } },
      { es: 'Con niebla, ¿qué luces son adecuadas?',
        prompt: { ru: 'Какой свет подходит в тумане?', en: 'Which lights are appropriate in fog?' },
        options: [
          { es: 'Las de cruce y las antiniebla delanteras.', ru: 'Ближний свет и передние противотуманные.', en: 'Dipped beam and front fog lights.' },
          { es: 'Solo las de posición.', ru: 'Только габариты.', en: 'Only side lights.' },
          { es: 'Las de largo alcance para ver más lejos.', ru: 'Дальний свет, чтобы видеть дальше.', en: 'Main beam to see further.' }
        ], answer: 0,
        explain: { ru: 'RGC, ст. 106: в тумане обязателен свет — ближний и/или противотуманный. Дальний отражается от капель тумана и ухудшает видимость.',
                   en: 'RGC art. 106: lights are compulsory in fog — dipped and/or fog lights. Main beam reflects off the fog and worsens visibility.' } },
      { es: 'Con fuerte viento lateral, ¿qué es correcto?',
        prompt: { ru: 'Что правильно при сильном боковом ветре?', en: 'In a strong crosswind, which is correct?' },
        options: [
          { es: 'Abrir las ventanillas para equilibrar el vehículo.', ru: 'Открыть окна, чтобы уравновесить машину.', en: 'Open the windows to balance the car.' },
          { es: 'Reducir la velocidad y sujetar el volante con firmeza.', ru: 'Снизить скорость и крепко держать руль.', en: 'Slow down and grip the wheel firmly.' },
          { es: 'Acelerar para pasar rápido la zona.', ru: 'Разогнаться, чтобы скорее проехать это место.', en: 'Speed up to get through quickly.' }
        ], answer: 1,
        explain: { ru: 'Медленнее, руль крепко и против ветра, окна закрыты. Особенно опасно при обгоне больших машин и на выезде из-за укрытий (учебник DGT, тема 14).',
                   en: 'Slower, wheel held firmly against the wind, windows shut. Especially risky when passing large vehicles and leaving sheltered spots (DGT manual, topic 14).' } },
      { es: '¿A qué temperatura se recomienda llevar el aire acondicionado en un día de mucho calor?',
        prompt: { ru: 'Какую температуру кондиционера рекомендуют в сильную жару?', en: 'What air-con temperature is recommended on a very hot day?' },
        options: [
          { es: 'Entre 16 y 18 grados.', ru: '16–18 градусов.', en: '16–18 degrees.' },
          { es: 'Entre 26 y 28 grados.', ru: '26–28 градусов.', en: '26–28 degrees.' },
          { es: 'Entre 20 y 23 grados.', ru: '20–23 градуса.', en: '20–23 degrees.' }
        ], answer: 2,
        explain: { ru: 'Учебник DGT, тема 14: 20–23 °C — при большей разнице с улицей растут усталость и сонливость.',
                   en: 'DGT manual, topic 14: 20–23 °C — a bigger difference from outside adds to fatigue and drowsiness.' } },
      { es: 'Para iniciar la marcha sobre nieve, ¿qué es aconsejable?',
        prompt: { ru: 'Как лучше трогаться на снегу?', en: 'How is it best to move off on snow?' },
        options: [
          { es: 'Con las ruedas rectas, una marcha larga y acelerando poco.', ru: 'Колёса прямо, высокая передача, мало газа.', en: 'Wheels straight, a higher gear and little throttle.' },
          { es: 'En primera y acelerando a fondo.', ru: 'На первой передаче и с полным газом.', en: 'In first gear at full throttle.' },
          { es: 'Con las ruedas giradas hacia el bordillo.', ru: 'Повернув колёса к бордюру.', en: 'With the wheels turned towards the kerb.' }
        ], answer: 0,
        explain: { ru: 'Высокая передача и малый газ дают меньше тяги на колёса, и они не буксуют (учебник DGT, тема 14).',
                   en: 'A higher gear and little throttle send less torque to the wheels, so they don’t spin (DGT manual, topic 14).' } },
      { es: 'Para bajar una pendiente con nieve, ¿qué marcha es adecuada?',
        prompt: { ru: 'На какой передаче спускаться под горку по снегу?', en: 'Which gear is right going downhill on snow?' },
        options: [
          { es: 'Punto muerto.', ru: 'На нейтрали.', en: 'Neutral.' },
          { es: 'Una marcha corta, primera o segunda.', ru: 'На низкой: первой или второй.', en: 'A low gear, first or second.' },
          { es: 'La marcha más larga posible.', ru: 'На самой высокой.', en: 'The highest gear possible.' }
        ], answer: 1,
        explain: { ru: 'Низкая передача удерживает машину двигателем, и тормозить почти не приходится. Нейтраль на спуске опасна (учебник DGT, тема 14).',
                   en: 'A low gear holds the car back with the engine, so you hardly need the brakes. Neutral downhill is dangerous (DGT manual, topic 14).' } },
      { es: '¿Qué obligación impone esta señal?',
        prompt: { ru: 'Какую обязанность вводит этот знак?', en: 'What obligation does this sign impose?' },
        options: [
          { es: 'Peligro por presencia de nieve.', ru: 'Опасность: снег.', en: 'Danger: snow.' },
          { es: 'Estación de esquí próxima.', ru: 'Рядом горнолыжная станция.', en: 'Ski resort nearby.' },
          { es: 'Obligatorio usar cadenas para nieve u otros dispositivos autorizados.', ru: 'Обязательны цепи или другие разрешённые устройства.', en: 'Snow chains or other authorised devices compulsory.' }
        ], answer: 2, sign: 'R-412',
        explain: { ru: 'R-412 — синий предписывающий знак: дальше без цепей (или зимних шин) нельзя. Предупреждающий знак о льде и снеге — треугольный P-34.',
                   en: 'R-412 is a blue mandatory sign: no further without chains (or winter tyres). The warning sign for ice and snow is the triangular P-34.' } },
      { es: '¿En qué ruedas se colocan las cadenas?',
        prompt: { ru: 'На какие колёса надевают цепи?', en: 'Which wheels do snow chains go on?' },
        options: [
          { es: 'Siempre en las delanteras.', ru: 'Всегда на передние.', en: 'Always the front ones.' },
          { es: 'En las ruedas motrices, al menos una a cada lado.', ru: 'На ведущие колёса, минимум по одному с каждой стороны.', en: 'On the driven wheels, at least one on each side.' },
          { es: 'Siempre en las traseras.', ru: 'Всегда на задние.', en: 'Always the rear ones.' }
        ], answer: 1,
        explain: { ru: 'Manual I, знак R-412: цепи должны работать хотя бы на одном колесе с каждой стороны ведущей оси. У переднего привода это передние колёса, у заднего — задние.',
                   en: 'Manual I, sign R-412: chains must act on at least one wheel on each side of the driven axle. Front for front-wheel drive, rear for rear-wheel drive.' } },
      { es: '¿Dónde es más probable encontrar hielo en la carretera?',
        prompt: { ru: 'Где на дороге вероятнее всего лёд?', en: 'Where is ice most likely on the road?' },
        options: [
          { es: 'En los puentes y en zonas de sombra.', ru: 'На мостах и в тени.', en: 'On bridges and in shaded areas.' },
          { es: 'En las rectas soleadas.', ru: 'На солнечных прямых.', en: 'On sunny straights.' },
          { es: 'En las zonas con mucho tráfico al mediodía.', ru: 'На загруженных участках в полдень.', en: 'In busy areas at midday.' }
        ], answer: 0,
        explain: { ru: 'Лёд держится в тени, во влажных местах, в низинах и на мостах (они охлаждаются и сверху, и снизу), особенно ночью и утром (учебник DGT, тема 14).',
                   en: 'Ice lingers in shade, damp spots, dips and on bridges (cooled from above and below), especially at night and early morning (DGT manual, topic 14).' } },
      { es: 'Fuera de poblado, ¿qué separación lateral mínima debe dejar al adelantar a un ciclista?',
        prompt: { ru: 'Какой минимальный боковой интервал нужен при обгоне велосипедиста за городом?', en: 'Outside towns, what minimum side gap must you leave when overtaking a cyclist?' },
        options: [
          { es: '1 metro.', ru: '1 метр.', en: '1 metre.' },
          { es: '2,5 metros.', ru: '2,5 метра.', en: '2.5 metres.' },
          { es: '1,5 metros.', ru: '1,5 метра.', en: '1.5 metres.' }
        ], answer: 2,
        explain: { ru: 'RGC, ст. 85.4: не меньше 1,5 м, частично или полностью по соседней полосе. Нарушение — 6 баллов (LSV, приложение II).',
                   en: 'RGC art. 85.4: at least 1.5 m, partly or fully in the next lane. Breaking it costs 6 points (LSV annex II).' } },
      { es: 'Va a adelantar a un ciclista en una carretera convencional limitada a 90 km/h. ¿A qué velocidad máxima puede hacerlo?',
        prompt: { ru: 'Вы обгоняете велосипедиста на обычной дороге с лимитом 90 км/ч. С какой максимальной скоростью?', en: 'You are overtaking a cyclist on an ordinary road limited to 90 km/h. What is your maximum speed?' },
        options: [
          { es: 'A 70 km/h.', ru: '70 км/ч.', en: '70 km/h.' },
          { es: 'A 90 km/h.', ru: '90 км/ч.', en: '90 km/h.' },
          { es: 'A 110 km/h.', ru: '110 км/ч.', en: '110 km/h.' }
        ], answer: 0,
        explain: { ru: 'RGC, ст. 85.4: за городом при обгоне велосипедистов, мопедов, пешеходов и т. п. скорость как минимум на 20 км/ч ниже лимита дороги. Превышать лимит на 20 км/ч при обгоне больше нельзя (с 2022 года).',
                   en: 'RGC art. 85.4: outside towns, when passing cyclists, mopeds, pedestrians and so on, go at least 20 km/h below the limit. Exceeding the limit by 20 km/h to overtake is no longer allowed (since 2022).' } },
      { es: 'En una autovía con dos carriles por sentido, ¿cómo debe adelantar a un ciclista que circula por el arcén?',
        prompt: { ru: 'Как обогнать велосипедиста на обочине autovía с двумя полосами в каждую сторону?', en: 'On an autovía with two lanes each way, how do you overtake a cyclist on the shoulder?' },
        options: [
          { es: 'Sin cambiar de carril, si hay 1,5 metros.', ru: 'Не меняя полосы, если остаётся 1,5 м.', en: 'Without changing lane, if there are 1.5 m.' },
          { es: 'Cambiando completamente de carril.', ru: 'Полностью перестроившись в соседнюю полосу.', en: 'By changing lane completely.' },
          { es: 'Tocando el claxon para que se aparte.', ru: 'Посигналив, чтобы он посторонился.', en: 'By sounding the horn so they move aside.' }
        ], answer: 1,
        explain: { ru: 'RGC, ст. 85.4: если в вашу сторону больше одной полосы, обязательна полная смена полосы. Сигналить рядом с велосипедистом — пугать его.',
                   en: 'RGC art. 85.4: with more than one lane in your direction a full lane change is compulsory. Honking near a cyclist just startles them.' } },
      { es: '¿Cómo debe situarse respecto a una motocicleta que circula por el carril de al lado?',
        prompt: { ru: 'Как держаться относительно мотоцикла в соседней полосе?', en: 'How should you position yourself relative to a motorbike in the next lane?' },
        options: [
          { es: 'A su lado, a la misma velocidad.', ru: 'Рядом, с той же скоростью.', en: 'Alongside it at the same speed.' },
          { es: 'Muy cerca por detrás, para que le vea.', ru: 'Вплотную сзади, чтобы он вас видел.', en: 'Close behind so the rider sees you.' },
          { es: 'Por delante o por detrás, nunca a su lado.', ru: 'Впереди или позади, но не рядом.', en: 'Ahead or behind, never alongside.' }
        ], answer: 2,
        explain: { ru: 'Рядом вы оказываетесь в его мёртвой зоне и не видите манёвров. Держитесь впереди или позади с дистанцией (учебник DGT, тема 16).',
                   en: 'Alongside you sit in each other’s blind spots. Stay ahead or behind with a safe gap (DGT manual, topic 16).' } },
      { es: '¿Por cuál de estas vías está prohibido circular con un patinete eléctrico (VMP)?',
        prompt: { ru: 'По какой из этих дорог запрещено ездить на электросамокате (VMP)?', en: 'On which of these roads is riding an e-scooter (VMP) forbidden?' },
        options: [
          { es: 'Por un carril bici urbano.', ru: 'По городской велодорожке.', en: 'On an urban cycle lane.' },
          { es: 'Por una travesía.', ru: 'По травесии (участку трассы через посёлок).', en: 'On a travesía (main road through a town).' },
          { es: 'Por una calle con límite de 30 km/h.', ru: 'По улице с лимитом 30 км/ч.', en: 'On a street limited to 30 km/h.' }
        ], answer: 1,
        explain: { ru: 'RGC, ст. 38.4: VMP нельзя на autopista, autovía, травесиях, загородных дорогах и в городских тоннелях. По городским улицам и велодорожкам — можно, если не запрещено знаками.',
                   en: 'RGC art. 38.4: VMPs are banned from autopistas, autovías, travesías, interurban roads and urban tunnels. Town streets and cycle lanes are fine unless signs forbid it.' } },
      { es: '¿Cuál es la velocidad mínima en autopistas y autovías?',
        prompt: { ru: 'Какая минимальная скорость на autopista и autovía?', en: 'What is the minimum speed on autopistas and autovías?' },
        options: [
          { es: '40 km/h.', ru: '40 км/ч.', en: '40 km/h.' },
          { es: '80 km/h.', ru: '80 км/ч.', en: '80 km/h.' },
          { es: '60 km/h.', ru: '60 км/ч.', en: '60 km/h.' }
        ], answer: 2,
        explain: { ru: 'RGC, ст. 49.1: на autopista и autovía нельзя ехать медленнее 60 км/ч без уважительной причины, даже если дорога пуста.',
                   en: 'RGC art. 49.1: you may not go below 60 km/h on autopistas and autovías without good reason, even on an empty road.' } },
      { es: 'En un viaje largo por autovía, ¿cada cuánto tiempo se recomienda descansar?',
        prompt: { ru: 'Как часто рекомендуют отдыхать в долгой поездке по autovía?', en: 'On a long autovía trip, how often should you rest?' },
        options: [
          { es: 'Cada 2 horas o 200 km.', ru: 'Каждые 2 часа или 200 км.', en: 'Every 2 hours or 200 km.' },
          { es: 'Cada 5 horas o 500 km.', ru: 'Каждые 5 часов или 500 км.', en: 'Every 5 hours or 500 km.' },
          { es: 'Solo al sentir sueño.', ru: 'Только когда захочется спать.', en: 'Only when you feel sleepy.' }
        ], answer: 0,
        explain: { ru: 'Рекомендация DGT: остановка примерно каждые 2 часа или 200 км. Ждать сонливости поздно — она приходит, когда внимание уже упало.',
                   en: 'DGT advice: stop about every 2 hours or 200 km. Waiting until you feel sleepy is too late — by then attention has already dropped.' } }
    ]
  }
]);
