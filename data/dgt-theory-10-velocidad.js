// DGT · theory, topic 10: speed and distances. Sources: DGT «Teórica abreviada, lectura fácil» (2025),
// DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-velocidad', level: 'DGT',
    title: { ru: 'Скорость и дистанция', en: 'Speed and distance' },
    summary: { ru: 'Ограничения скорости по типу дороги и транспорта, остановочный путь и безопасная дистанция.',
               en: 'Speed limits by road and vehicle type, stopping distance and the safe following gap.' },
    hero: { es: 'Velocidad <b>y</b> distancias',
            sub: { ru: 'Лимиты скорости, минимальная скорость, остановочный путь и дистанция',
                   en: 'Speed limits, minimum speed, stopping distance and following distance' } },
    tabs: [
      {
        id: 'speed', label: { ru: 'Скорость', en: 'Speed' },
        blocks: [
          { type: 'text', body: {
            ru: ['Знать лимит мало: водитель обязан выбирать скорость по <b>обстановке</b> — своему состоянию, машине и грузу, дороге, погоде и движению — так, чтобы <b>всегда успеть остановиться</b> в пределах видимости перед любым препятствием (RGC, ст. 45).'],
            en: ['Knowing the limit is not enough: you must choose your speed for the <b>circumstances</b> — your own condition, the vehicle and its load, the road, the weather and the traffic — so that you can <b>always stop</b> within the distance you can see, before any obstacle (RGC art. 45).'] } },
          { type: 'rules', heading: { ru: 'Виды скорости', en: 'Kinds of speed' }, items: [
            { color: 'coral', label: { ru: 'Предел', en: 'Upper limit' }, title: { ru: 'Максимальная', en: 'Maximum' }, es: 'velocidad máxima',
              body: { ru: 'Больше ехать нельзя. Превышение — <b>exceso de velocidad</b> (100 км/ч там, где разрешено 90).',
                      en: 'You may not go faster. Going over it is <b>exceso de velocidad</b> (100 km/h where 90 is allowed).' } },
            { color: 'blue', label: { ru: 'Предел', en: 'Lower limit' }, title: { ru: 'Минимальная', en: 'Minimum' }, es: 'velocidad mínima',
              body: { ru: 'Медленнее без причины нельзя, даже на пустой дороге: слишком медленная машина мешает и провоцирует опасные обгоны.',
                      en: 'You may not go slower without a reason, even on an empty road: a crawling vehicle gets in the way and invites risky overtaking.' } },
            { color: 'teal', label: { ru: 'Правильно', en: 'Correct' }, title: { ru: 'Адекватная', en: 'Appropriate' }, es: 'velocidad adecuada',
              body: { ru: 'В пределах лимита <b>и</b> подходит к условиям. <b>Moderada</b> — ещё осторожнее: снижена из-за предвидимой опасности.',
                      en: 'Within the limit <b>and</b> suited to the conditions. <b>Moderada</b> is even more careful: reduced because of a foreseeable danger.' } },
            { color: 'amber', label: { ru: 'Ошибка', en: 'Mistake' }, title: { ru: 'Неадекватная', en: 'Inappropriate' }, es: 'velocidad inadecuada',
              body: { ru: 'Лимит не превышен, но для условий слишком быстро: 70 км/ч на дороге с гололёдом. Одна из главных причин аварий.',
                      en: 'Within the limit but too fast for the conditions: 70 km/h on an icy road. One of the main causes of crashes.' } }
          ] },
          { type: 'triggers', heading: { ru: 'Когда ехать медленно и быть готовым остановиться', en: 'When to slow down and be ready to stop' }, items: [
            { num: '1', color: 'teal', title: { ru: 'Люди и животные', en: 'People and animals' },
              sub: { ru: 'особенно дети, пожилые, незрячие', en: 'especially children, the elderly, blind people' },
              phrases: ['peatones', 'niños', 'animales', 'mercados', 'centros docentes'] },
            { num: '2', color: 'teal', title: { ru: 'Велосипеды и остановленные машины', en: 'Cycles and stopped vehicles' },
              phrases: ['ciclos', 'autobús en situación de parada', 'transporte escolar', 'vehículos de auxilio'] },
            { num: '3', color: 'teal', title: { ru: 'Дорога', en: 'The road' },
              body: { ru: 'Перекрёсток без приоритета при почти нулевой видимости — <b>не больше 50 км/ч</b>.', en: 'A junction where you have no priority and almost no visibility: <b>50 km/h at most</b>.' },
              phrases: ['pasos a nivel', 'glorietas', 'estrechamientos', 'visibilidad reducida', 'edificios junto a la vía'] },
            { num: '4', color: 'teal', title: { ru: 'Погода и покрытие', en: 'Weather and surface' },
              phrases: ['pavimento deslizante', 'gravilla', 'deslumbramiento', 'niebla densa', 'lluvia intensa', 'nevada'] }
          ] },
          { type: 'text', color: 'blue', body: {
            ru: ['<b>Минимальная скорость:</b> на autopista и autovía — <b>60 км/ч</b>; на остальных дорогах — <b>половина общего лимита</b> для вашего транспорта (легковой на обычной дороге с лимитом 90 — не медленнее 45). Ехать медленнее можно спецтранспорту, велосипедам, при сопровождении других машин и когда этого требуют движение, состояние машины или дороги. Если машина не может набрать минимум и есть риск наезда сзади — включите <b>аварийку</b> (RGC, ст. 49).'],
            en: ['<b>Minimum speed:</b> on an autopista or autovía it is <b>60 km/h</b>; on other roads it is <b>half the general limit</b> for your vehicle (a car on an ordinary road with a 90 limit must not go below 45). Special vehicles, cycles and escort vehicles may go slower, and so may anyone when traffic, the vehicle or the road make it unsafe to keep the minimum. If you cannot reach the minimum and could be hit from behind, switch on the <b>hazard lights</b> (RGC art. 49).'] } },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Резкое торможение.</b> Перед тем как заметно сбросить скорость, убедитесь, что это безопасно для едущих сзади, и предупредите их: несколько раз нажмите на тормоз (мигают стоп-сигналы) или помашите рукой вверх-вниз короткими быстрыми движениями (RGC, ст. 53 и 109). Гонки на дорогах запрещены, если участок не закрыт для них властями.'],
            en: ['<b>Slowing down sharply.</b> Before reducing speed considerably, make sure it is safe for those behind you and warn them: tap the brake pedal several times (the brake lights flash) or move your arm up and down in short quick movements (RGC arts. 53 and 109). Racing on public roads is forbidden unless the authorities have closed the stretch for it.'] } }
        ]
      },
      {
        id: 'road', label: { ru: 'За городом', en: 'Out of town' },
        blocks: [
          { type: 'table', heading: { ru: 'Общие лимиты вне населённого пункта, км/ч', en: 'General limits outside built-up areas, km/h' },
            head: ['', 'Autopista / autovía', 'Convencional'],
            rows: [
              [{ ru: 'Легковой, мотоцикл', en: 'Car, motorcycle' }, '120', '90'],
              [{ ru: 'Пикап, автодом ≤ 3,5 т', en: 'Pick-up, camper ≤ 3.5 t' }, '120', '90'],
              [{ ru: 'Автобус', en: 'Bus' }, '100', '90'],
              [{ ru: 'Derivado de turismo, mixto', en: 'Car-derived van, mixto' }, '100', '90'],
              [{ ru: 'Грузовик, фургон', en: 'Lorry, van (furgoneta)' }, '90', '80'],
              [{ ru: 'Автодом > 3,5 т', en: 'Camper > 3.5 t' }, '90', '80'],
              [{ ru: 'Любое авто с прицепом', en: 'Any vehicle + trailer' }, '90', '80']
            ] },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Обгон — не повод превышать.</b> Раньше при обгоне на обычной дороге разрешалось превысить лимит на 20 км/ч. С <b>21 марта 2022 года этой поблажки нет</b>: обгонять можно только в пределах лимита. А обгоняя вне города велосипедистов и других уязвимых участников, нужно, наоборот, <b>ехать на 20 км/ч ниже</b> лимита (Ley 18/2021: LSV, ст. 21.4 и RGC, ст. 51 отменены; RGC, ст. 85.4).'],
            en: ['<b>Overtaking is no excuse to speed.</b> Drivers used to be allowed 20 km/h over the limit while overtaking on ordinary roads. Since <b>21 March 2022 that allowance is gone</b>: you overtake within the limit. And when overtaking cyclists and other vulnerable users outside built-up areas you must go <b>at least 20 km/h below</b> the limit (Ley 18/2021: LSV art. 21.4 and RGC art. 51 repealed; RGC art. 85.4).'] } },
          { type: 'table', heading: { ru: 'Особые случаи вне города', en: 'Special cases outside built-up areas' },
            head: [{ ru: 'Кто или где', en: 'Who or where' }, { ru: 'Лимит', en: 'Limit' }],
            rows: [
              [{ ru: 'Школьный автобус, дети', en: 'School / children transport' }, { ru: 'на 10 км/ч меньше', en: '10 km/h less' }],
              [{ ru: 'Опасные грузы', en: 'Dangerous goods' }, { ru: 'на 10 км/ч меньше', en: '10 km/h less' }],
              [{ ru: 'Автобус со стоящими', en: 'Bus with standing passengers' }, '80'],
              [{ ru: 'Грунтовая дорога', en: 'Unpaved road' }, '30'],
              [{ ru: 'Велосипед, мопед', en: 'Cycle, moped' }, '45'],
              [{ ru: 'Квадрицикл, 3 колеса', en: 'Quadricycle, three-wheeler' }, '70'],
              [{ ru: 'Спецтехника (обычно)', en: 'Special vehicle (usual)' }, '40'],
              [{ ru: 'Спецтехника > 60 км/ч', en: 'Special vehicle > 60 km/h' }, '70'],
              [{ ru: 'Спецтехника без стоп-сигналов', en: 'Special, no brake lights' }, '25']
            ] },
          { type: 'text', body: {
            ru: ['На обычной дороге с <b>физическим разделением</b> встречных потоков владелец дороги может поднять лимит до <b>100 км/ч</b> для легковых, мотоциклов и автодомов до 3,5 т — только знаком. Велосипедист может ехать быстрее 45, если позволяет дорога. Спецтехника с прицепом и мотоблоки — тоже 25 км/ч. Трёхколёсный транспорт, приравненный к мотоциклам, ездит по лимитам мотоциклов (RGC, ст. 48).'],
            en: ['On an ordinary road with a <b>physical barrier</b> between the two directions, the road owner may raise the limit to <b>100 km/h</b> for cars, motorcycles and campers up to 3.5 t — only with a sign. A cyclist may exceed 45 where the road allows it. Special vehicles with a trailer and two-wheel tractors are also limited to 25 km/h. Three-wheelers treated as motorcycles follow the motorcycle limits (RGC art. 48).'] } },
          { type: 'signs', heading: { ru: 'Знаки', en: 'Signs' }, items: [
            { code: 'R-301', note: { ru: 'максимум — цифра на знаке; важнее общего лимита', en: 'maximum — the number on the sign; overrides the general limit' } },
            { code: 'R-501', note: { ru: 'конец этого ограничения', en: 'end of that limit' } },
            { code: 'R-500', note: { ru: 'конец всех запретов', en: 'end of all prohibitions' } },
            { code: 'S-7', note: { ru: 'рекомендуемая, не обязательная', en: 'advisory, not compulsory' } },
            { code: 'S-1', note: { ru: 'начало autopista', en: 'start of an autopista' } },
            { code: 'S-1a', note: { ru: 'начало autovía', en: 'start of an autovía' } }
          ] }
        ]
      },
      {
        id: 'town', label: { ru: 'В городе', en: 'In town' },
        blocks: [
          { type: 'table', heading: { ru: 'Общие лимиты в населённом пункте, км/ч', en: 'General limits in built-up areas, km/h' },
            head: [{ ru: 'Улица', en: 'Street' }, { ru: 'Лимит', en: 'Limit' }],
            rows: [
              [{ ru: 'Тротуар вровень с дорогой', en: 'Pavement and road level' }, '20'],
              [{ ru: '1 полоса в каждую сторону', en: '1 lane in each direction' }, '30'],
              [{ ru: '2+ полосы в каждую сторону', en: '2+ lanes in each direction' }, '50'],
              [{ ru: 'Travesía (дорога через город)', en: 'Travesía (road through town)' }, '50'],
              [{ ru: 'Autopista / autovía в городе', en: 'Autopista / autovía in town' }, '80']
            ] },
          { type: 'text', color: 'blue', body: {
            ru: ['<b>Как считать полосы.</b> Выделенные полосы — для автобусов, такси, велосипедов — <b>не считаются</b>. Улица с одной обычной полосой и автобусной полосой в каждую сторону — это улица «одна полоса», лимит 30 (RGC, ст. 50).',
                 'Мэрия может <b>понизить</b> любой лимит знаком, а на улице с одной полосой — в виде исключения <b>поднять до 50</b>, тоже только знаком. Машины с опасными грузами на улицах «50» и в travesías — не быстрее <b>40 км/ч</b>.'],
            en: ['<b>Counting lanes.</b> Reserved lanes — for buses, taxis, bikes — <b>do not count</b>. A street with one ordinary lane plus a bus lane in each direction is a “one-lane” street: the limit is 30 (RGC art. 50).',
                 'The town council may <b>lower</b> any limit with a sign and, exceptionally, <b>raise a one-lane street to 50</b> — again only with a sign. Vehicles with dangerous goods may not exceed <b>40 km/h</b> on “50” streets and in travesías.'] } },
          { type: 'signs', heading: { ru: 'Зоны с особой скоростью (RD 465/2025)', en: 'Zones with special speeds (RD 465/2025)' }, items: [
            { code: 'S-47', note: { ru: 'зона совместного движения: до 20 км/ч, пешеходы главные', en: 'shared space: 20 km/h max, pedestrians first' } },
            { code: 'S-28', note: { ru: 'зона отдыха и игр: до 10 км/ч, игры разрешены', en: 'play zone: 10 km/h max, games allowed' } },
            { code: 'R-301', note: { ru: 'другой лимит на улице — только знаком', en: 'any other street limit needs a sign' } }
          ] },
          { type: 'tip', title: { ru: 'Запомнить городские цифры', en: 'Remember the town numbers' }, body: {
            ru: ['<b>20 — 30 — 50 — 80</b>: «всё на одном уровне» — 20; «одна полоса» — 30; «две и больше» — 50; скоростная дорога через город — 80.',
                 'Почему 30? Пешеход, сбитый на 30 км/ч, обычно выживает; на 50 км/ч шансы гораздо ниже.'],
            en: ['<b>20 — 30 — 50 — 80</b>: “all one level” is 20; “one lane” is 30; “two or more” is 50; a motorway through town is 80.',
                 'Why 30? A pedestrian hit at 30 km/h usually survives; at 50 km/h the chances are far lower.'] } }
        ]
      },
      {
        id: 'stop', label: { ru: 'Остановка', en: 'Stopping' },
        blocks: [
          { type: 'rules', heading: { ru: 'Три расстояния', en: 'Three distances' }, items: [
            { color: 'amber', title: { ru: 'Путь реакции', en: 'Reaction distance' }, es: 'distancia de reacción',
              body: { ru: 'Сколько машина проезжает, пока вы <b>заметили</b> опасность и <b>нажали тормоз</b>. Время реакции — обычно 0,5–1 с (в среднем ~0,75 с); растёт от усталости, сна, алкоголя, отвлечения. Путь растёт <b>пропорционально скорости</b>.',
                      en: 'How far the car travels between <b>noticing</b> the danger and <b>pressing the brake</b>. Reaction time is usually 0.5–1 s (about 0.75 s on average); fatigue, sleepiness, alcohol and distraction make it longer. The distance grows <b>in proportion to speed</b>.' } },
            { color: 'coral', title: { ru: 'Тормозной путь', en: 'Braking distance' }, es: 'distancia de frenado',
              body: { ru: 'От нажатия тормоза до полной остановки. Растёт с <b>квадратом скорости</b>: скорость ×2 → путь ×4. Также зависит от груза, тормозов и шин, мокрой или скользкой дороги.',
                      en: 'From pressing the brake to a complete stop. It grows with the <b>square of the speed</b>: speed ×2 → distance ×4. It also depends on the load, the brakes and tyres, and on a wet or slippery road.' } },
            { color: 'purple', title: { ru: 'Остановочный путь', en: 'Stopping distance' }, es: 'reacción + frenado',
              body: { ru: 'От момента, когда вы увидели опасность, до полной остановки = путь реакции + тормозной путь.',
                      en: 'From the moment you see the danger to a complete stop = reaction distance + braking distance.' } }
          ] },
          { type: 'figure', src: 'img/dgt/velocidad-detencion.svg',
            alt: { ru: 'Схема: при 50 км/ч путь реакции около 14 м и тормозной около 14 м, всего около 28 м; при 100 км/ч путь реакции около 28 м и тормозной около 55 м, всего около 83 м.',
                   en: 'Diagram: at 50 km/h the reaction distance is about 14 m and braking about 14 m, about 28 m in total; at 100 km/h reaction is about 28 m and braking about 55 m, about 83 m in total.' },
            caption: { ru: 'Примерные цифры: реакция 1 с, сухой асфальт. Скорость вдвое выше — путь реакции ×2, тормозной путь ×4.',
                       en: 'Approximate figures: 1 s reaction, dry asphalt. Twice the speed: reaction distance ×2, braking distance ×4.' } },
          { type: 'table', heading: { ru: 'Что удлиняет остановку', en: 'What makes stopping longer' },
            head: [{ ru: 'Фактор', en: 'Factor' }, { ru: 'Что растёт', en: 'What grows' }],
            rows: [
              [{ ru: 'Скорость', en: 'Speed' }, { ru: 'реакция и торможение', en: 'reaction and braking' }],
              [{ ru: 'Усталость, алкоголь', en: 'Fatigue, alcohol' }, { ru: 'путь реакции', en: 'reaction distance' }],
              [{ ru: 'Мокрая дорога, лёд', en: 'Wet road, ice' }, { ru: 'тормозной путь', en: 'braking distance' }],
              [{ ru: 'Изношенные шины, тормоза', en: 'Worn tyres, brakes' }, { ru: 'тормозной путь', en: 'braking distance' }],
              [{ ru: 'Тяжёлый груз', en: 'Heavy load' }, { ru: 'тормозной путь', en: 'braking distance' }]
            ] },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Туннельное зрение.</b> Чем быстрее едешь, тем уже поле зрения: стоя — около 180°, на 65 км/ч — около 70°, на 130 км/ч — около 30°. Пешехода или машину сбоку на большой скорости легко не заметить. Долгая быстрая езда утомляет, а на хорошей дороге скорость кажется меньше, чем есть.'],
            en: ['<b>Tunnel vision.</b> The faster you go, the narrower your field of vision: about 180° standing still, about 70° at 65 km/h, about 30° at 130 km/h. At high speed it is easy to miss a pedestrian or a car at the side. Driving fast for long is tiring, and on a good road speed feels lower than it really is.'] } }
        ]
      },
      {
        id: 'gap', label: { ru: 'Дистанция', en: 'Distance' },
        blocks: [
          { type: 'text', body: {
            ru: ['<b>Дистанция безопасности</b> (<i>distancia de seguridad</i>) — свободное место до машины впереди, которое позволяет <b>остановиться, не врезавшись</b>, если она резко затормозит. Её надо увеличивать на скорости, при плохой видимости и сцеплении, в плохом самочувствии (RGC, ст. 54).'],
            en: ['The <b>safety distance</b> (<i>distancia de seguridad</i>) is the free space to the vehicle in front that lets you <b>stop without hitting it</b> if it brakes sharply. Increase it at higher speed, with poor visibility or grip, and when you are not at your best (RGC art. 54).'] } },
          { type: 'figure', src: 'img/dgt/velocidad-seguridad.svg',
            alt: { ru: 'Две машины в одной полосе. Передняя проезжает столб; задняя должна доехать до него не раньше чем через две секунды.',
                   en: 'Two cars in one lane. The front car passes a post; the rear car should reach it no sooner than two seconds later.' },
            caption: { ru: 'Правило двух секунд: когда машина впереди проехала ориентир, считайте «раз, два». Доехали раньше — вы слишком близко. В дождь, туман, ночью — добавьте ещё секунду.',
                       en: 'The two-second rule: when the car ahead passes a landmark, count “one, two”. Reach it sooner and you are too close. In rain, fog or at night add another second.' } },
          { type: 'rules', heading: { ru: 'Правила дистанции', en: 'Distance rules' }, items: [
            { color: 'blue', title: { ru: 'Всегда', en: 'Always' }, es: 'poder detenerse',
              body: { ru: 'Дистанция должна позволять остановиться при резком торможении впереди — в городе и за городом. Исключение: <b>велосипедисты в группе</b> могут ехать без неё.',
                      en: 'The gap must let you stop if the vehicle ahead brakes sharply — in town and out of town. Exception: <b>cyclists riding in a group</b> may ride without it.' } },
            { color: 'teal', title: { ru: 'Чтобы вас могли обогнать', en: 'So others can overtake you' }, es: '50 m',
              body: { ru: 'Если вы не собираетесь обгонять, оставьте место, чтобы едущий сзади мог обогнать вас и встроиться. Машины <b>> 3 500 кг</b> и составы <b>> 10 м</b> — минимум <b>50 м</b>.',
                      en: 'If you do not intend to overtake, leave room for the vehicle behind to overtake you and pull back in. Vehicles <b>> 3,500 kg</b> and combinations <b>> 10 m</b> long: at least <b>50 m</b>.' } },
            { color: 'amber', title: { ru: 'Когда 50 м не нужны', en: 'When the 50 m rule does not apply' }, es: 'en poblado',
              body: { ru: 'В населённом пункте; где обгон запрещён; где в вашу сторону больше одной полосы; в плотном потоке, когда обгонять невозможно.',
                      en: 'In built-up areas; where overtaking is forbidden; where there is more than one lane in your direction; in dense traffic where overtaking is impossible.' } }
          ] },
          { type: 'text', color: 'purple', body: {
            ru: ['<b>Боковой интервал</b> (<i>separación lateral</i>) — расстояние до встречных, обгоняемых и стоящих машин. Чем выше скорость, хуже дорога и погода, тем он больше. Рядом со стоящими машинами оставляйте запас на внезапно открытую дверь; если места нет — снижайте скорость. При обгоне велосипедистов, пешеходов, животных и стоящих на дороге машин — не меньше <b>1,5 м</b> (подробно — в теме «Манёвры»).'],
            en: ['The <b>lateral gap</b> (<i>separación lateral</i>) is the space to oncoming, overtaken and parked vehicles. The higher the speed and the worse the road and weather, the wider it should be. Next to parked cars leave room for a door opening suddenly; if there is no room, slow down. When overtaking cyclists, pedestrians, animals and vehicles stopped on the road: at least <b>1.5 m</b> (details in the “Manoeuvres” topic).'] } },
          { type: 'signs', heading: { ru: 'Знаки', en: 'Signs' }, items: [
            { code: 'R-300', note: { ru: 'минимальная дистанция — цифра в метрах', en: 'minimum following distance — the figure in metres' } },
            { code: 'R-411', note: { ru: 'минимальная скорость (синий круг)', en: 'minimum speed (blue circle)' } },
            { code: 'R-506', note: { ru: 'конец минимальной скорости', en: 'end of minimum speed' } }
          ] }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Скорость', en: 'Speed' }, items: [
            { color: 'coral', es: 'En una autovía, un turismo puede circular como máximo a <b>120 km/h</b>.', ru: 'На autovía легковой автомобиль может ехать не быстрее 120 км/ч.', en: 'On an autovía a car may drive at 120 km/h at most.' },
            { color: 'coral', es: 'En las carreteras convencionales el límite para turismos es de <b>90 km/h</b>.', ru: 'На обычных дорогах лимит для легковых — 90 км/ч.', en: 'On ordinary roads the limit for cars is 90 km/h.' },
            { color: 'coral', es: 'En una calle de un único carril por sentido no se puede superar los <b>30 km/h</b>.', ru: 'На улице с одной полосой в каждую сторону нельзя ехать быстрее 30 км/ч.', en: 'On a street with a single lane in each direction you may not exceed 30 km/h.' },
            { color: 'coral', es: 'Circular a 110 km/h donde el límite es 90 es un <b>exceso de velocidad</b>.', ru: 'Ехать 110 км/ч там, где лимит 90, — превышение скорости.', en: 'Driving at 110 km/h where the limit is 90 is speeding.' },
            { color: 'blue', es: 'En autopista está prohibido circular por debajo de la <b>velocidad mínima</b> de 60 km/h.', ru: 'На автомагистрали запрещено ехать медленнее минимальной скорости 60 км/ч.', en: 'On a motorway it is forbidden to drive below the minimum speed of 60 km/h.' },
            { color: 'teal', es: 'Con niebla densa hay que circular a <b>velocidad moderada</b>.', ru: 'В густой туман нужно ехать с умеренной скоростью.', en: 'In thick fog you must drive at a moderate speed.' },
            { color: 'amber', es: 'Ir a 80 km/h sobre placas de hielo es una <b>velocidad inadecuada</b>.', ru: 'Ехать 80 км/ч по гололёду — неподходящая скорость.', en: 'Driving at 80 km/h on patches of ice is an inappropriate speed.' },
            { color: 'teal', es: 'Al acercarte a un colegio, <b>reduce la velocidad</b>.', ru: 'Подъезжая к школе, снизьте скорость.', en: 'When approaching a school, reduce your speed.' }
          ] },
          { type: 'examples', heading: { ru: 'Дистанции', en: 'Distances' }, items: [
            { color: 'purple', es: 'La <b>distancia de detención</b> es la suma de la de reacción y la de frenado.', ru: 'Остановочный путь — сумма пути реакции и тормозного пути.', en: 'Stopping distance is reaction distance plus braking distance.' },
            { color: 'coral', es: 'Con el suelo mojado aumenta la <b>distancia de frenado</b>.', ru: 'На мокрой дороге тормозной путь увеличивается.', en: 'On a wet road the braking distance increases.' },
            { color: 'amber', es: 'El cansancio alarga el <b>tiempo de reacción</b>.', ru: 'Усталость увеличивает время реакции.', en: 'Tiredness makes reaction time longer.' },
            { color: 'blue', es: 'Mantén la <b>distancia de seguridad</b> con el vehículo de delante.', ru: 'Держите безопасную дистанцию до машины впереди.', en: 'Keep a safe distance from the vehicle in front.' },
            { color: 'blue', es: 'Deja al menos <b>dos segundos</b> de separación.', ru: 'Оставляйте не меньше двух секунд дистанции.', en: 'Leave at least two seconds of distance.' },
            { color: 'teal', es: 'Los camiones deben guardar una separación mínima de <b>50 metros</b>.', ru: 'Грузовики должны держать дистанцию не меньше 50 метров.', en: 'Lorries must keep a minimum gap of 50 metres.' },
            { color: 'purple', es: 'Al adelantar a un ciclista, deja una <b>separación lateral</b> de 1,5 metros.', ru: 'При обгоне велосипедиста оставьте боковой интервал 1,5 метра.', en: 'When overtaking a cyclist, leave a lateral gap of 1.5 metres.' },
            { color: 'amber', es: 'Para avisar de que vas a frenar, pisa el freno <b>varias veces</b>.', ru: 'Чтобы предупредить о торможении, нажмите на тормоз несколько раз.', en: 'To warn that you are going to brake, press the brake several times.' }
          ] },
          { type: 'markers', groups: [
            { color: 'coral', title: { ru: 'Скорость', en: 'Speed' }, tags: ['velocidad máxima', 'velocidad mínima', 'velocidad adecuada', 'velocidad moderada', 'exceso de velocidad', 'límite genérico', 'travesía', 'en poblado', 'fuera de poblado'] },
            { color: 'purple', title: { ru: 'Расстояния', en: 'Distances' }, tags: ['distancia de reacción', 'distancia de frenado', 'distancia de detención', 'distancia de seguridad', 'separación lateral', 'tiempo de reacción', 'adherencia'] }
          ] }
        ]
      }
    ],
    quizCount: 20,
    quiz: [
      { es: '¿A qué velocidad máxima puede circular un turismo por una autovía, si no hay señal que indique otra?',
        prompt: { ru: 'С какой максимальной скоростью легковой автомобиль может ехать по autovía, если знаков нет?', en: 'What is the maximum speed for a car on an autovía when no sign says otherwise?' },
        options: [
          { es: '120 km/h.', ru: '120 км/ч.', en: '120 km/h.' },
          { es: '100 km/h.', ru: '100 км/ч.', en: '100 km/h.' },
          { es: '130 km/h.', ru: '130 км/ч.', en: '130 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'Легковые, мотоциклы, пикапы и автодома до 3,5 т — 120 км/ч на autopista и autovía. 130 в Испании нет. RGC, ст. 48.', en: 'Cars, motorcycles, pick-ups and campers up to 3.5 t: 120 km/h on autopistas and autovías. Spain has no 130 limit. RGC art. 48.' } },
      { es: '¿Cuál es la velocidad máxima genérica de un turismo en una carretera convencional?',
        prompt: { ru: 'Каков общий лимит скорости легкового автомобиля на обычной дороге (convencional)?', en: 'What is the general speed limit for a car on an ordinary road (carretera convencional)?' },
        options: [
          { es: '100 km/h.', ru: '100 км/ч.', en: '100 km/h.' },
          { es: '90 km/h.', ru: '90 км/ч.', en: '90 km/h.' },
          { es: '80 km/h.', ru: '80 км/ч.', en: '80 km/h.' }
        ],
        answer: 1,
        explain: { ru: 'С 2019 года на обычных дорогах для легковых — 90 км/ч. 100 возможно только при физическом разделении потоков и со знаком. RGC, ст. 48.', en: 'Since 2019 the limit for cars on ordinary roads is 90 km/h. 100 is possible only with a physical barrier between directions and a sign. RGC art. 48.' } },
      { es: '¿A qué velocidad máxima puede circular un autobús por una autopista?',
        prompt: { ru: 'С какой максимальной скоростью автобус может ехать по автомагистрали?', en: 'What is the maximum speed for a bus on an autopista?' },
        options: [
          { es: '90 km/h.', ru: '90 км/ч.', en: '90 km/h.' },
          { es: '120 km/h.', ru: '120 км/ч.', en: '120 km/h.' },
          { es: '100 km/h.', ru: '100 км/ч.', en: '100 km/h.' }
        ],
        answer: 2,
        explain: { ru: 'Автобусы, derivados de turismo и mixtos adaptables — 100 км/ч на autopista/autovía и 90 на обычной дороге. RGC, ст. 48.', en: 'Buses, car-derived vans and mixed-use vehicles: 100 km/h on autopistas/autovías and 90 on ordinary roads. RGC art. 48.' } },
      { es: '¿Cuál es la velocidad máxima de una furgoneta en una autovía?',
        prompt: { ru: 'Какова максимальная скорость фургона (furgoneta) на autovía?', en: 'What is the maximum speed for a van (furgoneta) on an autovía?' },
        options: [
          { es: '90 km/h.', ru: '90 км/ч.', en: '90 km/h.' },
          { es: '100 km/h.', ru: '100 км/ч.', en: '100 km/h.' },
          { es: '120 km/h.', ru: '120 км/ч.', en: '120 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'Фургоны (furgonetas) в таблице стоят вместе с грузовиками: 90 на autopista/autovía и 80 на обычной дороге. Не путайте с derivado de turismo (100). RGC, ст. 48.', en: 'Vans (furgonetas) are grouped with lorries: 90 on autopistas/autovías and 80 on ordinary roads. Do not confuse them with car-derived vans (100). RGC art. 48.' } },
      { es: '¿A qué velocidad máxima puede circular un camión por una carretera convencional?',
        prompt: { ru: 'С какой максимальной скоростью грузовик может ехать по обычной дороге?', en: 'What is the maximum speed for a lorry on an ordinary road?' },
        options: [
          { es: '70 km/h.', ru: '70 км/ч.', en: '70 km/h.' },
          { es: '90 km/h.', ru: '90 км/ч.', en: '90 km/h.' },
          { es: '80 km/h.', ru: '80 км/ч.', en: '80 km/h.' }
        ],
        answer: 2,
        explain: { ru: 'Грузовики, тягачи, фургоны, автодома > 3,5 т, сочленённые машины и машины с прицепом — 80 км/ч на обычной дороге. RGC, ст. 48.', en: 'Lorries, tractor units, vans, campers over 3.5 t, articulated vehicles and vehicles with a trailer: 80 km/h on an ordinary road. RGC art. 48.' } },
      { es: 'Un turismo que arrastra un remolque circula por una autovía. ¿Cuál es su velocidad máxima?',
        prompt: { ru: 'Легковой автомобиль с прицепом едет по autovía. Какой у него лимит?', en: 'A car towing a trailer is on an autovía. What is its speed limit?' },
        options: [
          { es: '120 km/h.', ru: '120 км/ч.', en: '120 km/h.' },
          { es: '90 km/h.', ru: '90 км/ч.', en: '90 km/h.' },
          { es: '80 km/h.', ru: '80 км/ч.', en: '80 km/h.' }
        ],
        answer: 1,
        explain: { ru: 'Любой автомобиль с прицепом попадает в группу «грузовики и остальные»: 90 на autovía, 80 на обычной дороге. RGC, ст. 48.', en: 'Any vehicle with a trailer falls into the “lorries and others” group: 90 on an autovía, 80 on an ordinary road. RGC art. 48.' } },
      { es: 'Un autobús de transporte escolar circula por una carretera convencional. ¿A qué velocidad máxima puede ir?',
        prompt: { ru: 'Школьный автобус едет по обычной дороге. Какая у него максимальная скорость?', en: 'A school bus is on an ordinary road. What is its maximum speed?' },
        options: [
          { es: '80 km/h.', ru: '80 км/ч.', en: '80 km/h.' },
          { es: '90 km/h.', ru: '90 км/ч.', en: '90 km/h.' },
          { es: '70 km/h.', ru: '70 км/ч.', en: '70 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'Для перевозки школьников, детей и опасных грузов лимит на 10 км/ч ниже: автобус на обычной дороге — 90 − 10 = 80. RGC, ст. 48.1.b.', en: 'For school, children’s and dangerous-goods transport the limit is 10 km/h lower: a bus on an ordinary road has 90 − 10 = 80. RGC art. 48.1.b.' } },
      { es: '¿Cuál es la velocidad máxima en las vías sin pavimentar?',
        prompt: { ru: 'Какой лимит скорости на дорогах без покрытия?', en: 'What is the speed limit on unpaved roads?' },
        options: [
          { es: '30 km/h.', ru: '30 км/ч.', en: '30 km/h.' },
          { es: '40 km/h.', ru: '40 км/ч.', en: '40 km/h.' },
          { es: '50 km/h.', ru: '50 км/ч.', en: '50 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'На грунтовых дорогах (vías sin pavimentar) — не больше 30 км/ч. RGC, ст. 48.1.f.', en: 'On unpaved roads (vías sin pavimentar) the limit is 30 km/h. RGC art. 48.1.f.' } },
      { es: 'En una vía urbana con un único carril por sentido de circulación, ¿cuál es el límite genérico de velocidad?',
        prompt: { ru: 'Какой общий лимит скорости на городской улице с одной полосой в каждую сторону?', en: 'What is the general speed limit on an urban street with a single lane in each direction?' },
        options: [
          { es: '50 km/h.', ru: '50 км/ч.', en: '50 km/h.' },
          { es: '30 km/h.', ru: '30 км/ч.', en: '30 km/h.' },
          { es: '20 km/h.', ru: '20 км/ч.', en: '20 km/h.' }
        ],
        answer: 1,
        explain: { ru: 'С 2021 года: одна полоса в каждую сторону — 30 км/ч; две и больше — 50; единая платформа без бордюра — 20. RGC, ст. 50.', en: 'Since 2021: one lane per direction — 30 km/h; two or more — 50; a single-level street with no kerb — 20. RGC art. 50.' } },
      { es: '¿Cuál es el límite genérico en una vía urbana con plataforma única de calzada y acera?',
        prompt: { ru: 'Какой общий лимит на городской улице, где проезжая часть и тротуар на одном уровне?', en: 'What is the general limit on an urban street where the road and the pavement are on one level?' },
        options: [
          { es: '10 km/h.', ru: '10 км/ч.', en: '10 km/h.' },
          { es: '30 km/h.', ru: '30 км/ч.', en: '30 km/h.' },
          { es: '20 km/h.', ru: '20 км/ч.', en: '20 km/h.' }
        ],
        answer: 2,
        explain: { ru: 'Plataforma única — тротуар и проезжая часть без перепада высоты — 20 км/ч. RGC, ст. 50.1.a.', en: 'A plataforma única — pavement and roadway at the same level — has a 20 km/h limit. RGC art. 50.1.a.' } },
      { es: 'Una calle tiene en cada sentido un carril normal y un carril reservado al autobús. ¿Cuál es su límite genérico?',
        prompt: { ru: 'На улице в каждую сторону одна обычная полоса и одна автобусная. Какой здесь общий лимит?', en: 'A street has one ordinary lane and one bus lane in each direction. What is its general limit?' },
        options: [
          { es: '50 km/h, porque hay dos carriles por sentido.', ru: '50 км/ч — ведь в каждую сторону две полосы.', en: '50 km/h, because there are two lanes in each direction.' },
          { es: '30 km/h, porque el carril bus no se cuenta.', ru: '30 км/ч — автобусная полоса не считается.', en: '30 km/h, because the bus lane does not count.' },
          { es: '40 km/h.', ru: '40 км/ч.', en: '40 km/h.' }
        ],
        answer: 1,
        explain: { ru: 'Выделенные полосы (для автобусов, такси, велосипедов) при подсчёте не учитываются, значит, это улица с одной полосой — 30 км/ч. RGC, ст. 50.1.', en: 'Reserved lanes (bus, taxi, bike) are not counted, so this is a one-lane street — 30 km/h. RGC art. 50.1.' } },
      { es: '¿Cuál es el límite genérico de velocidad en una travesía?',
        prompt: { ru: 'Какой общий лимит скорости в travesía (участке загородной дороги, проходящем через населённый пункт)?', en: 'What is the general speed limit in a travesía (a stretch of an interurban road passing through a town)?' },
        options: [
          { es: '50 km/h.', ru: '50 км/ч.', en: '50 km/h.' },
          { es: '30 km/h.', ru: '30 км/ч.', en: '30 km/h.' },
          { es: '60 km/h.', ru: '60 км/ч.', en: '60 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'В travesías для всех — 50 км/ч; мэрия вместе с владельцем дороги может снизить лимит знаком. RGC, ст. 50.5.', en: 'In travesías the limit is 50 km/h for everyone; the council and the road owner may lower it with a sign. RGC art. 50.5.' } },
      { es: '¿A qué velocidad máxima se puede circular por una autovía que transcurre dentro de poblado, si no hay señal?',
        prompt: { ru: 'С какой скоростью можно ехать по autovía, проходящей через населённый пункт, если знаков нет?', en: 'How fast may you drive on an autovía running through a built-up area when there is no sign?' },
        options: [
          { es: '120 km/h.', ru: '120 км/ч.', en: '120 km/h.' },
          { es: '50 km/h.', ru: '50 км/ч.', en: '50 km/h.' },
          { es: '80 km/h.', ru: '80 км/ч.', en: '80 km/h.' }
        ],
        answer: 2,
        explain: { ru: 'Autopista или autovía внутри населённого пункта — 80 км/ч; лимит можно поднять знаком, но не выше загородного. RGC, ст. 50.6.', en: 'An autopista or autovía inside a built-up area: 80 km/h; it can be raised with signs, but never above the out-of-town limit. RGC art. 50.6.' } },
      { es: 'Para adelantar en una carretera convencional, ¿puede un turismo superar en 20 km/h el límite de velocidad?',
        prompt: { ru: 'Может ли легковой автомобиль при обгоне на обычной дороге превысить лимит на 20 км/ч?', en: 'When overtaking on an ordinary road, may a car exceed the speed limit by 20 km/h?' },
        options: [
          { es: 'Sí, solo durante el adelantamiento.', ru: 'Да, только на время обгона.', en: 'Yes, only while overtaking.' },
          { es: 'Sí, si el vehículo adelantado circula por debajo del límite.', ru: 'Да, если обгоняемый едет медленнее лимита.', en: 'Yes, if the vehicle being overtaken is below the limit.' },
          { es: 'No, nunca se puede superar el límite para adelantar.', ru: 'Нет, превышать лимит для обгона нельзя никогда.', en: 'No, you may never exceed the limit to overtake.' }
        ],
        answer: 2,
        explain: { ru: 'Поблажку «+20 км/ч при обгоне» отменили с 21 марта 2022 года (Ley 18/2021: LSV, ст. 21.4 и RGC, ст. 51 отменены). Обгон — только в пределах лимита.', en: 'The “+20 km/h when overtaking” allowance was abolished on 21 March 2022 (Ley 18/2021: LSV art. 21.4 and RGC art. 51 repealed). You overtake within the limit.' } },
      { es: '¿Cuál es la velocidad mínima en autopistas y autovías para los vehículos a motor?',
        prompt: { ru: 'Какая минимальная скорость для механических транспортных средств на autopista и autovía?', en: 'What is the minimum speed for motor vehicles on autopistas and autovías?' },
        options: [
          { es: '60 km/h.', ru: '60 км/ч.', en: '60 km/h.' },
          { es: '50 km/h.', ru: '50 км/ч.', en: '50 km/h.' },
          { es: '70 km/h.', ru: '70 км/ч.', en: '70 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'На autopista и autovía нельзя без причины ехать медленнее 60 км/ч, даже если дорога пуста. RGC, ст. 49.1.', en: 'On autopistas and autovías you may not drive below 60 km/h without a reason, even on an empty road. RGC art. 49.1.' } },
      { es: 'En una carretera convencional donde la velocidad máxima genérica de un turismo es de 90 km/h, ¿cuál es su velocidad mínima?',
        prompt: { ru: 'На обычной дороге с общим лимитом 90 км/ч для легкового — какая для него минимальная скорость?', en: 'On an ordinary road where the general limit for a car is 90 km/h, what is its minimum speed?' },
        options: [
          { es: '60 km/h.', ru: '60 км/ч.', en: '60 km/h.' },
          { es: '45 km/h.', ru: '45 км/ч.', en: '45 km/h.' },
          { es: 'No hay velocidad mínima.', ru: 'Минимальной скорости нет.', en: 'There is no minimum speed.' }
        ],
        answer: 1,
        explain: { ru: 'Кроме autopista и autovía, минимум — половина общего лимита для этого типа транспорта: 90 / 2 = 45 км/ч. RGC, ст. 49.1.', en: 'Except on autopistas and autovías, the minimum is half the general limit for that vehicle type: 90 / 2 = 45 km/h. RGC art. 49.1.' } },
      { es: 'Su vehículo no puede alcanzar la velocidad mínima exigida y existe peligro de alcance. ¿Qué debe hacer?',
        prompt: { ru: 'Ваша машина не может набрать требуемую минимальную скорость, и есть риск, что в вас врежутся сзади. Что делать?', en: 'Your vehicle cannot reach the required minimum speed and there is a risk of being hit from behind. What must you do?' },
        options: [
          { es: 'Encender las luces de emergencia mientras circula.', ru: 'Ехать с включённой аварийной сигнализацией.', en: 'Drive with the hazard lights on.' },
          { es: 'Encender la luz antiniebla trasera.', ru: 'Включить задний противотуманный фонарь.', en: 'Switch on the rear fog light.' },
          { es: 'Circular por el carril izquierdo.', ru: 'Ехать по левой полосе.', en: 'Drive in the left-hand lane.' }
        ],
        answer: 0,
        explain: { ru: 'Если минимум недостижим и есть риск наезда сзади, во время движения включают аварийную сигнализацию. На autopista/autovía — покинуть её на первом съезде. RGC, ст. 49.3.', en: 'If you cannot reach the minimum and could be hit from behind, drive with the hazard lights on. On an autopista/autovía, leave at the first exit. RGC art. 49.3.' } },
      { es: 'Se acerca a una intersección señalizada en la que no tiene prioridad y la visibilidad es prácticamente nula. ¿A qué velocidad máxima debe ir?',
        prompt: { ru: 'Вы подъезжаете к перекрёстку со знаками, где у вас нет приоритета, а видимость почти нулевая. Какая максимальная скорость?', en: 'You approach a signed junction where you do not have priority and visibility is practically nil. What is your maximum speed?' },
        options: [
          { es: '30 km/h.', ru: '30 км/ч.', en: '30 km/h.' },
          { es: '50 km/h.', ru: '50 км/ч.', en: '50 km/h.' },
          { es: '70 km/h.', ru: '70 км/ч.', en: '70 km/h.' }
        ],
        answer: 1,
        explain: { ru: 'В таком случае скорость не должна превышать 50 км/ч — и, конечно, нужно быть готовым остановиться. RGC, ст. 46.1.h.', en: 'In that case speed must not exceed 50 km/h — and you must be ready to stop. RGC art. 46.1.h.' } },
      { es: 'Circula a 90 km/h por una carretera limitada a 90 y entra en una zona de niebla densa. ¿Es correcta su velocidad?',
        prompt: { ru: 'Вы едете 90 км/ч по дороге с лимитом 90 и въезжаете в густой туман. Правильная ли у вас скорость?', en: 'You are doing 90 km/h on a road limited to 90 and drive into thick fog. Is your speed correct?' },
        options: [
          { es: 'Sí, porque no supera el límite.', ru: 'Да, ведь лимит не превышен.', en: 'Yes, because it is not above the limit.' },
          { es: 'Sí, si lleva encendidas las luces antiniebla.', ru: 'Да, если включены противотуманные фары.', en: 'Yes, if the fog lights are on.' },
          { es: 'No, es una velocidad inadecuada; debe moderarla.', ru: 'Нет, это неподходящая скорость — её нужно снизить.', en: 'No, it is an inappropriate speed; you must reduce it.' }
        ],
        answer: 2,
        explain: { ru: 'Лимит — это максимум при хороших условиях. В густой туман нужно ехать умеренно, чтобы остановиться в пределах видимости. RGC, ст. 45 и 46.1.k.', en: 'The limit is the maximum in good conditions. In thick fog you must drive moderately so you can stop within what you can see. RGC arts. 45 and 46.1.k.' } },
      { es: 'Fuera de poblado se acerca a un autobús escolar detenido en su parada. ¿Qué debe hacer?',
        prompt: { ru: 'Вне населённого пункта вы приближаетесь к школьному автобусу, стоящему на остановке. Что нужно делать?', en: 'Outside a built-up area you approach a school bus stopped at its stop. What should you do?' },
        options: [
          { es: 'Moderar la velocidad y estar preparado para detenerse.', ru: 'Снизить скорость и быть готовым остановиться.', en: 'Slow down and be ready to stop.' },
          { es: 'Mantener la velocidad y tocar el claxon.', ru: 'Сохранить скорость и посигналить.', en: 'Keep your speed and sound the horn.' },
          { es: 'Adelantarlo rápidamente para no entorpecer.', ru: 'Быстро обогнать его, чтобы не мешать.', en: 'Overtake it quickly so as not to hold anyone up.' }
        ],
        answer: 0,
        explain: { ru: 'Остановившийся автобус, особенно школьный, — случай обязательного снижения скорости: из-за него могут выбежать дети. RGC, ст. 46.1.e.', en: 'A stopped bus, especially a school bus, is a case where you must slow down: children may run out from behind it. RGC art. 46.1.e.' } },
      { es: '¿Cómo debe advertir que va a reducir considerablemente la velocidad?',
        prompt: { ru: 'Как предупредить, что вы собираетесь значительно снизить скорость?', en: 'How should you warn that you are about to slow down considerably?' },
        options: [
          { es: 'Con las luces de emergencia durante todo el frenado.', ru: 'Аварийной сигнализацией на всё время торможения.', en: 'With the hazard lights for the whole time you brake.' },
          { es: 'Con el uso reiterado de las luces de freno o moviendo el brazo de arriba abajo.', ru: 'Несколько раз нажать на тормоз (стоп-сигналы) или махать рукой вверх-вниз.', en: 'By flashing the brake lights repeatedly or moving your arm up and down.' },
          { es: 'Con ráfagas de luz de carretera.', ru: 'Миганием дальним светом.', en: 'By flashing the main beam.' }
        ],
        answer: 1,
        explain: { ru: 'Значительное торможение предупреждают многократными стоп-сигналами или рукой — короткими быстрыми движениями вверх-вниз. RGC, ст. 53 и 109.2.c.', en: 'A considerable slowdown is warned by repeated brake lights or by moving the arm up and down in short quick movements. RGC arts. 53 and 109.2.c.' } },
      { es: 'La distancia de detención es la suma de…',
        prompt: { ru: 'Остановочный путь — это сумма…', en: 'Stopping distance is the sum of…' },
        options: [
          { es: 'la distancia de seguridad y la de frenado.', ru: 'дистанции безопасности и тормозного пути.', en: 'the safety distance and the braking distance.' },
          { es: 'la distancia de reacción y la de frenado.', ru: 'пути реакции и тормозного пути.', en: 'the reaction distance and the braking distance.' },
          { es: 'la distancia de reacción y la separación lateral.', ru: 'пути реакции и бокового интервала.', en: 'the reaction distance and the lateral gap.' }
        ],
        answer: 1,
        explain: { ru: 'От момента, когда заметили опасность, до остановки: сначала путь реакции (пока не нажали тормоз), потом тормозной путь.', en: 'From seeing the danger to stopping: first the reaction distance (until you press the brake), then the braking distance.' } },
      { es: 'Si se duplica la velocidad, la distancia de frenado…',
        prompt: { ru: 'Если скорость увеличить вдвое, тормозной путь…', en: 'If speed doubles, the braking distance…' },
        options: [
          { es: 'se multiplica aproximadamente por cuatro.', ru: 'увеличится примерно в четыре раза.', en: 'becomes roughly four times longer.' },
          { es: 'se duplica.', ru: 'увеличится вдвое.', en: 'doubles.' },
          { es: 'no cambia si los frenos están bien.', ru: 'не изменится, если тормоза в порядке.', en: 'does not change if the brakes are good.' }
        ],
        answer: 0,
        explain: { ru: 'Тормозной путь растёт с квадратом скорости: ×2 скорости → примерно ×4 пути. Путь реакции растёт лишь вдвое.', en: 'Braking distance grows with the square of the speed: speed ×2 → about ×4 distance. The reaction distance only doubles.' } },
      { es: '¿Qué es la distancia de reacción?',
        prompt: { ru: 'Что такое путь реакции?', en: 'What is the reaction distance?' },
        options: [
          { es: 'La que se recorre desde que se pisa el freno hasta que el vehículo se para.', ru: 'Расстояние от нажатия тормоза до остановки.', en: 'The distance from pressing the brake until the vehicle stops.' },
          { es: 'La que se recorre desde que se percibe un peligro hasta que se empieza a frenar.', ru: 'Расстояние от момента, когда заметили опасность, до начала торможения.', en: 'The distance from noticing a danger until you start braking.' },
          { es: 'La que se deja con el vehículo de delante.', ru: 'Расстояние до машины впереди.', en: 'The gap you leave to the vehicle in front.' }
        ],
        answer: 1,
        explain: { ru: 'Путь реакции — сколько машина проезжает, пока водитель замечает опасность и переносит ногу на тормоз. Первый вариант — тормозной путь, третий — дистанция.', en: 'Reaction distance is how far the vehicle travels while the driver notices the danger and moves the foot to the brake. Option one is braking distance; option three is the following distance.' } },
      { es: '¿Cuánto suele durar el tiempo de reacción de un conductor en condiciones normales?',
        prompt: { ru: 'Сколько обычно длится время реакции водителя в нормальном состоянии?', en: 'How long is a driver’s reaction time in normal conditions?' },
        options: [
          { es: 'Unos 3 segundos.', ru: 'Около 3 секунд.', en: 'About 3 seconds.' },
          { es: 'Menos de 0,1 segundos.', ru: 'Меньше 0,1 секунды.', en: 'Less than 0.1 seconds.' },
          { es: 'Entre medio segundo y un segundo.', ru: 'От половины секунды до секунды.', en: 'Between half a second and one second.' }
        ],
        answer: 2,
        explain: { ru: 'Обычно 0,5–1 с (около 0,75 с). Усталость, сон, алкоголь, лекарства и отвлечение его удлиняют. Учебник DGT, темы 3 и 10.', en: 'Usually 0.5–1 s (about 0.75 s). Fatigue, sleepiness, alcohol, medicines and distraction make it longer. DGT manual, topics 3 and 10.' } },
      { es: '¿Qué ocurre con el campo visual del conductor al aumentar la velocidad?',
        prompt: { ru: 'Что происходит с полем зрения водителя при увеличении скорости?', en: 'What happens to the driver’s field of vision as speed increases?' },
        options: [
          { es: 'Se estrecha (visión en túnel).', ru: 'Сужается («туннельное зрение»).', en: 'It narrows (tunnel vision).' },
          { es: 'Se amplía.', ru: 'Расширяется.', en: 'It widens.' },
          { es: 'No cambia.', ru: 'Не меняется.', en: 'It does not change.' }
        ],
        answer: 0,
        explain: { ru: 'Чем выше скорость, тем уже поле зрения: около 180° на месте, ~70° на 65 км/ч, ~30° на 130 км/ч. Боковые опасности легко пропустить.', en: 'The faster you go, the narrower the field of vision: about 180° standing still, ~70° at 65 km/h, ~30° at 130 km/h. Hazards at the side are easily missed.' } },
      { es: 'Con la calzada mojada, la distancia de frenado…',
        prompt: { ru: 'На мокрой дороге тормозной путь…', en: 'On a wet road the braking distance…' },
        options: [
          { es: 'disminuye, porque el agua enfría los frenos.', ru: 'уменьшается — вода охлаждает тормоза.', en: 'gets shorter, because water cools the brakes.' },
          { es: 'aumenta, porque hay menos adherencia.', ru: 'увеличивается — сцепление хуже.', en: 'gets longer, because there is less grip.' },
          { es: 'es la misma que en seco.', ru: 'такой же, как на сухой.', en: 'is the same as on a dry road.' }
        ],
        answer: 1,
        explain: { ru: 'Мокрое покрытие уменьшает сцепление шин с дорогой, и машине нужно больше места, чтобы остановиться. Поэтому в дождь увеличивают и дистанцию.', en: 'A wet surface reduces tyre grip, so the vehicle needs more room to stop. That is why you also increase your following distance in the rain.' } },
      { es: '¿Qué espacio debe dejar con el vehículo que circula delante?',
        prompt: { ru: 'Какое расстояние нужно оставлять до машины, едущей впереди?', en: 'What gap must you leave to the vehicle in front?' },
        options: [
          { es: 'Siempre 50 metros.', ru: 'Всегда 50 метров.', en: 'Always 50 metres.' },
          { es: 'Un espacio que le permita detenerse sin chocar si frena bruscamente.', ru: 'Такое, чтобы остановиться без столкновения, если она резко затормозит.', en: 'One that lets you stop without hitting it if it brakes sharply.' },
          { es: 'La longitud de un coche por cada 10 km/h.', ru: 'Длину одной машины на каждые 10 км/ч.', en: 'One car length for every 10 km/h.' }
        ],
        answer: 1,
        explain: { ru: 'Закон не задаёт метры для легковых: дистанция должна позволять остановиться при резком торможении впереди с учётом скорости и сцепления. RGC, ст. 54.1.', en: 'The law sets no metres for cars: the gap must let you stop if the vehicle ahead brakes sharply, given your speed and grip. RGC art. 54.1.' } },
      { es: 'Según la recomendación de la DGT, ¿cuánto tiempo de separación conviene dejar con el vehículo de delante con buen tiempo?',
        prompt: { ru: 'Какой временной интервал до машины впереди рекомендует DGT в хорошую погоду?', en: 'What time gap to the vehicle in front does the DGT recommend in good weather?' },
        options: [
          { es: 'Medio segundo.', ru: 'Полсекунды.', en: 'Half a second.' },
          { es: 'Dos o tres segundos.', ru: 'Две-три секунды.', en: 'Two or three seconds.' },
          { es: 'Diez segundos.', ru: 'Десять секунд.', en: 'Ten seconds.' }
        ],
        answer: 1,
        explain: { ru: 'Рекомендация — 2–3 секунды до машины впереди; в дождь, снег, туман и ночью — ещё минимум секунду. Учебник DGT, тема 17.', en: 'The advice is 2–3 seconds to the vehicle ahead; add at least one more second in rain, snow, fog or at night. DGT manual, topic 17.' } },
      { es: 'Un camión de más de 3.500 kg circula fuera de poblado detrás de otro vehículo, sin intención de adelantar, en un tramo donde se permite adelantar. ¿Qué separación mínima debe dejar?',
        prompt: { ru: 'Грузовик > 3 500 кг едет за городом за другой машиной, не собираясь обгонять, на участке, где обгон разрешён. Какую минимальную дистанцию он должен держать?', en: 'A lorry over 3,500 kg is driving out of town behind another vehicle, not intending to overtake, where overtaking is allowed. What minimum gap must it keep?' },
        options: [
          { es: '25 metros.', ru: '25 метров.', en: '25 metres.' },
          { es: '100 metros.', ru: '100 метров.', en: '100 metres.' },
          { es: '50 metros.', ru: '50 метров.', en: '50 metres.' }
        ],
        answer: 2,
        explain: { ru: 'Машины > 3 500 кг и составы длиннее 10 м держат не меньше 50 м, чтобы их самих можно было обогнать. RGC, ст. 54.2.', en: 'Vehicles over 3,500 kg and combinations longer than 10 m keep at least 50 m so they can be overtaken. RGC art. 54.2.' } },
      { es: '¿En cuál de estos casos NO es obligatoria la separación mínima de 50 metros para los vehículos pesados?',
        prompt: { ru: 'В каком из этих случаев тяжёлым машинам НЕ обязательно держать 50 м?', en: 'In which of these cases is the 50-metre minimum gap NOT required for heavy vehicles?' },
        options: [
          { es: 'En una carretera convencional con línea discontinua.', ru: 'На обычной дороге с прерывистой разметкой.', en: 'On an ordinary road with a broken centre line.' },
          { es: 'En poblado.', ru: 'В населённом пункте.', en: 'In a built-up area.' },
          { es: 'De noche.', ru: 'Ночью.', en: 'At night.' }
        ],
        answer: 1,
        explain: { ru: 'Правило 50 м не действует в населённом пункте, где обгон запрещён, где в одну сторону больше одной полосы и в плотном потоке. RGC, ст. 54.3.', en: 'The 50 m rule does not apply in built-up areas, where overtaking is forbidden, where there is more than one lane in your direction, or in dense traffic. RGC art. 54.3.' } },
      { es: '¿Qué indica esta señal?',
        prompt: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        sign: 'R-301',
        options: [
          { es: 'Velocidad máxima: prohíbe superar la cifra indicada.', ru: 'Максимальная скорость: нельзя превышать указанную цифру.', en: 'Maximum speed: you may not exceed the number shown.' },
          { es: 'Velocidad aconsejada.', ru: 'Рекомендуемая скорость.', en: 'Advisory speed.' },
          { es: 'Velocidad mínima obligatoria.', ru: 'Обязательная минимальная скорость.', en: 'Compulsory minimum speed.' }
        ],
        answer: 0,
        explain: { ru: 'R-301 — красный круг с цифрой: максимальная скорость. Она важнее общего лимита дороги. Каталог знаков, R-301.', en: 'R-301, a red circle with a number, is the maximum speed. It overrides the road’s general limit. Sign catalogue, R-301.' } },
      { es: '¿Qué indica esta señal rectangular azul con una cifra?',
        prompt: { ru: 'Что означает этот синий прямоугольный знак с цифрой?', en: 'What does this blue rectangular sign with a number mean?' },
        sign: 'S-7',
        options: [
          { es: 'Velocidad mínima obligatoria.', ru: 'Обязательная минимальная скорость.', en: 'Compulsory minimum speed.' },
          { es: 'Velocidad máxima aconsejada, aunque las condiciones sean favorables.', ru: 'Рекомендуемая максимальная скорость даже при хороших условиях.', en: 'Advisory maximum speed, even in good conditions.' },
          { es: 'Velocidad máxima obligatoria en autopista.', ru: 'Обязательная максимальная скорость на автомагистрали.', en: 'Compulsory maximum speed on an autopista.' }
        ],
        answer: 1,
        explain: { ru: 'S-7 — знак указания: рекомендует не превышать цифру даже в хорошую погоду. Это совет, а не запрет. Каталог знаков, S-7.', en: 'S-7 is an information sign: it recommends not exceeding the number even in good conditions. It is advice, not a prohibition. Sign catalogue, S-7.' } },
      { es: '¿Qué obliga esta señal?',
        prompt: { ru: 'К чему обязывает этот знак?', en: 'What does this sign require?' },
        sign: 'R-411',
        options: [
          { es: 'A no superar la velocidad indicada.', ru: 'Не превышать указанную скорость.', en: 'Not to exceed the speed shown.' },
          { es: 'A circular, por lo menos, a la velocidad indicada.', ru: 'Ехать не медленнее указанной скорости.', en: 'To drive at least at the speed shown.' },
          { es: 'A mantener esa distancia en metros.', ru: 'Держать такую дистанцию в метрах.', en: 'To keep that distance in metres.' }
        ],
        answer: 1,
        explain: { ru: 'R-411 — синий круг с цифрой: минимальная скорость. Действует до знака другой минимальной скорости, конца минимальной (R-506) или максимальной скорости с такой же или меньшей цифрой.', en: 'R-411, a blue circle with a number, is the minimum speed. It applies until another minimum-speed sign, the end-of-minimum sign (R-506) or a maximum-speed sign with an equal or lower number.' } },
      { es: '¿Qué prohíbe esta señal?',
        prompt: { ru: 'Что запрещает этот знак?', en: 'What does this sign prohibit?' },
        sign: 'R-300',
        options: [
          { es: 'Circular a menos de esa velocidad.', ru: 'Ехать медленнее этой скорости.', en: 'Driving below that speed.' },
          { es: 'Circular sin dejar con el vehículo de delante la separación indicada, salvo para adelantar.', ru: 'Ехать, не соблюдая указанную дистанцию до машины впереди, кроме случая обгона.', en: 'Driving without keeping the gap shown from the vehicle ahead, except to overtake.' },
          { es: 'La entrada de vehículos más largos de lo indicado.', ru: 'Въезд машин длиннее указанного.', en: 'Entry of vehicles longer than shown.' }
        ],
        answer: 1,
        explain: { ru: 'R-300 «Минимальная дистанция»: держите не меньше указанных метров до машины впереди; без цифры — напоминание о безопасной дистанции. Каталог знаков, R-300.', en: 'R-300 “Minimum distance”: keep at least the metres shown to the vehicle ahead; with no number it reminds you to keep a safe distance. Sign catalogue, R-300.' } },
      { es: '¿Qué significa esta señal con la cifra tachada?',
        prompt: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        sign: 'R-501',
        options: [
          { es: 'Fin de la limitación de velocidad indicada.', ru: 'Конец указанного ограничения скорости.', en: 'End of the speed limit shown.' },
          { es: 'Velocidad mínima de 60 km/h.', ru: 'Минимальная скорость 60 км/ч.', en: 'Minimum speed of 60 km/h.' },
          { es: 'Prohibido circular a más de esa velocidad.', ru: 'Запрещено ехать быстрее этой скорости.', en: 'No driving faster than that speed.' }
        ],
        answer: 0,
        explain: { ru: 'R-501 (перечёркнутая цифра) отменяет предыдущее ограничение; дальше снова действует общий лимит дороги. Каталог знаков, R-501.', en: 'R-501 (a number crossed out) ends the previous limit; the road’s general limit applies again. Sign catalogue, R-501.' } },
      { es: 'Entra en una zona señalizada con esta señal. ¿A qué velocidad máxima puede circular?',
        prompt: { ru: 'Вы въезжаете в зону с этим знаком. Какая максимальная скорость?', en: 'You enter a zone marked with this sign. What is the maximum speed?' },
        sign: 'S-47',
        options: [
          { es: '30 km/h.', ru: '30 км/ч.', en: '30 km/h.' },
          { es: '50 km/h.', ru: '50 км/ч.', en: '50 km/h.' },
          { es: '20 km/h.', ru: '20 км/ч.', en: '20 km/h.' }
        ],
        answer: 2,
        explain: { ru: 'S-47 «Зона совместного движения» (каталог RD 465/2025): не больше 20 км/ч, пешеходы имеют приоритет, стоять можно только в обозначенных местах.', en: 'S-47 “Shared space zone” (RD 465/2025 catalogue): 20 km/h at most, pedestrians have priority, parking only in marked places.' } },
      { es: '¿Cuál es la velocidad máxima de un ciclomotor fuera de poblado?',
        prompt: { ru: 'Какая максимальная скорость мопеда вне населённого пункта?', en: 'What is the maximum speed of a moped outside built-up areas?' },
        options: [
          { es: '45 km/h.', ru: '45 км/ч.', en: '45 km/h.' },
          { es: '50 km/h.', ru: '50 км/ч.', en: '50 km/h.' },
          { es: '70 km/h.', ru: '70 км/ч.', en: '70 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'Мопеды (2 и 3 колеса), велосипеды и лёгкие квадрициклы — 45 км/ч; велосипедист может ехать быстрее, если позволяет дорога. RGC, ст. 48.1.e.', en: 'Mopeds (2 and 3 wheels), cycles and light quadricycles: 45 km/h; a cyclist may go faster where the road allows. RGC art. 48.1.e.' } },
      { es: 'Un vehículo especial carece de señalización de frenado. ¿Cuál es su velocidad máxima fuera de poblado?',
        prompt: { ru: 'У спецтехники нет стоп-сигналов. Какая у неё максимальная скорость вне населённого пункта?', en: 'A special vehicle has no brake lights. What is its maximum speed outside built-up areas?' },
        options: [
          { es: '40 km/h.', ru: '40 км/ч.', en: '40 km/h.' },
          { es: '25 km/h.', ru: '25 км/ч.', en: '25 km/h.' },
          { es: '70 km/h.', ru: '70 км/ч.', en: '70 km/h.' }
        ],
        answer: 1,
        explain: { ru: 'Спецтехника без стоп-сигналов, с прицепом и мотоблоки — 25 км/ч; остальная — 40, а способная ехать > 60 км/ч по ровной дороге — 70. RGC, ст. 48.1.c.', en: 'Special vehicles without brake lights, with a trailer, and two-wheel tractors: 25 km/h; others 40, and those able to exceed 60 km/h on the flat, 70. RGC art. 48.1.c.' } },
      { es: 'Un autobús lleva pasajeros de pie, autorizados, por una autovía. ¿Cuál es su velocidad máxima?',
        prompt: { ru: 'Автобус с разрешёнными стоящими пассажирами едет по autovía. Какая у него максимальная скорость?', en: 'A bus carrying authorised standing passengers is on an autovía. What is its maximum speed?' },
        options: [
          { es: '100 km/h.', ru: '100 км/ч.', en: '100 km/h.' },
          { es: '90 km/h.', ru: '90 км/ч.', en: '90 km/h.' },
          { es: '80 km/h.', ru: '80 км/ч.', en: '80 km/h.' }
        ],
        answer: 2,
        explain: { ru: 'Если в автобусе едут стоя или в нём нет ремней безопасности, за городом на любой дороге — не больше 80 км/ч. RGC, ст. 48.1.b.', en: 'If a bus carries standing passengers or has no seat belts, the limit out of town is 80 km/h on any road. RGC art. 48.1.b.' } }
    ]
  }
]);
