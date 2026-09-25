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
    hero: {
      es: 'Pretérito <b>Imperfecto</b>',
      sub: { ru: 'Прошедшее длительное — описание, привычка, фон рассказа',
             en: 'The past continuous — description, habit, the background of a story' }
    },
    tabs: [
      {
        id: 'when', label: { ru: 'Когда', en: 'When' },
        blocks: [
          { type: 'rules', heading: { ru: 'Два прошедших', en: 'Two past tenses' }, items: [
            { color: 'teal', label: { ru: 'Претерито', en: 'Pretérito' }, title: { ru: 'Imperfecto', en: 'Imperfecto' }, es: 'era / tenía / vivía…',
              body: { ru: 'Незавершённое, длительное или повторяющееся действие в прошлом. Это <b>«фон» рассказа</b> — то, что происходило, пока что-то случилось.',
                      en: 'An unfinished, ongoing or repeated action in the past. It is <b>the “background” of a story</b> — what was going on when something happened.' } },
            { color: 'amber', label: { ru: 'Для сравнения', en: 'Compare with' }, title: { ru: 'Indefinido', en: 'Indefinido' }, es: 'fue / tuvo / vivió',
              body: { ru: '<b>Событие</b> с чёткими границами: случилось один раз, в конкретный момент, и что-то изменило. Подробно — во вкладке «Сравнение».',
                      en: 'An <b>event</b> with clear limits: it happened once, at a specific moment, and changed something. More in the “Contrast” tab.' } }
          ] },
          { type: 'triggers', heading: { ru: 'Три главных случая', en: 'Three main uses' }, items: [
            { num: '1', color: 'teal', title: { ru: 'Описание', en: 'Description' }, sub: { ru: 'как это было', en: 'what it was like' },
              body: { ru: 'Внешность, характер, состояние, погода, обстановка в прошлом. Сюда же время и возраст: <i>Eran las tres.</i> <i>Tenía veinte años.</i>',
                      en: 'Appearance, character, state, weather, the setting in the past. Time and age belong here too: <i>Eran las tres.</i> <i>Tenía veinte años.</i>' },
              phrases: ['era', 'estaba', 'tenía', 'hacía frío', 'había'] },
            { num: '2', color: 'teal', title: { ru: 'Привычка', en: 'Habit' }, sub: { ru: 'что делали регулярно', en: 'what people used to do' },
              body: { ru: 'То, что делали регулярно: раньше, в детстве. По-русски часто «бывало», «обычно».',
                      en: 'What people did regularly: in the past, as a child. In English often “used to” or “would”.' },
              phrases: ['siempre', 'normalmente', 'a veces', 'todos los días', 'antes', 'cuando era niño'] },
            { num: '3', color: 'teal', title: { ru: 'Фон', en: 'Background' }, sub: { ru: 'что уже происходило', en: 'what was already going on' },
              body: { ru: 'Что уже происходило, когда случилось событие. Само событие — в <b>Indefinido</b>.',
                      en: 'What was already going on when an event happened. The event itself is in the <b>indefinido</b>.' },
              phrases: ['mientras', 'cuando'] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры к трём случаям', en: 'Examples of the three uses' }, items: [
            { badge: '1', color: 'teal', es: '<b>Era</b> alto y <b>tenía</b> el pelo rubio.', ru: 'Он был высоким и светловолосым. (описание)', en: 'He was tall and had blond hair. (description)' },
            { badge: '1', color: 'teal', es: '<b>Hacía</b> frío y <b>llovía</b> mucho.', ru: 'Было холодно и шёл сильный дождь. (погода, обстановка)', en: 'It was cold and raining hard. (weather, setting)' },
            { badge: '2', color: 'teal', es: 'De niño <b>jugaba</b> al fútbol todos los días.', ru: 'В детстве я играл в футбол каждый день. (привычка)', en: 'As a child I played football every day. (habit)' },
            { badge: '2', color: 'teal', es: 'Antes <b>vivíamos</b> en Madrid.', ru: 'Раньше мы жили в Мадриде. (раньше, но уже нет)', en: 'We used to live in Madrid. (before, but not any more)' },
            { badge: '3', color: 'teal', es: '<b>Dormía</b> cuando sonó el teléfono.', ru: 'Я спал, когда зазвонил телефон. (фон + событие)', en: 'I was sleeping when the phone rang. (background + event)' },
            { badge: '3', color: 'teal', es: '<b>Llovía</b> cuando salimos.', ru: 'Шёл дождь, когда мы вышли. (фон + событие)', en: 'It was raining when we went out. (background + event)' }
          ] },
          { type: 'text', color: 'teal', body: {
            ru: ['<b>Важно:</b> глаголы состояния (<i>ser, estar, tener, querer, saber, poder, haber</i>) в описаниях прошлого почти всегда стоят в Imperfecto, а не в Indefinido. Список и исключения — во вкладке «Сравнение».'],
            en: ['<b>Important:</b> state verbs (<i>ser, estar, tener, querer, saber, poder, haber</i>) are almost always in the imperfecto in descriptions of the past, not in the indefinido. The list and the exceptions are in the “Contrast” tab.'] } },
          { type: 'text', color: 'purple', body: {
            ru: ['<b>Вежливая просьба:</b> Imperfecto смягчает желание, как русское «я бы хотел»: <i>Quería un café, por favor.</i> · <i>Quería preguntar una cosa.</i>'],
            en: ['<b>Polite requests:</b> the imperfecto softens a wish, like English “I’d like”: <i>Quería un café, por favor.</i> · <i>Quería preguntar una cosa.</i>'] } },
          { type: 'tip', title: { ru: 'Образ', en: 'Picture it' }, body: {
            ru: ['Imperfecto — это <b>кино на паузе</b>: фон, обстановка, привычки. Indefinido — это <b>щелчок</b>: конкретное событие, которое что-то изменило.'],
            en: ['The imperfecto is <b>a paused film</b>: the background, the setting, the habits. The indefinido is <b>a click</b>: a specific event that changed something.'] } }
        ]
      },
      {
        id: 'conj', label: { ru: 'Спряжение', en: 'Conjugation' },
        blocks: [
          { type: 'text', body: {
            ru: ['Окончания <b>-ar</b>: -aba, -abas, -aba, -ábamos, -abais, -aban. Окончания <b>-er / -ir</b> одинаковые: -ía, -ías, -ía, -íamos, -íais, -ían. Ударение на «а» и «í» — ключ к форме. Переключайте группы у каждой карточки.'],
            en: ['<b>-ar</b> endings: -aba, -abas, -aba, -ábamos, -abais, -aban. <b>-er / -ir</b> endings are the same: -ía, -ías, -ía, -íamos, -íais, -ían. The stress on “a” and “í” is the key to the form. Switch between the groups on each card.'] } },
          { type: 'conj', heading: { ru: 'Окончания', en: 'Endings' }, verbs: [
            { inf: 'terminaciones', tr: { ru: 'окончания', en: 'endings' }, variants: [
              { label: '-ar', color: 'blue', rows: [['yo', '-<b>aba</b>'], ['tú', '-<b>abas</b>'], ['él / ella', '-<b>aba</b>'], ['nosotros', '-<b>ábamos</b>'], ['vosotros', '-<b>abais</b>'], ['ellos', '-<b>aban</b>']] },
              { label: '-er / -ir', color: 'coral', rows: [['yo', '-<b>ía</b>'], ['tú', '-<b>ías</b>'], ['él / ella', '-<b>ía</b>'], ['nosotros', '-<b>íamos</b>'], ['vosotros', '-<b>íais</b>'], ['ellos', '-<b>ían</b>']] }
            ] }
          ] },
          { type: 'table', heading: { ru: 'Глаголы-образцы', en: 'Model verbs' },
            head: ['', 'hablar', 'comer', 'vivir'],
            rows: [
              ['yo', 'hablaba', 'comía', 'vivía'],
              ['tú', 'hablabas', 'comías', 'vivías'],
              ['él / ella', 'hablaba', 'comía', 'vivía'],
              ['nosotros', 'hablábamos', 'comíamos', 'vivíamos'],
              ['vosotros', 'hablabais', 'comíais', 'vivíais'],
              ['ellos', 'hablaban', 'comían', 'vivían']
            ] },
          { type: 'table', heading: { ru: 'Частые глаголы', en: 'Common verbs' },
            head: ['', 'estar', 'tener', 'salir'],
            rows: [
              ['yo', 'estaba', 'tenía', 'salía'],
              ['tú', 'estabas', 'tenías', 'salías'],
              ['él / ella', 'estaba', 'tenía', 'salía'],
              ['nosotros', 'estábamos', 'teníamos', 'salíamos'],
              ['vosotros', 'estabais', 'teníais', 'salíais'],
              ['ellos', 'estaban', 'tenían', 'salían']
            ] },
          { type: 'text', color: 'teal', body: {
            ru: ['<b>Хорошая новость:</b> у <b>-er</b> и <b>-ir</b> окончания одинаковые, а неправильных глаголов в Imperfecto всего три на весь язык — <i>ser, ir, ver</i>. Даже глаголы, неправильные в настоящем, здесь правильные: <i>tener → tenía</i>, <i>poder → podía</i>, <i>hacer → hacía</i>.'],
            en: ['<b>Good news:</b> <b>-er</b> and <b>-ir</b> verbs share the same endings, and the whole language has only three irregular verbs in the imperfecto — <i>ser, ir, ver</i>. Even verbs that are irregular in the present are regular here: <i>tener → tenía</i>, <i>poder → podía</i>, <i>hacer → hacía</i>.'] } },
          { type: 'text', body: {
            ru: ['<b>Ударение на письме:</b> у -ar знак ударения только в форме <i>nosotros</i> (<i>hablábamos</i>), у -er / -ir — во всех формах (<i>comía, comíamos</i>). Формы <i>yo</i> и <i>él / ella</i> совпадают (<i>hablaba</i>), поэтому, если неясно, кто действует, добавляйте местоимение.'],
            en: ['<b>Written accents:</b> -ar verbs have an accent only in the <i>nosotros</i> form (<i>hablábamos</i>); -er / -ir verbs have it in every form (<i>comía, comíamos</i>). The <i>yo</i> and <i>él / ella</i> forms are the same (<i>hablaba</i>), so add the pronoun when it is unclear who is acting.'] } }
        ]
      },
      {
        id: 'irreg', label: { ru: 'Неправильные', en: 'Irregular' },
        blocks: [
          { type: 'text', body: {
            ru: ['Три неправильных глагола — <b>ser, ir, ver</b> — нужно просто запомнить. У <i>ver</i> сохраняется «e» из основы: <i>veía</i>, а не «vía».'],
            en: ['The three irregular verbs — <b>ser, ir, ver</b> — just need to be memorised. <i>Ver</i> keeps the “e” of its stem: <i>veía</i>, not “vía”.'] } },
          { type: 'table', heading: { ru: 'Три неправильных глагола', en: 'The three irregular verbs' },
            head: ['', 'ser', 'ir', 'ver'],
            rows: [
              ['yo', 'era', 'iba', 'veía'],
              ['tú', 'eras', 'ibas', 'veías'],
              ['él / ella', 'era', 'iba', 'veía'],
              ['nosotros', 'éramos', 'íbamos', 'veíamos'],
              ['vosotros', 'erais', 'ibais', 'veíais'],
              ['ellos', 'eran', 'iban', 'veían']
            ] },
          { type: 'conj', heading: { ru: 'Сравните с Indefinido', en: 'Compare with the Indefinido' }, verbs: [
            { inf: 'ser', tr: { ru: 'быть', en: 'to be' }, variants: [
              { label: 'Imperfecto', color: 'teal', rows: [['yo', '<b>era</b>'], ['tú', '<b>eras</b>'], ['él / ella', '<b>era</b>'], ['nosotros', '<b>éramos</b>'], ['vosotros', '<b>erais</b>'], ['ellos', '<b>eran</b>']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', '<b>fui</b>'], ['tú', '<b>fuiste</b>'], ['él / ella', '<b>fue</b>'], ['nosotros', '<b>fuimos</b>'], ['vosotros', '<b>fuisteis</b>'], ['ellos', '<b>fueron</b>']] }
            ] },
            { inf: 'ir', tr: { ru: 'идти, ехать', en: 'to go' }, variants: [
              { label: 'Imperfecto', color: 'teal', rows: [['yo', '<b>iba</b>'], ['tú', '<b>ibas</b>'], ['él / ella', '<b>iba</b>'], ['nosotros', '<b>íbamos</b>'], ['vosotros', '<b>ibais</b>'], ['ellos', '<b>iban</b>']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', '<b>fui</b>'], ['tú', '<b>fuiste</b>'], ['él / ella', '<b>fue</b>'], ['nosotros', '<b>fuimos</b>'], ['vosotros', '<b>fuisteis</b>'], ['ellos', '<b>fueron</b>']] }
            ] },
            { inf: 'ver', tr: { ru: 'видеть', en: 'to see' }, variants: [
              { label: 'Imperfecto', color: 'teal', rows: [['yo', 've<b>ía</b>'], ['tú', 've<b>ías</b>'], ['él / ella', 've<b>ía</b>'], ['nosotros', 've<b>íamos</b>'], ['vosotros', 've<b>íais</b>'], ['ellos', 've<b>ían</b>']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', '<b>vi</b>'], ['tú', '<b>viste</b>'], ['él / ella', '<b>vio</b>'], ['nosotros', '<b>vimos</b>'], ['vosotros', '<b>visteis</b>'], ['ellos', '<b>vieron</b>']] }
            ] }
          ] },
          { type: 'text', color: 'teal', body: {
            ru: ['<b>Ser и ir</b> в Imperfecto различаются (<i>era</i> / <i>iba</i>), а в Indefinido совпадают (<i>fui</i>). <b>Haber</b> в значении «есть, имеется» тоже правильный: <i>hay → había</i> — одна форма для единственного и множественного числа.'],
            en: ['<b>Ser and ir</b> are different in the imperfecto (<i>era</i> / <i>iba</i>) but identical in the indefinido (<i>fui</i>). <b>Haber</b> meaning “there is / there are” is regular too: <i>hay → había</i> — one form for singular and plural.'] } },
          { type: 'examples', heading: { ru: 'Ser, ir, ver в речи', en: 'Ser, ir, ver in use' }, items: [
            { badge: 'ser', color: 'teal', es: 'De niña <b>era</b> muy tímida.', ru: 'В детстве я была очень застенчивой.', en: 'As a child I was very shy.' },
            { badge: 'ir', color: 'teal', es: 'Todos los veranos <b>íbamos</b> al pueblo.', ru: 'Каждое лето мы ездили в деревню.', en: 'Every summer we went to the village.' },
            { badge: 'ir', color: 'teal', es: '¿Adónde <b>ibas</b> tan deprisa?', ru: 'Куда ты так спешил?', en: 'Where were you going in such a hurry?' },
            { badge: 'ver', color: 'teal', es: 'Antes <b>veíamos</b> muchas series juntos.', ru: 'Раньше мы вместе смотрели много сериалов.', en: 'We used to watch a lot of series together.' },
            { badge: 'ver', color: 'teal', es: 'Desde la ventana se <b>veía</b> el mar.', ru: 'Из окна было видно море.', en: 'You could see the sea from the window.' },
            { badge: 'hay', color: 'teal', es: 'En la plaza <b>había</b> mucha gente.', ru: 'На площади было много людей.', en: 'There were a lot of people in the square.' }
          ] }
        ]
      },
      {
        id: 'vs', label: { ru: 'Сравнение', en: 'Contrast' },
        blocks: [
          { type: 'table', heading: { ru: 'Imperfecto или Indefinido', en: 'Imperfecto or Indefinido' },
            head: [{ ru: 'Критерий', en: 'Criterion' }, 'Imperfecto', 'Indefinido'],
            rows: [
              [{ ru: 'Роль в рассказе', en: 'Role in the story' }, { ru: 'фон, декорации, обстановка', en: 'background, scenery, setting' }, { ru: 'событие, действие-перелом', en: 'event, turning point' }],
              [{ ru: 'Завершённость', en: 'Completion' }, { ru: 'не завершено, нет границ', en: 'unfinished, no clear limits' }, { ru: 'завершено, есть момент', en: 'finished, a clear moment' }],
              [{ ru: 'Повторение', en: 'Repetition' }, { ru: 'регулярно, привычка, всегда', en: 'regularly, a habit, always' }, { ru: 'один конкретный раз', en: 'one specific time' }],
              [{ ru: 'Состояние', en: 'State' }, { ru: 'описание: был, хотел, знал', en: 'description: was, wanted, knew' }, { ru: 'изменение состояния', en: 'a change of state' }],
              [{ ru: 'Вопрос', en: 'Question it answers' }, { ru: 'Что происходило? Как было?', en: 'What was it like?' }, { ru: 'Что случилось?', en: 'What happened?' }],
              [{ ru: 'Пример', en: 'Example' }, 'Vivía en París.', 'Se mudó a París.']
            ] },
          { type: 'examples', heading: { ru: 'Примеры попарно', en: 'Examples in pairs' }, items: [
            { badge: 'Imp', color: 'teal', es: '<b>Vivía</b> en París.', ru: 'Я жил в Париже. (описание, фон)', en: 'I lived in Paris. (description, background)' },
            { badge: 'Ind', color: 'amber', es: '<b>Se mudó</b> a París.', ru: 'Он переехал в Париж. (момент, изменение)', en: 'He moved to Paris. (a moment, a change)' },
            { badge: 'Imp', color: 'teal', es: '<b>Comía</b> pizza los viernes.', ru: 'Я ел пиццу по пятницам. (регулярно)', en: 'I used to eat pizza on Fridays. (regularly)' },
            { badge: 'Ind', color: 'amber', es: '<b>Comí</b> pizza el viernes.', ru: 'В пятницу я поел пиццу. (конкретный раз)', en: 'I ate pizza on Friday. (one specific time)' },
            { es: '<b>Leía</b> un libro cuando <b>llegó</b> María.', ru: 'Я читал книгу (фон), когда пришла Мария (событие).', en: 'I was reading a book (background) when María arrived (event).' }
          ] },
          { type: 'rules', heading: { ru: 'Фон и событие', en: 'Background and event' }, items: [
            { color: 'teal', title: { ru: 'Imperfecto', en: 'Imperfecto' }, body: {
            ru: ['<b>Вместе:</b> Imperfecto задаёт сцену и описывает фон (<i>mientras, cuando</i>), Indefinido — событие, которое в этот фон врывается или прерывает его.'],
            en: ['<b>Together:</b> the imperfecto sets the scene and describes the background (<i>mientras, cuando</i>); the indefinido is the event that bursts into that background or interrupts it.'] } },
            { color: 'amber', title: { ru: 'Indefinido', en: 'Indefinido' }, body: {
            ru: ['<i>De repente</i>, <i>entonces</i>, <i>en ese momento</i> — сигнал Indefinido: это момент-перелом, который прерывает длящийся фон Imperfecto.'],
            en: ['<i>De repente</i>, <i>entonces</i>, <i>en ese momento</i> signal the indefinido: a turning point that interrupts the ongoing imperfecto background.'] } }
          ] },
          { type: 'rules', heading: { ru: 'Глаголы состояния', en: 'State verbs' }, items: [
            { color: 'teal', title: { ru: 'Imperfecto', en: 'Imperfecto' }, body: {
            ru: ['Глаголы состояния в описаниях прошлого почти всегда стоят в Imperfecto: <i>ser → era</i> · <i>estar → estaba</i> · <i>tener → tenía</i> · <i>querer → quería</i> · <i>saber → sabía</i> · <i>poder → podía</i> · <i>haber → había</i> · <i>parecer → parecía</i> · <i>conocer → conocía</i>.'],
            en: ['In descriptions of the past, state verbs are almost always in the imperfecto: <i>ser → era</i> · <i>estar → estaba</i> · <i>tener → tenía</i> · <i>querer → quería</i> · <i>saber → sabía</i> · <i>poder → podía</i> · <i>haber → había</i> · <i>parecer → parecía</i> · <i>conocer → conocía</i>.'] } },
            { color: 'amber', title: { ru: 'Indefinido', en: 'Indefinido' }, body: {
            ru: ['<b>Исключение:</b> те же глаголы могут стоять в Indefinido, но тогда смысл меняется: <i>sabía</i> (знал) → <i>supe</i> (узнал впервые) · <i>quería</i> (хотел) → <i>quise</i> (решил, попытался) · <i>podía</i> (мог) → <i>pude</i> (смог, получилось) · <i>conocía</i> (был знаком) → <i>conocí</i> (познакомился).'],
            en: ['<b>Exception:</b> the same verbs can be in the indefinido, but then the meaning changes: <i>sabía</i> (knew) → <i>supe</i> (found out) · <i>quería</i> (wanted) → <i>quise</i> (decided, tried) · <i>podía</i> (could) → <i>pude</i> (managed to) · <i>conocía</i> (knew someone) → <i>conocí</i> (met for the first time).'] } }
          ] },
          { type: 'conj', heading: { ru: 'Четыре глагола', en: 'Four verbs' }, verbs: [
            { inf: 'saber', tr: { ru: 'знал → узнал', en: 'knew → found out' }, variants: [
              { label: 'Imperfecto', color: 'teal', rows: [['yo', 'sab<b>ía</b>'], ['tú', 'sab<b>ías</b>'], ['él / ella', 'sab<b>ía</b>'], ['nosotros', 'sab<b>íamos</b>'], ['vosotros', 'sab<b>íais</b>'], ['ellos', 'sab<b>ían</b>']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', '<b>supe</b>'], ['tú', '<b>supiste</b>'], ['él / ella', '<b>supo</b>'], ['nosotros', '<b>supimos</b>'], ['vosotros', '<b>supisteis</b>'], ['ellos', '<b>supieron</b>']] }
            ] },
            { inf: 'querer', tr: { ru: 'хотел → решил, попытался', en: 'wanted → decided, tried' }, variants: [
              { label: 'Imperfecto', color: 'teal', rows: [['yo', 'quer<b>ía</b>'], ['tú', 'quer<b>ías</b>'], ['él / ella', 'quer<b>ía</b>'], ['nosotros', 'quer<b>íamos</b>'], ['vosotros', 'quer<b>íais</b>'], ['ellos', 'quer<b>ían</b>']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', '<b>quise</b>'], ['tú', '<b>quisiste</b>'], ['él / ella', '<b>quiso</b>'], ['nosotros', '<b>quisimos</b>'], ['vosotros', '<b>quisisteis</b>'], ['ellos', '<b>quisieron</b>']] }
            ] },
            { inf: 'poder', tr: { ru: 'мог → смог', en: 'could → managed to' }, variants: [
              { label: 'Imperfecto', color: 'teal', rows: [['yo', 'pod<b>ía</b>'], ['tú', 'pod<b>ías</b>'], ['él / ella', 'pod<b>ía</b>'], ['nosotros', 'pod<b>íamos</b>'], ['vosotros', 'pod<b>íais</b>'], ['ellos', 'pod<b>ían</b>']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', '<b>pude</b>'], ['tú', '<b>pudiste</b>'], ['él / ella', '<b>pudo</b>'], ['nosotros', '<b>pudimos</b>'], ['vosotros', '<b>pudisteis</b>'], ['ellos', '<b>pudieron</b>']] }
            ] },
            { inf: 'conocer', tr: { ru: 'был знаком → познакомился', en: 'knew → met' }, variants: [
              { label: 'Imperfecto', color: 'teal', rows: [['yo', 'conoc<b>ía</b>'], ['tú', 'conoc<b>ías</b>'], ['él / ella', 'conoc<b>ía</b>'], ['nosotros', 'conoc<b>íamos</b>'], ['vosotros', 'conoc<b>íais</b>'], ['ellos', 'conoc<b>ían</b>']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', 'conoc<b>í</b>'], ['tú', 'conoc<b>iste</b>'], ['él / ella', 'conoc<b>ió</b>'], ['nosotros', 'conoc<b>imos</b>'], ['vosotros', 'conoc<b>isteis</b>'], ['ellos', 'conoc<b>ieron</b>']] }
            ] }
          ] },
          { type: 'examples', heading: { ru: 'Смена смысла', en: 'A change of meaning' }, items: [
            { badge: 'Imp', color: 'teal', es: 'Ya <b>sabía</b> la verdad.', ru: 'Я уже знал правду.', en: 'I already knew the truth.' },
            { badge: 'Ind', color: 'amber', es: 'Ayer <b>supe</b> la verdad.', ru: 'Вчера я узнал правду.', en: 'Yesterday I found out the truth.' },
            { badge: 'Imp', color: 'teal', es: '<b>Quería</b> llamarte, pero no tenía tu número.', ru: 'Я хотел тебе позвонить, но у меня не было твоего номера.', en: 'I wanted to call you, but I didn’t have your number.' },
            { badge: 'Ind', color: 'amber', es: '<b>Quise</b> abrir la puerta, pero estaba cerrada con llave.', ru: 'Я попытался открыть дверь, но она была заперта.', en: 'I tried to open the door, but it was locked.' },
            { badge: 'Imp', color: 'teal', es: 'No <b>podíamos</b> dormir por el ruido.', ru: 'Мы не могли уснуть из-за шума.', en: 'We couldn’t sleep because of the noise.' },
            { badge: 'Ind', color: 'amber', es: 'Por fin <b>pudimos</b> dormir un poco.', ru: 'Наконец нам удалось немного поспать.', en: 'At last we managed to get a little sleep.' }
          ] }
        ]
      },
      {
        id: 'keys', label: { ru: 'Маркеры', en: 'Markers' },
        blocks: [
          { type: 'markers', heading: { ru: 'Маркеры', en: 'Markers' }, groups: [
            { color: 'teal', title: { ru: 'Imperfecto', en: 'Imperfecto' },
              tags: ['siempre', 'normalmente', 'generalmente', 'a veces', 'casi siempre', 'todos los días', 'cada semana', 'antes', 'de niño / de niña', 'cuando era pequeño', 'mientras', 'en aquella época', 'frecuentemente', 'a menudo'] },
            { color: 'amber', title: { ru: 'Indefinido', en: 'Indefinido' },
              tags: ['ayer', 'anteayer', 'el lunes', 'de repente', 'entonces', 'en ese momento', 'de pronto', 'una vez', 'hace 3 años', 'el año pasado', 'en 2010', 'aquella noche'] }
          ] },
          { type: 'text', color: 'teal', body: {
            ru: ['<b>Mientras</b> почти всегда ведёт за собой Imperfecto: два действия идут одновременно, фоном. <b>Cuando</b> подходит к обоим временам — смотрите, фон это или событие.'],
            en: ['<b>Mientras</b> is almost always followed by the imperfecto: two actions run at the same time, as background. <b>Cuando</b> works with both tenses — check whether it is background or an event.'] } },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Маркер — подсказка, а не закон.</b> С <i>ayer</i> тоже бывает Imperfecto, если это описание или фон: <i>Ayer llovía cuando salí.</i> — «Вчера шёл дождь, когда я вышел».'],
            en: ['<b>A marker is a hint, not a law.</b> Even <i>ayer</i> can go with the imperfecto when it describes the background: <i>Ayer llovía cuando salí.</i> — “It was raining yesterday when I went out.”'] } },
          { type: 'tip', title: { ru: 'Как выбрать', en: 'How to choose' }, body: {
            ru: ['Спросите себя: <b>«Как было? Что происходило?»</b> → Imperfecto. <b>«Что случилось?»</b> → Indefinido.',
                 'Действие повторялось без счёта (<i>siempre, a menudo</i>) → Imperfecto. Можно назвать момент или число раз (<i>una vez, ayer a las ocho</i>) → Indefinido.'],
            en: ['Ask yourself: <b>“What was it like? What was going on?”</b> → imperfecto. <b>“What happened?”</b> → indefinido.',
                 'The action was repeated with no count (<i>siempre, a menudo</i>) → imperfecto. You can name the moment or the number of times (<i>una vez, ayer a las ocho</i>) → indefinido.'] } }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Правильные глаголы в речи', en: 'Regular verbs in use' }, items: [
            { color: 'teal', es: 'Mi padre <b>trabajaba</b> en un banco.', ru: 'Мой отец работал в банке.', en: 'My father worked at a bank.' },
            { color: 'teal', es: '¿Dónde <b>vivíais</b> antes?', ru: 'Где вы жили раньше?', en: 'Where did you live before?' },
            { color: 'teal', es: 'Los domingos <b>comíamos</b> en casa de los abuelos.', ru: 'По воскресеньям мы обедали у бабушки с дедушкой.', en: 'On Sundays we had lunch at our grandparents’.' }
          ] },
          { type: 'examples', heading: { ru: 'Описание', en: 'Description' }, items: [
            { color: 'teal', es: 'La casa de mis abuelos <b>tenía</b> un jardín enorme.', ru: 'У дома бабушки и дедушки был огромный сад.', en: 'My grandparents’ house had a huge garden.' },
            { color: 'teal', es: 'El hotel <b>estaba</b> cerca de la playa y <b>era</b> muy barato.', ru: 'Отель был рядом с пляжем и стоил очень дёшево.', en: 'The hotel was near the beach and was very cheap.' },
            { color: 'teal', es: '<b>Eran</b> las diez de la noche y todavía <b>hacía</b> calor.', ru: 'Было десять вечера, а всё ещё было жарко.', en: 'It was ten at night and still hot.' }
          ] },
          { type: 'examples', heading: { ru: 'Привычка', en: 'Habit' }, items: [
            { color: 'teal', es: 'En la universidad <b>estudiabais</b> por la noche, ¿verdad?', ru: 'В университете вы занимались по ночам, правда?', en: 'At university you studied at night, didn’t you?' },
            { color: 'teal', es: 'Mi madre nos <b>leía</b> un cuento cada noche.', ru: 'Мама каждый вечер читала нам сказку.', en: 'My mother read us a story every night.' },
            { color: 'teal', es: 'Antes <b>fumaba</b>, pero ya no.', ru: 'Раньше я курил, но больше нет.', en: 'I used to smoke, but not any more.' }
          ] },
          { type: 'examples', heading: { ru: 'Фон и вежливость', en: 'Background and politeness' }, items: [
            { color: 'teal', es: 'Mientras yo <b>cocinaba</b>, los niños <b>veían</b> la tele.', ru: 'Пока я готовил, дети смотрели телевизор.', en: 'While I was cooking, the kids were watching TV.' },
            { color: 'teal', es: '<b>Íbamos</b> por la autopista cuando se pinchó una rueda.', ru: 'Мы ехали по шоссе, когда прокололось колесо.', en: 'We were driving on the motorway when we got a flat tyre.' },
            { color: 'teal', es: '¿Qué <b>hacías</b> cuando te llamé?', ru: 'Что ты делал, когда я тебе позвонил?', en: 'What were you doing when I called you?' },
            { color: 'purple', es: '<b>Quería</b> un café con leche, por favor.', ru: 'Я бы хотел кофе с молоком, пожалуйста.', en: 'I’d like a white coffee, please.' }
          ] },
          { type: 'text', heading: { ru: 'Мини-рассказ: оба времени вместе', en: 'A mini story with both tenses' }, body: {
            ru: ['<i>Era</i> una noche tranquila. <i>Llovía</i> y <i>hacía</i> frío. Yo <i>estaba</i> en casa y <i>leía</i> un libro cuando, de repente, <b>sonó</b> el teléfono. Me <b>levanté</b>, <b>contesté</b> y <b>escuché</b> la voz de mi amigo.',
                 'Курсив — Imperfecto (фон), жирный — Indefinido (события).'],
            en: ['<i>Era</i> una noche tranquila. <i>Llovía</i> y <i>hacía</i> frío. Yo <i>estaba</i> en casa y <i>leía</i> un libro cuando, de repente, <b>sonó</b> el teléfono. Me <b>levanté</b>, <b>contesté</b> y <b>escuché</b> la voz de mi amigo.',
                 'Italics mark the imperfecto (background), bold marks the indefinido (events).'] } },
          { type: 'examples', heading: { ru: 'Рассказ по фразам', en: 'The story line by line' }, items: [
            { badge: 'Imp', color: 'teal', es: '<b>Era</b> una noche tranquila. <b>Llovía</b> y <b>hacía</b> frío.', ru: 'Была тихая ночь. Шёл дождь, и было холодно.', en: 'It was a quiet night. It was raining and it was cold.' },
            { es: 'Yo <b>estaba</b> en casa y <b>leía</b> un libro cuando, de repente, <b>sonó</b> el teléfono.', ru: 'Я был дома и читал книгу, когда вдруг зазвонил телефон.', en: 'I was at home reading a book when suddenly the phone rang.' },
            { badge: 'Ind', color: 'amber', es: 'Me <b>levanté</b>, <b>contesté</b> y <b>escuché</b> la voz de mi amigo.', ru: 'Я встал, ответил и услышал голос своего друга.', en: 'I got up, answered and heard my friend’s voice.' }
          ] }
        ]
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
