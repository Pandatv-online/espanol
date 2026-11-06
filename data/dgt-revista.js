// DGT · tests from the DGT magazine «Tráfico y Seguridad Vial» (revista.dgt.es/es/test/), issues 262–279.
// Fuente: revista Tráfico y Seguridad Vial, DGT — revista.dgt.es. The magazine allows its TEXTS to be reproduced
// with the source cited (aviso legal); its drawings and photos are NOT reproduced here. Translations and
// explanations are ours; sign pictures come from the official catalogue (img/signs/).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-revista', level: 'DGT',
    title: { ru: 'Тесты журнала DGT', en: 'DGT magazine tests' },
    summary: { ru: '252 вопросов из тестов журнала «Tráfico y Seguridad Vial» (2022–2026), с переводом и пояснениями.', en: '252 questions from the «Tráfico y Seguridad Vial» magazine tests (2022–2026), translated and explained.' },
    hero: { es: 'Tests de la revista Tráfico y Seguridad Vial', sub: { ru: 'Настоящие вопросы журнала DGT · 30 случайных за раз', en: 'Real questions from the DGT magazine · 30 at random each time' } },
  tabs: [
    {
      id: 'about', label: { ru: 'О тестах', en: 'About' },
      blocks: [
        { type: 'text', body: {
          ru: ['Журнал DGT <b>«Tráfico y Seguridad Vial»</b> регулярно публикует короткие тесты в формате теоретического экзамена: вопрос, три варианта, один верный. Здесь собраны вопросы из номеров 262–279 (июнь 2022 — октябрь 2026) — те, что понятны без картинки журнала; если вопросу нужен дорожный знак, показан знак из официального каталога.'],
          en: ['The DGT magazine <b>«Tráfico y Seguridad Vial»</b> regularly publishes short tests in the theory-exam format: a question, three options, one right answer. This topic collects the questions from issues 262–279 (June 2022 — October 2026) that make sense without the magazine’s picture; where a question is about a road sign, the sign from the official catalogue is shown.'] } },
        { type: 'rules', heading: { ru: 'Источник', en: 'Source' }, items: [
          { color: 'blue', title: { ru: 'Тексты журнала', en: 'Magazine texts' }, es: 'Fuente: revista Tráfico y Seguridad Vial, DGT — revista.dgt.es',
            body: { ru: 'Вопросы и варианты — оригинальный испанский текст журнала; перевод и пояснения — наши. Номер теста указан в конце каждого пояснения. Журнал разрешает воспроизводить свои тексты с указанием источника.',
                    en: 'Questions and options are the magazine’s original Spanish text; translations and explanations are ours. The test number is given at the end of each explanation. The magazine allows its texts to be reproduced if the source is cited.' } },
          { color: 'coral', title: { ru: 'Картинки', en: 'Pictures' }, es: 'Dibujos y fotografías: no se reproducen',
            body: { ru: 'Рисунки и фотографии журнала без письменного разрешения публиковать нельзя, поэтому их здесь нет. Вопросы, которым фото действительно нужно, вынесены в локальный файл владельца сайта.',
                    en: 'The magazine’s drawings and photos may not be republished without written permission, so they are not here. Questions that really need the photo are kept in the site owner’s local file.' } }
        ] }
      ]
    },
    {
      id: 'como', label: { ru: 'Как учить', en: 'How to use' },
      blocks: [
        { type: 'text', body: {
          ru: ['Во вкладке «Тест» каждый раз 30 случайных вопросов. Сначала прочитайте вопрос по-испански — так он звучит на экзамене, — и только потом смотрите перевод. После ответа прочитайте пояснение: там правило и ссылка на статью.'],
          en: ['The Test tab gives 30 random questions each time. Read the question in Spanish first — that is how it sounds in the exam — and only then look at the translation. After answering, read the explanation: it gives the rule and the article.'] } },
        { type: 'tip', title: { ru: 'Слова-ловушки', en: 'Trap words' },
          body: { ru: '<b>siempre</b>, <b>nunca</b>, <b>en ningún caso</b>, <b>solo</b>, <b>únicamente</b> — в неверных вариантах встречаются гораздо чаще, чем в верных.',
                  en: '<b>siempre</b>, <b>nunca</b>, <b>en ningún caso</b>, <b>solo</b>, <b>únicamente</b> appear far more often in wrong options than in right ones.' } }
      ]
    }
  ],
    quizCount: 30,
    quiz: [
    { es: "El conductor de un turismo se ve obligado a realizar el traslado de un enfermo en servicio de urgencia; ¿qué luces debe llevar encendidas?",
      prompt: { ru: "Водителю легкового автомобиля приходится срочно везти больного. Какие огни он должен включить?", en: "A car driver has to take a sick person somewhere urgently. Which lights must be on?" },
      options: [
        { es: "Las de emergencia.", ru: "Аварийную сигнализацию.", en: "The hazard warning lights." },
        { es: "Las largas.", ru: "Дальний свет.", en: "Main beam." },
        { es: "Las de posición.", ru: "Габаритные огни.", en: "Side (position) lights." }
      ],
      answer: 0,
      explain: { ru: "Обычная машина, выполняющая срочную перевозку больного, не становится приоритетным транспортом: она должна соблюдать правила и обозначать ситуацию аварийной сигнализацией (RGC, ст. 69). Fuente: Tráfico y Seguridad Vial, test nº 262.", en: "An ordinary car carrying a sick person urgently is not a priority vehicle: it must keep to the rules and signal the situation with the hazard lights (RGC art. 69). Source: Tráfico y Seguridad Vial magazine, test no. 262." } },
    { es: "En este cruce, ¿qué se debe hacer?",
      prompt: { ru: "Что нужно делать на этом перекрёстке?", en: "What must you do at this junction?" },
      options: [
        { es: "Detenerse solo si se aproximan vehículos por la derecha.", ru: "Остановиться, только если справа приближаются машины.", en: "Stop only if vehicles are approaching from the right." },
        { es: "Detenerse y ceder el paso a todos los vehículos que se aproximen por ambos lados.", ru: "Остановиться и уступить дорогу всем машинам, которые приближаются с обеих сторон.", en: "Stop and give way to all vehicles approaching from either side." },
        { es: "Detenerse solo si se aproximan vehículos por la izquierda.", ru: "Остановиться, только если слева приближаются машины.", en: "Stop only if vehicles are approaching from the left." }
      ],
      answer: 1,
      explain: { ru: "Знак STOP обязывает полностью остановиться у линии и уступить дорогу всем, кто едет по пересекаемой дороге, слева и справа. Fuente: Tráfico y Seguridad Vial, test nº 262.", en: "The STOP sign obliges you to stop completely at the line and give way to everyone on the road you are crossing, from the left and from the right. Source: Tráfico y Seguridad Vial magazine, test no. 262." },
      sign: "R-2" },
    { es: "El carril izquierdo está abierto en sentido contrario al habitual; ¿a qué velocidad máxima pueden circular los vehículos que circulan por el carril derecho?",
      prompt: { ru: "Левая полоса открыта для движения во встречном (непривычном) направлении. С какой максимальной скоростью могут ехать машины по правой полосе?", en: "The left lane has been opened in the opposite direction to the usual one. What is the maximum speed for vehicles in the right lane?" },
      options: [
        { es: "A la velocidad máxima de la vía, 120 km/h.", ru: "С максимальной скоростью дороги, 120 км/ч.", en: "At the road's maximum speed, 120 km/h." },
        { es: "A 60 km/h.", ru: "60 км/ч.", en: "60 km/h." },
        { es: "A 80 km/h.", ru: "80 км/ч.", en: "80 km/h." }
      ],
      answer: 2,
      explain: { ru: "Когда соседнюю полосу открывают для встречного движения, ограничение 80 км/ч действует для машин на смежных полосах обоих направлений. Fuente: Tráfico y Seguridad Vial, test nº 262.", en: "When the next lane is opened to opposite traffic, an 80 km/h limit applies to vehicles in the adjoining lanes of both directions. Source: Tráfico y Seguridad Vial magazine, test no. 262." } },
    { es: "¿Está permitido circular por una autovía por debajo del límite mínimo de velocidad establecido para dicha vía sin causa justificada",
      prompt: { ru: "Разрешено ли ехать по автомагистрали (autovía) медленнее установленной минимальной скорости без уважительной причины?", en: "Is it allowed to drive on an autovía below its minimum speed without a good reason?" },
      options: [
        { es: "No, porque es una velocidad anormalmente reducida.", ru: "Нет, потому что это аномально низкая скорость.", en: "No, because that is an abnormally low speed." },
        { es: "Sí, aunque es obligatorio circular por el arcén.", ru: "Да, но тогда нужно ехать по обочине.", en: "Yes, but then you must drive on the hard shoulder." },
        { es: "Solo si no se entorpece la marcha normal de otros vehículos.", ru: "Только если вы не мешаете нормальному движению других машин.", en: "Only if you do not hinder the normal flow of other vehicles." }
      ],
      answer: 0,
      explain: { ru: "Езда ниже минимальной скорости без причины считается аномально низкой скоростью и запрещена (RGC, ст. 49). Fuente: Tráfico y Seguridad Vial, test nº 262.", en: "Driving below the minimum speed without a reason counts as abnormally low speed and is forbidden (RGC art. 49). Source: Tráfico y Seguridad Vial magazine, test no. 262." } },
    { es: "Una cuadrícula de marcas amarillas pintada en el suelo indica...",
      prompt: { ru: "Жёлтая сетка (клетка), нарисованная на дороге, означает…", en: "A grid of yellow markings painted on the road means…" },
      options: [
        { es: "que no se puede franquear la intersección.", ru: "что перекрёсток проезжать нельзя.", en: "that you may not cross the junction." },
        { es: "que no se debe entrar en la intersección si se puede quedar detenido en ella, obstaculizando la circulación.", ru: "что нельзя въезжать на перекрёсток, если вы можете на нём остановиться и помешать движению.", en: "that you must not enter the junction if you might stop on it and block traffic." },
        { es: "que el estacionamiento está prohibido.", ru: "что стоянка запрещена.", en: "that parking is forbidden." }
      ],
      answer: 1,
      explain: { ru: "Жёлтая сетка отмечает зону перекрёстка, на которую нельзя въезжать, если впереди затор и вы рискуете там остановиться. Fuente: Tráfico y Seguridad Vial, test nº 262.", en: "The yellow grid marks a junction area you must not enter if traffic ahead is stuck and you might stop there. Source: Tráfico y Seguridad Vial magazine, test no. 262." } },
    { es: "El conductor de un vehículo extiende el brazo horizontalmente con la palma de la mano hacia atrás, ¿qué indica?",
      prompt: { ru: "Водитель вытягивает руку горизонтально ладонью назад. Что это означает?", en: "A driver holds an arm out horizontally with the palm facing backwards. What does it mean?" },
      options: [
        { es: "Que va a girar a la izquierda.", ru: "Что он повернёт налево.", en: "That he is going to turn left." },
        { es: "Que va a circular marcha atrás.", ru: "Что он поедет задним ходом.", en: "That he is going to reverse." },
        { es: "Que tiene intención de inmovilizar el vehículo o de frenar su marcha de modo considerable.", ru: "Что он собирается остановиться или значительно снизить скорость.", en: "That he intends to stop or slow down considerably." }
      ],
      answer: 1,
      explain: { ru: "Рука, вытянутая горизонтально ладонью назад, — сигнал движения задним ходом; торможение показывают движением руки вверх-вниз. Fuente: Tráfico y Seguridad Vial, test nº 262.", en: "An arm held out horizontally with the palm backwards signals reversing; slowing down is shown by moving the arm up and down. Source: Tráfico y Seguridad Vial magazine, test no. 262." } },
    { es: "Entre los gastos sanitarios derivados de los accidentes de tráfico con víctimas se encuentran...",
      prompt: { ru: "К медицинским расходам, связанным с ДТП с пострадавшими, относятся…", en: "Among the healthcare costs of road accidents with casualties are…" },
      options: [
        { es: "los derivados por la pérdida de producción de personas empleadas.", ru: "потери из-за того, что работающие люди не могут производить.", en: "losses because employed people stop producing." },
        { es: "los daños causados al medio ambiente.", ru: "ущерб окружающей среде.", en: "damage to the environment." },
        { es: "los de rehabilitación en centros de salud.", ru: "расходы на реабилитацию в медицинских центрах.", en: "the cost of rehabilitation in health centres." }
      ],
      answer: 2,
      explain: { ru: "Медицинские расходы — это лечение и реабилитация пострадавших; потеря производства и ущерб среде — другие виды издержек. Fuente: Tráfico y Seguridad Vial, test nº 262.", en: "Healthcare costs are treatment and rehabilitation of the injured; lost production and environmental damage are other kinds of cost. Source: Tráfico y Seguridad Vial magazine, test no. 262." } },
    { es: "En general, un conductor con estrés...",
      prompt: { ru: "Как правило, водитель в состоянии стресса…", en: "In general, a driver under stress…" },
      options: [
        { es: "se distrae con mayor facilidad.", ru: "легче отвлекается.", en: "is more easily distracted." },
        { es: "toma decisiones más rápidas y comete menos errores.", ru: "принимает решения быстрее и ошибается реже.", en: "makes faster decisions and fewer mistakes." },
        { es: "presta mayor atención al entorno y tarda más en tomar decisiones.", ru: "внимательнее к обстановке и дольше принимает решения.", en: "pays more attention to the surroundings and takes longer to decide." }
      ],
      answer: 0,
      explain: { ru: "Стресс снижает внимание: водитель легче отвлекается и чаще ошибается. Fuente: Tráfico y Seguridad Vial, test nº 262.", en: "Stress lowers attention: the driver is more easily distracted and makes more mistakes. Source: Tráfico y Seguridad Vial magazine, test no. 262." } },
    { es: "En caso de contradicción entre señales del mismo tipo, ¿cuál prevalecerá?",
      prompt: { ru: "Если знаки одного типа противоречат друг другу, какой из них действует?", en: "If signs of the same type contradict each other, which one prevails?" },
      options: [
        { es: "La menos restrictiva.", ru: "Менее строгий.", en: "The less restrictive one." },
        { es: "La más restrictiva.", ru: "Более строгий.", en: "The more restrictive one." },
        { es: "Ninguna de las señales.", ru: "Ни один из знаков.", en: "Neither of them." }
      ],
      answer: 1,
      explain: { ru: "При противоречии между знаками одного типа действует более строгий (RGC, ст. 133). Fuente: Tráfico y Seguridad Vial, test nº 262.", en: "When signs of the same type contradict each other, the more restrictive one prevails (RGC art. 133). Source: Tráfico y Seguridad Vial magazine, test no. 262." } },
    { es: "Una persona provista de un certificado médico que le exima de utilizar los sistemas de retención del vehículo, ¿está obligada a llevar abrochado el cinturón de seguridad?",
      prompt: { ru: "Должен ли пристёгиваться ремнём человек с медицинской справкой, освобождающей его от использования удерживающих систем?", en: "Must a person with a medical certificate exempting them from restraint systems wear a seat belt?" },
      options: [
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Únicamente fuera de poblado.", ru: "Только вне населённого пункта.", en: "Only outside built-up areas." }
      ],
      answer: 1,
      explain: { ru: "Медицинская справка об освобождении — одно из исключений из обязанности пристёгиваться (RGC, ст. 119). Fuente: Tráfico y Seguridad Vial, test nº 262.", en: "A medical exemption certificate is one of the exceptions to the seat-belt obligation (RGC art. 119). Source: Tráfico y Seguridad Vial magazine, test no. 262." } },
    { es: "Debido a una retención de circulación tiene que reducir, de modo considerable, la velocidad de su vehículo. ¿Debe advertir, siempre que sea posible, a los vehículos que circulan detrás?",
      prompt: { ru: "Из-за затора вам приходится сильно снизить скорость. Нужно ли по возможности предупредить машины, которые едут сзади?", en: "Because of a hold-up you have to slow down a lot. Should you, whenever possible, warn the vehicles behind you?" },
      options: [
        { es: "Sí, con el empleo de la luz de emergencia.", ru: "Да, аварийной сигнализацией.", en: "Yes, with the hazard lights." },
        { es: "Sí, con el empleo reiterado de las luces de frenado o moviendo el brazo alternativamente de arriba a abajo.", ru: "Да, многократным нажатием на тормоз (стоп-сигналы) или движением руки вверх-вниз.", en: "Yes, by repeatedly flashing the brake lights or by moving your arm up and down." },
        { es: "No, está prohibido hacer advertencias, ya que pueden crear confusión.", ru: "Нет, предупреждать запрещено, это может запутать других.", en: "No, warnings are forbidden as they may confuse others." }
      ],
      answer: 1,
      explain: { ru: "На въездах и выездах из городов часто бывают заторы, и при резком торможении есть риск удара сзади. Поэтому по возможности предупреждают тех, кто сзади: многократно включая стоп-сигналы или короткими движениями руки вверх-вниз. Fuente: Tráfico y Seguridad Vial, test nº 262.", en: "Entrances and exits of cities often have hold-ups, and braking hard risks a rear-end collision. So, whenever possible, warn those behind by repeatedly flashing the brake lights or by moving the arm up and down in short movements. Source: Tráfico y Seguridad Vial magazine, test no. 262." } },
    { es: "En vías urbanas de doble sentido de circulación, ¿en qué lado de la calzada puede estacionar un turismo?",
      prompt: { ru: "На городской улице с двусторонним движением, с какой стороны проезжей части может стоять легковой автомобиль?", en: "On a two-way urban street, on which side of the carriageway may a car park?" },
      options: [
        { es: "A ambos lados cuando la línea de separación de los sentidos sea discontinua.", ru: "С обеих сторон, если линия между направлениями прерывистая.", en: "On both sides if the line between directions is broken." },
        { es: "En el lado izquierdo de la calzada en el sentido de la marcha.", ru: "С левой стороны по ходу движения.", en: "On the left-hand side in the direction of travel." },
        { es: "En el lado derecho de la calzada en el sentido de la marcha.", ru: "С правой стороны по ходу движения.", en: "On the right-hand side in the direction of travel." }
      ],
      answer: 2,
      explain: { ru: "На улицах с двусторонним движением останавливаются и паркуются только справа по ходу движения (RGC, ст. 90). Fuente: Tráfico y Seguridad Vial, test nº 262.", en: "On two-way streets you stop and park only on the right in your direction of travel (RGC art. 90). Source: Tráfico y Seguridad Vial magazine, test no. 262." } },
    { es: "Si no está implicado en un accidente, ¿debe prestar auxilio a los heridos?",
      prompt: { ru: "Если вы не участник ДТП, должны ли вы помочь раненым?", en: "If you are not involved in an accident, must you help the injured?" },
      options: [
        { es: "Solo si lo solicita algún herido.", ru: "Только если об этом просит кто-то из раненых.", en: "Only if one of the injured asks for it." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, salvo que la ayuda ya esté organizada.", ru: "Да, если помощь ещё не организована.", en: "Yes, unless help is already organised." }
      ],
      answer: 2,
      explain: { ru: "Любой, кто видит ДТП с пострадавшими, обязан помочь или вызвать помощь, если она ещё не организована (RGC, ст. 129). Fuente: Tráfico y Seguridad Vial, test nº 262.", en: "Anyone who witnesses an accident with casualties must help or call for help unless help is already organised (RGC art. 129). Source: Tráfico y Seguridad Vial magazine, test no. 262." } },
    { es: "En una autovía, el límite de velocidad para una motocicleta es de...",
      prompt: { ru: "На автомагистрали (autovía) предел скорости для мотоцикла…", en: "On an autovía, the speed limit for a motorcycle is…" },
      options: [
        { es: "120 km/h, pudiéndose superar en 20 km/h para adelantar.", ru: "120 км/ч, и его можно превысить на 20 км/ч при обгоне.", en: "120 km/h, and it may be exceeded by 20 km/h to overtake." },
        { es: "120 km/h.", ru: "120 км/ч.", en: "120 km/h." },
        { es: "100 km/h.", ru: "100 км/ч.", en: "100 km/h." }
      ],
      answer: 1,
      explain: { ru: "Мотоцикл на autovía и autopista — 120 км/ч, как легковой автомобиль. Право превышать скорость на 20 км/ч при обгоне отменено в 2022 году. Fuente: Tráfico y Seguridad Vial, test nº 262.", en: "A motorcycle on an autovía or autopista may do 120 km/h, like a car. The allowance to exceed the limit by 20 km/h when overtaking was abolished in 2022. Source: Tráfico y Seguridad Vial magazine, test no. 262." } },
    { es: "La velocidad, ¿es un factor de riesgo que produce accidentes?",
      prompt: { ru: "Скорость — это фактор риска, который вызывает аварии?", en: "Is speed a risk factor that causes accidents?" },
      options: [
        { es: "No, si el vehículo dispone de los últimos sistemas de seguridad.", ru: "Нет, если в машине есть новейшие системы безопасности.", en: "No, if the vehicle has the latest safety systems." },
        { es: "No; solo agrava las consecuencias del accidente pero no es un factor de riesgo.", ru: "Нет: она лишь утяжеляет последствия, но фактором риска не является.", en: "No: it only makes the consequences worse but is not a risk factor." },
        { es: "Sí, y por eso debe ser la adecuada en cada momento.", ru: "Да, поэтому она должна в каждый момент быть подходящей.", en: "Yes, and that is why it must be appropriate at every moment." }
      ],
      answer: 2,
      explain: { ru: "Неподходящая скорость и вызывает аварии, и делает их тяжелее, поэтому скорость всегда подбирают по обстановке. Fuente: Tráfico y Seguridad Vial, test nº 262.", en: "Inappropriate speed both causes accidents and makes them worse, so speed must always suit the conditions. Source: Tráfico y Seguridad Vial magazine, test no. 262." } },
    { es: "¿Qué alumbrado deberá mantener encendido un vehículo estacionado durante la noche en el arcén de una travesía insuficientemente iluminada?",
      prompt: { ru: "Какие огни должны гореть ночью у машины, стоящей на обочине недостаточно освещённой travesía (участка дороги через населённый пункт)?", en: "Which lights must a vehicle parked at night on the hard shoulder of a poorly lit travesía (road through a town) keep on?" },
      options: [
        { es: "Ninguno, ya que es un estacionamiento dentro de poblado.", ru: "Никакие, ведь это стоянка в населённом пункте.", en: "None, as it is parked inside a built-up area." },
        { es: "Las luces de largo alcance y las luces de emergencia.", ru: "Дальний свет и аварийную сигнализацию.", en: "Main beam and hazard lights." },
        { es: "Las luces de posición, que podrá sustituir por las de estacionamiento.", ru: "Габаритные огни, которые можно заменить стояночными.", en: "Side lights, which may be replaced by parking lights." }
      ],
      answer: 2,
      explain: { ru: "Машина, стоящая ночью на плохо освещённом участке, обозначается габаритными или стояночными огнями (RGC, ст. 105). Fuente: Tráfico y Seguridad Vial, test nº 263.", en: "A vehicle parked at night on a poorly lit stretch is marked with its side or parking lights (RGC art. 105). Source: Tráfico y Seguridad Vial magazine, test no. 263." } },
    { es: "Cuando está lloviendo, ¿qué presión deben tener los neumáticos?",
      prompt: { ru: "Какое давление должно быть в шинах, когда идёт дождь?", en: "What pressure should the tyres have when it is raining?" },
      options: [
        { es: "Mayor que la aconsejada por el fabricante.", ru: "Выше рекомендованного производителем.", en: "Higher than recommended by the manufacturer." },
        { es: "Menor que la aconsejada por el fabricante.", ru: "Ниже рекомендованного производителем.", en: "Lower than recommended by the manufacturer." },
        { es: "La presión aconsejada por el fabricante.", ru: "Рекомендованное производителем.", en: "The pressure recommended by the manufacturer." }
      ],
      answer: 2,
      explain: { ru: "Давление всегда то, что рекомендует производитель; менять его под дождь не нужно. Fuente: Tráfico y Seguridad Vial, test nº 263.", en: "Pressure is always what the manufacturer recommends; it is not changed for rain. Source: Tráfico y Seguridad Vial magazine, test no. 263." } },
    { es: "¿Existe relación entre consumo de drogas de abuso o ilegales y accidentes de tráfico?",
      prompt: { ru: "Есть ли связь между употреблением наркотиков и ДТП?", en: "Is there a link between using illegal drugs and road accidents?" },
      options: [
        { es: "Sí; las drogas alteran gravemente las capacidades necesarias para conducir.", ru: "Да: наркотики сильно ухудшают способности, нужные для вождения.", en: "Yes: drugs seriously impair the abilities needed to drive." },
        { es: "Solo cuando el conductor mezcla el consumo de drogas con el de alcohol.", ru: "Только если водитель смешивает наркотики с алкоголем.", en: "Only if the driver mixes drugs with alcohol." },
        { es: "No; la conducción es más segura cuando se consumen drogas de abuso.", ru: "Нет: под наркотиками водить безопаснее.", en: "No: driving is safer under drugs." }
      ],
      answer: 0,
      explain: { ru: "Наркотики ухудшают восприятие, внимание и реакцию, поэтому повышают риск ДТП и сами по себе. Fuente: Tráfico y Seguridad Vial, test nº 263.", en: "Drugs impair perception, attention and reaction, so they raise the accident risk on their own. Source: Tráfico y Seguridad Vial magazine, test no. 263." } },
    { es: "En un carril VAO, ¿puede circular un turismo que arrastra un remolque de menos de 750 kg de M.M.A.?",
      prompt: { ru: "Может ли легковой автомобиль с прицепом массой до 750 кг ехать по полосе VAO (для машин с несколькими пассажирами)?", en: "May a car towing a trailer of under 750 kg MAM use a VAO (high-occupancy) lane?" },
      options: [
        { es: "Sí, pero solo de día.", ru: "Да, но только днём.", en: "Yes, but only by day." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, siempre.", ru: "Да, всегда.", en: "Yes, always." }
      ],
      answer: 1,
      explain: { ru: "По полосам VAO не могут ехать машины с прицепом, независимо от его массы (RGC, ст. 35). Fuente: Tráfico y Seguridad Vial, test nº 263.", en: "Vehicles towing a trailer may not use VAO lanes, whatever the trailer's mass (RGC art. 35). Source: Tráfico y Seguridad Vial magazine, test no. 263." } },
    { es: "Una embarazada, ¿debe llevar puesto el cinturón de seguridad?",
      prompt: { ru: "Должна ли беременная женщина пристёгиваться ремнём безопасности?", en: "Must a pregnant woman wear a seat belt?" },
      options: [
        { es: "Sí, pero solo en vías interurbanas.", ru: "Да, но только на загородных дорогах.", en: "Yes, but only on interurban roads." },
        { es: "Sí, es obligatorio.", ru: "Да, это обязательно.", en: "Yes, it is compulsory." },
        { es: "No, no es obligatorio.", ru: "Нет, не обязательно.", en: "No, it is not compulsory." }
      ],
      answer: 1,
      explain: { ru: "Беременность не освобождает от ремня; освобождение возможно только по медицинской справке. Fuente: Tráfico y Seguridad Vial, test nº 263.", en: "Pregnancy does not exempt from the seat belt; only a medical certificate can. Source: Tráfico y Seguridad Vial magazine, test no. 263." } },
    { es: "Debido al deterioro psicofísico consecuencia del envejecimiento, ¿qué situaciones de tráfico ofrecen más dificultades a las personas mayores?",
      prompt: { ru: "Какие дорожные ситуации из-за возрастного ухудшения физического и психического состояния труднее всего даются пожилым людям?", en: "Because of age-related psychophysical decline, which traffic situations are hardest for older people?" },
      options: [
        { es: "Los giros a la izquierda, especialmente en vías urbanas.", ru: "Повороты налево, особенно в городе.", en: "Left turns, especially in towns." },
        { es: "Los estacionamientos, sobre todo cuando se realizan a la derecha de la calzada.", ru: "Парковка, особенно справа от проезжей части.", en: "Parking, especially on the right of the carriageway." },
        { es: "Las situaciones complejas, como incorporarse a una vía en la que se circula a alta velocidad.", ru: "Сложные ситуации, например въезд на дорогу, где едут на большой скорости.", en: "Complex situations, such as joining a road where traffic is fast." }
      ],
      answer: 2,
      explain: { ru: "С возрастом медленнее обрабатывается информация, поэтому трудны сложные ситуации с быстрым движением, например въезд на скоростную дорогу. Fuente: Tráfico y Seguridad Vial, test nº 263.", en: "With age information is processed more slowly, so complex fast situations, such as joining a fast road, are the hardest. Source: Tráfico y Seguridad Vial magazine, test no. 263." } },
    { es: "De las siguientes, ¿cuál es una obligación que corresponde al titular del vehículo?",
      prompt: { ru: "Какая из этих обязанностей лежит на владельце машины (titular)?", en: "Which of these is an obligation of the vehicle's registered keeper (titular)?" },
      options: [
        { es: "Verificar que las placas de matrícula del vehículo no presentan obstáculos que impidan su lectura.", ru: "Проверять, что номерные знаки ничем не закрыты.", en: "Checking that the number plates are not obstructed." },
        { es: "Identificar ante la Administración al conductor del vehículo en el momento de cometerse una infracción.", ru: "Сообщить властям, кто был за рулём в момент нарушения.", en: "Identifying to the authorities who was driving when an offence was committed." },
        { es: "Comprobar que todos los ocupantes del vehículo hacen uso del cinturón de seguridad.", ru: "Следить, чтобы все пассажиры были пристёгнуты.", en: "Making sure all occupants wear their seat belts." }
      ],
      answer: 1,
      explain: { ru: "Владелец обязан назвать водителя, совершившего нарушение (LSV, ст. 11); проверка номеров и ремней — обязанности водителя. Fuente: Tráfico y Seguridad Vial, test nº 263.", en: "The keeper must identify the driver who committed an offence (LSV art. 11); checking plates and belts are the driver's duties. Source: Tráfico y Seguridad Vial magazine, test no. 263." } },
    { es: "El conductor de un turismo, ¿qué debe hacer para incorporarse a la circulación?",
      prompt: { ru: "Что должен сделать водитель легкового автомобиля, чтобы влиться в поток (начать движение)?", en: "What must a car driver do to join the traffic?" },
      options: [
        { es: "Solo señalizar la maniobra, porque los demás tienen que ceder el paso.", ru: "Только показать манёвр, ведь остальные должны уступить.", en: "Just signal the manoeuvre, as the others must give way." },
        { es: "Seguir siempre las indicaciones de otra persona.", ru: "Всегда следовать указаниям другого человека.", en: "Always follow another person's directions." },
        { es: "Asegurarse de que puede hacerlo sin peligro para los demás usuarios.", ru: "Убедиться, что он может сделать это без опасности для других.", en: "Make sure he can do it without danger to other road users." }
      ],
      answer: 2,
      explain: { ru: "Кто вливается в поток, должен уступить дорогу и убедиться, что это безопасно; указатель поворота права не даёт (RGC, ст. 72). Fuente: Tráfico y Seguridad Vial, test nº 263.", en: "Whoever joins the traffic must give way and make sure it is safe; the indicator gives no right of way (RGC art. 72). Source: Tráfico y Seguridad Vial magazine, test no. 263." } },
    { es: "Como mantenimiento preventivo, ¿es conveniente realizar una revisión periódica del sistema de alumbrado del vehículo?",
      prompt: { ru: "Стоит ли в рамках профилактического обслуживания периодически проверять систему освещения машины?", en: "As preventive maintenance, is it advisable to check the vehicle's lighting system regularly?" },
      options: [
        { es: "Sí, para comprobar su correcto reglado y funcionamiento.", ru: "Да, чтобы проверить её регулировку и работу.", en: "Yes, to check that it is correctly adjusted and works." },
        { es: "No, salvo en los vehículos que disponen de un sistema regulador automático.", ru: "Нет, кроме машин с автоматическим корректором фар.", en: "No, except for vehicles with an automatic levelling system." },
        { es: "No, solamente, cuando lleve sobrecarga porque podrían producirse cambios de inclinación del alcance luminoso.", ru: "Нет, только при перегрузке, когда может меняться наклон света.", en: "No, only when overloaded, as the beam angle may change." }
      ],
      answer: 0,
      explain: { ru: "Фары, указатели поворота и лампы нужно регулярно проверять: неисправные или плохо отрегулированные огни слепят других и плохо освещают дорогу. Даже при автоматическом корректоре фар проверка нужна. Fuente: Tráfico y Seguridad Vial, test nº 263.", en: "Headlights, indicators and bulbs should be checked regularly: faulty or badly adjusted lights dazzle others and light the road poorly. Even with automatic levelling a regular check is still needed. Source: Tráfico y Seguridad Vial magazine, test no. 263." } },
    { es: "Siempre que exista espacio suficiente y adoptando las máximas precauciones, está permitido adelantar por la derecha...",
      prompt: { ru: "Если места достаточно и соблюдается максимальная осторожность, обгонять справа разрешено…", en: "With enough room and taking the utmost care, overtaking on the right is allowed…" },
      options: [
        { es: "en vías interurbanas, en las intersecciones y sus proximidades.", ru: "на загородных дорогах, на перекрёстках и рядом с ними.", en: "on interurban roads, at junctions and near them." },
        { es: "en autopistas y autovías que discurran exclusivamente dentro de poblado.", ru: "на autopista и autovía, которые проходят только по населённому пункту.", en: "on autopistas and autovías running entirely inside a town." },
        { es: "en vías urbanas con dos o más carriles delimitados por líneas longitudinales.", ru: "на городских дорогах с двумя и более полосами, разделёнными продольными линиями.", en: "on urban roads with two or more lanes marked by longitudinal lines." }
      ],
      answer: 2,
      explain: { ru: "В городе на дорогах с размеченными полосами в одном направлении можно обгонять и справа (RGC, ст. 82). Fuente: Tráfico y Seguridad Vial, test nº 263.", en: "In towns, on roads with marked lanes in the same direction, you may also overtake on the right (RGC art. 82). Source: Tráfico y Seguridad Vial magazine, test no. 263." } },
    { es: "En caso de estar implicado en un accidente, ¿debe detenerse para ayudar a restablecer la seguridad de la circulación?",
      prompt: { ru: "Если вы участник ДТП, должны ли вы остановиться, чтобы помочь восстановить безопасность движения?", en: "If you are involved in an accident, must you stop to help restore road safety?" },
      options: [
        { es: "No, esa tarea corresponde a la policía de tráfico.", ru: "Нет, это задача дорожной полиции.", en: "No, that is the traffic police's job." },
        { es: "Sí, en la medida de lo posible.", ru: "Да, насколько это возможно.", en: "Yes, as far as possible." },
        { es: "Solo si hay fallecidos o heridos graves.", ru: "Только если есть погибшие или тяжело раненые.", en: "Only if there are deaths or serious injuries." }
      ],
      answer: 1,
      explain: { ru: "Участник ДТП обязан остановиться и по возможности помочь восстановить безопасность движения (RGC, ст. 129). Fuente: Tráfico y Seguridad Vial, test nº 263.", en: "Anyone involved in an accident must stop and, as far as possible, help restore road safety (RGC art. 129). Source: Tráfico y Seguridad Vial magazine, test no. 263." } },
    { es: "Si conduce una motocicleta por una autovía con tres o más carriles, ¿le está permitido circular por el carril situado más a la izquierda?",
      prompt: { ru: "Вы едете на мотоцикле по autovía с тремя и более полосами. Можно ли ехать по крайней левой полосе?", en: "Riding a motorcycle on an autovía with three or more lanes, may you use the leftmost lane?" },
      options: [
        { es: "Sí, cuando las circunstancias del tráfico o la vía lo aconsejen.", ru: "Да, когда этого требуют обстановка или дорога.", en: "Yes, when traffic or road conditions make it advisable." },
        { es: "Solo cuando la circulación se encuentre saturada.", ru: "Только при очень плотном движении.", en: "Only when traffic is saturated." },
        { es: "No, solo puede utilizar los carriles derecho y central.", ru: "Нет, только правую и среднюю полосы.", en: "No, only the right and middle lanes." }
      ],
      answer: 0,
      explain: { ru: "Ограничение «не левая полоса» касается грузовиков и составов длиннее 7 м; мотоцикл может ехать по ней, когда это нужно. Fuente: Tráfico y Seguridad Vial, test nº 263.", en: "The 'no leftmost lane' rule applies to lorries and combinations over 7 m; a motorcycle may use it when needed. Source: Tráfico y Seguridad Vial magazine, test no. 263." } },
    { es: "Si conduce una motocicleta, ¿es aconsejable utilizar guantes?",
      prompt: { ru: "Стоит ли надевать перчатки при езде на мотоцикле?", en: "When riding a motorcycle, is it advisable to wear gloves?" },
      options: [
        { es: "Sí; su uso es obligatorio en todo tipo de vías.", ru: "Да: они обязательны на всех дорогах.", en: "Yes: they are compulsory on all roads." },
        { es: "Sí, incluso en verano, para proteger las manos en caso de caída.", ru: "Да, даже летом, чтобы защитить руки при падении.", en: "Yes, even in summer, to protect the hands in a fall." },
        { es: "No, porque pueden dificultar la conducción.", ru: "Нет, они мешают управлять.", en: "No, they make riding harder." }
      ],
      answer: 1,
      explain: { ru: "С 1 октября 2026 года перчатки обязательны водителю и пассажиру мотоцикла за городом (RGC, ст. 118.1), но не на всех дорогах. В городе их тоже советуют носить: при падении первыми страдают руки. Fuente: Tráfico y Seguridad Vial, test nº 263; RD 518/2026.", en: "Since 1 October 2026 gloves are compulsory for motorcycle riders and passengers on interurban roads (RGC art. 118.1), but not on every road. They are advised in town too: hands are hurt first in a fall. Source: Tráfico y Seguridad Vial magazine, test no. 263; RD 518/2026." } },
    { es: "La señal indica que...",
      prompt: { ru: "Этот знак означает, что…", en: "This sign means that…" },
      options: [
        { es: "está en un callejón sin salida y debe retroceder.", ru: "вы в тупике и должны развернуться назад.", en: "you are in a dead end and must turn back." },
        { es: "está prohibido pasar sin detenerse.", ru: "запрещено проезжать без остановки.", en: "passing without stopping is forbidden." },
        { es: "se aproxima a una elevación del terreno.", ru: "впереди возвышенность.", en: "you are approaching a rise in the ground." }
      ],
      answer: 1,
      explain: { ru: "Знак R-200 запрещает проезжать без остановки (таможня, пункт контроля, платная дорога). Fuente: Tráfico y Seguridad Vial, test nº 264.", en: "Sign R-200 forbids passing without stopping (customs, checkpoint, toll). Source: Tráfico y Seguridad Vial magazine, test no. 264." },
      sign: "R-200" },
    { es: "¿Para qué sirve el carril de deceleración?",
      prompt: { ru: "Для чего нужна полоса торможения (carril de deceleración)?", en: "What is the deceleration lane for?" },
      options: [
        { es: "Para que circulen los vehículos lentos.", ru: "Для медленных машин.", en: "For slow vehicles." },
        { es: "Para adelantar por la derecha.", ru: "Для обгона справа.", en: "For overtaking on the right." },
        { es: "Para reducir la velocidad al salir de una autopista.", ru: "Чтобы снизить скорость при съезде с автомагистрали.", en: "To slow down when leaving a motorway." }
      ],
      answer: 2,
      explain: { ru: "На полосу торможения переходят как можно раньше и снижают на ней скорость перед съездом. Fuente: Tráfico y Seguridad Vial, test nº 264.", en: "You move into the deceleration lane as early as possible and slow down there before the exit. Source: Tráfico y Seguridad Vial magazine, test no. 264." } },
    { es: "En una vía interurbana insuficientemente iluminada, un turismo circula a menos de 40 km/h; ¿puede circular utilizando solo la luz de posición y la de corto alcance?",
      prompt: { ru: "На загородной дороге с недостаточным освещением легковой автомобиль едет медленнее 40 км/ч. Может ли он ехать только с габаритами и ближним светом?", en: "On a poorly lit interurban road a car is doing under 40 km/h. May it drive with only side lights and dipped beam?" },
      options: [
        { es: "Sí, aunque puede encender la de largo alcance si no deslumbra a otros usuarios.", ru: "Да, хотя может включить и дальний, если не ослепляет других.", en: "Yes, although it may switch on main beam if it does not dazzle anyone." },
        { es: "No; es obligatorio que circule con la luz de largo alcance encendida.", ru: "Нет, дальний свет обязателен.", en: "No, main beam is compulsory." },
        { es: "Solo cuando circule por una travesía.", ru: "Только на travesía.", en: "Only in a travesía." }
      ],
      answer: 0,
      explain: { ru: "Ниже 40 км/ч на плохо освещённой дороге достаточно ближнего света; дальний разрешён, если никого не слепит (RGC, ст. 99–100). Fuente: Tráfico y Seguridad Vial, test nº 264.", en: "Below 40 km/h on a poorly lit road dipped beam is enough; main beam is allowed if it dazzles no one (RGC arts. 99–100). Source: Tráfico y Seguridad Vial magazine, test no. 264." } },
    { es: "Las marcas blancas y rojas de la calzada, ¿qué indican?",
      prompt: { ru: "Что означает бело-красная разметка на проезжей части?", en: "What do red and white road markings mean?" },
      options: [
        { es: "Una zona reservada para la salida de competiciones de coches.", ru: "Зону для старта автогонок.", en: "An area reserved for the start of car races." },
        { es: "Una zona reservada para el estacionamiento de camiones.", ru: "Зону стоянки грузовиков.", en: "An area reserved for lorry parking." },
        { es: "Una zona reservada para frenado de emergencia, donde no se puede parar ni estacionar.", ru: "Зону для экстренного торможения, где нельзя останавливаться и стоять.", en: "An emergency braking area, where you may not stop or park." }
      ],
      answer: 2,
      explain: { ru: "Красно-белые клетки обозначают аварийный улавливающий участок (зону торможения); стоять и останавливаться там нельзя. Fuente: Tráfico y Seguridad Vial, test nº 264.", en: "Red and white checks mark an emergency escape (braking) area; stopping and parking there are forbidden. Source: Tráfico y Seguridad Vial magazine, test no. 264." } },
    { es: "¿Es recomendable tener especial cuidado al adelantar a un grupo de ciclistas en los ascensos prolongados?",
      prompt: { ru: "Нужно ли быть особенно осторожным при обгоне группы велосипедистов на длинном подъёме?", en: "Should you take special care when overtaking a group of cyclists on a long climb?" },
      options: [
        { es: "No; los adelantamientos a ciclistas no implican riesgo alguno.", ru: "Нет: обгон велосипедистов не связан с риском.", en: "No: overtaking cyclists carries no risk." },
        { es: "Solo si algún ciclista va bebiendo algún líquido o tomando alimentos sólidos.", ru: "Только если кто-то из них пьёт или ест.", en: "Only if a cyclist is drinking or eating." },
        { es: "Sí, porque debido al esfuerzo y pedaleo pueden realizar cambios bruscos de trayectoria.", ru: "Да: от усилия и педалирования они могут резко менять траекторию.", en: "Yes: because of the effort of pedalling they may suddenly swerve." }
      ],
      answer: 2,
      explain: { ru: "На подъёме велосипедисты качаются и могут неожиданно отклониться, поэтому нужна дистанция не менее 1,5 м и осторожность. Fuente: Tráfico y Seguridad Vial, test nº 264.", en: "On climbs cyclists sway and may swerve suddenly, so keep at least 1.5 m and take care. Source: Tráfico y Seguridad Vial magazine, test no. 264." } },
    { es: "Un agente circula en una moto portando una bandera verde; ¿qué indica?",
      prompt: { ru: "Полицейский едет на мотоцикле с зелёным флагом. Что это означает?", en: "An officer on a motorbike is carrying a green flag. What does it mean?" },
      options: [
        { es: "La calzada está abierta, pero hay que extremar la atención.", ru: "Дорога открыта, но нужно быть очень внимательным.", en: "The road is open, but take extra care." },
        { es: "La calzada queda de nuevo abierta al tráfico a partir de su paso.", ru: "После его проезда дорога снова открыта для движения.", en: "The road is open to traffic again after he passes." },
        { es: "Se está desarrollando en la calzada una actividad deportiva.", ru: "На дороге проходит спортивное мероприятие.", en: "A sports event is taking place on the road." }
      ],
      answer: 1,
      explain: { ru: "Зелёный флаг на машине или мотоцикле, замыкающем колонну, означает, что дорога снова открыта (RGC, ст. 143). Fuente: Tráfico y Seguridad Vial, test nº 264.", en: "A green flag on the vehicle closing a convoy or event means the road is open again (RGC art. 143). Source: Tráfico y Seguridad Vial magazine, test no. 264." } },
    { es: "En general, bajo los efectos de la cocaína...",
      prompt: { ru: "В целом под действием кокаина…", en: "In general, under the effects of cocaine…" },
      options: [
        { es: "aumenta la capacidad de concentración del conductor.", ru: "способность водителя сосредоточиться растёт.", en: "the driver's ability to concentrate increases." },
        { es: "disminuye la capacidad de concentración del conductor.", ru: "способность водителя сосредоточиться падает.", en: "the driver's ability to concentrate decreases." },
        { es: "se percibe mejor el entorno y se toman decisiones más seguras.", ru: "обстановка воспринимается лучше, а решения безопаснее.", en: "the surroundings are perceived better and decisions are safer." }
      ],
      answer: 1,
      explain: { ru: "Кокаин даёт ложное ощущение контроля, но снижает концентрацию и повышает рискованность. Fuente: Tráfico y Seguridad Vial, test nº 264.", en: "Cocaine gives a false sense of control but lowers concentration and increases risk-taking. Source: Tráfico y Seguridad Vial magazine, test no. 264." } },
    { es: "Buscar una emisora de radio o manipular el reproductor de música, ¿pueden distraer al conductor?",
      prompt: { ru: "Могут ли поиск радиостанции или управление музыкальным плеером отвлекать водителя?", en: "Can searching for a radio station or operating the music player distract the driver?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Solo si las emisoras de radio no están guardadas en memoria.", ru: "Только если станции не сохранены в памяти.", en: "Only if the stations are not stored in memory." },
        { es: "Sí, aumentando el riesgo de accidente.", ru: "Да, и это повышает риск аварии.", en: "Yes, and that increases the accident risk." }
      ],
      answer: 2,
      explain: { ru: "Любое действие, отвлекающее взгляд и руки от дороги, повышает риск ДТП. Fuente: Tráfico y Seguridad Vial, test nº 264.", en: "Anything that takes the eyes and hands off driving increases the accident risk. Source: Tráfico y Seguridad Vial magazine, test no. 264." } },
    { es: "En una vía urbana con un carril en cada sentido, deberá circular...",
      prompt: { ru: "На городской улице с одной полосой в каждом направлении нужно ехать…", en: "On an urban road with one lane in each direction you must drive…" },
      options: [
        { es: "lo más cerca posible del borde derecho de la calzada.", ru: "как можно ближе к правому краю проезжей части.", en: "as close as possible to the right-hand edge of the carriageway." },
        { es: "por la zona que mejor convenga.", ru: "там, где удобнее.", en: "wherever suits you best." },
        { es: "por el centro de la calzada, en tramos rectos.", ru: "по центру проезжей части на прямых участках.", en: "in the middle of the carriageway on straight sections." }
      ],
      answer: 0,
      explain: { ru: "На дороге с одной полосой в каждом направлении держатся как можно правее (RGC, ст. 29). Fuente: Tráfico y Seguridad Vial, test nº 264.", en: "On a road with one lane each way you keep as far to the right as possible (RGC art. 29). Source: Tráfico y Seguridad Vial magazine, test no. 264." } },
    { es: "Un conductor circula por una calzada muy mojada; si para frenar necesita pisar a fondo el pedal de freno, ¿a qué puede ser debido, principalmente?",
      prompt: { ru: "Водитель едет по очень мокрой дороге. Если, чтобы затормозить, ему приходится нажимать педаль до упора, в чём, скорее всего, причина?", en: "A driver is on a very wet road. If he has to press the brake pedal right down to brake, what is the most likely cause?" },
      options: [
        { es: "A un fallo del sistema de frenos.", ru: "Неисправность тормозной системы.", en: "A fault in the braking system." },
        { es: "A que el sistema ABS necesita una revisión.", ru: "ABS нужно проверить.", en: "The ABS needs a check-up." },
        { es: "Al enfriamiento excesivo de los discos de freno.", ru: "Слишком сильное охлаждение тормозных дисков.", en: "Excessive cooling of the brake discs." }
      ],
      answer: 0,
      explain: { ru: "В дождь тормозной путь длиннее, поэтому тормоза должны быть в отличном состоянии: проверяйте диски, тормозную жидкость и т. д. Это особенно важно в плохую погоду; регулярно обслуживайте машину, особенно тормоза. Fuente: Tráfico y Seguridad Vial, test nº 264.", en: "In rain the braking distance is longer, so the brakes must be in top condition: check the discs, brake fluid and so on. This matters even more in bad weather; service the vehicle regularly, especially the brakes. Source: Tráfico y Seguridad Vial magazine, test no. 264." } },
    { es: "Esta marca transversal continua, ¿está permitido franquearla sin detenerse antes?",
      prompt: { ru: "Можно ли пересечь эту сплошную поперечную линию, не остановившись перед ней?", en: "May you cross this continuous transverse line without stopping before it?" },
      options: [
        { es: "No, nunca.", ru: "Нет, никогда.", en: "No, never." },
        { es: "Sí, cuando haya peatones.", ru: "Да, когда есть пешеходы.", en: "Yes, when there are pedestrians." },
        { es: "Sí, cuando no sea obligatoria la detención.", ru: "Да, когда остановка не обязательна.", en: "Yes, when stopping is not compulsory." }
      ],
      answer: 2,
      explain: { ru: "Сплошная поперечная линия (стоп-линия) показывает, где остановиться, если остановка обязательна (светофор, STOP, агент); в остальных случаях её проезжают. Fuente: Tráfico y Seguridad Vial, test nº 264.", en: "A continuous transverse (stop) line shows where to stop when stopping is required (lights, STOP, an officer); otherwise you drive over it. Source: Tráfico y Seguridad Vial magazine, test no. 264." } },
    { es: "Normalmente, ¿qué ocurre cuando un conductor sufre una distracción al volante?",
      prompt: { ru: "Что обычно происходит, когда водитель отвлекается?", en: "What usually happens when a driver gets distracted?" },
      options: [
        { es: "Enciende las luces de emergencia o pisa el pedal de freno reiteradamente.", ru: "Он включает аварийку или многократно нажимает на тормоз.", en: "He switches on the hazard lights or presses the brake repeatedly." },
        { es: "Pisa el pedal de freno en lugar del acelerador.", ru: "Он нажимает тормоз вместо газа.", en: "He presses the brake instead of the accelerator." },
        { es: "Tarda más tiempo en reaccionar ante una situación de riesgo.", ru: "Он дольше реагирует на опасную ситуацию.", en: "He takes longer to react to a dangerous situation." }
      ],
      answer: 2,
      explain: { ru: "Отвлечение увеличивает время реакции и, значит, путь до остановки. Fuente: Tráfico y Seguridad Vial, test nº 264.", en: "Distraction increases reaction time and therefore the stopping distance. Source: Tráfico y Seguridad Vial magazine, test no. 264." } },
    { es: "En una vía con un carril para cada sentido de la marcha, ¿está permitido que un conductor adelante a varios vehículos a la vez?",
      prompt: { ru: "На дороге с одной полосой в каждом направлении можно ли обогнать сразу несколько машин?", en: "On a road with one lane in each direction, may a driver overtake several vehicles at once?" },
      options: [
        { es: "No, en ningún caso.", ru: "Нет, ни в коем случае.", en: "No, never." },
        { es: "Solo si puede volver a la derecha sin causar peligro en caso de encontrar vehículos de frente.", ru: "Только если он сможет безопасно вернуться вправо при встречном транспорте.", en: "Only if he can return to the right safely if he meets oncoming vehicles." },
        { es: "Sí, siempre que adelante a vehículos de grandes dimensiones.", ru: "Да, если обгоняет крупные машины.", en: "Yes, if he overtakes large vehicles." }
      ],
      answer: 1,
      explain: { ru: "Обгон колонны допустим, только если между машинами есть место, чтобы безопасно вернуться в свою полосу (RGC, ст. 85). Fuente: Tráfico y Seguridad Vial, test nº 264.", en: "Overtaking a line of vehicles is allowed only if there is room between them to return safely to your lane (RGC art. 85). Source: Tráfico y Seguridad Vial magazine, test no. 264." } },
    { es: "Un peatón, ¿puede estar obligado a realizar una prueba de alcoholemia?",
      prompt: { ru: "Может ли пешеход быть обязан пройти тест на алкоголь?", en: "Can a pedestrian be required to take a breath test?" },
      options: [
        { es: "Sí, cuando esté implicado directamente como posible responsable de un accidente.", ru: "Да, если он прямо замешан в ДТП как возможный виновник.", en: "Yes, when directly involved as a possible person responsible for an accident." },
        { es: "Sí, en un control preventivo de alcoholemia.", ru: "Да, на профилактическом контроле.", en: "Yes, at a preventive checkpoint." },
        { es: "No, en ningún caso.", ru: "Нет, ни в каком случае.", en: "No, never." }
      ],
      answer: 0,
      explain: { ru: "Тест обязателен для водителей и для любых участников движения, прямо замешанных в ДТП как возможные виновники (RGC, ст. 21). Fuente: Tráfico y Seguridad Vial, test nº 264.", en: "The test is compulsory for drivers and for any road user directly involved in an accident as a possible person responsible (RGC art. 21). Source: Tráfico y Seguridad Vial magazine, test no. 264." } },
    { es: "Si un conductor se encuentra esta señal, debe saber que en la próxima intersección...",
      prompt: { ru: "Встретив этот знак, водитель должен знать, что на ближайшем перекрёстке…", en: "A driver who sees this sign should know that at the next junction…" },
      options: [
        { es: "tiene prioridad sobre los vehículos que se acerquen tanto por la derecha como por la izquierda.", ru: "у него приоритет перед машинами и справа, и слева.", en: "he has priority over vehicles from both the right and the left." },
        { es: "se aplica la regla general de prioridad de paso.", ru: "действует общее правило приоритета.", en: "the general priority rule applies." },
        { es: "debe ceder el paso a los vehículos que se acerquen tanto por la derecha como por la izquierda.", ru: "он должен уступить машинам и справа, и слева.", en: "he must give way to vehicles from both the right and the left." }
      ],
      answer: 1,
      explain: { ru: "Знак P-2 предупреждает о перекрёстке, где действует общее правило: уступают тем, кто приближается справа. Fuente: Tráfico y Seguridad Vial, test nº 265.", en: "Sign P-2 warns of a junction where the general rule applies: give way to those approaching from the right. Source: Tráfico y Seguridad Vial magazine, test no. 265." },
      sign: "P-2" },
    { es: "En un viaje largo es aconsejable descansar...",
      prompt: { ru: "В долгой поездке рекомендуется отдыхать…", en: "On a long journey it is advisable to rest…" },
      options: [
        { es: "siempre que se encuentre un área de descanso.", ru: "на каждой встречной площадке отдыха.", en: "at every rest area you come across." },
        { es: "cada 2 horas aproximadamente.", ru: "примерно каждые 2 часа.", en: "roughly every 2 hours." },
        { es: "cada 5 horas aproximadamente.", ru: "примерно каждые 5 часов.", en: "roughly every 5 hours." }
      ],
      answer: 1,
      explain: { ru: "Рекомендуемый перерыв — примерно каждые 2 часа (или 200 км), чтобы не допустить усталости. Fuente: Tráfico y Seguridad Vial, test nº 265.", en: "The recommended break is roughly every 2 hours (or 200 km) to prevent fatigue. Source: Tráfico y Seguridad Vial magazine, test no. 265." } },
    { es: "La señal de velocidad máxima pintada sobre un carril, ¿qué indica?",
      prompt: { ru: "Что означает знак максимальной скорости, нарисованный на полосе?", en: "What does a maximum speed sign painted on a lane mean?" },
      options: [
        { es: "Prohibido circular a más de 60 kilómetros por hora en todos los carriles.", ru: "Запрещено ехать быстрее 60 км/ч по всем полосам.", en: "No driving above 60 km/h in any lane." },
        { es: "Prohibido circular a más de 60 kilómetros por hora en ese carril.", ru: "Запрещено ехать быстрее 60 км/ч по этой полосе.", en: "No driving above 60 km/h in that lane." },
        { es: "Prohibido circular a más de 60 kilómetros por hora para los vehículos que van a girar a la derecha.", ru: "Запрещено ехать быстрее 60 км/ч тем, кто поворачивает направо.", en: "No driving above 60 km/h for vehicles turning right." }
      ],
      answer: 1,
      explain: { ru: "Ограничение, нарисованное на полосе, действует только для этой полосы. Fuente: Tráfico y Seguridad Vial, test nº 265.", en: "A limit painted on a lane applies only to that lane. Source: Tráfico y Seguridad Vial magazine, test no. 265." } },
    { es: "El conductor de un vehículo de distribución de mercancías ¿cuándo podrá circular por vía urbana sin utilizar el cinturón de seguridad?",
      prompt: { ru: "Когда водитель машины, развозящей товары, может ездить по городу без ремня безопасности?", en: "When may the driver of a goods delivery vehicle drive in town without a seat belt?" },
      options: [
        { es: "En trayectos cortos, cuando realice sucesivas operaciones de carga y descarga.", ru: "На коротких отрезках, когда он постоянно загружает и разгружает товар.", en: "On short trips while making successive loading and unloading stops." },
        { es: "En todo momento; en poblado no tiene obligación de utilizar el cinturón de seguridad.", ru: "Всегда: в городе он не обязан пристёгиваться.", en: "Always: in town he does not have to wear it." },
        { es: "En ningún caso; siempre debe utilizar el cinturón de seguridad.", ru: "Никогда: ремень обязателен всегда.", en: "Never: he must always wear the belt." }
      ],
      answer: 0,
      explain: { ru: "Исключение для развозчиков: в городе на коротких отрезках между частыми погрузками и разгрузками (RGC, ст. 119). Fuente: Tráfico y Seguridad Vial, test nº 265.", en: "Exception for delivery drivers: in town, on short trips between frequent loading and unloading (RGC art. 119). Source: Tráfico y Seguridad Vial magazine, test no. 265." } },
    { es: "Si un vehículo estacionado se incorpora a la circulación, ¿tiene prioridad para realizar la maniobra?",
      prompt: { ru: "Если стоящая машина выезжает в поток, есть ли у неё приоритет?", en: "If a parked vehicle pulls out into traffic, does it have priority?" },
      options: [
        { es: "Sí, en cualquier caso.", ru: "Да, в любом случае.", en: "Yes, in any case." },
        { es: "Sí, si lo ha señalizado previamente.", ru: "Да, если она заранее показала манёвр.", en: "Yes, if it has signalled first." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 2,
      explain: { ru: "Выезжающий со стоянки должен уступить всем, кто уже едет (RGC, ст. 72). Fuente: Tráfico y Seguridad Vial, test nº 265.", en: "A vehicle pulling out must give way to everyone already moving (RGC art. 72). Source: Tráfico y Seguridad Vial magazine, test no. 265." } },
    { es: "Esta señal indica la situación de un lugar donde se puede...",
      prompt: { ru: "Этот знак показывает место, где можно…", en: "This sign shows a place where you can…" },
      options: [
        { es: "estacionar el vehículo cuando está averiado.", ru: "оставить машину при поломке.", en: "park the vehicle when it has broken down." },
        { es: "realizar una parada para descansar.", ru: "остановиться, чтобы отдохнуть.", en: "stop to rest." },
        { es: "apartar el vehículo en un túnel para dejar libre el paso.", ru: "отъехать в сторону в туннеле, чтобы освободить проезд.", en: "pull over in a tunnel to leave the way clear." }
      ],
      answer: 2,
      explain: { ru: "Знак «Apartadero» показывает уширение (карман), куда можно съехать, чтобы освободить проезд, например в туннеле. Fuente: Tráfico y Seguridad Vial, test nº 265.", en: "The 'Apartadero' sign shows a lay-by where you can pull over to leave the way clear, for example in a tunnel. Source: Tráfico y Seguridad Vial magazine, test no. 265." },
      sign: "S-34" },
    { es: "¿Cómo se llama la distancia que recorre un vehículo desde que el conductor percibe un estímulo hasta que se responde al mismo?",
      prompt: { ru: "Как называется расстояние, которое проходит машина с момента, когда водитель заметил раздражитель, до его реакции?", en: "What is the distance a vehicle covers from when the driver perceives a stimulus until he responds called?" },
      options: [
        { es: "Distancia de frenado.", ru: "Тормозной путь.", en: "Braking distance." },
        { es: "Distancia de reacción.", ru: "Путь реакции.", en: "Reaction distance." },
        { es: "Distancia de detención.", ru: "Остановочный путь.", en: "Stopping distance." }
      ],
      answer: 1,
      explain: { ru: "Путь реакции — расстояние за время реакции; остановочный путь = путь реакции + тормозной путь. Fuente: Tráfico y Seguridad Vial, test nº 265.", en: "Reaction distance is covered during reaction time; stopping distance = reaction distance + braking distance. Source: Tráfico y Seguridad Vial magazine, test no. 265." } },
    { es: "¿Cuál es, como norma general, la velocidad máxima a la que le está permitido circular a un turismo por una carretera convencional?",
      prompt: { ru: "Какая, как правило, максимальная скорость легкового автомобиля на обычной загородной дороге (carretera convencional)?", en: "As a general rule, what is the maximum speed for a car on a conventional road?" },
      options: [
        { es: "80 km/h.", ru: "80 км/ч.", en: "80 km/h." },
        { es: "100 km/h.", ru: "100 км/ч.", en: "100 km/h." },
        { es: "90 km/h.", ru: "90 км/ч.", en: "90 km/h." }
      ],
      answer: 2,
      explain: { ru: "С 2019 года на carretera convencional для легковых и мотоциклов — 90 км/ч (RGC, ст. 48). Fuente: Tráfico y Seguridad Vial, test nº 265.", en: "Since 2019 the limit on conventional roads for cars and motorcycles is 90 km/h (RGC art. 48). Source: Tráfico y Seguridad Vial magazine, test no. 265." } },
    { es: "Dos vehículos del mismo tipo se encuentran justo en la mitad de este estrechamiento, en el que la prioridad no está señalizada. ¿Cuál de ellos tendrá preferencia de paso?",
      prompt: { ru: "Две машины одного типа встретились точно посередине этого сужения, где приоритет не обозначен. У кого преимущество?", en: "Two vehicles of the same type meet exactly halfway along this narrowing, where priority is not signed. Which one has priority?" },
      options: [
        { es: "El vehículo que tenga que dar marcha atrás una menor distancia.", ru: "У той, которой меньше сдавать назад.", en: "The one that has to reverse the shorter distance." },
        { es: "El vehículo que tenga que dar marcha atrás mayor distancia.", ru: "У той, которой больше сдавать назад.", en: "The one that has to reverse the longer distance." },
        { es: "El vehículo que tenga mayor longitud, anchura o masa máxima autorizada.", ru: "У той, у которой больше длина, ширина или разрешённая масса.", en: "The one with the greater length, width or maximum authorised mass." }
      ],
      answer: 2,
      explain: { ru: "Если обе машины одного типа и обеим сдавать назад одинаково (они точно посередине), преимущество у машины большей ширины, длины или разрешённой массы (RGC, ст. 62). Fuente: Tráfico y Seguridad Vial, test nº 265.", en: "Between vehicles of the same type that would have to reverse the same distance (exactly halfway), priority goes to the one with the greater width, length or maximum authorised mass (RGC art. 62). Source: Tráfico y Seguridad Vial magazine, test no. 265." } },
    { es: "Cuando no se puede circular hacia adelante ni cambiar de dirección o sentido de la marcha, ¿se permite circular marcha atrás?",
      prompt: { ru: "Если нельзя ехать вперёд, повернуть или развернуться, разрешено ли ехать задним ходом?", en: "When you cannot drive forwards, turn or change direction, may you reverse?" },
      options: [
        { es: "Sí, pero solo con el recorrido mínimo indispensable.", ru: "Да, но только на минимально необходимое расстояние.", en: "Yes, but only the minimum distance needed." },
        { es: "Sí, pero el recorrido hacia atrás no puede ser superior a 15 metros ni se puede invadir un cruce de vías.", ru: "Да, но не больше 15 метров и не заезжая на перекрёсток.", en: "Yes, but not more than 15 metres and without entering a junction." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 0,
      explain: { ru: "Задний ход — только когда иначе нельзя и на минимально необходимом отрезке (RGC, ст. 80). Fuente: Tráfico y Seguridad Vial, test nº 265.", en: "Reverse only when there is no other way and for the minimum distance needed (RGC art. 80). Source: Tráfico y Seguridad Vial magazine, test no. 265." } },
    { es: "Si ha instalado en su vehículo neumáticos de invierno, ¿es conveniente sustituirlos cuando las temperaturas comiencen a ser más cálidas?",
      prompt: { ru: "Если вы поставили зимние шины, стоит ли менять их, когда становится тепло?", en: "If you have fitted winter tyres, should you change them when temperatures get warmer?" },
      options: [
        { es: "Sí, porque cuando la temperatura es más cálida se desgastan con más rapidez.", ru: "Да, потому что в тепле они изнашиваются быстрее.", en: "Yes, because they wear faster when it is warmer." },
        { es: "No, porque se adaptan progresivamente a los cambios de temperatura.", ru: "Нет, они постепенно приспосабливаются к температуре.", en: "No, they gradually adapt to temperature changes." },
        { es: "Sí, porque en tiempo cálido disminuye considerablemente la distancia de frenado.", ru: "Да, потому что в тепле тормозной путь сильно сокращается.", en: "Yes, because braking distance drops a lot in warm weather." }
      ],
      answer: 0,
      explain: { ru: "Зимние шины дают лучшее сцепление на льду, снегу и при низких температурах. Но при более высоких температурах, чем те, для которых они сделаны, они быстрее изнашиваются, хуже держат дорогу и увеличивают расход. Их советуют менять весной, когда теплеет. Fuente: Tráfico y Seguridad Vial, test nº 265.", en: "Winter tyres give better grip on ice, snow and in low temperatures. At higher temperatures than they were made for they wear faster, grip less and raise fuel use. Change them in spring when it warms up. Source: Tráfico y Seguridad Vial magazine, test no. 265." } },
    { es: "En una travesía, ¿está permitido circular con la luz de largo alcance encendida?",
      prompt: { ru: "Можно ли ехать с дальним светом по travesía (участку дороги через населённый пункт)?", en: "May you drive with main beam on a travesía (road through a town)?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, en travesías insuficientemente iluminadas.", ru: "Да, на недостаточно освещённых travesías.", en: "Yes, on poorly lit travesías." },
        { es: "Sólo si se circula a una velocidad superior a los 40 km/h.", ru: "Только при скорости выше 40 км/ч.", en: "Only above 40 km/h." }
      ],
      answer: 0,
      explain: { ru: "В населённых пунктах и на travesías дальний свет запрещён; используют ближний (RGC, ст. 99–100). Fuente: Tráfico y Seguridad Vial, test nº 265.", en: "Main beam is forbidden in built-up areas and travesías; use dipped beam (RGC arts. 99–100). Source: Tráfico y Seguridad Vial magazine, test no. 265." } },
    { es: "¿Está permitido que las motocicletas circulen por un carril reservado para vehículos con alta ocupación (VAO)?",
      prompt: { ru: "Могут ли мотоциклы ехать по полосе для машин с высокой загрузкой (VAO)?", en: "May motorcycles use a high-occupancy vehicle (VAO) lane?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Solo si lleva algún ocupante, además del conductor.", ru: "Только если кроме водителя есть пассажир.", en: "Only with a passenger besides the rider." },
        { es: "Sí.", ru: "Да.", en: "Yes." }
      ],
      answer: 2,
      explain: { ru: "Мотоциклы могут ехать по полосе VAO даже с одним водителем (RGC, ст. 35). Fuente: Tráfico y Seguridad Vial, test nº 265.", en: "Motorcycles may use VAO lanes even with only the rider (RGC art. 35). Source: Tráfico y Seguridad Vial magazine, test no. 265." } },
    { es: "El alcohol desaparece de la sangre...",
      prompt: { ru: "Алкоголь выводится из крови…", en: "Alcohol leaves the blood…" },
      options: [
        { es: "rápidamente, eliminándose por completo una hora después de su consumo.", ru: "быстро, полностью — через час после употребления.", en: "quickly, completely within an hour." },
        { es: "inmediatamente después de su consumo a través del sudor y de la orina.", ru: "сразу после употребления, с потом и мочой.", en: "immediately after drinking, through sweat and urine." },
        { es: "muy lentamente, eliminándose por completo varias horas después de su consumo.", ru: "очень медленно, полностью — через несколько часов.", en: "very slowly, completely only several hours later." }
      ],
      answer: 2,
      explain: { ru: "Организм выводит алкоголь медленно, и ускорить это нельзя: полностью он уходит через несколько часов. Fuente: Tráfico y Seguridad Vial, test nº 265.", en: "The body removes alcohol slowly and it cannot be sped up: it is gone only after several hours. Source: Tráfico y Seguridad Vial magazine, test no. 265." } },
    { es: "¿Es seguro conducir después de haber consumido anfetaminas?",
      prompt: { ru: "Безопасно ли водить после приёма амфетаминов?", en: "Is it safe to drive after taking amphetamines?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, porque son relajantes y retrasan la aparición del sueño.", ru: "Да, они расслабляют и отгоняют сон.", en: "Yes, they relax you and delay sleep." },
        { es: "Solo si se consumen acompañadas de alguna bebida alcohólica.", ru: "Только если запивать их алкоголем.", en: "Only if taken with an alcoholic drink." }
      ],
      answer: 0,
      explain: { ru: "Амфетамины вызывают импульсивность и переоценку своих сил, а после действия — сильную усталость. Fuente: Tráfico y Seguridad Vial, test nº 265.", en: "Amphetamines cause impulsiveness and overconfidence, followed by heavy fatigue when they wear off. Source: Tráfico y Seguridad Vial magazine, test no. 265." } },
    { es: "Los conductores de turismos, ¿están obligados a llevar en su vehículo una rueda de uso temporal y las herramientas indispensables para su cambio?",
      prompt: { ru: "Обязаны ли водители легковых машин возить запасное колесо (докатку) и инструмент для его замены?", en: "Must car drivers carry a temporary spare wheel and the tools to change it?" },
      options: [
        { es: "No, ya que puede sustituirse por un sistema alternativo que permita la movilidad.", ru: "Нет, его можно заменить другой системой, позволяющей продолжить движение.", en: "No, it can be replaced by an alternative system that keeps the car mobile." },
        { es: "Es obligatorio llevar una rueda de uso temporal, pero no las herramientas para su cambio.", ru: "Колесо обязательно, а инструмент — нет.", en: "The temporary wheel is compulsory, but not the tools." },
        { es: "Sí, es un repuesto obligatorio e insustituible que deben llevar todos los turismos.", ru: "Да, это обязательная и незаменимая запчасть для всех легковых.", en: "Yes, it is a compulsory, irreplaceable spare for all cars." }
      ],
      answer: 0,
      explain: { ru: "Вместо запаски допускается альтернативная система: ремкомплект или шины run-flat. Fuente: Tráfico y Seguridad Vial, test nº 266.", en: "Instead of a spare wheel an alternative system is allowed, such as a repair kit or run-flat tyres. Source: Tráfico y Seguridad Vial magazine, test no. 266." } },
    { es: "Los conductores, ¿pueden llevar en los oídos cascos o auriculares conectados a un teléfono móvil mientras conducen?",
      prompt: { ru: "Можно ли водителям во время езды носить в ушах наушники, подключённые к телефону?", en: "May drivers wear earphones or headphones connected to a mobile phone while driving?" },
      options: [
        { es: "No, excepto los conductores de bicicletas y los de vehículos de movilidad personal.", ru: "Нет, кроме велосипедистов и водителей СИМ.", en: "No, except cyclists and personal mobility vehicle riders." },
        { es: "Sí, siempre que los auriculares sean inalámbricos.", ru: "Да, если наушники беспроводные.", en: "Yes, if they are wireless." },
        { es: "No, está prohibido como norma general.", ru: "Нет, как правило это запрещено.", en: "No, as a general rule it is forbidden." }
      ],
      answer: 2,
      explain: { ru: "Наушники в ушах при вождении запрещены всем водителям, включая велосипедистов (RGC, ст. 18). Fuente: Tráfico y Seguridad Vial, test nº 266.", en: "Earphones while driving are forbidden for all drivers, cyclists included (RGC art. 18). Source: Tráfico y Seguridad Vial magazine, test no. 266." } },
    { es: "Los accidentes de tráfico en los que el sueño es el principal factor de riesgo, ¿pueden suceder durante las horas diurnas?",
      prompt: { ru: "Могут ли аварии, где главный фактор — сон, случаться днём?", en: "Can accidents in which sleepiness is the main factor happen in daytime?" },
      options: [
        { es: "Sí, especialmente entre las dos y las cuatro de la tarde.", ru: "Да, особенно между двумя и четырьмя часами дня.", en: "Yes, especially between two and four in the afternoon." },
        { es: "Sí, aunque es un tipo de accidente que solo sufren los conductores profesionales.", ru: "Да, но только у профессиональных водителей.", en: "Yes, but only to professional drivers." },
        { es: "No, solo suceden durante las horas nocturnas.", ru: "Нет, только ночью.", en: "No, only at night." }
      ],
      answer: 0,
      explain: { ru: "Сонливость пиковая не только ночью, но и после обеда, примерно с 14 до 16 часов. Fuente: Tráfico y Seguridad Vial, test nº 266.", en: "Sleepiness peaks not only at night but also after lunch, roughly from 2 to 4 p.m. Source: Tráfico y Seguridad Vial magazine, test no. 266." } },
    { es: "La obligación de dejar espacio suficiente para permitir el adelantamiento no será aplicable...",
      prompt: { ru: "Обязанность оставлять место для обгона не действует…", en: "The obligation to leave enough room to be overtaken does not apply…" },
      options: [
        { es: "donde esté prohibido el adelantamiento.", ru: "там, где обгон запрещён.", en: "where overtaking is forbidden." },
        { es: "en carreteras convencionales.", ru: "на обычных загородных дорогах.", en: "on conventional roads." },
        { es: "en vías con un único carril para cada sentido.", ru: "на дорогах с одной полосой в каждом направлении.", en: "on roads with one lane in each direction." }
      ],
      answer: 0,
      explain: { ru: "Медленные машины и колонны оставляют промежутки для обгона; там, где обгон запрещён, это не требуется (RGC, ст. 54). Fuente: Tráfico y Seguridad Vial, test nº 266.", en: "Slow vehicles and convoys leave gaps for overtaking; where overtaking is forbidden this is not required (RGC art. 54). Source: Tráfico y Seguridad Vial magazine, test no. 266." } },
    { es: "Los conductores de bicicletas tienen prioridad de paso respecto a los vehículos de motor...",
      prompt: { ru: "Велосипедисты имеют приоритет перед моторным транспортом…", en: "Cyclists have priority over motor vehicles…" },
      options: [
        { es: "en las zonas peatonales debidamente señalizadas.", ru: "в обозначенных пешеходных зонах.", en: "in signed pedestrian zones." },
        { es: "en todas las intersecciones.", ru: "на всех перекрёстках.", en: "at all junctions." },
        { es: "cuando circulen por un paso para ciclistas.", ru: "когда едут по велопереезду.", en: "when riding on a cycle crossing." }
      ],
      answer: 2,
      explain: { ru: "Велосипедист имеет приоритет на обозначенном велопереезде и на велодорожке (RGC, ст. 64). Fuente: Tráfico y Seguridad Vial, test nº 266.", en: "Cyclists have priority on a marked cycle crossing and on a cycle lane (RGC art. 64). Source: Tráfico y Seguridad Vial magazine, test no. 266." } },
    { es: "¿Qué debe llevar todo peatón que transite de noche por el arcén de una vía fuera de poblado?",
      prompt: { ru: "Что должен иметь каждый пешеход, идущий ночью по обочине загородной дороги?", en: "What must every pedestrian walking at night on the hard shoulder outside a town carry?" },
      options: [
        { es: "Un catadióptrico amarillo que pueda verse a una distancia mínima de 50 metros.", ru: "Жёлтый катафот, видимый не менее чем с 50 метров.", en: "A yellow reflector visible from at least 50 metres." },
        { es: "Un teléfono móvil.", ru: "Мобильный телефон.", en: "A mobile phone." },
        { es: "Un elemento luminoso o reflectante que sea visible a una distancia mínima de 150 metros.", ru: "Светящийся или светоотражающий элемент, видимый не менее чем со 150 метров.", en: "A light or reflective item visible from at least 150 metres." }
      ],
      answer: 2,
      explain: { ru: "Вне населённого пункта ночью пешеход должен быть заметен с 150 м: светоотражатель или фонарь (RGC, ст. 123). Fuente: Tráfico y Seguridad Vial, test nº 266.", en: "Outside towns at night a pedestrian must be visible from 150 m: a reflective item or a light (RGC art. 123). Source: Tráfico y Seguridad Vial magazine, test no. 266." } },
    { es: "Consumir alcohol con el estómago lleno, ¿influye en la tasa de alcoholemia?",
      prompt: { ru: "Влияет ли полный желудок на уровень алкоголя в крови?", en: "Does drinking on a full stomach affect the blood alcohol level?" },
      options: [
        { es: "Sí; el alcohol se absorbe más lentamente, pero esto no evita el riesgo de accidente.", ru: "Да: алкоголь всасывается медленнее, но риск аварии остаётся.", en: "Yes: alcohol is absorbed more slowly, but the accident risk remains." },
        { es: "Sí; el alcohol se absorbe más rápidamente, por lo que la tasa de alcoholemia es mayor.", ru: "Да: алкоголь всасывается быстрее, и уровень выше.", en: "Yes: alcohol is absorbed faster, so the level is higher." },
        { es: "No; es un factor que no influye en la tasa de alcoholemia.", ru: "Нет, не влияет.", en: "No, it has no effect." }
      ],
      answer: 0,
      explain: { ru: "Еда замедляет всасывание, но алкоголь всё равно попадает в кровь и ухудшает вождение. Fuente: Tráfico y Seguridad Vial, test nº 266.", en: "Food slows absorption, but the alcohol still reaches the blood and impairs driving. Source: Tráfico y Seguridad Vial magazine, test no. 266." } },
    { es: "Además de estar regulado a la altura idónea, ¿qué separación debe existir entre el reposacabezas y la cabeza para que sea eficaz?",
      prompt: { ru: "Кроме правильной высоты, какой должен быть зазор между подголовником и головой, чтобы он был эффективен?", en: "Besides the right height, how far should the head restraint be from the head to be effective?" },
      options: [
        { es: "La mínima posible y nunca superior a 4 centímetros.", ru: "Минимальный, никогда не больше 4 см.", en: "As small as possible and never more than 4 cm." },
        { es: "La máxima posible y nunca inferior a 5 centímetros.", ru: "Максимальный, никогда не меньше 5 см.", en: "As large as possible and never less than 5 cm." },
        { es: "Superior a 10 centímetros.", ru: "Больше 10 см.", en: "More than 10 cm." }
      ],
      answer: 0,
      explain: { ru: "Подголовник должен быть как можно ближе к голове (не дальше 4 см), иначе при ударе сзади шея сильно отклоняется. Fuente: Tráfico y Seguridad Vial, test nº 266.", en: "The head restraint should be as close to the head as possible (no more than 4 cm), otherwise the neck whips back in a rear impact. Source: Tráfico y Seguridad Vial magazine, test no. 266." } },
    { es: "Como norma general, en una vía interurbana de doble sentido de la circulación está permitido parar fuera de la calzada...",
      prompt: { ru: "Как правило, на загородной дороге с двусторонним движением останавливаться вне проезжей части разрешено…", en: "As a rule, on a two-way interurban road you may stop off the carriageway…" },
      options: [
        { es: "en el lado izquierdo y dejando libre la parte transitable del arcén.", ru: "слева, оставив свободной проезжую часть обочины.", en: "on the left, leaving the usable part of the hard shoulder clear." },
        { es: "en el lado derecho y dejando libre la parte transitable del arcén.", ru: "справа, оставив свободной проезжую часть обочины.", en: "on the right, leaving the usable part of the hard shoulder clear." },
        { es: "en el lado derecho y sobre la parte transitable del arcén.", ru: "справа, на проезжей части обочины.", en: "on the right, on the usable part of the hard shoulder." }
      ],
      answer: 1,
      explain: { ru: "Вне населённого пункта останавливаются вне проезжей части справа, оставляя проходимую часть обочины свободной (RGC, ст. 90). Fuente: Tráfico y Seguridad Vial, test nº 266.", en: "Outside towns you stop off the carriageway on the right, leaving the usable part of the shoulder clear (RGC art. 90). Source: Tráfico y Seguridad Vial magazine, test no. 266." } },
    { es: "Si un conductor novel presenta una tasa del alcohol en aire espirado de 0,20 miligramos por litro, el agente de tráfico, ¿le realizará una segunda prueba de alcoholemia?",
      prompt: { ru: "У водителя-новичка 0,20 мг/л алкоголя в выдыхаемом воздухе. Проведёт ли полицейский второй тест?", en: "A novice driver shows 0.20 mg/l of alcohol in exhaled air. Will the officer do a second test?" },
      options: [
        { es: "No; para ello debe tener una tasa superior a 0,25 miligramos por litro.", ru: "Нет: для этого уровень должен быть выше 0,25 мг/л.", en: "No: for that the level must be above 0.25 mg/l." },
        { es: "Solo si está implicado directamente en un accidente de circulación.", ru: "Только если он прямо замешан в ДТП.", en: "Only if he is directly involved in an accident." },
        { es: "Sí, para una mayor garantía y a efectos de contraste.", ru: "Да, для надёжности и сверки.", en: "Yes, for greater certainty and to compare results." }
      ],
      answer: 2,
      explain: { ru: "Для новичков предел 0,15 мг/л; превышение проверяется вторым тестом для сверки (RGC, ст. 23). Fuente: Tráfico y Seguridad Vial, test nº 266.", en: "The novice limit is 0.15 mg/l; a positive result is checked with a second test for comparison (RGC art. 23). Source: Tráfico y Seguridad Vial magazine, test no. 266." } },
    { es: "Circula con un turismo que arrastra un remolque de menos de 750 kg. de M.M.A. en el que transporta mercancías. En cuanto a la distribución de la carga, ¿debe tomar precauciones especiales?",
      prompt: { ru: "Вы едете на легковом автомобиле с прицепом до 750 кг, в котором груз. Нужно ли особо заботиться о размещении груза?", en: "You are driving a car towing a trailer under 750 kg MAM with goods in it. Should you take special care with the load?" },
      options: [
        { es: "Sí, la carga debe estar bien distribuida e ir bien sujeta para evitar que se desplace y pueda llegar a desestabilizar al vehículo.", ru: "Да, груз должен быть равномерно распределён и надёжно закреплён, чтобы он не сместился и не нарушил устойчивость.", en: "Yes, it must be well distributed and secured so it cannot shift and destabilise the vehicle." },
        { es: "No, salvo que supere la masa máxima autorizada del remolque.", ru: "Нет, если не превышена разрешённая масса прицепа.", en: "No, unless the trailer's maximum mass is exceeded." },
        { es: "Sí, debe situarse en la parte trasera del remolque para bajar el centro de gravedad y asegurar la estabilidad del vehículo.", ru: "Да, его нужно класть в заднюю часть прицепа, чтобы понизить центр тяжести.", en: "Yes, it should go at the back of the trailer to lower the centre of gravity." }
      ],
      answer: 0,
      explain: { ru: "Груз в прицепе нужно закрепить и распределить, чтобы состав был устойчив. С прицепом осторожнее обгоняйте — состав длиннее и манёвр дольше — и держите большую дистанцию, ведь для остановки нужно больше места. Fuente: Tráfico y Seguridad Vial, test nº 266.", en: "A trailer load must be secured and distributed so the combination stays stable. Take extra care overtaking — the combination is longer, so the manoeuvre takes longer — and keep a bigger gap, as stopping needs more room. Source: Tráfico y Seguridad Vial magazine, test no. 266." } },
    { es: "Si padece una alergia respiratoria, ¿es conveniente circular con las ventanas del vehículo abiertas?",
      prompt: { ru: "Если у вас аллергия дыхательных путей, стоит ли ехать с открытыми окнами?", en: "If you have a respiratory allergy, is it advisable to drive with the windows open?" },
      options: [
        { es: "Sí, para llevar bien ventilado el interior del vehículo.", ru: "Да, чтобы салон хорошо проветривался.", en: "Yes, to keep the inside well ventilated." },
        { es: "Solo en primavera.", ru: "Только весной.", en: "Only in spring." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 2,
      explain: { ru: "Через открытые окна в салон попадает пыльца; лучше закрыть окна и использовать фильтр салона. Fuente: Tráfico y Seguridad Vial, test nº 266.", en: "Open windows let pollen in; it is better to close them and use the cabin filter. Source: Tráfico y Seguridad Vial magazine, test no. 266." } },
    { es: "¿Es necesario revisar el funcionamiento del sistema de alumbrado de un vehículo?",
      prompt: { ru: "Нужно ли проверять работу системы освещения машины?", en: "Is it necessary to check the vehicle's lighting system?" },
      options: [
        { es: "Solo si el vehículo no lleva instaladas luces de xenón.", ru: "Только если у машины нет ксеноновых фар.", en: "Only if the vehicle has no xenon lights." },
        { es: "No, no es necesario.", ru: "Нет, не нужно.", en: "No, it is not necessary." },
        { es: "Sí; forma parte del mantenimiento preventivo.", ru: "Да, это часть профилактического обслуживания.", en: "Yes, it is part of preventive maintenance." }
      ],
      answer: 2,
      explain: { ru: "Проверка света — обычная часть профилактического обслуживания машины. Fuente: Tráfico y Seguridad Vial, test nº 266.", en: "Checking the lights is a normal part of preventive maintenance. Source: Tráfico y Seguridad Vial magazine, test no. 266." } },
    { es: "En vías interurbanas, ¿cuál es la infracción más habitual que cometen los peatones víctimas de atropello?",
      prompt: { ru: "Какое нарушение чаще всего совершают пешеходы, сбитые на загородных дорогах?", en: "On interurban roads, what is the most common offence committed by pedestrians who are hit?" },
      options: [
        { es: "No respetar los semáforos.", ru: "Не соблюдают сигналы светофора.", en: "Not obeying traffic lights." },
        { es: "Estar o marchar por la calzada de forma antirreglamentaria.", ru: "Находятся или идут по проезжей части с нарушением правил.", en: "Being on or walking along the carriageway in breach of the rules." },
        { es: "No obedecer las señales de los agentes.", ru: "Не подчиняются сигналам полицейских.", en: "Not obeying officers' signals." }
      ],
      answer: 1,
      explain: { ru: "Вне городов пешеходов чаще всего сбивают, когда они неправильно находятся на проезжей части. Fuente: Tráfico y Seguridad Vial, test nº 266.", en: "Outside towns pedestrians are most often hit when they are on the carriageway against the rules. Source: Tráfico y Seguridad Vial magazine, test no. 266." } },
    { es: "Cuando las indicaciones de un semáforo y una señal de balizamiento se contradicen, prevalece…",
      prompt: { ru: "Если указания светофора и временного знака (señal de balizamiento) противоречат друг другу, действует…", en: "When a traffic light and a beacon sign (señal de balizamiento) contradict each other, which prevails?" },
      options: [
        { es: "La señal de balizamiento, por orden de prioridad.", ru: "знак ограждения (balizamiento), по порядку приоритета.", en: "The beacon sign, by order of priority." },
        { es: "El semáforo.", ru: "светофор.", en: "The traffic light." },
        { es: "La señal más restrictiva.", ru: "более строгий знак.", en: "The more restrictive sign." }
      ],
      answer: 0,
      explain: { ru: "Порядок приоритета: агенты, временные знаки и ограждение (balizamiento), светофоры, вертикальные знаки, разметка (RGC, ст. 133). Fuente: Tráfico y Seguridad Vial, test nº 267.", en: "Order of priority: officers, temporary signs and beacons (balizamiento), traffic lights, vertical signs, road markings (RGC art. 133). Source: Tráfico y Seguridad Vial magazine, test no. 267." } },
    { es: "Al abandonar una autovía deberá…",
      prompt: { ru: "Съезжая с autovía, нужно…", en: "When leaving an autovía you must…" },
      options: [
        { es: "Reducir la velocidad de 60 km/h.", ru: "снизить скорость до 60 км/ч.", en: "slow down to 60 km/h." },
        { es: "Continuar por su carril hasta la salida.", ru: "ехать по своей полосе до самого съезда.", en: "stay in your lane until the exit." },
        { es: "Circular por el carril de deceleración lo antes posible.", ru: "как можно раньше перейти на полосу торможения.", en: "move into the deceleration lane as early as possible." }
      ],
      answer: 2,
      explain: { ru: "На полосу торможения переходят как можно раньше, чтобы тормозить уже на ней, а не на основной полосе. Fuente: Tráfico y Seguridad Vial, test nº 267.", en: "Move into the deceleration lane as early as possible so you slow down there and not on the main lane. Source: Tráfico y Seguridad Vial magazine, test no. 267." } },
    { es: "El freno de pie, ¿sobre qué ruedas actúa?",
      prompt: { ru: "На какие колёса действует ножной тормоз?", en: "Which wheels does the foot brake act on?" },
      options: [
        { es: "Sobre las ruedas delanteras.", ru: "На передние колёса.", en: "On the front wheels." },
        { es: "Sobre las cuatro ruedas.", ru: "На все четыре колеса.", en: "On all four wheels." },
        { es: "Sobre las ruedas motrices.", ru: "На ведущие колёса.", en: "On the driving wheels." }
      ],
      answer: 1,
      explain: { ru: "Рабочий (ножной) тормоз действует на все колёса; стояночный обычно — только на задние. Fuente: Tráfico y Seguridad Vial, test nº 267.", en: "The service (foot) brake acts on all wheels; the parking brake usually only on the rear ones. Source: Tráfico y Seguridad Vial magazine, test no. 267." } },
    { es: "En una autopista con tres carriles para el mismo sentido, normalmente, ¿cuál debe utilizar?",
      prompt: { ru: "На autopista с тремя полосами в одном направлении какой полосой обычно нужно пользоваться?", en: "On an autopista with three lanes in the same direction, which one should you normally use?" },
      options: [
        { es: "Cualquiera de ellos.", ru: "Любой из них.", en: "Any of them." },
        { es: "El central o el derecho, indistintamente.", ru: "Средней или правой — всё равно.", en: "The middle or right one, either." },
        { es: "El derecho.", ru: "Правой.", en: "The right one." }
      ],
      answer: 2,
      explain: { ru: "Вне населённого пункта едут по правой полосе; остальные — для обгона или при плотном движении (RGC, ст. 31). Fuente: Tráfico y Seguridad Vial, test nº 267.", en: "Outside towns you use the right lane; the others are for overtaking or heavy traffic (RGC art. 31). Source: Tráfico y Seguridad Vial magazine, test no. 267." } },
    { es: "Quiere girar a la derecha. ¿Cómo debe avisar a los demás conductores?",
      prompt: { ru: "Вы хотите повернуть направо. Как предупредить других водителей?", en: "You want to turn right. How should you warn other drivers?" },
      options: [
        { es: "Con las luces o con el claxon", ru: "Светом или звуковым сигналом.", en: "With the lights or the horn." },
        { es: "Con el intermitente o con el brazo", ru: "Указателем поворота или рукой.", en: "With the indicator or your arm." },
        { es: "Con el brazo o con el claxon.", ru: "Рукой или звуковым сигналом.", en: "With your arm or the horn." }
      ],
      answer: 1,
      explain: { ru: "Манёвр показывают указателем поворота, а при его отсутствии — рукой (RGC, ст. 109). Fuente: Tráfico y Seguridad Vial, test nº 267.", en: "A manoeuvre is shown with the indicator or, failing that, with the arm (RGC art. 109). Source: Tráfico y Seguridad Vial magazine, test no. 267." } },
    { es: "La lluvia, ¿afecta al agarre de las ruedas del vehículo a la calzada?",
      prompt: { ru: "Влияет ли дождь на сцепление колёс с дорогой?", en: "Does rain affect the grip of the wheels on the road?" },
      options: [
        { es: "No, el agarre es el mismo que cuando la calzada está seca.", ru: "Нет, сцепление такое же, как на сухой дороге.", en: "No, grip is the same as on a dry road." },
        { es: "Sí, se agarran más a la calzada.", ru: "Да, сцепление становится лучше.", en: "Yes, they grip better." },
        { es: "Sí, se agarran menos.", ru: "Да, сцепление становится хуже.", en: "Yes, they grip less." }
      ],
      answer: 2,
      explain: { ru: "На мокрой дороге сцепление хуже, а тормозной путь длиннее. Fuente: Tráfico y Seguridad Vial, test nº 267.", en: "On a wet road grip is lower and braking distance longer. Source: Tráfico y Seguridad Vial magazine, test no. 267." } },
    { es: "¿Qué debe hacer un peatón si, cuando va a cruzar una vía, se encuentra de frente a un agente con el brazo levantado verticalmente?",
      prompt: { ru: "Что должен сделать пешеход, если, собираясь переходить дорогу, он видит перед собой полицейского с поднятой вверх рукой?", en: "What must a pedestrian do if, about to cross, he faces an officer with an arm raised vertically?" },
      options: [
        { es: "Detenerse.", ru: "Остановиться.", en: "Stop." },
        { es: "Cruzar. Las señales de los agentes sólo obligan a los conductores de vehículos.", ru: "Переходить: сигналы полицейских касаются только водителей.", en: "Cross: officers' signals only bind drivers." },
        { es: "Detenerse, excepto si un semáforo le da preferencia de paso, en cuyo caso debe cruzar.", ru: "Остановиться, но если светофор разрешает — переходить.", en: "Stop, unless a traffic light gives him priority, in which case cross." }
      ],
      answer: 0,
      explain: { ru: "Поднятая вверх рука — «стоп» для всех, к кому обращён агент, и пешеходов тоже; сигналы агента важнее светофора. Fuente: Tráfico y Seguridad Vial, test nº 267.", en: "An arm raised vertically means stop for everyone the officer faces, pedestrians too; an officer's signals override traffic lights. Source: Tráfico y Seguridad Vial magazine, test no. 267." } },
    { es: "De los siguientes, ¿cuál es un síntoma característico de la aparición de la fatiga durante la conducción?",
      prompt: { ru: "Какой из признаков типичен для появления усталости за рулём?", en: "Which of these is a typical sign of fatigue while driving?" },
      options: [
        { es: "Se distingue mejor la información relevante de la irrelevante.", ru: "Важная информация лучше отличается от неважной.", en: "Relevant information is told apart better from irrelevant." },
        { es: "La disminución en el número de correcciones de la dirección", ru: "Уменьшается число корректировок руля.", en: "The number of steering corrections decreases." },
        { es: "El incremento de la agudeza visual.", ru: "Повышается острота зрения.", en: "Visual acuity increases." }
      ],
      answer: 1,
      explain: { ru: "Уставший водитель реже подруливает, машина «плывёт» — это признак усталости. Fuente: Tráfico y Seguridad Vial, test nº 267.", en: "A tired driver corrects the steering less often and the car drifts — a sign of fatigue. Source: Tráfico y Seguridad Vial magazine, test no. 267." } },
    { es: "Tras la exposición prolongada de un vehículo a altas temperaturas y al calor, ¿es conveniente revisar si sus faros y pilotos han sufrido algún deterioro?",
      prompt: { ru: "После долгого нахождения машины под сильной жарой стоит ли проверить, не повредились ли фары и задние фонари?", en: "After a vehicle has spent a long time in high heat, should you check whether its headlights and rear lamps have deteriorated?" },
      options: [
        { es: "Sí, para comprobar de forma visual su estado y capacidad de iluminación.", ru: "Да, чтобы осмотреть их состояние и силу света.", en: "Yes, to check visually their condition and how well they light." },
        { es: "No, ya que el acabado de los faros está hecho de un material que soporta todo tipo de factores sin deteriorarse.", ru: "Нет, корпус фар сделан из материала, который выдерживает всё.", en: "No, headlights are made of a material that withstands everything." },
        { es: "Sí, salvo en los vehículos de poca antigüedad.", ru: "Да, кроме новых машин.", en: "Yes, except on fairly new vehicles." }
      ],
      answer: 0,
      explain: { ru: "Жара ухудшает работу некоторых частей машины и повышает риск аварии. Фары и фонари от постоянного солнца и жары быстро стареют, желтеют и мутнеют, свет рассеивается хуже, и видимость падает, особенно ночью. Их стоит проверять, например после лета. Fuente: Tráfico y Seguridad Vial, test nº 267.", en: "Heat affects some parts of the car and raises the accident risk. Headlights and rear lamps age fast under constant sun and heat, turning yellow and cloudy, so the beam spreads badly and visibility drops, especially at night. Check them, for example after the summer. Source: Tráfico y Seguridad Vial magazine, test no. 267." } },
    { es: "La tasa de alcoholemia en sangre más segura para circular es…",
      prompt: { ru: "Самый безопасный уровень алкоголя в крови для вождения —…", en: "The safest blood alcohol level for driving is…" },
      options: [
        { es: "0,0 gramos por litro.", ru: "0,0 г/л.", en: "0.0 g/l." },
        { es: "0,5 gramos por litro.", ru: "0,5 г/л.", en: "0.5 g/l." },
        { es: "0,3 gramos por litro.", ru: "0,3 г/л.", en: "0.3 g/l." }
      ],
      answer: 0,
      explain: { ru: "Любое количество алкоголя ухудшает вождение; безопасно — только ноль. Fuente: Tráfico y Seguridad Vial, test nº 267.", en: "Any amount of alcohol impairs driving; only zero is safe. Source: Tráfico y Seguridad Vial magazine, test no. 267." } },
    { es: "Sobrevalorar su capacidad de conducción o una menor percepción del riesgo son conductas que, en general, hacen que los conductores jóvenes…",
      prompt: { ru: "Переоценка своих навыков и слабое восприятие риска, как правило, приводят к тому, что молодые водители…", en: "Overrating their driving skills and seeing less risk generally make young drivers…" },
      options: [
        { es: "tengan menos probabilidad de sufrir un accidente.", ru: "реже попадают в аварии.", en: "less likely to have an accident." },
        { es: "tengan más probabilidad de sufrir un accidente", ru: "чаще попадают в аварии.", en: "more likely to have an accident." },
        { es: "sean más prudentes al volante", ru: "ведут себя осторожнее.", en: "more careful at the wheel." }
      ],
      answer: 1,
      explain: { ru: "Переоценка своих сил и недооценка риска — главные причины аварийности молодых водителей. Fuente: Tráfico y Seguridad Vial, test nº 267.", en: "Overconfidence and underestimating risk are key reasons why young drivers crash more. Source: Tráfico y Seguridad Vial magazine, test no. 267." } },
    { es: "¿Está permitido que los vehículos prioritarios en servicio de urgencia utilicen únicamente la señal luminosa?",
      prompt: { ru: "Разрешено ли машинам приоритетных служб при срочном вызове использовать только световой сигнал?", en: "May priority vehicles on an emergency call use only the light signal?" },
      options: [
        { es: "Sí, cuando no suponga un peligro para los demás usuarios.", ru: "Да, если это не создаёт опасности для других.", en: "Yes, when it does not endanger other road users." },
        { es: "No, tienen que utilizar simultáneamente la señal luminosa y la acústica", ru: "Нет, они должны одновременно включать световой и звуковой сигналы.", en: "No, they must use the light and sound signals together." },
        { es: "Sólo en vías urbanas; en vías interurbanas deben usar siempre la señal acústica", ru: "Только в городе; за городом звук обязателен.", en: "Only in towns; outside towns the siren is always needed." }
      ],
      answer: 0,
      explain: { ru: "Приоритетные машины могут ехать только с маячком, если это не опасно; им всё равно нужно уступать (RGC, ст. 68). Fuente: Tráfico y Seguridad Vial, test nº 267.", en: "Priority vehicles may use only the flashing light when it is not dangerous, and you must still give way (RGC art. 68). Source: Tráfico y Seguridad Vial magazine, test no. 267." } },
    { es: "¿Qué indica esta señal?",
      prompt: { ru: "Что означает этот знак?", en: "What does this sign mean?" },
      options: [
        { es: "Proximidad a un cruce con una línea de tranvía.", ru: "Приближение к пересечению с трамвайной линией.", en: "Approach to a crossing with a tram line." },
        { es: "La cercanía de un paso a nivel, puente móvil o muelle.", ru: "Близость железнодорожного переезда, разводного моста или причала.", en: "Nearness of a level crossing, swing bridge or quay." },
        { es: "La cercanía de un paso a nivel al lado derecho.", ru: "Близость железнодорожного переезда справа.", en: "Nearness of a level crossing on the right-hand side." }
      ],
      answer: 1,
      explain: { ru: "Белые столбики с красными полосами (P-9, P-10) отсчитывают расстояние до переезда, разводного моста или причала; одна полоса — около 100 м. Fuente: Tráfico y Seguridad Vial, test nº 268.", en: "White posts with red stripes (P-9, P-10) count down to a level crossing, swing bridge or quay; one stripe means about 100 m. Source: Tráfico y Seguridad Vial magazine, test no. 268." },
      sign: "P-9c" },
    { es: "En idénticas situaciones de tráfico, el tiempo de reacción…",
      prompt: { ru: "В одинаковых дорожных ситуациях время реакции…", en: "In identical traffic situations, reaction time…" },
      options: [
        { es: "puede variar en función del estado psicofísico del conductor.", ru: "может меняться в зависимости от физического и психического состояния водителя.", en: "may vary with the driver's psychophysical state." },
        { es: "es siempre el mismo, no influye el estado psicofísico del conductor.", ru: "всегда одно и то же, состояние водителя не влияет.", en: "is always the same; the driver's state does not matter." },
        { es: "es el mismo para todos los conductores.", ru: "одинаково у всех водителей.", en: "is the same for all drivers." }
      ],
      answer: 0,
      explain: { ru: "Время реакции растёт от усталости, алкоголя, лекарств, отвлечения и т. д. Fuente: Tráfico y Seguridad Vial, test nº 268.", en: "Reaction time grows with fatigue, alcohol, medicines, distraction and so on. Source: Tráfico y Seguridad Vial magazine, test no. 268." } },
    { es: "El color del casco de protección de un motorista, ¿puede influir en su seguridad?",
      prompt: { ru: "Может ли цвет шлема влиять на безопасность мотоциклиста?", en: "Can the colour of a rider's helmet affect his safety?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí; los de colores claros o brillantes hacen más visible al motorista.", ru: "Да: светлые и яркие шлемы делают мотоциклиста заметнее.", en: "Yes: light or bright helmets make the rider more visible." },
        { es: "Sí; los de colores oscuros absorben mejor los impactos.", ru: "Да: тёмные лучше поглощают удары.", en: "Yes: dark ones absorb impacts better." }
      ],
      answer: 1,
      explain: { ru: "Яркий шлем помогает другим водителям раньше заметить мотоциклиста. Fuente: Tráfico y Seguridad Vial, test nº 268.", en: "A bright helmet helps other drivers see the rider sooner. Source: Tráfico y Seguridad Vial magazine, test no. 268." } },
    { es: "La señal que se observa en la fotografía prohíbe…",
      prompt: { ru: "Знак на фотографии запрещает…", en: "The sign in the photo forbids…" },
      options: [
        { es: "cambiar el sentido de la marcha y girar a la izquierda.", ru: "разворот и поворот налево.", en: "changing direction (U-turn) and turning left." },
        { es: "girar a la izquierda.", ru: "поворот налево.", en: "turning left." },
        { es: "cambiar el sentido de la marcha.", ru: "разворот.", en: "making a U-turn." }
      ],
      answer: 2,
      explain: { ru: "Знак R-304 запрещает только разворот; поворот налево он не запрещает. Fuente: Tráfico y Seguridad Vial, test nº 268.", en: "Sign R-304 forbids only U-turns; it does not forbid turning left. Source: Tráfico y Seguridad Vial magazine, test no. 268." },
      sign: "R-304" },
    { es: "Antes de abrir las puertas para bajar de un vehículo, debe cerciorarse siempre de que…",
      prompt: { ru: "Прежде чем открыть двери, чтобы выйти из машины, всегда нужно убедиться, что…", en: "Before opening the doors to get out, you must always make sure that…" },
      options: [
        { es: "no se ocasiona peligro a otros usuarios.", ru: "это не создаёт опасности для других.", en: "it causes no danger to other road users." },
        { es: "las luces de emergencia del vehículo están encendidas.", ru: "включена аварийная сигнализация.", en: "the hazard lights are on." },
        { es: "se ha puesto el chaleco reflectante.", ru: "вы надели светоотражающий жилет.", en: "you have put on the reflective vest." }
      ],
      answer: 0,
      explain: { ru: "Двери открывают, только убедившись, что это не опасно для других (RGC, ст. 114). Fuente: Tráfico y Seguridad Vial, test nº 268.", en: "Open doors only after making sure it is not dangerous for others (RGC art. 114). Source: Tráfico y Seguridad Vial magazine, test no. 268." } },
    { es: "En las intersecciones señalizadas, ¿cuál es la norma general que prevalece?",
      prompt: { ru: "На регулируемых знаками перекрёстках какое общее правило действует?", en: "At signed junctions, which general rule prevails?" },
      options: [
        { es: "Cumplir lo que la señal indica.", ru: "Выполнять то, что показывает знак.", en: "Doing what the sign says." },
        { es: "Ceder el paso siempre a la derecha.", ru: "Всегда уступать тем, кто справа.", en: "Always giving way to the right." },
        { es: "Abstenerse del cumplimiento de la señalización.", ru: "Не выполнять знаки.", en: "Ignoring the signs." }
      ],
      answer: 0,
      explain: { ru: "Если перекрёсток обозначен знаками, приоритет определяют знаки; правило помехи справа — только при их отсутствии. Fuente: Tráfico y Seguridad Vial, test nº 268.", en: "At a signed junction the signs decide priority; the give-way-to-the-right rule applies only without signs. Source: Tráfico y Seguridad Vial magazine, test no. 268." } },
    { es: "Si toma analgésicos narcóticos para tratar algún dolor intenso, lo más aconsejable es…",
      prompt: { ru: "Если вы принимаете наркотические обезболивающие от сильной боли, самое разумное…", en: "If you take narcotic painkillers for severe pain, the most advisable thing is…" },
      options: [
        { es: "conducir con normalidad, ya que no tienen efectos secundarios.", ru: "водить как обычно, побочных эффектов нет.", en: "to drive as normal, as they have no side effects." },
        { es: "conducir sólo de noche, ya que sus efectos secundarios son menores.", ru: "водить только ночью, эффекты меньше.", en: "to drive only at night, when side effects are smaller." },
        { es: "no conducir durante el tratamiento.", ru: "не водить во время лечения.", en: "not to drive during the treatment." }
      ],
      answer: 2,
      explain: { ru: "Наркотические анальгетики вызывают сонливость и замедляют реакцию; во время лечения лучше не водить. Fuente: Tráfico y Seguridad Vial, test nº 268.", en: "Narcotic painkillers cause drowsiness and slow reactions; better not to drive during treatment. Source: Tráfico y Seguridad Vial magazine, test no. 268." } },
    { es: "Respecto a la velocidad anormalmente reducida, ¿a qué velocidad mínima, salvo causa justificada, deberá circular una pick-up por una autovía?",
      prompt: { ru: "Какая минимальная скорость, без уважительной причины, для пикапа на autovía (во избежание аномально низкой скорости)?", en: "Regarding abnormally low speed, what minimum speed must a pick-up keep on an autovía, without a good reason?" },
      options: [
        { es: "60 km/h.", ru: "60 км/ч.", en: "60 km/h." },
        { es: "55 km/h.", ru: "55 км/ч.", en: "55 km/h." },
        { es: "70 km/h.", ru: "70 км/ч.", en: "70 km/h." }
      ],
      answer: 0,
      explain: { ru: "Минимальная скорость — половина максимальной для этой машины на этой дороге; для пикапа на autovía — 60 км/ч (RGC, ст. 49). Fuente: Tráfico y Seguridad Vial, test nº 268.", en: "The minimum is half the vehicle's maximum on that road; for a pick-up on an autovía it is 60 km/h (RGC art. 49). Source: Tráfico y Seguridad Vial magazine, test no. 268." } },
    { es: "Al circular marcha atrás debe tener en cuenta que…",
      prompt: { ru: "Двигаясь задним ходом, нужно учитывать, что…", en: "When reversing you must bear in mind that…" },
      options: [
        { es: "no debe recorrer más de 10 metros.", ru: "нельзя проезжать больше 10 метров.", en: "you may not cover more than 10 metres." },
        { es: "debe hacerlo con precaución, ya que pueden pasar personas por detrás del vehículo.", ru: "делать это нужно осторожно: сзади могут пройти люди.", en: "you must do it carefully, as people may pass behind the vehicle." },
        { es: "tiene prioridad sobre los peatones.", ru: "у вас приоритет перед пешеходами.", en: "you have priority over pedestrians." }
      ],
      answer: 1,
      explain: { ru: "Задним ходом едут медленно и осторожно, предварительно убедившись, что сзади никого нет (RGC, ст. 81). Fuente: Tráfico y Seguridad Vial, test nº 268.", en: "Reverse slowly and carefully after making sure nobody is behind (RGC art. 81). Source: Tráfico y Seguridad Vial magazine, test no. 268." } },
    { es: "Si un conductor se niega a realizar las pruebas de detección alcohólica, los agentes de tráfico, ¿pueden inmovilizar su vehículo?",
      prompt: { ru: "Если водитель отказывается от теста на алкоголь, могут ли полицейские задержать его машину?", en: "If a driver refuses the alcohol test, may the officers immobilise his vehicle?" },
      options: [
        { es: "Solo si presenta síntomas evidentes de haber consumido alcohol.", ru: "Только если есть явные признаки опьянения.", en: "Only if he shows clear signs of having drunk." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, y además está cometiendo un delito.", ru: "Да, и к тому же это преступление.", en: "Yes, and moreover he is committing a crime." }
      ],
      answer: 2,
      explain: { ru: "Отказ от теста — преступление (Уголовный кодекс, ст. 383), и машину могут задержать. Fuente: Tráfico y Seguridad Vial, test nº 268.", en: "Refusing the test is a crime (Criminal Code art. 383), and the vehicle may be immobilised. Source: Tráfico y Seguridad Vial magazine, test no. 268." } },
    { es: "¿Puede trasportar una carga indivisible que por sus dimensiones sobresalga lateralmente de la proyección en planta de una motocicleta?",
      prompt: { ru: "Можно ли перевозить неделимый груз, который по размерам выступает в стороны за габарит мотоцикла?", en: "May you carry an indivisible load that sticks out sideways beyond a motorcycle's outline?" },
      options: [
        { es: "Sí, ya que, aunque sobresalga más de 1 metro no compromete su estabilidad.", ru: "Да, даже если он выступает больше чем на 1 метр — устойчивость не страдает.", en: "Yes, even if it sticks out more than 1 metre it does not affect stability." },
        { es: "No, ya que dicha carga solamente puede sobresalir por la parte anterior y posterior.", ru: "Нет, такой груз может выступать только спереди и сзади.", en: "No, such a load may only stick out at the front and back." },
        { es: "Sí, siempre que no sobresalga más de 0,50 metros por cada lado de su eje longitudinal.", ru: "Да, если он выступает не больше чем на 0,50 м с каждой стороны от продольной оси.", en: "Yes, as long as it sticks out no more than 0.50 m on each side of the longitudinal axis." }
      ],
      answer: 2,
      explain: { ru: "У машин шириной меньше 1 метра груз не должен выступать в стороны больше чем на 0,50 м от продольной оси с каждой стороны. Он должен быть закреплён так, чтобы не нарушать устойчивость, не упасть и не сдвинуться; нельзя создавать опасность для других. Fuente: Tráfico y Seguridad Vial, test nº 268.", en: "On vehicles under 1 metre wide the load may not stick out more than 0.50 m on each side of the longitudinal axis. It must be secured so it cannot affect stability, fall or shift dangerously, and must not put others at risk. Source: Tráfico y Seguridad Vial magazine, test no. 268." } },
    { es: "Si conduce una motocicleta y hay niebla ligera, ¿qué alumbrado debe utilizar, además del de posición?",
      prompt: { ru: "Вы едете на мотоцикле в лёгком тумане. Какие огни включить кроме габаритов?", en: "Riding a motorcycle in light fog, which lights should you use besides the side light?" },
      options: [
        { es: "La luz antiniebla delantera, si la lleva, o la luz de corto o largo alcance.", ru: "Передний противотуманный, если есть, или ближний либо дальний свет.", en: "The front fog light, if fitted, or dipped or main beam." },
        { es: "La luz antiniebla delantera y trasera, si las lleva, y la luz de corto alcance.", ru: "Передний и задний противотуманные, если есть, и ближний свет.", en: "Front and rear fog lights, if fitted, and dipped beam." },
        { es: "La luz antiniebla trasera, si la lleva, y la luz de largo alcance.", ru: "Задний противотуманный, если есть, и дальний свет.", en: "The rear fog light, if fitted, and main beam." }
      ],
      answer: 0,
      explain: { ru: "Задний противотуманный — только при густом тумане; при лёгком — передний противотуманный или ближний/дальний (RGC, ст. 106). Fuente: Tráfico y Seguridad Vial, test nº 268.", en: "The rear fog light is only for thick fog; in light fog use the front fog light or dipped/main beam (RGC art. 106). Source: Tráfico y Seguridad Vial magazine, test no. 268." } },
    { es: "Buscar una dirección en el navegador GPS durante la conducción, ¿puede ser peligroso?",
      prompt: { ru: "Может ли быть опасно искать адрес в GPS-навигаторе во время езды?", en: "Can searching for an address on the GPS navigator while driving be dangerous?" },
      options: [
        { es: "Solo si el navegador GPS se encuentra muy alejado del asiento del conductor.", ru: "Только если навигатор далеко от водителя.", en: "Only if the GPS is far from the driver's seat." },
        { es: "No, porque ayuda a conducir con mayor seguridad.", ru: "Нет, он помогает ехать безопаснее.", en: "No, it helps you drive more safely." },
        { es: "Sí, porque el conductor se distrae.", ru: "Да, потому что водитель отвлекается.", en: "Yes, because the driver gets distracted." }
      ],
      answer: 2,
      explain: { ru: "Программировать навигатор можно только стоя; во время езды это отвлекает и запрещено. Fuente: Tráfico y Seguridad Vial, test nº 268.", en: "Program the GPS only when stopped; doing it while driving distracts you and is forbidden. Source: Tráfico y Seguridad Vial magazine, test no. 268." } },
    { es: "Una vez termine de adelantar el vehículo verde, ¿puede seguir circulando por el carril izquierdo?",
      prompt: { ru: "Когда зелёная машина закончит обгон, может ли она продолжать ехать по левой полосе?", en: "Once the green vehicle finishes overtaking, may it carry on in the left lane?" },
      options: [
        { es: "No, debe circular por el carril derecho.", ru: "Нет, она должна ехать по правой полосе.", en: "No, it must use the right lane." },
        { es: "No, porque por el segundo carril sólo se puede circular para adelantar.", ru: "Нет, потому что по второй полосе можно ехать только для обгона.", en: "No, because the second lane may only be used for overtaking." },
        { es: "Sí, porque en autopista se puede circular por cualquier carril.", ru: "Да, на автостраде можно ехать по любой полосе.", en: "Yes, on a motorway you may use any lane." }
      ],
      answer: 0,
      explain: { ru: "Вне населённого пункта после обгона нужно вернуться на правую полосу (RGC, ст. 31). Fuente: Tráfico y Seguridad Vial, test nº 269.", en: "Outside towns you must return to the right lane after overtaking (RGC art. 31). Source: Tráfico y Seguridad Vial magazine, test no. 269." } },
    { es: "En general, un conductor que sufre un trastorno depresivo…",
      prompt: { ru: "Как правило, водитель с депрессивным расстройством…", en: "In general, a driver suffering from a depressive disorder…" },
      options: [
        { es: "sufre distracciones.", ru: "отвлекается.", en: "gets distracted." },
        { es: "comete menos errores a la hora de tomar decisiones.", ru: "реже ошибается, принимая решения.", en: "makes fewer mistakes when deciding." },
        { es: "es más inseguro al volante.", ru: "менее уверен за рулём.", en: "is less confident at the wheel." }
      ],
      answer: 2,
      explain: { ru: "Так ответил журнал: депрессия делает водителя неуверенным; она также замедляет реакцию и ухудшает внимание. Fuente: Tráfico y Seguridad Vial, test nº 269.", en: "The magazine's answer: depression makes a driver insecure at the wheel; it also slows reactions and weakens attention. Source: Tráfico y Seguridad Vial magazine, test no. 269." } },
    { es: "En caso de accidente, ¿existe relación entre la velocidad de circulación y la gravedad de las lesiones de los ocupantes de un vehículo?",
      prompt: { ru: "При ДТП есть ли связь между скоростью и тяжестью травм у людей в машине?", en: "In an accident, is there a link between speed and how badly the occupants are injured?" },
      options: [
        { es: "Sí; a mayor velocidad menor es la probabilidad de sufrir lesiones graves.", ru: "Да: чем выше скорость, тем меньше вероятность тяжёлых травм.", en: "Yes: the higher the speed, the lower the chance of serious injury." },
        { es: "Sí; a mayor velocidad mayor es la probabilidad de sufrir lesiones graves.", ru: "Да: чем выше скорость, тем выше вероятность тяжёлых травм.", en: "Yes: the higher the speed, the higher the chance of serious injury." },
        { es: "No; la gravedad de las lesiones depende sólo de los sistemas de seguridad pasiva.", ru: "Нет: тяжесть зависит только от систем пассивной безопасности.", en: "No: it depends only on passive safety systems." }
      ],
      answer: 1,
      explain: { ru: "Энергия удара растёт с квадратом скорости, поэтому на большой скорости травмы тяжелее. Fuente: Tráfico y Seguridad Vial, test nº 269.", en: "Impact energy grows with the square of speed, so injuries are worse at higher speeds. Source: Tráfico y Seguridad Vial magazine, test no. 269." } },
    { es: "En un turismo con cinco plazas autorizadas, ¿se puede transportar a seis personas?",
      prompt: { ru: "Можно ли везти шесть человек в легковом автомобиле на пять мест?", en: "May a car with five authorised seats carry six people?" },
      options: [
        { es: "No, está prohibido.", ru: "Нет, это запрещено.", en: "No, it is forbidden." },
        { es: "Sí, siempre que no se supere la masa máxima autorizada.", ru: "Да, если не превышена разрешённая масса.", en: "Yes, if the maximum authorised mass is not exceeded." },
        { es: "Sólo si uno de los ocupantes, al menos, es menor de 14 años.", ru: "Только если хотя бы одному из пассажиров меньше 14 лет.", en: "Only if at least one occupant is under 14." }
      ],
      answer: 0,
      explain: { ru: "Число людей не может превышать число мест, указанных в документах машины (RGC, ст. 9). Fuente: Tráfico y Seguridad Vial, test nº 269.", en: "The number of occupants may not exceed the seats stated in the vehicle's papers (RGC art. 9). Source: Tráfico y Seguridad Vial magazine, test no. 269." } },
    { es: "El sueño y la fatiga, ¿cómo influyen en la conducción?",
      prompt: { ru: "Как сон и усталость влияют на вождение?", en: "How do sleepiness and fatigue affect driving?" },
      options: [
        { es: "Disminuyen el tiempo de reacción.", ru: "Уменьшают время реакции.", en: "They reduce reaction time." },
        { es: "Aumentan la capacidad de reacción.", ru: "Повышают способность реагировать.", en: "They increase the ability to react." },
        { es: "Aumentan la distancia de reacción.", ru: "Увеличивают путь реакции.", en: "They increase the reaction distance." }
      ],
      answer: 2,
      explain: { ru: "Уставший водитель реагирует позже, поэтому машина успевает проехать больше до начала торможения. Fuente: Tráfico y Seguridad Vial, test nº 269.", en: "A tired driver reacts later, so the car travels further before braking starts. Source: Tráfico y Seguridad Vial magazine, test no. 269." } },
    { es: "Si se ve implicado en un accidente de tráfico con posibilidad de muertos o heridos graves, ¿qué actuaciones, entre otras, debe llevar a cabo en la medida de lo posible?",
      prompt: { ru: "Если вы участник ДТП, где могут быть погибшие или тяжело раненые, что, среди прочего, нужно по возможности сделать?", en: "If you are involved in an accident with possible deaths or serious injuries, what must you do, as far as possible?" },
      options: [
        { es: "Seguir circulando, sin prestar ayuda a las víctimas ni avisar a la autoridad.", ru: "Ехать дальше, не помогая пострадавшим и не сообщая властям.", en: "Drive on without helping the victims or informing the authorities." },
        { es: "Detener el vehículo sin crear peligro, avisar a la autoridad o sus agentes y auxiliar a los heridos.", ru: "Остановиться, не создавая опасности, сообщить властям и помочь раненым.", en: "Stop without creating danger, inform the authorities and help the injured." },
        { es: "Detenerse, borrar las huellas del accidente y cambiar de sitio a los heridos y vehículos.", ru: "Остановиться, стереть следы ДТП и переместить раненых и машины.", en: "Stop, erase the traces of the accident and move the injured and the vehicles." }
      ],
      answer: 1,
      explain: { ru: "Участник ДТП обязан остановиться безопасно, вызвать помощь и помочь пострадавшим, не меняя следов без нужды (RGC, ст. 129). Fuente: Tráfico y Seguridad Vial, test nº 269.", en: "Anyone involved must stop safely, call for help and assist the victims, without altering the scene unnecessarily (RGC art. 129). Source: Tráfico y Seguridad Vial magazine, test no. 269." } },
    { es: "Cuando son víctimas de atropello, las lesiones más graves en los ciclistas, que pueden incluso provocar la muerte, se localizan en…",
      prompt: { ru: "Когда велосипедистов сбивает машина, самые тяжёлые травмы, вплоть до смерти, приходятся на…", en: "When cyclists are hit, the most serious injuries, which may even kill, are to…" },
      options: [
        { es: "las piernas.", ru: "ноги.", en: "the legs." },
        { es: "la cabeza.", ru: "голову.", en: "the head." },
        { es: "las manos.", ru: "руки (кисти).", en: "the hands." }
      ],
      answer: 1,
      explain: { ru: "Самые тяжёлые травмы у велосипедистов — травмы головы, поэтому так важен шлем. Fuente: Tráfico y Seguridad Vial, test nº 269.", en: "The most serious injuries to cyclists are head injuries, which is why a helmet matters. Source: Tráfico y Seguridad Vial magazine, test no. 269." } },
    { es: "En esta carretera convencional con arcén transitable, ¿por dónde debe circular un ciclomotor?",
      prompt: { ru: "Где должен ехать мопед по этой обычной загородной дороге с проезжей обочиной?", en: "On this conventional road with a usable hard shoulder, where must a moped ride?" },
      options: [
        { es: "Por el centro de la calzada o por el arcén de la derecha.", ru: "По центру проезжей части или по правой обочине.", en: "In the middle of the carriageway or on the right-hand shoulder." },
        { es: "Por la calzada, lo más cerca posible del borde derecho.", ru: "По проезжей части как можно ближе к правому краю.", en: "On the carriageway, as close as possible to the right edge." },
        { es: "Por el arcén de la derecha.", ru: "По правой обочине.", en: "On the right-hand shoulder." }
      ],
      answer: 2,
      explain: { ru: "Мопеды, велосипеды и другие медленные машины едут по правой обочине, если она проезжая (RGC, ст. 36). Fuente: Tráfico y Seguridad Vial, test nº 269.", en: "Mopeds, bicycles and other slow vehicles must ride on the right shoulder if it is usable (RGC art. 36). Source: Tráfico y Seguridad Vial magazine, test no. 269." } },
    { es: "En un control preventivo, ¿pueden los agentes someter a un conductor a una prueba de detección de estupefacientes?",
      prompt: { ru: "Могут ли полицейские на профилактическом контроле проверить водителя на наркотики?", en: "At a preventive checkpoint, may officers test a driver for drugs?" },
      options: [
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "Sólo si está implicado en un accidente.", ru: "Только если он замешан в ДТП.", en: "Only if he is involved in an accident." },
        { es: "No; es una prueba que sólo se puede realizar en un centro médico.", ru: "Нет: это делают только в медицинском учреждении.", en: "No: that test is done only at a medical centre." }
      ],
      answer: 0,
      explain: { ru: "Тесты на наркотики, как и на алкоголь, проводятся и на профилактических контролях (LSV, ст. 14). Fuente: Tráfico y Seguridad Vial, test nº 269.", en: "Drug tests, like alcohol tests, may be done at preventive checkpoints (LSV art. 14). Source: Tráfico y Seguridad Vial magazine, test no. 269." } },
    { es: "Circula por una calzada en la que debido a la niebla el pavimento está húmedo y resbaladizo. ¿Cómo debe ser la conducción?",
      prompt: { ru: "Из-за тумана покрытие мокрое и скользкое. Как нужно ехать?", en: "Because of fog the road surface is damp and slippery. How should you drive?" },
      options: [
        { es: "Dinámica y, a una velocidad alta para evitar que las ruedas patinen.", ru: "Динамично и быстро, чтобы колёса не скользили.", en: "Dynamically and fast so the wheels do not skid." },
        { es: "Suave, sin movimientos bruscos, aumentando la distancia de seguridad, además de reducir la velocidad.", ru: "Плавно, без резких движений, увеличив дистанцию и снизив скорость.", en: "Smoothly, without sudden movements, keeping a bigger gap and slowing down." },
        { es: "Igual que cuando la calzada está seca, ya que los neumáticos no pierden adherencia.", ru: "Как на сухой дороге, шины не теряют сцепления.", en: "As on a dry road, since tyres do not lose grip." }
      ],
      answer: 1,
      explain: { ru: "На мокрой скользкой дороге едут плавнее и медленнее и держат большую дистанцию. Fuente: Tráfico y Seguridad Vial, test nº 269.", en: "On a wet, slippery road drive more smoothly and slowly and keep a bigger gap. Source: Tráfico y Seguridad Vial magazine, test no. 269." } },
    { es: "En esta zona cebreada, ¿pueden los conductores circular o pararse sobre ella?",
      prompt: { ru: "Могут ли водители ехать или останавливаться на этой зоне со штриховкой (cebreado)?", en: "May drivers drive or stop on this hatched (cebreado) area?" },
      options: [
        { es: "Pararse sí pueden, pero circular está prohibido.", ru: "Останавливаться можно, ехать нельзя.", en: "They may stop on it but not drive on it." },
        { es: "Sí, todos los conductores pueden tanto pararse como circular sobre ella.", ru: "Да, можно и останавливаться, и ехать.", en: "Yes, they may both stop and drive on it." },
        { es: "No, no pueden ni circular ni pararse sobre ella.", ru: "Нет, нельзя ни ехать, ни останавливаться.", en: "No, they may neither drive nor stop on it." }
      ],
      answer: 2,
      explain: { ru: "На зону с белой косой штриховкой (cebreado) заезжать нельзя — ни ехать, ни останавливаться (RGC, ст. 171). Fuente: Tráfico y Seguridad Vial, test nº 269.", en: "A white hatched (cebreado) area may not be entered: neither driving nor stopping on it (RGC art. 171). Source: Tráfico y Seguridad Vial magazine, test no. 269." } },
    { es: "En poblado, ¿está permitido usar las advertencias acústicas?",
      prompt: { ru: "Можно ли в населённом пункте подавать звуковые сигналы?", en: "In a built-up area, may you use the horn?" },
      options: [
        { es: "Sí, para evitar un accidente o avisar a los demás usuarios de que se realiza un servicio de urgencia.", ru: "Да, чтобы избежать аварии или предупредить, что выполняется срочная служба.", en: "Yes, to avoid an accident or to warn others that you are on an emergency service." },
        { es: "Sí, exclusivamente para evitar un accidente.", ru: "Да, только чтобы избежать аварии.", en: "Yes, only to avoid an accident." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 0,
      explain: { ru: "В населённом пункте гудок разрешён, чтобы избежать аварии, и машинам, выполняющим срочную службу (RGC, ст. 110). Fuente: Tráfico y Seguridad Vial, test nº 269.", en: "In towns the horn is allowed to avoid an accident and by vehicles on an emergency service (RGC art. 110). Source: Tráfico y Seguridad Vial magazine, test no. 269." } },
    { es: "Conduce un turismo con un remolque de un solo eje. ¿Le afecta esta señal?",
      prompt: { ru: "Вы ведёте легковой автомобиль с одноосным прицепом. Касается ли вас этот знак?", en: "You are driving a car with a single-axle trailer. Does this sign apply to you?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, porque lleva un remolque de un eje.", ru: "Да, потому что у вас одноосный прицеп.", en: "Yes, because you are towing a single-axle trailer." },
        { es: "No, salvo que la M.M.A. del remolque supere la cifra indicada en la señal.", ru: "Нет, если разрешённая масса прицепа не больше указанной на знаке.", en: "No, unless the trailer's MAM exceeds the figure on the sign." }
      ],
      answer: 0,
      explain: { ru: "Знак R-112 запрещает въезд машинам с прицепом, кроме полуприцепов и одноосных прицепов. Fuente: Tráfico y Seguridad Vial, test nº 269.", en: "Sign R-112 bans vehicles with a trailer, except semi-trailers and single-axle trailers. Source: Tráfico y Seguridad Vial magazine, test no. 269." },
      sign: "R-112" },
    { es: "El consumo de alcohol, aunque sea en pequeñas cantidades...",
      prompt: { ru: "Употребление алкоголя, даже в небольших количествах…", en: "Drinking alcohol, even in small amounts…" },
      options: [
        { es: "no deteriora la capacidad para conducir.", ru: "не ухудшает способность водить.", en: "does not impair the ability to drive." },
        { es: "deteriora la capacidad para conducir.", ru: "ухудшает способность водить.", en: "impairs the ability to drive." },
        { es: "deteriora la capacidad para conducir sólo si se mezcla con alguna droga ilegal.", ru: "ухудшает её, только если смешать с наркотиком.", en: "impairs it only if mixed with an illegal drug." }
      ],
      answer: 1,
      explain: { ru: "Даже малые дозы алкоголя замедляют реакцию и ухудшают оценку риска. Fuente: Tráfico y Seguridad Vial, test nº 270.", en: "Even small amounts of alcohol slow reactions and weaken risk judgement. Source: Tráfico y Seguridad Vial magazine, test no. 270." } },
    { es: "Una persona mayor de edad, ¿puede transportar a un pasajero en una bicicleta que, por construcción, no pueda ser ocupada por más de una persona?",
      prompt: { ru: "Может ли взрослый перевозить пассажира на велосипеде, рассчитанном на одного человека?", en: "May an adult carry a passenger on a bicycle built for only one person?" },
      options: [
        { es: "Sólo si el conductor pedalea levantado y el pasajero va sentado en el sillín.", ru: "Только если водитель крутит педали стоя, а пассажир сидит на седле.", en: "Only if the rider pedals standing and the passenger sits on the saddle." },
        { es: "Sí, a un menor de hasta siete años en un asiento adicional homologado.", ru: "Да, ребёнка до семи лет в дополнительном сертифицированном сиденье.", en: "Yes, a child up to seven in an approved extra seat." },
        { es: "No, está prohibido.", ru: "Нет, это запрещено.", en: "No, it is forbidden." }
      ],
      answer: 1,
      explain: { ru: "Взрослый может везти на велосипеде ребёнка до 7 лет в дополнительном сертифицированном сиденье (RGC, ст. 12). Fuente: Tráfico y Seguridad Vial, test nº 270.", en: "An adult may carry a child up to seven in an approved extra seat (RGC art. 12). Source: Tráfico y Seguridad Vial magazine, test no. 270." } },
    { es: "Delante de un vado, esta señal prohíbe…",
      prompt: { ru: "Перед въездом в гараж (vado) этот знак запрещает…", en: "In front of a vado (driveway), this sign forbids…" },
      options: [
        { es: "la parada y el estacionamiento.", ru: "остановку и стоянку.", en: "stopping and parking." },
        { es: "únicamente la parada.", ru: "только остановку.", en: "only stopping." },
        { es: "solamente el estacionamiento.", ru: "только стоянку.", en: "only parking." }
      ],
      answer: 2,
      explain: { ru: "Знак R-308e «стоянка запрещена у въезда (vado)» запрещает только стоянку; кратковременная остановка не запрещена. Fuente: Tráfico y Seguridad Vial, test nº 270.", en: "Sign R-308e 'no parking at a driveway' forbids only parking; a brief stop is not banned. Source: Tráfico y Seguridad Vial magazine, test no. 270." },
      sign: "R-308e" },
    { es: "A falta de señalización, ¿cuál es la velocidad máxima permitida para una furgoneta cuando circule por una autovía que discurra dentro de poblado?",
      prompt: { ru: "Без знаков, какова максимальная скорость фургона на autovía, проходящей по населённому пункту?", en: "Without signs, what is the maximum speed for a van on an autovía running through a built-up area?" },
      options: [
        { es: "80 km/h.", ru: "80 км/ч.", en: "80 km/h." },
        { es: "100 km/h.", ru: "100 км/ч.", en: "100 km/h." },
        { es: "90 km/h.", ru: "90 км/ч.", en: "90 km/h." }
      ],
      answer: 0,
      explain: { ru: "На autopista и autovía внутри населённого пункта общий предел — 80 км/ч (RGC, ст. 50). Fuente: Tráfico y Seguridad Vial, test nº 270.", en: "On autopistas and autovías inside built-up areas the general limit is 80 km/h (RGC art. 50). Source: Tráfico y Seguridad Vial magazine, test no. 270." } },
    { es: "Los menores de edad de estatura igual o inferior a 135 centímetros deberán utilizar sistemas de retención infantil homologados debidamente adaptados a...",
      prompt: { ru: "Несовершеннолетние ростом 135 см и ниже должны пользоваться сертифицированными детскими удерживающими системами, подобранными по…", en: "Minors 135 cm tall or shorter must use approved child restraint systems suited to their…" },
      options: [
        { es: "su talla y edad.", ru: "росту и возрасту.", en: "height and age." },
        { es: "su edad y peso.", ru: "возрасту и весу.", en: "age and weight." },
        { es: "su talla y peso.", ru: "росту и весу.", en: "height and weight." }
      ],
      answer: 2,
      explain: { ru: "Детское кресло выбирают по росту и весу ребёнка (RGC, ст. 117). Fuente: Tráfico y Seguridad Vial, test nº 270.", en: "A child restraint is chosen according to the child's height and weight (RGC art. 117). Source: Tráfico y Seguridad Vial magazine, test no. 270." } },
    { es: "En un carril reservado para uso exclusivo del transporte público urbano, ¿se puede estacionar?",
      prompt: { ru: "Можно ли стоять на полосе, выделенной только для городского общественного транспорта?", en: "May you park in a lane reserved exclusively for urban public transport?" },
      options: [
        { es: "Sólo fuera del horario de servicio.", ru: "Только вне часов работы.", en: "Only outside service hours." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, se puede parar y estacionar.", ru: "Да, можно и останавливаться, и стоять.", en: "Yes, you may stop and park." }
      ],
      answer: 1,
      explain: { ru: "На полосах для общественного транспорта остановка и стоянка запрещены (RGC, ст. 91–94). Fuente: Tráfico y Seguridad Vial, test nº 270.", en: "Stopping and parking in public transport lanes are forbidden (RGC arts. 91–94). Source: Tráfico y Seguridad Vial magazine, test no. 270." } },
    { es: "Para los conductores y pasajeros de motocicletas, ¿tiene importancia el vestuario a utilizar?",
      prompt: { ru: "Важна ли одежда для водителей и пассажиров мотоциклов?", en: "Is clothing important for motorcycle riders and passengers?" },
      options: [
        { es: "No, es indiferente siempre que lleven el casco.", ru: "Нет, неважно, если есть шлем.", en: "No, it does not matter as long as they wear a helmet." },
        { es: "No, porque no aporta nada a la seguridad.", ru: "Нет, для безопасности она ничего не даёт.", en: "No, it adds nothing to safety." },
        { es: "Sí, es fundamental porque el cuerpo está directamente expuesto a las inclemencias del tiempo.", ru: "Да, очень, ведь тело прямо открыто погоде.", en: "Yes, it is essential because the body is directly exposed to the weather." }
      ],
      answer: 2,
      explain: { ru: "Мотоциклист ничем не защищён: экипировка бережёт от непогоды и от травм при падении. Fuente: Tráfico y Seguridad Vial, test nº 270.", en: "A rider has no shell: the gear protects from weather and from injuries in a fall. Source: Tráfico y Seguridad Vial magazine, test no. 270." } },
    { es: "¿Es posible ahorrar combustible evitando cambios de marcha innecesarios?",
      prompt: { ru: "Можно ли экономить топливо, избегая лишних переключений передач?", en: "Can you save fuel by avoiding unnecessary gear changes?" },
      options: [
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No, en ningún vaso.", ru: "Нет, ни в коем случае.", en: "No, in no case." },
        { es: "Depende de si el vehículo tiene motor diésel o de gasolina.", ru: "Зависит от того, дизель или бензин.", en: "It depends on whether the engine is diesel or petrol." }
      ],
      answer: 0,
      explain: { ru: "Плавная езда без лишних переключений, разгонов и торможений снижает расход топлива. Fuente: Tráfico y Seguridad Vial, test nº 270.", en: "Smooth driving without needless gear changes, acceleration or braking reduces fuel use. Source: Tráfico y Seguridad Vial magazine, test no. 270." } },
    { es: "¿Qué debe hacer el conductor del vehículo ante las indicaciones que le realiza el agente del vehículo policial con la señal V-1 encendida?",
      prompt: { ru: "Что должен сделать водитель, когда полицейский из машины с включённым маячком V-1 подаёт ему знаки?", en: "What must a driver do when the officer in a police vehicle with its V-1 light on signals to him?" },
      options: [
        { es: "Reducir la marcha.", ru: "Снизить скорость.", en: "Slow down." },
        { es: "Detenerse en el lado derecho, delante del vehículo policial.", ru: "Остановиться справа, впереди полицейской машины.", en: "Stop on the right, in front of the police vehicle." },
        { es: "Detenerse en el lado izquierdo, detrás del vehículo policial.", ru: "Остановиться слева, позади полицейской машины.", en: "Stop on the left, behind the police vehicle." }
      ],
      answer: 1,
      explain: { ru: "По указанию полиции из машины останавливаются справа, впереди полицейского автомобиля (RGC, ст. 143). Fuente: Tráfico y Seguridad Vial, test nº 270.", en: "When signalled by police from a vehicle, you stop on the right, ahead of the police car (RGC art. 143). Source: Tráfico y Seguridad Vial magazine, test no. 270." } },
    { es: "En un accidente de tráfico se produce el efecto submarino cuando...",
      prompt: { ru: "При ДТП «эффект подныривания» (efecto submarino) — это когда…", en: "In an accident the 'submarining effect' happens when…" },
      options: [
        { es: "el cuerpo del ocupante del vehículo se desliza por debajo del cinturón de seguridad.", ru: "тело человека выскальзывает под ремнём безопасности.", en: "the occupant's body slides under the seat belt." },
        { es: "el reposacabezas está mal regulado y el cuello sufre un violento movimiento de vaivén.", ru: "подголовник плохо отрегулирован и шею резко бросает вперёд-назад.", en: "the head restraint is badly adjusted and the neck whips back and forth." },
        { es: "el conductor recibe un impacto directo y fuerte del airbag en la cara.", ru: "водитель получает сильный прямой удар подушкой в лицо.", en: "the driver gets a hard direct hit in the face from the airbag." }
      ],
      answer: 0,
      explain: { ru: "Эффект подныривания — тело уходит под поясную часть ремня; поэтому ремень должен лежать низко на тазовых костях. Fuente: Tráfico y Seguridad Vial, test nº 270.", en: "Submarining is when the body slides under the lap belt; that is why the belt must sit low on the hip bones. Source: Tráfico y Seguridad Vial magazine, test no. 270." } },
    { es: "En condiciones meteorológicas especialmente desfavorables, como en caso de fuerte granizada, ¿qué precauciones, entre otras, debe tomar?",
      prompt: { ru: "В особенно плохую погоду, например при сильном граде, какие меры, среди прочих, нужно принять?", en: "In especially bad weather, such as a heavy hailstorm, what precautions should you take, among others?" },
      options: [
        { es: "Disminuir la velocidad, evitando pisar el freno, y aumentar la distancia de seguridad.", ru: "Снизить скорость, избегая нажатия на тормоз, и увеличить дистанцию.", en: "Slow down, avoiding braking, and increase the following distance." },
        { es: "Acercarse al vehículo de delante y encender el dispositivo de preseñalización de peligro.", ru: "Подъехать ближе к переднему и включить знак аварийной остановки.", en: "Get closer to the vehicle ahead and switch on the hazard warning device." },
        { es: "Circular con cambios frecuentes de dirección para evitar que se produzca “aquaplaning”.", ru: "Часто менять направление, чтобы не было аквапланирования.", en: "Change direction often to avoid aquaplaning." }
      ],
      answer: 0,
      explain: { ru: "Град — скользкая дорога и плохая видимость: снижайте скорость плавно, без резких торможений, и держите большую дистанцию. Fuente: Tráfico y Seguridad Vial, test nº 270.", en: "Hail means a slippery road and poor visibility: slow down smoothly without harsh braking and keep a bigger gap. Source: Tráfico y Seguridad Vial magazine, test no. 270." } },
    { es: "¿Qué indica el panel situado bajo la señal?",
      prompt: { ru: "Что означает табличка под знаком?", en: "What does the panel under the sign indicate?" },
      options: [
        { es: "La distancia al final de un tramo con curvas peligrosas.", ru: "Расстояние до конца участка с опасными поворотами.", en: "The distance to the end of a stretch of dangerous bends." },
        { es: "La longitud de un tramo con curvas peligrosas.", ru: "Длину участка с опасными поворотами.", en: "The length of a stretch of dangerous bends." },
        { es: "La distancia al inicio de un tramo con curvas peligrosas.", ru: "Расстояние до начала участка с опасными поворотами.", en: "The distance to the start of a stretch of dangerous bends." }
      ],
      answer: 2,
      explain: { ru: "Табличка с одной цифрой в метрах под предупреждающим знаком показывает расстояние до начала опасности. Fuente: Tráfico y Seguridad Vial, test nº 270.", en: "A panel with a distance in metres under a warning sign shows how far away the hazard starts. Source: Tráfico y Seguridad Vial magazine, test no. 270." } },
    { es: "Si conducimos de noche para evitar los atascos debemos tener en cuenta que...",
      prompt: { ru: "Если ехать ночью, чтобы избежать пробок, нужно учитывать, что…", en: "If we drive at night to avoid traffic jams, we must bear in mind that…" },
      options: [
        { es: "el sueño o la somnolencia al volante aparecen con mayor facilidad.", ru: "сон и сонливость за рулём появляются легче.", en: "sleep and drowsiness at the wheel set in more easily." },
        { es: "no es necesario descansar en trayectos largos, ya que durante la noche no aparece la fatiga.", ru: "отдыхать в долгой поездке не нужно, ночью нет усталости.", en: "there is no need to rest on long trips, since fatigue does not appear at night." },
        { es: "la oscuridad impide la aparición del sueño, pero favorece la aparición de la fatiga.", ru: "темнота мешает сну, но способствует усталости.", en: "darkness prevents sleep but encourages fatigue." }
      ],
      answer: 0,
      explain: { ru: "Ночью организм настроен на сон, поэтому сонливость за рулём наступает быстрее. Fuente: Tráfico y Seguridad Vial, test nº 270.", en: "At night the body is set to sleep, so drowsiness at the wheel comes on sooner. Source: Tráfico y Seguridad Vial magazine, test no. 270." } },
    { es: "Siempre que sea posible, ¿cómo debe inmovilizar un vehículo que se ha visto implicado en un accidente?",
      prompt: { ru: "Как по возможности обездвижить машину, попавшую в ДТП?", en: "Whenever possible, how should you immobilise a vehicle involved in an accident?" },
      options: [
        { es: "Con unos calzos o con cualquier elemento que sirva como tal.", ru: "Подложить противооткатные упоры или что-то вместо них.", en: "With wheel chocks or anything that can serve as one." },
        { es: "Cortando el contacto y echando el freno de mano.", ru: "Выключить зажигание и поставить на стояночный тормоз.", en: "By switching off the ignition and applying the handbrake." },
        { es: "Desconectando los bornes de la batería.", ru: "Отсоединив клеммы аккумулятора.", en: "By disconnecting the battery terminals." }
      ],
      answer: 1,
      explain: { ru: "После ДТП выключают зажигание (меньше риск пожара) и затягивают стояночный тормоз. Fuente: Tráfico y Seguridad Vial, test nº 270.", en: "After an accident switch off the ignition (less fire risk) and apply the handbrake. Source: Tráfico y Seguridad Vial magazine, test no. 270." } },
    { es: "Un conductor que señaliza un cambio de carril, ¿tiene preferencia sobre los conductores de los vehículos que circulan por el carril al que se pretende desplazar?",
      prompt: { ru: "Водитель, показывающий смену полосы, имеет ли приоритет перед теми, кто едет по полосе, куда он хочет перейти?", en: "Does a driver who signals a lane change have priority over the vehicles in the lane he wants to move into?" },
      options: [
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sólo si va a adelantar a un vehículo de grandes dimensiones.", ru: "Только если он обгоняет крупную машину.", en: "Only if he is going to overtake a large vehicle." }
      ],
      answer: 1,
      explain: { ru: "Указатель поворота лишь предупреждает: при смене полосы уступают тем, кто уже по ней едет (RGC, ст. 74). Fuente: Tráfico y Seguridad Vial, test nº 271.", en: "The indicator only warns: when changing lanes you give way to those already in it (RGC art. 74). Source: Tráfico y Seguridad Vial magazine, test no. 271." } },
    { es: "¿Qué debe hacer el conductor de un vehículo que, por motivos de emergencia, quede inmovilizado dentro de un paso inferior?",
      prompt: { ru: "Что должен сделать водитель, если по экстренной причине его машина остановилась в подземном проезде (туннеле)?", en: "What must a driver do if, because of an emergency, his vehicle is stuck inside an underpass?" },
      options: [
        { es: "Permanecer en el interior del vehículo.", ru: "Оставаться в машине.", en: "Stay inside the vehicle." },
        { es: "Inmovilizar el vehículo lo más cerca posible del borde izquierdo de la calzada.", ru: "Поставить машину как можно ближе к левому краю.", en: "Place the vehicle as close as possible to the left edge." },
        { es: "Solicitar auxilio a través del poste de socorro más próximo, si existiese.", ru: "Вызвать помощь с ближайшего аварийного телефона, если он есть.", en: "Call for help from the nearest SOS post, if there is one." }
      ],
      answer: 2,
      explain: { ru: "В туннеле при вынужденной остановке выключают двигатель, включают аварийку и вызывают помощь с поста SOS (RGC, ст. 51). Fuente: Tráfico y Seguridad Vial, test nº 271.", en: "When forced to stop in a tunnel switch off the engine, turn on the hazard lights and call for help from the SOS post (RGC art. 51). Source: Tráfico y Seguridad Vial magazine, test no. 271." } },
    { es: "Conducir durante mucho tiempo a una velocidad elevada...",
      prompt: { ru: "Долгая езда на высокой скорости…", en: "Driving for a long time at high speed…" },
      options: [
        { es: "disminuye la aparición de la fatiga pero aumenta la agresividad.", ru: "задерживает усталость, но повышает агрессивность.", en: "delays fatigue but increases aggressiveness." },
        { es: "acelera la aparición de la fatiga y, por tanto, disminuye la agresividad.", ru: "ускоряет усталость и поэтому снижает агрессивность.", en: "speeds up fatigue and therefore lowers aggressiveness." },
        { es: "acelera la aparición de la fatiga y hace que aumente la agresividad.", ru: "ускоряет усталость и повышает агрессивность.", en: "speeds up fatigue and increases aggressiveness." }
      ],
      answer: 2,
      explain: { ru: "Высокая скорость требует большего напряжения: усталость приходит раньше, а водитель становится агрессивнее. Fuente: Tráfico y Seguridad Vial, test nº 271.", en: "High speed demands more effort: fatigue comes sooner and the driver becomes more aggressive. Source: Tráfico y Seguridad Vial magazine, test no. 271." } },
    { es: "Factores individuales como la edad, la fatiga o el estado físico del conductor, ¿pueden hacer que los efectos secundarios de los medicamentos sean diferentes en cada persona?",
      prompt: { ru: "Могут ли возраст, усталость или физическое состояние водителя менять побочные эффекты лекарств у разных людей?", en: "Can individual factors such as age, fatigue or physical condition make medicines' side effects differ from person to person?" },
      options: [
        { es: "No, los efectos secundarios son los mismos para todas las personas.", ru: "Нет, побочные эффекты у всех одинаковые.", en: "No, side effects are the same for everyone." },
        { es: "Sí, los efectos secundarios pueden variar en cada persona.", ru: "Да, они могут отличаться у каждого.", en: "Yes, they may vary from person to person." },
        { es: "Sólo si durante el tratamiento no se siguen los consejos del médico.", ru: "Только если не следовать советам врача.", en: "Only if the doctor's advice is not followed." }
      ],
      answer: 1,
      explain: { ru: "Один и тот же препарат по-разному действует на разных людей; читайте инструкцию и спрашивайте врача. Fuente: Tráfico y Seguridad Vial, test nº 271.", en: "The same medicine acts differently on different people; read the leaflet and ask your doctor. Source: Tráfico y Seguridad Vial magazine, test no. 271." } },
    { es: "Si se lleva instalado un navegador GPS hay que tener en cuenta que...",
      prompt: { ru: "Если в машине установлен GPS-навигатор, нужно учитывать, что…", en: "If a GPS navigator is fitted, bear in mind that…" },
      options: [
        { es: "mientras se conduce no es conveniente apartar la vista del navegador.", ru: "во время езды не стоит отрывать взгляд от навигатора.", en: "while driving you should not take your eyes off the GPS." },
        { es: "las indicaciones del navegador prevalecen sobre la señalización de la vía.", ru: "указания навигатора важнее дорожных знаков.", en: "the GPS directions prevail over road signs." },
        { es: "el criterio del conductor debe prevalecer sobre las indicaciones del navegador.", ru: "решение водителя важнее указаний навигатора.", en: "the driver's judgement must prevail over the GPS directions." }
      ],
      answer: 2,
      explain: { ru: "Навигатор — лишь помощник; знаки и решение водителя важнее его указаний. Fuente: Tráfico y Seguridad Vial, test nº 271.", en: "The GPS is only an aid; road signs and the driver's judgement come first. Source: Tráfico y Seguridad Vial magazine, test no. 271." } },
    { es: "Se debe desactivar el airbag frontal cuando en el asiento correspondiente al copiloto...",
      prompt: { ru: "Фронтальную подушку безопасности нужно отключить, когда на переднем пассажирском месте…", en: "The front airbag must be deactivated when, in the front passenger seat…" },
      options: [
        { es: "viaje una mujer embarazada.", ru: "едет беременная женщина.", en: "a pregnant woman is travelling." },
        { es: "se instale un dispositivo de retención infantil orientado hacia atrás.", ru: "установлено детское кресло против хода движения.", en: "a rear-facing child seat is fitted." },
        { es: "se instale un dispositivo de retención infantil orientado hacia delante.", ru: "установлено детское кресло по ходу движения.", en: "a forward-facing child seat is fitted." }
      ],
      answer: 1,
      explain: { ru: "Раскрывшаяся подушка бьёт в спинку кресла, установленного против хода, — это смертельно опасно для ребёнка. Fuente: Tráfico y Seguridad Vial, test nº 271.", en: "A deploying airbag strikes the back of a rear-facing seat, which can kill the child. Source: Tráfico y Seguridad Vial magazine, test no. 271." } },
    { es: "En una autopista que transcurre por zona urbana, ¿a qué velocidad máxima puede circular un turismo si no existe señalización?",
      prompt: { ru: "На autopista, проходящей по городской территории, с какой максимальной скоростью может ехать легковой автомобиль, если знаков нет?", en: "On an autopista running through an urban area, what is the maximum speed for a car if there are no signs?" },
      options: [
        { es: "A 80 km/h.", ru: "80 км/ч.", en: "80 km/h." },
        { es: "A 120 km/h.", ru: "120 км/ч.", en: "120 km/h." },
        { es: "A 100 km/h.", ru: "100 км/ч.", en: "100 km/h." }
      ],
      answer: 0,
      explain: { ru: "Autopista и autovía внутри населённого пункта — 80 км/ч, если знаки не говорят иное (RGC, ст. 50). Fuente: Tráfico y Seguridad Vial, test nº 271.", en: "Autopistas and autovías inside built-up areas: 80 km/h unless signs say otherwise (RGC art. 50). Source: Tráfico y Seguridad Vial magazine, test no. 271." } },
    { es: "¿Puede rebasar la velocidad máxima indicada en la señal?",
      prompt: { ru: "Можно ли превысить максимальную скорость, указанную на знаке?", en: "May you exceed the maximum speed shown on the sign?" },
      options: [
        { es: "Sí, en 20 km/h para adelantar.", ru: "Да, на 20 км/ч для обгона.", en: "Yes, by 20 km/h to overtake." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, mientras lo permitan las circunstancias.", ru: "Да, если позволяют обстоятельства.", en: "Yes, as long as conditions allow." }
      ],
      answer: 1,
      explain: { ru: "Ограничение на знаке превышать нельзя; разрешение +20 км/ч при обгоне отменено в 2022 году. Fuente: Tráfico y Seguridad Vial, test nº 271.", en: "The limit on a sign may not be exceeded; the old +20 km/h overtaking allowance was abolished in 2022. Source: Tráfico y Seguridad Vial magazine, test no. 271." },
      sign: "R-301" },
    { es: "Si debido a la lluvia intensa, en una vía interurbana no se distingue un vehículo de color negro a 50 metros de distancia, ¿es posible circular con el alumbrado de largo alcance encendido?",
      prompt: { ru: "Из-за сильного дождя на загородной дороге чёрную машину не видно с 50 метров. Можно ли ехать с дальним светом?", en: "Because of heavy rain on an interurban road you cannot make out a black car at 50 metres. May you drive with main beam?" },
      options: [
        { es: "No, está prohibido.", ru: "Нет, запрещено.", en: "No, it is forbidden." },
        { es: "Sí, porque la vía está insuficientemente iluminada.", ru: "Да, потому что дорога недостаточно освещена.", en: "Yes, because the road is insufficiently lit." },
        { es: "Sólo se puede encender la luz de cruce y la antiniebla delantera.", ru: "Можно только ближний и передний противотуманный.", en: "Only dipped beam and the front fog light are allowed." }
      ],
      answer: 1,
      explain: { ru: "Дорога считается недостаточно освещённой, если чёрную машину не видно с 50 м; тогда дальний свет разрешён, если никого не слепит. Fuente: Tráfico y Seguridad Vial, test nº 271.", en: "A road counts as insufficiently lit when a black car cannot be seen at 50 m; then main beam is allowed if it dazzles no one. Source: Tráfico y Seguridad Vial magazine, test no. 271." } },
    { es: "La parte externa de uno de los neumáticos de su vehículo presenta una deformación en forma de bulto, ¿es recomendable sustituir el neumático lo antes posible?",
      prompt: { ru: "На боковине одной из шин появилась выпуклость (грыжа). Стоит ли поменять шину как можно скорее?", en: "The outer side of one of your tyres has a bulge. Should you replace the tyre as soon as possible?" },
      options: [
        { es: "Sí, porque aumenta la posibilidad de sufrir un reventón.", ru: "Да, потому что растёт риск взрыва шины.", en: "Yes, because the risk of a blow-out increases." },
        { es: "No. Se puede seguir circulando con seguridad ya que no supone un riesgo importante.", ru: "Нет, можно спокойно ездить, большого риска нет.", en: "No, you can keep driving safely; it is not a major risk." },
        { es: "No; no es necesario sustituirlo ya que siempre se puede reparar en un taller especializado.", ru: "Нет, её всегда можно отремонтировать в мастерской.", en: "No, it can always be repaired in a specialised workshop." }
      ],
      answer: 0,
      explain: { ru: "Грыжа означает повреждённый корд; такая шина может лопнуть, её нужно заменить. Fuente: Tráfico y Seguridad Vial, test nº 271.", en: "A bulge means the cord is damaged; the tyre may burst and must be replaced. Source: Tráfico y Seguridad Vial magazine, test no. 271." } },
    { es: "El agente balancea una luz amarilla; ¿qué indica?",
      prompt: { ru: "Полицейский покачивает жёлтым фонарём. Что это означает?", en: "An officer swings a yellow light. What does it mean?" },
      options: [
        { es: "Precaución al circular.", ru: "Ехать осторожно.", en: "Drive with care." },
        { es: "El carril por el que se debe circular.", ru: "Полосу, по которой нужно ехать.", en: "The lane you must use." },
        { es: "Obliga a detenerse a los conductores hacia los que dirige la luz.", ru: "Обязывает остановиться тех, на кого направлен свет.", en: "Drivers it is aimed at must stop." }
      ],
      answer: 2,
      explain: { ru: "Покачивание красным или жёлтым фонарём означает «стоп» для тех, на кого направлен свет (RGC, ст. 143). Fuente: Tráfico y Seguridad Vial, test nº 271.", en: "Swinging a red or yellow light means stop for those it is aimed at (RGC art. 143). Source: Tráfico y Seguridad Vial magazine, test no. 271." } },
    { es: "Los carriles reversibles están delimitados por marcas longitudinales…",
      prompt: { ru: "Реверсивные полосы ограничены продольной разметкой…", en: "Reversible lanes are bounded by longitudinal markings that are…" },
      options: [
        { es: "discontinuas con una separación sensiblemente más corta.", ru: "прерывистой с заметно более короткими промежутками.", en: "broken, with noticeably shorter gaps." },
        { es: "discontinuas simples a ambos lados.", ru: "одинарной прерывистой с обеих сторон.", en: "single broken lines on both sides." },
        { es: "dobles discontinuas a ambos lados.", ru: "двойной прерывистой с обеих сторон.", en: "double broken lines on both sides." }
      ],
      answer: 2,
      explain: { ru: "Реверсивная полоса обозначается двойной прерывистой линией с каждой стороны. Fuente: Tráfico y Seguridad Vial, test nº 271.", en: "A reversible lane is marked by a double broken line on each side. Source: Tráfico y Seguridad Vial magazine, test no. 271." } },
    { es: "Conforme a los datos de accidentalidad, en los períodos de vacaciones y los fines de semana...",
      prompt: { ru: "По статистике аварийности, в отпускные периоды и в выходные…", en: "According to accident data, during holiday periods and at weekends…" },
      options: [
        { es: "no varía de forma importante el número de accidentes con víctimas mortales.", ru: "число ДТП с погибшими существенно не меняется.", en: "the number of fatal accidents does not change much." },
        { es: "aumenta el número de accidentes con víctimas mortales.", ru: "число ДТП с погибшими растёт.", en: "the number of fatal accidents rises." },
        { es: "disminuye el número de accidentes con víctimas mortales.", ru: "число ДТП с погибшими падает.", en: "the number of fatal accidents falls." }
      ],
      answer: 1,
      explain: { ru: "В отпуска и выходные больше дальних поездок, усталости и алкоголя, и смертельных ДТП больше. Fuente: Tráfico y Seguridad Vial, test nº 271.", en: "Holidays and weekends bring more long trips, fatigue and alcohol, and more fatal crashes. Source: Tráfico y Seguridad Vial magazine, test no. 271." } },
    { es: "Si su turismo ha pasado favorablemente la primera ITV, ¿cuándo tiene que pasar la próxima inspección?",
      prompt: { ru: "Ваш легковой автомобиль успешно прошёл первый техосмотр (ITV). Когда следующий?", en: "Your car has passed its first ITV (roadworthiness test). When is the next one due?" },
      options: [
        { es: "Dentro de 2 años.", ru: "Через 2 года.", en: "In 2 years." },
        { es: "Dentro de 4 años.", ru: "Через 4 года.", en: "In 4 years." },
        { es: "Al año siguiente.", ru: "Через год.", en: "Next year." }
      ],
      answer: 0,
      explain: { ru: "Легковой: первый ITV в 4 года, затем каждые 2 года до 10 лет, потом ежегодно. Fuente: Tráfico y Seguridad Vial, test nº 271.", en: "Cars: first ITV at 4 years, then every 2 years until 10, then every year. Source: Tráfico y Seguridad Vial magazine, test no. 271." } },
    { es: "En una calzada de un solo sentido de circulación, ¿dónde debe situarse para cambiar de dirección a la izquierda?",
      prompt: { ru: "На проезжей части с односторонним движением где нужно встать, чтобы повернуть налево?", en: "On a one-way carriageway, where must you position yourself to turn left?" },
      options: [
        { es: "Junto al borde izquierdo de la calzada.", ru: "У левого края проезжей части.", en: "Next to the left edge of the carriageway." },
        { es: "Junto al borde derecho de la calzada.", ru: "У правого края проезжей части.", en: "Next to the right edge of the carriageway." },
        { es: "En una calzada de un solo sentido no se puede cambiar de dirección.", ru: "На односторонней дороге поворачивать нельзя.", en: "You cannot turn on a one-way carriageway." }
      ],
      answer: 0,
      explain: { ru: "На односторонней дороге для левого поворота занимают крайнее левое положение (RGC, ст. 75). Fuente: Tráfico y Seguridad Vial, test nº 272.", en: "On a one-way road you move to the far left to turn left (RGC art. 75). Source: Tráfico y Seguridad Vial magazine, test no. 272." } },
    { es: "¿Está permitido realizar una parada en una autovía o autopista?",
      prompt: { ru: "Можно ли останавливаться на autovía или autopista?", en: "Is stopping allowed on an autovía or autopista?" },
      options: [
        { es: "Sí, en la mediana o en el arcén, indistintamente.", ru: "Да, на разделительной полосе или на обочине — всё равно.", en: "Yes, on the central reservation or the shoulder, either." },
        { es: "Sólo si el arcén es transitable y su anchura es superior a 1,5 metros.", ru: "Только если обочина проезжая и шире 1,5 м.", en: "Only if the shoulder is usable and wider than 1.5 m." },
        { es: "No, excepto en las zonas habilitadas.", ru: "Нет, кроме специально отведённых мест.", en: "No, except in designated areas." }
      ],
      answer: 2,
      explain: { ru: "На autopista и autovía останавливаться можно только в отведённых местах; обочина — лишь для экстренных случаев. Fuente: Tráfico y Seguridad Vial, test nº 272.", en: "On autopistas and autovías you may stop only in designated areas; the shoulder is for emergencies only. Source: Tráfico y Seguridad Vial magazine, test no. 272." } },
    { es: "¿Debe entrar en una intersección en una situación en la que el tráfico esté tan saturado que, al detenerse, posiblemente obstaculice la circulación transversal?",
      prompt: { ru: "Нужно ли въезжать на перекрёсток, если движение настолько плотное, что, остановившись, вы, вероятно, перекроете поперечное движение?", en: "Should you enter a junction when traffic is so heavy that if you stop you will probably block crossing traffic?" },
      options: [
        { es: "Sólo si conduce un vehículo de servicio público, como un taxi.", ru: "Только на машине общественного пользования, например такси.", en: "Only if driving a public service vehicle such as a taxi." },
        { es: "Sí, siempre que tenga prioridad de paso.", ru: "Да, если у вас приоритет.", en: "Yes, as long as you have priority." },
        { es: "No, aunque tenga prioridad de paso.", ru: "Нет, даже если у вас приоритет.", en: "No, even if you have priority." }
      ],
      answer: 2,
      explain: { ru: "Даже имея приоритет, нельзя въезжать на перекрёсток, если рискуете там застрять (RGC, ст. 59). Fuente: Tráfico y Seguridad Vial, test nº 272.", en: "Even with priority you must not enter a junction if you might get stuck there (RGC art. 59). Source: Tráfico y Seguridad Vial magazine, test no. 272." } },
    { es: "Cuando un conductor no supere la tasa máxima de alcohol permitida, el agente de tráfico, ¿puede realizarle una segunda prueba?",
      prompt: { ru: "Если водитель не превышает допустимый уровень алкоголя, может ли полицейский провести второй тест?", en: "If a driver is under the alcohol limit, can the officer give him a second test?" },
      options: [
        { es: "No, en ningún caso.", ru: "Нет, ни в коем случае.", en: "No, never." },
        { es: "Sí, si muestra signos evidentes de encontrarse bajo los efectos del alcohol.", ru: "Да, если у него явные признаки опьянения.", en: "Yes, if he shows clear signs of being under the influence." },
        { es: "Sólo si está implicado en un accidente.", ru: "Только если он замешан в ДТП.", en: "Only if he is involved in an accident." }
      ],
      answer: 1,
      explain: { ru: "При явных признаках опьянения второй тест возможен и при результате ниже нормы (RGC, ст. 23). Fuente: Tráfico y Seguridad Vial, test nº 272.", en: "With clear signs of intoxication a second test is possible even after a result under the limit (RGC art. 23). Source: Tráfico y Seguridad Vial magazine, test no. 272." } },
    { es: "¿Qué debe hacer si empieza a llover con intensidad mientras conduce una motocicleta?",
      prompt: { ru: "Что делать, если на мотоцикле вас застал сильный дождь?", en: "What should you do if heavy rain starts while you are riding a motorcycle?" },
      options: [
        { es: "Moderar la velocidad, e incluso detenerse si fuera necesario.", ru: "Снизить скорость, а при необходимости остановиться.", en: "Slow down and even stop if necessary." },
        { es: "Circular pegado a los vehículos pesados para protegerse de la lluvia.", ru: "Ехать вплотную за тяжёлыми машинами, чтобы укрыться от дождя.", en: "Ride close behind heavy vehicles for shelter from the rain." },
        { es: "Aumentar la velocidad para llegar antes al destino.", ru: "Прибавить скорость, чтобы скорее доехать.", en: "Speed up to arrive sooner." }
      ],
      answer: 0,
      explain: { ru: "На мокрой дороге сцепление хуже, а видимость ниже: снижают скорость, а при необходимости останавливаются в безопасном месте. Fuente: Tráfico y Seguridad Vial, test nº 272.", en: "On a wet road grip and visibility are lower: slow down, and stop in a safe place if needed. Source: Tráfico y Seguridad Vial magazine, test no. 272." } },
    { es: "Entre los efectos negativos de la velocidad se encuentra el efecto túnel, en el que el conductor...",
      prompt: { ru: "Среди вредных эффектов скорости — «туннельный эффект», при котором водитель…", en: "Among the harmful effects of speed is the tunnel effect, in which the driver…" },
      options: [
        { es: "sólo percibe el centro de la calzada y deja de ver los laterales.", ru: "видит только центр дороги и перестаёт видеть края.", en: "sees only the centre of the road and stops seeing the sides." },
        { es: "tiene la falsa sensación de que circula a velocidad reducida.", ru: "ошибочно чувствует, что едет медленно.", en: "has the false feeling of driving slowly." },
        { es: "percibe mejor los laterales de la vía que el centro de la calzada.", ru: "лучше видит края дороги, чем центр.", en: "sees the sides better than the centre." }
      ],
      answer: 0,
      explain: { ru: "Чем выше скорость, тем уже поле зрения: водитель видит только центр и пропускает то, что сбоку. Fuente: Tráfico y Seguridad Vial, test nº 272.", en: "The higher the speed, the narrower the field of vision: the driver sees only the centre and misses the sides. Source: Tráfico y Seguridad Vial magazine, test no. 272." } },
    { es: "¿Cómo debe colocar el navegador GPS portátil en el vehículo?",
      prompt: { ru: "Куда нужно ставить переносной GPS-навигатор в машине?", en: "Where should you fit a portable GPS navigator in the vehicle?" },
      options: [
        { es: "Debajo del volante, tan cerca del suelo como sea posible.", ru: "Под рулём, как можно ближе к полу.", en: "Under the steering wheel, as close to the floor as possible." },
        { es: "Justo detrás del volante, a la altura de los ojos del conductor.", ru: "Прямо за рулём, на уровне глаз водителя.", en: "Just behind the wheel, at the driver's eye level." },
        { es: "Donde no entorpezca ni la visión ni el despliegue del airbag", ru: "Там, где он не мешает обзору и раскрытию подушки безопасности.", en: "Where it obstructs neither vision nor the airbag deployment." }
      ],
      answer: 2,
      explain: { ru: "Навигатор не должен закрывать обзор и мешать подушке безопасности. Fuente: Tráfico y Seguridad Vial, test nº 272.", en: "The GPS must not block the view or get in the way of the airbag. Source: Tráfico y Seguridad Vial magazine, test no. 272." } },
    { es: "¿Cuál es una de las principales causas de los accidentes de las personas mayores?",
      prompt: { ru: "Какова одна из главных причин аварий у пожилых людей?", en: "What is one of the main causes of accidents involving older people?" },
      options: [
        { es: "El deterioro de las capacidades psicomotoras.", ru: "Ухудшение психомоторных способностей.", en: "Deterioration of psychomotor abilities." },
        { es: "El aumento de la visión periférica.", ru: "Улучшение периферического зрения.", en: "Improved peripheral vision." },
        { es: "Una mejor percepción y análisis de los riesgos.", ru: "Лучшее восприятие и анализ рисков.", en: "Better perception and analysis of risks." }
      ],
      answer: 0,
      explain: { ru: "С возрастом ухудшаются зрение, слух и реакция, что повышает риск. Fuente: Tráfico y Seguridad Vial, test nº 272.", en: "With age sight, hearing and reactions decline, raising the risk. Source: Tráfico y Seguridad Vial magazine, test no. 272." } },
    { es: "Todo conductor implicado en un accidente de tráfico, ¿está obligado a detenerse para esclarecer los hechos?",
      prompt: { ru: "Должен ли каждый водитель, попавший в ДТП, остановиться, чтобы помочь выяснить обстоятельства?", en: "Must every driver involved in an accident stop to help clarify what happened?" },
      options: [
        { es: "Sólo si es culpable del accidente.", ru: "Только если он виноват.", en: "Only if he is to blame." },
        { es: "Sí, pero de forma que no cree un nuevo peligro para la circulación.", ru: "Да, но так, чтобы не создать новой опасности.", en: "Yes, but without creating a new danger to traffic." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 1,
      explain: { ru: "Все участники ДТП обязаны остановиться безопасно и помочь выяснить обстоятельства (RGC, ст. 129). Fuente: Tráfico y Seguridad Vial, test nº 272.", en: "Everyone involved must stop safely and help clarify the facts (RGC art. 129). Source: Tráfico y Seguridad Vial magazine, test no. 272." } },
    { es: "Si circula con la presión de inflado de los neumáticos descompensada, ¿aumenta el riesgo de perder el control del vehículo?",
      prompt: { ru: "Если давление в шинах разное, растёт ли риск потерять управление?", en: "If tyre pressures are unbalanced, does the risk of losing control increase?" },
      options: [
        { es: "Sí, ya que la frenada es irregular y se reduce la estabilidad del vehículo.", ru: "Да, торможение неравномерное, а устойчивость падает.", en: "Yes, braking becomes uneven and stability drops." },
        { es: "No, sobre todo si está descompensada por eje mejora la adherencia, incluso, cuando la calzada está resbaladiza.", ru: "Нет, особенно разница по оси улучшает сцепление даже на скользкой дороге.", en: "No; an imbalance per axle actually improves grip, even on slippery roads." },
        { es: "No, porque aumenta el área de contacto del neumático con la calzada y facilita el rodaje.", ru: "Нет, площадь контакта растёт и машине легче катиться.", en: "No, the contact patch grows and the car rolls more easily." }
      ],
      answer: 0,
      explain: { ru: "Разное давление на одной оси уводит машину в сторону и делает торможение неравномерным. Fuente: Tráfico y Seguridad Vial, test nº 272.", en: "Different pressures on one axle make the car pull to one side and brake unevenly. Source: Tráfico y Seguridad Vial magazine, test no. 272." } },
    { es: "Si lleva a un pasajero en una motocicleta, al frenar...",
      prompt: { ru: "Если на мотоцикле пассажир, то при торможении…", en: "With a passenger on a motorcycle, when braking…" },
      options: [
        { es: "es más difícil que se bloquee la rueda trasera.", ru: "заднее колесо блокируется труднее.", en: "the rear wheel is less likely to lock." },
        { es: "el peso se desplaza hacia la parte trasera de la motocicleta.", ru: "вес смещается к задней части мотоцикла.", en: "the weight shifts to the back of the motorcycle." },
        { es: "es conveniente no soltar el acelerador y accionar sólo el freno trasero.", ru: "лучше не отпускать газ и тормозить только задним тормозом.", en: "it is best not to release the throttle and use only the rear brake." }
      ],
      answer: 0,
      explain: { ru: "Пассажир добавляет вес на заднее колесо, поэтому оно блокируется труднее; но тормозной путь растёт. Fuente: Tráfico y Seguridad Vial, test nº 272.", en: "The passenger adds weight on the rear wheel so it locks less easily; braking distance, however, increases. Source: Tráfico y Seguridad Vial magazine, test no. 272." } },
    { es: "Si, debido a la lluvia, el pavimento está deslizante, ¿qué precauciones se deben tomar?",
      prompt: { ru: "Если из-за дождя покрытие скользкое, какие меры нужно принять?", en: "If the road is slippery because of rain, what precautions should you take?" },
      options: [
        { es: "Moderar la velocidad y, si fuera preciso, detener el vehículo.", ru: "Снизить скорость, а при необходимости остановиться.", en: "Slow down and, if necessary, stop the vehicle." },
        { es: "Mantener la velocidad y estar atento al cumplimiento de la señalización vertical.", ru: "Держать скорость и следить за знаками.", en: "Keep your speed and watch the vertical signs." },
        { es: "Ninguna, ya que las circunstancias de la vía son idénticas para todos los usuarios.", ru: "Никаких, условия одинаковы для всех.", en: "None, as conditions are the same for everyone." }
      ],
      answer: 0,
      explain: { ru: "Скорость подбирают по состоянию дороги; при плохом сцеплении её снижают (RGC, ст. 45). Fuente: Tráfico y Seguridad Vial, test nº 272.", en: "Speed must suit the road; with poor grip you slow down (RGC art. 45). Source: Tráfico y Seguridad Vial magazine, test no. 272." } },
    { es: "¿Cuál de los tres factores de riesgo es el que está menos implicado entre las causas de los accidentes de tráfico?",
      prompt: { ru: "Какой из трёх факторов риска меньше всего связан с причинами ДТП?", en: "Which of the three risk factors is least involved in causing road accidents?" },
      options: [
        { es: "El factor vía y su entorno.", ru: "Дорога и её окружение.", en: "The road and its surroundings." },
        { es: "El factor humano.", ru: "Человеческий фактор.", en: "The human factor." },
        { es: "El factor vehículo.", ru: "Транспортное средство.", en: "The vehicle." }
      ],
      answer: 2,
      explain: { ru: "Главная причина ДТП — человек; техническое состояние машины реже всего бывает причиной. Fuente: Tráfico y Seguridad Vial, test nº 272.", en: "The human factor causes most accidents; the vehicle is the least frequent cause. Source: Tráfico y Seguridad Vial magazine, test no. 272." } },
    { es: "¿Está permitido circular con un vehículo cuyas placas de matrícula presentan obstáculos que impiden o dificultan su lectura e identificación?",
      prompt: { ru: "Можно ли ехать на машине, номерные знаки которой закрыты так, что их трудно или невозможно прочитать?", en: "May you drive a vehicle whose number plates are obstructed so they are hard or impossible to read?" },
      options: [
        { es: "No; el conductor debe verificar que las placas de matrícula se pueden leer correctamente.", ru: "Нет: водитель должен убедиться, что номера читаются.", en: "No: the driver must check the plates can be read properly." },
        { es: "Sí, siempre que la placa de matrícula delantera se pueda leer correctamente.", ru: "Да, если передний номер читается.", en: "Yes, as long as the front plate is readable." },
        { es: "Sí, siempre que el vehículo solo circule por vías urbanas y travesías.", ru: "Да, если ездить только в городе и по travesías.", en: "Yes, if the vehicle only uses urban roads and travesías." }
      ],
      answer: 0,
      explain: { ru: "Номера должны быть всегда читаемы; проверять это обязан водитель. Fuente: Tráfico y Seguridad Vial, test nº 273.", en: "Plates must always be readable; checking this is the driver's duty. Source: Tráfico y Seguridad Vial magazine, test no. 273." } },
    { es: "Respecto al uso del cinturón de seguridad, como norma general, el ocupante de un turismo distinto del conductor está obligado a...",
      prompt: { ru: "Что касается ремня безопасности, как правило, пассажир легкового автомобиля обязан…", en: "As a rule, regarding the seat belt, a car occupant other than the driver must…" },
      options: [
        { es: "llevarlo puesto y sin abrochar, excepto si viaja en la plaza delantera.", ru: "надеть его, но не застёгивать, если не сидит спереди.", en: "wear it unbuckled, unless in the front seat." },
        { es: "llevarlo puesto y abrochado solo en vías interurbanas.", ru: "надеть и застегнуть только на загородных дорогах.", en: "wear it buckled only on interurban roads." },
        { es: "llevarlo puesto y correctamente abrochado.", ru: "надеть и правильно застегнуть.", en: "wear it properly fastened." }
      ],
      answer: 2,
      explain: { ru: "Ремень обязателен для всех мест и на всех дорогах (RGC, ст. 117). Fuente: Tráfico y Seguridad Vial, test nº 273.", en: "Seat belts are compulsory in every seat and on every road (RGC art. 117). Source: Tráfico y Seguridad Vial magazine, test no. 273." } },
    { es: "En vías interurbanas con tres carriles para el mismo sentido, ¿le está permitido circular por el carril izquierdo a un turismo con remolque?",
      prompt: { ru: "На загородной дороге с тремя полосами в одном направлении может ли легковой автомобиль с прицепом ехать по левой полосе?", en: "On an interurban road with three lanes in the same direction, may a car with a trailer use the left lane?" },
      options: [
        { es: "Sí, cuando la longitud del conjunto no supere los 7 metros.", ru: "Да, если длина состава не превышает 7 метров.", en: "Yes, if the combination is no longer than 7 metres." },
        { es: "Sí, pero solo para adelantar a otros vehículos.", ru: "Да, но только для обгона.", en: "Yes, but only to overtake." },
        { es: "No, en ningún caso.", ru: "Нет, ни в коем случае.", en: "No, never." }
      ],
      answer: 0,
      explain: { ru: "Запрет на левую полосу касается грузовиков и составов длиннее 7 м (RGC, ст. 31). Fuente: Tráfico y Seguridad Vial, test nº 273.", en: "The ban on the left lane applies to lorries and combinations over 7 m long (RGC art. 31). Source: Tráfico y Seguridad Vial magazine, test no. 273." } },
    { es: "Cuando se adelante a vehículos de tracción animal, fuera de poblado, la separación lateral...",
      prompt: { ru: "При обгоне гужевых повозок вне населённого пункта боковой интервал…", en: "When overtaking horse-drawn vehicles outside towns, the lateral gap…" },
      options: [
        { es: "no debe ser inferior a 1,5 metros.", ru: "должен быть не меньше 1,5 метра.", en: "must be no less than 1.5 metres." },
        { es: "debe ser inferior a 1,5 metros, en todos los casos.", ru: "должен быть меньше 1,5 метра во всех случаях.", en: "must be less than 1.5 metres in all cases." },
        { es: "debe ser siempre proporcional a la anchura y características de la vía.", ru: "должен быть пропорционален ширине и особенностям дороги.", en: "must always be proportional to the width and features of the road." }
      ],
      answer: 0,
      explain: { ru: "При обгоне велосипедов, гужевых повозок, пешеходов и животных вне населённого пункта — не менее 1,5 м (RGC, ст. 85). Fuente: Tráfico y Seguridad Vial, test nº 273.", en: "When overtaking cyclists, animal-drawn vehicles, pedestrians or animals outside towns keep at least 1.5 m (RGC art. 85). Source: Tráfico y Seguridad Vial magazine, test no. 273." } },
    { es: "¿Qué alumbrado deberá dejar encendido, como norma general, el conductor de un vehículo inmovilizado entre la puesta y la salida del sol en el arcén de una travesía insuficientemente iluminada?",
      prompt: { ru: "Какие огни, как правило, должны гореть у машины, стоящей от заката до рассвета на обочине плохо освещённой travesía?", en: "Which lights should, as a rule, be left on in a vehicle stationary between sunset and sunrise on the shoulder of a poorly lit travesía?" },
      options: [
        { es: "Ninguno.", ru: "Никакие.", en: "None." },
        { es: "Las luces de emergencia.", ru: "Аварийная сигнализация.", en: "The hazard lights." },
        { es: "Las luces de posición.", ru: "Габаритные огни.", en: "The side lights." }
      ],
      answer: 2,
      explain: { ru: "Стоящая ночью на плохо освещённом участке машина обозначается габаритными (или стояночными) огнями. Fuente: Tráfico y Seguridad Vial, test nº 273.", en: "A vehicle stationary at night on a poorly lit stretch shows its side (or parking) lights. Source: Tráfico y Seguridad Vial magazine, test no. 273." } },
    { es: "¿De qué peligro advierte esta señal?",
      prompt: { ru: "О какой опасности предупреждает этот знак?", en: "What danger does this sign warn of?" },
      options: [
        { es: "Proximidad de un escalón lateral o desnivel a lo largo de un tramo de vía.", ru: "Боковой уступ или перепад вдоль участка дороги.", en: "A side step or drop along a stretch of road." },
        { es: "Proximidad de pavimento deslizante por hielo o nieve.", ru: "Скользкое покрытие из-за льда или снега.", en: "A surface slippery with ice or snow." },
        { es: "Proximidad de una zona de la calzada cuyo pavimento puede resultar muy deslizante.", ru: "Участок, где покрытие может быть очень скользким.", en: "A stretch where the surface may be very slippery." }
      ],
      answer: 2,
      explain: { ru: "Знак P-19 — скользкое покрытие; для льда и снега есть отдельный знак P-34. Fuente: Tráfico y Seguridad Vial, test nº 273.", en: "Sign P-19 means slippery road; ice and snow have their own sign, P-34. Source: Tráfico y Seguridad Vial magazine, test no. 273." },
      sign: "P-19" },
    { es: "Esta señal, ¿prohíbe proseguir la marcha si no dispone de cadenas para nieve?",
      prompt: { ru: "Запрещает ли этот знак ехать дальше без цепей противоскольжения?", en: "Does this sign forbid going on without snow chains?" },
      options: [
        { es: "Sí, en cualquier caso.", ru: "Да, в любом случае.", en: "Yes, in any case." },
        { es: "No, ya que esta señal solo recomienda la utilización de cadenas.", ru: "Нет, он только рекомендует цепи.", en: "No, it only recommends chains." },
        { es: "Sí, a no ser que disponga de otros dispositivos autorizados, igual de eficaces.", ru: "Да, если у вас нет других разрешённых устройств такой же эффективности.", en: "Yes, unless you have other equally effective approved devices." }
      ],
      answer: 2,
      explain: { ru: "Знак R-412 запрещает ехать без цепей или других разрешённых средств (например, зимних шин), если они признаны равноценными. Fuente: Tráfico y Seguridad Vial, test nº 273.", en: "Sign R-412 forbids continuing without chains or other approved equally effective devices (such as suitable winter tyres). Source: Tráfico y Seguridad Vial magazine, test no. 273." },
      sign: "R-412" },
    { es: "¿Qué alteración provoca con mayor frecuencia el consumo de alcohol en el comportamiento del conductor?",
      prompt: { ru: "Какое изменение поведения водителя чаще всего вызывает алкоголь?", en: "Which change in a driver's behaviour does alcohol cause most often?" },
      options: [
        { es: "Respuestas impulsivas y agresivas ante los demás conductores.", ru: "Импульсивные и агрессивные реакции на других водителей.", en: "Impulsive and aggressive responses to other drivers." },
        { es: "Disminución del tiempo de reacción.", ru: "Уменьшение времени реакции.", en: "A shorter reaction time." },
        { es: "Mayor facilidad para percibir los semáforos y las señales luminosas.", ru: "Лучшее восприятие светофоров и световых сигналов.", en: "Seeing traffic lights and light signals more easily." }
      ],
      answer: 0,
      explain: { ru: "Алкоголь растормаживает: водитель чаще рискует и ведёт себя агрессивнее, а реакция замедляется. Fuente: Tráfico y Seguridad Vial, test nº 273.", en: "Alcohol lowers inhibitions: the driver takes more risks and becomes more aggressive, while reactions slow down. Source: Tráfico y Seguridad Vial magazine, test no. 273." } },
    { es: "Si ha dormido mal o no ha dormido lo suficiente debe tener en cuenta que...",
      prompt: { ru: "Если вы плохо или мало спали, нужно учитывать, что…", en: "If you have slept badly or too little, bear in mind that…" },
      options: [
        { es: "conducir por una autovía durante horas impide la aparición del sueño.", ru: "часы езды по autovía не дают заснуть.", en: "driving for hours on an autovía keeps sleep away." },
        { es: "no se encuentra en perfectas condiciones para conducir.", ru: "вы не в лучшей форме для вождения.", en: "you are not in perfect condition to drive." },
        { es: "una taza de café elimina la fatiga y le ayuda a concentrarse.", ru: "чашка кофе снимает усталость и помогает сосредоточиться.", en: "a cup of coffee removes fatigue and helps you concentrate." }
      ],
      answer: 1,
      explain: { ru: "Недосып ухудшает внимание и реакцию; кофе лишь ненадолго маскирует сонливость. Fuente: Tráfico y Seguridad Vial, test nº 273.", en: "Lack of sleep weakens attention and reactions; coffee only masks drowsiness briefly. Source: Tráfico y Seguridad Vial magazine, test no. 273." } },
    { es: "¿Con qué dos factores suelen relacionarse muchos de los accidentes más graves que sufren los jóvenes conductores?",
      prompt: { ru: "С какими двумя факторами обычно связаны многие тяжёлые аварии молодых водителей?", en: "Which two factors are many of the most serious accidents of young drivers usually linked to?" },
      options: [
        { es: "Con el consumo de alcohol y drogas y una actitud prudente al volante.", ru: "С алкоголем и наркотиками и осторожным стилем вождения.", en: "Alcohol and drugs, and a cautious attitude at the wheel." },
        { es: "Con la falta de experiencia al volante y el consumo de alcohol y drogas.", ru: "С недостатком опыта и употреблением алкоголя и наркотиков.", en: "Lack of experience, and alcohol and drug use." },
        { es: "Con la velocidad excesiva y una adecuada percepción del riesgo.", ru: "С превышением скорости и правильным восприятием риска.", en: "Excessive speed and a correct perception of risk." }
      ],
      answer: 1,
      explain: { ru: "Для молодых водителей типичны неопытность и алкоголь или наркотики, часто вместе. Fuente: Tráfico y Seguridad Vial, test nº 273.", en: "Inexperience combined with alcohol or drugs is typical of young drivers' serious crashes. Source: Tráfico y Seguridad Vial magazine, test no. 273." } },
    { es: "¿Cuál de las siguientes circunstancias hace que aumente el consumo de combustible?",
      prompt: { ru: "Что из перечисленного увеличивает расход топлива?", en: "Which of these increases fuel consumption?" },
      options: [
        { es: "Circular con las ventanillas del vehículo subidas.", ru: "Езда с поднятыми стёклами.", en: "Driving with the windows closed." },
        { es: "Circular con el vehículo muy cargado.", ru: "Езда с сильно загруженной машиной.", en: "Driving a heavily loaded vehicle." },
        { es: "Circular con unos neumáticos que carezcan de dibujo.", ru: "Езда на шинах без протектора.", en: "Driving on tyres with no tread." }
      ],
      answer: 1,
      explain: { ru: "Чем тяжелее машина, тем больше нужно энергии на разгон, и расход растёт. Fuente: Tráfico y Seguridad Vial, test nº 273.", en: "The heavier the vehicle, the more energy it needs to accelerate, so it uses more fuel. Source: Tráfico y Seguridad Vial magazine, test no. 273." } },
    { es: "¿Cuál de las siguientes razones puede explicar que el vehículo sea el factor de riesgo que aparece en un grado menor como causa principal de los accidentes de tráfico?",
      prompt: { ru: "Чем можно объяснить, что транспортное средство — фактор риска, реже всего становящийся главной причиной ДТП?", en: "Which reason can explain why the vehicle is the risk factor least often the main cause of accidents?" },
      options: [
        { es: "A las importantes mejoras técnicas introducidas en su diseño y construcción.", ru: "Большими техническими улучшениями в конструкции и производстве.", en: "The major technical improvements in design and construction." },
        { es: "A que la edad media de los vehículos es cada vez mayor.", ru: "Тем, что средний возраст машин всё больше.", en: "The fact that the average age of vehicles keeps rising." },
        { es: "A que en los últimos 20 años, los kilómetros recorridos han disminuido año tras año.", ru: "Тем, что за 20 лет пробег из года в год снижается.", en: "The fact that over the last 20 years distances driven have fallen year after year." }
      ],
      answer: 0,
      explain: { ru: "Современные машины гораздо надёжнее и безопаснее, поэтому технические причины ДТП редки. Fuente: Tráfico y Seguridad Vial, test nº 273.", en: "Modern vehicles are much more reliable and safer, so technical causes of accidents are rare. Source: Tráfico y Seguridad Vial magazine, test no. 273." } },
    { es: "Para mantener la seguridad, ¿qué elementos se deben revisar periódicamente y con mayor frecuencia que el resto de componentes del vehículo?",
      prompt: { ru: "Какие элементы для безопасности нужно проверять регулярно и чаще остальных?", en: "For safety, which items must be checked regularly and more often than the rest of the vehicle?" },
      options: [
        { es: "Los neumáticos, el sistema de frenado y los amortiguadores.", ru: "Шины, тормоза и амортизаторы.", en: "The tyres, brakes and shock absorbers." },
        { es: "Las luces, la batería y las llantas.", ru: "Фары, аккумулятор и диски колёс.", en: "The lights, battery and wheel rims." },
        { es: "El filtro del aire, la dirección y los retrovisores.", ru: "Воздушный фильтр, рулевое управление и зеркала.", en: "The air filter, steering and mirrors." }
      ],
      answer: 0,
      explain: { ru: "Шины, тормоза и амортизаторы — «треугольник безопасности», от них зависят сцепление и торможение. Fuente: Tráfico y Seguridad Vial, test nº 273.", en: "Tyres, brakes and shock absorbers form the 'safety triangle': grip and braking depend on them. Source: Tráfico y Seguridad Vial magazine, test no. 273." } },
    { es: "De día es obligatorio encender el alumbrado que corresponda cuando se circule...",
      prompt: { ru: "Днём включать соответствующий свет обязательно, когда едешь…", en: "In daytime the appropriate lights must be switched on when driving…" },
      options: [
        { es: "por un puente móvil.", ru: "по разводному мосту.", en: "over a swing bridge." },
        { es: "por un carril reservado a vehículos con alta ocupación (VAO).", ru: "по полосе VAO (для машин с высокой загрузкой).", en: "in a high-occupancy (VAO) lane." },
        { es: "por pasos inferiores o tramos de vía afectados por la señal \"Túnel\".", ru: "по подземным проездам или участкам со знаком «Туннель».", en: "through underpasses or stretches covered by the 'Tunnel' sign." }
      ],
      answer: 2,
      explain: { ru: "В туннелях и подземных проездах свет обязателен и днём (RGC, ст. 106). Fuente: Tráfico y Seguridad Vial, test nº 274.", en: "Lights are compulsory in tunnels and underpasses even by day (RGC art. 106). Source: Tráfico y Seguridad Vial magazine, test no. 274." } },
    { es: "Entre los siguientes tipos de señales, ¿cuál es el orden de prioridad?",
      prompt: { ru: "Каков порядок приоритета между этими видами сигналов?", en: "What is the order of priority between these kinds of signals?" },
      options: [
        { es: "Señales verticales, agentes y semáforos.", ru: "Вертикальные знаки, агенты, светофоры.", en: "Vertical signs, officers, traffic lights." },
        { es: "Agentes, semáforos y señales verticales.", ru: "Агенты, светофоры, вертикальные знаки.", en: "Officers, traffic lights, vertical signs." },
        { es: "Semáforos, agentes y señales verticales.", ru: "Светофоры, агенты, вертикальные знаки.", en: "Traffic lights, officers, vertical signs." }
      ],
      answer: 1,
      explain: { ru: "Сначала агенты, затем временные знаки, светофоры, вертикальные знаки и разметка (RGC, ст. 133). Fuente: Tráfico y Seguridad Vial, test nº 274.", en: "Officers first, then temporary signs, traffic lights, vertical signs and road markings (RGC art. 133). Source: Tráfico y Seguridad Vial magazine, test no. 274." } },
    { es: "Esta señal prohíbe la entrada a...",
      prompt: { ru: "Этот знак запрещает въезд…", en: "This sign prohibits entry to…" },
      options: [
        { es: "ciclos y ciclomotores.", ru: "велосипедам и мопедам.", en: "cycles and mopeds." },
        { es: "ciclos.", ru: "велосипедам.", en: "cycles." },
        { es: "todos los vehículos de dos ruedas.", ru: "всем двухколёсным транспортным средствам.", en: "all two-wheeled vehicles." }
      ],
      answer: 1,
      explain: { ru: "Знак R-114 запрещает въезд только велосипедам (ciclos); для мопедов есть R-105. Fuente: Tráfico y Seguridad Vial, test nº 274.", en: "Sign R-114 bans only cycles; mopeds have their own sign, R-105. Source: Tráfico y Seguridad Vial magazine, test no. 274." },
      sign: "R-114" },
    { es: "En general, bajo los efectos de la cocaína el conductor...",
      prompt: { ru: "Как правило, под действием кокаина водитель…", en: "In general, under the effects of cocaine a driver…" },
      options: [
        { es: "es inseguro e infravalora sus capacidades al volante.", ru: "неуверен и недооценивает свои способности.", en: "is insecure and underrates his abilities." },
        { es: "se concentra mejor, por lo que sus decisiones son más seguras.", ru: "лучше сосредоточен, поэтому принимает более безопасные решения.", en: "concentrates better, so his decisions are safer." },
        { es: "es competitivo e impulsivo.", ru: "склонен к соперничеству и импульсивен.", en: "is competitive and impulsive." }
      ],
      answer: 2,
      explain: { ru: "Кокаин делает водителя самоуверенным, импульсивным и склонным к риску. Fuente: Tráfico y Seguridad Vial, test nº 274.", en: "Cocaine makes the driver overconfident, impulsive and prone to risk. Source: Tráfico y Seguridad Vial magazine, test no. 274." } },
    { es: "Las embarazadas, ¿están obligadas a utilizar el cinturón de seguridad?",
      prompt: { ru: "Обязаны ли беременные пристёгиваться ремнём безопасности?", en: "Are pregnant women required to wear a seat belt?" },
      options: [
        { es: "Sí, como norma general.", ru: "Да, как правило.", en: "Yes, as a general rule." },
        { es: "No, porque es peligroso para el feto.", ru: "Нет, это опасно для плода.", en: "No, because it is dangerous for the foetus." },
        { es: "Solo si no les dificulta los movimientos para conducir.", ru: "Только если ремень не мешает водить.", en: "Only if it does not restrict their movements when driving." }
      ],
      answer: 0,
      explain: { ru: "Беременные пристёгиваются, как и все; ремень проводят под животом по тазовым костям. Fuente: Tráfico y Seguridad Vial, test nº 274.", en: "Pregnant women must buckle up like everyone; the lap belt goes below the bump, over the hip bones. Source: Tráfico y Seguridad Vial magazine, test no. 274." } },
    { es: "El calor afecta negativamente a las capacidades para conducir con seguridad. Un conductor que se encuentra bajo sus efectos normalmente:",
      prompt: { ru: "Жара плохо влияет на способности водителя. Водитель под её действием обычно…", en: "Heat harms the ability to drive safely. A driver affected by it usually…" },
      options: [
        { es: "Tarda más en reaccionar y es menos agresivo.", ru: "реагирует медленнее и менее агрессивен.", en: "reacts more slowly and is less aggressive." },
        { es: "Tarda más en reaccionar y es más agresivo.", ru: "реагирует медленнее и более агрессивен.", en: "reacts more slowly and is more aggressive." },
        { es: "Tarda menos en reaccionar y es más agresivo.", ru: "реагирует быстрее и более агрессивен.", en: "reacts faster and is more aggressive." }
      ],
      answer: 1,
      explain: { ru: "В жару реакция замедляется, а раздражительность и агрессивность растут; поддерживайте в салоне комфортную температуру и делайте перерывы. Fuente: Tráfico y Seguridad Vial, test nº 274.", en: "In heat reactions slow down while irritability and aggressiveness grow; keep the cabin comfortably cool and take breaks. Source: Tráfico y Seguridad Vial magazine, test no. 274." } },
    { es: "Cuando la luz de marcha atrás esté averiada, ¿cómo debe indicar que va a dar marcha atrás?",
      prompt: { ru: "Если не работает фонарь заднего хода, как показать, что вы поедете назад?", en: "If the reversing light is broken, how should you show that you are going to reverse?" },
      options: [
        { es: "Moviendo el brazo de arriba abajo.", ru: "Движением руки вверх-вниз.", en: "By moving the arm up and down." },
        { es: "Con el brazo extendido y la palma de la mano hacia atrás.", ru: "Вытянутой рукой ладонью назад.", en: "With the arm held out and the palm facing backwards." },
        { es: "Advirtiéndolo con el claxon.", ru: "Звуковым сигналом.", en: "By sounding the horn." }
      ],
      answer: 1,
      explain: { ru: "Задний ход показывают рукой, вытянутой горизонтально ладонью назад (RGC, ст. 113). Fuente: Tráfico y Seguridad Vial, test nº 274.", en: "Reversing is shown with the arm held out horizontally, palm backwards (RGC art. 113). Source: Tráfico y Seguridad Vial magazine, test no. 274." } },
    { es: "En una vía interurbana con un carril por sentido, ¿dónde se colocará un ciclomotor para girar a la izquierda, si no existe carril específico para realizar el giro?",
      prompt: { ru: "На загородной дороге с одной полосой в каждом направлении, где встанет мопед для поворота налево, если отдельной полосы для поворота нет?", en: "On an interurban road with one lane each way and no turning lane, where should a moped wait to turn left?" },
      options: [
        { es: "En el eje de la calzada, sin invadir el carril de sentido contrario.", ru: "На оси дороги, не заезжая на встречную полосу.", en: "On the centre line, without entering the opposite lane." },
        { es: "En la parte central del carril por el que circule.", ru: "В центре своей полосы.", en: "In the middle of its lane." },
        { es: "A la derecha, fuera de la calzada siempre que sea posible.", ru: "Справа, по возможности вне проезжей части.", en: "On the right, off the carriageway whenever possible." }
      ],
      answer: 2,
      explain: { ru: "Велосипеды и мопеды поворачивают налево с правой стороны, по возможности вне проезжей части (RGC, ст. 76). Fuente: Tráfico y Seguridad Vial, test nº 274.", en: "Cycles and mopeds turn left from the right-hand side, off the carriageway if possible (RGC art. 76). Source: Tráfico y Seguridad Vial magazine, test no. 274." } },
    { es: "Esta marca transversal discontinua, ¿obliga a detenerse antes de franquearla?",
      prompt: { ru: "Обязывает ли эта прерывистая поперечная линия останавливаться перед ней?", en: "Does this broken transverse line oblige you to stop before crossing it?" },
      options: [
        { es: "Solo si hay visibilidad reducida.", ru: "Только при плохой видимости.", en: "Only with reduced visibility." },
        { es: "No, porque no parar no implica ningún peligro a la circulación.", ru: "Нет, ведь неостановка не создаёт опасности.", en: "No, because not stopping causes no danger." },
        { es: "No, salvo que sea necesario para ceder el paso.", ru: "Нет, если только это не нужно, чтобы уступить дорогу.", en: "No, unless it is necessary in order to give way." }
      ],
      answer: 2,
      explain: { ru: "Прерывистая поперечная линия — линия «уступи дорогу»: останавливаются, только если нужно уступить. Fuente: Tráfico y Seguridad Vial, test nº 274.", en: "A broken transverse line is a give-way line: you stop only if you need to give way. Source: Tráfico y Seguridad Vial magazine, test no. 274." } },
    { es: "Para intentar evitar la aparición de la somnolencia durante la conducción es aconsejable dormir...",
      prompt: { ru: "Чтобы избежать сонливости за рулём, рекомендуется спать…", en: "To avoid drowsiness while driving, it is advisable to sleep…" },
      options: [
        { es: "entre 5 y 7 horas diarias.", ru: "от 5 до 7 часов в сутки.", en: "between 5 and 7 hours a day." },
        { es: "menos horas de las necesarias, para mantener alto el nivel de alerta.", ru: "меньше необходимого, чтобы оставаться бодрым.", en: "fewer hours than needed, to keep alertness high." },
        { es: "las horas suficientes para estar descansado, que para la mayoría de las personas son entre 7 y 9 horas.", ru: "столько, чтобы отдохнуть; большинству людей это 7–9 часов.", en: "enough hours to be rested, which for most people is 7 to 9." }
      ],
      answer: 2,
      explain: { ru: "Большинству взрослых нужно 7–9 часов сна, чтобы водить без сонливости. Fuente: Tráfico y Seguridad Vial, test nº 274.", en: "Most adults need 7–9 hours of sleep to drive without drowsiness. Source: Tráfico y Seguridad Vial magazine, test no. 274." } },
    { es: "¿Cómo debe comportarse el conductor de un turismo, sobre todo en vías urbanas, para evitar un accidente con una motocicleta o un ciclomotor?",
      prompt: { ru: "Как вести себя водителю легкового автомобиля, особенно в городе, чтобы не столкнуться с мотоциклом или мопедом?", en: "How should a car driver behave, especially in towns, to avoid an accident with a motorcycle or moped?" },
      options: [
        { es: "Debe circular en paralelo y lo más cerca posible de los vehículos de dos ruedas.", ru: "Ехать рядом и как можно ближе к двухколёсным.", en: "Drive alongside and as close as possible to two-wheelers." },
        { es: "Debe mirar por los retrovisores con frecuencia.", ru: "Часто смотреть в зеркала.", en: "Check the mirrors often." },
        { es: "Debe reducir o incluso eliminar la distancia de seguridad.", ru: "Уменьшить или вовсе убрать дистанцию.", en: "Reduce or even remove the safety gap." }
      ],
      answer: 1,
      explain: { ru: "Мотоциклы маленькие и быстрые: их легко не заметить в зеркалах, поэтому смотрите в них часто. Fuente: Tráfico y Seguridad Vial, test nº 274.", en: "Motorcycles are small and quick: they are easy to miss, so check the mirrors often. Source: Tráfico y Seguridad Vial magazine, test no. 274." } },
    { es: "En un carril habilitado en sentido contrario al habitual por trabajos en la calzada, ¿qué vehículos tienen permitido utilizarlo?",
      prompt: { ru: "На полосе, открытой во встречном (непривычном) направлении из-за дорожных работ, какие машины могут ехать?", en: "In a lane opened against the usual direction because of roadworks, which vehicles may use it?" },
      options: [
        { es: "Todos los que estén autorizados a circular por la vía.", ru: "Все, кому разрешено ехать по этой дороге.", en: "All those allowed to use the road." },
        { es: "Solo turismos y motocicletas.", ru: "Только легковые и мотоциклы.", en: "Only cars and motorcycles." },
        { es: "Automóviles que no superen los 3.500 kg de M.M.A. y motocicletas.", ru: "Автомобили до 3500 кг и мотоциклы.", en: "Motor vehicles up to 3,500 kg MAM and motorcycles." }
      ],
      answer: 0,
      explain: { ru: "Так ответил журнал: полоса, открытая во встречном направлении из-за работ, доступна всем машинам, которым разрешена эта дорога (в отличие от полосы для разгрузки движения). Fuente: Tráfico y Seguridad Vial, test nº 274.", en: "The magazine's answer: a lane opened against the usual direction because of roadworks is open to all vehicles allowed on the road (unlike a lane opened to ease traffic). Source: Tráfico y Seguridad Vial magazine, test no. 274." } },
    { es: "En los adelantamientos a ciclistas en vías con un carril para cada sentido, ¿está permitido ocupar el carril de sentido contrario?",
      prompt: { ru: "При обгоне велосипедистов на дороге с одной полосой в каждом направлении можно ли занимать встречную полосу?", en: "When overtaking cyclists on a road with one lane each way, may you occupy the opposite lane?" },
      options: [
        { es: "Sí, siempre que el adelantamiento se pueda realizar con seguridad.", ru: "Да, если обгон можно сделать безопасно.", en: "Yes, as long as the overtaking can be done safely." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Solo si ambos sentidos están separados por línea blanca discontinua.", ru: "Только если направления разделены прерывистой белой линией.", en: "Only if the directions are separated by a broken white line." }
      ],
      answer: 0,
      explain: { ru: "Для обгона велосипедиста можно частично или полностью занять встречную полосу, если это безопасно (RGC, ст. 85). Fuente: Tráfico y Seguridad Vial, test nº 274.", en: "To overtake a cyclist you may use part or all of the opposite lane if it is safe (RGC art. 85). Source: Tráfico y Seguridad Vial magazine, test no. 274." } },
    { es: "Los conductores, ¿están obligados a realizar las pruebas para la comprobación de la tasa de alcoholemia cuando sean requeridos para ello por la policía de tráfico?",
      prompt: { ru: "Обязаны ли водители проходить тест на алкоголь по требованию дорожной полиции?", en: "Are drivers obliged to take the alcohol test when traffic police require it?" },
      options: [
        { es: "No; pueden negarse a hacerla y seguir circulando.", ru: "Нет: можно отказаться и ехать дальше.", en: "No: they may refuse and carry on." },
        { es: "Solo están obligados en caso de accidente de tráfico.", ru: "Только при ДТП.", en: "Only after an accident." },
        { es: "Sí; negarse a realizarla es un delito incluido en el Código Penal.", ru: "Да: отказ — преступление по Уголовному кодексу.", en: "Yes: refusing is a crime under the Criminal Code." }
      ],
      answer: 2,
      explain: { ru: "Отказ от теста на алкоголь или наркотики — преступление (Уголовный кодекс, ст. 383). Fuente: Tráfico y Seguridad Vial, test nº 274.", en: "Refusing an alcohol or drug test is a crime (Criminal Code art. 383). Source: Tráfico y Seguridad Vial magazine, test no. 274." } },
    { es: "¿Es conveniente utilizar un aceite lubricante con un índice de viscosidad tan bajo que, al calentarse el motor, se vuelva excesivamente líquido?",
      prompt: { ru: "Стоит ли использовать масло с такой низкой вязкостью, что при прогреве оно становится слишком жидким?", en: "Is it advisable to use an oil with such a low viscosity index that it becomes too thin when the engine is hot?" },
      options: [
        { es: "No, ya que el aceite no llega a engrasar bien las piezas del motor.", ru: "Нет, такое масло плохо смазывает детали двигателя.", en: "No, because it does not lubricate the engine parts properly." },
        { es: "Sí; cuanto más líquido, mejor engrasa y además arrastra los residuos depositados en el motor.", ru: "Да: чем жиже, тем лучше смазывает и смывает отложения.", en: "Yes: the thinner, the better it lubricates and the more residue it carries away." },
        { es: "Solo si el motor se calienta en exceso, ya que engrasa mejor y ayuda a bajar su temperatura.", ru: "Только если двигатель сильно греется: смазывает лучше и охлаждает.", en: "Only if the engine overheats, as it lubricates better and lowers the temperature." }
      ],
      answer: 0,
      explain: { ru: "Слишком жидкое горячее масло не держит плёнку между деталями; используйте вязкость, рекомендованную производителем. Fuente: Tráfico y Seguridad Vial, test nº 274.", en: "Oil that gets too thin when hot cannot keep a film between parts; use the viscosity the maker recommends. Source: Tráfico y Seguridad Vial magazine, test no. 274." } },
    { es: "Si existen semáforos con indicaciones distintas a la derecha y a la izquierda, ¿a cuál obedecerán los que pretendan seguir de frente?",
      prompt: { ru: "Если справа и слева стоят светофоры с разными сигналами, какому подчиняются те, кто едет прямо?", en: "If there are traffic lights with different indications on the right and on the left, which do drivers going straight on obey?" },
      options: [
        { es: "Al situado a su derecha.", ru: "Тому, что справа.", en: "The one on their right." },
        { es: "Al que se encuentre más cerca del vehículo.", ru: "Тому, что ближе к машине.", en: "The one nearest the vehicle." },
        { es: "Al situado inmediatamente a su izquierda.", ru: "Тому, что сразу слева.", en: "The one immediately on their left." }
      ],
      answer: 2,
      explain: { ru: "Так ответил журнал: при разных сигналах справа и слева тем, кто едет прямо, подчиняются светофору сразу слева от себя. Fuente: Tráfico y Seguridad Vial, test nº 275.", en: "The magazine's answer: with different lights on the right and left, drivers going straight on follow the light immediately on their left. Source: Tráfico y Seguridad Vial magazine, test no. 275." } },
    { es: "En el centro de la calzada hay doble línea continua; ¿qué indica?",
      prompt: { ru: "Посередине проезжей части двойная сплошная. Что это означает?", en: "There is a double continuous line in the middle of the carriageway. What does it mean?" },
      options: [
        { es: "Que la calzada es peligrosa.", ru: "Что дорога опасная.", en: "That the road is dangerous." },
        { es: "Que hay un carril especial.", ru: "Что есть специальная полоса.", en: "That there is a special lane." },
        { es: "Que no se puede atravesar, ni pisar la línea.", ru: "Что её нельзя пересекать и наезжать на неё.", en: "That it may not be crossed or driven on." }
      ],
      answer: 2,
      explain: { ru: "Двойная сплошная значит то же, что одинарная: её нельзя пересекать и на неё нельзя наезжать. Fuente: Tráfico y Seguridad Vial, test nº 275.", en: "A double continuous line means the same as a single one: it may not be crossed or driven on. Source: Tráfico y Seguridad Vial magazine, test no. 275." } },
    { es: "Al cruzar un arcén por el que transitan peatones, ¿qué debe hacer?",
      prompt: { ru: "Что делать, пересекая обочину, по которой идут пешеходы?", en: "When crossing a hard shoulder used by pedestrians, what must you do?" },
      options: [
        { es: "Avisarles mediante señales acústicas para que se aparten.", ru: "Предупредить их гудком, чтобы они отошли.", en: "Warn them with the horn so they move aside." },
        { es: "Cederles el paso, pero solamente si forman un grupo.", ru: "Уступить им, только если они идут группой.", en: "Give way to them only if they are a group." },
        { es: "Cederles el paso si no disponen de zona peatonal.", ru: "Уступить им, если у них нет пешеходной зоны.", en: "Give way to them if they have no pedestrian area." }
      ],
      answer: 2,
      explain: { ru: "Пересекая обочину (например, при въезде на участок), водитель уступает пешеходам, у которых нет тротуара (RGC, ст. 65). Fuente: Tráfico y Seguridad Vial, test nº 275.", en: "When crossing a shoulder (for example to enter a property) a driver gives way to pedestrians who have no footway (RGC art. 65). Source: Tráfico y Seguridad Vial magazine, test no. 275." } },
    { es: "Esta señal, ¿prohíbe cambiar de dirección a la izquierda?",
      prompt: { ru: "Запрещает ли этот знак поворот налево?", en: "Does this sign forbid turning left?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, pero no prohíbe girar a la derecha.", ru: "Да, но не запрещает поворот направо.", en: "Yes, but it does not forbid turning right." },
        { es: "Sí; prohíbe realizar cualquier giro.", ru: "Да, он запрещает любой поворот.", en: "Yes, it forbids any turn." }
      ],
      answer: 0,
      explain: { ru: "Знак «разворот запрещён» (R-304) запрещает только разворот, а не поворот налево. Fuente: Tráfico y Seguridad Vial, test nº 275.", en: "The 'no U-turn' sign (R-304) bans only U-turns, not left turns. Source: Tráfico y Seguridad Vial magazine, test no. 275." },
      sign: "R-304" },
    { es: "Un furgón, ¿puede utilizar un carril reversible?",
      prompt: { ru: "Может ли фургон ехать по реверсивной полосе?", en: "May a van use a reversible lane?" },
      options: [
        { es: "Solo si su M.M.A. no es superior a 3.500 kilogramos.", ru: "Только если его разрешённая масса не больше 3500 кг.", en: "Only if its MAM does not exceed 3,500 kg." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí.", ru: "Да.", en: "Yes." }
      ],
      answer: 2,
      explain: { ru: "Так ответил журнал: по реверсивной полосе могут ехать все машины, которым разрешена эта дорога, включая фургоны, — с ближним светом. Fuente: Tráfico y Seguridad Vial, test nº 275.", en: "The magazine's answer: any vehicle allowed on the road may use a reversible lane, vans included, with dipped headlights on. Source: Tráfico y Seguridad Vial magazine, test no. 275." } },
    { es: "Como norma general, en la parte transitable del arcén de una vía interurbana, ¿está permitida la parada o el estacionamiento?",
      prompt: { ru: "Как правило, на проезжей части обочины загородной дороги разрешены остановка или стоянка?", en: "As a rule, on the usable part of the hard shoulder of an interurban road, is stopping or parking allowed?" },
      options: [
        { es: "Está permitida la parada, pero no el estacionamiento.", ru: "Остановка разрешена, стоянка нет.", en: "Stopping is allowed, but parking is not." },
        { es: "Está prohibida tanto la parada como el estacionamiento.", ru: "Запрещены и остановка, и стоянка.", en: "Both stopping and parking are forbidden." },
        { es: "Está permitida tanto la parada como el estacionamiento.", ru: "Разрешены и остановка, и стоянка.", en: "Both stopping and parking are allowed." }
      ],
      answer: 1,
      explain: { ru: "Вне населённого пункта останавливаются вне проезжей части, оставляя проходимую часть обочины свободной (RGC, ст. 90–91). Fuente: Tráfico y Seguridad Vial, test nº 275.", en: "Outside towns you stop off the carriageway, leaving the usable part of the shoulder clear (RGC arts. 90–91). Source: Tráfico y Seguridad Vial magazine, test no. 275." } },
    { es: "Circulando por una autopista observa que se ha pasado una salida, ¿puede volver a ella circulando marcha atrás?",
      prompt: { ru: "Вы проехали съезд на autopista. Можно ли вернуться к нему задним ходом?", en: "On an autopista you realise you have missed an exit. May you reverse back to it?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, cuando el recorrido no supere los 15 metros.", ru: "Да, если расстояние не больше 15 метров.", en: "Yes, if it is no more than 15 metres." },
        { es: "Sí, comprobando que no existe peligro para otros usuarios.", ru: "Да, убедившись, что это безопасно.", en: "Yes, after checking there is no danger to others." }
      ],
      answer: 0,
      explain: { ru: "На autopista и autovía задний ход запрещён (RGC, ст. 80). Fuente: Tráfico y Seguridad Vial, test nº 275.", en: "Reversing is forbidden on autopistas and autovías (RGC art. 80). Source: Tráfico y Seguridad Vial magazine, test no. 275." } },
    { es: "¿Puede circular con su turismo si el equipaje no permite una visión adecuada de la vía por el espejo retrovisor interior?",
      prompt: { ru: "Можно ли ехать на легковом автомобиле, если багаж мешает видеть дорогу в салонное зеркало?", en: "May you drive your car if the luggage blocks the view through the interior mirror?" },
      options: [
        { es: "No; en ningún caso la carga puede disminuir la visibilidad a través del espejo retrovisor.", ru: "Нет: груз никогда не должен ухудшать обзор в зеркало.", en: "No: the load may never reduce visibility through the mirror." },
        { es: "Sí, si el vehículo lleva dos espejos retrovisores exteriores, uno a cada lado.", ru: "Да, если у машины два наружных зеркала, по одному с каждой стороны.", en: "Yes, if the car has two exterior mirrors, one on each side." },
        { es: "Solo si el retrovisor derecho es gran angular y el interior es panorámico.", ru: "Только если правое зеркало широкоугольное, а салонное панорамное.", en: "Only if the right mirror is wide-angle and the interior one panoramic." }
      ],
      answer: 1,
      explain: { ru: "Если салонное зеркало бесполезно, достаточно двух наружных зеркал — левого и правого. Fuente: Tráfico y Seguridad Vial, test nº 275.", en: "If the interior mirror is useless, two exterior mirrors, left and right, are enough. Source: Tráfico y Seguridad Vial magazine, test no. 275." } },
    { es: "¿Qué significado tiene esta señal?",
      prompt: { ru: "Что означает этот знак?", en: "What does this sign mean?" },
      options: [
        { es: "Peligro por la proximidad de un paso a nivel provisto de barreras o semibarreras.", ru: "Опасность: впереди железнодорожный переезд со шлагбаумом или полушлагбаумом.", en: "Danger: a level crossing with barriers or half barriers ahead." },
        { es: "Peligro por la proximidad de un paso a nivel sin barreras de más de una vía férrea.", ru: "Опасность: впереди переезд без шлагбаума через несколько путей.", en: "Danger: an unguarded level crossing over more than one track ahead." },
        { es: "Peligro por la proximidad de un cruce con una línea de tranvía.", ru: "Опасность: впереди пересечение с трамвайной линией.", en: "Danger: a crossing with a tram line ahead." }
      ],
      answer: 0,
      explain: { ru: "Знак P-7 (забор) — переезд со шлагбаумом; паровоз (P-8) — переезд без шлагбаума. Fuente: Tráfico y Seguridad Vial, test nº 275.", en: "Sign P-7 (a fence) means a level crossing with barriers; a locomotive (P-8) means one without. Source: Tráfico y Seguridad Vial magazine, test no. 275." },
      sign: "P-7" },
    { es: "En general, un conductor con sueño...",
      prompt: { ru: "Как правило, сонный водитель…", en: "In general, a sleepy driver…" },
      options: [
        { es: "acepta un mayor nivel de riesgo en la conducción.", ru: "готов к большему риску при вождении.", en: "accepts a higher level of risk while driving." },
        { es: "acepta un menor nivel de riesgo en la conducción.", ru: "готов к меньшему риску при вождении.", en: "accepts a lower level of risk while driving." },
        { es: "tarda menos en reaccionar ante un suceso imprevisto.", ru: "быстрее реагирует на неожиданности.", en: "reacts faster to unexpected events." }
      ],
      answer: 0,
      explain: { ru: "Сонный водитель хуже оценивает опасность и чаще идёт на риск. Fuente: Tráfico y Seguridad Vial, test nº 275.", en: "A sleepy driver judges danger poorly and takes more risks. Source: Tráfico y Seguridad Vial magazine, test no. 275." } },
    { es: "¿Cómo se conocen a los colectivos de personas que tienen una mayor probabilidad de verse implicados en un accidente de tráfico o de fallecer a consecuencia del mismo?",
      prompt: { ru: "Как называют группы людей, у которых выше вероятность попасть в ДТП или погибнуть в нём?", en: "What are the groups of people more likely to be involved in or die in a road accident called?" },
      options: [
        { es: "Grupos de riesgo o vulnerables en el tráfico.", ru: "Группы риска или уязвимые участники движения.", en: "Risk groups or vulnerable road users." },
        { es: "Víctimas de accidentes de tráfico.", ru: "Жертвы ДТП.", en: "Road accident victims." },
        { es: "Grupos en riesgo de exclusión social.", ru: "Группы риска социальной изоляции.", en: "Groups at risk of social exclusion." }
      ],
      answer: 0,
      explain: { ru: "Пешеходы, велосипедисты, мотоциклисты, дети и пожилые — уязвимые участники движения (группы риска). Fuente: Tráfico y Seguridad Vial, test nº 275.", en: "Pedestrians, cyclists, motorcyclists, children and older people are vulnerable road users (risk groups). Source: Tráfico y Seguridad Vial magazine, test no. 275." } },
    { es: "¿Puede sobresalir por la parte trasera del vehículo la carga indivisible que transporta un turismo?",
      prompt: { ru: "Может ли неделимый груз легкового автомобиля выступать назад?", en: "May an indivisible load carried by a car stick out at the back?" },
      options: [
        { es: "Sí, un máximo de hasta el 10% de la longitud del vehículo.", ru: "Да, максимум на 10 % длины машины.", en: "Yes, up to 10 % of the vehicle's length." },
        { es: "No, la carga no puede sobresalir por la parte trasera de un turismo.", ru: "Нет, груз не может выступать назад у легкового.", en: "No, a car's load may not stick out at the back." },
        { es: "Sí, un máximo de hasta el 15% de la longitud del vehículo.", ru: "Да, максимум на 15 % длины машины.", en: "Yes, up to 15 % of the vehicle's length." }
      ],
      answer: 2,
      explain: { ru: "У машин не только для грузов делимый груз может выступать назад на 10 %, неделимый — на 15 % длины (RGC, ст. 14). Fuente: Tráfico y Seguridad Vial, test nº 275.", en: "On vehicles not only for goods a divisible load may stick out 10 % at the back and an indivisible one 15 % of the length (RGC art. 14). Source: Tráfico y Seguridad Vial magazine, test no. 275." } },
    { es: "Si queda detenido en un atasco, ¿qué distancia es aconsejable mantener con el vehículo de delante?",
      prompt: { ru: "Если вы стоите в пробке, какое расстояние до передней машины рекомендуется?", en: "When stopped in a traffic jam, what distance should you keep from the vehicle in front?" },
      options: [
        { es: "Un metro como máximo.", ru: "Не больше метра.", en: "One metre at most." },
        { es: "Un espacio mínimo para ocupar menos espacio.", ru: "Минимальное, чтобы занимать меньше места.", en: "A minimal gap to take up less space." },
        { es: "Dos o tres metros para no golpear al vehículo de delante en caso de alcance trasero.", ru: "Два-три метра, чтобы не ударить переднюю машину при ударе сзади.", en: "Two or three metres, so you do not hit the vehicle ahead if you are hit from behind." }
      ],
      answer: 2,
      explain: { ru: "Запас 2–3 м защищает от «цепочки» при ударе сзади и позволяет объехать, если передняя машина заглохнет. Fuente: Tráfico y Seguridad Vial, test nº 275.", en: "A 2–3 m gap prevents a chain collision if you are hit from behind and lets you get round a stalled car. Source: Tráfico y Seguridad Vial magazine, test no. 275." } },
    { es: "¿Qué condiciones deben tener los neumáticos de una motocicleta?",
      prompt: { ru: "Каким требованиям должны отвечать шины мотоцикла?", en: "What condition must a motorcycle's tyres meet?" },
      options: [
        { es: "Las dos ruedas tienen que ser del mismo tamaño y características.", ru: "Оба колеса должны быть одного размера и характеристик.", en: "Both wheels must be the same size and type." },
        { es: "Las ranuras de la banda de rodadura deben tener una profundidad mínima de 1,6 milímetros.", ru: "Глубина канавок протектора не меньше 1,6 мм.", en: "The tread grooves must be at least 1.6 mm deep." },
        { es: "No deben presentar ampollas, deformaciones anormales o roturas.", ru: "На них не должно быть вздутий, необычных деформаций или порезов.", en: "They must have no bulges, abnormal deformations or cuts." }
      ],
      answer: 2,
      explain: { ru: "На шинах не должно быть вздутий, необычных деформаций и порезов: такие повреждения могут привести к разрыву шины. Fuente: Tráfico y Seguridad Vial, test nº 275.", en: "Tyres must have no bulges, abnormal deformations or cuts: such damage can make a tyre burst. Source: Tráfico y Seguridad Vial magazine, test no. 275." } },
    { es: "A un turismo, ¿le está permitido circular si tiene roto el espejo retrovisor exterior izquierdo?",
      prompt: { ru: "Можно ли ехать на легковом автомобиле с разбитым левым наружным зеркалом?", en: "May a car be driven if its left exterior mirror is broken?" },
      options: [
        { es: "Sí, porque el retrovisor exterior izquierdo no es obligatorio.", ru: "Да, левое наружное зеркало не обязательно.", en: "Yes, because the left exterior mirror is not compulsory." },
        { es: "Sólo si el vehículo tiene espejo retrovisor interior.", ru: "Только если есть салонное зеркало.", en: "Only if the car has an interior mirror." },
        { es: "No, cuando el conductor no pueda ver la circulación por detrás del vehículo.", ru: "Нет, если водитель не видит, что происходит сзади.", en: "No, when the driver cannot see the traffic behind." }
      ],
      answer: 2,
      explain: { ru: "Так ответил журнал: ехать нельзя, если водитель не может видеть движение сзади. Левое наружное зеркало у легковых обязательно, его стоит заменить как можно скорее. Fuente: Tráfico y Seguridad Vial, test nº 276.", en: "The magazine's answer: you may not drive if you cannot see the traffic behind. The left exterior mirror is compulsory on cars, so replace it as soon as possible. Source: Tráfico y Seguridad Vial magazine, test no. 276." } },
    { es: "¿Qué es un microsueño?",
      prompt: { ru: "Что такое микросон?", en: "What is a microsleep?" },
      options: [
        { es: "Un periodo de unos segundos durante el cual el conductor sueña mientras conduce.", ru: "Несколько секунд, когда водитель видит сон за рулём.", en: "A few seconds during which the driver dreams while driving." },
        { es: "Un periodo de unos segundos durante el cual el conductor queda ligeramente dormido sin darse cuenta.", ru: "Несколько секунд, когда водитель незаметно для себя засыпает.", en: "A few seconds during which the driver nods off without realising it." },
        { es: "Un periodo corto de descanso que el conductor realiza cuando siente fatiga.", ru: "Короткий отдых, который водитель делает при усталости.", en: "A short rest the driver takes when tired." }
      ],
      answer: 1,
      explain: { ru: "Микросон — несколько секунд сна без осознания; за это время машина проезжает десятки метров без управления. Fuente: Tráfico y Seguridad Vial, test nº 276.", en: "A microsleep is a few seconds of sleep without noticing; meanwhile the car covers dozens of metres uncontrolled. Source: Tráfico y Seguridad Vial magazine, test no. 276." } },
    { es: "En una retención en la que están los vehículos detenidos, ¿está permitido usar el teléfono móvil?",
      prompt: { ru: "Можно ли пользоваться телефоном в заторе, когда машины стоят?", en: "In a hold-up with vehicles stopped, may you use your mobile phone?" },
      options: [
        { es: "No, excepto en vías urbanas.", ru: "Нет, кроме городских улиц.", en: "No, except on urban roads." },
        { es: "Únicamente con un dispositivo de manos libres y sin usar auriculares.", ru: "Только через громкую связь, без наушников.", en: "Only hands-free and without earphones." },
        { es: "Sí, porque el vehículo no está en movimiento.", ru: "Да, ведь машина не движется.", en: "Yes, because the vehicle is not moving." }
      ],
      answer: 1,
      explain: { ru: "В пробке вы всё равно «ведёте» машину: телефон в руке запрещён, разрешена только громкая связь без наушников. Fuente: Tráfico y Seguridad Vial, test nº 276.", en: "In a jam you are still driving: a hand-held phone is forbidden, only hands-free without earphones. Source: Tráfico y Seguridad Vial magazine, test no. 276." } },
    { es: "Una luz verde en forma de flecha apuntando hacia abajo en un semáforo de carril...",
      prompt: { ru: "Зелёная стрелка вниз на светофоре над полосой…", en: "A green downward arrow on a lane signal…" },
      options: [
        { es: "obliga a no abandonar el carril sobre el que está colocada.", ru: "обязывает не покидать полосу, над которой она стоит.", en: "obliges you not to leave the lane it is over." },
        { es: "exime de la obligación de detenerse ante una luz roja circular.", ru: "освобождает от обязанности остановиться на красный круглый сигнал.", en: "exempts you from stopping at a red circular light." },
        { es: "No exime de tener que cumplir las normas generales sobre prioridad de paso.", ru: "не освобождает от общих правил приоритета.", en: "does not exempt you from the general priority rules." }
      ],
      answer: 2,
      explain: { ru: "Зелёная стрелка вниз лишь разрешает ехать по этой полосе; правила приоритета по-прежнему действуют. Fuente: Tráfico y Seguridad Vial, test nº 276.", en: "A green down arrow only means the lane is open; priority rules still apply. Source: Tráfico y Seguridad Vial magazine, test no. 276." } },
    { es: "Entre la puesta y la salida del sol, ¿puede encender la luz de largo alcance en caso de niebla?",
      prompt: { ru: "Можно ли от заката до рассвета включать дальний свет в тумане?", en: "Between sunset and sunrise, may you use main beam in fog?" },
      options: [
        { es: "Sí, procurando no deslumbrar a otros usuarios de la vía.", ru: "Да, стараясь не ослеплять других.", en: "Yes, taking care not to dazzle other road users." },
        { es: "Sólo en carreteras con un carril para cada sentido de la circulación.", ru: "Только на дорогах с одной полосой в каждом направлении.", en: "Only on roads with one lane in each direction." },
        { es: "No, está prohibido.", ru: "Нет, это запрещено.", en: "No, it is forbidden." }
      ],
      answer: 0,
      explain: { ru: "Так ответил журнал: в тумане разрешены ближний или дальний свет (дальний — не ослепляя других), хотя дальний в тумане часто отражается и ухудшает видимость. Fuente: Tráfico y Seguridad Vial, test nº 276.", en: "The magazine's answer: in fog dipped or main beam are allowed (main beam without dazzling anyone), although main beam often reflects off fog and worsens visibility. Source: Tráfico y Seguridad Vial magazine, test no. 276." } },
    { es: "En este paso para peatones, si no funciona el semáforo, ¿es obligatorio ceder el paso a los peatones que intenten cruzar?",
      prompt: { ru: "Если на этом пешеходном переходе не работает светофор, обязательно ли уступать пешеходам, которые хотят перейти?", en: "If the traffic light at this pedestrian crossing is not working, must you give way to pedestrians trying to cross?" },
      options: [
        { es: "Sí, porque los peatones tienen prioridad de paso.", ru: "Да, у пешеходов приоритет.", en: "Yes, because pedestrians have priority." },
        { es: "No, porque los vehículos tienen prioridad de paso.", ru: "Нет, приоритет у машин.", en: "No, because vehicles have priority." },
        { es: "Sólo si quien intenta cruzar es una fila de escolares.", ru: "Только если переходит колонна школьников.", en: "Only if it is a line of schoolchildren." }
      ],
      answer: 0,
      explain: { ru: "Если светофор не работает, переход действует как обычная «зебра», и пешеходы имеют приоритет. Fuente: Tráfico y Seguridad Vial, test nº 276.", en: "If the light is out, it works like an ordinary zebra crossing and pedestrians have priority. Source: Tráfico y Seguridad Vial magazine, test no. 276." } },
    { es: "En la ficha de inspección técnica de esta motocicleta figura que tiene estructura de autoprotección y cinturón de seguridad. ¿Puede conducirla sin utilizar el casco de protección?",
      prompt: { ru: "В техпаспорте этого мотоцикла указано, что у него есть защитный каркас и ремень безопасности. Можно ли ездить на нём без шлема?", en: "This motorcycle's inspection card states it has a self-protection structure and a seat belt. May you ride it without a helmet?" },
      options: [
        { es: "Sólo cuando circule por vías urbanas.", ru: "Только в городе.", en: "Only on urban roads." },
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 1,
      explain: { ru: "Мотоциклы с защитным каркасом и ремнём, указанными в документах, освобождены от шлема, если ремень пристёгнут (RGC, ст. 118). Fuente: Tráfico y Seguridad Vial, test nº 276.", en: "Motorcycles with a protective structure and seat belts stated in their papers are exempt from helmets if the belt is worn (RGC art. 118). Source: Tráfico y Seguridad Vial magazine, test no. 276." } },
    { es: "Si quiere abandonar una autovía, ¿en qué momento debe entrar en el carril de deceleración?",
      prompt: { ru: "Если вы хотите съехать с autovía, когда нужно перейти на полосу торможения?", en: "If you want to leave an autovía, when should you move into the deceleration lane?" },
      options: [
        { es: "Lo antes posible.", ru: "Как можно раньше.", en: "As soon as possible." },
        { es: "Es indiferente, en cualquier momento mientras la línea sea discontinua.", ru: "Всё равно когда, пока линия прерывистая.", en: "It does not matter, any time while the line is broken." },
        { es: "Lo más tarde posible.", ru: "Как можно позже.", en: "As late as possible." }
      ],
      answer: 0,
      explain: { ru: "На полосу торможения переходят в её начале, чтобы снижать скорость уже на ней. Fuente: Tráfico y Seguridad Vial, test nº 276.", en: "Move into the deceleration lane at its start so you slow down there. Source: Tráfico y Seguridad Vial magazine, test no. 276." } },
    { es: "¿Está permitido estacionar en doble fila?",
      prompt: { ru: "Разрешено ли стоять во втором ряду?", en: "Is double parking allowed?" },
      options: [
        { es: "Sí, siempre que el conductor no abandone el vehículo.", ru: "Да, если водитель не покидает машину.", en: "Yes, as long as the driver stays with the vehicle." },
        { es: "No, en ningún caso.", ru: "Нет, ни в коем случае.", en: "No, never." },
        { es: "Sólo cuando la duración del estacionamiento sea inferior a dos minutos.", ru: "Только если стоянка короче двух минут.", en: "Only if parking lasts under two minutes." }
      ],
      answer: 1,
      explain: { ru: "Стоянка во втором ряду запрещена всегда (RGC, ст. 94). Fuente: Tráfico y Seguridad Vial, test nº 276.", en: "Double parking is always forbidden (RGC art. 94). Source: Tráfico y Seguridad Vial magazine, test no. 276." } },
    { es: "En una vía fuera de poblado en la que no exista zona peatonal ni arcén practicable, ¿está permitido que un peatón circule por la calzada?",
      prompt: { ru: "Можно ли пешеходу идти по проезжей части вне населённого пункта, где нет ни тротуара, ни проходимой обочины?", en: "On a road outside a town with no footway or usable shoulder, may a pedestrian walk on the carriageway?" },
      options: [
        { es: "Sí, siempre que tome las debidas precauciones.", ru: "Да, соблюдая необходимые меры предосторожности.", en: "Yes, taking due care." },
        { es: "Sólo si arrastra un vehículo de reducidas dimensiones que no sea de motor.", ru: "Только если он толкает небольшое немоторное средство.", en: "Only if pushing a small non-motor vehicle." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 0,
      explain: { ru: "Без тротуара и обочины пешеход идёт по краю проезжей части, как правило по левой стороне (RGC, ст. 121–122). Fuente: Tráfico y Seguridad Vial, test nº 276.", en: "With no footway or shoulder a pedestrian walks at the edge of the carriageway, normally on the left (RGC arts. 121–122). Source: Tráfico y Seguridad Vial magazine, test no. 276." } },
    { es: "¿Cuál es uno de los problemas que, debido al deterioro de las aptitudes psicofísicas, encuentran muchas personas mayores como peatones en las vías públicas?",
      prompt: { ru: "С какой проблемой из-за ухудшения способностей часто сталкиваются пожилые люди как пешеходы?", en: "Because of declining abilities, what problem do many older people face as pedestrians?" },
      options: [
        { es: "Tienen mayor capacidad de orientación, sobre todo en calles que no conocen bien.", ru: "Лучше ориентируются, особенно на незнакомых улицах.", en: "They orient themselves better, especially in unfamiliar streets." },
        { es: "No aprecian bien la velocidad a la que se acercan los vehículos.", ru: "Плохо оценивают скорость приближающихся машин.", en: "They do not judge well how fast vehicles are approaching." },
        { es: "Los bordillos de las aceras están al mismo nivel que la calzada.", ru: "Бордюры тротуаров на одном уровне с проезжей частью.", en: "Kerbs are at the same level as the carriageway." }
      ],
      answer: 1,
      explain: { ru: "Пожилым трудно оценить скорость и расстояние до машин, поэтому они переходят в опасный момент. Fuente: Tráfico y Seguridad Vial, test nº 276.", en: "Older pedestrians find it hard to judge vehicle speed and distance, so they may cross at the wrong moment. Source: Tráfico y Seguridad Vial magazine, test no. 276." } },
    { es: "Acaba de comprar un turismo nuevo; ¿cuándo debe presentarlo a la primera inspección técnica reglamentaria?",
      prompt: { ru: "Вы купили новый легковой автомобиль. Когда первый техосмотр (ITV)?", en: "You have just bought a new car. When must it first go for the ITV?" },
      options: [
        { es: "A los cuatro años, a contar desde la fecha de compra.", ru: "Через четыре года с даты покупки.", en: "After four years from the purchase date." },
        { es: "A los dos años, a contar desde la fecha de matriculación.", ru: "Через два года с даты регистрации.", en: "After two years from the registration date." },
        { es: "A los cuatro años, a contar desde la fecha de matriculación.", ru: "Через четыре года с даты регистрации.", en: "After four years from the registration date." }
      ],
      answer: 2,
      explain: { ru: "Первый ITV легкового автомобиля — через 4 года после первой регистрации. Fuente: Tráfico y Seguridad Vial, test nº 276.", en: "A car's first ITV is due 4 years after first registration. Source: Tráfico y Seguridad Vial magazine, test no. 276." } },
    { es: "En las proximidades de vías de uso exclusivo de ciclos, ¿qué precauciones se deben tomar?",
      prompt: { ru: "Какие меры предосторожности нужны рядом с дорогами только для велосипедов?", en: "Near roads reserved for cycles, what precautions should you take?" },
      options: [
        { es: "Hacer señales acústicas para indicar nuestra presencia.", ru: "Подавать звуковые сигналы, предупреждая о себе.", en: "Use the horn to announce your presence." },
        { es: "Moderar la velocidad y, si fuera preciso, detener el vehículo.", ru: "Снизить скорость, а при необходимости остановиться.", en: "Slow down and stop if necessary." },
        { es: "Mantener la velocidad y estar atento al cumplimiento de la señalización vertical.", ru: "Держать скорость и следить за знаками.", en: "Keep your speed and watch the vertical signs." }
      ],
      answer: 1,
      explain: { ru: "Рядом с велодорожками возможен выезд велосипедистов, поэтому снижают скорость и готовы остановиться (RGC, ст. 46). Fuente: Tráfico y Seguridad Vial, test nº 276.", en: "Near cycle tracks cyclists may appear, so slow down and be ready to stop (RGC art. 46). Source: Tráfico y Seguridad Vial magazine, test no. 276." } },
    { es: "¿Está permitido circular con un turismo por una vía en cuyo acceso está situada esta señal?",
      prompt: { ru: "Можно ли ехать на легковом автомобиле по дороге, на въезде на которую стоит этот знак?", en: "May a car use a road at whose entrance this sign stands?" },
      options: [
        { es: "No, porque es una vía reservada para todos los vehículos de dos ruedas.", ru: "Нет, это дорога для всех двухколёсных.", en: "No, because it is reserved for all two-wheelers." },
        { es: "No, porque es una vía reservada para ciclos.", ru: "Нет, это дорога для велосипедов.", en: "No, because it is reserved for cycles." },
        { es: "Sí, porque es una vía permitida para todos los vehículos, excepto ciclos.", ru: "Да, она открыта всем, кроме велосипедов.", en: "Yes, it is open to all vehicles except cycles." }
      ],
      answer: 1,
      explain: { ru: "Знак S-35 обозначает дорогу, выделенную для велосипедов; другим машинам ехать по ней нельзя. Fuente: Tráfico y Seguridad Vial, test nº 276.", en: "Sign S-35 marks a road reserved for cycles; other vehicles may not use it. Source: Tráfico y Seguridad Vial magazine, test no. 276." },
      sign: "S-35" },
    { es: "Un turismo con el distintivo ambiental de la imagen, clasificado como ECO, ¿está autorizado a circular por el carril VAO si su único ocupante es el conductor?",
      prompt: { ru: "Легковой автомобиль с экологической наклейкой ECO, как на картинке: может ли он ехать по полосе VAO, если в нём только водитель?", en: "A car with the ECO environmental label shown: may it use the VAO lane if the driver is the only occupant?" },
      options: [
        { es: "Sí, siempre que lleve el distintivo adhesivo en el parabrisas.", ru: "Да, если наклейка есть на лобовом стекле.", en: "Yes, as long as the sticker is on the windscreen." },
        { es: "No, salvo que por los paneles de mensaje variable se autorice su acceso.", ru: "Нет, если только въезд не разрешён табло переменной информации.", en: "No, unless variable message signs authorise it." },
        { es: "Sí, aunque no lleve el distintivo adhesivo en el parabrisas.", ru: "Да, даже без наклейки на стекле.", en: "Yes, even without the sticker on the windscreen." }
      ],
      answer: 1,
      explain: { ru: "Машина ECO с одним человеком может ехать по VAO, только если это разрешено на табло переменной информации. Fuente: Tráfico y Seguridad Vial, test nº 276.", en: "An ECO car with only the driver may use the VAO lane only when variable message signs allow it. Source: Tráfico y Seguridad Vial magazine, test no. 276." } },
    { es: "Esta señal indica…",
      prompt: { ru: "Этот знак показывает…", en: "This sign indicates…" },
      options: [
        { es: "la proximidad de un lugar en el que se puede efectuar un cambio de sentido al mismo nivel.", ru: "приближение к месту, где можно развернуться на одном уровне.", en: "the approach to a place where you can make a U-turn at the same level." },
        { es: "la proximidad de un lugar donde se puede cambiar de dirección.", ru: "приближение к месту, где можно повернуть.", en: "the approach to a place where you can change direction." },
        { es: "la dirección que los vehículos tienen obligación de seguir.", ru: "направление, по которому машины обязаны ехать.", en: "the direction vehicles must follow." }
      ],
      answer: 0,
      explain: { ru: "Знак S-22 — место для разворота на одном уровне через указанное расстояние (S-25 — на разных уровнях). Fuente: Tráfico y Seguridad Vial, test nº 277.", en: "Sign S-22 shows a same-level U-turn point at the given distance (S-25 is a grade-separated one). Source: Tráfico y Seguridad Vial magazine, test no. 277." },
      sign: "S-22" },
    { es: "El conductor de una motocicleta, ¿tiene permitido realizar una parada en un carril reservado para autobuses?",
      prompt: { ru: "Можно ли мотоциклисту остановиться на полосе для автобусов?", en: "May a motorcyclist stop in a bus lane?" },
      options: [
        { es: "Sí, mientras no obstaculice la circulación de autobuses.", ru: "Да, если он не мешает автобусам.", en: "Yes, as long as it does not obstruct buses." },
        { es: "No, está prohibido.", ru: "Нет, запрещено.", en: "No, it is forbidden." },
        { es: "Está permitido parar, pero no estacionar.", ru: "Остановиться можно, стоять нельзя.", en: "Stopping is allowed, parking is not." }
      ],
      answer: 1,
      explain: { ru: "На полосах для автобусов запрещены и остановка, и стоянка (RGC, ст. 91). Fuente: Tráfico y Seguridad Vial, test nº 277.", en: "Both stopping and parking are forbidden in bus lanes (RGC art. 91). Source: Tráfico y Seguridad Vial magazine, test no. 277." } },
    { es: "¿Puede incorporarse a la circulación desde un estacionamiento circulando marcha atrás?",
      prompt: { ru: "Можно ли выехать с места стоянки задним ходом?", en: "May you pull out from a parking space in reverse?" },
      options: [
        { es: "Sí, mientras no invada un cruce de vías.", ru: "Да, если не заезжать на перекрёсток.", en: "Yes, as long as you do not enter a junction." },
        { es: "Sí, mientras que el recorrido no sea superior a 20 metros.", ru: "Да, если расстояние не больше 20 метров.", en: "Yes, as long as the distance does not exceed 20 metres." },
        { es: "Sí, aunque el recorrido sea superior a 20 metros.", ru: "Да, даже если расстояние больше 20 метров.", en: "Yes, even if the distance exceeds 20 metres." }
      ],
      answer: 0,
      explain: { ru: "Задним ходом можно ехать не больше 15 м и без заезда на перекрёсток (RGC, ст. 80). Fuente: Tráfico y Seguridad Vial, test nº 277.", en: "Reversing is limited to 15 m and you may not enter a junction (RGC art. 80). Source: Tráfico y Seguridad Vial magazine, test no. 277." } },
    { es: "La distancia de frenado está determinada por...",
      prompt: { ru: "Тормозной путь определяется…", en: "Braking distance depends on…" },
      options: [
        { es: "un único factor, la velocidad a la que se circula.", ru: "одним фактором — скоростью.", en: "a single factor, the speed." },
        { es: "varios factores, como la velocidad, el estado de la vía o el del vehículo.", ru: "несколькими факторами: скоростью, состоянием дороги, машины.", en: "several factors, such as speed and the state of the road and the vehicle." },
        { es: "un único factor, el estado del vehículo.", ru: "одним фактором — состоянием машины.", en: "a single factor, the condition of the vehicle." }
      ],
      answer: 1,
      explain: { ru: "На тормозной путь влияют скорость, сцепление и покрытие, состояние шин и тормозов, загрузка. Fuente: Tráfico y Seguridad Vial, test nº 277.", en: "Braking distance depends on speed, grip and surface, the state of tyres and brakes, and the load. Source: Tráfico y Seguridad Vial magazine, test no. 277." } },
    { es: "Si tiene un accidente y no lleva puesto el cinturón de seguridad, las posibilidades de resultar muerto en el siniestro son casi el doble en...",
      prompt: { ru: "Если вы попали в аварию без ремня, вероятность погибнуть почти вдвое выше на…", en: "If you have an accident without a seat belt, your chance of being killed is almost double in…" },
      options: [
        { es: "la plaza del conductor, únicamente.", ru: "месте водителя, только.", en: "the driver's seat only." },
        { es: "las plazas delanteras, únicamente.", ru: "передних местах, только.", en: "the front seats only." },
        { es: "todas las plazas del vehículo.", ru: "всех местах машины.", en: "every seat of the vehicle." }
      ],
      answer: 2,
      explain: { ru: "Ремень спасает на всех местах: непристёгнутый сзади ещё и опасен для тех, кто спереди. Fuente: Tráfico y Seguridad Vial, test nº 277.", en: "The belt saves lives in every seat: an unbelted rear passenger also endangers those in front. Source: Tráfico y Seguridad Vial magazine, test no. 277." } },
    { es: "En un turismo, ¿es obligatorio llevar dos chalecos reflectantes, uno para el conductor del vehículo y otro para su acompañante?",
      prompt: { ru: "Обязательно ли возить в легковом автомобиле два светоотражающих жилета — для водителя и пассажира?", en: "In a car, is it compulsory to carry two reflective vests, one for the driver and one for the passenger?" },
      options: [
        { es: "Sólo es obligatorio en motocicletas, pero no en turismos.", ru: "Это обязательно только для мотоциклов.", en: "It is only compulsory on motorcycles." },
        { es: "Sí, se debe llevar un chaleco por cada plaza del vehículo.", ru: "Да, по жилету на каждое место.", en: "Yes, one vest for each seat." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 2,
      explain: { ru: "Обязателен один жилет для водителя; больше — рекомендация. Fuente: Tráfico y Seguridad Vial, test nº 277.", en: "One vest for the driver is compulsory; more are only recommended. Source: Tráfico y Seguridad Vial magazine, test no. 277." } },
    { es: "Si una intersección con prioridad de paso está saturada y es previsible que se quede detenido sin terminar de atravesarla, impidiendo la circulación transversal, ¿qué debe hacer?",
      prompt: { ru: "Если перекрёсток, где у вас приоритет, забит, и вы, вероятно, застрянете на нём, перекрыв поперечное движение, что делать?", en: "If a junction where you have priority is jammed and you will probably stop in it, blocking crossing traffic, what should you do?" },
      options: [
        { es: "Entrar en la intersección, porque tiene prioridad de paso.", ru: "Въехать, ведь у вас приоритет.", en: "Enter it, because you have priority." },
        { es: "Tocar el claxon con insistencia hasta que los otros conductores le dejen pasar.", ru: "Сигналить, пока вас не пропустят.", en: "Sound the horn insistently until others let you through." },
        { es: "No entrar en la intersección.", ru: "Не въезжать на перекрёсток.", en: "Not enter the junction." }
      ],
      answer: 2,
      explain: { ru: "Нельзя въезжать на перекрёсток, если рискуешь там остановиться, даже имея приоритет (RGC, ст. 59). Fuente: Tráfico y Seguridad Vial, test nº 277.", en: "Do not enter a junction if you might stop in it, even with priority (RGC art. 59). Source: Tráfico y Seguridad Vial magazine, test no. 277." } },
    { es: "Una luz roja intermitente o dos luces rojas alternativamente intermitentes de un semáforo...",
      prompt: { ru: "Мигающий красный или два попеременно мигающих красных сигнала светофора…", en: "A flashing red light or two alternately flashing red lights…" },
      options: [
        { es: "permiten el paso con precaución.", ru: "разрешают проезд с осторожностью.", en: "allow you through with care." },
        { es: "prohíben temporalmente el paso.", ru: "временно запрещают проезд.", en: "temporarily forbid passing." },
        { es: "obligan a moderar la velocidad antes de pasar.", ru: "обязывают снизить скорость перед проездом.", en: "oblige you to slow down before passing." }
      ],
      answer: 1,
      explain: { ru: "Мигающий красный (у переездов, мостов, выездов спецмашин) запрещает проезд, пока он горит (RGC, ст. 146). Fuente: Tráfico y Seguridad Vial, test nº 277.", en: "A flashing red light (at level crossings, bridges, emergency exits) forbids passing while lit (RGC art. 146). Source: Tráfico y Seguridad Vial magazine, test no. 277." } },
    { es: "En general, un conductor que sufre un trastorno depresivo...",
      prompt: { ru: "Как правило, водитель с депрессивным расстройством…", en: "In general, a driver suffering from a depressive disorder…" },
      options: [
        { es: "recoge mejor la información relevante, especialmente en un entorno de tráfico complejo.", ru: "лучше воспринимает важную информацию, особенно в сложном движении.", en: "picks up relevant information better, especially in complex traffic." },
        { es: "es más fácil que se distraiga y que sufra somnolencia.", ru: "легче отвлекается и страдает от сонливости.", en: "is more easily distracted and drowsy." },
        { es: "se concentra con mayor facilidad.", ru: "легче сосредоточивается.", en: "concentrates more easily." }
      ],
      answer: 1,
      explain: { ru: "Депрессия и многие антидепрессанты снижают внимание и вызывают сонливость. Fuente: Tráfico y Seguridad Vial, test nº 277.", en: "Depression and many antidepressants reduce attention and cause drowsiness. Source: Tráfico y Seguridad Vial magazine, test no. 277." } },
    { es: "En esta vía de doble sentido, ¿qué vehículos deben guardar una separación mínima de 50 metros con el vehículo de delante cuando no pretendan adelantar?",
      prompt: { ru: "На этой дороге с двусторонним движением каким машинам нужно держать не менее 50 м до передней машины, если они не собираются обгонять?", en: "On this two-way road, which vehicles must keep at least 50 metres from the vehicle ahead when not intending to overtake?" },
      options: [
        { es: "Todos los camiones, con independencia de su M.M.A.", ru: "Всем грузовикам, независимо от массы.", en: "All lorries, whatever their MAM." },
        { es: "Los conjuntos de vehículos de más de 10 metros de longitud.", ru: "Составам длиннее 10 метров.", en: "Vehicle combinations over 10 metres long." },
        { es: "Los turismos.", ru: "Легковым автомобилям.", en: "Cars." }
      ],
      answer: 1,
      explain: { ru: "Грузовики свыше 3500 кг и составы длиннее 10 м держат 50 м, чтобы их можно было обгонять (RGC, ст. 54). Fuente: Tráfico y Seguridad Vial, test nº 277.", en: "Lorries over 3,500 kg and combinations over 10 m keep 50 m so others can overtake them (RGC art. 54). Source: Tráfico y Seguridad Vial magazine, test no. 277." } },
    { es: "En un turismo de nueve plazas, incluida la del conductor, ¿pueden viajar nueve menores de edad?",
      prompt: { ru: "Могут ли в легковом автомобиле на девять мест, включая водителя, ехать девять несовершеннолетних?", en: "In a nine-seat car, driver's seat included, may nine minors travel?" },
      options: [
        { es: "No, porque se supera el número de plazas autorizado.", ru: "Нет, потому что превышено разрешённое число мест.", en: "No, because the authorised number of seats would be exceeded." },
        { es: "Sólo si los niños son menores de 12 años.", ru: "Только если детям меньше 12 лет.", en: "Only if the children are under 12." },
        { es: "Sí, siempre que el conductor sea su padre, madre o tutor.", ru: "Да, если водитель — их отец, мать или опекун.", en: "Yes, as long as the driver is their father, mother or guardian." }
      ],
      answer: 0,
      explain: { ru: "Девять детей и водитель — это десять человек на девяти местах; число людей не может превышать число мест. Fuente: Tráfico y Seguridad Vial, test nº 277.", en: "Nine children plus the driver is ten people in nine seats; occupants may not exceed seats. Source: Tráfico y Seguridad Vial magazine, test no. 277." } },
    { es: "¿Qué puede verse afectado si cambia el carenado de una motocicleta?",
      prompt: { ru: "Что может измениться, если поменять обтекатель (carenado) мотоцикла?", en: "What can be affected if you change a motorcycle's fairing?" },
      options: [
        { es: "La estética, exclusivamente.", ru: "Только внешний вид.", en: "Only the appearance." },
        { es: "La aerodinámica y el consumo.", ru: "Аэродинамика и расход топлива.", en: "The aerodynamics and fuel consumption." },
        { es: "La visibilidad del vehículo.", ru: "Заметность машины.", en: "The vehicle's visibility." }
      ],
      answer: 1,
      explain: { ru: "Обтекатель влияет на сопротивление воздуха, а значит, на устойчивость и расход. Fuente: Tráfico y Seguridad Vial, test nº 277.", en: "The fairing affects air resistance and so stability and fuel use. Source: Tráfico y Seguridad Vial magazine, test no. 277." } },
    { es: "¿Existe riesgo de accidente si un conductor utiliza un dispositivo de manos libres para hablar por teléfono mientras conduce?",
      prompt: { ru: "Есть ли риск аварии, если водитель говорит по телефону через громкую связь?", en: "Is there a risk of an accident if a driver uses a hands-free device to talk on the phone?" },
      options: [
        { es: "No; el dispositivo está pensado para que no exista ningún riesgo.", ru: "Нет: устройство создано, чтобы риска не было.", en: "No: the device is designed to remove any risk." },
        { es: "Sólo si la conversación dura más de cinco minutos.", ru: "Только если разговор длится дольше пяти минут.", en: "Only if the call lasts more than five minutes." },
        { es: "Sí, hay cierto riesgo porque disminuye la atención.", ru: "Да, есть некоторый риск, потому что внимание снижается.", en: "Yes, there is some risk because attention drops." }
      ],
      answer: 2,
      explain: { ru: "Громкая связь разрешена, но разговор всё равно отвлекает внимание от дороги. Fuente: Tráfico y Seguridad Vial, test nº 277.", en: "Hands-free is allowed, but the conversation still takes attention away from the road. Source: Tráfico y Seguridad Vial magazine, test no. 277." } },
    { es: "¿Qué factor de riesgo ocasiona un mayor número de accidentes de tráfico?",
      prompt: { ru: "Какой фактор риска вызывает больше всего ДТП?", en: "Which risk factor causes the most road accidents?" },
      options: [
        { es: "El factor humano.", ru: "Человеческий фактор.", en: "The human factor." },
        { es: "El factor vía y su entorno.", ru: "Дорога и окружение.", en: "The road and its surroundings." },
        { es: "El factor vehículo.", ru: "Транспортное средство.", en: "The vehicle." }
      ],
      answer: 0,
      explain: { ru: "Большинство ДТП связано с человеком: отвлечение, скорость, алкоголь, усталость. Fuente: Tráfico y Seguridad Vial, test nº 277.", en: "Most accidents come down to people: distraction, speed, alcohol, fatigue. Source: Tráfico y Seguridad Vial magazine, test no. 277." } },
    { es: "Como norma general, ¿cómo se denomina el tramo de carretera que discurre por poblado?",
      prompt: { ru: "Как, как правило, называется участок дороги, проходящий через населённый пункт?", en: "As a rule, what is the stretch of road that runs through a built-up area called?" },
      options: [
        { es: "Carretera convencional.", ru: "Обычная дорога (carretera convencional).", en: "Conventional road (carretera convencional)." },
        { es: "Travesía.", ru: "Travesía.", en: "Travesía." },
        { es: "Autovía.", ru: "Autovía.", en: "Autovía." }
      ],
      answer: 1,
      explain: { ru: "Travesía — участок междугородней дороги, проходящий по населённому пункту. Fuente: Tráfico y Seguridad Vial, test nº 277.", en: "A travesía is the stretch of an interurban road running through a town. Source: Tráfico y Seguridad Vial magazine, test no. 277." } },
    { es: "Circula con un turismo con remolque; ¿puede entrar en una vía con esta señal?",
      prompt: { ru: "Вы едете на легковом автомобиле с прицепом. Можно ли въехать на дорогу с этим знаком?", en: "You are driving a car with a trailer. May you enter a road with this sign?" },
      options: [
        { es: "Sí, cuando el remolque tenga un solo eje.", ru: "Да, если у прицепа одна ось.", en: "Yes, if the trailer has a single axle." },
        { es: "No, con ningún vehículo que arrastre un remolque.", ru: "Нет, ни на одной машине с прицепом.", en: "No, with no vehicle towing a trailer." },
        { es: "Sí, con cualquier conjunto de vehículos.", ru: "Да, с любым составом.", en: "Yes, with any combination of vehicles." }
      ],
      answer: 0,
      explain: { ru: "Знак R-112 запрещает въезд машинам с прицепом, кроме полуприцепов и одноосных прицепов. Fuente: Tráfico y Seguridad Vial, test nº 278.", en: "Sign R-112 bans vehicles with a trailer, except semi-trailers and single-axle trailers. Source: Tráfico y Seguridad Vial magazine, test no. 278." },
      sign: "R-112" },
    { es: "El consumo de cannabis afecta al comportamiento del conductor porque...",
      prompt: { ru: "Каннабис влияет на поведение водителя, потому что…", en: "Cannabis affects a driver's behaviour because it…" },
      options: [
        { es: "aumenta su nivel de atención.", ru: "повышает уровень внимания.", en: "increases his attention level." },
        { es: "aumenta su tiempo de reacción.", ru: "увеличивает время реакции.", en: "increases his reaction time." },
        { es: "disminuye la somnolencia.", ru: "уменьшает сонливость.", en: "reduces drowsiness." }
      ],
      answer: 1,
      explain: { ru: "Каннабис замедляет реакцию, ухудшает координацию и восприятие расстояний. Fuente: Tráfico y Seguridad Vial, test nº 278.", en: "Cannabis slows reactions and impairs coordination and judgement of distance. Source: Tráfico y Seguridad Vial magazine, test no. 278." } },
    { es: "¿Puede adelantar en un túnel con un solo carril para cada sentido?",
      prompt: { ru: "Можно ли обгонять в туннеле с одной полосой в каждом направлении?", en: "May you overtake in a tunnel with one lane in each direction?" },
      options: [
        { es: "No, ya que su sentido de la marcha sólo dispone de un carril.", ru: "Нет, ведь в вашем направлении только одна полоса.", en: "No, because your direction has only one lane." },
        { es: "Sí, si en sentido contrario no circula ningún vehículo.", ru: "Да, если навстречу никто не едет.", en: "Yes, if nothing is coming the other way." },
        { es: "No; en los túneles siempre está prohibido adelantar.", ru: "Нет: в туннелях обгон запрещён всегда.", en: "No: overtaking is always forbidden in tunnels." }
      ],
      answer: 0,
      explain: { ru: "В туннеле обгон запрещён, если в вашем направлении одна полоса; при двух и более — разрешён (RGC, ст. 87). Fuente: Tráfico y Seguridad Vial, test nº 278.", en: "Overtaking in a tunnel is banned when your direction has one lane; with two or more it is allowed (RGC art. 87). Source: Tráfico y Seguridad Vial magazine, test no. 278." } },
    { es: "Si se ve obligado a circular con una rueda de repuesto de uso temporal o de emergencia, ¿qué debe tener en cuenta?",
      prompt: { ru: "Если приходится ехать на временном (аварийном) запасном колесе, что нужно учитывать?", en: "If you have to drive on a temporary or emergency spare wheel, what must you bear in mind?" },
      options: [
        { es: "Las indicaciones de los fabricantes de este tipo de repuestos.", ru: "Указания производителя такой запаски.", en: "The manufacturer's instructions for this kind of spare." },
        { es: "Que si está homologada su duración es la misma que la de una rueda normal.", ru: "Что сертифицированная запаска служит столько же, сколько обычное колесо.", en: "That if approved it lasts as long as a normal wheel." },
        { es: "Que su presión debe ser superior a la de las otras tres ruedas.", ru: "Что давление в ней должно быть выше, чем в трёх других колёсах.", en: "That its pressure must be higher than the other three." }
      ],
      answer: 0,
      explain: { ru: "На докатке соблюдают ограничения производителя по скорости и пробегу. Fuente: Tráfico y Seguridad Vial, test nº 278.", en: "On a space-saver follow the maker's speed and distance limits. Source: Tráfico y Seguridad Vial magazine, test no. 278." } },
    { es: "Estas marcas viales azules indican...",
      prompt: { ru: "Эта синяя разметка означает…", en: "These blue road markings indicate…" },
      options: [
        { es: "la zona en que se permite estacionar, al igual que las marcas blancas.", ru: "зону, где можно стоять, как и при белой разметке.", en: "an area where parking is allowed, as with white markings." },
        { es: "que en ciertos periodos del día, la duración del estacionamiento está limitada.", ru: "что в определённые часы время стоянки ограничено.", en: "that at certain times of day parking time is limited." },
        { es: "que está prohibido estacionar.", ru: "что стоянка запрещена.", en: "that parking is forbidden." }
      ],
      answer: 1,
      explain: { ru: "Синяя разметка обозначает зону с ограниченным по времени (обычно платным) паркованием. Fuente: Tráfico y Seguridad Vial, test nº 278.", en: "Blue markings mark a limited-time (usually paid) parking zone. Source: Tráfico y Seguridad Vial magazine, test no. 278." } },
    { es: "Factores variables como la cantidad y la calidad del sueño, el consumo de medicamentos sedantes o la monotonía en la conducción, ¿afectan por igual a todos los conductores?",
      prompt: { ru: "Влияют ли переменные факторы — количество и качество сна, седативные лекарства, монотонная езда — одинаково на всех водителей?", en: "Do variable factors such as the amount and quality of sleep, sedative medicines or monotonous driving affect all drivers equally?" },
      options: [
        { es: "Sólo a los conductores que circulan principalmente de noche.", ru: "Только тех, кто ездит в основном ночью.", en: "Only drivers who mostly drive at night." },
        { es: "No; el mismo factor puede afectar de manera distinta a dos personas.", ru: "Нет: один и тот же фактор может по-разному влиять на двух людей.", en: "No: the same factor may affect two people differently." },
        { es: "Sí.", ru: "Да.", en: "Yes." }
      ],
      answer: 1,
      explain: { ru: "Восприимчивость к сонливости индивидуальна: один и тот же фактор действует на людей по-разному. Fuente: Tráfico y Seguridad Vial, test nº 278.", en: "Susceptibility to drowsiness is individual: the same factor acts differently on different people. Source: Tráfico y Seguridad Vial magazine, test no. 278." } },
    { es: "En vía urbana, cuando utilice el carril que más convenga a su destino, ¿puede abandonar dicho carril?",
      prompt: { ru: "В городе, используя полосу, удобную для вашего маршрута, можно ли её покинуть?", en: "In town, when using the lane best suited to your destination, may you leave it?" },
      options: [
        { es: "Sí, para prepararse a cambiar de dirección, adelantar, parar o estacionar.", ru: "Да, чтобы подготовиться к повороту, обгону, остановке или стоянке.", en: "Yes, to prepare to turn, overtake, stop or park." },
        { es: "No, en ningún caso.", ru: "Нет, ни в коем случае.", en: "No, never." },
        { es: "Sí, pero sólo para cambiar de dirección.", ru: "Да, но только для поворота.", en: "Yes, but only to turn." }
      ],
      answer: 0,
      explain: { ru: "В городе можно ехать по удобной полосе и покидать её для поворота, обгона, остановки или стоянки (RGC, ст. 33). Fuente: Tráfico y Seguridad Vial, test nº 278.", en: "In towns you may use the lane that suits you and leave it to turn, overtake, stop or park (RGC art. 33). Source: Tráfico y Seguridad Vial magazine, test no. 278." } },
    { es: "En una vía urbana, ¿debe tocar el claxon para advertir que va a realizar un adelantamiento?",
      prompt: { ru: "В городе нужно ли сигналить, чтобы предупредить об обгоне?", en: "In town, should you sound the horn to warn that you are overtaking?" },
      options: [
        { es: "Sí, salvo que se encuentre cerca de un hospital.", ru: "Да, если вы не рядом с больницей.", en: "Yes, unless near a hospital." },
        { es: "Sí, siempre que sea a intervalos cortos y el sonido no sea estridente.", ru: "Да, если сигналы короткие и не резкие.", en: "Yes, as long as it is in short, not shrill bursts." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 2,
      explain: { ru: "В населённом пункте гудок для предупреждения об обгоне запрещён; можно только чтобы избежать аварии (RGC, ст. 110). Fuente: Tráfico y Seguridad Vial, test nº 278.", en: "In towns the horn may not be used to announce overtaking, only to avoid an accident (RGC art. 110). Source: Tráfico y Seguridad Vial magazine, test no. 278." } },
    { es: "Circula con la luz de largo alcance y se acerca a un vehículo que circula a menor velocidad en su mismo sentido de la marcha; ¿debe sustituir la luz de carretera por la de corto alcance?",
      prompt: { ru: "Вы едете с дальним светом и догоняете машину, которая едет медленнее в том же направлении. Нужно ли переключиться на ближний?", en: "You are on main beam and catch up with a slower vehicle going the same way. Must you switch to dipped beam?" },
      options: [
        { es: "No, ya que no es necesario ni aconsejable.", ru: "Нет, это не нужно и не советуется.", en: "No, it is neither necessary nor advisable." },
        { es: "Sí, para evitar la posibilidad de deslumbramiento a través del espejo retrovisor.", ru: "Да, чтобы не ослепить через зеркало заднего вида.", en: "Yes, to avoid dazzling through the rear-view mirror." },
        { es: "Solo si no tiene intención de adelantar.", ru: "Только если вы не собираетесь обгонять.", en: "Only if you do not intend to overtake." }
      ],
      answer: 1,
      explain: { ru: "Дальний свет переключают на ближний и при сближении сзади, чтобы не ослеплять водителя через зеркала (RGC, ст. 100). Fuente: Tráfico y Seguridad Vial, test nº 278.", en: "Switch to dipped beam when close behind another vehicle too, so as not to dazzle its driver through the mirrors (RGC art. 100). Source: Tráfico y Seguridad Vial magazine, test no. 278." } },
    { es: "Si un conductor inicia un adelantamiento y se producen circunstancias que hacen difícil finalizar la maniobra...",
      prompt: { ru: "Если водитель начал обгон и возникли обстоятельства, мешающие его закончить…", en: "If a driver starts overtaking and circumstances arise that make it hard to finish…" },
      options: [
        { es: "debe regresar a su carril y advertirlo a los que circulen por detrás.", ru: "он должен вернуться в свою полосу и предупредить тех, кто сзади.", en: "he must return to his lane and warn those behind." },
        { es: "el conductor del vehículo adelantado está obligado a apartarse al arcén.", ru: "обгоняемый обязан съехать на обочину.", en: "the driver being overtaken must pull onto the shoulder." },
        { es: "debe acelerar y terminar la maniobra, aunque genere una situación de riesgo.", ru: "нужно ускориться и закончить манёвр, даже создав опасность.", en: "he must accelerate and finish even if it creates a risk." }
      ],
      answer: 0,
      explain: { ru: "Если обгон не удаётся, его прерывают: возвращаются в свою полосу и предупреждают тех, кто сзади (RGC, ст. 84). Fuente: Tráfico y Seguridad Vial, test nº 278.", en: "If overtaking cannot be completed, abort it: return to your lane and warn those behind (RGC art. 84). Source: Tráfico y Seguridad Vial magazine, test no. 278." } },
    { es: "¿A qué velocidad máxima tiene permitido circular un ciclomotor por esta carretera convencional con un carril para cada sentido de la circulación?",
      prompt: { ru: "С какой максимальной скоростью может ехать мопед по этой обычной дороге с одной полосой в каждом направлении?", en: "What is the maximum speed for a moped on this conventional road with one lane in each direction?" },
      options: [
        { es: "45 kilómetros por hora.", ru: "45 км/ч.", en: "45 km/h." },
        { es: "80 kilómetros por hora.", ru: "80 км/ч.", en: "80 km/h." },
        { es: "60 kilómetros por hora.", ru: "60 км/ч.", en: "60 km/h." }
      ],
      answer: 0,
      explain: { ru: "Мопед по конструкции и по правилам не может ехать быстрее 45 км/ч (RGC, ст. 48). Fuente: Tráfico y Seguridad Vial, test nº 278.", en: "A moped is limited by design and by the rules to 45 km/h (RGC art. 48). Source: Tráfico y Seguridad Vial magazine, test no. 278." } },
    { es: "¿Cuál es una de las infracciones que cometen los conductores con mayor riesgo para los peatones?",
      prompt: { ru: "Какое из нарушений водителей наиболее опасно для пешеходов?", en: "Which driver offence is among the most dangerous for pedestrians?" },
      options: [
        { es: "No respetar la prioridad en los pasos para peatones.", ru: "Не уступать на пешеходных переходах.", en: "Not respecting priority at pedestrian crossings." },
        { es: "Circular por una autovía en sentido contrario al establecido.", ru: "Ехать по autovía во встречном направлении.", en: "Driving the wrong way on an autovía." },
        { es: "No mantener la distancia de seguridad con el vehículo que circula delante.", ru: "Не держать дистанцию до передней машины.", en: "Not keeping a safe distance from the vehicle in front." }
      ],
      answer: 0,
      explain: { ru: "Многие наезды на пешеходов происходят на переходах, когда водитель не уступает. Fuente: Tráfico y Seguridad Vial, test nº 278.", en: "Many pedestrians are hit at crossings because drivers fail to give way. Source: Tráfico y Seguridad Vial magazine, test no. 278." } },
    { es: "¿Quién está obligado a cuidar de que los pasajeros de un vehículo mantengan la posición adecuada para garantizar la seguridad?",
      prompt: { ru: "Кто обязан следить, чтобы пассажиры сидели правильно для безопасности?", en: "Who must make sure the passengers keep a proper position for safety?" },
      options: [
        { es: "Los pasajeros mayores de edad.", ru: "Совершеннолетние пассажиры.", en: "Adult passengers." },
        { es: "El pasajero que ocupe el asiento delantero.", ru: "Пассажир на переднем сиденье.", en: "The passenger in the front seat." },
        { es: "El conductor.", ru: "Водитель.", en: "The driver." }
      ],
      answer: 2,
      explain: { ru: "Водитель отвечает за правильное положение пассажиров и размещение предметов (RGC, ст. 18). Fuente: Tráfico y Seguridad Vial, test nº 278.", en: "The driver is responsible for passengers' proper position and how objects are placed (RGC art. 18). Source: Tráfico y Seguridad Vial magazine, test no. 278." } },
    { es: "Si un vehículo de la policía de tráfico se sitúa detrás de usted y enciende un dispositivo con una luz roja destelleante hacia delante, ¿qué debe hacer?",
      prompt: { ru: "Если полицейская машина встаёт позади вас и включает устройство с мигающим красным светом вперёд, что нужно сделать?", en: "If a traffic police vehicle gets behind you and turns on a flashing red light facing forwards, what must you do?" },
      options: [
        { es: "Detenerse y, en su caso, seguir las instrucciones del agente.", ru: "Остановиться и при необходимости выполнять указания агента.", en: "Stop and, if necessary, follow the officer's instructions." },
        { es: "Reducir la velocidad y apartarse a la derecha, para facilitar el adelantamiento.", ru: "Снизить скорость и сместиться вправо, чтобы её пропустить.", en: "Slow down and move right to let it overtake." },
        { es: "Detenerse en el lado izquierdo de la calzada, delante del vehículo policial.", ru: "Остановиться слева, впереди полицейской машины.", en: "Stop on the left of the carriageway, in front of the police vehicle." }
      ],
      answer: 0,
      explain: { ru: "Красный мигающий свет вперёд на полицейской машине позади — приказ остановиться справа. Fuente: Tráfico y Seguridad Vial, test nº 278.", en: "A forward-facing flashing red light on a police car behind you is an order to stop on the right. Source: Tráfico y Seguridad Vial magazine, test no. 278." } },
    { es: "¿Es peligroso conducir cuando los rayos de sol caen de forma directa sobre los ojos del conductor?",
      prompt: { ru: "Опасно ли вести машину, когда солнце светит прямо в глаза?", en: "Is it dangerous to drive with the sun shining straight into the driver's eyes?" },
      options: [
        { es: "Sí, pero encendiendo la luz de largo alcance se mejora la visibilidad.", ru: "Да, но дальний свет улучшает видимость.", en: "Yes, but switching on main beam improves visibility." },
        { es: "No, porque al haber más luz, la visibilidad es mejor.", ru: "Нет, больше света — лучше видно.", en: "No, more light means better visibility." },
        { es: "Sí, la visión se ve afectada y es difícil distinguir lo que ocurre alrededor.", ru: "Да, зрение страдает, и трудно различить, что происходит вокруг.", en: "Yes, vision is affected and it is hard to see what is going on around." }
      ],
      answer: 2,
      explain: { ru: "Прямое солнце ослепляет, водитель щурится и устаёт; это может привести к аварии. Нужно быть особенно внимательным и осторожным. Fuente: Tráfico y Seguridad Vial, test nº 278.", en: "Direct sun dazzles the driver, who squints and tires; it can lead to an accident. Take extra care and attention. Source: Tráfico y Seguridad Vial magazine, test no. 278." } },
    { es: "Cuando no se pueda posicionar el vehículo paralelo al borde de la calzada, ¿se podrá permitir la parada o el estacionamiento dejando el vehículo en otra posición?",
      prompt: { ru: "Если машину нельзя поставить параллельно краю проезжей части, можно ли разрешить остановку или стоянку в другом положении?", en: "When a vehicle cannot be placed parallel to the edge of the carriageway, may stopping or parking in another position be allowed?" },
      options: [
        { es: "Sí, cuando las características de la vía u otras circunstancias así lo aconsejen.", ru: "Да, когда это требуют особенности дороги или другие обстоятельства.", en: "Yes, when the road layout or other circumstances make it advisable." },
        { es: "Sólo si existe alguna señal que permita el estacionamiento en batería.", ru: "Только если знак разрешает стоянку «ёлочкой» или перпендикулярно.", en: "Only if a sign allows angled (battery) parking." },
        { es: "No, en ningún caso.", ru: "Нет, ни в коем случае.", en: "No, never." }
      ],
      answer: 0,
      explain: { ru: "Как правило, ставят параллельно краю, но иное положение допустимо, если этого требуют дорога или обстоятельства (RGC, ст. 92). Fuente: Tráfico y Seguridad Vial, test nº 279.", en: "As a rule you park parallel to the edge, but another position is allowed when the road or circumstances require (RGC art. 92). Source: Tráfico y Seguridad Vial magazine, test no. 279." } },
    { es: "¿Cómo debe realizarse un cambio de carril en una vía saturada?",
      prompt: { ru: "Как перестраиваться на загруженной дороге?", en: "How should you change lanes on a saturated road?" },
      options: [
        { es: "Utilizando el arcén.", ru: "Через обочину.", en: "Using the hard shoulder." },
        { es: "Advirtiéndolo con suficiente antelación.", ru: "Заранее предупредив об этом.", en: "Signalling it well in advance." },
        { es: "Realizando la maniobra rápidamente para no estorbar.", ru: "Быстро, чтобы не мешать.", en: "Doing it quickly so as not to get in the way." }
      ],
      answer: 1,
      explain: { ru: "Смену полосы показывают заранее и выполняют, только убедившись, что это безопасно. Fuente: Tráfico y Seguridad Vial, test nº 279.", en: "Signal a lane change well in advance and make it only after checking it is safe. Source: Tráfico y Seguridad Vial magazine, test no. 279." } },
    { es: "¿De qué próximo peligro advierte esta señal?",
      prompt: { ru: "О какой опасности впереди предупреждает этот знак?", en: "What danger ahead does this sign warn of?" },
      options: [
        { es: "Un estrechamiento de la calzada.", ru: "О сужении проезжей части.", en: "A narrowing of the carriageway." },
        { es: "Un tramo con circulación en ambos sentidos.", ru: "Об участке с движением в обоих направлениях.", en: "A stretch with traffic in both directions." },
        { es: "Un tramo con prioridad respecto a los vehículos que circulan en sentido contrario.", ru: "Об участке с приоритетом над встречным движением.", en: "A stretch with priority over oncoming traffic." }
      ],
      answer: 1,
      explain: { ru: "Знак P-25 (две стрелки в разные стороны) — участок с двусторонним движением. Fuente: Tráfico y Seguridad Vial, test nº 279.", en: "Sign P-25 (two arrows in opposite directions) warns of two-way traffic. Source: Tráfico y Seguridad Vial magazine, test no. 279." },
      sign: "P-25" },
    { es: "Para reducir el riesgo de accidente, un conductor que esté tomando medicamentos debe...",
      prompt: { ru: "Чтобы снизить риск аварии, водитель, принимающий лекарства, должен…", en: "To reduce the accident risk, a driver taking medicines should…" },
      options: [
        { es: "conocer sus posibles efectos secundarios y seguir las indicaciones del médico.", ru: "знать их возможные побочные эффекты и следовать указаниям врача.", en: "know their possible side effects and follow the doctor's advice." },
        { es: "evitar la conducción de vehículos mientras dure el tratamiento.", ru: "не водить, пока длится лечение.", en: "avoid driving throughout the treatment." },
        { es: "tomar café para combatir sus posibles efectos secundarios.", ru: "пить кофе против побочных эффектов.", en: "drink coffee to counter possible side effects." }
      ],
      answer: 0,
      explain: { ru: "Не все лекарства запрещают вождение: нужно знать их эффекты и слушать врача (на упаковке опасных — пиктограмма с машиной). Fuente: Tráfico y Seguridad Vial, test nº 279.", en: "Not all medicines rule out driving: know their effects and follow the doctor (risky ones carry a car pictogram). Source: Tráfico y Seguridad Vial magazine, test no. 279." } },
    { es: "La mayor parte de las distracciones del conductor se relacionan con...",
      prompt: { ru: "Большинство отвлечений водителя связаны с…", en: "Most driver distractions are related to…" },
      options: [
        { es: "su estado psicofísico y su comportamiento.", ru: "его состоянием и поведением.", en: "his psychophysical state and behaviour." },
        { es: "la disposición de los mandos en el vehículo.", ru: "расположением органов управления в машине.", en: "the layout of the controls in the vehicle." },
        { es: "factores externos, como la vía y su entorno.", ru: "внешними факторами — дорогой и окружением.", en: "external factors such as the road and its surroundings." }
      ],
      answer: 0,
      explain: { ru: "Чаще всего отвлекаются из-за себя: телефон, усталость, мысли, разговоры. Fuente: Tráfico y Seguridad Vial, test nº 279.", en: "Most distractions come from the driver: phone, fatigue, thoughts, conversations. Source: Tráfico y Seguridad Vial magazine, test no. 279." } },
    { es: "Este conjunto de vehículos con remolque de 750 kg de M.M.A., ¿a qué velocidad puede circular como máximo por una autovía?",
      prompt: { ru: "С какой максимальной скоростью этот состав с прицепом массой 750 кг может ехать по autovía?", en: "What is the maximum speed on an autovía for this combination with a 750 kg MAM trailer?" },
      options: [
        { es: "A 100 km/h.", ru: "100 км/ч.", en: "100 km/h." },
        { es: "A 120 km/h.", ru: "120 км/ч.", en: "120 km/h." },
        { es: "A 90 km/h.", ru: "90 км/ч.", en: "90 km/h." }
      ],
      answer: 2,
      explain: { ru: "Легковые автомобили с прицепом — не больше 90 км/ч на autopista и autovía (RGC, ст. 48). Fuente: Tráfico y Seguridad Vial, test nº 279.", en: "Cars with a trailer may do no more than 90 km/h on autopistas and autovías (RGC art. 48). Source: Tráfico y Seguridad Vial magazine, test no. 279." } },
    { es: "A una ambulancia que use únicamente la señal especial luminosa, ¿se le debe ceder el paso?",
      prompt: { ru: "Нужно ли уступать дорогу «скорой», которая включила только световой сигнал?", en: "Must you give way to an ambulance using only its special light signal?" },
      options: [
        { es: "No, debe emplear de forma conjunta la señal luminosa y la acústica.", ru: "Нет, она должна одновременно включать свет и звук.", en: "No, it must use the light and sound signals together." },
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "Sí, pero sólo en vías urbanas.", ru: "Да, но только в городе.", en: "Yes, but only in towns." }
      ],
      answer: 1,
      explain: { ru: "Приоритетная машина может ехать только с маячком; уступать ей всё равно нужно (RGC, ст. 68). Fuente: Tráfico y Seguridad Vial, test nº 279.", en: "A priority vehicle may use only the flashing light; you must still give way (RGC art. 68). Source: Tráfico y Seguridad Vial magazine, test no. 279." } },
    { es: "Tomando las debidas precauciones, ¿por dónde podrá circular una persona que empuje con las manos una bicicleta cuando su tránsito por la acera sea un estorbo para los demás peatones?",
      prompt: { ru: "Соблюдая осторожность, где может идти человек, который ведёт велосипед руками, если на тротуаре он мешает пешеходам?", en: "Taking due care, where may a person pushing a bicycle by hand walk when using the footway would hinder other pedestrians?" },
      options: [
        { es: "Por la calzada, pero en ningún caso por el arcén.", ru: "По проезжей части, но не по обочине.", en: "On the carriageway, but never on the shoulder." },
        { es: "Por el arcén, pero en ningún caso por la calzada.", ru: "По обочине, но не по проезжей части.", en: "On the shoulder, but never on the carriageway." },
        { es: "Por el arcén o por la calzada.", ru: "По обочине или по проезжей части.", en: "On the shoulder or on the carriageway." }
      ],
      answer: 2,
      explain: { ru: "Пешеход с велосипедом, который мешает на тротуаре, может идти по обочине или по проезжей части (RGC, ст. 121). Fuente: Tráfico y Seguridad Vial, test nº 279.", en: "A pedestrian pushing a bicycle who would hinder others on the footway may use the shoulder or the carriageway (RGC art. 121). Source: Tráfico y Seguridad Vial magazine, test no. 279." } },
    { es: "Circular a velocidad inferior a la mínima permitida sin causa justificada, ¿es peligroso?",
      prompt: { ru: "Опасно ли ехать медленнее минимальной скорости без уважительной причины?", en: "Is it dangerous to drive below the minimum speed without a good reason?" },
      options: [
        { es: "Sí, y además está prohibido.", ru: "Да, и к тому же это запрещено.", en: "Yes, and it is also forbidden." },
        { es: "No, porque circular más despacio es siempre más seguro.", ru: "Нет, медленнее всегда безопаснее.", en: "No, because driving slower is always safer." },
        { es: "Sí, porque lo más seguro es circular a la velocidad máxima permitida.", ru: "Да, ведь безопаснее всего ехать с максимальной скоростью.", en: "Yes, because the safest is to drive at the maximum speed." }
      ],
      answer: 0,
      explain: { ru: "Слишком медленная машина вынуждает других тормозить и обгонять, поэтому это опасно и запрещено (RGC, ст. 49). Fuente: Tráfico y Seguridad Vial, test nº 279.", en: "A vehicle that is too slow forces others to brake and overtake, so it is dangerous and forbidden (RGC art. 49). Source: Tráfico y Seguridad Vial magazine, test no. 279." } },
    { es: "Este turismo circula por una autovía a 100 km/h; ¿circula a velocidad adecuada?",
      prompt: { ru: "Этот легковой автомобиль едет по autovía со скоростью 100 км/ч. Подходящая ли это скорость?", en: "This car is doing 100 km/h on an autovía. Is it driving at a suitable speed?" },
      options: [
        { es: "No, porque lo aconsejado es circular a 120 km/h.", ru: "Нет, рекомендуется 120 км/ч.", en: "No, because the advised speed is 120 km/h." },
        { es: "Sí, siempre que lo permitan las circunstancias del tráfico y de la vía.", ru: "Да, если это позволяют обстановка и дорога.", en: "Yes, as long as traffic and road conditions allow it." },
        { es: "Sí, siempre que no entorpezca la circulación.", ru: "Да, если она не мешает движению.", en: "Yes, as long as it does not hinder traffic." }
      ],
      answer: 1,
      explain: { ru: "Подходящая скорость — не выше предела и соответствующая условиям; 100 км/ч может быть подходящей. Fuente: Tráfico y Seguridad Vial, test nº 279.", en: "A suitable speed is within the limit and fits the conditions; 100 km/h can be suitable. Source: Tráfico y Seguridad Vial magazine, test no. 279." } },
    { es: "Una vez abrochado el cinturón de seguridad, es aconsejable...",
      prompt: { ru: "Пристегнув ремень безопасности, рекомендуется…", en: "Once the seat belt is fastened, it is advisable to…" },
      options: [
        { es: "colocar una pinza para que quede holgado.", ru: "поставить зажим, чтобы он был свободнее.", en: "fit a clip so it stays slack." },
        { es: "comprobar que está bien colocado y ajustado al cuerpo.", ru: "проверить, что он правильно лежит и прилегает к телу.", en: "check that it is properly placed and fits snugly." },
        { es: "aflojar la zona abdominal para estar más cómodo.", ru: "ослабить поясную часть для удобства.", en: "loosen the lap part to be more comfortable." }
      ],
      answer: 1,
      explain: { ru: "Ремень должен быть натянут: плечевая лента по плечу, поясная — низко по тазу, без зажимов. Fuente: Tráfico y Seguridad Vial, test nº 279.", en: "The belt must be taut: shoulder strap across the shoulder, lap belt low on the hips, no clips. Source: Tráfico y Seguridad Vial magazine, test no. 279." } },
    { es: "El conductor de la motocicleta está realizando un adelantamiento fuera de poblado; ¿qué separación lateral debe dejar con el vehículo adelantado?",
      prompt: { ru: "Мотоциклист обгоняет вне населённого пункта. Какой боковой интервал он должен оставить?", en: "The motorcyclist is overtaking outside a town. What lateral gap must he leave?" },
      options: [
        { es: "Superior a 1,50 metros.", ru: "Больше 1,50 метра.", en: "More than 1.50 metres." },
        { es: "Superior a 1,20 metros e inferior a 1,50 metros.", ru: "Больше 1,20 и меньше 1,50 метра.", en: "More than 1.20 and less than 1.50 metres." },
        { es: "La proporcional a la anchura de la vía.", ru: "Пропорциональный ширине дороги.", en: "One proportional to the width of the road." }
      ],
      answer: 0,
      explain: { ru: "Так ответил журнал: мотоцикл, обгоняющий вне населённого пункта, оставляет больше 1,5 м. Fuente: Tráfico y Seguridad Vial, test nº 279.", en: "The magazine's answer: a motorcycle overtaking outside towns must leave more than 1.5 m. Source: Tráfico y Seguridad Vial magazine, test no. 279." } },
    { es: "¿Puede circular un turismo por una vía regulada con esta señal?",
      prompt: { ru: "Может ли легковой автомобиль ехать по дороге с этим знаком?", en: "May a car use a road with this sign?" },
      options: [
        { es: "No, porque es un camino reservado para animales de montura.", ru: "Нет, это дорога только для верховых животных.", en: "No, because it is a path reserved for horse riders." },
        { es: "Sí, con precaución, porque también podrían circular animales de montura.", ru: "Да, осторожно, ведь могут быть и верховые.", en: "Yes, with care, as horse riders may also be on it." },
        { es: "Sí, porque esta señal prohíbe el paso a animales de montura.", ru: "Да, ведь знак запрещает проезд верховым.", en: "Yes, because this sign bans horse riders." }
      ],
      answer: 0,
      explain: { ru: "Знак R-409 — дорога, выделенная и обязательная для всадников; другим машинам ехать по ней нельзя. Fuente: Tráfico y Seguridad Vial, test nº 279.", en: "Sign R-409 marks a path reserved for and compulsory for horse riders; other vehicles may not use it. Source: Tráfico y Seguridad Vial magazine, test no. 279." },
      sign: "R-409" },
    { es: "Entre otras precauciones, ¿qué debemos hacer para compensar el riesgo que supone conducir bajo la lluvia?",
      prompt: { ru: "Среди прочего, что нужно делать, чтобы компенсировать риск езды под дождём?", en: "Among other precautions, what should we do to offset the risk of driving in the rain?" },
      options: [
        { es: "Aumentar la distancia de seguridad para evitar los alcances por pérdida de adherencia.", ru: "Увеличить дистанцию, чтобы не врезаться из-за потери сцепления.", en: "Increase the safety distance to avoid rear-ending due to loss of grip." },
        { es: "Reducir la distancia de seguridad y encender la luz de cruce para hacerse ver.", ru: "Уменьшить дистанцию и включить ближний свет, чтобы быть заметным.", en: "Reduce the safety distance and switch on dipped beam to be seen." },
        { es: "Reducir la presión de los neumáticos para mejorar la adherencia.", ru: "Снизить давление в шинах для лучшего сцепления.", en: "Lower the tyre pressure to improve grip." }
      ],
      answer: 0,
      explain: { ru: "В дождь тормозной путь длиннее, поэтому дистанцию увеличивают. Fuente: Tráfico y Seguridad Vial, test nº 279.", en: "In rain braking distance is longer, so increase the gap. Source: Tráfico y Seguridad Vial magazine, test no. 279." } },
    { es: "¿Cuántas plazas, como máximo, podrá tener un vehículo de movilidad personal?",
      prompt: { ru: "Сколько мест максимум может быть у средства индивидуальной мобильности (СИМ)?", en: "What is the maximum number of seats a personal mobility vehicle may have?" },
      options: [
        { es: "Una plaza.", ru: "Одно место.", en: "One seat." },
        { es: "Dos plazas.", ru: "Два места.", en: "Two seats." },
        { es: "Una o dos plazas, depende del tipo de vehículo de movilidad personal.", ru: "Одно или два, в зависимости от типа СИМ.", en: "One or two, depending on the type of personal mobility vehicle." }
      ],
      answer: 0,
      explain: { ru: "СИМ (самокаты и т. п.) — одноместные транспортные средства; пассажиров возить нельзя. Fuente: Tráfico y Seguridad Vial, test nº 279.", en: "Personal mobility vehicles (e-scooters etc.) are single-seat; passengers are not allowed. Source: Tráfico y Seguridad Vial magazine, test no. 279." } }
    ]
  }
]);
