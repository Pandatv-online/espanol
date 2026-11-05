// DGT · theory, topic 12: right of way. Sources: DGT «Teórica abreviada, lectura fácil» (2025),
// DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-preferencia', level: 'DGT',
    title: { ru: 'Приоритет проезда', en: 'Right of way' },
    summary: { ru: 'Кто проезжает первым: перекрёстки, кольцо, сужения, спецмашины, пешеходы, переезды и тоннели.',
               en: 'Who goes first: junctions, roundabouts, narrow sections, emergency vehicles, pedestrians, level crossings and tunnels.' },
    hero: { es: 'Normas de <b>preferencia</b>',
            sub: { ru: 'Кто проезжает первым и как правильно уступить', en: 'Who goes first and how to give way properly' } },
    tabs: [
      {
        id: 'junctions', label: { ru: 'Перекрёстки', en: 'Junctions' },
        blocks: [
          { type: 'text', body: {
            ru: ['<b>Как уступать</b> (ceder el paso): заранее и плавно снижать скорость, чтобы другой водитель видел, что вы его пропускаете, и не начинать движение, пока он может быть вынужден резко тормозить или объезжать вас (RGC, ст. 58).'],
            en: ['<b>How to give way</b> (ceder el paso): slow down early and gradually so the other driver sees you are letting them go, and do not move off while they might have to brake or swerve because of you (RGC art. 58).'] } },
          { type: 'rules', heading: { ru: 'Перекрёсток со знаками', en: 'Junction with signs' }, items: [
            { color: 'blue', title: { ru: 'Знаки решают всё', en: 'Signs decide' }, es: 'intersección señalizada',
              body: { ru: 'Сначала регулировщик, затем светофор, затем знаки. С R-1 или R-2 уступают всем на главной дороге, <b>с какой бы стороны они ни ехали</b>.',
                      en: 'Officer first, then lights, then signs. With R-1 or R-2 you give way to everyone on the main road, <b>whichever side they come from</b>.' } },
            { color: 'blue', title: { ru: 'Где остановиться', en: 'Where to stop' }, es: 'línea de detención',
              body: { ru: 'У стоп-линии или линии «уступи». Если её нет — там, откуда лучше всего видно перекрёсток, не мешая движению.',
                      en: 'At the stop or give-way line. If there is none, where you can best see the junction without blocking traffic.' } }
          ] },
          { type: 'signs', heading: { ru: 'Знаки приоритета', en: 'Priority signs' }, items: [
            { code: 'R-1', note: { ru: 'уступи дорогу', en: 'give way' } },
            { code: 'R-2', note: { ru: 'остановись и уступи', en: 'stop and give way' } },
            { code: 'R-3', note: { ru: 'вы на главной', en: 'you are on the main road' } },
            { code: 'R-4', note: { ru: 'главная заканчивается', en: 'main road ends' } },
            { code: 'P-1', note: { ru: 'вы на главной: побочные уступают', en: 'you have priority over side roads' } },
            { code: 'P-2', note: { ru: 'действует «помеха справа»', en: 'priority to the right applies' } }
          ] },
          { type: 'figure', src: 'img/dgt/preferencia-cruce.svg',
            alt: { ru: 'Перекрёсток без знаков: машины A снизу, B справа, C сверху',
                   en: 'Junction without signs: car A from the bottom, B from the right, C from the top' },
            caption: { ru: 'Без знаков уступают тому, кто <b>справа</b>. У C справа никого нет — он первый, затем B, последним A.',
                       en: 'Without signs, give way to whoever is on your <b>right</b>. C has no one on its right — it goes first, then B, then A.' } },
          { type: 'rules', heading: { ru: 'Перекрёсток без знаков', en: 'Junction without signs' }, items: [
            { color: 'teal', title: { ru: 'Правило правой руки', en: 'Priority to the right' }, es: 'ceder el paso a la derecha',
              body: { ru: 'Уступайте тем, кто приближается <b>справа</b> — даже если они едут по узкой или плохой дороге (RGC, ст. 57).',
                      en: 'Give way to those approaching from the <b>right</b> — even if they come along a narrow or poor road (RGC art. 57).' } },
            { color: 'amber', title: { ru: 'Исключения', en: 'Exceptions' }, es: 'pavimentada · raíles · glorieta · autopista',
              body: { ru: 'Приоритет, с какой бы стороны ни ехали: дорога с <b>покрытием</b> перед грунтовой; <b>рельсовый</b> транспорт (трамвай); те, кто <b>уже на кольце</b>; те, кто <b>уже на автомагистрали</b> (autopista/autovía).',
                      en: 'Priority whatever the side: a <b>paved</b> road over an unpaved one; <b>rail</b> vehicles (trams); those <b>already on the roundabout</b>; those <b>already on the motorway</b> (autopista/autovía).' } }
          ] },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Не перекрывайте перекрёсток.</b> Даже с приоритетом или на зелёный нельзя въезжать на перекрёсток, пешеходный или велопереход, если из-за пробки вы там застрянете. Если всё же застряли на перекрёстке со светофором — выезжайте, не дожидаясь своего сигнала, не мешая тем, у кого зелёный (RGC, ст. 59).'],
            en: ['<b>Do not block the junction.</b> Even with priority or a green light, do not enter a junction, pedestrian or cycle crossing if traffic will leave you stuck there. If you do get stuck in a junction with lights, clear it without waiting for your signal, without hindering those who have green (RGC art. 59).'] } }
        ]
      },
      {
        id: 'roundabout', label: { ru: 'Кольцо', en: 'Roundabouts' },
        blocks: [
          { type: 'figure', src: 'img/dgt/preferencia-glorieta.svg',
            alt: { ru: 'Кольцевая развязка: машина A ждёт у въезда, машина B уже едет по кольцу слева от неё',
                   en: 'Roundabout: car A waits at the entry, car B is already on the ring, coming from its left' },
            caption: { ru: 'Движение по кольцу — против часовой стрелки, центр остаётся слева. B уже на кольце, A уступает.',
                       en: 'Traffic goes anticlockwise, keeping the centre on the left. B is already on the ring, so A gives way.' } },
          { type: 'rules', heading: { ru: 'Правила кольца', en: 'Roundabout rules' }, items: [
            { color: 'coral', title: { ru: 'Въезд', en: 'Entering' }, es: 'ceder el paso al entrar',
              body: { ru: 'Кто уже <b>на кольце</b>, имеет приоритет над въезжающими — даже без знаков (RGC, ст. 57.1.c). Обычно на въезде стоит R-1.',
                      en: 'Vehicles already <b>on the ring</b> have priority over those entering — even without signs (RGC art. 57.1.c). An R-1 sign usually stands at the entry.' } },
            { color: 'teal', title: { ru: 'Движение', en: 'Going round' }, es: 'dejar el centro a la izquierda',
              body: { ru: 'Объезжают центр, оставляя его <b>слева</b> (RGC, ст. 43.2). На кольце обгон разрешён.',
                      en: 'Go round keeping the centre on your <b>left</b> (RGC art. 43.2). Overtaking is allowed on a roundabout.' } },
            { color: 'teal', title: { ru: 'Полосы', en: 'Lanes' }, es: 'carril exterior para salir',
              body: { ru: 'Рекомендация DGT: на ближний съезд — по внешней (правой) полосе, на дальние можно по внутренней. Заранее перестройтесь во внешнюю полосу, <b>уступая</b> тем, кто по ней едет (RGC, ст. 74.2).',
                      en: 'DGT advice: for an early exit use the outer (right) lane; for later exits the inner lane is fine. Move to the outer lane in good time, <b>giving way</b> to those already in it (RGC art. 74.2).' } },
            { color: 'purple', title: { ru: 'Выезд', en: 'Leaving' }, es: 'intermitente derecho',
              body: { ru: 'Включите правый поворотник перед своим съездом и выезжайте из внешней полосы. Велосипедисты группой: если первый уже въехал на кольцо, пропустите всю группу.',
                      en: 'Signal right before your exit and leave from the outer lane. Cyclists in a group: once the first has entered the roundabout, let the whole group through.' } }
          ] },
          { type: 'signs', heading: { ru: 'Знаки кольца', en: 'Roundabout signs' }, items: [
            { code: 'P-4', note: { ru: 'впереди кольцо', en: 'roundabout ahead' } },
            { code: 'R-402', note: { ru: 'обязательное направление по кольцу', en: 'compulsory direction round it' } },
            { code: 'R-1', note: { ru: 'на въезде: уступи', en: 'at the entry: give way' } }
          ] },
          { type: 'tip', title: { ru: 'Коротко', en: 'In short' }, body: {
            ru: ['На кольце главный тот, кто <b>внутри</b>. Внутри — правило перестроения: кто меняет полосу, тот уступает.'],
            en: ['On a roundabout, whoever is <b>inside</b> has priority. Inside, the lane-change rule applies: whoever changes lane gives way.'] } }
        ]
      },
      {
        id: 'narrow', label: { ru: 'Сужения', en: 'Narrowings' },
        blocks: [
          { type: 'signs', heading: { ru: 'Сужение со знаками', en: 'Narrow section with signs' }, items: [
            { code: 'R-5', note: { ru: 'приоритет у встречных: не въезжайте, если помешаете им', en: 'oncoming traffic has priority: do not enter if you would hinder it' } },
            { code: 'R-6', note: { ru: 'приоритет у вас перед встречными', en: 'you have priority over oncoming traffic' } },
            { code: 'P-17', note: { ru: 'впереди сужение', en: 'road narrows ahead' } }
          ] },
          { type: 'text', color: 'blue', body: {
            ru: ['Если машины всё же встретились на узком мосту или участке, <b>сдаёт назад тот, кто въехал со стороны R-5</b> (или «Уступи дорогу») (RGC, ст. 61.2).'],
            en: ['If two vehicles still meet on a narrow bridge or section, <b>the one that entered from the R-5 end</b> (or the Give way end) reverses (RGC art. 61.2).'] } },
          { type: 'figure', src: 'img/dgt/preferencia-estrecho.svg',
            alt: { ru: 'Грузовик и легковой автомобиль встретились лоб в лоб на узком участке без знаков',
                   en: 'A lorry and a car meet head-on in a narrow section without signs' },
            caption: { ru: 'Без знаков проезжает тот, кто въехал первым. Непонятно, кто первый? Приоритет у грузовика — сдаёт назад легковой.',
                       en: 'Without signs, whoever entered first goes. Unclear who was first? The lorry has priority — the car reverses.' } },
          { type: 'table', heading: { ru: 'Кто сдаёт назад (по порядку приоритета)', en: 'Who reverses (priority order)' },
            head: ['', { ru: 'Транспорт', en: 'Vehicle' }],
            rows: [
              ['1', { ru: 'спецтехника сверх габаритов', en: 'oversize special vehicles' }],
              ['2', { ru: 'автопоезда', en: 'vehicle combinations' }],
              ['3', { ru: 'гужевые повозки', en: 'animal-drawn vehicles' }],
              ['4', { ru: 'прицеп ≤ 750 кг, автодом', en: 'car+trailer ≤750 kg, camper' }],
              ['5', { ru: 'автобусы', en: 'buses and coaches' }],
              ['6', { ru: 'грузовики, фургоны', en: 'lorries and vans' }],
              ['7', { ru: 'легковые автомобили', en: 'cars' }],
              ['8', { ru: 'квадрициклы, малая спецтехника', en: 'quadricycles, small special' }],
              ['9', { ru: 'трёхколёсные, мото с коляской', en: 'three-wheelers, sidecars' }],
              ['10', { ru: 'мотоциклы, мопеды, велосипеды', en: 'motorcycles, mopeds, bicycles' }]
            ] },
          { type: 'rules', heading: { ru: 'Без знаков', en: 'Without signs' }, items: [
            { color: 'teal', title: { ru: 'Кто первым въехал', en: 'First in goes first' }, es: 'el que entró primero',
              body: { ru: 'Приоритет у того, кто первым въехал на узкий участок. Если неясно — у того, кому труднее маневрировать (по таблице: чем выше, тем главнее) (RGC, ст. 60 и 62).',
                      en: 'Priority goes to whoever entered the narrow section first. If unclear, to the vehicle that is harder to manoeuvre (higher in the table = more priority) (RGC arts 60 and 62).' } },
            { color: 'teal', title: { ru: 'Одинаковые машины', en: 'Same type' }, es: 'más marcha atrás · más grande',
              body: { ru: 'Проезжает тот, кому пришлось бы сдавать назад <b>дольше</b>; при равенстве — более широкий, длинный или тяжёлый.',
                      en: 'Priority to the one that would have to reverse <b>further</b>; if equal, the wider, longer or heavier one.' } },
            { color: 'amber', title: { ru: 'Крутой уклон', en: 'Steep slope' }, es: 'pendiente ≥ 7 %',
              body: { ru: 'На узком участке с уклоном от 7 % приоритет у того, кто едет <b>вверх</b>, если только спускающийся не ближе к карману для разъезда (RGC, ст. 63).',
                      en: 'On a narrow section with a gradient of 7 % or more, the vehicle going <b>uphill</b> has priority, unless the one going down is closer to a passing place (RGC art. 63).' } }
          ] },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Дорожные работы:</b> если перед вами в очереди уже стоит машина, встаньте за ней как можно правее и проезжайте только следом. Указания персонала, регулирующего проезд, обязательны (RGC, ст. 60).'],
            en: ['<b>Roadworks:</b> if a vehicle is already waiting ahead of you, queue behind it as far right as possible and only follow it through. Instructions from the staff controlling traffic are mandatory (RGC art. 60).'] } }
        ]
      },
      {
        id: 'emergency', label: { ru: 'Спецмашины', en: 'Emergency' },
        blocks: [
          { type: 'rules', heading: { ru: 'Приоритетные машины', en: 'Priority vehicles' }, items: [
            { color: 'coral', title: { ru: 'Кто это', en: 'Who they are' }, es: 'vehículos prioritarios',
              body: { ru: 'Полиция, пожарные, гражданская защита и спасатели, скорая помощь (государственная или частная) — <b>во время срочного вызова</b>, с проблесковым маяком и спецсигналом одновременно.',
                      en: 'Police, fire brigade, civil protection and rescue, ambulances (public or private) — <b>on an urgent call</b>, with flashing lights and siren on together.' } },
            { color: 'coral', title: { ru: 'Что им можно', en: 'What they may do' }, es: 'régimen especial',
              body: { ru: 'Превышать скорость и не выполнять знаки и правила, если никому не создают опасности. <b>Команды регулировщика</b> обязательны и для них. На автомагистрали могут развернуться, сдать назад, ехать навстречу по обочине, заехать на разделительную полосу.',
                      en: 'Exceed speed limits and ignore signs and rules if they endanger no one. <b>Officers’ orders</b> still bind them. On a motorway they may turn round, reverse, drive against traffic on the hard shoulder or cross the central reserve.' } },
            { color: 'blue', title: { ru: 'Что делаете вы', en: 'What you do' }, es: 'apartarse a la derecha',
              body: { ru: 'Как только услышали сирену или увидели маяк — освободите путь: обычно <b>прижмитесь вправо</b>, при необходимости остановитесь. Пешеходы уходят с проезжей части (RGC, ст. 69).',
                      en: 'As soon as you hear the siren or see the lights, make way: usually <b>move to the right</b>, stopping if needed. Pedestrians leave the carriageway (RGC art. 69).' } }
          ] },
          { type: 'text', color: 'coral', body: {
            ru: ['На срочном вызове спецмашина включает маяк и сирену <b>вместе</b>. Только маяк, <b>без сирены</b>, — когда отсутствие звука никому не создаёт опасности (RGC, ст. 68.2).'],
            en: ['On an urgent call an emergency vehicle uses lights and siren <b>together</b>. Lights only, <b>without the siren</b>, when the lack of sound puts no one at risk (RGC art. 68.2).'] } },
          { type: 'rules', heading: { ru: 'Обычная машина в экстренной ситуации', en: 'An ordinary car in an emergency' }, items: [
            { color: 'purple', title: { ru: 'Как предупредить', en: 'How to warn others' }, es: 'claxon intermitente · luz de emergencia · pañuelo',
              body: { ru: 'Если везёте тяжелобольного или роженицу и другого выхода нет: прерывистый звуковой сигнал, аварийка, платок из окна. Правила движения всё равно соблюдать, особенно на перекрёстках (RGC, ст. 70).',
                      en: 'If you are taking someone seriously ill or a woman in labour and there is no other option: intermittent horn, hazard lights, a handkerchief out of the window. You must still obey traffic rules, especially at junctions (RGC art. 70).' } },
            { color: 'purple', title: { ru: 'Другие водители', en: 'Other drivers' }, es: 'facilitar el paso',
              body: { ru: 'Обязаны пропустить такую машину, как приоритетную. Полиция может потом потребовать доказать срочность.',
                      en: 'Must let such a car through like a priority vehicle. The police may later ask you to justify the emergency.' } }
          ] },
          { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
            { color: 'coral', es: 'Oigo una <b>sirena</b>: me aparto a la derecha.', ru: 'Слышу сирену — прижимаюсь вправо.', en: 'I hear a siren — I pull over to the right.' },
            { color: 'coral', es: 'La <b>ambulancia</b> va en servicio urgente.', ru: 'Скорая едет на срочный вызов.', en: 'The ambulance is on an urgent call.' },
            { color: 'purple', es: 'Llevo a un herido: toco el <b>claxon</b> de forma intermitente.', ru: 'Везу раненого — подаю прерывистый сигнал.', en: 'I’m carrying an injured person — I sound the horn intermittently.' }
          ] }
        ]
      },
      {
        id: 'users', label: { ru: 'Пешеходы', en: 'Pedestrians' },
        blocks: [
          { type: 'text', body: {
            ru: ['Общее правило: на проезжей части и обочине у водителя приоритет перед пешеходами и животными. Но есть случаи, когда <b>уступает водитель</b>, при необходимости останавливаясь (RGC, ст. 64–66).'],
            en: ['General rule: on the carriageway and hard shoulder, drivers have priority over pedestrians and animals. But in some cases <b>the driver gives way</b>, stopping if necessary (RGC arts 64–66).'] } },
          { type: 'triggers', heading: { ru: 'Пешеходы впереди', en: 'Pedestrians have priority' }, items: [
            { num: '1', color: 'blue', title: { ru: 'Переходы и тротуары', en: 'Crossings and pavements' }, phrases: ['paso de peatones', 'acera', 'zona peatonal'],
              sub: { ru: 'в том числе выезд из гаража через тротуар', en: 'including driving out of a garage across the pavement' } },
            { num: '2', color: 'blue', title: { ru: 'Поворот', en: 'Turning' }, phrases: ['girar'],
              sub: { ru: 'пешеходы переходят дорогу, на которую вы поворачиваете, даже без перехода', en: 'people crossing the road you turn into, even without a crossing' } },
            { num: '3', color: 'blue', title: { ru: 'Обочина', en: 'Hard shoulder' }, phrases: ['arcén'],
              sub: { ru: 'пешеходы идут по обочине, а тротуара нет', en: 'people walking on the shoulder where there is no pavement' } },
            { num: '4', color: 'blue', title: { ru: 'Остановка транспорта', en: 'Bus stop' }, phrases: ['parada de autobús'],
              sub: { ru: 'между автобусом и тротуаром или островком', en: 'between the bus and the pavement or island' } },
            { num: '5', color: 'blue', title: { ru: 'Колонны', en: 'Groups' }, phrases: ['filas escolares', 'comitivas', 'tropas'],
              sub: { ru: 'школьники, организованные шествия, военные в строю', en: 'school groups, organised processions, troops on foot' } }
          ] },
          { type: 'triggers', heading: { ru: 'Велосипедисты впереди', en: 'Cyclists have priority' }, items: [
            { num: '1', color: 'teal', title: { ru: 'Своя полоса', en: 'Their own space' }, phrases: ['carril bici', 'paso para ciclistas', 'arcén señalizado'] },
            { num: '2', color: 'teal', title: { ru: 'Поворот', en: 'Turning' }, phrases: ['girar con un ciclista cerca'],
              sub: { ru: 'вы поворачиваете, а рядом велосипедист', en: 'you turn and a cyclist is nearby' } },
            { num: '3', color: 'teal', title: { ru: 'Группа', en: 'A group' }, phrases: ['en grupo'],
              sub: { ru: 'первый уже начал пересекать перекрёсток или въехал на кольцо — пропустите всех', en: 'the first has started across the junction or entered the roundabout — let them all through' } }
          ] },
          { type: 'triggers', heading: { ru: 'Животные впереди', en: 'Animals have priority' }, items: [
            { num: '1', color: 'amber', title: { ru: 'Скотопрогон', en: 'Livestock route' }, phrases: ['cañada'],
              sub: { ru: 'знак P-23 с табличкой «cañada»', en: 'P-23 sign with a “cañada” plate' } },
            { num: '2', color: 'amber', title: { ru: 'Поворот', en: 'Turning' }, phrases: ['girar'],
              sub: { ru: 'животные переходят дорогу, на которую вы поворачиваете', en: 'animals crossing the road you turn into' } },
            { num: '3', color: 'amber', title: { ru: 'Обочина', en: 'Hard shoulder' }, phrases: ['arcén'],
              sub: { ru: 'животные идут по обочине, а скотопрогона нет', en: 'animals on the shoulder where there is no cañada' } }
          ] },
          { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
            { color: 'blue', es: 'Cedo el paso al <b>peatón</b> que cruza la calle.', ru: 'Уступаю пешеходу, который переходит улицу.', en: 'I give way to the pedestrian crossing the street.' },
            { color: 'teal', es: 'Espero a que pase todo el <b>grupo de ciclistas</b>.', ru: 'Жду, пока проедет вся группа велосипедистов.', en: 'I wait for the whole group of cyclists to pass.' },
            { color: 'amber', es: 'Hay ganado en la <b>cañada</b>: me detengo.', ru: 'На скотопрогоне скот — останавливаюсь.', en: 'There is livestock on the cattle route — I stop.' },
            { color: 'blue', es: 'Al girar, <b>cedo el paso</b> a los peatones.', ru: 'При повороте уступаю пешеходам.', en: 'When turning, I give way to pedestrians.' }
          ] }
        ]
      },
      {
        id: 'crossings', label: { ru: 'Переезды', en: 'Crossings' },
        blocks: [
          { type: 'rules', heading: { ru: 'Железнодорожный переезд и разводной мост', en: 'Level crossings and lifting bridges' }, items: [
            { color: 'coral', title: { ru: 'Не въезжать', en: 'Do not enter' }, es: 'barreras bajadas o en movimiento',
              body: { ru: 'Если шлагбаум закрыт или движется, либо горит запрещающий светофор. Ждите друг за другом в своей полосе. Без шлагбаума и светофора — сначала убедитесь, что поезд не идёт (RGC, ст. 96).',
                      en: 'If the barrier is down or moving, or the light shows stop. Wait one behind another in your lane. With no barrier or lights, first make sure no train is coming (RGC art. 96).' } },
            { color: 'coral', title: { ru: 'Застряли на переезде', en: 'Stuck on the crossing' }, es: 'desalojar el vehículo',
              body: { ru: 'Быстро высадить пассажиров и попытаться освободить переезд. Не получилось — сделать всё, чтобы вовремя предупредить машинистов и других водителей (RGC, ст. 97).',
                      en: 'Get the passengers out quickly and try to clear the crossing. If you cannot, do everything possible to warn train drivers and other drivers in time (RGC art. 97).' } }
          ] },
          { type: 'rules', heading: { ru: 'Тоннель', en: 'Tunnel' }, items: [
            { color: 'teal', title: { ru: 'Дистанция', en: 'Distance' }, es: '100 m o 4 s · 150 m o 6 s',
              body: { ru: 'Не менее <b>100 м или 4 секунд</b>; для машин тяжелее 3500 кг — <b>150 м или 6 секунд</b>. Не въезжайте, если светофор у въезда запрещает (RGC, ст. 95–96).',
                      en: 'At least <b>100 m or 4 seconds</b>; for vehicles over 3,500 kg, <b>150 m or 6 seconds</b>. Do not enter if the light at the entrance says stop (RGC arts 95–96).' } },
            { color: 'teal', title: { ru: 'Пробка в тоннеле', en: 'Queue in a tunnel' }, es: 'motor apagado · luces de posición',
              body: { ru: 'Из машины не выходить; кратко включить аварийку, оставить габариты, заглушить двигатель, держаться подальше от машины впереди.',
                      en: 'Stay in the car; briefly use the hazard lights, keep the sidelights on, switch off the engine, leave a good gap to the car ahead.' } },
            { color: 'amber', title: { ru: 'Поломка', en: 'Breakdown' }, es: 'zona de emergencia · poste SOS',
              body: { ru: 'Заглушить двигатель, аварийка и габариты; доехать до аварийной зоны или встать у правого края; включить V-16; вызвать помощь с поста SOS; всем выйти к убежищу или выходу.',
                      en: 'Engine off, hazard lights and sidelights on; reach an emergency bay or stop at the right edge; switch on the V-16; call for help from the SOS post; everyone goes to the nearest shelter or exit.' } },
            { color: 'amber', title: { ru: 'Пожар', en: 'Fire' }, es: 'llave puesta · puertas abiertas',
              body: { ru: 'Прижаться вправо, заглушить двигатель, <b>ключ оставить</b> в замке, двери не запирать; уходить к убежищу или выходу в сторону, <b>противоположную огню</b> (RGC, ст. 97.3).',
                      en: 'Pull over to the right, switch off the engine, <b>leave the key</b> in, do not lock the doors; head for a shelter or exit <b>away from the fire</b> (RGC art. 97.3).' } }
          ] },
          { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
            { color: 'coral', es: 'Las <b>barreras</b> están bajando: me detengo.', ru: 'Шлагбаум опускается — останавливаюсь.', en: 'The barriers are coming down — I stop.' },
            { color: 'teal', es: 'En el <b>túnel</b> guardo cien metros de distancia.', ru: 'В тоннеле держу дистанцию сто метров.', en: 'In the tunnel I keep a hundred metres’ distance.' },
            { color: 'amber', es: 'Pido ayuda desde el <b>poste SOS</b>.', ru: 'Вызываю помощь с поста SOS.', en: 'I call for help from the SOS post.' }
          ] }
        ]
      }
    ],
    quizCount: 20,
    quiz: [
      { es: 'Cruce sin señales. ¿Qué vehículo pasa primero?',
        prompt: { ru: 'Перекрёсток без знаков. Кто проезжает первым?', en: 'Junction without signs. Which vehicle goes first?' },
        options: [
          { es: 'El vehículo A.', ru: 'Машина A.', en: 'Vehicle A.' },
          { es: 'El vehículo B.', ru: 'Машина B.', en: 'Vehicle B.' },
          { es: 'El vehículo C.', ru: 'Машина C.', en: 'Vehicle C.' }
        ],
        answer: 2,
        explain: { ru: 'Без знаков уступают тому, кто справа. Справа от C никого нет, поэтому C первый (RGC, ст. 57).', en: 'Without signs you give way to the right. No one is on C’s right, so C goes first (RGC art. 57).' },
        img: 'img/dgt/preferencia-cruce.svg' },
      { es: 'En el mismo cruce sin señales, ¿qué vehículo pasa en último lugar?',
        prompt: { ru: 'На том же перекрёстке без знаков кто проезжает последним?', en: 'At the same unsigned junction, which vehicle goes last?' },
        options: [
          { es: 'El vehículo A.', ru: 'Машина A.', en: 'Vehicle A.' },
          { es: 'El vehículo C.', ru: 'Машина C.', en: 'Vehicle C.' },
          { es: 'El vehículo B.', ru: 'Машина B.', en: 'Vehicle B.' }
        ],
        answer: 0,
        explain: { ru: 'A должен уступить B (справа от A), а B — C (справа от B). Порядок: C, B, A (RGC, ст. 57).', en: 'A must give way to B (on A’s right) and B to C (on B’s right). Order: C, B, A (RGC art. 57).' },
        img: 'img/dgt/preferencia-cruce.svg' },
      { es: 'En un cruce sin señales, un vehículo se acerca por su derecha desde un camino estrecho y en mal estado, pero asfaltado. ¿Quién tiene preferencia?',
        prompt: { ru: 'Перекрёсток без знаков. Справа подъезжает машина по узкой, плохой, но асфальтированной дороге. У кого приоритет?', en: 'Unsigned junction. A vehicle approaches from your right on a narrow, poor but paved road. Who has priority?' },
        options: [
          { es: 'Usted, porque su vía es más ancha.', ru: 'У вас: ваша дорога шире.', en: 'You, because your road is wider.' },
          { es: 'El vehículo que viene por la derecha.', ru: 'У машины справа.', en: 'The vehicle from the right.' },
          { es: 'El que llegue primero.', ru: 'У того, кто подъехал первым.', en: 'Whoever arrives first.' }
        ],
        answer: 1,
        explain: { ru: 'Ширина и состояние дороги не важны, если у неё есть покрытие: действует «помеха справа» (RGC, ст. 57; DGT, тема 12).', en: 'Width and condition do not matter if the road is paved: priority to the right applies (RGC art. 57; DGT topic 12).' } },
      { es: 'Usted circula por una vía pavimentada y por su derecha llega un vehículo desde un camino de tierra. No hay señales. ¿Quién pasa primero?',
        prompt: { ru: 'Вы едете по асфальтированной дороге, справа выезжает машина с грунтовки. Знаков нет. Кто первый?', en: 'You are on a paved road and a vehicle comes from a dirt track on your right. No signs. Who goes first?' },
        options: [
          { es: 'Usted.', ru: 'Вы.', en: 'You.' },
          { es: 'El vehículo del camino de tierra.', ru: 'Машина с грунтовки.', en: 'The vehicle from the dirt track.' },
          { es: 'El vehículo más grande.', ru: 'Тот, кто больше.', en: 'The larger vehicle.' }
        ],
        answer: 0,
        explain: { ru: 'Исключение из «помехи справа»: дорога с покрытием главнее грунтовой (RGC, ст. 57.1.a).', en: 'An exception to the right-hand rule: a paved road beats an unpaved one (RGC art. 57.1.a).' } },
      { es: 'En un cruce sin señalizar, un tranvía se aproxima por su izquierda. ¿Quién tiene prioridad?',
        prompt: { ru: 'На нерегулируемом перекрёстке слева приближается трамвай. У кого приоритет?', en: 'At an unsigned junction a tram approaches from your left. Who has priority?' },
        options: [
          { es: 'Usted, porque viene por la derecha del tranvía.', ru: 'У вас: вы справа от трамвая.', en: 'You, since you are on the tram’s right.' },
          { es: 'Quien llegue antes al cruce.', ru: 'У того, кто раньше подъедет.', en: 'Whoever reaches the junction first.' },
          { es: 'El tranvía.', ru: 'У трамвая.', en: 'The tram.' }
        ],
        answer: 2,
        explain: { ru: 'Рельсовый транспорт имеет приоритет перед остальными, с какой бы стороны он ни ехал (RGC, ст. 57.1.b).', en: 'Rail vehicles have priority over other users whichever side they come from (RGC art. 57.1.b).' } },
      { es: 'Quiere incorporarse a una autovía desde un acceso sin señales. ¿Quién tiene preferencia?',
        prompt: { ru: 'Вы въезжаете на autovía с примыкания без знаков. У кого приоритет?', en: 'You are joining an autovía from a slip road without signs. Who has priority?' },
        options: [
          { es: 'Los que ya circulan por la autovía.', ru: 'У тех, кто уже едет по autovía.', en: 'Those already on the autovía.' },
          { es: 'Usted, si viene por la derecha.', ru: 'У вас, если вы справа.', en: 'You, if you come from the right.' },
          { es: 'El que circule más deprisa.', ru: 'У того, кто едет быстрее.', en: 'Whoever is faster.' }
        ],
        answer: 0,
        explain: { ru: 'Кто уже на автомагистрали (autopista или autovía), имеет приоритет перед въезжающими (RGC, ст. 57.1.d).', en: 'Vehicles already on an autopista or autovía have priority over those joining (RGC art. 57.1.d).' } },
      { es: '¿Quién tiene preferencia en la glorieta de la imagen?',
        prompt: { ru: 'У кого приоритет на кольце на рисунке?', en: 'Who has priority at the roundabout in the picture?' },
        options: [
          { es: 'El vehículo A, porque B viene por su izquierda.', ru: 'У A, ведь B слева от него.', en: 'A, because B is on its left.' },
          { es: 'El vehículo B, porque ya circula dentro de la glorieta.', ru: 'У B: он уже едет по кольцу.', en: 'B, because it is already on the roundabout.' },
          { es: 'El que tenga el intermitente puesto.', ru: 'У того, кто включил поворотник.', en: 'Whoever is signalling.' }
        ],
        answer: 1,
        explain: { ru: 'На кольце приоритет у тех, кто уже внутри, перед въезжающими (RGC, ст. 57.1.c).', en: 'On a roundabout, those already on the ring have priority over those entering (RGC art. 57.1.c).' },
        img: 'img/dgt/preferencia-glorieta.svg' },
      { es: 'En una glorieta, ¿por qué lado debe dejar el centro?',
        prompt: { ru: 'С какой стороны нужно оставлять центр кольца?', en: 'On which side must you keep the centre of a roundabout?' },
        options: [
          { es: 'Por la derecha.', ru: 'Справа.', en: 'On the right.' },
          { es: 'Por cualquier lado si no hay tráfico.', ru: 'С любой стороны, если нет машин.', en: 'Either side if there is no traffic.' },
          { es: 'Por la izquierda.', ru: 'Слева.', en: 'On the left.' }
        ],
        answer: 2,
        explain: { ru: 'На площадях и кольцах едут, оставляя центр слева, то есть против часовой стрелки (RGC, ст. 43.2).', en: 'At squares and roundabouts you keep the centre on your left, i.e. anticlockwise (RGC art. 43.2).' } },
      { es: 'Circula por el carril interior de una glorieta y quiere salir. ¿Qué debe hacer?',
        prompt: { ru: 'Вы едете по внутренней полосе кольца и хотите выехать. Что делать?', en: 'You are in the inner lane of a roundabout and want to leave. What should you do?' },
        options: [
          { es: 'Salir directamente; el que sale tiene prioridad.', ru: 'Сразу выезжать: у выезжающего приоритет.', en: 'Exit directly; whoever exits has priority.' },
          { es: 'Pasar con antelación al carril exterior, cediendo el paso a quien circula por él.', ru: 'Заранее перестроиться во внешнюю полосу, уступив тем, кто по ней едет.', en: 'Move to the outer lane in good time, giving way to traffic in it.' },
          { es: 'Detenerse en el carril interior hasta que el exterior quede libre.', ru: 'Остановиться на внутренней полосе, пока внешняя не освободится.', en: 'Stop in the inner lane until the outer one is clear.' }
        ],
        answer: 1,
        explain: { ru: 'Смена полосы — это боковое смещение: уступает тот, кто перестраивается (RGC, ст. 74.2). Выезжать удобнее и безопаснее из внешней полосы.', en: 'Changing lane is a lateral move: the driver changing lane gives way (RGC art. 74.2). Leaving from the outer lane is the safe way.' } },
      { es: '¿Está permitido adelantar dentro de una glorieta?',
        prompt: { ru: 'Можно ли обгонять на кольце?', en: 'Is overtaking allowed on a roundabout?' },
        options: [
          { es: 'Sí.', ru: 'Да.', en: 'Yes.' },
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' },
          { es: 'Solo a bicicletas.', ru: 'Только велосипеды.', en: 'Only bicycles.' }
        ],
        answer: 0,
        explain: { ru: 'Обгон на перекрёстках запрещён, но кольцо — исключение (RGC, ст. 87.1.c).', en: 'Overtaking at junctions is forbidden, but roundabouts are an exception (RGC art. 87.1.c).' } },
      { es: 'Un grupo de ciclistas circula por una glorieta y el primero ya ha entrado. ¿Qué hace usted?',
        prompt: { ru: 'Группа велосипедистов: первый уже въехал на кольцо. Что вы делаете?', en: 'A group of cyclists: the first has already entered the roundabout. What do you do?' },
        options: [
          { es: 'Entro detrás del primer ciclista.', ru: 'Въезжаю сразу за первым велосипедистом.', en: 'I enter right behind the first cyclist.' },
          { es: 'Toco el claxon para que se separen.', ru: 'Сигналю, чтобы они разъехались.', en: 'I sound the horn so they split up.' },
          { es: 'Cedo el paso a todo el grupo.', ru: 'Пропускаю всю группу.', en: 'I give way to the whole group.' }
        ],
        answer: 2,
        explain: { ru: 'Если первый из группы уже на кольце или на перекрёстке, приоритет у всей группы (RGC, ст. 64.2.c).', en: 'Once the first of the group is on the roundabout or junction, the whole group has priority (RGC art. 64.2.c).' } },
      { es: 'Esta señal le indica que…',
        prompt: { ru: 'Этот знак означает, что…', en: 'This sign tells you that…' },
        options: [
          { es: 'debe ceder el paso a los vehículos de la vía a la que se acerca.', ru: 'нужно уступить машинам на дороге, к которой вы подъезжаете.', en: 'you must give way to vehicles on the road you are approaching.' },
          { es: 'tiene prioridad en el próximo cruce.', ru: 'у вас приоритет на следующем перекрёстке.', en: 'you have priority at the next junction.' },
          { es: 'debe detenerse siempre.', ru: 'нужно всегда останавливаться.', en: 'you must always stop.' }
        ],
        answer: 0,
        explain: { ru: 'R-1 «Уступи дорогу»: уступить всем на главной, с любой стороны; останавливаться только при необходимости (RGC, ст. 56.5).', en: 'R-1 Give way: yield to everyone on the main road, from either side; stop only if necessary (RGC art. 56.5).' },
        sign: 'R-1' },
      { es: 'Ante esta señal, si no viene nadie por la vía preferente, ¿debe detenerse?',
        prompt: { ru: 'Перед этим знаком нужно ли останавливаться, если по главной дороге никто не едет?', en: 'At this sign, must you stop if nobody is coming on the main road?' },
        options: [
          { es: 'No, solo reducir la velocidad.', ru: 'Нет, только снизить скорость.', en: 'No, just slow down.' },
          { es: 'Sí, siempre, ante la línea de detención o antes de la intersección.', ru: 'Да, всегда: у стоп-линии или перед перекрёстком.', en: 'Yes, always: at the stop line or before the junction.' },
          { es: 'Solo de noche.', ru: 'Только ночью.', en: 'Only at night.' }
        ],
        answer: 1,
        explain: { ru: 'R-2 STOP требует полной остановки всегда, даже если дорога пуста, и затем уступить (RGC, ст. 56.5).', en: 'R-2 STOP requires a full stop every time, even on an empty road, and then giving way (RGC art. 56.5).' },
        sign: 'R-2' },
      { es: '¿Qué indica esta señal?',
        prompt: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Fin de la prioridad.', ru: 'Конец главной дороги.', en: 'End of priority.' },
          { es: 'Ceda el paso más adelante.', ru: 'Дальше уступить дорогу.', en: 'Give way ahead.' },
          { es: 'Que circula por una calzada con prioridad en las intersecciones.', ru: 'Вы едете по главной дороге с приоритетом на перекрёстках.', en: 'You are on a road with priority at junctions.' }
        ],
        answer: 2,
        explain: { ru: 'R-3 «Главная дорога»: на перекрёстках с ней вам уступают (RGC, ст. 56.4).', en: 'R-3 “Priority road”: at its junctions others give way to you (RGC art. 56.4).' },
        sign: 'R-3' },
      { es: 'Tras ver esta señal, en la próxima intersección sin otras señales…',
        prompt: { ru: 'После этого знака на ближайшем перекрёстке без других знаков…', en: 'After this sign, at the next junction with no other signs…' },
        options: [
          { es: 'sigue teniendo prioridad.', ru: 'у вас всё ещё приоритет.', en: 'you still have priority.' },
          { es: 'se aplican las normas generales: preferencia de la derecha.', ru: 'действуют общие правила: «помеха справа».', en: 'the general rules apply: priority to the right.' },
          { es: 'debe detenerse siempre.', ru: 'нужно всегда останавливаться.', en: 'you must always stop.' }
        ],
        answer: 1,
        explain: { ru: 'R-4 «Конец главной дороги»: дальше ваша дорога больше не главная, работают общие правила (RGC, ст. 57).', en: 'R-4 “End of priority”: your road loses priority and the general rules apply (RGC art. 57).' },
        sign: 'R-4' },
      { es: 'Esta señal advierte de una intersección en la que…',
        prompt: { ru: 'Этот знак предупреждает о перекрёстке, где…', en: 'This sign warns of a junction where…' },
        options: [
          { es: 'usted tiene prioridad sobre los que se incorporan.', ru: 'у вас приоритет над выезжающими.', en: 'you have priority over joining traffic.' },
          { es: 'rige la prioridad de la derecha.', ru: 'действует «помеха справа».', en: 'priority to the right applies.' },
          { es: 'hay un semáforo.', ru: 'стоит светофор.', en: 'there is a traffic light.' }
        ],
        answer: 1,
        explain: { ru: 'P-2 (косой крест) — перекрёсток, где действует общее правило: уступить тем, кто справа (RGC, ст. 57).', en: 'P-2 (diagonal cross) — a junction where the general rule applies: give way to the right (RGC art. 57).' },
        sign: 'P-2' },
      { es: 'Esta señal de peligro indica…',
        prompt: { ru: 'Этот знак опасности означает…', en: 'This warning sign means…' },
        options: [
          { es: 'una intersección en la que usted tiene prioridad.', ru: 'перекрёсток, на котором у вас приоритет.', en: 'a junction where you have priority.' },
          { es: 'una intersección en la que debe ceder el paso.', ru: 'перекрёсток, на котором вы уступаете.', en: 'a junction where you must give way.' },
          { es: 'el fin de una autopista.', ru: 'конец автомагистрали.', en: 'the end of a motorway.' }
        ],
        answer: 0,
        explain: { ru: 'P-1 «Перекрёсток с приоритетом»: те, кто выезжает с другой дороги, обязаны вам уступить (RGC, ст. 56.4).', en: 'P-1 “Junction with priority”: drivers coming from the other road must give way to you (RGC art. 56.4).' },
        sign: 'P-1' },
      { es: '¿Qué anuncia esta señal?',
        prompt: { ru: 'О чём предупреждает этот знак?', en: 'What does this sign warn of?' },
        options: [
          { es: 'Una glorieta: los que estén dentro tienen preferencia.', ru: 'Кольцо: приоритет у тех, кто внутри.', en: 'A roundabout: those inside have priority.' },
          { es: 'Obligación de dar la vuelta.', ru: 'Обязательный разворот.', en: 'Compulsory U-turn.' },
          { es: 'Un cruce con prioridad de la derecha.', ru: 'Перекрёсток с «помехой справа».', en: 'A junction with priority to the right.' }
        ],
        answer: 0,
        explain: { ru: 'P-4 предупреждает о кольце; на нём приоритет у тех, кто уже едет по кругу (RGC, ст. 57.1.c).', en: 'P-4 warns of a roundabout, where those already circulating have priority (RGC art. 57.1.c).' },
        sign: 'P-4' },
      { es: 'Ante un paso estrecho con esta señal, ¿qué debe hacer?',
        prompt: { ru: 'Перед узким участком с этим знаком что вы должны делать?', en: 'At a narrow section with this sign, what must you do?' },
        options: [
          { es: 'Pasar primero, tiene prioridad.', ru: 'Проезжать первым: у вас приоритет.', en: 'Go first; you have priority.' },
          { es: 'Detenerse siempre, aunque no venga nadie.', ru: 'Останавливаться всегда, даже если никого нет.', en: 'Always stop, even if no one is coming.' },
          { es: 'No entrar mientras obligue a detenerse a los que vienen de frente.', ru: 'Не въезжать, пока этим вы заставите остановиться встречных.', en: 'Not enter while it would force oncoming vehicles to stop.' }
        ],
        answer: 2,
        explain: { ru: 'R-5 «Приоритет встречного движения»: въезжать можно, только если не помешаете встречным (RGC, ст. 61).', en: 'R-5 “Priority to oncoming traffic”: enter only if you will not hinder vehicles coming the other way (RGC art. 61).' },
        sign: 'R-5' },
      { es: 'Esta señal, colocada antes de un puente estrecho, indica que usted…',
        prompt: { ru: 'Этот знак перед узким мостом означает, что вы…', en: 'This sign before a narrow bridge means that you…' },
        options: [
          { es: 'debe ceder el paso a los que vienen de frente.', ru: 'должны уступить встречным.', en: 'must give way to oncoming traffic.' },
          { es: 'tiene prioridad respecto a los que vienen de frente.', ru: 'имеете приоритет перед встречными.', en: 'have priority over oncoming traffic.' },
          { es: 'no puede circular por el puente.', ru: 'не можете ехать по мосту.', en: 'may not use the bridge.' }
        ],
        answer: 1,
        explain: { ru: 'R-6 (синий квадрат, белая стрелка больше красной) — приоритет у вас; на другом конце стоит R-5 (RGC, ст. 61).', en: 'R-6 (blue square, white arrow larger than red) — you have priority; the other end has R-5 (RGC art. 61).' },
        sign: 'R-6' },
      { es: 'Dos vehículos se encuentran en un puente estrecho señalizado y no pueden cruzarse. ¿Cuál debe retroceder?',
        prompt: { ru: 'Две машины встретились на узком мосту со знаками и не могут разъехаться. Кто сдаёт назад?', en: 'Two vehicles meet on a signed narrow bridge and cannot pass. Which one reverses?' },
        options: [
          { es: 'El que entró por el extremo con la señal R-5 o ceda el paso.', ru: 'Тот, кто въехал с конца со знаком R-5 или «Уступи дорогу».', en: 'The one that entered from the end with R-5 or Give way.' },
          { es: 'El más pequeño.', ru: 'Меньший по размеру.', en: 'The smaller one.' },
          { es: 'El que circule cuesta abajo.', ru: 'Тот, кто едет вниз.', en: 'The one going downhill.' }
        ],
        answer: 0,
        explain: { ru: 'На участке со знаками сдаёт назад тот, кто въехал со стороны R-5 или «Уступи дорогу» (RGC, ст. 61.2).', en: 'On a signed section, the vehicle that entered from the R-5 or Give way end reverses (RGC art. 61.2).' } },
      { es: 'En un tramo estrecho sin señales, ¿quién tiene preferencia de paso?',
        prompt: { ru: 'У кого приоритет на узком участке без знаков?', en: 'On a narrow section without signs, who has priority?' },
        options: [
          { es: 'El que circule más rápido.', ru: 'У того, кто едет быстрее.', en: 'The faster vehicle.' },
          { es: 'El que venga por la derecha.', ru: 'У того, кто справа.', en: 'The one coming from the right.' },
          { es: 'El que haya entrado primero.', ru: 'У того, кто въехал первым.', en: 'The one that entered first.' }
        ],
        answer: 2,
        explain: { ru: 'Без знаков проезжает тот, кто первым въехал на узкий участок (RGC, ст. 60.1).', en: 'Without signs, whoever entered the narrow section first goes first (RGC art. 60.1).' } },
      { es: 'En el tramo estrecho de la imagen no se sabe quién entró primero. ¿Quién debe dar marcha atrás?',
        prompt: { ru: 'На узком участке на рисунке неясно, кто въехал первым. Кто должен сдать назад?', en: 'In the narrow section shown, it is unclear who entered first. Who must reverse?' },
        options: [
          { es: 'El camión.', ru: 'Грузовик.', en: 'The lorry.' },
          { es: 'El turismo.', ru: 'Легковой автомобиль.', en: 'The car.' },
          { es: 'Los dos a la vez.', ru: 'Оба одновременно.', en: 'Both at once.' }
        ],
        answer: 1,
        explain: { ru: 'При сомнении приоритет у того, кому труднее маневрировать: грузовики стоят выше легковых в порядке ст. 62, поэтому сдаёт назад легковой (RGC, ст. 60 и 62).', en: 'When in doubt, the harder-to-manoeuvre vehicle has priority: lorries rank above cars in art. 62, so the car reverses (RGC arts 60 and 62).' },
        img: 'img/dgt/preferencia-estrecho.svg' },
      { es: 'En un paso estrecho sin señalizar se encuentran un autobús y un camión. ¿Quién tiene preferencia?',
        prompt: { ru: 'На узком участке без знаков встретились автобус и грузовик. У кого приоритет?', en: 'A bus and a lorry meet on an unsigned narrow section. Who has priority?' },
        options: [
          { es: 'El autobús.', ru: 'У автобуса.', en: 'The bus.' },
          { es: 'El camión.', ru: 'У грузовика.', en: 'The lorry.' },
          { es: 'El que lleve más carga.', ru: 'У того, кто везёт больше груза.', en: 'Whichever carries more load.' }
        ],
        answer: 0,
        explain: { ru: 'В порядке ст. 62 автобусы (транспорт для пассажиров) стоят выше грузовиков и фургонов — сдаёт назад грузовик (RGC, ст. 62).', en: 'In the art. 62 order, buses rank above lorries and vans, so the lorry reverses (RGC art. 62).' } },
      { es: 'Dos turismos se encuentran en un tramo estrecho sin señales. ¿Cuál tiene preferencia?',
        prompt: { ru: 'Два легковых автомобиля встретились на узком участке без знаков. У кого приоритет?', en: 'Two cars meet on a narrow section without signs. Which has priority?' },
        options: [
          { es: 'El que tendría que dar marcha atrás una distancia mayor.', ru: 'У того, кому пришлось бы дольше сдавать назад.', en: 'The one that would have to reverse further.' },
          { es: 'El que tenga menos ocupantes.', ru: 'У того, в ком меньше людей.', en: 'The one with fewer occupants.' },
          { es: 'El que circule por la derecha.', ru: 'У того, кто едет справа.', en: 'The one on the right.' }
        ],
        answer: 0,
        explain: { ru: 'Для машин одного типа приоритет у того, кому пришлось бы дольше сдавать назад; при равенстве — у более крупного (RGC, ст. 62).', en: 'For vehicles of the same type, priority goes to the one that would have to reverse further; if equal, to the larger one (RGC art. 62).' } },
      { es: 'En un tramo estrecho de gran pendiente sin señales, ¿quién tiene preferencia, en general?',
        prompt: { ru: 'У кого, как правило, приоритет на узком крутом участке без знаков?', en: 'On a steep, narrow section without signs, who generally has priority?' },
        options: [
          { es: 'El que baja.', ru: 'У того, кто спускается.', en: 'The one going downhill.' },
          { es: 'El más pesado.', ru: 'У более тяжёлого.', en: 'The heavier one.' },
          { es: 'El que sube, salvo que el que baja tenga más cerca un apartadero.', ru: 'У того, кто поднимается, если только спускающийся не ближе к карману.', en: 'The one going uphill, unless the one going down is nearer a passing place.' }
        ],
        answer: 2,
        explain: { ru: 'На участках с уклоном от 7 % приоритет у поднимающегося, если только спускающийся не ближе к месту для разъезда (RGC, ст. 63).', en: 'On gradients of 7 % or more, the uphill vehicle has priority unless the downhill one is closer to a passing place (RGC art. 63).' } },
      { es: '¿Cuándo tiene carácter de prioritario un vehículo de policía, bomberos o ambulancia?',
        prompt: { ru: 'Когда машина полиции, пожарных или скорой считается приоритетной?', en: 'When does a police car, fire engine or ambulance count as a priority vehicle?' },
        options: [
          { es: 'Siempre, por ser de servicio público.', ru: 'Всегда: это госслужба.', en: 'Always, as a public service.' },
          { es: 'Cuando circula en servicio urgente y avisa con las señales luminosas y acústicas.', ru: 'Когда едет на срочный вызов и предупреждает световыми и звуковыми сигналами.', en: 'When on an urgent call and warning with lights and siren.' },
          { es: 'Solo en autopistas.', ru: 'Только на автомагистралях.', en: 'Only on motorways.' }
        ],
        answer: 1,
        explain: { ru: 'Приоритетной машина становится только на срочном вызове и с включёнными спецсигналами (RGC, ст. 67–68).', en: 'A vehicle becomes a priority vehicle only on an urgent call with its special signals on (RGC arts 67–68).' } },
      { es: 'Oye la sirena de una ambulancia que se acerca por detrás. ¿Qué debe hacer normalmente?',
        prompt: { ru: 'Сзади приближается скорая с сиреной. Что обычно нужно сделать?', en: 'You hear an ambulance siren coming up behind you. What should you normally do?' },
        options: [
          { es: 'Acelerar para no estorbar.', ru: 'Ускориться, чтобы не мешать.', en: 'Speed up so as not to obstruct it.' },
          { es: 'Frenar en seco en su carril.', ru: 'Резко затормозить в своей полосе.', en: 'Brake sharply in your lane.' },
          { es: 'Apartarse a la derecha y detenerse si es necesario.', ru: 'Прижаться вправо и при необходимости остановиться.', en: 'Move to the right and stop if necessary.' }
        ],
        answer: 2,
        explain: { ru: 'Услышав спецсигналы, водители освобождают путь, обычно смещаясь вправо, а при необходимости останавливаются (RGC, ст. 69).', en: 'On noticing the signals, drivers make way, usually moving right and stopping if necessary (RGC art. 69).' } },
      { es: 'Un vehículo prioritario en servicio urgente, ¿qué órdenes debe cumplir siempre?',
        prompt: { ru: 'Какие указания приоритетная машина на срочном вызове должна выполнять всегда?', en: 'Which instructions must a priority vehicle on an urgent call always obey?' },
        options: [
          { es: 'Las órdenes y señales de los agentes.', ru: 'Приказы и сигналы регулировщиков.', en: 'Orders and signals from officers.' },
          { es: 'Los semáforos.', ru: 'Светофоры.', en: 'Traffic lights.' },
          { es: 'Los límites de velocidad.', ru: 'Ограничения скорости.', en: 'Speed limits.' }
        ],
        answer: 0,
        explain: { ru: 'Они могут не соблюдать скорость, светофоры и знаки, если никого не подвергают опасности, но приказы агентов обязательны всегда (RGC, ст. 68.1).', en: 'They may ignore speed limits, lights and signs if they endanger no one, but officers’ orders are always binding (RGC art. 68.1).' } },
      { es: 'Debe llevar urgentemente a un herido grave al hospital en su turismo. ¿Cómo avisa a los demás?',
        prompt: { ru: 'Вы срочно везёте тяжелораненого в больницу на своей машине. Как предупредить других?', en: 'You must urgently take a seriously injured person to hospital in your car. How do you warn others?' },
        options: [
          { es: 'Con las luces de carretera fijas.', ru: 'Постоянно включённым дальним светом.', en: 'With the main beam on steadily.' },
          { es: 'Con el claxon de forma intermitente, la luz de emergencia o agitando un pañuelo.', ru: 'Прерывистым звуковым сигналом, аварийкой или размахивая платком.', en: 'With intermittent horn, hazard lights or by waving a handkerchief.' },
          { es: 'No puede avisar; debe circular como siempre.', ru: 'Никак: ехать как обычно.', en: 'You cannot; drive as normal.' }
        ],
        answer: 1,
        explain: { ru: 'Неприоритетная машина в экстренной ситуации предупреждает прерывистым сигналом, аварийкой или платком, но соблюдает правила (RGC, ст. 70).', en: 'A non-priority vehicle in an emergency warns with intermittent horn, hazard lights or a handkerchief, but still obeys the rules (RGC art. 70).' } },
      { es: 'Gira a la derecha para entrar en otra calle y hay peatones cruzándola, aunque no hay paso de peatones. ¿Quién tiene prioridad?',
        prompt: { ru: 'Вы поворачиваете направо на другую улицу, а её переходят пешеходы, хотя перехода там нет. У кого приоритет?', en: 'You turn right into another street and pedestrians are crossing it, though there is no crossing. Who has priority?' },
        options: [
          { es: 'Usted, porque no hay paso de peatones.', ru: 'У вас: перехода нет.', en: 'You, since there is no crossing.' },
          { es: 'Los peatones.', ru: 'У пешеходов.', en: 'The pedestrians.' },
          { es: 'Quien llegue antes.', ru: 'У того, кто раньше.', en: 'Whoever gets there first.' }
        ],
        answer: 1,
        explain: { ru: 'При повороте водитель уступает пешеходам, которые переходят дорогу, даже без перехода (RGC, ст. 65.1.b).', en: 'When turning, drivers give way to pedestrians crossing the road, even without a crossing (RGC art. 65.1.b).' } },
      { es: 'Unos viajeros acaban de bajar de un autobús en una parada señalizada y caminan hacia la acera. ¿Quién tiene prioridad?',
        prompt: { ru: 'Пассажиры вышли из автобуса на остановке и идут к тротуару. У кого приоритет?', en: 'Passengers have just got off a bus at a marked stop and are walking to the pavement. Who has priority?' },
        options: [
          { es: 'Los viajeros.', ru: 'У пассажиров.', en: 'The passengers.' },
          { es: 'Los vehículos, porque los peatones están en la calzada.', ru: 'У машин: пешеходы на проезжей части.', en: 'Vehicles, because the pedestrians are on the road.' },
          { es: 'Solo el autobús.', ru: 'Только у автобуса.', en: 'Only the bus.' }
        ],
        answer: 0,
        explain: { ru: 'Пешеходы, которые садятся в автобус или вышли из него и находятся между ним и тротуаром, имеют приоритет (RGC, ст. 65.1.d).', en: 'Pedestrians getting on or off a bus who are between it and the pavement have priority (RGC art. 65.1.d).' } },
      { es: '¿En cuál de estos casos tiene prioridad un ciclista sobre un turismo?',
        prompt: { ru: 'В каком случае у велосипедиста приоритет перед легковым автомобилем?', en: 'In which case does a cyclist have priority over a car?' },
        options: [
          { es: 'Siempre que circule por la calzada.', ru: 'Всегда, когда он на проезжей части.', en: 'Whenever on the carriageway.' },
          { es: 'Nunca.', ru: 'Никогда.', en: 'Never.' },
          { es: 'Cuando circula por un carril bici o un paso para ciclistas señalizado.', ru: 'Когда едет по велополосе или обозначенному велопереезду.', en: 'When riding in a cycle lane or a marked cycle crossing.' }
        ],
        answer: 2,
        explain: { ru: 'Велосипедист главнее на велополосе, велопереезде, обозначенной обочине, при вашем повороте рядом с ним и в группе (RGC, ст. 64.2).', en: 'Cyclists have priority in cycle lanes and crossings, on a marked shoulder, when you turn near them, and in groups (RGC art. 64.2).' } },
      { es: '¿Dónde tienen prioridad los animales sobre los vehículos?',
        prompt: { ru: 'Где у животных приоритет перед машинами?', en: 'Where do animals have priority over vehicles?' },
        options: [
          { es: 'En cualquier carretera de montaña.', ru: 'На любой горной дороге.', en: 'On any mountain road.' },
          { es: 'En las cañadas debidamente señalizadas.', ru: 'На обозначенных скотопрогонах (cañadas).', en: 'On properly signed livestock routes (cañadas).' },
          { es: 'En las autovías.', ru: 'На autovías.', en: 'On autovías.' }
        ],
        answer: 1,
        explain: { ru: 'Животные главнее на обозначенных скотопрогонах (знак P-23 с табличкой «cañada»), при повороте водителя и на обочине без скотопрогона (RGC, ст. 66).', en: 'Animals have priority on signed cañadas (P-23 with a “cañada” plate), when you turn, and on a shoulder with no cañada (RGC art. 66).' } },
      { es: 'El semáforo está en verde, pero el tráfico está parado al otro lado del cruce. ¿Qué debe hacer?',
        prompt: { ru: 'Горит зелёный, но за перекрёстком стоит пробка. Что делать?', en: 'The light is green but traffic is stationary beyond the junction. What should you do?' },
        options: [
          { es: 'Entrar en el cruce, porque el verde da prioridad.', ru: 'Въехать: зелёный даёт приоритет.', en: 'Enter, because green gives priority.' },
          { es: 'Esperar antes del cruce para no quedarse detenido en él.', ru: 'Ждать перед перекрёстком, чтобы не застрять на нём.', en: 'Wait before the junction so as not to get stuck in it.' },
          { es: 'Tocar el claxon.', ru: 'Посигналить.', en: 'Sound the horn.' }
        ],
        answer: 1,
        explain: { ru: 'Даже с приоритетом нельзя въезжать на перекрёсток, если застрянете и перекроете поперечное движение (RGC, ст. 59.1).', en: 'Even with priority you must not enter a junction if you will get stuck and block crossing traffic (RGC art. 59.1).' } },
      { es: 'Ha quedado detenido dentro de un cruce regulado por semáforo y obstaculiza el paso. ¿Qué hace?',
        prompt: { ru: 'Вы застряли на перекрёстке со светофором и мешаете движению. Что делать?', en: 'You are stuck inside a junction with traffic lights and are blocking it. What do you do?' },
        options: [
          { es: 'Esperar a que se ponga verde en su dirección.', ru: 'Ждать зелёного в своём направлении.', en: 'Wait for green in your direction.' },
          { es: 'Dar marcha atrás hasta la línea de detención.', ru: 'Сдать назад до стоп-линии.', en: 'Reverse back to the stop line.' },
          { es: 'Salir del cruce sin esperar, si no entorpece a quienes tienen paso.', ru: 'Покинуть перекрёсток, не дожидаясь сигнала, если не мешаете тем, у кого зелёный.', en: 'Clear the junction without waiting, if you do not hinder those with right of way.' }
        ],
        answer: 2,
        explain: { ru: 'Застрявший на перекрёстке со светофором должен выехать, не дожидаясь разрешающего сигнала, не мешая тем, кто едет по разрешению (RGC, ст. 59.2).', en: 'A driver stuck in a signal-controlled junction must clear it without waiting for their light, without hindering those moving on green (RGC art. 59.2).' } },
      { es: 'Su vehículo se queda detenido en un paso a nivel y no consigue arrancarlo. ¿Qué debe hacer en primer lugar?',
        prompt: { ru: 'Машина заглохла на переезде и не заводится. Что делать в первую очередь?', en: 'Your vehicle stops on a level crossing and will not start. What must you do first?' },
        options: [
          { es: 'Hacer bajar rápidamente a los ocupantes.', ru: 'Быстро высадить пассажиров.', en: 'Get the occupants out quickly.' },
          { es: 'Esperar dentro con el cinturón puesto.', ru: 'Ждать внутри пристёгнутым.', en: 'Wait inside with seat belts on.' },
          { es: 'Llamar a la grúa y quedarse en el coche.', ru: 'Вызвать эвакуатор и оставаться в машине.', en: 'Call a tow truck and stay in the car.' }
        ],
        answer: 0,
        explain: { ru: 'Сначала быстро эвакуировать людей, затем попытаться освободить переезд, а если не выходит — предупредить поезда и машины (RGC, ст. 97).', en: 'First get everyone out, then try to clear the crossing; if you cannot, warn trains and other vehicles (RGC art. 97).' } },
      { es: 'Dentro de un túnel, ¿qué distancia mínima debe guardar un turismo con el vehículo de delante?',
        prompt: { ru: 'Какую минимальную дистанцию легковой автомобиль должен держать в тоннеле?', en: 'In a tunnel, what minimum distance must a car keep from the vehicle in front?' },
        options: [
          { es: '50 metros o 2 segundos.', ru: '50 м или 2 секунды.', en: '50 metres or 2 seconds.' },
          { es: '150 metros o 6 segundos.', ru: '150 м или 6 секунд.', en: '150 metres or 6 seconds.' },
          { es: '100 metros o 4 segundos.', ru: '100 м или 4 секунды.', en: '100 metres or 4 seconds.' }
        ],
        answer: 2,
        explain: { ru: '100 м или 4 секунды; для машин тяжелее 3500 кг — 150 м или 6 секунд (RGC, ст. 95.6).', en: '100 m or 4 seconds; for vehicles over 3,500 kg, 150 m or 6 seconds (RGC art. 95.6).' } },
      { es: 'Si hay un incendio en un túnel y debe abandonar su coche, ¿qué hace con la llave?',
        prompt: { ru: 'В тоннеле пожар, и вы покидаете машину. Что делать с ключом?', en: 'There is a fire in a tunnel and you must leave your car. What do you do with the key?' },
        options: [
          { es: 'Llevármela y cerrar el coche.', ru: 'Забрать и запереть машину.', en: 'Take it and lock the car.' },
          { es: 'Dejarla puesta y las puertas sin cerrar.', ru: 'Оставить в замке, двери не запирать.', en: 'Leave it in the ignition and the doors unlocked.' },
          { es: 'Dársela al primer conductor que pase.', ru: 'Отдать первому проезжающему водителю.', en: 'Give it to the first driver who passes.' }
        ],
        answer: 1,
        explain: { ru: 'Ключ оставляют, двери не запирают, чтобы спасатели могли отогнать машину; уходят в сторону, противоположную огню (RGC, ст. 97.3).', en: 'Leave the key in and the doors unlocked so rescuers can move the car; walk away from the fire (RGC art. 97.3).' } }
    ]
  }
]);
