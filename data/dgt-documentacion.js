// Driving theory (DGT): licences, vehicle documents, ITV, insurance and the points system.
// Reglamento General de Conductores, Reglamento General de Vehículos, Ley de Tráfico (anexo II, puntos),
// Ley de responsabilidad civil y seguro; DGT «Manual básico», Tema 2 y Anexo de puntos.
ECA.data.addDgt([
  {
    id: 'documentacion',
    cats: ['A', 'B'],
    title: { ru: 'Документы и баллы', en: 'Documents and points' },
    summary: {
      ru: 'Категории прав и возраст, что возить с собой, техосмотр ITV, страховка, новичок «L», система баллов.',
      en: 'Licence categories and ages, what to carry, the ITV inspection, insurance, the novice “L” plate, the points system.'
    },
    hero: {
      es: '<b>Documentación</b> y permiso por puntos',
      sub: { ru: 'Что должно быть в машине и как не потерять права', en: 'What must be in the car and how not to lose your licence' }
    },
    tabs: [
      {
        id: 'permisos',
        label: { ru: 'Категории', en: 'Categories' },
        blocks: [
          {
            type: 'table',
            head: [{ ru: 'Права', en: 'Licence' }, { ru: 'Что водить', en: 'What you may drive' }, { ru: 'Возраст', en: 'Age' }],
            rows: [
              ['AM', { ru: 'Мопеды, лёгкие квадрициклы', en: 'Mopeds, light quadricycles' }, '15'],
              ['A1', { ru: 'Мото до 125 см³ и 11 кВт', en: 'Bikes ≤ 125 cc and 11 kW' }, '16'],
              ['A2', { ru: 'Мото до 35 кВт', en: 'Bikes ≤ 35 kW' }, '18'],
              ['A', { ru: 'Любые мотоциклы', en: 'Any motorbike' }, '20'],
              ['B', { ru: 'Авто до 3500 кг и 9 мест', en: 'Cars ≤ 3,500 kg, 9 seats' }, '18'],
              ['B + E', { ru: 'B с прицепом до 3500 кг', en: 'B with trailer ≤ 3,500 kg' }, '18']
            ]
          },
          {
            type: 'text',
            body: {
              ru: ['С правами <b>B</b> можно водить и мопеды, и машину с лёгким прицепом (до 750 кг). А после трёх лет стажа с правами B в Испании можно ездить и на мотоцикле до 125 см³.', 'Права B продлевают <b>каждые 10 лет</b> до 65 лет и <b>каждые 5 лет</b> после 65 — заранее, до окончания срока.'],
              en: ['A <b>B</b> licence also covers mopeds and a car with a light trailer (≤ 750 kg). After three years with B you may also ride a bike up to 125 cc in Spain.', 'Renew a B licence <b>every 10 years</b> until 65 and <b>every 5 years</b> after — before it expires.']
            }
          },
          {
            type: 'text', color: 'amber',
            body: {
              ru: '<b>Новичок (conductor novel)</b>: первый год после получения прав возит сзади на стекле зелёную табличку с белой буквой <b>L</b>.',
              en: '<b>A novice (conductor novel)</b>: for the first year displays a green plate with a white <b>L</b> on the rear window.'
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>Мото — «лестница» 16 → 18 → 20</b>: A1, A2, A. AM — с 15.',
              en: '<b>Motorbikes — a ladder 16 → 18 → 20</b>: A1, A2, A. AM — from 15.'
            }
          }
        ]
      },
      {
        id: 'documentos',
        label: { ru: 'Документы', en: 'Documents' },
        blocks: [
          {
            type: 'rules', heading: { ru: 'Возить с собой', en: 'Carry with you' },
            items: [
              { color: 'blue', title: { ru: 'Права', en: 'Driving licence' }, es: '<b>permiso de conducir</b>', body: { ru: 'Подтверждают, что вы можете водить этот тип машины.', en: 'Proves you may drive this kind of vehicle.' } },
              { color: 'teal', title: { ru: 'Свидетельство о регистрации', en: 'Registration certificate' }, es: '<b>permiso de circulación</b>', body: { ru: 'Машина зарегистрирована (номер) и допущена к движению. Смену данных владелец сообщает за 15 дней, продажу — за 10.', en: 'The vehicle is registered (number plate) and allowed on the road. Report changed details within 15 days, a sale within 10.' } },
              { color: 'amber', title: { ru: 'Карта техосмотра', en: 'Inspection card' }, es: '<b>tarjeta de inspección técnica</b> (ITV)', body: { ru: 'Характеристики машины и пройденные техосмотры.', en: 'Vehicle details and inspections passed.' } },
              { color: 'purple', title: { ru: 'Страховка', en: 'Insurance' }, es: 'justificante del <b>seguro obligatorio</b>', body: { ru: 'Квитанция об оплате обязательной гражданской ответственности.', en: 'Proof that compulsory third-party insurance is paid.' } }
            ]
          },
          {
            type: 'text',
            body: {
              ru: 'Документы — оригиналы или копии, заверенные официальным органом (compulsa). Сейчас также принимается приложение miDGT в телефоне.',
              en: 'Documents must be originals or officially certified copies (compulsa). The miDGT phone app is also accepted now.'
            }
          },
          {
            type: 'table', heading: { ru: 'Техосмотр (ITV) для легковых', en: 'ITV inspection for cars' },
            head: [{ ru: 'Возраст машины', en: 'Vehicle age' }, { ru: 'Как часто', en: 'How often' }],
            rows: [
              [{ ru: 'До 4 лет', en: 'Up to 4 years' }, { ru: 'Не нужен', en: 'Not needed' }],
              [{ ru: '4–10 лет', en: '4–10 years' }, { ru: 'Раз в 2 года', en: 'Every 2 years' }],
              [{ ru: 'Старше 10 лет', en: 'Over 10 years' }, { ru: 'Каждый год', en: 'Every year' }],
              [{ ru: 'Мотоцикл', en: 'Motorbike' }, { ru: 'С 4 лет — раз в 2 года', en: 'From 4 years — every 2 years' }],
              [{ ru: 'Мопед', en: 'Moped' }, { ru: 'С 3 лет — раз в 2 года', en: 'From 3 years — every 2 years' }]
            ]
          },
          {
            type: 'text',
            body: {
              ru: ['Прошли ITV — наклейку клеят изнутри в правом верхнем углу лобового стекла, протокол возят с собой. Серьёзный дефект — ехать нельзя: в ремонт и на повторный осмотр.', 'ITV нужен также после переделки машины или аварии с повреждением кузова. За сроки ITV отвечает <b>владелец</b>.'],
              en: ['Pass the ITV — the sticker goes inside the windscreen, top right, and you carry the report. A serious defect — you may not drive: repair and re-inspect.', 'An ITV is also needed after modifications or a crash damaging the structure. The <b>owner</b> is responsible for ITV dates.']
            }
          },
          {
            type: 'rules', heading: { ru: 'Обязательная страховка', en: 'Compulsory insurance' },
            items: [
              { color: 'teal', title: { ru: 'Покрывает', en: 'Covers' }, es: 'daños a <b>terceros</b>: personas y bienes', body: { ru: 'Ущерб другим людям и чужому имуществу.', en: 'Harm to other people and their property.' } },
              { color: 'coral', title: { ru: 'Не покрывает', en: 'Doesn’t cover' }, es: 'lesiones del <b>conductor</b>, sus bienes, vehículo robado', body: { ru: 'Травмы самого водителя, его вещи и вещи его семьи, ущерб от угнанной машины, травмы без обязательного шлема.', en: 'The driver’s own injuries, belongings of the driver and family, harm from a stolen vehicle, injuries without a compulsory helmet.' } },
              { color: 'amber', title: { ru: 'Без страховки', en: 'Uninsured' }, es: 'inmovilización y <b>multa</b>', body: { ru: 'Машину задерживают, владелец платит штраф и стоянку. О ДТП сообщают страховой в течение 7 дней.', en: 'The vehicle is impounded; the owner pays a fine and storage. Report a crash to the insurer within 7 days.' } }
            ]
          }
        ]
      },
      {
        id: 'puntos',
        label: { ru: 'Баллы', en: 'Points' },
        blocks: [
          {
            type: 'table', heading: { ru: 'Сколько баллов', en: 'How many points' },
            head: [{ ru: 'Водитель', en: 'Driver' }, { ru: 'Баллы', en: 'Points' }],
            rows: [
              [{ ru: 'Новый (первые 2 года)', en: 'New (first 2 years)' }, '8'],
              [{ ru: '2 года без нарушений', en: '2 years without offences' }, '12'],
              [{ ru: 'Ещё 3 года без нарушений', en: '3 more clean years' }, '14'],
              [{ ru: 'Ещё 3 года без нарушений', en: '3 more clean years' }, '15 (max)']
            ]
          },
          {
            type: 'table', heading: { ru: 'За что снимают', en: 'What costs points' },
            head: [{ ru: 'Нарушение', en: 'Offence' }, { ru: 'Баллы', en: 'Points' }],
            rows: [
              [{ ru: 'Телефон в руке', en: 'Phone in hand' }, '6'],
              [{ ru: 'Алкоголь выше 0,50 мг/л', en: 'Alcohol over 0.50 mg/l' }, '6'],
              [{ ru: 'Наркотики в организме', en: 'Drugs in the body' }, '6'],
              [{ ru: 'Отказ от теста', en: 'Refusing the test' }, '6'],
              [{ ru: 'Обгон велосипеда ближе 1,5 м', en: 'Passing a cyclist under 1.5 m' }, '6'],
              [{ ru: 'Без ремня, шлема, детского кресла', en: 'No belt, helmet, child seat' }, '4'],
              [{ ru: 'Проезд на красный, «Стоп»', en: 'Red light, Stop sign' }, '4'],
              [{ ru: 'Алкоголь 0,25–0,50 мг/л', en: 'Alcohol 0.25–0.50 mg/l' }, '4'],
              [{ ru: 'Наушники за рулём', en: 'Headphones while driving' }, '3'],
              [{ ru: 'Антирадар (детектор)', en: 'Radar detector' }, '3'],
              [{ ru: 'Превышение скорости', en: 'Speeding' }, '2–6']
            ]
          },
          {
            type: 'rules', heading: { ru: 'Как вернуть', en: 'Getting them back' },
            items: [
              { color: 'teal', title: { ru: 'Часть баллов', en: 'Some points' }, es: '2 años sin infracciones o <b>curso de 12 horas</b>', body: { ru: 'Через 2 года без нарушений баллы возвращаются; курс 12 часов возвращает до 6 баллов.', en: 'After 2 years without offences points come back; a 12-hour course restores up to 6.' } },
              { color: 'coral', title: { ru: 'Все баллы', en: 'All points' }, es: '<b>6 meses</b> sin permiso, curso de 24 h y examen', body: { ru: 'Права теряют силу. Через 6 месяцев — курс 24 часа и экзамен. Повторно в течение 3 лет — ждать 12 месяцев.', en: 'The licence is void. After 6 months — a 24-hour course and an exam. Again within 3 years — wait 12 months.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: ['<b>8 → 12 → 14 → 15</b>: новичок, через 2 года, через 5, через 8.', '<b>Шестёрки — «смертельные» нарушения</b>: телефон в руке, алкоголь сверх, наркотики, отказ от теста, опасный обгон велосипеда.'],
              en: ['<b>8 → 12 → 14 → 15</b>: novice, after 2 years, after 5, after 8.', '<b>Sixes are the deadly ones</b>: phone in hand, heavy alcohol, drugs, refusing the test, dangerous cyclist pass.']
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
              ['el permiso de conducir', { ru: 'водительские права', en: 'driving licence' }],
              ['el permiso de circulación', { ru: 'свидетельство о регистрации', en: 'registration certificate' }],
              ['la ITV', { ru: 'техосмотр', en: 'MOT-type inspection' }],
              ['el seguro obligatorio', { ru: 'обязательная страховка', en: 'compulsory insurance' }],
              ['la responsabilidad civil', { ru: 'гражданская ответственность', en: 'third-party liability' }],
              ['el titular', { ru: 'владелец (на кого записана)', en: 'registered keeper' }],
              ['la matrícula', { ru: 'номерной знак', en: 'number plate' }],
              ['la Jefatura de Tráfico', { ru: 'управление DGT', en: 'traffic office' }],
              ['el conductor novel', { ru: 'водитель-новичок', en: 'novice driver' }],
              ['renovar', { ru: 'продлить', en: 'to renew' }],
              ['caducar', { ru: 'истечь (о сроке)', en: 'to expire' }],
              ['compulsar', { ru: 'заверить копию', en: 'to certify a copy' }],
              ['la multa', { ru: 'штраф', en: 'fine' }],
              ['la infracción grave', { ru: 'серьёзное нарушение', en: 'serious offence' }],
              ['perder puntos', { ru: 'потерять баллы', en: 'to lose points' }],
              ['el curso de sensibilización', { ru: 'курс для возврата баллов', en: 'points recovery course' }],
              ['inmovilizar', { ru: 'задержать машину', en: 'to impound' }]
            ]
          }
        ]
      }
    ],
    questions: [
      {
        id: 'do-01',
        es: '¿Qué documentos debe llevar en el vehículo cuando conduce?',
        tr: { ru: 'Какие документы нужно иметь в машине во время езды?', en: 'Which documents must you carry when driving?' },
        options: [
          { es: 'Permiso de conducir, permiso de circulación, tarjeta ITV y justificante del seguro.', ru: 'Права, свидетельство о регистрации, карту ITV и квитанцию страховки.', en: 'Licence, registration certificate, ITV card and proof of insurance.' },
          { es: 'Solo el permiso de conducir.', ru: 'Только права.', en: 'Only the licence.' },
          { es: 'El DNI y el contrato de compra.', ru: 'Удостоверение личности и договор купли-продажи.', en: 'ID card and the purchase contract.' }
        ],
        answer: 0,
        explain: { ru: 'Четыре документа: права, свидетельство о регистрации, карта техосмотра и подтверждение страховки — оригиналы, заверенные копии или в miDGT.', en: 'Four documents: licence, registration, ITV card and proof of insurance — originals, certified copies or in miDGT.' },
        hint: { ru: 'Водитель, машина, техосмотр, страховка — четыре бумаги.', en: 'Driver, car, inspection, insurance — four papers.' },
        ref: 'DGT, Manual básico, tema 2'
      },
      {
        id: 'do-02',
        es: '¿Puede llevar fotocopias de los documentos en lugar de los originales?',
        tr: { ru: 'Можно ли возить копии документов вместо оригиналов?', en: 'May you carry photocopies instead of the originals?' },
        options: [
          { es: 'Sí, si están compulsadas por un organismo oficial.', ru: 'Да, если они заверены официальным органом.', en: 'Yes, if certified by an official body.' },
          { es: 'Sí, cualquier fotocopia.', ru: 'Да, любые копии.', en: 'Yes, any photocopy.' },
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' }
        ],
        answer: 0,
        explain: { ru: 'Копия годится, только если она заверена (compulsada) официальным органом или нотариусом.', en: 'A copy is valid only if certified (compulsada) by an official body or notary.' },
        hint: { ru: 'Копия — только с печатью.', en: 'A copy only with a stamp.' },
        ref: 'DGT, Manual básico, tema 2'
      },
      {
        id: 'do-03',
        es: '¿A qué edad se puede obtener el permiso de la clase B?',
        tr: { ru: 'С какого возраста можно получить права категории B?', en: 'From what age can you get a category B licence?' },
        options: [
          { es: 'A los 18 años.', ru: 'С 18 лет.', en: 'At 18.' },
          { es: 'A los 17 años.', ru: 'С 17 лет.', en: 'At 17.' },
          { es: 'A los 16 años.', ru: 'С 16 лет.', en: 'At 16.' }
        ],
        answer: 0,
        explain: { ru: 'Права B — с 18 лет.', en: 'A B licence from 18.' },
        hint: { ru: 'Машина — со совершеннолетия.', en: 'Cars — from adulthood.' },
        ref: 'Reglamento General de Conductores, art. 4'
      },
      {
        id: 'do-04',
        es: '¿Qué edad mínima se exige para el permiso A1?',
        tr: { ru: 'Какой минимальный возраст для прав A1?', en: 'What is the minimum age for an A1 licence?' },
        options: [
          { es: '16 años.', ru: '16 лет.', en: '16.' },
          { es: '15 años.', ru: '15 лет.', en: '15.' },
          { es: '18 años.', ru: '18 лет.', en: '18.' }
        ],
        answer: 0,
        explain: { ru: 'AM — 15, A1 — 16, A2 — 18, A — 20 (или 2 года с A2).', en: 'AM — 15, A1 — 16, A2 — 18, A — 20 (or 2 years with A2).' },
        hint: { ru: 'Лестница 15 → 16 → 18 → 20.', en: 'Ladder 15 → 16 → 18 → 20.' },
        ref: 'Reglamento General de Conductores, art. 4'
      },
      {
        id: 'do-05',
        es: '¿Qué motocicletas autoriza a conducir el permiso A2?',
        tr: { ru: 'Какие мотоциклы разрешают водить права A2?', en: 'Which motorbikes does an A2 licence allow?' },
        options: [
          { es: 'Las de potencia máxima de 35 kW.', ru: 'Мощностью до 35 кВт.', en: 'Up to 35 kW of power.' },
          { es: 'Las de hasta 125 cc.', ru: 'До 125 см³.', en: 'Up to 125 cc.' },
          { es: 'Cualquier motocicleta.', ru: 'Любые.', en: 'Any motorbike.' }
        ],
        answer: 0,
        explain: { ru: 'A1 — до 125 см³ и 11 кВт; A2 — до 35 кВт; A — без ограничений.', en: 'A1 — up to 125 cc and 11 kW; A2 — up to 35 kW; A — unlimited.' },
        hint: { ru: 'A2 — «тридцать пять».', en: 'A2 — thirty-five.' },
        ref: 'Reglamento General de Conductores, art. 4'
      },
      {
        id: 'do-06',
        es: 'Con el permiso B, ¿qué remolque puede llevar un turismo?',
        tr: { ru: 'Какой прицеп можно тянуть легковой с правами B?', en: 'With a B licence, what trailer may a car tow?' },
        options: [
          { es: 'Un remolque ligero, de hasta 750 kg de masa máxima.', ru: 'Лёгкий, до 750 кг полной массы.', en: 'A light one, up to 750 kg maximum mass.' },
          { es: 'Cualquier remolque.', ru: 'Любой.', en: 'Any trailer.' },
          { es: 'Ninguno; se necesita siempre el B+E.', ru: 'Никакой: всегда нужны B+E.', en: 'None; B+E is always needed.' }
        ],
        answer: 0,
        explain: { ru: 'С правами B — прицеп до 750 кг (и при некоторых условиях тяжелее). Для прицепа до 3500 кг нужна категория B+E.', en: 'With B — a trailer up to 750 kg (and heavier under conditions). For up to 3,500 kg you need B+E.' },
        hint: { ru: 'B — «750», B+E — «3500».', en: 'B — 750, B+E — 3,500.' },
        ref: 'Reglamento General de Conductores, art. 4'
      },
      {
        id: 'do-07',
        es: '¿Durante cuánto tiempo debe llevar la placa «L» un conductor novel?',
        tr: { ru: 'Сколько времени новичок возит табличку «L»?', en: 'How long must a novice display the “L” plate?' },
        options: [
          { es: 'Durante el primer año.', ru: 'Первый год.', en: 'For the first year.' },
          { es: 'Durante los tres primeros años.', ru: 'Первые три года.', en: 'For the first three years.' },
          { es: 'Seis meses.', ru: 'Полгода.', en: 'Six months.' }
        ],
        answer: 0,
        explain: { ru: 'Зелёная табличка с белой «L» сзади на стекле — первый год после получения прав.', en: 'A green plate with a white “L” on the rear window — for the first year after qualifying.' },
        hint: { ru: 'L — learner на один год.', en: 'L — learner for one year.' },
        ref: 'Reglamento General de Conductores'
      },
      {
        id: 'do-08',
        es: '¿Cada cuánto tiempo se renueva el permiso B de un conductor de 40 años?',
        tr: { ru: 'Как часто продлевают права B водителю 40 лет?', en: 'How often is a 40-year-old’s B licence renewed?' },
        options: [
          { es: 'Cada 10 años.', ru: 'Каждые 10 лет.', en: 'Every 10 years.' },
          { es: 'Cada 5 años.', ru: 'Каждые 5 лет.', en: 'Every 5 years.' },
          { es: 'Cada 2 años.', ru: 'Каждые 2 года.', en: 'Every 2 years.' }
        ],
        answer: 0,
        explain: { ru: 'До 65 лет — каждые 10 лет, после 65 — каждые 5 лет.', en: 'Up to 65 — every 10 years; after 65 — every 5 years.' },
        hint: { ru: '10 до пенсии, 5 после.', en: '10 until retirement, 5 after.' },
        ref: 'Reglamento General de Conductores, art. 12'
      },
      {
        id: 'do-09',
        es: '¿Qué documento acredita que un vehículo está matriculado y autorizado para circular?',
        tr: { ru: 'Какой документ подтверждает, что машина зарегистрирована и допущена к движению?', en: 'Which document proves a vehicle is registered and allowed on the road?' },
        options: [
          { es: 'El permiso de circulación.', ru: 'Свидетельство о регистрации (permiso de circulación).', en: 'The registration certificate (permiso de circulación).' },
          { es: 'El permiso de conducir.', ru: 'Водительские права.', en: 'The driving licence.' },
          { es: 'La tarjeta ITV.', ru: 'Карта ITV.', en: 'The ITV card.' }
        ],
        answer: 0,
        explain: { ru: 'Permiso de circulación — документ машины (номер, владелец). Permiso de conducir — документ водителя.', en: 'The permiso de circulación belongs to the vehicle (plate, owner). The permiso de conducir belongs to the driver.' },
        hint: { ru: 'Circulación — машина «циркулирует», conducir — человек «водит».', en: 'Circulación — the car circulates; conducir — the person drives.' },
        ref: 'Reglamento General de Vehículos'
      },
      {
        id: 'do-10',
        es: 'Ha vendido su coche. ¿En qué plazo debe comunicarlo a Tráfico?',
        tr: { ru: 'Вы продали машину. В какой срок сообщить в DGT?', en: 'You’ve sold your car. Within what period must you tell Tráfico?' },
        options: [
          { es: 'En 10 días.', ru: 'В течение 10 дней.', en: 'Within 10 days.' },
          { es: 'En 3 meses.', ru: 'В течение 3 месяцев.', en: 'Within 3 months.' },
          { es: 'No hace falta comunicarlo.', ru: 'Сообщать не нужно.', en: 'No need to report it.' }
        ],
        answer: 0,
        explain: { ru: 'Продажу или передачу машины владелец сообщает в течение 10 дней; изменение своих данных (например, адреса) — в течение 15.', en: 'The owner reports a sale or transfer within 10 days; changed personal details (e.g. address) within 15.' },
        hint: { ru: 'Продал — 10, переехал — 15.', en: 'Sold — 10, moved — 15.' },
        ref: 'Reglamento General de Vehículos'
      },
      {
        id: 'do-11',
        es: '¿Cuándo debe pasar la primera ITV un turismo nuevo de uso particular?',
        tr: { ru: 'Когда новая частная легковая проходит первый техосмотр?', en: 'When does a new private car take its first ITV?' },
        options: [
          { es: 'A los 4 años.', ru: 'В 4 года.', en: 'At 4 years.' },
          { es: 'Al año.', ru: 'Через год.', en: 'After a year.' },
          { es: 'A los 10 años.', ru: 'В 10 лет.', en: 'At 10 years.' }
        ],
        answer: 0,
        explain: { ru: 'Легковая: первый ITV в 4 года, затем раз в 2 года, после 10 лет — каждый год.', en: 'A car: first ITV at 4 years, then every 2 years, yearly after 10.' },
        hint: { ru: '4 – 2 – 1: первый в 4, потом через 2, старше 10 — ежегодно.', en: '4 – 2 – 1: first at 4, then every 2, over 10 yearly.' },
        ref: 'RD 920/2017 (ITV)'
      },
      {
        id: 'do-12',
        es: 'Un turismo particular tiene 12 años. ¿Cada cuánto debe pasar la ITV?',
        tr: { ru: 'Частной легковой 12 лет. Как часто ей проходить ITV?', en: 'A private car is 12 years old. How often must it take the ITV?' },
        options: [
          { es: 'Cada año.', ru: 'Каждый год.', en: 'Every year.' },
          { es: 'Cada 2 años.', ru: 'Раз в 2 года.', en: 'Every 2 years.' },
          { es: 'Cada 6 meses.', ru: 'Каждые полгода.', en: 'Every 6 months.' }
        ],
        answer: 0,
        explain: { ru: 'Легковым старше 10 лет — техосмотр ежегодно.', en: 'Cars over 10 years old take the ITV every year.' },
        hint: { ru: 'Старше 10 — каждый год.', en: 'Over 10 — every year.' },
        ref: 'RD 920/2017 (ITV)'
      },
      {
        id: 'do-13',
        es: 'El vehículo supera la ITV. ¿Dónde se coloca el distintivo?',
        tr: { ru: 'Машина прошла ITV. Куда клеить наклейку?', en: 'The vehicle passes the ITV. Where does the sticker go?' },
        options: [
          { es: 'En el interior del parabrisas, en la parte superior derecha.', ru: 'Изнутри на лобовом стекле, справа вверху.', en: 'Inside the windscreen, top right.' },
          { es: 'En la luna trasera.', ru: 'На заднем стекле.', en: 'On the rear window.' },
          { es: 'En la matrícula.', ru: 'На номере.', en: 'On the number plate.' }
        ],
        answer: 0,
        explain: { ru: 'Наклейку ITV клеят изнутри в правом верхнем углу лобового стекла; протокол осмотра возят в машине.', en: 'The ITV sticker goes inside the windscreen, top right; carry the inspection report in the car.' },
        hint: { ru: 'Справа вверху — где видно полицейскому с тротуара.', en: 'Top right — visible to an officer from the pavement.' },
        ref: 'DGT, Manual básico, tema 2'
      },
      {
        id: 'do-14',
        es: 'En la ITV el vehículo tiene un defecto grave. ¿Qué ocurre?',
        tr: { ru: 'На ITV у машины нашли серьёзный дефект. Что дальше?', en: 'At the ITV the vehicle has a serious defect. What happens?' },
        options: [
          { es: 'Debe repararse y volver a inspeccionarse; no puede circular salvo para ir al taller y a la ITV.', ru: 'Нужно отремонтировать и пройти повторно; ездить можно только в мастерскую и на ITV.', en: 'It must be repaired and re-inspected; it may only be driven to the garage and the ITV.' },
          { es: 'Puede circular normalmente un año más.', ru: 'Можно ездить ещё год.', en: 'It may be driven normally for another year.' },
          { es: 'Se da de baja automáticamente.', ru: 'Машину автоматически снимают с учёта.', en: 'It is automatically deregistered.' }
        ],
        answer: 0,
        explain: { ru: 'С серьёзным дефектом машина не годна к движению; её ремонтируют и снова везут на осмотр.', en: 'With a serious defect the vehicle is unfit; it is repaired and re-inspected.' },
        hint: { ru: 'Не прошёл — в ремонт и назад.', en: 'Failed — fix it and come back.' },
        ref: 'RD 920/2017 (ITV)'
      },
      {
        id: 'do-15',
        es: '¿Quién es responsable de que el vehículo pase la ITV a tiempo?',
        tr: { ru: 'Кто отвечает за то, чтобы машина вовремя прошла ITV?', en: 'Who is responsible for the vehicle passing its ITV on time?' },
        options: [
          { es: 'El titular del vehículo.', ru: 'Владелец машины.', en: 'The registered owner.' },
          { es: 'El conductor que lo use ese día.', ru: 'Тот, кто сегодня за рулём.', en: 'Whoever drives it that day.' },
          { es: 'El taller.', ru: 'Мастерская.', en: 'The garage.' }
        ],
        answer: 0,
        explain: { ru: 'За документы, техосмотр и состояние машины отвечает владелец (titular).', en: 'The owner (titular) is responsible for documents, inspections and the vehicle’s condition.' },
        hint: { ru: 'Машина — забота хозяина.', en: 'The car is the owner’s job.' },
        ref: 'Ley de Tráfico, art. 11'
      },
      {
        id: 'do-16',
        es: '¿Qué daños cubre el seguro obligatorio de responsabilidad civil?',
        tr: { ru: 'Что покрывает обязательная страховка гражданской ответственности?', en: 'What does compulsory third-party insurance cover?' },
        options: [
          { es: 'Los daños causados a otras personas y a sus bienes.', ru: 'Ущерб другим людям и их имуществу.', en: 'Harm caused to other people and their property.' },
          { es: 'Las lesiones del propio conductor.', ru: 'Травмы самого водителя.', en: 'The driver’s own injuries.' },
          { es: 'Los daños de su propio vehículo.', ru: 'Ущерб своей машине.', en: 'Damage to your own vehicle.' }
        ],
        answer: 0,
        explain: { ru: 'ОСАГО-аналог защищает других: людей и имущество. Свои травмы и свою машину оно не покрывает.', en: 'It protects others: people and property. It doesn’t cover your own injuries or car.' },
        hint: { ru: 'Responsabilidad civil — за то, что вы сделали другим.', en: 'Civil liability — for what you did to others.' },
        ref: 'Ley de responsabilidad civil y seguro, art. 1'
      },
      {
        id: 'do-17',
        es: 'Circula sin el seguro obligatorio y le para un agente. ¿Qué puede ocurrir?',
        tr: { ru: 'Вы ездите без обязательной страховки, вас остановил полицейский. Что будет?', en: 'You drive without compulsory insurance and are stopped. What may happen?' },
        options: [
          { es: 'Le inmovilizarán el vehículo y le pondrán una multa.', ru: 'Машину задержат и выпишут штраф.', en: 'The vehicle is impounded and you are fined.' },
          { es: 'Solo un aviso verbal.', ru: 'Только устное предупреждение.', en: 'Only a verbal warning.' },
          { es: 'Nada, si el permiso está en regla.', ru: 'Ничего, если права в порядке.', en: 'Nothing, if your licence is valid.' }
        ],
        answer: 0,
        explain: { ru: 'Без страховки машину задерживают (inmovilización), владелец платит штраф и расходы на стоянку.', en: 'Without insurance the vehicle is impounded; the owner pays a fine and storage costs.' },
        hint: { ru: 'Нет страховки — нет езды.', en: 'No insurance — no driving.' },
        ref: 'Ley de responsabilidad civil y seguro'
      },
      {
        id: 'do-18',
        es: 'El seguro obligatorio, ¿cubre los daños a un pasajero de moto que no llevaba el casco obligatorio?',
        tr: { ru: 'Покрывает ли обязательная страховка травмы пассажира мотоцикла без обязательного шлема?', en: 'Does compulsory insurance cover a motorbike passenger injured without the required helmet?' },
        options: [
          { es: 'No, según el manual de la DGT.', ru: 'Нет, по пособию DGT.', en: 'No, according to the DGT manual.' },
          { es: 'Sí, siempre.', ru: 'Да, всегда.', en: 'Yes, always.' },
          { es: 'Sí, si el conductor llevaba casco.', ru: 'Да, если водитель был в шлеме.', en: 'Yes, if the rider wore one.' }
        ],
        answer: 0,
        explain: { ru: 'Пособие DGT перечисляет травмы людей без обязательного шлема среди того, что страховка не покрывает. Кроме того, водитель отвечает за пассажира без шлема.', en: 'The DGT manual lists injuries of people without a compulsory helmet among what insurance doesn’t cover. The rider is also liable for a helmetless passenger.' },
        hint: { ru: 'Без шлема — без защиты, и страховой тоже.', en: 'No helmet — no protection, from the insurer either.' },
        ref: 'DGT, Manual básico, tema 2'
      },
      {
        id: 'do-19',
        es: '¿En qué plazo debe comunicar un accidente a su aseguradora?',
        tr: { ru: 'В какой срок сообщить о ДТП в свою страховую?', en: 'Within what time must you report a crash to your insurer?' },
        options: [
          { es: 'En 7 días.', ru: 'В течение 7 дней.', en: 'Within 7 days.' },
          { es: 'En 30 días.', ru: 'В течение 30 дней.', en: 'Within 30 days.' },
          { es: 'En 24 horas.', ru: 'В течение 24 часов.', en: 'Within 24 hours.' }
        ],
        answer: 0,
        explain: { ru: 'О ДТП нужно сообщить своей страховой не позднее 7 дней.', en: 'Report the crash to your insurer within 7 days.' },
        hint: { ru: 'Неделя на звонок страховой.', en: 'A week to call the insurer.' },
        ref: 'Ley de contrato de seguro, art. 16'
      },
      {
        id: 'do-20',
        es: 'Un menor de 17 años comete una infracción con su ciclomotor. ¿Quién paga la multa?',
        tr: { ru: 'Подросток 17 лет нарушил правила на мопеде. Кто платит штраф?', en: 'A 17-year-old commits an offence on a moped. Who pays the fine?' },
        options: [
          { es: 'Sus padres o tutores, solidariamente.', ru: 'Родители или опекуны (солидарно).', en: 'Parents or guardians, jointly.' },
          { es: 'Nadie, por ser menor.', ru: 'Никто: он несовершеннолетний.', en: 'Nobody, as he is a minor.' },
          { es: 'El fabricante del ciclomotor.', ru: 'Производитель мопеда.', en: 'The moped manufacturer.' }
        ],
        answer: 0,
        explain: { ru: 'За нарушения несовершеннолетнего отвечают вместе с ним родители или опекуны.', en: 'Parents or guardians are jointly liable for a minor’s offences.' },
        hint: { ru: 'До 18 — платит семья.', en: 'Under 18 — the family pays.' },
        ref: 'Ley de Tráfico, art. 82'
      },
      {
        id: 'do-21',
        es: '¿Cuántos puntos tiene un conductor al obtener por primera vez el permiso?',
        tr: { ru: 'Сколько баллов у водителя, впервые получившего права?', en: 'How many points does a driver have on first getting a licence?' },
        options: [
          { es: '8 puntos.', ru: '8 баллов.', en: '8 points.' },
          { es: '12 puntos.', ru: '12 баллов.', en: '12 points.' },
          { es: '15 puntos.', ru: '15 баллов.', en: '15 points.' }
        ],
        answer: 0,
        explain: { ru: 'Новичок получает 8 баллов; через 2 года без нарушений — 12.', en: 'A new driver starts with 8 points; after 2 clean years — 12.' },
        hint: { ru: '8 → 12 → 14 → 15.', en: '8 → 12 → 14 → 15.' },
        ref: 'DGT, Manual básico, anexo de puntos'
      },
      {
        id: 'do-22',
        es: '¿Cuál es el número máximo de puntos que puede tener un conductor?',
        tr: { ru: 'Какое максимальное число баллов у водителя?', en: 'What is the maximum number of points a driver can have?' },
        options: [
          { es: '15.', ru: '15.', en: '15.' },
          { es: '12.', ru: '12.', en: '12.' },
          { es: '20.', ru: '20.', en: '20.' }
        ],
        answer: 0,
        explain: { ru: '12 → через 3 года без нарушений 14 → ещё через 3 года 15. Это максимум.', en: '12 → 14 after 3 clean years → 15 after 3 more. That’s the maximum.' },
        hint: { ru: 'Потолок — 15.', en: 'The ceiling is 15.' },
        ref: 'DGT, Manual básico, anexo de puntos'
      },
      {
        id: 'do-23',
        es: '¿Cuántos puntos se pierden por conducir sujetando el teléfono móvil con la mano?',
        tr: { ru: 'Сколько баллов снимают за вождение с телефоном в руке?', en: 'How many points for driving while holding a mobile phone?' },
        options: [
          { es: '6 puntos.', ru: '6 баллов.', en: '6 points.' },
          { es: '3 puntos.', ru: '3 балла.', en: '3 points.' },
          { es: '2 puntos.', ru: '2 балла.', en: '2 points.' }
        ],
        answer: 0,
        explain: { ru: 'С 2022 года телефон в руке за рулём — 6 баллов.', en: 'Since 2022 a phone in hand while driving costs 6 points.' },
        hint: { ru: 'Телефон в руке — «шестёрка».', en: 'Phone in hand — a six.' },
        ref: 'Ley de Tráfico, anexo II'
      },
      {
        id: 'do-24',
        es: '¿Cuántos puntos se pierden por no utilizar el cinturón de seguridad?',
        tr: { ru: 'Сколько баллов снимают за непристёгнутый ремень?', en: 'How many points for not wearing a seat belt?' },
        options: [
          { es: '4 puntos.', ru: '4 балла.', en: '4 points.' },
          { es: '6 puntos.', ru: '6 баллов.', en: '6 points.' },
          { es: 'Ninguno, solo multa.', ru: 'Нисколько, только штраф.', en: 'None, just a fine.' }
        ],
        answer: 0,
        explain: { ru: 'Без ремня, шлема или детского кресла — 4 балла.', en: 'No belt, helmet or child seat — 4 points.' },
        hint: { ru: 'Защита не надета — четыре.', en: 'Protection not worn — four.' },
        ref: 'Ley de Tráfico, anexo II'
      },
      {
        id: 'do-25',
        es: '¿Cuántos puntos se pierden por conducir con auriculares conectados a un aparato de sonido?',
        tr: { ru: 'Сколько баллов снимают за наушники за рулём?', en: 'How many points for driving with headphones connected to a device?' },
        options: [
          { es: '3 puntos.', ru: '3 балла.', en: '3 points.' },
          { es: '6 puntos.', ru: '6 баллов.', en: '6 points.' },
          { es: '1 punto.', ru: '1 балл.', en: '1 point.' }
        ],
        answer: 0,
        explain: { ru: 'Наушники за рулём и антирадар-детектор — 3 балла. Телефон в руке — 6.', en: 'Headphones while driving and a radar detector — 3 points. Phone in hand — 6.' },
        hint: { ru: 'Уши закрыты — минус три.', en: 'Ears blocked — minus three.' },
        ref: 'Ley de Tráfico, anexo II'
      },
      {
        id: 'do-26',
        es: '¿Cuántos puntos pierde quien adelanta a un ciclista sin dejar 1,5 metros de separación?',
        tr: { ru: 'Сколько баллов теряет тот, кто обогнал велосипедиста ближе 1,5 м?', en: 'How many points for overtaking a cyclist with less than 1.5 m?' },
        options: [
          { es: '6 puntos.', ru: '6 баллов.', en: '6 points.' },
          { es: '2 puntos.', ru: '2 балла.', en: '2 points.' },
          { es: '4 puntos.', ru: '4 балла.', en: '4 points.' }
        ],
        answer: 0,
        explain: { ru: 'Обгон велосипедиста с опасностью или ближе 1,5 м — 6 баллов.', en: 'Overtaking a cyclist dangerously or closer than 1.5 m — 6 points.' },
        hint: { ru: 'Полтора метра — или шесть баллов.', en: 'One and a half metres — or six points.' },
        ref: 'Ley de Tráfico, anexo II'
      },
      {
        id: 'do-27',
        es: '¿Qué ocurre si pierde todos los puntos por primera vez?',
        tr: { ru: 'Что будет, если впервые потерять все баллы?', en: 'What happens if you lose all your points for the first time?' },
        options: [
          { es: 'No puede conducir durante 6 meses y debe hacer un curso y un examen para recuperar el permiso.', ru: '6 месяцев без прав, затем курс и экзамен.', en: 'No driving for 6 months, then a course and an exam to get it back.' },
          { es: 'Le devuelven 8 puntos al mes siguiente.', ru: 'Через месяц возвращают 8 баллов.', en: 'You get 8 points back next month.' },
          { es: 'Solo paga una multa.', ru: 'Только штраф.', en: 'Only a fine.' }
        ],
        answer: 0,
        explain: { ru: 'Права теряют силу: 6 месяцев (повторно в течение 3 лет — 12), затем курс 24 часа и экзамен в DGT.', en: 'The licence is void: 6 months (12 if again within 3 years), then a 24-hour course and a DGT exam.' },
        hint: { ru: 'Ноль баллов — полгода пешком.', en: 'Zero points — six months on foot.' },
        ref: 'DGT, Manual básico, anexo de puntos'
      },
      {
        id: 'do-28',
        es: 'Ha perdido algunos puntos, pero no todos. ¿Cómo puede recuperarlos?',
        tr: { ru: 'Вы потеряли часть баллов. Как их вернуть?', en: 'You have lost some points, but not all. How can you get them back?' },
        options: [
          { es: 'Sin cometer infracciones durante 2 años, o con un curso de 12 horas que devuelve hasta 6 puntos.', ru: '2 года без нарушений или курс 12 часов (до 6 баллов).', en: '2 years without offences, or a 12-hour course restoring up to 6 points.' },
          { es: 'Pagando una tasa en Tráfico.', ru: 'Заплатив пошлину в DGT.', en: 'By paying a fee at Tráfico.' },
          { es: 'No se pueden recuperar.', ru: 'Их нельзя вернуть.', en: 'They can’t be recovered.' }
        ],
        answer: 0,
        explain: { ru: 'Через 2 года без нарушений баланс восстанавливается; добровольный курс 12 часов возвращает до 6 баллов.', en: 'After 2 clean years the balance is restored; a voluntary 12-hour course restores up to 6 points.' },
        hint: { ru: 'Часть — 2 года или 12 часов.', en: 'Some points — 2 years or 12 hours.' },
        ref: 'DGT, Manual básico, anexo de puntos'
      },
      {
        id: 'do-29',
        es: '¿Cuántos puntos se pierden por negarse a las pruebas de alcohol o drogas?',
        tr: { ru: 'Сколько баллов снимают за отказ от теста на алкоголь или наркотики?', en: 'How many points for refusing an alcohol or drug test?' },
        options: [
          { es: '6 puntos.', ru: '6 баллов.', en: '6 points.' },
          { es: '4 puntos.', ru: '4 балла.', en: '4 points.' },
          { es: 'Ninguno, es un derecho.', ru: 'Нисколько: это ваше право.', en: 'None, it’s your right.' }
        ],
        answer: 0,
        explain: { ru: 'Отказ от проверки — 6 баллов, а также уголовное преступление.', en: 'Refusing the test costs 6 points and is also a criminal offence.' },
        hint: { ru: 'Отказ — как будто «пьян по максимуму».', en: 'Refusing counts as the worst case.' },
        ref: 'Ley de Tráfico, anexo II'
      },
      {
        id: 'do-30',
        es: '¿Quién es responsable de que el vehículo tenga la documentación en regla?',
        tr: { ru: 'Кто отвечает за то, чтобы документы машины были в порядке?', en: 'Who is responsible for the vehicle’s documents being in order?' },
        options: [
          { es: 'El titular del vehículo.', ru: 'Владелец (titular).', en: 'The registered owner (titular).' },
          { es: 'La compañía de seguros.', ru: 'Страховая компания.', en: 'The insurance company.' },
          { es: 'El último pasajero.', ru: 'Последний пассажир.', en: 'The last passenger.' }
        ],
        answer: 0,
        explain: { ru: 'Владелец отвечает за документы, техосмотр и техническое состояние машины.', en: 'The owner is responsible for documents, inspections and the vehicle’s condition.' },
        hint: { ru: 'Titular — титул и ответственность.', en: 'Titular — the title and the responsibility.' },
        ref: 'Ley de Tráfico, art. 11'
      }
    ]
  }
]);
