// DGT · theory, topic 05: vehicle safety devices. Sources: DGT «Teórica abreviada, lectura fácil» (2025),
// DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-seguridad', level: 'DGT',
    title: { ru: 'Системы безопасности автомобиля', en: 'Vehicle safety devices' },
    summary: {
      ru: 'Активная и пассивная безопасность, ремень, детские кресла, подушки, подголовник, шлем, жилет и V-16.',
      en: 'Active and passive safety, seat belt, child seats, airbags, head restraint, helmet, vest and V-16.'
    },
    hero: {
      es: 'Dispositivos de <b>seguridad</b>',
      sub: { ru: 'Что помогает избежать аварии, а что спасает, если она случилась', en: 'What helps avoid a crash, and what saves you when it happens' }
    },
    tabs: [
      { id: 'types', label: { ru: 'Два вида', en: 'Two types' }, blocks: [
        { type: 'rules', heading: { ru: 'Активная и пассивная', en: 'Active and passive' }, items: [
          { color: 'blue', label: { ru: 'Избежать аварии', en: 'Avoid the crash' }, title: { ru: 'Активная безопасность', en: 'Active safety' },
            es: 'seguridad activa',
            body: { ru: 'Системы, которые помогают <b>не попасть</b> в аварию. Работают, когда ими пользуется водитель: <b>тормоза</b>, <b>шины</b>, <b>свет</b>, рулевое управление, ABS, ESP.',
                    en: 'Systems that help you <b>avoid</b> a crash. They work when the driver uses them: <b>brakes</b>, <b>tyres</b>, <b>lights</b>, steering, ABS, ESP.' } },
          { color: 'amber', label: { ru: 'Уменьшить вред', en: 'Reduce the harm' }, title: { ru: 'Пассивная безопасность', en: 'Passive safety' },
            es: 'seguridad pasiva',
            body: { ru: 'Системы, которые <b>уменьшают травмы</b>, когда авария уже случилась. Срабатывают сами: <b>ремень</b>, <b>подушки</b>, <b>подголовник</b>, кузов с зонами деформации, шлем.',
                    en: 'Systems that <b>reduce injuries</b> once the crash has happened. They work by themselves: <b>seat belt</b>, <b>airbags</b>, <b>head restraint</b>, crumple-zone body, helmet.' } }
        ] },
        { type: 'table', heading: { ru: 'Электронные помощники', en: 'Electronic aids' },
          head: [{ ru: 'Система', en: 'System' }, { ru: 'Что делает', en: 'What it does' }],
          rows: [
            ['ABS', { ru: 'колёса не блокируются', en: 'wheels do not lock' }],
            [{ ru: 'Контроль тяги', en: 'Traction control' }, { ru: 'колесо не буксует', en: 'stops wheel spin' }],
            ['ESP', { ru: 'машина не уходит с траектории', en: 'keeps the car on its line' }],
            ['AEB', { ru: 'автоматически тормозит', en: 'brakes automatically' }],
            [{ ru: 'Ограничитель', en: 'Speed limiter' }, { ru: 'не даёт превысить скорость', en: 'caps the top speed' }],
            [{ ru: 'Круиз-контроль', en: 'Cruise control' }, { ru: 'держит заданную скорость', en: 'holds a set speed' }]
          ] },
        { type: 'text', color: 'blue', body: {
          ru: ['<b>Экстренное торможение с ABS:</b> жмите тормоз сильно и до упора, пока машина не остановится. <b>Без ABS:</b> жмите сильно, а когда колёса начинают блокироваться, чуть отпустите педаль — но не прекращайте тормозить.',
               'На длинном спуске тормозите <b>двигателем</b> (пониженная передача), иначе тормоза перегреются и будут хуже работать.'],
          en: ['<b>Emergency braking with ABS:</b> press the brake hard, all the way, until the car stops. <b>Without ABS:</b> press hard and, when the wheels start to lock, ease off slightly — but keep braking.',
               'On a long descent brake with the <b>engine</b> (a lower gear); otherwise the brakes overheat and work worse.'] } },
        { type: 'table', heading: { ru: 'Шины: цифры', en: 'Tyres: the numbers' },
          head: [{ ru: 'Что', en: 'What' }, { ru: 'Норма', en: 'Rule' }],
          rows: [
            [{ ru: 'Глубина протектора', en: 'Tread depth' }, { ru: 'не меньше 1,6 мм', en: 'at least 1.6 mm' }],
            [{ ru: 'Давление', en: 'Pressure' }, { ru: 'проверять раз в месяц', en: 'check once a month' }],
            [{ ru: 'Замена шин', en: 'Replacing tyres' }, { ru: 'примерно раз в 5 лет', en: 'about every 5 years' }],
            [{ ru: 'Докатка (galleta)', en: 'Space-saver spare' }, { ru: 'до 80 км/ч, ~200 км', en: 'up to 80 km/h, ~200 km' }]
          ] },
        { type: 'text', body: {
          ru: 'Низкое давление: шина греется, быстрее изнашивается, растёт расход, машину легче занести на мокрой дороге, шина может лопнуть. Высокое давление: меньше пятно контакта, хуже сцепление, сильнее изнашивается центр протектора.',
          en: 'Pressure too low: the tyre heats up, wears faster, fuel use rises, the car skids more easily on a wet road and the tyre may burst. Pressure too high: smaller contact patch, less grip, the centre of the tread wears more.' } }
      ] },
      { id: 'belt', label: { ru: 'Ремень', en: 'Seat belt' }, blocks: [
        { type: 'figure', src: 'img/dgt/seguridad-posicion.svg',
          alt: { ru: 'Схема: водитель в кресле, диагональная лента ремня через ключицу и середину груди, поясная лента на тазовых костях, верх подголовника на уровне макушки не дальше 4 см от головы, грудь не ближе 25 см к рулю.',
                 en: 'Diagram: a driver in the seat, the diagonal belt strap over the collarbone and mid-chest, the lap strap on the hip bones, the top of the head restraint level with the top of the head and no more than 4 cm away, the chest at least 25 cm from the steering wheel.' },
          caption: { ru: 'Правильная посадка: ремень, подголовник и расстояние до руля.', en: 'Correct position: seat belt, head restraint and distance to the wheel.' } },
        { type: 'text', color: 'amber', body: {
          ru: 'Ремень обязателен для <b>водителя и всех пассажиров</b> — и в городе, и за городом (RGC, ст. 117). Если ремня в машине нет (старый автомобиль), требовать его нельзя. Не пристегнулся — <b>4 балла</b> и серьёзный штраф (LSV, приложение II).',
          en: 'The belt is compulsory for the <b>driver and every passenger</b>, both in town and outside (RGC art. 117). If the vehicle has no belts fitted (an old car), it cannot be required. Not wearing it costs <b>4 points</b> and a serious fine (LSV, annex II).' } },
        { type: 'rules', heading: { ru: 'Как пристегнуться', en: 'How to wear it' }, items: [
          { color: 'amber', title: { ru: 'Диагональная лента', en: 'Chest strap' }, es: 'cinta torácica',
            body: { ru: 'Через <b>ключицу</b> — между плечом и шеей — и по середине груди. Не по шее и не сползая с плеча.',
                    en: 'Over the <b>collarbone</b> — between shoulder and neck — and down the middle of the chest. Not over the neck and not slipping off the shoulder.' } },
          { color: 'amber', title: { ru: 'Поясная лента', en: 'Lap strap' }, es: 'cinta abdominal',
            body: { ru: 'На <b>тазовых костях</b>, всегда ниже живота. На животе она при ударе повреждает внутренние органы.',
                    en: 'On the <b>hip bones</b>, always below the stomach. Across the belly it injures internal organs in a crash.' } }
        ] },
        { type: 'text', color: 'amber', body: {
          ru: '<b>Эффект подныривания</b> (<i>efecto submarino</i>): при ударе тело выскальзывает вниз под ремень. Причины — спинка слишком откинута, ремень ослаблен, на сиденье скользкий чехол или подушка.',
          en: '<b>Submarining</b> (<i>efecto submarino</i>): in a crash the body slides down under the belt. Causes: the seat back reclined too far, a slack belt, a slippery cover or cushion on the seat.' } },
        { type: 'table', heading: { ru: 'Когда можно без ремня', en: 'When the belt is not required' },
          head: [{ ru: 'Кто', en: 'Who' }, { ru: 'Где', en: 'Where' }],
          rows: [
            [{ ru: 'Водитель: задний ход, парковка', en: 'Driver reversing or parking' }, { ru: 'везде', en: 'anywhere' }],
            [{ ru: 'Медицинская справка', en: 'Medical certificate' }, { ru: 'везде', en: 'anywhere' }],
            [{ ru: 'Экстренные службы', en: 'Emergency vehicles' }, { ru: 'только в населённом пункте', en: 'only in built-up areas' }],
            [{ ru: 'Дети < 135 см в такси', en: 'Children < 135 cm in a taxi' }, { ru: 'в городе, только сзади', en: 'in town, rear seat only' }]
          ] },
        { type: 'tip', title: { ru: 'Запомните', en: 'Remember' }, body: {
          ru: 'Исключения про ремень работают <b>только в городе</b>, кроме двух: задний ход/парковка и медицинская справка. На трассе, autovía и autopista пристёгнуты все.',
          en: 'The seat-belt exemptions apply <b>only in town</b>, except two: reversing/parking and a medical certificate. On roads, autovías and autopistas everyone is belted.' } }
      ] },
      { id: 'children', label: { ru: 'Дети', en: 'Children' }, blocks: [
        { type: 'text', color: 'coral', body: {
          ru: ['Дети ростом <b>135 см и ниже</b> ездят в <b>детском удерживающем устройстве</b> (<i>SRI, sistema de retención infantil</i>), подобранном по росту и весу (RGC, ст. 117).',
               'В машине до 9 мест они сидят <b>сзади</b>. Вперёд — только в кресле и только если: сзади нет сидений; все задние места уже заняты такими же детьми; сзади нельзя установить все кресла.'],
          en: ['Children <b>135 cm tall or less</b> travel in a <b>child restraint system</b> (<i>SRI, sistema de retención infantil</i>) suited to their height and weight (RGC art. 117).',
               'In a vehicle with up to 9 seats they sit in the <b>back</b>. In front only in a child seat and only if: there are no rear seats; all rear seats are already taken by such children; not all the child seats can be fitted in the back.'] } },
        { type: 'text', color: 'coral', body: {
          ru: '<b>Кресло спиной вперёд на переднем сиденье</b> — только если фронтальная подушка безопасности <b>отключена</b>. Раскрывшаяся подушка бьёт прямо в спинку кресла.',
          en: '<b>A rear-facing seat in the front</b> is allowed only if the front airbag is <b>switched off</b>. An inflating airbag hits the back of the child seat directly.' } },
        { type: 'table', heading: { ru: 'Стандарты кресел', en: 'Child seat standards' },
          head: ['', 'R44', 'R129 (i-Size)'],
          rows: [
            [{ ru: 'Подбор', en: 'Chosen by' }, { ru: 'по весу (группы)', en: 'weight (groups)' }, { ru: 'по росту ребёнка', en: 'child’s height' }],
            [{ ru: 'Спиной вперёд', en: 'Rear-facing' }, { ru: 'группы 0 и 0+', en: 'groups 0 and 0+' }, { ru: 'минимум до 15 мес.', en: 'at least to 15 months' }],
            [{ ru: 'Боковой удар', en: 'Side impact' }, { ru: 'не проверяется', en: 'not tested' }, { ru: 'проверяется', en: 'tested' }],
            [{ ru: 'Крепление', en: 'Fixing' }, { ru: 'ремень или ISOFIX', en: 'belt or ISOFIX' }, { ru: 'чаще ISOFIX', en: 'mostly ISOFIX' }]
          ] },
        { type: 'table', heading: { ru: 'Группы R44', en: 'R44 groups' },
          head: [{ ru: 'Группа', en: 'Group' }, { ru: 'Вес', en: 'Weight' }],
          rows: [
            ['0 / 0+', { ru: 'до 10 / до 13 кг', en: 'up to 10 / 13 kg' }],
            ['I', { ru: '9–18 кг', en: '9–18 kg' }],
            ['II', { ru: '15–25 кг', en: '15–25 kg' }],
            ['III', { ru: '22–36 кг', en: '22–36 kg' }]
          ] },
        { type: 'rules', heading: { ru: 'Другие случаи', en: 'Other cases' }, items: [
          { color: 'coral', title: { ru: 'Автобус (больше 9 мест)', en: 'Bus (more than 9 seats)' },
            body: { ru: 'Дети <b>от 3 лет</b> и ростом до 135 см — в кресле; если кресла нет, пристёгиваются обычным ремнём, если он им подходит.',
                    en: 'Children <b>aged 3 or more</b> and up to 135 cm use a child seat; if there is none, they wear the ordinary belt if it fits them.' } },
          { color: 'coral', title: { ru: 'Такси в городе', en: 'Taxi in town' },
            body: { ru: 'Ребёнок ниже 135 см может ехать без кресла, но <b>только сзади</b>.',
                    en: 'A child under 135 cm may ride without a child seat, but <b>only in the back</b>.' } }
        ] },
        { type: 'tip', title: { ru: 'Самое безопасное место', en: 'The safest place' }, body: {
          ru: 'Кресло малыша — <b>спиной по ходу движения</b>, на <b>заднем среднем</b> месте (дальше всего от боковых ударов), строго по инструкции производителя.',
          en: 'A baby seat goes <b>rear-facing</b>, in the <b>rear middle</b> seat (furthest from side impacts), strictly following the maker’s instructions.' } }
      ] },
      { id: 'airbag', label: { ru: 'Подушки', en: 'Airbags' }, blocks: [
        { type: 'rules', heading: { ru: 'Подушки и подголовник', en: 'Airbags and head restraint' }, items: [
          { color: 'amber', title: { ru: 'Подушка безопасности', en: 'Airbag' }, es: 'airbag',
            body: { ru: 'Мешок, который мгновенно надувается при ударе: гасит рывок тела, не даёт удариться о салон, защищает лицо от осколков. Работает <b>вместе с ремнём</b>, а не вместо него.',
                    en: 'A bag that inflates instantly in a crash: it slows the body, stops it hitting the cabin and shields the face from glass. It works <b>together with the belt</b>, not instead of it.' } },
          { color: 'amber', title: { ru: 'Подголовник', en: 'Head restraint' }, es: 'reposacabezas',
            body: { ru: 'Защищает <b>шею и шейные позвонки</b> при ударе сзади. Верх подголовника — на уровне <b>макушки</b>, расстояние до головы — <b>4 см или меньше</b>. Настраивается и на задних сиденьях.',
                    en: 'Protects the <b>neck and cervical spine</b> in a rear impact. Its top is level with the <b>top of the head</b>, the gap to the head <b>4 cm or less</b>. Adjust the rear ones too.' } }
        ] },
        { type: 'table', heading: { ru: 'Расстояния', en: 'Distances' },
          head: [{ ru: 'Что', en: 'What' }, { ru: 'Сколько', en: 'How much' }],
          rows: [
            [{ ru: 'Грудь — руль', en: 'Chest to wheel' }, { ru: 'не меньше 25 см', en: 'at least 25 cm' }],
            [{ ru: 'Голова — подголовник', en: 'Head to restraint' }, { ru: '4 см или меньше', en: '4 cm or less' }],
            [{ ru: 'Верх подголовника', en: 'Top of restraint' }, { ru: 'на уровне макушки', en: 'level with top of head' }]
          ] },
        { type: 'text', color: 'amber', body: {
          ru: '<b>Кузов</b> тоже пассивная безопасность: жёсткий салон (<i>habitáculo rígido</i>) сохраняет пространство для людей, а передняя и задняя части сминаются и забирают энергию удара.',
          en: 'The <b>body shell</b> is passive safety too: a rigid cabin (<i>habitáculo rígido</i>) keeps space for the occupants, while the front and rear crumple and absorb the impact energy.' } }
      ] },
      { id: 'helmet', label: { ru: 'Шлем и жилет', en: 'Helmet, vest' }, blocks: [
        { type: 'table', heading: { ru: 'Кому нужен шлем', en: 'Who must wear a helmet' },
          head: [{ ru: 'Кто', en: 'Who' }, { ru: 'Где', en: 'Where' }],
          rows: [
            [{ ru: 'Мото, мопед, квадроцикл', en: 'Motorbike, moped, quad' }, { ru: 'на всех дорогах', en: 'on all roads' }],
            [{ ru: 'Велосипед, взрослый', en: 'Cyclist, adult' }, { ru: 'за городом', en: 'outside towns' }],
            [{ ru: 'Велосипед, младше 16', en: 'Cyclist under 16' }, { ru: 'на всех дорогах', en: 'on all roads' }],
            [{ ru: 'Самокат (VMP)', en: 'E-scooter (VMP)' }, { ru: 'на всех дорогах', en: 'on all roads' }]
          ] },
        { type: 'text', color: 'teal', body: {
          ru: ['Мотоциклист и пассажир (RGC, ст. 118): <b>застёгнутый</b> омологированный шлем (UNECE R22) везде, <b>перчатки</b> — за городом, <b>закрытая обувь</b> — везде. Исключение — модели с защитной рамой и ремнями: там пристёгиваются ремнём.',
               'Лучший шлем — <b>интегральный</b> (закрывает подбородок), светлый, по размеру, с пометкой об омологации. Краска и наклейки могут ухудшить его свойства.'],
          en: ['Motorcyclist and passenger (RGC art. 118): a <b>fastened</b> approved helmet (UNECE R22) everywhere, <b>gloves</b> outside towns, <b>closed shoes</b> everywhere. Exception: models with a protective frame and seat belts, where the belt is worn instead.',
               'The best helmet is a <b>full-face</b> one (covers the chin), light-coloured, the right size and with an approval label. Paint and stickers can weaken it.'] } },
        { type: 'rules', heading: { ru: 'Обязательно в машине', en: 'Must be in the car' }, items: [
          { color: 'purple', title: { ru: 'Маячок V-16', en: 'V-16 beacon' }, es: 'dispositivo V-16',
            body: { ru: 'С <b>1 января 2026</b> аварийные треугольники заменил жёлтый мигающий маячок V-16, <b>подключённый</b> к DGT: он сам передаёт место остановки. Ставится на <b>самую высокую точку</b> машины — обычно на крышу, — не выходя на дорогу.',
                    en: 'Since <b>1 January 2026</b> warning triangles have been replaced by the yellow flashing V-16 beacon, <b>connected</b> to the DGT: it reports where you have stopped. It goes on the <b>highest point</b> of the car — usually the roof — without walking onto the road.' } },
          { color: 'purple', title: { ru: 'Светоотражающий жилет', en: 'Reflective vest' }, es: 'chaleco reflectante',
            body: { ru: 'Надеть <b>до выхода из машины</b>, если вы выходите на проезжую часть или обочину <b>загородной дороги</b> (RGC, ст. 118.4). Держите его в салоне, а не в багажнике.',
                    en: 'Put it on <b>before getting out</b> if you step onto the carriageway or hard shoulder of an <b>interurban road</b> (RGC art. 118.4). Keep it in the cabin, not in the boot.' } },
          { color: 'purple', title: { ru: 'Запасное колесо', en: 'Spare wheel' }, es: 'rueda de repuesto',
            body: { ru: 'Полноразмерное, докатка с инструментом или другая система (ремкомплект, run-flat).',
                    en: 'A full-size spare, a space-saver with tools, or another system (repair kit, run-flat tyres).' } }
        ] },
        { type: 'signs', heading: { ru: 'Знак по теме', en: 'Related sign' }, items: [
          { code: 'R-417', note: { ru: 'Обязательно пристегнуть ремень', en: 'Seat belt compulsory' } }
        ] }
      ] },
      { id: 'examples', label: { ru: 'Примеры', en: 'Examples' }, blocks: [
        { type: 'examples', items: [
          { color: 'amber', es: 'Abróchate el <b>cinturón</b> también en ciudad.', ru: 'Пристегнись и в городе тоже.', en: 'Buckle your seat belt in town too.' },
          { color: 'amber', es: 'La <b>cinta abdominal</b> va sobre la cadera.', ru: 'Поясная лента проходит по тазовым костям.', en: 'The lap strap goes over the hips.' },
          { color: 'amber', es: 'Sube el <b>reposacabezas</b> hasta la altura de la cabeza.', ru: 'Подними подголовник до уровня головы.', en: 'Raise the head restraint to head height.' },
          { color: 'amber', es: 'Hay que <b>desactivar el airbag</b> del copiloto.', ru: 'Нужно отключить подушку пассажира.', en: 'You have to switch off the passenger airbag.' },
          { color: 'coral', es: 'El niño viaja en una <b>sillita</b> mirando hacia atrás.', ru: 'Ребёнок едет в кресле лицом назад.', en: 'The child travels in a rear-facing seat.' },
          { color: 'coral', es: 'Mide menos de <b>135 centímetros</b>.', ru: 'Его рост меньше 135 сантиметров.', en: 'He is under 135 centimetres tall.' },
          { color: 'teal', es: 'Ponte el <b>casco</b> y abróchalo bien.', ru: 'Надень шлем и как следует застегни.', en: 'Put on your helmet and fasten it properly.' },
          { color: 'purple', es: 'Ponte el <b>chaleco</b> antes de salir del coche.', ru: 'Надень жилет до того, как выйдешь из машины.', en: 'Put the vest on before getting out of the car.' },
          { color: 'purple', es: 'Coloca la <b>luz V-16</b> en el techo.', ru: 'Поставь маячок V-16 на крышу.', en: 'Put the V-16 light on the roof.' },
          { color: 'blue', es: 'Con <b>ABS</b>, pisa el freno a fondo.', ru: 'С ABS жми на тормоз до упора.', en: 'With ABS, press the brake all the way.' },
          { color: 'blue', es: 'Revisa la <b>presión</b> de los neumáticos cada mes.', ru: 'Проверяй давление в шинах каждый месяц.', en: 'Check the tyre pressure every month.' },
          { color: 'blue', es: 'Se me ha <b>pinchado</b> una rueda.', ru: 'У меня проколось колесо.', en: 'I’ve got a flat tyre.' }
        ] },
        { type: 'markers', groups: [
          { color: 'blue', title: { ru: 'Активная безопасность', en: 'Active safety' }, tags: ['frenos', 'neumáticos', 'alumbrado', 'ABS', 'control de estabilidad', 'freno motor'] },
          { color: 'amber', title: { ru: 'Пассивная безопасность', en: 'Passive safety' }, tags: ['cinturón', 'airbag', 'reposacabezas', 'carrocería', 'casco'] },
          { color: 'purple', title: { ru: 'Дотация машины', en: 'Required kit' }, tags: ['V-16', 'chaleco reflectante', 'rueda de repuesto'] }
        ] }
      ] }
    ],
    quizCount: 20,
    quiz: [
      { es: '¿Cuál de estos elementos es de seguridad pasiva?',
        prompt: { ru: 'Какой из этих элементов относится к пассивной безопасности?', en: 'Which of these is a passive safety device?' },
        options: [
          { es: 'El airbag.', ru: 'Подушка безопасности.', en: 'The airbag.' },
          { es: 'El sistema antibloqueo de frenos (ABS).', ru: 'Антиблокировочная система (ABS).', en: 'The anti-lock braking system (ABS).' },
          { es: 'Los neumáticos.', ru: 'Шины.', en: 'The tyres.' }
        ], answer: 0,
        explain: { ru: 'Пассивная безопасность уменьшает травмы, когда авария уже случилась: подушка, ремень, подголовник. ABS и шины помогают избежать аварии — это активная безопасность (учебник DGT, тема 5).',
                   en: 'Passive safety reduces injuries once the crash has happened: airbag, belt, head restraint. ABS and tyres help avoid the crash — that is active safety (DGT manual, topic 5).' } },
      { es: '¿Qué elemento forma parte de la seguridad activa del vehículo?',
        prompt: { ru: 'Что относится к активной безопасности автомобиля?', en: 'Which item is part of the vehicle’s active safety?' },
        options: [
          { es: 'El reposacabezas.', ru: 'Подголовник.', en: 'The head restraint.' },
          { es: 'Los frenos.', ru: 'Тормоза.', en: 'The brakes.' },
          { es: 'El cinturón de seguridad.', ru: 'Ремень безопасности.', en: 'The seat belt.' }
        ], answer: 1,
        explain: { ru: 'Тормоза помогают не попасть в аварию — это активная безопасность. Подголовник и ремень защищают уже при ударе (пассивная).',
                   en: 'Brakes help you avoid a crash — active safety. The head restraint and belt protect you during the impact (passive).' } },
      { es: '¿Dónde es obligatorio usar el cinturón de seguridad?',
        prompt: { ru: 'Где обязательно пристёгиваться ремнём безопасности?', en: 'Where is it compulsory to wear the seat belt?' },
        options: [
          { es: 'Solo en autopistas y autovías.', ru: 'Только на autopista и autovía.', en: 'Only on autopistas and autovías.' },
          { es: 'Solo en vías interurbanas.', ru: 'Только на загородных дорогах.', en: 'Only on interurban roads.' },
          { es: 'En vías urbanas e interurbanas.', ru: 'И в городе, и за городом.', en: 'On both urban and interurban roads.' }
        ], answer: 2,
        explain: { ru: 'RGC, ст. 117.1: водитель и пассажиры пристёгиваются как в городе, так и за городом.',
                   en: 'RGC art. 117.1: driver and passengers wear belts on both urban and interurban roads.' } },
      { es: '¿Puede el conductor circular sin cinturón mientras hace la maniobra de marcha atrás?',
        prompt: { ru: 'Может ли водитель не пристёгиваться, пока сдаёт задним ходом?', en: 'May the driver go without the belt while reversing?' },
        options: [
          { es: 'Sí, al hacer marcha atrás o estacionar.', ru: 'Да, при движении задним ходом или парковке.', en: 'Yes, while reversing or parking.' },
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' },
          { es: 'Solo si es conductor profesional.', ru: 'Только профессиональный водитель.', en: 'Only a professional driver.' }
        ], answer: 0,
        explain: { ru: 'RGC, ст. 119.1.a: водитель может не пристёгиваться при манёвре задним ходом или парковке.',
                   en: 'RGC art. 119.1.a: the driver may unbuckle while reversing or parking.' } },
      { es: '¿Quién puede circular sin cinturón por cualquier tipo de vía?',
        prompt: { ru: 'Кто может ездить без ремня на любой дороге?', en: 'Who may travel without a belt on any type of road?' },
        options: [
          { es: 'Los taxistas de servicio.', ru: 'Таксисты во время работы.', en: 'Taxi drivers on duty.' },
          { es: 'Las personas con un certificado de exención por razones médicas.', ru: 'Люди со справкой об освобождении по медицинским причинам.', en: 'People with a medical exemption certificate.' },
          { es: 'Los pasajeros de los asientos traseros.', ru: 'Пассажиры на задних сиденьях.', en: 'Rear-seat passengers.' }
        ], answer: 1,
        explain: { ru: 'RGC, ст. 119.1.b: освобождение по серьёзным медицинским причинам или из-за инвалидности, со справкой, которую надо показать агенту. Задние пассажиры пристёгиваются всегда.',
                   en: 'RGC art. 119.1.b: exemption for serious medical reasons or disability, with a certificate to be shown to an officer. Rear passengers always buckle up.' } },
      { es: 'Los ocupantes de un vehículo de urgencias en servicio, ¿dónde pueden ir sin cinturón?',
        prompt: { ru: 'Где люди в машине экстренной службы на вызове могут ехать без ремня?', en: 'Where may the occupants of an emergency vehicle on duty go without a belt?' },
        options: [
          { es: 'En cualquier vía.', ru: 'На любой дороге.', en: 'On any road.' },
          { es: 'Solo en autopistas.', ru: 'Только на autopista.', en: 'Only on autopistas.' },
          { es: 'Solo en poblado.', ru: 'Только в населённом пункте.', en: 'Only in built-up areas.' }
        ], answer: 2,
        explain: { ru: 'RGC, ст. 119.2: исключение действует в населённом пункте и никогда — на autopista, autovía или обычной дороге (кроме тех, кто помогает пациенту в салоне скорой).',
                   en: 'RGC art. 119.2: the exemption applies in built-up areas and never on autopistas, autovías or ordinary roads (except staff treating a patient in an ambulance).' } },
      { es: '¿A partir de qué estatura un menor puede dejar de usar un sistema de retención infantil?',
        prompt: { ru: 'С какого роста ребёнок может ездить без детского кресла?', en: 'From what height can a child stop using a child restraint?' },
        options: [
          { es: 'Más de 120 cm.', ru: 'Больше 120 см.', en: 'Over 120 cm.' },
          { es: 'Más de 135 cm.', ru: 'Больше 135 см.', en: 'Over 135 cm.' },
          { es: 'Más de 150 cm.', ru: 'Больше 150 см.', en: 'Over 150 cm.' }
        ], answer: 1,
        explain: { ru: 'RGC, ст. 117.1: несовершеннолетние ростом 135 см и ниже обязаны ездить в детском удерживающем устройстве.',
                   en: 'RGC art. 117.1: minors 135 cm tall or less must use a child restraint system.' } },
      { es: 'En un turismo, ¿dónde deben viajar, como norma general, los niños de 135 cm o menos?',
        prompt: { ru: 'Где в легковом автомобиле, как правило, должны ехать дети ростом 135 см и ниже?', en: 'In a car, where must children 135 cm or shorter normally sit?' },
        options: [
          { es: 'En los asientos traseros, con un sistema de retención infantil.', ru: 'Сзади, в детском кресле.', en: 'In the rear seats, in a child restraint.' },
          { es: 'En el asiento delantero, para vigilarlos.', ru: 'Спереди, чтобы за ними присматривать.', en: 'In the front seat, so you can watch them.' },
          { es: 'En cualquier asiento, con el cinturón de adulto.', ru: 'На любом месте, со взрослым ремнём.', en: 'In any seat, with the adult belt.' }
        ], answer: 0,
        explain: { ru: 'RGC, ст. 117.3: в машине до 9 мест такие дети едут сзади в подходящем кресле; спереди — только в исключительных случаях.',
                   en: 'RGC art. 117.3: in vehicles up to 9 seats these children ride in the back in a suitable seat; in front only in exceptional cases.' } },
      { es: '¿Cuándo puede viajar delante un niño de 1,20 m en un turismo?',
        prompt: { ru: 'Когда ребёнок ростом 1,20 м может ехать на переднем сиденье легковой машины?', en: 'When may a 1.20 m child ride in the front of a car?' },
        options: [
          { es: 'Cuando el viaje es corto.', ru: 'Когда поездка короткая.', en: 'When the trip is short.' },
          { es: 'Cuando lo acompaña un adulto detrás.', ru: 'Когда сзади сидит взрослый.', en: 'When an adult sits in the back.' },
          { es: 'Cuando los asientos traseros ya están ocupados por otros menores de su estatura.', ru: 'Когда задние места уже заняты другими такими же детьми.', en: 'When the rear seats are already taken by other children of that height.' }
        ], answer: 2,
        explain: { ru: 'RGC, ст. 117.3: вперёд — только в кресле и если сзади нет сидений, все задние места заняты такими детьми или там нельзя поставить все кресла.',
                   en: 'RGC art. 117.3: in front only in a child seat and if there are no rear seats, all are taken by such children, or not all child seats fit in the back.' } },
      { es: '¿Se puede colocar una sillita orientada hacia atrás en el asiento delantero con airbag frontal?',
        prompt: { ru: 'Можно ли поставить кресло спиной вперёд на переднее сиденье с фронтальной подушкой?', en: 'Can a rear-facing child seat go in a front seat that has a front airbag?' },
        options: [
          { es: 'Sí, siempre.', ru: 'Да, всегда.', en: 'Yes, always.' },
          { es: 'Solo si el airbag está desactivado.', ru: 'Только если подушка отключена.', en: 'Only if the airbag is switched off.' },
          { es: 'Solo en viajes por ciudad.', ru: 'Только при поездках по городу.', en: 'Only for trips in town.' }
        ], answer: 1,
        explain: { ru: 'RGC, ст. 117.3: кресло спиной вперёд спереди — только с отключённой фронтальной подушкой, иначе она ударит в кресло.',
                   en: 'RGC art. 117.3: a rear-facing seat in front only with the front airbag deactivated, otherwise it strikes the seat.' } },
      { es: 'En un taxi que circula por ciudad, un niño de 1,30 m sin sillita, ¿dónde puede ir?',
        prompt: { ru: 'Где может ехать ребёнок ростом 1,30 м без кресла в такси по городу?', en: 'Where may a 1.30 m child without a child seat ride in a taxi in town?' },
        options: [
          { es: 'En un asiento trasero.', ru: 'На заднем сиденье.', en: 'In a rear seat.' },
          { es: 'En el asiento del copiloto.', ru: 'На переднем пассажирском месте.', en: 'In the front passenger seat.' },
          { es: 'En ningún asiento.', ru: 'Ни на каком месте.', en: 'In no seat at all.' }
        ], answer: 0,
        explain: { ru: 'RGC, ст. 119.2: такси в городе может везти ребёнка ниже 135 см без кресла, если он сидит сзади.',
                   en: 'RGC art. 119.2: a taxi in town may carry a child under 135 cm without a child seat if the child sits in the back.' } },
      { es: 'En un autobús, un niño de 4 años que mide 1,05 m, ¿qué debe usar?',
        prompt: { ru: 'Что должен использовать в автобусе ребёнок 4 лет ростом 1,05 м?', en: 'What must a 4-year-old, 1.05 m tall, use on a bus?' },
        options: [
          { es: 'Nada, en el autobús no es obligatorio.', ru: 'Ничего, в автобусе это не обязательно.', en: 'Nothing; it is not required on a bus.' },
          { es: 'Ir en brazos de un adulto.', ru: 'Ехать на руках у взрослого.', en: 'Ride on an adult’s lap.' },
          { es: 'Un sistema de retención infantil o, si no lo hay, el cinturón si es adecuado.', ru: 'Детское кресло, а если его нет — ремень, если он подходит.', en: 'A child restraint or, if there is none, the belt if it fits.' }
        ], answer: 2,
        explain: { ru: 'RGC, ст. 117.2: в машинах больше 9 мест дети от 3 лет и до 135 см используют кресло, а без него — обычный ремень, если он подходит по росту и весу.',
                   en: 'RGC art. 117.2: in vehicles with more than 9 seats children aged 3+ and up to 135 cm use a restraint, or the ordinary belt if suited to their size.' } },
      { es: '¿Por dónde debe pasar la cinta torácica del cinturón?',
        prompt: { ru: 'Где должна проходить диагональная лента ремня?', en: 'Where should the chest strap of the belt go?' },
        options: [
          { es: 'Por encima del cuello.', ru: 'По шее.', en: 'Over the neck.' },
          { es: 'Por la clavícula, entre el hombro y el cuello.', ru: 'Через ключицу, между плечом и шеей.', en: 'Over the collarbone, between shoulder and neck.' },
          { es: 'Por debajo del brazo.', ru: 'Под рукой.', en: 'Under the arm.' }
        ], answer: 1,
        explain: { ru: 'По шее лента может серьёзно ранить при ударе, а с плеча соскальзывает и хуже защищает (учебник DGT, тема 5).',
                   en: 'Over the neck the strap can cause serious injury; off the shoulder it slips and protects less (DGT manual, topic 5).' } },
      { es: '¿Dónde debe ir la cinta abdominal del cinturón?',
        prompt: { ru: 'Где должна лежать поясная лента ремня?', en: 'Where should the lap strap of the belt sit?' },
        options: [
          { es: 'Sobre los huesos de la cadera.', ru: 'На тазовых костях.', en: 'Over the hip bones.' },
          { es: 'Sobre el estómago.', ru: 'На животе.', en: 'Over the stomach.' },
          { es: 'Sobre los muslos, cerca de las rodillas.', ru: 'На бёдрах, ближе к коленям.', en: 'On the thighs, near the knees.' }
        ], answer: 0,
        explain: { ru: 'Поясная лента — на тазовых костях, всегда ниже живота; на животе при ударе она повреждает внутренние органы.',
                   en: 'The lap strap goes on the hip bones, always below the stomach; across the belly it damages internal organs in a crash.' } },
      { es: '¿Qué es el «efecto submarino»?',
        prompt: { ru: 'Что такое «эффект подныривания» (efecto submarino)?', en: 'What is the “submarine effect”?' },
        options: [
          { es: 'Que el airbag se infla tarde.', ru: 'Подушка раскрывается с опозданием.', en: 'The airbag inflates late.' },
          { es: 'Que el vehículo pierde adherencia sobre el agua.', ru: 'Машина теряет сцепление на воде.', en: 'The car loses grip on water.' },
          { es: 'Que el cuerpo se desliza hacia abajo, por debajo del cinturón.', ru: 'Тело при ударе выскальзывает вниз под ремень.', en: 'The body slides down underneath the belt.' }
        ], answer: 2,
        explain: { ru: 'Так бывает, если спинка сильно откинута или ремень ослаблен. Потеря сцепления на воде — это аквапланирование, другое явление.',
                   en: 'It happens when the seat is reclined too far or the belt is slack. Losing grip on water is aquaplaning, a different thing.' } },
      { es: '¿A qué distancia mínima del volante conviene llevar el pecho por el airbag?',
        prompt: { ru: 'На каком минимальном расстоянии от руля должна быть грудь из-за подушки безопасности?', en: 'How far from the wheel should your chest be, at least, because of the airbag?' },
        options: [
          { es: 'A 10 cm.', ru: '10 см.', en: '10 cm.' },
          { es: 'A 25 cm.', ru: '25 см.', en: '25 cm.' },
          { es: 'A 60 cm.', ru: '60 см.', en: '60 cm.' }
        ], answer: 1,
        explain: { ru: 'Не меньше 25 см, чтобы раскрывающаяся подушка не ударила в грудь (учебник DGT, тема 5).',
                   en: 'At least 25 cm, so the inflating airbag does not strike your chest (DGT manual, topic 5).' } },
      { es: 'Si el vehículo tiene airbags, ¿es necesario abrocharse el cinturón?',
        prompt: { ru: 'Если в машине есть подушки безопасности, нужно ли пристёгиваться?', en: 'If the car has airbags, do you still need to wear the belt?' },
        options: [
          { es: 'No, el airbag sustituye al cinturón.', ru: 'Нет, подушка заменяет ремень.', en: 'No, the airbag replaces the belt.' },
          { es: 'Solo en los asientos delanteros.', ru: 'Только на передних сиденьях.', en: 'Only in the front seats.' },
          { es: 'Sí, el airbag complementa al cinturón.', ru: 'Да, подушка дополняет ремень.', en: 'Yes, the airbag complements the belt.' }
        ], answer: 2,
        explain: { ru: 'Подушка рассчитана на пристёгнутого человека; без ремня тело летит на неё слишком быстро. Ремень обязателен на всех местах (RGC, ст. 117).',
                   en: 'The airbag is designed for a belted occupant; unbelted, the body hits it too fast. Belts are compulsory in every seat (RGC art. 117).' } },
      { es: '¿A qué altura debe quedar la parte superior del reposacabezas?',
        prompt: { ru: 'На какой высоте должен быть верх подголовника?', en: 'At what height should the top of the head restraint be?' },
        options: [
          { es: 'A la altura de la parte superior de la cabeza.', ru: 'На уровне макушки.', en: 'Level with the top of the head.' },
          { es: 'A la altura del cuello.', ru: 'На уровне шеи.', en: 'Level with the neck.' },
          { es: 'A la altura de los hombros.', ru: 'На уровне плеч.', en: 'Level with the shoulders.' }
        ], answer: 0,
        explain: { ru: 'Верх подголовника — на уровне верха головы. Если он на уровне шеи, при ударе сзади голова откидывается через него и травмирует шейные позвонки.',
                   en: 'The top of the restraint is level with the top of the head. At neck height the head whips back over it in a rear impact and injures the cervical spine.' } },
      { es: '¿Qué distancia debe haber como máximo entre la cabeza y el reposacabezas?',
        prompt: { ru: 'Каким должно быть максимальное расстояние между головой и подголовником?', en: 'What is the maximum gap between the head and the head restraint?' },
        options: [
          { es: 'Unos 15 centímetros.', ru: 'Около 15 см.', en: 'About 15 cm.' },
          { es: 'Unos 10 centímetros.', ru: 'Около 10 см.', en: 'About 10 cm.' },
          { es: 'Cuatro centímetros o menos.', ru: '4 см или меньше.', en: 'Four centimetres or less.' }
        ], answer: 2,
        explain: { ru: 'Учебник DGT, тема 5: расстояние до подголовника — 4 см или меньше; чем дальше, тем сильнее рывок шеи.',
                   en: 'DGT manual, topic 5: the gap should be 4 cm or less; the larger it is, the harder the neck is jerked.' } },
      { es: '¿Qué protege principalmente el reposacabezas?',
        prompt: { ru: 'Что прежде всего защищает подголовник?', en: 'What does the head restraint mainly protect?' },
        options: [
          { es: 'El cuello y las vértebras cervicales.', ru: 'Шею и шейные позвонки.', en: 'The neck and cervical vertebrae.' },
          { es: 'La espalda baja.', ru: 'Поясницу.', en: 'The lower back.' },
          { es: 'La cara frente a los cristales.', ru: 'Лицо от осколков стекла.', en: 'The face from broken glass.' }
        ], answer: 0,
        explain: { ru: 'Подголовник ограничивает резкий наклон головы назад (хлыстовую травму) при ударе сзади.',
                   en: 'The restraint limits the sudden backward movement of the head (whiplash) in a rear-end impact.' } },
      { es: '¿Dónde es obligatorio el casco para el conductor de un ciclomotor?',
        prompt: { ru: 'Где водителю мопеда обязательно надевать шлем?', en: 'Where must a moped rider wear a helmet?' },
        options: [
          { es: 'Solo en vías interurbanas.', ru: 'Только за городом.', en: 'Only on interurban roads.' },
          { es: 'En todo tipo de vías.', ru: 'На всех дорогах.', en: 'On all types of road.' },
          { es: 'Solo si lleva pasajero.', ru: 'Только если везёт пассажира.', en: 'Only when carrying a passenger.' }
        ], answer: 1,
        explain: { ru: 'RGC, ст. 118.1.a: водители и пассажиры мотоциклов и мопедов — в застёгнутом омологированном шлеме на всех дорогах.',
                   en: 'RGC art. 118.1.a: riders and passengers of motorbikes and mopeds wear a fastened approved helmet on all roads.' } },
      { es: '¿Cuándo es obligatorio el casco para un ciclista adulto?',
        prompt: { ru: 'Когда взрослому велосипедисту обязательно надевать шлем?', en: 'When must an adult cyclist wear a helmet?' },
        options: [
          { es: 'Cuando circula por vías interurbanas.', ru: 'Когда едет по загородной дороге.', en: 'When riding on interurban roads.' },
          { es: 'Siempre, también en ciudad.', ru: 'Всегда, и в городе тоже.', en: 'Always, in town as well.' },
          { es: 'Nunca, es solo recomendable.', ru: 'Никогда, это лишь рекомендация.', en: 'Never; it is only advisable.' }
        ], answer: 0,
        explain: { ru: 'RGC, ст. 118.2: взрослому велосипедисту шлем обязателен за городом; в городе — только тем, кто работает на велосипеде (курьерам), и детям до 16 лет.',
                   en: 'RGC art. 118.2: adult cyclists must wear one on interurban roads; in town only those riding for work (couriers) and under-16s.' } },
      { es: 'Un ciclista de 14 años, ¿dónde debe llevar casco?',
        prompt: { ru: 'Где велосипедист 14 лет должен быть в шлеме?', en: 'Where must a 14-year-old cyclist wear a helmet?' },
        options: [
          { es: 'Solo fuera de poblado.', ru: 'Только за городом.', en: 'Only outside built-up areas.' },
          { es: 'Solo en carriles bici.', ru: 'Только на велодорожках.', en: 'Only on cycle lanes.' },
          { es: 'En todo tipo de vías.', ru: 'На всех дорогах.', en: 'On every type of road.' }
        ], answer: 2,
        explain: { ru: 'RGC, ст. 118.2 и LSV, ст. 47: для детей младше 16 лет шлем обязателен на любой дороге.',
                   en: 'RGC art. 118.2 and LSV art. 47: under-16s must wear a helmet on any road.' } },
      { es: '¿Qué protección deben llevar el conductor y el pasajero de una motocicleta en vías interurbanas, además del casco?',
        prompt: { ru: 'Что ещё, кроме шлема, должны надевать водитель и пассажир мотоцикла за городом?', en: 'Besides the helmet, what must motorcycle rider and passenger wear on interurban roads?' },
        options: [
          { es: 'Chaleco reflectante en todo momento.', ru: 'Светоотражающий жилет всё время.', en: 'A reflective vest at all times.' },
          { es: 'Guantes de protección y calzado cerrado.', ru: 'Защитные перчатки и закрытую обувь.', en: 'Protective gloves and closed shoes.' },
          { es: 'Rodilleras homologadas.', ru: 'Омологированные наколенники.', en: 'Approved knee pads.' }
        ], answer: 1,
        explain: { ru: 'RGC, ст. 118.1 (действующая редакция): перчатки — за городом, закрытая обувь — на всех дорогах.',
                   en: 'RGC art. 118.1 (current wording): gloves on interurban roads, closed shoes on all roads.' } },
      { es: '¿Cuándo debe ponerse el chaleco reflectante el conductor de un turismo?',
        prompt: { ru: 'Когда водитель легкового автомобиля должен надеть светоотражающий жилет?', en: 'When must a car driver put on the reflective vest?' },
        options: [
          { es: 'Siempre que conduce de noche.', ru: 'Каждый раз, когда едет ночью.', en: 'Whenever driving at night.' },
          { es: 'Solo en autopistas.', ru: 'Только на autopista.', en: 'Only on autopistas.' },
          { es: 'Al salir del vehículo y ocupar la calzada o el arcén de una vía interurbana.', ru: 'Когда выходит из машины на проезжую часть или обочину загородной дороги.', en: 'When getting out onto the carriageway or hard shoulder of an interurban road.' }
        ], answer: 2,
        explain: { ru: 'RGC, ст. 118.4: жилет надевают, выходя из машины на проезжую часть или обочину загородной дороги — днём и ночью.',
                   en: 'RGC art. 118.4: the vest is worn when getting out onto the carriageway or shoulder of an interurban road — day or night.' } },
      { es: 'Desde el 1 de enero de 2026, ¿qué debe usar un turismo para señalizar que está inmovilizado en la calzada?',
        prompt: { ru: 'Чем с 1 января 2026 года легковой автомобиль обозначает вынужденную остановку на дороге?', en: 'Since 1 January 2026, what must a car use to signal that it is stuck on the road?' },
        options: [
          { es: 'El dispositivo luminoso V-16 conectado.', ru: 'Подключённым световым маячком V-16.', en: 'The connected V-16 warning light.' },
          { es: 'Dos triángulos de preseñalización.', ru: 'Двумя аварийными треугольниками.', en: 'Two warning triangles.' },
          { es: 'Solo las luces de posición.', ru: 'Только габаритными огнями.', en: 'Only the side lights.' }
        ], answer: 0,
        explain: { ru: 'С 01.01.2026 треугольники больше не считаются достаточными: в дотации легкового авто — маячок V-16, который передаёт своё положение в DGT (RGC, ст. 130.4; Manual I, тема 18).',
                   en: 'Since 01.01.2026 triangles no longer count: the car kit includes the V-16 beacon, which sends its position to the DGT (RGC art. 130.4; Manual I, topic 18).' } },
      { es: '¿Dónde se coloca el dispositivo V-16?',
        prompt: { ru: 'Куда ставят маячок V-16?', en: 'Where is the V-16 beacon placed?' },
        options: [
          { es: 'En la calzada, a 50 metros del vehículo.', ru: 'На дорогу, в 50 м от машины.', en: 'On the road, 50 m from the car.' },
          { es: 'En la parte más alta posible del vehículo.', ru: 'На самую высокую точку машины.', en: 'On the highest possible point of the vehicle.' },
          { es: 'Dentro del maletero abierto.', ru: 'В открытый багажник.', en: 'Inside the open boot.' }
        ], answer: 1,
        explain: { ru: 'V-16 ставят на самую высокую точку машины, чтобы его было видно издалека, и не надо идти по дороге (Manual I, тема 19, сигнал V-16).',
                   en: 'The V-16 goes on the highest point of the vehicle so it is visible from afar and nobody walks along the road (Manual I, topic 19, signal V-16).' } },
      { es: '¿Para qué sirve el sistema ABS?',
        prompt: { ru: 'Для чего нужна система ABS?', en: 'What is ABS for?' },
        options: [
          { es: 'Para que las ruedas no se bloqueen al frenar.', ru: 'Чтобы колёса не блокировались при торможении.', en: 'To stop the wheels locking when braking.' },
          { es: 'Para mantener una velocidad fija.', ru: 'Чтобы держать постоянную скорость.', en: 'To hold a fixed speed.' },
          { es: 'Para que el motor frene el vehículo.', ru: 'Чтобы машину тормозил двигатель.', en: 'To let the engine brake the car.' }
        ], answer: 0,
        explain: { ru: 'ABS не даёт колёсам заблокироваться — машина остаётся управляемой. Постоянную скорость держит круиз-контроль, двигателем тормозят на пониженной передаче.',
                   en: 'ABS keeps the wheels from locking, so you can still steer. Cruise control holds a speed; engine braking comes from a lower gear.' } },
      { es: 'Para frenar de emergencia en un vehículo con ABS, ¿qué debe hacer?',
        prompt: { ru: 'Как экстренно тормозить в машине с ABS?', en: 'How do you brake in an emergency in a car with ABS?' },
        options: [
          { es: 'Pisar y soltar el freno varias veces.', ru: 'Несколько раз нажать и отпустить тормоз.', en: 'Pump the brake several times.' },
          { es: 'Usar solo el freno de mano.', ru: 'Тормозить только ручником.', en: 'Use only the handbrake.' },
          { es: 'Pisar el freno fuerte y a fondo hasta detenerse.', ru: 'Нажать тормоз сильно и до упора до полной остановки.', en: 'Press the brake hard and fully until you stop.' }
        ], answer: 2,
        explain: { ru: 'С ABS педаль держат нажатой до упора — система сама не даст колёсам заблокироваться. Прерывистое нажатие нужно только без ABS (учебник DGT, тема 5).',
                   en: 'With ABS you keep the pedal fully down — the system prevents locking. Pumping is only for cars without ABS (DGT manual, topic 5).' } },
      { es: '¿Qué profundidad mínima deben tener las ranuras de los neumáticos de un turismo?',
        prompt: { ru: 'Какой должна быть минимальная глубина протектора шин легкового автомобиля?', en: 'What is the minimum tread depth for car tyres?' },
        options: [
          { es: '1 milímetro.', ru: '1 мм.', en: '1 mm.' },
          { es: '1,6 milímetros.', ru: '1,6 мм.', en: '1.6 mm.' },
          { es: '3 milímetros.', ru: '3 мм.', en: '3 mm.' }
        ], answer: 1,
        explain: { ru: 'Не меньше 1,6 мм (учебник DGT, тема 5). Канавки отводят воду и уменьшают риск аквапланирования.',
                   en: 'At least 1.6 mm (DGT manual, topic 5). The grooves clear water and reduce the risk of aquaplaning.' } },
      { es: '¿Con qué frecuencia conviene comprobar la presión de los neumáticos?',
        prompt: { ru: 'Как часто нужно проверять давление в шинах?', en: 'How often should you check tyre pressure?' },
        options: [
          { es: 'Por lo menos una vez al mes.', ru: 'Хотя бы раз в месяц.', en: 'At least once a month.' },
          { es: 'Solo en la ITV.', ru: 'Только на техосмотре (ITV).', en: 'Only at the MOT (ITV).' },
          { es: 'Una vez al año.', ru: 'Раз в год.', en: 'Once a year.' }
        ], answer: 0,
        explain: { ru: 'Учебник DGT, тема 5: давление — минимум раз в месяц, включая запасное колесо.',
                   en: 'DGT manual, topic 5: check the pressure at least monthly, the spare wheel included.' } },
      { es: '¿Qué ocurre si circula con los neumáticos con menos presión de la recomendada?',
        prompt: { ru: 'Что будет, если ездить с давлением в шинах ниже рекомендованного?', en: 'What happens if you drive with tyre pressure below the recommended level?' },
        options: [
          { es: 'Se desgasta más el centro del neumático.', ru: 'Сильнее изнашивается центр протектора.', en: 'The centre of the tread wears more.' },
          { es: 'El neumático se calienta y aumenta el consumo.', ru: 'Шина греется, расход топлива растёт.', en: 'The tyre heats up and fuel use rises.' },
          { es: 'El vehículo gana adherencia en mojado.', ru: 'Машина лучше держит мокрую дорогу.', en: 'The car grips better in the wet.' }
        ], answer: 1,
        explain: { ru: 'Низкое давление: перегрев, быстрый износ, больше расход и выше риск заноса на мокром. Износ центра — признак слишком высокого давления.',
                   en: 'Low pressure: overheating, fast wear, higher consumption and more risk of skidding in the wet. A worn centre means pressure too high.' } },
      { es: '¿Qué indica esta señal?',
        prompt: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Uso obligatorio del cinturón de seguridad.', ru: 'Обязательно пристегнуть ремень безопасности.', en: 'Seat belt compulsory.' },
          { es: 'Prohibido circular sin pasajeros.', ru: 'Запрещено ехать без пассажиров.', en: 'No driving without passengers.' },
          { es: 'Zona de revisión de sillitas infantiles.', ru: 'Пункт проверки детских кресел.', en: 'Child-seat check point.' }
        ], answer: 0, sign: 'R-417',
        explain: { ru: 'R-417 — синий круглый предписывающий знак: обязательно пристегнуться ремнём. Ремень и так обязателен везде; знак лишь напоминает.',
                   en: 'R-417 is a round blue mandatory sign: wear the seat belt. Belts are compulsory everywhere anyway; the sign is a reminder.' } },
      { es: '¿Cuántos puntos pierde un conductor por no usar el cinturón de seguridad?',
        prompt: { ru: 'Сколько баллов теряет водитель за непристёгнутый ремень?', en: 'How many points does a driver lose for not wearing a seat belt?' },
        options: [
          { es: '2 puntos.', ru: '2 балла.', en: '2 points.' },
          { es: '6 puntos.', ru: '6 баллов.', en: '6 points.' },
          { es: '4 puntos.', ru: '4 балла.', en: '4 points.' }
        ], answer: 2,
        explain: { ru: 'LSV, приложение II, п. 15: не пользоваться ремнём, детским креслом или шлемом (или пользоваться неправильно) — минус 4 балла.',
                   en: 'LSV annex II, item 15: not using (or misusing) the belt, child restraint or helmet costs 4 points.' } }
    ]
  }
]);
