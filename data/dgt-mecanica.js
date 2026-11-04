// Driving theory (DGT): controls, driving position, mirrors, vehicle systems and maintenance, tyres and brakes.
// DGT «Manual básico», Temas 5, 6 y 15; Reglamento General de Vehículos.
ECA.data.addDgt([
  {
    id: 'mecanica',
    cats: ['A', 'B'],
    title: { ru: 'Устройство машины', en: 'The vehicle' },
    summary: {
      ru: 'Посадка и зеркала, шины и давление, тормоза и ABS, масло, охлаждение, аккумулятор, подвеска, рулевое, дым из выхлопа.',
      en: 'Seating and mirrors, tyres and pressure, brakes and ABS, oil, cooling, battery, suspension, steering, exhaust smoke.'
    },
    hero: {
      es: '<b>Mecánica</b> y mantenimiento',
      sub: { ru: 'Что проверять, чтобы машина не подвела', en: 'What to check so the car doesn’t let you down' }
    },
    tabs: [
      {
        id: 'puesto',
        label: { ru: 'Посадка', en: 'Position' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'blue', title: { ru: 'Сиденье', en: 'Seat' }, es: 'piernas <b>ligeramente dobladas</b>, muñecas sobre el volante', body: { ru: 'Педали выжимаются до пола без вытянутых ног; откинувшись на спинку и вытянув руки, запястья ложатся на верх руля; голова выше руля.', en: 'You can press the pedals fully without straight legs; leaning back with arms out, wrists rest on top of the wheel; head above the wheel.' } },
              { color: 'teal', title: { ru: 'Руль', en: 'Steering wheel' }, es: 'dos manos, por <b>fuera</b>, sin cruzarlas', body: { ru: 'Двумя руками за внешний обод, крепко, но без напряжения, не перекрещивая руки.', en: 'Both hands on the outer rim, firmly but relaxed, without crossing your arms.' } },
              { color: 'amber', title: { ru: 'Зеркала', en: 'Mirrors' }, es: 'interior: los <b>cuatro bordes</b> de la luneta', body: { ru: 'В салонном зеркале видно всё заднее стекло; в боковых — дорогу сзади и чуть-чуть своего борта.', en: 'The interior mirror shows the whole rear window; the side mirrors show the road behind and a sliver of your own car.' } },
              { color: 'purple', title: { ru: 'Какие обязательны', en: 'Which are compulsory' }, es: 'retrovisor <b>izquierdo</b> e interior', body: { ru: 'Легковой: левое наружное и салонное обязательны, правое — рекомендуется (обязательно, если сзади шторки или груз закрывает обзор). Мопед и мотоцикл до 100 км/ч — левое; мотоцикл быстрее — оба.', en: 'Car: the left exterior and interior mirrors are compulsory, the right one recommended (required if rear blinds or a load block the view). Moped and bike under 100 km/h — left; faster bikes — both.' } }
            ]
          },
          {
            type: 'text',
            body: {
              ru: ['Нельзя клеить плёнки и наклейки, ухудшающие обзор, и ставить неразрешённые тонированные стёкла. Дворники не включают по сухому стеклу; щётки меняют, когда остаются полосы.', 'Помощники (распознавание знаков, удержание полосы, камеры, круиз-контроль, ограничитель скорости) помогают, но не заменяют внимание водителя.'],
              en: ['No films or stickers that reduce visibility and no unapproved tinted glass. Don’t run the wipers on a dry screen; replace blades when they streak.', 'Driver aids (sign recognition, lane keeping, cameras, cruise control, speed limiter) help but don’t replace the driver’s attention.']
            }
          }
        ]
      },
      {
        id: 'ruedas',
        label: { ru: 'Шины', en: 'Tyres' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'blue', title: { ru: 'Протектор', en: 'Tread' }, es: 'al menos <b>1,6 mm</b> de profundidad', body: { ru: 'Канавки протектора легковой — не меньше 1,6 мм. Они отводят воду, охлаждают шину и держат дорогу.', en: 'Car tread grooves must be at least 1.6 mm deep. They clear water, cool the tyre and give grip.' } },
              { color: 'teal', title: { ru: 'Давление', en: 'Pressure' }, es: 'presión del fabricante, <b>en frío</b>, cada mes', body: { ru: 'Проверять раз в месяц и перед дальней поездкой, на холодных шинах. Запаска — чуть выше нормы.', en: 'Check monthly and before long trips, with cold tyres. The spare slightly higher.' } },
              { color: 'amber', title: { ru: 'Мало воздуха', en: 'Underinflated' }, es: 'presión <b>baja</b>: se calienta y gasta más', body: { ru: 'Шина греется и деформируется, быстрее изнашивается по краям, растёт расход, машина менее устойчива, выше риск аквапланирования.', en: 'The tyre heats and deforms, wears faster at the edges, fuel use rises, the car is less stable, aquaplaning is more likely.' } },
              { color: 'coral', title: { ru: 'Много воздуха', en: 'Overinflated' }, es: 'presión <b>alta</b>: menos contacto y agarre', body: { ru: 'Меньше пятно контакта и сцепление, износ по центру, машину трясёт.', en: 'Less contact patch and grip, centre wear, a harsher ride.' } },
              { color: 'purple', title: { ru: 'Прокол', en: 'Puncture' }, es: 'frenar <b>suave</b>; rueda de galleta: 80 km/h', body: { ru: 'Сбавлять плавно, без резкого торможения, остановиться в безопасном месте. «Докатка» — примерно до 80 км/ч и около 200 км.', en: 'Slow down gently without harsh braking, stop somewhere safe. A space-saver spare — about 80 km/h and some 200 km.' } }
            ]
          },
          {
            type: 'text',
            body: {
              ru: 'Пособие DGT советует менять шины примерно каждые 5 лет, даже если они выглядят нормально. Быстрее изнашивают шины: агрессивная езда, скорость, жара, перегруз, неправильное давление, плохие дороги. Вибрация руля и неравномерный износ — признак нарушенной балансировки.',
              en: 'The DGT manual advises replacing tyres about every 5 years even if they look fine. Faster wear comes from aggressive driving, speed, heat, overloading, wrong pressure, poor roads. A vibrating wheel and uneven wear point to poor balancing.'
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>«1,6 и холодные»</b>: протектор не меньше 1,6 мм, давление — на холодных шинах.',
              en: '<b>“1.6 and cold”</b>: tread at least 1.6 mm, pressure checked cold.'
            }
          }
        ]
      },
      {
        id: 'frenos',
        label: { ru: 'Тормоза', en: 'Brakes' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'blue', title: { ru: 'Тормоз двигателем', en: 'Engine braking' }, es: '<b>freno motor</b>: marchas cortas', body: { ru: 'Отпуская газ, двигатель тормозит машину; на 1-й и 2-й — сильнее. На длинном спуске экономит тормоза.', en: 'Lifting off, the engine slows the car; more so in 1st and 2nd. On a long descent it saves the brakes.' } },
              { color: 'teal', title: { ru: 'С ABS', en: 'With ABS' }, es: 'con <b>ABS</b>: pisar fuerte y a fondo hasta parar', body: { ru: 'Экстренно: давить сильно и до конца, не отпуская. ABS не даёт колёсам блокироваться, и можно рулить.', en: 'In an emergency press hard and fully, without letting go. ABS stops the wheels locking so you can still steer.' } },
              { color: 'amber', title: { ru: 'Без ABS', en: 'Without ABS' }, es: 'sin ABS: a fondo y aflojar al <b>bloquear</b>', body: { ru: 'Давить сильно; когда колёса начинают блокироваться — чуть отпустить, но продолжать тормозить.', en: 'Press hard; when the wheels start to lock, ease slightly but keep braking.' } },
              { color: 'coral', title: { ru: 'Перегрев', en: 'Overheating' }, es: 'frenos calientes: <b>soltar</b> para que se enfríen', body: { ru: 'После долгого торможения тормоза «устают»: отпустите педаль, тормозите двигателем.', en: 'After long braking, brakes fade: release the pedal and use engine braking.' } },
              { color: 'purple', title: { ru: 'Что проверять', en: 'What to check' }, es: '<b>líquido de frenos</b> y pastillas', body: { ru: 'Уровень тормозной жидкости между min и max, износ колодок, давление в шинах.', en: 'Brake fluid between min and max, pad wear, tyre pressure.' } }
            ]
          }
        ]
      },
      {
        id: 'motor',
        label: { ru: 'Мотор', en: 'Engine' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'amber', title: { ru: 'Масло', en: 'Oil' }, es: '<b>varilla</b> con el motor parado y frío', body: { ru: 'Уровень по щупу между min и max, мотор заглушён и холодный. Загорелась лампа давления масла — остановиться и не ехать, пока не выясните причину. Менять масло — на ровном месте, мотор тёплый.', en: 'Dipstick level between min and max, engine off and cold. Oil pressure warning on — stop and don’t drive on until you find out why. Change oil on level ground with a warm engine.' } },
              { color: 'blue', title: { ru: 'Охлаждение', en: 'Cooling' }, es: '<b>líquido refrigerante</b> entre mínimo y máximo, en frío', body: { ru: 'Жидкость гонит насос через радиатор. Проверять на холодном моторе; перед зимой убедиться, что не замёрзнет.', en: 'A pump drives coolant through the radiator. Check with a cold engine; before winter make sure it won’t freeze.' } },
              { color: 'teal', title: { ru: 'Электрика', en: 'Electrics' }, es: '<b>batería</b>, alternador y correa', body: { ru: 'Аккумулятор — чистый, сухой, закреплён. Генератор заряжает его на ходу через ремень; ремень проверять. Свечи дают искру.', en: 'Battery clean, dry, secure. The alternator charges it while driving via a belt; check the belt. Spark plugs make the spark.' } },
              { color: 'purple', title: { ru: 'Воздушный фильтр', en: 'Air filter' }, es: 'filtro de aire sucio: <b>más consumo</b>, humo negro', body: { ru: 'Грязный фильтр повышает расход и может дать чёрный дым; проверять чаще летом и на пыльных дорогах.', en: 'A dirty filter raises fuel use and can cause black smoke; check more often in summer and on dusty roads.' } }
            ]
          },
          {
            type: 'table', heading: { ru: 'Цвет дыма из выхлопной трубы', en: 'Exhaust smoke colour' },
            head: [{ ru: 'Дым', en: 'Smoke' }, { ru: 'Что значит', en: 'What it means' }],
            rows: [
              [{ ru: 'Белый при холодном пуске', en: 'White on a cold start' }, { ru: 'Пар, нормально', en: 'Steam, normal' }],
              [{ ru: 'Белый на прогретом', en: 'White when warm' }, { ru: 'Возможна поломка', en: 'Possible fault' }],
              [{ ru: 'Бело-голубой', en: 'Bluish white' }, { ru: 'Слишком много масла', en: 'Too much oil' }],
              [{ ru: 'Чёрный', en: 'Black' }, { ru: 'Грязный фильтр / смесь', en: 'Dirty filter / fuel mix' }]
            ]
          },
          {
            type: 'rules', heading: { ru: 'Ходовая', en: 'Running gear' },
            items: [
              { color: 'blue', title: { ru: 'Привод', en: 'Drive' }, es: '<b>tracción</b> delantera, propulsión trasera, total', body: { ru: 'Передний (tracción), задний (propulsión) или полный привод. Первая передача — самая «сильная» и самая медленная.', en: 'Front (tracción), rear (propulsión) or all-wheel drive. First gear gives most force and least speed.' } },
              { color: 'amber', title: { ru: 'Рулевое', en: 'Steering' }, es: 'tira hacia un lado = <b>presión desigual</b>', body: { ru: 'Тяжёлый руль — мало давления в шинах; уводит в сторону — разное давление; вибрация — балансировка.', en: 'Heavy steering — low tyre pressure; pulling to one side — uneven pressure; vibration — balancing.' } },
              { color: 'coral', title: { ru: 'Подвеска', en: 'Suspension' }, es: '<b>amortiguadores</b> gastados: más frenada y aquaplaning', body: { ru: 'Изношенные амортизаторы: машину раскачивает, длиннее тормозной путь, хуже работает ABS, выше риск аквапланирования, фары «прыгают» и слепят.', en: 'Worn dampers: the car wallows, braking distance grows, ABS works worse, aquaplaning is likelier, lights bounce and dazzle.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: ['<b>Красная лампа — стоп</b> (масло, тормоза, температура); жёлтая — «скоро в сервис».', '<b>Жидкости — на холодном</b>: масло и охлаждающую проверяют на остывшем моторе.'],
              en: ['<b>A red warning light means stop</b> (oil, brakes, temperature); amber means “service soon”.', '<b>Fluids are checked cold</b>: oil and coolant on a cooled engine.']
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
              ['el embrague', { ru: 'сцепление', en: 'clutch' }],
              ['el acelerador', { ru: 'газ (педаль)', en: 'accelerator' }],
              ['el freno de mano', { ru: 'ручной тормоз', en: 'handbrake' }],
              ['la caja de cambios', { ru: 'коробка передач', en: 'gearbox' }],
              ['el neumático', { ru: 'шина', en: 'tyre' }],
              ['la llanta', { ru: 'колёсный диск', en: 'wheel rim' }],
              ['la banda de rodamiento', { ru: 'протектор', en: 'tread' }],
              ['la presión de inflado', { ru: 'давление в шинах', en: 'tyre pressure' }],
              ['el pinchazo', { ru: 'прокол', en: 'puncture' }],
              ['la rueda de repuesto', { ru: 'запасное колесо', en: 'spare wheel' }],
              ['el aceite / la varilla', { ru: 'масло / щуп', en: 'oil / dipstick' }],
              ['el líquido refrigerante', { ru: 'охлаждающая жидкость', en: 'coolant' }],
              ['el líquido de frenos', { ru: 'тормозная жидкость', en: 'brake fluid' }],
              ['las pastillas de freno', { ru: 'тормозные колодки', en: 'brake pads' }],
              ['la batería', { ru: 'аккумулятор', en: 'battery' }],
              ['el amortiguador', { ru: 'амортизатор', en: 'shock absorber' }],
              ['el tubo de escape', { ru: 'выхлопная труба', en: 'exhaust pipe' }],
              ['el testigo luminoso', { ru: 'контрольная лампа', en: 'warning light' }]
            ]
          }
        ]
      }
    ],
    questions: [
      {
        id: 'me-01',
        es: '¿Cuál es la profundidad mínima del dibujo de los neumáticos de un turismo?',
        tr: { ru: 'Какая минимальная глубина протектора шин легковой?', en: 'What is the minimum tread depth for car tyres?' },
        options: [
          { es: '1,6 mm.', ru: '1,6 мм.', en: '1.6 mm.' },
          { es: '1 mm.', ru: '1 мм.', en: '1 mm.' },
          { es: '3 mm.', ru: '3 мм.', en: '3 mm.' }
        ],
        answer: 0,
        explain: { ru: 'Глубина канавок протектора легковой — не меньше 1,6 мм.', en: 'Car tyre grooves must be at least 1.6 mm deep.' },
        hint: { ru: 'Один и шесть.', en: 'One point six.' },
        ref: 'Reglamento General de Vehículos'
      },
      {
        id: 'me-02',
        es: '¿Cuándo debe comprobarse la presión de los neumáticos?',
        tr: { ru: 'Когда проверять давление в шинах?', en: 'When should tyre pressure be checked?' },
        options: [
          { es: 'Con los neumáticos fríos, al menos una vez al mes.', ru: 'На холодных шинах, минимум раз в месяц.', en: 'With cold tyres, at least once a month.' },
          { es: 'Después de un viaje largo, en caliente.', ru: 'После долгой поездки, на горячих.', en: 'After a long trip, while hot.' },
          { es: 'Solo en la ITV.', ru: 'Только на ITV.', en: 'Only at the ITV.' }
        ],
        answer: 0,
        explain: { ru: 'Давление проверяют на холодных шинах (горячие показывают больше), раз в месяц и перед дальней поездкой или с грузом.', en: 'Check on cold tyres (hot ones read higher), monthly and before long or loaded trips.' },
        hint: { ru: 'Давление — на холодную.', en: 'Pressure — when cold.' },
        ref: 'DGT, Manual básico, tema 15'
      },
      {
        id: 'me-03',
        es: '¿Qué ocurre si circula con los neumáticos con menos presión de la recomendada?',
        tr: { ru: 'Что будет, если ездить с давлением ниже нормы?', en: 'What happens if you drive with tyres below the recommended pressure?' },
        options: [
          { es: 'Se calientan, se desgastan antes y aumenta el consumo.', ru: 'Шины греются, быстрее изнашиваются, растёт расход.', en: 'They overheat, wear faster and fuel use rises.' },
          { es: 'Se agarran mejor y gastan menos.', ru: 'Лучше держат дорогу и экономят топливо.', en: 'They grip better and save fuel.' },
          { es: 'No pasa nada.', ru: 'Ничего.', en: 'Nothing.' }
        ],
        answer: 0,
        explain: { ru: 'Недокачанная шина деформируется и греется, изнашивается по краям, растёт расход топлива, машина менее устойчива.', en: 'An underinflated tyre flexes and heats up, wears at the edges, fuel use rises and the car is less stable.' },
        hint: { ru: 'Мягкая шина — горячая и прожорливая.', en: 'Soft tyre — hot and thirsty.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'me-04',
        es: 'Un neumático con exceso de presión se desgasta más…',
        tr: { ru: 'Перекачанная шина сильнее изнашивается…', en: 'An overinflated tyre wears more…' },
        options: [
          { es: 'por el centro de la banda de rodamiento.', ru: '…по центру протектора.', en: '…in the centre of the tread.' },
          { es: 'por los bordes.', ru: '…по краям.', en: '…at the edges.' },
          { es: 'de forma uniforme.', ru: '…равномерно.', en: '…evenly.' }
        ],
        answer: 0,
        explain: { ru: 'Перекачанная шина «выгибается» и касается дороги центром — он и изнашивается. Сцепление хуже, машину трясёт.', en: 'An overinflated tyre bulges and touches the road with its centre, which wears. Less grip and a harsher ride.' },
        hint: { ru: 'Много воздуха — центр, мало — края.', en: 'Too much air — centre; too little — edges.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'me-05',
        es: 'Si se le pincha una rueda circulando, ¿qué debe hacer?',
        tr: { ru: 'Что делать, если на ходу прокололось колесо?', en: 'What should you do if a tyre punctures while driving?' },
        options: [
          { es: 'Sujetar bien el volante y reducir la velocidad poco a poco, sin frenar bruscamente.', ru: 'Крепко держать руль и плавно сбавить скорость, без резкого торможения.', en: 'Hold the wheel firmly and slow down gradually without harsh braking.' },
          { es: 'Frenar a fondo de inmediato.', ru: 'Сразу тормозить в пол.', en: 'Brake hard immediately.' },
          { es: 'Acelerar para llegar a un taller.', ru: 'Ускориться до шиномонтажа.', en: 'Speed up to reach a garage.' }
        ],
        answer: 0,
        explain: { ru: 'Резкое торможение с проколом может развернуть машину. Плавно сбавить, остановиться в безопасном месте (лучше вне дороги и обочины).', en: 'Hard braking with a puncture can spin the car. Slow gently and stop somewhere safe (ideally off the road and shoulder).' },
        hint: { ru: 'Прокол — руль крепко, тормоз мягко.', en: 'Puncture — firm grip, soft brake.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'me-06',
        es: 'Con una rueda de repuesto de uso temporal («de galleta»), ¿cómo debe circular?',
        tr: { ru: 'Как ездить на временной запаске («докатке»)?', en: 'How should you drive on a temporary space-saver spare?' },
        options: [
          { es: 'A velocidad moderada, sin superar unos 80 km/h, y solo hasta el taller.', ru: 'Умеренно, не быстрее примерно 80 км/ч и только до сервиса.', en: 'Moderately, no more than about 80 km/h, and only to a garage.' },
          { es: 'Como con una rueda normal.', ru: 'Как с обычным колесом.', en: 'As with a normal wheel.' },
          { es: 'Solo por autopista.', ru: 'Только по автописте.', en: 'Only on motorways.' }
        ],
        answer: 0,
        explain: { ru: '«Докатка» — временная: примерно до 80 км/ч и около 200 км, чтобы доехать до сервиса.', en: 'A space-saver is temporary: about 80 km/h max and some 200 km, to reach a garage.' },
        hint: { ru: 'Докатка — 80 и до сервиса.', en: 'Space-saver — 80 and to the garage.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'me-07',
        es: 'Para hacer una frenada de emergencia en un vehículo con ABS, ¿qué debe hacer?',
        tr: { ru: 'Как экстренно тормозить на машине с ABS?', en: 'How do you brake in an emergency in a car with ABS?' },
        options: [
          { es: 'Pisar el freno fuerte y a fondo, sin soltarlo, hasta detenerse.', ru: 'Нажать сильно и до конца, не отпуская, до остановки.', en: 'Press hard and fully without releasing until you stop.' },
          { es: 'Pisar y soltar el freno repetidamente.', ru: 'Многократно нажимать и отпускать.', en: 'Pump the brake repeatedly.' },
          { es: 'Usar solo el freno de mano.', ru: 'Только ручником.', en: 'Use only the handbrake.' }
        ],
        answer: 0,
        explain: { ru: 'С ABS — давить сильно и держать. Вибрация педали — это ABS работает; руль при этом слушается.', en: 'With ABS press hard and hold. Pedal vibration is the ABS working; you can still steer.' },
        hint: { ru: 'ABS — «в пол и держи».', en: 'ABS — floor it and hold.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'me-08',
        es: '¿Cuál es la función del sistema ABS?',
        tr: { ru: 'Для чего нужна ABS?', en: 'What does ABS do?' },
        options: [
          { es: 'Evitar que las ruedas se bloqueen al frenar y mantener el control de la dirección.', ru: 'Не даёт колёсам блокироваться и сохраняет управляемость.', en: 'Prevents wheel lock under braking and keeps steering control.' },
          { es: 'Frenar el vehículo automáticamente al aparcar.', ru: 'Сама тормозит при парковке.', en: 'Brakes automatically when parking.' },
          { es: 'Reducir el consumo.', ru: 'Снижает расход.', en: 'Reduces fuel use.' }
        ],
        answer: 0,
        explain: { ru: 'ABS не даёт колёсам заблокироваться при резком торможении, поэтому машину можно объехать вокруг препятствия.', en: 'ABS stops the wheels locking in hard braking, so you can still steer round an obstacle.' },
        hint: { ru: 'ABS — «тормозишь и рулишь».', en: 'ABS — brake and steer.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'me-09',
        es: 'En un descenso largo, ¿cómo se evita que se calienten los frenos?',
        tr: { ru: 'Как не перегреть тормоза на длинном спуске?', en: 'On a long descent, how do you stop the brakes overheating?' },
        options: [
          { es: 'Usando el freno motor con una marcha corta.', ru: 'Тормозить двигателем на низкой передаче.', en: 'Use engine braking in a low gear.' },
          { es: 'Bajando en punto muerto.', ru: 'Спускаться на нейтрали.', en: 'Coast down in neutral.' },
          { es: 'Pisando el freno de forma continua.', ru: 'Постоянно держать тормоз.', en: 'Keep the brake pressed constantly.' }
        ],
        answer: 0,
        explain: { ru: 'На спуске — низкая передача: двигатель тормозит, тормоза не перегреваются. Нейтраль на спуске опасна.', en: 'On a descent use a low gear: the engine brakes, the brakes stay cool. Coasting in neutral is dangerous.' },
        hint: { ru: 'Вниз — передача, а не педаль.', en: 'Downhill — the gear, not the pedal.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'me-10',
        es: '¿Cómo se comprueba el nivel de aceite del motor?',
        tr: { ru: 'Как проверить уровень масла в двигателе?', en: 'How do you check the engine oil level?' },
        options: [
          { es: 'Con la varilla, con el motor parado y frío, en un lugar llano.', ru: 'Щупом, на заглушённом холодном моторе, на ровном месте.', en: 'With the dipstick, engine off and cold, on level ground.' },
          { es: 'Con el motor en marcha.', ru: 'На работающем моторе.', en: 'With the engine running.' },
          { es: 'Mirando el color del humo.', ru: 'По цвету дыма.', en: 'By the colour of the smoke.' }
        ],
        answer: 0,
        explain: { ru: 'Уровень масла — по щупу, на остывшем заглушённом моторе, машина на ровном месте; уровень между min и max.', en: 'Oil is checked with the dipstick, engine off and cooled, car level; it should be between min and max.' },
        hint: { ru: 'Масло — щупом и на холодную.', en: 'Oil — dipstick, cold.' },
        ref: 'DGT, Manual básico, tema 15'
      },
      {
        id: 'me-11',
        es: 'Se enciende el testigo de presión de aceite mientras conduce. ¿Qué debe hacer?',
        tr: { ru: 'В пути загорелась лампа давления масла. Что делать?', en: 'The oil pressure warning light comes on while driving. What should you do?' },
        options: [
          { es: 'Detenerse y no continuar hasta conocer y resolver el problema.', ru: 'Остановиться и не ехать, пока не выясните и не устраните причину.', en: 'Stop and don’t continue until the problem is found and fixed.' },
          { es: 'Seguir hasta casa y revisarlo allí.', ru: 'Доехать домой и там посмотреть.', en: 'Carry on home and check there.' },
          { es: 'Acelerar para aumentar la presión.', ru: 'Добавить газ, чтобы поднять давление.', en: 'Rev the engine to raise pressure.' }
        ],
        answer: 0,
        explain: { ru: 'Лампа давления масла — мало масла или давления. Езда дальше может разрушить двигатель: остановиться.', en: 'The oil warning means low oil or pressure. Driving on can wreck the engine: stop.' },
        hint: { ru: 'Красная лампа — стоп.', en: 'Red light — stop.' },
        ref: 'DGT, Manual básico, tema 15'
      },
      {
        id: 'me-12',
        es: 'Sale humo blanco azulado por el tubo de escape. ¿Qué puede indicar?',
        tr: { ru: 'Из выхлопной трубы идёт бело-голубой дым. Что это может значить?', en: 'Bluish-white smoke comes from the exhaust. What might it mean?' },
        options: [
          { es: 'Que hay exceso de aceite en el motor.', ru: 'В двигателе слишком много масла.', en: 'Too much oil in the engine.' },
          { es: 'Que el filtro de aire está limpio.', ru: 'Воздушный фильтр чистый.', en: 'The air filter is clean.' },
          { es: 'Que falta líquido de frenos.', ru: 'Не хватает тормозной жидкости.', en: 'Brake fluid is low.' }
        ],
        answer: 0,
        explain: { ru: 'Бело-голубой дым — масло горит (его слишком много). Чёрный — грязный воздушный фильтр или смесь. Белый пар при холодном пуске — норма.', en: 'Bluish-white smoke — oil burning (too much of it). Black — a dirty air filter or rich mix. White steam on a cold start is normal.' },
        hint: { ru: 'Голубой — масло, чёрный — топливо, белый — пар.', en: 'Blue — oil, black — fuel, white — steam.' },
        ref: 'DGT, Manual básico, tema 15'
      },
      {
        id: 'me-13',
        es: 'Sale humo negro por el escape. ¿Cuál puede ser una causa?',
        tr: { ru: 'Из выхлопа идёт чёрный дым. Какая может быть причина?', en: 'Black smoke comes from the exhaust. What could cause it?' },
        options: [
          { es: 'El filtro de aire está muy sucio.', ru: 'Сильно загрязнён воздушный фильтр.', en: 'The air filter is very dirty.' },
          { es: 'Es vapor de agua normal.', ru: 'Это обычный пар.', en: 'It’s normal water vapour.' },
          { es: 'Falta líquido refrigerante.', ru: 'Не хватает охлаждающей жидкости.', en: 'Coolant is low.' }
        ],
        answer: 0,
        explain: { ru: 'Грязный воздушный фильтр — мало воздуха, топливо сгорает не полностью: чёрный дым и повышенный расход.', en: 'A dirty air filter means too little air, incomplete combustion: black smoke and higher fuel use.' },
        hint: { ru: 'Чёрный дым — «задыхается» мотор.', en: 'Black smoke — the engine is choking.' },
        ref: 'DGT, Manual básico, tema 15'
      },
      {
        id: 'me-14',
        es: 'Al arrancar en frío sale un poco de humo blanco que luego desaparece. ¿Qué indica?',
        tr: { ru: 'При холодном пуске идёт белый дымок, потом исчезает. Что это?', en: 'On a cold start a little white smoke appears, then disappears. What does it mean?' },
        options: [
          { es: 'Es vapor de agua; es normal.', ru: 'Это пар; нормально.', en: 'It’s steam; normal.' },
          { es: 'Una avería grave del motor.', ru: 'Серьёзная поломка двигателя.', en: 'A serious engine fault.' },
          { es: 'Falta de aceite.', ru: 'Нехватка масла.', en: 'Low oil.' }
        ],
        answer: 0,
        explain: { ru: 'Белый пар на холодном пуске, особенно зимой, — норма. Тревожно, если белый дым идёт на прогретом моторе.', en: 'White steam on a cold start, especially in winter, is normal. It’s a worry if white smoke continues with a warm engine.' },
        hint: { ru: 'Холодно и бело — пар.', en: 'Cold and white — steam.' },
        ref: 'DGT, Manual básico, tema 15'
      },
      {
        id: 'me-15',
        es: '¿Cuándo se debe comprobar el nivel del líquido refrigerante?',
        tr: { ru: 'Когда проверять уровень охлаждающей жидкости?', en: 'When should the coolant level be checked?' },
        options: [
          { es: 'Con el motor frío.', ru: 'На холодном двигателе.', en: 'With the engine cold.' },
          { es: 'Con el motor caliente y en marcha.', ru: 'На горячем работающем.', en: 'With the engine hot and running.' },
          { es: 'Nunca; es un sistema cerrado.', ru: 'Никогда: система закрыта.', en: 'Never; it’s a sealed system.' }
        ],
        answer: 0,
        explain: { ru: 'Охлаждающую жидкость проверяют на холодном моторе (горячую систему открывать опасно), уровень между min и max. Перед зимой — убедиться, что не замёрзнет.', en: 'Check coolant with a cold engine (opening a hot system is dangerous), between min and max. Before winter make sure it won’t freeze.' },
        hint: { ru: 'Жидкости — на холодном.', en: 'Fluids — when cold.' },
        ref: 'DGT, Manual básico, tema 15'
      },
      {
        id: 'me-16',
        es: '¿Qué función tiene el sistema de refrigeración?',
        tr: { ru: 'Для чего нужна система охлаждения?', en: 'What is the cooling system for?' },
        options: [
          { es: 'Mantener el motor a la temperatura adecuada.', ru: 'Поддерживать нужную температуру двигателя.', en: 'Keeping the engine at the right temperature.' },
          { es: 'Enfriar el habitáculo.', ru: 'Охлаждать салон.', en: 'Cooling the cabin.' },
          { es: 'Enfriar los frenos.', ru: 'Охлаждать тормоза.', en: 'Cooling the brakes.' }
        ],
        answer: 0,
        explain: { ru: 'Жидкость забирает тепло у мотора, остывает в радиаторе и возвращается (насос). Без неё двигатель перегреется.', en: 'Coolant takes heat from the engine, cools in the radiator and returns (pump). Without it the engine overheats.' },
        hint: { ru: 'Радиатор — «вентилятор» мотора.', en: 'The radiator is the engine’s fan.' },
        ref: 'DGT, Manual básico, tema 15'
      },
      {
        id: 'me-17',
        es: '¿Qué elemento recarga la batería mientras el motor está en marcha?',
        tr: { ru: 'Что заряжает аккумулятор на работающем двигателе?', en: 'What recharges the battery while the engine runs?' },
        options: [
          { es: 'El alternador.', ru: 'Генератор.', en: 'The alternator.' },
          { es: 'El radiador.', ru: 'Радиатор.', en: 'The radiator.' },
          { es: 'El embrague.', ru: 'Сцепление.', en: 'The clutch.' }
        ],
        answer: 0,
        explain: { ru: 'Генератор (alternador) вырабатывает ток и заряжает аккумулятор; его вращает ремень, который нужно проверять.', en: 'The alternator generates current and charges the battery; it’s driven by a belt that should be checked.' },
        hint: { ru: 'Alternador — «электростанция» машины.', en: 'The alternator is the car’s power station.' },
        ref: 'DGT, Manual básico, tema 15'
      },
      {
        id: 'me-18',
        es: 'Un vehículo de propulsión es aquel en el que la fuerza del motor llega a…',
        tr: { ru: 'Заднеприводная машина (propulsión) — это когда усилие мотора идёт на…', en: 'A “propulsión” vehicle is one whose engine drives…' },
        options: [
          { es: 'las ruedas traseras.', ru: '…задние колёса.', en: '…the rear wheels.' },
          { es: 'las ruedas delanteras.', ru: '…передние колёса.', en: '…the front wheels.' },
          { es: 'todas las ruedas.', ru: '…все колёса.', en: '…all wheels.' }
        ],
        answer: 0,
        explain: { ru: 'Tracción — передний привод, propulsión — задний, tracción total — полный.', en: 'Tracción — front-wheel drive, propulsión — rear-wheel, tracción total — all-wheel.' },
        hint: { ru: 'Propulsión — «толкает» сзади.', en: 'Propulsión — pushes from behind.' },
        ref: 'DGT, Manual básico, tema 15'
      },
      {
        id: 'me-19',
        es: 'Al soltar el volante en una recta, el vehículo se desvía hacia un lado. ¿Cuál puede ser la causa?',
        tr: { ru: 'На прямой, если отпустить руль, машину уводит в сторону. Почему?', en: 'Letting go of the wheel on a straight, the car pulls to one side. Why?' },
        options: [
          { es: 'Diferente presión en los neumáticos.', ru: 'Разное давление в шинах.', en: 'Uneven tyre pressures.' },
          { es: 'Exceso de líquido refrigerante.', ru: 'Избыток охлаждающей жидкости.', en: 'Too much coolant.' },
          { es: 'La batería descargada.', ru: 'Разряжен аккумулятор.', en: 'A flat battery.' }
        ],
        answer: 0,
        explain: { ru: 'Увод в сторону — чаще всего разное давление в шинах; тяжёлый руль — мало давления; вибрация руля — балансировка колёс.', en: 'Pulling — usually uneven tyre pressure; heavy steering — low pressure; a vibrating wheel — wheel balance.' },
        hint: { ru: 'Тянет вбок — проверь шины.', en: 'Pulls sideways — check the tyres.' },
        ref: 'DGT, Manual básico, tema 15'
      },
      {
        id: 'me-20',
        es: '¿Qué consecuencia tienen unos amortiguadores en mal estado?',
        tr: { ru: 'Чем опасны изношенные амортизаторы?', en: 'What do worn shock absorbers cause?' },
        options: [
          { es: 'Más distancia de frenado y más riesgo de aquaplaning.', ru: 'Длиннее тормозной путь и выше риск аквапланирования.', en: 'Longer braking distances and more risk of aquaplaning.' },
          { es: 'Menos consumo de combustible.', ru: 'Меньше расход топлива.', en: 'Lower fuel use.' },
          { es: 'Mejor estabilidad en curva.', ru: 'Лучшая устойчивость в поворотах.', en: 'Better stability in bends.' }
        ],
        answer: 0,
        explain: { ru: 'Колёса хуже прижаты к дороге: длиннее тормозной путь, хуже ABS, раскачка в поворотах и на ветру, риск аквапланирования, фары «прыгают».', en: 'Wheels lose contact with the road: longer braking, poorer ABS, sway in bends and wind, aquaplaning risk, bouncing headlights.' },
        hint: { ru: 'Амортизатор держит колесо на земле.', en: 'Dampers keep the wheel on the ground.' },
        ref: 'DGT, Manual básico, tema 15'
      },
      {
        id: 'me-21',
        es: '¿Qué debe comprobar del sistema de frenos?',
        tr: { ru: 'Что проверять в тормозной системе?', en: 'What should you check in the brake system?' },
        options: [
          { es: 'El nivel del líquido de frenos y el desgaste de pastillas o zapatas.', ru: 'Уровень тормозной жидкости и износ колодок.', en: 'Brake fluid level and pad or shoe wear.' },
          { es: 'El color del aceite del motor.', ru: 'Цвет моторного масла.', en: 'The colour of the engine oil.' },
          { es: 'La correa del alternador.', ru: 'Ремень генератора.', en: 'The alternator belt.' }
        ],
        answer: 0,
        explain: { ru: 'Тормоза: жидкость между min и max и в хорошем состоянии, колодки не изношены и закреплены, давление в шинах в норме.', en: 'Brakes: fluid between min and max and in good condition, pads not worn and secure, tyres correctly inflated.' },
        hint: { ru: 'Тормоза = жидкость + колодки.', en: 'Brakes = fluid + pads.' },
        ref: 'DGT, Manual básico, tema 15'
      },
      {
        id: 'me-22',
        es: '¿Qué retrovisores son obligatorios en un turismo?',
        tr: { ru: 'Какие зеркала обязательны на легковой?', en: 'Which mirrors are compulsory on a car?' },
        options: [
          { es: 'El exterior izquierdo y el interior.', ru: 'Левое наружное и салонное.', en: 'The left exterior and the interior mirror.' },
          { es: 'Solo el interior.', ru: 'Только салонное.', en: 'Only the interior one.' },
          { es: 'Solo los dos exteriores.', ru: 'Только два наружных.', en: 'Only the two exterior ones.' }
        ],
        answer: 0,
        explain: { ru: 'Обязательны левое наружное и салонное; правое — рекомендуемое (обязательно, если сзади шторки или груз мешает салонному зеркалу).', en: 'The left exterior and interior mirrors are compulsory; the right is recommended (required if blinds or a load block the interior mirror).' },
        hint: { ru: 'Левое и внутреннее — всегда.', en: 'Left and inside — always.' },
        ref: 'DGT, Manual básico, tema 6'
      },
      {
        id: 'me-23',
        es: '¿Cuándo está bien colocado el retrovisor interior?',
        tr: { ru: 'Когда салонное зеркало настроено правильно?', en: 'When is the interior mirror correctly set?' },
        options: [
          { es: 'Cuando se ven los cuatro bordes de la luneta trasera.', ru: 'Когда в нём видны все четыре края заднего стекла.', en: 'When you see all four edges of the rear window.' },
          { es: 'Cuando se ve la cara del conductor.', ru: 'Когда видно своё лицо.', en: 'When you see your own face.' },
          { es: 'Cuando se ve solo el techo.', ru: 'Когда видно только потолок.', en: 'When you see only the roof.' }
        ],
        answer: 0,
        explain: { ru: 'Салонное зеркало — всё заднее стекло целиком. Боковые — дорога сзади и сбоку, плюс чуть-чуть своего борта.', en: 'Interior mirror — the whole rear window. Side mirrors — the road behind and beside, plus a sliver of your car.' },
        hint: { ru: 'Заднее стекло — в рамке зеркала.', en: 'The rear window fills the frame.' },
        ref: 'DGT, Manual básico, tema 6'
      },
      {
        id: 'me-24',
        es: '¿Cómo sabe que el respaldo del asiento está a la distancia correcta del volante?',
        tr: { ru: 'Как понять, что спинка сиденья на правильном расстоянии от руля?', en: 'How do you know the seatback is the right distance from the wheel?' },
        options: [
          { es: 'Con la espalda apoyada y los brazos estirados, las muñecas llegan a la parte superior del volante.', ru: 'Спина прижата, руки вытянуты — запястья ложатся на верх руля.', en: 'Back against the seat, arms out — your wrists reach the top of the wheel.' },
          { es: 'Cuando la barbilla toca el volante.', ru: 'Когда подбородок касается руля.', en: 'When your chin touches the wheel.' },
          { es: 'Cuando los brazos quedan totalmente estirados al conducir.', ru: 'Когда при езде руки полностью выпрямлены.', en: 'When your arms are fully straight while driving.' }
        ],
        answer: 0,
        explain: { ru: 'Правильно: запястья вытянутых рук ложатся на верх руля, ноги чуть согнуты, голова выше руля. Слишком близко или далеко — усталость и хуже реакция.', en: 'Correct: wrists of outstretched arms rest on top of the wheel, legs slightly bent, head above the wheel. Too close or far — fatigue and slower reactions.' },
        hint: { ru: 'Запястья на руле — расстояние верное.', en: 'Wrists on the rim — distance right.' },
        ref: 'DGT, Manual básico, tema 6'
      },
      {
        id: 'me-25',
        es: '¿Cómo debe sujetar el volante?',
        tr: { ru: 'Как держать руль?', en: 'How should you hold the steering wheel?' },
        options: [
          { es: 'Con las dos manos, por la parte exterior y sin cruzar los brazos.', ru: 'Двумя руками за внешний обод, не перекрещивая руки.', en: 'With both hands on the outer rim, without crossing your arms.' },
          { es: 'Con una mano por dentro del aro.', ru: 'Одной рукой изнутри обода.', en: 'With one hand inside the rim.' },
          { es: 'Con la palma de la mano en el centro.', ru: 'Ладонью по центру.', en: 'With the palm on the centre.' }
        ],
        answer: 0,
        explain: { ru: 'Двумя руками, снаружи обода, крепко и без напряжения, не перекрещивая руки. Одну руку убирают лишь на время другого действия.', en: 'Both hands, outside the rim, firmly but relaxed, without crossing. Take one hand off only briefly for other controls.' },
        hint: { ru: 'Две руки — снаружи.', en: 'Two hands — outside.' },
        ref: 'DGT, Manual básico, tema 6'
      },
      {
        id: 'me-26',
        es: '¿Es conveniente usar el limpiaparabrisas con el cristal seco?',
        tr: { ru: 'Можно ли включать дворники по сухому стеклу?', en: 'Should you use the wipers on a dry windscreen?' },
        options: [
          { es: 'No, puede rayar el cristal.', ru: 'Нет: можно поцарапать стекло.', en: 'No, it can scratch the glass.' },
          { es: 'Sí, para limpiar el polvo.', ru: 'Да, чтобы смахнуть пыль.', en: 'Yes, to clear dust.' },
          { es: 'Sí, a máxima velocidad.', ru: 'Да, на максимальной скорости.', en: 'Yes, at top speed.' }
        ],
        answer: 0,
        explain: { ru: 'Сухие дворники царапают стекло — сначала омыватель. Щётки меняют, когда остаются полосы.', en: 'Dry wipers scratch the glass — use the washer first. Replace blades when they streak.' },
        hint: { ru: 'Сначала омыватель, потом дворник.', en: 'Washer first, then wipers.' },
        ref: 'DGT, Manual básico, tema 6'
      },
      {
        id: 'me-27',
        es: '¿Se pueden colocar láminas adhesivas en los cristales del vehículo?',
        tr: { ru: 'Можно ли клеить плёнки на стёкла машины?', en: 'May you stick films on your car’s windows?' },
        options: [
          { es: 'Solo las autorizadas y que no reduzcan la visibilidad necesaria.', ru: 'Только разрешённые и не ухудшающие нужный обзор.', en: 'Only approved ones that don’t reduce necessary visibility.' },
          { es: 'Sí, cualquiera.', ru: 'Да, любые.', en: 'Yes, any.' },
          { es: 'Sí, si son oscuras.', ru: 'Да, если тёмные.', en: 'Yes, if dark.' }
        ],
        answer: 0,
        explain: { ru: 'Запрещены плёнки и наклейки, мешающие обзору, и неразрешённые тонированные стёкла.', en: 'Films and stickers that block the view and unapproved tinted glass are banned.' },
        hint: { ru: 'Стекло — чтобы видеть.', en: 'Glass is for seeing through.' },
        ref: 'DGT, Manual básico, tema 6'
      },
      {
        id: 'me-28',
        es: '¿Qué hace un limitador de velocidad?',
        tr: { ru: 'Что делает ограничитель скорости?', en: 'What does a speed limiter do?' },
        options: [
          { es: 'Impide superar la velocidad máxima que elige el conductor.', ru: 'Не даёт превысить выбранную водителем скорость.', en: 'Stops you exceeding a speed the driver sets.' },
          { es: 'Mantiene una velocidad sin pisar el acelerador.', ru: 'Держит скорость без нажатия газа.', en: 'Holds a speed without pressing the throttle.' },
          { es: 'Frena solo ante un obstáculo.', ru: 'Тормозит сам перед препятствием.', en: 'Brakes by itself before an obstacle.' }
        ],
        answer: 0,
        explain: { ru: 'Ограничитель не даёт разогнаться выше выбранного. Круиз-контроль (regulador) держит скорость без газа; адаптивный ещё и соблюдает дистанцию.', en: 'A limiter caps your speed at a chosen value. Cruise control (regulador) holds a speed hands-off; the adaptive one also keeps a gap.' },
        hint: { ru: 'Limitador — «потолок», regulador — «автопилот скорости».', en: 'Limitador — a ceiling; regulador — speed autopilot.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'me-29',
        es: '¿Qué hace el sistema de aviso de salida de carril?',
        tr: { ru: 'Что делает система предупреждения о выходе из полосы?', en: 'What does the lane departure warning do?' },
        options: [
          { es: 'Avisa al conductor si cambia de carril sin querer.', ru: 'Предупреждает, если вы непреднамеренно выезжаете из полосы.', en: 'Warns you if you drift out of your lane unintentionally.' },
          { es: 'Cambia de carril automáticamente.', ru: 'Сама перестраивается.', en: 'Changes lane automatically.' },
          { es: 'Reconoce los semáforos.', ru: 'Распознаёт светофоры.', en: 'Recognises traffic lights.' }
        ],
        answer: 0,
        explain: { ru: 'Система предупреждает (сигнал, вибрация руля или сиденья) при непреднамеренном выезде из полосы — например, от усталости. Это помощь, а не замена внимания.', en: 'The system warns (sound, wheel or seat vibration) when you drift unintentionally — e.g. from fatigue. It assists, it doesn’t replace attention.' },
        hint: { ru: 'Помощник подсказывает — водитель решает.', en: 'The aid prompts — the driver decides.' },
        ref: 'DGT, Manual básico, tema 6'
      },
      {
        id: 'me-30',
        es: 'Un aceite multigrado 10W40, ¿qué ventaja tiene?',
        tr: { ru: 'Чем хорошо всесезонное масло 10W40?', en: 'What is the advantage of a 10W40 multigrade oil?' },
        options: [
          { es: 'Funciona bien tanto en frío como en caliente.', ru: 'Хорошо работает и в холод, и в жару.', en: 'It works well both cold and hot.' },
          { es: 'Solo sirve para invierno.', ru: 'Только для зимы.', en: 'It’s for winter only.' },
          { es: 'No hay que cambiarlo nunca.', ru: 'Его никогда не надо менять.', en: 'It never needs changing.' }
        ],
        answer: 0,
        explain: { ru: '«10W» — текучесть на холоде (легче пуск), «40» — защита при высокой температуре. Масло всё равно меняют вместе с фильтром.', en: '“10W” is cold flow (easier starting), “40” is high-temperature protection. It still needs changing with the filter.' },
        hint: { ru: 'W — winter, вторая цифра — жара.', en: 'W — winter; the second number — heat.' },
        ref: 'DGT, Manual básico, tema 15'
      }
    ]
  }
]);
