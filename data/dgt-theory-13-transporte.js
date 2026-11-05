// DGT · theory, topic 13: carrying passengers, children, animals and loads; light trailers. Sources: DGT «Teórica abreviada,
// lectura fácil» (2025), DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-transporte', level: 'DGT',
    title: { ru: 'Перевозка людей и грузов', en: 'Carrying people and loads' },
    summary: { ru: 'Места, детские кресла, животные, груз и прицеп, пассажир на мотоцикле.', en: 'Seats, child seats, animals, loads and trailers, passengers on a motorbike.' },
    hero: { es: 'Transportar <b>personas</b> y <b>cargas</b>', sub: { ru: 'Пассажиры, дети, животные, груз и прицеп', en: 'Passengers, children, animals, loads and trailers' } },
    tabs: [
      { id: 'people', label: { ru: 'Пассажиры', en: 'Passengers' }, blocks: [
        { type: 'rules', items: [
          { color: 'blue', label: { ru: 'Сколько', en: 'How many' }, title: { ru: 'Не больше мест', en: 'No more than seats' }, es: 'plazas autorizadas',
            body: { ru: 'Людей не больше, чем мест в документах, и вместе с багажом — не больше разрешённой массы (MMA). Перегруз на <b>50 %</b> мест (без водителя) — серьёзное нарушение, машину <b>задерживают</b>.', en: 'No more people than the seats in the papers, and with luggage — no more than the maximum authorised mass. Exceeding the seats by <b>50 %</b> (driver excluded) is a serious offence and the vehicle is <b>immobilised</b>.' } },
          { color: 'blue', label: { ru: 'Где', en: 'Where' }, title: { ru: 'Только на сиденьях', en: 'Only in seats' },
            body: { ru: 'Каждый едет на своём месте всю поездку. Возить людей в грузовом отсеке можно только при специальном разрешении. Водитель следит, чтобы пассажиры и вещи не мешали ему двигаться и видеть дорогу.', en: 'Everyone stays in their own seat for the whole trip. People may ride in the load area only with special authorisation. The driver makes sure passengers and objects do not limit his movement or view.' } },
          { color: 'blue', label: { ru: 'Посадка', en: 'Getting in' }, title: { ru: 'Со стороны тротуара', en: 'On the kerb side' },
            body: { ru: 'Входить и выходить — только когда машина <b>стоит</b>, и со стороны, ближней к тротуару или обочине.', en: 'Get in and out only when the vehicle has <b>stopped</b>, on the side nearest the pavement or hard shoulder.' } }
        ] },
        { type: 'rules', heading: { ru: 'Мотоцикл, мопед, велосипед', en: 'Motorbike, moped, bicycle' }, items: [
          { color: 'purple', label: { ru: 'Мото', en: 'Motorbike' }, title: { ru: 'Пассажир старше 12', en: 'Passenger over 12' }, es: 'mayor de 12 años',
            body: { ru: 'Один пассажир, если это есть в документах мотоцикла: <b>старше 12 лет</b>, в шлеме, на сиденье <b>позади</b> водителя, верхом, ноги на подножках. Никогда — между водителем и рулём.', en: 'One passenger, if the vehicle papers allow it: <b>over 12</b>, wearing a helmet, on the seat <b>behind</b> the rider, astride, feet on the footrests. Never between the rider and the handlebar.' } },
          { color: 'purple', label: { ru: 'Исключение', en: 'Exception' }, title: { ru: 'Старше 7 с родителем', en: 'Over 7 with a parent' }, es: 'mayor de 7 años',
            body: { ru: 'Ребёнок <b>старше 7 лет</b> — если везёт отец, мать, опекун или взрослый с их разрешения, и соблюдены все остальные правила. За шлем и возраст пассажира отвечает <b>водитель</b>.', en: 'A child <b>over 7</b> — if ridden by the father, mother, guardian or an adult they authorise, and all other rules are met. The <b>rider</b> is responsible for the passenger’s helmet and age.' } },
          { color: 'purple', label: { ru: 'Велосипед', en: 'Bicycle' }, title: { ru: 'Ребёнок до 7 лет', en: 'Child under 7' }, es: 'asiento adicional',
            body: { ru: 'На одноместном велосипеде — только велосипедист. Но взрослый может везти ребёнка <b>до 7 лет</b> в дополнительном сертифицированном кресле.', en: 'On a single-seat bicycle only the cyclist rides. But an adult may carry a child <b>under 7</b> in an approved extra seat.' } }
        ] },
        { type: 'examples', items: [
          { es: 'En un coche de cinco <b>plazas</b> no pueden viajar seis personas.', ru: 'В машине на пять мест не могут ехать шесть человек.', en: 'Six people cannot travel in a five-seat car.' },
          { es: 'Los pasajeros <b>bajan por el lado de la acera</b>.', ru: 'Пассажиры выходят со стороны тротуара.', en: 'Passengers get out on the pavement side.' },
          { es: 'Mi hija tiene trece años y ya puede ir de <b>pasajera</b> en la moto.', ru: 'Моей дочери тринадцать, и она уже может ездить пассажиркой на мотоцикле.', en: 'My daughter is thirteen and can already ride as a passenger on the motorbike.' },
          { es: 'El pasajero apoya los pies en los <b>reposapiés</b>.', ru: 'Пассажир ставит ноги на подножки.', en: 'The passenger rests his feet on the footrests.' }
        ] }
      ] },
      { id: 'children', label: { ru: 'Дети', en: 'Children' }, blocks: [
        { type: 'figure', src: 'img/dgt/transporte-ninos.svg',
          alt: { ru: 'Вид сверху на машину: на заднем сиденье детское кресло против хода и бустер по ходу; на переднем пассажирском месте значок отключённой подушки безопасности.', en: 'Top view of a car: on the back seat a rear-facing baby seat and a forward-facing booster; at the front passenger seat a “airbag off” mark.' },
          caption: { ru: 'Ребёнок ростом до 135 см — в детском удерживающем устройстве (SRI) и на заднем сиденье (RGC, ст. 117).', en: 'A child up to 135 cm tall — in a child restraint (SRI) and in the back seat (RGC art. 117).' } },
        { type: 'rules', items: [
          { color: 'teal', label: { ru: 'Правило', en: 'Rule' }, title: { ru: 'До 135 см — SRI', en: 'Up to 135 cm — SRI' }, es: 'sistema de retención infantil',
            body: { ru: 'Несовершеннолетние ростом <b>135 см и ниже</b> едут в сертифицированном детском кресле по росту и весу, на <b>заднем</b> сиденье. Кресло ставят по инструкции производителя.', en: 'Minors <b>135 cm or shorter</b> ride in an approved child restraint suited to their height and weight, in the <b>back</b> seat. Fit it following the manufacturer’s instructions.' } },
          { color: 'teal', label: { ru: 'Исключения', en: 'Exceptions' }, title: { ru: 'Когда можно впереди', en: 'When the front is allowed' },
            body: { ru: 'Впереди (тоже в кресле) — только если: 1) задних сидений нет; 2) все задние уже заняты такими же детьми; 3) все кресла сзади поставить нельзя.', en: 'In front (still in a child seat) — only if: 1) there are no rear seats; 2) all rear seats are taken by such children; 3) not all child seats fit in the back.' } },
          { color: 'coral', label: { ru: 'Подушка', en: 'Airbag' }, title: { ru: 'Против хода — без airbag', en: 'Rear-facing — airbag off' }, es: 'airbag desactivado',
            body: { ru: 'Кресло <b>против хода</b> на переднем сиденье — только если фронтальная подушка безопасности <b>отключена</b>: при раскрытии она ударит в спинку кресла.', en: 'A <b>rear-facing</b> seat in front is allowed only if the front airbag is <b>switched off</b>: when it deploys it would hit the back of the seat.' } },
          { color: 'teal', label: { ru: 'Ответственность', en: 'Liability' }, title: { ru: 'Отвечает водитель', en: 'The driver is liable' },
            body: { ru: 'Нет кресла или ремня у ребёнка — нарушение <b>водителя</b>: 200 € и <b>4 балла</b> (LSV, ст. 82; прил. II).', en: 'A child without a seat or belt is the <b>driver’s</b> offence: €200 and <b>4 points</b> (LSV art. 82; Annex II).' } }
        ] },
        { type: 'text', color: 'amber', body: {
          ru: '<b>Животные</b> едут сзади и <b>закреплены</b> (ремень с карабином, переноска), лучше — за сеткой-перегородкой. Свободно бегать по салону и мешать водителю они не должны (RGC, ст. 18).',
          en: '<b>Animals</b> ride in the back and are <b>secured</b> (harness with a clip, carrier), ideally behind a dog guard. They must never roam the cabin or disturb the driver (RGC art. 18).' } },
        { type: 'examples', items: [
          { es: 'Los niños de hasta 135 cm viajan en una <b>silla homologada</b>.', ru: 'Дети ростом до 135 см ездят в сертифицированном кресле.', en: 'Children up to 135 cm travel in an approved child seat.' },
          { es: 'El bebé va <b>a contramarcha</b> en el asiento trasero.', ru: 'Младенец едет против хода на заднем сиденье.', en: 'The baby travels rear-facing in the back seat.' },
          { es: 'Antes de poner la silla delante, <b>desactiva el airbag</b>.', ru: 'Прежде чем ставить кресло вперёд, отключи подушку безопасности.', en: 'Before putting the seat in front, switch off the airbag.' },
          { es: 'El perro viaja <b>sujeto</b> en el asiento de atrás.', ru: 'Собака едет пристёгнутой на заднем сиденье.', en: 'The dog travels secured in the back seat.' }
        ] }
      ] },
      { id: 'load', label: { ru: 'Груз', en: 'Load' }, blocks: [
        { type: 'text', body: {
          ru: ['Груз должен быть <b>закреплён</b> так, чтобы не волочился, не падал, не смещался и не нарушал устойчивость машины; не шумел и не пылил; не закрывал <b>фары, сигналы, номер</b> и руки водителя, когда он подаёт знаки (RGC, ст. 14). Сыпучие и пылящие грузы — <b>полностью накрыть</b>. Вещи в салоне — в багажнике или закреплены, чтобы при торможении не полетели вперёд.'],
          en: ['A load must be <b>secured</b> so that it does not drag, fall, shift or unbalance the vehicle; make noise or dust; or hide the <b>lights, indicators, number plate</b> or the driver’s hand signals (RGC art. 14). Loose or dusty loads must be <b>fully covered</b>. Items in the cabin go in the boot or are secured so they do not fly forward when braking.'] } },
        { type: 'figure', src: 'img/dgt/transporte-carga.svg',
          alt: { ru: 'Легковая машина длиной 4 м с доской на багажнике на крыше; доска выступает назад на 0,60 м (15 %), на её конце — бело-красная полосатая панель V-20.', en: 'A 4 m car with a board on the roof rack; the board sticks out 0.60 m (15 %) at the back, with a red-and-white striped V-20 panel at its end.' },
          caption: { ru: 'Легковой автомобиль: груз может выступать только назад — делимый на 10 %, неделимый на 15 % длины машины (RGC, ст. 15.3).', en: 'A car: the load may stick out only at the back — 10 % of the vehicle length if divisible, 15 % if indivisible (RGC art. 15.3).' } },
        { type: 'table', heading: { ru: 'Сколько может выступать груз (RGC, ст. 15)', en: 'How far a load may stick out (RGC art. 15)' },
          head: [{ ru: 'Транспорт', en: 'Vehicle' }, { ru: 'Вперёд', en: 'Front' }, { ru: 'Назад', en: 'Rear' }, { ru: 'В стороны', en: 'Sides' }],
          rows: [
            [{ ru: 'Легковой и др.', en: 'Car and others' }, { ru: 'нельзя', en: 'not allowed' }, '10 % / 15 %', { ru: 'нельзя', en: 'not allowed' }],
            [{ ru: 'Грузовик до 5 м', en: 'Lorry up to 5 m' }, '1/3', '1/3', '0,40 m'],
            [{ ru: 'Грузовик больше 5 м', en: 'Lorry over 5 m' }, '2 m', '3 m', '0,40 m'],
            [{ ru: 'Уже 1 м (мото)', en: 'Under 1 m wide (moto)' }, { ru: 'нельзя', en: 'not allowed' }, '0,25 m', { ru: '0,50 m от оси', en: '0.50 m from axis' }]
          ] },
        { type: 'rules', heading: { ru: 'Как обозначить выступающий груз', en: 'How to mark a projecting load' }, items: [
          { color: 'coral', label: { ru: 'Назад', en: 'Rear' }, title: { ru: 'Панель V-20', en: 'V-20 panel' }, es: 'señal V-20',
            body: { ru: 'Квадратная панель с красными и белыми диагональными полосами на конце груза — <b>днём и ночью</b>. Если груз выступает по всей ширине — две панели по краям, «перевёрнутой V». Ночью или при плохой видимости — ещё и <b>красный</b> фонарь.', en: 'A square panel with red and white diagonal stripes at the end of the load — <b>day and night</b>. If the load sticks out across the full width — two panels at the edges, forming an inverted “V”. At night or in poor visibility — also a <b>red</b> light.' } },
          { color: 'coral', label: { ru: 'Вперёд и вбок', en: 'Front and sides' }, title: { ru: 'Белый спереди, красный сзади', en: 'White front, red rear' },
            body: { ru: 'Вперёд (у грузовиков) днём не обозначают, ночью — <b>белый</b> свет. Вбок больше 0,40 м от габаритного огня — ночью на краях белый свет и катафот спереди, красные сзади.', en: 'Forward (on lorries) — no marking by day, a <b>white</b> light at night. More than 0.40 m to the side of the position lamp — at night white light and reflector at the front edges, red ones at the rear.' } }
        ] },
        { type: 'table', heading: { ru: 'Максимальные размеры с грузом', en: 'Maximum dimensions with load' },
          head: [{ ru: 'Параметр', en: 'Dimension' }, { ru: 'Значение', en: 'Value' }],
          rows: [
            [{ ru: 'Ширина', en: 'Width' }, '2,55 m'],
            [{ ru: 'Высота (обычно)', en: 'Height (general)' }, '4 m'],
            [{ ru: 'Длина машины без прицепа', en: 'Rigid vehicle length' }, '12 m'],
            [{ ru: 'Длина с прицепом', en: 'Length with a trailer' }, '18,75 m']
          ] },
        { type: 'text', color: 'blue', body: {
          ru: '<b>Погрузка и разгрузка</b> — вне дороги. Если иначе нельзя: соблюдать правила остановки и стоянки, работать со стороны тротуара или обочины, быстро и без лишнего шума. Оставлять груз на проезжей части, обочине или тротуаре <b>запрещено</b> (RGC, ст. 16).',
          en: '<b>Loading and unloading</b> — off the road. If unavoidable: follow the stopping and parking rules, work from the pavement or verge side, quickly and without needless noise. Leaving goods on the carriageway, hard shoulder or pavement is <b>forbidden</b> (RGC art. 16).' } },
        { type: 'examples', items: [
          { es: 'La carga debe ir bien <b>sujeta</b> para que no se mueva.', ru: 'Груз должен быть надёжно закреплён, чтобы не смещался.', en: 'The load must be well secured so it does not move.' },
          { es: 'Las bicicletas en el <b>portabicicletas</b> no pueden tapar la matrícula.', ru: 'Велосипеды на велобагажнике не должны закрывать номер.', en: 'Bicycles on the bike rack must not cover the number plate.' },
          { es: 'La tabla <b>sobresale</b> por detrás: ponemos la señal V-20.', ru: 'Доска выступает назад: ставим знак V-20.', en: 'The board sticks out at the back: we put up the V-20 sign.' },
          { es: 'La arena se transporta siempre <b>cubierta</b>.', ru: 'Песок всегда перевозят накрытым.', en: 'Sand is always transported covered.' },
          { es: 'Está prohibido dejar la mercancía en la <b>calzada</b>.', ru: 'Запрещено оставлять товар на проезжей части.', en: 'Leaving goods on the carriageway is forbidden.' }
        ] }
      ] },
      { id: 'trailer', label: { ru: 'Прицеп', en: 'Trailer' }, blocks: [
        { type: 'rules', items: [
          { color: 'amber', label: { ru: 'Лёгкий прицеп', en: 'Light trailer' }, title: { ru: 'До 750 кг', en: 'Up to 750 kg' }, es: 'remolque ligero',
            body: { ru: 'MMA не больше <b>750 кг</b>: хватает прав B, не нужно своё регистрационное свидетельство и отдельная страховка. Сзади — <b>номер тягача</b>.', en: 'MMA no more than <b>750 kg</b>: a B licence is enough, no separate registration certificate or insurance is needed. At the back — the <b>towing vehicle’s plate</b>.' } },
          { color: 'amber', label: { ru: 'Тяжелее 750 кг', en: 'Over 750 kg' }, title: { ru: 'Свой номер и документы', en: 'Own plate and papers' },
            body: { ru: 'Сзади — <b>свой номер</b> прицепа и номер тягача; нужны свои документы, ИТВ и страховка. С правами B — только если сцепка не больше 3500 кг, иначе B+E.', en: 'At the back — the trailer’s <b>own plate</b> and the towing vehicle’s plate; it needs its own papers, ITV and insurance. On a B licence — only if the combination is ≤ 3,500 kg, otherwise B+E.' } },
          { color: 'amber', label: { ru: 'Скорость', en: 'Speed' }, title: { ru: '90 / 80 км/ч', en: '90 / 80 km/h' }, es: 'automóvil con remolque',
            body: { ru: 'Автомобиль с прицепом: <b>90 км/ч</b> на autopista/autovía и <b>80 км/ч</b> на обычной дороге (RGC, ст. 48).', en: 'A car with a trailer: <b>90 km/h</b> on autopistas/autovías and <b>80 km/h</b> on ordinary roads (RGC art. 48).' } },
          { color: 'purple', label: { ru: 'Мото и мопед', en: 'Moto and moped' }, title: { ru: 'Прицеп до 50 %', en: 'Trailer up to 50 %' },
            body: { ru: 'Мотоцикл, мопед, трицикл могут тянуть прицеп не тяжелее <b>половины</b> собственной массы, только <b>днём</b> при хорошей видимости, со скоростью на <b>10 %</b> ниже обычной и без людей в прицепе (RGC, ст. 12.3).', en: 'A motorbike, moped or tricycle may tow a trailer of up to <b>half</b> its own unladen mass, only in <b>daylight</b> with good visibility, at <b>10 %</b> below its normal speed and with nobody in the trailer (RGC art. 12.3).' } }
        ] },
        { type: 'text', body: {
          ru: ['Велобагажник: велосипеды — это груз. Они могут выступать назад не больше чем на 10 % длины машины (с панелью V-20) и не должны закрывать фары и номер; если багажник их закрывает, на нём должны быть свои фонари и дополнительный номер.'],
          en: ['A bike rack: bicycles are a load. They may stick out at the back by no more than 10 % of the vehicle length (with a V-20 panel) and must not hide the lights or plate; if the rack covers them, it must carry its own lights and an additional plate.'] } },
        { type: 'signs', heading: { ru: 'Знаки ограничений', en: 'Restriction signs' }, items: [
          { code: 'R-201', note: { ru: 'Запрещён проезд, если <b>фактическая</b> масса с грузом больше указанной.', en: 'No passage if the <b>actual</b> laden mass exceeds the figure.' } },
          { code: 'R-107', note: { ru: 'Грузовым ТС с <b>MMA</b> больше указанной — даже пустым.', en: 'Goods vehicles with an <b>MMA</b> above the figure — even when empty.' } },
          { code: 'R-203', note: { ru: 'Длина вместе с грузом.', en: 'Length including the load.' } },
          { code: 'R-204', note: { ru: 'Ширина вместе с грузом.', en: 'Width including the load.' } },
          { code: 'R-205', note: { ru: 'Высота вместе с грузом.', en: 'Height including the load.' } },
          { code: 'R-112', note: { ru: 'С прицепом нельзя (кроме одноосных); цифра — только для прицепов тяжелее её.', en: 'No vehicles with trailers (except single-axle); a figure means only trailers heavier than it.' } }
        ] },
        { type: 'examples', items: [
          { es: 'Con un <b>remolque ligero</b> basta el permiso B.', ru: 'Для лёгкого прицепа хватает прав B.', en: 'With a light trailer a B licence is enough.' },
          { es: 'Con remolque no puedo pasar de <b>90 km/h</b> en la autovía.', ru: 'С прицепом нельзя ехать быстрее 90 км/ч по автомагистрали.', en: 'With a trailer I can’t go over 90 km/h on the autovía.' },
          { es: 'El remolque lleva la <b>matrícula del coche</b> que lo arrastra.', ru: 'На прицепе — номер машины, которая его тянет.', en: 'The trailer carries the plate of the car towing it.' },
          { es: 'Nunca viajan personas dentro del <b>remolque</b>.', ru: 'Люди никогда не едут в прицепе.', en: 'People never travel inside the trailer.' }
        ] }
      ] },
      { id: 'plates', label: { ru: 'Таблички', en: 'Plates' }, blocks: [
        { type: 'rules', items: [
          { color: 'blue', label: { ru: 'V-13', en: 'V-13' }, title: { ru: 'Новичок', en: 'New driver' }, es: 'conductor novel',
            body: { ru: 'Зелёная табличка с белой «L» на заднем стекле: стаж прав меньше <b>1 года</b>.', en: 'A green plate with a white “L” on the rear window: the licence is less than <b>1 year</b> old.' } },
          { color: 'blue', label: { ru: 'V-20', en: 'V-20' }, title: { ru: 'Выступающий груз', en: 'Projecting load' }, es: 'carga sobresaliente',
            body: { ru: 'Красно-белая полосатая панель на конце груза, который выступает назад.', en: 'A red-and-white striped panel at the end of a load that sticks out at the back.' } },
          { color: 'blue', label: { ru: 'V-4', en: 'V-4' }, title: { ru: 'Ограничение скорости', en: 'Speed limit' }, es: 'limitación de velocidad',
            body: { ru: 'Круг с числом сзади: эта машина не может ехать быстрее указанной скорости.', en: 'A circle with a number at the back: this vehicle may not go faster than that speed.' } },
          { color: 'blue', label: { ru: 'V-5', en: 'V-5' }, title: { ru: 'Тихоходное ТС', en: 'Slow vehicle' }, es: 'vehículo lento',
            body: { ru: 'Сзади: машина не может ехать быстрее <b>40 км/ч</b>.', en: 'At the back: the vehicle cannot go faster than <b>40 km/h</b>.' } },
          { color: 'blue', label: { ru: 'V-6', en: 'V-6' }, title: { ru: 'Длинное ТС', en: 'Long vehicle' }, es: 'vehículo largo',
            body: { ru: 'Жёлтая табличка с красной каймой сзади: длина больше <b>12 м</b>.', en: 'A yellow plate with a red border at the back: longer than <b>12 m</b>.' } },
          { color: 'blue', label: { ru: 'V-16', en: 'V-16' }, title: { ru: 'Аварийный маячок', en: 'Warning beacon' }, es: 'luz V-16',
            body: { ru: 'Жёлтый мигающий маячок на крыше при поломке или упавшем грузе; с <b>1 января 2026</b> — вместо треугольников, с подключением к DGT.', en: 'A flashing yellow beacon on the roof after a breakdown or a fallen load; from <b>1 January 2026</b> it replaces the triangles and is connected to the DGT.' } }
        ] },
        { type: 'text', body: {
          ru: ['Номера: у автомобилей — <b>два</b> (спереди и сзади), у мотоциклов и мопедов — <b>один</b> сзади. Синие мигающие огни (с сиреной или без) — у машин экстренных служб: полиции, пожарных, скорой.'],
          en: ['Number plates: cars have <b>two</b> (front and rear), motorbikes and mopeds <b>one</b> at the rear. Flashing blue lights (with or without a siren) are for emergency vehicles: police, fire brigade, ambulance.'] } },
        { type: 'examples', items: [
          { es: 'El camión lleva la placa de <b>vehículo largo</b>.', ru: 'У грузовика табличка «длинное транспортное средство».', en: 'The lorry has the long-vehicle plate.' },
          { es: 'Las motos llevan una sola <b>placa de matrícula</b>, detrás.', ru: 'У мотоциклов только один номер — сзади.', en: 'Motorbikes have just one number plate, at the back.' },
          { es: 'Tras la avería encendí la <b>luz V-16</b>.', ru: 'После поломки я включил маячок V-16.', en: 'After the breakdown I switched on the V-16 beacon.' }
        ] }
      ] }
    ],
    quizCount: 20,
    quiz: [
      { es: '¿Qué ocurre si un vehículo lleva un 50 % más de pasajeros de las plazas autorizadas?',
        prompt: { ru: 'Что будет, если в машине на 50 % больше пассажиров, чем разрешено мест?', en: 'What happens if a vehicle carries 50 % more passengers than its authorised seats?' },
        options: [
          { es: 'Nada, si van despacio.', ru: 'Ничего, если ехать медленно.', en: 'Nothing, if they drive slowly.' },
          { es: 'Es una infracción y el vehículo puede ser inmovilizado.', ru: 'Это нарушение, и машину могут задержать.', en: 'It is an offence and the vehicle may be immobilised.' },
          { es: 'Solo se avisa al conductor.', ru: 'Водителя только предупреждают.', en: 'The driver is only warned.' }
        ],
        answer: 1,
        explain: { ru: 'Перегруз на 50 % мест (без водителя) — серьёзное нарушение; машину задерживают, пока лишние не выйдут. RGC, ст. 9.3; LSV, ст. 76 u.', en: 'Exceeding the seats by 50 % (driver excluded) is a serious offence; the vehicle is held until the extra people get out. RGC art. 9.3; LSV art. 76 u.' } },
      { es: '¿Por qué lado deben subir y bajar los pasajeros de un turismo?',
        prompt: { ru: 'С какой стороны пассажиры должны садиться и выходить из машины?', en: 'On which side should passengers get in and out of a car?' },
        options: [
          { es: 'Por el lado más cercano a la acera o al arcén, con el vehículo parado.', ru: 'Со стороны тротуара или обочины, когда машина стоит.', en: 'On the side nearest the pavement or hard shoulder, with the vehicle stopped.' },
          { es: 'Por cualquier lado, si miran antes.', ru: 'С любой стороны, если сначала посмотреть.', en: 'On either side, if they look first.' },
          { es: 'Por el lado izquierdo siempre.', ru: 'Всегда с левой стороны.', en: 'Always on the left side.' }
        ],
        answer: 0,
        explain: { ru: 'Садиться и выходить — только при остановке и со стороны тротуара или обочины. Manual DGT, тема 13.', en: 'Get in and out only when stopped and on the pavement or hard-shoulder side. DGT manual, topic 13.' } },
      { es: '¿Qué niños deben utilizar un sistema de retención infantil homologado en un turismo?',
        prompt: { ru: 'Какие дети в легковой машине должны ехать в сертифицированном детском кресле?', en: 'Which children must use an approved child restraint in a car?' },
        options: [
          { es: 'Los menores de 3 años solamente.', ru: 'Только младше 3 лет.', en: 'Only those under 3.' },
          { es: 'Los que pesen menos de 50 kg.', ru: 'Те, кто весит меньше 50 кг.', en: 'Those weighing under 50 kg.' },
          { es: 'Los menores de edad que midan 135 cm o menos.', ru: 'Несовершеннолетние ростом 135 см и ниже.', en: 'Minors who are 135 cm tall or shorter.' }
        ],
        answer: 2,
        explain: { ru: 'Критерий — рост: до 135 см включительно нужен SRI по росту и весу. RGC, ст. 117.1.', en: 'The criterion is height: up to and including 135 cm an SRI suited to height and weight is required. RGC art. 117.1.' } },
      { es: '¿Dónde deben viajar, como norma general, los niños de 135 cm o menos?',
        prompt: { ru: 'Где, как правило, должны ехать дети ростом 135 см и ниже?', en: 'Where, as a rule, must children of 135 cm or less travel?' },
        options: [
          { es: 'En el asiento delantero, para vigilarlos.', ru: 'На переднем сиденье, чтобы за ними следить.', en: 'In the front seat, to keep an eye on them.' },
          { es: 'En los asientos traseros.', ru: 'На задних сиденьях.', en: 'In the rear seats.' },
          { es: 'En brazos de un adulto.', ru: 'На руках у взрослого.', en: 'On an adult’s lap.' }
        ],
        answer: 1,
        explain: { ru: 'Правило — задние сиденья; вперёд только в трёх исключительных случаях. На руках у взрослого — никогда. RGC, ст. 117.3.', en: 'The rule is the rear seats; the front only in three exceptional cases. Never on an adult’s lap. RGC art. 117.3.' } },
      { es: '¿En cuál de estos casos puede viajar delante un niño de 120 cm, en su silla?',
        prompt: { ru: 'В каком случае ребёнок ростом 120 см может ехать впереди в своём кресле?', en: 'In which case may a 120 cm child travel in front, in his seat?' },
        options: [
          { es: 'Si el viaje es corto.', ru: 'Если поездка короткая.', en: 'If the trip is short.' },
          { es: 'Si el niño lo prefiere.', ru: 'Если ребёнок так хочет.', en: 'If the child prefers it.' },
          { es: 'Si todos los asientos traseros están ocupados por otros niños de 135 cm o menos.', ru: 'Если все задние места заняты другими детьми ростом до 135 см.', en: 'If all rear seats are taken by other children of 135 cm or less.' }
        ],
        answer: 2,
        explain: { ru: 'Исключения: нет задних сидений, все задние заняты такими же детьми или кресла сзади не помещаются. RGC, ст. 117.3.', en: 'Exceptions: no rear seats, all rear seats taken by such children, or the child seats do not fit in the back. RGC art. 117.3.' } },
      { es: '¿Se puede colocar una silla infantil a contramarcha en el asiento del acompañante?',
        prompt: { ru: 'Можно ли ставить детское кресло против хода на переднее пассажирское сиденье?', en: 'May a rear-facing child seat be placed on the front passenger seat?' },
        options: [
          { es: 'Sí, solo si el airbag frontal está desactivado.', ru: 'Да, только если фронтальная подушка безопасности отключена.', en: 'Yes, only if the front airbag is switched off.' },
          { es: 'Sí, siempre que el airbag esté activado.', ru: 'Да, если подушка безопасности включена.', en: 'Yes, as long as the airbag is on.' },
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' }
        ],
        answer: 0,
        explain: { ru: 'Раскрывшаяся подушка ударит в спинку кресла против хода, поэтому её отключают. RGC, ст. 117.3.', en: 'A deploying airbag would strike the back of a rear-facing seat, so it must be switched off. RGC art. 117.3.' } },
      { es: 'Un niño viaja sin su sistema de retención infantil. ¿Quién es responsable?',
        prompt: { ru: 'Ребёнок едет без детского кресла. Кто отвечает?', en: 'A child is travelling without his child restraint. Who is responsible?' },
        options: [
          { es: 'El propio niño.', ru: 'Сам ребёнок.', en: 'The child himself.' },
          { es: 'El conductor del vehículo.', ru: 'Водитель машины.', en: 'The driver of the vehicle.' },
          { es: 'El fabricante de la silla.', ru: 'Производитель кресла.', en: 'The manufacturer of the seat.' }
        ],
        answer: 1,
        explain: { ru: 'За детское кресло отвечает водитель: 200 € и 4 балла. LSV, ст. 82; прил. II, п. 15.', en: 'The driver is responsible for the child seat: €200 and 4 points. LSV art. 82; Annex II, item 15.' } },
      { es: '¿Qué edad mínima, como regla general, debe tener el pasajero de una motocicleta?',
        prompt: { ru: 'Какой минимальный возраст, как правило, у пассажира мотоцикла?', en: 'As a general rule, what is the minimum age for a motorbike passenger?' },
        options: [
          { es: 'Más de 7 años.', ru: 'Старше 7 лет.', en: 'Over 7.' },
          { es: 'Más de 16 años.', ru: 'Старше 16 лет.', en: 'Over 16.' },
          { es: 'Más de 12 años.', ru: 'Старше 12 лет.', en: 'Over 12.' }
        ],
        answer: 2,
        explain: { ru: 'Пассажир мотоцикла или мопеда — старше 12 лет; старше 7 — только с родителем или уполномоченным взрослым. RGC, ст. 12.', en: 'A motorbike or moped passenger must be over 12; over 7 only with a parent or an authorised adult. RGC art. 12.' } },
      { es: '¿Puede un niño de 9 años viajar como pasajero en la moto que conduce su madre?',
        prompt: { ru: 'Может ли 9-летний ребёнок ехать пассажиром на мотоцикле, которым управляет его мать?', en: 'May a 9-year-old ride as a passenger on a motorbike ridden by his mother?' },
        options: [
          { es: 'Sí, con casco y cumpliendo las demás condiciones.', ru: 'Да, в шлеме и при соблюдении остальных условий.', en: 'Yes, with a helmet and meeting the other conditions.' },
          { es: 'No, hasta los 12 años nunca.', ru: 'Нет, до 12 лет никогда.', en: 'No, never before 12.' },
          { es: 'Sí, delante de ella para sujetarlo mejor.', ru: 'Да, перед ней, чтобы лучше держать.', en: 'Yes, in front of her to hold him better.' }
        ],
        answer: 0,
        explain: { ru: 'Старше 7 лет — можно с родителем, опекуном или уполномоченным взрослым, в шлеме, сзади, ноги на подножках. Между водителем и рулём — никогда. RGC, ст. 12.2.', en: 'Over 7 is allowed with a parent, guardian or authorised adult, with a helmet, behind, feet on the footrests. Never between the rider and the handlebar. RGC art. 12.2.' } },
      { es: '¿Cómo debe ir sentado el pasajero de una motocicleta?',
        prompt: { ru: 'Как должен сидеть пассажир мотоцикла?', en: 'How must a motorbike passenger sit?' },
        options: [
          { es: 'De lado, con los pies en el mismo estribo.', ru: 'Боком, ноги на одной подножке.', en: 'Side-saddle, feet on the same footrest.' },
          { es: 'A horcajadas, detrás del conductor y con los pies en los reposapiés.', ru: 'Верхом, позади водителя, ноги на подножках.', en: 'Astride, behind the rider, with feet on the footrests.' },
          { es: 'Entre el conductor y el manillar.', ru: 'Между водителем и рулём.', en: 'Between the rider and the handlebar.' }
        ],
        answer: 1,
        explain: { ru: 'Верхом, на сиденье позади водителя, ноги на боковых подножках, в шлеме. RGC, ст. 12.1.', en: 'Astride, on the seat behind the rider, feet on the side footrests, wearing a helmet. RGC art. 12.1.' } },
      { es: '¿A quién puede llevar un adulto en una bicicleta de una plaza con un asiento adicional homologado?',
        prompt: { ru: 'Кого взрослый может везти на одноместном велосипеде в дополнительном сертифицированном кресле?', en: 'Whom may an adult carry on a single-seat bicycle with an approved extra seat?' },
        options: [
          { es: 'A otro adulto.', ru: 'Другого взрослого.', en: 'Another adult.' },
          { es: 'A un niño de hasta 12 años.', ru: 'Ребёнка до 12 лет.', en: 'A child up to 12.' },
          { es: 'A un niño menor de 7 años.', ru: 'Ребёнка младше 7 лет.', en: 'A child under 7.' }
        ],
        answer: 2,
        explain: { ru: 'Взрослый велосипедист может везти ребёнка младше 7 лет в дополнительном кресле. Manual DGT, тема 13.', en: 'An adult cyclist may carry a child under 7 in an extra seat. DGT manual, topic 13.' } },
      { es: '¿Cómo debe transportarse un perro en un turismo?',
        prompt: { ru: 'Как перевозить собаку в легковой машине?', en: 'How should a dog be carried in a car?' },
        options: [
          { es: 'Suelto, para que vaya cómodo.', ru: 'Свободно, чтобы ему было удобно.', en: 'Loose, so it is comfortable.' },
          { es: 'Sujeto en la parte trasera, sin que moleste al conductor.', ru: 'Закреплённой сзади, чтобы не мешала водителю.', en: 'Secured in the back, without disturbing the driver.' },
          { es: 'En el regazo del acompañante.', ru: 'На коленях у переднего пассажира.', en: 'On the front passenger’s lap.' }
        ],
        answer: 1,
        explain: { ru: 'Животное едет сзади, закреплённым (ремень, переноска, сетка); оно не должно мешать водителю. RGC, ст. 18.1; Manual DGT, тема 13.', en: 'The animal travels in the back, secured (harness, carrier, guard); it must not disturb the driver. RGC art. 18.1; DGT manual, topic 13.' } },
      { es: 'En un turismo de 4 metros, ¿cuánto puede sobresalir por detrás una carga divisible?',
        prompt: { ru: 'Насколько делимый груз может выступать назад у легковой машины длиной 4 м?', en: 'On a 4-metre car, how far may a divisible load stick out at the back?' },
        options: [
          { es: '0,40 metros.', ru: '0,40 м.', en: '0.40 metres.' },
          { es: '0,60 metros.', ru: '0,60 м.', en: '0.60 metres.' },
          { es: '1 metro.', ru: '1 м.', en: '1 metre.' }
        ],
        answer: 0,
        explain: { ru: 'Делимый груз — 10 % длины: 10 % от 4 м = 0,40 м. 0,60 м (15 %) — для неделимого. RGC, ст. 15.3.', en: 'A divisible load — 10 % of the length: 10 % of 4 m = 0.40 m. 0.60 m (15 %) is for an indivisible one. RGC art. 15.3.' } },
      { es: '¿Cuánto puede sobresalir por detrás una carga indivisible en un turismo?',
        prompt: { ru: 'Насколько неделимый груз может выступать назад у легкового автомобиля?', en: 'How far may an indivisible load stick out at the back of a car?' },
        options: [
          { es: 'Hasta un 10 % de la longitud del vehículo.', ru: 'До 10 % длины машины.', en: 'Up to 10 % of the vehicle length.' },
          { es: 'Hasta 3 metros.', ru: 'До 3 м.', en: 'Up to 3 metres.' },
          { es: 'Hasta un 15 % de la longitud del vehículo.', ru: 'До 15 % длины машины.', en: 'Up to 15 % of the vehicle length.' }
        ],
        answer: 2,
        explain: { ru: 'Неделимый — 15 %, делимый — 10 %. 3 м назад — это грузовики длиннее 5 м. RGC, ст. 15.3.', en: 'Indivisible — 15 %, divisible — 10 %. 3 m rearwards is for lorries over 5 m. RGC art. 15.3.' } },
      { es: '¿Puede sobresalir la carga por delante de un turismo?',
        prompt: { ru: 'Может ли груз выступать вперёд у легкового автомобиля?', en: 'May a load stick out at the front of a car?' },
        options: [
          { es: 'Sí, hasta 1 metro.', ru: 'Да, до 1 м.', en: 'Yes, up to 1 metre.' },
          { es: 'No; en un turismo solo puede sobresalir por detrás.', ru: 'Нет: у легковой машины груз может выступать только назад.', en: 'No; on a car it may only stick out at the back.' },
          { es: 'Sí, si se señaliza con una luz blanca.', ru: 'Да, если обозначить белым светом.', en: 'Yes, if marked with a white light.' }
        ],
        answer: 1,
        explain: { ru: 'Для ТС не только для грузов (легковых) груз может выступать только назад. Вперёд — лишь у грузовиков с неделимым грузом. RGC, ст. 15.2–3.', en: 'For vehicles not used solely for goods (cars), the load may stick out only at the back. Forward only on lorries with indivisible loads. RGC art. 15.2–3.' } },
      { es: '¿Cuándo hay que señalizar con la señal V-20 una carga que sobresale por detrás?',
        prompt: { ru: 'Когда нужно обозначать знаком V-20 груз, выступающий назад?', en: 'When must a load sticking out at the back be marked with the V-20 sign?' },
        options: [
          { es: 'Solo de noche.', ru: 'Только ночью.', en: 'Only at night.' },
          { es: 'Solo si sobresale más de un metro.', ru: 'Только если выступает больше чем на метр.', en: 'Only if it sticks out more than one metre.' },
          { es: 'Siempre, de día y de noche.', ru: 'Всегда, днём и ночью.', en: 'Always, day and night.' }
        ],
        answer: 2,
        explain: { ru: 'V-20 нужна всегда, когда груз выступает назад; ночью или при плохой видимости добавляют красный свет. RGC, ст. 15.6.', en: 'V-20 is always required when the load sticks out at the back; at night or in poor visibility add a red light. RGC art. 15.6.' } },
      { es: 'Circula de noche con una carga que sobresale por detrás. Además de la V-20, ¿qué debe llevar?',
        prompt: { ru: 'Вы едете ночью с грузом, выступающим назад. Что нужно, кроме V-20?', en: 'You drive at night with a load sticking out at the back. Apart from the V-20, what must you have?' },
        options: [
          { es: 'Una luz roja.', ru: 'Красный фонарь.', en: 'A red light.' },
          { es: 'Una luz blanca.', ru: 'Белый фонарь.', en: 'A white light.' },
          { es: 'Una luz amarilla intermitente.', ru: 'Жёлтый мигающий фонарь.', en: 'A flashing yellow light.' }
        ],
        answer: 0,
        explain: { ru: 'Сзади — красный, спереди — белый: как обычные огни машины. RGC, ст. 15.6.', en: 'Red at the back, white at the front — like the vehicle’s normal lights. RGC art. 15.6.' } },
      { es: 'La carga sobresale por detrás en toda la anchura del vehículo. ¿Cómo se señaliza?',
        prompt: { ru: 'Груз выступает назад по всей ширине машины. Как его обозначить?', en: 'The load sticks out at the back across the full width of the vehicle. How is it marked?' },
        options: [
          { es: 'Con una sola señal V-20 en el centro.', ru: 'Одной панелью V-20 в центре.', en: 'With a single V-20 in the middle.' },
          { es: 'Con dos señales V-20, una en cada extremo, formando una V invertida.', ru: 'Двумя панелями V-20 по краям, «перевёрнутой V».', en: 'With two V-20 panels, one at each end, forming an inverted V.' },
          { es: 'Con un trapo rojo.', ru: 'Красной тряпкой.', en: 'With a red cloth.' }
        ],
        answer: 1,
        explain: { ru: 'По всей ширине — две панели по краям груза, полосы образуют перевёрнутую V. RGC, ст. 15.6.', en: 'Across the full width — two panels at the edges of the load, the stripes forming an inverted V. RGC art. 15.6.' } },
      { es: '¿Qué anchura máxima puede tener un vehículo, incluida su carga?',
        prompt: { ru: 'Какая максимальная ширина у транспортного средства вместе с грузом?', en: 'What is the maximum width of a vehicle, including its load?' },
        options: [
          { es: '2,25 metros.', ru: '2,25 м.', en: '2.25 metres.' },
          { es: '3 metros.', ru: '3 м.', en: '3 metres.' },
          { es: '2,55 metros.', ru: '2,55 м.', en: '2.55 metres.' }
        ],
        answer: 2,
        explain: { ru: 'Общая максимальная ширина — 2,55 м вместе с грузом. Manual DGT, тема 13; RGC, ст. 15.2 b.', en: 'The general maximum width is 2.55 m including the load. DGT manual, topic 13; RGC art. 15.2 b.' } },
      { es: '¿Qué altura máxima, por regla general, puede tener un vehículo con su carga?',
        prompt: { ru: 'Какая, как правило, максимальная высота транспортного средства с грузом?', en: 'As a rule, what is the maximum height of a vehicle with its load?' },
        options: [
          { es: '4 metros.', ru: '4 м.', en: '4 metres.' },
          { es: '3,5 metros.', ru: '3,5 м.', en: '3.5 metres.' },
          { es: '5 metros.', ru: '5 м.', en: '5 metres.' }
        ],
        answer: 0,
        explain: { ru: 'Обычно 4 м; автобусы — 4,20 м, эвакуаторы — 4,50 м. Manual DGT, тема 13.', en: 'Generally 4 m; buses 4.20 m, tow trucks 4.50 m. DGT manual, topic 13.' } },
      { es: 'En una motocicleta, ¿cómo puede sobresalir la carga?',
        prompt: { ru: 'Как может выступать груз на мотоцикле?', en: 'How may a load stick out on a motorbike?' },
        options: [
          { es: 'Hasta 1 metro por delante.', ru: 'До 1 м вперёд.', en: 'Up to 1 metre in front.' },
          { es: 'Hasta 0,25 m por detrás y 0,50 m a cada lado desde el eje; nunca por delante.', ru: 'До 0,25 м назад и 0,50 м в каждую сторону от оси; вперёд — никогда.', en: 'Up to 0.25 m behind and 0.50 m each side of the axis; never in front.' },
          { es: 'Hasta un 15 % por detrás, como un turismo.', ru: 'До 15 % назад, как у легковой.', en: 'Up to 15 % behind, like a car.' }
        ],
        answer: 1,
        explain: { ru: 'ТС уже 1 м: вбок — не больше 0,50 м от продольной оси, назад — 0,25 м, вперёд — нельзя. RGC, ст. 15.4.', en: 'Vehicles under 1 m wide: sideways no more than 0.50 m from the centre line, 0.25 m behind, none in front. RGC art. 15.4.' } },
      { es: 'Un camión de 8 metros transporta vigas. ¿Cuánto pueden sobresalir por detrás?',
        prompt: { ru: 'Грузовик длиной 8 м везёт балки. Насколько они могут выступать назад?', en: 'An 8-metre lorry carries beams. How far may they stick out at the back?' },
        options: [
          { es: '3 metros.', ru: '3 м.', en: '3 metres.' },
          { es: '2 metros.', ru: '2 м.', en: '2 metres.' },
          { es: 'Un tercio de su longitud.', ru: 'Треть его длины.', en: 'One third of its length.' }
        ],
        answer: 0,
        explain: { ru: 'Грузовик длиннее 5 м: 2 м вперёд и 3 м назад. Треть длины — для грузовиков до 5 м. RGC, ст. 15.2 a.', en: 'A lorry over 5 m: 2 m in front and 3 m behind. One third of the length is for lorries up to 5 m. RGC art. 15.2 a.' } },
      { es: '¿Cómo deben transportarse materiales que producen polvo, como la arena?',
        prompt: { ru: 'Как перевозить пылящие материалы, например песок?', en: 'How must dusty materials such as sand be carried?' },
        options: [
          { es: 'Mojándolos antes de salir.', ru: 'Намочив их перед выездом.', en: 'Wetting them before setting off.' },
          { es: 'A poca velocidad.', ru: 'На малой скорости.', en: 'At low speed.' },
          { es: 'Cubiertos total y eficazmente.', ru: 'Полностью и надёжно накрытыми.', en: 'Fully and effectively covered.' }
        ],
        answer: 2,
        explain: { ru: 'Пылящие и сыпучие грузы всегда полностью накрывают. RGC, ст. 14.2.', en: 'Dusty or loose loads must always be fully covered. RGC art. 14.2.' } },
      { es: 'Las bicicletas del portabicicletas tapan la placa de matrícula trasera. ¿Es correcto?',
        prompt: { ru: 'Велосипеды на багажнике закрывают задний номер. Так можно?', en: 'The bikes on the rack cover the rear number plate. Is that correct?' },
        options: [
          { es: 'Sí, si el viaje es corto.', ru: 'Да, если поездка короткая.', en: 'Yes, if the trip is short.' },
          { es: 'No; la carga no puede ocultar la matrícula ni las luces.', ru: 'Нет: груз не должен закрывать номер и фонари.', en: 'No; the load must not hide the plate or the lights.' },
          { es: 'Sí, de día.', ru: 'Да, днём.', en: 'Yes, in daylight.' }
        ],
        answer: 1,
        explain: { ru: 'Груз не должен закрывать фары, сигналы и номер; если багажник их закрывает, на нём нужны свои фонари и дополнительный номер. RGC, ст. 14.1 d.', en: 'The load must not hide lights, indicators or the plate; if the rack covers them, it needs its own lights and an extra plate. RGC art. 14.1 d.' } },
      { es: '¿Dónde deben hacerse las operaciones de carga y descarga?',
        prompt: { ru: 'Где нужно грузить и разгружать?', en: 'Where must loading and unloading be done?' },
        options: [
          { es: 'Fuera de la vía, como norma general.', ru: 'Как правило, вне дороги.', en: 'Off the road, as a general rule.' },
          { es: 'En el carril de la izquierda.', ru: 'В левой полосе.', en: 'In the left-hand lane.' },
          { es: 'En el arcén, dejando allí la mercancía.', ru: 'На обочине, оставляя там товар.', en: 'On the hard shoulder, leaving the goods there.' }
        ],
        answer: 0,
        explain: { ru: 'Погрузка — вне дороги; если нельзя, то со стороны тротуара и быстро. Оставлять груз на дороге, обочине или тротуаре запрещено. RGC, ст. 16.', en: 'Loading is done off the road; if impossible, on the kerb side and quickly. Leaving goods on the road, shoulder or pavement is forbidden. RGC art. 16.' } },
      { es: '¿Qué remolque se considera ligero?',
        prompt: { ru: 'Какой прицеп считается лёгким?', en: 'Which trailer counts as light?' },
        options: [
          { es: 'El que mide menos de 3 metros.', ru: 'Короче 3 м.', en: 'One under 3 metres long.' },
          { es: 'El de masa máxima autorizada no superior a 750 kg.', ru: 'С разрешённой максимальной массой не больше 750 кг.', en: 'One with a maximum authorised mass of no more than 750 kg.' },
          { es: 'El que tiene un solo eje.', ru: 'Одноосный.', en: 'One with a single axle.' }
        ],
        answer: 1,
        explain: { ru: 'Лёгкий прицеп — MMA до 750 кг. Его можно тянуть с правами B, и ему не нужен свой permiso de circulación. RGCond, ст. 4.', en: 'A light trailer has an MMA of up to 750 kg. It can be towed on a B licence and needs no permiso de circulación of its own. RGCond art. 4.' } },
      { es: '¿Qué placa de matrícula lleva detrás un remolque de 500 kg de masa máxima autorizada?',
        prompt: { ru: 'Какой номер сзади у прицепа с MMA 500 кг?', en: 'What number plate does a trailer with a 500 kg MMA carry at the back?' },
        options: [
          { es: 'Su propia matrícula y la del coche.', ru: 'Свой номер и номер машины.', en: 'Its own plate and the car’s.' },
          { es: 'Ninguna.', ru: 'Никакого.', en: 'None.' },
          { es: 'La matrícula del vehículo que lo arrastra.', ru: 'Номер машины, которая его тянет.', en: 'The plate of the vehicle towing it.' }
        ],
        answer: 2,
        explain: { ru: 'Прицеп до 750 кг несёт только номер тягача; тяжелее — свой номер и номер тягача. Manual DGT, тема 13.', en: 'A trailer up to 750 kg carries only the towing vehicle’s plate; a heavier one carries its own plate and the towing vehicle’s. DGT manual, topic 13.' } },
      { es: '¿A qué velocidad máxima puede circular un turismo con remolque por una autovía?',
        prompt: { ru: 'С какой максимальной скоростью легковая машина с прицепом может ехать по autovía?', en: 'What is the maximum speed of a car towing a trailer on an autovía?' },
        options: [
          { es: '90 km/h.', ru: '90 км/ч.', en: '90 km/h.' },
          { es: '120 km/h.', ru: '120 км/ч.', en: '120 km/h.' },
          { es: '80 km/h.', ru: '80 км/ч.', en: '80 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'Автомобиль с прицепом: 90 км/ч на autopista/autovía, 80 км/ч на обычной дороге. RGC, ст. 48.', en: 'A vehicle with a trailer: 90 km/h on autopistas/autovías, 80 km/h on ordinary roads. RGC art. 48.' } },
      { es: '¿En qué condiciones puede una motocicleta arrastrar un remolque?',
        prompt: { ru: 'При каких условиях мотоцикл может тянуть прицеп?', en: 'Under what conditions may a motorbike tow a trailer?' },
        options: [
          { es: 'Nunca puede llevar remolque.', ru: 'Никогда.', en: 'Never.' },
          { es: 'De noche, con luces de emergencia.', ru: 'Ночью, с аварийными огнями.', en: 'At night, with hazard lights on.' },
          { es: 'De día, con un remolque de hasta la mitad de su masa en vacío y un 10 % más despacio.', ru: 'Днём, с прицепом до половины своей массы и на 10 % медленнее.', en: 'In daylight, with a trailer of up to half its unladen mass and 10 % slower.' }
        ],
        answer: 2,
        explain: { ru: 'Прицеп не тяжелее 50 % массы мотоцикла без груза, днём при хорошей видимости, скорость на 10 % ниже, без людей в прицепе. RGC, ст. 12.3.', en: 'A trailer of up to 50 % of the unladen mass, in daylight with good visibility, 10 % below the normal speed, no people in it. RGC art. 12.3.' } },
      { es: '¿Qué indica esta señal?',
        prompt: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Prohibido el paso a vehículos cuya altura, incluida la carga, supere 4,5 m.', ru: 'Проезд запрещён ТС высотой вместе с грузом больше 4,5 м.', en: 'No passage for vehicles taller than 4.5 m including the load.' },
          { es: 'Gálibo mínimo recomendado de 4,5 m.', ru: 'Рекомендуемый габарит 4,5 м.', en: 'Recommended clearance of 4.5 m.' },
          { es: 'Distancia mínima de 4,5 m entre vehículos.', ru: 'Минимальная дистанция 4,5 м между машинами.', en: 'Minimum distance of 4.5 m between vehicles.' }
        ],
        answer: 0,
        explain: { ru: 'R-205 — ограничение высоты, вместе с грузом. Треугольники сверху и снизу цифры указывают именно на высоту. Catálogo, R-205.', en: 'R-205 is a height limit, including the load. The arrowheads above and below the number show it is about height. Catalogue, R-205.' },
        sign: 'R-205' },
      { es: '¿Qué prohíbe esta señal?',
        prompt: { ru: 'Что запрещает этот знак?', en: 'What does this sign prohibit?' },
        options: [
          { es: 'El paso a vehículos de más de 2,5 m de altura.', ru: 'Проезд ТС выше 2,5 м.', en: 'Passage of vehicles over 2.5 m tall.' },
          { es: 'El paso a vehículos cuya anchura, incluida la carga, supere 2,5 m.', ru: 'Проезд ТС шириной вместе с грузом больше 2,5 м.', en: 'Passage of vehicles wider than 2.5 m including the load.' },
          { es: 'Circular a menos de 2,5 m del vehículo de delante.', ru: 'Ехать ближе 2,5 м к впереди идущему.', en: 'Driving closer than 2.5 m to the vehicle ahead.' }
        ],
        answer: 1,
        explain: { ru: 'R-204 — ограничение ширины; стрелки слева и справа от цифры. Высоту показывают стрелки сверху и снизу (R-205). Catálogo, R-204.', en: 'R-204 is a width limit; the arrowheads are left and right of the figure. Height has them above and below (R-205). Catalogue, R-204.' },
        sign: 'R-204' },
      { es: '¿Qué significa esta señal con un camión y la cifra 10 m?',
        prompt: { ru: 'Что означает этот знак с грузовиком и цифрой 10 м?', en: 'What does this sign with a lorry and “10 m” mean?' },
        options: [
          { es: 'Prohibido a camiones a menos de 10 m entre sí.', ru: 'Грузовикам запрещено ехать ближе 10 м друг к другу.', en: 'Lorries may not drive within 10 m of each other.' },
          { es: 'Aparcamiento de camiones a 10 m.', ru: 'Стоянка грузовиков через 10 м.', en: 'Lorry parking in 10 m.' },
          { es: 'Prohibido el paso a vehículos o conjuntos de más de 10 m de longitud, incluida la carga.', ru: 'Проезд запрещён ТС или сцепкам длиннее 10 м вместе с грузом.', en: 'No passage for vehicles or combinations longer than 10 m, including the load.' }
        ],
        answer: 2,
        explain: { ru: 'R-203 — ограничение длины, вместе с грузом и прицепом. Дистанцию между машинами задаёт другой знак, R-300. Catálogo, R-203.', en: 'R-203 is a length limit, including load and trailer. The distance between vehicles is a different sign, R-300. Catalogue, R-203.' },
        sign: 'R-203' },
      { es: 'Su furgoneta tiene una MMA de 3.500 kg, pero hoy pesa 4.000 kg con la carga. ¿Puede pasar ante esta señal de 5,5 t?',
        prompt: { ru: 'MMA вашего фургона 3500 кг, но сегодня с грузом он весит 4000 кг. Можно ли проехать под этот знак 5,5 т?', en: 'Your van’s MMA is 3,500 kg but today it weighs 4,000 kg loaded. May you pass this 5.5 t sign?' },
        options: [
          { es: 'Sí, porque su masa real no supera 5,5 t.', ru: 'Да: его фактическая масса не больше 5,5 т.', en: 'Yes, because its actual mass does not exceed 5.5 t.' },
          { es: 'No, ninguna furgoneta puede pasar.', ru: 'Нет, никакие фургоны проезжать не могут.', en: 'No, no van may pass.' },
          { es: 'No, porque lleva carga.', ru: 'Нет, потому что он с грузом.', en: 'No, because it is loaded.' }
        ],
        answer: 0,
        explain: { ru: 'R-201 ограничивает фактическую массу в момент проезда: 4 т меньше 5,5 т. (Кстати, 4000 кг при MMA 3500 кг — перегруз, за это наказывают отдельно.) Catálogo, R-201.', en: 'R-201 limits the actual mass at the time of passing: 4 t is under 5.5 t. (Note that 4,000 kg with a 3,500 kg MMA is overloading, which is punished separately.) Catalogue, R-201.' },
        sign: 'R-201' },
      { es: '¿A qué vehículos prohíbe la entrada esta señal?',
        prompt: { ru: 'Каким транспортным средствам этот знак запрещает въезд?', en: 'Which vehicles does this sign ban?' },
        options: [
          { es: 'A los de transporte de mercancías cuya masa máxima autorizada supere la indicada, aunque vayan vacíos.', ru: 'Грузовым ТС с MMA больше указанной, даже если они пустые.', en: 'Goods vehicles whose MMA exceeds the figure, even if empty.' },
          { es: 'Solo a los camiones cargados.', ru: 'Только гружёным грузовикам.', en: 'Only loaded lorries.' },
          { es: 'A todos los vehículos de más de 3.500 kg, incluidos autobuses.', ru: 'Всем ТС тяжелее 3500 кг, включая автобусы.', en: 'All vehicles over 3,500 kg, including buses.' }
        ],
        answer: 0,
        explain: { ru: 'R-107 — по MMA и только для грузового транспорта; пустой грузовик тоже не проедет. В отличие от R-201, который смотрит на фактическую массу. Catálogo, R-107.', en: 'R-107 goes by MMA and applies only to goods vehicles; an empty lorry may not enter either. Unlike R-201, which looks at the actual mass. Catalogue, R-107.' },
        sign: 'R-107' },
      { es: '¿Qué indica la placa V-6, amarilla con borde rojo, en la parte trasera de un camión?',
        prompt: { ru: 'Что означает жёлтая табличка V-6 с красной каймой сзади грузовика?', en: 'What does the yellow V-6 plate with a red border at the back of a lorry mean?' },
        options: [
          { es: 'Que transporta mercancías peligrosas.', ru: 'Что он везёт опасный груз.', en: 'That it carries dangerous goods.' },
          { es: 'Que mide más de 12 metros de largo.', ru: 'Что его длина больше 12 м.', en: 'That it is more than 12 metres long.' },
          { es: 'Que no puede pasar de 40 km/h.', ru: 'Что он не может ехать быстрее 40 км/ч.', en: 'That it cannot exceed 40 km/h.' }
        ],
        answer: 1,
        explain: { ru: 'V-6 — длинное ТС (больше 12 м). 40 км/ч — это V-5 «тихоходное ТС»; опасные грузы — оранжевые таблички. Manual DGT, тема 13.', en: 'V-6 marks a long vehicle (over 12 m). 40 km/h is V-5 “slow vehicle”; dangerous goods use orange plates. DGT manual, topic 13.' } }
    ]
  }
]);
