// DGT · theory, topic 09: The road. Sources: DGT «Teórica abreviada, lectura fácil» (2025),
// DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-via', level: 'DGT',
    title: { ru: 'Дорога и полосы', en: 'The road and its lanes' },
    summary: { ru: 'Где ехать по проезжей части, какие полосы для кого, обочина, автомагистрали, въезд и выезд, тоннели и переезды.',
               en: 'Where to drive on the carriageway, who uses which lane, the hard shoulder, motorways, slip roads, tunnels and level crossings.' },
    hero: { es: 'La <b>vía</b>', sub: { ru: 'Полосы, обочина, магистрали и тоннели', en: 'Lanes, hard shoulder, motorways and tunnels' } },
    tabs: [
      { id: 'parts', label: { ru: 'Части дороги', en: 'Road parts' }, blocks: [
        { type: 'text', body: {
          ru: ['Основные термины (calzada, carril, arcén, plataforma, autopista, autovía) — в теме «Определения». Здесь — другие участки дороги, которые встречаются в вопросах.'],
          en: ['The basic terms (calzada, carril, arcén, plataforma, autopista, autovía) are in the «Definitions» topic. Here are the other road features that come up in questions.'] } },
        { type: 'table', heading: { ru: 'Участки дороги', en: 'Road features' },
          head: ['', { ru: 'Что это', en: 'What it is' }],
          rows: [
            ['cambio de rasante', { ru: 'перелом профиля (вершина)', en: 'crest / change of gradient' }],
            ['curva de visibilidad reducida', { ru: 'поворот с плохим обзором', en: 'bend with poor visibility' }],
            ['apartadero', { ru: 'карман на проезжей части', en: 'lay-by / passing place' }],
            ['zona de frenado de emergencia', { ru: 'аварийный улавливатель', en: 'runaway-truck escape lane' }],
            ['cebreado', { ru: 'штриховка островка', en: 'hatched marking' }],
            ['vía de servicio', { ru: 'дублёр вдоль трассы', en: 'parallel service road' }]
          ] },
        { type: 'rules', heading: { ru: 'Направление и сторона', en: 'Direction and way' }, items: [
          { color: 'blue', title: { ru: 'Направление', en: 'Direction' }, es: 'dirección',
            body: { ru: 'Линия между двумя пунктами. Две машины на одной дороге навстречу друг другу едут в одном <b>направлении</b>…',
                    en: 'The line joining two places. Two cars on the same road going opposite ways share the same <b>dirección</b>…' } },
          { color: 'amber', title: { ru: 'Сторона движения', en: 'Way of travel' }, es: 'sentido',
            body: { ru: '…но в разных <b>sentidos</b> (туда и обратно). Дороги бывают одностороннего и двустороннего движения.',
                    en: '…but in different <b>sentidos</b> (there and back). Roads are one-way or two-way.' } }
        ] },
        { type: 'table', heading: { ru: 'Цвет дороги на картах DGT', en: 'Road colour on DGT maps' },
          head: [{ ru: 'Цвет', en: 'Colour' }, { ru: 'Состояние', en: 'Status' }],
          rows: [
            [{ ru: 'белый', en: 'white' }, { ru: 'движение нормальное', en: 'traffic normal' }],
            [{ ru: 'зелёный', en: 'green' }, { ru: 'ниже разрешённой скорости', en: 'below the speed limit' }],
            [{ ru: 'жёлтый', en: 'yellow' }, { ru: 'остановки, медленно', en: 'stop-start, slow' }],
            [{ ru: 'красный', en: 'red' }, { ru: 'пробки', en: 'heavy congestion' }],
            [{ ru: 'чёрный', en: 'black' }, { ru: 'дорога закрыта', en: 'road closed' }]
          ] },
        { type: 'signs', heading: { ru: 'Знаки', en: 'Signs' }, items: ['S-11', 'S-11a', 'P-25', 'S-34', 'S-16'] },
        { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
          { es: 'No adelantes en un <b>cambio de rasante</b>.', ru: 'Не обгоняй на вершине подъёма.', en: 'Do not overtake on a crest.' },
          { es: 'Vamos en la misma dirección, pero en <b>sentido contrario</b>.', ru: 'Мы едем по одному направлению, но навстречу друг другу.', en: 'We are on the same route but going opposite ways.' }
        ] }
      ] },
      { id: 'position', label: { ru: 'Позиция', en: 'Position' }, blocks: [
        { type: 'rules', heading: { ru: 'Общее правило', en: 'General rule' }, items: [
          { color: 'blue', title: { ru: 'Держись правее', en: 'Keep right' }, es: 'por la derecha, cerca del borde',
            body: { ru: 'Езда по правой стороне, как можно ближе к краю проезжей части, особенно в поворотах и на вершинах с плохим обзором. Там левая половина должна быть <b>полностью свободной</b>.',
                    en: 'Drive on the right, as close as possible to the edge, especially on blind bends and crests. There the left half must be left <b>completely clear</b>.' } },
          { color: 'coral', title: { ru: 'По встречной', en: 'Wrong side' }, es: 'sentido contrario: muy grave',
            body: { ru: 'Езда по встречной полосе двусторонней дороги — очень серьёзное нарушение, <b>минус 6 баллов</b>.',
                    en: 'Driving on the wrong side of a two-way road is a very serious offence: <b>6 points</b>.' } },
          { color: 'amber', title: { ru: 'Островки', en: 'Islands' }, es: 'por la derecha del refugio',
            body: { ru: 'Островок или refugio объезжают справа. На дороге с односторонним движением — с любой стороны.',
                    en: 'Pass an island or refugio on its right. On a one-way road, either side.' } },
          { color: 'teal', title: { ru: 'Несколько проезжих частей', en: 'Several carriageways' }, es: 'la calzada de la derecha',
            body: { ru: 'Если проезжих частей две — по правой. Если три — средняя может быть одно- или двусторонней, боковые — односторонние.',
                    en: 'With two carriageways, use the right one. With three, the middle one may be one- or two-way, the outer ones are one-way.' } }
        ] },
        { type: 'table', heading: { ru: 'Двусторонняя дорога', en: 'Two-way road' },
          head: [{ ru: 'Полос всего', en: 'Total lanes' }, { ru: 'Где ехать', en: 'Where to drive' }],
          rows: [
            ['2', { ru: 'по правой', en: 'in the right lane' }],
            ['3', { ru: 'по правой; левую — никогда', en: 'right; never the left one' }]
          ] },
        { type: 'text', color: 'blue', body: {
          ru: 'На двусторонней дороге с <b>тремя</b> полосами (разделены прерывистыми линиями) средняя — <b>только для обгона и поворота налево</b>. Крайняя левая — для встречных.',
          en: 'On a two-way road with <b>three</b> lanes (separated by broken lines) the middle lane is <b>only for overtaking and turning left</b>. The far-left lane belongs to oncoming traffic.' } },
        { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
          { es: 'Circula <b>lo más cerca posible del borde</b> derecho.', ru: 'Держись как можно ближе к правому краю.', en: 'Keep as close as you can to the right edge.' },
          { es: 'El <b>carril central</b> es para adelantar o girar a la izquierda.', ru: 'Средняя полоса — для обгона или поворота налево.', en: 'The centre lane is for overtaking or turning left.' }
        ] }
      ] },
      { id: 'lanes', label: { ru: 'Полосы', en: 'Lanes' }, blocks: [
        { type: 'figure', src: 'img/dgt/via-carriles.svg',
          alt: { ru: 'Три полосы в одном направлении вне города: грузовик и машина справа, обгоняющая машина в средней полосе, левая полоса свободна.',
                 en: 'Three lanes one way outside town: a lorry and a car on the right, an overtaking car in the middle lane, the left lane free.' },
          caption: { ru: 'Вне города — <b>правая полоса</b>, остальные — когда этого требуют дорога или движение. Грузовики > 3500 кг и составы длиннее 7 м при 3+ полосах — только правая и соседняя.',
                     en: 'Outside towns use the <b>right lane</b>; the others when road or traffic require. With 3+ lanes, lorries over 3,500 kg and combinations over 7 m use only the right lane and the next one.' } },
        { type: 'rules', heading: { ru: 'Несколько полос в одну сторону', en: 'Several lanes one way' }, items: [
          { color: 'blue', label: { ru: 'Вне города', en: 'Outside towns' }, title: { ru: 'Правая полоса', en: 'Right lane' }, es: 'el carril de la derecha',
            body: { ru: 'Обычно — крайняя правая. Остальные можно использовать, когда этого требуют обстановка или дорога, не мешая тем, кто едет сзади.',
                    en: 'Normally the far-right lane. Others may be used when traffic or the road make it advisable, without holding up anyone behind.' } },
          { color: 'blue', label: { ru: 'Вне города', en: 'Outside towns' }, title: { ru: 'Тяжёлые и длинные', en: 'Heavy and long vehicles' }, es: 'MMA > 3.500 kg · más de 7 m',
            body: { ru: 'При 3+ полосах в одну сторону грузовики и фургоны > 3500 кг, спецмашины и составы длиннее 7 м — правая полоса и максимум <b>соседняя</b>.',
                    en: 'With 3+ lanes one way, lorries and vans over 3,500 kg, special vehicles and combinations over 7 m use the right lane and at most the <b>next one</b>.' } },
          { color: 'teal', label: { ru: 'В городе', en: 'In town' }, title: { ru: 'Любая подходящая', en: 'Whichever suits' }, es: 'el que mejor convenga a su destino',
            body: { ru: 'Если полосы размечены линиями — та, что удобнее для маршрута. Перестраиваться только для поворота, обгона, остановки или парковки. Без разметки — держаться правее. Велосипеды и мопеды — всегда справа.',
                    en: 'With marked lanes, use whichever suits your route; leave it only to turn, overtake, stop or park. Without markings, keep right. Bicycles and mopeds always keep right.' } },
          { color: 'purple', title: { ru: 'Подсчёт полос', en: 'Counting lanes' }, es: 'no cuentan los carriles reservados',
            body: { ru: 'При подсчёте полос не учитываются полосы для автобусов, VAO, разгона и торможения.',
                    en: 'Bus, HOV, acceleration and deceleration lanes are not counted.' } }
        ] },
        { type: 'rules', heading: { ru: 'Особые полосы', en: 'Special lanes' }, items: [
          { color: 'amber', title: { ru: 'Автобусная полоса', en: 'Bus lane' }, es: 'carril bus · BUS TAXI',
            body: { ru: 'Только для автобусов; такси — если на полосе написано TAXI. Отделена широкой сплошной линией.',
                    en: 'Buses only; taxis too if TAXI is written on it. Separated by a wide solid line.' } },
          { color: 'amber', title: { ru: 'Полоса VAO', en: 'HOV lane' }, es: 'vehículos de alta ocupación',
            body: { ru: 'Мотоциклы, легковые и mixtos adaptables (MMA ≤ 3500 кг, только люди) с нужным числом пассажиров. Без пассажиров — машины людей с инвалидностью (знак V-15 или карта), автобусы > 3500 кг, спецслужбы. Легковой с прицепом — нельзя.',
                    en: 'Motorcycles, cars and mixtos adaptables (MMA ≤ 3,500 kg, people only) with the required number of occupants. Driver alone: disabled drivers (V-15 or blue badge), buses over 3,500 kg, emergency services. Cars towing a trailer — no.' } },
          { color: 'coral', title: { ru: 'Реверсивная', en: 'Reversible lane' }, es: 'carril reversible',
            body: { ru: 'С двух сторон <b>двойные прерывистые</b> линии; направление меняют светофоры над полосой. Ближний свет включён днём и ночью.',
                    en: '<b>Double broken lines</b> on both sides; lane signals set the direction. Dipped headlights on day and night.' } },
          { color: 'coral', title: { ru: 'Против обычного направления', en: 'Contraflow lane' }, es: 'carril en sentido contrario al habitual',
            body: { ru: 'Только мотоциклы и легковые (без прицепа). Ближний свет днём и ночью, <b>60–80 км/ч</b>, перестраиваться нельзя, даже для обгона.',
                    en: 'Motorcycles and cars only (no trailer). Dipped lights day and night, <b>60–80 km/h</b>, no lane changes, not even to overtake.' } },
          { color: 'coral', title: { ru: 'Дополнительная временная', en: 'Temporary extra lane' }, es: 'carril adicional circunstancial',
            body: { ru: 'Сделана на двусторонней дороге за счёт обочин и временного ограждения. Тоже <b>60–80 км/ч</b> и ближний свет; ограждение не задевать.',
                    en: 'Created on a two-way road using the shoulders and temporary cones. Also <b>60–80 km/h</b> with dipped lights; do not touch the cones.' } }
        ] },
        { type: 'signs', heading: { ru: 'Знаки полос', en: 'Lane signs' }, items: ['S-50a', 'S-51a', 'S-51b', 'S-52', 'S-53', 'S-60a'] },
        { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
          { es: 'Vuelve al <b>carril derecho</b> después de adelantar.', ru: 'Вернись в правую полосу после обгона.', en: 'Go back to the right lane after overtaking.' },
          { es: 'Por el <b>carril VAO</b> solo podemos ir si somos dos o más.', ru: 'По полосе VAO можно, только если нас двое или больше.', en: 'We can only use the HOV lane if there are two or more of us.' },
          { es: 'En el <b>carril reversible</b> llevo la luz de cruce también de día.', ru: 'На реверсивной полосе я включаю ближний свет и днём.', en: 'In the reversible lane I keep dipped lights on by day too.' }
        ] }
      ] },
      { id: 'shoulder', label: { ru: 'Обочина', en: 'Shoulder' }, blocks: [
        { type: 'rules', heading: { ru: 'Кто едет по обочине', en: 'Who rides on the shoulder' }, items: [
          { color: 'amber', title: { ru: 'Обязаны', en: 'Must use it' }, es: 'ciclos · ciclomotores · tracción animal',
            body: { ru: 'Если для них нет своей дороги: велосипеды, мопеды, гужевые повозки, коляски для людей с ограниченной подвижностью, спецмашины ≤ 3500 кг и машины сопровождения велосипедистов — по правой обочине. Если её нет — по необходимой части полосы.',
                    en: 'If there is no track for them: bicycles, mopeds, horse-drawn vehicles, mobility vehicles, special vehicles ≤ 3,500 kg and cyclist support vehicles use the right shoulder, or the minimum part of the lane if there is none.' } },
          { color: 'amber', title: { ru: 'Машина в беде', en: 'Vehicle in trouble' }, es: 'velocidad anormalmente reducida',
            body: { ru: 'Машина до 3500 кг, которая из-за поломки едет аномально медленно и мешает движению, тоже переходит на обочину.',
                    en: 'A vehicle up to 3,500 kg forced by an emergency to go abnormally slowly and seriously disrupting traffic also moves onto the shoulder.' } },
          { color: 'teal', title: { ru: 'Велосипеды вдвоём', en: 'Cyclists two abreast' }, es: 'en columna de a dos',
            body: { ru: 'Велосипедистам можно ехать по двое рядом. В один ряд — на участках без обзора, когда мешают движению, ночью и при плохой видимости. На длинных спусках с поворотами могут съехать на полосу (но не на autovía).',
                    en: 'Cyclists may ride two abreast. Single file on blind stretches, when holding up traffic, at night and in poor visibility. On long winding descents they may move into the lane (not on an autovía).' } },
          { color: 'coral', title: { ru: 'Обгон на обочине', en: 'Overtaking on the shoulder' }, es: '15 segundos · 200 metros',
            body: { ru: 'Обязанные ехать по обочине (кроме велосипедов) не обгоняют друг друга, если обгон длится больше <b>15 секунд</b> или больше <b>200 м</b>.',
                    en: 'Vehicles obliged to use the shoulder (except bicycles) may not overtake each other if it takes over <b>15 seconds</b> or over <b>200 m</b>.' } },
          { color: 'blue', title: { ru: 'Мотоциклы в пробке', en: 'Motorcycles in a jam' }, es: 'arcén para motos: 30 km/h',
            body: { ru: 'На специально обозначенных участках, когда полосы стоят в пробке, мотоциклам можно по правой обочине: максимум <b>30 км/ч</b>, в один ряд.',
                    en: 'On specially signed stretches, when the lanes are at a standstill, motorcycles may use the right shoulder: max <b>30 km/h</b>, single file.' } }
        ] },
        { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
          { es: 'Los ciclistas van por el <b>arcén</b> de dos en dos.', ru: 'Велосипедисты едут по обочине по двое.', en: 'The cyclists ride two abreast on the shoulder.' },
          { es: 'El tractor circula por el <b>arcén derecho</b>.', ru: 'Трактор едет по правой обочине.', en: 'The tractor is driving on the right shoulder.' }
        ] }
      ] },
      { id: 'motorway', label: { ru: 'Магистрали', en: 'Motorways' }, blocks: [
        { type: 'rules', heading: { ru: 'Кому нельзя', en: 'Who is banned' }, items: [
          { color: 'coral', title: { ru: 'Запрещено', en: 'Banned' }, es: 'prohibido en autopistas y autovías',
            body: { ru: 'Пешеходы, животные, гужевые повозки, велосипеды, мопеды, коляски для людей с ограниченной подвижностью и СИМ.',
                    en: 'Pedestrians, animals, horse-drawn vehicles, bicycles, mopeds, mobility vehicles and PMVs.' } },
          { color: 'amber', title: { ru: 'Исключение', en: 'Exception' }, es: 'bicicletas: mayores de 14 años en autovía',
            body: { ru: 'Велосипедисты <b>старше 14 лет</b> могут ехать по обочине <b>autovía</b>, если это не запрещено знаком. По autopista — нет.',
                    en: 'Cyclists <b>over 14</b> may ride on the shoulder of an <b>autovía</b> unless a sign forbids it. Not on an autopista.' } },
          { color: 'blue', title: { ru: 'Медленно из-за поломки', en: 'Slow due to a fault' }, es: 'abandonar en la primera salida',
            body: { ru: 'Кто вынужден ехать аномально медленно, съезжает с магистрали на <b>первом же съезде</b>. Разворот и задний ход — запрещены (задний ход: минус 4 балла).',
                    en: 'Anyone forced to go abnormally slowly leaves at the <b>first exit</b>. U-turns and reversing are banned (reversing: 4 points).' } }
        ] },
        { type: 'figure', src: 'img/dgt/via-incorporacion.svg',
          alt: { ru: 'Въезд на автомагистраль: машина с въездной дороги выходит на полосу разгона, в начале проверяет поток, в конце вливается в правую полосу.',
                 en: 'Joining a motorway: a car from the slip road enters the acceleration lane, checks traffic at its start and merges into the right lane at its end.' },
          caption: { ru: '<b>1</b> — в начале полосы разгона убедись, что можешь въехать безопасно (при необходимости остановись). <b>2</b> — разгонись до подходящей скорости и включи поворотник. <b>3</b> — влейся в поток.',
                     en: '<b>1</b> — at the start of the acceleration lane make sure you can join safely (stop if needed). <b>2</b> — build up to a suitable speed and indicate. <b>3</b> — merge into traffic.' } },
        { type: 'rules', heading: { ru: 'Въезд и съезд', en: 'Joining and leaving' }, items: [
          { color: 'teal', title: { ru: 'Полоса разгона', en: 'Acceleration lane' }, es: 'carril de aceleración',
            body: { ru: 'Проверяешь поток <b>в начале</b> полосы, затем разгоняешься до нужной скорости <b>к её концу</b>. Уступать должен въезжающий; остальные, по возможности, облегчают ему въезд.',
                    en: 'Check traffic <b>at the start</b> of the lane, then accelerate to a suitable speed <b>by its end</b>. The joining driver gives way; others help where they can.' } },
          { color: 'teal', title: { ru: 'Полоса торможения', en: 'Deceleration lane' }, es: 'carril de deceleración',
            body: { ru: 'Заранее перестройся в правую полосу, заезжай на полосу торможения как можно раньше и тормози уже на ней. Учитывай новые ограничения на следующей дороге.',
                    en: 'Move to the right lane in advance, enter the deceleration lane as early as possible and slow down there. Mind the lower limits on the next road.' } },
          { color: 'purple', title: { ru: 'Коридор для спецслужб', en: 'Emergency corridor' }, es: 'carril de emergencia',
            body: { ru: 'В пробке на autopista/autovía оставь проезд: при <b>2 полосах</b> — между ними; при <b>3 и больше</b> — между крайней левой и соседней (левые прижимаются влево, остальные — вправо).',
                    en: 'In a jam on an autopista/autovía leave a gap: with <b>2 lanes</b>, between them; with <b>3 or more</b>, between the far-left lane and the next one (left lane moves left, the rest move right).' } },
          { color: 'purple', title: { ru: 'Снег', en: 'Snow' }, es: 'nieve: carril derecho',
            body: { ru: 'Если снег мешает движению — обгон запрещён, ехать по правой полосе (при 3+ полосах можно и по соседней), левые оставить для спецтехники и снегоуборщиков.',
                    en: 'When snow hampers traffic, overtaking is banned; use the right lane (or the next one with 3+ lanes) and leave the left lanes to emergency and snow-clearing vehicles.' } }
        ] },
        { type: 'signs', heading: { ru: 'Знаки', en: 'Signs' }, items: ['S-2', 'S-2a', 'S-26a', 'S-26b', 'S-26c', 'S-25', 'S-32', 'R-418'] },
        { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
          { es: 'Acelera en el <b>carril de aceleración</b> antes de incorporarte.', ru: 'Разгонись на полосе разгона, прежде чем влиться в поток.', en: 'Speed up in the acceleration lane before you merge.' },
          { es: 'Toma la <b>primera salida</b> si el coche falla.', ru: 'Если машина барахлит, сворачивай на первом съезде.', en: 'Take the first exit if the car is playing up.' },
          { es: 'En el atasco dejamos un <b>carril de emergencia</b>.', ru: 'В пробке мы оставили коридор для спецслужб.', en: 'In the jam we left an emergency corridor.' }
        ] }
      ] },
      { id: 'tunnels', label: { ru: 'Тоннели', en: 'Tunnels' }, blocks: [
        { type: 'rules', heading: { ru: 'Тоннель', en: 'Tunnel' }, items: [
          { color: 'blue', title: { ru: 'Свет и запреты', en: 'Lights and bans' }, es: 'S-5: túnel',
            body: { ru: 'Фары включены в любое время суток. Запрещено: останавливаться, парковаться, разворачиваться, ехать задним ходом. Обгон запрещён, если в твою сторону одна полоса.',
                    en: 'Lights on at any time of day. Banned: stopping, parking, U-turns, reversing. Overtaking is banned if there is only one lane your way.' } },
          { color: 'blue', title: { ru: 'Дистанция', en: 'Following distance' }, es: '100 m o 4 s · 150 m o 6 s',
            body: { ru: 'Если не обгоняешь — минимум <b>100 м или 4 секунды</b> до впереди идущей машины. Для машин > 3500 кг — <b>150 м или 6 секунд</b>.',
                    en: 'When not overtaking, keep at least <b>100 m or 4 seconds</b> behind. Vehicles over 3,500 kg: <b>150 m or 6 seconds</b>.' } },
          { color: 'amber', title: { ru: 'Пробка в тоннеле', en: 'Queue in a tunnel' }, es: 'no abandonar el vehículo',
            body: { ru: 'Остановился из-за движения — <b>не выходи</b>. Кратко включи аварийку, оставь габариты, заглуши мотор, держи большую дистанцию. Стоишь больше 2 минут — мотор выключен.',
                    en: 'Stopped by traffic — <b>stay in the car</b>. Hazards on briefly, sidelights on, engine off, keep a long gap. Stopped over 2 minutes — engine off.' } },
          { color: 'coral', title: { ru: 'Поломка или пожар', en: 'Breakdown or fire' }, es: 'refugio o salida más próximos',
            body: { ru: 'Поломка: аварийка, габариты, мотор выключен, огонь V-16, позвони о помощи, все идут к убежищу или выходу. Пожар: прижмись вправо, мотор выключен, <b>ключ в замке, двери открыты</b>, уходи в сторону <b>от огня</b>.',
                    en: 'Breakdown: hazards, sidelights, engine off, V-16 beacon, call for help, everyone walks to the nearest refuge or exit. Fire: pull right, engine off, <b>key left in, doors open</b>, walk <b>away from the fire</b>.' } }
        ] },
        { type: 'rules', heading: { ru: 'Переезд и разводной мост', en: 'Level crossing and movable bridge' }, items: [
          { color: 'purple', title: { ru: 'Подъезжая', en: 'Approaching' }, es: 'reducir la velocidad',
            body: { ru: 'Сбавь скорость ниже разрешённой. Шлагбаум закрыт или движется, или красный свет — остановись в своей полосе друг за другом.',
                    en: 'Slow down below the limit. If the barrier is down or moving, or the light is red, stop in your lane in line.' } },
          { color: 'purple', title: { ru: 'Без шлагбаума', en: 'No barrier' }, es: 'comprobar que no viene el tren',
            body: { ru: 'Въезжай, только убедившись, что поезд не приближается, и переезжай без задержки, если точно не застрянешь на путях.',
                    en: 'Enter only after making sure no train is coming, and cross without delay if you will not get stuck on the tracks.' } },
          { color: 'coral', title: { ru: 'Застрял на переезде', en: 'Stuck on a crossing' }, es: 'desalojar y avisar',
            body: { ru: 'Сначала быстро вывести людей, затем освободить пути. Не получается — предупредить машиниста и водителей всеми доступными способами.',
                    en: 'First get everyone out quickly, then clear the tracks. If you cannot, warn train drivers and other drivers by every means available.' } }
        ] },
        { type: 'signs', heading: { ru: 'Знаки', en: 'Signs' }, items: ['S-5', 'S-34a', 'S-980', 'P-7', 'P-8', 'P-9a', 'P-11', 'P-5'] },
        { type: 'examples', heading: { ru: 'Фразы', en: 'Phrases' }, items: [
          { es: 'En el <b>túnel</b> está prohibido adelantar con un solo carril.', ru: 'В тоннеле с одной полосой обгон запрещён.', en: 'Overtaking is banned in a single-lane tunnel.' },
          { es: 'La <b>barrera</b> del paso a nivel está bajando: paramos.', ru: 'Шлагбаум на переезде опускается — останавливаемся.', en: 'The level-crossing barrier is coming down: we stop.' }
        ] }
      ] }
    ],
    quizCount: 20,
    quiz: [
      { es: 'Como norma general, ¿por dónde debe circular un vehículo?',
        prompt: { ru: 'Как правило, где должен ехать автомобиль?', en: 'As a general rule, where should a vehicle drive?' },
        options: [
          { es: 'Por la derecha y lo más cerca posible del borde de la calzada.', ru: 'Справа и как можно ближе к краю проезжей части.', en: 'On the right and as close as possible to the edge.' },
          { es: 'Por el centro de la calzada.', ru: 'По центру проезжей части.', en: 'In the middle of the carriageway.' },
          { es: 'Por el carril que prefiera, en cualquier vía.', ru: 'По любой полосе на любой дороге.', en: 'In whichever lane they like, on any road.' }
        ], answer: 0,
        explain: { ru: 'Правило ст. 29 RGC: справа, ближе к краю, особенно в поворотах и на вершинах с плохим обзором.', en: 'RGC art. 29: on the right, near the edge, especially on blind bends and crests.' } },
      { es: 'En una curva de visibilidad reducida, aunque no haya línea pintada, ¿qué debes hacer?',
        prompt: { ru: 'В повороте с плохим обзором, даже если нет разметки, что нужно делать?', en: 'On a blind bend, even with no line painted, what must you do?' },
        options: [
          { es: 'Circular por el centro para ver mejor.', ru: 'Ехать по центру, чтобы лучше видеть.', en: 'Drive in the middle to see better.' },
          { es: 'Dejar completamente libre la mitad de la calzada del sentido contrario.', ru: 'Полностью оставить свободной встречную половину проезжей части.', en: 'Leave the oncoming half of the carriageway completely clear.' },
          { es: 'Tocar el claxon y ocupar el centro.', ru: 'Посигналить и занять середину.', en: 'Sound the horn and take the middle.' }
        ], answer: 1,
        explain: { ru: 'На вершинах и в поворотах с плохим обзором встречная половина должна быть полностью свободной (RGC, ст. 29.1).', en: 'On blind crests and bends the oncoming half must be left completely free (RGC art. 29.1).' } },
      { es: 'Circular por la izquierda en una vía de doble sentido, en sentido contrario, ¿qué infracción es?',
        prompt: { ru: 'Езда по встречной стороне двусторонней дороги — какое это нарушение?', en: 'Driving on the wrong side of a two-way road — what offence is it?' },
        options: [
          { es: 'Leve, sin pérdida de puntos.', ru: 'Лёгкое, без потери баллов.', en: 'Minor, no points.' },
          { es: 'Grave, con 2 puntos.', ru: 'Серьёзное, минус 2 балла.', en: 'Serious, 2 points.' },
          { es: 'Muy grave, con 6 puntos.', ru: 'Очень серьёзное, минус 6 баллов.', en: 'Very serious, 6 points.' }
        ], answer: 2,
        explain: { ru: 'Езда по встречной — очень серьёзное нарушение, 6 баллов (RGC, ст. 29.2; LSV, прил. II, п. 4).', en: 'Wrong-way driving is very serious, 6 points (RGC art. 29.2; LSV Annex II, item 4).' } },
      { es: 'En una calzada de doble sentido con tres carriles separados por líneas discontinuas, ¿para qué se usa el carril central?',
        prompt: { ru: 'На двусторонней дороге с тремя полосами, разделёнными прерывистыми линиями, для чего средняя полоса?', en: 'On a two-way road with three lanes divided by broken lines, what is the centre lane for?' },
        options: [
          { es: 'Para circular normalmente si vas rápido.', ru: 'Для обычной езды, если едешь быстро.', en: 'For normal driving if you are fast.' },
          { es: 'Solo para adelantar y para girar a la izquierda.', ru: 'Только для обгона и поворота налево.', en: 'Only for overtaking and turning left.' },
          { es: 'Para parar en caso de avería.', ru: 'Для остановки при поломке.', en: 'For stopping if you break down.' }
        ], answer: 1,
        explain: { ru: 'Ехать — по правой, по левой — никогда; средняя — только для обгона и поворота налево (RGC, ст. 30.1.b).', en: 'Drive in the right lane, never the left; the centre one only for overtaking and turning left (RGC art. 30.1.b).' } },
      { es: 'Fuera de poblado, en una autovía con dos carriles por sentido, ¿por qué carril circulas normalmente?',
        prompt: { ru: 'Вне города, на autovía с двумя полосами в каждую сторону, по какой полосе ты обычно едешь?', en: 'Outside towns, on an autovía with two lanes each way, which lane do you normally use?' },
        options: [
          { es: 'Por el de la izquierda, si vas a 120 km/h.', ru: 'По левой, если едешь 120 км/ч.', en: 'The left one, if doing 120 km/h.' },
          { es: 'Por cualquiera de los dos.', ru: 'По любой из двух.', en: 'Either one.' },
          { es: 'Por el de la derecha; el otro, cuando lo aconsejen las circunstancias y sin entorpecer.', ru: 'По правой; другую — когда этого требует обстановка, никому не мешая.', en: 'The right one; the other when circumstances advise, without obstructing.' }
        ], answer: 2,
        explain: { ru: 'Вне города — правая полоса; остальные по необходимости, не мешая едущим сзади (RGC, ст. 31.1).', en: 'Outside towns, the right lane; the others when needed, without holding up those behind (RGC art. 31.1).' } },
      { es: 'En una autovía con tres carriles por sentido, un camión de 12.000 kg de MMA, ¿qué carriles puede usar?',
        prompt: { ru: 'На autovía с тремя полосами в одну сторону какие полосы может занимать грузовик с MMA 12 000 кг?', en: 'On an autovía with three lanes each way, which lanes may a lorry with an MMA of 12,000 kg use?' },
        options: [
          { es: 'El de la derecha y el inmediato.', ru: 'Правую и соседнюю с ней.', en: 'The right lane and the one next to it.' },
          { es: 'Solo el de la izquierda.', ru: 'Только левую.', en: 'Only the left one.' },
          { es: 'Los tres.', ru: 'Все три.', en: 'All three.' }
        ], answer: 0,
        explain: { ru: 'Грузовики и фургоны > 3500 кг, спецмашины и составы > 7 м при 3+ полосах — правая и максимум соседняя (RGC, ст. 31.2).', en: 'Lorries and vans over 3,500 kg, special vehicles and combinations over 7 m, with 3+ lanes: right lane and at most the next (RGC art. 31.2).' },
        img: 'img/dgt/via-carriles.svg' },
      { es: 'En poblado, en una calzada con dos carriles por sentido marcados con líneas, ¿qué carril puede usar un turismo?',
        prompt: { ru: 'В населённом пункте на проезжей части с двумя размеченными полосами в одну сторону какую полосу может занимать легковой?', en: 'In town, on a carriageway with two marked lanes one way, which lane may a car use?' },
        options: [
          { es: 'Siempre el derecho.', ru: 'Всегда правую.', en: 'Always the right one.' },
          { es: 'Solo el izquierdo para adelantar.', ru: 'Левую — только для обгона.', en: 'The left only to overtake.' },
          { es: 'El que mejor convenga a su destino, sin obstaculizar a los demás.', ru: 'Ту, что удобнее для маршрута, не мешая другим.', en: 'Whichever suits their route, without obstructing others.' }
        ], answer: 2,
        explain: { ru: 'В городе при размеченных полосах — любая, удобная для маршрута; менять только для поворота, обгона, остановки, парковки (RGC, ст. 33).', en: 'In town with marked lanes, any lane that suits the route; leave it only to turn, overtake, stop or park (RGC art. 33).' } },
      { es: 'Para contar los carriles de una calzada, ¿se tienen en cuenta los carriles reservados al autobús?',
        prompt: { ru: 'Учитывается ли полоса для автобусов при подсчёте полос проезжей части?', en: 'Are bus lanes counted when counting the lanes of a carriageway?' },
        options: [
          { es: 'Sí, siempre.', ru: 'Да, всегда.', en: 'Yes, always.' },
          { es: 'No, no se cuentan.', ru: 'Нет, не учитывается.', en: 'No, they are not counted.' },
          { es: 'Solo dentro de poblado.', ru: 'Только в населённом пункте.', en: 'Only in built-up areas.' }
        ], answer: 1,
        explain: { ru: 'Полосы для отдельных видов транспорта и для манёвров (разгон, торможение) не считаются (RGC, ст. 34).', en: 'Lanes reserved for certain vehicles or manoeuvres (acceleration, deceleration) are not counted (RGC art. 34).' } },
      { es: '¿Puede circular por un carril VAO un turismo que arrastra un remolque?',
        prompt: { ru: 'Может ли легковой с прицепом ехать по полосе VAO?', en: 'May a car towing a trailer use an HOV (VAO) lane?' },
        options: [
          { es: 'No, está prohibido.', ru: 'Нет, это запрещено.', en: 'No, it is forbidden.' },
          { es: 'Sí, si lleva los ocupantes exigidos.', ru: 'Да, если в нём нужное число людей.', en: 'Yes, with the required number of occupants.' },
          { es: 'Sí, si el remolque es ligero.', ru: 'Да, если прицеп лёгкий.', en: 'Yes, if the trailer is light.' }
        ], answer: 0,
        explain: { ru: 'VAO — только мотоциклы, легковые и mixtos adaptables; любые составы, включая легковой с прицепом, запрещены (RGC, ст. 35.2.a).', en: 'HOV lanes are for motorcycles, cars and mixtos adaptables only; any combination, including a car with a trailer, is banned (RGC art. 35.2.a).' } },
      { es: '¿Qué vehículo puede usar el carril VAO aunque solo vaya el conductor?',
        prompt: { ru: 'Какая машина может ехать по полосе VAO, даже если в ней только водитель?', en: 'Which vehicle may use the HOV lane even with only the driver on board?' },
        options: [
          { es: 'Una furgoneta de reparto.', ru: 'Развозной фургон.', en: 'A delivery van.' },
          { es: 'Un turismo eléctrico.', ru: 'Электромобиль.', en: 'An electric car.' },
          { es: 'Un turismo con la tarjeta de estacionamiento para personas con discapacidad.', ru: 'Легковой с парковочной картой для людей с инвалидностью.', en: 'A car displaying the disabled parking card.' }
        ], answer: 2,
        explain: { ru: 'С одним водителем — машины с V-15 или картой для людей с инвалидностью и автобусы > 3500 кг (RGC, ст. 35.2.a).', en: 'Driver-only use is allowed for vehicles with the V-15 sign or a disabled card, and buses over 3,500 kg (RGC art. 35.2.a).' } },
      { es: 'Un carril reservado para autobuses en el que está escrita la palabra TAXI, ¿quién puede usarlo?',
        prompt: { ru: 'Кто может ехать по автобусной полосе, на которой написано TAXI?', en: 'Who may use a bus lane marked with the word TAXI?' },
        options: [
          { es: 'Autobuses y taxis.', ru: 'Автобусы и такси.', en: 'Buses and taxis.' },
          { es: 'Cualquier turismo con pasajeros.', ru: 'Любой легковой с пассажирами.', en: 'Any car with passengers.' },
          { es: 'Solo taxis.', ru: 'Только такси.', en: 'Taxis only.' }
        ], answer: 0,
        explain: { ru: 'Полоса BUS — для автобусов; надпись TAXI добавляет такси (учебник DGT, тема 9; RGC, ст. 35.1).', en: 'A bus lane is for buses; the TAXI marking adds taxis (DGT manual, topic 9; RGC art. 35.1).' } },
      { es: '¿Cómo se reconoce un carril reversible?',
        prompt: { ru: 'Как узнать реверсивную полосу?', en: 'How do you recognise a reversible lane?' },
        options: [
          { es: 'Por una línea continua amarilla a cada lado.', ru: 'По сплошной жёлтой линии с каждой стороны.', en: 'By a solid yellow line on each side.' },
          { es: 'Por marcas dobles discontinuas a ambos lados del carril.', ru: 'По двойным прерывистым линиям с обеих сторон полосы.', en: 'By double broken lines on both sides of the lane.' },
          { es: 'Por conos rojos en el centro.', ru: 'По красным конусам посередине.', en: 'By red cones in the middle.' }
        ], answer: 1,
        explain: { ru: 'Двойные прерывистые с обеих сторон — реверсивная полоса; направление показывают светофоры над ней (RGC, ст. 40.1).', en: 'Double broken lines on both sides mark a reversible lane; lane signals show the direction (RGC art. 40.1).' } },
      { es: 'Al circular por un carril reversible, ¿qué alumbrado debes llevar?',
        prompt: { ru: 'Какой свет должен быть включён на реверсивной полосе?', en: 'Which lights must you use in a reversible lane?' },
        options: [
          { es: 'Solo las luces de posición, de noche.', ru: 'Только габариты, ночью.', en: 'Only sidelights, at night.' },
          { es: 'Ninguno de día.', ru: 'Днём — никакой.', en: 'None by day.' },
          { es: 'Al menos la luz de corto alcance, de día y de noche.', ru: 'Минимум ближний свет, днём и ночью.', en: 'At least dipped headlights, day and night.' }
        ], answer: 2,
        explain: { ru: 'На реверсивной полосе — минимум ближний свет круглые сутки (RGC, ст. 40.1).', en: 'In a reversible lane, at least dipped headlights round the clock (RGC art. 40.1).' } },
      { es: '¿Qué vehículos pueden usar un carril habilitado en sentido contrario al habitual?',
        prompt: { ru: 'Какие машины могут ехать по полосе, открытой против обычного направления?', en: 'Which vehicles may use a lane opened against its usual direction (contraflow)?' },
        options: [
          { es: 'Todos los automóviles.', ru: 'Все автомобили.', en: 'All motor vehicles.' },
          { es: 'Solo motocicletas y turismos.', ru: 'Только мотоциклы и легковые.', en: 'Only motorcycles and cars.' },
          { es: 'Solo autobuses y camiones.', ru: 'Только автобусы и грузовики.', en: 'Only buses and lorries.' }
        ], answer: 1,
        explain: { ru: 'Только мотоциклы и легковые без прицепа; исключение — полосы при дорожных работах (RGC, ст. 41.1).', en: 'Only motorcycles and cars without trailers; road-works contraflows are the exception (RGC art. 41.1).' } },
      { es: '¿A qué velocidad se circula por un carril habilitado en sentido contrario al habitual, salvo otra señal?',
        prompt: { ru: 'С какой скоростью едут по полосе против обычного направления, если знаки не указывают иное?', en: 'At what speed do you drive in a contraflow lane unless signs say otherwise?' },
        options: [
          { es: 'Entre 60 y 80 km/h.', ru: 'От 60 до 80 км/ч.', en: 'Between 60 and 80 km/h.' },
          { es: 'Entre 80 y 100 km/h.', ru: 'От 80 до 100 км/ч.', en: 'Between 80 and 100 km/h.' },
          { es: 'A un máximo de 50 km/h.', ru: 'Максимум 50 км/ч.', en: 'At most 50 km/h.' }
        ], answer: 0,
        explain: { ru: 'Максимум 80, минимум 60 км/ч, ближний свет, без перестроений даже для обгона (RGC, ст. 41.1). Так же и на дополнительной временной полосе (ст. 42).', en: 'Max 80, min 60 km/h, dipped lights, no lane changes even to overtake (RGC art. 41.1). The same applies to a temporary extra lane (art. 42).' } },
      { es: 'Un carril adicional circunstancial se crea...',
        prompt: { ru: 'Дополнительная временная полоса (carril adicional circunstancial) создаётся…', en: 'A temporary extra lane (carril adicional circunstancial) is created…' },
        options: [
          { es: 'Ocupando la mediana de una autopista.', ru: 'За счёт разделительной полосы автомагистрали.', en: 'By using the central reservation of a motorway.' },
          { es: 'En una calle de un solo sentido, con pintura amarilla.', ru: 'На улице с односторонним движением жёлтой краской.', en: 'On a one-way street with yellow paint.' },
          { es: 'En una calzada de doble sentido con arcenes, con balizamiento provisional.', ru: 'На двусторонней дороге с обочинами, с помощью временного ограждения.', en: 'On a two-way road with shoulders, using temporary cones.' }
        ], answer: 2,
        explain: { ru: 'Используются обе обочины и временное ограждение: две полосы в одну сторону и одна в другую (RGC, ст. 42).', en: 'Both shoulders and temporary cones give two lanes one way and one the other (RGC art. 42).' } },
      { es: '¿Qué vehículo debe circular por el arcén cuando no hay una vía reservada para él?',
        prompt: { ru: 'Какой транспорт должен ехать по обочине, если для него нет отдельной дороги?', en: 'Which vehicle must use the hard shoulder when there is no track reserved for it?' },
        options: [
          { es: 'Un turismo que va despacio.', ru: 'Легковой, который едет медленно.', en: 'A car going slowly.' },
          { es: 'Un ciclomotor.', ru: 'Мопед.', en: 'A moped.' },
          { es: 'Una motocicleta de gran cilindrada.', ru: 'Мотоцикл с большим объёмом двигателя.', en: 'A large motorcycle.' }
        ], answer: 1,
        explain: { ru: 'По правой обочине: велосипеды, мопеды, гужевые повозки, коляски для людей с ограниченной подвижностью, спецмашины ≤ 3500 кг (RGC, ст. 36.1).', en: 'The right shoulder is for bicycles, mopeds, horse-drawn vehicles, mobility vehicles and special vehicles ≤ 3,500 kg (RGC art. 36.1).' } },
      { es: '¿Pueden los ciclistas circular en paralelo por el arcén?',
        prompt: { ru: 'Могут ли велосипедисты ехать по обочине рядом друг с другом?', en: 'May cyclists ride side by side on the shoulder?' },
        options: [
          { es: 'Sí, en columna de a dos, pero en hilera en tramos sin visibilidad o de noche.', ru: 'Да, по двое, но в один ряд на участках без обзора и ночью.', en: 'Yes, two abreast, but in single file on blind stretches or at night.' },
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' },
          { es: 'Sí, de tres en tres si es un grupo.', ru: 'Да, по трое, если это группа.', en: 'Yes, three abreast if it is a group.' }
        ], answer: 0,
        explain: { ru: 'Велосипедистам можно по двое; в один ряд — без обзора, когда мешают движению, ночью и при плохой видимости (RGC, ст. 36.2).', en: 'Cyclists may ride two abreast; single file on blind stretches, when holding up traffic, at night and in poor visibility (RGC art. 36.2).' } },
      { es: 'Dos ciclomotores circulan por el arcén. ¿Cuándo no puede uno adelantar al otro?',
        prompt: { ru: 'Два мопеда едут по обочине. Когда один не может обогнать другого?', en: 'Two mopeds are on the shoulder. When may one not overtake the other?' },
        options: [
          { es: 'Nunca pueden adelantarse.', ru: 'Обгонять нельзя вообще.', en: 'They may never overtake.' },
          { es: 'Si el adelantamiento dura más de 15 segundos o supera 200 metros.', ru: 'Если обгон длится больше 15 секунд или больше 200 метров.', en: 'If it takes more than 15 seconds or more than 200 metres.' },
          { es: 'Si el adelantamiento dura más de 30 segundos.', ru: 'Если обгон длится больше 30 секунд.', en: 'If it takes more than 30 seconds.' }
        ], answer: 1,
        explain: { ru: 'Больше 15 с или 200 м рядом — нельзя; на велосипеды это ограничение не распространяется (RGC, ст. 36.5).', en: 'Over 15 s or 200 m side by side is forbidden; bicycles are exempt (RGC art. 36.5).' } },
      { es: 'En un tramo señalizado donde las motos pueden usar el arcén durante un atasco, ¿a qué velocidad máxima pueden hacerlo?',
        prompt: { ru: 'На обозначенном участке, где мотоциклам разрешено ехать по обочине в пробке, какова максимальная скорость?', en: 'On a signed stretch where motorcycles may use the shoulder in a jam, what is their top speed?' },
        options: [
          { es: '50 km/h.', ru: '50 км/ч.', en: '50 km/h.' },
          { es: '20 km/h.', ru: '20 км/ч.', en: '20 km/h.' },
          { es: '30 km/h.', ru: '30 км/ч.', en: '30 km/h.' }
        ], answer: 2,
        explain: { ru: 'Только там, где разрешено знаками, при стоящих полосах: максимум 30 км/ч, в один ряд (RGC, ст. 36.3).', en: 'Only where signed, with the lanes at a standstill: max 30 km/h, single file (RGC art. 36.3).' } },
      { es: '¿Qué vehículo tiene prohibido circular por una autopista?',
        prompt: { ru: 'Кому запрещено ехать по автомагистрали (autopista)?', en: 'Which vehicle is banned from an autopista?' },
        options: [
          { es: 'Un ciclomotor.', ru: 'Мопеду.', en: 'A moped.' },
          { es: 'Una motocicleta de 125 cm³.', ru: 'Мотоциклу 125 см³.', en: 'A 125 cc motorcycle.' },
          { es: 'Un autobús.', ru: 'Автобусу.', en: 'A bus.' }
        ], answer: 0,
        explain: { ru: 'На autopistas и autovías запрещены гужевые повозки, велосипеды, мопеды и коляски для людей с ограниченной подвижностью; также СИМ (RGC, ст. 38.1 и 38.4).', en: 'Horse-drawn vehicles, bicycles, mopeds and mobility vehicles are banned from autopistas and autovías; PMVs too (RGC arts. 38.1 and 38.4).' } },
      { es: '¿Puede un ciclista de 16 años circular por una autovía?',
        prompt: { ru: 'Может ли 16-летний велосипедист ехать по autovía?', en: 'May a 16-year-old cyclist ride on an autovía?' },
        options: [
          { es: 'No, las bicicletas nunca pueden.', ru: 'Нет, велосипедам туда нельзя никогда.', en: 'No, bicycles never may.' },
          { es: 'Sí, por el arcén, salvo que una señal lo prohíba.', ru: 'Да, по обочине, если это не запрещено знаком.', en: 'Yes, on the shoulder, unless a sign forbids it.' },
          { es: 'Sí, por el carril derecho.', ru: 'Да, по правой полосе.', en: 'Yes, in the right lane.' }
        ], answer: 1,
        explain: { ru: 'Велосипедисты старше 14 лет могут ехать по обочине autovía, если нет запрещающего знака (RGC, ст. 38.1).', en: 'Cyclists over 14 may use the shoulder of an autovía unless a sign forbids it (RGC art. 38.1).' } },
      { es: 'Por una avería tienes que circular por la autopista a velocidad anormalmente reducida. ¿Qué haces?',
        prompt: { ru: 'Из-за поломки ты вынужден ехать по автомагистрали аномально медленно. Что делать?', en: 'Because of a fault you have to drive on the motorway at an abnormally low speed. What do you do?' },
        options: [
          { es: 'Seguir hasta mi destino por el arcén.', ru: 'Ехать до места назначения по обочине.', en: 'Carry on to my destination on the shoulder.' },
          { es: 'Dar media vuelta en el primer paso de mediana.', ru: 'Развернуться в первом разрыве разделительной полосы.', en: 'Turn round at the first gap in the central reservation.' },
          { es: 'Abandonar la autopista por la primera salida.', ru: 'Съехать с автомагистрали на первом съезде.', en: 'Leave the motorway at the first exit.' }
        ], answer: 2,
        explain: { ru: 'Медленно из-за экстренной ситуации — съехать на первом съезде (RGC, ст. 38.2; ст. 130.2 — по правой обочине).', en: 'Going abnormally slowly in an emergency — leave at the first exit (RGC art. 38.2; art. 130.2 — using the right shoulder).' } },
      { es: '¿Cuántos puntos se pierden por dar marcha atrás en una autovía?',
        prompt: { ru: 'Сколько баллов снимают за движение задним ходом по autovía?', en: 'How many points do you lose for reversing on an autovía?' },
        options: [
          { es: '2 puntos.', ru: '2 балла.', en: '2 points.' },
          { es: '4 puntos.', ru: '4 балла.', en: '4 points.' },
          { es: '6 puntos.', ru: '6 баллов.', en: '6 points.' }
        ], answer: 1,
        explain: { ru: 'Задний ход на autopista или autovía — минус 4 балла (LSV, прил. II, п. 18).', en: 'Reversing on an autopista or autovía costs 4 points (LSV Annex II, item 18).' } },
      { es: 'Al entrar en una autovía por un carril de aceleración, ¿dónde debes comprobar que puedes incorporarte sin peligro?',
        prompt: { ru: 'Въезжая на autovía по полосе разгона, где нужно убедиться, что можно влиться безопасно?', en: 'Joining an autovía by an acceleration lane, where must you check that you can merge safely?' },
        options: [
          { es: 'Al principio del carril de aceleración.', ru: 'В начале полосы разгона.', en: 'At the start of the acceleration lane.' },
          { es: 'Solo al final del carril.', ru: 'Только в конце полосы.', en: 'Only at the end of the lane.' },
          { es: 'No hace falta: tengo preferencia.', ru: 'Не нужно: у меня приоритет.', en: 'No need: I have priority.' }
        ], answer: 0,
        explain: { ru: 'Проверить поток в начале полосы (при необходимости остановиться), потом разогнаться к её концу; въезжающий уступает (RGC, ст. 72.4).', en: 'Check traffic at the start (stopping if needed), then accelerate by the end; the joining driver gives way (RGC art. 72.4).' },
        img: 'img/dgt/via-incorporacion.svg' },
      { es: '¿Qué velocidad debes llevar al final del carril de aceleración?',
        prompt: { ru: 'Какая скорость должна быть в конце полосы разгона?', en: 'What speed should you have at the end of the acceleration lane?' },
        options: [
          { es: 'La mínima posible, para entrar con calma.', ru: 'Как можно меньше, чтобы въехать спокойно.', en: 'As low as possible, to join calmly.' },
          { es: 'Una velocidad adecuada para incorporarte a la circulación de la calzada.', ru: 'Подходящая, чтобы влиться в поток на проезжей части.', en: 'A speed suitable for joining the traffic on the carriageway.' },
          { es: 'Siempre 120 km/h.', ru: 'Всегда 120 км/ч.', en: 'Always 120 km/h.' }
        ], answer: 1,
        explain: { ru: 'Полоса разгона нужна, чтобы набрать скорость, подходящую для потока (RGC, ст. 72.1 и 72.4).', en: 'The acceleration lane is for reaching a speed suited to the traffic (RGC arts. 72.1 and 72.4).' } },
      { es: 'Circulas por el carril derecho de una autovía y un coche intenta incorporarse desde el carril de aceleración. ¿Qué haces?',
        prompt: { ru: 'Ты едешь по правой полосе autovía, а машина пытается влиться с полосы разгона. Что делать?', en: 'You are in the right lane of an autovía and a car is trying to merge from the acceleration lane. What do you do?' },
        options: [
          { es: 'Acelerar para que no se meta delante.', ru: 'Ускориться, чтобы она не встала впереди.', en: 'Speed up so it cannot get in front.' },
          { es: 'Nada: la preferencia es mía y no debo hacer nada más.', ru: 'Ничего: приоритет мой, больше ничего делать не нужно.', en: 'Nothing: I have priority and need do no more.' },
          { es: 'Facilitar la maniobra en la medida de lo posible, por ejemplo cambiándome de carril.', ru: 'По возможности облегчить ему манёвр, например перестроиться левее.', en: 'Make it easier where possible, e.g. by moving over a lane.' }
        ], answer: 2,
        explain: { ru: 'Въезжающий уступает, но остальные по возможности облегчают его манёвр (RGC, ст. 73.1).', en: 'The joining driver gives way, but others should make it easier where they can (RGC art. 73.1).' } },
      { es: 'Atasco en una autovía de dos carriles por sentido. ¿Dónde se forma el carril de emergencia?',
        prompt: { ru: 'Пробка на autovía с двумя полосами в одну сторону. Где образуется коридор для спецслужб?', en: 'A jam on an autovía with two lanes each way. Where is the emergency corridor formed?' },
        options: [
          { es: 'En el arcén derecho.', ru: 'На правой обочине.', en: 'On the right shoulder.' },
          { es: 'En el centro, entre los dos carriles.', ru: 'Посередине, между двумя полосами.', en: 'In the middle, between the two lanes.' },
          { es: 'Junto a la mediana, a la izquierda de todo.', ru: 'У разделительной полосы, левее всех.', en: 'By the central reservation, on the far left.' }
        ], answer: 1,
        explain: { ru: 'При двух полосах — между ними; при трёх и более — между крайней левой и соседней (RGC, ст. 32.1).', en: 'With two lanes, between them; with three or more, between the far-left lane and the next (RGC art. 32.1).' } },
      { es: 'En una autopista de tres carriles por sentido hay un atasco. Vas por el carril izquierdo. ¿Hacia dónde te mueves para formar el carril de emergencia?',
        prompt: { ru: 'Пробка на autopista с тремя полосами в одну сторону. Ты в левой полосе. Куда сдвинуться, чтобы образовать коридор?', en: 'A jam on a motorway with three lanes each way. You are in the left lane. Which way do you move to form the emergency corridor?' },
        options: [
          { es: 'Lo más a la izquierda posible.', ru: 'Как можно левее.', en: 'As far left as possible.' },
          { es: 'Lo más a la derecha posible.', ru: 'Как можно правее.', en: 'As far right as possible.' },
          { es: 'Me quedo en el centro de mi carril.', ru: 'Остаюсь в центре своей полосы.', en: 'I stay in the middle of my lane.' }
        ], answer: 0,
        explain: { ru: 'Коридор — между левой и соседней полосой: левые сдвигаются влево, остальные — вправо (RGC, ст. 32.1).', en: 'The corridor runs between the left lane and the next: the left lane moves left, the others move right (RGC art. 32.1).' } },
      { es: 'En una autovía con nieve que dificulta la circulación, ¿qué está prohibido?',
        prompt: { ru: 'На autovía снег мешает движению. Что запрещено?', en: 'On an autovía where snow is hampering traffic, what is banned?' },
        options: [
          { es: 'Circular por el carril derecho.', ru: 'Ехать по правой полосе.', en: 'Driving in the right lane.' },
          { es: 'Usar las luces de cruce.', ru: 'Включать ближний свет.', en: 'Using dipped headlights.' },
          { es: 'Adelantar.', ru: 'Обгонять.', en: 'Overtaking.' }
        ], answer: 2,
        explain: { ru: 'При снеге обгон запрещён, нужно ехать по правой полосе, оставив левые для спецтехники и снегоуборщиков (RGC, ст. 32.2).', en: 'In snow, overtaking is banned and you keep to the right lane, leaving the left ones for emergency and snow-clearing vehicles (RGC art. 32.2).' } },
      { es: 'Dentro de un túnel, si no vas a adelantar, ¿qué distancia mínima debe guardar un turismo con el vehículo de delante?',
        prompt: { ru: 'Какую минимальную дистанцию в тоннеле должен держать легковой автомобиль, если не обгоняет?', en: 'Inside a tunnel, if not overtaking, what minimum gap must a car keep to the vehicle in front?' },
        options: [
          { es: '50 metros o 2 segundos.', ru: '50 метров или 2 секунды.', en: '50 metres or 2 seconds.' },
          { es: '100 metros o 4 segundos.', ru: '100 метров или 4 секунды.', en: '100 metres or 4 seconds.' },
          { es: '150 metros o 6 segundos.', ru: '150 метров или 6 секунд.', en: '150 metres or 6 seconds.' }
        ], answer: 1,
        explain: { ru: 'Легковому — 100 м или 4 с; 150 м или 6 с — для машин тяжелее 3500 кг (RGC, ст. 95.6).', en: 'A car keeps 100 m or 4 s; 150 m or 6 s is for vehicles over 3,500 kg (RGC art. 95.6).' },
        sign: 'S-5' },
      { es: 'En un túnel con doble sentido y un solo carril para cada sentido, ¿se puede adelantar?',
        prompt: { ru: 'В тоннеле с двусторонним движением и одной полосой в каждую сторону можно ли обгонять?', en: 'In a two-way tunnel with one lane each way, may you overtake?' },
        options: [
          { es: 'No, está prohibido.', ru: 'Нет, запрещено.', en: 'No, it is forbidden.' },
          { es: 'Sí, si la línea es discontinua.', ru: 'Да, если линия прерывистая.', en: 'Yes, if the line is broken.' },
          { es: 'Sí, a vehículos de dos ruedas.', ru: 'Да, двухколёсный транспорт.', en: 'Yes, two-wheelers.' }
        ], answer: 0,
        explain: { ru: 'В тоннелях с двусторонним движением обгон запрещён, если в твою сторону нет второй полосы (RGC, ст. 95.6 и 87.1.d).', en: 'In two-way tunnels overtaking is banned unless you have a second lane your way (RGC arts. 95.6 and 87.1.d).' } },
      { es: 'Estás parado dentro de un túnel por un atasco. ¿Qué debes hacer?',
        prompt: { ru: 'Ты стоишь в пробке в тоннеле. Что нужно делать?', en: 'You are stopped in a tunnel because of a jam. What should you do?' },
        options: [
          { es: 'Salir del coche y caminar hacia la salida.', ru: 'Выйти из машины и идти к выходу.', en: 'Get out and walk to the exit.' },
          { es: 'Dejar el motor en marcha para salir rápido.', ru: 'Не глушить мотор, чтобы быстро тронуться.', en: 'Keep the engine running to move off quickly.' },
          { es: 'Quedarme en el vehículo, con las luces de posición y el motor apagado.', ru: 'Остаться в машине, включить габариты и заглушить мотор.', en: 'Stay in the vehicle with sidelights on and the engine off.' }
        ], answer: 2,
        explain: { ru: 'Остановка из-за движения — не выходить, кратко включить аварийку, оставить габариты, заглушить двигатель, держать дистанцию (RGC, ст. 97.3 и 115.2).', en: 'Stopped by traffic — stay inside, hazards briefly, sidelights on, engine off, keep a gap (RGC arts. 97.3 and 115.2).' } },
      { es: 'Tu vehículo se incendia dentro de un túnel. ¿Qué haces con la llave y las puertas?',
        prompt: { ru: 'Твоя машина загорелась в тоннеле. Что делать с ключом и дверями?', en: 'Your vehicle catches fire in a tunnel. What do you do with the key and doors?' },
        options: [
          { es: 'Me llevo la llave y cierro las puertas.', ru: 'Забираю ключ и закрываю двери.', en: 'Take the key and lock the doors.' },
          { es: 'Dejo la llave puesta y las puertas abiertas.', ru: 'Оставляю ключ в замке и двери открытыми.', en: 'Leave the key in and the doors open.' },
          { es: 'Dejo el motor encendido y las puertas cerradas.', ru: 'Оставляю мотор включённым и двери закрытыми.', en: 'Leave the engine running and doors shut.' }
        ], answer: 1,
        explain: { ru: 'Прижаться вправо, заглушить мотор, ключ оставить, двери открыть — чтобы спасатели могли убрать машину; уходить в сторону от огня (RGC, ст. 97.3).', en: 'Pull right, engine off, key left in, doors open so rescuers can move it; walk away from the fire (RGC art. 97.3).' } },
      { es: 'Llegas a un paso a nivel y las semibarreras están bajando. ¿Qué haces?',
        prompt: { ru: 'Подъезжаешь к переезду, а полушлагбаумы опускаются. Что делать?', en: 'You reach a level crossing and the half-barriers are coming down. What do you do?' },
        options: [
          { es: 'Detenerme y esperar a que tenga paso libre.', ru: 'Остановиться и ждать, пока путь не освободится.', en: 'Stop and wait until the way is clear.' },
          { es: 'Acelerar para pasar antes de que bajen.', ru: 'Ускориться, чтобы проскочить, пока не опустились.', en: 'Speed up to get through before they close.' },
          { es: 'Pasar en zigzag entre las semibarreras.', ru: 'Объехать полушлагбаумы зигзагом.', en: 'Zigzag between the half-barriers.' }
        ], answer: 0,
        explain: { ru: 'Если шлагбаум закрыт или движется — стоять в своей полосе друг за другом (RGC, ст. 95.2 и 96.1).', en: 'If the barrier is down or moving, stop in your lane one behind another (RGC arts. 95.2 and 96.1).' },
        sign: 'P-7' },
      { es: 'Tu coche se queda parado sobre un paso a nivel. ¿Qué es lo primero?',
        prompt: { ru: 'Твоя машина заглохла на железнодорожном переезде. Что в первую очередь?', en: 'Your car stalls on a level crossing. What comes first?' },
        options: [
          { es: 'Llamar a la grúa y esperar dentro.', ru: 'Вызвать эвакуатор и ждать внутри.', en: 'Call a tow truck and wait inside.' },
          { es: 'Intentar arrancar hasta que funcione.', ru: 'Пытаться завести, пока не получится.', en: 'Keep trying to start it.' },
          { es: 'Hacer salir rápidamente a los ocupantes.', ru: 'Быстро вывести всех людей из машины.', en: 'Get the occupants out quickly.' }
        ], answer: 2,
        explain: { ru: 'Сначала эвакуировать людей, затем освободить пути; если не выходит — предупредить машиниста и других водителей (RGC, ст. 97.1).', en: 'First get people out, then clear the tracks; if you cannot, warn train drivers and others (RGC art. 97.1).' } },
      { es: '¿Qué indica esta señal?',
        prompt: { ru: 'Что обозначает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Carril reservado para autobuses.', ru: 'Полоса для автобусов.', en: 'Bus lane.' },
          { es: 'Carril reservado para vehículos con alta ocupación (VAO).', ru: 'Полоса для машин с несколькими пассажирами (VAO).', en: 'Lane reserved for high-occupancy vehicles (HOV).' },
          { es: 'Carril de aceleración.', ru: 'Полоса разгона.', en: 'Acceleration lane.' }
        ], answer: 1,
        explain: { ru: 'S-51b — полоса VAO; на знаке указано минимальное число людей в машине (RGC, прил. I — каталог знаков; ст. 35).', en: 'S-51b — HOV lane; the sign shows the minimum number of occupants (RGC, Annex I — sign catalogue; art. 35).' },
        sign: 'S-51b' },
      { es: '¿Qué indica este panel?',
        prompt: { ru: 'Что сообщает эта табличка?', en: 'What does this panel tell you?' },
        options: [
          { es: 'Que faltan unos 300 metros para la salida.', ru: 'Что до съезда около 300 метров.', en: 'That the exit is about 300 metres ahead.' },
          { es: 'Que hay tres carriles.', ru: 'Что здесь три полосы.', en: 'That there are three lanes.' },
          { es: 'Que la velocidad mínima es 30 km/h.', ru: 'Что минимальная скорость 30 км/ч.', en: 'That the minimum speed is 30 km/h.' }
        ], answer: 0,
        explain: { ru: 'S-26a — три полосы на табличке: до съезда около 300 м; S-26b — 200 м, S-26c — 100 м (RGC, прил. I — каталог знаков).', en: 'S-26a — three bars: the exit is about 300 m away; S-26b is 200 m, S-26c is 100 m (RGC, Annex I — sign catalogue).' },
        sign: 'S-26a' },
      { es: '¿Qué zona anuncia esta señal?',
        prompt: { ru: 'О какой зоне сообщает этот знак?', en: 'What area does this sign announce?' },
        options: [
          { es: 'Apartadero para camiones.', ru: 'Карман для грузовиков.', en: 'Lay-by for lorries.' },
          { es: 'Pendiente peligrosa.', ru: 'Опасный спуск.', en: 'Dangerous descent.' },
          { es: 'Zona de frenado de emergencia.', ru: 'Аварийная зона торможения (улавливатель).', en: 'Emergency braking area (escape lane).' }
        ], answer: 2,
        explain: { ru: 'S-16 — зона, где машина с отказавшими тормозами может остановиться (учебник DGT, тема 9; RGC, прил. I).', en: 'S-16 — an area where a vehicle whose brakes have failed can stop (DGT manual, topic 9; RGC Annex I).' },
        sign: 'S-16' },
      { es: 'Dos coches van por la misma carretera, uno hacia Madrid y otro desde Madrid. ¿Qué tienen en común?',
        prompt: { ru: 'Две машины едут по одной дороге: одна в Мадрид, другая из Мадрида. Что у них общего?', en: 'Two cars are on the same road, one going to Madrid and one coming from it. What do they share?' },
        options: [
          { es: 'El mismo sentido.', ru: 'Одно и то же «sentido».', en: 'The same sentido.' },
          { es: 'La misma dirección, pero distinto sentido.', ru: 'Одно «dirección», но разное «sentido».', en: 'The same dirección but different sentido.' },
          { es: 'Nada: van en distinta dirección.', ru: 'Ничего: у них разные «dirección».', en: 'Nothing: different dirección.' }
        ], answer: 1,
        explain: { ru: 'Dirección — линия между пунктами, sentido — туда или обратно по ней (учебник DGT, тема 9).', en: 'Dirección is the line between places; sentido is which way along it (DGT manual, topic 9).' } }
    ]
  }
]);
