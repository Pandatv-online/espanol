// Driving theory (DGT): the driver's condition — fatigue, sleepiness, alcohol, drugs, medicines, distractions.
// RGC arts. 18, 20–28; Código Penal art. 379; DGT «Manual básico», Tema 3.
ECA.data.addDgt([
  {
    id: 'conductor',
    cats: ['A', 'B'],
    title: { ru: 'Алкоголь, усталость, отвлечения', en: 'Alcohol, fatigue, distractions' },
    summary: {
      ru: 'Допустимый алкоголь, наркотики и лекарства, усталость и сонливость, телефон, навигатор, еда и одежда за рулём.',
      en: 'Alcohol limits, drugs and medicines, fatigue and sleepiness, phone, satnav, food and clothing at the wheel.'
    },
    hero: {
      es: 'El <b>estado</b> del conductor',
      sub: { ru: 'Водитель — главная деталь машины', en: 'The driver is the car’s most important part' }
    },
    tabs: [
      {
        id: 'alcohol',
        label: { ru: 'Алкоголь', en: 'Alcohol' },
        blocks: [
          {
            type: 'table', heading: { ru: 'Допустимые нормы', en: 'Legal limits' },
            head: [{ ru: 'Водитель', en: 'Driver' }, { ru: 'Кровь', en: 'Blood' }, { ru: 'Выдох', en: 'Breath' }],
            rows: [
              [{ ru: 'Обычный', en: 'General' }, '0,5 g/l', '0,25 mg/l'],
              [{ ru: 'Новичок до 2 лет, профи', en: 'Novice < 2 yrs, professional' }, '0,3 g/l', '0,15 mg/l'],
              [{ ru: 'Уголовное преступление', en: 'Criminal offence' }, '> 1,2 g/l', '> 0,60 mg/l']
            ]
          },
          {
            type: 'text',
            body: {
              ru: ['«Профи» — это грузовики > 3500 кг, автобусы > 9 мест, перевозка детей, экстренные службы, опасные грузы. Безопасная норма на самом деле одна — <b>0,0</b>.', 'Пик алкоголя в крови — примерно через <b>час</b> после выпитого, потом снижается медленно. Ни кофе, ни душ, ни сон «на пару часов» его не выводят — во сне алкоголь выводится даже медленнее.'],
              en: ['“Professional” means lorries > 3,500 kg, buses > 9 seats, carrying children, emergency services, dangerous goods. The only truly safe level is <b>0.0</b>.', 'Blood alcohol peaks about <b>an hour</b> after drinking, then falls slowly. Coffee, a shower or a short sleep don’t clear it — it clears even more slowly while you sleep.']
            }
          },
          {
            type: 'rules', heading: { ru: 'Сильнее действует, если…', en: 'It hits harder if…' },
            items: [
              { color: 'coral', title: { ru: 'Натощак и быстро', en: 'Empty stomach, fast drinking' }, es: 'beber <b>sin comer</b> y deprisa', body: { ru: 'Еда замедляет всасывание; медленное питьё помогает организму.', en: 'Food slows absorption; drinking slowly helps the body.' } },
              { color: 'amber', title: { ru: 'Крепкое и с газировкой', en: 'Spirits and fizzy mixers' }, es: 'destilados, mezclados con <b>refrescos</b>', body: { ru: 'Джин, виски, смеси с тоником всасываются быстрее вина и пива.', en: 'Gin, whisky, mixes with tonic are absorbed faster than wine or beer.' } },
              { color: 'purple', title: { ru: 'Кто пьёт', en: 'Who drinks' }, es: 'personas <b>delgadas</b>, mujeres, menores de 18 y mayores de 65', body: { ru: 'Сильнее действует на худых, на женщин, на младше 18 и старше 65, при стрессе, болезни, беременности.', en: 'Stronger on slim people, women, under-18s and over-65s, under stress, illness, pregnancy.' } }
            ]
          },
          {
            type: 'rules', heading: { ru: 'Что делает алкоголь', en: 'What alcohol does' },
            items: [
              { color: 'blue', title: { ru: 'Ложная уверенность', en: 'False confidence' }, es: 'falsa <b>seguridad</b>, más riesgos', body: { ru: 'Чувствуете себя увереннее, рискуете больше, агрессивнее.', en: 'You feel surer, take more risks, act more aggressively.' } },
              { color: 'teal', title: { ru: 'Зрение', en: 'Vision' }, es: 'peor cálculo de <b>distancias</b>, más deslumbramiento', body: { ru: 'Хуже видите знаки, хуже оцениваете расстояние, сужается поле зрения, сильнее слепят фары.', en: 'You see signs worse, misjudge distances, your field of view narrows, headlights dazzle more.' } },
              { color: 'amber', title: { ru: 'Реакция', en: 'Reaction' }, es: 'más <b>tiempo de reacción</b>', body: { ru: 'Медленнее реагируете, хуже координация, чаще ошибочные решения.', en: 'Slower reactions, poorer coordination, more wrong decisions.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: ['<b>Выдох = кровь пополам</b>: 0,5 → 0,25; 0,3 → 0,15. Уголовка — <b>больше 0,60</b> (вдвое выше 0,25 плюс ещё).', '<b>Новичок и профи — «0,15»</b>: почти ноль.'],
              en: ['<b>Breath = blood halved</b>: 0.5 → 0.25; 0.3 → 0.15. Criminal — <b>over 0.60</b>.', '<b>Novices and professionals — 0.15</b>: almost zero.']
            }
          }
        ]
      },
      {
        id: 'drogas',
        label: { ru: 'Наркотики', en: 'Drugs' },
        blocks: [
          {
            type: 'text',
            body: {
              ru: ['Водить с <b>любым</b> наличием наркотика в организме запрещено — нормы нет. Исключение — лекарства по рецепту, не влияющие на вождение.', 'Проверка: алкоголь — по выдоху (повторный тест для подтверждения), наркотики — по <b>слюне</b>. Не согласны — можно потребовать анализ крови. Отказ от теста — 6 баллов и уголовное преступление.'],
              en: ['Driving with <b>any</b> drug present in the body is banned — there is no limit. Exception: prescribed medicines that don’t affect driving.', 'Testing: alcohol — breath (a second test confirms), drugs — <b>saliva</b>. If you disagree you may ask for a blood test. Refusing costs 6 points and is a crime.']
            }
          },
          {
            type: 'table', heading: { ru: 'Кто обязан пройти тест', en: 'Who must be tested' },
            head: [{ ru: 'Ситуация', en: 'Situation' }],
            rows: [
              [{ ru: 'Водитель — участник ДТП', en: 'A driver involved in a crash' }],
              [{ ru: 'Есть признаки опьянения', en: 'Signs of intoxication' }],
              [{ ru: 'Совершил нарушение', en: 'Committed an offence' }],
              [{ ru: 'Плановый контроль', en: 'A routine checkpoint' }],
              [{ ru: 'Пешеход, вызвавший опасность', en: 'A pedestrian who caused danger' }]
            ]
          },
          {
            type: 'table', heading: { ru: 'Лекарства, опасные за рулём', en: 'Medicines risky for driving' },
            head: [{ ru: 'Лекарство', en: 'Medicine' }, { ru: 'Эффект', en: 'Effect' }],
            rows: [
              [{ ru: 'Обезболивающие', en: 'Painkillers' }, { ru: 'Сонливость, головокружение', en: 'Drowsiness, dizziness' }],
              [{ ru: 'От кашля', en: 'Cough medicine' }, { ru: 'Хуже рефлексы', en: 'Slower reflexes' }],
              [{ ru: 'Антигистаминные', en: 'Antihistamines' }, { ru: 'Сонливость', en: 'Drowsiness' }],
              [{ ru: 'Психотропные', en: 'Psychotropics' }, { ru: 'Сон, мутное зрение', en: 'Sleepiness, blurred vision' }]
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>Наркотики — «ноль без запятой»</b>: даже следы. Лекарства — спросите врача и смотрите на пиктограмму автомобиля на упаковке.',
              en: '<b>Drugs — a flat zero</b>: even traces. Medicines — ask your doctor and look for the car pictogram on the box.'
            }
          }
        ]
      },
      {
        id: 'fatiga',
        label: { ru: 'Усталость', en: 'Fatigue' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'amber', title: { ru: 'Признаки усталости', en: 'Signs of fatigue' }, es: 'ojos pesados, <b>cambios de postura</b>, irritabilidad', body: { ru: 'Тяжелеют глаза, трудно сосредоточиться, ёрзаете на сиденье, раздражение, медленные движения.', en: 'Heavy eyes, poor concentration, shifting in the seat, irritability, slow movements.' } },
              { color: 'coral', title: { ru: 'Признаки сонливости', en: 'Signs of sleepiness' }, es: '<b>bostezos</b>, no recordar los últimos km', body: { ru: 'Зеваете, трудно держать голову и глаза, не помните последние километры, выезжаете из полосы, пропускаете знаки и съезды.', en: 'Yawning, struggling to keep head up and eyes open, not remembering the last kilometres, drifting out of lane, missing signs and exits.' } },
              { color: 'teal', title: { ru: 'Что делать', en: 'What to do' }, es: 'parar y <b>dormir 20–30 min</b>', body: { ru: 'При первых признаках — остановиться в безопасном месте и поспать 20–30 минут. Кофе и открытое окно не помогают надолго.', en: 'At the first signs, stop somewhere safe and sleep 20–30 minutes. Coffee and an open window don’t help for long.' } },
              { color: 'blue', title: { ru: 'Профилактика', en: 'Prevention' }, es: 'descanso cada <b>2 horas o 200 km</b>', body: { ru: 'Отдыхать 20–30 минут каждые 2 часа или 200 км, даже если не устали. В салоне около 23 °C.', en: 'Rest 20–30 minutes every 2 hours or 200 km, even if not tired. Keep the cabin around 23 °C.' } }
            ]
          },
          {
            type: 'text',
            body: {
              ru: ['Сонливость вызывают недосып, сбитый режим, пустая монотонная дорога, алкоголь и лекарства, а также раннее утро и время после обеда.', 'Перед поездкой — лёгкая еда (тяжёлая клонит в сон), подождать 15–20 минут после еды, пить воду. Удобная одежда, без пальто, обувь удобная — не шлёпанцы и не каблуки.'],
              en: ['Sleepiness comes from too little sleep, a changed routine, an empty monotonous road, alcohol and medicines, and the early morning and after-lunch hours.', 'Before a trip — eat light (heavy food makes you drowsy), wait 15–20 minutes after eating, drink water. Comfortable clothes, no coat, sensible shoes — not flip-flops or heels.']
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>«2 – 200 – 20»</b>: каждые 2 часа или 200 км — 20 минут отдыха.',
              en: '<b>“2 – 200 – 20”</b>: every 2 hours or 200 km — a 20-minute break.'
            }
          }
        ]
      },
      {
        id: 'distracciones',
        label: { ru: 'Отвлечения', en: 'Distractions' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'coral', title: { ru: 'Телефон', en: 'Phone' }, es: 'prohibido el móvil en la <b>mano</b>', body: { ru: 'Держать телефон в руке за рулём запрещено (6 баллов). Риск ДТП с телефоном — в 4 раза выше. Громкая связь разрешена, но тоже отвлекает: лучше остановиться.', en: 'Holding a phone while driving is banned (6 points). Crash risk is 4 times higher. Hands-free is allowed but still distracts: better to stop.' } },
              { color: 'amber', title: { ru: 'Наушники', en: 'Headphones' }, es: '<b>auriculares</b> conectados: prohibido', body: { ru: 'Наушники, подключённые к устройству, запрещены (3 балла).', en: 'Headphones connected to a device are banned (3 points).' } },
              { color: 'blue', title: { ru: 'Навигатор', en: 'Satnav' }, es: 'programar el <b>GPS</b> antes de salir', body: { ru: 'Настройте до поездки, закрепите там, где видно не отводя взгляда, и не в зоне раскрытия подушки безопасности.', en: 'Set it before you go, mount it where you see it without looking away, and clear of the airbags.' } },
              { color: 'purple', title: { ru: 'Курение', en: 'Smoking' }, es: '<b>fumar</b> duplica los accidentes', body: { ru: 'Курящие за рулём попадают в ДТП вдвое чаще: заняты рука и внимание, дым.', en: 'Drivers who smoke crash twice as often: a hand and attention busy, smoke.' } }
            ]
          },
          {
            type: 'text',
            body: {
              ru: 'Отвлечения чаще всего у водителей 18–25 лет и старше 70, когда в машине много людей, летом, в выходные, на трассах и автомагистралях.',
              en: 'Distraction crashes are most common among drivers aged 18–25 and over 70, with several people in the car, in summer, at weekends, on rural roads and motorways.'
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>Телефон в руке — шесть, наушники — три.</b> Хочешь поговорить — остановись.',
              en: '<b>Phone in hand — six, headphones — three.</b> Want to talk — pull over.'
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
              ['la tasa de alcoholemia', { ru: 'уровень алкоголя', en: 'blood alcohol level' }],
              ['el aire espirado', { ru: 'выдыхаемый воздух', en: 'exhaled air' }],
              ['soplar', { ru: 'дуть (в прибор)', en: 'to blow' }],
              ['el control de alcoholemia', { ru: 'проверка на алкоголь', en: 'alcohol checkpoint' }],
              ['la muestra de saliva', { ru: 'проба слюны', en: 'saliva sample' }],
              ['negarse a la prueba', { ru: 'отказаться от теста', en: 'to refuse the test' }],
              ['el delito', { ru: 'уголовное преступление', en: 'criminal offence' }],
              ['la fatiga', { ru: 'усталость', en: 'fatigue' }],
              ['la somnolencia', { ru: 'сонливость', en: 'drowsiness' }],
              ['bostezar', { ru: 'зевать', en: 'to yawn' }],
              ['el tiempo de reacción', { ru: 'время реакции', en: 'reaction time' }],
              ['el medicamento', { ru: 'лекарство', en: 'medicine' }],
              ['la receta', { ru: 'рецепт врача', en: 'prescription' }],
              ['el manos libres', { ru: 'громкая связь', en: 'hands-free' }],
              ['los auriculares', { ru: 'наушники', en: 'headphones' }],
              ['el navegador', { ru: 'навигатор', en: 'satnav' }],
              ['la distracción', { ru: 'отвлечение', en: 'distraction' }]
            ]
          }
        ]
      }
    ],
    questions: [
      {
        id: 'co-01',
        es: '¿Cuál es la tasa máxima de alcohol en aire espirado para un conductor en general?',
        tr: { ru: 'Какая максимальная норма алкоголя в выдохе для обычного водителя?', en: 'What is the maximum breath alcohol for a general driver?' },
        options: [
          { es: '0,25 mg/l.', ru: '0,25 мг/л.', en: '0.25 mg/l.' },
          { es: '0,50 mg/l.', ru: '0,50 мг/л.', en: '0.50 mg/l.' },
          { es: '0,15 mg/l.', ru: '0,15 мг/л.', en: '0.15 mg/l.' }
        ],
        answer: 0,
        explain: { ru: 'Обычный водитель: 0,25 мг/л в выдохе (0,5 г/л в крови). Новичок и профи: 0,15 мг/л (0,3 г/л).', en: 'General driver: 0.25 mg/l breath (0.5 g/l blood). Novice and professional: 0.15 mg/l (0.3 g/l).' },
        hint: { ru: 'Выдох — половина крови: 0,5 → 0,25.', en: 'Breath is half the blood: 0.5 → 0.25.' },
        ref: 'RGC, art. 20'
      },
      {
        id: 'co-02',
        es: '¿Cuál es la tasa máxima de alcohol en sangre para un conductor en general?',
        tr: { ru: 'Какая максимальная норма алкоголя в крови для обычного водителя?', en: 'What is the maximum blood alcohol for a general driver?' },
        options: [
          { es: '0,5 g/l.', ru: '0,5 г/л.', en: '0.5 g/l.' },
          { es: '0,3 g/l.', ru: '0,3 г/л.', en: '0.3 g/l.' },
          { es: '0,8 g/l.', ru: '0,8 г/л.', en: '0.8 g/l.' }
        ],
        answer: 0,
        explain: { ru: '0,5 грамма на литр крови для обычного водителя; 0,3 — для новичков и профессионалов.', en: '0.5 g per litre of blood for general drivers; 0.3 for novices and professionals.' },
        hint: { ru: 'Кровь — «пол-грамма».', en: 'Blood — half a gram.' },
        ref: 'RGC, art. 20'
      },
      {
        id: 'co-03',
        es: 'Obtuvo el permiso hace un año. ¿Cuál es su tasa máxima de alcohol en aire espirado?',
        tr: { ru: 'Вы получили права год назад. Какая у вас норма алкоголя в выдохе?', en: 'You got your licence a year ago. What is your maximum breath alcohol?' },
        options: [
          { es: '0,15 mg/l.', ru: '0,15 мг/л.', en: '0.15 mg/l.' },
          { es: '0,25 mg/l.', ru: '0,25 мг/л.', en: '0.25 mg/l.' },
          { es: '0,00 mg/l.', ru: '0,00 мг/л.', en: '0.00 mg/l.' }
        ],
        answer: 0,
        explain: { ru: 'Водитель со стажем меньше двух лет: 0,15 мг/л в выдохе (0,3 г/л в крови).', en: 'A driver with under two years’ experience: 0.15 mg/l breath (0.3 g/l blood).' },
        hint: { ru: 'Новичок — 0,15.', en: 'Novice — 0.15.' },
        ref: 'RGC, art. 20'
      },
      {
        id: 'co-04',
        es: '¿Para qué conductores la tasa máxima es de 0,3 g/l en sangre?',
        tr: { ru: 'Для каких водителей норма 0,3 г/л в крови?', en: 'For which drivers is the limit 0.3 g/l in blood?' },
        options: [
          { es: 'Noveles con menos de dos años y profesionales, como conductores de autobús.', ru: 'Новичков до двух лет и профессионалов, например водителей автобусов.', en: 'Novices under two years and professionals, such as bus drivers.' },
          { es: 'Mayores de 65 años.', ru: 'Старше 65 лет.', en: 'Over-65s.' },
          { es: 'Motoristas.', ru: 'Мотоциклистов.', en: 'Motorcyclists.' }
        ],
        answer: 0,
        explain: { ru: 'Строже норма у новичков (до 2 лет) и профессионалов: грузовики > 3500 кг, автобусы > 9 мест, перевозка детей, экстренные службы, опасные грузы.', en: 'Stricter limits apply to novices (under 2 years) and professionals: lorries > 3,500 kg, buses > 9 seats, carrying children, emergency services, dangerous goods.' },
        hint: { ru: 'Новичок и профи — «0,3 и 0,15».', en: 'Novice and pro — 0.3 and 0.15.' },
        ref: 'RGC, art. 20'
      },
      {
        id: 'co-05',
        es: '¿A partir de qué tasa de alcohol en aire espirado conducir es delito?',
        tr: { ru: 'С какого уровня алкоголя в выдохе вождение — уголовное преступление?', en: 'From what breath alcohol level is driving a criminal offence?' },
        options: [
          { es: 'Más de 0,60 mg/l.', ru: 'Больше 0,60 мг/л.', en: 'Over 0.60 mg/l.' },
          { es: 'Más de 0,25 mg/l.', ru: 'Больше 0,25 мг/л.', en: 'Over 0.25 mg/l.' },
          { es: 'Más de 1 mg/l.', ru: 'Больше 1 мг/л.', en: 'Over 1 mg/l.' }
        ],
        answer: 0,
        explain: { ru: 'Больше 0,60 мг/л в выдохе (1,2 г/л в крови) — уголовное преступление: штраф, лишение прав, возможна тюрьма.', en: 'Over 0.60 mg/l breath (1.2 g/l blood) is a crime: fine, licence ban, possibly prison.' },
        hint: { ru: '0,60 — «уголовная планка».', en: '0.60 — the criminal bar.' },
        ref: 'Código Penal, art. 379'
      },
      {
        id: 'co-06',
        es: '¿Cuándo alcanza el alcohol su concentración máxima en sangre?',
        tr: { ru: 'Когда алкоголь в крови достигает максимума?', en: 'When does blood alcohol reach its peak?' },
        options: [
          { es: 'Aproximadamente una hora después de beber.', ru: 'Примерно через час после выпитого.', en: 'About an hour after drinking.' },
          { es: 'Inmediatamente al beber.', ru: 'Сразу.', en: 'Immediately.' },
          { es: 'A las 6 horas.', ru: 'Через 6 часов.', en: 'After 6 hours.' }
        ],
        answer: 0,
        explain: { ru: 'Максимум примерно через час, потом уровень снижается очень медленно.', en: 'It peaks about an hour later, then falls very slowly.' },
        hint: { ru: 'Час — пик, дальше — медленный спуск.', en: 'An hour — the peak, then a slow descent.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'co-07',
        es: '¿Qué ayuda a eliminar el alcohol del organismo más rápido?',
        tr: { ru: 'Что помогает быстрее вывести алкоголь из организма?', en: 'What helps clear alcohol from the body faster?' },
        options: [
          { es: 'Nada; solo el paso del tiempo.', ru: 'Ничего: только время.', en: 'Nothing; only time.' },
          { es: 'Tomar café.', ru: 'Кофе.', en: 'Drinking coffee.' },
          { es: 'Dormir un par de horas.', ru: 'Поспать пару часов.', en: 'Sleeping for a couple of hours.' }
        ],
        answer: 0,
        explain: { ru: 'Кофе, душ, свежий воздух не ускоряют выведение. Во сне алкоголь выводится даже медленнее, поэтому «поспал пару часов» не значит трезв.', en: 'Coffee, a shower or fresh air don’t speed it up. Alcohol clears even more slowly during sleep, so a short nap doesn’t make you sober.' },
        hint: { ru: 'Алкоголь уходит только с часами.', en: 'Alcohol leaves only with the hours.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'co-08',
        es: '¿En cuál de estas situaciones el alcohol pasa más rápido a la sangre?',
        tr: { ru: 'В какой ситуации алкоголь быстрее попадает в кровь?', en: 'In which situation does alcohol reach the blood faster?' },
        options: [
          { es: 'Al beber con el estómago vacío y mezclado con refrescos con gas.', ru: 'Натощак и вместе с газированными напитками.', en: 'On an empty stomach, mixed with fizzy drinks.' },
          { es: 'Al beber despacio durante una comida.', ru: 'Медленно во время еды.', en: 'Drinking slowly with a meal.' },
          { es: 'Al beber agua a la vez.', ru: 'Запивая водой.', en: 'Drinking water at the same time.' }
        ],
        answer: 0,
        explain: { ru: 'Быстрее всасывается натощак, крепкие напитки и смеси с газировкой. Еда и медленное питьё замедляют.', en: 'Absorption is faster on an empty stomach, with spirits and with fizzy mixers. Food and slow drinking slow it down.' },
        hint: { ru: 'Пузырьки «разгоняют» алкоголь.', en: 'Bubbles speed alcohol up.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'co-09',
        es: '¿Qué efecto produce el alcohol en el conductor?',
        tr: { ru: 'Как алкоголь действует на водителя?', en: 'What effect does alcohol have on a driver?' },
        options: [
          { es: 'Una falsa sensación de seguridad y un aumento del tiempo de reacción.', ru: 'Ложное чувство уверенности и более медленная реакция.', en: 'A false sense of confidence and a longer reaction time.' },
          { es: 'Mejora los reflejos.', ru: 'Улучшает рефлексы.', en: 'Better reflexes.' },
          { es: 'Amplía el campo visual.', ru: 'Расширяет поле зрения.', en: 'A wider field of view.' }
        ],
        answer: 0,
        explain: { ru: 'Алкоголь даёт ложную уверенность, тянет на риск, замедляет реакцию, сужает поле зрения, ухудшает оценку расстояний и усиливает ослепление.', en: 'Alcohol gives false confidence, encourages risk, slows reactions, narrows vision, worsens distance judgement and increases dazzle.' },
        hint: { ru: 'Кажется «лучше», а на деле хуже.', en: 'Feels better, is worse.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'co-10',
        es: '¿Se puede conducir con presencia de drogas en el organismo?',
        tr: { ru: 'Можно ли водить, если в организме есть наркотики?', en: 'May you drive with drugs present in your body?' },
        options: [
          { es: 'No, salvo sustancias prescritas que no afecten a la conducción.', ru: 'Нет, кроме выписанных врачом лекарств, не влияющих на вождение.', en: 'No, except prescribed substances that don’t affect driving.' },
          { es: 'Sí, si la cantidad es pequeña.', ru: 'Да, если немного.', en: 'Yes, if the amount is small.' },
          { es: 'Sí, si han pasado 12 horas.', ru: 'Да, если прошло 12 часов.', en: 'Yes, if 12 hours have passed.' }
        ],
        answer: 0,
        explain: { ru: 'Для наркотиков нормы нет: запрещено любое присутствие в организме (кроме лекарств по назначению врача, не влияющих на вождение).', en: 'There’s no drug limit: any presence is banned (except prescribed medicines that don’t affect driving).' },
        hint: { ru: 'Наркотики — ноль без запятой.', en: 'Drugs — a flat zero.' },
        ref: 'RGC, art. 27'
      },
      {
        id: 'co-11',
        es: '¿Cómo se detecta habitualmente el consumo de drogas en un control?',
        tr: { ru: 'Как обычно проверяют на наркотики на дороге?', en: 'How are drugs usually detected at a checkpoint?' },
        options: [
          { es: 'Con una muestra de saliva.', ru: 'По пробе слюны.', en: 'With a saliva sample.' },
          { es: 'Soplando en un etilómetro.', ru: 'Выдохом в алкотестер.', en: 'By blowing into a breathalyser.' },
          { es: 'Con una prueba de visión.', ru: 'Проверкой зрения.', en: 'With a vision test.' }
        ],
        answer: 0,
        explain: { ru: 'Алкоголь — выдох, наркотики — слюна. Можно потребовать контрольный анализ крови.', en: 'Alcohol — breath, drugs — saliva. You may ask for a confirmatory blood test.' },
        hint: { ru: 'Алкоголь — выдохнуть, наркотики — плюнуть.', en: 'Alcohol — blow, drugs — spit.' },
        ref: 'RGC, art. 28'
      },
      {
        id: 'co-12',
        es: '¿Está obligado a someterse a la prueba de alcohol un conductor implicado en un accidente?',
        tr: { ru: 'Обязан ли водитель — участник ДТП пройти тест на алкоголь?', en: 'Must a driver involved in a crash take an alcohol test?' },
        options: [
          { es: 'Sí.', ru: 'Да.', en: 'Yes.' },
          { es: 'Solo si es el culpable.', ru: 'Только если виноват.', en: 'Only if at fault.' },
          { es: 'Solo si hay heridos.', ru: 'Только если есть пострадавшие.', en: 'Only if someone is hurt.' }
        ],
        answer: 0,
        explain: { ru: 'Тест обязателен для всех водителей-участников ДТП, при признаках опьянения, при нарушении и на плановых проверках.', en: 'The test is mandatory for every driver involved in a crash, with signs of intoxication, after an offence and at routine checks.' },
        hint: { ru: 'Попал в ДТП — дуй.', en: 'In a crash — blow.' },
        ref: 'RGC, art. 21'
      },
      {
        id: 'co-13',
        es: '¿Puede un agente someter a la prueba de alcohol a un peatón?',
        tr: { ru: 'Может ли полицейский проверить на алкоголь пешехода?', en: 'May an officer breath-test a pedestrian?' },
        options: [
          { es: 'Sí, si está implicado en un accidente o pone en peligro la circulación.', ru: 'Да, если он участник ДТП или создал опасность.', en: 'Yes, if involved in a crash or endangering traffic.' },
          { es: 'No, solo a conductores.', ru: 'Нет, только водителей.', en: 'No, only drivers.' },
          { es: 'Solo con orden judicial.', ru: 'Только по решению суда.', en: 'Only with a court order.' }
        ],
        answer: 0,
        explain: { ru: 'Проверить можно и пешехода, если он участник ДТП или своим поведением создал опасность.', en: 'Pedestrians may also be tested if involved in a crash or causing danger.' },
        hint: { ru: 'Опасность создал — тест для всех.', en: 'Caused danger — anyone gets tested.' },
        ref: 'RGC, art. 21'
      },
      {
        id: 'co-14',
        es: 'No está de acuerdo con el resultado de la prueba de aire. ¿Qué puede pedir?',
        tr: { ru: 'Вы не согласны с результатом теста по выдоху. Что можно потребовать?', en: 'You disagree with the breath test result. What can you ask for?' },
        options: [
          { es: 'Un análisis de sangre u otro análisis clínico.', ru: 'Анализ крови или другой медицинский анализ.', en: 'A blood or other clinical test.' },
          { es: 'Repetir la prueba al día siguiente.', ru: 'Повторить тест на следующий день.', en: 'A retest the next day.' },
          { es: 'Nada; el resultado es definitivo.', ru: 'Ничего: результат окончательный.', en: 'Nothing; the result is final.' }
        ],
        answer: 0,
        explain: { ru: 'Можно потребовать контрольный анализ крови (или мочи и т. п.) в медицинском учреждении.', en: 'You may request a confirmatory blood (or similar) test at a medical centre.' },
        hint: { ru: 'Не веришь прибору — сдай кровь.', en: 'Don’t trust the device — give blood.' },
        ref: 'RGC, art. 23'
      },
      {
        id: 'co-15',
        es: 'Toma un antihistamínico para la alergia. ¿Qué debe tener en cuenta?',
        tr: { ru: 'Вы принимаете антигистаминное от аллергии. Что учесть?', en: 'You take an antihistamine for allergies. What should you bear in mind?' },
        options: [
          { es: 'Que puede producir somnolencia; debe consultar al médico si puede conducir.', ru: 'Может вызвать сонливость; спросите врача, можно ли водить.', en: 'It can cause drowsiness; ask your doctor whether you may drive.' },
          { es: 'Que mejora la atención.', ru: 'Что оно улучшает внимание.', en: 'That it improves attention.' },
          { es: 'Nada, es inofensivo.', ru: 'Ничего, оно безвредно.', en: 'Nothing, it’s harmless.' }
        ],
        answer: 0,
        explain: { ru: 'Антигистаминные, обезболивающие, средства от кашля и психотропные могут вызывать сонливость и замедлять реакцию. Спросите врача, проверьте пиктограмму на упаковке.', en: 'Antihistamines, painkillers, cough medicines and psychotropics can cause drowsiness and slow reactions. Ask your doctor and check the box pictogram.' },
        hint: { ru: 'От аллергии — часто «от бодрости».', en: 'Allergy pills often kill alertness.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'co-16',
        es: '¿Se puede mezclar alcohol con medicamentos antes de conducir?',
        tr: { ru: 'Можно ли перед поездкой сочетать алкоголь с лекарствами?', en: 'May you mix alcohol and medicines before driving?' },
        options: [
          { es: 'No, se potencian los efectos negativos de ambos.', ru: 'Нет: они усиливают вредное действие друг друга.', en: 'No, each strengthens the other’s harmful effects.' },
          { es: 'Sí, si la dosis es baja.', ru: 'Да, если доза маленькая.', en: 'Yes, if the dose is low.' },
          { es: 'Sí, el medicamento anula el alcohol.', ru: 'Да, лекарство нейтрализует алкоголь.', en: 'Yes, the medicine cancels the alcohol.' }
        ],
        answer: 0,
        explain: { ru: 'Алкоголь с лекарствами усиливает сонливость и замедление реакции; смешивать нельзя.', en: 'Alcohol plus medicines multiplies drowsiness and slow reactions; never mix them.' },
        hint: { ru: '1 + 1 здесь больше двух.', en: 'Here 1 + 1 is more than 2.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'co-17',
        es: '¿Cuál de estos es un síntoma de somnolencia al conducir?',
        tr: { ru: 'Что из этого — признак сонливости за рулём?', en: 'Which of these is a sign of drowsiness at the wheel?' },
        options: [
          { es: 'No recordar los últimos kilómetros recorridos.', ru: 'Не помнить последние проехавшие километры.', en: 'Not remembering the last few kilometres.' },
          { es: 'Tener mucha sed.', ru: 'Сильная жажда.', en: 'Feeling very thirsty.' },
          { es: 'Ver mejor de noche.', ru: 'Лучше видеть ночью.', en: 'Seeing better at night.' }
        ],
        answer: 0,
        explain: { ru: 'Признаки сонливости: зевота, тяжёлые веки, трудно держать голову, «провалы» в памяти о дороге, выезд из полосы, пропущенные знаки и съезды.', en: 'Signs: yawning, heavy eyelids, nodding, memory gaps about the road, drifting out of lane, missed signs and exits.' },
        hint: { ru: 'Не помнишь дорогу — ты уже спал.', en: 'Can’t remember the road — you were already asleep.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'co-18',
        es: 'Nota los primeros síntomas de sueño al volante. ¿Qué es lo más eficaz?',
        tr: { ru: 'Вы чувствуете первые признаки сна за рулём. Что эффективнее всего?', en: 'You notice the first signs of sleepiness. What works best?' },
        options: [
          { es: 'Parar en un lugar seguro y dormir unos 20 o 30 minutos.', ru: 'Остановиться в безопасном месте и поспать 20–30 минут.', en: 'Stop somewhere safe and sleep for 20–30 minutes.' },
          { es: 'Abrir la ventanilla y subir la música.', ru: 'Открыть окно и сделать музыку громче.', en: 'Open the window and turn the music up.' },
          { es: 'Acelerar para llegar antes.', ru: 'Ускориться, чтобы приехать быстрее.', en: 'Speed up to arrive sooner.' }
        ],
        answer: 0,
        explain: { ru: 'Единственное надёжное средство — сон: остановиться и поспать 20–30 минут. Окно, музыка и кофе помогают ненадолго.', en: 'The only reliable cure is sleep: stop and nap 20–30 minutes. Windows, music and coffee help only briefly.' },
        hint: { ru: 'Против сна — только сон.', en: 'The only cure for sleep is sleep.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'co-19',
        es: 'En un viaje largo, ¿cada cuánto se recomienda descansar?',
        tr: { ru: 'Как часто рекомендуют отдыхать в дальней поездке?', en: 'On a long trip, how often should you rest?' },
        options: [
          { es: 'Cada 2 horas o 200 km, unos 20–30 minutos.', ru: 'Каждые 2 часа или 200 км по 20–30 минут.', en: 'Every 2 hours or 200 km, about 20–30 minutes.' },
          { es: 'Cada 5 horas.', ru: 'Каждые 5 часов.', en: 'Every 5 hours.' },
          { es: 'Solo cuando se sienta cansado.', ru: 'Только когда устанете.', en: 'Only when you feel tired.' }
        ],
        answer: 0,
        explain: { ru: 'Отдыхайте 20–30 минут каждые 2 часа или 200 км, даже если не чувствуете усталости.', en: 'Rest 20–30 minutes every 2 hours or 200 km, even if you don’t feel tired.' },
        hint: { ru: '2 – 200 – 20.', en: '2 – 200 – 20.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'co-20',
        es: '¿En qué momentos del día es más probable sufrir somnolencia?',
        tr: { ru: 'В какое время суток сонливость наиболее вероятна?', en: 'At what times of day is drowsiness most likely?' },
        options: [
          { es: 'De madrugada y después de comer.', ru: 'Под утро и после обеда.', en: 'Early morning and after lunch.' },
          { es: 'A media mañana.', ru: 'В середине утра.', en: 'Mid-morning.' },
          { es: 'Al atardecer.', ru: 'На закате.', en: 'At dusk.' }
        ],
        answer: 0,
        explain: { ru: 'Пики сонливости — ранние часы (2–6 утра) и время после обеда; плюс недосып и монотонная дорога.', en: 'Drowsiness peaks in the small hours and after lunch; plus lack of sleep and monotonous roads.' },
        hint: { ru: 'Ночь и сиеста — время сна.', en: 'Night and siesta are sleep time.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'co-21',
        es: '¿Qué temperatura se recomienda dentro del vehículo para evitar la fatiga?',
        tr: { ru: 'Какая температура в салоне рекомендуется, чтобы не уставать?', en: 'What cabin temperature is recommended to avoid fatigue?' },
        options: [
          { es: 'Unos 23 °C.', ru: 'Около 23 °C.', en: 'About 23 °C.' },
          { es: 'Unos 30 °C.', ru: 'Около 30 °C.', en: 'About 30 °C.' },
          { es: 'Unos 15 °C.', ru: 'Около 15 °C.', en: 'About 15 °C.' }
        ],
        answer: 0,
        explain: { ru: 'Жара в салоне утомляет и замедляет реакцию; оптимально около 23 °C.', en: 'A hot cabin tires you and slows reactions; about 23 °C is best.' },
        hint: { ru: '23 — «комнатная».', en: '23 — room temperature.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'co-22',
        es: 'Antes de un viaje largo, ¿qué tipo de comida es más adecuada?',
        tr: { ru: 'Какая еда лучше перед дальней поездкой?', en: 'Before a long trip, what kind of meal is best?' },
        options: [
          { es: 'Comidas ligeras y beber agua.', ru: 'Лёгкая еда и вода.', en: 'Light meals and water.' },
          { es: 'Una comida muy abundante.', ru: 'Очень плотный обед.', en: 'A very large meal.' },
          { es: 'No comer nada.', ru: 'Ничего не есть.', en: 'Eat nothing.' }
        ],
        answer: 0,
        explain: { ru: 'Тяжёлая еда клонит в сон, голод вызывает головокружение. Лучше несколько лёгких приёмов пищи, вода и 15–20 минут после еды перед поездкой.', en: 'Heavy food makes you drowsy, hunger makes you dizzy. Better several light meals, water, and 15–20 minutes after eating before setting off.' },
        hint: { ru: 'Сытый водитель — сонный водитель.', en: 'A full driver is a sleepy driver.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'co-23',
        es: '¿Qué calzado es el más adecuado para conducir?',
        tr: { ru: 'Какая обувь лучше всего для вождения?', en: 'What footwear is best for driving?' },
        options: [
          { es: 'Calzado cómodo, ligero y sujeto al pie.', ru: 'Удобная, лёгкая, хорошо сидящая на ноге.', en: 'Comfortable, light shoes that stay on.' },
          { es: 'Chanclas.', ru: 'Шлёпанцы.', en: 'Flip-flops.' },
          { es: 'Zapatos de tacón alto.', ru: 'Туфли на высоком каблуке.', en: 'High heels.' }
        ],
        answer: 0,
        explain: { ru: 'Обувь должна быть удобной и держаться на ноге, чтобы точно работать педалями. Шлёпанцы, каблуки и толстая подошва мешают.', en: 'Shoes should be comfortable and secure for precise pedal use. Flip-flops, heels and thick soles get in the way.' },
        hint: { ru: 'Нога должна «чувствовать» педаль.', en: 'Your foot must feel the pedal.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'co-24',
        es: '¿Está permitido utilizar el teléfono móvil con un sistema de manos libres?',
        tr: { ru: 'Можно ли говорить по телефону через громкую связь?', en: 'Is using a phone hands-free allowed?' },
        options: [
          { es: 'Sí, aunque también distrae y es mejor detenerse.', ru: 'Да, хотя это тоже отвлекает и лучше остановиться.', en: 'Yes, though it still distracts and stopping is better.' },
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' },
          { es: 'Sí, y no supone ningún riesgo.', ru: 'Да, и это совсем безопасно.', en: 'Yes, and it carries no risk.' }
        ],
        answer: 0,
        explain: { ru: 'Громкая связь без рук разрешена, но разговор всё равно забирает внимание. Лучше остановиться и говорить коротко.', en: 'Hands-free is allowed, but conversation still takes attention. Better to stop, and keep calls short.' },
        hint: { ru: 'Руки свободны, голова — нет.', en: 'Hands free, mind not.' },
        ref: 'RGC, art. 18'
      },
      {
        id: 'co-25',
        es: '¿Cuánto aumenta el riesgo de accidente al usar el móvil mientras se conduce?',
        tr: { ru: 'Во сколько раз растёт риск ДТП при использовании телефона за рулём?', en: 'By how much does phone use raise the crash risk?' },
        options: [
          { es: 'Se multiplica por cuatro.', ru: 'В четыре раза.', en: 'Fourfold.' },
          { es: 'No aumenta.', ru: 'Не растёт.', en: 'It doesn’t.' },
          { es: 'Un 5 %.', ru: 'На 5 %.', en: 'By 5%.' }
        ],
        answer: 0,
        explain: { ru: 'По пособию DGT, с телефоном риск ДТП в четыре раза выше.', en: 'According to the DGT manual, the crash risk is four times higher with a phone.' },
        hint: { ru: 'Телефон — ×4.', en: 'Phone — ×4.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'co-26',
        es: '¿Se puede conducir con auriculares conectados a un reproductor de música?',
        tr: { ru: 'Можно ли водить в наушниках, подключённых к плееру?', en: 'May you drive wearing headphones connected to a music player?' },
        options: [
          { es: 'No, está prohibido.', ru: 'Нет, запрещено.', en: 'No, it’s banned.' },
          { es: 'Sí, con un solo auricular.', ru: 'Да, в одном наушнике.', en: 'Yes, with one earphone.' },
          { es: 'Sí, a volumen bajo.', ru: 'Да, тихо.', en: 'Yes, at low volume.' }
        ],
        answer: 0,
        explain: { ru: 'Наушники, подключённые к устройствам, за рулём запрещены (3 балла): вы не слышите сирены, гудки и машины.', en: 'Headphones connected to devices are banned while driving (3 points): you can’t hear sirens, horns and traffic.' },
        hint: { ru: 'Уши — тоже органы управления.', en: 'Your ears are controls too.' },
        ref: 'RGC, art. 18'
      },
      {
        id: 'co-27',
        es: '¿Cuándo debe programar el navegador GPS?',
        tr: { ru: 'Когда настраивать навигатор?', en: 'When should you program the satnav?' },
        options: [
          { es: 'Antes de iniciar la marcha.', ru: 'До начала движения.', en: 'Before setting off.' },
          { es: 'Mientras conduce, en una recta.', ru: 'Во время езды на прямой.', en: 'While driving on a straight.' },
          { es: 'En un semáforo en rojo.', ru: 'На красном светофоре.', en: 'At a red light.' }
        ],
        answer: 0,
        explain: { ru: 'Маршрут вводят до поездки. Навигатор закрепляют там, где он виден без отвода взгляда и не мешает подушкам безопасности.', en: 'Enter the route before setting off. Mount the satnav where you can see it without looking away and clear of the airbags.' },
        hint: { ru: 'Сначала маршрут, потом мотор.', en: 'Route first, engine second.' },
        ref: 'RGC, art. 18'
      },
      {
        id: 'co-28',
        es: '¿Qué conductores sufren con más frecuencia accidentes por distracción?',
        tr: { ru: 'Какие водители чаще попадают в ДТП из-за отвлечения?', en: 'Which drivers most often crash through distraction?' },
        options: [
          { es: 'Los jóvenes de 18 a 25 años y los mayores de 70.', ru: 'Молодые 18–25 лет и старше 70.', en: 'Young drivers aged 18–25 and those over 70.' },
          { es: 'Los de 40 a 50 años.', ru: '40–50 лет.', en: 'Those aged 40–50.' },
          { es: 'Los conductores profesionales.', ru: 'Профессиональные водители.', en: 'Professional drivers.' }
        ],
        answer: 0,
        explain: { ru: 'Пособие DGT называет группы риска: 18–25 лет и старше 70.', en: 'The DGT manual names the risk groups: 18–25 and over 70.' },
        hint: { ru: 'Самые молодые и самые старшие.', en: 'The youngest and the oldest.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'co-29',
        es: '¿Cuál es el tiempo de reacción normal de un conductor en buenas condiciones?',
        tr: { ru: 'Какое обычное время реакции у водителя в хорошем состоянии?', en: 'What is a fit driver’s normal reaction time?' },
        options: [
          { es: 'Entre medio segundo y un segundo.', ru: 'От полсекунды до секунды.', en: 'Between half a second and one second.' },
          { es: 'Entre 3 y 5 segundos.', ru: '3–5 секунд.', en: '3 to 5 seconds.' },
          { es: 'Menos de una décima de segundo.', ru: 'Меньше десятой доли секунды.', en: 'Under a tenth of a second.' }
        ],
        answer: 0,
        explain: { ru: 'Нормальная реакция — от 0,5 до 1 секунды. Усталость, алкоголь, лекарства, возраст, жара, стресс её удлиняют.', en: 'Normal reaction is 0.5 to 1 second. Fatigue, alcohol, medicines, age, heat and stress lengthen it.' },
        hint: { ru: 'Реакция — «почти секунда».', en: 'Reaction — almost a second.' },
        ref: 'DGT, Manual básico, tema 3'
      },
      {
        id: 'co-30',
        es: '¿Cuál es la tasa de alcohol realmente segura para conducir?',
        tr: { ru: 'Какой уровень алкоголя действительно безопасен для вождения?', en: 'What blood alcohol level is truly safe for driving?' },
        options: [
          { es: '0,0: no beber nada.', ru: '0,0 — не пить совсем.', en: '0.0 — no drinking at all.' },
          { es: 'Hasta 0,25 mg/l.', ru: 'До 0,25 мг/л.', en: 'Up to 0.25 mg/l.' },
          { es: 'Una cerveza.', ru: 'Одна кружка пива.', en: 'One beer.' }
        ],
        answer: 0,
        explain: { ru: 'Законные пределы — не «безопасные». Пособие DGT подчёркивает: единственная безопасная норма — 0,0.', en: 'Legal limits aren’t “safe” levels. The DGT manual stresses: the only safe level is 0.0.' },
        hint: { ru: 'Если пьёшь — не едешь.', en: 'If you drink, don’t drive.' },
        ref: 'DGT, Manual básico, tema 3'
      }
    ]
  }
]);
