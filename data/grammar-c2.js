// C2 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('C2', [
  {
    id: 'c2-modo-contraste', level: 'C2',
    title: { ru: 'Indicativo и subjuntivo: одна фраза, два смысла', en: 'Indicative vs subjunctive: one sentence, two meanings' },
    hero: {
      es: 'Indicativo <b>o</b> Subjuntivo',
      sub: { ru: 'Одна фраза — два смысла: когда наклонение меняет значение глагола, союза и придаточного',
             en: 'One sentence, two meanings: when the mood changes what a verb, a conjunction or a clause means' }
    },
    tabs: [
      {
        id: 'verbs', label: { ru: 'Глаголы', en: 'Verbs' },
        blocks: [
          { type: 'text', heading: { ru: 'Один глагол — два значения', en: 'One verb, two meanings' }, body: {
            ru: ['У ряда глаголов два значения, и наклонение показывает, какое из них имеется в виду. <b>Decir, escribir, avisar, insistir en</b>: с indicativo — сообщение («говорит, что…»), с subjuntivo — приказ или требование («велит, чтобы…»).',
                 '<b>Sentir</b>: с indicativo — «чувствовать, замечать», с subjuntivo — «сожалеть». <b>Comprender, entender</b>: с indicativo — «понимать, осознавать факт», с subjuntivo — «находить естественным, оправдывать».',
                 '<b>Согласование времён.</b> Если главный глагол в прошедшем, subjuntivo переходит в imperfecto: <i>Dice que vengas → Dijo que vinieras</i>. Indicativo меняется как в обычной косвенной речи: <i>Dice que viene → Dijo que venía</i>.'],
            en: ['Some verbs have two meanings, and the mood shows which one is intended. <b>Decir, escribir, avisar, insistir en</b>: with the indicative they report (“says that…”), with the subjunctive they order or demand (“tells someone to…”).',
                 '<b>Sentir</b>: with the indicative it means “to feel, to sense”, with the subjunctive “to be sorry”. <b>Comprender, entender</b>: with the indicative “to realise a fact”, with the subjunctive “to find it natural, to sympathise”.',
                 '<b>Sequence of tenses.</b> If the main verb is in the past, the subjunctive moves to the imperfect: <i>Dice que vengas → Dijo que vinieras</i>. The indicative shifts as in ordinary reported speech: <i>Dice que viene → Dijo que venía</i>.'] } },
          { type: 'rules', heading: { ru: 'Как отличить', en: 'How to tell them apart' }, items: [
            { color: 'blue', label: { ru: 'Modo', en: 'Modo' }, title: { ru: 'Indicativo — сообщаю, замечаю', en: 'Indicativo — I report, I notice' }, es: 'Dice que viene.',
              body: { ru: 'Придаточное — <b>информация</b>: что-то есть, было или будет. Глагол можно заменить на <i>informar, percibir, darse cuenta</i>.',
                      en: 'The clause is <b>information</b>: something is, was or will be so. The verb could be replaced with <i>informar, percibir, darse cuenta</i>.' } },
            { color: 'coral', label: { ru: 'Modo', en: 'Modo' }, title: { ru: 'Subjuntivo — требую, оцениваю', en: 'Subjuntivo — I demand, I evaluate' }, es: 'Dice que venga.',
              body: { ru: 'Придаточное — <b>воля или отношение</b>: приказ, просьба, сожаление, сочувствие. Замена: <i>ordenar, pedir, lamentar, verlo lógico</i>.',
                      en: 'The clause expresses <b>will or attitude</b>: an order, a request, regret, sympathy. Paraphrase: <i>ordenar, pedir, lamentar, verlo lógico</i>.' } }
          ] },
          { type: 'table', heading: { ru: 'Глагол и два его значения', en: 'Each verb, two meanings' },
            head: ['verbo', '+ indicativo', '+ subjuntivo'],
            rows: [
              ['decir', 'informar', 'ordenar'],
              ['escribir · avisar', 'informar', 'pedir'],
              ['insistir en', 'afirmar', 'exigir'],
              ['sentir', 'percibir', 'lamentar'],
              ['comprender · entender', 'darse cuenta', 'verlo lógico'],
              ['temer(se)', 'dar una mala noticia', 'tener miedo'],
              ['parecer', 'dar la impresión', 'valorar'],
              ['recordar', 'informar', 'pedir']
            ] },
          { type: 'text', color: 'amber', heading: { ru: 'Ещё три пары', en: 'Three more pairs' }, body: {
            ru: ['<i>Me temo que</i> + indicativo — вежливое «боюсь, что…» перед неприятной новостью; <i>temo que</i> + subjuntivo — настоящий страх. <i>Parece que</i> + indicativo — «кажется, похоже»; <i>me parece bien / mal / lógico que</i> + subjuntivo — оценка. <i>Recordar que</i> + indicativo — напомнить о факте; <i>recordar a alguien que</i> + subjuntivo — напомнить, чтобы сделал.'],
            en: ['<i>Me temo que</i> + indicative is a polite “I’m afraid that…” before bad news; <i>temo que</i> + subjunctive is real fear. <i>Parece que</i> + indicative means “it seems”; <i>me parece bien / mal / lógico que</i> + subjunctive is an evaluation. <i>Recordar que</i> + indicative reminds someone of a fact; <i>recordar a alguien que</i> + subjunctive reminds them to do something.'] } },
          { type: 'conj', heading: { ru: 'Одна фраза — два наклонения', en: 'One phrase, two moods' }, verbs: [
            { inf: 'decir', tr: { ru: 'сообщить / велеть', en: 'to report / to tell to' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['informar', 'Dice que <b>hace</b> frío fuera.'], ['pasado', 'Dijo que <b>hacía</b> frío fuera.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['ordenar', 'Dice que te <b>abrigues</b>.'], ['pasado', 'Dijo que te <b>abrigaras</b>.']] }
            ] },
            { inf: 'sentir', tr: { ru: 'чувствовать / сожалеть', en: 'to sense / to be sorry' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['percibir', 'Siento que <b>tiembla</b> el suelo.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['lamentar', 'Siento que no <b>hayáis podido</b> venir.']] }
            ] },
            { inf: 'entender', tr: { ru: 'осознаю / сочувствую', en: 'I realise / I sympathise' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['darse cuenta', 'Entiendo que el plazo <b>termina</b> hoy.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['verlo lógico', 'Entiendo que no <b>quieras</b> hablar de ello.']] }
            ] },
            { inf: 'temer(se)', tr: { ru: 'плохая новость / страх', en: 'bad news / fear' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['me temo que', 'Me temo que no <b>quedan</b> entradas.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['temo que', 'Temo que no <b>queden</b> entradas.']] }
            ] },
            { inf: 'parecer', tr: { ru: 'впечатление / оценка', en: 'impression / evaluation' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['parece que', 'Parece que <b>va</b> a llover.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['me parece bien', 'Me parece bien que <b>vayas</b>.']] }
            ] },
            { inf: 'recordar', tr: { ru: 'факт / просьба', en: 'a fact / a request' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['informar', 'Te recuerdo que mañana <b>hay</b> reunión.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['pedir', 'Recuérdale que <b>traiga</b> el informe.']] }
            ] }
          ] },
          { type: 'tip', title: { ru: 'Проверка перефразом', en: 'The paraphrase test' }, body: {
            ru: ['Подставьте вместо глагола синоним: <i>informar, percibir, darse cuenta</i> → <b>indicativo</b>; <i>ordenar, pedir, lamentar, verlo lógico</i> → <b>subjuntivo</b>.',
                 'В значении приказа у <i>decir</i> обычно есть адресат, который должен что-то сделать: <i>Dile a Juan que venga</i> — «Скажи Хуану, чтобы пришёл».'],
            en: ['Swap the verb for a synonym: <i>informar, percibir, darse cuenta</i> → <b>indicative</b>; <i>ordenar, pedir, lamentar, verlo lógico</i> → <b>subjunctive</b>.',
                 'When <i>decir</i> is an order, there is usually someone who has to act: <i>Dile a Juan que venga</i> — “Tell Juan to come”.'] } }
        ]
      },
      {
        id: 'conjunctions', label: { ru: 'Союзы', en: 'Conjunctions' },
        blocks: [
          { type: 'text', heading: { ru: 'Один союз — два значения', en: 'One conjunction, two meanings' }, body: {
            ru: ['<b>Como</b> в начале фразы: с indicativo — причина («так как»), с subjuntivo — условие, часто угроза («если только»): <i>Como no vienes, me voy</i> — «раз ты не идёшь»; <i>Como no vengas, me voy</i> — «если не придёшь, я уйду».',
                 '<b>Mientras</b>: с indicativo — «пока, в то время как», с subjuntivo — «при условии что, до тех пор пока»: <i>Mientras vivas aquí, cumplirás mis normas</i>.',
                 '<b>Siempre que</b>: с indicativo — «каждый раз, когда», с subjuntivo — «при условии, что». <b>De modo que, de manera que</b>: с indicativo — результат («так что»), с subjuntivo — цель («так, чтобы»).',
                 '<b>Aunque</b>: с indicativo — уступка факту, который мы сообщаем («хотя»); с subjuntivo — гипотеза («даже если») или факт, известный обоим, но неважный для говорящего. <b>No porque… sino porque</b>: отвергнутая причина стоит в subjuntivo.'],
            en: ['<b>Como</b> at the start of a sentence: with the indicative it gives a reason (“since”), with the subjunctive a condition, often a threat (“if…”): <i>Como no vienes, me voy</i> — “since you’re not coming”; <i>Como no vengas, me voy</i> — “if you don’t come, I’m leaving”.',
                 '<b>Mientras</b>: with the indicative “while”, with the subjunctive “as long as”: <i>Mientras vivas aquí, cumplirás mis normas</i>.',
                 '<b>Siempre que</b>: with the indicative “whenever, every time”, with the subjunctive “provided that”. <b>De modo que, de manera que</b>: with the indicative a result (“so”), with the subjunctive a purpose (“so that”).',
                 '<b>Aunque</b>: with the indicative it concedes a fact that we are stating (“although”); with the subjunctive it is a hypothesis (“even if”) or a fact both speakers know but which does not matter to the speaker. <b>No porque… sino porque</b>: a rejected reason takes the subjunctive.'] } },
          { type: 'table', heading: { ru: 'Союз и два его значения', en: 'Each conjunction, two meanings' },
            head: ['', '+ indicativo', '+ subjuntivo'],
            rows: [
              ['como', 'causa', 'condición'],
              ['mientras', 'a la vez', 'condición'],
              ['siempre que', 'cada vez', 'con tal de que'],
              ['de modo que', 'resultado', 'finalidad'],
              ['aunque', 'hecho', 'hipótesis'],
              ['porque', 'causa', 'no porque…']
            ] },
          { type: 'conj', heading: { ru: 'Один союз — два наклонения', en: 'One conjunction, two moods' }, verbs: [
            { inf: 'como', tr: { ru: 'раз уж / если только', en: 'since / if' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['causa', 'Como <b>llueve</b>, nos quedamos en casa.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['condición', 'Como <b>llueva</b>, nos quedamos en casa.']] }
            ] },
            { inf: 'mientras', tr: { ru: 'пока / при условии', en: 'while / as long as' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['a la vez', 'Mientras tú <b>duermes</b>, yo trabajo.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['condición', 'Mientras no me <b>mientas</b>, te ayudaré.']] }
            ] },
            { inf: 'siempre que', tr: { ru: 'каждый раз / при условии', en: 'whenever / provided that' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['cada vez', 'Siempre que <b>viene</b>, trae flores.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['condición', 'Te lo presto siempre que me lo <b>devuelvas</b>.']] }
            ] },
            { inf: 'de modo que', tr: { ru: 'так что / так, чтобы', en: 'so / so that' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['resultado', 'Habló alto, de modo que todos lo <b>oyeron</b>.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['finalidad', 'Habla alto de modo que todos te <b>oigan</b>.']] }
            ] },
            { inf: 'aunque', tr: { ru: 'хотя / даже если', en: 'although / even if' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['hecho', 'Aunque <b>está</b> cansado, sigue trabajando.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['hipótesis', 'Aunque <b>esté</b> cansado, lo terminará.'], ['sin peso', 'Aunque <b>sea</b> tu jefe, no puede gritarte.']] }
            ] },
            { inf: 'porque', tr: { ru: 'причина / не потому что', en: 'because / not because' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['causa', 'Lo hago porque me <b>gusta</b>.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['causa negada', 'No lo hago porque me <b>guste</b>, sino porque debo.']] }
            ] }
          ] },
          { type: 'text', color: 'coral', heading: { ru: 'Где выбора нет', en: 'Where there is no choice' }, body: {
            ru: ['<b>Sin que, antes de que, para que</b> требуют subjuntivo всегда — даже когда речь о реальном факте: <i>Salió sin que nadie lo viera</i>. Здесь наклонение ничего не различает, и indicativo будет ошибкой.'],
            en: ['<b>Sin que, antes de que, para que</b> always take the subjunctive — even for a real fact: <i>Salió sin que nadie lo viera</i>. Here the mood distinguishes nothing, and the indicative would be a mistake.'] } },
          { type: 'markers', heading: { ru: 'Союзы без выбора', en: 'Conjunctions with no choice' }, groups: [
            { color: 'coral', title: { ru: 'Всегда subjuntivo', en: 'Always subjunctive' }, tags: ['sin que', 'antes de que', 'para que', 'a fin de que', 'con tal de que', 'a no ser que', 'a menos que', 'en caso de que'] },
            { color: 'blue', title: { ru: 'Всегда indicativo', en: 'Always indicative' }, tags: ['ya que', 'puesto que', 'dado que', 'visto que', 'pues'] }
          ] }
        ]
      },
      {
        id: 'relatives', label: { ru: 'Придаточные', en: 'Clauses' },
        blocks: [
          { type: 'text', heading: { ru: 'Известное или любое', en: 'Known or any' }, body: {
            ru: ['<b>Lo que, el que, donde</b>: с indicativo — известное, с subjuntivo — любое, ещё неизвестное: <i>Haré lo que dices</i> (я слышал, что ты говоришь) / <i>Haré lo que digas</i> (что бы ты ни сказал).',
                 'Так же ведут себя <b>quien, como</b> и придаточные при существительном. Если человек или предмет <b>известен и точно существует</b> — indicativo; если его ещё ищут, подойдёт любой или его, возможно, нет — subjuntivo.'],
            en: ['<b>Lo que, el que, donde</b>: with the indicative something known, with the subjunctive anything, still unknown: <i>Haré lo que dices</i> (I’ve heard what you say) / <i>Haré lo que digas</i> (whatever you say).',
                 '<b>Quien, como</b> and clauses that describe a noun work the same way. If the person or thing is <b>known and certainly exists</b>, use the indicative; if it is still being sought, any one will do, or it may not exist, use the subjunctive.'] } },
          { type: 'table', heading: { ru: 'Что выбирает наклонение', en: 'What decides the mood' },
            head: ['', '+ indicativo', '+ subjuntivo'],
            rows: [
              ['lo que · el que', 'algo conocido', 'cualquier cosa'],
              ['donde', 'lugar conocido', 'cualquier lugar'],
              ['quien', 'persona concreta', 'cualquier persona'],
              ['como', 'modo conocido', 'cualquier modo'],
              ['nombre + que', 'existe, lo conozco', 'no sé si existe'],
              ['nadie · ningún… que', '—', 'siempre']
            ] },
          { type: 'conj', heading: { ru: 'Одно слово — два наклонения', en: 'One word, two moods' }, verbs: [
            { inf: 'lo que', tr: { ru: 'то, что / всё, что', en: 'what / whatever' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['conocido', 'Compra lo que <b>pone</b> en la lista.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['cualquiera', 'Compra lo que te <b>apetezca</b>.']] }
            ] },
            { inf: 'donde', tr: { ru: 'там, где / где угодно', en: 'where / wherever' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['conocido', 'Aparca donde <b>aparcamos</b> ayer.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['cualquiera', 'Aparca donde <b>puedas</b>.']] }
            ] },
            { inf: 'quien', tr: { ru: 'тот, кто / кто бы ни', en: 'the one who / whoever' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['concreto', 'Quien lo <b>ha dicho</b> es mi jefe.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['cualquiera', 'Quien lo <b>diga</b> miente.']] }
            ] },
            { inf: 'como', tr: { ru: 'так, как / как угодно', en: 'the way / however' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['conocido', 'Lo haré como me <b>explicaste</b>.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['cualquiera', 'Hazlo como <b>prefieras</b>.']] }
            ] },
            { inf: 'alguien · nadie que', tr: { ru: 'есть / ищу / нет', en: 'exists / sought / none' }, variants: [
              { label: 'Indicativo', color: 'blue', rows: [['existe', 'Tengo un vecino que <b>habla</b> chino.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['se busca', 'Necesito a alguien que <b>hable</b> chino.'], ['no existe', 'Aquí no hay nadie que <b>hable</b> chino.']] }
            ] }
          ] },
          { type: 'text', color: 'coral', heading: { ru: 'Никто и ничто', en: 'Nobody and nothing' }, body: {
            ru: ['<b>Отрицаемое или несуществующее</b> — только subjuntivo: <i>No hay nadie que lo sepa</i>, <i>No conozco ningún bar que abra a esta hora</i>. Indicativo здесь — ошибка.'],
            en: ['<b>Something denied or non-existent</b> takes only the subjunctive: <i>No hay nadie que lo sepa</i>, <i>No conozco ningún bar que abra a esta hora</i>. The indicative here is a mistake.'] } }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Глаголы: сообщение или воля', en: 'Verbs: report or will' }, items: [
            { badge: 'I', color: 'blue', es: 'Dice que <b>vienes</b> mañana.', ru: 'Он говорит, что ты придёшь завтра.', en: 'He says you’re coming tomorrow.' },
            { badge: 'S', color: 'coral', es: 'Dice que <b>vengas</b> mañana.', ru: 'Он велит тебе прийти завтра.', en: 'He says you should come tomorrow.' },
            { badge: 'I', color: 'blue', es: 'Me escribió que <b>llegaba</b> el lunes.', ru: 'Он написал мне, что приезжает в понедельник.', en: 'He wrote to tell me he was arriving on Monday.' },
            { badge: 'S', color: 'coral', es: 'Me escribió que <b>llegara</b> el lunes.', ru: 'Он написал мне, чтобы я приехал в понедельник.', en: 'He wrote telling me to arrive on Monday.' },
            { badge: 'I', color: 'blue', es: 'Siento que me <b>miran</b>.', ru: 'Я чувствую, что на меня смотрят.', en: 'I can feel people looking at me.' },
            { badge: 'S', color: 'coral', es: 'Siento que <b>estés</b> mal.', ru: 'Мне жаль, что тебе плохо.', en: 'I’m sorry you’re not well.' },
            { badge: 'S', color: 'coral', es: 'Siento que te <b>hayas enterado</b> así.', ru: 'Жаль, что ты узнал об этом вот так.', en: 'I’m sorry you found out like that.' },
            { badge: 'I', color: 'blue', es: 'Insiste en que <b>es</b> inocente.', ru: 'Он настаивает на том, что невиновен.', en: 'He insists that he is innocent.' },
            { badge: 'S', color: 'coral', es: 'Insiste en que <b>vengamos</b>.', ru: 'Он настаивает, чтобы мы пришли.', en: 'He insists that we come.' },
            { badge: 'I', color: 'blue', es: 'Los vecinos insisten en que el ruido <b>viene</b> de nuestro piso.', ru: 'Соседи утверждают, что шум идёт из нашей квартиры.', en: 'The neighbours insist that the noise is coming from our flat.' },
            { badge: 'S', color: 'coral', es: 'Mi médico insiste en que <b>deje</b> el tabaco.', ru: 'Врач настаивает, чтобы я бросил курить.', en: 'My doctor insists that I give up smoking.' },
            { badge: 'I', color: 'blue', es: 'Comprendo que no <b>hay</b> otra salida.', ru: 'Я понимаю, что другого выхода нет.', en: 'I realise there is no other way out.' },
            { badge: 'S', color: 'coral', es: 'Comprendo que <b>estés</b> enfadado.', ru: 'Я понимаю, почему ты сердишься.', en: 'I understand why you’re angry.' },
            { badge: 'I', color: 'blue', es: 'Te aviso de que el museo <b>cierra</b> los lunes.', ru: 'Предупреждаю: по понедельникам музей закрыт.', en: 'Just so you know, the museum is closed on Mondays.' },
            { badge: 'S', color: 'coral', es: 'Avísales de que <b>traigan</b> ropa de abrigo.', ru: 'Предупреди их, чтобы взяли тёплую одежду.', en: 'Tell them to bring warm clothes.' },
            { badge: 'I', color: 'blue', es: 'Me temo que el vuelo <b>ha sido</b> cancelado.', ru: 'Боюсь, что рейс отменили.', en: 'I’m afraid the flight has been cancelled.' },
            { badge: 'S', color: 'coral', es: 'Me parece lógico que <b>queráis</b> cambiar de piso.', ru: 'Мне кажется естественным, что вы хотите сменить квартиру.', en: 'It makes sense to me that you want to move to a new flat.' }
          ] },
          { type: 'examples', heading: { ru: 'Союзы', en: 'Conjunctions' }, items: [
            { badge: 'I', color: 'blue', es: 'Como no <b>vienes</b>, me voy.', ru: 'Раз ты не идёшь, я ухожу.', en: 'Since you’re not coming, I’m leaving.' },
            { badge: 'S', color: 'coral', es: 'Como no <b>vengas</b>, me voy.', ru: 'Если не придёшь, я уйду.', en: 'If you don’t come, I’m leaving.' },
            { badge: 'S', color: 'coral', es: 'Como no me <b>llames</b> esta noche, me enfado.', ru: 'Если не позвонишь мне сегодня вечером, я обижусь.', en: 'If you don’t call me tonight, I’ll be upset.' },
            { badge: 'I', color: 'blue', es: 'Mientras <b>cocinas</b>, pongo la mesa.', ru: 'Пока ты готовишь, я накрою на стол.', en: 'While you cook, I’ll set the table.' },
            { badge: 'S', color: 'coral', es: 'Mientras <b>cocines</b> tú, yo friego.', ru: 'Пока готовишь ты, посуду мою я.', en: 'As long as you do the cooking, I’ll do the washing-up.' },
            { badge: 'S', color: 'coral', es: 'Mientras <b>haya</b> salud, lo demás no importa.', ru: 'Было бы здоровье, остальное неважно.', en: 'As long as we have our health, nothing else matters.' },
            { badge: 'I', color: 'blue', es: 'Siempre que <b>vamos</b> a Cádiz, comemos en el mismo sitio.', ru: 'Каждый раз, когда мы ездим в Кадис, обедаем в одном и том же месте.', en: 'Whenever we go to Cádiz, we eat at the same place.' },
            { badge: 'S', color: 'coral', es: 'Podéis quedaros, siempre que no <b>hagáis</b> ruido.', ru: 'Можете остаться, если не будете шуметь.', en: 'You can stay, as long as you don’t make any noise.' },
            { badge: 'I', color: 'blue', es: 'Perdí el tren, de modo que <b>llegué</b> tarde a la reunión.', ru: 'Я опоздал на поезд, так что пришёл на встречу поздно.', en: 'I missed the train, so I was late for the meeting.' },
            { badge: 'S', color: 'coral', es: 'Explícalo de manera que lo <b>entiendan</b> todos.', ru: 'Объясни так, чтобы поняли все.', en: 'Explain it so that everyone understands.' },
            { badge: 'I', color: 'blue', es: 'Aunque <b>llovía</b>, salimos a correr.', ru: 'Хотя шёл дождь, мы вышли на пробежку.', en: 'Although it was raining, we went out for a run.' },
            { badge: 'S', color: 'coral', es: 'Aunque me lo <b>pidas</b> de rodillas, no pienso ir.', ru: 'Даже если будешь просить на коленях, я не пойду.', en: 'Even if you beg me on your knees, I’m not going.' },
            { badge: 'S', color: 'coral', es: 'No te llamo porque <b>necesite</b> nada, sino porque te echo de menos.', ru: 'Я звоню не потому, что мне что-то нужно, а потому, что скучаю по тебе.', en: 'I’m not calling because I need anything, but because I miss you.' },
            { badge: 'S', color: 'coral', es: 'Lo arreglé antes de que <b>llegaran</b> mis padres.', ru: 'Я всё починил до того, как пришли родители.', en: 'I fixed it before my parents arrived.' }
          ] },
          { type: 'examples', heading: { ru: 'Придаточные', en: 'Clauses' }, items: [
            { badge: 'I', color: 'blue', es: 'Haré lo que <b>dices</b>.', ru: 'Сделаю так, как ты говоришь.', en: 'I’ll do what you’re telling me.' },
            { badge: 'S', color: 'coral', es: 'Haré lo que <b>digas</b>.', ru: 'Сделаю всё, что скажешь.', en: 'I’ll do whatever you say.' },
            { badge: 'I', color: 'blue', es: 'Vamos donde <b>dijiste</b>.', ru: 'Пойдём туда, куда ты говорил.', en: 'Let’s go where you said.' },
            { badge: 'S', color: 'coral', es: 'Vamos donde <b>quieras</b>.', ru: 'Пойдём, куда захочешь.', en: 'Let’s go wherever you like.' },
            { badge: 'I', color: 'blue', es: 'Busco a la chica que <b>habla</b> ruso; me dijeron que trabaja aquí.', ru: 'Я ищу девушку, которая говорит по-русски: мне сказали, что она здесь работает.', en: 'I’m looking for the girl who speaks Russian; I was told she works here.' },
            { badge: 'S', color: 'coral', es: 'Buscamos a alguien que <b>sepa</b> programar en Python.', ru: 'Мы ищем человека, который умеет программировать на Python.', en: 'We’re looking for someone who can code in Python.' },
            { badge: 'S', color: 'coral', es: 'No conozco a nadie que <b>cocine</b> como tu madre.', ru: 'Я не знаю никого, кто готовил бы так, как твоя мама.', en: 'I don’t know anyone who cooks like your mother.' }
          ] },
          { type: 'tip', title: { ru: 'Как выбрать', en: 'How to choose' }, body: {
            ru: ['Факт, восприятие, известный человек или предмет → <b>indicativo</b>.',
                 'Приказ, сожаление, оценка, условие, гипотеза, «любой» или «никакой» → <b>subjuntivo</b>.',
                 'И помните: <i>sin que, antes de que, para que</i> — subjuntivo всегда, даже для факта.'],
            en: ['A fact, a perception, a known person or thing → <b>indicative</b>.',
                 'An order, regret, an evaluation, a condition, a hypothesis, “any” or “none” → <b>subjunctive</b>.',
                 'And remember: <i>sin que, antes de que, para que</i> always take the subjunctive, even for a fact.'] } }
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
    hero: {
      es: 'Formal <b>y</b> coloquial',
      sub: { ru: 'Как один и тот же смысл звучит в официальном письме и в разговоре с другом',
             en: 'How the same meaning sounds in a formal letter and in a chat with a friend' }
    },
    tabs: [
      {
        id: 'formal', label: { ru: 'Формальный', en: 'Formal' },
        blocks: [
          { type: 'text', heading: { ru: 'Tú, usted, vosotros, ustedes', en: 'Tú, usted, vosotros, ustedes' }, body: {
            ru: ['<b>Usted / ustedes</b> — вежливое обращение: глагол в 3-м лице, местоимения <i>le, les, lo, la, su</i>. В Испании <i>tú</i> очень распространено, <i>usted</i> — для официальных ситуаций, пожилых людей, клиентов. Во многих странах Латинской Америки <i>usted</i> звучит чаще, а <i>vosotros</i> не используется вовсе: там <i>ustedes</i> — и вежливое, и дружеское множественное.',
                 'В Аргентине, Уругвае и Центральной Америке вместо <i>tú</i> говорят <b>vos</b> со своими формами глагола: <i>vos tenés, vos sabés</i>. Вежливое <i>usted</i> там такое же, как везде.'],
            en: ['<b>Usted / ustedes</b> is the polite form: third-person verbs and the pronouns <i>le, les, lo, la, su</i>. In Spain <i>tú</i> is very widespread; <i>usted</i> is for official situations, older people and customers. In much of Latin America <i>usted</i> is more frequent and <i>vosotros</i> is not used at all: <i>ustedes</i> is both the polite and the friendly plural.',
                 'In Argentina, Uruguay and Central America people say <b>vos</b> instead of <i>tú</i>, with verb forms of its own: <i>vos tenés, vos sabés</i>. The polite <i>usted</i> is the same as everywhere else.'] } },
          { type: 'table', heading: { ru: 'Формы обращения', en: 'Forms of address' },
            head: ['', 'informal', 'formal'],
            rows: [
              ['singular', 'tú', 'usted'],
              ['plural · España', 'vosotros', 'ustedes'],
              ['plural · América', 'ustedes', 'ustedes'],
              ['Río de la Plata', 'vos', 'usted'],
              ['verbo', 'tienes · tenéis', 'tiene · tienen'],
              ['objeto', 'te · os', 'le(s) · lo(s) · la(s)'],
              ['posesivo', 'tu · vuestro', 'su · suyo']
            ] },
          { type: 'text', color: 'coral', heading: { ru: 'Держите регистр', en: 'Keep the register' }, body: {
            ru: ['Регистр нужно держать до конца: нельзя начать с <i>usted</i> и продолжить <i>te</i> или <i>tu</i>. <i>Señores, les ruego que tomen asiento</i> — всё в форме ustedes.'],
            en: ['Keep the register consistent: don’t start with <i>usted</i> and switch to <i>te</i> or <i>tu</i>. <i>Señores, les ruego que tomen asiento</i> — everything is in the ustedes form.'] } },
          { type: 'rules', heading: { ru: 'Грамматика официального стиля', en: 'The grammar of formal style' }, items: [
            { color: 'blue', title: { ru: 'Вежливый condicional', en: 'Polite conditional' }, es: 'Les agradecería que…',
              body: { ru: 'Condicional смягчает просьбу, после него — imperfecto de subjuntivo: <i>Les agradecería que me enviaran…</i>', en: 'The conditional softens a request and is followed by the imperfect subjunctive: <i>Les agradecería que me enviaran…</i>' } },
            { color: 'blue', title: { ru: 'Существительное вместо глагола', en: 'Nouns instead of verbs' }, es: 'a la llegada del ministro',
              body: { ru: 'Отглагольное существительное вместо придаточного: <i>a la llegada del ministro</i> вместо <i>cuando llegó el ministro</i>.', en: 'A verbal noun instead of a clause: <i>a la llegada del ministro</i> instead of <i>cuando llegó el ministro</i>.' } },
            { color: 'blue', title: { ru: 'Пассив и безличность', en: 'Passive and impersonal' }, es: 'se ruega · ha sido aprobada',
              body: { ru: 'Действующее лицо уходит в тень: <i>Se ruega silencio</i>, <i>Su solicitud ha sido aprobada</i>.', en: 'The doer stays in the background: <i>Se ruega silencio</i>, <i>Su solicitud ha sido aprobada</i>.' } },
            { color: 'blue', title: { ru: 'Пропуск que', en: 'Dropping que' }, es: 'Le ruego disculpe…',
              body: { ru: 'После <i>rogar, agradecer, suplicar</i> в письмах <i>que</i> иногда опускают: <i>Le ruego disculpe las molestias</i>.', en: 'After <i>rogar, agradecer, suplicar</i> letters sometimes drop <i>que</i>: <i>Le ruego disculpe las molestias</i>.' } }
          ] },
          { type: 'markers', heading: { ru: 'Книжные связки', en: 'Formal connectors' }, groups: [
            { color: 'blue', title: { ru: 'Официальный текст', en: 'Formal writing' }, tags: ['por consiguiente', 'no obstante', 'asimismo', 'en virtud de', 'con arreglo a', 'en lo que respecta a', 'cabe señalar que', 'a tal efecto'] }
          ] }
        ]
      },
      {
        id: 'colloquial', label: { ru: 'Разговорный', en: 'Colloquial' },
        blocks: [
          { type: 'text', heading: { ru: 'Что делает речь разговорной', en: 'What makes speech colloquial' }, body: {
            ru: ['<b>Сокращения</b>: <i>el finde, la tele, el profe, la bici, el cole</i>. <b>Усилители</b>: <i>súper, un montón de, mogollón</i> (Испания). <b>Слова-связки</b>: <i>pues, o sea, bueno, vale, ¿sabes?</i>. <b>Уменьшительные</b> смягчают: <i>un momentito, un cafecito</i>.',
                 '<b>Вежливый imperfecto</b> — мягкая просьба в магазине или по телефону: <i>Quería una barra de pan</i>, <i>Quería preguntarle una cosa</i>. Это нейтрально-вежливо и уместно в любом устном общении.'],
            en: ['<b>Clipped words</b>: <i>el finde, la tele, el profe, la bici, el cole</i>. <b>Intensifiers</b>: <i>súper, un montón de, mogollón</i> (Spain). <b>Fillers</b>: <i>pues, o sea, bueno, vale, ¿sabes?</i>. <b>Diminutives</b> soften things: <i>un momentito, un cafecito</i>.',
                 'The <b>polite imperfecto</b> makes a soft request in a shop or on the phone: <i>Quería una barra de pan</i>, <i>Quería preguntarle una cosa</i>. It is neutral and polite, fine in any spoken exchange.'] } },
          { type: 'markers', heading: { ru: 'Слова-метки', en: 'Marker words' }, groups: [
            { color: 'amber', title: { ru: 'Сокращения', en: 'Clippings' }, tags: ['el finde', 'la tele', 'el profe', 'la bici', 'el cole', 'la uni', 'el boli', 'el súper'] },
            { color: 'amber', title: { ru: 'Усилители', en: 'Intensifiers' }, tags: ['súper', 'un montón de', 'mogollón', 'a tope', 'superbién'] },
            { color: 'amber', title: { ru: 'Слова-связки', en: 'Fillers' }, tags: ['pues', 'o sea', 'bueno', 'vale', '¿sabes?', 'en plan', 'es que'] },
            { color: 'amber', title: { ru: 'Уменьшительные', en: 'Diminutives' }, tags: ['un momentito', 'un cafecito', 'cerquita', 'ahorita'] }
          ] },
          { type: 'rules', heading: { ru: 'Грамматика разговорной речи', en: 'The grammar of speech' }, items: [
            { color: 'amber', title: { ru: 'Вежливый imperfecto', en: 'Polite imperfecto' }, es: 'Quería una barra de pan.',
              body: { ru: 'Прошедшее время смягчает желание: звучит скромнее, чем <i>quiero</i>.', en: 'The past tense softens the wish: it sounds more modest than <i>quiero</i>.' } },
            { color: 'amber', title: { ru: 'Que в начале фразы', en: 'Que at the start' }, es: 'Que ya voy. · ¡Que te calles!',
              body: { ru: '<i>Que</i> повторяет или настойчиво подчёркивает сказанное.', en: '<i>Que</i> repeats or insists on what has been said.' } },
            { color: 'amber', title: { ru: 'Es que…', en: 'Es que…' }, es: 'Es que no tengo tiempo.',
              body: { ru: 'Оправдание, объяснение: «дело в том, что…».', en: 'An excuse or explanation: “the thing is…”.' } },
            { color: 'amber', title: { ru: 'Местоимение-усилитель', en: 'Emphatic pronoun' }, es: 'Se bebió toda la botella.',
              body: { ru: '<i>Se, me</i> подчёркивают полноту действия или вовлечённость говорящего: <i>se lo comió todo</i>.', en: '<i>Se, me</i> stress that the action is complete or that the speaker is involved: <i>se lo comió todo</i>.' } }
          ] },
          { type: 'table', heading: { ru: 'Разговорное слово зависит от страны', en: 'Slang depends on the country' },
            head: ['', 'España', 'México', 'Argentina'],
            rows: [
              ['trabajar', 'currar', 'chambear', 'laburar'],
              ['genial', 'guay', 'padre', 'copado'],
              ['mucho', 'mogollón', 'un chorro', 'una bocha'],
              ['dinero', 'la pasta', 'la lana', 'la guita']
            ] },
          { type: 'text', color: 'coral', heading: { ru: 'Где это неуместно', en: 'Where it doesn’t fit' }, body: {
            ru: ['<i>Currar, mogollón, flipar</i> уместны с друзьями, но не в письме в банк и не на собеседовании. А вот вежливый <i>quería</i> и уменьшительные подходят почти в любом устном разговоре.'],
            en: ['<i>Currar, mogollón, flipar</i> are fine with friends, but not in a letter to the bank or at a job interview. The polite <i>quería</i> and diminutives, on the other hand, suit almost any spoken exchange.'] } }
        ]
      },
      {
        id: 'same', label: { ru: 'Одно и то же', en: 'Same idea' },
        blocks: [
          { type: 'text', heading: { ru: 'Лексика трёх регистров', en: 'Vocabulary in three registers' }, body: {
            ru: ['Лексика официального стиля — книжные синонимы: <i>solicitar</i> вместо <i>pedir</i>, <i>remitir</i> вместо <i>mandar</i>, <i>dar comienzo</i> вместо <i>empezar</i>. Между разговорным и книжным словом почти всегда есть нейтральное — его и выбирайте, если не уверены.'],
            en: ['Formal vocabulary uses bookish synonyms: <i>solicitar</i> for <i>pedir</i>, <i>remitir</i> for <i>mandar</i>, <i>dar comienzo</i> for <i>empezar</i>. Between the colloquial and the bookish word there is almost always a neutral one — choose it when in doubt.'] } },
          { type: 'table', heading: { ru: 'Разговорно · нейтрально · официально', en: 'Colloquial · neutral · formal' },
            head: ['coloquial', 'neutro', 'formal'],
            rows: [
              ['arrancar', 'empezar', 'dar comienzo · iniciar'],
              ['pillar', 'conseguir', 'obtener'],
              ['currar', 'trabajar', 'desempeñar una labor'],
              ['mogollón de', 'muchos', 'numerosos'],
              ['la pasta', 'el dinero', 'los fondos'],
              ['mandar', 'enviar', 'remitir'],
              ['¡vale!', 'de acuerdo', 'conforme'],
              ['dar la lata', 'molestar', 'ocasionar molestias'],
              ['echar del curro', 'despedir', 'rescindir el contrato'],
              ['flipar', 'sorprenderse', 'causar asombro']
            ] },
          { type: 'conj', heading: { ru: 'Одна мысль — два регистра', en: 'One idea, two registers' }, verbs: [
            { inf: 'pedir algo', tr: { ru: 'просьба', en: 'a request' }, variants: [
              { label: { ru: 'формально', en: 'formal' }, color: 'blue', rows: [['usted', '¿<b>Sería</b> tan amable de enviarme el documento?'], ['ustedes', 'Les <b>ruego</b> que me lo remitan.']] },
              { label: { ru: 'разговорно', en: 'colloquial' }, color: 'amber', rows: [['tú', '¿Me <b>pasas</b> el documento?'], ['vosotros', '¿Me lo <b>mandáis</b>, porfa?']] }
            ] },
            { inf: 'disculparse', tr: { ru: 'извинение', en: 'an apology' }, variants: [
              { label: { ru: 'формально', en: 'formal' }, color: 'blue', rows: [['usted', 'Le <b>pido</b> disculpas por el retraso.'], ['empresa', '<b>Lamentamos</b> los inconvenientes ocasionados.']] },
              { label: { ru: 'разговорно', en: 'colloquial' }, color: 'amber', rows: [['tú', '<b>Perdona</b>, se me pasó por completo.']] }
            ] },
            { inf: 'dar una noticia', tr: { ru: 'хорошая новость', en: 'good news' }, variants: [
              { label: { ru: 'формально', en: 'formal' }, color: 'blue', rows: [['carta', 'Nos <b>complace</b> comunicarle que ha sido admitido.']] },
              { label: { ru: 'разговорно', en: 'colloquial' }, color: 'amber', rows: [['tú', '<b>Oye</b>, que te quería contar una cosa: ¡me han cogido!']] }
            ] },
            { inf: 'decir que no', tr: { ru: 'отказ', en: 'a refusal' }, variants: [
              { label: { ru: 'формально', en: 'formal' }, color: 'blue', rows: [['carta', '<b>Lamentamos</b> comunicarle que su solicitud no ha sido admitida.']] },
              { label: { ru: 'разговорно', en: 'colloquial' }, color: 'amber', rows: [['tú', '<b>Qué va</b>, no puedo, lo siento.']] }
            ] }
          ] },
          { type: 'tip', title: { ru: 'Проверка регистра', en: 'The register check' }, body: {
            ru: ['Спросите себя: сказал бы я это судье или директору банка? Если нет — ищите нейтральное или книжное слово.',
                 'И наоборот: <i>dar comienzo</i> или <i>remitir</i> в разговоре с другом звучат как шутка или ирония.'],
            en: ['Ask yourself: would I say this to a judge or a bank manager? If not, look for the neutral or the bookish word.',
                 'And the other way round: <i>dar comienzo</i> or <i>remitir</i> in a chat with a friend sound like a joke or irony.'] } }
        ]
      },
      {
        id: 'letters', label: { ru: 'Письмо', en: 'Letters' },
        blocks: [
          { type: 'text', heading: { ru: 'Как устроено письмо', en: 'How a letter is built' }, body: {
            ru: ['Письмо открывается <i>Estimado/a señor/a:</i> или <i>Estimados señores:</i> (с двоеточием) и закрывается <i>Atentamente,</i> / <i>Un cordial saludo,</i>. Типичные формулы: <i>Por la presente…</i>, <i>Quedo a la espera de su respuesta</i>, <i>a la mayor brevedad</i>.'],
            en: ['A letter opens with <i>Estimado/a señor/a:</i> or <i>Estimados señores:</i> (with a colon) and closes with <i>Atentamente,</i> / <i>Un cordial saludo,</i>. Typical formulas: <i>Por la presente…</i>, <i>Quedo a la espera de su respuesta</i>, <i>a la mayor brevedad</i>.'] } },
          { type: 'table', heading: { ru: 'Официальное и дружеское письмо', en: 'Formal and friendly letters' },
            head: ['', 'formal', 'informal'],
            rows: [
              [{ ru: 'Обращение', en: 'Greeting' }, 'Estimado Sr. López:', 'Querida Marta:'],
              [{ ru: 'Цель', en: 'Purpose' }, 'Me dirijo a usted para…', 'Te escribo para…'],
              [{ ru: 'Просьба', en: 'Request' }, 'Le agradecería que…', '¿Podrías…?'],
              [{ ru: 'Вложение', en: 'Attachment' }, 'Adjunto le remito…', 'Te mando…'],
              [{ ru: 'Ответ', en: 'Reply' }, 'Quedo a la espera de…', 'Ya me dirás.'],
              [{ ru: 'Прощание', en: 'Closing' }, 'Atentamente,', 'Un abrazo,'],
              [{ ru: 'Теплее', en: 'Warmer' }, 'Un cordial saludo,', 'Besos,']
            ] },
          { type: 'markers', heading: { ru: 'Формулы официального письма', en: 'Formal letter formulas' }, groups: [
            { color: 'blue', title: { ru: 'Готовые фразы', en: 'Set phrases' }, tags: ['Por la presente', 'En respuesta a su escrito', 'a la mayor brevedad', 'Agradeciendo de antemano su atención', 'Sin otro particular', 'Reciba un cordial saludo', 'Le saluda atentamente'] }
          ] },
          { type: 'text', color: 'coral', heading: { ru: 'Пунктуация и сокращения', en: 'Punctuation and abbreviations' }, body: {
            ru: ['После обращения — <b>двоеточие</b>, и текст начинается с новой строки с заглавной буквы. Запятая после обращения — калька с английского.',
                 'Сокращения: <i>Sr., Sra., Srta., D., D.ª, Ud. (Vd.)</i>. <i>Ud.</i> пишется с заглавной и точкой, а полное <i>usted</i> — со строчной.'],
            en: ['After the greeting comes a <b>colon</b>, and the text starts on a new line with a capital letter. A comma after the greeting is a calque from English.',
                 'Abbreviations: <i>Sr., Sra., Srta., D., D.ª, Ud. (Vd.)</i>. <i>Ud.</i> takes a capital and a full stop, while the full word <i>usted</i> is written in lower case.'] } },
          { type: 'tip', title: { ru: 'Скелет официального письма', en: 'The skeleton of a formal letter' }, body: {
            ru: ['1) <i>Estimado/a…:</i> 2) <i>Me dirijo a usted para…</i> 3) суть, просьба в condicional 4) <i>Quedo a la espera de su respuesta.</i> 5) <i>Atentamente,</i> + имя.'],
            en: ['1) <i>Estimado/a…:</i> 2) <i>Me dirijo a usted para…</i> 3) the point, with the request in the conditional 4) <i>Quedo a la espera de su respuesta.</i> 5) <i>Atentamente,</i> + your name.'] } }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Официально', en: 'Formal' }, items: [
            { color: 'blue', es: 'Les <b>agradecería</b> que me enviaran la factura a la mayor brevedad.', ru: 'Я был бы признателен, если бы вы прислали мне счёт в кратчайшие сроки.', en: 'I would be grateful if you could send me the invoice as soon as possible.' },
            { color: 'blue', es: '<b>Por la presente</b> le comunicamos que su solicitud ha sido aprobada.', ru: 'Настоящим сообщаем вам, что ваша заявка одобрена.', en: 'We hereby inform you that your application has been approved.' },
            { color: 'blue', es: 'Le <b>rogamos</b> disculpe las molestias.', ru: 'Приносим извинения за доставленные неудобства.', en: 'We apologise for any inconvenience.' },
            { color: 'blue', es: 'Le <b>agradeceríamos</b> que confirmara su asistencia.', ru: 'Будем признательны, если вы подтвердите своё участие.', en: 'We would be grateful if you could confirm your attendance.' },
            { color: 'blue', es: 'Tras la <b>aprobación</b> del presupuesto, se iniciarán las obras.', ru: 'После утверждения бюджета начнутся работы.', en: 'Once the budget has been approved, work will begin.' },
            { color: 'blue', es: 'Se <b>ruega</b> a los señores pasajeros que permanezcan sentados.', ru: 'Уважаемых пассажиров просят оставаться на своих местах.', en: 'Passengers are kindly requested to remain seated.' },
            { color: 'blue', es: 'La directora <b>desempeñó</b> su cargo con gran profesionalidad.', ru: 'Директор исполняла свои обязанности очень профессионально.', en: 'The director performed her duties with great professionalism.' },
            { color: 'blue', es: 'Les <b>informamos</b> de que el servicio quedará interrumpido el lunes.', ru: 'Сообщаем вам, что в понедельник обслуживание будет приостановлено.', en: 'Please be advised that the service will be suspended on Monday.' }
          ] },
          { type: 'examples', heading: { ru: 'Разговорно', en: 'Colloquial' }, items: [
            { color: 'amber', es: 'Este <b>finde</b> me voy a la playa con <b>un montón de</b> amigos.', ru: 'На этих выходных еду на пляж с кучей друзей.', en: 'This weekend I’m off to the beach with loads of friends.' },
            { color: 'amber', es: 'Espera un <b>momentito</b>, que ya voy.', ru: 'Подожди минутку, я уже иду.', en: 'Hang on a sec, I’m coming.' },
            { color: 'amber', es: 'Buenos días, <b>quería</b> pedir cita con el médico.', ru: 'Добрый день, я хотел бы записаться к врачу.', en: 'Good morning, I’d like to make a doctor’s appointment.' },
            { color: 'amber', es: '<b>Es que</b> no he pegado ojo en toda la noche.', ru: 'Просто я всю ночь глаз не сомкнул.', en: 'It’s just that I didn’t sleep a wink all night.' },
            { color: 'amber', es: '¡<b>Que</b> te calles, que no me dejas oír!', ru: 'Да замолчи ты, мне же ничего не слышно!', en: 'Will you be quiet? I can’t hear a thing!' },
            { color: 'amber', es: 'El niño <b>se</b> comió toda la tarta él solito.', ru: 'Малыш сам слопал весь торт.', en: 'The kid polished off the whole cake all by himself.' },
            { color: 'amber', es: '<b>O sea</b>, que al final no venís, ¿no?', ru: 'То есть в итоге вы не придёте, да?', en: 'So in the end you’re not coming, right?' },
            { color: 'amber', es: 'Mañana no puedo, tengo que <b>currar</b> hasta las diez.', ru: 'Завтра не могу, мне пахать до десяти.', en: 'I can’t tomorrow, I’ve got to work till ten.' }
          ] },
          { type: 'examples', heading: { ru: 'Одно и то же в двух регистрах', en: 'The same idea in two registers' }, items: [
            { badge: 'F', color: 'blue', es: '<b>Solicito</b> información sobre el curso de verano.', ru: 'Прошу предоставить информацию о летнем курсе.', en: 'I am writing to request information about the summer course.' },
            { badge: 'C', color: 'amber', es: '¿Me <b>pasas</b> la info del curso de verano?', ru: 'Скинешь инфу про летний курс?', en: 'Can you send me the info on the summer course?' },
            { badge: 'F', color: 'blue', es: 'La reunión <b>dará comienzo</b> a las nueve en punto.', ru: 'Заседание начнётся ровно в девять.', en: 'The meeting will commence at nine o’clock sharp.' },
            { badge: 'C', color: 'amber', es: 'La reunión <b>arranca</b> a las nueve.', ru: 'Встреча стартует в девять.', en: 'The meeting kicks off at nine.' },
            { badge: 'F', color: 'blue', es: 'Nos vemos obligados a <b>rescindir</b> su contrato.', ru: 'Мы вынуждены расторгнуть ваш договор.', en: 'We are obliged to terminate your contract.' },
            { badge: 'C', color: 'amber', es: 'Me han <b>echado</b> del curro.', ru: 'Меня выперли с работы.', en: 'I got the sack.' },
            { badge: 'F', color: 'blue', es: 'La noticia <b>causó</b> gran asombro entre los asistentes.', ru: 'Новость вызвала у присутствующих большое изумление.', en: 'The news caused great astonishment among those present.' },
            { badge: 'C', color: 'amber', es: 'La gente <b>flipó</b> con la noticia.', ru: 'Народ офигел от новости.', en: 'People were blown away by the news.' }
          ] },
          { type: 'examples', heading: { ru: 'Из писем', en: 'From letters' }, items: [
            { color: 'blue', es: 'Estimada Sra. López: me <b>dirijo</b> a usted para solicitar una cita.', ru: 'Уважаемая госпожа Лопес! Обращаюсь к вам с просьбой о встрече.', en: 'Dear Ms López, I am writing to request an appointment.' },
            { color: 'blue', es: '<b>Adjunto</b> le remito mi currículum.', ru: 'Прилагаю к письму своё резюме.', en: 'Please find my CV attached.' },
            { color: 'blue', es: '<b>Quedo</b> a la espera de su respuesta.', ru: 'Жду вашего ответа.', en: 'I look forward to your reply.' },
            { color: 'blue', es: 'Sin otro particular, le <b>saluda</b> atentamente,', ru: 'На этом всё. С уважением,', en: 'With nothing further to add, yours faithfully,' },
            { color: 'amber', es: 'Querida Marta: <b>¿qué tal</b> todo por Valencia?', ru: 'Дорогая Марта, как там у тебя дела в Валенсии?', en: 'Dear Marta, how’s everything in Valencia?' },
            { color: 'amber', es: 'Bueno, te dejo, que tengo mucho lío. <b>Un abrazo</b>,', ru: 'Ну всё, убегаю, у меня завал. Обнимаю,', en: 'Right, I’ll stop here — I’m swamped. Hugs,' }
          ] }
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
    hero: {
      es: 'Fue Juan <b>quien</b>…',
      sub: { ru: 'Как выделить главное: расщеплённые фразы, lo que… es, порядок слов и повтор предлога',
             en: 'How to highlight what matters: cleft sentences, lo que… es, word order and repeated prepositions' }
    },
    tabs: [
      {
        id: 'cleft', label: { ru: 'Ser… quien', en: 'Ser… quien' },
        blocks: [
          { type: 'text', heading: { ru: 'Расщеплённое предложение', en: 'The cleft sentence' }, body: {
            ru: ['Чтобы подчеркнуть одну часть фразы, её ставят после <b>ser</b>, а остальное — в придаточное: <i>Juan rompió el jarrón → Fue Juan quien rompió el jarrón</i> — «Именно Хуан…».',
                 'Относительное слово зависит от того, что выделяем: человек — <b>quien / el que</b>, предмет — <b>lo que / el que</b>, место — <b>donde</b>, время — <b>cuando</b>, способ — <b>como</b>.',
                 'Время глагола ser обычно совпадает со временем основного глагола: <i>Es aquí donde vivo</i>; <i>Fue en 1992 cuando se celebraron los Juegos</i>.'],
            en: ['To stress one part of a sentence, put it after <b>ser</b> and move the rest into a relative clause: <i>Juan rompió el jarrón → Fue Juan quien rompió el jarrón</i> — “It was Juan who…”.',
                 'The relative word depends on what you highlight: a person — <b>quien / el que</b>, a thing — <b>lo que / el que</b>, a place — <b>donde</b>, a time — <b>cuando</b>, a manner — <b>como</b>.',
                 'The tense of ser usually matches the main verb: <i>Es aquí donde vivo</i>; <i>Fue en 1992 cuando se celebraron los Juegos</i>.'] } },
          { type: 'table', heading: { ru: 'Что выделяем — какое слово', en: 'What you stress — which word' },
            head: ['se destaca', 'ejemplo'],
            rows: [
              ['persona', 'Fue Juan quien me lo dijo.'],
              ['cosa', 'Es el precio lo que importa.'],
              ['lugar', 'Fue en Sevilla donde vivió.'],
              ['tiempo', 'Fue en mayo cuando llegó.'],
              ['modo', 'Es así como se hace.'],
              ['complemento con preposición', 'Es a ti a quien busco.']
            ] },
          { type: 'text', heading: { ru: 'Согласование', en: 'Agreement' }, body: {
            ru: ['Если выделено личное местоимение, <b>ser согласуется с ним</b>: <i>Soy yo quien paga</i>, <i>Fuimos nosotros los que rompimos la ventana</i>.',
                 'Глагол придаточного после <i>quien</i> обычно стоит в 3-м лице: <i>Soy yo quien paga</i>. После <i>el que, la que</i> возможны оба варианта: <i>Soy yo el que pago / el que paga</i>. Артикль согласуется с выделенным: <i>Fue ella la que llamó</i>.'],
            en: ['If a personal pronoun is highlighted, <b>ser agrees with it</b>: <i>Soy yo quien paga</i>, <i>Fuimos nosotros los que rompimos la ventana</i>.',
                 'After <i>quien</i> the verb in the clause is usually third person: <i>Soy yo quien paga</i>. After <i>el que, la que</i> both are possible: <i>Soy yo el que pago / el que paga</i>. The article agrees with the highlighted word: <i>Fue ella la que llamó</i>.'] } },
          { type: 'conj', heading: { ru: 'Нейтрально или с выделением', en: 'Neutral or emphatic' }, verbs: [
            { inf: 'Juan rompió el jarrón', variants: [
              { label: { ru: 'нейтрально', en: 'neutral' }, color: 'blue', rows: [['frase', 'Juan rompió el jarrón.']] },
              { label: { ru: 'с выделением', en: 'emphatic' }, color: 'amber', rows: [['persona', 'Fue <b>Juan</b> quien rompió el jarrón.'], ['cosa', 'Fue <b>el jarrón</b> lo que rompió Juan.']] }
            ] },
            { inf: 'Trabajo en Bilbao', variants: [
              { label: { ru: 'нейтрально', en: 'neutral' }, color: 'blue', rows: [['frase', 'Trabajo en Bilbao.']] },
              { label: { ru: 'с выделением', en: 'emphatic' }, color: 'amber', rows: [['lugar', 'Es <b>en Bilbao</b> donde trabajo.']] }
            ] },
            { inf: 'Nos casamos en 2015', variants: [
              { label: { ru: 'нейтрально', en: 'neutral' }, color: 'blue', rows: [['frase', 'Nos casamos en 2015.']] },
              { label: { ru: 'с выделением', en: 'emphatic' }, color: 'amber', rows: [['tiempo', 'Fue <b>en 2015</b> cuando nos casamos.']] }
            ] },
            { inf: 'Tú pagas la cena', variants: [
              { label: { ru: 'нейтрально', en: 'neutral' }, color: 'blue', rows: [['frase', 'Tú pagas la cena.']] },
              { label: { ru: 'с выделением', en: 'emphatic' }, color: 'amber', rows: [['quien', 'Eres <b>tú</b> quien paga la cena.'], ['el que', 'Eres <b>tú</b> el que pagas la cena.']] }
            ] }
          ] }
        ]
      },
      {
        id: 'lo-que', label: { ru: 'Lo que', en: 'Lo que' },
        blocks: [
          { type: 'text', heading: { ru: 'Lo que… es', en: 'Lo que… es' }, body: {
            ru: ['<b>Lo que + глагол + es…</b> откладывает главное на конец: <i>Lo que necesito es descansar</i>; <i>Lo que más me molesta es que no avise</i>.',
                 'Можно и наоборот — главное в начале: <i>Descansar es lo que necesito</i>. Если после <i>ser</i> стоит множественное число, <i>ser</i> согласуется с ним, а глагол придаточного остаётся в единственном: <i>Lo que falta son sillas</i>.'],
            en: ['<b>Lo que + verb + es…</b> saves the key point for the end: <i>Lo que necesito es descansar</i>; <i>Lo que más me molesta es que no avise</i>.',
                 'It also works the other way round, with the key point first: <i>Descansar es lo que necesito</i>. If a plural follows <i>ser</i>, <i>ser</i> agrees with it, while the verb in the clause stays singular: <i>Lo que falta son sillas</i>.'] } },
          { type: 'text', heading: { ru: 'Lo + прилагательное + que', en: 'Lo + adjective + que' }, body: {
            ru: ['<b>Lo + прилагательное / наречие + que</b> — «насколько, как сильно»: <i>No sabes lo cansada que estoy</i>; <i>Mira lo bien que canta</i>. Прилагательное согласуется с существительным, а наречие не меняется: <i>lo lejos que vive</i>.',
                 '<b>Con lo + прилагательное + que</b> — «при том, что он такой…»: причина или неожиданный контраст. <b>¡Lo que…!</b> — восклицание: «как же, сколько же…».'],
            en: ['<b>Lo + adjective / adverb + que</b> means “how (much)”: <i>No sabes lo cansada que estoy</i>; <i>Mira lo bien que canta</i>. The adjective agrees with the noun; the adverb never changes: <i>lo lejos que vive</i>.',
                 '<b>Con lo + adjective + que</b> means “given how… it is”: a reason or a surprising contrast. <b>¡Lo que…!</b> is an exclamation: “how much…!”.'] } },
          { type: 'table', heading: { ru: 'Модели', en: 'Patterns' },
            head: ['estructura', 'ejemplo'],
            rows: [
              ['lo que + verbo + es', 'Lo que quiero es dormir.'],
              ['… es lo que + verbo', 'Dormir es lo que quiero.'],
              ['lo que… son + plural', 'Lo que sobra son excusas.'],
              ['lo + adjetivo + que', 'lo guapa que estás'],
              ['lo + adverbio + que', 'lo rápido que habla'],
              ['con lo + adjetivo + que', 'con lo fácil que era'],
              ['¡lo que + verbo!', '¡Lo que ha llovido!']
            ] },
          { type: 'conj', heading: { ru: 'Нейтрально или с выделением', en: 'Neutral or emphatic' }, verbs: [
            { inf: 'Necesito vacaciones', variants: [
              { label: { ru: 'нейтрально', en: 'neutral' }, color: 'blue', rows: [['frase', 'Necesito vacaciones.']] },
              { label: { ru: 'с выделением', en: 'emphatic' }, color: 'amber', rows: [['lo que… es', 'Lo que necesito <b>son</b> vacaciones.'], ['al revés', 'Vacaciones <b>es lo que</b> necesito.']] }
            ] },
            { inf: 'Es muy caro', variants: [
              { label: { ru: 'нейтрально', en: 'neutral' }, color: 'blue', rows: [['frase', 'Es muy caro.']] },
              { label: { ru: 'с выделением', en: 'emphatic' }, color: 'amber', rows: [['lo… que', 'No sabes <b>lo caro que</b> es.'], ['con lo… que', '<b>Con lo caro que</b> es, no pienso comprarlo.']] }
            ] }
          ] }
        ]
      },
      {
        id: 'order', label: { ru: 'Порядок слов', en: 'Word order' },
        blocks: [
          { type: 'text', heading: { ru: 'Тема в начале, новое в конце', en: 'Topic first, new information last' }, body: {
            ru: ['Тему разговора можно вынести в начало. Если это прямое или косвенное дополнение, в предложении <b>обязательно</b> остаётся местоимение-повтор: <i>Ese libro ya lo he leído</i>; <i>A María no la he visto</i>; <i>A tu hermano le di las llaves</i>.',
                 'Новое, важное обычно стоит <b>в конце</b>: <i>¿Quién te lo dijo? — Me lo dijo Pedro</i>.'],
            en: ['The topic can be moved to the front. If it is a direct or indirect object, a <b>resumptive pronoun is required</b>: <i>Ese libro ya lo he leído</i>; <i>A María no la he visto</i>; <i>A tu hermano le di las llaves</i>.',
                 'New, important information usually goes <b>at the end</b>: <i>¿Quién te lo dijo? — Me lo dijo Pedro</i>.'] } },
          { type: 'rules', heading: { ru: 'Четыре приёма', en: 'Four techniques' }, items: [
            { color: 'amber', title: { ru: 'Тема + местоимение', en: 'Topic + pronoun' }, es: 'El pan lo compro yo.',
              body: { ru: 'Дополнение впереди, местоимение-повтор перед глаголом.', en: 'The object goes first, with a resumptive pronoun before the verb.' } },
            { color: 'amber', title: { ru: 'Новое в конце', en: 'New information last' }, es: 'Lo trajo Ana.',
              body: { ru: 'Подлежащее после глагола, если именно оно — ответ на вопрос.', en: 'The subject follows the verb when it is the answer to the question.' } },
            { color: 'amber', title: { ru: 'Фокус впереди', en: 'Fronted focus' }, es: 'Eso digo yo.',
              body: { ru: 'Контрастное слово в начало, подлежащее после глагола, местоимения-повтора <b>нет</b>.', en: 'The contrasted word goes first, the subject after the verb, and there is <b>no</b> resumptive pronoun.' } },
            { color: 'amber', title: { ru: 'A mí me…', en: 'A mí me…' }, es: 'A mí me encanta el cine.',
              body: { ru: 'С <i>gustar, encantar, importar</i> лицо идёт первым с удвоением, подлежащее — в конце.', en: 'With <i>gustar, encantar, importar</i> the person comes first, doubled, and the subject goes last.' } }
          ] },
          { type: 'table', heading: { ru: 'Вынесенное дополнение', en: 'The fronted object' },
            head: ['adelantado', 'pronombre', 'ejemplo'],
            rows: [
              ['directo · masc.', 'lo · los', 'El pan lo compro yo.'],
              ['directo · fem.', 'la · las', 'La cena la hago yo.'],
              ['persona', 'lo · la', 'A tu primo no lo conozco.'],
              ['indirecto', 'le · les', 'A Ana le di el libro.'],
              ['sin artículo', '—', 'Dinero no tengo.']
            ] },
          { type: 'conj', heading: { ru: 'Нейтрально или с выделением', en: 'Neutral or emphatic' }, verbs: [
            { inf: 'Ya he visto esa película', variants: [
              { label: { ru: 'нейтрально', en: 'neutral' }, color: 'blue', rows: [['frase', 'Ya he visto esa película.']] },
              { label: { ru: 'с выделением', en: 'emphatic' }, color: 'amber', rows: [['tema', 'Esa película ya <b>la</b> he visto.']] }
            ] },
            { inf: 'Ana trajo el vino', variants: [
              { label: { ru: 'нейтрально', en: 'neutral' }, color: 'blue', rows: [['frase', 'Ana trajo el vino.']] },
              { label: { ru: 'с выделением', en: 'emphatic' }, color: 'amber', rows: [['respuesta', '¿Quién trajo el vino? — Lo trajo <b>Ana</b>.']] }
            ] },
            { inf: 'Tardé dos horas en llegar', variants: [
              { label: { ru: 'нейтрально', en: 'neutral' }, color: 'blue', rows: [['frase', 'Tardé dos horas en llegar.']] },
              { label: { ru: 'с выделением', en: 'emphatic' }, color: 'amber', rows: [['foco', '<b>Dos horas</b> tardé en llegar.']] }
            ] }
          ] },
          { type: 'text', color: 'coral', heading: { ru: 'Типичная ошибка', en: 'A common mistake' }, body: {
            ru: ['Без местоимения-повтора вынесенное дополнение звучит неправильно: не «Ese libro ya he leído», а <i>Ese libro ya <b>lo</b> he leído</i>. Повтора нет только у существительного без артикля (<i>Dinero no tengo</i>) и у контрастного фокуса (<i>Eso digo yo</i>).'],
            en: ['Without a resumptive pronoun a fronted object sounds wrong: not “Ese libro ya he leído” but <i>Ese libro ya <b>lo</b> he leído</i>. There is no pronoun only with a bare noun (<i>Dinero no tengo</i>) and with contrastive focus (<i>Eso digo yo</i>).'] } }
        ]
      },
      {
        id: 'prepositions', label: { ru: 'Предлоги', en: 'Prepositions' },
        blocks: [
          { type: 'text', heading: { ru: 'Предлог повторяется', en: 'The preposition is repeated' }, body: {
            ru: ['Если у выделяемого есть предлог, <b>он повторяется</b> перед относительным словом: <i>Es a Ana a quien vi</i>, <i>Es de eso de lo que quiero hablar</i>. Конструкции вроде «es por eso que» широко распространены, особенно в Америке, но в тщательной речи надёжнее <i>Por eso es por lo que…</i>'],
            en: ['If the highlighted part has a preposition, <b>it is repeated</b> before the relative: <i>Es a Ana a quien vi</i>, <i>Es de eso de lo que quiero hablar</i>. Structures like “es por eso que” are widespread, especially in the Americas, but careful style prefers <i>Por eso es por lo que…</i>'] } },
          { type: 'table', heading: { ru: 'Глагол с предлогом', en: 'Verbs with prepositions' },
            head: ['verbo', 'ejemplo'],
            rows: [
              ['hablar con', 'Es con Luis con quien hablé.'],
              ['pensar en', 'Es en ti en quien pienso.'],
              ['depender de', 'Es de ti de quien depende.'],
              ['contar con', 'Es con él con quien cuento.'],
              ['llamar a', 'Fue a Luis a quien llamé.'],
              ['por + causa', 'Por eso es por lo que vine.']
            ] },
          { type: 'conj', heading: { ru: 'Норма или разговорный вариант', en: 'Standard or colloquial' }, verbs: [
            { inf: 'de eso', tr: { ru: 'hablar de', en: 'hablar de' }, variants: [
              { label: { ru: 'норма', en: 'standard' }, color: 'amber', rows: [['hablar de', 'Es de eso <b>de lo que</b> te hablo.']] },
              { label: { ru: 'разговорно', en: 'colloquial' }, color: 'coral', rows: [['hablar de', 'Es de eso <b>que</b> te hablo.']] }
            ] },
            { inf: 'por eso', tr: { ru: 'причина', en: 'reason' }, variants: [
              { label: { ru: 'норма', en: 'standard' }, color: 'amber', rows: [['causa', 'Por eso es <b>por lo que</b> me fui.']] },
              { label: { ru: 'разговорно', en: 'colloquial' }, color: 'coral', rows: [['causa', 'Es por eso <b>que</b> me fui.']] }
            ] },
            { inf: 'en Madrid', tr: { ru: 'место', en: 'place' }, variants: [
              { label: { ru: 'норма', en: 'standard' }, color: 'amber', rows: [['lugar', 'Es en Madrid <b>donde</b> estudio.']] },
              { label: { ru: 'разговорно', en: 'colloquial' }, color: 'coral', rows: [['lugar', 'Es en Madrid <b>que</b> estudio.']] }
            ] },
            { inf: 'entonces', tr: { ru: 'время', en: 'time' }, variants: [
              { label: { ru: 'норма', en: 'standard' }, color: 'amber', rows: [['tiempo', 'Fue entonces <b>cuando</b> lo entendí.']] },
              { label: { ru: 'разговорно', en: 'colloquial' }, color: 'coral', rows: [['tiempo', 'Fue entonces <b>que</b> lo entendí.']] }
            ] }
          ] },
          { type: 'text', color: 'coral', heading: { ru: 'Que galicado', en: 'Que galicado' }, body: {
            ru: ['Вариант с одним <i>que</i> («es por eso que», «fue entonces que») называют <b>que galicado</b>. Он очень распространён, особенно в Америке, и в разговоре никого не удивит, но в тщательной письменной речи надёжнее полный вариант: предлог + нужное относительное слово (<i>donde, cuando, por lo que, a quien</i>).'],
            en: ['The version with a bare <i>que</i> (“es por eso que”, “fue entonces que”) is called <b>que galicado</b>. It is very common, especially in the Americas, and will surprise nobody in conversation, but careful writing is safer with the full version: preposition + the right relative word (<i>donde, cuando, por lo que, a quien</i>).'] } }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Ser… quien / que', en: 'Ser… quien / que' }, items: [
            { color: 'amber', es: 'Es <b>el precio</b> lo que me preocupa.', ru: 'Меня беспокоит именно цена.', en: 'It’s the price that worries me.' },
            { color: 'amber', es: 'Fue <b>en Sevilla</b> donde nos conocimos.', ru: 'Познакомились мы именно в Севилье.', en: 'It was in Seville that we met.' },
            { color: 'amber', es: 'Fue <b>en verano</b> cuando se mudaron.', ru: 'Переехали они именно летом.', en: 'It was in summer that they moved.' },
            { color: 'amber', es: 'Fue <b>mi abuela</b> quien me enseñó a cocinar.', ru: 'Это бабушка научила меня готовить.', en: 'It was my grandmother who taught me to cook.' },
            { color: 'amber', es: 'Es <b>en momentos así</b> cuando se conoce a los amigos.', ru: 'Именно в такие моменты и узнаёшь друзей.', en: 'It’s at times like these that you find out who your friends are.' },
            { color: 'amber', es: '<b>Eres tú</b> quien tiene que decidir.', ru: 'Решать должен именно ты.', en: 'You’re the one who has to decide.' },
            { color: 'amber', es: 'Fue <b>por casualidad</b> como se descubrió la penicilina.', ru: 'Пенициллин открыли именно случайно.', en: 'It was by chance that penicillin was discovered.' },
            { color: 'amber', es: '<b>Fuimos nosotras</b> las que organizamos la fiesta.', ru: 'Это мы организовали праздник.', en: 'We were the ones who organised the party.' },
            { color: 'amber', es: 'Es <b>ahora</b> cuando tienes que decidirte, no mañana.', ru: 'Решаться нужно именно сейчас, а не завтра.', en: 'It’s now that you have to make up your mind, not tomorrow.' }
          ] },
          { type: 'examples', heading: { ru: 'Lo que… es, lo… que', en: 'Lo que… es, lo… que' }, items: [
            { color: 'amber', es: '<b>Lo que</b> no entiendo es por qué no me llamaste.', ru: 'Чего я не понимаю, так это почему ты мне не позвонил.', en: 'What I don’t understand is why you didn’t call me.' },
            { color: 'amber', es: 'Me sorprendió <b>lo rápido que</b> aprendió.', ru: 'Меня удивило, как быстро он научился.', en: 'I was surprised at how quickly he learned.' },
            { color: 'amber', es: '<b>Lo que</b> más me gusta de Madrid es la gente.', ru: 'Больше всего в Мадриде мне нравятся люди.', en: 'What I like most about Madrid is the people.' },
            { color: 'amber', es: 'Lo que nos hace falta <b>son</b> más manos.', ru: 'Чего нам не хватает, так это рабочих рук.', en: 'What we’re short of is extra hands.' },
            { color: 'amber', es: 'No os imagináis <b>lo bien que</b> lo pasamos.', ru: 'Вы не представляете, как здорово мы провели время.', en: 'You can’t imagine what a great time we had.' },
            { color: 'amber', es: '<b>Con lo simpático que</b> es, no entiendo que no tenga amigos.', ru: 'Он такой обаятельный — не понимаю, как у него может не быть друзей.', en: 'Charming as he is, I can’t understand why he has no friends.' },
            { color: 'amber', es: '¡<b>Lo que</b> ha crecido tu hija!', ru: 'Как же выросла твоя дочка!', en: 'How your daughter has grown!' }
          ] },
          { type: 'examples', heading: { ru: 'Порядок слов', en: 'Word order' }, items: [
            { color: 'amber', es: 'Las llaves <b>las</b> dejé en la mesa.', ru: 'Ключи я оставил на столе.', en: 'The keys, I left them on the table.' },
            { color: 'amber', es: 'A tu hermana <b>la</b> vi ayer en el metro.', ru: 'Твою сестру я видел вчера в метро.', en: 'I saw your sister on the metro yesterday.' },
            { color: 'amber', es: 'A los niños <b>les</b> he comprado un helado.', ru: 'Детям я купил мороженое.', en: 'I’ve bought the kids an ice cream.' },
            { color: 'amber', es: 'Este vino <b>lo</b> trajeron nuestros vecinos.', ru: 'Это вино принесли наши соседи.', en: 'This wine was brought by our neighbours.' },
            { color: 'amber', es: '<b>Mucho dinero</b> no tenemos, pero somos felices.', ru: 'Денег у нас немного, зато мы счастливы.', en: 'We don’t have much money, but we’re happy.' },
            { color: 'amber', es: '¿Quién ha llamado? — Ha llamado <b>tu jefe</b>.', ru: '— Кто звонил? — Звонил твой начальник.', en: '“Who called?” “Your boss did.”' }
          ] },
          { type: 'examples', heading: { ru: 'Повтор предлога', en: 'Repeated prepositions' }, items: [
            { color: 'amber', es: 'Es con Marta <b>con quien</b> tienes que hablar.', ru: 'Говорить тебе нужно именно с Мартой.', en: 'It’s Marta you need to talk to.' },
            { color: 'amber', es: 'Es en ti <b>en quien</b> más confío.', ru: 'Больше всего я доверяю именно тебе.', en: 'You’re the one I trust most.' },
            { color: 'amber', es: 'Fue de ese viaje <b>del que</b> más se habló.', ru: 'Больше всего говорили именно об этой поездке.', en: 'It was that trip that people talked about most.' },
            { color: 'amber', es: 'Es a mis padres <b>a quienes</b> se lo debo todo.', ru: 'Всем я обязан именно родителям.', en: 'It’s my parents I owe everything to.' },
            { color: 'amber', es: 'Por eso es <b>por lo que</b> decidí cambiar de trabajo.', ru: 'Именно поэтому я и решил сменить работу.', en: 'That’s why I decided to change jobs.' },
            { color: 'amber', es: 'Es para ti <b>para quien</b> he preparado esta sorpresa.', ru: 'Этот сюрприз я приготовил именно для тебя.', en: 'It’s for you that I’ve prepared this surprise.' }
          ] },
          { type: 'tip', title: { ru: 'Три способа выделить', en: 'Three ways to highlight' }, body: {
            ru: ['1) <b>Ser + выделенное + quien / que / donde / cuando / como</b>. 2) <b>Lo que… es</b> — главное в конце. 3) <b>Порядок слов</b>: тема с местоимением-повтором впереди, новое — в конце.',
                 'Предлог выделенного слова повторяйте перед относительным: <i>con quien, de lo que, a quien</i>.'],
            en: ['1) <b>Ser + highlighted part + quien / que / donde / cuando / como</b>. 2) <b>Lo que… es</b> — the key point last. 3) <b>Word order</b>: the topic first with a resumptive pronoun, new information last.',
                 'Repeat the preposition of the highlighted part before the relative: <i>con quien, de lo que, a quien</i>.'] } }
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
    hero: {
      es: 'Futuro de <b>subjuntivo</b>',
      sub: { ru: 'Hablare, tuviere, fuere: форма законов, поговорок и торжественных формул — и чем её заменяют сегодня',
             en: 'Hablare, tuviere, fuere: the form of laws, sayings and solemn formulas — and what replaces it today' }
    },
    tabs: [
      {
        id: 'formation', label: { ru: 'Образование', en: 'Formation' },
        blocks: [
          { type: 'text', heading: { ru: 'Как образуется', en: 'How to form it' }, body: {
            ru: ['Как и Imperfecto de subjuntivo, от формы <b>ellos</b> в Indefinido: отрезаем <b>-ron</b> и добавляем <b>-re, -res, -re, -remos, -reis, -ren</b>. <i>hablaron → hablare</i>, <i>tuvieron → tuviere</i>, <i>fueron → fuere</i>.',
                 'Форма nosotros — с ударением: <i>habláremos, tuviéremos</i>. Сложная форма — <b>hubiere + причастие</b>: <i>hubiere cometido</i>.',
                 'Легко спутать с Imperfecto de subjuntivo: <i>tuviera</i> (imperfecto) — <i>tuviere</i> (futuro). Отличие — одна буква: <b>-ra</b> и <b>-re</b>.'],
            en: ['Like the Imperfecto de subjuntivo, it comes from the <b>ellos</b> form of the Indefinido: drop <b>-ron</b> and add <b>-re, -res, -re, -remos, -reis, -ren</b>. <i>hablaron → hablare</i>, <i>tuvieron → tuviere</i>, <i>fueron → fuere</i>.',
                 'The nosotros form has an accent: <i>habláremos, tuviéremos</i>. The compound form is <b>hubiere + participle</b>: <i>hubiere cometido</i>.',
                 'It is easy to confuse with the Imperfecto de subjuntivo: <i>tuviera</i> (imperfecto) vs <i>tuviere</i> (futuro). The difference is one letter: <b>-ra</b> vs <b>-re</b>.'] } },
          { type: 'table', heading: { ru: 'Три глагола во всех лицах', en: 'Three verbs in every person' },
            head: ['', 'hablar', 'tener', 'ser / ir'],
            rows: [
              ['yo', 'hablare', 'tuviere', 'fuere'],
              ['tú', 'hablares', 'tuvieres', 'fueres'],
              ['él / ella', 'hablare', 'tuviere', 'fuere'],
              ['nosotros', 'habláremos', 'tuviéremos', 'fuéremos'],
              ['vosotros', 'hablareis', 'tuviereis', 'fuereis'],
              ['ellos', 'hablaren', 'tuvieren', 'fueren']
            ] },
          { type: 'conj', heading: { ru: '-re или -ra', en: '-re or -ra' }, verbs: [
            { inf: 'comer', tr: { ru: 'comieron → comie-', en: 'comieron → comie-' }, variants: [
              { label: 'Futuro subj.', color: 'purple', rows: [['yo', 'comie<b>re</b>'], ['tú', 'comie<b>res</b>'], ['él / ella', 'comie<b>re</b>'], ['nosotros', 'comié<b>remos</b>'], ['vosotros', 'comie<b>reis</b>'], ['ellos', 'comie<b>ren</b>']] },
              { label: 'Imperfecto subj.', color: 'coral', rows: [['yo', 'comie<b>ra</b>'], ['tú', 'comie<b>ras</b>'], ['él / ella', 'comie<b>ra</b>'], ['nosotros', 'comié<b>ramos</b>'], ['vosotros', 'comie<b>rais</b>'], ['ellos', 'comie<b>ran</b>']] }
            ] },
            { inf: 'decir', tr: { ru: 'dijeron → dije-', en: 'dijeron → dije-' }, variants: [
              { label: 'Futuro subj.', color: 'purple', rows: [['yo', 'dije<b>re</b>'], ['tú', 'dije<b>res</b>'], ['él / ella', 'dije<b>re</b>'], ['nosotros', 'dijé<b>remos</b>'], ['vosotros', 'dije<b>reis</b>'], ['ellos', 'dije<b>ren</b>']] },
              { label: 'Imperfecto subj.', color: 'coral', rows: [['yo', 'dije<b>ra</b>'], ['tú', 'dije<b>ras</b>'], ['él / ella', 'dije<b>ra</b>'], ['nosotros', 'dijé<b>ramos</b>'], ['vosotros', 'dije<b>rais</b>'], ['ellos', 'dije<b>ran</b>']] }
            ] },
            { inf: 'haber + participio', tr: { ru: 'сложная форма · cometer', en: 'compound form · cometer' }, variants: [
              { label: 'Futuro subj.', color: 'purple', rows: [['yo', '<b>hubiere</b> cometido'], ['tú', '<b>hubieres</b> cometido'], ['él / ella', '<b>hubiere</b> cometido'], ['nosotros', '<b>hubiéremos</b> cometido'], ['vosotros', '<b>hubiereis</b> cometido'], ['ellos', '<b>hubieren</b> cometido']] },
              { label: 'Imperfecto subj.', color: 'coral', rows: [['yo', '<b>hubiera</b> cometido'], ['tú', '<b>hubieras</b> cometido'], ['él / ella', '<b>hubiera</b> cometido'], ['nosotros', '<b>hubiéramos</b> cometido'], ['vosotros', '<b>hubierais</b> cometido'], ['ellos', '<b>hubieran</b> cometido']] }
            ] }
          ] },
          { type: 'tip', title: { ru: 'Одна буква — три формы', en: 'One letter, three forms' }, body: {
            ru: ['<b>hablare</b> — futuro de subjuntivo · <b>hablara</b> — imperfecto de subjuntivo · <b>hablaré</b> — обычное будущее (ударение на конце).',
                 'Во множественном так же: <i>habláremos</i> — <i>habláramos</i> — <i>hablaremos</i>.'],
            en: ['<b>hablare</b> — futuro de subjuntivo · <b>hablara</b> — imperfecto de subjuntivo · <b>hablaré</b> — the ordinary future (stress on the end).',
                 'The plural works the same way: <i>habláremos</i> — <i>habláramos</i> — <i>hablaremos</i>.'] } }
        ]
      },
      {
        id: 'legal', label: { ru: 'Законы', en: 'Legal texts' },
        blocks: [
          { type: 'text', heading: { ru: 'Где встречается', en: 'Where you find it' }, body: {
            ru: ['В живой речи этой формы нет уже несколько веков. Она осталась в <b>юридических и административных текстах</b> (особенно старых законах и регламентах), в <b>поговорках</b> и <b>торжественных формулах</b>. Её нужно узнавать, а использовать самому — только для стилизации.',
                 'Смысл — гипотетическое будущее: «если когда-нибудь кто-то…». Сегодня вместо неё говорят presente de subjuntivo (после <i>que, quien, cuando</i>) или presente de indicativo (после <i>si</i>).'],
            en: ['This form disappeared from everyday speech centuries ago. It survives in <b>legal and administrative texts</b> (especially older laws and regulations), in <b>sayings</b> and in <b>solemn formulas</b>. You need to recognise it; use it yourself only for stylistic effect.',
                 'It means a hypothetical future: “if at any time someone…”. Today it is replaced by the present subjunctive (after <i>que, quien, cuando</i>) or the present indicative (after <i>si</i>).'] } },
          { type: 'triggers', heading: { ru: 'Типичные модели в законах', en: 'Typical patterns in laws' }, items: [
            { num: '1', color: 'purple', title: { ru: 'Кто сделает…', en: 'Whoever does…' }, sub: { ru: 'лицо, к которому применяется норма', en: 'the person the rule applies to' },
              phrases: ['el que', 'quien', 'los que', 'toda persona que'],
              ex: { es: 'Quien <b>causare</b> daños a bienes ajenos estará obligado a repararlos.', ru: 'Тот, кто причинит ущерб чужому имуществу, обязан его возместить.', en: 'Whoever causes damage to another’s property shall be obliged to make it good.' } },
            { num: '2', color: 'purple', title: { ru: 'Условие', en: 'Condition' }, sub: { ru: 'если, разве что, в случае', en: 'if, unless, in case' },
              phrases: ['si', 'salvo que', 'en caso de que'],
              ex: { es: 'Si el arrendatario no <b>abonare</b> la renta, el contrato quedará resuelto.', ru: 'Если арендатор не внесёт плату, договор будет расторгнут.', en: 'Should the tenant fail to pay the rent, the contract shall be terminated.' } },
            { num: '3', color: 'purple', title: { ru: 'Время', en: 'Time' }, sub: { ru: 'когда, пока, до тех пор пока', en: 'when, while, until' },
              phrases: ['cuando', 'mientras', 'hasta que'],
              ex: { es: 'Mientras no se <b>dictare</b> sentencia firme, el acusado se presumirá inocente.', ru: 'Пока не вынесен окончательный приговор, обвиняемый считается невиновным.', en: 'Until a final judgment is handed down, the accused shall be presumed innocent.' } },
            { num: '4', color: 'purple', title: { ru: 'Сложная форма', en: 'Compound form' }, sub: { ru: 'действие, завершённое к моменту', en: 'an action completed by then' },
              phrases: ['hubiere + participio'],
              ex: { es: 'Los que <b>hubieren participado</b> en el delito responderán solidariamente.', ru: 'Все, кто участвовал в преступлении, несут солидарную ответственность.', en: 'All those who have taken part in the offence shall be jointly liable.' } }
          ] },
          { type: 'text', heading: { ru: 'Другие приметы юридического стиля', en: 'Other marks of legal style' }, body: {
            ru: ['<b>Haber de + инфинитив</b> — долженствование в регламентах: <i>Los candidatos habrán de presentar la solicitud antes del día 5</i>. Формулы: <i>so pena de</i> («под угрозой»), <i>por la presente</i> («настоящим»), <i>el susodicho</i> («вышеупомянутый»).'],
            en: ['<b>Haber de + infinitive</b> expresses obligation in regulations: <i>Los candidatos habrán de presentar la solicitud antes del día 5</i>. Formulas: <i>so pena de</i> (“on pain of”), <i>por la presente</i> (“hereby”), <i>el susodicho</i> (“the aforementioned”).'] } },
          { type: 'markers', heading: { ru: 'Юридические формулы', en: 'Legal formulas' }, groups: [
            { color: 'teal', title: { ru: 'Книжный и юридический стиль', en: 'Bookish and legal style' }, tags: ['so pena de', 'por la presente', 'el susodicho', 'haber de + infinitivo', 'dicho / dicha', 'el abajo firmante', 'a los efectos de', 'en su caso'] }
          ] }
        ]
      },
      {
        id: 'formulas', label: { ru: 'Формулы', en: 'Set phrases' },
        blocks: [
          { type: 'text', heading: { ru: 'Поговорки и торжественные формулы', en: 'Sayings and solemn formulas' }, body: {
            ru: ['В нескольких поговорках и формулах futuro de subjuntivo застыл навсегда. Их не перестраивают: говорят так, как они сложились, — <i>Adonde fueres, haz lo que vieres</i>. Рядом живут и современные варианты с presente de subjuntivo.',
                 'Та же форма звучит в <b>клятвах и присягах</b> («если же вы этого не сделаете…») и в юридическом обороте <i>a que hubiere lugar</i> — «какие положены».'],
            en: ['In a handful of sayings and formulas the futuro de subjuntivo is frozen for good. They are not rebuilt; people say them as they have come down — <i>Adonde fueres, haz lo que vieres</i>. Modern versions with the present subjunctive exist alongside them.',
                 'The same form is heard in <b>oaths</b> (“and should you fail to do so…”) and in the legal phrase <i>a que hubiere lugar</i> — “as may be appropriate”.'] } },
          { type: 'conj', heading: { ru: 'Формула и её современный вид', en: 'The formula and its modern form' }, verbs: [
            { inf: 'sea lo que fuere', tr: { ru: 'что бы то ни было', en: 'whatever it may be' }, variants: [
              { label: 'Futuro subj.', color: 'purple', rows: [['fórmula', 'sea lo que <b>fuere</b>']] },
              { label: 'Presente subj.', color: 'coral', rows: [['hoy', 'sea lo que <b>sea</b>']] }
            ] },
            { inf: 'fuere como fuere', tr: { ru: 'как бы то ни было', en: 'be that as it may' }, variants: [
              { label: 'Futuro subj.', color: 'purple', rows: [['fórmula', '<b>fuere</b> como <b>fuere</b>']] },
              { label: 'Presente subj.', color: 'coral', rows: [['hoy', '<b>sea</b> como <b>sea</b>']] }
            ] },
            { inf: 'venga lo que viniere', tr: { ru: 'будь что будет', en: 'come what may' }, variants: [
              { label: 'Futuro subj.', color: 'purple', rows: [['fórmula', 'venga lo que <b>viniere</b>']] },
              { label: 'Presente subj.', color: 'coral', rows: [['hoy', 'venga lo que <b>venga</b>']] }
            ] }
          ] },
          { type: 'markers', heading: { ru: 'Узнайте на слух', en: 'Recognise them' }, groups: [
            { color: 'purple', title: { ru: 'Застывшие формулы', en: 'Frozen formulas' }, tags: ['sea lo que fuere', 'fuere como fuere', 'venga lo que viniere', 'adonde fueres', 'a que hubiere lugar', 'si así no lo hiciereis'] }
          ] }
        ]
      },
      {
        id: 'modern', label: { ru: 'Современное', en: 'Modern' },
        blocks: [
          { type: 'text', heading: { ru: 'Чем заменяют сегодня', en: 'What replaces it today' }, body: {
            ru: ['После <i>que, quien, el que, cuando, donde</i> — <b>presente de subjuntivo</b>; после <i>si</i> — <b>presente de indicativo</b>; <i>hubiere + причастие</i> → <b>haya + причастие</b>.'],
            en: ['After <i>que, quien, el que, cuando, donde</i> use the <b>present subjunctive</b>; after <i>si</i> the <b>present indicative</b>; <i>hubiere + participle</i> → <b>haya + participle</b>.'] } },
          { type: 'table', heading: { ru: 'Архаично и современно', en: 'Archaic and modern' },
            head: ['arcaico', 'moderno'],
            rows: [
              ['El que infringiere…', 'El que infrinja…'],
              ['Si alguien alterare…', 'Si alguien altera…'],
              ['Cuando llegare el momento…', 'Cuando llegue el momento…'],
              ['Sea lo que fuere.', 'Sea lo que sea.'],
              ['Adonde fueres…', 'Adonde vayas…']
            ] },
          { type: 'conj', heading: { ru: 'Одна фраза — две эпохи', en: 'One sentence, two eras' }, verbs: [
            { inf: 'el que + verbo', tr: { ru: '→ presente de subjuntivo', en: '→ present subjunctive' }, variants: [
              { label: 'Futuro subj.', color: 'purple', rows: [['arcaico', 'El que <b>incumpliere</b> el contrato pagará una multa.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['hoy', 'El que <b>incumpla</b> el contrato pagará una multa.']] }
            ] },
            { inf: 'si + verbo', tr: { ru: '→ presente de indicativo', en: '→ present indicative' }, variants: [
              { label: 'Futuro subj.', color: 'purple', rows: [['arcaico', 'Si el cliente <b>solicitare</b> factura, se le entregará.']] },
              { label: 'Indicativo', color: 'blue', rows: [['hoy', 'Si el cliente <b>solicita</b> factura, se le entregará.']] }
            ] },
            { inf: 'cuando + verbo', tr: { ru: '→ presente de subjuntivo', en: '→ present subjunctive' }, variants: [
              { label: 'Futuro subj.', color: 'purple', rows: [['arcaico', 'Cuando <b>fuere</b> necesario, se convocará una reunión.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['hoy', 'Cuando <b>sea</b> necesario, se convocará una reunión.']] }
            ] },
            { inf: 'hubiere + participio', tr: { ru: '→ haya + participio', en: '→ haya + participle' }, variants: [
              { label: 'Futuro subj.', color: 'purple', rows: [['arcaico', 'Quien <b>hubiere</b> pagado la cuota podrá votar.']] },
              { label: 'Subjuntivo', color: 'coral', rows: [['hoy', 'Quien <b>haya</b> pagado la cuota podrá votar.']] }
            ] }
          ] },
          { type: 'text', heading: { ru: 'Не путайте', en: 'Don’t mix them up' }, body: {
            ru: ['После <i>si</i> presente de subjuntivo невозможен: не «si alguien altere», а <i>si alguien altera</i>. И не вставляйте форму на -re в обычную речь: <i>cuando llegare</i> в письме другу прозвучит как пародия на старинный закон.'],
            en: ['The present subjunctive is impossible after <i>si</i>: not “si alguien altere” but <i>si alguien altera</i>. And don’t slip the -re form into ordinary speech: <i>cuando llegare</i> in a letter to a friend sounds like a parody of an old law.'] } },
          { type: 'text', heading: { ru: 'Другие старинные черты', en: 'Other old-fashioned features' }, body: {
            ru: ['<b>Местоимение после спрягаемого глагола</b>: <i>díjole</i> = <i>le dijo</i>, <i>hallábase</i> = <i>se hallaba</i>, <i>sentóse</i> = <i>se sentó</i>. Встречается в старой литературе и в нарочито книжном стиле; сегодня местоимение ставят перед глаголом.'],
            en: ['<b>A pronoun attached after a conjugated verb</b>: <i>díjole</i> = <i>le dijo</i>, <i>hallábase</i> = <i>se hallaba</i>, <i>sentóse</i> = <i>se sentó</i>. Found in old literature and deliberately bookish style; today the pronoun goes before the verb.'] } }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Законы и регламенты', en: 'Laws and regulations' }, items: [
            { color: 'purple', es: 'El que <b>infringiere</b> esta norma será sancionado.', ru: 'Тот, кто нарушит это правило, будет наказан.', en: 'Whoever breaks this rule shall be penalised.' },
            { color: 'purple', es: 'Si alguien <b>alterare</b> el orden, será expulsado.', ru: 'Если кто-либо нарушит порядок, он будет удалён.', en: 'Should anyone disturb the peace, they shall be removed.' },
            { color: 'purple', es: 'Quien no <b>cumpliere</b> lo dispuesto en este artículo incurrirá en falta grave.', ru: 'Тот, кто не выполнит положения этой статьи, совершит серьёзное нарушение.', en: 'Anyone who fails to comply with this article will commit a serious offence.' },
            { color: 'purple', es: 'El que <b>presenciare</b> un delito está obligado a ponerlo en conocimiento del juez.', ru: 'Тот, кто стал свидетелем преступления, обязан сообщить об этом судье.', en: 'Anyone who witnesses an offence is obliged to report it to the judge.' },
            { color: 'purple', es: 'Si <b>hubiere</b> más de un heredero, la herencia se dividirá a partes iguales.', ru: 'Если наследников окажется несколько, наследство будет разделено поровну.', en: 'Should there be more than one heir, the estate shall be divided equally.' },
            { color: 'purple', es: 'Si el deudor no <b>pagare</b> en el plazo fijado, se procederá al embargo.', ru: 'Если должник не заплатит в установленный срок, на его имущество наложат арест.', en: 'Should the debtor fail to pay by the set deadline, his assets shall be seized.' },
            { color: 'purple', es: 'Quien <b>hallare</b> un objeto perdido deberá entregarlo en el ayuntamiento.', ru: 'Тот, кто найдёт потерянную вещь, обязан сдать её в мэрию.', en: 'Whoever finds a lost item must hand it in at the town hall.' },
            { color: 'teal', es: 'Los candidatos <b>habrán de</b> presentar la solicitud antes del día 5.', ru: 'Кандидаты должны подать заявление до 5-го числа.', en: 'Candidates shall submit their applications before the 5th.' },
            { color: 'teal', es: 'Queda prohibido fumar en el recinto, <b>so pena de</b> multa.', ru: 'Курить на территории запрещено под угрозой штрафа.', en: 'Smoking on the premises is prohibited, on pain of a fine.' }
          ] },
          { type: 'examples', heading: { ru: 'Поговорки и формулы', en: 'Sayings and formulas' }, items: [
            { color: 'purple', es: 'Adonde <b>fueres</b>, haz lo que <b>vieres</b>.', ru: 'В чужой монастырь со своим уставом не ходят.', en: 'When in Rome, do as the Romans do.' },
            { color: 'purple', es: 'Si así no lo <b>hiciereis</b>, que Dios y la Patria os lo demanden.', ru: 'Если вы этого не сделаете, пусть Бог и Родина с вас спросят.', en: 'Should you fail to do so, may God and the Nation hold you to account.' },
            { color: 'purple', es: 'Sea lo que <b>fuere</b>, mañana lo sabremos.', ru: 'Что бы это ни было, завтра мы это узнаем.', en: 'Whatever it may be, we’ll know tomorrow.' },
            { color: 'purple', es: 'Venga lo que <b>viniere</b>, estaremos juntos.', ru: 'Будь что будет — мы будем вместе.', en: 'Come what may, we’ll be together.' },
            { color: 'purple', es: '<b>Fuere</b> como <b>fuere</b>, el plazo ya ha vencido.', ru: 'Как бы то ни было, срок уже истёк.', en: 'Be that as it may, the deadline has already passed.' },
            { color: 'purple', es: 'Se le impondrán las sanciones a que <b>hubiere</b> lugar.', ru: 'К нему будут применены предусмотренные санкции.', en: 'The appropriate penalties shall be imposed on him.' },
            { color: 'purple', es: 'Lo que aquí se <b>dijere</b> quedará entre estas paredes.', ru: 'Всё, что будет здесь сказано, останется в этих стенах.', en: 'Whatever may be said here shall stay within these walls.' }
          ] },
          { type: 'examples', heading: { ru: 'Архаично и современно', en: 'Archaic and modern' }, items: [
            { badge: 'M', color: 'coral', es: 'El que <b>infrinja</b> esta norma será sancionado.', ru: 'Тот, кто нарушит это правило, будет наказан (современный вариант).', en: 'Whoever breaks this rule will be penalised (modern form).' },
            { badge: 'M', color: 'blue', es: 'Si alguien <b>altera</b> el orden, será expulsado.', ru: 'Если кто-то нарушит порядок, его выведут (современный вариант).', en: 'If anyone disturbs the peace, they will be removed (modern form).' },
            { badge: 'M', color: 'coral', es: 'Adonde <b>vayas</b>, haz lo que <b>veas</b>.', ru: 'Куда бы ты ни пошёл, делай, как там принято (современный вариант поговорки).', en: 'Wherever you go, do as you see others do (modern form of the saying).' },
            { badge: 'A', color: 'purple', es: 'Los que <b>hubieren abonado</b> la matrícula podrán solicitar su devolución.', ru: 'Те, кто оплатил обучение, смогут потребовать возврата денег.', en: 'Those who have paid the enrolment fee may request a refund.' },
            { badge: 'M', color: 'coral', es: 'Los que <b>hayan abonado</b> la matrícula podrán solicitar su devolución.', ru: 'Те, кто оплатил обучение, смогут потребовать возврата денег (современный вариант).', en: 'Those who have paid the enrolment fee may request a refund (modern form).' },
            { badge: 'A', color: 'purple', es: 'Cuando <b>llegare</b> el momento, sabremos qué hacer.', ru: 'Когда настанет час, мы будем знать, что делать.', en: 'When the time comes, we shall know what to do.' },
            { badge: 'M', color: 'coral', es: 'Cuando <b>llegue</b> el momento, sabremos qué hacer.', ru: 'Когда придёт время, мы будем знать, что делать (современный вариант).', en: 'When the time comes, we’ll know what to do (modern form).' },
            { badge: 'A', color: 'purple', es: 'Si <b>tuviere</b> alguna duda, consulte al personal de sala.', ru: 'Если у вас возникнут вопросы, обратитесь к персоналу зала.', en: 'Should you have any questions, please ask the staff.' },
            { badge: 'M', color: 'blue', es: 'Si <b>tiene</b> alguna duda, consulte al personal de sala.', ru: 'Если у вас есть вопросы, обратитесь к персоналу зала (современный вариант).', en: 'If you have any questions, please ask the staff (modern form).' }
          ] },
          { type: 'examples', heading: { ru: 'Другие старинные черты', en: 'Other old-fashioned features' }, items: [
            { color: 'teal', es: '<b>Hallábase</b> el caballero en su castillo cuando llegó la noticia.', ru: 'Рыцарь находился в своём замке, когда пришла весть.', en: 'The knight was in his castle when the news arrived.' },
            { color: 'teal', es: '<b>Díjole</b> entonces el anciano que nada temiese.', ru: 'И тогда старик сказал ему ничего не бояться.', en: 'Then the old man told him to fear nothing.' },
            { color: 'teal', es: '<b>Sentóse</b> la dama junto a la ventana y guardó silencio.', ru: 'Дама села у окна и умолкла.', en: 'The lady sat down by the window and fell silent.' }
          ] }
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
    hero: {
      es: 'Leísmo, <b>laísmo</b>, loísmo',
      sub: { ru: 'Le или lo, la или le: норма, отклонения, которые слышны в Испании, и что из них допускает академия',
             en: 'Le or lo, la or le: the standard, the deviations heard in Spain and which of them the Academy accepts' }
    },
    tabs: [
      {
        id: 'standard', label: { ru: 'Норма', en: 'Standard' },
        blocks: [
          { type: 'text', heading: { ru: 'Прямое и косвенное дополнение', en: 'Direct and indirect object' }, body: {
            ru: ['<b>Прямое дополнение</b> (кого? что?) — <b>lo, la, los, las</b> по роду и числу. <b>Косвенное</b> (кому?) — <b>le, les</b> для любого рода.',
                 'Проверка: попробуйте сделать фразу пассивной. <i>Vi a Carmen → Carmen fue vista</i> — получилось, значит, Carmen — прямое дополнение: <i>la vi</i>. <i>Dije la verdad a Carmen</i> — Carmen в пассиве подлежащим не станет, это косвенное: <i>le dije la verdad</i>.',
                 'Два местоимения подряд: <b>le / les + lo, la, los, las → se lo, se la…</b>: <i>Se lo di</i>, а не «le lo di».'],
            en: ['The <b>direct object</b> (whom? what?) is <b>lo, la, los, las</b> by gender and number. The <b>indirect object</b> (to whom?) is <b>le, les</b> for any gender.',
                 'A test: try the passive. <i>Vi a Carmen → Carmen fue vista</i> works, so Carmen is the direct object: <i>la vi</i>. <i>Dije la verdad a Carmen</i> — Carmen can’t be the passive subject, so it is indirect: <i>le dije la verdad</i>.',
                 'Two pronouns together: <b>le / les + lo, la, los, las → se lo, se la…</b>: <i>Se lo di</i>, not “le lo di”.'] } },
          { type: 'table', heading: { ru: 'Местоимения-дополнения', en: 'Object pronouns' },
            head: ['', 'masculino', 'femenino'],
            rows: [
              ['directo singular', 'lo', 'la'],
              ['directo plural', 'los', 'las'],
              ['indirecto singular', 'le', 'le'],
              ['indirecto plural', 'les', 'les'],
              ['indirecto + directo', 'se lo · se los', 'se la · se las']
            ] },
          { type: 'rules', heading: { ru: 'Три правила', en: 'Three rules' }, items: [
            { color: 'teal', title: { ru: 'Прямое: кого? что?', en: 'Direct: whom? what?' }, es: 'lo · la · los · las',
              body: { ru: 'Род и число — как у того, кого заменяем: <i>la vi</i> (a Carmen), <i>los compré</i> (los libros).', en: 'Gender and number match what is replaced: <i>la vi</i> (a Carmen), <i>los compré</i> (los libros).' } },
            { color: 'teal', title: { ru: 'Косвенное: кому?', en: 'Indirect: to whom?' }, es: 'le · les',
              body: { ru: 'Род не различается. Часто удваивается существительным: <i>A Carmen le dije…</i>', en: 'No gender distinction. It is often doubled by the noun: <i>A Carmen le dije…</i>' } },
            { color: 'teal', title: { ru: 'Le + lo → se lo', en: 'Le + lo → se lo' }, es: 'se lo · se la · se los · se las',
              body: { ru: 'Перед <i>lo, la, los, las</i> местоимение <i>le, les</i> превращается в <i>se</i>.', en: 'Before <i>lo, la, los, las</i>, <i>le, les</i> turns into <i>se</i>.' } }
          ] },
          { type: 'text', heading: { ru: 'Серые зоны', en: 'Grey areas' }, body: {
            ru: ['<b>Глаголы чувства</b> (<i>preocupar, molestar, sorprender, asustar</i>): если причина — событие или вещь, обычно <i>le</i>: <i>A Ana le molesta el ruido</i>; если человек действует намеренно — <i>lo / la</i>: <i>La molestó a propósito</i>.',
                 '<b>Безличное se</b> и <b>глаголы называния</b> с именной частью часто берут <i>le</i>, и норма это принимает: <i>A Luis se le considera el mejor</i>; <i>Le llaman el Rubio</i>.'],
            en: ['<b>Verbs of feeling</b> (<i>preocupar, molestar, sorprender, asustar</i>): when the cause is an event or thing, <i>le</i> is usual: <i>A Ana le molesta el ruido</i>; when a person acts on purpose, <i>lo / la</i>: <i>La molestó a propósito</i>.',
                 '<b>Impersonal se</b> and <b>verbs of naming</b> with a complement often take <i>le</i>, and the standard accepts it: <i>A Luis se le considera el mejor</i>; <i>Le llaman el Rubio</i>.'] } }
        ]
      },
      {
        id: 'leismo', label: { ru: 'Leísmo', en: 'Leísmo' },
        blocks: [
          { type: 'text', heading: { ru: 'Le вместо lo', en: 'Le instead of lo' }, body: {
            ru: ['<b>Leísmo</b> — le в роли прямого дополнения. Он очень распространён в центре и на севере Испании.',
                 'Академия <b>допускает</b> только один вид: le вместо lo для <b>человека мужского рода в единственном числе</b>: <i>A tu hermano le conozco</i> (= <i>lo conozco</i>). Широко распространено и le при вежливом usted: <i>¿Le acompaño?</i>',
                 '<b>Не допускается</b>: le для предметов (<i>«el coche le vendí»</i> → <i>lo vendí</i>) и для женщин (<i>«a Carmen le vi»</i> → <i>la vi</i>). Множественное <i>les</i> вместо <i>los</i> тоже не рекомендуется.'],
            en: ['<b>Leísmo</b> is using le as a direct object. It is very common in central and northern Spain.',
                 'The Academy <b>accepts</b> only one kind: le instead of lo for a <b>male person in the singular</b>: <i>A tu hermano le conozco</i> (= <i>lo conozco</i>). Le with polite usted is also widespread: <i>¿Le acompaño?</i>',
                 '<b>Not accepted</b>: le for things (<i>“el coche le vendí”</i> → <i>lo vendí</i>) or for women (<i>“a Carmen le vi”</i> → <i>la vi</i>). Plural <i>les</i> for <i>los</i> is also discouraged.'] } },
          { type: 'table', heading: { ru: 'Что допускает академия', en: 'What the Academy accepts' },
            head: [{ ru: 'Кого замещает', en: 'Refers to' }, 'le', { ru: 'Оценка', en: 'Verdict' }],
            rows: [
              [{ ru: 'мужчина, ед. ч.', en: 'man, singular' }, 'A Juan le esperé.', { ru: 'допустимо', en: 'accepted' }],
              [{ ru: 'usted', en: 'usted' }, 'Le saluda atentamente.', { ru: 'распространено', en: 'widespread' }],
              [{ ru: 'мужчины, мн. ч.', en: 'men, plural' }, 'A tus primos les vi.', { ru: 'не рекомендуется', en: 'discouraged' }],
              [{ ru: 'женщина', en: 'woman' }, 'A Carmen le esperé.', { ru: 'ошибка', en: 'mistake' }],
              [{ ru: 'предмет', en: 'thing' }, 'El coche le vendí.', { ru: 'ошибка', en: 'mistake' }]
            ] },
          { type: 'conj', heading: { ru: 'Норма или leísmo', en: 'Standard or leísmo' }, verbs: [
            { inf: 'llamar a Pablo', tr: { ru: 'мужчина: можно оба', en: 'a man: both are fine' }, variants: [
              { label: { ru: 'норма', en: 'standard' }, color: 'teal', rows: [['él', 'A Pablo <b>lo</b> llamo mañana.']] },
              { label: { ru: 'leísmo: можно', en: 'leísmo: OK' }, color: 'amber', rows: [['él', 'A Pablo <b>le</b> llamo mañana.']] }
            ] },
            { inf: 'ver a Carmen', tr: { ru: 'женщина: только la', en: 'a woman: only la' }, variants: [
              { label: { ru: 'норма', en: 'standard' }, color: 'teal', rows: [['ella', 'A Carmen <b>la</b> vi en el cine.']] },
              { label: { ru: 'leísmo: ошибка', en: 'leísmo: wrong' }, color: 'coral', rows: [['ella', 'A Carmen <b>le</b> vi en el cine.']] }
            ] },
            { inf: 'aparcar el coche', tr: { ru: 'предмет: только lo', en: 'a thing: only lo' }, variants: [
              { label: { ru: 'норма', en: 'standard' }, color: 'teal', rows: [['el coche', 'El coche <b>lo</b> aparqué fuera.']] },
              { label: { ru: 'leísmo: ошибка', en: 'leísmo: wrong' }, color: 'coral', rows: [['el coche', 'El coche <b>le</b> aparqué fuera.']] }
            ] }
          ] },
          { type: 'tip', title: { ru: 'Когда le безопасно', en: 'When le is safe' }, body: {
            ru: ['Для мужчины в единственном числе и для вежливого <i>usted</i> в Испании <i>le</i> никого не смутит. Для женщин и предметов — только <i>la</i> и <i>lo</i>.'],
            en: ['For a man in the singular and for polite <i>usted</i>, <i>le</i> will raise no eyebrows in Spain. For women and things use only <i>la</i> and <i>lo</i>.'] } }
        ]
      },
      {
        id: 'laismo', label: { ru: 'Laísmo', en: 'Laísmo' },
        blocks: [
          { type: 'text', heading: { ru: 'La вместо le', en: 'La instead of le' }, body: {
            ru: ['<b>Laísmo</b> — la вместо le для женщины в роли косвенного дополнения: <i>«La dije la verdad»</i> → правильно <i>Le dije la verdad</i>. Типичен для Мадрида и Кастилии, но считается ошибкой, особенно в письменной речи.',
                 'Глаголы вроде <b>gustar, encantar, doler, interesar</b> всегда требуют le / les: <i>A mis hijas les encanta el mar</i>.'],
            en: ['<b>Laísmo</b> is la instead of le for a woman as the indirect object: <i>“La dije la verdad”</i> → correct: <i>Le dije la verdad</i>. It is typical of Madrid and Castile but counts as a mistake, especially in writing.',
                 'Verbs like <b>gustar, encantar, doler, interesar</b> always take le / les: <i>A mis hijas les encanta el mar</i>.'] } },
          { type: 'conj', heading: { ru: 'Норма или laísmo', en: 'Standard or laísmo' }, verbs: [
            { inf: 'contar a Lucía', tr: { ru: 'кому? — ей', en: 'to whom? — to her' }, variants: [
              { label: { ru: 'норма', en: 'standard' }, color: 'teal', rows: [['ella', 'A Lucía <b>le</b> conté el secreto.']] },
              { label: { ru: 'laísmo: ошибка', en: 'laísmo: wrong' }, color: 'coral', rows: [['ella', 'A Lucía <b>la</b> conté el secreto.']] }
            ] },
            { inf: 'dar a las niñas', tr: { ru: 'кому? — им', en: 'to whom? — to them' }, variants: [
              { label: { ru: 'норма', en: 'standard' }, color: 'teal', rows: [['ellas', 'A las niñas <b>les</b> di caramelos.']] },
              { label: { ru: 'laísmo: ошибка', en: 'laísmo: wrong' }, color: 'coral', rows: [['ellas', 'A las niñas <b>las</b> di caramelos.']] }
            ] },
            { inf: 'gustar', tr: { ru: 'всегда le / les', en: 'always le / les' }, variants: [
              { label: { ru: 'норма', en: 'standard' }, color: 'teal', rows: [['ella', 'A mi tía <b>le</b> gusta el jazz.']] },
              { label: { ru: 'laísmo: ошибка', en: 'laísmo: wrong' }, color: 'coral', rows: [['ella', 'A mi tía <b>la</b> gusta el jazz.']] }
            ] }
          ] },
          { type: 'text', color: 'teal', heading: { ru: 'Проверка мужчиной', en: 'The man test' }, body: {
            ru: ['Замените женщину мужчиной. Если для Педро вы сказали бы <i>le</i> (<i>A Pedro le conté el secreto</i>), то и для Лусии нужно <i>le</i>: <i>A Lucía le conté el secreto</i>.'],
            en: ['Replace the woman with a man. If you would say <i>le</i> for Pedro (<i>A Pedro le conté el secreto</i>), Lucía needs <i>le</i> as well: <i>A Lucía le conté el secreto</i>.'] } },
          { type: 'markers', heading: { ru: 'Глаголы с косвенным дополнением', en: 'Verbs with an indirect object' }, groups: [
            { color: 'teal', title: { ru: 'Кому? → le, les', en: 'To whom? → le, les' }, tags: ['decir', 'dar', 'contar', 'regalar', 'escribir', 'preguntar', 'pegar', 'gustar', 'doler', 'interesar'] }
          ] }
        ]
      },
      {
        id: 'loismo', label: { ru: 'Loísmo', en: 'Loísmo' },
        blocks: [
          { type: 'text', heading: { ru: 'Lo вместо le', en: 'Lo instead of le' }, body: {
            ru: ['<b>Loísmo</b> — lo вместо le: <i>«A Pedro lo dieron un premio»</i> → <i>Le dieron un premio</i>. Считается грубой ошибкой.',
                 'Встречается реже, чем laísmo, в основном в сельской речи Кастилии, и воспринимается как просторечие. Во множественном — <i>los</i> вместо <i>les</i>: «los dije que vinieran» → <i>les dije</i>.'],
            en: ['<b>Loísmo</b> is lo instead of le: <i>“A Pedro lo dieron un premio”</i> → <i>Le dieron un premio</i>. It is considered a serious error.',
                 'It is rarer than laísmo, found mainly in rural Castilian speech, and sounds uneducated. In the plural it is <i>los</i> for <i>les</i>: “los dije que vinieran” → <i>les dije</i>.'] } },
          { type: 'conj', heading: { ru: 'Норма или loísmo', en: 'Standard or loísmo' }, verbs: [
            { inf: 'dar a mi hijo', tr: { ru: 'кому? — ему', en: 'to whom? — to him' }, variants: [
              { label: { ru: 'норма', en: 'standard' }, color: 'teal', rows: [['él', 'A mi hijo <b>le</b> di un beso.']] },
              { label: { ru: 'loísmo: ошибка', en: 'loísmo: wrong' }, color: 'coral', rows: [['él', 'A mi hijo <b>lo</b> di un beso.']] }
            ] },
            { inf: 'decir a ellos', tr: { ru: 'кому? — им', en: 'to whom? — to them' }, variants: [
              { label: { ru: 'норма', en: 'standard' }, color: 'teal', rows: [['ellos', '<b>Les</b> dije que vinieran pronto.']] },
              { label: { ru: 'loísmo: ошибка', en: 'loísmo: wrong' }, color: 'coral', rows: [['ellos', '<b>Los</b> dije que vinieran pronto.']] }
            ] }
          ] },
          { type: 'text', heading: { ru: 'Это не loísmo', en: 'This is not loísmo' }, body: {
            ru: ['Не путайте с нормой: <i>lo</i> для мужчины в роли прямого дополнения (<i>A Pedro lo vi</i>) и нейтральное <i>lo</i> (<i>No lo sé</i>, <i>Lo de ayer</i>) — правильно.'],
            en: ['Don’t confuse it with the standard: <i>lo</i> for a man as the direct object (<i>A Pedro lo vi</i>) and neuter <i>lo</i> (<i>No lo sé</i>, <i>Lo de ayer</i>) are correct.'] } },
          { type: 'table', heading: { ru: 'Три отклонения рядом', en: 'The three deviations side by side' },
            head: ['', { ru: 'Что происходит', en: 'What happens' }, { ru: 'Оценка', en: 'Verdict' }],
            rows: [
              ['leísmo', 'le por lo · la', { ru: 'частично допустим', en: 'partly accepted' }],
              ['laísmo', 'la por le', { ru: 'ошибка', en: 'mistake' }],
              ['loísmo', 'lo por le', { ru: 'грубая ошибка', en: 'serious mistake' }]
            ] }
        ]
      },
      {
        id: 'regions', label: { ru: 'Регионы', en: 'Regions' },
        blocks: [
          { type: 'text', heading: { ru: 'Две системы', en: 'Two systems' }, body: {
            ru: ['<b>По падежу</b> (норма): прямое — <i>lo, la</i>, косвенное — <i>le</i>. Так говорят в Андалусии, на Канарах и в большей части Латинской Америки.',
                 '<b>По роду и исчисляемости</b>: в центре и на севере Кастилии, включая Мадрид, местоимение выбирают по тому, <i>кто</i> или <i>что</i> это, а не по роли в предложении: мужской род — <i>le</i>, женский — <i>la</i>. Отсюда вместе leísmo и laísmo, реже loísmo.',
                 'В Стране Басков, а также в Парагвае и андских районах Эквадора под влиянием местных языков <i>le</i> употребляют и для женщин.'],
            en: ['<b>By case</b> (the standard): direct — <i>lo, la</i>, indirect — <i>le</i>. This is how people speak in Andalusia, the Canary Islands and most of Latin America.',
                 '<b>By gender and countability</b>: in central and northern Castile, Madrid included, the pronoun is chosen by <i>who</i> or <i>what</i> is meant rather than by its role in the sentence: masculine — <i>le</i>, feminine — <i>la</i>. Hence leísmo and laísmo together, and less often loísmo.',
                 'In the Basque Country, and in Paraguay and the Andean areas of Ecuador, contact with local languages means <i>le</i> is used for women too.'] } },
          { type: 'table', heading: { ru: 'Карта по регионам', en: 'Map by region' },
            head: [{ ru: 'Регион', en: 'Region' }, { ru: 'Система', en: 'System' }],
            rows: [
              [{ ru: 'Андалусия, Канары', en: 'Andalusia, Canaries' }, { ru: 'по падежу', en: 'by case' }],
              [{ ru: 'Латинская Америка', en: 'Latin America' }, { ru: 'по падежу', en: 'by case' }],
              [{ ru: 'Мадрид, Кастилия', en: 'Madrid, Castile' }, { ru: 'по роду', en: 'by gender' }],
              [{ ru: 'Страна Басков', en: 'Basque Country' }, { ru: 'le для людей', en: 'le for people' }],
              [{ ru: 'Парагвай, Эквадор', en: 'Paraguay, Ecuador' }, { ru: 'le и для женщин', en: 'le for women too' }]
            ] },
          { type: 'conj', heading: { ru: 'Одна фраза — три региона', en: 'One sentence, three regions' }, verbs: [
            { inf: 'objeto directo', tr: { ru: 'кого? что?', en: 'whom? what?' }, variants: [
              { label: { ru: 'юг и Америка', en: 'South, Americas' }, color: 'teal', rows: [['Juan', 'A Juan <b>lo</b> vi.'], ['Carmen', 'A Carmen <b>la</b> vi.'], ['el libro', 'El libro <b>lo</b> tengo.']] },
              { label: 'Castilla', color: 'purple', rows: [['Juan', 'A Juan <b>le</b> vi.'], ['Carmen', 'A Carmen <b>la</b> vi.'], ['el libro', 'El libro <b>le</b> tengo.']] },
              { label: 'País Vasco', color: 'blue', rows: [['Juan', 'A Juan <b>le</b> vi.'], ['Carmen', 'A Carmen <b>le</b> vi.'], ['el libro', 'El libro <b>lo</b> tengo.']] }
            ] },
            { inf: 'objeto indirecto', tr: { ru: 'кому?', en: 'to whom?' }, variants: [
              { label: { ru: 'юг и Америка', en: 'South, Americas' }, color: 'teal', rows: [['Juan', 'A Juan <b>le</b> dije la verdad.'], ['Carmen', 'A Carmen <b>le</b> dije la verdad.']] },
              { label: 'Castilla', color: 'purple', rows: [['Juan', 'A Juan <b>le</b> dije la verdad.'], ['Carmen', 'A Carmen <b>la</b> dije la verdad.']] },
              { label: 'País Vasco', color: 'blue', rows: [['Juan', 'A Juan <b>le</b> dije la verdad.'], ['Carmen', 'A Carmen <b>le</b> dije la verdad.']] }
            ] }
          ] },
          { type: 'tip', title: { ru: 'Что выбрать ученику', en: 'What a learner should use' }, body: {
            ru: ['Говорите по падежу, как в норме: так понимают и принимают везде. <i>Le</i> для мужчины в Испании тоже нормально; laísmo и loísmo — нет, даже если вы их слышите в Мадриде каждый день.'],
            en: ['Use the case system of the standard: it is understood and accepted everywhere. <i>Le</i> for a man is also fine in Spain; laísmo and loísmo are not, even if you hear them in Madrid every day.'] } }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Норма', en: 'Standard' }, items: [
            { color: 'teal', es: 'A Marta <b>la</b> conozco desde niña.', ru: 'Марту я знаю с детства.', en: 'I’ve known Marta since she was a child.' },
            { color: 'teal', es: 'A Marta <b>le</b> regalé un libro.', ru: 'Марте я подарил книгу.', en: 'I gave Marta a book.' },
            { color: 'teal', es: '¿El libro? <b>Se lo</b> di a Marta.', ru: 'Книгу? Я отдал её Марте.', en: 'The book? I gave it to Marta.' },
            { color: 'teal', es: 'A tus padres <b>les</b> escribí una postal desde Roma.', ru: 'Твоим родителям я написал открытку из Рима.', en: 'I wrote your parents a postcard from Rome.' },
            { color: 'teal', es: '¿Las entradas? Ya <b>las</b> he comprado.', ru: 'Билеты? Я их уже купил.', en: 'The tickets? I’ve already bought them.' },
            { color: 'teal', es: '¿Le has devuelto el dinero a tu hermana? — Sí, ya <b>se lo</b> he devuelto.', ru: '— Ты вернул сестре деньги? — Да, уже вернул.', en: '“Have you paid your sister back?” “Yes, I already have.”' },
            { color: 'teal', es: 'A los vecinos <b>los</b> invitamos a cenar el sábado.', ru: 'Соседей мы пригласили на ужин в субботу.', en: 'We’ve invited the neighbours to dinner on Saturday.' },
            { color: 'teal', es: 'A mi jefa <b>le</b> preocupa el nuevo proyecto.', ru: 'Мою начальницу беспокоит новый проект.', en: 'My boss is worried about the new project.' },
            { color: 'teal', es: 'Estas fotos <b>las</b> hice en Asturias.', ru: 'Эти фото я сделал в Астурии.', en: 'I took these photos in Asturias.' }
          ] },
          { type: 'examples', heading: { ru: 'Leísmo: что допустимо', en: 'Leísmo: what is accepted' }, items: [
            { color: 'amber', es: 'A Luis <b>lo</b> vi ayer. / A Luis <b>le</b> vi ayer.', ru: 'Луиса я видел вчера (оба варианта допустимы).', en: 'I saw Luis yesterday (both are accepted).' },
            { color: 'teal', es: 'El coche <b>lo</b> vendí el año pasado.', ru: 'Машину я продал в прошлом году.', en: 'I sold the car last year.' },
            { color: 'amber', es: '¿<b>Le</b> acompaño a la salida, señor?', ru: 'Проводить вас к выходу?', en: 'Shall I see you to the exit, sir?' },
            { color: 'amber', es: 'A Luis se <b>le</b> considera el mejor cirujano del hospital.', ru: 'Луиса считают лучшим хирургом больницы.', en: 'Luis is considered the best surgeon in the hospital.' },
            { color: 'teal', es: 'A mi abuela <b>la</b> llevamos al médico cada martes.', ru: 'Бабушку мы возим к врачу каждый вторник.', en: 'We take my grandmother to the doctor every Tuesday.' }
          ] },
          { type: 'examples', heading: { ru: 'Кому? — le, les', en: 'To whom? — le, les' }, items: [
            { color: 'teal', es: 'A mi madre <b>le</b> escribo cada semana.', ru: 'Маме я пишу каждую неделю.', en: 'I write to my mother every week.' },
            { color: 'teal', es: 'A mis hermanas <b>les</b> duele la cabeza.', ru: 'У моих сестёр болит голова.', en: 'My sisters have a headache.' },
            { color: 'teal', es: 'A mi hija <b>le</b> encanta dibujar.', ru: 'Моя дочь обожает рисовать.', en: 'My daughter loves drawing.' },
            { color: 'teal', es: 'A la profesora <b>le</b> pregunté por el examen.', ru: 'Я спросил учительницу об экзамене.', en: 'I asked the teacher about the exam.' },
            { color: 'teal', es: 'A mi abuelo <b>le</b> duelen las rodillas.', ru: 'У дедушки болят колени.', en: 'My grandfather’s knees hurt.' },
            { color: 'teal', es: 'A los alumnos <b>les</b> pedí que apagaran el móvil.', ru: 'Я попросил учеников выключить телефоны.', en: 'I asked the students to switch off their phones.' },
            { color: 'teal', es: 'A Pablo <b>le</b> di las gracias por su ayuda.', ru: 'Я поблагодарил Пабло за помощь.', en: 'I thanked Pablo for his help.' }
          ] },
          { type: 'examples', heading: { ru: 'Прямое и косвенное в одной фразе', en: 'Direct and indirect in one sentence' }, items: [
            { color: 'teal', es: 'A Carmen <b>la</b> saludé, pero no <b>le</b> dije nada del viaje.', ru: 'С Кармен я поздоровался, но ничего не сказал ей о поездке.', en: 'I said hello to Carmen but didn’t tell her anything about the trip.' },
            { color: 'teal', es: 'A los niños <b>los</b> recogemos a las cinco y <b>les</b> damos la merienda.', ru: 'Детей мы забираем в пять и даём им полдник.', en: 'We pick the kids up at five and give them a snack.' },
            { color: 'teal', es: 'Si ves a Lucía, <b>dile</b> que <b>la</b> llamaré mañana.', ru: 'Если увидишь Лусию, скажи ей, что я позвоню ей завтра.', en: 'If you see Lucía, tell her I’ll call her tomorrow.' }
          ] }
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
