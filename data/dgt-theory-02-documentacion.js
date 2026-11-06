// DGT · theory, topic 02: documents, licence classes, points and fines. Sources: DGT «Teórica abreviada, lectura fácil» (2025),
// DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-documentacion', level: 'DGT',
    title: { ru: 'Документы, права и баллы', en: 'Documents, licence and points' },
    summary: { ru: 'Категории прав, срок действия, баллы, документы на машину и штрафы.', en: 'Licence classes, validity, points, vehicle documents and fines.' },
    hero: { es: 'Documentación', sub: { ru: 'Права, баллы, документы на машину и штрафы', en: 'Licence, points, vehicle papers and fines' } },
    tabs: [
      { id: 'licence', label: { ru: 'Права', en: 'Licence' }, blocks: [
        { type: 'text', body: {
          ru: ['Чтобы водить, нужны <b>четыре документа</b>: права (<i>permiso de conducción</i>), регистрационное свидетельство машины (<i>permiso de circulación</i>), карточка техосмотра (<i>tarjeta ITV</i>) и подтверждение обязательной страховки (<i>seguro obligatorio</i>). Возить нужно оригиналы или копии, заверенные официальным органом (<i>fotocopia compulsada</i>).'],
          en: ['To drive you need <b>four documents</b>: the driving licence (<i>permiso de conducción</i>), the vehicle registration certificate (<i>permiso de circulación</i>), the inspection card (<i>tarjeta ITV</i>) and proof of compulsory insurance (<i>seguro obligatorio</i>). Carry the originals or copies certified by an official body (<i>fotocopia compulsada</i>).'] } },
        { type: 'table', heading: { ru: 'Категории прав (RGCond, ст. 4)', en: 'Licence classes (RGCond art. 4)' },
          head: [{ ru: 'Класс', en: 'Class' }, { ru: 'Что можно водить', en: 'What you may drive' }, { ru: 'Возраст', en: 'Age' }],
          rows: [
            ['AM', { ru: 'мопеды, лёгкие квадрициклы', en: 'mopeds, light quadricycles' }, '15'],
            ['A1', { ru: 'мото до 125 см³ и 11 кВт', en: 'motorbikes ≤125 cc, 11 kW' }, '16'],
            ['A2', { ru: 'мото до 35 кВт', en: 'motorbikes ≤35 kW' }, '18'],
            ['A', { ru: 'любые мотоциклы', en: 'any motorbike' }, '20'],
            ['B', { ru: 'авто до 3500 кг, 9 мест', en: 'cars ≤3,500 kg, 9 seats' }, '18'],
            ['B+E', { ru: 'B + прицеп до 3500 кг', en: 'B + trailer ≤3,500 kg' }, '18']
          ] },
        { type: 'rules', heading: { ru: 'Что даёт категория B', en: 'What class B allows' }, items: [
          { color: 'blue', label: { ru: 'Масса', en: 'Mass' }, title: { ru: 'До 3500 кг', en: 'Up to 3,500 kg' }, es: 'MMA ≤ 3.500 kg',
            body: { ru: 'Автомобиль с <b>разрешённой максимальной массой</b> (MMA) не больше 3500 кг.', en: 'A vehicle whose <b>maximum authorised mass</b> (MMA) is no more than 3,500 kg.' } },
          { color: 'blue', label: { ru: 'Места', en: 'Seats' }, title: { ru: '8 пассажиров + водитель', en: '8 passengers + driver' }, es: '9 plazas',
            body: { ru: 'Не больше <b>9 мест</b> вместе с водителем.', en: 'No more than <b>9 seats</b> including the driver.' } },
          { color: 'teal', label: { ru: 'Прицеп', en: 'Trailer' }, title: { ru: 'Лёгкий прицеп', en: 'Light trailer' }, es: 'remolque ≤ 750 kg',
            body: { ru: 'Прицеп до <b>750 кг</b> — всегда. Тяжелее — только если сцепка в сумме не больше 3500 кг (до 4250 кг — после дополнительного экзамена или курса).', en: 'A trailer up to <b>750 kg</b> — always. Heavier — only if the whole combination is ≤ 3,500 kg (up to 4,250 kg after an extra test or course).' } },
          { color: 'teal', label: { ru: 'Ещё', en: 'Also' }, title: { ru: 'Мопеды и трициклы', en: 'Mopeds and tricycles' },
            body: { ru: 'Мопеды, моторные трициклы и квадрициклы. С правами B старше <b>3 лет</b> — мотоциклы класса A1, но только в Испании.', en: 'Mopeds, motor tricycles and quadricycles. With a B licence older than <b>3 years</b> — A1 motorbikes, but only in Spain.' } }
        ] },
        { type: 'rules', heading: { ru: 'Срок и новички', en: 'Validity and new drivers' }, items: [
          { color: 'amber', label: { ru: 'Срок', en: 'Validity' }, title: { ru: '10 лет / 5 лет', en: '10 years / 5 years' }, es: 'vigencia',
            body: { ru: 'Права B действуют <b>10 лет</b>, а с <b>65 лет</b> — 5 лет. Продлевают <b>до</b> окончания срока, после медкомиссии. Просроченные права не дают права водить.', en: 'A B licence is valid for <b>10 years</b>, and from <b>65</b> for 5 years. Renew it <b>before</b> it expires, after a medical check. An expired licence does not allow you to drive.' } },
          { color: 'coral', label: { ru: 'Новичок', en: 'New driver' }, title: { ru: 'Conductor novel', en: 'Conductor novel' }, es: 'placa L (V-13)',
            body: { ru: 'Первый <b>год</b> — зелёная табличка с белой «L» на заднем стекле. Первые <b>2 года</b> — пониженный лимит алкоголя (0,3 г/л крови). Начальный счёт — <b>8 баллов</b>.', en: 'For the first <b>year</b> — a green plate with a white “L” on the rear window. For the first <b>2 years</b> — a lower alcohol limit (0.3 g/l blood). Starting balance — <b>8 points</b>.' } }
        ] },
        { type: 'examples', items: [
          { es: 'Para conducir un turismo necesitas el <b>permiso de la clase B</b>.', ru: 'Чтобы водить легковой автомобиль, нужны права категории B.', en: 'To drive a car you need a class B licence.' },
          { es: 'El permiso B tiene una <b>vigencia</b> de diez años.', ru: 'Права B действуют десять лет.', en: 'A B licence is valid for ten years.' },
          { es: 'Debes pedir la <b>prórroga</b> antes de que caduque el permiso.', ru: 'Продление нужно запросить до того, как права истекут.', en: 'You must apply for renewal before the licence expires.' },
          { es: 'Durante el primer año llevo la <b>placa L</b> en el cristal trasero.', ru: 'Первый год я вожу с табличкой «L» на заднем стекле.', en: 'During the first year I have the L plate on the rear window.' }
        ] }
      ] },
      { id: 'points', label: { ru: 'Баллы', en: 'Points' }, blocks: [
        { type: 'figure', src: 'img/dgt/documentacion-puntos.svg',
          alt: { ru: 'Шкала баллов от 0 до 15: 8 у новичка, 12 после двух лет без нарушений, 15 максимум с бонусами, 0 — права теряют силу.', en: 'Points scale from 0 to 15: 8 for a new driver, 12 after two years without offences, 15 maximum with bonuses, 0 — the licence loses validity.' },
          caption: { ru: 'Баллы бывают у всех прав сразу: счёт один на все категории (LSV, ст. 63).', en: 'There is one points balance for all your licence classes (LSV art. 63).' } },
        { type: 'rules', heading: { ru: 'Как работают баллы', en: 'How points work' }, items: [
          { color: 'blue', label: { ru: 'Старт', en: 'Start' }, title: { ru: '12 баллов', en: '12 points' }, es: 'crédito inicial',
            body: { ru: 'Обычный водитель имеет <b>12</b> баллов. Новичок и тот, кто получил права заново, — <b>8</b>; через <b>2 года</b> без санкций — 12.', en: 'A normal driver has <b>12</b> points. A new driver, or someone who got the licence again, has <b>8</b>; after <b>2 years</b> without sanctions — 12.' } },
          { color: 'blue', label: { ru: 'Бонус', en: 'Bonus' }, title: { ru: 'До 15 баллов', en: 'Up to 15 points' }, es: 'bonificación',
            body: { ru: 'Без нарушений: +2 за первые 3 года и +1 за следующие 3. Курс безопасного вождения — ещё +2. Максимум — <b>15</b>.', en: 'No offences: +2 after the first 3 years and +1 after the next 3. A safe-driving course gives +2 more. Maximum — <b>15</b>.' } },
          { color: 'coral', label: { ru: 'Потеря', en: 'Loss' }, title: { ru: 'Только серьёзные', en: 'Only serious offences' }, es: 'pérdida de puntos',
            body: { ru: 'Баллы снимают за некоторые <b>graves</b> и <b>muy graves</b> нарушения. За один день — не больше <b>8</b> баллов (кроме алкоголя, наркотиков, отказа от теста, езды навстречу и т. п.).', en: 'Points are taken for some <b>graves</b> and <b>muy graves</b> offences. In one day — no more than <b>8</b> points (except alcohol, drugs, refusing the test, wrong-way driving, etc.).' } },
          { color: 'teal', label: { ru: 'Возврат', en: 'Recovery' }, title: { ru: '2 года или курс', en: '2 years or a course' }, es: 'recuperación',
            body: { ru: '<b>2 года</b> без санкций — снова 12 баллов. Или курс <i>sensibilización y reeducación vial</i> (12 ч; по закону не больше 15 ч) — до <b>+6</b> баллов, раз в 2 года (профессионалам — раз в год).', en: '<b>2 years</b> without sanctions — back to 12 points. Or a <i>sensibilización y reeducación vial</i> course (12 h; by law at most 15 h) — up to <b>+6</b> points, once every 2 years (professionals — once a year).' } }
        ] },
        { type: 'text', color: 'coral', body: {
          ru: '<b>0 баллов</b> — права теряют силу (<i>pérdida de vigencia</i>). Новые можно получить не раньше чем через <b>6 месяцев</b> (профессионалы — 3), после курса (24 ч; по закону не больше 30 ч) и теоретического экзамена (LSV, ст. 71 и прил. III).',
          en: '<b>0 points</b> — the licence loses its validity (<i>pérdida de vigencia</i>). A new one can be obtained after <b>6 months</b> at the earliest (professionals — 3), after a course (24 h; by law at most 30 h) and the theory exam (LSV art. 71 and Annex III).' } },
        { type: 'table', heading: { ru: 'Сколько баллов снимают (LSV, прил. II)', en: 'Points lost (LSV Annex II)' },
          head: [{ ru: 'Нарушение', en: 'Offence' }, { ru: 'Баллы', en: 'Points' }],
          rows: [
            [{ ru: 'Алкоголь > 0,50 мг/л', en: 'Alcohol > 0.50 mg/l' }, '6'],
            [{ ru: 'Алкоголь 0,25–0,50 мг/л', en: 'Alcohol 0.25–0.50 mg/l' }, '4'],
            [{ ru: 'Наркотики в организме', en: 'Drugs in the body' }, '6'],
            [{ ru: 'Отказ от теста', en: 'Refusing the test' }, '6'],
            [{ ru: 'Езда навстречу, гонки', en: 'Wrong way, street racing' }, '6'],
            [{ ru: 'Антирадар (глушилка)', en: 'Radar jammer' }, '6'],
            [{ ru: 'Телефон в руке', en: 'Phone held in hand' }, '6'],
            [{ ru: 'Выброс горящих предметов', en: 'Throwing burning objects' }, '6'],
            [{ ru: 'Обгон велосипеда < 1,5 м', en: 'Passing a cyclist < 1.5 m' }, '6'],
            [{ ru: 'Стоп, «Уступи», красный', en: 'Stop, give way, red light' }, '4'],
            [{ ru: 'Опасный обгон', en: 'Dangerous overtaking' }, '4'],
            [{ ru: 'Знаки и приказы агентов', en: 'Signs and police orders' }, '4'],
            [{ ru: 'Дистанция', en: 'Safety distance' }, '4'],
            [{ ru: 'Ремень, детское кресло, шлем', en: 'Belt, child seat, helmet' }, '4'],
            [{ ru: 'Права не той категории', en: 'Wrong licence class' }, '4'],
            [{ ru: 'Езда при лишении прав', en: 'Driving while suspended' }, '4'],
            [{ ru: 'Задний ход на автостраде', en: 'Reversing on a motorway' }, '4'],
            [{ ru: 'Неправильный разворот', en: 'Illegal U-turn' }, '3'],
            [{ ru: 'Наушники, навигатор в руке', en: 'Headphones, hand-held GPS' }, '3'],
            [{ ru: 'Радар-детектор', en: 'Radar detector' }, '3']
          ] },
        { type: 'examples', items: [
          { es: 'Al sacar el permiso te dan <b>ocho puntos</b>.', ru: 'Когда получаешь права, тебе дают восемь баллов.', en: 'When you get your licence you are given eight points.' },
          { es: 'Por usar el móvil con la mano <b>pierdes seis puntos</b>.', ru: 'За телефон в руке ты теряешь шесть баллов.', en: 'For using your phone in your hand you lose six points.' },
          { es: 'Hizo un <b>curso de reeducación vial</b> y recuperó seis puntos.', ru: 'Он прошёл курс перевоспитания водителей и вернул шесть баллов.', en: 'He did a road re-education course and got six points back.' },
          { es: 'Si pierdes todos los puntos, el permiso <b>pierde su vigencia</b>.', ru: 'Если потеряешь все баллы, права теряют силу.', en: 'If you lose all your points, the licence loses its validity.' }
        ] }
      ] },
      { id: 'vehicle', label: { ru: 'Документы', en: 'Documents' }, blocks: [
        { type: 'rules', items: [
          { color: 'blue', label: { ru: 'Машина', en: 'Vehicle' }, title: { ru: 'Permiso de circulación', en: 'Permiso de circulación' }, es: 'matrícula y titular',
            body: { ru: 'Подтверждает, что машина зарегистрирована и может ездить: владелец, номер, дата регистрации, места, масса. Нужен всем моторным ТС, мопедам и прицепам <b>тяжелее 750 кг</b>. Смена адреса — сообщить в DGT за <b>15 дней</b>, продажа — за <b>10 дней</b>.', en: 'Shows that the vehicle is registered and may be driven: owner, plate, registration date, seats, mass. Required for all motor vehicles, mopeds and trailers <b>over 750 kg</b>. Change of address — tell the DGT within <b>15 days</b>, a sale — within <b>10 days</b>.' } },
          { color: 'teal', label: { ru: 'Техосмотр', en: 'Inspection' }, title: { ru: 'Tarjeta ITV', en: 'Tarjeta ITV' }, es: 'inspección técnica',
            body: { ru: 'Технические данные и отметки о пройденных осмотрах. После ИТВ дают <b>наклейку</b> — на лобовое стекло справа. Серьёзный дефект — дальше ехать нельзя, только в мастерскую и на повторный осмотр.', en: 'Technical data and a record of inspections. After the ITV you get a <b>sticker</b> for the right side of the windscreen. A serious defect — you may not drive on, only to a workshop and back for a re-test.' } },
          { color: 'amber', label: { ru: 'Страховка', en: 'Insurance' }, title: { ru: 'Seguro obligatorio', en: 'Seguro obligatorio' }, es: 'responsabilidad civil',
            body: { ru: 'Покрывает вред <b>другим</b> людям и чужому имуществу. <b>Не</b> покрывает травмы самого водителя, вещи в его машине, имущество его семьи и угнанную машину. О ДТП сообщить страховщику за <b>7 дней</b>. Без страховки машину <b>задерживают</b> и штрафуют владельца.', en: 'Covers damage to <b>other</b> people and their property. It does <b>not</b> cover the driver’s own injuries, things in his car, his family’s property or a stolen car. Report an accident to the insurer within <b>7 days</b>. Without insurance the vehicle is <b>impounded</b> and the owner is fined.' } }
        ] },
        { type: 'table', heading: { ru: 'Когда проходить ИТВ', en: 'When to pass the ITV' },
          head: [{ ru: 'Транспорт', en: 'Vehicle' }, { ru: 'Первая', en: 'First' }, { ru: 'Потом', en: 'Then' }],
          rows: [
            [{ ru: 'Легковой (до 9 мест)', en: 'Car (up to 9 seats)' }, { ru: 'в 4 года', en: 'at 4 years' }, { ru: '2 года; после 10 — каждый год', en: 'every 2 y; after 10 — yearly' }],
            [{ ru: 'Мопед двухколёсный', en: 'Two-wheel moped' }, { ru: 'в 3 года', en: 'at 3 years' }, { ru: 'каждые 2 года', en: 'every 2 years' }],
            [{ ru: 'Мотоцикл', en: 'Motorbike' }, { ru: 'в 4 года', en: 'at 4 years' }, { ru: 'каждые 2 года', en: 'every 2 years' }],
            [{ ru: 'Фургон до 3,5 т', en: 'Van up to 3.5 t' }, { ru: 'в 2 года', en: 'at 2 years' }, { ru: '2 г.; с 6 — год; с 10 — 6 мес.', en: '2 y; from 6 — 1 y; 10 — 6 m' }],
            [{ ru: 'Буксируемый караван', en: 'Towed caravan' }, { ru: 'в 6 лет', en: 'at 6 years' }, { ru: 'каждые 2 года', en: 'every 2 years' }]
          ] },
        { type: 'text', color: 'teal', body: {
          ru: '<b>Distintivo ambiental</b> — экологическая наклейка DGT: <b>0</b> (синяя, электромобили), <b>ECO</b> (гибриды, газ), <b>C</b> (зелёная), <b>B</b> (жёлтая). У самых старых машин наклейки нет. По ней действуют ограничения в зонах с низким уровнем выбросов (ZBE) и при эпизодах загрязнения; нарушение — <i>grave</i> (LSV, ст. 76 z3).',
          en: 'The <b>distintivo ambiental</b> is the DGT environmental sticker: <b>0</b> (blue, electric), <b>ECO</b> (hybrids, gas), <b>C</b> (green), <b>B</b> (yellow). The oldest cars get none. Restrictions in low-emission zones (ZBE) and during pollution episodes depend on it; breaking them is <i>grave</i> (LSV art. 76 z3).' } },
        { type: 'signs', heading: { ru: 'Знак', en: 'Sign' }, items: [
          { code: 'R-120', note: { ru: 'Въезд запрещён в зависимости от экологической наклейки; условия — на табличке под знаком.', en: 'No entry depending on the environmental sticker; the conditions are on the panel below.' } }
        ] },
        { type: 'examples', items: [
          { es: 'Lleva siempre el <b>permiso de circulación</b> en el coche.', ru: 'Всегда вози свидетельство о регистрации в машине.', en: 'Always keep the registration certificate in the car.' },
          { es: 'La <b>pegatina de la ITV</b> va en el lado derecho del parabrisas.', ru: 'Наклейка ИТВ клеится на правую сторону лобового стекла.', en: 'The ITV sticker goes on the right side of the windscreen.' },
          { es: 'El <b>seguro obligatorio</b> no cubre las lesiones del conductor.', ru: 'Обязательная страховка не покрывает травмы водителя.', en: 'Compulsory insurance does not cover the driver’s injuries.' },
          { es: 'Mi coche híbrido tiene la etiqueta <b>ECO</b>.', ru: 'У моей гибридной машины наклейка ECO.', en: 'My hybrid car has the ECO label.' }
        ] }
      ] },
      { id: 'fines', label: { ru: 'Штрафы', en: 'Fines' }, blocks: [
        { type: 'rules', heading: { ru: 'Три вида нарушений (LSV, ст. 74–80)', en: 'Three kinds of offence (LSV arts. 74–80)' }, items: [
          { color: 'teal', label: { ru: 'Лёгкие', en: 'Minor' }, title: { ru: 'Leves', en: 'Leves' }, es: 'hasta 100 €',
            body: { ru: 'Всё, что закон не назвал серьёзным: например, велосипед без света. Баллы не снимают.', en: 'Anything the law does not call serious: for example, a bicycle without lights. No points lost.' } },
          { color: 'amber', label: { ru: 'Серьёзные', en: 'Serious' }, title: { ru: 'Graves', en: 'Graves' }, es: '200 €',
            body: { ru: 'Телефон, ремень, дистанция, красный свет, стоп, опасная стоянка, превышение скорости и др. Часто — минус баллы.', en: 'Phone, seat belt, distance, red light, stop sign, dangerous parking, speeding, etc. Often — points lost.' } },
          { color: 'coral', label: { ru: 'Очень серьёзные', en: 'Very serious' }, title: { ru: 'Muy graves', en: 'Muy graves' }, es: '500 €',
            body: { ru: 'Алкоголь, наркотики, отказ от теста, езда навстречу, лихачество, езда без прав. Алкоголь вдвое выше нормы или повторно за год, наркотики, отказ от теста — <b>1000 €</b>.', en: 'Alcohol, drugs, refusing the test, wrong-way driving, reckless driving, driving without a licence. Alcohol over double the limit or repeated within a year, drugs, refusing the test — <b>€1,000</b>.' } }
        ] },
        { type: 'text', color: 'blue', body: {
          ru: '<b>Скидка 50 %</b>: если заплатить штраф на месте или в течение <b>20 календарных дней</b> после уведомления. Взамен вы отказываетесь от возражений, и дело закрывается (LSV, ст. 94). Баллы при этом всё равно снимают.',
          en: '<b>50 % discount</b>: if you pay on the spot or within <b>20 calendar days</b> of notification. In exchange you give up your objections and the case is closed (LSV art. 94). Points are still deducted.' } },
        { type: 'table', heading: { ru: 'Превышение скорости (LSV, прил. IV)', en: 'Speeding (LSV Annex IV)' },
          head: [{ ru: 'Лимит 50', en: 'Limit 50' }, { ru: 'Лимит 120', en: 'Limit 120' }, { ru: 'Штраф', en: 'Fine' }, { ru: 'Баллы', en: 'Points' }],
          rows: [
            ['51–70', '121–150', '100 €', '0'],
            ['71–80', '151–170', '300 €', '2'],
            ['81–90', '171–180', '400 €', '4'],
            ['91–100', '181–190', '500 €', '6'],
            ['101+', '191+', '600 €', '6']
          ] },
        { type: 'text', body: {
          ru: ['Отвечает тот, кто нарушил. Но за ребёнка младше 18 лет платят <b>родители</b> или опекун. Владелец машины (<i>titular</i>) отвечает за документы, ИТВ и техническое состояние.'],
          en: ['The person who committed the offence is responsible. But for a minor under 18 the <b>parents</b> or guardian pay. The vehicle owner (<i>titular</i>) is responsible for the documents, the ITV and the technical condition.'] } },
        { type: 'examples', items: [
          { es: 'Una infracción <b>grave</b> se sanciona con 200 euros.', ru: 'Серьёзное нарушение наказывается штрафом 200 евро.', en: 'A serious offence is punished with a 200-euro fine.' },
          { es: 'Si pagas en veinte días tienes un <b>descuento del 50 %</b>.', ru: 'Если заплатишь в течение двадцати дней, получишь скидку 50 %.', en: 'If you pay within twenty days you get a 50 % discount.' },
          { es: 'El <b>titular del vehículo</b> responde de la ITV.', ru: 'Владелец машины отвечает за техосмотр.', en: 'The vehicle owner is responsible for the ITV.' },
          { es: 'La multa de un menor la pagan sus <b>padres</b>.', ru: 'Штраф несовершеннолетнего платят его родители.', en: 'A minor’s fine is paid by his parents.' }
        ] }
      ] }
    ],
    quizCount: 20,
    quiz: [
      { es: '¿Qué edad mínima se exige para obtener el permiso de la clase B?',
        prompt: { ru: 'Какой минимальный возраст для получения прав категории B?', en: 'What is the minimum age for a class B licence?' },
        options: [
          { es: '18 años.', ru: '18 лет.', en: '18 years.' },
          { es: '17 años.', ru: '17 лет.', en: '17 years.' },
          { es: '21 años.', ru: '21 год.', en: '21 years.' }
        ],
        answer: 0,
        explain: { ru: 'Права B выдают с 18 лет. 21 год нужен, например, для категории C. RGCond, ст. 4.', en: 'A B licence is issued from 18. Age 21 is needed, for example, for class C. RGCond art. 4.' } },
      { es: '¿Cuántas plazas, como máximo, puede tener un automóvil que se conduce con el permiso B?',
        prompt: { ru: 'Сколько мест максимум может быть у автомобиля, который водят с правами B?', en: 'How many seats at most may a vehicle driven with a B licence have?' },
        options: [
          { es: 'Siete, incluido el conductor.', ru: 'Семь, включая водителя.', en: 'Seven, including the driver.' },
          { es: 'Nueve, incluido el conductor.', ru: 'Девять, включая водителя.', en: 'Nine, including the driver.' },
          { es: 'Nueve, sin contar al conductor.', ru: 'Девять, не считая водителя.', en: 'Nine, not counting the driver.' }
        ],
        answer: 1,
        explain: { ru: 'Категория B — не больше 8 пассажиров плюс водитель, то есть 9 мест. RGCond, ст. 4.', en: 'Class B — no more than 8 passengers plus the driver, i.e. 9 seats. RGCond art. 4.' } },
      { es: '¿Cuál es la masa máxima autorizada de un automóvil que puede conducirse con el permiso B?',
        prompt: { ru: 'Какой может быть разрешённая максимальная масса автомобиля для прав B?', en: 'What maximum authorised mass may a vehicle driven on a B licence have?' },
        options: [
          { es: '3.500 kg.', ru: '3500 кг.', en: '3,500 kg.' },
          { es: '4.250 kg.', ru: '4250 кг.', en: '4,250 kg.' },
          { es: '7.500 kg.', ru: '7500 кг.', en: '7,500 kg.' }
        ],
        answer: 0,
        explain: { ru: 'B — автомобили до 3500 кг MMA. 7500 кг — это уже C1; 4250 кг относится к сцепке с прицепом после дополнительного экзамена. RGCond, ст. 4.', en: 'B covers vehicles up to 3,500 kg MMA. 7,500 kg is class C1; 4,250 kg is about a combination with a trailer after an extra test. RGCond art. 4.' } },
      { es: 'Con el permiso B, ¿qué remolque puede engancharse siempre a un turismo, sin más condiciones?',
        prompt: { ru: 'Какой прицеп с правами B можно цеплять к легковому автомобилю всегда, без дополнительных условий?', en: 'With a B licence, which trailer may always be hitched to a car, with no further conditions?' },
        options: [
          { es: 'Uno de hasta 1.000 kg de masa máxima autorizada.', ru: 'До 1000 кг разрешённой максимальной массы.', en: 'One of up to 1,000 kg maximum authorised mass.' },
          { es: 'Cualquier remolque, si el turismo es potente.', ru: 'Любой, если машина мощная.', en: 'Any trailer, if the car is powerful.' },
          { es: 'Uno de hasta 750 kg de masa máxima autorizada.', ru: 'До 750 кг разрешённой максимальной массы.', en: 'One of up to 750 kg maximum authorised mass.' }
        ],
        answer: 2,
        explain: { ru: 'Лёгкий прицеп до 750 кг — всегда. Более тяжёлый — только если масса сцепки не больше 3500 кг. RGCond, ст. 4.', en: 'A light trailer up to 750 kg — always. A heavier one only if the combination is ≤ 3,500 kg. RGCond art. 4.' } },
      { es: '¿Qué permiso hace falta para un turismo con un remolque de 2.000 kg de masa máxima autorizada si el conjunto supera los 4.250 kg?',
        prompt: { ru: 'Какие права нужны для легковой машины с прицепом 2000 кг MMA, если сцепка тяжелее 4250 кг?', en: 'Which licence is needed for a car with a 2,000 kg MMA trailer if the combination exceeds 4,250 kg?' },
        options: [
          { es: 'El B+E.', ru: 'B+E.', en: 'B+E.' },
          { es: 'El B es suficiente.', ru: 'Достаточно B.', en: 'B is enough.' },
          { es: 'El C1.', ru: 'C1.', en: 'C1.' }
        ],
        answer: 0,
        explain: { ru: 'B+E — тягач категории B и прицеп до 3500 кг MMA. С правами B сцепка не может превышать 3500 кг (4250 кг — с дополнительным экзаменом). RGCond, ст. 4.', en: 'B+E is a class B towing vehicle plus a trailer up to 3,500 kg MMA. On a B licence the combination may not exceed 3,500 kg (4,250 kg with an extra test). RGCond art. 4.' } },
      { es: '¿Desde qué edad se puede obtener el permiso AM para ciclomotores?',
        prompt: { ru: 'С какого возраста можно получить права AM на мопед?', en: 'From what age can you get the AM licence for mopeds?' },
        options: [
          { es: 'Desde los 16 años.', ru: 'С 16 лет.', en: 'From 16.' },
          { es: 'Desde los 15 años.', ru: 'С 15 лет.', en: 'From 15.' },
          { es: 'Desde los 14 años.', ru: 'С 14 лет.', en: 'From 14.' }
        ],
        answer: 1,
        explain: { ru: 'AM — с 15 лет; A1 — с 16; A2 и B — с 18; A — с 20. RGCond, ст. 4.', en: 'AM — from 15; A1 — from 16; A2 and B — from 18; A — from 20. RGCond art. 4.' } },
      { es: '¿Puede un titular del permiso B conducir una motocicleta de 125 cm³ en España?',
        prompt: { ru: 'Может ли владелец прав B водить мотоцикл 125 см³ в Испании?', en: 'May a B licence holder ride a 125 cc motorbike in Spain?' },
        options: [
          { es: 'Sí, desde el primer día.', ru: 'Да, с первого дня.', en: 'Yes, from the first day.' },
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' },
          { es: 'Sí, si su permiso B tiene más de tres años de antigüedad.', ru: 'Да, если правам B больше трёх лет.', en: 'Yes, if the B licence is more than three years old.' }
        ],
        answer: 2,
        explain: { ru: 'С правами B старше трёх лет можно водить мотоциклы категории A1, но только на территории Испании. RGCond, ст. 4.', en: 'With a B licence older than three years you may ride A1 motorbikes, but only within Spain. RGCond art. 4.' } },
      { es: '¿Cada cuánto tiempo hay que renovar el permiso B si el conductor tiene menos de 65 años?',
        prompt: { ru: 'Как часто нужно продлевать права B водителю младше 65 лет?', en: 'How often must a B licence be renewed if the driver is under 65?' },
        options: [
          { es: 'Cada 10 años.', ru: 'Каждые 10 лет.', en: 'Every 10 years.' },
          { es: 'Cada 5 años.', ru: 'Каждые 5 лет.', en: 'Every 5 years.' },
          { es: 'Cada 15 años.', ru: 'Каждые 15 лет.', en: 'Every 15 years.' }
        ],
        answer: 0,
        explain: { ru: 'До 65 лет права B действуют 10 лет, после 65 — 5 лет. RGCond, ст. 12.', en: 'Under 65 a B licence is valid for 10 years, after 65 — for 5 years. RGCond art. 12.' } },
      { es: 'Un conductor de 67 años renueva su permiso B. ¿Por cuánto tiempo será válido?',
        prompt: { ru: 'Водитель 67 лет продлевает права B. На какой срок?', en: 'A 67-year-old driver renews his B licence. For how long will it be valid?' },
        options: [
          { es: 'Por 10 años.', ru: 'На 10 лет.', en: 'For 10 years.' },
          { es: 'Por 5 años.', ru: 'На 5 лет.', en: 'For 5 years.' },
          { es: 'Por 2 años.', ru: 'На 2 года.', en: 'For 2 years.' }
        ],
        answer: 1,
        explain: { ru: 'С 65 лет срок действия прав B — 5 лет (может быть короче по медицинским причинам). RGCond, ст. 12.', en: 'From 65 a B licence is valid for 5 years (it may be shorter for medical reasons). RGCond art. 12.' } },
      { es: 'Su permiso de conducción caducó la semana pasada. ¿Puede conducir?',
        prompt: { ru: 'Срок ваших прав истёк на прошлой неделе. Можно ли водить?', en: 'Your licence expired last week. May you drive?' },
        options: [
          { es: 'Sí, hay un mes de margen.', ru: 'Да, есть месяц запаса.', en: 'Yes, there is a month’s grace.' },
          { es: 'Sí, solo dentro de su provincia.', ru: 'Да, только в своей провинции.', en: 'Yes, only within your province.' },
          { es: 'No, un permiso caducado no autoriza a conducir.', ru: 'Нет, просроченные права не дают права водить.', en: 'No, an expired licence does not authorise driving.' }
        ],
        answer: 2,
        explain: { ru: 'Права с истёкшим сроком не дают права водить, агент их изымает и отправляет в Jefatura. Продлевать нужно заранее. RGCond, ст. 12.4.', en: 'An expired licence does not allow driving; the officer withholds it and sends it to the Jefatura. Renew it in advance. RGCond art. 12.4.' } },
      { es: '¿Con cuántos puntos empieza el titular de un permiso de conducción con más de tres años de antigüedad?',
        prompt: { ru: 'Сколько баллов у владельца прав со стажем больше трёх лет?', en: 'How many points does a licence holder with more than three years of experience start with?' },
        options: [
          { es: 'Con 12 puntos.', ru: '12 баллов.', en: '12 points.' },
          { es: 'Con 8 puntos.', ru: '8 баллов.', en: '8 points.' },
          { es: 'Con 15 puntos.', ru: '15 баллов.', en: '15 points.' }
        ],
        answer: 0,
        explain: { ru: 'Обычный начальный счёт — 12 баллов; 8 — у новичков; 15 — максимум с бонусами. LSV, ст. 63.', en: 'The normal starting balance is 12 points; 8 is for new drivers; 15 is the maximum with bonuses. LSV art. 63.' } },
      { es: '¿Cuántos puntos tiene un conductor que acaba de obtener su primer permiso?',
        prompt: { ru: 'Сколько баллов у водителя, который только что получил первые права?', en: 'How many points does a driver who has just got his first licence have?' },
        options: [
          { es: '12 puntos.', ru: '12 баллов.', en: '12 points.' },
          { es: '6 puntos.', ru: '6 баллов.', en: '6 points.' },
          { es: '8 puntos.', ru: '8 баллов.', en: '8 points.' }
        ],
        answer: 2,
        explain: { ru: 'Новичок начинает с 8 баллов и получает 12, если 2 года ездит без санкций с потерей баллов. LSV, ст. 63 и 65.', en: 'A new driver starts with 8 points and gets 12 after 2 years without sanctions that take points. LSV arts. 63 and 65.' } },
      { es: '¿Cuál es el saldo máximo de puntos que puede acumular un conductor?',
        prompt: { ru: 'Какой максимальный счёт баллов может накопить водитель?', en: 'What is the maximum points balance a driver can build up?' },
        options: [
          { es: '12 puntos.', ru: '12 баллов.', en: '12 points.' },
          { es: '15 puntos.', ru: '15 баллов.', en: '15 points.' },
          { es: '20 puntos.', ru: '20 баллов.', en: '20 points.' }
        ],
        answer: 1,
        explain: { ru: 'За годы без нарушений и курсы безопасного вождения добавляют баллы — до 15. LSV, ст. 63.4–5.', en: 'Years without offences and safe-driving courses add points — up to 15. LSV art. 63.4–5.' } },
      { es: 'Un conductor ha perdido parte de sus puntos. ¿Cuándo recupera los 12 puntos sin hacer ningún curso?',
        prompt: { ru: 'Водитель потерял часть баллов. Когда он вернёт 12 баллов без курса?', en: 'A driver has lost some points. When does he get his 12 points back without a course?' },
        options: [
          { es: 'Al año, si paga las multas.', ru: 'Через год, если оплатит штрафы.', en: 'After one year, if he pays the fines.' },
          { es: 'Tras dos años sin ser sancionado por infracciones que restan puntos.', ru: 'Через два года без санкций с потерей баллов.', en: 'After two years without sanctions for offences that take points.' },
          { es: 'Nunca; solo con un curso.', ru: 'Никогда, только через курс.', en: 'Never; only with a course.' }
        ],
        answer: 1,
        explain: { ru: 'Два года без санкций, которые снимают баллы, — и счёт снова 12. LSV, ст. 65.1.', en: 'Two years without sanctions that take points — and the balance is 12 again. LSV art. 65.1.' } },
      { es: '¿Cuántos puntos se pueden recuperar, como máximo, con un curso de sensibilización y reeducación vial?',
        prompt: { ru: 'Сколько баллов максимум можно вернуть на курсе перевоспитания водителей?', en: 'How many points at most can be recovered with a road re-education course?' },
        options: [
          { es: 'Hasta 6 puntos.', ru: 'До 6 баллов.', en: 'Up to 6 points.' },
          { es: 'Todos los perdidos.', ru: 'Все потерянные.', en: 'All the lost ones.' },
          { es: 'Hasta 2 puntos.', ru: 'До 2 баллов.', en: 'Up to 2 points.' }
        ],
        answer: 0,
        explain: { ru: 'Курс частичного возврата даёт до 6 баллов, и пройти его можно раз в 2 года (профессионалам — раз в год). LSV, ст. 65.4.', en: 'The partial-recovery course gives up to 6 points and can be taken once every 2 years (professionals — once a year). LSV art. 65.4.' } },
      { es: 'Por regla general, ¿cuántos puntos como máximo se pueden perder por varias infracciones cometidas el mismo día?',
        prompt: { ru: 'Сколько баллов, как правило, максимум можно потерять за несколько нарушений в один день?', en: 'As a rule, how many points at most can be lost for several offences on the same day?' },
        options: [
          { es: '12 puntos.', ru: '12 баллов.', en: '12 points.' },
          { es: '6 puntos.', ru: '6 баллов.', en: '6 points.' },
          { es: '8 puntos.', ru: '8 баллов.', en: '8 points.' }
        ],
        answer: 2,
        explain: { ru: 'Не больше 8 баллов в день, кроме части очень серьёзных нарушений (алкоголь, наркотики, отказ от теста, езда навстречу и др.) — тогда снимают все. LSV, ст. 64.4.', en: 'No more than 8 points a day, except for certain very serious offences (alcohol, drugs, refusing the test, wrong-way driving, etc.) — then all are taken. LSV art. 64.4.' } },
      { es: '¿Cuántos puntos se pierden por conducir sujetando el teléfono móvil con la mano?',
        prompt: { ru: 'Сколько баллов снимают за вождение с телефоном в руке?', en: 'How many points are lost for driving while holding a mobile phone?' },
        options: [
          { es: '3 puntos.', ru: '3 балла.', en: '3 points.' },
          { es: '6 puntos.', ru: '6 баллов.', en: '6 points.' },
          { es: '4 puntos.', ru: '4 балла.', en: '4 points.' }
        ],
        answer: 1,
        explain: { ru: 'Телефон в руке — 6 баллов. 3 балла — наушники или навигатор, которым управляют рукой. LSV, прил. II, п. 8 и 20.', en: 'A phone held in the hand — 6 points. 3 points is for headphones or a hand-operated GPS. LSV Annex II, items 8 and 20.' } },
      { es: '¿Cuántos puntos se pierden por no usar el cinturón de seguridad?',
        prompt: { ru: 'Сколько баллов снимают за непристёгнутый ремень?', en: 'How many points are lost for not wearing a seat belt?' },
        options: [
          { es: '4 puntos.', ru: '4 балла.', en: '4 points.' },
          { es: '2 puntos.', ru: '2 балла.', en: '2 points.' },
          { es: '6 puntos.', ru: '6 баллов.', en: '6 points.' }
        ],
        answer: 0,
        explain: { ru: 'Ремень, детское кресло, шлем не используются или используются неправильно — 4 балла. LSV, прил. II, п. 15.', en: 'Not using, or wrongly using, a seat belt, child seat or helmet — 4 points. LSV Annex II, item 15.' } },
      { es: '¿Cuántos puntos se pierden por no detenerse ante un semáforo en rojo?',
        prompt: { ru: 'Сколько баллов снимают за проезд на красный свет?', en: 'How many points are lost for not stopping at a red light?' },
        options: [
          { es: '6 puntos.', ru: '6 баллов.', en: '6 points.' },
          { es: '3 puntos.', ru: '3 балла.', en: '3 points.' },
          { es: '4 puntos.', ru: '4 балла.', en: '4 points.' }
        ],
        answer: 2,
        explain: { ru: 'Красный свет, знак «Стоп», «Уступи дорогу», нарушение приоритета — 4 балла. LSV, прил. II, п. 10.', en: 'Red light, stop sign, give-way sign, ignoring priority — 4 points. LSV Annex II, item 10.' } },
      { es: '¿Cuántos puntos se pierden por adelantar a un ciclista sin dejar 1,5 metros de separación?',
        prompt: { ru: 'Сколько баллов снимают за обгон велосипедиста ближе чем на 1,5 м?', en: 'How many points are lost for overtaking a cyclist with less than 1.5 m of clearance?' },
        options: [
          { es: '4 puntos.', ru: '4 балла.', en: '4 points.' },
          { es: '6 puntos.', ru: '6 баллов.', en: '6 points.' },
          { es: 'Ninguno; solo multa.', ru: 'Ни одного, только штраф.', en: 'None; only a fine.' }
        ],
        answer: 1,
        explain: { ru: 'С 2022 года опасный обгон велосипедиста или обгон ближе 1,5 м — 6 баллов. LSV, прил. II, п. 12.', en: 'Since 2022, endangering a cyclist when overtaking or passing closer than 1.5 m costs 6 points. LSV Annex II, item 12.' } },
      { es: 'Un conductor con 10 años de permiso da 0,35 mg/l en aire espirado. ¿Cuántos puntos pierde?',
        prompt: { ru: 'Водитель со стажем 10 лет показал 0,35 мг/л в выдыхаемом воздухе. Сколько баллов он теряет?', en: 'A driver with a 10-year-old licence blows 0.35 mg/l. How many points does he lose?' },
        options: [
          { es: '4 puntos.', ru: '4 балла.', en: '4 points.' },
          { es: '6 puntos.', ru: '6 баллов.', en: '6 points.' },
          { es: '2 puntos.', ru: '2 балла.', en: '2 points.' }
        ],
        answer: 0,
        explain: { ru: 'Больше 0,25 и до 0,50 мг/л — 4 балла; больше 0,50 мг/л — 6 баллов. LSV, прил. II, п. 1.', en: 'Over 0.25 and up to 0.50 mg/l — 4 points; over 0.50 mg/l — 6 points. LSV Annex II, item 1.' } },
      { es: 'En una vía limitada a 50 km/h un radar le capta a 85 km/h. ¿Qué sanción corresponde?',
        prompt: { ru: 'На дороге с ограничением 50 км/ч радар зафиксировал 85 км/ч. Какое наказание?', en: 'On a 50 km/h road a radar records you at 85 km/h. What is the penalty?' },
        options: [
          { es: '100 euros, sin pérdida de puntos.', ru: '100 евро, без потери баллов.', en: '€100, no points lost.' },
          { es: '300 euros y 2 puntos.', ru: '300 евро и 2 балла.', en: '€300 and 2 points.' },
          { es: '400 euros y 4 puntos.', ru: '400 евро и 4 балла.', en: '€400 and 4 points.' }
        ],
        answer: 2,
        explain: { ru: 'При лимите 50: 81–90 км/ч — 400 € и 4 балла. LSV, прил. IV.', en: 'With a 50 limit: 81–90 km/h — €400 and 4 points. LSV Annex IV.' } },
      { es: '¿Qué color tiene la placa que lleva un conductor novel durante su primer año?',
        prompt: { ru: 'Какая табличка у водителя-новичка в первый год?', en: 'What plate does a new driver display in the first year?' },
        options: [
          { es: 'Verde con una L blanca.', ru: 'Зелёная с белой буквой L.', en: 'Green with a white L.' },
          { es: 'Azul con una L blanca.', ru: 'Синяя с белой буквой L.', en: 'Blue with a white L.' },
          { es: 'Blanca con una L roja.', ru: 'Белая с красной буквой L.', en: 'White with a red L.' }
        ],
        answer: 0,
        explain: { ru: 'Знак V-13 «conductor novel» — зелёный прямоугольник с белой L сзади слева (обычно на заднем стекле), первый год после получения прав. Manual DGT, тема 2; RGVeh., прил. XI.', en: 'Sign V-13 “conductor novel” — a green rectangle with a white L at the rear left (usually on the rear window) during the first year. DGT manual, topic 2; RGVeh. Annex XI.' } },
      { es: '¿Qué documentos debe llevar en el vehículo cuando conduce?',
        prompt: { ru: 'Какие документы нужно иметь в машине во время поездки?', en: 'Which documents must you carry in the vehicle while driving?' },
        options: [
          { es: 'Solo el permiso de conducción; lo demás puede quedarse en casa.', ru: 'Только права, остальное можно оставить дома.', en: 'Only the driving licence; the rest can stay at home.' },
          { es: 'El permiso de conducción, el permiso de circulación y la tarjeta ITV.', ru: 'Права, регистрационное свидетельство и карточку ИТВ.', en: 'The driving licence, the registration certificate and the ITV card.' },
          { es: 'Solo la factura de compra del vehículo.', ru: 'Только договор покупки машины.', en: 'Only the purchase invoice of the vehicle.' }
        ],
        answer: 1,
        explain: { ru: 'Нужно возить права, permiso de circulación и tarjeta ITV (и подтверждение страховки) — оригиналы или заверенные копии. Manual DGT, тема 2.', en: 'You must carry the licence, permiso de circulación and tarjeta ITV (and proof of insurance) — originals or certified copies. DGT manual, topic 2.' } },
      { es: '¿Qué remolques necesitan permiso de circulación propio?',
        prompt: { ru: 'Каким прицепам нужно собственное регистрационное свидетельство?', en: 'Which trailers need their own registration certificate?' },
        options: [
          { es: 'Todos, aunque sean muy pequeños.', ru: 'Всем, даже совсем маленьким.', en: 'All of them, however small.' },
          { es: 'Ninguno; usan el del coche.', ru: 'Никаким, они используют документ машины.', en: 'None; they use the car’s one.' },
          { es: 'Los de más de 750 kg de masa máxima autorizada.', ru: 'Тяжелее 750 кг разрешённой максимальной массы.', en: 'Those over 750 kg maximum authorised mass.' }
        ],
        answer: 2,
        explain: { ru: 'Permiso de circulación нужен моторным ТС, мопедам и прицепам тяжелее 750 кг. Лёгкий прицеп ездит с номером тягача. Manual DGT, тема 2.', en: 'A permiso de circulación is needed for motor vehicles, mopeds and trailers over 750 kg. A light trailer carries the towing vehicle’s plate. DGT manual, topic 2.' } },
      { es: 'Ha vendido su coche. ¿En qué plazo debe comunicarlo a Tráfico?',
        prompt: { ru: 'Вы продали машину. В какой срок нужно сообщить в DGT?', en: 'You have sold your car. Within what time must you tell Tráfico?' },
        options: [
          { es: 'En 10 días.', ru: 'В течение 10 дней.', en: 'Within 10 days.' },
          { es: 'En 3 meses.', ru: 'В течение 3 месяцев.', en: 'Within 3 months.' },
          { es: 'No hace falta comunicarlo.', ru: 'Сообщать не нужно.', en: 'There is no need to tell them.' }
        ],
        answer: 0,
        explain: { ru: 'О продаже или передаче машины сообщают в Jefatura de Tráfico за 10 дней, о смене данных (например, адреса) — за 15. Manual DGT, тема 2.', en: 'A sale or transfer is reported to the Jefatura de Tráfico within 10 days, a change of details (e.g. address) within 15. DGT manual, topic 2.' } },
      { es: '¿Cuándo debe pasar la primera ITV un turismo nuevo de uso particular?',
        prompt: { ru: 'Когда новый личный легковой автомобиль проходит первый техосмотр?', en: 'When must a new private car pass its first ITV?' },
        options: [
          { es: 'Al año de matricularse.', ru: 'Через год после регистрации.', en: 'One year after registration.' },
          { es: 'A los 4 años.', ru: 'Через 4 года.', en: 'At 4 years.' },
          { es: 'A los 10 años.', ru: 'Через 10 лет.', en: 'At 10 years.' }
        ],
        answer: 1,
        explain: { ru: 'Легковой автомобиль: первая ИТВ в 4 года, затем каждые 2 года, после 10 лет — каждый год. Manual DGT, тема 2.', en: 'A car: first ITV at 4 years, then every 2 years, after 10 years — every year. DGT manual, topic 2.' } },
      { es: 'Su turismo tiene 12 años. ¿Con qué frecuencia debe pasar la ITV?',
        prompt: { ru: 'Вашей машине 12 лет. Как часто ей проходить ИТВ?', en: 'Your car is 12 years old. How often must it pass the ITV?' },
        options: [
          { es: 'Cada dos años.', ru: 'Каждые два года.', en: 'Every two years.' },
          { es: 'Cada seis meses.', ru: 'Каждые шесть месяцев.', en: 'Every six months.' },
          { es: 'Cada año.', ru: 'Каждый год.', en: 'Every year.' }
        ],
        answer: 2,
        explain: { ru: 'Легковым старше 10 лет — ИТВ ежегодно. Раз в полгода — это фургоны старше 10 лет. Manual DGT, тема 2.', en: 'Cars over 10 years old — ITV every year. Every six months applies to vans over 10 years old. DGT manual, topic 2.' } },
      { es: '¿Dónde se coloca la pegatina de la ITV en un turismo?',
        prompt: { ru: 'Куда клеят наклейку ИТВ в легковом автомобиле?', en: 'Where does the ITV sticker go on a car?' },
        options: [
          { es: 'En el lado derecho del parabrisas, por dentro.', ru: 'Изнутри на правую сторону лобового стекла.', en: 'Inside, on the right side of the windscreen.' },
          { es: 'En la luna trasera.', ru: 'На заднее стекло.', en: 'On the rear window.' },
          { es: 'En la placa de matrícula.', ru: 'На номерной знак.', en: 'On the number plate.' }
        ],
        answer: 0,
        explain: { ru: 'Наклейку ИТВ клеят изнутри на правую сторону лобового стекла; на заднем стекле — знак «L» новичка. Manual DGT, тема 2.', en: 'The ITV sticker goes inside on the right of the windscreen; the rear window is for the new driver’s “L”. DGT manual, topic 2.' } },
      { es: 'Tras un accidente, ¿qué daños NO cubre el seguro obligatorio del vehículo culpable?',
        prompt: { ru: 'Что после ДТП НЕ покрывает обязательная страховка виновной машины?', en: 'After an accident, what does the guilty vehicle’s compulsory insurance NOT cover?' },
        options: [
          { es: 'Las lesiones de un peatón atropellado.', ru: 'Травмы сбитого пешехода.', en: 'The injuries of a pedestrian who was hit.' },
          { es: 'Las lesiones del propio conductor asegurado.', ru: 'Травмы самого застрахованного водителя.', en: 'The injuries of the insured driver himself.' },
          { es: 'Los daños a una farola.', ru: 'Повреждение фонарного столба.', en: 'Damage to a street lamp.' }
        ],
        answer: 1,
        explain: { ru: 'Обязательная страховка защищает других: пешеходов, чужие машины и имущество. Травмы самого водителя она не покрывает. Manual DGT, тема 2.', en: 'Compulsory insurance protects others: pedestrians, other vehicles and property. It does not cover the driver’s own injuries. DGT manual, topic 2.' } },
      { es: '¿Qué ocurre si un agente comprueba que un vehículo circula sin seguro obligatorio?',
        prompt: { ru: 'Что будет, если агент обнаружит машину без обязательной страховки?', en: 'What happens if an officer finds a vehicle driving without compulsory insurance?' },
        options: [
          { es: 'Solo una advertencia verbal.', ru: 'Только устное предупреждение.', en: 'Only a verbal warning.' },
          { es: 'Puede seguir hasta casa y contratar el seguro.', ru: 'Можно доехать домой и оформить страховку.', en: 'You may drive home and take out insurance.' },
          { es: 'Se inmoviliza el vehículo y se multa al propietario.', ru: 'Машину задерживают, а владельца штрафуют.', en: 'The vehicle is immobilised and the owner fined.' }
        ],
        answer: 2,
        explain: { ru: 'Без страховки ездить нельзя: машину задерживают на месте, владелец платит штраф и расходы на стоянку. Manual DGT, тема 2.', en: 'You may not drive uninsured: the vehicle is immobilised on the spot, the owner pays a fine and the storage costs. DGT manual, topic 2.' } },
      { es: '¿Qué multa corresponde, en general, a una infracción grave?',
        prompt: { ru: 'Какой штраф, как правило, за серьёзное нарушение (grave)?', en: 'What fine generally applies to a serious (grave) offence?' },
        options: [
          { es: '200 euros.', ru: '200 евро.', en: '€200.' },
          { es: 'Hasta 100 euros.', ru: 'До 100 евро.', en: 'Up to €100.' },
          { es: '500 euros.', ru: '500 евро.', en: '€500.' }
        ],
        answer: 0,
        explain: { ru: 'Leves — до 100 €, graves — 200 €, muy graves — 500 € (скорость — по таблице прил. IV). LSV, ст. 80.', en: 'Leves — up to €100, graves — €200, muy graves — €500 (speeding follows the Annex IV table). LSV art. 80.' } },
      { es: '¿Qué ventaja tiene pagar una multa en los 20 días naturales siguientes a la notificación?',
        prompt: { ru: 'Что даёт оплата штрафа в течение 20 календарных дней после уведомления?', en: 'What is the benefit of paying a fine within 20 calendar days of notification?' },
        options: [
          { es: 'No se pierden los puntos.', ru: 'Баллы не снимают.', en: 'No points are lost.' },
          { es: 'Una reducción del 50 % del importe.', ru: 'Скидку 50 % от суммы.', en: 'A 50 % reduction of the amount.' },
          { es: 'Una reducción del 20 % del importe.', ru: 'Скидку 20 % от суммы.', en: 'A 20 % reduction of the amount.' }
        ],
        answer: 1,
        explain: { ru: 'Быстрая оплата — минус 50 %, но вы отказываетесь от возражений, и баллы всё равно снимают. LSV, ст. 94.', en: 'Paying early gives 50 % off, but you give up your objections and points are still deducted. LSV art. 94.' } },
      { es: 'Si la infracción la comete un menor de 18 años, ¿quién responde de la multa?',
        prompt: { ru: 'Если нарушение совершил несовершеннолетний (до 18 лет), кто отвечает за штраф?', en: 'If the offence is committed by someone under 18, who is liable for the fine?' },
        options: [
          { es: 'Nadie, porque es menor.', ru: 'Никто, ведь он несовершеннолетний.', en: 'Nobody, because he is a minor.' },
          { es: 'El dueño de la vía.', ru: 'Владелец дороги.', en: 'The road owner.' },
          { es: 'Sus padres, tutores o guardadores, junto con él.', ru: 'Его родители или опекуны вместе с ним.', en: 'His parents or guardians, together with him.' }
        ],
        answer: 2,
        explain: { ru: 'За нарушения несовершеннолетнего солидарно отвечают родители, опекуны или те, кто за него отвечает. LSV, ст. 82; Manual DGT, тема 2.', en: 'Parents, guardians or those in charge are jointly liable for a minor’s offences. LSV art. 82; DGT manual, topic 2.' } },
      { es: '¿Qué indica esta señal?',
        prompt: { ru: 'Что означает этот знак?', en: 'What does this sign mean?' },
        options: [
          { es: 'Entrada prohibida a vehículos según su distintivo ambiental.', ru: 'Въезд запрещён в зависимости от экологической наклейки.', en: 'No entry for vehicles depending on their environmental label.' },
          { es: 'Peligro por humo en la calzada.', ru: 'Опасность: дым на дороге.', en: 'Danger: smoke on the road.' },
          { es: 'Taller de reparación de escapes.', ru: 'Мастерская по ремонту выхлопных систем.', en: 'Exhaust repair workshop.' }
        ],
        answer: 0,
        explain: { ru: 'R-120 запрещает въезд машинам в зависимости от distintivo ambiental; условия — на табличке под знаком. Catálogo de señales, R-120.', en: 'R-120 bans entry depending on the distintivo ambiental; the conditions are on the panel below. Sign catalogue, R-120.' },
        sign: 'R-120' }
    ]
  }
]);
