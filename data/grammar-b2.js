// B2 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('B2', [
  {
    id: 'b2-imperfecto-subjuntivo', level: 'B2',
    title: { ru: 'Imperfecto de subjuntivo', en: 'Imperfecto de subjuntivo' },
    hero: {
      es: 'Imperfecto de <b>Subjuntivo</b>',
      sub: { ru: 'Прошедшее время субхунтива: hablara / hablase, согласование времён, como si и ojalá',
             en: 'The past subjunctive: hablara / hablase, sequence of tenses, como si and ojalá' }
    },
    tabs: [
      {
        id: 'formation', label: { ru: 'Образование', en: 'Formation' },
        blocks: [
          { type: 'text', color: 'coral', heading: { ru: 'Правило', en: 'The rule' }, body: {
            ru: ['<b>Как образуется:</b> берём форму <b>ellos</b> в Pretérito indefinido и отрезаем <b>-ron</b>: <i>hablaron → habla-</i>, <i>comieron → comie-</i>. Добавляем окончания <b>-ra, -ras, -ra, -ramos, -rais, -ran</b>.',
                 '<b>Ударение:</b> форма <b>nosotros</b> всегда с ударением на слог перед окончанием: <i>habláramos, comiéramos, viviéramos, fuéramos</i>.'],
            en: ['<b>How to form it:</b> take the <b>ellos</b> form of the Pretérito indefinido and drop <b>-ron</b>: <i>hablaron → habla-</i>, <i>comieron → comie-</i>. Add the endings <b>-ra, -ras, -ra, -ramos, -rais, -ran</b>.',
                 '<b>Accent:</b> the <b>nosotros</b> form always has a written accent on the syllable before the ending: <i>habláramos, comiéramos, viviéramos, fuéramos</i>.'] } },
          { type: 'conj', heading: { ru: 'От Indefinido к субхунтиву', en: 'From the Indefinido to the subjunctive' }, verbs: [
            { inf: 'hablar', tr: { ru: '-ar · говорить', en: '-ar · to speak' }, variants: [
              { label: 'Indefinido', color: 'amber', rows: [['yo', 'hablé'], ['tú', 'hablaste'], ['él / ella', 'habló'], ['nosotros', 'hablamos'], ['vosotros', 'hablasteis'], ['ellos', 'habla<b>ron</b>']] },
              { label: '-ra', color: 'coral', rows: [['yo', 'habla<b>ra</b>'], ['tú', 'habla<b>ras</b>'], ['él / ella', 'habla<b>ra</b>'], ['nosotros', 'hablá<b>ramos</b>'], ['vosotros', 'habla<b>rais</b>'], ['ellos', 'habla<b>ran</b>']] },
              { label: '-se', color: 'coral', rows: [['yo', 'habla<b>se</b>'], ['tú', 'habla<b>ses</b>'], ['él / ella', 'habla<b>se</b>'], ['nosotros', 'hablá<b>semos</b>'], ['vosotros', 'habla<b>seis</b>'], ['ellos', 'habla<b>sen</b>']] }
            ] },
            { inf: 'comer', tr: { ru: '-er · есть', en: '-er · to eat' }, variants: [
              { label: 'Indefinido', color: 'amber', rows: [['yo', 'comí'], ['tú', 'comiste'], ['él / ella', 'comió'], ['nosotros', 'comimos'], ['vosotros', 'comisteis'], ['ellos', 'comie<b>ron</b>']] },
              { label: '-ra', color: 'coral', rows: [['yo', 'comie<b>ra</b>'], ['tú', 'comie<b>ras</b>'], ['él / ella', 'comie<b>ra</b>'], ['nosotros', 'comié<b>ramos</b>'], ['vosotros', 'comie<b>rais</b>'], ['ellos', 'comie<b>ran</b>']] },
              { label: '-se', color: 'coral', rows: [['yo', 'comie<b>se</b>'], ['tú', 'comie<b>ses</b>'], ['él / ella', 'comie<b>se</b>'], ['nosotros', 'comié<b>semos</b>'], ['vosotros', 'comie<b>seis</b>'], ['ellos', 'comie<b>sen</b>']] }
            ] },
            { inf: 'vivir', tr: { ru: '-ir · жить', en: '-ir · to live' }, variants: [
              { label: 'Indefinido', color: 'amber', rows: [['yo', 'viví'], ['tú', 'viviste'], ['él / ella', 'vivió'], ['nosotros', 'vivimos'], ['vosotros', 'vivisteis'], ['ellos', 'vivie<b>ron</b>']] },
              { label: '-ra', color: 'coral', rows: [['yo', 'vivie<b>ra</b>'], ['tú', 'vivie<b>ras</b>'], ['él / ella', 'vivie<b>ra</b>'], ['nosotros', 'vivié<b>ramos</b>'], ['vosotros', 'vivie<b>rais</b>'], ['ellos', 'vivie<b>ran</b>']] },
              { label: '-se', color: 'coral', rows: [['yo', 'vivie<b>se</b>'], ['tú', 'vivie<b>ses</b>'], ['él / ella', 'vivie<b>se</b>'], ['nosotros', 'vivié<b>semos</b>'], ['vosotros', 'vivie<b>seis</b>'], ['ellos', 'vivie<b>sen</b>']] }
            ] }
          ] },
          { type: 'rules', heading: { ru: 'Формы на -ra и на -se', en: 'The -ra and -se forms' }, items: [
            { color: 'coral', label: { ru: 'Форма 1', en: 'Form 1' }, title: { ru: 'На -ra', en: 'The -ra form' }, es: '-ra, -ras, -ra, -ramos, -rais, -ran',
              body: { ru: 'Чаще звучит в речи, особенно в Латинской Америке. Только она может стоять в главной части вместо condicional: <i>quisiera, debiera, hubiera</i>.',
                      en: 'More common in speech, especially in Latin America. Only this form can replace the conditional in a main clause: <i>quisiera, debiera, hubiera</i>.' } },
            { color: 'coral', label: { ru: 'Форма 2', en: 'Form 2' }, title: { ru: 'На -se', en: 'The -se form' }, es: '-se, -ses, -se, -semos, -seis, -sen',
              body: { ru: 'Равноправна с -ra в придаточных: <i>hablara = hablase</i>, <i>tuviera = tuviese</i>. Встречается в Испании и в письменных текстах.',
                      en: 'Equivalent to -ra in subordinate clauses: <i>hablara = hablase</i>, <i>tuviera = tuviese</i>. Heard in Spain and found in writing.' } }
          ] },
          { type: 'tip', heading: { ru: 'Совет', en: 'Tip' }, title: { ru: 'Выучите обе', en: 'Learn both' }, body: {
            ru: ['Говорить можно только на <b>-ra</b> — вас везде поймут. Но <b>-se</b> нужно узнавать: она постоянно встречается в книгах, газетах и в речи испанцев.'],
            en: ['You can get by speaking with <b>-ra</b> only — everyone will understand you. But you need to recognise <b>-se</b>: it is everywhere in books, newspapers and in the speech of people from Spain.'] } }
        ]
      },
      {
        id: 'irregulars', label: { ru: 'Неправильные', en: 'Irregulars' },
        blocks: [
          { type: 'text', color: 'coral', heading: { ru: 'Откуда неправильность', en: 'Where the irregularity comes from' }, body: {
            ru: ['Отдельных исключений нет: вся неправильность приходит из Indefinido. Если знаете <i>tuvieron, dijeron, fueron</i>, знаете и <i>tuviera, dijera, fuera</i>.',
                 '<b>Внимание:</b> <i>dijeron → dijera</i> (не «dijiera»), <i>trajeron → trajera</i>, <i>leyeron → leyera</i>. У <b>ser</b> и <b>ir</b> форма общая: <i>fuera</i> — смысл понятен из контекста.'],
            en: ['There are no separate exceptions: all the irregularity comes from the Indefinido. If you know <i>tuvieron, dijeron, fueron</i>, you know <i>tuviera, dijera, fuera</i>.',
                 '<b>Watch out:</b> <i>dijeron → dijera</i> (not “dijiera”), <i>trajeron → trajera</i>, <i>leyeron → leyera</i>. <b>Ser</b> and <b>ir</b> share one form: <i>fuera</i> — the context tells you which.'] } },
          { type: 'table', heading: { ru: 'Основа из Indefinido', en: 'The stem comes from the Indefinido' },
            head: ['infinitivo', 'indefinido (ellos)', 'subjuntivo (yo)'],
            rows: [
              ['tener', 'tuvieron', 'tuviera'],
              ['estar', 'estuvieron', 'estuviera'],
              ['hacer', 'hicieron', 'hiciera'],
              ['decir', 'dijeron', 'dijera'],
              ['poder', 'pudieron', 'pudiera'],
              ['querer', 'quisieron', 'quisiera'],
              ['venir', 'vinieron', 'viniera'],
              ['saber', 'supieron', 'supiera'],
              ['ser / ir', 'fueron', 'fuera'],
              ['pedir', 'pidieron', 'pidiera'],
              ['dormir', 'durmieron', 'durmiera'],
              ['leer', 'leyeron', 'leyera'],
              ['haber', 'hubieron', 'hubiera']
            ] },
          { type: 'markers', heading: { ru: 'Группы по основе', en: 'Groups by stem' }, groups: [
            { color: 'coral', title: { ru: 'Основа на -uv-', en: 'Stem in -uv-' }, tags: ['tuviera', 'estuviera', 'anduviera', 'hubiera'] },
            { color: 'coral', title: { ru: 'Основа на -i-', en: 'Stem in -i-' }, tags: ['hiciera', 'quisiera', 'viniera'] },
            { color: 'coral', title: { ru: 'Основа на -u-', en: 'Stem in -u-' }, tags: ['pudiera', 'supiera', 'pusiera', 'cupiera'] },
            { color: 'coral', title: { ru: 'На -j- (без i)', en: 'In -j- (no i)' }, tags: ['dijera', 'trajera', 'condujera', 'tradujera'] },
            { color: 'coral', title: { ru: 'С -y-', en: 'With -y-' }, tags: ['leyera', 'oyera', 'cayera', 'construyera'] },
            { color: 'coral', title: { ru: 'e → i, o → u', en: 'e → i, o → u' }, tags: ['pidiera', 'sintiera', 'siguiera', 'durmiera', 'muriera'] }
          ] },
          { type: 'conj', heading: { ru: 'Спряжение полностью', en: 'Full conjugation' }, verbs: [
            { inf: 'tener', tr: { ru: 'иметь', en: 'to have' }, variants: [
              { label: 'Indefinido', color: 'amber', rows: [['yo', 'tuve'], ['tú', 'tuviste'], ['él / ella', 'tuvo'], ['nosotros', 'tuvimos'], ['vosotros', 'tuvisteis'], ['ellos', 'tuvie<b>ron</b>']] },
              { label: '-ra', color: 'coral', rows: [['yo', 'tuvie<b>ra</b>'], ['tú', 'tuvie<b>ras</b>'], ['él / ella', 'tuvie<b>ra</b>'], ['nosotros', 'tuvié<b>ramos</b>'], ['vosotros', 'tuvie<b>rais</b>'], ['ellos', 'tuvie<b>ran</b>']] },
              { label: '-se', color: 'coral', rows: [['yo', 'tuvie<b>se</b>'], ['tú', 'tuvie<b>ses</b>'], ['él / ella', 'tuvie<b>se</b>'], ['nosotros', 'tuvié<b>semos</b>'], ['vosotros', 'tuvie<b>seis</b>'], ['ellos', 'tuvie<b>sen</b>']] }
            ] },
            { inf: 'decir', tr: { ru: 'сказать', en: 'to say' }, variants: [
              { label: 'Indefinido', color: 'amber', rows: [['yo', 'dije'], ['tú', 'dijiste'], ['él / ella', 'dijo'], ['nosotros', 'dijimos'], ['vosotros', 'dijisteis'], ['ellos', 'dije<b>ron</b>']] },
              { label: '-ra', color: 'coral', rows: [['yo', 'dije<b>ra</b>'], ['tú', 'dije<b>ras</b>'], ['él / ella', 'dije<b>ra</b>'], ['nosotros', 'dijé<b>ramos</b>'], ['vosotros', 'dije<b>rais</b>'], ['ellos', 'dije<b>ran</b>']] },
              { label: '-se', color: 'coral', rows: [['yo', 'dije<b>se</b>'], ['tú', 'dije<b>ses</b>'], ['él / ella', 'dije<b>se</b>'], ['nosotros', 'dijé<b>semos</b>'], ['vosotros', 'dije<b>seis</b>'], ['ellos', 'dije<b>sen</b>']] }
            ] },
            { inf: 'ser · ir', tr: { ru: 'быть · идти', en: 'to be · to go' }, variants: [
              { label: 'Indefinido', color: 'amber', rows: [['yo', 'fui'], ['tú', 'fuiste'], ['él / ella', 'fue'], ['nosotros', 'fuimos'], ['vosotros', 'fuisteis'], ['ellos', 'fue<b>ron</b>']] },
              { label: '-ra', color: 'coral', rows: [['yo', 'fue<b>ra</b>'], ['tú', 'fue<b>ras</b>'], ['él / ella', 'fue<b>ra</b>'], ['nosotros', 'fué<b>ramos</b>'], ['vosotros', 'fue<b>rais</b>'], ['ellos', 'fue<b>ran</b>']] },
              { label: '-se', color: 'coral', rows: [['yo', 'fue<b>se</b>'], ['tú', 'fue<b>ses</b>'], ['él / ella', 'fue<b>se</b>'], ['nosotros', 'fué<b>semos</b>'], ['vosotros', 'fue<b>seis</b>'], ['ellos', 'fue<b>sen</b>']] }
            ] },
            { inf: 'dormir', tr: { ru: 'o → u · спать', en: 'o → u · to sleep' }, variants: [
              { label: 'Indefinido', color: 'amber', rows: [['yo', 'dormí'], ['tú', 'dormiste'], ['él / ella', 'durmió'], ['nosotros', 'dormimos'], ['vosotros', 'dormisteis'], ['ellos', 'durmie<b>ron</b>']] },
              { label: '-ra', color: 'coral', rows: [['yo', 'durmie<b>ra</b>'], ['tú', 'durmie<b>ras</b>'], ['él / ella', 'durmie<b>ra</b>'], ['nosotros', 'durmié<b>ramos</b>'], ['vosotros', 'durmie<b>rais</b>'], ['ellos', 'durmie<b>ran</b>']] },
              { label: '-se', color: 'coral', rows: [['yo', 'durmie<b>se</b>'], ['tú', 'durmie<b>ses</b>'], ['él / ella', 'durmie<b>se</b>'], ['nosotros', 'durmié<b>semos</b>'], ['vosotros', 'durmie<b>seis</b>'], ['ellos', 'durmie<b>sen</b>']] }
            ] }
          ] }
        ]
      },
      {
        id: 'sequence', label: { ru: 'Согласование', en: 'Sequence' },
        blocks: [
          { type: 'text', heading: { ru: 'Правило', en: 'The rule' }, body: {
            ru: ['<b>Согласование времён.</b> Если глагол главной части в прошедшем или в condicional и требует субхунтива, в придаточной — Imperfecto de subjuntivo: <i>Quiero que vengas → Quería que vinieras</i>; <i>Me gustaría que vinieras</i>.'],
            en: ['<b>Sequence of tenses.</b> If the main verb is in a past tense or the conditional and calls for the subjunctive, the clause takes the Imperfecto de subjuntivo: <i>Quiero que vengas → Quería que vinieras</i>; <i>Me gustaría que vinieras</i>.'] } },
          { type: 'table', heading: { ru: 'Главная часть → придаточная', en: 'Main clause → subordinate clause' },
            head: ['', { ru: 'Главная часть', en: 'Main clause' }, { ru: 'Придаточная', en: 'Subordinate' }],
            rows: [
              ['presente', 'Quiero que…', 'vengas'],
              ['futuro', 'Querré que…', 'vengas'],
              ['imperativo', 'Dile que…', 'venga'],
              ['perfecto', 'He pedido que…', 'venga'],
              ['indefinido', 'Quise que…', 'vinieras'],
              ['imperfecto', 'Quería que…', 'vinieras'],
              ['condicional', 'Querría que…', 'vinieras']
            ] },
          { type: 'conj', heading: { ru: 'Сейчас или в прошлом', en: 'Now or in the past' }, verbs: [
            { inf: 'querer que', tr: { ru: 'желание', en: 'a wish' }, variants: [
              { label: { ru: 'сейчас', en: 'now' }, color: 'coral', rows: [['yo', 'Quiero que <b>vengas</b>.'], ['ellos', 'Quieren que <b>hablemos</b>.']] },
              { label: { ru: 'в прошлом', en: 'in the past' }, color: 'coral', rows: [['yo', 'Quería que <b>vinieras</b>.'], ['ellos', 'Querían que <b>habláramos</b>.']] }
            ] },
            { inf: 'pedir que', tr: { ru: 'просьба', en: 'a request' }, variants: [
              { label: { ru: 'сейчас', en: 'now' }, color: 'coral', rows: [['ella', 'Me pide que la <b>llame</b>.'], ['tú', 'Nos pides que <b>esperemos</b>.']] },
              { label: { ru: 'в прошлом', en: 'in the past' }, color: 'coral', rows: [['ella', 'Me pidió que la <b>llamara</b>.'], ['tú', 'Nos pediste que <b>esperáramos</b>.']] }
            ] },
            { inf: 'es importante que', tr: { ru: 'оценка', en: 'an evaluation' }, variants: [
              { label: { ru: 'сейчас', en: 'now' }, color: 'coral', rows: [['es', 'Es importante que <b>estudies</b>.'], ['me alegra', 'Me alegra que <b>estéis</b> aquí.']] },
              { label: { ru: 'в прошлом', en: 'in the past' }, color: 'coral', rows: [['era', 'Era importante que <b>estudiaras</b>.'], ['me alegró', 'Me alegró que <b>estuvierais</b> aquí.']] }
            ] }
          ] },
          { type: 'text', color: 'coral', heading: { ru: 'Condicional в главной части', en: 'A conditional in the main clause' }, body: {
            ru: ['<b>Condicional в главной части</b> тоже требует Imperfecto de subjuntivo: <i>Me gustaría que vinieras</i>, <i>Sería mejor que te quedaras</i>, <i>Preferiría que no dijeras nada</i>.'],
            en: ['<b>A conditional in the main clause</b> also calls for the Imperfecto de subjuntivo: <i>Me gustaría que vinieras</i>, <i>Sería mejor que te quedaras</i>, <i>Preferiría que no dijeras nada</i>.'] } },
          { type: 'text', color: 'coral', heading: { ru: 'Когда остаётся presente', en: 'When the present stays' }, body: {
            ru: ['<b>Pretérito perfecto</b> в главной части обычно связан с настоящим, поэтому после него чаще идёт presente de subjuntivo: <i>Le he pedido que venga mañana</i>.',
                 'Если просьба в прошлом ещё актуальна, в живой речи можно услышать и presente: <i>Me pidió que lo llame mañana</i>. Надёжный вариант — Imperfecto: <i>Me pidió que lo llamara</i>.'],
            en: ['The <b>Pretérito perfecto</b> in the main clause is usually linked to the present, so it is more often followed by the presente de subjuntivo: <i>Le he pedido que venga mañana</i>.',
                 'If a past request still holds, you may hear the present in everyday speech: <i>Me pidió que lo llame mañana</i>. The safe choice is the Imperfecto: <i>Me pidió que lo llamara</i>.'] } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'coral', es: 'Mis padres querían que <b>estudiara</b> Derecho.', ru: 'Родители хотели, чтобы я изучал право.', en: 'My parents wanted me to study law.' },
            { color: 'coral', es: 'Me gustaría que me <b>llamaras</b> más a menudo.', ru: 'Мне бы хотелось, чтобы ты звонил мне чаще.', en: 'I’d like you to call me more often.' },
            { color: 'coral', es: 'Sería mejor que <b>os quedarais</b> en casa esta noche.', ru: 'Было бы лучше, если бы вы остались сегодня вечером дома.', en: 'It would be better if you stayed at home tonight.' }
          ] }
        ]
      },
      {
        id: 'triggers', label: { ru: 'Триггеры', en: 'Triggers' },
        blocks: [
          { type: 'text', heading: { ru: 'Те же случаи, что в presente', en: 'The same cases as in the present' }, body: {
            ru: ['Триггеры те же, что у presente de subjuntivo (WEIRDO), только главный глагол стоит в прошедшем или в condicional.'],
            en: ['The triggers are the same as for the presente de subjuntivo (WEIRDO); only the main verb is in a past tense or the conditional.'] } },
          { type: 'triggers', heading: { ru: 'Случаи употребления', en: 'When to use it' }, items: [
            { num: 'W', color: 'coral', title: { ru: 'Желание', en: 'Wishes' }, sub: { ru: 'deseo, voluntad', en: 'deseo, voluntad' },
              phrases: ['quería que', 'esperaba que', 'necesitaba que', 'preferiría que', 'me gustaría que'],
              ex: { es: 'Quería que me <b>acompañaras</b> al médico.', ru: 'Я хотел, чтобы ты сходил со мной к врачу.', en: 'I wanted you to come to the doctor’s with me.' } },
            { num: 'E', color: 'coral', title: { ru: 'Эмоции', en: 'Emotions' }, sub: { ru: 'emoción, sentimiento', en: 'emoción, sentimiento' },
              phrases: ['me alegró que', 'sentí que', 'me molestaba que', 'temía que', 'me sorprendió que'],
              ex: { es: 'Me molestaba que <b>llegaras</b> siempre tarde.', ru: 'Меня раздражало, что ты всегда опаздывал.', en: 'It annoyed me that you were always late.' } },
            { num: 'I', color: 'coral', title: { ru: 'Безличные оценки', en: 'Impersonal evaluations' }, sub: { ru: 'expresiones impersonales', en: 'expresiones impersonales' },
              phrases: ['era importante que', 'fue una pena que', 'sería mejor que', 'era normal que', 'era posible que'],
              ex: { es: 'Fue una pena que no <b>pudierais</b> venir.', ru: 'Жаль, что вы не смогли прийти.', en: 'It was a pity you couldn’t come.' } },
            { num: 'R', color: 'coral', title: { ru: 'Просьбы, советы', en: 'Requests, advice' }, sub: { ru: 'petición, consejo, mandato', en: 'petición, consejo, mandato' },
              phrases: ['le pedí que', 'me aconsejó que', 'nos prohibieron que', 'les recomendé que', 'te dije que'],
              ex: { es: 'Le pedí al camarero que nos <b>trajera</b> agua.', ru: 'Я попросил официанта принести нам воды.', en: 'I asked the waiter to bring us some water.' } },
            { num: 'D', color: 'coral', title: { ru: 'Сомнение, отрицание', en: 'Doubt, denial' }, sub: { ru: 'duda, negación', en: 'duda, negación' },
              phrases: ['no creía que', 'dudaba que', 'no era verdad que', 'no estaba seguro de que'],
              ex: { es: 'No creía que <b>fuera</b> tan difícil.', ru: 'Я не думал, что это так трудно.', en: 'I didn’t think it would be so hard.' } },
            { num: 'P', color: 'coral', title: { ru: 'Союзы', en: 'Conjunctions' }, sub: { ru: 'цель, условие, время', en: 'purpose, condition, time' },
              phrases: ['para que', 'sin que', 'antes de que', 'a menos que', 'con tal de que', 'en cuanto'],
              body: { ru: '<i>Cuando, en cuanto, hasta que</i> — субхунтив, если действие было будущим по отношению к прошлому: <i>Dijo que vendría cuando terminara</i>.',
                      en: '<i>Cuando, en cuanto, hasta que</i> take the subjunctive if the action was still in the future at that past moment: <i>Dijo que vendría cuando terminara</i>.' },
              ex: { es: 'Te lo expliqué para que lo <b>entendieras</b>.', ru: 'Я объяснил тебе это, чтобы ты понял.', en: 'I explained it to you so that you would understand.' } }
          ] },
          { type: 'conj', heading: { ru: 'Одна фраза — два наклонения', en: 'One phrase, two moods' }, verbs: [
            { inf: 'creía que', tr: { ru: 'уверенность или сомнение', en: 'certainty or doubt' }, variants: [
              { label: 'Indicativo', color: 'teal', rows: [['yo', 'Creía que <b>venía</b>.'], ['nosotros', 'Pensábamos que <b>era</b> fácil.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['yo', 'No creía que <b>viniera</b>.'], ['nosotros', 'No pensábamos que <b>fuera</b> fácil.']] }
            ] },
            { inf: 'me dijo que', tr: { ru: 'сообщение или просьба', en: 'information or request' }, variants: [
              { label: 'Indicativo', color: 'teal', rows: [['info', 'Me dijo que <b>venía</b>.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['orden', 'Me dijo que <b>viniera</b>.']] }
            ] },
            { inf: 'era … que', tr: { ru: 'факт или оценка', en: 'fact or evaluation' }, variants: [
              { label: 'Indicativo', color: 'teal', rows: [['verdad', 'Era verdad que <b>estaba</b> enfermo.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['raro', 'Era raro que <b>estuviera</b> enfermo.']] }
            ] },
            { inf: 'cuando', tr: { ru: 'факт или будущее в прошлом', en: 'past fact or future in the past' }, variants: [
              { label: 'Indicativo', color: 'amber', rows: [['hecho', 'Cuando <b>llegó</b>, cenamos.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['futuro', 'Dijo que cenaríamos cuando <b>llegara</b>.']] }
            ] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'coral', es: 'Esperaba que me <b>contestaras</b> antes.', ru: 'Я надеялся, что ты ответишь мне раньше.', en: 'I was hoping you’d answer me sooner.' },
            { color: 'coral', es: 'Dudábamos que el vuelo <b>saliera</b> a tiempo.', ru: 'Мы сомневались, что рейс вылетит вовремя.', en: 'We doubted the flight would leave on time.' },
            { color: 'coral', es: 'Salieron de la oficina sin que nadie los <b>viera</b>.', ru: 'Они ушли из офиса незаметно для всех.', en: 'They left the office without anyone seeing them.' }
          ] }
        ]
      },
      {
        id: 'as-if', label: { ru: 'Como si', en: 'Como si' },
        blocks: [
          { type: 'rules', heading: { ru: 'Нереальное и вежливое', en: 'Unreal and polite' }, items: [
            { color: 'coral', label: { ru: 'Сравнение', en: 'Comparison' }, title: { ru: 'Como si — «как будто»', en: 'Como si — “as if”' }, es: 'como si + hablara / hubiera hablado',
              body: { ru: 'После <b>como si</b> — всегда Imperfecto (или Pluscuamperfecto) de subjuntivo, в любом времени: <i>Habla como si lo supiera todo</i>.',
                      en: '<b>Como si</b> is always followed by the Imperfecto (or Pluscuamperfecto) de subjuntivo, whatever the tense: <i>Habla como si lo supiera todo</i>.' } },
            { color: 'coral', label: { ru: 'Желание', en: 'Wish' }, title: { ru: 'Ojalá + imperfecto', en: 'Ojalá + imperfecto' }, es: 'ojalá + tuviera',
              body: { ru: 'Желание, которое вряд ли сбудется или заведомо нереально сейчас: <i>Ojalá estuvieras aquí</i>.',
                      en: 'A wish that is unlikely to come true or is unreal right now: <i>Ojalá estuvieras aquí</i>.' } },
            { color: 'coral', label: { ru: 'Вежливость', en: 'Politeness' }, title: { ru: 'Quisiera', en: 'Quisiera' }, es: 'quisiera · pudiera · debiera',
              body: { ru: '<i>Quisiera</i> мягче, чем <i>quiero</i>: <i>Quisiera hablar con el director</i>. Так же <i>¿Pudiera…?</i>, <i>Debieras…</i> — только форма на -ra.',
                      en: '<i>Quisiera</i> is softer than <i>quiero</i>: <i>Quisiera hablar con el director</i>. Likewise <i>¿Pudiera…?</i>, <i>Debieras…</i> — only the -ra form.' } },
            { color: 'coral', label: { ru: 'Восклицание', en: 'Exclamation' }, title: { ru: 'Ni que… · Quién…', en: 'Ni que… · Quién…' }, es: '¡Ni que fuera…! · ¡Quién tuviera…!',
              body: { ru: '<i>¡Ni que fuera tu madre!</i> — «можно подумать, она твоя мать!». <i>¡Quién tuviera tu suerte!</i> — «мне бы твоё везение!».',
                      en: '<i>¡Ni que fuera tu madre!</i> — “anyone would think she was your mother!”. <i>¡Quién tuviera tu suerte!</i> — “I wish I had your luck!”.' } }
          ] },
          { type: 'conj', heading: { ru: 'Ojalá: насколько реально', en: 'Ojalá: how likely' }, verbs: [
            { inf: 'ojalá', tr: { ru: 'одно желание, три степени', en: 'one wish, three degrees' }, variants: [
              { label: { ru: 'возможно', en: 'possible' }, color: 'coral', rows: [['mañana', 'Ojalá <b>haga</b> sol.'], ['tú', 'Ojalá <b>vengas</b> a la cena.']] },
              { label: { ru: 'вряд ли', en: 'unlikely' }, color: 'coral', rows: [['ahora', 'Ojalá <b>hiciera</b> sol.'], ['tú', 'Ojalá <b>vinieras</b> a la cena.']] },
              { label: { ru: 'уже поздно', en: 'too late' }, color: 'coral', rows: [['ayer', 'Ojalá <b>hubiera hecho</b> sol.'], ['tú', 'Ojalá <b>hubieras venido</b>.']] }
            ] },
            { inf: 'como · como si', tr: { ru: 'реальное или воображаемое', en: 'real or imagined' }, variants: [
              { label: 'Indicativo', color: 'teal', rows: [['como', 'Lo hacía como me <b>decías</b>.'], ['como', 'Cocina como <b>cocinaba</b> su abuela.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['como si', 'Me habla como si <b>fuera</b> un niño.'], ['como si', 'Cocina como si <b>fuera</b> un chef.']] }
            ] }
          ] },
          { type: 'markers', heading: { ru: 'Слова-сигналы', en: 'Signal words' }, groups: [
            { color: 'coral', title: { ru: 'Нереальное сравнение', en: 'Unreal comparison' }, tags: ['como si', 'ni que'] },
            { color: 'coral', title: { ru: 'Нереальное желание', en: 'Unreal wish' }, tags: ['ojalá', 'quién + -ra', 'si al menos'] },
            { color: 'coral', title: { ru: 'Вежливость', en: 'Politeness' }, tags: ['quisiera', 'pudiera', 'debiera'] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'coral', es: 'Nos miró como si no nos <b>conociera</b>.', ru: 'Он посмотрел на нас так, будто нас не знает.', en: 'He looked at us as if he didn’t know us.' },
            { color: 'coral', es: 'Ojalá <b>tuviera</b> más tiempo libre.', ru: 'Вот бы у меня было больше свободного времени.', en: 'I wish I had more free time.' },
            { color: 'coral', es: '<b>Quisiera</b> hablar con el director, por favor.', ru: 'Я хотел бы поговорить с директором, пожалуйста.', en: 'I’d like to speak to the director, please.' }
          ] },
          { type: 'tip', heading: { ru: 'Совет', en: 'Tip' }, title: { ru: 'Как запомнить', en: 'How to remember' }, body: {
            ru: ['<b>Como si</b> никогда не берёт presente: «как будто» — это всегда воображаемое, а воображаемое в испанском — прошедший субхунтив.'],
            en: ['<b>Como si</b> never takes the present: “as if” is always imagined, and in Spanish the imagined goes into the past subjunctive.'] } }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Одна фраза: -ra и -se', en: 'One sentence: -ra and -se' }, items: [
            { badge: 'ra', color: 'coral', es: 'Me pidió que la <b>ayudara</b> con la mudanza.', ru: 'Она попросила меня помочь ей с переездом.', en: 'She asked me to help her with the move.' },
            { badge: 'se', color: 'coral', es: 'Me pidió que la <b>ayudase</b> con la mudanza.', ru: 'То же самое с формой на -se.', en: 'The same with the -se form.' },
            { badge: 'ra', color: 'coral', es: 'El médico le recomendó que <b>dejara</b> de fumar.', ru: 'Врач посоветовал ему бросить курить.', en: 'The doctor advised him to stop smoking.' },
            { badge: 'se', color: 'coral', es: 'El médico le recomendó que <b>dejase</b> de fumar.', ru: 'То же самое с формой на -se.', en: 'The same with the -se form.' }
          ] },
          { type: 'examples', heading: { ru: 'Согласование и триггеры', en: 'Sequence and triggers' }, items: [
            { color: 'coral', es: 'El profesor nos pidió que <b>entregáramos</b> el trabajo el lunes.', ru: 'Преподаватель попросил нас сдать работу в понедельник.', en: 'The teacher asked us to hand in the essay on Monday.' },
            { color: 'coral', es: 'No era necesario que <b>vinieran</b> todos.', ru: 'Не нужно было приходить всем.', en: 'It wasn’t necessary for everyone to come.' },
            { color: 'coral', es: 'A mi hermano le prohibieron que <b>saliera</b> después de las diez.', ru: 'Моему брату запретили выходить из дома после десяти.', en: 'My brother wasn’t allowed to go out after ten.' },
            { color: 'coral', es: 'Me sorprendió que el museo <b>estuviera</b> cerrado.', ru: 'Меня удивило, что музей был закрыт.', en: 'I was surprised that the museum was closed.' },
            { color: 'coral', es: 'Te lo dije para que no te <b>preocuparas</b>.', ru: 'Я сказал тебе это, чтобы ты не волновался.', en: 'I told you so that you wouldn’t worry.' },
            { color: 'coral', es: 'Mi jefe quería que <b>hiciéramos</b> horas extra.', ru: 'Мой начальник хотел, чтобы мы работали сверхурочно.', en: 'My boss wanted us to work overtime.' },
            { color: 'coral', es: 'Me alegró mucho que <b>vinierais</b> a la boda.', ru: 'Я очень обрадовался, что вы пришли на свадьбу.', en: 'I was really glad you came to the wedding.' },
            { color: 'coral', es: 'Antes de que <b>empezara</b> la película, apagamos los móviles.', ru: 'Перед началом фильма мы выключили телефоны.', en: 'Before the film started, we switched off our phones.' },
            { color: 'coral', es: 'Les aconsejé que <b>durmieran</b> un poco antes del viaje.', ru: 'Я посоветовал им немного поспать перед поездкой.', en: 'I advised them to get some sleep before the trip.' },
            { color: 'coral', es: 'Dijo que nos avisaría en cuanto <b>llegara</b> el paquete.', ru: 'Он сказал, что сообщит нам, как только придёт посылка.', en: 'He said he would let us know as soon as the parcel arrived.' },
            { color: 'coral', es: 'Nos hablaba despacio para que lo <b>entendiéramos</b>.', ru: 'Он говорил с нами медленно, чтобы мы его понимали.', en: 'He spoke slowly to us so that we would understand him.' }
          ] },
          { type: 'examples', heading: { ru: 'Относительные и условия', en: 'Relative clauses and conditions' }, items: [
            { color: 'coral', es: 'Buscaban un piso que <b>tuviera</b> jardín.', ru: 'Они искали квартиру с садом.', en: 'They were looking for a flat with a garden.' },
            { color: 'coral', es: 'En el pueblo no había nadie que <b>supiera</b> inglés.', ru: 'В деревне не было никого, кто знал бы английский.', en: 'There was nobody in the village who knew English.' },
            { color: 'coral', es: 'Si <b>tuvieras</b> tiempo, ¿vendrías conmigo?', ru: 'Если бы у тебя было время, ты пошёл бы со мной?', en: 'If you had time, would you come with me?' },
            { color: 'coral', es: '¿Te molestaría que <b>abriera</b> la ventana?', ru: 'Ты не против, если я открою окно?', en: 'Would you mind if I opened the window?' }
          ] },
          { type: 'examples', heading: { ru: 'Como si, ojalá, ni que', en: 'Como si, ojalá, ni que' }, items: [
            { color: 'coral', es: 'Gasta dinero como si <b>fuera</b> millonario.', ru: 'Он тратит деньги так, будто он миллионер.', en: 'He spends money as if he were a millionaire.' },
            { color: 'coral', es: 'Os comportáis como si no <b>pasara</b> nada.', ru: 'Вы ведёте себя так, будто ничего не происходит.', en: 'You’re behaving as if nothing were wrong.' },
            { color: 'coral', es: 'Ojalá <b>pudiéramos</b> vivir cerca del mar.', ru: 'Вот бы нам жить у моря.', en: 'If only we could live by the sea.' },
            { color: 'coral', es: '¡Ni que <b>fueras</b> mi jefe!', ru: 'Можно подумать, ты мой начальник!', en: 'Anyone would think you were my boss!' },
            { color: 'coral', es: '¡Quién <b>tuviera</b> veinte años otra vez!', ru: 'Эх, мне бы снова двадцать лет!', en: 'If only I were twenty again!' }
          ] }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Mi madre quería que yo ___ medicina. (estudiar)',
        options: ['estudie', 'estudiara', 'estudiaba'], answer: 1,
        explain: { ru: 'Quería que — прошедшее время требует Imperfecto de subjuntivo: estudiara.', en: 'Quería que is past, so it takes the Imperfecto de subjuntivo: estudiara.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Me gustaría que ___ a mi fiesta. (venir, tú)',
        options: ['venieras', 'vendrías', 'vinieras'], answer: 2,
        explain: { ru: 'После me gustaría que — Imperfecto de subjuntivo. Основа из vinieron: vinieras.', en: 'After me gustaría que use the Imperfecto de subjuntivo. The stem comes from vinieron: vinieras.' } },
      { prompt: { ru: 'Какая форма правильная? (tener, ellos)', en: 'Which form is correct? (tener, ellos)' },
        options: ['tuvieran', 'tenieran', 'tuvieron'], answer: 0,
        explain: { ru: 'Tuvieron → tuvie- + -ran: tuvieran. Tuvieron — это Indefinido.', en: 'Tuvieron → tuvie- + -ran: tuvieran. Tuvieron is the Indefinido.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Habla como si lo ___ todo. (saber, él)',
        options: ['sabe', 'sepa', 'supiera', 'sabría'], answer: 2,
        explain: { ru: 'После como si — всегда Imperfecto (или Pluscuamperfecto) de subjuntivo: supiera.', en: 'Como si is always followed by the Imperfecto (or Pluscuamperfecto) de subjuntivo: supiera.' } },
      { prompt: { ru: 'Какая форма равна «hablara»?', en: 'Which form means the same as “hablara”?' },
        options: ['hablaste', 'hablase', 'hablaría'], answer: 1,
        explain: { ru: 'Hablara и hablase — две равноправные формы одного времени.', en: 'Hablara and hablase are two equivalent forms of the same tense.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Mis padres no querían que ___ solos al concierto. (ir, nosotros)',
        options: ['íbamos', 'fuéramos', 'iríamos'], answer: 1,
        explain: { ru: 'No querían que — нужен субхунтив прошедшего. У ir форма от fueron, с ударением в nosotros: fuéramos.', en: 'No querían que needs the past subjunctive. Ir uses fueron, with an accent in the nosotros form: fuéramos.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Ojalá ___ aquí conmigo, pero sé que estás en Londres. (estar, tú)',
        options: ['estuvieras', 'estés', 'estarías'], answer: 0,
        explain: { ru: 'Желание заведомо не сбывается (ты в Лондоне) — ojalá + Imperfecto de subjuntivo: estuvieras.', en: 'The wish is known to be unreal (you are in London), so ojalá + Imperfecto de subjuntivo: estuvieras.' } },
      { prompt: { ru: 'Какая форма правильная? (decir, ellos)', en: 'Which form is correct? (decir, ellos)' },
        options: ['dijieran', 'dicieran', 'dijeran'], answer: 2,
        explain: { ru: 'Dijeron → dije- + -ran: dijeran. Буквы i после j нет.', en: 'Dijeron → dije- + -ran: dijeran. There is no i after the j.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Le pedí al camarero que me ___ la cuenta. (traer)',
        options: ['trajo', 'trajera', 'traería', 'traía'], answer: 1,
        explain: { ru: 'Pedir que — просьба, в прошедшем времени: trajera (от trajeron).', en: 'Pedir que is a request, here in the past: trajera (from trajeron).' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Te lo expliqué dos veces para que lo ___. (entender)',
        options: ['entendieras', 'entendías', 'entenderías'], answer: 0,
        explain: { ru: 'Para que всегда требует субхунтива; главный глагол в прошедшем — entendieras.', en: 'Para que always takes the subjunctive; the main verb is past, so entendieras.' } }
    ]
  },
  {
    id: 'b2-condicionales', level: 'B2',
    title: { ru: 'Условные предложения: типы 1–3', en: 'Conditional sentences: types 1–3' },
    hero: {
      es: 'Oraciones <b>condicionales</b>',
      sub: { ru: 'Реальное, нереальное в настоящем и в прошлом условие: какие времена ставить после si и в главной части',
             en: 'Real, unreal present and unreal past conditions: which tenses go after si and in the main clause' }
    },
    tabs: [
      {
        id: 'type-1', label: { ru: 'Тип 1', en: 'Type 1' },
        blocks: [
          { type: 'table', heading: { ru: 'Три типа коротко', en: 'The three types at a glance' },
            head: ['', 'si + …', 'resultado'],
            rows: [
              ['1 · real', 'tengo', 'iré · ve'],
              ['2 · irreal', 'tuviera', 'iría'],
              ['3 · pasado', 'hubiera tenido', 'habría ido']
            ] },
          { type: 'rules', heading: { ru: 'Правило', en: 'The rule' }, items: [
            { color: 'teal', label: { ru: 'Тип 1', en: 'Type 1' }, title: { ru: 'Реальное условие', en: 'Real condition' }, es: 'si + presente → presente / futuro / imperativo',
              body: { ru: 'Условие <b>может выполниться</b>: говорящий считает его реальным. В главной части — presente, futuro, <i>ir a</i> + инфинитив или повелительное наклонение.',
                      en: 'The condition <b>may come true</b>: the speaker sees it as real. The main clause has the presente, the futuro, <i>ir a</i> + infinitive or an imperative.' } }
          ] },
          { type: 'table', heading: { ru: 'Что бывает в главной части', en: 'What the main clause can take' },
            head: ['', { ru: 'Пример', en: 'Example' }],
            rows: [
              ['presente', 'Si llueve, no salgo.'],
              ['futuro', 'Si llueve, no saldré.'],
              ['ir a + infinitivo', 'Si llueve, vamos a quedarnos.'],
              ['imperativo', 'Si llueve, coge el paraguas.'],
              ['poder / deber + inf.', 'Si llueve, puedes quedarte.']
            ] },
          { type: 'text', color: 'teal', heading: { ru: 'Привычка и прошлое', en: 'Habits and the past' }, body: {
            ru: ['<b>Привычка.</b> Si + presente и presente в главной части — то, что происходит всегда при этом условии: <i>Si tengo tiempo, voy al gimnasio</i> (здесь <i>si</i> близко к <i>cuando</i>).',
                 '<b>Реальное прошлое.</b> После si может стоять и прошедшее время индикатива, если мы допускаем, что это правда: <i>Si has terminado, puedes irte</i>; <i>Si lo dijo él, será verdad</i>.'],
            en: ['<b>Habits.</b> Si + presente with the presente in the main clause describes what always happens under that condition: <i>Si tengo tiempo, voy al gimnasio</i> (here <i>si</i> is close to <i>cuando</i>).',
                 '<b>A real past.</b> Si can also take a past indicative tense when we accept it may be true: <i>Si has terminado, puedes irte</i>; <i>Si lo dijo él, será verdad</i>.'] } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'teal', es: 'Si <b>llueve</b>, me <b>quedaré</b> en casa.', ru: 'Если пойдёт дождь, я останусь дома.', en: 'If it rains, I’ll stay at home.' },
            { color: 'teal', es: 'Si <b>ves</b> a Carmen, <b>dale</b> recuerdos.', ru: 'Если увидишь Кармен, передай ей привет.', en: 'If you see Carmen, say hi from me.' },
            { color: 'teal', es: 'Si <b>tengo</b> tiempo, <b>voy</b> al gimnasio después del trabajo.', ru: 'Если у меня есть время, я хожу в спортзал после работы.', en: 'If I have time, I go to the gym after work.' }
          ] }
        ]
      },
      {
        id: 'type-2', label: { ru: 'Тип 2', en: 'Type 2' },
        blocks: [
          { type: 'rules', heading: { ru: 'Два значения', en: 'Two meanings' }, items: [
            { color: 'amber', label: { ru: 'Тип 2', en: 'Type 2' }, title: { ru: 'Нереальное в настоящем', en: 'Unreal present' }, es: 'si + imperfecto de subjuntivo → condicional',
              body: { ru: 'Условие <b>не соответствует действительности сейчас</b>: <i>Si tuviera coche, te llevaría</i> (но машины у меня нет).',
                      en: 'The condition is <b>contrary to fact right now</b>: <i>Si tuviera coche, te llevaría</i> (but I don’t have a car).' } },
            { color: 'amber', label: { ru: 'Тип 2', en: 'Type 2' }, title: { ru: 'Маловероятное будущее', en: 'Unlikely future' }, es: 'si + imperfecto de subjuntivo → condicional',
              body: { ru: 'Условие теоретически возможно, но говорящий в него <b>не очень верит</b>: <i>Si me tocara la lotería, dejaría de trabajar</i>.',
                      en: 'The condition is possible in theory, but the speaker <b>doesn’t really expect it</b>: <i>Si me tocara la lotería, dejaría de trabajar</i>.' } }
          ] },
          { type: 'table', heading: { ru: 'Две половины фразы', en: 'The two halves of the sentence' },
            head: ['', 'si …', 'resultado'],
            rows: [
              ['yo', 'tuviera', 'tendría'],
              ['tú', 'tuvieras', 'tendrías'],
              ['él / ella', 'tuviera', 'tendría'],
              ['nosotros', 'tuviéramos', 'tendríamos'],
              ['vosotros', 'tuvierais', 'tendríais'],
              ['ellos', 'tuvieran', 'tendrían']
            ] },
          { type: 'text', color: 'amber', heading: { ru: 'Форма на -se и совет', en: 'The -se form and advice' }, body: {
            ru: ['После si можно ставить и форму на <b>-se</b>: <i>Si tuviese tiempo, te ayudaría</i>. В главной части -se невозможна — только condicional (или, в разговорной речи, -ra: <i>quisiera, debiera</i>).',
                 '<b>Si yo fuera tú…</b> — устойчивый способ дать совет: «на твоём месте я бы…».'],
            en: ['After si you can also use the <b>-se</b> form: <i>Si tuviese tiempo, te ayudaría</i>. The -se form is impossible in the main clause — only the conditional (or, in speech, -ra: <i>quisiera, debiera</i>).',
                 '<b>Si yo fuera tú…</b> is the set way to give advice: “if I were you, I would…”.'] } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'amber', es: 'Si <b>tuviera</b> dinero, <b>viajaría</b>.', ru: 'Если бы у меня были деньги, я бы путешествовал.', en: 'If I had money, I’d travel.' },
            { color: 'amber', es: 'Si <b>viviera</b> cerca del mar, <b>iría</b> a nadar cada día.', ru: 'Если бы я жил у моря, я бы плавал каждый день.', en: 'If I lived near the sea, I’d go swimming every day.' },
            { color: 'amber', es: 'Si yo <b>fuera</b> tú, no <b>aceptaría</b> ese trabajo.', ru: 'На твоём месте я бы не соглашался на эту работу.', en: 'If I were you, I wouldn’t take that job.' }
          ] }
        ]
      },
      {
        id: 'type-3', label: { ru: 'Тип 3', en: 'Type 3' },
        blocks: [
          { type: 'rules', heading: { ru: 'Правило', en: 'The rule' }, items: [
            { color: 'purple', label: { ru: 'Тип 3', en: 'Type 3' }, title: { ru: 'Нереальное в прошлом', en: 'Unreal past' }, es: 'si + hubiera + participio → habría + participio',
              body: { ru: 'Условие <b>уже не случилось</b>, изменить ничего нельзя: сожаление, упрёк, размышление о прошлом.',
                      en: 'The condition <b>did not happen</b> and nothing can change it: regret, reproach, thinking about the past.' } }
          ] },
          { type: 'text', heading: { ru: 'Как образуется', en: 'How it is formed' }, body: {
            ru: ['Pluscuamperfecto de subjuntivo — это <b>haber</b> в Imperfecto de subjuntivo плюс причастие. В главной части типа 3 разговорная речь часто тоже ставит <i>hubiera</i>: <i>Si lo hubiera sabido, no lo hubiera hecho</i> — это правильно, как и <i>no lo habría hecho</i>.'],
            en: ['The Pluscuamperfecto de subjuntivo is <b>haber</b> in the Imperfecto de subjuntivo plus a participle. In the main clause of type 3, speech often uses <i>hubiera</i> as well: <i>Si lo hubiera sabido, no lo hubiera hecho</i> is correct, just like <i>no lo habría hecho</i>.'] } },
          { type: 'table', heading: { ru: 'Форма hubiera + причастие', en: 'The form hubiera + participle' },
            head: ['', 'si …', 'resultado'],
            rows: [
              ['yo', 'hubiera sabido', 'habría ido'],
              ['tú', 'hubieras sabido', 'habrías ido'],
              ['él / ella', 'hubiera sabido', 'habría ido'],
              ['nosotros', 'hubiéramos sabido', 'habríamos ido'],
              ['vosotros', 'hubierais sabido', 'habríais ido'],
              ['ellos', 'hubieran sabido', 'habrían ido']
            ] },
          { type: 'conj', heading: { ru: 'Одна фраза — три типа', en: 'One sentence, three types' }, verbs: [
            { inf: 'tener tiempo · ir', tr: { ru: 'будет время — пойду', en: 'if I have time, I’ll go' }, variants: [
              { label: 'Tipo 1', color: 'teal', rows: [['yo', 'Si <b>tengo</b> tiempo, <b>iré</b>.'], ['tú', 'Si <b>tienes</b> tiempo, <b>ven</b>.']] },
              { label: 'Tipo 2', color: 'amber', rows: [['yo', 'Si <b>tuviera</b> tiempo, <b>iría</b>.'], ['tú', 'Si <b>tuvieras</b> tiempo, <b>vendrías</b>.']] },
              { label: 'Tipo 3', color: 'purple', rows: [['yo', 'Si <b>hubiera tenido</b> tiempo, <b>habría ido</b>.'], ['tú', 'Si <b>hubieras tenido</b> tiempo, <b>habrías venido</b>.']] }
            ] },
            { inf: 'estudiar · aprobar', tr: { ru: 'учиться — сдать', en: 'study — pass' }, variants: [
              { label: 'Tipo 1', color: 'teal', rows: [['nosotros', 'Si <b>estudiamos</b>, <b>aprobaremos</b>.'], ['ellos', 'Si <b>estudian</b>, <b>aprobarán</b>.']] },
              { label: 'Tipo 2', color: 'amber', rows: [['nosotros', 'Si <b>estudiáramos</b>, <b>aprobaríamos</b>.'], ['ellos', 'Si <b>estudiaran</b>, <b>aprobarían</b>.']] },
              { label: 'Tipo 3', color: 'purple', rows: [['nosotros', 'Si <b>hubiéramos estudiado</b>, <b>habríamos aprobado</b>.'], ['ellos', 'Si <b>hubieran estudiado</b>, <b>habrían aprobado</b>.']] }
            ] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'purple', es: 'Si <b>hubieras venido</b>, te <b>habrías divertido</b>.', ru: 'Если бы ты пришёл, тебе было бы весело.', en: 'If you had come, you would have had fun.' },
            { color: 'purple', es: 'Si me <b>hubieras avisado</b>, <b>habría ido</b> a buscarte.', ru: 'Если бы ты меня предупредил, я бы за тобой заехал.', en: 'If you had told me, I would have come to pick you up.' },
            { color: 'purple', es: 'Si lo <b>hubiera sabido</b>, no lo <b>hubiera hecho</b>.', ru: 'Если бы я знал, я бы этого не сделал.', en: 'If I had known, I wouldn’t have done it.' }
          ] }
        ]
      },
      {
        id: 'mixed', label: { ru: 'Смешанные', en: 'Mixed' },
        blocks: [
          { type: 'rules', heading: { ru: 'Два вида смешанных', en: 'Two kinds of mixed' }, items: [
            { color: 'blue', label: { ru: 'Прошлое → сейчас', en: 'Past → now' }, title: { ru: 'Условие в прошлом, результат сейчас', en: 'Past condition, present result' }, es: 'si + hubiera + participio → condicional',
              body: { ru: '<i>Si hubiera estudiado medicina, ahora sería médico</i>. Сигнал — слова настоящего в главной части: <i>ahora, hoy, todavía</i>.',
                      en: '<i>Si hubiera estudiado medicina, ahora sería médico</i>. The signal is a word about the present in the main clause: <i>ahora, hoy, todavía</i>.' } },
            { color: 'blue', label: { ru: 'Всегда → в прошлом', en: 'Always → past' }, title: { ru: 'Постоянное условие, результат в прошлом', en: 'Permanent condition, past result' }, es: 'si + imperfecto de subjuntivo → habría + participio',
              body: { ru: '<i>Si fuera más organizada, no habría olvidado la cita</i> — условие касается характера (всегда), результат — конкретного случая в прошлом.',
                      en: '<i>Si fuera más organizada, no habría olvidado la cita</i> — the condition is about character (always), the result is about one past event.' } }
          ] },
          { type: 'text', heading: { ru: 'Главная ловушка', en: 'The main trap' }, body: {
            ru: ['<b>После si (в значении «если») не ставят ни futuro, ни condicional.</b> Нельзя «si tendré», «si tendría» — только <i>si tengo</i>, <i>si tuviera</i>. Исключение — si в значении «ли» в косвенном вопросе: <i>No sé si vendrá</i>.'],
            en: ['<b>After si meaning “if”, never use the futuro or the condicional.</b> Not “si tendré” or “si tendría” — only <i>si tengo</i>, <i>si tuviera</i>. The exception is si meaning “whether” in an indirect question: <i>No sé si vendrá</i>.'] } },
          { type: 'markers', heading: { ru: 'Другие способы сказать «если»', en: 'Other ways to say “if”' }, groups: [
            { color: 'coral', title: { ru: '+ subjuntivo', en: '+ subjunctive' }, tags: ['en caso de que', 'siempre que', 'con tal de que', 'a menos que', 'a no ser que', 'como'] }
          ] },
          { type: 'text', heading: { ru: 'Como и de + инфинитив', en: 'Como and de + infinitive' }, body: {
            ru: ['<b>Como + subjuntivo</b> — условие-угроза или предупреждение: <i>Como no vengas, me enfado</i>. <b>De + инфинитив</b> заменяет si: <i>De tener tiempo, iría</i> = <i>Si tuviera tiempo…</i>; <i>De haberlo sabido…</i> = <i>Si lo hubiera sabido…</i>'],
            en: ['<b>Como + subjunctive</b> is a condition used as a threat or warning: <i>Como no vengas, me enfado</i>. <b>De + infinitive</b> replaces si: <i>De tener tiempo, iría</i> = <i>Si tuviera tiempo…</i>; <i>De haberlo sabido…</i> = <i>Si lo hubiera sabido…</i>'] } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'blue', es: 'Si <b>hubiera dormido</b> más, ahora no <b>estaría</b> tan cansado.', ru: 'Если бы я больше спал, сейчас я не был бы таким уставшим.', en: 'If I had slept more, I wouldn’t be so tired now.' },
            { color: 'blue', es: 'Si <b>fuera</b> más organizada, no <b>habría olvidado</b> la cita.', ru: 'Будь она более организованной, она не забыла бы о встрече.', en: 'If she were more organised, she wouldn’t have forgotten the appointment.' },
            { es: 'No sé si <b>tendré</b> tiempo mañana.', ru: 'Не знаю, будет ли у меня время завтра.', en: 'I don’t know whether I’ll have time tomorrow.' },
            { color: 'purple', es: '<b>De haberlo sabido</b>, no habría venido.', ru: 'Знал бы я заранее, не пришёл бы.', en: 'Had I known, I wouldn’t have come.' }
          ] },
          { type: 'tip', heading: { ru: 'Совет', en: 'Tip' }, title: { ru: 'Как выбрать тип', en: 'How to choose the type' }, body: {
            ru: ['Может случиться? → <b>тип 1</b>. Неправда сейчас или вряд ли будет? → <b>тип 2</b>. Уже не случилось? → <b>тип 3</b>. Условие в прошлом, а последствия сейчас? → <b>смешанный</b>.'],
            en: ['Could it happen? → <b>type 1</b>. Untrue now or unlikely? → <b>type 2</b>. Didn’t happen? → <b>type 3</b>. A past condition with present consequences? → <b>mixed</b>.'] } }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Одна ситуация — три типа', en: 'One situation, three types' }, items: [
            { badge: '1', color: 'teal', es: 'Si <b>aprobamos</b>, lo <b>celebraremos</b> en la playa.', ru: 'Если сдадим, отпразднуем на пляже.', en: 'If we pass, we’ll celebrate at the beach.' },
            { badge: '2', color: 'amber', es: 'Si <b>aprobáramos</b>, lo <b>celebraríamos</b> en la playa.', ru: 'Если бы мы сдали, мы бы отпраздновали на пляже.', en: 'If we passed, we’d celebrate at the beach.' },
            { badge: '3', color: 'purple', es: 'Si <b>hubiéramos aprobado</b>, lo <b>habríamos celebrado</b> en la playa.', ru: 'Если бы мы тогда сдали, мы бы отпраздновали это на пляже.', en: 'If we had passed, we would have celebrated at the beach.' }
          ] },
          { type: 'examples', heading: { ru: 'В разных ситуациях', en: 'In different situations' }, items: [
            { badge: '1', color: 'teal', es: 'Si mi jefe me <b>da</b> el viernes libre, <b>iré</b> a ver a mis padres.', ru: 'Если начальник даст мне выходной в пятницу, я съезжу к родителям.', en: 'If my boss gives me Friday off, I’ll go and see my parents.' },
            { badge: '2', color: 'amber', es: 'Si <b>hablaras</b> con él, lo <b>entenderías</b>.', ru: 'Если бы ты с ним поговорил, ты бы его понял.', en: 'If you talked to him, you’d understand him.' },
            { badge: '3', color: 'purple', es: 'Si <b>hubiera llevado</b> el paraguas, no me <b>habría mojado</b>.', ru: 'Если бы я взял зонт, я бы не промок.', en: 'If I had taken my umbrella, I wouldn’t have got wet.' },
            { badge: 'M', color: 'blue', es: 'Si no <b>hubiéramos vendido</b> la casa, ahora <b>tendríamos</b> jardín.', ru: 'Если бы мы не продали дом, сейчас у нас был бы сад.', en: 'If we hadn’t sold the house, we would have a garden now.' }
          ] },
          { type: 'examples', heading: { ru: 'Ещё по типам', en: 'More by type' }, items: [
            { badge: '1', color: 'teal', es: 'Si <b>terminas</b> pronto, ¿<b>vamos</b> al cine?', ru: 'Если закончишь пораньше, пойдём в кино?', en: 'If you finish early, shall we go to the cinema?' },
            { badge: '1', color: 'teal', es: 'Si <b>habéis terminado</b>, <b>podéis</b> iros.', ru: 'Если вы закончили, можете идти.', en: 'If you’ve finished, you can go.' },
            { badge: '1', color: 'teal', es: 'Si no <b>reservamos</b> hoy, no <b>habrá</b> mesa.', ru: 'Если не забронируем сегодня, столика не будет.', en: 'If we don’t book today, there won’t be a table.' },
            { badge: '2', color: 'amber', es: 'Si me <b>tocara</b> la lotería, <b>dejaría</b> de trabajar.', ru: 'Если бы я выиграл в лотерею, я бы бросил работу.', en: 'If I won the lottery, I’d stop working.' },
            { badge: '2', color: 'amber', es: 'Si <b>supierais</b> cocinar, no <b>gastaríais</b> tanto en restaurantes.', ru: 'Если бы вы умели готовить, вы бы не тратили столько на рестораны.', en: 'If you could cook, you wouldn’t spend so much on restaurants.' },
            { badge: '2', color: 'amber', es: '¿Qué <b>harías</b> si <b>perdieras</b> el pasaporte en el extranjero?', ru: 'Что бы ты сделал, если бы потерял паспорт за границей?', en: 'What would you do if you lost your passport abroad?' },
            { badge: '3', color: 'purple', es: 'Si <b>hubiéramos reservado</b> antes, <b>habríamos conseguido</b> mejores asientos.', ru: 'Если бы мы забронировали раньше, у нас были бы места получше.', en: 'If we had booked earlier, we would have got better seats.' },
            { badge: '3', color: 'purple', es: 'Si <b>hubieran estudiado</b> más, <b>habrían aprobado</b> el examen.', ru: 'Если бы они больше занимались, они бы сдали экзамен.', en: 'If they had studied more, they would have passed the exam.' },
            { badge: 'M', color: 'blue', es: 'Si <b>hubieras aceptado</b> aquel trabajo, ahora <b>vivirías</b> en Londres.', ru: 'Если бы ты тогда согласился на ту работу, сейчас жил бы в Лондоне.', en: 'If you had taken that job, you would be living in London now.' }
          ] },
          { type: 'examples', heading: { ru: 'Другие союзы условия', en: 'Other conditional conjunctions' }, items: [
            { color: 'coral', es: 'En caso de que <b>llueva</b>, la fiesta será dentro.', ru: 'Если пойдёт дождь, праздник пройдёт в помещении.', en: 'If it rains, the party will be held indoors.' },
            { color: 'coral', es: 'Te lo presto con tal de que me lo <b>devuelvas</b> mañana.', ru: 'Одолжу тебе при условии, что вернёшь завтра.', en: 'I’ll lend it to you as long as you give it back tomorrow.' },
            { color: 'coral', es: 'Como no <b>vengas</b>, me enfado.', ru: 'Если не придёшь, я обижусь.', en: 'If you don’t come, I’ll be upset.' }
          ] }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Si mañana ___ buen tiempo, iremos a la playa. (hacer)',
        options: ['hará', 'hace', 'hiciera'], answer: 1,
        explain: { ru: 'Реальное условие, в главной части futuro — после si ставим presente: hace.', en: 'A real condition with the futuro in the main clause — si takes the presente: hace.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Si ___ más dinero, me compraría una casa en la costa. (tener, yo)',
        options: ['tendría', 'tengo', 'tuviera'], answer: 2,
        explain: { ru: 'В главной части condicional (compraría) — тип 2, после si Imperfecto de subjuntivo: tuviera.', en: 'The main clause has the conditional (compraría) — type 2, so si + Imperfecto de subjuntivo: tuviera.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Si me hubieras avisado, te ___ a buscar. (ir, yo)',
        options: ['habría ido', 'iría', 'he ido'], answer: 0,
        explain: { ru: 'Тип 3: si + hubiera + причастие, в главной части condicional compuesto — habría ido.', en: 'Type 3: si + hubiera + participle, the main clause takes the condicional compuesto — habría ido.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Si ___ antes, no habríamos perdido el tren. (salir, nosotros)',
        options: ['saldríamos', 'hubiéramos salido', 'habríamos salido'], answer: 1,
        explain: { ru: 'Условие в прошлом, не выполнено — Pluscuamperfecto de subjuntivo: hubiéramos salido. Condicional после si не ставят.', en: 'An unreal past condition — Pluscuamperfecto de subjuntivo: hubiéramos salido. The conditional never follows si.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Si hubiera estudiado medicina, ahora ___ médico. (ser)',
        options: ['habría sido', 'fuera', 'sería'], answer: 2,
        explain: { ru: 'Смешанный тип: условие в прошлом, результат сейчас (ahora) — condicional simple: sería.', en: 'Mixed type: a past condition with a present result (ahora) — condicional simple: sería.' } },
      { prompt: { ru: 'Какое предложение правильное?', en: 'Which sentence is correct?' },
        options: ['Si tendría tiempo, te ayudaría.', 'Si tuviera tiempo, te ayudaría.', 'Si tuviera tiempo, te ayudaré.'], answer: 1,
        explain: { ru: 'После si нельзя condicional; тип 2 — si + tuviera, в главной части ayudaría.', en: 'Si cannot take the conditional; type 2 is si + tuviera with ayudaría in the main clause.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Si yo ___ tú, no aceptaría ese trabajo. (ser)',
        options: ['fuera', 'sería', 'soy'], answer: 0,
        explain: { ru: '«На твоём месте» — нереальное условие: si yo fuera tú.', en: '“If I were you” is an unreal condition: si yo fuera tú.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Si ___ a Carmen, dale recuerdos de mi parte. (ver, tú)',
        options: ['verías', 'vieras', 'ves'], answer: 2,
        explain: { ru: 'В главной части повелительное (dale) — реальное условие, после si presente: ves.', en: 'The main clause is an imperative (dale) — a real condition, so si + presente: ves.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Si ayer no ___ tanto tráfico, habríamos llegado a tiempo. (haber)',
        options: ['habría habido', 'hubiera habido', 'hubo'], answer: 1,
        explain: { ru: 'Нереальное прошлое (ayer, habríamos llegado): si + hubiera habido.', en: 'An unreal past (ayer, habríamos llegado): si + hubiera habido.' } }
    ]
  },
  {
    id: 'b2-pasiva-se', level: 'B2',
    title: { ru: 'Пассив и безличное se', en: 'The passive and impersonal se' },
    hero: {
      es: 'Pasiva e <b>impersonal</b> con se',
      sub: { ru: 'Fue construido por…, se venden pisos, se vive bien: три способа не называть того, кто действует',
             en: 'Fue construido por…, se venden pisos, se vive bien: three ways to leave out who does the action' }
    },
    tabs: [
      {
        id: 'ser-passive', label: { ru: 'Пассив с ser', en: 'Ser passive' },
        blocks: [
          { type: 'rules', heading: { ru: 'Правило', en: 'The rule' }, items: [
            { color: 'blue', label: { ru: 'Пассив', en: 'Passive' }, title: { ru: 'Ser + причастие (+ por)', en: 'Ser + participle (+ por)' }, es: 'ser + participio + por…',
              body: { ru: 'Причастие согласуется с подлежащим в роде и числе: <i>La catedral fue construida en el siglo XIII</i>. Деятель вводится через <b>por</b>: <i>El Quijote fue escrito por Cervantes</i>.',
                      en: 'The participle agrees with the subject in gender and number: <i>La catedral fue construida en el siglo XIII</i>. The agent is introduced with <b>por</b>: <i>El Quijote fue escrito por Cervantes</i>.' } }
          ] },
          { type: 'table', heading: { ru: 'Согласование причастия', en: 'Participle agreement' },
            head: ['', 'singular', 'plural'],
            rows: [
              ['masculino', 'fue construido', 'fueron construidos'],
              ['femenino', 'fue construida', 'fueron construidas']
            ] },
          { type: 'table', heading: { ru: 'Ser меняет время, причастие — нет', en: 'Ser changes tense, the participle does not' },
            head: ['', { ru: 'Форма', en: 'Form' }],
            rows: [
              ['presente', 'es elegido'],
              ['indefinido', 'fue elegido'],
              ['imperfecto', 'era elegido'],
              ['perfecto', 'ha sido elegido'],
              ['futuro', 'será elegido'],
              ['condicional', 'sería elegido'],
              ['subjuntivo', 'sea elegido']
            ] },
          { type: 'markers', heading: { ru: 'Неправильные причастия', en: 'Irregular participles' }, groups: [
            { color: 'blue', title: { ru: 'Частые в пассиве', en: 'Common in the passive' },
              tags: ['escrito', 'hecho', 'dicho', 'abierto', 'puesto', 'visto', 'roto', 'vuelto', 'descubierto', 'resuelto', 'impreso', 'muerto'] }
          ] },
          { type: 'text', color: 'blue', heading: { ru: 'Регистр', en: 'Register' }, body: {
            ru: ['Эта конструкция звучит книжно: она типична для новостей, истории, науки. В разговоре испанцы предпочитают пассив с <b>se</b> или активный залог.'],
            en: ['This construction sounds formal: it is typical of news, history and science. In conversation Spanish speakers prefer the <b>se</b> passive or the active voice.'] } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'blue', es: 'La noticia <b>fue publicada</b> ayer por varios periódicos.', ru: 'Новость была опубликована вчера несколькими газетами.', en: 'The news was published yesterday by several newspapers.' },
            { color: 'blue', es: 'Los ganadores <b>serán anunciados</b> el lunes.', ru: 'Победители будут объявлены в понедельник.', en: 'The winners will be announced on Monday.' },
            { color: 'blue', es: 'Las pinturas <b>fueron descubiertas</b> por unos niños en 1940.', ru: 'Рисунки были обнаружены детьми в 1940 году.', en: 'The paintings were discovered by some children in 1940.' }
          ] }
        ]
      },
      {
        id: 'se-passive', label: { ru: 'Пассив с se', en: 'Se passive' },
        blocks: [
          { type: 'rules', heading: { ru: 'Правило', en: 'The rule' }, items: [
            { color: 'teal', label: { ru: 'Pasiva refleja', en: 'Pasiva refleja' }, title: { ru: 'Se + глагол в 3-м лице', en: 'Se + third-person verb' }, es: 'se vende piso · se venden pisos',
              body: { ru: 'Глагол согласуется с предметом: <i>Se vende piso</i> — <i>Se venden pisos</i>. Так пишут объявления, рецепты, инструкции.',
                      en: 'The verb agrees with the thing: <i>Se vende piso</i> — <i>Se venden pisos</i>. This is how ads, recipes and instructions are written.' } }
          ] },
          { type: 'table', heading: { ru: 'Единственное или множественное', en: 'Singular or plural' },
            head: ['', 'singular', 'plural'],
            rows: [
              ['presente', 'se vende piso', 'se venden pisos'],
              ['indefinido', 'se construyó un puente', 'se construyeron puentes'],
              ['futuro', 'se abrirá la tienda', 'se abrirán las tiendas'],
              ['con modal', 'se puede ver el mar', 'se pueden ver las islas']
            ] },
          { type: 'text', color: 'teal', heading: { ru: 'Без деятеля', en: 'No agent' }, body: {
            ru: ['Деятеля при такой конструкции не называют: «se alquilan pisos por el dueño» — ошибка. Если нужен деятель, берите пассив с ser или актив.',
                 'С модальным глаголом и инфинитивом глагол согласуется с предметом инфинитива: <i>Se pueden ver las islas</i>, <i>Se deben pagar las facturas</i>.'],
            en: ['The agent is not mentioned in this construction: “se alquilan pisos por el dueño” is wrong. If you need the agent, use the ser passive or the active voice.',
                 'With a modal verb and an infinitive, the verb agrees with the object of the infinitive: <i>Se pueden ver las islas</i>, <i>Se deben pagar las facturas</i>.'] } },
          { type: 'text', color: 'amber', heading: { ru: 'Люди: с a или без', en: 'People: with or without a' }, body: {
            ru: ['Неопределённые люди без <b>a</b> — пассив, глагол во множественном: <i>Se buscan camareros</i>. Конкретные люди с <b>a</b> — безличное se, глагол в единственном: <i>Se busca a los responsables</i>.'],
            en: ['Unspecified people without <b>a</b> — passive, plural verb: <i>Se buscan camareros</i>. Specific people with <b>a</b> — impersonal se, singular verb: <i>Se busca a los responsables</i>.'] } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'teal', es: 'Se <b>buscan</b> camareros con experiencia.', ru: 'Требуются официанты с опытом.', en: 'Experienced waiters wanted.' },
            { color: 'teal', es: 'En este restaurante se <b>preparan</b> las mejores tapas de la ciudad.', ru: 'В этом ресторане готовят лучшие тапас в городе.', en: 'The best tapas in town are made in this restaurant.' },
            { color: 'teal', es: 'Se <b>alquila</b> habitación en el centro.', ru: 'Сдаётся комната в центре.', en: 'Room to let in the town centre.' }
          ] }
        ]
      },
      {
        id: 'impersonal', label: { ru: 'Безличное se', en: 'Impersonal' },
        blocks: [
          { type: 'rules', heading: { ru: 'Правило', en: 'The rule' }, items: [
            { color: 'amber', label: { ru: 'Se impersonal', en: 'Se impersonal' }, title: { ru: 'Всегда единственное число', en: 'Always singular' }, es: 'se vive · se busca a… · se puede + inf.',
              body: { ru: 'Когда предмета нет или речь о людях с предлогом <b>a</b>, глагол всегда в <b>единственном числе</b>: <i>En España se cena tarde</i>; <i>Aquí se vive bien</i>; <i>Se busca a los responsables</i>. Глагол + инфинитив без предмета тоже: <i>Se puede aparcar aquí</i>.',
                      en: 'When there is no object, or the object is people introduced with <b>a</b>, the verb is always <b>singular</b>: <i>En España se cena tarde</i>; <i>Aquí se vive bien</i>; <i>Se busca a los responsables</i>. A verb + infinitive with no object too: <i>Se puede aparcar aquí</i>.' } }
          ] },
          { type: 'text', color: 'coral', heading: { ru: 'Возвратные глаголы и ser', en: 'Reflexive verbs and ser' }, body: {
            ru: ['С возвратными глаголами второе se невозможно («se se levanta») — вместо него говорят <b>uno</b>: <i>Uno se acostumbra a todo</i>.',
                 'С <b>ser</b> и <b>estar</b> безличное se возможно и звучит обобщённо: <i>Cuando se es joven, todo parece fácil</i>.'],
            en: ['With reflexive verbs a second se is impossible (“se se levanta”) — use <b>uno</b> instead: <i>Uno se acostumbra a todo</i>.',
                 'With <b>ser</b> and <b>estar</b> impersonal se is possible and sounds general: <i>Cuando se es joven, todo parece fácil</i>.'] } },
          { type: 'markers', heading: { ru: 'Частые формулы', en: 'Common formulas' }, groups: [
            { color: 'amber', title: { ru: 'Безличное se', en: 'Impersonal se' }, tags: ['se dice que', 'se cree que', 'se sabe que', 'se espera que', 'se rumorea que', 'se prohíbe', 'se ruega'] },
            { color: 'coral', title: { ru: 'Другие способы', en: 'Other ways' }, tags: ['uno', 'la gente', 'dicen que', 'tú (general)'] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'amber', es: 'Se <b>trabaja</b> mucho en esta empresa.', ru: 'В этой компании много работают.', en: 'People work hard in this company.' },
            { color: 'amber', es: 'En verano se <b>duerme</b> poco.', ru: 'Летом мало спят.', en: 'People sleep little in summer.' },
            { color: 'amber', es: 'Se <b>busca</b> a los autores del robo.', ru: 'Разыскиваются авторы кражи.', en: 'The police are looking for the thieves.' }
          ] }
        ]
      },
      {
        id: 'comparison', label: { ru: 'Сравнение', en: 'Comparison' },
        blocks: [
          { type: 'table', heading: { ru: 'Все конструкции', en: 'All the constructions' },
            head: ['construcción', 'ejemplo'],
            rows: [
              ['ser + participio + por', 'Fue inaugurado.'],
              ['se + verbo singular', 'Se vende coche.'],
              ['se + verbo plural', 'Se venden coches.'],
              ['se impersonal', 'Se trabaja mucho.'],
              ['se + verbo + a personas', 'Se atiende a todos.'],
              ['estar + participio', 'Está cerrada.']
            ] },
          { type: 'conj', heading: { ru: 'Одна фраза — четыре способа', en: 'One sentence, four ways' }, verbs: [
            { inf: 'construir el puente', tr: { ru: 'построить мост', en: 'to build the bridge' }, variants: [
              { label: 'activa', color: 'coral', rows: [['activa', 'La empresa <b>construyó</b> el puente.']] },
              { label: 'con ser', color: 'blue', rows: [['ser', 'El puente <b>fue construido</b> por la empresa.']] },
              { label: 'con se', color: 'teal', rows: [['se', 'El puente <b>se construyó</b> en 2010.']] },
              { label: 'con estar', color: 'purple', rows: [['estar', 'El puente ya <b>está construido</b>.']] }
            ] },
            { inf: 'vender las entradas', tr: { ru: 'продать билеты', en: 'to sell the tickets' }, variants: [
              { label: 'activa', color: 'coral', rows: [['activa', '<b>Vendieron</b> todas las entradas.']] },
              { label: 'con ser', color: 'blue', rows: [['ser', 'Las entradas <b>fueron vendidas</b> en una hora.']] },
              { label: 'con se', color: 'teal', rows: [['se', 'Se <b>vendieron</b> todas las entradas.']] },
              { label: 'con estar', color: 'purple', rows: [['estar', 'Las entradas ya <b>están vendidas</b>.']] }
            ] }
          ] },
          { type: 'text', color: 'purple', heading: { ru: 'Ser или estar + причастие', en: 'Ser or estar + participle' }, body: {
            ru: ['<b>Ser</b> + причастие — действие: <i>La puerta fue abierta por el portero</i>. <b>Estar</b> + причастие — состояние, результат: <i>Cuando llegamos, la puerta ya estaba abierta</i>.'],
            en: ['<b>Ser</b> + participle is an action: <i>La puerta fue abierta por el portero</i>. <b>Estar</b> + participle is a state, a result: <i>Cuando llegamos, la puerta ya estaba abierta</i>.'] } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'blue', es: 'El puente <b>fue inaugurado</b> por el alcalde.', ru: 'Мост открыл мэр.', en: 'The bridge was opened by the mayor.' },
            { color: 'amber', es: 'Se <b>atiende</b> a los clientes por orden.', ru: 'Клиентов обслуживают по очереди.', en: 'Customers are served in turn.' },
            { color: 'purple', es: 'Cuando llegamos, la puerta ya <b>estaba abierta</b>.', ru: 'Когда мы пришли, дверь уже была открыта.', en: 'When we arrived, the door was already open.' }
          ] },
          { type: 'tip', heading: { ru: 'Совет', en: 'Tip' }, title: { ru: 'Как выбрать', en: 'How to choose' }, body: {
            ru: ['Нужен деятель? → <b>ser + participio + por</b>. Деятель не важен, есть предмет? → <b>se</b> + глагол в числе предмета. Предмета нет или это люди с <i>a</i>? → <b>se</b> + единственное число. Описываете результат? → <b>estar</b>.'],
            en: ['Need the agent? → <b>ser + participio + por</b>. Agent unimportant and there is a thing? → <b>se</b> + verb agreeing with the thing. No thing, or people with <i>a</i>? → <b>se</b> + singular. Describing a result? → <b>estar</b>.'] } }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Пассив с ser', en: 'The ser passive' }, items: [
            { color: 'blue', es: 'Este edificio <b>fue diseñado</b> por un arquitecto japonés.', ru: 'Это здание спроектировал японский архитектор.', en: 'This building was designed by a Japanese architect.' },
            { color: 'blue', es: 'Los heridos <b>fueron trasladados</b> al hospital.', ru: 'Раненых доставили в больницу.', en: 'The injured were taken to hospital.' },
            { color: 'blue', es: 'La ley <b>ha sido aprobada</b> por el Parlamento.', ru: 'Закон был принят парламентом.', en: 'The law has been passed by Parliament.' },
            { color: 'blue', es: 'El acusado <b>será juzgado</b> en marzo.', ru: 'Обвиняемого будут судить в марте.', en: 'The defendant will be tried in March.' }
          ] },
          { type: 'examples', heading: { ru: 'Пассив с se', en: 'The se passive' }, items: [
            { color: 'teal', es: 'Primero se <b>cortan</b> las cebollas y se <b>fríen</b> en aceite.', ru: 'Сначала нарезают лук и обжаривают его на масле.', en: 'First the onions are chopped and fried in oil.' },
            { color: 'teal', es: 'Aquí se <b>habla</b> inglés.', ru: 'Здесь говорят по-английски.', en: 'English spoken here.' },
            { color: 'teal', es: 'Las entradas se <b>venden</b> en la taquilla.', ru: 'Билеты продаются в кассе.', en: 'Tickets are sold at the box office.' },
            { color: 'teal', es: 'El año pasado se <b>construyeron</b> tres hospitales nuevos.', ru: 'В прошлом году построили три новые больницы.', en: 'Three new hospitals were built last year.' },
            { color: 'teal', es: 'Desde aquí se <b>pueden</b> ver las montañas.', ru: 'Отсюда видны горы.', en: 'You can see the mountains from here.' }
          ] },
          { type: 'examples', heading: { ru: 'Безличное se', en: 'Impersonal se' }, items: [
            { color: 'amber', es: 'En este barrio se <b>vive</b> muy bien.', ru: 'В этом районе очень хорошо живётся.', en: 'Life is very good in this neighbourhood.' },
            { color: 'amber', es: 'Se <b>dice</b> que el alcalde va a dimitir.', ru: 'Говорят, что мэр собирается уйти в отставку.', en: 'It is said that the mayor is going to resign.' },
            { color: 'amber', es: 'Aquí no se <b>puede</b> aparcar.', ru: 'Здесь нельзя парковаться.', en: 'You can’t park here.' },
            { color: 'amber', es: 'Se <b>premiará</b> a los mejores alumnos.', ru: 'Лучших учеников наградят.', en: 'The best students will be given prizes.' },
            { color: 'amber', es: 'Cuando se <b>es</b> joven, todo parece posible.', ru: 'Когда ты молод, всё кажется возможным.', en: 'When you’re young, everything seems possible.' },
            { color: 'coral', es: 'Uno <b>se acostumbra</b> a todo.', ru: 'Ко всему привыкаешь.', en: 'You get used to anything.' }
          ] },
          { type: 'examples', heading: { ru: 'Estar + причастие', en: 'Estar + participle' }, items: [
            { color: 'purple', es: 'Las tiendas <b>están cerradas</b> los domingos.', ru: 'По воскресеньям магазины закрыты.', en: 'The shops are closed on Sundays.' },
            { color: 'purple', es: 'El informe ya <b>está terminado</b>.', ru: 'Отчёт уже готов.', en: 'The report is already finished.' }
          ] }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'En esta tienda se ___ bicicletas de segunda mano. (vender)',
        options: ['vende', 'venden', 'vendemos'], answer: 1,
        explain: { ru: 'Пассив с se: глагол согласуется с предметом — bicicletas, множественное: venden.', en: 'The se passive: the verb agrees with the thing — bicicletas is plural: venden.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'El Quijote fue escrito ___ Cervantes.',
        options: ['de', 'para', 'por'], answer: 2,
        explain: { ru: 'Деятель в пассиве с ser вводится через por.', en: 'The agent of a ser passive is introduced with por.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'En España se ___ muy tarde. (cenar)',
        options: ['cena', 'cenan', 'cenamos'], answer: 0,
        explain: { ru: 'Безличное se без предмета — глагол в единственном числе: se cena.', en: 'Impersonal se with no object — the verb is singular: se cena.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Los resultados ___ publicados mañana por el ministerio.',
        options: ['estarán', 'serán', 'se'], answer: 1,
        explain: { ru: 'Есть деятель (por el ministerio) — это действие, пассив с ser: serán publicados.', en: 'There is an agent (por el ministerio), so it is an action — the ser passive: serán publicados.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Cuando llegamos, las puertas ya ___ abiertas.',
        options: ['fueron', 'eran', 'estaban'], answer: 2,
        explain: { ru: 'Состояние к моменту прихода (ya) — estar + причастие: estaban abiertas.', en: 'A state at the moment we arrived (ya) — estar + participle: estaban abiertas.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'En esta empresa se ___ a los nuevos empleados con mucho respeto. (tratar)',
        options: ['trata', 'tratan', 'tratamos'], answer: 0,
        explain: { ru: 'Люди с предлогом a — безличное se, глагол всегда в единственном числе: se trata a los empleados.', en: 'People introduced with a — impersonal se, the verb is always singular: se trata a los empleados.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Durante la reunión se ___ muchas decisiones importantes. (tomar, pasado)',
        options: ['tomó', 'tomaron', 'tomaba'], answer: 1,
        explain: { ru: 'Пассив с se, предмет во множественном (decisiones): se tomaron.', en: 'The se passive with a plural thing (decisiones): se tomaron.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'No se ___ fumar en el hospital. (poder)',
        options: ['pueden', 'puede', 'podemos'], answer: 1,
        explain: { ru: 'Se + глагол + инфинитив — единственное число: no se puede fumar.', en: 'Se + verb + infinitive is singular: no se puede fumar.' } },
      { prompt: { ru: 'Какое предложение правильное?', en: 'Which sentence is correct?' },
        options: ['Se alquilan pisos por el dueño.', 'Se alquila pisos.', 'Se alquilan pisos.'], answer: 2,
        explain: { ru: 'Глагол согласуется с pisos, а деятеля при пассиве с se не называют: Se alquilan pisos.', en: 'The verb agrees with pisos, and the se passive does not name an agent: Se alquilan pisos.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'La catedral ___ construida en el siglo XIII.',
        options: ['fue', 'estuvo', 'se'], answer: 0,
        explain: { ru: 'Действие в прошлом (строительство) — пассив с ser: fue construida.', en: 'A past action (the building of it) — the ser passive: fue construida.' } }
    ]
  },
  {
    id: 'b2-estilo-indirecto', level: 'B2',
    title: { ru: 'Косвенная речь', en: 'Reported speech' },
    hero: {
      es: 'Estilo <b>indirecto</b>',
      sub: { ru: 'Как пересказать чужие слова, вопросы и просьбы: сдвиг времён, si и вопросительные слова, указания места и времени',
             en: 'How to report what someone said, asked or requested: tense shifts, si and question words, words for place and time' }
    },
    tabs: [
      {
        id: 'shift', label: { ru: 'Сдвиг времён', en: 'Tense shift' },
        blocks: [
          { type: 'text', heading: { ru: 'Когда времена сдвигаются', en: 'When tenses shift' }, body: {
            ru: ['Если вводящий глагол в <b>настоящем</b> (<i>dice, pregunta</i>), время не меняется: <i>«Estoy cansada» → Dice que está cansada</i>.',
                 'Если вводящий глагол в <b>прошедшем</b> (<i>dijo, me preguntó</i>), времена обычно сдвигаются на шаг назад.'],
            en: ['If the reporting verb is in the <b>present</b> (<i>dice, pregunta</i>), the tense does not change: <i>“Estoy cansada” → Dice que está cansada</i>.',
                 'If the reporting verb is <b>past</b> (<i>dijo, me preguntó</i>), tenses usually move one step back.'] } },
          { type: 'table', heading: { ru: 'Таблица сдвига', en: 'The shift table' },
            head: ['', 'directo', 'dijo que…'],
            rows: [
              ['presente', 'estoy', 'estaba'],
              ['indefinido', 'fui', 'había ido'],
              ['perfecto', 'he hecho', 'había hecho'],
              ['futuro', 'llamaré', 'llamaría'],
              ['imperativo', 'cierra', 'cerrara'],
              ['subjuntivo', 'ayudes', 'ayudara'],
              ['imperfecto', 'estaba', 'estaba'],
              ['condicional', 'llamaría', 'llamaría'],
              ['pluscuamperfecto', 'había ido', 'había ido']
            ] },
          { type: 'text', heading: { ru: 'Во что превращается', en: 'What each tense becomes' }, body: {
            ru: ['Presente → imperfecto; indefinido и perfecto → pluscuamperfecto; futuro → condicional; imperativo и presente de subjuntivo → imperfecto de subjuntivo. <b>Imperfecto, condicional и pluscuamperfecto не меняются.</b>'],
            en: ['Presente → imperfecto; indefinido and perfecto → pluscuamperfecto; futuro → condicional; imperativo and presente de subjuntivo → imperfecto de subjuntivo. <b>Imperfecto, condicional and pluscuamperfecto do not change.</b>'] } },
          { type: 'conj', heading: { ru: 'Прямая и косвенная речь', en: 'Direct and reported speech' }, verbs: [
            { inf: 'presente → imperfecto', variants: [
              { label: { ru: 'прямая', en: 'direct' }, color: 'blue', rows: [['yo', '«<b>Estoy</b> cansada.»'], ['nosotros', '«<b>Vivimos</b> en Madrid.»']] },
              { label: { ru: 'косвенная', en: 'reported' }, color: 'teal', rows: [['ella', 'Dijo que <b>estaba</b> cansada.'], ['ellos', 'Dijeron que <b>vivían</b> en Madrid.']] }
            ] },
            { inf: 'indefinido → pluscuamperfecto', variants: [
              { label: { ru: 'прямая', en: 'direct' }, color: 'amber', rows: [['yo', '«<b>Fui</b> al médico.»'], ['nosotros', '«<b>Perdimos</b> el tren.»']] },
              { label: { ru: 'косвенная', en: 'reported' }, color: 'teal', rows: [['él', 'Dijo que <b>había ido</b> al médico.'], ['ellos', 'Dijeron que <b>habían perdido</b> el tren.']] }
            ] },
            { inf: 'perfecto → pluscuamperfecto', variants: [
              { label: { ru: 'прямая', en: 'direct' }, color: 'blue', rows: [['yo', '«<b>He terminado</b>.»'], ['vosotros', '«¿<b>Habéis comido</b>?»']] },
              { label: { ru: 'косвенная', en: 'reported' }, color: 'teal', rows: [['él', 'Dijo que <b>había terminado</b>.'], ['ella', 'Preguntó si <b>habíamos comido</b>.']] }
            ] },
            { inf: 'futuro → condicional', variants: [
              { label: { ru: 'прямая', en: 'direct' }, color: 'purple', rows: [['yo', '«Te <b>llamaré</b>.»'], ['nosotros', '«<b>Volveremos</b> pronto.»']] },
              { label: { ru: 'косвенная', en: 'reported' }, color: 'purple', rows: [['él', 'Dijo que me <b>llamaría</b>.'], ['ellos', 'Dijeron que <b>volverían</b> pronto.']] }
            ] },
            { inf: 'subjuntivo → imperfecto de subjuntivo', variants: [
              { label: { ru: 'прямая', en: 'direct' }, color: 'coral', rows: [['yo', '«Quiero que me <b>ayudes</b>.»'], ['nosotros', '«Esperamos que <b>vengáis</b>.»']] },
              { label: { ru: 'косвенная', en: 'reported' }, color: 'coral', rows: [['él', 'Dijo que quería que lo <b>ayudara</b>.'], ['ellos', 'Dijeron que esperaban que <b>viniéramos</b>.']] }
            ] }
          ] },
          { type: 'text', color: 'blue', heading: { ru: 'Когда сдвиг не обязателен', en: 'When the shift is optional' }, body: {
            ru: ['Если сказанное всё ещё верно, настоящее можно сохранить: <i>Me dijo que vive en Madrid</i> (и сейчас живёт). Когда ситуация уже в прошлом, сдвиг обязателен.'],
            en: ['If what was said is still true, the present may stay: <i>Me dijo que vive en Madrid</i> (and still does). When the situation is over, the shift is required.'] } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'teal', es: '«Fui al médico.» → Dijo que <b>había ido</b> al médico.', ru: '«Я ходил к врачу». → Он сказал, что ходил к врачу.', en: '“I went to the doctor.” → He said he had been to the doctor.' },
            { color: 'purple', es: '«Te llamaré.» → Dijo que me <b>llamaría</b>.', ru: '«Я тебе позвоню». → Он сказал, что позвонит мне.', en: '“I’ll call you.” → He said he would call me.' },
            { color: 'teal', es: '«Estoy cansada.» → Dijo que <b>estaba</b> cansada.', ru: '«Я устала». → Она сказала, что устала.', en: '“I’m tired.” → She said she was tired.' }
          ] }
        ]
      },
      {
        id: 'questions', label: { ru: 'Вопросы', en: 'Questions' },
        blocks: [
          { type: 'text', heading: { ru: 'Два типа вопросов', en: 'Two kinds of questions' }, body: {
            ru: ['Вопрос «да/нет» вводится через <b>si</b>: <i>«¿Tienes hambre?» → Me preguntó si tenía hambre</i>. Вопрос со словом сохраняет это слово с ударением: <i>«¿Dónde vives?» → Me preguntó dónde vivía</i>.',
                 'Вопросительных знаков и обратного порядка слов в косвенном вопросе нет. В разговорной речи перед вопросительным словом часто добавляют <i>que</i>: <i>Me preguntó que dónde vivía</i>.'],
            en: ['A yes/no question is introduced with <b>si</b>: <i>“¿Tienes hambre?” → Me preguntó si tenía hambre</i>. A question with a question word keeps that word, with its accent: <i>“¿Dónde vives?” → Me preguntó dónde vivía</i>.',
                 'A reported question has no question marks and no inverted word order. In speech people often put <i>que</i> before the question word: <i>Me preguntó que dónde vivía</i>.'] } },
          { type: 'triggers', heading: { ru: 'Чем вводится вопрос', en: 'What introduces the question' }, items: [
            { num: '1', title: { ru: 'Вопрос «да / нет»', en: 'Yes / no question' }, sub: { ru: 'si = «ли»', en: 'si = “whether”' },
              phrases: ['preguntó si', 'quería saber si', 'no sé si'],
              ex: { es: 'Me preguntó si <b>tenía</b> hambre.', ru: 'Он спросил, не голоден ли я.', en: 'He asked me if I was hungry.' } },
            { num: '2', title: { ru: 'Вопрос со словом', en: 'Question with a question word' }, sub: { ru: 'слово сохраняет ударение', en: 'the word keeps its accent' },
              phrases: ['qué', 'quién', 'dónde', 'cuándo', 'cómo', 'cuánto', 'cuál', 'por qué'],
              ex: { es: 'Me preguntó dónde <b>vivía</b>.', ru: 'Он спросил, где я живу.', en: 'He asked me where I lived.' } }
          ] },
          { type: 'conj', heading: { ru: 'Прямой и косвенный вопрос', en: 'Direct and reported question' }, verbs: [
            { inf: '¿…? → si', tr: { ru: 'да / нет', en: 'yes / no' }, variants: [
              { label: { ru: 'прямая', en: 'direct' }, color: 'blue', rows: [['tú', '«¿<b>Tienes</b> hambre?»'], ['vosotros', '«¿<b>Podéis</b> ayudarme?»']] },
              { label: { ru: 'косвенная', en: 'reported' }, color: 'teal', rows: [['yo', 'Me preguntó si <b>tenía</b> hambre.'], ['nosotros', 'Nos preguntó si <b>podíamos</b> ayudarle.']] }
            ] },
            { inf: '¿dónde…? → dónde', tr: { ru: 'со словом', en: 'with a question word' }, variants: [
              { label: { ru: 'прямая', en: 'direct' }, color: 'blue', rows: [['tú', '«¿Dónde <b>vives</b>?»'], ['ellos', '«¿Cuándo <b>llegan</b>?»']] },
              { label: { ru: 'косвенная', en: 'reported' }, color: 'teal', rows: [['yo', 'Me preguntó dónde <b>vivía</b>.'], ['ellos', 'Preguntó cuándo <b>llegaban</b>.']] }
            ] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'teal', es: 'El médico me preguntó si <b>fumaba</b>.', ru: 'Врач спросил меня, курю ли я.', en: 'The doctor asked me if I smoked.' },
            { color: 'teal', es: 'Le pregunté cuánto <b>costaba</b> la entrada.', ru: 'Я спросил его, сколько стоит билет.', en: 'I asked him how much the ticket cost.' },
            { color: 'teal', es: '«¿Has visto a Pedro?» → Me preguntó si <b>había visto</b> a Pedro.', ru: '«Ты видел Педро?» → Он спросил, видел ли я Педро.', en: '“Have you seen Pedro?” → He asked me if I had seen Pedro.' }
          ] }
        ]
      },
      {
        id: 'requests', label: { ru: 'Просьбы', en: 'Requests' },
        blocks: [
          { type: 'text', heading: { ru: 'Приказ → que + субхунтив', en: 'Order → que + subjunctive' }, body: {
            ru: ['Приказ или просьба превращаются в <b>que + субхунтив</b>: <i>«Ven pronto» → Me pidió que fuera pronto</i>. После вводящего глагола в настоящем — presente de subjuntivo: <i>Dice que vengas</i>.'],
            en: ['An order or request becomes <b>que + subjunctive</b>: <i>“Ven pronto” → Me pidió que fuera pronto</i>. After a present reporting verb use the presente de subjuntivo: <i>Dice que vengas</i>.'] } },
          { type: 'triggers', heading: { ru: 'Вводящие глаголы просьбы', en: 'Verbs that report requests' }, items: [
            { num: '1', title: { ru: 'Просьба, приказ', en: 'Request, order' }, phrases: ['decir que', 'pedir que', 'ordenar que', 'rogar que', 'exigir que'] },
            { num: '2', title: { ru: 'Совет, предложение', en: 'Advice, suggestion' }, phrases: ['aconsejar que', 'recomendar que', 'sugerir que', 'proponer que'] }
          ] },
          { type: 'conj', heading: { ru: 'Сообщение или просьба', en: 'Information or request' }, verbs: [
            { inf: 'me dijo que…', tr: { ru: 'одна фраза — два смысла', en: 'one phrase, two meanings' }, variants: [
              { label: { ru: 'сообщение', en: 'information' }, color: 'teal', rows: [['yo', 'Me dijo que <b>venía</b>.'], ['nosotros', 'Nos dijo que <b>llegaba</b> tarde.']] },
              { label: { ru: 'просьба', en: 'request' }, color: 'coral', rows: [['yo', 'Me dijo que <b>viniera</b>.'], ['nosotros', 'Nos dijo que <b>llegáramos</b> pronto.']] }
            ] }
          ] },
          { type: 'text', color: 'coral', heading: { ru: 'Отрицание и местоимения', en: 'Negatives and pronouns' }, body: {
            ru: ['Внимание: <i>Me dijo que venía</i> — «сказал, что придёт» (сообщение), а <i>Me dijo que viniera</i> — «велел мне прийти» (просьба).',
                 'Отрицательный приказ: <i>«No toques eso» → Me dijo que no tocara eso</i>. Местоимения встают перед глаголом: <i>«Dámelo» → Me pidió que se lo diera</i>.'],
            en: ['Note: <i>Me dijo que venía</i> means “he said he was coming” (information), while <i>Me dijo que viniera</i> means “he told me to come” (a request).',
                 'Negative orders: <i>“No toques eso” → Me dijo que no tocara eso</i>. Pronouns move in front of the verb: <i>“Dámelo” → Me pidió que se lo diera</i>.'] } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'coral', es: 'Mi jefa me pidió que <b>llegara</b> antes.', ru: 'Начальница попросила меня прийти пораньше.', en: 'My boss asked me to arrive earlier.' },
            { color: 'coral', es: '«Cierra la puerta.» → Me dijo que <b>cerrara</b> la puerta.', ru: '«Закрой дверь». → Он велел мне закрыть дверь.', en: '“Close the door.” → He told me to close the door.' },
            { color: 'coral', es: '«No toquéis nada.» → Nos pidió que no <b>tocáramos</b> nada.', ru: '«Ничего не трогайте». → Он попросил нас ничего не трогать.', en: '“Don’t touch anything.” → He asked us not to touch anything.' }
          ] }
        ]
      },
      {
        id: 'pointers', label: { ru: 'Указатели', en: 'Signal words' },
        blocks: [
          { type: 'text', heading: { ru: 'Место, время, лицо', en: 'Place, time and person' }, body: {
            ru: ['Если пересказываем в другом месте или в другой день, меняются и указатели: <i>hoy → aquel día</i>, <i>mañana → al día siguiente</i>, <i>ayer → el día anterior</i>, <i>aquí → allí</i>, <i>este → ese / aquel</i>, <i>venir → ir</i>, <i>traer → llevar</i>. Меняются и лица: <i>«mi coche» → su coche</i>.'],
            en: ['If we report in another place or on another day, the pointing words change too: <i>hoy → aquel día</i>, <i>mañana → al día siguiente</i>, <i>ayer → el día anterior</i>, <i>aquí → allí</i>, <i>este → ese / aquel</i>, <i>venir → ir</i>, <i>traer → llevar</i>. The persons change as well: <i>“mi coche” → su coche</i>.'] } },
          { type: 'table', heading: { ru: 'Что на что меняется', en: 'What changes into what' },
            head: [{ ru: 'Прямая речь', en: 'Direct speech' }, { ru: 'Косвенная речь', en: 'Reported speech' }],
            rows: [
              ['hoy', 'aquel día'],
              ['ayer', 'el día anterior'],
              ['mañana', 'al día siguiente'],
              ['ahora', 'entonces'],
              ['esta semana', 'aquella semana'],
              ['la semana que viene', 'la semana siguiente'],
              ['el año pasado', 'el año anterior'],
              ['hace dos días', 'dos días antes'],
              ['aquí', 'allí'],
              ['este / esta', 'ese / aquel'],
              ['venir · traer', 'ir · llevar'],
              ['mi coche', 'su coche']
            ] },
          { type: 'triggers', heading: { ru: 'Вводящие глаголы', en: 'Reporting verbs' }, items: [
            { num: '1', title: { ru: 'Сообщить', en: 'Tell' }, phrases: ['decir', 'contar', 'explicar', 'comentar', 'añadir'] },
            { num: '2', title: { ru: 'Утверждать, признать', en: 'Claim, admit' }, phrases: ['asegurar', 'afirmar', 'reconocer', 'admitir', 'negar'] },
            { num: '3', title: { ru: 'Обещать, предупредить', en: 'Promise, warn' }, phrases: ['prometer', 'advertir', 'avisar'] },
            { num: '4', title: { ru: 'Спросить', en: 'Ask' }, phrases: ['preguntar', 'querer saber'] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'purple', es: '«Volveré mañana.» → Dijo que <b>volvería</b> al día siguiente.', ru: '«Я вернусь завтра». → Он сказал, что вернётся на следующий день.', en: '“I’ll be back tomorrow.” → He said he would be back the next day.' },
            { color: 'teal', es: '«Aquí se come muy bien.» → Dijo que allí se <b>comía</b> muy bien.', ru: '«Здесь очень хорошо кормят». → Он сказал, что там очень хорошо кормят.', en: '“The food here is very good.” → He said the food there was very good.' },
            { color: 'teal', es: '«Ayer vi a tu hermana.» → Me contó que el día anterior <b>había visto</b> a mi hermana.', ru: '«Вчера я видел твою сестру». → Он рассказал, что накануне видел мою сестру.', en: '“I saw your sister yesterday.” → He told me he had seen my sister the day before.' }
          ] }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Сообщения', en: 'Statements' }, items: [
            { color: 'coral', es: '«Quiero que me ayudes.» → Dijo que quería que lo <b>ayudara</b>.', ru: '«Я хочу, чтобы ты мне помог». → Он сказал, что хочет, чтобы я ему помог.', en: '“I want you to help me.” → He said he wanted me to help him.' },
            { color: 'teal', es: '«He terminado.» → Dijo que <b>había terminado</b>.', ru: '«Я закончил». → Он сказал, что закончил.', en: '“I’ve finished.” → He said he had finished.' },
            { color: 'blue', es: 'Me dijo que <b>vive</b> en Madrid.', ru: 'Он сказал мне, что живёт в Мадриде (и живёт до сих пор).', en: 'He told me he lives in Madrid (and he still does).' },
            { color: 'blue', es: 'Mi madre dice que la cena <b>está</b> lista.', ru: 'Мама говорит, что ужин готов.', en: 'My mum says dinner is ready.' },
            { color: 'teal', es: '«Os echo de menos.» → Nos escribió que nos <b>echaba</b> de menos.', ru: '«Я скучаю по вам». → Он написал нам, что скучает по нам.', en: '“I miss you.” → He wrote to us that he missed us.' },
            { color: 'purple', es: '«Terminaremos el proyecto la semana que viene.» → Aseguraron que lo <b>terminarían</b> la semana siguiente.', ru: '«Мы закончим проект на следующей неделе». → Они заверили, что закончат его на следующей неделе.', en: '“We’ll finish the project next week.” → They assured us they would finish it the following week.' },
            { color: 'teal', es: '«Lo siento, me he equivocado.» → Reconoció que se <b>había equivocado</b>.', ru: '«Извини, я ошибся». → Он признал, что ошибся.', en: '“Sorry, I made a mistake.” → He admitted he had made a mistake.' },
            { color: 'teal', es: '«No voy a ir a la boda.» → Me comentó que no <b>iba</b> a ir a la boda.', ru: '«Я не пойду на свадьбу». → Он сказал мне, что не пойдёт на свадьбу.', en: '“I’m not going to the wedding.” → He told me he wasn’t going to the wedding.' },
            { color: 'purple', es: '«Si tengo tiempo, os visitaré.» → Dijo que si tenía tiempo, nos <b>visitaría</b>.', ru: '«Если будет время, я вас навещу». → Он сказал, что, если у него будет время, он нас навестит.', en: '“If I have time, I’ll visit you.” → He said that if he had time, he would visit us.' },
            { color: 'teal', es: '«Estaba dormido cuando llamaste.» → Me explicó que <b>estaba</b> dormido cuando lo llamé.', ru: '«Я спал, когда ты позвонил». → Он объяснил, что спал, когда я ему позвонил.', en: '“I was asleep when you called.” → He explained he had been asleep when I called him.' }
          ] },
          { type: 'examples', heading: { ru: 'Вопросы и просьбы', en: 'Questions and requests' }, items: [
            { color: 'teal', es: '«¿Cuándo empieza la reunión?» → Preguntaron cuándo <b>empezaba</b> la reunión.', ru: '«Когда начинается совещание?» → Они спросили, когда начинается совещание.', en: '“When does the meeting start?” → They asked when the meeting started.' },
            { color: 'teal', es: '«¿Podéis ayudarme?» → Nos preguntó si <b>podíamos</b> ayudarle.', ru: '«Можете мне помочь?» → Он спросил, можем ли мы ему помочь.', en: '“Can you help me?” → He asked if we could help him.' },
            { color: 'coral', es: '«Llámame esta noche.» → Me pidió que la <b>llamara</b> aquella noche.', ru: '«Позвони мне сегодня вечером». → Она попросила меня позвонить ей в тот вечер.', en: '“Call me tonight.” → She asked me to call her that night.' },
            { color: 'coral', es: '«Traed vuestros libros.» → El profesor nos dijo que <b>lleváramos</b> nuestros libros.', ru: '«Принесите свои книги». → Преподаватель велел нам принести свои книги.', en: '“Bring your books.” → The teacher told us to bring our books.' },
            { color: 'coral', es: '«Te aconsejo que descanses.» → Me aconsejó que <b>descansara</b>.', ru: '«Советую тебе отдохнуть». → Он посоветовал мне отдохнуть.', en: '“I advise you to rest.” → He advised me to rest.' }
          ] }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Перескажите: «Estoy cansada».', en: 'Report it: “Estoy cansada”.' }, es: 'Ayer Ana me dijo que ___ cansada, pero hoy ya está bien.',
        options: ['está', 'estaba', 'estará'], answer: 1,
        explain: { ru: 'Dijo в прошлом, и ситуация уже прошла (hoy ya está bien) — presente → imperfecto: estaba.', en: 'Dijo is past and the situation is over (hoy ya está bien) — presente → imperfecto: estaba.' } },
      { prompt: { ru: 'Перескажите: «Te llamaré».', en: 'Report it: “Te llamaré”.' }, es: 'Luis me prometió que me ___, pero nunca lo hizo.',
        options: ['llamará', 'llame', 'llamaría'], answer: 2,
        explain: { ru: 'Futuro после прошедшего вводящего глагола → condicional: llamaría. Обещание уже в прошлом (nunca lo hizo).', en: 'Futuro after a past reporting verb → condicional: llamaría. The promise lies in the past (nunca lo hizo).' } },
      { prompt: { ru: 'Перескажите просьбу: «Cierra la puerta».', en: 'Report the request: “Cierra la puerta”.' }, es: 'Mi padre me dijo que ___ la puerta.',
        options: ['cerrara', 'cerraba', 'cerraré'], answer: 0,
        explain: { ru: 'Повелительное в косвенной речи после dijo → que + Imperfecto de subjuntivo: cerrara.', en: 'An imperative reported after dijo → que + Imperfecto de subjuntivo: cerrara.' } },
      { prompt: { ru: 'Перескажите: «¿Tienes hambre?»', en: 'Report it: “¿Tienes hambre?”' }, es: 'Me preguntó ___ tenía hambre.',
        options: ['que', 'qué', 'si'], answer: 2,
        explain: { ru: 'Вопрос «да/нет» в косвенной речи вводится через si.', en: 'A reported yes/no question is introduced with si.' } },
      { prompt: { ru: 'Перескажите: «¿Dónde has dejado las llaves?»', en: 'Report it: “¿Dónde has dejado las llaves?”' }, es: 'Me preguntó dónde ___ las llaves.',
        options: ['dejaría', 'había dejado', 'dejaba'], answer: 1,
        explain: { ru: 'Pretérito perfecto после прошедшего вводящего глагола → pluscuamperfecto: había dejado.', en: 'The Pretérito perfecto after a past reporting verb → pluscuamperfecto: había dejado.' } },
      { prompt: { ru: 'Неделю назад Хуан сказал: «Volveré mañana». Перескажите сегодня.', en: 'A week ago Juan said: “Volveré mañana”. Report it today.' }, es: 'Juan dijo que volvería ___.',
        options: ['mañana', 'al día siguiente', 'ayer'], answer: 1,
        explain: { ru: 'Пересказываем в другой день — mañana → al día siguiente.', en: 'We are reporting on a different day — mañana → al día siguiente.' } },
      { prompt: { ru: 'Перескажите: «Estoy en casa».', en: 'Report it: “Estoy en casa”.' }, es: 'Marta dice que ___ en casa.',
        options: ['estaba', 'estuviera', 'está'], answer: 2,
        explain: { ru: 'Вводящий глагол в настоящем (dice) — время не меняется: está.', en: 'The reporting verb is present (dice), so the tense does not change: está.' } },
      { prompt: { ru: 'Перескажите просьбу: «No vengas tarde».', en: 'Report the request: “No vengas tarde”.' }, es: 'Me pidió que no ___ tarde.',
        options: ['viniera', 'venía', 'vendría'], answer: 0,
        explain: { ru: 'Pedir que + субхунтив; после прошедшего — Imperfecto de subjuntivo: viniera.', en: 'Pedir que takes the subjunctive; after a past verb — Imperfecto de subjuntivo: viniera.' } },
      { prompt: { ru: 'Перескажите: «Fui al médico».', en: 'Report it: “Fui al médico”.' }, es: 'Pablo me contó que ___ al médico.',
        options: ['iría', 'iba', 'había ido'], answer: 2,
        explain: { ru: 'Indefinido → pluscuamperfecto: había ido. Iba значило бы «шёл / собирался идти».', en: 'Indefinido → pluscuamperfecto: había ido. Iba would mean “was going”.' } }
    ]
  },
  {
    id: 'b2-subjuntivo-indicativo', level: 'B2',
    title: { ru: 'Subjuntivo или indicativo в придаточных', en: 'Subjunctive or indicative in subordinate clauses' },
    hero: {
      es: 'Subjuntivo <b>o</b> Indicativo',
      sub: { ru: 'Мнение и чувство, время, относительные придаточные и союзы: как в каждом случае выбрать наклонение',
             en: 'Opinion and feeling, time, relative clauses and conjunctions: how to choose the mood in each case' }
    },
    tabs: [
      {
        id: 'opinion', label: { ru: 'Мнение', en: 'Opinion' },
        blocks: [
          { type: 'text', heading: { ru: 'Главный принцип', en: 'The main principle' }, body: {
            ru: ['<b>Indicativo</b> утверждает: говорящий сообщает факт или то, что считает правдой. <b>Subjuntivo</b> не утверждает: желание, сомнение, оценка, ещё не случившееся или неизвестное.',
                 'Проверка: можно ли переспросить «это правда?». <i>Creo que viene</i> — да, это утверждение. <i>Quiero que venga</i> — нет, это желание.'],
            en: ['The <b>indicative</b> asserts: the speaker states a fact or what they believe is true. The <b>subjunctive</b> does not assert: it expresses wishes, doubt, evaluation, things not yet real or unknown.',
                 'A test: can you ask “is that true?”. <i>Creo que viene</i> — yes, it is a statement. <i>Quiero que venga</i> — no, it is a wish.'] } },
          { type: 'table', heading: { ru: 'Все случаи коротко', en: 'All the cases at a glance' },
            head: ['', 'indicativo', 'subjuntivo'],
            rows: [
              ['opinión', 'creo que tiene', 'no creo que tenga'],
              ['certeza', 'es verdad que', 'dudo que'],
              ['sentimiento', '—', 'me alegra que'],
              ['valoración', '—', 'es normal que'],
              ['posibilidad', '—', 'es posible que'],
              ['relativo', 'tengo uno que', 'busco uno que'],
              ['tiempo', 'cuando llego', 'cuando llegue']
            ] },
          { type: 'conj', heading: { ru: 'Утверждение и отрицание', en: 'Affirmative and negative' }, verbs: [
            { inf: 'creer que', tr: { ru: 'мнение', en: 'opinion' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', 'Creo que <b>tiene</b> razón.'], ['nosotros', 'Pensamos que <b>es</b> buena idea.'], ['me parece', 'Me parece que <b>está</b> enfadado.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['yo', 'No creo que <b>tenga</b> razón.'], ['nosotros', 'No pensamos que <b>sea</b> buena idea.'], ['no me parece', 'No me parece que <b>esté</b> enfadado.']] }
            ] },
            { inf: 'estar seguro de que', tr: { ru: 'уверенность', en: 'certainty' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['tú', 'Estás seguro de que <b>viene</b>.'], ['es verdad', 'Es verdad que <b>miente</b>.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['tú', 'No estás seguro de que <b>venga</b>.'], ['no es verdad', 'No es verdad que <b>mienta</b>.']] }
            ] }
          ] },
          { type: 'text', color: 'coral', heading: { ru: 'Чувства и оценки', en: 'Feelings and evaluations' }, body: {
            ru: ['<b>Creer, pensar, parecer, estar seguro, es verdad, es evidente</b> + indicativo. С отрицанием (<i>no creo que, no es verdad que</i>) — subjuntivo.',
                 '<b>Чувства и оценки</b> (<i>me alegra, me molesta, es normal, es importante, es posible</i>) — всегда subjuntivo, даже если это факт: <i>Me alegra que hayas venido</i>.',
                 '<b>Тонкости:</b> в риторическом вопросе с отрицанием — indicativo: <i>¿No crees que es tarde?</i> После <i>no dudo de que</i> обычно тоже indicativo: <i>No dudo de que tienes razón</i>.'],
            en: ['<b>Creer, pensar, parecer, estar seguro, es verdad, es evidente</b> + indicative. In the negative (<i>no creo que, no es verdad que</i>) — subjunctive.',
                 '<b>Feelings and evaluations</b> (<i>me alegra, me molesta, es normal, es importante, es posible</i>) always take the subjunctive, even for facts: <i>Me alegra que hayas venido</i>.',
                 '<b>Fine points:</b> a negative rhetorical question takes the indicative: <i>¿No crees que es tarde?</i> <i>No dudo de que</i> is usually followed by the indicative too: <i>No dudo de que tienes razón</i>.'] } },
          { type: 'markers', heading: { ru: 'Фразы-сигналы', en: 'Signal phrases' }, groups: [
            { color: 'blue', title: { ru: 'Indicativo: считаю правдой', en: 'Indicative: I take it as true' },
              tags: ['creo que', 'pienso que', 'me parece que', 'estoy seguro de que', 'es verdad que', 'es evidente que', 'está claro que', 'no dudo de que'] },
            { color: 'coral', title: { ru: 'Subjuntivo: сомнение, чувство, оценка', en: 'Subjunctive: doubt, feeling, evaluation' },
              tags: ['no creo que', 'no pienso que', 'dudo que', 'no es verdad que', 'no está claro que', 'es posible que', 'me alegra que', 'me molesta que', 'es normal que', 'es importante que'] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'blue', es: 'Es verdad que <b>llueve</b> mucho aquí.', ru: 'Здесь действительно много дождей.', en: 'It’s true that it rains a lot here.' },
            { color: 'coral', es: 'Me alegra que <b>estés</b> aquí.', ru: 'Я рад, что ты здесь.', en: 'I’m glad you’re here.' },
            { color: 'blue', es: 'Es evidente que el plan no <b>funciona</b>.', ru: 'Очевидно, что план не работает.', en: 'It’s obvious that the plan isn’t working.' },
            { color: 'coral', es: 'No pienso que <b>sea</b> una buena idea.', ru: 'Не думаю, что это хорошая идея.', en: 'I don’t think it’s a good idea.' },
            { color: 'coral', es: 'Me molesta que no me <b>escuches</b>.', ru: 'Меня раздражает, что ты меня не слушаешь.', en: 'It annoys me that you don’t listen to me.' }
          ] }
        ]
      },
      {
        id: 'time', label: { ru: 'Время', en: 'Time' },
        blocks: [
          { type: 'text', heading: { ru: 'Правило', en: 'The rule' }, body: {
            ru: ['<b>Cuando, en cuanto, hasta que, mientras</b>: привычное действие или прошлое — indicativo; будущее — subjuntivo. Futuro после cuando не ставят: <i>Cuando llegue</i>, а не «cuando llegaré».',
                 '<b>Antes de que</b> — всегда subjuntivo: <i>Vete antes de que llueva</i>.'],
            en: ['<b>Cuando, en cuanto, hasta que, mientras</b>: a habit or a past event — indicative; the future — subjunctive. Never use the futuro after cuando: <i>Cuando llegue</i>, not “cuando llegaré”.',
                 '<b>Antes de que</b> always takes the subjunctive: <i>Vete antes de que llueva</i>.'] } },
          { type: 'conj', heading: { ru: 'Привычка, прошлое, будущее', en: 'Habit, past, future' }, verbs: [
            { inf: 'cuando', tr: { ru: 'когда', en: 'when' }, variants: [
              { label: { ru: 'привычка', en: 'habit' }, color: 'blue', rows: [['yo', 'Cuando <b>llego</b> a casa, ceno.'], ['ellos', 'Cuando <b>tienen</b> tiempo, leen.']] },
              { label: { ru: 'прошлое', en: 'past' }, color: 'amber', rows: [['yo', 'Cuando <b>llegué</b> a casa, cené.'], ['ellos', 'Cuando <b>tuvieron</b> tiempo, leyeron.']] },
              { label: { ru: 'будущее', en: 'future' }, color: 'coral', rows: [['yo', 'Cuando <b>llegue</b> a casa, cenaré.'], ['ellos', 'Cuando <b>tengan</b> tiempo, leerán.']] }
            ] },
            { inf: 'hasta que', tr: { ru: 'пока не', en: 'until' }, variants: [
              { label: { ru: 'привычка', en: 'habit' }, color: 'blue', rows: [['yo', 'Siempre espero hasta que <b>llega</b>.']] },
              { label: { ru: 'прошлое', en: 'past' }, color: 'amber', rows: [['yo', 'Esperé hasta que <b>llegó</b>.']] },
              { label: { ru: 'будущее', en: 'future' }, color: 'coral', rows: [['yo', 'Esperaré hasta que <b>llegue</b>.']] }
            ] }
          ] },
          { type: 'triggers', heading: { ru: 'Союзы времени', en: 'Time conjunctions' }, items: [
            { num: '1', title: { ru: 'Зависит от времени', en: 'Depends on the time' }, sub: { ru: 'привычка / прошлое → indicativo; будущее → subjuntivo', en: 'habit / past → indicative; future → subjunctive' },
              phrases: ['cuando', 'en cuanto', 'tan pronto como', 'hasta que', 'mientras', 'después de que', 'siempre que'],
              ex: { es: 'Tan pronto como <b>sepa</b> algo, te lo diré.', ru: 'Как только что-нибудь узнаю, скажу тебе.', en: 'As soon as I know something, I’ll tell you.' } },
            { num: '2', title: { ru: 'Всегда subjuntivo', en: 'Always subjunctive' }, sub: { ru: 'действие ещё не случилось', en: 'the action hasn’t happened yet' },
              phrases: ['antes de que'],
              ex: { es: 'Llámame antes de que <b>salgas</b>.', ru: 'Позвони мне перед выходом.', en: 'Call me before you leave.' } }
          ] },
          { type: 'text', color: 'coral', heading: { ru: 'Mientras и siempre que', en: 'Mientras and siempre que' }, body: {
            ru: ['С subjuntivo эти союзы получают значение условия: <i>Mientras tengas fiebre, no salgas</i> — «пока у тебя температура»; <i>Te ayudo siempre que me lo pidas</i> — «при условии, что попросишь». С indicativo <i>siempre que</i> — «каждый раз, когда»: <i>Siempre que viajo, pierdo algo</i>.'],
            en: ['With the subjunctive these conjunctions become conditions: <i>Mientras tengas fiebre, no salgas</i> — “as long as you have a temperature”; <i>Te ayudo siempre que me lo pidas</i> — “provided you ask me”. With the indicative <i>siempre que</i> means “whenever”: <i>Siempre que viajo, pierdo algo</i>.'] } },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'teal', es: 'Cuando <b>era</b> niño, vivía en un pueblo.', ru: 'Когда я был ребёнком, я жил в деревне.', en: 'When I was a child, I lived in a village.' },
            { color: 'coral', es: 'En cuanto <b>termine</b>, te aviso.', ru: 'Как только закончу, дам тебе знать.', en: 'As soon as I finish, I’ll let you know.' },
            { color: 'coral', es: 'Vete antes de que <b>llueva</b>.', ru: 'Иди, пока не пошёл дождь.', en: 'Go before it rains.' }
          ] }
        ]
      },
      {
        id: 'relatives', label: { ru: 'Который', en: 'Relatives' },
        blocks: [
          { type: 'text', heading: { ru: 'Правило', en: 'The rule' }, body: {
            ru: ['Если предмет или человек <b>известен и существует</b> — indicativo: <i>Tengo una vecina que habla cinco idiomas</i>.',
                 'Если он <b>неизвестен, ищется или его нет</b> — subjuntivo: <i>Busco un piso que tenga terraza</i>; <i>No hay nadie que sepa ruso</i>.'],
            en: ['If the thing or person is <b>known and exists</b> — indicative: <i>Tengo una vecina que habla cinco idiomas</i>.',
                 'If it is <b>unknown, being looked for or does not exist</b> — subjunctive: <i>Busco un piso que tenga terraza</i>; <i>No hay nadie que sepa ruso</i>.'] } },
          { type: 'conj', heading: { ru: 'Существует или нет', en: 'Exists or not' }, verbs: [
            { inf: '… que + verbo', tr: { ru: 'который', en: 'who / which' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['tengo', 'Tengo un piso que <b>tiene</b> terraza.'], ['conozco', 'Conozco a alguien que <b>habla</b> ruso.'], ['hay', 'Aquí hay un bar que <b>abre</b> los lunes.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['busco', 'Busco un piso que <b>tenga</b> terraza.'], ['no conozco', 'No conozco a nadie que <b>hable</b> ruso.'], ['¿hay…?', '¿Hay algún bar que <b>abra</b> los lunes?']] }
            ] },
            { inf: 'lo que · donde · como', tr: { ru: 'известно или «что угодно»', en: 'known or “whatever”' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['lo que', 'Hago lo que <b>quiero</b>.'], ['donde', 'Vivo donde <b>trabajo</b>.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['lo que', 'Haz lo que <b>quieras</b>.'], ['donde', 'Siéntate donde <b>prefieras</b>.']] }
            ] }
          ] },
          { type: 'text', color: 'blue', heading: { ru: 'Подсказка: артикль и a', en: 'Clue: the article and a' }, body: {
            ru: ['Определённый артикль и личное <b>a</b> часто сигналят, что человек известен: <i>Busco al médico que me operó</i> (конкретный). Неопределённый артикль без <b>a</b> — что подойдёт любой: <i>Busco un médico que hable inglés</i>.'],
            en: ['The definite article and personal <b>a</b> often signal a known person: <i>Busco al médico que me operó</i> (a specific one). An indefinite article without <b>a</b> means any suitable one: <i>Busco un médico que hable inglés</i>.'] } },
          { type: 'markers', heading: { ru: 'Сигналы', en: 'Signals' }, groups: [
            { color: 'blue', title: { ru: 'Indicativo: известно', en: 'Indicative: known' }, tags: ['tengo un… que', 'conozco a alguien que', 'hay un… que', 'el / la que'] },
            { color: 'coral', title: { ru: 'Subjuntivo: неизвестно или нет', en: 'Subjunctive: unknown or none' }, tags: ['busco un… que', 'necesito un… que', 'no hay nadie que', 'no conozco a nadie que', '¿hay alguien que…?', 'lo que quieras'] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'blue', es: 'Tengo un amigo que <b>habla</b> chino.', ru: 'У меня есть друг, который говорит по-китайски.', en: 'I have a friend who speaks Chinese.' },
            { color: 'coral', es: 'Busco a alguien que <b>hable</b> chino.', ru: 'Я ищу кого-нибудь, кто говорит по-китайски.', en: 'I’m looking for someone who speaks Chinese.' },
            { color: 'coral', es: 'Necesito un ayudante que <b>sepa</b> programar.', ru: 'Мне нужен помощник, который умеет программировать.', en: 'I need an assistant who can code.' },
            { color: 'blue', es: 'Trabajo con una chica que <b>sabe</b> programar.', ru: 'Я работаю с девушкой, которая умеет программировать.', en: 'I work with a girl who can code.' }
          ] }
        ]
      },
      {
        id: 'conjunctions', label: { ru: 'Союзы', en: 'Conjunctions' },
        blocks: [
          { type: 'rules', heading: { ru: 'Цель и причина', en: 'Purpose and cause' }, items: [
            { color: 'coral', label: { ru: 'Цель', en: 'Purpose' }, title: { ru: 'Para que + subjuntivo', en: 'Para que + subjunctive' }, es: 'para que · a fin de que',
              body: { ru: 'Цель ещё не достигнута — всегда subjuntivo. Если подлежащее то же — <i>para</i> + инфинитив: <i>Estudio para aprobar</i>, но <i>Te ayudo para que apruebes</i>.',
                      en: 'The goal is not reached yet — always subjunctive. With the same subject use <i>para</i> + infinitive: <i>Estudio para aprobar</i>, but <i>Te ayudo para que apruebes</i>.' } },
            { color: 'blue', label: { ru: 'Причина', en: 'Cause' }, title: { ru: 'Porque + indicativo', en: 'Porque + indicative' }, es: 'porque · ya que · como · puesto que',
              body: { ru: 'Причина — это факт, поэтому indicativo. <i>Como</i> в значении «так как» стоит в начале фразы: <i>Como no llegabas, me fui</i>.',
                      en: 'A cause is a fact, so the indicative. <i>Como</i> meaning “since” comes at the start of the sentence: <i>Como no llegabas, me fui</i>.' } },
            { color: 'coral', label: { ru: 'Отрицаемая причина', en: 'Denied cause' }, title: { ru: 'No porque + subjuntivo', en: 'No porque + subjunctive' }, es: 'no porque…, sino porque…',
              body: { ru: 'Если причину отрицают, она уже не утверждается — subjuntivo: <i>No lo digo porque esté enfadado, sino porque es verdad</i>.',
                      en: 'When a cause is denied, it is no longer asserted — subjunctive: <i>No lo digo porque esté enfadado, sino porque es verdad</i>.' } }
          ] },
          { type: 'conj', heading: { ru: 'Один союз — два наклонения', en: 'One conjunction, two moods' }, verbs: [
            { inf: 'aunque', tr: { ru: 'известный факт или гипотеза', en: 'known fact or hypothesis' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['hecho', 'Aunque <b>llueve</b>, salgo.'], ['ella', 'Aunque <b>está</b> cansada, sigue.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['hipótesis', 'Aunque <b>llueva</b>, saldré.'], ['ella', 'Aunque <b>esté</b> cansada, seguirá.']] }
            ] },
            { inf: 'porque · no porque', tr: { ru: 'причина или её отрицание', en: 'a cause or its denial' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', 'Lo hago porque me <b>gusta</b>.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['yo', 'No lo hago porque me <b>guste</b>.']] }
            ] }
          ] },
          { type: 'triggers', heading: { ru: 'Союзы по смыслу', en: 'Conjunctions by meaning' }, items: [
            { num: '1', title: { ru: 'Цель', en: 'Purpose' }, sub: { ru: 'всегда subjuntivo', en: 'always subjunctive' },
              phrases: ['para que', 'a fin de que', 'con el objetivo de que'] },
            { num: '2', title: { ru: 'Условие', en: 'Condition' }, sub: { ru: 'всегда subjuntivo', en: 'always subjunctive' },
              phrases: ['con tal de que', 'a menos que', 'a no ser que', 'en caso de que', 'sin que'] },
            { num: '3', title: { ru: 'Причина', en: 'Cause' }, sub: { ru: 'indicativo', en: 'indicative' },
              phrases: ['porque', 'ya que', 'puesto que', 'dado que', 'como'] },
            { num: '4', title: { ru: 'Уступка', en: 'Concession' }, sub: { ru: 'факт — indicativo, гипотеза — subjuntivo', en: 'fact — indicative, hypothesis — subjunctive' },
              phrases: ['aunque', 'a pesar de que', 'por más que'] }
          ] },
          { type: 'examples', heading: { ru: 'Примеры', en: 'Examples' }, items: [
            { color: 'coral', es: 'Te dejo mi coche para que <b>vayas</b> al aeropuerto.', ru: 'Оставлю тебе машину, чтобы ты доехал до аэропорта.', en: 'I’ll leave you my car so you can get to the airport.' },
            { color: 'teal', es: 'Como no <b>llegabas</b>, me fui.', ru: 'Раз ты не приходил, я ушёл.', en: 'Since you weren’t coming, I left.' },
            { color: 'blue', es: 'Aunque <b>está</b> cansada, sigue trabajando.', ru: 'Хотя она устала, она продолжает работать.', en: 'Although she’s tired, she keeps working.' }
          ] },
          { type: 'tip', heading: { ru: 'Совет', en: 'Tip' }, title: { ru: 'Один вопрос', en: 'One question' }, body: {
            ru: ['Перед выбором спросите себя: <b>я утверждаю это как факт?</b> Да → indicativo. Нет (желаю, сомневаюсь, оцениваю, не знаю, ещё не случилось) → subjuntivo.'],
            en: ['Before choosing, ask yourself: <b>am I stating this as a fact?</b> Yes → indicative. No (I wish, doubt, evaluate, don’t know, it hasn’t happened yet) → subjunctive.'] } }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Мнение и чувство', en: 'Opinion and feeling' }, items: [
            { badge: 'I', color: 'purple', es: 'Estoy seguro de que <b>aprobarás</b>.', ru: 'Я уверен, что ты сдашь.', en: 'I’m sure you’ll pass.' },
            { badge: 'S', color: 'coral', es: 'No estoy seguro de que <b>aprobemos</b>.', ru: 'Я не уверен, что мы сдадим.', en: 'I’m not sure we’ll pass.' },
            { badge: 'S', color: 'coral', es: 'Es normal que <b>estés</b> nervioso antes de una entrevista.', ru: 'Нервничать перед собеседованием — нормально.', en: 'It’s normal for you to be nervous before an interview.' },
            { badge: 'I', color: 'blue', es: '¿No crees que <b>es</b> demasiado tarde?', ru: 'Тебе не кажется, что уже слишком поздно?', en: 'Don’t you think it’s too late?' },
            { badge: 'S', color: 'coral', es: 'Me alegra que <b>hayáis venido</b>.', ru: 'Я рад, что вы пришли.', en: 'I’m glad you’ve come.' }
          ] },
          { type: 'examples', heading: { ru: 'Время', en: 'Time' }, items: [
            { badge: 'S', color: 'coral', es: 'Cuando <b>tengáis</b> tiempo, llamadme.', ru: 'Когда у вас будет время, позвоните мне.', en: 'When you have time, give me a call.' },
            { badge: 'I', color: 'blue', es: 'Siempre que <b>viajo</b>, pierdo algo.', ru: 'Каждый раз, когда я путешествую, я что-нибудь теряю.', en: 'Whenever I travel, I lose something.' },
            { badge: 'S', color: 'coral', es: 'No me iré hasta que me <b>des</b> una respuesta.', ru: 'Я не уйду, пока ты не дашь мне ответ.', en: 'I won’t leave until you give me an answer.' },
            { badge: 'I', color: 'amber', es: 'Esperamos hasta que <b>salió</b> el sol.', ru: 'Мы ждали, пока не взошло солнце.', en: 'We waited until the sun came up.' }
          ] },
          { type: 'examples', heading: { ru: 'Относительные', en: 'Relative clauses' }, items: [
            { badge: 'S', color: 'coral', es: 'Haz lo que <b>quieras</b>.', ru: 'Делай что хочешь.', en: 'Do whatever you want.' },
            { badge: 'I', color: 'blue', es: 'Siempre hago lo que <b>quiero</b>.', ru: 'Я всегда делаю то, что хочу.', en: 'I always do what I want.' },
            { badge: 'S', color: 'coral', es: '¿Hay alguien aquí que <b>tenga</b> un cargador?', ru: 'Здесь есть у кого-нибудь зарядка?', en: 'Does anyone here have a charger?' },
            { badge: 'I', color: 'amber', es: 'Busco al médico que me <b>operó</b>.', ru: 'Я ищу врача, который меня оперировал.', en: 'I’m looking for the doctor who operated on me.' }
          ] },
          { type: 'examples', heading: { ru: 'Союзы', en: 'Conjunctions' }, items: [
            { badge: 'S', color: 'coral', es: 'No lo digo porque <b>esté</b> enfadado, sino porque es verdad.', ru: 'Я говорю это не потому, что злюсь, а потому, что это правда.', en: 'I’m not saying it because I’m angry, but because it’s true.' },
            { badge: 'I', color: 'blue', es: 'No voy a la fiesta porque <b>tengo</b> que trabajar.', ru: 'Я не пойду на вечеринку, потому что мне нужно работать.', en: 'I’m not going to the party because I have to work.' },
            { badge: 'S', color: 'coral', es: 'Aunque <b>llueva</b> mañana, iremos a la playa.', ru: 'Даже если завтра пойдёт дождь, мы поедем на пляж.', en: 'Even if it rains tomorrow, we’ll go to the beach.' },
            { badge: 'S', color: 'coral', es: 'Saldremos sin que los niños se <b>despierten</b>.', ru: 'Мы уйдём так, что дети не проснутся.', en: 'We’ll leave without the kids waking up.' }
          ] }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Creo que Juan ___ razón. (tener)',
        options: ['tiene', 'tenga', 'tuviera'], answer: 0,
        explain: { ru: 'Creo que — утверждение мнения, indicativo: tiene.', en: 'Creo que states an opinion — indicative: tiene.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'No creo que ___ tiempo para eso. (tener, nosotros)',
        options: ['tenemos', 'tengamos', 'teníamos'], answer: 1,
        explain: { ru: 'No creo que — отрицание мнения, subjuntivo: tengamos.', en: 'No creo que negates an opinion — subjunctive: tengamos.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Busco un piso que ___ terraza, pero todavía no he encontrado ninguno. (tener)',
        options: ['tiene', 'tendrá', 'tenga'], answer: 2,
        explain: { ru: 'Такой квартиры пока нет (no he encontrado ninguno) — subjuntivo: tenga.', en: 'No such flat has been found yet (no he encontrado ninguno) — subjunctive: tenga.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Tengo una vecina que ___ cinco idiomas. (hablar)',
        options: ['hable', 'habla', 'hablara'], answer: 1,
        explain: { ru: 'Соседка известна и существует — indicativo: habla.', en: 'The neighbour is known and exists — indicative: habla.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Cuando ___ a Madrid, te llamaré. (llegar, yo)',
        options: ['llego', 'llegaré', 'llegue'], answer: 2,
        explain: { ru: 'Будущее после cuando — subjuntivo: llegue. Futuro после cuando не ставят.', en: 'The future after cuando — subjunctive: llegue. The futuro is never used after cuando.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Cuando ___ a casa, siempre me ducho. (llegar, yo)',
        options: ['llego', 'llegue', 'llegaré'], answer: 0,
        explain: { ru: 'Привычное действие (siempre) — indicativo: llego.', en: 'A habit (siempre) — indicative: llego.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Me alegra mucho que ___ venido. (haber, tú)',
        options: ['has', 'hayas', 'habías'], answer: 1,
        explain: { ru: 'Чувство (me alegra que) — всегда subjuntivo, даже для факта: hayas venido.', en: 'A feeling (me alegra que) always takes the subjunctive, even for a fact: hayas venido.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Es evidente que el plan no ___. (funcionar)',
        options: ['funcione', 'funcionara', 'funciona'], answer: 2,
        explain: { ru: 'Es evidente que — уверенность, indicativo: funciona.', en: 'Es evidente que expresses certainty — indicative: funciona.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Es posible que mañana ___. (nevar)',
        options: ['nieve', 'nieva', 'nevará'], answer: 0,
        explain: { ru: 'Es posible que — возможность, subjuntivo: nieve.', en: 'Es posible que expresses possibility — subjunctive: nieve.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'En mi oficina no hay nadie que ___ ruso. (saber)',
        options: ['sabe', 'sepa', 'sabía'], answer: 1,
        explain: { ru: 'Такого человека нет (no hay nadie) — subjuntivo: sepa.', en: 'No such person exists (no hay nadie) — subjunctive: sepa.' } }
    ]
  }
]);
