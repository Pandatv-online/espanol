// A2 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('A2', [
  {
    id: 'a2-reflexivos', level: 'A2',
    title: { ru: 'Возвратные глаголы', en: 'Reflexive verbs' },
    summary: { ru: 'Глаголы с -se: levantarse, ducharse, llamarse — и куда ставить me, te, se.',
               en: 'Verbs with -se: levantarse, ducharse, llamarse — and where to put me, te, se.' },
    sections: [
      {
        heading: { ru: 'Что это такое', en: 'What they are' },
        body: {
          ru: ['У возвратного глагола в конце инфинитива стоит <b>-se</b>: <i>levantarse</i> (вставать), <i>ducharse</i> (принимать душ), <i>llamarse</i> (называться). Действие направлено на себя — как русское «-ся».',
               'При спряжении <b>se</b> меняется по лицам: <b>me, te, se, nos, os, se</b> — и встаёт перед глаголом.'],
          en: ['A reflexive verb has <b>-se</b> at the end of the infinitive: <i>levantarse</i> (to get up), <i>ducharse</i> (to shower), <i>llamarse</i> (to be called). The action is done to oneself.',
               'When conjugated, <b>se</b> changes with the person — <b>me, te, se, nos, os, se</b> — and goes before the verb.']
        },
        table: {
          head: ['', 'levantarse', 'llamarse', 'acostarse (o → ue)'],
          rows: [
            ['yo', 'me levanto', 'me llamo', 'me acuesto'],
            ['tú', 'te levantas', 'te llamas', 'te acuestas'],
            ['él / ella / usted', 'se levanta', 'se llama', 'se acuesta'],
            ['nosotros / nosotras', 'nos levantamos', 'nos llamamos', 'nos acostamos'],
            ['vosotros / vosotras', 'os levantáis', 'os llamáis', 'os acostáis'],
            ['ellos / ellas / ustedes', 'se levantan', 'se llaman', 'se acuestan']
          ]
        },
        examples: [
          { es: 'Me levanto a las siete.', ru: 'Я встаю в семь.', en: 'I get up at seven.' },
          { es: '¿Cómo te llamas?', ru: 'Как тебя зовут?', en: 'What’s your name?' },
          { es: 'Los viernes nos acostamos tarde.', ru: 'По пятницам мы ложимся поздно.', en: 'On Fridays we go to bed late.' }
        ]
      },
      {
        heading: { ru: 'Куда ставить местоимение', en: 'Where the pronoun goes' },
        body: {
          ru: ['С обычной формой глагола — <b>перед</b> ним: <i>Me ducho.</i> Отрицание <b>no</b> идёт ещё раньше: <i>No me levanto temprano.</i>',
               'С инфинитивом местоимение можно <b>приклеить в конец</b> или поставить перед всей конструкцией: <i>Voy a ducharme = Me voy a duchar.</i> Местоимение всё равно согласуется с лицом: <i>vamos a levantarnos</i>.'],
          en: ['With a normal verb form, put it <b>before</b> the verb: <i>Me ducho.</i> <b>No</b> goes even earlier: <i>No me levanto temprano.</i>',
               'With an infinitive, the pronoun can be <b>attached to the end</b> or placed before the whole phrase: <i>Voy a ducharme = Me voy a duchar.</i> It still matches the person: <i>vamos a levantarnos</i>.']
        },
        examples: [
          { es: 'Voy a ducharme ahora.', ru: 'Сейчас пойду в душ.', en: 'I’m going to have a shower now.' },
          { es: 'No me levanto temprano los domingos.', ru: 'По воскресеньям я не встаю рано.', en: 'I don’t get up early on Sundays.' }
        ]
      },
      {
        heading: { ru: 'С -se и без', en: 'With and without -se' },
        body: {
          ru: ['Один глагол может быть и возвратным, и обычным — смысл меняется: <i>lavar el coche</i> (мыть машину) — <i>lavarse las manos</i> (мыть руки); <i>llamar a Ana</i> (звонить Ане) — <i>llamarse Ana</i> (зваться Аной).',
               'С частями тела ставят артикль, а не «мой»: <i>Me lavo <b>los</b> dientes</i>, а не <i>mis dientes</i>.'],
          en: ['The same verb can be reflexive or not, and the meaning changes: <i>lavar el coche</i> (to wash the car) — <i>lavarse las manos</i> (to wash your hands); <i>llamar a Ana</i> (to call Ana) — <i>llamarse Ana</i> (to be called Ana).',
               'With body parts use the article, not “my”: <i>Me lavo <b>los</b> dientes</i>, not <i>mis dientes</i>.']
        },
        examples: [
          { es: 'Me lavo los dientes después de comer.', ru: 'Я чищу зубы после еды.', en: 'I brush my teeth after eating.' },
          { es: 'Llamo a mi madre todos los días.', ru: 'Я звоню маме каждый день.', en: 'I call my mother every day.' }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Yo ___ a las siete. (levantarse)',
        options: ['me levanto', 'se levanto', 'me levanta'], answer: 0,
        explain: { ru: 'Yo → me + форма yo: me levanto.', en: 'Yo → me + the yo form: me levanto.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: '¿Cómo ___ tu hermana? (llamarse)',
        options: ['se llama', 'te llamas', 'se llaman'], answer: 0,
        explain: { ru: 'Tu hermana — она: se llama.', en: 'Tu hermana is “she”: se llama.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Nosotros ___ tarde. (acostarse)',
        options: ['nos acostamos', 'nos acuestamos', 'se acostamos'], answer: 0,
        explain: { ru: 'В форме nosotros o не меняется на ue; местоимение — nos.', en: 'In the nosotros form o does not become ue; the pronoun is nos.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Tú ___ con agua fría. (ducharse)',
        options: ['te duchas', 'se duchas', 'te ducha'], answer: 0,
        explain: { ru: 'Tú → te + форма tú: te duchas.', en: 'Tú → te + the tú form: te duchas.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Mañana voy a ___ temprano. (levantarse)',
        options: ['levantarme', 'levantarse', 'me levantar'], answer: 0,
        explain: { ru: 'Говорю я, поэтому -se превращается в -me: levantarme.', en: 'The speaker is “I”, so -se becomes -me: levantarme.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Me lavo ___ manos.',
        options: ['las', 'mis', 'mías'], answer: 0,
        explain: { ru: 'С частями тела — артикль: me lavo las manos.', en: 'Body parts take the article: me lavo las manos.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Los niños ___ a las nueve. (acostarse)',
        options: ['se acuestan', 'se acostan', 'nos acuestan'], answer: 0,
        explain: { ru: 'Ellos → se; o → ue под ударением: se acuestan.', en: 'Ellos → se; o → ue when stressed: se acuestan.' } },
      { prompt: { ru: 'Как сказать «Я звоню маме»?', en: 'How do you say “I call my mother”?' },
        options: ['Llamo a mi madre.', 'Me llamo a mi madre.', 'Me llamo mi madre.'], answer: 0,
        explain: { ru: 'Звонить кому-то — llamar без -se. Llamarse значит «зваться».', en: 'To call someone is llamar without -se. Llamarse means “to be called”.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: '¿Vosotros ___ antes de desayunar? (ducharse)',
        options: ['os ducháis', 'se ducháis', 'os duchan'], answer: 0,
        explain: { ru: 'Vosotros → os + ducháis.', en: 'Vosotros → os + ducháis.' } },
      { prompt: { ru: 'Выберите местоимение', en: 'Choose the pronoun' }, es: '___ voy a duchar ahora. (ducharse, yo)',
        options: ['Me', 'Se', 'Mi'], answer: 0,
        explain: { ru: 'Я принимаю душ сам, значит возвратное местоимение me: me voy a duchar.', en: 'I shower myself, so the reflexive pronoun is me: me voy a duchar.' } }
    ]
  },
  {
    id: 'a2-ir-a-infinitivo', level: 'A2',
    title: { ru: 'Ir a + инфинитив', en: 'Ir a + infinitive' },
    summary: { ru: 'Самый простой способ говорить о планах и ближайшем будущем.',
               en: 'The easiest way to talk about plans and the near future.' },
    sections: [
      {
        heading: { ru: 'Формула', en: 'The formula' },
        body: {
          ru: ['<b>Ir</b> в настоящем времени + <b>a</b> + инфинитив: <i>Voy a comer</i> — «Я собираюсь поесть, я сейчас поем».',
               'Спрягается только <b>ir</b>, инфинитив не меняется. Не забывайте <b>a</b>: <i>voy a salir</i>, а не <i>voy salir</i>.'],
          en: ['<b>Ir</b> in the present + <b>a</b> + infinitive: <i>Voy a comer</i> — “I’m going to eat”.',
               'Only <b>ir</b> is conjugated; the infinitive stays the same. Don’t forget the <b>a</b>: <i>voy a salir</i>, not <i>voy salir</i>.']
        },
        table: {
          head: ['', 'ir', '+ a + infinitivo'],
          rows: [
            ['yo', 'voy', 'a comer'],
            ['tú', 'vas', 'a comer'],
            ['él / ella / usted', 'va', 'a comer'],
            ['nosotros / nosotras', 'vamos', 'a comer'],
            ['vosotros / vosotras', 'vais', 'a comer'],
            ['ellos / ellas / ustedes', 'van', 'a comer']
          ]
        }
      },
      {
        heading: { ru: 'Когда это нужно', en: 'When to use it' },
        body: {
          ru: ['<b>Планы и намерения:</b> <i>Este verano voy a viajar a México.</i>',
               '<b>Прогноз по тому, что видно сейчас:</b> <i>Mira las nubes: va a llover.</i>',
               'Слова-подсказки: <i>mañana, esta noche, este fin de semana, la semana que viene, el año que viene, el próximo mes</i>.'],
          en: ['<b>Plans and intentions:</b> <i>Este verano voy a viajar a México.</i>',
               '<b>Predictions based on what you can see now:</b> <i>Mira las nubes: va a llover.</i>',
               'Signal words: <i>mañana, esta noche, este fin de semana, la semana que viene, el año que viene, el próximo mes</i>.']
        },
        examples: [
          { es: 'Esta noche vamos a cenar en casa.', ru: 'Сегодня вечером мы будем ужинать дома.', en: 'Tonight we’re going to have dinner at home.' },
          { es: 'Mira el cielo: va a llover.', ru: 'Посмотри на небо: сейчас пойдёт дождь.', en: 'Look at the sky: it’s going to rain.' },
          { es: 'El año que viene voy a estudiar en Salamanca.', ru: 'В следующем году я буду учиться в Саламанке.', en: 'Next year I’m going to study in Salamanca.' }
        ]
      },
      {
        heading: { ru: 'Вопрос, отрицание, местоимения', en: 'Questions, negation, pronouns' },
        body: {
          ru: ['Вопрос: <i>¿Qué vas a hacer mañana?</i> Отрицание — <b>no</b> перед ir: <i>No voy a salir.</i>',
               'Местоимение приклеивается к инфинитиву или встаёт перед ir: <i>Voy a llamarte = Te voy a llamar.</i>',
               '<b>¡Vamos a…!</b> часто значит «давайте»: <i>¡Vamos a bailar!</i>'],
          en: ['Question: <i>¿Qué vas a hacer mañana?</i> Negation — <b>no</b> before ir: <i>No voy a salir.</i>',
               'A pronoun is attached to the infinitive or placed before ir: <i>Voy a llamarte = Te voy a llamar.</i>',
               '<b>¡Vamos a…!</b> often means “let’s”: <i>¡Vamos a bailar!</i>']
        },
        examples: [
          { es: '¿Qué vas a hacer el sábado?', ru: 'Что ты будешь делать в субботу?', en: 'What are you going to do on Saturday?' },
          { es: 'No voy a comprar ese coche.', ru: 'Я не буду покупать эту машину.', en: 'I’m not going to buy that car.' },
          { es: 'Te voy a llamar mañana.', ru: 'Я позвоню тебе завтра.', en: 'I’m going to call you tomorrow.' }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите вариант', en: 'Choose the option' }, es: 'Mañana (yo) ___ estudiar.',
        options: ['voy a', 'vas a', 'voy'], answer: 0,
        explain: { ru: 'Yo → voy, и обязательно a: voy a estudiar.', en: 'Yo → voy, and the a is required: voy a estudiar.' } },
      { prompt: { ru: 'Выберите форму ir', en: 'Choose the form of ir' }, es: 'Mis padres ___ a visitarnos.',
        options: ['van', 'va', 'vamos'], answer: 0,
        explain: { ru: 'Mis padres = ellos → van.', en: 'Mis padres = ellos → van.' } },
      { prompt: { ru: 'Выберите вариант', en: 'Choose the option' }, es: '¿Qué ___ hacer este fin de semana? (tú)',
        options: ['vas a', 'vas', 'va a'], answer: 0,
        explain: { ru: 'Tú → vas, плюс a: vas a hacer.', en: 'Tú → vas, plus a: vas a hacer.' } },
      { prompt: { ru: 'Выберите вариант', en: 'Choose the option' }, es: 'Nosotros ___ cenar en un restaurante.',
        options: ['vamos a', 'vamos', 'van a'], answer: 0,
        explain: { ru: 'Nosotros → vamos a + инфинитив.', en: 'Nosotros → vamos a + infinitive.' } },
      { prompt: { ru: 'Выберите вариант', en: 'Choose the option' }, es: 'Mira las nubes: ___ llover.',
        options: ['va a', 'vas a', 'van a'], answer: 0,
        explain: { ru: 'Llover безличный — всегда 3-е лицо единственного числа: va a llover.', en: 'Llover is impersonal — always third person singular: va a llover.' } },
      { prompt: { ru: 'Выберите форму ir', en: 'Choose the form of ir' }, es: 'Vosotros ___ a llegar tarde.',
        options: ['vais', 'van', 'vamos'], answer: 0,
        explain: { ru: 'Vosotros → vais.', en: 'Vosotros → vais.' } },
      { prompt: { ru: 'Какая фраза правильная?', en: 'Which sentence is correct?' },
        options: ['Voy a llamarte mañana.', 'Voy a te llamar mañana.', 'Voy llamarte mañana.'], answer: 0,
        explain: { ru: 'Местоимение приклеивается к инфинитиву, a обязательно.', en: 'The pronoun is attached to the infinitive, and the a is required.' } },
      { prompt: { ru: 'Какая фраза правильная?', en: 'Which sentence is correct?' },
        options: ['No voy a salir esta noche.', 'Voy no a salir esta noche.', 'No voy salir esta noche.'], answer: 0,
        explain: { ru: 'No стоит перед ir, a не пропускается.', en: 'No goes before ir, and the a is never dropped.' } },
      { prompt: { ru: 'Выберите форму ir', en: 'Choose the form of ir' }, es: 'El próximo año ella ___ a vivir en Barcelona.',
        options: ['va', 'vas', 've'], answer: 0,
        explain: { ru: 'Ella → va. Ve — это повелительное наклонение («иди»).', en: 'Ella → va. Ve is the imperative (“go!”).' } },
      { prompt: { ru: 'Какое начало подходит?', en: 'Which beginning fits?' }, es: '___ voy a ver a mis abuelos.',
        options: ['La semana que viene', 'La semana pasada', 'Ayer'], answer: 0,
        explain: { ru: 'Ir a + инфинитив — о будущем: la semana que viene.', en: 'Ir a + infinitive is about the future: la semana que viene.' } }
    ]
  },
  {
    id: 'a2-comparaciones', level: 'A2',
    title: { ru: 'Сравнения', en: 'Comparisons' },
    summary: { ru: 'Más… que, tan… como и превосходная степень: el mejor, la más bonita, carísimo.',
               en: 'Más… que, tan… como and the superlative: el mejor, la más bonita, carísimo.' },
    sections: [
      {
        heading: { ru: 'Больше и меньше', en: 'More and less' },
        body: {
          ru: ['<b>más</b> + прилагательное, наречие или существительное + <b>que</b>: <i>Mi hermano es más alto que yo.</i>',
               '<b>menos … que</b> — «менее, чем»: <i>Este hotel es menos caro que el otro.</i> С глаголом: <i>Trabajo más que tú.</i>',
               'Перед числом — <b>más de / menos de</b>: <i>Hay más de cien personas.</i>'],
          en: ['<b>más</b> + adjective, adverb or noun + <b>que</b>: <i>Mi hermano es más alto que yo.</i>',
               '<b>menos … que</b> means “less … than”: <i>Este hotel es menos caro que el otro.</i> With a verb: <i>Trabajo más que tú.</i>',
               'Before a number use <b>más de / menos de</b>: <i>Hay más de cien personas.</i>']
        },
        examples: [
          { es: 'Mi hermano es más alto que yo.', ru: 'Мой брат выше меня.', en: 'My brother is taller than me.' },
          { es: 'El tren es menos rápido que el avión.', ru: 'Поезд медленнее самолёта.', en: 'The train is slower than the plane.' },
          { es: 'Hay más de cien personas en la plaza.', ru: 'На площади больше ста человек.', en: 'There are more than a hundred people in the square.' }
        ]
      },
      {
        heading: { ru: 'Так же, как', en: 'As … as' },
        body: {
          ru: ['С прилагательным и наречием — <b>tan … como</b>: <i>Ana es tan alta como su madre.</i>',
               'С существительным — <b>tanto / tanta / tantos / tantas … como</b>, по роду и числу: <i>Tengo tantos libros como tú.</i>',
               'С глаголом — <b>tanto como</b>: <i>Juan trabaja tanto como Pedro.</i>'],
          en: ['With adjectives and adverbs use <b>tan … como</b>: <i>Ana es tan alta como su madre.</i>',
               'With nouns use <b>tanto / tanta / tantos / tantas … como</b>, matching gender and number: <i>Tengo tantos libros como tú.</i>',
               'With verbs use <b>tanto como</b>: <i>Juan trabaja tanto como Pedro.</i>']
        },
        examples: [
          { es: 'Este libro es tan interesante como la película.', ru: 'Эта книга такая же интересная, как фильм.', en: 'This book is as interesting as the film.' },
          { es: 'No tengo tanto tiempo como tú.', ru: 'У меня не так много времени, как у тебя.', en: 'I don’t have as much time as you.' }
        ]
      },
      {
        heading: { ru: 'Особые формы', en: 'Special forms' },
        body: {
          ru: ['Четыре прилагательных сравниваются по-особому: <b>bueno → mejor</b>, <b>malo → peor</b>, а о возрасте — <b>mayor</b> (старше) и <b>menor</b> (младше).',
               'Говорят <i>mejor</i>, а не <i>más bueno</i>: <i>Este restaurante es mejor que el otro.</i>'],
          en: ['Four adjectives have special forms: <b>bueno → mejor</b>, <b>malo → peor</b>, and for age <b>mayor</b> (older) and <b>menor</b> (younger).',
               'Say <i>mejor</i>, not <i>más bueno</i>: <i>Este restaurante es mejor que el otro.</i>']
        },
        table: {
          head: ['', 'comparativo', 'superlativo'],
          rows: [
            ['bueno / bien', 'mejor', 'el / la mejor'],
            ['malo / mal', 'peor', 'el / la peor'],
            ['grande (edad)', 'mayor', 'el / la mayor'],
            ['pequeño (edad)', 'menor', 'el / la menor']
          ]
        }
      },
      {
        heading: { ru: 'Превосходная степень', en: 'The superlative' },
        body: {
          ru: ['«Самый» — <b>el / la / los / las</b> (+ существительное) + <b>más</b> + прилагательное + <b>de</b>: <i>Es la ciudad más bonita de España.</i>',
               '«Очень-очень» — окончание <b>-ísimo</b>: <i>caro → carísimo</i>, <i>fácil → facilísimo</i>, <i>mucho → muchísimo</i>. С ним <i>muy</i> уже не нужно.'],
          en: ['“The most” is <b>el / la / los / las</b> (+ noun) + <b>más</b> + adjective + <b>de</b>: <i>Es la ciudad más bonita de España.</i>',
               '“Really, extremely” is the ending <b>-ísimo</b>: <i>caro → carísimo</i>, <i>fácil → facilísimo</i>, <i>mucho → muchísimo</i>. Don’t add <i>muy</i> to it.']
        },
        examples: [
          { es: 'Es el mejor restaurante de la ciudad.', ru: 'Это лучший ресторан в городе.', en: 'It’s the best restaurant in town.' },
          { es: 'Este hotel es carísimo.', ru: 'Этот отель ужасно дорогой.', en: 'This hotel is extremely expensive.' }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Mi coche es ___ rápido que el tuyo.',
        options: ['más', 'tan', 'tanto'], answer: 0,
        explain: { ru: 'После идёт que, значит más … que.', en: 'It is followed by que, so más … que.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Ana es tan alta ___ su madre.',
        options: ['como', 'que', 'de'], answer: 0,
        explain: { ru: 'Tan всегда в паре с como.', en: 'Tan always pairs with como.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Pedro es más alto ___ Luis.',
        options: ['que', 'como', 'de'], answer: 0,
        explain: { ru: 'Más … que: más alto que Luis.', en: 'Más … que: más alto que Luis.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Este restaurante es ___ que el otro. (bueno)',
        options: ['mejor', 'más bueno', 'más mejor'], answer: 0,
        explain: { ru: 'Сравнение от bueno — mejor; más перед ним не ставят.', en: 'The comparative of bueno is mejor; never put más before it.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Tengo ___ amigos como tú.',
        options: ['tantos', 'tan', 'tantas'], answer: 0,
        explain: { ru: 'Перед существительным — tanto, по роду и числу: amigos → tantos.', en: 'Before a noun use tanto, matching gender and number: amigos → tantos.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Es la ciudad más bonita ___ España.',
        options: ['de', 'que', 'como'], answer: 0,
        explain: { ru: 'В превосходной степени — de: la más bonita de España.', en: 'The superlative uses de: la más bonita de España.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Mi hermana tiene 20 años y yo 25: soy ___ que ella.',
        options: ['mayor', 'tan mayor', 'menor'], answer: 0,
        explain: { ru: 'Старше — mayor … que. Tan требует como, а menor значит «младше».', en: 'Older is mayor … que. Tan needs como, and menor means “younger”.' } },
      { prompt: { ru: 'Выберите вариант', en: 'Choose the option' }, es: 'Hay ___ cincuenta personas en la sala.',
        options: ['más de', 'más que', 'tan como'], answer: 0,
        explain: { ru: 'Перед числом — más de.', en: 'Before a number use más de.' } },
      { prompt: { ru: 'Скажите «очень-очень лёгкий»', en: 'Say “really, really easy”' }, es: 'Este examen es ___.',
        options: ['facilísimo', 'muy facilísimo', 'más fácil'], answer: 0,
        explain: { ru: 'Fácil + -ísimo = facilísimo; muy с ним не нужно.', en: 'Fácil + -ísimo = facilísimo; no muy needed.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Juan trabaja ___ como Pedro.',
        options: ['tanto', 'tan', 'tantos'], answer: 0,
        explain: { ru: 'После глагола — tanto como.', en: 'After a verb use tanto como.' } }
    ]
  }
]);
