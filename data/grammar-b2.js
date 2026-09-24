// B2 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('B2', [
  {
    id: 'b2-imperfecto-subjuntivo', level: 'B2',
    title: { ru: 'Imperfecto de subjuntivo', en: 'Imperfecto de subjuntivo' },
    summary: { ru: 'Прошедшее время сослагательного наклонения (hablara / hablase): как образуется и когда нужно.',
               en: 'The past subjunctive (hablara / hablase): how to form it and when you need it.' },
    sections: [
      {
        heading: { ru: 'Как образуется', en: 'How to form it' },
        body: {
          ru: ['Берём форму <b>ellos</b> в Pretérito indefinido и отрезаем <b>-ron</b>: <i>hablaron → habla-</i>, <i>comieron → comie-</i>. Добавляем окончания <b>-ra, -ras, -ra, -ramos, -rais, -ran</b>.',
               'Форма <b>nosotros</b> всегда с ударением на слог перед окончанием: <i>habláramos, comiéramos, viviéramos</i>.'],
          en: ['Take the <b>ellos</b> form of the Pretérito indefinido and drop <b>-ron</b>: <i>hablaron → habla-</i>, <i>comieron → comie-</i>. Add the endings <b>-ra, -ras, -ra, -ramos, -rais, -ran</b>.',
               'The <b>nosotros</b> form always has a written accent on the syllable before the ending: <i>habláramos, comiéramos, viviéramos</i>.']
        },
        table: {
          head: ['', 'hablar', 'comer', 'vivir'],
          rows: [
            ['yo', 'hablara', 'comiera', 'viviera'],
            ['tú', 'hablaras', 'comieras', 'vivieras'],
            ['él / ella / usted', 'hablara', 'comiera', 'viviera'],
            ['nosotros / nosotras', 'habláramos', 'comiéramos', 'viviéramos'],
            ['vosotros / vosotras', 'hablarais', 'comierais', 'vivierais'],
            ['ellos / ellas / ustedes', 'hablaran', 'comieran', 'vivieran']
          ]
        }
      },
      {
        heading: { ru: 'Неправильные глаголы', en: 'Irregular verbs' },
        body: {
          ru: ['Отдельных исключений нет: вся неправильность приходит из Indefinido. Если знаете <i>tuvieron, dijeron, fueron</i>, знаете и <i>tuviera, dijera, fuera</i>.',
               'Внимание: <i>dijeron → dijera</i> (не «dijiera»), <i>leyeron → leyera</i>. У <b>ser</b> и <b>ir</b> форма общая: <i>fuera</i>.'],
          en: ['There are no separate exceptions: all the irregularity comes from the Indefinido. If you know <i>tuvieron, dijeron, fueron</i>, you know <i>tuviera, dijera, fuera</i>.',
               'Watch out: <i>dijeron → dijera</i> (not “dijiera”), <i>leyeron → leyera</i>. <b>Ser</b> and <b>ir</b> share one form: <i>fuera</i>.']
        },
        table: {
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
            ['leer', 'leyeron', 'leyera']
          ]
        }
      },
      {
        heading: { ru: 'Формы на -ra и на -se', en: 'The -ra and -se forms' },
        body: {
          ru: ['У этого времени две равноправные формы: <i>hablara = hablase</i>, <i>tuviera = tuviese</i>. Окончания второй: <b>-se, -ses, -se, -semos, -seis, -sen</b>.',
               'В речи чаще звучит <b>-ra</b>, особенно в Латинской Америке; <b>-se</b> встречается в Испании и в письменных текстах. Выучите обе, чтобы узнавать их.'],
          en: ['This tense has two equivalent forms: <i>hablara = hablase</i>, <i>tuviera = tuviese</i>. The second set of endings is <b>-se, -ses, -se, -semos, -seis, -sen</b>.',
               'In speech <b>-ra</b> is more common, especially in Latin America; <b>-se</b> is heard in Spain and found in writing. Learn both so you recognise them.']
        }
      },
      {
        heading: { ru: 'Когда нужно', en: 'When to use it' },
        body: {
          ru: ['<b>Согласование времён.</b> Если глагол главной части в прошедшем или в condicional и требует субхунтива, в придаточной — Imperfecto de subjuntivo: <i>Quiero que vengas → Quería que vinieras</i>; <i>Me gustaría que vinieras</i>.',
               '<b>Нереальное.</b> После <b>como si</b> — всегда это время: <i>Habla como si lo supiera todo</i>. После <b>ojalá</b> — желание, которое вряд ли сбудется: <i>Ojalá estuvieras aquí</i>.',
               '<b>Вежливость.</b> <i>Quisiera</i> — мягче, чем <i>quiero</i>: <i>Quisiera hablar con el director</i>.'],
          en: ['<b>Sequence of tenses.</b> If the main verb is in a past tense or the conditional and calls for the subjunctive, the clause takes the Imperfecto de subjuntivo: <i>Quiero que vengas → Quería que vinieras</i>; <i>Me gustaría que vinieras</i>.',
               '<b>Unreal situations.</b> After <b>como si</b> this tense is always used: <i>Habla como si lo supiera todo</i>. After <b>ojalá</b> it marks a wish that is unlikely to come true: <i>Ojalá estuvieras aquí</i>.',
               '<b>Politeness.</b> <i>Quisiera</i> is softer than <i>quiero</i>: <i>Quisiera hablar con el director</i>.']
        },
        examples: [
          { es: 'Mis padres querían que estudiara Derecho.', ru: 'Родители хотели, чтобы я изучал право.', en: 'My parents wanted me to study law.' },
          { es: 'Me gustaría que me llamaras más a menudo.', ru: 'Мне бы хотелось, чтобы ты звонил мне чаще.', en: 'I’d like you to call me more often.' },
          { es: 'Nos miró como si no nos conociera.', ru: 'Он посмотрел на нас так, будто нас не знает.', en: 'He looked at us as if he didn’t know us.' },
          { es: 'Ojalá tuviera más tiempo libre.', ru: 'Вот бы у меня было больше свободного времени.', en: 'I wish I had more free time.' }
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
    summary: { ru: 'Реальное, нереальное в настоящем и нереальное в прошлом условие: какие времена ставить после si и в главной части.',
               en: 'Real, unreal present and unreal past conditions: which tenses go after si and in the main clause.' },
    sections: [
      {
        heading: { ru: 'Три типа', en: 'Three types' },
        body: {
          ru: ['<b>Тип 1 — реальное условие</b>: может случиться. <i>Si + presente</i>, в главной части — presente, futuro или повелительное наклонение.',
               '<b>Тип 2 — нереальное в настоящем</b> или маловероятное в будущем. <i>Si + Imperfecto de subjuntivo</i>, в главной части — condicional simple.',
               '<b>Тип 3 — нереальное в прошлом</b>: уже не случилось. <i>Si + Pluscuamperfecto de subjuntivo</i> (hubiera + причастие), в главной части — condicional compuesto (habría + причастие).'],
          en: ['<b>Type 1 — real condition</b>: it may happen. <i>Si + presente</i>; the main clause has the presente, futuro or an imperative.',
               '<b>Type 2 — unreal present</b> or unlikely future. <i>Si + Imperfecto de subjuntivo</i>; the main clause has the condicional simple.',
               '<b>Type 3 — unreal past</b>: it did not happen. <i>Si + Pluscuamperfecto de subjuntivo</i> (hubiera + participle); the main clause has the condicional compuesto (habría + participle).']
        },
        table: {
          head: ['tipo', 'si + …', 'resultado'],
          rows: [
            ['1 · real', 'presente: tengo', 'futuro: iré · imperativo: ve'],
            ['2 · irreal presente', 'imperf. subjuntivo: tuviera', 'condicional: iría'],
            ['3 · irreal pasado', 'hubiera + participio', 'habría + participio']
          ]
        },
        examples: [
          { es: "Si llueve, me quedaré en casa.", ru: "Если пойдёт дождь, я останусь дома.", en: "If it rains, I’ll stay at home." },
          { es: "Si tuviera dinero, viajaría.", ru: "Если бы у меня были деньги, я бы путешествовал.", en: "If I had money, I’d travel." },
          { es: "Si hubieras venido, te habrías divertido.", ru: "Если бы ты пришёл, тебе было бы весело.", en: "If you had come, you would have had fun." },
          { es: 'Si ves a Carmen, dale recuerdos.', ru: 'Если увидишь Кармен, передай ей привет.', en: 'If you see Carmen, say hi from me.' },
          { es: 'Si viviera cerca del mar, iría a nadar cada día.', ru: 'Если бы я жил у моря, я бы плавал каждый день.', en: 'If I lived near the sea, I’d go swimming every day.' },
          { es: 'Si me hubieras avisado, habría ido a buscarte.', ru: 'Если бы ты меня предупредил, я бы за тобой заехал.', en: 'If you had told me, I would have come to pick you up.' }
        ]
      },
      {
        heading: { ru: 'Форма hubiera + причастие', en: 'The form hubiera + participle' },
        body: {
          ru: ['Pluscuamperfecto de subjuntivo — это <b>haber</b> в Imperfecto de subjuntivo плюс причастие. В главной части типа 3 разговорная речь часто тоже ставит <i>hubiera</i>: <i>Si lo hubiera sabido, no lo hubiera hecho</i> — это правильно, как и <i>no lo habría hecho</i>.'],
          en: ['The Pluscuamperfecto de subjuntivo is <b>haber</b> in the Imperfecto de subjuntivo plus a participle. In the main clause of type 3, speech often uses <i>hubiera</i> as well: <i>Si lo hubiera sabido, no lo hubiera hecho</i> is correct, just like <i>no lo habría hecho</i>.']
        },
        table: {
          head: ['', 'si …', 'resultado'],
          rows: [
            ['yo', 'hubiera sabido', 'habría ido'],
            ['tú', 'hubieras sabido', 'habrías ido'],
            ['él / ella / usted', 'hubiera sabido', 'habría ido'],
            ['nosotros / nosotras', 'hubiéramos sabido', 'habríamos ido'],
            ['vosotros / vosotras', 'hubierais sabido', 'habríais ido'],
            ['ellos / ellas / ustedes', 'hubieran sabido', 'habrían ido']
          ]
        }
      },
      {
        heading: { ru: 'Смешанный тип и главная ловушка', en: 'Mixed type and the main trap' },
        body: {
          ru: ['<b>Смешанный тип</b>: условие в прошлом, результат — сейчас. <i>Si hubiera estudiado medicina, ahora sería médico</i>.',
               '<b>После si (в значении «если») не ставят ни futuro, ни condicional.</b> Нельзя «si tendré», «si tendría» — только <i>si tengo</i>, <i>si tuviera</i>. Исключение — si в значении «ли» в косвенном вопросе: <i>No sé si vendrá</i>.'],
          en: ['<b>Mixed type</b>: the condition is in the past, the result is now. <i>Si hubiera estudiado medicina, ahora sería médico</i>.',
               '<b>After si meaning “if”, never use the futuro or the condicional.</b> Not “si tendré” or “si tendría” — only <i>si tengo</i>, <i>si tuviera</i>. The exception is si meaning “whether” in an indirect question: <i>No sé si vendrá</i>.']
        },
        examples: [
          { es: 'Si hubiera dormido más, ahora no estaría tan cansado.', ru: 'Если бы я больше спал, сейчас я не был бы таким уставшим.', en: 'If I had slept more, I wouldn’t be so tired now.' },
          { es: 'Si yo fuera tú, no aceptaría ese trabajo.', ru: 'На твоём месте я бы не соглашался на эту работу.', en: 'If I were you, I wouldn’t take that job.' },
          { es: 'No sé si tendré tiempo mañana.', ru: 'Не знаю, будет ли у меня время завтра.', en: 'I don’t know whether I’ll have time tomorrow.' }
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
    summary: { ru: 'Fue construido por…, se venden pisos, se vive bien: три способа не называть того, кто действует.',
               en: 'Fue construido por…, se venden pisos, se vive bien: three ways to leave out who does the action.' },
    sections: [
      {
        heading: { ru: 'Пассив с ser', en: 'The passive with ser' },
        body: {
          ru: ['<b>Ser + причастие</b>, причастие согласуется с подлежащим в роде и числе: <i>La catedral fue construida en el siglo XIII</i>. Деятель вводится через <b>por</b>: <i>El Quijote fue escrito por Cervantes</i>.',
               'Эта конструкция звучит книжно: она типична для новостей, истории, науки. В разговоре испанцы предпочитают пассив с <b>se</b> или активный залог.'],
          en: ['<b>Ser + participle</b>; the participle agrees with the subject in gender and number: <i>La catedral fue construida en el siglo XIII</i>. The agent is introduced with <b>por</b>: <i>El Quijote fue escrito por Cervantes</i>.',
               'This construction sounds formal: it is typical of news, history and science. In conversation Spanish speakers prefer the <b>se</b> passive or the active voice.']
        },
        examples: [
          { es: 'La noticia fue publicada ayer por varios periódicos.', ru: 'Новость была опубликована вчера несколькими газетами.', en: 'The news was published yesterday by several newspapers.' },
          { es: 'Los ganadores serán anunciados el lunes.', ru: 'Победители будут объявлены в понедельник.', en: 'The winners will be announced on Monday.' }
        ]
      },
      {
        heading: { ru: 'Пассив с se (pasiva refleja)', en: 'The se passive (pasiva refleja)' },
        body: {
          ru: ['<b>Se + глагол в 3-м лице</b>; глагол согласуется с предметом: <i>Se vende piso</i> — <i>Se venden pisos</i>. Так пишут объявления, рецепты, инструкции.',
               'Деятеля при такой конструкции не называют: «se alquilan pisos por el dueño» — ошибка. Если нужен деятель, берите пассив с ser или актив.'],
          en: ['<b>Se + a third-person verb</b>; the verb agrees with the thing: <i>Se vende piso</i> — <i>Se venden pisos</i>. This is how ads, recipes and instructions are written.',
               'The agent is not mentioned in this construction: “se alquilan pisos por el dueño” is wrong. If you need the agent, use the ser passive or the active voice.']
        },
        examples: [
          { es: 'Se buscan camareros con experiencia.', ru: 'Требуются официанты с опытом.', en: 'Experienced waiters wanted.' },
          { es: 'En este restaurante se preparan las mejores tapas de la ciudad.', ru: 'В этом ресторане готовят лучшие тапас в городе.', en: 'The best tapas in town are made in this restaurant.' }
        ]
      },
      {
        heading: { ru: 'Безличное se', en: 'Impersonal se' },
        body: {
          ru: ['Когда предмета нет или речь о людях с предлогом <b>a</b>, глагол всегда в <b>единственном числе</b>: <i>En España se cena tarde</i>; <i>Aquí se vive bien</i>; <i>Se busca a los responsables</i>.',
               'Глагол + инфинитив тоже остаётся в единственном числе: <i>Se puede aparcar aquí</i>.'],
          en: ['When there is no object, or the object is people introduced with <b>a</b>, the verb is always <b>singular</b>: <i>En España se cena tarde</i>; <i>Aquí se vive bien</i>; <i>Se busca a los responsables</i>.',
               'A verb + infinitive also stays singular: <i>Se puede aparcar aquí</i>.']
        },
        table: {
          head: ['construcción', 'ejemplo'],
          rows: [
            ['ser + participio (+ por)', 'El puente fue inaugurado.'],
            ['se + verbo (singular)', 'Se vende coche.'],
            ['se + verbo (plural)', 'Se venden coches.'],
            ['se impersonal', 'Se trabaja mucho.'],
            ['se + verbo + a + personas', 'Se atiende a los clientes.'],
            ['estar + participio (estado)', 'La tienda está cerrada.']
          ]
        },
        examples: [
          { es: "El puente fue inaugurado por el alcalde.", ru: "Мост открыл мэр.", en: "The bridge was opened by the mayor." },
          { es: "Se trabaja mucho en esta empresa.", ru: "В этой компании много работают.", en: "People work hard in this company." },
          { es: "Se atiende a los clientes por orden.", ru: "Клиентов обслуживают по очереди.", en: "Customers are served in turn." },
          { es: 'En verano se duerme poco.', ru: 'Летом мало спят.', en: 'People sleep little in summer.' },
          { es: 'Se busca a los autores del robo.', ru: 'Разыскиваются авторы кражи.', en: 'The police are looking for the thieves.' }
        ]
      },
      {
        heading: { ru: 'Ser или estar + причастие', en: 'Ser or estar + participle' },
        body: {
          ru: ['<b>Ser</b> + причастие — действие: <i>La puerta fue abierta por el portero</i>. <b>Estar</b> + причастие — состояние, результат: <i>Cuando llegamos, la puerta ya estaba abierta</i>.'],
          en: ['<b>Ser</b> + participle is an action: <i>La puerta fue abierta por el portero</i>. <b>Estar</b> + participle is a state, a result: <i>Cuando llegamos, la puerta ya estaba abierta</i>.']
        }
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
    summary: { ru: 'Как пересказать чужие слова, вопросы и просьбы: сдвиг времён, si и вопросительные слова, указания места и времени.',
               en: 'How to report what someone said, asked or requested: tense shifts, si and question words, words for place and time.' },
    sections: [
      {
        heading: { ru: 'Когда времена сдвигаются', en: 'When tenses shift' },
        body: {
          ru: ['Если вводящий глагол в <b>настоящем</b> (<i>dice, pregunta</i>), время не меняется: <i>«Estoy cansada» → Dice que está cansada</i>.',
               'Если вводящий глагол в <b>прошедшем</b> (<i>dijo, me preguntó</i>), времена обычно сдвигаются на шаг назад. Если сказанное всё ещё верно, настоящее можно сохранить: <i>Me dijo que vive en Madrid</i> (и сейчас живёт). Когда ситуация уже в прошлом, сдвиг обязателен.'],
          en: ['If the reporting verb is in the <b>present</b> (<i>dice, pregunta</i>), the tense does not change: <i>“Estoy cansada” → Dice que está cansada</i>.',
               'If the reporting verb is <b>past</b> (<i>dijo, me preguntó</i>), tenses usually move one step back. If what was said is still true, the present may stay: <i>Me dijo que vive en Madrid</i> (and still does). When the situation is over, the shift is required.']
        },
        table: {
          head: ['directo', 'indirecto (dijo que…)'],
          rows: [
            ['presente: estoy', 'imperfecto: estaba'],
            ['indefinido: fui', 'pluscuamperfecto: había ido'],
            ['perfecto: he hecho', 'pluscuamperfecto: había hecho'],
            ['futuro: llamaré', 'condicional: llamaría'],
            ['imperativo: cierra', 'imperf. subjuntivo: cerrara'],
            ['pres. subjuntivo: ayudes', 'imperf. subjuntivo: ayudara'],
            ['imperfecto · condicional', 'no cambian'],
            ['pluscuamperfecto', 'no cambia']
          ]
        },
        examples: [
          { es: "«Fui al médico.» → Dijo que había ido al médico.", ru: "«Я ходил к врачу». → Он сказал, что ходил к врачу.", en: "“I went to the doctor.” → He said he had been to the doctor." },
          { es: "«Te llamaré.» → Dijo que me llamaría.", ru: "«Я тебе позвоню». → Он сказал, что позвонит мне.", en: "“I’ll call you.” → He said he would call me." },
          { es: "«Quiero que me ayudes.» → Dijo que quería que lo ayudara.", ru: "«Я хочу, чтобы ты мне помог». → Он сказал, что хочет, чтобы я ему помог.", en: "“I want you to help me.” → He said he wanted me to help him." },
          { es: '«Estoy cansada.» → Dijo que estaba cansada.', ru: '«Я устала». → Она сказала, что устала.', en: '“I’m tired.” → She said she was tired.' },
          { es: '«He terminado.» → Dijo que había terminado.', ru: '«Я закончил». → Он сказал, что закончил.', en: '“I’ve finished.” → He said he had finished.' },
          { es: '«Cierra la puerta.» → Me dijo que cerrara la puerta.', ru: '«Закрой дверь». → Он велел мне закрыть дверь.', en: '“Close the door.” → He told me to close the door.' }
        ]
      },
      {
        heading: { ru: 'Вопросы и просьбы', en: 'Questions and requests' },
        body: {
          ru: ['Вопрос «да/нет» вводится через <b>si</b>: <i>«¿Tienes hambre?» → Me preguntó si tenía hambre</i>. Вопрос со словом сохраняет это слово с ударением: <i>«¿Dónde vives?» → Me preguntó dónde vivía</i>.',
               'Приказ или просьба превращаются в <b>que + субхунтив</b>: <i>«Ven pronto» → Me pidió que fuera pronto</i>. Глаголы: <i>decir, pedir, ordenar, aconsejar, rogar</i>.',
               'Внимание: <i>Me dijo que venía</i> — «сказал, что придёт» (сообщение), а <i>Me dijo que viniera</i> — «велел мне прийти» (просьба).'],
          en: ['A yes/no question is introduced with <b>si</b>: <i>“¿Tienes hambre?” → Me preguntó si tenía hambre</i>. A question with a question word keeps that word, with its accent: <i>“¿Dónde vives?” → Me preguntó dónde vivía</i>.',
               'An order or request becomes <b>que + subjunctive</b>: <i>“Ven pronto” → Me pidió que fuera pronto</i>. Verbs: <i>decir, pedir, ordenar, aconsejar, rogar</i>.',
               'Note: <i>Me dijo que venía</i> means “he said he was coming” (information), while <i>Me dijo que viniera</i> means “he told me to come” (a request).']
        },
        examples: [
          { es: 'El médico me preguntó si fumaba.', ru: 'Врач спросил меня, курю ли я.', en: 'The doctor asked me if I smoked.' },
          { es: 'Le pregunté cuánto costaba la entrada.', ru: 'Я спросил его, сколько стоит билет.', en: 'I asked him how much the ticket cost.' },
          { es: 'Mi jefa me pidió que llegara antes.', ru: 'Начальница попросила меня прийти пораньше.', en: 'My boss asked me to arrive earlier.' }
        ]
      },
      {
        heading: { ru: 'Место, время, лицо', en: 'Place, time and person' },
        body: {
          ru: ['Если пересказываем в другом месте или в другой день, меняются и указатели: <i>hoy → aquel día</i>, <i>mañana → al día siguiente</i>, <i>ayer → el día anterior</i>, <i>aquí → allí</i>, <i>este → ese / aquel</i>, <i>venir → ir</i>, <i>traer → llevar</i>. Меняются и лица: <i>«mi coche» → su coche</i>.'],
          en: ['If we report in another place or on another day, the pointing words change too: <i>hoy → aquel día</i>, <i>mañana → al día siguiente</i>, <i>ayer → el día anterior</i>, <i>aquí → allí</i>, <i>este → ese / aquel</i>, <i>venir → ir</i>, <i>traer → llevar</i>. The persons change as well: <i>“mi coche” → su coche</i>.']
        },
        examples: [
          { es: '«Volveré mañana.» → Dijo que volvería al día siguiente.', ru: '«Я вернусь завтра». → Он сказал, что вернётся на следующий день.', en: '“I’ll be back tomorrow.” → He said he would be back the next day.' },
          { es: '«Aquí se come muy bien.» → Dijo que allí se comía muy bien.', ru: '«Здесь очень хорошо кормят». → Он сказал, что там очень хорошо кормят.', en: '“The food here is very good.” → He said the food there was very good.' }
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
    summary: { ru: 'Три типа придаточных — после глаголов мнения и чувства, после que у существительного и после cuando — и как в них выбрать наклонение.',
               en: 'Three kinds of clauses — after verbs of opinion and feeling, relative clauses and clauses with cuando — and how to choose the mood in each.' },
    sections: [
      {
        heading: { ru: 'Главный принцип', en: 'The main principle' },
        body: {
          ru: ['<b>Indicativo</b> утверждает: говорящий сообщает факт или то, что считает правдой. <b>Subjuntivo</b> не утверждает: желание, сомнение, оценка, ещё не случившееся или неизвестное.',
               'Проверка: можно ли переспросить «это правда?». <i>Creo que viene</i> — да, это утверждение. <i>Quiero que venga</i> — нет, это желание.'],
          en: ['The <b>indicative</b> asserts: the speaker states a fact or what they believe is true. The <b>subjunctive</b> does not assert: it expresses wishes, doubt, evaluation, things not yet real or unknown.',
               'A test: can you ask “is that true?”. <i>Creo que viene</i> — yes, it is a statement. <i>Quiero que venga</i> — no, it is a wish.']
        },
        table: {
          head: ['', 'indicativo', 'subjuntivo'],
          rows: [
            ['opinión', 'Creo que tiene razón.', 'No creo que tenga razón.'],
            ['certeza · duda', 'Es verdad que llueve.', 'Dudo que llueva.'],
            ['sentimiento · valoración', '—', 'Me alegra que estés aquí.'],
            ['posibilidad', '—', 'Es posible que nieve.'],
            ['relativo', 'Tengo un piso que tiene luz.', 'Busco un piso que tenga luz.'],
            ['tiempo', 'Cuando llego a casa, ceno.', 'Cuando llegue a casa, cenaré.']
          ]
        }
      },
      {
        heading: { ru: 'Мнение, уверенность, чувство', en: 'Opinion, certainty, feelings' },
        body: {
          ru: ['<b>Creer, pensar, parecer, estar seguro, es verdad, es evidente</b> + indicativo. С отрицанием (<i>no creo que, no es verdad que</i>) — subjuntivo.',
               '<b>Чувства и оценки</b> (<i>me alegra, me molesta, es normal, es importante, es posible</i>) — всегда subjuntivo, даже если это факт: <i>Me alegra que hayas venido</i>.'],
          en: ['<b>Creer, pensar, parecer, estar seguro, es verdad, es evidente</b> + indicative. In the negative (<i>no creo que, no es verdad que</i>) — subjunctive.',
               '<b>Feelings and evaluations</b> (<i>me alegra, me molesta, es normal, es importante, es posible</i>) always take the subjunctive, even for facts: <i>Me alegra que hayas venido</i>.']
        },
        examples: [
          { es: 'Es evidente que el plan no funciona.', ru: 'Очевидно, что план не работает.', en: 'It’s obvious that the plan isn’t working.' },
          { es: 'No pienso que sea una buena idea.', ru: 'Не думаю, что это хорошая идея.', en: 'I don’t think it’s a good idea.' },
          { es: 'Me molesta que no me escuches.', ru: 'Меня раздражает, что ты меня не слушаешь.', en: 'It annoys me that you don’t listen to me.' }
        ]
      },
      {
        heading: { ru: 'Придаточные с que после существительного', en: 'Relative clauses' },
        body: {
          ru: ['Если предмет или человек <b>известен и существует</b> — indicativo: <i>Tengo una vecina que habla cinco idiomas</i>.',
               'Если он <b>неизвестен, ищется или его нет</b> — subjuntivo: <i>Busco un piso que tenga terraza</i>; <i>No hay nadie que sepa ruso</i>.'],
          en: ['If the thing or person is <b>known and exists</b> — indicative: <i>Tengo una vecina que habla cinco idiomas</i>.',
               'If it is <b>unknown, being looked for or does not exist</b> — subjunctive: <i>Busco un piso que tenga terraza</i>; <i>No hay nadie que sepa ruso</i>.']
        },
        examples: [
          { es: "Tengo un amigo que habla chino.", ru: "У меня есть друг, который говорит по-китайски.", en: "I have a friend who speaks Chinese." },
          { es: "Busco a alguien que hable chino.", ru: "Я ищу кого-нибудь, кто говорит по-китайски.", en: "I’m looking for someone who speaks Chinese." },
          { es: 'Necesito un ayudante que sepa programar.', ru: 'Мне нужен помощник, который умеет программировать.', en: 'I need an assistant who can code.' },
          { es: 'Trabajo con una chica que sabe programar.', ru: 'Я работаю с девушкой, которая умеет программировать.', en: 'I work with a girl who can code.' }
        ]
      },
      {
        heading: { ru: 'Cuando и другие слова времени', en: 'Cuando and other time words' },
        body: {
          ru: ['<b>Cuando, en cuanto, hasta que, mientras</b>: привычное действие или прошлое — indicativo; будущее — subjuntivo. Futuro после cuando не ставят: <i>Cuando llegue</i>, а не «cuando llegaré».',
               '<b>Antes de que</b> — всегда subjuntivo: <i>Vete antes de que llueva</i>.'],
          en: ['<b>Cuando, en cuanto, hasta que, mientras</b>: a habit or a past event — indicative; the future — subjunctive. Never use the futuro after cuando: <i>Cuando llegue</i>, not “cuando llegaré”.',
               '<b>Antes de que</b> always takes the subjunctive: <i>Vete antes de que llueva</i>.']
        },
        examples: [
          { es: 'Cuando era niño, vivía en un pueblo.', ru: 'Когда я был ребёнком, я жил в деревне.', en: 'When I was a child, I lived in a village.' },
          { es: 'En cuanto termine, te aviso.', ru: 'Как только закончу, дам тебе знать.', en: 'As soon as I finish, I’ll let you know.' }
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
