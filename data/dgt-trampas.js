// «Exam traps»: our own questions built on the «Trampa del examen» notes of the TestRuta «Manual del permiso B 2026»
// (used with permission). Loaded after the topic files: it adds to their questions.
ECA.data.addDgtQuestions({
  prioridad: [
    {
      id: 'tr-01',
      es: 'Llega a una intersección con señal de ceda el paso y otro vehículo se acerca por su izquierda por la vía a la que va a entrar. ¿Quién pasa primero?',
      tr: { ru: 'Вы подъезжаете к перекрёстку со знаком «Уступите дорогу», а по дороге, на которую вы выезжаете, слева едет машина. Кто проезжает первым?', en: 'You reach a junction with a give-way sign; a vehicle comes from your left on the road you’re joining. Who goes first?' },
      options: [
        { es: 'El otro vehículo, porque usted tiene un ceda el paso.', ru: 'Другая машина: у вас знак «Уступите дорогу».', en: 'The other vehicle, because you have a give-way sign.' },
        { es: 'Usted, porque el otro viene por la izquierda.', ru: 'Вы: другой едет слева.', en: 'You, because the other comes from the left.' },
        { es: 'El que llegue antes.', ru: 'Тот, кто подъехал раньше.', en: 'Whoever arrives first.' }
      ],
      answer: 0,
      explain: { ru: 'Правило правой руки работает только там, где нет знаков. Есть «Уступите дорогу» — уступаете всем на главной, с какой бы стороны они ни ехали.', en: 'The right-hand rule only applies where there are no signs. With a give-way sign you yield to everyone on the main road, whichever side they come from.' },
      hint: { ru: 'Знак есть — правая рука «молчит».', en: 'A sign present — the right-hand rule goes quiet.' },
      ref: 'RGC, art. 56'
    },
    {
      id: 'tr-02',
      es: 'En una carretera de doble sentido hay un obstáculo en su carril y un vehículo se acerca de frente. ¿Quién debe ceder el paso?',
      tr: { ru: 'На двусторонней дороге на вашей полосе препятствие, навстречу едет машина. Кто должен уступить?', en: 'On a two-way road there’s an obstacle in your lane and a vehicle approaches head-on. Who must give way?' },
      options: [
        { es: 'Usted, porque el obstáculo está en su sentido y tendría que invadir el carril contrario.', ru: 'Вы: препятствие на вашей стороне, вам пришлось бы выехать на встречку.', en: 'You, because the obstacle is on your side and you’d have to enter the other lane.' },
        { es: 'El que venga de frente.', ru: 'Встречный.', en: 'The oncoming vehicle.' },
        { es: 'El vehículo de mayor tamaño.', ru: 'Более крупная машина.', en: 'The larger vehicle.' }
      ],
      answer: 0,
      explain: { ru: 'Уступает тот, у кого препятствие на его полосе: объезжая, он займёт встречную.', en: 'Whoever has the obstacle in their lane gives way: going round it, they’d use the other lane.' },
      hint: { ru: 'Твоё препятствие — твоя очередь ждать.', en: 'Your obstacle — your turn to wait.' },
      ref: 'RGC, art. 60'
    }
  ],
  velocidad: [
    {
      id: 'tr-03',
      es: 'En una autovía hay una señal de velocidad máxima de 120 km/h. ¿A qué velocidad máxima puede circular un camión?',
      tr: { ru: 'На автовии знак «120». С какой максимальной скоростью может ехать грузовик?', en: 'An autovía sign shows a 120 km/h limit. What is a lorry’s top speed?' },
      options: [
        { es: 'A 90 km/h, el límite genérico de su tipo de vehículo.', ru: '90 км/ч — общий лимит для его типа машины.', en: '90 km/h, the general limit for its vehicle type.' },
        { es: 'A 120 km/h, porque lo indica la señal.', ru: '120 км/ч: так написано на знаке.', en: '120 km/h, as the sign says.' },
        { es: 'A 100 km/h.', ru: '100 км/ч.', en: '100 km/h.' }
      ],
      answer: 0,
      explain: { ru: 'Знак не поднимает лимит выше общего для вашего типа машины. Грузовик на автомагистрали — максимум 90.', en: 'A sign doesn’t lift you above your vehicle type’s general limit. A lorry on a motorway — 90 max.' },
      hint: { ru: 'Знак — для всех, но потолок машины — свой.', en: 'The sign is for all, but each vehicle has its own ceiling.' },
      ref: 'RGC, art. 48'
    },
    {
      id: 'tr-04',
      es: 'Circula por una autovía con niebla densa y solo ve a 40 metros. ¿Debe mantener al menos 60 km/h, la velocidad mínima?',
      tr: { ru: 'Вы на автовии в густом тумане, видно на 40 м. Нужно ли держать минимум 60 км/ч?', en: 'You’re on an autovía in thick fog with 40 m visibility. Must you keep at least the 60 km/h minimum?' },
      options: [
        { es: 'No; debe circular a la velocidad que le permita detenerse dentro del espacio visible.', ru: 'Нет: ехать так, чтобы успеть остановиться в пределах видимости.', en: 'No; drive at a speed that lets you stop within what you can see.' },
        { es: 'Sí, porque la mínima es obligatoria siempre.', ru: 'Да: минимум обязателен всегда.', en: 'Yes, the minimum always applies.' },
        { es: 'Sí, con las luces largas encendidas.', ru: 'Да, с дальним светом.', en: 'Yes, with main beam on.' }
      ],
      answer: 0,
      explain: { ru: 'Минимальная скорость не делает опасную скорость обязательной: в тумане можно ехать медленнее минимума, если этого требуют условия (включив аварийку при необходимости).', en: 'A minimum doesn’t make a dangerous speed compulsory: in fog you may go below it when conditions require (with hazards if needed).' },
      hint: { ru: 'Сначала — «успею ли остановиться», потом — цифры.', en: 'First “can I stop in time?”, then the numbers.' },
      ref: 'RGC, art. 49'
    }
  ],
  luces: [
    {
      id: 'tr-05',
      es: 'Circula de noche con su turismo y solo lleva encendidas las luces de circulación diurna. ¿Es correcto?',
      tr: { ru: 'Ночью вы едете только с дневными ходовыми огнями. Это правильно?', en: 'At night you drive with only your daytime running lights on. Is that correct?' },
      options: [
        { es: 'No; las diurnas no sustituyen a las de cruce y pueden dejar el vehículo sin luces traseras.', ru: 'Нет: дневные огни не заменяют ближний и часто не включают задние фонари.', en: 'No; DRLs don’t replace dipped beams and may leave you without rear lights.' },
        { es: 'Sí, si la vía está iluminada.', ru: 'Да, если дорога освещена.', en: 'Yes, if the road is lit.' },
        { es: 'Sí, porque se encienden solas.', ru: 'Да: они включаются сами.', en: 'Yes, they come on by themselves.' }
      ],
      answer: 0,
      explain: { ru: 'Дневные ходовые огни светят только вперёд и нужны, чтобы вас видели днём. Ночью и в туннеле нужен ближний свет с габаритами — иначе сзади машина может быть тёмной.', en: 'DRLs only shine forward and help you be seen by day. At night and in tunnels you need dipped beams and sidelights — otherwise the back of the car may be dark.' },
      hint: { ru: 'Дневные — только для дня.', en: 'Daytime lights are for daytime.' },
      ref: 'RGC, art. 99'
    },
    {
      id: 'tr-06',
      es: 'Va a girar a la derecha. ¿Puede indicarlo con la señal de emergencia (los cuatro intermitentes)?',
      tr: { ru: 'Вы поворачиваете направо. Можно ли показать это аварийкой?', en: 'You’re turning right. May you signal it with the hazard lights?' },
      options: [
        { es: 'No; la señal de emergencia no indica hacia dónde va a girar.', ru: 'Нет: аварийка не показывает, куда вы поворачиваете.', en: 'No; hazards don’t show which way you’re turning.' },
        { es: 'Sí, es más visible.', ru: 'Да: так заметнее.', en: 'Yes, it’s more visible.' },
        { es: 'Sí, si es de noche.', ru: 'Да, если ночью.', en: 'Yes, at night.' }
      ],
      answer: 0,
      explain: { ru: 'Аварийка предупреждает об опасности, но не заменяет указатель поворота и не разрешает, например, стоять во втором ряду.', en: 'Hazards warn of danger but don’t replace the indicator, nor make double-parking legal.' },
      hint: { ru: 'Аварийка — «беда», поворотник — «куда».', en: 'Hazards say “trouble”; indicators say “where”.' },
      ref: 'RGC, art. 109'
    }
  ],
  conductor: [
    {
      id: 'tr-07',
      es: 'Su médico le ha recetado un medicamento que produce somnolencia. ¿Puede conducir bajo sus efectos?',
      tr: { ru: 'Врач выписал вам лекарство, вызывающее сонливость. Можно ли водить под его действием?', en: 'Your doctor prescribed a medicine that causes drowsiness. May you drive under its effects?' },
      options: [
        { es: 'No, si altera su capacidad para conducir, aunque sea legal y esté recetado.', ru: 'Нет, если оно ухудшает способность водить, даже если оно законное и по рецепту.', en: 'No, if it impairs your driving, even if legal and prescribed.' },
        { es: 'Sí, porque está recetado.', ru: 'Да: оно по рецепту.', en: 'Yes, because it’s prescribed.' },
        { es: 'Sí, si no bebe alcohol.', ru: 'Да, если не пить алкоголь.', en: 'Yes, if you don’t drink alcohol.' }
      ],
      answer: 0,
      explain: { ru: 'Закон запрещает водить под влиянием веществ, ухудшающих способности, — не только запрещённых. Рецепт не даёт права ехать сонным.', en: 'The law bans driving under substances that impair you — not just illegal ones. A prescription doesn’t let you drive drowsy.' },
      hint: { ru: 'Законно ≠ безопасно за рулём.', en: 'Legal ≠ safe to drive.' },
      ref: 'RGC, art. 27'
    }
  ],
  mecanica: [
    {
      id: 'tr-08',
      es: 'Un ambientador grande colgado del retrovisor interior, ¿puede suponer una infracción?',
      tr: { ru: 'Может ли большой ароматизатор на салонном зеркале быть нарушением?', en: 'Can a large air freshener hanging from the interior mirror be an offence?' },
      options: [
        { es: 'Sí, si impide la correcta visión del conductor.', ru: 'Да, если мешает водителю видеть дорогу.', en: 'Yes, if it blocks the driver’s view.' },
        { es: 'No, los accesorios interiores nunca son infracción.', ru: 'Нет: предметы в салоне никогда не нарушение.', en: 'No, interior accessories are never an offence.' },
        { es: 'Solo si es de color oscuro.', ru: 'Только если он тёмный.', en: 'Only if it’s dark-coloured.' }
      ],
      answer: 0,
      explain: { ru: 'Водитель обязан сохранять поле зрения. Подвески, большие наклейки, предметы на панели — нарушение, если мешают обзору.', en: 'Drivers must keep their field of view clear. Hanging items, big stickers, objects on the dashboard are an offence if they block the view.' },
      hint: { ru: 'Всё, что перед глазами, — под подозрением.', en: 'Anything in front of your eyes is suspect.' },
      ref: 'RGC, art. 19'
    },
    {
      id: 'tr-09',
      es: 'Un turismo particular tiene ocho años. ¿Con qué frecuencia debe pasar la ITV?',
      tr: { ru: 'Частной легковой 8 лет. Как часто ей проходить ITV?', en: 'A private car is eight years old. How often must it take the ITV?' },
      options: [
        { es: 'Cada dos años.', ru: 'Раз в два года.', en: 'Every two years.' },
        { es: 'Cada año.', ru: 'Каждый год.', en: 'Every year.' },
        { es: 'Cada seis meses.', ru: 'Раз в полгода.', en: 'Every six months.' }
      ],
      answer: 0,
      explain: { ru: 'Легковая: первый осмотр в 4 года, с 4 до 10 лет — раз в 2 года, старше 10 — каждый год. В 8 лет — раз в 2 года.', en: 'A car: first ITV at 4, every 2 years from 4 to 10, yearly after 10. At 8 — every 2 years.' },
      hint: { ru: '4 – 2 – 1.', en: '4 – 2 – 1.' },
      ref: 'RD 920/2017 (ITV)'
    }
  ],
  documentacion: [
    {
      id: 'tr-10',
      es: 'Lleva en el coche un detector de radar, pero desconectado. ¿Comete una infracción?',
      tr: { ru: 'В машине лежит выключенный антирадар-детектор. Это нарушение?', en: 'You have a radar detector in the car, switched off. Is that an offence?' },
      options: [
        { es: 'Sí; está prohibido llevarlo, aunque no se utilice.', ru: 'Да: запрещено даже возить его, без использования.', en: 'Yes; carrying one is banned, even if unused.' },
        { es: 'No, solo si está encendido.', ru: 'Нет, только если включён.', en: 'No, only if switched on.' },
        { es: 'No, los detectores son legales.', ru: 'Нет, детекторы законны.', en: 'No, detectors are legal.' }
      ],
      answer: 0,
      explain: { ru: 'Детекторы и глушители радаров запрещено даже возить. Детектор — 3 балла, глушитель (inhibidor) — 6. Уведомления навигатора о камерах — не детектор.', en: 'Radar detectors and jammers are banned even to carry. Detector — 3 points, jammer (inhibidor) — 6. A satnav’s camera alert isn’t a detector.' },
      hint: { ru: '«Не пользуюсь» ≠ «можно возить».', en: '“Not using it” ≠ “allowed to carry it”.' },
      ref: 'Ley de Tráfico, anexo II'
    }
  ]
});
