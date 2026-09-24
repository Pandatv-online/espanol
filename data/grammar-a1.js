// A1 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('A1', [
  {
    id: 'a1-articulos', level: 'A1',
    title: { ru: 'Род и число, артикли', en: 'Gender, number and articles' },
    summary: { ru: 'Мужской и женский род, множественное число и слова el, la, un, una.',
               en: 'Masculine and feminine, plurals, and the words el, la, un, una.' },
    sections: [
      {
        heading: { ru: 'Мужской и женский род', en: 'Masculine and feminine' },
        body: {
          ru: ['У каждого существительного есть род. Слова на <b>-o</b> обычно мужского рода: <i>el libro</i>. Слова на <b>-a</b> — обычно женского: <i>la casa</i>.',
               'Есть исключения: <i>el día</i>, <i>el mapa</i>, <i>el problema</i> — мужского рода; <i>la mano</i>, <i>la foto</i> — женского. Слова на <b>-ción</b> и <b>-dad</b> — женского: <i>la canción</i>, <i>la ciudad</i>.',
               'Если слово кончается на <b>-e</b> или согласную, род не угадать — учите его сразу с артиклем: <i>el coche</i>, <i>la noche</i>, <i>el hotel</i>.'],
          en: ['Every noun has a gender. Words ending in <b>-o</b> are usually masculine: <i>el libro</i>. Words ending in <b>-a</b> are usually feminine: <i>la casa</i>.',
               'There are exceptions: <i>el día</i>, <i>el mapa</i>, <i>el problema</i> are masculine; <i>la mano</i>, <i>la foto</i> are feminine. Words ending in <b>-ción</b> and <b>-dad</b> are feminine: <i>la canción</i>, <i>la ciudad</i>.',
               'If a word ends in <b>-e</b> or a consonant, you can’t guess the gender, so learn it together with the article: <i>el coche</i>, <i>la noche</i>, <i>el hotel</i>.']
        }
      },
      {
        heading: { ru: 'Множественное число', en: 'Plurals' },
        body: {
          ru: ['После гласной добавьте <b>-s</b>: <i>libro → libros</i>. После согласной — <b>-es</b>: <i>ciudad → ciudades</i>, <i>hotel → hoteles</i>.',
               'Слова на <b>-z</b> меняют её на <b>c</b>: <i>lápiz → lápices</i>.'],
          en: ['After a vowel, add <b>-s</b>: <i>libro → libros</i>. After a consonant, add <b>-es</b>: <i>ciudad → ciudades</i>, <i>hotel → hoteles</i>.',
               'Words ending in <b>-z</b> change it to <b>c</b>: <i>lápiz → lápices</i>.']
        }
      },
      {
        heading: { ru: 'Артикли', en: 'Articles' },
        body: {
          ru: ['<b>El, la, los, las</b> — определённые артикли: говорим о конкретном, уже известном предмете. <b>Un, una, unos, unas</b> — неопределённые: «какой-то, один из многих», часто когда предмет упоминается впервые.',
               'Прилагательное повторяет род и число существительного: <i>el gato negro</i>, <i>las casas blancas</i>.',
               'Два слияния: <b>a + el = al</b>, <b>de + el = del</b>. <i>Voy al cine. Es el coche del profesor.</i>'],
          en: ['<b>El, la, los, las</b> are definite articles (“the”): a specific thing we already know. <b>Un, una, unos, unas</b> are indefinite (“a”, “some”): often used when something is mentioned for the first time.',
               'An adjective matches the noun in gender and number: <i>el gato negro</i>, <i>las casas blancas</i>.',
               'Two contractions: <b>a + el = al</b>, <b>de + el = del</b>. <i>Voy al cine. Es el coche del profesor.</i>']
        },
        table: {
          head: ['', 'masculino', 'femenino'],
          rows: [
            ['definido · singular', 'el', 'la'],
            ['definido · plural', 'los', 'las'],
            ['indefinido · singular', 'un', 'una'],
            ['indefinido · plural', 'unos', 'unas']
          ]
        },
        examples: [
          { es: 'El libro está en la mesa.', ru: 'Книга лежит на столе.', en: 'The book is on the table.' },
          { es: 'Tengo un perro y dos gatos.', ru: 'У меня есть собака и две кошки.', en: 'I have a dog and two cats.' },
          { es: 'Las ciudades de España son muy bonitas.', ru: 'Города Испании очень красивые.', en: 'The cities of Spain are very beautiful.' },
          { es: 'Es el coche del profesor.', ru: 'Это машина преподавателя.', en: 'It’s the teacher’s car.' }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите артикль', en: 'Choose the article' }, es: '___ problema es difícil.',
        options: ['El', 'La', 'Los'], answer: 0,
        explain: { ru: 'Problema — мужского рода, хотя кончается на -a: el problema.', en: 'Problema is masculine even though it ends in -a: el problema.' } },
      { prompt: { ru: 'Выберите артикль', en: 'Choose the article' }, es: 'Me duele ___ mano.',
        options: ['la', 'el', 'los'], answer: 0,
        explain: { ru: 'Mano — женского рода, хотя кончается на -o: la mano.', en: 'Mano is feminine even though it ends in -o: la mano.' } },
      { prompt: { ru: 'Выберите артикль', en: 'Choose the article' }, es: '¿Dónde está ___ foto?',
        options: ['la', 'el', 'lo'], answer: 0,
        explain: { ru: 'Foto — сокращение от la fotografía, поэтому женского рода.', en: 'Foto is short for la fotografía, so it is feminine.' } },
      { prompt: { ru: 'Как будет множественное число: la ciudad?', en: 'What is the plural of la ciudad?' },
        options: ['las ciudades', 'las ciudads', 'los ciudades'], answer: 0,
        explain: { ru: 'После согласной добавляем -es; слово женского рода — las.', en: 'After a consonant add -es; the word is feminine, so las.' } },
      { prompt: { ru: 'Как будет множественное число: el lápiz?', en: 'What is the plural of el lápiz?' },
        options: ['los lápices', 'los lápizes', 'los lápiz'], answer: 0,
        explain: { ru: 'Z перед -es меняется на c: lápices.', en: 'Z changes to c before -es: lápices.' } },
      { prompt: { ru: 'Выберите артикль', en: 'Choose the article' }, es: 'Tengo ___ hermano y dos hermanas.',
        options: ['un', 'una', 'el'], answer: 0,
        explain: { ru: 'Брат упоминается впервые, слово мужского рода: un hermano.', en: 'The brother is mentioned for the first time and the word is masculine: un hermano.' } },
      { prompt: { ru: 'Выберите форму прилагательного', en: 'Choose the adjective form' }, es: 'Las casas son ___. (blanco)',
        options: ['blancas', 'blancos', 'blanca'], answer: 0,
        explain: { ru: 'Las casas — женский род, множественное число: blancas.', en: 'Las casas is feminine plural: blancas.' } },
      { prompt: { ru: 'Выберите правильный вариант', en: 'Choose the correct option' }, es: 'Voy ___ cine.',
        options: ['al', 'a el', 'del'], answer: 0,
        explain: { ru: 'A + el всегда сливаются в al.', en: 'A + el always merge into al.' } },
      { prompt: { ru: 'Выберите правильный вариант', en: 'Choose the correct option' }, es: 'Es el coche ___ profesor.',
        options: ['del', 'de el', 'al'], answer: 0,
        explain: { ru: 'De + el всегда сливаются в del.', en: 'De + el always merge into del.' } },
      { prompt: { ru: 'Выберите артикль', en: 'Choose the article' }, es: 'Hoy es ___ día muy bonito.',
        options: ['un', 'una', 'unos'], answer: 0,
        explain: { ru: 'Día — мужского рода, хотя кончается на -a: un día.', en: 'Día is masculine even though it ends in -a: un día.' } }
    ]
  },
  {
    id: 'a1-ser-estar', level: 'A1',
    title: { ru: 'Ser и estar', en: 'Ser and estar' },
    summary: { ru: 'Два глагола «быть»: ser — кто или что это, estar — где и в каком состоянии.',
               en: 'Two verbs for “to be”: ser for who or what something is, estar for where and how it is.' },
    sections: [
      {
        heading: { ru: 'Два глагола «быть»', en: 'Two verbs for “to be”' },
        body: {
          ru: ['В испанском два глагола со значением «быть»: <b>ser</b> и <b>estar</b>. Оба неправильные — их формы нужно выучить.'],
          en: ['Spanish has two verbs meaning “to be”: <b>ser</b> and <b>estar</b>. Both are irregular, so learn their forms by heart.']
        },
        table: {
          head: ['', 'ser', 'estar'],
          rows: [
            ['yo', 'soy', 'estoy'],
            ['tú', 'eres', 'estás'],
            ['él / ella / usted', 'es', 'está'],
            ['nosotros / nosotras', 'somos', 'estamos'],
            ['vosotros / vosotras', 'sois', 'estáis'],
            ['ellos / ellas / ustedes', 'son', 'están']
          ]
        }
      },
      {
        heading: { ru: 'Ser — кто или что это', en: 'Ser — who or what it is' },
        body: {
          ru: ['<b>Ser</b> описывает то, что определяет человека или предмет: имя, профессию, национальность, характер, внешность.',
               'С <b>ser de</b> говорят, откуда человек: <i>Soy de Rusia.</i> Через ser называют время и дату: <i>Son las tres. Hoy es lunes.</i>'],
          en: ['<b>Ser</b> describes what defines a person or thing: name, job, nationality, character, looks.',
               '<b>Ser de</b> tells where someone is from: <i>Soy de Rusia.</i> Ser is also used for time and dates: <i>Son las tres. Hoy es lunes.</i>']
        },
        examples: [
          { es: 'Soy Ana y soy de Colombia.', ru: 'Я Ана, я из Колумбии.', en: 'I’m Ana and I’m from Colombia.' },
          { es: 'Mi hermana es médica.', ru: 'Моя сестра — врач.', en: 'My sister is a doctor.' },
          { es: 'Son las cinco.', ru: 'Сейчас пять часов.', en: 'It’s five o’clock.' }
        ]
      },
      {
        heading: { ru: 'Estar — где и как', en: 'Estar — where and how' },
        body: {
          ru: ['<b>Estar</b> говорит, где находится человек или предмет: <i>La farmacia está cerca.</i>',
               'А ещё — в каком он состоянии сейчас: самочувствие, настроение. <i>Estoy cansado. ¿Cómo estás? — Estoy bien.</i>'],
          en: ['<b>Estar</b> tells where a person or thing is: <i>La farmacia está cerca.</i>',
               'It also tells how someone or something is right now: health, mood. <i>Estoy cansado. ¿Cómo estás? — Estoy bien.</i>']
        },
        examples: [
          { es: 'La farmacia está cerca.', ru: 'Аптека рядом.', en: 'The pharmacy is nearby.' },
          { es: 'Hoy estoy muy cansado.', ru: 'Сегодня я очень устал.', en: 'I’m very tired today.' },
          { es: 'Madrid está en el centro de España.', ru: 'Мадрид находится в центре Испании.', en: 'Madrid is in the centre of Spain.' }
        ]
      },
      {
        heading: { ru: 'Одно слово — разный смысл', en: 'Same word, different meaning' },
        body: {
          ru: ['Некоторые прилагательные меняют смысл: <i>Luis es aburrido</i> — Луис скучный человек; <i>Luis está aburrido</i> — Луису сейчас скучно.',
               '<i>Es listo</i> — он умный; <i>está listo</i> — он готов.'],
          en: ['Some adjectives change their meaning: <i>Luis es aburrido</i> — Luis is a boring person; <i>Luis está aburrido</i> — Luis is bored right now.',
               '<i>Es listo</i> — he is clever; <i>está listo</i> — he is ready.']
        }
      }
    ],
    quiz: [
      { prompt: { ru: 'Ser или estar?', en: 'Ser or estar?' }, es: 'Yo ___ de Rusia.',
        options: ['soy', 'estoy', 'es'], answer: 0,
        explain: { ru: 'Откуда человек — ser de: soy de Rusia.', en: 'Where someone is from — ser de: soy de Rusia.' } },
      { prompt: { ru: 'Ser или estar?', en: 'Ser or estar?' }, es: '¿Dónde ___ el baño?',
        options: ['está', 'es', 'están'], answer: 0,
        explain: { ru: 'Где находится — estar; el baño — один, поэтому está.', en: 'Location — estar; el baño is singular, so está.' } },
      { prompt: { ru: 'Ser или estar?', en: 'Ser or estar?' }, es: 'Hoy mi madre ___ enferma.',
        options: ['está', 'es', 'están'], answer: 0,
        explain: { ru: 'Самочувствие сейчас — estar: está enferma.', en: 'How someone feels right now — estar: está enferma.' } },
      { prompt: { ru: 'Ser или estar?', en: 'Ser or estar?' }, es: 'Nosotros ___ estudiantes.',
        options: ['somos', 'estamos', 'son'], answer: 0,
        explain: { ru: 'Кто мы такие (занятие) — ser: somos.', en: 'Who we are (occupation) — ser: somos.' } },
      { prompt: { ru: 'Ser или estar?', en: 'Ser or estar?' }, es: 'Madrid ___ en el centro de España.',
        options: ['está', 'es', 'son'], answer: 0,
        explain: { ru: 'Местоположение, даже постоянное, — estar.', en: 'Location, even a permanent one, takes estar.' } },
      { prompt: { ru: 'Ser или estar?', en: 'Ser or estar?' }, es: '¿Qué hora es? — ___ las tres.',
        options: ['Son', 'Están', 'Es'], answer: 0,
        explain: { ru: 'Время называют через ser; las tres — множественное: son.', en: 'Time is told with ser; las tres is plural: son.' } },
      { prompt: { ru: 'Ser или estar?', en: 'Ser or estar?' }, es: 'Paolo y Giulia ___ italianos.',
        options: ['son', 'están', 'es'], answer: 0,
        explain: { ru: 'Национальность — ser; их двое: son.', en: 'Nationality — ser; there are two of them: son.' } },
      { prompt: { ru: 'Ser или estar?', en: 'Ser or estar?' }, es: '¿Cómo ___ (tú)? — Bien, gracias.',
        options: ['estás', 'eres', 'es'], answer: 0,
        explain: { ru: '«Как дела?» — вопрос о состоянии: ¿cómo estás?', en: '“How are you?” asks about a state: ¿cómo estás?' } },
      { prompt: { ru: 'Ser или estar?', en: 'Ser or estar?' }, es: 'El café ___ listo.',
        options: ['está', 'es', 'son'], answer: 0,
        explain: { ru: 'Estar listo — «готов». Ser listo значит «умный».', en: 'Estar listo means “ready”. Ser listo means “clever”.' } },
      { prompt: { ru: 'Ser или estar?', en: 'Ser or estar?' }, es: 'Mi padre ___ médico.',
        options: ['es', 'está', 'estás'], answer: 0,
        explain: { ru: 'Профессия — ser: es médico.', en: 'A job — ser: es médico.' } }
    ]
  },
  {
    id: 'a1-presente-ar', level: 'A1',
    title: { ru: 'Настоящее время: правильные глаголы', en: 'Present tense: regular verbs' },
    summary: { ru: 'Как спрягать правильные глаголы на -ar, -er и -ir: hablar, comer, vivir.',
               en: 'How to conjugate regular -ar, -er and -ir verbs: hablar, comer, vivir.' },
    sections: [
      {
        heading: { ru: 'Основа + окончание', en: 'Stem + ending' },
        body: {
          ru: ['Испанские глаголы делятся на три группы по окончанию: <b>-ar</b>, <b>-er</b>, <b>-ir</b>.',
               'Уберите окончание — останется основа: <i>habl-ar</i> → <b>habl-</b>. К основе добавьте окончание нужного лица.',
               'Местоимение часто опускают: окончание и так показывает, кто действует. <i>Hablo español</i> — «Я говорю по-испански».'],
          en: ['Spanish verbs fall into three groups by their ending: <b>-ar</b>, <b>-er</b>, <b>-ir</b>.',
               'Drop the ending to get the stem: <i>habl-ar</i> → <b>habl-</b>. Then add the ending for the person.',
               'The pronoun is often left out, because the ending already shows who acts. <i>Hablo español</i> — “I speak Spanish”.']
        },
        table: {
          head: ['', 'hablar', 'comer', 'vivir'],
          rows: [
            ['yo', 'hablo', 'como', 'vivo'],
            ['tú', 'hablas', 'comes', 'vives'],
            ['él / ella / usted', 'habla', 'come', 'vive'],
            ['nosotros / nosotras', 'hablamos', 'comemos', 'vivimos'],
            ['vosotros / vosotras', 'habláis', 'coméis', 'vivís'],
            ['ellos / ellas / ustedes', 'hablan', 'comen', 'viven']
          ]
        }
      },
      {
        heading: { ru: '-er и -ir почти одинаковы', en: '-er and -ir are almost the same' },
        body: {
          ru: ['У глаголов на <b>-er</b> и <b>-ir</b> окончания совпадают везде, кроме «мы» и «вы»: <i>comemos — vivimos</i>, <i>coméis — vivís</i>.',
               'Частая ошибка — ставить окончание <b>-a</b> глаголам на -er: правильно <i>ella come</i>, а не <i>ella coma</i>.'],
          en: ['Verbs in <b>-er</b> and <b>-ir</b> share all endings except “we” and “you all”: <i>comemos — vivimos</i>, <i>coméis — vivís</i>.',
               'A common mistake is giving -er verbs the <b>-a</b> ending: it is <i>ella come</i>, not <i>ella coma</i>.']
        },
        examples: [
          { es: 'Comemos a las dos.', ru: 'Мы обедаем в два часа.', en: 'We have lunch at two.' },
          { es: 'Mis amigos viven en Valencia.', ru: 'Мои друзья живут в Валенсии.', en: 'My friends live in Valencia.' },
          { es: '¿Lees mucho?', ru: 'Ты много читаешь?', en: 'Do you read a lot?' }
        ]
      },
      {
        heading: { ru: 'Usted и ustedes', en: 'Usted and ustedes' },
        body: {
          ru: ['<b>Usted</b> — вежливое «вы» одному человеку, <b>ustedes</b> — «вы» нескольким. Глагол с ними стоит в форме 3-го лица: <i>usted habla</i>, <i>ustedes hablan</i>.'],
          en: ['<b>Usted</b> is the polite “you” for one person, <b>ustedes</b> is “you” for several people. They take the third-person form: <i>usted habla</i>, <i>ustedes hablan</i>.']
        },
        examples: [
          { es: '¿Usted habla inglés?', ru: 'Вы говорите по-английски?', en: 'Do you speak English?' },
          { es: 'Estudiamos español los lunes.', ru: 'Мы учим испанский по понедельникам.', en: 'We study Spanish on Mondays.' }
        ]
      },
      {
        heading: { ru: 'Отрицание и вопрос', en: 'Negation and questions' },
        body: {
          ru: ['Чтобы сказать «не», поставьте <b>no</b> перед глаголом: <i>No trabajo los domingos.</i>',
               'Вопрос отличается от утверждения интонацией, а на письме — знаками <b>¿ ?</b>: <i>¿Vives en Madrid?</i>'],
          en: ['To say “not”, put <b>no</b> before the verb: <i>No trabajo los domingos.</i>',
               'A question differs from a statement only in intonation, and in writing by the marks <b>¿ ?</b>: <i>¿Vives en Madrid?</i>']
        },
        examples: [
          { es: 'No hablo alemán.', ru: 'Я не говорю по-немецки.', en: 'I don’t speak German.' },
          { es: '¿Vives en Madrid?', ru: 'Ты живёшь в Мадриде?', en: 'Do you live in Madrid?' }
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
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Nosotros ___ música. (escuchar)',
        options: ['escuchan', 'escuchamos', 'escucháis'], answer: 1,
        explain: { ru: 'Nosotros → окончание -amos: escuchamos.', en: 'Nosotros → ending -amos: escuchamos.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Vosotros ___ muy bien. (bailar)',
        options: ['bailáis', 'bailamos', 'bailan', 'baila'], answer: 0,
        explain: { ru: 'Vosotros → окончание -áis: bailáis.', en: 'Vosotros → ending -áis: bailáis.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Ella ___ mucha fruta. (comer)',
        options: ['come', 'coma', 'comes'], answer: 0,
        explain: { ru: 'Глагол на -er: ella → окончание -e, come.', en: 'An -er verb: ella → ending -e, come.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Nosotros ___ en Sevilla. (vivir)',
        options: ['vivimos', 'vivemos', 'viven'], answer: 0,
        explain: { ru: 'У глаголов на -ir «мы» — окончание -imos: vivimos.', en: 'For -ir verbs, “we” takes -imos: vivimos.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Vosotros ___ el periódico. (leer)',
        options: ['leéis', 'leís', 'leen'], answer: 0,
        explain: { ru: 'Глагол на -er: vosotros → -éis, leéis.', en: 'An -er verb: vosotros → -éis, leéis.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: '¿Usted ___ inglés? (hablar)',
        options: ['hablas', 'habla', 'hablan'], answer: 1,
        explain: { ru: 'Usted — вежливое «вы», но глагол в 3-м лице: habla.', en: 'Usted is polite “you” but takes the third person: habla.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Mis hijos ___ cartas a su abuela. (escribir)',
        options: ['escriben', 'escribien', 'escribimos'], answer: 0,
        explain: { ru: 'Mis hijos = ellos → окончание -en: escriben.', en: 'Mis hijos = ellos → ending -en: escriben.' } },
      { prompt: { ru: 'Как сказать «Я не готовлю по понедельникам»?', en: 'How do you say “I don’t cook on Mondays”?' },
        options: ['No cocino los lunes.', 'Cocino no los lunes.', 'No cocina los lunes.'], answer: 0,
        explain: { ru: 'No ставится перед глаголом; yo → cocino.', en: 'No goes before the verb; yo → cocino.' } }
    ]
  },
  {
    id: 'a1-presente-irregulares', level: 'A1',
    title: { ru: 'Настоящее время: неправильные глаголы', en: 'Present tense: irregular verbs' },
    summary: { ru: 'Самые нужные неправильные глаголы: ir, tener, hacer, querer, poder и другие.',
               en: 'The most useful irregular verbs: ir, tener, hacer, querer, poder and more.' },
    sections: [
      {
        heading: { ru: 'Ir, tener, hacer', en: 'Ir, tener, hacer' },
        body: {
          ru: ['Самые частые глаголы — неправильные, и их формы нужно запомнить. <b>Ir</b> (идти, ехать) меняется целиком, у <b>tener</b> (иметь) и <b>hacer</b> (делать) особая форма «я».',
               'С tener говорят о возрасте: <i>Tengo veinte años</i> — «Мне двадцать лет».'],
          en: ['The most frequent verbs are irregular, so their forms must be memorised. <b>Ir</b> (to go) changes completely; <b>tener</b> (to have) and <b>hacer</b> (to do, to make) have a special “I” form.',
               'Tener is used for age: <i>Tengo veinte años</i> — “I’m twenty”.']
        },
        table: {
          head: ['', 'ir', 'tener', 'hacer'],
          rows: [
            ['yo', 'voy', 'tengo', 'hago'],
            ['tú', 'vas', 'tienes', 'haces'],
            ['él / ella / usted', 'va', 'tiene', 'hace'],
            ['nosotros / nosotras', 'vamos', 'tenemos', 'hacemos'],
            ['vosotros / vosotras', 'vais', 'tenéis', 'hacéis'],
            ['ellos / ellas / ustedes', 'van', 'tienen', 'hacen']
          ]
        },
        examples: [
          { es: 'Tengo dos hermanos.', ru: 'У меня два брата.', en: 'I have two brothers.' },
          { es: 'Los domingos vamos a la playa.', ru: 'По воскресеньям мы ходим на пляж.', en: 'On Sundays we go to the beach.' },
          { es: '¿Qué haces los fines de semana?', ru: 'Что ты делаешь по выходным?', en: 'What do you do at weekends?' }
        ]
      },
      {
        heading: { ru: 'Меняется гласная в основе', en: 'The stem vowel changes' },
        body: {
          ru: ['У многих глаголов под ударением меняется гласная основы: <b>e → ie</b> (querer → <i>quiero</i>), <b>o → ue</b> (poder → <i>puedo</i>), <b>e → i</b> (pedir → <i>pido</i>).',
               'В формах «мы» и «вы» (nosotros, vosotros) гласная не меняется: <i>queremos, podéis</i>.',
               'Так же спрягаются: <i>empezar, pensar, preferir</i> (e → ie); <i>dormir, volver, contar</i> (o → ue); <i>repetir, servir</i> (e → i). <i>Jugar</i> меняет u → ue: <i>juego</i>.'],
          en: ['In many verbs the stem vowel changes when stressed: <b>e → ie</b> (querer → <i>quiero</i>), <b>o → ue</b> (poder → <i>puedo</i>), <b>e → i</b> (pedir → <i>pido</i>).',
               'The “we” and “you all” forms (nosotros, vosotros) keep the original vowel: <i>queremos, podéis</i>.',
               'Other verbs like this: <i>empezar, pensar, preferir</i> (e → ie); <i>dormir, volver, contar</i> (o → ue); <i>repetir, servir</i> (e → i). <i>Jugar</i> changes u → ue: <i>juego</i>.']
        },
        table: {
          head: ['', 'querer (e → ie)', 'poder (o → ue)', 'pedir (e → i)'],
          rows: [
            ['yo', 'quiero', 'puedo', 'pido'],
            ['tú', 'quieres', 'puedes', 'pides'],
            ['él / ella / usted', 'quiere', 'puede', 'pide'],
            ['nosotros / nosotras', 'queremos', 'podemos', 'pedimos'],
            ['vosotros / vosotras', 'queréis', 'podéis', 'pedís'],
            ['ellos / ellas / ustedes', 'quieren', 'pueden', 'piden']
          ]
        },
        examples: [
          { es: 'Quiero un café, por favor.', ru: 'Я хочу кофе, пожалуйста.', en: 'I’d like a coffee, please.' },
          { es: 'Hoy no puedo salir.', ru: 'Сегодня я не могу выйти.', en: 'I can’t go out today.' }
        ]
      },
      {
        heading: { ru: 'Особая форма «я»', en: 'A special “I” form' },
        body: {
          ru: ['У некоторых глаголов неправильная только форма <b>yo</b>, остальные — как у правильных: <i>poner → pongo</i>, <i>salir → salgo</i>, <i>saber → sé</i>, <i>ver → veo</i>, <i>dar → doy</i>, <i>conocer → conozco</i>.',
               '<b>Venir</b> (приходить) сочетает оба типа: <i>vengo</i>, но <i>vienes, viene, vienen</i>.'],
          en: ['Some verbs are irregular only in the <b>yo</b> form; the rest is regular: <i>poner → pongo</i>, <i>salir → salgo</i>, <i>saber → sé</i>, <i>ver → veo</i>, <i>dar → doy</i>, <i>conocer → conozco</i>.',
               '<b>Venir</b> (to come) combines both types: <i>vengo</i>, but <i>vienes, viene, vienen</i>.']
        },
        examples: [
          { es: 'Salgo de casa a las ocho.', ru: 'Я выхожу из дома в восемь.', en: 'I leave home at eight.' },
          { es: 'No sé dónde está la estación.', ru: 'Я не знаю, где вокзал.', en: 'I don’t know where the station is.' }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Yo ___ veinte años. (tener)',
        options: ['tengo', 'teno', 'tieno'], answer: 0,
        explain: { ru: 'Tener в форме yo — tengo.', en: 'The yo form of tener is tengo.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Nosotros ___ al cine. (ir)',
        options: ['vamos', 'imos', 'van'], answer: 0,
        explain: { ru: 'Ir полностью неправильный: nosotros → vamos.', en: 'Ir is fully irregular: nosotros → vamos.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: '¿Qué ___ tú los sábados? (hacer)',
        options: ['haces', 'hagas', 'hace'], answer: 0,
        explain: { ru: 'Неправильная у hacer только форма yo (hago); tú → haces.', en: 'Only the yo form of hacer is irregular (hago); tú → haces.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Ella ___ un té. (querer)',
        options: ['quiere', 'quere', 'quiero'], answer: 0,
        explain: { ru: 'Querer: e → ie под ударением, ella → quiere.', en: 'Querer: e → ie when stressed, ella → quiere.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: '¿___ ayudarme? (poder, vosotros)',
        options: ['Podéis', 'Puedéis', 'Pueden'], answer: 0,
        explain: { ru: 'В форме vosotros гласная не меняется: podéis.', en: 'The vosotros form keeps the vowel: podéis.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Yo ___ la mesa. (poner)',
        options: ['pongo', 'pono', 'pone'], answer: 0,
        explain: { ru: 'Poner: особая форма yo — pongo.', en: 'Poner has a special yo form: pongo.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Mi hijo ___ diez horas. (dormir)',
        options: ['duerme', 'dorme', 'duermo'], answer: 0,
        explain: { ru: 'Dormir: o → ue, él → duerme.', en: 'Dormir: o → ue, él → duerme.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Yo no ___ dónde está. (saber)',
        options: ['sé', 'sabo', 'sabe'], answer: 0,
        explain: { ru: 'Saber в форме yo — sé, с ударением.', en: 'The yo form of saber is sé, with an accent.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'En el restaurante siempre ___ pescado. (pedir, yo)',
        options: ['pido', 'pide', 'piedo'], answer: 0,
        explain: { ru: 'Pedir: e → i, yo → pido.', en: 'Pedir: e → i, yo → pido.' } },
      { prompt: { ru: 'Выберите форму глагола', en: 'Choose the verb form' }, es: 'Ellos ___ de Sevilla. (venir)',
        options: ['vienen', 'venen', 'vinen'], answer: 0,
        explain: { ru: 'Venir: e → ie, ellos → vienen.', en: 'Venir: e → ie, ellos → vienen.' } }
    ]
  },
  {
    id: 'a1-gustar', level: 'A1',
    title: { ru: 'Gustar и похожие глаголы', en: 'Gustar and similar verbs' },
    summary: { ru: 'Как сказать «мне нравится», «обожаю», «интересно», «болит».',
               en: 'How to say “I like”, “I love”, “I’m interested in”, “it hurts”.' },
    sections: [
      {
        heading: { ru: 'Как это устроено', en: 'How it works' },
        body: {
          ru: ['По-испански говорят не «я люблю кофе», а «мне нравится кофе»: <b>me gusta</b> el café. Тот, кому нравится, — местоимение <b>me, te, le, nos, os, les</b>.',
               'Глагол согласуется с тем, что нравится. Одна вещь или действие — <b>gusta</b>: <i>me gusta el mar, me gusta leer</i>. Несколько вещей — <b>gustan</b>: <i>me gustan los perros</i>.',
               'Несколько действий подряд — всё равно <b>gusta</b>: <i>nos gusta cocinar y leer</i>.'],
          en: ['In Spanish you don’t say “I like coffee” but “coffee pleases me”: <b>me gusta</b> el café. The person who likes it is a pronoun: <b>me, te, le, nos, os, les</b>.',
               'The verb agrees with the thing that is liked. One thing or an action — <b>gusta</b>: <i>me gusta el mar, me gusta leer</i>. Several things — <b>gustan</b>: <i>me gustan los perros</i>.',
               'Several actions still take <b>gusta</b>: <i>nos gusta cocinar y leer</i>.']
        },
        table: {
          head: ['', 'una cosa / infinitivo', 'varias cosas'],
          rows: [
            ['(a mí)', 'me gusta', 'me gustan'],
            ['(a ti)', 'te gusta', 'te gustan'],
            ['(a él / ella / usted)', 'le gusta', 'le gustan'],
            ['(a nosotros / nosotras)', 'nos gusta', 'nos gustan'],
            ['(a vosotros / vosotras)', 'os gusta', 'os gustan'],
            ['(a ellos / ellas / ustedes)', 'les gusta', 'les gustan']
          ]
        },
        examples: [
          { es: 'Me gusta leer.', ru: 'Я люблю читать.', en: 'I like reading.' },
          { es: 'Nos gustan las películas españolas.', ru: 'Нам нравятся испанские фильмы.', en: 'We like Spanish films.' }
        ]
      },
      {
        heading: { ru: 'A mí, a ti и «мне тоже»', en: 'A mí, a ti and “me too”' },
        body: {
          ru: ['Слова <b>a mí, a ti, a él</b>… добавляют для акцента или ясности: <i>A mí me gusta el té, ¿y a ti?</i> Если называем человека по имени, нужны и <b>a</b>, и местоимение: <i>A Juan le gusta el fútbol.</i>',
               '«Мне тоже» — <b>a mí también</b>. «Мне тоже не нравится» — <b>a mí tampoco</b>.'],
          en: ['<b>A mí, a ti, a él</b>… are added for emphasis or clarity: <i>A mí me gusta el té, ¿y a ti?</i> With a name you need both <b>a</b> and the pronoun: <i>A Juan le gusta el fútbol.</i>',
               '“Me too” is <b>a mí también</b>. “Me neither” is <b>a mí tampoco</b>.']
        },
        examples: [
          { es: 'A mi hermano le gusta el fútbol.', ru: 'Моему брату нравится футбол.', en: 'My brother likes football.' },
          { es: 'No me gusta el café. — A mí tampoco.', ru: 'Я не люблю кофе. — Я тоже.', en: 'I don’t like coffee. — Me neither.' }
        ]
      },
      {
        heading: { ru: 'Похожие глаголы', en: 'Similar verbs' },
        body: {
          ru: ['Так же работают: <b>encantar</b> (очень нравиться, обожать), <b>interesar</b> (интересовать), <b>doler</b> (болеть; o → ue).',
               '<i>Me encanta</i> уже значит «очень нравится», поэтому <i>mucho</i> к нему не добавляют.'],
          en: ['These work the same way: <b>encantar</b> (to love), <b>interesar</b> (to interest), <b>doler</b> (to hurt; o → ue).',
               '<i>Me encanta</i> already means “I love it”, so don’t add <i>mucho</i>.']
        },
        examples: [
          { es: 'Me encanta la música latina.', ru: 'Я обожаю латиноамериканскую музыку.', en: 'I love Latin music.' },
          { es: '¿Te interesa el arte?', ru: 'Тебя интересует искусство?', en: 'Are you interested in art?' },
          { es: 'Me duelen los pies.', ru: 'У меня болят ноги.', en: 'My feet hurt.' }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Me ___ el chocolate.',
        options: ['gusta', 'gustan', 'gusto'], answer: 0,
        explain: { ru: 'El chocolate — одна вещь, поэтому gusta.', en: 'El chocolate is one thing, so gusta.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Me ___ los gatos.',
        options: ['gustan', 'gusta', 'gusto'], answer: 0,
        explain: { ru: 'Los gatos — много, поэтому gustan.', en: 'Los gatos is plural, so gustan.' } },
      { prompt: { ru: 'Выберите местоимение', en: 'Choose the pronoun' }, es: '¿___ gusta bailar? (a ti)',
        options: ['Te', 'Tú', 'Le'], answer: 0,
        explain: { ru: 'С gustar нужно местоимение te, а не tú.', en: 'Gustar needs the pronoun te, not tú.' } },
      { prompt: { ru: 'Выберите местоимение', en: 'Choose the pronoun' }, es: 'A mis padres ___ gusta viajar.',
        options: ['les', 'le', 'los'], answer: 0,
        explain: { ru: 'Mis padres — «им», во множественном числе: les.', en: 'Mis padres means “them”, plural: les.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'A nosotros nos ___ cocinar y leer.',
        options: ['gusta', 'gustan', 'gustamos'], answer: 0,
        explain: { ru: 'С инфинитивами — gusta, даже если их несколько.', en: 'Infinitives take gusta, even if there are several.' } },
      { prompt: { ru: 'Выберите местоимение', en: 'Choose the pronoun' }, es: 'A Marta ___ encantan las flores.',
        options: ['le', 'la', 'les'], answer: 0,
        explain: { ru: 'Marta — «ей», одна: le.', en: 'Marta means “her”, one person: le.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Me ___ los ojos.',
        options: ['duelen', 'duele', 'dolen'], answer: 0,
        explain: { ru: 'Los ojos — много; doler меняет o → ue: duelen.', en: 'Los ojos is plural; doler changes o → ue: duelen.' } },
      { prompt: { ru: 'Выберите: «мне тоже» или «мне тоже не нравится»', en: 'Choose “me too” or “me neither”' }, es: 'Me gusta el té. — A mí ___.',
        options: ['también', 'tampoco', 'sí'], answer: 0,
        explain: { ru: 'Согласие с утверждением — también.', en: 'Agreeing with a positive statement — también.' } },
      { prompt: { ru: 'Выберите: «мне тоже» или «мне тоже не нравится»', en: 'Choose “me too” or “me neither”' }, es: 'No me gusta el café. — A mí ___.',
        options: ['tampoco', 'también', 'no también'], answer: 0,
        explain: { ru: 'Согласие с отрицанием — tampoco.', en: 'Agreeing with a negative statement — tampoco.' } },
      { prompt: { ru: 'Как сказать «Я люблю классическую музыку»?', en: 'How do you say “I like classical music”?' },
        options: ['Me gusta la música clásica.', 'Yo gusto la música clásica.', 'Me gustan la música clásica.'], answer: 0,
        explain: { ru: 'Me + gusta; la música — одна вещь.', en: 'Me + gusta; la música is one thing.' } }
    ]
  }
]);
