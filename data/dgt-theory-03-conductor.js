// DGT · theory, topic 03: the driver's condition (alcohol, drugs, medicines, fatigue, distractions). Sources: DGT «Teórica abreviada,
// lectura fácil» (2025), DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-conductor', level: 'DGT',
    title: { ru: 'Состояние водителя', en: 'The driver’s condition' },
    summary: { ru: 'Алкоголь, наркотики, лекарства, усталость, сон, телефон и здоровье за рулём.', en: 'Alcohol, drugs, medicines, fatigue, sleepiness, the phone and health at the wheel.' },
    hero: { es: 'El estado del <b>conductor</b>', sub: { ru: 'Алкоголь, наркотики, усталость и отвлечения', en: 'Alcohol, drugs, fatigue and distractions' } },
    tabs: [
      { id: 'alcohol', label: { ru: 'Алкоголь', en: 'Alcohol' }, blocks: [
        { type: 'table', heading: { ru: 'Допустимый уровень (RGC, ст. 20)', en: 'Legal limits (RGC art. 20)' },
          head: [{ ru: 'Кто', en: 'Who' }, { ru: 'Кровь', en: 'Blood' }, { ru: 'Воздух', en: 'Breath' }],
          rows: [
            [{ ru: 'Все водители, велосипедисты', en: 'All drivers, cyclists' }, '0,5 g/l', '0,25 mg/l'],
            [{ ru: 'Стаж прав меньше 2 лет', en: 'Licence under 2 years' }, '0,3 g/l', '0,15 mg/l'],
            [{ ru: 'Профессионалы', en: 'Professional drivers' }, '0,3 g/l', '0,15 mg/l'],
            [{ ru: 'Водитель младше 18 лет', en: 'Driver under 18' }, '0,0 g/l', '0,0 mg/l']
          ] },
        { type: 'text', body: {
          ru: ['«Профессионалы» — это грузовики тяжелее 3500 кг, автобусы больше 9 мест, такси и другой общественный транспорт, перевозка детей, опасных грузов, скорая помощь. Несовершеннолетним (например, на мопеде) — <b>ноль</b> (LSV, ст. 14). <b>Безопасный уровень для всех — только 0,0</b>.', 'Уровень в крови и в выдыхаемом воздухе соотносятся как <b>2000 : 1</b>: 0,5 г/л крови = 0,25 мг/л воздуха.'],
          en: ['“Professionals” are lorries over 3,500 kg, buses with more than 9 seats, taxis and other public transport, school transport, dangerous goods and emergency vehicles. Minors (e.g. on a moped) — <b>zero</b> (LSV art. 14). <b>The only safe level for anyone is 0.0</b>.', 'Blood and breath levels relate as <b>2000 : 1</b>: 0.5 g/l blood = 0.25 mg/l breath.'] } },
        { type: 'figure', src: 'img/dgt/conductor-alcoholemia.svg',
          alt: { ru: 'График: уровень алкоголя в крови быстро растёт, достигает пика примерно через час и медленно падает несколько часов; пунктиром показаны лимиты 0,5 и 0,3 г/л.', en: 'Graph: blood alcohol rises quickly, peaks after about an hour and falls slowly over several hours; dashed lines show the 0.5 and 0.3 g/l limits.' },
          caption: { ru: 'Кривая условная: у каждого человека цифры свои. Но пик всегда примерно через час, а снижение медленное — ни кофе, ни душ его не ускоряют.', en: 'The curve is illustrative: everyone’s numbers differ. But the peak is always about an hour later and the decline is slow — neither coffee nor a shower speeds it up.' } },
        { type: 'rules', heading: { ru: 'Что влияет и что делает алкоголь', en: 'What matters and what alcohol does' }, items: [
          { color: 'amber', label: { ru: 'Сильнее действует', en: 'Hits harder' }, title: { ru: 'Факторы', en: 'Factors' },
            body: { ru: 'Больше выпито, меньше вес, женщины, младше 18 и старше 65 лет, пили быстро и <b>натощак</b>, крепкие напитки и смеси с газировкой, стресс, болезнь. <b>Сон</b> после выпивки замедляет выведение.', en: 'More alcohol, lower weight, women, under 18 and over 65, drinking fast and on an <b>empty stomach</b>, spirits and fizzy mixers, stress, illness. <b>Sleeping</b> after drinking slows elimination.' } },
          { color: 'coral', label: { ru: 'Эффекты', en: 'Effects' }, title: { ru: 'За рулём', en: 'At the wheel' },
            body: { ru: '<b>Ложная уверенность</b> и риск, агрессия; хуже видно знаки и расстояния, <b>уже поле зрения</b>, сильнее <b>ослепление</b> фарами; хуже координация; дольше реакция и хуже решения.', en: '<b>False confidence</b> and risk-taking, aggression; signs and distances are harder to judge, <b>narrower field of vision</b>, more <b>dazzle</b> from headlights; poorer coordination; slower reactions and worse decisions.' } }
        ] },
        { type: 'rules', heading: { ru: 'Контроль и наказание', en: 'Checks and penalties' }, items: [
          { color: 'blue', label: { ru: 'Кто обязан', en: 'Who must' }, title: { ru: 'Пройти тест', en: 'Take the test' }, es: 'prueba de alcoholemia',
            body: { ru: 'Все водители (и велосипедисты), если агент требует: при ДТП, признаках опьянения, нарушении или на профилактическом посту. Также пешеход — участник ДТП. Если тест положительный, второй делают не раньше чем через <b>10 минут</b>; можно потребовать <b>анализ крови</b>.', en: 'All drivers (and cyclists) when an officer asks: after an accident, with signs of drinking, after an offence or at a preventive checkpoint. Also a pedestrian involved in an accident. If positive, a second test follows at least <b>10 minutes</b> later; you may ask for a <b>blood test</b>.' } },
          { color: 'coral', label: { ru: 'Санкции', en: 'Penalties' }, title: { ru: 'Muy grave', en: 'Muy grave' }, es: '500 € · 1.000 €',
            body: { ru: '500 € и 4 балла (воздух 0,25–0,50) или 6 баллов (больше 0,50). Вдвое выше нормы или повторно за год — <b>1000 €</b>. Машину могут <b>задержать</b>. Больше <b>0,60 мг/л</b> воздуха (1,2 г/л крови) — уже <b>преступление</b>. Отказ от теста — 6 баллов и тоже преступление.', en: '€500 and 4 points (breath 0.25–0.50) or 6 points (over 0.50). Double the limit or a repeat within a year — <b>€1,000</b>. The vehicle may be <b>immobilised</b>. Over <b>0.60 mg/l</b> breath (1.2 g/l blood) is a <b>crime</b>. Refusing the test — 6 points and also a crime.' } }
        ] },
        { type: 'examples', items: [
          { es: 'La <b>tasa de alcoholemia</b> máxima es de 0,25 mg/l en aire espirado.', ru: 'Максимальный уровень алкоголя — 0,25 мг/л в выдыхаемом воздухе.', en: 'The maximum alcohol level is 0.25 mg/l in exhaled air.' },
          { es: 'El agente me pidió que <b>soplara</b> en el etilómetro.', ru: 'Агент попросил меня подуть в алкотестер.', en: 'The officer asked me to blow into the breathalyser.' },
          { es: 'Si das positivo, te hacen una <b>segunda prueba</b>.', ru: 'Если тест положительный, делают второй.', en: 'If you test positive, they do a second test.' },
          { es: 'Ni el café ni la ducha <b>eliminan el alcohol</b>.', ru: 'Ни кофе, ни душ не выводят алкоголь.', en: 'Neither coffee nor a shower gets rid of alcohol.' },
          { es: 'Hoy no bebo: <b>conduzco yo</b>.', ru: 'Сегодня я не пью: я за рулём.', en: 'I’m not drinking today: I’m driving.' }
        ] }
      ] },
      { id: 'drugs', label: { ru: 'Наркотики', en: 'Drugs' }, blocks: [
        { type: 'text', color: 'coral', body: {
          ru: 'Для наркотиков <b>нулевая терпимость</b>: запрещено водить, если вещество <b>есть в организме</b>, даже без видимых эффектов. Тест — по <b>слюне</b>; подтверждение — анализ в лаборатории. Наказание: <b>1000 €</b> и <b>6 баллов</b> (LSV, ст. 77 c, 80; прил. II).',
          en: 'For drugs there is <b>zero tolerance</b>: you may not drive if the substance is <b>present in your body</b>, even without visible effects. The test uses <b>saliva</b>; a laboratory analysis confirms it. Penalty: <b>€1,000</b> and <b>6 points</b> (LSV arts. 77 c, 80; Annex II).' } },
        { type: 'table', heading: { ru: 'Как действуют вещества', en: 'How substances act' },
          head: [{ ru: 'Вещество', en: 'Substance' }, { ru: 'Главная опасность', en: 'Main danger' }],
          rows: [
            ['cannabis', { ru: 'реакция, сонливость', en: 'slow reactions, drowsiness' }],
            ['cocaína', { ru: 'агрессия, нет страха', en: 'aggression, no fear' }],
            ['éxtasis', { ru: 'галлюцинации, усталость', en: 'hallucinations, fatigue' }],
            ['LSD', { ru: 'галлюцинации, паника', en: 'hallucinations, panic' }],
            ['anfetaminas', { ru: 'импульсивность, внезапный сон', en: 'impulsiveness, sudden sleep' }]
          ] },
        { type: 'rules', heading: { ru: 'Лекарства', en: 'Medicines' }, items: [
          { color: 'purple', label: { ru: 'Знак на упаковке', en: 'Pack symbol' }, title: { ru: 'Машина в красном треугольнике', en: 'A car in a red triangle' }, es: 'pictograma',
            body: { ru: 'Этот значок на коробке значит: лекарство <b>может ухудшить</b> способность водить. Прочитайте инструкцию и <b>спросите врача</b>, можно ли садиться за руль.', en: 'This symbol on the box means the medicine <b>may impair</b> your ability to drive. Read the leaflet and <b>ask your doctor</b> whether you may drive.' } },
          { color: 'purple', label: { ru: 'Опасные группы', en: 'Risky groups' }, title: { ru: 'Сон и рефлексы', en: 'Sleep and reflexes' },
            body: { ru: '<b>Антигистаминные</b> (от аллергии), обезболивающие, противокашлевые, <b>психотропные</b> (от тревоги, депрессии, бессонницы): сонливость, головокружение, медленная реакция. Не смешивайте лекарства с алкоголем.', en: '<b>Antihistamines</b> (for allergies), painkillers, cough medicines, <b>psychiatric drugs</b> (for anxiety, depression, insomnia): drowsiness, dizziness, slow reactions. Never mix medicines with alcohol.' } }
        ] },
        { type: 'examples', items: [
          { es: 'El control de drogas se hace con una <b>muestra de saliva</b>.', ru: 'Тест на наркотики делают по пробе слюны.', en: 'The drug test is done with a saliva sample.' },
          { es: 'Este jarabe <b>produce somnolencia</b>: no conduzcas.', ru: 'Этот сироп вызывает сонливость: не садись за руль.', en: 'This syrup causes drowsiness: don’t drive.' },
          { es: 'Pregunta al médico si puedes conducir con este <b>medicamento</b>.', ru: 'Спроси врача, можно ли водить с этим лекарством.', en: 'Ask the doctor whether you can drive with this medicine.' },
          { es: 'Está prohibido conducir con <b>presencia de drogas</b> en el organismo.', ru: 'Запрещено водить при наличии наркотиков в организме.', en: 'It is forbidden to drive with drugs in your body.' }
        ] }
      ] },
      { id: 'fatigue', label: { ru: 'Усталость', en: 'Fatigue' }, blocks: [
        { type: 'rules', items: [
          { color: 'teal', label: { ru: 'Причины', en: 'Causes' }, title: { ru: 'Fatiga', en: 'Fatiga' },
            body: { ru: 'Много часов без отдыха, высокая скорость, ночь, жара в салоне (лучше около <b>23 °C</b>), шум, неудобная поза, плотный трафик, плохая погода, незнакомая дорога, мало опыта.', en: 'Many hours without a break, high speed, night, heat in the car (about <b>23 °C</b> is best), noise, a bad posture, heavy traffic, bad weather, an unknown road, little experience.' } },
          { color: 'teal', label: { ru: 'Признаки', en: 'Signs' }, title: { ru: 'Somnolencia', en: 'Somnolencia' },
            body: { ru: 'Частая <b>зевота</b>, тяжёлые веки, трудно держать голову, не помните последние километры, выезжаете из полосы, пропускаете знаки, едете слишком близко к впереди идущему. Опасное время — <b>рассвет</b> и <b>после обеда</b>.', en: 'Frequent <b>yawning</b>, heavy eyelids, trouble holding your head up, no memory of the last kilometres, drifting out of lane, missing signs, driving too close to the car ahead. Risky times — <b>early morning</b> and <b>after lunch</b>.' } }
        ] },
        { type: 'text', color: 'teal', body: {
          ru: '<b>Отдых каждые 2 часа или 200 км</b> по 20–30 минут, даже если не устали. При первых признаках сонливости — остановиться в безопасном месте и <b>поспать 20–30 минут</b>. Открытое окно, музыка или кофе не решают проблему.',
          en: '<b>Rest every 2 hours or 200 km</b> for 20–30 minutes, even if you do not feel tired. At the first signs of sleepiness, stop somewhere safe and <b>sleep for 20–30 minutes</b>. An open window, music or coffee do not solve the problem.' } },
        { type: 'text', body: {
          ru: ['<b>Время реакции</b> — от момента, когда вы увидели опасность, до начала действия; обычно <b>0,5–1 секунда</b>. Его увеличивают усталость, сон, возраст, болезни, лекарства, алкоголь, тяжёлая еда, жара и невнимательность.'],
          en: ['<b>Reaction time</b> runs from seeing a hazard to starting to act; normally <b>0.5–1 second</b>. Fatigue, sleepiness, age, illness, medicines, alcohol, a heavy meal, heat and inattention make it longer.'] } },
        { type: 'examples', items: [
          { es: 'Para cada <b>dos horas</b> y descansa veinte minutos.', ru: 'Останавливайся каждые два часа и отдыхай двадцать минут.', en: 'Stop every two hours and rest for twenty minutes.' },
          { es: 'Si <b>bostezas</b> mucho, es hora de parar.', ru: 'Если часто зеваешь, пора остановиться.', en: 'If you yawn a lot, it’s time to stop.' },
          { es: 'Después de comer me entra <b>sueño</b> al volante.', ru: 'После обеда меня клонит в сон за рулём.', en: 'After lunch I get sleepy at the wheel.' },
          { es: 'El cansancio aumenta el <b>tiempo de reacción</b>.', ru: 'Усталость увеличивает время реакции.', en: 'Tiredness increases reaction time.' }
        ] }
      ] },
      { id: 'distractions', label: { ru: 'Отвлечения', en: 'Distractions' }, blocks: [
        { type: 'rules', items: [
          { color: 'amber', label: { ru: 'Телефон', en: 'Phone' }, title: { ru: 'Только hands-free', en: 'Hands-free only' }, es: 'manos libres',
            body: { ru: 'Телефон в руке — <b>200 € и 6 баллов</b>. Можно говорить только через <b>hands-free</b> без рук и без наушников, но и это отвлекает. Риск аварии с телефоном в <b>4 раза</b> выше. Лучше остановиться в безопасном месте.', en: 'A phone held in your hand — <b>€200 and 6 points</b>. You may only talk <b>hands-free</b>, without your hands or earphones, but even that distracts. With a phone the crash risk is <b>4 times</b> higher. Better stop somewhere safe.' } },
          { color: 'amber', label: { ru: 'Наушники и экраны', en: 'Headphones, screens' }, title: { ru: '3 балла', en: '3 points' }, es: 'auriculares',
            body: { ru: 'Наушники, телефон под шлемом, навигатор, которым управляют рукой, — 200 € и 3 балла. Экраны с интернетом и видео за рулём запрещены; GPS и камера заднего вида — можно.', en: 'Headphones, a phone under the helmet, a GPS operated by hand — €200 and 3 points. Screens with internet or video are forbidden while driving; a GPS and a reversing camera are allowed.' } },
          { color: 'amber', label: { ru: 'Навигатор', en: 'Sat-nav' }, title: { ru: 'Настроить до поездки', en: 'Set it before you go' }, es: 'navegador GPS',
            body: { ru: 'Ввести маршрут <b>до</b> начала движения; закрепить так, чтобы был виден, не мешал обзору и не перекрывал <b>подушки безопасности</b>.', en: 'Enter the route <b>before</b> setting off; mount it where you can see it, where it does not block your view or the <b>airbags</b>.' } },
          { color: 'amber', label: { ru: 'Курение', en: 'Smoking' }, title: { ru: 'Вдвое больше аварий', en: 'Twice the crashes' },
            body: { ru: 'Поиск сигареты, занятая рука, дым и плохой воздух в салоне. Еда, питьё, карта, насекомое в салоне — тоже опасные отвлечения.', en: 'Looking for a cigarette, a busy hand, smoke and stale air. Eating, drinking, a map, an insect in the car are also dangerous distractions.' } }
        ] },
        { type: 'markers', groups: [
          { color: 'amber', title: { ru: 'Когда отвлечения чаще', en: 'When distractions are more common' }, tags: ['18–25 años', 'más de 70 años', 'con pasajeros', 'en verano', 'fin de semana', 'en autopista y autovía'] }
        ] },
        { type: 'examples', items: [
          { es: 'Está prohibido <b>usar el móvil</b> con la mano mientras conduces.', ru: 'Запрещено пользоваться телефоном в руке за рулём.', en: 'Using a hand-held phone while driving is forbidden.' },
          { es: 'Con el <b>manos libres</b> puedes hablar, pero también te distrae.', ru: 'С hands-free говорить можно, но это тоже отвлекает.', en: 'With hands-free you may talk, but it still distracts you.' },
          { es: 'Programa el <b>navegador</b> antes de arrancar.', ru: 'Настрой навигатор перед тем, как тронуться.', en: 'Set the sat-nav before you set off.' },
          { es: 'No conduzcas con <b>auriculares</b>.', ru: 'Не води в наушниках.', en: 'Don’t drive with headphones.' }
        ] }
      ] },
      { id: 'health', label: { ru: 'Здоровье', en: 'Health' }, blocks: [
        { type: 'rules', items: [
          { color: 'blue', label: { ru: 'Зрение', en: 'Vision' }, title: { ru: 'La vista', en: 'La vista' },
            body: { ru: 'Почти вся информация за рулём — через глаза. Хуже видно от алкоголя, наркотиков, усталости и <b>высокой скорости</b> (поле зрения сужается). Если нужны очки, это отмечено в правах кодом <b>01</b> — водить только в них.', en: 'Almost all driving information comes through the eyes. Alcohol, drugs, fatigue and <b>high speed</b> (narrower field of vision) make you see worse. If you need glasses, the licence shows code <b>01</b> — drive only with them.' } },
          { color: 'blue', label: { ru: 'Возраст и болезни', en: 'Age and illness' }, title: { ru: 'Медкомиссия', en: 'Medical check' }, es: 'centro de reconocimiento',
            body: { ru: 'При продлении прав — проверка в <b>Centro de Reconocimiento de Conductores</b>; с возрастом срок прав короче. При хронической болезни: знать её и свои лекарства, не бросать лечение, не водить при обострении.', en: 'At renewal — a check at a <b>Centro de Reconocimiento de Conductores</b>; with age the licence period is shorter. With a chronic illness: know it and your medicines, do not stop treatment, do not drive during a flare-up.' } },
          { color: 'purple', label: { ru: 'Эмоции', en: 'Emotions' }, title: { ru: 'Estado de ánimo', en: 'Estado de ánimo' },
            body: { ru: 'Ссора, плохая новость, стресс или депрессия отвлекают и толкают к риску. Сначала успокойтесь, потом садитесь за руль.', en: 'An argument, bad news, stress or depression distract you and push you to take risks. Calm down first, then drive.' } },
          { color: 'teal', label: { ru: 'Еда и одежда', en: 'Food and clothes' }, title: { ru: 'Лёгкая еда, удобная обувь', en: 'Light meals, comfy shoes' },
            body: { ru: 'Обильная еда вызывает сон, голод — головокружение: лучше несколько лёгких приёмов, пить воду. Одежда свободная, пальто снять; обувь лёгкая и закрытая — <b>не шлёпанцы и не каблуки</b>.', en: 'A big meal makes you sleepy, hunger makes you dizzy: better several light meals and drink water. Loose clothes, take your coat off; light closed shoes — <b>no flip-flops or high heels</b>.' } }
        ] },
        { type: 'examples', items: [
          { es: 'Necesito <b>gafas</b> para conducir: lo pone en mi permiso.', ru: 'Мне нужны очки для вождения: это указано в моих правах.', en: 'I need glasses to drive: it says so on my licence.' },
          { es: 'Después de la <b>discusión</b> esperó a calmarse antes de conducir.', ru: 'После ссоры он подождал, пока успокоится, и только потом поехал.', en: 'After the argument he waited to calm down before driving.' },
          { es: 'No conduzcas con <b>chanclas</b>.', ru: 'Не води в шлёпанцах.', en: 'Don’t drive in flip-flops.' },
          { es: 'Una <b>comida copiosa</b> provoca somnolencia.', ru: 'Обильная еда вызывает сонливость.', en: 'A heavy meal causes drowsiness.' }
        ] }
      ] }
    ],
    quizCount: 20,
    quiz: [
      { es: '¿Cuál es la tasa máxima de alcohol en sangre para un conductor de turismo con 5 años de permiso?',
        prompt: { ru: 'Какой максимальный уровень алкоголя в крови для водителя легковой машины со стажем 5 лет?', en: 'What is the maximum blood alcohol level for a car driver with a 5-year-old licence?' },
        options: [
          { es: '0,5 gramos por litro.', ru: '0,5 г/л.', en: '0.5 grams per litre.' },
          { es: '0,3 gramos por litro.', ru: '0,3 г/л.', en: '0.3 grams per litre.' },
          { es: '0,8 gramos por litro.', ru: '0,8 г/л.', en: '0.8 grams per litre.' }
        ],
        answer: 0,
        explain: { ru: 'Общий лимит — 0,5 г/л крови (0,25 мг/л воздуха). 0,3 г/л — для новичков и профессионалов. RGC, ст. 20.', en: 'The general limit is 0.5 g/l blood (0.25 mg/l breath). 0.3 g/l is for new and professional drivers. RGC art. 20.' } },
      { es: '¿Qué tasa máxima de alcohol en aire espirado se permite al conductor de un turismo en general?',
        prompt: { ru: 'Какой максимальный уровень алкоголя в выдыхаемом воздухе обычно разрешён водителю легковой машины?', en: 'What maximum breath alcohol level is generally allowed for a car driver?' },
        options: [
          { es: '0,15 mg/l.', ru: '0,15 мг/л.', en: '0.15 mg/l.' },
          { es: '0,25 mg/l.', ru: '0,25 мг/л.', en: '0.25 mg/l.' },
          { es: '0,50 mg/l.', ru: '0,50 мг/л.', en: '0.50 mg/l.' }
        ],
        answer: 1,
        explain: { ru: '0,25 мг/л воздуха соответствует 0,5 г/л крови. 0,15 — для новичков и профессионалов. RGC, ст. 20.', en: '0.25 mg/l breath corresponds to 0.5 g/l blood. 0.15 is for new and professional drivers. RGC art. 20.' } },
      { es: 'Obtuvo el permiso hace un año. ¿Qué tasa de alcohol en aire espirado no puede superar?',
        prompt: { ru: 'Вы получили права год назад. Какой уровень алкоголя в выдыхаемом воздухе нельзя превышать?', en: 'You got your licence a year ago. What breath alcohol level must you not exceed?' },
        options: [
          { es: '0,25 mg/l.', ru: '0,25 мг/л.', en: '0.25 mg/l.' },
          { es: '0,00 mg/l.', ru: '0,00 мг/л.', en: '0.00 mg/l.' },
          { es: '0,15 mg/l.', ru: '0,15 мг/л.', en: '0.15 mg/l.' }
        ],
        answer: 2,
        explain: { ru: 'Первые два года после получения прав — 0,15 мг/л воздуха (0,3 г/л крови). Ноль закон не требует, хотя это единственный безопасный уровень. RGC, ст. 20.', en: 'For the first two years after getting the licence — 0.15 mg/l breath (0.3 g/l blood). The law does not require zero, though it is the only safe level. RGC art. 20.' } },
      { es: '¿Durante cuánto tiempo se aplica la tasa reducida de alcohol a los conductores noveles?',
        prompt: { ru: 'Сколько времени новичкам действует пониженный лимит алкоголя?', en: 'For how long does the reduced alcohol limit apply to new drivers?' },
        options: [
          { es: 'Durante el primer año.', ru: 'Первый год.', en: 'During the first year.' },
          { es: 'Durante los dos primeros años.', ru: 'Первые два года.', en: 'During the first two years.' },
          { es: 'Durante los tres primeros años.', ru: 'Первые три года.', en: 'During the first three years.' }
        ],
        answer: 1,
        explain: { ru: 'Пониженный лимит — 2 года; табличка «L» — 1 год. Не путайте эти сроки. RGC, ст. 20.', en: 'The reduced limit lasts 2 years; the “L” plate — 1 year. Don’t mix them up. RGC art. 20.' } },
      { es: '¿Qué tasa máxima de alcohol en sangre tiene el conductor de un autobús de 30 plazas?',
        prompt: { ru: 'Какой лимит алкоголя в крови у водителя автобуса на 30 мест?', en: 'What blood alcohol limit applies to the driver of a 30-seat bus?' },
        options: [
          { es: '0,3 g/l.', ru: '0,3 г/л.', en: '0.3 g/l.' },
          { es: '0,5 g/l.', ru: '0,5 г/л.', en: '0.5 g/l.' },
          { es: '0,0 g/l.', ru: '0,0 г/л.', en: '0.0 g/l.' }
        ],
        answer: 0,
        explain: { ru: 'Транспорт больше 9 мест, грузовики тяжелее 3500 кг, перевозка детей, опасных грузов, скорая — 0,3 г/л крови. RGC, ст. 20.', en: 'Vehicles with more than 9 seats, lorries over 3,500 kg, school transport, dangerous goods and emergency vehicles — 0.3 g/l blood. RGC art. 20.' } },
      { es: '¿Cuándo alcanza el alcohol su nivel más alto en la sangre?',
        prompt: { ru: 'Когда уровень алкоголя в крови максимальный?', en: 'When does alcohol reach its highest level in the blood?' },
        options: [
          { es: 'Inmediatamente después del primer trago.', ru: 'Сразу после первого глотка.', en: 'Right after the first sip.' },
          { es: 'A las 6 horas de beber.', ru: 'Через 6 часов после выпивки.', en: '6 hours after drinking.' },
          { es: 'Aproximadamente una hora después de beber.', ru: 'Примерно через час после выпивки.', en: 'About an hour after drinking.' }
        ],
        answer: 2,
        explain: { ru: 'Пик — примерно через час; потом уровень снижается очень медленно. Manual DGT, тема 3.', en: 'The peak comes about an hour later; then the level falls very slowly. DGT manual, topic 3.' } },
      { es: '¿Qué ayuda a eliminar el alcohol del organismo antes de conducir?',
        prompt: { ru: 'Что помогает вывести алкоголь из организма перед поездкой?', en: 'What helps remove alcohol from the body before driving?' },
        options: [
          { es: 'Tomar varios cafés.', ru: 'Выпить несколько чашек кофе.', en: 'Drinking several coffees.' },
          { es: 'Solo el paso del tiempo.', ru: 'Только время.', en: 'Only time.' },
          { es: 'Darse una ducha fría.', ru: 'Холодный душ.', en: 'Taking a cold shower.' }
        ],
        answer: 1,
        explain: { ru: 'Печень выводит алкоголь с постоянной скоростью; кофе, душ или свежий воздух лишь маскируют усталость. Manual DGT, тема 3.', en: 'The liver removes alcohol at a constant rate; coffee, a shower or fresh air only mask tiredness. DGT manual, topic 3.' } },
      { es: 'Ha bebido mucho por la noche y ha dormido cuatro horas. ¿Puede conducir sin riesgo?',
        prompt: { ru: 'Вы много выпили вечером и поспали четыре часа. Можно ли ехать без риска?', en: 'You drank a lot last night and slept four hours. Can you drive safely?' },
        options: [
          { es: 'No; durmiendo el alcohol se elimina más despacio y puede seguir en la sangre.', ru: 'Нет: во сне алкоголь выводится медленнее и может остаться в крови.', en: 'No; alcohol is eliminated more slowly during sleep and may still be in your blood.' },
          { es: 'Sí; dormir elimina todo el alcohol.', ru: 'Да: сон выводит весь алкоголь.', en: 'Yes; sleep removes all the alcohol.' },
          { es: 'Sí, si desayuna bien.', ru: 'Да, если хорошо позавтракать.', en: 'Yes, if you have a good breakfast.' }
        ],
        answer: 0,
        explain: { ru: 'Во сне выведение алкоголя замедляется, поэтому утром после бурного вечера тест часто положительный. Manual DGT, тема 3.', en: 'Sleep slows alcohol elimination, so the morning after a heavy night the test is often positive. DGT manual, topic 3.' } },
      { es: '¿Cuál de estos efectos produce el alcohol en el conductor?',
        prompt: { ru: 'Какой эффект алкоголь вызывает у водителя?', en: 'Which of these effects does alcohol have on a driver?' },
        options: [
          { es: 'Mejora los reflejos si la dosis es pequeña.', ru: 'Улучшает рефлексы в малой дозе.', en: 'It improves reflexes in small doses.' },
          { es: 'Amplía el campo visual.', ru: 'Расширяет поле зрения.', en: 'It widens the field of vision.' },
          { es: 'Da una falsa sensación de seguridad.', ru: 'Даёт ложное чувство уверенности.', en: 'It gives a false sense of security.' }
        ],
        answer: 2,
        explain: { ru: 'Алкоголь даёт ложную уверенность, сужает поле зрения, увеличивает время реакции и ослепление фарами. Manual DGT, тема 3.', en: 'Alcohol gives false confidence, narrows the field of vision, slows reactions and increases headlight dazzle. DGT manual, topic 3.' } },
      { es: '¿Cómo afecta el alcohol a la visión por la noche?',
        prompt: { ru: 'Как алкоголь влияет на зрение ночью?', en: 'How does alcohol affect vision at night?' },
        options: [
          { es: 'Reduce el deslumbramiento.', ru: 'Уменьшает ослепление.', en: 'It reduces dazzle.' },
          { es: 'Aumenta el deslumbramiento y se tarda más en recuperarse.', ru: 'Ослепление сильнее, и глаза дольше восстанавливаются.', en: 'Dazzle is stronger and recovery takes longer.' },
          { es: 'No afecta a la vista, solo a los reflejos.', ru: 'На зрение не влияет, только на рефлексы.', en: 'It does not affect sight, only reflexes.' }
        ],
        answer: 1,
        explain: { ru: 'После алкоголя фары встречных ослепляют сильнее, хуже оцениваются расстояния и сужается поле зрения. Manual DGT, тема 3.', en: 'After drinking, oncoming headlights dazzle more, distances are harder to judge and the field of vision narrows. DGT manual, topic 3.' } },
      { es: '¿Está obligado un conductor a someterse a un control preventivo de alcoholemia aunque no haya cometido ninguna infracción?',
        prompt: { ru: 'Обязан ли водитель пройти профилактический тест на алкоголь, если он ничего не нарушил?', en: 'Must a driver take a preventive alcohol test even if he has committed no offence?' },
        options: [
          { es: 'Sí, todos los conductores están obligados si se lo pide el agente.', ru: 'Да, все водители обязаны, если агент требует.', en: 'Yes, all drivers must do so if the officer asks.' },
          { es: 'No, solo si ha tenido un accidente.', ru: 'Нет, только после ДТП.', en: 'No, only after an accident.' },
          { es: 'No, solo si muestra síntomas de haber bebido.', ru: 'Нет, только при признаках опьянения.', en: 'No, only if he shows signs of drinking.' }
        ],
        answer: 0,
        explain: { ru: 'Тест обязаны пройти все водители: при ДТП, признаках, нарушении и на профилактических постах. RGC, ст. 21.', en: 'All drivers must take the test: after an accident, with symptoms, after an offence and at preventive checkpoints. RGC art. 21.' } },
      { es: 'Si la primera prueba de alcohol da positivo, ¿cuánto tiempo debe pasar como mínimo hasta la segunda?',
        prompt: { ru: 'Если первый тест положительный, сколько минимум ждут до второго?', en: 'If the first alcohol test is positive, how long must pass before the second?' },
        options: [
          { es: '1 minuto.', ru: '1 минута.', en: '1 minute.' },
          { es: '1 hora.', ru: '1 час.', en: '1 hour.' },
          { es: '10 minutos.', ru: '10 минут.', en: '10 minutes.' }
        ],
        answer: 2,
        explain: { ru: 'Между первой и второй пробой — минимум 10 минут; водитель вправе это проконтролировать. RGC, ст. 23.2.', en: 'At least 10 minutes between the first and second test; the driver has the right to check this. RGC art. 23.2.' } },
      { es: 'No está de acuerdo con el resultado del etilómetro. ¿Qué puede pedir?',
        prompt: { ru: 'Вы не согласны с результатом алкотестера. Что можно потребовать?', en: 'You disagree with the breathalyser result. What can you ask for?' },
        options: [
          { es: 'Repetir la prueba al día siguiente.', ru: 'Повторить тест на следующий день.', en: 'To repeat the test the next day.' },
          { es: 'Un análisis de sangre u otro análisis clínico.', ru: 'Анализ крови или другой клинический анализ.', en: 'A blood test or another clinical analysis.' },
          { es: 'Que le hagan la prueba de saliva.', ru: 'Тест по слюне.', en: 'A saliva test.' }
        ],
        answer: 1,
        explain: { ru: 'Для контраста можно потребовать анализ крови, мочи и т. п. в медцентре; если он отрицательный, деньги возвращают. RGC, ст. 23.3–4.', en: 'For contrast you may ask for a blood, urine or similar test at a medical centre; if it is negative, the deposit is returned. RGC art. 23.3–4.' } },
      { es: '¿Qué consecuencia tiene negarse a la prueba de alcoholemia?',
        prompt: { ru: 'Что будет, если отказаться от теста на алкоголь?', en: 'What happens if you refuse the alcohol test?' },
        options: [
          { es: 'Ninguna, si no ha bebido.', ru: 'Ничего, если вы не пили.', en: 'Nothing, if you have not been drinking.' },
          { es: 'Solo una multa leve.', ru: 'Только лёгкий штраф.', en: 'Only a minor fine.' },
          { es: 'Pérdida de 6 puntos y puede ser delito.', ru: 'Минус 6 баллов, и это может быть преступлением.', en: 'Losing 6 points, and it can be a crime.' }
        ],
        answer: 2,
        explain: { ru: 'Отказ — очень серьёзное нарушение (6 баллов), а по Уголовному кодексу (ст. 383) — преступление: тюрьма от 6 месяцев до 1 года и лишение прав на 1–4 года. Машину могут задержать. LSV, ст. 77 d; прил. II.', en: 'Refusing is a very serious offence (6 points) and, under the Criminal Code (art. 383), a crime: 6 months to 1 year in prison and a 1–4 year driving ban. The vehicle may be immobilised. LSV art. 77 d; Annex II.' } },
      { es: 'Un conductor da 0,65 mg/l en aire espirado. ¿Qué ha cometido?',
        prompt: { ru: 'Водитель показал 0,65 мг/л в выдыхаемом воздухе. Что он совершил?', en: 'A driver blows 0.65 mg/l. What has he committed?' },
        options: [
          { es: 'Un delito contra la seguridad vial.', ru: 'Преступление против безопасности дорожного движения.', en: 'A crime against road safety.' },
          { es: 'Una infracción leve.', ru: 'Лёгкое нарушение.', en: 'A minor offence.' },
          { es: 'Nada, si no ha causado un accidente.', ru: 'Ничего, если не было ДТП.', en: 'Nothing, if he caused no accident.' }
        ],
        answer: 0,
        explain: { ru: 'Больше 0,60 мг/л воздуха (1,2 г/л крови) — преступление: суд, лишение прав на 1–4 года и, на выбор суда, тюрьма 3–6 месяцев, штраф или общественные работы. Código Penal, ст. 379.2.', en: 'Over 0.60 mg/l breath (1.2 g/l blood) is a crime: court, a 1–4 year driving ban and, as the court decides, 3–6 months in prison, a fine or community work. Criminal Code art. 379.2.' } },
      { es: '¿Qué multa corresponde a quien conduce con más del doble de la tasa de alcohol permitida, sin llegar a delito?',
        prompt: { ru: 'Какой штраф за езду с уровнем алкоголя больше чем вдвое выше нормы (без преступления)?', en: 'What fine applies for driving with more than double the alcohol limit (short of a crime)?' },
        options: [
          { es: '500 euros.', ru: '500 евро.', en: '€500.' },
          { es: '1.000 euros.', ru: '1000 евро.', en: '€1,000.' },
          { es: '200 euros.', ru: '200 евро.', en: '€200.' }
        ],
        answer: 1,
        explain: { ru: 'Обычно алкоголь — 500 €; вдвое выше нормы или повторно в течение года — 1000 €. LSV, ст. 80.2 a.', en: 'Alcohol is normally €500; double the limit or a repeat within a year — €1,000. LSV art. 80.2 a.' } },
      { es: '¿Qué tasa de drogas se permite para conducir?',
        prompt: { ru: 'Какое количество наркотиков в организме допускается за рулём?', en: 'What level of drugs is allowed for driving?' },
        options: [
          { es: 'La misma que de alcohol.', ru: 'Такое же, как для алкоголя.', en: 'The same as for alcohol.' },
          { es: 'Una pequeña cantidad de cannabis.', ru: 'Небольшое количество каннабиса.', en: 'A small amount of cannabis.' },
          { es: 'Ninguna: está prohibido conducir con presencia de drogas en el organismo.', ru: 'Никакое: водить с наркотиками в организме запрещено.', en: 'None: driving with drugs present in the body is forbidden.' }
        ],
        answer: 2,
        explain: { ru: 'Для наркотиков нулевая терпимость: наказывается само присутствие в организме — 1000 € и 6 баллов. LSV, ст. 14 и 77 c.', en: 'Drugs have zero tolerance: their mere presence is punished — €1,000 and 6 points. LSV arts. 14 and 77 c.' } },
      { es: '¿Cómo se detecta en un control si el conductor ha consumido drogas?',
        prompt: { ru: 'Как на посту проверяют, употреблял ли водитель наркотики?', en: 'How is drug use detected at a roadside check?' },
        options: [
          { es: 'Con una muestra de saliva.', ru: 'По пробе слюны.', en: 'With a saliva sample.' },
          { es: 'Con el etilómetro de aire.', ru: 'Алкотестером по воздуху.', en: 'With the breathalyser.' },
          { es: 'Solo observando al conductor.', ru: 'Только по внешнему виду водителя.', en: 'Only by observing the driver.' }
        ],
        answer: 0,
        explain: { ru: 'Тест на наркотики делают по слюне; положительный результат подтверждает лаборатория. Manual DGT, тема 3.', en: 'The drug test uses saliva; a laboratory confirms a positive result. DGT manual, topic 3.' } },
      { es: '¿Qué efecto típico de la cocaína es peligroso al volante?',
        prompt: { ru: 'Какой типичный эффект кокаина опасен за рулём?', en: 'Which typical effect of cocaine is dangerous at the wheel?' },
        options: [
          { es: 'Sueño profundo inmediato.', ru: 'Немедленный глубокий сон.', en: 'Immediate deep sleep.' },
          { es: 'Pérdida de la sensación de peligro y conducción agresiva.', ru: 'Потеря чувства опасности и агрессивная езда.', en: 'Loss of the sense of danger and aggressive driving.' },
          { es: 'Mayor prudencia.', ru: 'Больше осторожности.', en: 'Greater caution.' }
        ],
        answer: 1,
        explain: { ru: 'Кокаин делает импульсивным и агрессивным, убирает чувство опасности; когда эффект проходит, наваливается усталость. Manual DGT, тема 3.', en: 'Cocaine makes drivers impulsive and aggressive and removes the sense of danger; fatigue follows when it wears off. DGT manual, topic 3.' } },
      { es: 'La caja de un medicamento muestra un coche dentro de un triángulo rojo. ¿Qué significa?',
        prompt: { ru: 'На коробке лекарства — машина в красном треугольнике. Что это значит?', en: 'A medicine box shows a car inside a red triangle. What does it mean?' },
        options: [
          { es: 'Que solo se vende en farmacias de carretera.', ru: 'Что продаётся только в аптеках у дорог.', en: 'That it is only sold in roadside pharmacies.' },
          { es: 'Que puede tomarse sin problema al conducir.', ru: 'Что его можно спокойно принимать за рулём.', en: 'That it is fine to take while driving.' },
          { es: 'Que puede afectar a la capacidad para conducir.', ru: 'Что оно может ухудшить способность водить.', en: 'That it may affect your ability to drive.' }
        ],
        answer: 2,
        explain: { ru: 'Этот значок предупреждает: лекарство может мешать вождению. Прочитайте инструкцию и спросите врача. RGC, ст. 27.', en: 'This symbol warns that the medicine may impair driving. Read the leaflet and ask your doctor. RGC art. 27.' } },
      { es: '¿Qué efecto frecuente tienen los antihistamínicos para la alergia?',
        prompt: { ru: 'Какой частый эффект у антигистаминных средств от аллергии?', en: 'What common effect do antihistamines for allergies have?' },
        options: [
          { es: 'Somnolencia y pérdida de reflejos.', ru: 'Сонливость и замедленные рефлексы.', en: 'Drowsiness and slower reflexes.' },
          { es: 'Mejoran la visión nocturna.', ru: 'Улучшают ночное зрение.', en: 'They improve night vision.' },
          { es: 'Ninguno relacionado con la conducción.', ru: 'Никакого, связанного с вождением.', en: 'None related to driving.' }
        ],
        answer: 0,
        explain: { ru: 'Антигистаминные, психотропные, обезболивающие и противокашлевые могут вызывать сонливость и замедлять реакцию. Manual DGT, тема 3.', en: 'Antihistamines, psychiatric drugs, painkillers and cough medicines can cause drowsiness and slow reactions. DGT manual, topic 3.' } },
      { es: 'En un viaje largo, ¿cada cuánto se recomienda descansar?',
        prompt: { ru: 'Как часто советуют отдыхать в дальней поездке?', en: 'On a long trip, how often is it recommended to rest?' },
        options: [
          { es: 'Cada 4 horas o 400 km.', ru: 'Каждые 4 часа или 400 км.', en: 'Every 4 hours or 400 km.' },
          { es: 'Cada 2 horas o 200 km.', ru: 'Каждые 2 часа или 200 км.', en: 'Every 2 hours or 200 km.' },
          { es: 'Solo cuando se nota cansancio.', ru: 'Только когда чувствуется усталость.', en: 'Only when you feel tired.' }
        ],
        answer: 1,
        explain: { ru: 'Отдыхать 20–30 минут каждые 2 часа или 200 км, даже если усталости не чувствуете. Manual DGT, тема 3.', en: 'Rest for 20–30 minutes every 2 hours or 200 km, even if you do not feel tired. DGT manual, topic 3.' } },
      { es: 'Nota los primeros síntomas de sueño al volante. ¿Qué es lo más adecuado?',
        prompt: { ru: 'Вы чувствуете первые признаки сонливости за рулём. Что правильнее всего сделать?', en: 'You notice the first signs of sleepiness at the wheel. What is the best thing to do?' },
        options: [
          { es: 'Abrir la ventanilla y subir la música.', ru: 'Открыть окно и сделать музыку громче.', en: 'Open the window and turn up the music.' },
          { es: 'Acelerar para llegar antes.', ru: 'Ускориться, чтобы быстрее доехать.', en: 'Speed up to get there sooner.' },
          { es: 'Parar en un lugar seguro y dormir 20 o 30 minutos.', ru: 'Остановиться в безопасном месте и поспать 20–30 минут.', en: 'Stop in a safe place and sleep for 20 or 30 minutes.' }
        ],
        answer: 2,
        explain: { ru: 'Против сонливости помогает только отдых: короткий сон 20–30 минут. Окно и музыка дают лишь несколько минут бодрости. Manual DGT, тема 3.', en: 'Only rest helps against sleepiness: a 20–30 minute nap. A window or music give just a few minutes of alertness. DGT manual, topic 3.' } },
      { es: '¿Cuál de estos es un síntoma de somnolencia?',
        prompt: { ru: 'Что из этого — признак сонливости?', en: 'Which of these is a sign of sleepiness?' },
        options: [
          { es: 'No recordar los últimos kilómetros recorridos.', ru: 'Не помнить последние проеханные километры.', en: 'Not remembering the last kilometres driven.' },
          { es: 'Ver mejor de lo normal.', ru: 'Видеть лучше обычного.', en: 'Seeing better than usual.' },
          { es: 'Reaccionar más rápido.', ru: 'Реагировать быстрее.', en: 'Reacting faster.' }
        ],
        answer: 0,
        explain: { ru: 'Признаки: зевота, тяжёлые веки, выход из полосы, провалы в памяти о дороге, пропуск знаков. Manual DGT, тема 3.', en: 'Signs: yawning, heavy eyelids, drifting out of lane, gaps in memory of the road, missing signs. DGT manual, topic 3.' } },
      { es: '¿En qué momentos del día es más probable sufrir somnolencia al volante?',
        prompt: { ru: 'В какое время суток сонливость за рулём наиболее вероятна?', en: 'At what times of day is sleepiness at the wheel most likely?' },
        options: [
          { es: 'A media mañana.', ru: 'В середине утра.', en: 'Mid-morning.' },
          { es: 'De madrugada y después de comer.', ru: 'На рассвете и после обеда.', en: 'In the early hours and after lunch.' },
          { es: 'Al atardecer, con mucho tráfico.', ru: 'Вечером при плотном трафике.', en: 'At dusk, in heavy traffic.' }
        ],
        answer: 1,
        explain: { ru: 'Сон чаще одолевает на рассвете и после обеда, а также на пустой монотонной дороге. Manual DGT, тема 3.', en: 'Sleepiness hits most in the early hours and after lunch, and on empty, monotonous roads. DGT manual, topic 3.' } },
      { es: '¿Cuál es el tiempo de reacción normal de un conductor en buenas condiciones?',
        prompt: { ru: 'Каково обычное время реакции водителя в хорошем состоянии?', en: 'What is the normal reaction time of a driver in good condition?' },
        options: [
          { es: 'Entre 2 y 3 segundos.', ru: 'От 2 до 3 секунд.', en: 'Between 2 and 3 seconds.' },
          { es: 'Menos de una décima de segundo.', ru: 'Меньше десятой доли секунды.', en: 'Under a tenth of a second.' },
          { es: 'Entre medio segundo y un segundo.', ru: 'От половины секунды до секунды.', en: 'Between half a second and one second.' }
        ],
        answer: 2,
        explain: { ru: 'Обычно 0,5–1 с; усталость, алкоголь, лекарства и отвлечения его увеличивают. Manual DGT, тема 3.', en: 'Normally 0.5–1 s; fatigue, alcohol, medicines and distractions make it longer. DGT manual, topic 3.' } },
      { es: '¿Qué temperatura aproximada se recomienda dentro del vehículo para evitar la fatiga?',
        prompt: { ru: 'Какую температуру в салоне советуют, чтобы не уставать?', en: 'What temperature inside the car is recommended to avoid fatigue?' },
        options: [
          { es: 'Unos 23 grados.', ru: 'Около 23 градусов.', en: 'About 23 degrees.' },
          { es: 'Unos 28 grados.', ru: 'Около 28 градусов.', en: 'About 28 degrees.' },
          { es: 'Unos 16 grados.', ru: 'Около 16 градусов.', en: 'About 16 degrees.' }
        ],
        answer: 0,
        explain: { ru: 'Жара в салоне утомляет и замедляет реакцию; DGT советует около 23 °C. Manual DGT, тема 3.', en: 'Heat in the car tires you and slows reactions; the DGT recommends about 23 °C. DGT manual, topic 3.' } },
      { es: '¿Se puede hablar por teléfono mientras se conduce?',
        prompt: { ru: 'Можно ли говорить по телефону за рулём?', en: 'May you talk on the phone while driving?' },
        options: [
          { es: 'Sí, sujetándolo con la mano si la llamada es corta.', ru: 'Да, держа в руке, если звонок короткий.', en: 'Yes, holding it, if the call is short.' },
          { es: 'Solo con un sistema de manos libres, sin usar las manos ni auriculares.', ru: 'Только через hands-free, без рук и наушников.', en: 'Only with a hands-free system, without using hands or earphones.' },
          { es: 'Sí, con un auricular en un oído.', ru: 'Да, с наушником в одном ухе.', en: 'Yes, with an earphone in one ear.' }
        ],
        answer: 1,
        explain: { ru: 'Разговор допускается только без рук и без наушников; телефон в руке — 6 баллов, наушник — 3 балла. RGC, ст. 18.2; LSV, прил. II.', en: 'Talking is allowed only without hands or earphones; a phone in the hand — 6 points, an earphone — 3 points. RGC art. 18.2; LSV Annex II.' } },
      { es: '¿Cuánto aumenta el riesgo de accidente al usar el móvil conduciendo?',
        prompt: { ru: 'Во сколько раз растёт риск ДТП при использовании телефона за рулём?', en: 'How much does using a phone while driving increase the crash risk?' },
        options: [
          { es: 'Se multiplica por cuatro.', ru: 'В четыре раза.', en: 'It is multiplied by four.' },
          { es: 'No aumenta con el manos libres ni sin él.', ru: 'Не растёт ни с hands-free, ни без.', en: 'It does not increase, with or without hands-free.' },
          { es: 'Aumenta un 10 %.', ru: 'На 10 %.', en: 'By 10 %.' }
        ],
        answer: 0,
        explain: { ru: 'Риск аварии с телефоном в 4 раза выше: внимание уходит в разговор, хуже оцениваются расстояния. Manual DGT, тема 3.', en: 'With a phone the crash risk is four times higher: attention goes to the conversation and distances are misjudged. DGT manual, topic 3.' } },
      { es: '¿Cuándo debe programarse el navegador GPS?',
        prompt: { ru: 'Когда нужно настраивать навигатор?', en: 'When should the sat-nav be programmed?' },
        options: [
          { es: 'En los semáforos en rojo.', ru: 'На красном светофоре.', en: 'At red lights.' },
          { es: 'Mientras se conduce despacio.', ru: 'На ходу, когда едешь медленно.', en: 'While driving slowly.' },
          { es: 'Antes de empezar a circular.', ru: 'До начала движения.', en: 'Before setting off.' }
        ],
        answer: 2,
        explain: { ru: 'Маршрут вводят до поездки; управлять навигатором рукой на ходу — 3 балла. Manual DGT, тема 3; LSV, прил. II, п. 20.', en: 'Enter the route before the trip; operating a sat-nav by hand while driving costs 3 points. DGT manual, topic 3; LSV Annex II, item 20.' } },
      { es: '¿Qué grupo de conductores sufre con más frecuencia accidentes por distracción?',
        prompt: { ru: 'У каких водителей чаще всего бывают аварии из-за отвлечения?', en: 'Which drivers most often have crashes due to distraction?' },
        options: [
          { es: 'Los de 40 a 50 años.', ru: 'От 40 до 50 лет.', en: 'Those aged 40 to 50.' },
          { es: 'Los jóvenes de 18 a 25 años y los mayores de 70.', ru: 'Молодые 18–25 лет и старше 70.', en: 'Young drivers aged 18 to 25 and those over 70.' },
          { es: 'Los profesionales del transporte.', ru: 'Профессиональные водители.', en: 'Professional drivers.' }
        ],
        answer: 1,
        explain: { ru: 'Чаще всего отвлекаются молодые (18–25) и пожилые (старше 70), а также когда в машине пассажиры, летом и на трассах. Manual DGT, тема 3.', en: 'Distraction crashes are most common among young (18–25) and older (70+) drivers, and with passengers, in summer and on motorways. DGT manual, topic 3.' } },
      { es: 'Acaba de tener una discusión muy fuerte. ¿Qué debe hacer antes de conducir?',
        prompt: { ru: 'У вас только что была сильная ссора. Что сделать перед тем, как сесть за руль?', en: 'You have just had a heated argument. What should you do before driving?' },
        options: [
          { es: 'Conducir rápido para despejarse.', ru: 'Поехать быстро, чтобы проветриться.', en: 'Drive fast to clear your head.' },
          { es: 'Esperar a estar tranquilo.', ru: 'Подождать, пока успокоитесь.', en: 'Wait until you are calm.' },
          { es: 'Tomar una copa para relajarse.', ru: 'Выпить, чтобы расслабиться.', en: 'Have a drink to relax.' }
        ],
        answer: 1,
        explain: { ru: 'Сильные эмоции снижают концентрацию и толкают к риску; сначала нужно успокоиться. Manual DGT, тема 3.', en: 'Strong emotions reduce concentration and push you to take risks; calm down first. DGT manual, topic 3.' } },
      { es: '¿Qué calzado es el más adecuado para conducir un turismo?',
        prompt: { ru: 'Какая обувь лучше всего подходит для вождения легковой машины?', en: 'Which footwear is best for driving a car?' },
        options: [
          { es: 'Cómodo, ligero y que sujete el pie.', ru: 'Удобная, лёгкая, хорошо держит ногу.', en: 'Comfortable, light and holding the foot well.' },
          { es: 'Chanclas, para notar mejor los pedales.', ru: 'Шлёпанцы — лучше чувствуешь педали.', en: 'Flip-flops, to feel the pedals better.' },
          { es: 'Botas con suela muy gruesa.', ru: 'Ботинки с очень толстой подошвой.', en: 'Boots with very thick soles.' }
        ],
        answer: 0,
        explain: { ru: 'Шлёпанцы соскальзывают, каблуки и толстая подошва мешают чувствовать педали. Manual DGT, тема 3.', en: 'Flip-flops slip, heels and thick soles stop you feeling the pedals. DGT manual, topic 3.' } },
      { es: 'En su permiso aparece el código 01. ¿Qué significa?',
        prompt: { ru: 'В ваших правах указан код 01. Что он означает?', en: 'Your licence shows code 01. What does it mean?' },
        options: [
          { es: 'Que solo puede conducir de día.', ru: 'Что можно водить только днём.', en: 'That you may only drive in daylight.' },
          { es: 'Que el vehículo debe ser automático.', ru: 'Что машина должна быть с автоматической коробкой.', en: 'That the car must be automatic.' },
          { es: 'Que debe conducir con gafas o lentillas.', ru: 'Что водить нужно в очках или линзах.', en: 'That you must drive with glasses or contact lenses.' }
        ],
        answer: 2,
        explain: { ru: 'Код 01 — коррекция зрения: очки или линзы обязательны за рулём. Коробка-автомат — код 78. RGCond, прил. I.', en: 'Code 01 means vision correction: glasses or lenses are compulsory when driving. Automatic only is code 78. RGCond Annex I.' } }
    ]
  }
]);
