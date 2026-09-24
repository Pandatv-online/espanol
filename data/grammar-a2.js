// A2 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('A2', [
  {
    id: 'a2-perfecto-indefinido', level: 'A2',
    title: { ru: 'Pretérito perfecto или indefinido', en: 'Pretérito perfecto vs indefinido' },
    summary: { ru: 'Два прошедших времени: когда говорить «he comido», а когда «comí». Правила, спряжение, неправильные глаголы и слова-маркеры.',
               en: 'Two past tenses: when to say “he comido” and when “comí”. Rules, conjugation, irregular verbs and time markers.' },
    sections: [
      {
        heading: { ru: 'Два прошедших времени', en: 'Two past tenses' },
        body: {
          ru: ['<b>Pretérito perfecto</b> = <b>haber</b> (в настоящем) + <b>participio</b>: <i>he comido</i>. Действие в прошлом, связанное с настоящим: период ещё не завершён или результат ощущается сейчас.',
               '<b>Pretérito indefinido</b> — собственные окончания: <i>comí</i>. Завершённое действие в прошлом, отдалённое от настоящего: конкретный момент или период, который уже закончился.'],
          en: ['<b>Pretérito perfecto</b> = <b>haber</b> (in the present) + <b>past participle</b>: <i>he comido</i>. A past action connected to the present: the time period is not over yet, or the result is felt now.',
               '<b>Pretérito indefinido</b> has its own endings: <i>comí</i>. A finished action in the past, cut off from the present: a specific moment or a period that is already over.']
        }
      },
      {
        heading: { ru: 'Сравнение', en: 'Side by side' },
        body: {
          ru: ['<b>Связь с настоящим.</b> Perfecto — есть, результат важен сейчас. Indefinido — нет, действие полностью в прошлом.',
               '<b>Период.</b> Perfecto — незавершённый (сегодня, эта неделя). Indefinido — завершённый (вчера, в прошлом году).',
               '<b>Вопрос.</b> Perfecto отвечает на «Что ты сделал сегодня / в жизни?». Indefinido — на «Что случилось тогда?».'],
          en: ['<b>Link to the present.</b> Perfecto: yes, the result matters now. Indefinido: no, the action is completely in the past.',
               '<b>Time period.</b> Perfecto: unfinished (today, this week). Indefinido: finished (yesterday, last year).',
               '<b>Question it answers.</b> Perfecto: “What have you done today / in your life?”. Indefinido: “What happened back then?”.']
        },
        table: {
          head: ['', 'perfecto', 'indefinido'],
          rows: [
            ['forma', 'he / has / ha / hemos / habéis / han + participio', '-é, -aste, -ó / -í, -iste, -ió'],
            ['señal', 'Esta semana he trabajado mucho.', 'El año pasado trabajé mucho.']
          ]
        }
      },
      {
        heading: { ru: 'Примеры попарно', en: 'Examples in pairs' },
        body: {
          ru: ['В каждой паре сначала Perfecto, потом Indefinido.'],
          en: ['In each pair, Perfecto comes first, then Indefinido.']
        },
        examples: [
          { es: 'He comido hoy.', ru: 'Я поел сегодня. (сегодня ещё длится)', en: 'I have eaten today. (today is not over)' },
          { es: 'Comí ayer.', ru: 'Я поел вчера. (вчера уже прошло)', en: 'I ate yesterday. (yesterday is over)' },
          { es: '¿Has estado en Madrid?', ru: 'Ты когда-нибудь был в Мадриде?', en: 'Have you ever been to Madrid?' },
          { es: 'Estuve en Madrid en 2015.', ru: 'Я был в Мадриде в 2015 году.', en: 'I was in Madrid in 2015.' },
          { es: 'Este mes he trabajado mucho.', ru: 'В этом месяце я много работал. (месяц не кончился)', en: 'I have worked a lot this month. (the month is not over)' },
          { es: 'El año pasado trabajé mucho.', ru: 'В прошлом году я много работал. (год завершён)', en: 'I worked a lot last year. (the year is over)' },
          { es: 'Hoy he visto a María.', ru: 'Сегодня я видел Марию.', en: 'I have seen María today.' },
          { es: 'Ayer vi a María.', ru: 'Вчера я видел Марию.', en: 'I saw María yesterday.' }
        ]
      },
      {
        heading: { ru: 'Pretérito perfecto: haber + participio', en: 'Pretérito perfecto: haber + participle' },
        body: {
          ru: ['Participio: глаголы на <b>-ar → -ado</b> (<i>hablar → hablado</i>), на <b>-er / -ir → -ido</b> (<i>comer → comido</i>, <i>vivir → vivido</i>).',
               'Важнейшие неправильные participios: <i>hacer → hecho</i> · <i>decir → dicho</i> · <i>ver → visto</i> · <i>volver → vuelto</i> · <i>poner → puesto</i> · <i>escribir → escrito</i> · <i>abrir → abierto</i> · <i>romper → roto</i>.'],
          en: ['Participle: <b>-ar verbs → -ado</b> (<i>hablar → hablado</i>), <b>-er / -ir verbs → -ido</b> (<i>comer → comido</i>, <i>vivir → vivido</i>).',
               'The key irregular participles: <i>hacer → hecho</i> · <i>decir → dicho</i> · <i>ver → visto</i> · <i>volver → vuelto</i> · <i>poner → puesto</i> · <i>escribir → escrito</i> · <i>abrir → abierto</i> · <i>romper → roto</i>.']
        },
        table: {
          head: ['', 'hablar', 'comer', 'vivir'],
          rows: [
            ['yo', 'he hablado', 'he comido', 'he vivido'],
            ['tú', 'has hablado', 'has comido', 'has vivido'],
            ['él / ella', 'ha hablado', 'ha comido', 'ha vivido'],
            ['nosotros', 'hemos hablado', 'hemos comido', 'hemos vivido'],
            ['vosotros', 'habéis hablado', 'habéis comido', 'habéis vivido'],
            ['ellos', 'han hablado', 'han comido', 'han vivido']
          ]
        }
      },
      {
        heading: { ru: 'Indefinido: правильные глаголы', en: 'Indefinido: regular verbs' },
        body: {
          ru: ['Окончания <b>-ar</b>: -é, -aste, -ó, -amos, -asteis, -aron. Окончания <b>-er / -ir</b> одинаковые: -í, -iste, -ió, -imos, -isteis, -ieron.'],
          en: ['<b>-ar</b> endings: -é, -aste, -ó, -amos, -asteis, -aron. <b>-er / -ir</b> endings are the same: -í, -iste, -ió, -imos, -isteis, -ieron.']
        },
        table: {
          head: ['', 'hablar', 'comer', 'vivir'],
          rows: [
            ['yo', 'hablé', 'comí', 'viví'],
            ['tú', 'hablaste', 'comiste', 'viviste'],
            ['él / ella', 'habló', 'comió', 'vivió'],
            ['nosotros', 'hablamos', 'comimos', 'vivimos'],
            ['vosotros', 'hablasteis', 'comisteis', 'vivisteis'],
            ['ellos', 'hablaron', 'comieron', 'vivieron']
          ]
        }
      },
      {
        heading: { ru: 'Неправильные глаголы в Indefinido', en: 'Irregular verbs in the indefinido' },
        body: {
          ru: ['<b>Ser</b> и <b>ir</b> в Indefinido совпадают полностью — смысл определяет только контекст.',
               'Группа «-uv-» и похожие: <i>tener → tuv-</i>, <i>estar → estuv-</i>, <i>poder → pud-</i>, <i>saber → sup-</i>, <i>poner → pus-</i>. Запомните основу — окончания у всех одинаковые: <b>-e, -iste, -o, -imos, -isteis, -ieron</b>. Ударных окончаний (-é, -ó) у этих глаголов нет.'],
          en: ['<b>Ser</b> and <b>ir</b> are identical in the indefinido — only the context tells you which one it is.',
               'The “-uv-” group and similar verbs: <i>tener → tuv-</i>, <i>estar → estuv-</i>, <i>poder → pud-</i>, <i>saber → sup-</i>, <i>poner → pus-</i>. Learn the stem — the endings are the same for all of them: <b>-e, -iste, -o, -imos, -isteis, -ieron</b>. These verbs have no stressed endings (-é, -ó).']
        },
        table: {
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
          ]
        },
        examples: [
          { es: 'Fui al mercado.', ru: 'Я пошёл на рынок. (ir)', en: 'I went to the market. (ir)' },
          { es: 'Fui estudiante.', ru: 'Я был студентом. (ser)', en: 'I was a student. (ser)' }
        ]
      },
      {
        heading: { ru: 'Слова-маркеры', en: 'Time markers' },
        body: {
          ru: ['<b>Главное правило:</b> если период ещё не закончился (сегодня, эта неделя) — Perfecto. Если период завершён (вчера, в прошлом году) — Indefinido.',
               '<b>Исключение — Латинская Америка:</b> там Indefinido часто используют вместо Perfecto даже с <i>hoy</i>, и это нормально для разговорной речи. В Испании правило соблюдают строже.'],
          en: ['<b>The main rule:</b> if the time period is not over yet (today, this week), use Perfecto. If it is finished (yesterday, last year), use Indefinido.',
               '<b>Exception — Latin America:</b> people there often use Indefinido instead of Perfecto even with <i>hoy</i>, and that is normal in everyday speech. Spain follows the rule more strictly.']
        },
        table: {
          head: ['perfecto', 'indefinido'],
          rows: [
            ['hoy', 'ayer'],
            ['esta mañana', 'anteayer'],
            ['esta tarde', 'el lunes'],
            ['esta semana', 'la semana pasada'],
            ['este mes', 'el mes pasado'],
            ['este año', 'el año pasado'],
            ['ya', 'en 2010'],
            ['todavía no', 'hace 3 días'],
            ['alguna vez', 'entonces'],
            ['nunca', 'de repente'],
            ['siempre', 'aquella vez'],
            ['últimamente', ''],
            ['recientemente', '']
          ]
        }
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
