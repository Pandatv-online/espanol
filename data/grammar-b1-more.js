// B1 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('B1', [
  {
    id: 'b1-futuro-condicional', level: 'B1',
    title: { ru: 'Futuro simple и Condicional simple', en: 'Futuro simple and Condicional simple' },
    summary: { ru: 'Будущее время (hablaré) и условное наклонение (hablaría): как образуются и когда нужны.',
               en: 'The future (hablaré) and the conditional (hablaría): how to form them and when to use them.' },
    sections: [
      {
        heading: { ru: 'Инфинитив + окончание', en: 'Infinitive + ending' },
        body: {
          ru: ['Оба времени строятся от <b>целого инфинитива</b>, окончание одно для -ar, -er и -ir: <i>hablar → hablaré, comer → comería, vivir → viviremos</i>.',
               'Futuro: <b>-é, -ás, -á, -emos, -éis, -án</b>. Condicional: <b>-ía, -ías, -ía, -íamos, -íais, -ían</b>. Следите за ударениями — они обязательны.'],
          en: ['Both are built on the <b>whole infinitive</b>, with the same endings for -ar, -er and -ir: <i>hablar → hablaré, comer → comería, vivir → viviremos</i>.',
               'Futuro: <b>-é, -ás, -á, -emos, -éis, -án</b>. Condicional: <b>-ía, -ías, -ía, -íamos, -íais, -ían</b>. Mind the accents — they are required.']
        },
        table: {
          head: ['', 'futuro (hablar)', 'condicional (hablar)'],
          rows: [
            ['yo', 'hablaré', 'hablaría'],
            ['tú', 'hablarás', 'hablarías'],
            ['él / ella / usted', 'hablará', 'hablaría'],
            ['nosotros / nosotras', 'hablaremos', 'hablaríamos'],
            ['vosotros / vosotras', 'hablaréis', 'hablaríais'],
            ['ellos / ellas / ustedes', 'hablarán', 'hablarían']
          ]
        }
      },
      {
        heading: { ru: 'Неправильные основы', en: 'Irregular stems' },
        body: {
          ru: ['У дюжины частых глаголов меняется основа, окончания те же. Основа одинакова в обоих временах: <i>tendré — tendría</i>.',
               'Также <b>haber → habr-</b> (<i>habrá</i> — «будет, найдётся»), <b>caber → cabr-</b>, <b>valer → valdr-</b>.'],
          en: ['About a dozen common verbs change their stem; the endings stay the same. The stem is the same in both tenses: <i>tendré — tendría</i>.',
               'Also <b>haber → habr-</b> (<i>habrá</i> — “there will be”), <b>caber → cabr-</b>, <b>valer → valdr-</b>.']
        },
        table: {
          head: ['infinitivo', 'raíz', 'futuro (yo)', 'condicional (yo)'],
          rows: [
            ['tener', 'tendr-', 'tendré', 'tendría'],
            ['poner', 'pondr-', 'pondré', 'pondría'],
            ['salir', 'saldr-', 'saldré', 'saldría'],
            ['venir', 'vendr-', 'vendré', 'vendría'],
            ['poder', 'podr-', 'podré', 'podría'],
            ['saber', 'sabr-', 'sabré', 'sabría'],
            ['querer', 'querr-', 'querré', 'querría'],
            ['hacer', 'har-', 'haré', 'haría'],
            ['decir', 'dir-', 'diré', 'diría']
          ]
        }
      },
      {
        heading: { ru: 'Когда нужен Futuro', en: 'When to use the future' },
        body: {
          ru: ['<b>Будущее</b>: прогнозы, обещания, планы подальше. <i>Mañana hará calor. Te llamaré.</i> Для близких планов чаще говорят <i>ir a + инфинитив</i>.',
               '<b>Догадка о настоящем</b>: «наверное». <i>¿Dónde está Luis? — Estará en el trabajo</i> — «Наверное, на работе».'],
          en: ['<b>The future</b>: predictions, promises, longer-term plans. <i>Mañana hará calor. Te llamaré.</i> For near plans people more often say <i>ir a + infinitive</i>.',
               '<b>A guess about the present</b>: “probably”. <i>¿Dónde está Luis? — Estará en el trabajo</i> — “He must be at work”.']
        },
        examples: [
          { es: 'El año que viene viviré en Valencia.', ru: 'В следующем году я буду жить в Валенсии.', en: 'Next year I’ll live in Valencia.' },
          { es: 'Mañana hará calor.', ru: 'Завтра будет жарко.', en: 'It will be hot tomorrow.' },
          { es: 'No sé dónde está Luis. Estará en el trabajo.', ru: 'Не знаю, где Луис. Наверное, на работе.', en: 'I don’t know where Luis is. He must be at work.' }
        ]
      },
      {
        heading: { ru: 'Когда нужен Condicional', en: 'When to use the conditional' },
        body: {
          ru: ['<b>Вежливая просьба</b>: <i>¿Podría ayudarme?</i> <b>Желание</b>: <i>Me gustaría viajar a Perú.</i>',
               '<b>Совет</b>: <i>Yo que tú, hablaría con ella. Deberías descansar.</i>',
               '<b>Будущее в прошлом</b> — в пересказе: <i>Ana dijo que vendría</i> — «Ана сказала, что придёт».'],
          en: ['<b>Polite requests</b>: <i>¿Podría ayudarme?</i> <b>Wishes</b>: <i>Me gustaría viajar a Perú.</i>',
               '<b>Advice</b>: <i>Yo que tú, hablaría con ella. Deberías descansar.</i>',
               '<b>The future seen from the past</b>, in reported speech: <i>Ana dijo que vendría</i> — “Ana said she would come”.']
        },
        examples: [
          { es: '¿Podrías cerrar la ventana?', ru: 'Ты не мог бы закрыть окно?', en: 'Could you close the window?' },
          { es: 'Me gustaría viajar a Perú.', ru: 'Я бы хотел съездить в Перу.', en: 'I’d like to travel to Peru.' },
          { es: 'Yo que tú, hablaría con ella.', ru: 'На твоём месте я бы поговорил с ней.', en: 'If I were you, I’d talk to her.' },
          { es: 'Ana me dijo que vendría a la fiesta.', ru: 'Ана сказала мне, что придёт на праздник.', en: 'Ana told me she would come to the party.' }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Mañana ___ a mis abuelos. (visitar, yo)',
        options: ['visitaré', 'visitaría', 'visitará'], answer: 0,
        explain: { ru: 'Факт в будущем, лицо yo — futuro: visitaré.', en: 'A future fact, yo form — futuro: visitaré.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'El próximo año ellos ___ una casa. (comprar)',
        options: ['comprarán', 'comprarían', 'compraran'], answer: 0,
        explain: { ru: 'Будущее, ellos → -án с ударением: comprarán.', en: 'Future, ellos → -án with an accent: comprarán.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Te lo ___ mañana. (decir, yo)',
        options: ['diré', 'deciré', 'dirá'], answer: 0,
        explain: { ru: 'Decir — неправильная основа dir-: diré.', en: 'Decir has the irregular stem dir-: diré.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: '¿___ ayudarme, por favor? (poder, usted)',
        options: ['Podría', 'Podería', 'Puedría'], answer: 0,
        explain: { ru: 'Вежливая просьба — condicional; основа podr-: podría.', en: 'A polite request — conditional; stem podr-: podría.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Me ___ vivir en el campo. (gustar)',
        options: ['gustaría', 'gustaré', 'gustarían'], answer: 0,
        explain: { ru: 'Желание — me gustaría; с инфинитивом — единственное число.', en: 'A wish — me gustaría; with an infinitive it is singular.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Yo que tú, no ___ ese coche. (comprar)',
        options: ['compraría', 'compraré', 'compré'], answer: 0,
        explain: { ru: 'Совет «на твоём месте я бы…» — condicional: compraría.', en: 'Advice, “if I were you I would…” — conditional: compraría.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Dentro de diez años ___ más tiempo libre. (tener, nosotros)',
        options: ['tendremos', 'teneremos', 'tendrémos'], answer: 0,
        explain: { ru: 'Tener → основа tendr-; в форме nosotros ударение не пишется: tendremos.', en: 'Tener → stem tendr-; the nosotros form has no written accent: tendremos.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: '¿Dónde está Pablo? — No sé, ___ en la oficina.',
        options: ['estará', 'estaría', 'estuvo'], answer: 0,
        explain: { ru: 'Догадка о том, что сейчас, — futuro: estará («наверное, он в офисе»).', en: 'A guess about the present — futuro: estará (“he must be at the office”).' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Marta dijo que ___ a las ocho, pero no vino. (venir)',
        options: ['vendría', 'vendrá', 'venirá'], answer: 0,
        explain: { ru: 'Будущее в прошлом (dijo que…) — condicional: vendría.', en: 'The future seen from the past (dijo que…) — conditional: vendría.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Esta noche ___ frío. (hacer)',
        options: ['hará', 'hacerá', 'haría'], answer: 0,
        explain: { ru: 'Прогноз — futuro; hacer → основа har-: hará.', en: 'A forecast — futuro; hacer → stem har-: hará.' } }
    ]
  },
  {
    id: 'b1-por-para', level: 'B1',
    title: { ru: 'Por и para', en: 'Por and para' },
    summary: { ru: 'Два предлога «для / за / через»: para смотрит на цель, por — на причину и путь.',
               en: 'Two prepositions for “for / through / by”: para looks at the goal, por at the cause and the way.' },
    sections: [
      {
        heading: { ru: 'Главная идея', en: 'The main idea' },
        body: {
          ru: ['<b>Para</b> — куда направлено действие: цель, получатель, пункт назначения, срок. Вопрос «зачем? для кого? куда? к какому сроку?».',
               '<b>Por</b> — откуда действие берётся и как проходит: причина, путь, способ, обмен. Вопрос «почему? через что? каким образом? за сколько?».'],
          en: ['<b>Para</b> points to where the action is heading: goal, recipient, destination, deadline. It answers “what for? for whom? where to? by when?”.',
               '<b>Por</b> shows where the action comes from and how it goes: cause, route, means, exchange. It answers “why? through what? how? for how much?”.']
        },
        table: {
          head: ['', 'por', 'para'],
          rows: [
            ['causa · finalidad', 'Gracias por la ayuda.', 'Estudio para aprender.'],
            ['lugar', 'Paseo por el parque.', 'Salgo para Madrid.'],
            ['tiempo', 'por la mañana', 'para el lunes'],
            ['medio · destinatario', 'por teléfono', 'para ti']
          ]
        }
      },
      {
        heading: { ru: 'Para', en: 'Para' },
        body: {
          ru: ['<b>Цель</b>: <i>para</i> + инфинитив — «чтобы». <i>Ahorro para comprar un piso.</i>',
               '<b>Получатель</b>: <i>Este regalo es para mi madre.</i> <b>Направление</b>: <i>El tren sale para Sevilla.</i>',
               '<b>Срок</b>: <i>Necesito el informe para el viernes.</i> <b>Мнение</b>: <i>Para mí, es fácil.</i>'],
          en: ['<b>Purpose</b>: <i>para</i> + infinitive — “in order to”. <i>Ahorro para comprar un piso.</i>',
               '<b>Recipient</b>: <i>Este regalo es para mi madre.</i> <b>Destination</b>: <i>El tren sale para Sevilla.</i>',
               '<b>Deadline</b>: <i>Necesito el informe para el viernes.</i> <b>Opinion</b>: <i>Para mí, es fácil.</i>']
        },
        examples: [
          { es: 'Ahorro dinero para comprar un piso.', ru: 'Я коплю деньги, чтобы купить квартиру.', en: 'I’m saving money to buy a flat.' },
          { es: 'Este regalo es para mi madre.', ru: 'Этот подарок для моей мамы.', en: 'This present is for my mother.' },
          { es: 'Necesito el informe para el viernes.', ru: 'Мне нужен отчёт к пятнице.', en: 'I need the report by Friday.' }
        ]
      },
      {
        heading: { ru: 'Por', en: 'Por' },
        body: {
          ru: ['<b>Причина</b>: <i>Gracias por tu ayuda. No salimos por la lluvia.</i>',
               '<b>Путь, место «по, через»</b>: <i>Caminamos por la playa.</i> <b>Время суток</b>: <i>por la mañana, por la noche</i>.',
               '<b>Способ</b>: <i>por teléfono, por correo</i>. <b>Цена, обмен</b>: <i>Compré la bici por cien euros.</i> <b>Частота</b>: <i>dos veces por semana</i>.'],
          en: ['<b>Cause</b>: <i>Gracias por tu ayuda. No salimos por la lluvia.</i>',
               '<b>Route, place “along, through”</b>: <i>Caminamos por la playa.</i> <b>Time of day</b>: <i>por la mañana, por la noche</i>.',
               '<b>Means</b>: <i>por teléfono, por correo</i>. <b>Price, exchange</b>: <i>Compré la bici por cien euros.</i> <b>Frequency</b>: <i>dos veces por semana</i>.']
        },
        examples: [
          { es: 'Gracias por tu ayuda.', ru: 'Спасибо за помощь.', en: 'Thanks for your help.' },
          { es: 'Caminamos por la playa.', ru: 'Мы гуляем по пляжу.', en: 'We walk along the beach.' },
          { es: 'Hablamos por teléfono dos veces por semana.', ru: 'Мы говорим по телефону два раза в неделю.', en: 'We talk on the phone twice a week.' },
          { es: 'Compré la bici por cien euros.', ru: 'Я купил велосипед за сто евро.', en: 'I bought the bike for a hundred euros.' }
        ]
      },
      {
        heading: { ru: 'Готовые выражения', en: 'Set phrases' },
        body: {
          ru: ['Эти выражения просто запомните: <b>por favor</b> (пожалуйста), <b>por fin</b> (наконец), <b>por supuesto</b> (конечно), <b>por eso</b> (поэтому), <b>por ejemplo</b> (например), <b>para siempre</b> (навсегда).'],
          en: ['Just learn these phrases: <b>por favor</b> (please), <b>por fin</b> (at last), <b>por supuesto</b> (of course), <b>por eso</b> (that’s why), <b>por ejemplo</b> (for example), <b>para siempre</b> (forever).']
        },
        examples: [
          { es: '¡Por fin estás aquí!', ru: 'Наконец-то ты здесь!', en: 'You’re here at last!' }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Por или para?', en: 'Por or para?' }, es: 'Gracias ___ el regalo.',
        options: ['por', 'para', 'de'], answer: 0,
        explain: { ru: 'Благодарят за причину — gracias por.', en: 'You thank someone for a cause — gracias por.' } },
      { prompt: { ru: 'Por или para?', en: 'Por or para?' }, es: 'Este pastel es ___ ti.',
        options: ['para', 'por', 'a'], answer: 0,
        explain: { ru: 'Получатель — para: для тебя.', en: 'The recipient — para: for you.' } },
      { prompt: { ru: 'Por или para?', en: 'Por or para?' }, es: 'Estudio español ___ trabajar en México.',
        options: ['para', 'por', 'a'], answer: 0,
        explain: { ru: 'Цель («чтобы») — para + инфинитив.', en: 'Purpose (“in order to”) — para + infinitive.' } },
      { prompt: { ru: 'Por или para?', en: 'Por or para?' }, es: 'Paseamos ___ el centro de la ciudad.',
        options: ['por', 'para', 'a'], answer: 0,
        explain: { ru: 'Движение по месту («по центру») — por.', en: 'Movement through a place (“around the centre”) — por.' } },
      { prompt: { ru: 'Por или para?', en: 'Por or para?' }, es: 'Necesito el informe ___ el lunes.',
        options: ['para', 'por', 'en'], answer: 0,
        explain: { ru: 'Срок («к понедельнику») — para.', en: 'A deadline (“by Monday”) — para.' } },
      { prompt: { ru: 'Por или para?', en: 'Por or para?' }, es: 'Compré este libro ___ quince euros.',
        options: ['por', 'para', 'hasta'], answer: 0,
        explain: { ru: 'Цена, обмен — por: за пятнадцать евро.', en: 'Price, exchange — por: for fifteen euros.' } },
      { prompt: { ru: 'Por или para?', en: 'Por or para?' }, es: 'Te llamo ___ teléfono esta noche.',
        options: ['por', 'para', 'con'], answer: 0,
        explain: { ru: 'Способ связи — por teléfono.', en: 'The means of communication — por teléfono.' } },
      { prompt: { ru: 'Por или para?', en: 'Por or para?' }, es: 'Voy al gimnasio tres veces ___ semana.',
        options: ['por', 'para', 'en'], answer: 0,
        explain: { ru: 'Частота — por: tres veces por semana.', en: 'Frequency — por: tres veces por semana.' } },
      { prompt: { ru: 'Por или para?', en: 'Por or para?' }, es: '___ mí, el español es más fácil que el inglés.',
        options: ['Para', 'Por', 'A'], answer: 0,
        explain: { ru: 'Мнение («по-моему») — para mí.', en: 'An opinion (“in my view”) — para mí.' } },
      { prompt: { ru: 'Por или para?', en: 'Por or para?' }, es: 'No salimos ___ la lluvia.',
        options: ['por', 'para', 'de'], answer: 0,
        explain: { ru: 'Причина («из-за дождя») — por.', en: 'A cause (“because of the rain”) — por.' } }
    ]
  }
]);
