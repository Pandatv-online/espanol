// B1 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('B1', [
  {
    id: 'b1-imperativo-pronombres', level: 'B1',
    title: { ru: 'Imperativo и местоимения', en: 'Imperativo and pronouns' },
    hero: {
      es: 'Imperativo <b>y</b> Pronombres',
      sub: { ru: 'Утвердительный и отрицательный императив, место местоимений и правила ударения — с нуля до автоматизма',
             en: 'Affirmative and negative commands, where pronouns go, and the accent rules — from zero to automatic' }
    },
    tabs: [
      {
        id: 'afirm', label: { ru: 'Afirm.', en: 'Affirm.' },
        blocks: [
          { type: 'text', body: {
            ru: ['Утвердительный императив — это просьбы, приказы и советы в положительной форме: «сделай», «купи», «садитесь».'],
            en: ['Affirmative commands are requests, orders and advice in the positive form: “do it”, “buy it”, “sit down”.'] } },
          { type: 'rules', items: [
            { color: 'blue', label: { ru: 'Своя форма', en: 'Own form' }, title: { ru: 'tú', en: 'tú' }, es: 'habla · come · vive',
              body: { ru: 'Берём форму <b>él / ella</b> в Presente de Indicativo (без -s): <i>él habla → ¡habla!</i>',
                      en: 'Take the <b>él / ella</b> form of the present indicative (no -s): <i>él habla → ¡habla!</i>' } },
            { color: 'amber', label: { ru: 'Из subjuntivo', en: 'From the subjunctive' }, title: { ru: 'usted · ustedes · nosotros', en: 'usted · ustedes · nosotros' }, es: 'hable · hablen · hablemos',
              body: { ru: 'Соответствующая форма <b>Subjuntivo Presente</b> — просто без «que».',
                      en: 'The matching <b>present subjunctive</b> form — simply without “que”.' } },
            { color: 'teal', label: { ru: 'Своя форма', en: 'Own form' }, title: { ru: 'vosotros', en: 'vosotros' }, es: 'hablar → hablad',
              body: { ru: 'Инфинитив, финальную <b>-r</b> меняем на <b>-d</b>: <i>comer → comed, vivir → vivid</i>.',
                      en: 'The infinitive with the final <b>-r</b> changed to <b>-d</b>: <i>comer → comed, vivir → vivid</i>.' } }
          ] },
          { type: 'conj', heading: { ru: 'Правильные глаголы', en: 'Regular verbs' }, verbs: [
            { inf: 'hablar', tr: { ru: '-ar · говорить', en: '-ar · to speak' }, variants: [
              { label: 'Afirmativo', color: 'blue', rows: [['tú', 'habl<b>a</b>'], ['usted', 'habl<b>e</b>'], ['nosotros', 'habl<b>emos</b>'], ['vosotros', 'habl<b>ad</b>'], ['ustedes', 'habl<b>en</b>']] },
              { label: 'Negativo', color: 'coral', rows: [['tú', 'no habl<b>es</b>'], ['usted', 'no habl<b>e</b>'], ['nosotros', 'no habl<b>emos</b>'], ['vosotros', 'no habl<b>éis</b>'], ['ustedes', 'no habl<b>en</b>']] }
            ] },
            { inf: 'comer', tr: { ru: '-er · есть', en: '-er · to eat' }, variants: [
              { label: 'Afirmativo', color: 'blue', rows: [['tú', 'com<b>e</b>'], ['usted', 'com<b>a</b>'], ['nosotros', 'com<b>amos</b>'], ['vosotros', 'com<b>ed</b>'], ['ustedes', 'com<b>an</b>']] },
              { label: 'Negativo', color: 'coral', rows: [['tú', 'no com<b>as</b>'], ['usted', 'no com<b>a</b>'], ['nosotros', 'no com<b>amos</b>'], ['vosotros', 'no com<b>áis</b>'], ['ustedes', 'no com<b>an</b>']] }
            ] },
            { inf: 'vivir', tr: { ru: '-ir · жить', en: '-ir · to live' }, variants: [
              { label: 'Afirmativo', color: 'blue', rows: [['tú', 'viv<b>e</b>'], ['usted', 'viv<b>a</b>'], ['nosotros', 'viv<b>amos</b>'], ['vosotros', 'viv<b>id</b>'], ['ustedes', 'viv<b>an</b>']] },
              { label: 'Negativo', color: 'coral', rows: [['tú', 'no viv<b>as</b>'], ['usted', 'no viv<b>a</b>'], ['nosotros', 'no viv<b>amos</b>'], ['vosotros', 'no viv<b>áis</b>'], ['ustedes', 'no viv<b>an</b>']] }
            ] }
          ] },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Важно:</b> «свои» формы есть только у <b>tú</b> и <b>vosotros</b>. Формы usted, ustedes, nosotros — это просто subjuntivo presente без «que».'],
            en: ['<b>Important:</b> only <b>tú</b> and <b>vosotros</b> have forms of their own. The usted, ustedes and nosotros forms are simply the present subjunctive without “que”.'] } },
          { type: 'table', heading: { ru: '8 неправильных форм tú (наизусть!)', en: 'Eight irregular tú forms (learn by heart!)' },
            head: ['infinitivo', 'tú', 'infinitivo', 'tú'],
            rows: [
              ['decir', 'di', 'salir', 'sal'],
              ['hacer', 'haz', 'ser', 'sé'],
              ['ir', 've', 'tener', 'ten'],
              ['poner', 'pon', 'venir', 'ven']
            ] },
          { type: 'tip', title: { ru: 'Мнемоника: Di Haz Ve Pon Sal Sé Ten Ven', en: 'Mnemonic: Di Haz Ve Pon Sal Sé Ten Ven' }, body: {
            ru: ['Проговорите как считалку — и все восемь форм запомнятся сразу.',
                 'Формы usted, ustedes, nosotros и vosotros у этих глаголов регулярные — по subjuntivo или с -d: <i>diga, haced, salgamos</i>.'],
            en: ['Say it like a counting rhyme and all eight forms will stick at once.',
                 'The usted, ustedes, nosotros and vosotros forms of these verbs are regular — from the subjunctive or with -d: <i>diga, haced, salgamos</i>.'] } },
          { type: 'table', heading: { ru: 'Изменение корня', en: 'Stem changes' },
            head: ['', 'tú', 'usted', 'nosotros', 'vosotros', 'ustedes'],
            rows: [
              ['cerrar (e→ie)', 'cierra', 'cierre', 'cerremos', 'cerrad', 'cierren'],
              ['volver (o→ue)', 'vuelve', 'vuelva', 'volvamos', 'volved', 'vuelvan'],
              ['pedir (e→i)', 'pide', 'pida', 'pidamos', 'pedid', 'pidan'],
              ['dormir (o→ue / u)', 'duerme', 'duerma', 'durmamos', 'dormid', 'duerman']
            ] },
          { type: 'text', color: 'blue', body: {
            ru: ['Корень меняется в <b>tú, usted и ustedes</b> — так же, как в indicativo и subjuntivo. В nosotros и vosotros у <i>cerrar</i> и <i>volver</i> корень не меняется; у -ir глаголов в nosotros — e→i, o→u: <i>pidamos, durmamos</i>.'],
            en: ['The stem changes in <b>tú, usted and ustedes</b> — just as in the indicative and subjunctive. In nosotros and vosotros <i>cerrar</i> and <i>volver</i> keep their stem; -ir verbs change e→i, o→u in nosotros: <i>pidamos, durmamos</i>.'] } },
          { type: 'examples', items: [
            { color: 'blue', es: '<b>Ven</b> aquí ahora mismo.', ru: 'Иди сюда сейчас же.', en: 'Come here right now.' },
            { color: 'blue', es: '<b>Haced</b> los deberes antes de cenar.', ru: 'Сделайте уроки до ужина. (vosotros)', en: 'Do your homework before dinner. (vosotros)' },
            { color: 'blue', es: '<b>Vuelva</b> usted mañana, por favor.', ru: 'Приходите завтра, пожалуйста.', en: 'Please come back tomorrow.' }
          ] }
        ]
      },
      {
        id: 'negat', label: { ru: 'Negat.', en: 'Negative' },
        blocks: [
          { type: 'rules', items: [
            { color: 'coral', label: { ru: 'Формула', en: 'Formula' }, title: { ru: 'Для всех лиц', en: 'For every person' }, es: 'no + subjuntivo',
              body: { ru: 'Без исключений, даже для tú. «Своих» форм у отрицательного императива нет — просто отрицание + subjuntivo presente.',
                      en: 'No exceptions, even for tú. Negative commands have no forms of their own — just the negation + present subjunctive.' } },
            { color: 'amber', label: { ru: 'Значит', en: 'So' }, title: { ru: 'tú ≠ tú', en: 'tú ≠ tú' }, es: 'habla → no hables',
              body: { ru: 'Форма tú в утвердительном и отрицательном императиве почти всегда <b>разная</b>: <i>come → no comas, ven → no vengas</i>.',
                      en: 'The tú form in affirmative and negative commands is almost always <b>different</b>: <i>come → no comas, ven → no vengas</i>.' } }
          ] },
          { type: 'table', heading: { ru: 'Отрицательный императив', en: 'Negative commands' },
            head: ['', 'hablar', 'comer', 'vivir'],
            rows: [
              ['tú', 'no hables', 'no comas', 'no vivas'],
              ['usted', 'no hable', 'no coma', 'no viva'],
              ['nosotros', 'no hablemos', 'no comamos', 'no vivamos'],
              ['vosotros', 'no habléis', 'no comáis', 'no viváis'],
              ['ustedes', 'no hablen', 'no coman', 'no vivan']
            ] },
          { type: 'text', color: 'blue', body: {
            ru: ['<b>Практика:</b> раз это subjuntivo, все неправильные основы subjuntivo автоматически переходят в отрицательный императив: <i>ser → no seas</i>, <i>ir → no vayas</i>, <i>tener → no tengas</i>, <i>saber → no sepas</i>.'],
            en: ['<b>In practice:</b> since this is the subjunctive, all irregular subjunctive stems carry over to negative commands automatically: <i>ser → no seas</i>, <i>ir → no vayas</i>, <i>tener → no tengas</i>, <i>saber → no sepas</i>.'] } },
          { type: 'conj', heading: { ru: 'Неправильные: да и нет', en: 'Irregular verbs: yes and no' }, verbs: [
            { inf: 'hacer', tr: { ru: 'делать', en: 'to do, make' }, variants: [
              { label: 'Afirmativo', color: 'blue', rows: [['tú', '<b>haz</b>'], ['usted', 'haga'], ['nosotros', 'hagamos'], ['vosotros', 'haced'], ['ustedes', 'hagan']] },
              { label: 'Negativo', color: 'coral', rows: [['tú', 'no <b>hagas</b>'], ['usted', 'no haga'], ['nosotros', 'no hagamos'], ['vosotros', 'no hagáis'], ['ustedes', 'no hagan']] }
            ] },
            { inf: 'ir', tr: { ru: 'идти', en: 'to go' }, variants: [
              { label: 'Afirmativo', color: 'blue', rows: [['tú', '<b>ve</b>'], ['usted', 'vaya'], ['nosotros', 'vamos'], ['vosotros', 'id'], ['ustedes', 'vayan']] },
              { label: 'Negativo', color: 'coral', rows: [['tú', 'no <b>vayas</b>'], ['usted', 'no vaya'], ['nosotros', 'no vayamos'], ['vosotros', 'no vayáis'], ['ustedes', 'no vayan']] }
            ] },
            { inf: 'ser', tr: { ru: 'быть', en: 'to be' }, variants: [
              { label: 'Afirmativo', color: 'blue', rows: [['tú', '<b>sé</b>'], ['usted', 'sea'], ['nosotros', 'seamos'], ['vosotros', 'sed'], ['ustedes', 'sean']] },
              { label: 'Negativo', color: 'coral', rows: [['tú', 'no <b>seas</b>'], ['usted', 'no sea'], ['nosotros', 'no seamos'], ['vosotros', 'no seáis'], ['ustedes', 'no sean']] }
            ] },
            { inf: 'tener', tr: { ru: 'иметь', en: 'to have' }, variants: [
              { label: 'Afirmativo', color: 'blue', rows: [['tú', '<b>ten</b>'], ['usted', 'tenga'], ['nosotros', 'tengamos'], ['vosotros', 'tened'], ['ustedes', 'tengan']] },
              { label: 'Negativo', color: 'coral', rows: [['tú', 'no <b>tengas</b>'], ['usted', 'no tenga'], ['nosotros', 'no tengamos'], ['vosotros', 'no tengáis'], ['ustedes', 'no tengan']] }
            ] },
            { inf: 'decir', tr: { ru: 'сказать', en: 'to say' }, variants: [
              { label: 'Afirmativo', color: 'blue', rows: [['tú', '<b>di</b>'], ['usted', 'diga'], ['nosotros', 'digamos'], ['vosotros', 'decid'], ['ustedes', 'digan']] },
              { label: 'Negativo', color: 'coral', rows: [['tú', 'no <b>digas</b>'], ['usted', 'no diga'], ['nosotros', 'no digamos'], ['vosotros', 'no digáis'], ['ustedes', 'no digan']] }
            ] }
          ] },
          { type: 'examples', items: [
            { color: 'coral', es: 'Córtate la melena. → <b>No te la cortes</b>.', ru: 'Подстриги волосы. → Не стриги их. (cortes — subjuntivo)', en: 'Cut your long hair. → Don’t cut it. (cortes is subjunctive)' },
            { color: 'coral', es: 'Cómprate una lavadora. → <b>No te la compres</b>.', ru: 'Купи себе стиральную машину. → Не покупай её себе. (compres — subjuntivo)', en: 'Buy yourself a washing machine. → Don’t buy it. (compres is subjunctive)' },
            { color: 'coral', es: 'No <b>tengas</b> miedo, no pasa nada.', ru: 'Не бойся, ничего страшного.', en: 'Don’t be afraid, it’s all right.' },
            { color: 'coral', es: 'No <b>abramos</b> la ventana, hace frío.', ru: 'Давайте не будем открывать окно, холодно.', en: 'Let’s not open the window, it’s cold.' },
            { color: 'coral', es: 'No <b>salgan</b> sin paraguas.', ru: 'Не выходите без зонта. (ustedes)', en: 'Don’t go out without an umbrella. (ustedes)' }
          ] }
        ]
      },
      {
        id: 'pron', label: { ru: 'Место', en: 'Position' },
        blocks: [
          { type: 'text', body: {
            ru: ['Самое частое место ошибок: местоимение «прилипает» к глаголу или стоит отдельно — в зависимости от типа императива.'],
            en: ['This is where most mistakes happen: the pronoun either sticks to the verb or stands on its own, depending on the type of command.'] } },
          { type: 'rules', items: [
            { color: 'blue', label: { ru: 'Afirmativo', en: 'Afirmativo' }, title: { ru: 'После глагола', en: 'After the verb' }, es: 'Cómprala. Dímelo. Sentaos.',
              body: { ru: 'Глагол + местоимение = <b>одно слово</b>.', en: 'Verb + pronoun = <b>one word</b>.' } },
            { color: 'coral', label: { ru: 'Negativo', en: 'Negativo' }, title: { ru: 'Перед глаголом', en: 'Before the verb' }, es: 'No la compres. No me lo digas.',
              body: { ru: '<b>no + местоимение + глагол</b>, всё пишется раздельно. <i>No os sentéis.</i>', en: '<b>no + pronoun + verb</b>, all written separately. <i>No os sentéis.</i>' } }
          ] },
          { type: 'conj', heading: { ru: 'Одна фраза — да и нет', en: 'One phrase — yes and no' }, verbs: [
            { inf: 'comprar + la', tr: { ru: 'купить её', en: 'to buy it' }, variants: [
              { label: 'Afirmativo', color: 'blue', rows: [['tú', 'Cómpra<b>la</b>.'], ['usted', 'Cómpre<b>la</b>.'], ['vosotros', 'Comprad<b>la</b>.']] },
              { label: 'Negativo', color: 'coral', rows: [['tú', 'No <b>la</b> compres.'], ['usted', 'No <b>la</b> compre.'], ['vosotros', 'No <b>la</b> compréis.']] }
            ] },
            { inf: 'decir + me + lo', tr: { ru: 'сказать мне это', en: 'to tell me' }, variants: [
              { label: 'Afirmativo', color: 'blue', rows: [['tú', 'Dí<b>melo</b>.'], ['usted', 'Díga<b>melo</b>.'], ['vosotros', 'Decíd<b>melo</b>.']] },
              { label: 'Negativo', color: 'coral', rows: [['tú', 'No <b>me lo</b> digas.'], ['usted', 'No <b>me lo</b> diga.'], ['vosotros', 'No <b>me lo</b> digáis.']] }
            ] }
          ] },
          { type: 'table', heading: { ru: 'Два местоимения: правило RID', en: 'Two pronouns: the RID rule' },
            head: [{ ru: 'Порядок', en: 'Order' }, { ru: 'Что это', en: 'What it is' }, { ru: 'Формы', en: 'Forms' }],
            rows: [
              ['1 · R', { ru: 'возвратное', en: 'reflexive' }, 'me, te, se, nos, os'],
              ['2 · I', { ru: 'косвенное (кому?)', en: 'indirect (to whom?)' }, 'me, te, se, nos, os'],
              ['3 · D', { ru: 'прямое (что?)', en: 'direct (what?)' }, 'lo, la, los, las']
            ] },
          { type: 'text', color: 'blue', body: {
            ru: ['Правило <b>RID</b> (Reflexivo → Indirecto → Directo): если местоимений два, сначала возвратное или косвенное (<i>me, te, se, nos, os</i>), потом прямое (<i>lo, la, los, las</i>). В отрицательной форме порядок тот же, но перед глаголом.'],
            en: ['The <b>RID</b> rule (Reflexive → Indirect → Direct): with two pronouns, the reflexive or indirect one (<i>me, te, se, nos, os</i>) comes first, then the direct one (<i>lo, la, los, las</i>). Negative commands keep the same order, but before the verb.'] } },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Золотое правило le / les → se:</b> перед <i>lo, la, los, las</i> местоимения le и les всегда превращаются в <i>se</i>. <i>Pídeselo</i> (не «pídelelo»), <i>dáselas</i> (не «dálelas»), никогда «lelo».'],
            en: ['<b>The golden rule le / les → se:</b> before <i>lo, la, los, las</i>, le and les always turn into <i>se</i>. <i>Pídeselo</i> (not “pídelelo”), <i>dáselas</i> (not “dálelas”), never “lelo”.'] } },
          { type: 'examples', heading: { ru: 'После или перед', en: 'After or before' }, items: [
            { color: 'blue', es: '<b>Cómprala</b>. → <b>No la compres</b>.', ru: 'Купи её. → Не покупай её.', en: 'Buy it. → Don’t buy it.' },
            { color: 'blue', es: '<b>Dímelo</b>. → <b>No me lo digas</b>.', ru: 'Скажи мне это. → Не говори мне этого.', en: 'Tell me. → Don’t tell me.' },
            { color: 'blue', es: '<b>Sentaos</b>. → <b>No os sentéis</b>.', ru: 'Садитесь. → Не садитесь. (vosotros)', en: 'Sit down. → Don’t sit down. (vosotros)' }
          ] },
          { type: 'examples', heading: { ru: 'Два местоимения', en: 'Two pronouns' }, items: [
            { badge: '2', color: 'blue', es: 'Dame el libro. → <b>Dámelo</b>.', ru: 'Дай мне книгу. → Дай мне её. (косвенное + прямое)', en: 'Give me the book. → Give it to me. (indirect + direct)' },
            { badge: 'se', color: 'amber', es: 'Dile la verdad a él. → <b>Díselo</b>.', ru: 'Скажи ему правду. → Скажи ему это. (le + lo → se lo)', en: 'Tell him the truth. → Tell it to him. (le + lo → se lo)' },
            { badge: '2', color: 'blue', es: 'Ponte el jersey. → <b>Póntelo</b>.', ru: 'Надень свитер. → Надень его. (te возвратное + lo прямое)', en: 'Put on your jumper. → Put it on. (reflexive te + direct lo)' },
            { badge: 'no', color: 'coral', es: '<b>No se lo digas</b>.', ru: 'Не говори ему этого. (тот же порядок, но перед глаголом)', en: 'Don’t tell him. (same order, but before the verb)' }
          ] }
        ]
      },
      {
        id: 'acento', label: { ru: 'Ударение', en: 'Stress' },
        blocks: [
          { type: 'text', body: {
            ru: ['Когда местоимение приклеивается к утвердительному императиву, слово удлиняется — и ударение часто нужно «спасать» тильдой.',
                 '<b>Логика:</b> слово на гласную, -n или -s по умолчанию ударяется на предпоследний слог. Когда мы приклеиваем местоимение, ударение глагола должно остаться на прежнем месте — если оно уже не предпоследнее, ставим тильду.'],
            en: ['When a pronoun is attached to an affirmative command, the word gets longer — and the stress often has to be “rescued” with a written accent.',
                 '<b>The logic:</b> a word ending in a vowel, -n or -s is stressed on the second-to-last syllable by default. When we attach a pronoun, the verb’s stress must stay where it was — if it is no longer second-to-last, we add a written accent.'] } },
          { type: 'rules', items: [
            { color: 'teal', label: { ru: 'Группа 1', en: 'Group 1' }, title: { ru: '1 местоимение + 1 слог', en: '1 pronoun + 1 syllable' }, es: 'dame · hazlo · ponte · dile',
              body: { ru: 'Односложная форма tú + одно местоимение — обычно <b>без тильды</b>.', en: 'A one-syllable tú form + one pronoun — usually <b>no accent</b>.' } },
            { color: 'amber', label: { ru: 'Группа 2', en: 'Group 2' }, title: { ru: '1 местоимение + 2 слога и больше', en: '1 pronoun + 2 or more syllables' }, es: 'cómpralo · escríbeme · dígalo',
              body: { ru: 'Форма из двух и больше слогов (<i>compra, escribe, diga…</i>) + местоимение — <b>с тильдой</b>.', en: 'A form of two or more syllables (<i>compra, escribe, diga…</i>) + a pronoun — <b>with an accent</b>.' } },
            { color: 'coral', label: { ru: 'Группа 3', en: 'Group 3' }, title: { ru: '2 местоимения', en: '2 pronouns' }, es: 'dámelo · díselo · póntelo',
              body: { ru: 'Тильда <b>почти всегда</b>, даже с односложной формой.', en: 'An accent <b>almost always</b>, even with a one-syllable form.' } }
          ] },
          { type: 'examples', heading: { ru: 'Группа 1: без тильды', en: 'Group 1: no accent' }, items: [
            { color: 'teal', es: 'da + me → <b>dame</b>', ru: 'дай мне', en: 'give me' },
            { color: 'teal', es: 'haz + lo → <b>hazlo</b>', ru: 'сделай это', en: 'do it' },
            { color: 'teal', es: 'pon + te → <b>ponte</b>', ru: 'надень (на себя)', en: 'put on (yourself)' },
            { color: 'teal', es: 'di + le → <b>dile</b>', ru: 'скажи ему', en: 'tell him' }
          ] },
          { type: 'examples', heading: { ru: 'Группа 2: с тильдой', en: 'Group 2: with an accent' }, items: [
            { color: 'amber', es: 'compra + lo → <b>cómpralo</b>', ru: 'купи это', en: 'buy it' },
            { color: 'amber', es: 'escribe + me → <b>escríbeme</b>', ru: 'напиши мне', en: 'write to me' },
            { color: 'amber', es: 'abre + la → <b>ábrela</b>', ru: 'открой её', en: 'open it' },
            { color: 'amber', es: 'diga + lo → <b>dígalo</b>', ru: 'скажите это (usted)', en: 'say it (usted)' },
            { color: 'amber', es: 'quita + los → <b>quítalos</b>', ru: 'убери их', en: 'take them away' }
          ] },
          { type: 'examples', heading: { ru: 'Группа 3: два местоимения', en: 'Group 3: two pronouns' }, items: [
            { color: 'coral', es: 'da + me + lo → <b>dámelo</b>', ru: 'дай мне это', en: 'give it to me' },
            { color: 'coral', es: 'di + se + lo → <b>díselo</b>', ru: 'скажи ему это', en: 'tell it to him' },
            { color: 'coral', es: 'pon + te + lo → <b>póntelo</b>', ru: 'надень это (на себя)', en: 'put it on' },
            { color: 'coral', es: 'compra + te + lo → <b>cómpratelo</b>', ru: 'купи это себе', en: 'buy it for yourself' }
          ] },
          { type: 'table', heading: { ru: 'Сводка: одно и два местоимения', en: 'Summary: one and two pronouns' },
            head: [{ ru: 'Форма', en: 'Form' }, { ru: '+ 1 местоимение', en: '+ 1 pronoun' }, { ru: '+ 2 местоимения', en: '+ 2 pronouns' }],
            rows: [
              ['da', 'dame', 'dámelo'],
              ['di', 'dile', 'díselo'],
              ['pon', 'ponte', 'póntelo'],
              ['haz', 'hazlo', 'házmelo'],
              ['compra', 'cómpralo', 'cómpratelo'],
              ['escribe', 'escríbeme', 'escríbemelo'],
              ['diga (usted)', 'dígalo', 'dígaselo'],
              ['haced (vosotros)', 'hacedlo', 'hacédmelo']
            ] },
          { type: 'text', color: 'blue', body: {
            ru: ['<b>Отрицательный императив проще:</b> местоимения стоят отдельно перед глаголом, а форма subjuntivo сохраняет обычное ударение — <i>no me lo digas, no te lo pongas, no se los des</i>.'],
            en: ['<b>Negative commands are easier:</b> the pronouns stand separately before the verb, and the subjunctive form keeps its usual stress — <i>no me lo digas, no te lo pongas, no se los des</i>.'] } }
        ]
      },
      {
        id: 'reflex', label: { ru: 'Refl.', en: 'Reflexive' },
        blocks: [
          { type: 'text', body: {
            ru: ['Возвратные глаголы (<i>levantarse, sentarse, irse…</i>) в утвердительном императиве теряют одну букву перед -nos и -os: в nosotros пропадает <b>-s</b>, в vosotros — <b>-d</b>.'],
            en: ['Reflexive verbs (<i>levantarse, sentarse, irse…</i>) lose one letter before -nos and -os in affirmative commands: nosotros drops the <b>-s</b>, vosotros drops the <b>-d</b>.'] } },
          { type: 'table', head: ['', 'regla', 'levantarse', 'sentarse'],
            rows: [
              ['tú', 'sin cambios', 'levántate', 'siéntate'],
              ['usted', 'sin cambios', 'levántese', 'siéntese'],
              ['nosotros', '-mos + nos → -monos', 'levantémonos', 'sentémonos'],
              ['vosotros', '-d + os → -os', 'levantaos', 'sentaos'],
              ['ustedes', 'sin cambios', 'levántense', 'siéntense']
            ] },
          { type: 'conj', verbs: [
            { inf: 'levantarse', tr: { ru: 'вставать', en: 'to get up' }, variants: [
              { label: 'Afirmativo', color: 'blue', rows: [['tú', 'levánta<b>te</b>'], ['usted', 'levánte<b>se</b>'], ['nosotros', 'levantémo<b>nos</b>'], ['vosotros', 'levanta<b>os</b>'], ['ustedes', 'levánten<b>se</b>']] },
              { label: 'Negativo', color: 'coral', rows: [['tú', 'no <b>te</b> levantes'], ['usted', 'no <b>se</b> levante'], ['nosotros', 'no <b>nos</b> levantemos'], ['vosotros', 'no <b>os</b> levantéis'], ['ustedes', 'no <b>se</b> levanten']] }
            ] },
            { inf: 'sentarse', tr: { ru: 'садиться', en: 'to sit down' }, variants: [
              { label: 'Afirmativo', color: 'blue', rows: [['tú', 'siénta<b>te</b>'], ['usted', 'siénte<b>se</b>'], ['nosotros', 'sentémo<b>nos</b>'], ['vosotros', 'senta<b>os</b>'], ['ustedes', 'siénten<b>se</b>']] },
              { label: 'Negativo', color: 'coral', rows: [['tú', 'no <b>te</b> sientes'], ['usted', 'no <b>se</b> siente'], ['nosotros', 'no <b>nos</b> sentemos'], ['vosotros', 'no <b>os</b> sentéis'], ['ustedes', 'no <b>se</b> sienten']] }
            ] },
            { inf: 'irse', tr: { ru: 'уходить · исключения', en: 'to leave · exceptions' }, variants: [
              { label: 'Afirmativo', color: 'blue', rows: [['tú', 'vete'], ['usted', 'váyase'], ['nosotros', '<b>vámonos</b>'], ['vosotros', '<b>idos</b>'], ['ustedes', 'váyanse']] },
              { label: 'Negativo', color: 'coral', rows: [['tú', 'no te vayas'], ['usted', 'no se vaya'], ['nosotros', 'no nos vayamos'], ['vosotros', 'no os vayáis'], ['ustedes', 'no se vayan']] }
            ] }
          ] },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Исключение 1 — irse:</b> в nosotros не «vayámonos», а разговорное <i>vámonos</i> (пойдём, пошли). Это единственный такой случай.',
                 '<b>Исключение 2 — irse:</b> в vosotros вместо ожидаемого «íos» особая форма <i>idos</i> — единственный случай, где -d не выпадает.'],
            en: ['<b>Exception 1 — irse:</b> nosotros uses the colloquial <i>vámonos</i> (let’s go), not “vayámonos”. It is the only case like this.',
                 '<b>Exception 2 — irse:</b> vosotros uses the special form <i>idos</i> instead of the expected “íos” — the only case where the -d stays.'] } },
          { type: 'text', color: 'teal', body: {
            ru: ['<b>Ударение сохраняется:</b> в nosotros после потери -s почти всегда нужна тильда — <i>levantémonos, sentémonos, vámonos</i>: слово стало длиннее, а ударение осталось на прежнем слоге. В отрицании местоимение, как обычно, стоит перед глаголом.'],
            en: ['<b>The stress stays put:</b> after losing the -s, the nosotros form almost always needs an accent — <i>levantémonos, sentémonos, vámonos</i>: the word got longer, but the stress stayed on the same syllable. In negative commands the pronoun goes before the verb as usual.'] } },
          { type: 'examples', items: [
            { color: 'blue', es: '<b>Levántate</b>. → <b>No te levantes</b>.', ru: 'Встань. → Не вставай.', en: 'Get up. → Don’t get up.' },
            { color: 'blue', es: '<b>Quedaos</b> con nosotros. → <b>No os quedéis</b> con ellos.', ru: 'Оставайтесь с нами. → Не оставайтесь с ними. (vosotros)', en: 'Stay with us. → Don’t stay with them. (vosotros)' },
            { color: 'blue', es: '¡<b>Vámonos</b>, que es tarde!', ru: 'Пошли, уже поздно!', en: 'Let’s go, it’s late!' },
            { color: 'blue', es: '<b>Pónganse</b> cómodos, por favor.', ru: 'Располагайтесь поудобнее, пожалуйста. (ustedes)', en: 'Make yourselves comfortable, please. (ustedes)' }
          ] }
        ]
      },
      {
        id: 'chuleta', label: { ru: 'Шпора', en: 'Cheat sheet' },
        blocks: [
          { type: 'examples', heading: { ru: 'Разбор: да → нет', en: 'Worked examples: yes → no' }, items: [
            { color: 'blue', es: '<b>Cómprate</b> una lavadora. → <b>No te la compres</b>.', ru: 'Купи себе стиральную машину. → Не покупай её себе.', en: 'Buy yourself a washing machine. → Don’t buy it.' },
            { color: 'blue', es: '<b>Pídele</b> las llaves a tu padre. → <b>No se las pidas</b>.', ru: 'Попроси у отца ключи. → Не проси их у него. (le → se, las = ключи)', en: 'Ask your father for the keys. → Don’t ask him for them. (le → se, las = the keys)' },
            { color: 'blue', es: '<b>Haz</b> mucho ruido. → <b>No hagas</b> mucho.', ru: 'Делай много шума. → Не делай много. (ruido местоимением не заменяется)', en: 'Make a lot of noise. → Don’t make much. (ruido is not replaced by a pronoun)' },
            { color: 'blue', es: '<b>Tira</b> la basura. → <b>No la tires</b>.', ru: 'Выброси мусор. → Не выбрасывай его.', en: 'Throw out the rubbish. → Don’t throw it out.' },
            { color: 'blue', es: '<b>Ponle</b> más sal a la salsa. → <b>No le pongas</b> más.', ru: 'Положи больше соли в соус. → Не клади больше. (le остаётся le: дальше нет lo / la / los / las)', en: 'Put more salt in the sauce. → Don’t put in any more. (le stays le: no lo / la / los / las follows)' },
            { color: 'blue', es: '<b>Quédate</b> con tus amigos. → <b>No te quedes</b> con ellos.', ru: 'Останься со своими друзьями. → Не оставайся с ними. (возвратное te нельзя терять)', en: 'Stay with your friends. → Don’t stay with them. (don’t drop the reflexive te)' },
            { color: 'blue', es: '<b>Ponte</b> este queso en la pasta. → <b>No te lo pongas</b>.', ru: 'Положи себе этот сыр в пасту. → Не клади его себе.', en: 'Put this cheese on your pasta. → Don’t put it on.' },
            { color: 'blue', es: '<b>Quítalos</b> de la mesa. → <b>No los quites</b> de ahí.', ru: 'Убери их со стола (ноги). → Не убирай их оттуда.', en: 'Take them off the table (your feet). → Don’t move them from there.' }
          ] },
          { type: 'table', heading: { ru: 'Всё на одном экране', en: 'Everything on one screen' },
            head: ['', { ru: 'Утвердительный', en: 'Affirmative' }, { ru: 'Отрицательный', en: 'Negative' }],
            rows: [
              ['tú', 'habla · come · vive', 'no hables · no comas'],
              ['usted · nosotros · ustedes', 'subjuntivo', 'no + subjuntivo'],
              ['vosotros', 'hablad · comed', 'no habléis · no comáis'],
              [{ ru: 'Местоимения', en: 'Pronouns' }, 'dímelo', 'no me lo digas'],
              [{ ru: 'Тильда', en: 'Written accent' }, { ru: 'часто нужна', en: 'often needed' }, { ru: 'не меняется', en: 'unchanged' }]
            ] },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Чеклист перед ответом:</b><br>1) Утвердительно или отрицательно? — выбираю форму глагола.<br>2) Есть ли у глагола возвратное <i>se</i> (<i>ponerse, quedarse…</i>)? — не забыть его как местоимение.<br>3) Есть ли прямое дополнение (что?) — заменяю на <i>lo, la, los, las</i>.<br>4) Есть ли косвенное (кому?) — <i>me, te, le→se, nos, os, les→se</i>, ставлю перед прямым.<br>5) Утвердительная форма — приклеиваю и проверяю тильду.'],
            en: ['<b>Checklist before you answer:</b><br>1) Affirmative or negative? — choose the verb form.<br>2) Is the verb reflexive (<i>ponerse, quedarse…</i>)? — keep its pronoun.<br>3) Is there a direct object (what?) — replace it with <i>lo, la, los, las</i>.<br>4) Is there an indirect object (to whom?) — <i>me, te, le→se, nos, os, les→se</i>, placed before the direct one.<br>5) Affirmative form — attach the pronouns and check the accent.'] } },
          { type: 'tip', title: { ru: 'Три формулы', en: 'Three formulas' }, body: {
            ru: ['<b>Di Haz Ve Pon Sal Sé Ten Ven</b> — восемь неправильных tú.',
                 '<b>RID</b> — возвратное → косвенное → прямое. <b>le / les + lo → se lo</b>, никогда «lelo».',
                 '<b>No</b> — всегда subjuntivo и местоимения перед глаголом.'],
            en: ['<b>Di Haz Ve Pon Sal Sé Ten Ven</b> — the eight irregular tú forms.',
                 '<b>RID</b> — reflexive → indirect → direct. <b>le / les + lo → se lo</b>, never “lelo”.',
                 '<b>No</b> — always the subjunctive, with the pronouns before the verb.'] } }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Утвердительный императив (tú)', en: 'Affirmative command (tú)' }, es: '___ (hacer) los deberes ahora.',
        options: ['Haz', 'Hace', 'Hagas'], answer: 0,
        explain: { ru: '<i>Hacer</i> — одна из 8 неправильных форм tú: <i>haz</i>.', en: '<i>Hacer</i> is one of the eight irregular tú forms: <i>haz</i>.' } },
      { prompt: { ru: 'Отрицательный императив (tú)', en: 'Negative command (tú)' }, es: 'No ___ (hablar) tan alto.',
        options: ['hables', 'habla', 'hablas'], answer: 0,
        explain: { ru: 'Отрицательный императив — всегда <b>no + subjuntivo</b>: <i>no hables</i>.', en: 'A negative command is always <b>no + subjunctive</b>: <i>no hables</i>.' } },
      { prompt: { ru: 'Замените дополнения местоимениями', en: 'Replace the objects with pronouns' }, es: 'Dale el libro a Juan. → ___',
        options: ['Dáselo.', 'Dálelo.', 'Dalose.'], answer: 0,
        explain: { ru: 'Перед <i>lo</i> местоимение <i>le</i> превращается в <i>se</i>; два местоимения — тильда: <i>dáselo</i>.', en: 'Before <i>lo</i>, <i>le</i> turns into <i>se</i>; two pronouns need an accent: <i>dáselo</i>.' } },
      { prompt: { ru: 'Сделайте отрицание', en: 'Make it negative' }, es: 'Cómpralo. → ___',
        options: ['No lo compres.', 'No cómpralo.', 'No compreslo.'], answer: 0,
        explain: { ru: 'В отрицании местоимение стоит перед глаголом, а глагол — в subjuntivo.', en: 'In negative commands the pronoun goes before the verb, and the verb is subjunctive.' } },
      { prompt: { ru: 'Где нужна тильда?', en: 'Which spelling is correct?' },
        options: ['escríbeme', 'escribeme', 'escribéme'], answer: 0,
        explain: { ru: '<i>Escribe</i> — два слога и больше; после присоединения <i>me</i> ударение остаётся на «i», поэтому пишем тильду.', en: '<i>Escribe</i> has more than one syllable; after adding <i>me</i> the stress stays on the “i”, so it needs an accent.' } },
      { prompt: { ru: 'Утвердительный императив (nosotros)', en: 'Affirmative command (nosotros)' }, es: '___ (sentarse) aquí.',
        options: ['Sentémonos', 'Sentemosnos', 'Sentamonos'], answer: 0,
        explain: { ru: 'Перед <i>-nos</i> пропадает <b>-s</b>: <i>sentemos + nos → sentémonos</i>, с тильдой.', en: 'Before <i>-nos</i> the <b>-s</b> drops: <i>sentemos + nos → sentémonos</i>, with an accent.' } },
      { prompt: { ru: 'Утвердительный императив (vosotros)', en: 'Affirmative command (vosotros)' }, es: '¡___ (irse) ya!',
        options: ['Idos', 'Íos', 'Idós'], answer: 0,
        explain: { ru: '<i>Irse</i> — исключение: в vosotros форма <i>idos</i>, -d не выпадает.', en: '<i>Irse</i> is an exception: the vosotros form is <i>idos</i> and the -d stays.' } },
      { prompt: { ru: 'Утвердительный императив (usted)', en: 'Affirmative command (usted)' }, es: '___ (cerrar) la puerta, por favor.',
        options: ['Cierre', 'Cierra', 'Cerre'], answer: 0,
        explain: { ru: 'Для usted берём subjuntivo: <i>cierre</i>; корень меняется e→ie.', en: 'usted takes the subjunctive: <i>cierre</i>; the stem changes e→ie.' } },
      { prompt: { ru: 'Сделайте отрицание', en: 'Make it negative' }, es: 'Ponte el abrigo. → ___',
        options: ['No te lo pongas.', 'No pontelo.', 'No lo te pongas.'], answer: 0,
        explain: { ru: 'Порядок: возвратное <i>te</i>, потом прямое <i>lo</i>, оба перед глаголом в subjuntivo.', en: 'Order: reflexive <i>te</i>, then direct <i>lo</i>, both before the subjunctive verb.' } },
      { prompt: { ru: 'Отрицательный императив (tú)', en: 'Negative command (tú)' }, es: 'No ___ (ir) sola por la noche.',
        options: ['vayas', 've', 'vas'], answer: 0,
        explain: { ru: 'Неправильная основа subjuntivo <i>vay-</i> переходит в отрицательный императив: <i>no vayas</i>. <i>Ve</i> — только утвердительный.', en: 'The irregular subjunctive stem <i>vay-</i> carries over: <i>no vayas</i>. <i>Ve</i> is affirmative only.' } }
    ]
  },
  {
    id: 'b1-subjuntivo-presente', level: 'B1',
    title: { ru: 'Subjuntivo presente', en: 'Present subjunctive' },
    hero: {
      es: 'Subjuntivo <b>Presente</b>',
      sub: { ru: 'Полное пособие: когда используется subjuntivo, фразы-триггеры, спряжение и неправильные формы',
             en: 'A complete guide: when to use the subjunctive, trigger phrases, conjugation and irregular forms' }
    },
    tabs: [
      {
        id: 'when', label: { ru: 'Когда', en: 'When' },
        blocks: [
          { type: 'rules', items: [
            { color: 'blue', label: { ru: 'Modo', en: 'Modo' }, title: { ru: 'Indicativo — факт', en: 'Indicativo — fact' }, es: 'Sé que… · Es verdad que… · Creo que…',
              body: { ru: 'Говорим о том, что реально, объективно, <b>известно точно</b>.', en: 'We talk about what is real, objective and <b>known for sure</b>.' } },
            { color: 'amber', label: { ru: 'Modo', en: 'Modo' }, title: { ru: 'Subjuntivo — отношение', en: 'Subjuntivo — attitude' }, es: 'Quiero que… · Ojalá… · Para que…',
              body: { ru: 'Говорим не о факте, а о <b>желании, эмоции, сомнении, оценке</b> или ещё не свершившемся действии.', en: 'We talk not about a fact but about a <b>wish, emotion, doubt or evaluation</b>, or an action that has not happened yet.' } }
          ] },
          { type: 'text', color: 'blue', body: {
            ru: ['<b>Главная формула:</b> [глагол 1 в indicativo] + <b>que</b> + [глагол 2 в subjuntivo] — и только если подлежащие в двух частях <b>разные</b>. Если подлежащее одно и то же — инфинитив, а не subjuntivo.'],
            en: ['<b>The main formula:</b> [verb 1 in the indicative] + <b>que</b> + [verb 2 in the subjunctive] — and only when the two parts have <b>different</b> subjects. With the same subject, use the infinitive instead.'] } },
          { type: 'conj', verbs: [
            { inf: 'querer · esperar · preferir', tr: { ru: 'один субъект или два?', en: 'one subject or two?' }, variants: [
              { label: { ru: 'один субъект', en: 'same subject' }, color: 'blue', rows: [['yo → yo', 'Quiero <b>salir</b>.'], ['yo → yo', 'Espero <b>llegar</b> pronto.'], ['yo → yo', 'Prefiero <b>quedarme</b>.']] },
              { label: { ru: 'два субъекта', en: 'two subjects' }, color: 'amber', rows: [['yo → tú', 'Quiero que <b>salgas</b>.'], ['yo → tú', 'Espero que <b>llegues</b> pronto.'], ['yo → tú', 'Prefiero que <b>te quedes</b>.']] }
            ] }
          ] },
          { type: 'examples', items: [
            { badge: '1', color: 'blue', es: 'Quiero <b>salir</b>.', ru: 'Я хочу выйти. (подлежащее одно — инфинитив)', en: 'I want to go out. (same subject — infinitive)' },
            { badge: '2', color: 'amber', es: 'Quiero que <b>salgas</b>.', ru: 'Я хочу, чтобы ты вышел. (подлежащие разные — subjuntivo)', en: 'I want you to go out. (different subjects — subjunctive)' }
          ] },
          { type: 'triggers', heading: { ru: 'WEIRDO: шесть случаев', en: 'WEIRDO: six cases' }, items: [
            { num: 'W', color: 'blue', title: { ru: 'Желание, воля', en: 'Wishes, will' }, sub: { ru: 'deseo, voluntad', en: 'deseo, voluntad' },
              phrases: ['querer que', 'esperar que', 'desear que', 'necesitar que', 'preferir que'],
              ex: { es: 'Quiero que <b>vengas</b> a la fiesta.', ru: 'Хочу, чтобы ты пришёл на вечеринку.', en: 'I want you to come to the party.' } },
            { num: 'E', color: 'coral', title: { ru: 'Эмоции', en: 'Emotions' }, sub: { ru: 'emoción, sentimiento', en: 'emoción, sentimiento' },
              phrases: ['me alegra que', 'siento que', 'temo que', 'me sorprende que', 'es una pena que', 'me molesta que'],
              ex: { es: 'Me alegra que <b>estés</b> aquí.', ru: 'Я рад, что ты здесь.', en: 'I’m glad you’re here.' } },
            { num: 'I', color: 'amber', title: { ru: 'Безличные оценки', en: 'Impersonal evaluations' }, sub: { ru: 'expresiones impersonales', en: 'expresiones impersonales' },
              phrases: ['es importante que', 'es necesario que', 'es posible que', 'es mejor que', 'es raro que', 'es normal que', 'más vale que'],
              body: { ru: '<b>Но:</b> <i>es verdad / es cierto / es obvio que</i> + indicativo — это факты!', en: '<b>But:</b> <i>es verdad / es cierto / es obvio que</i> + indicative — those are facts!' },
              ex: { es: 'Es importante que <b>estudies</b> cada día.', ru: 'Важно, чтобы ты занимался каждый день.', en: 'It’s important that you study every day.' } },
            { num: 'R', color: 'teal', title: { ru: 'Просьбы, советы, приказы', en: 'Requests, advice, orders' }, sub: { ru: 'petición, consejo, mandato', en: 'petición, consejo, mandato' },
              phrases: ['pedir que', 'recomendar que', 'sugerir que', 'aconsejar que', 'prohibir que', 'permitir que', 'exigir que'],
              ex: { es: 'Te recomiendo que <b>descanses</b> más.', ru: 'Советую тебе больше отдыхать.', en: 'I recommend that you rest more.' } },
            { num: 'D', color: 'purple', title: { ru: 'Сомнение, отрицание', en: 'Doubt, denial' }, sub: { ru: 'duda, negación', en: 'duda, negación' },
              phrases: ['dudar que', 'no creer que', 'no pensar que', 'no estar seguro de que', 'no es verdad que'],
              ex: { es: 'No creo que <b>tenga</b> razón.', ru: 'Не думаю, что он прав.', en: 'I don’t think he’s right.' } },
            { num: 'O', color: 'amber', title: { ru: 'Ojalá', en: 'Ojalá' }, sub: { ru: 'как бы хотелось, лишь бы', en: 'if only, I hope' },
              phrases: ['ojalá', 'ojalá que'],
              body: { ru: '«Que» после <i>ojalá</i> необязательно — оба варианта верны.', en: 'The “que” after <i>ojalá</i> is optional — both are correct.' },
              ex: { es: 'Ojalá <b>haga</b> buen tiempo mañana.', ru: 'Хоть бы завтра была хорошая погода.', en: 'I hope the weather is good tomorrow.' } }
          ] },
          { type: 'triggers', heading: { ru: 'И ещё два случая: союзы', en: 'Two more cases: conjunctions' }, items: [
            { num: 'P', color: 'blue', title: { ru: 'Цель, условие, уступка', en: 'Purpose, condition, concession' }, sub: { ru: 'conjunciones', en: 'conjunciones' },
              phrases: ['para que', 'a fin de que', 'antes de que', 'sin que', 'con tal de que', 'a menos que', 'en caso de que', 'aunque'],
              body: { ru: '<i>Aunque</i> + subjuntivo — если факт не подтверждён, это гипотеза («хотя бы даже»); <i>aunque</i> + indicativo — если факт известен.', en: '<i>Aunque</i> + subjunctive — when the fact is not confirmed, a hypothesis (“even if”); <i>aunque</i> + indicative — when the fact is known.' },
              ex: { es: 'Te lo explico para que lo <b>entiendas</b>.', ru: 'Объясняю тебе, чтобы ты это понял.', en: 'I’m explaining it so that you understand.' } },
            { num: 'T', color: 'coral', title: { ru: 'Время: действие в будущем', en: 'Time: a future action' }, sub: { ru: 'tiempo + acción futura', en: 'tiempo + acción futura' },
              phrases: ['cuando', 'en cuanto', 'tan pronto como', 'hasta que', 'mientras', 'después de que'],
              body: { ru: 'Если действие привычное, повторяющееся — indicativo: <i>Cuando llego, ceno</i> (когда я прихожу — обычно — ужинаю).', en: 'If the action is habitual or repeated, use the indicative: <i>Cuando llego, ceno</i> (when I get home — usually — I have dinner).' },
              ex: { es: 'Cuando <b>llegues</b>, cenaremos.', ru: 'Когда ты придёшь, поужинаем. (ещё не случилось)', en: 'When you arrive, we’ll have dinner. (it hasn’t happened yet)' } }
          ] },
          { type: 'tip', title: { ru: 'WEIRDO', en: 'WEIRDO' }, body: {
            ru: ['<b>W</b>ishes — желание · <b>E</b>motions — эмоции · <b>I</b>mpersonal — безличные оценки · <b>R</b>ecommendations — просьбы и советы · <b>D</b>oubt — сомнение · <b>O</b>jalá.',
                 'Плюс союзы цели (<i>para que</i>) и времени о будущем (<i>cuando</i>).'],
            en: ['<b>W</b>ishes · <b>E</b>motions · <b>I</b>mpersonal expressions · <b>R</b>ecommendations · <b>D</b>oubt · <b>O</b>jalá.',
                 'Plus conjunctions of purpose (<i>para que</i>) and of time about the future (<i>cuando</i>).'] } }
        ]
      },
      {
        id: 'phrases', label: { ru: 'Фразы', en: 'Phrases' },
        blocks: [
          { type: 'text', body: {
            ru: ['После этих фраз почти всегда идёт subjuntivo — они сгруппированы по смыслу для быстрого запоминания.'],
            en: ['These phrases are almost always followed by the subjunctive — they are grouped by meaning so you can memorise them quickly.'] } },
          { type: 'markers', heading: { ru: 'Фразы-триггеры', en: 'Trigger phrases' }, groups: [
            { color: 'blue', title: { ru: 'Желание, просьба', en: 'Wish, request' },
              tags: ['quiero que', 'espero que', 'deseo que', 'necesito que', 'prefiero que', 'pido que', 'exijo que', 'insisto en que'] },
            { color: 'coral', title: { ru: 'Эмоции', en: 'Emotions' },
              tags: ['me alegra que', 'siento que', 'temo que', 'me sorprende que', 'es una pena que', 'me da miedo que', 'me molesta que', 'qué bueno que'] },
            { color: 'purple', title: { ru: 'Сомнение, отрицание', en: 'Doubt, denial' },
              tags: ['dudo que', 'no creo que', 'no pienso que', 'no es verdad que', 'no está claro que', 'no es seguro que', 'es imposible que'] },
            { color: 'amber', title: { ru: 'Безличные: оценка, возможность', en: 'Impersonal: evaluation, possibility' },
              tags: ['es importante que', 'es necesario que', 'es posible que', 'es probable que', 'es mejor que', 'es raro que', 'es una lástima que', 'puede que', 'ojalá (que)'] }
          ] },
          { type: 'markers', heading: { ru: 'Союзы', en: 'Conjunctions' }, groups: [
            { color: 'blue', title: { ru: 'Цель, условие', en: 'Purpose, condition' },
              tags: ['para que', 'a fin de que', 'sin que', 'con tal de que', 'a menos que', 'en caso de que', 'a no ser que'] },
            { color: 'coral', title: { ru: 'Время (будущее), уступка', en: 'Time (future), concession' },
              tags: ['cuando', 'en cuanto', 'tan pronto como', 'hasta que', 'antes de que', 'mientras', 'aunque', 'por más que'] }
          ] },
          { type: 'text', color: 'teal', body: {
            ru: ['<b>Совет для экзамена:</b> учите фразы группами, а не по одной — на B1 обычно проверяют узнавание триггера и правильное спряжение после него.'],
            en: ['<b>Exam tip:</b> learn the phrases in groups, not one by one — at B1 you are usually tested on spotting the trigger and conjugating correctly after it.'] } },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Ловушка:</b> глаголы мнения и уверенности в утвердительной форме (<i>creo, pienso, es verdad, es seguro, sé que</i>) требуют <b>indicativo</b>. Subjuntivo появляется, только когда их отрицают: <i>no creo que, no es verdad que</i>.'],
            en: ['<b>Trap:</b> verbs of opinion and certainty in the affirmative (<i>creo, pienso, es verdad, es seguro, sé que</i>) take the <b>indicative</b>. The subjunctive appears only when they are negated: <i>no creo que, no es verdad que</i>.'] } },
          { type: 'conj', heading: { ru: 'Одна фраза — два наклонения', en: 'One phrase, two moods' }, verbs: [
            { inf: 'creer que', tr: { ru: 'уверенность или сомнение', en: 'certainty or doubt' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', 'Creo que <b>viene</b>.'], ['nosotros', 'Pensamos que <b>es</b> fácil.']] },
              { label: 'Subjuntivo', color: 'amber', rows: [['yo', 'No creo que <b>venga</b>.'], ['nosotros', 'No pensamos que <b>sea</b> fácil.']] }
            ] },
            { inf: 'es … que', tr: { ru: 'факт или оценка', en: 'fact or evaluation' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['verdad', 'Es verdad que <b>llueve</b> mucho.'], ['obvio', 'Es obvio que <b>está</b> cansado.']] },
              { label: 'Subjuntivo', color: 'amber', rows: [['posible', 'Es posible que <b>llueva</b>.'], ['raro', 'Es raro que <b>esté</b> cansado.']] }
            ] },
            { inf: 'cuando', tr: { ru: 'привычка или будущее', en: 'habit or future' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['hábito', 'Cuando <b>llego</b>, ceno.']] },
              { label: 'Subjuntivo', color: 'amber', rows: [['futuro', 'Cuando <b>llegue</b>, cenaré.']] }
            ] },
            { inf: 'aunque', tr: { ru: 'известный факт или гипотеза', en: 'known fact or hypothesis' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['hecho', 'Aunque <b>llueve</b>, salgo.']] },
              { label: 'Subjuntivo', color: 'amber', rows: [['hipótesis', 'Aunque <b>llueva</b>, saldré.']] }
            ] }
          ] },
          { type: 'examples', items: [
            { color: 'amber', es: 'Necesito que me <b>ayudéis</b> con la mudanza.', ru: 'Мне нужно, чтобы вы помогли мне с переездом.', en: 'I need you to help me with the move.' },
            { color: 'amber', es: 'Siento que no <b>puedas</b> venir.', ru: 'Жаль, что ты не можешь прийти.', en: 'I’m sorry you can’t come.' },
            { color: 'amber', es: 'Dudo que <b>lleguemos</b> a tiempo.', ru: 'Сомневаюсь, что мы успеем.', en: 'I doubt we’ll make it on time.' },
            { color: 'amber', es: 'Es mejor que <b>reservéis</b> mesa.', ru: 'Лучше вам забронировать столик.', en: 'You’d better book a table.' },
            { color: 'amber', es: 'Mis padres no permiten que <b>salga</b> hasta tan tarde.', ru: 'Родители не разрешают мне гулять так поздно.', en: 'My parents don’t let me stay out so late.' },
            { color: 'amber', es: 'Iremos a la playa a menos que <b>llueva</b>.', ru: 'Поедем на пляж, если только не пойдёт дождь.', en: 'We’ll go to the beach unless it rains.' }
          ] }
        ]
      },
      {
        id: 'conj', label: { ru: 'Спряжение', en: 'Conjugation' },
        blocks: [
          { type: 'text', color: 'blue', body: {
            ru: ['<b>Как образуется:</b> берём форму <b>yo</b> в Presente de Indicativo, убираем <b>-o</b> и добавляем «противоположные» окончания: глаголы на <b>-ar</b> получают окончания на <b>-e</b>, а глаголы на <b>-er / -ir</b> — на <b>-a</b>.'],
            en: ['<b>How it is formed:</b> take the <b>yo</b> form of the present indicative, drop the <b>-o</b> and add the “opposite” endings: <b>-ar</b> verbs get endings in <b>-e</b>, <b>-er / -ir</b> verbs get endings in <b>-a</b>.'] } },
          { type: 'conj', verbs: [
            { inf: 'hablar', tr: { ru: '-ar → -e · говорить', en: '-ar → -e · to speak' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', 'habl<b>o</b>'], ['tú', 'habl<b>as</b>'], ['él / ella', 'habl<b>a</b>'], ['nosotros', 'habl<b>amos</b>'], ['vosotros', 'habl<b>áis</b>'], ['ellos', 'habl<b>an</b>']] },
              { label: 'Subjuntivo', color: 'amber', rows: [['yo', 'habl<b>e</b>'], ['tú', 'habl<b>es</b>'], ['él / ella', 'habl<b>e</b>'], ['nosotros', 'habl<b>emos</b>'], ['vosotros', 'habl<b>éis</b>'], ['ellos', 'habl<b>en</b>']] }
            ] },
            { inf: 'comer', tr: { ru: '-er → -a · есть', en: '-er → -a · to eat' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', 'com<b>o</b>'], ['tú', 'com<b>es</b>'], ['él / ella', 'com<b>e</b>'], ['nosotros', 'com<b>emos</b>'], ['vosotros', 'com<b>éis</b>'], ['ellos', 'com<b>en</b>']] },
              { label: 'Subjuntivo', color: 'amber', rows: [['yo', 'com<b>a</b>'], ['tú', 'com<b>as</b>'], ['él / ella', 'com<b>a</b>'], ['nosotros', 'com<b>amos</b>'], ['vosotros', 'com<b>áis</b>'], ['ellos', 'com<b>an</b>']] }
            ] },
            { inf: 'vivir', tr: { ru: '-ir → -a · жить', en: '-ir → -a · to live' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', 'viv<b>o</b>'], ['tú', 'viv<b>es</b>'], ['él / ella', 'viv<b>e</b>'], ['nosotros', 'viv<b>imos</b>'], ['vosotros', 'viv<b>ís</b>'], ['ellos', 'viv<b>en</b>']] },
              { label: 'Subjuntivo', color: 'amber', rows: [['yo', 'viv<b>a</b>'], ['tú', 'viv<b>as</b>'], ['él / ella', 'viv<b>a</b>'], ['nosotros', 'viv<b>amos</b>'], ['vosotros', 'viv<b>áis</b>'], ['ellos', 'viv<b>an</b>']] }
            ] }
          ] },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Запомнить:</b> у -er и -ir глаголов в subjuntivo окончания совпадают — нужно выучить только один набор для обеих групп.'],
            en: ['<b>Remember:</b> -er and -ir verbs share the same subjunctive endings — you only need to learn one set for both groups.'] } },
          { type: 'table', heading: { ru: 'Все три группы рядом', en: 'All three groups side by side' },
            head: ['', 'hablar', 'comer', 'vivir'],
            rows: [
              ['yo', 'hable', 'coma', 'viva'],
              ['tú', 'hables', 'comas', 'vivas'],
              ['él / ella', 'hable', 'coma', 'viva'],
              ['nosotros', 'hablemos', 'comamos', 'vivamos'],
              ['vosotros', 'habléis', 'comáis', 'viváis'],
              ['ellos', 'hablen', 'coman', 'vivan']
            ] },
          { type: 'table', heading: { ru: 'Орфографические изменения (чтобы сохранить звук)', en: 'Spelling changes (to keep the sound)' },
            head: ['terminación', 'cambio', 'ejemplo'],
            rows: [
              ['-car', 'c → qu', 'sacar → saque, saques…'],
              ['-gar', 'g → gu', 'pagar → pague, pagues…'],
              ['-zar', 'z → c', 'empezar → empiece, empieces…'],
              ['-ger / -gir', 'g → j', 'coger → coja; dirigir → dirija'],
              ['-guir', 'gu → g', 'seguir → siga, sigas…']
            ] },
          { type: 'examples', items: [
            { color: 'amber', es: 'Espero que <b>habléis</b> con el profesor.', ru: 'Надеюсь, вы поговорите с преподавателем.', en: 'I hope you’ll talk to the teacher.' },
            { color: 'amber', es: 'El médico quiere que <b>coma</b> menos sal.', ru: 'Врач хочет, чтобы я ел меньше соли.', en: 'The doctor wants me to eat less salt.' },
            { color: 'amber', es: 'Ojalá <b>vivamos</b> cerca algún día.', ru: 'Хорошо бы нам когда-нибудь жить рядом.', en: 'I hope we live near each other one day.' },
            { color: 'amber', es: 'Es necesario que <b>paguen</b> antes del lunes.', ru: 'Нужно, чтобы они заплатили до понедельника. (g → gu)', en: 'They need to pay before Monday. (g → gu)' },
            { color: 'amber', es: 'No es normal que <b>empieces</b> a trabajar tan temprano.', ru: 'Это ненормально, что ты начинаешь работать так рано. (z → c)', en: 'It isn’t normal for you to start work so early. (z → c)' }
          ] }
        ]
      },
      {
        id: 'irreg', label: { ru: 'Неправильные', en: 'Irregular' },
        blocks: [
          { type: 'table', heading: { ru: 'Полностью неправильные', en: 'Fully irregular verbs' },
            head: ['', 'yo', 'tú', 'él / ella', 'nosotros', 'vosotros', 'ellos'],
            rows: [
              ['ser', 'sea', 'seas', 'sea', 'seamos', 'seáis', 'sean'],
              ['estar', 'esté', 'estés', 'esté', 'estemos', 'estéis', 'estén'],
              ['ir', 'vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan'],
              ['haber', 'haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'],
              ['saber', 'sepa', 'sepas', 'sepa', 'sepamos', 'sepáis', 'sepan'],
              ['dar', 'dé', 'des', 'dé', 'demos', 'deis', 'den']
            ] },
          { type: 'tip', title: { ru: 'Мнемоника SEDHAVI', en: 'Mnemonic: SEDHAVI' }, body: {
            ru: ['Их нужно просто выучить наизусть. <b>SEDHAVI</b> — Ser, Estar, Dar, Haber, Ir (плюс saber): самые частые исключения, встречаются почти в каждом экзамене. <i>Haber</i> здесь — «есть, иметься»: <i>haya</i>.'],
            en: ['These simply have to be memorised. <b>SEDHAVI</b> — Ser, Estar, Dar, Haber, Ir (plus saber): the most common exceptions, found in almost every exam. <i>Haber</i> here means “there is / there are”: <i>haya</i>.'] } },
          { type: 'text', color: 'blue', body: {
            ru: ['<b>Неправильная форма yo:</b> если yo в Presente de Indicativo неправильная (<b>-go, -zco…</b>), эта же основа используется во всех лицах subjuntivo — исключений внутри уже нет. Переключайте indicativo / subjuntivo.'],
            en: ['<b>Irregular yo form:</b> if the yo form of the present indicative is irregular (<b>-go, -zco…</b>), the same stem is used for every person of the subjunctive — no further exceptions inside. Switch between indicativo and subjuntivo.'] } },
          { type: 'table', head: ['infinitivo', 'yo (indicativo)', 'raíz', 'subjuntivo (yo)'],
            rows: [
              ['tener', 'tengo', 'teng-', 'tenga'],
              ['poner', 'pongo', 'pong-', 'ponga'],
              ['salir', 'salgo', 'salg-', 'salga'],
              ['venir', 'vengo', 'veng-', 'venga'],
              ['decir', 'digo', 'dig-', 'diga'],
              ['hacer', 'hago', 'hag-', 'haga'],
              ['conocer', 'conozco', 'conozc-', 'conozca'],
              ['traer', 'traigo', 'traig-', 'traiga'],
              ['oír', 'oigo', 'oig-', 'oiga']
            ] },
          { type: 'conj', verbs: [
            { inf: 'tener', tr: { ru: 'иметь', en: 'to have' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', '<b>teng</b>o'], ['tú', 'tienes'], ['él / ella', 'tiene'], ['nosotros', 'tenemos'], ['vosotros', 'tenéis'], ['ellos', 'tienen']] },
              { label: 'Subjuntivo', color: 'amber', rows: [['yo', '<b>teng</b>a'], ['tú', '<b>teng</b>as'], ['él / ella', '<b>teng</b>a'], ['nosotros', '<b>teng</b>amos'], ['vosotros', '<b>teng</b>áis'], ['ellos', '<b>teng</b>an']] }
            ] },
            { inf: 'poner', tr: { ru: 'класть, ставить', en: 'to put' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', '<b>pong</b>o'], ['tú', 'pones'], ['él / ella', 'pone'], ['nosotros', 'ponemos'], ['vosotros', 'ponéis'], ['ellos', 'ponen']] },
              { label: 'Subjuntivo', color: 'amber', rows: [['yo', '<b>pong</b>a'], ['tú', '<b>pong</b>as'], ['él / ella', '<b>pong</b>a'], ['nosotros', '<b>pong</b>amos'], ['vosotros', '<b>pong</b>áis'], ['ellos', '<b>pong</b>an']] }
            ] },
            { inf: 'salir', tr: { ru: 'выходить', en: 'to go out' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', '<b>salg</b>o'], ['tú', 'sales'], ['él / ella', 'sale'], ['nosotros', 'salimos'], ['vosotros', 'salís'], ['ellos', 'salen']] },
              { label: 'Subjuntivo', color: 'amber', rows: [['yo', '<b>salg</b>a'], ['tú', '<b>salg</b>as'], ['él / ella', '<b>salg</b>a'], ['nosotros', '<b>salg</b>amos'], ['vosotros', '<b>salg</b>áis'], ['ellos', '<b>salg</b>an']] }
            ] },
            { inf: 'venir', tr: { ru: 'приходить', en: 'to come' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', '<b>veng</b>o'], ['tú', 'vienes'], ['él / ella', 'viene'], ['nosotros', 'venimos'], ['vosotros', 'venís'], ['ellos', 'vienen']] },
              { label: 'Subjuntivo', color: 'amber', rows: [['yo', '<b>veng</b>a'], ['tú', '<b>veng</b>as'], ['él / ella', '<b>veng</b>a'], ['nosotros', '<b>veng</b>amos'], ['vosotros', '<b>veng</b>áis'], ['ellos', '<b>veng</b>an']] }
            ] },
            { inf: 'decir', tr: { ru: 'сказать', en: 'to say' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', '<b>dig</b>o'], ['tú', 'dices'], ['él / ella', 'dice'], ['nosotros', 'decimos'], ['vosotros', 'decís'], ['ellos', 'dicen']] },
              { label: 'Subjuntivo', color: 'amber', rows: [['yo', '<b>dig</b>a'], ['tú', '<b>dig</b>as'], ['él / ella', '<b>dig</b>a'], ['nosotros', '<b>dig</b>amos'], ['vosotros', '<b>dig</b>áis'], ['ellos', '<b>dig</b>an']] }
            ] },
            { inf: 'hacer', tr: { ru: 'делать', en: 'to do, make' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', '<b>hag</b>o'], ['tú', 'haces'], ['él / ella', 'hace'], ['nosotros', 'hacemos'], ['vosotros', 'hacéis'], ['ellos', 'hacen']] },
              { label: 'Subjuntivo', color: 'amber', rows: [['yo', '<b>hag</b>a'], ['tú', '<b>hag</b>as'], ['él / ella', '<b>hag</b>a'], ['nosotros', '<b>hag</b>amos'], ['vosotros', '<b>hag</b>áis'], ['ellos', '<b>hag</b>an']] }
            ] },
            { inf: 'conocer', tr: { ru: 'знать, быть знакомым', en: 'to know, be familiar with' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', '<b>conozc</b>o'], ['tú', 'conoces'], ['él / ella', 'conoce'], ['nosotros', 'conocemos'], ['vosotros', 'conocéis'], ['ellos', 'conocen']] },
              { label: 'Subjuntivo', color: 'amber', rows: [['yo', '<b>conozc</b>a'], ['tú', '<b>conozc</b>as'], ['él / ella', '<b>conozc</b>a'], ['nosotros', '<b>conozc</b>amos'], ['vosotros', '<b>conozc</b>áis'], ['ellos', '<b>conozc</b>an']] }
            ] },
            { inf: 'traer', tr: { ru: 'приносить', en: 'to bring' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', '<b>traig</b>o'], ['tú', 'traes'], ['él / ella', 'trae'], ['nosotros', 'traemos'], ['vosotros', 'traéis'], ['ellos', 'traen']] },
              { label: 'Subjuntivo', color: 'amber', rows: [['yo', '<b>traig</b>a'], ['tú', '<b>traig</b>as'], ['él / ella', '<b>traig</b>a'], ['nosotros', '<b>traig</b>amos'], ['vosotros', '<b>traig</b>áis'], ['ellos', '<b>traig</b>an']] }
            ] },
            { inf: 'oír', tr: { ru: 'слышать', en: 'to hear' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['yo', '<b>oig</b>o'], ['tú', 'oyes'], ['él / ella', 'oye'], ['nosotros', 'oímos'], ['vosotros', 'oís'], ['ellos', 'oyen']] },
              { label: 'Subjuntivo', color: 'amber', rows: [['yo', '<b>oig</b>a'], ['tú', '<b>oig</b>as'], ['él / ella', '<b>oig</b>a'], ['nosotros', '<b>oig</b>amos'], ['vosotros', '<b>oig</b>áis'], ['ellos', '<b>oig</b>an']] }
            ] }
          ] },
          { type: 'table', heading: { ru: 'Изменение корня e→ie, o→ue', en: 'Stem changes e→ie, o→ue' },
            head: ['', 'yo', 'tú', 'él / ella', 'nosotros', 'vosotros', 'ellos'],
            rows: [
              ['querer (e→ie)', 'quiera', 'quieras', 'quiera', 'queramos', 'queráis', 'quieran'],
              ['pensar (e→ie)', 'piense', 'pienses', 'piense', 'pensemos', 'penséis', 'piensen'],
              ['poder (o→ue)', 'pueda', 'puedas', 'pueda', 'podamos', 'podáis', 'puedan'],
              ['volver (o→ue)', 'vuelva', 'vuelvas', 'vuelva', 'volvamos', 'volváis', 'vuelvan'],
              ['dormir (o→ue / u)', 'duerma', 'duermas', 'duerma', 'durmamos', 'durmáis', 'duerman']
            ] },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Важно:</b> у глаголов на -ar / -er в nosotros и vosotros корень не меняется (<i>queramos</i>, а не «quieramos»). А у глаголов на -ir (<i>dormir, morir, sentir, pedir</i>) в nosotros и vosotros корень меняется по-другому: o→u или e→i.'],
            en: ['<b>Important:</b> -ar / -er verbs keep their stem in nosotros and vosotros (<i>queramos</i>, not “quieramos”). But -ir verbs (<i>dormir, morir, sentir, pedir</i>) change differently in nosotros and vosotros: o→u or e→i.'] } },
          { type: 'table', heading: { ru: 'Глаголы e→i (только -ir)', en: 'Verbs with e→i (-ir only)' },
            head: ['', 'yo', 'tú', 'él / ella', 'nosotros', 'vosotros', 'ellos'],
            rows: [
              ['pedir', 'pida', 'pidas', 'pida', 'pidamos', 'pidáis', 'pidan'],
              ['servir', 'sirva', 'sirvas', 'sirva', 'sirvamos', 'sirváis', 'sirvan'],
              ['seguir', 'siga', 'sigas', 'siga', 'sigamos', 'sigáis', 'sigan'],
              ['sentir', 'sienta', 'sientas', 'sienta', 'sintamos', 'sintáis', 'sientan']
            ] },
          { type: 'text', color: 'teal', body: {
            ru: ['У <i>pedir, servir, seguir</i> «i» во всех лицах; у <i>sentir</i> — ie в ударных формах и i в nosotros / vosotros.'],
            en: ['<i>Pedir, servir, seguir</i> have “i” in every person; <i>sentir</i> has ie in the stressed forms and i in nosotros / vosotros.'] } },
          { type: 'examples', items: [
            { color: 'amber', es: 'Es posible que <b>haya</b> atascos esta tarde.', ru: 'Возможно, сегодня днём будут пробки.', en: 'There may be traffic jams this afternoon.' },
            { color: 'amber', es: 'Quiero que <b>seas</b> feliz.', ru: 'Я хочу, чтобы ты был счастлив.', en: 'I want you to be happy.' },
            { color: 'amber', es: 'Me alegra que <b>estéis</b> de vacaciones.', ru: 'Я рад, что вы в отпуске.', en: 'I’m glad you’re on holiday.' },
            { color: 'amber', es: 'No creo que <b>sepa</b> la respuesta.', ru: 'Не думаю, что он знает ответ.', en: 'I don’t think he knows the answer.' },
            { color: 'amber', es: 'Te pido que me <b>digas</b> la verdad.', ru: 'Прошу тебя сказать мне правду.', en: 'I’m asking you to tell me the truth.' },
            { color: 'amber', es: 'Ojalá <b>podamos</b> vernos pronto.', ru: 'Хорошо бы нам скоро увидеться.', en: 'I hope we can see each other soon.' },
            { color: 'amber', es: 'Cuando <b>vuelvas</b>, te lo cuento.', ru: 'Когда вернёшься, я тебе всё расскажу.', en: 'When you get back, I’ll tell you all about it.' }
          ] }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'text', body: {
            ru: ['Одни и те же ситуации — наклонение меняется в зависимости от смысла. В каждой паре сначала indicativo, потом subjuntivo.'],
            en: ['The same situations — the mood changes with the meaning. In each pair the indicative comes first, then the subjunctive.'] } },
          { type: 'examples', heading: { ru: 'Сравните: indicativo или subjuntivo', en: 'Compare: indicative or subjunctive' }, items: [
            { badge: 'IND', color: 'blue', es: 'Creo que <b>tiene</b> razón.', ru: 'Думаю, что он прав. (уверенность)', en: 'I think he’s right. (certainty)' },
            { badge: 'SUB', color: 'amber', es: 'No creo que <b>tenga</b> razón.', ru: 'Не думаю, что он прав. (сомнение)', en: 'I don’t think he’s right. (doubt)' },
            { badge: 'IND', color: 'blue', es: 'Sé que María <b>viene</b> mañana.', ru: 'Я знаю, что Мария придёт завтра. (факт)', en: 'I know María is coming tomorrow. (fact)' },
            { badge: 'SUB', color: 'amber', es: 'Espero que María <b>venga</b> mañana.', ru: 'Надеюсь, Мария придёт завтра. (желание)', en: 'I hope María comes tomorrow. (wish)' },
            { badge: 'IND', color: 'blue', es: 'Es verdad que <b>llueve</b> mucho aquí.', ru: 'Правда, что здесь много дождей. (факт)', en: 'It’s true that it rains a lot here. (fact)' },
            { badge: 'SUB', color: 'amber', es: 'Es posible que <b>llueva</b> mañana.', ru: 'Возможно, завтра будет дождь. (вероятность)', en: 'It may rain tomorrow. (probability)' },
            { badge: 'IND', color: 'blue', es: 'Cuando <b>llego</b> a casa, ceno.', ru: 'Когда я прихожу домой (обычно), ужинаю. (привычка)', en: 'When I get home (usually), I have dinner. (habit)' },
            { badge: 'SUB', color: 'amber', es: 'Cuando <b>llegue</b> a casa, cenaré.', ru: 'Когда я приду домой, поужинаю. (ещё не случилось)', en: 'When I get home, I’ll have dinner. (not yet happened)' },
            { badge: 'IND', color: 'blue', es: 'Busco un piso que <b>tiene</b> terraza.', ru: 'Ищу квартиру, у которой есть терраса. (конкретная, известная)', en: 'I’m looking for a flat that has a terrace. (a specific one I know of)' },
            { badge: 'SUB', color: 'amber', es: 'Busco un piso que <b>tenga</b> terraza.', ru: 'Ищу квартиру, у которой была бы терраса. (любая, ещё не найдена)', en: 'I’m looking for a flat with a terrace — any one will do. (not found yet)' }
          ] },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Бонус-правило (relativas):</b> subjuntivo нужен и после <i>que</i>, если предмет или человек неопределённый, не найден или не существует — как в последней паре. Частая тема на B1.'],
            en: ['<b>Bonus rule (relative clauses):</b> the subjunctive is also used after <i>que</i> when the thing or person is unspecified, not yet found or does not exist — as in the last pair. A frequent B1 topic.'] } },
          { type: 'examples', heading: { ru: 'Ещё примеры', en: 'More examples' }, items: [
            { color: 'amber', es: 'Busco a alguien que <b>hable</b> francés.', ru: 'Ищу кого-нибудь, кто говорит по-французски.', en: 'I’m looking for someone who speaks French.' },
            { color: 'amber', es: '¿Hay algún restaurante que <b>abra</b> los lunes?', ru: 'Есть какой-нибудь ресторан, который работает по понедельникам?', en: 'Is there a restaurant that opens on Mondays?' },
            { color: 'amber', es: 'Os llamo en cuanto <b>sepa</b> algo.', ru: 'Позвоню вам, как только что-нибудь узнаю.', en: 'I’ll call you as soon as I know something.' },
            { color: 'amber', es: 'Me molesta que mis vecinos <b>pongan</b> la música tan alta.', ru: 'Меня раздражает, что соседи так громко включают музыку.', en: 'It annoys me that my neighbours play their music so loud.' },
            { color: 'amber', es: 'Aunque <b>esté</b> cansado, iré a la reunión.', ru: 'Даже если я буду уставшим, я пойду на собрание.', en: 'Even if I’m tired, I’ll go to the meeting.' },
            { color: 'amber', es: 'Esperad aquí hasta que <b>vuelva</b> el guía.', ru: 'Ждите здесь, пока не вернётся гид.', en: 'Wait here until the guide comes back.' },
            { color: 'amber', es: 'Saldremos sin que nadie nos <b>vea</b>.', ru: 'Мы уйдём так, что никто нас не увидит.', en: 'We’ll leave without anyone seeing us.' }
          ] },
          { type: 'tip', title: { ru: 'Мини-чеклист перед экзаменом', en: 'Mini exam checklist' }, body: {
            ru: ['1) Есть ли <i>que</i> между двумя разными подлежащими?<br>2) Первая часть выражает желание, эмоцию, сомнение, оценку или приказ?<br>3) Действие ещё не свершилось (после <i>cuando, para que</i> и т. п.)?<br>Если да хотя бы на один вопрос — <b>subjuntivo</b>.'],
            en: ['1) Is there a <i>que</i> between two different subjects?<br>2) Does the first part express a wish, emotion, doubt, evaluation or order?<br>3) Has the action not happened yet (after <i>cuando, para que</i>, etc.)?<br>If the answer to any of them is yes — <b>subjunctive</b>.'] } }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Quiero que tú ___ (venir) a la fiesta.',
        options: ['vengas', 'vienes', 'venir'], answer: 0,
        explain: { ru: '<i>Querer que</i> + другое подлежащее — subjuntivo. Основа из <i>yo vengo</i>: <i>vengas</i>.', en: '<i>Querer que</i> with a different subject takes the subjunctive. The stem comes from <i>yo vengo</i>: <i>vengas</i>.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Creo que Ana ___ (tener) razón.',
        options: ['tiene', 'tenga', 'tener'], answer: 0,
        explain: { ru: 'Утвердительное <i>creo que</i> — уверенность, поэтому indicativo. Subjuntivo — только после <i>no creo que</i>.', en: 'Affirmative <i>creo que</i> expresses certainty, so it takes the indicative. The subjunctive comes only after <i>no creo que</i>.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Es importante que ___ (estudiar, vosotros) cada día.',
        options: ['estudiéis', 'estudiáis', 'estudiad'], answer: 0,
        explain: { ru: 'Безличная оценка <i>es importante que</i> — subjuntivo; -ar получает окончания на -e: <i>estudiéis</i>.', en: 'The impersonal evaluation <i>es importante que</i> takes the subjunctive; -ar verbs get -e endings: <i>estudiéis</i>.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Mañana, cuando ___ (llegar, tú) a casa, te llamaré.',
        options: ['llegues', 'llegas', 'llegarás'], answer: 0,
        explain: { ru: '<i>Cuando</i> о будущем (<i>mañana, te llamaré</i>) — subjuntivo; орфография <b>g → gu</b> сохраняет звук: <i>llegues</i>.', en: '<i>Cuando</i> about the future (<i>mañana, te llamaré</i>) takes the subjunctive; the spelling <b>g → gu</b> keeps the sound: <i>llegues</i>.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Ojalá ___ (hacer) buen tiempo mañana.',
        options: ['haga', 'hace', 'hará'], answer: 0,
        explain: { ru: 'После <i>ojalá</i> всегда subjuntivo. <i>Hacer → hago → haga</i>.', en: '<i>Ojalá</i> is always followed by the subjunctive. <i>Hacer → hago → haga</i>.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Te lo explico para que lo ___ (entender, tú).',
        options: ['entiendas', 'entiendes', 'entendas'], answer: 0,
        explain: { ru: '<i>Para que</i> — всегда subjuntivo; корень меняется e→ie: <i>entiendas</i>.', en: '<i>Para que</i> always takes the subjunctive; the stem changes e→ie: <i>entiendas</i>.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Es verdad que ___ (ser) muy tarde.',
        options: ['es', 'sea', 'ser'], answer: 0,
        explain: { ru: '<i>Es verdad que</i> — это факт, поэтому indicativo: <i>es</i>.', en: '<i>Es verdad que</i> states a fact, so it takes the indicative: <i>es</i>.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Espero que ___ (estar, vosotros) bien.',
        options: ['estéis', 'estáis', 'estad'], answer: 0,
        explain: { ru: '<i>Esperar que</i> — желание, subjuntivo. <i>Estar</i> — неправильный: <i>estéis</i>.', en: '<i>Esperar que</i> is a wish: subjunctive. <i>Estar</i> is irregular: <i>estéis</i>.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'No conozco a nadie que ___ (hablar) japonés.',
        options: ['hable', 'habla', 'hablar'], answer: 0,
        explain: { ru: 'Такого человека нет (<i>no… nadie</i>) — в придаточном с <i>que</i> только subjuntivo: <i>hable</i>.', en: 'No such person exists (<i>no… nadie</i>), so the <i>que</i> clause takes only the subjunctive: <i>hable</i>.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'No quiero que ___ (dormir, nosotros) tan poco.',
        options: ['durmamos', 'duermamos', 'dormimos'], answer: 0,
        explain: { ru: 'Subjuntivo после <i>no quiero que</i>. У -ir глаголов в nosotros o→u: <i>durmamos</i>.', en: 'Subjunctive after <i>no quiero que</i>. -ir verbs change o→u in nosotros: <i>durmamos</i>.' } }
    ]
  }
]);
