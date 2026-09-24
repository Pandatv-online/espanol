// A1 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('A1', [
  {
    id: 'a1-presente-ar', level: 'A1',
    title: { ru: 'Настоящее время: глаголы на -ar', en: 'Present tense: -ar verbs' },
    summary: { ru: 'Как спрягать правильные глаголы на -ar: hablar, trabajar, estudiar.',
               en: 'How to conjugate regular -ar verbs: hablar, trabajar, estudiar.' },
    sections: [
      {
        heading: { ru: 'Основа + окончание', en: 'Stem + ending' },
        body: {
          ru: ['Уберите у глагола <b>-ar</b> — останется основа: <i>habl-ar</i> → <b>habl-</b>. К основе добавьте окончание нужного лица.',
               'Местоимение часто опускают: окончание и так показывает, кто действует. <i>Hablo español</i> — «Я говорю по-испански».'],
          en: ['Drop <b>-ar</b> from the verb to get the stem: <i>habl-ar</i> → <b>habl-</b>. Then add the ending for the person.',
               'The pronoun is often left out, because the ending already shows who acts. <i>Hablo español</i> — “I speak Spanish”.']
        },
        table: {
          head: ['', 'hablar', 'trabajar', 'estudiar'],
          rows: [
            ['yo', 'hablo', 'trabajo', 'estudio'],
            ['tú', 'hablas', 'trabajas', 'estudias'],
            ['él / ella / usted', 'habla', 'trabaja', 'estudia'],
            ['nosotros / nosotras', 'hablamos', 'trabajamos', 'estudiamos'],
            ['vosotros / vosotras', 'habláis', 'trabajáis', 'estudiáis'],
            ['ellos / ellas / ustedes', 'hablan', 'trabajan', 'estudian']
          ]
        }
      },
      {
        heading: { ru: 'Usted и ustedes', en: 'Usted and ustedes' },
        body: {
          ru: ['<b>Usted</b> — вежливое «вы» одному человеку, <b>ustedes</b> — «вы» нескольким. Глагол с ними стоит в форме 3-го лица: <i>usted habla</i>, <i>ustedes hablan</i>.'],
          en: ['<b>Usted</b> is the polite “you” for one person, <b>ustedes</b> is “you” for several people. They take the third-person form: <i>usted habla</i>, <i>ustedes hablan</i>.']
        },
        examples: [
          { es: '¿Usted habla inglés?', ru: 'Вы говорите по-английски?', en: 'Do you speak English?' },
          { es: 'Estudiamos español los lunes.', ru: 'Мы учим испанский по понедельникам.', en: 'We study Spanish on Mondays.' },
          { es: 'Mis amigos trabajan en Valencia.', ru: 'Мои друзья работают в Валенсии.', en: 'My friends work in Valencia.' }
        ]
      },
      {
        heading: { ru: 'Отрицание', en: 'Negation' },
        body: {
          ru: ['Чтобы сказать «не», поставьте <b>no</b> перед глаголом: <i>No trabajo los domingos.</i>'],
          en: ['To say “not”, put <b>no</b> before the verb: <i>No trabajo los domingos.</i>']
        },
        examples: [
          { es: 'No hablo alemán.', ru: 'Я не говорю по-немецки.', en: "I don't speak German." }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Yo ___ español. (hablar)',
        options: ['hablo', 'habla', 'hablas'], answer: 0,
        explain: { ru: 'Yo → окончание -o: hablo.', en: 'Yo → ending -o: hablo.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Tú ___ en un banco. (trabajar)',
        options: ['trabaja', 'trabajas', 'trabajo'], answer: 1,
        explain: { ru: 'Tú → окончание -as: trabajas.', en: 'Tú → ending -as: trabajas.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Ella ___ en la universidad. (estudiar)',
        options: ['estudio', 'estudias', 'estudia'], answer: 2,
        explain: { ru: 'Ella → окончание -a: estudia.', en: 'Ella → ending -a: estudia.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Nosotros ___ música. (escuchar)',
        options: ['escuchan', 'escuchamos', 'escucháis'], answer: 1,
        explain: { ru: 'Nosotros → окончание -amos: escuchamos.', en: 'Nosotros → ending -amos: escuchamos.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Vosotros ___ muy bien. (bailar)',
        options: ['bailáis', 'bailamos', 'bailan', 'baila'], answer: 0,
        explain: { ru: 'Vosotros → окончание -áis: bailáis.', en: 'Vosotros → ending -áis: bailáis.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Ellos ___ pan todos los días. (comprar)',
        options: ['compra', 'compramos', 'compran'], answer: 2,
        explain: { ru: 'Ellos → окончание -an: compran.', en: 'Ellos → ending -an: compran.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: '¿Usted ___ inglés? (hablar)',
        options: ['hablas', 'habla', 'hablan'], answer: 1,
        explain: { ru: 'Usted — вежливое «вы», но глагол в 3-м лице: habla.', en: 'Usted is polite “you” but takes the third person: habla.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Mi hermano y yo ___ en Madrid. (trabajar)',
        options: ['trabajan', 'trabajamos', 'trabajáis'], answer: 1,
        explain: { ru: '«Мой брат и я» = nosotros → trabajamos.', en: '“My brother and I” = nosotros → trabajamos.' } },
      { prompt: { ru: 'Как сказать «Я не готовлю по понедельникам»?', en: 'How do you say “I don’t cook on Mondays”?' },
        options: ['No cocino los lunes.', 'Cocino no los lunes.', 'No cocina los lunes.'], answer: 0,
        explain: { ru: 'No ставится перед глаголом; yo → cocino.', en: 'No goes before the verb; yo → cocino.' } }
    ]
  }
]);
