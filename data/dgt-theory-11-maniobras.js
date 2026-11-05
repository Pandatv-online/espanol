// DGT · theory, topic 11: manoeuvres. Sources: DGT «Teórica abreviada, lectura fácil» (2025),
// DGT Manual I «Normas y señales» (2025), RGC (RD 1428/2003), LSV (RDL 6/2015), RGCond (RD 818/2009).
ECA.data.addGrammar('DGT', [
  {
    id: 'dgt-maniobras', level: 'DGT',
    title: { ru: 'Манёвры', en: 'Manoeuvres' },
    summary: { ru: 'Выезд и перестроение, обгон, повороты, разворот, задний ход, остановка и стоянка.',
               en: 'Joining traffic and changing lanes, overtaking, turns, U-turns, reversing, stopping and parking.' },
    hero: { es: '<b>Maniobras</b>',
            sub: { ru: 'Зеркало — сигнал — манёвр: обгон, повороты, разворот, задний ход и стоянка',
                   en: 'Mirror, signal, manoeuvre: overtaking, turns, U-turns, reversing and parking' } },
    tabs: [
      {
        id: 'basics', label: { ru: 'Основы', en: 'Basics' },
        blocks: [
          { type: 'rules', heading: { ru: 'Правило R.S.M.', en: 'The R.S.M. rule' }, items: [
            { color: 'blue', label: { ru: 'Шаг 1', en: 'Step 1' }, title: { ru: 'Зеркало', en: 'Mirror' }, es: 'Retrovisor',
              body: { ru: 'Посмотрите в зеркала и напрямую: можно ли выполнить манёвр сейчас, никому не мешая?',
                      en: 'Look in the mirrors and directly: can you do the manoeuvre now without endangering anyone?' } },
            { color: 'blue', label: { ru: 'Шаг 2', en: 'Step 2' }, title: { ru: 'Сигнал', en: 'Signal' }, es: 'Señal',
              body: { ru: 'Предупредите заранее указателем поворота или рукой. Световой сигнал держат до конца манёвра и выключают сразу после.',
                      en: 'Warn in good time with the indicator or your arm. A light signal stays on until the manoeuvre ends and goes off straight after.' } },
            { color: 'blue', label: { ru: 'Шаг 3', en: 'Step 3' }, title: { ru: 'Манёвр', en: 'Manoeuvre' }, es: 'Maniobra',
              body: { ru: 'Выполните его плавно, с подходящей скоростью и в как можно более короткое время.',
                      en: 'Carry it out smoothly, at a suitable speed and in as little time as possible.' } }
          ] },
          { type: 'table', heading: { ru: 'Сигналы рукой и светом', en: 'Arm and light signals' },
            head: [{ ru: 'Манёвр', en: 'Manoeuvre' }, { ru: 'Свет', en: 'Light' }, { ru: 'Рука', en: 'Arm' }],
            rows: [
              [{ ru: 'Влево', en: 'To the left' }, { ru: 'левый поворотник', en: 'left indicator' }, { ru: 'вбок, ладонь вниз', en: 'out, palm down' }],
              [{ ru: 'Вправо', en: 'To the right' }, { ru: 'правый поворотник', en: 'right indicator' }, { ru: 'согнута вверх', en: 'bent upwards' }],
              [{ ru: 'Задний ход', en: 'Reversing' }, { ru: 'фонарь заднего хода', en: 'reversing light' }, { ru: 'вбок, ладонь назад', en: 'out, palm back' }],
              [{ ru: 'Торможение', en: 'Braking' }, { ru: 'стоп-сигналы несколько раз', en: 'brake lights repeatedly' }, { ru: 'вверх-вниз быстро', en: 'up and down, quickly' }]
            ] },
          { type: 'text', color: 'blue', body: {
            ru: ['Сигнал рукой, если его видно, <b>отменяет</b> противоречащий ему световой. Звуковой сигнал — только чтобы избежать аварии или <b>за городом</b> предупредить об обгоне; вместо него можно мигнуть фарами, даже в городе (RGC, ст. 108–110).'],
            en: ['An arm signal that others can see <b>overrides</b> any light signal that contradicts it. The horn is only for avoiding a crash or, <b>outside built-up areas</b>, for warning that you are about to overtake; instead you may flash your headlights, even in town (RGC arts. 108–110).'] } },
          { type: 'triggers', heading: { ru: 'Выезд в поток и смена полосы', en: 'Joining traffic and changing lanes' }, items: [
            { num: '1', color: 'teal', title: { ru: 'Выезд с места или с прилегающей территории', en: 'Pulling out or leaving a property' },
              body: { ru: 'Уступите всем, кто едет по дороге, учитывая их скорость. С частной дороги — так медленно, чтобы остановиться мгновенно, уступая с обеих сторон.', en: 'Give way to everyone on the road, judging their speed. From a private road: slowly enough to stop at once, giving way in both directions.' },
              phrases: ['incorporación', 'ceder el paso', 'camino privado'] },
            { num: '2', color: 'teal', title: { ru: 'Полоса разгона', en: 'Acceleration lane' },
              body: { ru: 'В <b>начале</b> полосы оцените поток (при необходимости остановитесь там), затем разгонитесь до скорости потока к её концу.', en: 'At the <b>start</b> of the lane check the traffic (stop there if necessary), then speed up to match the traffic by its end.' },
              phrases: ['carril de aceleración'] },
            { num: '3', color: 'teal', title: { ru: 'Помочь автобусу', en: 'Let the bus out' },
              body: { ru: 'В городе пропустите автобус, отъезжающий от остановки: сместитесь, снизьте скорость или остановитесь.', en: 'In town let a bus pull out of its stop: move over, slow down or stop.' },
              phrases: ['parada señalizada', 'facilitar la maniobra'] },
            { num: '4', color: 'teal', title: { ru: 'Смена полосы', en: 'Changing lanes' },
              body: { ru: 'Заранее, плавно и не подрезая: приоритет у того, кто <b>уже едет</b> по полосе, на которую вы перестраиваетесь.', en: 'In good time, smoothly and without cutting in: priority goes to whoever is <b>already in</b> the lane you move into.' },
              phrases: ['desplazamiento lateral', 'cambio de carril'] }
          ] }
        ]
      },
      {
        id: 'overtake', label: { ru: 'Обгон', en: 'Overtaking' },
        blocks: [
          { type: 'text', body: {
            ru: ['Обгоняют <b>слева</b>. <b>Справа</b> можно, если обгоняемый ясно показал поворот налево или остановку слева, при обгоне трамвая, идущего посередине дороги с двусторонним движением, и <b>в городе</b> на дороге с двумя и более размеченными полосами в одну сторону (RGC, ст. 82).'],
            en: ['You overtake on the <b>left</b>. On the <b>right</b> it is allowed when the driver ahead has clearly signalled a left turn or stopping on the left, when passing a tram running down the middle of a two-way road, and <b>in town</b> on a road with two or more marked lanes in your direction (RGC art. 82).'] } },
          { type: 'triggers', heading: { ru: 'Обгон по шагам', en: 'Overtaking step by step' }, items: [
            { num: '1', color: 'blue', title: { ru: 'Проверить', en: 'Check' },
              body: { ru: 'Встречная полоса свободна на всё время манёвра; впереди идущий не показал тот же манёвр; сзади вас никто уже не начал обгон; есть куда вернуться.', en: 'The opposite lane is clear for the whole manoeuvre; the driver ahead has not signalled the same move; nobody behind has started overtaking you; there is room to pull back in.' },
              phrases: ['espacio libre suficiente', 'retrovisor'] },
            { num: '2', color: 'blue', title: { ru: 'Предупредить', en: 'Warn' },
              body: { ru: 'Левый поворотник. За городом можно коротко посигналить или мигнуть фарами.', en: 'Left indicator. Out of town you may sound the horn briefly or flash your lights.' },
              phrases: ['intermitente izquierdo', 'señal acústica fuera de poblado'] },
            { num: '3', color: 'blue', title: { ru: 'Обогнать', en: 'Overtake' },
              body: { ru: 'Заметно быстрее обгоняемого, но <b>не выше лимита</b>, с достаточным боковым интервалом. Если что-то пошло не так — сбросить скорость и вернуться.', en: 'Clearly faster than the vehicle overtaken but <b>within the limit</b>, with enough lateral gap. If something goes wrong, slow down and drop back.' },
              phrases: ['velocidad notoriamente superior', 'separación lateral'] },
            { num: '4', color: 'blue', title: { ru: 'Вернуться', en: 'Pull back in' },
              body: { ru: 'Правый поворотник и плавно в свою полосу, как только можно, не заставляя никого тормозить или отворачивать.', en: 'Right indicator and back into your lane gradually, as soon as possible, without making anyone brake or swerve.' },
              phrases: ['reintegrarse al carril'] }
          ] },
          { type: 'figure', src: 'img/dgt/maniobras-ciclista.svg',
            alt: { ru: 'Машина обгоняет велосипедиста, выехав на встречную полосу; между ними не меньше 1,5 м. Вне города скорость минимум на 20 км/ч ниже лимита.',
                   en: 'A car overtakes a cyclist by moving into the opposite lane, leaving at least 1.5 m. Outside built-up areas speed is at least 20 km/h below the limit.' },
            caption: { ru: 'Велосипед, мопед, СИМ, пешеход, животное: занять часть или всю соседнюю полосу, интервал ≥ 1,5 м. Если в вашу сторону больше одной полосы — полностью перестроиться.',
                       en: 'Bicycle, moped, e-scooter, pedestrian, animal: take part or all of the next lane, gap ≥ 1.5 m. With more than one lane in your direction, change lanes completely.' } },
          { type: 'rules', heading: { ru: 'Особые случаи', en: 'Special cases' }, items: [
            { color: 'teal', title: { ru: 'Уязвимые участники', en: 'Vulnerable road users' }, es: '1,5 m · −20 km/h',
              body: { ru: 'Обгоняя велосипедистов, мопеды, СИМ, пешеходов, животных, вне города — <b>минимум на 20 км/ч ниже лимита</b>. Группа велосипедистов — один объект. Нельзя обгонять, если мешаете встречным, даже едущим по обочине (ст. 85.4).',
                      en: 'When overtaking cyclists, mopeds, e-scooters, pedestrians or animals out of town, go <b>at least 20 km/h below the limit</b>. A group of cyclists counts as one unit. Do not overtake if it endangers oncoming users, even on the hard shoulder (art. 85.4).' } },
            { color: 'teal', title: { ru: 'Стоящая машина на дороге', en: 'Vehicle stopped on the road' }, es: '1,5 m · −20 km/h',
              body: { ru: 'Сломанная машина, аварийка, эвакуатор, дорожные работы — объезжать с интервалом ≥ 1,5 м и на 20 км/ч ниже лимита, даже через встречную полосу (ст. 88.1).',
                      en: 'A broken-down vehicle, an emergency or recovery vehicle, road works: pass with a gap of ≥ 1.5 m and 20 km/h below the limit, even using the opposite lane (art. 88.1).' } },
            { color: 'purple', title: { ru: 'Вы на двух колёсах', en: 'You are on two wheels' }, es: '1,50 m',
              body: { ru: 'Водитель двухколёсного транспорта, обгоняя вне города любой другой, оставляет не меньше 1,5 м (ст. 85.5).',
                      en: 'A rider of a two-wheeled vehicle overtaking anything outside built-up areas leaves at least 1.5 m (art. 85.5).' } },
            { color: 'purple', title: { ru: 'Несколько полос в одну сторону', en: 'Several lanes in one direction' }, es: 'carril izquierdo',
              body: { ru: 'После обгона можно остаться слева, если сейчас же обгоните снова и никому не мешаете; быстрее догоняющим уступите (ст. 83).',
                      en: 'After overtaking you may stay on the left if you are about to overtake again and hold nobody up; move back for faster traffic (art. 83).' } }
          ] },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Если обгоняют вас:</b> прижмитесь к правому краю (не на обочину), <b>не ускоряйтесь</b> и не мешайте; при опасности — притормозите и дайте вернуться в полосу. Тяжёлый или медленный транспорт, который нельзя легко обогнать, сбавляет ход или уходит на обочину и может показать «обгоняй» правым поворотником или рукой — махом от себя вперёд-назад (ст. 86).'],
            en: ['<b>If you are being overtaken:</b> keep to the right edge (not onto the hard shoulder), <b>do not speed up</b> and do not obstruct; if danger arises, slow down and let the other driver back in. Heavy or slow vehicles that are hard to pass slow down or move onto the hard shoulder, and may signal “go ahead” with the right indicator or by waving the arm back and forth (art. 86).'] } }
        ]
      },
      {
        id: 'bans', label: { ru: 'Запреты', en: 'Bans' },
        blocks: [
          { type: 'triggers', heading: { ru: 'Где обгонять запрещено', en: 'Where overtaking is forbidden' }, items: [
            { num: '1', color: 'coral', title: { ru: 'Плохая видимость', en: 'Poor visibility' },
              body: { ru: 'Кроме случая, когда направления чётко разделены и выезжать на встречную не нужно.', en: 'Unless the two directions are clearly separated and you do not need to enter the opposite side.' },
              phrases: ['curvas', 'cambios de rasante', 'niebla', 'detrás de un vehículo que adelanta'] },
            { num: '2', color: 'coral', title: { ru: 'Переходы и переезды', en: 'Crossings' },
              sub: { ru: 'и рядом с ними', en: 'and close to them' },
              phrases: ['pasos para peatones', 'pasos para ciclistas', 'pasos a nivel'] },
            { num: '3', color: 'coral', title: { ru: 'Перекрёстки', en: 'Junctions' },
              body: { ru: 'Можно, если это кольцо, обгон справа по правилам, ваша дорога главная и это обозначено знаком, или вы обгоняете двухколёсный транспорт.', en: 'Allowed in a roundabout, when overtaking on the right is permitted, when your road has priority shown by a sign, or when overtaking a two-wheeler.' },
              phrases: ['intersecciones', 'sus proximidades'] },
            { num: '4', color: 'coral', title: { ru: 'Туннели', en: 'Tunnels' },
              body: { ru: 'Если в вашу сторону только одна полоса.', en: 'If there is only one lane in your direction.' },
              phrases: ['túnel', 'paso inferior', 'S-5'] },
            { num: '5', color: 'coral', title: { ru: 'Обгон обгоняющего', en: 'Passing someone who is overtaking' },
              body: { ru: 'Нельзя обгонять машину, которая сама обгоняет, если для этого нужно выехать на встречную. Несколько машин подряд — только если в любой момент можно вернуться вправо.', en: 'You may not pass a vehicle that is itself overtaking if you would enter the opposite side. Several vehicles in a row only if you can pull back right at any moment.' },
              phrases: ['varios vehículos', 'doble adelantamiento'] }
          ] },
          { type: 'rules', heading: { ru: 'Это не обгон', en: 'Not counted as overtaking' }, items: [
            { color: 'amber', title: { ru: 'Пробка', en: 'Queues' }, es: 'circulación densa',
              body: { ru: 'Одна полоса едет быстрее другой — это не обгон. Но перестраиваться ради обгона нельзя: только чтобы повернуть или съехать.',
                      en: 'One lane moving faster than another is not overtaking. But do not change lanes to get ahead — only to turn or exit.' } },
            { color: 'amber', title: { ru: 'Полосы разгона, торможения, выделенные', en: 'Slip roads and reserved lanes' }, es: 'carril de aceleración',
              body: { ru: 'Ехать по ним быстрее основного потока (или наоборот) — не обгон.',
                      en: 'Going faster along them than the main lanes (or the reverse) is not overtaking.' } },
            { color: 'amber', title: { ru: 'Препятствие', en: 'Obstacle' }, es: 'obstáculo',
              body: { ru: 'Объехать препятствие или стоящую машину можно и через сплошную, если убедились в безопасности. Велосипедистов, СИМ, тракторы и т. п., едущих медленно, — тоже (ст. 88–89).',
                      en: 'You may pass an obstacle or a stationary vehicle even across a solid line once you have made sure it is safe. The same applies to slow cyclists, e-scooters, tractors and the like (arts. 88–89).' } }
          ] },
          { type: 'signs', heading: { ru: 'Знаки', en: 'Signs' }, items: [
            { code: 'R-305', note: { ru: 'нельзя обгонять механический транспорт с выездом на встречную', en: 'no overtaking motor vehicles by entering the opposite side' } },
            { code: 'R-306', note: { ru: 'грузовикам > 3,5 т нельзя обгонять даже без выезда на встречную', en: 'lorries > 3.5 t may not overtake even without entering the opposite side' } },
            { code: 'R-502', note: { ru: 'конец запрета обгона', en: 'end of no overtaking' } },
            { code: 'R-500', note: { ru: 'конец всех запретов', en: 'end of all prohibitions' } },
            { code: 'S-1c', note: { ru: 'дорога 2+1: средняя полоса для обгона попеременно', en: '2+1 road: the middle lane is for overtaking, alternately' } }
          ] },
          { type: 'tip', title: { ru: 'R-305 и велосипед', en: 'R-305 and the bicycle' }, body: {
            ru: ['R-305 запрещает обгонять <b>механический транспорт</b>. Велосипедиста под этим знаком (и через сплошную) обогнать можно, если он едет медленно, обгон безопасен и вы оставляете 1,5 м.'],
            en: ['R-305 forbids overtaking <b>motor vehicles</b>. Under this sign (and across a solid line) you may overtake a slow cyclist if it is safe and you leave 1.5 m.'] } }
        ]
      },
      {
        id: 'turns', label: { ru: 'Повороты', en: 'Turns' },
        blocks: [
          { type: 'rules', heading: { ru: 'Поворот (cambio de dirección)', en: 'Turning (cambio de dirección)' }, items: [
            { color: 'teal', title: { ru: 'Направо', en: 'Right turn' }, es: 'borde derecho',
              body: { ru: 'Заранее прижмитесь как можно ближе к правому краю проезжей части.', en: 'In good time, keep as close as possible to the right edge of the road.' } },
            { color: 'purple', title: { ru: 'Налево, дорога с двусторонним движением', en: 'Left turn, two-way road' }, es: 'junto a la línea central',
              body: { ru: 'Вдоль осевой линии (или середины дороги), не заезжая на встречную. Три полосы с прерывистой разметкой — в среднюю.', en: 'Along the centre line (or the middle of the road), without entering the opposite side. Three lanes with broken lines: use the middle one.' } },
            { color: 'purple', title: { ru: 'Налево, одностороннее движение', en: 'Left turn, one-way road' }, es: 'borde izquierdo',
              body: { ru: 'Как можно ближе к левому краю проезжей части.', en: 'As close as possible to the left edge of the road.' } },
            { color: 'purple', title: { ru: 'Центр перекрёстка', en: 'Centre of the junction' }, es: 'centro a la izquierda',
              body: { ru: 'Поворачивая налево, оставьте центр перекрёстка <b>слева</b> от себя — не срезайте по диагонали, если разметка не указывает иначе.', en: 'When turning left, keep the centre of the junction on your <b>left</b> — do not cut across diagonally unless markings say otherwise.' } }
          ] },
          { type: 'figure', src: 'img/dgt/maniobras-giro-izquierda.svg',
            alt: { ru: 'Перекрёсток. Машина для поворота налево стоит у осевой линии; правильная траектория проходит так, что центр перекрёстка остаётся слева; неправильная срезает угол по диагонали.',
                   en: 'A junction. The car turning left waits next to the centre line; the correct path keeps the centre of the junction on its left; the wrong one cuts the corner diagonally.' } },
          { type: 'text', color: 'teal', body: {
            ru: ['Нельзя поворачивать, если встречные слишком близко или быстро, и <b>налево — при недостаточной видимости</b>. Если есть «ракетка» (<i>raqueta</i> — карман-петля справа) или специальная полоса, поворот выполняют через неё. Чтобы съехать с дороги, заранее займите крайнюю полосу и как можно раньше уйдите в <b>полосу торможения</b>. Велосипеды и мопеды вне города без специальной полосы ждут поворота налево <b>справа</b>, по возможности вне проезжей части (RGC, ст. 74–77).'],
            en: ['Do not turn if oncoming traffic is too close or too fast, nor <b>left without enough visibility</b>. If there is a <i>raqueta</i> (a loop on the right) or a special lane, use it. To leave a road, move to the nearest lane in good time and enter the <b>deceleration lane</b> as early as possible. Outside built-up areas, bicycles and mopeds with no special lane wait to turn left <b>on the right</b>, off the carriageway if possible (RGC arts. 74–77).'] } },
          { type: 'text', color: 'amber', body: {
            ru: ['<b>Разворот</b> (<i>cambio de sentido</i>): выберите место, где перекроете дорогу на минимальное время, предупредите и убедитесь, что никому не мешаете. Если, ожидая, вы задерживаете едущих сзади, — съедьте вправо и подождите там. <b>Запрещён:</b> где не видно обстановки, на железнодорожных переездах, в туннелях и подземных проездах, на autopista и autovía (кроме специальных мест) и везде, где запрещён обгон, если разворот не разрешён знаком (RGC, ст. 78–79).',
                 '<b>Задний ход</b> (<i>marcha atrás</i>): только когда ехать вперёд или развернуться нельзя, или как часть другого манёвра (парковка, выезд) — медленно, не больше <b>15 м</b> и не заезжая на перекрёсток. На autopista и autovía — <b>запрещён всегда</b>. Услышали сигнал или кто-то приближается — сразу остановитесь (RGC, ст. 80–81).'],
            en: ['<b>U-turn</b> (<i>cambio de sentido</i>): choose a spot where you block the road for the shortest time, signal and make sure you endanger nobody. If waiting holds up traffic behind you, pull off to the right and wait there. <b>Forbidden:</b> where you cannot see the traffic, on level crossings, in tunnels and underpasses, on autopistas and autovías (except at places provided) and wherever overtaking is forbidden, unless a sign allows it (RGC arts. 78–79).',
                 '<b>Reversing</b> (<i>marcha atrás</i>): only when you cannot go forward or turn round, or as part of another manoeuvre (parking, pulling out) — slowly, no more than <b>15 m</b> and never into a junction. On autopistas and autovías it is <b>always forbidden</b>. If you hear a warning or someone approaches, stop at once (RGC arts. 80–81).'] } },
          { type: 'signs', heading: { ru: 'Знаки', en: 'Signs' }, items: [
            { code: 'R-302', note: { ru: 'поворот направо запрещён', en: 'no right turn' } },
            { code: 'R-303', note: { ru: 'поворот налево запрещён — и разворот тоже', en: 'no left turn — and no U-turn either' } },
            { code: 'R-304', note: { ru: 'разворот запрещён', en: 'no U-turn' } },
            { code: 'S-22', note: { ru: 'место для разворота на одном уровне', en: 'U-turn point at the same level' } },
            { code: 'S-25', note: { ru: 'разворот через развязку', en: 'U-turn via a grade-separated junction' } }
          ] }
        ]
      },
      {
        id: 'parking', label: { ru: 'Стоянка', en: 'Parking' },
        blocks: [
          { type: 'rules', heading: { ru: 'Три понятия', en: 'Three concepts' }, items: [
            { color: 'blue', title: { ru: 'Вынужденная остановка', en: 'Halt' }, es: 'detención',
              body: { ru: 'Не по вашей воле: пробка, светофор, знак, агент, авария. Это не манёвр, время не ограничено.', en: 'Not by choice: a queue, a traffic light, a sign, an officer, an emergency. It is not a manoeuvre and has no time limit.' } },
            { color: 'amber', title: { ru: 'Остановка', en: 'Stopping' }, es: 'parada',
              body: { ru: 'По своей воле, <b>меньше 2 минут</b>, водитель не уходит от машины.', en: 'By choice, <b>under 2 minutes</b>, and the driver does not leave the vehicle.' } },
            { color: 'coral', title: { ru: 'Стоянка', en: 'Parking' }, es: 'estacionamiento',
              body: { ru: 'Любая добровольная остановка <b>от 2 минут</b> или когда водитель уходит.', en: 'Any voluntary stop of <b>2 minutes or more</b>, or when the driver leaves.' } }
          ] },
          { type: 'text', body: {
            ru: ['<b>Где и как.</b> Вне города — вне проезжей части, справа, оставив свободной проезжую часть обочины. В городе — у правого края; на улице с односторонним движением — можно и у левого. Ставить параллельно краю (если разметка не задаёт иначе) так, чтобы оставить место другим. Уходя: заглушить двигатель, ручной тормоз, на подъёме — <b>первая передача</b>, на спуске — <b>задняя</b> (автомат — P). Грузовики > 3,5 т, автобусы и составы на заметном уклоне ещё и подкладывают противооткатные упоры (не камни!) или упирают колесо в бордюр (RGC, ст. 90–92).'],
            en: ['<b>Where and how.</b> Out of town: off the carriageway, on the right, leaving the usable part of the hard shoulder free. In town: at the right edge; in a one-way street, also at the left. Park parallel to the edge (unless markings say otherwise), leaving room for others. Before leaving: engine off, handbrake on, uphill <b>first gear</b>, downhill <b>reverse</b> (automatic — P). Lorries over 3.5 t, buses and combinations on a noticeable slope also use wheel chocks (not stones!) or turn a wheel against the kerb (RGC arts. 90–92).'] } },
          { type: 'figure', src: 'img/dgt/maniobras-estacionar.svg',
            alt: { ru: 'Улица со сплошной осевой: машина стоит параллельно у правого бордюра, до сплошной не меньше 3 м; у пешеходного перехода и перекрёстка зона запрета остановки.',
                   en: 'A street with a solid centre line: a car is parked parallel to the right kerb with at least 3 m to the solid line; the zone at the crossing and the junction is no stopping.' },
            caption: { ru: 'Меньше 3 м до противоположного края или до сплошной — опасная стоянка. Конкретные метры от перекрёстка задают местные правила (ordenanzas).',
                       en: 'Less than 3 m to the opposite edge or to a solid line is dangerous parking. Exact distances from junctions are set by local by-laws (ordenanzas).' } },
          { type: 'table', heading: { ru: 'Остановиться или поставить?', en: 'Stop or park?' },
            head: [{ ru: 'Место', en: 'Place' }, { ru: 'Остановка', en: 'Stop' }, { ru: 'Стоянка', en: 'Park' }],
            rows: [
              [{ ru: 'Пешеходный переход', en: 'Pedestrian crossing' }, { ru: 'нельзя', en: 'no' }, { ru: 'нельзя', en: 'no' }],
              [{ ru: 'Кривая, вершина подъёма', en: 'Blind bend, hill crest' }, { ru: 'нельзя', en: 'no' }, { ru: 'нельзя', en: 'no' }],
              [{ ru: 'Туннель, ж/д переезд', en: 'Tunnel, level crossing' }, { ru: 'нельзя', en: 'no' }, { ru: 'нельзя', en: 'no' }],
              [{ ru: 'Полоса автобуса, вело', en: 'Bus or bike lane' }, { ru: 'нельзя', en: 'no' }, { ru: 'нельзя', en: 'no' }],
              [{ ru: 'Autopista, autovía', en: 'Autopista, autovía' }, { ru: 'только в зонах отдыха', en: 'only in rest areas' }, { ru: 'только в зонах отдыха', en: 'only in rest areas' }],
              [{ ru: 'Место для инвалидов', en: 'Disabled space' }, { ru: 'нельзя', en: 'no' }, { ru: 'нельзя', en: 'no' }],
              [{ ru: 'Погрузка-разгрузка', en: 'Loading zone' }, { ru: 'можно', en: 'yes' }, { ru: 'нельзя', en: 'no' }],
              [{ ru: 'Перед въездом (vado)', en: 'In front of a vado' }, { ru: 'можно', en: 'yes' }, { ru: 'нельзя', en: 'no' }],
              [{ ru: 'Второй ряд', en: 'Double parking' }, { ru: 'можно', en: 'yes' }, { ru: 'нельзя', en: 'no' }],
              [{ ru: 'Зона ORA без талона', en: 'ORA zone, no ticket' }, { ru: 'можно', en: 'yes' }, { ru: 'нельзя', en: 'no' }]
            ] },
          { type: 'text', color: 'coral', body: {
            ru: ['<b>Опасные остановки и стоянки</b> (серьёзное нарушение): меньше 3 м до противоположного края или сплошной; мешает другой машине выехать, людям — выйти из дома, машинам — из размеченного въезда, инвалидам — пройти по пониженному бордюру; на разделителях и островках; мешает разрешённому повороту; в зоне погрузки в её часы; во втором ряду без водителя; на остановке общественного транспорта; посреди проезжей части. Перекрёсток: нельзя, если мешаете повороту, а за городом — если ухудшаете видимость (RGC, ст. 91 и 94).'],
            en: ['<b>Dangerous stopping and parking</b> (a serious offence): less than 3 m to the opposite edge or a solid line; blocking another vehicle from pulling out, people from leaving a building, vehicles from a marked entrance, or disabled people from a dropped kerb; on medians and traffic islands; blocking a permitted turn; in a loading zone during its hours; double-parked with no driver; at a public-transport stop; in the middle of the road. At junctions: not if it hinders turning, and out of town not if it reduces visibility (RGC arts. 91 and 94).'] } },
          { type: 'signs', heading: { ru: 'Знаки', en: 'Signs' }, items: [
            { code: 'R-307', note: { ru: 'остановка и стоянка запрещены', en: 'no stopping or parking' } },
            { code: 'R-308', note: { ru: 'стоянка запрещена, остановка — можно', en: 'no parking; stopping is allowed' } },
            { code: 'R-308e', note: { ru: 'нельзя ставить перед въездом (vado)', en: 'no parking in front of a vado' } },
            { code: 'R-309', note: { ru: 'платная/ограниченная по времени зона (ORA, zona azul) — нужен талон', en: 'paid / time-limited zone (ORA, zona azul) — ticket required' } },
            { code: 'S-17', note: { ru: 'место для стоянки', en: 'parking place' } }
          ] }
        ]
      },
      {
        id: 'examples', label: { ru: 'Примеры', en: 'Examples' },
        blocks: [
          { type: 'examples', heading: { ru: 'Манёвры', en: 'Manoeuvres' }, items: [
            { color: 'blue', es: 'Antes de cambiar de carril, mira por el <b>retrovisor</b>.', ru: 'Перед сменой полосы посмотрите в зеркало.', en: 'Before changing lanes, check your mirror.' },
            { color: 'blue', es: 'Pon el <b>intermitente</b> con suficiente antelación.', ru: 'Включите поворотник заранее.', en: 'Put your indicator on in good time.' },
            { color: 'teal', es: 'En el <b>carril de aceleración</b> hay que adaptar la velocidad.', ru: 'На полосе разгона нужно подстроиться под скорость потока.', en: 'In the acceleration lane you must match the speed.' },
            { color: 'teal', es: 'Para salir de la autovía, entra pronto en el <b>carril de deceleración</b>.', ru: 'Чтобы съехать с autovía, пораньше займите полосу торможения.', en: 'To leave the autovía, move into the deceleration lane early.' },
            { color: 'purple', es: 'Para girar a la izquierda, <b>deja el centro</b> de la intersección a tu izquierda.', ru: 'Поворачивая налево, оставьте центр перекрёстка слева.', en: 'When turning left, keep the centre of the junction on your left.' },
            { color: 'amber', es: 'Está prohibido <b>cambiar de sentido</b> en un túnel.', ru: 'Разворачиваться в туннеле запрещено.', en: 'U-turns are forbidden in a tunnel.' },
            { color: 'amber', es: 'No se puede circular <b>marcha atrás</b> más de 15 metros.', ru: 'Задним ходом нельзя проезжать больше 15 метров.', en: 'You may not reverse for more than 15 metres.' }
          ] },
          { type: 'examples', heading: { ru: 'Обгон', en: 'Overtaking' }, items: [
            { color: 'blue', es: 'Como norma general, se <b>adelanta</b> por la izquierda.', ru: 'Как правило, обгоняют слева.', en: 'As a general rule, you overtake on the left.' },
            { color: 'teal', es: 'Al adelantar a un ciclista, deja al menos <b>1,5 metros</b>.', ru: 'Обгоняя велосипедиста, оставьте не меньше 1,5 метра.', en: 'When overtaking a cyclist, leave at least 1.5 metres.' },
            { color: 'teal', es: 'Fuera de poblado, reduce la velocidad en <b>20 km/h</b> para adelantar a una bici.', ru: 'Вне города, обгоняя велосипед, снизьте скорость на 20 км/ч.', en: 'Out of town, slow down by 20 km/h to overtake a bike.' },
            { color: 'coral', es: 'Está prohibido adelantar en un <b>cambio de rasante</b> sin visibilidad.', ru: 'Обгонять на вершине подъёма без видимости запрещено.', en: 'Overtaking on a blind hill crest is forbidden.' },
            { color: 'amber', es: 'El conductor adelantado no debe <b>aumentar la velocidad</b>.', ru: 'Обгоняемый водитель не должен ускоряться.', en: 'The driver being overtaken must not speed up.' }
          ] },
          { type: 'examples', heading: { ru: 'Остановка и стоянка', en: 'Stopping and parking' }, items: [
            { color: 'amber', es: 'Una <b>parada</b> dura menos de dos minutos.', ru: 'Остановка длится меньше двух минут.', en: 'A stop lasts less than two minutes.' },
            { color: 'coral', es: 'Está prohibido <b>estacionar</b> en doble fila.', ru: 'Ставить машину во втором ряду запрещено.', en: 'Double parking is forbidden.' },
            { color: 'coral', es: 'En una cuesta abajo, deja puesta la <b>marcha atrás</b>.', ru: 'На спуске оставьте включённой заднюю передачу.', en: 'Facing downhill, leave the car in reverse.' },
            { color: 'coral', es: 'En la zona azul hay que sacar el <b>tique</b> en el parquímetro.', ru: 'В синей зоне нужно взять талон в паркомате.', en: 'In the blue zone you must get a ticket from the meter.' },
            { color: 'coral', es: 'No aparques delante de un <b>vado</b>.', ru: 'Не ставьте машину перед въездом (vado).', en: 'Do not park in front of a vado (driveway).' }
          ] },
          { type: 'markers', groups: [
            { color: 'blue', title: { ru: 'Манёвры', en: 'Manoeuvres' }, tags: ['incorporarse', 'cambiar de carril', 'girar', 'cambio de dirección', 'cambio de sentido', 'marcha atrás', 'raqueta'] },
            { color: 'teal', title: { ru: 'Обгон', en: 'Overtaking' }, tags: ['adelantar', 'ser adelantado', 'rebasar', 'ceñirse a la derecha', 'separación lateral', 'reintegrarse'] },
            { color: 'coral', title: { ru: 'Стоянка', en: 'Parking' }, tags: ['parar', 'estacionar', 'aparcar', 'doble fila', 'vado', 'zona azul', 'ORA', 'carga y descarga', 'calzos'] }
          ] }
        ]
      }
    ],
    quizCount: 20,
    quiz: [
      { es: '¿Cuál es el orden correcto de la regla de seguridad para realizar una maniobra?',
        prompt: { ru: 'Какой правильный порядок действий при манёвре?', en: 'What is the correct order of the safety rule for a manoeuvre?' },
        options: [
          { es: 'Señal, retrovisor y maniobra.', ru: 'Сигнал, зеркало, манёвр.', en: 'Signal, mirror, manoeuvre.' },
          { es: 'Retrovisor, señal y maniobra.', ru: 'Зеркало, сигнал, манёвр.', en: 'Mirror, signal, manoeuvre.' },
          { es: 'Maniobra, señal y retrovisor.', ru: 'Манёвр, сигнал, зеркало.', en: 'Manoeuvre, signal, mirror.' }
        ],
        answer: 1,
        explain: { ru: 'Сначала наблюдение (зеркала), потом предупреждение (сигнал), потом выполнение — правило R.S.M. Учебник DGT, тема 11.', en: 'First observe (mirrors), then warn (signal), then act — the R.S.M. rule. DGT manual, topic 11.' } },
      { es: 'Un conductor saca el brazo en posición horizontal con la palma de la mano extendida hacia abajo. ¿Qué indica?',
        prompt: { ru: 'Водитель вытянул руку горизонтально, ладонью вниз. Что он показывает?', en: 'A driver holds the arm out horizontally with the palm facing down. What does it mean?' },
        options: [
          { es: 'Que va a desplazarse hacia el lado de la mano, normalmente a la izquierda.', ru: 'Что сместится в сторону руки — обычно налево.', en: 'That they will move towards the side of the hand, normally left.' },
          { es: 'Que va a frenar.', ru: 'Что будет тормозить.', en: 'That they are going to brake.' },
          { es: 'Que va a dar marcha atrás.', ru: 'Что поедет задним ходом.', en: 'That they are going to reverse.' }
        ],
        answer: 0,
        explain: { ru: 'Рука вбок ладонью вниз — смещение в сторону руки; согнутая вверх — в противоположную; ладонью назад — задний ход. RGC, ст. 109.2.', en: 'Arm out, palm down: moving towards that side; bent upwards: the other side; palm backwards: reversing. RGC art. 109.2.' } },
      { es: 'Al cambiar de carril, ¿cuándo debe apagar el intermitente?',
        prompt: { ru: 'Когда выключить поворотник при смене полосы?', en: 'When changing lanes, when should you switch off the indicator?' },
        options: [
          { es: 'En cuanto el vehículo ha adoptado su nueva trayectoria.', ru: 'Как только машина заняла новую траекторию.', en: 'As soon as the vehicle has taken its new path.' },
          { es: 'Antes de empezar a moverse lateralmente.', ru: 'Ещё до начала бокового смещения.', en: 'Before starting to move sideways.' },
          { es: 'Al cabo de un kilómetro.', ru: 'Через километр.', en: 'After one kilometre.' }
        ],
        answer: 0,
        explain: { ru: 'Сигнализируют только само смещение: поворотник горит весь манёвр и выключается, как только вы в новой полосе. RGC, ст. 109.2.a.', en: 'Only the sideways move is signalled: the indicator stays on for the whole manoeuvre and goes off once you are in the new lane. RGC art. 109.2.a.' } },
      { es: 'Va a entrar en una autovía por el carril de aceleración y por el carril derecho se acercan vehículos. ¿Qué debe hacer?',
        prompt: { ru: 'Вы въезжаете на autovía по полосе разгона, а по правой полосе приближаются машины. Что делать?', en: 'You are joining an autovía from the acceleration lane and vehicles are approaching in the right-hand lane. What should you do?' },
        options: [
          { es: 'Entrar sin mirar: ellos deben dejarle pasar.', ru: 'Въезжать, не глядя: они обязаны пропустить.', en: 'Go in without looking: they must let you in.' },
          { es: 'Comprobar al principio del carril si puede entrar, detenerse si es necesario y acelerar después.', ru: 'Оценить обстановку в начале полосы, при необходимости остановиться, затем разогнаться.', en: 'Check at the start of the lane, stop there if necessary, then accelerate.' },
          { es: 'Detenerse al final del carril de aceleración.', ru: 'Остановиться в конце полосы разгона.', en: 'Stop at the end of the acceleration lane.' }
        ],
        answer: 1,
        explain: { ru: 'Проверяют поток в начале полосы разгона (там же при необходимости останавливаются), а к её концу набирают скорость потока. Остановка в конце полосы опасна. RGC, ст. 72.4.', en: 'Check the traffic at the start of the acceleration lane (stop there if needed) and reach the traffic speed by its end. Stopping at the end is dangerous. RGC art. 72.4.' } },
      { es: 'Sale a una carretera desde un camino privado. ¿A quién debe ceder el paso?',
        prompt: { ru: 'Вы выезжаете на дорогу с частной территории. Кому уступать?', en: 'You are joining a road from a private track. Whom must you give way to?' },
        options: [
          { es: 'Solo a los vehículos que vienen por la izquierda.', ru: 'Только машинам слева.', en: 'Only to vehicles coming from the left.' },
          { es: 'Solo a los vehículos que vienen por la derecha.', ru: 'Только машинам справа.', en: 'Only to vehicles coming from the right.' },
          { es: 'A todos los vehículos que circulen por la vía, en cualquier sentido.', ru: 'Всем, кто едет по дороге, в любом направлении.', en: 'To all vehicles on the road, in either direction.' }
        ],
        answer: 2,
        explain: { ru: 'С частной дороги выезжают со скоростью, позволяющей остановиться сразу, и уступают всем, откуда бы они ни ехали. RGC, ст. 72.2.', en: 'From a private road you pull out at a speed that lets you stop at once, giving way to everyone from either direction. RGC art. 72.2.' } },
      { es: 'En poblado, un autobús quiere salir de su parada señalizada. ¿Qué deben hacer los demás conductores?',
        prompt: { ru: 'В городе автобус хочет отъехать от обозначенной остановки. Что должны сделать остальные водители?', en: 'In town, a bus wants to pull out from its marked stop. What must other drivers do?' },
        options: [
          { es: 'Desplazarse o reducir la velocidad, incluso detenerse, para facilitarle la salida.', ru: 'Сместиться или снизить скорость, даже остановиться, чтобы его выпустить.', en: 'Move over or slow down, even stop, to let it out.' },
          { es: 'Nada: el autobús debe esperar a que no venga nadie.', ru: 'Ничего: автобус должен ждать, пока никого не будет.', en: 'Nothing: the bus must wait until nobody is coming.' },
          { es: 'Tocar el claxon para avisarle.', ru: 'Посигналить ему.', en: 'Sound the horn to warn it.' }
        ],
        answer: 0,
        explain: { ru: 'В населённых пунктах водители облегчают выезд общественному транспорту с обозначенной остановки; водитель автобуса всё равно должен соблюдать осторожность. RGC, ст. 73.', en: 'In built-up areas drivers must help public transport pull out of a marked stop; the bus driver must still take care. RGC art. 73.' } },
      { es: 'Al cambiar de carril, ¿quién tiene prioridad?',
        prompt: { ru: 'Кто имеет приоритет при смене полосы?', en: 'Who has priority when changing lanes?' },
        options: [
          { es: 'El que cambia de carril, si ha señalizado.', ru: 'Перестраивающийся, если включил поворотник.', en: 'The one changing lanes, if they have signalled.' },
          { es: 'El vehículo que ya circula por el carril que se quiere ocupar.', ru: 'Тот, кто уже едет по полосе, на которую перестраиваются.', en: 'The vehicle already in the lane you want to enter.' },
          { es: 'El vehículo más grande.', ru: 'Более крупная машина.', en: 'The larger vehicle.' }
        ],
        answer: 1,
        explain: { ru: 'Поворотник не даёт права: перестраиваясь, уступите тому, кто уже едет по этой полосе. RGC, ст. 74.2.', en: 'Signalling gives no right of way: when changing lanes, yield to whoever is already in that lane. RGC art. 74.2.' } },
      { es: 'Para girar a la izquierda en una calzada de doble sentido sin carril especial, ¿dónde debe situarse?',
        prompt: { ru: 'Где встать для поворота налево на дороге с двусторонним движением без специальной полосы?', en: 'Where should you position yourself to turn left on a two-way road with no special lane?' },
        options: [
          { es: 'Junto a la marca longitudinal que separa los sentidos, sin invadir el contrario.', ru: 'У осевой линии, не заезжая на встречную.', en: 'Next to the centre line, without entering the opposite side.' },
          { es: 'Pegado al borde derecho.', ru: 'У правого края.', en: 'Close to the right edge.' },
          { es: 'En el carril contrario, para girar antes.', ru: 'На встречной полосе, чтобы повернуть быстрее.', en: 'In the opposite lane, to turn sooner.' }
        ],
        answer: 0,
        explain: { ru: 'На дороге с двусторонним движением прижимаются к осевой (или к середине, если линии нет), не выезжая на встречную. RGC, ст. 75.1.b.', en: 'On a two-way road keep next to the centre line (or the middle if there is no line) without crossing into the opposite side. RGC art. 75.1.b.' } },
      { es: 'Circula por una calzada de sentido único y quiere girar a la izquierda. ¿Cómo debe colocarse?',
        prompt: { ru: 'Вы едете по дороге с односторонним движением и хотите повернуть налево. Как встать?', en: 'You are on a one-way road and want to turn left. How should you position yourself?' },
        options: [
          { es: 'En el centro de la calzada.', ru: 'Посередине проезжей части.', en: 'In the middle of the road.' },
          { es: 'Lo más cerca posible del borde derecho.', ru: 'Как можно ближе к правому краю.', en: 'As close as possible to the right edge.' },
          { es: 'Lo más cerca posible del borde izquierdo.', ru: 'Как можно ближе к левому краю.', en: 'As close as possible to the left edge.' }
        ],
        answer: 2,
        explain: { ru: 'На односторонней дороге для поворота налево прижимаются к левому краю. RGC, ст. 75.1.b.', en: 'On a one-way road you keep to the left edge to turn left. RGC art. 75.1.b.' } },
      { es: 'Al girar a la izquierda en una intersección, ¿cómo debe dejar el centro de la misma?',
        prompt: { ru: 'Как при повороте налево на перекрёстке должен располагаться его центр?', en: 'When turning left at a junction, where should its centre be?' },
        img: 'img/dgt/maniobras-giro-izquierda.svg',
        options: [
          { es: 'A su derecha.', ru: 'Справа от вас.', en: 'On your right.' },
          { es: 'A su izquierda, salvo que esté señalizado de otra forma.', ru: 'Слева от вас, если разметка не указывает иначе.', en: 'On your left, unless markings say otherwise.' },
          { es: 'Da igual, se puede cruzar en diagonal.', ru: 'Неважно, можно срезать по диагонали.', en: 'It does not matter; you may cut across diagonally.' }
        ],
        answer: 1,
        explain: { ru: 'Центр перекрёстка оставляют слева — так вы не срезаете угол и не выезжаете навстречу. RGC, ст. 75.1.c.', en: 'Keep the centre of the junction on your left so you do not cut the corner into oncoming traffic. RGC art. 75.1.c.' } },
      { es: 'En una vía interurbana sin carril especial para girar, ¿cómo debe un ciclista girar a la izquierda?',
        prompt: { ru: 'Как велосипедист должен повернуть налево на загородной дороге без специальной полосы?', en: 'On an interurban road with no special turning lane, how must a cyclist turn left?' },
        options: [
          { es: 'Situarse en el centro de la calzada.', ru: 'Встать посередине дороги.', en: 'Move to the middle of the road.' },
          { es: 'Girar directamente desde el borde derecho, sin detenerse.', ru: 'Повернуть сразу от правого края, не останавливаясь.', en: 'Turn straight from the right edge without stopping.' },
          { es: 'Situarse a la derecha, fuera de la calzada si es posible, e iniciar el giro desde allí.', ru: 'Встать справа, по возможности вне проезжей части, и начать поворот оттуда.', en: 'Wait on the right, off the carriageway if possible, and start the turn from there.' }
        ],
        answer: 2,
        explain: { ru: 'Велосипеды и двухколёсные мопеды вне города ждут поворота налево справа, по возможности вне проезжей части. RGC, ст. 76.2.', en: 'Outside built-up areas, bicycles and two-wheeled mopeds wait to turn left on the right, off the carriageway if possible. RGC art. 76.2.' } },
      { es: 'Para abandonar una autovía, ¿qué debe hacer?',
        prompt: { ru: 'Что нужно сделать, чтобы съехать с autovía?', en: 'What should you do to leave an autovía?' },
        options: [
          { es: 'Frenar en el carril izquierdo y cruzar a la salida.', ru: 'Тормозить в левой полосе и пересечь все полосы к съезду.', en: 'Brake in the left lane and cut across to the exit.' },
          { es: 'Circular con antelación por el carril más próximo a la salida y entrar cuanto antes en el carril de deceleración.', ru: 'Заранее перестроиться в ближнюю к съезду полосу и как можно раньше уйти в полосу торможения.', en: 'Move early to the lane nearest the exit and enter the deceleration lane as soon as possible.' },
          { es: 'Reducir la velocidad en el carril derecho antes de la salida.', ru: 'Сбросить скорость на правой полосе перед съездом.', en: 'Slow down in the right lane before the exit.' }
        ],
        answer: 1,
        explain: { ru: 'Тормозят уже в полосе торможения, а не на основной дороге, куда перестраиваются заранее. RGC, ст. 77.', en: 'You slow down in the deceleration lane, not on the main road, and move over to it in good time. RGC art. 77.' } },
      { es: '¿En cuál de estos lugares está prohibido cambiar de sentido?',
        prompt: { ru: 'Где из перечисленного разворот запрещён?', en: 'In which of these places is a U-turn forbidden?' },
        options: [
          { es: 'En un túnel.', ru: 'В туннеле.', en: 'In a tunnel.' },
          { es: 'En una glorieta.', ru: 'На кольце.', en: 'At a roundabout.' },
          { es: 'En una vía urbana de doble sentido con buena visibilidad.', ru: 'На городской улице с двусторонним движением и хорошей видимостью.', en: 'On a two-way urban street with good visibility.' }
        ],
        answer: 0,
        explain: { ru: 'Разворот запрещён в туннелях и подземных проездах, на ж/д переездах, на autopista/autovía (кроме мест для этого), при плохой видимости и там, где запрещён обгон. RGC, ст. 79.', en: 'U-turns are forbidden in tunnels and underpasses, on level crossings, on autopistas/autovías (except where provided), with poor visibility and where overtaking is forbidden. RGC art. 79.' } },
      { es: '¿Cuántos metros como máximo se pueden recorrer marcha atrás como maniobra complementaria del estacionamiento?',
        prompt: { ru: 'Сколько метров максимум можно проехать задним ходом при парковке?', en: 'What is the maximum distance you may reverse as part of parking?' },
        options: [
          { es: '15 metros, sin invadir un cruce.', ru: '15 метров, не заезжая на перекрёсток.', en: '15 metres, without entering a junction.' },
          { es: '50 metros.', ru: '50 метров.', en: '50 metres.' },
          { es: 'No hay límite si se va despacio.', ru: 'Без ограничения, если медленно.', en: 'There is no limit if you go slowly.' }
        ],
        answer: 0,
        explain: { ru: 'Задним ходом как частью остановки, стоянки или выезда — не больше 15 м и не заезжая на перекрёсток. RGC, ст. 80.2.', en: 'Reversing as part of stopping, parking or pulling out: no more than 15 m and never into a junction. RGC art. 80.2.' } },
      { es: 'Se ha pasado la salida en una autopista. ¿Puede volver marcha atrás por el arcén?',
        prompt: { ru: 'Вы проехали съезд на автомагистрали. Можно ли сдать назад по обочине?', en: 'You have missed your exit on an autopista. May you reverse back along the hard shoulder?' },
        options: [
          { es: 'Sí, si son menos de 15 metros.', ru: 'Да, если меньше 15 метров.', en: 'Yes, if it is less than 15 metres.' },
          { es: 'Sí, con las luces de emergencia.', ru: 'Да, с аварийной сигнализацией.', en: 'Yes, with the hazard lights on.' },
          { es: 'No, la marcha atrás está prohibida en autopistas y autovías.', ru: 'Нет, задний ход на autopista и autovía запрещён.', en: 'No, reversing is forbidden on autopistas and autovías.' }
        ],
        answer: 2,
        explain: { ru: 'На autopista и autovía задний ход запрещён полностью; если он превращается в движение навстречу — это очень серьёзное нарушение. Езжайте до следующего съезда. RGC, ст. 80.3–4.', en: 'Reversing is completely forbidden on autopistas and autovías; if it amounts to driving against the traffic it is a very serious offence. Go on to the next exit. RGC art. 80.3–4.' } },
      { es: 'El vehículo de delante indica claramente que va a girar a la izquierda. ¿Por dónde puede adelantarlo?',
        prompt: { ru: 'Машина впереди ясно показывает поворот налево. С какой стороны её можно обогнать?', en: 'The vehicle ahead is clearly signalling a left turn. On which side may you overtake it?' },
        options: [
          { es: 'Por la derecha, si hay espacio suficiente.', ru: 'Справа, если хватает места.', en: 'On the right, if there is enough room.' },
          { es: 'Por la izquierda, como siempre.', ru: 'Слева, как обычно.', en: 'On the left, as always.' },
          { es: 'Por el arcén izquierdo.', ru: 'По левой обочине.', en: 'Along the left-hand shoulder.' }
        ],
        answer: 0,
        explain: { ru: 'Это одно из исключений: если впереди идущий показал поворот налево или остановку слева, обгоняют справа, с максимальной осторожностью. RGC, ст. 82.2.', en: 'This is one of the exceptions: if the driver ahead signals a left turn or a stop on the left, you overtake on the right with maximum care. RGC art. 82.2.' } },
      { es: 'En poblado, en una calzada con dos carriles en el mismo sentido delimitados por marcas, ¿se puede adelantar por la derecha?',
        prompt: { ru: 'Можно ли в городе обгонять справа на дороге с двумя размеченными полосами в одну сторону?', en: 'In town, on a road with two marked lanes in the same direction, may you overtake on the right?' },
        options: [
          { es: 'No, nunca.', ru: 'Нет, никогда.', en: 'No, never.' },
          { es: 'Solo a vehículos de dos ruedas.', ru: 'Только двухколёсный транспорт.', en: 'Only two-wheelers.' },
          { es: 'Sí, si se comprueba que se puede hacer sin peligro.', ru: 'Да, если убедились, что это безопасно.', en: 'Yes, after making sure it is safe.' }
        ],
        answer: 2,
        explain: { ru: 'В населённом пункте при двух и более размеченных полосах в одном направлении обгон справа разрешён — с проверкой безопасности. RGC, ст. 82.3.', en: 'In built-up areas, with two or more marked lanes in one direction, overtaking on the right is allowed once you have checked it is safe. RGC art. 82.3.' } },
      { es: '¿Qué separación lateral mínima debe dejar al adelantar a un ciclista?',
        prompt: { ru: 'Какой минимальный боковой интервал нужно оставить при обгоне велосипедиста?', en: 'What minimum lateral gap must you leave when overtaking a cyclist?' },
        img: 'img/dgt/maniobras-ciclista.svg',
        options: [
          { es: '1 metro.', ru: '1 метр.', en: '1 metre.' },
          { es: '1,5 metros.', ru: '1,5 метра.', en: '1.5 metres.' },
          { es: '2,5 metros.', ru: '2,5 метра.', en: '2.5 metres.' }
        ],
        answer: 1,
        explain: { ru: 'При обгоне велосипедистов, мопедов, СИМ, пешеходов и животных — не меньше 1,5 м, заняв часть или всю соседнюю полосу. RGC, ст. 85.4.', en: 'When overtaking cyclists, mopeds, e-scooters, pedestrians and animals: at least 1.5 m, using part or all of the next lane. RGC art. 85.4.' } },
      { es: 'Va a adelantar a un ciclista en una autovía con dos carriles por sentido. ¿Cómo debe hacerlo?',
        prompt: { ru: 'Вы обгоняете велосипедиста на autovía с двумя полосами в каждую сторону. Как это сделать?', en: 'You are overtaking a cyclist on an autovía with two lanes in each direction. How must you do it?' },
        options: [
          { es: 'Dentro del mismo carril, dejando 1,5 m.', ru: 'Не покидая полосы, оставив 1,5 м.', en: 'Within the same lane, leaving 1.5 m.' },
          { es: 'Pisando la línea entre carriles.', ru: 'Наехав на линию между полосами.', en: 'Straddling the line between lanes.' },
          { es: 'Cambiando por completo al carril izquierdo.', ru: 'Полностью перестроившись в левую полосу.', en: 'Moving completely into the left-hand lane.' }
        ],
        answer: 2,
        explain: { ru: 'Если в вашу сторону больше одной полосы, при обгоне велосипедиста обязательна полная смена полосы. RGC, ст. 85.4.', en: 'With more than one lane in your direction, you must change lanes completely to overtake a cyclist. RGC art. 85.4.' } },
      { es: 'Fuera de poblado, en una carretera limitada a 90 km/h, va a adelantar a un ciclista. ¿A qué velocidad máxima puede hacerlo?',
        prompt: { ru: 'Вне города, на дороге с лимитом 90 км/ч, вы обгоняете велосипедиста. С какой максимальной скоростью?', en: 'Outside a built-up area, on a road limited to 90 km/h, you are about to overtake a cyclist. What is your maximum speed?' },
        options: [
          { es: '70 km/h.', ru: '70 км/ч.', en: '70 km/h.' },
          { es: '90 km/h.', ru: '90 км/ч.', en: '90 km/h.' },
          { es: '110 km/h.', ru: '110 км/ч.', en: '110 km/h.' }
        ],
        answer: 0,
        explain: { ru: 'Обгоняя велосипедистов и других уязвимых участников вне города, снижают скорость минимум на 20 км/ч от лимита: 90 − 20 = 70. RGC, ст. 85.4.', en: 'When overtaking cyclists and other vulnerable users out of town, go at least 20 km/h below the limit: 90 − 20 = 70. RGC art. 85.4.' } },
      { es: '¿Cuándo se pueden usar las señales acústicas para advertir que va a adelantar?',
        prompt: { ru: 'Когда можно сигналить, предупреждая об обгоне?', en: 'When may you use the horn to warn that you are going to overtake?' },
        options: [
          { es: 'Siempre, en cualquier vía.', ru: 'Всегда, на любой дороге.', en: 'Always, on any road.' },
          { es: 'Solo fuera de poblado.', ru: 'Только вне населённого пункта.', en: 'Only outside built-up areas.' },
          { es: 'Solo en poblado y de día.', ru: 'Только в городе и днём.', en: 'Only in town and by day.' }
        ],
        answer: 1,
        explain: { ru: 'Звуковой сигнал для предупреждения об обгоне — только вне населённого пункта; в городе вместо него можно мигнуть фарами. RGC, ст. 109.3 и 110.2.b.', en: 'The horn may warn of overtaking only outside built-up areas; in town you may flash your headlights instead. RGC arts. 109.3 and 110.2.b.' } },
      { es: 'Otro vehículo le está adelantando. ¿Qué debe hacer?',
        prompt: { ru: 'Вас обгоняет другая машина. Что вы должны делать?', en: 'Another vehicle is overtaking you. What must you do?' },
        options: [
          { es: 'Ceñirse al borde derecho y no aumentar la velocidad.', ru: 'Прижаться к правому краю и не ускоряться.', en: 'Keep to the right edge and not speed up.' },
          { es: 'Acelerar para que termine antes.', ru: 'Ускориться, чтобы он быстрее закончил.', en: 'Speed up so it finishes sooner.' },
          { es: 'Circular por el arcén.', ru: 'Уйти на обочину.', en: 'Drive on the hard shoulder.' }
        ],
        answer: 0,
        explain: { ru: 'Обгоняемый прижимается к правому краю проезжей части (не на обочину), не ускоряется и не мешает; при опасности снижает скорость. RGC, ст. 86.', en: 'The driver being overtaken keeps to the right edge of the road (not the hard shoulder), does not speed up or obstruct, and slows down if danger arises. RGC art. 86.' } },
      { es: '¿Cómo puede indicar el conductor de un camión al que le sigue que puede adelantarle?',
        prompt: { ru: 'Как водитель грузовика может показать едущему сзади, что его можно обогнать?', en: 'How can a lorry driver show the driver behind that it is safe to overtake?' },
        options: [
          { es: 'Con el intermitente izquierdo.', ru: 'Левым поворотником.', en: 'With the left indicator.' },
          { es: 'Con las luces de emergencia.', ru: 'Аварийной сигнализацией.', en: 'With the hazard lights.' },
          { es: 'Con el intermitente derecho o moviendo el brazo de atrás hacia adelante.', ru: 'Правым поворотником или махом руки назад-вперёд.', en: 'With the right indicator or by waving the arm back and forth.' }
        ],
        answer: 2,
        explain: { ru: 'Если прижаться вправо полностью нельзя, но обгон безопасен, водитель показывает это рукой (горизонтально, махом назад-вперёд) или правым поворотником. RGC, ст. 86.1.', en: 'If they cannot pull fully to the right but overtaking is safe, the driver shows it with the arm (horizontal, waving back and forth) or the right indicator. RGC art. 86.1.' } },
      { es: '¿Está permitido adelantar en una curva de visibilidad reducida?',
        prompt: { ru: 'Можно ли обгонять в повороте с ограниченной видимостью?', en: 'May you overtake on a bend with limited visibility?' },
        options: [
          { es: 'Sí, si se hace rápido.', ru: 'Да, если быстро.', en: 'Yes, if you do it quickly.' },
          { es: 'No, salvo que los sentidos estén delimitados y no haya que invadir el contrario.', ru: 'Нет, кроме случая, когда направления разделены и не нужно выезжать на встречную.', en: 'No, unless the directions are separated and you need not enter the opposite side.' },
          { es: 'Sí, si se avisa con el claxon.', ru: 'Да, если посигналить.', en: 'Yes, if you sound the horn.' }
        ],
        answer: 1,
        explain: { ru: 'В поворотах и на вершинах подъёмов с плохой видимостью обгон запрещён, если для него нужно выехать на встречную. RGC, ст. 87.1.a.', en: 'On bends and hill crests with poor visibility overtaking is forbidden if it means entering the opposite side. RGC art. 87.1.a.' } },
      { es: '¿En qué caso se puede adelantar en una intersección?',
        prompt: { ru: 'В каком случае можно обгонять на перекрёстке?', en: 'When may you overtake at a junction?' },
        options: [
          { es: 'Cuando se adelanta a un vehículo de dos ruedas.', ru: 'Когда обгоняете двухколёсный транспорт.', en: 'When overtaking a two-wheeled vehicle.' },
          { es: 'Cuando la intersección está regulada por semáforo en verde.', ru: 'Когда горит зелёный светофор.', en: 'When the junction has a green traffic light.' },
          { es: 'Nunca.', ru: 'Никогда.', en: 'Never.' }
        ],
        answer: 0,
        explain: { ru: 'На перекрёстке обгон разрешён на кольце, при обгоне справа по ст. 82.2, если ваша дорога главная и это показано знаком, и при обгоне двухколёсного. RGC, ст. 87.1.c.', en: 'At junctions overtaking is allowed in a roundabout, when overtaking on the right under art. 82.2, when your road has priority shown by a sign, and when overtaking a two-wheeler. RGC art. 87.1.c.' } },
      { es: 'En un túnel con un solo carril para su sentido, ¿puede adelantar?',
        prompt: { ru: 'Можно ли обгонять в туннеле, где в вашу сторону одна полоса?', en: 'May you overtake in a tunnel with only one lane in your direction?' },
        options: [
          { es: 'Sí, si no viene nadie de frente.', ru: 'Да, если никто не едет навстречу.', en: 'Yes, if nobody is coming the other way.' },
          { es: 'Sí, con las luces largas encendidas.', ru: 'Да, с включённым дальним светом.', en: 'Yes, with main beam on.' },
          { es: 'No, está prohibido.', ru: 'Нет, это запрещено.', en: 'No, it is forbidden.' }
        ],
        answer: 2,
        explain: { ru: 'В туннелях, подземных проездах и на участках со знаком S-5 обгон запрещён, если в вашу сторону лишь одна полоса. RGC, ст. 87.1.d.', en: 'In tunnels, underpasses and stretches with the S-5 sign, overtaking is forbidden when there is only one lane in your direction. RGC art. 87.1.d.' } },
      { es: 'El vehículo de delante está adelantando a otro. ¿Puede adelantarlos a los dos si tiene que invadir el sentido contrario?',
        prompt: { ru: 'Машина впереди обгоняет другую. Можно ли обогнать обеих, если нужно выехать на встречную?', en: 'The vehicle in front is overtaking another. May you overtake both if you must enter the opposite side?' },
        options: [
          { es: 'Sí, si la carretera es recta.', ru: 'Да, если дорога прямая.', en: 'Yes, if the road is straight.' },
          { es: 'No, está prohibido.', ru: 'Нет, это запрещено.', en: 'No, it is forbidden.' },
          { es: 'Sí, si avisa con las luces.', ru: 'Да, если предупредить фарами.', en: 'Yes, if you flash your lights.' }
        ],
        answer: 1,
        explain: { ru: 'Обгонять уже обгоняющего, выезжая для этого на встречную, запрещено в любом случае. RGC, ст. 84.2.', en: 'Overtaking a vehicle that is already overtaking, when you must enter the opposite side, is always forbidden. RGC art. 84.2.' } },
      { es: 'En una autovía con mucho tráfico, los vehículos de su carril avanzan más rápido que los del carril de al lado. ¿Es un adelantamiento?',
        prompt: { ru: 'На загруженной autovía ваша полоса движется быстрее соседней. Это обгон?', en: 'On a busy autovía your lane is moving faster than the next one. Is that overtaking?' },
        options: [
          { es: 'Sí, y está prohibido por la derecha.', ru: 'Да, и справа он запрещён.', en: 'Yes, and it is forbidden on the right.' },
          { es: 'Sí, y hay que señalizarlo.', ru: 'Да, и его нужно показывать поворотником.', en: 'Yes, and it must be signalled.' },
          { es: 'No, no se considera adelantamiento.', ru: 'Нет, это не считается обгоном.', en: 'No, it is not considered overtaking.' }
        ],
        answer: 2,
        explain: { ru: 'В плотном потоке, когда скорость каждой полосы зависит от впереди идущих, разница в скорости полос — не обгон. Но перестраиваться ради обгона нельзя. RGC, ст. 83.2.', en: 'In dense traffic where each lane’s speed depends on the vehicles ahead, lanes moving at different speeds is not overtaking. But do not change lanes to get ahead. RGC art. 83.2.' } },
      { es: 'Un vehículo averiado ocupa su carril en un tramo con línea continua. ¿Puede rebasarlo?',
        prompt: { ru: 'Сломанная машина стоит на вашей полосе на участке со сплошной. Можно ли её объехать?', en: 'A broken-down vehicle is blocking your lane on a stretch with a solid line. May you pass it?' },
        options: [
          { es: 'Sí, ocupando el carril contrario tras comprobar que no hay peligro.', ru: 'Да, через встречную полосу, убедившись в безопасности.', en: 'Yes, using the opposite lane after checking it is safe.' },
          { es: 'No, debe esperar a que la retiren.', ru: 'Нет, надо ждать, пока её уберут.', en: 'No, you must wait until it is removed.' },
          { es: 'Solo si un agente lo autoriza.', ru: 'Только с разрешения агента.', en: 'Only if an officer allows it.' }
        ],
        answer: 0,
        explain: { ru: 'Стоящую машину (кроме остановленной из-за движения) можно объехать даже там, где обгон запрещён, если это безопасно; интервал ≥ 1,5 м и скорость на 20 км/ч ниже лимита. RGC, ст. 88.', en: 'A stationary vehicle (unless stopped by traffic) may be passed even where overtaking is forbidden, if it is safe; leave ≥ 1.5 m and go 20 km/h below the limit. RGC art. 88.' } },
      { es: '¿Qué prohíbe esta señal?',
        prompt: { ru: 'Что запрещает этот знак?', en: 'What does this sign prohibit?' },
        sign: 'R-305',
        options: [
          { es: 'Adelantar a vehículos a motor si hay que invadir el sentido contrario.', ru: 'Обгонять механический транспорт с выездом на встречную.', en: 'Overtaking motor vehicles if you must enter the opposite side.' },
          { es: 'Adelantar a cualquier usuario, incluidas las bicicletas.', ru: 'Обгонять кого угодно, включая велосипеды.', en: 'Overtaking anyone, including bicycles.' },
          { es: 'Cambiar de carril.', ru: 'Менять полосу.', en: 'Changing lanes.' }
        ],
        answer: 0,
        explain: { ru: 'R-305 запрещает обгонять механический транспорт, если для этого нужно выехать на встречную. Велосипедистов можно обогнать безопасно. Действует до R-502 или R-500.', en: 'R-305 forbids overtaking motor vehicles when that means entering the opposite side. Cyclists may be overtaken safely. Valid until R-502 or R-500.' } },
      { es: '¿A quién afecta esta señal?',
        prompt: { ru: 'На кого распространяется этот знак?', en: 'Who does this sign apply to?' },
        sign: 'R-306',
        options: [
          { es: 'A todos los vehículos.', ru: 'На всех.', en: 'All vehicles.' },
          { es: 'A los camiones de más de 3.500 kg de masa máxima autorizada.', ru: 'На грузовики с разрешённой максимальной массой больше 3 500 кг.', en: 'Lorries with a maximum authorised mass over 3,500 kg.' },
          { es: 'Solo a las furgonetas.', ru: 'Только на фургоны.', en: 'Only vans.' }
        ],
        answer: 1,
        explain: { ru: 'R-306 запрещает обгон грузовикам > 3 500 кг, даже без выезда на встречную. Каталог знаков, R-306.', en: 'R-306 forbids lorries over 3,500 kg from overtaking, even without entering the opposite side. Sign catalogue, R-306.' } },
      { es: '¿Qué prohíbe esta señal de fondo azul con una franja roja?',
        prompt: { ru: 'Что запрещает этот синий знак с одной красной полосой?', en: 'What does this blue sign with one red stripe prohibit?' },
        sign: 'R-308',
        options: [
          { es: 'Parar y estacionar.', ru: 'Остановку и стоянку.', en: 'Stopping and parking.' },
          { es: 'Solo estacionar; la parada está permitida.', ru: 'Только стоянку; остановка разрешена.', en: 'Only parking; stopping is allowed.' },
          { es: 'Circular.', ru: 'Движение.', en: 'Driving.' }
        ],
        answer: 1,
        explain: { ru: 'R-308 (одна полоса) запрещает стоянку, а не остановку. R-307 (крест) запрещает и то и другое. Действует с этой стороны до ближайшего перекрёстка.', en: 'R-308 (one stripe) forbids parking, not stopping. R-307 (a cross) forbids both. It applies on that side up to the next junction.' } },
      { es: '¿Qué indica esta señal de fondo azul con dos franjas rojas en aspa?',
        prompt: { ru: 'Что означает этот синий знак с двумя красными полосами крест-накрест?', en: 'What does this blue sign with two crossed red stripes mean?' },
        sign: 'R-307',
        options: [
          { es: 'Estacionamiento prohibido solo los días impares.', ru: 'Стоянка запрещена только по нечётным дням.', en: 'No parking on odd days only.' },
          { es: 'Prohibido parar y estacionar en ese lado de la calzada.', ru: 'На этой стороне запрещены остановка и стоянка.', en: 'No stopping or parking on that side of the road.' },
          { es: 'Final de la zona de estacionamiento.', ru: 'Конец зоны стоянки.', en: 'End of the parking zone.' }
        ],
        answer: 1,
        explain: { ru: 'R-307 запрещает и остановку, и стоянку на стороне знака — от знака до ближайшего перекрёстка, если не указано иное.', en: 'R-307 forbids both stopping and parking on that side — from the sign to the next junction unless stated otherwise.' } },
      { es: 'Estaciona en una zona con esta señal. ¿Qué debe hacer?',
        prompt: { ru: 'Вы ставите машину в зоне с этим знаком. Что нужно сделать?', en: 'You park in a zone with this sign. What must you do?' },
        sign: 'R-309',
        options: [
          { es: 'Nada, es estacionamiento libre.', ru: 'Ничего, стоянка свободная.', en: 'Nothing, parking is free.' },
          { es: 'Dejar el motor en marcha.', ru: 'Не глушить двигатель.', en: 'Leave the engine running.' },
          { es: 'Indicar la hora de comienzo con el distintivo o tique y no superar el tiempo permitido.', ru: 'Показать время начала талоном и не превышать разрешённое время.', en: 'Show the start time with a ticket or disc and not exceed the time allowed.' }
        ],
        answer: 2,
        explain: { ru: 'R-309 — зона ограниченной стоянки (ORA, синяя зона): без талона или сверх времени стоять запрещено. RGC, ст. 94.2.b.', en: 'R-309 is a limited-parking zone (ORA, blue zone): parking without a ticket or beyond the time allowed is forbidden. RGC art. 94.2.b.' } },
      { es: '¿Qué diferencia hay entre parada y estacionamiento?',
        prompt: { ru: 'Чем остановка отличается от стоянки?', en: 'What is the difference between stopping and parking?' },
        options: [
          { es: 'La parada dura menos de dos minutos y el conductor no abandona el vehículo.', ru: 'Остановка короче двух минут, и водитель не покидает машину.', en: 'A stop lasts under two minutes and the driver does not leave the vehicle.' },
          { es: 'La parada siempre es obligada por el tráfico.', ru: 'Остановка всегда вынуждена движением.', en: 'A stop is always forced by traffic.' },
          { es: 'El estacionamiento dura más de diez minutos.', ru: 'Стоянка — дольше десяти минут.', en: 'Parking lasts more than ten minutes.' }
        ],
        answer: 0,
        explain: { ru: 'Остановка — добровольная, меньше 2 минут, водитель рядом. Всё дольше или с уходом водителя — стоянка. Вынужденная остановка — detención. LSV, приложение I.', en: 'A stop is voluntary, under 2 minutes, with the driver present. Anything longer, or leaving the car, is parking. A forced halt is a detención. LSV, annex I.' } },
      { es: 'Fuera de poblado, ¿dónde debe parar o estacionar?',
        prompt: { ru: 'Где останавливаться или ставить машину вне населённого пункта?', en: 'Outside built-up areas, where should you stop or park?' },
        options: [
          { es: 'En la calzada, lo más a la derecha posible.', ru: 'На проезжей части, как можно правее.', en: 'On the carriageway, as far right as possible.' },
          { es: 'Fuera de la calzada, en el lado derecho, dejando libre la parte transitable del arcén.', ru: 'Вне проезжей части, справа, оставив свободной проезжую часть обочины.', en: 'Off the carriageway, on the right, leaving the usable part of the hard shoulder free.' },
          { es: 'En el arcén izquierdo.', ru: 'На левой обочине.', en: 'On the left-hand shoulder.' }
        ],
        answer: 1,
        explain: { ru: 'Вне города остановка и стоянка — всегда вне проезжей части, справа, не занимая проезжую часть обочины. RGC, ст. 90.1.', en: 'Out of town, stopping and parking are always off the carriageway, on the right, without blocking the usable hard shoulder. RGC art. 90.1.' } },
      { es: '¿Cuándo se considera peligroso un estacionamiento respecto a una línea continua?',
        prompt: { ru: 'Когда стоянка считается опасной по отношению к сплошной линии?', en: 'When is parking considered dangerous with respect to a solid line?' },
        img: 'img/dgt/maniobras-estacionar.svg',
        options: [
          { es: 'Cuando entre el vehículo y la línea continua quedan menos de 3 metros.', ru: 'Когда между машиной и сплошной меньше 3 метров.', en: 'When there are less than 3 metres between the vehicle and the solid line.' },
          { es: 'Cuando quedan menos de 5 metros.', ru: 'Когда меньше 5 метров.', en: 'When there are less than 5 metres.' },
          { es: 'Nunca, si se deja el intermitente puesto.', ru: 'Никогда, если включить поворотник.', en: 'Never, if you leave the indicator on.' }
        ],
        answer: 0,
        explain: { ru: 'Меньше 3 м до противоположного края или до сплошной (которую нельзя пересекать) — опасная стоянка: другие не проедут. RGC, ст. 91.2.a.', en: 'Less than 3 m to the opposite edge or to a solid line (which may not be crossed) is dangerous parking: others cannot get past. RGC art. 91.2.a.' } },
      { es: 'Estaciona un turismo con cambio manual en una pendiente descendente. ¿Qué marcha debe dejar puesta?',
        prompt: { ru: 'Вы ставите легковой автомобиль с механической коробкой на спуске. Какую передачу оставить?', en: 'You park a manual car facing downhill. Which gear should you leave it in?' },
        options: [
          { es: 'La primera.', ru: 'Первую.', en: 'First gear.' },
          { es: 'Punto muerto.', ru: 'Нейтраль.', en: 'Neutral.' },
          { es: 'La marcha atrás.', ru: 'Заднюю.', en: 'Reverse.' }
        ],
        answer: 2,
        explain: { ru: 'На спуске — задняя передача, на подъёме — первая, плюс стояночный тормоз; у автомата — положение P. RGC, ст. 92.3.c.', en: 'Facing downhill: reverse; uphill: first gear; plus the handbrake; an automatic goes in P. RGC art. 92.3.c.' } },
      { es: '¿Está permitido parar en una zona de carga y descarga durante sus horas de uso?',
        prompt: { ru: 'Можно ли остановиться в зоне погрузки-разгрузки в часы её работы?', en: 'May you stop in a loading zone during its hours of use?' },
        options: [
          { es: 'Sí, se puede parar, pero no estacionar.', ru: 'Да, остановиться можно, но не ставить машину на стоянку.', en: 'Yes, you may stop but not park.' },
          { es: 'No, está prohibido parar y estacionar.', ru: 'Нет, запрещены и остановка, и стоянка.', en: 'No, both stopping and parking are forbidden.' },
          { es: 'Sí, y estacionar hasta media hora.', ru: 'Да, и стоять до получаса.', en: 'Yes, and park for up to half an hour.' }
        ],
        answer: 0,
        explain: { ru: 'Зона погрузки-разгрузки в списке запретов стоянки (ст. 94.2.c), но не остановки: остановиться на минуту можно. RGC, ст. 94.', en: 'Loading zones are on the no-parking list (art. 94.2.c), not the no-stopping list: a brief stop is allowed. RGC art. 94.' } },
      { es: '¿Se puede parar en un paso para peatones?',
        prompt: { ru: 'Можно ли остановиться на пешеходном переходе?', en: 'May you stop on a pedestrian crossing?' },
        options: [
          { es: 'Sí, si no hay peatones.', ru: 'Да, если нет пешеходов.', en: 'Yes, if there are no pedestrians.' },
          { es: 'Sí, menos de dos minutos.', ru: 'Да, меньше двух минут.', en: 'Yes, for less than two minutes.' },
          { es: 'No, está prohibido parar y estacionar.', ru: 'Нет, запрещены и остановка, и стоянка.', en: 'No, both stopping and parking are forbidden.' }
        ],
        answer: 2,
        explain: { ru: 'На пешеходных и велосипедных переходах и ж/д переездах запрещено даже останавливаться. RGC, ст. 94.1.b.', en: 'Even stopping is forbidden on pedestrian and cycle crossings and level crossings. RGC art. 94.1.b.' } }
    ]
  }
]);
