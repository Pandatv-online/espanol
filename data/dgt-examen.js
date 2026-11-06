// DGT · mock exam: 30 random questions from every DGT theory topic loaded before this file.
// Load it after all data/dgt-theory-*.js (and dgt-revista.js) in index.html.
(function () {
  var seen = {};
  var bank = [];
  ECA.data.grammar('DGT').forEach(function (topic) {
    if (topic.noExam) return; // e.g. the practical driving test: not part of the theory exam
    (topic.quiz || []).forEach(function (q) {
      var key = String(q.es || '').trim().toLowerCase();
      if (!key || seen[key]) return;
      seen[key] = true;
      bank.push(q);
    });
  });
  if (bank.length < 10) return; // no theory yet — no exam

  ECA.data.addGrammar('DGT', [
    {
      id: 'dgt-examen', level: 'DGT',
      title: { ru: 'Пробный экзамен', en: 'Mock exam' },
      summary: { ru: '30 случайных вопросов из всех тем, как на экзамене DGT.', en: '30 random questions from every topic, like the DGT exam.' },
      hero: { es: 'Examen teórico: <b>simulacro</b>', sub: { ru: '30 вопросов из всех тем · на экзамене можно ошибиться не больше 3 раз', en: '30 questions from every topic · the real exam allows at most 3 mistakes' } },
      tabs: [
        {
          id: 'como', label: { ru: 'Экзамен', en: 'The exam' },
          blocks: [
            { type: 'rules', items: [
              { color: 'blue', label: { ru: 'Формат', en: 'Format' }, title: { ru: '30 вопросов, 30 минут', en: '30 questions, 30 minutes' },
                body: { ru: 'Теоретический экзамен на категорию B — тест на компьютере: <b>30 вопросов</b>, у каждого <b>3 варианта</b> и один верный ответ.', en: 'The category B theory exam is a computer test: <b>30 questions</b>, each with <b>3 options</b> and one right answer.' },
                es: 'Examen teórico: <b>30 preguntas</b>, <b>30 minutos</b>.' },
              { color: 'coral', label: { ru: 'Зачёт', en: 'Pass mark' }, title: { ru: 'Не больше 3 ошибок', en: 'At most 3 mistakes' },
                body: { ru: 'Чтобы сдать, нужно ответить верно минимум на <b>27 из 30</b>. Здесь тема засчитывается с 80 %, но ориентируйтесь на 27.', en: 'To pass you need at least <b>27 of 30</b> right. Here the topic counts as passed from 80 %, but aim for 27.' },
                es: 'Se aprueba con un máximo de <b>3 errores</b>.' },
              { color: 'teal', label: { ru: 'Совет', en: 'Tip' }, title: { ru: 'Читайте вопрос целиком', en: 'Read the whole question' },
                body: { ru: 'Ловушки обычно в словах <b>siempre</b>, <b>nunca</b>, <b>solo</b>, <b>en ningún caso</b> и в типе дороги (в населённом пункте или вне его).', en: 'Traps usually hide in <b>siempre</b>, <b>nunca</b>, <b>solo</b>, <b>en ningún caso</b> and in the road type (built-up area or not).' },
                es: '<b>Siempre</b>, <b>nunca</b>, <b>solo</b>: lea la pregunta entera.' }
            ] },
            { type: 'tip', title: { ru: 'Как тренироваться', en: 'How to practise' },
              body: { ru: ['Сначала пройдите тесты по темам и знакам, потом решайте пробный экзамен, пока не будете стабильно делать не больше 3 ошибок.', 'Каждый новый заход — новые 30 вопросов из общей базы. Перед настоящим экзаменом пройдите официальный симулятор DGT: там такой же интерфейс, как на экзамене.'],
                      en: ['First take the topic and sign tests, then do mock exams until you reliably make 3 mistakes or fewer.', 'Every new attempt draws 30 new questions from the whole bank. Before the real exam, try the official DGT simulator: its interface is the same as at the exam.'] } }
          ]
        },
        {
          id: 'vocab', label: { ru: 'Слова', en: 'Words' },
          blocks: [
            { type: 'table', heading: { ru: 'Слова из инструкций к экзамену', en: 'Words from the exam instructions' },
              head: ['', { ru: 'Перевод', en: 'Translation' }],
              rows: [
                ['la pregunta', { ru: 'вопрос', en: 'question' }],
                ['la respuesta correcta', { ru: 'верный ответ', en: 'correct answer' }],
                ['el error / el fallo', { ru: 'ошибка', en: 'mistake' }],
                ['apto / no apto', { ru: 'сдал / не сдал', en: 'pass / fail' }],
                ['la convocatoria', { ru: 'попытка, вызов на экзамен', en: 'exam sitting' }],
                ['la autoescuela', { ru: 'автошкола', en: 'driving school' }],
                ['el examen práctico', { ru: 'экзамен по вождению', en: 'driving test' }]
              ] }
          ]
        }
      ],
      quizCount: 30,
      quiz: bank
    }
  ]);
})();
