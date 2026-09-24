// B1 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('B1', [
  {
    id: 'b1-imperativo-pronombres', level: 'B1',
    title: { ru: 'Imperativo и местоимения', en: 'Imperativo and pronouns' },
    summary: { ru: 'Утвердительный и отрицательный императив, место местоимений и правила ударения — с нуля до автоматизма.',
               en: 'Affirmative and negative commands, where pronouns go, and the accent rules — from zero to automatic.' },
    sections: [
      {
        heading: { ru: 'Утвердительный императив', en: 'Affirmative commands' },
        body: {
          ru: ['Утвердительный императив — это просьбы, приказы и советы в положительной форме: «сделай», «купи», «садитесь».',
               '<b>tú</b> — берём форму él / ella в Presente de Indicativo (без -s): <i>habla</i>. <b>usted, ustedes, nosotros</b> — соответствующая форма Subjuntivo Presente: <i>hable, hablen, hablemos</i>. <b>vosotros</b> — инфинитив, финальную -r меняем на -d: <i>hablad</i>.',
               '<b>Важно:</b> «свои» формы есть только у tú и vosotros. Формы usted, ustedes, nosotros — это просто subjuntivo presente без «que».'],
          en: ['Affirmative commands are requests, orders and advice in the positive form: “do it”, “buy it”, “sit down”.',
               '<b>tú</b> — take the él / ella form of the present indicative (no -s): <i>habla</i>. <b>usted, ustedes, nosotros</b> — the matching present subjunctive form: <i>hable, hablen, hablemos</i>. <b>vosotros</b> — the infinitive with the final -r changed to -d: <i>hablad</i>.',
               '<b>Important:</b> only tú and vosotros have forms of their own. The usted, ustedes and nosotros forms are simply the present subjunctive without “que”.']
        },
        table: {
          head: ['', 'hablar', 'comer', 'vivir'],
          rows: [
            ['tú', 'habla', 'come', 'vive'],
            ['usted', 'hable', 'coma', 'viva'],
            ['nosotros', 'hablemos', 'comamos', 'vivamos'],
            ['vosotros', 'hablad', 'comed', 'vivid'],
            ['ustedes', 'hablen', 'coman', 'vivan']
          ]
        }
      },
      {
        heading: { ru: '8 неправильных форм tú', en: 'Eight irregular tú forms' },
        body: {
          ru: ['Эти восемь форм нужно знать наизусть. Мнемоника: <b>«Di Haz Ve Pon Sal Sé Ten Ven»</b> — считалка, чтобы запомнить все сразу.',
               'Формы usted, ustedes, nosotros и vosotros у этих глаголов регулярные — по subjuntivo или с -d: <i>diga, haced, salgamos</i>.'],
          en: ['Learn these eight forms by heart. Mnemonic: <b>“Di Haz Ve Pon Sal Sé Ten Ven”</b> — say it like a rhyme to remember all of them at once.',
               'The usted, ustedes, nosotros and vosotros forms of these verbs are regular — from the subjunctive or with -d: <i>diga, haced, salgamos</i>.']
        },
        table: {
          head: ['infinitivo', 'tú', 'infinitivo', 'tú'],
          rows: [
            ['decir', 'di', 'salir', 'sal'],
            ['hacer', 'haz', 'ser', 'sé'],
            ['ir', 've', 'tener', 'ten'],
            ['poner', 'pon', 'venir', 'ven']
          ]
        }
      },
      {
        heading: { ru: 'Изменение корня', en: 'Stem changes' },
        body: {
          ru: ['Корень меняется в tú, usted и ustedes — так же, как в indicativo и subjuntivo. В nosotros и vosotros у <i>cerrar</i> и <i>volver</i> корень не меняется; у -ir глаголов в nosotros — e→i, o→u: <i>pidamos, durmamos</i>.'],
          en: ['The stem changes in tú, usted and ustedes — just as in the indicative and subjunctive. In nosotros and vosotros <i>cerrar</i> and <i>volver</i> keep their stem; -ir verbs change e→i, o→u in nosotros: <i>pidamos, durmamos</i>.']
        },
        table: {
          head: ['', 'tú', 'usted', 'nosotros', 'vosotros', 'ustedes'],
          rows: [
            ['cerrar (e→ie)', 'cierra', 'cierre', 'cerremos', 'cerrad', 'cierren'],
            ['volver (o→ue)', 'vuelve', 'vuelva', 'volvamos', 'volved', 'vuelvan'],
            ['pedir (e→i)', 'pide', 'pida', 'pidamos', 'pedid', 'pidan'],
            ['dormir (o→ue / u)', 'duerme', 'duerma', 'durmamos', 'dormid', 'duerman']
          ]
        }
      },
      {
        heading: { ru: 'Отрицательный императив', en: 'Negative commands' },
        body: {
          ru: ['Формула без исключений, даже для tú: <b>no + Subjuntivo</b> для всех лиц. «Своих» форм у отрицательного императива нет.',
               'Значит, <b>tú ≠ tú</b>: форма tú в утвердительном и отрицательном императиве почти всегда разная — <i>habla → no hables</i>.',
               'Все неправильные основы subjuntivo автоматически переходят в отрицательный императив: <i>ser → no seas</i>, <i>ir → no vayas</i>, <i>tener → no tengas</i>, <i>saber → no sepas</i>.'],
          en: ['A formula with no exceptions, even for tú: <b>no + subjunctive</b> for every person. Negative commands have no forms of their own.',
               'So <b>tú ≠ tú</b>: the tú form in affirmative and negative commands is almost always different — <i>habla → no hables</i>.',
               'All irregular subjunctive stems carry over to negative commands automatically: <i>ser → no seas</i>, <i>ir → no vayas</i>, <i>tener → no tengas</i>, <i>saber → no sepas</i>.']
        },
        table: {
          head: ['', 'hablar', 'comer', 'vivir'],
          rows: [
            ['tú', 'no hables', 'no comas', 'no vivas'],
            ['usted', 'no hable', 'no coma', 'no viva'],
            ['nosotros', 'no hablemos', 'no comamos', 'no vivamos'],
            ['vosotros', 'no habléis', 'no comáis', 'no viváis'],
            ['ustedes', 'no hablen', 'no coman', 'no vivan']
          ]
        },
        examples: [
          { es: 'Córtate la melena. → No te la cortes.', ru: 'Подстриги волосы. → Не стриги их. (cortes — subjuntivo)', en: 'Cut your long hair. → Don’t cut it. (cortes is subjunctive)' },
          { es: 'Cómprate una lavadora. → No te la compres.', ru: 'Купи себе стиральную машину. → Не покупай её себе. (compres — subjuntivo)', en: 'Buy yourself a washing machine. → Don’t buy it. (compres is subjunctive)' }
        ]
      },
      {
        heading: { ru: 'Где стоит местоимение', en: 'Where the pronoun goes' },
        body: {
          ru: ['Самое частое место ошибок: местоимение «прилипает» к глаголу или стоит отдельно — в зависимости от типа императива.',
               '<b>Утвердительный:</b> после глагола, вместе с ним одно слово. <b>Отрицательный:</b> перед глаголом — <i>no + местоимение + глагол</i>.'],
          en: ['This is where most mistakes happen: the pronoun either sticks to the verb or stands on its own, depending on the type of command.',
               '<b>Affirmative:</b> after the verb, written as one word. <b>Negative:</b> before the verb — <i>no + pronoun + verb</i>.']
        },
        examples: [
          { es: 'Cómprala. → No la compres.', ru: 'Купи её. → Не покупай её.', en: 'Buy it. → Don’t buy it.' },
          { es: 'Dímelo. → No me lo digas.', ru: 'Скажи мне это. → Не говори мне этого.', en: 'Tell me. → Don’t tell me.' },
          { es: 'Sentaos. → No os sentéis.', ru: 'Садитесь. → Не садитесь. (vosotros)', en: 'Sit down. → Don’t sit down. (vosotros)' }
        ]
      },
      {
        heading: { ru: 'Два местоимения: порядок', en: 'Two pronouns: the order' },
        body: {
          ru: ['Правило <b>RID</b> (Reflexivo → Indirecto → Directo): если местоимений два, сначала возвратное или косвенное (<i>me, te, se, nos, os</i>), потом прямое (<i>lo, la, los, las</i>). В отрицательной форме порядок тот же, но перед глаголом.',
               '<b>Золотое правило le / les → se:</b> перед <i>lo, la, los, las</i> местоимения le и les всегда превращаются в <i>se</i>. <i>Pídeselo</i> (не «pídelelo»), <i>dáselas</i> (не «dálelas»), никогда «lelo».'],
          en: ['The <b>RID</b> rule (Reflexive → Indirect → Direct): with two pronouns, the reflexive or indirect one (<i>me, te, se, nos, os</i>) comes first, then the direct one (<i>lo, la, los, las</i>). Negative commands keep the same order, but before the verb.',
               '<b>The golden rule le / les → se:</b> before <i>lo, la, los, las</i>, le and les always turn into <i>se</i>. <i>Pídeselo</i> (not “pídelelo”), <i>dáselas</i> (not “dálelas”), never “lelo”.']
        },
        examples: [
          { es: 'Dame el libro. → Dámelo.', ru: 'Дай мне книгу. → Дай мне её. (косвенное + прямое)', en: 'Give me the book. → Give it to me. (indirect + direct)' },
          { es: 'Dile la verdad a él. → Díselo.', ru: 'Скажи ему правду. → Скажи ему это. (le + lo → se lo)', en: 'Tell him the truth. → Tell it to him. (le + lo → se lo)' },
          { es: 'Ponte el jersey. → Póntelo.', ru: 'Надень свитер. → Надень его. (te возвратное + lo прямое)', en: 'Put on your jumper. → Put it on. (reflexive te + direct lo)' },
          { es: 'No se lo digas.', ru: 'Не говори ему этого. (тот же порядок, но перед глаголом)', en: 'Don’t tell him. (same order, but before the verb)' }
        ]
      },
      {
        heading: { ru: 'Тильда: одно местоимение', en: 'Written accent: one pronoun' },
        body: {
          ru: ['Слово на гласную, -n или -s по умолчанию ударяется на предпоследний слог. Когда мы приклеиваем местоимение, ударение глагола должно остаться на прежнем месте — если оно уже не предпоследнее, ставим тильду.',
               '<b>Одно местоимение + односложная форма tú</b> — обычно без тильды: <i>dame, hazlo, ponte, dile</i>.',
               '<b>Одно местоимение + форма из двух и больше слогов</b> (compra, escribe, diga…) — с тильдой: <i>cómpralo, escríbeme, dígalo</i>.'],
          en: ['A word ending in a vowel, -n or -s is stressed on the second-to-last syllable by default. When we attach a pronoun, the verb’s stress must stay where it was — if it is no longer second-to-last, we add a written accent.',
               '<b>One pronoun + a one-syllable tú form</b> — usually no accent: <i>dame, hazlo, ponte, dile</i>.',
               '<b>One pronoun + a form of two or more syllables</b> (compra, escribe, diga…) — with an accent: <i>cómpralo, escríbeme, dígalo</i>.']
        },
        examples: [
          { es: 'da + me → dame', ru: 'дай мне', en: 'give me' },
          { es: 'haz + lo → hazlo', ru: 'сделай это', en: 'do it' },
          { es: 'pon + te → ponte', ru: 'надень (на себя)', en: 'put on (yourself)' },
          { es: 'di + le → dile', ru: 'скажи ему', en: 'tell him' },
          { es: 'compra + lo → cómpralo', ru: 'купи это', en: 'buy it' },
          { es: 'escribe + me → escríbeme', ru: 'напиши мне', en: 'write to me' },
          { es: 'abre + la → ábrela', ru: 'открой её', en: 'open it' },
          { es: 'diga + lo → dígalo', ru: 'скажите это (usted)', en: 'say it (usted)' },
          { es: 'quita + los → quítalos', ru: 'убери их', en: 'take them away' }
        ]
      },
      {
        heading: { ru: 'Тильда: два местоимения', en: 'Written accent: two pronouns' },
        body: {
          ru: ['<b>Два местоимения</b> — тильда почти всегда, даже с односложной формой: <i>dámelo, díselo, póntelo</i>.',
               'В отрицательном императиве проще: местоимения стоят отдельно перед глаголом, а форма subjuntivo сохраняет обычное ударение — <i>no me lo digas, no te lo pongas, no se los des</i>.'],
          en: ['<b>Two pronouns</b> — almost always an accent, even with a one-syllable form: <i>dámelo, díselo, póntelo</i>.',
               'Negative commands are easier: the pronouns stand separately before the verb, and the subjunctive form keeps its usual stress — <i>no me lo digas, no te lo pongas, no se los des</i>.']
        },
        examples: [
          { es: 'da + me + lo → dámelo', ru: 'дай мне это', en: 'give it to me' },
          { es: 'di + se + lo → díselo', ru: 'скажи ему это', en: 'tell it to him' },
          { es: 'pon + te + lo → póntelo', ru: 'надень это (на себя)', en: 'put it on' },
          { es: 'compra + te + lo → cómpratelo', ru: 'купи это себе', en: 'buy it for yourself' }
        ]
      },
      {
        heading: { ru: 'Возвратные глаголы', en: 'Reflexive verbs' },
        body: {
          ru: ['Возвратные глаголы (<i>levantarse, sentarse, irse…</i>) в утвердительном императиве теряют одну букву перед -nos и -os: в nosotros пропадает -s, в vosotros — -d.',
               '<b>Исключение 1 — irse:</b> в nosotros не «vayámonos», а разговорное <i>vámonos</i> (пойдём, пошли). <b>Исключение 2 — irse:</b> в vosotros вместо «íos» особая форма <i>idos</i> — единственный случай, где -d не выпадает.',
               'В nosotros после потери -s почти всегда нужна тильда: <i>levantémonos, sentémonos, vámonos</i> — слово стало длиннее, а ударение осталось на прежнем слоге. В отрицании местоимение, как обычно, стоит перед глаголом.'],
          en: ['Reflexive verbs (<i>levantarse, sentarse, irse…</i>) lose one letter before -nos and -os in affirmative commands: nosotros drops the -s, vosotros drops the -d.',
               '<b>Exception 1 — irse:</b> nosotros uses the colloquial <i>vámonos</i> (let’s go), not “vayámonos”. <b>Exception 2 — irse:</b> vosotros uses the special form <i>idos</i> instead of “íos” — the only case where the -d stays.',
               'After losing the -s, the nosotros form almost always needs an accent: <i>levantémonos, sentémonos, vámonos</i> — the word got longer, but the stress stayed on the same syllable. In negative commands the pronoun goes before the verb as usual.']
        },
        table: {
          head: ['', 'regla', 'levantarse', 'sentarse'],
          rows: [
            ['tú', 'sin cambios', 'levántate', 'siéntate'],
            ['usted', 'sin cambios', 'levántese', 'siéntese'],
            ['nosotros', '-mos + nos → -monos', 'levantémonos', 'sentémonos'],
            ['vosotros', '-d + os → -os', 'levantaos', 'sentaos'],
            ['ustedes', 'sin cambios', 'levántense', 'siéntense']
          ]
        },
        examples: [
          { es: 'Levántate. → No te levantes.', ru: 'Встань. → Не вставай.', en: 'Get up. → Don’t get up.' },
          { es: 'Quedaos con nosotros. → No os quedéis con ellos.', ru: 'Оставайтесь с нами. → Не оставайтесь с ними. (vosotros)', en: 'Stay with us. → Don’t stay with them. (vosotros)' }
        ]
      },
      {
        heading: { ru: 'Разбор: да → нет', en: 'Worked examples: yes → no' },
        body: {
          ru: ['Одна и та же ситуация в утвердительной и отрицательной форме.'],
          en: ['The same situation as an affirmative and as a negative command.']
        },
        examples: [
          { es: 'Cómprate una lavadora. → No te la compres.', ru: 'Купи себе стиральную машину. → Не покупай её себе.', en: 'Buy yourself a washing machine. → Don’t buy it.' },
          { es: 'Pídele las llaves a tu padre. → No se las pidas.', ru: 'Попроси у отца ключи. → Не проси их у него. (le → se, las = ключи)', en: 'Ask your father for the keys. → Don’t ask him for them. (le → se, las = the keys)' },
          { es: 'Haz mucho ruido. → No hagas mucho.', ru: 'Делай много шума. → Не делай много. (ruido местоимением не заменяется)', en: 'Make a lot of noise. → Don’t make much. (ruido is not replaced by a pronoun)' },
          { es: 'Tira la basura. → No la tires.', ru: 'Выброси мусор. → Не выбрасывай его.', en: 'Throw out the rubbish. → Don’t throw it out.' },
          { es: 'Ponle más sal a la salsa. → No le pongas más.', ru: 'Положи больше соли в соус. → Не клади больше. (le остаётся le: дальше нет lo / la / los / las)', en: 'Put more salt in the sauce. → Don’t put in any more. (le stays le: no lo / la / los / las follows)' },
          { es: 'Quédate con tus amigos. → No te quedes con ellos.', ru: 'Останься со своими друзьями. → Не оставайся с ними. (возвратное te нельзя терять)', en: 'Stay with your friends. → Don’t stay with them. (don’t drop the reflexive te)' },
          { es: 'Ponte este queso en la pasta. → No te lo pongas.', ru: 'Положи себе этот сыр в пасту. → Не клади его себе.', en: 'Put this cheese on your pasta. → Don’t put it on.' },
          { es: 'Quítalos de la mesa. → No los quites de ahí.', ru: 'Убери их со стола (ноги). → Не убирай их оттуда.', en: 'Take them off the table (your feet). → Don’t move them from there.' }
        ]
      },
      {
        heading: { ru: 'Чеклист перед ответом', en: 'Checklist before you answer' },
        body: {
          ru: ['1) Утвердительно или отрицательно? — выбираю форму глагола.<br>2) Есть ли у глагола возвратное <i>se</i> (<i>ponerse, quedarse…</i>)? — не забыть его как местоимение.<br>3) Есть ли прямое дополнение (что?) — заменяю на <i>lo, la, los, las</i>.<br>4) Есть ли косвенное (кому?) — <i>me, te, le→se, nos, os, les→se</i>, ставлю перед прямым.<br>5) Утвердительная форма — приклеиваю и проверяю тильду.'],
          en: ['1) Affirmative or negative? — choose the verb form.<br>2) Is the verb reflexive (<i>ponerse, quedarse…</i>)? — keep its pronoun.<br>3) Is there a direct object (what?) — replace it with <i>lo, la, los, las</i>.<br>4) Is there an indirect object (to whom?) — <i>me, te, le→se, nos, os, les→se</i>, placed before the direct one.<br>5) Affirmative form — attach the pronouns and check the accent.']
        }
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
    summary: { ru: 'Полное пособие: когда используется subjuntivo, фразы-триггеры, спряжение и неправильные формы.',
               en: 'A complete guide: when to use the subjunctive, trigger phrases, conjugation and irregular forms.' },
    sections: [
      {
        heading: { ru: 'Indicativo и subjuntivo', en: 'Indicative and subjunctive' },
        body: {
          ru: ['<b>Indicativo</b> — факт, реальность: то, что объективно и известно точно. <i>Sé que…, Es verdad que…, Creo que…</i>',
               '<b>Subjuntivo</b> — не факт, а отношение: желание, эмоция, сомнение, оценка или ещё не свершившееся действие.',
               '<b>Главная формула:</b> [глагол 1 в indicativo] + <b>que</b> + [глагол 2 в subjuntivo] — и только если подлежащие в двух частях разные. Если подлежащее одно и то же — инфинитив, а не subjuntivo.'],
          en: ['<b>Indicative</b> — facts and reality: what is objective and known for sure. <i>Sé que…, Es verdad que…, Creo que…</i>',
               '<b>Subjunctive</b> — not a fact but an attitude: a wish, an emotion, a doubt, an evaluation, or an action that has not happened yet.',
               '<b>The main formula:</b> [verb 1 in the indicative] + <b>que</b> + [verb 2 in the subjunctive] — and only when the two parts have different subjects. With the same subject, use the infinitive instead.']
        },
        examples: [
          { es: 'Quiero salir.', ru: 'Я хочу выйти. (подлежащее одно — инфинитив)', en: 'I want to go out. (same subject — infinitive)' },
          { es: 'Quiero que salgas.', ru: 'Я хочу, чтобы ты вышел. (подлежащие разные — subjuntivo)', en: 'I want you to go out. (different subjects — subjunctive)' }
        ]
      },
      {
        heading: { ru: 'Желание, эмоции, сомнение', en: 'Wishes, emotions, doubt' },
        body: {
          ru: ['① <b>Желание, воля:</b> <i>querer que, esperar que, desear que, necesitar que, preferir que</i>.',
               '② <b>Эмоции:</b> <i>me alegra que, siento que, temo que, me sorprende que, es una pena que, me molesta que</i>.',
               '③ <b>Сомнение, отрицание:</b> <i>dudar que, no creer que, no pensar que, no estar seguro de que, no es verdad que</i>.'],
          en: ['① <b>Wishes, will:</b> <i>querer que, esperar que, desear que, necesitar que, preferir que</i>.',
               '② <b>Emotions:</b> <i>me alegra que, siento que, temo que, me sorprende que, es una pena que, me molesta que</i>.',
               '③ <b>Doubt, denial:</b> <i>dudar que, no creer que, no pensar que, no estar seguro de que, no es verdad que</i>.']
        },
        examples: [
          { es: 'Quiero que vengas a la fiesta.', ru: 'Хочу, чтобы ты пришёл на вечеринку.', en: 'I want you to come to the party.' },
          { es: 'Me alegra que estés aquí.', ru: 'Я рад, что ты здесь.', en: 'I’m glad you’re here.' },
          { es: 'No creo que tenga razón.', ru: 'Не думаю, что он прав.', en: 'I don’t think he’s right.' }
        ]
      },
      {
        heading: { ru: 'Оценка, просьбы, ojalá', en: 'Evaluations, requests, ojalá' },
        body: {
          ru: ['④ <b>Безличные оценочные выражения:</b> <i>es importante que, es necesario que, es posible que, es mejor que, es raro que, es normal que, más vale que</i>. <b>Но:</b> <i>es verdad / es cierto / es obvio que</i> + indicativo — это факты!',
               '⑤ <b>Просьбы, советы, приказы:</b> <i>pedir que, recomendar que, sugerir que, aconsejar que, prohibir que, permitir que, exigir que</i>.',
               '⑥ <b>Ojalá (que)</b> — «как бы хотелось, лишь бы». «Que» после ojalá необязательно: оба варианта верны.'],
          en: ['④ <b>Impersonal evaluations:</b> <i>es importante que, es necesario que, es posible que, es mejor que, es raro que, es normal que, más vale que</i>. <b>But:</b> <i>es verdad / es cierto / es obvio que</i> + indicative — those are facts!',
               '⑤ <b>Requests, advice, orders:</b> <i>pedir que, recomendar que, sugerir que, aconsejar que, prohibir que, permitir que, exigir que</i>.',
               '⑥ <b>Ojalá (que)</b> — “if only, I hope”. The “que” after ojalá is optional: both are correct.']
        },
        examples: [
          { es: 'Es importante que estudies cada día.', ru: 'Важно, чтобы ты занимался каждый день.', en: 'It’s important that you study every day.' },
          { es: 'Te recomiendo que descanses más.', ru: 'Советую тебе больше отдыхать.', en: 'I recommend that you rest more.' },
          { es: 'Ojalá haga buen tiempo mañana.', ru: 'Хоть бы завтра была хорошая погода.', en: 'I hope the weather is good tomorrow.' }
        ]
      },
      {
        heading: { ru: 'Союзы цели и времени', en: 'Conjunctions of purpose and time' },
        body: {
          ru: ['⑦ <b>Цель, условие, уступка:</b> <i>para que, a fin de que, antes de que, sin que, con tal de que, a menos que, en caso de que, aunque</i>.',
               '<i>Aunque</i> + subjuntivo — если факт не подтверждён, это гипотеза («хотя бы даже»); <i>aunque</i> + indicativo — если факт известен.',
               '⑧ <b>Время, действие в будущем:</b> <i>cuando, en cuanto, tan pronto como, hasta que, mientras, después de que</i>. Если действие привычное, повторяющееся — indicativo: <i>Cuando llego, ceno</i> (когда я прихожу — обычно — ужинаю).'],
          en: ['⑦ <b>Purpose, condition, concession:</b> <i>para que, a fin de que, antes de que, sin que, con tal de que, a menos que, en caso de que, aunque</i>.',
               '<i>Aunque</i> + subjunctive — when the fact is not confirmed, a hypothesis (“even if”); <i>aunque</i> + indicative — when the fact is known.',
               '⑧ <b>Time, a future action:</b> <i>cuando, en cuanto, tan pronto como, hasta que, mientras, después de que</i>. If the action is habitual or repeated, use the indicative: <i>Cuando llego, ceno</i> (when I get home — usually — I have dinner).']
        },
        examples: [
          { es: 'Te lo explico para que lo entiendas.', ru: 'Объясняю тебе, чтобы ты это понял.', en: 'I’m explaining it so that you understand.' },
          { es: 'Cuando llegues, cenaremos.', ru: 'Когда ты придёшь, поужинаем. (ещё не случилось)', en: 'When you arrive, we’ll have dinner. (it hasn’t happened yet)' }
        ]
      },
      {
        heading: { ru: 'Шпаргалка: фразы-триггеры', en: 'Cheat sheet: trigger phrases' },
        body: {
          ru: ['После этих фраз почти всегда идёт subjuntivo. <b>Совет для экзамена:</b> учите их группами, а не по одной — на B1 обычно проверяют узнавание триггера и правильное спряжение после него.',
               '<b>Ловушка:</b> глаголы мнения и уверенности в утвердительной форме (<i>creo, pienso, es verdad, es seguro, sé que</i>) требуют indicativo. Subjuntivo появляется, только когда их отрицают: <i>no creo que, no es verdad que</i>.'],
          en: ['These phrases are almost always followed by the subjunctive. <b>Exam tip:</b> learn them in groups, not one by one — at B1 you are usually tested on spotting the trigger and conjugating correctly after it.',
               '<b>Trap:</b> verbs of opinion and certainty in the affirmative (<i>creo, pienso, es verdad, es seguro, sé que</i>) take the indicative. The subjunctive appears only when they are negated: <i>no creo que, no es verdad que</i>.']
        },
        table: {
          head: ['deseo / petición', 'emoción', 'duda / negación', 'valoración'],
          rows: [
            ['quiero que', 'me alegra que', 'dudo que', 'es importante que'],
            ['espero que', 'siento que', 'no creo que', 'es necesario que'],
            ['deseo que', 'temo que', 'no pienso que', 'es posible que'],
            ['necesito que', 'me sorprende que', 'no es verdad que', 'es probable que'],
            ['prefiero que', 'es una pena que', 'no está claro que', 'es mejor que'],
            ['pido que', 'me da miedo que', 'no es seguro que', 'es raro que'],
            ['exijo que', 'me molesta que', 'es imposible que', 'es una lástima que'],
            ['insisto en que', 'qué bueno que', '', 'puede que'],
            ['', '', '', 'ojalá (que)']
          ]
        }
      },
      {
        heading: { ru: 'Шпаргалка: союзы', en: 'Cheat sheet: conjunctions' },
        body: {
          ru: ['Слева — цель и условие, справа — время (о будущем) и уступка.'],
          en: ['Left: purpose and condition. Right: time (about the future) and concession.']
        },
        table: {
          head: ['finalidad / condición', 'tiempo / concesión'],
          rows: [
            ['para que', 'cuando'],
            ['a fin de que', 'en cuanto'],
            ['sin que', 'tan pronto como'],
            ['con tal de que', 'hasta que'],
            ['a menos que', 'antes de que'],
            ['en caso de que', 'mientras'],
            ['a no ser que', 'aunque'],
            ['', 'por más que']
          ]
        }
      },
      {
        heading: { ru: 'Спряжение правильных глаголов', en: 'Regular verbs' },
        body: {
          ru: ['Берём форму <b>yo</b> в Presente de Indicativo, убираем <b>-o</b> и добавляем «противоположные» окончания: глаголы на <b>-ar</b> получают окончания на <b>-e</b>, а глаголы на <b>-er / -ir</b> — на <b>-a</b>.',
               'У -er и -ir окончания совпадают — нужно выучить только один набор для обеих групп.'],
          en: ['Take the <b>yo</b> form of the present indicative, drop the <b>-o</b> and add the “opposite” endings: <b>-ar</b> verbs get endings in <b>-e</b>, <b>-er / -ir</b> verbs get endings in <b>-a</b>.',
               '-er and -ir verbs share the same endings — you only need to learn one set for both groups.']
        },
        table: {
          head: ['', 'hablar', 'comer', 'vivir'],
          rows: [
            ['yo', 'hable', 'coma', 'viva'],
            ['tú', 'hables', 'comas', 'vivas'],
            ['él / ella', 'hable', 'coma', 'viva'],
            ['nosotros', 'hablemos', 'comamos', 'vivamos'],
            ['vosotros', 'habléis', 'comáis', 'viváis'],
            ['ellos', 'hablen', 'coman', 'vivan']
          ]
        }
      },
      {
        heading: { ru: 'Орфографические изменения', en: 'Spelling changes' },
        body: {
          ru: ['Буква меняется, чтобы сохранить звук основы.'],
          en: ['The letter changes to keep the sound of the stem.']
        },
        table: {
          head: ['terminación', 'cambio', 'ejemplo'],
          rows: [
            ['-car', 'c → qu', 'sacar → saque, saques…'],
            ['-gar', 'g → gu', 'pagar → pague, pagues…'],
            ['-zar', 'z → c', 'empezar → empiece, empieces…'],
            ['-ger / -gir', 'g → j', 'coger → coja; dirigir → dirija'],
            ['-guir', 'gu → g', 'seguir → siga, sigas…']
          ]
        }
      },
      {
        heading: { ru: 'Полностью неправильные глаголы', en: 'Fully irregular verbs' },
        body: {
          ru: ['Их нужно просто выучить наизусть. Мнемоника <b>«SEDHAVI»</b> — Ser, Estar, Dar, Haber, Ir (плюс saber): самые частые исключения, встречаются почти в каждом экзамене.'],
          en: ['These simply have to be memorised. Mnemonic <b>“SEDHAVI”</b> — Ser, Estar, Dar, Haber, Ir (plus saber): the most common exceptions, found in almost every exam.']
        },
        table: {
          head: ['', 'yo', 'tú', 'él / ella', 'nosotros', 'vosotros', 'ellos'],
          rows: [
            ['ser', 'sea', 'seas', 'sea', 'seamos', 'seáis', 'sean'],
            ['estar', 'esté', 'estés', 'esté', 'estemos', 'estéis', 'estén'],
            ['ir', 'vaya', 'vayas', 'vaya', 'vayamos', 'vayáis', 'vayan'],
            ['haber', 'haya', 'hayas', 'haya', 'hayamos', 'hayáis', 'hayan'],
            ['saber', 'sepa', 'sepas', 'sepa', 'sepamos', 'sepáis', 'sepan'],
            ['dar', 'dé', 'des', 'dé', 'demos', 'deis', 'den']
          ]
        }
      },
      {
        heading: { ru: 'Неправильная форма yo', en: 'Irregular yo form' },
        body: {
          ru: ['Если форма yo в Presente de Indicativo неправильная (<b>-go, -zco…</b>), эта же основа используется во всех лицах subjuntivo — исключений внутри уже нет.'],
          en: ['If the yo form of the present indicative is irregular (<b>-go, -zco…</b>), the same stem is used for every person of the subjunctive — no further exceptions inside.']
        },
        table: {
          head: ['infinitivo', 'yo (indicativo)', 'raíz', 'subjuntivo'],
          rows: [
            ['tener', 'tengo', 'teng-', 'tenga, tengas, tenga, tengamos, tengáis, tengan'],
            ['poner', 'pongo', 'pong-', 'ponga, pongas, ponga, pongamos, pongáis, pongan'],
            ['salir', 'salgo', 'salg-', 'salga, salgas, salga, salgamos, salgáis, salgan'],
            ['venir', 'vengo', 'veng-', 'venga, vengas, venga, vengamos, vengáis, vengan'],
            ['decir', 'digo', 'dig-', 'diga, digas, diga, digamos, digáis, digan'],
            ['hacer', 'hago', 'hag-', 'haga, hagas, haga, hagamos, hagáis, hagan'],
            ['conocer', 'conozco', 'conozc-', 'conozca, conozcas, conozca, conozcamos, conozcáis, conozcan'],
            ['traer', 'traigo', 'traig-', 'traiga, traigas, traiga, traigamos, traigáis, traigan'],
            ['oír', 'oigo', 'oig-', 'oiga, oigas, oiga, oigamos, oigáis, oigan']
          ]
        }
      },
      {
        heading: { ru: 'Изменение корня e→ie, o→ue', en: 'Stem changes e→ie, o→ue' },
        body: {
          ru: ['<b>Важно:</b> у глаголов на -ar / -er в nosotros и vosotros корень не меняется (<i>queramos</i>, а не «quieramos»). А у глаголов на -ir (<i>dormir, morir, sentir, pedir</i>) в nosotros и vosotros корень меняется по-другому: o→u или e→i.'],
          en: ['<b>Important:</b> -ar / -er verbs keep their stem in nosotros and vosotros (<i>queramos</i>, not “quieramos”). But -ir verbs (<i>dormir, morir, sentir, pedir</i>) change differently in nosotros and vosotros: o→u or e→i.']
        },
        table: {
          head: ['', 'yo', 'tú', 'él / ella', 'nosotros', 'vosotros', 'ellos'],
          rows: [
            ['querer (e→ie)', 'quiera', 'quieras', 'quiera', 'queramos', 'queráis', 'quieran'],
            ['pensar (e→ie)', 'piense', 'pienses', 'piense', 'pensemos', 'penséis', 'piensen'],
            ['poder (o→ue)', 'pueda', 'puedas', 'pueda', 'podamos', 'podáis', 'puedan'],
            ['volver (o→ue)', 'vuelva', 'vuelvas', 'vuelva', 'volvamos', 'volváis', 'vuelvan'],
            ['dormir (o→ue / u)', 'duerma', 'duermas', 'duerma', 'durmamos', 'durmáis', 'duerman']
          ]
        }
      },
      {
        heading: { ru: 'Глаголы e→i', en: 'Verbs with e→i' },
        body: {
          ru: ['Только глаголы на -ir. У <i>pedir, servir, seguir</i> «i» во всех лицах; у <i>sentir</i> — ie в ударных формах и i в nosotros / vosotros.'],
          en: ['Only -ir verbs. <i>Pedir, servir, seguir</i> have “i” in every person; <i>sentir</i> has ie in the stressed forms and i in nosotros / vosotros.']
        },
        table: {
          head: ['', 'yo', 'tú', 'él / ella', 'nosotros', 'vosotros', 'ellos'],
          rows: [
            ['pedir', 'pida', 'pidas', 'pida', 'pidamos', 'pidáis', 'pidan'],
            ['servir', 'sirva', 'sirvas', 'sirva', 'sirvamos', 'sirváis', 'sirvan'],
            ['seguir', 'siga', 'sigas', 'siga', 'sigamos', 'sigáis', 'sigan'],
            ['sentir', 'sienta', 'sientas', 'sienta', 'sintamos', 'sintáis', 'sientan']
          ]
        }
      },
      {
        heading: { ru: 'Сравните: indicativo или subjuntivo', en: 'Compare: indicative or subjunctive' },
        body: {
          ru: ['Одни и те же ситуации — наклонение меняется в зависимости от смысла. В каждой паре сначала indicativo, потом subjuntivo.',
               '<b>Бонус-правило (relativas):</b> subjuntivo нужен и после <i>que</i>, если предмет или человек неопределённый, не найден или не существует — как в последней паре. Частая тема на B1.'],
          en: ['The same situations — the mood changes with the meaning. In each pair the indicative comes first, then the subjunctive.',
               '<b>Bonus rule (relative clauses):</b> the subjunctive is also used after <i>que</i> when the thing or person is unspecified, not yet found or does not exist — as in the last pair. A frequent B1 topic.']
        },
        examples: [
          { es: 'Creo que tiene razón.', ru: 'Думаю, что он прав. (уверенность)', en: 'I think he’s right. (certainty)' },
          { es: 'No creo que tenga razón.', ru: 'Не думаю, что он прав. (сомнение)', en: 'I don’t think he’s right. (doubt)' },
          { es: 'Sé que María viene mañana.', ru: 'Я знаю, что Мария придёт завтра. (факт)', en: 'I know María is coming tomorrow. (fact)' },
          { es: 'Espero que María venga mañana.', ru: 'Надеюсь, Мария придёт завтра. (желание)', en: 'I hope María comes tomorrow. (wish)' },
          { es: 'Es verdad que llueve mucho aquí.', ru: 'Правда, что здесь много дождей. (факт)', en: 'It’s true that it rains a lot here. (fact)' },
          { es: 'Es posible que llueva mañana.', ru: 'Возможно, завтра будет дождь. (вероятность)', en: 'It may rain tomorrow. (probability)' },
          { es: 'Cuando llego a casa, ceno.', ru: 'Когда я прихожу домой (обычно), ужинаю. (привычка)', en: 'When I get home (usually), I have dinner. (habit)' },
          { es: 'Cuando llegue a casa, cenaré.', ru: 'Когда я приду домой, поужинаю. (ещё не случилось)', en: 'When I get home, I’ll have dinner. (not yet happened)' },
          { es: 'Busco un piso que tiene terraza.', ru: 'Ищу квартиру, у которой есть терраса. (конкретная, известная)', en: 'I’m looking for a flat that has a terrace. (a specific one I know of)' },
          { es: 'Busco un piso que tenga terraza.', ru: 'Ищу квартиру, у которой была бы терраса. (любая, ещё не найдена)', en: 'I’m looking for a flat with a terrace — any one will do. (not found yet)' }
        ]
      },
      {
        heading: { ru: 'Чеклист перед экзаменом', en: 'Exam checklist' },
        body: {
          ru: ['1) Есть ли <i>que</i> между двумя разными подлежащими?<br>2) Первая часть выражает желание, эмоцию, сомнение, оценку или приказ?<br>3) Действие ещё не свершилось (после <i>cuando, para que</i> и т. п.)?<br>Если да хотя бы на один вопрос — subjuntivo.'],
          en: ['1) Is there a <i>que</i> between two different subjects?<br>2) Does the first part express a wish, emotion, doubt, evaluation or order?<br>3) Has the action not happened yet (after <i>cuando, para que</i>, etc.)?<br>If the answer to any of them is yes — subjunctive.']
        }
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
