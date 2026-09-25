// A1 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('A1', [
  {
    id: 'a1-articulos', level: 'A1',
    title: { ru: 'Род и число, артикли', en: 'Gender, number and articles' },
    hero: {
      es: 'El, la, <b>un, una</b>',
      sub: { ru: 'Род и число существительных, определённые и неопределённые артикли',
             en: 'Noun gender and number, definite and indefinite articles' }
    },
    tabs: [
      {
        id: 'gender', label: { ru: 'Род', en: 'Gender' },
        blocks: [
          { type: 'text', body: {
            ru: ['У каждого существительного есть род — <b>мужской</b> или <b>женский</b>. Среднего рода у существительных нет. Род видно по артиклю и часто — по окончанию.'],
            en: ['Every noun has a gender — <b>masculine</b> or <b>feminine</b>. Spanish nouns have no neuter. You can see the gender from the article and often from the ending.'] } },
          { type: 'rules', heading: { ru: 'Как узнать род', en: 'How to tell the gender' }, items: [
            { color: 'blue', label: { ru: 'Обычно', en: 'Usually' }, title: { ru: 'Мужской род', en: 'Masculine' }, es: '-o → el libro',
              body: { ru: 'Слова на <b>-o</b> обычно мужского рода: <i>el libro, el perro, el vaso</i>. Мужского рода и слова на <b>-aje</b>: <i>el viaje, el garaje</i>.',
                      en: 'Words ending in <b>-o</b> are usually masculine: <i>el libro, el perro, el vaso</i>. Words in <b>-aje</b> are masculine too: <i>el viaje, el garaje</i>.' } },
            { color: 'amber', label: { ru: 'Обычно', en: 'Usually' }, title: { ru: 'Женский род', en: 'Feminine' }, es: '-a → la casa',
              body: { ru: 'Слова на <b>-a</b> обычно женского рода: <i>la casa, la mesa, la playa</i>.',
                      en: 'Words ending in <b>-a</b> are usually feminine: <i>la casa, la mesa, la playa</i>.' } },
            { color: 'amber', label: { ru: 'Всегда', en: 'Always' }, title: { ru: 'Женские суффиксы', en: 'Feminine suffixes' }, es: '-ción, -sión, -dad, -tad, -tud',
              body: { ru: 'Слова на <b>-ción</b>, <b>-sión</b>, <b>-dad</b>, <b>-tad</b>, <b>-tud</b> — женского рода: <i>la canción, la televisión, la ciudad, la libertad, la salud</i>.',
                      en: 'Words ending in <b>-ción</b>, <b>-sión</b>, <b>-dad</b>, <b>-tad</b>, <b>-tud</b> are feminine: <i>la canción, la televisión, la ciudad, la libertad, la salud</i>.' } },
            { color: 'coral', label: { ru: 'Не угадать', en: 'Can’t guess' }, title: { ru: '-e и согласная', en: '-e and consonants' }, es: 'el coche · la noche',
              body: { ru: 'Если слово кончается на <b>-e</b> или согласную, род не угадать — учите его сразу с артиклем: <i>el coche</i>, <i>la noche</i>, <i>el hotel</i>, <i>la flor</i>.',
                      en: 'If a word ends in <b>-e</b> or a consonant, you can’t guess the gender, so learn it together with the article: <i>el coche</i>, <i>la noche</i>, <i>el hotel</i>, <i>la flor</i>.' } }
          ] },
          { type: 'table', heading: { ru: 'Окончание и род', en: 'Ending and gender' },
            head: [{ ru: 'Окончание', en: 'Ending' }, { ru: 'Род', en: 'Gender' }, { ru: 'Пример', en: 'Example' }],
            rows: [
              ['-o', { ru: 'мужской', en: 'masculine' }, 'el libro'],
              ['-aje', { ru: 'мужской', en: 'masculine' }, 'el viaje'],
              ['-a', { ru: 'женский', en: 'feminine' }, 'la casa'],
              ['-ción / -sión', { ru: 'женский', en: 'feminine' }, 'la canción'],
              ['-dad / -tad / -tud', { ru: 'женский', en: 'feminine' }, 'la ciudad'],
              ['-e', { ru: 'любой — учите', en: 'either — learn it' }, 'el coche / la noche'],
              [{ ru: 'согласная', en: 'consonant' }, { ru: 'любой — учите', en: 'either — learn it' }, 'el hotel / la flor']
            ] },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Люди.</b> У многих слов о людях есть пара: <i>el chico / la chica</i>, <i>el profesor / la profesora</i>. У слов на <b>-ista</b> и многих на <b>-e</b> форма одна, род показывает только артикль: <i>el / la turista</i>, <i>el / la estudiante</i>.'],
            en: ['<b>People.</b> Many words for people come in pairs: <i>el chico / la chica</i>, <i>el profesor / la profesora</i>. Words ending in <b>-ista</b> and many ending in <b>-e</b> have one form, and only the article shows the gender: <i>el / la turista</i>, <i>el / la estudiante</i>.'] } },
          { type: 'examples', heading: { ru: 'Род в речи', en: 'Gender in use' }, items: [
            { color: 'blue', es: '<b>El niño</b> juega en el parque.', ru: 'Мальчик играет в парке.', en: 'The boy is playing in the park.' },
            { color: 'amber', es: '<b>La niña</b> lee un cuento.', ru: 'Девочка читает сказку.', en: 'The girl is reading a story.' },
            { color: 'amber', es: '<b>La canción</b> es muy bonita.', ru: 'Песня очень красивая.', en: 'The song is very beautiful.' },
            { color: 'blue', es: '<b>El coche</b> de mi padre es rojo.', ru: 'Машина моего отца красная.', en: 'My father’s car is red.' },
            { color: 'amber', es: '<b>La noche</b> es muy tranquila.', ru: 'Ночь очень тихая.', en: 'The night is very quiet.' },
            { color: 'amber', es: '<b>La estudiante</b> nueva es de Italia.', ru: 'Новая студентка — из Италии.', en: 'The new student (a girl) is from Italy.' }
          ] }
        ]
      },
      {
        id: 'number', label: { ru: 'Число', en: 'Number' },
        blocks: [
          { type: 'rules', heading: { ru: 'Как образовать', en: 'How to form it' }, items: [
            { color: 'coral', title: { ru: 'После гласной', en: 'After a vowel' }, es: '+ -s',
              body: { ru: 'После гласной добавьте <b>-s</b>: <i>libro → libros</i>, <i>casa → casas</i>, <i>coche → coches</i>.',
                      en: 'After a vowel, add <b>-s</b>: <i>libro → libros</i>, <i>casa → casas</i>, <i>coche → coches</i>.' } },
            { color: 'coral', title: { ru: 'После согласной', en: 'After a consonant' }, es: '+ -es',
              body: { ru: 'После согласной — <b>-es</b>: <i>ciudad → ciudades</i>, <i>hotel → hoteles</i>, <i>flor → flores</i>.',
                      en: 'After a consonant, add <b>-es</b>: <i>ciudad → ciudades</i>, <i>hotel → hoteles</i>, <i>flor → flores</i>.' } },
            { color: 'coral', title: { ru: 'Слова на -z', en: 'Words in -z' }, es: '-z → -ces',
              body: { ru: 'Слова на <b>-z</b> меняют её на <b>c</b>: <i>lápiz → lápices</i>, <i>luz → luces</i>, <i>vez → veces</i>.',
                      en: 'Words ending in <b>-z</b> change it to <b>c</b>: <i>lápiz → lápices</i>, <i>luz → luces</i>, <i>vez → veces</i>.' } },
            { color: 'coral', title: { ru: 'Без изменений', en: 'No change' }, es: 'el lunes → los lunes',
              body: { ru: 'Слова на <b>-s</b> с ударением не на последнем слоге не меняются — число видно по артиклю: <i>el lunes → los lunes</i>, <i>la crisis → las crisis</i>.',
                      en: 'Words ending in <b>-s</b> with the stress before the last syllable do not change; the article shows the number: <i>el lunes → los lunes</i>, <i>la crisis → las crisis</i>.' } }
          ] },
          { type: 'table', heading: { ru: 'Единственное → множественное', en: 'Singular → plural' },
            head: ['singular', 'plural'],
            rows: [
              ['el libro', 'los libros'],
              ['la casa', 'las casas'],
              ['el coche', 'los coches'],
              ['la ciudad', 'las ciudades'],
              ['el hotel', 'los hoteles'],
              ['el lápiz', 'los lápices'],
              ['la canción', 'las canciones'],
              ['el lunes', 'los lunes']
            ] },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Ударение:</b> у слов на <b>-ción</b> знак ударения во множественном числе исчезает: <i>la canción → las canciones</i>, <i>la estación → las estaciones</i>.'],
            en: ['<b>Accent mark:</b> words ending in <b>-ción</b> lose the written accent in the plural: <i>la canción → las canciones</i>, <i>la estación → las estaciones</i>.'] } },
          { type: 'text', color: 'blue', body: {
            ru: ['<b>Смешанная группа — мужской род:</b> <i>los padres</i> — «отец и мать, родители», <i>los hermanos</i> — «братья и сёстры», <i>los niños</i> — «мальчики и девочки, дети».'],
            en: ['<b>A mixed group is masculine:</b> <i>los padres</i> — “father and mother, parents”, <i>los hermanos</i> — “brothers and sisters”, <i>los niños</i> — “boys and girls, children”.'] } },
          { type: 'examples', heading: { ru: 'Множественное в речи', en: 'Plurals in use' }, items: [
            { color: 'coral', es: 'Tengo tres <b>libros</b> en la mochila.', ru: 'У меня в рюкзаке три книги.', en: 'I have three books in my backpack.' },
            { color: 'coral', es: 'En mi calle hay dos <b>hoteles</b>.', ru: 'На моей улице два отеля.', en: 'There are two hotels on my street.' },
            { color: 'coral', es: 'Los niños tienen muchos <b>lápices</b>.', ru: 'У детей много карандашей.', en: 'The children have lots of pencils.' },
            { color: 'coral', es: 'Escuchamos <b>canciones</b> en español.', ru: 'Мы слушаем песни на испанском.', en: 'We listen to songs in Spanish.' },
            { color: 'coral', es: 'Trabajo <b>los lunes</b> y <b>los martes</b>.', ru: 'Я работаю по понедельникам и вторникам.', en: 'I work on Mondays and Tuesdays.' },
            { color: 'coral', es: 'Mis <b>padres</b> viven en Sevilla.', ru: 'Мои родители живут в Севилье.', en: 'My parents live in Seville.' }
          ] }
        ]
      },
      {
        id: 'articles', label: { ru: 'Артикли', en: 'Articles' },
        blocks: [
          { type: 'rules', heading: { ru: 'Два артикля', en: 'Two articles' }, items: [
            { color: 'teal', label: { ru: 'Артикль', en: 'Article' }, title: { ru: 'Определённый', en: 'Definite' }, es: 'el, la, los, las',
              body: { ru: 'Говорим о <b>конкретном, уже известном</b> предмете — «тот самый». Ещё — о чём-то в целом: <i>Me gusta el café.</i>',
                      en: 'We talk about <b>a specific thing we already know</b> — “the”. Also about something in general: <i>Me gusta el café.</i>' } },
            { color: 'purple', label: { ru: 'Артикль', en: 'Article' }, title: { ru: 'Неопределённый', en: 'Indefinite' }, es: 'un, una, unos, unas',
              body: { ru: '«Какой-то, один из многих» — часто когда предмет упоминается <b>впервые</b>. <i>Unos, unas</i> — «несколько, какие-то».',
                      en: '“A”, “one of many” — often when something is mentioned <b>for the first time</b>. <i>Unos, unas</i> mean “some”.' } }
          ] },
          { type: 'table', heading: { ru: 'Все артикли', en: 'All the articles' },
            head: ['', 'masculino', 'femenino'],
            rows: [
              ['definido · singular', 'el', 'la'],
              ['definido · plural', 'los', 'las'],
              ['indefinido · singular', 'un', 'una'],
              ['indefinido · plural', 'unos', 'unas']
            ] },
          { type: 'conj', heading: { ru: 'Один предмет — два артикля', en: 'One noun, two articles' }, verbs: [
            { inf: 'libro', tr: { ru: 'м. р. · книга', en: 'masc. · book' }, variants: [
              { label: { ru: 'определённый', en: 'definite' }, color: 'teal', rows: [['singular', '<b>el</b> libro'], ['plural', '<b>los</b> libros']] },
              { label: { ru: 'неопределённый', en: 'indefinite' }, color: 'purple', rows: [['singular', '<b>un</b> libro'], ['plural', '<b>unos</b> libros']] }
            ] },
            { inf: 'casa', tr: { ru: 'ж. р. · дом', en: 'fem. · house' }, variants: [
              { label: { ru: 'определённый', en: 'definite' }, color: 'teal', rows: [['singular', '<b>la</b> casa'], ['plural', '<b>las</b> casas']] },
              { label: { ru: 'неопределённый', en: 'indefinite' }, color: 'purple', rows: [['singular', '<b>una</b> casa'], ['plural', '<b>unas</b> casas']] }
            ] }
          ] },
          { type: 'text', body: {
            ru: ['<b>Согласование.</b> Прилагательное повторяет род и число существительного: <i>el gato negro</i>, <i>la casa blanca</i>, <i>las casas blancas</i>. Прилагательные на <b>-e</b> и согласную меняют только число: <i>un coche grande</i>, <i>una casa grande</i>, <i>unas casas grandes</i>.'],
            en: ['<b>Agreement.</b> An adjective matches the noun in gender and number: <i>el gato negro</i>, <i>la casa blanca</i>, <i>las casas blancas</i>. Adjectives ending in <b>-e</b> or a consonant change only for number: <i>un coche grande</i>, <i>una casa grande</i>, <i>unas casas grandes</i>.'] } },
          { type: 'text', color: 'teal', body: {
            ru: ['<b>Два слияния:</b> <b>a + el = al</b>, <b>de + el = del</b>. <i>Voy al cine. Es el coche del profesor.</i> С <i>la, los, las</i> слияния нет: <i>a la playa</i>, <i>de los niños</i>.'],
            en: ['<b>Two contractions:</b> <b>a + el = al</b>, <b>de + el = del</b>. <i>Voy al cine. Es el coche del profesor.</i> There is no contraction with <i>la, los, las</i>: <i>a la playa</i>, <i>de los niños</i>.'] } },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Без артикля</b> называют профессию после <i>ser</i>: <i>Soy médico.</i> <b>С артиклем</b> — дни недели («в понедельник»): <i>El lunes voy a Madrid.</i> — и человека по фамилии: <i>la señora García</i>.'],
            en: ['<b>No article</b> with a job after <i>ser</i>: <i>Soy médico.</i> <b>With the article</b>: days of the week (“on Monday”): <i>El lunes voy a Madrid.</i> — and a person with a title: <i>la señora García</i>.'] } }
        ]
      },
      {
        id: 'exceptions', label: { ru: 'Исключения', en: 'Exceptions' },
        blocks: [
          { type: 'text', body: {
            ru: ['Окончание подсказывает род, но не всегда. <i>El día</i>, <i>el mapa</i>, <i>el problema</i> — мужского рода, хотя кончаются на <b>-a</b>; <i>la mano</i>, <i>la foto</i> — женского, хотя кончаются на <b>-o</b>. Их проще всего запомнить списком.'],
            en: ['The ending hints at the gender, but not always. <i>El día</i>, <i>el mapa</i>, <i>el problema</i> are masculine even though they end in <b>-a</b>; <i>la mano</i>, <i>la foto</i> are feminine even though they end in <b>-o</b>. It is easiest to learn them as a list.'] } },
          { type: 'rules', heading: { ru: 'Два частых исключения', en: 'Two common exceptions' }, items: [
            { color: 'blue', title: { ru: '-ma — мужской род', en: '-ma is masculine' }, es: 'el problema, el tema',
              body: { ru: 'Слова греческого происхождения на <b>-ma</b>: <i>el problema, el tema, el idioma, el programa, el sistema, el clima</i>.',
                      en: 'Words of Greek origin ending in <b>-ma</b>: <i>el problema, el tema, el idioma, el programa, el sistema, el clima</i>.' } },
            { color: 'amber', title: { ru: 'Сокращения — женский род', en: 'Short forms are feminine' }, es: 'la foto, la moto',
              body: { ru: 'Сокращённые слова сохраняют род полного: <i>la foto</i> (la fotografía), <i>la moto</i> (la motocicleta).',
                      en: 'Shortened words keep the gender of the full word: <i>la foto</i> (la fotografía), <i>la moto</i> (la motocicleta).' } }
          ] },
          { type: 'table', heading: { ru: 'Частые исключения', en: 'Common exceptions' },
            head: [{ ru: 'Слово', en: 'Word' }, { ru: 'Род', en: 'Gender' }, { ru: 'Перевод', en: 'Meaning' }],
            rows: [
              ['el día', { ru: 'мужской', en: 'masculine' }, { ru: 'день', en: 'day' }],
              ['el mapa', { ru: 'мужской', en: 'masculine' }, { ru: 'карта', en: 'map' }],
              ['el problema', { ru: 'мужской', en: 'masculine' }, { ru: 'проблема', en: 'problem' }],
              ['el idioma', { ru: 'мужской', en: 'masculine' }, { ru: 'язык', en: 'language' }],
              ['el sofá', { ru: 'мужской', en: 'masculine' }, { ru: 'диван', en: 'sofa' }],
              ['la mano', { ru: 'женский', en: 'feminine' }, { ru: 'рука (кисть)', en: 'hand' }],
              ['la foto', { ru: 'женский', en: 'feminine' }, { ru: 'фото', en: 'photo' }],
              ['la moto', { ru: 'женский', en: 'feminine' }, { ru: 'мотоцикл', en: 'motorbike' }],
              ['la radio', { ru: 'женский', en: 'feminine' }, { ru: 'радио', en: 'radio' }]
            ] },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>El agua.</b> Женские слова, которые начинаются с ударного <b>a-</b>, в единственном числе берут артикль <b>el</b> — так легче произносить. Род остаётся женским: <i>el agua fría</i>, но <i>las aguas</i>; <i>el aula</i>, но <i>las aulas</i>.'],
            en: ['<b>El agua.</b> Feminine words that start with a stressed <b>a-</b> take the article <b>el</b> in the singular — it is easier to say. The gender stays feminine: <i>el agua fría</i>, but <i>las aguas</i>; <i>el aula</i>, but <i>las aulas</i>.'] } },
          { type: 'examples', heading: { ru: 'Исключения в речи', en: 'Exceptions in use' }, items: [
            { color: 'blue', es: '¿Qué tal <b>el día</b>?', ru: 'Как прошёл день?', en: 'How was your day?' },
            { color: 'blue', es: 'Tenemos <b>un problema</b> con el coche.', ru: 'У нас проблема с машиной.', en: 'We have a problem with the car.' },
            { color: 'blue', es: 'El español es <b>un idioma</b> muy útil.', ru: 'Испанский — очень полезный язык.', en: 'Spanish is a very useful language.' },
            { color: 'amber', es: 'Me lavo <b>las manos</b> antes de comer.', ru: 'Я мою руки перед едой.', en: 'I wash my hands before eating.' },
            { color: 'amber', es: 'Mira <b>la foto</b> de mis vacaciones.', ru: 'Посмотри фото с моего отпуска.', en: 'Look at the photo from my holiday.' },
            { color: 'coral', es: '<b>El agua</b> del mar está fría.', ru: 'Вода в море холодная.', en: 'The sea water is cold.' }
          ] }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Примеры попарно', en: 'Examples in pairs' }, items: [
            { badge: 'el', color: 'teal', es: '<b>El</b> tren sale a las nueve.', ru: 'Поезд отправляется в девять. (тот самый)', en: 'The train leaves at nine. (the one we mean)' },
            { badge: 'un', color: 'purple', es: 'Hay <b>un</b> tren a las nueve.', ru: 'В девять есть поезд. (какой-то)', en: 'There’s a train at nine. (one of many)' },
            { badge: 'la', color: 'teal', es: 'Busco <b>la</b> estación de autobuses.', ru: 'Я ищу автовокзал.', en: 'I’m looking for the bus station.' },
            { badge: 'una', color: 'purple', es: '¿Hay <b>una</b> farmacia por aquí?', ru: 'Здесь поблизости есть аптека?', en: 'Is there a pharmacy around here?' },
            { color: 'teal', es: '<b>El</b> libro está en <b>la</b> mesa.', ru: 'Книга лежит на столе.', en: 'The book is on the table.' },
            { color: 'purple', es: 'Tengo <b>un</b> perro y dos gatos.', ru: 'У меня есть собака и две кошки.', en: 'I have a dog and two cats.' },
            { color: 'teal', es: '<b>Las</b> ciudades de España son muy bonitas.', ru: 'Города Испании очень красивые.', en: 'The cities of Spain are very beautiful.' },
            { color: 'teal', es: 'Es el coche <b>del</b> profesor.', ru: 'Это машина преподавателя.', en: 'It’s the teacher’s car.' }
          ] },
          { type: 'examples', heading: { ru: 'Дома и в городе', en: 'At home and in town' }, items: [
            { color: 'teal', es: '<b>Las</b> llaves están en <b>el</b> bolso.', ru: 'Ключи в сумке.', en: 'The keys are in the bag.' },
            { color: 'teal', es: '<b>Los</b> niños están en <b>el</b> colegio.', ru: 'Дети в школе.', en: 'The children are at school.' },
            { color: 'teal', es: 'Vamos <b>al</b> mercado <b>del</b> barrio.', ru: 'Мы идём на рынок нашего района.', en: 'We’re going to the local market.' },
            { color: 'purple', es: 'Mi hermana tiene <b>una</b> moto nueva.', ru: 'У моей сестры новый мотоцикл.', en: 'My sister has a new motorbike.' },
            { color: 'purple', es: 'Ellos compran <b>unas</b> flores para su madre.', ru: 'Они покупают цветы для мамы.', en: 'They are buying some flowers for their mother.' }
          ] },
          { type: 'examples', heading: { ru: 'На работе и в поездке', en: 'At work and travelling' }, items: [
            { color: 'purple', es: 'En la oficina hay <b>unos</b> ordenadores viejos.', ru: 'В офисе есть несколько старых компьютеров.', en: 'There are some old computers in the office.' },
            { color: 'purple', es: '¿Tenéis <b>una</b> habitación libre?', ru: 'У вас есть свободный номер?', en: 'Do you have a room available?' },
            { color: 'teal', es: '<b>La</b> señora García es nuestra jefa.', ru: 'Сеньора Гарсия — наша начальница.', en: 'Mrs García is our boss.' },
            { color: 'teal', es: '<b>El</b> lunes voy <b>al</b> aeropuerto.', ru: 'В понедельник я еду в аэропорт.', en: 'On Monday I’m going to the airport.' }
          ] }
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
    hero: {
      es: 'Ser <b>y</b> Estar',
      sub: { ru: 'Два глагола «быть»: ser — кто или что это, estar — где и в каком состоянии',
             en: 'Two verbs for “to be”: ser for who or what, estar for where and how' }
    },
    tabs: [
      {
        id: 'ser', label: { ru: 'Ser', en: 'Ser' },
        blocks: [
          { type: 'text', body: {
            ru: ['В испанском два глагола со значением «быть»: <b>ser</b> и <b>estar</b>. Оба неправильные — их формы нужно выучить.'],
            en: ['Spanish has two verbs meaning “to be”: <b>ser</b> and <b>estar</b>. Both are irregular, so learn their forms by heart.'] } },
          { type: 'table', heading: { ru: 'Спряжение', en: 'Conjugation' },
            head: ['', 'ser', 'estar'],
            rows: [
              ['yo', 'soy', 'estoy'],
              ['tú', 'eres', 'estás'],
              ['él / ella', 'es', 'está'],
              ['nosotros', 'somos', 'estamos'],
              ['vosotros', 'sois', 'estáis'],
              ['ellos', 'son', 'están']
            ] },
          { type: 'text', color: 'blue', body: {
            ru: ['<b>Ser — кто или что это.</b> Ser описывает то, что определяет человека или предмет: имя, профессию, национальность, характер, внешность. С <b>ser de</b> говорят, откуда человек: <i>Soy de Rusia.</i> Через ser называют время и дату: <i>Son las tres. Hoy es lunes.</i>'],
            en: ['<b>Ser — who or what it is.</b> Ser describes what defines a person or thing: name, job, nationality, character, looks. <b>Ser de</b> tells where someone is from: <i>Soy de Rusia.</i> Ser is also used for time and dates: <i>Son las tres. Hoy es lunes.</i>'] } },
          { type: 'triggers', heading: { ru: 'Когда ser: DOCTOR', en: 'When to use ser: DOCTOR' }, items: [
            { num: 'D', color: 'blue', title: { ru: 'Описание', en: 'Description' }, sub: { ru: 'внешность, материал', en: 'looks, material' },
              phrases: ['es alto', 'es grande', 'es de madera'],
              ex: { es: 'Mi ciudad <b>es</b> muy antigua.', ru: 'Мой город очень старый.', en: 'My town is very old.' } },
            { num: 'O', color: 'blue', title: { ru: 'Профессия', en: 'Occupation' }, sub: { ru: 'без артикля', en: 'no article' },
              phrases: ['soy profesor', 'es médica'],
              ex: { es: 'Mi padre <b>es</b> taxista.', ru: 'Мой отец — таксист.', en: 'My father is a taxi driver.' } },
            { num: 'C', color: 'blue', title: { ru: 'Характер', en: 'Character' }, sub: { ru: 'какой человек по натуре', en: 'what someone is like' },
              phrases: ['es simpático', 'son amables'],
              ex: { es: 'Mis vecinos <b>son</b> muy amables.', ru: 'Мои соседи очень любезные.', en: 'My neighbours are very kind.' } },
            { num: 'T', color: 'blue', title: { ru: 'Время и дата', en: 'Time and date' }, sub: { ru: 'час, день, дата', en: 'hour, day, date' },
              phrases: ['son las tres', 'es la una', 'hoy es lunes'],
              ex: { es: 'Hoy <b>es</b> lunes.', ru: 'Сегодня понедельник.', en: 'Today is Monday.' } },
            { num: 'O', color: 'blue', title: { ru: 'Происхождение', en: 'Origin' }, sub: { ru: 'ser de, национальность', en: 'ser de, nationality' },
              phrases: ['soy de', 'es español'],
              ex: { es: '¿De dónde <b>eres</b>?', ru: 'Откуда ты?', en: 'Where are you from?' } },
            { num: 'R', color: 'blue', title: { ru: 'Отношения', en: 'Relationship' }, sub: { ru: 'кем приходится', en: 'how people are related' },
              phrases: ['es mi hermano', 'somos amigos'],
              ex: { es: 'Carlos <b>es</b> mi novio.', ru: 'Карлос — мой парень.', en: 'Carlos is my boyfriend.' } }
          ] },
          { type: 'examples', heading: { ru: 'Примеры с ser', en: 'Examples with ser' }, items: [
            { color: 'blue', es: '<b>Soy</b> Ana y <b>soy</b> de Colombia.', ru: 'Я Ана, я из Колумбии.', en: 'I’m Ana and I’m from Colombia.' },
            { color: 'blue', es: 'Mi hermana <b>es</b> médica.', ru: 'Моя сестра — врач.', en: 'My sister is a doctor.' },
            { color: 'blue', es: '<b>Son</b> las cinco.', ru: 'Сейчас пять часов.', en: 'It’s five o’clock.' },
            { color: 'blue', es: 'Hoy <b>es</b> mi cumpleaños.', ru: 'Сегодня мой день рождения.', en: 'Today is my birthday.' },
            { color: 'blue', es: 'Mi piso <b>es</b> pequeño, pero muy bonito.', ru: 'Моя квартира маленькая, но очень красивая.', en: 'My flat is small but very nice.' },
            { color: 'blue', es: 'Juan y yo <b>somos</b> compañeros de trabajo.', ru: 'Мы с Хуаном коллеги.', en: 'Juan and I are colleagues.' }
          ] }
        ]
      },
      {
        id: 'estar', label: { ru: 'Estar', en: 'Estar' },
        blocks: [
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Estar — где и как.</b> Estar говорит, где находится человек или предмет: <i>La farmacia está cerca.</i>',
                 'А ещё — в каком он состоянии сейчас: самочувствие, настроение. <i>Estoy cansado. ¿Cómo estás? — Estoy bien.</i>'],
            en: ['<b>Estar — where and how.</b> Estar tells where a person or thing is: <i>La farmacia está cerca.</i>',
                 'It also tells how someone or something is right now: health, mood. <i>Estoy cansado. ¿Cómo estás? — Estoy bien.</i>'] } },
          { type: 'triggers', heading: { ru: 'Когда estar: PLACE', en: 'When to use estar: PLACE' }, items: [
            { num: 'P', color: 'amber', title: { ru: 'Поза', en: 'Position' }, sub: { ru: 'сидит, стоит, лежит', en: 'sitting, standing, lying' },
              phrases: ['está sentado', 'estoy de pie'],
              ex: { es: 'El abuelo <b>está</b> sentado en el sofá.', ru: 'Дедушка сидит на диване.', en: 'Grandad is sitting on the sofa.' } },
            { num: 'L', color: 'amber', title: { ru: 'Место', en: 'Location' }, sub: { ru: 'даже постоянное', en: 'even a permanent one' },
              phrases: ['está en', 'está cerca', 'está lejos'],
              ex: { es: 'El baño <b>está</b> al fondo.', ru: 'Туалет в конце коридора.', en: 'The toilet is at the end of the corridor.' } },
            { num: 'A', color: 'amber', title: { ru: 'Действие сейчас', en: 'Action now' }, sub: { ru: 'estar + герундий', en: 'estar + gerund' },
              phrases: ['estoy trabajando', 'está comiendo'],
              ex: { es: '<b>Estamos</b> comiendo, te llamo luego.', ru: 'Мы обедаем, я тебе потом перезвоню.', en: 'We’re eating, I’ll call you later.' } },
            { num: 'C', color: 'amber', title: { ru: 'Состояние', en: 'Condition' }, sub: { ru: 'здоровье, вещи', en: 'health, things' },
              phrases: ['está enfermo', 'está cerrado', 'está roto'],
              ex: { es: 'El banco <b>está</b> cerrado.', ru: 'Банк закрыт.', en: 'The bank is closed.' } },
            { num: 'E', color: 'amber', title: { ru: 'Эмоции', en: 'Emotion' }, sub: { ru: 'настроение сейчас', en: 'mood right now' },
              phrases: ['está contento', 'estoy nervioso'],
              ex: { es: 'Ana <b>está</b> muy nerviosa hoy.', ru: 'Ана сегодня очень нервничает.', en: 'Ana is very nervous today.' } }
          ] },
          { type: 'markers', heading: { ru: 'Ответы на «¿Cómo estás?»', en: 'Answers to “¿Cómo estás?”' }, groups: [
            { color: 'teal', title: { ru: 'Хорошо', en: 'Good' }, tags: ['estoy bien', 'muy bien', 'genial', 'contento / contenta'] },
            { color: 'purple', title: { ru: 'Так себе и плохо', en: 'So-so and bad' }, tags: ['regular', 'estoy mal', 'cansado / cansada', 'enfermo / enferma'] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры с estar', en: 'Examples with estar' }, items: [
            { color: 'amber', es: 'La farmacia <b>está</b> cerca.', ru: 'Аптека рядом.', en: 'The pharmacy is nearby.' },
            { color: 'amber', es: 'Hoy <b>estoy</b> muy cansado.', ru: 'Сегодня я очень устал.', en: 'I’m very tired today.' },
            { color: 'amber', es: 'Madrid <b>está</b> en el centro de España.', ru: 'Мадрид находится в центре Испании.', en: 'Madrid is in the centre of Spain.' },
            { color: 'amber', es: '¿Cómo <b>estás</b>? — <b>Estoy</b> bien, gracias.', ru: 'Как дела? — Хорошо, спасибо.', en: 'How are you? — I’m fine, thanks.' },
            { color: 'amber', es: 'Las ventanas <b>están</b> abiertas.', ru: 'Окна открыты.', en: 'The windows are open.' },
            { color: 'amber', es: 'Mis amigos <b>están</b> tristes porque llueve.', ru: 'Мои друзья грустят, потому что идёт дождь.', en: 'My friends are sad because it’s raining.' }
          ] }
        ]
      },
      {
        id: 'compare', label: { ru: 'Сравнение', en: 'Comparison' },
        blocks: [
          { type: 'table', heading: { ru: 'Ser и estar рядом', en: 'Ser and estar side by side' },
            head: [{ ru: 'Критерий', en: 'Criterion' }, 'ser', 'estar'],
            rows: [
              [{ ru: 'Вопрос', en: 'Question' }, '¿Qué es? ¿Cómo es?', '¿Dónde está? ¿Cómo está?'],
              [{ ru: 'Смысл', en: 'Meaning' }, { ru: 'суть, признак', en: 'identity, trait' }, { ru: 'место, состояние', en: 'place, state' }],
              [{ ru: 'Место', en: 'Location' }, { ru: 'где проходит событие', en: 'where an event takes place' }, { ru: 'где человек или вещь', en: 'where a person or thing is' }],
              [{ ru: 'Время, дата', en: 'Time, date' }, 'Son las tres.', '—'],
              [{ ru: 'Пример', en: 'Example' }, 'Luis es alto.', 'Luis está cansado.']
            ] },
          { type: 'conj', heading: { ru: 'Одно подлежащее — два глагола', en: 'One subject, two verbs' }, verbs: [
            { inf: 'María', tr: { ru: 'кто она · где она и как', en: 'who she is · where and how she is' }, variants: [
              { label: 'ser', color: 'blue', rows: [['¿quién?', 'María <b>es</b> mi prima.'], ['¿de dónde?', '<b>Es</b> de Chile.'], ['¿cómo es?', '<b>Es</b> muy alegre.'], ['trabajo', '<b>Es</b> enfermera.']] },
              { label: 'estar', color: 'amber', rows: [['¿dónde?', 'María <b>está</b> en casa.'], ['¿cómo está?', '<b>Está</b> un poco cansada.'], ['ahora', '<b>Está</b> trabajando.'], ['hoy', '<b>Está</b> contenta.']] }
            ] },
            { inf: 'el café', tr: { ru: 'какой он · какой он сейчас', en: 'what it is like · how it is now' }, variants: [
              { label: 'ser', color: 'blue', rows: [['¿de dónde?', 'El café <b>es</b> de Colombia.'], ['¿cómo es?', '<b>Es</b> muy fuerte.']] },
              { label: 'estar', color: 'amber', rows: [['ahora', 'El café <b>está</b> frío.'], ['¿listo?', 'El café <b>está</b> listo.']] }
            ] },
            { inf: 'Madrid', tr: { ru: 'что это · где и какой сегодня', en: 'what it is · where and how it is today' }, variants: [
              { label: 'ser', color: 'blue', rows: [['¿qué es?', 'Madrid <b>es</b> la capital.'], ['¿cómo es?', '<b>Es</b> grande y bonita.']] },
              { label: 'estar', color: 'amber', rows: [['¿dónde?', 'Madrid <b>está</b> en el centro.'], ['hoy', '<b>Está</b> llena de turistas.']] }
            ] }
          ] },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Место — всегда estar</b>, даже если оно постоянное: <i>Madrid está en el centro de España.</i> <b>Исключение:</b> где <b>проходит событие</b> (праздник, урок, концерт) — ser: <i>La fiesta es en mi casa.</i>'],
            en: ['<b>Location always takes estar</b>, even a permanent one: <i>Madrid está en el centro de España.</i> <b>Exception:</b> where <b>an event takes place</b> (a party, a class, a concert) takes ser: <i>La fiesta es en mi casa.</i>'] } },
          { type: 'examples', heading: { ru: 'Примеры попарно', en: 'Examples in pairs' }, items: [
            { badge: 'S', color: 'blue', es: 'Mi hermano <b>es</b> nervioso.', ru: 'Мой брат нервный. (такой характер)', en: 'My brother is a nervous person. (his character)' },
            { badge: 'E', color: 'amber', es: 'Mi hermano <b>está</b> nervioso hoy.', ru: 'Мой брат сегодня нервничает.', en: 'My brother is nervous today.' },
            { badge: 'S', color: 'blue', es: 'La clase <b>es</b> en el aula cinco.', ru: 'Занятие проходит в аудитории пять.', en: 'The class is in room five.' },
            { badge: 'E', color: 'amber', es: 'El profesor <b>está</b> en el aula cinco.', ru: 'Преподаватель в аудитории пять.', en: 'The teacher is in room five.' },
            { badge: 'S', color: 'blue', es: 'Mi abuela <b>es</b> muy activa.', ru: 'Моя бабушка очень активная.', en: 'My grandmother is very active.' },
            { badge: 'E', color: 'amber', es: 'Mi abuela <b>está</b> enferma.', ru: 'Моя бабушка болеет.', en: 'My grandmother is ill.' }
          ] },
          { type: 'tip', title: { ru: 'Как выбрать', en: 'How to choose' }, body: {
            ru: ['Спросите себя: <b>что это, какое оно по сути?</b> → <i>ser</i> (DOCTOR). <b>Где оно и как себя чувствует сейчас?</b> → <i>estar</i> (PLACE).',
                 'Английская рифма в помощь: <i>«How you feel and where you are — that is when you use estar»</i>.'],
            en: ['Ask yourself: <b>what is it, what is it like by nature?</b> → <i>ser</i> (DOCTOR). <b>Where is it and how is it now?</b> → <i>estar</i> (PLACE).',
                 'A rhyme to remember: <i>“How you feel and where you are — that is when you use estar”</i>.'] } }
        ]
      },
      {
        id: 'adjectives', label: { ru: 'Перевёртыши', en: 'Adjectives' },
        blocks: [
          { type: 'text', body: {
            ru: ['Некоторые прилагательные меняют смысл: <i>Luis es aburrido</i> — Луис скучный человек; <i>Luis está aburrido</i> — Луису сейчас скучно.',
                 '<i>Es listo</i> — он умный; <i>está listo</i> — он готов.'],
            en: ['Some adjectives change their meaning: <i>Luis es aburrido</i> — Luis is a boring person; <i>Luis está aburrido</i> — Luis is bored right now.',
                 '<i>Es listo</i> — he is clever; <i>está listo</i> — he is ready.'] } },
          { type: 'table', heading: { ru: 'Одно слово — разный смысл', en: 'Same word, different meaning' },
            head: ['', 'ser', 'estar'],
            rows: [
              ['aburrido', { ru: 'скучный', en: 'boring' }, { ru: 'скучающий', en: 'bored' }],
              ['listo', { ru: 'умный', en: 'clever' }, { ru: 'готов', en: 'ready' }],
              ['malo', { ru: 'плохой, вредный', en: 'bad' }, { ru: 'больной', en: 'ill' }],
              ['bueno', { ru: 'хороший', en: 'good' }, { ru: 'вкусный (о еде)', en: 'tasty (food)' }],
              ['rico', { ru: 'богатый', en: 'rich' }, { ru: 'вкусный', en: 'delicious' }],
              ['abierto', { ru: 'открытый (о человеке)', en: 'open-minded' }, { ru: 'открыт', en: 'open' }],
              ['despierto', { ru: 'сообразительный', en: 'sharp, bright' }, { ru: 'не спит', en: 'awake' }],
              ['verde', { ru: 'зелёный', en: 'green' }, { ru: 'незрелый', en: 'unripe' }]
            ] },
          { type: 'conj', heading: { ru: 'Переключите глагол', en: 'Switch the verb' }, verbs: [
            { inf: 'aburrido', tr: { ru: 'скучный · скучающий', en: 'boring · bored' }, variants: [
              { label: 'ser', color: 'blue', rows: [['yo', '<b>soy</b> aburrido'], ['tú', '<b>eres</b> aburrido'], ['él / ella', '<b>es</b> aburrida'], ['nosotros', '<b>somos</b> aburridos'], ['vosotros', '<b>sois</b> aburridos'], ['ellos', '<b>son</b> aburridos']] },
              { label: 'estar', color: 'amber', rows: [['yo', '<b>estoy</b> aburrido'], ['tú', '<b>estás</b> aburrido'], ['él / ella', '<b>está</b> aburrida'], ['nosotros', '<b>estamos</b> aburridos'], ['vosotros', '<b>estáis</b> aburridos'], ['ellos', '<b>están</b> aburridos']] }
            ] },
            { inf: 'listo', tr: { ru: 'умный · готовый', en: 'clever · ready' }, variants: [
              { label: 'ser', color: 'blue', rows: [['yo', '<b>soy</b> listo'], ['tú', '<b>eres</b> listo'], ['él / ella', '<b>es</b> lista'], ['nosotros', '<b>somos</b> listos'], ['vosotros', '<b>sois</b> listos'], ['ellos', '<b>son</b> listos']] },
              { label: 'estar', color: 'amber', rows: [['yo', '<b>estoy</b> listo'], ['tú', '<b>estás</b> listo'], ['él / ella', '<b>está</b> lista'], ['nosotros', '<b>estamos</b> listos'], ['vosotros', '<b>estáis</b> listos'], ['ellos', '<b>están</b> listos']] }
            ] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры попарно', en: 'Examples in pairs' }, items: [
            { badge: 'S', color: 'blue', es: 'Esta película <b>es</b> aburrida.', ru: 'Этот фильм скучный.', en: 'This film is boring.' },
            { badge: 'E', color: 'amber', es: 'Los niños <b>están</b> aburridos.', ru: 'Детям скучно.', en: 'The children are bored.' },
            { badge: 'S', color: 'blue', es: 'Tu hija <b>es</b> muy lista.', ru: 'Твоя дочь очень умная.', en: 'Your daughter is very clever.' },
            { badge: 'E', color: 'amber', es: '¿<b>Estás</b> listo? Nos vamos.', ru: 'Ты готов? Мы уходим.', en: 'Are you ready? We’re leaving.' },
            { badge: 'S', color: 'blue', es: 'Fumar <b>es</b> malo.', ru: 'Курить вредно.', en: 'Smoking is bad for you.' },
            { badge: 'E', color: 'amber', es: 'Hoy <b>estoy</b> malo y no voy a trabajar.', ru: 'Сегодня я болею и не пойду на работу.', en: 'I’m ill today, so I’m not going to work.' },
            { badge: 'S', color: 'blue', es: 'La familia de Pablo <b>es</b> rica.', ru: 'Семья Пабло богатая.', en: 'Pablo’s family is rich.' },
            { badge: 'E', color: 'amber', es: '¡La paella <b>está</b> muy rica!', ru: 'Паэлья очень вкусная!', en: 'The paella is delicious!' }
          ] }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Знакомство и работа', en: 'Meeting people and work' }, items: [
            { color: 'blue', es: '<b>Somos</b> de Argentina, pero vivimos en Madrid.', ru: 'Мы из Аргентины, но живём в Мадриде.', en: 'We’re from Argentina, but we live in Madrid.' },
            { color: 'blue', es: '¿<b>Eres</b> estudiante? — No, <b>soy</b> camarero.', ru: 'Ты студент? — Нет, я официант.', en: 'Are you a student? — No, I’m a waiter.' },
            { color: 'blue', es: 'Vosotros <b>sois</b> muy simpáticos.', ru: 'Вы очень милые.', en: 'You’re all very nice.' },
            { color: 'amber', es: 'Ella <b>está</b> muy contenta con su nuevo trabajo.', ru: 'Она очень довольна новой работой.', en: 'She’s very happy with her new job.' },
            { color: 'blue', es: '¿Qué hora <b>es</b>? — <b>Es</b> la una.', ru: 'Который час? — Час.', en: 'What time is it? — It’s one o’clock.' }
          ] },
          { type: 'examples', heading: { ru: 'В городе и в поездке', en: 'In town and travelling' }, items: [
            { color: 'amber', es: '¿Dónde <b>estáis</b>? — <b>Estamos</b> en la playa.', ru: 'Где вы? — Мы на пляже.', en: 'Where are you? — We’re at the beach.' },
            { color: 'amber', es: 'La tienda <b>está</b> cerrada los domingos.', ru: 'Магазин по воскресеньям закрыт.', en: 'The shop is closed on Sundays.' },
            { color: 'amber', es: 'Mis padres <b>están</b> de vacaciones en Italia.', ru: 'Мои родители в отпуске в Италии.', en: 'My parents are on holiday in Italy.' },
            { color: 'blue', es: 'El hotel <b>es</b> caro, pero <b>está</b> muy cerca del centro.', ru: 'Отель дорогой, но находится совсем рядом с центром.', en: 'The hotel is expensive, but it’s very close to the centre.' },
            { color: 'blue', es: 'Hoy <b>es</b> martes y <b>estoy</b> en la oficina.', ru: 'Сегодня вторник, и я в офисе.', en: 'Today is Tuesday and I’m at the office.' }
          ] }
        ]
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
    hero: {
      es: 'Presente: <b>-ar, -er, -ir</b>',
      sub: { ru: 'Правильные глаголы в настоящем времени: hablar, comer, vivir',
             en: 'Regular verbs in the present tense: hablar, comer, vivir' }
    },
    tabs: [
      {
        id: 'endings', label: { ru: 'Окончания', en: 'Endings' },
        blocks: [
          { type: 'text', body: {
            ru: ['Испанские глаголы делятся на три группы по окончанию: <b>-ar</b>, <b>-er</b>, <b>-ir</b>.',
                 'Уберите окончание — останется основа: <i>habl-ar</i> → <b>habl-</b>. К основе добавьте окончание нужного лица.'],
            en: ['Spanish verbs fall into three groups by their ending: <b>-ar</b>, <b>-er</b>, <b>-ir</b>.',
                 'Drop the ending to get the stem: <i>habl-ar</i> → <b>habl-</b>. Then add the ending for the person.'] } },
          { type: 'conj', heading: { ru: 'Окончания настоящего времени', en: 'Present tense endings' }, verbs: [
            { inf: 'terminaciones', tr: { ru: 'окончания', en: 'endings' }, variants: [
              { label: '-ar', color: 'blue', rows: [['yo', '-<b>o</b>'], ['tú', '-<b>as</b>'], ['él / ella', '-<b>a</b>'], ['nosotros', '-<b>amos</b>'], ['vosotros', '-<b>áis</b>'], ['ellos', '-<b>an</b>']] },
              { label: '-er', color: 'amber', rows: [['yo', '-<b>o</b>'], ['tú', '-<b>es</b>'], ['él / ella', '-<b>e</b>'], ['nosotros', '-<b>emos</b>'], ['vosotros', '-<b>éis</b>'], ['ellos', '-<b>en</b>']] },
              { label: '-ir', color: 'teal', rows: [['yo', '-<b>o</b>'], ['tú', '-<b>es</b>'], ['él / ella', '-<b>e</b>'], ['nosotros', '-<b>imos</b>'], ['vosotros', '-<b>ís</b>'], ['ellos', '-<b>en</b>']] }
            ] }
          ] },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>-er и -ir почти одинаковы.</b> У глаголов на <b>-er</b> и <b>-ir</b> окончания совпадают везде, кроме «мы» и «вы»: <i>comemos — vivimos</i>, <i>coméis — vivís</i>.',
                 'Частая ошибка — ставить окончание <b>-a</b> глаголам на -er: правильно <i>ella come</i>, а не <i>ella coma</i>.'],
            en: ['<b>-er and -ir are almost the same.</b> Verbs in <b>-er</b> and <b>-ir</b> share all endings except “we” and “you all”: <i>comemos — vivimos</i>, <i>coméis — vivís</i>.',
                 'A common mistake is giving -er verbs the <b>-a</b> ending: it is <i>ella come</i>, not <i>ella coma</i>.'] } },
          { type: 'text', body: {
            ru: ['<b>Местоимение часто опускают:</b> окончание и так показывает, кто действует. <i>Hablo español</i> — «Я говорю по-испански».'],
            en: ['<b>The pronoun is often left out,</b> because the ending already shows who acts. <i>Hablo español</i> — “I speak Spanish”.'] } },
          { type: 'examples', heading: { ru: 'Три группы в речи', en: 'The three groups in use' }, items: [
            { color: 'blue', es: '<b>Hablo</b> español e inglés.', ru: 'Я говорю по-испански и по-английски.', en: 'I speak Spanish and English.' },
            { color: 'amber', es: '<b>Comemos</b> a las dos.', ru: 'Мы обедаем в два часа.', en: 'We have lunch at two.' },
            { color: 'teal', es: 'Mis amigos <b>viven</b> en Valencia.', ru: 'Мои друзья живут в Валенсии.', en: 'My friends live in Valencia.' },
            { color: 'amber', es: '¿<b>Lees</b> mucho?', ru: 'Ты много читаешь?', en: 'Do you read a lot?' },
            { color: 'amber', es: 'Mi hermana <b>bebe</b> mucho café.', ru: 'Моя сестра пьёт много кофе.', en: 'My sister drinks a lot of coffee.' }
          ] }
        ]
      },
      {
        id: 'conj', label: { ru: 'Спряжение', en: 'Conjugation' },
        blocks: [
          { type: 'table', heading: { ru: 'Три образца', en: 'Three model verbs' },
            head: ['', 'hablar', 'comer', 'vivir'],
            rows: [
              ['yo', 'hablo', 'como', 'vivo'],
              ['tú', 'hablas', 'comes', 'vives'],
              ['él / ella', 'habla', 'come', 'vive'],
              ['nosotros', 'hablamos', 'comemos', 'vivimos'],
              ['vosotros', 'habláis', 'coméis', 'vivís'],
              ['ellos', 'hablan', 'comen', 'viven']
            ] },
          { type: 'text', body: {
            ru: ['<b>Ударение на письме</b> есть только в форме <i>vosotros</i>: <i>habláis, coméis, vivís, leéis</i>. В остальных формах ударение падает на основу: <i>HAblo, COmes, VIven</i>.'],
            en: ['<b>A written accent</b> appears only in the <i>vosotros</i> form: <i>habláis, coméis, vivís, leéis</i>. In the other forms the stress falls on the stem: <i>HAblo, COmes, VIven</i>.'] } },
          { type: 'markers', heading: { ru: 'Частые правильные глаголы', en: 'Common regular verbs' }, groups: [
            { color: 'blue', title: { ru: 'На -ar', en: 'In -ar' }, tags: ['hablar', 'trabajar', 'estudiar', 'escuchar', 'comprar', 'llamar', 'cocinar', 'bailar', 'tomar', 'llegar', 'viajar', 'desayunar'] },
            { color: 'amber', title: { ru: 'На -er', en: 'In -er' }, tags: ['comer', 'beber', 'leer', 'aprender', 'comprender', 'vender', 'correr', 'deber'] },
            { color: 'teal', title: { ru: 'На -ir', en: 'In -ir' }, tags: ['vivir', 'escribir', 'abrir', 'recibir', 'subir', 'compartir', 'decidir'] }
          ] },
          { type: 'examples', heading: { ru: 'Правильные глаголы в речи', en: 'Regular verbs in use' }, items: [
            { color: 'blue', es: 'Los sábados <b>limpiamos</b> la casa.', ru: 'По субботам мы убираем дом.', en: 'On Saturdays we clean the house.' },
            { color: 'blue', es: 'Mi jefe siempre <b>llega</b> a las nueve.', ru: 'Мой начальник всегда приходит в девять.', en: 'My boss always arrives at nine.' },
            { color: 'amber', es: 'Los niños <b>aprenden</b> inglés en el colegio.', ru: 'Дети учат английский в школе.', en: 'The children learn English at school.' },
            { color: 'teal', es: '<b>Escribes</b> muy bien.', ru: 'Ты очень хорошо пишешь.', en: 'You write very well.' },
            { color: 'teal', es: '¿<b>Vivís</b> cerca de aquí?', ru: 'Вы живёте недалеко отсюда?', en: 'Do you all live near here?' }
          ] }
        ]
      },
      {
        id: 'use', label: { ru: 'Употребление', en: 'Use' },
        blocks: [
          { type: 'rules', heading: { ru: 'Когда нужно Presente', en: 'When to use Presente' }, items: [
            { color: 'blue', title: { ru: 'Сейчас', en: 'Now' }, es: 'Ahora cocino.',
              body: { ru: 'То, что происходит в момент речи. Русское «я готовлю» — это и <i>cocino</i>.',
                      en: 'What is happening at the moment of speaking. <i>Cocino</i> can mean “I’m cooking”.' } },
            { color: 'blue', title: { ru: 'Привычки', en: 'Habits' }, es: 'Trabajo los lunes.',
              body: { ru: 'То, что делаем регулярно: каждый день, по понедельникам, обычно.',
                      en: 'What we do regularly: every day, on Mondays, usually.' } },
            { color: 'blue', title: { ru: 'Факты', en: 'Facts' }, es: 'Los españoles cenan tarde.',
              body: { ru: 'Общие истины и то, что верно всегда.',
                      en: 'General truths and things that are always true.' } },
            { color: 'blue', title: { ru: 'Ближайшее будущее', en: 'Near future' }, es: 'Mañana trabajo en casa.',
              body: { ru: 'Запланированное действие — если есть слово-маркер будущего: <i>mañana, el lunes, esta noche</i>.',
                      en: 'A planned action — when a future time word is there: <i>mañana, el lunes, esta noche</i>.' } }
          ] },
          { type: 'markers', heading: { ru: 'Как часто', en: 'How often' }, groups: [
            { color: 'blue', title: { ru: 'Частота', en: 'Frequency' }, tags: ['siempre', 'normalmente', 'a menudo', 'a veces', 'casi nunca', 'nunca'] },
            { color: 'blue', title: { ru: 'Регулярность', en: 'Regularity' }, tags: ['todos los días', 'cada semana', 'los lunes', 'por la mañana', 'los fines de semana'] }
          ] },
          { type: 'text', body: {
            ru: ['<b>Usted и ustedes.</b> <b>Usted</b> — вежливое «вы» одному человеку, <b>ustedes</b> — «вы» нескольким. Глагол с ними стоит в форме 3-го лица: <i>usted habla</i>, <i>ustedes hablan</i>. В Латинской Америке <i>ustedes</i> заменяет и <i>vosotros</i>.'],
            en: ['<b>Usted and ustedes.</b> <b>Usted</b> is the polite “you” for one person, <b>ustedes</b> is “you” for several people. They take the third-person form: <i>usted habla</i>, <i>ustedes hablan</i>. In Latin America <i>ustedes</i> also replaces <i>vosotros</i>.'] } },
          { type: 'examples', heading: { ru: 'Употребление в речи', en: 'Uses in context' }, items: [
            { color: 'blue', es: '¿Usted <b>habla</b> inglés?', ru: 'Вы говорите по-английски?', en: 'Do you speak English?' },
            { color: 'teal', es: '¿Ustedes <b>viven</b> en el centro?', ru: 'Вы живёте в центре?', en: 'Do you live in the centre?' },
            { color: 'blue', es: '<b>Estudiamos</b> español los lunes.', ru: 'Мы учим испанский по понедельникам.', en: 'We study Spanish on Mondays.' },
            { color: 'blue', es: 'Ahora <b>cocino</b>, luego hablamos.', ru: 'Сейчас я готовлю, поговорим потом.', en: 'I’m cooking now, let’s talk later.' },
            { color: 'blue', es: 'Los españoles <b>cenan</b> muy tarde.', ru: 'Испанцы ужинают очень поздно.', en: 'Spaniards have dinner very late.' },
            { color: 'blue', es: 'Mañana <b>trabajo</b> desde casa.', ru: 'Завтра я работаю из дома.', en: 'Tomorrow I’m working from home.' }
          ] }
        ]
      },
      {
        id: 'questions', label: { ru: 'Нет и ¿?', en: 'No and ¿?' },
        blocks: [
          { type: 'text', body: {
            ru: ['Чтобы сказать «не», поставьте <b>no</b> перед глаголом: <i>No trabajo los domingos.</i>',
                 'Вопрос отличается от утверждения интонацией, а на письме — знаками <b>¿ ?</b>: <i>¿Vives en Madrid?</i>'],
            en: ['To say “not”, put <b>no</b> before the verb: <i>No trabajo los domingos.</i>',
                 'A question differs from a statement only in intonation, and in writing by the marks <b>¿ ?</b>: <i>¿Vives en Madrid?</i>'] } },
          { type: 'conj', heading: { ru: 'Да или нет', en: 'Yes or no' }, verbs: [
            { inf: 'trabajar', tr: { ru: 'работать', en: 'to work' }, variants: [
              { label: { ru: 'утверждение', en: 'affirmative' }, color: 'blue', rows: [['yo', 'trabaj<b>o</b>'], ['tú', 'trabaj<b>as</b>'], ['él / ella', 'trabaj<b>a</b>'], ['nosotros', 'trabaj<b>amos</b>'], ['vosotros', 'trabaj<b>áis</b>'], ['ellos', 'trabaj<b>an</b>']] },
              { label: { ru: 'отрицание', en: 'negative' }, color: 'coral', rows: [['yo', '<b>no</b> trabajo'], ['tú', '<b>no</b> trabajas'], ['él / ella', '<b>no</b> trabaja'], ['nosotros', '<b>no</b> trabajamos'], ['vosotros', '<b>no</b> trabajáis'], ['ellos', '<b>no</b> trabajan']] }
            ] },
            { inf: 'beber', tr: { ru: 'пить', en: 'to drink' }, variants: [
              { label: { ru: 'утверждение', en: 'affirmative' }, color: 'amber', rows: [['yo', 'beb<b>o</b>'], ['tú', 'beb<b>es</b>'], ['él / ella', 'beb<b>e</b>'], ['nosotros', 'beb<b>emos</b>'], ['vosotros', 'beb<b>éis</b>'], ['ellos', 'beb<b>en</b>']] },
              { label: { ru: 'отрицание', en: 'negative' }, color: 'coral', rows: [['yo', '<b>no</b> bebo'], ['tú', '<b>no</b> bebes'], ['él / ella', '<b>no</b> bebe'], ['nosotros', '<b>no</b> bebemos'], ['vosotros', '<b>no</b> bebéis'], ['ellos', '<b>no</b> beben']] }
            ] }
          ] },
          { type: 'text', body: {
            ru: ['<b>Вопрос с вопросительным словом:</b> слово — первым, глагол — сразу за ним, подлежащее — после глагола: <i>¿Dónde trabaja tu hermano?</i>',
                 '<b>Ответ «нет»</b> часто содержит два <i>no</i>: первое — «нет», второе — «не»: <i>¿Hablas alemán? — No, no hablo alemán.</i>'],
            en: ['<b>Questions with a question word:</b> the word comes first, the verb right after it, and the subject after the verb: <i>¿Dónde trabaja tu hermano?</i>',
                 '<b>A “no” answer</b> often has two <i>no</i>s: the first means “no”, the second means “not”: <i>¿Hablas alemán? — No, no hablo alemán.</i>'] } },
          { type: 'markers', heading: { ru: 'Вопросительные слова', en: 'Question words' }, groups: [
            { color: 'purple', title: { ru: 'Спросить', en: 'To ask' }, tags: ['¿qué?', '¿dónde?', '¿cuándo?', '¿cómo?', '¿quién?', '¿cuánto?', '¿por qué?'] }
          ] },
          { type: 'examples', heading: { ru: 'Отрицание и вопросы', en: 'Negatives and questions' }, items: [
            { color: 'coral', es: '<b>No hablo</b> alemán.', ru: 'Я не говорю по-немецки.', en: 'I don’t speak German.' },
            { color: 'purple', es: '¿<b>Vives</b> en Madrid?', ru: 'Ты живёшь в Мадриде?', en: 'Do you live in Madrid?' },
            { color: 'purple', es: '¿Dónde <b>trabaja</b> tu hermano?', ru: 'Где работает твой брат?', en: 'Where does your brother work?' },
            { color: 'purple', es: '¿Qué <b>desayunáis</b> normalmente?', ru: 'Что вы обычно едите на завтрак?', en: 'What do you usually have for breakfast?' },
            { color: 'coral', es: 'No, <b>no bebo</b> café por la noche.', ru: 'Нет, вечером я не пью кофе.', en: 'No, I don’t drink coffee in the evening.' },
            { color: 'coral', es: 'Mis hijos <b>no comen</b> verduras.', ru: 'Мои дети не едят овощи.', en: 'My children don’t eat vegetables.' }
          ] }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Дом и семья', en: 'Home and family' }, items: [
            { color: 'blue', es: 'Mi madre <b>cocina</b> muy bien.', ru: 'Моя мама очень хорошо готовит.', en: 'My mother cooks very well.' },
            { color: 'amber', es: 'Por la noche <b>leemos</b> un rato.', ru: 'Вечером мы немного читаем.', en: 'In the evening we read for a while.' },
            { color: 'teal', es: '¿<b>Compartes</b> piso con alguien?', ru: 'Ты живёшь в квартире с кем-то ещё?', en: 'Do you share a flat with anyone?' }
          ] },
          { type: 'examples', heading: { ru: 'Работа и учёба', en: 'Work and study' }, items: [
            { color: 'blue', es: 'Ana <b>trabaja</b> en un hospital.', ru: 'Ана работает в больнице.', en: 'Ana works in a hospital.' },
            { color: 'teal', es: '<b>Recibo</b> muchos correos cada día.', ru: 'Я получаю много писем каждый день.', en: 'I get lots of emails every day.' },
            { color: 'blue', es: '¿Qué <b>estudiáis</b>? — <b>Estudiamos</b> Medicina.', ru: 'Что вы изучаете? — Мы учимся на медицинском.', en: 'What do you study? — We study Medicine.' }
          ] },
          { type: 'examples', heading: { ru: 'Свободное время и поездки', en: 'Free time and travel' }, items: [
            { color: 'blue', es: 'En verano <b>viajamos</b> a la costa.', ru: 'Летом мы ездим на побережье.', en: 'In summer we travel to the coast.' },
            { color: 'blue', es: 'Mis amigos <b>bailan</b> salsa los viernes.', ru: 'Мои друзья танцуют сальсу по пятницам.', en: 'My friends dance salsa on Fridays.' },
            { color: 'blue', es: 'El autobús <b>llega</b> a las diez.', ru: 'Автобус приходит в десять.', en: 'The bus arrives at ten.' },
            { color: 'amber', es: '¿<b>Corres</b> en el parque por las mañanas?', ru: 'Ты бегаешь в парке по утрам?', en: 'Do you go running in the park in the mornings?' }
          ] }
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
    hero: {
      es: 'Presente: <b>irregulares</b>',
      sub: { ru: 'Самые нужные неправильные глаголы: ir, tener, hacer, querer, poder и другие',
             en: 'The most useful irregular verbs: ir, tener, hacer, querer, poder and more' }
    },
    tabs: [
      {
        id: 'irreg', label: { ru: 'Неправильные', en: 'Irregular' },
        blocks: [
          { type: 'text', body: {
            ru: ['Самые частые глаголы — неправильные, и их формы нужно запомнить. <b>Ir</b> (идти, ехать) меняется целиком, у <b>tener</b> (иметь) и <b>hacer</b> (делать) особая форма «я».',
                 'С tener говорят о возрасте: <i>Tengo veinte años</i> — «Мне двадцать лет».'],
            en: ['The most frequent verbs are irregular, so their forms must be memorised. <b>Ir</b> (to go) changes completely; <b>tener</b> (to have) and <b>hacer</b> (to do, to make) have a special “I” form.',
                 'Tener is used for age: <i>Tengo veinte años</i> — “I’m twenty”.'] } },
          { type: 'table', heading: { ru: 'Ir, tener, hacer', en: 'Ir, tener, hacer' },
            head: ['', 'ir', 'tener', 'hacer'],
            rows: [
              ['yo', 'voy', 'tengo', 'hago'],
              ['tú', 'vas', 'tienes', 'haces'],
              ['él / ella', 'va', 'tiene', 'hace'],
              ['nosotros', 'vamos', 'tenemos', 'hacemos'],
              ['vosotros', 'vais', 'tenéis', 'hacéis'],
              ['ellos', 'van', 'tienen', 'hacen']
            ] },
          { type: 'conj', heading: { ru: 'Форма yo на -oy', en: 'The yo form in -oy' }, verbs: [
            { inf: 'ser', tr: { ru: 'быть', en: 'to be' }, variants: [
              { label: 'yo', color: 'coral', rows: [['yo', 's<b>oy</b>']] },
              { label: { ru: 'другие лица', en: 'other persons' }, color: 'purple', rows: [['tú', 'eres'], ['él / ella', 'es'], ['nosotros', 'somos'], ['vosotros', 'sois'], ['ellos', 'son']] }
            ] },
            { inf: 'estar', tr: { ru: 'быть, находиться', en: 'to be (location, state)' }, variants: [
              { label: 'yo', color: 'coral', rows: [['yo', 'est<b>oy</b>']] },
              { label: { ru: 'другие лица', en: 'other persons' }, color: 'purple', rows: [['tú', 'estás'], ['él / ella', 'está'], ['nosotros', 'estamos'], ['vosotros', 'estáis'], ['ellos', 'están']] }
            ] },
            { inf: 'dar', tr: { ru: 'давать', en: 'to give' }, variants: [
              { label: 'yo', color: 'coral', rows: [['yo', 'd<b>oy</b>']] },
              { label: { ru: 'другие лица', en: 'other persons' }, color: 'purple', rows: [['tú', 'das'], ['él / ella', 'da'], ['nosotros', 'damos'], ['vosotros', 'dais'], ['ellos', 'dan']] }
            ] }
          ] },
          { type: 'rules', heading: { ru: 'Выражения с ir и tener', en: 'Phrases with ir and tener' }, items: [
            { color: 'coral', title: { ru: 'Ir a + место', en: 'Ir a + place' }, es: 'Voy a la playa.',
              body: { ru: 'Куда идём или едем. <i>A + el</i> сливаются: <i>voy al cine</i>.',
                      en: 'Where we go. <i>A + el</i> merge: <i>voy al cine</i>.' } },
            { color: 'coral', title: { ru: 'Ir a + инфинитив', en: 'Ir a + infinitive' }, es: 'Voy a estudiar.',
              body: { ru: 'План на ближайшее будущее — «собираюсь»: <i>Vamos a cenar fuera.</i>',
                      en: 'A plan for the near future — “going to”: <i>Vamos a cenar fuera.</i>' } },
            { color: 'coral', title: { ru: 'Tener que + инфинитив', en: 'Tener que + infinitive' }, es: 'Tengo que trabajar.',
              body: { ru: 'Обязанность — «нужно, должен»: <i>Tienes que descansar.</i>',
                      en: 'Obligation — “have to”: <i>Tienes que descansar.</i>' } },
            { color: 'coral', title: { ru: 'Tener + ощущение', en: 'Tener + a feeling' }, es: 'Tengo hambre.',
              body: { ru: 'По-испански голод, жажду, холод «имеют»: <i>tengo frío</i> — «мне холодно».',
                      en: 'In Spanish you “have” hunger, thirst, cold: <i>tengo frío</i> — “I’m cold”.' } }
          ] },
          { type: 'markers', heading: { ru: 'Выражения с tener', en: 'Expressions with tener' }, groups: [
            { color: 'coral', title: { ru: 'Tener', en: 'Tener' }, tags: ['tener … años', 'tener hambre', 'tener sed', 'tener frío', 'tener calor', 'tener sueño', 'tener prisa', 'tener que'] }
          ] },
          { type: 'examples', heading: { ru: 'Ir, tener, hacer в речи', en: 'Ir, tener, hacer in use' }, items: [
            { color: 'coral', es: '<b>Tengo</b> dos hermanos.', ru: 'У меня два брата.', en: 'I have two brothers.' },
            { color: 'coral', es: 'Los domingos <b>vamos</b> a la playa.', ru: 'По воскресеньям мы ходим на пляж.', en: 'On Sundays we go to the beach.' },
            { color: 'purple', es: '¿Qué <b>haces</b> los fines de semana?', ru: 'Что ты делаешь по выходным?', en: 'What do you do at weekends?' },
            { color: 'coral', es: 'Mi hija <b>tiene</b> seis años.', ru: 'Моей дочери шесть лет.', en: 'My daughter is six.' },
            { color: 'coral', es: '¿<b>Tienes</b> hambre?', ru: 'Ты голоден?', en: 'Are you hungry?' },
            { color: 'coral', es: 'Mañana <b>tenemos</b> que trabajar.', ru: 'Завтра нам нужно работать.', en: 'We have to work tomorrow.' },
            { color: 'coral', es: 'Esta noche <b>voy</b> a cenar con Marta.', ru: 'Сегодня вечером я ужинаю с Мартой.', en: 'I’m having dinner with Marta tonight.' }
          ] }
        ]
      },
      {
        id: 'vowel', label: { ru: 'Гласная', en: 'Vowel change' },
        blocks: [
          { type: 'text', body: {
            ru: ['У многих глаголов под ударением меняется гласная основы: <b>e → ie</b> (querer → <i>quiero</i>), <b>o → ue</b> (poder → <i>puedo</i>), <b>e → i</b> (pedir → <i>pido</i>).',
                 'В формах «мы» и «вы» (nosotros, vosotros) гласная не меняется: <i>queremos, podéis</i>.',
                 'Так же спрягаются: <i>empezar, pensar, preferir</i> (e → ie); <i>dormir, volver, contar</i> (o → ue); <i>repetir, servir</i> (e → i). <i>Jugar</i> меняет u → ue: <i>juego</i>.'],
            en: ['In many verbs the stem vowel changes when stressed: <b>e → ie</b> (querer → <i>quiero</i>), <b>o → ue</b> (poder → <i>puedo</i>), <b>e → i</b> (pedir → <i>pido</i>).',
                 'The “we” and “you all” forms (nosotros, vosotros) keep the original vowel: <i>queremos, podéis</i>.',
                 'Other verbs like this: <i>empezar, pensar, preferir</i> (e → ie); <i>dormir, volver, contar</i> (o → ue); <i>repetir, servir</i> (e → i). <i>Jugar</i> changes u → ue: <i>juego</i>.'] } },
          { type: 'conj', heading: { ru: 'e → ie', en: 'e → ie' }, verbs: [
            { inf: 'querer', tr: { ru: 'хотеть', en: 'to want' }, variants: [
              { label: 'e → ie', color: 'blue', rows: [['yo', 'qu<b>ie</b>ro'], ['tú', 'qu<b>ie</b>res'], ['él / ella', 'qu<b>ie</b>re'], ['ellos', 'qu<b>ie</b>ren']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['nosotros', 'queremos'], ['vosotros', 'queréis']] }
            ] },
            { inf: 'pensar', tr: { ru: 'думать', en: 'to think' }, variants: [
              { label: 'e → ie', color: 'blue', rows: [['yo', 'p<b>ie</b>nso'], ['tú', 'p<b>ie</b>nsas'], ['él / ella', 'p<b>ie</b>nsa'], ['ellos', 'p<b>ie</b>nsan']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['nosotros', 'pensamos'], ['vosotros', 'pensáis']] }
            ] },
            { inf: 'empezar', tr: { ru: 'начинать', en: 'to start' }, variants: [
              { label: 'e → ie', color: 'blue', rows: [['yo', 'emp<b>ie</b>zo'], ['tú', 'emp<b>ie</b>zas'], ['él / ella', 'emp<b>ie</b>za'], ['ellos', 'emp<b>ie</b>zan']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['nosotros', 'empezamos'], ['vosotros', 'empezáis']] }
            ] },
            { inf: 'preferir', tr: { ru: 'предпочитать', en: 'to prefer' }, variants: [
              { label: 'e → ie', color: 'blue', rows: [['yo', 'pref<b>ie</b>ro'], ['tú', 'pref<b>ie</b>res'], ['él / ella', 'pref<b>ie</b>re'], ['ellos', 'pref<b>ie</b>ren']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['nosotros', 'preferimos'], ['vosotros', 'preferís']] }
            ] }
          ] },
          { type: 'conj', heading: { ru: 'o → ue', en: 'o → ue' }, verbs: [
            { inf: 'poder', tr: { ru: 'мочь', en: 'can' }, variants: [
              { label: 'o → ue', color: 'amber', rows: [['yo', 'p<b>ue</b>do'], ['tú', 'p<b>ue</b>des'], ['él / ella', 'p<b>ue</b>de'], ['ellos', 'p<b>ue</b>den']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['nosotros', 'podemos'], ['vosotros', 'podéis']] }
            ] },
            { inf: 'dormir', tr: { ru: 'спать', en: 'to sleep' }, variants: [
              { label: 'o → ue', color: 'amber', rows: [['yo', 'd<b>ue</b>rmo'], ['tú', 'd<b>ue</b>rmes'], ['él / ella', 'd<b>ue</b>rme'], ['ellos', 'd<b>ue</b>rmen']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['nosotros', 'dormimos'], ['vosotros', 'dormís']] }
            ] },
            { inf: 'volver', tr: { ru: 'возвращаться', en: 'to return' }, variants: [
              { label: 'o → ue', color: 'amber', rows: [['yo', 'v<b>ue</b>lvo'], ['tú', 'v<b>ue</b>lves'], ['él / ella', 'v<b>ue</b>lve'], ['ellos', 'v<b>ue</b>lven']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['nosotros', 'volvemos'], ['vosotros', 'volvéis']] }
            ] },
            { inf: 'jugar', tr: { ru: 'играть · u → ue', en: 'to play · u → ue' }, variants: [
              { label: 'u → ue', color: 'amber', rows: [['yo', 'j<b>ue</b>go'], ['tú', 'j<b>ue</b>gas'], ['él / ella', 'j<b>ue</b>ga'], ['ellos', 'j<b>ue</b>gan']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['nosotros', 'jugamos'], ['vosotros', 'jugáis']] }
            ] }
          ] },
          { type: 'conj', heading: { ru: 'e → i', en: 'e → i' }, verbs: [
            { inf: 'pedir', tr: { ru: 'просить, заказывать', en: 'to ask for, order' }, variants: [
              { label: 'e → i', color: 'teal', rows: [['yo', 'p<b>i</b>do'], ['tú', 'p<b>i</b>des'], ['él / ella', 'p<b>i</b>de'], ['ellos', 'p<b>i</b>den']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['nosotros', 'pedimos'], ['vosotros', 'pedís']] }
            ] },
            { inf: 'repetir', tr: { ru: 'повторять', en: 'to repeat' }, variants: [
              { label: 'e → i', color: 'teal', rows: [['yo', 'rep<b>i</b>to'], ['tú', 'rep<b>i</b>tes'], ['él / ella', 'rep<b>i</b>te'], ['ellos', 'rep<b>i</b>ten']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['nosotros', 'repetimos'], ['vosotros', 'repetís']] }
            ] },
            { inf: 'servir', tr: { ru: 'подавать', en: 'to serve' }, variants: [
              { label: 'e → i', color: 'teal', rows: [['yo', 's<b>i</b>rvo'], ['tú', 's<b>i</b>rves'], ['él / ella', 's<b>i</b>rve'], ['ellos', 's<b>i</b>rven']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['nosotros', 'servimos'], ['vosotros', 'servís']] }
            ] }
          ] },
          { type: 'markers', heading: { ru: 'Ещё глаголы', en: 'More verbs' }, groups: [
            { color: 'blue', title: { ru: 'e → ie', en: 'e → ie' }, tags: ['querer', 'pensar', 'empezar', 'preferir', 'cerrar', 'entender', 'despertarse'] },
            { color: 'amber', title: { ru: 'o → ue', en: 'o → ue' }, tags: ['poder', 'dormir', 'volver', 'contar', 'costar', 'encontrar', 'recordar', 'jugar (u → ue)'] },
            { color: 'teal', title: { ru: 'e → i', en: 'e → i' }, tags: ['pedir', 'repetir', 'servir', 'vestirse'] }
          ] },
          { type: 'tip', title: { ru: 'Правило «ботинка»', en: 'The “boot” rule' }, body: {
            ru: ['Обведите в таблице формы, где гласная меняется: <i>yo, tú, él, ellos</i>. Получится контур ботинка — внутрь не попадают только <b>nosotros</b> и <b>vosotros</b>.'],
            en: ['Circle the forms in the table where the vowel changes: <i>yo, tú, él, ellos</i>. You get the outline of a boot — only <b>nosotros</b> and <b>vosotros</b> stay outside it.'] } }
        ]
      },
      {
        id: 'yo-form', label: { ru: 'Форма yo', en: 'The yo form' },
        blocks: [
          { type: 'text', body: {
            ru: ['У некоторых глаголов неправильная только форма <b>yo</b>, остальные — как у правильных: <i>poner → pongo</i>, <i>salir → salgo</i>, <i>saber → sé</i>, <i>ver → veo</i>, <i>dar → doy</i>, <i>conocer → conozco</i>.',
                 '<b>Venir</b> (приходить) сочетает оба типа: <i>vengo</i>, но <i>vienes, viene, vienen</i>.'],
            en: ['Some verbs are irregular only in the <b>yo</b> form; the rest is regular: <i>poner → pongo</i>, <i>salir → salgo</i>, <i>saber → sé</i>, <i>ver → veo</i>, <i>dar → doy</i>, <i>conocer → conozco</i>.',
                 '<b>Venir</b> (to come) combines both types: <i>vengo</i>, but <i>vienes, viene, vienen</i>.'] } },
          { type: 'rules', heading: { ru: 'Четыре группы', en: 'Four groups' }, items: [
            { color: 'coral', title: { ru: 'Группа -go', en: 'The -go group' }, es: 'hago, pongo, salgo, traigo',
              body: { ru: '<i>hacer, poner, salir, traer</i>: в форме yo появляется <b>-go</b>, дальше всё правильно.',
                      en: '<i>hacer, poner, salir, traer</i>: the yo form gets <b>-go</b>, everything else is regular.' } },
            { color: 'coral', title: { ru: '-go + смена гласной', en: '-go + vowel change' }, es: 'tengo, vengo, digo',
              body: { ru: '<i>tener, venir, decir</i>: yo на <b>-go</b>, а в <i>tú, él, ellos</i> меняется гласная: <i>tienes, vienes, dices</i>.',
                      en: '<i>tener, venir, decir</i>: yo ends in <b>-go</b>, and <i>tú, él, ellos</i> change the vowel: <i>tienes, vienes, dices</i>.' } },
            { color: 'coral', title: { ru: 'Группа -zco', en: 'The -zco group' }, es: 'conozco, conduzco',
              body: { ru: 'Глаголы на <b>-cer / -cir</b> после гласной: <i>conocer → conozco</i>, <i>conducir → conduzco</i>, <i>traducir → traduzco</i>.',
                      en: 'Verbs in <b>-cer / -cir</b> after a vowel: <i>conocer → conozco</i>, <i>conducir → conduzco</i>, <i>traducir → traduzco</i>.' } },
            { color: 'coral', title: { ru: 'Просто запомнить', en: 'Just learn them' }, es: 'sé, veo, doy',
              body: { ru: '<i>saber → sé</i> (с ударением), <i>ver → veo</i>, <i>dar → doy</i>.',
                      en: '<i>saber → sé</i> (with an accent), <i>ver → veo</i>, <i>dar → doy</i>.' } }
          ] },
          { type: 'table', heading: { ru: 'Только yo неправильная', en: 'Only yo is irregular' },
            head: ['', 'yo', 'tú', 'nosotros'],
            rows: [
              ['hacer', 'hago', 'haces', 'hacemos'],
              ['poner', 'pongo', 'pones', 'ponemos'],
              ['salir', 'salgo', 'sales', 'salimos'],
              ['traer', 'traigo', 'traes', 'traemos'],
              ['conocer', 'conozco', 'conoces', 'conocemos'],
              ['saber', 'sé', 'sabes', 'sabemos'],
              ['ver', 'veo', 'ves', 'vemos'],
              ['dar', 'doy', 'das', 'damos']
            ] },
          { type: 'conj', heading: { ru: 'Глаголы на -go', en: 'Verbs in -go' }, verbs: [
            { inf: 'hacer', tr: { ru: 'делать', en: 'to do, make' }, variants: [
              { label: 'yo', color: 'coral', rows: [['yo', 'ha<b>go</b>']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['tú', 'haces'], ['él / ella', 'hace'], ['nosotros', 'hacemos'], ['vosotros', 'hacéis'], ['ellos', 'hacen']] }
            ] },
            { inf: 'poner', tr: { ru: 'класть, ставить', en: 'to put' }, variants: [
              { label: 'yo', color: 'coral', rows: [['yo', 'pon<b>go</b>']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['tú', 'pones'], ['él / ella', 'pone'], ['nosotros', 'ponemos'], ['vosotros', 'ponéis'], ['ellos', 'ponen']] }
            ] },
            { inf: 'salir', tr: { ru: 'выходить', en: 'to go out' }, variants: [
              { label: 'yo', color: 'coral', rows: [['yo', 'sal<b>go</b>']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['tú', 'sales'], ['él / ella', 'sale'], ['nosotros', 'salimos'], ['vosotros', 'salís'], ['ellos', 'salen']] }
            ] },
            { inf: 'tener', tr: { ru: 'иметь', en: 'to have' }, variants: [
              { label: 'yo', color: 'coral', rows: [['yo', 'ten<b>go</b>']] },
              { label: 'e → ie', color: 'blue', rows: [['tú', 't<b>ie</b>nes'], ['él / ella', 't<b>ie</b>ne'], ['ellos', 't<b>ie</b>nen']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['nosotros', 'tenemos'], ['vosotros', 'tenéis']] }
            ] },
            { inf: 'venir', tr: { ru: 'приходить', en: 'to come' }, variants: [
              { label: 'yo', color: 'coral', rows: [['yo', 'ven<b>go</b>']] },
              { label: 'e → ie', color: 'blue', rows: [['tú', 'v<b>ie</b>nes'], ['él / ella', 'v<b>ie</b>ne'], ['ellos', 'v<b>ie</b>nen']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['nosotros', 'venimos'], ['vosotros', 'venís']] }
            ] },
            { inf: 'decir', tr: { ru: 'говорить, сказать', en: 'to say, tell' }, variants: [
              { label: 'yo', color: 'coral', rows: [['yo', 'di<b>go</b>']] },
              { label: 'e → i', color: 'teal', rows: [['tú', 'd<b>i</b>ces'], ['él / ella', 'd<b>i</b>ce'], ['ellos', 'd<b>i</b>cen']] },
              { label: { ru: 'без изменений', en: 'no change' }, color: 'purple', rows: [['nosotros', 'decimos'], ['vosotros', 'decís']] }
            ] }
          ] },
          { type: 'examples', heading: { ru: 'Форма yo в речи', en: 'The yo form in use' }, items: [
            { color: 'coral', es: '<b>Salgo</b> de casa a las ocho.', ru: 'Я выхожу из дома в восемь.', en: 'I leave home at eight.' },
            { color: 'coral', es: 'No <b>sé</b> dónde está la estación.', ru: 'Я не знаю, где вокзал.', en: 'I don’t know where the station is.' },
            { color: 'coral', es: '<b>Conozco</b> un restaurante muy bueno.', ru: 'Я знаю очень хороший ресторан.', en: 'I know a very good restaurant.' },
            { color: 'coral', es: '¿Dónde <b>pongo</b> las maletas?', ru: 'Куда поставить чемоданы?', en: 'Where shall I put the suitcases?' },
            { color: 'coral', es: '<b>Vengo</b> de la oficina.', ru: 'Я иду из офиса.', en: 'I’m coming from the office.' },
            { color: 'coral', es: 'Siempre <b>digo</b> la verdad.', ru: 'Я всегда говорю правду.', en: 'I always tell the truth.' },
            { color: 'coral', es: 'Por la noche <b>veo</b> la tele.', ru: 'По вечерам я смотрю телевизор.', en: 'I watch TV in the evening.' }
          ] }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Смена гласной', en: 'Vowel change' }, items: [
            { color: 'blue', es: '<b>Quiero</b> un café, por favor.', ru: 'Я хочу кофе, пожалуйста.', en: 'I’d like a coffee, please.' },
            { color: 'amber', es: 'Hoy no <b>puedo</b> salir.', ru: 'Сегодня я не могу выйти.', en: 'I can’t go out today.' },
            { color: 'blue', es: '¿A qué hora <b>empieza</b> la película?', ru: 'Во сколько начинается фильм?', en: 'What time does the film start?' },
            { color: 'purple', es: 'Nosotros <b>preferimos</b> el tren.', ru: 'Мы предпочитаем поезд.', en: 'We prefer the train.' },
            { color: 'amber', es: 'Los niños <b>duermen</b> la siesta.', ru: 'Дети спят днём.', en: 'The children are having a nap.' },
            { color: 'amber', es: '¿Cuánto <b>cuesta</b> este libro?', ru: 'Сколько стоит эта книга?', en: 'How much is this book?' },
            { color: 'amber', es: '<b>Vuelvo</b> a casa a las siete.', ru: 'Я возвращаюсь домой в семь.', en: 'I get back home at seven.' },
            { color: 'teal', es: '¿<b>Repites</b> la pregunta, por favor?', ru: 'Повтори вопрос, пожалуйста.', en: 'Can you repeat the question, please?' },
            { color: 'amber', es: 'Mis hijos <b>juegan</b> al fútbol los sábados.', ru: 'Мои дети играют в футбол по субботам.', en: 'My kids play football on Saturdays.' }
          ] },
          { type: 'examples', heading: { ru: 'Дом и друзья', en: 'Home and friends' }, items: [
            { color: 'amber', es: 'Mi abuelo <b>duerme</b> después de comer.', ru: 'Мой дедушка спит после обеда.', en: 'My grandfather sleeps after lunch.' },
            { color: 'blue', es: '¿<b>Vienes</b> a la fiesta el sábado?', ru: 'Придёшь на вечеринку в субботу?', en: 'Are you coming to the party on Saturday?' },
            { color: 'coral', es: '<b>Hago</b> la compra los viernes.', ru: 'Я хожу за продуктами по пятницам.', en: 'I do the shopping on Fridays.' }
          ] },
          { type: 'examples', heading: { ru: 'Работа и учёба', en: 'Work and study' }, items: [
            { color: 'blue', es: 'La reunión <b>empieza</b> a las diez.', ru: 'Совещание начинается в десять.', en: 'The meeting starts at ten.' },
            { color: 'purple', es: '¿<b>Tenéis</b> mucho trabajo hoy?', ru: 'У вас сегодня много работы?', en: 'Do you have a lot of work today?' },
            { color: 'blue', es: 'No <b>entiendo</b> esta palabra.', ru: 'Я не понимаю это слово.', en: 'I don’t understand this word.' }
          ] },
          { type: 'examples', heading: { ru: 'Поездки и ресторан', en: 'Travel and eating out' }, items: [
            { color: 'coral', es: 'Mis padres <b>van</b> a Italia en agosto.', ru: 'Мои родители едут в Италию в августе.', en: 'My parents are going to Italy in August.' },
            { color: 'amber', es: '¿Nos <b>puede</b> traer la cuenta, por favor?', ru: 'Принесите нам счёт, пожалуйста.', en: 'Could you bring us the bill, please?' },
            { color: 'purple', es: 'Nosotros <b>pedimos</b> una paella para dos.', ru: 'Мы заказываем паэлью на двоих.', en: 'We’ll have a paella for two.' },
            { color: 'purple', es: '¿<b>Sabes</b> dónde está el hotel?', ru: 'Ты знаешь, где отель?', en: 'Do you know where the hotel is?' }
          ] }
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
    hero: {
      es: 'Me <b>gusta</b>',
      sub: { ru: 'Как сказать «мне нравится», «обожаю», «интересно», «болит»',
             en: 'How to say “I like”, “I love”, “I’m interested in”, “it hurts”' }
    },
    tabs: [
      {
        id: 'how', label: { ru: 'Как устроено', en: 'How it works' },
        blocks: [
          { type: 'text', body: {
            ru: ['По-испански говорят не «я люблю кофе», а «мне нравится кофе»: <b>me gusta</b> el café. Тот, кому нравится, — местоимение <b>me, te, le, nos, os, les</b>.'],
            en: ['In Spanish you don’t say “I like coffee” but “coffee pleases me”: <b>me gusta</b> el café. The person who likes it is a pronoun: <b>me, te, le, nos, os, les</b>.'] } },
          { type: 'rules', heading: { ru: 'Три части', en: 'Three parts' }, items: [
            { color: 'purple', label: { ru: 'Шаг 1', en: 'Step 1' }, title: { ru: 'Кому', en: 'To whom' }, es: 'me, te, le, nos, os, les',
              body: { ru: 'Кому нравится — местоимение <b>перед</b> глаголом. Не <i>yo</i>, а <i>me</i>.',
                      en: 'Who likes it — a pronoun <b>before</b> the verb. Not <i>yo</i>, but <i>me</i>.' } },
            { color: 'blue', label: { ru: 'Шаг 2', en: 'Step 2' }, title: { ru: 'Глагол', en: 'The verb' }, es: 'gusta / gustan',
              body: { ru: 'Глагол согласуется с тем, <b>что</b> нравится, а не с тем, кому.',
                      en: 'The verb agrees with <b>what</b> is liked, not with who likes it.' } },
            { color: 'teal', label: { ru: 'Шаг 3', en: 'Step 3' }, title: { ru: 'Что нравится', en: 'What is liked' }, es: 'el café, leer',
              body: { ru: 'Существительное — <b>с артиклем</b>: <i>me gusta el café</i>, не <i>me gusta café</i>. Или инфинитив: <i>me gusta leer</i>.',
                      en: 'A noun — <b>with the article</b>: <i>me gusta el café</i>, not <i>me gusta café</i>. Or an infinitive: <i>me gusta leer</i>.' } }
          ] },
          { type: 'table', heading: { ru: 'Формула', en: 'The formula' },
            head: [{ ru: 'Кому', en: 'To whom' }, { ru: 'Глагол', en: 'Verb' }, { ru: 'Что', en: 'What' }],
            rows: [
              ['me', 'gusta', 'el café'],
              ['te', 'gusta', 'bailar'],
              ['le', 'gustan', 'los perros'],
              ['nos', 'gustan', 'las películas']
            ] },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Отрицание</b> — <i>no</i> перед местоимением: <i>No me gusta el frío.</i> Степень: <i>me gusta mucho</i> — «очень нравится», <i>no me gusta nada</i> — «совсем не нравится».',
                 '<b>Частая ошибка:</b> <i>Yo gusto el café</i> — так нельзя. <i>Yo gusto</i> значит «я нравлюсь».'],
            en: ['<b>Negation</b> — <i>no</i> goes before the pronoun: <i>No me gusta el frío.</i> Degree: <i>me gusta mucho</i> — “I really like it”, <i>no me gusta nada</i> — “I don’t like it at all”.',
                 '<b>A common mistake:</b> <i>Yo gusto el café</i> is wrong. <i>Yo gusto</i> means “people like me”.'] } },
          { type: 'examples', heading: { ru: 'Gustar в речи', en: 'Gustar in use' }, items: [
            { color: 'blue', es: 'Me <b>gusta</b> leer.', ru: 'Я люблю читать.', en: 'I like reading.' },
            { color: 'blue', es: '¿Te <b>gusta</b> el café?', ru: 'Ты любишь кофе?', en: 'Do you like coffee?' },
            { color: 'blue', es: 'Me <b>gustan</b> los perros.', ru: 'Я люблю собак.', en: 'I like dogs.' },
            { color: 'coral', es: 'No me <b>gusta</b> nada el frío.', ru: 'Я совсем не люблю холод.', en: 'I don’t like the cold at all.' },
            { color: 'blue', es: 'A Ana le <b>gusta</b> mucho el mar.', ru: 'Ане очень нравится море.', en: 'Ana really likes the sea.' }
          ] }
        ]
      },
      {
        id: 'pronouns', label: { ru: 'Местоимения', en: 'Pronouns' },
        blocks: [
          { type: 'table', heading: { ru: 'Кому нравится', en: 'Who likes it' },
            head: ['', { ru: 'для акцента', en: 'for emphasis' }, { ru: 'местоимение', en: 'pronoun' }],
            rows: [
              ['yo', 'a mí', 'me'],
              ['tú', 'a ti', 'te'],
              ['él / ella', 'a él / a ella / a usted', 'le'],
              ['nosotros', 'a nosotros / a nosotras', 'nos'],
              ['vosotros', 'a vosotros / a vosotras', 'os'],
              ['ellos', 'a ellos / a ellas / a ustedes', 'les']
            ] },
          { type: 'text', body: {
            ru: ['Слова <b>a mí, a ti, a él</b>… добавляют для акцента или ясности: <i>A mí me gusta el té, ¿y a ti?</i> Если называем человека по имени, нужны и <b>a</b>, и местоимение: <i>A Juan le gusta el fútbol.</i>'],
            en: ['<b>A mí, a ti, a él</b>… are added for emphasis or clarity: <i>A mí me gusta el té, ¿y a ti?</i> With a name you need both <b>a</b> and the pronoun: <i>A Juan le gusta el fútbol.</i>'] } },
          { type: 'text', color: 'purple', body: {
            ru: ['<b>Местоимение не выпадает.</b> <i>A mí</i> лишь добавляет акцент: правильно <i>A mí me gusta</i>, а не <i>A mí gusta</i>. И запомните: <i>mí</i> — с ударением, <i>ti</i> — без.'],
            en: ['<b>The pronoun never drops out.</b> <i>A mí</i> only adds emphasis: it is <i>A mí me gusta</i>, not <i>A mí gusta</i>. And remember: <i>mí</i> has an accent, <i>ti</i> does not.'] } },
          { type: 'text', color: 'teal', body: {
            ru: ['<b>«Мне тоже»</b> — <b>a mí también</b>. <b>«Мне тоже не нравится»</b> — <b>a mí tampoco</b>. Если не согласны: на утверждение — <i>a mí no</i>, на отрицание — <i>a mí sí</i>.'],
            en: ['<b>“Me too”</b> is <b>a mí también</b>. <b>“Me neither”</b> is <b>a mí tampoco</b>. To disagree: after a positive statement — <i>a mí no</i>, after a negative one — <i>a mí sí</i>.'] } },
          { type: 'conj', heading: { ru: 'Согласиться или нет', en: 'Agree or disagree' }, verbs: [
            { inf: 'Me gusta el té.', tr: { ru: 'утверждение', en: 'a positive statement' }, variants: [
              { label: { ru: 'согласие', en: 'agree' }, color: 'teal', rows: [['yo', 'A mí <b>también</b>.'], ['nosotros', 'A nosotros <b>también</b>.']] },
              { label: { ru: 'несогласие', en: 'disagree' }, color: 'coral', rows: [['yo', 'A mí <b>no</b>.'], ['nosotros', 'A nosotros <b>no</b>.']] }
            ] },
            { inf: 'No me gusta el café.', tr: { ru: 'отрицание', en: 'a negative statement' }, variants: [
              { label: { ru: 'согласие', en: 'agree' }, color: 'teal', rows: [['yo', 'A mí <b>tampoco</b>.'], ['nosotros', 'A nosotros <b>tampoco</b>.']] },
              { label: { ru: 'несогласие', en: 'disagree' }, color: 'coral', rows: [['yo', 'A mí <b>sí</b>.'], ['nosotros', 'A nosotros <b>sí</b>.']] }
            ] }
          ] },
          { type: 'examples', heading: { ru: 'Кому нравится — в речи', en: 'Who likes it — in use' }, items: [
            { color: 'purple', es: '<b>A mí</b> me gusta el té, ¿y <b>a ti</b>?', ru: 'Я люблю чай, а ты?', en: 'I like tea, what about you?' },
            { color: 'purple', es: 'A mi hermano <b>le</b> gusta el fútbol.', ru: 'Моему брату нравится футбол.', en: 'My brother likes football.' },
            { color: 'purple', es: 'A mis padres <b>les</b> gusta el campo.', ru: 'Моим родителям нравится жизнь за городом.', en: 'My parents like the countryside.' },
            { color: 'purple', es: '¿<b>Os</b> gusta la comida española?', ru: 'Вам нравится испанская кухня?', en: 'Do you all like Spanish food?' },
            { color: 'teal', es: 'No me gusta el café. — A mí <b>tampoco</b>.', ru: 'Я не люблю кофе. — Я тоже.', en: 'I don’t like coffee. — Me neither.' },
            { color: 'coral', es: 'Me gusta la playa. — A mí <b>no</b>, prefiero la montaña.', ru: 'Я люблю пляж. — А я нет, мне больше нравятся горы.', en: 'I like the beach. — I don’t, I prefer the mountains.' }
          ] }
        ]
      },
      {
        id: 'gusta-gustan', label: { ru: 'Gusta/gustan', en: 'Gusta/gustan' },
        blocks: [
          { type: 'text', body: {
            ru: ['Глагол согласуется с тем, что нравится. Одна вещь или действие — <b>gusta</b>: <i>me gusta el mar, me gusta leer</i>. Несколько вещей — <b>gustan</b>: <i>me gustan los perros</i>.',
                 'Несколько действий подряд — всё равно <b>gusta</b>: <i>nos gusta cocinar y leer</i>.'],
            en: ['The verb agrees with the thing that is liked. One thing or an action — <b>gusta</b>: <i>me gusta el mar, me gusta leer</i>. Several things — <b>gustan</b>: <i>me gustan los perros</i>.',
                 'Several actions still take <b>gusta</b>: <i>nos gusta cocinar y leer</i>.'] } },
          { type: 'table', heading: { ru: 'Все формы', en: 'All the forms' },
            head: ['', 'una cosa / infinitivo', 'varias cosas'],
            rows: [
              ['(a mí)', 'me gusta', 'me gustan'],
              ['(a ti)', 'te gusta', 'te gustan'],
              ['(a él / ella)', 'le gusta', 'le gustan'],
              ['(a nosotros)', 'nos gusta', 'nos gustan'],
              ['(a vosotros)', 'os gusta', 'os gustan'],
              ['(a ellos)', 'les gusta', 'les gustan']
            ] },
          { type: 'markers', heading: { ru: 'Что идёт после', en: 'What comes after' }, groups: [
            { color: 'blue', title: { ru: 'gusta +', en: 'gusta +' }, tags: ['el café', 'la música', 'leer', 'cocinar y leer', 'mi trabajo'] },
            { color: 'amber', title: { ru: 'gustan +', en: 'gustan +' }, tags: ['los perros', 'las películas', 'los deportes', 'las flores', 'tus amigos'] }
          ] },
          { type: 'conj', heading: { ru: 'Одна вещь или много', en: 'One thing or several' }, verbs: [
            { inf: 'gustar', tr: { ru: 'нравиться', en: 'to like (to please)' }, variants: [
              { label: 'gusta', color: 'blue', rows: [['a mí', 'me <b>gusta</b> el mar'], ['a ti', 'te <b>gusta</b> bailar'], ['a él / ella', 'le <b>gusta</b> el cine'], ['a nosotros', 'nos <b>gusta</b> leer'], ['a vosotros', 'os <b>gusta</b> la paella'], ['a ellos', 'les <b>gusta</b> viajar']] },
              { label: 'gustan', color: 'amber', rows: [['a mí', 'me <b>gustan</b> los perros'], ['a ti', 'te <b>gustan</b> las flores'], ['a él / ella', 'le <b>gustan</b> los coches'], ['a nosotros', 'nos <b>gustan</b> las series'], ['a vosotros', 'os <b>gustan</b> los gatos'], ['a ellos', 'les <b>gustan</b> los museos']] }
            ] },
            { inf: 'encantar', tr: { ru: 'очень нравиться, обожать', en: 'to love' }, variants: [
              { label: 'encanta', color: 'blue', rows: [['a mí', 'me <b>encanta</b> el chocolate'], ['a ti', 'te <b>encanta</b> cantar'], ['a él / ella', 'le <b>encanta</b> esta ciudad']] },
              { label: 'encantan', color: 'amber', rows: [['a mí', 'me <b>encantan</b> los libros'], ['a ti', 'te <b>encantan</b> las fiestas'], ['a él / ella', 'le <b>encantan</b> los niños']] }
            ] }
          ] },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Внимание к числу:</b> по-русски «люблю спорт», а по-испански часто множественное — <i>me gustan los deportes</i>; и наоборот: «люблю фрукты» — <i>me gusta la fruta</i>. Смотрите на испанское слово.'],
            en: ['<b>Watch the number:</b> the Spanish noun decides. <i>La fruta</i> is singular, so <i>me gusta la fruta</i>; <i>los deportes</i> is plural, so <i>me gustan los deportes</i>.'] } },
          { type: 'examples', heading: { ru: 'Примеры попарно', en: 'Examples in pairs' }, items: [
            { badge: '1', color: 'blue', es: 'Me <b>gusta</b> la fruta.', ru: 'Я люблю фрукты.', en: 'I like fruit.' },
            { badge: '2+', color: 'amber', es: 'Me <b>gustan</b> las manzanas.', ru: 'Я люблю яблоки.', en: 'I like apples.' },
            { badge: '1', color: 'blue', es: 'A Pedro le <b>gusta</b> correr.', ru: 'Педро любит бегать.', en: 'Pedro likes running.' },
            { badge: '2+', color: 'amber', es: 'A Pedro le <b>gustan</b> los deportes.', ru: 'Педро любит спорт.', en: 'Pedro likes sports.' },
            { badge: '1', color: 'blue', es: 'Les <b>gusta</b> bailar y cantar.', ru: 'Им нравится танцевать и петь.', en: 'They like dancing and singing.' },
            { badge: '2+', color: 'amber', es: 'Nos <b>gustan</b> las películas españolas.', ru: 'Нам нравятся испанские фильмы.', en: 'We like Spanish films.' }
          ] }
        ]
      },
      {
        id: 'similar', label: { ru: 'Похожие', en: 'Similar' },
        blocks: [
          { type: 'text', body: {
            ru: ['Так же работают: <b>encantar</b> (очень нравиться, обожать), <b>interesar</b> (интересовать), <b>doler</b> (болеть; o → ue).',
                 '<i>Me encanta</i> уже значит «очень нравится», поэтому <i>mucho</i> к нему не добавляют.'],
            en: ['These work the same way: <b>encantar</b> (to love), <b>interesar</b> (to interest), <b>doler</b> (to hurt; o → ue).',
                 '<i>Me encanta</i> already means “I love it”, so don’t add <i>mucho</i>.'] } },
          { type: 'table', heading: { ru: 'Глаголы как gustar', en: 'Verbs like gustar' },
            head: [{ ru: 'Глагол', en: 'Verb' }, { ru: 'Значение', en: 'Meaning' }, { ru: 'Пример', en: 'Example' }],
            rows: [
              ['encantar', { ru: 'очень нравиться', en: 'to love' }, 'Me encanta el mar.'],
              ['interesar', { ru: 'интересовать', en: 'to interest' }, '¿Te interesa el arte?'],
              ['doler (o → ue)', { ru: 'болеть', en: 'to hurt' }, 'Me duele la cabeza.'],
              ['apetecer', { ru: 'хотеться', en: 'to feel like' }, '¿Te apetece un café?'],
              ['molestar', { ru: 'мешать, раздражать', en: 'to bother' }, 'Me molesta el ruido.'],
              ['importar', { ru: 'быть важным', en: 'to matter, to mind' }, 'No me importa.']
            ] },
          { type: 'conj', heading: { ru: 'Что болит', en: 'What hurts' }, verbs: [
            { inf: 'doler', tr: { ru: 'болеть · o → ue', en: 'to hurt · o → ue' }, variants: [
              { label: 'duele', color: 'blue', rows: [['a mí', 'me <b>duele</b> la cabeza'], ['a ti', 'te <b>duele</b> la espalda'], ['a él / ella', 'le <b>duele</b> el estómago'], ['a nosotros', 'nos <b>duele</b> la garganta']] },
              { label: 'duelen', color: 'amber', rows: [['a mí', 'me <b>duelen</b> los pies'], ['a ti', 'te <b>duelen</b> los ojos'], ['a él / ella', 'le <b>duelen</b> las piernas'], ['a nosotros', 'nos <b>duelen</b> las manos']] }
            ] }
          ] },
          { type: 'text', body: {
            ru: ['<b>С doler — артикль, не «мой»:</b> <i>Me duele la cabeza</i>, а не <i>Me duele mi cabeza</i>. Кому больно, уже видно по <i>me</i>.'],
            en: ['<b>With doler use the article, not “my”:</b> <i>Me duele la cabeza</i>, not <i>Me duele mi cabeza</i>. The <i>me</i> already shows whose head it is.'] } },
          { type: 'text', body: {
            ru: ['<b>Apetecer</b> — «хотеться» (прежде всего в Испании): <i>¿Te apetece ir al cine?</i> — «Хочешь сходить в кино?»'],
            en: ['<b>Apetecer</b> means “to feel like” (used mainly in Spain): <i>¿Te apetece ir al cine?</i> — “Do you fancy going to the cinema?”'] } },
          { type: 'examples', heading: { ru: 'Похожие глаголы в речи', en: 'Similar verbs in use' }, items: [
            { color: 'blue', es: 'Me <b>encanta</b> la música latina.', ru: 'Я обожаю латиноамериканскую музыку.', en: 'I love Latin music.' },
            { color: 'amber', es: 'Nos <b>encantan</b> los mercados de Barcelona.', ru: 'Мы обожаем рынки Барселоны.', en: 'We love Barcelona’s markets.' },
            { color: 'blue', es: '¿Te <b>interesa</b> el arte?', ru: 'Тебя интересует искусство?', en: 'Are you interested in art?' },
            { color: 'amber', es: 'Me <b>duelen</b> los pies.', ru: 'У меня болят ноги.', en: 'My feet hurt.' },
            { color: 'blue', es: 'A mi abuela le <b>duele</b> la espalda.', ru: 'У моей бабушки болит спина.', en: 'My grandmother’s back hurts.' },
            { color: 'blue', es: '¿Te <b>apetece</b> ir al cine?', ru: 'Хочешь сходить в кино?', en: 'Do you fancy going to the cinema?' },
            { color: 'blue', es: 'Me <b>molesta</b> el ruido de la calle.', ru: 'Меня раздражает шум с улицы.', en: 'The street noise bothers me.' }
          ] }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Свободное время', en: 'Free time' }, items: [
            { color: 'blue', es: '¿Qué te <b>gusta</b> hacer los fines de semana?', ru: 'Что ты любишь делать по выходным?', en: 'What do you like doing at weekends?' },
            { color: 'blue', es: '¿Os <b>gusta</b> viajar en tren?', ru: 'Вам нравится ездить на поезде?', en: 'Do you all like travelling by train?' },
            { color: 'blue', es: 'Nos <b>encanta</b> esta playa.', ru: 'Мы обожаем этот пляж.', en: 'We love this beach.' },
            { color: 'amber', es: 'A Carmen le <b>interesan</b> los idiomas.', ru: 'Кармен интересуется языками.', en: 'Carmen is interested in languages.' }
          ] },
          { type: 'examples', heading: { ru: 'Дом и работа', en: 'Home and work' }, items: [
            { color: 'amber', es: 'A mis hijos no les <b>gustan</b> las verduras.', ru: 'Мои дети не любят овощи.', en: 'My children don’t like vegetables.' },
            { color: 'blue', es: 'Me <b>gusta</b> mucho mi trabajo.', ru: 'Мне очень нравится моя работа.', en: 'I really like my job.' },
            { color: 'blue', es: 'A mi jefe no le <b>gusta</b> llegar tarde.', ru: 'Мой начальник не любит опаздывать.', en: 'My boss doesn’t like being late.' },
            { color: 'blue', es: '¿Te <b>gusta</b> el piso nuevo? — Sí, me <b>encanta</b>.', ru: 'Тебе нравится новая квартира? — Да, очень!', en: 'Do you like the new flat? — Yes, I love it.' },
            { color: 'amber', es: 'No me <b>gustan</b> nada los lunes.', ru: 'Я совсем не люблю понедельники.', en: 'I don’t like Mondays at all.' },
            { color: 'amber', es: 'Después del partido me <b>duelen</b> las piernas.', ru: 'После матча у меня болят ноги.', en: 'My legs hurt after the match.' }
          ] }
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
