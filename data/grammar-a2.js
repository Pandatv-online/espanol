// A2 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('A2', [
  {
    id: 'a2-perfecto-indefinido', level: 'A2',
    title: { ru: 'Pretérito perfecto или indefinido', en: 'Pretérito perfecto vs indefinido' },
    hero: {
      es: 'Perfecto <b>vs</b> Indefinido',
      sub: { ru: 'Прошедшие времена испанского — справочник с примерами и спряжением',
             en: 'Spanish past tenses — a reference with examples and conjugation' }
    },
    tabs: [
      {
        id: 'diff', label: { ru: 'Разница', en: 'Difference' },
        blocks: [
          { type: 'rules', items: [
            { color: 'blue', label: { ru: 'Претерито', en: 'Pretérito' }, title: { ru: 'Perfecto', en: 'Perfecto' }, es: 'haber + participio',
              body: { ru: 'Действие в прошлом, <b>связанное с настоящим</b>: период ещё не завершён или результат ощущается сейчас. <i>He comido.</i>',
                      en: 'A past action <b>connected to the present</b>: the time period is not over yet, or the result is felt now. <i>He comido.</i>' } },
            { color: 'amber', label: { ru: 'Претерито', en: 'Pretérito' }, title: { ru: 'Indefinido', en: 'Indefinido' }, es: '-é, -aste, -ó / -í, -iste, -ió',
              body: { ru: '<b>Завершённое действие</b> в прошлом, отдалённое от настоящего: конкретный момент или период, который уже закончился. <i>Comí.</i>',
                      en: 'A <b>finished action</b> in the past, cut off from the present: a specific moment or a period that is already over. <i>Comí.</i>' } }
          ] },
          { type: 'table', heading: { ru: 'Сравнение', en: 'Side by side' },
            head: [{ ru: 'Критерий', en: 'Criterion' }, 'Perfecto', 'Indefinido'],
            rows: [
              [{ ru: 'Связь с настоящим', en: 'Link to the present' }, { ru: 'есть — важен результат', en: 'yes — the result matters' }, { ru: 'нет — всё в прошлом', en: 'no — all in the past' }],
              [{ ru: 'Период', en: 'Time period' }, { ru: 'незавершённый', en: 'not over yet' }, { ru: 'завершённый', en: 'already over' }],
              [{ ru: 'Пример периода', en: 'Period, e.g.' }, { ru: 'сегодня, эта неделя', en: 'today, this week' }, { ru: 'вчера, прошлый год', en: 'yesterday, last year' }],
              [{ ru: 'Образование', en: 'How it is formed' }, 'he / has / ha… + participio', '-é, -aste, -ó / -í, -iste, -ió'],
              [{ ru: 'Отвечает на вопрос', en: 'Answers the question' }, { ru: 'Что сделал сегодня / в жизни?', en: 'What have you done so far?' }, { ru: 'Что случилось тогда?', en: 'What happened back then?' }],
              [{ ru: 'Пример сигнала', en: 'Signal, e.g.' }, 'Esta semana he trabajado.', 'El año pasado trabajé.']
            ] },
          { type: 'examples', heading: { ru: 'Примеры попарно', en: 'Examples in pairs' }, items: [
            { badge: 'P', color: 'blue', es: '<b>He comido</b> hoy.', ru: 'Я поел сегодня. (день ещё длится)', en: 'I have eaten today. (today is not over)' },
            { badge: 'I', color: 'amber', es: '<b>Comí</b> ayer.', ru: 'Я поел вчера. (вчера уже прошло)', en: 'I ate yesterday. (yesterday is over)' },
            { badge: 'P', color: 'blue', es: '¿<b>Has estado</b> en Madrid?', ru: 'Ты когда-нибудь был в Мадриде?', en: 'Have you ever been to Madrid?' },
            { badge: 'I', color: 'amber', es: '<b>Estuve</b> en Madrid en 2015.', ru: 'Я был в Мадриде в 2015 году.', en: 'I was in Madrid in 2015.' },
            { badge: 'P', color: 'blue', es: 'Este mes <b>he trabajado</b> mucho.', ru: 'В этом месяце я много работал. (месяц не кончился)', en: 'I have worked a lot this month. (the month is not over)' },
            { badge: 'I', color: 'amber', es: 'El año pasado <b>trabajé</b> mucho.', ru: 'В прошлом году я много работал. (год завершён)', en: 'I worked a lot last year. (the year is over)' },
            { badge: 'P', color: 'blue', es: 'Hoy <b>he visto</b> a María.', ru: 'Сегодня я видел Марию.', en: 'I have seen María today.' },
            { badge: 'I', color: 'amber', es: 'Ayer <b>vi</b> a María.', ru: 'Вчера я видел Марию.', en: 'I saw María yesterday.' }
          ] }
        ]
      },
      {
        id: 'conj', label: { ru: 'Спряжение', en: 'Conjugation' },
        blocks: [
          { type: 'text', body: {
            ru: ['Переключайте <b>Perfecto</b> / <b>Indefinido</b> у каждого глагола. Окончания <b>-er</b> и <b>-ir</b> в Indefinido одинаковые.'],
            en: ['Switch between <b>Perfecto</b> and <b>Indefinido</b> for each verb. In the Indefinido, <b>-er</b> and <b>-ir</b> verbs share the same endings.'] } },
          { type: 'conj', verbs: [
            { inf: 'hablar', tr: { ru: '-ar · говорить', en: '-ar · to speak' }, variants: [
              { label: 'Perfecto', color: 'blue', rows: [['yo', 'he habl<b>ado</b>'], ['tú', 'has habl<b>ado</b>'], ['él / ella', 'ha habl<b>ado</b>'], ['nosotros', 'hemos habl<b>ado</b>'], ['vosotros', 'habéis habl<b>ado</b>'], ['ellos', 'han habl<b>ado</b>']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', 'habl<b>é</b>'], ['tú', 'habl<b>aste</b>'], ['él / ella', 'habl<b>ó</b>'], ['nosotros', 'habl<b>amos</b>'], ['vosotros', 'habl<b>asteis</b>'], ['ellos', 'habl<b>aron</b>']] }
            ] },
            { inf: 'comer', tr: { ru: '-er · есть', en: '-er · to eat' }, variants: [
              { label: 'Perfecto', color: 'blue', rows: [['yo', 'he com<b>ido</b>'], ['tú', 'has com<b>ido</b>'], ['él / ella', 'ha com<b>ido</b>'], ['nosotros', 'hemos com<b>ido</b>'], ['vosotros', 'habéis com<b>ido</b>'], ['ellos', 'han com<b>ido</b>']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', 'com<b>í</b>'], ['tú', 'com<b>iste</b>'], ['él / ella', 'com<b>ió</b>'], ['nosotros', 'com<b>imos</b>'], ['vosotros', 'com<b>isteis</b>'], ['ellos', 'com<b>ieron</b>']] }
            ] },
            { inf: 'vivir', tr: { ru: '-ir · жить', en: '-ir · to live' }, variants: [
              { label: 'Perfecto', color: 'blue', rows: [['yo', 'he viv<b>ido</b>'], ['tú', 'has viv<b>ido</b>'], ['él / ella', 'ha viv<b>ido</b>'], ['nosotros', 'hemos viv<b>ido</b>'], ['vosotros', 'habéis viv<b>ido</b>'], ['ellos', 'han viv<b>ido</b>']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', 'viv<b>í</b>'], ['tú', 'viv<b>iste</b>'], ['él / ella', 'viv<b>ió</b>'], ['nosotros', 'viv<b>imos</b>'], ['vosotros', 'viv<b>isteis</b>'], ['ellos', 'viv<b>ieron</b>']] }
            ] }
          ] },
          { type: 'text', color: 'blue', body: {
            ru: ['<b>Participio:</b> глаголы на <b>-ar → -ado</b> (<i>hablar → hablado</i>), на <b>-er / -ir → -ido</b> (<i>comer → comido</i>, <i>vivir → vivido</i>).'],
            en: ['<b>Participle:</b> <b>-ar verbs → -ado</b> (<i>hablar → hablado</i>), <b>-er / -ir verbs → -ido</b> (<i>comer → comido</i>, <i>vivir → vivido</i>).'] } },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Неправильные participios:</b> <i>hacer → hecho</i> · <i>decir → dicho</i> · <i>ver → visto</i> · <i>volver → vuelto</i> · <i>poner → puesto</i> · <i>escribir → escrito</i> · <i>abrir → abierto</i> · <i>romper → roto</i>.'],
            en: ['<b>Irregular participles:</b> <i>hacer → hecho</i> · <i>decir → dicho</i> · <i>ver → visto</i> · <i>volver → vuelto</i> · <i>poner → puesto</i> · <i>escribir → escrito</i> · <i>abrir → abierto</i> · <i>romper → roto</i>.'] } },
          { type: 'examples', heading: { ru: 'Неправильный participio в речи', en: 'Irregular participles in use' }, items: [
            { color: 'blue', es: '¿Qué <b>has hecho</b> este fin de semana?', ru: 'Что ты делал в эти выходные?', en: 'What have you done this weekend?' },
            { color: 'blue', es: 'Todavía no <b>hemos abierto</b> la tienda.', ru: 'Мы ещё не открыли магазин.', en: 'We haven’t opened the shop yet.' },
            { color: 'blue', es: 'Mi hijo <b>ha roto</b> un vaso.', ru: 'Мой сын разбил стакан.', en: 'My son has broken a glass.' },
            { color: 'blue', es: '¿<b>Habéis vuelto</b> ya de Italia?', ru: 'Вы уже вернулись из Италии?', en: 'Are you back from Italy yet?' }
          ] }
        ]
      },
      {
        id: 'irreg', label: { ru: 'Неправильные', en: 'Irregular' },
        blocks: [
          { type: 'table', heading: { ru: 'Неправильные глаголы в Indefinido', en: 'Irregular verbs in the Indefinido' },
            head: ['', 'yo', 'tú', 'él / ella', 'nosotros', 'vosotros', 'ellos'],
            rows: [
              ['ser / ir', 'fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
              ['tener', 'tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron'],
              ['estar', 'estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron'],
              ['hacer', 'hice', 'hiciste', 'hizo', 'hicimos', 'hicisteis', 'hicieron'],
              ['poder', 'pude', 'pudiste', 'pudo', 'pudimos', 'pudisteis', 'pudieron'],
              ['querer', 'quise', 'quisiste', 'quiso', 'quisimos', 'quisisteis', 'quisieron'],
              ['venir', 'vine', 'viniste', 'vino', 'vinimos', 'vinisteis', 'vinieron'],
              ['decir', 'dije', 'dijiste', 'dijo', 'dijimos', 'dijisteis', 'dijeron'],
              ['poner', 'puse', 'pusiste', 'puso', 'pusimos', 'pusisteis', 'pusieron'],
              ['saber', 'supe', 'supiste', 'supo', 'supimos', 'supisteis', 'supieron'],
              ['dar', 'di', 'diste', 'dio', 'dimos', 'disteis', 'dieron'],
              ['ver', 'vi', 'viste', 'vio', 'vimos', 'visteis', 'vieron']
            ] },
          { type: 'text', color: 'blue', body: {
            ru: ['<b>Подсказка:</b> <b>ser</b> и <b>ir</b> в Indefinido совпадают полностью — смысл определяет только контекст.'],
            en: ['<b>Hint:</b> <b>ser</b> and <b>ir</b> are identical in the Indefinido — only the context tells you which one it is.'] } },
          { type: 'examples', items: [
            { badge: 'ir', color: 'amber', es: '<b>Fui</b> al mercado.', ru: 'Я пошёл на рынок. (ir)', en: 'I went to the market. (ir)' },
            { badge: 'ser', color: 'amber', es: '<b>Fui</b> estudiante.', ru: 'Я был студентом. (ser)', en: 'I was a student. (ser)' }
          ] },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Группа «-uv-» и похожие:</b> <i>tener → tuv-</i>, <i>estar → estuv-</i>, <i>poder → pud-</i>, <i>saber → sup-</i>, <i>poner → pus-</i>. Запомните основу — окончания у всех одинаковые: <b>-e, -iste, -o, -imos, -isteis, -ieron</b>. Ударных окончаний (-é, -ó) у этих глаголов нет.'],
            en: ['<b>The “-uv-” group and similar verbs:</b> <i>tener → tuv-</i>, <i>estar → estuv-</i>, <i>poder → pud-</i>, <i>saber → sup-</i>, <i>poner → pus-</i>. Learn the stem — the endings are the same for all of them: <b>-e, -iste, -o, -imos, -isteis, -ieron</b>. These verbs have no stressed endings (-é, -ó).'] } },
          { type: 'conj', heading: { ru: 'Неправильные в обоих временах', en: 'Irregular in both tenses' }, verbs: [
            { inf: 'hacer', tr: { ru: 'делать', en: 'to do, make' }, variants: [
              { label: 'Perfecto', color: 'blue', rows: [['yo', 'he <b>hecho</b>'], ['tú', 'has <b>hecho</b>'], ['él / ella', 'ha <b>hecho</b>'], ['nosotros', 'hemos <b>hecho</b>'], ['vosotros', 'habéis <b>hecho</b>'], ['ellos', 'han <b>hecho</b>']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', '<b>hice</b>'], ['tú', '<b>hiciste</b>'], ['él / ella', '<b>hizo</b>'], ['nosotros', '<b>hicimos</b>'], ['vosotros', '<b>hicisteis</b>'], ['ellos', '<b>hicieron</b>']] }
            ] },
            { inf: 'decir', tr: { ru: 'сказать', en: 'to say' }, variants: [
              { label: 'Perfecto', color: 'blue', rows: [['yo', 'he <b>dicho</b>'], ['tú', 'has <b>dicho</b>'], ['él / ella', 'ha <b>dicho</b>'], ['nosotros', 'hemos <b>dicho</b>'], ['vosotros', 'habéis <b>dicho</b>'], ['ellos', 'han <b>dicho</b>']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', '<b>dije</b>'], ['tú', '<b>dijiste</b>'], ['él / ella', '<b>dijo</b>'], ['nosotros', '<b>dijimos</b>'], ['vosotros', '<b>dijisteis</b>'], ['ellos', '<b>dijeron</b>']] }
            ] },
            { inf: 'poner', tr: { ru: 'класть, ставить', en: 'to put' }, variants: [
              { label: 'Perfecto', color: 'blue', rows: [['yo', 'he <b>puesto</b>'], ['tú', 'has <b>puesto</b>'], ['él / ella', 'ha <b>puesto</b>'], ['nosotros', 'hemos <b>puesto</b>'], ['vosotros', 'habéis <b>puesto</b>'], ['ellos', 'han <b>puesto</b>']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', '<b>puse</b>'], ['tú', '<b>pusiste</b>'], ['él / ella', '<b>puso</b>'], ['nosotros', '<b>pusimos</b>'], ['vosotros', '<b>pusisteis</b>'], ['ellos', '<b>pusieron</b>']] }
            ] },
            { inf: 'ver', tr: { ru: 'видеть', en: 'to see' }, variants: [
              { label: 'Perfecto', color: 'blue', rows: [['yo', 'he <b>visto</b>'], ['tú', 'has <b>visto</b>'], ['él / ella', 'ha <b>visto</b>'], ['nosotros', 'hemos <b>visto</b>'], ['vosotros', 'habéis <b>visto</b>'], ['ellos', 'han <b>visto</b>']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', '<b>vi</b>'], ['tú', '<b>viste</b>'], ['él / ella', '<b>vio</b>'], ['nosotros', '<b>vimos</b>'], ['vosotros', '<b>visteis</b>'], ['ellos', '<b>vieron</b>']] }
            ] }
          ] }
        ]
      },
      {
        id: 'keys', label: { ru: 'Маркеры', en: 'Markers' },
        blocks: [
          { type: 'markers', groups: [
            { color: 'blue', title: { ru: 'Perfecto', en: 'Perfecto' },
              tags: ['hoy', 'esta mañana', 'esta tarde', 'esta semana', 'este mes', 'este año', 'ya', 'todavía no', 'alguna vez', 'nunca', 'siempre', 'últimamente', 'recientemente'] },
            { color: 'amber', title: { ru: 'Indefinido', en: 'Indefinido' },
              tags: ['ayer', 'anteayer', 'el lunes', 'la semana pasada', 'el mes pasado', 'el año pasado', 'en 2010', 'hace 3 días', 'entonces', 'de repente', 'aquella vez'] }
          ] },
          { type: 'text', color: 'blue', body: {
            ru: ['<b>Главное правило:</b> если период ещё не закончился (сегодня, эта неделя) — Perfecto. Если период завершён (вчера, в прошлом году) — Indefinido.'],
            en: ['<b>The main rule:</b> if the time period is not over yet (today, this week), use Perfecto. If it is finished (yesterday, last year), use Indefinido.'] } },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Исключение — Латинская Америка:</b> там Indefinido часто используют вместо Perfecto даже с <i>hoy</i>, и это нормально для разговорной речи. В Испании правило соблюдают строже.'],
            en: ['<b>Exception — Latin America:</b> people there often use Indefinido instead of Perfecto even with <i>hoy</i>, and that is normal in everyday speech. Spain follows the rule more strictly.'] } },
          { type: 'tip', title: { ru: 'Как выбрать за три секунды', en: 'Choose in three seconds' }, body: {
            ru: ['Найдите слово-маркер и спросите себя: <b>период ещё идёт?</b> Да → <i>he + participio</i>. Нет → форма Indefinido.',
                 'Маркера нет? Спросите: <b>важен результат сейчас</b> (<i>¡He perdido las llaves!</i>) или это <b>история о прошлом</b> (<i>Perdí las llaves en el tren.</i>)?'],
            en: ['Find the time marker and ask yourself: <b>is the period still going on?</b> Yes → <i>he + participle</i>. No → the Indefinido form.',
                 'No marker? Ask: <b>does the result matter now</b> (<i>¡He perdido las llaves!</i>) or is it <b>a story about the past</b> (<i>Perdí las llaves en el tren.</i>)?'] } }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Perfecto: период ещё идёт или важен результат', en: 'Perfecto: the period goes on, or the result matters' }, items: [
            { color: 'blue', es: 'Esta mañana <b>he desayunado</b> tostadas.', ru: 'Сегодня утром я позавтракал тостами.', en: 'This morning I had toast for breakfast.' },
            { color: 'blue', es: '¿<b>Habéis terminado</b> ya los deberes?', ru: 'Вы уже сделали домашнее задание?', en: 'Have you finished your homework yet?' },
            { color: 'blue', es: 'Nunca <b>he montado</b> a caballo.', ru: 'Я никогда не ездил верхом.', en: 'I have never ridden a horse.' },
            { color: 'blue', es: 'Últimamente Carlos <b>ha dormido</b> muy poco.', ru: 'В последнее время Карлос очень мало спит.', en: 'Carlos has slept very little lately.' },
            { color: 'blue', es: 'Este año <b>hemos viajado</b> dos veces a Portugal.', ru: 'В этом году мы два раза ездили в Португалию.', en: 'We have travelled to Portugal twice this year.' },
            { color: 'blue', es: '¡<b>He perdido</b> las llaves!', ru: 'Я потерял ключи! (и сейчас их нет)', en: 'I have lost my keys! (and I don’t have them now)' },
            { color: 'blue', es: 'Mis padres todavía no <b>han visto</b> la película.', ru: 'Мои родители ещё не посмотрели фильм.', en: 'My parents haven’t seen the film yet.' },
            { color: 'blue', es: '¿Alguna vez <b>has comido</b> pulpo?', ru: 'Ты когда-нибудь ел осьминога?', en: 'Have you ever eaten octopus?' },
            { color: 'blue', es: 'Esta semana <b>ha llovido</b> todos los días.', ru: 'На этой неделе каждый день шёл дождь.', en: 'It has rained every day this week.' }
          ] },
          { type: 'examples', heading: { ru: 'Indefinido: период закончился', en: 'Indefinido: the period is over' }, items: [
            { color: 'amber', es: 'Anteayer <b>llamé</b> a mi abuela.', ru: 'Позавчера я позвонил бабушке.', en: 'The day before yesterday I called my grandmother.' },
            { color: 'amber', es: 'El lunes Ana <b>empezó</b> un curso de italiano.', ru: 'В понедельник Ана начала курс итальянского.', en: 'On Monday Ana started an Italian course.' },
            { color: 'amber', es: 'La semana pasada <b>fuimos</b> al teatro.', ru: 'На прошлой неделе мы ходили в театр.', en: 'Last week we went to the theatre.' },
            { color: 'amber', es: 'En 2019 mis amigos <b>se mudaron</b> a Valencia.', ru: 'В 2019 году мои друзья переехали в Валенсию.', en: 'In 2019 my friends moved to Valencia.' },
            { color: 'amber', es: 'Hace tres días <b>tuve</b> una entrevista de trabajo.', ru: 'Три дня назад у меня было собеседование.', en: 'Three days ago I had a job interview.' },
            { color: 'amber', es: '¿Qué <b>hiciste</b> el sábado por la noche?', ru: 'Что ты делал в субботу вечером?', en: 'What did you do on Saturday night?' },
            { color: 'amber', es: 'De repente <b>se fue</b> la luz.', ru: 'Вдруг выключили свет.', en: 'Suddenly the power went out.' },
            { color: 'amber', es: 'El mes pasado <b>pudimos</b> descansar por fin.', ru: 'В прошлом месяце мы наконец смогли отдохнуть.', en: 'Last month we were finally able to rest.' },
            { color: 'amber', es: 'Aquella vez <b>dijisteis</b> la verdad.', ru: 'В тот раз вы сказали правду.', en: 'That time you told the truth.' }
          ] }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Hoy ___ (comer, yo) en casa.',
        options: ['he comido', 'comí', 'comía'], answer: 0,
        explain: { ru: '<i>Hoy</i> — день ещё не закончился, поэтому Perfecto: <i>he comido</i> (по норме Испании; в Латинской Америке — Indefinido).', en: '<i>Hoy</i> — the day is not over, so Perfecto: <i>he comido</i> (the norm in Spain; Latin America uses Indefinido).' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Ayer ___ (ver, yo) a María.',
        options: ['vi', 'he visto', 'veo'], answer: 0,
        explain: { ru: '<i>Ayer</i> — завершённый период, значит Indefinido: <i>vi</i>.', en: '<i>Ayer</i> is a finished period, so Indefinido: <i>vi</i>.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: '¿___ (estar, tú) alguna vez en Madrid?',
        options: ['Has estado', 'Estuviste', 'Estás'], answer: 0,
        explain: { ru: '<i>Alguna vez</i> — опыт «в жизни», связанный с настоящим: Perfecto (по норме Испании; в Латинской Америке — Indefinido).', en: '<i>Alguna vez</i> asks about life experience up to now: Perfecto (the norm in Spain; Latin America uses Indefinido).' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'En 2015 ___ (vivir, nosotros) en Sevilla.',
        options: ['vivimos', 'hemos vivido', 'vivamos'], answer: 0,
        explain: { ru: 'Конкретный год в прошлом — Indefinido. <i>Vivimos</i> в Indefinido совпадает с формой настоящего.', en: 'A specific past year calls for Indefinido. <i>Vivimos</i> looks the same as the present tense form.' } },
      { prompt: { ru: 'Какой participio у глагола hacer?', en: 'What is the participle of hacer?' },
        options: ['hecho', 'hacido', 'hizo'], answer: 0,
        explain: { ru: '<i>Hacer</i> — неправильный: <i>hecho</i>. <i>Hizo</i> — это Indefinido.', en: '<i>Hacer</i> is irregular: <i>hecho</i>. <i>Hizo</i> is the indefinido form.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Esta semana ___ (escribir, yo) tres cartas.',
        options: ['he escrito', 'he escribido', 'escribí'], answer: 0,
        explain: { ru: '<i>Esta semana</i> — Perfecto; participio от <i>escribir</i> неправильный: <i>escrito</i>.', en: '<i>Esta semana</i> needs Perfecto, and the participle of <i>escribir</i> is irregular: <i>escrito</i>.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'El año pasado ___ (tener, ella) un accidente.',
        options: ['tuvo', 'tenió', 'ha tenido'], answer: 0,
        explain: { ru: '<i>El año pasado</i> — Indefinido; <i>tener</i> меняет основу на <i>tuv-</i> и получает окончание <b>-o</b> без ударения.', en: '<i>El año pasado</i> needs Indefinido; <i>tener</i> changes its stem to <i>tuv-</i> and takes the unstressed ending <b>-o</b>.' } },
      { prompt: { ru: 'Что значит fui в этой фразе?', en: 'What does fui mean here?' }, es: 'Fui al cine con Ana.',
        options: ['ir', 'ser', 'estar'], answer: 0,
        explain: { ru: '<i>Ser</i> и <i>ir</i> в Indefinido совпадают. «Al cine» — направление, значит это <i>ir</i>: «я сходил в кино».', en: '<i>Ser</i> and <i>ir</i> are identical in the indefinido. “Al cine” is a direction, so it is <i>ir</i>: “I went to the cinema”.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Todavía no ___ (hacer, yo) los deberes.',
        options: ['he hecho', 'hice', 'hago'], answer: 0,
        explain: { ru: '<i>Todavía no</i> — маркер Perfecto: результата пока нет, и это важно сейчас (по норме Испании; в Латинской Америке — Indefinido).', en: '<i>Todavía no</i> is a Perfecto marker: there is no result yet, and that matters now (the norm in Spain; Latin America uses Indefinido).' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Hace tres días ___ (venir, ellos) a vernos.',
        options: ['vinieron', 'venieron', 'han venido'], answer: 0,
        explain: { ru: '<i>Hace tres días</i> — Indefinido; основа <i>venir</i> — <i>vin-</i>: <i>vinieron</i>.', en: '<i>Hace tres días</i> needs Indefinido; the stem of <i>venir</i> is <i>vin-</i>: <i>vinieron</i>.' } }
    ]
  },
  {
    id: 'a2-imperfecto', level: 'A2',
    title: { ru: 'Pretérito imperfecto', en: 'Pretérito imperfecto' },
    summary: { ru: 'Прошедшее длительное: описание, привычка, фон рассказа. Спряжение, три неправильных глагола и как сочетать с Indefinido.',
               en: 'The past continuous: descriptions, habits and the background of a story. Conjugation, the three irregular verbs and how it works with the indefinido.' },
    sections: [
      {
        heading: { ru: 'Что это за время', en: 'What this tense is for' },
        body: {
          ru: ['<b>Imperfecto</b> (<i>era, tenía, vivía…</i>) — незавершённое, длительное или повторяющееся действие в прошлом. Это «фон» рассказа: то, что происходило, пока что-то случилось.',
               '<b>Образ:</b> Imperfecto — это кино на паузе: фон, обстановка, привычки. Indefinido — это щелчок: конкретное событие, которое что-то изменило.'],
          en: ['<b>Imperfecto</b> (<i>era, tenía, vivía…</i>) is an unfinished, ongoing or repeated action in the past. It is the “background” of a story: what was going on when something happened.',
               '<b>Picture it:</b> Imperfecto is a paused film — the background, the setting, the habits. Indefinido is a click — a specific event that changed something.']
        }
      },
      {
        heading: { ru: 'Три главных случая', en: 'Three main uses' },
        body: {
          ru: ['① <b>Описание</b> — внешность, характер, состояние, погода, обстановка в прошлом.',
               '② <b>Привычка</b> — то, что делали регулярно: раньше, в детстве.',
               '③ <b>Фон</b> — что уже происходило, когда случилось событие (оно — в Indefinido).'],
          en: ['① <b>Description</b> — appearance, character, state, weather, the setting in the past.',
               '② <b>Habit</b> — what people did regularly: in the past, as a child.',
               '③ <b>Background</b> — what was already going on when an event happened (the event is in the indefinido).']
        },
        examples: [
          { es: 'Era alto y tenía el pelo rubio.', ru: 'Он был высоким и светловолосым. (описание)', en: 'He was tall and had blond hair. (description)' },
          { es: 'Hacía frío y llovía mucho.', ru: 'Было холодно и шёл сильный дождь. (погода, обстановка)', en: 'It was cold and raining hard. (weather, setting)' },
          { es: 'De niño jugaba al fútbol todos los días.', ru: 'В детстве я играл в футбол каждый день. (привычка)', en: 'As a child I played football every day. (habit)' },
          { es: 'Antes vivíamos en Madrid.', ru: 'Раньше мы жили в Мадриде. (раньше, но уже нет)', en: 'We used to live in Madrid. (before, but not any more)' },
          { es: 'Dormía cuando sonó el teléfono.', ru: 'Я спал, когда зазвонил телефон. (фон + событие)', en: 'I was sleeping when the phone rang. (background + event)' },
          { es: 'Llovía cuando salimos.', ru: 'Шёл дождь, когда мы вышли. (фон + событие)', en: 'It was raining when we went out. (background + event)' }
        ]
      },
      {
        heading: { ru: 'Спряжение правильных глаголов', en: 'Regular verbs' },
        body: {
          ru: ['Окончания <b>-ar</b>: -aba, -abas, -aba, -ábamos, -abais, -aban. Окончания <b>-er / -ir</b> одинаковые: -ía, -ías, -ía, -íamos, -íais, -ían. Ударение на «а» и «и» — ключ к форме.',
               '<b>Хорошая новость:</b> в Imperfecto всего три неправильных глагола на весь язык — <i>ser, ir, ver</i>.'],
          en: ['<b>-ar</b> endings: -aba, -abas, -aba, -ábamos, -abais, -aban. <b>-er / -ir</b> endings are the same: -ía, -ías, -ía, -íamos, -íais, -ían. The stress on “a” and “í” is the key to the form.',
               '<b>Good news:</b> the whole language has only three irregular verbs in the imperfecto — <i>ser, ir, ver</i>.']
        },
        table: {
          head: ['', 'hablar', 'comer', 'vivir'],
          rows: [
            ['yo', 'hablaba', 'comía', 'vivía'],
            ['tú', 'hablabas', 'comías', 'vivías'],
            ['él / ella', 'hablaba', 'comía', 'vivía'],
            ['nosotros', 'hablábamos', 'comíamos', 'vivíamos'],
            ['vosotros', 'hablabais', 'comíais', 'vivíais'],
            ['ellos', 'hablaban', 'comían', 'vivían']
          ]
        }
      },
      {
        heading: { ru: 'Три неправильных глагола: ser, ir, ver', en: 'Three irregular verbs: ser, ir, ver' },
        body: {
          ru: ['Их нужно просто запомнить. У <i>ver</i> сохраняется «e» из основы: <i>veía</i>, а не «vía».'],
          en: ['These just need to be memorised. <i>Ver</i> keeps the “e” of its stem: <i>veía</i>, not “vía”.']
        },
        table: {
          head: ['', 'ser', 'ir', 'ver'],
          rows: [
            ['yo', 'era', 'iba', 'veía'],
            ['tú', 'eras', 'ibas', 'veías'],
            ['él / ella', 'era', 'iba', 'veía'],
            ['nosotros', 'éramos', 'íbamos', 'veíamos'],
            ['vosotros', 'erais', 'ibais', 'veíais'],
            ['ellos', 'eran', 'iban', 'veían']
          ]
        }
      },
      {
        heading: { ru: 'Imperfecto или Indefinido', en: 'Imperfecto or indefinido' },
        body: {
          ru: ['<b>Роль в рассказе.</b> Imperfecto — фон, декорации, обстановка. Indefinido — событие, действие-перелом.',
               '<b>Завершённость.</b> Imperfecto — не завершено, нет чётких границ. Indefinido — завершено, есть момент.',
               '<b>Повторение.</b> Imperfecto — регулярно, привычка, всегда. Indefinido — один конкретный раз.',
               '<b>Состояние.</b> Imperfecto — описание: был, хотел, знал, мог. Indefinido — изменение состояния.',
               '<b>Вопрос.</b> Imperfecto: «Что происходило? Как было?». Indefinido: «Что случилось?».'],
          en: ['<b>Role in the story.</b> Imperfecto: the background, the scenery, the setting. Indefinido: the event, the turning point.',
               '<b>Completion.</b> Imperfecto: not finished, no clear limits. Indefinido: finished, there is a moment.',
               '<b>Repetition.</b> Imperfecto: regularly, a habit, always. Indefinido: one specific time.',
               '<b>State.</b> Imperfecto: a description — was, wanted, knew, could. Indefinido: a change of state.',
               '<b>Question it answers.</b> Imperfecto: “What was going on? What was it like?”. Indefinido: “What happened?”.']
        },
        examples: [
          { es: 'Vivía en París.', ru: 'Я жил в Париже. (описание, фон)', en: 'I lived in Paris. (description, background)' },
          { es: 'Se mudó a París.', ru: 'Он переехал в Париж. (момент, изменение)', en: 'He moved to Paris. (a moment, a change)' },
          { es: 'Comía pizza los viernes.', ru: 'Я ел пиццу по пятницам. (регулярно)', en: 'I used to eat pizza on Fridays. (regularly)' },
          { es: 'Comí pizza el viernes.', ru: 'В пятницу я поел пиццу. (конкретный раз)', en: 'I ate pizza on Friday. (one specific time)' },
          { es: 'Leía un libro cuando llegó María.', ru: 'Я читал книгу, когда пришла Мария. (фон + событие)', en: 'I was reading a book when María arrived. (background + event)' }
        ]
      },
      {
        heading: { ru: 'Мини-рассказ: оба времени вместе', en: 'A mini story with both tenses' },
        body: {
          ru: ['<i>Era</i> una noche tranquila. <i>Llovía</i> y <i>hacía</i> frío. Yo <i>estaba</i> en casa y <i>leía</i> un libro cuando, de repente, <b>sonó</b> el teléfono. Me <b>levanté</b>, <b>contesté</b> y <b>escuché</b> la voz de mi amigo.',
               'Курсив — Imperfecto (фон), жирный — Indefinido (события). Imperfecto задаёт сцену и описывает фон (<i>mientras, cuando</i>), Indefinido — событие, которое в этот фон врывается или прерывает его.',
               '<i>De repente</i>, <i>entonces</i>, <i>en ese momento</i> — сигнал Indefinido: это момент-перелом, который прерывает длящийся фон Imperfecto.'],
          en: ['<i>Era</i> una noche tranquila. <i>Llovía</i> y <i>hacía</i> frío. Yo <i>estaba</i> en casa y <i>leía</i> un libro cuando, de repente, <b>sonó</b> el teléfono. Me <b>levanté</b>, <b>contesté</b> y <b>escuché</b> la voz de mi amigo.',
               'Italics mark the imperfecto (background), bold marks the indefinido (events). The imperfecto sets the scene and describes the background (<i>mientras, cuando</i>); the indefinido is the event that bursts into that background or interrupts it.',
               '<i>De repente</i>, <i>entonces</i>, <i>en ese momento</i> signal the indefinido: a turning point that interrupts the ongoing imperfecto background.']
        },
        examples: [
          { es: 'Era una noche tranquila. Llovía y hacía frío.', ru: 'Была тихая ночь. Шёл дождь, и было холодно.', en: 'It was a quiet night. It was raining and it was cold.' },
          { es: 'Yo estaba en casa y leía un libro cuando, de repente, sonó el teléfono.', ru: 'Я был дома и читал книгу, когда вдруг зазвонил телефон.', en: 'I was at home reading a book when suddenly the phone rang.' },
          { es: 'Me levanté, contesté y escuché la voz de mi amigo.', ru: 'Я встал, ответил и услышал голос своего друга.', en: 'I got up, answered and heard my friend’s voice.' }
        ]
      },
      {
        heading: { ru: 'Слова-маркеры', en: 'Time markers' },
        body: {
          ru: ['Слева — слова, которые обычно требуют Imperfecto, справа — Indefinido.'],
          en: ['On the left are words that usually go with the imperfecto, on the right — with the indefinido.']
        },
        table: {
          head: ['imperfecto', 'indefinido'],
          rows: [
            ['siempre', 'ayer'],
            ['normalmente', 'anteayer'],
            ['generalmente', 'el lunes'],
            ['a veces', 'de repente'],
            ['casi siempre', 'entonces'],
            ['todos los días', 'en ese momento'],
            ['cada semana', 'de pronto'],
            ['antes', 'una vez'],
            ['de niño / de niña', 'hace 3 años'],
            ['cuando era pequeño', 'el año pasado'],
            ['mientras', 'en 2010'],
            ['en aquella época', 'aquella noche'],
            ['frecuentemente', ''],
            ['a menudo', '']
          ]
        }
      },
      {
        heading: { ru: 'Глаголы состояния', en: 'State verbs' },
        body: {
          ru: ['Глаголы состояния в описаниях прошлого почти всегда стоят в Imperfecto: <i>ser → era</i> · <i>estar → estaba</i> · <i>tener → tenía</i> · <i>querer → quería</i> · <i>saber → sabía</i> · <i>poder → podía</i> · <i>haber → había</i> · <i>parecer → parecía</i> · <i>conocer → conocía</i>.',
               '<b>Исключение:</b> те же глаголы могут стоять в Indefinido, но тогда смысл меняется: <i>sabía</i> (знал) → <i>supe</i> (узнал впервые) · <i>quería</i> (хотел) → <i>quise</i> (решил, попытался) · <i>podía</i> (мог) → <i>pude</i> (смог, получилось).'],
          en: ['In descriptions of the past, state verbs are almost always in the imperfecto: <i>ser → era</i> · <i>estar → estaba</i> · <i>tener → tenía</i> · <i>querer → quería</i> · <i>saber → sabía</i> · <i>poder → podía</i> · <i>haber → había</i> · <i>parecer → parecía</i> · <i>conocer → conocía</i>.',
               '<b>Exception:</b> the same verbs can be in the indefinido, but then the meaning changes: <i>sabía</i> (knew) → <i>supe</i> (found out) · <i>quería</i> (wanted) → <i>quise</i> (decided, tried) · <i>podía</i> (could) → <i>pude</i> (managed to).']
        },
        table: {
          head: ['', 'imperfecto', 'indefinido'],
          rows: [
            ['saber', 'sabía', 'supe'],
            ['querer', 'quería', 'quise'],
            ['poder', 'podía', 'pude']
          ]
        }
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'De niño ___ (jugar, yo) en el parque todos los días.',
        options: ['jugaba', 'jugué', 'he jugado'], answer: 0,
        explain: { ru: 'Привычка в детстве (<i>de niño, todos los días</i>) — Imperfecto.', en: 'A childhood habit (<i>de niño, todos los días</i>) takes the imperfecto.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Cuando era pequeña, ___ (vivir, nosotros) en Valencia.',
        options: ['vivíamos', 'vivimos', 'vivábamos'], answer: 0,
        explain: { ru: 'Фон и «раньше» — Imperfecto; у глаголов на -ir окончание <b>-íamos</b>.', en: 'Background and “used to” take the imperfecto; -ir verbs end in <b>-íamos</b>.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Mi abuela ___ (ser) muy simpática.',
        options: ['era', 'fue', 'iba'], answer: 0,
        explain: { ru: 'Описание характера — Imperfecto. <i>Ser</i> неправильный: <i>era</i>.', en: 'Describing someone’s character takes the imperfecto. <i>Ser</i> is irregular: <i>era</i>.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Dormía cuando ___ (sonar) el teléfono.',
        options: ['sonó', 'sonaba', 'ha sonado'], answer: 0,
        explain: { ru: 'Сон — фон (Imperfecto), звонок — событие, которое его прервало: Indefinido <i>sonó</i>.', en: 'Sleeping is the background (imperfecto); the call is the event that interrupted it: indefinido <i>sonó</i>.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Todos los veranos ___ (ir, nosotros) a la playa.',
        options: ['íbamos', 'fuimos', 'ibamos'], answer: 0,
        explain: { ru: 'Регулярное действие — Imperfecto. <i>Ir</i> неправильный: <i>íbamos</i>, с ударением на «í».', en: 'A regular action takes the imperfecto. <i>Ir</i> is irregular: <i>íbamos</i>, with an accent on the “í”.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Era invierno, ___ (hacer) mucho frío y todos llevábamos abrigo.',
        options: ['hacía', 'hizo', 'hace'], answer: 0,
        explain: { ru: 'Описание обстановки (рядом <i>era</i>, <i>llevábamos</i>) — Imperfecto: <i>hacía frío</i>.', en: 'A description of the setting (next to <i>era</i>, <i>llevábamos</i>) takes the imperfecto: <i>hacía frío</i>.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Antes ___ (ver, yo) la tele cada noche.',
        options: ['veía', 'vía', 'vi'], answer: 0,
        explain: { ru: '<i>Ver</i> — один из трёх неправильных глаголов в Imperfecto: сохраняет «e» — <i>veía</i>.', en: '<i>Ver</i> is one of the three irregular imperfecto verbs: it keeps the “e” — <i>veía</i>.' } },
      { prompt: { ru: 'Какое слово подсказывает Indefinido?', en: 'Which word signals the indefinido?' },
        options: ['de repente', 'mientras', 'a menudo'], answer: 0,
        explain: { ru: '<i>De repente</i> — момент-перелом, это Indefinido. <i>Mientras</i> и <i>a menudo</i> — маркеры Imperfecto.', en: '<i>De repente</i> marks a turning point — the indefinido. <i>Mientras</i> and <i>a menudo</i> are imperfecto markers.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Ayer ___ (saber, yo) la noticia por la radio.',
        options: ['supe', 'sabía', 'sé'], answer: 0,
        explain: { ru: '<i>Supe</i> — «узнал впервые», конкретный момент. <i>Sabía</i> значило бы «знал» (состояние).', en: '<i>Supe</i> means “found out” — a specific moment. <i>Sabía</i> would mean “knew” (a state).' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Mientras ella ___ (cocinar), yo ponía la mesa.',
        options: ['cocinaba', 'cocinó', 'cocinía'], answer: 0,
        explain: { ru: '<i>Mientras</i> — два длящихся действия фоном: Imperfecto. У -ar окончание <b>-aba</b>.', en: '<i>Mientras</i> links two ongoing background actions: imperfecto. -ar verbs end in <b>-aba</b>.' } }
    ]
  }
]);
