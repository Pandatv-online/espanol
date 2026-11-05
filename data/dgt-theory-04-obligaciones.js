// DGT · theory, topic 04: Obligations of drivers and pedestrians. Sources: DGT «Teórica abreviada, lectura fácil» (2025),
// DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-obligaciones', level: 'DGT',
    title: { ru: 'Обязанности водителей и пешеходов', en: 'Duties of drivers and pedestrians' },
    summary: { ru: 'Внимание за рулём, телефон и наушники, пешеходы, двухколёсные, СИМ, спецмашины и животные на дороге.',
               en: 'Attention at the wheel, phones and earphones, pedestrians, two-wheelers, PMVs, emergency vehicles and animals.' },
    hero: { es: 'Obligaciones de <b>conductores y peatones</b>',
            sub: { ru: 'Что должен и чего не должен делать каждый участник движения', en: 'What every road user must and must not do' } },
    tabs: [
      { id: 'general', label: { ru: 'Общие', en: 'General' }, blocks: [
        { type: 'text', body: {
          ru: ['Безопасность зависит от всех: водитель обязан ехать <b>с осторожностью и вниманием</b>, чтобы не навредить ни себе, ни пассажирам, ни другим. Особое внимание — детям, пожилым, незрячим и людям в инвалидных колясках.'],
          en: ['Safety depends on everyone: a driver must drive <b>with care and attention</b> so as not to harm themselves, passengers or others. Take special care with children, older people, blind people and wheelchair users.'] } },
        { type: 'rules', heading: { ru: 'Главные запреты', en: 'Key prohibitions' }, items: [
          { color: 'coral', title: { ru: 'Небрежная и опасная езда', en: 'Careless and reckless driving' }, es: 'negligente · temeraria',
            body: { ru: 'Небрежная езда (<b>negligente</b>) — серьёзное нарушение; опасная, безрассудная (<b>temeraria</b>) — очень серьёзное, минус 6 баллов.',
                    en: 'Careless driving (<b>negligente</b>) is a serious offence; reckless driving (<b>temeraria</b>) is very serious and costs 6 points.' } },
          { color: 'coral', title: { ru: 'Мусор и предметы на дороге', en: 'Objects on the road' }, es: 'arrojar objetos a la vía',
            body: { ru: 'Нельзя бросать или оставлять на дороге то, что мешает движению или портит дорогу. Бросить предмет, который может вызвать пожар или аварию (например, окурок), — <b>минус 6 баллов</b>.',
                    en: 'Do not throw or leave anything on the road that blocks traffic or damages it. Throwing out something that can start a fire or cause a crash (a cigarette end, say) costs <b>6 points</b>.' } },
          { color: 'amber', title: { ru: 'Двери', en: 'Doors' }, es: 'abrir las puertas',
            body: { ru: 'Нельзя ехать с открытыми дверями и открывать их до полной остановки. Перед тем как открыть дверь, убедись, что нет опасности, особенно для велосипедистов. Выходить — со стороны обочины.',
                    en: 'Do not drive with doors open or open them before the vehicle has fully stopped. Before opening, make sure it is safe, especially for cyclists. Get out on the kerb side.' } },
          { color: 'amber', title: { ru: 'Заправка', en: 'Refuelling' }, es: 'repostar con el motor parado',
            body: { ru: 'Двигатель заглушен, фары выключены, радио и телефон тоже выключены.', en: 'Engine off, lights off, radio and phone off too.' } },
          { color: 'teal', title: { ru: 'Шум и дым', en: 'Noise and fumes' }, es: 'ruidos, gases y humos',
            body: { ru: 'Нельзя ездить на машине, которая шумит или дымит сильнее разрешённого.', en: 'Do not drive a vehicle that makes more noise or smoke than allowed.' } },
          { color: 'teal', title: { ru: 'Препятствие', en: 'Obstacle' }, es: 'señalizar el obstáculo',
            body: { ru: 'Кто создал на дороге препятствие или опасность, должен обозначить его и как можно скорее убрать.', en: 'Whoever creates an obstacle or hazard must mark it and remove it as soon as possible.' } }
        ] },
        { type: 'table', heading: { ru: 'Безопасная езда: термины', en: 'Safe-driving terms' },
          head: ['', { ru: 'Что это', en: 'What it is' }],
          rows: [
            ['conducción defensiva', { ru: 'предвидеть ошибки других', en: 'anticipating others’ mistakes' }],
            ['zona de inseguridad', { ru: 'где возможна неожиданность', en: 'where surprises can happen' }]
          ] },
        { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
          { es: 'Antes de <b>abrir la puerta</b>, mira si viene una bici.', ru: 'Прежде чем открыть дверь, посмотри, не едет ли велосипед.', en: 'Before opening the door, check whether a bike is coming.' },
          { es: 'Para <b>repostar</b>, apaga el motor y la radio.', ru: 'Чтобы заправиться, заглуши двигатель и выключи радио.', en: 'To refuel, switch off the engine and the radio.' },
          { es: 'Está prohibido <b>tirar colillas</b> por la ventanilla.', ru: 'Запрещено выбрасывать окурки из окна.', en: 'Throwing cigarette ends out of the window is forbidden.' }
        ] }
      ] },
      { id: 'attention', label: { ru: 'Внимание', en: 'Attention' }, blocks: [
        { type: 'text', body: {
          ru: ['Водитель обязан сохранять <b>свободу движений</b>, нужный <b>обзор</b> и <b>постоянное внимание</b>. Пассажиры, вещи и животные в салоне не должны ему мешать.'],
          en: ['A driver must keep <b>freedom of movement</b>, a proper <b>field of vision</b> and <b>constant attention</b>. Passengers, objects and animals must not get in the way.'] } },
        { type: 'rules', heading: { ru: 'Телефон, наушники, экраны', en: 'Phones, earphones, screens' }, items: [
          { color: 'coral', label: { ru: 'Запрещено', en: 'Forbidden' }, title: { ru: 'Телефон в руке', en: 'Phone in hand' }, es: 'móvil en la mano: 6 puntos',
            body: { ru: 'Пользоваться телефоном за рулём нельзя. Держать его в руке — <b>минус 6 баллов</b> и штраф 200 €. Другие способы пользоваться им вручную — минус 3 балла.',
                    en: 'You may not use a phone while driving. Holding it costs <b>6 points</b> and a €200 fine. Other manual use costs 3 points.' } },
          { color: 'coral', label: { ru: 'Запрещено', en: 'Forbidden' }, title: { ru: 'Наушники', en: 'Earphones' }, es: 'auriculares: 3 puntos',
            body: { ru: 'Нельзя ехать в наушниках или аудиошлеме, подключённых к телефону, плееру и т. п. — <b>минус 3 балла</b>. Также нельзя держать телефон между шлемом и головой.',
                    en: 'No earphones or audio headsets connected to a phone, player etc. — <b>3 points</b>. Nor may you hold a phone between helmet and head.' } },
          { color: 'teal', label: { ru: 'Можно', en: 'Allowed' }, title: { ru: 'Громкая связь', en: 'Hands-free' }, es: 'manos libres',
            body: { ru: 'Разговор допустим, если для него <b>не нужны руки</b> и <b>не нужны наушники</b>.', en: 'A call is fine if it needs <b>no hands</b> and <b>no earphones</b>.' } },
          { color: 'teal', label: { ru: 'Можно', en: 'Allowed' }, title: { ru: 'Гарнитура в шлеме', en: 'Helmet intercom' }, es: 'intercomunicador en el casco',
            body: { ru: 'Мотоциклистам и водителям мопедов можно сертифицированное беспроводное устройство в шлеме — только для связи или навигации.',
                    en: 'Motorcycle and moped riders may use a certified wireless device built into the helmet — for intercom or navigation only.' } },
          { color: 'amber', title: { ru: 'Экраны', en: 'Screens' }, es: 'GPS sí · televisión no',
            body: { ru: 'В движении нельзя смотреть экраны с интернетом, ТВ, видео. Можно: навигатор (GPS), камеру заднего хода, монитор посадки пассажиров.',
                    en: 'While moving, no screens with internet, TV or video. Allowed: sat-nav (GPS), reversing camera, passenger boarding monitor.' } },
          { color: 'purple', title: { ru: 'Радары', en: 'Speed cameras' }, es: 'detectores e inhibidores',
            body: { ru: 'Детектор радаров запрещён (−3 балла), глушитель радаров — тоже (−6 баллов). Приложения, которые просто сообщают, где стоит камера, разрешены.',
                    en: 'Radar detectors are banned (−3 points), radar jammers too (−6 points). Apps that just tell you where cameras are located are allowed.' } }
        ] },
        { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
          { es: 'Contesta solo con el <b>manos libres</b>.', ru: 'Отвечай только по громкой связи.', en: 'Answer only with the hands-free.' },
          { es: 'Conducir con <b>auriculares</b> te quita 3 puntos.', ru: 'Езда в наушниках стоит 3 балла.', en: 'Driving with earphones costs you 3 points.' },
          { es: 'Llevar el <b>móvil en la mano</b> mientras conduces cuesta 6 puntos.', ru: 'Держать телефон в руке за рулём — минус 6 баллов.', en: 'Holding your phone while driving costs 6 points.' }
        ] }
      ] },
      { id: 'pedestrians', label: { ru: 'Пешеходы', en: 'Pedestrians' }, blocks: [
        { type: 'rules', heading: { ru: 'Где идти', en: 'Where to walk' }, items: [
          { color: 'coral', title: { ru: 'В городе', en: 'In town' }, es: 'por la acera',
            body: { ru: 'По тротуару или пешеходной зоне. На роликах и самокатах без мотора — тоже по тротуару.',
                    en: 'On the pavement or pedestrian area. People on non-motorised skates or scooters use the pavement too.' } },
          { color: 'coral', title: { ru: 'Вне города', en: 'Outside town' }, es: 'por la izquierda',
            body: { ru: 'Если пешеходной зоны нет — по <b>левой</b> обочине (навстречу машинам), а без неё — по краю проезжей части, друг за другом. Справа — только если так безопаснее.',
                    en: 'With no footway, walk on the <b>left</b> hard shoulder (facing traffic), or failing that the edge of the carriageway, in single file. Use the right only if it is safer.' } },
          { color: 'amber', title: { ru: 'Всегда справа', en: 'Always on the right' }, es: 'por la derecha',
            body: { ru: 'Кто ведёт велосипед, двухколёсный мопед или СИМ; группа под руководством одного человека; тот, кому слева идти опасно.',
                    en: 'Anyone walking a bicycle, two-wheeled moped or PMV; a group led by one person; anyone for whom the left is unsafe.' } },
          { color: 'blue', title: { ru: 'Ночью вне города', en: 'At night outside town' }, es: 'visible a 150 metros',
            body: { ru: 'Светящийся или светоотражающий элемент, заметный с <b>150 м</b>. Группа — фонари со стороны центра дороги: <b>белый или жёлтый</b> вперёд, <b>красный</b> назад.',
                    en: 'A lit or reflective item visible from <b>150 m</b>. A group carries lights on the side nearest the centre: <b>white or yellow</b> facing forward, <b>red</b> facing back.' } }
        ] },
        { type: 'rules', heading: { ru: 'Как переходить', en: 'How to cross' }, items: [
          { color: 'teal', title: { ru: 'По переходу', en: 'At the crossing' }, es: 'paso de peatones',
            body: { ru: 'Если переход рядом — переходить только по нему. На «зебре» без светофора у пешехода приоритет, но выходить можно, только когда машины успевают остановиться.',
                    en: 'If there is a crossing nearby, use it. On a zebra without lights pedestrians have priority, but step out only when vehicles can stop in time.' } },
          { color: 'teal', title: { ru: 'Прямо и не задерживаясь', en: 'Straight across, no stopping' }, es: 'en línea recta',
            body: { ru: 'Переходить перпендикулярно дороге, не останавливаться. Площади и кольца (glorietas) — обходить, а не пересекать по проезжей части.',
                    en: 'Cross at right angles, without stopping. Walk round squares and roundabouts (glorietas), not across their carriageway.' } },
          { color: 'purple', title: { ru: 'Магистрали', en: 'Motorways' }, es: 'prohibido en autopistas y autovías',
            body: { ru: 'Пешеходам нельзя на autopistas и autovías, в том числе «голосовать» у пунктов оплаты.', en: 'Pedestrians may not use autopistas or autovías, nor hitch-hike there, even at toll plazas.' } }
        ] },
        { type: 'signs', heading: { ru: 'Знаки', en: 'Signs' }, items: ['P-20a', 'P-20b', 'P-21a', 'R-116', 'R-410', 'S-13'] },
        { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
          { es: 'Fuera del pueblo camina por la <b>izquierda</b>.', ru: 'За посёлком иди по левой стороне.', en: 'Outside the village, walk on the left.' },
          { es: 'De noche lleva un <b>chaleco reflectante</b>.', ru: 'Ночью надевай светоотражающий жилет.', en: 'At night wear a reflective vest.' },
          { es: 'No cruces la <b>glorieta</b> por el centro.', ru: 'Не переходи кольцо через центр.', en: 'Do not cross the roundabout through the middle.' }
        ] }
      ] },
      { id: 'twowheels', label: { ru: 'Мото и СИМ', en: 'Bikes, PMVs' }, blocks: [
        { type: 'text', body: {
          ru: ['Мотоциклы, мопеды, трициклы, квадроциклы, велосипеды и СИМ хуже видно, они менее устойчивы, и их водители сильнее страдают в аварии.'],
          en: ['Motorcycles, mopeds, three-wheelers, quads, bicycles and PMVs are harder to see and less stable, and their riders get hurt more in a crash.'] } },
        { type: 'rules', heading: { ru: 'Защита', en: 'Protection' }, items: [
          { color: 'blue', title: { ru: 'Мотоцикл и мопед', en: 'Motorcycle and moped' }, es: 'casco abrochado',
            body: { ru: 'Шлем, правильно застёгнутый, — и водителю, и пассажиру, на любой дороге. Если у машины есть каркас и ремни безопасности (записано в документах), вместо шлема — ремень.',
                    en: 'A properly fastened helmet for rider and passenger, on every road. If the vehicle has a safety cage and belts (stated in its papers), the belt replaces the helmet.' } },
          { color: 'amber', title: { ru: 'Велосипед', en: 'Bicycle' }, es: 'casco en vías interurbanas',
            body: { ru: 'Шлем обязателен вне города, а детям до 16 лет — везде. Ночью вне города — светоотражающий элемент, видимый с 150 м, и включённые фары.',
                    en: 'A helmet is compulsory outside towns, and everywhere for under-16s. At night outside towns: a reflective item visible from 150 m and lights on.' } },
          { color: 'teal', title: { ru: 'Электросамокат и другие СИМ', en: 'E-scooters and other PMVs' }, es: 'VMP: casco y luces',
            body: { ru: 'Шлем обязателен. Свет всегда включён; ночью — светоотражающий элемент (150 м). Только один человек, водителю минимум 15 лет. Без наушников и телефона, проверку на алкоголь и наркотики проходят как все.',
                    en: 'Helmet compulsory. Lights always on; at night a reflective item (150 m). One person only; rider at least 15. No earphones or phone; alcohol and drug tests apply as for everyone.' } },
          { color: 'coral', title: { ru: 'Где СИМ нельзя', en: 'Where PMVs are banned' }, es: 'autopistas · autovías · travesías · interurbanas · túneles urbanos',
            body: { ru: 'На автомагистралях, autovías, travesías, загородных дорогах и городских тоннелях. Вне города — только по велодорожкам и путям, закрытым для машин. На тротуаре — тоже нельзя.',
                    en: 'On motorways, autovías, travesías, interurban roads and urban tunnels. Outside towns only on cycle routes and roads closed to motor vehicles. Not on pavements either.' } },
          { color: 'purple', title: { ru: 'Дорожные и спецмашины', en: 'Road-works vehicles' }, es: 'luz amarilla (V-2)',
            body: { ru: 'Машины, работающие на дороге, включают жёлтый проблесковый маячок. Приоритета он не даёт.',
                    en: 'Vehicles working on the road switch on a flashing yellow beacon. It gives them no priority.' } }
        ] },
        { type: 'signs', heading: { ru: 'Знаки', en: 'Signs' }, items: ['R-118', 'R-119', 'R-114', 'R-105'] },
        { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
          { es: 'El pasajero de la moto también lleva <b>casco</b>.', ru: 'Пассажир мотоцикла тоже в шлеме.', en: 'The motorbike passenger also wears a helmet.' },
          { es: 'Con el <b>patinete</b> no puedes llevar a nadie.', ru: 'На самокате нельзя никого возить.', en: 'You cannot carry anyone on the scooter.' },
          { es: 'Los <b>patinetes</b> no pueden circular por la acera.', ru: 'Самокатам нельзя ездить по тротуару.', en: 'Scooters may not ride on the pavement.' }
        ] }
      ] },
      { id: 'emergency', label: { ru: 'Экстренные', en: 'Emergencies' }, blocks: [
        { type: 'rules', heading: { ru: 'Спецтранспорт', en: 'Emergency vehicles' }, items: [
          { color: 'coral', title: { ru: 'Кто приоритетный', en: 'Which ones have priority' }, es: 'vehículos prioritarios',
            body: { ru: 'Полиция, пожарные, гражданская защита и спасатели, скорая помощь — когда едут <b>на срочный вызов</b> и включили <b>маячок и сирену одновременно</b> (маячок без сирены — если тишина никому не опасна).',
                    en: 'Police, fire, civil protection and rescue, ambulances — when <b>on an urgent call</b> with <b>beacon and siren on together</b> (beacon alone where silence puts nobody at risk).' } },
          { color: 'coral', title: { ru: 'Что делать остальным', en: 'What everyone else does' }, es: 'apartarse a la derecha',
            body: { ru: 'Как только услышал или увидел сигналы — уступи: прижмись <b>вправо</b>, при необходимости остановись. В пробке на магистрали — образуй коридор (carril de emergencia).',
                    en: 'As soon as you notice the signals, make way: pull <b>right</b>, and stop if needed. In a motorway jam, form an emergency corridor (carril de emergencia).' } },
          { color: 'blue', title: { ru: 'Полиция сзади с красным светом', en: 'Police behind with a red light' }, es: 'detenerse a la derecha y no salir',
            body: { ru: 'Если полицейская машина едет за тобой и мигает вперёд красным — остановись справа <b>перед ней</b> в безопасном месте и <b>оставайся в машине</b>; слушай команды по громкоговорителю.',
                    en: 'If a police car behind you flashes a red light forward, stop on the right <b>in front of it</b> somewhere safe and <b>stay inside</b>; follow instructions over the loudspeaker.' } },
          { color: 'amber', title: { ru: 'Обычная машина везёт пострадавшего', en: 'Ordinary car on an emergency' }, es: 'claxon intermitente y luz de emergencia',
            body: { ru: 'Прерывистый звуковой сигнал + аварийка (или платок в окне). Приоритета нет: правила, особенно на перекрёстках, соблюдаются.',
                    en: 'Sound the horn intermittently + hazard lights (or wave a cloth). No priority: the rules still apply, especially at junctions.' } },
          { color: 'purple', title: { ru: 'Пешеходы', en: 'Pedestrians' }, es: 'despejar la calzada',
            body: { ru: 'Услышав сирену, пешеходы уходят с проезжей части на островок или тротуар.', en: 'On hearing a siren, pedestrians clear the carriageway onto an island or the pavement.' } }
        ] },
        { type: 'rules', heading: { ru: 'Авария или поломка', en: 'Crash or breakdown' }, items: [
          { color: 'teal', title: { ru: 'Обязанность помочь', en: 'Duty to help' }, es: 'auxiliar o pedir auxilio',
            body: { ru: 'Участник или свидетель ДТП обязан помочь пострадавшим или вызвать помощь, не создавать новой опасности и сотрудничать с полицией.',
                    en: 'Anyone involved in or witnessing a crash must help the injured or call for help, avoid creating new danger and cooperate with the police.' } },
          { color: 'teal', title: { ru: 'Выйти из машины', en: 'Getting out' }, es: 'salir por el lado contrario al tráfico',
            body: { ru: 'Если машина не может ехать и рядом есть безопасное место вне дороги — выйти через сторону <b>подальше от потока</b> и не стоять на полосах и обочине. Если выйти опасно — остаться внутри с пристёгнутым ремнём. Включить аварийку и обозначить машину (огонь V-16).',
                    en: 'If the car cannot move and there is a safe spot off the road, get out on the side <b>away from traffic</b> and keep off the lanes and shoulder. If getting out is unsafe, stay inside with the belt on. Hazard lights on and warning device (V-16 beacon).' } }
        ] },
        { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
          { es: 'Oigo una sirena: me <b>aparto a la derecha</b>.', ru: 'Слышу сирену — прижимаюсь вправо.', en: 'I hear a siren: I pull over to the right.' },
          { es: 'La ambulancia lleva <b>luces y sirena</b> encendidas.', ru: 'У скорой включены маячки и сирена.', en: 'The ambulance has its lights and siren on.' },
          { es: 'Salimos del coche por el lado <b>contrario al tráfico</b>.', ru: 'Мы выходим из машины со стороны, противоположной потоку.', en: 'We get out of the car on the side away from traffic.' }
        ] }
      ] },
      { id: 'animals', label: { ru: 'Животные', en: 'Animals' }, blocks: [
        { type: 'rules', heading: { ru: 'Животные на дороге', en: 'Animals on the road' }, items: [
          { color: 'amber', title: { ru: 'Когда можно', en: 'When allowed' }, es: 'sin vía pecuaria',
            body: { ru: 'Скот и вьючных или верховых животных ведут по дороге, только если нет скотопрогонного пути, и выбирают дорогу с наименьшим движением.',
                    en: 'Livestock and pack or riding animals may use the road only if there is no drovers’ track, choosing the quietest route.' } },
          { color: 'amber', title: { ru: 'Кто ведёт', en: 'Who leads them' }, es: 'mayor de 18 años',
            body: { ru: 'Минимум один человек <b>старше 18 лет</b>, который может их контролировать. Оставлять животных без присмотра у дороги запрещено.',
                    en: 'At least one person <b>over 18</b> able to control them. Leaving animals unattended near a road is forbidden.' } },
          { color: 'teal', title: { ru: 'Где идут', en: 'Where they go' }, es: 'por el arcén derecho',
            body: { ru: 'По правой обочине, без неё — по правому краю. Стадо — шагом, группами, и <b>никогда больше правой половины</b> проезжей части.',
                    en: 'On the right hard shoulder, or the right edge if there is none. A herd moves at walking pace, in groups, and <b>never over more than the right half</b> of the carriageway.' } },
          { color: 'blue', title: { ru: 'Ночью', en: 'At night' }, es: 'luz blanca o amarilla delante, roja detrás',
            body: { ru: 'Погонщики несут фонари со стороны центра дороги: белый или жёлтый вперёд, красный назад.',
                    en: 'Drovers carry lights on the side nearest the centre: white or yellow forward, red backward.' } },
          { color: 'coral', title: { ru: 'Запрещено', en: 'Forbidden' }, es: 'nunca en autopistas ni autovías',
            body: { ru: 'Никаких животных и гужевых повозок на autopistas и autovías.', en: 'No animals or horse-drawn vehicles on autopistas or autovías.' } }
        ] },
        { type: 'signs', heading: { ru: 'Знаки', en: 'Signs' }, items: ['P-23', 'P-24', 'R-117', 'R-113', 'R-409'] },
        { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
          { es: 'Un pastor lleva el <b>rebaño</b> por el arcén.', ru: 'Пастух ведёт стадо по обочине.', en: 'A shepherd is driving the flock along the hard shoulder.' },
          { es: 'Reduce la velocidad: hay <b>ganado</b> en la carretera.', ru: 'Сбавь скорость: на дороге скот.', en: 'Slow down: there is livestock on the road.' }
        ] }
      ] }
    ],
    quizCount: 20,
    quiz: [
      { es: 'Conducir de forma temeraria, ¿qué tipo de infracción es?',
        prompt: { ru: 'Опасная, безрассудная езда (temeraria) — какое это нарушение?', en: 'Reckless driving (temeraria) — what kind of offence is it?' },
        options: [
          { es: 'Muy grave.', ru: 'Очень серьёзное.', en: 'Very serious.' },
          { es: 'Grave.', ru: 'Серьёзное.', en: 'Serious.' },
          { es: 'Leve.', ru: 'Лёгкое.', en: 'Minor.' }
        ], answer: 0,
        explain: { ru: 'Temeraria — очень серьёзное нарушение (−6 баллов), negligente — серьёзное (RGC, ст. 3; LSV, прил. II).', en: 'Reckless driving is very serious (−6 points); careless driving is serious (RGC art. 3; LSV Annex II).' } },
      { es: '¿Cuántos puntos se pierden por arrojar a la vía objetos que puedan producir incendios o accidentes?',
        prompt: { ru: 'Сколько баллов снимают за то, что водитель бросил на дорогу предмет, способный вызвать пожар или аварию?', en: 'How many points do you lose for throwing onto the road something that could start a fire or cause a crash?' },
        options: [
          { es: '2 puntos.', ru: '2 балла.', en: '2 points.' },
          { es: '4 puntos.', ru: '4 балла.', en: '4 points.' },
          { es: '6 puntos.', ru: '6 баллов.', en: '6 points.' }
        ], answer: 2,
        explain: { ru: 'Например, окурок из окна — минус 6 баллов (LSV, прил. II, п. 9; RGC, ст. 6).', en: 'A cigarette end out of the window, for example, costs 6 points (LSV Annex II, item 9; RGC art. 6).' } },
      { es: '¿Cuándo puedes abrir la puerta de tu coche?',
        prompt: { ru: 'Когда можно открыть дверь машины?', en: 'When may you open your car door?' },
        options: [
          { es: 'Cuando el coche va muy despacio.', ru: 'Когда машина едет очень медленно.', en: 'When the car is moving very slowly.' },
          { es: 'Con el vehículo parado y tras comprobar que no hay peligro, sobre todo para ciclistas.', ru: 'Когда машина стоит и ты убедился, что нет опасности, особенно для велосипедистов.', en: 'With the car stopped and after checking it is safe, especially for cyclists.' },
          { es: 'En cualquier momento si llevas el intermitente puesto.', ru: 'В любой момент, если включён поворотник.', en: 'Any time, if your indicator is on.' }
        ], answer: 1,
        explain: { ru: 'Открывать двери можно только после полной остановки и проверки, что никому не помешаешь, особенно велосипедистам (RGC, ст. 114.1).', en: 'Doors may be opened only once fully stopped and after checking you will not endanger anyone, especially cyclists (RGC art. 114.1).' } },
      { es: 'Como norma general, ¿por qué lado se debe salir del vehículo?',
        prompt: { ru: 'С какой стороны, как правило, нужно выходить из машины?', en: 'As a general rule, which side should you get out of the vehicle?' },
        options: [
          { es: 'Por el lado más próximo al borde de la vía.', ru: 'Со стороны, ближайшей к краю дороги.', en: 'On the side nearest the edge of the road.' },
          { es: 'Por el lado del conductor.', ru: 'Со стороны водителя.', en: 'On the driver’s side.' },
          { es: 'Por cualquier lado.', ru: 'С любой стороны.', en: 'Either side.' }
        ], answer: 0,
        explain: { ru: 'Садиться и выходить — со стороны, ближайшей к краю дороги, и только когда машина стоит (RGC, ст. 114.2).', en: 'Get in and out on the side nearest the road edge, and only once stopped (RGC art. 114.2).' } },
      { es: 'Al repostar combustible, ¿qué debes hacer?',
        prompt: { ru: 'Что нужно сделать при заправке?', en: 'What must you do when refuelling?' },
        options: [
          { es: 'Dejar el motor encendido si es menos de un minuto.', ru: 'Можно не глушить двигатель, если это меньше минуты.', en: 'Leave the engine running if it takes under a minute.' },
          { es: 'Apagar solo las luces.', ru: 'Выключить только фары.', en: 'Switch off only the lights.' },
          { es: 'Parar el motor y apagar las luces, la radio y el móvil.', ru: 'Заглушить двигатель, выключить фары, радио и телефон.', en: 'Stop the engine and switch off the lights, radio and phone.' }
        ], answer: 2,
        explain: { ru: 'При заправке двигатель заглушен, фары, радио и телефон выключены (RGC, ст. 115.3).', en: 'When refuelling, engine off and lights, radio and mobile off (RGC art. 115.3).' } },
      { es: '¿Cómo puede el conductor hablar por teléfono mientras conduce?',
        prompt: { ru: 'Как водитель может разговаривать по телефону во время езды?', en: 'How may a driver talk on the phone while driving?' },
        options: [
          { es: 'Con un auricular en un solo oído.', ru: 'С наушником только в одном ухе.', en: 'With one earphone in one ear.' },
          { es: 'Sin usar las manos ni auriculares, con un sistema de manos libres.', ru: 'Без рук и без наушников, через громкую связь.', en: 'Without hands or earphones, using a hands-free system.' },
          { es: 'Con el móvil en la mano si va despacio.', ru: 'С телефоном в руке, если едет медленно.', en: 'With the phone in hand if going slowly.' }
        ], answer: 1,
        explain: { ru: 'Разговор допустим только без рук и без наушников; даже один наушник запрещён (RGC, ст. 18.2).', en: 'Talking is allowed only without hands and without earphones; even one earphone is banned (RGC art. 18.2).' } },
      { es: '¿Cuántos puntos pierde quien conduce sujetando el móvil con la mano?',
        prompt: { ru: 'Сколько баллов теряет водитель, который держит телефон в руке за рулём?', en: 'How many points does a driver lose for holding a phone while driving?' },
        options: [
          { es: '3 puntos.', ru: '3 балла.', en: '3 points.' },
          { es: '6 puntos.', ru: '6 баллов.', en: '6 points.' },
          { es: 'Ninguno, solo hay multa.', ru: 'Нисколько, только штраф.', en: 'None, just a fine.' }
        ], answer: 1,
        explain: { ru: 'С 2022 года телефон в руке — минус 6 баллов; иное ручное использование — минус 3 (LSV, прил. II, пп. 8 и 20).', en: 'Since 2022 holding a phone costs 6 points; other manual use costs 3 (LSV Annex II, items 8 and 20).' } },
      { es: 'Conducir con auriculares conectados a un reproductor de música...',
        prompt: { ru: 'Езда в наушниках, подключённых к музыкальному плееру…', en: 'Driving with earphones connected to a music player…' },
        options: [
          { es: 'Está permitido si el volumen es bajo.', ru: 'Разрешена, если громкость низкая.', en: 'Is allowed if the volume is low.' },
          { es: 'Está prohibido y se pierden 3 puntos.', ru: 'Запрещена, снимают 3 балла.', en: 'Is forbidden and costs 3 points.' },
          { es: 'Solo está prohibido en autopistas.', ru: 'Запрещена только на автомагистралях.', en: 'Is only forbidden on motorways.' }
        ], answer: 1,
        explain: { ru: 'Наушники, подключённые к источникам звука, запрещены на любой дороге — минус 3 балла (RGC, ст. 18.2; LSV, прил. II, п. 20).', en: 'Earphones connected to sound sources are banned on every road — 3 points (RGC art. 18.2; LSV Annex II, item 20).' } },
      { es: '¿Qué dispositivo de audio puede usar un motorista mientras conduce?',
        prompt: { ru: 'Каким аудиоустройством может пользоваться мотоциклист за рулём?', en: 'Which audio device may a motorcyclist use while riding?' },
        options: [
          { es: 'Un sistema inalámbrico homologado integrado en el casco para comunicarse o para navegar.', ru: 'Сертифицированной беспроводной гарнитурой в шлеме — для связи или навигации.', en: 'A certified wireless system built into the helmet, for intercom or navigation.' },
          { es: 'Auriculares de cable debajo del casco.', ru: 'Проводными наушниками под шлемом.', en: 'Wired earphones under the helmet.' },
          { es: 'El móvil sujeto entre el casco y la cabeza.', ru: 'Телефоном, зажатым между шлемом и головой.', en: 'A phone wedged between helmet and head.' }
        ], answer: 0,
        explain: { ru: 'Исключение — только встроенные в шлем сертифицированные беспроводные устройства для связи или навигации; телефон под шлемом — минус 3 балла (RGC, ст. 18.2.a; LSV, прил. II, п. 20).', en: 'The only exception is a certified wireless device built into the helmet for intercom or navigation; a phone under the helmet costs 3 points (RGC art. 18.2.a; LSV Annex II, item 20).' } },
      { es: 'Con el vehículo en movimiento, ¿qué pantalla puede usar el conductor?',
        prompt: { ru: 'Каким экраном может пользоваться водитель, когда машина движется?', en: 'Which screen may the driver use while the vehicle is moving?' },
        options: [
          { es: 'Una pantalla con acceso a internet.', ru: 'Экраном с выходом в интернет.', en: 'A screen with internet access.' },
          { es: 'Un reproductor de vídeo.', ru: 'Видеоплеером.', en: 'A video player.' },
          { es: 'El navegador GPS.', ru: 'Навигатором (GPS).', en: 'The GPS sat-nav.' }
        ], answer: 2,
        explain: { ru: 'Разрешены GPS, камера заднего хода и монитор посадки пассажиров; интернет, ТВ и видео — нет (RGC, ст. 18.1).', en: 'GPS, reversing cameras and boarding monitors are allowed; internet, TV and video are not (RGC art. 18.1).' } },
      { es: '¿Se puede llevar en el coche un detector de radares?',
        prompt: { ru: 'Можно ли возить в машине детектор радаров?', en: 'May you carry a radar detector in your car?' },
        options: [
          { es: 'Sí, si está apagado.', ru: 'Да, если он выключен.', en: 'Yes, if it is switched off.' },
          { es: 'No, está prohibido y supone perder 3 puntos.', ru: 'Нет, это запрещено, минус 3 балла.', en: 'No, it is banned and costs 3 points.' },
          { es: 'Sí, solo están prohibidos los inhibidores.', ru: 'Да, запрещены только глушилки.', en: 'Yes, only jammers are banned.' }
        ], answer: 1,
        explain: { ru: 'Запрещено даже возить детектор (−3 балла); глушитель — минус 6. Можно только приложения, показывающие места камер (RGC, ст. 18.3; LSV, прил. II, пп. 5, 21).', en: 'Even carrying a detector is banned (−3 points); a jammer costs 6. Only apps showing camera locations are allowed (RGC art. 18.3; LSV Annex II, items 5, 21).' } },
      { es: 'Un peatón camina por una carretera sin acera fuera de poblado. ¿Por dónde debe ir?',
        prompt: { ru: 'Пешеход идёт вне населённого пункта по дороге без тротуара. Где он должен идти?', en: 'A pedestrian is walking on a road with no footway outside a built-up area. Where should they walk?' },
        options: [
          { es: 'Por el arcén derecho.', ru: 'По правой обочине.', en: 'On the right hard shoulder.' },
          { es: 'Por el centro de la calzada.', ru: 'По середине проезжей части.', en: 'In the middle of the carriageway.' },
          { es: 'Por el arcén izquierdo.', ru: 'По левой обочине.', en: 'On the left hard shoulder.' }
        ], answer: 2,
        explain: { ru: 'По левой обочине, навстречу машинам, чтобы видеть их; справа — только если так безопаснее (RGC, ст. 122.1).', en: 'On the left shoulder, facing traffic so you can see it; the right only when safer (RGC art. 122.1).' } },
      { es: 'Un peatón que empuja una bicicleta por la carretera, ¿por qué lado debe ir?',
        prompt: { ru: 'Пешеход ведёт велосипед по дороге. С какой стороны ему идти?', en: 'A pedestrian pushing a bicycle along the road — which side should they use?' },
        options: [
          { es: 'Por la derecha.', ru: 'Справа.', en: 'On the right.' },
          { es: 'Por la izquierda.', ru: 'Слева.', en: 'On the left.' },
          { es: 'Por donde quiera.', ru: 'Где удобно.', en: 'Wherever they like.' }
        ], answer: 0,
        explain: { ru: 'Кто ведёт велосипед, мопед или СИМ, всегда идёт справа (RGC, ст. 122.2.a).', en: 'Anyone walking a bicycle, moped or PMV always keeps right (RGC art. 122.2.a).' } },
      { es: 'Un grupo de peatones dirigido por una persona, ¿por dónde circula en carretera?',
        prompt: { ru: 'Группа пешеходов под руководством одного человека — где она идёт по дороге?', en: 'A group of pedestrians led by one person — where do they walk on the road?' },
        options: [
          { es: 'Por la izquierda, en dos filas.', ru: 'Слева, в две колонны.', en: 'On the left, two abreast.' },
          { es: 'Por la derecha.', ru: 'Справа.', en: 'On the right.' },
          { es: 'Por el centro, para que se les vea.', ru: 'По центру, чтобы их было видно.', en: 'Down the middle, to be seen.' }
        ], answer: 1,
        explain: { ru: 'Организованная группа идёт по правой стороне (RGC, ст. 122.2.b).', en: 'An organised group keeps to the right (RGC art. 122.2.b).' } },
      { es: 'De noche, en vía interurbana, un peatón que va por la calzada debe llevar un elemento reflectante visible a...',
        prompt: { ru: 'Ночью на загородной дороге пешеход на проезжей части должен иметь светоотражающий элемент, видимый с расстояния…', en: 'At night on an interurban road, a pedestrian on the carriageway must wear a reflective item visible from…' },
        options: [
          { es: '50 metros.', ru: '50 метров.', en: '50 metres.' },
          { es: '100 metros.', ru: '100 метров.', en: '100 metres.' },
          { es: '150 metros.', ru: '150 метров.', en: '150 metres.' }
        ], answer: 2,
        explain: { ru: 'Минимум 150 м — такое же требование и к велосипедистам ночью вне города (RGC, ст. 123.1 и 118.2).', en: 'At least 150 m — the same rule as for cyclists at night outside towns (RGC arts. 123.1 and 118.2).' } },
      { es: 'De noche, un grupo de peatones en carretera debe llevar luces de qué color hacia atrás?',
        prompt: { ru: 'Ночью группа пешеходов на дороге несёт фонари. Какого цвета свет должен быть направлен назад?', en: 'At night a group of pedestrians on the road carries lights. What colour must face backwards?' },
        options: [
          { es: 'Rojo.', ru: 'Красный.', en: 'Red.' },
          { es: 'Blanco.', ru: 'Белый.', en: 'White.' },
          { es: 'Amarillo.', ru: 'Жёлтый.', en: 'Yellow.' }
        ], answer: 0,
        explain: { ru: 'Вперёд — белый или жёлтый, назад — красный, со стороны центра дороги (RGC, ст. 123.2).', en: 'White or yellow forward, red backward, on the side nearest the centre (RGC art. 123.2).' } },
      { es: '¿Cómo deben pasar los peatones una glorieta sin paso de peatones habilitado?',
        prompt: { ru: 'Как пешеходам пройти круговой перекрёсток, если в центре нет пешеходного перехода?', en: 'How should pedestrians get past a roundabout with no crossing through it?' },
        options: [
          { es: 'Atravesándola por el centro.', ru: 'Пересечь через центр.', en: 'Cross through the middle.' },
          { es: 'Rodeándola.', ru: 'Обойти её.', en: 'Walk round it.' },
          { es: 'Por la calzada, en el sentido de los coches.', ru: 'По проезжей части, по ходу машин.', en: 'Along the carriageway, with the traffic.' }
        ], answer: 1,
        explain: { ru: 'Площади и кольца пешеходы обходят, а не пересекают по проезжей части (RGC, ст. 124.4).', en: 'Pedestrians go round squares and roundabouts rather than across the carriageway (RGC art. 124.4).' } },
      { es: 'En un paso de peatones sin semáforo, ¿cuándo debe entrar el peatón en la calzada?',
        prompt: { ru: 'На нерегулируемом пешеходном переходе когда пешеходу можно выходить на проезжую часть?', en: 'At a zebra crossing without lights, when should a pedestrian step onto the carriageway?' },
        options: [
          { es: 'En cualquier momento, porque tiene preferencia.', ru: 'В любой момент, ведь у него приоритет.', en: 'At any time, since they have priority.' },
          { es: 'Solo cuando no venga ningún coche a menos de 500 metros.', ru: 'Только если ближе 500 м нет ни одной машины.', en: 'Only when no car is within 500 m.' },
          { es: 'Cuando la distancia y la velocidad de los vehículos permitan hacerlo con seguridad.', ru: 'Когда расстояние и скорость машин позволяют сделать это безопасно.', en: 'When the distance and speed of vehicles let them do it safely.' }
        ], answer: 2,
        explain: { ru: 'Приоритет у пешехода есть, но выходить нужно, только когда машины успевают остановиться (RGC, ст. 124.1.c).', en: 'Pedestrians have priority but must step out only when vehicles can stop in time (RGC art. 124.1.c).' } },
      { es: '¿Pueden los peatones circular por una autopista?',
        prompt: { ru: 'Могут ли пешеходы ходить по автомагистрали?', en: 'May pedestrians walk on a motorway?' },
        options: [
          { es: 'Sí, por el arcén.', ru: 'Да, по обочине.', en: 'Yes, on the hard shoulder.' },
          { es: 'No, salvo en casos de emergencia regulados.', ru: 'Нет, кроме оговорённых экстренных случаев.', en: 'No, except in regulated emergencies.' },
          { es: 'Sí, si llevan chaleco reflectante.', ru: 'Да, если в светоотражающем жилете.', en: 'Yes, if wearing a reflective vest.' }
        ], answer: 1,
        explain: { ru: 'Пешеходам на autopistas и autovías нельзя (и «голосовать» тоже), кроме случаев аварии или поломки по ст. 130 (RGC, ст. 125).', en: 'Pedestrians are banned from autopistas and autovías (hitch-hiking too), except after a crash or breakdown under art. 130 (RGC art. 125).' } },
      { es: '¿Cuándo tiene prioridad de paso una ambulancia?',
        prompt: { ru: 'Когда у скорой помощи есть приоритет?', en: 'When does an ambulance have priority?' },
        options: [
          { es: 'Siempre, aunque no esté de servicio.', ru: 'Всегда, даже не на вызове.', en: 'Always, even off duty.' },
          { es: 'Solo dentro de poblado.', ru: 'Только в населённом пункте.', en: 'Only in built-up areas.' },
          { es: 'En servicio urgente, avisando con la señal luminosa y la acústica a la vez.', ru: 'На срочном вызове, со включёнными маячком и сиреной одновременно.', en: 'On an urgent call, with beacon and siren used together.' }
        ], answer: 2,
        explain: { ru: 'Приоритетным транспорт становится только на срочном вызове с маячком и сиреной (маячок отдельно — если это никому не опасно) (RGC, ст. 68.2).', en: 'A vehicle is priority only on an urgent call with beacon and siren (beacon alone where that is safe) (RGC art. 68.2).' } },
      { es: 'Oyes la sirena de un vehículo prioritario que se acerca. ¿Qué haces?',
        prompt: { ru: 'Ты слышишь приближающуюся сирену спецмашины. Что делать?', en: 'You hear the siren of an approaching emergency vehicle. What do you do?' },
        options: [
          { es: 'Facilitar el paso apartándome a la derecha o deteniéndome si hace falta.', ru: 'Уступить: прижаться вправо или при необходимости остановиться.', en: 'Make way by pulling right, or stopping if needed.' },
          { es: 'Acelerar para salir de su camino.', ru: 'Ускориться, чтобы уйти с её пути.', en: 'Speed up to get out of its way.' },
          { es: 'Frenar en seco en mi carril.', ru: 'Резко затормозить на своей полосе.', en: 'Brake hard in my lane.' }
        ], answer: 0,
        explain: { ru: 'Нужно облегчить проезд — обычно прижаться вправо или остановиться; на магистрали в пробке — коридор (RGC, ст. 69 и 32).', en: 'Help it through — usually by pulling right or stopping; in a motorway jam, form a corridor (RGC arts. 69 and 32).' } },
      { es: 'Un coche de policía detrás de ti enciende una luz roja intermitente hacia delante. ¿Qué debes hacer?',
        prompt: { ru: 'Полицейская машина позади включила мигающий красный свет вперёд. Что делать?', en: 'A police car behind you switches on a flashing red light facing forward. What should you do?' },
        options: [
          { es: 'Dejarle pasar y seguir mi camino.', ru: 'Пропустить её и ехать дальше.', en: 'Let it pass and carry on.' },
          { es: 'Detenerme a la derecha, delante del vehículo policial, y quedarme dentro.', ru: 'Остановиться справа перед полицейской машиной и оставаться внутри.', en: 'Stop on the right in front of the police car and stay inside.' },
          { es: 'Parar y salir del coche con la documentación.', ru: 'Остановиться и выйти из машины с документами.', en: 'Stop and get out with my documents.' }
        ], answer: 1,
        explain: { ru: 'Красный свет вперёд означает «остановитесь»: справа, перед полицией, в безопасном месте, не выходя из машины (RGC, ст. 69).', en: 'A forward red light means «stop»: on the right, in front of the police, somewhere safe, staying in the car (RGC art. 69).' } },
      { es: 'Llevas a un herido grave en tu turismo particular. ¿Cómo debes avisar?',
        prompt: { ru: 'Ты везёшь тяжело раненного в своей легковой машине. Как предупредить других?', en: 'You are carrying a badly injured person in your private car. How should you warn others?' },
        options: [
          { es: 'Con las luces de carretera fijas.', ru: 'Постоянно включённым дальним светом.', en: 'With main-beam headlights kept on.' },
          { es: 'No hace falta avisar: ya tengo prioridad.', ru: 'Предупреждать не нужно: у меня уже приоритет.', en: 'No need to warn: I already have priority.' },
          { es: 'Con el claxon de forma intermitente y la luz de emergencia o un pañuelo.', ru: 'Прерывистым гудком и аварийкой или платком.', en: 'Intermittent horn and hazard lights, or waving a cloth.' }
        ], answer: 2,
        explain: { ru: 'Обычная машина на экстренном выезде — гудок с перерывами и аварийка или платок; приоритета нет, правила соблюдать (RGC, ст. 70).', en: 'An ordinary car on an emergency uses an intermittent horn plus hazards or a cloth; it has no priority and must obey the rules (RGC art. 70).' } },
      { es: '¿Qué señales deben respetar siempre los conductores de vehículos prioritarios?',
        prompt: { ru: 'Что водители спецмашин с приоритетом обязаны соблюдать всегда?', en: 'What must emergency-vehicle drivers always obey?' },
        options: [
          { es: 'Las órdenes y señales de los agentes.', ru: 'Команды и сигналы регулировщиков (агентов).', en: 'The orders and signals of traffic officers.' },
          { es: 'Los límites de velocidad.', ru: 'Ограничения скорости.', en: 'Speed limits.' },
          { es: 'Los semáforos.', ru: 'Светофоры.', en: 'Traffic lights.' }
        ], answer: 0,
        explain: { ru: 'Убедившись, что это безопасно, они могут не соблюдать многие правила, но команды агентов обязательны всегда (RGC, ст. 68.1).', en: 'Having made sure it is safe they may disregard many rules, but officers’ orders are always binding (RGC art. 68.1).' } },
      { es: 'Si oye la sirena de un vehículo prioritario, ¿qué debe hacer un peatón que cruza la calzada?',
        prompt: { ru: 'Пешеход переходит дорогу и слышит сирену спецмашины. Что ему делать?', en: 'A pedestrian crossing the road hears an emergency siren. What should they do?' },
        options: [
          { es: 'Pararse en medio de la calzada.', ru: 'Остановиться посреди дороги.', en: 'Stop in the middle of the road.' },
          { es: 'Dejar libre la calzada y quedarse en un refugio o zona peatonal.', ru: 'Освободить проезжую часть и встать на островок или тротуар.', en: 'Clear the carriageway and wait on an island or the pavement.' },
          { es: 'Seguir cruzando a su ritmo.', ru: 'Спокойно продолжать переход.', en: 'Keep crossing at their own pace.' }
        ], answer: 1,
        explain: { ru: 'Пешеходы должны освободить проезжую часть и остаться на островке или тротуаре (RGC, ст. 122.5).', en: 'Pedestrians must clear the carriageway and stay on an island or pavement (RGC art. 122.5).' } },
      { es: 'Presencias un accidente con heridos y aún no ha llegado nadie. ¿Qué obligación tienes?',
        prompt: { ru: 'Ты стал свидетелем ДТП с ранеными, помощь ещё не приехала. Что ты обязан сделать?', en: 'You witness a crash with injured people and no one has arrived yet. What must you do?' },
        options: [
          { es: 'Ninguna, porque no estoy implicado.', ru: 'Ничего, ведь я не участник.', en: 'Nothing, since I am not involved.' },
          { es: 'Solo hacer fotos para la policía.', ru: 'Только сфотографировать для полиции.', en: 'Just take photos for the police.' },
          { es: 'Auxiliar a las víctimas o pedir auxilio y evitar nuevos peligros.', ru: 'Помочь пострадавшим или вызвать помощь и не допустить новых опасностей.', en: 'Help the victims or call for help, and prevent further danger.' }
        ], answer: 2,
        explain: { ru: 'Помогать или вызывать помощь обязаны и участники, и свидетели ДТП (RGC, ст. 129).', en: 'Both those involved and witnesses must help or call for help (RGC art. 129).' } },
      { es: 'Tu coche se ha averiado en la autovía y no puede seguir. Si hay un lugar seguro fuera de la vía, ¿cómo sales?',
        prompt: { ru: 'Машина сломалась на autovía и не может ехать. Рядом есть безопасное место вне дороги. Как выходить?', en: 'Your car has broken down on an autovía and cannot move. There is a safe place off the road. How do you get out?' },
        options: [
          { es: 'Por el lado contrario al tráfico, sin quedarme en los carriles ni en el arcén.', ru: 'Со стороны, противоположной потоку, не оставаясь на полосах и обочине.', en: 'On the side away from traffic, not staying on the lanes or shoulder.' },
          { es: 'Por el lado del conductor, para avisar a los demás.', ru: 'Со стороны водителя, чтобы предупредить остальных.', en: 'On the driver’s side, to warn others.' },
          { es: 'No salgo nunca del coche.', ru: 'Никогда не выхожу из машины.', en: 'I never get out of the car.' }
        ], answer: 0,
        explain: { ru: 'Выходить со стороны, противоположной потоку, и уйти за пределы проезжей части; если выйти опасно — сидеть пристёгнутым (RGC, ст. 130.3).', en: 'Get out away from traffic and leave the road area; if that is unsafe, stay inside belted (RGC art. 130.3).' } },
      { es: '¿Quién debe llevar casco en una motocicleta?',
        prompt: { ru: 'Кто должен быть в шлеме на мотоцикле?', en: 'Who must wear a helmet on a motorcycle?' },
        options: [
          { es: 'Solo el conductor.', ru: 'Только водитель.', en: 'Only the rider.' },
          { es: 'El conductor y el pasajero, en todo tipo de vías.', ru: 'Водитель и пассажир, на любой дороге.', en: 'Rider and passenger, on every road.' },
          { es: 'Ambos, pero solo fuera de poblado.', ru: 'Оба, но только вне населённого пункта.', en: 'Both, but only outside built-up areas.' }
        ], answer: 1,
        explain: { ru: 'Застёгнутый сертифицированный шлем — водителю и пассажиру, на всех дорогах (RGC, ст. 118.1).', en: 'A fastened approved helmet for rider and passenger, on all roads (RGC art. 118.1).' } },
      { es: '¿Dónde es obligatorio el casco para un ciclista adulto?',
        prompt: { ru: 'Где взрослому велосипедисту обязательно надевать шлем?', en: 'Where must an adult cyclist wear a helmet?' },
        options: [
          { es: 'En todas las vías.', ru: 'На всех дорогах.', en: 'On all roads.' },
          { es: 'Solo en las ciudades.', ru: 'Только в городах.', en: 'Only in towns.' },
          { es: 'En las vías interurbanas.', ru: 'На загородных дорогах.', en: 'On interurban roads.' }
        ], answer: 2,
        explain: { ru: 'Взрослым — вне населённых пунктов; детям до 16 лет — везде (RGC, ст. 118.2).', en: 'For adults, outside built-up areas; for under-16s, everywhere (RGC art. 118.2).' } },
      { es: '¿Por cuál de estas vías no puede circular un patinete eléctrico?',
        prompt: { ru: 'По какой из этих дорог нельзя ехать на электросамокате?', en: 'Which of these roads may an e-scooter not use?' },
        options: [
          { es: 'Por un carril bici.', ru: 'По велополосе.', en: 'A cycle lane.' },
          { es: 'Por una travesía.', ru: 'По travesía (участку трассы через посёлок).', en: 'A travesía (main road through a village).' },
          { es: 'Por una calle urbana de un carril por sentido.', ru: 'По городской улице с одной полосой в каждую сторону.', en: 'An urban street with one lane each way.' }
        ], answer: 1,
        explain: { ru: 'СИМ запрещены на autopistas, autovías, travesías, загородных дорогах и в городских тоннелях (RGC, ст. 38.4).', en: 'PMVs are banned from autopistas, autovías, travesías, interurban roads and urban tunnels (RGC art. 38.4).' } },
      { es: '¿Es obligatorio el casco para el conductor de un vehículo de movilidad personal?',
        prompt: { ru: 'Обязан ли водитель СИМ (самоката) надевать шлем?', en: 'Must a PMV (e-scooter) rider wear a helmet?' },
        options: [
          { es: 'Sí, casco homologado o certificado bien abrochado.', ru: 'Да, сертифицированный шлем, застёгнутый.', en: 'Yes, an approved or certified helmet, fastened.' },
          { es: 'Solo si es menor de 16 años.', ru: 'Только если ему меньше 16 лет.', en: 'Only if under 16.' },
          { es: 'No, solo se recomienda.', ru: 'Нет, только рекомендуется.', en: 'No, it is only advised.' }
        ], answer: 0,
        explain: { ru: 'Для СИМ шлем обязателен всем, без исключения по возрасту (RGC, ст. 118.3).', en: 'A helmet is compulsory for all PMV riders, whatever their age (RGC art. 118.3).' } },
      { es: '¿Desde qué edad se puede conducir un vehículo de movilidad personal?',
        prompt: { ru: 'С какого возраста можно управлять СИМ?', en: 'From what age may you ride a PMV?' },
        options: [
          { es: 'Desde los 12 años.', ru: 'С 12 лет.', en: 'From 12.' },
          { es: 'Desde los 15 años.', ru: 'С 15 лет.', en: 'From 15.' },
          { es: 'Desde los 18 años.', ru: 'С 18 лет.', en: 'From 18.' }
        ], answer: 1,
        explain: { ru: 'Младше 15 лет управлять СИМ нельзя (RGC, ст. 155.3).', en: 'Under-15s may not ride a PMV (RGC art. 155.3).' } },
      { es: '¿Qué indica esta señal?',
        prompt: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Entrada prohibida a ciclomotores.', ru: 'Въезд мопедам запрещён.', en: 'No entry for mopeds.' },
          { es: 'Vía reservada para patinetes.', ru: 'Дорога только для самокатов.', en: 'Road reserved for scooters.' },
          { es: 'Entrada prohibida a vehículos de movilidad personal.', ru: 'Въезд СИМ запрещён.', en: 'No entry for personal mobility vehicles.' }
        ], answer: 2,
        explain: { ru: 'R-118 запрещает въезд СИМ. Для мопедов — R-105 (RGC, прил. I — каталог знаков).', en: 'R-118 bans PMVs. The moped ban is R-105 (RGC, Annex I — sign catalogue).' },
        sign: 'R-118' },
      { es: '¿Qué prohíbe esta señal?',
        prompt: { ru: 'Что запрещает этот знак?', en: 'What does this sign prohibit?' },
        options: [
          { es: 'La entrada de peatones.', ru: 'Проход пешеходов.', en: 'Entry for pedestrians.' },
          { es: 'Parar junto a un paso de peatones.', ru: 'Остановку у перехода.', en: 'Stopping by a crossing.' },
          { es: 'Adelantar a peatones.', ru: 'Обгон пешеходов.', en: 'Overtaking pedestrians.' }
        ], answer: 0,
        explain: { ru: 'R-116 — проход пешеходам запрещён (RGC, прил. I — каталог знаков).', en: 'R-116 — no entry for pedestrians (RGC, Annex I — sign catalogue).' },
        sign: 'R-116' },
      { es: '¿Qué edad mínima debe tener la persona que conduce ganado por una vía?',
        prompt: { ru: 'Сколько лет минимум должно быть человеку, который гонит скот по дороге?', en: 'What is the minimum age of a person driving livestock along a road?' },
        options: [
          { es: 'Más de 14 años.', ru: 'Больше 14 лет.', en: 'Over 14.' },
          { es: 'Más de 16 años.', ru: 'Больше 16 лет.', en: 'Over 16.' },
          { es: 'Más de 18 años.', ru: 'Больше 18 лет.', en: 'Over 18.' }
        ], answer: 2,
        explain: { ru: 'Животных ведёт минимум один человек старше 18 лет, способный их контролировать (RGC, ст. 127.1).', en: 'Animals must be led by at least one person over 18 able to control them (RGC art. 127.1).' } },
      { es: 'Un rebaño que circula por la carretera, ¿qué parte de la calzada puede ocupar como máximo?',
        prompt: { ru: 'Какую часть проезжей части максимум может занимать стадо на дороге?', en: 'At most, how much of the carriageway may a herd occupy?' },
        options: [
          { es: 'La mitad derecha.', ru: 'Правую половину.', en: 'The right half.' },
          { es: 'Toda la calzada.', ru: 'Всю проезжую часть.', en: 'The whole carriageway.' },
          { es: 'Solo el arcén izquierdo.', ru: 'Только левую обочину.', en: 'Only the left shoulder.' }
        ], answer: 0,
        explain: { ru: 'Стадо идёт у правого края и никогда не занимает больше правой половины (RGC, ст. 127.1.c).', en: 'A herd keeps to the right edge and never takes more than the right half (RGC art. 127.1.c).' } },
      { es: '¿Pueden circular animales por una autovía?',
        prompt: { ru: 'Могут ли животные передвигаться по autovía?', en: 'May animals use an autovía?' },
        options: [
          { es: 'Sí, por el arcén derecho.', ru: 'Да, по правой обочине.', en: 'Yes, on the right shoulder.' },
          { es: 'No, está prohibido, también los vehículos de tracción animal.', ru: 'Нет, запрещено, как и гужевые повозки.', en: 'No, it is banned, as are horse-drawn vehicles.' },
          { es: 'Sí, de día y guiados por un adulto.', ru: 'Да, днём и под присмотром взрослого.', en: 'Yes, by day and led by an adult.' }
        ], answer: 1,
        explain: { ru: 'На autopistas и autovías животные и гужевой транспорт запрещены (RGC, ст. 128).', en: 'Animals and animal-drawn vehicles are banned from autopistas and autovías (RGC art. 128).' } },
      { es: 'Esta señal advierte de...',
        prompt: { ru: 'Этот знак предупреждает о…', en: 'This sign warns of…' },
        options: [
          { es: 'Paso de animales en libertad.', ru: 'Диких животных.', en: 'Wild animals crossing.' },
          { es: 'Paso de animales domésticos o ganado.', ru: 'Перегоне скота или домашних животных.', en: 'Domestic animals or livestock crossing.' },
          { es: 'Prohibido el paso de animales de montura.', ru: 'Запрете для верховых животных.', en: 'No riding animals.' }
        ], answer: 1,
        explain: { ru: 'P-23 — домашние животные или скот (корова на знаке). Дикие животные — P-24 (олень) (RGC, прил. I — каталог знаков).', en: 'P-23 — domestic animals or livestock (a cow). Wild animals are P-24 (a deer) (RGC, Annex I — sign catalogue).' },
        sign: 'P-23' },
      { es: 'Un vehículo que trabaja en la conservación de la carretera lleva encendida una luz amarilla. ¿Qué significa?',
        prompt: { ru: 'Машина дорожной службы работает с включённым жёлтым маячком. Что это значит?', en: 'A road-maintenance vehicle is working with a yellow beacon on. What does it mean?' },
        options: [
          { es: 'Que tiene prioridad de paso.', ru: 'Что у неё приоритет.', en: 'That it has priority.' },
          { es: 'Que hay que detenerse detrás de él.', ru: 'Что за ней нужно остановиться.', en: 'That you must stop behind it.' },
          { es: 'Que avisa de su presencia, pero no tiene prioridad.', ru: 'Что она предупреждает о себе, но приоритета не имеет.', en: 'That it signals its presence but has no priority.' }
        ], answer: 2,
        explain: { ru: 'Жёлтый маячок (V-2) только привлекает внимание: приоритета не даёт (учебник DGT, тема 4; RGC, ст. 71 и 113).', en: 'The yellow beacon (V-2) only draws attention; it gives no priority (DGT manual, topic 4; RGC arts. 71 and 113).' } }
    ]
  }
]);
