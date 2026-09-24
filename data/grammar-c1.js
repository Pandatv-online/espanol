// C1 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('C1', [
  {
    id: 'c1-perifrasis', level: 'C1',
    title: { ru: 'Глагольные перифразы', en: 'Verbal periphrases' },
    summary: { ru: 'Llevar + gerundio, acabar de, ponerse a, volver a, dejar de и другие: как одним глаголом передать длительность, начало, повтор и конец действия.',
               en: 'Llevar + gerundio, acabar de, ponerse a, volver a, dejar de and more: how a helper verb shows duration, start, repetition and end of an action.' },
    sections: [
      {
        heading: { ru: 'Что такое перифраза', en: 'What a periphrasis is' },
        body: {
          ru: ['Перифраза — это <b>вспомогательный глагол</b> (часто с предлогом) + <b>инфинитив, герундий или причастие</b>. Вспомогательный глагол теряет своё прямое значение: в <i>vuelvo a llamar</i> никто никуда не возвращается — это «звоню ещё раз».',
               'Спрягается только вспомогательный глагол; местоимения ставятся перед ним или присоединяются к инфинитиву: <i>Lo acabo de ver = Acabo de verlo</i>.'],
          en: ['A periphrasis is a <b>helper verb</b> (often with a preposition) + an <b>infinitive, gerund or participle</b>. The helper loses its literal meaning: in <i>vuelvo a llamar</i> nobody goes back anywhere — it means “I call again”.',
               'Only the helper verb is conjugated; pronouns go before it or attach to the infinitive: <i>Lo acabo de ver = Acabo de verlo</i>.']
        },
        table: {
          head: ['perífrasis', 'ejemplo'],
          rows: [
            ['llevar + gerundio', 'Llevo dos años estudiando.'],
            ['seguir + gerundio', 'Sigo viviendo en Sevilla.'],
            ['ir + gerundio', 'Los precios van subiendo.'],
            ['estar a punto de + infinitivo', 'El tren está a punto de salir.'],
            ['ponerse a + infinitivo', 'Se puso a llover.'],
            ['echarse a + infinitivo', 'Se echó a reír.'],
            ['acabar de + infinitivo', 'Acabo de comer.'],
            ['volver a + infinitivo', 'Volvió a llamar.'],
            ['dejar de + infinitivo', 'Dejé de fumar.'],
            ['soler + infinitivo', 'Suelo levantarme temprano.'],
            ['acabar + gerundio', 'Acabó trabajando en un banco.']
          ]
        },
        examples: [
          { es: "Llevo dos años estudiando chino.", ru: "Я учу китайский уже два года.", en: "I’ve been studying Chinese for two years." }
        ]
      },
      {
        heading: { ru: 'Длительность и развитие', en: 'Duration and progress' },
        body: {
          ru: ['<b>Llevar + gerundio</b> — сколько времени длится действие до сих пор. Обязательно с указанием срока: <i>Llevo tres horas esperando</i> = <i>Espero desde hace tres horas</i>. В отрицании — <b>llevar sin + инфинитив</b>: <i>Llevo un mes sin fumar</i>.',
               '<b>Seguir + gerundio</b> — действие продолжается («всё ещё»): <i>¿Sigues trabajando allí?</i> <b>Ir + gerundio</b> — действие развивается постепенно: <i>Poco a poco voy entendiendo</i>.'],
          en: ['<b>Llevar + gerundio</b> says how long an action has been going on. It needs a time phrase: <i>Llevo tres horas esperando</i> = <i>Espero desde hace tres horas</i>. In the negative use <b>llevar sin + infinitive</b>: <i>Llevo un mes sin fumar</i>.',
               '<b>Seguir + gerundio</b> means the action continues (“still”): <i>¿Sigues trabajando allí?</i> <b>Ir + gerundio</b> means it develops gradually: <i>Poco a poco voy entendiendo</i>.']
        },
        examples: [
          { es: 'Llevamos diez años viviendo en esta casa.', ru: 'Мы живём в этом доме уже десять лет.', en: 'We’ve been living in this house for ten years.' },
          { es: 'A pesar de todo, sigue confiando en él.', ru: 'Несмотря ни на что, она по-прежнему ему доверяет.', en: 'Despite everything, she still trusts him.' },
          { es: 'La situación va mejorando.', ru: 'Ситуация постепенно улучшается.', en: 'The situation is gradually improving.' }
        ]
      },
      {
        heading: { ru: 'Начало, конец, повтор', en: 'Start, end and repetition' },
        body: {
          ru: ['<b>Estar a punto de</b> — «вот-вот»: действие ещё не началось. <b>Ponerse a</b> — начать (часто неожиданно): <i>Se puso a llover</i>. <b>Echarse a</b> — внезапно разразиться; только с немногими глаголами: <i>echarse a reír, a llorar, a correr, a temblar</i>.',
               '<b>Acabar de</b> + инфинитив — «только что»: <i>Acaba de salir</i>. Не путайте с <b>acabar + gerundio</b> — «в итоге, в конце концов»: <i>Acabó viviendo en Chile</i>.',
               '<b>Dejar de</b> — перестать: <i>Ha dejado de llover</i>. <b>Volver a</b> — сделать снова: <i>No vuelvas a hacerlo</i>.'],
          en: ['<b>Estar a punto de</b> — “about to”: the action has not started yet. <b>Ponerse a</b> — to start (often suddenly): <i>Se puso a llover</i>. <b>Echarse a</b> — to burst into something; only with a few verbs: <i>echarse a reír, a llorar, a correr, a temblar</i>.',
               '<b>Acabar de</b> + infinitive — “have just”: <i>Acaba de salir</i>. Don’t confuse it with <b>acabar + gerundio</b> — “to end up”: <i>Acabó viviendo en Chile</i>.',
               '<b>Dejar de</b> — to stop: <i>Ha dejado de llover</i>. <b>Volver a</b> — to do again: <i>No vuelvas a hacerlo</i>.']
        },
        examples: [
          { es: 'Estaba a punto de salir cuando sonó el teléfono.', ru: 'Я уже собирался выходить, когда зазвонил телефон.', en: 'I was about to leave when the phone rang.' },
          { es: 'Cuando vio a su madre, el niño se echó a llorar.', ru: 'Увидев маму, ребёнок расплакался.', en: 'When he saw his mother, the boy burst into tears.' },
          { es: 'Después de la cena nos pusimos a jugar a las cartas.', ru: 'После ужина мы сели играть в карты.', en: 'After dinner we started playing cards.' }
        ]
      },
      {
        heading: { ru: 'Привычка', en: 'Habits' },
        body: {
          ru: ['<b>Soler + инфинитив</b> — «обычно»; бывает только в presente и imperfecto: <i>Suelo cenar a las nueve</i>, <i>De niño solía ir al pueblo</i>.'],
          en: ['<b>Soler + infinitive</b> means “usually”; it is only used in the presente and the imperfecto: <i>Suelo cenar a las nueve</i>, <i>De niño solía ir al pueblo</i>.']
        },
        examples: [
          { es: 'Los sábados solemos comer fuera.', ru: 'По субботам мы обычно обедаем не дома.', en: 'On Saturdays we usually eat out.' }
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
    summary: { ru: 'Aunque, por mucho que, a pesar de que, si bien, y eso que: «хотя», «как бы ни», «несмотря на» — и когда после них indicativo, а когда subjuntivo.',
               en: 'Aunque, por mucho que, a pesar de que, si bien, y eso que: “although”, “however much”, “despite” — and when they take the indicative or the subjunctive.' },
    sections: [
      {
        heading: { ru: 'Aunque: факт или гипотеза', en: 'Aunque: fact or hypothesis' },
        body: {
          ru: ['<b>Aunque + indicativo</b> — говорящий сообщает факт: «хотя (и правда)…». <i>Aunque llueve, voy a salir</i> — дождь идёт сейчас.',
               '<b>Aunque + presente de subjuntivo</b> — возможность или неважный факт: «даже если…». <i>Aunque llueva, saldré</i> — не знаю, будет ли дождь, но это ничего не меняет. Так же говорят о том, что оба собеседника уже знают: <i>Sí, ya sé que es tu jefe, pero aunque sea tu jefe, no puede gritarte</i>.',
               '<b>Aunque + Imperfecto / Pluscuamperfecto de subjuntivo</b> — нереальное: <i>Aunque fuera millonario, no viviría ahí</i>; <i>Aunque me lo hubieras pedido, no habría ido</i>.'],
          en: ['<b>Aunque + indicative</b> — the speaker states a fact: “although (it is true that)…”. <i>Aunque llueve, voy a salir</i> — it is raining now.',
               '<b>Aunque + present subjunctive</b> — a possibility or an irrelevant fact: “even if…”. <i>Aunque llueva, saldré</i> — I don’t know if it will rain, but it changes nothing. It is also used for something both speakers already know: <i>Sí, ya sé que es tu jefe, pero aunque sea tu jefe, no puede gritarte</i>.',
               '<b>Aunque + Imperfecto / Pluscuamperfecto de subjuntivo</b> — something unreal: <i>Aunque fuera millonario, no viviría ahí</i>; <i>Aunque me lo hubieras pedido, no habría ido</i>.']
        },
        table: {
          head: ['aunque + …', 'valor', 'forma'],
          rows: [
            ['indicativo', 'hecho', 'aunque está'],
            ['presente de subjuntivo', 'posible · sin importancia', 'aunque esté'],
            ['imperfecto de subjuntivo', 'irreal presente', 'aunque estuviera'],
            ['pluscuamperf. de subjuntivo', 'irreal pasado', 'aunque hubiera estado']
          ]
        },
        examples: [
          { es: "Aunque está cansada, sigue trabajando.", ru: "Хотя она устала, она продолжает работать.", en: "Although she’s tired, she keeps working." },
          { es: "Aunque esté cansada, seguirá trabajando.", ru: "Даже если она устанет, она продолжит работать.", en: "Even if she’s tired, she’ll keep working." },
          { es: "Aunque estuviera cansada, seguiría trabajando.", ru: "Даже если бы она устала, она продолжала бы работать.", en: "Even if she were tired, she would keep working." },
          { es: "Aunque hubiera estado cansada, habría seguido trabajando.", ru: "Даже если бы она тогда устала, она бы продолжила работать.", en: "Even if she had been tired, she would have kept working." },
          { es: 'Aunque no tengo mucho dinero, viajo cada verano.', ru: 'Хотя у меня немного денег, я путешествую каждое лето.', en: 'Although I don’t have much money, I travel every summer.' },
          { es: 'Aunque me lo pidas mil veces, no pienso hacerlo.', ru: 'Даже если ты попросишь меня тысячу раз, я не стану этого делать.', en: 'Even if you ask me a thousand times, I’m not doing it.' },
          { es: 'Aunque tuviera tiempo, no iría a esa fiesta.', ru: 'Даже будь у меня время, я бы не пошёл на эту вечеринку.', en: 'Even if I had time, I wouldn’t go to that party.' }
        ]
      },
      {
        heading: { ru: 'Как бы ни…: por mucho que, por muy… que', en: 'However much: por mucho que, por muy… que' },
        body: {
          ru: ['<b>Por mucho que / por más que + глагол</b> — «сколько бы ни»: <i>Por mucho que corras, no llegarás a tiempo</i>.',
               '<b>Por muy + прилагательное или наречие + que</b> — «каким бы ни»: <i>Por muy difícil que sea, lo intentaré</i>.',
               'О будущем или предполагаемом — только subjuntivo. Indicativo возможен, когда речь об известном факте в настоящем или прошлом: <i>Por mucho que trabaja, no gana bastante</i>.'],
          en: ['<b>Por mucho que / por más que + verb</b> — “however much”: <i>Por mucho que corras, no llegarás a tiempo</i>.',
               '<b>Por muy + adjective or adverb + que</b> — “however (adjective)”: <i>Por muy difícil que sea, lo intentaré</i>.',
               'For the future or anything hypothetical, only the subjunctive works. The indicative is possible when the clause states a known present or past fact: <i>Por mucho que trabaja, no gana bastante</i>.']
        },
        examples: [
          { es: 'Por más que lo intente, no consigue dormir.', ru: 'Как он ни старается, ему не удаётся уснуть.', en: 'However hard he tries, he can’t get to sleep.' },
          { es: 'Por muy temprano que salgas, habrá atasco.', ru: 'Как рано ты ни выедешь, будет пробка.', en: 'However early you leave, there will be traffic.' }
        ]
      },
      {
        heading: { ru: 'Другие средства', en: 'Other options' },
        body: {
          ru: ['<b>A pesar de + существительное или инфинитив</b>, <b>a pesar de que + глагол</b>: <i>A pesar de la lluvia…</i>, <i>A pesar de que llovía…</i>.',
               '<b>Si bien</b> (книжное) и <b>y eso que</b> (разговорное, «и это притом что») — только с indicativo: <i>Suspendió, y eso que estudió mucho</i>.',
               '<b>Aun + gerundio</b> — «даже…»: <i>Aun sabiendo la verdad, calló</i>. Здесь <i>aun</i> пишется без ударения.'],
          en: ['<b>A pesar de + noun or infinitive</b>, <b>a pesar de que + verb</b>: <i>A pesar de la lluvia…</i>, <i>A pesar de que llovía…</i>.',
               '<b>Si bien</b> (formal) and <b>y eso que</b> (colloquial, “and that’s even though”) take only the indicative: <i>Suspendió, y eso que estudió mucho</i>.',
               '<b>Aun + gerund</b> — “even (while)…”: <i>Aun sabiendo la verdad, calló</i>. Here <i>aun</i> has no written accent.']
        },
        examples: [
          { es: 'A pesar de que estaba enfermo, fue a trabajar.', ru: 'Несмотря на то что он был болен, он пошёл на работу.', en: 'Even though he was ill, he went to work.' },
          { es: 'Si bien el informe es completo, contiene algunos errores.', ru: 'Хотя отчёт и полный, в нём есть несколько ошибок.', en: 'While the report is thorough, it contains a few errors.' },
          { es: 'Aun teniendo razón, perdió la discusión.', ru: 'Даже будучи правым, он проиграл спор.', en: 'Even though he was right, he lost the argument.' }
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
    summary: { ru: 'Además, sin embargo, en cambio, por lo tanto, de ahí que, es decir, en definitiva: слова, которые связывают мысли в тексте, и их грамматика.',
               en: 'Además, sin embargo, en cambio, por lo tanto, de ahí que, es decir, en definitiva: words that link ideas in a text, and their grammar.' },
    sections: [
      {
        heading: { ru: 'Карта коннекторов', en: 'A map of connectors' },
        body: {
          ru: ['Коннектор показывает, как новая мысль связана с предыдущей: добавляет, противопоставляет, объясняет причину, делает вывод. Правильный коннектор делает текст уровня C1 ясным и убедительным.',
               'Большинство коннекторов отделяются запятыми, а перед ними ставят точку или точку с запятой: <i>El hotel era caro; sin embargo, merecía la pena.</i>'],
          en: ['A connector shows how a new idea relates to the previous one: it adds, contrasts, gives a reason or draws a conclusion. The right connector makes a C1 text clear and convincing.',
               'Most connectors are set off by commas and preceded by a full stop or a semicolon: <i>El hotel era caro; sin embargo, merecía la pena.</i>']
        },
        table: {
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
          ]
        }
      },
      {
        heading: { ru: 'Причина и следствие', en: 'Cause and consequence' },
        body: {
          ru: ['<b>Como</b> в значении «так как» стоит только <b>в начале</b> фразы: <i>Como no tenía coche, fui andando</i>. <b>Porque</b>, наоборот, обычно стоит после главной части: <i>Fui andando porque no tenía coche</i>.',
               '<b>Ya que, puesto que, dado que</b> — причина, известная собеседнику; могут стоять и в начале, и в середине.',
               '<b>De ahí que</b> («отсюда и…») требует <b>subjuntivo</b>: <i>Ha llovido poco; de ahí que los embalses estén vacíos</i>. <b>Por lo tanto, por consiguiente, así que</b> — с indicativo.'],
          en: ['<b>Como</b> meaning “since” goes only <b>at the start</b> of the sentence: <i>Como no tenía coche, fui andando</i>. <b>Porque</b>, by contrast, usually follows the main clause: <i>Fui andando porque no tenía coche</i>.',
               '<b>Ya que, puesto que, dado que</b> give a reason the listener already knows; they can go at the start or in the middle.',
               '<b>De ahí que</b> (“hence”) takes the <b>subjunctive</b>: <i>Ha llovido poco; de ahí que los embalses estén vacíos</i>. <b>Por lo tanto, por consiguiente, así que</b> take the indicative.']
        },
        examples: [
          { es: 'Como era tarde, cogimos un taxi.', ru: 'Так как было поздно, мы взяли такси.', en: 'Since it was late, we took a taxi.' },
          { es: 'Dado que nadie se opone, aprobamos la propuesta.', ru: 'Поскольку никто не возражает, мы принимаем предложение.', en: 'Since no one objects, we approve the proposal.' },
          { es: 'Es un tema delicado; de ahí que nadie quiera hablar de él.', ru: 'Это деликатная тема, поэтому никто и не хочет о ней говорить.', en: 'It’s a sensitive subject; hence nobody wants to talk about it.' }
        ]
      },
      {
        heading: { ru: 'Противопоставление', en: 'Contrast' },
        body: {
          ru: ['<b>Sin embargo, no obstante</b> — «однако»: вторая мысль идёт вопреки первой. <b>En cambio, por el contrario</b> — сравнение двух разных людей или вещей: <i>Él es extrovertido; yo, en cambio, soy tímido</i>.',
               '<b>Sino</b> — после отрицания, когда заменяем одно другим: <i>No es rojo, sino naranja</i>. Перед спрягаемым глаголом — <b>sino que</b>: <i>No solo no me ayudó, sino que se rió de mí</i>. <b>Pero</b> ничего не заменяет, а добавляет оговорку: <i>No es caro, pero tampoco es barato</i>.'],
          en: ['<b>Sin embargo, no obstante</b> — “however”: the second idea goes against the first. <b>En cambio, por el contrario</b> compare two different people or things: <i>Él es extrovertido; yo, en cambio, soy tímido</i>.',
               '<b>Sino</b> follows a negative when one thing replaces another: <i>No es rojo, sino naranja</i>. Before a conjugated verb use <b>sino que</b>: <i>No solo no me ayudó, sino que se rió de mí</i>. <b>Pero</b> replaces nothing; it adds a reservation: <i>No es caro, pero tampoco es barato</i>.']
        },
        examples: [
          { es: 'El plan parecía perfecto; sin embargo, fracasó.', ru: 'План казался идеальным; однако он провалился.', en: 'The plan seemed perfect; however, it failed.' },
          { es: 'No vino a ayudar, sino a criticar.', ru: 'Он пришёл не помогать, а критиковать.', en: 'He didn’t come to help but to criticise.' }
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
    summary: { ru: 'Habrá salido, estaría, habría salido: как испанский выражает «наверное» через будущее и условное время, и другие значения сложных форм.',
               en: 'Habrá salido, estaría, habría salido: how Spanish says “probably” with the future and conditional, and other uses of the compound forms.' },
    sections: [
      {
        heading: { ru: 'Как образуются', en: 'How to form them' },
        body: {
          ru: ['<b>Futuro compuesto</b> — haber в futuro + причастие: <i>habré terminado</i>. <b>Condicional compuesto</b> — haber в condicional + причастие: <i>habría terminado</i>.',
               'Неправильные причастия те же, что в perfecto: <i>puesto, hecho, dicho, visto, vuelto, escrito, roto, abierto, muerto</i>.'],
          en: ['<b>Futuro compuesto</b> is haber in the future + participle: <i>habré terminado</i>. <b>Condicional compuesto</b> is haber in the conditional + participle: <i>habría terminado</i>.',
               'The irregular participles are the same as in the perfect: <i>puesto, hecho, dicho, visto, vuelto, escrito, roto, abierto, muerto</i>.']
        },
        table: {
          head: ['', 'futuro compuesto', 'condicional compuesto'],
          rows: [
            ['yo', 'habré salido', 'habría salido'],
            ['tú', 'habrás salido', 'habrías salido'],
            ['él / ella / usted', 'habrá salido', 'habría salido'],
            ['nosotros / nosotras', 'habremos salido', 'habríamos salido'],
            ['vosotros / vosotras', 'habréis salido', 'habríais salido'],
            ['ellos / ellas / ustedes', 'habrán salido', 'habrían salido']
          ]
        }
      },
      {
        heading: { ru: 'Предположение: сдвиг на шаг вперёд', en: 'Guessing: one step forward' },
        body: {
          ru: ['Вместо «наверное» + время испанец часто просто берёт <b>время на шаг «дальше»</b>. Настоящее → futuro simple, perfecto → futuro compuesto, indefinido и imperfecto → condicional simple, pluscuamperfecto → condicional compuesto.',
               'Слово <i>probablemente</i> при этом не нужно: сама форма уже значит «наверное». <i>¿Dónde está Ana? — Estará en casa.</i>'],
          en: ['Instead of “probably” + a tense, Spanish often simply uses the <b>tense one step “further”</b>. Present → futuro simple, perfecto → futuro compuesto, indefinido and imperfecto → condicional simple, pluscuamperfecto → condicional compuesto.',
               'You don’t need <i>probablemente</i>: the form itself already means “probably”. <i>¿Dónde está Ana? — Estará en casa.</i>']
        },
        table: {
          head: ['certeza', 'probabilidad'],
          rows: [
            ['Está en casa.', 'Estará en casa.'],
            ['Ha salido.', 'Habrá salido.'],
            ['Salió. · Estaba cansado.', 'Saldría. · Estaría cansado.'],
            ['Había salido.', 'Habría salido.']
          ]
        },
        examples: [
          { es: 'Juan no contesta; se habrá dormido.', ru: 'Хуан не отвечает; наверное, уснул.', en: 'Juan isn’t answering; he must have fallen asleep.' },
          { es: 'Cuando llegué, serían las tres.', ru: 'Когда я пришёл, было, наверное, три часа.', en: 'When I arrived, it must have been about three.' },
          { es: 'La puerta estaba abierta: alguien la habría dejado así.', ru: 'Дверь была открыта: наверное, кто-то её так оставил.', en: 'The door was open: someone must have left it like that.' }
        ]
      },
      {
        heading: { ru: 'Другие значения', en: 'Other uses' },
        body: {
          ru: ['<b>Futuro compuesto</b> — действие завершится к моменту в будущем: <i>Para junio habré terminado la tesis</i>.',
               '<b>Condicional compuesto</b> — нереальное прошлое (<i>Yo en tu lugar habría dicho que no</i>) и «будущее завершённое» в пересказе: <i>Dijo que para las ocho habría vuelto</i>.',
               '<b>Уступка</b>: «может, и так, но…». <i>Será muy listo, pero no sabe escuchar</i>. О прошлом — condicional: <i>Tendría razón, pero no supo explicarlo</i>.'],
          en: ['<b>Futuro compuesto</b>: an action will be complete by a point in the future: <i>Para junio habré terminado la tesis</i>.',
               '<b>Condicional compuesto</b>: an unreal past (<i>Yo en tu lugar habría dicho que no</i>) and the “future perfect” in reported speech: <i>Dijo que para las ocho habría vuelto</i>.',
               '<b>Concession</b>: “that may be so, but…”. <i>Será muy listo, pero no sabe escuchar</i>. About the past use the conditional: <i>Tendría razón, pero no supo explicarlo</i>.']
        },
        examples: [
          { es: 'Dentro de un mes ya habremos vendido la casa.', ru: 'Через месяц мы уже продадим дом.', en: 'In a month we will already have sold the house.' },
          { es: 'Será muy caro, pero vale la pena.', ru: 'Может, это и дорого, но оно того стоит.', en: 'It may be expensive, but it’s worth it.' }
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
