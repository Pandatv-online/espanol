// B1 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('B1', [
  {
    id: 'b1-futuro-condicional', level: 'B1',
    title: { ru: 'Futuro simple и Condicional simple', en: 'Futuro simple and Condicional simple' },
    hero: {
      es: 'Futuro <b>y</b> Condicional',
      sub: { ru: 'Будущее время (hablaré) и условное наклонение (hablaría): образование, неправильные основы, употребление',
             en: 'The future (hablaré) and the conditional (hablaría): forms, irregular stems and uses' }
    },
    tabs: [
      {
        id: 'futuro', label: { ru: 'Futuro', en: 'Futuro' },
        blocks: [
          { type: 'rules', heading: { ru: 'Как образуется', en: 'How it is formed' }, items: [
            { color: 'blue', label: { ru: 'Будущее', en: 'Future' }, title: { ru: 'Futuro simple', en: 'Futuro simple' }, es: 'infinitivo + -é, -ás, -á…',
              body: { ru: 'Строится от <b>целого инфинитива</b>, окончания одни для -ar, -er и -ir: <i>hablar → hablaré, comer → comeré, vivir → viviremos</i>.',
                      en: 'Built on the <b>whole infinitive</b>, with the same endings for -ar, -er and -ir: <i>hablar → hablaré, comer → comeré, vivir → viviremos</i>.' } },
            { color: 'blue', label: { ru: 'Окончания', en: 'Endings' }, title: { ru: 'Одни на всех', en: 'One set for all' }, es: '-é, -ás, -á, -emos, -éis, -án',
              body: { ru: 'Ударение всегда на окончании. Тильда пишется везде, <b>кроме nosotros</b>: <i>hablaré, hablarás</i>, но <i>hablaremos</i>.',
                      en: 'The stress always falls on the ending. The written accent appears everywhere <b>except nosotros</b>: <i>hablaré, hablarás</i>, but <i>hablaremos</i>.' } }
          ] },
          { type: 'text', body: {
            ru: ['Переключайте <b>правильный</b> / <b>неправильный</b> глагол в каждой карточке: окончания одинаковые, меняется только основа.'],
            en: ['Switch between the <b>regular</b> and the <b>irregular</b> verb on each card: the endings are the same, only the stem changes.'] } },
          { type: 'conj', heading: { ru: 'Правильные и неправильные', en: 'Regular and irregular' }, verbs: [
            { inf: 'hablar · hacer', tr: { ru: 'говорить · делать', en: 'to speak · to do' }, variants: [
              { label: { ru: 'правильный', en: 'regular' }, color: 'blue', rows: [['yo', 'hablar<b>é</b>'], ['tú', 'hablar<b>ás</b>'], ['él / ella', 'hablar<b>á</b>'], ['nosotros', 'hablar<b>emos</b>'], ['vosotros', 'hablar<b>éis</b>'], ['ellos', 'hablar<b>án</b>']] },
              { label: { ru: 'неправильный', en: 'irregular' }, color: 'coral', rows: [['yo', '<b>har</b>é'], ['tú', '<b>har</b>ás'], ['él / ella', '<b>har</b>á'], ['nosotros', '<b>har</b>emos'], ['vosotros', '<b>har</b>éis'], ['ellos', '<b>har</b>án']] }
            ] },
            { inf: 'comer · tener', tr: { ru: 'есть · иметь', en: 'to eat · to have' }, variants: [
              { label: { ru: 'правильный', en: 'regular' }, color: 'blue', rows: [['yo', 'comer<b>é</b>'], ['tú', 'comer<b>ás</b>'], ['él / ella', 'comer<b>á</b>'], ['nosotros', 'comer<b>emos</b>'], ['vosotros', 'comer<b>éis</b>'], ['ellos', 'comer<b>án</b>']] },
              { label: { ru: 'неправильный', en: 'irregular' }, color: 'coral', rows: [['yo', '<b>tendr</b>é'], ['tú', '<b>tendr</b>ás'], ['él / ella', '<b>tendr</b>á'], ['nosotros', '<b>tendr</b>emos'], ['vosotros', '<b>tendr</b>éis'], ['ellos', '<b>tendr</b>án']] }
            ] },
            { inf: 'vivir · salir', tr: { ru: 'жить · выходить', en: 'to live · to go out' }, variants: [
              { label: { ru: 'правильный', en: 'regular' }, color: 'blue', rows: [['yo', 'vivir<b>é</b>'], ['tú', 'vivir<b>ás</b>'], ['él / ella', 'vivir<b>á</b>'], ['nosotros', 'vivir<b>emos</b>'], ['vosotros', 'vivir<b>éis</b>'], ['ellos', 'vivir<b>án</b>']] },
              { label: { ru: 'неправильный', en: 'irregular' }, color: 'coral', rows: [['yo', '<b>saldr</b>é'], ['tú', '<b>saldr</b>ás'], ['él / ella', '<b>saldr</b>á'], ['nosotros', '<b>saldr</b>emos'], ['vosotros', '<b>saldr</b>éis'], ['ellos', '<b>saldr</b>án']] }
            ] }
          ] },
          { type: 'table', heading: { ru: 'Неправильные основы', en: 'Irregular stems' },
            head: ['infinitivo', 'raíz', 'futuro (yo)', 'condicional (yo)'],
            rows: [
              ['tener', 'tendr-', 'tendré', 'tendría'],
              ['poner', 'pondr-', 'pondré', 'pondría'],
              ['salir', 'saldr-', 'saldré', 'saldría'],
              ['venir', 'vendr-', 'vendré', 'vendría'],
              ['valer', 'valdr-', 'valdré', 'valdría'],
              ['poder', 'podr-', 'podré', 'podría'],
              ['saber', 'sabr-', 'sabré', 'sabría'],
              ['querer', 'querr-', 'querré', 'querría'],
              ['haber', 'habr-', 'habré', 'habría'],
              ['caber', 'cabr-', 'cabré', 'cabría'],
              ['hacer', 'har-', 'haré', 'haría'],
              ['decir', 'dir-', 'diré', 'diría']
            ] },
          { type: 'text', color: 'coral', body: {
            ru: ['У дюжины частых глаголов меняется основа, окончания те же. Основа одинакова в обоих временах: <i>tendré — tendría</i>.',
                 'Три группы: <b>гласная → d</b> (<i>tener, poner, salir, venir, valer</i>); <b>выпадает -e-</b> (<i>poder, saber, querer, haber, caber</i>); <b>свои основы</b> (<i>hacer → har-, decir → dir-</i>).',
                 'Также <b>haber → habr-</b> (<i>habrá</i> — «будет, найдётся»), <b>caber → cabr-</b>, <b>valer → valdr-</b>.'],
            en: ['About a dozen common verbs change their stem; the endings stay the same. The stem is the same in both tenses: <i>tendré — tendría</i>.',
                 'Three groups: <b>vowel → d</b> (<i>tener, poner, salir, venir, valer</i>); <b>the -e- drops out</b> (<i>poder, saber, querer, haber, caber</i>); <b>stems of their own</b> (<i>hacer → har-, decir → dir-</i>).',
                 'Also <b>haber → habr-</b> (<i>habrá</i> — “there will be”), <b>caber → cabr-</b>, <b>valer → valdr-</b>.'] } },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Производные наследуют основу:</b> <i>mantener → mantendré</i>, <i>suponer → supondré</i>, <i>componer → compondré</i>, <i>deshacer → desharé</i>, <i>convenir → convendrá</i>.'],
            en: ['<b>Derived verbs inherit the stem:</b> <i>mantener → mantendré</i>, <i>suponer → supondré</i>, <i>componer → compondré</i>, <i>deshacer → desharé</i>, <i>convenir → convendrá</i>.'] } }
        ]
      },
      {
        id: 'condicional', label: { ru: 'Condicional', en: 'Condicional' },
        blocks: [
          { type: 'rules', heading: { ru: 'Как образуется', en: 'How it is formed' }, items: [
            { color: 'amber', label: { ru: 'Условное', en: 'Conditional' }, title: { ru: 'Condicional simple', en: 'Condicional simple' }, es: 'infinitivo + -ía, -ías, -ía…',
              body: { ru: 'Тот же принцип, что у Futuro: <b>целый инфинитив</b> + окончание, одно для всех групп. По-русски — «бы»: <i>hablaría</i> — «я бы поговорил».',
                      en: 'The same idea as the Futuro: the <b>whole infinitive</b> + an ending shared by all groups. In English it is “would”: <i>hablaría</i> — “I would speak”.' } },
            { color: 'amber', label: { ru: 'Окончания', en: 'Endings' }, title: { ru: 'Тильда везде', en: 'Accent everywhere' }, es: '-ía, -ías, -ía, -íamos, -íais, -ían',
              body: { ru: 'На <b>í</b> тильда во всех лицах. Формы <b>yo</b> и <b>él</b> совпадают: <i>(yo / él) hablaría</i> — если неясно, кто, добавьте местоимение.',
                      en: 'The <b>í</b> carries an accent in every person. The <b>yo</b> and <b>él</b> forms are identical: <i>(yo / él) hablaría</i> — add the pronoun if it is unclear who.' } }
          ] },
          { type: 'text', body: {
            ru: ['Переключайте <b>Futuro</b> / <b>Condicional</b> у каждого глагола: основа одна, меняются только окончания. Следите за ударениями — они обязательны.'],
            en: ['Switch between <b>Futuro</b> and <b>Condicional</b> for each verb: the stem is the same, only the endings change. Mind the accents — they are required.'] } },
          { type: 'conj', heading: { ru: 'Futuro или Condicional', en: 'Futuro or Condicional' }, verbs: [
            { inf: 'hablar', tr: { ru: '-ar · говорить', en: '-ar · to speak' }, variants: [
              { label: 'Futuro', color: 'blue', rows: [['yo', 'hablar<b>é</b>'], ['tú', 'hablar<b>ás</b>'], ['él / ella', 'hablar<b>á</b>'], ['nosotros', 'hablar<b>emos</b>'], ['vosotros', 'hablar<b>éis</b>'], ['ellos', 'hablar<b>án</b>']] },
              { label: 'Condicional', color: 'amber', rows: [['yo', 'hablar<b>ía</b>'], ['tú', 'hablar<b>ías</b>'], ['él / ella', 'hablar<b>ía</b>'], ['nosotros', 'hablar<b>íamos</b>'], ['vosotros', 'hablar<b>íais</b>'], ['ellos', 'hablar<b>ían</b>']] }
            ] },
            { inf: 'comer', tr: { ru: '-er · есть', en: '-er · to eat' }, variants: [
              { label: 'Futuro', color: 'blue', rows: [['yo', 'comer<b>é</b>'], ['tú', 'comer<b>ás</b>'], ['él / ella', 'comer<b>á</b>'], ['nosotros', 'comer<b>emos</b>'], ['vosotros', 'comer<b>éis</b>'], ['ellos', 'comer<b>án</b>']] },
              { label: 'Condicional', color: 'amber', rows: [['yo', 'comer<b>ía</b>'], ['tú', 'comer<b>ías</b>'], ['él / ella', 'comer<b>ía</b>'], ['nosotros', 'comer<b>íamos</b>'], ['vosotros', 'comer<b>íais</b>'], ['ellos', 'comer<b>ían</b>']] }
            ] },
            { inf: 'vivir', tr: { ru: '-ir · жить', en: '-ir · to live' }, variants: [
              { label: 'Futuro', color: 'blue', rows: [['yo', 'vivir<b>é</b>'], ['tú', 'vivir<b>ás</b>'], ['él / ella', 'vivir<b>á</b>'], ['nosotros', 'vivir<b>emos</b>'], ['vosotros', 'vivir<b>éis</b>'], ['ellos', 'vivir<b>án</b>']] },
              { label: 'Condicional', color: 'amber', rows: [['yo', 'vivir<b>ía</b>'], ['tú', 'vivir<b>ías</b>'], ['él / ella', 'vivir<b>ía</b>'], ['nosotros', 'vivir<b>íamos</b>'], ['vosotros', 'vivir<b>íais</b>'], ['ellos', 'vivir<b>ían</b>']] }
            ] },
            { inf: 'poder', tr: { ru: 'мочь · основа podr-', en: 'can · stem podr-' }, variants: [
              { label: 'Futuro', color: 'blue', rows: [['yo', 'podr<b>é</b>'], ['tú', 'podr<b>ás</b>'], ['él / ella', 'podr<b>á</b>'], ['nosotros', 'podr<b>emos</b>'], ['vosotros', 'podr<b>éis</b>'], ['ellos', 'podr<b>án</b>']] },
              { label: 'Condicional', color: 'amber', rows: [['yo', 'podr<b>ía</b>'], ['tú', 'podr<b>ías</b>'], ['él / ella', 'podr<b>ía</b>'], ['nosotros', 'podr<b>íamos</b>'], ['vosotros', 'podr<b>íais</b>'], ['ellos', 'podr<b>ían</b>']] }
            ] },
            { inf: 'decir', tr: { ru: 'сказать · основа dir-', en: 'to say · stem dir-' }, variants: [
              { label: 'Futuro', color: 'blue', rows: [['yo', 'dir<b>é</b>'], ['tú', 'dir<b>ás</b>'], ['él / ella', 'dir<b>á</b>'], ['nosotros', 'dir<b>emos</b>'], ['vosotros', 'dir<b>éis</b>'], ['ellos', 'dir<b>án</b>']] },
              { label: 'Condicional', color: 'amber', rows: [['yo', 'dir<b>ía</b>'], ['tú', 'dir<b>ías</b>'], ['él / ella', 'dir<b>ía</b>'], ['nosotros', 'dir<b>íamos</b>'], ['vosotros', 'dir<b>íais</b>'], ['ellos', 'dir<b>ían</b>']] }
            ] }
          ] },
          { type: 'text', body: {
            ru: ['<b>Не путайте с Imperfecto:</b> у -er / -ir окончания похожи, но в Condicional перед ними стоит весь инфинитив. <i>comería</i> — «я бы поел», <i>comía</i> — «я ел (обычно)».'],
            en: ['<b>Don’t confuse it with the Imperfecto:</b> the -er / -ir endings look alike, but the Condicional keeps the whole infinitive in front. <i>comería</i> — “I would eat”, <i>comía</i> — “I used to eat”.'] } },
          { type: 'examples', heading: { ru: 'Condicional в речи', en: 'Condicional in use' }, items: [
            { color: 'amber', es: '¿Me <b>pasarías</b> la sal?', ru: 'Не передашь мне соль?', en: 'Would you pass me the salt?' },
            { color: 'amber', es: 'Con más tiempo, <b>aprenderíamos</b> alemán.', ru: 'Будь у нас больше времени, мы бы выучили немецкий.', en: 'With more time, we would learn German.' },
            { color: 'amber', es: '<b>Sería</b> genial vivir cerca del mar.', ru: 'Было бы здорово жить у моря.', en: 'It would be great to live near the sea.' },
            { color: 'amber', es: 'Ellos nunca <b>dirían</b> eso.', ru: 'Они бы никогда такого не сказали.', en: 'They would never say that.' }
          ] }
        ]
      },
      {
        id: 'use', label: { ru: 'Употребление', en: 'Uses' },
        blocks: [
          { type: 'triggers', heading: { ru: 'Futuro', en: 'Futuro' }, items: [
            { num: '1', color: 'blue', title: { ru: 'Прогноз', en: 'Prediction' }, sub: { ru: 'что будет', en: 'what will happen' },
              phrases: ['mañana', 'según la previsión', 'dentro de diez años'],
              ex: { es: 'Según la previsión, el sábado <b>lloverá</b>.', ru: 'По прогнозу, в субботу будет дождь.', en: 'According to the forecast, it will rain on Saturday.' } },
            { num: '2', color: 'blue', title: { ru: 'Обещание, решение', en: 'Promise, decision' }, sub: { ru: 'беру на себя', en: 'I commit to it' },
              phrases: ['te prometo que', 'ya verás', 'no te preocupes'],
              ex: { es: 'Te <b>llamaré</b> esta noche, te lo prometo.', ru: 'Я позвоню тебе вечером, обещаю.', en: 'I’ll call you tonight, I promise.' } },
            { num: '3', color: 'blue', title: { ru: 'Планы подальше', en: 'Longer-term plans' }, sub: { ru: 'не на завтра', en: 'not for tomorrow' },
              phrases: ['el año que viene', 'algún día', 'en el futuro'],
              ex: { es: 'Algún día <b>tendré</b> mi propia casa.', ru: 'Когда-нибудь у меня будет свой дом.', en: 'One day I’ll have my own house.' } },
            { num: '4', color: 'blue', title: { ru: 'Реальное условие', en: 'Real condition' }, sub: { ru: 'si + presente → futuro', en: 'si + present → future' },
              phrases: ['si + presente'],
              ex: { es: 'Si llueve, nos <b>quedaremos</b> en casa.', ru: 'Если пойдёт дождь, мы останемся дома.', en: 'If it rains, we’ll stay at home.' } }
          ] },
          { type: 'triggers', heading: { ru: 'Condicional', en: 'Condicional' }, items: [
            { num: '5', color: 'amber', title: { ru: 'Вежливая просьба', en: 'Polite request' }, sub: { ru: 'мягче, чем presente', en: 'softer than the present' },
              phrases: ['¿podría…?', '¿te importaría…?', '¿sería posible…?'],
              ex: { es: '¿Te <b>importaría</b> esperar un momento?', ru: 'Ты не мог бы немного подождать?', en: 'Would you mind waiting a moment?' } },
            { num: '6', color: 'amber', title: { ru: 'Желание', en: 'Wish' }, sub: { ru: 'я бы хотел', en: 'I would like' },
              phrases: ['me gustaría', 'me encantaría', 'preferiría'],
              ex: { es: 'Me <b>encantaría</b> conocer a tus padres.', ru: 'Я был бы очень рад познакомиться с твоими родителями.', en: 'I’d love to meet your parents.' } },
            { num: '7', color: 'amber', title: { ru: 'Совет', en: 'Advice' }, sub: { ru: 'на твоём месте я бы…', en: 'if I were you…' },
              phrases: ['yo que tú', 'yo en tu lugar', 'deberías', 'tendrías que'],
              ex: { es: '<b>Deberías</b> dormir más.', ru: 'Тебе стоило бы больше спать.', en: 'You should sleep more.' } },
            { num: '8', color: 'amber', title: { ru: 'Будущее в прошлом', en: 'Future in the past' }, sub: { ru: 'в пересказе', en: 'in reported speech' },
              phrases: ['dijo que', 'pensaba que', 'sabía que'],
              ex: { es: 'Pensaba que el examen <b>sería</b> más difícil.', ru: 'Я думал, что экзамен будет сложнее.', en: 'I thought the exam would be harder.' } },
            { num: '9', color: 'amber', title: { ru: 'Гипотеза', en: 'Hypothesis' }, sub: { ru: 'при другом раскладе', en: 'if things were different' },
              phrases: ['con más dinero', 'en tu lugar', 'sin ti'],
              ex: { es: 'Sin ti, no <b>podría</b> hacerlo.', ru: 'Без тебя я бы не смог это сделать.', en: 'I couldn’t do it without you.' } }
          ] },
          { type: 'text', body: {
            ru: ['<b>Futuro или ir a?</b> Для близких планов и того, что уже видно по ситуации, чаще говорят <i>ir a + инфинитив</i>: <i>Voy a cenar con Ana</i>. Futuro звучит отстранённее: прогноз, обещание, план подальше.'],
            en: ['<b>Futuro or ir a?</b> For near plans and things you can already see coming, people more often say <i>ir a + infinitive</i>: <i>Voy a cenar con Ana</i>. The Futuro sounds more distant: a forecast, a promise, a longer-term plan.'] } },
          { type: 'table', heading: { ru: 'Одна фраза — два смысла', en: 'One sentence, two meanings' },
            head: [{ ru: 'Смысл', en: 'Meaning' }, 'Futuro', 'Condicional'],
            rows: [
              [{ ru: 'Помощь', en: 'Help' }, 'Te ayudaré.', 'Te ayudaría.'],
              [{ ru: 'Вопрос', en: 'Question' }, '¿Vendrás mañana?', '¿Vendrías mañana?'],
              [{ ru: 'Что это значит', en: 'What it means' }, { ru: 'точно сделаю', en: 'I will, for sure' }, { ru: 'сделал бы (если…)', en: 'I would (if…)' }]
            ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { badge: 'F', color: 'blue', es: 'El año que viene <b>viviré</b> en Valencia.', ru: 'В следующем году я буду жить в Валенсии.', en: 'Next year I’ll live in Valencia.' },
            { badge: 'F', color: 'blue', es: 'Mañana <b>hará</b> calor.', ru: 'Завтра будет жарко.', en: 'It will be hot tomorrow.' },
            { badge: 'C', color: 'amber', es: '¿<b>Podrías</b> cerrar la ventana?', ru: 'Ты не мог бы закрыть окно?', en: 'Could you close the window?' },
            { badge: 'C', color: 'amber', es: 'Me <b>gustaría</b> viajar a Perú.', ru: 'Я бы хотел съездить в Перу.', en: 'I’d like to travel to Peru.' },
            { badge: 'C', color: 'amber', es: 'Yo que tú, <b>hablaría</b> con ella.', ru: 'На твоём месте я бы поговорил с ней.', en: 'If I were you, I’d talk to her.' },
            { badge: 'C', color: 'amber', es: 'Ana me dijo que <b>vendría</b> a la fiesta.', ru: 'Ана сказала мне, что придёт на праздник.', en: 'Ana told me she would come to the party.' }
          ] },
          { type: 'tip', title: { ru: 'Как выбрать', en: 'How to choose' }, body: {
            ru: ['Это <b>точно будет</b> — прогноз, обещание, план? → <b>Futuro</b>.',
                 'Это «<b>бы</b>» — вежливость, мечта, совет, «при другом раскладе» или будущее, рассказанное из прошлого? → <b>Condicional</b>.'],
            en: ['Is it <b>going to happen</b> — a forecast, a promise, a plan? → <b>Futuro</b>.',
                 'Is it a “<b>would</b>” — politeness, a dream, advice, “if things were different”, or the future told from the past? → <b>Condicional</b>.'] } }
        ]
      },
      {
        id: 'probability', label: { ru: 'Вероятность', en: 'Probability' },
        blocks: [
          { type: 'rules', heading: { ru: 'Догадка', en: 'A guess' }, items: [
            { color: 'blue', label: { ru: 'Догадка', en: 'Guess' }, title: { ru: 'О настоящем → Futuro', en: 'About now → Futuro' }, es: 'estará = probablemente está',
              body: { ru: 'Futuro может значить не «будет», а «<b>наверное, сейчас</b>». <i>¿Dónde está Luis? — Estará en el trabajo</i> — «Наверное, на работе».',
                      en: 'The Futuro can mean not “will” but “<b>probably, right now</b>”. <i>¿Dónde está Luis? — Estará en el trabajo</i> — “He must be at work”.' } },
            { color: 'amber', label: { ru: 'Догадка', en: 'Guess' }, title: { ru: 'О прошлом → Condicional', en: 'About the past → Condicional' }, es: 'estaría = probablemente estaba',
              body: { ru: 'Та же логика на шаг назад: Condicional — «<b>наверное, тогда</b>». <i>Serían las diez</i> — «было, наверное, десять».',
                      en: 'The same logic one step back: the Condicional means “<b>probably, back then</b>”. <i>Serían las diez</i> — “it must have been about ten”.' } }
          ] },
          { type: 'text', body: {
            ru: ['Переключайте <b>сейчас</b> / <b>тогда</b>: в каждой вкладке уверенный ответ и догадка.'],
            en: ['Switch between <b>now</b> and <b>back then</b>: each tab shows a sure answer and a guess.'] } },
          { type: 'conj', heading: { ru: 'Сейчас или тогда', en: 'Now or then' }, verbs: [
            { inf: '¿Dónde está Luis?', tr: { ru: 'где Луис?', en: 'where is Luis?' }, variants: [
              { label: { ru: 'сейчас', en: 'now' }, color: 'blue', rows: [['seguro', 'Está en el trabajo.'], ['suposición', '<b>Estará</b> en el trabajo.']] },
              { label: { ru: 'тогда', en: 'back then' }, color: 'amber', rows: [['seguro', 'Estaba en el trabajo.'], ['suposición', '<b>Estaría</b> en el trabajo.']] }
            ] },
            { inf: '¿Qué hora es?', tr: { ru: 'который час?', en: 'what time is it?' }, variants: [
              { label: { ru: 'сейчас', en: 'now' }, color: 'blue', rows: [['seguro', 'Son las diez.'], ['suposición', '<b>Serán</b> las diez.']] },
              { label: { ru: 'тогда', en: 'back then' }, color: 'amber', rows: [['seguro', 'Eran las diez.'], ['suposición', '<b>Serían</b> las diez.']] }
            ] }
          ] },
          { type: 'text', body: {
            ru: ['<b>В вопросе</b> это «интересно, …?», «что же…?»: <i>¿Dónde estará mi móvil?</i> — «Куда же подевался мой телефон?». Ответа от собеседника никто не ждёт.'],
            en: ['<b>In a question</b> it means “I wonder…”: <i>¿Dónde estará mi móvil?</i> — “Where on earth is my phone?”. Nobody really expects an answer.'] } },
          { type: 'markers', heading: { ru: 'Синонимы', en: 'Synonyms' }, groups: [
            { color: 'purple', title: { ru: 'То же другими словами', en: 'Same idea, other words' },
              tags: ['probablemente', 'seguramente', 'supongo que', 'debe de', 'a lo mejor'] }
          ] },
          { type: 'examples', heading: { ru: 'Догадки в речи', en: 'Guesses in use' }, items: [
            { badge: 'F', color: 'blue', es: 'No sé dónde está Luis. <b>Estará</b> en el trabajo.', ru: 'Не знаю, где Луис. Наверное, на работе.', en: 'I don’t know where Luis is. He must be at work.' },
            { badge: 'F', color: 'blue', es: '¿Quién <b>será</b> a estas horas?', ru: 'Кто бы это мог быть в такое время?', en: 'Who could that be at this hour?' },
            { badge: 'F', color: 'blue', es: 'Marta no contesta. <b>Tendrá</b> el móvil apagado.', ru: 'Марта не отвечает. Наверное, у неё выключен телефон.', en: 'Marta isn’t answering. She must have her phone off.' },
            { badge: 'F', color: 'blue', es: '¿Cuántos años <b>tendrá</b> el profesor?', ru: 'Интересно, сколько лет преподавателю?', en: 'I wonder how old the teacher is.' },
            { badge: 'C', color: 'amber', es: 'Cuando llegamos, <b>serían</b> las once.', ru: 'Когда мы пришли, было, наверное, одиннадцать.', en: 'When we arrived, it must have been about eleven.' },
            { badge: 'C', color: 'amber', es: 'Ayer no vino a clase. <b>Estaría</b> enfermo.', ru: 'Вчера он не пришёл на занятие. Наверное, болел.', en: 'He didn’t come to class yesterday. He was probably ill.' }
          ] }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Futuro в речи', en: 'Futuro in use' }, items: [
            { color: 'blue', es: 'Mañana <b>tendremos</b> una reunión con el cliente.', ru: 'Завтра у нас будет встреча с клиентом.', en: 'Tomorrow we’ll have a meeting with the client.' },
            { color: 'blue', es: '¿A qué hora <b>saldréis</b> de casa?', ru: 'Во сколько вы выйдете из дома?', en: 'What time will you leave home?' },
            { color: 'blue', es: 'No te preocupes, te lo <b>diré</b> todo.', ru: 'Не волнуйся, я тебе всё расскажу.', en: 'Don’t worry, I’ll tell you everything.' },
            { color: 'blue', es: 'Mis padres <b>vendrán</b> en Navidad.', ru: 'Мои родители приедут на Рождество.', en: 'My parents will come at Christmas.' },
            { color: 'blue', es: 'Este verano <b>haré</b> un curso de surf.', ru: 'Этим летом я пройду курс сёрфинга.', en: 'This summer I’ll do a surfing course.' }
          ] },
          { type: 'examples', heading: { ru: 'Futuro', en: 'Futuro' }, items: [
            { color: 'blue', es: 'Dentro de cinco años <b>hablaréis</b> español perfectamente.', ru: 'Через пять лет вы будете прекрасно говорить по-испански.', en: 'In five years you’ll speak Spanish perfectly.' },
            { color: 'blue', es: 'El tren <b>saldrá</b> a las siete y media.', ru: 'Поезд отправится в половине восьмого.', en: 'The train will leave at half past seven.' },
            { color: 'blue', es: '¿<b>Podrás</b> venir a mi cumpleaños?', ru: 'Ты сможешь прийти на мой день рождения?', en: 'Will you be able to come to my birthday party?' },
            { color: 'blue', es: 'Esta noche <b>habrá</b> mucha gente en la plaza.', ru: 'Сегодня вечером на площади будет много народу.', en: 'There will be lots of people in the square tonight.' },
            { color: 'blue', es: 'Nunca <b>sabremos</b> la verdad.', ru: 'Мы никогда не узнаем правду.', en: 'We’ll never know the truth.' },
            { color: 'blue', es: 'Los niños <b>querrán</b> ir a la playa.', ru: 'Дети захотят пойти на пляж.', en: 'The kids will want to go to the beach.' }
          ] },
          { type: 'examples', heading: { ru: 'Condicional', en: 'Condicional' }, items: [
            { color: 'amber', es: '¿<b>Tendrías</b> un momento para hablar?', ru: 'У тебя не найдётся минутки поговорить?', en: 'Would you have a moment to talk?' },
            { color: 'amber', es: 'Nosotros no <b>pondríamos</b> tanto azúcar.', ru: 'Мы бы не клали столько сахара.', en: 'We wouldn’t put so much sugar in.' },
            { color: 'amber', es: 'En tu lugar, yo no <b>saldría</b> con este tiempo.', ru: 'На твоём месте я бы не выходил в такую погоду.', en: 'In your place, I wouldn’t go out in this weather.' },
            { color: 'amber', es: 'El jefe dijo que <b>haría</b> los cambios la semana siguiente.', ru: 'Начальник сказал, что внесёт изменения на следующей неделе.', en: 'The boss said he would make the changes the following week.' },
            { color: 'amber', es: '¿Qué <b>harías</b> con un millón de euros?', ru: 'Что бы ты сделал с миллионом евро?', en: 'What would you do with a million euros?' },
            { color: 'amber', es: 'Os <b>vendría</b> bien un descanso.', ru: 'Вам бы не помешал отдых.', en: 'A break would do you good.' }
          ] }
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
    hero: {
      es: 'Por <b>vs</b> Para',
      sub: { ru: 'Два предлога «для / за / через»: para смотрит на цель, por — на причину и путь',
             en: 'Two prepositions for “for / through / by”: para looks at the goal, por at the cause and the way' }
    },
    tabs: [
      {
        id: 'por', label: { ru: 'Por', en: 'Por' },
        blocks: [
          { type: 'rules', heading: { ru: 'Главная идея', en: 'The core idea' }, items: [
            { color: 'blue', label: { ru: 'Откуда и как', en: 'Where from and how' }, title: { ru: 'Por', en: 'Por' }, es: 'causa · camino · medio · cambio',
              body: { ru: '<b>Por</b> — откуда действие берётся и как проходит: причина, путь, способ, обмен. Вопросы: «почему? через что? каким образом? за сколько?».',
                      en: '<b>Por</b> shows where the action comes from and how it goes: cause, route, means, exchange. It answers “why? through what? how? for how much?”.' } }
          ] },
          { type: 'triggers', heading: { ru: 'Когда por', en: 'When to use por' }, items: [
            { num: '1', color: 'blue', title: { ru: 'Причина', en: 'Cause' }, sub: { ru: 'почему? из-за чего?', en: 'why? because of what?' },
              phrases: ['gracias por', 'por la lluvia', 'por culpa de'],
              ex: { es: 'Llegamos tarde <b>por</b> el tráfico.', ru: 'Мы опоздали из-за пробок.', en: 'We were late because of the traffic.' } },
            { num: '2', color: 'blue', title: { ru: 'Путь, место', en: 'Route, place' }, sub: { ru: 'по, через, где-то рядом', en: 'along, through, around' },
              phrases: ['por el parque', 'por aquí', 'por la ventana'],
              ex: { es: 'El ladrón entró <b>por</b> la ventana.', ru: 'Вор залез через окно.', en: 'The burglar got in through the window.' } },
            { num: '3', color: 'blue', title: { ru: 'Время суток', en: 'Time of day' }, sub: { ru: 'и примерное время', en: 'and approximate time' },
              phrases: ['por la mañana', 'por la tarde', 'por la noche', 'por Navidad'],
              ex: { es: 'Nos vemos <b>por</b> la tarde.', ru: 'Увидимся днём.', en: 'See you in the afternoon.' } },
            { num: '4', color: 'blue', title: { ru: 'Способ, средство', en: 'Means' }, sub: { ru: 'каким образом?', en: 'how? by what means?' },
              phrases: ['por teléfono', 'por correo', 'por internet'],
              ex: { es: 'Te mando las fotos <b>por</b> WhatsApp.', ru: 'Пришлю тебе фотографии по WhatsApp.', en: 'I’ll send you the photos on WhatsApp.' } },
            { num: '5', color: 'blue', title: { ru: 'Цена, обмен', en: 'Price, exchange' }, sub: { ru: 'за сколько? на что?', en: 'for how much? for what?' },
              phrases: ['por cien euros', 'cambiar por'],
              ex: { es: '¿Me cambias este libro <b>por</b> el tuyo?', ru: 'Поменяешь мне эту книгу на свою?', en: 'Will you swap this book for yours?' } },
            { num: '6', color: 'blue', title: { ru: 'Частота, доля', en: 'Frequency, rate' }, sub: { ru: 'в, на, за каждый', en: 'per, a, each' },
              phrases: ['dos veces por semana', 'por hora', 'por persona'],
              ex: { es: 'Son veinte euros <b>por</b> persona.', ru: 'Двадцать евро с человека.', en: 'It’s twenty euros per person.' } },
            { num: '7', color: 'blue', title: { ru: 'Вместо, ради', en: 'Instead of, for the sake of' }, sub: { ru: 'за кого-то', en: 'on someone’s behalf' },
              phrases: ['por ti', 'por mí', 'por los niños'],
              ex: { es: 'Hoy trabajo yo <b>por</b> ti.', ru: 'Сегодня я поработаю за тебя.', en: 'I’ll work for you today.' } },
            { num: '8', color: 'blue', title: { ru: 'Автор в пассиве', en: 'Agent in the passive' }, sub: { ru: 'кем сделано?', en: 'done by whom?' },
              phrases: ['escrito por', 'pintado por', 'diseñado por'],
              ex: { es: 'El Quijote fue escrito <b>por</b> Cervantes.', ru: '«Дон Кихот» написан Сервантесом.', en: 'Don Quixote was written by Cervantes.' } }
          ] },
          { type: 'examples', heading: { ru: 'Примеры с por', en: 'Examples with por' }, items: [
            { color: 'blue', es: 'Gracias <b>por</b> tu ayuda.', ru: 'Спасибо за помощь.', en: 'Thanks for your help.' },
            { color: 'blue', es: 'No salimos <b>por</b> la lluvia.', ru: 'Мы не пошли гулять из-за дождя.', en: 'We didn’t go out because of the rain.' },
            { color: 'blue', es: 'Caminamos <b>por</b> la playa.', ru: 'Мы гуляем по пляжу.', en: 'We walk along the beach.' },
            { color: 'blue', es: 'Hablamos <b>por</b> teléfono dos veces <b>por</b> semana.', ru: 'Мы говорим по телефону два раза в неделю.', en: 'We talk on the phone twice a week.' },
            { color: 'blue', es: 'Compré la bici <b>por</b> cien euros.', ru: 'Я купил велосипед за сто евро.', en: 'I bought the bike for a hundred euros.' },
            { color: 'blue', es: 'Suspendió el examen <b>por</b> no estudiar.', ru: 'Он провалил экзамен, потому что не готовился.', en: 'He failed the exam because he didn’t study.' },
            { color: 'blue', es: '¿Puedes ir tú a la reunión <b>por</b> mí?', ru: 'Можешь сходить на собрание вместо меня?', en: 'Can you go to the meeting for me?' }
          ] }
        ]
      },
      {
        id: 'para', label: { ru: 'Para', en: 'Para' },
        blocks: [
          { type: 'rules', heading: { ru: 'Главная идея', en: 'The core idea' }, items: [
            { color: 'amber', label: { ru: 'Куда и зачем', en: 'Where to and why' }, title: { ru: 'Para', en: 'Para' }, es: 'finalidad · destino · plazo',
              body: { ru: '<b>Para</b> — куда направлено действие: цель, получатель, пункт назначения, срок. Вопросы: «зачем? для кого? куда? к какому сроку?».',
                      en: '<b>Para</b> points to where the action is heading: goal, recipient, destination, deadline. It answers “what for? for whom? where to? by when?”.' } }
          ] },
          { type: 'triggers', heading: { ru: 'Когда para', en: 'When to use para' }, items: [
            { num: '1', color: 'amber', title: { ru: 'Цель', en: 'Purpose' }, sub: { ru: 'para + инфинитив = «чтобы»', en: 'para + infinitive = “in order to”' },
              phrases: ['para + infinitivo', '¿para qué?'],
              ex: { es: 'Voy al gimnasio <b>para</b> estar en forma.', ru: 'Я хожу в спортзал, чтобы быть в форме.', en: 'I go to the gym to keep fit.' } },
            { num: '2', color: 'amber', title: { ru: 'Получатель', en: 'Recipient' }, sub: { ru: 'для кого?', en: 'for whom?' },
              phrases: ['para ti', 'para mi madre'],
              ex: { es: 'Estas flores son <b>para</b> ti.', ru: 'Эти цветы для тебя.', en: 'These flowers are for you.' } },
            { num: '3', color: 'amber', title: { ru: 'Направление', en: 'Destination' }, sub: { ru: 'куда?', en: 'where to?' },
              phrases: ['salir para', 'ir para'],
              ex: { es: 'Mañana salgo <b>para</b> Barcelona.', ru: 'Завтра я уезжаю в Барселону.', en: 'Tomorrow I’m leaving for Barcelona.' } },
            { num: '4', color: 'amber', title: { ru: 'Срок', en: 'Deadline' }, sub: { ru: 'к какому времени?', en: 'by when?' },
              phrases: ['para el lunes', 'para mañana', 'para las cinco'],
              ex: { es: 'Tenéis que terminar el proyecto <b>para</b> el martes.', ru: 'Вы должны закончить проект ко вторнику.', en: 'You have to finish the project by Tuesday.' } },
            { num: '5', color: 'amber', title: { ru: 'Мнение', en: 'Opinion' }, sub: { ru: 'по-моему, для меня', en: 'in my view' },
              phrases: ['para mí', 'para ella'],
              ex: { es: '<b>Para</b> mí, el café está demasiado fuerte.', ru: 'Как по мне, кофе слишком крепкий.', en: 'For me, the coffee is too strong.' } },
            { num: '6', color: 'amber', title: { ru: 'Назначение вещи', en: 'What a thing is for' }, sub: { ru: 'для чего предмет?', en: 'what is it used for?' },
              phrases: ['crema para las manos', 'una taza para el café'],
              ex: { es: 'Necesito una crema <b>para</b> las manos.', ru: 'Мне нужен крем для рук.', en: 'I need some hand cream.' } },
            { num: '7', color: 'amber', title: { ru: 'Сравнение с ожидаемым', en: 'Compared to what’s expected' }, sub: { ru: 'для своего возраста…', en: 'for his age…' },
              phrases: ['para su edad', 'para ser'],
              ex: { es: '<b>Para</b> ser extranjero, habla muy bien español.', ru: 'Для иностранца он очень хорошо говорит по-испански.', en: 'For a foreigner, he speaks Spanish very well.' } },
            { num: '8', color: 'amber', title: { ru: 'Работа на кого-то', en: 'Working for someone' }, sub: { ru: 'кто работодатель', en: 'who the employer is' },
              phrases: ['trabajar para'],
              ex: { es: 'Mi hermana trabaja <b>para</b> una empresa alemana.', ru: 'Моя сестра работает на немецкую компанию.', en: 'My sister works for a German company.' } }
          ] },
          { type: 'examples', heading: { ru: 'Примеры с para', en: 'Examples with para' }, items: [
            { color: 'amber', es: 'Ahorro dinero <b>para</b> comprar un piso.', ru: 'Я коплю деньги, чтобы купить квартиру.', en: 'I’m saving money to buy a flat.' },
            { color: 'amber', es: 'Este regalo es <b>para</b> mi madre.', ru: 'Этот подарок для моей мамы.', en: 'This present is for my mother.' },
            { color: 'amber', es: 'El tren sale <b>para</b> Sevilla.', ru: 'Поезд отправляется в Севилью.', en: 'The train is leaving for Seville.' },
            { color: 'amber', es: 'Necesito el informe <b>para</b> el viernes.', ru: 'Мне нужен отчёт к пятнице.', en: 'I need the report by Friday.' },
            { color: 'amber', es: '<b>Para</b> mí, es fácil.', ru: 'Для меня это легко.', en: 'For me, it’s easy.' },
            { color: 'amber', es: '<b>Para</b> ser tan joven, cocina muy bien.', ru: 'Для своих лет он очень хорошо готовит.', en: 'For someone so young, he cooks really well.' }
          ] }
        ]
      },
      {
        id: 'compare', label: { ru: 'Сравнение', en: 'Compare' },
        blocks: [
          { type: 'text', body: {
            ru: ['<b>Para</b> — куда направлено действие: цель, получатель, пункт назначения, срок. Вопрос «зачем? для кого? куда? к какому сроку?».',
                 '<b>Por</b> — откуда действие берётся и как проходит: причина, путь, способ, обмен. Вопрос «почему? через что? каким образом? за сколько?».'],
            en: ['<b>Para</b> points to where the action is heading: goal, recipient, destination, deadline. It answers “what for? for whom? where to? by when?”.',
                 '<b>Por</b> shows where the action comes from and how it goes: cause, route, means, exchange. It answers “why? through what? how? for how much?”.'] } },
          { type: 'table', heading: { ru: 'Главная идея', en: 'The main idea' },
            head: ['', 'por', 'para'],
            rows: [
              ['causa · finalidad', 'Gracias por la ayuda.', 'Estudio para aprender.'],
              ['lugar', 'Paseo por el parque.', 'Salgo para Madrid.'],
              ['tiempo', 'por la mañana', 'para el lunes'],
              ['medio · destinatario', 'por teléfono', 'para ti']
            ] },
          { type: 'text', body: {
            ru: ['Одна и та же фраза с <b>por</b> и с <b>para</b> — переключайте и сравнивайте смысл.'],
            en: ['The same sentence with <b>por</b> and with <b>para</b> — switch and compare the meaning.'] } },
          { type: 'conj', heading: { ru: 'Одна фраза — два смысла', en: 'One phrase, two meanings' }, verbs: [
            { inf: 'Lo hago … ti', tr: { ru: 'ради тебя или для тебя?', en: 'for your sake or for you?' }, variants: [
              { label: 'por', color: 'blue', rows: [['frase', 'Lo hago <b>por</b> ti.'], ['idea', 'causa: por tu bien']] },
              { label: 'para', color: 'amber', rows: [['frase', 'Lo hago <b>para</b> ti.'], ['idea', 'destinatario: es tuyo']] }
            ] },
            { inf: '¿… qué estudias?', tr: { ru: 'почему или зачем?', en: 'why or what for?' }, variants: [
              { label: 'por', color: 'blue', rows: [['pregunta', '¿<b>Por</b> qué estudias español?'], ['respuesta', 'Porque me encanta.']] },
              { label: 'para', color: 'amber', rows: [['pregunta', '¿<b>Para</b> qué estudias español?'], ['respuesta', 'Para trabajar en México.']] }
            ] },
            { inf: 'El tren … Madrid', tr: { ru: 'через или в?', en: 'through or to?' }, variants: [
              { label: 'por', color: 'blue', rows: [['frase', 'El tren pasa <b>por</b> Madrid.'], ['idea', 'camino: está en la ruta']] },
              { label: 'para', color: 'amber', rows: [['frase', 'El tren sale <b>para</b> Madrid.'], ['idea', 'destino: el final']] }
            ] },
            { inf: 'veinte euros', tr: { ru: 'цена или цель?', en: 'price or goal?' }, variants: [
              { label: 'por', color: 'blue', rows: [['frase', 'Lo compré <b>por</b> veinte euros.'], ['idea', 'precio: el cambio']] },
              { label: 'para', color: 'amber', rows: [['frase', 'Son veinte euros <b>para</b> el regalo.'], ['idea', 'finalidad: el uso']] }
            ] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры попарно', en: 'Examples in pairs' }, items: [
            { badge: 'PO', color: 'blue', es: 'Lo hago <b>por</b> ti.', ru: 'Я делаю это ради тебя.', en: 'I’m doing it for your sake.' },
            { badge: 'PA', color: 'amber', es: 'Lo hago <b>para</b> ti.', ru: 'Я делаю это для тебя (тебе в подарок).', en: 'I’m making it for you (as a gift).' },
            { badge: 'PO', color: 'blue', es: 'Paseamos <b>por</b> el centro.', ru: 'Мы гуляем по центру.', en: 'We’re walking around the centre.' },
            { badge: 'PA', color: 'amber', es: 'Vamos <b>para</b> el centro.', ru: 'Мы едем в центр.', en: 'We’re heading to the centre.' },
            { badge: 'PO', color: 'blue', es: 'Te llamo <b>por</b> la tarde.', ru: 'Позвоню тебе днём.', en: 'I’ll call you in the afternoon.' },
            { badge: 'PA', color: 'amber', es: 'Lo necesito <b>para</b> las cinco.', ru: 'Мне это нужно к пяти часам.', en: 'I need it by five o’clock.' }
          ] },
          { type: 'tip', title: { ru: 'Стрелка', en: 'The arrow' }, body: {
            ru: ['<b>Para</b> → смотрит вперёд, на цель: зачем? для кого? куда? к какому сроку?',
                 '<b>Por</b> ← смотрит назад, на причину, или ↔ вдоль пути: почему? через что? как? за сколько?'],
            en: ['<b>Para</b> → looks ahead at the goal: what for? for whom? where to? by when?',
                 '<b>Por</b> ← looks back at the cause, or ↔ along the way: why? through what? how? for how much?'] } }
        ]
      },
      {
        id: 'phrases', label: { ru: 'Выражения', en: 'Set phrases' },
        blocks: [
          { type: 'text', body: {
            ru: ['Эти выражения просто запомните: <b>por favor</b> (пожалуйста), <b>por fin</b> (наконец), <b>por supuesto</b> (конечно), <b>por eso</b> (поэтому), <b>por ejemplo</b> (например), <b>para siempre</b> (навсегда). Правила здесь не помогут — это готовые блоки.'],
            en: ['Just learn these phrases: <b>por favor</b> (please), <b>por fin</b> (at last), <b>por supuesto</b> (of course), <b>por eso</b> (that’s why), <b>por ejemplo</b> (for example), <b>para siempre</b> (forever). The rules won’t help here — they are ready-made chunks.'] } },
          { type: 'markers', heading: { ru: 'Выражения', en: 'Phrases' }, groups: [
            { color: 'blue', title: { ru: 'С por', en: 'With por' },
              tags: ['por favor', 'por fin', 'por supuesto', 'por eso', 'por ejemplo', 'por cierto', 'por lo menos', 'por si acaso', 'por lo general', 'por primera vez', 'por todas partes', 'por desgracia'] },
            { color: 'amber', title: { ru: 'С para', en: 'With para' },
              tags: ['para siempre', 'para colmo', 'para nada', 'para empezar', 'para variar', 'no es para tanto'] }
          ] },
          { type: 'table', heading: { ru: 'Что они значат', en: 'What they mean' },
            head: ['', { ru: 'Значение', en: 'Meaning' }],
            rows: [
              ['por favor', { ru: 'пожалуйста', en: 'please' }],
              ['por fin', { ru: 'наконец', en: 'at last' }],
              ['por supuesto', { ru: 'конечно', en: 'of course' }],
              ['por eso', { ru: 'поэтому', en: 'that’s why' }],
              ['por ejemplo', { ru: 'например', en: 'for example' }],
              ['por cierto', { ru: 'кстати', en: 'by the way' }],
              ['por lo menos', { ru: 'по крайней мере', en: 'at least' }],
              ['por si acaso', { ru: 'на всякий случай', en: 'just in case' }],
              ['por lo general', { ru: 'как правило', en: 'generally' }],
              ['por desgracia', { ru: 'к сожалению', en: 'unfortunately' }],
              ['para siempre', { ru: 'навсегда', en: 'forever' }],
              ['para colmo', { ru: 'в довершение всего', en: 'to top it all' }],
              ['para nada', { ru: 'совсем не', en: 'not at all' }],
              ['no es para tanto', { ru: 'не так уж страшно', en: 'it’s not a big deal' }]
            ] },
          { type: 'examples', heading: { ru: 'Выражения в речи', en: 'Phrases in use' }, items: [
            { color: 'blue', es: '¡<b>Por fin</b> estás aquí!', ru: 'Наконец-то ты здесь!', en: 'You’re here at last!' },
            { color: 'blue', es: 'Lleva un paraguas <b>por si acaso</b>.', ru: 'Возьми зонт на всякий случай.', en: 'Take an umbrella just in case.' },
            { color: 'blue', es: '<b>Por cierto</b>, ¿has visto a Pedro?', ru: 'Кстати, ты видел Педро?', en: 'By the way, have you seen Pedro?' },
            { color: 'blue', es: 'Hoy no puedo salir, pero <b>por lo menos</b> llámame.', ru: 'Сегодня я не могу выйти, но хотя бы позвони мне.', en: 'I can’t go out today, but at least give me a call.' },
            { color: 'amber', es: 'Llegué tarde y, <b>para colmo</b>, olvidé el móvil.', ru: 'Я опоздал и, в довершение всего, забыл телефон.', en: 'I was late and, to top it all, I forgot my phone.' },
            { color: 'amber', es: 'No me gusta <b>para nada</b> este frío.', ru: 'Мне совсем не нравится этот холод.', en: 'I don’t like this cold at all.' },
            { color: 'amber', es: 'Tranquila, <b>no es para tanto</b>.', ru: 'Спокойно, ничего страшного.', en: 'Relax, it’s not a big deal.' }
          ] }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', items: [
            { badge: 'PO', color: 'blue', es: '¿Hay una farmacia <b>por</b> aquí?', ru: 'Здесь поблизости есть аптека?', en: 'Is there a chemist’s around here?' },
            { badge: 'PA', color: 'amber', es: 'Estas pastillas son <b>para</b> el dolor de cabeza.', ru: 'Эти таблетки от головной боли.', en: 'These pills are for headaches.' },
            { badge: 'PO', color: 'blue', es: 'Os lo envío <b>por</b> correo electrónico.', ru: 'Я пришлю вам это по электронной почте.', en: 'I’ll send it to you by email.' },
            { badge: 'PO', color: 'blue', es: 'Nos quedamos en casa <b>por</b> el frío.', ru: 'Мы остались дома из-за холода.', en: 'We stayed at home because of the cold.' },
            { badge: 'PA', color: 'amber', es: 'Mis amigos trabajan <b>para</b> una empresa japonesa.', ru: 'Мои друзья работают на японскую компанию.', en: 'My friends work for a Japanese company.' },
            { badge: 'PA', color: 'amber', es: 'Salimos <b>para</b> el aeropuerto a las seis.', ru: 'Мы выезжаем в аэропорт в шесть.', en: 'We leave for the airport at six.' },
            { badge: 'PO', color: 'blue', es: 'Este edificio fue diseñado <b>por</b> Gaudí.', ru: 'Это здание спроектировал Гауди.', en: 'This building was designed by Gaudí.' },
            { badge: 'PA', color: 'amber', es: '<b>Para</b> nosotros, lo más importante es la familia.', ru: 'Для нас самое важное — семья.', en: 'For us, family is what matters most.' }
          ] }
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
