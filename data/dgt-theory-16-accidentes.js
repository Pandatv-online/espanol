// DGT · theory, topic 16: road accidents. Sources: DGT «Teórica abreviada, lectura fácil» (2025),
// DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-accidentes', level: 'DGT',
    title: { ru: 'Дорожные аварии', en: 'Road accidents' },
    summary: {
      ru: 'Причины аварий и группы риска, правило PAS, V-16 и жилет, обязанности по закону, первая помощь и европротокол.',
      en: 'Causes of crashes and risk groups, the PAS rule, V-16 and vest, legal duties, first aid and the accident report form.'
    },
    hero: {
      es: 'Accidentes de <b>tráfico</b>',
      sub: { ru: 'Почему они случаются и что делать на месте аварии', en: 'Why they happen and what to do at the scene' }
    },
    tabs: [
      { id: 'causes', label: { ru: 'Причины', en: 'Causes' }, blocks: [
        { type: 'table', heading: { ru: 'Факторы риска', en: 'Risk factors' },
          head: [{ ru: 'Фактор', en: 'Factor' }, { ru: 'Примеры', en: 'Examples' }, { ru: 'Доля аварий', en: 'Share' }],
          rows: [
            [{ ru: 'Человек', en: 'Human' }, { ru: 'скорость, алкоголь', en: 'speed, alcohol' }, '70–90 %'],
            [{ ru: 'Дорога, среда', en: 'Road, setting' }, { ru: 'мокро, поворот', en: 'wet, a bend' }, '10–35 %'],
            [{ ru: 'Машина', en: 'Vehicle' }, { ru: 'тормоза, шина', en: 'brakes, a tyre' }, '4–13 %']
          ] },
        { type: 'text', color: 'blue', body: {
          ru: ['Большинство аварий можно предотвратить: почти всегда в цепочке причин есть <b>человеческий фактор</b> — скорость, алкоголь и наркотики, отвлечение, усталость.',
               '<b>Где и когда:</b> смертельных аварий больше <b>за городом</b>, но в городе чаще всего <b>сбивают пешеходов</b>. Аварий больше на <b>прямых</b>, чем в поворотах; на autopista и autovía их меньше, чем на обычных дорогах. Пики — Страстная неделя, декабрь, лето, выходные и праздники (особенно ночью), а в будни — дорога с работы.'],
          en: ['Most crashes are preventable: the <b>human factor</b> — speed, alcohol and drugs, distraction, fatigue — is almost always in the chain of causes.',
               '<b>Where and when:</b> fatal crashes happen mostly <b>outside towns</b>, but in towns the most common crash is <b>hitting a pedestrian</b>. More crashes occur on <b>straights</b> than in bends, fewer on autopistas and autovías than on ordinary roads. Peaks: Holy Week, December, summer, weekends and holidays (especially at night), and on weekdays the trip home from work.'] } },
        { type: 'rules', heading: { ru: 'Группы риска', en: 'Risk groups' }, items: [
          { color: 'blue', title: { ru: 'Молодые водители', en: 'Young drivers' }, es: 'de 15 a 29 años',
            body: { ru: 'Аварии — <b>первая причина смерти</b> людей 15–29 лет в Испании: скорость, алкоголь, мало опыта, лишний риск, гонки, «ремень не нужен».',
                    en: 'Crashes are the <b>leading cause of death</b> for 15–29-year-olds in Spain: speed, alcohol, little experience, risk-taking, racing, “I don’t need a belt”.' } },
          { color: 'blue', title: { ru: 'Старше 65', en: 'Over 65' }, es: 'mayores de 65 años',
            body: { ru: 'Осторожны, но медленнее реагируют, хуже видят и слышат, принимают лекарства; травмы у них тяжелее.',
                    en: 'Careful, but slower to react, with weaker sight and hearing, often on medication; their injuries are more severe.' } },
          { color: 'blue', title: { ru: 'Пешеходы', en: 'Pedestrians' }, es: 'niños y mayores',
            body: { ru: 'Больше всех рискуют <b>дети</b> (особенно после школы) и <b>пожилые</b>. Водителю: умеренная скорость в городе, внимание у школ, автобусов, выездов из гаражей.',
                    en: 'Most at risk are <b>children</b> (especially after school) and <b>the elderly</b>. Drivers: moderate speed in town, care near schools, buses and garage exits.' } },
          { color: 'blue', title: { ru: 'Двухколёсные', en: 'Two-wheelers' }, es: 'motos y bicicletas',
            body: { ru: 'Их хуже видно и они не защищены. Не стойте рядом с мотоциклом, проверяйте мёртвую зону, не сигнальте велосипедистам.',
                    en: 'They are harder to see and unprotected. Don’t sit alongside a motorbike, check the blind spot, don’t honk at cyclists.' } }
        ] }
      ] },
      { id: 'pas', label: { ru: 'Правило PAS', en: 'PAS rule' }, blocks: [
        { type: 'figure', src: 'img/dgt/accidentes-pas.svg',
          alt: { ru: 'Схема из трёх блоков: P — Proteger (защитить себя, пострадавших и место: аварийка, жилет, V-16), A — Avisar (позвонить 112 или с поста SOS, сообщить что и где), S — Socorrer (проверить сознание и дыхание, не перемещать, не снимать шлем).',
                 en: 'Three-box diagram: P — Proteger (protect yourself, the victims and the scene: hazard lights, vest, V-16), A — Avisar (call 112 or use an SOS post, say what and where), S — Socorrer (check consciousness and breathing, don’t move the person, don’t remove the helmet).' },
          caption: { ru: 'PAS: Proteger → Avisar → Socorrer — строго в этом порядке.', en: 'PAS: Proteger → Avisar → Socorrer — in exactly this order.' } },
        { type: 'rules', items: [
          { color: 'coral', label: { ru: 'Шаг 1', en: 'Step 1' }, title: { ru: 'Защитить', en: 'Protect' }, es: 'Proteger',
            body: { ru: 'Себя, пострадавших и место аварии. Остановиться в безопасном месте, не мешая экстренным службам; заглушить двигатель, <b>аварийка</b>; <b>жилет до выхода</b> из машины; поставить <b>V-16</b>; ручник у всех машин; не курить. Огонь тушат огнетушителем, землёй, песком или одеялом — <b>не водой</b>.',
                    en: 'Yourself, the victims and the scene. Stop somewhere safe without blocking emergency services; engine off, <b>hazard lights</b>; <b>vest on before</b> getting out; place the <b>V-16</b>; handbrake on all vehicles; no smoking. Put out fire with an extinguisher, earth, sand or a blanket — <b>not water</b>.' } },
          { color: 'amber', label: { ru: 'Шаг 2', en: 'Step 2' }, title: { ru: 'Сообщить', en: 'Alert' }, es: 'Avisar',
            body: { ru: 'Звонить на <b>112</b>, без телефона — с ближайшего <b>поста SOS</b>. Сказать: где, что случилось, сколько пострадавших, есть ли огонь или зажатые люди. Остаться на месте до прибытия служб. Система <b>eCall</b> сама звонит на 112 после сильного удара.',
                    en: 'Call <b>112</b>; without a phone use the nearest <b>SOS post</b>. Say where, what happened, how many injured, any fire or trapped people. Stay until the services arrive. The <b>eCall</b> system calls 112 by itself after a severe impact.' } },
          { color: 'teal', label: { ru: 'Шаг 3', en: 'Step 3' }, title: { ru: 'Помочь', en: 'Help' }, es: 'Socorrer',
            body: { ru: 'Спокойно и быстро; не оставлять пострадавших одних. <b>Не перемещать</b> без крайней необходимости, беречь шею, <b>не снимать шлем</b> с мотоциклиста, не давать еду, питьё и лекарства, ослабить тесную одежду, укрыть.',
                    en: 'Calmly and quickly; don’t leave the injured alone. <b>Don’t move them</b> unless essential, protect the neck, <b>don’t take off</b> a rider’s helmet, give no food, drink or medicine, loosen tight clothing, keep them warm.' } }
        ] },
        { type: 'tip', title: { ru: 'Почему важна скорость', en: 'Why speed matters' }, body: {
          ru: 'PAS особенно важен в первые <b>10 минут</b>. После аварии три пика смертей: первые секунды, <b>«золотой час»</b> (1–2 часа, когда реанимация спасает жизнь) и дни или недели спустя.',
          en: 'PAS matters most in the first <b>10 minutes</b>. There are three peaks of deaths after a crash: the first seconds, the <b>“golden hour”</b> (1–2 hours, when resuscitation saves lives) and days or weeks later.' } }
      ] },
      { id: 'law', label: { ru: 'Закон', en: 'The law' }, blocks: [
        { type: 'text', color: 'purple', body: {
          ru: ['Каждый, кто <b>участвовал</b> в аварии, <b>видел</b> её или <b>узнал</b> о ней, обязан помочь пострадавшим или вызвать помощь, не допустить новых опасностей и помочь выяснить, что произошло (LSV, ст. 51; RGC, ст. 129).',
               'Не помочь человеку в опасности, когда это можно сделать без риска для себя, или не вызвать помощь, если помочь сам не можешь, — преступление <b>omisión del deber de socorro</b> (Código Penal, ст. 195); если аварию вызвал ты сам — тюрьма. Уехать с места аварии с погибшими или тяжело ранеными — отдельное преступление <b>abandono del lugar del accidente</b> (ст. 382 bis), тоже с тюрьмой.'],
          en: ['Anyone <b>involved</b> in a crash, who <b>witnesses</b> it or <b>learns</b> of it, must help the victims or call for help, prevent further danger and help establish what happened (LSV art. 51; RGC art. 129).',
               'Failing to help a person in danger when you can do so safely, or failing to call for help when you cannot help yourself, is the crime of <b>omisión del deber de socorro</b> (Criminal Code art. 195); if you caused the crash, it means prison. Leaving the scene of a crash with dead or seriously injured victims is a separate crime, <b>abandono del lugar del accidente</b> (art. 382 bis), also punished with prison.'] } },
        { type: 'table', heading: { ru: 'Участник аварии обязан', en: 'A driver involved must' },
          head: [{ ru: 'Что', en: 'What' }, { ru: 'Статья', en: 'Article' }],
          rows: [
            [{ ru: 'остановиться безопасно', en: 'stop without new danger' }, 'RGC 129.2.a'],
            [{ ru: 'помочь, вызвать скорую', en: 'help, call an ambulance' }, 'RGC 129.2.d'],
            [{ ru: 'ничего не трогать (тяжёлые)', en: 'leave scene as is (serious)' }, 'RGC 129.2.c'],
            [{ ru: 'ждать полицию, если раненые', en: 'wait for police if injured' }, 'RGC 129.2.e'],
            [{ ru: 'назвать себя и данные машины', en: 'give name and car details' }, 'RGC 129.2.f-g']
          ] },
        { type: 'text', color: 'purple', body: {
          ru: ['Если машина мешает движению: обозначить её (аварийка, ночью — габариты, <b>V-16</b>) и как можно скорее убрать с проезжей части (RGC, ст. 130). Может ехать — доехать до ближайшего съезда по правой обочине.',
               'Если машина стоит: все выходят, если есть безопасное место за пределами дороги, — <b>со стороны, противоположной потоку</b>, и не стоят на полосах и обочине. Выйти безопасно нельзя — остаются в салоне пристёгнутыми.',
               'Ждать полицию не обязательно, если травмы явно лёгкие, движение восстановлено и никто из участников не просит её вызвать.'],
          en: ['If the car blocks traffic: signal it (hazards, side lights at night, <b>V-16</b>) and clear the carriageway as soon as possible (RGC art. 130). If it can still move, drive to the next exit along the right shoulder.',
               'If it cannot move: everyone gets out if there is a safe place off the road — <b>on the side away from traffic</b> — and nobody stands in the lanes or on the shoulder. If getting out is unsafe, stay inside with belts on.',
               'You need not wait for the police if injuries are clearly minor, traffic is flowing again and nobody involved asks for them.'] } },
        { type: 'rules', heading: { ru: 'Европротокол', en: 'Accident report form' }, items: [
          { color: 'purple', title: { ru: 'Parte amistoso', en: 'Parte amistoso' }, es: 'declaración amistosa de accidente',
            body: { ru: 'Общий бланк для страховых: схема, обстоятельства, подписи обоих водителей, у каждого своя копия. Заполнять <b>в безопасном месте вне дороги</b>, никогда на проезжей части (RGC, ст. 130.5). Сообщить о случае в страховую — в течение <b>7 дней</b>, если полис не даёт больше (Ley 50/1980, ст. 16).',
                    en: 'A shared form for the insurers: sketch, circumstances, both drivers’ signatures, a copy each. Fill it in <b>somewhere safe off the road</b>, never on the carriageway (RGC art. 130.5). Report the claim to your insurer within <b>7 days</b>, unless the policy allows longer (Ley 50/1980 art. 16).' } }
        ] }
      ] },
      { id: 'firstaid', label: { ru: 'Помощь', en: 'First aid' }, blocks: [
        { type: 'triggers', heading: { ru: 'Проверить по порядку', en: 'Check in this order' }, items: [
          { num: '1', color: 'teal', title: { ru: 'Сознание', en: 'Consciousness' }, phrases: ['¿Me oye?', '¿Está bien?'],
            body: { ru: 'Спросить, слегка ущипнуть. Отвечает — не двигать, искать кровотечения, ожоги, переломы, наблюдать. Не отвечает — проверить дыхание.',
                    en: 'Ask, pinch lightly. If they respond — don’t move them, look for bleeding, burns, fractures, keep watching. If not — check breathing.' } },
          { num: '2', color: 'teal', title: { ru: 'Дыхание', en: 'Breathing' }, phrases: ['ver, oír, sentir'],
            body: { ru: 'Запрокинуть голову, поднять подбородок; смотреть на грудь, слушать и чувствовать щекой <b>10 секунд</b>. Дышит, а надо отойти к другим — <b>уложить на бок</b> (устойчивое боковое положение).',
                    en: 'Tilt the head, lift the chin; watch the chest, listen and feel with your cheek for <b>10 seconds</b>. Breathing but you must leave to help others — put them <b>on their side</b> (recovery position).' } },
          { num: '3', color: 'teal', title: { ru: 'Реанимация', en: 'CPR' }, phrases: ['30 : 2'],
            body: { ru: 'Не дышит нормально — <b>30 нажатий</b> на центр груди (прямые руки, ~100 в минуту) и <b>2 вдоха</b>, без перерыва до приезда помощи.',
                    en: 'Not breathing normally — <b>30 compressions</b> on the centre of the chest (straight arms, ~100 per minute) and <b>2 breaths</b>, non-stop until help arrives.' } }
        ] },
        { type: 'table', heading: { ru: 'Травмы', en: 'Injuries' },
          head: [{ ru: 'Что', en: 'What' }, { ru: 'Делать', en: 'Do' }, { ru: 'Не делать', en: 'Don’t' }],
          rows: [
            [{ ru: 'Кровотечение', en: 'Bleeding' }, { ru: 'прижать рану тканью', en: 'press cloth on the wound' }, { ru: 'снимать мокрую повязку', en: 'remove a soaked pad' }],
            [{ ru: 'Предмет в ране', en: 'Object in wound' }, { ru: 'оставить как есть', en: 'leave it in place' }, { ru: 'вытаскивать', en: 'pull it out' }],
            [{ ru: 'Шок', en: 'Shock' }, { ru: 'лёжа, ноги выше головы', en: 'lying, legs raised' }, { ru: 'давать пить', en: 'give drinks' }],
            [{ ru: 'Ожог', en: 'Burn' }, { ru: 'холодная вода', en: 'cool water' }, { ru: 'снимать прилипшее', en: 'remove stuck clothes' }],
            [{ ru: 'Перелом', en: 'Fracture' }, { ru: 'обездвижить', en: 'immobilise it' }, { ru: 'вправлять', en: 'try to set it' }]
          ] },
        { type: 'text', color: 'teal', body: {
          ru: ['<b>Кровотечение:</b> сначала прямое давление на рану (конечность приподнять); не помогает — пережать артерию; <b>жгут</b> — только на руку или ногу, в крайнем случае, <b>выше раны</b>, записав время; снимает только врач. Кровь из уха, носа или рта не останавливают, ухо прикрывают марлей без давления.',
               '<b>Шея:</b> фиксируют одеждой или руками <b>по бокам</b>, никогда не подкладывают под шею. Переносить, только если на месте опасно, — втроём, «одним блоком» голова-шея-туловище.',
               'Везти раненого самому — только если место изолированное или помощь будет дольше <b>30 минут</b>, а человек без сознания или кровотечение не остановить.'],
          en: ['<b>Bleeding:</b> first direct pressure on the wound (limb raised); if that fails, press the artery; a <b>tourniquet</b> only on an arm or leg, as a last resort, <b>above the wound</b>, noting the time; only medical staff remove it. Don’t stop blood from the ear, nose or mouth; cover the ear with gauze without pressing.',
               '<b>Neck:</b> steady it with clothes or hands <b>at the sides</b>, never put anything under it. Move someone only if the place is dangerous — three people, “as one block”, head-neck-trunk aligned.',
               'Drive an injured person yourself only if the place is isolated or help will take over <b>30 minutes</b> and they are unconscious or the bleeding cannot be controlled.'] } }
      ] },
      { id: 'examples', label: { ru: 'Примеры', en: 'Examples' }, blocks: [
        { type: 'examples', items: [
          { color: 'coral', es: 'Enciende las <b>luces de emergencia</b>.', ru: 'Включи аварийку.', en: 'Turn on the hazard lights.' },
          { color: 'coral', es: 'Ponte el <b>chaleco</b> y sal por la derecha.', ru: 'Надень жилет и выходи справа.', en: 'Put on the vest and get out on the right.' },
          { color: 'amber', es: 'Llama al <b>112</b>, hay dos heridos.', ru: 'Звони 112, двое пострадавших.', en: 'Call 112, two people are injured.' },
          { color: 'amber', es: 'Ha habido un <b>accidente</b> en el kilómetro 34.', ru: 'На 34-м километре авария.', en: 'There has been an accident at kilometre 34.' },
          { color: 'teal', es: '¿Me oye? ¿<b>Respira</b>?', ru: 'Вы меня слышите? Он дышит?', en: 'Can you hear me? Is he breathing?' },
          { color: 'teal', es: '<b>No le quites el casco</b> al motorista.', ru: 'Не снимай шлем с мотоциклиста.', en: 'Don’t take the rider’s helmet off.' },
          { color: 'teal', es: 'No lo <b>muevas</b>, puede tener una lesión en el cuello.', ru: 'Не двигай его: может быть травма шеи.', en: 'Don’t move him, he may have a neck injury.' },
          { color: 'teal', es: 'Aprieta la herida con un <b>pañuelo</b> limpio.', ru: 'Прижми рану чистым платком.', en: 'Press the wound with a clean handkerchief.' },
          { color: 'teal', es: 'Pon la quemadura bajo <b>agua fría</b>.', ru: 'Подставь ожог под холодную воду.', en: 'Hold the burn under cold water.' },
          { color: 'purple', es: 'Rellenamos el <b>parte amistoso</b> en el área de servicio.', ru: 'Европротокол заполняем на площадке отдыха.', en: 'We fill in the accident form at the service area.' },
          { color: 'purple', es: 'Déme su nombre y los datos de su <b>seguro</b>.', ru: 'Дайте мне ваше имя и данные страховки.', en: 'Give me your name and insurance details.' },
          { color: 'blue', es: 'El <b>exceso de velocidad</b> causa muchos accidentes.', ru: 'Превышение скорости — причина многих аварий.', en: 'Speeding causes many accidents.' }
        ] },
        { type: 'markers', groups: [
          { color: 'coral', title: { ru: 'Proteger', en: 'Proteger' }, tags: ['chaleco', 'V-16', 'luces de emergencia', 'freno de mano', 'extintor'] },
          { color: 'amber', title: { ru: 'Avisar', en: 'Avisar' }, tags: ['112', 'poste SOS', 'eCall', 'heridos', 'fuego'] },
          { color: 'teal', title: { ru: 'Socorrer', en: 'Socorrer' }, tags: ['consciencia', 'respiración', 'hemorragia', 'quemadura', 'fractura', 'posición lateral de seguridad'] }
        ] }
      ] }
    ],
    quizCount: 20,
    quiz: [
      { es: '¿Cuál es el factor que interviene en la mayoría de los accidentes de tráfico?',
        prompt: { ru: 'Какой фактор присутствует в большинстве ДТП?', en: 'Which factor is involved in most road accidents?' },
        options: [
          { es: 'El factor humano.', ru: 'Человеческий фактор.', en: 'The human factor.' },
          { es: 'El estado del vehículo.', ru: 'Состояние машины.', en: 'The condition of the vehicle.' },
          { es: 'El estado de la vía.', ru: 'Состояние дороги.', en: 'The condition of the road.' }
        ], answer: 0,
        explain: { ru: 'Человеческий фактор (скорость, алкоголь, отвлечение) — в 70–90 % аварий; дорога — 10–35 %, машина — 4–13 % (учебник DGT, тема 16).',
                   en: 'The human factor (speed, alcohol, distraction) is present in 70–90 % of crashes; the road in 10–35 %, the vehicle in 4–13 % (DGT manual, topic 16).' } },
      { es: '¿Dónde se producen la mayoría de los accidentes mortales?',
        prompt: { ru: 'Где происходит большинство аварий со смертельным исходом?', en: 'Where do most fatal accidents happen?' },
        options: [
          { es: 'En calles de ciudad.', ru: 'На городских улицах.', en: 'On town streets.' },
          { es: 'En carreteras fuera de poblado.', ru: 'На дорогах за пределами населённых пунктов.', en: 'On roads outside built-up areas.' },
          { es: 'En aparcamientos.', ru: 'На парковках.', en: 'In car parks.' }
        ], answer: 1,
        explain: { ru: 'За городом выше скорости, поэтому аварии тяжелее. Из загородных дорог безопаснее всего autopista и autovía (учебник DGT, тема 16).',
                   en: 'Speeds are higher outside towns, so crashes are more severe. Of those roads, autopistas and autovías are the safest (DGT manual, topic 16).' } },
      { es: '¿Qué tipo de accidente es el más frecuente dentro de las ciudades?',
        prompt: { ru: 'Какая авария чаще всего случается в городе?', en: 'What is the most frequent type of accident in towns?' },
        options: [
          { es: 'La salida de la vía.', ru: 'Съезд с дороги.', en: 'Running off the road.' },
          { es: 'El choque frontal.', ru: 'Лобовое столкновение.', en: 'A head-on collision.' },
          { es: 'El atropello a peatones.', ru: 'Наезд на пешехода.', en: 'Hitting a pedestrian.' }
        ], answer: 2,
        explain: { ru: 'Учебник DGT, тема 16: в городе самый частый тип аварии — наезд на пешеходов.',
                   en: 'DGT manual, topic 16: in towns the most common accident is hitting pedestrians.' } },
      { es: 'Según las estadísticas, ¿dónde se producen más accidentes?',
        prompt: { ru: 'Где, по статистике, случается больше аварий?', en: 'According to statistics, where do more accidents happen?' },
        options: [
          { es: 'En las rectas.', ru: 'На прямых участках.', en: 'On straight stretches.' },
          { es: 'En las curvas.', ru: 'В поворотах.', en: 'In bends.' },
          { es: 'En los túneles.', ru: 'В тоннелях.', en: 'In tunnels.' }
        ], answer: 0,
        explain: { ru: 'Большинство аварий — на прямых: там водитель расслабляется, едет быстрее и отвлекается (учебник DGT, тема 16).',
                   en: 'Most crashes happen on straights, where drivers relax, speed up and get distracted (DGT manual, topic 16).' } },
      { es: '¿Cuál es la primera causa de muerte entre los jóvenes de 15 a 29 años en España?',
        prompt: { ru: 'Что является первой причиной смерти молодых людей 15–29 лет в Испании?', en: 'What is the leading cause of death among 15–29-year-olds in Spain?' },
        options: [
          { es: 'Las enfermedades cardíacas.', ru: 'Болезни сердца.', en: 'Heart disease.' },
          { es: 'Los accidentes de tráfico.', ru: 'Дорожные аварии.', en: 'Road accidents.' },
          { es: 'Los accidentes deportivos.', ru: 'Спортивные травмы.', en: 'Sports accidents.' }
        ], answer: 1,
        explain: { ru: 'Учебник DGT, тема 16: ДТП — первая причина смерти молодёжи 15–29 лет, особенно летом, на Рождество, в выходные и ночью.',
                   en: 'DGT manual, topic 16: crashes are the top cause of death for 15–29-year-olds, especially in summer, at Christmas, at weekends and at night.' } },
      { es: '¿Qué significan las siglas PAS?',
        prompt: { ru: 'Что означает аббревиатура PAS?', en: 'What does the acronym PAS stand for?' },
        options: [
          { es: 'Parar, Ayudar, Salir.', ru: 'Остановиться, помочь, уйти.', en: 'Stop, Help, Leave.' },
          { es: 'Prevenir, Atender, Sanar.', ru: 'Предупредить, обслужить, вылечить.', en: 'Prevent, Attend, Heal.' },
          { es: 'Proteger, Avisar, Socorrer.', ru: 'Защитить, сообщить, помочь.', en: 'Protect, Alert, Help.' }
        ], answer: 2,
        explain: { ru: 'PAS — Proteger, Avisar, Socorrer: порядок действий на месте аварии (учебник DGT, тема 16).',
                   en: 'PAS — Proteger, Avisar, Socorrer: the order of actions at a crash scene (DGT manual, topic 16).' } },
      { es: 'Llega el primero a un accidente. ¿Qué debe hacer primero?',
        prompt: { ru: 'Вы первым оказались на месте аварии. Что делать в первую очередь?', en: 'You are first at an accident. What do you do first?' },
        options: [
          { es: 'Proteger el lugar para evitar nuevos accidentes.', ru: 'Обезопасить место, чтобы не было новых аварий.', en: 'Protect the scene to prevent more crashes.' },
          { es: 'Sacar a los heridos de los vehículos.', ru: 'Вытащить пострадавших из машин.', en: 'Pull the injured out of the vehicles.' },
          { es: 'Hacer fotos para el seguro.', ru: 'Сфотографировать для страховой.', en: 'Take photos for the insurer.' }
        ], answer: 0,
        explain: { ru: 'Сначала P — защитить себя, пострадавших и место; иначе следующая машина может создать вторую аварию. Потом A и S.',
                   en: 'First P — protect yourself, the victims and the scene; otherwise the next car may cause a second crash. Then A and S.' } },
      { es: '¿Cuándo debe ponerse el chaleco reflectante tras un accidente en carretera?',
        prompt: { ru: 'Когда надевать светоотражающий жилет после аварии на трассе?', en: 'When should you put on the reflective vest after a crash on the road?' },
        options: [
          { es: 'Después de colocar la señalización.', ru: 'После того как обозначите место.', en: 'After setting up the warning.' },
          { es: 'Solo si es de noche.', ru: 'Только ночью.', en: 'Only at night.' },
          { es: 'Antes de salir del vehículo.', ru: 'До выхода из машины.', en: 'Before getting out of the car.' }
        ], answer: 2,
        explain: { ru: 'Жилет надевают ещё в салоне, до выхода на проезжую часть или обочину, днём и ночью (RGC, ст. 118.4).',
                   en: 'The vest goes on inside the car, before stepping onto the carriageway or shoulder, day or night (RGC art. 118.4).' } },
      { es: 'Su turismo queda inmovilizado en la calzada tras un accidente. ¿Cómo debe señalizarlo?',
        prompt: { ru: 'После аварии ваша машина стоит на проезжей части. Как её обозначить?', en: 'After a crash your car is stuck on the carriageway. How do you signal it?' },
        options: [
          { es: 'Con el dispositivo luminoso V-16 y las luces de emergencia.', ru: 'Маячком V-16 и аварийной сигнализацией.', en: 'With the V-16 beacon and hazard lights.' },
          { es: 'Con dos triángulos a 50 metros.', ru: 'Двумя треугольниками в 50 м.', en: 'With two triangles 50 m away.' },
          { es: 'Con el capó abierto.', ru: 'Открытым капотом.', en: 'With the bonnet open.' }
        ], answer: 0,
        explain: { ru: 'С 01.01.2026 легковой автомобиль обязан использовать подключённый маячок V-16; треугольники уже не заменяют его (RGC, ст. 130.4; Manual I, тема 18).',
                   en: 'Since 01.01.2026 cars must use the connected V-16 beacon; triangles no longer replace it (RGC art. 130.4; Manual I, topic 18).' } },
      { es: 'Si el vehículo averiado no puede moverse y hay un lugar seguro fuera de la vía, ¿por dónde deben salir los ocupantes?',
        prompt: { ru: 'Машина не может ехать, а за дорогой есть безопасное место. С какой стороны выходить пассажирам?', en: 'The car cannot move and there is a safe place off the road. Which side should the occupants get out?' },
        options: [
          { es: 'Por el lado más cercano al tráfico.', ru: 'Со стороны ближе к потоку.', en: 'On the side nearest the traffic.' },
          { es: 'Por el lado contrario al flujo de tráfico.', ru: 'Со стороны, противоположной потоку.', en: 'On the side away from the traffic.' },
          { es: 'No deben salir nunca.', ru: 'Выходить нельзя никогда.', en: 'They must never get out.' }
        ], answer: 1,
        explain: { ru: 'RGC, ст. 130.3: выходят со стороны, противоположной движению, и не остаются на полосах и обочине. Если выйти опасно — сидят пристёгнутыми.',
                   en: 'RGC art. 130.3: get out on the side away from traffic and don’t stay in the lanes or on the shoulder. If it is unsafe, stay inside with belts on.' } },
      { es: '¿A qué número de teléfono debe llamar para avisar de un accidente?',
        prompt: { ru: 'По какому номеру сообщают об аварии?', en: 'Which number do you call to report an accident?' },
        options: [
          { es: 'Al 091.', ru: '091.', en: '091.' },
          { es: 'Al 060.', ru: '060.', en: '060.' },
          { es: 'Al 112.', ru: '112.', en: '112.' }
        ], answer: 2,
        explain: { ru: '112 — единый номер экстренных служб в Испании и ЕС, работает бесплатно с любого телефона (учебник DGT, тема 16).',
                   en: '112 is the single emergency number in Spain and the EU, free from any phone (DGT manual, topic 16).' } },
      { es: 'No tiene teléfono móvil y está en una autovía. ¿Cómo puede avisar del accidente?',
        prompt: { ru: 'У вас нет телефона, вы на autovía. Как сообщить об аварии?', en: 'You have no mobile phone and you are on an autovía. How can you report the accident?' },
        options: [
          { es: 'Desde el poste SOS más cercano.', ru: 'С ближайшего поста SOS.', en: 'From the nearest SOS post.' },
          { es: 'Haciendo ráfagas a los demás coches.', ru: 'Моргая фарами другим машинам.', en: 'By flashing your lights at other cars.' },
          { es: 'Esperando a que pase la Guardia Civil.', ru: 'Ждать, пока проедет Гражданская гвардия.', en: 'By waiting for the Guardia Civil to pass.' }
        ], answer: 0,
        explain: { ru: 'На трассах стоят посты SOS — с них можно бесплатно вызвать помощь (учебник DGT, тема 16).',
                   en: 'Motorways have SOS posts for calling help free of charge (DGT manual, topic 16).' } },
      { es: 'Al llamar a emergencias, ¿qué información es más útil?',
        prompt: { ru: 'Что важнее всего сообщить экстренным службам?', en: 'When calling the emergency services, what information is most useful?' },
        options: [
          { es: 'La marca de los vehículos.', ru: 'Марки машин.', en: 'The makes of the cars.' },
          { es: 'El lugar exacto, cuántos heridos hay y si hay fuego.', ru: 'Точное место, сколько пострадавших и есть ли огонь.', en: 'The exact place, how many injured and whether there is fire.' },
          { es: 'Quién tiene la culpa.', ru: 'Кто виноват.', en: 'Who is to blame.' }
        ], answer: 1,
        explain: { ru: 'По месту, числу раненых и наличию огня или зажатых людей решают, сколько скорых и нужны ли пожарные (учебник DGT, тема 16).',
                   en: 'The place, number injured and any fire or trapped people decide how many ambulances and whether firefighters are sent (DGT manual, topic 16).' } },
      { es: '¿Qué hace el sistema eCall?',
        prompt: { ru: 'Что делает система eCall?', en: 'What does the eCall system do?' },
        options: [
          { es: 'Frena el vehículo ante un obstáculo.', ru: 'Тормозит машину перед препятствием.', en: 'Brakes the car in front of an obstacle.' },
          { es: 'Avisa al conductor de que se está durmiendo.', ru: 'Предупреждает водителя, что он засыпает.', en: 'Warns drivers that they are falling asleep.' },
          { es: 'Envía un aviso automático al 112 en caso de accidente.', ru: 'Автоматически отправляет вызов на 112 при аварии.', en: 'Sends an automatic alert to 112 in a crash.' }
        ], answer: 2,
        explain: { ru: 'eCall сам связывается с 112 и передаёт место аварии, даже если никто в машине не может позвонить (учебник DGT, тема 16).',
                   en: 'eCall contacts 112 by itself and sends the location, even if nobody in the car can call (DGT manual, topic 16).' } },
      { es: 'Como norma general, ¿se debe mover a un herido grave?',
        prompt: { ru: 'Нужно ли, как правило, перемещать тяжело раненого?', en: 'As a general rule, should you move a seriously injured person?' },
        options: [
          { es: 'Sí, siempre, para tumbarlo boca arriba.', ru: 'Да, всегда, чтобы уложить на спину.', en: 'Yes, always, to lay them on their back.' },
          { es: 'No, salvo que sea necesario para ponerlo a salvo.', ru: 'Нет, только если это нужно для его безопасности.', en: 'No, unless needed to get them to safety.' },
          { es: 'Sí, para llevarlo al hospital en su coche.', ru: 'Да, чтобы отвезти в больницу на своей машине.', en: 'Yes, to drive them to hospital yourself.' }
        ], answer: 1,
        explain: { ru: 'Перемещение может повредить позвоночник. Двигать — только если на месте опасно (огонь, поток машин), и тогда «одним блоком».',
                   en: 'Moving them can damage the spine. Move them only if the place is dangerous (fire, traffic), and then “as one block”.' } },
      { es: 'Un motorista herido está tendido en la calzada. ¿Qué no debe hacer?',
        prompt: { ru: 'Раненый мотоциклист лежит на дороге. Чего делать нельзя?', en: 'An injured motorcyclist is lying on the road. What must you not do?' },
        options: [
          { es: 'Hablarle para tranquilizarlo.', ru: 'Говорить с ним, чтобы успокоить.', en: 'Talk to calm them.' },
          { es: 'Taparlo con una manta.', ru: 'Укрыть одеялом.', en: 'Cover them with a blanket.' },
          { es: 'Quitarle el casco.', ru: 'Снимать с него шлем.', en: 'Take off their helmet.' }
        ], answer: 2,
        explain: { ru: 'Снимая шлем, можно повредить шейный отдел позвоночника. Шлем снимают только медики (учебник DGT, тема 16).',
                   en: 'Removing the helmet can injure the cervical spine. Only medical staff take it off (DGT manual, topic 16).' } },
      { es: 'Para proteger el cuello de un herido, ¿dónde se coloca la ropa enrollada?',
        prompt: { ru: 'Куда подкладывают свёрнутую одежду, чтобы зафиксировать шею пострадавшего?', en: 'To protect an injured person’s neck, where do you place rolled-up clothing?' },
        options: [
          { es: 'Debajo del cuello.', ru: 'Под шею.', en: 'Under the neck.' },
          { es: 'A los lados del cuello.', ru: 'По бокам шеи.', en: 'At the sides of the neck.' },
          { es: 'Debajo de la cabeza, como almohada.', ru: 'Под голову как подушку.', en: 'Under the head as a pillow.' }
        ], answer: 1,
        explain: { ru: 'Одежду, песок или руки кладут по бокам шеи, чтобы она не двигалась; под шею — никогда (учебник DGT, тема 16).',
                   en: 'Clothes, sand or your hands go at the sides of the neck to keep it still; never under it (DGT manual, topic 16).' } },
      { es: 'Un herido consciente le pide agua. ¿Qué debe hacer, como norma general?',
        prompt: { ru: 'Раненый в сознании просит воды. Как поступить, как правило?', en: 'A conscious injured person asks for water. What should you normally do?' },
        options: [
          { es: 'Darle agua en pequeños sorbos.', ru: 'Дать воды маленькими глотками.', en: 'Give water in small sips.' },
          { es: 'Darle un café para que no se duerma.', ru: 'Дать кофе, чтобы не уснул.', en: 'Give coffee to keep them awake.' },
          { es: 'No darle comida, bebida ni medicamentos.', ru: 'Не давать еды, питья и лекарств.', en: 'Give no food, drink or medicine.' }
        ], answer: 2,
        explain: { ru: 'Пострадавшему может понадобиться операция под наркозом; питьё и лекарства могут навредить. Исключение — обожжённый без других травм, в сознании и без рвоты (учебник DGT, тема 16).',
                   en: 'The person may need surgery under anaesthetic; drink and medicine can harm. Exception: a burns victim with no other injuries, conscious and not vomiting (DGT manual, topic 16).' } },
      { es: '¿Qué constantes vitales se comprueban primero en un herido, y en qué orden?',
        prompt: { ru: 'Какие жизненные показатели проверяют у пострадавшего сначала и в каком порядке?', en: 'Which vital signs do you check first, and in what order?' },
        options: [
          { es: 'Primero la consciencia y después la respiración.', ru: 'Сначала сознание, потом дыхание.', en: 'Consciousness first, then breathing.' },
          { es: 'Primero la temperatura y después el pulso.', ru: 'Сначала температура, потом пульс.', en: 'Temperature first, then pulse.' },
          { es: 'Primero las fracturas y después la consciencia.', ru: 'Сначала переломы, потом сознание.', en: 'Fractures first, then consciousness.' }
        ], answer: 0,
        explain: { ru: 'Учебник DGT, тема 16: всегда один порядок — сознание, затем дыхание. Остальные травмы осматривают после.',
                   en: 'DGT manual, topic 16: always the same order — consciousness, then breathing. Other injuries are checked afterwards.' } },
      { es: '¿Durante cuánto tiempo se comprueba si un herido inconsciente respira con normalidad?',
        prompt: { ru: 'Сколько времени проверяют, нормально ли дышит человек без сознания?', en: 'For how long do you check whether an unconscious person is breathing normally?' },
        options: [
          { es: 'Unos 2 segundos.', ru: 'Около 2 секунд.', en: 'About 2 seconds.' },
          { es: '10 segundos.', ru: '10 секунд.', en: '10 seconds.' },
          { es: '1 minuto.', ru: '1 минуту.', en: '1 minute.' }
        ], answer: 1,
        explain: { ru: 'Смотрят на грудь, слушают и чувствуют дыхание щекой в течение 10 секунд (учебник DGT, тема 16).',
                   en: 'Watch the chest, listen and feel the breath on your cheek for 10 seconds (DGT manual, topic 16).' } },
      { es: 'Un herido adulto no respira. ¿Cómo se hace la reanimación cardiopulmonar?',
        prompt: { ru: 'Взрослый пострадавший не дышит. Как проводить сердечно-лёгочную реанимацию?', en: 'An injured adult is not breathing. How is CPR done?' },
        options: [
          { es: '15 compresiones y 1 ventilación.', ru: '15 нажатий и 1 вдох.', en: '15 compressions and 1 breath.' },
          { es: '5 ventilaciones y 10 compresiones.', ru: '5 вдохов и 10 нажатий.', en: '5 breaths and 10 compressions.' },
          { es: '30 compresiones en el tórax y 2 ventilaciones.', ru: '30 нажатий на грудь и 2 вдоха.', en: '30 chest compressions and 2 breaths.' }
        ], answer: 2,
        explain: { ru: 'Ритм 30:2, около 100 нажатий в минуту, прямыми руками на центр груди — до прибытия помощи (учебник DGT, тема 16).',
                   en: 'A 30:2 rhythm, about 100 compressions a minute, straight arms on the centre of the chest — until help arrives (DGT manual, topic 16).' } },
      { es: 'Un herido inconsciente respira y usted tiene que atender a otras víctimas. ¿Cómo lo deja?',
        prompt: { ru: 'Пострадавший без сознания, но дышит, а вам нужно помогать другим. Как его оставить?', en: 'An unconscious casualty is breathing and you must help others. How do you leave them?' },
        options: [
          { es: 'Sentado y apoyado en el vehículo.', ru: 'Сидя, прислонив к машине.', en: 'Sitting, leaning on the car.' },
          { es: 'De lado, en posición lateral de seguridad.', ru: 'На боку, в устойчивом боковом положении.', en: 'On their side, in the recovery position.' },
          { es: 'Boca abajo.', ru: 'Лицом вниз.', en: 'Face down.' }
        ], answer: 1,
        explain: { ru: 'На боку дыхательные пути остаются открытыми, а рвота не попадёт в лёгкие (учебник DGT, тема 16).',
                   en: 'On the side the airway stays open and vomit cannot enter the lungs (DGT manual, topic 16).' } },
      { es: '¿Cuál es el primer método para controlar una hemorragia externa?',
        prompt: { ru: 'Каков первый способ остановить наружное кровотечение?', en: 'What is the first method to control external bleeding?' },
        options: [
          { es: 'La compresión directa sobre la herida.', ru: 'Прямое давление на рану.', en: 'Direct pressure on the wound.' },
          { es: 'El torniquete.', ru: 'Жгут.', en: 'A tourniquet.' },
          { es: 'Lavar la herida con alcohol.', ru: 'Промыть рану спиртом.', en: 'Washing the wound with alcohol.' }
        ], answer: 0,
        explain: { ru: 'Сначала давят на рану чистой тканью, конечность приподнимают; потом — пережатие артерии; жгут — последнее средство (учебник DGT, тема 16).',
                   en: 'First press a clean cloth on the wound and raise the limb; then press the artery; a tourniquet is the last resort (DGT manual, topic 16).' } },
      { es: 'El pañuelo con el que comprime una herida se empapa de sangre. ¿Qué hace?',
        prompt: { ru: 'Платок, которым вы прижимаете рану, пропитался кровью. Что делать?', en: 'The cloth you are pressing on a wound is soaked with blood. What do you do?' },
        options: [
          { es: 'Quitarlo y poner uno limpio.', ru: 'Снять и положить чистый.', en: 'Remove it and use a clean one.' },
          { es: 'Dejar de presionar.', ru: 'Перестать давить.', en: 'Stop pressing.' },
          { es: 'No quitarlo y seguir presionando.', ru: 'Не снимать и продолжать давить.', en: 'Leave it on and keep pressing.' }
        ], answer: 2,
        explain: { ru: 'Пропитанную повязку не снимают: так срывается сгусток. Сверху кладут новую ткань и продолжают давить (учебник DGT, тема 16).',
                   en: 'Don’t remove a soaked pad — that tears the clot. Put more cloth on top and keep pressing (DGT manual, topic 16).' } },
      { es: 'Si tiene que hacer un torniquete, ¿dónde lo coloca?',
        prompt: { ru: 'Если пришлось накладывать жгут, где его накладывают?', en: 'If you must apply a tourniquet, where does it go?' },
        options: [
          { es: 'Por encima de la herida, anotando la hora.', ru: 'Выше раны, записав время.', en: 'Above the wound, noting the time.' },
          { es: 'Por debajo de la herida.', ru: 'Ниже раны.', en: 'Below the wound.' },
          { es: 'Sobre la misma herida, con un cordón fino.', ru: 'Прямо на рану, тонким шнурком.', en: 'On the wound itself, with a thin cord.' }
        ], answer: 0,
        explain: { ru: 'Жгут — только на руку или ногу, выше раны, из сложенного платка (не тонкого шнура), время записать; снимает только врач (учебник DGT, тема 16).',
                   en: 'A tourniquet only on an arm or leg, above the wound, made from a folded cloth (not a thin cord), time noted; only a doctor removes it (DGT manual, topic 16).' } },
      { es: 'Un herido tiene un objeto clavado en el cuerpo. ¿Qué debe hacer?',
        prompt: { ru: 'В теле пострадавшего застрял предмет. Что делать?', en: 'An injured person has an object stuck in their body. What should you do?' },
        options: [
          { es: 'Sacarlo con cuidado.', ru: 'Осторожно вытащить.', en: 'Pull it out carefully.' },
          { es: 'No sacarlo.', ru: 'Не вынимать его.', en: 'Leave it in.' },
          { es: 'Girarlo para ver la herida.', ru: 'Повернуть, чтобы осмотреть рану.', en: 'Twist it to see the wound.' }
        ], answer: 1,
        explain: { ru: 'Предмет закрывает рану изнутри; если вытащить, кровотечение усилится (учебник DGT, тема 16).',
                   en: 'The object plugs the wound from inside; pulling it out increases the bleeding (DGT manual, topic 16).' } },
      { es: 'Un herido tiene la piel pálida, sudor frío y pulso rápido y débil. ¿Cómo debe colocarlo?',
        prompt: { ru: 'У пострадавшего бледная кожа, холодный пот, частый слабый пульс. Как его уложить?', en: 'A casualty has pale skin, cold sweat and a fast, weak pulse. How should you position them?' },
        options: [
          { es: 'Sentado, con la cabeza entre las piernas.', ru: 'Сидя, голова между коленями.', en: 'Sitting, head between the knees.' },
          { es: 'Tumbado con la cabeza más alta que los pies.', ru: 'Лёжа, голова выше ног.', en: 'Lying with the head higher than the feet.' },
          { es: 'Tumbado con los pies más altos que la cabeza.', ru: 'Лёжа, ноги выше головы.', en: 'Lying with the feet higher than the head.' }
        ], answer: 2,
        explain: { ru: 'Это признаки шока (возможно, внутреннее кровотечение). Ноги поднимают, чтобы кровь шла к голове; при рвоте — на бок, ноги всё равно выше (учебник DGT, тема 16).',
                   en: 'These are signs of shock (possibly internal bleeding). Raise the legs so blood goes to the head; if vomiting, turn them on their side, legs still raised (DGT manual, topic 16).' } },
      { es: '¿Qué se debe hacer con una quemadura?',
        prompt: { ru: 'Что нужно делать при ожоге?', en: 'What should you do with a burn?' },
        options: [
          { es: 'Echar agua fría y no quitar la ropa pegada.', ru: 'Охлаждать холодной водой и не снимать прилипшую одежду.', en: 'Cool with cold water and leave stuck clothing on.' },
          { es: 'Pinchar las ampollas.', ru: 'Проколоть волдыри.', en: 'Pop the blisters.' },
          { es: 'Echar pomada o aceite.', ru: 'Намазать мазью или маслом.', en: 'Apply ointment or oil.' }
        ], answer: 0,
        explain: { ru: 'Ожог охлаждают холодной водой, волдыри не трогают, прилипшую одежду не снимают, накладывают влажную чистую повязку (учебник DGT, тема 16).',
                   en: 'Cool the burn with cold water, leave blisters alone, don’t remove stuck clothing, cover with a clean damp dressing (DGT manual, topic 16).' } },
      { es: 'Un vehículo accidentado empieza a arder. ¿Qué no debe usar para apagar el fuego?',
        prompt: { ru: 'Попавшая в аварию машина загорелась. Чем нельзя тушить огонь?', en: 'A crashed car catches fire. What must you not use to put it out?' },
        options: [
          { es: 'Un extintor.', ru: 'Огнетушителем.', en: 'An extinguisher.' },
          { es: 'Agua.', ru: 'Водой.', en: 'Water.' },
          { es: 'Tierra o arena.', ru: 'Землёй или песком.', en: 'Earth or sand.' }
        ], answer: 1,
        explain: { ru: 'Горящее топливо водой не тушат — оно растекается. Подходят огнетушитель, земля, песок или одеяло (учебник DGT, тема 16).',
                   en: 'Burning fuel is not put out with water — it spreads. Use an extinguisher, earth, sand or a blanket (DGT manual, topic 16).' } },
      { es: '¿Qué delito comete quien no ayuda a la víctima de un accidente pudiendo hacerlo sin riesgo?',
        prompt: { ru: 'Какое преступление совершает тот, кто не помог пострадавшему, хотя мог сделать это без риска?', en: 'What crime is committed by someone who fails to help an accident victim when they could do so safely?' },
        options: [
          { es: 'Ninguno, es solo una falta moral.', ru: 'Никакое, это лишь моральный проступок.', en: 'None, it is only a moral failing.' },
          { es: 'Conducción temeraria.', ru: 'Опасное вождение.', en: 'Reckless driving.' },
          { es: 'Omisión del deber de socorro.', ru: 'Неоказание помощи (omisión de socorro).', en: 'Failure to assist (omisión de socorro).' }
        ], answer: 2,
        explain: { ru: 'Это преступление по Уголовному кодексу (ст. 195): штраф, а если пострадавший — жертва аварии, которую вызвал ты сам, — тюрьма. То же, если помочь не можешь и не вызвал помощь. Уехать с места аварии с погибшими или ранеными — отдельное преступление (ст. 382 bis).',
                   en: 'It is a crime under the Penal Code (art. 195): a fine, or prison if the victim was hurt in a crash you caused. The same applies if you cannot help and fail to call for help. Leaving the scene of a crash with dead or injured victims is a separate crime (art. 382 bis).' } },
      { es: 'Ha tenido un accidente con solo daños materiales y el otro conductor le pide sus datos. ¿Está obligado a dárselos?',
        prompt: { ru: 'Авария без пострадавших, только повреждения. Другой водитель просит ваши данные. Обязаны ли вы их дать?', en: 'A crash with only material damage; the other driver asks for your details. Must you give them?' },
        options: [
          { es: 'Sí, su identidad y los datos del vehículo.', ru: 'Да: своё имя и данные машины.', en: 'Yes, your identity and the vehicle details.' },
          { es: 'No, solo a la policía.', ru: 'Нет, только полиции.', en: 'No, only to the police.' },
          { es: 'Solo si usted tiene la culpa.', ru: 'Только если виноваты вы.', en: 'Only if you are at fault.' }
        ], answer: 0,
        explain: { ru: 'RGC, ст. 129.2.f–g: участник аварии сообщает свою личность и данные машины другим участникам по их просьбе — независимо от вины.',
                   en: 'RGC art. 129.2.f–g: anyone involved gives their identity and vehicle details to others involved if asked — regardless of fault.' } },
      { es: '¿Dónde se debe rellenar el parte amistoso de accidente?',
        prompt: { ru: 'Где нужно заполнять европротокол (parte amistoso)?', en: 'Where should the accident report form (parte amistoso) be filled in?' },
        options: [
          { es: 'En la calzada, junto a los vehículos.', ru: 'На проезжей части, у машин.', en: 'On the carriageway, next to the cars.' },
          { es: 'En el arcén, para no molestar.', ru: 'На обочине, чтобы не мешать.', en: 'On the shoulder, out of the way.' },
          { es: 'En un lugar seguro fuera de la vía.', ru: 'В безопасном месте вне дороги.', en: 'In a safe place off the road.' }
        ], answer: 2,
        explain: { ru: 'RGC, ст. 130.5: заполнять протокол на проезжей части запрещено — только в безопасном месте вне дороги. Обочина тоже часть дороги.',
                   en: 'RGC art. 130.5: filling in the form on the road is forbidden — only somewhere safe off the road. The shoulder is still part of the road.' } },
      { es: 'Pasa junto a un accidente en el que ya están actuando los agentes y las ambulancias. ¿Qué debe hacer?',
        prompt: { ru: 'Вы проезжаете аварию, на месте уже работают полиция и скорые. Что делать?', en: 'You pass an accident where police and ambulances are already at work. What should you do?' },
        options: [
          { es: 'Detenerse a mirar por si pueden necesitarle.', ru: 'Остановиться посмотреть — вдруг пригодитесь.', en: 'Stop and watch in case you are needed.' },
          { es: 'Seguir circulando con precaución, sin estorbar.', ru: 'Ехать дальше осторожно, не мешая.', en: 'Drive on carefully without getting in the way.' },
          { es: 'Parar en el arcén y hacer fotos.', ru: 'Встать на обочине и фотографировать.', en: 'Stop on the shoulder and take photos.' }
        ], answer: 1,
        explain: { ru: 'RGC, ст. 129.3: свидетель обязан помогать, если служб ещё нет. Когда они на месте, нужно проехать, не создавая пробку и новых аварий.',
                   en: 'RGC art. 129.3: a witness must help if the services are not there yet. Once they are, drive on without causing jams or new crashes.' } },
      { es: '¿Cuándo está justificado trasladar a un herido en su propio vehículo?',
        prompt: { ru: 'Когда оправдано везти раненого на своей машине?', en: 'When is it justified to take an injured person in your own car?' },
        options: [
          { es: 'Siempre que el hospital esté cerca.', ru: 'Всегда, если больница рядом.', en: 'Whenever the hospital is close.' },
          { es: 'Cuando el herido lo pida.', ru: 'Когда раненый просит.', en: 'When the injured person asks.' },
          { es: 'Si la ayuda va a tardar más de 30 minutos y la hemorragia no se puede controlar.', ru: 'Если помощь приедет позже чем через 30 минут, а кровотечение не остановить.', en: 'If help will take over 30 minutes and the bleeding cannot be controlled.' }
        ], answer: 2,
        explain: { ru: 'Учебник DGT, тема 16: везти самому — только если место изолированное или помощь дольше 30 минут, а пострадавший без сознания или кровотечение не остановить. Лучше в фургоне, лёжа, медленно.',
                   en: 'DGT manual, topic 16: transport only if the place is isolated or help takes over 30 minutes and the person is unconscious or bleeding uncontrollably. Preferably in a van, lying down, slowly.' } }
    ]
  }
]);
