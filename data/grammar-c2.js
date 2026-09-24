// C2 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('C2', [
  {
    id: 'c2-modo-contraste', level: 'C2',
    title: { ru: 'Indicativo и subjuntivo: одна фраза, два смысла', en: 'Indicative vs subjunctive: one sentence, two meanings' },
    summary: { ru: 'Dice que vienes / Dice que vengas, Como no vienes / Como no vengas: когда выбор наклонения меняет сам смысл фразы.',
               en: 'Dice que vienes / Dice que vengas, Como no vienes / Como no vengas: when the choice of mood changes what the sentence means.' },
    sections: [
      {
        heading: { ru: 'Один глагол — два значения', en: 'One verb, two meanings' },
        body: {
          ru: ['У ряда глаголов два значения, и наклонение показывает, какое из них имеется в виду. <b>Decir, escribir, avisar, insistir en</b>: с indicativo — сообщение («говорит, что…»), с subjuntivo — приказ или требование («велит, чтобы…»).',
               '<b>Sentir</b>: с indicativo — «чувствовать, замечать», с subjuntivo — «сожалеть». <b>Comprender, entender</b>: с indicativo — «понимать, осознавать факт», с subjuntivo — «находить естественным, оправдывать».'],
          en: ['Some verbs have two meanings, and the mood shows which one is intended. <b>Decir, escribir, avisar, insistir en</b>: with the indicative they report (“says that…”), with the subjunctive they order or demand (“tells someone to…”).',
               '<b>Sentir</b>: with the indicative it means “to feel, to sense”, with the subjunctive “to be sorry”. <b>Comprender, entender</b>: with the indicative “to realise a fact”, with the subjunctive “to find it natural, to sympathise”.']
        },
        table: {
          head: ['verbo', '+ indicativo', '+ subjuntivo'],
          rows: [
            ['decir', 'informar', 'ordenar'],
            ['escribir · avisar', 'informar', 'pedir'],
            ['insistir en', 'afirmar', 'exigir'],
            ['sentir', 'percibir', 'lamentar'],
            ['comprender · entender', 'darse cuenta', 'verlo lógico']
          ]
        },
        examples: [
          { es: 'Dice que vienes mañana.', ru: 'Он говорит, что ты придёшь завтра.', en: 'He says you’re coming tomorrow.' },
          { es: 'Dice que vengas mañana.', ru: 'Он велит тебе прийти завтра.', en: 'He says you should come tomorrow.' },
          { es: 'Me escribió que llegaba el lunes.', ru: 'Он написал мне, что приезжает в понедельник.', en: 'He wrote to tell me he was arriving on Monday.' },
          { es: 'Me escribió que llegara el lunes.', ru: 'Он написал мне, чтобы я приехал в понедельник.', en: 'He wrote telling me to arrive on Monday.' },
          { es: "Siento que me miran.", ru: "Я чувствую, что на меня смотрят.", en: "I can feel people looking at me." },
          { es: "Siento que estés mal.", ru: "Мне жаль, что тебе плохо.", en: "I’m sorry you’re not well." },
          { es: "Insiste en que es inocente.", ru: "Он настаивает на том, что невиновен.", en: "He insists that he is innocent." },
          { es: "Insiste en que vengamos.", ru: "Он настаивает, чтобы мы пришли.", en: "He insists that we come." },
          { es: "Comprendo que no hay otra salida.", ru: "Я понимаю, что другого выхода нет.", en: "I realise there is no other way out." },
          { es: "Comprendo que estés enfadado.", ru: "Я понимаю, почему ты сердишься.", en: "I understand why you’re angry." },
          { es: 'Siento que te hayas enterado así.', ru: 'Жаль, что ты узнал об этом вот так.', en: 'I’m sorry you found out like that.' }
        ]
      },
      {
        heading: { ru: 'Один союз — два значения', en: 'One conjunction, two meanings' },
        body: {
          ru: ['<b>Como</b> в начале фразы: с indicativo — причина («так как»), с subjuntivo — условие, часто угроза («если только»): <i>Como no vienes, me voy</i> — «раз ты не идёшь»; <i>Como no vengas, me voy</i> — «если не придёшь, я уйду».',
               '<b>Mientras</b>: с indicativo — «пока, в то время как», с subjuntivo — «при условии что, до тех пор пока»: <i>Mientras vivas aquí, cumplirás mis normas</i>.',
               '<b>Lo que, el que, donde</b>: с indicativo — известное, с subjuntivo — любое, ещё неизвестное: <i>Haré lo que dices</i> (я слышал, что ты говоришь) / <i>Haré lo que digas</i> (что бы ты ни сказал).'],
          en: ['<b>Como</b> at the start of a sentence: with the indicative it gives a reason (“since”), with the subjunctive a condition, often a threat (“if…”): <i>Como no vienes, me voy</i> — “since you’re not coming”; <i>Como no vengas, me voy</i> — “if you don’t come, I’m leaving”.',
               '<b>Mientras</b>: with the indicative “while”, with the subjunctive “as long as”: <i>Mientras vivas aquí, cumplirás mis normas</i>.',
               '<b>Lo que, el que, donde</b>: with the indicative something known, with the subjunctive anything, still unknown: <i>Haré lo que dices</i> (I’ve heard what you say) / <i>Haré lo que digas</i> (whatever you say).']
        },
        table: {
          head: ['', '+ indicativo', '+ subjuntivo'],
          rows: [
            ['como', 'causa', 'condición'],
            ['mientras', 'a la vez', 'condición'],
            ['lo que · el que', 'algo conocido', 'cualquier cosa'],
            ['donde', 'lugar conocido', 'cualquier lugar']
          ]
        },
        examples: [
          { es: "Como no vienes, me voy.", ru: "Раз ты не идёшь, я ухожу.", en: "Since you’re not coming, I’m leaving." },
          { es: "Como no vengas, me voy.", ru: "Если не придёшь, я уйду.", en: "If you don’t come, I’m leaving." },
          { es: "Mientras cocinas, pongo la mesa.", ru: "Пока ты готовишь, я накрою на стол.", en: "While you cook, I’ll set the table." },
          { es: "Mientras cocines tú, yo friego.", ru: "Пока готовишь ты, посуду мою я.", en: "As long as you do the cooking, I’ll do the washing-up." },
          { es: "Haré lo que dices.", ru: "Сделаю так, как ты говоришь.", en: "I’ll do what you’re telling me." },
          { es: 'Haré lo que digas.', ru: 'Сделаю всё, что скажешь.', en: 'I’ll do whatever you say.' },
          { es: "Vamos donde dijiste.", ru: "Пойдём туда, куда ты говорил.", en: "Let’s go where you said." },
          { es: "Vamos donde quieras.", ru: "Пойдём, куда захочешь.", en: "Let’s go wherever you like." },
          { es: 'Como no me llames esta noche, me enfado.', ru: 'Если не позвонишь мне сегодня вечером, я обижусь.', en: 'If you don’t call me tonight, I’ll be upset.' },
          { es: 'Mientras haya salud, lo demás no importa.', ru: 'Было бы здоровье, остальное неважно.', en: 'As long as we have our health, nothing else matters.' }
        ]
      },
      {
        heading: { ru: 'Где выбора нет', en: 'Where there is no choice' },
        body: {
          ru: ['<b>Sin que, antes de que, para que</b> требуют subjuntivo всегда — даже когда речь о реальном факте: <i>Salió sin que nadie lo viera</i>. Здесь наклонение ничего не различает, и indicativo будет ошибкой.'],
          en: ['<b>Sin que, antes de que, para que</b> always take the subjunctive — even for a real fact: <i>Salió sin que nadie lo viera</i>. Here the mood distinguishes nothing, and the indicative would be a mistake.']
        },
        examples: [
          { es: 'Lo arreglé antes de que llegaran mis padres.', ru: 'Я всё починил до того, как пришли родители.', en: 'I fixed it before my parents arrived.' }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Смысл — угроза: «если не придёшь, я уйду».', en: 'The meaning is a threat: “if you don’t come, I’m leaving”.' }, es: 'Como no ___, me voy sin ti. (venir, tú)',
        options: ['vienes', 'vendrás', 'vengas'], answer: 2,
        explain: { ru: 'Como + subjuntivo — условие: vengas. Como no vienes значило бы «раз ты не идёшь».', en: 'Como + subjunctive is a condition: vengas. Como no vienes would mean “since you’re not coming”.' } },
      { prompt: { ru: 'Смысл — «сожалею».', en: 'The meaning is “I’m sorry”.' }, es: 'Siento mucho que ___ triste. (estar, tú)',
        options: ['estés', 'estás', 'estarás'], answer: 0,
        explain: { ru: 'Sentir в значении «сожалеть» — subjuntivo: estés.', en: 'Sentir meaning “to be sorry” takes the subjunctive: estés.' } },
      { prompt: { ru: 'Смысл — «чувствую, замечаю».', en: 'The meaning is “I sense, I notice”.' }, es: 'Siento que algo ___ mal entre nosotros; lo noto en tu voz. (ir)',
        options: ['vaya', 'va', 'fuera'], answer: 1,
        explain: { ru: 'Sentir в значении восприятия — indicativo: va.', en: 'Sentir as perception takes the indicative: va.' } },
      { prompt: { ru: 'Это приказ мамы.', en: 'It is Mum’s order.' }, es: 'Mamá dice que ___ a cenar ahora mismo. (bajar, tú)',
        options: ['bajas', 'bajarás', 'bajes'], answer: 2,
        explain: { ru: 'Decir в значении приказа — subjuntivo: bajes.', en: 'Decir as an order takes the subjunctive: bajes.' } },
      { prompt: { ru: 'Это сообщение, а не просьба.', en: 'It is information, not a request.' }, es: 'Pedro dice que ___ mañana a las nueve; me lo ha confirmado por mensaje. (llegar, él)',
        options: ['llegue', 'llega', 'llegara'], answer: 1,
        explain: { ru: 'Decir в значении сообщения — indicativo: llega.', en: 'Decir as information takes the indicative: llega.' } },
      { prompt: { ru: 'Смысл — «пока / при условии, что».', en: 'The meaning is “as long as”.' }, es: 'Mientras ___ en esta casa, cumplirás mis normas. (vivir, tú)',
        options: ['vivas', 'vives', 'vivías'], answer: 0,
        explain: { ru: 'Mientras в значении условия — subjuntivo: vivas.', en: 'Mientras as a condition takes the subjunctive: vivas.' } },
      { prompt: { ru: 'Я ещё не знаю, что ты скажешь.', en: 'I don’t know yet what you will say.' }, es: 'Haré lo que tú ___. (decir)',
        options: ['dices', 'dijiste', 'digas'], answer: 2,
        explain: { ru: 'Неизвестное содержание, «что бы ни» — subjuntivo: digas.', en: 'Unknown content, “whatever” — subjunctive: digas.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Salió de casa sin que nadie lo ___. (ver)',
        options: ['vio', 'viera', 'veía'], answer: 1,
        explain: { ru: 'Sin que — всегда subjuntivo, даже для факта: viera.', en: 'Sin que always takes the subjunctive, even for a fact: viera.' } },
      { prompt: { ru: 'Обвиняемый утверждал это.', en: 'The defendant was claiming it.' }, es: 'Durante el juicio, el acusado insistió en que ___ inocente. (ser, él)',
        options: ['era', 'fuera', 'sería'], answer: 0,
        explain: { ru: 'Insistir en que в значении «утверждать» — indicativo: era.', en: 'Insistir en que meaning “to maintain” takes the indicative: era.' } },
      { prompt: { ru: 'Мама этого требовала.', en: 'Mum was demanding it.' }, es: 'Mi madre insistió en que ___ el abrigo. (llevar, yo)',
        options: ['llevaba', 'llevaría', 'llevara'], answer: 2,
        explain: { ru: 'Insistir en que в значении требования — subjuntivo: llevara.', en: 'Insistir en que as a demand takes the subjunctive: llevara.' } }
    ]
  },
  {
    id: 'c2-registro', level: 'C2',
    title: { ru: 'Регистр и стиль: официально и разговорно', en: 'Register and style: formal vs colloquial' },
    summary: { ru: 'Как один и тот же смысл звучит в официальном письме и в разговоре с другом: обращение, лексика, вежливые формы, грамматика.',
               en: 'How the same meaning sounds in a formal letter and in a chat with a friend: address, vocabulary, polite forms, grammar.' },
    sections: [
      {
        heading: { ru: 'Tú, usted, vosotros, ustedes', en: 'Tú, usted, vosotros, ustedes' },
        body: {
          ru: ['<b>Usted / ustedes</b> — вежливое обращение: глагол в 3-м лице, местоимения <i>le, les, lo, la, su</i>. В Испании <i>tú</i> очень распространено, <i>usted</i> — для официальных ситуаций, пожилых людей, клиентов. Во многих странах Латинской Америки <i>usted</i> звучит чаще, а <i>vosotros</i> не используется вовсе: там <i>ustedes</i> — и вежливое, и дружеское множественное.',
               'Регистр нужно держать до конца: нельзя начать с <i>usted</i> и продолжить <i>te</i> или <i>tu</i>. <i>Señores, les ruego que tomen asiento</i> — всё в форме ustedes.'],
          en: ['<b>Usted / ustedes</b> is the polite form: third-person verbs and the pronouns <i>le, les, lo, la, su</i>. In Spain <i>tú</i> is very widespread; <i>usted</i> is for official situations, older people and customers. In much of Latin America <i>usted</i> is more frequent and <i>vosotros</i> is not used at all: <i>ustedes</i> is both the polite and the friendly plural.',
               'Keep the register consistent: don’t start with <i>usted</i> and switch to <i>te</i> or <i>tu</i>. <i>Señores, les ruego que tomen asiento</i> — everything is in the ustedes form.']
        }
      },
      {
        heading: { ru: 'Официальный стиль', en: 'Formal style' },
        body: {
          ru: ['Письмо открывается <i>Estimado/a señor/a:</i> или <i>Estimados señores:</i> (с двоеточием) и закрывается <i>Atentamente,</i> / <i>Un cordial saludo,</i>. Типичные формулы: <i>Por la presente…</i>, <i>Quedo a la espera de su respuesta</i>, <i>a la mayor brevedad</i>.',
               'Грамматика официального стиля: вежливый condicional (<i>Les agradecería que…</i>), отглагольные существительные вместо глаголов (<i>a la llegada del ministro</i> вместо <i>cuando llegó el ministro</i>), пассив и безличные конструкции, иногда пропуск <i>que</i>: <i>Le ruego disculpe las molestias</i>.',
               'Лексика — книжные синонимы: <i>solicitar</i> вместо <i>pedir</i>, <i>remitir</i> вместо <i>mandar</i>, <i>dar comienzo</i> вместо <i>empezar</i>.'],
          en: ['A letter opens with <i>Estimado/a señor/a:</i> or <i>Estimados señores:</i> (with a colon) and closes with <i>Atentamente,</i> / <i>Un cordial saludo,</i>. Typical formulas: <i>Por la presente…</i>, <i>Quedo a la espera de su respuesta</i>, <i>a la mayor brevedad</i>.',
               'The grammar of formal style: the polite conditional (<i>Les agradecería que…</i>), nouns instead of verbs (<i>a la llegada del ministro</i> instead of <i>cuando llegó el ministro</i>), passive and impersonal structures, sometimes a dropped <i>que</i>: <i>Le ruego disculpe las molestias</i>.',
               'The vocabulary uses bookish synonyms: <i>solicitar</i> for <i>pedir</i>, <i>remitir</i> for <i>mandar</i>, <i>dar comienzo</i> for <i>empezar</i>.']
        },
        table: {
          head: ['coloquial', 'neutro', 'formal'],
          rows: [
            ['arrancar', 'empezar', 'dar comienzo · iniciar'],
            ['pillar', 'conseguir', 'obtener'],
            ['currar', 'trabajar', 'desempeñar una labor'],
            ['mogollón de', 'muchos', 'numerosos'],
            ['la pasta', 'el dinero', 'los fondos'],
            ['mandar', 'enviar', 'remitir'],
            ['¡vale!', 'de acuerdo', 'conforme']
          ]
        },
        examples: [
          { es: 'Les agradecería que me enviaran la factura a la mayor brevedad.', ru: 'Я был бы признателен, если бы вы прислали мне счёт в кратчайшие сроки.', en: 'I would be grateful if you could send me the invoice as soon as possible.' },
          { es: 'Por la presente le comunicamos que su solicitud ha sido aprobada.', ru: 'Настоящим сообщаем вам, что ваша заявка одобрена.', en: 'We hereby inform you that your application has been approved.' },
          { es: 'Le rogamos disculpe las molestias.', ru: 'Приносим извинения за доставленные неудобства.', en: 'We apologise for any inconvenience.' }
        ]
      },
      {
        heading: { ru: 'Разговорный стиль', en: 'Colloquial style' },
        body: {
          ru: ['<b>Сокращения</b>: <i>el finde, la tele, el profe, la bici, el cole</i>. <b>Усилители</b>: <i>súper, un montón de, mogollón</i> (Испания). <b>Слова-связки</b>: <i>pues, o sea, bueno, vale, ¿sabes?</i>. <b>Уменьшительные</b> смягчают: <i>un momentito, un cafecito</i>.',
               '<b>Вежливый imperfecto</b> — мягкая просьба в магазине или по телефону: <i>Quería una barra de pan</i>, <i>Quería preguntarle una cosa</i>. Это нейтрально-вежливо и уместно в любом устном общении.'],
          en: ['<b>Clipped words</b>: <i>el finde, la tele, el profe, la bici, el cole</i>. <b>Intensifiers</b>: <i>súper, un montón de, mogollón</i> (Spain). <b>Fillers</b>: <i>pues, o sea, bueno, vale, ¿sabes?</i>. <b>Diminutives</b> soften things: <i>un momentito, un cafecito</i>.',
               'The <b>polite imperfecto</b> makes a soft request in a shop or on the phone: <i>Quería una barra de pan</i>, <i>Quería preguntarle una cosa</i>. It is neutral and polite, fine in any spoken exchange.']
        },
        examples: [
          { es: 'Este finde me voy a la playa con un montón de amigos.', ru: 'На этих выходных еду на пляж с кучей друзей.', en: 'This weekend I’m off to the beach with loads of friends.' },
          { es: 'Espera un momentito, que ya voy.', ru: 'Подожди минутку, я уже иду.', en: 'Hang on a sec, I’m coming.' },
          { es: 'Buenos días, quería pedir cita con el médico.', ru: 'Добрый день, я хотел бы записаться к врачу.', en: 'Good morning, I’d like to make a doctor’s appointment.' }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Как начать официальное письмо в учреждение?', en: 'How do you open a formal letter to an institution?' },
        options: ['Hola, ¿qué tal?', '¡Buenas!', 'Estimados señores:'], answer: 2,
        explain: { ru: 'Официальное обращение — Estimados señores: (с двоеточием).', en: 'The formal greeting is Estimados señores: (with a colon).' } },
      { prompt: { ru: 'Как закончить официальное письмо?', en: 'How do you close a formal letter?' },
        options: ['Atentamente,', 'Un besazo,', 'Hasta luego,'], answer: 0,
        explain: { ru: 'Atentamente — стандартная формула официального письма; остальные — дружеские.', en: 'Atentamente is the standard formal closing; the others are for friends.' } },
      { prompt: { ru: 'Выберите вариант для официального отчёта', en: 'Choose the option for a formal report' }, es: 'Hemos recibido ___ solicitudes.',
        options: ['un montón de', 'numerosas', 'mogollón de'], answer: 1,
        explain: { ru: 'Numerosas — книжный вариант; un montón de и mogollón de — разговорные.', en: 'Numerosas is formal; un montón de and mogollón de are colloquial.' } },
      { prompt: { ru: 'Какое слово — разговорное сокращение?', en: 'Which word is a colloquial clipping?' },
        options: ['el fin de semana', 'el finde', 'la semana laboral'], answer: 1,
        explain: { ru: 'El finde — разговорное сокращение от el fin de semana.', en: 'El finde is the colloquial clipping of el fin de semana.' } },
      { prompt: { ru: 'Выберите форму (официальное письмо)', en: 'Choose the form (formal letter)' }, es: 'Les agradecería que me ___ el formulario a la mayor brevedad. (enviar, ustedes)',
        options: ['envían', 'enviarán', 'enviaran'], answer: 2,
        explain: { ru: 'Agradecería que — вежливый condicional требует Imperfecto de subjuntivo: enviaran.', en: 'Agradecería que — the polite conditional takes the Imperfecto de subjuntivo: enviaran.' } },
      { prompt: { ru: 'Выберите вариант для официального объявления', en: 'Choose the option for an official announcement' }, es: 'La sesión ___ a las diez.',
        options: ['arranca', 'dará comienzo', 'echa a andar'], answer: 1,
        explain: { ru: 'Dar comienzo — официальный синоним empezar; arrancar и echar a andar — разговорные.', en: 'Dar comienzo is the formal synonym of empezar; arrancar and echar a andar are colloquial.' } },
      { prompt: { ru: 'Вежливая просьба в магазине', en: 'A polite request in a shop' }, es: '___ ver esa chaqueta, por favor.',
        options: ['Quise', 'Quería', 'Querré'], answer: 1,
        explain: { ru: 'Вежливый imperfecto: Quería ver… — «я хотел бы посмотреть».', en: 'The polite imperfecto: Quería ver… — “I’d like to see…”.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Le ruego ___ las molestias.',
        options: ['disculpa', 'disculpe', 'disculpó'], answer: 1,
        explain: { ru: 'Le ruego (que) + subjuntivo в форме usted: disculpe. Que в этой формуле можно опустить.', en: 'Le ruego (que) + subjunctive in the usted form: disculpe. The que may be dropped in this formula.' } },
      { prompt: { ru: 'Выберите местоимение', en: 'Choose the pronoun' }, es: 'Señores, ___ ruego que tomen asiento.',
        options: ['les', 'los', 'os'], answer: 0,
        explain: { ru: 'Обращение ustedes (tomen), rogar требует косвенного дополнения: les. Os — для vosotros.', en: 'This is the ustedes form (tomen), and rogar takes an indirect object: les. Os is for vosotros.' } },
      { prompt: { ru: 'Какой вариант самый официальный?', en: 'Which option is the most formal?' },
        options: ['Llegó el ministro y, venga, a empezar.', 'En cuanto llegó el ministro, arrancamos.', 'A la llegada del ministro, dio comienzo la reunión.'], answer: 2,
        explain: { ru: 'Отглагольное существительное (a la llegada) и книжное dar comienzo — признаки официального стиля.', en: 'A noun instead of a verb (a la llegada) and the bookish dar comienzo mark formal style.' } }
    ]
  },
  {
    id: 'c2-enfasis', level: 'C2',
    title: { ru: 'Порядок слов и выделение', en: 'Word order and emphasis' },
    summary: { ru: 'Fue Juan quien…, Lo que necesito es…, Ese libro ya lo he leído: как выделить главное в испанской фразе.',
               en: 'Fue Juan quien…, Lo que necesito es…, Ese libro ya lo he leído: how to highlight what matters in a Spanish sentence.' },
    sections: [
      {
        heading: { ru: 'Расщеплённые предложения: ser + выделяемое + que', en: 'Cleft sentences: ser + focus + relative' },
        body: {
          ru: ['Чтобы подчеркнуть одну часть фразы, её ставят после <b>ser</b>, а остальное — в придаточное: <i>Juan rompió el jarrón → Fue Juan quien rompió el jarrón</i> — «Именно Хуан…».',
               'Относительное слово зависит от того, что выделяем: человек — <b>quien / el que</b>, предмет — <b>lo que / el que</b>, место — <b>donde</b>, время — <b>cuando</b>, способ — <b>como</b>.',
               'Время глагола ser обычно совпадает со временем основного глагола: <i>Es aquí donde vivo</i>; <i>Fue en 1992 cuando se celebraron los Juegos</i>.'],
          en: ['To stress one part of a sentence, put it after <b>ser</b> and move the rest into a relative clause: <i>Juan rompió el jarrón → Fue Juan quien rompió el jarrón</i> — “It was Juan who…”.',
               'The relative word depends on what you highlight: a person — <b>quien / el que</b>, a thing — <b>lo que / el que</b>, a place — <b>donde</b>, a time — <b>cuando</b>, a manner — <b>como</b>.',
               'The tense of ser usually matches the main verb: <i>Es aquí donde vivo</i>; <i>Fue en 1992 cuando se celebraron los Juegos</i>.']
        },
        table: {
          head: ['se destaca', 'ejemplo'],
          rows: [
            ['persona', 'Fue Juan quien me lo dijo.'],
            ['cosa', 'Es el precio lo que importa.'],
            ['lugar', 'Fue en Sevilla donde vivió.'],
            ['tiempo', 'Fue en mayo cuando llegó.'],
            ['modo', 'Es así como se hace.'],
            ['complemento con preposición', 'Es a ti a quien busco.']
          ]
        },
        examples: [
          { es: "Es el precio lo que me preocupa.", ru: "Меня беспокоит именно цена.", en: "It’s the price that worries me." },
          { es: "Fue en Sevilla donde nos conocimos.", ru: "Познакомились мы именно в Севилье.", en: "It was in Seville that we met." },
          { es: "Fue en verano cuando se mudaron.", ru: "Переехали они именно летом.", en: "It was in summer that they moved." },
          { es: 'Fue mi abuela quien me enseñó a cocinar.', ru: 'Это бабушка научила меня готовить.', en: 'It was my grandmother who taught me to cook.' },
          { es: 'Es en momentos así cuando se conoce a los amigos.', ru: 'Именно в такие моменты и узнаёшь друзей.', en: 'It’s at times like these that you find out who your friends are.' }
        ]
      },
      {
        heading: { ru: 'Согласование и предлоги', en: 'Agreement and prepositions' },
        body: {
          ru: ['Если выделено личное местоимение, <b>ser согласуется с ним</b>: <i>Soy yo quien paga</i>, <i>Fuimos nosotros los que rompimos la ventana</i>.',
               'Если у выделяемого есть предлог, <b>он повторяется</b> перед относительным словом: <i>Es a Ana a quien vi</i>, <i>Es de eso de lo que quiero hablar</i>. Конструкции вроде «es por eso que» широко распространены, особенно в Америке, но в тщательной речи надёжнее <i>Por eso es por lo que…</i>'],
          en: ['If a personal pronoun is highlighted, <b>ser agrees with it</b>: <i>Soy yo quien paga</i>, <i>Fuimos nosotros los que rompimos la ventana</i>.',
               'If the highlighted part has a preposition, <b>it is repeated</b> before the relative: <i>Es a Ana a quien vi</i>, <i>Es de eso de lo que quiero hablar</i>. Structures like “es por eso que” are widespread, especially in the Americas, but careful style prefers <i>Por eso es por lo que…</i>']
        },
        examples: [
          { es: 'Eres tú quien tiene que decidir.', ru: 'Решать должен именно ты.', en: 'You’re the one who has to decide.' },
          { es: 'Es con Marta con quien tienes que hablar.', ru: 'Говорить тебе нужно именно с Мартой.', en: 'It’s Marta you need to talk to.' }
        ]
      },
      {
        heading: { ru: 'Lo que… es и lo + прилагательное + que', en: 'Lo que… es and lo + adjective + que' },
        body: {
          ru: ['<b>Lo que + глагол + es…</b> откладывает главное на конец: <i>Lo que necesito es descansar</i>; <i>Lo que más me molesta es que no avise</i>.',
               '<b>Lo + прилагательное / наречие + que</b> — «насколько, как сильно»: <i>No sabes lo cansada que estoy</i>; <i>Mira lo bien que canta</i>. Прилагательное согласуется с существительным, а наречие не меняется: <i>lo lejos que vive</i>.'],
          en: ['<b>Lo que + verb + es…</b> saves the key point for the end: <i>Lo que necesito es descansar</i>; <i>Lo que más me molesta es que no avise</i>.',
               '<b>Lo + adjective / adverb + que</b> means “how (much)”: <i>No sabes lo cansada que estoy</i>; <i>Mira lo bien que canta</i>. The adjective agrees with the noun; the adverb never changes: <i>lo lejos que vive</i>.']
        },
        examples: [
          { es: 'Lo que no entiendo es por qué no me llamaste.', ru: 'Чего я не понимаю, так это почему ты мне не позвонил.', en: 'What I don’t understand is why you didn’t call me.' },
          { es: 'Me sorprendió lo rápido que aprendió.', ru: 'Меня удивило, как быстро он научился.', en: 'I was surprised at how quickly he learned.' }
        ]
      },
      {
        heading: { ru: 'Вынесение в начало', en: 'Fronting' },
        body: {
          ru: ['Тему разговора можно вынести в начало. Если это прямое или косвенное дополнение, в предложении <b>обязательно</b> остаётся местоимение-повтор: <i>Ese libro ya lo he leído</i>; <i>A María no la he visto</i>; <i>A tu hermano le di las llaves</i>.',
               'Новое, важное обычно стоит <b>в конце</b>: <i>¿Quién te lo dijo? — Me lo dijo Pedro</i>.'],
          en: ['The topic can be moved to the front. If it is a direct or indirect object, a <b>resumptive pronoun is required</b>: <i>Ese libro ya lo he leído</i>; <i>A María no la he visto</i>; <i>A tu hermano le di las llaves</i>.',
               'New, important information usually goes <b>at the end</b>: <i>¿Quién te lo dijo? — Me lo dijo Pedro</i>.']
        },
        examples: [
          { es: 'Las llaves las dejé en la mesa.', ru: 'Ключи я оставил на столе.', en: 'The keys, I left them on the table.' }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Fue en Sevilla ___ nos conocimos.',
        options: ['cuando', 'donde', 'lo que'], answer: 1,
        explain: { ru: 'Выделено место (en Sevilla) — donde.', en: 'A place is highlighted (en Sevilla) — donde.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Fue en 1992 ___ se celebraron los Juegos Olímpicos de Barcelona.',
        options: ['donde', 'como', 'cuando'], answer: 2,
        explain: { ru: 'Выделено время (en 1992) — cuando.', en: 'A time is highlighted (en 1992) — cuando.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: '___ nosotros los que rompimos la ventana.',
        options: ['Fue', 'Fuimos', 'Fueron'], answer: 1,
        explain: { ru: 'Выделено местоимение nosotros — ser согласуется с ним: fuimos.', en: 'The pronoun nosotros is highlighted — ser agrees with it: fuimos.' } },
      { prompt: { ru: 'Выберите вариант', en: 'Choose the option' }, es: '___ necesito es un buen descanso.',
        options: ['Lo que', 'Que', 'El cual'], answer: 0,
        explain: { ru: 'Конструкция lo que… es: Lo que necesito es…', en: 'The lo que… es structure: Lo que necesito es…' } },
      { prompt: { ru: 'Выберите местоимение', en: 'Choose the pronoun' }, es: 'Ese libro ya ___ he leído.',
        options: ['le', 'se', 'lo'], answer: 2,
        explain: { ru: 'Прямое дополнение вынесено в начало — нужен повтор lo (el libro, мужской род, предмет).', en: 'A fronted direct object needs the resumptive lo (el libro, masculine, a thing).' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'No te imaginas ___ cansada que estoy.',
        options: ['muy', 'lo', 'tan'], answer: 1,
        explain: { ru: 'Lo + прилагательное + que — «как сильно»: lo cansada que estoy.', en: 'Lo + adjective + que — “how (much)”: lo cansada que estoy.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Es así ___ se prepara una buena paella.',
        options: ['donde', 'como', 'cuando'], answer: 1,
        explain: { ru: 'Выделен способ (así) — como.', en: 'A manner is highlighted (así) — como.' } },
      { prompt: { ru: 'Выберите вариант', en: 'Choose the option' }, es: 'Fue a Ana ___ vi en el concierto, no a su hermana.',
        options: ['quien', 'que', 'a quien'], answer: 2,
        explain: { ru: 'У выделенного есть предлог (a Ana) — в норме он повторяется: a quien. «Fue a Ana que vi» встречается в разговорной речи Латинской Америки, но нормой не считается.', en: 'The highlighted part has a preposition (a Ana), and the standard repeats it: a quien. “Fue a Ana que vi” is heard in colloquial Latin American speech but is not standard.' } },
      { prompt: { ru: 'Выберите вариант', en: 'Choose the option' }, es: 'Es de eso ___ quiero hablarte.',
        options: ['de lo que', 'lo que', 'el que'], answer: 0,
        explain: { ru: 'Hablar de eso — предлог de повторяется: de lo que.', en: 'Hablar de eso — the preposition de is repeated: de lo que.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'No sabes lo ___ que vive.',
        options: ['lejano', 'lejos', 'lejana'], answer: 1,
        explain: { ru: 'С глаголом vivir нужно наречие, а наречие не изменяется: lo lejos que vive.', en: 'Vivir needs an adverb, and adverbs don’t change: lo lejos que vive.' } }
    ]
  },
  {
    id: 'c2-futuro-subjuntivo', level: 'C2',
    title: { ru: 'Futuro de subjuntivo и архаичные формы', en: 'Futuro de subjuntivo and archaic forms' },
    summary: { ru: 'Hablare, tuviere, fuere: будущее время субхунтива, которое живёт в законах, поговорках и торжественных формулах, и другие старинные черты официального стиля.',
               en: 'Hablare, tuviere, fuere: the future subjunctive that survives in laws, sayings and solemn formulas, plus other old-fashioned features of formal style.' },
    sections: [
      {
        heading: { ru: 'Как образуется', en: 'How to form it' },
        body: {
          ru: ['Как и Imperfecto de subjuntivo, от формы <b>ellos</b> в Indefinido: отрезаем <b>-ron</b> и добавляем <b>-re, -res, -re, -remos, -reis, -ren</b>. <i>hablaron → hablare</i>, <i>tuvieron → tuviere</i>, <i>fueron → fuere</i>.',
               'Форма nosotros — с ударением: <i>habláremos, tuviéremos</i>. Сложная форма — <b>hubiere + причастие</b>: <i>hubiere cometido</i>.',
               'Легко спутать с Imperfecto de subjuntivo: <i>tuviera</i> (imperfecto) — <i>tuviere</i> (futuro). Отличие — одна буква: <b>-ra</b> и <b>-re</b>.'],
          en: ['Like the Imperfecto de subjuntivo, it comes from the <b>ellos</b> form of the Indefinido: drop <b>-ron</b> and add <b>-re, -res, -re, -remos, -reis, -ren</b>. <i>hablaron → hablare</i>, <i>tuvieron → tuviere</i>, <i>fueron → fuere</i>.',
               'The nosotros form has an accent: <i>habláremos, tuviéremos</i>. The compound form is <b>hubiere + participle</b>: <i>hubiere cometido</i>.',
               'It is easy to confuse with the Imperfecto de subjuntivo: <i>tuviera</i> (imperfecto) vs <i>tuviere</i> (futuro). The difference is one letter: <b>-ra</b> vs <b>-re</b>.']
        },
        table: {
          head: ['', 'hablar', 'tener', 'ser / ir'],
          rows: [
            ['yo', 'hablare', 'tuviere', 'fuere'],
            ['tú', 'hablares', 'tuvieres', 'fueres'],
            ['él / ella / usted', 'hablare', 'tuviere', 'fuere'],
            ['nosotros / nosotras', 'habláremos', 'tuviéremos', 'fuéremos'],
            ['vosotros / vosotras', 'hablareis', 'tuviereis', 'fuereis'],
            ['ellos / ellas / ustedes', 'hablaren', 'tuvieren', 'fueren']
          ]
        }
      },
      {
        heading: { ru: 'Где встречается', en: 'Where you find it' },
        body: {
          ru: ['В живой речи этой формы нет уже несколько веков. Она осталась в <b>юридических и административных текстах</b> (особенно старых законах и регламентах), в <b>поговорках</b> и <b>торжественных формулах</b>. Её нужно узнавать, а использовать самому — только для стилизации.',
               'Смысл — гипотетическое будущее: «если когда-нибудь кто-то…». Сегодня вместо неё говорят presente de subjuntivo (после <i>que, quien, cuando</i>) или presente de indicativo (после <i>si</i>).'],
          en: ['This form disappeared from everyday speech centuries ago. It survives in <b>legal and administrative texts</b> (especially older laws and regulations), in <b>sayings</b> and in <b>solemn formulas</b>. You need to recognise it; use it yourself only for stylistic effect.',
               'It means a hypothetical future: “if at any time someone…”. Today it is replaced by the present subjunctive (after <i>que, quien, cuando</i>) or the present indicative (after <i>si</i>).']
        },
        table: {
          head: ['arcaico', 'moderno'],
          rows: [
            ['El que infringiere…', 'El que infrinja…'],
            ['Si alguien alterare…', 'Si alguien altera…'],
            ['Cuando llegare el momento…', 'Cuando llegue el momento…'],
            ['Sea lo que fuere.', 'Sea lo que sea.'],
            ['Adonde fueres…', 'Adonde vayas…']
          ]
        },
        examples: [
          { es: "El que infringiere esta norma será sancionado.", ru: "Тот, кто нарушит это правило, будет наказан.", en: "Whoever breaks this rule shall be penalised." },
          { es: "El que infrinja esta norma será sancionado.", ru: "Тот, кто нарушит это правило, будет наказан (современный вариант).", en: "Whoever breaks this rule will be penalised (modern form)." },
          { es: "Si alguien alterare el orden, será expulsado.", ru: "Если кто-либо нарушит порядок, он будет удалён.", en: "Should anyone disturb the peace, they shall be removed." },
          { es: "Si alguien altera el orden, será expulsado.", ru: "Если кто-то нарушит порядок, его выведут (современный вариант).", en: "If anyone disturbs the peace, they will be removed (modern form)." },
          { es: "Adonde vayas, haz lo que veas.", ru: "Куда бы ты ни пошёл, делай, как там принято (современный вариант поговорки).", en: "Wherever you go, do as you see others do (modern form of the saying)." },
          { es: 'Quien no cumpliere lo dispuesto en este artículo incurrirá en falta grave.', ru: 'Тот, кто не выполнит положения этой статьи, совершит серьёзное нарушение.', en: 'Anyone who fails to comply with this article will commit a serious offence.' },
          { es: 'Si así no lo hiciereis, que Dios y la Patria os lo demanden.', ru: 'Если вы этого не сделаете, пусть Бог и Родина с вас спросят.', en: 'Should you fail to do so, may God and the Nation hold you to account.' },
          { es: 'Adonde fueres, haz lo que vieres.', ru: 'В чужой монастырь со своим уставом не ходят.', en: 'When in Rome, do as the Romans do.' }
        ]
      },
      {
        heading: { ru: 'Другие старинные черты', en: 'Other old-fashioned features' },
        body: {
          ru: ['<b>Местоимение после спрягаемого глагола</b>: <i>díjole</i> = <i>le dijo</i>, <i>hallábase</i> = <i>se hallaba</i>. Встречается в старой литературе и в нарочито книжном стиле.',
               '<b>Haber de + инфинитив</b> — долженствование в регламентах: <i>Los candidatos habrán de presentar la solicitud antes del día 5</i>. Формулы: <i>so pena de</i> («под угрозой»), <i>por la presente</i> («настоящим»), <i>el susodicho</i> («вышеупомянутый»).'],
          en: ['<b>A pronoun attached after a conjugated verb</b>: <i>díjole</i> = <i>le dijo</i>, <i>hallábase</i> = <i>se hallaba</i>. Found in old literature and deliberately bookish style.',
               '<b>Haber de + infinitive</b> expresses obligation in regulations: <i>Los candidatos habrán de presentar la solicitud antes del día 5</i>. Formulas: <i>so pena de</i> (“on pain of”), <i>por la presente</i> (“hereby”), <i>el susodicho</i> (“the aforementioned”).']
        },
        examples: [
          { es: 'Hallábase el caballero en su castillo cuando llegó la noticia.', ru: 'Рыцарь находился в своём замке, когда пришла весть.', en: 'The knight was in his castle when the news arrived.' }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Какая форма — futuro de subjuntivo? (tener, él)', en: 'Which is the futuro de subjuntivo? (tener, él)' },
        options: ['tuviera', 'tuviere', 'tendrá'], answer: 1,
        explain: { ru: 'Futuro de subjuntivo оканчивается на -re: tuviere. Tuviera — imperfecto de subjuntivo.', en: 'The futuro de subjuntivo ends in -re: tuviere. Tuviera is the imperfecto de subjuntivo.' } },
      { prompt: { ru: 'Закончите поговорку', en: 'Complete the saying' }, es: 'Adonde ___, haz lo que vieres.',
        options: ['fueres', 'fuiste', 'irás'], answer: 0,
        explain: { ru: 'Поговорка сохранила futuro de subjuntivo: Adonde fueres, haz lo que vieres.', en: 'The saying keeps the futuro de subjuntivo: Adonde fueres, haz lo que vieres.' } },
      { prompt: { ru: 'Закончите книжную формулу', en: 'Complete the bookish formula' }, es: 'Sea lo que ___, lo aceptaremos.',
        options: ['era', 'será', 'fuere'], answer: 2,
        explain: { ru: 'Устойчивая формула Sea lo que fuere — «что бы то ни было».', en: 'The fixed formula Sea lo que fuere — “whatever it may be”.' } },
      { prompt: { ru: 'Перепишите «El que no pagare la multa…» по-современному.', en: 'Rewrite “El que no pagare la multa…” in modern Spanish.' }, es: 'El que no ___ la multa será sancionado.',
        options: ['pague', 'pagara', 'pagará'], answer: 0,
        explain: { ru: 'Сегодня вместо futuro de subjuntivo после el que — presente de subjuntivo: pague.', en: 'Today the present subjunctive replaces the futuro de subjuntivo after el que: pague.' } },
      { prompt: { ru: 'Текст закона в архаичном стиле. Выберите форму.', en: 'A law written in archaic style. Choose the form.' }, es: 'Si alguien ___ el orden público, será sancionado. (alterar)',
        options: ['alterase', 'alterare', 'alterará'], answer: 1,
        explain: { ru: 'Гипотетическое будущее в законе — futuro de subjuntivo: alterare. После si нельзя futuro, а alterase не сочетается с será.', en: 'A hypothetical future in a law — futuro de subjuntivo: alterare. Si cannot take the futuro, and alterase does not fit with será.' } },
      { prompt: { ru: 'Какая форма — futuro de subjuntivo? (hablar, nosotros)', en: 'Which is the futuro de subjuntivo? (hablar, nosotros)' },
        options: ['hablaremos', 'hablaramos', 'habláremos'], answer: 2,
        explain: { ru: 'Hablaron → habla- + -remos, с ударением: habláremos. Hablaremos — обычное futuro.', en: 'Hablaron → habla- + -remos, with an accent: habláremos. Hablaremos is the ordinary future.' } },
      { prompt: { ru: 'Текст закона в архаичном стиле. Выберите форму.', en: 'A law written in archaic style. Choose the form.' }, es: 'Quien ___ cometido el delito será castigado.',
        options: ['hubo', 'hubiere', 'habrá'], answer: 1,
        explain: { ru: 'Сложная форма futuro de subjuntivo: hubiere + причастие. Сегодня сказали бы haya cometido.', en: 'The compound futuro de subjuntivo: hubiere + participle. Today you would say haya cometido.' } },
      { prompt: { ru: 'Как сегодня говорят вместо «cuando llegare el momento»?', en: 'What do people say today instead of “cuando llegare el momento”?' },
        options: ['cuando llegará el momento', 'cuando llegue el momento', 'cuando llegara el momento'], answer: 1,
        explain: { ru: 'Будущее после cuando — presente de subjuntivo: cuando llegue.', en: 'The future after cuando takes the present subjunctive: cuando llegue.' } },
      { prompt: { ru: 'Как сегодня звучит «Díjole el rey»?', en: 'How is “Díjole el rey” said today?' },
        options: ['Le dijo el rey', 'Le dirá el rey', 'Lo dice el rey'], answer: 0,
        explain: { ru: 'Díjole — старинное присоединение местоимения к спрягаемому глаголу: le dijo.', en: 'Díjole is the old pattern of attaching a pronoun to a conjugated verb: le dijo.' } },
      { prompt: { ru: 'Какая форма — futuro de subjuntivo? (ser, ellos)', en: 'Which is the futuro de subjuntivo? (ser, ellos)' },
        options: ['fueron', 'fueren', 'serán'], answer: 1,
        explain: { ru: 'Fueron → fue- + -ren: fueren.', en: 'Fueron → fue- + -ren: fueren.' } }
    ]
  },
  {
    id: 'c2-leismo-laismo', level: 'C2',
    title: { ru: 'Leísmo, laísmo, loísmo', en: 'Leísmo, laísmo, loísmo' },
    summary: { ru: 'Le или lo, la или le: норма, распространённые отклонения в Испании и что из них допускает академия.',
               en: 'Le or lo, la or le: the standard, common deviations heard in Spain and which of them the Academy accepts.' },
    sections: [
      {
        heading: { ru: 'Норма', en: 'The standard' },
        body: {
          ru: ['<b>Прямое дополнение</b> (кого? что?) — <b>lo, la, los, las</b> по роду и числу. <b>Косвенное</b> (кому?) — <b>le, les</b> для любого рода.',
               'Проверка: попробуйте сделать фразу пассивной. <i>Vi a Carmen → Carmen fue vista</i> — получилось, значит, Carmen — прямое дополнение: <i>la vi</i>. <i>Dije la verdad a Carmen</i> — Carmen в пассиве подлежащим не станет, это косвенное: <i>le dije la verdad</i>.',
               'Два местоимения подряд: <b>le / les + lo, la, los, las → se lo, se la…</b>: <i>Se lo di</i>, а не «le lo di».'],
          en: ['The <b>direct object</b> (whom? what?) is <b>lo, la, los, las</b> by gender and number. The <b>indirect object</b> (to whom?) is <b>le, les</b> for any gender.',
               'A test: try the passive. <i>Vi a Carmen → Carmen fue vista</i> works, so Carmen is the direct object: <i>la vi</i>. <i>Dije la verdad a Carmen</i> — Carmen can’t be the passive subject, so it is indirect: <i>le dije la verdad</i>.',
               'Two pronouns together: <b>le / les + lo, la, los, las → se lo, se la…</b>: <i>Se lo di</i>, not “le lo di”.']
        },
        table: {
          head: ['', 'masculino', 'femenino'],
          rows: [
            ['directo singular', 'lo', 'la'],
            ['directo plural', 'los', 'las'],
            ['indirecto singular', 'le', 'le'],
            ['indirecto plural', 'les', 'les'],
            ['indirecto + directo', 'se lo · se los', 'se la · se las']
          ]
        },
        examples: [
          { es: 'A Marta la conozco desde niña.', ru: 'Марту я знаю с детства.', en: 'I’ve known Marta since she was a child.' },
          { es: 'A Marta le regalé un libro.', ru: 'Марте я подарил книгу.', en: 'I gave Marta a book.' },
          { es: '¿El libro? Se lo di a Marta.', ru: 'Книгу? Я отдал её Марте.', en: 'The book? I gave it to Marta.' }
        ]
      },
      {
        heading: { ru: 'Leísmo: le вместо lo', en: 'Leísmo: le instead of lo' },
        body: {
          ru: ['<b>Leísmo</b> — le в роли прямого дополнения. Он очень распространён в центре и на севере Испании.',
               'Академия <b>допускает</b> только один вид: le вместо lo для <b>человека мужского рода в единственном числе</b>: <i>A tu hermano le conozco</i> (= <i>lo conozco</i>). Широко распространено и le при вежливом usted: <i>¿Le acompaño?</i>',
               '<b>Не допускается</b>: le для предметов (<i>«el coche le vendí»</i> → <i>lo vendí</i>) и для женщин (<i>«a Carmen le vi»</i> → <i>la vi</i>). Множественное <i>les</i> вместо <i>los</i> тоже не рекомендуется.'],
          en: ['<b>Leísmo</b> is using le as a direct object. It is very common in central and northern Spain.',
               'The Academy <b>accepts</b> only one kind: le instead of lo for a <b>male person in the singular</b>: <i>A tu hermano le conozco</i> (= <i>lo conozco</i>). Le with polite usted is also widespread: <i>¿Le acompaño?</i>',
               '<b>Not accepted</b>: le for things (<i>“el coche le vendí”</i> → <i>lo vendí</i>) or for women (<i>“a Carmen le vi”</i> → <i>la vi</i>). Plural <i>les</i> for <i>los</i> is also discouraged.']
        },
        examples: [
          { es: 'A Luis lo vi ayer. / A Luis le vi ayer.', ru: 'Луиса я видел вчера (оба варианта допустимы).', en: 'I saw Luis yesterday (both are accepted).' },
          { es: 'El coche lo vendí el año pasado.', ru: 'Машину я продал в прошлом году.', en: 'I sold the car last year.' }
        ]
      },
      {
        heading: { ru: 'Laísmo и loísmo: ошибки', en: 'Laísmo and loísmo: mistakes' },
        body: {
          ru: ['<b>Laísmo</b> — la вместо le для женщины в роли косвенного дополнения: <i>«La dije la verdad»</i> → правильно <i>Le dije la verdad</i>. Типичен для Мадрида и Кастилии, но считается ошибкой, особенно в письменной речи.',
               '<b>Loísmo</b> — lo вместо le: <i>«A Pedro lo dieron un premio»</i> → <i>Le dieron un premio</i>. Считается грубой ошибкой.',
               'Глаголы вроде <b>gustar, encantar, doler, interesar</b> всегда требуют le / les: <i>A mis hijas les encanta el mar</i>.'],
          en: ['<b>Laísmo</b> is la instead of le for a woman as the indirect object: <i>“La dije la verdad”</i> → correct: <i>Le dije la verdad</i>. It is typical of Madrid and Castile but counts as a mistake, especially in writing.',
               '<b>Loísmo</b> is lo instead of le: <i>“A Pedro lo dieron un premio”</i> → <i>Le dieron un premio</i>. It is considered a serious error.',
               'Verbs like <b>gustar, encantar, doler, interesar</b> always take le / les: <i>A mis hijas les encanta el mar</i>.']
        },
        examples: [
          { es: 'A mi madre le escribo cada semana.', ru: 'Маме я пишу каждую неделю.', en: 'I write to my mother every week.' },
          { es: 'A mis hermanas les duele la cabeza.', ru: 'У моих сестёр болит голова.', en: 'My sisters have a headache.' }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите местоимение', en: 'Choose the pronoun' }, es: 'A María ___ dije la verdad.',
        options: ['la', 'le', 'lo'], answer: 1,
        explain: { ru: 'Кому сказал — косвенное дополнение: le. La здесь — laísmo.', en: 'Told to whom — an indirect object: le. La here would be laísmo.' } },
      { prompt: { ru: 'Выберите местоимение', en: 'Choose the pronoun' }, es: '¿Has visto a Carmen? — Sí, ___ vi ayer.',
        options: ['le', 'lo', 'la'], answer: 2,
        explain: { ru: 'Кого видел — прямое дополнение, женщина: la. Le для женщины не допускается.', en: 'Saw whom — a direct object, a woman: la. Le is not accepted for women.' } },
      { prompt: { ru: 'Выберите местоимение', en: 'Choose the pronoun' }, es: '¿Dónde está el libro? — ___ he dejado en la mesa.',
        options: ['Lo', 'Le', 'La'], answer: 0,
        explain: { ru: 'Предмет мужского рода, прямое дополнение: lo. Le для предметов — ошибка.', en: 'A masculine thing as direct object: lo. Le for things is a mistake.' } },
      { prompt: { ru: 'Выберите местоимение', en: 'Choose the pronoun' }, es: 'A mis hermanas ___ regalé flores.',
        options: ['las', 'les', 'los'], answer: 1,
        explain: { ru: 'Кому подарил — косвенное дополнение во множественном: les.', en: 'Gave to whom — a plural indirect object: les.' } },
      { prompt: { ru: 'Выберите вариант', en: 'Choose the option' }, es: '¿Le diste el regalo a Juan? — Sí, ya ___ di.',
        options: ['le lo', 'lo le', 'se lo'], answer: 2,
        explain: { ru: 'Le + lo превращается в se lo.', en: 'Le + lo becomes se lo.' } },
      { prompt: { ru: 'В каком предложении laísmo (ошибка)?', en: 'Which sentence contains laísmo (a mistake)?' },
        options: ['La vi en el parque.', 'La escribí una carta a mi abuela.', 'Le escribí una carta a mi abuela.'], answer: 1,
        explain: { ru: 'Написал кому — бабушке, это косвенное дополнение: нужно le. La vi — правильно: видел её.', en: 'Wrote to whom — the grandmother, an indirect object: it needs le. La vi is correct: saw her.' } },
      { prompt: { ru: 'Какое предложение допускает норма академии?', en: 'Which sentence does the Academy’s standard accept?' },
        options: ['El coche le vendí ayer.', 'A tu hermana le conozco bien.', 'A tu hermano le conozco bien.'], answer: 2,
        explain: { ru: 'Допустим только leísmo для мужчины в единственном числе. Для предмета и для женщины — ошибка.', en: 'Only leísmo for a male person in the singular is accepted. For a thing or a woman it is a mistake.' } },
      { prompt: { ru: 'Выберите местоимение', en: 'Choose the pronoun' }, es: 'Las llaves ___ perdí ayer.',
        options: ['les', 'las', 'le'], answer: 1,
        explain: { ru: 'Предмет женского рода во множественном, прямое дополнение: las.', en: 'A feminine plural thing as direct object: las.' } },
      { prompt: { ru: 'Выберите местоимение', en: 'Choose the pronoun' }, es: 'A los niños ___ encanta el chocolate.',
        options: ['les', 'los', 'las'], answer: 0,
        explain: { ru: 'Encantar требует косвенного дополнения: les encanta.', en: 'Encantar takes an indirect object: les encanta.' } },
      { prompt: { ru: 'Выберите местоимение', en: 'Choose the pronoun' }, es: 'A Pedro ___ dieron un premio.',
        options: ['lo', 'le', 'la'], answer: 1,
        explain: { ru: 'Дали кому — косвенное дополнение: le. Lo здесь — loísmo.', en: 'Given to whom — an indirect object: le. Lo here would be loísmo.' } }
    ]
  }
]);
