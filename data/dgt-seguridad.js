// Driving theory (DGT): passive safety (belts, child seats, airbags, head restraints, helmets),
// carrying people, animals and loads. RGC arts. 9–17, 117–119; DGT «Manual básico», Temas 5 y 13.
ECA.data.addDgt([
  {
    id: 'seguridad',
    cats: ['A', 'B'],
    title: { ru: 'Ремни, дети, груз', en: 'Belts, children, loads' },
    summary: {
      ru: 'Ремень и исключения, детские кресла и рост 135 см, подушки и подголовник, пассажиры, животные и груз.',
      en: 'Seat belts and exemptions, child seats and the 135 cm rule, airbags and head restraints, passengers, animals and loads.'
    },
    hero: {
      es: '<b>Seguridad pasiva</b>, personas y carga',
      sub: { ru: 'Что спасает в аварии и как правильно везти людей и вещи', en: 'What saves you in a crash and how to carry people and things' }
    },
    tabs: [
      {
        id: 'cinturon',
        label: { ru: 'Ремень', en: 'Seat belt' },
        blocks: [
          {
            type: 'text',
            body: {
              ru: ['Ремень пристёгивают <b>все</b>, кто едет в машине с ремнями, — спереди и сзади, в городе и за городом. Правильно пристёгнутый ремень вдвое повышает шанс выжить.', 'Плечевая лента — через ключицу (между плечом и шеей) и середину груди; поясная — на тазовых костях, <b>ниже живота</b>. Спинка не откинута сильно: иначе «эффект подводной лодки» — тело выскальзывает под ремень.'],
              en: ['<b>Everyone</b> in a vehicle with belts wears one — front and back, in town and out. A properly worn belt doubles your chance of survival.', 'The shoulder strap goes over the collarbone (between shoulder and neck) and mid-chest; the lap strap over the hip bones, <b>below the stomach</b>. Don’t recline the seat much, or you get the “submarine effect” — sliding under the belt.']
            }
          },
          {
            type: 'rules', heading: { ru: 'Кому можно без ремня', en: 'Who is exempt' },
            items: [
              { color: 'blue', title: { ru: 'Задний ход и парковка', en: 'Reversing and parking' }, es: 'maniobras de <b>marcha atrás</b> o estacionamiento', body: { ru: 'Только пока паркуетесь задним ходом, в городе.', en: 'Only while reversing to park, in town.' } },
              { color: 'coral', title: { ru: 'Больше не исключение', en: 'No longer exempt' }, es: '<b>taxistas</b>, repartidores y profesores de autoescuela', body: { ru: 'С 1 октября 2026 года таксисты (и VTC), курьеры и инструкторы автошкол тоже пристёгиваются — прежние исключения отменены.', en: 'Since 1 October 2026 taxi (and VTC) drivers, delivery drivers and driving instructors must buckle up too — the old exemptions are gone.' } },
              { color: 'purple', title: { ru: 'По здоровью — везде', en: 'Medical — everywhere' }, es: '<b>certificado médico</b>', body: { ru: 'Освобождённые по медицинским причинам — с медицинской справкой, на любой дороге.', en: 'Those exempt on medical grounds — with a certificate, on any road.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>«Кость, не мякоть»</b>: ремень лежит на ключице и тазе, а не на шее и животе.',
              en: '<b>“Bone, not soft tissue”</b>: the belt sits on collarbone and pelvis, not neck and belly.'
            }
          }
        ]
      },
      {
        id: 'ninos',
        label: { ru: 'Дети', en: 'Children' },
        blocks: [
          {
            type: 'rules',
            items: [
              { color: 'blue', title: { ru: 'До 135 см — кресло', en: 'Under 135 cm — child seat' }, es: '<b>sistema de retención infantil</b> (SRI)', body: { ru: 'Дети ростом до 135 см едут в одобренном детском удерживающем устройстве по росту и весу.', en: 'Children under 135 cm travel in an approved child restraint suited to height and weight.' } },
              { color: 'coral', title: { ru: 'Сзади', en: 'In the back' }, es: 'menores de 135 cm, en los <b>asientos traseros</b>', body: { ru: 'Спереди — только если нет задних сидений, все задние заняты детьми или там нельзя поставить кресло.', en: 'In front only if there are no rear seats, all rear seats are taken by children, or a seat can’t be fitted there.' } },
              { color: 'amber', title: { ru: 'Спиной вперёд и подушка', en: 'Rear-facing and airbag' }, es: 'a <b>contramarcha</b>; nunca frente a un airbag activo', body: { ru: 'Малышей — спиной по ходу движения, лучше в центре сзади. Нельзя ставить кресло спиной вперёд напротив включённой подушки.', en: 'Little ones face backwards, ideally rear centre. Never a rear-facing seat in front of an active airbag.' } },
              { color: 'teal', title: { ru: 'Такси и автобус', en: 'Taxi and bus' }, es: 'en <b>taxi</b> urbano sin SRI, detrás con cinturón', body: { ru: 'В городском такси без кресла ребёнок едет сзади, пристёгнутый ремнём. В автобусе дети 3+ ниже 135 см — в кресле, если оно есть, иначе ремнём.', en: 'In an urban taxi without a seat, the child rides in the back with a belt. On a bus, children 3+ under 135 cm use a restraint if available, otherwise the belt.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>135 см</b>: пока ребёнок ниже — кресло и заднее сиденье. Выше — обычный ремень.',
              en: '<b>135 cm</b>: until the child is taller — a child seat and the back seat.'
            }
          }
        ]
      },
      {
        id: 'pasiva',
        label: { ru: 'Защита', en: 'Protection' },
        blocks: [
          {
            type: 'rules', heading: { ru: 'Активная и пассивная безопасность', en: 'Active and passive safety' },
            items: [
              { color: 'blue', title: { ru: 'Активная', en: 'Active' }, es: 'evita el accidente: <b>frenos, ABS</b>, luces, neumáticos', body: { ru: 'Помогает избежать аварии: тормоза, ABS, ESP, шины, свет, системы помощи.', en: 'Helps avoid a crash: brakes, ABS, ESP, tyres, lights, driver aids.' } },
              { color: 'teal', title: { ru: 'Пассивная', en: 'Passive' }, es: 'reduce las lesiones: <b>cinturón, airbag</b>, reposacabezas, casco', body: { ru: 'Уменьшает травмы, когда авария уже случилась: кузов, ремень, подушки, подголовник, шлем.', en: 'Reduces injuries once a crash happens: body shell, belt, airbags, head restraint, helmet.' } }
            ]
          },
          {
            type: 'rules',
            items: [
              { color: 'amber', title: { ru: 'Подушка безопасности', en: 'Airbag' }, es: '<b>airbag</b> + cinturón, a 25 cm del volante', body: { ru: 'Работает вместе с ремнём, не вместо него. Грудь — не ближе 25 см к рулю.', en: 'Works with the belt, not instead of it. Keep your chest at least 25 cm from the wheel.' } },
              { color: 'purple', title: { ru: 'Подголовник', en: 'Head restraint' }, es: '<b>reposacabezas</b> a la altura de la cabeza', body: { ru: 'Верх подголовника — на уровне макушки, до головы — не больше 4 см. Защищает шею при ударе сзади.', en: 'Top of the restraint level with the top of your head, no more than 4 cm away. Protects the neck in a rear impact.' } },
              { color: 'coral', title: { ru: 'Шлем', en: 'Helmet' }, es: '<b>casco</b> integral, homologado y abrochado', body: { ru: 'Удары по голове — главная причина гибели на двухколёсных. Лучше интегральный (закрывает челюсть), по размеру, застёгнутый, светлый.', en: 'Head injuries are the main killer on two wheels. Best is a full-face helmet, the right size, fastened, light-coloured.' } }
            ]
          }
        ]
      },
      {
        id: 'carga',
        label: { ru: 'Груз', en: 'Loads' },
        blocks: [
          {
            type: 'text',
            body: {
              ru: ['Людей — не больше, чем мест. Садятся и выходят на остановившейся машине, со стороны тротуара. Животные — сзади, пристёгнутые или в переноске, никогда свободно.', 'На мотоцикле и мопеде пассажир — <b>старше 12 лет</b>, сзади, ноги на подножках, в шлеме. С 7 лет — если везёт родитель или уполномоченный взрослый. На велосипеде взрослый может везти ребёнка до 7 лет в детском сиденье.'],
              en: ['No more people than seats. Get in and out with the vehicle stopped, on the kerb side. Animals ride in the back, restrained or in a carrier, never loose.', 'On a motorbike or moped a passenger must be <b>over 12</b>, behind the rider, feet on the footrests, in a helmet. From 7 if the rider is a parent or authorised adult. An adult cyclist may carry a child under 7 in a child seat.']
            }
          },
          {
            type: 'table', heading: { ru: 'Насколько груз может выступать', en: 'How far a load may stick out' },
            head: [{ ru: 'Транспорт', en: 'Vehicle' }, { ru: 'Сзади', en: 'Behind' }],
            rows: [
              [{ ru: 'Легковая, делимый груз', en: 'Car, divisible load' }, '10 %'],
              [{ ru: 'Легковая, неделимый груз', en: 'Car, indivisible load' }, '15 %'],
              [{ ru: 'Мотоцикл (уже 1 м)', en: 'Motorbike (< 1 m wide)' }, '0,25 m'],
              [{ ru: 'Грузовик до 5 м', en: 'Goods vehicle ≤ 5 m' }, { ru: '1/3 длины спереди и сзади', en: '1/3 length front and back' }]
            ]
          },
          {
            type: 'text',
            body: {
              ru: ['У легковой груз не выступает <b>спереди и по бокам</b>. Выступающий сзади груз обозначают щитком V-20 (красно-белые полосы) днём и ночью; ночью ещё и красным огнём. Груз не должен закрывать фары, номер, обзор, волочиться, падать, пылить.', 'Ширина машины с грузом — не больше 2,55 м; высота — 4 м.'],
              en: ['On a car a load may not stick out at the <b>front or sides</b>. A load sticking out behind is marked with a V-20 panel (red-and-white stripes) day and night, plus a red light at night. Loads must not hide lights, plate or view, drag, fall or shed dust.', 'Maximum width with load is 2.55 m; height 4 m.']
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>«10 и 15»</b>: что можно разделить — 10 %, что нельзя (доска, лестница) — 15 %. И всегда полосатый щиток сзади.',
              en: '<b>“10 and 15”</b>: divisible — 10 %, indivisible (a plank, a ladder) — 15 %. And always the striped panel behind.'
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
              ['el cinturón de seguridad', { ru: 'ремень безопасности', en: 'seat belt' }],
              ['abrocharse', { ru: 'пристегнуться', en: 'to buckle up' }],
              ['el sistema de retención infantil', { ru: 'детское кресло', en: 'child restraint' }],
              ['a contramarcha', { ru: 'спиной по ходу', en: 'rear-facing' }],
              ['el airbag', { ru: 'подушка безопасности', en: 'airbag' }],
              ['el reposacabezas', { ru: 'подголовник', en: 'head restraint' }],
              ['el casco', { ru: 'шлем', en: 'helmet' }],
              ['la seguridad activa', { ru: 'активная безопасность', en: 'active safety' }],
              ['la seguridad pasiva', { ru: 'пассивная безопасность', en: 'passive safety' }],
              ['el habitáculo', { ru: 'салон', en: 'passenger cell' }],
              ['el efecto submarino', { ru: 'проскальзывание под ремнём', en: 'submarining' }],
              ['la carga', { ru: 'груз', en: 'load' }],
              ['sobresalir', { ru: 'выступать', en: 'to stick out' }],
              ['la baca', { ru: 'багажник на крыше', en: 'roof rack' }],
              ['la señal V-20', { ru: 'щиток выступающего груза', en: 'overhanging-load panel' }],
              ['el reposapiés', { ru: 'подножка', en: 'footrest' }],
              ['el transportín', { ru: 'переноска для животных', en: 'pet carrier' }]
            ]
          }
        ]
      }
    ],
    questions: [
      {
        id: 'sg-01',
        es: '¿Quién debe usar el cinturón de seguridad?',
        tr: { ru: 'Кто должен пристёгиваться?', en: 'Who must wear a seat belt?' },
        options: [
          { es: 'El conductor y todos los pasajeros, delante y detrás.', ru: 'Водитель и все пассажиры, спереди и сзади.', en: 'The driver and all passengers, front and back.' },
          { es: 'Solo los que viajan delante.', ru: 'Только сидящие спереди.', en: 'Only front-seat occupants.' },
          { es: 'Solo fuera de poblado.', ru: 'Только за городом.', en: 'Only out of town.' }
        ],
        answer: 0,
        explain: { ru: 'Ремень обязателен для всех мест, где он установлен, в городе и за городом.', en: 'Belts are compulsory in every seat that has one, in and out of town.' },
        hint: { ru: 'Есть ремень — пристегнись.', en: 'If there’s a belt, wear it.' },
        ref: 'RGC, art. 117'
      },
      {
        id: 'sg-02',
        es: '¿Cuánto aumenta la probabilidad de sobrevivir a un accidente llevar bien el cinturón?',
        tr: { ru: 'Во сколько раз правильно пристёгнутый ремень повышает шанс выжить в ДТП?', en: 'How much does a properly worn belt raise your chance of surviving a crash?' },
        options: [
          { es: 'La duplica.', ru: 'Вдвое.', en: 'It doubles it.' },
          { es: 'Un 5 %.', ru: 'На 5 %.', en: 'By 5%.' },
          { es: 'No influye.', ru: 'Не влияет.', en: 'It makes no difference.' }
        ],
        answer: 0,
        explain: { ru: 'По пособию DGT, правильно пристёгнутый ремень удваивает шанс выжить.', en: 'According to the DGT manual, a properly worn belt doubles your chance of survival.' },
        hint: { ru: 'Ремень — ×2 к жизни.', en: 'A belt — ×2 for survival.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'sg-03',
        es: '¿Por dónde debe pasar la banda torácica del cinturón?',
        tr: { ru: 'Где должна проходить плечевая лента ремня?', en: 'Where should the shoulder strap of the belt go?' },
        options: [
          { es: 'Por la clavícula, entre el hombro y el cuello, y el centro del pecho.', ru: 'Через ключицу, между плечом и шеей, и середину груди.', en: 'Over the collarbone, between shoulder and neck, and mid-chest.' },
          { es: 'Por el cuello.', ru: 'По шее.', en: 'Across the neck.' },
          { es: 'Por debajo del brazo.', ru: 'Под рукой.', en: 'Under the arm.' }
        ],
        answer: 0,
        explain: { ru: 'Плечевая лента — через ключицу и середину груди. На шее она травмирует, на краю плеча — соскальзывает.', en: 'The shoulder strap goes over the collarbone and mid-chest. On the neck it injures; on the shoulder edge it slips.' },
        hint: { ru: 'Кость, не мякоть.', en: 'Bone, not soft tissue.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'sg-04',
        es: '¿Dónde debe quedar la banda abdominal del cinturón?',
        tr: { ru: 'Где должна лежать поясная лента ремня?', en: 'Where should the lap strap sit?' },
        options: [
          { es: 'Sobre los huesos de la cadera, por debajo del estómago.', ru: 'На тазовых костях, ниже живота.', en: 'Over the hip bones, below the stomach.' },
          { es: 'Sobre el estómago.', ru: 'На животе.', en: 'Over the stomach.' },
          { es: 'Sobre las rodillas.', ru: 'На коленях.', en: 'Over the knees.' }
        ],
        answer: 0,
        explain: { ru: 'Поясная лента — на костях таза, ниже живота. На животе при ударе она повредит внутренние органы.', en: 'The lap strap goes on the hip bones, below the stomach. Over the belly it would injure internal organs.' },
        hint: { ru: 'Пояс — на кости таза.', en: 'Lap belt — on the pelvis.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'sg-05',
        es: '¿Qué es el «efecto submarino»?',
        tr: { ru: 'Что такое «эффект подводной лодки»?', en: 'What is the “submarine effect”?' },
        options: [
          { es: 'Que el cuerpo se deslice por debajo del cinturón en un choque.', ru: 'Тело при ударе проскальзывает под ремнём.', en: 'The body sliding under the belt in a crash.' },
          { es: 'Que el vehículo se hunda en el agua.', ru: 'Машина тонет в воде.', en: 'The car sinking in water.' },
          { es: 'Que el airbag no se abra.', ru: 'Подушка не раскрылась.', en: 'The airbag failing to open.' }
        ],
        answer: 0,
        explain: { ru: 'Если спинка откинута, ремень ослаблен или на сиденье скользкий чехол, тело «ныряет» под ремень. Решение: правильная посадка и натянутый ремень.', en: 'With a reclined seat, slack belt or slippery cover, the body “dives” under the belt. The fix: upright posture and a snug belt.' },
        hint: { ru: 'Откинулся — «нырнёшь» под ремень.', en: 'Recline and you’ll dive under the belt.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'sg-06',
        es: '¿En cuál de estos casos no es obligatorio el cinturón, dentro de poblado?',
        tr: { ru: 'В каком случае в городе ремень не обязателен?', en: 'In which case is a belt not compulsory in town?' },
        options: [
          { es: 'Al realizar maniobras de marcha atrás o estacionamiento.', ru: 'При манёврах задним ходом или парковке.', en: 'When reversing or parking.' },
          { es: 'Al circular a menos de 30 km/h.', ru: 'При скорости меньше 30 км/ч.', en: 'Below 30 km/h.' },
          { es: 'En trayectos cortos.', ru: 'В коротких поездках.', en: 'On short trips.' }
        ],
        answer: 0,
        explain: { ru: 'В городе ремень можно не пристёгивать только при манёврах задним ходом и парковке. Таксисты, курьеры и инструкторы с октября 2026 года тоже пристёгиваются. Скорость и длина поездки — не исключения.', en: 'In town you may unbuckle only while reversing or parking. Taxi drivers, couriers and instructors must buckle up since October 2026. Speed or trip length are not exemptions.' },
        hint: { ru: 'Паркуешься задом — можно отстегнуться.', en: 'Reversing into a space — you may unbuckle.' },
        ref: 'RGC, art. 119'
      },
      {
        id: 'sg-07',
        es: 'Un taxista presta servicio dentro de poblado. ¿Está exento de utilizar el cinturón de seguridad?',
        tr: { ru: 'Таксист работает в городе. Освобождён ли он от ремня безопасности?', en: 'A taxi driver is working in town. Are they exempt from wearing a seat belt?' },
        options: [
          { es: 'No, debe utilizarlo como cualquier conductor.', ru: 'Нет, он пристёгивается, как любой водитель.', en: 'No, they must wear it like any driver.' },
          { es: 'Sí, siempre que circule por ciudad.', ru: 'Да, если едет по городу.', en: 'Yes, as long as they drive in town.' },
          { es: 'Sí, si lleva pasajeros.', ru: 'Да, если везёт пассажиров.', en: 'Yes, if carrying passengers.' }
        ],
        answer: 0,
        explain: { ru: 'Раньше таксист в городе мог ехать без ремня. С 1 октября 2026 года это исключение (как и для курьеров и инструкторов автошкол) отменено.', en: 'Taxi drivers used to be exempt in town. Since 1 October 2026 that exemption (like those for couriers and driving instructors) is abolished.' },
        hint: { ru: 'Старые учебники врут: таксист тоже пристёгивается.', en: 'Old books are wrong: taxi drivers buckle up too.' },
        ref: 'RGC, art. 119 (reforma 2026)'
      },
      {
        id: 'sg-08',
        es: '¿Quién puede circular sin cinturón en cualquier vía?',
        tr: { ru: 'Кто может ездить без ремня на любой дороге?', en: 'Who may travel without a belt on any road?' },
        options: [
          { es: 'Quien tenga un certificado médico que le exima.', ru: 'Тот, у кого есть медицинская справка об освобождении.', en: 'Someone with a medical exemption certificate.' },
          { es: 'Las embarazadas, sin más.', ru: 'Беременные, без всяких бумаг.', en: 'Pregnant women, with no paperwork.' },
          { es: 'Los mayores de 65 años.', ru: 'Люди старше 65.', en: 'People over 65.' }
        ],
        answer: 0,
        explain: { ru: 'Везде без ремня может ехать только тот, кто освобождён по медицинским причинам и имеет справку. Беременным ремень тоже нужен (поясная лента — под животом).', en: 'Only someone medically exempt with a certificate may ride beltless everywhere. Pregnant women also wear belts (lap strap under the bump).' },
        hint: { ru: 'Освобождение — только бумагой врача.', en: 'Exemption only on a doctor’s paper.' },
        ref: 'RGC, art. 119'
      },
      {
        id: 'sg-09',
        es: 'Un niño mide 125 cm. ¿Cómo debe viajar en un turismo?',
        tr: { ru: 'Ребёнок ростом 125 см. Как ему ехать в легковой?', en: 'A child is 125 cm tall. How must they travel in a car?' },
        options: [
          { es: 'En un sistema de retención infantil adecuado, en el asiento trasero.', ru: 'В подходящем детском кресле на заднем сиденье.', en: 'In a suitable child restraint, in the back seat.' },
          { es: 'Con el cinturón de adulto en el asiento delantero.', ru: 'Со взрослым ремнём на переднем сиденье.', en: 'With an adult belt in the front seat.' },
          { es: 'En brazos de un adulto.', ru: 'На руках у взрослого.', en: 'On an adult’s lap.' }
        ],
        answer: 0,
        explain: { ru: 'До 135 см — детское удерживающее устройство по росту и весу и, как правило, заднее сиденье.', en: 'Under 135 cm — a child restraint suited to height and weight and, as a rule, the back seat.' },
        hint: { ru: 'Ниже 135 — кресло и назад.', en: 'Under 135 — a seat and the back.' },
        ref: 'RGC, art. 117'
      },
      {
        id: 'sg-10',
        es: '¿Cuándo puede viajar en el asiento delantero un niño de menos de 135 cm?',
        tr: { ru: 'Когда ребёнок ниже 135 см может ехать спереди?', en: 'When may a child under 135 cm sit in the front?' },
        options: [
          { es: 'Cuando el vehículo no tiene asientos traseros o están ocupados por otros niños.', ru: 'Когда задних сидений нет или они заняты другими детьми.', en: 'When the car has no rear seats or they’re taken by other children.' },
          { es: 'Cuando el viaje es corto.', ru: 'Когда поездка короткая.', en: 'When the trip is short.' },
          { es: 'Cuando lo pide el niño.', ru: 'Когда просит ребёнок.', en: 'When the child asks.' }
        ],
        answer: 0,
        explain: { ru: 'Спереди — только если нет задних сидений, все задние заняты детьми до 135 см или там нельзя установить кресло. И всегда в своём детском кресле.', en: 'In front only if there are no rear seats, all rear seats are taken by children under 135 cm, or a seat can’t be fitted there. Always in their own restraint.' },
        hint: { ru: 'Спереди — только когда сзади «некуда».', en: 'Front only when there’s no room behind.' },
        ref: 'RGC, art. 117'
      },
      {
        id: 'sg-11',
        es: '¿Se puede colocar una sillita infantil a contramarcha en el asiento delantero con el airbag frontal activado?',
        tr: { ru: 'Можно ли ставить детское кресло спиной вперёд на переднее сиденье с включённой подушкой?', en: 'May a rear-facing child seat go in the front seat with the front airbag active?' },
        options: [
          { es: 'No, hay que desactivar el airbag.', ru: 'Нет: подушку нужно отключить.', en: 'No, the airbag must be deactivated.' },
          { es: 'Sí, si el niño está bien sujeto.', ru: 'Да, если ребёнок хорошо пристёгнут.', en: 'Yes, if the child is well strapped in.' },
          { es: 'Sí, el airbag le protege.', ru: 'Да, подушка его защитит.', en: 'Yes, the airbag protects the child.' }
        ],
        answer: 0,
        explain: { ru: 'Раскрывающаяся подушка ударит в спинку кресла и травмирует ребёнка. Кресло спиной вперёд — только при отключённой подушке.', en: 'An inflating airbag hits the back of the seat and injures the child. A rear-facing seat only with the airbag off.' },
        hint: { ru: 'Кресло спиной — подушку выключи.', en: 'Rear-facing seat — airbag off.' },
        ref: 'RGC, art. 117'
      },
      {
        id: 'sg-12',
        es: '¿Cuál es la posición más segura para una sillita infantil?',
        tr: { ru: 'Какое место самое безопасное для детского кресла?', en: 'What is the safest place for a child seat?' },
        options: [
          { es: 'En el asiento trasero central.', ru: 'Заднее центральное сиденье.', en: 'The rear centre seat.' },
          { es: 'En el asiento del copiloto.', ru: 'Переднее пассажирское.', en: 'The front passenger seat.' },
          { es: 'Detrás del conductor, siempre.', ru: 'Всегда за водителем.', en: 'Always behind the driver.' }
        ],
        answer: 0,
        explain: { ru: 'В центре сзади ребёнок дальше всего от боковых ударов. Малышей лучше перевозить спиной по ходу движения.', en: 'Rear centre keeps the child furthest from side impacts. Young children are safest rear-facing.' },
        hint: { ru: 'В середине — дальше от всех ударов.', en: 'In the middle — furthest from any impact.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'sg-13',
        es: 'En un taxi urbano sin sistema de retención infantil, ¿cómo viaja un niño de menos de 135 cm?',
        tr: { ru: 'Как в городском такси без детского кресла едет ребёнок ниже 135 см?', en: 'In an urban taxi without a child seat, how does a child under 135 cm travel?' },
        options: [
          { es: 'En el asiento trasero, con el cinturón de seguridad.', ru: 'Сзади, пристёгнутый ремнём.', en: 'In the back seat, wearing the belt.' },
          { es: 'Delante, sin cinturón.', ru: 'Спереди, без ремня.', en: 'In the front, unbelted.' },
          { es: 'No puede viajar en taxi.', ru: 'В такси ему нельзя.', en: 'They may not ride in a taxi.' }
        ],
        answer: 0,
        explain: { ru: 'Исключение для городского такси: без кресла ребёнок едет сзади и пристёгивается обычным ремнём.', en: 'The urban taxi exception: without a child seat the child rides in the back with the ordinary belt.' },
        hint: { ru: 'Такси — назад и ремень.', en: 'Taxi — back seat and belt.' },
        ref: 'RGC, art. 119'
      },
      {
        id: 'sg-14',
        es: '¿Para qué sirve el reposacabezas?',
        tr: { ru: 'Для чего нужен подголовник?', en: 'What is the head restraint for?' },
        options: [
          { es: 'Para proteger el cuello en caso de golpe, sobre todo por detrás.', ru: 'Защитить шею при ударе, особенно сзади.', en: 'To protect the neck in a crash, especially from behind.' },
          { es: 'Para descansar la cabeza en viajes largos.', ru: 'Чтобы отдыхать в длинной поездке.', en: 'To rest your head on long trips.' },
          { es: 'Para que el conductor no se duerma.', ru: 'Чтобы водитель не уснул.', en: 'To keep the driver awake.' }
        ],
        answer: 0,
        explain: { ru: 'Подголовник защищает шейный отдел. Верх — на уровне макушки, до головы — не больше 4 см.', en: 'The head restraint protects the neck. Its top level with the top of your head, no more than 4 cm away.' },
        hint: { ru: 'Подголовник — не подушка для сна, а щит для шеи.', en: 'Not a pillow — a shield for your neck.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'sg-15',
        es: '¿A qué distancia mínima del volante debe colocar el pecho por el airbag?',
        tr: { ru: 'На каком минимальном расстоянии от руля должна быть грудь из-за подушки?', en: 'What minimum distance from the wheel should your chest be, because of the airbag?' },
        options: [
          { es: 'Unos 25 cm.', ru: 'Около 25 см.', en: 'About 25 cm.' },
          { es: 'Unos 5 cm.', ru: 'Около 5 см.', en: 'About 5 cm.' },
          { es: 'Más de un metro.', ru: 'Больше метра.', en: 'Over a metre.' }
        ],
        answer: 0,
        explain: { ru: 'Подушка раскрывается очень быстро; слишком близко — травма. Держите грудь не ближе 25 см и всегда пристёгивайтесь.', en: 'An airbag inflates very fast; too close and it injures. Keep your chest at least 25 cm away and always wear the belt.' },
        hint: { ru: 'Четверть метра до руля.', en: 'A quarter of a metre from the wheel.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'sg-16',
        es: '¿El airbag sustituye al cinturón de seguridad?',
        tr: { ru: 'Заменяет ли подушка безопасности ремень?', en: 'Does the airbag replace the seat belt?' },
        options: [
          { es: 'No, lo complementa.', ru: 'Нет, дополняет его.', en: 'No, it complements it.' },
          { es: 'Sí, en los asientos delanteros.', ru: 'Да, на передних сиденьях.', en: 'Yes, in the front seats.' },
          { es: 'Sí, a baja velocidad.', ru: 'Да, на малой скорости.', en: 'Yes, at low speed.' }
        ],
        answer: 0,
        explain: { ru: 'Подушка рассчитана на пристёгнутого человека. Без ремня удар о раскрывающуюся подушку сам по себе опасен.', en: 'An airbag is designed for a belted occupant. Without a belt, hitting the inflating airbag is itself dangerous.' },
        hint: { ru: 'Подушка — «плюс» к ремню, а не вместо.', en: 'An airbag is a plus to the belt, not instead.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'sg-17',
        es: '¿Cuál de estos es un elemento de seguridad pasiva?',
        tr: { ru: 'Что из этого относится к пассивной безопасности?', en: 'Which of these is a passive safety element?' },
        options: [
          { es: 'El cinturón de seguridad.', ru: 'Ремень безопасности.', en: 'The seat belt.' },
          { es: 'El sistema ABS.', ru: 'Система ABS.', en: 'ABS.' },
          { es: 'Las luces.', ru: 'Фары.', en: 'The lights.' }
        ],
        answer: 0,
        explain: { ru: 'Пассивная безопасность снижает травмы при аварии (ремень, подушки, подголовник, кузов, шлем). Активная — помогает избежать аварии (ABS, тормоза, шины, свет).', en: 'Passive safety reduces injuries in a crash (belt, airbags, head restraint, shell, helmet). Active safety helps avoid it (ABS, brakes, tyres, lights).' },
        hint: { ru: 'Пассивная — когда уже поздно; активная — чтобы не было поздно.', en: 'Passive — once it’s too late; active — so it isn’t.' },
        ref: 'DGT, Manual básico, tema 5'
      },
      {
        id: 'sg-18',
        es: '¿Qué tipo de casco es más seguro para un motorista?',
        tr: { ru: 'Какой шлем безопаснее всего для мотоциклиста?', en: 'Which type of helmet is safest for a motorcyclist?' },
        options: [
          { es: 'El integral, homologado y bien abrochado.', ru: 'Интегральный, сертифицированный и застёгнутый.', en: 'A full-face, approved, properly fastened helmet.' },
          { es: 'Cualquier casco aunque no esté abrochado.', ru: 'Любой, даже незастёгнутый.', en: 'Any helmet, even unfastened.' },
          { es: 'Una gorra resistente.', ru: 'Прочная кепка.', en: 'A sturdy cap.' }
        ],
        answer: 0,
        explain: { ru: 'Интегральный шлем закрывает и челюсть; он должен быть сертифицирован, по размеру и застёгнут. Светлый цвет — заметнее.', en: 'A full-face helmet also covers the jaw; it must be approved, the right size and fastened. Light colours are more visible.' },
        hint: { ru: 'Незастёгнутый шлем слетит первым.', en: 'An unfastened helmet flies off first.' },
        ref: 'RGC, art. 118'
      },
      {
        id: 'sg-19',
        es: '¿Qué edad mínima debe tener, como norma general, un pasajero de motocicleta?',
        tr: { ru: 'Какой, как правило, минимальный возраст пассажира мотоцикла?', en: 'As a rule, what is the minimum age for a motorbike passenger?' },
        options: [
          { es: 'Más de 12 años.', ru: 'Старше 12 лет.', en: 'Over 12.' },
          { es: 'Más de 16 años.', ru: 'Старше 16 лет.', en: 'Over 16.' },
          { es: 'Cualquier edad con casco.', ru: 'Любой, если в шлеме.', en: 'Any age with a helmet.' }
        ],
        answer: 0,
        explain: { ru: 'Пассажир мотоцикла или мопеда — старше 12 лет. С 7 лет — если ведёт родитель или уполномоченный взрослый. Всегда сзади, в шлеме, ноги на подножках.', en: 'A motorbike or moped passenger must be over 12. From 7 if the rider is a parent or authorised adult. Always behind, in a helmet, feet on footrests.' },
        hint: { ru: '12 — с кем угодно, 7 — с мамой или папой.', en: '12 — with anyone, 7 — with mum or dad.' },
        ref: 'RGC, art. 12'
      },
      {
        id: 'sg-20',
        es: 'Un niño de 9 años quiere viajar de pasajero en la moto de su padre. ¿Puede?',
        tr: { ru: 'Ребёнок 9 лет хочет поехать пассажиром на мотоцикле отца. Можно?', en: 'A 9-year-old wants to ride pillion on their father’s motorbike. May they?' },
        options: [
          { es: 'Sí, si cumple las normas de seguridad de los pasajeros.', ru: 'Да, если соблюдены правила для пассажиров.', en: 'Yes, if passenger safety rules are met.' },
          { es: 'No, hasta los 12 años nunca.', ru: 'Нет, до 12 лет никогда.', en: 'No, never before 12.' },
          { es: 'Solo delante del conductor.', ru: 'Только впереди водителя.', en: 'Only in front of the rider.' }
        ],
        answer: 0,
        explain: { ru: 'С 7 лет ребёнок может ехать с родителем или уполномоченным взрослым — сзади, в шлеме, ноги на подножках.', en: 'From 7 a child may ride with a parent or authorised adult — behind, in a helmet, feet on footrests.' },
        hint: { ru: 'С папой — с семи.', en: 'With dad — from seven.' },
        ref: 'RGC, art. 12'
      },
      {
        id: 'sg-21',
        es: '¿Puede un ciclista adulto llevar a un niño en su bicicleta?',
        tr: { ru: 'Может ли взрослый велосипедист везти ребёнка?', en: 'May an adult cyclist carry a child on their bicycle?' },
        options: [
          { es: 'Sí, un menor de 7 años en un asiento adicional homologado.', ru: 'Да, ребёнка до 7 лет в сертифицированном доп. сиденье.', en: 'Yes, a child under 7 in an approved extra seat.' },
          { es: 'Sí, de cualquier edad sentado en el manillar.', ru: 'Да, любого возраста на руле.', en: 'Yes, of any age on the handlebars.' },
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' }
        ],
        answer: 0,
        explain: { ru: 'Совершеннолетний велосипедист может везти ребёнка до 7 лет в специальном детском сиденье.', en: 'An adult cyclist may carry a child under 7 in a special child seat.' },
        hint: { ru: 'Велосипед — до семи.', en: 'Bicycle — under seven.' },
        ref: 'RGC, art. 12'
      },
      {
        id: 'sg-22',
        es: '¿Cómo deben viajar los animales en un turismo?',
        tr: { ru: 'Как перевозить животных в легковой?', en: 'How should animals travel in a car?' },
        options: [
          { es: 'Detrás y sujetos o en un transportín, sin molestar al conductor.', ru: 'Сзади, пристёгнутыми или в переноске, не мешая водителю.', en: 'In the back, restrained or in a carrier, not disturbing the driver.' },
          { es: 'Sueltos en el asiento trasero.', ru: 'Свободно на заднем сиденье.', en: 'Loose on the back seat.' },
          { es: 'En brazos del copiloto.', ru: 'На руках у пассажира спереди.', en: 'On the front passenger’s lap.' }
        ],
        answer: 0,
        explain: { ru: 'Животное не должно мешать водителю и при торможении превратиться в «снаряд»: сзади, пристёгнутое, за решёткой или в переноске.', en: 'An animal must not distract the driver or become a projectile under braking: in the back, restrained, behind a grille or in a carrier.' },
        hint: { ru: 'Пёс на свободе — снаряд при торможении.', en: 'A loose dog is a projectile when you brake.' },
        ref: 'RGC, art. 18'
      },
      {
        id: 'sg-23',
        es: '¿Pueden viajar en un turismo más personas que plazas tiene?',
        tr: { ru: 'Можно ли везти в легковой больше людей, чем мест?', en: 'May a car carry more people than it has seats?' },
        options: [
          { es: 'No.', ru: 'Нет.', en: 'No.' },
          { es: 'Sí, si son niños.', ru: 'Да, если это дети.', en: 'Yes, if they’re children.' },
          { es: 'Sí, en trayectos urbanos.', ru: 'Да, в городе.', en: 'Yes, in town.' }
        ],
        answer: 0,
        explain: { ru: 'Число людей не может превышать число мест, указанных в документах машины.', en: 'The number of people may not exceed the number of seats in the vehicle documents.' },
        hint: { ru: 'Одно место — один человек.', en: 'One seat — one person.' },
        ref: 'RGC, art. 9'
      },
      {
        id: 'sg-24',
        es: 'Lleva en el techo de su turismo una tabla que no se puede dividir. ¿Cuánto puede sobresalir por detrás?',
        tr: { ru: 'На крыше легковой неделимая доска. Насколько она может выступать сзади?', en: 'You carry an indivisible board on your car roof. How far may it stick out behind?' },
        options: [
          { es: 'Hasta un 15 % de la longitud del vehículo.', ru: 'До 15 % длины машины.', en: 'Up to 15% of the vehicle’s length.' },
          { es: 'Hasta un 10 %.', ru: 'До 10 %.', en: 'Up to 10%.' },
          { es: 'Hasta 2 metros.', ru: 'До 2 метров.', en: 'Up to 2 metres.' }
        ],
        answer: 0,
        explain: { ru: 'У легковых груз может выступать только сзади: делимый — до 10 % длины, неделимый — до 15 %. Спереди и по бокам — нельзя.', en: 'On cars a load may stick out only behind: divisible up to 10 % of length, indivisible up to 15 %. Never at the front or sides.' },
        hint: { ru: 'Делимое — 10, неделимое — 15.', en: 'Divisible 10, indivisible 15.' },
        ref: 'RGC, art. 15'
      },
      {
        id: 'sg-25',
        es: 'En un turismo, ¿puede la carga sobresalir por delante?',
        tr: { ru: 'Может ли у легковой груз выступать спереди?', en: 'On a car, may the load stick out at the front?' },
        options: [
          { es: 'No.', ru: 'Нет.', en: 'No.' },
          { es: 'Sí, hasta un 10 %.', ru: 'Да, до 10 %.', en: 'Yes, up to 10%.' },
          { es: 'Sí, si se señaliza.', ru: 'Да, если обозначить.', en: 'Yes, if marked.' }
        ],
        answer: 0,
        explain: { ru: 'У машин для перевозки людей груз не выступает ни спереди, ни по бокам — только сзади и в пределах 10/15 %.', en: 'On passenger vehicles the load may not stick out at the front or sides — only behind, within 10/15 %.' },
        hint: { ru: 'Спереди — никогда.', en: 'At the front — never.' },
        ref: 'RGC, art. 15'
      },
      {
        id: 'sg-26',
        es: '¿Cómo se señaliza de día una carga que sobresale por detrás de un turismo?',
        tr: { ru: 'Как днём обозначить груз, выступающий сзади легковой?', en: 'By day, how do you mark a load sticking out behind a car?' },
        options: [
          { es: 'Con la señal V-20, panel de franjas rojas y blancas.', ru: 'Щитком V-20 с красно-белыми полосами.', en: 'With a V-20 panel of red and white stripes.' },
          { es: 'Con un trapo de cualquier color.', ru: 'Тряпкой любого цвета.', en: 'With a rag of any colour.' },
          { es: 'No hace falta de día.', ru: 'Днём не нужно.', en: 'Not needed by day.' }
        ],
        answer: 0,
        explain: { ru: 'Выступающий сзади груз обозначают щитком V-20 (красно-белые диагональные полосы) днём и ночью; ночью добавляют красный огонь.', en: 'A rear overhang is marked with a V-20 panel (red-white diagonal stripes) day and night; at night add a red light.' },
        hint: { ru: 'Торчит сзади — полосатый щиток.', en: 'Sticking out behind — the striped panel.' },
        ref: 'RGC, art. 15'
      },
      {
        id: 'sg-27',
        es: '¿Cuál es la anchura máxima permitida de un vehículo, incluida la carga?',
        tr: { ru: 'Какая максимальная ширина машины вместе с грузом?', en: 'What is the maximum permitted vehicle width including the load?' },
        options: [
          { es: '2,55 metros.', ru: '2,55 м.', en: '2.55 m.' },
          { es: '3 metros.', ru: '3 м.', en: '3 m.' },
          { es: '2 metros.', ru: '2 м.', en: '2 m.' }
        ],
        answer: 0,
        explain: { ru: 'Максимальная ширина — 2,55 м (с грузом), высота — 4 м.', en: 'Maximum width is 2.55 m (with load); height 4 m.' },
        hint: { ru: 'Два с половиной и чуть-чуть.', en: 'Two and a half and a bit.' },
        ref: 'Reglamento General de Vehículos, anexo IX'
      },
      {
        id: 'sg-28',
        es: '¿Qué está prohibido respecto a la carga de un vehículo?',
        tr: { ru: 'Что запрещено в отношении груза?', en: 'What is prohibited regarding a vehicle’s load?' },
        options: [
          { es: 'Que tape las luces o la matrícula, o que se arrastre o caiga.', ru: 'Закрывать фары или номер, волочиться или падать.', en: 'Hiding lights or the plate, dragging or falling.' },
          { es: 'Que vaya en el maletero.', ru: 'Чтобы он лежал в багажнике.', en: 'Being in the boot.' },
          { es: 'Que vaya sujeta con cinchas.', ru: 'Чтобы он был закреплён ремнями.', en: 'Being secured with straps.' }
        ],
        answer: 0,
        explain: { ru: 'Груз должен быть закреплён, не нарушать устойчивость, не закрывать свет, номер и обзор, не волочиться, не падать, не шуметь и не пылить.', en: 'A load must be secured, not upset stability, not hide lights, plate or view, and not drag, fall, rattle or shed dust.' },
        hint: { ru: 'Груз должен «молчать и держаться».', en: 'A load must stay quiet and stay put.' },
        ref: 'RGC, art. 14'
      },
      {
        id: 'sg-29',
        es: '¿Por qué lado deben subir y bajar los pasajeros de un vehículo?',
        tr: { ru: 'С какой стороны пассажирам садиться и выходить?', en: 'On which side should passengers get in and out?' },
        options: [
          { es: 'Por el lado más próximo al borde de la vía, con el vehículo parado.', ru: 'Со стороны края дороги (тротуара), когда машина стоит.', en: 'On the side nearest the road edge, with the vehicle stopped.' },
          { es: 'Por el lado de la calzada.', ru: 'Со стороны проезжей части.', en: 'On the traffic side.' },
          { es: 'Por cualquier lado, aunque el vehículo se mueva.', ru: 'С любой стороны, даже на ходу.', en: 'Either side, even while moving.' }
        ],
        answer: 0,
        explain: { ru: 'Садятся и выходят на стоящей машине и со стороны тротуара или обочины, а не со стороны движения.', en: 'Get in and out with the vehicle stopped, on the kerb or shoulder side, not the traffic side.' },
        hint: { ru: 'Выходи туда, где нет машин.', en: 'Step out where there are no cars.' },
        ref: 'RGC, art. 10'
      },
      {
        id: 'sg-30',
        es: '¿Dónde está la mayor parte de la responsabilidad de colocar bien a pasajeros y carga?',
        tr: { ru: 'На ком лежит ответственность за правильное размещение пассажиров и груза?', en: 'Who is mainly responsible for placing passengers and load properly?' },
        options: [
          { es: 'En el conductor.', ru: 'На водителе.', en: 'The driver.' },
          { es: 'En el pasajero de mayor edad.', ru: 'На старшем пассажире.', en: 'The oldest passenger.' },
          { es: 'En el fabricante.', ru: 'На производителе.', en: 'The manufacturer.' }
        ],
        answer: 0,
        explain: { ru: 'Водитель размещает людей и груз так, чтобы удобно управлять, хорошо видеть дорогу и чтобы ничего не мешало.', en: 'The driver places people and load so they can drive comfortably, see the road well and nothing gets in the way.' },
        hint: { ru: 'Капитан отвечает за борт.', en: 'The captain answers for the ship.' },
        ref: 'RGC, art. 9'
      }
    ]
  }
]);
