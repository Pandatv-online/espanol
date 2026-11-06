// DGT · tests from the DGT magazine «Tráfico y Seguridad Vial» (revista.dgt.es/es/test/), issues 224–279.
// Fuente: revista Tráfico y Seguridad Vial, DGT — revista.dgt.es. The magazine allows its TEXTS to be reproduced
// with the source cited (aviso legal); its drawings and photos are NOT reproduced here. Translations and
// explanations are ours; sign pictures come from the official catalogue (img/signs/).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-revista', level: 'DGT',
    title: { ru: 'Тесты журнала DGT', en: 'DGT magazine tests' },
    summary: { ru: '690 вопросов из тестов журнала «Tráfico y Seguridad Vial» (2014–2026), с переводом и пояснениями.', en: '690 questions from the «Tráfico y Seguridad Vial» magazine tests (2014–2026), translated and explained.' },
    hero: { es: 'Tests de la revista Tráfico y Seguridad Vial', sub: { ru: 'Настоящие вопросы журнала DGT · 30 случайных за раз', en: 'Real questions from the DGT magazine · 30 at random each time' } },
  tabs: [
    {
      id: 'about', label: { ru: 'О тестах', en: 'About' },
      blocks: [
        { type: 'text', body: {
          ru: ['Журнал DGT <b>«Tráfico y Seguridad Vial»</b> регулярно публикует короткие тесты в формате теоретического экзамена: вопрос, три варианта, один верный. Здесь собраны вопросы из номеров 224–279 (февраль 2014 — октябрь 2026; вопросы до 2022 года сверены с действующими правилами — устаревшие убраны или исправлены с пометкой «Правило изменилось») — те, что понятны без картинки журнала; если вопросу нужен дорожный знак, показан знак из официального каталога.'],
          en: ['The DGT magazine <b>«Tráfico y Seguridad Vial»</b> regularly publishes short tests in the theory-exam format: a question, three options, one right answer. This topic collects the questions from issues 224–279 (February 2014 — October 2026; questions from before 2022 were checked against current rules — outdated ones were dropped or corrected and marked “The rule has changed”) that make sense without the magazine’s picture; where a question is about a road sign, the sign from the official catalogue is shown.'] } },
        { type: 'rules', heading: { ru: 'Источник', en: 'Source' }, items: [
          { color: 'blue', title: { ru: 'Тексты журнала', en: 'Magazine texts' }, es: 'Fuente: revista Tráfico y Seguridad Vial, DGT — revista.dgt.es',
            body: { ru: 'Вопросы и варианты — оригинальный испанский текст журнала; перевод и пояснения — наши. Журнал разрешает воспроизводить свои тексты с указанием источника.',
                    en: 'Questions and options are the magazine’s original Spanish text; translations and explanations are ours. The magazine allows its texts to be reproduced if the source is cited.' } },
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
      explain: { ru: "Обычная машина, выполняющая срочную перевозку больного, не становится приоритетным транспортом: она должна соблюдать правила и обозначать ситуацию аварийной сигнализацией (RGC, ст. 69).", en: "An ordinary car carrying a sick person urgently is not a priority vehicle: it must keep to the rules and signal the situation with the hazard lights (RGC art. 69)." } },
    { es: "En este cruce, ¿qué se debe hacer?",
      prompt: { ru: "Что нужно делать на этом перекрёстке?", en: "What must you do at this junction?" },
      options: [
        { es: "Detenerse solo si se aproximan vehículos por la derecha.", ru: "Остановиться, только если справа приближаются машины.", en: "Stop only if vehicles are approaching from the right." },
        { es: "Detenerse y ceder el paso a todos los vehículos que se aproximen por ambos lados.", ru: "Остановиться и уступить дорогу всем машинам, которые приближаются с обеих сторон.", en: "Stop and give way to all vehicles approaching from either side." },
        { es: "Detenerse solo si se aproximan vehículos por la izquierda.", ru: "Остановиться, только если слева приближаются машины.", en: "Stop only if vehicles are approaching from the left." }
      ],
      answer: 1,
      explain: { ru: "Знак STOP обязывает полностью остановиться у линии и уступить дорогу всем, кто едет по пересекаемой дороге, слева и справа.", en: "The STOP sign obliges you to stop completely at the line and give way to everyone on the road you are crossing, from the left and from the right." },
      sign: "R-2" },
    { es: "El carril izquierdo está abierto en sentido contrario al habitual; ¿a qué velocidad máxima pueden circular los vehículos que circulan por el carril derecho?",
      prompt: { ru: "Левая полоса открыта для движения во встречном (непривычном) направлении. С какой максимальной скоростью могут ехать машины по правой полосе?", en: "The left lane has been opened in the opposite direction to the usual one. What is the maximum speed for vehicles in the right lane?" },
      options: [
        { es: "A la velocidad máxima de la vía, 120 km/h.", ru: "С максимальной скоростью дороги, 120 км/ч.", en: "At the road's maximum speed, 120 km/h." },
        { es: "A 60 km/h.", ru: "60 км/ч.", en: "60 km/h." },
        { es: "A 80 km/h.", ru: "80 км/ч.", en: "80 km/h." }
      ],
      answer: 2,
      explain: { ru: "Когда соседнюю полосу открывают для встречного движения, ограничение 80 км/ч действует для машин на смежных полосах обоих направлений.", en: "When the next lane is opened to opposite traffic, an 80 km/h limit applies to vehicles in the adjoining lanes of both directions." } },
    { es: "¿Está permitido circular por una autovía por debajo del límite mínimo de velocidad establecido para dicha vía sin causa justificada",
      prompt: { ru: "Разрешено ли ехать по автомагистрали (autovía) медленнее установленной минимальной скорости без уважительной причины?", en: "Is it allowed to drive on an autovía below its minimum speed without a good reason?" },
      options: [
        { es: "No, porque es una velocidad anormalmente reducida.", ru: "Нет, потому что это аномально низкая скорость.", en: "No, because that is an abnormally low speed." },
        { es: "Sí, aunque es obligatorio circular por el arcén.", ru: "Да, но тогда нужно ехать по обочине.", en: "Yes, but then you must drive on the hard shoulder." },
        { es: "Solo si no se entorpece la marcha normal de otros vehículos.", ru: "Только если вы не мешаете нормальному движению других машин.", en: "Only if you do not hinder the normal flow of other vehicles." }
      ],
      answer: 0,
      explain: { ru: "Езда ниже минимальной скорости без причины считается аномально низкой скоростью и запрещена (RGC, ст. 49).", en: "Driving below the minimum speed without a reason counts as abnormally low speed and is forbidden (RGC art. 49)." } },
    { es: "Una cuadrícula de marcas amarillas pintada en el suelo indica...",
      prompt: { ru: "Жёлтая сетка (клетка), нарисованная на дороге, означает…", en: "A grid of yellow markings painted on the road means…" },
      options: [
        { es: "que no se puede franquear la intersección.", ru: "что перекрёсток проезжать нельзя.", en: "that you may not cross the junction." },
        { es: "que no se debe entrar en la intersección si se puede quedar detenido en ella, obstaculizando la circulación.", ru: "что нельзя въезжать на перекрёсток, если вы можете на нём остановиться и помешать движению.", en: "that you must not enter the junction if you might stop on it and block traffic." },
        { es: "que el estacionamiento está prohibido.", ru: "что стоянка запрещена.", en: "that parking is forbidden." }
      ],
      answer: 1,
      explain: { ru: "Жёлтая сетка отмечает зону перекрёстка, на которую нельзя въезжать, если впереди затор и вы рискуете там остановиться.", en: "The yellow grid marks a junction area you must not enter if traffic ahead is stuck and you might stop there." } },
    { es: "El conductor de un vehículo extiende el brazo horizontalmente con la palma de la mano hacia atrás, ¿qué indica?",
      prompt: { ru: "Водитель вытягивает руку горизонтально ладонью назад. Что это означает?", en: "A driver holds an arm out horizontally with the palm facing backwards. What does it mean?" },
      options: [
        { es: "Que va a girar a la izquierda.", ru: "Что он повернёт налево.", en: "That he is going to turn left." },
        { es: "Que va a circular marcha atrás.", ru: "Что он поедет задним ходом.", en: "That he is going to reverse." },
        { es: "Que tiene intención de inmovilizar el vehículo o de frenar su marcha de modo considerable.", ru: "Что он собирается остановиться или значительно снизить скорость.", en: "That he intends to stop or slow down considerably." }
      ],
      answer: 1,
      explain: { ru: "Рука, вытянутая горизонтально ладонью назад, — сигнал движения задним ходом; торможение показывают движением руки вверх-вниз.", en: "An arm held out horizontally with the palm backwards signals reversing; slowing down is shown by moving the arm up and down." } },
    { es: "Entre los gastos sanitarios derivados de los accidentes de tráfico con víctimas se encuentran...",
      prompt: { ru: "К медицинским расходам, связанным с ДТП с пострадавшими, относятся…", en: "Among the healthcare costs of road accidents with casualties are…" },
      options: [
        { es: "los derivados por la pérdida de producción de personas empleadas.", ru: "потери из-за того, что работающие люди не могут производить.", en: "losses because employed people stop producing." },
        { es: "los daños causados al medio ambiente.", ru: "ущерб окружающей среде.", en: "damage to the environment." },
        { es: "los de rehabilitación en centros de salud.", ru: "расходы на реабилитацию в медицинских центрах.", en: "the cost of rehabilitation in health centres." }
      ],
      answer: 2,
      explain: { ru: "Медицинские расходы — это лечение и реабилитация пострадавших; потеря производства и ущерб среде — другие виды издержек.", en: "Healthcare costs are treatment and rehabilitation of the injured; lost production and environmental damage are other kinds of cost." } },
    { es: "En general, un conductor con estrés...",
      prompt: { ru: "Как правило, водитель в состоянии стресса…", en: "In general, a driver under stress…" },
      options: [
        { es: "se distrae con mayor facilidad.", ru: "легче отвлекается.", en: "is more easily distracted." },
        { es: "toma decisiones más rápidas y comete menos errores.", ru: "принимает решения быстрее и ошибается реже.", en: "makes faster decisions and fewer mistakes." },
        { es: "presta mayor atención al entorno y tarda más en tomar decisiones.", ru: "внимательнее к обстановке и дольше принимает решения.", en: "pays more attention to the surroundings and takes longer to decide." }
      ],
      answer: 0,
      explain: { ru: "Стресс снижает внимание: водитель легче отвлекается и чаще ошибается.", en: "Stress lowers attention: the driver is more easily distracted and makes more mistakes." } },
    { es: "En caso de contradicción entre señales del mismo tipo, ¿cuál prevalecerá?",
      prompt: { ru: "Если знаки одного типа противоречат друг другу, какой из них действует?", en: "If signs of the same type contradict each other, which one prevails?" },
      options: [
        { es: "La menos restrictiva.", ru: "Менее строгий.", en: "The less restrictive one." },
        { es: "La más restrictiva.", ru: "Более строгий.", en: "The more restrictive one." },
        { es: "Ninguna de las señales.", ru: "Ни один из знаков.", en: "Neither of them." }
      ],
      answer: 1,
      explain: { ru: "При противоречии между знаками одного типа действует более строгий (RGC, ст. 133).", en: "When signs of the same type contradict each other, the more restrictive one prevails (RGC art. 133)." } },
    { es: "Una persona provista de un certificado médico que le exima de utilizar los sistemas de retención del vehículo, ¿está obligada a llevar abrochado el cinturón de seguridad?",
      prompt: { ru: "Должен ли пристёгиваться ремнём человек с медицинской справкой, освобождающей его от использования удерживающих систем?", en: "Must a person with a medical certificate exempting them from restraint systems wear a seat belt?" },
      options: [
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Únicamente fuera de poblado.", ru: "Только вне населённого пункта.", en: "Only outside built-up areas." }
      ],
      answer: 1,
      explain: { ru: "Медицинская справка об освобождении — одно из исключений из обязанности пристёгиваться (RGC, ст. 119).", en: "A medical exemption certificate is one of the exceptions to the seat-belt obligation (RGC art. 119)." } },
    { es: "Debido a una retención de circulación tiene que reducir, de modo considerable, la velocidad de su vehículo. ¿Debe advertir, siempre que sea posible, a los vehículos que circulan detrás?",
      prompt: { ru: "Из-за затора вам приходится сильно снизить скорость. Нужно ли по возможности предупредить машины, которые едут сзади?", en: "Because of a hold-up you have to slow down a lot. Should you, whenever possible, warn the vehicles behind you?" },
      options: [
        { es: "Sí, con el empleo de la luz de emergencia.", ru: "Да, аварийной сигнализацией.", en: "Yes, with the hazard lights." },
        { es: "Sí, con el empleo reiterado de las luces de frenado o moviendo el brazo alternativamente de arriba a abajo.", ru: "Да, многократным нажатием на тормоз (стоп-сигналы) или движением руки вверх-вниз.", en: "Yes, by repeatedly flashing the brake lights or by moving your arm up and down." },
        { es: "No, está prohibido hacer advertencias, ya que pueden crear confusión.", ru: "Нет, предупреждать запрещено, это может запутать других.", en: "No, warnings are forbidden as they may confuse others." }
      ],
      answer: 1,
      explain: { ru: "На въездах и выездах из городов часто бывают заторы, и при резком торможении есть риск удара сзади. Поэтому по возможности предупреждают тех, кто сзади: многократно включая стоп-сигналы или короткими движениями руки вверх-вниз.", en: "Entrances and exits of cities often have hold-ups, and braking hard risks a rear-end collision. So, whenever possible, warn those behind by repeatedly flashing the brake lights or by moving the arm up and down in short movements." } },
    { es: "En vías urbanas de doble sentido de circulación, ¿en qué lado de la calzada puede estacionar un turismo?",
      prompt: { ru: "На городской улице с двусторонним движением, с какой стороны проезжей части может стоять легковой автомобиль?", en: "On a two-way urban street, on which side of the carriageway may a car park?" },
      options: [
        { es: "A ambos lados cuando la línea de separación de los sentidos sea discontinua.", ru: "С обеих сторон, если линия между направлениями прерывистая.", en: "On both sides if the line between directions is broken." },
        { es: "En el lado izquierdo de la calzada en el sentido de la marcha.", ru: "С левой стороны по ходу движения.", en: "On the left-hand side in the direction of travel." },
        { es: "En el lado derecho de la calzada en el sentido de la marcha.", ru: "С правой стороны по ходу движения.", en: "On the right-hand side in the direction of travel." }
      ],
      answer: 2,
      explain: { ru: "На улицах с двусторонним движением останавливаются и паркуются только справа по ходу движения (RGC, ст. 90).", en: "On two-way streets you stop and park only on the right in your direction of travel (RGC art. 90)." } },
    { es: "Si no está implicado en un accidente, ¿debe prestar auxilio a los heridos?",
      prompt: { ru: "Если вы не участник ДТП, должны ли вы помочь раненым?", en: "If you are not involved in an accident, must you help the injured?" },
      options: [
        { es: "Solo si lo solicita algún herido.", ru: "Только если об этом просит кто-то из раненых.", en: "Only if one of the injured asks for it." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, salvo que la ayuda ya esté organizada.", ru: "Да, если помощь ещё не организована.", en: "Yes, unless help is already organised." }
      ],
      answer: 2,
      explain: { ru: "Любой, кто видит ДТП с пострадавшими, обязан помочь или вызвать помощь, если она ещё не организована (RGC, ст. 129).", en: "Anyone who witnesses an accident with casualties must help or call for help unless help is already organised (RGC art. 129)." } },
    { es: "En una autovía, el límite de velocidad para una motocicleta es de...",
      prompt: { ru: "На автомагистрали (autovía) предел скорости для мотоцикла…", en: "On an autovía, the speed limit for a motorcycle is…" },
      options: [
        { es: "120 km/h, pudiéndose superar en 20 km/h para adelantar.", ru: "120 км/ч, и его можно превысить на 20 км/ч при обгоне.", en: "120 km/h, and it may be exceeded by 20 km/h to overtake." },
        { es: "120 km/h.", ru: "120 км/ч.", en: "120 km/h." },
        { es: "100 km/h.", ru: "100 км/ч.", en: "100 km/h." }
      ],
      answer: 1,
      explain: { ru: "Мотоцикл на autovía и autopista — 120 км/ч, как легковой автомобиль. Право превышать скорость на 20 км/ч при обгоне отменено в 2022 году.", en: "A motorcycle on an autovía or autopista may do 120 km/h, like a car. The allowance to exceed the limit by 20 km/h when overtaking was abolished in 2022." } },
    { es: "La velocidad, ¿es un factor de riesgo que produce accidentes?",
      prompt: { ru: "Скорость — это фактор риска, который вызывает аварии?", en: "Is speed a risk factor that causes accidents?" },
      options: [
        { es: "No, si el vehículo dispone de los últimos sistemas de seguridad.", ru: "Нет, если в машине есть новейшие системы безопасности.", en: "No, if the vehicle has the latest safety systems." },
        { es: "No; solo agrava las consecuencias del accidente pero no es un factor de riesgo.", ru: "Нет: она лишь утяжеляет последствия, но фактором риска не является.", en: "No: it only makes the consequences worse but is not a risk factor." },
        { es: "Sí, y por eso debe ser la adecuada en cada momento.", ru: "Да, поэтому она должна в каждый момент быть подходящей.", en: "Yes, and that is why it must be appropriate at every moment." }
      ],
      answer: 2,
      explain: { ru: "Неподходящая скорость и вызывает аварии, и делает их тяжелее, поэтому скорость всегда подбирают по обстановке.", en: "Inappropriate speed both causes accidents and makes them worse, so speed must always suit the conditions." } },
    { es: "¿Qué alumbrado deberá mantener encendido un vehículo estacionado durante la noche en el arcén de una travesía insuficientemente iluminada?",
      prompt: { ru: "Какие огни должны гореть ночью у машины, стоящей на обочине недостаточно освещённой travesía (участка дороги через населённый пункт)?", en: "Which lights must a vehicle parked at night on the hard shoulder of a poorly lit travesía (road through a town) keep on?" },
      options: [
        { es: "Ninguno, ya que es un estacionamiento dentro de poblado.", ru: "Никакие, ведь это стоянка в населённом пункте.", en: "None, as it is parked inside a built-up area." },
        { es: "Las luces de largo alcance y las luces de emergencia.", ru: "Дальний свет и аварийную сигнализацию.", en: "Main beam and hazard lights." },
        { es: "Las luces de posición, que podrá sustituir por las de estacionamiento.", ru: "Габаритные огни, которые можно заменить стояночными.", en: "Side lights, which may be replaced by parking lights." }
      ],
      answer: 2,
      explain: { ru: "Машина, стоящая ночью на плохо освещённом участке, обозначается габаритными или стояночными огнями (RGC, ст. 105).", en: "A vehicle parked at night on a poorly lit stretch is marked with its side or parking lights (RGC art. 105)." } },
    { es: "Cuando está lloviendo, ¿qué presión deben tener los neumáticos?",
      prompt: { ru: "Какое давление должно быть в шинах, когда идёт дождь?", en: "What pressure should the tyres have when it is raining?" },
      options: [
        { es: "Mayor que la aconsejada por el fabricante.", ru: "Выше рекомендованного производителем.", en: "Higher than recommended by the manufacturer." },
        { es: "Menor que la aconsejada por el fabricante.", ru: "Ниже рекомендованного производителем.", en: "Lower than recommended by the manufacturer." },
        { es: "La presión aconsejada por el fabricante.", ru: "Рекомендованное производителем.", en: "The pressure recommended by the manufacturer." }
      ],
      answer: 2,
      explain: { ru: "Давление всегда то, что рекомендует производитель; менять его под дождь не нужно.", en: "Pressure is always what the manufacturer recommends; it is not changed for rain." } },
    { es: "¿Existe relación entre consumo de drogas de abuso o ilegales y accidentes de tráfico?",
      prompt: { ru: "Есть ли связь между употреблением наркотиков и ДТП?", en: "Is there a link between using illegal drugs and road accidents?" },
      options: [
        { es: "Sí; las drogas alteran gravemente las capacidades necesarias para conducir.", ru: "Да: наркотики сильно ухудшают способности, нужные для вождения.", en: "Yes: drugs seriously impair the abilities needed to drive." },
        { es: "Solo cuando el conductor mezcla el consumo de drogas con el de alcohol.", ru: "Только если водитель смешивает наркотики с алкоголем.", en: "Only if the driver mixes drugs with alcohol." },
        { es: "No; la conducción es más segura cuando se consumen drogas de abuso.", ru: "Нет: под наркотиками водить безопаснее.", en: "No: driving is safer under drugs." }
      ],
      answer: 0,
      explain: { ru: "Наркотики ухудшают восприятие, внимание и реакцию, поэтому повышают риск ДТП и сами по себе.", en: "Drugs impair perception, attention and reaction, so they raise the accident risk on their own." } },
    { es: "En un carril VAO, ¿puede circular un turismo que arrastra un remolque de menos de 750 kg de M.M.A.?",
      prompt: { ru: "Может ли легковой автомобиль с прицепом массой до 750 кг ехать по полосе VAO (для машин с несколькими пассажирами)?", en: "May a car towing a trailer of under 750 kg MAM use a VAO (high-occupancy) lane?" },
      options: [
        { es: "Sí, pero solo de día.", ru: "Да, но только днём.", en: "Yes, but only by day." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, siempre.", ru: "Да, всегда.", en: "Yes, always." }
      ],
      answer: 1,
      explain: { ru: "По полосам VAO не могут ехать машины с прицепом, независимо от его массы (RGC, ст. 35).", en: "Vehicles towing a trailer may not use VAO lanes, whatever the trailer's mass (RGC art. 35)." } },
    { es: "Una embarazada, ¿debe llevar puesto el cinturón de seguridad?",
      prompt: { ru: "Должна ли беременная женщина пристёгиваться ремнём безопасности?", en: "Must a pregnant woman wear a seat belt?" },
      options: [
        { es: "Sí, pero solo en vías interurbanas.", ru: "Да, но только на загородных дорогах.", en: "Yes, but only on interurban roads." },
        { es: "Sí, es obligatorio.", ru: "Да, это обязательно.", en: "Yes, it is compulsory." },
        { es: "No, no es obligatorio.", ru: "Нет, не обязательно.", en: "No, it is not compulsory." }
      ],
      answer: 1,
      explain: { ru: "Беременность не освобождает от ремня; освобождение возможно только по медицинской справке.", en: "Pregnancy does not exempt from the seat belt; only a medical certificate can." } },
    { es: "Debido al deterioro psicofísico consecuencia del envejecimiento, ¿qué situaciones de tráfico ofrecen más dificultades a las personas mayores?",
      prompt: { ru: "Какие дорожные ситуации из-за возрастного ухудшения физического и психического состояния труднее всего даются пожилым людям?", en: "Because of age-related psychophysical decline, which traffic situations are hardest for older people?" },
      options: [
        { es: "Los giros a la izquierda, especialmente en vías urbanas.", ru: "Повороты налево, особенно в городе.", en: "Left turns, especially in towns." },
        { es: "Los estacionamientos, sobre todo cuando se realizan a la derecha de la calzada.", ru: "Парковка, особенно справа от проезжей части.", en: "Parking, especially on the right of the carriageway." },
        { es: "Las situaciones complejas, como incorporarse a una vía en la que se circula a alta velocidad.", ru: "Сложные ситуации, например въезд на дорогу, где едут на большой скорости.", en: "Complex situations, such as joining a road where traffic is fast." }
      ],
      answer: 2,
      explain: { ru: "С возрастом медленнее обрабатывается информация, поэтому трудны сложные ситуации с быстрым движением, например въезд на скоростную дорогу.", en: "With age information is processed more slowly, so complex fast situations, such as joining a fast road, are the hardest." } },
    { es: "De las siguientes, ¿cuál es una obligación que corresponde al titular del vehículo?",
      prompt: { ru: "Какая из этих обязанностей лежит на владельце машины (titular)?", en: "Which of these is an obligation of the vehicle's registered keeper (titular)?" },
      options: [
        { es: "Verificar que las placas de matrícula del vehículo no presentan obstáculos que impidan su lectura.", ru: "Проверять, что номерные знаки ничем не закрыты.", en: "Checking that the number plates are not obstructed." },
        { es: "Identificar ante la Administración al conductor del vehículo en el momento de cometerse una infracción.", ru: "Сообщить властям, кто был за рулём в момент нарушения.", en: "Identifying to the authorities who was driving when an offence was committed." },
        { es: "Comprobar que todos los ocupantes del vehículo hacen uso del cinturón de seguridad.", ru: "Следить, чтобы все пассажиры были пристёгнуты.", en: "Making sure all occupants wear their seat belts." }
      ],
      answer: 1,
      explain: { ru: "Владелец обязан назвать водителя, совершившего нарушение (LSV, ст. 11); проверка номеров и ремней — обязанности водителя.", en: "The keeper must identify the driver who committed an offence (LSV art. 11); checking plates and belts are the driver's duties." } },
    { es: "El conductor de un turismo, ¿qué debe hacer para incorporarse a la circulación?",
      prompt: { ru: "Что должен сделать водитель легкового автомобиля, чтобы влиться в поток (начать движение)?", en: "What must a car driver do to join the traffic?" },
      options: [
        { es: "Solo señalizar la maniobra, porque los demás tienen que ceder el paso.", ru: "Только показать манёвр, ведь остальные должны уступить.", en: "Just signal the manoeuvre, as the others must give way." },
        { es: "Seguir siempre las indicaciones de otra persona.", ru: "Всегда следовать указаниям другого человека.", en: "Always follow another person's directions." },
        { es: "Asegurarse de que puede hacerlo sin peligro para los demás usuarios.", ru: "Убедиться, что он может сделать это без опасности для других.", en: "Make sure he can do it without danger to other road users." }
      ],
      answer: 2,
      explain: { ru: "Кто вливается в поток, должен уступить дорогу и убедиться, что это безопасно; указатель поворота права не даёт (RGC, ст. 72).", en: "Whoever joins the traffic must give way and make sure it is safe; the indicator gives no right of way (RGC art. 72)." } },
    { es: "Como mantenimiento preventivo, ¿es conveniente realizar una revisión periódica del sistema de alumbrado del vehículo?",
      prompt: { ru: "Стоит ли в рамках профилактического обслуживания периодически проверять систему освещения машины?", en: "As preventive maintenance, is it advisable to check the vehicle's lighting system regularly?" },
      options: [
        { es: "Sí, para comprobar su correcto reglado y funcionamiento.", ru: "Да, чтобы проверить её регулировку и работу.", en: "Yes, to check that it is correctly adjusted and works." },
        { es: "No, salvo en los vehículos que disponen de un sistema regulador automático.", ru: "Нет, кроме машин с автоматическим корректором фар.", en: "No, except for vehicles with an automatic levelling system." },
        { es: "No, solamente, cuando lleve sobrecarga porque podrían producirse cambios de inclinación del alcance luminoso.", ru: "Нет, только при перегрузке, когда может меняться наклон света.", en: "No, only when overloaded, as the beam angle may change." }
      ],
      answer: 0,
      explain: { ru: "Фары, указатели поворота и лампы нужно регулярно проверять: неисправные или плохо отрегулированные огни слепят других и плохо освещают дорогу. Даже при автоматическом корректоре фар проверка нужна.", en: "Headlights, indicators and bulbs should be checked regularly: faulty or badly adjusted lights dazzle others and light the road poorly. Even with automatic levelling a regular check is still needed." } },
    { es: "Siempre que exista espacio suficiente y adoptando las máximas precauciones, está permitido adelantar por la derecha...",
      prompt: { ru: "Если места достаточно и соблюдается максимальная осторожность, обгонять справа разрешено…", en: "With enough room and taking the utmost care, overtaking on the right is allowed…" },
      options: [
        { es: "en vías interurbanas, en las intersecciones y sus proximidades.", ru: "на загородных дорогах, на перекрёстках и рядом с ними.", en: "on interurban roads, at junctions and near them." },
        { es: "en autopistas y autovías que discurran exclusivamente dentro de poblado.", ru: "на autopista и autovía, которые проходят только по населённому пункту.", en: "on autopistas and autovías running entirely inside a town." },
        { es: "en vías urbanas con dos o más carriles delimitados por líneas longitudinales.", ru: "на городских дорогах с двумя и более полосами, разделёнными продольными линиями.", en: "on urban roads with two or more lanes marked by longitudinal lines." }
      ],
      answer: 2,
      explain: { ru: "В городе на дорогах с размеченными полосами в одном направлении можно обгонять и справа (RGC, ст. 82).", en: "In towns, on roads with marked lanes in the same direction, you may also overtake on the right (RGC art. 82)." } },
    { es: "En caso de estar implicado en un accidente, ¿debe detenerse para ayudar a restablecer la seguridad de la circulación?",
      prompt: { ru: "Если вы участник ДТП, должны ли вы остановиться, чтобы помочь восстановить безопасность движения?", en: "If you are involved in an accident, must you stop to help restore road safety?" },
      options: [
        { es: "No, esa tarea corresponde a la policía de tráfico.", ru: "Нет, это задача дорожной полиции.", en: "No, that is the traffic police's job." },
        { es: "Sí, en la medida de lo posible.", ru: "Да, насколько это возможно.", en: "Yes, as far as possible." },
        { es: "Solo si hay fallecidos o heridos graves.", ru: "Только если есть погибшие или тяжело раненые.", en: "Only if there are deaths or serious injuries." }
      ],
      answer: 1,
      explain: { ru: "Участник ДТП обязан остановиться и по возможности помочь восстановить безопасность движения (RGC, ст. 129).", en: "Anyone involved in an accident must stop and, as far as possible, help restore road safety (RGC art. 129)." } },
    { es: "Si conduce una motocicleta por una autovía con tres o más carriles, ¿le está permitido circular por el carril situado más a la izquierda?",
      prompt: { ru: "Вы едете на мотоцикле по autovía с тремя и более полосами. Можно ли ехать по крайней левой полосе?", en: "Riding a motorcycle on an autovía with three or more lanes, may you use the leftmost lane?" },
      options: [
        { es: "Sí, cuando las circunstancias del tráfico o la vía lo aconsejen.", ru: "Да, когда этого требуют обстановка или дорога.", en: "Yes, when traffic or road conditions make it advisable." },
        { es: "Solo cuando la circulación se encuentre saturada.", ru: "Только при очень плотном движении.", en: "Only when traffic is saturated." },
        { es: "No, solo puede utilizar los carriles derecho y central.", ru: "Нет, только правую и среднюю полосы.", en: "No, only the right and middle lanes." }
      ],
      answer: 0,
      explain: { ru: "Ограничение «не левая полоса» касается грузовиков и составов длиннее 7 м; мотоцикл может ехать по ней, когда это нужно.", en: "The 'no leftmost lane' rule applies to lorries and combinations over 7 m; a motorcycle may use it when needed." } },
    { es: "Si conduce una motocicleta, ¿es aconsejable utilizar guantes?",
      prompt: { ru: "Стоит ли надевать перчатки при езде на мотоцикле?", en: "When riding a motorcycle, is it advisable to wear gloves?" },
      options: [
        { es: "Sí; su uso es obligatorio en todo tipo de vías.", ru: "Да: они обязательны на всех дорогах.", en: "Yes: they are compulsory on all roads." },
        { es: "Sí, incluso en verano, para proteger las manos en caso de caída.", ru: "Да, даже летом, чтобы защитить руки при падении.", en: "Yes, even in summer, to protect the hands in a fall." },
        { es: "No, porque pueden dificultar la conducción.", ru: "Нет, они мешают управлять.", en: "No, they make riding harder." }
      ],
      answer: 1,
      explain: { ru: "С 1 октября 2026 года перчатки обязательны водителю и пассажиру мотоцикла за городом (RGC, ст. 118.1), но не на всех дорогах. В городе их тоже советуют носить: при падении первыми страдают руки. RD 518/2026.", en: "Since 1 October 2026 gloves are compulsory for motorcycle riders and passengers on interurban roads (RGC art. 118.1), but not on every road. They are advised in town too: hands are hurt first in a fall. RD 518/2026." } },
    { es: "La señal indica que...",
      prompt: { ru: "Этот знак означает, что…", en: "This sign means that…" },
      options: [
        { es: "está en un callejón sin salida y debe retroceder.", ru: "вы в тупике и должны развернуться назад.", en: "you are in a dead end and must turn back." },
        { es: "está prohibido pasar sin detenerse.", ru: "запрещено проезжать без остановки.", en: "passing without stopping is forbidden." },
        { es: "se aproxima a una elevación del terreno.", ru: "впереди возвышенность.", en: "you are approaching a rise in the ground." }
      ],
      answer: 1,
      explain: { ru: "Знак R-200 запрещает проезжать без остановки (таможня, пункт контроля, платная дорога).", en: "Sign R-200 forbids passing without stopping (customs, checkpoint, toll)." },
      sign: "R-200" },
    { es: "¿Para qué sirve el carril de deceleración?",
      prompt: { ru: "Для чего нужна полоса торможения (carril de deceleración)?", en: "What is the deceleration lane for?" },
      options: [
        { es: "Para que circulen los vehículos lentos.", ru: "Для медленных машин.", en: "For slow vehicles." },
        { es: "Para adelantar por la derecha.", ru: "Для обгона справа.", en: "For overtaking on the right." },
        { es: "Para reducir la velocidad al salir de una autopista.", ru: "Чтобы снизить скорость при съезде с автомагистрали.", en: "To slow down when leaving a motorway." }
      ],
      answer: 2,
      explain: { ru: "На полосу торможения переходят как можно раньше и снижают на ней скорость перед съездом.", en: "You move into the deceleration lane as early as possible and slow down there before the exit." } },
    { es: "En una vía interurbana insuficientemente iluminada, un turismo circula a menos de 40 km/h; ¿puede circular utilizando solo la luz de posición y la de corto alcance?",
      prompt: { ru: "На загородной дороге с недостаточным освещением легковой автомобиль едет медленнее 40 км/ч. Может ли он ехать только с габаритами и ближним светом?", en: "On a poorly lit interurban road a car is doing under 40 km/h. May it drive with only side lights and dipped beam?" },
      options: [
        { es: "Sí, aunque puede encender la de largo alcance si no deslumbra a otros usuarios.", ru: "Да, хотя может включить и дальний, если не ослепляет других.", en: "Yes, although it may switch on main beam if it does not dazzle anyone." },
        { es: "No; es obligatorio que circule con la luz de largo alcance encendida.", ru: "Нет, дальний свет обязателен.", en: "No, main beam is compulsory." },
        { es: "Solo cuando circule por una travesía.", ru: "Только на travesía.", en: "Only in a travesía." }
      ],
      answer: 0,
      explain: { ru: "Ниже 40 км/ч на плохо освещённой дороге достаточно ближнего света; дальний разрешён, если никого не слепит (RGC, ст. 99–100).", en: "Below 40 km/h on a poorly lit road dipped beam is enough; main beam is allowed if it dazzles no one (RGC arts. 99–100)." } },
    { es: "Las marcas blancas y rojas de la calzada, ¿qué indican?",
      prompt: { ru: "Что означает бело-красная разметка на проезжей части?", en: "What do red and white road markings mean?" },
      options: [
        { es: "Una zona reservada para la salida de competiciones de coches.", ru: "Зону для старта автогонок.", en: "An area reserved for the start of car races." },
        { es: "Una zona reservada para el estacionamiento de camiones.", ru: "Зону стоянки грузовиков.", en: "An area reserved for lorry parking." },
        { es: "Una zona reservada para frenado de emergencia, donde no se puede parar ni estacionar.", ru: "Зону для экстренного торможения, где нельзя останавливаться и стоять.", en: "An emergency braking area, where you may not stop or park." }
      ],
      answer: 2,
      explain: { ru: "Красно-белые клетки обозначают аварийный улавливающий участок (зону торможения); стоять и останавливаться там нельзя.", en: "Red and white checks mark an emergency escape (braking) area; stopping and parking there are forbidden." } },
    { es: "¿Es recomendable tener especial cuidado al adelantar a un grupo de ciclistas en los ascensos prolongados?",
      prompt: { ru: "Нужно ли быть особенно осторожным при обгоне группы велосипедистов на длинном подъёме?", en: "Should you take special care when overtaking a group of cyclists on a long climb?" },
      options: [
        { es: "No; los adelantamientos a ciclistas no implican riesgo alguno.", ru: "Нет: обгон велосипедистов не связан с риском.", en: "No: overtaking cyclists carries no risk." },
        { es: "Solo si algún ciclista va bebiendo algún líquido o tomando alimentos sólidos.", ru: "Только если кто-то из них пьёт или ест.", en: "Only if a cyclist is drinking or eating." },
        { es: "Sí, porque debido al esfuerzo y pedaleo pueden realizar cambios bruscos de trayectoria.", ru: "Да: от усилия и педалирования они могут резко менять траекторию.", en: "Yes: because of the effort of pedalling they may suddenly swerve." }
      ],
      answer: 2,
      explain: { ru: "На подъёме велосипедисты качаются и могут неожиданно отклониться, поэтому нужна дистанция не менее 1,5 м и осторожность.", en: "On climbs cyclists sway and may swerve suddenly, so keep at least 1.5 m and take care." } },
    { es: "Un agente circula en una moto portando una bandera verde; ¿qué indica?",
      prompt: { ru: "Полицейский едет на мотоцикле с зелёным флагом. Что это означает?", en: "An officer on a motorbike is carrying a green flag. What does it mean?" },
      options: [
        { es: "La calzada está abierta, pero hay que extremar la atención.", ru: "Дорога открыта, но нужно быть очень внимательным.", en: "The road is open, but take extra care." },
        { es: "La calzada queda de nuevo abierta al tráfico a partir de su paso.", ru: "После его проезда дорога снова открыта для движения.", en: "The road is open to traffic again after he passes." },
        { es: "Se está desarrollando en la calzada una actividad deportiva.", ru: "На дороге проходит спортивное мероприятие.", en: "A sports event is taking place on the road." }
      ],
      answer: 1,
      explain: { ru: "Зелёный флаг на машине или мотоцикле, замыкающем колонну, означает, что дорога снова открыта (RGC, ст. 143).", en: "A green flag on the vehicle closing a convoy or event means the road is open again (RGC art. 143)." } },
    { es: "En general, bajo los efectos de la cocaína...",
      prompt: { ru: "В целом под действием кокаина…", en: "In general, under the effects of cocaine…" },
      options: [
        { es: "aumenta la capacidad de concentración del conductor.", ru: "способность водителя сосредоточиться растёт.", en: "the driver's ability to concentrate increases." },
        { es: "disminuye la capacidad de concentración del conductor.", ru: "способность водителя сосредоточиться падает.", en: "the driver's ability to concentrate decreases." },
        { es: "se percibe mejor el entorno y se toman decisiones más seguras.", ru: "обстановка воспринимается лучше, а решения безопаснее.", en: "the surroundings are perceived better and decisions are safer." }
      ],
      answer: 1,
      explain: { ru: "Кокаин даёт ложное ощущение контроля, но снижает концентрацию и повышает рискованность.", en: "Cocaine gives a false sense of control but lowers concentration and increases risk-taking." } },
    { es: "Buscar una emisora de radio o manipular el reproductor de música, ¿pueden distraer al conductor?",
      prompt: { ru: "Могут ли поиск радиостанции или управление музыкальным плеером отвлекать водителя?", en: "Can searching for a radio station or operating the music player distract the driver?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Solo si las emisoras de radio no están guardadas en memoria.", ru: "Только если станции не сохранены в памяти.", en: "Only if the stations are not stored in memory." },
        { es: "Sí, aumentando el riesgo de accidente.", ru: "Да, и это повышает риск аварии.", en: "Yes, and that increases the accident risk." }
      ],
      answer: 2,
      explain: { ru: "Любое действие, отвлекающее взгляд и руки от дороги, повышает риск ДТП.", en: "Anything that takes the eyes and hands off driving increases the accident risk." } },
    { es: "En una vía urbana con un carril en cada sentido, deberá circular...",
      prompt: { ru: "На городской улице с одной полосой в каждом направлении нужно ехать…", en: "On an urban road with one lane in each direction you must drive…" },
      options: [
        { es: "lo más cerca posible del borde derecho de la calzada.", ru: "как можно ближе к правому краю проезжей части.", en: "as close as possible to the right-hand edge of the carriageway." },
        { es: "por la zona que mejor convenga.", ru: "там, где удобнее.", en: "wherever suits you best." },
        { es: "por el centro de la calzada, en tramos rectos.", ru: "по центру проезжей части на прямых участках.", en: "in the middle of the carriageway on straight sections." }
      ],
      answer: 0,
      explain: { ru: "На дороге с одной полосой в каждом направлении держатся как можно правее (RGC, ст. 29).", en: "On a road with one lane each way you keep as far to the right as possible (RGC art. 29)." } },
    { es: "Un conductor circula por una calzada muy mojada; si para frenar necesita pisar a fondo el pedal de freno, ¿a qué puede ser debido, principalmente?",
      prompt: { ru: "Водитель едет по очень мокрой дороге. Если, чтобы затормозить, ему приходится нажимать педаль до упора, в чём, скорее всего, причина?", en: "A driver is on a very wet road. If he has to press the brake pedal right down to brake, what is the most likely cause?" },
      options: [
        { es: "A un fallo del sistema de frenos.", ru: "Неисправность тормозной системы.", en: "A fault in the braking system." },
        { es: "A que el sistema ABS necesita una revisión.", ru: "ABS нужно проверить.", en: "The ABS needs a check-up." },
        { es: "Al enfriamiento excesivo de los discos de freno.", ru: "Слишком сильное охлаждение тормозных дисков.", en: "Excessive cooling of the brake discs." }
      ],
      answer: 0,
      explain: { ru: "В дождь тормозной путь длиннее, поэтому тормоза должны быть в отличном состоянии: проверяйте диски, тормозную жидкость и т. д. Это особенно важно в плохую погоду; регулярно обслуживайте машину, особенно тормоза.", en: "In rain the braking distance is longer, so the brakes must be in top condition: check the discs, brake fluid and so on. This matters even more in bad weather; service the vehicle regularly, especially the brakes." } },
    { es: "Esta marca transversal continua, ¿está permitido franquearla sin detenerse antes?",
      prompt: { ru: "Можно ли пересечь эту сплошную поперечную линию, не остановившись перед ней?", en: "May you cross this continuous transverse line without stopping before it?" },
      options: [
        { es: "No, nunca.", ru: "Нет, никогда.", en: "No, never." },
        { es: "Sí, cuando haya peatones.", ru: "Да, когда есть пешеходы.", en: "Yes, when there are pedestrians." },
        { es: "Sí, cuando no sea obligatoria la detención.", ru: "Да, когда остановка не обязательна.", en: "Yes, when stopping is not compulsory." }
      ],
      answer: 2,
      explain: { ru: "Сплошная поперечная линия (стоп-линия) показывает, где остановиться, если остановка обязательна (светофор, STOP, агент); в остальных случаях её проезжают.", en: "A continuous transverse (stop) line shows where to stop when stopping is required (lights, STOP, an officer); otherwise you drive over it." } },
    { es: "Normalmente, ¿qué ocurre cuando un conductor sufre una distracción al volante?",
      prompt: { ru: "Что обычно происходит, когда водитель отвлекается?", en: "What usually happens when a driver gets distracted?" },
      options: [
        { es: "Enciende las luces de emergencia o pisa el pedal de freno reiteradamente.", ru: "Он включает аварийку или многократно нажимает на тормоз.", en: "He switches on the hazard lights or presses the brake repeatedly." },
        { es: "Pisa el pedal de freno en lugar del acelerador.", ru: "Он нажимает тормоз вместо газа.", en: "He presses the brake instead of the accelerator." },
        { es: "Tarda más tiempo en reaccionar ante una situación de riesgo.", ru: "Он дольше реагирует на опасную ситуацию.", en: "He takes longer to react to a dangerous situation." }
      ],
      answer: 2,
      explain: { ru: "Отвлечение увеличивает время реакции и, значит, путь до остановки.", en: "Distraction increases reaction time and therefore the stopping distance." } },
    { es: "En una vía con un carril para cada sentido de la marcha, ¿está permitido que un conductor adelante a varios vehículos a la vez?",
      prompt: { ru: "На дороге с одной полосой в каждом направлении можно ли обогнать сразу несколько машин?", en: "On a road with one lane in each direction, may a driver overtake several vehicles at once?" },
      options: [
        { es: "No, en ningún caso.", ru: "Нет, ни в коем случае.", en: "No, never." },
        { es: "Solo si puede volver a la derecha sin causar peligro en caso de encontrar vehículos de frente.", ru: "Только если он сможет безопасно вернуться вправо при встречном транспорте.", en: "Only if he can return to the right safely if he meets oncoming vehicles." },
        { es: "Sí, siempre que adelante a vehículos de grandes dimensiones.", ru: "Да, если обгоняет крупные машины.", en: "Yes, if he overtakes large vehicles." }
      ],
      answer: 1,
      explain: { ru: "Обгон колонны допустим, только если между машинами есть место, чтобы безопасно вернуться в свою полосу (RGC, ст. 85).", en: "Overtaking a line of vehicles is allowed only if there is room between them to return safely to your lane (RGC art. 85)." } },
    { es: "Un peatón, ¿puede estar obligado a realizar una prueba de alcoholemia?",
      prompt: { ru: "Может ли пешеход быть обязан пройти тест на алкоголь?", en: "Can a pedestrian be required to take a breath test?" },
      options: [
        { es: "Sí, cuando esté implicado directamente como posible responsable de un accidente.", ru: "Да, если он прямо замешан в ДТП как возможный виновник.", en: "Yes, when directly involved as a possible person responsible for an accident." },
        { es: "Sí, en un control preventivo de alcoholemia.", ru: "Да, на профилактическом контроле.", en: "Yes, at a preventive checkpoint." },
        { es: "No, en ningún caso.", ru: "Нет, ни в каком случае.", en: "No, never." }
      ],
      answer: 0,
      explain: { ru: "Тест обязателен для водителей и для любых участников движения, прямо замешанных в ДТП как возможные виновники (RGC, ст. 21).", en: "The test is compulsory for drivers and for any road user directly involved in an accident as a possible person responsible (RGC art. 21)." } },
    { es: "Si un conductor se encuentra esta señal, debe saber que en la próxima intersección...",
      prompt: { ru: "Встретив этот знак, водитель должен знать, что на ближайшем перекрёстке…", en: "A driver who sees this sign should know that at the next junction…" },
      options: [
        { es: "tiene prioridad sobre los vehículos que se acerquen tanto por la derecha como por la izquierda.", ru: "у него приоритет перед машинами и справа, и слева.", en: "he has priority over vehicles from both the right and the left." },
        { es: "se aplica la regla general de prioridad de paso.", ru: "действует общее правило приоритета.", en: "the general priority rule applies." },
        { es: "debe ceder el paso a los vehículos que se acerquen tanto por la derecha como por la izquierda.", ru: "он должен уступить машинам и справа, и слева.", en: "he must give way to vehicles from both the right and the left." }
      ],
      answer: 1,
      explain: { ru: "Знак P-2 предупреждает о перекрёстке, где действует общее правило: уступают тем, кто приближается справа.", en: "Sign P-2 warns of a junction where the general rule applies: give way to those approaching from the right." },
      sign: "P-2" },
    { es: "En un viaje largo es aconsejable descansar...",
      prompt: { ru: "В долгой поездке рекомендуется отдыхать…", en: "On a long journey it is advisable to rest…" },
      options: [
        { es: "siempre que se encuentre un área de descanso.", ru: "на каждой встречной площадке отдыха.", en: "at every rest area you come across." },
        { es: "cada 2 horas aproximadamente.", ru: "примерно каждые 2 часа.", en: "roughly every 2 hours." },
        { es: "cada 5 horas aproximadamente.", ru: "примерно каждые 5 часов.", en: "roughly every 5 hours." }
      ],
      answer: 1,
      explain: { ru: "Рекомендуемый перерыв — примерно каждые 2 часа (или 200 км), чтобы не допустить усталости.", en: "The recommended break is roughly every 2 hours (or 200 km) to prevent fatigue." } },
    { es: "La señal de velocidad máxima pintada sobre un carril, ¿qué indica?",
      prompt: { ru: "Что означает знак максимальной скорости, нарисованный на полосе?", en: "What does a maximum speed sign painted on a lane mean?" },
      options: [
        { es: "Prohibido circular a más de 60 kilómetros por hora en todos los carriles.", ru: "Запрещено ехать быстрее 60 км/ч по всем полосам.", en: "No driving above 60 km/h in any lane." },
        { es: "Prohibido circular a más de 60 kilómetros por hora en ese carril.", ru: "Запрещено ехать быстрее 60 км/ч по этой полосе.", en: "No driving above 60 km/h in that lane." },
        { es: "Prohibido circular a más de 60 kilómetros por hora para los vehículos que van a girar a la derecha.", ru: "Запрещено ехать быстрее 60 км/ч тем, кто поворачивает направо.", en: "No driving above 60 km/h for vehicles turning right." }
      ],
      answer: 1,
      explain: { ru: "Ограничение, нарисованное на полосе, действует только для этой полосы.", en: "A limit painted on a lane applies only to that lane." } },
    { es: "El conductor de un vehículo de distribución de mercancías ¿cuándo podrá circular por vía urbana sin utilizar el cinturón de seguridad?",
      prompt: { ru: "Когда водитель машины, развозящей товары, может ездить по городу без ремня безопасности?", en: "When may the driver of a goods delivery vehicle drive in town without a seat belt?" },
      options: [
        { es: "En trayectos cortos, cuando realice sucesivas operaciones de carga y descarga.", ru: "На коротких отрезках, когда он постоянно загружает и разгружает товар.", en: "On short trips while making successive loading and unloading stops." },
        { es: "En todo momento; en poblado no tiene obligación de utilizar el cinturón de seguridad.", ru: "Всегда: в городе он не обязан пристёгиваться.", en: "Always: in town he does not have to wear it." },
        { es: "En ningún caso; siempre debe utilizar el cinturón de seguridad.", ru: "Никогда: ремень обязателен всегда.", en: "Never: he must always wear the belt." }
      ],
      answer: 0,
      explain: { ru: "Исключение для развозчиков: в городе на коротких отрезках между частыми погрузками и разгрузками (RGC, ст. 119).", en: "Exception for delivery drivers: in town, on short trips between frequent loading and unloading (RGC art. 119)." } },
    { es: "Si un vehículo estacionado se incorpora a la circulación, ¿tiene prioridad para realizar la maniobra?",
      prompt: { ru: "Если стоящая машина выезжает в поток, есть ли у неё приоритет?", en: "If a parked vehicle pulls out into traffic, does it have priority?" },
      options: [
        { es: "Sí, en cualquier caso.", ru: "Да, в любом случае.", en: "Yes, in any case." },
        { es: "Sí, si lo ha señalizado previamente.", ru: "Да, если она заранее показала манёвр.", en: "Yes, if it has signalled first." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 2,
      explain: { ru: "Выезжающий со стоянки должен уступить всем, кто уже едет (RGC, ст. 72).", en: "A vehicle pulling out must give way to everyone already moving (RGC art. 72)." } },
    { es: "Esta señal indica la situación de un lugar donde se puede...",
      prompt: { ru: "Этот знак показывает место, где можно…", en: "This sign shows a place where you can…" },
      options: [
        { es: "estacionar el vehículo cuando está averiado.", ru: "оставить машину при поломке.", en: "park the vehicle when it has broken down." },
        { es: "realizar una parada para descansar.", ru: "остановиться, чтобы отдохнуть.", en: "stop to rest." },
        { es: "apartar el vehículo en un túnel para dejar libre el paso.", ru: "отъехать в сторону в туннеле, чтобы освободить проезд.", en: "pull over in a tunnel to leave the way clear." }
      ],
      answer: 2,
      explain: { ru: "Знак «Apartadero» показывает уширение (карман), куда можно съехать, чтобы освободить проезд, например в туннеле.", en: "The 'Apartadero' sign shows a lay-by where you can pull over to leave the way clear, for example in a tunnel." },
      sign: "S-34" },
    { es: "¿Cómo se llama la distancia que recorre un vehículo desde que el conductor percibe un estímulo hasta que se responde al mismo?",
      prompt: { ru: "Как называется расстояние, которое проходит машина с момента, когда водитель заметил раздражитель, до его реакции?", en: "What is the distance a vehicle covers from when the driver perceives a stimulus until he responds called?" },
      options: [
        { es: "Distancia de frenado.", ru: "Тормозной путь.", en: "Braking distance." },
        { es: "Distancia de reacción.", ru: "Путь реакции.", en: "Reaction distance." },
        { es: "Distancia de detención.", ru: "Остановочный путь.", en: "Stopping distance." }
      ],
      answer: 1,
      explain: { ru: "Путь реакции — расстояние за время реакции; остановочный путь = путь реакции + тормозной путь.", en: "Reaction distance is covered during reaction time; stopping distance = reaction distance + braking distance." } },
    { es: "¿Cuál es, como norma general, la velocidad máxima a la que le está permitido circular a un turismo por una carretera convencional?",
      prompt: { ru: "Какая, как правило, максимальная скорость легкового автомобиля на обычной загородной дороге (carretera convencional)?", en: "As a general rule, what is the maximum speed for a car on a conventional road?" },
      options: [
        { es: "80 km/h.", ru: "80 км/ч.", en: "80 km/h." },
        { es: "100 km/h.", ru: "100 км/ч.", en: "100 km/h." },
        { es: "90 km/h.", ru: "90 км/ч.", en: "90 km/h." }
      ],
      answer: 2,
      explain: { ru: "С 2019 года на carretera convencional для легковых и мотоциклов — 90 км/ч (RGC, ст. 48).", en: "Since 2019 the limit on conventional roads for cars and motorcycles is 90 km/h (RGC art. 48)." } },
    { es: "Dos vehículos del mismo tipo se encuentran justo en la mitad de este estrechamiento, en el que la prioridad no está señalizada. ¿Cuál de ellos tendrá preferencia de paso?",
      prompt: { ru: "Две машины одного типа встретились точно посередине этого сужения, где приоритет не обозначен. У кого преимущество?", en: "Two vehicles of the same type meet exactly halfway along this narrowing, where priority is not signed. Which one has priority?" },
      options: [
        { es: "El vehículo que tenga que dar marcha atrás una menor distancia.", ru: "У той, которой меньше сдавать назад.", en: "The one that has to reverse the shorter distance." },
        { es: "El vehículo que tenga que dar marcha atrás mayor distancia.", ru: "У той, которой больше сдавать назад.", en: "The one that has to reverse the longer distance." },
        { es: "El vehículo que tenga mayor longitud, anchura o masa máxima autorizada.", ru: "У той, у которой больше длина, ширина или разрешённая масса.", en: "The one with the greater length, width or maximum authorised mass." }
      ],
      answer: 2,
      explain: { ru: "Если обе машины одного типа и обеим сдавать назад одинаково (они точно посередине), преимущество у машины большей ширины, длины или разрешённой массы (RGC, ст. 62).", en: "Between vehicles of the same type that would have to reverse the same distance (exactly halfway), priority goes to the one with the greater width, length or maximum authorised mass (RGC art. 62)." } },
    { es: "Cuando no se puede circular hacia adelante ni cambiar de dirección o sentido de la marcha, ¿se permite circular marcha atrás?",
      prompt: { ru: "Если нельзя ехать вперёд, повернуть или развернуться, разрешено ли ехать задним ходом?", en: "When you cannot drive forwards, turn or change direction, may you reverse?" },
      options: [
        { es: "Sí, pero solo con el recorrido mínimo indispensable.", ru: "Да, но только на минимально необходимое расстояние.", en: "Yes, but only the minimum distance needed." },
        { es: "Sí, pero el recorrido hacia atrás no puede ser superior a 15 metros ni se puede invadir un cruce de vías.", ru: "Да, но не больше 15 метров и не заезжая на перекрёсток.", en: "Yes, but not more than 15 metres and without entering a junction." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 0,
      explain: { ru: "Задний ход — только когда иначе нельзя и на минимально необходимом отрезке (RGC, ст. 80).", en: "Reverse only when there is no other way and for the minimum distance needed (RGC art. 80)." } },
    { es: "Si ha instalado en su vehículo neumáticos de invierno, ¿es conveniente sustituirlos cuando las temperaturas comiencen a ser más cálidas?",
      prompt: { ru: "Если вы поставили зимние шины, стоит ли менять их, когда становится тепло?", en: "If you have fitted winter tyres, should you change them when temperatures get warmer?" },
      options: [
        { es: "Sí, porque cuando la temperatura es más cálida se desgastan con más rapidez.", ru: "Да, потому что в тепле они изнашиваются быстрее.", en: "Yes, because they wear faster when it is warmer." },
        { es: "No, porque se adaptan progresivamente a los cambios de temperatura.", ru: "Нет, они постепенно приспосабливаются к температуре.", en: "No, they gradually adapt to temperature changes." },
        { es: "Sí, porque en tiempo cálido disminuye considerablemente la distancia de frenado.", ru: "Да, потому что в тепле тормозной путь сильно сокращается.", en: "Yes, because braking distance drops a lot in warm weather." }
      ],
      answer: 0,
      explain: { ru: "Зимние шины дают лучшее сцепление на льду, снегу и при низких температурах. Но при более высоких температурах, чем те, для которых они сделаны, они быстрее изнашиваются, хуже держат дорогу и увеличивают расход. Их советуют менять весной, когда теплеет.", en: "Winter tyres give better grip on ice, snow and in low temperatures. At higher temperatures than they were made for they wear faster, grip less and raise fuel use. Change them in spring when it warms up." } },
    { es: "En una travesía, ¿está permitido circular con la luz de largo alcance encendida?",
      prompt: { ru: "Можно ли ехать с дальним светом по travesía (участку дороги через населённый пункт)?", en: "May you drive with main beam on a travesía (road through a town)?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, en travesías insuficientemente iluminadas.", ru: "Да, на недостаточно освещённых travesías.", en: "Yes, on poorly lit travesías." },
        { es: "Sólo si se circula a una velocidad superior a los 40 km/h.", ru: "Только при скорости выше 40 км/ч.", en: "Only above 40 km/h." }
      ],
      answer: 0,
      explain: { ru: "В населённых пунктах и на travesías дальний свет запрещён; используют ближний (RGC, ст. 99–100).", en: "Main beam is forbidden in built-up areas and travesías; use dipped beam (RGC arts. 99–100)." } },
    { es: "¿Está permitido que las motocicletas circulen por un carril reservado para vehículos con alta ocupación (VAO)?",
      prompt: { ru: "Могут ли мотоциклы ехать по полосе для машин с высокой загрузкой (VAO)?", en: "May motorcycles use a high-occupancy vehicle (VAO) lane?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Solo si lleva algún ocupante, además del conductor.", ru: "Только если кроме водителя есть пассажир.", en: "Only with a passenger besides the rider." },
        { es: "Sí.", ru: "Да.", en: "Yes." }
      ],
      answer: 2,
      explain: { ru: "Мотоциклы могут ехать по полосе VAO даже с одним водителем (RGC, ст. 35).", en: "Motorcycles may use VAO lanes even with only the rider (RGC art. 35)." } },
    { es: "El alcohol desaparece de la sangre...",
      prompt: { ru: "Алкоголь выводится из крови…", en: "Alcohol leaves the blood…" },
      options: [
        { es: "rápidamente, eliminándose por completo una hora después de su consumo.", ru: "быстро, полностью — через час после употребления.", en: "quickly, completely within an hour." },
        { es: "inmediatamente después de su consumo a través del sudor y de la orina.", ru: "сразу после употребления, с потом и мочой.", en: "immediately after drinking, through sweat and urine." },
        { es: "muy lentamente, eliminándose por completo varias horas después de su consumo.", ru: "очень медленно, полностью — через несколько часов.", en: "very slowly, completely only several hours later." }
      ],
      answer: 2,
      explain: { ru: "Организм выводит алкоголь медленно, и ускорить это нельзя: полностью он уходит через несколько часов.", en: "The body removes alcohol slowly and it cannot be sped up: it is gone only after several hours." } },
    { es: "¿Es seguro conducir después de haber consumido anfetaminas?",
      prompt: { ru: "Безопасно ли водить после приёма амфетаминов?", en: "Is it safe to drive after taking amphetamines?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, porque son relajantes y retrasan la aparición del sueño.", ru: "Да, они расслабляют и отгоняют сон.", en: "Yes, they relax you and delay sleep." },
        { es: "Solo si se consumen acompañadas de alguna bebida alcohólica.", ru: "Только если запивать их алкоголем.", en: "Only if taken with an alcoholic drink." }
      ],
      answer: 0,
      explain: { ru: "Амфетамины вызывают импульсивность и переоценку своих сил, а после действия — сильную усталость.", en: "Amphetamines cause impulsiveness and overconfidence, followed by heavy fatigue when they wear off." } },
    { es: "Los conductores de turismos, ¿están obligados a llevar en su vehículo una rueda de uso temporal y las herramientas indispensables para su cambio?",
      prompt: { ru: "Обязаны ли водители легковых машин возить запасное колесо (докатку) и инструмент для его замены?", en: "Must car drivers carry a temporary spare wheel and the tools to change it?" },
      options: [
        { es: "No, ya que puede sustituirse por un sistema alternativo que permita la movilidad.", ru: "Нет, его можно заменить другой системой, позволяющей продолжить движение.", en: "No, it can be replaced by an alternative system that keeps the car mobile." },
        { es: "Es obligatorio llevar una rueda de uso temporal, pero no las herramientas para su cambio.", ru: "Колесо обязательно, а инструмент — нет.", en: "The temporary wheel is compulsory, but not the tools." },
        { es: "Sí, es un repuesto obligatorio e insustituible que deben llevar todos los turismos.", ru: "Да, это обязательная и незаменимая запчасть для всех легковых.", en: "Yes, it is a compulsory, irreplaceable spare for all cars." }
      ],
      answer: 0,
      explain: { ru: "Вместо запаски допускается альтернативная система: ремкомплект или шины run-flat.", en: "Instead of a spare wheel an alternative system is allowed, such as a repair kit or run-flat tyres." } },
    { es: "Los conductores, ¿pueden llevar en los oídos cascos o auriculares conectados a un teléfono móvil mientras conducen?",
      prompt: { ru: "Можно ли водителям во время езды носить в ушах наушники, подключённые к телефону?", en: "May drivers wear earphones or headphones connected to a mobile phone while driving?" },
      options: [
        { es: "No, excepto los conductores de bicicletas y los de vehículos de movilidad personal.", ru: "Нет, кроме велосипедистов и водителей СИМ.", en: "No, except cyclists and personal mobility vehicle riders." },
        { es: "Sí, siempre que los auriculares sean inalámbricos.", ru: "Да, если наушники беспроводные.", en: "Yes, if they are wireless." },
        { es: "No, está prohibido como norma general.", ru: "Нет, как правило это запрещено.", en: "No, as a general rule it is forbidden." }
      ],
      answer: 2,
      explain: { ru: "Наушники в ушах при вождении запрещены всем водителям, включая велосипедистов (RGC, ст. 18).", en: "Earphones while driving are forbidden for all drivers, cyclists included (RGC art. 18)." } },
    { es: "Los accidentes de tráfico en los que el sueño es el principal factor de riesgo, ¿pueden suceder durante las horas diurnas?",
      prompt: { ru: "Могут ли аварии, где главный фактор — сон, случаться днём?", en: "Can accidents in which sleepiness is the main factor happen in daytime?" },
      options: [
        { es: "Sí, especialmente entre las dos y las cuatro de la tarde.", ru: "Да, особенно между двумя и четырьмя часами дня.", en: "Yes, especially between two and four in the afternoon." },
        { es: "Sí, aunque es un tipo de accidente que solo sufren los conductores profesionales.", ru: "Да, но только у профессиональных водителей.", en: "Yes, but only to professional drivers." },
        { es: "No, solo suceden durante las horas nocturnas.", ru: "Нет, только ночью.", en: "No, only at night." }
      ],
      answer: 0,
      explain: { ru: "Сонливость пиковая не только ночью, но и после обеда, примерно с 14 до 16 часов.", en: "Sleepiness peaks not only at night but also after lunch, roughly from 2 to 4 p.m." } },
    { es: "La obligación de dejar espacio suficiente para permitir el adelantamiento no será aplicable...",
      prompt: { ru: "Обязанность оставлять место для обгона не действует…", en: "The obligation to leave enough room to be overtaken does not apply…" },
      options: [
        { es: "donde esté prohibido el adelantamiento.", ru: "там, где обгон запрещён.", en: "where overtaking is forbidden." },
        { es: "en carreteras convencionales.", ru: "на обычных загородных дорогах.", en: "on conventional roads." },
        { es: "en vías con un único carril para cada sentido.", ru: "на дорогах с одной полосой в каждом направлении.", en: "on roads with one lane in each direction." }
      ],
      answer: 0,
      explain: { ru: "Медленные машины и колонны оставляют промежутки для обгона; там, где обгон запрещён, это не требуется (RGC, ст. 54).", en: "Slow vehicles and convoys leave gaps for overtaking; where overtaking is forbidden this is not required (RGC art. 54)." } },
    { es: "Los conductores de bicicletas tienen prioridad de paso respecto a los vehículos de motor...",
      prompt: { ru: "Велосипедисты имеют приоритет перед моторным транспортом…", en: "Cyclists have priority over motor vehicles…" },
      options: [
        { es: "en las zonas peatonales debidamente señalizadas.", ru: "в обозначенных пешеходных зонах.", en: "in signed pedestrian zones." },
        { es: "en todas las intersecciones.", ru: "на всех перекрёстках.", en: "at all junctions." },
        { es: "cuando circulen por un paso para ciclistas.", ru: "когда едут по велопереезду.", en: "when riding on a cycle crossing." }
      ],
      answer: 2,
      explain: { ru: "Велосипедист имеет приоритет на обозначенном велопереезде и на велодорожке (RGC, ст. 64).", en: "Cyclists have priority on a marked cycle crossing and on a cycle lane (RGC art. 64)." } },
    { es: "¿Qué debe llevar todo peatón que transite de noche por el arcén de una vía fuera de poblado?",
      prompt: { ru: "Что должен иметь каждый пешеход, идущий ночью по обочине загородной дороги?", en: "What must every pedestrian walking at night on the hard shoulder outside a town carry?" },
      options: [
        { es: "Un catadióptrico amarillo que pueda verse a una distancia mínima de 50 metros.", ru: "Жёлтый катафот, видимый не менее чем с 50 метров.", en: "A yellow reflector visible from at least 50 metres." },
        { es: "Un teléfono móvil.", ru: "Мобильный телефон.", en: "A mobile phone." },
        { es: "Un elemento luminoso o reflectante que sea visible a una distancia mínima de 150 metros.", ru: "Светящийся или светоотражающий элемент, видимый не менее чем со 150 метров.", en: "A light or reflective item visible from at least 150 metres." }
      ],
      answer: 2,
      explain: { ru: "Вне населённого пункта ночью пешеход должен быть заметен с 150 м: светоотражатель или фонарь (RGC, ст. 123).", en: "Outside towns at night a pedestrian must be visible from 150 m: a reflective item or a light (RGC art. 123)." } },
    { es: "Consumir alcohol con el estómago lleno, ¿influye en la tasa de alcoholemia?",
      prompt: { ru: "Влияет ли полный желудок на уровень алкоголя в крови?", en: "Does drinking on a full stomach affect the blood alcohol level?" },
      options: [
        { es: "Sí; el alcohol se absorbe más lentamente, pero esto no evita el riesgo de accidente.", ru: "Да: алкоголь всасывается медленнее, но риск аварии остаётся.", en: "Yes: alcohol is absorbed more slowly, but the accident risk remains." },
        { es: "Sí; el alcohol se absorbe más rápidamente, por lo que la tasa de alcoholemia es mayor.", ru: "Да: алкоголь всасывается быстрее, и уровень выше.", en: "Yes: alcohol is absorbed faster, so the level is higher." },
        { es: "No; es un factor que no influye en la tasa de alcoholemia.", ru: "Нет, не влияет.", en: "No, it has no effect." }
      ],
      answer: 0,
      explain: { ru: "Еда замедляет всасывание, но алкоголь всё равно попадает в кровь и ухудшает вождение.", en: "Food slows absorption, but the alcohol still reaches the blood and impairs driving." } },
    { es: "Además de estar regulado a la altura idónea, ¿qué separación debe existir entre el reposacabezas y la cabeza para que sea eficaz?",
      prompt: { ru: "Кроме правильной высоты, какой должен быть зазор между подголовником и головой, чтобы он был эффективен?", en: "Besides the right height, how far should the head restraint be from the head to be effective?" },
      options: [
        { es: "La mínima posible y nunca superior a 4 centímetros.", ru: "Минимальный, никогда не больше 4 см.", en: "As small as possible and never more than 4 cm." },
        { es: "La máxima posible y nunca inferior a 5 centímetros.", ru: "Максимальный, никогда не меньше 5 см.", en: "As large as possible and never less than 5 cm." },
        { es: "Superior a 10 centímetros.", ru: "Больше 10 см.", en: "More than 10 cm." }
      ],
      answer: 0,
      explain: { ru: "Подголовник должен быть как можно ближе к голове (не дальше 4 см), иначе при ударе сзади шея сильно отклоняется.", en: "The head restraint should be as close to the head as possible (no more than 4 cm), otherwise the neck whips back in a rear impact." } },
    { es: "Como norma general, en una vía interurbana de doble sentido de la circulación está permitido parar fuera de la calzada...",
      prompt: { ru: "Как правило, на загородной дороге с двусторонним движением останавливаться вне проезжей части разрешено…", en: "As a rule, on a two-way interurban road you may stop off the carriageway…" },
      options: [
        { es: "en el lado izquierdo y dejando libre la parte transitable del arcén.", ru: "слева, оставив свободной проезжую часть обочины.", en: "on the left, leaving the usable part of the hard shoulder clear." },
        { es: "en el lado derecho y dejando libre la parte transitable del arcén.", ru: "справа, оставив свободной проезжую часть обочины.", en: "on the right, leaving the usable part of the hard shoulder clear." },
        { es: "en el lado derecho y sobre la parte transitable del arcén.", ru: "справа, на проезжей части обочины.", en: "on the right, on the usable part of the hard shoulder." }
      ],
      answer: 1,
      explain: { ru: "Вне населённого пункта останавливаются вне проезжей части справа, оставляя проходимую часть обочины свободной (RGC, ст. 90).", en: "Outside towns you stop off the carriageway on the right, leaving the usable part of the shoulder clear (RGC art. 90)." } },
    { es: "Si un conductor novel presenta una tasa del alcohol en aire espirado de 0,20 miligramos por litro, el agente de tráfico, ¿le realizará una segunda prueba de alcoholemia?",
      prompt: { ru: "У водителя-новичка 0,20 мг/л алкоголя в выдыхаемом воздухе. Проведёт ли полицейский второй тест?", en: "A novice driver shows 0.20 mg/l of alcohol in exhaled air. Will the officer do a second test?" },
      options: [
        { es: "No; para ello debe tener una tasa superior a 0,25 miligramos por litro.", ru: "Нет: для этого уровень должен быть выше 0,25 мг/л.", en: "No: for that the level must be above 0.25 mg/l." },
        { es: "Solo si está implicado directamente en un accidente de circulación.", ru: "Только если он прямо замешан в ДТП.", en: "Only if he is directly involved in an accident." },
        { es: "Sí, para una mayor garantía y a efectos de contraste.", ru: "Да, для надёжности и сверки.", en: "Yes, for greater certainty and to compare results." }
      ],
      answer: 2,
      explain: { ru: "Для новичков предел 0,15 мг/л; превышение проверяется вторым тестом для сверки (RGC, ст. 23).", en: "The novice limit is 0.15 mg/l; a positive result is checked with a second test for comparison (RGC art. 23)." } },
    { es: "Circula con un turismo que arrastra un remolque de menos de 750 kg. de M.M.A. en el que transporta mercancías. En cuanto a la distribución de la carga, ¿debe tomar precauciones especiales?",
      prompt: { ru: "Вы едете на легковом автомобиле с прицепом до 750 кг, в котором груз. Нужно ли особо заботиться о размещении груза?", en: "You are driving a car towing a trailer under 750 kg MAM with goods in it. Should you take special care with the load?" },
      options: [
        { es: "Sí, la carga debe estar bien distribuida e ir bien sujeta para evitar que se desplace y pueda llegar a desestabilizar al vehículo.", ru: "Да, груз должен быть равномерно распределён и надёжно закреплён, чтобы он не сместился и не нарушил устойчивость.", en: "Yes, it must be well distributed and secured so it cannot shift and destabilise the vehicle." },
        { es: "No, salvo que supere la masa máxima autorizada del remolque.", ru: "Нет, если не превышена разрешённая масса прицепа.", en: "No, unless the trailer's maximum mass is exceeded." },
        { es: "Sí, debe situarse en la parte trasera del remolque para bajar el centro de gravedad y asegurar la estabilidad del vehículo.", ru: "Да, его нужно класть в заднюю часть прицепа, чтобы понизить центр тяжести.", en: "Yes, it should go at the back of the trailer to lower the centre of gravity." }
      ],
      answer: 0,
      explain: { ru: "Груз в прицепе нужно закрепить и распределить, чтобы состав был устойчив. С прицепом осторожнее обгоняйте — состав длиннее и манёвр дольше — и держите большую дистанцию, ведь для остановки нужно больше места.", en: "A trailer load must be secured and distributed so the combination stays stable. Take extra care overtaking — the combination is longer, so the manoeuvre takes longer — and keep a bigger gap, as stopping needs more room." } },
    { es: "Si padece una alergia respiratoria, ¿es conveniente circular con las ventanas del vehículo abiertas?",
      prompt: { ru: "Если у вас аллергия дыхательных путей, стоит ли ехать с открытыми окнами?", en: "If you have a respiratory allergy, is it advisable to drive with the windows open?" },
      options: [
        { es: "Sí, para llevar bien ventilado el interior del vehículo.", ru: "Да, чтобы салон хорошо проветривался.", en: "Yes, to keep the inside well ventilated." },
        { es: "Solo en primavera.", ru: "Только весной.", en: "Only in spring." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 2,
      explain: { ru: "Через открытые окна в салон попадает пыльца; лучше закрыть окна и использовать фильтр салона.", en: "Open windows let pollen in; it is better to close them and use the cabin filter." } },
    { es: "¿Es necesario revisar el funcionamiento del sistema de alumbrado de un vehículo?",
      prompt: { ru: "Нужно ли проверять работу системы освещения машины?", en: "Is it necessary to check the vehicle's lighting system?" },
      options: [
        { es: "Solo si el vehículo no lleva instaladas luces de xenón.", ru: "Только если у машины нет ксеноновых фар.", en: "Only if the vehicle has no xenon lights." },
        { es: "No, no es necesario.", ru: "Нет, не нужно.", en: "No, it is not necessary." },
        { es: "Sí; forma parte del mantenimiento preventivo.", ru: "Да, это часть профилактического обслуживания.", en: "Yes, it is part of preventive maintenance." }
      ],
      answer: 2,
      explain: { ru: "Проверка света — обычная часть профилактического обслуживания машины.", en: "Checking the lights is a normal part of preventive maintenance." } },
    { es: "En vías interurbanas, ¿cuál es la infracción más habitual que cometen los peatones víctimas de atropello?",
      prompt: { ru: "Какое нарушение чаще всего совершают пешеходы, сбитые на загородных дорогах?", en: "On interurban roads, what is the most common offence committed by pedestrians who are hit?" },
      options: [
        { es: "No respetar los semáforos.", ru: "Не соблюдают сигналы светофора.", en: "Not obeying traffic lights." },
        { es: "Estar o marchar por la calzada de forma antirreglamentaria.", ru: "Находятся или идут по проезжей части с нарушением правил.", en: "Being on or walking along the carriageway in breach of the rules." },
        { es: "No obedecer las señales de los agentes.", ru: "Не подчиняются сигналам полицейских.", en: "Not obeying officers' signals." }
      ],
      answer: 1,
      explain: { ru: "Вне городов пешеходов чаще всего сбивают, когда они неправильно находятся на проезжей части.", en: "Outside towns pedestrians are most often hit when they are on the carriageway against the rules." } },
    { es: "Cuando las indicaciones de un semáforo y una señal de balizamiento se contradicen, prevalece…",
      prompt: { ru: "Если указания светофора и временного знака (señal de balizamiento) противоречат друг другу, действует…", en: "When a traffic light and a beacon sign (señal de balizamiento) contradict each other, which prevails?" },
      options: [
        { es: "La señal de balizamiento, por orden de prioridad.", ru: "знак ограждения (balizamiento), по порядку приоритета.", en: "The beacon sign, by order of priority." },
        { es: "El semáforo.", ru: "светофор.", en: "The traffic light." },
        { es: "La señal más restrictiva.", ru: "более строгий знак.", en: "The more restrictive sign." }
      ],
      answer: 0,
      explain: { ru: "Порядок приоритета: агенты, временные знаки и ограждение (balizamiento), светофоры, вертикальные знаки, разметка (RGC, ст. 133).", en: "Order of priority: officers, temporary signs and beacons (balizamiento), traffic lights, vertical signs, road markings (RGC art. 133)." } },
    { es: "Al abandonar una autovía deberá…",
      prompt: { ru: "Съезжая с autovía, нужно…", en: "When leaving an autovía you must…" },
      options: [
        { es: "Reducir la velocidad de 60 km/h.", ru: "снизить скорость до 60 км/ч.", en: "slow down to 60 km/h." },
        { es: "Continuar por su carril hasta la salida.", ru: "ехать по своей полосе до самого съезда.", en: "stay in your lane until the exit." },
        { es: "Circular por el carril de deceleración lo antes posible.", ru: "как можно раньше перейти на полосу торможения.", en: "move into the deceleration lane as early as possible." }
      ],
      answer: 2,
      explain: { ru: "На полосу торможения переходят как можно раньше, чтобы тормозить уже на ней, а не на основной полосе.", en: "Move into the deceleration lane as early as possible so you slow down there and not on the main lane." } },
    { es: "El freno de pie, ¿sobre qué ruedas actúa?",
      prompt: { ru: "На какие колёса действует ножной тормоз?", en: "Which wheels does the foot brake act on?" },
      options: [
        { es: "Sobre las ruedas delanteras.", ru: "На передние колёса.", en: "On the front wheels." },
        { es: "Sobre las cuatro ruedas.", ru: "На все четыре колеса.", en: "On all four wheels." },
        { es: "Sobre las ruedas motrices.", ru: "На ведущие колёса.", en: "On the driving wheels." }
      ],
      answer: 1,
      explain: { ru: "Рабочий (ножной) тормоз действует на все колёса; стояночный обычно — только на задние.", en: "The service (foot) brake acts on all wheels; the parking brake usually only on the rear ones." } },
    { es: "En una autopista con tres carriles para el mismo sentido, normalmente, ¿cuál debe utilizar?",
      prompt: { ru: "На autopista с тремя полосами в одном направлении какой полосой обычно нужно пользоваться?", en: "On an autopista with three lanes in the same direction, which one should you normally use?" },
      options: [
        { es: "Cualquiera de ellos.", ru: "Любой из них.", en: "Any of them." },
        { es: "El central o el derecho, indistintamente.", ru: "Средней или правой — всё равно.", en: "The middle or right one, either." },
        { es: "El derecho.", ru: "Правой.", en: "The right one." }
      ],
      answer: 2,
      explain: { ru: "Вне населённого пункта едут по правой полосе; остальные — для обгона или при плотном движении (RGC, ст. 31).", en: "Outside towns you use the right lane; the others are for overtaking or heavy traffic (RGC art. 31)." } },
    { es: "Quiere girar a la derecha. ¿Cómo debe avisar a los demás conductores?",
      prompt: { ru: "Вы хотите повернуть направо. Как предупредить других водителей?", en: "You want to turn right. How should you warn other drivers?" },
      options: [
        { es: "Con las luces o con el claxon", ru: "Светом или звуковым сигналом.", en: "With the lights or the horn." },
        { es: "Con el intermitente o con el brazo", ru: "Указателем поворота или рукой.", en: "With the indicator or your arm." },
        { es: "Con el brazo o con el claxon.", ru: "Рукой или звуковым сигналом.", en: "With your arm or the horn." }
      ],
      answer: 1,
      explain: { ru: "Манёвр показывают указателем поворота, а при его отсутствии — рукой (RGC, ст. 109).", en: "A manoeuvre is shown with the indicator or, failing that, with the arm (RGC art. 109)." } },
    { es: "La lluvia, ¿afecta al agarre de las ruedas del vehículo a la calzada?",
      prompt: { ru: "Влияет ли дождь на сцепление колёс с дорогой?", en: "Does rain affect the grip of the wheels on the road?" },
      options: [
        { es: "No, el agarre es el mismo que cuando la calzada está seca.", ru: "Нет, сцепление такое же, как на сухой дороге.", en: "No, grip is the same as on a dry road." },
        { es: "Sí, se agarran más a la calzada.", ru: "Да, сцепление становится лучше.", en: "Yes, they grip better." },
        { es: "Sí, se agarran menos.", ru: "Да, сцепление становится хуже.", en: "Yes, they grip less." }
      ],
      answer: 2,
      explain: { ru: "На мокрой дороге сцепление хуже, а тормозной путь длиннее.", en: "On a wet road grip is lower and braking distance longer." } },
    { es: "¿Qué debe hacer un peatón si, cuando va a cruzar una vía, se encuentra de frente a un agente con el brazo levantado verticalmente?",
      prompt: { ru: "Что должен сделать пешеход, если, собираясь переходить дорогу, он видит перед собой полицейского с поднятой вверх рукой?", en: "What must a pedestrian do if, about to cross, he faces an officer with an arm raised vertically?" },
      options: [
        { es: "Detenerse.", ru: "Остановиться.", en: "Stop." },
        { es: "Cruzar. Las señales de los agentes sólo obligan a los conductores de vehículos.", ru: "Переходить: сигналы полицейских касаются только водителей.", en: "Cross: officers' signals only bind drivers." },
        { es: "Detenerse, excepto si un semáforo le da preferencia de paso, en cuyo caso debe cruzar.", ru: "Остановиться, но если светофор разрешает — переходить.", en: "Stop, unless a traffic light gives him priority, in which case cross." }
      ],
      answer: 0,
      explain: { ru: "Поднятая вверх рука — «стоп» для всех, к кому обращён агент, и пешеходов тоже; сигналы агента важнее светофора.", en: "An arm raised vertically means stop for everyone the officer faces, pedestrians too; an officer's signals override traffic lights." } },
    { es: "De los siguientes, ¿cuál es un síntoma característico de la aparición de la fatiga durante la conducción?",
      prompt: { ru: "Какой из признаков типичен для появления усталости за рулём?", en: "Which of these is a typical sign of fatigue while driving?" },
      options: [
        { es: "Se distingue mejor la información relevante de la irrelevante.", ru: "Важная информация лучше отличается от неважной.", en: "Relevant information is told apart better from irrelevant." },
        { es: "La disminución en el número de correcciones de la dirección", ru: "Уменьшается число корректировок руля.", en: "The number of steering corrections decreases." },
        { es: "El incremento de la agudeza visual.", ru: "Повышается острота зрения.", en: "Visual acuity increases." }
      ],
      answer: 1,
      explain: { ru: "Уставший водитель реже подруливает, машина «плывёт» — это признак усталости.", en: "A tired driver corrects the steering less often and the car drifts — a sign of fatigue." } },
    { es: "Tras la exposición prolongada de un vehículo a altas temperaturas y al calor, ¿es conveniente revisar si sus faros y pilotos han sufrido algún deterioro?",
      prompt: { ru: "После долгого нахождения машины под сильной жарой стоит ли проверить, не повредились ли фары и задние фонари?", en: "After a vehicle has spent a long time in high heat, should you check whether its headlights and rear lamps have deteriorated?" },
      options: [
        { es: "Sí, para comprobar de forma visual su estado y capacidad de iluminación.", ru: "Да, чтобы осмотреть их состояние и силу света.", en: "Yes, to check visually their condition and how well they light." },
        { es: "No, ya que el acabado de los faros está hecho de un material que soporta todo tipo de factores sin deteriorarse.", ru: "Нет, корпус фар сделан из материала, который выдерживает всё.", en: "No, headlights are made of a material that withstands everything." },
        { es: "Sí, salvo en los vehículos de poca antigüedad.", ru: "Да, кроме новых машин.", en: "Yes, except on fairly new vehicles." }
      ],
      answer: 0,
      explain: { ru: "Жара ухудшает работу некоторых частей машины и повышает риск аварии. Фары и фонари от постоянного солнца и жары быстро стареют, желтеют и мутнеют, свет рассеивается хуже, и видимость падает, особенно ночью. Их стоит проверять, например после лета.", en: "Heat affects some parts of the car and raises the accident risk. Headlights and rear lamps age fast under constant sun and heat, turning yellow and cloudy, so the beam spreads badly and visibility drops, especially at night. Check them, for example after the summer." } },
    { es: "La tasa de alcoholemia en sangre más segura para circular es…",
      prompt: { ru: "Самый безопасный уровень алкоголя в крови для вождения —…", en: "The safest blood alcohol level for driving is…" },
      options: [
        { es: "0,0 gramos por litro.", ru: "0,0 г/л.", en: "0.0 g/l." },
        { es: "0,5 gramos por litro.", ru: "0,5 г/л.", en: "0.5 g/l." },
        { es: "0,3 gramos por litro.", ru: "0,3 г/л.", en: "0.3 g/l." }
      ],
      answer: 0,
      explain: { ru: "Любое количество алкоголя ухудшает вождение; безопасно — только ноль.", en: "Any amount of alcohol impairs driving; only zero is safe." } },
    { es: "Sobrevalorar su capacidad de conducción o una menor percepción del riesgo son conductas que, en general, hacen que los conductores jóvenes…",
      prompt: { ru: "Переоценка своих навыков и слабое восприятие риска, как правило, приводят к тому, что молодые водители…", en: "Overrating their driving skills and seeing less risk generally make young drivers…" },
      options: [
        { es: "tengan menos probabilidad de sufrir un accidente.", ru: "реже попадают в аварии.", en: "less likely to have an accident." },
        { es: "tengan más probabilidad de sufrir un accidente", ru: "чаще попадают в аварии.", en: "more likely to have an accident." },
        { es: "sean más prudentes al volante", ru: "ведут себя осторожнее.", en: "more careful at the wheel." }
      ],
      answer: 1,
      explain: { ru: "Переоценка своих сил и недооценка риска — главные причины аварийности молодых водителей.", en: "Overconfidence and underestimating risk are key reasons why young drivers crash more." } },
    { es: "¿Está permitido que los vehículos prioritarios en servicio de urgencia utilicen únicamente la señal luminosa?",
      prompt: { ru: "Разрешено ли машинам приоритетных служб при срочном вызове использовать только световой сигнал?", en: "May priority vehicles on an emergency call use only the light signal?" },
      options: [
        { es: "Sí, cuando no suponga un peligro para los demás usuarios.", ru: "Да, если это не создаёт опасности для других.", en: "Yes, when it does not endanger other road users." },
        { es: "No, tienen que utilizar simultáneamente la señal luminosa y la acústica", ru: "Нет, они должны одновременно включать световой и звуковой сигналы.", en: "No, they must use the light and sound signals together." },
        { es: "Sólo en vías urbanas; en vías interurbanas deben usar siempre la señal acústica", ru: "Только в городе; за городом звук обязателен.", en: "Only in towns; outside towns the siren is always needed." }
      ],
      answer: 0,
      explain: { ru: "Приоритетные машины могут ехать только с маячком, если это не опасно; им всё равно нужно уступать (RGC, ст. 68).", en: "Priority vehicles may use only the flashing light when it is not dangerous, and you must still give way (RGC art. 68)." } },
    { es: "¿Qué indica esta señal?",
      prompt: { ru: "Что означает этот знак?", en: "What does this sign mean?" },
      options: [
        { es: "Proximidad a un cruce con una línea de tranvía.", ru: "Приближение к пересечению с трамвайной линией.", en: "Approach to a crossing with a tram line." },
        { es: "La cercanía de un paso a nivel, puente móvil o muelle.", ru: "Близость железнодорожного переезда, разводного моста или причала.", en: "Nearness of a level crossing, swing bridge or quay." },
        { es: "La cercanía de un paso a nivel al lado derecho.", ru: "Близость железнодорожного переезда справа.", en: "Nearness of a level crossing on the right-hand side." }
      ],
      answer: 1,
      explain: { ru: "Белые столбики с красными полосами (P-9, P-10) отсчитывают расстояние до переезда, разводного моста или причала; одна полоса — около 100 м.", en: "White posts with red stripes (P-9, P-10) count down to a level crossing, swing bridge or quay; one stripe means about 100 m." },
      sign: "P-9c" },
    { es: "En idénticas situaciones de tráfico, el tiempo de reacción…",
      prompt: { ru: "В одинаковых дорожных ситуациях время реакции…", en: "In identical traffic situations, reaction time…" },
      options: [
        { es: "puede variar en función del estado psicofísico del conductor.", ru: "может меняться в зависимости от физического и психического состояния водителя.", en: "may vary with the driver's psychophysical state." },
        { es: "es siempre el mismo, no influye el estado psicofísico del conductor.", ru: "всегда одно и то же, состояние водителя не влияет.", en: "is always the same; the driver's state does not matter." },
        { es: "es el mismo para todos los conductores.", ru: "одинаково у всех водителей.", en: "is the same for all drivers." }
      ],
      answer: 0,
      explain: { ru: "Время реакции растёт от усталости, алкоголя, лекарств, отвлечения и т. д.", en: "Reaction time grows with fatigue, alcohol, medicines, distraction and so on." } },
    { es: "El color del casco de protección de un motorista, ¿puede influir en su seguridad?",
      prompt: { ru: "Может ли цвет шлема влиять на безопасность мотоциклиста?", en: "Can the colour of a rider's helmet affect his safety?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí; los de colores claros o brillantes hacen más visible al motorista.", ru: "Да: светлые и яркие шлемы делают мотоциклиста заметнее.", en: "Yes: light or bright helmets make the rider more visible." },
        { es: "Sí; los de colores oscuros absorben mejor los impactos.", ru: "Да: тёмные лучше поглощают удары.", en: "Yes: dark ones absorb impacts better." }
      ],
      answer: 1,
      explain: { ru: "Яркий шлем помогает другим водителям раньше заметить мотоциклиста.", en: "A bright helmet helps other drivers see the rider sooner." } },
    { es: "La señal que se observa en la fotografía prohíbe…",
      prompt: { ru: "Знак на фотографии запрещает…", en: "The sign in the photo forbids…" },
      options: [
        { es: "cambiar el sentido de la marcha y girar a la izquierda.", ru: "разворот и поворот налево.", en: "changing direction (U-turn) and turning left." },
        { es: "girar a la izquierda.", ru: "поворот налево.", en: "turning left." },
        { es: "cambiar el sentido de la marcha.", ru: "разворот.", en: "making a U-turn." }
      ],
      answer: 2,
      explain: { ru: "Знак R-304 запрещает только разворот; поворот налево он не запрещает.", en: "Sign R-304 forbids only U-turns; it does not forbid turning left." },
      sign: "R-304" },
    { es: "Antes de abrir las puertas para bajar de un vehículo, debe cerciorarse siempre de que…",
      prompt: { ru: "Прежде чем открыть двери, чтобы выйти из машины, всегда нужно убедиться, что…", en: "Before opening the doors to get out, you must always make sure that…" },
      options: [
        { es: "no se ocasiona peligro a otros usuarios.", ru: "это не создаёт опасности для других.", en: "it causes no danger to other road users." },
        { es: "las luces de emergencia del vehículo están encendidas.", ru: "включена аварийная сигнализация.", en: "the hazard lights are on." },
        { es: "se ha puesto el chaleco reflectante.", ru: "вы надели светоотражающий жилет.", en: "you have put on the reflective vest." }
      ],
      answer: 0,
      explain: { ru: "Двери открывают, только убедившись, что это не опасно для других (RGC, ст. 114).", en: "Open doors only after making sure it is not dangerous for others (RGC art. 114)." } },
    { es: "En las intersecciones señalizadas, ¿cuál es la norma general que prevalece?",
      prompt: { ru: "На регулируемых знаками перекрёстках какое общее правило действует?", en: "At signed junctions, which general rule prevails?" },
      options: [
        { es: "Cumplir lo que la señal indica.", ru: "Выполнять то, что показывает знак.", en: "Doing what the sign says." },
        { es: "Ceder el paso siempre a la derecha.", ru: "Всегда уступать тем, кто справа.", en: "Always giving way to the right." },
        { es: "Abstenerse del cumplimiento de la señalización.", ru: "Не выполнять знаки.", en: "Ignoring the signs." }
      ],
      answer: 0,
      explain: { ru: "Если перекрёсток обозначен знаками, приоритет определяют знаки; правило помехи справа — только при их отсутствии.", en: "At a signed junction the signs decide priority; the give-way-to-the-right rule applies only without signs." } },
    { es: "Si toma analgésicos narcóticos para tratar algún dolor intenso, lo más aconsejable es…",
      prompt: { ru: "Если вы принимаете наркотические обезболивающие от сильной боли, самое разумное…", en: "If you take narcotic painkillers for severe pain, the most advisable thing is…" },
      options: [
        { es: "conducir con normalidad, ya que no tienen efectos secundarios.", ru: "водить как обычно, побочных эффектов нет.", en: "to drive as normal, as they have no side effects." },
        { es: "conducir sólo de noche, ya que sus efectos secundarios son menores.", ru: "водить только ночью, эффекты меньше.", en: "to drive only at night, when side effects are smaller." },
        { es: "no conducir durante el tratamiento.", ru: "не водить во время лечения.", en: "not to drive during the treatment." }
      ],
      answer: 2,
      explain: { ru: "Наркотические анальгетики вызывают сонливость и замедляют реакцию; во время лечения лучше не водить.", en: "Narcotic painkillers cause drowsiness and slow reactions; better not to drive during treatment." } },
    { es: "Respecto a la velocidad anormalmente reducida, ¿a qué velocidad mínima, salvo causa justificada, deberá circular una pick-up por una autovía?",
      prompt: { ru: "Какая минимальная скорость, без уважительной причины, для пикапа на autovía (во избежание аномально низкой скорости)?", en: "Regarding abnormally low speed, what minimum speed must a pick-up keep on an autovía, without a good reason?" },
      options: [
        { es: "60 km/h.", ru: "60 км/ч.", en: "60 km/h." },
        { es: "55 km/h.", ru: "55 км/ч.", en: "55 km/h." },
        { es: "70 km/h.", ru: "70 км/ч.", en: "70 km/h." }
      ],
      answer: 0,
      explain: { ru: "Минимальная скорость — половина максимальной для этой машины на этой дороге; для пикапа на autovía — 60 км/ч (RGC, ст. 49).", en: "The minimum is half the vehicle's maximum on that road; for a pick-up on an autovía it is 60 km/h (RGC art. 49)." } },
    { es: "Al circular marcha atrás debe tener en cuenta que…",
      prompt: { ru: "Двигаясь задним ходом, нужно учитывать, что…", en: "When reversing you must bear in mind that…" },
      options: [
        { es: "no debe recorrer más de 10 metros.", ru: "нельзя проезжать больше 10 метров.", en: "you may not cover more than 10 metres." },
        { es: "debe hacerlo con precaución, ya que pueden pasar personas por detrás del vehículo.", ru: "делать это нужно осторожно: сзади могут пройти люди.", en: "you must do it carefully, as people may pass behind the vehicle." },
        { es: "tiene prioridad sobre los peatones.", ru: "у вас приоритет перед пешеходами.", en: "you have priority over pedestrians." }
      ],
      answer: 1,
      explain: { ru: "Задним ходом едут медленно и осторожно, предварительно убедившись, что сзади никого нет (RGC, ст. 81).", en: "Reverse slowly and carefully after making sure nobody is behind (RGC art. 81)." } },
    { es: "Si un conductor se niega a realizar las pruebas de detección alcohólica, los agentes de tráfico, ¿pueden inmovilizar su vehículo?",
      prompt: { ru: "Если водитель отказывается от теста на алкоголь, могут ли полицейские задержать его машину?", en: "If a driver refuses the alcohol test, may the officers immobilise his vehicle?" },
      options: [
        { es: "Solo si presenta síntomas evidentes de haber consumido alcohol.", ru: "Только если есть явные признаки опьянения.", en: "Only if he shows clear signs of having drunk." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, y además está cometiendo un delito.", ru: "Да, и к тому же это преступление.", en: "Yes, and moreover he is committing a crime." }
      ],
      answer: 2,
      explain: { ru: "Отказ от теста — преступление (Уголовный кодекс, ст. 383), и машину могут задержать.", en: "Refusing the test is a crime (Criminal Code art. 383), and the vehicle may be immobilised." } },
    { es: "¿Puede trasportar una carga indivisible que por sus dimensiones sobresalga lateralmente de la proyección en planta de una motocicleta?",
      prompt: { ru: "Можно ли перевозить неделимый груз, который по размерам выступает в стороны за габарит мотоцикла?", en: "May you carry an indivisible load that sticks out sideways beyond a motorcycle's outline?" },
      options: [
        { es: "Sí, ya que, aunque sobresalga más de 1 metro no compromete su estabilidad.", ru: "Да, даже если он выступает больше чем на 1 метр — устойчивость не страдает.", en: "Yes, even if it sticks out more than 1 metre it does not affect stability." },
        { es: "No, ya que dicha carga solamente puede sobresalir por la parte anterior y posterior.", ru: "Нет, такой груз может выступать только спереди и сзади.", en: "No, such a load may only stick out at the front and back." },
        { es: "Sí, siempre que no sobresalga más de 0,50 metros por cada lado de su eje longitudinal.", ru: "Да, если он выступает не больше чем на 0,50 м с каждой стороны от продольной оси.", en: "Yes, as long as it sticks out no more than 0.50 m on each side of the longitudinal axis." }
      ],
      answer: 2,
      explain: { ru: "У машин шириной меньше 1 метра груз не должен выступать в стороны больше чем на 0,50 м от продольной оси с каждой стороны. Он должен быть закреплён так, чтобы не нарушать устойчивость, не упасть и не сдвинуться; нельзя создавать опасность для других.", en: "On vehicles under 1 metre wide the load may not stick out more than 0.50 m on each side of the longitudinal axis. It must be secured so it cannot affect stability, fall or shift dangerously, and must not put others at risk." } },
    { es: "Si conduce una motocicleta y hay niebla ligera, ¿qué alumbrado debe utilizar, además del de posición?",
      prompt: { ru: "Вы едете на мотоцикле в лёгком тумане. Какие огни включить кроме габаритов?", en: "Riding a motorcycle in light fog, which lights should you use besides the side light?" },
      options: [
        { es: "La luz antiniebla delantera, si la lleva, o la luz de corto o largo alcance.", ru: "Передний противотуманный, если есть, или ближний либо дальний свет.", en: "The front fog light, if fitted, or dipped or main beam." },
        { es: "La luz antiniebla delantera y trasera, si las lleva, y la luz de corto alcance.", ru: "Передний и задний противотуманные, если есть, и ближний свет.", en: "Front and rear fog lights, if fitted, and dipped beam." },
        { es: "La luz antiniebla trasera, si la lleva, y la luz de largo alcance.", ru: "Задний противотуманный, если есть, и дальний свет.", en: "The rear fog light, if fitted, and main beam." }
      ],
      answer: 0,
      explain: { ru: "Задний противотуманный — только при густом тумане; при лёгком — передний противотуманный или ближний/дальний (RGC, ст. 106).", en: "The rear fog light is only for thick fog; in light fog use the front fog light or dipped/main beam (RGC art. 106)." } },
    { es: "Buscar una dirección en el navegador GPS durante la conducción, ¿puede ser peligroso?",
      prompt: { ru: "Может ли быть опасно искать адрес в GPS-навигаторе во время езды?", en: "Can searching for an address on the GPS navigator while driving be dangerous?" },
      options: [
        { es: "Solo si el navegador GPS se encuentra muy alejado del asiento del conductor.", ru: "Только если навигатор далеко от водителя.", en: "Only if the GPS is far from the driver's seat." },
        { es: "No, porque ayuda a conducir con mayor seguridad.", ru: "Нет, он помогает ехать безопаснее.", en: "No, it helps you drive more safely." },
        { es: "Sí, porque el conductor se distrae.", ru: "Да, потому что водитель отвлекается.", en: "Yes, because the driver gets distracted." }
      ],
      answer: 2,
      explain: { ru: "Программировать навигатор можно только стоя; во время езды это отвлекает и запрещено.", en: "Program the GPS only when stopped; doing it while driving distracts you and is forbidden." } },
    { es: "Una vez termine de adelantar el vehículo verde, ¿puede seguir circulando por el carril izquierdo?",
      prompt: { ru: "Когда зелёная машина закончит обгон, может ли она продолжать ехать по левой полосе?", en: "Once the green vehicle finishes overtaking, may it carry on in the left lane?" },
      options: [
        { es: "No, debe circular por el carril derecho.", ru: "Нет, она должна ехать по правой полосе.", en: "No, it must use the right lane." },
        { es: "No, porque por el segundo carril sólo se puede circular para adelantar.", ru: "Нет, потому что по второй полосе можно ехать только для обгона.", en: "No, because the second lane may only be used for overtaking." },
        { es: "Sí, porque en autopista se puede circular por cualquier carril.", ru: "Да, на автостраде можно ехать по любой полосе.", en: "Yes, on a motorway you may use any lane." }
      ],
      answer: 0,
      explain: { ru: "Вне населённого пункта после обгона нужно вернуться на правую полосу (RGC, ст. 31).", en: "Outside towns you must return to the right lane after overtaking (RGC art. 31)." } },
    { es: "En general, un conductor que sufre un trastorno depresivo…",
      prompt: { ru: "Как правило, водитель с депрессивным расстройством…", en: "In general, a driver suffering from a depressive disorder…" },
      options: [
        { es: "sufre distracciones.", ru: "отвлекается.", en: "gets distracted." },
        { es: "comete menos errores a la hora de tomar decisiones.", ru: "реже ошибается, принимая решения.", en: "makes fewer mistakes when deciding." },
        { es: "es más inseguro al volante.", ru: "менее уверен за рулём.", en: "is less confident at the wheel." }
      ],
      answer: 2,
      explain: { ru: "Так ответил журнал: депрессия делает водителя неуверенным; она также замедляет реакцию и ухудшает внимание.", en: "The magazine's answer: depression makes a driver insecure at the wheel; it also slows reactions and weakens attention." } },
    { es: "En caso de accidente, ¿existe relación entre la velocidad de circulación y la gravedad de las lesiones de los ocupantes de un vehículo?",
      prompt: { ru: "При ДТП есть ли связь между скоростью и тяжестью травм у людей в машине?", en: "In an accident, is there a link between speed and how badly the occupants are injured?" },
      options: [
        { es: "Sí; a mayor velocidad menor es la probabilidad de sufrir lesiones graves.", ru: "Да: чем выше скорость, тем меньше вероятность тяжёлых травм.", en: "Yes: the higher the speed, the lower the chance of serious injury." },
        { es: "Sí; a mayor velocidad mayor es la probabilidad de sufrir lesiones graves.", ru: "Да: чем выше скорость, тем выше вероятность тяжёлых травм.", en: "Yes: the higher the speed, the higher the chance of serious injury." },
        { es: "No; la gravedad de las lesiones depende sólo de los sistemas de seguridad pasiva.", ru: "Нет: тяжесть зависит только от систем пассивной безопасности.", en: "No: it depends only on passive safety systems." }
      ],
      answer: 1,
      explain: { ru: "Энергия удара растёт с квадратом скорости, поэтому на большой скорости травмы тяжелее.", en: "Impact energy grows with the square of speed, so injuries are worse at higher speeds." } },
    { es: "En un turismo con cinco plazas autorizadas, ¿se puede transportar a seis personas?",
      prompt: { ru: "Можно ли везти шесть человек в легковом автомобиле на пять мест?", en: "May a car with five authorised seats carry six people?" },
      options: [
        { es: "No, está prohibido.", ru: "Нет, это запрещено.", en: "No, it is forbidden." },
        { es: "Sí, siempre que no se supere la masa máxima autorizada.", ru: "Да, если не превышена разрешённая масса.", en: "Yes, if the maximum authorised mass is not exceeded." },
        { es: "Sólo si uno de los ocupantes, al menos, es menor de 14 años.", ru: "Только если хотя бы одному из пассажиров меньше 14 лет.", en: "Only if at least one occupant is under 14." }
      ],
      answer: 0,
      explain: { ru: "Число людей не может превышать число мест, указанных в документах машины (RGC, ст. 9).", en: "The number of occupants may not exceed the seats stated in the vehicle's papers (RGC art. 9)." } },
    { es: "El sueño y la fatiga, ¿cómo influyen en la conducción?",
      prompt: { ru: "Как сон и усталость влияют на вождение?", en: "How do sleepiness and fatigue affect driving?" },
      options: [
        { es: "Disminuyen el tiempo de reacción.", ru: "Уменьшают время реакции.", en: "They reduce reaction time." },
        { es: "Aumentan la capacidad de reacción.", ru: "Повышают способность реагировать.", en: "They increase the ability to react." },
        { es: "Aumentan la distancia de reacción.", ru: "Увеличивают путь реакции.", en: "They increase the reaction distance." }
      ],
      answer: 2,
      explain: { ru: "Уставший водитель реагирует позже, поэтому машина успевает проехать больше до начала торможения.", en: "A tired driver reacts later, so the car travels further before braking starts." } },
    { es: "Si se ve implicado en un accidente de tráfico con posibilidad de muertos o heridos graves, ¿qué actuaciones, entre otras, debe llevar a cabo en la medida de lo posible?",
      prompt: { ru: "Если вы участник ДТП, где могут быть погибшие или тяжело раненые, что, среди прочего, нужно по возможности сделать?", en: "If you are involved in an accident with possible deaths or serious injuries, what must you do, as far as possible?" },
      options: [
        { es: "Seguir circulando, sin prestar ayuda a las víctimas ni avisar a la autoridad.", ru: "Ехать дальше, не помогая пострадавшим и не сообщая властям.", en: "Drive on without helping the victims or informing the authorities." },
        { es: "Detener el vehículo sin crear peligro, avisar a la autoridad o sus agentes y auxiliar a los heridos.", ru: "Остановиться, не создавая опасности, сообщить властям и помочь раненым.", en: "Stop without creating danger, inform the authorities and help the injured." },
        { es: "Detenerse, borrar las huellas del accidente y cambiar de sitio a los heridos y vehículos.", ru: "Остановиться, стереть следы ДТП и переместить раненых и машины.", en: "Stop, erase the traces of the accident and move the injured and the vehicles." }
      ],
      answer: 1,
      explain: { ru: "Участник ДТП обязан остановиться безопасно, вызвать помощь и помочь пострадавшим, не меняя следов без нужды (RGC, ст. 129).", en: "Anyone involved must stop safely, call for help and assist the victims, without altering the scene unnecessarily (RGC art. 129)." } },
    { es: "Cuando son víctimas de atropello, las lesiones más graves en los ciclistas, que pueden incluso provocar la muerte, se localizan en…",
      prompt: { ru: "Когда велосипедистов сбивает машина, самые тяжёлые травмы, вплоть до смерти, приходятся на…", en: "When cyclists are hit, the most serious injuries, which may even kill, are to…" },
      options: [
        { es: "las piernas.", ru: "ноги.", en: "the legs." },
        { es: "la cabeza.", ru: "голову.", en: "the head." },
        { es: "las manos.", ru: "руки (кисти).", en: "the hands." }
      ],
      answer: 1,
      explain: { ru: "Самые тяжёлые травмы у велосипедистов — травмы головы, поэтому так важен шлем.", en: "The most serious injuries to cyclists are head injuries, which is why a helmet matters." } },
    { es: "En esta carretera convencional con arcén transitable, ¿por dónde debe circular un ciclomotor?",
      prompt: { ru: "Где должен ехать мопед по этой обычной загородной дороге с проезжей обочиной?", en: "On this conventional road with a usable hard shoulder, where must a moped ride?" },
      options: [
        { es: "Por el centro de la calzada o por el arcén de la derecha.", ru: "По центру проезжей части или по правой обочине.", en: "In the middle of the carriageway or on the right-hand shoulder." },
        { es: "Por la calzada, lo más cerca posible del borde derecho.", ru: "По проезжей части как можно ближе к правому краю.", en: "On the carriageway, as close as possible to the right edge." },
        { es: "Por el arcén de la derecha.", ru: "По правой обочине.", en: "On the right-hand shoulder." }
      ],
      answer: 2,
      explain: { ru: "Мопеды, велосипеды и другие медленные машины едут по правой обочине, если она проезжая (RGC, ст. 36).", en: "Mopeds, bicycles and other slow vehicles must ride on the right shoulder if it is usable (RGC art. 36)." } },
    { es: "En un control preventivo, ¿pueden los agentes someter a un conductor a una prueba de detección de estupefacientes?",
      prompt: { ru: "Могут ли полицейские на профилактическом контроле проверить водителя на наркотики?", en: "At a preventive checkpoint, may officers test a driver for drugs?" },
      options: [
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "Sólo si está implicado en un accidente.", ru: "Только если он замешан в ДТП.", en: "Only if he is involved in an accident." },
        { es: "No; es una prueba que sólo se puede realizar en un centro médico.", ru: "Нет: это делают только в медицинском учреждении.", en: "No: that test is done only at a medical centre." }
      ],
      answer: 0,
      explain: { ru: "Тесты на наркотики, как и на алкоголь, проводятся и на профилактических контролях (LSV, ст. 14).", en: "Drug tests, like alcohol tests, may be done at preventive checkpoints (LSV art. 14)." } },
    { es: "Circula por una calzada en la que debido a la niebla el pavimento está húmedo y resbaladizo. ¿Cómo debe ser la conducción?",
      prompt: { ru: "Из-за тумана покрытие мокрое и скользкое. Как нужно ехать?", en: "Because of fog the road surface is damp and slippery. How should you drive?" },
      options: [
        { es: "Dinámica y, a una velocidad alta para evitar que las ruedas patinen.", ru: "Динамично и быстро, чтобы колёса не скользили.", en: "Dynamically and fast so the wheels do not skid." },
        { es: "Suave, sin movimientos bruscos, aumentando la distancia de seguridad, además de reducir la velocidad.", ru: "Плавно, без резких движений, увеличив дистанцию и снизив скорость.", en: "Smoothly, without sudden movements, keeping a bigger gap and slowing down." },
        { es: "Igual que cuando la calzada está seca, ya que los neumáticos no pierden adherencia.", ru: "Как на сухой дороге, шины не теряют сцепления.", en: "As on a dry road, since tyres do not lose grip." }
      ],
      answer: 1,
      explain: { ru: "На мокрой скользкой дороге едут плавнее и медленнее и держат большую дистанцию.", en: "On a wet, slippery road drive more smoothly and slowly and keep a bigger gap." } },
    { es: "En esta zona cebreada, ¿pueden los conductores circular o pararse sobre ella?",
      prompt: { ru: "Могут ли водители ехать или останавливаться на этой зоне со штриховкой (cebreado)?", en: "May drivers drive or stop on this hatched (cebreado) area?" },
      options: [
        { es: "Pararse sí pueden, pero circular está prohibido.", ru: "Останавливаться можно, ехать нельзя.", en: "They may stop on it but not drive on it." },
        { es: "Sí, todos los conductores pueden tanto pararse como circular sobre ella.", ru: "Да, можно и останавливаться, и ехать.", en: "Yes, they may both stop and drive on it." },
        { es: "No, no pueden ni circular ni pararse sobre ella.", ru: "Нет, нельзя ни ехать, ни останавливаться.", en: "No, they may neither drive nor stop on it." }
      ],
      answer: 2,
      explain: { ru: "На зону с белой косой штриховкой (cebreado) заезжать нельзя — ни ехать, ни останавливаться (RGC, ст. 171).", en: "A white hatched (cebreado) area may not be entered: neither driving nor stopping on it (RGC art. 171)." } },
    { es: "En poblado, ¿está permitido usar las advertencias acústicas?",
      prompt: { ru: "Можно ли в населённом пункте подавать звуковые сигналы?", en: "In a built-up area, may you use the horn?" },
      options: [
        { es: "Sí, para evitar un accidente o avisar a los demás usuarios de que se realiza un servicio de urgencia.", ru: "Да, чтобы избежать аварии или предупредить, что выполняется срочная служба.", en: "Yes, to avoid an accident or to warn others that you are on an emergency service." },
        { es: "Sí, exclusivamente para evitar un accidente.", ru: "Да, только чтобы избежать аварии.", en: "Yes, only to avoid an accident." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 0,
      explain: { ru: "В населённом пункте гудок разрешён, чтобы избежать аварии, и машинам, выполняющим срочную службу (RGC, ст. 110).", en: "In towns the horn is allowed to avoid an accident and by vehicles on an emergency service (RGC art. 110)." } },
    { es: "Conduce un turismo con un remolque de un solo eje. ¿Le afecta esta señal?",
      prompt: { ru: "Вы ведёте легковой автомобиль с одноосным прицепом. Касается ли вас этот знак?", en: "You are driving a car with a single-axle trailer. Does this sign apply to you?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, porque lleva un remolque de un eje.", ru: "Да, потому что у вас одноосный прицеп.", en: "Yes, because you are towing a single-axle trailer." },
        { es: "No, salvo que la M.M.A. del remolque supere la cifra indicada en la señal.", ru: "Нет, если разрешённая масса прицепа не больше указанной на знаке.", en: "No, unless the trailer's MAM exceeds the figure on the sign." }
      ],
      answer: 0,
      explain: { ru: "Знак R-112 запрещает въезд машинам с прицепом, кроме полуприцепов и одноосных прицепов.", en: "Sign R-112 bans vehicles with a trailer, except semi-trailers and single-axle trailers." },
      sign: "R-112" },
    { es: "El consumo de alcohol, aunque sea en pequeñas cantidades...",
      prompt: { ru: "Употребление алкоголя, даже в небольших количествах…", en: "Drinking alcohol, even in small amounts…" },
      options: [
        { es: "no deteriora la capacidad para conducir.", ru: "не ухудшает способность водить.", en: "does not impair the ability to drive." },
        { es: "deteriora la capacidad para conducir.", ru: "ухудшает способность водить.", en: "impairs the ability to drive." },
        { es: "deteriora la capacidad para conducir sólo si se mezcla con alguna droga ilegal.", ru: "ухудшает её, только если смешать с наркотиком.", en: "impairs it only if mixed with an illegal drug." }
      ],
      answer: 1,
      explain: { ru: "Даже малые дозы алкоголя замедляют реакцию и ухудшают оценку риска.", en: "Even small amounts of alcohol slow reactions and weaken risk judgement." } },
    { es: "Una persona mayor de edad, ¿puede transportar a un pasajero en una bicicleta que, por construcción, no pueda ser ocupada por más de una persona?",
      prompt: { ru: "Может ли взрослый перевозить пассажира на велосипеде, рассчитанном на одного человека?", en: "May an adult carry a passenger on a bicycle built for only one person?" },
      options: [
        { es: "Sólo si el conductor pedalea levantado y el pasajero va sentado en el sillín.", ru: "Только если водитель крутит педали стоя, а пассажир сидит на седле.", en: "Only if the rider pedals standing and the passenger sits on the saddle." },
        { es: "Sí, a un menor de hasta siete años en un asiento adicional homologado.", ru: "Да, ребёнка до семи лет в дополнительном сертифицированном сиденье.", en: "Yes, a child up to seven in an approved extra seat." },
        { es: "No, está prohibido.", ru: "Нет, это запрещено.", en: "No, it is forbidden." }
      ],
      answer: 1,
      explain: { ru: "Взрослый может везти на велосипеде ребёнка до 7 лет в дополнительном сертифицированном сиденье (RGC, ст. 12).", en: "An adult may carry a child up to seven in an approved extra seat (RGC art. 12)." } },
    { es: "Delante de un vado, esta señal prohíbe…",
      prompt: { ru: "Перед въездом в гараж (vado) этот знак запрещает…", en: "In front of a vado (driveway), this sign forbids…" },
      options: [
        { es: "la parada y el estacionamiento.", ru: "остановку и стоянку.", en: "stopping and parking." },
        { es: "únicamente la parada.", ru: "только остановку.", en: "only stopping." },
        { es: "solamente el estacionamiento.", ru: "только стоянку.", en: "only parking." }
      ],
      answer: 2,
      explain: { ru: "Знак R-308e «стоянка запрещена у въезда (vado)» запрещает только стоянку; кратковременная остановка не запрещена.", en: "Sign R-308e 'no parking at a driveway' forbids only parking; a brief stop is not banned." },
      sign: "R-308e" },
    { es: "A falta de señalización, ¿cuál es la velocidad máxima permitida para una furgoneta cuando circule por una autovía que discurra dentro de poblado?",
      prompt: { ru: "Без знаков, какова максимальная скорость фургона на autovía, проходящей по населённому пункту?", en: "Without signs, what is the maximum speed for a van on an autovía running through a built-up area?" },
      options: [
        { es: "80 km/h.", ru: "80 км/ч.", en: "80 km/h." },
        { es: "100 km/h.", ru: "100 км/ч.", en: "100 km/h." },
        { es: "90 km/h.", ru: "90 км/ч.", en: "90 km/h." }
      ],
      answer: 0,
      explain: { ru: "На autopista и autovía внутри населённого пункта общий предел — 80 км/ч (RGC, ст. 50).", en: "On autopistas and autovías inside built-up areas the general limit is 80 km/h (RGC art. 50)." } },
    { es: "Los menores de edad de estatura igual o inferior a 135 centímetros deberán utilizar sistemas de retención infantil homologados debidamente adaptados a...",
      prompt: { ru: "Несовершеннолетние ростом 135 см и ниже должны пользоваться сертифицированными детскими удерживающими системами, подобранными по…", en: "Minors 135 cm tall or shorter must use approved child restraint systems suited to their…" },
      options: [
        { es: "su talla y edad.", ru: "росту и возрасту.", en: "height and age." },
        { es: "su edad y peso.", ru: "возрасту и весу.", en: "age and weight." },
        { es: "su talla y peso.", ru: "росту и весу.", en: "height and weight." }
      ],
      answer: 2,
      explain: { ru: "Детское кресло выбирают по росту и весу ребёнка (RGC, ст. 117).", en: "A child restraint is chosen according to the child's height and weight (RGC art. 117)." } },
    { es: "En un carril reservado para uso exclusivo del transporte público urbano, ¿se puede estacionar?",
      prompt: { ru: "Можно ли стоять на полосе, выделенной только для городского общественного транспорта?", en: "May you park in a lane reserved exclusively for urban public transport?" },
      options: [
        { es: "Sólo fuera del horario de servicio.", ru: "Только вне часов работы.", en: "Only outside service hours." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, se puede parar y estacionar.", ru: "Да, можно и останавливаться, и стоять.", en: "Yes, you may stop and park." }
      ],
      answer: 1,
      explain: { ru: "На полосах для общественного транспорта остановка и стоянка запрещены (RGC, ст. 91–94).", en: "Stopping and parking in public transport lanes are forbidden (RGC arts. 91–94)." } },
    { es: "Para los conductores y pasajeros de motocicletas, ¿tiene importancia el vestuario a utilizar?",
      prompt: { ru: "Важна ли одежда для водителей и пассажиров мотоциклов?", en: "Is clothing important for motorcycle riders and passengers?" },
      options: [
        { es: "No, es indiferente siempre que lleven el casco.", ru: "Нет, неважно, если есть шлем.", en: "No, it does not matter as long as they wear a helmet." },
        { es: "No, porque no aporta nada a la seguridad.", ru: "Нет, для безопасности она ничего не даёт.", en: "No, it adds nothing to safety." },
        { es: "Sí, es fundamental porque el cuerpo está directamente expuesto a las inclemencias del tiempo.", ru: "Да, очень, ведь тело прямо открыто погоде.", en: "Yes, it is essential because the body is directly exposed to the weather." }
      ],
      answer: 2,
      explain: { ru: "Мотоциклист ничем не защищён: экипировка бережёт от непогоды и от травм при падении.", en: "A rider has no shell: the gear protects from weather and from injuries in a fall." } },
    { es: "¿Es posible ahorrar combustible evitando cambios de marcha innecesarios?",
      prompt: { ru: "Можно ли экономить топливо, избегая лишних переключений передач?", en: "Can you save fuel by avoiding unnecessary gear changes?" },
      options: [
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No, en ningún vaso.", ru: "Нет, ни в коем случае.", en: "No, in no case." },
        { es: "Depende de si el vehículo tiene motor diésel o de gasolina.", ru: "Зависит от того, дизель или бензин.", en: "It depends on whether the engine is diesel or petrol." }
      ],
      answer: 0,
      explain: { ru: "Плавная езда без лишних переключений, разгонов и торможений снижает расход топлива.", en: "Smooth driving without needless gear changes, acceleration or braking reduces fuel use." } },
    { es: "¿Qué debe hacer el conductor del vehículo ante las indicaciones que le realiza el agente del vehículo policial con la señal V-1 encendida?",
      prompt: { ru: "Что должен сделать водитель, когда полицейский из машины с включённым маячком V-1 подаёт ему знаки?", en: "What must a driver do when the officer in a police vehicle with its V-1 light on signals to him?" },
      options: [
        { es: "Reducir la marcha.", ru: "Снизить скорость.", en: "Slow down." },
        { es: "Detenerse en el lado derecho, delante del vehículo policial.", ru: "Остановиться справа, впереди полицейской машины.", en: "Stop on the right, in front of the police vehicle." },
        { es: "Detenerse en el lado izquierdo, detrás del vehículo policial.", ru: "Остановиться слева, позади полицейской машины.", en: "Stop on the left, behind the police vehicle." }
      ],
      answer: 1,
      explain: { ru: "По указанию полиции из машины останавливаются справа, впереди полицейского автомобиля (RGC, ст. 143).", en: "When signalled by police from a vehicle, you stop on the right, ahead of the police car (RGC art. 143)." } },
    { es: "En un accidente de tráfico se produce el efecto submarino cuando...",
      prompt: { ru: "При ДТП «эффект подныривания» (efecto submarino) — это когда…", en: "In an accident the 'submarining effect' happens when…" },
      options: [
        { es: "el cuerpo del ocupante del vehículo se desliza por debajo del cinturón de seguridad.", ru: "тело человека выскальзывает под ремнём безопасности.", en: "the occupant's body slides under the seat belt." },
        { es: "el reposacabezas está mal regulado y el cuello sufre un violento movimiento de vaivén.", ru: "подголовник плохо отрегулирован и шею резко бросает вперёд-назад.", en: "the head restraint is badly adjusted and the neck whips back and forth." },
        { es: "el conductor recibe un impacto directo y fuerte del airbag en la cara.", ru: "водитель получает сильный прямой удар подушкой в лицо.", en: "the driver gets a hard direct hit in the face from the airbag." }
      ],
      answer: 0,
      explain: { ru: "Эффект подныривания — тело уходит под поясную часть ремня; поэтому ремень должен лежать низко на тазовых костях.", en: "Submarining is when the body slides under the lap belt; that is why the belt must sit low on the hip bones." } },
    { es: "En condiciones meteorológicas especialmente desfavorables, como en caso de fuerte granizada, ¿qué precauciones, entre otras, debe tomar?",
      prompt: { ru: "В особенно плохую погоду, например при сильном граде, какие меры, среди прочих, нужно принять?", en: "In especially bad weather, such as a heavy hailstorm, what precautions should you take, among others?" },
      options: [
        { es: "Disminuir la velocidad, evitando pisar el freno, y aumentar la distancia de seguridad.", ru: "Снизить скорость, избегая нажатия на тормоз, и увеличить дистанцию.", en: "Slow down, avoiding braking, and increase the following distance." },
        { es: "Acercarse al vehículo de delante y encender el dispositivo de preseñalización de peligro.", ru: "Подъехать ближе к переднему и включить знак аварийной остановки.", en: "Get closer to the vehicle ahead and switch on the hazard warning device." },
        { es: "Circular con cambios frecuentes de dirección para evitar que se produzca “aquaplaning”.", ru: "Часто менять направление, чтобы не было аквапланирования.", en: "Change direction often to avoid aquaplaning." }
      ],
      answer: 0,
      explain: { ru: "Град — скользкая дорога и плохая видимость: снижайте скорость плавно, без резких торможений, и держите большую дистанцию.", en: "Hail means a slippery road and poor visibility: slow down smoothly without harsh braking and keep a bigger gap." } },
    { es: "¿Qué indica el panel situado bajo la señal?",
      prompt: { ru: "Что означает табличка под знаком?", en: "What does the panel under the sign indicate?" },
      options: [
        { es: "La distancia al final de un tramo con curvas peligrosas.", ru: "Расстояние до конца участка с опасными поворотами.", en: "The distance to the end of a stretch of dangerous bends." },
        { es: "La longitud de un tramo con curvas peligrosas.", ru: "Длину участка с опасными поворотами.", en: "The length of a stretch of dangerous bends." },
        { es: "La distancia al inicio de un tramo con curvas peligrosas.", ru: "Расстояние до начала участка с опасными поворотами.", en: "The distance to the start of a stretch of dangerous bends." }
      ],
      answer: 2,
      explain: { ru: "Табличка с одной цифрой в метрах под предупреждающим знаком показывает расстояние до начала опасности.", en: "A panel with a distance in metres under a warning sign shows how far away the hazard starts." } },
    { es: "Si conducimos de noche para evitar los atascos debemos tener en cuenta que...",
      prompt: { ru: "Если ехать ночью, чтобы избежать пробок, нужно учитывать, что…", en: "If we drive at night to avoid traffic jams, we must bear in mind that…" },
      options: [
        { es: "el sueño o la somnolencia al volante aparecen con mayor facilidad.", ru: "сон и сонливость за рулём появляются легче.", en: "sleep and drowsiness at the wheel set in more easily." },
        { es: "no es necesario descansar en trayectos largos, ya que durante la noche no aparece la fatiga.", ru: "отдыхать в долгой поездке не нужно, ночью нет усталости.", en: "there is no need to rest on long trips, since fatigue does not appear at night." },
        { es: "la oscuridad impide la aparición del sueño, pero favorece la aparición de la fatiga.", ru: "темнота мешает сну, но способствует усталости.", en: "darkness prevents sleep but encourages fatigue." }
      ],
      answer: 0,
      explain: { ru: "Ночью организм настроен на сон, поэтому сонливость за рулём наступает быстрее.", en: "At night the body is set to sleep, so drowsiness at the wheel comes on sooner." } },
    { es: "Siempre que sea posible, ¿cómo debe inmovilizar un vehículo que se ha visto implicado en un accidente?",
      prompt: { ru: "Как по возможности обездвижить машину, попавшую в ДТП?", en: "Whenever possible, how should you immobilise a vehicle involved in an accident?" },
      options: [
        { es: "Con unos calzos o con cualquier elemento que sirva como tal.", ru: "Подложить противооткатные упоры или что-то вместо них.", en: "With wheel chocks or anything that can serve as one." },
        { es: "Cortando el contacto y echando el freno de mano.", ru: "Выключить зажигание и поставить на стояночный тормоз.", en: "By switching off the ignition and applying the handbrake." },
        { es: "Desconectando los bornes de la batería.", ru: "Отсоединив клеммы аккумулятора.", en: "By disconnecting the battery terminals." }
      ],
      answer: 1,
      explain: { ru: "После ДТП выключают зажигание (меньше риск пожара) и затягивают стояночный тормоз.", en: "After an accident switch off the ignition (less fire risk) and apply the handbrake." } },
    { es: "Un conductor que señaliza un cambio de carril, ¿tiene preferencia sobre los conductores de los vehículos que circulan por el carril al que se pretende desplazar?",
      prompt: { ru: "Водитель, показывающий смену полосы, имеет ли приоритет перед теми, кто едет по полосе, куда он хочет перейти?", en: "Does a driver who signals a lane change have priority over the vehicles in the lane he wants to move into?" },
      options: [
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sólo si va a adelantar a un vehículo de grandes dimensiones.", ru: "Только если он обгоняет крупную машину.", en: "Only if he is going to overtake a large vehicle." }
      ],
      answer: 1,
      explain: { ru: "Указатель поворота лишь предупреждает: при смене полосы уступают тем, кто уже по ней едет (RGC, ст. 74).", en: "The indicator only warns: when changing lanes you give way to those already in it (RGC art. 74)." } },
    { es: "¿Qué debe hacer el conductor de un vehículo que, por motivos de emergencia, quede inmovilizado dentro de un paso inferior?",
      prompt: { ru: "Что должен сделать водитель, если по экстренной причине его машина остановилась в подземном проезде (туннеле)?", en: "What must a driver do if, because of an emergency, his vehicle is stuck inside an underpass?" },
      options: [
        { es: "Permanecer en el interior del vehículo.", ru: "Оставаться в машине.", en: "Stay inside the vehicle." },
        { es: "Inmovilizar el vehículo lo más cerca posible del borde izquierdo de la calzada.", ru: "Поставить машину как можно ближе к левому краю.", en: "Place the vehicle as close as possible to the left edge." },
        { es: "Solicitar auxilio a través del poste de socorro más próximo, si existiese.", ru: "Вызвать помощь с ближайшего аварийного телефона, если он есть.", en: "Call for help from the nearest SOS post, if there is one." }
      ],
      answer: 2,
      explain: { ru: "В туннеле при вынужденной остановке выключают двигатель, включают аварийку и вызывают помощь с поста SOS (RGC, ст. 51).", en: "When forced to stop in a tunnel switch off the engine, turn on the hazard lights and call for help from the SOS post (RGC art. 51)." } },
    { es: "Conducir durante mucho tiempo a una velocidad elevada...",
      prompt: { ru: "Долгая езда на высокой скорости…", en: "Driving for a long time at high speed…" },
      options: [
        { es: "disminuye la aparición de la fatiga pero aumenta la agresividad.", ru: "задерживает усталость, но повышает агрессивность.", en: "delays fatigue but increases aggressiveness." },
        { es: "acelera la aparición de la fatiga y, por tanto, disminuye la agresividad.", ru: "ускоряет усталость и поэтому снижает агрессивность.", en: "speeds up fatigue and therefore lowers aggressiveness." },
        { es: "acelera la aparición de la fatiga y hace que aumente la agresividad.", ru: "ускоряет усталость и повышает агрессивность.", en: "speeds up fatigue and increases aggressiveness." }
      ],
      answer: 2,
      explain: { ru: "Высокая скорость требует большего напряжения: усталость приходит раньше, а водитель становится агрессивнее.", en: "High speed demands more effort: fatigue comes sooner and the driver becomes more aggressive." } },
    { es: "Factores individuales como la edad, la fatiga o el estado físico del conductor, ¿pueden hacer que los efectos secundarios de los medicamentos sean diferentes en cada persona?",
      prompt: { ru: "Могут ли возраст, усталость или физическое состояние водителя менять побочные эффекты лекарств у разных людей?", en: "Can individual factors such as age, fatigue or physical condition make medicines' side effects differ from person to person?" },
      options: [
        { es: "No, los efectos secundarios son los mismos para todas las personas.", ru: "Нет, побочные эффекты у всех одинаковые.", en: "No, side effects are the same for everyone." },
        { es: "Sí, los efectos secundarios pueden variar en cada persona.", ru: "Да, они могут отличаться у каждого.", en: "Yes, they may vary from person to person." },
        { es: "Sólo si durante el tratamiento no se siguen los consejos del médico.", ru: "Только если не следовать советам врача.", en: "Only if the doctor's advice is not followed." }
      ],
      answer: 1,
      explain: { ru: "Один и тот же препарат по-разному действует на разных людей; читайте инструкцию и спрашивайте врача.", en: "The same medicine acts differently on different people; read the leaflet and ask your doctor." } },
    { es: "Si se lleva instalado un navegador GPS hay que tener en cuenta que...",
      prompt: { ru: "Если в машине установлен GPS-навигатор, нужно учитывать, что…", en: "If a GPS navigator is fitted, bear in mind that…" },
      options: [
        { es: "mientras se conduce no es conveniente apartar la vista del navegador.", ru: "во время езды не стоит отрывать взгляд от навигатора.", en: "while driving you should not take your eyes off the GPS." },
        { es: "las indicaciones del navegador prevalecen sobre la señalización de la vía.", ru: "указания навигатора важнее дорожных знаков.", en: "the GPS directions prevail over road signs." },
        { es: "el criterio del conductor debe prevalecer sobre las indicaciones del navegador.", ru: "решение водителя важнее указаний навигатора.", en: "the driver's judgement must prevail over the GPS directions." }
      ],
      answer: 2,
      explain: { ru: "Навигатор — лишь помощник; знаки и решение водителя важнее его указаний.", en: "The GPS is only an aid; road signs and the driver's judgement come first." } },
    { es: "Se debe desactivar el airbag frontal cuando en el asiento correspondiente al copiloto...",
      prompt: { ru: "Фронтальную подушку безопасности нужно отключить, когда на переднем пассажирском месте…", en: "The front airbag must be deactivated when, in the front passenger seat…" },
      options: [
        { es: "viaje una mujer embarazada.", ru: "едет беременная женщина.", en: "a pregnant woman is travelling." },
        { es: "se instale un dispositivo de retención infantil orientado hacia atrás.", ru: "установлено детское кресло против хода движения.", en: "a rear-facing child seat is fitted." },
        { es: "se instale un dispositivo de retención infantil orientado hacia delante.", ru: "установлено детское кресло по ходу движения.", en: "a forward-facing child seat is fitted." }
      ],
      answer: 1,
      explain: { ru: "Раскрывшаяся подушка бьёт в спинку кресла, установленного против хода, — это смертельно опасно для ребёнка.", en: "A deploying airbag strikes the back of a rear-facing seat, which can kill the child." } },
    { es: "En una autopista que transcurre por zona urbana, ¿a qué velocidad máxima puede circular un turismo si no existe señalización?",
      prompt: { ru: "На autopista, проходящей по городской территории, с какой максимальной скоростью может ехать легковой автомобиль, если знаков нет?", en: "On an autopista running through an urban area, what is the maximum speed for a car if there are no signs?" },
      options: [
        { es: "A 80 km/h.", ru: "80 км/ч.", en: "80 km/h." },
        { es: "A 120 km/h.", ru: "120 км/ч.", en: "120 km/h." },
        { es: "A 100 km/h.", ru: "100 км/ч.", en: "100 km/h." }
      ],
      answer: 0,
      explain: { ru: "Autopista и autovía внутри населённого пункта — 80 км/ч, если знаки не говорят иное (RGC, ст. 50).", en: "Autopistas and autovías inside built-up areas: 80 km/h unless signs say otherwise (RGC art. 50)." } },
    { es: "¿Puede rebasar la velocidad máxima indicada en la señal?",
      prompt: { ru: "Можно ли превысить максимальную скорость, указанную на знаке?", en: "May you exceed the maximum speed shown on the sign?" },
      options: [
        { es: "Sí, en 20 km/h para adelantar.", ru: "Да, на 20 км/ч для обгона.", en: "Yes, by 20 km/h to overtake." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, mientras lo permitan las circunstancias.", ru: "Да, если позволяют обстоятельства.", en: "Yes, as long as conditions allow." }
      ],
      answer: 1,
      explain: { ru: "Ограничение на знаке превышать нельзя; разрешение +20 км/ч при обгоне отменено в 2022 году.", en: "The limit on a sign may not be exceeded; the old +20 km/h overtaking allowance was abolished in 2022." },
      sign: "R-301" },
    { es: "Si debido a la lluvia intensa, en una vía interurbana no se distingue un vehículo de color negro a 50 metros de distancia, ¿es posible circular con el alumbrado de largo alcance encendido?",
      prompt: { ru: "Из-за сильного дождя на загородной дороге чёрную машину не видно с 50 метров. Можно ли ехать с дальним светом?", en: "Because of heavy rain on an interurban road you cannot make out a black car at 50 metres. May you drive with main beam?" },
      options: [
        { es: "No, está prohibido.", ru: "Нет, запрещено.", en: "No, it is forbidden." },
        { es: "Sí, porque la vía está insuficientemente iluminada.", ru: "Да, потому что дорога недостаточно освещена.", en: "Yes, because the road is insufficiently lit." },
        { es: "Sólo se puede encender la luz de cruce y la antiniebla delantera.", ru: "Можно только ближний и передний противотуманный.", en: "Only dipped beam and the front fog light are allowed." }
      ],
      answer: 1,
      explain: { ru: "Дорога считается недостаточно освещённой, если чёрную машину не видно с 50 м; тогда дальний свет разрешён, если никого не слепит.", en: "A road counts as insufficiently lit when a black car cannot be seen at 50 m; then main beam is allowed if it dazzles no one." } },
    { es: "La parte externa de uno de los neumáticos de su vehículo presenta una deformación en forma de bulto, ¿es recomendable sustituir el neumático lo antes posible?",
      prompt: { ru: "На боковине одной из шин появилась выпуклость (грыжа). Стоит ли поменять шину как можно скорее?", en: "The outer side of one of your tyres has a bulge. Should you replace the tyre as soon as possible?" },
      options: [
        { es: "Sí, porque aumenta la posibilidad de sufrir un reventón.", ru: "Да, потому что растёт риск взрыва шины.", en: "Yes, because the risk of a blow-out increases." },
        { es: "No. Se puede seguir circulando con seguridad ya que no supone un riesgo importante.", ru: "Нет, можно спокойно ездить, большого риска нет.", en: "No, you can keep driving safely; it is not a major risk." },
        { es: "No; no es necesario sustituirlo ya que siempre se puede reparar en un taller especializado.", ru: "Нет, её всегда можно отремонтировать в мастерской.", en: "No, it can always be repaired in a specialised workshop." }
      ],
      answer: 0,
      explain: { ru: "Грыжа означает повреждённый корд; такая шина может лопнуть, её нужно заменить.", en: "A bulge means the cord is damaged; the tyre may burst and must be replaced." } },
    { es: "El agente balancea una luz amarilla; ¿qué indica?",
      prompt: { ru: "Полицейский покачивает жёлтым фонарём. Что это означает?", en: "An officer swings a yellow light. What does it mean?" },
      options: [
        { es: "Precaución al circular.", ru: "Ехать осторожно.", en: "Drive with care." },
        { es: "El carril por el que se debe circular.", ru: "Полосу, по которой нужно ехать.", en: "The lane you must use." },
        { es: "Obliga a detenerse a los conductores hacia los que dirige la luz.", ru: "Обязывает остановиться тех, на кого направлен свет.", en: "Drivers it is aimed at must stop." }
      ],
      answer: 2,
      explain: { ru: "Покачивание красным или жёлтым фонарём означает «стоп» для тех, на кого направлен свет (RGC, ст. 143).", en: "Swinging a red or yellow light means stop for those it is aimed at (RGC art. 143)." } },
    { es: "Los carriles reversibles están delimitados por marcas longitudinales…",
      prompt: { ru: "Реверсивные полосы ограничены продольной разметкой…", en: "Reversible lanes are bounded by longitudinal markings that are…" },
      options: [
        { es: "discontinuas con una separación sensiblemente más corta.", ru: "прерывистой с заметно более короткими промежутками.", en: "broken, with noticeably shorter gaps." },
        { es: "discontinuas simples a ambos lados.", ru: "одинарной прерывистой с обеих сторон.", en: "single broken lines on both sides." },
        { es: "dobles discontinuas a ambos lados.", ru: "двойной прерывистой с обеих сторон.", en: "double broken lines on both sides." }
      ],
      answer: 2,
      explain: { ru: "Реверсивная полоса обозначается двойной прерывистой линией с каждой стороны.", en: "A reversible lane is marked by a double broken line on each side." } },
    { es: "Conforme a los datos de accidentalidad, en los períodos de vacaciones y los fines de semana...",
      prompt: { ru: "По статистике аварийности, в отпускные периоды и в выходные…", en: "According to accident data, during holiday periods and at weekends…" },
      options: [
        { es: "no varía de forma importante el número de accidentes con víctimas mortales.", ru: "число ДТП с погибшими существенно не меняется.", en: "the number of fatal accidents does not change much." },
        { es: "aumenta el número de accidentes con víctimas mortales.", ru: "число ДТП с погибшими растёт.", en: "the number of fatal accidents rises." },
        { es: "disminuye el número de accidentes con víctimas mortales.", ru: "число ДТП с погибшими падает.", en: "the number of fatal accidents falls." }
      ],
      answer: 1,
      explain: { ru: "В отпуска и выходные больше дальних поездок, усталости и алкоголя, и смертельных ДТП больше.", en: "Holidays and weekends bring more long trips, fatigue and alcohol, and more fatal crashes." } },
    { es: "Si su turismo ha pasado favorablemente la primera ITV, ¿cuándo tiene que pasar la próxima inspección?",
      prompt: { ru: "Ваш легковой автомобиль успешно прошёл первый техосмотр (ITV). Когда следующий?", en: "Your car has passed its first ITV (roadworthiness test). When is the next one due?" },
      options: [
        { es: "Dentro de 2 años.", ru: "Через 2 года.", en: "In 2 years." },
        { es: "Dentro de 4 años.", ru: "Через 4 года.", en: "In 4 years." },
        { es: "Al año siguiente.", ru: "Через год.", en: "Next year." }
      ],
      answer: 0,
      explain: { ru: "Легковой: первый ITV в 4 года, затем каждые 2 года до 10 лет, потом ежегодно.", en: "Cars: first ITV at 4 years, then every 2 years until 10, then every year." } },
    { es: "En una calzada de un solo sentido de circulación, ¿dónde debe situarse para cambiar de dirección a la izquierda?",
      prompt: { ru: "На проезжей части с односторонним движением где нужно встать, чтобы повернуть налево?", en: "On a one-way carriageway, where must you position yourself to turn left?" },
      options: [
        { es: "Junto al borde izquierdo de la calzada.", ru: "У левого края проезжей части.", en: "Next to the left edge of the carriageway." },
        { es: "Junto al borde derecho de la calzada.", ru: "У правого края проезжей части.", en: "Next to the right edge of the carriageway." },
        { es: "En una calzada de un solo sentido no se puede cambiar de dirección.", ru: "На односторонней дороге поворачивать нельзя.", en: "You cannot turn on a one-way carriageway." }
      ],
      answer: 0,
      explain: { ru: "На односторонней дороге для левого поворота занимают крайнее левое положение (RGC, ст. 75).", en: "On a one-way road you move to the far left to turn left (RGC art. 75)." } },
    { es: "¿Está permitido realizar una parada en una autovía o autopista?",
      prompt: { ru: "Можно ли останавливаться на autovía или autopista?", en: "Is stopping allowed on an autovía or autopista?" },
      options: [
        { es: "Sí, en la mediana o en el arcén, indistintamente.", ru: "Да, на разделительной полосе или на обочине — всё равно.", en: "Yes, on the central reservation or the shoulder, either." },
        { es: "Sólo si el arcén es transitable y su anchura es superior a 1,5 metros.", ru: "Только если обочина проезжая и шире 1,5 м.", en: "Only if the shoulder is usable and wider than 1.5 m." },
        { es: "No, excepto en las zonas habilitadas.", ru: "Нет, кроме специально отведённых мест.", en: "No, except in designated areas." }
      ],
      answer: 2,
      explain: { ru: "На autopista и autovía останавливаться можно только в отведённых местах; обочина — лишь для экстренных случаев.", en: "On autopistas and autovías you may stop only in designated areas; the shoulder is for emergencies only." } },
    { es: "¿Debe entrar en una intersección en una situación en la que el tráfico esté tan saturado que, al detenerse, posiblemente obstaculice la circulación transversal?",
      prompt: { ru: "Нужно ли въезжать на перекрёсток, если движение настолько плотное, что, остановившись, вы, вероятно, перекроете поперечное движение?", en: "Should you enter a junction when traffic is so heavy that if you stop you will probably block crossing traffic?" },
      options: [
        { es: "Sólo si conduce un vehículo de servicio público, como un taxi.", ru: "Только на машине общественного пользования, например такси.", en: "Only if driving a public service vehicle such as a taxi." },
        { es: "Sí, siempre que tenga prioridad de paso.", ru: "Да, если у вас приоритет.", en: "Yes, as long as you have priority." },
        { es: "No, aunque tenga prioridad de paso.", ru: "Нет, даже если у вас приоритет.", en: "No, even if you have priority." }
      ],
      answer: 2,
      explain: { ru: "Даже имея приоритет, нельзя въезжать на перекрёсток, если рискуете там застрять (RGC, ст. 59).", en: "Even with priority you must not enter a junction if you might get stuck there (RGC art. 59)." } },
    { es: "Cuando un conductor no supere la tasa máxima de alcohol permitida, el agente de tráfico, ¿puede realizarle una segunda prueba?",
      prompt: { ru: "Если водитель не превышает допустимый уровень алкоголя, может ли полицейский провести второй тест?", en: "If a driver is under the alcohol limit, can the officer give him a second test?" },
      options: [
        { es: "No, en ningún caso.", ru: "Нет, ни в коем случае.", en: "No, never." },
        { es: "Sí, si muestra signos evidentes de encontrarse bajo los efectos del alcohol.", ru: "Да, если у него явные признаки опьянения.", en: "Yes, if he shows clear signs of being under the influence." },
        { es: "Sólo si está implicado en un accidente.", ru: "Только если он замешан в ДТП.", en: "Only if he is involved in an accident." }
      ],
      answer: 1,
      explain: { ru: "При явных признаках опьянения второй тест возможен и при результате ниже нормы (RGC, ст. 23).", en: "With clear signs of intoxication a second test is possible even after a result under the limit (RGC art. 23)." } },
    { es: "¿Qué debe hacer si empieza a llover con intensidad mientras conduce una motocicleta?",
      prompt: { ru: "Что делать, если на мотоцикле вас застал сильный дождь?", en: "What should you do if heavy rain starts while you are riding a motorcycle?" },
      options: [
        { es: "Moderar la velocidad, e incluso detenerse si fuera necesario.", ru: "Снизить скорость, а при необходимости остановиться.", en: "Slow down and even stop if necessary." },
        { es: "Circular pegado a los vehículos pesados para protegerse de la lluvia.", ru: "Ехать вплотную за тяжёлыми машинами, чтобы укрыться от дождя.", en: "Ride close behind heavy vehicles for shelter from the rain." },
        { es: "Aumentar la velocidad para llegar antes al destino.", ru: "Прибавить скорость, чтобы скорее доехать.", en: "Speed up to arrive sooner." }
      ],
      answer: 0,
      explain: { ru: "На мокрой дороге сцепление хуже, а видимость ниже: снижают скорость, а при необходимости останавливаются в безопасном месте.", en: "On a wet road grip and visibility are lower: slow down, and stop in a safe place if needed." } },
    { es: "Entre los efectos negativos de la velocidad se encuentra el efecto túnel, en el que el conductor...",
      prompt: { ru: "Среди вредных эффектов скорости — «туннельный эффект», при котором водитель…", en: "Among the harmful effects of speed is the tunnel effect, in which the driver…" },
      options: [
        { es: "sólo percibe el centro de la calzada y deja de ver los laterales.", ru: "видит только центр дороги и перестаёт видеть края.", en: "sees only the centre of the road and stops seeing the sides." },
        { es: "tiene la falsa sensación de que circula a velocidad reducida.", ru: "ошибочно чувствует, что едет медленно.", en: "has the false feeling of driving slowly." },
        { es: "percibe mejor los laterales de la vía que el centro de la calzada.", ru: "лучше видит края дороги, чем центр.", en: "sees the sides better than the centre." }
      ],
      answer: 0,
      explain: { ru: "Чем выше скорость, тем уже поле зрения: водитель видит только центр и пропускает то, что сбоку.", en: "The higher the speed, the narrower the field of vision: the driver sees only the centre and misses the sides." } },
    { es: "¿Cómo debe colocar el navegador GPS portátil en el vehículo?",
      prompt: { ru: "Куда нужно ставить переносной GPS-навигатор в машине?", en: "Where should you fit a portable GPS navigator in the vehicle?" },
      options: [
        { es: "Debajo del volante, tan cerca del suelo como sea posible.", ru: "Под рулём, как можно ближе к полу.", en: "Under the steering wheel, as close to the floor as possible." },
        { es: "Justo detrás del volante, a la altura de los ojos del conductor.", ru: "Прямо за рулём, на уровне глаз водителя.", en: "Just behind the wheel, at the driver's eye level." },
        { es: "Donde no entorpezca ni la visión ni el despliegue del airbag", ru: "Там, где он не мешает обзору и раскрытию подушки безопасности.", en: "Where it obstructs neither vision nor the airbag deployment." }
      ],
      answer: 2,
      explain: { ru: "Навигатор не должен закрывать обзор и мешать подушке безопасности.", en: "The GPS must not block the view or get in the way of the airbag." } },
    { es: "¿Cuál es una de las principales causas de los accidentes de las personas mayores?",
      prompt: { ru: "Какова одна из главных причин аварий у пожилых людей?", en: "What is one of the main causes of accidents involving older people?" },
      options: [
        { es: "El deterioro de las capacidades psicomotoras.", ru: "Ухудшение психомоторных способностей.", en: "Deterioration of psychomotor abilities." },
        { es: "El aumento de la visión periférica.", ru: "Улучшение периферического зрения.", en: "Improved peripheral vision." },
        { es: "Una mejor percepción y análisis de los riesgos.", ru: "Лучшее восприятие и анализ рисков.", en: "Better perception and analysis of risks." }
      ],
      answer: 0,
      explain: { ru: "С возрастом ухудшаются зрение, слух и реакция, что повышает риск.", en: "With age sight, hearing and reactions decline, raising the risk." } },
    { es: "Todo conductor implicado en un accidente de tráfico, ¿está obligado a detenerse para esclarecer los hechos?",
      prompt: { ru: "Должен ли каждый водитель, попавший в ДТП, остановиться, чтобы помочь выяснить обстоятельства?", en: "Must every driver involved in an accident stop to help clarify what happened?" },
      options: [
        { es: "Sólo si es culpable del accidente.", ru: "Только если он виноват.", en: "Only if he is to blame." },
        { es: "Sí, pero de forma que no cree un nuevo peligro para la circulación.", ru: "Да, но так, чтобы не создать новой опасности.", en: "Yes, but without creating a new danger to traffic." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 1,
      explain: { ru: "Все участники ДТП обязаны остановиться безопасно и помочь выяснить обстоятельства (RGC, ст. 129).", en: "Everyone involved must stop safely and help clarify the facts (RGC art. 129)." } },
    { es: "Si circula con la presión de inflado de los neumáticos descompensada, ¿aumenta el riesgo de perder el control del vehículo?",
      prompt: { ru: "Если давление в шинах разное, растёт ли риск потерять управление?", en: "If tyre pressures are unbalanced, does the risk of losing control increase?" },
      options: [
        { es: "Sí, ya que la frenada es irregular y se reduce la estabilidad del vehículo.", ru: "Да, торможение неравномерное, а устойчивость падает.", en: "Yes, braking becomes uneven and stability drops." },
        { es: "No, sobre todo si está descompensada por eje mejora la adherencia, incluso, cuando la calzada está resbaladiza.", ru: "Нет, особенно разница по оси улучшает сцепление даже на скользкой дороге.", en: "No; an imbalance per axle actually improves grip, even on slippery roads." },
        { es: "No, porque aumenta el área de contacto del neumático con la calzada y facilita el rodaje.", ru: "Нет, площадь контакта растёт и машине легче катиться.", en: "No, the contact patch grows and the car rolls more easily." }
      ],
      answer: 0,
      explain: { ru: "Разное давление на одной оси уводит машину в сторону и делает торможение неравномерным.", en: "Different pressures on one axle make the car pull to one side and brake unevenly." } },
    { es: "Si lleva a un pasajero en una motocicleta, al frenar...",
      prompt: { ru: "Если на мотоцикле пассажир, то при торможении…", en: "With a passenger on a motorcycle, when braking…" },
      options: [
        { es: "es más difícil que se bloquee la rueda trasera.", ru: "заднее колесо блокируется труднее.", en: "the rear wheel is less likely to lock." },
        { es: "el peso se desplaza hacia la parte trasera de la motocicleta.", ru: "вес смещается к задней части мотоцикла.", en: "the weight shifts to the back of the motorcycle." },
        { es: "es conveniente no soltar el acelerador y accionar sólo el freno trasero.", ru: "лучше не отпускать газ и тормозить только задним тормозом.", en: "it is best not to release the throttle and use only the rear brake." }
      ],
      answer: 0,
      explain: { ru: "Пассажир добавляет вес на заднее колесо, поэтому оно блокируется труднее; но тормозной путь растёт.", en: "The passenger adds weight on the rear wheel so it locks less easily; braking distance, however, increases." } },
    { es: "Si, debido a la lluvia, el pavimento está deslizante, ¿qué precauciones se deben tomar?",
      prompt: { ru: "Если из-за дождя покрытие скользкое, какие меры нужно принять?", en: "If the road is slippery because of rain, what precautions should you take?" },
      options: [
        { es: "Moderar la velocidad y, si fuera preciso, detener el vehículo.", ru: "Снизить скорость, а при необходимости остановиться.", en: "Slow down and, if necessary, stop the vehicle." },
        { es: "Mantener la velocidad y estar atento al cumplimiento de la señalización vertical.", ru: "Держать скорость и следить за знаками.", en: "Keep your speed and watch the vertical signs." },
        { es: "Ninguna, ya que las circunstancias de la vía son idénticas para todos los usuarios.", ru: "Никаких, условия одинаковы для всех.", en: "None, as conditions are the same for everyone." }
      ],
      answer: 0,
      explain: { ru: "Скорость подбирают по состоянию дороги; при плохом сцеплении её снижают (RGC, ст. 45).", en: "Speed must suit the road; with poor grip you slow down (RGC art. 45)." } },
    { es: "¿Cuál de los tres factores de riesgo es el que está menos implicado entre las causas de los accidentes de tráfico?",
      prompt: { ru: "Какой из трёх факторов риска меньше всего связан с причинами ДТП?", en: "Which of the three risk factors is least involved in causing road accidents?" },
      options: [
        { es: "El factor vía y su entorno.", ru: "Дорога и её окружение.", en: "The road and its surroundings." },
        { es: "El factor humano.", ru: "Человеческий фактор.", en: "The human factor." },
        { es: "El factor vehículo.", ru: "Транспортное средство.", en: "The vehicle." }
      ],
      answer: 2,
      explain: { ru: "Главная причина ДТП — человек; техническое состояние машины реже всего бывает причиной.", en: "The human factor causes most accidents; the vehicle is the least frequent cause." } },
    { es: "¿Está permitido circular con un vehículo cuyas placas de matrícula presentan obstáculos que impiden o dificultan su lectura e identificación?",
      prompt: { ru: "Можно ли ехать на машине, номерные знаки которой закрыты так, что их трудно или невозможно прочитать?", en: "May you drive a vehicle whose number plates are obstructed so they are hard or impossible to read?" },
      options: [
        { es: "No; el conductor debe verificar que las placas de matrícula se pueden leer correctamente.", ru: "Нет: водитель должен убедиться, что номера читаются.", en: "No: the driver must check the plates can be read properly." },
        { es: "Sí, siempre que la placa de matrícula delantera se pueda leer correctamente.", ru: "Да, если передний номер читается.", en: "Yes, as long as the front plate is readable." },
        { es: "Sí, siempre que el vehículo solo circule por vías urbanas y travesías.", ru: "Да, если ездить только в городе и по travesías.", en: "Yes, if the vehicle only uses urban roads and travesías." }
      ],
      answer: 0,
      explain: { ru: "Номера должны быть всегда читаемы; проверять это обязан водитель.", en: "Plates must always be readable; checking this is the driver's duty." } },
    { es: "Respecto al uso del cinturón de seguridad, como norma general, el ocupante de un turismo distinto del conductor está obligado a...",
      prompt: { ru: "Что касается ремня безопасности, как правило, пассажир легкового автомобиля обязан…", en: "As a rule, regarding the seat belt, a car occupant other than the driver must…" },
      options: [
        { es: "llevarlo puesto y sin abrochar, excepto si viaja en la plaza delantera.", ru: "надеть его, но не застёгивать, если не сидит спереди.", en: "wear it unbuckled, unless in the front seat." },
        { es: "llevarlo puesto y abrochado solo en vías interurbanas.", ru: "надеть и застегнуть только на загородных дорогах.", en: "wear it buckled only on interurban roads." },
        { es: "llevarlo puesto y correctamente abrochado.", ru: "надеть и правильно застегнуть.", en: "wear it properly fastened." }
      ],
      answer: 2,
      explain: { ru: "Ремень обязателен для всех мест и на всех дорогах (RGC, ст. 117).", en: "Seat belts are compulsory in every seat and on every road (RGC art. 117)." } },
    { es: "En vías interurbanas con tres carriles para el mismo sentido, ¿le está permitido circular por el carril izquierdo a un turismo con remolque?",
      prompt: { ru: "На загородной дороге с тремя полосами в одном направлении может ли легковой автомобиль с прицепом ехать по левой полосе?", en: "On an interurban road with three lanes in the same direction, may a car with a trailer use the left lane?" },
      options: [
        { es: "Sí, cuando la longitud del conjunto no supere los 7 metros.", ru: "Да, если длина состава не превышает 7 метров.", en: "Yes, if the combination is no longer than 7 metres." },
        { es: "Sí, pero solo para adelantar a otros vehículos.", ru: "Да, но только для обгона.", en: "Yes, but only to overtake." },
        { es: "No, en ningún caso.", ru: "Нет, ни в коем случае.", en: "No, never." }
      ],
      answer: 0,
      explain: { ru: "Запрет на левую полосу касается грузовиков и составов длиннее 7 м (RGC, ст. 31).", en: "The ban on the left lane applies to lorries and combinations over 7 m long (RGC art. 31)." } },
    { es: "Cuando se adelante a vehículos de tracción animal, fuera de poblado, la separación lateral...",
      prompt: { ru: "При обгоне гужевых повозок вне населённого пункта боковой интервал…", en: "When overtaking horse-drawn vehicles outside towns, the lateral gap…" },
      options: [
        { es: "no debe ser inferior a 1,5 metros.", ru: "должен быть не меньше 1,5 метра.", en: "must be no less than 1.5 metres." },
        { es: "debe ser inferior a 1,5 metros, en todos los casos.", ru: "должен быть меньше 1,5 метра во всех случаях.", en: "must be less than 1.5 metres in all cases." },
        { es: "debe ser siempre proporcional a la anchura y características de la vía.", ru: "должен быть пропорционален ширине и особенностям дороги.", en: "must always be proportional to the width and features of the road." }
      ],
      answer: 0,
      explain: { ru: "При обгоне велосипедов, гужевых повозок, пешеходов и животных вне населённого пункта — не менее 1,5 м (RGC, ст. 85).", en: "When overtaking cyclists, animal-drawn vehicles, pedestrians or animals outside towns keep at least 1.5 m (RGC art. 85)." } },
    { es: "¿Qué alumbrado deberá dejar encendido, como norma general, el conductor de un vehículo inmovilizado entre la puesta y la salida del sol en el arcén de una travesía insuficientemente iluminada?",
      prompt: { ru: "Какие огни, как правило, должны гореть у машины, стоящей от заката до рассвета на обочине плохо освещённой travesía?", en: "Which lights should, as a rule, be left on in a vehicle stationary between sunset and sunrise on the shoulder of a poorly lit travesía?" },
      options: [
        { es: "Ninguno.", ru: "Никакие.", en: "None." },
        { es: "Las luces de emergencia.", ru: "Аварийная сигнализация.", en: "The hazard lights." },
        { es: "Las luces de posición.", ru: "Габаритные огни.", en: "The side lights." }
      ],
      answer: 2,
      explain: { ru: "Стоящая ночью на плохо освещённом участке машина обозначается габаритными (или стояночными) огнями.", en: "A vehicle stationary at night on a poorly lit stretch shows its side (or parking) lights." } },
    { es: "¿De qué peligro advierte esta señal?",
      prompt: { ru: "О какой опасности предупреждает этот знак?", en: "What danger does this sign warn of?" },
      options: [
        { es: "Proximidad de un escalón lateral o desnivel a lo largo de un tramo de vía.", ru: "Боковой уступ или перепад вдоль участка дороги.", en: "A side step or drop along a stretch of road." },
        { es: "Proximidad de pavimento deslizante por hielo o nieve.", ru: "Скользкое покрытие из-за льда или снега.", en: "A surface slippery with ice or snow." },
        { es: "Proximidad de una zona de la calzada cuyo pavimento puede resultar muy deslizante.", ru: "Участок, где покрытие может быть очень скользким.", en: "A stretch where the surface may be very slippery." }
      ],
      answer: 2,
      explain: { ru: "Знак P-19 — скользкое покрытие; для льда и снега есть отдельный знак P-34.", en: "Sign P-19 means slippery road; ice and snow have their own sign, P-34." },
      sign: "P-19" },
    { es: "Esta señal, ¿prohíbe proseguir la marcha si no dispone de cadenas para nieve?",
      prompt: { ru: "Запрещает ли этот знак ехать дальше без цепей противоскольжения?", en: "Does this sign forbid going on without snow chains?" },
      options: [
        { es: "Sí, en cualquier caso.", ru: "Да, в любом случае.", en: "Yes, in any case." },
        { es: "No, ya que esta señal solo recomienda la utilización de cadenas.", ru: "Нет, он только рекомендует цепи.", en: "No, it only recommends chains." },
        { es: "Sí, a no ser que disponga de otros dispositivos autorizados, igual de eficaces.", ru: "Да, если у вас нет других разрешённых устройств такой же эффективности.", en: "Yes, unless you have other equally effective approved devices." }
      ],
      answer: 2,
      explain: { ru: "Знак R-412 запрещает ехать без цепей или других разрешённых средств (например, зимних шин), если они признаны равноценными.", en: "Sign R-412 forbids continuing without chains or other approved equally effective devices (such as suitable winter tyres)." },
      sign: "R-412" },
    { es: "¿Qué alteración provoca con mayor frecuencia el consumo de alcohol en el comportamiento del conductor?",
      prompt: { ru: "Какое изменение поведения водителя чаще всего вызывает алкоголь?", en: "Which change in a driver's behaviour does alcohol cause most often?" },
      options: [
        { es: "Respuestas impulsivas y agresivas ante los demás conductores.", ru: "Импульсивные и агрессивные реакции на других водителей.", en: "Impulsive and aggressive responses to other drivers." },
        { es: "Disminución del tiempo de reacción.", ru: "Уменьшение времени реакции.", en: "A shorter reaction time." },
        { es: "Mayor facilidad para percibir los semáforos y las señales luminosas.", ru: "Лучшее восприятие светофоров и световых сигналов.", en: "Seeing traffic lights and light signals more easily." }
      ],
      answer: 0,
      explain: { ru: "Алкоголь растормаживает: водитель чаще рискует и ведёт себя агрессивнее, а реакция замедляется.", en: "Alcohol lowers inhibitions: the driver takes more risks and becomes more aggressive, while reactions slow down." } },
    { es: "Si ha dormido mal o no ha dormido lo suficiente debe tener en cuenta que...",
      prompt: { ru: "Если вы плохо или мало спали, нужно учитывать, что…", en: "If you have slept badly or too little, bear in mind that…" },
      options: [
        { es: "conducir por una autovía durante horas impide la aparición del sueño.", ru: "часы езды по autovía не дают заснуть.", en: "driving for hours on an autovía keeps sleep away." },
        { es: "no se encuentra en perfectas condiciones para conducir.", ru: "вы не в лучшей форме для вождения.", en: "you are not in perfect condition to drive." },
        { es: "una taza de café elimina la fatiga y le ayuda a concentrarse.", ru: "чашка кофе снимает усталость и помогает сосредоточиться.", en: "a cup of coffee removes fatigue and helps you concentrate." }
      ],
      answer: 1,
      explain: { ru: "Недосып ухудшает внимание и реакцию; кофе лишь ненадолго маскирует сонливость.", en: "Lack of sleep weakens attention and reactions; coffee only masks drowsiness briefly." } },
    { es: "¿Con qué dos factores suelen relacionarse muchos de los accidentes más graves que sufren los jóvenes conductores?",
      prompt: { ru: "С какими двумя факторами обычно связаны многие тяжёлые аварии молодых водителей?", en: "Which two factors are many of the most serious accidents of young drivers usually linked to?" },
      options: [
        { es: "Con el consumo de alcohol y drogas y una actitud prudente al volante.", ru: "С алкоголем и наркотиками и осторожным стилем вождения.", en: "Alcohol and drugs, and a cautious attitude at the wheel." },
        { es: "Con la falta de experiencia al volante y el consumo de alcohol y drogas.", ru: "С недостатком опыта и употреблением алкоголя и наркотиков.", en: "Lack of experience, and alcohol and drug use." },
        { es: "Con la velocidad excesiva y una adecuada percepción del riesgo.", ru: "С превышением скорости и правильным восприятием риска.", en: "Excessive speed and a correct perception of risk." }
      ],
      answer: 1,
      explain: { ru: "Для молодых водителей типичны неопытность и алкоголь или наркотики, часто вместе.", en: "Inexperience combined with alcohol or drugs is typical of young drivers' serious crashes." } },
    { es: "¿Cuál de las siguientes circunstancias hace que aumente el consumo de combustible?",
      prompt: { ru: "Что из перечисленного увеличивает расход топлива?", en: "Which of these increases fuel consumption?" },
      options: [
        { es: "Circular con las ventanillas del vehículo subidas.", ru: "Езда с поднятыми стёклами.", en: "Driving with the windows closed." },
        { es: "Circular con el vehículo muy cargado.", ru: "Езда с сильно загруженной машиной.", en: "Driving a heavily loaded vehicle." },
        { es: "Circular con unos neumáticos que carezcan de dibujo.", ru: "Езда на шинах без протектора.", en: "Driving on tyres with no tread." }
      ],
      answer: 1,
      explain: { ru: "Чем тяжелее машина, тем больше нужно энергии на разгон, и расход растёт.", en: "The heavier the vehicle, the more energy it needs to accelerate, so it uses more fuel." } },
    { es: "¿Cuál de las siguientes razones puede explicar que el vehículo sea el factor de riesgo que aparece en un grado menor como causa principal de los accidentes de tráfico?",
      prompt: { ru: "Чем можно объяснить, что транспортное средство — фактор риска, реже всего становящийся главной причиной ДТП?", en: "Which reason can explain why the vehicle is the risk factor least often the main cause of accidents?" },
      options: [
        { es: "A las importantes mejoras técnicas introducidas en su diseño y construcción.", ru: "Большими техническими улучшениями в конструкции и производстве.", en: "The major technical improvements in design and construction." },
        { es: "A que la edad media de los vehículos es cada vez mayor.", ru: "Тем, что средний возраст машин всё больше.", en: "The fact that the average age of vehicles keeps rising." },
        { es: "A que en los últimos 20 años, los kilómetros recorridos han disminuido año tras año.", ru: "Тем, что за 20 лет пробег из года в год снижается.", en: "The fact that over the last 20 years distances driven have fallen year after year." }
      ],
      answer: 0,
      explain: { ru: "Современные машины гораздо надёжнее и безопаснее, поэтому технические причины ДТП редки.", en: "Modern vehicles are much more reliable and safer, so technical causes of accidents are rare." } },
    { es: "Para mantener la seguridad, ¿qué elementos se deben revisar periódicamente y con mayor frecuencia que el resto de componentes del vehículo?",
      prompt: { ru: "Какие элементы для безопасности нужно проверять регулярно и чаще остальных?", en: "For safety, which items must be checked regularly and more often than the rest of the vehicle?" },
      options: [
        { es: "Los neumáticos, el sistema de frenado y los amortiguadores.", ru: "Шины, тормоза и амортизаторы.", en: "The tyres, brakes and shock absorbers." },
        { es: "Las luces, la batería y las llantas.", ru: "Фары, аккумулятор и диски колёс.", en: "The lights, battery and wheel rims." },
        { es: "El filtro del aire, la dirección y los retrovisores.", ru: "Воздушный фильтр, рулевое управление и зеркала.", en: "The air filter, steering and mirrors." }
      ],
      answer: 0,
      explain: { ru: "Шины, тормоза и амортизаторы — «треугольник безопасности», от них зависят сцепление и торможение.", en: "Tyres, brakes and shock absorbers form the 'safety triangle': grip and braking depend on them." } },
    { es: "De día es obligatorio encender el alumbrado que corresponda cuando se circule...",
      prompt: { ru: "Днём включать соответствующий свет обязательно, когда едешь…", en: "In daytime the appropriate lights must be switched on when driving…" },
      options: [
        { es: "por un puente móvil.", ru: "по разводному мосту.", en: "over a swing bridge." },
        { es: "por un carril reservado a vehículos con alta ocupación (VAO).", ru: "по полосе VAO (для машин с высокой загрузкой).", en: "in a high-occupancy (VAO) lane." },
        { es: "por pasos inferiores o tramos de vía afectados por la señal \"Túnel\".", ru: "по подземным проездам или участкам со знаком «Туннель».", en: "through underpasses or stretches covered by the 'Tunnel' sign." }
      ],
      answer: 2,
      explain: { ru: "В туннелях и подземных проездах свет обязателен и днём (RGC, ст. 106).", en: "Lights are compulsory in tunnels and underpasses even by day (RGC art. 106)." } },
    { es: "Entre los siguientes tipos de señales, ¿cuál es el orden de prioridad?",
      prompt: { ru: "Каков порядок приоритета между этими видами сигналов?", en: "What is the order of priority between these kinds of signals?" },
      options: [
        { es: "Señales verticales, agentes y semáforos.", ru: "Вертикальные знаки, агенты, светофоры.", en: "Vertical signs, officers, traffic lights." },
        { es: "Agentes, semáforos y señales verticales.", ru: "Агенты, светофоры, вертикальные знаки.", en: "Officers, traffic lights, vertical signs." },
        { es: "Semáforos, agentes y señales verticales.", ru: "Светофоры, агенты, вертикальные знаки.", en: "Traffic lights, officers, vertical signs." }
      ],
      answer: 1,
      explain: { ru: "Сначала агенты, затем временные знаки, светофоры, вертикальные знаки и разметка (RGC, ст. 133).", en: "Officers first, then temporary signs, traffic lights, vertical signs and road markings (RGC art. 133)." } },
    { es: "Esta señal prohíbe la entrada a...",
      prompt: { ru: "Этот знак запрещает въезд…", en: "This sign prohibits entry to…" },
      options: [
        { es: "ciclos y ciclomotores.", ru: "велосипедам и мопедам.", en: "cycles and mopeds." },
        { es: "ciclos.", ru: "велосипедам.", en: "cycles." },
        { es: "todos los vehículos de dos ruedas.", ru: "всем двухколёсным транспортным средствам.", en: "all two-wheeled vehicles." }
      ],
      answer: 1,
      explain: { ru: "Знак R-114 запрещает въезд только велосипедам (ciclos); для мопедов есть R-105.", en: "Sign R-114 bans only cycles; mopeds have their own sign, R-105." },
      sign: "R-114" },
    { es: "En general, bajo los efectos de la cocaína el conductor...",
      prompt: { ru: "Как правило, под действием кокаина водитель…", en: "In general, under the effects of cocaine a driver…" },
      options: [
        { es: "es inseguro e infravalora sus capacidades al volante.", ru: "неуверен и недооценивает свои способности.", en: "is insecure and underrates his abilities." },
        { es: "se concentra mejor, por lo que sus decisiones son más seguras.", ru: "лучше сосредоточен, поэтому принимает более безопасные решения.", en: "concentrates better, so his decisions are safer." },
        { es: "es competitivo e impulsivo.", ru: "склонен к соперничеству и импульсивен.", en: "is competitive and impulsive." }
      ],
      answer: 2,
      explain: { ru: "Кокаин делает водителя самоуверенным, импульсивным и склонным к риску.", en: "Cocaine makes the driver overconfident, impulsive and prone to risk." } },
    { es: "Las embarazadas, ¿están obligadas a utilizar el cinturón de seguridad?",
      prompt: { ru: "Обязаны ли беременные пристёгиваться ремнём безопасности?", en: "Are pregnant women required to wear a seat belt?" },
      options: [
        { es: "Sí, como norma general.", ru: "Да, как правило.", en: "Yes, as a general rule." },
        { es: "No, porque es peligroso para el feto.", ru: "Нет, это опасно для плода.", en: "No, because it is dangerous for the foetus." },
        { es: "Solo si no les dificulta los movimientos para conducir.", ru: "Только если ремень не мешает водить.", en: "Only if it does not restrict their movements when driving." }
      ],
      answer: 0,
      explain: { ru: "Беременные пристёгиваются, как и все; ремень проводят под животом по тазовым костям.", en: "Pregnant women must buckle up like everyone; the lap belt goes below the bump, over the hip bones." } },
    { es: "El calor afecta negativamente a las capacidades para conducir con seguridad. Un conductor que se encuentra bajo sus efectos normalmente:",
      prompt: { ru: "Жара плохо влияет на способности водителя. Водитель под её действием обычно…", en: "Heat harms the ability to drive safely. A driver affected by it usually…" },
      options: [
        { es: "Tarda más en reaccionar y es menos agresivo.", ru: "реагирует медленнее и менее агрессивен.", en: "reacts more slowly and is less aggressive." },
        { es: "Tarda más en reaccionar y es más agresivo.", ru: "реагирует медленнее и более агрессивен.", en: "reacts more slowly and is more aggressive." },
        { es: "Tarda menos en reaccionar y es más agresivo.", ru: "реагирует быстрее и более агрессивен.", en: "reacts faster and is more aggressive." }
      ],
      answer: 1,
      explain: { ru: "В жару реакция замедляется, а раздражительность и агрессивность растут; поддерживайте в салоне комфортную температуру и делайте перерывы.", en: "In heat reactions slow down while irritability and aggressiveness grow; keep the cabin comfortably cool and take breaks." } },
    { es: "Cuando la luz de marcha atrás esté averiada, ¿cómo debe indicar que va a dar marcha atrás?",
      prompt: { ru: "Если не работает фонарь заднего хода, как показать, что вы поедете назад?", en: "If the reversing light is broken, how should you show that you are going to reverse?" },
      options: [
        { es: "Moviendo el brazo de arriba abajo.", ru: "Движением руки вверх-вниз.", en: "By moving the arm up and down." },
        { es: "Con el brazo extendido y la palma de la mano hacia atrás.", ru: "Вытянутой рукой ладонью назад.", en: "With the arm held out and the palm facing backwards." },
        { es: "Advirtiéndolo con el claxon.", ru: "Звуковым сигналом.", en: "By sounding the horn." }
      ],
      answer: 1,
      explain: { ru: "Задний ход показывают рукой, вытянутой горизонтально ладонью назад (RGC, ст. 113).", en: "Reversing is shown with the arm held out horizontally, palm backwards (RGC art. 113)." } },
    { es: "En una vía interurbana con un carril por sentido, ¿dónde se colocará un ciclomotor para girar a la izquierda, si no existe carril específico para realizar el giro?",
      prompt: { ru: "На загородной дороге с одной полосой в каждом направлении, где встанет мопед для поворота налево, если отдельной полосы для поворота нет?", en: "On an interurban road with one lane each way and no turning lane, where should a moped wait to turn left?" },
      options: [
        { es: "En el eje de la calzada, sin invadir el carril de sentido contrario.", ru: "На оси дороги, не заезжая на встречную полосу.", en: "On the centre line, without entering the opposite lane." },
        { es: "En la parte central del carril por el que circule.", ru: "В центре своей полосы.", en: "In the middle of its lane." },
        { es: "A la derecha, fuera de la calzada siempre que sea posible.", ru: "Справа, по возможности вне проезжей части.", en: "On the right, off the carriageway whenever possible." }
      ],
      answer: 2,
      explain: { ru: "Велосипеды и мопеды поворачивают налево с правой стороны, по возможности вне проезжей части (RGC, ст. 76).", en: "Cycles and mopeds turn left from the right-hand side, off the carriageway if possible (RGC art. 76)." } },
    { es: "Esta marca transversal discontinua, ¿obliga a detenerse antes de franquearla?",
      prompt: { ru: "Обязывает ли эта прерывистая поперечная линия останавливаться перед ней?", en: "Does this broken transverse line oblige you to stop before crossing it?" },
      options: [
        { es: "Solo si hay visibilidad reducida.", ru: "Только при плохой видимости.", en: "Only with reduced visibility." },
        { es: "No, porque no parar no implica ningún peligro a la circulación.", ru: "Нет, ведь неостановка не создаёт опасности.", en: "No, because not stopping causes no danger." },
        { es: "No, salvo que sea necesario para ceder el paso.", ru: "Нет, если только это не нужно, чтобы уступить дорогу.", en: "No, unless it is necessary in order to give way." }
      ],
      answer: 2,
      explain: { ru: "Прерывистая поперечная линия — линия «уступи дорогу»: останавливаются, только если нужно уступить.", en: "A broken transverse line is a give-way line: you stop only if you need to give way." } },
    { es: "Para intentar evitar la aparición de la somnolencia durante la conducción es aconsejable dormir...",
      prompt: { ru: "Чтобы избежать сонливости за рулём, рекомендуется спать…", en: "To avoid drowsiness while driving, it is advisable to sleep…" },
      options: [
        { es: "entre 5 y 7 horas diarias.", ru: "от 5 до 7 часов в сутки.", en: "between 5 and 7 hours a day." },
        { es: "menos horas de las necesarias, para mantener alto el nivel de alerta.", ru: "меньше необходимого, чтобы оставаться бодрым.", en: "fewer hours than needed, to keep alertness high." },
        { es: "las horas suficientes para estar descansado, que para la mayoría de las personas son entre 7 y 9 horas.", ru: "столько, чтобы отдохнуть; большинству людей это 7–9 часов.", en: "enough hours to be rested, which for most people is 7 to 9." }
      ],
      answer: 2,
      explain: { ru: "Большинству взрослых нужно 7–9 часов сна, чтобы водить без сонливости.", en: "Most adults need 7–9 hours of sleep to drive without drowsiness." } },
    { es: "¿Cómo debe comportarse el conductor de un turismo, sobre todo en vías urbanas, para evitar un accidente con una motocicleta o un ciclomotor?",
      prompt: { ru: "Как вести себя водителю легкового автомобиля, особенно в городе, чтобы не столкнуться с мотоциклом или мопедом?", en: "How should a car driver behave, especially in towns, to avoid an accident with a motorcycle or moped?" },
      options: [
        { es: "Debe circular en paralelo y lo más cerca posible de los vehículos de dos ruedas.", ru: "Ехать рядом и как можно ближе к двухколёсным.", en: "Drive alongside and as close as possible to two-wheelers." },
        { es: "Debe mirar por los retrovisores con frecuencia.", ru: "Часто смотреть в зеркала.", en: "Check the mirrors often." },
        { es: "Debe reducir o incluso eliminar la distancia de seguridad.", ru: "Уменьшить или вовсе убрать дистанцию.", en: "Reduce or even remove the safety gap." }
      ],
      answer: 1,
      explain: { ru: "Мотоциклы маленькие и быстрые: их легко не заметить в зеркалах, поэтому смотрите в них часто.", en: "Motorcycles are small and quick: they are easy to miss, so check the mirrors often." } },
    { es: "En un carril habilitado en sentido contrario al habitual por trabajos en la calzada, ¿qué vehículos tienen permitido utilizarlo?",
      prompt: { ru: "На полосе, открытой во встречном (непривычном) направлении из-за дорожных работ, какие машины могут ехать?", en: "In a lane opened against the usual direction because of roadworks, which vehicles may use it?" },
      options: [
        { es: "Todos los que estén autorizados a circular por la vía.", ru: "Все, кому разрешено ехать по этой дороге.", en: "All those allowed to use the road." },
        { es: "Solo turismos y motocicletas.", ru: "Только легковые и мотоциклы.", en: "Only cars and motorcycles." },
        { es: "Automóviles que no superen los 3.500 kg de M.M.A. y motocicletas.", ru: "Автомобили до 3500 кг и мотоциклы.", en: "Motor vehicles up to 3,500 kg MAM and motorcycles." }
      ],
      answer: 0,
      explain: { ru: "Так ответил журнал: полоса, открытая во встречном направлении из-за работ, доступна всем машинам, которым разрешена эта дорога (в отличие от полосы для разгрузки движения).", en: "The magazine's answer: a lane opened against the usual direction because of roadworks is open to all vehicles allowed on the road (unlike a lane opened to ease traffic)." } },
    { es: "En los adelantamientos a ciclistas en vías con un carril para cada sentido, ¿está permitido ocupar el carril de sentido contrario?",
      prompt: { ru: "При обгоне велосипедистов на дороге с одной полосой в каждом направлении можно ли занимать встречную полосу?", en: "When overtaking cyclists on a road with one lane each way, may you occupy the opposite lane?" },
      options: [
        { es: "Sí, siempre que el adelantamiento se pueda realizar con seguridad.", ru: "Да, если обгон можно сделать безопасно.", en: "Yes, as long as the overtaking can be done safely." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Solo si ambos sentidos están separados por línea blanca discontinua.", ru: "Только если направления разделены прерывистой белой линией.", en: "Only if the directions are separated by a broken white line." }
      ],
      answer: 0,
      explain: { ru: "Для обгона велосипедиста можно частично или полностью занять встречную полосу, если это безопасно (RGC, ст. 85).", en: "To overtake a cyclist you may use part or all of the opposite lane if it is safe (RGC art. 85)." } },
    { es: "Los conductores, ¿están obligados a realizar las pruebas para la comprobación de la tasa de alcoholemia cuando sean requeridos para ello por la policía de tráfico?",
      prompt: { ru: "Обязаны ли водители проходить тест на алкоголь по требованию дорожной полиции?", en: "Are drivers obliged to take the alcohol test when traffic police require it?" },
      options: [
        { es: "No; pueden negarse a hacerla y seguir circulando.", ru: "Нет: можно отказаться и ехать дальше.", en: "No: they may refuse and carry on." },
        { es: "Solo están obligados en caso de accidente de tráfico.", ru: "Только при ДТП.", en: "Only after an accident." },
        { es: "Sí; negarse a realizarla es un delito incluido en el Código Penal.", ru: "Да: отказ — преступление по Уголовному кодексу.", en: "Yes: refusing is a crime under the Criminal Code." }
      ],
      answer: 2,
      explain: { ru: "Отказ от теста на алкоголь или наркотики — преступление (Уголовный кодекс, ст. 383).", en: "Refusing an alcohol or drug test is a crime (Criminal Code art. 383)." } },
    { es: "¿Es conveniente utilizar un aceite lubricante con un índice de viscosidad tan bajo que, al calentarse el motor, se vuelva excesivamente líquido?",
      prompt: { ru: "Стоит ли использовать масло с такой низкой вязкостью, что при прогреве оно становится слишком жидким?", en: "Is it advisable to use an oil with such a low viscosity index that it becomes too thin when the engine is hot?" },
      options: [
        { es: "No, ya que el aceite no llega a engrasar bien las piezas del motor.", ru: "Нет, такое масло плохо смазывает детали двигателя.", en: "No, because it does not lubricate the engine parts properly." },
        { es: "Sí; cuanto más líquido, mejor engrasa y además arrastra los residuos depositados en el motor.", ru: "Да: чем жиже, тем лучше смазывает и смывает отложения.", en: "Yes: the thinner, the better it lubricates and the more residue it carries away." },
        { es: "Solo si el motor se calienta en exceso, ya que engrasa mejor y ayuda a bajar su temperatura.", ru: "Только если двигатель сильно греется: смазывает лучше и охлаждает.", en: "Only if the engine overheats, as it lubricates better and lowers the temperature." }
      ],
      answer: 0,
      explain: { ru: "Слишком жидкое горячее масло не держит плёнку между деталями; используйте вязкость, рекомендованную производителем.", en: "Oil that gets too thin when hot cannot keep a film between parts; use the viscosity the maker recommends." } },
    { es: "Si existen semáforos con indicaciones distintas a la derecha y a la izquierda, ¿a cuál obedecerán los que pretendan seguir de frente?",
      prompt: { ru: "Если справа и слева стоят светофоры с разными сигналами, какому подчиняются те, кто едет прямо?", en: "If there are traffic lights with different indications on the right and on the left, which do drivers going straight on obey?" },
      options: [
        { es: "Al situado a su derecha.", ru: "Тому, что справа.", en: "The one on their right." },
        { es: "Al que se encuentre más cerca del vehículo.", ru: "Тому, что ближе к машине.", en: "The one nearest the vehicle." },
        { es: "Al situado inmediatamente a su izquierda.", ru: "Тому, что сразу слева.", en: "The one immediately on their left." }
      ],
      answer: 2,
      explain: { ru: "Так ответил журнал: при разных сигналах справа и слева тем, кто едет прямо, подчиняются светофору сразу слева от себя.", en: "The magazine's answer: with different lights on the right and left, drivers going straight on follow the light immediately on their left." } },
    { es: "En el centro de la calzada hay doble línea continua; ¿qué indica?",
      prompt: { ru: "Посередине проезжей части двойная сплошная. Что это означает?", en: "There is a double continuous line in the middle of the carriageway. What does it mean?" },
      options: [
        { es: "Que la calzada es peligrosa.", ru: "Что дорога опасная.", en: "That the road is dangerous." },
        { es: "Que hay un carril especial.", ru: "Что есть специальная полоса.", en: "That there is a special lane." },
        { es: "Que no se puede atravesar, ni pisar la línea.", ru: "Что её нельзя пересекать и наезжать на неё.", en: "That it may not be crossed or driven on." }
      ],
      answer: 2,
      explain: { ru: "Двойная сплошная значит то же, что одинарная: её нельзя пересекать и на неё нельзя наезжать.", en: "A double continuous line means the same as a single one: it may not be crossed or driven on." } },
    { es: "Al cruzar un arcén por el que transitan peatones, ¿qué debe hacer?",
      prompt: { ru: "Что делать, пересекая обочину, по которой идут пешеходы?", en: "When crossing a hard shoulder used by pedestrians, what must you do?" },
      options: [
        { es: "Avisarles mediante señales acústicas para que se aparten.", ru: "Предупредить их гудком, чтобы они отошли.", en: "Warn them with the horn so they move aside." },
        { es: "Cederles el paso, pero solamente si forman un grupo.", ru: "Уступить им, только если они идут группой.", en: "Give way to them only if they are a group." },
        { es: "Cederles el paso si no disponen de zona peatonal.", ru: "Уступить им, если у них нет пешеходной зоны.", en: "Give way to them if they have no pedestrian area." }
      ],
      answer: 2,
      explain: { ru: "Пересекая обочину (например, при въезде на участок), водитель уступает пешеходам, у которых нет тротуара (RGC, ст. 65).", en: "When crossing a shoulder (for example to enter a property) a driver gives way to pedestrians who have no footway (RGC art. 65)." } },
    { es: "Esta señal, ¿prohíbe cambiar de dirección a la izquierda?",
      prompt: { ru: "Запрещает ли этот знак поворот налево?", en: "Does this sign forbid turning left?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, pero no prohíbe girar a la derecha.", ru: "Да, но не запрещает поворот направо.", en: "Yes, but it does not forbid turning right." },
        { es: "Sí; prohíbe realizar cualquier giro.", ru: "Да, он запрещает любой поворот.", en: "Yes, it forbids any turn." }
      ],
      answer: 0,
      explain: { ru: "Знак «разворот запрещён» (R-304) запрещает только разворот, а не поворот налево.", en: "The 'no U-turn' sign (R-304) bans only U-turns, not left turns." },
      sign: "R-304" },
    { es: "Un furgón, ¿puede utilizar un carril reversible?",
      prompt: { ru: "Может ли фургон ехать по реверсивной полосе?", en: "May a van use a reversible lane?" },
      options: [
        { es: "Solo si su M.M.A. no es superior a 3.500 kilogramos.", ru: "Только если его разрешённая масса не больше 3500 кг.", en: "Only if its MAM does not exceed 3,500 kg." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí.", ru: "Да.", en: "Yes." }
      ],
      answer: 2,
      explain: { ru: "Так ответил журнал: по реверсивной полосе могут ехать все машины, которым разрешена эта дорога, включая фургоны, — с ближним светом.", en: "The magazine's answer: any vehicle allowed on the road may use a reversible lane, vans included, with dipped headlights on." } },
    { es: "Como norma general, en la parte transitable del arcén de una vía interurbana, ¿está permitida la parada o el estacionamiento?",
      prompt: { ru: "Как правило, на проезжей части обочины загородной дороги разрешены остановка или стоянка?", en: "As a rule, on the usable part of the hard shoulder of an interurban road, is stopping or parking allowed?" },
      options: [
        { es: "Está permitida la parada, pero no el estacionamiento.", ru: "Остановка разрешена, стоянка нет.", en: "Stopping is allowed, but parking is not." },
        { es: "Está prohibida tanto la parada como el estacionamiento.", ru: "Запрещены и остановка, и стоянка.", en: "Both stopping and parking are forbidden." },
        { es: "Está permitida tanto la parada como el estacionamiento.", ru: "Разрешены и остановка, и стоянка.", en: "Both stopping and parking are allowed." }
      ],
      answer: 1,
      explain: { ru: "Вне населённого пункта останавливаются вне проезжей части, оставляя проходимую часть обочины свободной (RGC, ст. 90–91).", en: "Outside towns you stop off the carriageway, leaving the usable part of the shoulder clear (RGC arts. 90–91)." } },
    { es: "Circulando por una autopista observa que se ha pasado una salida, ¿puede volver a ella circulando marcha atrás?",
      prompt: { ru: "Вы проехали съезд на autopista. Можно ли вернуться к нему задним ходом?", en: "On an autopista you realise you have missed an exit. May you reverse back to it?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, cuando el recorrido no supere los 15 metros.", ru: "Да, если расстояние не больше 15 метров.", en: "Yes, if it is no more than 15 metres." },
        { es: "Sí, comprobando que no existe peligro para otros usuarios.", ru: "Да, убедившись, что это безопасно.", en: "Yes, after checking there is no danger to others." }
      ],
      answer: 0,
      explain: { ru: "На autopista и autovía задний ход запрещён (RGC, ст. 80).", en: "Reversing is forbidden on autopistas and autovías (RGC art. 80)." } },
    { es: "¿Puede circular con su turismo si el equipaje no permite una visión adecuada de la vía por el espejo retrovisor interior?",
      prompt: { ru: "Можно ли ехать на легковом автомобиле, если багаж мешает видеть дорогу в салонное зеркало?", en: "May you drive your car if the luggage blocks the view through the interior mirror?" },
      options: [
        { es: "No; en ningún caso la carga puede disminuir la visibilidad a través del espejo retrovisor.", ru: "Нет: груз никогда не должен ухудшать обзор в зеркало.", en: "No: the load may never reduce visibility through the mirror." },
        { es: "Sí, si el vehículo lleva dos espejos retrovisores exteriores, uno a cada lado.", ru: "Да, если у машины два наружных зеркала, по одному с каждой стороны.", en: "Yes, if the car has two exterior mirrors, one on each side." },
        { es: "Solo si el retrovisor derecho es gran angular y el interior es panorámico.", ru: "Только если правое зеркало широкоугольное, а салонное панорамное.", en: "Only if the right mirror is wide-angle and the interior one panoramic." }
      ],
      answer: 1,
      explain: { ru: "Если салонное зеркало бесполезно, достаточно двух наружных зеркал — левого и правого.", en: "If the interior mirror is useless, two exterior mirrors, left and right, are enough." } },
    { es: "¿Qué significado tiene esta señal?",
      prompt: { ru: "Что означает этот знак?", en: "What does this sign mean?" },
      options: [
        { es: "Peligro por la proximidad de un paso a nivel provisto de barreras o semibarreras.", ru: "Опасность: впереди железнодорожный переезд со шлагбаумом или полушлагбаумом.", en: "Danger: a level crossing with barriers or half barriers ahead." },
        { es: "Peligro por la proximidad de un paso a nivel sin barreras de más de una vía férrea.", ru: "Опасность: впереди переезд без шлагбаума через несколько путей.", en: "Danger: an unguarded level crossing over more than one track ahead." },
        { es: "Peligro por la proximidad de un cruce con una línea de tranvía.", ru: "Опасность: впереди пересечение с трамвайной линией.", en: "Danger: a crossing with a tram line ahead." }
      ],
      answer: 0,
      explain: { ru: "Знак P-7 (забор) — переезд со шлагбаумом; паровоз (P-8) — переезд без шлагбаума.", en: "Sign P-7 (a fence) means a level crossing with barriers; a locomotive (P-8) means one without." },
      sign: "P-7" },
    { es: "En general, un conductor con sueño...",
      prompt: { ru: "Как правило, сонный водитель…", en: "In general, a sleepy driver…" },
      options: [
        { es: "acepta un mayor nivel de riesgo en la conducción.", ru: "готов к большему риску при вождении.", en: "accepts a higher level of risk while driving." },
        { es: "acepta un menor nivel de riesgo en la conducción.", ru: "готов к меньшему риску при вождении.", en: "accepts a lower level of risk while driving." },
        { es: "tarda menos en reaccionar ante un suceso imprevisto.", ru: "быстрее реагирует на неожиданности.", en: "reacts faster to unexpected events." }
      ],
      answer: 0,
      explain: { ru: "Сонный водитель хуже оценивает опасность и чаще идёт на риск.", en: "A sleepy driver judges danger poorly and takes more risks." } },
    { es: "¿Cómo se conocen a los colectivos de personas que tienen una mayor probabilidad de verse implicados en un accidente de tráfico o de fallecer a consecuencia del mismo?",
      prompt: { ru: "Как называют группы людей, у которых выше вероятность попасть в ДТП или погибнуть в нём?", en: "What are the groups of people more likely to be involved in or die in a road accident called?" },
      options: [
        { es: "Grupos de riesgo o vulnerables en el tráfico.", ru: "Группы риска или уязвимые участники движения.", en: "Risk groups or vulnerable road users." },
        { es: "Víctimas de accidentes de tráfico.", ru: "Жертвы ДТП.", en: "Road accident victims." },
        { es: "Grupos en riesgo de exclusión social.", ru: "Группы риска социальной изоляции.", en: "Groups at risk of social exclusion." }
      ],
      answer: 0,
      explain: { ru: "Пешеходы, велосипедисты, мотоциклисты, дети и пожилые — уязвимые участники движения (группы риска).", en: "Pedestrians, cyclists, motorcyclists, children and older people are vulnerable road users (risk groups)." } },
    { es: "¿Puede sobresalir por la parte trasera del vehículo la carga indivisible que transporta un turismo?",
      prompt: { ru: "Может ли неделимый груз легкового автомобиля выступать назад?", en: "May an indivisible load carried by a car stick out at the back?" },
      options: [
        { es: "Sí, un máximo de hasta el 10% de la longitud del vehículo.", ru: "Да, максимум на 10 % длины машины.", en: "Yes, up to 10 % of the vehicle's length." },
        { es: "No, la carga no puede sobresalir por la parte trasera de un turismo.", ru: "Нет, груз не может выступать назад у легкового.", en: "No, a car's load may not stick out at the back." },
        { es: "Sí, un máximo de hasta el 15% de la longitud del vehículo.", ru: "Да, максимум на 15 % длины машины.", en: "Yes, up to 15 % of the vehicle's length." }
      ],
      answer: 2,
      explain: { ru: "У машин не только для грузов делимый груз может выступать назад на 10 %, неделимый — на 15 % длины (RGC, ст. 14).", en: "On vehicles not only for goods a divisible load may stick out 10 % at the back and an indivisible one 15 % of the length (RGC art. 14)." } },
    { es: "Si queda detenido en un atasco, ¿qué distancia es aconsejable mantener con el vehículo de delante?",
      prompt: { ru: "Если вы стоите в пробке, какое расстояние до передней машины рекомендуется?", en: "When stopped in a traffic jam, what distance should you keep from the vehicle in front?" },
      options: [
        { es: "Un metro como máximo.", ru: "Не больше метра.", en: "One metre at most." },
        { es: "Un espacio mínimo para ocupar menos espacio.", ru: "Минимальное, чтобы занимать меньше места.", en: "A minimal gap to take up less space." },
        { es: "Dos o tres metros para no golpear al vehículo de delante en caso de alcance trasero.", ru: "Два-три метра, чтобы не ударить переднюю машину при ударе сзади.", en: "Two or three metres, so you do not hit the vehicle ahead if you are hit from behind." }
      ],
      answer: 2,
      explain: { ru: "Запас 2–3 м защищает от «цепочки» при ударе сзади и позволяет объехать, если передняя машина заглохнет.", en: "A 2–3 m gap prevents a chain collision if you are hit from behind and lets you get round a stalled car." } },
    { es: "¿Qué condiciones deben tener los neumáticos de una motocicleta?",
      prompt: { ru: "Каким требованиям должны отвечать шины мотоцикла?", en: "What condition must a motorcycle's tyres meet?" },
      options: [
        { es: "Las dos ruedas tienen que ser del mismo tamaño y características.", ru: "Оба колеса должны быть одного размера и характеристик.", en: "Both wheels must be the same size and type." },
        { es: "Las ranuras de la banda de rodadura deben tener una profundidad mínima de 1,6 milímetros.", ru: "Глубина канавок протектора не меньше 1,6 мм.", en: "The tread grooves must be at least 1.6 mm deep." },
        { es: "No deben presentar ampollas, deformaciones anormales o roturas.", ru: "На них не должно быть вздутий, необычных деформаций или порезов.", en: "They must have no bulges, abnormal deformations or cuts." }
      ],
      answer: 2,
      explain: { ru: "На шинах не должно быть вздутий, необычных деформаций и порезов: такие повреждения могут привести к разрыву шины.", en: "Tyres must have no bulges, abnormal deformations or cuts: such damage can make a tyre burst." } },
    { es: "A un turismo, ¿le está permitido circular si tiene roto el espejo retrovisor exterior izquierdo?",
      prompt: { ru: "Можно ли ехать на легковом автомобиле с разбитым левым наружным зеркалом?", en: "May a car be driven if its left exterior mirror is broken?" },
      options: [
        { es: "Sí, porque el retrovisor exterior izquierdo no es obligatorio.", ru: "Да, левое наружное зеркало не обязательно.", en: "Yes, because the left exterior mirror is not compulsory." },
        { es: "Sólo si el vehículo tiene espejo retrovisor interior.", ru: "Только если есть салонное зеркало.", en: "Only if the car has an interior mirror." },
        { es: "No, cuando el conductor no pueda ver la circulación por detrás del vehículo.", ru: "Нет, если водитель не видит, что происходит сзади.", en: "No, when the driver cannot see the traffic behind." }
      ],
      answer: 2,
      explain: { ru: "Так ответил журнал: ехать нельзя, если водитель не может видеть движение сзади. Левое наружное зеркало у легковых обязательно, его стоит заменить как можно скорее.", en: "The magazine's answer: you may not drive if you cannot see the traffic behind. The left exterior mirror is compulsory on cars, so replace it as soon as possible." } },
    { es: "¿Qué es un microsueño?",
      prompt: { ru: "Что такое микросон?", en: "What is a microsleep?" },
      options: [
        { es: "Un periodo de unos segundos durante el cual el conductor sueña mientras conduce.", ru: "Несколько секунд, когда водитель видит сон за рулём.", en: "A few seconds during which the driver dreams while driving." },
        { es: "Un periodo de unos segundos durante el cual el conductor queda ligeramente dormido sin darse cuenta.", ru: "Несколько секунд, когда водитель незаметно для себя засыпает.", en: "A few seconds during which the driver nods off without realising it." },
        { es: "Un periodo corto de descanso que el conductor realiza cuando siente fatiga.", ru: "Короткий отдых, который водитель делает при усталости.", en: "A short rest the driver takes when tired." }
      ],
      answer: 1,
      explain: { ru: "Микросон — несколько секунд сна без осознания; за это время машина проезжает десятки метров без управления.", en: "A microsleep is a few seconds of sleep without noticing; meanwhile the car covers dozens of metres uncontrolled." } },
    { es: "En una retención en la que están los vehículos detenidos, ¿está permitido usar el teléfono móvil?",
      prompt: { ru: "Можно ли пользоваться телефоном в заторе, когда машины стоят?", en: "In a hold-up with vehicles stopped, may you use your mobile phone?" },
      options: [
        { es: "No, excepto en vías urbanas.", ru: "Нет, кроме городских улиц.", en: "No, except on urban roads." },
        { es: "Únicamente con un dispositivo de manos libres y sin usar auriculares.", ru: "Только через громкую связь, без наушников.", en: "Only hands-free and without earphones." },
        { es: "Sí, porque el vehículo no está en movimiento.", ru: "Да, ведь машина не движется.", en: "Yes, because the vehicle is not moving." }
      ],
      answer: 1,
      explain: { ru: "В пробке вы всё равно «ведёте» машину: телефон в руке запрещён, разрешена только громкая связь без наушников.", en: "In a jam you are still driving: a hand-held phone is forbidden, only hands-free without earphones." } },
    { es: "Una luz verde en forma de flecha apuntando hacia abajo en un semáforo de carril...",
      prompt: { ru: "Зелёная стрелка вниз на светофоре над полосой…", en: "A green downward arrow on a lane signal…" },
      options: [
        { es: "obliga a no abandonar el carril sobre el que está colocada.", ru: "обязывает не покидать полосу, над которой она стоит.", en: "obliges you not to leave the lane it is over." },
        { es: "exime de la obligación de detenerse ante una luz roja circular.", ru: "освобождает от обязанности остановиться на красный круглый сигнал.", en: "exempts you from stopping at a red circular light." },
        { es: "No exime de tener que cumplir las normas generales sobre prioridad de paso.", ru: "не освобождает от общих правил приоритета.", en: "does not exempt you from the general priority rules." }
      ],
      answer: 2,
      explain: { ru: "Зелёная стрелка вниз лишь разрешает ехать по этой полосе; правила приоритета по-прежнему действуют.", en: "A green down arrow only means the lane is open; priority rules still apply." } },
    { es: "Entre la puesta y la salida del sol, ¿puede encender la luz de largo alcance en caso de niebla?",
      prompt: { ru: "Можно ли от заката до рассвета включать дальний свет в тумане?", en: "Between sunset and sunrise, may you use main beam in fog?" },
      options: [
        { es: "Sí, procurando no deslumbrar a otros usuarios de la vía.", ru: "Да, стараясь не ослеплять других.", en: "Yes, taking care not to dazzle other road users." },
        { es: "Sólo en carreteras con un carril para cada sentido de la circulación.", ru: "Только на дорогах с одной полосой в каждом направлении.", en: "Only on roads with one lane in each direction." },
        { es: "No, está prohibido.", ru: "Нет, это запрещено.", en: "No, it is forbidden." }
      ],
      answer: 0,
      explain: { ru: "Так ответил журнал: в тумане разрешены ближний или дальний свет (дальний — не ослепляя других), хотя дальний в тумане часто отражается и ухудшает видимость.", en: "The magazine's answer: in fog dipped or main beam are allowed (main beam without dazzling anyone), although main beam often reflects off fog and worsens visibility." } },
    { es: "En este paso para peatones, si no funciona el semáforo, ¿es obligatorio ceder el paso a los peatones que intenten cruzar?",
      prompt: { ru: "Если на этом пешеходном переходе не работает светофор, обязательно ли уступать пешеходам, которые хотят перейти?", en: "If the traffic light at this pedestrian crossing is not working, must you give way to pedestrians trying to cross?" },
      options: [
        { es: "Sí, porque los peatones tienen prioridad de paso.", ru: "Да, у пешеходов приоритет.", en: "Yes, because pedestrians have priority." },
        { es: "No, porque los vehículos tienen prioridad de paso.", ru: "Нет, приоритет у машин.", en: "No, because vehicles have priority." },
        { es: "Sólo si quien intenta cruzar es una fila de escolares.", ru: "Только если переходит колонна школьников.", en: "Only if it is a line of schoolchildren." }
      ],
      answer: 0,
      explain: { ru: "Если светофор не работает, переход действует как обычная «зебра», и пешеходы имеют приоритет.", en: "If the light is out, it works like an ordinary zebra crossing and pedestrians have priority." } },
    { es: "En la ficha de inspección técnica de esta motocicleta figura que tiene estructura de autoprotección y cinturón de seguridad. ¿Puede conducirla sin utilizar el casco de protección?",
      prompt: { ru: "В техпаспорте этого мотоцикла указано, что у него есть защитный каркас и ремень безопасности. Можно ли ездить на нём без шлема?", en: "This motorcycle's inspection card states it has a self-protection structure and a seat belt. May you ride it without a helmet?" },
      options: [
        { es: "Sólo cuando circule por vías urbanas.", ru: "Только в городе.", en: "Only on urban roads." },
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 1,
      explain: { ru: "Мотоциклы с защитным каркасом и ремнём, указанными в документах, освобождены от шлема, если ремень пристёгнут (RGC, ст. 118).", en: "Motorcycles with a protective structure and seat belts stated in their papers are exempt from helmets if the belt is worn (RGC art. 118)." } },
    { es: "Si quiere abandonar una autovía, ¿en qué momento debe entrar en el carril de deceleración?",
      prompt: { ru: "Если вы хотите съехать с autovía, когда нужно перейти на полосу торможения?", en: "If you want to leave an autovía, when should you move into the deceleration lane?" },
      options: [
        { es: "Lo antes posible.", ru: "Как можно раньше.", en: "As soon as possible." },
        { es: "Es indiferente, en cualquier momento mientras la línea sea discontinua.", ru: "Всё равно когда, пока линия прерывистая.", en: "It does not matter, any time while the line is broken." },
        { es: "Lo más tarde posible.", ru: "Как можно позже.", en: "As late as possible." }
      ],
      answer: 0,
      explain: { ru: "На полосу торможения переходят в её начале, чтобы снижать скорость уже на ней.", en: "Move into the deceleration lane at its start so you slow down there." } },
    { es: "¿Está permitido estacionar en doble fila?",
      prompt: { ru: "Разрешено ли стоять во втором ряду?", en: "Is double parking allowed?" },
      options: [
        { es: "Sí, siempre que el conductor no abandone el vehículo.", ru: "Да, если водитель не покидает машину.", en: "Yes, as long as the driver stays with the vehicle." },
        { es: "No, en ningún caso.", ru: "Нет, ни в коем случае.", en: "No, never." },
        { es: "Sólo cuando la duración del estacionamiento sea inferior a dos minutos.", ru: "Только если стоянка короче двух минут.", en: "Only if parking lasts under two minutes." }
      ],
      answer: 1,
      explain: { ru: "Стоянка во втором ряду запрещена всегда (RGC, ст. 94).", en: "Double parking is always forbidden (RGC art. 94)." } },
    { es: "En una vía fuera de poblado en la que no exista zona peatonal ni arcén practicable, ¿está permitido que un peatón circule por la calzada?",
      prompt: { ru: "Можно ли пешеходу идти по проезжей части вне населённого пункта, где нет ни тротуара, ни проходимой обочины?", en: "On a road outside a town with no footway or usable shoulder, may a pedestrian walk on the carriageway?" },
      options: [
        { es: "Sí, siempre que tome las debidas precauciones.", ru: "Да, соблюдая необходимые меры предосторожности.", en: "Yes, taking due care." },
        { es: "Sólo si arrastra un vehículo de reducidas dimensiones que no sea de motor.", ru: "Только если он толкает небольшое немоторное средство.", en: "Only if pushing a small non-motor vehicle." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 0,
      explain: { ru: "Без тротуара и обочины пешеход идёт по краю проезжей части, как правило по левой стороне (RGC, ст. 121–122).", en: "With no footway or shoulder a pedestrian walks at the edge of the carriageway, normally on the left (RGC arts. 121–122)." } },
    { es: "¿Cuál es uno de los problemas que, debido al deterioro de las aptitudes psicofísicas, encuentran muchas personas mayores como peatones en las vías públicas?",
      prompt: { ru: "С какой проблемой из-за ухудшения способностей часто сталкиваются пожилые люди как пешеходы?", en: "Because of declining abilities, what problem do many older people face as pedestrians?" },
      options: [
        { es: "Tienen mayor capacidad de orientación, sobre todo en calles que no conocen bien.", ru: "Лучше ориентируются, особенно на незнакомых улицах.", en: "They orient themselves better, especially in unfamiliar streets." },
        { es: "No aprecian bien la velocidad a la que se acercan los vehículos.", ru: "Плохо оценивают скорость приближающихся машин.", en: "They do not judge well how fast vehicles are approaching." },
        { es: "Los bordillos de las aceras están al mismo nivel que la calzada.", ru: "Бордюры тротуаров на одном уровне с проезжей частью.", en: "Kerbs are at the same level as the carriageway." }
      ],
      answer: 1,
      explain: { ru: "Пожилым трудно оценить скорость и расстояние до машин, поэтому они переходят в опасный момент.", en: "Older pedestrians find it hard to judge vehicle speed and distance, so they may cross at the wrong moment." } },
    { es: "Acaba de comprar un turismo nuevo; ¿cuándo debe presentarlo a la primera inspección técnica reglamentaria?",
      prompt: { ru: "Вы купили новый легковой автомобиль. Когда первый техосмотр (ITV)?", en: "You have just bought a new car. When must it first go for the ITV?" },
      options: [
        { es: "A los cuatro años, a contar desde la fecha de compra.", ru: "Через четыре года с даты покупки.", en: "After four years from the purchase date." },
        { es: "A los dos años, a contar desde la fecha de matriculación.", ru: "Через два года с даты регистрации.", en: "After two years from the registration date." },
        { es: "A los cuatro años, a contar desde la fecha de matriculación.", ru: "Через четыре года с даты регистрации.", en: "After four years from the registration date." }
      ],
      answer: 2,
      explain: { ru: "Первый ITV легкового автомобиля — через 4 года после первой регистрации.", en: "A car's first ITV is due 4 years after first registration." } },
    { es: "En las proximidades de vías de uso exclusivo de ciclos, ¿qué precauciones se deben tomar?",
      prompt: { ru: "Какие меры предосторожности нужны рядом с дорогами только для велосипедов?", en: "Near roads reserved for cycles, what precautions should you take?" },
      options: [
        { es: "Hacer señales acústicas para indicar nuestra presencia.", ru: "Подавать звуковые сигналы, предупреждая о себе.", en: "Use the horn to announce your presence." },
        { es: "Moderar la velocidad y, si fuera preciso, detener el vehículo.", ru: "Снизить скорость, а при необходимости остановиться.", en: "Slow down and stop if necessary." },
        { es: "Mantener la velocidad y estar atento al cumplimiento de la señalización vertical.", ru: "Держать скорость и следить за знаками.", en: "Keep your speed and watch the vertical signs." }
      ],
      answer: 1,
      explain: { ru: "Рядом с велодорожками возможен выезд велосипедистов, поэтому снижают скорость и готовы остановиться (RGC, ст. 46).", en: "Near cycle tracks cyclists may appear, so slow down and be ready to stop (RGC art. 46)." } },
    { es: "¿Está permitido circular con un turismo por una vía en cuyo acceso está situada esta señal?",
      prompt: { ru: "Можно ли ехать на легковом автомобиле по дороге, на въезде на которую стоит этот знак?", en: "May a car use a road at whose entrance this sign stands?" },
      options: [
        { es: "No, porque es una vía reservada para todos los vehículos de dos ruedas.", ru: "Нет, это дорога для всех двухколёсных.", en: "No, because it is reserved for all two-wheelers." },
        { es: "No, porque es una vía reservada para ciclos.", ru: "Нет, это дорога для велосипедов.", en: "No, because it is reserved for cycles." },
        { es: "Sí, porque es una vía permitida para todos los vehículos, excepto ciclos.", ru: "Да, она открыта всем, кроме велосипедов.", en: "Yes, it is open to all vehicles except cycles." }
      ],
      answer: 1,
      explain: { ru: "Знак S-35 обозначает дорогу, выделенную для велосипедов; другим машинам ехать по ней нельзя.", en: "Sign S-35 marks a road reserved for cycles; other vehicles may not use it." },
      sign: "S-35" },
    { es: "Un turismo con el distintivo ambiental de la imagen, clasificado como ECO, ¿está autorizado a circular por el carril VAO si su único ocupante es el conductor?",
      prompt: { ru: "Легковой автомобиль с экологической наклейкой ECO, как на картинке: может ли он ехать по полосе VAO, если в нём только водитель?", en: "A car with the ECO environmental label shown: may it use the VAO lane if the driver is the only occupant?" },
      options: [
        { es: "Sí, siempre que lleve el distintivo adhesivo en el parabrisas.", ru: "Да, если наклейка есть на лобовом стекле.", en: "Yes, as long as the sticker is on the windscreen." },
        { es: "No, salvo que por los paneles de mensaje variable se autorice su acceso.", ru: "Нет, если только въезд не разрешён табло переменной информации.", en: "No, unless variable message signs authorise it." },
        { es: "Sí, aunque no lleve el distintivo adhesivo en el parabrisas.", ru: "Да, даже без наклейки на стекле.", en: "Yes, even without the sticker on the windscreen." }
      ],
      answer: 1,
      explain: { ru: "Машина ECO с одним человеком может ехать по VAO, только если это разрешено на табло переменной информации.", en: "An ECO car with only the driver may use the VAO lane only when variable message signs allow it." } },
    { es: "Esta señal indica…",
      prompt: { ru: "Этот знак показывает…", en: "This sign indicates…" },
      options: [
        { es: "la proximidad de un lugar en el que se puede efectuar un cambio de sentido al mismo nivel.", ru: "приближение к месту, где можно развернуться на одном уровне.", en: "the approach to a place where you can make a U-turn at the same level." },
        { es: "la proximidad de un lugar donde se puede cambiar de dirección.", ru: "приближение к месту, где можно повернуть.", en: "the approach to a place where you can change direction." },
        { es: "la dirección que los vehículos tienen obligación de seguir.", ru: "направление, по которому машины обязаны ехать.", en: "the direction vehicles must follow." }
      ],
      answer: 0,
      explain: { ru: "Знак S-22 — место для разворота на одном уровне через указанное расстояние (S-25 — на разных уровнях).", en: "Sign S-22 shows a same-level U-turn point at the given distance (S-25 is a grade-separated one)." },
      sign: "S-22" },
    { es: "El conductor de una motocicleta, ¿tiene permitido realizar una parada en un carril reservado para autobuses?",
      prompt: { ru: "Можно ли мотоциклисту остановиться на полосе для автобусов?", en: "May a motorcyclist stop in a bus lane?" },
      options: [
        { es: "Sí, mientras no obstaculice la circulación de autobuses.", ru: "Да, если он не мешает автобусам.", en: "Yes, as long as it does not obstruct buses." },
        { es: "No, está prohibido.", ru: "Нет, запрещено.", en: "No, it is forbidden." },
        { es: "Está permitido parar, pero no estacionar.", ru: "Остановиться можно, стоять нельзя.", en: "Stopping is allowed, parking is not." }
      ],
      answer: 1,
      explain: { ru: "На полосах для автобусов запрещены и остановка, и стоянка (RGC, ст. 91).", en: "Both stopping and parking are forbidden in bus lanes (RGC art. 91)." } },
    { es: "¿Puede incorporarse a la circulación desde un estacionamiento circulando marcha atrás?",
      prompt: { ru: "Можно ли выехать с места стоянки задним ходом?", en: "May you pull out from a parking space in reverse?" },
      options: [
        { es: "Sí, mientras no invada un cruce de vías.", ru: "Да, если не заезжать на перекрёсток.", en: "Yes, as long as you do not enter a junction." },
        { es: "Sí, mientras que el recorrido no sea superior a 20 metros.", ru: "Да, если расстояние не больше 20 метров.", en: "Yes, as long as the distance does not exceed 20 metres." },
        { es: "Sí, aunque el recorrido sea superior a 20 metros.", ru: "Да, даже если расстояние больше 20 метров.", en: "Yes, even if the distance exceeds 20 metres." }
      ],
      answer: 0,
      explain: { ru: "Задним ходом можно ехать не больше 15 м и без заезда на перекрёсток (RGC, ст. 80).", en: "Reversing is limited to 15 m and you may not enter a junction (RGC art. 80)." } },
    { es: "La distancia de frenado está determinada por...",
      prompt: { ru: "Тормозной путь определяется…", en: "Braking distance depends on…" },
      options: [
        { es: "un único factor, la velocidad a la que se circula.", ru: "одним фактором — скоростью.", en: "a single factor, the speed." },
        { es: "varios factores, como la velocidad, el estado de la vía o el del vehículo.", ru: "несколькими факторами: скоростью, состоянием дороги, машины.", en: "several factors, such as speed and the state of the road and the vehicle." },
        { es: "un único factor, el estado del vehículo.", ru: "одним фактором — состоянием машины.", en: "a single factor, the condition of the vehicle." }
      ],
      answer: 1,
      explain: { ru: "На тормозной путь влияют скорость, сцепление и покрытие, состояние шин и тормозов, загрузка.", en: "Braking distance depends on speed, grip and surface, the state of tyres and brakes, and the load." } },
    { es: "Si tiene un accidente y no lleva puesto el cinturón de seguridad, las posibilidades de resultar muerto en el siniestro son casi el doble en...",
      prompt: { ru: "Если вы попали в аварию без ремня, вероятность погибнуть почти вдвое выше на…", en: "If you have an accident without a seat belt, your chance of being killed is almost double in…" },
      options: [
        { es: "la plaza del conductor, únicamente.", ru: "месте водителя, только.", en: "the driver's seat only." },
        { es: "las plazas delanteras, únicamente.", ru: "передних местах, только.", en: "the front seats only." },
        { es: "todas las plazas del vehículo.", ru: "всех местах машины.", en: "every seat of the vehicle." }
      ],
      answer: 2,
      explain: { ru: "Ремень спасает на всех местах: непристёгнутый сзади ещё и опасен для тех, кто спереди.", en: "The belt saves lives in every seat: an unbelted rear passenger also endangers those in front." } },
    { es: "En un turismo, ¿es obligatorio llevar dos chalecos reflectantes, uno para el conductor del vehículo y otro para su acompañante?",
      prompt: { ru: "Обязательно ли возить в легковом автомобиле два светоотражающих жилета — для водителя и пассажира?", en: "In a car, is it compulsory to carry two reflective vests, one for the driver and one for the passenger?" },
      options: [
        { es: "Sólo es obligatorio en motocicletas, pero no en turismos.", ru: "Это обязательно только для мотоциклов.", en: "It is only compulsory on motorcycles." },
        { es: "Sí, se debe llevar un chaleco por cada plaza del vehículo.", ru: "Да, по жилету на каждое место.", en: "Yes, one vest for each seat." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 2,
      explain: { ru: "Обязателен один жилет для водителя; больше — рекомендация.", en: "One vest for the driver is compulsory; more are only recommended." } },
    { es: "Si una intersección con prioridad de paso está saturada y es previsible que se quede detenido sin terminar de atravesarla, impidiendo la circulación transversal, ¿qué debe hacer?",
      prompt: { ru: "Если перекрёсток, где у вас приоритет, забит, и вы, вероятно, застрянете на нём, перекрыв поперечное движение, что делать?", en: "If a junction where you have priority is jammed and you will probably stop in it, blocking crossing traffic, what should you do?" },
      options: [
        { es: "Entrar en la intersección, porque tiene prioridad de paso.", ru: "Въехать, ведь у вас приоритет.", en: "Enter it, because you have priority." },
        { es: "Tocar el claxon con insistencia hasta que los otros conductores le dejen pasar.", ru: "Сигналить, пока вас не пропустят.", en: "Sound the horn insistently until others let you through." },
        { es: "No entrar en la intersección.", ru: "Не въезжать на перекрёсток.", en: "Not enter the junction." }
      ],
      answer: 2,
      explain: { ru: "Нельзя въезжать на перекрёсток, если рискуешь там остановиться, даже имея приоритет (RGC, ст. 59).", en: "Do not enter a junction if you might stop in it, even with priority (RGC art. 59)." } },
    { es: "Una luz roja intermitente o dos luces rojas alternativamente intermitentes de un semáforo...",
      prompt: { ru: "Мигающий красный или два попеременно мигающих красных сигнала светофора…", en: "A flashing red light or two alternately flashing red lights…" },
      options: [
        { es: "permiten el paso con precaución.", ru: "разрешают проезд с осторожностью.", en: "allow you through with care." },
        { es: "prohíben temporalmente el paso.", ru: "временно запрещают проезд.", en: "temporarily forbid passing." },
        { es: "obligan a moderar la velocidad antes de pasar.", ru: "обязывают снизить скорость перед проездом.", en: "oblige you to slow down before passing." }
      ],
      answer: 1,
      explain: { ru: "Мигающий красный (у переездов, мостов, выездов спецмашин) запрещает проезд, пока он горит (RGC, ст. 146).", en: "A flashing red light (at level crossings, bridges, emergency exits) forbids passing while lit (RGC art. 146)." } },
    { es: "En general, un conductor que sufre un trastorno depresivo...",
      prompt: { ru: "Как правило, водитель с депрессивным расстройством…", en: "In general, a driver suffering from a depressive disorder…" },
      options: [
        { es: "recoge mejor la información relevante, especialmente en un entorno de tráfico complejo.", ru: "лучше воспринимает важную информацию, особенно в сложном движении.", en: "picks up relevant information better, especially in complex traffic." },
        { es: "es más fácil que se distraiga y que sufra somnolencia.", ru: "легче отвлекается и страдает от сонливости.", en: "is more easily distracted and drowsy." },
        { es: "se concentra con mayor facilidad.", ru: "легче сосредоточивается.", en: "concentrates more easily." }
      ],
      answer: 1,
      explain: { ru: "Депрессия и многие антидепрессанты снижают внимание и вызывают сонливость.", en: "Depression and many antidepressants reduce attention and cause drowsiness." } },
    { es: "En esta vía de doble sentido, ¿qué vehículos deben guardar una separación mínima de 50 metros con el vehículo de delante cuando no pretendan adelantar?",
      prompt: { ru: "На этой дороге с двусторонним движением каким машинам нужно держать не менее 50 м до передней машины, если они не собираются обгонять?", en: "On this two-way road, which vehicles must keep at least 50 metres from the vehicle ahead when not intending to overtake?" },
      options: [
        { es: "Todos los camiones, con independencia de su M.M.A.", ru: "Всем грузовикам, независимо от массы.", en: "All lorries, whatever their MAM." },
        { es: "Los conjuntos de vehículos de más de 10 metros de longitud.", ru: "Составам длиннее 10 метров.", en: "Vehicle combinations over 10 metres long." },
        { es: "Los turismos.", ru: "Легковым автомобилям.", en: "Cars." }
      ],
      answer: 1,
      explain: { ru: "Грузовики свыше 3500 кг и составы длиннее 10 м держат 50 м, чтобы их можно было обгонять (RGC, ст. 54).", en: "Lorries over 3,500 kg and combinations over 10 m keep 50 m so others can overtake them (RGC art. 54)." } },
    { es: "En un turismo de nueve plazas, incluida la del conductor, ¿pueden viajar nueve menores de edad?",
      prompt: { ru: "Могут ли в легковом автомобиле на девять мест, включая водителя, ехать девять несовершеннолетних?", en: "In a nine-seat car, driver's seat included, may nine minors travel?" },
      options: [
        { es: "No, porque se supera el número de plazas autorizado.", ru: "Нет, потому что превышено разрешённое число мест.", en: "No, because the authorised number of seats would be exceeded." },
        { es: "Sólo si los niños son menores de 12 años.", ru: "Только если детям меньше 12 лет.", en: "Only if the children are under 12." },
        { es: "Sí, siempre que el conductor sea su padre, madre o tutor.", ru: "Да, если водитель — их отец, мать или опекун.", en: "Yes, as long as the driver is their father, mother or guardian." }
      ],
      answer: 0,
      explain: { ru: "Девять детей и водитель — это десять человек на девяти местах; число людей не может превышать число мест.", en: "Nine children plus the driver is ten people in nine seats; occupants may not exceed seats." } },
    { es: "¿Qué puede verse afectado si cambia el carenado de una motocicleta?",
      prompt: { ru: "Что может измениться, если поменять обтекатель (carenado) мотоцикла?", en: "What can be affected if you change a motorcycle's fairing?" },
      options: [
        { es: "La estética, exclusivamente.", ru: "Только внешний вид.", en: "Only the appearance." },
        { es: "La aerodinámica y el consumo.", ru: "Аэродинамика и расход топлива.", en: "The aerodynamics and fuel consumption." },
        { es: "La visibilidad del vehículo.", ru: "Заметность машины.", en: "The vehicle's visibility." }
      ],
      answer: 1,
      explain: { ru: "Обтекатель влияет на сопротивление воздуха, а значит, на устойчивость и расход.", en: "The fairing affects air resistance and so stability and fuel use." } },
    { es: "¿Existe riesgo de accidente si un conductor utiliza un dispositivo de manos libres para hablar por teléfono mientras conduce?",
      prompt: { ru: "Есть ли риск аварии, если водитель говорит по телефону через громкую связь?", en: "Is there a risk of an accident if a driver uses a hands-free device to talk on the phone?" },
      options: [
        { es: "No; el dispositivo está pensado para que no exista ningún riesgo.", ru: "Нет: устройство создано, чтобы риска не было.", en: "No: the device is designed to remove any risk." },
        { es: "Sólo si la conversación dura más de cinco minutos.", ru: "Только если разговор длится дольше пяти минут.", en: "Only if the call lasts more than five minutes." },
        { es: "Sí, hay cierto riesgo porque disminuye la atención.", ru: "Да, есть некоторый риск, потому что внимание снижается.", en: "Yes, there is some risk because attention drops." }
      ],
      answer: 2,
      explain: { ru: "Громкая связь разрешена, но разговор всё равно отвлекает внимание от дороги.", en: "Hands-free is allowed, but the conversation still takes attention away from the road." } },
    { es: "¿Qué factor de riesgo ocasiona un mayor número de accidentes de tráfico?",
      prompt: { ru: "Какой фактор риска вызывает больше всего ДТП?", en: "Which risk factor causes the most road accidents?" },
      options: [
        { es: "El factor humano.", ru: "Человеческий фактор.", en: "The human factor." },
        { es: "El factor vía y su entorno.", ru: "Дорога и окружение.", en: "The road and its surroundings." },
        { es: "El factor vehículo.", ru: "Транспортное средство.", en: "The vehicle." }
      ],
      answer: 0,
      explain: { ru: "Большинство ДТП связано с человеком: отвлечение, скорость, алкоголь, усталость.", en: "Most accidents come down to people: distraction, speed, alcohol, fatigue." } },
    { es: "Como norma general, ¿cómo se denomina el tramo de carretera que discurre por poblado?",
      prompt: { ru: "Как, как правило, называется участок дороги, проходящий через населённый пункт?", en: "As a rule, what is the stretch of road that runs through a built-up area called?" },
      options: [
        { es: "Carretera convencional.", ru: "Обычная дорога (carretera convencional).", en: "Conventional road (carretera convencional)." },
        { es: "Travesía.", ru: "Travesía.", en: "Travesía." },
        { es: "Autovía.", ru: "Autovía.", en: "Autovía." }
      ],
      answer: 1,
      explain: { ru: "Travesía — участок междугородней дороги, проходящий по населённому пункту.", en: "A travesía is the stretch of an interurban road running through a town." } },
    { es: "Circula con un turismo con remolque; ¿puede entrar en una vía con esta señal?",
      prompt: { ru: "Вы едете на легковом автомобиле с прицепом. Можно ли въехать на дорогу с этим знаком?", en: "You are driving a car with a trailer. May you enter a road with this sign?" },
      options: [
        { es: "Sí, cuando el remolque tenga un solo eje.", ru: "Да, если у прицепа одна ось.", en: "Yes, if the trailer has a single axle." },
        { es: "No, con ningún vehículo que arrastre un remolque.", ru: "Нет, ни на одной машине с прицепом.", en: "No, with no vehicle towing a trailer." },
        { es: "Sí, con cualquier conjunto de vehículos.", ru: "Да, с любым составом.", en: "Yes, with any combination of vehicles." }
      ],
      answer: 0,
      explain: { ru: "Знак R-112 запрещает въезд машинам с прицепом, кроме полуприцепов и одноосных прицепов.", en: "Sign R-112 bans vehicles with a trailer, except semi-trailers and single-axle trailers." },
      sign: "R-112" },
    { es: "El consumo de cannabis afecta al comportamiento del conductor porque...",
      prompt: { ru: "Каннабис влияет на поведение водителя, потому что…", en: "Cannabis affects a driver's behaviour because it…" },
      options: [
        { es: "aumenta su nivel de atención.", ru: "повышает уровень внимания.", en: "increases his attention level." },
        { es: "aumenta su tiempo de reacción.", ru: "увеличивает время реакции.", en: "increases his reaction time." },
        { es: "disminuye la somnolencia.", ru: "уменьшает сонливость.", en: "reduces drowsiness." }
      ],
      answer: 1,
      explain: { ru: "Каннабис замедляет реакцию, ухудшает координацию и восприятие расстояний.", en: "Cannabis slows reactions and impairs coordination and judgement of distance." } },
    { es: "¿Puede adelantar en un túnel con un solo carril para cada sentido?",
      prompt: { ru: "Можно ли обгонять в туннеле с одной полосой в каждом направлении?", en: "May you overtake in a tunnel with one lane in each direction?" },
      options: [
        { es: "No, ya que su sentido de la marcha sólo dispone de un carril.", ru: "Нет, ведь в вашем направлении только одна полоса.", en: "No, because your direction has only one lane." },
        { es: "Sí, si en sentido contrario no circula ningún vehículo.", ru: "Да, если навстречу никто не едет.", en: "Yes, if nothing is coming the other way." },
        { es: "No; en los túneles siempre está prohibido adelantar.", ru: "Нет: в туннелях обгон запрещён всегда.", en: "No: overtaking is always forbidden in tunnels." }
      ],
      answer: 0,
      explain: { ru: "В туннеле обгон запрещён, если в вашем направлении одна полоса; при двух и более — разрешён (RGC, ст. 87).", en: "Overtaking in a tunnel is banned when your direction has one lane; with two or more it is allowed (RGC art. 87)." } },
    { es: "Si se ve obligado a circular con una rueda de repuesto de uso temporal o de emergencia, ¿qué debe tener en cuenta?",
      prompt: { ru: "Если приходится ехать на временном (аварийном) запасном колесе, что нужно учитывать?", en: "If you have to drive on a temporary or emergency spare wheel, what must you bear in mind?" },
      options: [
        { es: "Las indicaciones de los fabricantes de este tipo de repuestos.", ru: "Указания производителя такой запаски.", en: "The manufacturer's instructions for this kind of spare." },
        { es: "Que si está homologada su duración es la misma que la de una rueda normal.", ru: "Что сертифицированная запаска служит столько же, сколько обычное колесо.", en: "That if approved it lasts as long as a normal wheel." },
        { es: "Que su presión debe ser superior a la de las otras tres ruedas.", ru: "Что давление в ней должно быть выше, чем в трёх других колёсах.", en: "That its pressure must be higher than the other three." }
      ],
      answer: 0,
      explain: { ru: "На докатке соблюдают ограничения производителя по скорости и пробегу.", en: "On a space-saver follow the maker's speed and distance limits." } },
    { es: "Estas marcas viales azules indican...",
      prompt: { ru: "Эта синяя разметка означает…", en: "These blue road markings indicate…" },
      options: [
        { es: "la zona en que se permite estacionar, al igual que las marcas blancas.", ru: "зону, где можно стоять, как и при белой разметке.", en: "an area where parking is allowed, as with white markings." },
        { es: "que en ciertos periodos del día, la duración del estacionamiento está limitada.", ru: "что в определённые часы время стоянки ограничено.", en: "that at certain times of day parking time is limited." },
        { es: "que está prohibido estacionar.", ru: "что стоянка запрещена.", en: "that parking is forbidden." }
      ],
      answer: 1,
      explain: { ru: "Синяя разметка обозначает зону с ограниченным по времени (обычно платным) паркованием.", en: "Blue markings mark a limited-time (usually paid) parking zone." } },
    { es: "Factores variables como la cantidad y la calidad del sueño, el consumo de medicamentos sedantes o la monotonía en la conducción, ¿afectan por igual a todos los conductores?",
      prompt: { ru: "Влияют ли переменные факторы — количество и качество сна, седативные лекарства, монотонная езда — одинаково на всех водителей?", en: "Do variable factors such as the amount and quality of sleep, sedative medicines or monotonous driving affect all drivers equally?" },
      options: [
        { es: "Sólo a los conductores que circulan principalmente de noche.", ru: "Только тех, кто ездит в основном ночью.", en: "Only drivers who mostly drive at night." },
        { es: "No; el mismo factor puede afectar de manera distinta a dos personas.", ru: "Нет: один и тот же фактор может по-разному влиять на двух людей.", en: "No: the same factor may affect two people differently." },
        { es: "Sí.", ru: "Да.", en: "Yes." }
      ],
      answer: 1,
      explain: { ru: "Восприимчивость к сонливости индивидуальна: один и тот же фактор действует на людей по-разному.", en: "Susceptibility to drowsiness is individual: the same factor acts differently on different people." } },
    { es: "En vía urbana, cuando utilice el carril que más convenga a su destino, ¿puede abandonar dicho carril?",
      prompt: { ru: "В городе, используя полосу, удобную для вашего маршрута, можно ли её покинуть?", en: "In town, when using the lane best suited to your destination, may you leave it?" },
      options: [
        { es: "Sí, para prepararse a cambiar de dirección, adelantar, parar o estacionar.", ru: "Да, чтобы подготовиться к повороту, обгону, остановке или стоянке.", en: "Yes, to prepare to turn, overtake, stop or park." },
        { es: "No, en ningún caso.", ru: "Нет, ни в коем случае.", en: "No, never." },
        { es: "Sí, pero sólo para cambiar de dirección.", ru: "Да, но только для поворота.", en: "Yes, but only to turn." }
      ],
      answer: 0,
      explain: { ru: "В городе можно ехать по удобной полосе и покидать её для поворота, обгона, остановки или стоянки (RGC, ст. 33).", en: "In towns you may use the lane that suits you and leave it to turn, overtake, stop or park (RGC art. 33)." } },
    { es: "En una vía urbana, ¿debe tocar el claxon para advertir que va a realizar un adelantamiento?",
      prompt: { ru: "В городе нужно ли сигналить, чтобы предупредить об обгоне?", en: "In town, should you sound the horn to warn that you are overtaking?" },
      options: [
        { es: "Sí, salvo que se encuentre cerca de un hospital.", ru: "Да, если вы не рядом с больницей.", en: "Yes, unless near a hospital." },
        { es: "Sí, siempre que sea a intervalos cortos y el sonido no sea estridente.", ru: "Да, если сигналы короткие и не резкие.", en: "Yes, as long as it is in short, not shrill bursts." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 2,
      explain: { ru: "В населённом пункте гудок для предупреждения об обгоне запрещён; можно только чтобы избежать аварии (RGC, ст. 110).", en: "In towns the horn may not be used to announce overtaking, only to avoid an accident (RGC art. 110)." } },
    { es: "Circula con la luz de largo alcance y se acerca a un vehículo que circula a menor velocidad en su mismo sentido de la marcha; ¿debe sustituir la luz de carretera por la de corto alcance?",
      prompt: { ru: "Вы едете с дальним светом и догоняете машину, которая едет медленнее в том же направлении. Нужно ли переключиться на ближний?", en: "You are on main beam and catch up with a slower vehicle going the same way. Must you switch to dipped beam?" },
      options: [
        { es: "No, ya que no es necesario ni aconsejable.", ru: "Нет, это не нужно и не советуется.", en: "No, it is neither necessary nor advisable." },
        { es: "Sí, para evitar la posibilidad de deslumbramiento a través del espejo retrovisor.", ru: "Да, чтобы не ослепить через зеркало заднего вида.", en: "Yes, to avoid dazzling through the rear-view mirror." },
        { es: "Solo si no tiene intención de adelantar.", ru: "Только если вы не собираетесь обгонять.", en: "Only if you do not intend to overtake." }
      ],
      answer: 1,
      explain: { ru: "Дальний свет переключают на ближний и при сближении сзади, чтобы не ослеплять водителя через зеркала (RGC, ст. 100).", en: "Switch to dipped beam when close behind another vehicle too, so as not to dazzle its driver through the mirrors (RGC art. 100)." } },
    { es: "Si un conductor inicia un adelantamiento y se producen circunstancias que hacen difícil finalizar la maniobra...",
      prompt: { ru: "Если водитель начал обгон и возникли обстоятельства, мешающие его закончить…", en: "If a driver starts overtaking and circumstances arise that make it hard to finish…" },
      options: [
        { es: "debe regresar a su carril y advertirlo a los que circulen por detrás.", ru: "он должен вернуться в свою полосу и предупредить тех, кто сзади.", en: "he must return to his lane and warn those behind." },
        { es: "el conductor del vehículo adelantado está obligado a apartarse al arcén.", ru: "обгоняемый обязан съехать на обочину.", en: "the driver being overtaken must pull onto the shoulder." },
        { es: "debe acelerar y terminar la maniobra, aunque genere una situación de riesgo.", ru: "нужно ускориться и закончить манёвр, даже создав опасность.", en: "he must accelerate and finish even if it creates a risk." }
      ],
      answer: 0,
      explain: { ru: "Если обгон не удаётся, его прерывают: возвращаются в свою полосу и предупреждают тех, кто сзади (RGC, ст. 84).", en: "If overtaking cannot be completed, abort it: return to your lane and warn those behind (RGC art. 84)." } },
    { es: "¿A qué velocidad máxima tiene permitido circular un ciclomotor por esta carretera convencional con un carril para cada sentido de la circulación?",
      prompt: { ru: "С какой максимальной скоростью может ехать мопед по этой обычной дороге с одной полосой в каждом направлении?", en: "What is the maximum speed for a moped on this conventional road with one lane in each direction?" },
      options: [
        { es: "45 kilómetros por hora.", ru: "45 км/ч.", en: "45 km/h." },
        { es: "80 kilómetros por hora.", ru: "80 км/ч.", en: "80 km/h." },
        { es: "60 kilómetros por hora.", ru: "60 км/ч.", en: "60 km/h." }
      ],
      answer: 0,
      explain: { ru: "Мопед по конструкции и по правилам не может ехать быстрее 45 км/ч (RGC, ст. 48).", en: "A moped is limited by design and by the rules to 45 km/h (RGC art. 48)." } },
    { es: "¿Cuál es una de las infracciones que cometen los conductores con mayor riesgo para los peatones?",
      prompt: { ru: "Какое из нарушений водителей наиболее опасно для пешеходов?", en: "Which driver offence is among the most dangerous for pedestrians?" },
      options: [
        { es: "No respetar la prioridad en los pasos para peatones.", ru: "Не уступать на пешеходных переходах.", en: "Not respecting priority at pedestrian crossings." },
        { es: "Circular por una autovía en sentido contrario al establecido.", ru: "Ехать по autovía во встречном направлении.", en: "Driving the wrong way on an autovía." },
        { es: "No mantener la distancia de seguridad con el vehículo que circula delante.", ru: "Не держать дистанцию до передней машины.", en: "Not keeping a safe distance from the vehicle in front." }
      ],
      answer: 0,
      explain: { ru: "Многие наезды на пешеходов происходят на переходах, когда водитель не уступает.", en: "Many pedestrians are hit at crossings because drivers fail to give way." } },
    { es: "¿Quién está obligado a cuidar de que los pasajeros de un vehículo mantengan la posición adecuada para garantizar la seguridad?",
      prompt: { ru: "Кто обязан следить, чтобы пассажиры сидели правильно для безопасности?", en: "Who must make sure the passengers keep a proper position for safety?" },
      options: [
        { es: "Los pasajeros mayores de edad.", ru: "Совершеннолетние пассажиры.", en: "Adult passengers." },
        { es: "El pasajero que ocupe el asiento delantero.", ru: "Пассажир на переднем сиденье.", en: "The passenger in the front seat." },
        { es: "El conductor.", ru: "Водитель.", en: "The driver." }
      ],
      answer: 2,
      explain: { ru: "Водитель отвечает за правильное положение пассажиров и размещение предметов (RGC, ст. 18).", en: "The driver is responsible for passengers' proper position and how objects are placed (RGC art. 18)." } },
    { es: "Si un vehículo de la policía de tráfico se sitúa detrás de usted y enciende un dispositivo con una luz roja destelleante hacia delante, ¿qué debe hacer?",
      prompt: { ru: "Если полицейская машина встаёт позади вас и включает устройство с мигающим красным светом вперёд, что нужно сделать?", en: "If a traffic police vehicle gets behind you and turns on a flashing red light facing forwards, what must you do?" },
      options: [
        { es: "Detenerse y, en su caso, seguir las instrucciones del agente.", ru: "Остановиться и при необходимости выполнять указания агента.", en: "Stop and, if necessary, follow the officer's instructions." },
        { es: "Reducir la velocidad y apartarse a la derecha, para facilitar el adelantamiento.", ru: "Снизить скорость и сместиться вправо, чтобы её пропустить.", en: "Slow down and move right to let it overtake." },
        { es: "Detenerse en el lado izquierdo de la calzada, delante del vehículo policial.", ru: "Остановиться слева, впереди полицейской машины.", en: "Stop on the left of the carriageway, in front of the police vehicle." }
      ],
      answer: 0,
      explain: { ru: "Красный мигающий свет вперёд на полицейской машине позади — приказ остановиться справа.", en: "A forward-facing flashing red light on a police car behind you is an order to stop on the right." } },
    { es: "¿Es peligroso conducir cuando los rayos de sol caen de forma directa sobre los ojos del conductor?",
      prompt: { ru: "Опасно ли вести машину, когда солнце светит прямо в глаза?", en: "Is it dangerous to drive with the sun shining straight into the driver's eyes?" },
      options: [
        { es: "Sí, pero encendiendo la luz de largo alcance se mejora la visibilidad.", ru: "Да, но дальний свет улучшает видимость.", en: "Yes, but switching on main beam improves visibility." },
        { es: "No, porque al haber más luz, la visibilidad es mejor.", ru: "Нет, больше света — лучше видно.", en: "No, more light means better visibility." },
        { es: "Sí, la visión se ve afectada y es difícil distinguir lo que ocurre alrededor.", ru: "Да, зрение страдает, и трудно различить, что происходит вокруг.", en: "Yes, vision is affected and it is hard to see what is going on around." }
      ],
      answer: 2,
      explain: { ru: "Прямое солнце ослепляет, водитель щурится и устаёт; это может привести к аварии. Нужно быть особенно внимательным и осторожным.", en: "Direct sun dazzles the driver, who squints and tires; it can lead to an accident. Take extra care and attention." } },
    { es: "Cuando no se pueda posicionar el vehículo paralelo al borde de la calzada, ¿se podrá permitir la parada o el estacionamiento dejando el vehículo en otra posición?",
      prompt: { ru: "Если машину нельзя поставить параллельно краю проезжей части, можно ли разрешить остановку или стоянку в другом положении?", en: "When a vehicle cannot be placed parallel to the edge of the carriageway, may stopping or parking in another position be allowed?" },
      options: [
        { es: "Sí, cuando las características de la vía u otras circunstancias así lo aconsejen.", ru: "Да, когда это требуют особенности дороги или другие обстоятельства.", en: "Yes, when the road layout or other circumstances make it advisable." },
        { es: "Sólo si existe alguna señal que permita el estacionamiento en batería.", ru: "Только если знак разрешает стоянку «ёлочкой» или перпендикулярно.", en: "Only if a sign allows angled (battery) parking." },
        { es: "No, en ningún caso.", ru: "Нет, ни в коем случае.", en: "No, never." }
      ],
      answer: 0,
      explain: { ru: "Как правило, ставят параллельно краю, но иное положение допустимо, если этого требуют дорога или обстоятельства (RGC, ст. 92).", en: "As a rule you park parallel to the edge, but another position is allowed when the road or circumstances require (RGC art. 92)." } },
    { es: "¿Cómo debe realizarse un cambio de carril en una vía saturada?",
      prompt: { ru: "Как перестраиваться на загруженной дороге?", en: "How should you change lanes on a saturated road?" },
      options: [
        { es: "Utilizando el arcén.", ru: "Через обочину.", en: "Using the hard shoulder." },
        { es: "Advirtiéndolo con suficiente antelación.", ru: "Заранее предупредив об этом.", en: "Signalling it well in advance." },
        { es: "Realizando la maniobra rápidamente para no estorbar.", ru: "Быстро, чтобы не мешать.", en: "Doing it quickly so as not to get in the way." }
      ],
      answer: 1,
      explain: { ru: "Смену полосы показывают заранее и выполняют, только убедившись, что это безопасно.", en: "Signal a lane change well in advance and make it only after checking it is safe." } },
    { es: "¿De qué próximo peligro advierte esta señal?",
      prompt: { ru: "О какой опасности впереди предупреждает этот знак?", en: "What danger ahead does this sign warn of?" },
      options: [
        { es: "Un estrechamiento de la calzada.", ru: "О сужении проезжей части.", en: "A narrowing of the carriageway." },
        { es: "Un tramo con circulación en ambos sentidos.", ru: "Об участке с движением в обоих направлениях.", en: "A stretch with traffic in both directions." },
        { es: "Un tramo con prioridad respecto a los vehículos que circulan en sentido contrario.", ru: "Об участке с приоритетом над встречным движением.", en: "A stretch with priority over oncoming traffic." }
      ],
      answer: 1,
      explain: { ru: "Знак P-25 (две стрелки в разные стороны) — участок с двусторонним движением.", en: "Sign P-25 (two arrows in opposite directions) warns of two-way traffic." },
      sign: "P-25" },
    { es: "Para reducir el riesgo de accidente, un conductor que esté tomando medicamentos debe...",
      prompt: { ru: "Чтобы снизить риск аварии, водитель, принимающий лекарства, должен…", en: "To reduce the accident risk, a driver taking medicines should…" },
      options: [
        { es: "conocer sus posibles efectos secundarios y seguir las indicaciones del médico.", ru: "знать их возможные побочные эффекты и следовать указаниям врача.", en: "know their possible side effects and follow the doctor's advice." },
        { es: "evitar la conducción de vehículos mientras dure el tratamiento.", ru: "не водить, пока длится лечение.", en: "avoid driving throughout the treatment." },
        { es: "tomar café para combatir sus posibles efectos secundarios.", ru: "пить кофе против побочных эффектов.", en: "drink coffee to counter possible side effects." }
      ],
      answer: 0,
      explain: { ru: "Не все лекарства запрещают вождение: нужно знать их эффекты и слушать врача (на упаковке опасных — пиктограмма с машиной).", en: "Not all medicines rule out driving: know their effects and follow the doctor (risky ones carry a car pictogram)." } },
    { es: "La mayor parte de las distracciones del conductor se relacionan con...",
      prompt: { ru: "Большинство отвлечений водителя связаны с…", en: "Most driver distractions are related to…" },
      options: [
        { es: "su estado psicofísico y su comportamiento.", ru: "его состоянием и поведением.", en: "his psychophysical state and behaviour." },
        { es: "la disposición de los mandos en el vehículo.", ru: "расположением органов управления в машине.", en: "the layout of the controls in the vehicle." },
        { es: "factores externos, como la vía y su entorno.", ru: "внешними факторами — дорогой и окружением.", en: "external factors such as the road and its surroundings." }
      ],
      answer: 0,
      explain: { ru: "Чаще всего отвлекаются из-за себя: телефон, усталость, мысли, разговоры.", en: "Most distractions come from the driver: phone, fatigue, thoughts, conversations." } },
    { es: "Este conjunto de vehículos con remolque de 750 kg de M.M.A., ¿a qué velocidad puede circular como máximo por una autovía?",
      prompt: { ru: "С какой максимальной скоростью этот состав с прицепом массой 750 кг может ехать по autovía?", en: "What is the maximum speed on an autovía for this combination with a 750 kg MAM trailer?" },
      options: [
        { es: "A 100 km/h.", ru: "100 км/ч.", en: "100 km/h." },
        { es: "A 120 km/h.", ru: "120 км/ч.", en: "120 km/h." },
        { es: "A 90 km/h.", ru: "90 км/ч.", en: "90 km/h." }
      ],
      answer: 2,
      explain: { ru: "Легковые автомобили с прицепом — не больше 90 км/ч на autopista и autovía (RGC, ст. 48).", en: "Cars with a trailer may do no more than 90 km/h on autopistas and autovías (RGC art. 48)." } },
    { es: "A una ambulancia que use únicamente la señal especial luminosa, ¿se le debe ceder el paso?",
      prompt: { ru: "Нужно ли уступать дорогу «скорой», которая включила только световой сигнал?", en: "Must you give way to an ambulance using only its special light signal?" },
      options: [
        { es: "No, debe emplear de forma conjunta la señal luminosa y la acústica.", ru: "Нет, она должна одновременно включать свет и звук.", en: "No, it must use the light and sound signals together." },
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "Sí, pero sólo en vías urbanas.", ru: "Да, но только в городе.", en: "Yes, but only in towns." }
      ],
      answer: 1,
      explain: { ru: "Приоритетная машина может ехать только с маячком; уступать ей всё равно нужно (RGC, ст. 68).", en: "A priority vehicle may use only the flashing light; you must still give way (RGC art. 68)." } },
    { es: "Tomando las debidas precauciones, ¿por dónde podrá circular una persona que empuje con las manos una bicicleta cuando su tránsito por la acera sea un estorbo para los demás peatones?",
      prompt: { ru: "Соблюдая осторожность, где может идти человек, который ведёт велосипед руками, если на тротуаре он мешает пешеходам?", en: "Taking due care, where may a person pushing a bicycle by hand walk when using the footway would hinder other pedestrians?" },
      options: [
        { es: "Por la calzada, pero en ningún caso por el arcén.", ru: "По проезжей части, но не по обочине.", en: "On the carriageway, but never on the shoulder." },
        { es: "Por el arcén, pero en ningún caso por la calzada.", ru: "По обочине, но не по проезжей части.", en: "On the shoulder, but never on the carriageway." },
        { es: "Por el arcén o por la calzada.", ru: "По обочине или по проезжей части.", en: "On the shoulder or on the carriageway." }
      ],
      answer: 2,
      explain: { ru: "Пешеход с велосипедом, который мешает на тротуаре, может идти по обочине или по проезжей части (RGC, ст. 121).", en: "A pedestrian pushing a bicycle who would hinder others on the footway may use the shoulder or the carriageway (RGC art. 121)." } },
    { es: "Circular a velocidad inferior a la mínima permitida sin causa justificada, ¿es peligroso?",
      prompt: { ru: "Опасно ли ехать медленнее минимальной скорости без уважительной причины?", en: "Is it dangerous to drive below the minimum speed without a good reason?" },
      options: [
        { es: "Sí, y además está prohibido.", ru: "Да, и к тому же это запрещено.", en: "Yes, and it is also forbidden." },
        { es: "No, porque circular más despacio es siempre más seguro.", ru: "Нет, медленнее всегда безопаснее.", en: "No, because driving slower is always safer." },
        { es: "Sí, porque lo más seguro es circular a la velocidad máxima permitida.", ru: "Да, ведь безопаснее всего ехать с максимальной скоростью.", en: "Yes, because the safest is to drive at the maximum speed." }
      ],
      answer: 0,
      explain: { ru: "Слишком медленная машина вынуждает других тормозить и обгонять, поэтому это опасно и запрещено (RGC, ст. 49).", en: "A vehicle that is too slow forces others to brake and overtake, so it is dangerous and forbidden (RGC art. 49)." } },
    { es: "Este turismo circula por una autovía a 100 km/h; ¿circula a velocidad adecuada?",
      prompt: { ru: "Этот легковой автомобиль едет по autovía со скоростью 100 км/ч. Подходящая ли это скорость?", en: "This car is doing 100 km/h on an autovía. Is it driving at a suitable speed?" },
      options: [
        { es: "No, porque lo aconsejado es circular a 120 km/h.", ru: "Нет, рекомендуется 120 км/ч.", en: "No, because the advised speed is 120 km/h." },
        { es: "Sí, siempre que lo permitan las circunstancias del tráfico y de la vía.", ru: "Да, если это позволяют обстановка и дорога.", en: "Yes, as long as traffic and road conditions allow it." },
        { es: "Sí, siempre que no entorpezca la circulación.", ru: "Да, если она не мешает движению.", en: "Yes, as long as it does not hinder traffic." }
      ],
      answer: 1,
      explain: { ru: "Подходящая скорость — не выше предела и соответствующая условиям; 100 км/ч может быть подходящей.", en: "A suitable speed is within the limit and fits the conditions; 100 km/h can be suitable." } },
    { es: "Una vez abrochado el cinturón de seguridad, es aconsejable...",
      prompt: { ru: "Пристегнув ремень безопасности, рекомендуется…", en: "Once the seat belt is fastened, it is advisable to…" },
      options: [
        { es: "colocar una pinza para que quede holgado.", ru: "поставить зажим, чтобы он был свободнее.", en: "fit a clip so it stays slack." },
        { es: "comprobar que está bien colocado y ajustado al cuerpo.", ru: "проверить, что он правильно лежит и прилегает к телу.", en: "check that it is properly placed and fits snugly." },
        { es: "aflojar la zona abdominal para estar más cómodo.", ru: "ослабить поясную часть для удобства.", en: "loosen the lap part to be more comfortable." }
      ],
      answer: 1,
      explain: { ru: "Ремень должен быть натянут: плечевая лента по плечу, поясная — низко по тазу, без зажимов.", en: "The belt must be taut: shoulder strap across the shoulder, lap belt low on the hips, no clips." } },
    { es: "El conductor de la motocicleta está realizando un adelantamiento fuera de poblado; ¿qué separación lateral debe dejar con el vehículo adelantado?",
      prompt: { ru: "Мотоциклист обгоняет вне населённого пункта. Какой боковой интервал он должен оставить?", en: "The motorcyclist is overtaking outside a town. What lateral gap must he leave?" },
      options: [
        { es: "Superior a 1,50 metros.", ru: "Больше 1,50 метра.", en: "More than 1.50 metres." },
        { es: "Superior a 1,20 metros e inferior a 1,50 metros.", ru: "Больше 1,20 и меньше 1,50 метра.", en: "More than 1.20 and less than 1.50 metres." },
        { es: "La proporcional a la anchura de la vía.", ru: "Пропорциональный ширине дороги.", en: "One proportional to the width of the road." }
      ],
      answer: 0,
      explain: { ru: "Так ответил журнал: мотоцикл, обгоняющий вне населённого пункта, оставляет больше 1,5 м.", en: "The magazine's answer: a motorcycle overtaking outside towns must leave more than 1.5 m." } },
    { es: "¿Puede circular un turismo por una vía regulada con esta señal?",
      prompt: { ru: "Может ли легковой автомобиль ехать по дороге с этим знаком?", en: "May a car use a road with this sign?" },
      options: [
        { es: "No, porque es un camino reservado para animales de montura.", ru: "Нет, это дорога только для верховых животных.", en: "No, because it is a path reserved for horse riders." },
        { es: "Sí, con precaución, porque también podrían circular animales de montura.", ru: "Да, осторожно, ведь могут быть и верховые.", en: "Yes, with care, as horse riders may also be on it." },
        { es: "Sí, porque esta señal prohíbe el paso a animales de montura.", ru: "Да, ведь знак запрещает проезд верховым.", en: "Yes, because this sign bans horse riders." }
      ],
      answer: 0,
      explain: { ru: "Знак R-409 — дорога, выделенная и обязательная для всадников; другим машинам ехать по ней нельзя.", en: "Sign R-409 marks a path reserved for and compulsory for horse riders; other vehicles may not use it." },
      sign: "R-409" },
    { es: "Entre otras precauciones, ¿qué debemos hacer para compensar el riesgo que supone conducir bajo la lluvia?",
      prompt: { ru: "Среди прочего, что нужно делать, чтобы компенсировать риск езды под дождём?", en: "Among other precautions, what should we do to offset the risk of driving in the rain?" },
      options: [
        { es: "Aumentar la distancia de seguridad para evitar los alcances por pérdida de adherencia.", ru: "Увеличить дистанцию, чтобы не врезаться из-за потери сцепления.", en: "Increase the safety distance to avoid rear-ending due to loss of grip." },
        { es: "Reducir la distancia de seguridad y encender la luz de cruce para hacerse ver.", ru: "Уменьшить дистанцию и включить ближний свет, чтобы быть заметным.", en: "Reduce the safety distance and switch on dipped beam to be seen." },
        { es: "Reducir la presión de los neumáticos para mejorar la adherencia.", ru: "Снизить давление в шинах для лучшего сцепления.", en: "Lower the tyre pressure to improve grip." }
      ],
      answer: 0,
      explain: { ru: "В дождь тормозной путь длиннее, поэтому дистанцию увеличивают.", en: "In rain braking distance is longer, so increase the gap." } },
    { es: "¿Cuántas plazas, como máximo, podrá tener un vehículo de movilidad personal?",
      prompt: { ru: "Сколько мест максимум может быть у средства индивидуальной мобильности (СИМ)?", en: "What is the maximum number of seats a personal mobility vehicle may have?" },
      options: [
        { es: "Una plaza.", ru: "Одно место.", en: "One seat." },
        { es: "Dos plazas.", ru: "Два места.", en: "Two seats." },
        { es: "Una o dos plazas, depende del tipo de vehículo de movilidad personal.", ru: "Одно или два, в зависимости от типа СИМ.", en: "One or two, depending on the type of personal mobility vehicle." }
      ],
      answer: 0,
      explain: { ru: "СИМ (самокаты и т. п.) — одноместные транспортные средства; пассажиров возить нельзя.", en: "Personal mobility vehicles (e-scooters etc.) are single-seat; passengers are not allowed." } },
    { es: "¿Es recomendable la utilización de cojines en los asientos?",
      prompt: { ru: "Рекомендуется ли подкладывать подушки на сиденья?", en: "Is it advisable to use cushions on the seats?" },
      options: [
        { es: "Sí, para evitar la fatiga.", ru: "Да, чтобы меньше уставать.", en: "Yes, to avoid fatigue." },
        { es: "Sí, mejora la visibilidad y la seguridad cuando se conduce.", ru: "Да, так лучше обзор и безопаснее вести машину.", en: "Yes, it improves visibility and safety when driving." },
        { es: "No, puede afectar a la eficacia del cinturón.", ru: "Нет, это может снизить эффективность ремня безопасности.", en: "No, it can reduce the effectiveness of the seat belt." }
      ],
      answer: 2,
      explain: { ru: "Подушка под человеком меняет положение тела относительно ремня: при ударе поясная лямка может соскользнуть на живот, и ремень работает хуже.", en: "A cushion changes the body’s position relative to the belt: in a crash the lap strap can slide onto the abdomen, so the belt works less well." } },
    { es: "¿Qué sistema reduce el riesgo de bloqueo de las ruedas en caso de frenazo brusco?",
      prompt: { ru: "Какая система снижает риск блокировки колёс при резком торможении?", en: "Which system reduces the risk of the wheels locking under sudden braking?" },
      options: [
        { es: "El servofreno.", ru: "Вакуумный усилитель тормозов.", en: "The brake servo." },
        { es: "La tracción total.", ru: "Полный привод.", en: "Four-wheel drive." },
        { es: "El ABS.", ru: "ABS.", en: "ABS." }
      ],
      answer: 2,
      explain: { ru: "ABS (антиблокировочная система) не даёт колёсам заблокироваться, поэтому машина остаётся управляемой при экстренном торможении. Усилитель лишь облегчает нажатие на педаль.", en: "ABS (anti-lock braking system) stops the wheels locking, so the car can still be steered under emergency braking. The servo only makes the pedal lighter." } },
    { es: "Si por circunstancias del tráfico prevé que va a tener que reducir considerablemente la velocidad, ¿qué debe hacer?",
      prompt: { ru: "Если из-за дорожной обстановки вы предвидите, что придётся сильно снизить скорость, что нужно сделать?", en: "If traffic conditions mean you expect to have to slow down considerably, what must you do?" },
      options: [
        { es: "Circular con la marcha más corta posible.", ru: "Ехать на самой низкой передаче.", en: "Drive in the lowest possible gear." },
        { es: "Deberá advertirlo mediante el empleo reiterado de las luces de frenado.", ru: "Предупредить об этом, несколько раз включая стоп-сигналы.", en: "Warn others by repeatedly flashing the brake lights." },
        { es: "Advertirlo mediante señales acústicas.", ru: "Предупредить звуковыми сигналами.", en: "Warn others with the horn." }
      ],
      answer: 1,
      explain: { ru: "О резком замедлении предупреждают, несколько раз коротко нажимая на тормоз, чтобы мигали стоп-сигналы (RGC, ст. 109).", en: "A sharp slowdown is signalled by pressing the brake briefly several times so the brake lights flash (RGC art. 109)." } },
    { es: "En la maniobra de marcha atrás, ¿está exento el conductor del uso del cinturón de seguridad?",
      prompt: { ru: "Освобождён ли водитель от ремня безопасности при движении задним ходом?", en: "When reversing, is the driver exempt from wearing the seat belt?" },
      options: [
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "Sí, pero solo en vías urbanas.", ru: "Да, но только в городе.", en: "Yes, but only on urban roads." },
        { es: "No, debe llevarlo abrochado siempre.", ru: "Нет, он всегда должен быть пристёгнут.", en: "No, it must always be fastened." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 119: водитель может не пристёгиваться, выполняя движение задним ходом или парковку.", en: "RGC art. 119: the driver may go unbelted while reversing or parking." } },
    { es: "Para evitar ruidos excesivos e innecesarios en la conducción, se debe...",
      prompt: { ru: "Чтобы не создавать лишнего и чрезмерного шума при езде, нужно…", en: "To avoid excessive and unnecessary noise when driving, you must…" },
      options: [
        { es: "Circular con el tubo de escape libre.", ru: "Ездить с открытым выхлопом (без глушителя).", en: "Drive with an open exhaust." },
        { es: "Utilizar el claxon frecuentemente pero sin producir ruidos estridentes o notas musicales.", ru: "Часто сигналить, но без резких звуков и мелодий.", en: "Use the horn often, but without shrill sounds or tunes." },
        { es: "Cuidar de que el tubo de escape y el silenciador del vehículo estén siempre en buen estado.", ru: "Следить, чтобы выхлопная труба и глушитель всегда были исправны.", en: "Make sure the exhaust pipe and silencer are always in good condition." }
      ],
      answer: 2,
      explain: { ru: "Шум в основном идёт от выхлопа: исправный глушитель обязателен, а езда без него запрещена. Звуковой сигнал применяют только при необходимости.", en: "Most noise comes from the exhaust: a working silencer is compulsory and driving without one is banned. The horn is used only when needed." } },
    { es: "Si existe gravilla en la calzada, ¿qué se debe hacer para evitar la rotura del parabrisas?",
      prompt: { ru: "Что делать, если на дороге гравий, чтобы не разбить лобовое стекло?", en: "If there is loose gravel on the road, what should you do to avoid a broken windscreen?" },
      options: [
        { es: "Aumentar la separación con los vehículos que nos preceden.", ru: "Увеличить дистанцию до машин впереди.", en: "Increase the gap to the vehicles in front." },
        { es: "Aumentar la velocidad para disminuir los efectos del impacto.", ru: "Увеличить скорость, чтобы ослабить удар.", en: "Speed up to reduce the impact." },
        { es: "Nada, porque si el parabrisas está limpio se reduce el riesgo de rotura por gravilla.", ru: "Ничего: чистое стекло меньше бьётся гравием.", en: "Nothing: a clean windscreen is less likely to be broken by gravel." }
      ],
      answer: 0,
      explain: { ru: "Камни из-под колёс впереди идущей машины летят назад; чем больше дистанция и ниже скорость, тем меньше риск удара по стеклу.", en: "Stones thrown up by the car ahead fly backwards; a bigger gap and lower speed reduce the risk of a hit." } },
    { es: "Si mientras circula con su vehículo comienza a nevar, ¿debe extremar la precaución y reducir la velocidad?",
      prompt: { ru: "Если во время поездки начинает идти снег, нужно ли быть особенно осторожным и снизить скорость?", en: "If it starts to snow while you are driving, must you take extra care and slow down?" },
      options: [
        { es: "No, solamente cuando nieve de forma copiosa.", ru: "Нет, только при сильном снегопаде.", en: "No, only when it snows heavily." },
        { es: "Sí, y en el caso de realizar frenadas y aceleraciones lo haré de forma suave y progresiva.", ru: "Да, а тормозить и разгоняться — плавно и постепенно.", en: "Yes, and brake and accelerate smoothly and gradually." },
        { es: "Sí, y, obligatoriamente, pondré las cadenas.", ru: "Да, и обязательно надеть цепи.", en: "Yes, and you must fit chains." }
      ],
      answer: 1,
      explain: { ru: "Опаснее всего первые хлопья: снег смешивается с грязью и дорога становится скользкой. Цепи нужны, только если их требует знак или дорога заснежена.", en: "The first flakes are the most dangerous: snow mixes with dirt and the road becomes slippery. Chains are needed only when a sign requires them or the road is covered." } },
    { es: "Una correcta suspensión del vehículo sirve para:",
      prompt: { ru: "Исправная подвеска автомобиля служит для того, чтобы:", en: "A properly working suspension serves to:" },
      options: [
        { es: "Mantener el vehículo siempre en contacto con el suelo.", ru: "Колёса всегда были в контакте с дорогой.", en: "Keep the vehicle in contact with the road at all times." },
        { es: "Transmitir el giro del motor a las ruedas.", ru: "Передавать вращение двигателя на колёса.", en: "Transmit the engine’s rotation to the wheels." },
        { es: "Mantener inmovilizado el vehículo.", ru: "Удерживать автомобиль неподвижным.", en: "Keep the vehicle stationary." }
      ],
      answer: 0,
      explain: { ru: "Подвеска и амортизаторы прижимают колёса к дороге — от этого зависят сцепление, торможение и управляемость. Вращение передаёт трансмиссия.", en: "The suspension and shock absorbers keep the wheels on the road, which governs grip, braking and handling. Rotation is transmitted by the drivetrain." } },
    { es: "Si la separación entre los trazos de una línea longitudinal discontinua es sensiblemente más corta que en el caso general, anuncia...",
      prompt: { ru: "Если промежутки между штрихами прерывистой продольной линии заметно короче обычного, это предупреждает о…", en: "If the gaps between the dashes of a broken longitudinal line are noticeably shorter than usual, it warns of…" },
      options: [
        { es: "La proximidad de un tramo de vía que presenta un riesgo especial.", ru: "Приближении участка дороги с особой опасностью.", en: "An approaching stretch of road with a special hazard." },
        { es: "La proximidad de un tramo con una pendiente mayor al cinco por ciento.", ru: "Приближении участка с уклоном больше 5 %.", en: "An approaching stretch with a gradient over 5 %." },
        { es: "La proximidad de una travesía.", ru: "Приближении к проезду через населённый пункт.", en: "An approaching travesía (road through a town)." }
      ],
      answer: 0,
      explain: { ru: "Частая прерывистая линия (короткие промежутки) предупреждает об опасном участке, например о приближении сплошной линии (RGC, ст. 167, приложение о разметке).", en: "A broken line with short gaps warns of a dangerous stretch, e.g. an approaching solid line (RGC art. 167, road-marking annex)." } },
    { es: "El viento por la derecha en los adelantamientos a vehículos grandes, ¿por qué es peligroso?",
      prompt: { ru: "Почему опасен ветер справа при обгоне крупных машин?", en: "Why is wind from the right dangerous when overtaking large vehicles?" },
      options: [
        { es: "Porque frena mi vehículo y no me deja adelantar.", ru: "Он тормозит мою машину и не даёт обогнать.", en: "It slows my car and prevents me from overtaking." },
        { es: "Porque puedo perder el control del vehículo y salirme de la calzada.", ru: "Можно потерять управление и вылететь с проезжей части.", en: "I can lose control and run off the carriageway." },
        { es: "Porque no me deja ver la calzada.", ru: "Он мешает видеть дорогу.", en: "It stops me seeing the road." }
      ],
      answer: 1,
      explain: { ru: "Пока вы рядом с грузовиком, он закрывает от ветра; на выходе из его «тени» порыв резко толкает машину влево, к встречной или с дороги.", en: "While alongside the lorry you are sheltered; on leaving its ‘shadow’ the gust suddenly pushes the car sideways, towards oncoming traffic or off the road." } },
    { es: "En el carril de entrada, ¿cómo debe circular?",
      prompt: { ru: "Как нужно ехать по полосе въезда?", en: "How must you drive in the entry lane?" },
      options: [
        { es: "Deteniéndome antes de la señal.", ru: "Остановиться перед знаком.", en: "Stopping before the sign." },
        { es: "Cediendo el paso a los vehículos que circulan por la autovía.", ru: "Уступая дорогу машинам, которые едут по автомагистрали.", en: "Giving way to the vehicles travelling on the autovía." },
        { es: "Acelerando porque no estoy obligado a ceder el paso.", ru: "Ускоряясь, потому что я не обязан уступать.", en: "Accelerating, because I do not have to give way." }
      ],
      answer: 1,
      explain: { ru: "Въезжающий на главную дорогу уступает тем, кто уже по ней едет; полоса разгона нужна, чтобы набрать скорость и встроиться без помех (RGC, ст. 72).", en: "A vehicle joining the main road gives way to those already on it; the acceleration lane lets you reach speed and merge without hindering anyone (RGC art. 72)." } },
    { es: "Al cruzarse con el peatón, la distancia lateral que debe dejar el vehículo es...",
      prompt: { ru: "Какой боковой интервал должна оставлять машина, проезжая мимо пешехода?", en: "What lateral distance must a vehicle leave when passing a pedestrian?" },
      options: [
        { es: "1,50 metros, al menos.", ru: "Не менее 1,5 метра.", en: "At least 1.5 metres." },
        { es: "1 metro, al menos", ru: "Не менее 1 метра.", en: "At least 1 metre." },
        { es: "2 metros, al menos.", ru: "Не менее 2 метров.", en: "At least 2 metres." }
      ],
      answer: 0,
      explain: { ru: "При обгоне пешеходов, велосипедистов и других уязвимых участников нужен интервал не менее 1,5 м, а вне населённых пунктов — ещё и снизить скорость минимум на 20 км/ч (RGC, ст. 85.4).", en: "When overtaking pedestrians, cyclists and other vulnerable users you must leave at least 1.5 m and, outside built-up areas, also slow down by at least 20 km/h (RGC art. 85.4)." } },
    { es: "Las lámparas del automóvil deben sustituirse...",
      prompt: { ru: "Лампы автомобиля нужно менять…", en: "A car’s bulbs should be replaced…" },
      options: [
        { es: "Solamente en caso de rotura.", ru: "Только когда перегорят.", en: "Only when they break." },
        { es: "En cuanto disminuya su intensidad luminosa.", ru: "Как только снизится яркость.", en: "As soon as their brightness drops." },
        { es: "Antes de pasar la inspección técnica del vehículo.", ru: "Перед прохождением техосмотра (ITV).", en: "Before the vehicle’s technical inspection (ITV)." }
      ],
      answer: 1,
      explain: { ru: "Лампа со временем тускнеет: вы хуже видите и вас хуже видно. Менять её стоит, как только упала яркость, а не ждать, пока перегорит.", en: "A bulb dims with age: you see less and are seen less. Replace it once it dims rather than waiting for it to fail." } },
    { es: "Esta señal indica...",
      prompt: { ru: "Этот знак обозначает…", en: "This sign indicates…" },
      options: [
        { es: "Un peligro.", ru: "Опасность.", en: "A danger." },
        { es: "Una obligación.", ru: "Обязанность.", en: "An obligation." },
        { es: "Una prohibición.", ru: "Запрет.", en: "A prohibition." }
      ],
      answer: 0,
      explain: { ru: "Треугольник с красной каймой — предупреждающий знак. P-50 «Otros peligros» предупреждает об опасности, для которой нет отдельного знака (Каталог, P-50).", en: "A triangle with a red border is a warning sign. P-50 ‘Otros peligros’ warns of a hazard not covered by another sign (Catalogue, P-50)." },
      sign: "P-50" },
    { es: "La fatiga al volante es un factor de riesgo para la conducción producida por...",
      prompt: { ru: "Усталость за рулём — фактор риска, причина которого…", en: "Fatigue at the wheel is a risk factor caused by…" },
      options: [
        { es: "Conducir sin descanso durante demasiado tiempo.", ru: "Слишком долгая езда без отдыха.", en: "Driving too long without a rest." },
        { es: "Un diseño muy ergonómico del asiento.", ru: "Очень эргономичное сиденье.", en: "A very ergonomic seat design." },
        { es: "Una excesiva ventilación en el interior del vehículo.", ru: "Слишком сильная вентиляция в салоне.", en: "Too much ventilation inside the vehicle." }
      ],
      answer: 0,
      explain: { ru: "Главная причина усталости — долгая езда без перерывов. Её признаки: расплывчатое зрение, тяжесть в теле, частое моргание; отдыхать советуют каждые 2 часа или 200 км.", en: "The main cause of fatigue is driving for too long without breaks. Signs: blurred vision, heaviness, frequent blinking; a rest every 2 hours or 200 km is advised." } },
    { es: "¿Debe facilitar el paso a una ambulancia que utiliza la señal luminosa pero no la señal acústica?",
      prompt: { ru: "Нужно ли уступать дорогу скорой помощи, которая включила только световой сигнал, без звукового?", en: "Must you make way for an ambulance using its light signal but not its siren?" },
      options: [
        { es: "No, porque no circula en servicio urgente.", ru: "Нет, раз она не выполняет срочный вызов.", en: "No, because it is not on an emergency call." },
        { es: "Sí, porque está advirtiendo que circula en servicio urgente.", ru: "Да, ведь так она показывает, что едет на срочный вызов.", en: "Yes, because it is signalling that it is on an emergency call." },
        { es: "No, porque si no utiliza la señal acústica se debe a que tiene suficiente espacio para pasar.", ru: "Нет: раз нет сирены, значит, места ей хватает.", en: "No: if it is not using the siren, it has enough room to pass." }
      ],
      answer: 1,
      explain: { ru: "Спецмашина может использовать один проблесковый маячок, если сирена не нужна для безопасности; маячок уже означает срочный вызов, и ей нужно освободить путь (RGC, ст. 68–69).", en: "An emergency vehicle may use the flashing light alone when the siren is not needed for safety; the light already means an urgent call, so you must make way (RGC arts. 68–69)." } },
    { es: "¿Por dónde se debe circular en un cambio de rasante de reducida visibilidad?",
      prompt: { ru: "Как нужно ехать на переломе профиля дороги с ограниченной видимостью?", en: "How must you drive over a blind crest (cambio de rasante) with reduced visibility?" },
      options: [
        { es: "Dejando completamente libre la mitad de la calzada que corresponda a los que pueden circular en sentido contrario.", ru: "Полностью оставляя свободной половину проезжей части для встречных.", en: "Leaving the half of the carriageway for oncoming traffic completely free." },
        { es: "Por la izquierda, aunque se invada parte del centro de la calzada.", ru: "Левее, даже немного заезжая на середину.", en: "On the left, even if it means encroaching on the centre." },
        { es: "Por donde más convenga a mi destino.", ru: "Как удобнее для моего направления.", en: "Wherever suits my destination best." }
      ],
      answer: 0,
      explain: { ru: "На переломе профиля встречную машину не видно, поэтому половина дороги для встречного движения должна быть свободна полностью (RGC, ст. 29).", en: "Over a crest you cannot see oncoming vehicles, so their half of the road must be left completely clear (RGC art. 29)." } },
    { es: "Si conduciendo le sorprende una lluvia torrencial...",
      prompt: { ru: "Если во время поездки вас застал ливень…", en: "If you are caught in torrential rain while driving…" },
      options: [
        { es: "Debe estacionar en un lugar permitido y seguro, manteniendo encendidas las luces de posición.", ru: "Нужно остановиться в разрешённом и безопасном месте, не выключая габаритные огни.", en: "Park in a permitted and safe place, keeping the side lights on." },
        { es: "Debe acelerar para pasar la tormenta.", ru: "Нужно ускориться, чтобы проскочить грозу.", en: "Speed up to get past the storm." },
        { es: "Debe parar en todo caso, aunque sea en la calzada.", ru: "Нужно остановиться в любом случае, даже на проезжей части.", en: "Stop in any case, even on the carriageway." }
      ],
      answer: 0,
      explain: { ru: "Если видимость и сцепление упали настолько, что ехать опасно, нужно съехать в безопасное разрешённое место и обозначить машину габаритами, а не стоять на проезжей части.", en: "If visibility and grip are so poor that driving is dangerous, pull off into a safe permitted place and keep the side lights on — never stop on the carriageway." } },
    { es: "En el arcén de esta autovía, ¿qué le está permitido?",
      prompt: { ru: "Что разрешено на обочине этой автомагистрали (autovía)?", en: "What are you allowed to do on the hard shoulder of this autovía?" },
      options: [
        { es: "Parar para hablar por teléfono móvil.", ru: "Остановиться, чтобы поговорить по мобильному.", en: "Stop to talk on the mobile phone." },
        { es: "Inmovilizar el vehículo por emergencia o avería.", ru: "Остановить машину из-за чрезвычайной ситуации или поломки.", en: "Bring the vehicle to a halt because of an emergency or breakdown." },
        { es: "Adelantar por la derecha", ru: "Обгонять справа.", en: "Overtake on the right." }
      ],
      answer: 1,
      explain: { ru: "На автомагистралях останавливаться и стоять запрещено; обочину можно занять только в экстренном случае или при поломке (RGC, ст. 91, 94, 130).", en: "On motorways stopping and parking are banned; the hard shoulder may be used only for an emergency or breakdown (RGC arts. 91, 94, 130)." } },
    { es: "¿Está permitido circular utilizando solamente el alumbrado de posición del vehículo entre la puesta y la salida del sol?",
      prompt: { ru: "Можно ли ехать между закатом и восходом только с габаритными огнями?", en: "Is it allowed to drive between sunset and sunrise with only the side (position) lights on?" },
      options: [
        { es: "No, debe utilizarse además el alumbrado de cruce o el de carretera.", ru: "Нет, нужно включить ещё ближний или дальний свет.", en: "No, dipped or main beam must also be used." },
        { es: "Sí, en vías de poblado suficientemente iluminadas.", ru: "Да, на хорошо освещённых улицах в населённом пункте.", en: "Yes, on sufficiently lit roads in built-up areas." },
        { es: "Sí, en cualquier vía suficientemente iluminada.", ru: "Да, на любой хорошо освещённой дороге.", en: "Yes, on any sufficiently lit road." }
      ],
      answer: 0,
      explain: { ru: "В тёмное время к габаритам всегда добавляют ближний или дальний свет; на освещённых улицах — ближний (RGC, ст. 99–100).", en: "At night the side lights are always combined with dipped or main beam; on lit roads, dipped beam (RGC arts. 99–100)." } },
    { es: "¿Qué vehículos son los más afectados por el viento lateral?",
      prompt: { ru: "Какие транспортные средства сильнее всего страдают от бокового ветра?", en: "Which vehicles are most affected by crosswinds?" },
      options: [
        { es: "Los camiones.", ru: "Грузовики.", en: "Lorries." },
        { es: "Las motocicletas y los ciclomotores.", ru: "Мотоциклы и мопеды.", en: "Motorcycles and mopeds." },
        { es: "Los turismos.", ru: "Легковые автомобили.", en: "Cars." }
      ],
      answer: 1,
      explain: { ru: "Лёгким двухколёсным машинам труднее всего удерживать траекторию при порывах ветра.", en: "Light two-wheelers find it hardest to hold their line in gusts." } },
    { es: "En los vehículos no destinados exclusivamente al transporte de mercancías, ¿puede sobresalir una carga indivisible por la parte posterior?",
      prompt: { ru: "Может ли у машины, не предназначенной исключительно для перевозки грузов, неделимый груз выступать сзади?", en: "On a vehicle not intended exclusively for goods transport, may an indivisible load stick out at the rear?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, hasta un 10 por ciento de la longitud del vehículo.", ru: "Да, до 10 % длины машины.", en: "Yes, up to 10 % of the vehicle’s length." },
        { es: "Sí, hasta un 15 por ciento de la longitud del vehículo.", ru: "Да, до 15 % длины машины.", en: "Yes, up to 15 % of the vehicle’s length." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 15.3: у таких машин груз может выступать сзади на 10 % длины, а неделимый — на 15 %; выступающий груз обозначают щитком V-20.", en: "RGC art. 15.3: on such vehicles the load may protrude 10 % of the length at the rear, an indivisible load 15 %; it must carry the V-20 panel." } },
    { es: "En una travesía sin limitación específica, ¿cuál es la velocidad máxima permitida para adelantar?",
      prompt: { ru: "Какая максимальная скорость разрешена для обгона на участке дороги через населённый пункт (travesía), где нет особого ограничения?", en: "On a travesía with no specific limit, what is the maximum speed allowed for overtaking?" },
      options: [
        { es: "70 km/h.", ru: "70 км/ч.", en: "70 km/h." },
        { es: "90 km/h.", ru: "90 км/ч.", en: "90 km/h." },
        { es: "50 km/h.", ru: "50 км/ч.", en: "50 km/h." }
      ],
      answer: 2,
      explain: { ru: "Общий лимит в travesía — 50 км/ч для всех (RGC, ст. 50.5), и превышать его при обгоне нельзя: правило «+20 км/ч при обгоне» отменено в 2022 году.", en: "The general limit in a travesía is 50 km/h for all vehicles (RGC art. 50.5), and it may not be exceeded to overtake: the ‘+20 km/h when overtaking’ rule was abolished in 2022." } },
    { es: "Esta señal recomienda mantener la velocidad entre los valores indicados...",
      prompt: { ru: "Этот знак рекомендует держать скорость в указанных пределах…", en: "This sign recommends keeping your speed between the figures shown…" },
      options: [
        { es: "Siempre que las condiciones meteorológicas o ambientales sean favorables.", ru: "Если погодные условия и обстановка благоприятны.", en: "Provided the weather and environmental conditions are favourable." },
        { es: "Cuando las condiciones meteorológicas o ambientales sean desfavorables.", ru: "Если погодные условия и обстановка неблагоприятны.", en: "When the weather and environmental conditions are unfavourable." },
        { es: "En cualquier caso.", ru: "В любом случае.", en: "In any case." }
      ],
      answer: 0,
      explain: { ru: "S-9 «Intervalo aconsejado de velocidades» — рекомендация для хороших условий; в плохую погоду ехать нужно медленнее (Каталог, S-9).", en: "S-9 ‘Intervalo aconsejado de velocidades’ is a recommendation for good conditions; in bad weather you must go slower (Catalogue, S-9)." },
      sign: "S-9" },
    { es: "Bajo los efectos de la depresión...",
      prompt: { ru: "Под действием депрессии…", en: "Under the effects of depression…" },
      options: [
        { es: "Disminuyen las distracciones.", ru: "Становится меньше отвлечений.", en: "Distractions decrease." },
        { es: "Se pierde información del entorno.", ru: "Теряется информация об окружающей обстановке.", en: "Information about the surroundings is lost." },
        { es: "Se tiene más seguridad.", ru: "Появляется больше уверенности.", en: "You feel safer." }
      ],
      answer: 1,
      explain: { ru: "Депрессия снижает внимание и концентрацию: водитель хуже замечает происходящее вокруг и медленнее реагирует.", en: "Depression lowers attention and concentration: the driver notices less of what is happening and reacts more slowly." } },
    { es: "El conductor, ¿está obligado a hacer que los pasajeros mantengan la posición adecuada?",
      prompt: { ru: "Обязан ли водитель следить, чтобы пассажиры сидели правильно?", en: "Is the driver obliged to make passengers keep a proper position?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No, solo está obligado a cuidar la colocación de los objetos.", ru: "Нет, он отвечает только за размещение вещей.", en: "No, he is only responsible for how objects are placed." }
      ],
      answer: 1,
      explain: { ru: "Водитель отвечает за правильное размещение пассажиров и груза, чтобы они не мешали управлению и не создавали опасность (LSV, ст. 13; RGC, ст. 9).", en: "The driver is responsible for passengers and load being properly placed so they neither hinder driving nor create danger (LSV art. 13; RGC art. 9)." } },
    { es: "Cuando una señal vertical contradice a una señal de balizamiento fijo prevalece la señal...",
      prompt: { ru: "Если вертикальный знак противоречит постоянному направляющему устройству (balizamiento fijo), приоритет имеет…", en: "When a vertical sign contradicts a fixed beacon/marker (balizamiento fijo), which prevails?" },
      options: [
        { es: "Vertical.", ru: "Вертикальный знак.", en: "The vertical sign." },
        { es: "Más restrictiva.", ru: "Более строгий знак.", en: "The more restrictive one." },
        { es: "De balizamiento fijo.", ru: "Направляющее устройство (balizamiento fijo).", en: "The fixed beacon/marker." }
      ],
      answer: 2,
      explain: { ru: "Порядок приоритета: агенты → временная разметка и направляющие устройства → светофоры → вертикальные знаки → разметка (RGC, ст. 133).", en: "Order of precedence: officers → temporary signs and beacons/markers → traffic lights → vertical signs → road markings (RGC art. 133)." } },
    { es: "Los reflejos del sol directo sobre el conductor, ¿pueden tener un efecto negativo en la conducción?",
      prompt: { ru: "Могут ли блики прямого солнца мешать водителю?", en: "Can reflections of direct sunlight on the driver have a negative effect on driving?" },
      options: [
        { es: "Sí, por lo que debe encender la luz de largo alcance para facilitar la visibilidad.", ru: "Да, поэтому нужно включить дальний свет, чтобы лучше видеть.", en: "Yes, so you should switch on main beam to see better." },
        { es: "No, ninguno.", ru: "Нет, никак.", en: "No, none at all." },
        { es: "Sí, afectan a la visión haciendo difícil distinguir los vehículos sobre el pavimento.", ru: "Да, они мешают зрению, и машины на дороге трудно различить.", en: "Yes, they affect vision and make it hard to make out vehicles on the road." }
      ],
      answer: 2,
      explain: { ru: "Солнце слепит: водитель щурится, устают глаза, хуже видно других. Помогают солнцезащитный козырёк, очки, меньшая скорость и большая дистанция.", en: "The sun dazzles: you squint, your eyes tire and you see others less well. Use the visor and sunglasses, slow down and keep a longer gap." } },
    { es: "¿Qué sistemas de seguridad pueden perder eficacia si no se lleva abrochado el cinturón de seguridad?",
      prompt: { ru: "Какие системы безопасности теряют эффективность, если не пристегнуться?", en: "Which safety systems may lose effectiveness if the seat belt is not fastened?" },
      options: [
        { es: "Los frenos y el ABS.", ru: "Тормоза и ABS.", en: "The brakes and ABS." },
        { es: "La suspensión y los amortiguadores.", ru: "Подвеска и амортизаторы.", en: "The suspension and shock absorbers." },
        { es: "Los airbag y los reposacabezas.", ru: "Подушки безопасности и подголовники.", en: "The airbags and head restraints." }
      ],
      answer: 2,
      explain: { ru: "Подушки и подголовники рассчитаны на пристёгнутого человека; без ремня тело летит вперёд и может удариться о раскрывающуюся подушку.", en: "Airbags and head restraints are designed for a belted occupant; unbelted, the body flies forward and may hit the deploying airbag." } },
    { es: "Una marca longitudinal formada por dos líneas continuas adosadas...",
      prompt: { ru: "Продольная разметка из двух сплошных линий рядом…", en: "A longitudinal marking made of two solid lines side by side…" },
      options: [
        { es: "Tiene el mismo significado que una marca longitudinal continua.", ru: "Значит то же, что одна сплошная линия.", en: "Means the same as a single solid line." },
        { es: "Indica que circulamos por un carril reversible.", ru: "Показывает, что мы едем по реверсивной полосе.", en: "Shows we are in a reversible lane." },
        { es: "Indica que circulamos por un carril adicional circunstancial.", ru: "Показывает, что мы едем по временной дополнительной полосе.", en: "Shows we are in a temporary additional lane." }
      ],
      answer: 0,
      explain: { ru: "Двойная сплошная имеет то же значение, что и одинарная сплошная: пересекать её запрещено (RGC, ст. 167).", en: "A double solid line has the same meaning as a single solid line: crossing it is forbidden (RGC art. 167)." } },
    { es: "Si por emergencia se queda inmovilizado con su vehículo dentro de un túnel, deberá...",
      prompt: { ru: "Если из-за чрезвычайной ситуации ваша машина остановилась в тоннеле, нужно…", en: "If an emergency leaves you stopped with your vehicle inside a tunnel, you must…" },
      options: [
        { es: "Conectar la señal de emergencia y mantener encendidas las luces de cruce.", ru: "Включить аварийку и оставить ближний свет.", en: "Switch on the hazard lights and keep the dipped beam on." },
        { es: "Apagar el motor, conectar la señal de emergencia y mantener encendidas las luces de posición.", ru: "Заглушить двигатель, включить аварийку и оставить габаритные огни.", en: "Switch off the engine, switch on the hazard lights and keep the side lights on." },
        { es: "Conectar la señal de emergencia, y hacer sonar el claxon.", ru: "Включить аварийку и сигналить.", en: "Switch on the hazard lights and sound the horn." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 97.3: заглушить двигатель, включить аварийку и габариты, поставить световой знак V-16, вызвать помощь с поста SOS и пройти к убежищу или выходу.", en: "RGC art. 97.3: switch off the engine, hazard lights and side lights on, place the V-16 light, call for help from the SOS post and go to the nearest refuge or exit." } },
    { es: "El calor excesivo en el interior del vehículo, ¿puede aumentar el riesgo en la conducción?",
      prompt: { ru: "Может ли сильная жара в салоне повысить риск при вождении?", en: "Can excessive heat inside the vehicle increase the risk when driving?" },
      options: [
        { es: "Sí, porque favorece la aparición de fatiga al volante.", ru: "Да, она способствует усталости за рулём.", en: "Yes, because it encourages fatigue at the wheel." },
        { es: "No, siempre que el conductor lleve ropas ligeras.", ru: "Нет, если водитель в лёгкой одежде.", en: "No, provided the driver wears light clothes." },
        { es: "No, solamente si se conduce con las ventanillas abiertas.", ru: "Нет, только если ехать с открытыми окнами.", en: "No, only if you drive with the windows open." }
      ],
      answer: 0,
      explain: { ru: "Жара вызывает усталость и сонливость, увеличивает время реакции. В салоне советуют держать 18–24 °C, пить воду и делать перерывы.", en: "Heat brings fatigue and drowsiness and lengthens reaction time. Keep the cabin at 18–24 °C, drink water and take breaks." } },
    { es: "Para repostar carburante, ¿cómo debe actuar?",
      prompt: { ru: "Как нужно действовать при заправке топливом?", en: "How must you act when refuelling?" },
      options: [
        { es: "Solo apagar las luces.", ru: "Только выключить фары.", en: "Only switch off the lights." },
        { es: "Parar el motor, apagar las luces, los equipos eléctricos y el móvil.", ru: "Заглушить двигатель, выключить фары, электроприборы и мобильный.", en: "Switch off the engine, the lights, electrical equipment and the mobile phone." },
        { es: "Solo parar el motor y poner la primera relación de marchas.", ru: "Только заглушить двигатель и включить первую передачу.", en: "Only switch off the engine and engage first gear." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 115.3: при заправке двигатель заглушён, фары, радио и прочие электроприборы и мобильные телефоны выключены.", en: "RGC art. 115.3: when refuelling the engine must be off, and the lights, radio and other electrical systems and mobile phones switched off." } },
    { es: "En una intersección que no tiene señal de preferencia, ¿cuándo debe ceder el paso a un vehículo de tracción animal?",
      prompt: { ru: "На перекрёстке без знаков приоритета когда нужно уступить гужевой повозке?", en: "At a junction with no priority signs, when must you give way to an animal-drawn vehicle?" },
      options: [
        { es: "Cuando entra por mi derecha.", ru: "Когда она подъезжает справа.", en: "When it comes from my right." },
        { es: "Nunca, porque no es un vehículo de motor.", ru: "Никогда, ведь это не механическое транспортное средство.", en: "Never, because it is not a motor vehicle." },
        { es: "Siempre, porque tienen preferencia.", ru: "Всегда, у них преимущество.", en: "Always, they have priority." }
      ],
      answer: 0,
      explain: { ru: "На нерегулируемом перекрёстке действует общее правило «помеха справа» для всех транспортных средств, включая гужевые (RGC, ст. 57).", en: "At an unmarked junction the general ‘give way to the right’ rule applies to every vehicle, animal-drawn ones included (RGC art. 57)." } },
    { es: "¿Cuál es la misión principal del líquido refrigerante?",
      prompt: { ru: "Какая главная задача охлаждающей жидкости?", en: "What is the main job of the coolant?" },
      options: [
        { es: "Que el vehículo tenga calefacción.", ru: "Чтобы в машине работала печка.", en: "To give the vehicle heating." },
        { es: "Que el vehículo tenga aire acondicionado.", ru: "Чтобы работал кондиционер.", en: "To give the vehicle air conditioning." },
        { es: "Enfriar el motor del vehículo.", ru: "Охлаждать двигатель.", en: "To cool the engine." }
      ],
      answer: 2,
      explain: { ru: "Охлаждающая жидкость отводит тепло от двигателя; печка лишь использует это тепло попутно.", en: "Coolant carries heat away from the engine; the heater merely uses that heat on the side." } },
    { es: "El carril que se observa a la izquierda está abierto para circular en sentido contrario. ¿Cuál es la velocidad máxima permitida en ese carril?",
      prompt: { ru: "Полоса слева открыта для движения во встречном направлении. Какая максимальная скорость на этой полосе?", en: "The lane on the left is open for traffic in the opposite direction to usual. What is the maximum speed in that lane?" },
      options: [
        { es: "100 kilómetros por hora", ru: "100 км/ч.", en: "100 km/h." },
        { es: "90 kilómetros por hora", ru: "90 км/ч.", en: "90 km/h." },
        { es: "80 kilómetros por hora", ru: "80 км/ч.", en: "80 km/h." }
      ],
      answer: 2,
      explain: { ru: "На полосах, открытых для движения во встречном направлении, — не больше 80 и не меньше 60 км/ч (если не указано иное), днём и ночью с ближним светом (RGC, ст. 41).", en: "In lanes opened in the opposite direction to usual: maximum 80 and minimum 60 km/h (unless signed otherwise), with dipped beam day and night (RGC art. 41)." } },
    { es: "Por el \"carril BUS\", ¿se puede circular para adelantar?",
      prompt: { ru: "Можно ли выезжать на полосу для автобусов («carril BUS»), чтобы обогнать?", en: "May you use the bus lane to overtake?" },
      options: [
        { es: "No, porque está prohibido.", ru: "Нет, это запрещено.", en: "No, it is forbidden." },
        { es: "Sí, pero debo adelantar rápidamente.", ru: "Да, но обгонять надо быстро.", en: "Yes, but I must overtake quickly." },
        { es: "Sí, cuando no circulan autobuses cerca.", ru: "Да, если рядом нет автобусов.", en: "Yes, when there are no buses nearby." }
      ],
      answer: 0,
      explain: { ru: "Полоса для автобусов предназначена только для них; другим машинам можно лишь пересечь её для поворота, если линия прерывистая, но не для обгона (Каталог, S-51a).", en: "A bus lane is reserved for buses; other vehicles may only cross it to turn where the line is broken, never to overtake (Catalogue, S-51a)." } },
    { es: "Circular demasiado cerca del vehículo de delante, ¿puede ser peligroso?",
      prompt: { ru: "Опасно ли ехать слишком близко к машине впереди?", en: "Can driving too close to the vehicle in front be dangerous?" },
      options: [
        { es: "Sí, por el riesgo de alcance en caso de frenada.", ru: "Да, при торможении можно врезаться сзади.", en: "Yes, because of the risk of a rear-end collision if it brakes." },
        { es: "No, cuando los frenos de mi vehículo estén en buen estado.", ru: "Нет, если у моей машины исправные тормоза.", en: "No, if my brakes are in good condition." },
        { es: "No, cuando circule a la misma velocidad que el vehículo de delante.", ru: "Нет, если я еду с той же скоростью.", en: "No, if I am going at the same speed as the vehicle in front." }
      ],
      answer: 0,
      explain: { ru: "Дистанция нужна, чтобы успеть среагировать и остановиться, если передний затормозит (RGC, ст. 54).", en: "The gap gives you time to react and stop if the car ahead brakes (RGC art. 54)." } },
    { es: "La influencia del factor de riesgo del vehículo, ¿cómo se puede disminuir?",
      prompt: { ru: "Как можно уменьшить влияние фактора риска «транспортное средство»?", en: "How can the influence of the ‘vehicle’ risk factor be reduced?" },
      options: [
        { es: "Revisando y manteniendo el vehículo.", ru: "Проверяя и обслуживая машину.", en: "By checking and maintaining the vehicle." },
        { es: "Manteniendo limpio el motor.", ru: "Держа двигатель в чистоте.", en: "By keeping the engine clean." },
        { es: "Regulando bien la posición del asiento del conductor.", ru: "Правильно отрегулировав сиденье водителя.", en: "By adjusting the driver’s seat correctly." }
      ],
      answer: 0,
      explain: { ru: "Исправные тормоза, шины, свет и подвеска — главный способ снизить риск со стороны машины; регулярное обслуживание и ITV.", en: "Sound brakes, tyres, lights and suspension are the main way to reduce vehicle risk: regular servicing and the ITV." } },
    { es: "El inflado correcto de los neumáticos es el...",
      prompt: { ru: "Правильное давление в шинах — это…", en: "The correct tyre pressure is…" },
      options: [
        { es: "Recomendado por el fabricante en cada caso.", ru: "Рекомендованное производителем для каждого случая.", en: "The one recommended by the manufacturer for each case." },
        { es: "Superior al recomendado por el fabricante en un 20%.", ru: "На 20 % выше рекомендованного производителем.", en: "20 % above the manufacturer’s recommendation." },
        { es: "Adecuado a la forma de conducir de cada persona.", ru: "Подходящее к стилю вождения каждого.", en: "Whatever suits each person’s driving style." }
      ],
      answer: 0,
      explain: { ru: "Давление берут из таблицы производителя (на стойке двери или в руководстве), с учётом загрузки; проверяют на холодных шинах.", en: "Use the manufacturer’s figures (door pillar or handbook), taking the load into account; check with cold tyres." } },
    { es: "¿A qué altura debe quedar la parte central del reposacabezas?",
      prompt: { ru: "На какой высоте должна быть средняя часть подголовника?", en: "At what height should the centre of the head restraint be?" },
      options: [
        { es: "A la altura de los ojos.", ru: "На уровне глаз.", en: "At eye level." },
        { es: "A la altura del cuello.", ru: "На уровне шеи.", en: "At neck level." },
        { es: "Es indiferente la altura del reposacabezas.", ru: "Высота подголовника не имеет значения.", en: "The height does not matter." }
      ],
      answer: 0,
      explain: { ru: "Подголовник защищает шею при ударе сзади, только если его центр примерно на уровне глаз и он близко к затылку.", en: "A head restraint protects the neck in a rear impact only if its centre is roughly at eye level and close to the back of the head." } },
    { es: "Es obligatorio el uso del alumbrado para los turismos...",
      prompt: { ru: "Легковые автомобили обязаны включать фары…", en: "Cars must use their lights…" },
      options: [
        { es: "Entre la puesta y la salida del sol.", ru: "Между закатом и восходом солнца.", en: "Between sunset and sunrise." },
        { es: "Durante el día al cruzar un paso a nivel.", ru: "Днём при пересечении железнодорожного переезда.", en: "During the day when crossing a level crossing." },
        { es: "Durante el día en travesías de poblaciones.", ru: "Днём на участках через населённые пункты.", en: "During the day in travesías." }
      ],
      answer: 0,
      explain: { ru: "Освещение обязательно от заката до восхода, а также в тоннелях и при плохой видимости (RGC, ст. 98–99, 106).", en: "Lights are compulsory from sunset to sunrise, and also in tunnels and in poor visibility (RGC arts. 98–99, 106)." } },
    { es: "Un vehículo que circula por un carril adicional, ¿está obligado a llevar algún tipo de alumbrado?",
      prompt: { ru: "Обязана ли машина на временной дополнительной полосе включать какой-то свет?", en: "Must a vehicle in an additional lane use any lights?" },
      options: [
        { es: "Sí, la luz de corto alcance.", ru: "Да, ближний свет.", en: "Yes, dipped beam." },
        { es: "Sí, la luz de corto alcance, pero no está obligado cuando circula de día.", ru: "Да, ближний свет, но днём не обязательно.", en: "Yes, dipped beam, but not during the day." },
        { es: "Sí, luces de posición.", ru: "Да, габаритные огни.", en: "Yes, side lights." }
      ],
      answer: 0,
      explain: { ru: "На реверсивной, временной дополнительной или встречной полосе ближний свет обязателен днём и ночью (RGC, ст. 42 и 104).", en: "In a reversible, temporary additional or contraflow lane dipped beam is compulsory day and night (RGC arts. 42 and 104)." } },
    { es: "Un turismo de nueva matriculación de uso privado, ¿cuándo deberá pasar la próxima inspección técnica del vehículo?",
      prompt: { ru: "Когда новый легковой автомобиль частного пользования должен пройти первый техосмотр (ITV)?", en: "When must a newly registered private car take its first technical inspection (ITV)?" },
      options: [
        { es: "A los 3 años desde la fecha de expedición de la Tarjeta de Inspección Técnica.", ru: "Через 3 года с даты выдачи карточки техосмотра.", en: "3 years from the date the inspection card was issued." },
        { es: "A los 5 años.", ru: "Через 5 лет.", en: "After 5 years." },
        { es: "A los 4 años desde la fecha de matriculación.", ru: "Через 4 года с даты регистрации.", en: "4 years from the date of registration." }
      ],
      answer: 2,
      explain: { ru: "Легковой автомобиль частного пользования: первый ITV через 4 года, затем каждые 2 года, после 10 лет — ежегодно (RD 920/2017).", en: "Private car: first ITV at 4 years, then every 2 years, and yearly after 10 years (RD 920/2017)." } },
    { es: "La señal indica que el carril derecho ...",
      prompt: { ru: "Знак показывает, что правой полосой…", en: "The sign indicates that the right-hand lane…" },
      options: [
        { es: "Sólo pueden utilizarlo los ciclos.", ru: "Могут пользоваться только велосипеды.", en: "May be used only by cycles." },
        { es: "Es obligatorio para los vehículos de dos ruedas.", ru: "Обязаны пользоваться двухколёсные транспортные средства.", en: "Is compulsory for two-wheeled vehicles." },
        { es: "Es obligatorio para bicicletas, pudiendo ser utilizado por otros usuarios.", ru: "Обязаны пользоваться велосипеды, но могут и другие.", en: "Is compulsory for bicycles but may be used by others." }
      ],
      answer: 0,
      explain: { ru: "S-64b: велосипедисты обязаны ехать по этой полосе, а остальным пользоваться ею запрещено (Каталог, S-64b).", en: "S-64b: cyclists must use this lane and other road users may not (Catalogue, S-64b)." },
      sign: "S-64b" },
    { es: "¿Es recomendable hacer una puesta a punto del vehículo después de las vacaciones estivales?",
      prompt: { ru: "Стоит ли проверить машину после летнего отпуска?", en: "Is it advisable to service the vehicle after the summer holidays?" },
      options: [
        { es: "No, si se ha hecho antes del periodo vacacional.", ru: "Нет, если её проверяли перед отпуском.", en: "No, if it was done before the holiday." },
        { es: "Sí, sobre todo si ha estado en zona de playa porque la arena y la sal pueden acelerar la aparición de puntos de corrosión en la carrocería.", ru: "Да, особенно если она стояла у моря: песок и соль ускоряют коррозию кузова.", en: "Yes, especially if it was near the beach, since sand and salt can speed up corrosion of the bodywork." },
        { es: "Solo es recomendable revisar la presión de los neumáticos si ha realizado muchos kilómetros.", ru: "Нужно проверить только давление в шинах, если проехали много километров.", en: "Only the tyre pressure needs checking if you have driven many kilometres." }
      ],
      answer: 1,
      explain: { ru: "После отпуска полезно помыть машину, проверить уровни жидкостей, шины и щётки стеклоочистителя: солнце, песок и соль им вредят.", en: "After the holidays wash the car and check fluid levels, tyres and wiper blades: sun, sand and salt damage them." } },
    { es: "¿De qué peligro nos advierte esta señal?",
      prompt: { ru: "О какой опасности предупреждает этот знак?", en: "What danger does this sign warn of?" },
      options: [
        { es: "Obstrucción en la calzada.", ru: "Препятствие на проезжей части.", en: "An obstruction on the carriageway." },
        { es: "Escalón lateral", ru: "Боковой уступ.", en: "A side drop." },
        { es: "Pavimento deslizante", ru: "Скользкое покрытие.", en: "A slippery surface." }
      ],
      answer: 0,
      explain: { ru: "P-32 «Obstrucción en la calzada»: впереди машины, перегородившие дорогу из-за аварии или поломки (Каталог, P-32).", en: "P-32 ‘Obstrucción en la calzada’: vehicles blocking the road ahead after a breakdown or crash (Catalogue, P-32)." },
      sign: "P-32" },
    { es: "Para ahorrar carburante debo...",
      prompt: { ru: "Чтобы экономить топливо, нужно…", en: "To save fuel I should…" },
      options: [
        { es: "Circular más cerca del vehículo que va delante para disminuir la resistencia del aire.", ru: "Ехать ближе к машине впереди, чтобы меньше сопротивление воздуха.", en: "Drive closer to the vehicle ahead to reduce air resistance." },
        { es: "Conducir con suavidad, sin frenazos ni acelerones.", ru: "Ехать плавно, без резких торможений и ускорений.", en: "Drive smoothly, without harsh braking or acceleration." },
        { es: "Mantener la velocidad lo más elevada y constante posible.", ru: "Держать скорость как можно выше и постоянной.", en: "Keep the speed as high and constant as possible." }
      ],
      answer: 1,
      explain: { ru: "Экономичное вождение — плавные разгоны и торможения, высокая передача и умеренная постоянная скорость; езда вплотную опасна.", en: "Eco-driving means smooth acceleration and braking, high gears and a moderate steady speed; tailgating is dangerous." } },
    { es: "Marcas blancas y rojas de la calzada, ¿qué indican?",
      prompt: { ru: "Что означает бело-красная разметка на проезжей части?", en: "What do red and white markings on the carriageway indicate?" },
      options: [
        { es: "Una zona reservada para la salida de competiciones de coches.", ru: "Зону старта автогонок.", en: "An area reserved for the start of car races." },
        { es: "Una zona reservada para el estacionamiento de camiones.", ru: "Зону стоянки грузовиков.", en: "An area reserved for parking lorries." },
        { es: "Una zona reservada para frenado de emergencia, donde no puedo parar ni estacionar.", ru: "Зону аварийного торможения, где нельзя останавливаться и стоять.", en: "An emergency braking area, where you may not stop or park." }
      ],
      answer: 2,
      explain: { ru: "Бело-красная «шахматка» (M-7.11) отмечает въезд на аварийную тормозную площадку; останавливаться и стоять там нельзя (RGC, приложение о разметке).", en: "The red-and-white chequer (M-7.11) marks the start of an emergency escape lane; stopping and parking there are forbidden (RGC, road-marking annex)." } },
    { es: "Con la lluvia se forma una capa de agua que crea un mayor peligro por...",
      prompt: { ru: "В дождь на дороге образуется слой воды, который особенно опасен из-за…", en: "In rain a film of water forms that is especially dangerous because of…" },
      options: [
        { es: "La posible falta de adherencia de los neumáticos al pavimento.", ru: "Возможной потери сцепления шин с дорогой.", en: "The possible loss of tyre grip on the road surface." },
        { es: "El calentamiento de los frenos al mojarse.", ru: "Нагрева тормозов, когда они намокают.", en: "The brakes heating up when they get wet." },
        { es: "No se crea ningún peligro por que el agua refrigera los neumáticos y frenan mejor.", ru: "Опасности нет: вода охлаждает шины, и они лучше тормозят.", en: "There is no danger, because the water cools the tyres and they brake better." }
      ],
      answer: 0,
      explain: { ru: "Вода уменьшает сцепление, а на скорости может возникнуть аквапланирование: тормозной путь растёт.", en: "Water reduces grip and at speed can cause aquaplaning: stopping distances grow." } },
    { es: "Ante un paso para peatones señalizado con marca vial solamente, ¿cuándo hay que detenerse?",
      prompt: { ru: "Когда нужно остановиться перед пешеходным переходом, обозначенным только разметкой?", en: "At a pedestrian crossing marked only by road markings, when must you stop?" },
      options: [
        { es: "Cuando el peatón ya está atravesándolo, pero no cuando sólo demuestra su intención de hacerlo.", ru: "Когда пешеход уже переходит, но не когда только собирается.", en: "When the pedestrian is already crossing, but not when he only shows the intention to." },
        { es: "Sólo cuando lo indique un agente.", ru: "Только по указанию регулировщика.", en: "Only when an officer says so." },
        { es: "Siempre que un peatón esté atravesándolo o demuestre su intención de hacerlo.", ru: "Всегда, когда пешеход переходит или явно собирается перейти.", en: "Whenever a pedestrian is crossing or shows the intention to cross." }
      ],
      answer: 2,
      explain: { ru: "На нерегулируемом переходе пешеход имеет преимущество: нужно остановиться, если он уже идёт или явно собирается идти (RGC, ст. 65).", en: "At an uncontrolled crossing pedestrians have priority: stop if one is crossing or clearly about to (RGC art. 65)." } },
    { es: "¿Puede afectar la carga excesiva del vehículo al correcto funcionamiento de los neumáticos?",
      prompt: { ru: "Может ли перегрузка машины повлиять на работу шин?", en: "Can overloading the vehicle affect how the tyres work?" },
      options: [
        { es: "No, en ningún caso.", ru: "Нет, никогда.", en: "No, never." },
        { es: "Sí, cuando se excede de los límites de carga permitidos.", ru: "Да, если превышены допустимые нормы загрузки.", en: "Yes, when the permitted load limits are exceeded." },
        { es: "No, si el vehículo lleva amortiguadores nuevos.", ru: "Нет, если у машины новые амортизаторы.", en: "No, if the vehicle has new shock absorbers." }
      ],
      answer: 1,
      explain: { ru: "Перегруженная шина сильнее деформируется и греется: быстрее изнашивается, хуже держит дорогу и может лопнуть.", en: "An overloaded tyre flexes and heats up more: it wears faster, grips worse and can burst." } },
    { es: "¿Es recomendable revisar el cinturón de seguridad después de sufrir un accidente?",
      prompt: { ru: "Стоит ли проверить ремень безопасности после аварии?", en: "Is it advisable to check the seat belt after an accident?" },
      options: [
        { es: "No, es un elemento de seguridad que no debe cambiarse nunca.", ru: "Нет, это элемент безопасности, его никогда не меняют.", en: "No, it is a safety item that must never be changed." },
        { es: "No, porque se ha probado su eficacia.", ru: "Нет, ведь его эффективность уже доказана.", en: "No, because its effectiveness has been proven." },
        { es: "Sí, puede haberse deteriorado el trenzado o los sistemas de anclaje.", ru: "Да, могли повредиться лента или крепления.", en: "Yes, the webbing or the anchorages may have been damaged." }
      ],
      answer: 2,
      explain: { ru: "При ударе лента растягивается, а натяжитель и крепления могут сработать или повредиться; после аварии ремень проверяют и при необходимости меняют.", en: "In a crash the webbing stretches and the pretensioner and anchorages may fire or be damaged; after an accident the belt is checked and replaced if needed." } },
    { es: "Como norma general, si circula por esta vía con una furgoneta cargada con bultos apilados, en caso de frenada de emergencia, ¿es importante a tener en cuenta su masa y su volumen?",
      prompt: { ru: "Как правило, если по этой дороге вы едете на фургоне с уложенными в штабель грузами, важно ли при экстренном торможении учитывать их массу и объём?", en: "As a rule, if you drive on this road in a van loaded with stacked packages, is it important to take their mass and volume into account in an emergency stop?" },
      options: [
        { es: "Sí, por lo que se debe mantener una mayor distancia de seguridad ya que la distancia de frenado es mayor.", ru: "Да, поэтому нужна большая дистанция: тормозной путь длиннее.", en: "Yes, so a longer safety distance is needed because the braking distance is longer." },
        { es: "Sí, porque al bajar el centro de gravedad resulta fácil derrapar y perder el control de la misma.", ru: "Да, потому что центр тяжести опускается и легко занести машину.", en: "Yes, because the lower centre of gravity makes it easy to skid and lose control." },
        { es: "No, porque a mayor peso mayor estabilidad.", ru: "Нет, чем тяжелее, тем устойчивее.", en: "No, because more weight means more stability." }
      ],
      answer: 0,
      explain: { ru: "Гружёный фургон тормозит дольше и менее устойчив; груз распределяют равномерно и крепят, а дистанцию увеличивают.", en: "A loaded van takes longer to stop and is less stable; spread and secure the load and leave a longer gap." } },
    { es: "Si durante la conducción conecta el sistema de aire acondicionado, el consumo de carburante...",
      prompt: { ru: "Если во время езды включить кондиционер, расход топлива…", en: "If you switch on the air conditioning while driving, fuel consumption…" },
      options: [
        { es: "disminuye si las temperaturas son bajas.", ru: "уменьшается при низкой температуре.", en: "decreases if temperatures are low." },
        { es: "aumenta.", ru: "увеличивается.", en: "increases." },
        { es: "no varía.", ru: "не меняется.", en: "does not change." }
      ],
      answer: 1,
      explain: { ru: "Компрессор кондиционера берёт мощность от двигателя, поэтому расход растёт.", en: "The air-conditioning compressor takes power from the engine, so consumption rises." } },
    { es: "¿Se debe aumentar la distancia de seguridad cuando exista niebla?",
      prompt: { ru: "Нужно ли увеличивать дистанцию в тумане?", en: "Should the safety distance be increased in fog?" },
      options: [
        { es: "La distancia no influye en la detención cuando hay niebla.", ru: "Дистанция в тумане на остановку не влияет.", en: "Distance makes no difference to stopping in fog." },
        { es: "Sí, para tener más espacio para reaccionar ante cualquier frenada del vehículo que va delante.", ru: "Да, чтобы было больше места среагировать, если передняя машина затормозит.", en: "Yes, to have more room to react if the vehicle in front brakes." },
        { es: "No, si se llevan las luces encendidas.", ru: "Нет, если включены фары.", en: "No, if the lights are on." }
      ],
      answer: 1,
      explain: { ru: "В тумане опасность замечают позже, а дорога влажная; большая дистанция даёт время и место для реакции.", en: "In fog hazards are seen later and the road is damp; a longer gap gives time and space to react." } },
    { es: "Por una autovía está prohibida la circulación de...",
      prompt: { ru: "По автомагистрали (autovía) запрещено движение…", en: "On an autovía, traffic is forbidden for…" },
      options: [
        { es: "ciclomotores", ru: "мопедов.", en: "mopeds." },
        { es: "vehículos especiales", ru: "специальных транспортных средств.", en: "special vehicles." },
        { es: "turismos con remolque", ru: "легковых машин с прицепом.", en: "cars towing a trailer." }
      ],
      answer: 0,
      explain: { ru: "Мопедам запрещено ездить по автострадам и автомагистралям; спецтехнике — только если она не может ехать быстрее 60 км/ч (RGC, ст. 38).", en: "Mopeds may not use autopistas or autovías; special vehicles are banned only if they cannot exceed 60 km/h (RGC art. 38)." } },
    { es: "La presión de inflado del neumático...",
      prompt: { ru: "Давление в шинах…", en: "Tyre pressure…" },
      options: [
        { es: "debe comprobarse, como mínimo, dos veces al año.", ru: "нужно проверять минимум два раза в год.", en: "should be checked at least twice a year." },
        { es: "debe comprobarse cada tres meses.", ru: "нужно проверять каждые три месяца.", en: "should be checked every three months." },
        { es: "debe comprobarse con frecuencia, y siempre antes de iniciar un viaje largo.", ru: "нужно проверять часто и всегда перед дальней поездкой.", en: "should be checked often, and always before a long journey." }
      ],
      answer: 2,
      explain: { ru: "Шины теряют давление постепенно, поэтому его проверяют часто (примерно раз в месяц) и обязательно перед дальней дорогой, на холодных шинах.", en: "Tyres lose pressure gradually, so check often (about monthly) and always before a long trip, with cold tyres." } },
    { es: "Si un turismo traslada a un enfermo al hospital con urgencia:",
      prompt: { ru: "Если легковой автомобиль срочно везёт больного в больницу:", en: "If a car is urgently taking a sick person to hospital:" },
      options: [
        { es: "Debe respetar las normas de circulación, sobre todo en las intersecciones.", ru: "Он должен соблюдать правила, особенно на перекрёстках.", en: "It must respect the traffic rules, especially at junctions." },
        { es: "No está obligado a respetar las normas de circulación.", ru: "Он не обязан соблюдать правила.", en: "It is not obliged to respect the traffic rules." },
        { es: "Sólo debe respetar las normas que regulan las intersecciones.", ru: "Он должен соблюдать только правила проезда перекрёстков.", en: "It must only respect the rules for junctions." }
      ],
      answer: 0,
      explain: { ru: "Обычная машина не становится приоритетной: она может включить аварийку и подавать сигналы, но правила обязана соблюдать (RGC, ст. 69 и 110).", en: "An ordinary car does not become a priority vehicle: it may use hazard lights and the horn but must obey the rules (RGC arts. 69 and 110)." } },
    { es: "El equipaje en la baca de un turismo, ¿puede sobresalir por los lados?",
      prompt: { ru: "Может ли багаж на верхнем багажнике легковой машины выступать по бокам?", en: "May luggage on a car’s roof rack stick out at the sides?" },
      options: [
        { es: "Sí, cuando el equipaje es ancho y no se puede dividir.", ru: "Да, если багаж широкий и неделимый.", en: "Yes, when it is wide and indivisible." },
        { es: "No", ru: "Нет.", en: "No." },
        { es: "Sí, pero el ancho total tiene que ser menor de 2,5 metros", ru: "Да, но общая ширина должна быть меньше 2,5 м.", en: "Yes, but the total width must be under 2.5 m." }
      ],
      answer: 1,
      explain: { ru: "Груз не должен выступать за проекцию машины; у легковой допускается только выступ сзади (10 %, неделимый — 15 %) (RGC, ст. 15).", en: "The load must not stick out beyond the vehicle’s outline; a car may only carry a rear overhang (10 %, or 15 % if indivisible) (RGC art. 15)." } },
    { es: "Una postura inadecuada en el asiento...",
      prompt: { ru: "Неправильная посадка на сиденье…", en: "A poor seating posture…" },
      options: [
        { es: "reduce la fatiga.", ru: "уменьшает усталость.", en: "reduces fatigue." },
        { es: "aumenta la fatiga.", ru: "увеличивает усталость.", en: "increases fatigue." },
        { es: "no influye en la fatiga.", ru: "не влияет на усталость.", en: "does not affect fatigue." }
      ],
      answer: 1,
      explain: { ru: "Неудобная поза напрягает мышцы и спину, и усталость приходит быстрее.", en: "An awkward posture strains the muscles and back, so fatigue comes sooner." } },
    { es: "El personal de obras de la fotografía le está ordenando que se detenga. ¿Está obligado a obedecerle?",
      prompt: { ru: "Рабочий дорожных работ на фото приказывает вам остановиться. Обязаны ли вы подчиниться?", en: "The road worker in the photo is ordering you to stop. Must you obey?" },
      options: [
        { es: "Sí, porque está autorizado a regular el paso de vehículos en el tramo de obras.", ru: "Да, он уполномочен регулировать движение на участке работ.", en: "Yes, because he is authorised to control traffic through the road works." },
        { es: "No, porque no es un agente de circulación.", ru: "Нет, он не сотрудник дорожной полиции.", en: "No, because he is not a traffic officer." },
        { es: "Solamente si circulan vehículos en sentido contrario.", ru: "Только если едут встречные машины.", en: "Only if vehicles are coming the other way." }
      ],
      answer: 0,
      explain: { ru: "Персонал дорожных работ может регулировать движение на участке работ (обычно табличкой «STOP»/зелёной), и его указания обязательны (RGC, ст. 143).", en: "Road-works staff may control traffic through the works (usually with a STOP/green paddle) and their instructions must be obeyed (RGC art. 143)." } },
    { es: "¿Es conveniente hacer una revisión exhaustiva del estado del vehículo si el humo que despide el tubo de escape es de color negro?",
      prompt: { ru: "Стоит ли тщательно проверить машину, если из выхлопной трубы идёт чёрный дым?", en: "Should the vehicle be thoroughly checked if the exhaust gives off black smoke?" },
      options: [
        { es: "Sí, porque el motor puede estar quemando aceite.", ru: "Да, двигатель может жечь масло.", en: "Yes, because the engine may be burning oil." },
        { es: "No, porque solo es un problema de refrigeración que suele desaparecer.", ru: "Нет, это просто проблема охлаждения, которая обычно проходит.", en: "No, it is only a cooling problem that usually goes away." },
        { es: "Sí, porque en este caso puede deberse a una mala combustión.", ru: "Да, в этом случае причина может быть в плохом сгорании.", en: "Yes, because in this case it may be due to poor combustion." }
      ],
      answer: 2,
      explain: { ru: "Чёрный дым — признак неполного сгорания (богатая смесь, форсунки, воздушный фильтр). Сизый дым — масло, белый — охлаждающая жидкость или пар.", en: "Black smoke signals incomplete combustion (rich mixture, injectors, air filter). Blue-grey smoke means oil, white means coolant or steam." } },
    { es: "Utilizar el teléfono mientras conduce hace que el riesgo de accidente sea...",
      prompt: { ru: "Разговор по телефону за рулём делает риск аварии…", en: "Using the phone while driving makes the risk of an accident…" },
      options: [
        { es: "Igual que si no se utiliza.", ru: "Таким же, как без него.", en: "The same as when not using it." },
        { es: "Mayor que si no se utiliza.", ru: "Выше, чем без него.", en: "Higher than when not using it." },
        { es: "Menor que si no se utiliza.", ru: "Ниже, чем без него.", en: "Lower than when not using it." }
      ],
      answer: 1,
      explain: { ru: "Телефон отвлекает и зрительно, и мысленно. Держать его в руке за рулём запрещено; с 2022 года это −6 баллов (RGC, ст. 18; LSV, приложение II).", en: "A phone distracts both the eyes and the mind. Holding it while driving is banned; since 2022 it costs 6 points (RGC art. 18; LSV annex II)." } },
    { es: "¿Qué prohíbe la marca longitudinal discontinua amarilla?",
      prompt: { ru: "Что запрещает жёлтая прерывистая продольная линия?", en: "What does a broken yellow longitudinal line prohibit?" },
      options: [
        { es: "La parada.", ru: "Остановку.", en: "Stopping." },
        { es: "El estacionamiento.", ru: "Стоянку.", en: "Parking." },
        { es: "Ambos.", ru: "И то, и другое.", en: "Both." }
      ],
      answer: 1,
      explain: { ru: "Жёлтая прерывистая (M-7.7) запрещает стоянку, но не остановку; жёлтая сплошная (M-7.8) запрещает и то и другое.", en: "A broken yellow line (M-7.7) bans parking but not stopping; a solid yellow line (M-7.8) bans both." } },
    { es: "La velocidad, ¿influye en la capacidad de anticipación del conductor?",
      prompt: { ru: "Влияет ли скорость на способность водителя предвидеть ситуацию?", en: "Does speed affect the driver’s ability to anticipate?" },
      options: [
        { es: "Sí, a mayor velocidad menor capacidad de anticipación.", ru: "Да, чем выше скорость, тем меньше способность предвидеть.", en: "Yes, the higher the speed, the lower the ability to anticipate." },
        { es: "Depende de las condiciones de la vía.", ru: "Зависит от состояния дороги.", en: "It depends on the road conditions." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 0,
      explain: { ru: "С ростом скорости сужается поле зрения и остаётся меньше времени, чтобы заметить и оценить опасность.", en: "As speed rises the field of vision narrows and there is less time to spot and judge hazards." } },
    { es: "¿Cuál es la función del sistema antibloqueo de frenos ABS?",
      prompt: { ru: "Какая функция у антиблокировочной системы ABS?", en: "What does the ABS anti-lock braking system do?" },
      options: [
        { es: "Hace que los neumáticos se desgasten menos.", ru: "Шины меньше изнашиваются.", en: "It makes the tyres wear less." },
        { es: "Impide el bloqueo de las ruedas durante el frenado.", ru: "Не даёт колёсам блокироваться при торможении.", en: "It prevents the wheels locking during braking." },
        { es: "Evita el bloqueo de las ruedas solo en calzadas secas.", ru: "Не даёт колёсам блокироваться только на сухой дороге.", en: "It prevents wheel lock only on dry roads." }
      ],
      answer: 1,
      explain: { ru: "ABS предотвращает блокировку колёс на любом покрытии, сохраняя управляемость; тормозной путь при этом не обязательно короче.", en: "ABS prevents wheel lock on any surface so you can still steer; it does not necessarily shorten the stopping distance." } },
    { es: "En un carril reversible...",
      prompt: { ru: "На реверсивной полосе…", en: "In a reversible lane…" },
      options: [
        { es: "No debe cambiar nunca de carril salvo para adelantar.", ru: "Нельзя менять полосу, кроме как для обгона.", en: "You must never change lane except to overtake." },
        { es: "Debe circular como máximo a 100 km/h y como mínimo a 60 km/h", ru: "Нужно ехать не быстрее 100 и не медленнее 60 км/ч.", en: "You must drive at most 100 km/h and at least 60 km/h." },
        { es: "Debe llevar encendida la luz de cruce.", ru: "Нужно ехать с включённым ближним светом.", en: "You must have the dipped beam on." }
      ],
      answer: 2,
      explain: { ru: "На реверсивных, дополнительных и встречных полосах ближний свет обязателен днём и ночью (RGC, ст. 104).", en: "In reversible, additional and contraflow lanes dipped beam is compulsory day and night (RGC art. 104)." } },
    { es: "¿Cuándo hay que ponerse el chaleco reflectante?",
      prompt: { ru: "Когда нужно надевать светоотражающий жилет?", en: "When must the reflective vest be put on?" },
      options: [
        { es: "Es indiferente.", ru: "Неважно.", en: "It does not matter." },
        { es: "Antes de salir del vehículo.", ru: "До выхода из машины.", en: "Before getting out of the vehicle." },
        { es: "Después de salir del vehículo.", ru: "После выхода из машины.", en: "After getting out of the vehicle." }
      ],
      answer: 1,
      explain: { ru: "Жилет надевают ещё в салоне, чтобы вас было видно с первого шага на дорогу; он обязателен, если вы выходите на проезжую часть или обочину загородной дороги (RGC, ст. 118).", en: "Put the vest on inside the car so you are visible from your first step; it is compulsory when you go onto the carriageway or hard shoulder of an interurban road (RGC art. 118)." } },
    { es: "Por la noche, la agudeza visual...",
      prompt: { ru: "Ночью острота зрения…", en: "At night, visual acuity…" },
      options: [
        { es: "Aumenta.", ru: "Повышается.", en: "Increases." },
        { es: "No varía.", ru: "Не меняется.", en: "Does not change." },
        { es: "Se reduce.", ru: "Снижается.", en: "Is reduced." }
      ],
      answer: 2,
      explain: { ru: "В темноте глаз хуже различает детали и цвета, а после ослепления фарами долго восстанавливается.", en: "In the dark the eye resolves less detail and colour and recovers slowly after being dazzled." } },
    { es: "Aunque esté prohibido el adelantamiento, un turismo podrá rebasar, incluso invadiendo el sentido contrario, a...",
      prompt: { ru: "Даже там, где обгон запрещён, легковой автомобиль может опередить, в том числе выехав на встречную полосу…", en: "Even where overtaking is prohibited, a car may pass, even using the opposite lane…" },
      options: [
        { es: "Cualquier camión.", ru: "Любой грузовик.", en: "Any lorry." },
        { es: "Conductores de bicicletas.", ru: "Велосипедистов.", en: "Cyclists." },
        { es: "Cualquier autobús o camión que circule lentamente.", ru: "Любой медленно едущий автобус или грузовик.", en: "Any slow-moving bus or lorry." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 88.2: на участке с запретом обгона можно, убедившись в безопасности, обогнать велосипедистов, мопеды, ВМП, пешеходов и т. п. При этом — интервал не менее 1,5 м и за городом скорость минимум на 20 км/ч ниже лимита (ст. 85.4).", en: "RGC art. 88.2: where overtaking is banned you may still, if safe, pass cyclists, mopeds, PMVs, pedestrians etc. — leaving at least 1.5 m and, outside towns, at least 20 km/h below the limit (art. 85.4)." } },
    { es: "Al estacionar un vehículo provisto de caja de cambios manual en una pendiente descendente, ¿qué velocidad dejará colocada?",
      prompt: { ru: "Если машина с механической коробкой стоит на спуске, какую передачу оставить включённой?", en: "When parking a manual-gearbox vehicle facing downhill, which gear do you leave engaged?" },
      options: [
        { es: "La primera velocidad.", ru: "Первую.", en: "First gear." },
        { es: "La marcha atrás.", ru: "Заднюю.", en: "Reverse." },
        { es: "Punto muerto.", ru: "Нейтраль.", en: "Neutral." }
      ],
      answer: 1,
      explain: { ru: "На спуске оставляют заднюю передачу, на подъёме — первую, плюс стояночный тормоз; можно также повернуть колёса к бордюру.", en: "Facing downhill leave reverse engaged, facing uphill first gear, plus the parking brake; you can also turn the wheels towards the kerb." } },
    { es: "En curvas y cambios de rasante de visibilidad reducida está prohibido...",
      prompt: { ru: "На поворотах и переломах профиля с ограниченной видимостью запрещено…", en: "On bends and crests with reduced visibility it is forbidden to…" },
      options: [
        { es: "Adelantar, únicamente.", ru: "Только обгонять.", en: "Overtake, only." },
        { es: "Adelantar y cambiar de sentido.", ru: "Обгонять и разворачиваться.", en: "Overtake and make a U-turn." },
        { es: "Cambiar de sentido, solamente.", ru: "Только разворачиваться.", en: "Make a U-turn, only." }
      ],
      answer: 1,
      explain: { ru: "В местах с недостаточной видимостью запрещены и обгон (RGC, ст. 87), и разворот (ст. 79), и движение задним ходом.", en: "Where visibility is insufficient, overtaking (RGC art. 87), U-turns (art. 79) and reversing are all forbidden." } },
    { es: "¿Qué señala la flecha de la señal?",
      prompt: { ru: "Что показывает стрелка знака?", en: "What does the arrow on the sign show?" },
      options: [
        { es: "El lado del refugio por el que los vehículos han de pasar.", ru: "Сторону островка, с которой машины должны его объезжать.", en: "The side of the traffic island vehicles must pass." },
        { es: "Sentido único.", ru: "Одностороннее движение.", en: "One-way traffic." },
        { es: "Recomienda el lado del refugio por el que los vehículos pueden pasar.", ru: "Рекомендует сторону островка, с которой можно объехать.", en: "It recommends the side of the island vehicles may pass." }
      ],
      answer: 0,
      explain: { ru: "R-401a «Paso obligatorio» — предписывающий знак: объезжать островок или препятствие обязательно с указанной стороны (Каталог, R-401a).", en: "R-401a ‘Paso obligatorio’ is mandatory: pass the island or obstacle on the side shown (Catalogue, R-401a)." },
      sign: "R-401a" },
    { es: "Un vehículo tiene el silenciador del escape estropeado. ¿Está permitido circular así?",
      prompt: { ru: "У машины неисправен глушитель. Можно так ездить?", en: "A vehicle has a broken exhaust silencer. May it be driven like that?" },
      options: [
        { es: "Sí, solamente en carretera.", ru: "Да, только за городом.", en: "Yes, only on interurban roads." },
        { es: "No, pero las motos y ciclomotores pueden circular sin él.", ru: "Нет, но мотоциклы и мопеды могут ездить без него.", en: "No, but motorcycles and mopeds may ride without it." },
        { es: "No, por la contaminación acústica que produce.", ru: "Нет, из-за шумового загрязнения.", en: "No, because of the noise pollution it causes." }
      ],
      answer: 2,
      explain: { ru: "Запрещено ездить с превышением допустимого шума, в том числе без глушителя или с неисправным; это касается и мотоциклов, и мопедов (RGC, ст. 7).", en: "Driving with excessive noise, including with no or a faulty silencer, is banned — for motorcycles and mopeds too (RGC art. 7)." } },
    { es: "En esta vía urbana con dos carriles para cada sentido que no tiene líneas de separación de carriles, ¿por qué carril se debe circular?",
      prompt: { ru: "На этой городской улице по две полосы в каждую сторону, но без разметки между полосами. По какой полосе нужно ехать?", en: "On this urban road with two lanes each way but no lane markings, which lane must you use?" },
      options: [
        { es: "Por el de su derecha.", ru: "По правой.", en: "The right-hand one." },
        { es: "Por el carril que más convenga para mi destino.", ru: "По той, что удобнее для моего направления.", en: "Whichever suits my destination." },
        { es: "Por el carril de la derecha y no puedo cambiar al segundo", ru: "По правой, и перестраиваться во вторую нельзя.", en: "The right-hand one, and I cannot move to the second." }
      ],
      answer: 0,
      explain: { ru: "Свободный выбор полосы в городе разрешён, только если полосы обозначены разметкой (RGC, ст. 33); без разметки действует общее правило — держаться правее (ст. 29).", en: "Free choice of lane in town applies only when the lanes are marked (RGC art. 33); without markings the general rule applies — keep right (art. 29)." } },
    { es: "El filtro del aire, ¿para qué sirve?",
      prompt: { ru: "Для чего нужен воздушный фильтр?", en: "What is the air filter for?" },
      options: [
        { es: "Para limpiar el aire que enfría el motor.", ru: "Очищать воздух, который охлаждает двигатель.", en: "To clean the air that cools the engine." },
        { es: "Para limpiar el aire que se mezcla con el combustible.", ru: "Очищать воздух, который смешивается с топливом.", en: "To clean the air that is mixed with the fuel." },
        { es: "Para limpiar el aire de la calefacción.", ru: "Очищать воздух для отопления.", en: "To clean the air for the heating." }
      ],
      answer: 1,
      explain: { ru: "Воздушный фильтр задерживает пыль в воздухе, идущем в двигатель для сгорания; забитый фильтр повышает расход и дымность.", en: "The air filter removes dust from the air drawn into the engine for combustion; a clogged filter raises consumption and smoke." } },
    { es: "Los dos primeros años con permiso, ¿cuál es la tasa máxima de alcohol?",
      prompt: { ru: "Каков предельный уровень алкоголя в первые два года после получения прав?", en: "In the first two years with a licence, what is the maximum alcohol level?" },
      options: [
        { es: "0,10 mg/l en aire espirado = 0,2 g/l en sangre.", ru: "0,10 мг/л в выдыхаемом воздухе = 0,2 г/л в крови.", en: "0.10 mg/l in exhaled air = 0.2 g/l in blood." },
        { es: "0,25 mg/l en aire espirado = 0,5 g/l en sangre.", ru: "0,25 мг/л в выдыхаемом воздухе = 0,5 г/л в крови.", en: "0.25 mg/l in exhaled air = 0.5 g/l in blood." },
        { es: "0,15 mg/l en aire espirado = 0,3 g/l en sangre.", ru: "0,15 мг/л в выдыхаемом воздухе = 0,3 г/л в крови.", en: "0.15 mg/l in exhaled air = 0.3 g/l in blood." }
      ],
      answer: 2,
      explain: { ru: "Для водителей со стажем меньше двух лет и профессиональных водителей — 0,15 мг/л в воздухе (0,3 г/л в крови); для остальных — 0,25 мг/л (RGC, ст. 20).", en: "For drivers with under two years’ experience and professional drivers: 0.15 mg/l in breath (0.3 g/l blood); others 0.25 mg/l (RGC art. 20)." } },
    { es: "Si es necesario avisar a un ciclista con señales acústicas, ¿cómo deben realizarse?",
      prompt: { ru: "Если нужно предупредить велосипедиста звуковым сигналом, как это делать?", en: "If you need to warn a cyclist with the horn, how should you do it?" },
      options: [
        { es: "A cierta distancia del ciclista, para evitar que se asuste.", ru: "На некотором расстоянии от велосипедиста, чтобы не испугать его.", en: "From some distance away, so as not to startle him." },
        { es: "Es indiferente.", ru: "Неважно.", en: "It does not matter." },
        { es: "Cerca del ciclista.", ru: "Вблизи от велосипедиста.", en: "Close to the cyclist." }
      ],
      answer: 0,
      explain: { ru: "Резкий сигнал вплотную может испугать велосипедиста и привести к падению; если сигнал нужен, его подают заранее.", en: "A sudden horn close by can startle a cyclist into falling; if needed, sound it well in advance." } },
    { es: "Una motocicleta de 5 años de antiguedad, ¿con qué periodicidad debe pasar la ITV?",
      prompt: { ru: "Как часто мотоцикл возрастом 5 лет должен проходить ITV?", en: "How often must a 5-year-old motorcycle take the ITV?" },
      options: [
        { es: "Cada dos años.", ru: "Каждые два года.", en: "Every two years." },
        { es: "Cada año.", ru: "Каждый год.", en: "Every year." },
        { es: "Cada 4 años.", ru: "Каждые 4 года.", en: "Every 4 years." }
      ],
      answer: 0,
      explain: { ru: "Мотоцикл: первый ITV через 4 года, затем каждые 2 года (RD 920/2017).", en: "Motorcycle: first ITV at 4 years, then every 2 years (RD 920/2017)." } },
    { es: "En ciudad, ¿es importante no circular a más de 50 kilómetros por hora?",
      prompt: { ru: "Важно ли в городе не ехать быстрее 50 км/ч?", en: "In town, is it important not to drive faster than 50 km/h?" },
      options: [
        { es: "Sí, para que, en caso de atropello, el peatón tenga más posibilidades de sobrevivir.", ru: "Да, чтобы при наезде у пешехода было больше шансов выжить.", en: "Yes, so that a pedestrian who is hit has a better chance of surviving." },
        { es: "No, sobre todo en las calles y avenidas anchas.", ru: "Нет, особенно на широких улицах и проспектах.", en: "No, especially on wide streets and avenues." },
        { es: "Sí, pero sólo para no ser sancionado por exceso de velocidad.", ru: "Да, но только чтобы не получить штраф за превышение.", en: "Yes, but only to avoid a speeding fine." }
      ],
      answer: 0,
      explain: { ru: "Правило изменилось: с 2021 года в городе 50 км/ч разрешено только на улицах с двумя и более полосами в каждую сторону; при одной полосе — 30, на улицах в одном уровне с тротуаром — 20 (RGC, ст. 50). Смысл ответа тот же: чем ниже скорость, тем выше шанс пешехода выжить.", en: "The rule has changed: since 2021, 50 km/h in town applies only on streets with two or more lanes each way; one lane each way — 30, single-level streets — 20 (RGC art. 50). The point of the answer stands: the lower the speed, the better a pedestrian’s chance of surviving." } },
    { es: "Si observa que cuando circula en línea recta el vehículo se desvía hacia un lado, puede ser debido a...",
      prompt: { ru: "Если при движении прямо машину уводит в сторону, причина может быть в…", en: "If the vehicle pulls to one side when driving straight, it may be due to…" },
      options: [
        { es: "A no mantener girado el volante al máximo durante las maniobras.", ru: "Том, что руль не держат вывернутым до упора при манёврах.", en: "Not keeping the steering on full lock during manoeuvres." },
        { es: "Un bajo nivel del líquido de frenos.", ru: "Низком уровне тормозной жидкости.", en: "A low brake fluid level." },
        { es: "Una presión distinta en los neumáticos de un mismo eje.", ru: "Разном давлении в шинах на одной оси.", en: "Different pressures in the tyres on the same axle." }
      ],
      answer: 2,
      explain: { ru: "Машину тянет в сторону шины с меньшим давлением; также возможны неисправности рулевого управления или развал-схождение.", en: "The car pulls towards the softer tyre; steering faults or wheel alignment are other causes." } },
    { es: "Los remolques y semirremolques, ¿deben tener tarjeta de inspección técnica?",
      prompt: { ru: "Должны ли прицепы и полуприцепы иметь карточку техосмотра?", en: "Must trailers and semi-trailers have an inspection card?" },
      options: [
        { es: "No, es suficiente con la del vehículo que los arrastra.", ru: "Нет, достаточно карточки тягача.", en: "No, the towing vehicle’s card is enough." },
        { es: "Sí, todos.", ru: "Да, все.", en: "Yes, all of them." },
        { es: "Sí, pero únicamente los no ligeros.", ru: "Да, но только не лёгкие.", en: "Yes, but only non-light ones." }
      ],
      answer: 1,
      explain: { ru: "У каждого прицепа, в том числе лёгкого, есть своя карточка технических данных (tarjeta ITV); лёгкие лишь не проходят периодический осмотр и не имеют своего номера.", en: "Every trailer, light ones included, has its own technical card (tarjeta ITV); light trailers are only exempt from periodic inspection and their own number plate." } },
    { es: "En un conductor, el consumo de anfetaminas...",
      prompt: { ru: "У водителя употребление амфетаминов…", en: "In a driver, taking amphetamines…" },
      options: [
        { es: "Genera comportamientos impacientes o impulsivos.", ru: "Вызывает нетерпеливое или импульсивное поведение.", en: "Causes impatient or impulsive behaviour." },
        { es: "Favorece la fatiga y el sueño.", ru: "Способствует усталости и сну.", en: "Encourages fatigue and sleep." },
        { es: "Proporciona un estado de relajación.", ru: "Даёт состояние расслабленности.", en: "Produces a relaxed state." }
      ],
      answer: 0,
      explain: { ru: "Амфетамины — стимуляторы: ложное чувство бодрости, переоценка своих сил, импульсивность и риск; после действия наступает резкая усталость.", en: "Amphetamines are stimulants: false alertness, overconfidence, impulsiveness and risk-taking, then sudden exhaustion." } },
    { es: "Un turismo con remolque, ¿es obligatorio que lleve una rueda de repuesto del remolque?",
      prompt: { ru: "Обязана ли легковая машина с прицепом возить запасное колесо для прицепа?", en: "Must a car towing a trailer carry a spare wheel for the trailer?" },
      options: [
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, cuando el remolque no es ligero.", ru: "Да, если прицеп не лёгкий.", en: "Yes, when the trailer is not light." }
      ],
      answer: 1,
      explain: { ru: "Запасное колесо для прицепа обязательным оборудованием не является (его полезно возить, но это не требование).", en: "A spare wheel for the trailer is not compulsory equipment (useful to carry, but not required)." } },
    { es: "¿Está permitido estacionar en una calle residencial?",
      prompt: { ru: "Можно ли ставить машину на стоянку в жилой зоне?", en: "Is parking allowed in a residential street?" },
      options: [
        { es: "Sí, donde no se estorbe a los peatones.", ru: "Да, где это не мешает пешеходам.", en: "Yes, where it does not get in pedestrians’ way." },
        { es: "No, está siempre prohibido.", ru: "Нет, это всегда запрещено.", en: "No, it is always forbidden." },
        { es: "No, excepto en los lugares señalizados.", ru: "Нет, кроме обозначенных мест.", en: "No, except in the signposted places." }
      ],
      answer: 2,
      explain: { ru: "В зоне S-28 стоять можно только в местах, обозначенных знаками или разметкой; скорость — 10 км/ч, пешеходы имеют преимущество. В новом каталоге (RD 465/2025) этот знак называется «Zona de estancia y juego» (Каталог, S-28).", en: "In an S-28 zone you may park only where signs or markings allow; the limit is 10 km/h and pedestrians have priority. In the new catalogue (RD 465/2025) the sign is called ‘Zona de estancia y juego’ (Catalogue, S-28)." },
      sign: "S-28" },
    { es: "La marca amarilla continua...",
      prompt: { ru: "Жёлтая сплошная линия…", en: "A solid yellow line…" },
      options: [
        { es: "indica una zona reservada para un uso especial, donde sólo puedo parar.", ru: "обозначает зону для особого использования, где можно только остановиться.", en: "marks an area reserved for special use where I may only stop." },
        { es: "indica una zona donde la duración del estacionamiento está limitada.", ru: "обозначает зону с ограниченным временем стоянки.", en: "marks an area where parking time is limited." },
        { es: "indica la zona de la vía donde está prohibido parar y estacionar.", ru: "обозначает участок, где запрещены остановка и стоянка.", en: "marks the part of the road where stopping and parking are forbidden." }
      ],
      answer: 2,
      explain: { ru: "Жёлтая сплошная у края (M-7.8) запрещает остановку и стоянку по всей длине на этой стороне.", en: "A solid yellow edge line (M-7.8) bans stopping and parking along its whole length on that side." } },
    { es: "El silenciador...",
      prompt: { ru: "Глушитель…", en: "The silencer…" },
      options: [
        { es: "no es una parte del sistema de escape de los motores.", ru: "не входит в выпускную систему двигателя.", en: "is not part of the engine’s exhaust system." },
        { es: "disminuye o silencia las explosiones producidas en el interior del motor.", ru: "гасит или приглушает шум взрывов внутри двигателя.", en: "reduces or muffles the explosions produced inside the engine." },
        { es: "no tiene influencia en la contaminación.", ru: "не влияет на загрязнение.", en: "has no influence on pollution." }
      ],
      answer: 1,
      explain: { ru: "Глушитель — часть выпускной системы, он снижает шум от сгорания смеси; шум — тоже загрязнение.", en: "The silencer is part of the exhaust and reduces combustion noise; noise is a form of pollution too." } },
    { es: "El viento sopla desde el lado derecho a ráfagas. ¿Cuándo es más peligroso?",
      prompt: { ru: "Ветер порывами дует справа. Когда он опаснее всего?", en: "The wind is gusting from the right. When is it most dangerous?" },
      options: [
        { es: "Cuando adelanto a un vehículo grande.", ru: "Когда я обгоняю крупную машину.", en: "When I overtake a large vehicle." },
        { es: "Cuando circulo detrás de un vehículo grande.", ru: "Когда я еду за крупной машиной.", en: "When I drive behind a large vehicle." },
        { es: "Cuando un vehículo grande me adelanta.", ru: "Когда крупная машина обгоняет меня.", en: "When a large vehicle overtakes me." }
      ],
      answer: 0,
      explain: { ru: "Пока вы рядом с грузовиком, он закрывает от ветра справа; выйдя вперёд, вы снова попадаете под порыв, и машину резко сдвигает.", en: "Alongside the lorry you are sheltered from the right-hand wind; as you pull ahead you are hit by the gust again and pushed sideways." } },
    { es: "Si los ocupantes de los asientos traseros de un vehículo son menores de edad y de estatura igual o inferior a 135 cm de altura, ¿qué dispositivos de seguridad deben utilizar?",
      prompt: { ru: "Если на задних сиденьях несовершеннолетние ростом 135 см и ниже, какие средства безопасности они должны использовать?", en: "If the rear-seat passengers are minors 135 cm tall or less, what safety devices must they use?" },
      options: [
        { es: "Un dispositivo de retención infantil adaptado a su talla y peso.", ru: "Детское удерживающее устройство по росту и весу.", en: "A child restraint suited to their height and weight." },
        { es: "El cinturón de seguridad que viene instalado en el vehículo.", ru: "Штатный ремень безопасности машины.", en: "The vehicle’s own seat belt." },
        { es: "Obligatoriamente un sistema de retención infantil soldado a la carrocería del vehículo.", ru: "Обязательно удерживающую систему, приваренную к кузову.", en: "Compulsorily a child restraint welded to the bodywork." }
      ],
      answer: 0,
      explain: { ru: "Дети ростом до 135 см обязаны ехать в сертифицированном детском кресле или бустере по росту и весу (RGC, ст. 117).", en: "Children up to 135 cm must use an approved child seat or booster suited to their height and weight (RGC art. 117)." } },
    { es: "¿Cuándo está permitido utilizar las señales acústicas?",
      prompt: { ru: "Когда разрешено подавать звуковой сигнал?", en: "When is the horn allowed?" },
      options: [
        { es: "Cuando circulo por vías urbanas solamente.", ru: "Только на городских улицах.", en: "Only on urban roads." },
        { es: "Cuando circulo por cualquier vía en cualquier circunstancia.", ru: "На любой дороге при любых обстоятельствах.", en: "On any road in any circumstances." },
        { es: "Cuando quiero adelantar fuera de poblado.", ru: "Когда я хочу обогнать за городом.", en: "When I want to overtake outside built-up areas." }
      ],
      answer: 2,
      explain: { ru: "Звуковой сигнал разрешён, чтобы избежать аварии, и за городом — чтобы предупредить об обгоне (RGC, ст. 110).", en: "The horn may be used to avoid an accident and, outside built-up areas, to warn that you are overtaking (RGC art. 110)." } },
    { es: "Al adelantar, ¿cuándo debe volver al carril derecho?",
      prompt: { ru: "Когда после обгона нужно вернуться на правую полосу?", en: "When overtaking, when should you return to the right-hand lane?" },
      options: [
        { es: "Después de recorrer 200 metros por delante del turismo.", ru: "Проехав 200 метров впереди машины.", en: "After travelling 200 metres ahead of the car." },
        { es: "Después de 15 segundos.", ru: "Через 15 секунд.", en: "After 15 seconds." },
        { es: "Después de ver en el espejo la parte delantera del vehículo adelantado.", ru: "Увидев в зеркале переднюю часть обогнанной машины.", en: "After seeing the front of the overtaken vehicle in the mirror." }
      ],
      answer: 2,
      explain: { ru: "Возвращаются плавно, когда обогнанная машина целиком видна в салонном зеркале, — так вы её не подрежете (RGC, ст. 85).", en: "Move back gradually once the overtaken vehicle is fully visible in the interior mirror, so you do not cut in (RGC art. 85)." } },
    { es: "Para evitar la fatiga en la conducción, conviene descansar...",
      prompt: { ru: "Чтобы не уставать за рулём, отдыхать стоит…", en: "To avoid fatigue when driving, you should rest…" },
      options: [
        { es: "cada 3 horas o cada 400 kilómetros.", ru: "каждые 3 часа или 400 км.", en: "every 3 hours or 400 km." },
        { es: "cuando el conductor compruebe que ha perdido totalmente la capacidad de reaccionar.", ru: "когда водитель увидит, что совсем потерял способность реагировать.", en: "when the driver finds he has completely lost the ability to react." },
        { es: "cada 2 horas o cada 200 kilómetros.", ru: "каждые 2 часа или 200 км.", en: "every 2 hours or 200 km." }
      ],
      answer: 2,
      explain: { ru: "DGT советует делать перерыв каждые 2 часа или 200 км, а при признаках усталости — сразу.", en: "The DGT advises a break every 2 hours or 200 km, and immediately at the first signs of fatigue." } },
    { es: "El tiempo de absorción del alcohol, ¿depende de la bebida ingerida?",
      prompt: { ru: "Зависит ли время всасывания алкоголя от выпитого напитка?", en: "Does the alcohol absorption time depend on the drink?" },
      options: [
        { es: "No, la absorción se realiza por el organismo a un ritmo constante, independientemente de la bebida.", ru: "Нет, организм всасывает его с постоянной скоростью, независимо от напитка.", en: "No, the body absorbs it at a constant rate regardless of the drink." },
        { es: "Sí, se absorbe más rápidamente el alcohol de las bebidas fermentadas.", ru: "Да, алкоголь из сброженных напитков всасывается быстрее.", en: "Yes, alcohol from fermented drinks is absorbed faster." },
        { es: "Sí, se absorbe más rápidamente el alcohol de las bebidas destiladas.", ru: "Да, алкоголь из дистиллированных напитков всасывается быстрее.", en: "Yes, alcohol from distilled drinks is absorbed faster." }
      ],
      answer: 2,
      explain: { ru: "Крепкие (дистиллированные) напитки всасываются быстрее, чем пиво или вино; быстрее также натощак и с газированными напитками.", en: "Spirits (distilled drinks) are absorbed faster than beer or wine; so is alcohol on an empty stomach or with fizzy mixers." } },
    { es: "Al elegir un casco para conducir una motocicleta, ¿qué debe tener en cuenta?",
      prompt: { ru: "Что учитывать при выборе шлема для мотоцикла?", en: "When choosing a motorcycle helmet, what should you take into account?" },
      options: [
        { es: "Que se pueda sujetar sin tener que llevarlo abrochado.", ru: "Чтобы он держался, даже если не застёгнут.", en: "That it stays on without being fastened." },
        { es: "Que tenga buena ventilación para que no se empañe.", ru: "Чтобы была хорошая вентиляция и он не запотевал.", en: "That it has good ventilation so it does not mist up." },
        { es: "Que proteja convenientemente de los ruidos.", ru: "Чтобы он хорошо защищал от шума.", en: "That it protects well from noise." }
      ],
      answer: 1,
      explain: { ru: "Запотевший визор резко ухудшает обзор, особенно в холод; шлем должен быть сертифицирован и всегда застёгнут.", en: "A misted visor badly cuts visibility, especially in cold weather; the helmet must be approved and always fastened." } },
    { es: "La luz rotativa que llevan los vehículos especiales, ¿les concede prioridad frente a los demás conductores?",
      prompt: { ru: "Даёт ли проблесковый маячок специальной техники преимущество перед другими?", en: "Does the rotating light on special vehicles give them priority over other drivers?" },
      options: [
        { es: "No, sólo señaliza su situación.", ru: "Нет, он только обозначает их присутствие.", en: "No, it only signals their presence." },
        { es: "Sí, en cualquier caso.", ru: "Да, в любом случае.", en: "Yes, in any case." },
        { es: "Sí, cuando circulan con ella encendida.", ru: "Да, когда он включён.", en: "Yes, when it is switched on." }
      ],
      answer: 0,
      explain: { ru: "Жёлтый маячок V-2 лишь предупреждает о технике или препятствии; преимущество дают только синие (и красные) сигналы приоритетных машин (RGC, ст. 113).", en: "The amber V-2 beacon only warns of the vehicle or obstacle; priority comes only from the blue (or red) lights of priority vehicles (RGC art. 113)." } },
    { es: "La carga que sobresale por delante de un vehículo, ¿cómo debe ir señalizada?",
      prompt: { ru: "Как обозначают груз, выступающий спереди машины?", en: "How must a load sticking out at the front of a vehicle be marked?" },
      options: [
        { es: "Con una luz blanca, de noche o en condiciones que disminuyan sensiblemente la visibilidad.", ru: "Белым огнём ночью или при значительно ухудшенной видимости.", en: "With a white light, at night or when visibility is significantly reduced." },
        { es: "Con una luz blanca, tanto de día como de noche.", ru: "Белым огнём и днём, и ночью.", en: "With a white light, both day and night." },
        { es: "Con una luz blanca y un reflectante blanco, de noche o en condiciones que disminuyan sensiblemente la visibilidad.", ru: "Белым огнём и белым отражателем ночью или при плохой видимости.", en: "With a white light and a white reflector, at night or in poor visibility." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 15.6: груз, выступающий спереди, в тёмное время и при плохой видимости обозначают белым огнём (сзади — щиток V-20 и красный огонь).", en: "RGC art. 15.6: a load protruding at the front is marked with a white light at night and in poor visibility (at the rear: V-20 panel and a red light)." } },
    { es: "Una fila escolar va a cruzar la calzada. ¿Es obligatorio cederle el paso?",
      prompt: { ru: "Колонна школьников собирается перейти проезжую часть. Обязательно ли уступить ей?", en: "A line of schoolchildren is about to cross the road. Must you give way?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Solo si cruza por un paso para peatones.", ru: "Только если она идёт по пешеходному переходу.", en: "Only if they cross at a pedestrian crossing." },
        { es: "Sí.", ru: "Да.", en: "Yes." }
      ],
      answer: 2,
      explain: { ru: "Организованным группам детей, колоннам и процессиям водитель обязан уступить дорогу (RGC, ст. 65).", en: "Drivers must give way to school lines, processions and other organised groups (RGC art. 65)." } },
    { es: "Circulando con lluvia intensa, ¿es obligatorio utilizar la luz antiniebla trasera?",
      prompt: { ru: "Обязательно ли при сильном дожде включать задний противотуманный фонарь?", en: "In heavy rain, is it compulsory to use the rear fog light?" },
      options: [
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "Sí, el trasero y el delantero.", ru: "Да, задний и передние.", en: "Yes, the rear one and the front ones." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 2,
      explain: { ru: "Задний противотуманный включают только в особо неблагоприятных условиях — густой туман, очень сильный дождь, сильный снегопад, плотный дым или пыль (RGC, ст. 106.2); при обычном сильном дожде он не обязателен.", en: "The rear fog light is used only in especially bad conditions — thick fog, very heavy rain, heavy snow, dense smoke or dust (RGC art. 106.2); in ordinary heavy rain it is not compulsory." } },
    { es: "La línea de borde de la calzada, ¿se puede atravesar?",
      prompt: { ru: "Можно ли пересекать линию края проезжей части?", en: "May the carriageway edge line be crossed?" },
      options: [
        { es: "Sí, cuando sea necesario y las circunstancias lo permitan.", ru: "Да, когда нужно и позволяет обстановка.", en: "Yes, when necessary and circumstances allow." },
        { es: "No, está prohibido.", ru: "Нет, это запрещено.", en: "No, it is forbidden." },
        { es: "Sí, cuando la línea es discontinua; no, cuando es continua.", ru: "Да, если линия прерывистая; нет, если сплошная.", en: "Yes, when it is broken; no, when it is solid." }
      ],
      answer: 0,
      explain: { ru: "Линия края лишь отделяет проезжую часть от обочины; сплошная она или прерывистая — на правила пользования обочиной не влияет (RGC, приложение о разметке, M-2.5–2.7).", en: "The edge line only separates carriageway from shoulder; whether solid or broken makes no difference to how the shoulder may be used (RGC, marking annex, M-2.5–2.7)." } },
    { es: "Si conduce una motocicleta y la calzada está mojada, ¿es necesario incrementar la presión de inflado de los neumáticos por encima de la recomendada por el fabricante?",
      prompt: { ru: "Если вы едете на мотоцикле по мокрой дороге, нужно ли поднять давление в шинах выше рекомендованного?", en: "Riding a motorcycle on a wet road, should you raise tyre pressure above the manufacturer’s recommendation?" },
      options: [
        { es: "No, ya que una mayor presión de inflado no contribuye a aumentar la seguridad de circulación.", ru: "Нет, повышенное давление не делает езду безопаснее.", en: "No, higher pressure does not make riding safer." },
        { es: "Sí, porque aumenta la adherencia de los neumáticos y mejorará la seguridad de circulación.", ru: "Да, это улучшает сцепление и безопасность.", en: "Yes, it improves grip and safety." },
        { es: "Sí, ya que aumenta la seguridad de circulación y así se evitan los derrapes.", ru: "Да, это повышает безопасность и предотвращает заносы.", en: "Yes, it increases safety and prevents skids." }
      ],
      answer: 0,
      explain: { ru: "На мокрой дороге давление должно быть рекомендованным производителем; помогает плавная езда без резких разгонов и торможений.", en: "On wet roads keep the manufacturer’s pressure; what helps is smooth riding without harsh acceleration or braking." } },
    { es: "Al inmovilizar un vehículo en una autopista es obligatorio señalizar la presencia del mismo...",
      prompt: { ru: "Когда машина вынужденно остановилась на автостраде, её обязательно обозначить…", en: "When a vehicle is immobilised on a motorway, it must be signalled…" },
      options: [
        { es: "Con la luz de posición, siempre.", ru: "Всегда габаритными огнями.", en: "With the side lights, always." },
        { es: "Con la luz de emergencia, si se dispone de ella y, en su caso, con la de posición.", ru: "Аварийной сигнализацией, если она есть, и при необходимости габаритными огнями.", en: "With the hazard lights, if fitted, and where appropriate the side lights." },
        { es: "Únicamente con la luz de emergencia.", ru: "Только аварийной сигнализацией.", en: "Only with the hazard lights." }
      ],
      answer: 1,
      explain: { ru: "Аварийка и, когда нужно, габариты — верно; кроме того, с 1 января 2026 года обязателен подключённый световой знак V-16 вместо треугольников (RGC, ст. 130.4).", en: "Hazard lights and, where needed, side lights — correct; in addition, since 1 January 2026 the connected V-16 light is compulsory instead of triangles (RGC art. 130.4)." } },
    { es: "En un tramo de vía con un carril de aceleración, ¿se considera adelantamiento que un vehículo avance más rápidamente que otro que lo hace por el carril normal?",
      prompt: { ru: "Если на участке есть полоса разгона, считается ли обгоном, что машина на ней едет быстрее, чем по основной полосе?", en: "Where there is an acceleration lane, is it overtaking if a vehicle in it moves faster than one in the normal lane?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, como otro adelantamiento cualquiera.", ru: "Да, как любой другой обгон.", en: "Yes, like any other overtaking." },
        { es: "Sí, porque se trata de una vía interurbana.", ru: "Да, потому что это загородная дорога.", en: "Yes, because it is an interurban road." }
      ],
      answer: 0,
      explain: { ru: "Движение по полосе разгона быстрее соседней полосы обгоном не считается (RGC, ст. 82).", en: "Moving faster in an acceleration lane than in the adjacent lane is not regarded as overtaking (RGC art. 82)." } },
    { es: "Durante el día, con niebla densa o lluvia intensa, ¿se puede circular con la luz de largo alcance encendida?",
      prompt: { ru: "Можно ли днём в густой туман или сильный дождь ехать с дальним светом?", en: "During the day, in thick fog or heavy rain, may you drive with main beam on?" },
      options: [
        { es: "No, sólo puede encenderse la luz de corto alcance.", ru: "Нет, можно включать только ближний.", en: "No, only dipped beam may be used." },
        { es: "No, la luz de largo alcance sólo puede encenderse de noche.", ru: "Нет, дальний можно только ночью.", en: "No, main beam may only be used at night." },
        { es: "Sí, pero es aconsejable encender la luz de cruce.", ru: "Да, но лучше включить ближний.", en: "Yes, but it is advisable to use dipped beam." }
      ],
      answer: 2,
      explain: { ru: "При плохой видимости разрешены передние противотуманные, ближний или дальний свет (RGC, ст. 106.2), но в тумане дальний отражается и слепит самого водителя, поэтому лучше ближний.", en: "In poor visibility front fog lights, dipped or main beam are allowed (RGC art. 106.2), but in fog main beam reflects back and dazzles you, so dipped is better." } },
    { es: "En los vehículos de anchura inferior a un metro, la carga no debe sobresalir por la parte posterior más de...",
      prompt: { ru: "У транспортного средства шириной менее метра груз не должен выступать сзади больше чем на…", en: "On vehicles less than one metre wide, the load must not stick out at the rear by more than…" },
      options: [
        { es: "0,40 metros.", ru: "0,40 м.", en: "0.40 metres." },
        { es: "0,50 metros.", ru: "0,50 м.", en: "0.50 metres." },
        { es: "0,25 metros", ru: "0,25 м.", en: "0.25 metres." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 15.4: у машин уже 1 м груз может выступать по бокам до 0,50 м от оси, спереди — нет, сзади — до 0,25 м.", en: "RGC art. 15.4: on vehicles under 1 m wide the load may stick out up to 0.50 m each side of the axis, not at all in front, and up to 0.25 m at the rear." } },
    { es: "Esta señal vertical, ¿qué significa?",
      prompt: { ru: "Что означает этот вертикальный знак?", en: "What does this vertical sign mean?" },
      options: [
        { es: "Zona de estacionamiento limitado.", ru: "Зона ограниченной стоянки.", en: "Limited parking zone." },
        { es: "Estacionamiento prohibido en vado.", ru: "Стоянка запрещена у въезда (vado).", en: "No parking at a driveway." },
        { es: "Estacionamiento prohibido.", ru: "Стоянка запрещена.", en: "No parking." }
      ],
      answer: 0,
      explain: { ru: "R-309 — зона стоянки ограниченной продолжительности; водитель должен обозначить время начала стоянки (талон, паркомат) (Каталог, R-309).", en: "R-309 marks a zone of limited-duration parking; the driver must show the start time (ticket, meter) (Catalogue, R-309)." },
      sign: "R-309" },
    { es: "El funcionamiento del airbag, ¿puede llegar a ser peligroso en un accidente?",
      prompt: { ru: "Может ли срабатывание подушки безопасности быть опасным при аварии?", en: "Can the airbag deploying be dangerous in a crash?" },
      options: [
        { es: "Sí, si no se lleva puesto el cinturón de seguridad.", ru: "Да, если не пристёгнут ремень.", en: "Yes, if the seat belt is not worn." },
        { es: "Sí, siempre.", ru: "Да, всегда.", en: "Yes, always." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 0,
      explain: { ru: "Подушка раскрывается очень быстро; непристёгнутого человека бросает на неё, и она может травмировать. Подушка работает вместе с ремнём, а не вместо него.", en: "An airbag inflates extremely fast; an unbelted occupant is thrown into it and can be injured. It works with the belt, not instead of it." } },
    { es: "Al estacionar en una pendiente descendente, ¿qué precauciones debe adoptar?",
      prompt: { ru: "Какие меры нужно принять, оставляя машину на спуске?", en: "When parking on a downhill slope, what precautions must you take?" },
      options: [
        { es: "Dejar colocada la primera marcha.", ru: "Оставить первую передачу.", en: "Leave first gear engaged." },
        { es: "Parar el motor, poner el freno de estacionamiento y dejar colocada la marcha atrás si la caja de cambios es manual.", ru: "Заглушить двигатель, затянуть стояночный тормоз и оставить заднюю передачу, если коробка механическая.", en: "Stop the engine, apply the parking brake and leave reverse engaged if the gearbox is manual." },
        { es: "Parar el motor y poner el freno de estacionamiento, únicamente.", ru: "Только заглушить двигатель и затянуть стояночный тормоз.", en: "Only stop the engine and apply the parking brake." }
      ],
      answer: 1,
      explain: { ru: "На спуске — двигатель заглушён, стояночный тормоз и задняя передача (с механикой; с автоматом — режим P); можно повернуть колёса к бордюру (RGC, ст. 92).", en: "Facing downhill: engine off, parking brake on and reverse engaged (manual; automatic — P); turning the wheels to the kerb also helps (RGC art. 92)." } },
    { es: "Conducir con mal tiempo, ¿puede favorecer la fatiga?",
      prompt: { ru: "Может ли езда в плохую погоду способствовать усталости?", en: "Can driving in bad weather encourage fatigue?" },
      options: [
        { es: "Sí, por ello se debe descansar con mayor frecuencia.", ru: "Да, поэтому отдыхать нужно чаще.", en: "Yes, so you should rest more often." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sólo en los viajes largos.", ru: "Только в дальних поездках.", en: "Only on long journeys." }
      ],
      answer: 0,
      explain: { ru: "Плохая погода требует большего внимания и напряжения, поэтому усталость приходит раньше.", en: "Bad weather demands more attention and tension, so fatigue comes sooner." } },
    { es: "La amortiguación, ¿contribuye a prevenir los accidentes?",
      prompt: { ru: "Помогают ли амортизаторы предотвращать аварии?", en: "Does the damping (shock absorbers) help prevent accidents?" },
      options: [
        { es: "No, en ningún caso.", ru: "Нет, никогда.", en: "No, never." },
        { es: "No, sólo contribuye al confort.", ru: "Нет, они нужны только для комфорта.", en: "No, it only adds comfort." },
        { es: "Sí.", ru: "Да.", en: "Yes." }
      ],
      answer: 2,
      explain: { ru: "Амортизаторы держат колёса прижатыми к дороге — от них зависят торможение, устойчивость в поворотах и аквапланирование.", en: "Shock absorbers keep the wheels on the road, which affects braking, cornering stability and aquaplaning." } },
    { es: "A mayor velocidad aumenta...",
      prompt: { ru: "С ростом скорости увеличивается…", en: "As speed increases, so does…" },
      options: [
        { es: "La eficacia de los elementos de seguridad del vehículo.", ru: "Эффективность систем безопасности машины.", en: "The effectiveness of the vehicle’s safety features." },
        { es: "La fatiga que puede aparecer durante la conducción.", ru: "Усталость, которая может появиться за рулём.", en: "The fatigue that can appear while driving." },
        { es: "La capacidad del conductor para anticiparse a las circunstancias del tráfico.", ru: "Способность водителя предвидеть дорожную обстановку.", en: "The driver’s ability to anticipate traffic situations." }
      ],
      answer: 1,
      explain: { ru: "Чем выше скорость, тем больше напряжение и быстрее усталость; способность предвидеть, наоборот, падает.", en: "The higher the speed, the more strain and the sooner fatigue sets in; the ability to anticipate falls." } },
    { es: "Los cinturones de seguridad, ¿son eficaces para prevenir lesiones?",
      prompt: { ru: "Эффективны ли ремни безопасности для предотвращения травм?", en: "Are seat belts effective in preventing injuries?" },
      options: [
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, pero sólo cuando se conduce a poca velocidad.", ru: "Да, но только на малой скорости.", en: "Yes, but only at low speed." }
      ],
      answer: 0,
      explain: { ru: "Ремень — главный элемент пассивной безопасности: он многократно снижает риск гибели и тяжёлых травм на любой скорости.", en: "The belt is the main passive-safety device: it greatly reduces the risk of death and serious injury at any speed." } },
    { es: "Si vende su vehículo, ¿debe comunicarlo a la Jefatura de Tráfico?",
      prompt: { ru: "Если вы продаёте машину, нужно ли сообщать об этом в Дорожное управление (Jefatura de Tráfico)?", en: "If you sell your vehicle, must you inform the Traffic Department?" },
      options: [
        { es: "No. El nuevo titular es el que tiene que comunicar la compra.", ru: "Нет. Сообщает о покупке новый владелец.", en: "No. The new owner must report the purchase." },
        { es: "Sí, pero no hay plazo obligatorio para comunicar la venta.", ru: "Да, но срока нет.", en: "Yes, but there is no deadline." },
        { es: "Sí. Debo comunicar la venta en el plazo de 10 días, indicando los datos del nuevo titular.", ru: "Да. Сообщить о продаже нужно в течение 10 дней, указав данные нового владельца.", en: "Yes. I must report the sale within 10 days, giving the new owner’s details." }
      ],
      answer: 2,
      explain: { ru: "Продавец уведомляет DGT в течение 10 дней (Reglamento General de Vehículos, ст. 32), иначе штрафы нового владельца могут прийти ему.", en: "The seller must notify the DGT within 10 days (General Vehicle Regulations art. 32), otherwise the new owner’s fines may reach him." } },
    { es: "Los ocupantes del vehículo van a bajarse, ¿por qué lado deben hacerlo?",
      prompt: { ru: "Пассажиры собираются выйти из машины. С какой стороны?", en: "The occupants are about to get out. Which side should they use?" },
      options: [
        { es: "Por el lado más próximo al borde de la vía, como norma general.", ru: "Как правило, со стороны, ближайшей к краю дороги.", en: "As a rule, the side nearest the edge of the road." },
        { es: "Por el lado derecho siempre.", ru: "Всегда справа.", en: "Always the right." },
        { es: "Por ambos lados.", ru: "С обеих сторон.", en: "Either side." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 114.2: как правило, входят и выходят со стороны, ближайшей к краю дороги, и только когда машина стоит.", en: "RGC art. 114.2: as a rule, get in and out on the side nearest the road edge and only when the vehicle has stopped." } },
    { es: "El agente balancea una luz roja o amarilla, ¿a qué obliga?",
      prompt: { ru: "Регулировщик раскачивает красный или жёлтый фонарь. Что это значит?", en: "An officer swings a red or yellow light. What does it require?" },
      options: [
        { es: "A disminuir la velocidad.", ru: "Снизить скорость.", en: "To slow down." },
        { es: "A pasar por el lado correspondiente al brazo con el que realiza la señal.", ru: "Проехать со стороны руки, которой он подаёт сигнал.", en: "To pass on the side of the arm making the signal." },
        { es: "A detenerse a los usuarios de la vía hacia los que dirige la luz.", ru: "Остановиться тем, на кого направлен фонарь.", en: "Road users towards whom he points the light must stop." }
      ],
      answer: 2,
      explain: { ru: "Покачивание красного или жёлтого фонаря обязывает остановиться тех, на кого он направлен (RGC, ст. 143).", en: "Swinging a red or yellow light requires the road users it is aimed at to stop (RGC art. 143)." } },
    { es: "Al aproximarnos a un autobús con esta señal en su parte posterior y que se encuentra parado recogiendo pasajeros, se deberá...",
      prompt: { ru: "Приближаясь к автобусу с таким знаком сзади, который стоит и забирает пассажиров, нужно…", en: "Approaching a bus with this sign on its rear that has stopped to pick up passengers, you must…" },
      options: [
        { es: "Reducir la velocidad y si fuera preciso detener el vehículo.", ru: "Снизить скорость и при необходимости остановиться.", en: "Slow down and, if necessary, stop." },
        { es: "Avisar de nuestra presencia con ráfagas de luz.", ru: "Предупредить о себе миганием фар.", en: "Warn of our presence by flashing the headlights." },
        { es: "Siempre, parar detrás del vehículo hasta que reanude la marcha.", ru: "Всегда останавливаться за ним, пока он не тронется.", en: "Always stop behind it until it moves off." }
      ],
      answer: 0,
      explain: { ru: "Знак V-10 обозначает перевозку детей: возле такого автобуса дети могут выбежать на дорогу, поэтому снижают скорость и при необходимости останавливаются.", en: "The V-10 sign marks school or child transport: children may run into the road, so slow down and stop if needed." } },
    { es: "Un cambio de rasante es:",
      prompt: { ru: "Перелом профиля дороги (cambio de rasante) — это:", en: "A cambio de rasante (crest) is:" },
      options: [
        { es: "Un tramo de vía donde hay un cambio de dirección.", ru: "Участок, где меняется направление дороги.", en: "A stretch where the road changes direction." },
        { es: "Un lugar en el que se encuentran dos tramos de vía de distinta inclinación.", ru: "Место, где встречаются два участка с разным уклоном.", en: "A place where two stretches of road with different gradients meet." },
        { es: "Un tramo de vía donde no se ve el ancho total de la calzada.", ru: "Участок, где не видна вся ширина проезжей части.", en: "A stretch where the full width of the carriageway cannot be seen." }
      ],
      answer: 1,
      explain: { ru: "Cambio de rasante — место стыка двух уклонов (например, вершина подъёма), из-за которого дальше дорогу не видно.", en: "A cambio de rasante is where two gradients meet (e.g. the top of a hill), hiding the road beyond." } },
    { es: "Esta señal indica que empieza...",
      prompt: { ru: "Этот знак означает, что начинается…", en: "This sign indicates the start of…" },
      options: [
        { es: "Una autovía.", ru: "Скоростная дорога (autovía).", en: "An autovía." },
        { es: "Una autopista.", ru: "Автострада (autopista).", en: "An autopista (motorway)." },
        { es: "Una carretera con un paso elevado.", ru: "Дорога с путепроводом.", en: "A road with a flyover." }
      ],
      answer: 1,
      explain: { ru: "S-1 «Autopista» — начало автострады; с этого места действуют её особые правила (Каталог, S-1).", en: "S-1 ‘Autopista’ marks the start of a motorway, where its special rules apply (Catalogue, S-1)." },
      sign: "S-1" },
    { es: "A la vista de esta señal, ¿puede pasar conduciendo un ciclomotor?",
      prompt: { ru: "При таком знаке можно ли проехать на мопеде?", en: "With this sign, may you ride through on a moped?" },
      options: [
        { es: "Sí, porque no es un vehículo a motor.", ru: "Да, ведь это не механическое транспортное средство.", en: "Yes, because it is not a motor vehicle." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, porque la señal sólo prohíbe el paso a automóviles, y no a ciclomotores.", ru: "Да, ведь знак запрещает въезд только автомобилям, а не мопедам.", en: "Yes, because the sign only bans motor cars, not mopeds." }
      ],
      answer: 1,
      explain: { ru: "R-100 «Circulación prohibida» запрещает движение любых транспортных средств в обоих направлениях, в том числе мопедов (Каталог, R-100).", en: "R-100 ‘Circulación prohibida’ bans all vehicles in both directions, mopeds included (Catalogue, R-100)." },
      sign: "R-100" },
    { es: "En una intersección regulada por esta señal, ¿a quién debe ceder el paso?",
      prompt: { ru: "На перекрёстке с таким знаком кому нужно уступить?", en: "At a junction with this sign, who must you give way to?" },
      options: [
        { es: "A ningún vehículo, porque esta señal me indica que circulo por la vía con prioridad.", ru: "Никому: знак показывает, что я на главной дороге.", en: "No one, because the sign shows I am on the priority road." },
        { es: "Sólo a los vehículos que tengan mayores dificultades de maniobra.", ru: "Только машинам, которым труднее маневрировать.", en: "Only vehicles that find it harder to manoeuvre." },
        { es: "A los vehículos que se aproximen por mi derecha.", ru: "Машинам, которые подъезжают справа.", en: "Vehicles approaching from my right." }
      ],
      answer: 2,
      explain: { ru: "P-2 предупреждает о перекрёстке, где действует общее правило: уступить тем, кто справа (Каталог, P-2; RGC, ст. 57).", en: "P-2 warns of a junction where the general rule applies: give way to traffic from the right (Catalogue, P-2; RGC art. 57)." },
      sign: "P-2" },
    { es: "Si presencia un accidente con víctimas y no ha llegado ayuda, ¿debe detenerse para prestar auxilio?",
      prompt: { ru: "Если вы видите аварию с пострадавшими и помощь ещё не прибыла, нужно ли остановиться и помочь?", en: "If you witness an accident with casualties and help has not arrived, must you stop to help?" },
      options: [
        { es: "No, puesto que puedo provocar otro accidente.", ru: "Нет, я могу вызвать ещё одну аварию.", en: "No, since I could cause another accident." },
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No, pero llamaré inmediatamente a los servicios policiales y de urgencia.", ru: "Нет, но сразу позвоню в полицию и скорую.", en: "No, but I will call the police and emergency services immediately." }
      ],
      answer: 1,
      explain: { ru: "Очевидцы обязаны помочь пострадавшим, насколько это возможно без риска, и вызвать службы 112 (LSV, ст. 51); неоказание помощи может быть преступлением.", en: "Witnesses must help the injured as far as they safely can and call 112 (LSV art. 51); failing to help can be a crime." } },
    { es: "Circula con su turismo por una carretera en la que aparece esta señal de restricción con un panel de color amarillo que nos indica que no se permite circular a....",
      prompt: { ru: "Вы едете на легковом автомобиле по дороге, где стоит знак ограничения с жёлтым табло. Он означает, что запрещено ехать…", en: "You are driving a car on a road with this restriction sign showing a yellow panel. It tells you that the following may not travel…" },
      options: [
        { es: "Camiones de M.M.A menor de 3.500 kg ni conjuntos de vehículos.", ru: "Грузовикам массой меньше 3 500 кг и автопоездам.", en: "Lorries under 3,500 kg MMA or vehicle combinations." },
        { es: "Cualquier vehículo de más de 3.500 kg.", ru: "Любым транспортным средствам массой больше 3 500 кг.", en: "Any vehicle over 3,500 kg." },
        { es: "Camiones de M.M.A mayor de 3.500 kg ni vehículos articulados.", ru: "Грузовикам массой больше 3 500 кг и сочленённым транспортным средствам.", en: "Lorries over 3,500 kg MMA or articulated vehicles." }
      ],
      answer: 2,
      explain: { ru: "Снежные уровни: зелёный, жёлтый, красный, чёрный. Жёлтый — грузовикам свыше 3 500 кг и сочленённым ехать нельзя, остальные — не быстрее 60 км/ч и с осторожностью.", en: "Snow levels are green, yellow, red and black. Yellow: lorries over 3,500 kg and articulated vehicles may not travel; others at most 60 km/h with care." } },
    { es: "Cuando la goma de un neumático se endurece por envejecimiento, ¿es peligroso?",
      prompt: { ru: "Опасно ли, когда резина шины затвердела от старости?", en: "Is it dangerous when a tyre’s rubber hardens with age?" },
      options: [
        { es: "Sí, porque el vehículo puede derrapar por falta de agarre.", ru: "Да, машину может занести из-за плохого сцепления.", en: "Yes, because the vehicle may skid for lack of grip." },
        { es: "No, porque la goma dura se agarra mejor a la calzada.", ru: "Нет, твёрдая резина лучше держит дорогу.", en: "No, because hard rubber grips the road better." },
        { es: "Sí, pero sólo cuando la calzada está mojada.", ru: "Да, но только на мокрой дороге.", en: "Yes, but only when the road is wet." }
      ],
      answer: 0,
      explain: { ru: "Старая затвердевшая резина хуже держит дорогу и может растрескаться — даже при нормальном протекторе шины меняют.", en: "Old hardened rubber grips worse and can crack — such tyres are replaced even if the tread is fine." } },
    { es: "En el arcén de esta vía, ¿puede inmovilizar su vehículo para ver el paisaje?",
      prompt: { ru: "Можно ли остановиться на обочине этой дороги, чтобы посмотреть на пейзаж?", en: "May you stop on the hard shoulder of this road to look at the scenery?" },
      options: [
        { es: "Sí, porque el arcén es ancho.", ru: "Да, ведь обочина широкая.", en: "Yes, because the shoulder is wide." },
        { es: "No, porque está prohibido.", ru: "Нет, это запрещено.", en: "No, because it is forbidden." },
        { es: "Sí, porque no hay señales que lo prohíben.", ru: "Да, ведь знаков запрета нет.", en: "Yes, because there are no signs forbidding it." }
      ],
      answer: 1,
      explain: { ru: "За городом останавливаются вне проезжей части, оставляя свободной пригодную для движения часть обочины (RGC, ст. 90–91); на автомагистралях останавливаться можно только в экстренном случае.", en: "Outside built-up areas you stop off the carriageway, leaving the usable part of the shoulder free (RGC arts. 90–91); on motorways only emergencies justify stopping." } },
    { es: "Es de noche y necesita inmovilizar su vehículo en el arcén de una carretera por avería. ¿Qué luces debe encender?",
      prompt: { ru: "Ночью вам нужно остановить машину на обочине загородной дороги из-за поломки. Какие огни включить?", en: "It is night and you must stop on the shoulder of a road because of a breakdown. Which lights must be on?" },
      options: [
        { es: "Sólo las luces de posición.", ru: "Только габаритные огни.", en: "Only the side lights." },
        { es: "Las luces de emergencia y las luces cortas.", ru: "Аварийную сигнализацию и ближний свет.", en: "The hazard lights and dipped beam." },
        { es: "Las de posición y las de emergencia.", ru: "Габаритные огни и аварийную сигнализацию.", en: "The side lights and the hazard lights." }
      ],
      answer: 2,
      explain: { ru: "Остановленная ночью машина обозначается габаритами (RGC, ст. 105) и аварийкой; кроме того, с 1 января 2026 года нужно поставить световой знак V-16 (ст. 130.4).", en: "A vehicle stopped at night shows side lights (RGC art. 105) and hazard lights; since 1 January 2026 the V-16 light must also be placed (art. 130.4)." } },
    { es: "¿Cuándo está bien colocado en el asiento para conducir?",
      prompt: { ru: "Когда вы правильно сидите за рулём?", en: "When are you correctly seated to drive?" },
      options: [
        { es: "Cuando llevo las piernas un poco dobladas y el cuerpo recto.", ru: "Когда ноги слегка согнуты, а корпус прямо.", en: "When my legs are slightly bent and my body upright." },
        { es: "Cuando llevo las piernas rectas y el cuerpo hacia atrás.", ru: "Когда ноги прямые, а корпус откинут назад.", en: "When my legs are straight and my body leans back." },
        { es: "Cuando llevo las piernas dobladas y el cuerpo hacia adelante.", ru: "Когда ноги согнуты, а корпус наклонён вперёд.", en: "When my legs are bent and my body leans forward." }
      ],
      answer: 0,
      explain: { ru: "Ноги слегка согнуты при выжатой педали, спина прижата к спинке, руки согнуты на руле — так легче управлять и меньше усталость.", en: "Legs slightly bent with the pedal pressed, back against the seat, arms bent on the wheel — easier control and less fatigue." } },
    { es: "Una furgoneta de uso privado dedicada al transporte de personas, con capacidad para nueve plazas, incluido el conductor, ¿cuándo debe pasar la primera ITV?",
      prompt: { ru: "Фургон частного пользования для перевозки людей на девять мест вместе с водителем — когда первый ITV?", en: "A private-use van carrying people, with nine seats including the driver — when is its first ITV?" },
      options: [
        { es: "A los tres años de antigüedad.", ru: "Через три года.", en: "At three years old." },
        { es: "A los cuatro años de antigüedad.", ru: "Через четыре года.", en: "At four years old." },
        { es: "A los dos años de antigüedad.", ru: "Через два года.", en: "At two years old." }
      ],
      answer: 1,
      explain: { ru: "До 9 мест включительно и частное пользование — как легковой автомобиль: первый ITV через 4 года (RD 920/2017).", en: "Up to 9 seats and private use counts as a car: first ITV at 4 years (RD 920/2017)." } },
    { es: "El tiempo desde que ve un peligro hasta que actúa, ¿cómo se llama?",
      prompt: { ru: "Как называется время от момента, когда вы видите опасность, до начала действия?", en: "What is the time from seeing a hazard to acting called?" },
      options: [
        { es: "Tiempo de frenado.", ru: "Время торможения.", en: "Braking time." },
        { es: "Tiempo de reacción.", ru: "Время реакции.", en: "Reaction time." },
        { es: "Tiempo de detención.", ru: "Время остановки.", en: "Stopping time." }
      ],
      answer: 1,
      explain: { ru: "Время реакции — от восприятия опасности до начала действия (обычно около 1 секунды); за ним следует торможение.", en: "Reaction time runs from perceiving the hazard to starting to act (typically about 1 second); braking follows." } },
    { es: "El factor de riesgo que influye en la mayor parte de los accidentes, ¿cuál es?",
      prompt: { ru: "Какой фактор риска влияет на большинство аварий?", en: "Which risk factor is involved in most accidents?" },
      options: [
        { es: "El factor vía y entorno.", ru: "Дорога и окружающая среда.", en: "The road and environment factor." },
        { es: "El factor humano.", ru: "Человеческий фактор.", en: "The human factor." },
        { es: "El factor vehículo.", ru: "Транспортное средство.", en: "The vehicle factor." }
      ],
      answer: 1,
      explain: { ru: "В большинстве аварий решающую роль играет человек: скорость, отвлечение, алкоголь, усталость.", en: "In most accidents the human factor is decisive: speed, distraction, alcohol, fatigue." } },
    { es: "Llevar encendido el teléfono móvil en el vehículo, ¿puede resultar peligroso?",
      prompt: { ru: "Может ли быть опасным включённый мобильный телефон в машине?", en: "Can having the mobile phone switched on in the car be dangerous?" },
      options: [
        { es: "No, si no se va a utilizar.", ru: "Нет, если им не пользоваться.", en: "No, if it is not going to be used." },
        { es: "Sí, el sonido del teléfono, al igual que otro ruido, puede sorprender al conductor.", ru: "Да, звонок, как и любой шум, может застать водителя врасплох.", en: "Yes, its ring, like any noise, can startle the driver." },
        { es: "No, porque no es un ruido que pueda distraer al conductor.", ru: "Нет, этот звук не отвлекает водителя.", en: "No, because it is not a noise that can distract the driver." }
      ],
      answer: 1,
      explain: { ru: "Неожиданный звонок отвлекает и провоцирует взять телефон; его лучше перевести в режим «за рулём» или беззвучный.", en: "An unexpected ring distracts and tempts you to pick up the phone; better switch it to driving or silent mode." } },
    { es: "Existe un mayor riesgo de somnolencia en vías con...",
      prompt: { ru: "Риск сонливости выше на дорогах с…", en: "There is a greater risk of drowsiness on roads with…" },
      options: [
        { es: "muchas curvas.", ru: "большим количеством поворотов.", en: "many bends." },
        { es: "mucho tráfico.", ru: "интенсивным движением.", en: "heavy traffic." },
        { es: "trazado monótono.", ru: "однообразным профилем.", en: "a monotonous layout." }
      ],
      answer: 2,
      explain: { ru: "Однообразная прямая дорога убаюкивает: внимание падает, и легче задремать.", en: "A monotonous straight road lulls you: attention drops and it is easier to doze off." } },
    { es: "Si un vehículo tiene el intermitente derecho encendido, pero su conductor señaliza con el brazo que va a girar a la izquierda, ¿qué señal prevalece?",
      prompt: { ru: "У машины включён правый поворотник, а водитель показывает рукой поворот налево. Какой сигнал главнее?", en: "A vehicle has its right indicator on, but the driver signals with his arm that he will turn left. Which signal prevails?" },
      options: [
        { es: "Depende de la circulación.", ru: "Зависит от движения.", en: "It depends on the traffic." },
        { es: "La señal luminosa.", ru: "Световой.", en: "The light signal." },
        { es: "La realizada con el brazo.", ru: "Сигнал рукой.", en: "The arm signal." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 108.2: сигналы рукой, если их хорошо видно, отменяют любые противоречащие им световые сигналы.", en: "RGC art. 108.2: arm signals, when visible, cancel any light signal that contradicts them." } },
    { es: "¿Puede circular un turismo que expulsa por el tubo de escape más humo de lo permitido?",
      prompt: { ru: "Может ли ездить легковой автомобиль, из выхлопной трубы которого выходит больше дыма, чем допустимо?", en: "May a car that emits more exhaust smoke than permitted be driven?" },
      options: [
        { es: "Sí, mientras no sean gases nocivos.", ru: "Да, если газы не вредные.", en: "Yes, as long as the gases are not harmful." },
        { es: "Sí, pero únicamente fuera de poblado.", ru: "Да, но только за городом.", en: "Yes, but only outside built-up areas." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 2,
      explain: { ru: "Превышение допустимых выбросов запрещено; агенты могут даже обездвижить такую машину (RGC, ст. 7; LSV, ст. 104).", en: "Exceeding permitted emissions is banned; officers may even immobilise the vehicle (RGC art. 7; LSV art. 104)." } },
    { es: "En vías interurbanas, los ciclos y ciclomotores de dos ruedas, ¿dónde deben situarse para girar a la izquierda?",
      prompt: { ru: "Где на загородной дороге должны располагаться велосипеды и двухколёсные мопеды, чтобы повернуть налево?", en: "On interurban roads, where must cycles and two-wheeled mopeds position themselves to turn left?" },
      options: [
        { es: "En el carril izquierdo.", ru: "На левой полосе.", en: "In the left-hand lane." },
        { es: "En el centro, sin invadir el sentido contrario.", ru: "По центру, не выезжая на встречную.", en: "In the centre, without entering the opposite direction." },
        { es: "A la derecha, fuera de la calzada si es posible, e iniciarlo desde ese lugar.", ru: "Справа, по возможности вне проезжей части, и оттуда начинать манёвр.", en: "On the right, off the carriageway if possible, and start the manoeuvre from there." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 76: если нет специальной полосы, велосипеды и мопеды за городом поворачивают налево, встав справа, по возможности вне проезжей части, и пересекая дорогу оттуда.", en: "RGC art. 76: where there is no special lane, cycles and mopeds outside towns turn left by waiting on the right, off the carriageway if possible, and crossing from there." } },
    { es: "Mantener la distancia de seguridad adecuada, sobre todo en ciudad, ¿es una recomendación válida para evitar accidentes con las motocicletas?",
      prompt: { ru: "Держать безопасную дистанцию, особенно в городе, — полезный совет, чтобы избежать аварий с мотоциклами?", en: "Is keeping a proper safety distance, especially in town, a valid tip for avoiding accidents with motorcycles?" },
      options: [
        { es: "Sí, porque se pueden evitar alcances.", ru: "Да, так можно избежать наездов сзади.", en: "Yes, because rear-end collisions can be avoided." },
        { es: "No, porque la distancia de seguridad no influye en los accidentes de moto.", ru: "Нет, дистанция не влияет на аварии мотоциклов.", en: "No, distance does not affect motorcycle accidents." },
        { es: "No, porque esta recomendación carece de sentido circulando.", ru: "Нет, этот совет не имеет смысла на ходу.", en: "No, the advice makes no sense when moving." }
      ],
      answer: 0,
      explain: { ru: "Мотоцикл тормозит быстрее машины; большая дистанция позволяет не врезаться в него сзади.", en: "A motorcycle can stop faster than a car; a longer gap avoids running into it from behind." } },
    { es: "El conductor que consume cocaína...",
      prompt: { ru: "Водитель, употребляющий кокаин…", en: "A driver who takes cocaine…" },
      options: [
        { es: "puede volverse más competitivo y agresivo.", ru: "может стать более соперничающим и агрессивным.", en: "can become more competitive and aggressive." },
        { es: "es más tranquilo y menos competitivo.", ru: "спокойнее и меньше соперничает.", en: "is calmer and less competitive." },
        { es: "es más agresivo y menos competitivo.", ru: "агрессивнее, но меньше соперничает.", en: "is more aggressive and less competitive." }
      ],
      answer: 0,
      explain: { ru: "Кокаин — стимулятор: переоценка себя, агрессивность, склонность к риску и соревнованию на дороге.", en: "Cocaine is a stimulant: overconfidence, aggression and a tendency to take risks and compete on the road." } },
    { es: "Cuando llueve o hay viento, ¿por qué hay que tener más precaución con los ciclistas?",
      prompt: { ru: "Почему в дождь или ветер нужно быть осторожнее с велосипедистами?", en: "When it rains or is windy, why must you take more care with cyclists?" },
      options: [
        { es: "Porque tienen más probabilidad de caerse.", ru: "Потому что они чаще падают.", en: "Because they are more likely to fall." },
        { es: "Porque pueden salpicar agua.", ru: "Потому что могут обрызгать водой.", en: "Because they can splash water." },
        { es: "Porque suelen estorbar el tráfico.", ru: "Потому что обычно мешают движению.", en: "Because they usually get in the way of traffic." }
      ],
      answer: 0,
      explain: { ru: "Порывы ветра и мокрое покрытие легко выводят велосипед из равновесия; им нужно больше места и интервал не менее 1,5 м.", en: "Gusts and wet surfaces easily unbalance a bicycle; give cyclists more room and at least 1.5 m." } },
    { es: "¿Es correcto el uso frecuente del freno de mano cuando se conduce?",
      prompt: { ru: "Правильно ли часто пользоваться ручным тормозом за рулём?", en: "Is frequent use of the handbrake while driving correct?" },
      options: [
        { es: "Sí, se debe utilizar en curvas cerradas.", ru: "Да, на крутых поворотах.", en: "Yes, on tight bends." },
        { es: "Sí, siempre que el vehículo tenga ABS.", ru: "Да, если у машины есть ABS.", en: "Yes, as long as the vehicle has ABS." },
        { es: "No, sólo se debe utilizar en los casos de inmovilización del vehículo.", ru: "Нет, его используют только для обездвиживания машины.", en: "No, it should only be used to keep the vehicle stationary." }
      ],
      answer: 2,
      explain: { ru: "Стояночный тормоз удерживает стоящую машину; на ходу им пользуются только в аварийной ситуации — он блокирует задние колёса.", en: "The parking brake holds a stationary car; on the move it is for emergencies only — it locks the rear wheels." } },
    { es: "El alumbrado de gálibo es obligatorio para...",
      prompt: { ru: "Габаритные огни (gálibo) обязательны для…", en: "Clearance (gálibo) lights are compulsory for…" },
      options: [
        { es: "Los vehículos que transporten mercancías peligrosas.", ru: "Машин, перевозящих опасные грузы.", en: "Vehicles carrying dangerous goods." },
        { es: "Los vehículos de asistencia en carretera.", ru: "Машин дорожной помощи.", en: "Road assistance vehicles." },
        { es: "Los vehículos cuya anchura sea mayor de 2,10 metros.", ru: "Машин шириной более 2,10 м.", en: "Vehicles wider than 2.10 metres." }
      ],
      answer: 2,
      explain: { ru: "Огни gálibo показывают ширину и высоту крупной машины; обязательны при ширине более 2,10 м (Reglamento General de Vehículos).", en: "Gálibo lights show a large vehicle’s width and height; compulsory when it is over 2.10 m wide (General Vehicle Regulations)." } },
    { es: "Con el permiso de la clase B, ¿qué otros vehículos se pueden conducir, además de turismos?",
      prompt: { ru: "Что ещё, кроме легковых машин, можно водить с правами категории B?", en: "With a class B licence, what else may you drive besides cars?" },
      options: [
        { es: "Todos los vehículos que se pueden conducir con el permiso A.", ru: "Всё, что можно водить с правами A.", en: "All vehicles that can be driven with an A licence." },
        { es: "Ciclomotores de dos, tres y cuatro ruedas.", ru: "Мопеды двух-, трёх- и четырёхколёсные.", en: "Two-, three- and four-wheeled mopeds." },
        { es: "Motocicletas de más de 125 cc.", ru: "Мотоциклы больше 125 см³.", en: "Motorcycles over 125 cc." }
      ],
      answer: 1,
      explain: { ru: "Права B включают категорию AM (мопеды); мотоциклы до 125 см³ — только после 3 лет стажа и только в Испании; больше 125 см³ — нельзя (RGCond, ст. 4).", en: "A B licence includes AM (mopeds); motorcycles up to 125 cc only after 3 years and only in Spain; over 125 cc — no (RGCond art. 4)." } },
    { es: "Para aumentar la fluidez del tráfico, se ha abierto un carril para circular en sentido contrario al habitual, ¿qué vehículos pueden circular por este carril?",
      prompt: { ru: "Чтобы движение было свободнее, открыли полосу для движения во встречном направлении. Какие машины могут по ней ехать?", en: "To improve traffic flow, a lane has been opened in the opposite direction to usual. Which vehicles may use it?" },
      options: [
        { es: "Todos los autorizados a circular por la vía.", ru: "Все, кому разрешено ехать по этой дороге.", en: "All those allowed on the road." },
        { es: "Todos los que pueden circular a más de 60 km/h.", ru: "Все, кто может ехать быстрее 60 км/ч.", en: "All that can travel above 60 km/h." },
        { es: "Los turismos sin remolque y las motocicletas.", ru: "Легковые автомобили без прицепа и мотоциклы.", en: "Cars without a trailer and motorcycles." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 41: такими полосами могут пользоваться только мотоциклы и легковые автомобили, без прицепа; 60–80 км/ч и ближний свет.", en: "RGC art. 41: only motorcycles and cars without a trailer may use such lanes, at 60–80 km/h with dipped beam." } },
    { es: "Un semáforo con una flecha negra sobre una luz roja fija...",
      prompt: { ru: "Светофор с чёрной стрелкой на постоянном красном сигнале…", en: "A traffic light with a black arrow on a steady red…" },
      options: [
        { es: "Prohíbe circular por donde indica la flecha.", ru: "Запрещает ехать в направлении стрелки.", en: "Prohibits going in the direction of the arrow." },
        { es: "Permite seguir circulando extremando la precaución.", ru: "Позволяет продолжать движение с особой осторожностью.", en: "Allows you to continue with extra care." },
        { es: "Obliga a continuar por donde indica la flecha.", ru: "Обязывает ехать в направлении стрелки.", en: "Requires you to go in the direction of the arrow." }
      ],
      answer: 0,
      explain: { ru: "Стрелка на круглом сигнале уточняет направление, к которому он относится: красный со стрелкой запрещает именно это направление (RGC, ст. 146).", en: "An arrow on a round light restricts it to that direction: red with an arrow prohibits that direction (RGC art. 146)." } },
    { es: "En esta autovía hay mucha niebla. ¿Se puede circular a menos de 60 km/h?",
      prompt: { ru: "На этой автомагистрали сильный туман. Можно ли ехать медленнее 60 км/ч?", en: "There is thick fog on this autovía. May you drive below 60 km/h?" },
      options: [
        { es: "No, porque es una vía para circulación rápida.", ru: "Нет, это дорога для быстрого движения.", en: "No, because it is a road for fast traffic." },
        { es: "Sí, porque con la niebla se debe moderar la velocidad.", ru: "Да, в тумане нужно снизить скорость.", en: "Yes, because speed must be moderated in fog." },
        { es: "No, en autovía nunca se debe circular a menos de la velocidad mínima permitida.", ru: "Нет, на autovía нельзя ехать ниже минимальной скорости.", en: "No, on an autovía you must never drive below the minimum speed." }
      ],
      answer: 1,
      explain: { ru: "Минимум 60 км/ч на автомагистралях не действует, если обстановка не позволяет ехать быстрее без риска (RGC, ст. 49.2).", en: "The 60 km/h minimum on motorways does not apply when conditions make it unsafe to go faster (RGC art. 49.2)." } },
    { es: "El alcohol, la fatiga y la velocidad excesiva, ¿de qué factor de riesgo forman parte?",
      prompt: { ru: "Алкоголь, усталость и превышение скорости относятся к какому фактору риска?", en: "Alcohol, fatigue and excessive speed belong to which risk factor?" },
      options: [
        { es: "Del factor vehículo.", ru: "К фактору транспортного средства.", en: "The vehicle factor." },
        { es: "Del factor vía y entorno.", ru: "К фактору дороги и окружения.", en: "The road and environment factor." },
        { es: "Del factor humano.", ru: "К человеческому фактору.", en: "The human factor." }
      ],
      answer: 2,
      explain: { ru: "Всё, что зависит от состояния и поведения водителя, — человеческий фактор.", en: "Anything depending on the driver’s condition and behaviour is the human factor." } },
    { es: "¿Cuántas placas de matrícula llevan las motocicletas?",
      prompt: { ru: "Сколько номерных знаков у мотоцикла?", en: "How many number plates does a motorcycle carry?" },
      options: [
        { es: "Una sola placa en la parte posterior, en posición vertical.", ru: "Один, сзади, в вертикальном положении.", en: "A single plate at the rear, in a vertical position." },
        { es: "Dos, una en la parte delantera y otra en la parte posterior.", ru: "Два: спереди и сзади.", en: "Two, one at the front and one at the rear." },
        { es: "Una sola placa en la parte delantera.", ru: "Один, спереди.", en: "A single plate at the front." }
      ],
      answer: 0,
      explain: { ru: "У мотоциклов и мопедов только задний номерной знак, установленный вертикально (перпендикулярно земле).", en: "Motorcycles and mopeds carry a rear plate only, mounted upright." } },
    { es: "Los limpiaparabrisas deben mantenerse en buen estado para circular con seguridad. Para ello se debe...",
      prompt: { ru: "Щётки стеклоочистителя должны быть исправны для безопасной езды. Для этого нужно…", en: "Windscreen wipers must be kept in good condition to drive safely. For that you should…" },
      options: [
        { es: "Comprobar que el depósito que contiene el líquido limpiaparabrisas esté siempre al máximo nivel.", ru: "Следить, чтобы бачок омывателя всегда был полон до максимума.", en: "Make sure the washer reservoir is always full to the maximum." },
        { es: "Realizar la revisión de las escobillas con el fin de asegurar su máxima eficacia.", ru: "Проверять щётки, чтобы они работали как можно лучше.", en: "Check the blades to ensure maximum effectiveness." },
        { es: "Aplicar sobre el parabrisas el líquido que recomienda el fabricante para facilitar el desplazamiento de las escobillas.", ru: "Наносить на стекло рекомендованную жидкость, чтобы щётки лучше скользили.", en: "Apply the manufacturer’s fluid to the windscreen to help the blades slide." }
      ],
      answer: 1,
      explain: { ru: "Щётки изнашиваются от солнца, пыли и мороза; их регулярно проверяют и меняют, когда остаются полосы.", en: "Wiper blades wear from sun, dust and frost; check them regularly and replace them when they smear." } },
    { es: "En condiciones meteorológicas o ambientales desfavorables, ¿cómo debe ser la separación con los vehículos que circulan delante?",
      prompt: { ru: "При неблагоприятной погоде какой должна быть дистанция до впереди идущих машин?", en: "In unfavourable weather or conditions, how should the gap to the vehicles ahead be?" },
      options: [
        { es: "Igual que cuando son favorables.", ru: "Такой же, как в хорошую погоду.", en: "The same as when conditions are favourable." },
        { es: "Menor, para ver mejor a los vehículos que circulan delante.", ru: "Меньше, чтобы лучше видеть машину впереди.", en: "Smaller, to see the vehicles ahead better." },
        { es: "Mayor, para así disponer de más tiempo y espacio para reaccionar.", ru: "Больше, чтобы было больше времени и места для реакции.", en: "Larger, to have more time and space to react." }
      ],
      answer: 2,
      explain: { ru: "Скользкая дорога и плохая видимость удлиняют тормозной путь и время реакции, поэтому дистанцию увеличивают.", en: "Slippery roads and poor visibility lengthen stopping distance and reaction time, so increase the gap." } },
    { es: "¿Quiénes están obligados a someterse a las pruebas de alcoholemia?",
      prompt: { ru: "Кто обязан проходить проверку на алкоголь?", en: "Who must submit to breath-alcohol tests?" },
      options: [
        { es: "Todos los conductores de vehículos y cualquier usuario implicado directamente como posible responsable en un accidente de circulación.", ru: "Все водители и любой участник, прямо замешанный как возможный виновник аварии.", en: "All drivers, and any road user directly involved as a possible cause of an accident." },
        { es: "Sólo los conductores que presenten síntomas de embriaguez.", ru: "Только водители с признаками опьянения.", en: "Only drivers showing signs of drunkenness." },
        { es: "Sólo los conductores de vehículos.", ru: "Только водители.", en: "Only drivers." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 21: проверку обязаны пройти все водители, а также любой участник движения, возможно виновный в аварии (например, пешеход).", en: "RGC art. 21: all drivers must take the test, and any road user who may have caused an accident (a pedestrian, say)." } },
    { es: "Un vehículo especial de reparación o conservación de vías, al entrar en una autopista, debe utilizar la luz de señalización V-2...",
      prompt: { ru: "Спецмашина для ремонта или содержания дорог, въезжая на автостраду, должна включить жёлтый маячок V-2…", en: "A special road-repair or maintenance vehicle entering a motorway must use the V-2 light…" },
      options: [
        { es: "Sólo cuando llegue al lugar de trabajo.", ru: "Только когда доедет до места работы.", en: "Only when it reaches the work site." },
        { es: "Desde la entrada de la autopista.", ru: "С момента въезда на автостраду.", en: "From the moment it enters the motorway." },
        { es: "Sólo de noche.", ru: "Только ночью.", en: "Only at night." }
      ],
      answer: 1,
      explain: { ru: "Медленная спецтехника на автостраде — препятствие, поэтому маячок V-2 включают сразу при въезде (RGC, ст. 113).", en: "A slow special vehicle on a motorway is a hazard, so the V-2 beacon goes on from the entrance (RGC art. 113)." } },
    { es: "Cuando las cintas no quedan bien estiradas, el cinturón de seguridad...",
      prompt: { ru: "Если лента ремня безопасности не натянута как следует, ремень…", en: "When the belt straps are not properly taut, the seat belt…" },
      options: [
        { es: "pierde eficacia y puede provocar lesiones durante el accidente.", ru: "теряет эффективность и может травмировать при аварии.", en: "loses effectiveness and can cause injuries in a crash." },
        { es: "protege más en caso de accidente.", ru: "лучше защищает при аварии.", en: "protects more in a crash." },
        { es: "no reduce su eficacia en caso de accidente.", ru: "не теряет эффективности при аварии.", en: "does not lose effectiveness in a crash." }
      ],
      answer: 0,
      explain: { ru: "Провисшая лента позволяет телу сместиться до натяжения; ремень должен плотно прилегать, без перекручиваний.", en: "Slack webbing lets the body move before the belt tightens; it must fit snugly with no twists." } },
    { es: "En caso de lluvia intensa, ¿es recomendable aumentar la distancia de seguridad y reducir la velocidad?",
      prompt: { ru: "При сильном дожде рекомендуется увеличить дистанцию и снизить скорость?", en: "In heavy rain, is it advisable to increase the safety distance and reduce speed?" },
      options: [
        { es: "Sí; mejora el agarre de los neumáticos, pero no es recomendable reducir la velocidad.", ru: "Да, это улучшает сцепление, но снижать скорость не рекомендуется.", en: "Yes; it improves tyre grip, but reducing speed is not advisable." },
        { es: "No; al reducir la velocidad mayor es la proporción de agua en el asfalto.", ru: "Нет; чем ниже скорость, тем больше воды на асфальте.", en: "No; the lower the speed, the more water on the asphalt." },
        { es: "Sí; ya que la adherencia es menor y, por consiguiente, la distancia de frenado aumenta.", ru: "Да, ведь сцепление хуже, и тормозной путь растёт.", en: "Yes, because grip is lower and so braking distance increases." }
      ],
      answer: 2,
      explain: { ru: "На мокрой дороге сцепление падает, тормозной путь растёт — нужны меньшая скорость и большая дистанция, без резких движений.", en: "On a wet road grip drops and stopping distance grows — slow down, leave more room and avoid sudden movements." } },
    { es: "Es obligatorio finalizar un adelantamiento...",
      prompt: { ru: "Завершать обгон обязательно…", en: "You must complete an overtaking manoeuvre…" },
      options: [
        { es: "Incorporándose al carril derecho a la mayor velocidad posible.", ru: "Возвращаясь на правую полосу на максимальной скорости.", en: "By returning to the right lane as fast as possible." },
        { es: "Únicamente señalizando el desplazamiento lateral.", ru: "Только показав смещение поворотником.", en: "Only by signalling the lateral movement." },
        { es: "Incorporándose al carril de forma gradual sin obstaculizar.", ru: "Постепенно возвращаясь в полосу, никому не мешая.", en: "By rejoining the lane gradually without obstructing." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 85.3: вернуться как можно скорее, но постепенно, не заставляя других менять траекторию или скорость, и подав сигнал.", en: "RGC art. 85.3: return as soon as possible but gradually, without making others change course or speed, and signal." } },
    { es: "¿Qué relación existe entre la velocidad y el campo de visión del conductor?",
      prompt: { ru: "Как связаны скорость и поле зрения водителя?", en: "What is the relationship between speed and the driver’s field of vision?" },
      options: [
        { es: "A mayor velocidad, menor campo visual.", ru: "Чем выше скорость, тем уже поле зрения.", en: "The higher the speed, the narrower the field of vision." },
        { es: "A menor velocidad, menor campo visual.", ru: "Чем ниже скорость, тем уже поле зрения.", en: "The lower the speed, the narrower the field of vision." },
        { es: "A mayor velocidad, mayor campo visual.", ru: "Чем выше скорость, тем шире поле зрения.", en: "The higher the speed, the wider the field of vision." }
      ],
      answer: 0,
      explain: { ru: "С ростом скорости возникает «туннельное зрение»: водитель хуже видит происходящее по сторонам.", en: "As speed increases ‘tunnel vision’ sets in: the driver sees less at the sides." } },
    { es: "En una autopista o autovía, ¿se puede utilizar la mediana en algún caso?",
      prompt: { ru: "Можно ли на автостраде или автомагистрали хоть когда-нибудь использовать разделительную полосу (mediana)?", en: "On an autopista or autovía, may the central reservation ever be used?" },
      options: [
        { es: "No, nunca.", ru: "Нет, никогда.", en: "No, never." },
        { es: "Sí, para inmovilizar el vehículo por emergencia cuando no es posible hacerlo en el arcén de la derecha.", ru: "Да, чтобы остановить машину в экстренном случае, если это невозможно на правой обочине.", en: "Yes, to stop the vehicle in an emergency when it cannot be done on the right shoulder." },
        { es: "Sí, para adelantar cuando los carriles estén ocupados.", ru: "Да, для обгона, когда все полосы заняты.", en: "Yes, to overtake when the lanes are full." }
      ],
      answer: 1,
      explain: { ru: "Обычно при поломке уходят на правую обочину; если это невозможно, машину ставят там, где она меньше мешает (RGC, ст. 130.2), — в крайнем случае и у разделительной полосы. Ехать по ней или обгонять нельзя.", en: "Normally a broken-down car goes to the right shoulder; if impossible, it stops where it causes least obstruction (RGC art. 130.2) — as a last resort by the central reservation. Driving or overtaking on it is forbidden." } },
    { es: "Un agente, con toques de silbato cortos y frecuentes, ordena...",
      prompt: { ru: "Регулировщик подаёт короткие частые свистки. Что он приказывает?", en: "An officer gives short, frequent blasts on the whistle. What is he ordering?" },
      options: [
        { es: "Que se reanude la marcha.", ru: "Продолжать движение.", en: "To move on again." },
        { es: "Que se detengan los vehículos a quienes se dirija.", ru: "Остановиться тем, к кому он обращается.", en: "The vehicles he addresses must stop." },
        { es: "Que se inmovilice el vehículo fuera de la calzada.", ru: "Остановить машину вне проезжей части.", en: "To immobilise the vehicle off the carriageway." }
      ],
      answer: 1,
      explain: { ru: "Короткие частые свистки — приказ остановиться; длинный свисток — продолжать движение (RGC, ст. 143).", en: "Short frequent whistle blasts mean stop; a long blast means move on (RGC art. 143)." } },
    { es: "¿Qué efectos puede producir un resfriado en la conducción?",
      prompt: { ru: "Как простуда может повлиять на вождение?", en: "What effects can a cold have on driving?" },
      options: [
        { es: "Desorientación.", ru: "Дезориентация.", en: "Disorientation." },
        { es: "Somnolencia y pérdida de concentración.", ru: "Сонливость и потеря концентрации.", en: "Drowsiness and loss of concentration." },
        { es: "Impulsividad.", ru: "Импульсивность.", en: "Impulsiveness." }
      ],
      answer: 1,
      explain: { ru: "Простуда и лекарства от неё (особенно антигистаминные) вызывают сонливость и снижают внимание; чихание на мгновение «ослепляет».", en: "A cold and its remedies (especially antihistamines) cause drowsiness and lower attention; a sneeze briefly ‘blinds’ you." } },
    { es: "Cuando tenga que bajar del vehículo para descargar el equipaje, ¿debe apagar el motor?",
      prompt: { ru: "Если нужно выйти из машины, чтобы выгрузить багаж, надо ли глушить двигатель?", en: "When you have to get out of the vehicle to unload luggage, must you switch off the engine?" },
      options: [
        { es: "No, no es necesario si se trata de una parada breve.", ru: "Нет, при короткой остановке не нужно.", en: "No, not for a short stop." },
        { es: "Sí, y además debe desconectar el sistema de arranque o contacto.", ru: "Да, и ещё выключить зажигание.", en: "Yes, and also switch off the ignition." },
        { es: "No, sólo debe dejar accionado el freno de mano.", ru: "Нет, достаточно затянуть ручной тормоз.", en: "No, just apply the handbrake." }
      ],
      answer: 1,
      explain: { ru: "Покидая машину, водитель глушит двигатель, выключает зажигание и затягивает тормоз, чтобы она не тронулась (RGC, ст. 92).", en: "When leaving the vehicle the driver stops the engine, switches off the ignition and applies the brake so it cannot move (RGC art. 92)." } },
    { es: "¿Qué factor se relaciona con los accidentes juveniles?",
      prompt: { ru: "Какой фактор связан с авариями молодых водителей?", en: "Which factor is linked to accidents among young drivers?" },
      options: [
        { es: "La falta de reflejos.", ru: "Плохие рефлексы.", en: "Lack of reflexes." },
        { es: "La falta de mantenimiento del vehículo.", ru: "Плохое обслуживание машины.", en: "Lack of vehicle maintenance." },
        { es: "La menor percepción del riesgo.", ru: "Слабее восприятие риска.", en: "A lower perception of risk." }
      ],
      answer: 2,
      explain: { ru: "У молодых водителей хорошая реакция, но мало опыта: они недооценивают опасность и переоценивают свои силы.", en: "Young drivers react quickly but lack experience: they underestimate risk and overestimate themselves." } },
    { es: "Cuando para realizar un cambio de sentido obstaculiza la marcha de los vehículos que circulan detrás, deberá...",
      prompt: { ru: "Если при развороте вы мешаете машинам сзади, нужно…", en: "If a U-turn would obstruct the vehicles behind you, you must…" },
      options: [
        { es: "Hacer señales con la luz de freno para advertir su maniobra.", ru: "Мигать стоп-сигналами, предупреждая о манёвре.", en: "Flash the brake lights to warn of the manoeuvre." },
        { es: "Esperar hasta que pueda realizar la maniobra.", ru: "Ждать, пока можно будет развернуться.", en: "Wait until you can do it." },
        { es: "Salir de la calzada por la derecha, si fuera posible, y esperar hasta que las condiciones de la circulación le permitan hacer la maniobra.", ru: "По возможности съехать с проезжей части вправо и ждать, пока обстановка позволит развернуться.", en: "Pull off the carriageway to the right if possible and wait until traffic allows the manoeuvre." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 78: если разворот мешает едущим сзади, нужно уйти вправо с проезжей части и развернуться, когда станет безопасно.", en: "RGC art. 78: if a U-turn would hold up traffic behind, pull off to the right and turn when it is safe." } },
    { es: "¿Es obligatorio apagar el motor cuando está cargando combustible?",
      prompt: { ru: "Обязательно ли глушить двигатель при заправке?", en: "Must the engine be switched off while refuelling?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, pero no es necesario si es el empleado de la gasolinera quien llena el depósito.", ru: "Да, но не нужно, если заправляет работник АЗС.", en: "Yes, but not if the attendant fills the tank." },
        { es: "Sí, siempre.", ru: "Да, всегда.", en: "Yes, always." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 115: при заправке двигатель должен быть заглушён всегда, кто бы ни заправлял.", en: "RGC art. 115: the engine must always be off during refuelling, whoever fills the tank." } },
    { es: "Un traje adecuado para conducir una motocicleta, debe...",
      prompt: { ru: "Подходящая одежда для езды на мотоцикле должна…", en: "Suitable clothing for riding a motorcycle should…" },
      options: [
        { es: "Estar muy ajustado al cuerpo para mejorar la estética.", ru: "Плотно облегать тело для красоты.", en: "Fit tightly for looks." },
        { es: "Tener colores oscuros.", ru: "Быть тёмной.", en: "Be dark-coloured." },
        { es: "Ser resistente a los golpes y a la abrasión en caso de caída.", ru: "Выдерживать удары и истирание при падении.", en: "Resist impact and abrasion in a fall." }
      ],
      answer: 2,
      explain: { ru: "Мотоэкипировка защищает от ударов и истирания; светлые цвета и светоотражатели делают мотоциклиста заметнее. С 1 октября 2026 года за городом обязательны перчатки, а закрытая обувь — на всех дорогах (RD 518/2026, RGC, ст. 118.1).", en: "Riding gear protects against impact and abrasion; bright colours and reflectors make you visible. Since 1 October 2026 gloves are compulsory on interurban roads and closed footwear on all roads (RD 518/2026, RGC art. 118.1)." } },
    { es: "Fumar al volante...",
      prompt: { ru: "Курение за рулём…", en: "Smoking at the wheel…" },
      options: [
        { es: "Es una conducta que puede interferir en la conducción y provocar un accidente.", ru: "Может мешать вождению и стать причиной аварии.", en: "Is behaviour that can interfere with driving and cause an accident." },
        { es: "Relaja y proporciona serenidad al fumador, lo que repercute positivamente en la conducción.", ru: "Расслабляет курильщика и хорошо сказывается на вождении.", en: "Relaxes the smoker and so improves driving." },
        { es: "Es la principal causa de distracción durante la conducción.", ru: "Главная причина отвлечения за рулём.", en: "Is the main cause of distraction while driving." }
      ],
      answer: 0,
      explain: { ru: "Прикуривание, пепел и дым отвлекают; это не главная причина отвлечения (главная — телефон), но риск реальный.", en: "Lighting up, ash and smoke distract; it is not the main cause of distraction (the phone is), but the risk is real." } },
    { es: "Fuera de poblado, como norma general , ¿por qué lado de la vía deberán circular los peatones?",
      prompt: { ru: "За городом по какой стороне дороги, как правило, должны идти пешеходы?", en: "Outside built-up areas, as a general rule, on which side of the road must pedestrians walk?" },
      options: [
        { es: "Por la derecha en casos de poca visibilidad.", ru: "По правой при плохой видимости.", en: "On the right when visibility is poor." },
        { es: "Por la izquierda.", ru: "По левой.", en: "On the left." },
        { es: "Indistintamente, por la derecha o por la izquierda siempre que haya un arcén.", ru: "По любой, если есть обочина.", en: "Either side, as long as there is a shoulder." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 122: пешеходы идут по левой обочине (навстречу машинам); по правой — только по соображениям безопасности, группами или ведя велосипед.", en: "RGC art. 122: pedestrians walk on the left shoulder (facing traffic); on the right only for safety reasons, in led groups or pushing a bicycle." } },
    { es: "Hay una nube de humo. ¿Debe utilizarse algún tipo de alumbrado?",
      prompt: { ru: "На дороге облако дыма. Нужно ли включать освещение?", en: "There is a cloud of smoke. Must any lights be used?" },
      options: [
        { es: "Sólo si viene algún vehículo en sentido contrario.", ru: "Только если едет встречная машина.", en: "Only if a vehicle is coming the other way." },
        { es: "Sí, la luz antiniebla delantera o la luz de corto o largo alcance.", ru: "Да, передние противотуманные, ближний или дальний свет.", en: "Yes, the front fog lights or the dipped or main beam." },
        { es: "No, porque es de día.", ru: "Нет, ведь сейчас день.", en: "No, because it is daytime." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 106: при дыме, тумане, сильном дожде и т. п. освещение обязательно и днём — передние противотуманные, ближний или дальний.", en: "RGC art. 106: in smoke, fog, heavy rain and the like lights are compulsory even by day — front fog, dipped or main beam." } },
    { es: "Esta señal indica peligro por...",
      prompt: { ru: "Этот знак предупреждает об опасности из-за…", en: "This sign warns of danger because of…" },
      options: [
        { es: "Pavimento deslizante por nieve.", ru: "Скользкого от снега покрытия.", en: "A surface made slippery by snow." },
        { es: "La proximidad de un tramo de vía con visibilidad reducida por niebla, lluvia o nieve.", ru: "Участка с плохой видимостью из-за тумана, дождя или снега.", en: "An approaching stretch with reduced visibility due to fog, rain or snow." },
        { es: "La proximidad de un tramo de la vía con desprendimientos frecuentes y la presencia de obstáculos en la calzada.", ru: "Участка с частыми камнепадами и препятствиями на дороге.", en: "An approaching stretch with frequent rockfalls and obstacles on the road." }
      ],
      answer: 1,
      explain: { ru: "P-33 «Visibilidad reducida» — участок, где часто резко падает видимость (туман, дождь, снег, дым) (Каталог, P-33).", en: "P-33 ‘Visibilidad reducida’ — a stretch where visibility often drops sharply (fog, rain, snow, smoke) (Catalogue, P-33)." },
      sign: "P-33" },
    { es: "¿Qué indican los conos en la calzada?",
      prompt: { ru: "Что означают конусы на проезжей части?", en: "What do cones on the carriageway indicate?" },
      options: [
        { es: "Refuerzan el significado de las líneas discontinuas del carril.", ru: "Подкрепляют значение прерывистых линий полосы.", en: "They reinforce the broken lane lines." },
        { es: "Nada, no son señales de circulación.", ru: "Ничего, это не дорожные знаки.", en: "Nothing, they are not traffic signs." },
        { es: "La prohibición de rebasar la línea imaginaria que los une.", ru: "Запрет пересекать воображаемую линию между ними.", en: "That you may not cross the imaginary line joining them." }
      ],
      answer: 2,
      explain: { ru: "Конусы — временные направляющие устройства: пересекать линию между ними запрещено, и они главнее разметки и знаков (RGC, ст. 133 и 144).", en: "Cones are temporary channelling devices: crossing the line between them is forbidden, and they override markings and signs (RGC arts. 133 and 144)." } },
    { es: "En los cambios de carril en un mismo sentido, ¿quién tiene prioridad?",
      prompt: { ru: "При перестроении в соседнюю полосу того же направления у кого преимущество?", en: "When changing lanes in the same direction, who has priority?" },
      options: [
        { es: "El vehículo que circula por el carril que se pretende ocupar.", ru: "У машины на полосе, которую хотят занять.", en: "The vehicle already in the lane you want to enter." },
        { es: "El vehículo que realiza el cambio de carril.", ru: "У машины, которая перестраивается.", en: "The vehicle changing lane." },
        { es: "Siempre los turismos sobre el resto de vehículos.", ru: "Всегда у легковых перед остальными.", en: "Always cars over other vehicles." }
      ],
      answer: 0,
      explain: { ru: "Перестраивающийся уступает тем, кто уже едет по нужной полосе (RGC, ст. 74).", en: "A vehicle changing lane gives way to those already in that lane (RGC art. 74)." } },
    { es: "En esta situación de aglomeración, ¿podrá circular por el arcén?",
      prompt: { ru: "В такой пробке можно ли ехать по обочине?", en: "In this traffic jam, may you drive on the hard shoulder?" },
      options: [
        { es: "No, está prohibido.", ru: "Нет, это запрещено.", en: "No, it is forbidden." },
        { es: "Sí, si tiene prisa.", ru: "Да, если спешите.", en: "Yes, if you are in a hurry." },
        { es: "Sí, para descongestionar el tráfico.", ru: "Да, чтобы разгрузить движение.", en: "Yes, to relieve the congestion." }
      ],
      answer: 0,
      explain: { ru: "Обочина — не полоса для движения автомобилей; ехать по ней, чтобы объехать пробку, запрещено (RGC, ст. 36).", en: "The hard shoulder is not a traffic lane for cars; driving on it to bypass a jam is forbidden (RGC art. 36)." } },
    { es: "Antes de iniciar un adelantamiento, ¿qué debe comprobar?",
      prompt: { ru: "Что нужно проверить перед началом обгона?", en: "Before starting to overtake, what must you check?" },
      options: [
        { es: "Que los vehículos que circulan por el mismo carril no llevan encendidos los intermitentes.", ru: "Что у машин на той же полосе не включены поворотники.", en: "That vehicles in the same lane do not have their indicators on." },
        { es: "Que ningún conductor ha iniciado la maniobra de adelantar a su vehículo.", ru: "Что никто сзади не начал обгонять вас.", en: "That no driver has started to overtake your vehicle." },
        { es: "Que los vehículos que circulan detrás mantienen la distancia de seguridad.", ru: "Что едущие сзади держат дистанцию.", en: "That the vehicles behind are keeping their distance." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 84: перед обгоном убеждаются, что сзади никто не начал обгонять вас, а впереди и на встречной достаточно места.", en: "RGC art. 84: before overtaking make sure nobody behind has begun overtaking you and there is room ahead and in the opposite lane." } },
    { es: "En doble fila, ¿qué está prohibido?",
      prompt: { ru: "Что запрещено во втором ряду?", en: "In double file, what is forbidden?" },
      options: [
        { es: "Parar.", ru: "Остановка.", en: "Stopping." },
        { es: "Parar y estacionar.", ru: "Остановка и стоянка.", en: "Stopping and parking." },
        { es: "Estacionar.", ru: "Стоянка.", en: "Parking." }
      ],
      answer: 2,
      explain: { ru: "Стоянка во втором ряду запрещена всегда; кратко остановиться можно, если водитель не уходит и не мешает движению (RGC, ст. 91 и 94).", en: "Parking in double file is always forbidden; a brief stop is allowed if the driver stays and traffic is not hindered (RGC arts. 91 and 94)." } },
    { es: "El semáforo de la fotografía está estropeado. ¿A quién debe ceder el paso en la intersección?",
      prompt: { ru: "Светофор на фото сломан. Кому нужно уступить на перекрёстке?", en: "The traffic light in the photo is out of order. Who must you give way to at the junction?" },
      options: [
        { es: "A los vehículos que entran por la derecha.", ru: "Машинам, подъезжающим справа.", en: "Vehicles coming from the right." },
        { es: "A los vehículos que entran por la izquierda.", ru: "Машинам, подъезжающим слева.", en: "Vehicles coming from the left." },
        { es: "A todos los vehículos.", ru: "Всем машинам.", en: "All vehicles." }
      ],
      answer: 0,
      explain: { ru: "Если светофор не работает и других знаков нет, действует общее правило «помеха справа» (RGC, ст. 57); при знаках — подчиняются им.", en: "If the lights fail and there are no other signs, the general rule applies: give way to the right (RGC art. 57); if there are signs, obey them." } },
    { es: "Este vehículo está averiado y circula a velocidad anormalmente reducida con la luz de emergencia encendida; ¿es correcto su comportamiento?",
      prompt: { ru: "Эта машина неисправна и едет с аномально низкой скоростью, включив аварийку. Правильно ли это?", en: "This vehicle has broken down and is moving at an abnormally low speed with its hazard lights on. Is this correct?" },
      options: [
        { es: "Sí, porque el vehículo está averiado.", ru: "Да, ведь машина неисправна.", en: "Yes, because it is broken down." },
        { es: "No; las luces de emergencia se usan solo con el vehículo detenido.", ru: "Нет; аварийку включают только при стоящей машине.", en: "No; hazard lights are only for a stationary vehicle." },
        { es: "No; está prohibido el uso de este alumbrado en vías urbanas.", ru: "Нет; в городе так нельзя.", en: "No; their use is forbidden on urban roads." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 49.3 и 109: если машина не может развить минимальную скорость и есть риск наезда сзади, на ходу включают аварийную сигнализацию.", en: "RGC arts. 49.3 and 109: if a vehicle cannot reach the minimum speed and there is a risk of being hit from behind, hazard lights are used while moving." } },
    { es: "Por seguridad, ¿cuál es la forma más aconsejable de bajar un puerto de montaña cuando en la calzada existan placas de hielo?",
      prompt: { ru: "Как безопаснее всего спускаться с горного перевала, если на дороге гололёд?", en: "For safety, how should you best descend a mountain pass when there are patches of ice?" },
      options: [
        { es: "Con la marcha más corta que se pueda para evitar deslizamientos", ru: "На самой низкой возможной передаче, чтобы не скользить.", en: "In the lowest possible gear to avoid skidding." },
        { es: "Utilizando el freno de mano para trazar las curvas.", ru: "Используя ручной тормоз в поворотах.", en: "Using the handbrake through the bends." },
        { es: "A baja velocidad con la marcha más larga que se pueda, evitando frenadas bruscas.", ru: "Медленно, на самой высокой передаче, без резких торможений.", en: "Slowly in the highest possible gear, avoiding sudden braking." }
      ],
      answer: 0,
      explain: { ru: "На снегу и льду по ровной дороге едут на высокой передаче, а на спуске — медленно на низкой, тормозя двигателем и не блокируя колёса.", en: "On snow and ice on the flat use a high gear, but downhill go slowly in a low gear, using engine braking without locking the wheels." } },
    { es: "La velocidad máxima genérica para una motocicleta en una carretera convencional con arcén pavimentado de más de 1,50 metros de ancho es de...",
      prompt: { ru: "Общая максимальная скорость мотоцикла на обычной дороге с асфальтированной обочиной шире 1,5 м составляет…", en: "The generic maximum speed for a motorcycle on a conventional road with a paved shoulder over 1.50 m wide is…" },
      options: [
        { es: "90 kilómetros por hora.", ru: "90 км/ч.", en: "90 km/h." },
        { es: "80 kilómetros por hora.", ru: "80 км/ч.", en: "80 km/h." },
        { es: "100 kilómetros por hora.", ru: "100 км/ч.", en: "100 km/h." }
      ],
      answer: 0,
      explain: { ru: "Правило изменилось: с 2019 года на обычных дорогах мотоциклам и легковым — 90 км/ч независимо от ширины обочины; 100 км/ч можно, только если владелец дороги так установил на участке с физически разделёнными направлениями (RGC, ст. 48.1.a). Журнал (2016) давал 100.", en: "The rule has changed: since 2019 motorcycles and cars are limited to 90 km/h on conventional roads whatever the shoulder width; 100 km/h only where the road authority sets it on a stretch with physically separated directions (RGC art. 48.1.a). The magazine (2016) gave 100." } },
    { es: "Al conducir bajo condiciones climatológicas adversas...",
      prompt: { ru: "При вождении в плохую погоду…", en: "When driving in adverse weather…" },
      options: [
        { es: "Es necesario descansar con más frecuencia.", ru: "Нужно отдыхать чаще.", en: "You need to rest more often." },
        { es: "Es menos probable que aparezca la fatiga.", ru: "Усталость появляется реже.", en: "Fatigue is less likely." },
        { es: "No es necesario descansar.", ru: "Отдыхать не нужно.", en: "There is no need to rest." }
      ],
      answer: 0,
      explain: { ru: "Плохая погода требует большего напряжения, поэтому перерывы нужны чаще.", en: "Bad weather requires more effort, so breaks are needed more often." } },
    { es: "A la vista de la señal, ¿es obligatorio detenerse para dejar pasar a un vehículo que circula en sentido contrario?",
      prompt: { ru: "При таком знаке обязательно ли остановиться, чтобы пропустить встречную машину?", en: "With this sign, must you stop to let a vehicle coming the other way pass?" },
      options: [
        { es: "No, porque la señal otorga prioridad de paso.", ru: "Нет, знак даёт преимущество.", en: "No, because the sign gives priority." },
        { es: "No, porque la señal no afecta a la prioridad de paso.", ru: "Нет, знак не влияет на очерёдность.", en: "No, because the sign does not affect priority." },
        { es: "Sí, mientras no se pueda continuar la marcha sin obligar a detenerse a los vehículos que circulen en sentido contrario.", ru: "Да, пока нельзя проехать, не заставляя встречных останавливаться.", en: "Yes, as long as you cannot continue without making oncoming vehicles stop." }
      ],
      answer: 2,
      explain: { ru: "R-5 «Prioridad del sentido contrario»: нельзя въезжать в узкое место, пока встречным придётся из-за вас останавливаться (Каталог, R-5).", en: "R-5 ‘Prioridad del sentido contrario’: do not enter the narrow section while doing so would force oncoming vehicles to stop (Catalogue, R-5)." },
      sign: "R-5" },
    { es: "Al rebasar al autobús, ¿qué peligro debe preverse?",
      prompt: { ru: "Объезжая стоящий автобус, какую опасность нужно предвидеть?", en: "When passing the bus, what danger should you foresee?" },
      options: [
        { es: "Que puedan cruzar peatones ocultos por el propio autobús.", ru: "Что из-за автобуса могут выйти пешеходы.", en: "Pedestrians hidden by the bus may cross." },
        { es: "Que los viajeros bajen por la parte izquierda.", ru: "Что пассажиры выйдут слева.", en: "Passengers may get off on the left." },
        { es: "Ninguno, no es una situación de riesgo.", ru: "Никакой, ситуация не опасная.", en: "None, it is not a risky situation." }
      ],
      answer: 0,
      explain: { ru: "Автобус закрывает обзор: пассажиры часто перебегают дорогу перед ним или сразу за ним.", en: "A bus blocks the view: passengers often cross just in front of or behind it." } },
    { es: "La marca amarilla en zig-zag indica el lugar de la calzada...",
      prompt: { ru: "Жёлтая разметка зигзагом обозначает место на проезжей части…", en: "A yellow zigzag marking indicates the part of the carriageway…" },
      options: [
        { es: "donde no se puede estacionar, pero sí se puede parar.", ru: "где нельзя стоять, но можно остановиться.", en: "where you may not park, but may stop." },
        { es: "reservado para el estacionamiento de autobuses.", ru: "отведённое для стоянки автобусов.", en: "reserved for buses to park." },
        { es: "reservado para parada de autobús, no pudiendo parar otros vehículos.", ru: "отведённое для остановки автобуса, где другие машины останавливаться не могут.", en: "reserved as a bus stop, where other vehicles may not stop." }
      ],
      answer: 0,
      explain: { ru: "Зигзаг (M-7.9) запрещает стоянку всем: место для особого кратковременного использования (остановка автобуса, погрузка); кратко остановиться не запрещено (RGC, приложение о разметке).", en: "The zigzag (M-7.9) bans parking for everyone: it is kept for a special short-term use (bus stop, loading); a brief stop is not banned (RGC, marking annex)." } },
    { es: "Las señales de obras...",
      prompt: { ru: "Знаки зоны дорожных работ…", en: "Road-works signs…" },
      options: [
        { es: "establecen para los tramos de obras una reducción de la velocidad máxima en 10 km/h.", ru: "снижают в зоне работ максимальную скорость на 10 км/ч.", en: "reduce the maximum speed through works by 10 km/h." },
        { es: "tienen distinto símbolo y tamaño que las usadas en tramos sin obras.", ru: "имеют другой символ и размер, чем обычные.", en: "have a different symbol and size from those used elsewhere." },
        { es: "tienen el mismo significado que las usadas en tramos sin obras.", ru: "имеют то же значение, что и обычные знаки.", en: "have the same meaning as those used elsewhere." }
      ],
      answer: 2,
      explain: { ru: "Временные знаки работ — на жёлтом фоне, но значение у них то же, что у обычных; при этом они главнее постоянных знаков (RGC, ст. 133 и 144).", en: "Temporary works signs have a yellow background but the same meaning as ordinary ones; they take precedence over permanent signs (RGC arts. 133 and 144)." } },
    { es: "El tiempo de reacción puede aumentar...",
      prompt: { ru: "Время реакции может увеличиться…", en: "Reaction time can increase…" },
      options: [
        { es: "después de una comida ligera.", ru: "после лёгкой еды.", en: "after a light meal." },
        { es: "si usamos gafas graduadas.", ru: "если мы носим очки по рецепту.", en: "if we wear prescription glasses." },
        { es: "después de una fuerte discusión.", ru: "после сильной ссоры.", en: "after a heated argument." }
      ],
      answer: 2,
      explain: { ru: "Сильные эмоции (злость, стресс) отвлекают и замедляют реакцию; лучше успокоиться, прежде чем ехать дальше.", en: "Strong emotions (anger, stress) distract and slow reactions; calm down before driving on." } },
    { es: "Fumar mientras se conduce...",
      prompt: { ru: "Курение во время вождения…", en: "Smoking while driving…" },
      options: [
        { es: "está prohibido.", ru: "запрещено.", en: "is forbidden." },
        { es: "es recomendable, porque ayuda a mantener la atención.", ru: "рекомендуется: помогает сохранять внимание.", en: "is advisable because it helps keep attention." },
        { es: "no es recomendable, porque puede afectar a la atención en la conducción.", ru: "не рекомендуется: может отвлекать.", en: "is not advisable because it can affect attention." }
      ],
      answer: 2,
      explain: { ru: "Курить за рулём само по себе не запрещено, но это отвлекает (прикуривание, пепел, дым); манипуляции, мешающие управлению, наказуемы.", en: "Smoking at the wheel is not banned as such, but it distracts (lighting up, ash, smoke); handling that interferes with driving can be fined." } },
    { es: "Conducir durante mucho tiempo sin descansar...",
      prompt: { ru: "Долгая езда без отдыха…", en: "Driving for a long time without rest…" },
      options: [
        { es: "mantiene al conductor más atento ante cualquier peligro.", ru: "делает водителя внимательнее к опасностям.", en: "keeps the driver more alert to any danger." },
        { es: "disminuye el riesgo de accidente.", ru: "снижает риск аварии.", en: "reduces the risk of an accident." },
        { es: "propicia la aparición de la fatiga.", ru: "способствует появлению усталости.", en: "brings on fatigue." }
      ],
      answer: 2,
      explain: { ru: "Без перерывов накапливается усталость: дольше реакция, больше ошибок. Перерыв — каждые 2 часа или 200 км.", en: "Without breaks fatigue builds up: slower reactions, more mistakes. Take a break every 2 hours or 200 km." } },
    { es: "Hay hielo en la vía. ¿Qué debe hacer?",
      prompt: { ru: "На дороге лёд. Что нужно делать?", en: "There is ice on the road. What should you do?" },
      options: [
        { es: "Circular con el pie en el embrague.", ru: "Ехать, держа ногу на сцеплении.", en: "Drive with your foot on the clutch." },
        { es: "Circular a poca velocidad para no tener que frenar.", ru: "Ехать медленно, чтобы не пришлось тормозить.", en: "Drive slowly so as not to have to brake." },
        { es: "Circular pisando el freno intermitentemente.", ru: "Ехать, прерывисто нажимая тормоз.", en: "Drive pressing the brake intermittently." }
      ],
      answer: 1,
      explain: { ru: "На льду сцепление почти нулевое: медленно, плавно, с большой дистанцией, избегая торможений и резких движений.", en: "On ice there is almost no grip: drive slowly and smoothly with a long gap, avoiding braking and sudden moves." } },
    { es: "La varilla del aceite del motor, ¿para qué sirve?",
      prompt: { ru: "Для чего нужен щуп уровня масла?", en: "What is the engine oil dipstick for?" },
      options: [
        { es: "Para comprobar la temperatura del aceite.", ru: "Проверять температуру масла.", en: "To check the oil temperature." },
        { es: "Para comprobar el nivel del aceite.", ru: "Проверять уровень масла.", en: "To check the oil level." },
        { es: "Para comprobar la presión del aceite.", ru: "Проверять давление масла.", en: "To check the oil pressure." }
      ],
      answer: 1,
      explain: { ru: "Щупом проверяют уровень масла (между отметками min и max) на ровном месте и при заглушённом двигателе.", en: "The dipstick shows the oil level (between min and max), checked on level ground with the engine off." } },
    { es: "Debido a un pinchazo sustituye una de las ruedas de su vehículo por la de uso temporal. ¿Cuántos kilómetros podrá circular en esas condiciones?",
      prompt: { ru: "После прокола вы поставили временное (докатку) колесо. Сколько можно так проехать?", en: "After a puncture you fit a temporary-use spare. How many kilometres may you drive like that?" },
      options: [
        { es: "Tantos como sean necesarios siempre que dicha rueda no haya sido utilizada anteriormente.", ru: "Сколько нужно, если это колесо раньше не использовалось.", en: "As many as needed if the wheel has not been used before." },
        { es: "Los que recomiende, como máximo, cada fabricante, y circulando a la velocidad que se indica en dicha rueda.", ru: "Не больше, чем рекомендует производитель, и со скоростью, указанной на колесе.", en: "At most what the manufacturer recommends, and at the speed shown on the wheel." },
        { es: "No hay limitación de kilómetros porque se trata de una situación excepcional.", ru: "Без ограничения, это исключительная ситуация.", en: "There is no limit because it is an exceptional situation." }
      ],
      answer: 1,
      explain: { ru: "У «докатки» есть ограничение пробега и скорости (обычно 80 км/ч) — их указывает производитель.", en: "A space-saver spare has distance and speed limits (usually 80 km/h) set by the manufacturer." } },
    { es: "Para circular de noche por una travesía. ¿Qué luces son obligatorias?",
      prompt: { ru: "Едете ночью через населённый пункт по travesía. Какие огни обязательны?", en: "Driving through a travesía at night, which lights are compulsory?" },
      options: [
        { es: "Las de posición y las cortas.", ru: "Габаритные и ближний свет.", en: "Side lights and dipped beam." },
        { es: "Las de posición y las largas.", ru: "Габаритные и дальний свет.", en: "Side lights and main beam." },
        { es: "Las de posición solamente.", ru: "Только габаритные.", en: "Side lights only." }
      ],
      answer: 0,
      explain: { ru: "Ночью — габариты плюс ближний свет; дальний на освещённых участках запрещён (RGC, ст. 99–100).", en: "At night: side lights plus dipped beam; main beam is not allowed on lit stretches (RGC arts. 99–100)." } },
    { es: "Cuando termine el adelantamiento, el vehículo adelantado deberá...",
      prompt: { ru: "Когда обгон заканчивается, обгоняемая машина должна…", en: "When the overtaking ends, the overtaken vehicle must…" },
      options: [
        { es: "Circular igual que lo está haciendo, con la luz de largo alcance encendida.", ru: "Ехать как ехала, с дальним светом.", en: "Carry on as before with main beam on." },
        { es: "Reducir la velocidad, obligatoriamente.", ru: "Обязательно снизить скорость.", en: "Reduce speed, compulsorily." },
        { es: "Cambiar la luz de largo alcance por la luz de cruce.", ru: "Переключить дальний свет на ближний.", en: "Switch from main beam to dipped beam." }
      ],
      answer: 2,
      explain: { ru: "Дальний свет обгоняемой машины ослепит обгоняющего, поэтому его переключают на ближний (RGC, ст. 100–101).", en: "The overtaken car’s main beam would dazzle the overtaking driver, so it must be dipped (RGC arts. 100–101)." } },
    { es: "Esta señal indica peligro ante la proximidad...",
      prompt: { ru: "Этот знак предупреждает о приближении…", en: "This sign warns of the approach of…" },
      options: [
        { es: "De un resalto o badén en el pavimento.", ru: "Лежачего полицейского или выбоины.", en: "A hump or dip in the road." },
        { es: "De un puente móvil.", ru: "Разводного моста.", en: "A movable (lifting) bridge." },
        { es: "De un muelle.", ru: "Причала.", en: "A quay." }
      ],
      answer: 1,
      explain: { ru: "P-5 «Puente móvil» — мост, который поднимают или поворачивают, временно перекрывая движение (Каталог, P-5).", en: "P-5 ‘Puente móvil’ — a bridge that can be raised or swung, temporarily stopping traffic (Catalogue, P-5)." },
      sign: "P-5" },
    { es: "En un turismo, la carga puede sobresalir por su parte posterior...",
      prompt: { ru: "У легкового автомобиля груз может выступать сзади…", en: "On a car, the load may stick out at the rear…" },
      options: [
        { es: "Hasta un 5 por 100 de su longitud.", ru: "До 5 % длины.", en: "Up to 5 % of its length." },
        { es: "Hasta un 10 por 100 de su longitud y, si la carga fuera indivisible hasta un 15 por 100.", ru: "До 10 % длины, а если груз неделимый — до 15 %.", en: "Up to 10 % of its length, or up to 15 % if indivisible." },
        { es: "No está permitido que sobresalga la carga del vehículo.", ru: "Груз не может выступать.", en: "It may not stick out at all." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 15.3: 10 % длины, неделимый груз — 15 %; выступ обозначают щитком V-20.", en: "RGC art. 15.3: 10 % of the length, or 15 % for an indivisible load, marked with the V-20 panel." } },
    { es: "¿Qué síntomas nos avisan de que estamos fatigados?",
      prompt: { ru: "Какие симптомы предупреждают об усталости?", en: "Which symptoms warn us that we are tired?" },
      options: [
        { es: "La sensación de euforia.", ru: "Ощущение эйфории.", en: "A feeling of euphoria." },
        { es: "Suele aumentar el número y la duración de los parpadeos y la visión puede volverse borrosa.", ru: "Обычно чаще и дольше моргаешь, зрение может становиться расплывчатым.", en: "Blinking becomes more frequent and longer and vision may blur." },
        { es: "No realizar movimientos en el asiento, ni cambios de postura.", ru: "Отсутствие движений на сиденье и смены позы.", en: "Not moving in the seat or changing position." }
      ],
      answer: 1,
      explain: { ru: "Признаки усталости: частое моргание, тяжёлые веки, расплывчатое зрение, ёрзание на сиденье, зевота. Пора остановиться и отдохнуть.", en: "Signs of fatigue: frequent blinking, heavy eyelids, blurred vision, fidgeting, yawning. Time to stop and rest." } },
    { es: "¿Cuándo es obligatorio utilizar la luz de emergencia?",
      prompt: { ru: "Когда обязательно включать аварийную сигнализацию?", en: "When is it compulsory to use the hazard lights?" },
      options: [
        { es: "Cuando se inmovilice el vehículo en una autopista.", ru: "Когда машина вынужденно стоит на автостраде.", en: "When the vehicle is immobilised on a motorway." },
        { es: "Cuando se reduzca la velocidad en carretera.", ru: "Когда снижаешь скорость на загородной дороге.", en: "When slowing down on a road." },
        { es: "Cuando se estacione el vehículo en doble fila.", ru: "Когда ставишь машину во второй ряд.", en: "When parking in double file." }
      ],
      answer: 0,
      explain: { ru: "Вынужденно стоящую на дороге машину обозначают аварийкой и, с 2026 года, знаком V-16 (RGC, ст. 130.4).", en: "A vehicle immobilised on the road is signalled with hazard lights and, since 2026, the V-16 light (RGC art. 130.4)." } },
    { es: "Quiere adelantar a un ciclista que circula por el arcén; ¿qué distancia lateral debe dejar?",
      prompt: { ru: "Вы хотите обогнать велосипедиста, который едет по обочине. Какой боковой интервал нужно оставить?", en: "You want to overtake a cyclist riding on the hard shoulder. What lateral distance must you leave?" },
      options: [
        { es: "Un metro, al menos.", ru: "Не меньше метра.", en: "At least one metre." },
        { es: "Al menos metro y medio.", ru: "Не меньше полутора метров.", en: "At least one and a half metres." },
        { es: "No importa la distancia porque circula por el arcén.", ru: "Неважно, ведь он едет по обочине.", en: "It does not matter because he is on the shoulder." }
      ],
      answer: 1,
      explain: { ru: "Интервал при обгоне велосипедиста — не менее 1,5 м, даже если он на обочине; с 2022 года за городом нужно ещё снизить скорость минимум на 20 км/ч от лимита (RGC, ст. 85.4).", en: "Leave at least 1.5 m when overtaking a cyclist, even on the shoulder; since 2022 you must also, outside towns, drop at least 20 km/h below the limit (RGC art. 85.4)." } },
    { es: "Hay poca visibilidad por niebla. ¿Qué debe hacer?",
      prompt: { ru: "Из-за тумана плохая видимость. Что нужно делать?", en: "Visibility is poor because of fog. What should you do?" },
      options: [
        { es: "Dejar más distancia de seguridad con el vehículo de delante.", ru: "Увеличить дистанцию до машины впереди.", en: "Leave a longer safety distance to the vehicle ahead." },
        { es: "Llevar el pie siempre en el pedal del freno.", ru: "Всё время держать ногу на тормозе.", en: "Keep your foot on the brake pedal at all times." },
        { es: "Circular a la velocidad mínima de la vía.", ru: "Ехать с минимальной скоростью для этой дороги.", en: "Drive at the road’s minimum speed." }
      ],
      answer: 0,
      explain: { ru: "В тумане увеличивают дистанцию, снижают скорость и включают освещение (RGC, ст. 106).", en: "In fog, leave a longer gap, slow down and use your lights (RGC art. 106)." } },
    { es: "Necesita hacer una parada en una calle estrecha; ¿puede ocupar parte de la acera con su vehículo?",
      prompt: { ru: "Нужно остановиться на узкой улице. Можно ли частично заехать на тротуар?", en: "You need to stop in a narrow street. May you put part of the car on the pavement?" },
      options: [
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Solo si no hay señal que lo prohíba expresamente.", ru: "Только если нет знака, прямо запрещающего это.", en: "Only if there is no sign expressly forbidding it." }
      ],
      answer: 1,
      explain: { ru: "Тротуар — для пешеходов: останавливаться и стоять на нём запрещено, если иное не разрешено знаками (RGC, ст. 94).", en: "The pavement is for pedestrians: stopping or parking on it is forbidden unless signs allow it (RGC art. 94)." } },
    { es: "Uno de los pasajeros del turismo que Vd. conduce no lleva puesto el cinturón de seguridad. Si un agente de la autoridad denuncia la infracción, ¿quién es el responsable?",
      prompt: { ru: "Один из пассажиров вашего автомобиля не пристёгнут. Если агент оформит нарушение, кто отвечает?", en: "One passenger in the car you are driving is not wearing a seat belt. If an officer reports it, who is responsible?" },
      options: [
        { es: "El tomador del seguro.", ru: "Страхователь.", en: "The policyholder." },
        { es: "El pasajero.", ru: "Пассажир.", en: "The passenger." },
        { es: "El conductor.", ru: "Водитель.", en: "The driver." }
      ],
      answer: 1,
      explain: { ru: "Отвечает сам нарушитель (LSV, ст. 82); водитель отвечает за детские удерживающие системы, а если пассажир младше 18 — вместе с ним родители.", en: "The offender himself is liable (LSV art. 82); the driver answers for child restraints, and for passengers under 18 the parents share liability." } },
    { es: "Los neumáticos, ¿cuándo hay que cambiarlos?",
      prompt: { ru: "Когда нужно менять шины?", en: "When must tyres be replaced?" },
      options: [
        { es: "Cuando la profundidad del dibujo sea menor de 1,6 mm.", ru: "Когда глубина протектора меньше 1,6 мм.", en: "When the tread depth is less than 1.6 mm." },
        { es: "Cuando la profundidad del dibujo sea menor de 2 mm.", ru: "Когда глубина протектора меньше 2 мм.", en: "When the tread depth is less than 2 mm." },
        { es: "Cuando la profundidad del dibujo sea menor de 3 mm.", ru: "Когда глубина протектора меньше 3 мм.", en: "When the tread depth is less than 3 mm." }
      ],
      answer: 0,
      explain: { ru: "Минимальная законная глубина протектора у легковых — 1,6 мм; на мокрой дороге лучше менять раньше.", en: "The legal minimum tread depth for cars is 1.6 mm; for wet roads change earlier." } },
    { es: "¿Qué es el tiempo de reacción?",
      prompt: { ru: "Что такое время реакции?", en: "What is reaction time?" },
      options: [
        { es: "El tiempo que pasa desde que se empieza una maniobra hasta que se termina.", ru: "Время от начала до конца манёвра.", en: "The time from starting a manoeuvre to finishing it." },
        { es: "El tiempo que pasa desde que se arranca el vehículo hasta que se empieza a circular.", ru: "Время от запуска двигателя до начала движения.", en: "The time from starting the engine to moving off." },
        { es: "El tiempo que pasa desde que se ve un peligro hasta que se toma una decisión.", ru: "Время от момента, когда видишь опасность, до принятия решения.", en: "The time from seeing a hazard to taking a decision." }
      ],
      answer: 2,
      explain: { ru: "Время реакции — от восприятия опасности до решения и начала действия; его увеличивают усталость, алкоголь, лекарства.", en: "Reaction time runs from perceiving a hazard to deciding and acting; fatigue, alcohol and medicines lengthen it." } },
    { es: "El hielo, la nieve, la calzada mojada y las obras, ¿de qué factor de riesgo forman parte?",
      prompt: { ru: "Лёд, снег, мокрая дорога и ремонт — к какому фактору риска относятся?", en: "Ice, snow, a wet road and road works belong to which risk factor?" },
      options: [
        { es: "Del factor humano.", ru: "К человеческому.", en: "The human factor." },
        { es: "Del factor vehículo.", ru: "К транспортному средству.", en: "The vehicle factor." },
        { es: "Del factor vía y entorno.", ru: "К дороге и окружению.", en: "The road and environment factor." }
      ],
      answer: 2,
      explain: { ru: "Состояние дороги, погода и окружение — фактор «дорога и среда».", en: "Road condition, weather and surroundings make up the road-and-environment factor." } },
    { es: "¿El estrés puede alterar las capacidades para conducir con seguridad?",
      prompt: { ru: "Может ли стресс нарушить способность безопасно водить?", en: "Can stress impair the ability to drive safely?" },
      options: [
        { es: "No, en ningún caso.", ru: "Нет, никогда.", en: "No, never." },
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No, porque no afecta a la conducción.", ru: "Нет, он не влияет на вождение.", en: "No, because it does not affect driving." }
      ],
      answer: 1,
      explain: { ru: "Стресс повышает агрессивность, снижает внимание и ухудшает решения.", en: "Stress raises aggression, lowers attention and worsens decisions." } },
    { es: "La luz antiniebla trasera deberá utilizarse en caso de...",
      prompt: { ru: "Задний противотуманный фонарь нужно включать при…", en: "The rear fog light must be used in case of…" },
      options: [
        { es: "Niebla espesa.", ru: "Густом тумане.", en: "Thick fog." },
        { es: "Circular de noche por una vía sin asfaltar.", ru: "Езде ночью по грунтовой дороге.", en: "Driving at night on an unpaved road." },
        { es: "Circular al anochecer por una vía sin arcén.", ru: "Езде в сумерках по дороге без обочины.", en: "Driving at dusk on a road without a shoulder." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 106.2: задний противотуманный — только в особо неблагоприятных условиях: густой туман, очень сильный дождь, сильный снегопад, плотный дым или пыль.", en: "RGC art. 106.2: the rear fog light is only for especially bad conditions — thick fog, very heavy rain, heavy snow, dense smoke or dust." } },
    { es: "¿A qué vehículos prohíbe el adelantamiento esta señal?",
      prompt: { ru: "Каким машинам этот знак запрещает обгон?", en: "Which vehicles does this sign forbid to overtake?" },
      options: [
        { es: "A los camiones de más de 3.500 kg. de M.M.A.", ru: "Грузовикам с MMA больше 3 500 кг.", en: "Lorries over 3,500 kg MMA." },
        { es: "A todos los vehículos de motor, incluidos camiones.", ru: "Всем механическим ТС, включая грузовики.", en: "All motor vehicles, lorries included." },
        { es: "A todos los camiones de menos de 3.500 kg. de M.M.A.", ru: "Всем грузовикам с MMA меньше 3 500 кг.", en: "All lorries under 3,500 kg MMA." }
      ],
      answer: 0,
      explain: { ru: "R-306 запрещает грузовикам с разрешённой массой более 3 500 кг обгонять механические ТС (Каталог, R-306).", en: "R-306 forbids lorries with an MMA over 3,500 kg to overtake motor vehicles (Catalogue, R-306)." },
      sign: "R-306" },
    { es: "Si circula con un turismo en el que sobresale la carga por su parte trasera, ¿está obligado a colocar la señal de la imagen?",
      prompt: { ru: "Если у вашей легковой машины груз выступает сзади, обязаны ли вы ставить знак, как на картинке?", en: "If you drive a car with a load sticking out at the rear, must you fit the sign shown in the picture?" },
      options: [
        { es: "No, porque un turismo no transporta exclusivamente mercancías.", ru: "Нет, ведь легковая машина не перевозит только грузы.", en: "No, because a car does not carry goods exclusively." },
        { es: "Solo se colocará cuando la carga sobresalga por la parte delantera.", ru: "Его ставят, только если груз выступает спереди.", en: "It is only fitted when the load sticks out at the front." },
        { es: "Sí; deberá colocarse en la parte posterior de la carga.", ru: "Да; его ставят на заднем конце груза.", en: "Yes; it must be fitted at the rear end of the load." }
      ],
      answer: 2,
      explain: { ru: "Бело-красный щиток V-20 обязателен для любого выступающего сзади груза, в том числе у легковых (например, велосипеды на багажнике) (RGC, ст. 15.6).", en: "The red-and-white V-20 panel is required for any load protruding at the rear, cars included (e.g. bikes on a rack) (RGC art. 15.6)." } },
    { es: "El conductor de un turismo utilizará un chaleco reflectante de alta visibilidad cuando salga del vehículo y ocupe...",
      prompt: { ru: "Водитель легкового автомобиля надевает светоотражающий жилет, когда выходит из машины и находится…", en: "A car driver wears a high-visibility reflective vest when getting out and occupying…" },
      options: [
        { es: "La calzada o el arcén de las vías interurbanas.", ru: "На проезжей части или обочине загородной дороги.", en: "The carriageway or hard shoulder of interurban roads." },
        { es: "La calzada de las vías interurbanas, pero no cuando ocupe el arcén.", ru: "На проезжей части загородной дороги, но не на обочине.", en: "The carriageway of interurban roads, but not the shoulder." },
        { es: "La calzada o el arcén de todo tipo de vías, tanto urbanas como interurbanas.", ru: "На проезжей части или обочине любой дороги, городской и загородной.", en: "The carriageway or shoulder of any road, urban or interurban." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 118.4: жилет обязателен при выходе на проезжую часть или обочину загородных дорог.", en: "RGC art. 118.4: the vest is required when you step onto the carriageway or hard shoulder of an interurban road." } },
    { es: "Para comprobar la presión de inflado, ¿cómo deben estar los neumáticos?",
      prompt: { ru: "Чтобы проверить давление, какими должны быть шины?", en: "To check inflation pressure, how should the tyres be?" },
      options: [
        { es: "Fríos.", ru: "Холодными.", en: "Cold." },
        { es: "Calientes.", ru: "Горячими.", en: "Hot." },
        { es: "Fríos o calientes, es igual.", ru: "Всё равно.", en: "Cold or hot, it makes no difference." }
      ],
      answer: 0,
      explain: { ru: "Нагретая шина показывает завышенное давление; проверяют холодные шины.", en: "A warm tyre reads high; check pressures when the tyres are cold." } },
    { es: "En una autopista con tres carriles para cada sentido, ¿por cuál se debe circular normalmente?",
      prompt: { ru: "На автостраде с тремя полосами в каждую сторону по какой нужно ехать обычно?", en: "On a motorway with three lanes each way, which lane should you normally use?" },
      options: [
        { es: "Por cualquiera de ellos.", ru: "По любой.", en: "Any of them." },
        { es: "Por el central o el derecho, es indistinto.", ru: "По средней или правой, без разницы.", en: "The centre or the right, either." },
        { es: "Por el derecho.", ru: "По правой.", en: "The right-hand one." }
      ],
      answer: 2,
      explain: { ru: "Как правило, едут по правой полосе; остальные используют, когда этого требует движение или для обгона (RGC, ст. 31).", en: "As a rule use the right-hand lane; the others are for when traffic requires or for overtaking (RGC art. 31)." } },
    { es: "¿Cuáles son los daños no cubiertos por el seguro obligatorio al causante de un accidente?",
      prompt: { ru: "Какой ущерб обязательное страхование виновника аварии не покрывает?", en: "Which damage does the compulsory insurance of the person who causes an accident not cover?" },
      options: [
        { es: "Los daños personales que sufran los ocupantes del vehículo causante del accidente.", ru: "Травмы пассажиров машины виновника.", en: "Injuries to the occupants of the vehicle that caused it." },
        { es: "Los daños personales que sufra el conductor responsable.", ru: "Травмы самого виновного водителя.", en: "Injuries suffered by the responsible driver." },
        { es: "Los daños que se produzcan en el vehículo contrario.", ru: "Ущерб другой машине.", en: "Damage to the other vehicle." }
      ],
      answer: 1,
      explain: { ru: "Обязательная страховка ответственности покрывает вред третьим лицам и пассажирам, но не травмы самого виновного водителя и не его машину.", en: "Compulsory liability insurance covers third parties and passengers, but not the at-fault driver’s own injuries or vehicle." } },
    { es: "La señal indica que se aproxima...",
      prompt: { ru: "Знак предупреждает, что вы приближаетесь…", en: "The sign indicates you are approaching…" },
      options: [
        { es: "A una intersección en la que tengo prioridad.", ru: "К перекрёстку, где у меня преимущество.", en: "A junction where I have priority." },
        { es: "A una intersección en la que tienen preferencia los vehículos que entran por la derecha.", ru: "К перекрёстку, где уступают тем, кто справа.", en: "A junction where vehicles from the right have priority." },
        { es: "A una intersección con circulación giratoria.", ru: "К перекрёстку с круговым движением.", en: "A junction with roundabout traffic." }
      ],
      answer: 2,
      explain: { ru: "P-4 предупреждает о круговом движении; в новом каталоге он называется «Glorieta» (Каталог, P-4).", en: "P-4 warns of a roundabout; in the new catalogue it is called ‘Glorieta’ (Catalogue, P-4)." },
      sign: "P-4" },
    { es: "Las señales realizadas con el brazo por los conductores, ¿son válidas?",
      prompt: { ru: "Действительны ли сигналы, которые водитель подаёт рукой?", en: "Are arm signals made by drivers valid?" },
      options: [
        { es: "Solo cuando se vean bien.", ru: "Только если их хорошо видно.", en: "Only when they can be clearly seen." },
        { es: "Solo cuando se utilicen de día.", ru: "Только днём.", en: "Only in daytime." },
        { es: "Solo cuando se utilicen en poblado.", ru: "Только в населённом пункте.", en: "Only in built-up areas." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 108.2: сигналы рукой действительны, если они видны другим участникам и подаются по правилам.", en: "RGC art. 108.2: arm signals are valid if other road users can see them and they are made correctly." } },
    { es: "¿Está obligado a circular a una velocidad adecuada si las condiciones meteorológicas o ambientales son adversas?",
      prompt: { ru: "Обязаны ли вы ехать с подходящей скоростью, если погода неблагоприятна?", en: "Are you obliged to drive at a suitable speed in adverse weather or conditions?" },
      options: [
        { es: "Sí, y si fuera preciso, debe detenerse sin riesgo para la circulación.", ru: "Да, и при необходимости остановиться, не создавая опасности.", en: "Yes, and if necessary stop without endangering traffic." },
        { es: "Sí, siempre que se circule por vías de sentido único.", ru: "Да, если дорога с односторонним движением.", en: "Yes, as long as the road is one-way." },
        { es: "No, si el vehículo dispone de todos los sistemas de seguridad más avanzados.", ru: "Нет, если у машины самые современные системы безопасности.", en: "No, if the vehicle has the most advanced safety systems." }
      ],
      answer: 0,
      explain: { ru: "Скорость подбирают так, чтобы успеть остановиться перед любым препятствием; если ехать нельзя, безопасно останавливаются (RGC, ст. 45–46).", en: "Choose a speed that lets you stop for any obstacle; if driving is unsafe, stop safely (RGC arts. 45–46)." } },
    { es: "Encender el intermitente, ¿da preferencia siempre para hacer maniobras?",
      prompt: { ru: "Даёт ли включённый поворотник всегда преимущество для манёвра?", en: "Does switching on the indicator always give you priority to manoeuvre?" },
      options: [
        { es: "Sí, porque he avisado.", ru: "Да, ведь я предупредил.", en: "Yes, because I have warned." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, pero debo hacer la maniobra rápidamente.", ru: "Да, но манёвр нужно сделать быстро.", en: "Yes, but I must do it quickly." }
      ],
      answer: 1,
      explain: { ru: "Сигнал лишь предупреждает; манёвр можно начать, только убедившись, что он безопасен и никому не мешает (RGC, ст. 109).", en: "A signal only warns; you may start the manoeuvre only once it is safe and hinders no one (RGC art. 109)." } },
    { es: "En carretera, ¿cuándo puede adelantar por la derecha?",
      prompt: { ru: "Когда на загородной дороге можно обгонять справа?", en: "On an interurban road, when may you overtake on the right?" },
      options: [
        { es: "Cuando esté libre el carril de la derecha.", ru: "Когда свободна правая полоса.", en: "When the right lane is free." },
        { es: "Cuando el vehículo de delante vaya a girar a la izquierda y exista espacio libre en la calzada.", ru: "Когда машина впереди собирается повернуть налево и есть место на проезжей части.", en: "When the vehicle ahead is about to turn left and there is room on the carriageway." },
        { es: "Cuando conduzca por una calzada con más de dos carriles.", ru: "Когда на проезжей части больше двух полос.", en: "When driving on a carriageway with more than two lanes." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 82: обгон справа разрешён, если впереди идущий показал поворот налево и встал к оси, а места хватает.", en: "RGC art. 82: overtaking on the right is allowed when the vehicle ahead has signalled a left turn and moved to the centre, and there is room." } },
    { es: "En esta vía interurbana, podrá parar su vehículo en la parte transitable del arcén...",
      prompt: { ru: "На этой загородной дороге остановить машину на пригодной для движения части обочины можно…", en: "On this interurban road, you may stop on the usable part of the hard shoulder…" },
      options: [
        { es: "Para subir o bajar personas.", ru: "Чтобы посадить или высадить людей.", en: "To let people get in or out." },
        { es: "Para descargar objetos, siempre que la parada dure menos de 2 minutos.", ru: "Чтобы выгрузить вещи, если остановка меньше 2 минут.", en: "To unload objects, if the stop lasts under 2 minutes." },
        { es: "Por razones de emergencia.", ru: "По причине чрезвычайной ситуации.", en: "For emergency reasons." }
      ],
      answer: 2,
      explain: { ru: "За городом останавливаются вне проезжей части, оставляя свободной пригодную часть обочины (RGC, ст. 90); занимать её можно только в экстренном случае.", en: "Outside towns you stop off the carriageway, leaving the usable part of the shoulder clear (RGC art. 90); it may be occupied only in an emergency." } },
    { es: "Mientras conduce, ¿qué teléfonos está permitido utilizar?",
      prompt: { ru: "Какими телефонами можно пользоваться за рулём?", en: "While driving, which phones may you use?" },
      options: [
        { es: "Los sistemas de “manos libres”.", ru: "Системами «свободные руки».", en: "Hands-free systems." },
        { es: "Los sistemas con auriculares.", ru: "Системами с наушниками.", en: "Systems with earphones." },
        { es: "Están permitidos todos los sistemas.", ru: "Любыми.", en: "All systems." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 18.2: разговаривать можно только без рук и без наушников; телефон в руке — нарушение (−6 баллов с 2022 года).", en: "RGC art. 18.2: only hands-free without earphones; a handheld phone is an offence (6 points since 2022)." } },
    { es: "En las autovías, ¿cuál es la velocidad mínima permitida para turismos?",
      prompt: { ru: "Какая минимальная разрешённая скорость для легковых на автомагистралях (autovía)?", en: "On autovías, what is the minimum speed allowed for cars?" },
      options: [
        { es: "40 km/h", ru: "40 км/ч", en: "40 km/h" },
        { es: "50 km/h", ru: "50 км/ч", en: "50 km/h" },
        { es: "60 km/h", ru: "60 км/ч", en: "60 km/h" }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 49.1: на автострадах и автомагистралях механические ТС не должны ехать медленнее 60 км/ч без уважительной причины.", en: "RGC art. 49.1: motor vehicles may not travel below 60 km/h on autopistas and autovías without good reason." } },
    { es: "Al poner en marcha un motor de gasolina, es conveniente...",
      prompt: { ru: "При запуске бензинового двигателя стоит…", en: "When starting a petrol engine, it is advisable to…" },
      options: [
        { es: "Acelerar en vacío para que se caliente cuanto antes.", ru: "Погазовать на холостых, чтобы быстрее прогреть.", en: "Rev it in neutral so it warms up quickly." },
        { es: "Iniciar la marcha inmediatamente después de arrancar el motor.", ru: "Трогаться сразу после запуска.", en: "Move off immediately after starting the engine." },
        { es: "Esperar unos minutos antes de iniciar la marcha para que el motor se caliente.", ru: "Подождать несколько минут, пока прогреется.", en: "Wait a few minutes for it to warm up before moving off." }
      ],
      answer: 1,
      explain: { ru: "Современный двигатель быстрее и экономичнее прогревается на ходу при спокойной езде; прогрев на месте лишь тратит топливо и загрязняет воздух.", en: "A modern engine warms up faster and more economically while driving gently; idling to warm up just wastes fuel and pollutes." } },
    { es: "La cinta abdominal del cinturón de seguridad debe colocarse sobre...",
      prompt: { ru: "Поясная лямка ремня безопасности должна проходить по…", en: "The lap part of the seat belt should be placed over…" },
      options: [
        { es: "Los huesos de la cadera", ru: "Тазовым костям.", en: "The hip bones." },
        { es: "Los muslos", ru: "Бёдрам.", en: "The thighs." },
        { es: "El abdomen", ru: "Животу.", en: "The abdomen." }
      ],
      answer: 0,
      explain: { ru: "Поясная лямка лежит низко на тазовых костях; на животе она при ударе давит на внутренние органы («эффект подныривания»).", en: "The lap strap goes low over the hip bones; across the abdomen it would crush internal organs in a crash (‘submarining’)." } },
    { es: "En una intersección señalizada en la que se encuentra un agente regulando el tráfico, ¿qué debe hacer?",
      prompt: { ru: "Что делать на перекрёстке со знаками, где движение регулирует агент?", en: "At a signed junction where an officer is directing traffic, what should you do?" },
      options: [
        { es: "Obedecer las señales del agente.", ru: "Подчиняться сигналам агента.", en: "Obey the officer’s signals." },
        { es: "Obedecer las señales de tráfico que regulan la prioridad.", ru: "Подчиняться знакам приоритета.", en: "Obey the priority signs." },
        { es: "Aplicar las normas generales de prioridad de paso de los vehículos que se acerquen por la derecha.", ru: "Применять общее правило «помеха справа».", en: "Apply the general rule of giving way to the right." }
      ],
      answer: 0,
      explain: { ru: "Указания агентов главнее светофоров, знаков и разметки (RGC, ст. 133).", en: "Officers’ signals override traffic lights, signs and markings (RGC art. 133)." } },
    { es: "Como norma general, ¿qué vehículo tendrá preferencia de paso en este estrechamiento cuando la prioridad no esté expresamente señalizada?",
      prompt: { ru: "Как правило, какая машина проезжает первой это сужение, если очерёдность не обозначена?", en: "As a rule, which vehicle has priority in this narrowing when priority is not signed?" },
      options: [
        { es: "El vehículo que haya entrado primero al estrechamiento.", ru: "Та, что въехала в сужение первой.", en: "The one that entered the narrowing first." },
        { es: "La motocicleta, porque tiene menos dificultad de maniobra.", ru: "Мотоцикл, ему легче маневрировать.", en: "The motorcycle, because it manoeuvres more easily." },
        { es: "El vehículo que tenga que dar marcha atrás mayor distancia.", ru: "Та, которой пришлось бы дальше сдавать назад.", en: "The one that would have to reverse further." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 59–60: в узком месте без знаков проезжает первым тот, кто въехал первым; при равенстве — по правилам о трудности манёвра.", en: "RGC arts. 59–60: in an unsigned narrow section the vehicle that entered first goes first; otherwise the manoeuvring rules decide." } },
    { es: "¿Cómo debe sentarse el pasajero de una motocicleta?",
      prompt: { ru: "Как должен сидеть пассажир мотоцикла?", en: "How should a motorcycle passenger sit?" },
      options: [
        { es: "De cualquier forma, siempre que vaya cómodo.", ru: "Как угодно, лишь бы удобно.", en: "Any way, as long as it is comfortable." },
        { es: "A horcajadas y con los pies apoyados en los reposapiés laterales.", ru: "Верхом, поставив ноги на боковые подножки.", en: "Astride, with feet on the side footrests." },
        { es: "A horcajadas entre la persona que conduce y el manillar de dirección.", ru: "Верхом между водителем и рулём.", en: "Astride between the rider and the handlebars." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 12: пассажир сидит верхом на сиденье за водителем, ноги на подножках; садиться между водителем и рулём запрещено.", en: "RGC art. 12: the passenger sits astride behind the rider with feet on the footrests; sitting between rider and handlebars is banned." } },
    { es: "Los agentes de la autoridad encargados de la vigilancia del tráfico podrán inmovilizar un vehículo cuando...",
      prompt: { ru: "Агенты могут обездвижить машину, когда…", en: "Traffic officers may immobilise a vehicle when…" },
      options: [
        { es: "Supere los niveles de gases, humos y ruidos permitidos reglamentariamente.", ru: "Она превышает допустимые нормы газов, дыма и шума.", en: "It exceeds the permitted levels of gases, smoke and noise." },
        { es: "Su conductor no disponga del permiso de circulación original.", ru: "У водителя нет оригинала свидетельства о регистрации.", en: "The driver does not have the original registration certificate." },
        { es: "Su conductor sea sancionado dos veces en el mismo día.", ru: "Водителя оштрафовали дважды за день.", en: "The driver has been fined twice in one day." }
      ],
      answer: 0,
      explain: { ru: "LSV, ст. 104: среди причин обездвиживания — превышение допустимых выбросов и шума.", en: "LSV art. 104: exceeding permitted emission or noise levels is one of the grounds for immobilisation." } },
    { es: "Como norma general, una motocicleta, ¿puede circular por el arcén?",
      prompt: { ru: "Как правило, может ли мотоцикл ехать по обочине?", en: "As a rule, may a motorcycle ride on the hard shoulder?" },
      options: [
        { es: "No, debe circular por la calzada.", ru: "Нет, он должен ехать по проезжей части.", en: "No, it must use the carriageway." },
        { es: "Sí, pero no puede hacerlo en paralelo con otros vehículos.", ru: "Да, но не рядом с другими.", en: "Yes, but not side by side with other vehicles." },
        { es: "Sí, pero solo si su cilindrada es igual o inferior a 125 c.c.", ru: "Да, но только до 125 см³.", en: "Yes, but only up to 125 cc." }
      ],
      answer: 0,
      explain: { ru: "Обочиной обязаны пользоваться велосипеды, мопеды, гужевые повозки, медленная спецтехника и т. п.; мотоцикл едет по проезжей части (RGC, ст. 36).", en: "The shoulder is for cycles, mopeds, animal-drawn and slow special vehicles and the like; a motorcycle uses the carriageway (RGC art. 36)." } },
    { es: "¿Puede el conductor reducir la probabilidad de accidente debida al “factor vía”?",
      prompt: { ru: "Может ли водитель снизить вероятность аварии из-за «фактора дороги»?", en: "Can the driver reduce the probability of an accident due to the ‘road factor’?" },
      options: [
        { es: "Sí, adaptando su conducción a las condiciones del medio.", ru: "Да, приспосабливая вождение к условиям.", en: "Yes, by adapting driving to the conditions." },
        { es: "No, porque no puede actuar sobre la vía ni sobre el entorno.", ru: "Нет, он не может повлиять на дорогу и окружение.", en: "No, because he cannot act on the road or surroundings." },
        { es: "Sí, si su vehículo cuenta con los últimos avances de seguridad.", ru: "Да, если в машине новейшие системы безопасности.", en: "Yes, if the vehicle has the latest safety features." }
      ],
      answer: 0,
      explain: { ru: "Дорогу водитель не изменит, но может подстроить под неё скорость, дистанцию и манеру езды.", en: "The driver cannot change the road, but can adapt speed, gap and driving style to it." } },
    { es: "Circular por debajo del límite máximo de velocidad, ¿puede causar accidentes?",
      prompt: { ru: "Может ли езда ниже максимальной скорости приводить к авариям?", en: "Can driving below the speed limit cause accidents?" },
      options: [
        { es: "Sí, cuando la velocidad no se adapte a las circunstancias del tráfico.", ru: "Да, если скорость не соответствует обстановке.", en: "Yes, when the speed is not suited to traffic conditions." },
        { es: "No, sólo se pueden causar accidentes circulando por encima de ese límite.", ru: "Нет, аварии бывают только при превышении.", en: "No, accidents only happen above the limit." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 0,
      explain: { ru: "Лимит — это максимум; скорость должна соответствовать дороге, погоде и движению (RGC, ст. 45).", en: "The limit is a maximum; speed must suit the road, weather and traffic (RGC art. 45)." } },
    { es: "Para transportar una mascota, salvo que exista en el vehículo un lugar destinado para su transporte, debe estar...",
      prompt: { ru: "Если в машине нет специального места для перевозки питомца, он должен быть…", en: "To carry a pet, unless the vehicle has a dedicated place for it, it must be…" },
      options: [
        { es: "Controlada obligatoriamente por un pasajero.", ru: "Обязательно под присмотром пассажира.", en: "Compulsorily controlled by a passenger." },
        { es: "Situada obligatoriamente en los asientos traseros y con el cinturón de seguridad del vehículo.", ru: "Обязательно на заднем сиденье, пристёгнутый ремнём.", en: "Compulsorily on the back seat with the seat belt." },
        { es: "Sujeta de forma que no interfiera en el conductor para evitar perder el control del vehículo.", ru: "Зафиксирован так, чтобы не мешать водителю и не привести к потере управления.", en: "Secured so it does not interfere with the driver and cause loss of control." }
      ],
      answer: 2,
      explain: { ru: "Водитель должен сохранять свободу движений и внимание; животное перевозят закреплённым (переноска, ремень-шлейка, сетка), чтобы оно не мешало (RGC, ст. 18).", en: "The driver must keep freedom of movement and attention; carry the animal secured (carrier, harness, net) so it cannot interfere (RGC art. 18)." } },
    { es: "Cuando se consume alcohol, ¿se producen alteraciones en la visión?",
      prompt: { ru: "Вызывает ли алкоголь нарушения зрения?", en: "Does drinking alcohol alter vision?" },
      options: [
        { es: "Sí, puede aparecer la visión túnel.", ru: "Да, может появиться «туннельное зрение».", en: "Yes, tunnel vision may appear." },
        { es: "No, solamente afecta a la capacidad motora.", ru: "Нет, он влияет только на моторику.", en: "No, it only affects motor skills." },
        { es: "Sí, pero solamente con tasas de alcohol por encima de las permitidas.", ru: "Да, но только выше разрешённого уровня.", en: "Yes, but only above the permitted levels." }
      ],
      answer: 0,
      explain: { ru: "Даже малые дозы сужают поле зрения, ухудшают оценку расстояний и восстановление после ослепления.", en: "Even small amounts narrow the visual field and impair distance judgement and recovery from glare." } },
    { es: "Si presencia un accidente de circulación, ¿tiene obligación de avisar a la Autoridad o a sus agentes si solo hay heridos leves y la seguridad de la circulación está restablecida?",
      prompt: { ru: "Если вы стали свидетелем аварии, обязаны ли вы сообщить властям, если пострадавшие только легко ранены и движение восстановлено?", en: "If you witness an accident, must you inform the authorities if there are only minor injuries and traffic is flowing safely again?" },
      options: [
        { es: "No, salvo que alguna de las personas implicadas en el accidente lo solicite.", ru: "Нет, если только кто-то из участников не попросит.", en: "No, unless one of those involved asks for it." },
        { es: "Sí, siempre.", ru: "Да, всегда.", en: "Yes, always." },
        { es: "No, en ningún caso.", ru: "Нет, ни в коем случае.", en: "No, never." }
      ],
      answer: 0,
      explain: { ru: "При лёгких травмах и восстановленном движении сообщать обязательно, только если этого требует кто-то из участников (RGC, ст. 129).", en: "With only minor injuries and traffic restored, you must report only if someone involved requests it (RGC art. 129)." } },
    { es: "Bajo los efectos del estrés la conducción se vuelve...",
      prompt: { ru: "Под действием стресса вождение становится…", en: "Under stress, driving becomes…" },
      options: [
        { es: "Menos temeraria.", ru: "Менее рискованным.", en: "Less reckless." },
        { es: "Más temeraria.", ru: "Более рискованным.", en: "More reckless." },
        { es: "Más segura.", ru: "Более безопасным.", en: "Safer." }
      ],
      answer: 1,
      explain: { ru: "Стресс делает водителя нетерпеливым и склонным к риску.", en: "Stress makes drivers impatient and prone to taking risks." } },
    { es: "El impacto económico de los accidentes de tráfico afecta a...",
      prompt: { ru: "Экономические последствия аварий затрагивают…", en: "The economic impact of road accidents affects…" },
      options: [
        { es: "todos los ciudadanos, directa o indirectamente.", ru: "всех граждан, прямо или косвенно.", en: "all citizens, directly or indirectly." },
        { es: "los conductores que tienen un accidente al pagar el seguro de su vehículo.", ru: "водителей, попавших в аварию, через страховку.", en: "drivers who have an accident, through their insurance." },
        { es: "las compañías aseguradoras en exclusiva.", ru: "только страховые компании.", en: "insurance companies only." }
      ],
      answer: 0,
      explain: { ru: "Медицина, пенсии по инвалидности, потеря производительности и страхование оплачиваются всем обществом.", en: "Healthcare, disability pensions, lost productivity and insurance are paid for by society as a whole." } },
    { es: "La señalización vertical prevalece sobre...",
      prompt: { ru: "Вертикальные знаки главнее…", en: "Vertical signs prevail over…" },
      options: [
        { es: "Los semáforos.", ru: "Светофоров.", en: "Traffic lights." },
        { es: "La señalización horizontal.", ru: "Горизонтальной разметки.", en: "Road markings." },
        { es: "Las señales de balizamiento.", ru: "Направляющих устройств.", en: "Beacons and markers." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 133: агенты → временная сигнализация и направляющие устройства → светофоры → вертикальные знаки → разметка.", en: "RGC art. 133: officers → temporary signs and markers → traffic lights → vertical signs → road markings." } },
    { es: "El conductor del vehículo que utiliza el carril adicional...",
      prompt: { ru: "Водитель машины на временной дополнительной полосе…", en: "The driver of a vehicle using the additional lane…" },
      options: [
        { es: "Circulará, como máximo, a 100 km/h.", ru: "Едет не быстрее 100 км/ч.", en: "Will travel at most at 100 km/h." },
        { es: "Deberá abandonar la vía en cuanto le sea posible.", ru: "Должен покинуть дорогу при первой возможности.", en: "Must leave the road as soon as possible." },
        { es: "Llevará encendida, al menos, la luz de cruce.", ru: "Должен включить как минимум ближний свет.", en: "Must have at least the dipped beam on." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 42: на дополнительной полосе — 60–80 км/ч и минимум ближний свет днём и ночью.", en: "RGC art. 42: in the additional lane — 60–80 km/h and at least dipped beam day and night." } },
    { es: "Esta señal indica la proximidad de...",
      prompt: { ru: "Этот знак указывает на приближение…", en: "This sign indicates the approach of…" },
      options: [
        { es: "Un cruce con una línea de tranvía.", ru: "Пересечения с трамвайной линией.", en: "A crossing with a tram line." },
        { es: "Un paso a nivel, puente móvil o muelle.", ru: "Железнодорожного переезда, разводного моста или причала.", en: "A level crossing, movable bridge or quay." },
        { es: "Un cruce sin prioridad.", ru: "Перекрёстка без приоритета.", en: "A junction without priority." }
      ],
      answer: 1,
      explain: { ru: "Столбики с красными полосами (P-9a — три полосы, 200 м) стоят перед переездом, разводным мостом или причалом вместе с основным знаком (Каталог, P-9a).", en: "Posts with red stripes (P-9a — three stripes, 200 m) stand before a level crossing, movable bridge or quay, together with the main sign (Catalogue, P-9a)." },
      sign: "P-9a" },
    { es: "En condiciones de niebla espesa deberá...",
      prompt: { ru: "В густом тумане нужно…", en: "In thick fog you must…" },
      options: [
        { es: "Llevar encendida la luz antiniebla delantera solamente.", ru: "Включить только передние противотуманные.", en: "Use only the front fog lights." },
        { es: "Moderar la velocidad.", ru: "Снизить скорость.", en: "Moderate your speed." },
        { es: "Circular por el arcén.", ru: "Ехать по обочине.", en: "Drive on the hard shoulder." }
      ],
      answer: 1,
      explain: { ru: "В тумане снижают скорость, увеличивают дистанцию и включают свет; задний противотуманный — при густом тумане (RGC, ст. 106).", en: "In fog slow down, increase the gap and use lights; the rear fog light is for thick fog (RGC art. 106)." } },
    { es: "Una vez inmovilizado el vehículo, los usuarios deberán entrar o salir...",
      prompt: { ru: "После остановки машины пассажиры должны входить и выходить…", en: "Once the vehicle has stopped, occupants must get in or out…" },
      options: [
        { es: "Por cualquier lado del vehículo, tomando las debidas precauciones.", ru: "С любой стороны, соблюдая осторожность.", en: "On either side, taking due care." },
        { es: "Por el lado más próximo a la acera o al arcén, como norma general.", ru: "Как правило, со стороны тротуара или обочины.", en: "As a rule, on the side nearest the pavement or shoulder." },
        { es: "Por el lado del conductor, siempre.", ru: "Всегда со стороны водителя.", en: "Always on the driver’s side." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 114.2: как правило, со стороны, ближайшей к краю дороги.", en: "RGC art. 114.2: as a rule, on the side nearest the road edge." } },
    { es: "Para evitar o retrasar la aparición de la fatiga, es aconsejable que el conductor...",
      prompt: { ru: "Чтобы предотвратить или отсрочить усталость, водителю стоит…", en: "To prevent or delay fatigue, the driver should…" },
      options: [
        { es: "Circule a menor velocidad para disminuir los efectos de la fatiga.", ru: "Ехать медленнее, чтобы уменьшить её влияние.", en: "Drive slower to lessen its effects." },
        { es: "Mantenga el interior del vehículo a una temperatura superior a 25 grados.", ru: "Держать в салоне выше 25 градусов.", en: "Keep the cabin above 25 degrees." },
        { es: "Mantenga bien ventilado el interior del vehículo.", ru: "Хорошо проветривать салон.", en: "Keep the vehicle well ventilated." }
      ],
      answer: 2,
      explain: { ru: "Душный и жаркий салон клонит в сон; оптимально 18–24 °C и свежий воздух.", en: "A stuffy hot cabin makes you sleepy; 18–24 °C and fresh air are best." } },
    { es: "El conductor del vehículo blanco quiere volver rápidamente al carril derecho porque ve un peligro. ¿Qué debe hacer el conductor del vehículo verde?",
      prompt: { ru: "Водитель белой машины хочет быстро вернуться на правую полосу, потому что видит опасность. Что должен сделать водитель зелёной машины?", en: "The driver of the white car wants to return quickly to the right lane because he sees a hazard. What should the driver of the green car do?" },
      options: [
        { es: "Aumentar la velocidad para que desista de realizar la maniobra.", ru: "Ускориться, чтобы тот отказался от манёвра.", en: "Speed up so he gives up the manoeuvre." },
        { es: "Nada, porque no tiene ninguna obligación.", ru: "Ничего, у него нет обязанностей.", en: "Nothing, he has no obligation." },
        { es: "Reducir la velocidad para facilitarle el retorno al carril.", ru: "Снизить скорость, чтобы помочь ему вернуться.", en: "Slow down to help him return to the lane." }
      ],
      answer: 2,
      explain: { ru: "Обгоняемый не должен ускоряться и обязан облегчить возвращение обгоняющему, в том числе снизив скорость (RGC, ст. 86).", en: "The vehicle being overtaken must not speed up and must make it easy for the other to return, slowing if necessary (RGC art. 86)." } },
    { es: "En una calzada con nieve, ¿el uso brusco e inadecuado de los frenos puede ser causa de derrape?",
      prompt: { ru: "Может ли резкое и неправильное торможение на снегу вызвать занос?", en: "On a snowy road, can sudden or improper braking cause a skid?" },
      options: [
        { es: "Sí, si se frena bruscamente, los neumáticos pueden perder la adherencia sobre el pavimento.", ru: "Да, при резком торможении шины могут потерять сцепление.", en: "Yes, braking hard can make the tyres lose grip on the surface." },
        { es: "No, si las ruedas están perfectamente alineadas y equilibradas.", ru: "Нет, если колёса правильно отрегулированы и сбалансированы.", en: "No, if the wheels are properly aligned and balanced." },
        { es: "No, si los neumáticos tienen la presión de inflado recomendada.", ru: "Нет, если давление в шинах рекомендованное.", en: "No, if the tyres have the recommended pressure." }
      ],
      answer: 0,
      explain: { ru: "На снегу тормозят мягко и как можно реже, снижают скорость и держат большую дистанцию.", en: "On snow brake gently and as little as possible, slow down and keep a long gap." } },
    { es: "Una motocicleta, ¿puede utilizar normalmente un carril VAO?",
      prompt: { ru: "Может ли мотоцикл обычно пользоваться полосой VAO?", en: "May a motorcycle normally use a VAO (high-occupancy) lane?" },
      options: [
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No, solo pueden utilizarlo turismos.", ru: "Нет, только легковые автомобили.", en: "No, only cars may use it." },
        { es: "Sí, pero siempre que en dicho carril no exista tráfico.", ru: "Да, но только если на полосе нет движения.", en: "Yes, but only when there is no traffic in it." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 35.2: полосой VAO могут пользоваться мотоциклы, легковые и смешанные адаптируемые ТС; мотоциклы — независимо от числа людей.", en: "RGC art. 35.2: VAO lanes are for motorcycles, cars and adaptable mixed vehicles; motorcycles regardless of occupants." } },
    { es: "¿Cuál es la edad mínima para viajar como acompañante en una motocicleta conducida por alguien distinto a los padres o al tutor del menor, o por una persona mayor de edad autorizada?",
      prompt: { ru: "С какого возраста можно ехать пассажиром на мотоцикле, если водитель — не родитель, не опекун и не уполномоченный ими взрослый?", en: "What is the minimum age to ride as a passenger on a motorcycle driven by someone other than the child’s parents, guardian or an authorised adult?" },
      options: [
        { es: "7 años.", ru: "7 лет.", en: "7 years." },
        { es: "12 años.", ru: "12 лет.", en: "12 years." },
        { es: "14 años.", ru: "14 лет.", en: "14 years." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 12: пассажиру мотоцикла должно быть больше 12 лет; с 7 лет — только с родителем, опекуном или уполномоченным ими взрослым, в шлеме.", en: "RGC art. 12: a motorcycle passenger must be over 12; from 7 only with a parent, guardian or adult they authorise, wearing a helmet." } },
    { es: "Si mientras conducimos tenemos una fuerte discusión y nos alteramos, es recomendable...",
      prompt: { ru: "Если за рулём вы сильно поссорились и разволновались, лучше…", en: "If while driving you have a heated argument and get upset, it is advisable to…" },
      options: [
        { es: "Acelerar y procurar llegar lo antes posible a nuestro destino.", ru: "Ускориться, чтобы быстрее доехать.", en: "Speed up to arrive as soon as possible." },
        { es: "Parar en lugar permitido y no continuar la marcha hasta sentirnos más tranquilos.", ru: "Остановиться в разрешённом месте и ехать дальше, только когда успокоитесь.", en: "Stop in a permitted place and not continue until you feel calmer." },
        { es: "Tomar un medicamento relajante.", ru: "Принять успокоительное.", en: "Take a relaxing medicine." }
      ],
      answer: 1,
      explain: { ru: "В возбуждённом состоянии растёт риск; надо остановиться и успокоиться. Успокоительные сами могут ухудшать вождение.", en: "Agitation raises risk; stop and calm down. Sedatives can themselves impair driving." } },
    { es: "¿Cuándo está prohibido adelantar en los túneles?",
      prompt: { ru: "Когда запрещён обгон в тоннелях?", en: "When is overtaking forbidden in tunnels?" },
      options: [
        { es: "Cuando solo existe un carril para cada sentido.", ru: "Когда в каждую сторону только одна полоса.", en: "When there is only one lane in each direction." },
        { es: "Cuando existe más de un carril para cada sentido.", ru: "Когда в каждую сторону больше одной полосы.", en: "When there is more than one lane in each direction." },
        { es: "Cuando el túnel no está iluminado.", ru: "Когда тоннель не освещён.", en: "When the tunnel is not lit." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 87: обгон запрещён в тоннелях и подземных переходах с одной полосой в направлении движения.", en: "RGC art. 87: overtaking is banned in tunnels and underpasses with only one lane in your direction." } },
    { es: "Al cruzar un arcén por el que circulan peatones en una zona en la que no existe zona peatonal, ¿qué debe hacer?",
      prompt: { ru: "Пересекая обочину, по которой идут пешеходы, там, где нет пешеходной зоны, что нужно делать?", en: "When crossing a shoulder used by pedestrians where there is no pedestrian area, what must you do?" },
      options: [
        { es: "Ceder el paso a los peatones, pues tienen preferencia.", ru: "Уступить пешеходам: у них преимущество.", en: "Give way to the pedestrians, as they have priority." },
        { es: "Avisar a los peatones de su presencia con señales acústicas.", ru: "Предупредить их звуковым сигналом.", en: "Warn them with the horn." },
        { es: "Continuar circulando, ya que tiene preferencia de paso.", ru: "Ехать дальше, у вас преимущество.", en: "Keep going, as you have priority." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 65: водитель уступает пешеходам, пересекая обочину, по которой они идут.", en: "RGC art. 65: drivers give way to pedestrians when crossing a shoulder they are using." } },
    { es: "En esta zona con línea amarilla en zig-zag, ¿qué está prohibido?",
      prompt: { ru: "Что запрещено в зоне с жёлтой зигзагообразной линией?", en: "In this area with a yellow zigzag line, what is forbidden?" },
      options: [
        { es: "Estacionar.", ru: "Стоянка.", en: "Parking." },
        { es: "Parar.", ru: "Остановка.", en: "Stopping." },
        { es: "Parar y estacionar.", ru: "Остановка и стоянка.", en: "Stopping and parking." }
      ],
      answer: 0,
      explain: { ru: "Зигзаг (M-7.9) запрещает стоянку; место предназначено для кратковременного особого использования (RGC, приложение о разметке).", en: "The zigzag (M-7.9) bans parking; the place is kept for a short-term special use (RGC, marking annex)." } },
    { es: "¿Cuál es la sanción por no tener el seguro obligatorio del vehículo?",
      prompt: { ru: "Какое наказание за отсутствие обязательной страховки?", en: "What is the penalty for not having compulsory vehicle insurance?" },
      options: [
        { es: "Una multa, pero sin inmovilización del vehículo.", ru: "Штраф, но без обездвиживания машины.", en: "A fine, but no immobilisation." },
        { es: "Una multa, y además se podrá inmovilizar el vehículo.", ru: "Штраф, и машину могут обездвижить.", en: "A fine, and the vehicle may also be immobilised." },
        { es: "La inmovilización del vehículo, pero no supone sanción económica.", ru: "Обездвиживание машины без штрафа.", en: "Immobilisation, but no fine." }
      ],
      answer: 1,
      explain: { ru: "Езда без обязательного страхования — серьёзное нарушение со штрафом; машину также обездвиживают (LSV, ст. 104).", en: "Driving uninsured is a serious offence with a fine; the vehicle is also immobilised (LSV art. 104)." } },
    { es: "¿Qué debe tener especialmente en cuenta para dejar con el vehículo de delante una distancia que le permita, en caso de frenada brusca, detenerse con seguridad?",
      prompt: { ru: "Что особенно учитывать, оставляя дистанцию до машины впереди, чтобы при резком торможении безопасно остановиться?", en: "What must you especially consider to keep a gap that lets you stop safely if the car ahead brakes sharply?" },
      options: [
        { es: "La velocidad de circulación, únicamente.", ru: "Только скорость.", en: "Speed only." },
        { es: "La velocidad y las condiciones de adherencia y frenado.", ru: "Скорость, сцепление и состояние тормозов.", en: "Speed and the grip and braking conditions." },
        { es: "Las condiciones climatológicas y el tipo de vehículo que nos sigue.", ru: "Погоду и тип машины, которая едет сзади.", en: "The weather and the type of vehicle behind us." }
      ],
      answer: 1,
      explain: { ru: "Дистанция зависит от скорости, состояния дороги и шин, тормозов и времени реакции (RGC, ст. 54).", en: "The gap depends on speed, road and tyre grip, brakes and reaction time (RGC art. 54)." } },
    { es: "Todo peatón que circule por el arcén de una vía fuera de poblado, entre el ocaso y la salida del sol, ¿debe ir provisto de un elemento luminoso o retrorreflectante?",
      prompt: { ru: "Должен ли пешеход, идущий за городом по обочине от заката до восхода, иметь светящийся или световозвращающий элемент?", en: "Must every pedestrian walking on the shoulder outside built-up areas between dusk and sunrise carry a light or reflective item?" },
      options: [
        { es: "No, si circula lo más próximo posible al borde de la calzada.", ru: "Нет, если он идёт у самого края проезжей части.", en: "No, if he walks as close as possible to the edge." },
        { es: "Sí, para hacerse visible a una distancia mínima de 150 metros por los conductores que se le aproximen.", ru: "Да, чтобы водители видели его минимум за 150 м.", en: "Yes, so approaching drivers can see him from at least 150 metres." },
        { es: "Sí, pero solamente debe llevarlo puesto cuando existan condiciones meteorológicas que disminuyan sensiblemente la visibilidad.", ru: "Да, но только при погоде, заметно ухудшающей видимость.", en: "Yes, but only when weather significantly reduces visibility." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 123: за городом в тёмное время или при плохой видимости пешеход носит светящийся или световозвращающий элемент, видимый минимум за 150 м.", en: "RGC art. 123: outside towns at night or in poor visibility pedestrians wear a light or reflective item visible from at least 150 m." } },
    { es: "En un semáforo se apaga la luz verde y se enciende la luz amarilla fija; ¿puede pasar?",
      prompt: { ru: "На светофоре гаснет зелёный и загорается постоянный жёлтый. Можно проехать?", en: "At a traffic light the green goes out and a steady amber comes on. May you go through?" },
      options: [
        { es: "Sí, en todo caso.", ru: "Да, в любом случае.", en: "Yes, in any case." },
        { es: "Sí, porque todavía no ha cambiado la luz a rojo.", ru: "Да, ведь ещё не красный.", en: "Yes, because it has not yet turned red." },
        { es: "No, excepto si no puede detenerse en condiciones de seguridad suficiente.", ru: "Нет, если только нельзя безопасно остановиться.", en: "No, unless you cannot stop safely." }
      ],
      answer: 2,
      explain: { ru: "Постоянный жёлтый означает «стоп», как красный, кроме случая, когда остановиться безопасно уже невозможно (RGC, ст. 146).", en: "A steady amber means stop, like red, unless you can no longer stop safely (RGC art. 146)." } },
    { es: "Para girar a la izquierda en una vía en la que no hay marca que separe los dos sentidos de circulación, ¿dónde debe situarse?",
      prompt: { ru: "Чтобы повернуть налево на дороге без разметки, разделяющей направления, где нужно встать?", en: "To turn left on a road with no marking separating the two directions, where must you position yourself?" },
      options: [
        { es: "Obligatoriamente en el arcén, para realizar la maniobra desde allí.", ru: "Обязательно на обочине, чтобы начать манёвр оттуда.", en: "Compulsorily on the shoulder, to turn from there." },
        { es: "En el centro de la calzada, invadiendo parte del sentido contrario si es preciso.", ru: "По центру проезжей части, при необходимости частично заехав на встречную.", en: "In the centre, encroaching on the opposite side if needed." },
        { es: "Junto al eje de la calzada, sin invadir el sentido contrario.", ru: "У оси проезжей части, не заезжая на встречную.", en: "Next to the centre of the carriageway, without entering the opposite side." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 75: на двусторонней дороге для поворота налево встают ближе к оси, не заезжая на половину встречного движения.", en: "RGC art. 75: on a two-way road, move close to the centre to turn left, without entering the other half." } },
    { es: "En un carril bus, ¿puede un turismo realizar una parada?",
      prompt: { ru: "Может ли легковой автомобиль остановиться на полосе для автобусов?", en: "May a car stop in a bus lane?" },
      options: [
        { es: "Solo cuando no obstaculice la circulación de autobuses.", ru: "Только если не мешает автобусам.", en: "Only when it does not obstruct buses." },
        { es: "Sí, en todo caso.", ru: "Да, в любом случае.", en: "Yes, in any case." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 2,
      explain: { ru: "Останавливаться и стоять на полосе для автобусов запрещено (RGC, ст. 91; LSV, ст. 76).", en: "Stopping and parking in a bus lane are forbidden (RGC art. 91; LSV art. 76)." } },
    { es: "El uso adecuado del casco implica que la correa de sujeción...",
      prompt: { ru: "Правильное использование шлема означает, что подбородочный ремешок…", en: "Proper use of the helmet means the chin strap…" },
      options: [
        { es: "no debe abrocharse.", ru: "не застёгивают.", en: "should not be fastened." },
        { es: "debe llevarse correctamente abrochada, para que el casco cumpla eficazmente su función.", ru: "должен быть правильно застёгнут, чтобы шлем выполнял свою функцию.", en: "must be correctly fastened so the helmet does its job." },
        { es: "puede llevarse desabrochada en vía urbana.", ru: "можно не застёгивать в городе.", en: "may be left undone on urban roads." }
      ],
      answer: 1,
      explain: { ru: "Незастёгнутый шлем слетает при падении; ремешок обязателен всегда (RGC, ст. 118).", en: "An unfastened helmet comes off in a fall; the strap must always be done up (RGC art. 118)." } },
    { es: "¿Qué puede aumentar la distancia de frenado?",
      prompt: { ru: "Что может увеличить тормозной путь?", en: "What can increase braking distance?" },
      options: [
        { es: "Únicamente la velocidad.", ru: "Только скорость.", en: "Only speed." },
        { es: "Que el vehículo lleve frenos de disco.", ru: "Дисковые тормоза.", en: "The vehicle having disc brakes." },
        { es: "Que haya nieve o hielo en la calzada.", ru: "Снег или лёд на дороге.", en: "Snow or ice on the road." }
      ],
      answer: 2,
      explain: { ru: "Тормозной путь растёт со скоростью, загрузкой и при плохом сцеплении (снег, лёд, вода, изношенные шины).", en: "Braking distance grows with speed, load and poor grip (snow, ice, water, worn tyres)." } },
    { es: "En un automóvil, ¿cuál de los siguientes elementos reduce el riesgo de lesiones de cuello en una colisión?",
      prompt: { ru: "Какой элемент автомобиля снижает риск травм шеи при столкновении?", en: "In a car, which of these reduces the risk of neck injuries in a collision?" },
      options: [
        { es: "Los frenos ABS.", ru: "ABS.", en: "ABS brakes." },
        { es: "El reposacabezas, ajustado de forma apropiada.", ru: "Правильно отрегулированный подголовник.", en: "A properly adjusted head restraint." },
        { es: "El cinturón de seguridad.", ru: "Ремень безопасности.", en: "The seat belt." }
      ],
      answer: 1,
      explain: { ru: "При ударе сзади голова откидывается назад («хлыстовая травма»); защищает подголовник на правильной высоте и близко к голове.", en: "In a rear impact the head snaps back (whiplash); a head restraint at the right height and close to the head protects you." } },
    { es: "Si los frenos se mojan...",
      prompt: { ru: "Если тормоза намокли…", en: "If the brakes get wet…" },
      options: [
        { es: "Pueden dejar de frenar, perdiendo temporalmente su eficacia.", ru: "Они могут временно потерять эффективность.", en: "They may temporarily lose their effectiveness." },
        { es: "Se estropean y deben cambiarse las zapatas o pastillas.", ru: "Они ломаются, и колодки надо менять.", en: "They break and the shoes or pads must be changed." },
        { es: "Se frena en menos espacio.", ru: "Машина тормозит на меньшем расстоянии.", en: "The car stops in a shorter distance." }
      ],
      answer: 0,
      explain: { ru: "После глубокой лужи тормоза хуже работают; их просушивают лёгкими нажатиями на педаль.", en: "After a deep puddle the brakes work less well; dry them with light presses on the pedal." } },
    { es: "En un accidente entre dos vehículos, ¿qué tipo de daños cubre el seguro de responsabilidad civil de suscripción obligatoria?",
      prompt: { ru: "При аварии двух машин какой ущерб покрывает обязательное страхование гражданской ответственности?", en: "In an accident between two vehicles, what damage does compulsory liability insurance cover?" },
      options: [
        { es: "Solamente los daños materiales.", ru: "Только материальный ущерб.", en: "Only material damage." },
        { es: "Los daños personales y los materiales del vehículo no causante del accidente.", ru: "Вред здоровью и материальный ущерб машины, не виновной в аварии.", en: "Personal injury and material damage to the vehicle not at fault." },
        { es: "Solamente los daños personales.", ru: "Только вред здоровью.", en: "Only personal injury." }
      ],
      answer: 1,
      explain: { ru: "Обязательная страховка покрывает вред здоровью и имуществу пострадавших третьих лиц (в пределах лимитов), но не машину виновника.", en: "Compulsory insurance covers injury and property damage to third parties (within limits), but not the at-fault vehicle." } },
    { es: "En las isletas de canalización del tráfico situadas en la calzada, ¿se puede parar o estacionar?",
      prompt: { ru: "Можно ли останавливаться или стоять на направляющих островках на проезжей части?", en: "May you stop or park on traffic islands in the carriageway?" },
      options: [
        { es: "Se puede parar.", ru: "Можно остановиться.", en: "You may stop." },
        { es: "Se puede estacionar.", ru: "Можно стоять.", en: "You may park." },
        { es: "No se puede parar ni estacionar.", ru: "Нельзя ни останавливаться, ни стоять.", en: "You may neither stop nor park." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 91 и 94: на разделительных полосах, островках и других направляющих элементах остановка и стоянка запрещены.", en: "RGC arts. 91 and 94: stopping and parking on central reservations, islands and other channelling elements are forbidden." } },
    { es: "Los vehículos prioritarios, ¿tienen prioridad de paso sobre el resto de los usuarios de la vía?",
      prompt: { ru: "Есть ли у приоритетных машин преимущество перед остальными участниками?", en: "Do priority vehicles have right of way over other road users?" },
      options: [
        { es: "Sí, siempre.", ru: "Да, всегда.", en: "Yes, always." },
        { es: "No, nunca.", ru: "Нет, никогда.", en: "No, never." },
        { es: "Solo cuando circulen en servicio de urgencia.", ru: "Только когда они едут на срочный вызов.", en: "Only when they are on an emergency call." }
      ],
      answer: 2,
      explain: { ru: "Преимущество есть только при выполнении срочного задания с включёнными спецсигналами (RGC, ст. 67–68).", en: "They have priority only on an urgent call, with special signals on (RGC arts. 67–68)." } },
    { es: "Las malas condiciones meteorológicas, como lluvia, viento o hielo, ¿aumentan la probabilidad de sufrir un accidente con una motocicleta?",
      prompt: { ru: "Повышает ли плохая погода (дождь, ветер, лёд) вероятность аварии на мотоцикле?", en: "Does bad weather such as rain, wind or ice make a motorcycle accident more likely?" },
      options: [
        { es: "No; el mal tiempo no influye en la conducción de motocicletas.", ru: "Нет, погода не влияет на мотоциклы.", en: "No, bad weather does not affect riding." },
        { es: "Sí; es más probable que el motorista se caiga si hace movimientos bruscos.", ru: "Да; при резких движениях мотоциклист чаще падает.", en: "Yes; the rider is more likely to fall if he makes sudden movements." },
        { es: "Sí, pero solo si el conductor no lleva el equipamiento adecuado.", ru: "Да, но только если нет нужной экипировки.", en: "Yes, but only if the rider lacks proper gear." }
      ],
      answer: 1,
      explain: { ru: "У мотоцикла всего два пятна контакта: на мокрой или скользкой дороге и в ветер любое резкое движение может привести к падению.", en: "A motorcycle has only two contact patches: on wet or slippery roads and in wind any sudden movement can cause a fall." } },
    { es: "El medio ambiente, ¿se ve afectado por los accidentes de tráfico?",
      prompt: { ru: "Страдает ли окружающая среда от дорожных аварий?", en: "Is the environment affected by road accidents?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "Únicamente en vía interurbana.", ru: "Только за городом.", en: "Only on interurban roads." }
      ],
      answer: 1,
      explain: { ru: "Утечки топлива и масла, пожары, разлив опасных грузов и пробки загрязняют окружающую среду.", en: "Spilt fuel and oil, fires, dangerous-goods leaks and the resulting jams all pollute." } },
    { es: "Las altas temperaturas pueden suponer un riesgo para la seguridad durante la conducción. ¿Debe circular adoptando medidas preventivas?",
      prompt: { ru: "Жара может быть опасна за рулём. Нужно ли принимать меры?", en: "High temperatures can be a safety risk when driving. Should you take preventive measures?" },
      options: [
        { es: "Sí, por lo que debe conducir durante la noche, ya que la temperatura al ser inferior permite al conductor un tiempo de reacción mayor.", ru: "Да, ездить ночью, когда прохладнее и время реакции больше.", en: "Yes, so drive at night, when it is cooler and the reaction time is longer." },
        { es: "Sí, el conductor debe extremar las precauciones y realizar los descansos y paradas recomendados, para evitar la fatiga y el sueño.", ru: "Да, быть особенно осторожным и делать рекомендуемые перерывы, чтобы избежать усталости и сна.", en: "Yes, take extra care and make the recommended breaks and stops to avoid fatigue and sleep." },
        { es: "No, siempre que en el interior del vehículo no se alcancen temperaturas superiores a 20 grados.", ru: "Нет, если в салоне не выше 20 градусов.", en: "No, as long as the cabin does not exceed 20 degrees." }
      ],
      answer: 1,
      explain: { ru: "В жару растёт время реакции и легче отвлечься: избегать самых жарких часов, делать перерывы и правильно пользоваться климат-контролем.", en: "Heat lengthens reaction time and makes distraction easier: avoid the hottest hours, take breaks and use the climate control properly." } },
    { es: "Conducir bajo los efectos de algunas drogas puede producir en el conductor...",
      prompt: { ru: "Вождение под действием некоторых наркотиков может вызвать у водителя…", en: "Driving under the influence of some drugs can cause the driver…" },
      options: [
        { es: "Una percepción mayor del campo visual.", ru: "Более широкое поле зрения.", en: "A wider perception of the visual field." },
        { es: "Un nivel de alerta mayor.", ru: "Повышенную бдительность.", en: "Greater alertness." },
        { es: "Ilusiones ópticas.", ru: "Зрительные иллюзии.", en: "Optical illusions." }
      ],
      answer: 2,
      explain: { ru: "Галлюциногены и другие вещества искажают восприятие: иллюзии, ошибки в оценке расстояний и скорости.", en: "Hallucinogens and other substances distort perception: illusions and misjudged distances and speeds." } },
    { es: "Muchos atropellos a peatones se producen cuando los vehículos...",
      prompt: { ru: "Многие наезды на пешеходов происходят, когда машины…", en: "Many pedestrians are hit when vehicles…" },
      options: [
        { es: "Circulan marcha atrás porque el conductor no ha visto al peatón.", ru: "Едут задним ходом и водитель не видит пешехода.", en: "Reverse because the driver has not seen the pedestrian." },
        { es: "Se disponen a entrar en un garaje.", ru: "Собираются въехать в гараж.", en: "Are about to enter a garage." },
        { es: "Estacionan en la acera.", ru: "Стоят на тротуаре.", en: "Park on the pavement." }
      ],
      answer: 0,
      explain: { ru: "При движении задним ходом обзор ограничен, особенно маленьких детей; задний ход — только на короткое расстояние и с осторожностью (RGC, ст. 81).", en: "Reversing restricts the view, especially of small children; reverse only short distances and with care (RGC art. 81)." } },
    { es: "Fumar, mientras conduce, puede provocar...",
      prompt: { ru: "Курение за рулём может вызвать…", en: "Smoking while driving can cause…" },
      options: [
        { es: "Distracciones y problemas de visión a causa del humo", ru: "Отвлечение и проблемы со зрением из-за дыма.", en: "Distractions and vision problems due to the smoke." },
        { es: "Un aumento de la capacidad de atención.", ru: "Повышение внимания.", en: "An increase in attention." },
        { es: "Somnolencia.", ru: "Сонливость.", en: "Drowsiness." }
      ],
      answer: 0,
      explain: { ru: "Прикуривание и пепел отвлекают, дым раздражает глаза и оседает на стекле.", en: "Lighting up and ash distract; smoke irritates the eyes and films the glass." } },
    { es: "Como norma general se prohíbe cambiar el sentido de la marcha...",
      prompt: { ru: "Как правило, разворачиваться запрещено…", en: "As a general rule, turning round (U-turn) is forbidden…" },
      options: [
        { es: "En las calzadas con prioridad.", ru: "На главных дорогах.", en: "On priority carriageways." },
        { es: "En las plazas de circulación giratoria.", ru: "На кольцевых развязках.", en: "On roundabouts." },
        { es: "En los tramos de vía en los que esté prohibido adelantar.", ru: "На участках, где запрещён обгон.", en: "On stretches where overtaking is forbidden." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 79: разворот запрещён там, где запрещён обгон, если это не разрешено специально, а также на переломах, в тоннелях, на автострадах.", en: "RGC art. 79: U-turns are banned wherever overtaking is, unless expressly allowed, and on crests, in tunnels and on motorways." } },
    { es: "Para adelantar a este vehículo...",
      prompt: { ru: "Чтобы обогнать эту машину…", en: "To overtake this vehicle…" },
      options: [
        { es: "es obligatorio esperar a un tramo en el que la calzada esté seca.", ru: "нужно дождаться участка с сухой дорогой.", en: "you must wait for a stretch where the road is dry." },
        { es: "debe tenerse especial cuidado, pues las salpicaduras pueden impedir la visibilidad.", ru: "нужна особая осторожность: брызги могут закрыть обзор.", en: "special care is needed, as spray can block visibility." },
        { es: "no deben tomarse precauciones especiales.", ru: "особых мер не нужно.", en: "no special precautions are needed." }
      ],
      answer: 1,
      explain: { ru: "На мокрой дороге из-под колёс крупной машины летит водяная пыль: на время обгона вы почти ничего не видите. Включите дворники заранее и обгоняйте, только если видимость впереди точно достаточна.", en: "On a wet road a large vehicle throws up spray, blinding you during the overtake. Have the wipers ready and overtake only if you are sure of enough visibility ahead." } },
    { es: "No pueden circular por autopista...",
      prompt: { ru: "По автостраде не могут ехать…", en: "The following may not use a motorway…" },
      options: [
        { es: "las motocicletas.", ru: "мотоциклы.", en: "motorcycles." },
        { es: "los ciclomotores.", ru: "мопеды.", en: "mopeds." },
        { es: "los camiones de más de 3.500 kg de M.M.A.", ru: "грузовики с MMA больше 3 500 кг.", en: "lorries over 3,500 kg MMA." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 38: на автострадах запрещены мопеды, велосипеды, ВМП, гужевые повозки, пешеходы и медленная спецтехника.", en: "RGC art. 38: mopeds, cycles, personal mobility vehicles, animal-drawn vehicles, pedestrians and slow special vehicles are banned from motorways." } },
    { es: "Una línea longitudinal discontinua con trazos más anchos que en el caso general, indica...",
      prompt: { ru: "Прерывистая продольная линия с более широкими штрихами, чем обычно, обозначает…", en: "A broken longitudinal line with wider dashes than usual indicates…" },
      options: [
        { es: "la existencia de un carril reversible.", ru: "реверсивную полосу.", en: "a reversible lane." },
        { es: "la existencia de un carril especial para determinada clase de vehículos, de entrada o salida, u otro.", ru: "особую полосу для определённых машин, въезда, съезда и т. п.", en: "a special lane for certain vehicles, for entry or exit, or other." },
        { es: "la existencia de un carril que puede ser utilizado en sentido contrario al habitual.", ru: "полосу, которую можно использовать во встречном направлении.", en: "a lane that may be used in the opposite direction to usual." }
      ],
      answer: 1,
      explain: { ru: "Широкая прерывистая линия отделяет специальные полосы: разгона, торможения, для автобусов и т. п. (RGC, приложение о разметке).", en: "A wide broken line separates special lanes: acceleration, deceleration, bus lanes and so on (RGC, marking annex)." } },
    { es: "Al cargar combustible en el vehículo es obligatorio...",
      prompt: { ru: "При заправке машины обязательно…", en: "When refuelling the vehicle it is compulsory to…" },
      options: [
        { es: "apagar las luces y subir las ventanillas.", ru: "выключить фары и закрыть окна.", en: "switch off the lights and close the windows." },
        { es: "parar el motor y encender la señal de emergencia.", ru: "заглушить двигатель и включить аварийку.", en: "stop the engine and switch on the hazard lights." },
        { es: "apagar las luces y los sistemas eléctricos, como la radio.", ru: "выключить фары и электроприборы, например радио.", en: "switch off the lights and electrical systems such as the radio." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 115.3: при заправке двигатель заглушён, фары, радио и другие электроприборы, а также мобильные телефоны выключены.", en: "RGC art. 115.3: when refuelling the engine is off and the lights, radio, other electrical systems and mobile phones are switched off." } },
    { es: "En un paso para peatones sin semáforos que lo regule, ¿cuándo tienen preferencia los peatones?",
      prompt: { ru: "На пешеходном переходе без светофора когда у пешеходов преимущество?", en: "At a pedestrian crossing without traffic lights, when do pedestrians have priority?" },
      options: [
        { es: "Solo cuando el paso esté situado en una travesía.", ru: "Только если переход в travesía.", en: "Only when the crossing is in a travesía." },
        { es: "Siempre.", ru: "Всегда.", en: "Always." },
        { es: "Solo cuando los peatones hayan iniciado el cruce.", ru: "Только когда пешеходы уже начали переходить.", en: "Only once pedestrians have started to cross." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 65: на обозначенном переходе преимущество всегда у пешеходов.", en: "RGC art. 65: at a marked crossing pedestrians always have priority." } },
    { es: "El conductor de la furgoneta, ¿puede hacer una parada en doble fila para descargar?",
      prompt: { ru: "Может ли водитель фургона остановиться во втором ряду, чтобы разгрузиться?", en: "May the van driver stop in double file to unload?" },
      options: [
        { es: "No, está prohibido.", ru: "Нет, это запрещено.", en: "No, it is forbidden." },
        { es: "Sí, excepcionalmente y respetando las normas sobre paradas.", ru: "Да, в виде исключения и с соблюдением правил остановки.", en: "Yes, exceptionally and respecting the rules on stopping." },
        { es: "Solo si la parada tiene una duración igual o inferior a 1 minuto.", ru: "Только если остановка не дольше 1 минуты.", en: "Only if the stop lasts one minute or less." }
      ],
      answer: 1,
      explain: { ru: "Стоянка во втором ряду запрещена; кратковременная остановка допустима, если нет места и движению не мешают, водитель не уходит (RGC, ст. 91, 94).", en: "Parking in double file is banned; a brief stop is tolerated if there is no space, traffic is not hindered and the driver stays with the vehicle (RGC arts. 91, 94)." } },
    { es: "Los vehículos que circulan por la autovía, ¿facilitarán el paso a los vehículos que se incorporan desde el carril de aceleración?",
      prompt: { ru: "Должны ли машины на автомагистрали облегчать въезд тем, кто выезжает с полосы разгона?", en: "Should vehicles on the autovía make way for vehicles joining from the acceleration lane?" },
      options: [
        { es: "No, salvo que se trate de vehículos de transporte colectivo.", ru: "Нет, кроме машин общественного транспорта.", en: "No, except for public transport vehicles." },
        { es: "Sí, pero solo a los vehículos que se incorporen por el lado derecho.", ru: "Да, но только въезжающим справа.", en: "Yes, but only those joining from the right." },
        { es: "Sí, a cualquier vehículo que se incorpore, en la medida de lo posible.", ru: "Да, любому въезжающему, насколько возможно.", en: "Yes, to any vehicle joining, as far as possible." }
      ],
      answer: 2,
      explain: { ru: "Въезжающий уступает, но едущие по главной должны по возможности облегчить въезд — например, сместиться левее (RGC, ст. 72).", en: "The joining vehicle gives way, but those on the main road should help it merge where possible, e.g. by moving left (RGC art. 72)." } },
    { es: "Cuando prevea que va a quedar detenido dentro del túnel más de dos minutos, ¿qué debe hacer?",
      prompt: { ru: "Если вы предвидите, что простоите в тоннеле больше двух минут, что нужно сделать?", en: "If you expect to be held up inside a tunnel for more than two minutes, what must you do?" },
      options: [
        { es: "Apagar el motor.", ru: "Заглушить двигатель.", en: "Switch off the engine." },
        { es: "Apagar las luces.", ru: "Выключить свет.", en: "Switch off the lights." },
        { es: "Dar media vuelta con cuidado.", ru: "Осторожно развернуться.", en: "Turn round carefully." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 115.2: при остановке в тоннеле дольше двух минут двигатель глушат, оставляя габаритные огни.", en: "RGC art. 115.2: when stopped in a tunnel for more than two minutes switch off the engine, keeping the side lights on." } },
    { es: "Circula de noche con el alumbrado interior encendido. ¿Es peligroso?",
      prompt: { ru: "Вы едете ночью с включённым светом в салоне. Это опасно?", en: "You drive at night with the interior light on. Is it dangerous?" },
      options: [
        { es: "No, porque descansa la vista.", ru: "Нет, глаза отдыхают.", en: "No, it rests your eyes." },
        { es: "Sí, porque veo peor.", ru: "Да, я хуже вижу.", en: "Yes, because I see worse." },
        { es: "No, porque evita deslumbramiento.", ru: "Нет, он защищает от ослепления.", en: "No, because it prevents dazzle." }
      ],
      answer: 1,
      explain: { ru: "Свет в салоне отражается в стёклах и мешает глазам привыкнуть к темноте — дорогу видно хуже.", en: "Interior light reflects in the glass and stops your eyes adapting to the dark — you see the road worse." } },
    { es: "La eficacia del frenado aumenta, entre otras circunstancias, cuando...",
      prompt: { ru: "Эффективность торможения возрастает, в частности, когда…", en: "Braking effectiveness increases, among other things, when…" },
      options: [
        { es: "La masa del vehículo es mayor, ya que a mayor masa menor distancia de frenado.", ru: "Масса машины больше: чем она больше, тем короче тормозной путь.", en: "The vehicle’s mass is greater, since more mass means shorter braking distance." },
        { es: "Se pisa el pedal de embrague al mismo tiempo que el pedal de freno.", ru: "Одновременно с тормозом выжимается сцепление.", en: "The clutch is pressed at the same time as the brake." },
        { es: "La adherencia de los neumáticos al suelo es mayor.", ru: "Сцепление шин с дорогой выше.", en: "The tyres’ grip on the road is greater." }
      ],
      answer: 2,
      explain: { ru: "Чем лучше сцепление шин с дорогой, тем короче тормозной путь; большая масса, наоборот, его удлиняет.", en: "The better the tyre grip, the shorter the braking distance; more mass lengthens it." } },
    { es: "Como norma general, ¿cuándo es mayor el efecto del alcohol?",
      prompt: { ru: "Как правило, когда действие алкоголя сильнее всего?", en: "As a general rule, when is the effect of alcohol greatest?" },
      options: [
        { es: "Inmediatamente después de tomarlo.", ru: "Сразу после употребления.", en: "Immediately after drinking it." },
        { es: "Entre 30 y 90 minutos después de haber ingerido el alcohol.", ru: "Через 30–90 минут после употребления.", en: "Between 30 and 90 minutes after drinking." },
        { es: "Tres horas después de tomarlo.", ru: "Через три часа.", en: "Three hours after drinking." }
      ],
      answer: 1,
      explain: { ru: "Максимальная концентрация алкоголя в крови достигается примерно через 30–90 минут, затем он медленно выводится.", en: "Blood alcohol peaks about 30–90 minutes after drinking, then is eliminated slowly." } },
    { es: "¿De qué depende la distancia de detención?",
      prompt: { ru: "От чего зависит остановочный путь?", en: "What does stopping distance depend on?" },
      options: [
        { es: "De la velocidad, solamente.", ru: "Только от скорости.", en: "Only on speed." },
        { es: "Del tipo de vehículo, solamente.", ru: "Только от типа машины.", en: "Only on the type of vehicle." },
        { es: "De la velocidad, del tiempo de reacción y de la distancia de frenado.", ru: "От скорости, времени реакции и тормозного пути.", en: "On speed, reaction time and braking distance." }
      ],
      answer: 2,
      explain: { ru: "Остановочный путь = путь за время реакции + тормозной путь; оба растут со скоростью.", en: "Stopping distance = reaction distance + braking distance; both grow with speed." } },
    { es: "La fatiga, ¿puede alterar el tiempo de reacción del conductor?",
      prompt: { ru: "Может ли усталость изменить время реакции водителя?", en: "Can fatigue alter the driver’s reaction time?" },
      options: [
        { es: "Sí, lo aumenta.", ru: "Да, увеличивает.", en: "Yes, it increases it." },
        { es: "Sí, lo disminuye.", ru: "Да, уменьшает.", en: "Yes, it reduces it." },
        { es: "No.", ru: "Нет.", en: "No." }
      ],
      answer: 0,
      explain: { ru: "Уставший водитель медленнее замечает опасность и медленнее реагирует.", en: "A tired driver notices hazards later and reacts more slowly." } },
    { es: "¿Es recomendable regular los reposacabezas del vehículo a la altura de cada ocupante?",
      prompt: { ru: "Рекомендуется ли регулировать подголовники под рост каждого пассажира?", en: "Is it advisable to adjust the head restraints to each occupant’s height?" },
      options: [
        { es: "No es necesario, es solo un elemento de confort.", ru: "Не нужно, это лишь элемент комфорта.", en: "It is not necessary, it is only for comfort." },
        { es: "Solo es necesario regular el reposacabezas del conductor.", ru: "Нужно регулировать только подголовник водителя.", en: "Only the driver’s head restraint needs adjusting." },
        { es: "Sí; es un elemento de seguridad que puede evitar lesiones cervicales.", ru: "Да; это элемент безопасности, который может предотвратить травмы шеи.", en: "Yes; it is a safety item that can prevent neck injuries." }
      ],
      answer: 2,
      explain: { ru: "Подголовник — элемент пассивной безопасности для всех мест; его центр должен быть примерно на уровне глаз.", en: "The head restraint is a passive-safety device for every seat; its centre should be roughly at eye level." } },
    { es: "En un túnel con un solo carril para cada sentido, ¿está permitido el adelantamiento?",
      prompt: { ru: "В тоннеле с одной полосой в каждую сторону разрешён обгон?", en: "In a tunnel with one lane in each direction, is overtaking allowed?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "Solo si la calzada dispone de arcén practicable.", ru: "Только если есть пригодная обочина.", en: "Only if there is a usable shoulder." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 87: в тоннелях с одной полосой в направлении движения обгон запрещён.", en: "RGC art. 87: overtaking is forbidden in tunnels with one lane in your direction." } },
    { es: "Esta señal prohíbe…",
      prompt: { ru: "Этот знак запрещает…", en: "This sign prohibits…" },
      options: [
        { es: "El estacionamiento entre la 1 y las 15 horas.", ru: "Стоянку с 1 до 15 часов.", en: "Parking from 1 to 15 hours." },
        { es: "El estacionamiento desde las 9 horas del día 1 hasta las 9 horas del día 16.", ru: "Стоянку с 9 часов 1-го числа до 9 часов 16-го.", en: "Parking from 9:00 on the 1st until 9:00 on the 16th." },
        { es: "La parada los días indicados en la señal.", ru: "Остановку в указанные дни.", en: "Stopping on the days shown." }
      ],
      answer: 1,
      explain: { ru: "R-308c — стоянка запрещена в первую половину месяца: с 9:00 1-го до 9:00 16-го; остановку не запрещает (Каталог, R-308c).", en: "R-308c bans parking in the first half of the month: from 9:00 on the 1st to 9:00 on the 16th; stopping is allowed (Catalogue, R-308c)." },
      sign: "R-308c" },
    { es: "Al incorporarse a una autopista, ¿puede pisar la zona de cebreado?",
      prompt: { ru: "Въезжая на автостраду, можно ли наезжать на зону штриховки?", en: "When joining a motorway, may you drive over the hatched area?" },
      options: [
        { es: "Sí, si ya ha alcanzado en ese punto la velocidad adecuada para incorporarse a la circulación.", ru: "Да, если вы уже набрали нужную скорость.", en: "Yes, if you have already reached a suitable speed there." },
        { es: "Sí, para acortar la duración de la maniobra.", ru: "Да, чтобы сократить манёвр.", en: "Yes, to shorten the manoeuvre." },
        { es: "No, está prohibido.", ru: "Нет, это запрещено.", en: "No, it is forbidden." }
      ],
      answer: 2,
      explain: { ru: "Заезжать на зону штриховки (cebreado) запрещено (RGC, ст. 170).", en: "Driving over a hatched area (cebreado) is forbidden (RGC art. 170)." } },
    { es: "La distancia de frenado es el espacio recorrido desde que el conductor…",
      prompt: { ru: "Тормозной путь — это расстояние, которое машина проезжает с момента, когда водитель…", en: "Braking distance is the distance travelled from when the driver…" },
      options: [
        { es: "Ve el obstáculo hasta que se detiene el vehículo.", ru: "Видит препятствие, до остановки машины.", en: "Sees the obstacle until the vehicle stops." },
        { es: "Ve el obstáculo hasta que acciona el freno.", ru: "Видит препятствие, до нажатия на тормоз.", en: "Sees the obstacle until he applies the brake." },
        { es: "Acciona el freno hasta que el vehículo se detiene.", ru: "Нажимает тормоз, до остановки машины.", en: "Applies the brake until the vehicle stops." }
      ],
      answer: 2,
      explain: { ru: "Тормозной путь — от начала торможения до остановки; вместе с путём за время реакции он даёт остановочный путь.", en: "Braking distance runs from applying the brake to stopping; add the reaction distance to get stopping distance." } },
    { es: "En determinadas circunstancias, un turismo, ¿puede superar para adelantar la velocidad máxima fijada para el tipo de vía por la que circule?",
      prompt: { ru: "Может ли легковой автомобиль в определённых случаях превысить при обгоне максимальную скорость для этой дороги?", en: "In certain circumstances, may a car exceed the speed limit for the road in order to overtake?" },
      options: [
        { es: "No, en ningún caso.", ru: "Нет, ни в коем случае.", en: "No, never." },
        { es: "Sí, en carreteras convencionales interurbanas.", ru: "Да, на загородных обычных дорогах.", en: "Yes, on interurban conventional roads." },
        { es: "Sí, en todo tipo de vías interurbanas.", ru: "Да, на любых загородных дорогах.", en: "Yes, on all types of interurban roads." }
      ],
      answer: 0,
      explain: { ru: "Правило изменилось: с 21 марта 2022 года превышать лимит на 20 км/ч при обгоне на обычных дорогах нельзя — RGC, ст. 51, отменена. Журнал (2018) отвечал «да, на обычных дорогах».", en: "The rule has changed: since 21 March 2022 you may no longer exceed the limit by 20 km/h to overtake on conventional roads — RGC art. 51 was repealed. The magazine (2018) answered ‘yes, on conventional roads’." } },
    { es: "Salvo que exista señal que lo prohíba, por los arcenes de las autovías se permite circular…",
      prompt: { ru: "Если нет запрещающего знака, по обочинам автомагистрали (autovía) разрешено ехать…", en: "Unless a sign forbids it, the hard shoulders of autovías may be used by…" },
      options: [
        { es: "A peatones.", ru: "Пешеходам.", en: "Pedestrians." },
        { es: "A vehículos de tracción animal.", ru: "Гужевым повозкам.", en: "Animal-drawn vehicles." },
        { es: "A conductores de bicicletas mayores de 14 años.", ru: "Велосипедистам старше 14 лет.", en: "Cyclists over 14." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 38: велосипедисты старше 14 лет могут ехать по обочине autovía, если это не запрещено знаком; пешеходам и гужевым повозкам — нельзя.", en: "RGC art. 38: cyclists over 14 may ride on an autovía shoulder unless a sign forbids it; pedestrians and animal-drawn vehicles may not." } },
    { es: "El sistema de lavaparabrisas del vehículo, ¿necesita mantenimiento?",
      prompt: { ru: "Нужен ли уход за омывателем лобового стекла?", en: "Does the windscreen washer system need maintenance?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí; vigilar el nivel del circuito de refrigeración, de donde toma el agua.", ru: "Да; следить за уровнем охлаждающей жидкости, откуда он берёт воду.", en: "Yes; check the coolant level, where it takes its water from." },
        { es: "Sí; vigilar el nivel de líquido lavaparabrisas.", ru: "Да; следить за уровнем жидкости омывателя.", en: "Yes; check the washer fluid level." }
      ],
      answer: 2,
      explain: { ru: "У омывателя свой бачок; уровень жидкости проверяют регулярно, зимой — с незамерзающей жидкостью.", en: "The washer has its own reservoir; check the level regularly and use antifreeze fluid in winter." } },
    { es: "¿Es recomendable realizar un mantenimiento frecuente del sistema de alumbrado del vehículo?",
      prompt: { ru: "Стоит ли регулярно обслуживать систему освещения машины?", en: "Is frequent maintenance of the vehicle’s lighting advisable?" },
      options: [
        { es: "Sí, porque circular con una iluminación deficiente incrementa la fatiga visual del conductor y el riesgo de accidente.", ru: "Да, плохое освещение усиливает усталость глаз водителя и риск аварии.", en: "Yes, because poor lighting increases the driver’s eye strain and the risk of an accident." },
        { es: "Sí, por lo que es obligatorio realizar revisiones mensuales.", ru: "Да, поэтому обязательны ежемесячные проверки.", en: "Yes, which is why monthly checks are compulsory." },
        { es: "No, solamente cuando tenga que someterse a la inspección técnica reglamentaria.", ru: "Нет, только перед техосмотром.", en: "No, only before the compulsory inspection." }
      ],
      answer: 0,
      explain: { ru: "Проверяйте работу ламп, регулировку фар по высоте и чистоту рассеивателей: это и ваша видимость, и отсутствие ослепления других.", en: "Check that bulbs work, the beam height is right and the lenses are clean: it is about seeing, and not dazzling others." } },
    { es: "Si por circunstancias especialmente graves un conductor traslada en su vehículo particular a una persona enferma, ¿cómo advertirá de su presencia?",
      prompt: { ru: "Если в особо серьёзной ситуации водитель везёт больного на своей машине, как ему предупреждать о себе?", en: "If, in especially serious circumstances, a driver takes a sick person in his private car, how should he warn of his presence?" },
      options: [
        { es: "Agitando el brazo de arriba abajo con movimientos cortos y rápidos.", ru: "Махать рукой вверх-вниз короткими быстрыми движениями.", en: "Waving his arm up and down with short, quick movements." },
        { es: "Instalando en el techo de su vehículo una señal luminosa especial.", ru: "Поставив на крышу специальный маячок.", en: "Fitting a special light signal on the roof." },
        { es: "Haciendo sonar el claxon y conectando la luz de emergencia.", ru: "Сигналя и включив аварийную сигнализацию.", en: "Sounding the horn and switching on the hazard lights." }
      ],
      answer: 2,
      explain: { ru: "Частная машина не приоритетна: она может включить аварийку и подавать звуковые сигналы, но обязана соблюдать правила (RGC, ст. 69 и 110).", en: "A private car is not a priority vehicle: it may use hazard lights and the horn but must obey the rules (RGC arts. 69 and 110)." } },
    { es: "Si hay charcos de agua en la calzada…",
      prompt: { ru: "Если на дороге лужи…", en: "If there are puddles on the road…" },
      options: [
        { es: "No es aconsejable tomar ninguna precaución.", ru: "Ничего особенного делать не нужно.", en: "No precautions are needed." },
        { es: "Debe moderar la velocidad.", ru: "Нужно снизить скорость.", en: "You must moderate your speed." },
        { es: "Debe acelerar para atravesarlos lo antes posible.", ru: "Нужно ускориться, чтобы проехать их быстрее.", en: "You must speed up to get through them quickly." }
      ],
      answer: 1,
      explain: { ru: "В луже может быть яма, вода может вызвать аквапланирование и обрызгать пешеходов — скорость снижают.", en: "A puddle may hide a pothole, cause aquaplaning or splash pedestrians — slow down." } },
    { es: "Un ciclomotor ocupado por dos personas, ¿puede utilizar normalmente un carril VAO?",
      prompt: { ru: "Может ли мопед с двумя людьми обычно пользоваться полосой VAO?", en: "May a moped carrying two people normally use a VAO lane?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, porque van dos personas.", ru: "Да, ведь там два человека.", en: "Yes, because there are two people." },
        { es: "Sí, si circula por el arcén.", ru: "Да, если едет по обочине.", en: "Yes, if it rides on the shoulder." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 35.2: мопедам полосы VAO запрещены, сколько бы людей ни ехало.", en: "RGC art. 35.2: mopeds may not use VAO lanes, whatever the number of people." } },
    { es: "¿Se puede mejorar la adherencia del vehículo en una zona en la que exista hielo en la calzada?",
      prompt: { ru: "Можно ли улучшить сцепление машины в зоне со льдом на дороге?", en: "Can a vehicle’s grip be improved where there is ice on the road?" },
      options: [
        { es: "Sí, usando cadenas o neumáticos de clavos.", ru: "Да, цепями или шипованными шинами.", en: "Yes, with chains or studded tyres." },
        { es: "Solo usando cadenas pero nunca neumáticos de clavos, ya que está prohibidos.", ru: "Только цепями, шипованные шины запрещены.", en: "Only with chains, never studded tyres, which are prohibited." },
        { es: "No, está prohibido circular cuando existe hielo en la calzada.", ru: "Нет, ездить при льде запрещено.", en: "No, driving on ice is prohibited." }
      ],
      answer: 0,
      explain: { ru: "Цепи, шипованные и зимние шины разрешены и улучшают сцепление на льду и снегу.", en: "Chains, studded and winter tyres are allowed and improve grip on ice and snow." } },
    { es: "Los vehículos destinados a obras y servicios, ¿cómo advertirán de su presencia cuando estén realizando obras de reparación en la calzada?",
      prompt: { ru: "Как машины для дорожных работ и обслуживания предупреждают о себе во время ремонта проезжей части?", en: "How do works and service vehicles signal their presence while repairing the carriageway?" },
      options: [
        { es: "Mediante un dispositivo luminoso con una luz rotativa de color azul o rojo.", ru: "Вращающимся синим или красным маячком.", en: "With a rotating blue or red light." },
        { es: "Mediante un dispositivo luminoso con una o varias luces de color amarillo auto.", ru: "Одним или несколькими огнями цвета «автожёлтый».", en: "With one or more amber lights." },
        { es: "Mediante un dispositivo luminoso con una o varias luces de color azul.", ru: "Одним или несколькими синими огнями.", en: "With one or more blue lights." }
      ],
      answer: 1,
      explain: { ru: "Дорожная и сервисная техника использует жёлтый маячок V-2 (RGC, ст. 113); синие — у приоритетных машин.", en: "Works and service vehicles use the amber V-2 beacon (RGC art. 113); blue is for priority vehicles." } },
    { es: "Como norma general, ¿quién tiene la preferencia en un estrechamiento sin señalizar?",
      prompt: { ru: "Как правило, кто имеет преимущество в необозначенном сужении?", en: "As a rule, who has priority in an unsigned narrowing?" },
      options: [
        { es: "El vehículo que entre primero.", ru: "Тот, кто въехал первым.", en: "The vehicle that entered first." },
        { es: "El vehículo más pesado.", ru: "Более тяжёлая машина.", en: "The heavier vehicle." },
        { es: "Los vehículos de tracción animal.", ru: "Гужевые повозки.", en: "Animal-drawn vehicles." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 59: в необозначенном узком месте первым проезжает тот, кто въехал первым.", en: "RGC art. 59: in an unsigned narrowing the vehicle that entered first goes first." } },
    { es: "En este cambio de rasante de reducida visibilidad, ¿puede adelantar el vehículo blanco al amarillo?",
      prompt: { ru: "На этом переломе профиля с ограниченной видимостью может ли белая машина обогнать жёлтую?", en: "On this crest with reduced visibility, may the white car overtake the yellow one?" },
      options: [
        { es: "Sí, porque no hay señalización expresa que lo prohíba.", ru: "Да, ведь нет знака запрета.", en: "Yes, because no sign forbids it." },
        { es: "No, porque para ello debe ocupar parte de la calzada que corresponde al sentido contrario.", ru: "Нет, для этого нужно выехать на половину дороги для встречного движения.", en: "No, because it would have to use part of the carriageway for the opposite direction." },
        { es: "Sí, porque lo ha señalizado convenientemente.", ru: "Да, ведь она показала манёвр.", en: "Yes, because it has signalled properly." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 87: на переломах с недостаточной видимостью обгон с выездом на встречную запрещён и без знака.", en: "RGC art. 87: on crests with insufficient visibility overtaking that uses the opposite side is banned even without a sign." } },
    { es: "Cuando se toman bebidas alcohólicas…",
      prompt: { ru: "Когда выпиваешь алкоголь…", en: "When alcoholic drinks are consumed…" },
      options: [
        { es: "Aumenta el campo visual.", ru: "Поле зрения расширяется.", en: "The visual field widens." },
        { es: "Disminuye el campo visual.", ru: "Поле зрения сужается.", en: "The visual field narrows." },
        { es: "Disminuye el tiempo de reacción.", ru: "Время реакции уменьшается.", en: "Reaction time decreases." }
      ],
      answer: 1,
      explain: { ru: "Алкоголь сужает поле зрения и увеличивает время реакции.", en: "Alcohol narrows the visual field and lengthens reaction time." } },
    { es: "Si en una vía existe una línea longitudinal continua adosada a otra discontinua…",
      prompt: { ru: "Если на дороге сплошная линия идёт рядом с прерывистой…", en: "Where a solid line runs alongside a broken line…" },
      options: [
        { es: "Ningún vehículo que circule por la vía podrá atravesar ninguna de las dos líneas.", ru: "Никто не может пересекать ни одну из них.", en: "No vehicle may cross either line." },
        { es: "El carril que tiene más cercana la línea discontinua es reversible.", ru: "Полоса со стороны прерывистой — реверсивная.", en: "The lane nearer the broken line is reversible." },
        { es: "Debemos tener en cuenta solo la línea más cercana al carril por el que circulamos.", ru: "Учитывать нужно только линию, ближайшую к вашей полосе.", en: "Only the line nearest your own lane counts." }
      ],
      answer: 2,
      explain: { ru: "При двойной линии (сплошная + прерывистая) действует та, что ближе к вам: со стороны прерывистой пересекать можно, со стороны сплошной — нет.", en: "With a double line (solid + broken) the one nearer you applies: from the broken side you may cross, from the solid side you may not." } },
    { es: "En un túnel, ¿qué distancia de seguridad mínima debe mantener el conductor de un turismo con el vehículo de delante si no pretende adelantar?",
      prompt: { ru: "Какую минимальную дистанцию должен держать водитель легкового в тоннеле, если не собирается обгонять?", en: "In a tunnel, what minimum gap must a car driver keep to the vehicle ahead if not about to overtake?" },
      options: [
        { es: "100 metros o un intervalo de 4 segundos.", ru: "100 м или интервал 4 секунды.", en: "100 metres or a 4-second interval." },
        { es: "50 metros o un intervalo de 3 segundos.", ru: "50 м или интервал 3 секунды.", en: "50 metres or a 3-second interval." },
        { es: "200 metros o un intervalo de 10 segundos.", ru: "200 м или интервал 10 секунд.", en: "200 metres or a 10-second interval." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 96.6: в тоннелях — не менее 100 м или 4 секунды (для машин свыше 3 500 кг — 150 м или 6 секунд).", en: "RGC art. 96.6: in tunnels at least 100 m or 4 seconds (vehicles over 3,500 kg: 150 m or 6 seconds)." } },
    { es: "La mayoría de los vehículos disponen de un filtro en el habitáculo. ¿Debe sustituirse?",
      prompt: { ru: "В большинстве машин есть салонный фильтр. Его нужно менять?", en: "Most vehicles have a cabin filter. Should it be replaced?" },
      options: [
        { es: "Sí, sobre todo al inicio de la primavera, ya que su capacidad de retención es limitada.", ru: "Да, особенно в начале весны: его ёмкость ограничена.", en: "Yes, especially at the start of spring, since its capacity is limited." },
        { es: "Sí, cada seis meses porque es un elemento sujeto a inspección técnica periódica.", ru: "Да, каждые полгода: его проверяют на техосмотре.", en: "Yes, every six months because it is checked at the ITV." },
        { es: "No, ya que es un filtro que se limpia automáticamente.", ru: "Нет, он очищается сам.", en: "No, it cleans itself." }
      ],
      answer: 0,
      explain: { ru: "Салонный фильтр задерживает пыльцу и частицы; его проверяют и меняют, особенно перед весной.", en: "The cabin filter traps pollen and particles; check and change it, especially before spring." } },
    { es: "En una carretera cuya velocidad genérica es de 90 km/h, ¿qué velocidad se considera anormalmente reducida para un turismo?",
      prompt: { ru: "На дороге с общим лимитом 90 км/ч какая скорость считается аномально низкой для легкового?", en: "On a road with a generic limit of 90 km/h, what speed is abnormally low for a car?" },
      options: [
        { es: "La inferior a 55 km/h", ru: "Ниже 55 км/ч.", en: "Below 55 km/h." },
        { es: "La inferior a 60 km/h", ru: "Ниже 60 км/ч.", en: "Below 60 km/h." },
        { es: "La inferior a 45 km/h", ru: "Ниже 45 км/ч.", en: "Below 45 km/h." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 49.1: на дорогах кроме автострад нельзя ехать медленнее половины общего лимита для своей категории: 90 / 2 = 45 км/ч.", en: "RGC art. 49.1: on roads other than motorways you may not go below half the generic limit for your vehicle: 90 / 2 = 45 km/h." } },
    { es: "Los agentes de tráfico inmovilizan un vehículo cuando su conductor tiene una tasa de alcohol mayor de la permitida. ¿Cuándo se dejará sin efecto dicha inmovilización?",
      prompt: { ru: "Агенты обездвижили машину, так как у водителя уровень алкоголя выше допустимого. Когда обездвиживание отменят?", en: "Officers immobilise a vehicle because the driver is over the alcohol limit. When will the immobilisation be lifted?" },
      options: [
        { es: "Cuando desaparezca la causa que la motivó.", ru: "Когда исчезнет причина, которая к нему привела.", en: "When the cause that led to it disappears." },
        { es: "Cuando el conductor viaje con menores de edad.", ru: "Когда водитель едет с несовершеннолетними.", en: "When the driver is travelling with minors." },
        { es: "Cuando el agente entregue al conductor el boletín de denuncia.", ru: "Когда агент вручит водителю протокол.", en: "When the officer hands the driver the report." }
      ],
      answer: 0,
      explain: { ru: "LSV, ст. 104: обездвиживание снимают, когда исчезла его причина — например, машину может вести другой трезвый водитель с правами.", en: "LSV art. 104: immobilisation ends when its cause disappears — e.g. another sober licensed driver takes over." } },
    { es: "¿Qué indica la luz de posición de un vehículo?",
      prompt: { ru: "Что показывают габаритные огни машины?", en: "What does a vehicle’s position (side) light indicate?" },
      options: [
        { es: "Que el vehículo está circulando.", ru: "Что машина едет.", en: "That the vehicle is moving." },
        { es: "El lugar que ocupa el vehículo en la calzada y su anchura.", ru: "Место машины на дороге и её ширину.", en: "The vehicle’s position on the road and its width." },
        { es: "Que el vehículo está parado.", ru: "Что машина стоит.", en: "That the vehicle is stationary." }
      ],
      answer: 1,
      explain: { ru: "Габаритные огни обозначают положение и ширину машины для других участников движения.", en: "Position lights show other road users where the vehicle is and how wide it is." } },
    { es: "En caso de sufrir un reventón circulando por una vía a velocidad elevada, ¿es aconsejable pisar el pedal de freno con brusquedad?",
      prompt: { ru: "Если на высокой скорости лопнула шина, стоит ли резко жать на тормоз?", en: "If a tyre bursts at high speed, should you brake sharply?" },
      options: [
        { es: "Sí, para mantener con mayor facilidad la trayectoria recta del vehículo.", ru: "Да, так легче удержать машину прямо.", en: "Yes, to keep the vehicle straight more easily." },
        { es: "No; el frenado debe ser suave y progresivo.", ru: "Нет; тормозить нужно плавно и постепенно.", en: "No; braking should be smooth and progressive." },
        { es: "Solo si el reventón se produce en una de las ruedas delanteras.", ru: "Только если лопнуло переднее колесо.", en: "Only if a front tyre bursts." }
      ],
      answer: 1,
      explain: { ru: "При разрыве шины крепко держат руль, плавно сбрасывают газ и мягко тормозят; резкое торможение может развернуть машину.", en: "After a blowout hold the wheel firmly, ease off the throttle and brake gently; harsh braking can spin the car." } },
    { es: "La lluvia, ¿exige al conductor tomar más precauciones de las habituales?",
      prompt: { ru: "Требует ли дождь от водителя больше осторожности, чем обычно?", en: "Does rain require the driver to take more precautions than usual?" },
      options: [
        { es: "Sí, ya que los neumáticos pueden perder su adherencia.", ru: "Да, шины могут потерять сцепление.", en: "Yes, because the tyres may lose grip." },
        { es: "No, porque mejora la visibilidad al limpiar el parabrisas.", ru: "Нет, видимость лучше: дождь моет стекло.", en: "No, because it improves visibility by cleaning the windscreen." },
        { es: "Solo mientras caen las primeras gotas, luego no es necesario tomar precauciones.", ru: "Только пока падают первые капли.", en: "Only while the first drops fall; afterwards no precautions are needed." }
      ],
      answer: 0,
      explain: { ru: "Самое опасное — первые капли (вода с грязью), но и потом сцепление хуже, тормозной путь длиннее, видимость ниже.", en: "The first drops are the worst (water mixed with dirt), but grip stays lower, stopping distances longer and visibility poorer afterwards too." } },
    { es: "¿Qué le indica esta señal?",
      prompt: { ru: "Что означает этот знак?", en: "What does this sign tell you?" },
      options: [
        { es: "Recomienda llevar cadenas desde el punto en que se encuentra la señal.", ru: "Рекомендует цепи с места установки знака.", en: "It recommends chains from the point where the sign is." },
        { es: "Obliga a llevar cadenas desde el punto en que se encuentra la señal.", ru: "Обязывает иметь цепи с места установки знака.", en: "It requires chains from the point where the sign is." },
        { es: "Señala que la vía se encuentra cortada por fuerte nevada.", ru: "Показывает, что дорога закрыта из-за снегопада.", en: "It shows the road is closed by heavy snow." }
      ],
      answer: 1,
      explain: { ru: "R-412 «Cadenas para nieve»: дальше без цепей или иных разрешённых средств (зимние шины) ехать нельзя (Каталог, R-412).", en: "R-412 ‘Cadenas para nieve’: you may not continue without chains or other approved devices (winter tyres) (Catalogue, R-412)." },
      sign: "R-412" },
    { es: "¿Podrá utilizar el carril VAO un turismo ocupado por cuatro personas si lleva enganchado un remolque ligero?",
      prompt: { ru: "Может ли легковой автомобиль с четырьмя людьми и лёгким прицепом ехать по полосе VAO?", en: "May a car with four people towing a light trailer use the VAO lane?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Solo si el carril no está ocupado.", ru: "Только если полоса не занята.", en: "Only if the lane is not busy." },
        { es: "Sí.", ru: "Да.", en: "Yes." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 35.2: на полосах VAO запрещены автопоезда, в том числе легковые с прицепом.", en: "RGC art. 35.2: vehicle combinations, cars with trailers included, may not use VAO lanes." } },
    { es: "Si se encuentra detenido ante una señal de stop, ¿puede utilizar su teléfono móvil?",
      prompt: { ru: "Если вы стоите перед знаком «стоп», можно ли пользоваться мобильным?", en: "If you have stopped at a stop sign, may you use your mobile phone?" },
      options: [
        { es: "No, de ninguna manera.", ru: "Нет, ни в коем случае.", en: "No, in no way." },
        { es: "Solo con un dispositivo de manos libres y sin utilizar cascos o auriculares.", ru: "Только через систему «свободные руки», без наушников.", en: "Only with a hands-free device and without headsets or earphones." },
        { es: "Sí, ya que el vehículo está detenido.", ru: "Да, ведь машина стоит.", en: "Yes, because the vehicle is stationary." }
      ],
      answer: 1,
      explain: { ru: "Остановка у знака — часть движения; разговаривать можно только без рук и без наушников (RGC, ст. 18.2).", en: "Waiting at a stop sign is still driving; only hands-free without earphones is allowed (RGC art. 18.2)." } },
    { es: "En un vehículo de menos de 5 metros de longitud destinado al transporte de mercancías, ¿cuánto podrá sobresalir una carga de longitud indivisible por su parte delantera?",
      prompt: { ru: "У грузовой машины длиной меньше 5 м насколько неделимый по длине груз может выступать спереди?", en: "On a goods vehicle under 5 metres long, how far may an indivisible long load stick out at the front?" },
      options: [
        { es: "Un tercio de la longitud del vehículo.", ru: "На треть длины машины.", en: "One third of the vehicle’s length." },
        { es: "Un 15% de la longitud del vehículo.", ru: "На 15 % длины машины.", en: "15 % of the vehicle’s length." },
        { es: "Nada; solo podrá sobresalir por su parte trasera.", ru: "Нисколько; только сзади.", en: "Not at all; only at the rear." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 15.2: у грузовиков длиной до 5 м неделимый длинный груз может выступать на треть длины машины спереди и сзади.", en: "RGC art. 15.2: on goods vehicles up to 5 m long, an indivisible long load may stick out one third of the vehicle’s length at front and rear." } },
    { es: "Circulando por un paso inferior, su vehículo sufre una avería que no le impide continuar la marcha; ¿qué debe hacer?",
      prompt: { ru: "В подземном проезде у машины случилась поломка, но ехать она может. Что делать?", en: "In an underpass your vehicle develops a fault that does not stop it moving. What should you do?" },
      options: [
        { es: "Apagar el motor y conectar las luces de emergencia.", ru: "Заглушить двигатель и включить аварийку.", en: "Switch off the engine and turn on the hazard lights." },
        { es: "Detener el vehículo, salir de él y dirigirse a la salida del paso inferior.", ru: "Остановиться, выйти и идти к выходу.", en: "Stop, get out and walk to the exit." },
        { es: "Continuar circulando hasta salir del paso inferior, siempre que sea posible.", ru: "По возможности продолжать ехать до выхода.", en: "Keep driving until you are out of the underpass, if possible." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 97.3.f: если поломка позволяет ехать, продолжают движение до выхода из тоннеля или подземного проезда, а если нельзя — до аварийной зоны.", en: "RGC art. 97.3.f: if the vehicle can still move, keep going to the exit of the tunnel or underpass, or else to an emergency bay." } },
    { es: "El conductor de un turismo debe circular con el alumbrado de su vehículo encendido...",
      prompt: { ru: "Водитель легкового должен ехать с включённым освещением…", en: "A car driver must drive with the lights on…" },
      options: [
        { es: "entre la puesta y la salida del sol.", ru: "между закатом и восходом солнца.", en: "between sunset and sunrise." },
        { es: "en los puentes y pasos a nivel.", ru: "на мостах и железнодорожных переездах.", en: "on bridges and level crossings." },
        { es: "cuando circule por un carril para vehículos de alta ocupación (VAO).", ru: "когда едет по полосе VAO.", en: "when using a high-occupancy (VAO) lane." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 98–99: освещение обязательно в тёмное время, а также в тоннелях и при плохой видимости.", en: "RGC arts. 98–99: lights are compulsory at night, and also in tunnels and in poor visibility." } },
    { es: "Si la presión de inflado en los neumáticos es inferior a la recomendada, ¿aumenta el consumo de combustible?",
      prompt: { ru: "Если давление в шинах ниже рекомендованного, растёт ли расход топлива?", en: "If tyre pressure is below the recommended level, does fuel consumption rise?" },
      options: [
        { es: "Sí, porque existe mayor rozamiento con el pavimento.", ru: "Да, из-за большего сопротивления качению.", en: "Yes, because there is more friction with the road." },
        { es: "Sí, y además el desgaste es mayor en el centro de la banda de rodamiento.", ru: "Да, и ещё сильнее изнашивается центр протектора.", en: "Yes, and wear is also greater in the centre of the tread." },
        { es: "No, siempre que estén compensadas las presiones entre todos los neumáticos del vehículo.", ru: "Нет, если давление одинаково во всех шинах.", en: "No, as long as the pressures are equal in all tyres." }
      ],
      answer: 0,
      explain: { ru: "Недокачанная шина сильнее деформируется: растут расход и износ по краям (не в центре), повышается риск разрыва.", en: "An underinflated tyre flexes more: consumption and wear at the shoulders (not the centre) rise, as does the risk of a blowout." } },
    { es: "En la intersección de una vía pavimentada con otra sin pavimentar, ¿qué vehículos tienen preferencia de paso?",
      prompt: { ru: "На пересечении асфальтированной дороги с грунтовой у кого преимущество?", en: "At a junction between a paved road and an unpaved one, which vehicles have priority?" },
      options: [
        { es: "Los que circulen por la vía más ancha.", ru: "У тех, кто едет по более широкой дороге.", en: "Those on the wider road." },
        { es: "Los que se aproximen por la derecha.", ru: "У тех, кто приближается справа.", en: "Those approaching from the right." },
        { es: "Los que circulen por la vía pavimentada.", ru: "У тех, кто едет по асфальтированной.", en: "Those on the paved road." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 57.1.b: без знаков машины на асфальтированной дороге имеют преимущество перед выезжающими с грунтовой.", en: "RGC art. 57.1.b: without signs, vehicles on the paved road have priority over those coming from an unpaved one." } },
    { es: "¿En qué caso no le está permitido adelantar detrás de otro vehículo que ya está adelantando?",
      prompt: { ru: "В каком случае нельзя обгонять вслед за машиной, которая уже обгоняет?", en: "When are you not allowed to overtake behind another vehicle that is already overtaking?" },
      options: [
        { es: "Nunca está permitido adelantar cuando otro vehículo ya esté adelantando.", ru: "Никогда нельзя обгонять, когда кто-то уже обгоняет.", en: "It is never allowed when another vehicle is already overtaking." },
        { es: "Cuando circule por una glorieta", ru: "На кольцевой развязке.", en: "On a roundabout." },
        { es: "Cuando no tenga visibilidad suficiente de la parte delantera de la vía.", ru: "Когда не видно достаточно дорогу впереди.", en: "When you do not have enough visibility of the road ahead." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 84: обгонять вслед за обгоняющим можно, только если хорошо видно дорогу впереди и места хватает.", en: "RGC art. 84: you may overtake behind another overtaking vehicle only if you can see enough of the road ahead and there is room." } },
    { es: "La señal triangular indica...",
      prompt: { ru: "Треугольный знак означает…", en: "The triangular sign indicates…" },
      options: [
        { es: "que hay un escalón lateral en la calzada.", ru: "боковой уступ на дороге.", en: "a side drop on the carriageway." },
        { es: "que el pavimento de la calzada puede estar muy deslizante.", ru: "что покрытие может быть очень скользким.", en: "that the road surface may be very slippery." },
        { es: "que hay un tramo de curvas peligrosas.", ru: "участок опасных поворотов.", en: "a series of dangerous bends." }
      ],
      answer: 1,
      explain: { ru: "P-19 «Pavimento deslizante» — скользкое покрытие (Каталог, P-19).", en: "P-19 ‘Pavimento deslizante’ — slippery surface (Catalogue, P-19)." },
      sign: "P-19" },
    { es: "¿Qué debe hacer siempre que se acerque a un autobús del que bajan niños?",
      prompt: { ru: "Что нужно делать, приближаясь к автобусу, из которого выходят дети?", en: "What must you always do when approaching a bus that children are getting off?" },
      options: [
        { es: "Detenerse hasta que el autobús reanude su marcha.", ru: "Остановиться и ждать, пока автобус тронется.", en: "Stop until the bus moves off." },
        { es: "Tocar el claxon repetidamente para advertir de su presencia.", ru: "Часто сигналить, предупреждая о себе.", en: "Sound the horn repeatedly to warn of your presence." },
        { es: "Moderar la velocidad, e incluso detenerse si fuera necesario.", ru: "Снизить скорость и при необходимости остановиться.", en: "Slow down, and even stop if necessary." }
      ],
      answer: 2,
      explain: { ru: "Дети могут внезапно выбежать из-за автобуса: снижают скорость, при необходимости останавливаются (RGC, ст. 46).", en: "Children may dash out from behind the bus: slow down and stop if needed (RGC art. 46)." } },
    { es: "La luz antiniebla trasera deberá utilizarse siempre que...",
      prompt: { ru: "Задний противотуманный фонарь нужно включать, когда…", en: "The rear fog light must be used whenever…" },
      options: [
        { es: "circule por un puerto de montaña.", ru: "едете по горному перевалу.", en: "you drive over a mountain pass." },
        { es: "circule por un túnel.", ru: "едете по тоннелю.", en: "you drive through a tunnel." },
        { es: "circule con fuerte nevada.", ru: "едете в сильный снегопад.", en: "you drive in heavy snow." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 106.2: задний противотуманный — при густом тумане, очень сильном дожде, сильном снегопаде, плотном дыме или пыли.", en: "RGC art. 106.2: the rear fog light is for thick fog, very heavy rain, heavy snow, dense smoke or dust." } },
    { es: "Para circular con un turismo, ¿qué documentos se necesitan en todo caso, además del permiso de conducción?",
      prompt: { ru: "Какие документы, кроме водительских прав, нужны во всех случаях, чтобы ездить на легковом автомобиле?", en: "To drive a car, which documents are needed in every case besides the driving licence?" },
      options: [
        { es: "El Impuesto de Vehículos de Tracción Mecánica (Impuesto Municipal de Circulación) del año en curso.", ru: "Квитанция налога на транспорт текущего года.", en: "The current year’s municipal vehicle tax receipt." },
        { es: "El Permiso de Circulación solamente.", ru: "Только свидетельство о регистрации (Permiso de Circulación).", en: "Only the registration certificate (Permiso de Circulación)." },
        { es: "El Permiso de Circulación y la Tarjeta de Inspección Técnica.", ru: "Свидетельство о регистрации и карточка техосмотра (Tarjeta ITV).", en: "The registration certificate and the technical inspection card." }
      ],
      answer: 2,
      explain: { ru: "Свидетельство о регистрации и карточку ITV с действующим осмотром нужно иметь при себе (сейчас их можно показать и в приложении miDGT); налоговая квитанция не нужна.", en: "You must carry the registration certificate and the ITV card with a valid inspection (they can now also be shown in the miDGT app); the tax receipt is not required." } },
    { es: "Si mientras circula se le pincha una rueda, ¿qué debe hacer?",
      prompt: { ru: "Если на ходу прокололось колесо, что нужно делать?", en: "If you get a puncture while driving, what must you do?" },
      options: [
        { es: "Continuar circulando hasta llegar al taller más próximo.", ru: "Ехать до ближайшей мастерской.", en: "Keep driving to the nearest garage." },
        { es: "Inmovilizar rápidamente el vehículo fuera de la calzada o en lugar seguro.", ru: "Быстро остановить машину вне проезжей части или в безопасном месте.", en: "Quickly bring the vehicle to a halt off the carriageway or in a safe place." },
        { es: "Detener el vehículo rápidamente en cualquier lugar y abandonarlo.", ru: "Быстро остановиться где угодно и бросить машину.", en: "Stop quickly anywhere and abandon the vehicle." }
      ],
      answer: 1,
      explain: { ru: "Пробитое колесо ухудшает управляемость и может разрушить шину; плавно съезжают в безопасное место, обозначив машину (RGC, ст. 130).", en: "A punctured tyre impairs handling and can be destroyed; pull off gently to a safe place and signal the vehicle (RGC art. 130)." } },
    { es: "Como norma general, en un tramo de vía estrecho de gran pendiente debe ceder el paso...",
      prompt: { ru: "Как правило, на узком участке с крутым уклоном уступить должен…", en: "As a rule, on a narrow, steep stretch of road, who must give way?" },
      options: [
        { es: "el vehículo que sube.", ru: "тот, кто едет вверх.", en: "the vehicle going uphill." },
        { es: "el vehículo que baja.", ru: "тот, кто едет вниз.", en: "the vehicle going downhill." },
        { es: "el vehículo más ligero.", ru: "более лёгкая машина.", en: "the lighter vehicle." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 62: на крутом узком участке преимущество у едущего вверх (ему труднее тронуться), если только тот, кто спускается, не может ближе уйти в карман.", en: "RGC art. 62: on a steep narrow stretch the vehicle going uphill has priority (it is harder to restart), unless the one going down has a passing place nearer." } },
    { es: "Durante la conducción, la fatiga...",
      prompt: { ru: "Во время вождения усталость…", en: "While driving, fatigue…" },
      options: [
        { es: "hace que aumenten los errores de forma considerable.", ru: "значительно увеличивает число ошибок.", en: "considerably increases the number of mistakes." },
        { es: "facilita la percepción de las señales de tráfico.", ru: "облегчает восприятие знаков.", en: "makes it easier to notice road signs." },
        { es: "hace que disminuyan los errores de forma considerable.", ru: "значительно уменьшает число ошибок.", en: "considerably reduces the number of mistakes." }
      ],
      answer: 0,
      explain: { ru: "Усталость замедляет реакцию и ухудшает внимание: ошибок становится гораздо больше.", en: "Fatigue slows reactions and dulls attention: far more mistakes are made." } },
    { es: "Un semáforo con línea blanca horizontal sobre fondo negro...",
      prompt: { ru: "Светофор с белой горизонтальной полосой на чёрном фоне…", en: "A traffic light showing a white horizontal bar on a black background…" },
      options: [
        { es: "permite el paso a autobuses y tranvías.", ru: "разрешает проезд автобусам и трамваям.", en: "allows buses and trams through." },
        { es: "prohíbe el paso a autobuses de líneas regulares y tranvías.", ru: "запрещает проезд автобусам регулярных линий и трамваям.", en: "prohibits regular-line buses and trams from proceeding." },
        { es: "permite girar a la derecha y a la izquierda a autobuses y tranvías.", ru: "разрешает автобусам и трамваям поворачивать направо и налево.", en: "allows buses and trams to turn right and left." }
      ],
      answer: 1,
      explain: { ru: "Особые светофоры для автобусов регулярных линий и трамваев: белая горизонтальная полоса означает «стоп» (RGC, ст. 146).", en: "Special signals for regular-line buses and trams: a white horizontal bar means stop (RGC art. 146)." } },
    { es: "La línea de borde de la calzada es discontinua; ¿está permitido estacionar en la parte transitable del arcén?",
      prompt: { ru: "Линия края проезжей части прерывистая. Можно ли стоять на пригодной для движения части обочины?", en: "The edge line is broken; may you park on the usable part of the shoulder?" },
      options: [
        { es: "Sí, porque la línea es discontinua.", ru: "Да, ведь линия прерывистая.", en: "Yes, because the line is broken." },
        { es: "No, está prohibido.", ru: "Нет, это запрещено.", en: "No, it is forbidden." },
        { es: "Solo para cargar o descargar mercancías.", ru: "Только для погрузки или разгрузки.", en: "Only to load or unload goods." }
      ],
      answer: 1,
      explain: { ru: "За городом стоят вне проезжей части, оставляя свободной пригодную часть обочины (RGC, ст. 90); вид линии края на это не влияет.", en: "Outside towns you park off the carriageway, leaving the usable part of the shoulder clear (RGC art. 90); the type of edge line makes no difference." } },
    { es: "¿Puede perder el control del vehículo si circula con los amortiguadores en mal estado?",
      prompt: { ru: "Можно ли потерять управление, если амортизаторы неисправны?", en: "Can you lose control of the vehicle with worn shock absorbers?" },
      options: [
        { es: "No, sin embargo, los cambios de marcha se realizarán con mayor dificultad debido a las oscilaciones del vehículo.", ru: "Нет, но переключать передачи будет труднее из-за раскачки.", en: "No, but gear changes will be harder because of the swaying." },
        { es: "Sí, porque la distancia de frenado disminuirá, especialmente con el firme irregular o mojado.", ru: "Да, тормозной путь уменьшится, особенно на неровной или мокрой дороге.", en: "Yes, because braking distance will decrease, especially on rough or wet roads." },
        { es: "Sí, porque el vehículo puede experimentar una inclinación excesiva al tomar las curvas.", ru: "Да, машина может сильно крениться в поворотах.", en: "Yes, because the vehicle may lean excessively in bends." }
      ],
      answer: 2,
      explain: { ru: "Плохие амортизаторы ухудшают контакт шин с дорогой: крен в поворотах, длиннее тормозной путь, раньше аквапланирование.", en: "Worn shocks reduce tyre contact: excessive roll in bends, longer stopping distance, earlier aquaplaning." } },
    { es: "Si observa que un vehículo quiere incorporarse por el carril de aceleración, ¿qué debe hacer?",
      prompt: { ru: "Если вы видите, что машина хочет въехать с полосы разгона, что нужно делать?", en: "If you see a vehicle trying to join from the acceleration lane, what should you do?" },
      options: [
        { es: "Nada, porque tengo preferencia.", ru: "Ничего, у меня преимущество.", en: "Nothing, I have priority." },
        { es: "Cederle el paso", ru: "Уступить ей дорогу.", en: "Give way to it." },
        { es: "Facilitarle la incorporación en la medida de lo posible.", ru: "По возможности облегчить ей въезд.", en: "Make it easier for it to join, as far as possible." }
      ],
      answer: 2,
      explain: { ru: "Преимущество у вас, но нужно по возможности облегчить въезд — например, перестроиться влево или чуть изменить скорость (RGC, ст. 72).", en: "You have priority, but should help it merge where possible — e.g. move left or adjust speed (RGC art. 72)." } },
    { es: "No deberá iniciar un adelantamiento sin comprobar previamente que...",
      prompt: { ru: "Нельзя начинать обгон, не убедившись, что…", en: "You must not start overtaking without first making sure that…" },
      options: [
        { es: "existe espacio suficiente para volver al carril derecho cuando termine la maniobra.", ru: "есть место, чтобы вернуться вправо после манёвра.", en: "there is room to return to the right lane when you finish." },
        { es: "los vehículos que circulan detrás mantienen la distancia de seguridad.", ru: "едущие сзади держат дистанцию.", en: "the vehicles behind are keeping a safe distance." },
        { es: "el vehículo de delante reduce su velocidad para facilitar la maniobra.", ru: "машина впереди снижает скорость, чтобы помочь.", en: "the vehicle ahead slows down to help." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 84: перед обгоном проверяют, что впереди достаточно места, чтобы вернуться, не подрезая обогнанного.", en: "RGC art. 84: before overtaking check there is enough room ahead to return without cutting in." } },
    { es: "¿Cuál de las siguientes es una de las principales funciones del airbag en caso de accidente?",
      prompt: { ru: "Какая из функций подушки безопасности — одна из главных при аварии?", en: "Which of these is one of the main functions of the airbag in an accident?" },
      options: [
        { es: "Evitar el efecto submarino.", ru: "Предотвращать «эффект подныривания».", en: "To prevent the submarine effect." },
        { es: "Reducir el riesgo de heridas en la cara producidas por fragmentos de cristal procedentes del parabrisas.", ru: "Снижать риск порезов лица осколками лобового стекла.", en: "To reduce the risk of facial cuts from windscreen glass fragments." },
        { es: "Evitar que la columna de dirección golpee al conductor.", ru: "Не давать рулевой колонке ударить водителя.", en: "To stop the steering column hitting the driver." }
      ],
      answer: 1,
      explain: { ru: "Подушка смягчает удар головы и защищает лицо, в том числе от осколков; от «подныривания» защищает правильно надетый ремень.", en: "The airbag cushions the head and shields the face, including from glass; the correctly worn belt is what prevents submarining." } },
    { es: "¿En qué tipo de vías se debe mantener la distancia de seguridad?",
      prompt: { ru: "На каких дорогах нужно соблюдать безопасную дистанцию?", en: "On which roads must the safety distance be kept?" },
      options: [
        { es: "Solo en calzadas con dos sentidos de circulación.", ru: "Только на дорогах с двусторонним движением.", en: "Only on two-way carriageways." },
        { es: "Solo en calzadas en mal estado.", ru: "Только на дорогах в плохом состоянии.", en: "Only on roads in poor condition." },
        { es: "En todo tipo de vías.", ru: "На любых.", en: "On all roads." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 54: дистанцию, позволяющую остановиться, держат везде.", en: "RGC art. 54: a gap that lets you stop is required on every road." } },
    { es: "Como norma general, en vías de tres calzadas se utilizarán las de los laterales...",
      prompt: { ru: "Как правило, на дорогах с тремя проезжими частями боковые используются…", en: "As a rule, on roads with three carriageways the side ones are used…" },
      options: [
        { es: "En sentido único, si bien se podrá habilitar algún carril para el sentido contrario.", ru: "в одном направлении, хотя может быть открыта полоса и во встречном.", en: "one-way, although a lane may be opened for the opposite direction." },
        { es: "En ambos sentidos.", ru: "в обоих направлениях.", en: "in both directions." },
        { es: "En sentido único, siempre que el tráfico sea fluido.", ru: "в одном направлении, если движение свободное.", en: "one-way, as long as traffic flows." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 34: боковые проезжие части — одностороннего движения, но администрация может открыть полосу во встречном направлении.", en: "RGC art. 34: the side carriageways are one-way, though the authority may open a lane in the other direction." } },
    { es: "Cuando se aprecia fuerte viento lateral...",
      prompt: { ru: "При сильном боковом ветре…", en: "When there is a strong crosswind…" },
      options: [
        { es: "Se deberá reducir la velocidad y corregir las ligeras desviaciones de la dirección.", ru: "Нужно снизить скорость и исправлять небольшие отклонения рулём.", en: "You must slow down and correct slight changes of direction." },
        { es: "Se deberá aumentar la velocidad para compensar la fuerza del viento.", ru: "Нужно ускориться, чтобы компенсировать ветер.", en: "You must speed up to counter the wind." },
        { es: "Disminuye el riesgo de accidente, ya que el viento evita que el vehículo se desvíe de su trayectoria.", ru: "Риск ниже: ветер не даёт машине сбиться.", en: "The risk is lower because the wind keeps the car on course." }
      ],
      answer: 0,
      explain: { ru: "Сбрасывают скорость, крепко держат руль и мягко компенсируют снос; особенно осторожно — на мостах, выездах из тоннелей и при обгоне грузовиков.", en: "Slow down, hold the wheel firmly and gently correct drift; take special care on bridges, tunnel exits and when passing lorries." } },
    { es: "¿Cuándo se deben cambiar las escobillas del limpiaparabrisas?",
      prompt: { ru: "Когда нужно менять щётки стеклоочистителя?", en: "When should the windscreen wiper blades be changed?" },
      options: [
        { es: "Cada dos años obligatoriamente.", ru: "Обязательно каждые два года.", en: "Every two years, compulsorily." },
        { es: "Cuando las gomas estén dañadas.", ru: "Когда резина повреждена.", en: "When the rubber is damaged." },
        { es: "Siempre antes de pasar la inspección técnica del vehículo.", ru: "Всегда перед техосмотром.", en: "Always before the ITV." }
      ],
      answer: 1,
      explain: { ru: "Щётки меняют, когда резина затвердела, потрескалась или оставляет полосы.", en: "Change the blades when the rubber is hard, cracked or smears." } },
    { es: "Esta señal, ¿prohíbe el cambio de dirección en la próxima intersección?",
      prompt: { ru: "Запрещает ли этот знак менять направление на ближайшем перекрёстке?", en: "Does this sign forbid changing direction at the next junction?" },
      options: [
        { es: "Sí, ya que debo seguir la dirección y sentido que señala la flecha.", ru: "Да, нужно ехать в направлении стрелки.", en: "Yes, because I must follow the direction shown by the arrow." },
        { es: "No, solo prohíbe el cambio de sentido.", ru: "Нет, он запрещает только разворот.", en: "No, it only forbids U-turns." },
        { es: "No, solo me indica que la vía es de sentido único.", ru: "Нет, он лишь показывает одностороннее движение.", en: "No, it only shows a one-way road." }
      ],
      answer: 0,
      explain: { ru: "R-400a «Sentido obligatorio» обязывает ехать в направлении стрелки (Каталог, R-400a).", en: "R-400a ‘Sentido obligatorio’ requires you to go in the direction of the arrow (Catalogue, R-400a)." },
      sign: "R-400a" },
    { es: "¿Tiene prioridad de paso una ambulancia que circule con las señales luminosas apagadas?",
      prompt: { ru: "Есть ли преимущество у скорой с выключенными световыми сигналами?", en: "Does an ambulance with its lights switched off have priority?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Solo tiene preferencia en las vías urbanas.", ru: "Только в городе.", en: "Only on urban roads." },
        { es: "Sí, tiene preferencia en todo tipo de vías.", ru: "Да, на любых дорогах.", en: "Yes, on all roads." }
      ],
      answer: 0,
      explain: { ru: "Приоритет есть только при срочном вызове с включёнными спецсигналами (RGC, ст. 67–68).", en: "Priority applies only on an urgent call with the special signals on (RGC arts. 67–68)." } },
    { es: "Un vehículo va a incorporarse a la circulación; ¿cuándo debe ceder el paso?",
      prompt: { ru: "Машина собирается начать движение (выехать в поток). Когда она должна уступить?", en: "A vehicle is about to join the traffic. When must it give way?" },
      options: [
        { es: "Cuando entre en el carril de circulación desde el lado izquierdo, solamente.", ru: "Только если выезжает в полосу слева.", en: "Only when entering the lane from the left." },
        { es: "Siempre.", ru: "Всегда.", en: "Always." },
        { es: "Cuando entre en el carril de circulación desde el lado derecho, solamente.", ru: "Только если выезжает в полосу справа.", en: "Only when entering the lane from the right." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 72: начинающий движение после остановки или стоянки всегда уступает тем, кто едет.", en: "RGC art. 72: a vehicle moving off from a stop or parking always gives way to traffic already moving." } },
    { es: "Circula con su turismo por esta carretera convencional; ¿cuál es la velocidad máxima permitida?",
      prompt: { ru: "Вы едете на легковом по этой обычной дороге. Какая максимальная скорость?", en: "You are driving a car on this conventional road; what is the maximum speed?" },
      options: [
        { es: "90 km/h", ru: "90 км/ч", en: "90 km/h" },
        { es: "100 km/h", ru: "100 км/ч", en: "100 km/h" },
        { es: "80 km/h", ru: "80 км/ч", en: "80 km/h" }
      ],
      answer: 0,
      explain: { ru: "С 2019 года на обычных дорогах легковым и мотоциклам — 90 км/ч (RGC, ст. 48.1.a).", en: "Since 2019 cars and motorcycles are limited to 90 km/h on conventional roads (RGC art. 48.1.a)." } },
    { es: "¿Por qué es aconsejable cambiar periódicamente el aceite lubricante?",
      prompt: { ru: "Почему стоит регулярно менять моторное масло?", en: "Why is it advisable to change the engine oil periodically?" },
      options: [
        { es: "Porque, estando en buenas condiciones, mantiene el buen estado del motor más tiempo y el desgaste de las piezas es menor.", ru: "Хорошее масло дольше сохраняет двигатель и уменьшает износ деталей.", en: "Because good oil keeps the engine in good shape longer and reduces wear." },
        { es: "Porque el aceite con el tiempo se vuelve más viscoso y no fluye correctamente entre las piezas.", ru: "Со временем масло густеет и плохо проходит между деталями.", en: "Because oil becomes more viscous over time and does not flow properly." },
        { es: "Porque el aceite con el uso y pasado un tiempo pierde excesiva cantidad de volumen y hay que reponerlo.", ru: "Со временем масла становится сильно меньше, и его доливают.", en: "Because oil loses a lot of volume with use and must be topped up." }
      ],
      answer: 0,
      explain: { ru: "Масло окисляется и теряет свойства; его меняют по графику производителя и регулярно проверяют уровень.", en: "Oil oxidises and loses its properties; change it per the manufacturer’s schedule and check the level regularly." } },
    { es: "Circula por una travesía; ya se ha puesto el sol y la vía está suficientemente iluminada. ¿Qué alumbrado debe encender?",
      prompt: { ru: "Вы едете через travesía; солнце уже село, улица хорошо освещена. Какой свет включить?", en: "You are driving through a travesía after sunset and the road is well lit. Which lights must you use?" },
      options: [
        { es: "Ninguno, ya que la vía está suficientemente iluminada.", ru: "Никакой: улица хорошо освещена.", en: "None, since the road is well lit." },
        { es: "Las luces de posición y las de corto alcance o de cruce.", ru: "Габаритные и ближний свет.", en: "The side lights and the dipped beam." },
        { es: "Solamente las luces de posición.", ru: "Только габаритные.", en: "Only the side lights." }
      ],
      answer: 1,
      explain: { ru: "Ночью — габариты плюс ближний свет, даже на освещённой улице; дальний там запрещён (RGC, ст. 99–100).", en: "At night — side lights plus dipped beam, even on a lit street; main beam is not allowed there (RGC arts. 99–100)." } },
    { es: "Cuando el semáforo se ponga verde, ¿qué debe hacer?",
      prompt: { ru: "Когда на светофоре загорится зелёный, что нужно делать?", en: "When the traffic light turns green, what must you do?" },
      options: [
        { es: "Obedecer la señal de stop.", ru: "Подчиниться знаку «стоп».", en: "Obey the stop sign." },
        { es: "Obedecer al semáforo, que tiene prioridad sobre la señal de stop.", ru: "Подчиниться светофору: он главнее знака «стоп».", en: "Obey the traffic light, which takes precedence over the stop sign." },
        { es: "Obedecer al semáforo, pero debo ceder el paso.", ru: "Подчиниться светофору, но уступить дорогу.", en: "Obey the traffic light, but give way." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 133: светофор главнее вертикальных знаков; пока он работает, знак STOP не действует.", en: "RGC art. 133: traffic lights override vertical signs; while it works the STOP sign does not apply." } },
    { es: "Si su vehículo está provisto de caja de cambios manual, en una calle con pendiente ascendente, ¿cómo debe estacionar?",
      prompt: { ru: "Если у машины механическая коробка, как ставить её на улице с подъёмом?", en: "With a manual gearbox, how should you park on an uphill street?" },
      options: [
        { es: "Poniendo el freno de estacionamiento y la primera velocidad.", ru: "Стояночный тормоз и первая передача.", en: "With the parking brake and first gear." },
        { es: "Poniendo el freno de estacionamiento y la marcha atrás.", ru: "Стояночный тормоз и задняя передача.", en: "With the parking brake and reverse." },
        { es: "Basta con poner el freno de estacionamiento.", ru: "Достаточно стояночного тормоза.", en: "The parking brake alone is enough." }
      ],
      answer: 0,
      explain: { ru: "На подъёме — первая передача и стояночный тормоз; на спуске — задняя (RGC, ст. 92).", en: "Uphill: first gear and the parking brake; downhill: reverse (RGC art. 92)." } },
    { es: "En las calzadas con dos sentidos y tres carriles, cuando quiera girar a la izquierda, ¿dónde debe colocarse?",
      prompt: { ru: "На проезжей части с двусторонним движением и тремя полосами где встать, чтобы повернуть налево?", en: "On a two-way carriageway with three lanes, where must you position yourself to turn left?" },
      options: [
        { es: "En el carril central.", ru: "На средней полосе.", en: "In the centre lane." },
        { es: "En el arcén derecho.", ru: "На правой обочине.", en: "On the right shoulder." },
        { es: "En el carril izquierdo.", ru: "На левой полосе.", en: "In the left lane." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 75: на двусторонней дороге с тремя полосами для поворота налево встают в среднюю полосу; левая — для встречного движения.", en: "RGC art. 75: on a two-way three-lane road, move into the centre lane to turn left; the left lane belongs to oncoming traffic." } },
    { es: "Para adelantar al grupo de ciclistas, el vehículo rebasa la línea continua y ocupa el carril destinado a la circulación en sentido contrario; ¿es correcto su comportamiento?",
      prompt: { ru: "Чтобы обогнать группу велосипедистов, машина пересекает сплошную и выезжает на встречную полосу. Правильно ли это?", en: "To overtake the group of cyclists, the vehicle crosses the solid line and uses the opposite lane; is this correct?" },
      options: [
        { es: "Sí, y debe guardar una separación lateral de, al menos, 1,5 metros", ru: "Да, и нужно оставить боковой интервал не менее 1,5 м.", en: "Yes, and it must leave a lateral gap of at least 1.5 metres." },
        { es: "Solo es correcto si no existe una señal vertical que prohíba adelantar.", ru: "Правильно, только если нет знака, запрещающего обгон.", en: "It is only correct if there is no vertical sign forbidding overtaking." },
        { es: "No, porque en este tramo de vía está prohibido el adelantamiento.", ru: "Нет, на этом участке обгон запрещён.", en: "No, because overtaking is forbidden on this stretch." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 88.2: велосипедистов можно обогнать и там, где обгон запрещён, если это безопасно; интервал не менее 1,5 м, а за городом скорость минимум на 20 км/ч ниже лимита (ст. 85.4, с 2022 года). Группа велосипедистов считается одной единицей.", en: "RGC art. 88.2: cyclists may be overtaken even where overtaking is banned, if safe; leave at least 1.5 m and, outside towns, slow to at least 20 km/h below the limit (art. 85.4, since 2022). A group of cyclists counts as a single unit." } },
    { es: "Si sufre una avería y tiene que salir de su vehículo, ¿en cuál de los siguientes casos debe utilizar el chaleco reflectante?",
      prompt: { ru: "Если у вас поломка и нужно выйти из машины, в каком случае обязательно надевать светоотражающий жилет?", en: "If you break down and must leave the vehicle, in which case must you wear the reflective vest?" },
      options: [
        { es: "Al ocupar el arcén en vías interurbanas.", ru: "Выходя на обочину загородной дороги.", en: "When occupying the shoulder of an interurban road." },
        { es: "Solamente al ocupar la calzada o el arcén en autopistas o autovías.", ru: "Только на проезжей части или обочине автострад и автомагистралей.", en: "Only on the carriageway or shoulder of motorways." },
        { es: "Al ocupar la calzada en vías urbanas.", ru: "На проезжей части городских улиц.", en: "On the carriageway of urban roads." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 118.4: жилет обязателен, выходя на проезжую часть или обочину любой загородной дороги.", en: "RGC art. 118.4: the vest is compulsory when you step onto the carriageway or shoulder of any interurban road." } },
    { es: "Si entra en una curva a la izquierda a velocidad excesiva, la fuerza centrífuga, ¿puede afectar a la trayectoria del vehículo?",
      prompt: { ru: "Если вы входите в левый поворот на слишком высокой скорости, может ли центробежная сила изменить траекторию?", en: "If you enter a left-hand bend too fast, can centrifugal force affect the vehicle’s path?" },
      options: [
        { es: "Sí; se desplazará hacia la izquierda de la calzada.", ru: "Да; машину понесёт в левую сторону.", en: "Yes; it will move to the left of the carriageway." },
        { es: "Sí; se desplazará hacia la derecha de la calzada.", ru: "Да; машину понесёт в правую сторону.", en: "Yes; it will move to the right of the carriageway." },
        { es: "No; la fuerza centrífuga no afecta a la trayectoria del vehículo.", ru: "Нет; центробежная сила не влияет на траекторию.", en: "No; centrifugal force does not affect the path." }
      ],
      answer: 1,
      explain: { ru: "Центробежная сила выталкивает машину наружу поворота; в левом повороте — вправо, к краю дороги.", en: "Centrifugal force pushes the car to the outside of the bend; in a left-hand bend, to the right, towards the edge." } },
    { es: "¿Cómo se denominan los costes de pérdida de vidas, de capacidad productiva y el sufrimiento físico y psicológico que tienen lugar como consecuencia de un accidente de tráfico?",
      prompt: { ru: "Как называются потери жизней, трудоспособности, физические и психологические страдания из-за аварии?", en: "What are the costs of lost lives, lost productive capacity and physical and psychological suffering resulting from a road accident called?" },
      options: [
        { es: "Costes sanitarios.", ru: "Медицинские расходы.", en: "Healthcare costs." },
        { es: "Costes materiales.", ru: "Материальные расходы.", en: "Material costs." },
        { es: "Costes humanos.", ru: "Человеческие потери (costes humanos).", en: "Human costs." }
      ],
      answer: 2,
      explain: { ru: "Помимо медицинских и материальных, у аварий есть «человеческие издержки» — гибель, инвалидность, страдания пострадавших и близких.", en: "Beyond healthcare and material costs, accidents have ‘human costs’ — deaths, disability and the suffering of victims and families." } },
    { es: "Si ningún elemento impide su funcionamiento eficaz, ¿qué sistema de seguridad pasiva evita que, en caso de accidente, se produzca el efecto submarino?",
      prompt: { ru: "Если ничто не мешает его работе, какая система пассивной безопасности предотвращает «эффект подныривания» при аварии?", en: "If nothing prevents it working, which passive-safety system prevents the submarine effect in an accident?" },
      options: [
        { es: "El airbag.", ru: "Подушка безопасности.", en: "The airbag." },
        { es: "El reposacabezas.", ru: "Подголовник.", en: "The head restraint." },
        { es: "El cinturón de seguridad.", ru: "Ремень безопасности.", en: "The seat belt." }
      ],
      answer: 2,
      explain: { ru: "«Подныривание» — когда тело выскальзывает под поясной лямкой; правильно надетый ремень (низко на тазу) это предотвращает.", en: "‘Submarining’ is the body sliding under the lap strap; a correctly worn belt (low on the hips) prevents it." } },
    { es: "Se considera peatón a la persona...",
      prompt: { ru: "Пешеход — это человек…", en: "A pedestrian is a person…" },
      options: [
        { es: "que, sin ser conductor, transita a pie por las vías públicas.", ru: "который, не будучи водителем, идёт пешком по дорогам общего пользования.", en: "who, not being a driver, travels on foot on public roads." },
        { es: "a cuyo cargo está un animal o animales.", ru: "который ведёт животное или животных.", en: "in charge of an animal or animals." },
        { es: "que circula con una bicicleta.", ru: "который едет на велосипеде.", en: "riding a bicycle." }
      ],
      answer: 0,
      explain: { ru: "Пешеход идёт пешком; к пешеходам приравнены и те, кто ведёт велосипед или детскую коляску (LSV, приложение I).", en: "A pedestrian goes on foot; those pushing a bicycle or pram also count as pedestrians (LSV annex I)." } },
    { es: "El consumo de drogas de abuso o ilegales, ¿afecta a la seguridad vial?",
      prompt: { ru: "Влияет ли употребление наркотиков на безопасность дорожного движения?", en: "Does the use of illegal drugs affect road safety?" },
      options: [
        { es: "No, en absoluto.", ru: "Нет, совсем.", en: "No, not at all." },
        { es: "Sí, ya que alteran de modo importante las capacidades del conductor.", ru: "Да, они сильно нарушают способности водителя.", en: "Yes, as they significantly impair the driver’s abilities." },
        { es: "Solo si el conductor no está habituado a consumirlas.", ru: "Только если водитель не привык к ним.", en: "Only if the driver is not used to them." }
      ],
      answer: 1,
      explain: { ru: "Наркотики искажают восприятие, реакцию и оценку риска; вождение с их следами в организме — нарушение (LSV, ст. 14).", en: "Drugs distort perception, reaction and risk judgement; driving with traces in the body is an offence (LSV art. 14)." } },
    { es: "Durante la conducción, ¿qué horas son especialmente propicias para la aparición del sueño?",
      prompt: { ru: "Какие часы особенно располагают ко сну за рулём?", en: "While driving, which hours are especially prone to sleepiness?" },
      options: [
        { es: "Las últimas horas de la mañana.", ru: "Последние утренние часы.", en: "Late morning." },
        { es: "Las horas de la madrugada y las primeras horas de la tarde.", ru: "Предрассветные часы и первые послеобеденные.", en: "The early hours of the morning and early afternoon." },
        { es: "Las últimas horas de la tarde y las primeras de la mañana.", ru: "Поздний вечер и раннее утро.", en: "Late evening and early morning." }
      ],
      answer: 1,
      explain: { ru: "Биоритм понижает бдительность ночью (особенно 2–6 ч) и после обеда (около 14–16 ч).", en: "Body rhythms lower alertness at night (especially 2–6 a.m.) and after lunch (about 2–4 p.m.)." } },
    { es: "En un turismo con cinco plazas autorizadas, incluida la del conductor, ¿está permitido transportar a seis personas?",
      prompt: { ru: "Можно ли перевозить шесть человек в легковом на пять мест, включая водителя?", en: "May a car with five authorised seats including the driver carry six people?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, siempre que no se supere la masa máxima autorizada del vehículo.", ru: "Да, если не превышена максимальная масса.", en: "Yes, as long as the maximum authorised mass is not exceeded." },
        { es: "Solo cuando al menos uno de los ocupantes sea menor de edad.", ru: "Только если хотя бы один — несовершеннолетний.", en: "Only if at least one occupant is a minor." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 9: число людей не может превышать число мест, указанных в документах машины.", en: "RGC art. 9: the number of occupants may not exceed the seats stated in the vehicle’s papers." } },
    { es: "A los peatones que utilicen monopatines o patines en ningún caso les está permitido...",
      prompt: { ru: "Пешеходам на скейтбордах или роликах ни в коем случае нельзя…", en: "Pedestrians using skateboards or roller skates are never allowed to…" },
      options: [
        { es: "ser arrastrados por otros vehículos.", ru: "держаться за другие транспортные средства, чтобы их тянули.", en: "be towed by other vehicles." },
        { es: "circular por el arcén de una travesía.", ru: "ехать по обочине travesía.", en: "travel on the shoulder of a travesía." },
        { es: "circular a paso de persona por las aceras.", ru: "ехать по тротуару со скоростью пешехода.", en: "travel on the pavement at walking pace." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 121.4: катающимся на роликах, скейтах и подобных запрещено цепляться за машины. (Электросамокаты — это ВМП, у них свои правила.)", en: "RGC art. 121.4: skaters and skateboarders may not hold onto vehicles to be towed. (E-scooters are personal mobility vehicles with their own rules.)" } },
    { es: "Los efectos secundarios de los medicamentos que alteran la capacidad de conducción, ¿se manifiestan de la misma manera en todas las personas?",
      prompt: { ru: "Побочные эффекты лекарств, ухудшающих вождение, проявляются одинаково у всех?", en: "Do the side effects of medicines that impair driving show up in the same way in everyone?" },
      options: [
        { es: "Solo si el tratamiento médico se prolonga en el tiempo.", ru: "Только при долгом лечении.", en: "Only if treatment lasts a long time." },
        { es: "Sí; sus efectos son idénticos para todas las personas.", ru: "Да; у всех одинаково.", en: "Yes; the effects are identical for everyone." },
        { es: "No; pueden variar por diversos factores, como la edad o el estado físico del conductor.", ru: "Нет; зависят от возраста, состояния здоровья и других факторов.", en: "No; they vary with factors such as the driver’s age or physical condition." }
      ],
      answer: 2,
      explain: { ru: "Реакция на лекарство индивидуальна: возраст, вес, другие лекарства, алкоголь. Смотрите пиктограмму-машинку на упаковке и спрашивайте врача.", en: "Responses to a medicine are individual: age, weight, other drugs, alcohol. Check the car pictogram on the box and ask your doctor." } },
    { es: "¿Es peligroso introducir una dirección en un navegador GPS mientras se conduce?",
      prompt: { ru: "Опасно ли вводить адрес в навигатор во время езды?", en: "Is it dangerous to enter an address in a GPS navigator while driving?" },
      options: [
        { es: "Solo si el navegador no está integrado en el vehículo.", ru: "Только если навигатор не встроен.", en: "Only if the navigator is not built in." },
        { es: "No, porque es una ayuda para conducir con mayor seguridad.", ru: "Нет, это помогает ехать безопаснее.", en: "No, because it helps you drive more safely." },
        { es: "Sí, ya que distrae al conductor.", ru: "Да, это отвлекает водителя.", en: "Yes, because it distracts the driver." }
      ],
      answer: 2,
      explain: { ru: "Ввод адреса отвлекает взгляд и руки; маршрут задают до начала поездки или остановившись (RGC, ст. 18).", en: "Typing an address takes eyes and hands off the task; set the route before setting off or after stopping (RGC art. 18)." } },
    { es: "La luz antiniebla trasera se utilizará siempre que...",
      prompt: { ru: "Задний противотуманный фонарь включают всегда, когда…", en: "The rear fog light is used whenever…" },
      options: [
        { es: "se circule a velocidad anormalmente reducida.", ru: "едут с аномально низкой скоростью.", en: "driving at an abnormally low speed." },
        { es: "se circule por carreteras de alta montaña.", ru: "едут по высокогорным дорогам.", en: "driving on high mountain roads." },
        { es: "las condiciones meteorológicas sean especialmente desfavorables.", ru: "погода особенно неблагоприятна.", en: "the weather is especially unfavourable." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 106.2: только в особо неблагоприятных условиях — густой туман, очень сильный дождь, сильный снегопад, плотный дым или пыль.", en: "RGC art. 106.2: only in especially bad conditions — thick fog, very heavy rain, heavy snow, dense smoke or dust." } },
    { es: "¿Qué medidas deberá adoptar ante esta señal?",
      prompt: { ru: "Что нужно делать при таком знаке?", en: "What should you do when you see this sign?" },
      options: [
        { es: "Aumentaré la atención por posibles desprendimientos y obstáculos en la calzada.", ru: "Быть внимательнее к возможным камнепадам и препятствиям на дороге.", en: "Pay more attention to possible rockfalls and obstacles on the road." },
        { es: "Aceleraré, pasando la zona lo más rápidamente posible para dejar paso libre.", ru: "Ускориться и проехать зону как можно быстрее.", en: "Speed up to pass the area as quickly as possible." },
        { es: "Me autoriza a circular en sentido contrario, extremando la precaución, en caso de desprendimientos.", ru: "Он разрешает при камнепаде ехать по встречной.", en: "It lets me drive on the wrong side, with care, if there are rockfalls." }
      ],
      answer: 0,
      explain: { ru: "P-26 «Desprendimiento» — возможны камни на дороге; снижают скорость и повышают внимание (Каталог, P-26).", en: "P-26 ‘Desprendimiento’ — rocks may be on the road; slow down and stay alert (Catalogue, P-26)." },
      sign: "P-26" },
    { es: "A partir de la señal, el conductor de un camión de menos de 3.500 kilos de M.M.A., ¿puede adelantar a otros vehículos?",
      prompt: { ru: "После этого знака может ли водитель грузовика с MMA меньше 3 500 кг обгонять?", en: "From the sign onwards, may the driver of a lorry under 3,500 kg MMA overtake other vehicles?" },
      options: [
        { es: "No; la señal le prohíbe adelantar a todo tipo de vehículos a motor.", ru: "Нет; знак запрещает обгонять любые механические ТС.", en: "No; the sign forbids overtaking any type of motor vehicle." },
        { es: "Sí; la señal afecta a camiones cuya M.M.A. supere los 3.500 kilos.", ru: "Да; знак касается грузовиков с MMA больше 3 500 кг.", en: "Yes; the sign applies to lorries whose MMA exceeds 3,500 kg." },
        { es: "Solo puede adelantar a vehículos de dos ruedas.", ru: "Он может обгонять только двухколёсные ТС.", en: "He may only overtake two-wheeled vehicles." }
      ],
      answer: 1,
      explain: { ru: "R-306 касается только грузовиков с MMA больше 3 500 кг (Каталог, R-306).", en: "R-306 applies only to lorries over 3,500 kg MMA (Catalogue, R-306)." },
      sign: "R-306" },
    { es: "Para incorporarse a la vía principal, un turismo tiene que atravesar un carril bici debidamente señalizado; ¿deberá ceder el paso a los ciclistas que circulan por el mismo?",
      prompt: { ru: "Чтобы выехать на главную дорогу, легковой машине нужно пересечь обозначенную велодорожку. Нужно ли уступить велосипедистам на ней?", en: "To join the main road, a car must cross a properly signed cycle lane; must it give way to cyclists on it?" },
      options: [
        { es: "Sí; los ciclistas tienen prioridad de paso.", ru: "Да; у велосипедистов преимущество.", en: "Yes; cyclists have priority." },
        { es: "No; el turismo tiene prioridad de paso.", ru: "Нет; преимущество у машины.", en: "No; the car has priority." },
        { es: "Solo cuando los ciclistas circulen en grupo.", ru: "Только если велосипедисты едут группой.", en: "Only when the cyclists ride in a group." }
      ],
      answer: 0,
      explain: { ru: "LSV, ст. 64: велосипедисты имеют преимущество на велодорожке, велопереходе или обочине, если машина пересекает их путь.", en: "LSV art. 64: cyclists have priority on a cycle lane, cycle crossing or shoulder when a vehicle crosses their path." } },
    { es: "El nivel del depósito de líquido lavaparabrisas, ¿se debe revisar con cierta frecuencia?",
      prompt: { ru: "Нужно ли регулярно проверять уровень в бачке омывателя?", en: "Should the washer-fluid reservoir level be checked fairly often?" },
      options: [
        { es: "Sí, es conveniente para no quedarnos sin él cuando lo necesitemos.", ru: "Да, чтобы жидкость не кончилась в нужный момент.", en: "Yes, it is advisable so as not to run out when needed." },
        { es: "Solo hay que revisarlo en verano porque con el calor el líquido se evapora.", ru: "Только летом, когда жидкость испаряется.", en: "Only in summer, because the heat evaporates it." },
        { es: "No es necesario, basta con revisarlo antes de pasar la inspección técnica.", ru: "Не нужно, достаточно перед техосмотром.", en: "No need, checking before the ITV is enough." }
      ],
      answer: 0,
      explain: { ru: "Без омывателя грязь на стекле ухудшает видимость; уровень проверяют регулярно, зимой — незамерзающая жидкость.", en: "Without washer fluid a dirty screen cuts visibility; check regularly and use antifreeze fluid in winter." } },
    { es: "En calzadas con doble sentido de circulación y dos carriles sin delimitar por marcas viales, ¿por dónde se debe de circular?",
      prompt: { ru: "На дороге с двусторонним движением и двумя полосами без разметки как нужно ехать?", en: "On a two-way carriageway with two lanes not separated by markings, where must you drive?" },
      options: [
        { es: "Por el centro de la calzada.", ru: "По центру.", en: "In the centre." },
        { es: "Por el carril derecho.", ru: "По правой полосе.", en: "In the right-hand lane." },
        { es: "Por cualquiera de los dos carriles si no vienen vehículos en sentido contrario.", ru: "По любой, если нет встречных.", en: "In either lane if nothing is coming the other way." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 29: на двусторонней дороге едут по правой стороне, ближе к краю.", en: "RGC art. 29: on a two-way road keep to the right, near the edge." } },
    { es: "En caso de lluvia, ¿es aconsejable aumentar la distancia de seguridad con el vehículo que circula delante?",
      prompt: { ru: "В дождь стоит ли увеличить дистанцию до машины впереди?", en: "In rain, is it advisable to increase the gap to the vehicle ahead?" },
      options: [
        { es: "Sí, porque la distancia de frenado aumenta.", ru: "Да, тормозной путь увеличивается.", en: "Yes, because braking distance increases." },
        { es: "No, porque la distancia de frenado disminuye.", ru: "Нет, тормозной путь уменьшается.", en: "No, because braking distance decreases." },
        { es: "Solo en vías rápidas, pero no en vías urbanas ni en carreteras convencionales", ru: "Только на скоростных дорогах, а не в городе и на обычных дорогах.", en: "Only on fast roads, not on urban or conventional roads." }
      ],
      answer: 0,
      explain: { ru: "Мокрое покрытие удлиняет тормозной путь на любой дороге.", en: "A wet surface lengthens stopping distance on every road." } },
    { es: "El conductor de un vehículo podrá adelantar en un túnel cuando...",
      prompt: { ru: "Водитель может обгонять в тоннеле, когда…", en: "A driver may overtake in a tunnel when…" },
      options: [
        { es: "exista más de un carril en el sentido contrario de su marcha.", ru: "во встречном направлении больше одной полосы.", en: "there is more than one lane in the opposite direction." },
        { es: "exista más de un carril en su sentido de circulación.", ru: "в его направлении больше одной полосы.", en: "there is more than one lane in his own direction." },
        { es: "exista un carril para cada sentido, siempre que el túnel esté bien iluminado.", ru: "в каждую сторону по одной полосе, если тоннель хорошо освещён.", en: "there is one lane each way, if the tunnel is well lit." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 87: в тоннелях обгон возможен, только если в вашем направлении больше одной полосы.", en: "RGC art. 87: in tunnels overtaking is possible only with more than one lane in your direction." } },
    { es: "A la entrada y salida del colegio, para evitar riesgos, ¿qué precauciones deberá tomar cuando los niños desciendan del vehículo, además de la previa vigilancia del entorno?",
      prompt: { ru: "У школы, когда дети выходят из машины, какие меры предосторожности нужны, помимо того, чтобы посмотреть вокруг?", en: "At the school gate, when children get out of the vehicle, what precautions must be taken besides first checking the surroundings?" },
      options: [
        { es: "No deberán abrir las puertas ni apearse antes de la completa inmovilización del vehículo.", ru: "Не открывать двери и не выходить, пока машина полностью не остановилась.", en: "They must not open the doors or get out before the vehicle has fully stopped." },
        { es: "Para mayor seguridad lo harán siempre por la puerta del conductor.", ru: "Для надёжности всегда выходить через дверь водителя.", en: "For safety they should always use the driver’s door." },
        { es: "Deberán bajar del vehículo por la puerta más alejada del borde de la vía.", ru: "Выходить через дверь, дальнюю от края дороги.", en: "They should get out through the door furthest from the road edge." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 114: двери открывают только после полной остановки, проверив обстановку, и выходят со стороны тротуара.", en: "RGC art. 114: doors are opened only once the vehicle has fully stopped and it is safe, getting out on the kerb side." } },
    { es: "Está adelantando y ve que hay peligro; ¿qué debe hacer?",
      prompt: { ru: "Вы обгоняете и видите опасность. Что нужно делать?", en: "You are overtaking and see danger; what must you do?" },
      options: [
        { es: "Aumentar la velocidad y adelantar rápidamente.", ru: "Ускориться и быстро закончить обгон.", en: "Speed up and overtake quickly." },
        { es: "Reducir la velocidad, señalizar y volver a mi carril.", ru: "Снизить скорость, показать сигнал и вернуться в свою полосу.", en: "Slow down, signal and return to my lane." },
        { es: "Pedir ayuda al vehículo que estoy adelantando.", ru: "Попросить помощи у обгоняемой машины.", en: "Ask the vehicle being overtaken for help." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 85.2: если обстановка изменилась, обгон прерывают: снижают скорость и возвращаются в свою полосу, показав сигнал.", en: "RGC art. 85.2: if circumstances change, abandon the overtake: slow down and return to your lane, signalling." } },
    { es: "En esta calle de sentido único en la que no hay señalización que prohíba estacionar ni marcas viales en la calzada, ¿en qué lado está permitido el estacionamiento?",
      prompt: { ru: "На этой улице с односторонним движением, где нет знаков, запрещающих стоянку, и разметки, с какой стороны можно ставить машину?", en: "In this one-way street with no parking restrictions or road markings, on which side is parking allowed?" },
      options: [
        { es: "En el lado derecho solamente.", ru: "Только справа.", en: "Only on the right." },
        { es: "En ambos lados, tanto en el derecho como en el izquierdo.", ru: "С обеих сторон.", en: "On both sides, right and left." },
        { es: "En el lado izquierdo solamente.", ru: "Только слева.", en: "Only on the left." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 90: на улицах с односторонним движением в населённых пунктах можно стоять с обеих сторон, если не запрещено.", en: "RGC art. 90: in one-way streets in built-up areas you may park on both sides unless prohibited." } },
    { es: "Los ciclistas, ¿están obligados a encender el alumbrado cuando circulan de noche?",
      prompt: { ru: "Обязаны ли велосипедисты включать свет, когда едут ночью?", en: "Must cyclists use lights when riding at night?" },
      options: [
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No, si llevan puestas prendas reflectantes.", ru: "Нет, если на них светоотражающая одежда.", en: "No, if they wear reflective clothing." },
        { es: "Solo cuando circulan por vías interurbanas.", ru: "Только за городом.", en: "Only on interurban roads." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 98: велосипед ночью — передний белый и задний красный огни и световозвращатели; за городом — ещё и светоотражающий жилет или одежда.", en: "RGC art. 98: at night a bicycle needs a white front and red rear light and reflectors; outside towns also a reflective vest or garment." } },
    { es: "La carga transportada en un turismo no deberá...",
      prompt: { ru: "Груз в легковом автомобиле не должен…", en: "The load carried in a car must not…" },
      options: [
        { es: "Descargarse por el lado del vehículo más próximo al borde de la calzada.", ru: "Выгружаться со стороны, ближней к краю проезжей части.", en: "Be unloaded on the side nearest the edge of the carriageway." },
        { es: "Sobresalir por la parte posterior más de un 5% de su longitud.", ru: "Выступать сзади больше чем на 5 % длины.", en: "Stick out at the rear more than 5 % of its length." },
        { es: "Comprometer su estabilidad.", ru: "Нарушать устойчивость машины.", en: "Compromise the vehicle’s stability." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 14: груз размещают и крепят так, чтобы он не падал, не смещался и не нарушал устойчивость машины.", en: "RGC art. 14: the load must be placed and secured so it cannot fall or shift or upset the vehicle’s stability." } },
    { es: "¿Cómo puede reducir la velocidad de su vehículo?",
      prompt: { ru: "Как можно снизить скорость машины?", en: "How can you reduce your vehicle’s speed?" },
      options: [
        { es: "Solo con el sistema de frenado.", ru: "Только тормозной системой.", en: "Only with the braking system." },
        { es: "Solo con el motor.", ru: "Только двигателем.", en: "Only with the engine." },
        { es: "Tanto con el sistema de frenado como con el motor.", ru: "И тормозами, и двигателем.", en: "With both the braking system and the engine." }
      ],
      answer: 2,
      explain: { ru: "Скорость снижают и тормозами, и торможением двигателем (сброс газа, низкая передача) — последнее особенно важно на спусках.", en: "Speed is reduced with the brakes and with engine braking (lifting off, lower gear) — the latter is key on descents." } },
    { es: "En esta vía de doble sentido, el conductor del turismo blanco, ¿dónde situará su vehículo para girar a la izquierda?",
      prompt: { ru: "На этой двусторонней дороге где водитель белой машины должен встать, чтобы повернуть налево?", en: "On this two-way road, where should the driver of the white car position it to turn left?" },
      options: [
        { es: "Sobre la línea discontinua, invadiendo ligeramente el sentido contrario.", ru: "На прерывистой линии, слегка заехав на встречную.", en: "Over the broken line, slightly into the opposite side." },
        { es: "Junto a la línea discontinua, sin invadir el sentido contrario.", ru: "У прерывистой линии, не заезжая на встречную.", en: "Next to the broken line, without entering the opposite side." },
        { es: "A la derecha, fuera de la calzada siempre que sea posible.", ru: "Справа, по возможности вне проезжей части.", en: "On the right, off the carriageway when possible." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 75: для поворота налево на двусторонней дороге встают ближе к оси, не заезжая на встречную половину.", en: "RGC art. 75: to turn left on a two-way road move close to the centre line without crossing into the other half." } },
    { es: "La falta de experiencia al volante, ¿puede ser una de las causas que expliquen los accidentes de tráfico que sufren los conductores noveles?",
      prompt: { ru: "Может ли нехватка опыта быть одной из причин аварий начинающих водителей?", en: "Can lack of experience be one of the causes of accidents among novice drivers?" },
      options: [
        { es: "Sí; es una de las causas de los accidentes protagonizados por jóvenes.", ru: "Да; это одна из причин аварий молодых.", en: "Yes; it is one of the causes of accidents involving young people." },
        { es: "No; el estado de la vía y del vehículo son los únicos factores que explican los accidentes.", ru: "Нет; объясняют аварии только дорога и машина.", en: "No; the road and vehicle are the only factors." },
        { es: "Solo si el conductor novel ha consumido alcohol o drogas ilegales.", ru: "Только если новичок употреблял алкоголь или наркотики.", en: "Only if the novice has taken alcohol or illegal drugs." }
      ],
      answer: 0,
      explain: { ru: "Малый опыт означает хуже предвидеть опасность и оценивать риск — поэтому у новичков строже лимит алкоголя и меньше баллов.", en: "Little experience means poorer hazard anticipation and risk judgement — hence novices’ lower alcohol limit and fewer points." } },
    { es: "Hay nieve y solo tiene cadenas para dos ruedas. ¿Dónde debe ponerlas?",
      prompt: { ru: "Снег, а цепи у вас только на два колеса. Куда их ставить?", en: "There is snow and you only have chains for two wheels. Where should you fit them?" },
      options: [
        { es: "En las ruedas delanteras siempre.", ru: "Всегда на передние колёса.", en: "Always on the front wheels." },
        { es: "En las ruedas motrices siempre.", ru: "Всегда на ведущие колёса.", en: "Always on the driving wheels." },
        { es: "En las ruedas traseras siempre.", ru: "Всегда на задние колёса.", en: "Always on the rear wheels." }
      ],
      answer: 1,
      explain: { ru: "Цепи ставят на ведущую ось — передняя или задняя, смотря по машине (Каталог, R-412).", en: "Chains go on the driving axle — front or rear depending on the car (Catalogue, R-412)." } },
    { es: "Esta carretera no tiene arcén; ¿puede estacionar a la derecha, fuera de la vía?",
      prompt: { ru: "У этой дороги нет обочины. Можно ли поставить машину справа, за пределами дороги?", en: "This road has no hard shoulder; may you park on the right, off the road?" },
      options: [
        { es: "Sí, porque estoy fuera de la calzada.", ru: "Да, ведь я вне проезжей части.", en: "Yes, because I am off the carriageway." },
        { es: "No, porque es una vía interurbana.", ru: "Нет, это загородная дорога.", en: "No, because it is an interurban road." },
        { es: "Solo si hay una señal que permita expresamente el estacionamiento.", ru: "Только если знак прямо это разрешает.", en: "Only if a sign expressly permits parking." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 90: за городом останавливаются и стоят вне проезжей части, справа.", en: "RGC art. 90: outside towns you stop and park off the carriageway, on the right." } },
    { es: "Si un vehículo queda detenido por avería en un paso a nivel, el conductor debe adoptar en primer lugar las medidas necesarias para...",
      prompt: { ru: "Если машина заглохла на железнодорожном переезде, водитель прежде всего должен…", en: "If a vehicle breaks down on a level crossing, the driver must first take the steps needed to…" },
      options: [
        { es: "que todos los ocupantes abandonen el vehículo.", ru: "вывести всех пассажиров из машины.", en: "get all the occupants out of the vehicle." },
        { es: "desconectar los bornes de la batería del vehículo.", ru: "отсоединить клеммы аккумулятора.", en: "disconnect the battery terminals." },
        { es: "colocar el triángulo de preseñalización de peligro en la vía.", ru: "выставить знак аварийной остановки на дороге.", en: "place the warning device on the road." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 97.1: сначала — быстро вывести людей, затем освободить переезд или предупредить машинистов и водителей.", en: "RGC art. 97.1: first get the occupants out quickly, then clear the crossing or warn train and road drivers." } },
    { es: "Circular en motocicleta bajo una lluvia intensa obliga a...",
      prompt: { ru: "Езда на мотоцикле под сильным дождём обязывает…", en: "Riding a motorcycle in heavy rain requires you to…" },
      options: [
        { es: "circular lo más cerca posible del vehículo que va por delante.", ru: "ехать как можно ближе к машине впереди.", en: "ride as close as possible to the vehicle in front." },
        { es: "moderar la velocidad, e incluso detenerse si fuera preciso.", ru: "снизить скорость и при необходимости остановиться.", en: "moderate your speed and even stop if necessary." },
        { es: "encender la luz de largo alcance, incluso dentro de poblado.", ru: "включить дальний свет, даже в городе.", en: "use the main beam, even in built-up areas." }
      ],
      answer: 1,
      explain: { ru: "На мокрой дороге у мотоцикла меньше сцепления и обзора; снижают скорость и увеличивают дистанцию, а при необходимости останавливаются (RGC, ст. 45–46).", en: "In the wet a motorcycle has less grip and visibility; slow down, leave more room and stop if necessary (RGC arts. 45–46)." } },
    { es: "Fuera de poblado, una autocaravana va a adelantar a un vehículo pesado. ¿Puede producirse una situación de riesgo cuando circulen en paralelo si sopla fuerte viento lateral por la izquierda?",
      prompt: { ru: "За городом автодом собирается обогнать грузовик. Может ли возникнуть опасность, когда они едут рядом, если дует сильный боковой ветер слева?", en: "Outside town, a motorhome is about to overtake a heavy vehicle. Can a risk arise while they run side by side if there is a strong crosswind from the left?" },
      options: [
        { es: "No, si ambos vehículos tienen el mismo volumen y peso.", ru: "Нет, если у обеих машин одинаковые объём и масса.", en: "No, if both vehicles have the same volume and weight." },
        { es: "Sí, porque se produciría un empuje brusco de los dos vehículos hacia la izquierda.", ru: "Да, обе машины резко толкнёт влево.", en: "Yes, both vehicles would be pushed sharply to the left." },
        { es: "Sí, puede producirse el efecto pantalla y aproximarse de forma brusca al vehículo pesado.", ru: "Да, возможен «эффект экрана» и резкое сближение с грузовиком.", en: "Yes, the screen effect may occur and the motorhome may suddenly be drawn towards the heavy vehicle." }
      ],
      answer: 2,
      explain: { ru: "Ветер слева давит на автодом вправо; когда он заходит в «тень» грузовика, давление вдруг исчезает и машину бросает к грузовику («эффект экрана»).", en: "A left-hand wind pushes the motorhome to the right; entering the lorry’s ‘shadow’, the pressure suddenly drops and the motorhome is drawn towards it (screen effect)." } },
    { es: "El consumo de alcohol, ¿afecta al tiempo que tarda en reaccionar el conductor ante una situación de emergencia?",
      prompt: { ru: "Влияет ли алкоголь на время реакции водителя в экстренной ситуации?", en: "Does alcohol affect the time it takes a driver to react in an emergency?" },
      options: [
        { es: "Sí; el tiempo de reacción aumenta.", ru: "Да; время реакции увеличивается.", en: "Yes; reaction time increases." },
        { es: "Sí; el tiempo de reacción disminuye.", ru: "Да; время реакции уменьшается.", en: "Yes; reaction time decreases." },
        { es: "No; el consumo de alcohol no afecta al tiempo de reacción.", ru: "Нет; алкоголь не влияет на время реакции.", en: "No; alcohol does not affect reaction time." }
      ],
      answer: 0,
      explain: { ru: "Алкоголь замедляет нервную систему: опасность замечается позже и реакция медленнее.", en: "Alcohol slows the nervous system: hazards are noticed later and reactions are slower." } },
    { es: "El estilo de conducción de una motocicleta, ¿puede influir en el consumo de combustible?",
      prompt: { ru: "Может ли стиль езды на мотоцикле влиять на расход топлива?", en: "Can the way a motorcycle is ridden affect fuel consumption?" },
      options: [
        { es: "No, solo depende de la cilindrada de la motocicleta.", ru: "Нет, он зависит только от объёма двигателя.", en: "No, it depends only on the engine size." },
        { es: "No, si se adopta una postura aerodinámica.", ru: "Нет, если занять аэродинамичную позу.", en: "No, if an aerodynamic posture is adopted." },
        { es: "Sí.", ru: "Да.", en: "Yes." }
      ],
      answer: 2,
      explain: { ru: "Плавные разгоны, умеренная постоянная скорость и правильная передача снижают расход и у мотоцикла.", en: "Smooth acceleration, a moderate steady speed and the right gear cut consumption on a motorcycle too." } },
    { es: "¿Qué es un catadióptrico?",
      prompt: { ru: "Что такое катафот (catadióptrico)?", en: "What is a catadioptric (retroreflector)?" },
      options: [
        { es: "Un dispositivo que refleja la luz procedente de una fuente luminosa.", ru: "Устройство, отражающее свет от источника света.", en: "A device that reflects light from a light source." },
        { es: "Una placa de matrícula reflectante.", ru: "Светоотражающий номерной знак.", en: "A reflective number plate." },
        { es: "Un dispositivo de alumbrado del vehículo.", ru: "Осветительный прибор машины.", en: "A vehicle lighting device." }
      ],
      answer: 0,
      explain: { ru: "Катафот (световозвращатель) сам не светится, а отражает свет фар обратно к источнику — так машину или велосипед видно в темноте.", en: "A retroreflector does not emit light; it sends headlight beams back to their source, so the vehicle or bicycle is visible in the dark." } },
    { es: "¿Está permitida la circulación de vehículos cuyo nivel de emisión de ruidos supere los límites establecidos?",
      prompt: { ru: "Разрешено ли ездить на машинах, шум которых превышает установленные нормы?", en: "May vehicles whose noise emissions exceed the established limits be driven?" },
      options: [
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Solo está permitida su circulación por vías urbanas.", ru: "Только в городе.", en: "Only on urban roads." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 7: превышение норм шума запрещено; машину могут обездвижить (LSV, ст. 104).", en: "RGC art. 7: exceeding noise limits is forbidden; the vehicle may be immobilised (LSV art. 104)." } },
    { es: "En esta carretera, ¿dónde se puede estacionar?",
      prompt: { ru: "Где можно поставить машину на этой дороге?", en: "On this road, where may you park?" },
      options: [
        { es: "Dentro de la vía, en el lado derecho.", ru: "На дороге, справа.", en: "On the road, on the right." },
        { es: "En ninguna parte; está prohibido estacionar dentro y fuera de la vía.", ru: "Нигде: стоянка запрещена и на дороге, и вне её.", en: "Nowhere; parking is forbidden both on and off the road." },
        { es: "Fuera de la vía, en el lado derecho.", ru: "Вне дороги, справа.", en: "Off the road, on the right." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 90: за городом останавливаются и стоят вне проезжей части, справа, оставляя свободной пригодную часть обочины.", en: "RGC art. 90: outside towns you stop and park off the carriageway, on the right, leaving the usable part of the shoulder clear." } },
    { es: "Los conductores jóvenes, en general, ¿evalúan peor los riesgos de la circulación?",
      prompt: { ru: "Хуже ли в целом молодые водители оценивают риски движения?", en: "Do young drivers generally judge traffic risks worse?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí, lo que reduce la posibilidad de sufrir un accidente de tráfico.", ru: "Да, и это уменьшает вероятность аварии.", en: "Yes, which reduces the chance of an accident." },
        { es: "Sí, lo que aumenta la posibilidad de sufrir un accidente de tráfico.", ru: "Да, и это увеличивает вероятность аварии.", en: "Yes, which increases the chance of an accident." }
      ],
      answer: 2,
      explain: { ru: "Недооценка риска и переоценка своих сил — одна из главных причин аварий молодёжи.", en: "Underestimating risk and overestimating oneself is a major cause of young drivers’ accidents." } },
    { es: "Respecto a los efectos secundarios de los medicamentos y su influencia en la conducción, tras ingerir fármacos somníferos o hipnóticos normalmente...",
      prompt: { ru: "Что касается побочных эффектов лекарств, после снотворных или гипнотиков обычно…", en: "On medicines’ side effects and driving: after taking sleeping pills or hypnotics, normally…" },
      options: [
        { es: "disminuye el tiempo de reacción.", ru: "время реакции уменьшается.", en: "reaction time decreases." },
        { es: "aumenta el tiempo de reacción.", ru: "время реакции увеличивается.", en: "reaction time increases." },
        { es: "aumenta el campo visual.", ru: "поле зрения расширяется.", en: "the visual field widens." }
      ],
      answer: 1,
      explain: { ru: "Снотворные вызывают сонливость и замедляют реакцию, иногда и на следующий день.", en: "Sleeping pills cause drowsiness and slow reactions, sometimes into the next day." } },
    { es: "Durante el día, las motocicletas están obligadas a llevar encendida la luz de cruce...",
      prompt: { ru: "Днём мотоциклы обязаны ехать с ближним светом…", en: "During the day, motorcycles must have the dipped beam on…" },
      options: [
        { es: "cuando circulen por cualquier tipo de vía.", ru: "на любых дорогах.", en: "on any type of road." },
        { es: "cuando circulen por vías interurbanas, solamente.", ru: "только за городом.", en: "only on interurban roads." },
        { es: "cuando las condiciones climatológicas sean adversas, solamente.", ru: "только в плохую погоду.", en: "only when the weather is adverse." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 104: мотоциклы днём едут с ближним светом на всех дорогах.", en: "RGC art. 104: motorcycles use dipped beam in the daytime on every road." } },
    { es: "Un conductor que, pese a poder hacerlo sin riesgo, no se detiene a ayudar a una víctima grave de accidente que se encuentra desamparada, ¿podría estar cometiendo un delito?",
      prompt: { ru: "Водитель, который мог без риска остановиться, но не помог тяжело пострадавшему, оставшемуся без помощи, может ли совершить преступление?", en: "A driver who, though able to do so without risk, does not stop to help a seriously injured, helpless accident victim — could he be committing a crime?" },
      options: [
        { es: "Sí, aunque el conductor no esté implicado en el accidente.", ru: "Да, даже если он не участник аварии.", en: "Yes, even if the driver was not involved in the accident." },
        { es: "No; ayudar a las víctimas es un gesto de solidaridad, pero no es un deber.", ru: "Нет; помогать — проявление солидарности, а не обязанность.", en: "No; helping victims is a kind gesture, not a duty." },
        { es: "Sí, pero solo si el conductor está implicado en el accidente.", ru: "Да, но только если он участник аварии.", en: "Yes, but only if the driver was involved." }
      ],
      answer: 0,
      explain: { ru: "Неоказание помощи (omisión del deber de socorro) — преступление по Уголовному кодексу (ст. 195) для любого, кто мог помочь без риска.", en: "Failing to help (omisión del deber de socorro) is a crime under the Criminal Code (art. 195) for anyone who could help without risk." } },
    { es: "En una motocicleta con mandos independientes para cada uno de los frenos, ¿dónde se acciona generalmente el freno delantero?",
      prompt: { ru: "На мотоцикле с раздельными тормозами где обычно находится передний тормоз?", en: "On a motorcycle with separate controls for each brake, where is the front brake usually operated?" },
      options: [
        { es: "En el manillar, con la mano derecha.", ru: "На руле, правой рукой.", en: "On the handlebar, with the right hand." },
        { es: "En el manillar, con la mano izquierda.", ru: "На руле, левой рукой.", en: "On the handlebar, with the left hand." },
        { es: "En un pedal, con el pie izquierdo.", ru: "Педалью, левой ногой.", en: "With a pedal, using the left foot." }
      ],
      answer: 0,
      explain: { ru: "Передний тормоз — рычаг справа на руле; задний — педаль под правой ногой; слева на руле — сцепление.", en: "The front brake is the right handlebar lever; the rear is the right foot pedal; the left lever is the clutch." } },
    { es: "En esta vía se ha habilitado un carril adicional circunstancial, ¿a qué velocidad, como mínimo, deberán circular por dicho carril?",
      prompt: { ru: "На этой дороге открыта временная дополнительная полоса. С какой минимальной скоростью нужно ехать по ней?", en: "A temporary additional lane has been set up on this road; what is the minimum speed in it?" },
      options: [
        { es: "60 km/h o inferior si así estuviese señalizado.", ru: "60 км/ч или ниже, если так обозначено.", en: "60 km/h, or lower if so signed." },
        { es: "80 km/h.", ru: "80 км/ч.", en: "80 km/h." },
        { es: "A la mitad de la genérica señalada para cada categoría de vehículos.", ru: "Половина общего лимита для каждой категории.", en: "Half the generic limit for each category of vehicle." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 42: на временной дополнительной полосе — не меньше 60 и не больше 80 км/ч, если иное не обозначено.", en: "RGC art. 42: in a temporary additional lane — at least 60 and at most 80 km/h unless signed otherwise." } },
    { es: "Cuando se circula con lluvia disminuye la visibilidad, sobre todo si la lluvia es fuerte. ¿Qué precauciones debe tomar?",
      prompt: { ru: "В дождь видимость падает, особенно при сильном. Какие меры нужно принять?", en: "Rain reduces visibility, especially heavy rain; what precautions should you take?" },
      options: [
        { es: "Debe aumentar la distancia de seguridad y reducir la velocidad.", ru: "Увеличить дистанцию и снизить скорость.", en: "Increase the safety distance and reduce speed." },
        { es: "No debe abrir las ventanillas para evitar que se empañen los cristales.", ru: "Не открывать окна, чтобы стёкла не запотели.", en: "Do not open the windows, to stop the glass misting." },
        { es: "Debe circular sobre las líneas o marcas blancas longitudinales de la carretera para mantener la trayectoria adecuada.", ru: "Ехать по белым продольным линиям, чтобы держать траекторию.", en: "Drive on the white longitudinal lines to hold your course." }
      ],
      answer: 0,
      explain: { ru: "Увеличьте дистанцию, плавно снизьте скорость, не допускайте запотевания; разметка в дождь скользкая.", en: "Increase the gap, slow down gradually and keep the glass clear; road paint is slippery in the wet." } },
    { es: "Cuando viaje con su mascota, ¿en qué lugar del vehículo podrá situarse para evitar que interfiera en la conducción?",
      prompt: { ru: "Где в машине должен находиться питомец, чтобы не мешать вождению?", en: "When travelling with your pet, where in the vehicle may it go so it does not interfere with driving?" },
      options: [
        { es: "En el asiento delantero ya que si dispone de airbag frontal estará doblemente protegida.", ru: "На переднем сиденье: с фронтальной подушкой он будет вдвойне защищён.", en: "On the front seat, since with a front airbag it will be doubly protected." },
        { es: "Donde no comprometa su seguridad ni la del resto de pasajeros, además de ir sujeta con el dispositivo adecuado.", ru: "Там, где он не угрожает своей безопасности и безопасности пассажиров, закреплённый подходящим устройством.", en: "Where it does not compromise its own or the passengers’ safety, secured with a suitable device." },
        { es: "En los asientos traseros sujeta con el cinturón de seguridad como un pasajero más.", ru: "На заднем сиденье, пристёгнутый ремнём, как пассажир.", en: "On the back seat, belted in like any passenger." }
      ],
      answer: 1,
      explain: { ru: "Животное перевозят закреплённым (переноска, шлейка с креплением, сетка) там, где оно не мешает водителю; на переднем сиденье подушка может его травмировать.", en: "Carry the animal secured (carrier, harness, net) where it cannot interfere with the driver; on the front seat the airbag could injure it." } },
    { es: "¿Qué indica la señal colocada en la parte trasera del vehículo compuesta por una lámina reflectante de color amarillo rodeada de una lámina fluorescente de color rojo?",
      prompt: { ru: "Что означает знак сзади машины: жёлтая световозвращающая пластина в красной флуоресцентной рамке?", en: "What does the sign at the rear of a vehicle mean — a yellow reflective sheet surrounded by red fluorescent material?" },
      options: [
        { es: "Que el vehículo o el conjunto de vehículos tiene una longitud superior a 12 metros.", ru: "Что машина или автопоезд длиннее 12 метров.", en: "That the vehicle or combination is longer than 12 metres." },
        { es: "Que el vehículo transporta mercancías peligrosas.", ru: "Что машина перевозит опасные грузы.", en: "That the vehicle carries dangerous goods." },
        { es: "Que el vehículo no podrá circular a una velocidad superior a 90 km/h.", ru: "Что машина не может ехать быстрее 90 км/ч.", en: "That the vehicle may not exceed 90 km/h." }
      ],
      answer: 0,
      explain: { ru: "Жёлто-красные задние пластины (V-6) обозначают длинные машины и автопоезда — более 12 м; опасные грузы обозначают оранжевыми табличками.", en: "Yellow-and-red rear plates (V-6) mark long vehicles and combinations over 12 m; dangerous goods carry orange plates." } },
    { es: "Esta señal indica peligro por la proximidad de...",
      prompt: { ru: "Этот знак предупреждает о приближении…", en: "This sign warns of the approach of…" },
      options: [
        { es: "un tramo de vía con posible obstrucción en la calzada.", ru: "участка с возможным препятствием на дороге.", en: "a stretch with a possible obstruction on the carriageway." },
        { es: "un resalto o badén en la vía o pavimento en mal estado.", ru: "лежачего полицейского, выбоины или плохого покрытия.", en: "a hump or dip in the road or a poor surface." },
        { es: "un tramo de vía con pendientes ascendentes y descendentes.", ru: "участка с подъёмами и спусками.", en: "a stretch of road with ups and downs." }
      ],
      answer: 1,
      explain: { ru: "P-15 «Perfil irregular» — неровность: лежачий полицейский, выбоина или плохое покрытие (Каталог, P-15).", en: "P-15 ‘Perfil irregular’ — uneven road: a hump, dip or poor surface (Catalogue, P-15)." },
      sign: "P-15" },
    { es: "Esta señal indica que...",
      prompt: { ru: "Этот знак показывает, что…", en: "This sign indicates that…" },
      options: [
        { es: "a su altura puede realizar un cambio de sentido de la marcha a la derecha.", ru: "здесь можно развернуться направо.", en: "you may make a U-turn to the right here." },
        { es: "las únicas direcciones aconsejadas son seguir de frente o girar a la derecha.", ru: "рекомендуется только ехать прямо или повернуть направо.", en: "the only recommended directions are straight on or right." },
        { es: "debe seguir una de las direcciones y sentidos que señalan las flechas.", ru: "нужно ехать в одном из направлений, показанных стрелками.", en: "you must follow one of the directions shown by the arrows." }
      ],
      answer: 2,
      explain: { ru: "R-403a «Únicas direcciones y sentidos permitidos» — разрешены только показанные стрелками направления (Каталог, R-403a).", en: "R-403a ‘Únicas direcciones y sentidos permitidos’ — only the directions shown by the arrows are allowed (Catalogue, R-403a)." },
      sign: "R-403a" },
    { es: "A un turismo, ¿le está permitido circular con láminas adhesivas o cortinillas contra el sol en las ventanillas traseras?",
      prompt: { ru: "Можно ли легковому автомобилю ездить с солнцезащитной плёнкой или шторками на задних окнах?", en: "May a car be driven with adhesive films or sun blinds on the rear windows?" },
      options: [
        { es: "No, en ningún caso.", ru: "Нет, ни в коем случае.", en: "No, never." },
        { es: "Sí, en todo caso.", ru: "Да, в любом случае.", en: "Yes, in any case." },
        { es: "Solo si el vehículo lleva dos espejos retrovisores exteriores.", ru: "Только если у машины два наружных зеркала.", en: "Only if the vehicle has two exterior mirrors." }
      ],
      answer: 2,
      explain: { ru: "Затемнение задних стёкол допускается (сертифицированные плёнки), если у машины два наружных зеркала — тогда обзор назад обеспечен (RGC, ст. 19).", en: "Rear windows may be tinted (with approved film) if the car has two exterior mirrors, ensuring rear view (RGC art. 19)." } },
    { es: "¿Cuándo está permitido estacionar en un túnel?",
      prompt: { ru: "Когда разрешено стоять в тоннеле?", en: "When is parking in a tunnel allowed?" },
      options: [
        { es: "Cuando el túnel está suficientemente iluminado.", ru: "Когда тоннель хорошо освещён.", en: "When the tunnel is well lit." },
        { es: "Cuando la calzada tiene dos carriles de circulación para cada sentido.", ru: "Когда в каждую сторону две полосы.", en: "When there are two lanes each way." },
        { es: "Nunca.", ru: "Никогда.", en: "Never." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 91: в тоннелях остановка и стоянка запрещены; остановиться можно только в экстренном случае или по требованию движения.", en: "RGC art. 91: stopping and parking in tunnels are forbidden; you stop only in an emergency or when traffic forces you." } },
    { es: "En esta intersección con señal de STOP y buena visibilidad, ¿qué debe hacer?",
      prompt: { ru: "На этом перекрёстке со знаком STOP и хорошей видимостью что нужно делать?", en: "At this junction with a STOP sign and good visibility, what must you do?" },
      options: [
        { es: "Detenerse siempre una vez superada la línea transversal.", ru: "Всегда останавливаться, проехав поперечную линию.", en: "Always stop after passing the stop line." },
        { es: "Seguir circulando sin detenerse, porque no viene ningún vehículo de frente.", ru: "Ехать не останавливаясь, раз никто не едет навстречу.", en: "Keep going without stopping, as nothing is coming." },
        { es: "Detenerse siempre ante la línea transversal.", ru: "Всегда останавливаться перед поперечной линией.", en: "Always stop before the stop line." }
      ],
      answer: 2,
      explain: { ru: "STOP обязывает полностью остановиться перед линией остановки, даже при хорошей видимости, и уступить всем (RGC, ст. 151; Каталог, R-2).", en: "STOP requires a full stop before the line, even with good visibility, and giving way to all (RGC art. 151; Catalogue, R-2)." } },
    { es: "En una calzada de doble sentido de circulación en la que no están delimitados los carriles, está obligado a circular por...",
      prompt: { ru: "На двусторонней дороге без разметки полос вы обязаны ехать…", en: "On a two-way carriageway where lanes are not marked, you must drive…" },
      options: [
        { es: "el lugar de la calzada que crea más seguro.", ru: "там, где считаете безопаснее.", en: "where you think it safest." },
        { es: "la derecha, lo más cerca posible del borde de la calzada.", ru: "справа, как можно ближе к краю.", en: "on the right, as close as possible to the edge." },
        { es: "el eje imaginario de la calzada.", ru: "по воображаемой оси дороги.", en: "along the imaginary centre line." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 29: держаться правее, как можно ближе к краю проезжей части.", en: "RGC art. 29: keep to the right, as close as possible to the edge of the carriageway." } },
    { es: "En defecto de señalización, ¿cuál es la velocidad máxima que no deberán rebasar los vehículos en una autopista dentro de poblado?",
      prompt: { ru: "Если нет знаков, какую максимальную скорость нельзя превышать на автостраде в черте населённого пункта?", en: "Without signs, what is the maximum speed vehicles must not exceed on a motorway inside a built-up area?" },
      options: [
        { es: "50 km/h, pudiéndola superar en 20 km/h. para adelantar.", ru: "50 км/ч, и можно на 20 км/ч больше при обгоне.", en: "50 km/h, which may be exceeded by 20 km/h to overtake." },
        { es: "80 km/h.", ru: "80 км/ч.", en: "80 km/h." },
        { es: "50 km/h.", ru: "50 км/ч.", en: "50 km/h." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 50.6: общий лимит на автострадах и автомагистралях в черте города — 80 км/ч; «+20 при обгоне» в любом случае отменено.", en: "RGC art. 50.6: the generic limit on motorways inside built-up areas is 80 km/h; the ‘+20 when overtaking’ rule is abolished anyway." } },
    { es: "Con lluvia intensa, una motocicleta, ¿puede sufrir “aquaplaning”?",
      prompt: { ru: "Может ли мотоцикл в сильный дождь попасть в аквапланирование?", en: "In heavy rain, can a motorcycle aquaplane?" },
      options: [
        { es: "No; solo los turismos pueden sufrir “aquaplaning”.", ru: "Нет; это бывает только у легковых.", en: "No; only cars can aquaplane." },
        { es: "Solo si la motocicleta lleva sidecar", ru: "Только если у мотоцикла коляска.", en: "Only if it has a sidecar." },
        { es: "Sí, especialmente si circula a velocidad elevada.", ru: "Да, особенно на высокой скорости.", en: "Yes, especially at high speed." }
      ],
      answer: 2,
      explain: { ru: "Аквапланирование возможно у любого ТС: на скорости шина не успевает отводить воду и теряет контакт с дорогой.", en: "Any vehicle can aquaplane: at speed the tyre cannot clear water and loses contact with the road." } },
    { es: "Cuando el fondo de las señales de orientación es amarillo, indica que se circula por...",
      prompt: { ru: "Если фон указателей направлений жёлтый, вы едете по…", en: "When direction signs have a yellow background, you are on…" },
      options: [
        { es: "un tramo de vía en obras.", ru: "участку дорожных работ.", en: "a stretch of road works." },
        { es: "una vía para automóviles.", ru: "дороге для автомобилей.", en: "a road for motor vehicles." },
        { es: "un tramo de vía especialmente peligroso.", ru: "особо опасному участку.", en: "an especially dangerous stretch." }
      ],
      answer: 0,
      explain: { ru: "Жёлтый фон у знаков — временная сигнализация зоны работ (RGC, ст. 144).", en: "A yellow background marks temporary road-works signing (RGC art. 144)." } },
    { es: "Los paneles de mensaje variable, ¿pueden utilizarse para dar instrucciones de obligado cumplimiento?",
      prompt: { ru: "Можно ли использовать табло переменной информации для обязательных указаний?", en: "May variable-message signs give instructions that must be obeyed?" },
      options: [
        { es: "No, son meramente informativos.", ru: "Нет, они только информируют.", en: "No, they are merely informative." },
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No, solo pueden usarse para advertir de posibles peligros.", ru: "Нет, только для предупреждения об опасностях.", en: "No, they only warn of possible dangers." }
      ],
      answer: 1,
      explain: { ru: "Табло переменной информации могут показывать обязательные знаки (ограничения скорости, запреты), и их нужно выполнять (RGC, ст. 133 и 144).", en: "Variable-message signs can display mandatory signs (speed limits, bans), which must be obeyed (RGC arts. 133 and 144)." } },
    { es: "En una vía urbana, las operaciones de carga y descarga se realizarán...",
      prompt: { ru: "На городской улице погрузку и разгрузку проводят…", en: "On an urban road, loading and unloading are carried out…" },
      options: [
        { es: "depositando la mercancía en la calzada o en zonas peatonales.", ru: "оставляя груз на проезжей части или в пешеходных зонах.", en: "by putting the goods on the carriageway or pedestrian areas." },
        { es: "respetando las disposiciones que dicten las autoridades municipales.", ru: "соблюдая правила, установленные муниципалитетом.", en: "following the rules set by the municipal authorities." },
        { es: "por el lado del vehículo más alejado del borde de la calzada.", ru: "со стороны машины, дальней от края проезжей части.", en: "on the side of the vehicle furthest from the edge of the carriageway." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 16: погрузка-разгрузка — по местным правилам, вне проезжей части по возможности и со стороны, ближайшей к краю.", en: "RGC art. 16: loading follows local rules, off the carriageway where possible and on the side nearest the kerb." } },
    { es: "Conducir bajo los síntomas de una alergia respiratoria, ¿aumenta el riesgo de sufrir un accidente?",
      prompt: { ru: "Повышает ли риск аварии езда с симптомами респираторной аллергии?", en: "Does driving with the symptoms of a respiratory allergy increase the risk of an accident?" },
      options: [
        { es: "Sí, pero solo durante la primavera debido a la mayor presencia de polen.", ru: "Да, но только весной из-за пыльцы.", en: "Yes, but only in spring because of pollen." },
        { es: "No, el riesgo es el mismo que el de un conductor sin alergia respiratoria.", ru: "Нет, риск такой же, как у водителя без аллергии.", en: "No, the risk is the same as for a driver without allergy." },
        { es: "Sí, ya que puede verse alterada la capacidad para conducir con seguridad.", ru: "Да, способность безопасно водить может ухудшиться.", en: "Yes, because the ability to drive safely may be impaired." }
      ],
      answer: 2,
      explain: { ru: "Чихание, слезотечение и лекарства от аллергии снижают концентрацию и вызывают сонливость; посоветуйтесь с врачом о несонных препаратах.", en: "Sneezing, watery eyes and allergy medicines reduce concentration and cause drowsiness; ask your doctor about non-drowsy options." } },
    { es: "Los resaltos en los pasos para peatones, ¿se consideran obstáculos en la calzada?",
      prompt: { ru: "Считаются ли приподнятые пешеходные переходы (resaltos) препятствиями на проезжей части?", en: "Are raised humps at pedestrian crossings considered obstacles on the carriageway?" },
      options: [
        { es: "Sí, cuando son metálicos.", ru: "Да, если они металлические.", en: "Yes, when they are metal." },
        { es: "Sí, puesto que dificultan el cruce de los pasos de peatones.", ru: "Да, они мешают переходить.", en: "Yes, as they hinder crossing." },
        { es: "No, siempre que garanticen la seguridad vial de los usuarios y especialmente de los ciclistas.", ru: "Нет, если они обеспечивают безопасность участников, особенно велосипедистов.", en: "No, as long as they guarantee road users’ safety, especially cyclists’." }
      ],
      answer: 2,
      explain: { ru: "Лежачие полицейские и приподнятые переходы — законные средства успокоения движения, если они соответствуют нормам и безопасны, в том числе для велосипедистов.", en: "Humps and raised crossings are lawful traffic-calming measures if they meet the standards and are safe, including for cyclists." } },
    { es: "En caso de producirse un incendio en el interior de un túnel, ¿qué medida de seguridad, entre otras, adoptará el conductor?",
      prompt: { ru: "Что, среди прочего, должен сделать водитель при пожаре в тоннеле?", en: "If a fire breaks out inside a tunnel, what safety measure, among others, should the driver take?" },
      options: [
        { es: "Apartará su vehículo a la derecha para dejar paso a los servicios de emergencia.", ru: "Прижать машину вправо, чтобы пропустить экстренные службы.", en: "Move the vehicle to the right to let emergency services through." },
        { es: "Apagará el motor del vehículo y permanecerá en su interior.", ru: "Заглушить двигатель и остаться в машине.", en: "Switch off the engine and stay inside." },
        { es: "Dejará arrancado el motor de su vehículo y abandonará el túnel.", ru: "Не глушить двигатель и покинуть тоннель.", en: "Leave the engine running and leave the tunnel." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 97.3: при пожаре прижаться вправо, заглушить двигатель, оставить ключ и открытые двери и уйти к убежищу или выходу, в сторону от огня.", en: "RGC art. 97.3: in a fire pull to the right, switch off, leave the key in and doors open, and walk to a refuge or exit away from the fire." } },
    { es: "En caso de condiciones meteorológicas muy desfavorables, como lluvia muy intensa, ¿se puede circular con la luz antiniebla trasera encendida?",
      prompt: { ru: "При очень неблагоприятной погоде, например очень сильном дожде, можно ли ехать с задним противотуманным фонарём?", en: "In very unfavourable conditions such as very heavy rain, may you drive with the rear fog light on?" },
      options: [
        { es: "No, solo puede utilizarse con niebla densa.", ru: "Нет, только в густой туман.", en: "No, only in thick fog." },
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "Sí, aunque su uso es opcional.", ru: "Да, но это по желанию.", en: "Yes, though its use is optional." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 106.2: очень сильный дождь — один из случаев, когда задний противотуманный включают.", en: "RGC art. 106.2: very heavy rain is one of the conditions for using the rear fog light." } },
    { es: "Esta señal prohíbe...",
      prompt: { ru: "Этот знак запрещает…", en: "This sign prohibits…" },
      options: [
        { es: "la parada los días indicados en la señal.", ru: "остановку в указанные дни.", en: "stopping on the days shown." },
        { es: "la parada y el estacionamiento.", ru: "остановку и стоянку.", en: "stopping and parking." },
        { es: "el estacionamiento desde las 9 horas del día 16 hasta las 9 horas del día 1.", ru: "стоянку с 9 часов 16-го числа до 9 часов 1-го.", en: "parking from 9:00 on the 16th until 9:00 on the 1st." }
      ],
      answer: 2,
      explain: { ru: "R-308d — стоянка запрещена во вторую половину месяца: с 9:00 16-го до 9:00 1-го числа следующего месяца; остановку не запрещает (Каталог, R-308d).", en: "R-308d bans parking in the second half of the month: from 9:00 on the 16th to 9:00 on the 1st of the next month; stopping is allowed (Catalogue, R-308d)." },
      sign: "R-308d" },
    { es: "En una carretera convencional que transcurre fuera de poblado, ¿cuál es la velocidad máxima que le está permitido alcanzar a un turismo para adelantar?",
      prompt: { ru: "На обычной загородной дороге какую максимальную скорость может развить легковой автомобиль при обгоне?", en: "On a conventional road outside built-up areas, what is the maximum speed a car may reach to overtake?" },
      options: [
        { es: "120 km/h", ru: "120 км/ч", en: "120 km/h" },
        { es: "110 km/h.", ru: "110 км/ч.", en: "110 km/h." },
        { es: "90 km/h.", ru: "90 км/ч.", en: "90 km/h." }
      ],
      answer: 2,
      explain: { ru: "Правило изменилось: с 21 марта 2022 года при обгоне нельзя превышать лимит (отменена RGC, ст. 51), поэтому максимум — 90 км/ч (ст. 48). Журнал (2021) отвечал 110.", en: "The rule has changed: since 21 March 2022 you may not exceed the limit to overtake (RGC art. 51 repealed), so the maximum is 90 km/h (art. 48). The magazine (2021) gave 110." } },
    { es: "Los vehículos para personas con movilidad reducida, si no existe vía o parte de ella que les está especialmente destinada...",
      prompt: { ru: "Транспорт для людей с ограниченной подвижностью, если нет специально отведённой для них дороги или её части…", en: "Vehicles for people with reduced mobility, where there is no road or part of it intended for them…" },
      options: [
        { es: "deben circular por el arcén, siempre que sea transitable y suficiente.", ru: "должен ехать по обочине, если она пригодна и достаточна.", en: "must use the shoulder, if it is passable and wide enough." },
        { es: "pueden circular por autopista.", ru: "может ехать по автостраде.", en: "may use motorways." },
        { es: "pueden circular por autovía.", ru: "может ехать по автомагистрали.", en: "may use autovías." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 36: такие ТС обязаны ехать по пригодной правой обочине; на автострады и автомагистрали им нельзя (ст. 38).", en: "RGC art. 36: such vehicles must use a usable right shoulder; they may not use motorways (art. 38)." } },
    { es: "La marca vial es continua; ¿está permitido adelantar?",
      prompt: { ru: "Разметка сплошная. Разрешён ли обгон?", en: "The road marking is solid; is overtaking allowed?" },
      options: [
        { es: "Sí, porque el camión circula despacio.", ru: "Да, ведь грузовик едет медленно.", en: "Yes, because the lorry is slow." },
        { es: "No, porque la marca vial lo prohíbe.", ru: "Нет, это запрещает разметка.", en: "No, because the marking forbids it." },
        { es: "No, porque la vía no tiene arcén.", ru: "Нет, потому что нет обочины.", en: "No, because the road has no shoulder." }
      ],
      answer: 1,
      explain: { ru: "Сплошную линию пересекать нельзя, поэтому обгон с выездом на встречную запрещён (RGC, ст. 167).", en: "A solid line may not be crossed, so overtaking that requires it is forbidden (RGC art. 167)." } },
    { es: "Para ahorrar carburante, ¿dónde se debe cargar el equipaje?",
      prompt: { ru: "Чтобы экономить топливо, куда класть багаж?", en: "To save fuel, where should luggage be carried?" },
      options: [
        { es: "En el maletero.", ru: "В багажник.", en: "In the boot." },
        { es: "En la baca.", ru: "На верхний багажник.", en: "On the roof rack." },
        { es: "En el maletero o en la baca, es indistinto.", ru: "Всё равно.", en: "Boot or roof rack, it makes no difference." }
      ],
      answer: 0,
      explain: { ru: "Груз на крыше увеличивает сопротивление воздуха и расход; лучше — в багажнике.", en: "A roof load increases air resistance and consumption; the boot is better." } },
    { es: "Para circular con mayor seguridad...",
      prompt: { ru: "Чтобы ехать безопаснее…", en: "To drive more safely…" },
      options: [
        { es: "el vehículo debe estar en perfecto estado pero no es necesario que lo esté el conductor.", ru: "машина должна быть исправна, а водитель — не обязательно.", en: "the vehicle must be in perfect condition but not necessarily the driver." },
        { es: "el conductor debe estar en perfecto estado pero no es necesario que lo esté el vehículo.", ru: "водитель должен быть в форме, а машина — не обязательно.", en: "the driver must be in perfect condition but not necessarily the vehicle." },
        { es: "tanto el conductor como el vehículo deben estar en perfecto estado.", ru: "и водитель, и машина должны быть в отличном состоянии.", en: "both driver and vehicle must be in perfect condition." }
      ],
      answer: 2,
      explain: { ru: "Безопасность зависит и от человека, и от машины, и от дороги.", en: "Safety depends on the person, the vehicle and the road." } },
    { es: "En caso de niebla espesa, ¿qué luces debe utilizar el conductor de un turismo?",
      prompt: { ru: "Какие огни должен включить водитель легкового в густом тумане?", en: "In thick fog, which lights should a car driver use?" },
      options: [
        { es: "Las luces antiniebla delanteras y las de emergencia.", ru: "Передние противотуманные и аварийку.", en: "The front fog lights and the hazard lights." },
        { es: "Las luces antiniebla, las de posición y las de emergencia.", ru: "Противотуманные, габаритные и аварийку.", en: "The fog lights, side lights and hazard lights." },
        { es: "Las luces antiniebla, las de posición y las de corto alcance.", ru: "Противотуманные, габаритные и ближний свет.", en: "The fog lights, side lights and dipped beam." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 106: в густом тумане — передние противотуманные (или ближний), задний противотуманный и габариты; аварийка при движении не для этого.", en: "RGC art. 106: in thick fog — front fog lights (or dipped beam), rear fog light and side lights; hazard lights are not for driving in fog." } },
    { es: "En esta intersección con “circulación giratoria”, que no es glorieta, ¿a qué vehículos debe ceder el paso?",
      prompt: { ru: "На этом перекрёстке с «круговым движением», который не является кольцевой развязкой (glorieta), кому нужно уступить?", en: "At this junction with ‘rotary traffic’ that is not a roundabout, which vehicles must you give way to?" },
      options: [
        { es: "A los que entren por la izquierda.", ru: "Тем, кто въезжает слева.", en: "Those entering from the left." },
        { es: "A los que entren por la derecha.", ru: "Тем, кто въезжает справа.", en: "Those entering from the right." },
        { es: "A los que están girando alrededor de la isleta.", ru: "Тем, кто едет вокруг островка.", en: "Those already going round the island." }
      ],
      answer: 1,
      explain: { ru: "Преимущество находящихся на кольце действует только на glorieta (RGC, ст. 57.1.c); на прочих перекрёстках — общее правило «помеха справа».", en: "Priority for vehicles already on the ring applies only at a glorieta (RGC art. 57.1.c); elsewhere the general give-way-to-the-right rule applies." } },
    { es: "Una exposición continuada del vehículo a temperaturas elevadas, puede provocar un deterioro mayor de las gomas de las escobillas de los limpiaparabrisas. ¿Cuáles son los efectos más comunes?",
      prompt: { ru: "Если машина постоянно стоит на жаре, резина щёток стеклоочистителя портится быстрее. Какие последствия чаще всего?", en: "Continuous exposure to high temperatures can make wiper rubbers deteriorate faster. What are the most common effects?" },
      options: [
        { es: "Se reblandecen y pierden elasticidad.", ru: "Размягчается и теряет упругость.", en: "They soften and lose elasticity." },
        { es: "Se endurecen y se agrietan.", ru: "Твердеет и трескается.", en: "They harden and crack." },
        { es: "Se dilatan y ejercen mayor presión sobre el cristal.", ru: "Расширяется и сильнее давит на стекло.", en: "They expand and press harder on the glass." }
      ],
      answer: 1,
      explain: { ru: "От жары резина щёток твердеет и трескается — они перестают чисто протирать стекло. Менять их советуют хотя бы раз в два года.", en: "Heat hardens and cracks wiper rubber so it stops wiping cleanly. Replace the blades at least every two years." } },
    { es: "¿Cuál es la función del freno de mano?",
      prompt: { ru: "Какая функция у ручного тормоза?", en: "What is the handbrake for?" },
      options: [
        { es: "Reducir la velocidad del vehículo en ciudad.", ru: "Снижать скорость в городе.", en: "To slow the vehicle in town." },
        { es: "Inmovilizar el vehículo al estacionar.", ru: "Удерживать машину неподвижной на стоянке.", en: "To keep the vehicle stationary when parked." },
        { es: "Reducir la velocidad del vehículo cuando circule por una vía con una pendiente prolongada.", ru: "Снижать скорость на длинном спуске.", en: "To slow the vehicle on a long descent." }
      ],
      answer: 1,
      explain: { ru: "Стояночный тормоз удерживает стоящую машину; на спуске тормозят основным тормозом и двигателем.", en: "The parking brake holds a stationary vehicle; on descents use the footbrake and engine braking." } },
    { es: "¿Qué debe hacer para avisar de que va a disminuir la velocidad de su vehículo de modo considerable?",
      prompt: { ru: "Что нужно сделать, чтобы предупредить, что вы сильно снизите скорость?", en: "What should you do to warn that you are going to slow down considerably?" },
      options: [
        { es: "Encender las luces de posición.", ru: "Включить габаритные огни.", en: "Switch on the side lights." },
        { es: "Encender el intermitente izquierdo.", ru: "Включить левый поворотник.", en: "Switch on the left indicator." },
        { es: "Pisar varias veces el pedal de freno.", ru: "Несколько раз нажать на педаль тормоза.", en: "Press the brake pedal several times." }
      ],
      answer: 2,
      explain: { ru: "Повторное нажатие на тормоз мигает стоп-сигналами и предупреждает идущих сзади (RGC, ст. 109).", en: "Pumping the brake flashes the brake lights and warns those behind (RGC art. 109)." } },
    { es: "En el supuesto en el que existan dos señales del mismo tipo con indicaciones que parezcan estar en contradicción, ¿cuál de ellas tendrá prioridad?",
      prompt: { ru: "Если два знака одного типа как будто противоречат друг другу, какой главнее?", en: "If two signs of the same type appear to contradict each other, which takes precedence?" },
      options: [
        { es: "La más restrictiva.", ru: "Более строгий.", en: "The more restrictive." },
        { es: "La menos restrictiva.", ru: "Менее строгий.", en: "The less restrictive." },
        { es: "La más próxima.", ru: "Ближайший.", en: "The nearest." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 133.2: между знаками одного типа главнее более строгий.", en: "RGC art. 133.2: between signs of the same type the more restrictive prevails." } },
    { es: "¿Qué debe hacer si se ve obligado a detener su vehículo en el interior de un túnel por motivos de circulación?",
      prompt: { ru: "Что делать, если из-за движения пришлось остановиться в тоннеле?", en: "What should you do if traffic forces you to stop inside a tunnel?" },
      options: [
        { es: "Encender la señal de emergencia y las luces de carretera.", ru: "Включить аварийку и дальний свет.", en: "Switch on the hazard lights and main beam." },
        { es: "Detenerse lo más lejos posible del vehículo de delante.", ru: "Остановиться как можно дальше от машины впереди.", en: "Stop as far as possible from the vehicle in front." },
        { es: "Detenerse lo más cerca posible del vehículo de delante.", ru: "Остановиться как можно ближе к машине впереди.", en: "Stop as close as possible to the vehicle in front." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 97.3: при остановке в тоннеле из-за пробки держатся как можно дальше от передней машины, остаются в салоне, ненадолго включают аварийку, оставляют габариты и глушат двигатель.", en: "RGC art. 97.3: when held up in a tunnel keep as far as possible from the car ahead, stay inside, briefly use the hazard lights, keep side lights on and switch off the engine." } },
    { es: "¿Cómo hay que colocarse el cinturón de seguridad?",
      prompt: { ru: "Как нужно надевать ремень безопасности?", en: "How should the seat belt be worn?" },
      options: [
        { es: "Muy ajustado, aunque apriete un poco, para que sujete mejor.", ru: "Очень туго, даже если немного давит, чтобы лучше держал.", en: "Very tight, even if it pinches a little, to hold better." },
        { es: "Flojo y con holgura, para poder llegar a todo el habitáculo del vehículo.", ru: "Свободно, чтобы дотягиваться до всего в салоне.", en: "Loose, so you can reach the whole cabin." },
        { es: "Ajustado al cuerpo, ni muy apretado ni flojo, y sin que esté retorcido.", ru: "Плотно к телу, не слишком туго и не слабо, без перекручивания.", en: "Snug against the body, neither too tight nor loose, and not twisted." }
      ],
      answer: 2,
      explain: { ru: "Ремень прилегает плотно, без провисания и перекручивания: плечевая лямка — через ключицу, поясная — низко на тазу.", en: "The belt fits snugly with no slack or twist: shoulder strap across the collarbone, lap strap low on the hips." } },
    { es: "¿Con qué objetivo se establecen los límites de velocidad?",
      prompt: { ru: "Зачем устанавливают ограничения скорости?", en: "What are speed limits set for?" },
      options: [
        { es: "Para garantizar la máxima seguridad y fluidez.", ru: "Чтобы обеспечить максимум безопасности и пропускной способности.", en: "To ensure maximum safety and traffic flow." },
        { es: "Para garantizar la máxima fluidez, aunque disminuya la seguridad.", ru: "Чтобы обеспечить максимум пропускной способности, даже ценой безопасности.", en: "To ensure maximum flow, even at the cost of safety." },
        { es: "Para garantizar la máxima seguridad, aunque disminuya la fluidez", ru: "Чтобы обеспечить максимум безопасности, даже ценой пропускной способности.", en: "To ensure maximum safety, even at the cost of flow." }
      ],
      answer: 0,
      explain: { ru: "Лимиты сочетают безопасность и плавность движения для конкретной дороги.", en: "Limits balance safety and smooth traffic flow for each road." } },
    { es: "El consumo de drogas de abuso o ilegales, ¿puede alterar la percepción del riesgo?",
      prompt: { ru: "Может ли употребление наркотиков изменить восприятие риска?", en: "Can the use of illegal drugs alter risk perception?" },
      options: [
        { es: "Sí, aumenta y el conductor percibe mejor las situaciones de riesgo.", ru: "Да, оно усиливается, водитель лучше видит опасность.", en: "Yes, it increases and the driver perceives risk better." },
        { es: "Sí, disminuye y el conductor percibe peor las situaciones de riesgo.", ru: "Да, оно снижается, водитель хуже видит опасность.", en: "Yes, it decreases and the driver perceives risk worse." },
        { es: "No; el consumo de drogas no altera la percepción del riesgo.", ru: "Нет; наркотики не влияют на восприятие риска.", en: "No; drugs do not alter risk perception." }
      ],
      answer: 1,
      explain: { ru: "Наркотики притупляют восприятие опасности и дают ложное чувство контроля.", en: "Drugs dull the sense of danger and give a false feeling of control." } },
    { es: "Para incorporarse a la circulación, ¿se puede dar marcha atrás?",
      prompt: { ru: "Можно ли сдать назад, чтобы влиться в движение?", en: "May you reverse in order to join traffic?" },
      options: [
        { es: "Sí, es una de las maniobras en las que está permitido.", ru: "Да, это один из разрешённых случаев.", en: "Yes, it is one of the manoeuvres in which it is allowed." },
        { es: "No, en ningún caso.", ru: "Нет, ни в коем случае.", en: "No, never." },
        { es: "Sí, pero solo en vías urbanas.", ru: "Да, но только в городе.", en: "Yes, but only on urban roads." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 80: задний ход разрешён, когда нельзя ехать вперёд, и как дополнительный манёвр при остановке, стоянке или начале движения.", en: "RGC art. 80: reversing is allowed when you cannot go forward, and as a supplementary manoeuvre to stop, park or join traffic." } },
    { es: "Una vez iniciado el adelantamiento, se producen circunstancias que hacen difícil su finalización sin provocar riesgos; ¿qué está obligado a hacer el conductor?",
      prompt: { ru: "Обгон начат, но возникли обстоятельства, из-за которых его трудно закончить без риска. Что обязан сделать водитель?", en: "Once overtaking has begun, circumstances make it hard to finish safely; what must the driver do?" },
      options: [
        { es: "Aumentar la velocidad para finalizar el adelantamiento.", ru: "Ускориться, чтобы закончить обгон.", en: "Speed up to finish overtaking." },
        { es: "Advertir del riesgo al vehículo al que pretende adelantar para que detenga su marcha.", ru: "Предупредить обгоняемого, чтобы он остановился.", en: "Warn the vehicle being overtaken so it stops." },
        { es: "Reducir la velocidad y regresar a su carril sin obstaculizar.", ru: "Снизить скорость и вернуться в свою полосу, никому не мешая.", en: "Slow down and return to his lane without obstructing." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 85.2: если обгон стал опасным, его прерывают: снижают скорость и возвращаются в свою полосу, показав сигнал.", en: "RGC art. 85.2: if overtaking becomes dangerous, abandon it: slow down and move back, signalling." } },
    { es: "En los lugares donde se impida la visibilidad de la señalización a los usuarios a quienes les afecta está prohibido...",
      prompt: { ru: "Там, где машина закрывала бы знаки для тех, к кому они относятся, запрещено…", en: "Where it would block other users’ view of the signs that apply to them, it is forbidden to…" },
      options: [
        { es: "parar, pero está permitido estacionar.", ru: "останавливаться, но можно стоять.", en: "stop, but parking is allowed." },
        { es: "estacionar, pero está permitido parar.", ru: "стоять, но можно останавливаться.", en: "park, but stopping is allowed." },
        { es: "parar y estacionar.", ru: "останавливаться и стоять.", en: "stop and park." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 91 и 94: запрещено останавливаться и стоять там, где машина закрывает видимость знаков.", en: "RGC arts. 91 and 94: stopping and parking are forbidden where the vehicle would hide signs from other road users." } },
    { es: "Un conductor con sueño...",
      prompt: { ru: "Водитель, которого клонит в сон…", en: "A sleepy driver…" },
      options: [
        { es: "tarda menos tiempo en reaccionar.", ru: "реагирует быстрее.", en: "takes less time to react." },
        { es: "analiza situaciones de tráfico complejas en menos tiempo.", ru: "быстрее анализирует сложные ситуации.", en: "analyses complex situations faster." },
        { es: "tarda más tiempo en reaccionar.", ru: "реагирует медленнее.", en: "takes longer to react." }
      ],
      answer: 2,
      explain: { ru: "Сонливость увеличивает время реакции и может привести к «микросну» — нужно остановиться и отдохнуть.", en: "Drowsiness lengthens reaction time and can lead to micro-sleeps — stop and rest." } },
    { es: "Los sistemas de navegación, ¿pueden ayudarnos a controlar la velocidad de circulación?",
      prompt: { ru: "Могут ли навигационные системы помочь контролировать скорость?", en: "Can navigation systems help us control our speed?" },
      options: [
        { es: "Solo cuando se circula a velocidades superiores a 100 km/h.", ru: "Только на скорости выше 100 км/ч.", en: "Only above 100 km/h." },
        { es: "No, los sistemas de navegación no ayudan a controlar la velocidad.", ru: "Нет, они не помогают контролировать скорость.", en: "No, they do not help control speed." },
        { es: "Sí, aunque la principal fuente de información debe de ser siempre el velocímetro.", ru: "Да, но главным источником всегда должен быть спидометр.", en: "Yes, although the speedometer must always be the main source." }
      ],
      answer: 2,
      explain: { ru: "Навигатор может показывать лимиты и предупреждать о превышении, но главный прибор — спидометр, а настраивать его на ходу нельзя.", en: "A navigator can show limits and warn when speeding, but the speedometer is the main instrument, and it must not be fiddled with on the move." } },
    { es: "En un turismo, ¿cuántos chalecos reflectantes es obligatorio llevar?",
      prompt: { ru: "Сколько светоотражающих жилетов обязательно иметь в легковом автомобиле?", en: "In a car, how many reflective vests must you carry?" },
      options: [
        { es: "Uno.", ru: "Один.", en: "One." },
        { es: "Dos: uno para el conductor y otro para el acompañante.", ru: "Два: для водителя и пассажира.", en: "Two: one for the driver and one for the passenger." },
        { es: "Uno por cada plaza autorizada de que disponga el vehículo.", ru: "По одному на каждое место.", en: "One per authorised seat." }
      ],
      answer: 0,
      explain: { ru: "Обязателен один жилет для водителя, в салоне под рукой; иметь больше — рекомендуется.", en: "One vest for the driver is compulsory, kept within reach in the cabin; more is recommended." } },
    { es: "Queda atascado con su turismo en una zona de barro donde patinan las ruedas motrices. ¿Cuál es la forma más adecuada de actuar para seguir circulando?",
      prompt: { ru: "Ваша машина застряла в грязи, ведущие колёса буксуют. Как лучше поступить, чтобы поехать дальше?", en: "Your car is stuck in mud and the driven wheels are spinning. What is the best way to get moving?" },
      options: [
        { es: "Pisar a fondo el pedal acelerador para conseguir mayor tracción en las ruedas y así lograr mayor adherencia", ru: "Нажать газ до упора, чтобы увеличить тягу и сцепление.", en: "Floor the accelerator for more traction and grip." },
        { es: "Preparar un terreno estable colocando el material adecuado cerca de las ruedas motrices para que estas tengan la adherencia suficiente.", ru: "Подложить подходящий материал под ведущие колёса, чтобы у них было сцепление.", en: "Make firm ground by placing suitable material by the driven wheels so they get enough grip." },
        { es: "Empujar el vehículo por uno de los laterales hacia una mejor superficie con adherencia.", ru: "Толкать машину вбок на поверхность получше.", en: "Push the vehicle sideways onto a better surface." }
      ],
      answer: 1,
      explain: { ru: "Резкий газ закапывает колёса глубже; под ведущие колёса подкладывают камни, доски и т. п., можно разгрузить машину.", en: "Flooring it digs the wheels deeper; place stones, boards and the like under the driven wheels, and lighten the car if possible." } },
    { es: "Si el pasajero de una motocicleta no utiliza el casco de protección, la responsabilidad es del...",
      prompt: { ru: "Если пассажир мотоцикла не надел шлем, кто отвечает?", en: "If a motorcycle passenger does not wear a helmet, who is responsible?" },
      options: [
        { es: "conductor.", ru: "Водитель.", en: "The rider." },
        { es: "pasajero.", ru: "Пассажир.", en: "The passenger." },
        { es: "titular del vehículo.", ru: "Владелец машины.", en: "The vehicle owner." }
      ],
      answer: 0,
      explain: { ru: "LSV, ст. 82.a: за отсутствие шлема у пассажира отвечает водитель мотоцикла.", en: "LSV art. 82.a: the rider is responsible for a passenger not wearing a helmet." } },
    { es: "¿Qué precaución puede adoptar para evitar el riesgo de atropello a ciclistas?",
      prompt: { ru: "Какая мера помогает избежать наезда на велосипедистов?", en: "What precaution helps avoid hitting cyclists?" },
      options: [
        { es: "Iniciar un adelantamiento cuando se acerque un grupo de ciclistas en sentido contrario.", ru: "Начинать обгон, когда навстречу едет группа велосипедистов.", en: "Start overtaking when a group of cyclists is coming the other way." },
        { es: "Utilizar señales luminosas para avisar de su propósito de adelantarles.", ru: "Мигать фарами, предупреждая о намерении обогнать.", en: "Flash your lights to warn you intend to overtake." },
        { es: "No hacer señales acústicas cerca de ellos.", ru: "Не сигналить рядом с ними.", en: "Do not sound the horn close to them." }
      ],
      answer: 2,
      explain: { ru: "Резкий сигнал рядом может испугать велосипедиста; обгонять встречную группу нельзя, если это опасно для неё (RGC, ст. 85.4).", en: "A sudden horn close by can startle a cyclist; overtaking is forbidden when it endangers an oncoming group (RGC art. 85.4)." } },
    { es: "El seguro de suscripción obligatoria, ¿cubre los daños causados al conductor no culpable de un accidente?",
      prompt: { ru: "Покрывает ли обязательное страхование ущерб, причинённый невиновному водителю?", en: "Does compulsory insurance cover damage caused to the driver who was not at fault?" },
      options: [
        { es: "Sí, los daños personales, pero no los materiales.", ru: "Да, вред здоровью, но не материальный ущерб.", en: "Yes, personal injury but not material damage." },
        { es: "Sí, tanto los daños personales como los materiales.", ru: "Да, и вред здоровью, и материальный ущерб.", en: "Yes, both personal injury and material damage." },
        { es: "No, ni los daños personales ni los materiales.", ru: "Нет, ни то, ни другое.", en: "No, neither." }
      ],
      answer: 1,
      explain: { ru: "Страховка виновника покрывает и вред здоровью, и материальный ущерб пострадавшего невиновного водителя (в пределах лимитов).", en: "The at-fault driver’s insurance covers the innocent driver’s injuries and material damage (within limits)." } },
    { es: "Esta señal indica que se acerca a un cruce...",
      prompt: { ru: "Этот знак предупреждает, что вы приближаетесь к перекрёстку…", en: "This sign indicates you are approaching a junction…" },
      options: [
        { es: "Sin preferencia de paso.", ru: "без преимущества.", en: "without priority." },
        { es: "Con preferencia de paso.", ru: "с преимуществом.", en: "with priority." },
        { es: "Con una vía estrecha.", ru: "с узкой дорогой.", en: "with a narrow road." }
      ],
      answer: 1,
      explain: { ru: "P-1b «Intersección con prioridad sobre vía a la izquierda» — выезжающие слева уступают вам (Каталог, P-1b).", en: "P-1b ‘Intersección con prioridad sobre vía a la izquierda’ — traffic from the side road on the left must give way to you (Catalogue, P-1b)." },
      sign: "P-1b" },
    { es: "¿Influye la velocidad en el campo visual del conductor?",
      prompt: { ru: "Влияет ли скорость на поле зрения водителя?", en: "Does speed affect the driver’s field of vision?" },
      options: [
        { es: "Sí; el campo visual disminuye al aumentar la velocidad.", ru: "Да; при росте скорости поле зрения сужается.", en: "Yes; the visual field narrows as speed increases." },
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí; el campo visual se amplía al aumentar la velocidad.", ru: "Да; при росте скорости поле зрения расширяется.", en: "Yes; the visual field widens as speed increases." }
      ],
      answer: 0,
      explain: { ru: "Чем выше скорость, тем уже поле зрения («туннельное зрение»).", en: "The higher the speed, the narrower the field of vision (‘tunnel vision’)." } },
    { es: "A una vía así señalizada, ¿qué vehículos no pueden acceder?",
      prompt: { ru: "На дорогу с таким знаком каким ТС нельзя въезжать?", en: "On a road signed like this, which vehicles may not enter?" },
      options: [
        { es: "Turismos.", ru: "Легковым.", en: "Cars." },
        { es: "Bicicletas.", ru: "Велосипедам.", en: "Bicycles." },
        { es: "Motocicletas.", ru: "Мотоциклам.", en: "Motorcycles." }
      ],
      answer: 1,
      explain: { ru: "R-114 «Entrada prohibida a ciclos» — запрещён въезд велосипедам (Каталог, R-114).", en: "R-114 ‘Entrada prohibida a ciclos’ — no entry for cycles (Catalogue, R-114)." },
      sign: "R-114" },
    { es: "Tomar un café o un té, ¿son estrategias eficaces para reducir la tasa de alcoholemia?",
      prompt: { ru: "Помогают ли кофе или чай снизить уровень алкоголя?", en: "Are coffee or tea effective ways to lower blood alcohol?" },
      options: [
        { es: "No.", ru: "Нет.", en: "No." },
        { es: "Sí.", ru: "Да.", en: "Yes." },
        { es: "No, pero masticar café en grano sí reduce la tasa de alcoholemia.", ru: "Нет, но жевать кофейные зёрна помогает.", en: "No, but chewing coffee beans does." }
      ],
      answer: 0,
      explain: { ru: "Алкоголь выводится только со временем (печенью); кофе, чай, душ или жвачка уровень не снижают.", en: "Alcohol leaves only with time (via the liver); coffee, tea, showers or chewing gum do not lower it." } },
    { es: "El accidente más frecuente por el uso del teléfono móvil mientras se conduce es...",
      prompt: { ru: "Какая авария чаще всего случается из-за телефона за рулём?", en: "The most frequent accident caused by using a mobile phone while driving is…" },
      options: [
        { es: "La salida de la vía.", ru: "Съезд с дороги.", en: "Running off the road." },
        { es: "El choque frontolateral.", ru: "Боковое столкновение.", en: "A side-front collision." },
        { es: "El alcance.", ru: "Наезд сзади.", en: "A rear-end collision." }
      ],
      answer: 0,
      explain: { ru: "Отвлечение на телефон чаще всего приводит к съезду с дороги; держать телефон за рулём — −6 баллов с 2022 года.", en: "Phone distraction most often leads to running off the road; holding a phone while driving costs 6 points since 2022." } },
    { es: "¿Por qué es aconsejable circular en vías urbanas respetando en todo momento la velocidad establecida para cada tramo de vía?",
      prompt: { ru: "Почему в городе стоит всегда соблюдать скорость, установленную для каждого участка?", en: "Why is it advisable on urban roads to keep to the speed set for each stretch at all times?" },
      options: [
        { es: "Porque el motor del vehículo consume menos combustible si trabaja a altas revoluciones.", ru: "Двигатель тратит меньше топлива на высоких оборотах.", en: "The engine uses less fuel at high revs." },
        { es: "Porque las multas por exceso de velocidad en vías urbanas son más caras que en vías interurbanas.", ru: "Штрафы за превышение в городе дороже, чем за городом.", en: "Speeding fines are higher in town than outside." },
        { es: "Porque la mayoría de los atropellos con muerte del peatón se producen en vías urbanas.", ru: "Большинство смертельных наездов на пешеходов происходит в городе.", en: "Most fatal pedestrian accidents happen on urban roads." }
      ],
      answer: 2,
      explain: { ru: "В городе больше всего уязвимых участников: при 30 км/ч пешеход обычно выживает, при 50 — гораздо реже (общие лимиты 20/30/50 — RGC, ст. 50).", en: "Towns have the most vulnerable road users: at 30 km/h a pedestrian usually survives, at 50 far less often (generic limits 20/30/50 — RGC art. 50)." } },
    { es: "El efecto submarino, que en un accidente de tráfico puede provocar graves lesiones al conductor, está relacionado con...",
      prompt: { ru: "«Эффект подныривания», который при аварии может вызвать серьёзные травмы водителя, связан с…", en: "The submarine effect, which can cause serious injuries to the driver in a crash, is linked to…" },
      options: [
        { es: "Una incorrecta presión de los neumáticos.", ru: "Неправильным давлением в шинах.", en: "Incorrect tyre pressure." },
        { es: "Un mal uso del cinturón de seguridad.", ru: "Неправильным использованием ремня безопасности.", en: "Misuse of the seat belt." },
        { es: "Un consumo excesivo de alcohol, medicamentos o drogas de abuso.", ru: "Чрезмерным употреблением алкоголя, лекарств или наркотиков.", en: "Excessive alcohol, medicine or drug use." }
      ],
      answer: 1,
      explain: { ru: "При неправильно надетом или провисшем ремне тело выскальзывает под поясную лямку, и она травмирует живот.", en: "With a badly worn or slack belt the body slides under the lap strap, which injures the abdomen." } },
    { es: "En este caso en que la señalización se contradice, prevalece la señal...",
      prompt: { ru: "В этом случае, когда сигналы противоречат друг другу, главнее сигнал…", en: "In this case where the signals contradict each other, which prevails?" },
      options: [
        { es: "Más restrictiva.", ru: "Более строгий.", en: "The more restrictive." },
        { es: "Realizada con el brazo", ru: "Поданный рукой.", en: "The one made with the arm." },
        { es: "Luminosa.", ru: "Световой.", en: "The light signal." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 108.2: сигналы рукой, если их видно, отменяют противоречащие им световые.", en: "RGC art. 108.2: visible arm signals cancel any contradicting light signal." } },
    { es: "En una vía urbana de sentido único, está permitido estacionar en el lado...",
      prompt: { ru: "На городской улице с односторонним движением можно ставить машину…", en: "On a one-way urban street, parking is allowed on…" },
      options: [
        { es: "Derecho.", ru: "Справа.", en: "The right." },
        { es: "Derecho o izquierdo, fuera de la calzada o del arcén.", ru: "Справа или слева, вне проезжей части или обочины.", en: "Right or left, off the carriageway or shoulder." },
        { es: "Derecho o izquierdo.", ru: "Справа или слева.", en: "Right or left." }
      ],
      answer: 2,
      explain: { ru: "RGC, ст. 90: в населённых пунктах на улицах с односторонним движением можно стоять с обеих сторон, если не запрещено.", en: "RGC art. 90: in built-up areas, on one-way streets, you may park on both sides unless prohibited." } },
    { es: "Si aún no ha salido el sol pero existe buena visibilidad, ¿qué alumbrado debe utilizar si circula por una vía interurbana?",
      prompt: { ru: "Солнце ещё не взошло, но видимость хорошая. Какой свет включить на загородной дороге?", en: "If the sun has not yet risen but visibility is good, which lights must you use on an interurban road?" },
      options: [
        { es: "El alumbrado de posición y el de corto alcance.", ru: "Габаритные и ближний.", en: "The side lights and dipped beam." },
        { es: "Ninguno.", ru: "Никакой.", en: "None." },
        { es: "El alumbrado de posición, únicamente.", ru: "Только габаритные.", en: "Only the side lights." }
      ],
      answer: 0,
      explain: { ru: "RGC, ст. 99: до восхода солнца освещение обязательно — габариты и ближний (или дальний, если можно).", en: "RGC art. 99: before sunrise lights are compulsory — side lights and dipped beam (or main beam where allowed)." } },
    { es: "En caso de existir niebla espesa, además de reducir la visibilidad, ¿puede disminuir la adherencia de los neumáticos sobre la calzada?",
      prompt: { ru: "В густом тумане, кроме плохой видимости, может ли снизиться сцепление шин с дорогой?", en: "In thick fog, besides poor visibility, can tyre grip on the road be reduced?" },
      options: [
        { es: "Sí, pero solamente en caso de frenar bruscamente.", ru: "Да, но только при резком торможении.", en: "Yes, but only when braking hard." },
        { es: "No, la adherencia de los neumáticos solamente disminuye cuando llueve.", ru: "Нет, сцепление снижается только в дождь.", en: "No, grip only drops when it rains." },
        { es: "Sí, debido a que la niebla humedece la calzada haciéndola más deslizante.", ru: "Да, туман увлажняет дорогу и делает её скользкой.", en: "Yes, because fog dampens the road and makes it more slippery." }
      ],
      answer: 2,
      explain: { ru: "Туман увлажняет покрытие и снижает сцепление: снижайте скорость, увеличивайте дистанцию, включайте свет.", en: "Fog dampens the surface and cuts grip: slow down, leave more room and use your lights." } },
    { es: "¿Qué debe hacer cuando vaya a adelantar a un ciclista que lleva un pasajero?",
      prompt: { ru: "Что нужно делать, собираясь обогнать велосипедиста с пассажиром?", en: "What should you do when about to overtake a cyclist carrying a passenger?" },
      options: [
        { es: "Aumentar la precaución ya que la bicicleta se puede desestabilizar con mayor facilidad.", ru: "Быть осторожнее: велосипед легче теряет равновесие.", en: "Take more care, as the bicycle can become unstable more easily." },
        { es: "Aumentar la velocidad y circular lo más cerca posible del borde derecho de la calzada.", ru: "Ускориться и держаться ближе к правому краю.", en: "Speed up and keep as close as possible to the right edge." },
        { es: "Hacer señales acústicas al llegar a su altura para advertir de nuestra presencia.", ru: "Посигналить, поравнявшись с ним.", en: "Sound the horn when level to warn him." }
      ],
      answer: 0,
      explain: { ru: "С пассажиром велосипед менее устойчив; оставляйте не менее 1,5 м и за городом снизьте скорость минимум на 20 км/ч (RGC, ст. 85.4).", en: "With a passenger a bicycle is less stable; leave at least 1.5 m and, outside towns, slow by at least 20 km/h (RGC art. 85.4)." } },
    { es: "Si un agente de tráfico, desde su vehículo, le ordena detenerse mediante el encendido de un dispositivo con una luz amarilla intermitente hacia delante, ¿dónde deberá hacerlo?",
      prompt: { ru: "Если агент из своей машины приказывает остановиться, включив прибор с мигающим жёлтым светом вперёд, где нужно остановиться?", en: "If a traffic officer in his vehicle orders you to stop by switching on a forward-facing flashing amber light, where must you stop?" },
      options: [
        { es: "En el lado derecho de la calzada, detrás del vehículo policial.", ru: "Справа, позади полицейской машины.", en: "On the right of the carriageway, behind the police vehicle." },
        { es: "Donde no genere mayores riesgos ni molestias para el resto de usuarios.", ru: "Там, где не создашь лишнего риска и помех другим.", en: "Where it creates no greater risk or nuisance for other road users." },
        { es: "En el lado izquierdo de la calzada, delante del vehículo policial.", ru: "Слева, впереди полицейской машины.", en: "On the left of the carriageway, in front of the police vehicle." }
      ],
      answer: 1,
      explain: { ru: "RGC, ст. 143: по такому сигналу останавливаются там, где это безопасно и не мешает другим.", en: "RGC art. 143: on this signal you stop where it is safe and does not inconvenience others." } },
    { es: "Si conduce con frecuencia y consume antihistamínicos para tratar una alergia respiratoria, es conveniente...",
      prompt: { ru: "Если вы часто водите и принимаете антигистаминные от аллергии, лучше…", en: "If you drive often and take antihistamines for a respiratory allergy, it is advisable to…" },
      options: [
        { es: "Utilizar antihistamínicos no sedantes, que no producen somnolencia.", ru: "Принимать несонные антигистаминные, которые не вызывают сонливость.", en: "Use non-sedating antihistamines, which do not cause drowsiness." },
        { es: "Tomar alguna bebida alcohólica para evitar la aparición del sueño.", ru: "Выпить алкоголь, чтобы не клонило в сон.", en: "Have an alcoholic drink to avoid sleepiness." },
        { es: "Viajar al atardecer o al amanecer, ya que hay menos polen en el aire.", ru: "Ездить на закате или рассвете: в воздухе меньше пыльцы.", en: "Travel at dusk or dawn, when there is less pollen." }
      ],
      answer: 0,
      explain: { ru: "Старые антигистаминные вызывают сонливость; есть несонные — выбирайте их с врачом. Алкоголь усиливает побочные эффекты.", en: "Older antihistamines cause drowsiness; non-sedating ones exist — choose them with your doctor. Alcohol worsens side effects." } },
    { es: "Situado en un vehículo, ¿qué identifica la señal V-25 Distintivo ambiental?",
      prompt: { ru: "Что обозначает знак V-25 «Distintivo ambiental» на машине?", en: "When placed on a vehicle, what does sign V-25 ‘environmental badge’ identify?" },
      options: [
        { es: "Su clasificación ambiental en función de su nivel de emisiones y combustible empleado.", ru: "Её экологический класс по уровню выбросов и виду топлива.", en: "Its environmental class according to emissions and fuel type." },
        { es: "El tipo de combustible empleado y su nivel de radiación atmosférica.", ru: "Вид топлива и уровень атмосферного излучения.", en: "The fuel type and its level of atmospheric radiation." },
        { es: "Su clasificación ambiental en función de su nivel de contaminación acústica.", ru: "Экологический класс по уровню шума.", en: "Its environmental class according to noise pollution." }
      ],
      answer: 0,
      explain: { ru: "Наклейка DGT (0, ECO, C, B) показывает экологический класс машины по выбросам и топливу; от неё зависит въезд в зоны низких выбросов (ZBE).", en: "The DGT sticker (0, ECO, C, B) shows the vehicle’s environmental class by emissions and fuel; access to low-emission zones (ZBE) depends on it." } }
    ]
  }
]);
