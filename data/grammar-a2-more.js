// A2 · grammar topics. How to add a topic — see CONTENT.md.
ECA.data.addGrammar('A2', [
  {
    id: 'a2-reflexivos', level: 'A2',
    title: { ru: 'Возвратные глаголы', en: 'Reflexive verbs' },
    hero: {
      es: 'Verbos <b>reflexivos</b>',
      sub: { ru: 'Глаголы с -se: levantarse, ducharse, llamarse — и куда ставить me, te, se',
             en: 'Verbs with -se: levantarse, ducharse, llamarse — and where to put me, te, se' }
    },
    tabs: [
      {
        id: 'how', label: { ru: 'Как устроено', en: 'How it works' },
        blocks: [
          { type: 'text', body: {
            ru: ['У возвратного глагола в конце инфинитива стоит <b>-se</b>: <i>levantarse</i> (вставать), <i>ducharse</i> (принимать душ), <i>llamarse</i> (называться). Действие направлено на себя — как русское «-ся».',
                 'При спряжении <b>se</b> меняется по лицам: <b>me, te, se, nos, os, se</b> — и встаёт перед глаголом.'],
            en: ['A reflexive verb has <b>-se</b> at the end of the infinitive: <i>levantarse</i> (to get up), <i>ducharse</i> (to shower), <i>llamarse</i> (to be called). The action is done to oneself.',
                 'When conjugated, <b>se</b> changes with the person — <b>me, te, se, nos, os, se</b> — and goes before the verb.'] } },
          { type: 'rules', items: [
            { color: 'blue', label: { ru: 'Формула', en: 'Formula' }, title: { ru: 'Местоимение + глагол', en: 'Pronoun + verb' }, es: 'me + levanto',
              body: { ru: 'Местоимение совпадает с лицом глагола: <i>yo <b>me</b> levanto</i>, <i>tú <b>te</b> levantas</i>. Отдельно <i>se</i> не пишут: не «levanto se».',
                      en: 'The pronoun matches the person of the verb: <i>yo <b>me</b> levanto</i>, <i>tú <b>te</b> levantas</i>. Never “levanto se”.' } },
            { color: 'teal', label: { ru: 'Не путать', en: 'Don’t mix up' }, title: { ru: 'Se — это 3-е лицо', en: 'Se is 3rd person' }, es: 'él se · ellos se · usted se',
              body: { ru: '<b>Se</b> — только для <i>él, ella, usted, ellos, ellas, ustedes</i>. Для «я» — <i>me</i>, для «мы» — <i>nos</i>: <i>nos levantamos</i>, а не «se levantamos».',
                      en: '<b>Se</b> is only for <i>él, ella, usted, ellos, ellas, ustedes</i>. “I” takes <i>me</i>, “we” takes <i>nos</i>: <i>nos levantamos</i>, not “se levantamos”.' } }
          ] },
          { type: 'table', heading: { ru: 'Три образца', en: 'Three models' },
            head: ['', 'levantarse', 'llamarse', 'acostarse (o → ue)'],
            rows: [
              ['yo', 'me levanto', 'me llamo', 'me acuesto'],
              ['tú', 'te levantas', 'te llamas', 'te acuestas'],
              ['él / ella / usted', 'se levanta', 'se llama', 'se acuesta'],
              ['nosotros / nosotras', 'nos levantamos', 'nos llamamos', 'nos acostamos'],
              ['vosotros / vosotras', 'os levantáis', 'os llamáis', 'os acostáis'],
              ['ellos / ellas / ustedes', 'se levantan', 'se llaman', 'se acuestan']
            ] },
          { type: 'examples', items: [
            { color: 'teal', es: '<b>Me levanto</b> a las siete.', ru: 'Я встаю в семь.', en: 'I get up at seven.' },
            { color: 'teal', es: '¿Cómo <b>te llamas</b>?', ru: 'Как тебя зовут?', en: 'What’s your name?' },
            { color: 'teal', es: 'Los viernes <b>nos acostamos</b> tarde.', ru: 'По пятницам мы ложимся поздно.', en: 'On Fridays we go to bed late.' }
          ] },
          { type: 'markers', heading: { ru: 'Частые возвратные глаголы', en: 'Common reflexive verbs' }, groups: [
            { color: 'teal', title: { ru: 'Распорядок дня', en: 'Daily routine' },
              tags: ['despertarse', 'levantarse', 'ducharse', 'lavarse', 'peinarse', 'afeitarse', 'maquillarse', 'vestirse', 'acostarse'] },
            { color: 'coral', title: { ru: 'Чувства', en: 'Feelings' },
              tags: ['aburrirse', 'enfadarse', 'preocuparse', 'alegrarse', 'ponerse nervioso', 'enamorarse'] },
            { color: 'purple', title: { ru: 'Движение и перемены', en: 'Movement and change' },
              tags: ['sentarse', 'quedarse', 'irse', 'mudarse', 'casarse', 'dormirse'] }
          ] },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>«Друг друга»:</b> во множественном числе <i>nos, os, se</i> могут значить взаимное действие: <i>Nos vemos mañana.</i> — «Увидимся завтра». <i>Ana y Luis se quieren.</i> — «Ана и Луис любят друг друга».'],
            en: ['<b>“Each other”:</b> in the plural, <i>nos, os, se</i> can show a mutual action: <i>Nos vemos mañana.</i> — “See you tomorrow”. <i>Ana y Luis se quieren.</i> — “Ana and Luis love each other”.'] } }
        ]
      },
      {
        id: 'conj', label: { ru: 'Спряжение', en: 'Conjugation' },
        blocks: [
          { type: 'text', body: {
            ru: ['Переключайте время у каждого глагола. В <b>Perfecto</b> местоимение стоит перед <i>haber</i>: <i>me he levantado</i>, а participio не меняется. В <b>Indefinido</b> — как обычно, перед глаголом: <i>me levanté</i>.'],
            en: ['Switch the tense for each verb. In the <b>Perfecto</b> the pronoun goes before <i>haber</i>: <i>me he levantado</i>, and the participle does not change. In the <b>Indefinido</b> it goes before the verb as usual: <i>me levanté</i>.'] } },
          { type: 'conj', verbs: [
            { inf: 'levantarse', tr: { ru: 'вставать', en: 'to get up' }, variants: [
              { label: 'Presente', color: 'teal', rows: [['yo', '<b>me</b> levanto'], ['tú', '<b>te</b> levantas'], ['él / ella', '<b>se</b> levanta'], ['nosotros', '<b>nos</b> levantamos'], ['vosotros', '<b>os</b> levantáis'], ['ellos', '<b>se</b> levantan']] },
              { label: 'Perfecto', color: 'blue', rows: [['yo', '<b>me</b> he levantado'], ['tú', '<b>te</b> has levantado'], ['él / ella', '<b>se</b> ha levantado'], ['nosotros', '<b>nos</b> hemos levantado'], ['vosotros', '<b>os</b> habéis levantado'], ['ellos', '<b>se</b> han levantado']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', '<b>me</b> levanté'], ['tú', '<b>te</b> levantaste'], ['él / ella', '<b>se</b> levantó'], ['nosotros', '<b>nos</b> levantamos'], ['vosotros', '<b>os</b> levantasteis'], ['ellos', '<b>se</b> levantaron']] }
            ] },
            { inf: 'ducharse', tr: { ru: 'принимать душ', en: 'to have a shower' }, variants: [
              { label: 'Presente', color: 'teal', rows: [['yo', '<b>me</b> ducho'], ['tú', '<b>te</b> duchas'], ['él / ella', '<b>se</b> ducha'], ['nosotros', '<b>nos</b> duchamos'], ['vosotros', '<b>os</b> ducháis'], ['ellos', '<b>se</b> duchan']] },
              { label: 'Perfecto', color: 'blue', rows: [['yo', '<b>me</b> he duchado'], ['tú', '<b>te</b> has duchado'], ['él / ella', '<b>se</b> ha duchado'], ['nosotros', '<b>nos</b> hemos duchado'], ['vosotros', '<b>os</b> habéis duchado'], ['ellos', '<b>se</b> han duchado']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', '<b>me</b> duché'], ['tú', '<b>te</b> duchaste'], ['él / ella', '<b>se</b> duchó'], ['nosotros', '<b>nos</b> duchamos'], ['vosotros', '<b>os</b> duchasteis'], ['ellos', '<b>se</b> ducharon']] }
            ] },
            { inf: 'acostarse', tr: { ru: 'o → ue · ложиться спать', en: 'o → ue · to go to bed' }, variants: [
              { label: 'Presente', color: 'teal', rows: [['yo', 'me ac<b>ue</b>sto'], ['tú', 'te ac<b>ue</b>stas'], ['él / ella', 'se ac<b>ue</b>sta'], ['nosotros', 'nos acostamos'], ['vosotros', 'os acostáis'], ['ellos', 'se ac<b>ue</b>stan']] },
              { label: 'Perfecto', color: 'blue', rows: [['yo', 'me he acost<b>ado</b>'], ['tú', 'te has acost<b>ado</b>'], ['él / ella', 'se ha acost<b>ado</b>'], ['nosotros', 'nos hemos acost<b>ado</b>'], ['vosotros', 'os habéis acost<b>ado</b>'], ['ellos', 'se han acost<b>ado</b>']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', 'me acost<b>é</b>'], ['tú', 'te acost<b>aste</b>'], ['él / ella', 'se acost<b>ó</b>'], ['nosotros', 'nos acost<b>amos</b>'], ['vosotros', 'os acost<b>asteis</b>'], ['ellos', 'se acost<b>aron</b>']] }
            ] },
            { inf: 'vestirse', tr: { ru: 'e → i · одеваться', en: 'e → i · to get dressed' }, variants: [
              { label: 'Presente', color: 'teal', rows: [['yo', 'me v<b>i</b>sto'], ['tú', 'te v<b>i</b>stes'], ['él / ella', 'se v<b>i</b>ste'], ['nosotros', 'nos vestimos'], ['vosotros', 'os vestís'], ['ellos', 'se v<b>i</b>sten']] },
              { label: 'Perfecto', color: 'blue', rows: [['yo', 'me he vest<b>ido</b>'], ['tú', 'te has vest<b>ido</b>'], ['él / ella', 'se ha vest<b>ido</b>'], ['nosotros', 'nos hemos vest<b>ido</b>'], ['vosotros', 'os habéis vest<b>ido</b>'], ['ellos', 'se han vest<b>ido</b>']] },
              { label: 'Indefinido', color: 'amber', rows: [['yo', 'me vest<b>í</b>'], ['tú', 'te vest<b>iste</b>'], ['él / ella', 'se v<b>i</b>stió'], ['nosotros', 'nos vest<b>imos</b>'], ['vosotros', 'os vest<b>isteis</b>'], ['ellos', 'se v<b>i</b>stieron']] }
            ] }
          ] },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Смена корня</b> работает так же, как у обычных глаголов: <i>acostarse, dormirse</i> (o → ue), <i>despertarse, sentarse</i> (e → ie), <i>vestirse</i> (e → i). В формах <i>nosotros</i> и <i>vosotros</i> корень не меняется: <i>nos acostamos</i>.'],
            en: ['<b>Stem changes</b> work just as with ordinary verbs: <i>acostarse, dormirse</i> (o → ue), <i>despertarse, sentarse</i> (e → ie), <i>vestirse</i> (e → i). The <i>nosotros</i> and <i>vosotros</i> forms keep the original stem: <i>nos acostamos</i>.'] } },
          { type: 'examples', heading: { ru: 'В разных временах', en: 'In different tenses' }, items: [
            { color: 'blue', es: 'Hoy <b>me he levantado</b> tarde.', ru: 'Сегодня я встал поздно.', en: 'I got up late today.' },
            { color: 'blue', es: '¿Ya <b>te has duchado</b>?', ru: 'Ты уже принял душ?', en: 'Have you had a shower yet?' },
            { color: 'blue', es: 'Los niños <b>se han vestido</b> solos.', ru: 'Дети оделись сами.', en: 'The children have got dressed by themselves.' },
            { color: 'amber', es: 'Anoche <b>nos acostamos</b> a las dos.', ru: 'Вчера мы легли спать в два часа ночи.', en: 'Last night we went to bed at two.' },
            { color: 'teal', es: 'Mi abuelo <b>se despierta</b> muy temprano.', ru: 'Мой дедушка просыпается очень рано.', en: 'My grandfather wakes up very early.' }
          ] }
        ]
      },
      {
        id: 'place', label: { ru: 'Местоимение', en: 'Pronoun' },
        blocks: [
          { type: 'text', body: {
            ru: ['С обычной формой глагола — <b>перед</b> ним: <i>Me ducho.</i> Отрицание <b>no</b> идёт ещё раньше: <i>No me levanto temprano.</i>',
                 'С инфинитивом местоимение можно <b>приклеить в конец</b> или поставить перед всей конструкцией: <i>Voy a ducharme = Me voy a duchar.</i> Местоимение всё равно согласуется с лицом: <i>vamos a levantarnos</i>.'],
            en: ['With a normal verb form, put it <b>before</b> the verb: <i>Me ducho.</i> <b>No</b> goes even earlier: <i>No me levanto temprano.</i>',
                 'With an infinitive, the pronoun can be <b>attached to the end</b> or placed before the whole phrase: <i>Voy a ducharme = Me voy a duchar.</i> It still matches the person: <i>vamos a levantarnos</i>.'] } },
          { type: 'rules', items: [
            { color: 'blue', title: { ru: 'Спрягаемая форма', en: 'Conjugated verb' }, es: 'no + me + ducho',
              body: { ru: 'Только перед глаголом. В Perfecto — перед <i>haber</i>: <i>No me he duchado.</i>', en: 'Only before the verb. In the Perfecto — before <i>haber</i>: <i>No me he duchado.</i>' } },
            { color: 'teal', title: { ru: 'Инфинитив', en: 'Infinitive' }, es: 'voy a ducharme',
              body: { ru: 'Приклеивается в конец или встаёт перед первым глаголом: <i>Quiero sentarme = Me quiero sentar.</i>', en: 'Attached to the end or placed before the first verb: <i>Quiero sentarme = Me quiero sentar.</i>' } },
            { color: 'purple', title: { ru: 'Герундий', en: 'Gerund' }, es: 'estoy duchándome',
              body: { ru: 'Те же два места: <i>Estoy duchándome = Me estoy duchando.</i> Приклеив местоимение, ставьте знак ударения: <i>duchándome</i>.', en: 'The same two places: <i>Estoy duchándome = Me estoy duchando.</i> When you attach it, add a written accent: <i>duchándome</i>.' } },
            { color: 'coral', title: { ru: 'Просьба, команда', en: 'Commands' }, es: '¡levántate! · ¡no te levantes!',
              body: { ru: 'В утвердительном императиве — только в конце, со знаком ударения; в отрицательном — перед глаголом. Подробно — на уровне B1.', en: 'In an affirmative command it is always attached, with an accent; in a negative one it goes before the verb. More at B1.' } }
          ] },
          { type: 'conj', heading: { ru: 'Два места — один смысл', en: 'Two places, one meaning' }, verbs: [
            { inf: 'ir a ducharse', tr: { ru: 'собираться в душ', en: 'to be going to shower' }, variants: [
              { label: { ru: 'в конце', en: 'attached' }, color: 'teal', rows: [['yo', 'voy a duchar<b>me</b>'], ['tú', 'vas a duchar<b>te</b>'], ['él / ella', 'va a duchar<b>se</b>'], ['nosotros', 'vamos a duchar<b>nos</b>'], ['vosotros', 'vais a duchar<b>os</b>'], ['ellos', 'van a duchar<b>se</b>']] },
              { label: { ru: 'впереди', en: 'in front' }, color: 'blue', rows: [['yo', '<b>me</b> voy a duchar'], ['tú', '<b>te</b> vas a duchar'], ['él / ella', '<b>se</b> va a duchar'], ['nosotros', '<b>nos</b> vamos a duchar'], ['vosotros', '<b>os</b> vais a duchar'], ['ellos', '<b>se</b> van a duchar']] }
            ] },
            { inf: 'estar vistiéndose', tr: { ru: 'одеваться сейчас', en: 'to be getting dressed' }, variants: [
              { label: { ru: 'в конце', en: 'attached' }, color: 'teal', rows: [['yo', 'estoy vistiéndo<b>me</b>'], ['tú', 'estás vistiéndo<b>te</b>'], ['él / ella', 'está vistiéndo<b>se</b>'], ['nosotros', 'estamos vistiéndo<b>nos</b>'], ['vosotros', 'estáis vistiéndo<b>os</b>'], ['ellos', 'están vistiéndo<b>se</b>']] },
              { label: { ru: 'впереди', en: 'in front' }, color: 'blue', rows: [['yo', '<b>me</b> estoy vistiendo'], ['tú', '<b>te</b> estás vistiendo'], ['él / ella', '<b>se</b> está vistiendo'], ['nosotros', '<b>nos</b> estamos vistiendo'], ['vosotros', '<b>os</b> estáis vistiendo'], ['ellos', '<b>se</b> están vistiendo']] }
            ] }
          ] },
          { type: 'examples', items: [
            { color: 'teal', es: '<b>Voy a ducharme</b> ahora.', ru: 'Сейчас пойду в душ.', en: 'I’m going to have a shower now.' },
            { color: 'blue', es: 'No <b>me levanto</b> temprano los domingos.', ru: 'По воскресеньям я не встаю рано.', en: 'I don’t get up early on Sundays.' },
            { color: 'blue', es: '¿<b>Te vas a quedar</b> en casa esta noche?', ru: 'Ты останешься сегодня вечером дома?', en: 'Are you going to stay at home tonight?' },
            { color: 'teal', es: 'No quiero <b>enfadarme</b> contigo.', ru: 'Я не хочу на тебя злиться.', en: 'I don’t want to get angry with you.' },
            { color: 'purple', es: '¡Un momento! <b>Estamos vistiéndonos</b>.', ru: 'Минутку! Мы одеваемся.', en: 'Just a moment! We’re getting dressed.' }
          ] },
          { type: 'tip', title: { ru: 'Как запомнить', en: 'How to remember' }, body: {
            ru: ['Местоимение <b>никогда не встаёт между</b> двумя глаголами: <i>voy a ducharme</i> или <i>me voy a duchar</i>, но не «voy me a duchar».'],
            en: ['The pronoun <b>never goes between</b> the two verbs: <i>voy a ducharme</i> or <i>me voy a duchar</i>, but never “voy me a duchar”.'] } }
        ]
      },
      {
        id: 'meaning', label: { ru: 'Другой смысл', en: 'New meaning' },
        blocks: [
          { type: 'text', body: {
            ru: ['Один глагол может быть и возвратным, и обычным — смысл меняется: <i>lavar el coche</i> (мыть машину) — <i>lavarse las manos</i> (мыть руки); <i>llamar a Ana</i> (звонить Ане) — <i>llamarse Ana</i> (зваться Аной).'],
            en: ['The same verb can be reflexive or not, and the meaning changes: <i>lavar el coche</i> (to wash the car) — <i>lavarse las manos</i> (to wash your hands); <i>llamar a Ana</i> (to call Ana) — <i>llamarse Ana</i> (to be called Ana).'] } },
          { type: 'table', heading: { ru: 'С -se и без', en: 'With and without -se' },
            head: ['', { ru: 'без -se', en: 'without -se' }, { ru: 'с -se', en: 'with -se' }],
            rows: [
              ['lavar / lavarse', { ru: 'мыть (что-то)', en: 'to wash (something)' }, { ru: 'мыться, мыть себе…', en: 'to wash (yourself)' }],
              ['llamar / llamarse', { ru: 'звать, звонить', en: 'to call' }, { ru: 'зваться', en: 'to be called' }],
              ['ir / irse', { ru: 'идти, ехать (куда)', en: 'to go (somewhere)' }, { ru: 'уходить, уезжать', en: 'to leave' }],
              ['dormir / dormirse', { ru: 'спать', en: 'to sleep' }, { ru: 'засыпать', en: 'to fall asleep' }],
              ['poner / ponerse', { ru: 'класть, ставить', en: 'to put' }, { ru: 'надевать; становиться', en: 'to put on; to become' }],
              ['quedar / quedarse', { ru: 'договориться о встрече', en: 'to arrange to meet' }, { ru: 'оставаться', en: 'to stay' }],
              ['acordar / acordarse de', { ru: 'договориться', en: 'to agree on' }, { ru: 'помнить, вспоминать', en: 'to remember' }],
              ['parecer / parecerse a', { ru: 'казаться', en: 'to seem' }, { ru: 'быть похожим на', en: 'to look like' }]
            ] },
          { type: 'conj', verbs: [
            { inf: 'llamar · llamarse', tr: { ru: 'звонить · зваться', en: 'to call · to be called' }, variants: [
              { label: 'llamar', color: 'amber', rows: [['yo', 'llamo a Ana'], ['tú', 'llamas a Ana'], ['él / ella', 'llama a Ana'], ['nosotros', 'llamamos a Ana'], ['vosotros', 'llamáis a Ana'], ['ellos', 'llaman a Ana']] },
              { label: 'llamarse', color: 'teal', rows: [['yo', '<b>me</b> llamo'], ['tú', '<b>te</b> llamas'], ['él / ella', '<b>se</b> llama'], ['nosotros', '<b>nos</b> llamamos'], ['vosotros', '<b>os</b> llamáis'], ['ellos', '<b>se</b> llaman']] }
            ] },
            { inf: 'ir · irse', tr: { ru: 'идти · уходить', en: 'to go · to leave' }, variants: [
              { label: 'ir', color: 'amber', rows: [['yo', 'voy a casa'], ['tú', 'vas a casa'], ['él / ella', 'va a casa'], ['nosotros', 'vamos a casa'], ['vosotros', 'vais a casa'], ['ellos', 'van a casa']] },
              { label: 'irse', color: 'teal', rows: [['yo', '<b>me</b> voy'], ['tú', '<b>te</b> vas'], ['él / ella', '<b>se</b> va'], ['nosotros', '<b>nos</b> vamos'], ['vosotros', '<b>os</b> vais'], ['ellos', '<b>se</b> van']] }
            ] }
          ] },
          { type: 'text', color: 'amber', body: {
            ru: ['С частями тела ставят артикль, а не «мой»: <i>Me lavo <b>los</b> dientes</i>, а не <i>mis dientes</i>. То же с одеждой: <i>Me pongo <b>el</b> abrigo.</i>'],
            en: ['With body parts use the article, not “my”: <i>Me lavo <b>los</b> dientes</i>, not <i>mis dientes</i>. The same goes for clothes: <i>Me pongo <b>el</b> abrigo.</i>'] } },
          { type: 'examples', heading: { ru: 'Примеры попарно', en: 'Examples in pairs' }, items: [
            { badge: 'se', color: 'teal', es: '<b>Me lavo</b> los dientes después de comer.', ru: 'Я чищу зубы после еды.', en: 'I brush my teeth after eating.' },
            { color: 'amber', es: '<b>Llamo</b> a mi madre todos los días.', ru: 'Я звоню маме каждый день.', en: 'I call my mother every day.' },
            { color: 'amber', es: 'El bebé <b>duerme</b> diez horas.', ru: 'Малыш спит десять часов.', en: 'The baby sleeps for ten hours.' },
            { badge: 'se', color: 'teal', es: 'Anoche <b>me dormí</b> en el sofá.', ru: 'Вчера вечером я заснул на диване.', en: 'Last night I fell asleep on the sofa.' },
            { color: 'amber', es: '¿<b>Quedamos</b> a las siete en la plaza?', ru: 'Встретимся в семь на площади?', en: 'Shall we meet at seven in the square?' },
            { badge: 'se', color: 'teal', es: 'Hoy <b>me quedo</b> en casa.', ru: 'Сегодня я остаюсь дома.', en: 'I’m staying at home today.' },
            { badge: 'se', color: 'teal', es: 'Hace frío: <b>ponte</b> el abrigo.', ru: 'Холодно: надень пальто.', en: 'It’s cold: put your coat on.' },
            { badge: 'se', color: 'teal', es: 'Mi hermana <b>se parece</b> mucho a mi padre.', ru: 'Моя сестра очень похожа на папу.', en: 'My sister looks a lot like my father.' },
            { badge: 'se', color: 'teal', es: '¿<b>Te acuerdas</b> de mí?', ru: 'Ты меня помнишь?', en: 'Do you remember me?' }
          ] }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Распорядок дня', en: 'Daily routine' }, items: [
            { color: 'teal', es: 'Normalmente <b>me despierto</b> a las siete y <b>me levanto</b> a las siete y cuarto.', ru: 'Обычно я просыпаюсь в семь и встаю в четверть восьмого.', en: 'I usually wake up at seven and get up at a quarter past.' },
            { color: 'teal', es: 'Mi marido <b>se afeita</b> todas las mañanas.', ru: 'Мой муж бреется каждое утро.', en: 'My husband shaves every morning.' },
            { color: 'teal', es: '¿A qué hora <b>os acostáis</b> entre semana?', ru: 'Во сколько вы ложитесь спать в будни?', en: 'What time do you go to bed on weekdays?' }
          ] },
          { type: 'examples', heading: { ru: 'Чувства и перемены', en: 'Feelings and changes' }, items: [
            { color: 'coral', es: 'Mis hijos <b>se aburren</b> en los museos.', ru: 'Моим детям скучно в музеях.', en: 'My children get bored in museums.' },
            { color: 'coral', es: 'No <b>te preocupes</b>, todo va a salir bien.', ru: 'Не волнуйся, всё будет хорошо.', en: 'Don’t worry, everything will be fine.' },
            { color: 'coral', es: 'Siempre <b>me pongo</b> nervioso en los exámenes.', ru: 'Я всегда нервничаю на экзаменах.', en: 'I always get nervous in exams.' },
            { color: 'purple', es: 'Mis amigos <b>se casaron</b> el verano pasado.', ru: 'Мои друзья поженились прошлым летом.', en: 'My friends got married last summer.' },
            { color: 'purple', es: 'El año pasado <b>nos mudamos</b> a Málaga.', ru: 'В прошлом году мы переехали в Малагу.', en: 'Last year we moved to Málaga.' }
          ] },
          { type: 'examples', heading: { ru: 'В дороге и в гостях', en: 'Travelling and visiting' }, items: [
            { color: 'purple', es: 'Es tarde, <b>nos vamos</b>.', ru: 'Уже поздно, мы уходим.', en: 'It’s late, we’re leaving.' },
            { color: 'purple', es: '¿Dónde <b>os alojáis</b> en Granada?', ru: 'Где вы остановились в Гранаде?', en: 'Where are you staying in Granada?' },
            { color: 'purple', es: '<b>Siéntese</b>, por favor.', ru: 'Садитесь, пожалуйста.', en: 'Please sit down.' },
            { color: 'coral', es: 'Marta y yo <b>nos conocemos</b> desde niños.', ru: 'Мы с Мартой знаем друг друга с детства.', en: 'Marta and I have known each other since we were children.' }
          ] }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Yo ___ a las siete. (levantarse)',
        options: ['me levanto', 'se levanto', 'me levanta'], answer: 0,
        explain: { ru: 'Yo → me + форма yo: me levanto.', en: 'Yo → me + the yo form: me levanto.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: '¿Cómo ___ tu hermana? (llamarse)',
        options: ['se llama', 'te llamas', 'se llaman'], answer: 0,
        explain: { ru: 'Tu hermana — она: se llama.', en: 'Tu hermana is “she”: se llama.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Nosotros ___ tarde. (acostarse)',
        options: ['nos acostamos', 'nos acuestamos', 'se acostamos'], answer: 0,
        explain: { ru: 'В форме nosotros o не меняется на ue; местоимение — nos.', en: 'In the nosotros form o does not become ue; the pronoun is nos.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Tú ___ con agua fría. (ducharse)',
        options: ['te duchas', 'se duchas', 'te ducha'], answer: 0,
        explain: { ru: 'Tú → te + форма tú: te duchas.', en: 'Tú → te + the tú form: te duchas.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Mañana voy a ___ temprano. (levantarse)',
        options: ['levantarme', 'levantarse', 'me levantar'], answer: 0,
        explain: { ru: 'Говорю я, поэтому -se превращается в -me: levantarme.', en: 'The speaker is “I”, so -se becomes -me: levantarme.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Me lavo ___ manos.',
        options: ['las', 'mis', 'mías'], answer: 0,
        explain: { ru: 'С частями тела — артикль: me lavo las manos.', en: 'Body parts take the article: me lavo las manos.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Los niños ___ a las nueve. (acostarse)',
        options: ['se acuestan', 'se acostan', 'nos acuestan'], answer: 0,
        explain: { ru: 'Ellos → se; o → ue под ударением: se acuestan.', en: 'Ellos → se; o → ue when stressed: se acuestan.' } },
      { prompt: { ru: 'Как сказать «Я звоню маме»?', en: 'How do you say “I call my mother”?' },
        options: ['Llamo a mi madre.', 'Me llamo a mi madre.', 'Me llamo mi madre.'], answer: 0,
        explain: { ru: 'Звонить кому-то — llamar без -se. Llamarse значит «зваться».', en: 'To call someone is llamar without -se. Llamarse means “to be called”.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: '¿Vosotros ___ antes de desayunar? (ducharse)',
        options: ['os ducháis', 'se ducháis', 'os duchan'], answer: 0,
        explain: { ru: 'Vosotros → os + ducháis.', en: 'Vosotros → os + ducháis.' } },
      { prompt: { ru: 'Выберите местоимение', en: 'Choose the pronoun' }, es: '___ voy a duchar ahora. (ducharse, yo)',
        options: ['Me', 'Se', 'Mi'], answer: 0,
        explain: { ru: 'Я принимаю душ сам, значит возвратное местоимение me: me voy a duchar.', en: 'I shower myself, so the reflexive pronoun is me: me voy a duchar.' } }
    ]
  },
  {
    id: 'a2-ir-a-infinitivo', level: 'A2',
    title: { ru: 'Ir a + инфинитив', en: 'Ir a + infinitive' },
    hero: {
      es: 'Ir <b>a</b> + infinitivo',
      sub: { ru: 'Самый простой способ говорить о планах и ближайшем будущем',
             en: 'The easiest way to talk about plans and the near future' }
    },
    tabs: [
      {
        id: 'form', label: { ru: 'Форма', en: 'Form' },
        blocks: [
          { type: 'rules', items: [
            { color: 'blue', label: { ru: 'Формула', en: 'Formula' }, title: { ru: 'Ir + a + инфинитив', en: 'Ir + a + infinitive' }, es: 'voy a comer',
              body: { ru: '<b>Ir</b> в настоящем времени + <b>a</b> + инфинитив: <i>Voy a comer</i> — «Я собираюсь поесть, я сейчас поем».',
                      en: '<b>Ir</b> in the present + <b>a</b> + infinitive: <i>Voy a comer</i> — “I’m going to eat”.' } },
            { color: 'amber', label: { ru: 'Главное', en: 'Key point' }, title: { ru: 'Спрягается только ir', en: 'Only ir changes' }, es: 'voy a salir',
              body: { ru: 'Инфинитив не меняется. Не забывайте <b>a</b>: <i>voy a salir</i>, а не <i>voy salir</i>.',
                      en: 'The infinitive stays the same. Don’t forget the <b>a</b>: <i>voy a salir</i>, not <i>voy salir</i>.' } }
          ] },
          { type: 'table', heading: { ru: 'Спряжение', en: 'Conjugation' },
            head: ['', 'ir', '+ a + infinitivo'],
            rows: [
              ['yo', 'voy', 'a comer'],
              ['tú', 'vas', 'a comer'],
              ['él / ella / usted', 'va', 'a comer'],
              ['nosotros / nosotras', 'vamos', 'a comer'],
              ['vosotros / vosotras', 'vais', 'a comer'],
              ['ellos / ellas / ustedes', 'van', 'a comer']
            ] },
          { type: 'text', heading: { ru: 'Вопрос, отрицание, местоимения', en: 'Questions, negation, pronouns' }, body: {
            ru: ['Вопрос: <i>¿Qué vas a hacer mañana?</i> Отрицание — <b>no</b> перед ir: <i>No voy a salir.</i>',
                 'Местоимение приклеивается к инфинитиву или встаёт перед ir: <i>Voy a llamarte = Te voy a llamar.</i>'],
            en: ['Question: <i>¿Qué vas a hacer mañana?</i> Negation — <b>no</b> before ir: <i>No voy a salir.</i>',
                 'A pronoun is attached to the infinitive or placed before ir: <i>Voy a llamarte = Te voy a llamar.</i>'] } },
          { type: 'conj', verbs: [
            { inf: 'ir a viajar', tr: { ru: 'собираться путешествовать', en: 'to be going to travel' }, variants: [
              { label: { ru: 'утверждение', en: 'affirmative' }, color: 'blue', rows: [['yo', '<b>voy a</b> viajar'], ['tú', '<b>vas a</b> viajar'], ['él / ella', '<b>va a</b> viajar'], ['nosotros', '<b>vamos a</b> viajar'], ['vosotros', '<b>vais a</b> viajar'], ['ellos', '<b>van a</b> viajar']] },
              { label: { ru: 'отрицание', en: 'negative' }, color: 'coral', rows: [['yo', '<b>no voy a</b> viajar'], ['tú', '<b>no vas a</b> viajar'], ['él / ella', '<b>no va a</b> viajar'], ['nosotros', '<b>no vamos a</b> viajar'], ['vosotros', '<b>no vais a</b> viajar'], ['ellos', '<b>no van a</b> viajar']] },
              { label: { ru: 'вопрос', en: 'question' }, color: 'teal', rows: [['yo', '¿<b>voy a</b> viajar?'], ['tú', '¿<b>vas a</b> viajar?'], ['él / ella', '¿<b>va a</b> viajar?'], ['nosotros', '¿<b>vamos a</b> viajar?'], ['vosotros', '¿<b>vais a</b> viajar?'], ['ellos', '¿<b>van a</b> viajar?']] }
            ] },
            { inf: 'llamarte', tr: { ru: 'место местоимения', en: 'pronoun position' }, variants: [
              { label: { ru: 'в конце', en: 'attached' }, color: 'blue', rows: [['yo', 'voy a llamar<b>te</b>'], ['nosotros', 'vamos a llamar<b>te</b>'], ['ellos', 'van a llamar<b>te</b>']] },
              { label: { ru: 'впереди', en: 'in front' }, color: 'teal', rows: [['yo', '<b>te</b> voy a llamar'], ['nosotros', '<b>te</b> vamos a llamar'], ['ellos', '<b>te</b> van a llamar']] }
            ] }
          ] },
          { type: 'examples', items: [
            { color: 'blue', es: '¿Qué <b>vas a hacer</b> el sábado?', ru: 'Что ты будешь делать в субботу?', en: 'What are you going to do on Saturday?' },
            { color: 'coral', es: 'No <b>voy a comprar</b> ese coche.', ru: 'Я не буду покупать эту машину.', en: 'I’m not going to buy that car.' },
            { color: 'teal', es: 'Te <b>voy a llamar</b> mañana.', ru: 'Я позвоню тебе завтра.', en: 'I’m going to call you tomorrow.' },
            { color: 'blue', es: '¿<b>Vais a venir</b> a la cena?', ru: 'Вы придёте на ужин?', en: 'Are you coming to the dinner?' },
            { color: 'teal', es: 'Mis padres <b>van a regalarme</b> una bici.', ru: 'Родители собираются подарить мне велосипед.', en: 'My parents are going to give me a bike.' }
          ] }
        ]
      },
      {
        id: 'use', label: { ru: 'Употребление', en: 'Use' },
        blocks: [
          { type: 'triggers', items: [
            { num: '1', color: 'blue', title: { ru: 'Планы и намерения', en: 'Plans and intentions' }, sub: { ru: 'уже решил', en: 'already decided' },
              body: { ru: 'То, что вы уже решили сделать: <i>Este verano voy a viajar a México.</i>', en: 'Something you have already decided to do: <i>Este verano voy a viajar a México.</i>' },
              phrases: ['este verano', 'mañana', 'el año que viene'],
              ex: { es: 'Este verano <b>voy a viajar</b> a México.', ru: 'Этим летом я поеду в Мексику.', en: 'This summer I’m going to travel to Mexico.' } },
            { num: '2', color: 'teal', title: { ru: 'Прогноз по тому, что видно', en: 'A prediction from what you see' }, sub: { ru: 'признаки уже есть', en: 'the signs are there' },
              body: { ru: 'Вывод из того, что видно или известно сейчас: <i>Mira las nubes: va a llover.</i>', en: 'A conclusion from what you can see or know now: <i>Mira las nubes: va a llover.</i>' },
              phrases: ['mira', 'cuidado', 'ya es tarde'],
              ex: { es: '¡Cuidado! Te <b>vas a caer</b>.', ru: 'Осторожно! Ты сейчас упадёшь.', en: 'Careful! You’re going to fall.' } },
            { num: '3', color: 'coral', title: { ru: '«Давайте!»', en: '“Let’s!”' }, sub: { ru: 'приглашение', en: 'an invitation' },
              body: { ru: '<b>¡Vamos a…!</b> часто значит «давайте»: <i>¡Vamos a bailar!</i>', en: '<b>¡Vamos a…!</b> often means “let’s”: <i>¡Vamos a bailar!</i>' },
              phrases: ['¡vamos a…!'],
              ex: { es: '¡<b>Vamos a brindar</b> por los novios!', ru: 'Давайте выпьем за молодожёнов!', en: 'Let’s drink a toast to the bride and groom!' } },
            { num: '4', color: 'purple', title: { ru: 'План в прошлом', en: 'A plan in the past' }, sub: { ru: 'собирался, но…', en: 'was going to, but…' },
              body: { ru: 'Тот же оборот с <i>ir</i> в Imperfecto — «собирался»: <i>Iba a llamarte, pero me dormí.</i>', en: 'The same phrase with <i>ir</i> in the imperfecto means “was going to”: <i>Iba a llamarte, pero me dormí.</i>' },
              phrases: ['iba a', 'íbamos a'],
              ex: { es: '<b>Íbamos a salir</b>, pero empezó a llover.', ru: 'Мы собирались выйти, но пошёл дождь.', en: 'We were going to go out, but it started to rain.' } }
          ] },
          { type: 'markers', heading: { ru: 'Слова-подсказки', en: 'Signal words' }, groups: [
            { color: 'blue', title: { ru: 'Скоро', en: 'Soon' }, tags: ['ahora', 'luego', 'esta tarde', 'esta noche', 'mañana', 'pasado mañana'] },
            { color: 'teal', title: { ru: 'Позже', en: 'Later' }, tags: ['este fin de semana', 'la semana que viene', 'el próximo mes', 'el año que viene', 'dentro de dos días', 'en verano'] }
          ] },
          { type: 'examples', items: [
            { color: 'blue', es: 'Esta noche <b>vamos a cenar</b> en casa.', ru: 'Сегодня вечером мы будем ужинать дома.', en: 'Tonight we’re going to have dinner at home.' },
            { color: 'teal', es: 'Mira el cielo: <b>va a llover</b>.', ru: 'Посмотри на небо: сейчас пойдёт дождь.', en: 'Look at the sky: it’s going to rain.' },
            { color: 'blue', es: 'El año que viene <b>voy a estudiar</b> en Salamanca.', ru: 'В следующем году я буду учиться в Саламанке.', en: 'Next year I’m going to study in Salamanca.' },
            { color: 'teal', es: 'Ya son las nueve: <b>vamos a llegar</b> tarde.', ru: 'Уже девять: мы опоздаем.', en: 'It’s already nine: we’re going to be late.' },
            { color: 'coral', es: '¡<b>Vamos a bailar</b>!', ru: 'Пойдём танцевать!', en: 'Let’s dance!' },
            { color: 'purple', es: '<b>Iba a llamarte</b>, pero me dormí.', ru: 'Я собирался тебе позвонить, но заснул.', en: 'I was going to call you, but I fell asleep.' }
          ] }
        ]
      },
      {
        id: 'futuro', label: { ru: 'Или Futuro', en: 'Or Futuro' },
        blocks: [
          { type: 'text', body: {
            ru: ['О будущем по-испански можно сказать тремя способами. <b>Ir a + инфинитив</b> — план и то, что вот-вот случится. <b>Futuro simple</b> (<i>hablaré</i>) — прогноз, обещание, далёкое или неопределённое будущее. <b>Presente</b> — то, что уже по расписанию: <i>El tren sale a las ocho.</i>'],
            en: ['Spanish has three ways to talk about the future. <b>Ir a + infinitive</b> is for plans and things about to happen. The <b>futuro simple</b> (<i>hablaré</i>) is for predictions, promises and a distant or uncertain future. The <b>presente</b> is for things already on a timetable: <i>El tren sale a las ocho.</i>'] } },
          { type: 'table', heading: { ru: 'Сравнение', en: 'Side by side' },
            head: [{ ru: 'Критерий', en: 'Criterion' }, 'ir a + infinitivo', 'futuro simple'],
            rows: [
              [{ ru: 'Что выражает', en: 'What it expresses' }, { ru: 'план, намерение', en: 'a plan, an intention' }, { ru: 'прогноз, обещание', en: 'a prediction, a promise' }],
              [{ ru: 'Когда', en: 'When' }, { ru: 'скоро, уже решено', en: 'soon, already decided' }, { ru: 'позже, не точно', en: 'later, not certain' }],
              [{ ru: 'На что опирается', en: 'Based on' }, { ru: 'что видно сейчас', en: 'what you see now' }, { ru: 'мнение, догадка', en: 'an opinion, a guess' }],
              [{ ru: 'Где чаще', en: 'Where it’s common' }, { ru: 'в разговоре', en: 'in conversation' }, { ru: 'в текстах, прогнозах', en: 'in writing, forecasts' }],
              [{ ru: 'Пример', en: 'Example' }, 'Voy a comprar pan.', 'Algún día seré rico.']
            ] },
          { type: 'conj', verbs: [
            { inf: 'hablar', tr: { ru: 'правильный', en: 'regular' }, variants: [
              { label: 'ir a', color: 'blue', rows: [['yo', '<b>voy a</b> hablar'], ['tú', '<b>vas a</b> hablar'], ['él / ella', '<b>va a</b> hablar'], ['nosotros', '<b>vamos a</b> hablar'], ['vosotros', '<b>vais a</b> hablar'], ['ellos', '<b>van a</b> hablar']] },
              { label: 'Futuro', color: 'amber', rows: [['yo', 'hablar<b>é</b>'], ['tú', 'hablar<b>ás</b>'], ['él / ella', 'hablar<b>á</b>'], ['nosotros', 'hablar<b>emos</b>'], ['vosotros', 'hablar<b>éis</b>'], ['ellos', 'hablar<b>án</b>']] }
            ] },
            { inf: 'hacer', tr: { ru: 'неправильный в Futuro', en: 'irregular in the Futuro' }, variants: [
              { label: 'ir a', color: 'blue', rows: [['yo', '<b>voy a</b> hacer'], ['tú', '<b>vas a</b> hacer'], ['él / ella', '<b>va a</b> hacer'], ['nosotros', '<b>vamos a</b> hacer'], ['vosotros', '<b>vais a</b> hacer'], ['ellos', '<b>van a</b> hacer']] },
              { label: 'Futuro', color: 'amber', rows: [['yo', '<b>har</b>é'], ['tú', '<b>har</b>ás'], ['él / ella', '<b>har</b>á'], ['nosotros', '<b>har</b>emos'], ['vosotros', '<b>har</b>éis'], ['ellos', '<b>har</b>án']] }
            ] },
            { inf: 'tener', tr: { ru: 'неправильный в Futuro', en: 'irregular in the Futuro' }, variants: [
              { label: 'ir a', color: 'blue', rows: [['yo', '<b>voy a</b> tener'], ['tú', '<b>vas a</b> tener'], ['él / ella', '<b>va a</b> tener'], ['nosotros', '<b>vamos a</b> tener'], ['vosotros', '<b>vais a</b> tener'], ['ellos', '<b>van a</b> tener']] },
              { label: 'Futuro', color: 'amber', rows: [['yo', '<b>tendr</b>é'], ['tú', '<b>tendr</b>ás'], ['él / ella', '<b>tendr</b>á'], ['nosotros', '<b>tendr</b>emos'], ['vosotros', '<b>tendr</b>éis'], ['ellos', '<b>tendr</b>án']] }
            ] }
          ] },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Futuro simple</b> строится от целого инфинитива + <b>-é, -ás, -á, -emos, -éis, -án</b> — одни окончания для -ar, -er, -ir. Меняют основу, например: <i>hacer → har-</i>, <i>tener → tendr-</i>, <i>poder → podr-</i>, <i>salir → saldr-</i>, <i>venir → vendr-</i>, <i>decir → dir-</i>, <i>haber → habr-</i>.'],
            en: ['The <b>futuro simple</b> is the whole infinitive + <b>-é, -ás, -á, -emos, -éis, -án</b> — the same endings for -ar, -er and -ir. Some verbs change the stem, for example: <i>hacer → har-</i>, <i>tener → tendr-</i>, <i>poder → podr-</i>, <i>salir → saldr-</i>, <i>venir → vendr-</i>, <i>decir → dir-</i>, <i>haber → habr-</i>.'] } },
          { type: 'examples', heading: { ru: 'Примеры попарно', en: 'Examples in pairs' }, items: [
            { badge: 'ir', color: 'blue', es: 'Esta tarde <b>voy a hacer</b> la compra.', ru: 'Сегодня днём я схожу за продуктами. (план)', en: 'This afternoon I’m going to do the shopping. (a plan)' },
            { badge: 'fut', color: 'amber', es: 'Algún día <b>daré</b> la vuelta al mundo.', ru: 'Когда-нибудь я объеду весь мир. (мечта)', en: 'One day I’ll travel round the world. (a dream)' },
            { badge: 'ir', color: 'blue', es: 'Mira esas nubes: <b>va a nevar</b>.', ru: 'Посмотри на эти тучи: пойдёт снег. (видно сейчас)', en: 'Look at those clouds: it’s going to snow. (you can see it)' },
            { badge: 'fut', color: 'amber', es: 'Según el pronóstico, mañana <b>nevará</b> en el norte.', ru: 'По прогнозу, завтра на севере пойдёт снег.', en: 'According to the forecast, it will snow in the north tomorrow.' },
            { badge: 'ir', color: 'blue', es: '<b>Vamos a tener</b> un bebé en mayo.', ru: 'В мае у нас будет ребёнок. (уже известно)', en: 'We’re going to have a baby in May. (already known)' },
            { badge: 'fut', color: 'amber', es: 'Tranquila, te lo <b>diré</b> todo.', ru: 'Не волнуйся, я тебе всё расскажу. (обещание)', en: 'Don’t worry, I’ll tell you everything. (a promise)' },
            { badge: 'pr', color: 'teal', es: 'El avión <b>sale</b> a las seis y cuarto.', ru: 'Самолёт вылетает в четверть седьмого. (расписание)', en: 'The plane leaves at a quarter past six. (a timetable)' }
          ] },
          { type: 'tip', title: { ru: 'Как выбрать', en: 'How to choose' }, body: {
            ru: ['Уже решили или видите признаки — <b>ir a</b>. Мечтаете, обещаете, гадаете о далёком — <b>Futuro</b>. В разговоре не уверены — берите <b>ir a</b>: это почти никогда не ошибка.'],
            en: ['Already decided, or can see the signs — <b>ir a</b>. Dreaming, promising, guessing about the distant future — <b>Futuro</b>. Not sure in conversation? Use <b>ir a</b>: it is almost never wrong.'] } }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Планы', en: 'Plans' }, items: [
            { color: 'blue', es: 'En agosto <b>vamos a alquilar</b> un piso en la playa.', ru: 'В августе мы снимем квартиру у моря.', en: 'In August we’re going to rent a flat by the beach.' },
            { color: 'blue', es: 'Mi hermana <b>va a empezar</b> un trabajo nuevo el lunes.', ru: 'В понедельник моя сестра выходит на новую работу.', en: 'My sister is going to start a new job on Monday.' },
            { color: 'blue', es: '¿Cuándo <b>vais a visitarnos</b>?', ru: 'Когда вы к нам приедете?', en: 'When are you going to visit us?' },
            { color: 'blue', es: 'Este año <b>voy a aprender</b> a nadar.', ru: 'В этом году я научусь плавать.', en: 'This year I’m going to learn to swim.' },
            { color: 'coral', es: 'No <b>van a vender</b> la casa del pueblo.', ru: 'Они не будут продавать дом в деревне.', en: 'They aren’t going to sell the house in the village.' }
          ] },
          { type: 'examples', heading: { ru: 'Прогнозы и ситуации', en: 'Predictions and situations' }, items: [
            { color: 'teal', es: 'El restaurante está lleno: <b>vamos a esperar</b> mucho.', ru: 'Ресторан полон: нам придётся долго ждать.', en: 'The restaurant is full: we’re going to wait a long time.' },
            { color: 'teal', es: 'Si no te abrigas, <b>vas a resfriarte</b>.', ru: 'Если не оденешься потеплее, простудишься.', en: 'If you don’t wrap up, you’re going to catch a cold.' },
            { color: 'teal', es: 'La tienda <b>va a cerrar</b> en cinco minutos.', ru: 'Магазин закроется через пять минут.', en: 'The shop is going to close in five minutes.' },
            { color: 'teal', es: '¿Me ayudas con la maleta? <b>Voy a perder</b> el tren.', ru: 'Поможешь мне с чемоданом? Я опоздаю на поезд.', en: 'Can you help me with my suitcase? I’m going to miss the train.' }
          ] }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите вариант', en: 'Choose the option' }, es: 'Mañana (yo) ___ estudiar.',
        options: ['voy a', 'vas a', 'voy'], answer: 0,
        explain: { ru: 'Yo → voy, и обязательно a: voy a estudiar.', en: 'Yo → voy, and the a is required: voy a estudiar.' } },
      { prompt: { ru: 'Выберите форму ir', en: 'Choose the form of ir' }, es: 'Mis padres ___ a visitarnos.',
        options: ['van', 'va', 'vamos'], answer: 0,
        explain: { ru: 'Mis padres = ellos → van.', en: 'Mis padres = ellos → van.' } },
      { prompt: { ru: 'Выберите вариант', en: 'Choose the option' }, es: '¿Qué ___ hacer este fin de semana? (tú)',
        options: ['vas a', 'vas', 'va a'], answer: 0,
        explain: { ru: 'Tú → vas, плюс a: vas a hacer.', en: 'Tú → vas, plus a: vas a hacer.' } },
      { prompt: { ru: 'Выберите вариант', en: 'Choose the option' }, es: 'Nosotros ___ cenar en un restaurante.',
        options: ['vamos a', 'vamos', 'van a'], answer: 0,
        explain: { ru: 'Nosotros → vamos a + инфинитив.', en: 'Nosotros → vamos a + infinitive.' } },
      { prompt: { ru: 'Выберите вариант', en: 'Choose the option' }, es: 'Mira las nubes: ___ llover.',
        options: ['va a', 'vas a', 'van a'], answer: 0,
        explain: { ru: 'Llover безличный — всегда 3-е лицо единственного числа: va a llover.', en: 'Llover is impersonal — always third person singular: va a llover.' } },
      { prompt: { ru: 'Выберите форму ir', en: 'Choose the form of ir' }, es: 'Vosotros ___ a llegar tarde.',
        options: ['vais', 'van', 'vamos'], answer: 0,
        explain: { ru: 'Vosotros → vais.', en: 'Vosotros → vais.' } },
      { prompt: { ru: 'Какая фраза правильная?', en: 'Which sentence is correct?' },
        options: ['Voy a llamarte mañana.', 'Voy a te llamar mañana.', 'Voy llamarte mañana.'], answer: 0,
        explain: { ru: 'Местоимение приклеивается к инфинитиву, a обязательно.', en: 'The pronoun is attached to the infinitive, and the a is required.' } },
      { prompt: { ru: 'Какая фраза правильная?', en: 'Which sentence is correct?' },
        options: ['No voy a salir esta noche.', 'Voy no a salir esta noche.', 'No voy salir esta noche.'], answer: 0,
        explain: { ru: 'No стоит перед ir, a не пропускается.', en: 'No goes before ir, and the a is never dropped.' } },
      { prompt: { ru: 'Выберите форму ir', en: 'Choose the form of ir' }, es: 'El próximo año ella ___ a vivir en Barcelona.',
        options: ['va', 'vas', 've'], answer: 0,
        explain: { ru: 'Ella → va. Ve — это повелительное наклонение («иди»).', en: 'Ella → va. Ve is the imperative (“go!”).' } },
      { prompt: { ru: 'Какое начало подходит?', en: 'Which beginning fits?' }, es: '___ voy a ver a mis abuelos.',
        options: ['La semana que viene', 'La semana pasada', 'Ayer'], answer: 0,
        explain: { ru: 'Ir a + инфинитив — о будущем: la semana que viene.', en: 'Ir a + infinitive is about the future: la semana que viene.' } }
    ]
  },
  {
    id: 'a2-comparaciones', level: 'A2',
    title: { ru: 'Сравнения', en: 'Comparisons' },
    hero: {
      es: 'Más, tan <b>y</b> el más',
      sub: { ru: 'Más… que, tan… como и превосходная степень: el mejor, la más bonita, carísimo',
             en: 'Más… que, tan… como and the superlative: el mejor, la más bonita, carísimo' }
    },
    tabs: [
      {
        id: 'more', label: { ru: 'Más / menos', en: 'Más / menos' },
        blocks: [
          { type: 'text', body: {
            ru: ['<b>más</b> + прилагательное, наречие или существительное + <b>que</b>: <i>Mi hermano es más alto que yo.</i>',
                 '<b>menos … que</b> — «менее, чем»: <i>Este hotel es menos caro que el otro.</i> С глаголом: <i>Trabajo más que tú.</i>',
                 'Перед числом — <b>más de / menos de</b>: <i>Hay más de cien personas.</i>'],
            en: ['<b>más</b> + adjective, adverb or noun + <b>que</b>: <i>Mi hermano es más alto que yo.</i>',
                 '<b>menos … que</b> means “less … than”: <i>Este hotel es menos caro que el otro.</i> With a verb: <i>Trabajo más que tú.</i>',
                 'Before a number use <b>más de / menos de</b>: <i>Hay más de cien personas.</i>'] } },
          { type: 'conj', verbs: [
            { inf: 'más · menos', tr: { ru: 'с чем сравниваем', en: 'what we compare' }, variants: [
              { label: 'más … que', color: 'blue', rows: [['adjetivo', 'es <b>más</b> alto <b>que</b> yo'], ['adverbio', 'corre <b>más</b> rápido <b>que</b> tú'], ['sustantivo', 'tiene <b>más</b> amigos <b>que</b> él'], ['verbo', 'trabaja <b>más que</b> nadie'], ['número', 'cuesta <b>más de</b> cien euros']] },
              { label: 'menos … que', color: 'coral', rows: [['adjetivo', 'es <b>menos</b> caro <b>que</b> el otro'], ['adverbio', 'habla <b>menos</b> claro <b>que</b> tú'], ['sustantivo', 'tiene <b>menos</b> tiempo <b>que</b> yo'], ['verbo', 'duerme <b>menos que</b> antes'], ['número', 'tarda <b>menos de</b> una hora']] }
            ] }
          ] },
          { type: 'rules', items: [
            { color: 'blue', title: { ru: 'После que — yo, tú', en: 'After que — yo, tú' }, es: 'más alto que yo',
              body: { ru: 'После <b>que</b> ставят <i>yo, tú</i>, а не <i>mí, ti</i>: <i>Eres más alta que yo</i>, а не «que mí».', en: 'After <b>que</b> use <i>yo, tú</i>, not <i>mí, ti</i>: <i>Eres más alta que yo</i>, never “que mí”.' } },
            { color: 'coral', title: { ru: 'Прилагательное согласуется', en: 'The adjective agrees' }, es: 'más altas que',
              body: { ru: 'Прилагательное меняется по роду и числу, а <i>más</i> и <i>menos</i> — нет: <i>Mis hermanas son más altas que yo.</i>', en: 'The adjective agrees in gender and number, but <i>más</i> and <i>menos</i> never change: <i>Mis hermanas son más altas que yo.</i>' } }
          ] },
          { type: 'examples', items: [
            { color: 'blue', es: 'Mi hermano es <b>más alto que</b> yo.', ru: 'Мой брат выше меня.', en: 'My brother is taller than me.' },
            { color: 'coral', es: 'El tren es <b>menos rápido que</b> el avión.', ru: 'Поезд медленнее самолёта.', en: 'The train is slower than the plane.' },
            { color: 'blue', es: 'Hay <b>más de</b> cien personas en la plaza.', ru: 'На площади больше ста человек.', en: 'There are more than a hundred people in the square.' },
            { color: 'blue', es: 'Madrid es <b>más grande que</b> Sevilla.', ru: 'Мадрид больше Севильи.', en: 'Madrid is bigger than Seville.' },
            { color: 'blue', es: 'Hoy hace <b>más calor que</b> ayer.', ru: 'Сегодня жарче, чем вчера.', en: 'It’s hotter today than yesterday.' },
            { color: 'coral', es: 'Mis hijos ven <b>menos</b> la tele <b>que</b> antes.', ru: 'Мои дети смотрят телевизор меньше, чем раньше.', en: 'My children watch less TV than before.' },
            { color: 'coral', es: 'El vuelo dura <b>menos de</b> dos horas.', ru: 'Перелёт длится меньше двух часов.', en: 'The flight takes less than two hours.' }
          ] }
        ]
      },
      {
        id: 'equal', label: { ru: 'Равенство', en: 'Equality' },
        blocks: [
          { type: 'text', body: {
            ru: ['С прилагательным и наречием — <b>tan … como</b>: <i>Ana es tan alta como su madre.</i>',
                 'С существительным — <b>tanto / tanta / tantos / tantas … como</b>, по роду и числу: <i>Tengo tantos libros como tú.</i>',
                 'С глаголом — <b>tanto como</b>: <i>Juan trabaja tanto como Pedro.</i>'],
            en: ['With adjectives and adverbs use <b>tan … como</b>: <i>Ana es tan alta como su madre.</i>',
                 'With nouns use <b>tanto / tanta / tantos / tantas … como</b>, matching gender and number: <i>Tengo tantos libros como tú.</i>',
                 'With verbs use <b>tanto como</b>: <i>Juan trabaja tanto como Pedro.</i>'] } },
          { type: 'conj', verbs: [
            { inf: 'tan · tanto · como', tr: { ru: 'так же, как', en: 'as … as' }, variants: [
              { label: 'tan', color: 'teal', rows: [['adjetivo', 'es <b>tan</b> alta <b>como</b> su madre'], ['adverbio', 'conduce <b>tan</b> bien <b>como</b> tú']] },
              { label: 'tanto / -a / -os', color: 'purple', rows: [['masculino', '<b>tanto</b> dinero <b>como</b>'], ['femenino', '<b>tanta</b> paciencia <b>como</b>'], ['masc. plural', '<b>tantos</b> libros <b>como</b>'], ['fem. plural', '<b>tantas</b> horas <b>como</b>']] },
              { label: 'tanto como', color: 'blue', rows: [['verbo', 'trabaja <b>tanto como</b> Pedro'], ['verbo', 'no come <b>tanto como</b> antes']] }
            ] }
          ] },
          { type: 'text', color: 'teal', body: {
            ru: ['<b>С отрицанием</b> <i>no tan … como</i> звучит мягче, чем <i>menos … que</i>: <i>No es tan caro como pensaba.</i> — «Он не такой дорогой, как я думал».'],
            en: ['<b>In the negative</b>, <i>no tan … como</i> sounds softer than <i>menos … que</i>: <i>No es tan caro como pensaba.</i> — “It isn’t as expensive as I thought.”'] } },
          { type: 'text', color: 'purple', body: {
            ru: ['<b>Ещё два способа:</b> <i>igual de … que</i> — разговорное «такой же … как»: <i>Es igual de alto que yo.</i> И <i>el mismo / la misma … que</i> — «тот же, что»: <i>Tengo el mismo móvil que tú.</i>'],
            en: ['<b>Two more ways:</b> <i>igual de … que</i> is a colloquial “just as … as”: <i>Es igual de alto que yo.</i> And <i>el mismo / la misma … que</i> means “the same … as”: <i>Tengo el mismo móvil que tú.</i>'] } },
          { type: 'examples', items: [
            { color: 'teal', es: 'Este libro es <b>tan interesante como</b> la película.', ru: 'Эта книга такая же интересная, как фильм.', en: 'This book is as interesting as the film.' },
            { color: 'purple', es: 'No tengo <b>tanto tiempo como</b> tú.', ru: 'У меня не так много времени, как у тебя.', en: 'I don’t have as much time as you.' },
            { color: 'teal', es: 'El piso nuevo no es <b>tan luminoso como</b> el antiguo.', ru: 'Новая квартира не такая светлая, как старая.', en: 'The new flat isn’t as bright as the old one.' },
            { color: 'purple', es: 'En mi pueblo no hay <b>tantas tiendas como</b> aquí.', ru: 'В моём городке не так много магазинов, как здесь.', en: 'There aren’t as many shops in my village as here.' },
            { color: 'blue', es: 'Mi padre ya no viaja <b>tanto como</b> antes.', ru: 'Мой отец уже не путешествует столько, сколько раньше.', en: 'My father doesn’t travel as much as he used to.' },
            { color: 'teal', es: 'Mi hija habla inglés <b>igual de bien que</b> español.', ru: 'Моя дочь говорит по-английски так же хорошо, как по-испански.', en: 'My daughter speaks English just as well as Spanish.' }
          ] }
        ]
      },
      {
        id: 'super', label: { ru: 'Превосходная', en: 'Superlative' },
        blocks: [
          { type: 'text', body: {
            ru: ['«Самый» — <b>el / la / los / las</b> (+ существительное) + <b>más</b> + прилагательное + <b>de</b>: <i>Es la ciudad más bonita de España.</i>',
                 '«Очень-очень» — окончание <b>-ísimo</b>: <i>caro → carísimo</i>, <i>fácil → facilísimo</i>, <i>mucho → muchísimo</i>. С ним <i>muy</i> уже не нужно.'],
            en: ['“The most” is <b>el / la / los / las</b> (+ noun) + <b>más</b> + adjective + <b>de</b>: <i>Es la ciudad más bonita de España.</i>',
                 '“Really, extremely” is the ending <b>-ísimo</b>: <i>caro → carísimo</i>, <i>fácil → facilísimo</i>, <i>mucho → muchísimo</i>. Don’t add <i>muy</i> to it.'] } },
          { type: 'conj', verbs: [
            { inf: 'el más · -ísimo', tr: { ru: 'самый · очень-очень', en: 'the most · extremely' }, variants: [
              { label: 'el / la más', color: 'purple', rows: [['el', '<b>el</b> chico <b>más</b> alto <b>de</b>'], ['la', '<b>la</b> calle <b>más</b> larga <b>de</b>'], ['los', '<b>los</b> días <b>más</b> fríos <b>de</b>'], ['las', '<b>las</b> playas <b>más</b> bonitas <b>de</b>']] },
              { label: '-ísimo', color: 'amber', rows: [['caro', 'car<b>ísimo</b>'], ['fácil', 'facil<b>ísimo</b>'], ['mucho', 'much<b>ísimo</b>'], ['rico', 'ri<b>quísimo</b>'], ['largo', 'lar<b>guísimo</b>'], ['feliz', 'feli<b>císimo</b>']] }
            ] }
          ] },
          { type: 'text', color: 'purple', body: {
            ru: ['<b>После «самый» — de, а не en:</b> <i>la más bonita <b>de</b> España</i>, хотя по-русски «в Испании». Существительное стоит между артиклем и <i>más</i>: <i>el hotel más caro</i>.'],
            en: ['<b>After the superlative use de, not en:</b> <i>la más bonita <b>de</b> España</i> — “in Spain” in English. The noun goes between the article and <i>más</i>: <i>el hotel más caro</i>.'] } },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>-ísimo и орфография:</b> последняя гласная уходит (<i>caro → carísimo</i>), а согласные сохраняют звук: <i>rico → riquísimo</i> (c → qu), <i>largo → larguísimo</i> (g → gu), <i>feliz → felicísimo</i> (z → c). Окончание согласуется: <i>carísima, carísimos</i>.'],
            en: ['<b>-ísimo and spelling:</b> the final vowel drops (<i>caro → carísimo</i>) and consonants keep their sound: <i>rico → riquísimo</i> (c → qu), <i>largo → larguísimo</i> (g → gu), <i>feliz → felicísimo</i> (z → c). The ending agrees: <i>carísima, carísimos</i>.'] } },
          { type: 'examples', items: [
            { color: 'purple', es: 'Es <b>el mejor</b> restaurante <b>de</b> la ciudad.', ru: 'Это лучший ресторан в городе.', en: 'It’s the best restaurant in town.' },
            { color: 'amber', es: 'Este hotel es <b>carísimo</b>.', ru: 'Этот отель ужасно дорогой.', en: 'This hotel is extremely expensive.' },
            { color: 'purple', es: 'Agosto es <b>el mes más caluroso del</b> año.', ru: 'Август — самый жаркий месяц в году.', en: 'August is the hottest month of the year.' },
            { color: 'purple', es: 'Lucía es <b>la más joven de</b> la clase.', ru: 'Лусия — самая младшая в классе.', en: 'Lucía is the youngest in the class.' },
            { color: 'amber', es: 'La paella de tu madre está <b>riquísima</b>.', ru: 'Паэлья твоей мамы очень-очень вкусная.', en: 'Your mother’s paella is absolutely delicious.' },
            { color: 'amber', es: 'Gracias, sois <b>amabilísimos</b>.', ru: 'Спасибо, вы очень-очень любезны.', en: 'Thank you, you’re extremely kind.' }
          ] }
        ]
      },
      {
        id: 'irreg', label: { ru: 'Особые формы', en: 'Irregular' },
        blocks: [
          { type: 'text', body: {
            ru: ['Четыре прилагательных сравниваются по-особому: <b>bueno → mejor</b>, <b>malo → peor</b>, а о возрасте — <b>mayor</b> (старше) и <b>menor</b> (младше).',
                 'Говорят <i>mejor</i>, а не <i>más bueno</i>: <i>Este restaurante es mejor que el otro.</i>'],
            en: ['Four adjectives have special forms: <b>bueno → mejor</b>, <b>malo → peor</b>, and for age <b>mayor</b> (older) and <b>menor</b> (younger).',
                 'Say <i>mejor</i>, not <i>más bueno</i>: <i>Este restaurante es mejor que el otro.</i>'] } },
          { type: 'table', heading: { ru: 'Особые формы', en: 'Special forms' },
            head: ['', 'comparativo', 'superlativo'],
            rows: [
              ['bueno / bien', 'mejor', 'el / la mejor'],
              ['malo / mal', 'peor', 'el / la peor'],
              ['grande (edad)', 'mayor', 'el / la mayor'],
              ['pequeño (edad)', 'menor', 'el / la menor']
            ] },
          { type: 'conj', verbs: [
            { inf: 'mejor · peor', tr: { ru: 'при существительном и при глаголе', en: 'with a noun and with a verb' }, variants: [
              { label: { ru: 'прилагательное', en: 'adjective' }, color: 'amber', rows: [['bueno', 'un vino <b>mejor</b>'], ['buenos', 'unos vinos <b>mejores</b>'], ['malo', 'un día <b>peor</b>'], ['malas', 'unas notas <b>peores</b>']] },
              { label: { ru: 'наречие', en: 'adverb' }, color: 'blue', rows: [['bien', 'canta <b>mejor</b> que yo'], ['mal', 'juegan <b>peor</b> que antes']] }
            ] }
          ] },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Mejor и peor</b> — это и «лучше / хуже» при глаголе (<i>bien, mal</i>): <i>Cocinas mejor que yo.</i> Как прилагательные они меняются только по числу: <i>mejores, peores</i>. «Самый лучший» — <i>el mejor</i>, без <i>más</i>.'],
            en: ['<b>Mejor and peor</b> also mean “better / worse” with a verb (from <i>bien, mal</i>): <i>Cocinas mejor que yo.</i> As adjectives they change only for number: <i>mejores, peores</i>. “The very best” is <i>el mejor</i>, with no <i>más</i>.'] } },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Mayor / menor — о возрасте</b>, о размере — <i>más grande / más pequeño</i>: <i>Mi casa es más grande que la tuya.</i> <i>Mi hermano mayor</i> — «мой старший брат».'],
            en: ['<b>Mayor / menor are about age</b>; for size say <i>más grande / más pequeño</i>: <i>Mi casa es más grande que la tuya.</i> <i>Mi hermano mayor</i> means “my older brother”.'] } },
          { type: 'examples', items: [
            { color: 'amber', es: 'Este restaurante es <b>mejor que</b> el otro.', ru: 'Этот ресторан лучше, чем тот.', en: 'This restaurant is better than the other one.' },
            { color: 'blue', es: 'Hoy me encuentro <b>peor que</b> ayer.', ru: 'Сегодня я чувствую себя хуже, чем вчера.', en: 'I feel worse today than yesterday.' },
            { color: 'amber', es: 'Mi hermana <b>mayor</b> vive en Londres.', ru: 'Моя старшая сестра живёт в Лондоне.', en: 'My older sister lives in London.' },
            { color: 'amber', es: 'Carlos es dos años <b>menor que</b> yo.', ru: 'Карлос на два года младше меня.', en: 'Carlos is two years younger than me.' },
            { color: 'amber', es: 'Fue <b>la peor</b> película <b>del</b> festival.', ru: 'Это был худший фильм фестиваля.', en: 'It was the worst film of the festival.' }
          ] }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'В магазине и в поездке', en: 'Shopping and travelling' }, items: [
            { color: 'blue', es: 'Esta camiseta es <b>más barata que</b> aquella.', ru: 'Эта футболка дешевле, чем та.', en: 'This T-shirt is cheaper than that one.' },
            { color: 'coral', es: 'El autobús es <b>menos cómodo que</b> el tren.', ru: 'Автобус не такой удобный, как поезд.', en: 'The bus is less comfortable than the train.' },
            { color: 'purple', es: '¿Cuál es <b>la playa más tranquila de</b> la zona?', ru: 'Какой пляж тут самый спокойный?', en: 'Which is the quietest beach in the area?' },
            { color: 'teal', es: 'Barcelona no es <b>tan cara como</b> Londres.', ru: 'Барселона не такая дорогая, как Лондон.', en: 'Barcelona isn’t as expensive as London.' }
          ] },
          { type: 'examples', heading: { ru: 'Люди и работа', en: 'People and work' }, items: [
            { color: 'blue', es: 'Vosotros habláis español <b>mejor que</b> nosotros.', ru: 'Вы говорите по-испански лучше, чем мы.', en: 'You speak Spanish better than we do.' },
            { color: 'blue', es: 'Mis compañeros ganan <b>tanto como</b> yo.', ru: 'Мои коллеги зарабатывают столько же, сколько я.', en: 'My colleagues earn as much as I do.' },
            { color: 'blue', es: 'Este mes he tenido <b>más reuniones que</b> nunca.', ru: 'В этом месяце у меня было больше совещаний, чем когда-либо.', en: 'This month I’ve had more meetings than ever.' },
            { color: 'amber', es: 'Tu abuela es <b>simpatiquísima</b>.', ru: 'Твоя бабушка ужасно милая.', en: 'Your grandmother is incredibly nice.' }
          ] }
        ]
      }
    ],
    quiz: [
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Mi coche es ___ rápido que el tuyo.',
        options: ['más', 'tan', 'tanto'], answer: 0,
        explain: { ru: 'После идёт que, значит más … que.', en: 'It is followed by que, so más … que.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Ana es tan alta ___ su madre.',
        options: ['como', 'que', 'de'], answer: 0,
        explain: { ru: 'Tan всегда в паре с como.', en: 'Tan always pairs with como.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Pedro es más alto ___ Luis.',
        options: ['que', 'como', 'de'], answer: 0,
        explain: { ru: 'Más … que: más alto que Luis.', en: 'Más … que: más alto que Luis.' } },
      { prompt: { ru: 'Выберите форму', en: 'Choose the form' }, es: 'Este restaurante es ___ que el otro. (bueno)',
        options: ['mejor', 'más bueno', 'más mejor'], answer: 0,
        explain: { ru: 'Сравнение от bueno — mejor; más перед ним не ставят.', en: 'The comparative of bueno is mejor; never put más before it.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Tengo ___ amigos como tú.',
        options: ['tantos', 'tan', 'tantas'], answer: 0,
        explain: { ru: 'Перед существительным — tanto, по роду и числу: amigos → tantos.', en: 'Before a noun use tanto, matching gender and number: amigos → tantos.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Es la ciudad más bonita ___ España.',
        options: ['de', 'que', 'como'], answer: 0,
        explain: { ru: 'В превосходной степени — de: la más bonita de España.', en: 'The superlative uses de: la más bonita de España.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Mi hermana tiene 20 años y yo 25: soy ___ que ella.',
        options: ['mayor', 'tan mayor', 'menor'], answer: 0,
        explain: { ru: 'Старше — mayor … que. Tan требует como, а menor значит «младше».', en: 'Older is mayor … que. Tan needs como, and menor means “younger”.' } },
      { prompt: { ru: 'Выберите вариант', en: 'Choose the option' }, es: 'Hay ___ cincuenta personas en la sala.',
        options: ['más de', 'más que', 'tan como'], answer: 0,
        explain: { ru: 'Перед числом — más de.', en: 'Before a number use más de.' } },
      { prompt: { ru: 'Скажите «очень-очень лёгкий»', en: 'Say “really, really easy”' }, es: 'Este examen es ___.',
        options: ['facilísimo', 'muy facilísimo', 'más fácil'], answer: 0,
        explain: { ru: 'Fácil + -ísimo = facilísimo; muy с ним не нужно.', en: 'Fácil + -ísimo = facilísimo; no muy needed.' } },
      { prompt: { ru: 'Выберите слово', en: 'Choose the word' }, es: 'Juan trabaja ___ como Pedro.',
        options: ['tanto', 'tan', 'tantos'], answer: 0,
        explain: { ru: 'После глагола — tanto como.', en: 'After a verb use tanto como.' } }
    ]
  }
]);
