// Driving theory (DGT): road crashes, vulnerable road users, what to do at a crash (PAS) and first aid.
// RGC art. 129; DGT «Manual básico», Tema 16.
ECA.data.addDgt([
  {
    id: 'accidentes',
    cats: ['A', 'B'],
    title: { ru: 'ДТП и первая помощь', en: 'Crashes and first aid' },
    summary: {
      ru: 'Группы риска, правило PAS (защитить — сообщить — помочь), 112, проверка сознания и дыхания, СЛР, кровотечения, ожоги, переломы.',
      en: 'Risk groups, the PAS rule (protect — alert — help), 112, checking consciousness and breathing, CPR, bleeding, burns, fractures.'
    },
    hero: {
      es: 'Accidentes y <b>primeros auxilios</b>',
      sub: { ru: 'Как не стать жертвой — и как помочь, если беда случилась', en: 'How not to become a victim — and how to help when it happens' }
    },
    tabs: [
      {
        id: 'riesgo',
        label: { ru: 'Риск', en: 'Risk' },
        blocks: [
          {
            type: 'rules', heading: { ru: 'Кто в группе риска', en: 'Who is most at risk' },
            items: [
              { color: 'coral', title: { ru: 'Дети', en: 'Children' }, es: 'menos altura, menos <b>sensación de peligro</b>', body: { ru: 'Низкие — хуже видят и их хуже видно, не знают правил. Чаще всего — на выходе из школы.', en: 'Short — they see less and are seen less, don’t know the rules. Most often when leaving school.' } },
              { color: 'amber', title: { ru: 'Пожилые', en: 'Older people' }, es: 'oyen y ven peor, calculan peor la <b>velocidad</b>', body: { ru: 'Хуже слышат и видят, плохо оценивают скорость машин, медленнее реагируют; травмы у них тяжелее.', en: 'Hear and see less, misjudge vehicle speed, react more slowly; their injuries are more serious.' } },
              { color: 'blue', title: { ru: 'Молодые водители', en: 'Young drivers' }, es: 'primera causa de muerte de <b>15 a 29 años</b>', body: { ru: 'ДТП — первая причина смерти в 15–29 лет: ночь, выходные, лето, праздники, дорога на работу и с вечеринок.', en: 'Crashes are the top cause of death at 15–29: nights, weekends, summer, holidays, commutes and party trips.' } },
              { color: 'purple', title: { ru: 'Двухколёсные', en: 'Two-wheelers' }, es: 'más <b>frágiles</b> y menos visibles', body: { ru: 'Мотоциклы, мопеды, велосипеды: хуже видны и не защищены. Не держитесь рядом с ними сбоку, проверяйте зеркала перед перестроением, не сигнальте рядом с велосипедистом.', en: 'Motorbikes, mopeds, bicycles: less visible and unprotected. Don’t ride alongside them, check mirrors before changing lanes, don’t honk near cyclists.' } }
            ]
          },
          {
            type: 'text',
            body: {
              ru: 'В городе чаще всего сбивают пешеходов. Сбавляйте скорость у школ, автобусов (особенно школьных), стоящих машин с людьми, мест отдыха, при выезде из гаража и в дождь. Не паркуйтесь на тротуаре и переходе.',
              en: 'In town pedestrian collisions are the most common. Slow down near schools, buses (especially school buses), parked cars with people inside, nightlife areas, when leaving a garage and in rain. Never park on pavements or crossings.'
            }
          }
        ]
      },
      {
        id: 'pas',
        label: { ru: 'PAS', en: 'PAS' },
        blocks: [
          {
            type: 'rules', heading: { ru: 'Правило PAS', en: 'The PAS rule' },
            items: [
              { color: 'amber', label: { ru: 'P', en: 'P' }, title: { ru: 'Защитить', en: 'Protect' }, es: '<b>Proteger</b>: a ti, a las víctimas y el lugar', body: { ru: 'Спокойно остановиться в безопасном месте, не загораживая подъезд спасателям; заглушить, аварийка; жилет до выхода; обозначить место (V-16); ручник у всех машин; не курить. Огонь — огнетушителем, землёй или одеялом, не водой.', en: 'Stop calmly somewhere safe, leaving room for rescuers; engine off, hazards; vest before getting out; mark the scene (V-16); handbrakes on all vehicles; no smoking. Fire — extinguisher, earth or blanket, not water.' } },
              { color: 'blue', label: { ru: 'A', en: 'A' }, title: { ru: 'Сообщить', en: 'Alert' }, es: '<b>Avisar</b> al <b>112</b>', body: { ru: 'Собрать данные (где, сколько пострадавших, есть ли огонь) и позвонить 112 или с SOS-поста. Остаться на месте до приезда служб. Система eCall в машине звонит в 112 сама.', en: 'Gather facts (where, how many hurt, any fire) and call 112 or use an SOS post. Stay until services arrive. A car’s eCall system calls 112 automatically.' } },
              { color: 'teal', label: { ru: 'S', en: 'S' }, title: { ru: 'Помочь', en: 'Help' }, es: '<b>Socorrer</b> con calma, sin mover', body: { ru: 'Не перемещать без необходимости, беречь шею, <b>не снимать шлем</b>, расслабить тесную одежду, укрыть, не давать еды, питья и лекарств, не мазать раны. Не уверены — просто будьте рядом и разговаривайте.', en: 'Don’t move them unless necessary, protect the neck, <b>don’t remove a helmet</b>, loosen tight clothing, cover them, give no food, drink or medicine, put nothing on wounds. Unsure — just stay and talk to them.' } }
            ]
          },
          {
            type: 'text',
            body: {
              ru: ['Три «пика» гибели: первые секунды; <b>«золотой час»</b> (1–2 часа, когда помощь решает всё); дни и недели спустя. Главное — первые 10 минут.', 'Если надо всё же переместить пострадавшего (опасность на месте), делают это <b>втроём, «единым блоком»</b>: голова, шея и туловище на одной линии. Увозить в больницу самим — только если место изолировано или скорая едет дольше 30 минут, а пострадавший без сознания или с неостанавливаемым кровотечением.'],
              en: ['Deaths peak at three moments: the first seconds; the <b>“golden hour”</b> (1–2 hours when care decides everything); days or weeks later. The first 10 minutes matter most.', 'If you must move a casualty (danger on the spot), do it with <b>three people “as one block”</b>: head, neck and body in line. Drive them to hospital yourself only if the place is isolated or the ambulance needs over 30 minutes and they are unconscious or bleeding uncontrollably.']
            }
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: '<b>P-A-S: «Подстрахуй — Алло 112 — Спасай»</b>. Порядок важен: сначала безопасность, иначе пострадавших станет больше.',
              en: '<b>P-A-S: Protect — Alert 112 — Succour.</b> The order matters: safety first, or there will be more casualties.'
            }
          }
        ]
      },
      {
        id: 'auxilios',
        label: { ru: 'Помощь', en: 'First aid' },
        blocks: [
          {
            type: 'rules', heading: { ru: 'Сначала — жизненные функции', en: 'Vital signs first' },
            items: [
              { color: 'blue', label: { ru: '1', en: '1' }, title: { ru: 'Сознание', en: 'Consciousness' }, es: '¿Está bien? — <b>consciencia</b>', body: { ru: 'Спросить, слегка ущипнуть. Отвечает — не двигать, искать кровотечения, ожоги, переломы, наблюдать.', en: 'Ask, pinch lightly. If they respond — don’t move them, look for bleeding, burns, fractures, keep watching.' } },
              { color: 'teal', label: { ru: '2', en: '2' }, title: { ru: 'Дыхание', en: 'Breathing' }, es: '<b>ver, oír, sentir</b> 10 segundos', body: { ru: 'Без сознания: на спину, приподнять подбородок, 10 секунд смотреть на грудь, слушать и чувствовать дыхание щекой. Норма взрослого — 15–20 вдохов в минуту.', en: 'Unconscious: on their back, lift the chin, for 10 seconds watch the chest, listen and feel breath on your cheek. An adult breathes 15–20 times a minute.' } },
              { color: 'coral', label: { ru: '3', en: '3' }, title: { ru: 'Не дышит', en: 'Not breathing' }, es: '<b>30 compresiones y 2 ventilaciones</b>, 100 por minuto', body: { ru: 'Сердечно-лёгочная реанимация: ладони в замок на грудь, руки прямые, 100 нажатий в минуту, 30 нажатий — 2 вдоха, до приезда врачей. Дышит, но надо отойти — уложить на бок.', en: 'CPR: interlocked hands on the chest, straight arms, 100 compressions a minute, 30 compressions — 2 breaths, until help arrives. Breathing but you must leave — put them on their side.' } }
            ]
          },
          {
            type: 'rules', heading: { ru: 'Кровотечения', en: 'Bleeding' },
            items: [
              { color: 'coral', title: { ru: 'Прямое давление', en: 'Direct pressure' }, es: '<b>compresión directa</b> con gasa, sin retirarla', body: { ru: 'Давить на рану чистой тканью; пропиталась — не снимать, добавить сверху; конечность поднять. Воткнутый предмет не вынимать.', en: 'Press on the wound with a clean cloth; if soaked, don’t remove it, add more; raise the limb. Never pull out an embedded object.' } },
              { color: 'amber', title: { ru: 'Артерия, затем жгут', en: 'Artery, then tourniquet' }, es: '<b>torniquete</b>: último recurso, por encima, anotar la hora', body: { ru: 'Не помогает — прижать артерию. Жгут — только на руку или ногу, когда остальное не помогло, выше раны, широкой тканью; записать время; снимает только врач.', en: 'If that fails — press the artery. A tourniquet only on an arm or leg when all else failed, above the wound, with wide cloth; note the time; only medical staff remove it.' } },
              { color: 'purple', title: { ru: 'Шок', en: 'Shock' }, es: 'pálido, sudor frío, pulso rápido: <b>piernas en alto</b>', body: { ru: 'Внутреннее кровотечение видно по шоку: частое поверхностное дыхание, слабый частый пульс, бледность, холодный пот, спутанная речь. Уложить, ноги выше головы; рвота — на бок.', en: 'Internal bleeding shows as shock: fast shallow breathing, weak fast pulse, pallor, cold sweat, confusion. Lay them down, legs raised; vomiting — on the side.' } }
            ]
          },
          {
            type: 'rules', heading: { ru: 'Ожоги и переломы', en: 'Burns and fractures' },
            items: [
              { color: 'blue', title: { ru: 'Ожог', en: 'Burn' }, es: '<b>agua fría</b>, no quitar la ropa pegada', body: { ru: 'Охладить холодной водой, прилипшую одежду не снимать, пузыри не прокалывать, влажная стерильная повязка. В сознании и без рвоты — можно дать воды.', en: 'Cool with cold water, don’t remove stuck clothing, don’t burst blisters, moist sterile dressing. If conscious and not vomiting — water to drink is OK.' } },
              { color: 'teal', title: { ru: 'Перелом', en: 'Fracture' }, es: '<b>inmovilizar</b> la zona', body: { ru: 'Боль, отёк, деформация, нельзя двигать. Обездвижить, не давать шевелиться, закрыть рану. Подозрение на позвоночник — не трогать.', en: 'Pain, swelling, deformity, can’t move it. Immobilise, keep it still, cover any wound. Suspected spine injury — don’t touch.' } }
            ]
          },
          {
            type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' },
            body: {
              ru: ['<b>«30 : 2»</b> — 30 нажатий, 2 вдоха, темп как у песни «Stayin’ Alive» (100 в минуту).', '<b>Шлем не снимать</b> — шея важнее.'],
              en: ['<b>“30 : 2”</b> — 30 compressions, 2 breaths, at the pace of “Stayin’ Alive” (100 a minute).', '<b>Leave the helmet on</b> — the neck matters more.']
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
              ['el accidente / el siniestro', { ru: 'ДТП', en: 'crash' }],
              ['el atropello', { ru: 'наезд на пешехода', en: 'running someone over' }],
              ['la víctima / el herido', { ru: 'пострадавший / раненый', en: 'victim / injured person' }],
              ['proteger, avisar, socorrer', { ru: 'защитить, сообщить, помочь', en: 'protect, alert, help' }],
              ['los primeros auxilios', { ru: 'первая помощь', en: 'first aid' }],
              ['consciente / inconsciente', { ru: 'в сознании / без сознания', en: 'conscious / unconscious' }],
              ['la respiración', { ru: 'дыхание', en: 'breathing' }],
              ['la reanimación (RCP)', { ru: 'реанимация (СЛР)', en: 'CPR' }],
              ['la compresión torácica', { ru: 'нажатие на грудь', en: 'chest compression' }],
              ['la hemorragia', { ru: 'кровотечение', en: 'bleeding' }],
              ['el torniquete', { ru: 'жгут', en: 'tourniquet' }],
              ['la quemadura', { ru: 'ожог', en: 'burn' }],
              ['la fractura', { ru: 'перелом', en: 'fracture' }],
              ['el shock', { ru: 'шок', en: 'shock' }],
              ['la posición lateral de seguridad', { ru: 'устойчивое боковое положение', en: 'recovery position' }],
              ['el extintor', { ru: 'огнетушитель', en: 'fire extinguisher' }],
              ['el testigo', { ru: 'свидетель', en: 'witness' }]
            ]
          }
        ]
      }
    ],
    questions: [
      {
        id: 'ac-01',
        es: '¿Qué significan las siglas PAS en caso de accidente?',
        tr: { ru: 'Что означает PAS при ДТП?', en: 'What does PAS stand for at a crash?' },
        options: [
          { es: 'Proteger, Avisar, Socorrer.', ru: 'Защитить, сообщить, помочь.', en: 'Protect, Alert, Succour (help).' },
          { es: 'Parar, Ayudar, Salir.', ru: 'Остановиться, помочь, уехать.', en: 'Stop, Help, Leave.' },
          { es: 'Prevenir, Alertar, Sacar.', ru: 'Предупредить, оповестить, вытащить.', en: 'Prevent, Warn, Remove.' }
        ],
        answer: 0,
        explain: { ru: 'PAS — порядок действий: сначала защитить себя, пострадавших и место; затем сообщить 112; затем оказать помощь.', en: 'PAS is the order of action: first protect yourself, the victims and the scene; then alert 112; then help.' },
        hint: { ru: 'Подстрахуй — Алло 112 — Спасай.', en: 'Protect — Alert — Succour.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-02',
        es: 'Llega el primero a un accidente. ¿Qué debe hacer antes que nada?',
        tr: { ru: 'Вы первым подъехали к ДТП. Что сделать прежде всего?', en: 'You are first at a crash. What should you do first of all?' },
        options: [
          { es: 'Proteger: detenerse en lugar seguro, señalizar y ponerse el chaleco.', ru: 'Защитить: встать в безопасном месте, обозначить, надеть жилет.', en: 'Protect: stop somewhere safe, mark the scene and put on a vest.' },
          { es: 'Sacar a los heridos de los vehículos.', ru: 'Вытащить раненых из машин.', en: 'Pull the injured out of the vehicles.' },
          { es: 'Hacer fotos para el seguro.', ru: 'Сфотографировать для страховой.', en: 'Take photos for insurance.' }
        ],
        answer: 0,
        explain: { ru: 'Сначала безопасность: остановиться, не мешая службам, аварийка, жилет до выхода, обозначить место, ручник у машин, не курить.', en: 'Safety first: stop without blocking services, hazards, vest before getting out, mark the scene, handbrakes on, no smoking.' },
        hint: { ru: 'Сначала P — иначе пострадавших станет больше.', en: 'P first — or there’ll be more victims.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-03',
        es: '¿A qué número se llama para pedir ayuda en un accidente?',
        tr: { ru: 'По какому номеру звонить при ДТП?', en: 'Which number do you call for help at a crash?' },
        options: [
          { es: 'Al 112.', ru: '112.', en: '112.' },
          { es: 'Al 091.', ru: '091.', en: '091.' },
          { es: 'Al 060.', ru: '060.', en: '060.' }
        ],
        answer: 0,
        explain: { ru: '112 — единый номер экстренных служб в Европе. Без телефона — SOS-столб на трассе.', en: '112 is Europe’s single emergency number. No phone — use an SOS post on the road.' },
        hint: { ru: '112 — одна-одна-две.', en: '112 — one-one-two.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-04',
        es: 'Al avisar al 112, ¿qué información es útil dar?',
        tr: { ru: 'Что полезно сообщить, звоня в 112?', en: 'When calling 112, what information is useful?' },
        options: [
          { es: 'Lugar exacto, número de heridos y si hay fuego o personas atrapadas.', ru: 'Точное место, число пострадавших, есть ли огонь или зажатые люди.', en: 'Exact location, number injured, any fire or trapped people.' },
          { es: 'Solo el nombre del conductor culpable.', ru: 'Только имя виновника.', en: 'Only the name of the driver at fault.' },
          { es: 'La marca de los vehículos.', ru: 'Марки машин.', en: 'The car makes.' }
        ],
        answer: 0,
        explain: { ru: 'Данные определяют, кого пришлют: огонь — пожарных, число раненых — сколько скорых. Оставайтесь на месте до прибытия служб.', en: 'The details decide who is sent: fire — firefighters, number injured — how many ambulances. Stay until they arrive.' },
        hint: { ru: 'Где? Сколько? Огонь?', en: 'Where? How many? Fire?' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-05',
        es: 'Un motorista herido lleva el casco puesto. ¿Se lo debe quitar?',
        tr: { ru: 'Пострадавший мотоциклист в шлеме. Снимать шлем?', en: 'An injured motorcyclist is wearing a helmet. Should you remove it?' },
        options: [
          { es: 'No.', ru: 'Нет.', en: 'No.' },
          { es: 'Sí, para que respire mejor.', ru: 'Да, чтобы лучше дышал.', en: 'Yes, so they breathe better.' },
          { es: 'Sí, siempre que esté consciente.', ru: 'Да, если он в сознании.', en: 'Yes, if conscious.' }
        ],
        answer: 0,
        explain: { ru: 'Снятие шлема может повредить шейный отдел позвоночника. Шлем не снимают — это делают медики.', en: 'Removing the helmet can damage the cervical spine. Leave it — medical staff will do it.' },
        hint: { ru: 'Шлем не снимать — шея важнее.', en: 'Helmet stays — the neck matters more.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-06',
        es: '¿Se debe dar de beber a un herido en un accidente?',
        tr: { ru: 'Можно ли давать пострадавшему пить?', en: 'Should you give an injured person a drink?' },
        options: [
          { es: 'No, ni comida, bebida ni medicamentos.', ru: 'Нет: ни еды, ни питья, ни лекарств.', en: 'No — no food, drink or medicines.' },
          { es: 'Sí, agua con azúcar.', ru: 'Да, воду с сахаром.', en: 'Yes, sugared water.' },
          { es: 'Sí, un poco de alcohol para el dolor.', ru: 'Да, немного алкоголя от боли.', en: 'Yes, a little alcohol for pain.' }
        ],
        answer: 0,
        explain: { ru: 'Пострадавшему ничего не дают (возможна операция, рвота). Исключение в пособии — обожжённому в сознании без рвоты можно воды.', en: 'Give nothing (surgery may follow, vomiting). The manual’s exception: a conscious burn victim who isn’t vomiting may have water.' },
        hint: { ru: 'Пострадавшему — ничего в рот.', en: 'Nothing by mouth.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-07',
        es: '¿Cuándo se puede mover a un herido grave?',
        tr: { ru: 'Когда можно перемещать тяжелораненого?', en: 'When may a seriously injured person be moved?' },
        options: [
          { es: 'Solo si corre peligro en ese lugar, por ejemplo, por fuego.', ru: 'Только если на месте ему угрожает опасность, например огонь.', en: 'Only if the spot is dangerous, e.g. a fire.' },
          { es: 'Siempre, para ponerle cómodo.', ru: 'Всегда, чтобы ему было удобнее.', en: 'Always, to make them comfortable.' },
          { es: 'Cuando lo pida otro testigo.', ru: 'Когда попросит другой свидетель.', en: 'When another witness asks.' }
        ],
        answer: 0,
        explain: { ru: 'Без необходимости не перемещать: можно повредить позвоночник. Если нужно — втроём, «единым блоком», голова-шея-туловище на одной линии.', en: 'Don’t move them unless necessary: you could damage the spine. If you must — three people, “as one block”, head-neck-body in line.' },
        hint: { ru: 'Не двигать, если не горит.', en: 'Don’t move them unless it’s on fire.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-08',
        es: 'Si hay que mover a un herido, ¿cómo debe hacerse?',
        tr: { ru: 'Если раненого всё же нужно переместить, как это делать?', en: 'If a casualty must be moved, how should it be done?' },
        options: [
          { es: 'Entre tres personas, como un bloque, con cabeza, cuello y tronco alineados.', ru: 'Втроём, единым блоком, голова, шея и туловище на одной линии.', en: 'By three people, as one block, head, neck and trunk aligned.' },
          { es: 'Arrastrándolo por los pies.', ru: 'Тащить за ноги.', en: 'Dragging them by the feet.' },
          { es: 'Sentándolo primero.', ru: 'Сначала усадить.', en: 'Sitting them up first.' }
        ],
        answer: 0,
        explain: { ru: 'Позвоночник не должен сгибаться: три человека, синхронно, «одним блоком».', en: 'The spine must not bend: three people, in sync, “as one block”.' },
        hint: { ru: 'Трое — как одно бревно.', en: 'Three people — like moving a log.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-09',
        es: '¿Qué es lo primero que hay que comprobar en un herido?',
        tr: { ru: 'Что первым проверяют у пострадавшего?', en: 'What do you check first in a casualty?' },
        options: [
          { es: 'Si está consciente.', ru: 'В сознании ли он.', en: 'Whether they are conscious.' },
          { es: 'Si tiene fracturas.', ru: 'Нет ли переломов.', en: 'Whether they have fractures.' },
          { es: 'Su documentación.', ru: 'Его документы.', en: 'Their documents.' }
        ],
        answer: 0,
        explain: { ru: 'Порядок: сознание (спросить, слегка ущипнуть), затем дыхание, потом кровотечения, ожоги, переломы.', en: 'Order: consciousness (ask, pinch lightly), then breathing, then bleeding, burns, fractures.' },
        hint: { ru: 'Сначала «ты меня слышишь?».', en: 'First: “can you hear me?”' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-10',
        es: 'Un herido no responde. ¿Qué debe comprobar a continuación?',
        tr: { ru: 'Пострадавший не реагирует. Что проверить дальше?', en: 'A casualty doesn’t respond. What do you check next?' },
        options: [
          { es: 'Si respira, mirando, escuchando y sintiendo durante 10 segundos.', ru: 'Дышит ли: смотреть, слушать и чувствовать 10 секунд.', en: 'Whether they breathe: look, listen and feel for 10 seconds.' },
          { es: 'Si tiene la documentación del vehículo.', ru: 'Есть ли документы на машину.', en: 'Whether the car papers are there.' },
          { es: 'Si lleva el cinturón puesto.', ru: 'Был ли он пристёгнут.', en: 'Whether they wore a belt.' }
        ],
        answer: 0,
        explain: { ru: 'Без сознания — на спину, приподнять подбородок (открыть дыхательные пути) и 10 секунд проверять дыхание.', en: 'Unconscious — on the back, lift the chin (open the airway) and check breathing for 10 seconds.' },
        hint: { ru: 'Смотри — слушай — чувствуй.', en: 'Look — listen — feel.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-11',
        es: 'Un herido inconsciente no respira. ¿Qué debe hacer hasta que llegue la ayuda?',
        tr: { ru: 'Пострадавший без сознания и не дышит. Что делать до приезда помощи?', en: 'An unconscious casualty isn’t breathing. What do you do until help arrives?' },
        options: [
          { es: 'Reanimación: 30 compresiones en el tórax y 2 ventilaciones, a unas 100 por minuto.', ru: 'Реанимацию: 30 нажатий на грудь и 2 вдоха, темп около 100 в минуту.', en: 'CPR: 30 chest compressions and 2 breaths, at about 100 a minute.' },
          { es: 'Ponerle de lado y esperar.', ru: 'Положить на бок и ждать.', en: 'Put them on their side and wait.' },
          { es: 'Darle agua.', ru: 'Дать воды.', en: 'Give them water.' }
        ],
        answer: 0,
        explain: { ru: 'Сердечно-лёгочная реанимация: ладони в замок на середину груди, прямые руки, 100 нажатий в минуту, 30 нажатий — 2 вдоха, без остановки до приезда врачей.', en: 'CPR: interlocked hands mid-chest, straight arms, 100 compressions a minute, 30 compressions — 2 breaths, without stopping until help arrives.' },
        hint: { ru: '30 : 2, темп «Stayin’ Alive».', en: '30 : 2, at the tempo of “Stayin’ Alive”.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-12',
        es: 'Un herido inconsciente respira con normalidad y tiene que dejarlo solo un momento. ¿Cómo lo coloca?',
        tr: { ru: 'Пострадавший без сознания дышит нормально, а вам надо отойти. Как его уложить?', en: 'An unconscious casualty breathes normally and you must leave briefly. How do you position them?' },
        options: [
          { es: 'De lado, en posición lateral de seguridad.', ru: 'На бок, в устойчивое боковое положение.', en: 'On their side, in the recovery position.' },
          { es: 'Boca abajo.', ru: 'Лицом вниз.', en: 'Face down.' },
          { es: 'Sentado.', ru: 'Сидя.', en: 'Sitting up.' }
        ],
        answer: 0,
        explain: { ru: 'На боку язык и рвота не перекроют дыхательные пути.', en: 'On their side, the tongue or vomit won’t block the airway.' },
        hint: { ru: 'Дышит, но без сознания — на бок.', en: 'Breathing but unconscious — on the side.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-13',
        es: '¿Cuál es la frecuencia respiratoria normal de un adulto?',
        tr: { ru: 'Какая нормальная частота дыхания у взрослого?', en: 'What is an adult’s normal breathing rate?' },
        options: [
          { es: 'Entre 15 y 20 respiraciones por minuto.', ru: '15–20 вдохов в минуту.', en: '15–20 breaths a minute.' },
          { es: 'Entre 30 y 40.', ru: '30–40.', en: '30–40.' },
          { es: 'Entre 5 y 8.', ru: '5–8.', en: '5–8.' }
        ],
        answer: 0,
        explain: { ru: 'Взрослый — 15–20 вдохов в минуту, ребёнок — 26–30, младенец — 30–40.', en: 'Adult 15–20 breaths a minute, child 26–30, baby 30–40.' },
        hint: { ru: 'Взрослый — «пятнадцать–двадцать».', en: 'Adult — fifteen to twenty.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-14',
        es: '¿Cómo se controla primero una hemorragia externa?',
        tr: { ru: 'Как в первую очередь останавливают наружное кровотечение?', en: 'How do you first control external bleeding?' },
        options: [
          { es: 'Con compresión directa sobre la herida con una gasa o pañuelo limpio.', ru: 'Прямым давлением на рану чистой салфеткой или платком.', en: 'Direct pressure on the wound with a clean pad or cloth.' },
          { es: 'Con un torniquete.', ru: 'Жгутом.', en: 'With a tourniquet.' },
          { es: 'Echando alcohol.', ru: 'Полив спиртом.', en: 'Pouring alcohol on it.' }
        ],
        answer: 0,
        explain: { ru: 'Сначала прямое давление; пропитавшуюся салфетку не снимают, добавляют сверху, конечность поднимают. Не помогает — давление на артерию; жгут — последнее средство.', en: 'First direct pressure; don’t remove a soaked pad, add more, raise the limb. If that fails — press the artery; a tourniquet is the last resort.' },
        hint: { ru: 'Давить — потом артерия — потом жгут.', en: 'Press — then artery — then tourniquet.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-15',
        es: 'Si la gasa con la que presiona una herida se empapa de sangre, ¿qué debe hacer?',
        tr: { ru: 'Салфетка на ране пропиталась кровью. Что делать?', en: 'The pad you’re pressing on a wound is soaked with blood. What do you do?' },
        options: [
          { es: 'No quitarla y poner otra encima, sin dejar de presionar.', ru: 'Не снимать, положить сверху ещё одну и продолжать давить.', en: 'Leave it, put another on top and keep pressing.' },
          { es: 'Quitarla y poner una limpia.', ru: 'Снять и положить чистую.', en: 'Remove it and use a clean one.' },
          { es: 'Dejar de presionar.', ru: 'Перестать давить.', en: 'Stop pressing.' }
        ],
        answer: 0,
        explain: { ru: 'Снимая салфетку, вы сорвёте образовавшийся сгусток. Добавляйте сверху и давите дальше.', en: 'Removing the pad tears away the forming clot. Add more on top and keep pressing.' },
        hint: { ru: 'Сгусток — не трогать.', en: 'Don’t disturb the clot.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-16',
        es: '¿Dónde se coloca un torniquete?',
        tr: { ru: 'Куда накладывают жгут?', en: 'Where do you apply a tourniquet?' },
        options: [
          { es: 'Por encima de la herida, solo en brazos o piernas y como último recurso.', ru: 'Выше раны, только на руку или ногу и в крайнем случае.', en: 'Above the wound, only on arms or legs and as a last resort.' },
          { es: 'Por debajo de la herida.', ru: 'Ниже раны.', en: 'Below the wound.' },
          { es: 'En el cuello.', ru: 'На шею.', en: 'On the neck.' }
        ],
        answer: 0,
        explain: { ru: 'Жгут — только на конечности, когда не помогли прямое давление и прижатие артерии; выше раны, широкой тканью; записать время и место; снимает только медик.', en: 'A tourniquet only on limbs, when direct and arterial pressure failed; above the wound, with wide cloth; note time and place; only medics remove it.' },
        hint: { ru: 'Жгут — выше и с запиской о времени.', en: 'Tourniquet — above, with the time written down.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-17',
        es: 'Un herido tiene un objeto clavado en una pierna. ¿Qué debe hacer?',
        tr: { ru: 'У пострадавшего в ноге застрял предмет. Что делать?', en: 'A casualty has an object stuck in a leg. What do you do?' },
        options: [
          { es: 'No sacarlo.', ru: 'Не вынимать его.', en: 'Don’t remove it.' },
          { es: 'Sacarlo con cuidado.', ru: 'Осторожно вытащить.', en: 'Pull it out carefully.' },
          { es: 'Moverlo para comprobar la profundidad.', ru: 'Пошевелить, чтобы понять глубину.', en: 'Move it to check how deep it is.' }
        ],
        answer: 0,
        explain: { ru: 'Воткнутый предмет сдерживает кровотечение. Его не вынимают; закрепляют и ждут врачей.', en: 'An embedded object holds back the bleeding. Leave it in; stabilise it and wait for help.' },
        hint: { ru: 'Воткнуто — значит «пробка».', en: 'Embedded means “a plug”.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-18',
        es: '¿Qué síntoma puede indicar una hemorragia interna (estado de shock)?',
        tr: { ru: 'Какой признак может указывать на внутреннее кровотечение (шок)?', en: 'Which sign can point to internal bleeding (shock)?' },
        options: [
          { es: 'Piel pálida, sudor frío y pulso rápido y débil.', ru: 'Бледная кожа, холодный пот, частый слабый пульс.', en: 'Pale skin, cold sweat, a fast weak pulse.' },
          { es: 'Cara roja y mucho calor.', ru: 'Красное лицо и жар.', en: 'A red face and feeling hot.' },
          { es: 'Ganas de comer.', ru: 'Чувство голода.', en: 'Feeling hungry.' }
        ],
        answer: 0,
        explain: { ru: 'Шок: частое поверхностное дыхание, слабый частый пульс, бледность, холодный липкий пот, бессвязная речь. Уложить, поднять ноги выше головы.', en: 'Shock: fast shallow breathing, a weak fast pulse, pallor, cold clammy sweat, confusion. Lay them down with legs above the head.' },
        hint: { ru: 'Бледный и холодный — шок.', en: 'Pale and cold — shock.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-19',
        es: 'Un herido en estado de shock, ¿en qué posición se coloca?',
        tr: { ru: 'Как уложить пострадавшего в шоке?', en: 'How do you position a casualty in shock?' },
        options: [
          { es: 'Tumbado, con los pies más altos que la cabeza.', ru: 'Лёжа, ноги выше головы.', en: 'Lying down, feet higher than the head.' },
          { es: 'Sentado.', ru: 'Сидя.', en: 'Sitting.' },
          { es: 'De pie, caminando.', ru: 'Стоя, на ходу.', en: 'Standing, walking.' }
        ],
        answer: 0,
        explain: { ru: 'Поднятые ноги возвращают кровь к сердцу и мозгу. Если рвота — на бок, ноги всё равно выше головы.', en: 'Raised legs send blood back to the heart and brain. If vomiting — on the side, legs still raised.' },
        hint: { ru: 'Шок — ноги вверх.', en: 'Shock — legs up.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-20',
        es: 'Sale sangre por el oído de un herido tras un golpe. ¿Qué debe hacer?',
        tr: { ru: 'После удара у пострадавшего кровь из уха. Что делать?', en: 'After a blow a casualty bleeds from the ear. What should you do?' },
        options: [
          { es: 'Tratarle como muy grave y cubrir el oído con una gasa, sin presionar.', ru: 'Считать тяжёлым и прикрыть ухо салфеткой, не давя.', en: 'Treat them as very serious and cover the ear with a pad, without pressing.' },
          { es: 'Taponar el oído con fuerza.', ru: 'Плотно заткнуть ухо.', en: 'Plug the ear tightly.' },
          { es: 'Ignorarlo, es leve.', ru: 'Не обращать внимания: это несерьёзно.', en: 'Ignore it, it’s minor.' }
        ],
        answer: 0,
        explain: { ru: 'Кровь из уха, носа, рта после удара — признак внутренней травмы. Не затыкать, ухо только прикрыть, при риске удушья — на бок.', en: 'Bleeding from ear, nose or mouth after a blow signals internal injury. Don’t plug it; just cover the ear; on the side if they might choke.' },
        hint: { ru: 'Кровь «изнутри» — не затыкать.', en: 'Blood from inside — don’t plug it.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-21',
        es: '¿Qué se debe hacer ante una quemadura?',
        tr: { ru: 'Что делать при ожоге?', en: 'What should you do for a burn?' },
        options: [
          { es: 'Echar agua fría y no quitar la ropa pegada a la piel.', ru: 'Поливать холодной водой и не снимать прилипшую одежду.', en: 'Cool with cold water and don’t remove clothing stuck to the skin.' },
          { es: 'Pinchar las ampollas.', ru: 'Проколоть пузыри.', en: 'Burst the blisters.' },
          { es: 'Aplicar aceite o pomada.', ru: 'Намазать маслом или мазью.', en: 'Apply oil or ointment.' }
        ],
        answer: 0,
        explain: { ru: 'Охладить холодной водой, прилипшую одежду не снимать, пузыри не трогать, влажная стерильная повязка; два обожжённых места вместе не бинтовать.', en: 'Cool with cold water, leave stuck clothing, don’t touch blisters, moist sterile dressing; don’t bandage two burned areas together.' },
        hint: { ru: 'Ожог — вода, а не мазь.', en: 'Burn — water, not ointment.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-22',
        es: '¿Cómo se actúa ante una posible fractura?',
        tr: { ru: 'Как действовать при подозрении на перелом?', en: 'How do you handle a possible fracture?' },
        options: [
          { es: 'Inmovilizando la zona y evitando que el herido la mueva.', ru: 'Обездвижить место и не давать двигать.', en: 'Immobilise the area and stop the casualty moving it.' },
          { es: 'Intentando colocar el hueso en su sitio.', ru: 'Попытаться вправить кость.', en: 'Try to put the bone back in place.' },
          { es: 'Haciendo que camine para comprobarlo.', ru: 'Попросить пройтись для проверки.', en: 'Make them walk to test it.' }
        ],
        answer: 0,
        explain: { ru: 'Признаки: сильная боль, отёк, деформация, невозможно двигать. Обездвижить, не вправлять, закрыть рану. Подозрение на позвоночник — не трогать.', en: 'Signs: severe pain, swelling, deformity, can’t move it. Immobilise, don’t reset, cover wounds. Suspected spine — don’t touch.' },
        hint: { ru: 'Перелом — не шевелить.', en: 'Fracture — keep it still.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-23',
        es: 'Hay fuego en un vehículo accidentado. ¿Con qué no debe intentar apagarlo?',
        tr: { ru: 'Горит машина после ДТП. Чем нельзя тушить?', en: 'A crashed vehicle is on fire. What must you not use to put it out?' },
        options: [
          { es: 'Con agua.', ru: 'Водой.', en: 'Water.' },
          { es: 'Con un extintor.', ru: 'Огнетушителем.', en: 'An extinguisher.' },
          { es: 'Con tierra o arena.', ru: 'Землёй или песком.', en: 'Earth or sand.' }
        ],
        answer: 0,
        explain: { ru: 'Горящее топливо водой не тушат — оно растекается. Огнетушитель, земля, песок или одеяло.', en: 'Burning fuel isn’t fought with water — it spreads. Use an extinguisher, earth, sand or a blanket.' },
        hint: { ru: 'Горит топливо — песок или огнетушитель, не вода.', en: 'A fuel fire — sand or an extinguisher, not water.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-24',
        es: '¿Qué es la «hora de oro» tras un accidente?',
        tr: { ru: 'Что такое «золотой час» после ДТП?', en: 'What is the “golden hour” after a crash?' },
        options: [
          { es: 'El periodo de una o dos horas en que la asistencia y la reanimación pueden salvar la vida.', ru: 'Первые 1–2 часа, когда помощь и реанимация могут спасти жизнь.', en: 'The first one or two hours when care and resuscitation can save a life.' },
          { es: 'La hora en que más accidentes hay.', ru: 'Час, когда больше всего ДТП.', en: 'The hour with most crashes.' },
          { es: 'El tiempo para avisar al seguro.', ru: 'Время, чтобы известить страховую.', en: 'The time to notify the insurer.' }
        ],
        answer: 0,
        explain: { ru: 'Три момента смертей: сразу, в «золотой час» и спустя дни. В золотой час быстрая помощь решает всё; первые 10 минут особенно важны.', en: 'Deaths cluster at three moments: immediately, in the golden hour and days later. In the golden hour fast care decides everything; the first 10 minutes most of all.' },
        hint: { ru: 'Золотой час — время, когда помощь «на вес золота».', en: 'The golden hour — when help is worth gold.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-25',
        es: '¿Cuándo está justificado trasladar a un herido en su propio vehículo sin esperar a la ambulancia?',
        tr: { ru: 'Когда оправдано везти раненого самому, не дожидаясь скорой?', en: 'When is it justified to take a casualty in your own car without waiting for an ambulance?' },
        options: [
          { es: 'Si el lugar está aislado o la ambulancia tardará más de 30 minutos y el herido está inconsciente o sangra sin control.', ru: 'Если место изолировано или скорая будет дольше 30 минут, а пострадавший без сознания или с неостанавливаемым кровотечением.', en: 'If the place is isolated or the ambulance needs over 30 minutes and the casualty is unconscious or bleeding uncontrollably.' },
          { es: 'Siempre que el herido lo pida.', ru: 'Всегда, когда раненый просит.', en: 'Whenever the casualty asks.' },
          { es: 'Nunca.', ru: 'Никогда.', en: 'Never.' }
        ],
        answer: 0,
        explain: { ru: 'Обычно ждут скорую. Самим — только в исключительных случаях, лучше в машине, где можно уложить, медленно и плавно.', en: 'Normally wait for the ambulance. Only in exceptional cases take them yourself, ideally lying down, driving slowly and smoothly.' },
        hint: { ru: 'Сам вези — только если скорой «нет».', en: 'Drive them yourself only if there’s effectively no ambulance.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-26',
        es: '¿Qué obligación tiene un conductor implicado en un accidente?',
        tr: { ru: 'Какая обязанность у водителя — участника ДТП?', en: 'What is the duty of a driver involved in a crash?' },
        options: [
          { es: 'Detenerse, ayudar o pedir ayuda y facilitar sus datos.', ru: 'Остановиться, помочь или вызвать помощь и сообщить свои данные.', en: 'Stop, help or call for help, and give their details.' },
          { es: 'Irse si no ha sido culpable.', ru: 'Уехать, если не виноват.', en: 'Leave if not at fault.' },
          { es: 'Solo avisar a su seguro.', ru: 'Только сообщить страховой.', en: 'Only inform the insurer.' }
        ],
        answer: 0,
        explain: { ru: 'Участник ДТП обязан остановиться, обезопасить место, помочь или вызвать помощь, сообщить свои данные и данные машины, содействовать полиции.', en: 'A driver involved must stop, make the scene safe, help or call for help, give their and the vehicle’s details and cooperate with police.' },
        hint: { ru: 'Участник — не уезжает.', en: 'Involved — you stay.' },
        ref: 'RGC, art. 129'
      },
      {
        id: 'ac-27',
        es: 'Pasa junto a un accidente en el que ya actúan los servicios de emergencia. ¿Qué debe hacer?',
        tr: { ru: 'Вы проезжаете ДТП, где уже работают экстренные службы. Что делать?', en: 'You pass a crash where emergency services are already working. What should you do?' },
        options: [
          { es: 'Seguir circulando con precaución para no estorbar.', ru: 'Проехать дальше осторожно, чтобы не мешать.', en: 'Carry on carefully so as not to get in the way.' },
          { es: 'Detenerse a mirar.', ru: 'Остановиться посмотреть.', en: 'Stop and look.' },
          { es: 'Grabar un vídeo.', ru: 'Снять видео.', en: 'Record a video.' }
        ],
        answer: 0,
        explain: { ru: 'Если помочь вы не можете или службы уже на месте, лучше проехать, не создавая пробку и опасность.', en: 'If you can’t help or services are already there, carry on without causing a jam or danger.' },
        hint: { ru: 'Зевак — в пробку не надо.', en: 'Don’t rubberneck.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-28',
        es: '¿Qué hace el sistema eCall?',
        tr: { ru: 'Что делает система eCall?', en: 'What does the eCall system do?' },
        options: [
          { es: 'Avisa automáticamente al 112 en caso de accidente.', ru: 'Автоматически вызывает 112 при аварии.', en: 'Automatically calls 112 in a crash.' },
          { es: 'Llama a la aseguradora para dar parte.', ru: 'Звонит в страховую.', en: 'Calls the insurer to report it.' },
          { es: 'Bloquea las puertas.', ru: 'Блокирует двери.', en: 'Locks the doors.' }
        ],
        answer: 0,
        explain: { ru: 'eCall при серьёзной аварии сам связывается с 112 и передаёт координаты, даже если никто не может позвонить.', en: 'In a serious crash eCall contacts 112 itself and sends the location, even if no one can call.' },
        hint: { ru: 'eCall — «машина звонит сама».', en: 'eCall — the car calls by itself.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-29',
        es: '¿Qué peatones tienen más riesgo de sufrir un atropello?',
        tr: { ru: 'Какие пешеходы чаще всего попадают под машины?', en: 'Which pedestrians are most at risk of being hit?' },
        options: [
          { es: 'Los niños y las personas mayores.', ru: 'Дети и пожилые.', en: 'Children and older people.' },
          { es: 'Los adultos de 30 a 50 años.', ru: 'Взрослые 30–50 лет.', en: 'Adults aged 30–50.' },
          { es: 'Los que van en grupo.', ru: 'Те, кто идёт группой.', en: 'Those walking in groups.' }
        ],
        answer: 0,
        explain: { ru: 'Дети низкие и не чувствуют опасности; пожилые хуже видят и слышат и плохо оценивают скорость машин.', en: 'Children are small with little sense of danger; older people see and hear less and misjudge vehicle speed.' },
        hint: { ru: 'Самые маленькие и самые старшие.', en: 'The youngest and the oldest.' },
        ref: 'DGT, Manual básico, tema 16'
      },
      {
        id: 'ac-30',
        es: '¿Qué debe hacer para reducir el riesgo de accidente con motocicletas?',
        tr: { ru: 'Как снизить риск ДТП с мотоциклами?', en: 'How can you reduce the risk of crashes with motorbikes?' },
        options: [
          { es: 'Comprobar que no hay motos antes de cambiar de carril y no circular a su lado.', ru: 'Проверять, нет ли мотоциклов, перед перестроением и не ехать рядом с ними.', en: 'Check for bikes before changing lanes and don’t ride alongside them.' },
          { es: 'Pegarse a ellas para que se aparten.', ru: 'Прижиматься к ним, чтобы уступили.', en: 'Tailgate them so they move over.' },
          { es: 'Tocar el claxon al adelantarlas.', ru: 'Сигналить при обгоне.', en: 'Honk when passing them.' }
        ],
        answer: 0,
        explain: { ru: 'Мотоциклы плохо заметны: проверяйте «слепые зоны», не держитесь рядом сбоку, соблюдайте дистанцию и их приоритет.', en: 'Bikes are hard to see: check blind spots, don’t stay alongside, keep your distance and respect their priority.' },
        hint: { ru: 'Посмотри дважды — увидишь мотоцикл.', en: 'Look twice — save a biker.' },
        ref: 'DGT, Manual básico, tema 16'
      }
    ]
  }
]);
