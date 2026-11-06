// DGT · theory, topic 18: the practical driving test (permiso B). Sources: DGT «Criterios de calificación»
// de la prueba de control de aptitudes y comportamientos en vías abiertas (marzo 2026), dgt.es «Examen práctico
// en vías abiertas», RGCond (RD 818/2009): arts. 49, 51, 53, 55, 57, 58; anexos V.B, VI, VII.B.
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-practico', level: 'DGT', noExam: true,
    title: { ru: 'Экзамен по вождению', en: 'The driving test' },
    summary: { ru: 'Как идёт практический экзамен на категорию B, какие ошибки E, D и L, манёвры и фразы экзаменатора.',
               en: 'How the category B practical test works, E, D and L faults, manoeuvres and the examiner’s phrases.' },
    hero: { es: 'Examen <b>práctico</b> de conducir',
            sub: { ru: 'Критерии оценки DGT 2026: шкала «не сдал», типичные ошибки и что говорит экзаменатор',
                   en: 'DGT 2026 marking criteria: the fail scale, typical faults and what the examiner says' } },
    tabs: [
      {
        id: 'exam', label: { ru: 'Экзамен', en: 'The test' },
        blocks: [
          { type: 'text', body: {
            ru: ['Официальное название — <b>prueba de control de aptitudes y comportamientos en circulación en vías abiertas al tráfico general</b>. Сдают её после теории, на машине автошколы с двойным управлением: рядом с вами сидит преподаватель (<b>profesor</b>), сзади — экзаменатор (<b>examinador</b>). Инструкции даёт только экзаменатор (RGCond, ст. 55).',
                 'Отдельной площадки для категории B нет: специальные манёвры (задний ход, разворот, парковка, точное торможение) делают прямо в городе во время поездки (RGCond, ст. 58.1; прил. V.B.3).'],
            en: ['Its official name is <b>prueba de control de aptitudes y comportamientos en circulación en vías abiertas al tráfico general</b>. You take it after the theory test, in a driving-school car with dual controls: the instructor (<b>profesor</b>) sits next to you and the examiner (<b>examinador</b>) behind. Only the examiner gives instructions (RGCond art. 55).',
                 'Category B has no separate closed circuit: the special manoeuvres (reversing, turning round, parking, precise braking) are done in town during the drive (RGCond art. 58.1; annex V.B.3).'] } },
          { type: 'rules', heading: { ru: 'Главные цифры', en: 'Key numbers' }, items: [
            { color: 'blue', label: { ru: 'Время', en: 'Time' }, title: { ru: 'Минимум 25 минут за рулём', en: 'At least 25 minutes of driving' }, es: '25 min · 30 min',
              body: { ru: 'Езда в потоке — не меньше 25 минут. Всего на экзамен отводится 30 минут: встреча, подготовка машины, проверки, манёвры и объявление результата.',
                      en: 'Driving in traffic: at least 25 minutes. The whole test is counted as 30 minutes: reception, preparing the car, checks, manoeuvres and telling you the result.' } },
            { color: 'blue', label: { ru: 'Маршрут', en: 'Route' }, title: { ru: 'Город и трасса', en: 'Town and open road' }, es: 'vías urbanas e interurbanas',
              body: { ru: 'Маршрут проходит по городским и загородным дорогам и должен охватить не меньше <b>80 %</b> ситуаций, которые встречаются в движении: жилые зоны, улицы 30 и 50 км/ч, по возможности autovía или autopista.',
                      en: 'The route covers urban and interurban roads and must include at least <b>80 %</b> of the situations found in traffic: residential zones, 30 and 50 km/h streets and, if possible, an autovía or autopista.' } },
            { color: 'blue', label: { ru: 'Машина', en: 'Car' }, title: { ru: 'Учебный легковой автомобиль', en: 'Learner car' }, es: 'turismo con doble mando',
              body: { ru: 'Закрытый кузов, по две двери с каждой стороны, длина не меньше 3,5 м, ММА до 3500 кг, подголовники спереди и сзади (RGCond, прил. VII.B.5).',
                      en: 'Closed body, two doors on each side, at least 3.5 m long, MAM up to 3,500 kg, head restraints front and rear (RGCond annex VII.B.5).' } },
            { color: 'blue', label: { ru: 'Попытки', en: 'Attempts' }, title: { ru: 'Две попытки на заявление', en: 'Two sittings per application' }, es: 'dos convocatorias',
              body: { ru: 'Одно заявление даёт две попытки (<b>convocatorias</b>), между ними не больше шести месяцев. Сданная теория действует <b>два года</b> (RGCond, ст. 51.2 и 53.1).',
                      en: 'One application gives two sittings (<b>convocatorias</b>), no more than six months apart. A passed theory test stays valid for <b>two years</b> (RGCond arts. 51.2 and 53.1).' } }
          ] },
          { type: 'table', heading: { ru: 'Шкала «не сдал»', en: 'The fail scale' },
            head: [{ ru: 'Ошибки', en: 'Faults' }, { ru: 'Итог', en: 'Result' }],
            rows: [
              ['E', { ru: '1 eliminatoria — не сдал', en: '1 eliminatory: fail' }],
              ['D + D', { ru: '2 deficientes — не сдал', en: '2 deficient: fail' }],
              ['D + 5 L', { ru: '1 deficiente + 5 leves', en: '1 deficient + 5 minor' }],
              ['10 L', { ru: '10 leves — не сдал', en: '10 minor: fail' }],
              ['D + 4 L', { ru: 'сдал (APTO)', en: 'pass (APTO)' }],
              ['9 L', { ru: 'сдал (APTO)', en: 'pass (APTO)' }]
            ] },
          { type: 'figure', src: 'img/dgt/practico-baremo.svg',
            alt: { ru: 'Шкала: одна E, две D, одна D и пять L или десять L — экзамен не сдан', en: 'Scale: one E, two D, one D and five L, or ten L means a fail' },
            caption: { ru: 'Достаточно любой из четырёх строк, чтобы получить NO APTO.', en: 'Any one of the four rows is enough for a NO APTO.' } },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>В начале</b> экзаменатор проверяет документы (DNI или NIE) и может попросить показать что-то в машине: найти органы управления, проверить шины, фары, уровни жидкостей, звуковой сигнал, открыть капот, показать светоотражающий жилет и аварийный знак. Ошибка здесь — одна лёгкая (L). Затем вы настраиваете сиденье и зеркала и пристёгиваетесь (Criterios, ап. 1–2).',
                 '<b>Результат</b> вы получаете в бланке-отчёте (<b>informe</b>) с кодами ошибок; его же можно посмотреть на dgt.es («Consulta tu nota de examen»). Не согласны — жалоба начальнику провинциального управления (<b>Jefe Provincial de Tráfico</b>) в течение 15 рабочих дней, затем — <b>recurso de alzada</b> в течение месяца.'],
            en: ['<b>At the start</b> the examiner checks your ID (DNI or NIE) and may ask you to show things in the car: locate the controls, check tyres, lights, fluid levels, the horn, open the bonnet, show the reflective vest and warning device. A mistake here is one minor fault (L). Then you adjust the seat and mirrors and fasten your belt (Criterios, sections 1–2).',
                 '<b>The result</b> comes on a report form (<b>informe</b>) with fault codes; you can also see it on dgt.es («Consulta tu nota de examen»). If you disagree, complain to the <b>Jefe Provincial de Tráfico</b> within 15 working days, then file a <b>recurso de alzada</b> within one month.'] } },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Если не сдали:</b> после двух неудачных попыток по одному заявлению до третьей должно пройти не меньше 10 дней, между следующими — не меньше 15 (RGCond, прил. VI). Если экзамен не начали или прервали из‑за машины, документов или погоды не по вашей вине, попытка не сгорает (ст. 57.2, 62). Неявка без уважительной причины — попытка потеряна (ст. 51.2).'],
            en: ['<b>If you fail:</b> after two failed sittings on one application, at least 10 days must pass before the third and at least 15 between later ones (RGCond annex VI). If the test does not start or is stopped because of the car, documents or conditions that are not your fault, you keep the sitting (arts. 57.2, 62). Not turning up without good reason loses the sitting (art. 51.2).'] } }
        ]
      },
      {
        id: 'eliminatory', label: { ru: 'Фатальные', en: 'Eliminatory' },
        blocks: [
          { type: 'text', body: {
            ru: ['<b>Falta eliminatoria (E)</b> — поведение, которое создаёт опасность для вас или других, а также нарушение регулирующих знаков, за которое по Закону о дорожном движении положен серьёзный или очень серьёзный штраф. <b>Одна E — экзамен не сдан</b>, и экзаменатор может прервать его сразу, как только остановка будет безопасной (RGCond, ст. 49.3).'],
            en: ['<b>An eliminatory fault (E)</b> is behaviour that endangers you or others, or breaking a regulatory sign when that is a serious or very serious offence under the Traffic Act. <b>One E means a fail</b>, and the examiner may stop the test as soon as it is safe to pull over (RGCond art. 49.3).'] } },
          { type: 'triggers', heading: { ru: 'Самые частые E', en: 'The most common E faults' }, items: [
            { num: '1', color: 'coral', title: { ru: 'Приоритет', en: 'Priority' },
              body: { ru: 'Не выполнить требование знаков «Уступите дорогу», STOP или «Преимущество встречного движения»; не остановиться у второй точки обзора на STOP.', en: 'Ignoring Give way, STOP or Priority to oncoming traffic; not stopping at the second, visible point at a STOP.' },
              phrases: ['ceda el paso', 'stop', 'prioridad en sentido contrario'] },
            { num: '2', color: 'coral', title: { ru: 'Светофор и регулировщик', en: 'Lights and police' },
              body: { ru: 'Проехать на красный (в том числе если вы уже перестали видеть сигнал или он стоит за перекрёстком), не подчиниться жестам регулировщика, въехать в полосу под красным крестом.', en: 'Running a red (including when you can no longer see it or it is beyond the junction), ignoring a police officer’s signals, entering a lane under a red X.' },
              phrases: ['semáforo en rojo', 'señales de los agentes', 'aspa roja'] },
            { num: '3', color: 'coral', title: { ru: 'Пешеходы и велосипедисты', en: 'Pedestrians and cyclists' },
              body: { ru: 'Не пропустить пешехода или велосипедиста, который уже переходит по зебре или велопереезду; опасно мало места при объезде.', en: 'Not letting a pedestrian or cyclist already crossing at a zebra or cycle crossing go first; passing them dangerously close.' },
              phrases: ['paso para peatones', 'separación lateral'] },
            { num: '4', color: 'coral', title: { ru: 'Скорость', en: 'Speed' },
              body: { ru: 'Превышение общего лимита или знака больше чем на 30 км/ч; скорость, опасная для погоды и дороги; после просьбы экзаменатора по‑прежнему ехать слишком медленно.', en: 'Exceeding the general limit or a sign by more than 30 km/h; a speed dangerous for the weather and road; still driving far too slowly after the examiner asked you to keep up.' },
              phrases: ['más de 30 km/h', 'velocidad inadecuada'] },
            { num: '5', color: 'coral', title: { ru: 'Разметка и знаки', en: 'Markings and signs' },
              body: { ru: 'Пересечь сплошную, разделяющую встречные потоки, или ехать левее неё; заехать под «Въезд запрещён»; не выполнить предписывающий знак; ехать по полосе для автобусов, такси или велосипедов.', en: 'Crossing a solid line between opposite flows or driving left of it; entering against No entry; ignoring a mandatory sign; using a bus, taxi or cycle lane.' },
              phrases: ['línea continua', 'entrada prohibida', 'carril bus'] },
            { num: '6', color: 'coral', title: { ru: 'Опасность и контроль', en: 'Danger and control' },
              body: { ru: 'Удар о человека, машину или предмет; заставить другого резко менять траекторию или скорость; потеря управления; заезд колесом на бордюр; вмешательство преподавателя или системы AEB.', en: 'Hitting a person, vehicle or object; forcing someone to swerve or brake hard; losing control; mounting the kerb; the instructor or the AEB system having to step in.' },
              phrases: ['accidente', 'maniobra evasiva', 'pérdida de dominio', 'intervención del profesor'] }
          ] },
          { type: 'table', heading: { ru: 'Формулировки из критериев', en: 'Wording from the criteria' },
            head: [{ ru: 'Пункт', en: 'Item' }, { ru: 'Ошибка E', en: 'E fault' }],
            rows: [
              ['11.3', 'No respetar semáforo en rojo'],
              ['11.4', 'Incumplir CEDA EL PASO o STOP'],
              ['11.5.1', 'Atravesar línea continua'],
              ['11.5.2', 'No dejar pasar a los peatones'],
              ['4.5', 'Exceder en más de 30 km/h'],
              ['15.1.1', 'Accidente'],
              ['15.1.2', 'Maniobra o actuación evasiva'],
              ['15.1.4', 'Pérdida de dominio'],
              ['15.1.6', 'Intervención del profesor'],
              ['15.2', 'Subir al bordillo']
            ] },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Вмешательство преподавателя.</b> Если преподаватель подсказал словом или жестом, нажал на педаль или повернул руль, экзамен прерывают и ставят NO APTO — даже если он был обязан вмешаться (RGCond, ст. 55.3; Criterios, 15.1.6). Звуковое предупреждение системы помощи само по себе не оценивается.',
                 '<b>«Не выполнять указания»</b> — тоже E, но только если это повторилось не меньше трёх раз и каждый раз вам об этом сказали (Criterios, 15.3).'],
            en: ['<b>Instructor intervention.</b> If the instructor helps with words or gestures, presses a pedal or turns the wheel, the test is stopped and marked NO APTO, even if they had to intervene (RGCond art. 55.3; Criterios 15.1.6). A driver-assist beep on its own is not marked.',
                 '<b>«Not following instructions»</b> is also an E, but only when it happens at least three times and you were told each time (Criterios 15.3).'] } }
        ]
      },
      {
        id: 'minor', label: { ru: 'Ошибки D и L', en: 'D and L' },
        blocks: [
          { type: 'rules', heading: { ru: 'Что такое D и L', en: 'What D and L mean' }, items: [
            { color: 'amber', label: { ru: 'D', en: 'D' }, title: { ru: 'Falta deficiente', en: 'Deficient fault' }, es: 'obstaculizando',
              body: { ru: 'Вы <b>мешаете</b> другим (заметно затрудняете им движение), сильно сокращаете дистанцию или нарушаете знак, но без опасности. Две D — не сдал.', en: 'You <b>obstruct</b> others (noticeably hold them up), seriously cut the safety gap or break a sign without creating danger. Two Ds mean a fail.' } },
            { color: 'teal', label: { ru: 'L', en: 'L' }, title: { ru: 'Falta leve', en: 'Minor fault' }, es: 'manejo incorrecto',
              body: { ru: 'Любое другое нарушение правил без помех другим и <b>неправильная работа органами управления</b>. По обстоятельствам ту же ошибку могут оценить строже.', en: 'Any other breach of the rules that hinders nobody, and <b>clumsy use of the controls</b>. Depending on the situation the same mistake can be marked more severely.' } }
          ] },
          { type: 'text', color: 'amber', body: {
            ru: ['Ключевое слово критериев — <b>obstaculizando</b> («создавая помеху»). Многие ошибки записаны дважды: «…, obstaculizando» — это D, та же ошибка без помехи — L. Например, ехать без причины слишком медленно: мешаете — D, нет — L.'],
            en: ['The key word in the criteria is <b>obstaculizando</b> («obstructing»). Many faults appear twice: «…, obstaculizando» is a D, the same fault with nobody held up is an L. For example, driving needlessly slowly: holding others up is a D, otherwise an L.'] } },
          { type: 'table', heading: { ru: 'Типичные D', en: 'Typical D faults' },
            head: [{ ru: 'Ситуация', en: 'Situation' }, { ru: 'Пункт', en: 'Item' }],
            rows: [
              [{ ru: 'Дистанция < половины нормы', en: 'Gap under half the safe one' }, '4.2'],
              [{ ru: 'Превышение на 21–30 км/ч', en: '21–30 km/h over the limit' }, '4.5'],
              [{ ru: 'Не пропустил спецмашину', en: 'Not clearing for emergency' }, '4.6'],
              [{ ru: 'Помешал при перестроении', en: 'Lane change obstructing' }, '5.3'],
              [{ ru: 'Помешал пешеходу у зебры', en: 'Holding up a waiting walker' }, '11.5.2'],
              [{ ru: 'Жёлтый, хотя мог встать', en: 'Amber when able to stop' }, '11.3'],
              [{ ru: 'Ручник не снят, мешает езде', en: 'Handbrake on, slows the car' }, '13.1.6'],
              [{ ru: 'Откат назад > 50 см', en: 'Rolling back over 50 cm' }, '13.2.2'],
              [{ ru: 'Перепутал педали', en: 'Pedal confusion' }, '13.1.2']
            ] },
          { type: 'table', heading: { ru: 'Типичные L', en: 'Typical L faults' },
            head: [{ ru: 'Ситуация', en: 'Situation' }, { ru: 'Пункт', en: 'Item' }],
            rows: [
              [{ ru: 'Не настроил зеркала', en: 'Mirrors not adjusted' }, '2.2'],
              [{ ru: 'Не пристегнулся', en: 'Seat belt not worn' }, '2.3'],
              [{ ru: 'Не посмотрел в зеркала', en: 'No mirror check' }, '3.1, 5.1'],
              [{ ru: 'Нет поворотника / поздно', en: 'No signal or too late' }, '3.2, 5.2'],
              [{ ru: 'Поворотник не выключен', en: 'Indicator left on' }, '5.2'],
              [{ ru: 'Превышение на 11–20 км/ч', en: '11–20 km/h over the limit' }, '4.5'],
              [{ ru: 'Заглох мотор', en: 'Stalling' }, '13.1.5'],
              [{ ru: 'Не та передача', en: 'Wrong gear' }, '13.1.5'],
              [{ ru: 'Резкое торможение', en: 'Harsh braking' }, '13.1.3'],
              [{ ru: 'Ударил бордюр, не заехав', en: 'Hit the kerb, not mounting' }, '9.4'],
              [{ ru: 'Неэкономичная езда', en: 'Not driving efficiently' }, '13.1.8']
            ] },
          { type: 'tip', title: { ru: 'Как считаются повторы', en: 'How repeats are counted' },
            body: { ru: ['Каждое заглохание — <b>отдельная L</b>. Два раза заглохли в одной ситуации из‑за ручника — пишут обе ошибки и подсказывают снять его.',
                         'Неэкономичную езду отмечают <b>одной L</b> в конце. Ошибки при начальной проверке машины — тоже <b>одна L</b>.',
                         'Если вы ошиблись передачей и <b>сразу исправились</b>, это не ошибка. Не включили фары или дворники, когда нужно, — L; после подсказки снова не сделали — E.'],
                    en: ['Each stall is <b>a separate L</b>. Two stalls in the same situation because of the handbrake: both are marked and you are told to release it.',
                         'Inefficient driving is marked as <b>one L</b> at the end. Mistakes in the initial vehicle check are also <b>one L</b>.',
                         'Picking the wrong gear and <b>correcting it at once</b> is not a fault. Not switching on lights or wipers when needed is an L; still not doing it after being told is an E.'] } }
        ]
      },
      {
        id: 'manoeuvres', label: { ru: 'Манёвры', en: 'Manoeuvres' },
        blocks: [
          { type: 'text', body: {
            ru: ['В каждом манёвре экзаменатор оценивает три вещи: <b>observación</b> (посмотрели ли вы вперёд, назад и в стороны), <b>señalización</b> (вовремя ли включили и выключили сигнал) и <b>ejecución</b> (как выполнили, не помешали ли). Из специальных манёвров (задний ход, разворот, парковка, точное торможение) нужно сделать минимум два, один из них — с задним ходом (RGCond, прил. V.B.3).'],
            en: ['In every manoeuvre the examiner looks at three things: <b>observación</b> (did you look ahead, behind and to the sides), <b>señalización</b> (did you signal and cancel in time) and <b>ejecución</b> (how you did it and whether you held anyone up). Of the special manoeuvres (reversing, turning round, parking, precise braking) you must do at least two, one of them involving reversing (RGCond annex V.B.3).'] } },
          { type: 'triggers', heading: { ru: 'Что смотрит экзаменатор', en: 'What the examiner watches' }, items: [
            { num: '1', color: 'blue', title: { ru: 'Выезд в поток', en: 'Moving off' },
              body: { ru: 'Зеркала и мёртвая зона, сигнал, плавный выезд без помех. Слишком долго ждёте при хорошем окне — L, лишние движения рулём — L, помешали — D. По полосе разгона: разогнаться и войти, не останавливаясь без нужды.', en: 'Mirrors and blind spot, signal, smooth start without obstructing. Waiting too long with a clear gap: L; extra steering moves: L; obstructing: D. On a slip road: build up speed and merge without stopping needlessly.' },
              phrases: ['incorporación', 'carril de aceleración'] },
            { num: '2', color: 'blue', title: { ru: 'Смена полосы', en: 'Changing lanes' },
              body: { ru: 'Сигнал не слишком рано и не слишком поздно, плавно, с запасом до других машин. На съезде — как можно раньше въехать в полосу торможения.', en: 'Signal neither too early nor too late, move smoothly, keep a margin. When leaving: enter the deceleration lane as early as possible.' },
              phrases: ['desplazamiento lateral', 'carril de deceleración'] },
            { num: '3', color: 'blue', title: { ru: 'Перекрёстки и круги', en: 'Junctions and roundabouts' },
              body: { ru: 'Правильная позиция заранее, скорость по обстановке, остановка на STOP у линии и, если оттуда не видно, вторая — там, где видно. Объехать центр круга слева — E.', en: 'Correct position in good time, speed for the situation, stopping at the STOP line and, if you cannot see from there, a second stop where you can. Going round the left of the central island: E.' },
              phrases: ['intersección', 'glorieta', 'línea de detención'] },
            { num: '4', color: 'blue', title: { ru: 'Разворот', en: 'Turning round' },
              body: { ru: 'Только где разрешено. Лишние движения задним ходом: одно — L, два — D, три и больше — E.', en: 'Only where allowed. Extra reversing moves: one is an L, two a D, three or more an E.' },
              phrases: ['cambio de sentido'] },
            { num: '5', color: 'blue', title: { ru: 'Парковка', en: 'Parking' },
              body: { ru: 'Не больше 2 минут. Машина торчит из ряда больше чем наполовину — E, меньше — D. В «ёлочку» или перпендикулярно: выступ больше 1 м — E, больше 0,5 м — D. Задний ход больше 15 м — L (с помехой — D).', en: 'Two minutes at most. Sticking out of the line by more than half the car: E, less: D. In a bay: more than 1 m out: E, more than 0.5 m: D. Reversing more than 15 m: L (D if obstructing).' },
              phrases: ['estacionar en línea', 'en batería', 'marcha atrás'] },
            { num: '6', color: 'blue', title: { ru: 'Выход из машины', en: 'Leaving the car' },
              body: { ru: 'Ручник, подходящая передача на уклоне, двигатель выключен; дверь открывать, только посмотрев назад.', en: 'Handbrake, a suitable gear on a slope, engine off; open the door only after looking back.' },
              phrases: ['freno de mano', 'abrir la puerta'] }
          ] },
          { type: 'figure', src: 'img/dgt/practico-stop.svg',
            alt: { ru: 'STOP: первая остановка у сплошной стоп-линии, вторая — там, где видно перекрёсток', en: 'STOP: first stop at the solid stop line, a second where the junction is visible' },
            caption: { ru: 'Нет первой остановки у линии — L, нет второй там, где видно, — E (Criterios, 11.4).', en: 'Missing the first stop at the line is an L, missing the second where you can see is an E (Criterios 11.4).' } },
          { type: 'tip', title: { ru: 'Камера и парктроник', en: 'Camera and sensors' },
            body: { ru: 'Смотреть на экран камеры заднего хода и слушать датчики можно — это не ошибка. Нельзя пользоваться автоматической парковкой, при которой машина рулит сама.',
                    en: 'Looking at the reversing camera and listening to the parking sensors is fine and not a fault. Fully automatic parking, where the car steers itself, is not allowed.' } }
        ]
      },
      {
        id: 'phrases', label: { ru: 'Фразы', en: 'Phrases' },
        blocks: [
          { type: 'examples', heading: { ru: 'Направление', en: 'Directions' }, items: [
            { es: '<b>Gire a la derecha</b> en la próxima calle.', ru: 'Поверните направо на следующей улице.', en: 'Turn right at the next street.' },
            { es: '<b>Gire a la izquierda</b> en el semáforo.', ru: 'Поверните налево на светофоре.', en: 'Turn left at the traffic lights.' },
            { es: '<b>Siga recto</b> hasta nuevo aviso.', ru: 'Езжайте прямо, пока я не скажу иначе.', en: 'Go straight on until I tell you otherwise.' },
            { es: '<b>Al final de la calle</b>, a la izquierda.', ru: 'В конце улицы — налево.', en: 'At the end of the street, turn left.' },
            { es: 'En la glorieta, <b>tome la segunda salida</b>.', ru: 'На круге — второй съезд.', en: 'At the roundabout, take the second exit.' },
            { es: 'En la glorieta, <b>haga un cambio de sentido</b>.', ru: 'На круге развернитесь.', en: 'Go all the way round the roundabout and come back.' },
            { es: '<b>Siga las indicaciones</b> hacia el centro.', ru: 'Езжайте по указателям к центру.', en: 'Follow the signs to the centre.' },
            { es: '<b>Continúe por la derecha</b>.', ru: 'Держитесь правее / продолжайте по правой полосе.', en: 'Keep to the right.' },
            { es: '<b>Coja el carril de la izquierda</b> para girar.', ru: 'Займите левую полосу для поворота.', en: 'Get into the left lane to turn.' },
            { es: '<b>Cambie de carril</b> cuando pueda.', ru: 'Перестройтесь, когда сможете.', en: 'Change lanes when you can.' }
          ] },
          { type: 'examples', heading: { ru: 'Трасса и манёвры', en: 'Open road and manoeuvres' }, items: [
            { es: '<b>Incorpórese a la autovía</b>.', ru: 'Выезжайте на автомагистраль.', en: 'Join the dual carriageway.' },
            { es: '<b>Tome la próxima salida</b>.', ru: 'Съезжайте на следующем съезде.', en: 'Take the next exit.' },
            { es: '<b>Adelante</b> cuando sea seguro.', ru: 'Обгоните, когда будет безопасно.', en: 'Overtake when it is safe.' },
            { es: '<b>Adáptese al ritmo</b> del tráfico.', ru: 'Подстройтесь под скорость потока.', en: 'Keep up with the flow of traffic.' },
            { es: '<b>Estacione donde pueda</b>.', ru: 'Припаркуйтесь, где сможете.', en: 'Park where you can.' },
            { es: '<b>Aparque en línea</b> detrás del coche blanco.', ru: 'Встаньте параллельно за белой машиной.', en: 'Parallel park behind the white car.' },
            { es: '<b>Aparque en batería</b> en ese hueco.', ru: 'Встаньте перпендикулярно в это место.', en: 'Bay park in that space.' },
            { es: '<b>Dé marcha atrás</b> hasta la esquina.', ru: 'Сдайте назад до угла.', en: 'Reverse to the corner.' },
            { es: '<b>Dé la vuelta</b> en esta calle.', ru: 'Развернитесь на этой улице.', en: 'Turn round in this street.' },
            { es: '<b>Pare en el arcén</b>.', ru: 'Остановитесь на обочине.', en: 'Stop on the hard shoulder.' },
            { es: '<b>Detenga el vehículo</b> a la derecha.', ru: 'Остановите машину справа.', en: 'Pull over on the right.' },
            { es: '<b>Arranque</b> cuando esté listo.', ru: 'Трогайтесь, когда будете готовы.', en: 'Move off when you are ready.' }
          ] },
          { type: 'examples', heading: { ru: 'Проверка и конец экзамена', en: 'Checks and the end of the test' }, items: [
            { es: '<b>Ponga el intermitente</b> derecho.', ru: 'Включите правый поворотник.', en: 'Put on the right indicator.' },
            { es: '<b>Encienda las luces de cruce</b>.', ru: 'Включите ближний свет.', en: 'Switch on the dipped headlights.' },
            { es: '<b>Abra el capó</b>, por favor.', ru: 'Откройте капот, пожалуйста.', en: 'Open the bonnet, please.' },
            { es: '¿Dónde <b>se comprueba el nivel</b> de aceite?', ru: 'Где проверяется уровень масла?', en: 'Where do you check the oil level?' },
            { es: '<b>Apague el motor</b>. Hemos terminado.', ru: 'Заглушите двигатель. Мы закончили.', en: 'Switch off the engine. We have finished.' },
            { es: '¿<b>Puede repetirlo</b>, por favor?', ru: 'Можете повторить, пожалуйста?', en: 'Could you repeat that, please?' }
          ] },
          { type: 'table', heading: { ru: 'Ключевые слова', en: 'Key words' },
            head: ['Español', { ru: 'Перевод', en: 'Meaning' }],
            rows: [
              ['el intermitente', { ru: 'поворотник', en: 'indicator' }],
              ['el retrovisor', { ru: 'зеркало заднего вида', en: 'mirror' }],
              ['el ángulo muerto', { ru: 'мёртвая зона', en: 'blind spot' }],
              ['el embrague', { ru: 'сцепление', en: 'clutch' }],
              ['el freno de mano', { ru: 'ручник', en: 'handbrake' }],
              ['la marcha atrás', { ru: 'задний ход', en: 'reverse' }],
              ['punto muerto', { ru: 'нейтраль', en: 'neutral' }],
              ['calarse', { ru: 'заглохнуть', en: 'to stall' }],
              ['aparcar en línea', { ru: 'параллельная парковка', en: 'parallel parking' }],
              ['aparcar en batería', { ru: 'перпендикулярная парковка', en: 'bay parking' }],
              ['el ceda el paso', { ru: 'уступите дорогу', en: 'give way' }],
              ['la glorieta', { ru: 'круговое движение', en: 'roundabout' }],
              ['el bordillo', { ru: 'бордюр', en: 'kerb' }],
              ['el arcén', { ru: 'обочина', en: 'hard shoulder' }],
              ['apto / no apto', { ru: 'сдал / не сдал', en: 'pass / fail' }]
            ] }
        ]
      },
      {
        id: 'tips', label: { ru: 'Советы', en: 'Tips' },
        blocks: [
          { type: 'text', color: 'purple', body: {
            ru: ['Ниже — <b>советы</b>, а не правила: так проще не набрать ошибок. Правила с номерами пунктов — во вкладках 2–4.'],
            en: ['Below are <b>tips</b>, not rules: ways to avoid collecting faults. The rules with item numbers are in tabs 2–4.'] } },
          { type: 'rules', items: [
            { color: 'purple', label: { ru: 'Совет', en: 'Tip' }, title: { ru: 'Показывайте взгляд', en: 'Make your checks visible' }, es: 'retrovisor + ángulo muerto',
              body: { ru: 'Экзаменатор сзади видит не глаза, а движение головы. Перед каждым манёвром поворачивайте голову к зеркалу и к мёртвой зоне чуть заметнее, чем обычно.', en: 'The examiner behind sees your head, not your eyes. Before each manoeuvre turn your head to the mirror and the blind spot a little more visibly than usual.' } },
            { color: 'purple', label: { ru: 'Совет', en: 'Tip' }, title: { ru: 'Сигнал — вовремя', en: 'Signal in good time' }, es: 'intermitente',
              body: { ru: 'Сначала зеркало, потом поворотник, потом манёвр. Не слишком рано (чтобы не спутать с предыдущим поворотом) и обязательно выключить после.', en: 'Mirror first, then indicator, then manoeuvre. Not too early (so it is not mistaken for an earlier turning) and always cancel it afterwards.' } },
            { color: 'purple', label: { ru: 'Совет', en: 'Tip' }, title: { ru: 'Смотрите далеко', en: 'Look far ahead' }, es: 'anticipación',
              body: { ru: 'Замечайте зебры, автобусы на остановках и светофоры заранее: резкое торможение у светофора — ошибка, а плавное снижение скорости — нет.', en: 'Spot zebras, buses at stops and traffic lights early: braking suddenly at a light is a fault, slowing down smoothly is not.' } },
            { color: 'purple', label: { ru: 'Совет', en: 'Tip' }, title: { ru: 'Не ползите', en: 'Do not crawl' }, es: 'ritmo del tráfico',
              body: { ru: 'Слишком медленная езда без причины — тоже ошибка. Держите разрешённую скорость, если позволяют условия, и уверенно выезжайте, когда окно есть.', en: 'Driving too slowly for no reason is also a fault. Hold the permitted speed when conditions allow and pull out decisively when there is a gap.' } },
            { color: 'purple', label: { ru: 'Совет', en: 'Tip' }, title: { ru: 'Не поняли — переспросите', en: 'Ask again if unsure' }, es: '¿Puede repetirlo?',
              body: { ru: 'Переспросить указание — нормально: в критериях это не ошибка. А вот спрашивать дорогу, не посмотрев на указатели, — L (пункт 7.1). Если всё же свернули не туда, спокойно продолжайте: сам неверный поворот без нарушения правил не наказывается.', en: 'Asking for an instruction again is normal: the criteria do not list it as a fault. Asking the way because you did not look at the signs, however, is an L (item 7.1). If you take a wrong turning anyway, carry on calmly: a wrong turn that breaks no rule is not penalised in itself.' } },
            { color: 'purple', label: { ru: 'Совет', en: 'Tip' }, title: { ru: 'Одна ошибка — не конец', en: 'One fault is not the end' }, es: 'calma',
              body: { ru: 'Заглохли или ошиблись передачей — это L, а сдать можно и с девятью L. Не паникуйте: нервная спешка после ошибки часто приводит к D или E.', en: 'Stalling or a wrong gear is an L, and you can pass with nine Ls. Do not panic: rushing nervously after a mistake often leads to a D or an E.' } }
          ] },
          { type: 'tip', title: { ru: 'Чек-лист перед стартом', en: 'Checklist before moving off' },
            body: { ru: ['Сиденье и подголовник → зеркала → ремень → нейтраль и запуск → ближний свет, если нужно → зеркала и мёртвая зона → поворотник → снять ручник → плавно тронуться.'],
                    en: ['Seat and head restraint → mirrors → seat belt → neutral and start the engine → dipped lights if needed → mirrors and blind spot → indicator → release the handbrake → move off smoothly.'] } }
        ]
      }
    ],
    quizCount: 20,
    quiz: [
      { es: '¿Con cuántas faltas leves es declarado no apto el aspirante si no tiene otras faltas?',
        prompt: { ru: 'При скольких лёгких ошибках (и без других) кандидат не сдаёт экзамен?', en: 'With how many minor faults (and no others) does a candidate fail?' },
        options: [
          { es: 'Con diez.', ru: 'При десяти.', en: 'Ten.' },
          { es: 'Con cinco.', ru: 'При пяти.', en: 'Five.' },
          { es: 'Con cuatro.', ru: 'При четырёх.', en: 'Four.' }
        ],
        answer: 0,
        explain: { ru: 'Шкала NO APTO: E; DD; D + 5L; 10L. Четыре L — это шкала площадки для мотоциклов. RGCond, прил. VI.C.3; Criterios DGT.', en: 'NO APTO scale: E; DD; D + 5L; 10L. Four Ls is the motorcycle circuit scale. RGCond annex VI.C.3; DGT Criterios.' } },
      { es: 'Un aspirante comete una falta deficiente. ¿Con cuántas faltas leves más sería no apto?',
        prompt: { ru: 'У кандидата одна D. Сколько ещё L приведут к «не сдал»?', en: 'A candidate has one D. How many more Ls would make it a fail?' },
        options: [
          { es: 'Con dos.', ru: 'Две.', en: 'Two.' },
          { es: 'Con cinco.', ru: 'Пять.', en: 'Five.' },
          { es: 'Con diez.', ru: 'Десять.', en: 'Ten.' }
        ],
        answer: 1,
        explain: { ru: 'Одна D плюс пять L — NO APTO; с четырьмя L ещё сдал. Criterios DGT, баремо; RGCond, прил. VI.C.3.', en: 'One D plus five Ls is NO APTO; with four Ls you still pass. DGT Criterios, scale; RGCond annex VI.C.3.' } },
      { es: '¿Cuántas faltas deficientes bastan para ser declarado no apto?',
        prompt: { ru: 'Сколько ошибок D достаточно, чтобы не сдать?', en: 'How many D faults are enough to fail?' },
        options: [
          { es: 'Tres.', ru: 'Три.', en: 'Three.' },
          { es: 'Una.', ru: 'Одной.', en: 'One.' },
          { es: 'Dos.', ru: 'Двух.', en: 'Two.' }
        ],
        answer: 2,
        explain: { ru: 'Две D — NO APTO. Одной D мало, если L меньше пяти. Criterios DGT, баремо.', en: 'Two Ds mean NO APTO. One D alone is not enough if there are fewer than five Ls. DGT Criterios, scale.' } },
      { es: '¿Cuál es el tiempo mínimo de conducción en la prueba en vías abiertas para el permiso B?',
        prompt: { ru: 'Сколько минимум длится езда в потоке на экзамене категории B?', en: 'What is the minimum driving time in traffic for the category B test?' },
        options: [
          { es: '25 minutos.', ru: '25 минут.', en: '25 minutes.' },
          { es: '15 minutos.', ru: '15 минут.', en: '15 minutes.' },
          { es: '45 minutos.', ru: '45 минут.', en: '45 minutes.' }
        ],
        answer: 0,
        explain: { ru: '25 минут езды, всего на экзамен — 30 минут; 45 минут — для грузовых и автобусных категорий. RGCond, прил. VI.C.2; Criterios DGT.', en: '25 minutes of driving, 30 minutes in total; 45 minutes is for lorry and bus categories. RGCond annex VI.C.2; DGT Criterios.' } },
      { es: '¿Por qué tipo de vías debe discurrir la prueba práctica?',
        prompt: { ru: 'По каким дорогам проходит маршрут экзамена?', en: 'On which roads does the test route run?' },
        options: [
          { es: 'Solo por vías urbanas.', ru: 'Только по городским улицам.', en: 'Only urban roads.' },
          { es: 'Por vías urbanas e interurbanas, con al menos el 80 % de las incidencias del tráfico.', ru: 'По городским и загородным дорогам, охватывая не меньше 80 % дорожных ситуаций.', en: 'Urban and interurban roads, covering at least 80 % of traffic situations.' },
          { es: 'Solo por un circuito cerrado.', ru: 'Только по закрытой площадке.', en: 'Only a closed circuit.' }
        ],
        answer: 1,
        explain: { ru: 'Маршрут включает город и трассу и не меньше 80 % ситуаций движения. Criterios DGT; RGCond, ст. 58.2.', en: 'The route includes town and open road and at least 80 % of traffic situations. DGT Criterios; RGCond art. 58.2.' } },
      { es: 'Durante la prueba, ¿quién da las instrucciones al aspirante?',
        prompt: { ru: 'Кто даёт указания кандидату во время экзамена?', en: 'Who gives the candidate instructions during the test?' },
        options: [
          { es: 'El profesor de la autoescuela.', ru: 'Преподаватель автошколы.', en: 'The driving-school instructor.' },
          { es: 'El navegador del coche.', ru: 'Навигатор машины.', en: 'The car’s satnav.' },
          { es: 'Exclusivamente el examinador.', ru: 'Только экзаменатор.', en: 'Only the examiner.' }
        ],
        answer: 2,
        explain: { ru: 'Инструкции даёт только экзаменатор; преподаватель отвечает за безопасность и не должен вмешиваться. RGCond, ст. 55.2–55.3.', en: 'Only the examiner gives instructions; the instructor is responsible for safety and must not intervene. RGCond arts. 55.2–55.3.' } },
      { es: 'El profesor frena con el doble mando para evitar un peligro. ¿Cuál es el resultado?',
        prompt: { ru: 'Преподаватель тормозит педалью двойного управления, чтобы избежать опасности. Каков итог?', en: 'The instructor brakes with the dual control to avoid danger. What is the result?' },
        options: [
          { es: 'Una falta leve.', ru: 'Одна лёгкая ошибка.', en: 'One minor fault.' },
          { es: 'Se interrumpe la prueba y el aspirante es no apto.', ru: 'Экзамен прерывают, кандидат не сдал.', en: 'The test is stopped and the candidate fails.' },
          { es: 'No se califica, porque el profesor debía intervenir.', ru: 'Не оценивается, ведь преподаватель обязан был вмешаться.', en: 'It is not marked, since the instructor had to intervene.' }
        ],
        answer: 1,
        explain: { ru: 'Любое вмешательство преподавателя, даже вынужденное, — прерывание и NO APTO. RGCond, ст. 55.3; Criterios, 15.1.6.', en: 'Any intervention by the instructor, even a necessary one, stops the test with NO APTO. RGCond art. 55.3; Criterios 15.1.6.' } },
      { es: '¿Qué tipo de falta es no respetar un semáforo en rojo?',
        prompt: { ru: 'Какая это ошибка — проехать на красный свет?', en: 'What kind of fault is running a red light?' },
        options: [
          { es: 'Eliminatoria.', ru: 'Eliminatoria (E).', en: 'Eliminatory (E).' },
          { es: 'Deficiente.', ru: 'Deficiente (D).', en: 'Deficient (D).' },
          { es: 'Leve.', ru: 'Leve (L).', en: 'Minor (L).' }
        ],
        answer: 0,
        explain: { ru: 'Красный — E, даже если вы ещё не въехали на перекрёсток, но уже перестали видеть сигнал. Criterios, 11.3.', en: 'A red light is an E, even if you have not entered the junction but can no longer see the signal. Criterios 11.3.' } },
      { es: 'Pasar un semáforo en amarillo fijo pudiendo detenerse con seguridad es una falta…',
        prompt: { ru: 'Проезд на постоянный жёлтый, когда можно было безопасно остановиться, — это ошибка…', en: 'Going through a steady amber when you could have stopped safely is a…' },
        options: [
          { es: 'Leve.', ru: 'Лёгкая (L).', en: 'Minor fault (L).' },
          { es: 'Deficiente.', ru: 'Deficiente (D).', en: 'Deficient fault (D).' },
          { es: 'Eliminatoria.', ru: 'Eliminatoria (E).', en: 'Eliminatory fault (E).' }
        ],
        answer: 1,
        explain: { ru: 'Жёлтый при возможности остановиться — D; красный — E. Criterios, 11.3.', en: 'Amber when you could stop is a D; red is an E. Criterios 11.3.' } },
      { es: 'No dejar pasar a un peatón que ya cruza por un paso de peatones es una falta…',
        prompt: { ru: 'Не пропустить пешехода, который уже идёт по зебре, — это ошибка…', en: 'Not letting a pedestrian already on a zebra crossing go first is a…' },
        options: [
          { es: 'Leve.', ru: 'Лёгкая (L).', en: 'Minor fault (L).' },
          { es: 'Deficiente.', ru: 'Deficiente (D).', en: 'Deficient fault (D).' },
          { es: 'Eliminatoria.', ru: 'Eliminatoria (E).', en: 'Eliminatory fault (E).' }
        ],
        answer: 2,
        explain: { ru: 'Если пешеходу пришлось остановиться, свернуть или изменить шаг — E. Если вы заставили ждать того, кто только собирался перейти, — D. Criterios, 11.5.2.', en: 'If the pedestrian had to stop, swerve or change pace it is an E. Making someone who was about to cross keep waiting is a D. Criterios 11.5.2.' } },
      { es: 'Un aspirante circula a 82 km/h en una vía limitada a 50 km/h. ¿Qué falta comete?',
        prompt: { ru: 'Кандидат едет 82 км/ч там, где ограничение 50 км/ч. Какая это ошибка?', en: 'A candidate drives at 82 km/h where the limit is 50 km/h. What fault is it?' },
        options: [
          { es: 'Deficiente.', ru: 'Deficiente (D).', en: 'Deficient (D).' },
          { es: 'Eliminatoria.', ru: 'Eliminatoria (E).', en: 'Eliminatory (E).' },
          { es: 'Leve.', ru: 'Лёгкая (L).', en: 'Minor (L).' }
        ],
        answer: 1,
        explain: { ru: 'Превышение на 32 км/ч — больше 30, значит E. 21–30 км/ч — D, 11–20 км/ч — L. Criterios, 4.5 и 11.4.', en: '32 km/h over is more than 30, so E. 21–30 km/h is a D, 11–20 km/h an L. Criterios 4.5 and 11.4.' } },
      { es: 'Exceder en 15 km/h la velocidad máxima de la señal es una falta…',
        prompt: { ru: 'Превышение ограничения знака на 15 км/ч — это ошибка…', en: 'Exceeding the posted limit by 15 km/h is a…' },
        options: [
          { es: 'Leve.', ru: 'Лёгкая (L).', en: 'Minor fault (L).' },
          { es: 'Deficiente.', ru: 'Deficiente (D).', en: 'Deficient fault (D).' },
          { es: 'Eliminatoria.', ru: 'Eliminatoria (E).', en: 'Eliminatory fault (E).' }
        ],
        answer: 0,
        explain: { ru: 'Больше 10 и до 20 км/ч сверх лимита — L. Criterios, 4.5 и 11.4.', en: 'More than 10 and up to 20 km/h over the limit is an L. Criterios 4.5 and 11.4.' } },
      { es: 'Exceder en 25 km/h la velocidad genérica de la vía es una falta…',
        prompt: { ru: 'Превышение общего ограничения дороги на 25 км/ч — это ошибка…', en: 'Exceeding the road’s general limit by 25 km/h is a…' },
        options: [
          { es: 'Eliminatoria.', ru: 'Eliminatoria (E).', en: 'Eliminatory fault (E).' },
          { es: 'Leve.', ru: 'Лёгкая (L).', en: 'Minor fault (L).' },
          { es: 'Deficiente.', ru: 'Deficiente (D).', en: 'Deficient fault (D).' }
        ],
        answer: 2,
        explain: { ru: 'Больше 20 и до 30 км/ч сверх — D. Criterios, 4.5.', en: 'More than 20 and up to 30 km/h over is a D. Criterios 4.5.' } },
      { es: 'Se le cala el motor por no seleccionar la marcha adecuada. ¿Cómo se califica?',
        prompt: { ru: 'Мотор заглох из‑за неправильной передачи. Как это оценивают?', en: 'The engine stalls because the wrong gear was chosen. How is it marked?' },
        options: [
          { es: 'Una falta leve por cada calado.', ru: 'По одной L за каждое заглохание.', en: 'One L for each stall.' },
          { es: 'Siempre como falta eliminatoria.', ru: 'Всегда как E.', en: 'Always as an E.' },
          { es: 'No se califica.', ru: 'Не оценивается.', en: 'It is not marked.' }
        ],
        answer: 0,
        explain: { ru: 'Каждое заглохание — отдельная L. Criterios, 13.1.5 и 13.2.', en: 'Each stall is a separate L. Criterios 13.1.5 and 13.2.' } },
      { es: 'Al arrancar en pendiente, el vehículo cae más de 50 cm hacia atrás. ¿Qué falta es?',
        prompt: { ru: 'При старте на подъёме машина откатилась назад больше чем на 50 см. Какая это ошибка?', en: 'Moving off uphill, the car rolls back more than 50 cm. What fault is it?' },
        options: [
          { es: 'Leve.', ru: 'Лёгкая (L).', en: 'Minor (L).' },
          { es: 'Deficiente.', ru: 'Deficiente (D).', en: 'Deficient (D).' },
          { es: 'No es falta.', ru: 'Не ошибка.', en: 'Not a fault.' }
        ],
        answer: 1,
        explain: { ru: 'Откат больше 50 см против нужного направления — D. Criterios, 13.2.2.', en: 'Rolling more than 50 cm against the intended direction is a D. Criterios 13.2.2.' } },
      { es: 'Inicia la marcha con el freno de estacionamiento puesto, pero no afecta a la marcha del vehículo. ¿Cómo se califica?',
        prompt: { ru: 'Вы тронулись с поднятым ручником, но на езду это не повлияло. Как это оценят?', en: 'You move off with the handbrake on, but it does not affect the car’s progress. How is it marked?' },
        options: [
          { es: 'Falta eliminatoria.', ru: 'E.', en: 'An E.' },
          { es: 'Falta deficiente.', ru: 'D.', en: 'A D.' },
          { es: 'Falta leve.', ru: 'L.', en: 'An L.' }
        ],
        answer: 2,
        explain: { ru: 'Не снять ручник без заметного влияния — L; если он ощутимо тормозит машину — D. Criterios, 13.1.6.', en: 'Handbrake on without a noticeable effect is an L; if it clearly slows the car it is a D. Criterios 13.1.6.' } },
      { es: 'Omitir el intermitente al cambiar de carril, sin obstaculizar a nadie, es una falta…',
        prompt: { ru: 'Не включить поворотник при смене полосы, никому не помешав, — это ошибка…', en: 'Not signalling when changing lanes, without obstructing anyone, is a…' },
        options: [
          { es: 'Leve.', ru: 'Лёгкая (L).', en: 'Minor fault (L).' },
          { es: 'Deficiente.', ru: 'Deficiente (D).', en: 'Deficient fault (D).' },
          { es: 'Eliminatoria.', ru: 'Eliminatoria (E).', en: 'Eliminatory fault (E).' }
        ],
        answer: 0,
        explain: { ru: 'Нет сигнала, сигнал не в ту сторону, слишком поздно или слишком рано, не выключен — всё это L. Criterios, 5.2.', en: 'No signal, the wrong side, too late or too early, not cancelled: all are Ls. Criterios 5.2.' } },
      { es: 'No regular correctamente los espejos retrovisores antes de iniciar la marcha es una falta…',
        prompt: { ru: 'Не настроить зеркала перед началом движения — это ошибка…', en: 'Not adjusting the mirrors properly before moving off is a…' },
        options: [
          { es: 'Deficiente.', ru: 'Deficiente (D).', en: 'Deficient fault (D).' },
          { es: 'Leve.', ru: 'Лёгкая (L).', en: 'Minor fault (L).' },
          { es: 'Eliminatoria.', ru: 'Eliminatoria (E).', en: 'Eliminatory fault (E).' }
        ],
        answer: 1,
        explain: { ru: 'Сиденье, зеркала и ремень — пункт 2 «Instalación en el vehículo», ошибки там L. Criterios, 2.2.', en: 'Seat, mirrors and belt are item 2, «Instalación en el vehículo», and faults there are Ls. Criterios 2.2.' } },
      { es: 'En un STOP con línea de detención, el aspirante no para en la línea, pero sí donde tiene visibilidad. ¿Qué falta comete?',
        prompt: { ru: 'На STOP со стоп-линией кандидат не остановился у линии, но остановился там, где видно перекрёсток. Какая ошибка?', en: 'At a STOP with a stop line, the candidate does not stop at the line but does stop where the junction is visible. What fault?' },
        options: [
          { es: 'Eliminatoria.', ru: 'E.', en: 'An E.' },
          { es: 'Ninguna.', ru: 'Никакой.', en: 'None.' },
          { es: 'Leve.', ru: 'L.', en: 'An L.' }
        ],
        answer: 2,
        explain: { ru: 'Пропущена первая остановка у линии — L (11.5.2); если бы не было и второй, там, где видно, — E (11.4). Criterios, 11.4.', en: 'Skipping the first stop at the line is an L (11.5.2); missing the second, visible stop would be an E (11.4). Criterios 11.4.' }, img: 'img/dgt/practico-stop.svg' },
      { es: 'En un cambio de sentido, el aspirante realiza dos movimientos hacia atrás más de los necesarios. ¿Cómo se califica?',
        prompt: { ru: 'При развороте кандидат сделал на два движения назад больше, чем нужно. Как это оценят?', en: 'Turning round, the candidate makes two more reversing moves than needed. How is it marked?' },
        options: [
          { es: 'Falta deficiente.', ru: 'D.', en: 'A D.' },
          { es: 'Falta leve.', ru: 'L.', en: 'An L.' },
          { es: 'Falta eliminatoria.', ru: 'E.', en: 'An E.' }
        ],
        answer: 0,
        explain: { ru: 'Лишние движения назад: одно — L, два — D, три и больше — E. Criterios, 8.4.', en: 'Extra reversing moves: one is an L, two a D, three or more an E. Criterios 8.4.' } },
      { es: 'Al estacionar en línea, el coche sobresale más de la mitad respecto a los vehículos bien estacionados. ¿Qué falta es?',
        prompt: { ru: 'После параллельной парковки машина выступает из ряда больше чем наполовину. Какая ошибка?', en: 'After parallel parking, the car sticks out of the line by more than half. What fault?' },
        options: [
          { es: 'Leve.', ru: 'L.', en: 'An L.' },
          { es: 'Eliminatoria.', ru: 'E.', en: 'An E.' },
          { es: 'Deficiente.', ru: 'D.', en: 'A D.' }
        ],
        answer: 1,
        explain: { ru: 'Больше половины — E, меньше половины — D. Criterios, 9.4.', en: 'More than half is an E, less than half a D. Criterios 9.4.' } },
      { es: '¿Cuál es el tiempo máximo para realizar el estacionamiento?',
        prompt: { ru: 'Сколько максимум времени даётся на парковку?', en: 'What is the maximum time allowed for parking?' },
        options: [
          { es: '5 minutos.', ru: '5 минут.', en: '5 minutes.' },
          { es: '30 segundos.', ru: '30 секунд.', en: '30 seconds.' },
          { es: '2 minutos.', ru: '2 минуты.', en: '2 minutes.' }
        ],
        answer: 2,
        explain: { ru: 'Парковка — не дольше 2 минут. Criterios, 9.4.', en: 'Parking must take no more than 2 minutes. Criterios 9.4.' } },
      { es: 'Durante el estacionamiento, ¿se califica mirar la pantalla de la cámara de marcha atrás?',
        prompt: { ru: 'Считается ли ошибкой смотреть на экран камеры заднего хода при парковке?', en: 'Is looking at the reversing camera screen while parking marked as a fault?' },
        options: [
          { es: 'No, no se califica.', ru: 'Нет, не оценивается.', en: 'No, it is not marked.' },
          { es: 'Sí, es falta leve.', ru: 'Да, это L.', en: 'Yes, it is an L.' },
          { es: 'Sí, es falta eliminatoria.', ru: 'Да, это E.', en: 'Yes, it is an E.' }
        ],
        answer: 0,
        explain: { ru: 'Камера и датчики разрешены; запрещена только полностью автоматическая парковка. Criterios, 9.4 (примечание).', en: 'Camera and sensors are allowed; only fully automatic parking is not. Criterios 9.4 (note).' } },
      { es: 'Subir con una rueda delantera al bordillo circulando con un turismo es una falta…',
        prompt: { ru: 'Заехать передним колесом легкового авто на бордюр — это ошибка…', en: 'Mounting the kerb with a front wheel of a car is a…' },
        options: [
          { es: 'Leve.', ru: 'Лёгкая (L).', en: 'Minor fault (L).' },
          { es: 'Eliminatoria.', ru: 'Eliminatoria (E).', en: 'Eliminatory fault (E).' },
          { es: 'No es falta si el bordillo es alto.', ru: 'Не ошибка, если бордюр высокий.', en: 'Not a fault if the kerb is high.' }
        ],
        answer: 1,
        explain: { ru: 'Заезд на бордюр — E; задним колесом у легковой машины — L. Удар без заезда — L. Не оценивают низкие бордюры при манёврах. Criterios, 15.2.', en: 'Mounting the kerb is an E; with a rear wheel of a car it is an L. Touching it without mounting is an L. Low kerbs during manoeuvres are not marked. Criterios 15.2.' } },
      { es: 'Circular habitualmente a velocidad anormalmente reducida sin causa, obstaculizando a otros, es una falta…',
        prompt: { ru: 'Ехать без причины слишком медленно, мешая другим, — это ошибка…', en: 'Driving abnormally slowly for no reason and holding others up is a…' },
        options: [
          { es: 'Deficiente.', ru: 'Deficiente (D).', en: 'Deficient fault (D).' },
          { es: 'Leve.', ru: 'Лёгкая (L).', en: 'Minor fault (L).' },
          { es: 'No es falta: la prudencia nunca se penaliza.', ru: 'Не ошибка: осторожность не наказывается.', en: 'Not a fault: caution is never penalised.' }
        ],
        answer: 0,
        explain: { ru: 'С помехой — D, без помехи — L. Если после просьбы экзаменатора вы так и не подстроились под поток — E. Criterios, 4.4.', en: 'Obstructing is a D, otherwise an L. Not keeping up even after the examiner asked is an E. Criterios 4.4.' } },
      { es: 'Un vehículo de urgencia se acerca con las señales luminosas y acústicas. No le facilita el paso. ¿Qué falta comete?',
        prompt: { ru: 'Сзади едет спецмашина с мигалкой и сиреной, а вы не освобождаете ей дорогу. Какая ошибка?', en: 'An emergency vehicle approaches with lights and siren and you do not make way. What fault?' },
        options: [
          { es: 'Leve.', ru: 'L.', en: 'An L.' },
          { es: 'Ninguna.', ru: 'Никакой.', en: 'None.' },
          { es: 'Deficiente.', ru: 'D.', en: 'A D.' }
        ],
        answer: 2,
        explain: { ru: 'Не принять мер, чтобы пропустить машину в экстренном режиме, — D. Criterios, 4.6.', en: 'Not taking steps to let a vehicle on an emergency run through is a D. Criterios 4.6.' } },
      { es: 'No utilizar el cinturón de seguridad durante la prueba es una falta…',
        prompt: { ru: 'Не пристегнуть ремень на экзамене — это ошибка…', en: 'Not wearing the seat belt during the test is a…' },
        options: [
          { es: 'Leve; después se le indicará que se lo ajuste.', ru: 'L; потом попросят пристегнуться.', en: 'An L; you are then told to put it on.' },
          { es: 'Deficiente.', ru: 'D.', en: 'A D.' },
          { es: 'Eliminatoria inmediata.', ru: 'Сразу E.', en: 'An immediate E.' }
        ],
        answer: 0,
        explain: { ru: 'По критериям это L, после чего вам скажут пристегнуться. Criterios, 2.3.', en: 'Under the criteria it is an L, and you are then told to fasten it. Criterios 2.3.' } },
      { es: '¿Cuándo es eliminatorio no seguir las indicaciones del examinador?',
        prompt: { ru: 'Когда невыполнение указаний экзаменатора становится E?', en: 'When does not following the examiner’s instructions become an E?' },
        options: [
          { es: 'La primera vez que se equivoca de calle.', ru: 'При первой же ошибке с улицей.', en: 'The first time you take the wrong street.' },
          { es: 'Cuando ocurre reiteradamente, al menos tres veces, tras ser advertido cada vez.', ru: 'Когда это повторяется — минимум трижды, и каждый раз вас предупреждали.', en: 'When it happens repeatedly, at least three times, after a warning each time.' },
          { es: 'Nunca.', ru: 'Никогда.', en: 'Never.' }
        ],
        answer: 1,
        explain: { ru: '«Reiteradamente» значит не меньше трёх раз с предупреждением каждый раз. Criterios, 15.3.', en: '«Reiteradamente» means at least three times, with a warning each time. Criterios 15.3.' } },
      { es: 'El examinador dice: «En la glorieta, tome la tercera salida». ¿Qué debe hacer?',
        prompt: { ru: 'Экзаменатор говорит: «En la glorieta, tome la tercera salida». Что нужно сделать?', en: 'The examiner says: «En la glorieta, tome la tercera salida». What should you do?' },
        options: [
          { es: 'Dar tres vueltas a la glorieta.', ru: 'Сделать три круга.', en: 'Go round the roundabout three times.' },
          { es: 'Salir de la glorieta por la tercera salida.', ru: 'Съехать с круга на третьем съезде.', en: 'Leave the roundabout at the third exit.' },
          { es: 'Pararse en la tercera señal.', ru: 'Остановиться у третьего знака.', en: 'Stop at the third sign.' }
        ],
        answer: 1,
        explain: { ru: '<i>Tome la tercera salida</i> — «возьмите третий съезд». Съезды считают с того, по которому вы въехали.', en: '<i>Tome la tercera salida</i> means «take the third exit». Exits are counted from the one you entered by.' } },
      { es: 'El examinador dice: «Detenga el vehículo donde pueda». ¿Qué significa?',
        prompt: { ru: 'Экзаменатор говорит: «Detenga el vehículo donde pueda». Что это значит?', en: 'The examiner says: «Detenga el vehículo donde pueda». What does it mean?' },
        options: [
          { es: 'Que pare de inmediato en medio del carril.', ru: 'Остановиться сразу посреди полосы.', en: 'Stop at once in the middle of the lane.' },
          { es: 'Que pare en el primer lugar permitido y seguro.', ru: 'Остановиться в первом разрешённом и безопасном месте.', en: 'Stop at the first permitted and safe place.' },
          { es: 'Que reduzca la velocidad a 30 km/h.', ru: 'Снизить скорость до 30 км/ч.', en: 'Slow down to 30 km/h.' }
        ],
        answer: 1,
        explain: { ru: '<i>Donde pueda</i> — «где сможете», то есть где остановка разрешена и безопасна. Остановка в запрещённом месте — D или L. Criterios, 9.3.', en: '<i>Donde pueda</i> means «where you can», i.e. where stopping is allowed and safe. Stopping in a prohibited place is a D or L. Criterios 9.3.' } },
      { es: '¿Qué significa «Pare en el arcén»?',
        prompt: { ru: 'Что значит «Pare en el arcén»?', en: 'What does «Pare en el arcén» mean?' },
        options: [
          { es: 'Pare en la acera.', ru: 'Остановитесь на тротуаре.', en: 'Stop on the pavement.' },
          { es: 'Pare en el cruce.', ru: 'Остановитесь на перекрёстке.', en: 'Stop at the junction.' },
          { es: 'Pare en la franja lateral de la carretera, fuera de la calzada.', ru: 'Остановитесь на обочине, вне проезжей части.', en: 'Stop on the hard shoulder, off the carriageway.' }
        ],
        answer: 2,
        explain: { ru: '<i>Arcén</i> — обочина загородной дороги; <i>acera</i> — тротуар в городе.', en: '<i>Arcén</i> is the hard shoulder of an interurban road; <i>acera</i> is the pavement in town.' } },
      { es: '¿Durante cuánto tiempo es válido el apto en la prueba teórica?',
        prompt: { ru: 'Сколько действует сданный теоретический экзамен?', en: 'How long is a pass in the theory test valid?' },
        options: [
          { es: 'Seis meses.', ru: 'Шесть месяцев.', en: 'Six months.' },
          { es: 'Dos años.', ru: 'Два года.', en: 'Two years.' },
          { es: 'Un año.', ru: 'Один год.', en: 'One year.' }
        ],
        answer: 1,
        explain: { ru: 'Сданная часть действует два года со следующего дня. Шесть месяцев — максимум между двумя попытками по одному заявлению. RGCond, ст. 53.1 и 51.2.', en: 'A passed test is valid for two years from the next day. Six months is the maximum gap between the two sittings of one application. RGCond arts. 53.1 and 51.2.' } },
      { es: 'Si la prueba no se inicia porque el vehículo de la autoescuela no reúne los requisitos, ¿qué ocurre con la convocatoria?',
        prompt: { ru: 'Экзамен не начали, потому что машина автошколы не отвечает требованиям. Что с попыткой?', en: 'The test does not start because the school car does not meet the requirements. What happens to the sitting?' },
        options: [
          { es: 'El aspirante no pierde la convocatoria.', ru: 'Попытка не сгорает.', en: 'The candidate keeps the sitting.' },
          { es: 'Se pierde la convocatoria.', ru: 'Попытка сгорает.', en: 'The sitting is lost.' },
          { es: 'Se califica como no apto.', ru: 'Ставят NO APTO.', en: 'It is marked NO APTO.' }
        ],
        answer: 0,
        explain: { ru: 'Если экзамен не начат или прерван из‑за машины, документов или условий, попытка не теряется. RGCond, ст. 57.2 и 62.', en: 'If the test is not started or is stopped because of the car, documents or conditions, the sitting is not lost. RGCond arts. 57.2 and 62.' } },
      { es: 'No encender el alumbrado de cruce cuando es obligatorio, y no hacerlo tras indicárselo el examinador, se califica…',
        prompt: { ru: 'Не включить ближний свет, когда он обязателен, и не включить даже после подсказки экзаменатора — это…', en: 'Not switching on dipped headlights when required, and still not doing so after the examiner says so, is marked…' },
        options: [
          { es: 'Con una sola falta leve.', ru: 'Одна L.', en: 'A single L.' },
          { es: 'Con falta leve y después eliminatoria.', ru: 'Сначала L, затем E.', en: 'First an L, then an E.' },
          { es: 'Con dos faltas deficientes.', ru: 'Две D.', en: 'Two Ds.' }
        ],
        answer: 1,
        explain: { ru: 'Сначала L; после подсказки не включили — E по пункту 12.1. Criterios, 12.3.', en: 'First an L; not switching them on after being told is an E under item 12.1. Criterios 12.3.' } }
    ]
  }
]);
