// C1 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('C1', [
  {
    id: 'c1-perifrasis', level: 'C1',
    title: { ru: 'Глагольные перифразы', en: 'Verbal periphrases' },
    hero: {
      es: 'Perífrasis <b>verbales</b>',
      sub: { ru: 'Начало, ход, конец и повтор действия: llevar, seguir, acabar de, volver a и другие',
             en: 'Start, progress, end and repetition: llevar, seguir, acabar de, volver a and more' }
    },
    tabs: [
      {
        id: 'overview', label: { ru: 'Что это', en: 'Overview' },
        blocks: [
          { type: 'text', heading: { ru: 'Определение', en: 'Definition' }, body: {
            ru: ['Перифраза — это <b>вспомогательный глагол</b> (часто с предлогом) + <b>инфинитив, герундий или причастие</b>. Вспомогательный глагол теряет своё прямое значение: в <i>vuelvo a llamar</i> никто никуда не возвращается — это «звоню ещё раз».',
                 'Спрягается только вспомогательный глагол; местоимения ставятся перед ним или присоединяются к инфинитиву: <i>Lo acabo de ver = Acabo de verlo</i>.',
                 'Три типа: <b>+ инфинитив</b> смотрит на действие со стороны — начало, конец, повтор, долг; <b>+ герундий</b> показывает действие в развитии; <b>+ причастие</b> — результат, и причастие согласуется с дополнением: <i>Llevo corregidas veinte páginas</i>.'],
            en: ['A periphrasis is a <b>helper verb</b> (often with a preposition) + an <b>infinitive, gerund or participle</b>. The helper loses its literal meaning: in <i>vuelvo a llamar</i> nobody goes back anywhere — it means “I call again”.',
                 'Only the helper verb is conjugated; pronouns go before it or attach to the infinitive: <i>Lo acabo de ver = Acabo de verlo</i>.',
                 'Three types: <b>+ infinitive</b> looks at the action from outside — its start, end, repetition or obligation; <b>+ gerund</b> shows the action in progress; <b>+ participle</b> shows a result, and the participle agrees with the object: <i>Llevo corregidas veinte páginas</i>.'] } },
          { type: 'table', heading: { ru: 'Все перифразы темы', en: 'All periphrases in this topic' },
            head: ['perífrasis', 'ejemplo'],
            rows: [
              ['llevar + gerundio', 'Llevo dos años estudiando.'],
              ['seguir + gerundio', 'Sigo viviendo en Sevilla.'],
              ['ir + gerundio', 'Los precios van subiendo.'],
              ['venir + gerundio', 'Te lo vengo diciendo.'],
              ['estar a punto de + infinitivo', 'El tren está a punto de salir.'],
              ['ponerse a + infinitivo', 'Se puso a llover.'],
              ['echarse a + infinitivo', 'Se echó a reír.'],
              ['acabar de + infinitivo', 'Acabo de comer.'],
              ['terminar de + infinitivo', 'Terminé de leer el libro.'],
              ['llegar a + infinitivo', 'Llegó a ser ministro.'],
              ['volver a + infinitivo', 'Volvió a llamar.'],
              ['dejar de + infinitivo', 'Dejé de fumar.'],
              ['soler + infinitivo', 'Suelo levantarme temprano.'],
              ['acabar + gerundio', 'Acabó trabajando en un banco.'],
              ['tener que + infinitivo', 'Tengo que irme.'],
              ['llevar + participio', 'Llevo leídas cien páginas.']
            ] },
          { type: 'text', heading: { ru: 'Куда ставить местоимение: два равноправных варианта', en: 'Where the pronoun goes: two equally correct options' }, body: {
            ru: ['<b>Перед глаголом</b> или <b>после инфинитива</b> — оба варианта правильны:', '<b>Lo</b> acabo de ver. = Acabo de <b>verlo</b>. (конец)', '<b>Te</b> vuelvo a llamar. = Vuelvo a <b>llamarte</b>. (повтор)', '<b>Se</b> está duchando. = Está <b>duchándose</b>. (процесс)', '<b>Me lo</b> tienes que contar. = Tienes que <b>contármelo</b>. (долг)'],
            en: ['<b>Before the verb</b> or <b>attached</b> to the infinitive — both are correct:', '<b>Lo</b> acabo de ver. = Acabo de <b>verlo</b>. (end)', '<b>Te</b> vuelvo a llamar. = Vuelvo a <b>llamarte</b>. (repetition)', '<b>Se</b> está duchando. = Está <b>duchándose</b>. (progress)', '<b>Me lo</b> tienes que contar. = Tienes que <b>contármelo</b>. (duty)'] } },
          { type: 'text', heading: { ru: 'Внимание', en: 'Watch out' }, body: {
            ru: 'Внутрь перифразы местоимение не ставят — <i>*Acabo de lo ver</i> ошибка. Два местоимения всегда идут вместе: <i>Te lo vuelvo a decir</i> или <i>Vuelvo a decírtelo</i>. У присоединённой формы часто появляется ударение: <i>duchándose, contármelo</i>.',
            en: 'A pronoun never goes inside the periphrasis — <i>*Acabo de lo ver</i> is wrong. Two pronouns always stay together: <i>Te lo vuelvo a decir</i> or <i>Vuelvo a decírtelo</i>. The attached form often needs a written accent: <i>duchándose, contármelo</i>.' } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'blue', es: '<b>Llevo</b> dos años <b>estudiando</b> chino.', ru: 'Я учу китайский уже два года.', en: 'I’ve been studying Chinese for two years.' },
            { color: 'coral', es: 'Ya <b>llevamos vendidas</b> más de mil entradas.', ru: 'Мы уже продали больше тысячи билетов.', en: 'We’ve already sold more than a thousand tickets.' }
          ] }
        ]
      },
      {
        id: 'start', label: { ru: 'Начало', en: 'Start' },
        blocks: [
          { type: 'rules', heading: { ru: 'Четыре способа начать', en: 'Four ways to begin' }, items: [
            { color: 'teal', title: { ru: 'Estar a punto de', en: 'Estar a punto de' }, es: 'estar a punto de + infinitivo',
              body: { ru: '«Вот-вот»: действие <b>ещё не началось</b>, но начнётся сию секунду: <i>La película está a punto de empezar</i>. Часто в imperfecto + <i>cuando</i>: «уже собирался…, когда…».', en: '“About to”: the action <b>has not started yet</b> but is imminent: <i>La película está a punto de empezar</i>. Often in the imperfecto + <i>cuando</i>: “was about to… when…”.' } },
            { color: 'teal', title: { ru: 'Empezar a · comenzar a', en: 'Empezar a · comenzar a' }, es: 'empezar a + infinitivo',
              body: { ru: 'Нейтральное «начать»: <i>Empecé a trabajar a los veinte años</i>. <i>Comenzar a</i> — чуть книжнее.', en: 'A neutral “to begin”: <i>Empecé a trabajar a los veinte años</i>. <i>Comenzar a</i> is slightly more formal.' } },
            { color: 'teal', title: { ru: 'Ponerse a', en: 'Ponerse a' }, es: 'ponerse a + infinitivo',
              body: { ru: 'Начать, часто неожиданно или решительно: <i>Me puse a estudiar</i> — «сел заниматься».', en: 'To start, often suddenly or with resolve: <i>Me puse a estudiar</i> — “I sat down to study”.' } },
            { color: 'teal', title: { ru: 'Echarse a · romper a', en: 'Echarse a · romper a' }, es: 'echarse a + infinitivo',
              body: { ru: 'Внезапно разразиться; только с немногими глаголами: <i>echarse a reír, a llorar, a correr, a temblar</i>. <b>Romper a</b> — то же, книжно.', en: 'To burst into something; only with a few verbs: <i>echarse a reír, a llorar, a correr, a temblar</i>. <b>Romper a</b> means the same in literary style.' } }
          ] },
          { type: 'text', color: 'teal', heading: { ru: 'Ir a: план, а не «вот-вот»', en: 'Ir a: a plan, not “about to”' }, body: {
            ru: '<b>Ir a + инфинитив</b> тоже смотрит вперёд, но это план или прогноз: <i>Voy a llamarla mañana</i>. В imperfecto — намерение, которое не сбылось: <i>Iba a llamarte, pero se me olvidó</i>.',
            en: '<b>Ir a + infinitive</b> also looks ahead, but it is a plan or a prediction: <i>Voy a llamarla mañana</i>. In the imperfecto it is an intention that did not happen: <i>Iba a llamarte, pero se me olvidó</i>.' } },
          { type: 'table', heading: { ru: 'Ponerse a: presente и indefinido + a (возвратный, неправильный)', en: 'Ponerse a: presente and indefinido + a (reflexive, irregular)' },
            head: ['', 'presente', 'indefinido'],
            rows: [
              ['yo', 'me pongo', 'me puse'],
              ['tú', 'te pones', 'te pusiste'],
              ['él / ella', 'se pone', 'se puso'],
              ['nosotros', 'nos ponemos', 'nos pusimos'],
              ['vosotros', 'os ponéis', 'os pusisteis'],
              ['ellos', 'se ponen', 'se pusieron']
            ] },
          { type: 'table', heading: { ru: 'Echarse a: presente и indefinido + a (возвратный, правильный)', en: 'Echarse a: presente and indefinido + a (reflexive, regular)' },
            head: ['', 'presente', 'indefinido'],
            rows: [
              ['yo', 'me echo', 'me eché'],
              ['tú', 'te echas', 'te echaste'],
              ['él / ella', 'se echa', 'se echó'],
              ['nosotros', 'nos echamos', 'nos echamos'],
              ['vosotros', 'os echáis', 'os echasteis'],
              ['ellos', 'se echan', 'se echaron']
            ] },
          { type: 'markers', heading: { ru: 'С чем сочетаются', en: 'Typical partners' }, groups: [
            { color: 'teal', title: { ru: 'echarse a · romper a', en: 'echarse a · romper a' }, tags: ['reír', 'llorar', 'correr', 'temblar', 'andar', 'volar'] },
            { color: 'teal', title: { ru: 'ponerse a', en: 'ponerse a' }, tags: ['llover', 'trabajar', 'estudiar', 'cantar', 'gritar', 'buscar'] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'teal', es: '<b>Estaba a punto de salir</b> cuando sonó el teléfono.', ru: 'Я уже собирался выходить, когда зазвонил телефон.', en: 'I was about to leave when the phone rang.' },
            { color: 'teal', es: 'Cuando vio a su madre, el niño <b>se echó a llorar</b>.', ru: 'Увидев маму, ребёнок расплакался.', en: 'When he saw his mother, the boy burst into tears.' },
            { color: 'teal', es: 'Después de la cena <b>nos pusimos a jugar</b> a las cartas.', ru: 'После ужина мы сели играть в карты.', en: 'After dinner we started playing cards.' }
          ] }
        ]
      },
      {
        id: 'process', label: { ru: 'Процесс', en: 'Process' },
        blocks: [
          { type: 'rules', heading: { ru: 'Перифразы с герундием', en: 'Periphrases with the gerund' }, items: [
            { color: 'blue', title: { ru: 'Llevar + gerundio', en: 'Llevar + gerundio' }, es: 'llevar + tiempo + gerundio',
              body: { ru: 'Сколько времени действие длится <b>до сих пор</b>. Обязательно со сроком — см. таблицу ниже. В отрицании — <b>llevar sin + инфинитив</b>: <i>Llevo un mes sin fumar</i>.', en: 'Says how long an action has been going on <b>up to now</b>. It needs a time phrase — see the table below. In the negative use <b>llevar sin + infinitive</b>: <i>Llevo un mes sin fumar</i>.' } },
            { color: 'blue', title: { ru: 'Seguir + gerundio', en: 'Seguir + gerundio' }, es: 'seguir · continuar + gerundio',
              body: { ru: 'Действие продолжается — «всё ещё»: <i>¿Sigues trabajando allí?</i> Отрицание — <b>seguir sin + инфинитив</b>: <i>Sigo sin entenderlo</i>.', en: 'The action continues — “still”: <i>¿Sigues trabajando allí?</i> The negative is <b>seguir sin + infinitive</b>: <i>Sigo sin entenderlo</i>.' } },
            { color: 'blue', title: { ru: 'Ir + gerundio', en: 'Ir + gerundio' }, es: 'ir + gerundio',
              body: { ru: 'Действие развивается <b>постепенно</b>: <i>Poco a poco voy entendiendo</i>. Часто рядом <i>poco a poco, cada vez más</i>.', en: 'The action develops <b>gradually</b>: <i>Poco a poco voy entendiendo</i>. Often with <i>poco a poco, cada vez más</i>.' } },
            { color: 'blue', title: { ru: 'Venir · andar + gerundio', en: 'Venir · andar + gerundio' }, es: 'venir · andar + gerundio',
              body: { ru: '<b>Venir</b> — действие тянется из прошлого до сейчас, часто с нажимом: <i>Te lo vengo diciendo desde hace meses</i>. <b>Andar</b> — разговорное «всё ходит и…», часто с неодобрением: <i>Anda diciendo por ahí que me voy</i>.',
                      en: '<b>Venir</b> — an action dragging on from the past until now, often insistent: <i>Te lo vengo diciendo desde hace meses</i>. <b>Andar</b> — colloquial “going around doing”, often disapproving: <i>Anda diciendo por ahí que me voy</i>.' } }
          ] },
          { type: 'conj', heading: { ru: 'Утверждение и отрицание', en: 'Affirmative and negative' }, verbs: [
            { inf: 'llevar', tr: { ru: 'сколько уже длится', en: 'how long so far' }, variants: [
              { label: { ru: 'да: + герундий', en: 'yes: + gerund' }, color: 'blue', rows: [['yo', 'Llevo un año <b>estudiando</b>.'], ['tú', 'Llevas horas <b>hablando</b>.'], ['ella', 'Lleva un mes <b>trabajando</b> aquí.'], ['nosotros', 'Llevamos días <b>buscando</b> piso.']] },
              { label: { ru: 'нет: sin + инф.', en: 'no: sin + inf.' }, color: 'coral', rows: [['yo', 'Llevo un año <b>sin estudiar</b>.'], ['tú', 'Llevas horas <b>sin hablar</b>.'], ['ella', 'Lleva un mes <b>sin trabajar</b>.'], ['nosotros', 'Llevamos días <b>sin dormir</b> bien.']] }
            ] },
            { inf: 'seguir', tr: { ru: 'всё ещё', en: 'still' }, variants: [
              { label: { ru: 'да: + герундий', en: 'yes: + gerund' }, color: 'blue', rows: [['yo', 'Sigo <b>viviendo</b> en Sevilla.'], ['tú', '¿Sigues <b>teniendo</b> coche?'], ['ellos', 'Siguen <b>contestando</b> tarde.']] },
              { label: { ru: 'нет: sin + инф.', en: 'no: sin + inf.' }, color: 'coral', rows: [['yo', 'Sigo <b>sin entender</b> el problema.'], ['tú', '¿Sigues <b>sin tener</b> coche?'], ['ellos', 'Siguen <b>sin contestar</b>.']] }
            ] }
          ] },
          { type: 'table', heading: { ru: 'Три способа сказать «уже три часа»', en: 'Three ways to say “for three hours”' },
            head: [{ ru: 'Конструкция', en: 'Structure' }, { ru: 'Пример', en: 'Example' }],
            rows: [
              ['llevar + ger.', 'Llevo 3 horas esperando.'],
              ['hace … que', 'Hace 3 horas que espero.'],
              ['desde hace', 'Espero desde hace 3 horas.']
            ] },
          { type: 'text', heading: { ru: 'Внимание', en: 'Watch out' }, body: {
            ru: '<b>Llevar + gerundio</b> — только о том, что длится <b>до момента речи</b> или до момента в прошлом (тогда <i>llevaba…</i>). Нужен срок или вопрос о сроке: <i>¿Cuánto tiempo llevas esperando?</i> Просто «всё ещё жду» — <i>Sigo esperando</i>.',
            en: '<b>Llevar + gerundio</b> is only about something lasting <b>up to the moment of speaking</b> or up to a past moment (then <i>llevaba…</i>). It needs a time phrase or a question about time: <i>¿Cuánto tiempo llevas esperando?</i> A plain “I’m still waiting” is <i>Sigo esperando</i>.' } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'blue', es: '<b>Llevamos</b> diez años <b>viviendo</b> en esta casa.', ru: 'Мы живём в этом доме уже десять лет.', en: 'We’ve been living in this house for ten years.' },
            { color: 'blue', es: 'A pesar de todo, <b>sigue confiando</b> en él.', ru: 'Несмотря ни на что, она по-прежнему ему доверяет.', en: 'Despite everything, she still trusts him.' },
            { color: 'blue', es: 'La situación <b>va mejorando</b>.', ru: 'Ситуация постепенно улучшается.', en: 'The situation is gradually improving.' }
          ] }
        ]
      },
      {
        id: 'end', label: { ru: 'Конец', en: 'End' },
        blocks: [
          { type: 'rules', heading: { ru: 'Конец и итог', en: 'End and outcome' }, items: [
            { color: 'coral', title: { ru: 'Acabar de', en: 'Acabar de' }, es: 'acabar de + infinitivo',
              body: { ru: '«Только что»: <i>Acaba de salir</i>. В imperfecto — «только что» в прошлом: <i>acababa de…</i> С отрицанием — «никак не, не совсем»: <i>No acabo de fiarme de él</i>.', en: '“Have just”: <i>Acaba de salir</i>. In the imperfecto — “had just”: <i>acababa de…</i> Negated, it means “not quite”: <i>No acabo de fiarme de él</i>.' } },
            { color: 'coral', title: { ru: 'Dejar de', en: 'Dejar de' }, es: 'dejar de + infinitivo',
              body: { ru: 'Перестать: <i>Ha dejado de nevar</i>. <i>No dejes de…</i> — «обязательно…»: <i>No dejes de escribirnos</i>.', en: 'To stop: <i>Ha dejado de nevar</i>. <i>No dejes de…</i> means “be sure to…”: <i>No dejes de escribirnos</i>.' } },
            { color: 'coral', title: { ru: 'Acabar + gerundio', en: 'Acabar + gerundio' }, es: 'acabar · terminar + gerundio',
              body: { ru: '«В итоге, в конце концов»: <i>Acabó viviendo en Chile</i>. То же — <b>acabar por + инфинитив</b>: <i>Acabó por aceptar</i>.', en: '“To end up”: <i>Acabó viviendo en Chile</i>. The same idea — <b>acabar por + infinitive</b>: <i>Acabó por aceptar</i>.' } },
            { color: 'coral', title: { ru: 'Terminar de · llegar a', en: 'Terminar de · llegar a' }, es: 'terminar de · llegar a + infinitivo',
              body: { ru: '<b>Terminar de</b> — довести до конца: <i>¿Has terminado de comer?</i> <b>Llegar a</b> — дойти до результата или крайности: <i>Llegué a pensar que no volvería</i>.', en: '<b>Terminar de</b> — to finish doing: <i>¿Has terminado de comer?</i> <b>Llegar a</b> — to get as far as a result or an extreme: <i>Llegué a pensar que no volvería</i>.' } }
          ] },
          { type: 'text', heading: { ru: 'Не путайте', en: 'Don’t confuse' }, body: {
            ru: '<b>Acabar de</b> + инфинитив — «только что», <b>acabar</b> + gerundio — «в итоге». <i>Acaba de mudarse a Chile</i> — «только что переехал в Чили»; <i>Acabó mudándose a Chile</i> — «в итоге переехал в Чили».',
            en: '<b>Acabar de</b> + infinitive — “have just”, <b>acabar</b> + gerundio — “to end up”. <i>Acaba de mudarse a Chile</i> — “he has just moved to Chile”; <i>Acabó mudándose a Chile</i> — “he ended up moving to Chile”.' } },
          { type: 'conj', heading: { ru: 'Acabar: два значения', en: 'Acabar: two meanings' }, verbs: [
            { inf: 'acabar', tr: { ru: '«только что» или «в итоге»', en: '“have just” or “end up”' }, variants: [
              { label: 'acabar de + inf.', color: 'coral', rows: [['yo', '<b>Acabo de</b> llegar.'], ['tú', '<b>Acabas de</b> despertarte.'], ['él / ella', '<b>Acaba de</b> irse.'], ['nosotros', '<b>Acabamos de</b> cenar.'], ['vosotros', '<b>Acabáis de</b> aprobar.'], ['ellos', '<b>Acaban de</b> casarse.']] },
              { label: 'acabar + ger.', color: 'amber', rows: [['yo', '<b>Acabé cediendo</b>.'], ['tú', '<b>Acabarás aceptando</b>.'], ['él / ella', '<b>Acabó cambiando</b> de idea.'], ['nosotros', '<b>Acabamos riéndonos</b>.'], ['vosotros', '<b>Acabasteis discutiendo</b>.'], ['ellos', '<b>Acabaron casándose</b>.']] }
            ] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'coral', es: '<b>Acababa de llegar</b> a casa cuando me llamaste.', ru: 'Я только-только пришёл домой, когда ты позвонил.', en: 'I had just got home when you called me.' },
            { color: 'amber', es: 'Discutían tanto que <b>acabaron separándose</b>.', ru: 'Они так много ссорились, что в итоге расстались.', en: 'They argued so much that they ended up splitting up.' },
            { color: 'coral', es: 'Si vas a Granada, <b>no dejes de ver</b> la Alhambra.', ru: 'Если поедешь в Гранаду, обязательно посмотри Альгамбру.', en: 'If you go to Granada, be sure to see the Alhambra.' }
          ] }
        ]
      },
      {
        id: 'repeat', label: { ru: 'Повтор, долг', en: 'Repeat, duty' },
        blocks: [
          { type: 'rules', heading: { ru: 'Повтор, привычка, долг', en: 'Repetition, habit, duty' }, items: [
            { color: 'purple', title: { ru: 'Volver a', en: 'Volver a' }, es: 'volver a + infinitivo',
              body: { ru: 'Сделать снова: <i>No vuelvas a hacerlo</i> — «больше так не делай». Заменяет <i>otra vez, de nuevo</i>.', en: 'To do again: <i>No vuelvas a hacerlo</i> — “don’t ever do that again”. It replaces <i>otra vez, de nuevo</i>.' } },
            { color: 'purple', title: { ru: 'Soler', en: 'Soler' }, es: 'soler + infinitivo',
              body: { ru: '«Обычно»; бывает только в presente и imperfecto: <i>Suelo cenar a las nueve</i>, <i>De niño solía ir al pueblo</i>.', en: '“Usually”; it is only used in the presente and the imperfecto: <i>Suelo cenar a las nueve</i>, <i>De niño solía ir al pueblo</i>.' } },
            { color: 'purple', title: { ru: 'Tener que · hay que', en: 'Tener que · hay que' }, es: 'tener que · hay que + infinitivo',
              body: { ru: 'Необходимость. <b>Tener que</b> — у конкретного человека: <i>Tengo que llamar a mi madre</i>. <b>Hay que</b> — безлично, для всех: <i>Hay que tener paciencia</i>.', en: 'Necessity. <b>Tener que</b> — for a specific person: <i>Tengo que llamar a mi madre</i>. <b>Hay que</b> — impersonal, for everyone: <i>Hay que tener paciencia</i>.' } },
            { color: 'purple', title: { ru: 'Deber · haber de', en: 'Deber · haber de' }, es: 'deber · haber de + infinitivo',
              body: { ru: '<b>Deber</b> — моральный долг, совет: <i>Debes decirle la verdad</i>. <b>Haber de</b> — книжное «надлежит, предстоит»: <i>Has de saber que…</i>', en: '<b>Deber</b> — moral duty, advice: <i>Debes decirle la verdad</i>. <b>Haber de</b> — formal or literary “must, be to”: <i>Has de saber que…</i>' } }
          ] },
          { type: 'conj', heading: { ru: 'Deber или deber de', en: 'Deber or deber de' }, verbs: [
            { inf: 'deber', tr: { ru: 'долг или вероятность', en: 'duty or probability' }, variants: [
              { label: { ru: 'долг', en: 'obligation' }, color: 'purple', rows: [['él', '<b>Debe</b> estar en casa a las diez.'], ['tú', '<b>Debes</b> tener más cuidado.'], ['ellos', '<b>Deben</b> ser puntuales.']] },
              { label: { ru: 'вероятность', en: 'probability' }, color: 'amber', rows: [['él', '<b>Debe de</b> estar ya en casa.'], ['tú', '<b>Debes de</b> tener hambre.'], ['ellos', '<b>Deben de</b> ser hermanos.']] }
            ] }
          ] },
          { type: 'table', heading: { ru: 'Soler: только два времени', en: 'Soler: only two tenses' },
            head: ['', 'presente', 'imperfecto'],
            rows: [
              ['yo', 'suelo', 'solía'],
              ['tú', 'sueles', 'solías'],
              ['él / ella', 'suele', 'solía'],
              ['nosotros', 'solemos', 'solíamos'],
              ['vosotros', 'soléis', 'solíais'],
              ['ellos', 'suelen', 'solían']
            ] },
          { type: 'text', heading: { ru: 'Deber или deber de', en: 'Deber or deber de' }, body: {
            ru: '<b>Deber de</b> + инфинитив — предположение, «наверное»: <i>Debe de estar enfermo</i>. <b>Deber</b> без <i>de</i> — долг: <i>Debe estar en clase a las ocho</i> — «он обязан быть на занятии в восемь». По норме RAE <i>deber de</i> в значении долга — ошибка; <i>deber</i> для вероятности допускается, но в тщательной речи их различают.',
            en: '<b>Deber de</b> + infinitive is a guess, “must (probably)”: <i>Debe de estar enfermo</i>. <b>Deber</b> without <i>de</i> is duty: <i>Debe estar en clase a las ocho</i> — “he has to be in class at eight”. According to the RAE, <i>deber de</i> for obligation is a mistake; <i>deber</i> for probability is accepted, but careful speakers keep them apart.' } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'purple', es: 'Perdona, <b>no volverá a pasar</b>.', ru: 'Извини, такое больше не повторится.', en: 'Sorry, it won’t happen again.' },
            { color: 'purple', es: 'Los sábados <b>solemos comer</b> fuera.', ru: 'По субботам мы обычно обедаем не дома.', en: 'On Saturdays we usually eat out.' },
            { color: 'amber', es: 'No contesta; <b>debe de estar</b> dormido.', ru: 'Не отвечает — наверное, спит.', en: 'He isn’t answering; he must be asleep.' }
          ] }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'text', heading: { ru: 'Метки', en: 'Labels' }, body: {
            ru: '<b>ini</b> — начало, <b>dur</b> — длительность и развитие, <b>fin</b> — конец и итог, <b>res</b> — результат, <b>rep</b> — повтор, <b>hab</b> — привычка, <b>obl</b> — долг.',
            en: '<b>ini</b> — start, <b>dur</b> — duration and progress, <b>fin</b> — end and outcome, <b>res</b> — result, <b>rep</b> — repetition, <b>hab</b> — habit, <b>obl</b> — obligation.' } },
          { type: 'examples', heading: { ru: 'Все случаи', en: 'All the cases' }, items: [
            { badge: 'ini', color: 'teal', es: 'Cuando le conté el chiste, <b>se echó a reír</b> a carcajadas.', ru: 'Когда я рассказал ему анекдот, он расхохотался.', en: 'When I told him the joke, he burst out laughing.' },
            { badge: 'ini', color: 'teal', es: '<b>Estamos a punto de aterrizar</b>; abróchense los cinturones.', ru: 'Мы вот-вот приземлимся, пристегните ремни.', en: 'We are about to land; please fasten your seat belts.' },
            { badge: 'ini', color: 'teal', es: 'Llegué a casa y <b>me puse a preparar</b> la cena.', ru: 'Я пришёл домой и принялся готовить ужин.', en: 'I got home and started making dinner.' },
            { badge: 'ini', color: 'teal', es: 'En cuanto salimos del cine, <b>se puso a llover</b>.', ru: 'Как только мы вышли из кино, пошёл дождь.', en: 'As soon as we left the cinema, it started to rain.' },
            { badge: 'ini', color: 'teal', es: 'La niña <b>rompió a llorar</b> en mitad de la función.', ru: 'Девочка разрыдалась посреди спектакля.', en: 'The little girl burst into tears in the middle of the show.' },
            { badge: 'dur', color: 'blue', es: '¿Cuánto tiempo <b>llevas trabajando</b> en esta empresa?', ru: 'Сколько ты уже работаешь в этой компании?', en: 'How long have you been working at this company?' },
            { badge: 'dur', color: 'blue', es: '<b>Llevo</b> tres noches <b>sin dormir</b> por culpa de los vecinos.', ru: 'Я уже три ночи не сплю из-за соседей.', en: 'I haven’t slept for three nights because of the neighbours.' },
            { badge: 'dur', color: 'blue', es: 'Mis abuelos <b>siguen viviendo</b> en el mismo barrio.', ru: 'Мои бабушка и дедушка по-прежнему живут в том же районе.', en: 'My grandparents still live in the same neighbourhood.' },
            { badge: 'dur', color: 'blue', es: '<b>Llevaba</b> dos horas <b>esperando</b> cuando por fin llegó el médico.', ru: 'Я ждал уже два часа, когда наконец пришёл врач.', en: 'I had been waiting for two hours when the doctor finally arrived.' },
            { badge: 'dur', color: 'blue', es: 'Mi vecino <b>anda contando</b> a todo el mundo que me mudo.', ru: 'Мой сосед всем рассказывает, что я переезжаю.', en: 'My neighbour is going around telling everyone I’m moving.' },
            { badge: 'fin', color: 'coral', es: '<b>Acabamos de enterarnos</b> de la noticia.', ru: 'Мы только что узнали эту новость.', en: 'We’ve just heard the news.' },
            { badge: 'fin', color: 'amber', es: 'Tras tantos años en el extranjero, <b>acabó volviendo</b> a su ciudad.', ru: 'После стольких лет за границей она в итоге вернулась в родной город.', en: 'After so many years abroad, she ended up going back to her home town.' },
            { badge: 'fin', color: 'coral', es: '<b>Dejad de discutir</b> y escuchad.', ru: 'Хватит спорить, послушайте.', en: 'Stop arguing and listen.' },
            { badge: 'fin', color: 'coral', es: '<b>No acabo de entender</b> por qué se enfadó.', ru: 'Никак не пойму, почему он рассердился.', en: 'I can’t quite understand why he got angry.' },
            { badge: 'fin', color: 'coral', es: '<b>Ha dejado de llover</b>, podemos salir.', ru: 'Дождь перестал, можно выходить.', en: 'It’s stopped raining, we can go out.' },
            { badge: 'fin', color: 'coral', es: 'Con los años <b>llegó a dirigir</b> la empresa.', ru: 'Со временем он даже стал руководить компанией.', en: 'Over the years he rose to run the company.' },
            { badge: 'res', color: 'coral', es: 'El profesor ya <b>lleva corregidos</b> veinte exámenes.', ru: 'Преподаватель уже проверил двадцать экзаменационных работ.', en: 'The teacher has already marked twenty exams.' },
            { badge: 'res', color: 'coral', es: '<b>Tengo pensado</b> cambiar de trabajo el año que viene.', ru: 'Я собираюсь сменить работу в следующем году.', en: 'I’m planning to change jobs next year.' },
            { badge: 'rep', color: 'purple', es: 'Si <b>vuelves a llegar</b> tarde, habrá consecuencias.', ru: 'Если ты снова опоздаешь, будут последствия.', en: 'If you’re late again, there will be consequences.' },
            { badge: 'rep', color: 'purple', es: 'Te lo <b>vuelvo a decir</b>: no toques nada.', ru: 'Повторяю ещё раз: ничего не трогай.', en: 'I’m telling you again: don’t touch anything.' },
            { badge: 'hab', color: 'purple', es: '¿A qué hora <b>soléis levantaros</b> los domingos?', ru: 'Во сколько вы обычно встаёте по воскресеньям?', en: 'What time do you usually get up on Sundays?' },
            { badge: 'hab', color: 'purple', es: 'De pequeños <b>solíamos pasar</b> el verano en el pueblo.', ru: 'В детстве мы обычно проводили лето в деревне.', en: 'As children we used to spend the summer in the village.' },
            { badge: 'obl', color: 'purple', es: 'Los viajeros <b>han de presentar</b> el pasaporte en el control.', ru: 'Пассажиры должны предъявить паспорт на контроле.', en: 'Passengers must show their passports at the checkpoint.' },
            { badge: 'obl', color: 'purple', es: '<b>Hay que reservar</b> mesa con antelación.', ru: 'Столик нужно бронировать заранее.', en: 'You have to book a table in advance.' }
          ] },
          { type: 'tip', heading: { ru: 'Шпаргалка', en: 'Cheat sheet' }, title: { ru: 'Как выбрать', en: 'How to choose' }, body: {
            ru: ['Спросите себя, какой момент действия важен: <b>до начала</b> (estar a punto de, ir a) → <b>старт</b> (ponerse a, echarse a) → <b>ход</b> (llevar, seguir, ir + gerundio) → <b>конец</b> (dejar de, acabar de, terminar de) → <b>итог</b> (acabar + gerundio, llegar a).',
                 'Повтор — <b>volver a</b>, привычка — <b>soler</b>, долг — <b>tener que, deber, hay que</b>.'],
            en: ['Ask yourself which moment of the action matters: <b>before it starts</b> (estar a punto de, ir a) → <b>the start</b> (ponerse a, echarse a) → <b>the progress</b> (llevar, seguir, ir + gerundio) → <b>the end</b> (dejar de, acabar de, terminar de) → <b>the outcome</b> (acabar + gerundio, llegar a).',
                 'Repetition — <b>volver a</b>, habit — <b>soler</b>, duty — <b>tener que, deber, hay que</b>.'] } }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите глагол', en: 'Choose the verb' }, es: '___ tres horas esperando el autobús.',
        options: ['Hago', 'Llevo', 'Soy'], answer: 1,
        explain: { ru: 'Сколько длится действие до сих пор — llevar + срок + gerundio: Llevo tres horas esperando.', en: 'How long an action has lasted — llevar + time + gerundio: Llevo tres horas esperando.' } },
      { prompt: { ru: 'Выберите перифразу', en: 'Choose the periphrasis' }, es: '¿Tienes hambre? — No, gracias, ___ comer.',
        options: ['vuelvo a', 'acabo de', 'me pongo a'], answer: 1,
        explain: { ru: '«Только что поел» — acabar de + инфинитив.', en: '“I’ve just eaten” — acabar de + infinitive.' } },
      { prompt: { ru: 'Выберите глагол', en: 'Choose the verb' }, es: 'De repente, el niño se ___ a llorar.',
        options: ['puso', 'dejó', 'volvió'], answer: 0,
        explain: { ru: 'Внезапное начало действия — ponerse a: se puso a llorar.', en: 'A sudden start — ponerse a: se puso a llorar.' } },
      { prompt: { ru: 'Выберите глагол', en: 'Choose the verb' }, es: 'Cuando oyó el chiste, se ___ a reír.',
        options: ['llevó', 'acabó', 'echó'], answer: 2,
        explain: { ru: 'Echarse a reír — «расхохотаться», внезапное начало.', en: 'Echarse a reír — “to burst out laughing”, a sudden start.' } },
      { prompt: { ru: 'Выберите перифразу', en: 'Choose the periphrasis' }, es: 'Fumaba mucho, pero ___ hace dos años.',
        options: ['acabó de fumar', 'volvió a fumar', 'dejó de fumar'], answer: 2,
        explain: { ru: 'Pero показывает перемену: курил, но перестал — dejar de.', en: 'Pero signals a change: he smoked, but stopped — dejar de.' } },
      { prompt: { ru: 'Выберите перифразу', en: 'Choose the periphrasis' }, es: 'Lo había dejado, pero el año pasado ___ fumar. Ahora fuma otra vez.',
        options: ['acabó de', 'volvió a', 'dejó de'], answer: 1,
        explain: { ru: 'Снова начал (fuma otra vez) — volver a + инфинитив.', en: 'He started again (fuma otra vez) — volver a + infinitive.' } },
      { prompt: { ru: 'Выберите глагол', en: 'Choose the verb' }, es: '¿Todavía ___ viviendo en Sevilla? — Sí, allí sigo.',
        options: ['sigues', 'llevas', 'vuelves'], answer: 0,
        explain: { ru: '«Всё ещё» — seguir + gerundio. Llevar требует указания срока.', en: '“Still” — seguir + gerundio. Llevar would need a time phrase.' } },
      { prompt: { ru: 'Выберите перифразу', en: 'Choose the periphrasis' }, es: 'Date prisa: la película ___ empezar, quedan dos minutos.',
        options: ['acaba de', 'está a punto de', 'deja de'], answer: 1,
        explain: { ru: 'Фильм ещё не начался (quedan dos minutos) — estar a punto de, «вот-вот».', en: 'The film hasn’t started yet (quedan dos minutos) — estar a punto de, “about to”.' } },
      { prompt: { ru: 'Выберите глагол', en: 'Choose the verb' }, es: 'Los precios ___ subiendo poco a poco.',
        options: ['acaban', 'dejan', 'van'], answer: 2,
        explain: { ru: 'Постепенное развитие (poco a poco) — ir + gerundio: van subiendo.', en: 'Gradual development (poco a poco) — ir + gerundio: van subiendo.' } },
      { prompt: { ru: 'Выберите глагол', en: 'Choose the verb' }, es: 'Los domingos ___ comer en casa de mis padres.',
        options: ['suelo', 'llevo', 'estoy'], answer: 0,
        explain: { ru: 'Привычка («обычно») — soler + инфинитив: suelo comer.', en: 'A habit (“usually”) — soler + infinitive: suelo comer.' } }
    ]
  },
  {
    id: 'c1-concesivas', level: 'C1',
    title: { ru: 'Уступительные предложения', en: 'Concessive clauses' },
    hero: {
      es: 'Oraciones <b>concesivas</b>',
      sub: { ru: 'Aunque, por mucho que, si bien, y eso que: когда indicativo, а когда subjuntivo',
             en: 'Aunque, por mucho que, si bien, y eso que: when to use the indicative and when the subjunctive' }
    },
    tabs: [
      {
        id: 'although', label: { ru: 'Хотя', en: 'Although' },
        blocks: [
          { type: 'rules', heading: { ru: 'Четыре формы после aunque', en: 'Four forms after aunque' }, items: [
            { color: 'blue', label: { ru: 'Факт', en: 'Fact' }, title: { ru: 'Aunque + indicativo', en: 'Aunque + indicativo' }, es: 'aunque está',
              body: { ru: 'Говорящий сообщает <b>факт</b>: «хотя (и правда)…». <i>Aunque llueve, voy a salir</i> — дождь идёт сейчас.', en: 'The speaker states a <b>fact</b>: “although (it is true that)…”. <i>Aunque llueve, voy a salir</i> — it is raining now.' } },
            { color: 'coral', label: { ru: 'Возможно или неважно', en: 'Possible or irrelevant' }, title: { ru: 'Aunque + presente de subjuntivo', en: 'Aunque + presente de subjuntivo' }, es: 'aunque esté',
              body: { ru: 'Возможность или неважный факт: «даже если…». <i>Aunque llueva, saldré</i> — не знаю, будет ли дождь, но это ничего не меняет. Так же говорят о том, что оба собеседника уже знают: <i>Sí, ya sé que es tu jefe, pero aunque sea tu jefe, no puede gritarte</i>.',
                      en: 'A possibility or an irrelevant fact: “even if…”. <i>Aunque llueva, saldré</i> — I don’t know if it will rain, but it changes nothing. It is also used for something both speakers already know: <i>Sí, ya sé que es tu jefe, pero aunque sea tu jefe, no puede gritarte</i>.' } },
            { color: 'teal', label: { ru: 'Нереально сейчас', en: 'Unreal now' }, title: { ru: 'Aunque + imperfecto de subjuntivo', en: 'Aunque + imperfecto de subjuntivo' }, es: 'aunque estuviera',
              body: { ru: 'Нереальное в настоящем или будущем; в главной части — condicional: <i>Aunque fuera millonario, no viviría ahí</i>.', en: 'Something unreal in the present or future; the main clause takes the conditional: <i>Aunque fuera millonario, no viviría ahí</i>.' } },
            { color: 'teal', label: { ru: 'Нереально в прошлом', en: 'Unreal past' }, title: { ru: 'Aunque + pluscuamperfecto de subj.', en: 'Aunque + pluscuamperfecto de subj.' }, es: 'aunque hubiera estado',
              body: { ru: 'Нереальное в прошлом; в главной части — condicional compuesto: <i>Aunque me lo hubieras pedido, no habría ido</i>.', en: 'Something unreal in the past; the main clause takes the condicional compuesto: <i>Aunque me lo hubieras pedido, no habría ido</i>.' } }
          ] },
          { type: 'table', heading: { ru: 'Коротко', en: 'In short' },
            head: ['aunque + …', { ru: 'значение', en: 'meaning' }, 'forma'],
            rows: [
              ['indicativo', { ru: 'факт', en: 'fact' }, 'aunque está'],
              ['presente de subjuntivo', { ru: 'возможно · неважно', en: 'possible · irrelevant' }, 'aunque esté'],
              ['imperfecto de subjuntivo', { ru: 'нереально сейчас', en: 'unreal now' }, 'aunque estuviera'],
              ['pluscuamperf. de subjuntivo', { ru: 'нереально в прошлом', en: 'unreal in the past' }, 'aunque hubiera estado']
            ] },
          { type: 'conj', heading: { ru: 'Одна фраза — два наклонения', en: 'One sentence, two moods' }, verbs: [
            { inf: 'aunque + saber', tr: { ru: 'факт или гипотеза', en: 'fact or hypothesis' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['hecho', 'Aunque lo <b>sé</b>, no lo digo.'], ['pasado', 'Aunque lo <b>sabía</b>, no lo dije.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['hipótesis', 'Aunque lo <b>sepa</b>, no lo diré.'], ['irreal', 'Aunque lo <b>supiera</b>, no lo diría.'], ['irreal pasado', 'Aunque lo <b>hubiera sabido</b>, no lo habría dicho.']] }
            ] }
          ] },
          { type: 'conj', heading: { ru: 'Формы после aunque: indicativo; subjuntivo presente и pasado (imperfecto)', en: 'Forms after aunque: indicative; subjunctive presente and pasado (imperfecto)' }, verbs: [
            { inf: 'ser', tr: { ru: 'неправильный', en: 'irregular' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', 'aunque <b>soy</b>'], ['tú', 'aunque <b>eres</b>'], ['él / ella', 'aunque <b>es</b>'], ['nosotros', 'aunque <b>somos</b>'], ['vosotros', 'aunque <b>sois</b>'], ['ellos', 'aunque <b>son</b>']] },
              { label: 'Presente', color: 'coral', rows: [['yo', 'aunque <b>sea</b>'], ['tú', 'aunque <b>seas</b>'], ['él / ella', 'aunque <b>sea</b>'], ['nosotros', 'aunque <b>seamos</b>'], ['vosotros', 'aunque <b>seáis</b>'], ['ellos', 'aunque <b>sean</b>']] },
              { label: 'Pasado', color: 'teal', rows: [['yo', 'aunque <b>fuera</b>'], ['tú', 'aunque <b>fueras</b>'], ['él / ella', 'aunque <b>fuera</b>'], ['nosotros', 'aunque <b>fuéramos</b>'], ['vosotros', 'aunque <b>fuerais</b>'], ['ellos', 'aunque <b>fueran</b>']] }
            ] },
            { inf: 'tener', tr: { ru: 'неправильный', en: 'irregular' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', 'aunque <b>tengo</b>'], ['tú', 'aunque <b>tienes</b>'], ['él / ella', 'aunque <b>tiene</b>'], ['nosotros', 'aunque <b>tenemos</b>'], ['vosotros', 'aunque <b>tenéis</b>'], ['ellos', 'aunque <b>tienen</b>']] },
              { label: 'Presente', color: 'coral', rows: [['yo', 'aunque <b>tenga</b>'], ['tú', 'aunque <b>tengas</b>'], ['él / ella', 'aunque <b>tenga</b>'], ['nosotros', 'aunque <b>tengamos</b>'], ['vosotros', 'aunque <b>tengáis</b>'], ['ellos', 'aunque <b>tengan</b>']] },
              { label: 'Pasado', color: 'teal', rows: [['yo', 'aunque <b>tuviera</b>'], ['tú', 'aunque <b>tuvieras</b>'], ['él / ella', 'aunque <b>tuviera</b>'], ['nosotros', 'aunque <b>tuviéramos</b>'], ['vosotros', 'aunque <b>tuvierais</b>'], ['ellos', 'aunque <b>tuvieran</b>']] }
            ] }
          ] },
          { type: 'text', heading: { ru: 'Согласование времён', en: 'Sequence of tenses' }, body: {
            ru: 'Aunque + presente de subjuntivo → в главной части presente, futuro или imperativo; aunque + imperfecto de subjuntivo → condicional; aunque + pluscuamperfecto de subjuntivo → condicional compuesto. Pluscuamperfecto de subjuntivo = <b>hubiera + participio</b>: <i>aunque hubiera sido, aunque hubieras tenido</i>.',
            en: 'Aunque + present subjunctive → the main clause is in the present, future or imperative; aunque + imperfect subjunctive → conditional; aunque + pluperfect subjunctive → condicional compuesto. The pluperfect subjunctive is <b>hubiera + participle</b>: <i>aunque hubiera sido, aunque hubieras tenido</i>.' } },
          { type: 'examples', heading: { ru: 'Одна фраза — четыре формы', en: 'One sentence, four forms' }, items: [
            { badge: 'ind', color: 'blue', es: 'Aunque <b>está</b> cansada, sigue trabajando.', ru: 'Хотя она устала, она продолжает работать.', en: 'Although she’s tired, she keeps working.' },
            { badge: 'pre', color: 'coral', es: 'Aunque <b>esté</b> cansada, seguirá trabajando.', ru: 'Даже если она устанет, она продолжит работать.', en: 'Even if she’s tired, she’ll keep working.' },
            { badge: 'imp', color: 'teal', es: 'Aunque <b>estuviera</b> cansada, seguiría trabajando.', ru: 'Даже если бы она устала, она продолжала бы работать.', en: 'Even if she were tired, she would keep working.' },
            { badge: 'plu', color: 'teal', es: 'Aunque <b>hubiera estado</b> cansada, habría seguido trabajando.', ru: 'Даже если бы она тогда устала, она бы продолжила работать.', en: 'Even if she had been tired, she would have kept working.' }
          ] }
        ]
      },
      {
        id: 'however', label: { ru: 'Как бы ни', en: 'However' },
        blocks: [
          { type: 'rules', heading: { ru: 'Конструкции', en: 'Structures' }, items: [
            { color: 'amber', title: { ru: 'Por mucho que · por más que', en: 'Por mucho que · por más que' }, es: 'por mucho que + verbo',
              body: { ru: '«Сколько бы ни»: <i>Por mucho que corras, no llegarás a tiempo</i>.', en: '“However much”: <i>Por mucho que corras, no llegarás a tiempo</i>.' } },
            { color: 'amber', title: { ru: 'Por muy … que', en: 'Por muy … que' }, es: 'por muy + adjetivo / adverbio + que',
              body: { ru: '«Каким бы ни», «как бы ни»: <i>Por muy difícil que sea, lo intentaré</i>.', en: '“However (adjective)”: <i>Por muy difícil que sea, lo intentaré</i>.' } },
            { color: 'amber', title: { ru: 'Por mucho + существительное', en: 'Por mucho + noun' }, es: 'por mucho/a/os/as + sustantivo + que',
              body: { ru: '«Сколько бы ни» с существительным; <i>mucho</i> согласуется с ним: <i>Por mucha prisa que tengas…</i>', en: '“However much / many” with a noun; <i>mucho</i> agrees with it: <i>Por mucha prisa que tengas…</i>' } },
            { color: 'amber', title: { ru: 'Por poco que', en: 'Por poco que' }, es: 'por poco que + verbo',
              body: { ru: '«Как бы мало ни»: <i>Por poco que comas, algo engordarás</i>.', en: '“However little”: <i>Por poco que comas, algo engordarás</i>.' } }
          ] },
          { type: 'text', color: 'amber', heading: { ru: 'Какое наклонение', en: 'Which mood' }, body: {
            ru: 'О будущем или предполагаемом — только <b>subjuntivo</b>. <b>Indicativo</b> возможен, когда речь об известном факте в настоящем или прошлом: <i>Por mucho que trabaja, no gana bastante</i>.',
            en: 'For the future or anything hypothetical, only the <b>subjunctive</b> works. The <b>indicative</b> is possible when the clause states a known present or past fact: <i>Por mucho que trabaja, no gana bastante</i>.' } },
          { type: 'conj', heading: { ru: 'Факт или гипотеза', en: 'Fact or hypothesis' }, verbs: [
            { inf: 'por mucho que', tr: { ru: 'известный факт или «сколько бы ни»', en: 'known fact or “however much”' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['él', 'Por mucho que <b>ahorra</b>, no le llega.'], ['yo', 'Por más que lo <b>intento</b>, no puedo.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['él', 'Por mucho que <b>ahorre</b>, no le llegará.'], ['yo', 'Por más que lo <b>intente</b>, no podré.']] }
            ] },
            { inf: 'por muy … que', tr: { ru: 'subjuntivo: presente — реально, pasado (imperfecto) — нереально', en: 'subjunctive: presente — real, pasado (imperfecto) — unreal' }, variants: [
              { label: 'Presente', color: 'coral', rows: [['ser', 'Por muy caro que <b>sea</b>, lo compraré.'], ['estar', 'Por muy lejos que <b>esté</b>, iremos.']] },
              { label: 'Pasado', color: 'teal', rows: [['ser', 'Por muy caro que <b>fuera</b>, lo compraría.'], ['estar', 'Por muy lejos que <b>estuviera</b>, iríamos.']] }
            ] }
          ] },
          { type: 'table', heading: { ru: 'Все варианты', en: 'All variants' },
            head: [{ ru: 'Конструкция', en: 'Structure' }, 'ejemplo'],
            rows: [
              ['por mucho que + verbo', 'Por mucho que llores…'],
              ['por más que + verbo', 'Por más que insistas…'],
              ['por mucho/a + sust. + que', 'Por mucha prisa que tengas…'],
              ['por muy + adj. + que', 'Por muy tarde que sea…'],
              ['por muy + adv. + que', 'Por muy bien que cante…'],
              ['por poco que + verbo', 'Por poco que comas…']
            ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'coral', es: 'Por más que lo <b>intente</b>, no consigue dormir.', ru: 'Как он ни старается, ему не удаётся уснуть.', en: 'However hard he tries, he can’t get to sleep.' },
            { color: 'coral', es: 'Por muy temprano que <b>salgas</b>, habrá atasco.', ru: 'Как рано ты ни выедешь, будет пробка.', en: 'However early you leave, there will be traffic.' },
            { color: 'blue', es: 'Por mucho que <b>estudió</b>, no aprobó.', ru: 'Сколько он ни занимался, всё равно не сдал.', en: 'Hard as he studied, he didn’t pass.' }
          ] }
        ]
      },
      {
        id: 'others', label: { ru: 'Другие союзы', en: 'Conjunctions' },
        blocks: [
          { type: 'triggers', heading: { ru: 'Пять союзов', en: 'Five connectors' }, items: [
            { num: '1', color: 'amber', title: { ru: 'A pesar de (que)', en: 'A pesar de (que)' }, sub: { ru: 'наклонение — как у aunque', en: 'mood as with aunque' },
              phrases: ['a pesar de', 'a pesar de que', 'pese a', 'pese a que'],
              body: { ru: '<b>A pesar de + существительное или инфинитив</b>, <b>a pesar de que + глагол</b>: <i>A pesar de la lluvia…</i>, <i>A pesar de que llovía…</i>. <i>Pese a (que)</i> — то же, книжнее.', en: '<b>A pesar de + noun or infinitive</b>, <b>a pesar de que + verb</b>: <i>A pesar de la lluvia…</i>, <i>A pesar de que llovía…</i>. <i>Pese a (que)</i> is the same, more formal.' },
              ex: { es: 'Pese a que nadie lo <b>esperaba</b>, ganaron la liga.', ru: 'Хотя никто этого не ожидал, они выиграли лигу.', en: 'Even though nobody expected it, they won the league.' } },
            { num: '2', color: 'blue', title: { ru: 'Si bien', en: 'Si bien' }, sub: { ru: 'книжное, только indicativo', en: 'formal, indicative only' },
              phrases: ['si bien'],
              body: { ru: 'Признаёт факт, чтобы тут же его ограничить: «хотя и…».', en: 'Admits a fact only to qualify it straight away: “while…”.' },
              ex: { es: 'Si bien <b>es</b> cierto que ha mejorado, aún queda mucho por hacer.', ru: 'Хотя и правда стало лучше, ещё многое предстоит сделать.', en: 'While it is true that things have improved, there is still a lot to do.' } },
            { num: '3', color: 'blue', title: { ru: 'Y eso que', en: 'Y eso que' }, sub: { ru: 'разговорное, только indicativo', en: 'colloquial, indicative only' },
              phrases: ['y eso que'],
              body: { ru: '«И это притом что»; всегда после главной части: <i>Suspendió, y eso que estudió mucho</i>.', en: '“And that’s even though”; always after the main clause: <i>Suspendió, y eso que estudió mucho</i>.' },
              ex: { es: 'Llegó tarde, y eso que <b>salió</b> a las siete.', ru: 'Он опоздал, и это притом что вышел в семь.', en: 'He was late, even though he left at seven.' } },
            { num: '4', color: 'purple', title: { ru: 'Aun + gerundio', en: 'Aun + gerundio' }, sub: { ru: '«даже…»', en: '“even…”' },
              phrases: ['aun + gerundio'],
              body: { ru: '<b>Aun + gerundio</b> — «даже…»: <i>Aun sabiendo la verdad, calló</i>. Здесь <i>aun</i> пишется <b>без ударения</b>.', en: '<b>Aun + gerund</b> — “even (while)…”: <i>Aun sabiendo la verdad, calló</i>. Here <i>aun</i> has <b>no written accent</b>.' },
              ex: { es: 'Aun <b>conociendo</b> los riesgos, decidieron seguir adelante.', ru: 'Даже зная о рисках, они решили продолжать.', en: 'Even knowing the risks, they decided to go ahead.' } },
            { num: '5', color: 'amber', title: { ru: 'Aun cuando · incluso si · ni aunque', en: 'Aun cuando · incluso si · ni aunque' }, sub: { ru: '«даже если»', en: '“even if”' },
              phrases: ['aun cuando', 'incluso si', 'ni aunque'],
              body: { ru: '<i>Aun cuando</i> — книжный синоним <i>aunque</i>. <i>Incluso si</i> ведёт себя как <i>si</i>. <i>Ni aunque</i> — «даже если бы… — нет», обычно с imperfecto de subjuntivo.', en: '<i>Aun cuando</i> is a formal synonym of <i>aunque</i>. <i>Incluso si</i> behaves like <i>si</i>. <i>Ni aunque</i> — “not even if”, usually with the imperfect subjunctive.' },
              ex: { es: 'No lo haría ni aunque me <b>pagaran</b>.', ru: 'Я бы этого не сделал, даже если бы мне заплатили.', en: 'I wouldn’t do it even if they paid me.' } }
          ] },
          { type: 'conj', heading: { ru: 'Индикатив или субхунтив', en: 'Indicative or subjunctive' }, verbs: [
            { inf: 'a pesar de que', tr: { ru: 'как aunque', en: 'like aunque' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['hecho', 'A pesar de que <b>llueve</b>, saldremos.'], ['hecho', 'A pesar de que <b>es</b> caro, lo compro.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['hipótesis', 'A pesar de que <b>llueva</b>, saldremos.'], ['hipótesis', 'A pesar de que <b>sea</b> caro, lo compraré.']] }
            ] },
            { inf: 'incluso si', tr: { ru: 'как si: без presente de subjuntivo; pasado = imperfecto de subjuntivo', en: 'like si: no present subjunctive; pasado = imperfecto de subjuntivo' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['real', 'Incluso si <b>llueve</b>, saldremos.']] },
              { label: 'Pasado', color: 'teal', rows: [['irreal', 'Incluso si <b>lloviera</b>, saldríamos.']] }
            ] }
          ] },
          { type: 'text', heading: { ru: 'Ловушка', en: 'Trap' }, body: {
            ru: '<i>Incluso si</i> никогда не берёт presente de subjuntivo: не <i>*incluso si llueva</i>, а <i>incluso si llueve</i> или <i>aunque llueva</i>. <i>Si bien</i> и <i>y eso que</i> — только indicativo.',
            en: '<i>Incluso si</i> never takes the present subjunctive: not <i>*incluso si llueva</i>, but <i>incluso si llueve</i> or <i>aunque llueva</i>. <i>Si bien</i> and <i>y eso que</i> take the indicative only.' } },
          { type: 'markers', heading: { ru: 'Кто с каким наклонением', en: 'Which mood goes where' }, groups: [
            { color: 'amber', title: { ru: 'Indicativo или subjuntivo', en: 'Indicative or subjunctive' }, tags: ['aunque', 'a pesar de que', 'pese a que', 'aun cuando', 'por mucho que', 'por más que', 'por muy … que'] },
            { color: 'blue', title: { ru: 'Только indicativo', en: 'Indicative only' }, tags: ['si bien', 'y eso que'] },
            { color: 'coral', title: { ru: 'Только subjuntivo', en: 'Subjunctive only' }, tags: ['así', 'mal que', 'ni aunque'] },
            { color: 'purple', title: { ru: 'Без спрягаемого глагола', en: 'No conjugated verb' }, tags: ['a pesar de + sustantivo', 'pese a + infinitivo', 'aun + gerundio', 'con + infinitivo'] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'blue', es: 'A pesar de que <b>estaba</b> enfermo, fue a trabajar.', ru: 'Несмотря на то что он был болен, он пошёл на работу.', en: 'Even though he was ill, he went to work.' },
            { color: 'blue', es: 'Si bien el informe <b>es</b> completo, contiene algunos errores.', ru: 'Хотя отчёт и полный, в нём есть несколько ошибок.', en: 'While the report is thorough, it contains a few errors.' },
            { color: 'purple', es: 'Aun <b>teniendo</b> razón, perdió la discusión.', ru: 'Даже будучи правым, он проиграл спор.', en: 'Even though he was right, he lost the argument.' }
          ] }
        ]
      },
      {
        id: 'register', label: { ru: 'Регистр', en: 'Register' },
        blocks: [
          { type: 'table', heading: { ru: 'Где что уместно', en: 'Where each one fits' },
            head: [{ ru: 'Союз', en: 'Connector' }, { ru: 'Регистр', en: 'Register' }, { ru: 'Наклонение', en: 'Mood' }],
            rows: [
              ['aunque', { ru: 'нейтральный', en: 'neutral' }, 'ind. / subj.'],
              ['a pesar de que', { ru: 'нейтральный', en: 'neutral' }, 'ind. / subj.'],
              ['por más que', { ru: 'нейтральный', en: 'neutral' }, 'ind. / subj.'],
              ['pese a que', { ru: 'книжный, пресса', en: 'formal, press' }, 'ind. / subj.'],
              ['aun cuando', { ru: 'книжный', en: 'formal' }, 'ind. / subj.'],
              ['si bien', { ru: 'книжный', en: 'formal' }, 'indicativo'],
              ['y eso que', { ru: 'разговорный', en: 'colloquial' }, 'indicativo'],
              ['así', { ru: 'разговорный, резкий', en: 'colloquial, emphatic' }, 'subjuntivo'],
              ['mal que', { ru: 'устойчивое', en: 'set phrase' }, 'subjuntivo'],
              ['con + infinitivo', { ru: 'литературный', en: 'literary' }, '—']
            ] },
          { type: 'rules', heading: { ru: 'Приметы стиля', en: 'Style markers' }, items: [
            { color: 'coral', title: { ru: 'Así + subjuntivo', en: 'Así + subjuntivo' }, es: 'así + subjuntivo',
              body: { ru: 'Разговорное и резкое «даже если», «пусть хоть»: <i>No se lo digo así me maten</i>. Не путать с <i>así</i> «так».', en: 'A colloquial, emphatic “even if”: <i>No se lo digo así me maten</i>. Don’t confuse it with <i>así</i> “like this”.' } },
            { color: 'coral', title: { ru: 'Mal que + subjuntivo', en: 'Mal que + subjuntivo' }, es: 'mal que me / te / le pese',
              body: { ru: 'Устойчивое «нравится или нет»: <i>mal que nos pese…</i>', en: 'A set phrase, “like it or not”: <i>mal que nos pese…</i>' } },
            { color: 'purple', title: { ru: 'Con + infinitivo', en: 'Con + infinitivo' }, es: 'con + infinitivo',
              body: { ru: 'Литературное «при всём том, что»: <i>Con ser tan listo, no aprobó</i>.', en: 'Literary “for all that”: <i>Con ser tan listo, no aprobó</i>.' } },
            { color: 'coral', title: { ru: 'Повтор глагола', en: 'Repeated verb' }, es: 'digan lo que digan',
              body: { ru: 'Глагол в subjuntivo дважды — «что бы ни, как бы ни»: <i>sea como sea, quieras o no, cueste lo que cueste</i>.', en: 'The verb twice in the subjunctive — “whatever, however”: <i>sea como sea, quieras o no, cueste lo que cueste</i>.' } }
          ] },
          { type: 'conj', heading: { ru: 'Одна мысль — три регистра', en: 'One idea, three registers' }, verbs: [
            { inf: 'y eso que · así', tr: { ru: 'разговорный', en: 'colloquial' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['hecho', 'Aprobó, y eso que no <b>estudió</b>.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['hipótesis', 'No voy, así me lo <b>pidas</b>.']] }
            ] },
            { inf: 'aunque', tr: { ru: 'нейтральный', en: 'neutral' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['hecho', 'Aprobó aunque no <b>estudió</b>.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['hipótesis', 'No voy aunque me lo <b>pidas</b>.']] }
            ] },
            { inf: 'si bien · aun cuando', tr: { ru: 'книжный', en: 'formal' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['hecho', 'Si bien no <b>estudió</b>, aprobó.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['hipótesis', 'No iré aun cuando me lo <b>pidas</b>.']] }
            ] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'coral', es: 'Mal que te <b>pese</b>, tu hermano tiene razón.', ru: 'Нравится тебе это или нет, твой брат прав.', en: 'Like it or not, your brother is right.' },
            { color: 'coral', es: '<b>Digan</b> lo que <b>digan</b>, yo me quedo.', ru: 'Что бы ни говорили, я остаюсь.', en: 'Whatever they say, I’m staying.' },
            { color: 'purple', es: '<b>Con ser</b> tan inteligente, no supo resolverlo.', ru: 'При всём своём уме он не сумел это решить.', en: 'For all his intelligence, he couldn’t solve it.' }
          ] },
          { type: 'tip', heading: { ru: 'Шпаргалка', en: 'Cheat sheet' }, title: { ru: 'Как выбрать', en: 'How to choose' }, body: {
            ru: ['Факт → <b>indicativo</b> (aunque, si bien, y eso que). Гипотеза или «неважно» → <b>subjuntivo</b>. Нереальное → imperfecto или pluscuamperfecto de subjuntivo.',
                 'Разговор — <i>y eso que, así</i>; текст, доклад — <i>si bien, pese a que, aun cuando</i>.'],
            en: ['A fact → <b>indicative</b> (aunque, si bien, y eso que). A hypothesis or “it doesn’t matter” → <b>subjunctive</b>. Unreal → imperfect or pluperfect subjunctive.',
                 'Conversation — <i>y eso que, así</i>; writing, a report — <i>si bien, pese a que, aun cuando</i>.'] } }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'text', heading: { ru: 'Метки', en: 'Labels' }, body: {
            ru: '<b>ind</b> — indicativo, <b>pre</b> — presente de subjuntivo, <b>imp</b> — imperfecto de subjuntivo, <b>plu</b> — pluscuamperfecto de subjuntivo, <b>inf</b> — инфинитив, <b>sus</b> — существительное.',
            en: '<b>ind</b> — indicative, <b>pre</b> — present subjunctive, <b>imp</b> — imperfect subjunctive, <b>plu</b> — pluperfect subjunctive, <b>inf</b> — infinitive, <b>sus</b> — noun.' } },
          { type: 'examples', heading: { ru: 'Все случаи', en: 'All the cases' }, items: [
            { badge: 'ind', color: 'blue', es: 'Aunque no <b>tengo</b> mucho dinero, viajo cada verano.', ru: 'Хотя у меня немного денег, я путешествую каждое лето.', en: 'Although I don’t have much money, I travel every summer.' },
            { badge: 'ind', color: 'blue', es: 'Aunque <b>vivimos</b> cerca, casi nunca nos vemos.', ru: 'Хотя мы живём рядом, мы почти не видимся.', en: 'Although we live nearby, we hardly ever see each other.' },
            { badge: 'ind', color: 'blue', es: 'Por más que se lo <b>expliqué</b>, no lo entendió.', ru: 'Сколько я ему ни объяснял, он так и не понял.', en: 'However much I explained it to him, he didn’t understand.' },
            { badge: 'ind', color: 'blue', es: 'A pesar de que el hotel <b>era</b> caro, merecía la pena.', ru: 'Хотя отель был дорогим, он того стоил.', en: 'Although the hotel was expensive, it was worth it.' },
            { badge: 'ind', color: 'blue', es: 'Me encanta este barrio, y eso que al principio no me <b>gustaba</b> nada.', ru: 'Обожаю этот район, а ведь поначалу он мне совсем не нравился.', en: 'I love this neighbourhood, even though at first I didn’t like it at all.' },
            { badge: 'ind', color: 'blue', es: 'Si bien los datos <b>son</b> alentadores, conviene ser prudentes.', ru: 'Хотя данные обнадёживают, стоит проявлять осторожность.', en: 'Although the figures are encouraging, it is wise to be cautious.' },
            { badge: 'ind', color: 'blue', es: 'Incluso si <b>perdemos</b>, habrá valido la pena.', ru: 'Даже если мы проиграем, оно того стоило.', en: 'Even if we lose, it will have been worth it.' },
            { badge: 'pre', color: 'coral', es: 'Aunque me lo <b>pidas</b> mil veces, no pienso hacerlo.', ru: 'Даже если ты попросишь меня тысячу раз, я не стану этого делать.', en: 'Even if you ask me a thousand times, I’m not doing it.' },
            { badge: 'pre', color: 'coral', es: 'Aunque no te <b>guste</b>, tienes que ir a la reunión.', ru: 'Пусть тебе это и не нравится, на собрание идти надо.', en: 'Whether you like it or not, you have to go to the meeting.' },
            { badge: 'pre', color: 'coral', es: 'Aunque me <b>ofrezcan</b> más dinero, no pienso cambiar de empresa.', ru: 'Даже если мне предложат больше денег, я не собираюсь менять компанию.', en: 'Even if they offer me more money, I’m not changing companies.' },
            { badge: 'pre', color: 'coral', es: 'Por mucho que <b>insistáis</b>, no vamos a cambiar de opinión.', ru: 'Сколько бы вы ни настаивали, мы не передумаем.', en: 'However much you insist, we won’t change our minds.' },
            { badge: 'pre', color: 'coral', es: 'Por muchas vueltas que le <b>demos</b>, el problema sigue ahí.', ru: 'Сколько бы мы ни ломали над этим голову, проблема никуда не девается.', en: 'However much we mull it over, the problem is still there.' },
            { badge: 'pre', color: 'coral', es: 'Por poco que <b>ahorres</b> cada mes, a final de año notarás la diferencia.', ru: 'Как бы мало ты ни откладывал каждый месяц, к концу года заметишь разницу.', en: 'However little you save each month, you’ll notice the difference by the end of the year.' },
            { badge: 'pre', color: 'coral', es: 'Por muy ocupados que <b>estén</b>, deberían contestar los correos.', ru: 'Как бы они ни были заняты, им следовало бы отвечать на письма.', en: 'However busy they are, they should answer their emails.' },
            { badge: 'pre', color: 'coral', es: 'Aun cuando <b>ganes</b> la apelación, el proceso será largo.', ru: 'Даже если ты выиграешь апелляцию, процесс будет долгим.', en: 'Even if you win the appeal, the process will be long.' },
            { badge: 'pre', color: 'coral', es: 'Aunque <b>sea</b> tarde, llámame cuando llegues.', ru: 'Даже если будет поздно, позвони мне, когда доберёшься.', en: 'Even if it’s late, call me when you get there.' },
            { badge: 'pre', color: 'coral', es: '<b>Pase</b> lo que <b>pase</b>, llámame.', ru: 'Что бы ни случилось, звони мне.', en: 'Whatever happens, call me.' },
            { badge: 'pre', color: 'coral', es: 'No se lo perdono así me lo <b>pida</b> de rodillas.', ru: 'Не прощу его, даже если будет умолять на коленях.', en: 'I won’t forgive him even if he begs me on his knees.' },
            { badge: 'imp', color: 'teal', es: 'Aunque <b>tuviera</b> tiempo, no iría a esa fiesta.', ru: 'Даже будь у меня время, я бы не пошёл на эту вечеринку.', en: 'Even if I had time, I wouldn’t go to that party.' },
            { badge: 'imp', color: 'teal', es: 'Aunque <b>tuviéramos</b> más espacio, no adoptaríamos otro perro.', ru: 'Даже будь у нас больше места, мы бы не взяли ещё одну собаку.', en: 'Even if we had more space, we wouldn’t adopt another dog.' },
            { badge: 'plu', color: 'teal', es: 'Aunque <b>hubierais salido</b> antes, habríais perdido el tren.', ru: 'Даже если бы вы вышли раньше, вы бы всё равно опоздали на поезд.', en: 'Even if you had left earlier, you would have missed the train.' },
            { badge: 'inf', color: 'purple', es: 'A pesar de <b>estar</b> agotados, terminamos el trabajo.', ru: 'Несмотря на усталость, мы закончили работу.', en: 'Despite being exhausted, we finished the job.' },
            { badge: 'sus', color: 'purple', es: '<b>Pese a</b> los esfuerzos del Gobierno, el paro sigue subiendo.', ru: 'Несмотря на усилия правительства, безработица продолжает расти.', en: 'Despite the government’s efforts, unemployment keeps rising.' }
          ] }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Мы не знаем, будет ли завтра дождь. Выберите форму.', en: 'We don’t know whether it will rain tomorrow. Choose the form.' }, es: 'Aunque ___ mañana, iremos de excursión. (llover)',
        options: ['llueve', 'llueva', 'llovía'], answer: 1,
        explain: { ru: 'Возможность в будущем, «даже если» — aunque + presente de subjuntivo: llueva.', en: 'A future possibility, “even if” — aunque + present subjunctive: llueva.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Suspendió el examen, y eso que ___ mucho. (estudiar)',
        options: ['estudiara', 'estudie', 'estudió'], answer: 2,
        explain: { ru: 'Y eso que вводит известный факт и требует indicativo: estudió.', en: 'Y eso que introduces a known fact and takes the indicative: estudió.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Por mucho que ___, no lo vas a convencer. (insistir, tú)',
        options: ['insistas', 'insististe', 'insistiendo'], answer: 0,
        explain: { ru: 'Речь о будущем (no lo vas a convencer) — por mucho que + subjuntivo: insistas.', en: 'It is about the future (no lo vas a convencer) — por mucho que + subjunctive: insistas.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Todavía no sé cuánto cuesta, pero por muy caro que ___, lo compraré. (ser)',
        options: ['es', 'sea', 'será'], answer: 1,
        explain: { ru: 'Цена неизвестна — гипотеза: por muy… que + subjuntivo: sea.', en: 'The price is unknown, so it is hypothetical: por muy… que + subjunctive: sea.' } },
      { prompt: { ru: 'Я не миллионер. Выберите форму.', en: 'I am not a millionaire. Choose the form.' }, es: 'Aunque ___ millonario, no viviría en esa casa. (ser, yo)',
        options: ['soy', 'sea', 'fuera'], answer: 2,
        explain: { ru: 'Нереальное в настоящем, в главной части condicional — aunque + Imperfecto de subjuntivo: fuera.', en: 'An unreal present with the conditional in the main clause — aunque + Imperfecto de subjuntivo: fuera.' } },
      { prompt: { ru: 'Выберите вариант', en: 'Choose the option' }, es: '___ llovía, salimos a pasear.',
        options: ['A pesar de', 'A pesar de que', 'Por mucho'], answer: 1,
        explain: { ru: 'Перед спрягаемым глаголом нужно a pesar de que; a pesar de — перед существительным или инфинитивом.', en: 'Before a conjugated verb you need a pesar de que; a pesar de goes before a noun or an infinitive.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Si bien ___ razón en parte, su tono fue inaceptable. (tener, él)',
        options: ['tenga', 'tenía', 'tuviera'], answer: 1,
        explain: { ru: 'Si bien вводит признаваемый факт — только indicativo: tenía.', en: 'Si bien introduces an admitted fact — indicative only: tenía.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: '___ sabiendo la respuesta, no dijo nada.',
        options: ['Aun', 'Aunque', 'Por más'], answer: 0,
        explain: { ru: 'С герундием — aun («даже»): aun sabiendo.', en: 'With a gerund use aun (“even”): aun sabiendo.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Aunque me lo ___ pedido de rodillas, no habría ido.',
        options: ['habías', 'hubieras', 'habrías'], answer: 1,
        explain: { ru: 'Нереальное в прошлом (no habría ido) — aunque + Pluscuamperfecto de subjuntivo: hubieras pedido.', en: 'An unreal past (no habría ido) — aunque + Pluscuamperfecto de subjuntivo: hubieras pedido.' } }
    ]
  },
  {
    id: 'c1-conectores', level: 'C1',
    title: { ru: 'Коннекторы связной речи', en: 'Discourse connectors' },
    hero: {
      es: 'Conectores <b>del discurso</b>',
      sub: { ru: 'Además, sin embargo, de ahí que, es decir: как связывать мысли в тексте',
             en: 'Además, sin embargo, de ahí que, es decir: how to link ideas in a text' }
    },
    tabs: [
      {
        id: 'map', label: { ru: 'Карта', en: 'Map' },
        blocks: [
          { type: 'text', heading: { ru: 'Зачем нужны коннекторы', en: 'What connectors do' }, body: {
            ru: ['Коннектор показывает, как новая мысль связана с предыдущей: добавляет, противопоставляет, объясняет причину, делает вывод. Правильный коннектор делает текст уровня C1 ясным и убедительным.',
                 'Большинство коннекторов отделяются запятыми, а перед ними ставят точку или точку с запятой: <i>El hotel era caro; sin embargo, merecía la pena.</i>'],
            en: ['A connector shows how a new idea relates to the previous one: it adds, contrasts, gives a reason or draws a conclusion. The right connector makes a C1 text clear and convincing.',
                 'Most connectors are set off by commas and preceded by a full stop or a semicolon: <i>El hotel era caro; sin embargo, merecía la pena.</i>'] } },
          { type: 'table', heading: { ru: 'Карта коннекторов', en: 'A map of connectors' },
            head: ['función', 'conectores'],
            rows: [
              ['adición', 'además · asimismo'],
              ['adición enfática', 'es más · encima (coloq.)'],
              ['contraste', 'sin embargo · no obstante'],
              ['contraste', 'aun así'],
              ['oposición', 'en cambio · por el contrario'],
              ['causa', 'porque'],
              ['causa', 'ya que · puesto que · dado que'],
              ['causa (al inicio)', 'como'],
              ['consecuencia', 'por lo tanto · así que'],
              ['consecuencia formal', 'por consiguiente'],
              ['consecuencia + subjuntivo', 'de ahí que'],
              ['reformulación', 'es decir · o sea · mejor dicho'],
              ['ejemplo', 'por ejemplo · en concreto'],
              ['ejemplo', 'así'],
              ['orden', 'en primer lugar · por último'],
              ['orden', 'por otra parte'],
              ['conclusión', 'en resumen · en definitiva'],
              ['conclusión', 'en conclusión']
            ] },
          { type: 'tip', heading: { ru: 'Пунктуация', en: 'Punctuation' }, title: { ru: 'Точка — коннектор — запятая', en: 'Full stop — connector — comma' }, body: {
            ru: ['Между двумя предложениями: <b>. / ;</b> + коннектор + <b>,</b> — <i>…; no obstante, …</i>',
                 'Внутри предложения коннектор выделяют запятыми с двух сторон: <i>El plan, sin embargo, fracasó.</i>'],
            en: ['Between two sentences: <b>. / ;</b> + connector + <b>,</b> — <i>…; no obstante, …</i>',
                 'Inside a sentence the connector takes a comma on both sides: <i>El plan, sin embargo, fracasó.</i>'] } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'teal', es: 'El piso es luminoso; <b>además</b>, está bien comunicado.', ru: 'Квартира светлая; к тому же у неё удобное транспортное сообщение.', en: 'The flat is bright; what’s more, it has good transport links.' },
            { color: 'amber', es: 'Llovía a mares; <b>aun así</b>, salimos a correr.', ru: 'Лил сильный дождь; и всё же мы вышли на пробежку.', en: 'It was pouring; even so, we went out for a run.' }
          ] }
        ]
      },
      {
        id: 'addition', label: { ru: 'Добавление', en: 'Addition' },
        blocks: [
          { type: 'rules', heading: { ru: 'Добавить мысль', en: 'Adding an idea' }, items: [
            { color: 'teal', title: { ru: 'Además · asimismo', en: 'Además · asimismo' }, es: 'además · asimismo',
              body: { ru: '«Кроме того, также». <i>Además</i> — нейтральное, <i>asimismo</i> — книжное, для докладов и прессы.', en: '“Besides, also”. <i>Además</i> is neutral; <i>asimismo</i> is formal, for reports and the press.' } },
            { color: 'teal', title: { ru: 'Es más', en: 'Es más' }, es: 'es más',
              body: { ru: '«Более того»: вторая мысль сильнее первой.', en: '“What’s more, in fact”: the second idea is stronger than the first.' } },
            { color: 'teal', title: { ru: 'Encima', en: 'Encima' }, es: 'encima (coloquial)',
              body: { ru: 'Разговорное «вдобавок ещё и» — обычно о чём-то неприятном.', en: 'Colloquial “on top of that” — usually about something unpleasant.' } },
            { color: 'teal', title: { ru: 'Incluso · por otra parte', en: 'Incluso · por otra parte' }, es: 'incluso · hasta · por otra parte',
              body: { ru: '<i>Incluso, hasta</i> — «даже» (самый неожиданный элемент). <i>Por otra parte, por otro lado</i> — «с другой стороны; кроме того»: новый аспект темы.', en: '<i>Incluso, hasta</i> — “even” (the most unexpected item). <i>Por otra parte, por otro lado</i> — “on the other hand; besides”: a new aspect of the topic.' } }
          ] },
          { type: 'table', heading: { ru: 'Además (между фразами) или además de (внутри)', en: 'Además (between sentences) or además de (inside one)' },
            head: ['', 'ejemplo'],
            rows: [
              ['además,', 'Es caro; además, es feo.'],
              ['además,', 'Trabaja; además, estudia.'],
              ['además de', 'Además de caro, es feo.'],
              ['además de', 'Además de trabajar, estudia.']
            ] },
          { type: 'text', heading: { ru: 'Внимание', en: 'Watch out' }, body: {
            ru: '<i>Encima</i> в эссе и деловом письме не годится — там <i>además, es más, asimismo</i>. <i>Es más</i> ставят после точки или точки с запятой, и оно всегда усиливает, а не просто добавляет.',
            en: '<i>Encima</i> is out of place in an essay or a business letter — use <i>además, es más, asimismo</i>. <i>Es más</i> comes after a full stop or a semicolon, and it always intensifies rather than simply adds.' } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'teal', es: 'Llegó tarde y, <b>encima</b>, sin disculparse.', ru: 'Он опоздал и вдобавок даже не извинился.', en: 'He was late and, on top of that, didn’t apologise.' },
            { color: 'teal', es: 'No me apetece salir; <b>es más</b>, creo que me voy a acostar ya.', ru: 'Мне не хочется никуда идти; более того, я, пожалуй, уже лягу спать.', en: 'I don’t feel like going out; in fact, I think I’ll go to bed now.' },
            { color: 'teal', es: 'El ayuntamiento renovará el parque. <b>Asimismo</b>, ampliará el carril bici.', ru: 'Мэрия обновит парк. Также она расширит велодорожку.', en: 'The city council will renovate the park. It will also extend the cycle lane.' }
          ] }
        ]
      },
      {
        id: 'contrast', label: { ru: 'Контраст', en: 'Contrast' },
        blocks: [
          { type: 'rules', heading: { ru: 'Противопоставление', en: 'Contrast' }, items: [
            { color: 'amber', title: { ru: 'Sin embargo · no obstante', en: 'Sin embargo · no obstante' }, es: 'sin embargo · no obstante',
              body: { ru: '«Однако»: вторая мысль идёт <b>вопреки</b> первой. <i>No obstante</i> — книжнее.', en: '“However”: the second idea goes <b>against</b> the first. <i>No obstante</i> is more formal.' } },
            { color: 'amber', title: { ru: 'Aun así', en: 'Aun así' }, es: 'aun así',
              body: { ru: '«И всё же, даже при этом»: препятствие было, но действие состоялось.', en: '“Even so”: there was an obstacle, but the action still happened.' } },
            { color: 'amber', title: { ru: 'En cambio · por el contrario', en: 'En cambio · por el contrario' }, es: 'en cambio · por el contrario',
              body: { ru: 'Сравнение двух разных людей или вещей: <i>Él es extrovertido; yo, en cambio, soy tímido</i>.', en: 'Compare two different people or things: <i>Él es extrovertido; yo, en cambio, soy tímido</i>.' } },
            { color: 'amber', title: { ru: 'Pero · sino', en: 'Pero · sino' }, es: 'pero · sino · sino que',
              body: { ru: '<b>Sino</b> — после отрицания, когда заменяем одно другим; перед спрягаемым глаголом — <b>sino que</b>. <b>Pero</b> ничего не заменяет, а добавляет оговорку.', en: '<b>Sino</b> follows a negative when one thing replaces another; before a conjugated verb use <b>sino que</b>. <b>Pero</b> replaces nothing; it adds a reservation.' } }
          ] },
          { type: 'examples', heading: { ru: 'Pero, sino или sino que: оговорка или замена', en: 'Pero, sino or sino que: reservation or replacement' }, items: [
            { badge: 'pe', color: 'amber', es: 'No es caro, <b>pero</b> tampoco es barato.', ru: 'Не дорого, но и не дёшево (añade — добавляет оговорку).', en: 'It isn’t expensive, but it isn’t cheap either (añade — adds a reservation).' },
            { badge: 'si', color: 'amber', es: 'No es rojo, <b>sino</b> naranja.', ru: 'Он не красный, а оранжевый (sustituye — заменяет).', en: 'It isn’t red but orange (sustituye — replaces).' },
            { badge: 'sq', color: 'amber', es: 'No solo no me ayudó, <b>sino que</b> se rió de mí.', ru: 'Он не только не помог мне, но ещё и посмеялся надо мной (+ verbo).', en: 'Not only did he not help me, he laughed at me (+ verbo).' }
          ] },
          { type: 'text', heading: { ru: 'Внимание', en: 'Watch out' }, body: {
            ru: '<i>En cambio</i> не синоним <i>sin embargo</i>: он сравнивает двух разных участников, а не спорит с предыдущей мыслью. Не <i>*Estudié mucho; en cambio, suspendí</i>, а <i>…; sin embargo, suspendí</i>.',
            en: '<i>En cambio</i> is not a synonym of <i>sin embargo</i>: it compares two different participants rather than going against the previous idea. Not <i>*Estudié mucho; en cambio, suspendí</i>, but <i>…; sin embargo, suspendí</i>.' } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'amber', es: 'El plan parecía perfecto; <b>sin embargo</b>, fracasó.', ru: 'План казался идеальным; однако он провалился.', en: 'The plan seemed perfect; however, it failed.' },
            { color: 'amber', es: 'No vino a ayudar, <b>sino</b> a criticar.', ru: 'Он пришёл не помогать, а критиковать.', en: 'He didn’t come to help but to criticise.' },
            { color: 'amber', es: 'Madrid es caótica; Valencia, <b>en cambio</b>, es mucho más tranquila.', ru: 'Мадрид хаотичен, а Валенсия, напротив, гораздо спокойнее.', en: 'Madrid is chaotic; Valencia, by contrast, is much calmer.' }
          ] }
        ]
      },
      {
        id: 'cause', label: { ru: 'Причина', en: 'Cause' },
        blocks: [
          { type: 'rules', heading: { ru: 'Причина и следствие', en: 'Cause and consequence' }, items: [
            { color: 'blue', title: { ru: 'Como · porque', en: 'Como · porque' }, es: 'como… , … · … porque…',
              body: { ru: '<b>Como</b> в значении «так как» стоит только <b>в начале</b> фразы: <i>Como no tenía coche, fui andando</i>. <b>Porque</b>, наоборот, обычно стоит после главной части: <i>Fui andando porque no tenía coche</i>.', en: '<b>Como</b> meaning “since” goes only <b>at the start</b> of the sentence: <i>Como no tenía coche, fui andando</i>. <b>Porque</b>, by contrast, usually follows the main clause: <i>Fui andando porque no tenía coche</i>.' } },
            { color: 'blue', title: { ru: 'Ya que · puesto que · dado que', en: 'Ya que · puesto que · dado que' }, es: 'ya que · puesto que · dado que',
              body: { ru: 'Причина, известная собеседнику; могут стоять и в начале, и в середине.', en: 'A reason the listener already knows; they can go at the start or in the middle.' } },
            { color: 'blue', title: { ru: 'Por lo tanto · así que', en: 'Por lo tanto · así que' }, es: 'por lo tanto · por consiguiente · así que',
              body: { ru: 'Следствие, с <b>indicativo</b>. <i>Así que</i> — разговорное, <i>por consiguiente</i> — книжное.', en: 'A consequence, with the <b>indicative</b>. <i>Así que</i> is colloquial, <i>por consiguiente</i> formal.' } },
            { color: 'coral', title: { ru: 'De ahí que', en: 'De ahí que' }, es: 'de ahí que + subjuntivo',
              body: { ru: '«Отсюда и…» — требует <b>subjuntivo</b>: <i>Ha llovido poco; de ahí que los embalses estén vacíos</i>.', en: '“Hence” — takes the <b>subjunctive</b>: <i>Ha llovido poco; de ahí que los embalses estén vacíos</i>.' } }
          ] },
          { type: 'conj', heading: { ru: 'Indicativo или subjuntivo', en: 'Indicative or subjunctive' }, verbs: [
            { inf: 'por eso · de ahí que', tr: { ru: 'одно следствие, два наклонения', en: 'one consequence, two moods' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['por eso', 'Llovió poco; por eso <b>hay</b> sequía.'], ['por lo tanto', 'Es tarde; por lo tanto, <b>cerramos</b>.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['de ahí que', 'Llovió poco; de ahí que <b>haya</b> sequía.'], ['de ahí que', 'Es tarde; de ahí que <b>cerremos</b>.']] }
            ] }
          ] },
          { type: 'table', heading: { ru: 'Где стоит причина', en: 'Where the reason goes' },
            head: [{ ru: 'Союз', en: 'Connector' }, { ru: 'Позиция', en: 'Position' }, 'ejemplo'],
            rows: [
              ['como', { ru: 'только в начале', en: 'only at the start' }, 'Como llovía, no salí.'],
              ['porque', { ru: 'после главной части', en: 'after the main clause' }, 'No salí porque llovía.'],
              ['ya que · puesto que', { ru: 'в начале или в середине', en: 'at the start or in the middle' }, 'Ya que estás aquí, ayúdame.'],
              ['dado que', { ru: 'в начале, книжно', en: 'at the start, formal' }, 'Dado que no hay quórum, …']
            ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'blue', es: '<b>Como</b> era tarde, cogimos un taxi.', ru: 'Так как было поздно, мы взяли такси.', en: 'Since it was late, we took a taxi.' },
            { color: 'blue', es: '<b>Dado que</b> nadie se opone, aprobamos la propuesta.', ru: 'Поскольку никто не возражает, мы принимаем предложение.', en: 'Since no one objects, we approve the proposal.' },
            { color: 'coral', es: 'Es un tema delicado; <b>de ahí que</b> nadie <b>quiera</b> hablar de él.', ru: 'Это деликатная тема, поэтому никто и не хочет о ней говорить.', en: 'It’s a sensitive subject; hence nobody wants to talk about it.' }
          ] }
        ]
      },
      {
        id: 'rephrase', label: { ru: 'Уточнение', en: 'Rephrasing' },
        blocks: [
          { type: 'rules', heading: { ru: 'Переформулировать и организовать текст', en: 'Rephrasing and organising a text' }, items: [
            { color: 'purple', title: { ru: 'Es decir · o sea', en: 'Es decir · o sea' }, es: 'es decir · o sea',
              body: { ru: '«То есть»: то же самое другими словами. <i>O sea</i> — разговорное.', en: '“That is”: the same thing in other words. <i>O sea</i> is colloquial.' } },
            { color: 'purple', title: { ru: 'Mejor dicho', en: 'Mejor dicho' }, es: 'mejor dicho',
              body: { ru: '«Вернее, точнее»: говорящий поправляет сам себя.', en: '“Or rather”: the speaker corrects himself or herself.' } },
            { color: 'purple', title: { ru: 'Por ejemplo · en concreto · así', en: 'Por ejemplo · en concreto · así' }, es: 'por ejemplo · en concreto · así',
              body: { ru: 'Пример или уточнение: «например», «а именно». <i>Así</i> в начале — книжное «так, например».', en: 'An example or a specification: “for example”, “specifically”. <i>Así</i> at the start is a formal “thus, for instance”.' } },
            { color: 'purple', title: { ru: 'Порядок и вывод', en: 'Order and conclusion' }, es: 'en primer lugar · por último · en definitiva',
              body: { ru: 'Порядок: <i>en primer lugar, en segundo lugar, por otra parte, por último</i>. Вывод: <i>en resumen, en conclusión, en definitiva</i> — итог после перечисления.', en: 'Order: <i>en primer lugar, en segundo lugar, por otra parte, por último</i>. Conclusion: <i>en resumen, en conclusión, en definitiva</i> — a summary after a list.' } }
          ] },
          { type: 'rules', heading: { ru: 'Одна функция — два регистра: разговор или текст', en: 'One function, two registers: speech or writing' }, items: [
            { color: 'purple', label: { ru: 'Разговор', en: 'Speech' }, title: { ru: 'Разговорный', en: 'Colloquial' }, es: 'o sea · total · primero, luego',
              body: { ru: '<i>reformular:</i> <b>O sea</b>, que no vienes.<br><i>concluir:</i> <b>Total</b>, que nos quedamos sin cenar.<br><i>ordenar:</i> <b>Primero</b>…, <b>luego</b>…, <b>al final</b>…',
                      en: '<i>reformular:</i> <b>O sea</b>, que no vienes.<br><i>concluir:</i> <b>Total</b>, que nos quedamos sin cenar.<br><i>ordenar:</i> <b>Primero</b>…, <b>luego</b>…, <b>al final</b>…' } },
            { color: 'purple', label: { ru: 'Текст', en: 'Writing' }, title: { ru: 'Книжный', en: 'Formal' }, es: 'es decir · en conclusión · en primer lugar',
              body: { ru: '<i>reformular:</i> <b>Es decir</b>, no asistirá.<br><i>concluir:</i> <b>En conclusión</b>, no hubo acuerdo.<br><i>ordenar:</i> <b>En primer lugar</b>…, <b>asimismo</b>…, <b>por último</b>…',
                      en: '<i>reformular:</i> <b>Es decir</b>, no asistirá.<br><i>concluir:</i> <b>En conclusión</b>, no hubo acuerdo.<br><i>ordenar:</i> <b>En primer lugar</b>…, <b>asimismo</b>…, <b>por último</b>…' } }
          ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'purple', es: 'Vuelvo el viernes, <b>o sea</b>, pasado mañana.', ru: 'Я вернусь в пятницу, то есть послезавтра.', en: 'I’m back on Friday, that is, the day after tomorrow.' },
            { color: 'purple', es: 'Somos cinco, <b>mejor dicho</b>, seis.', ru: 'Нас пятеро, вернее, шестеро.', en: 'There are five of us — six, rather.' },
            { color: 'purple', es: 'Me encanta la fruta tropical, <b>en concreto</b>, el mango.', ru: 'Обожаю тропические фрукты, а именно манго.', en: 'I love tropical fruit — mango in particular.' }
          ] },
          { type: 'tip', heading: { ru: 'Шпаргалка', en: 'Cheat sheet' }, title: { ru: 'Скелет эссе', en: 'Essay skeleton' }, body: {
            ru: ['<b>En primer lugar</b> — тезис → <b>además / asimismo</b> — довод → <b>sin embargo / no obstante</b> — возражение → <b>por lo tanto</b> — вывод из доводов → <b>en definitiva</b> — итог.'],
            en: ['<b>En primer lugar</b> — the claim → <b>además / asimismo</b> — a supporting point → <b>sin embargo / no obstante</b> — an objection → <b>por lo tanto</b> — what follows → <b>en definitiva</b> — the conclusion.'] } }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'text', heading: { ru: 'Метки', en: 'Labels' }, body: {
            ru: '<b>adi</b> — добавление, <b>con</b> — контраст, <b>cau</b> — причина, <b>cns</b> — следствие, <b>ref</b> — уточнение, пример, порядок, вывод.',
            en: '<b>adi</b> — addition, <b>con</b> — contrast, <b>cau</b> — cause, <b>cns</b> — consequence, <b>ref</b> — rephrasing, example, order, conclusion.' } },
          { type: 'examples', heading: { ru: 'Все функции', en: 'All the functions' }, items: [
            { badge: 'adi', color: 'teal', es: 'El curso es gratuito y, <b>además</b>, da créditos universitarios.', ru: 'Курс бесплатный и к тому же даёт университетские кредиты.', en: 'The course is free and, what’s more, it earns university credits.' },
            { badge: 'adi', color: 'teal', es: '<b>Además de</b> hablar inglés, domina el alemán.', ru: 'Помимо английского, он свободно владеет немецким.', en: 'Besides speaking English, he is fluent in German.' },
            { badge: 'adi', color: 'teal', es: 'Se me olvidaron las llaves y, <b>encima</b>, empezó a llover.', ru: 'Я забыл ключи, и вдобавок пошёл дождь.', en: 'I forgot my keys and, on top of that, it started to rain.' },
            { badge: 'adi', color: 'teal', es: 'Todos, <b>incluso</b> los más escépticos, aplaudieron.', ru: 'Все, даже самые скептичные, аплодировали.', en: 'Everyone, even the most sceptical, applauded.' },
            { badge: 'con', color: 'amber', es: 'La propuesta es interesante; <b>no obstante</b>, resulta demasiado cara.', ru: 'Предложение интересное; тем не менее оно слишком дорогое.', en: 'The proposal is interesting; nevertheless, it is too expensive.' },
            { badge: 'con', color: 'amber', es: 'Sabía que era arriesgado; <b>aun así</b>, lo intentó.', ru: 'Он знал, что это рискованно, и всё же попытался.', en: 'He knew it was risky; even so, he tried.' },
            { badge: 'con', color: 'amber', es: 'A mí me encanta el frío; mi pareja, <b>por el contrario</b>, lo odia.', ru: 'Я обожаю холод, а мой партнёр, наоборот, его терпеть не может.', en: 'I love the cold; my partner, on the contrary, hates it.' },
            { badge: 'con', color: 'amber', es: 'No lo hice por dinero, <b>sino</b> por amistad.', ru: 'Я сделал это не ради денег, а по дружбе.', en: 'I didn’t do it for money but out of friendship.' },
            { badge: 'con', color: 'amber', es: 'No solo aprobó, <b>sino que</b> sacó la mejor nota.', ru: 'Он не только сдал, но и получил лучшую оценку.', en: 'Not only did he pass, he got the top mark.' },
            { badge: 'cau', color: 'blue', es: 'No pudimos entrar <b>porque</b> ya habían cerrado.', ru: 'Мы не смогли войти, потому что уже закрыли.', en: 'We couldn’t get in because they had already closed.' },
            { badge: 'cau', color: 'blue', es: '<b>Ya que</b> estás en la cocina, ¿me traes un vaso de agua?', ru: 'Раз уж ты на кухне, принесёшь мне стакан воды?', en: 'Since you’re in the kitchen, could you bring me a glass of water?' },
            { badge: 'cau', color: 'blue', es: '<b>Puesto que</b> el vuelo se ha cancelado, la aerolínea nos pagará el hotel.', ru: 'Поскольку рейс отменили, авиакомпания оплатит нам отель.', en: 'Since the flight has been cancelled, the airline will pay for our hotel.' },
            { badge: 'cns', color: 'blue', es: 'Mañana hay huelga de metro, <b>así que</b> iré en bici.', ru: 'Завтра забастовка в метро, так что я поеду на велосипеде.', en: 'There’s a metro strike tomorrow, so I’ll go by bike.' },
            { badge: 'cns', color: 'blue', es: 'Los resultados no fueron concluyentes; <b>por consiguiente</b>, se repetirá el estudio.', ru: 'Результаты оказались неубедительными; следовательно, исследование повторят.', en: 'The results were inconclusive; consequently, the study will be repeated.' },
            { badge: 'cns', color: 'coral', es: 'Trabaja de noche; <b>de ahí que</b> siempre <b>esté</b> cansado.', ru: 'Он работает по ночам — отсюда и вечная усталость.', en: 'He works nights; hence he is always tired.' },
            { badge: 'cns', color: 'coral', es: 'La demanda ha crecido mucho; <b>de ahí que</b> los precios <b>hayan subido</b>.', ru: 'Спрос сильно вырос, отсюда и рост цен.', en: 'Demand has grown a lot; hence the rise in prices.' },
            { badge: 'ref', color: 'purple', es: 'El examen es el día 15, <b>es decir</b>, el próximo lunes.', ru: 'Экзамен 15-го, то есть в следующий понедельник.', en: 'The exam is on the 15th, that is, next Monday.' },
            { badge: 'ref', color: 'purple', es: 'Hay muchas opciones; <b>por ejemplo</b>, podéis alojaros en un albergue.', ru: 'Вариантов много: например, можно остановиться в хостеле.', en: 'There are lots of options; for example, you could stay in a hostel.' },
            { badge: 'ref', color: 'purple', es: '<b>En primer lugar</b>, quiero daros las gracias a todos por venir.', ru: 'Прежде всего хочу поблагодарить всех вас за то, что пришли.', en: 'First of all, I’d like to thank you all for coming.' },
            { badge: 'ref', color: 'purple', es: '<b>Por último</b>, os recuerdo que el plazo acaba el viernes.', ru: 'И последнее: напоминаю, что срок истекает в пятницу.', en: 'Finally, let me remind you that the deadline is Friday.' },
            { badge: 'ref', color: 'purple', es: '<b>En resumen</b>, ha sido un año difícil pero productivo.', ru: 'Словом, год был трудным, но продуктивным.', en: 'In short, it has been a difficult but productive year.' }
          ] }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите коннектор', en: 'Choose the connector' }, es: 'El proyecto es caro; ___, es muy arriesgado.',
        options: ['sin embargo', 'además', 'es decir'], answer: 1,
        explain: { ru: 'Второй недостаток добавляется к первому — además.', en: 'A second drawback is added to the first — además.' } },
      { prompt: { ru: 'Выберите коннектор', en: 'Choose the connector' }, es: '___ no tenía coche, fui andando.',
        options: ['Como', 'Aunque', 'Sin embargo'], answer: 0,
        explain: { ru: 'Причина в начале фразы — como.', en: 'A reason at the start of the sentence — como.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'No es rojo, ___ naranja.',
        options: ['pero', 'sin embargo', 'sino'], answer: 2,
        explain: { ru: 'После отрицания одно заменяется другим — sino.', en: 'After a negative, one thing replaces another — sino.' } },
      { prompt: { ru: 'Выберите коннектор', en: 'Choose the connector' }, es: 'El tren se retrasó; ___, llegamos tarde a la reunión.',
        options: ['no obstante', 'en cambio', 'por lo tanto'], answer: 2,
        explain: { ru: 'Опоздание — следствие задержки поезда: por lo tanto.', en: 'Being late is a consequence of the delay: por lo tanto.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Ha llovido muy poco este año; de ahí que los embalses ___ casi vacíos. (estar)',
        options: ['están', 'estén', 'estarán'], answer: 1,
        explain: { ru: 'De ahí que требует subjuntivo: estén.', en: 'De ahí que takes the subjunctive: estén.' } },
      { prompt: { ru: 'Выберите коннектор', en: 'Choose the connector' }, es: 'Mi hermano es muy extrovertido; yo, ___, soy bastante tímido.',
        options: ['en cambio', 'además', 'por consiguiente'], answer: 0,
        explain: { ru: 'Сравниваются два разных человека — en cambio.', en: 'Two different people are compared — en cambio.' } },
      { prompt: { ru: 'Выберите коннектор', en: 'Choose the connector' }, es: 'La reunión es el lunes, ___, dentro de tres días.',
        options: ['sin embargo', 'es decir', 'ya que'], answer: 1,
        explain: { ru: 'То же самое другими словами — es decir.', en: 'The same thing in other words — es decir.' } },
      { prompt: { ru: 'Выберите коннектор', en: 'Choose the connector' }, es: '___ no contestas, supongo que no te interesa.',
        options: ['Además de', 'Puesto que', 'A pesar de'], answer: 1,
        explain: { ru: 'Причина, из которой делается вывод, перед спрягаемым глаголом — puesto que.', en: 'A reason leading to a conclusion, before a conjugated verb — puesto que.' } },
      { prompt: { ru: 'Выберите коннектор', en: 'Choose the connector' }, es: 'Hemos analizado los costes, los plazos y los riesgos. ___, el proyecto es viable.',
        options: ['Por ejemplo', 'En definitiva', 'Es más'], answer: 1,
        explain: { ru: 'Итог после перечисления — en definitiva.', en: 'A conclusion after a list — en definitiva.' } },
      { prompt: { ru: 'Выберите вариант', en: 'Choose the option' }, es: 'No solo no me ayudó, ___ se rió de mí.',
        options: ['pero', 'sin embargo', 'sino que'], answer: 2,
        explain: { ru: 'No solo… sino que — перед спрягаемым глаголом нужно sino que.', en: 'No solo… sino que — before a conjugated verb you need sino que.' } }
    ]
  },
  {
    id: 'c1-futuro-condicional-compuesto', level: 'C1',
    title: { ru: 'Предположения: futuro и condicional compuesto', en: 'Guessing: futuro and condicional compuesto' },
    hero: {
      es: 'Futuro y condicional <b>compuesto</b>',
      sub: { ru: 'Habrá salido, estaría, habría salido: догадки, упрёки и другие значения',
             en: 'Habrá salido, estaría, habría salido: guesses, reproaches and other uses' }
    },
    tabs: [
      {
        id: 'form', label: { ru: 'Образование', en: 'Formation' },
        blocks: [
          { type: 'text', heading: { ru: 'Формула', en: 'The formula' }, body: {
            ru: ['<b>Futuro compuesto</b> — haber в futuro + причастие: <i>habré terminado</i>. <b>Condicional compuesto</b> — haber в condicional + причастие: <i>habría terminado</i>.',
                 'Неправильные причастия те же, что в perfecto: <i>puesto, hecho, dicho, visto, vuelto, escrito, roto, abierto, muerto</i>.'],
            en: ['<b>Futuro compuesto</b> is haber in the future + participle: <i>habré terminado</i>. <b>Condicional compuesto</b> is haber in the conditional + participle: <i>habría terminado</i>.',
                 'The irregular participles are the same as in the perfect: <i>puesto, hecho, dicho, visto, vuelto, escrito, roto, abierto, muerto</i>.'] } },
          { type: 'conj', heading: { ru: 'Спряжение: futuro и condicional compuesto', en: 'Conjugation: futuro and condicional compuesto' }, verbs: [
            { inf: 'salir', tr: { ru: 'правильное причастие', en: 'regular participle' }, variants: [
              { label: 'Futuro', color: 'purple', rows: [['yo', '<b>habré</b> salido'], ['tú', '<b>habrás</b> salido'], ['él / ella', '<b>habrá</b> salido'], ['nosotros', '<b>habremos</b> salido'], ['vosotros', '<b>habréis</b> salido'], ['ellos', '<b>habrán</b> salido']] },
              { label: 'Condicional', color: 'teal', rows: [['yo', '<b>habría</b> salido'], ['tú', '<b>habrías</b> salido'], ['él / ella', '<b>habría</b> salido'], ['nosotros', '<b>habríamos</b> salido'], ['vosotros', '<b>habríais</b> salido'], ['ellos', '<b>habrían</b> salido']] }
            ] },
            { inf: 'hacer', tr: { ru: 'причастие hecho', en: 'participle hecho' }, variants: [
              { label: 'Futuro', color: 'purple', rows: [['yo', 'habré <b>hecho</b>'], ['tú', 'habrás <b>hecho</b>'], ['él / ella', 'habrá <b>hecho</b>'], ['nosotros', 'habremos <b>hecho</b>'], ['vosotros', 'habréis <b>hecho</b>'], ['ellos', 'habrán <b>hecho</b>']] },
              { label: 'Condicional', color: 'teal', rows: [['yo', 'habría <b>hecho</b>'], ['tú', 'habrías <b>hecho</b>'], ['él / ella', 'habría <b>hecho</b>'], ['nosotros', 'habríamos <b>hecho</b>'], ['vosotros', 'habríais <b>hecho</b>'], ['ellos', 'habrían <b>hecho</b>']] }
            ] }
          ] },
          { type: 'table', heading: { ru: 'Неправильные причастия', en: 'Irregular participles' },
            head: ['infinitivo', 'participio'],
            rows: [
              ['poner', 'puesto'], ['hacer', 'hecho'], ['decir', 'dicho'], ['ver', 'visto'],
              ['volver', 'vuelto'], ['resolver', 'resuelto'], ['escribir', 'escrito'], ['romper', 'roto'],
              ['abrir', 'abierto'], ['morir', 'muerto'], ['cubrir', 'cubierto'], ['descubrir', 'descubierto']
            ] },
          { type: 'rules', heading: { ru: 'Что они значат', en: 'What they mean' }, items: [
            { color: 'purple', title: { ru: 'Futuro compuesto', en: 'Futuro compuesto' }, es: 'habré salido',
              body: { ru: '1) догадка о недавнем прошлом: «наверное, уже…»; 2) действие, которое <b>завершится к сроку</b> в будущем; 3) уступка о прошлом: «может, и…, но».', en: '1) a guess about the recent past: “must have…”; 2) an action that <b>will be complete by</b> a future point; 3) a concession about the past: “may have…, but”.' } },
            { color: 'teal', title: { ru: 'Condicional compuesto', en: 'Condicional compuesto' }, es: 'habría salido',
              body: { ru: '1) <b>нереальное прошлое</b>, упрёк, сожаление: «сделал бы»; 2) догадка о давнем прошлом (вместо pluscuamperfecto); 3) будущее завершённое в пересказе.', en: '1) the <b>unreal past</b>, reproach, regret: “would have done”; 2) a guess about an earlier past (instead of the pluscuamperfecto); 3) the future perfect in reported speech.' } }
          ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'purple', es: '¿<b>Habrás acabado</b> el informe para el lunes?', ru: 'Ты закончишь отчёт к понедельнику?', en: 'Will you have finished the report by Monday?' },
            { color: 'teal', es: 'Yo no <b>habría dicho</b> eso.', ru: 'Я бы такого не сказал.', en: 'I wouldn’t have said that.' }
          ] }
        ]
      },
      {
        id: 'guess', label: { ru: 'Догадка', en: 'Guessing' },
        blocks: [
          { type: 'text', heading: { ru: 'Сдвиг на шаг вперёд', en: 'One step forward' }, body: {
            ru: ['Вместо «наверное» + время испанец часто просто берёт <b>время на шаг «дальше»</b>. Настоящее → futuro simple, perfecto → futuro compuesto, indefinido и imperfecto → condicional simple, pluscuamperfecto → condicional compuesto.',
                 'Слово <i>probablemente</i> при этом не нужно: сама форма уже значит «наверное». <i>¿Dónde está Ana? — Estará en casa.</i>'],
            en: ['Instead of “probably” + a tense, Spanish often simply uses the <b>tense one step “further”</b>. Present → futuro simple, perfecto → futuro compuesto, indefinido and imperfecto → condicional simple, pluscuamperfecto → condicional compuesto.',
                 'You don’t need <i>probablemente</i>: the form itself already means “probably”. <i>¿Dónde está Ana? — Estará en casa.</i>'] } },
          { type: 'table', heading: { ru: 'Уверенность → догадка', en: 'Certainty → guess' },
            head: ['certeza', 'probabilidad'],
            rows: [
              ['Está en casa.', 'Estará en casa.'],
              ['Ha salido.', 'Habrá salido.'],
              ['Salió.', 'Saldría.'],
              ['Estaba cansado.', 'Estaría cansado.'],
              ['Había salido.', 'Habría salido.']
            ] },
          { type: 'conj', heading: { ru: 'Факт или догадка', en: 'Fact or guess' }, verbs: [
            { inf: 'irse · llegar · estar', tr: { ru: 'одна фраза в двух вариантах', en: 'one sentence, two versions' }, variants: [
              { label: { ru: 'уверенность', en: 'certainty' }, color: 'blue', rows: [['ahora', '<b>Está</b> en el trabajo.'], ['hoy', 'Ya <b>se ha ido</b>.'], ['ayer', '<b>Llegó</b> tarde.'], ['antes', 'Ya <b>se había ido</b>.']] },
              { label: { ru: 'догадка', en: 'guess' }, color: 'purple', rows: [['ahora', '<b>Estará</b> en el trabajo.'], ['hoy', 'Ya <b>se habrá ido</b>.'], ['ayer', '<b>Llegaría</b> tarde.'], ['antes', 'Ya <b>se habría ido</b>.']] }
            ] }
          ] },
          { type: 'text', heading: { ru: 'В вопросе', en: 'In questions' }, body: {
            ru: 'В вопросе та же форма значит «интересно…», «куда же…»: <i>¿Qué hora será?</i> — «интересно, который час?»; <i>¿Dónde habré puesto las gafas?</i> — «куда же я дел очки?».',
            en: 'In a question the same form means “I wonder…”: <i>¿Qué hora será?</i> — “I wonder what time it is”; <i>¿Dónde habré puesto las gafas?</i> — “where on earth have I put my glasses?”.' } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'purple', es: 'Juan no contesta; <b>se habrá dormido</b>.', ru: 'Хуан не отвечает; наверное, уснул.', en: 'Juan isn’t answering; he must have fallen asleep.' },
            { color: 'amber', es: 'Cuando llegué, <b>serían</b> las tres.', ru: 'Когда я пришёл, было, наверное, три часа.', en: 'When I arrived, it must have been about three.' },
            { color: 'teal', es: 'La puerta estaba abierta: alguien la <b>habría dejado</b> así.', ru: 'Дверь была открыта: наверное, кто-то её так оставил.', en: 'The door was open: someone must have left it like that.' }
          ] }
        ]
      },
      {
        id: 'regret', label: { ru: 'Сожаление', en: 'Regret' },
        blocks: [
          { type: 'rules', heading: { ru: 'Упрёк и сожаление', en: 'Reproach and regret' }, items: [
            { color: 'teal', title: { ru: 'Нереальное прошлое', en: 'Unreal past' }, es: 'habría + participio',
              body: { ru: 'То, что могло случиться, но не случилось: <i>Yo en tu lugar habría dicho que no</i>.', en: 'What could have happened but didn’t: <i>Yo en tu lugar habría dicho que no</i>.' } },
            { color: 'coral', title: { ru: 'С условием', en: 'With a condition' }, es: 'si + hubiera + participio',
              body: { ru: 'Полная нереальная условная фраза: условие — pluscuamperfecto de subjuntivo, результат — condicional compuesto.', en: 'A full unreal conditional: the condition takes the pluperfect subjunctive, the result the condicional compuesto.' } },
            { color: 'teal', title: { ru: 'Упрёк', en: 'Reproach' }, es: 'podrías haber + participio',
              body: { ru: '«Мог бы и…»: <i>Podrías haberme ayudado</i> = <i>Me habrías podido ayudar</i>.', en: '“You could have…”: <i>Podrías haberme ayudado</i> = <i>Me habrías podido ayudar</i>.' } },
            { color: 'teal', title: { ru: 'Сожаление', en: 'Regret' }, es: 'me habría gustado + infinitivo',
              body: { ru: '«Хотелось бы (но не вышло)»: <i>Me habría gustado conocerla</i>. Так же <i>habría preferido, habría sido mejor</i>.', en: '“I would have liked to (but didn’t)”: <i>Me habría gustado conocerla</i>. Likewise <i>habría preferido, habría sido mejor</i>.' } }
          ] },
          { type: 'conj', heading: { ru: 'Два порядка слов, две формы', en: 'Two word orders, two forms' }, verbs: [
            { inf: 'poder', tr: { ru: 'упрёк: «мог бы…»', en: 'reproach: “could have…”' }, variants: [
              { label: 'podrías haber', color: 'amber', rows: [['tú', '<b>Podrías haberme</b> llamado.'], ['él', '<b>Podría haberlo</b> dicho antes.'], ['vosotros', '<b>Podríais haber</b> avisado.']] },
              { label: 'habrías podido', color: 'teal', rows: [['tú', '<b>Habrías podido</b> llamarme.'], ['él', '<b>Habría podido</b> decirlo antes.'], ['vosotros', '<b>Habríais podido</b> avisar.']] }
            ] },
            { inf: 'si lo hubiera sabido…', tr: { ru: 'главная часть: два варианта', en: 'main clause: two options' }, variants: [
              { label: 'Condicional', color: 'teal', rows: [['yo', '…, <b>habría</b> ido.'], ['nosotros', '…, <b>habríamos</b> venido.'], ['ellos', '…, <b>habrían</b> llamado.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['yo', '…, <b>hubiera</b> ido.'], ['nosotros', '…, <b>hubiéramos</b> venido.'], ['ellos', '…, <b>hubieran</b> llamado.']] }
            ] }
          ] },
          { type: 'text', heading: { ru: 'Внимание', en: 'Watch out' }, body: {
            ru: 'После <i>si</i> condicional не ставят никогда: не <i>*si habría sabido</i>, а <i>si hubiera sabido</i>. А вот в главной части вместо <i>habría</i> можно сказать <i>hubiera</i> — это обычно в разговоре.',
            en: 'After <i>si</i> never use the conditional: not <i>*si habría sabido</i> but <i>si hubiera sabido</i>. In the main clause, however, <i>hubiera</i> can replace <i>habría</i> — this is common in speech.' } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'teal', es: 'Si me lo hubieras dicho, te <b>habría ayudado</b>.', ru: 'Если бы ты мне сказал, я бы тебе помог.', en: 'If you had told me, I would have helped you.' },
            { color: 'amber', es: '<b>Podrías haberme avisado</b> de que no venías.', ru: 'Мог бы предупредить, что не придёшь.', en: 'You could have told me you weren’t coming.' },
            { color: 'teal', es: '<b>Me habría gustado</b> despedirme de ella.', ru: 'Мне бы хотелось с ней попрощаться.', en: 'I would have liked to say goodbye to her.' }
          ] }
        ]
      },
      {
        id: 'uses', label: { ru: 'Ещё значения', en: 'Other uses' },
        blocks: [
          { type: 'rules', heading: { ru: 'Ещё три значения', en: 'Three more uses' }, items: [
            { color: 'purple', title: { ru: 'Завершится к сроку', en: 'Done by a deadline' }, es: 'para + fecha + futuro compuesto',
              body: { ru: '<b>Futuro compuesto</b> — действие завершится к моменту в будущем: <i>Para junio habré terminado la tesis</i>.', en: '<b>Futuro compuesto</b>: an action will be complete by a point in the future: <i>Para junio habré terminado la tesis</i>.' } },
            { color: 'teal', title: { ru: 'Будущее в прошлом', en: 'Future in the past' }, es: 'dijo que + condicional compuesto',
              body: { ru: '<b>Condicional compuesto</b> — «будущее завершённое» в пересказе: <i>Dijo que para las ocho habría vuelto</i>.', en: '<b>Condicional compuesto</b>: the “future perfect” in reported speech: <i>Dijo que para las ocho habría vuelto</i>.' } },
            { color: 'purple', title: { ru: 'Уступка', en: 'Concession' }, es: 'será…, pero · tendría…, pero',
              body: { ru: '«Может, и так, но…»: <i>Será muy listo, pero no sabe escuchar</i>. О прошлом — condicional: <i>Tendría razón, pero no supo explicarlo</i>.', en: '“That may be so, but…”: <i>Será muy listo, pero no sabe escuchar</i>. About the past use the conditional: <i>Tendría razón, pero no supo explicarlo</i>.' } }
          ] },
          { type: 'conj', heading: { ru: 'Прямая речь и пересказ', en: 'Direct and reported speech' }, verbs: [
            { inf: 'para las ocho', tr: { ru: 'futuro → condicional compuesto', en: 'futuro → condicional compuesto' }, variants: [
              { label: { ru: 'прямая речь', en: 'direct speech' }, color: 'purple', rows: [['yo', '«<b>Habré terminado</b> para las ocho».'], ['nosotros', '«<b>Habremos vuelto</b> antes de cenar».'], ['ellos', '«<b>Habrán llegado</b> a las diez».']] },
              { label: { ru: 'пересказ', en: 'reported' }, color: 'teal', rows: [['yo', 'Dije que <b>habría terminado</b> para las ocho.'], ['nosotros', 'Dijimos que <b>habríamos vuelto</b> antes de cenar.'], ['ellos', 'Dijeron que <b>habrían llegado</b> a las diez.']] }
            ] }
          ] },
          { type: 'markers', heading: { ru: 'Маркеры срока', en: 'Deadline markers' }, groups: [
            { color: 'purple', title: { ru: 'К моменту в будущем', en: 'By a future point' }, tags: ['para junio', 'para entonces', 'para cuando llegues', 'dentro de un mes', 'a finales de año', 'mañana a estas horas'] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'purple', es: 'Dentro de un mes ya <b>habremos vendido</b> la casa.', ru: 'Через месяц мы уже продадим дом.', en: 'In a month we will already have sold the house.' },
            { color: 'purple', es: '<b>Será</b> muy caro, pero vale la pena.', ru: 'Может, это и дорого, но оно того стоит.', en: 'It may be expensive, but it’s worth it.' },
            { color: 'teal', es: 'Me dijeron que para el martes <b>habrían arreglado</b> la lavadora.', ru: 'Мне сказали, что к вторнику починят стиральную машину.', en: 'They told me they would have fixed the washing machine by Tuesday.' }
          ] }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'text', heading: { ru: 'Метки', en: 'Labels' }, body: {
            ru: '<b>hip</b> — догадка, <b>pl</b> — к сроку в будущем, <b>irr</b> — нереальное прошлое, упрёк, сожаление, <b>ind</b> — пересказ, <b>con</b> — уступка.',
            en: '<b>hip</b> — guess, <b>pl</b> — by a future point, <b>irr</b> — unreal past, reproach, regret, <b>ind</b> — reported speech, <b>con</b> — concession.' } },
          { type: 'examples', heading: { ru: 'Все значения', en: 'All the uses' }, items: [
            { badge: 'hip', color: 'purple', es: '¿Dónde está Marta? — No sé, <b>habrá salido</b> a comprar.', ru: '— Где Марта? — Не знаю, наверное, вышла в магазин.', en: '“Where’s Marta?” “I don’t know, she must have gone out shopping.”' },
            { badge: 'hip', color: 'purple', es: 'Tienen cara de cansados; <b>habrán dormido</b> poco.', ru: 'Вид у них усталый — наверное, мало спали.', en: 'They look tired; they can’t have slept much.' },
            { badge: 'hip', color: 'purple', es: '¿Quién <b>habrá dejado</b> la ventana abierta?', ru: 'Интересно, кто оставил окно открытым?', en: 'I wonder who left the window open.' },
            { badge: 'hip', color: 'amber', es: 'No vino a la boda; <b>estaría</b> enfermo.', ru: 'Он не пришёл на свадьбу — наверное, болел.', en: 'He didn’t come to the wedding; he must have been ill.' },
            { badge: 'hip', color: 'amber', es: 'Cuando la conocí, <b>tendría</b> unos veinte años.', ru: 'Когда я с ней познакомился, ей было лет двадцать.', en: 'When I met her, she must have been about twenty.' },
            { badge: 'hip', color: 'teal', es: 'El andén estaba vacío: el tren ya <b>habría salido</b>.', ru: 'Платформа была пуста: поезд, видимо, уже ушёл.', en: 'The platform was empty: the train must already have left.' },
            { badge: 'hip', color: 'purple', es: '¿Me <b>habré equivocado</b> de dirección?', ru: 'Неужели я ошибся адресом?', en: 'Could I have got the wrong address?' },
            { badge: 'pl', color: 'purple', es: 'Para cuando llegues, ya <b>habremos cenado</b>.', ru: 'К тому времени, как ты придёшь, мы уже поужинаем.', en: 'By the time you arrive, we will have had dinner.' },
            { badge: 'pl', color: 'purple', es: 'A finales de año <b>habréis pagado</b> toda la hipoteca.', ru: 'К концу года вы выплатите всю ипотеку.', en: 'By the end of the year you will have paid off the whole mortgage.' },
            { badge: 'pl', color: 'purple', es: 'Mañana a estas horas ya <b>habré aterrizado</b> en Lima.', ru: 'Завтра в это время я уже приземлюсь в Лиме.', en: 'This time tomorrow I will have landed in Lima.' },
            { badge: 'irr', color: 'teal', es: 'Con más tiempo, <b>habríamos visitado</b> también Toledo.', ru: 'Будь у нас больше времени, мы бы съездили и в Толедо.', en: 'With more time, we would have visited Toledo too.' },
            { badge: 'irr', color: 'teal', es: 'Si hubierais reservado antes, <b>habríais conseguido</b> mejores asientos.', ru: 'Если бы вы забронировали раньше, вам достались бы места получше.', en: 'If you had booked earlier, you would have got better seats.' },
            { badge: 'irr', color: 'teal', es: 'Yo que tú no <b>habría firmado</b> ese contrato.', ru: 'На твоём месте я бы не подписал этот контракт.', en: 'If I were you, I wouldn’t have signed that contract.' },
            { badge: 'irr', color: 'teal', es: '<b>Habría preferido</b> que me lo dijeras a la cara.', ru: 'Я бы предпочёл, чтобы ты сказал мне это в лицо.', en: 'I would have preferred you to say it to my face.' },
            { badge: 'irr', color: 'amber', es: '¡<b>Podrías haber llamado</b> antes de venir!', ru: 'Мог бы позвонить, прежде чем приходить!', en: 'You could have called before coming!' },
            { badge: 'ind', color: 'teal', es: 'Nos aseguró que para el viernes <b>habría terminado</b> la obra.', ru: 'Он заверил нас, что к пятнице закончит ремонт.', en: 'He assured us that he would have finished the building work by Friday.' },
            { badge: 'ind', color: 'teal', es: 'Pensaba que a esas alturas ya <b>habrías encontrado</b> trabajo.', ru: 'Я думал, что к тому времени ты уже найдёшь работу.', en: 'I thought that by then you would already have found a job.' },
            { badge: 'con', color: 'purple', es: '<b>Tendrá</b> mucho dinero, pero no es feliz.', ru: 'Может, денег у него и много, но он несчастлив.', en: 'He may have a lot of money, but he isn’t happy.' },
            { badge: 'con', color: 'purple', es: '<b>Habrá estudiado</b> mucho, pero el examen le salió fatal.', ru: 'Может, он и много занимался, но экзамен провалил.', en: 'He may have studied a lot, but the exam went terribly.' },
            { badge: 'con', color: 'amber', es: '<b>Sería</b> un buen jugador, pero nunca ganó nada.', ru: 'Может, он и был хорошим игроком, но так ничего и не выиграл.', en: 'He may have been a good player, but he never won anything.' }
          ] }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Предположение: «наверное, уже лёг спать».', en: 'A guess: “he has probably gone to bed”.' }, es: 'No contesta al teléfono. ___ ya. (acostarse, él)',
        options: ['Se acostará', 'Se habrá acostado', 'Se acostaría'], answer: 1,
        explain: { ru: 'Догадка о только что случившемся (perfecto) — futuro compuesto: se habrá acostado.', en: 'A guess about something that has just happened (perfecto) — futuro compuesto: se habrá acostado.' } },
      { prompt: { ru: 'Замените «Probablemente tiene unos cuarenta años» формой предположения.', en: 'Replace “Probablemente tiene unos cuarenta años” with a guessing form.' }, es: '___ unos cuarenta años.',
        options: ['Tendría', 'Tendrá', 'Habrá tenido'], answer: 1,
        explain: { ru: 'Presente → futuro simple: tendrá.', en: 'Presente → futuro simple: tendrá.' } },
      { prompt: { ru: 'Замените «Probablemente eran las diez» формой предположения.', en: 'Replace “Probablemente eran las diez” with a guessing form.' }, es: '___ las diez cuando llegó.',
        options: ['Serán', 'Habrán sido', 'Serían'], answer: 2,
        explain: { ru: 'Imperfecto → condicional simple: serían.', en: 'Imperfecto → condicional simple: serían.' } },
      { prompt: { ru: 'Замените «Probablemente ya habían salido» формой предположения.', en: 'Replace “Probablemente ya habían salido” with a guessing form.' }, es: '___ ya.',
        options: ['Habrían salido', 'Habrán salido', 'Saldrían'], answer: 0,
        explain: { ru: 'Pluscuamperfecto → condicional compuesto: habrían salido.', en: 'Pluscuamperfecto → condicional compuesto: habrían salido.' } },
      { prompt: { ru: 'Замените «Probablemente ha perdido el autobús» формой предположения.', en: 'Replace “Probablemente ha perdido el autobús” with a guessing form.' }, es: '___ el autobús.',
        options: ['Perdería', 'Habrá perdido', 'Habría perdido'], answer: 1,
        explain: { ru: 'Pretérito perfecto → futuro compuesto: habrá perdido.', en: 'Pretérito perfecto → futuro compuesto: habrá perdido.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Para el año que viene ya ___ la carrera. (terminar, yo)',
        options: ['terminaría', 'habría terminado', 'habré terminado'], answer: 2,
        explain: { ru: 'Действие завершится к моменту в будущем (para el año que viene) — futuro compuesto: habré terminado.', en: 'Complete by a future point (para el año que viene) — futuro compuesto: habré terminado.' } },
      { prompt: { ru: 'Нужен смысл «может, он и умный, но…».', en: 'The meaning needed is “he may be clever, but…”.' }, es: '___ muy inteligente, pero no sabe escuchar.',
        options: ['Será', 'Fuera', 'Habrá'], answer: 0,
        explain: { ru: 'Уступка о настоящем — futuro simple: será.', en: 'A concession about the present — futuro simple: será.' } },
      { prompt: { ru: 'Выберите причастие', en: 'Choose the participle' }, es: '¿Dónde habrán ___ las llaves? No las encuentro. (poner)',
        options: ['ponido', 'puesto', 'ponado'], answer: 1,
        explain: { ru: 'У poner неправильное причастие: puesto.', en: 'Poner has an irregular participle: puesto.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Dijo que para las ocho ya ___, pero no volvió hasta las diez. (volver)',
        options: ['habrá vuelto', 'volvía', 'habría vuelto'], answer: 2,
        explain: { ru: 'Будущее завершённое в пересказе прошлого — condicional compuesto: habría vuelto.', en: 'The future perfect reported from the past — condicional compuesto: habría vuelto.' } }
    ]
  }
]);
