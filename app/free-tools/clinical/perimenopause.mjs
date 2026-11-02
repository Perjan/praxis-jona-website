export const symptomLabels = {
  heat: 'Hitzewallungen oder Nachtschweiß',
  sleep: 'Schlafprobleme',
  fog: 'Konzentrationsprobleme / Brain Fog',
  mood: 'Reizbarkeit, Ängstlichkeit oder Stimmungstief',
  vaginal: 'Vaginale Trockenheit, Brennen oder Schmerzen beim Sex',
  urinary: 'Harndrang oder wiederkehrende Harnwegsbeschwerden',
  fatigue: 'Müdigkeit oder Erschöpfung',
  breast: 'Brustspannen oder zyklusabhängige Beschwerden',
  weight: 'Verändertes Gewicht oder Körpergefühl',
  joints: 'Gelenk- oder Muskelschmerzen',
  libido: 'Weniger sexuelle Lust'
};

const hormoneSources = {
  physiology: { label: 'Hormonverlauf: Endocrinology of the Menopause', url: 'https://pubmed.ncbi.nlm.nih.gov/26316238/' },
  progesterone: { label: 'Progesteron: Memi et al., 2024', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11294403/' },
  nice: { label: 'Klinische Einordnung: NICE NG23', url: 'https://www.nice.org.uk/guidance/ng23/chapter/Recommendations' },
  heat: { label: 'Hitzewallungen: The Menopause Society', url: 'https://menopause.org/patient-education/menopause-topics/hot-flashes' }
};

function explainHormones(answers, stage) {
  if (stage === 'urgent') return [];
  const symptoms = answers.symptoms || [];
  const overview = stage === 'post'
    ? 'Nach der letzten natürlichen Menstruation bleibt die Östrogenproduktion der Eierstöcke deutlich niedriger. Auch der zyklische Progesteronanstieg entfällt, weil keine regelmäßigen Eisprünge mehr stattfinden. Das ist ein anderer Hormonverlauf als die starken Schwankungen im Übergang. Dieser Check beschreibt das typische Muster, nicht Ihre gemessenen Hormonwerte.'
    : stage === 'surgical'
      ? 'Werden beide Eierstöcke vor der natürlichen Menopause entfernt, fällt ihre Hormonproduktion abrupt ab. Das unterscheidet sich vom oft jahrelangen natürlichen Übergang. Eine bereits bestehende Hormonbehandlung kann Beschwerden und Hormonwirkung verändern. Ohne Operations- und Behandlungsverlauf lässt sich Ihre persönliche Situation nicht näher bestimmen.'
      : stage === 'context'
        ? 'Hormone, Schwangerschaft, Stillzeit, Operationen oder andere besondere Umstände können Blutungen und Beschwerden anders beeinflussen als ein natürlicher Wechseljahresübergang. Die folgenden Abschnitte erklären allgemeine Zusammenhänge zwischen Hormonen und Ihren ausgewählten Beschwerden. Sie bedeuten nicht, dass bei Ihnen derselbe Mechanismus vorliegt.'
        : 'Im natürlichen Wechseljahresübergang wird der Eisprung unzuverlässiger. In Zyklen ohne Eisprung fehlt der typische Progesteronanstieg der zweiten Zyklushälfte. Gleichzeitig kann Östradiol – das wichtigste Östrogen vor der Menopause – stark schwanken und zeitweise auch hoch sein. Deshalb können zyklusabhängige Beschwerden und Beschwerden bei Östrogenabfällen gleichzeitig auftreten. Ob dies Ihre Beschwerden erklärt, lässt sich aus dem Check allein nicht feststellen.';
  const education = [{ title: 'Östrogen und Progesteron: Was sich in dieser Lebensphase verändern kann', text: overview, certainty: 'Typischer Hormonverlauf – keine Messung Ihrer Werte', sources: [hormoneSources.physiology] }];

  if (symptoms.includes('breast') || answers.change === 'yes' || answers.warning === 'abnormal') education.push({
    title: 'Zyklusveränderungen und Brustspannen: das Zusammenspiel der Hormone',
    text: 'Östrogen fördert den Aufbau der Gebärmutterschleimhaut. Nach einem Eisprung verändert Progesteron die Schleimhaut und wirkt einer ungebremsten Östrogenwirkung entgegen. Bleibt der Eisprung aus, fehlt dieser typische Progesteroneinfluss; unregelmäßige Blutungen können entstehen. Auch Brustspannen kann mit zyklischen Hormonschwankungen zusammenhängen.',
    limitation: 'Das belegt bei Ihnen weder „zu viel Östrogen“ noch einen Progesteronmangel. Starke Blutungen können auch andere Ursachen haben. Nach der Menopause oder unter Hormonbehandlung darf dieses Zyklusmodell nicht einfach übertragen werden.',
    observe: 'Notieren Sie, wann Blutungen und Brustspannen auftreten und ob das Muster neu ist. Auffällige Blutungen bitte gynäkologisch abklären lassen.',
    certainty: 'Physiologie gut beschrieben; persönliche Symptomzuordnung nicht validiert',
    sources: [hormoneSources.progesterone]
  });
  if (symptoms.includes('heat')) education.push({
    title: 'Hitzewallungen und Nachtschweiß: Östrogen und Temperaturregulation',
    text: 'Veränderungen der Östrogenwirkung beeinflussen die Temperaturregulation im Gehirn. Dadurch kann der Körper schon auf kleine Temperaturänderungen mit Wärmegefühl und Schwitzen reagieren. Das kann bereits in der Perimenopause passieren, obwohl Östradiol zwischenzeitlich normal oder erhöht ist. Nachtschweiß kann zusätzlich den Schlaf unterbrechen.',
    limitation: 'Diese Beschwerden passen zum Wechseljahresübergang, zeigen aber weder einen konkreten Östrogenwert noch die passende Hormondosis an. Sie können auch nach der letzten Periode länger anhalten.',
    observe: 'Wie oft treten die Episoden auf, auch nachts? Was beeinträchtigt Ihren Alltag? Diese Angaben helfen bei der Behandlungsauswahl.',
    certainty: 'Zusammenhang mit der hormonellen Umstellung gut beschrieben',
    sources: [hormoneSources.heat, hormoneSources.physiology]
  });
  if (symptoms.includes('sleep')) education.push({
    title: 'Schlafprobleme: Östrogen und Progesteron können unterschiedlich beteiligt sein',
    text: symptoms.includes('heat')
      ? 'Sie haben auch Hitzewallungen oder Nachtschweiß ausgewählt. Nächtliche Hitzeepisoden können den Schlaf wiederholt unterbrechen. Zusätzlich wirken Progesteron-Abbauprodukte auf beruhigende Signalwege im Gehirn. Veränderungen dieses Systems sind ein möglicher weiterer Zusammenhang, aber keine eindeutige Erklärung für Schlafstörungen.'
      : 'Östrogenveränderungen können den Schlaf beeinflussen, zum Beispiel über nächtliche Wärmeepisoden. Progesteron-Abbauprodukte wirken auf beruhigende Signalwege im Gehirn. Ein veränderter Zyklus kann deshalb mit verändertem Schlaf einhergehen. Ohne Nachtschweiß gibt es jedoch ebenfalls zahlreiche mögliche Ursachen.',
    limitation: 'Aus schlechtem Schlaf lässt sich kein Progesteronmangel ableiten. Auch eine mögliche schlaffördernde Wirkung verordneten Progesterons beweist keinen vorherigen Mangel. Stress, Schlafapnoe, Restless Legs und Medikamente können ebenfalls wichtig sein.',
    observe: 'Haben Sie Probleme beim Einschlafen oder werden Sie nachts wach? Besteht ein Zusammenhang mit Schwitzen, Zyklustagen oder Medikamenten?',
    certainty: 'Mehrere mögliche Mechanismen; kein spezifisches Hormonzeichen',
    sources: [hormoneSources.progesterone, hormoneSources.heat]
  });
  if (symptoms.includes('mood')) education.push({
    title: 'Stimmung und innere Unruhe: hormonelle Empfindlichkeit statt eines einzelnen Werts',
    text: 'Östradiolschwankungen können Systeme beeinflussen, die Stimmung und Stressverarbeitung regulieren. Auch Veränderungen von Progesteron und seinen Abbauprodukten können eine Rolle spielen. Entscheidend ist nicht nur die Hormonmenge: Manche Frauen reagieren empfindlicher auf deren Wechsel. Schlechter Schlaf kann die Belastung zusätzlich verstärken.',
    limitation: 'Reizbarkeit oder Angst zeigen nicht zuverlässig an, ob Östrogen oder Progesteron „zu hoch“ oder „zu niedrig“ ist. Eine Depression oder Angststörung braucht gegebenenfalls eine eigene Abklärung und Behandlung.',
    observe: 'Sind die Beschwerden zyklusabhängig, neu oder anhaltend? Wie sehr beeinträchtigen sie Ihren Alltag?',
    certainty: 'Zusammenhänge beschrieben; individuelle Ursache oft multifaktoriell',
    sources: [hormoneSources.physiology, hormoneSources.progesterone]
  });
  if (symptoms.includes('fog')) education.push({
    title: 'Brain Fog: Hormonschwankungen und Schlaf wirken zusammen',
    text: 'Östrogene wirken auch im Gehirn. Veränderungen im Übergang können mit subjektiven Konzentrations- und Gedächtnisproblemen einhergehen. Schlafmangel, Nachtschweiß und Stimmungssymptome können den Effekt verstärken. Die Beschwerden können deshalb gleichzeitig auftreten, ohne dass sich ein einzelnes verantwortliches Hormon bestimmen lässt.',
    limitation: 'Brain Fog ist weder ein zuverlässiger Nachweis für Östrogenmangel noch für Progesteronmangel. Auch andere Ursachen müssen berücksichtigt werden. Neue oder zunehmende Probleme sollten nicht automatisch den Wechseljahren zugeschrieben werden.',
    observe: 'Treten die Probleme vor allem nach schlechten Nächten auf? Seit wann bestehen sie, und verändern sie Arbeit oder Alltag?',
    certainty: 'Beschwerde im Übergang beschrieben; Zuordnung zu einem Einzelhormon unsicher',
    sources: [hormoneSources.physiology]
  });
  if (symptoms.includes('vaginal') || symptoms.includes('urinary')) education.push({
    title: 'Trockenheit und Harnwegsbeschwerden: ein direkterer Bezug zur Östrogenwirkung',
    text: 'Östrogen unterstützt die Schleimhäute von Vagina und unteren Harnwegen. Bei anhaltend geringerer Östrogenwirkung können Gewebe und lokale Umgebung sich verändern. Trockenheit, Brennen, Schmerzen beim Sex oder bestimmte Harnwegsbeschwerden können dazugehören. Dieser Zusammenhang ist besonders nach der Menopause relevant; lokale Beschwerden können aber auch früher auftreten.',
    limitation: 'Infektionen, Hauterkrankungen und andere Ursachen können ähnlich aussehen. Die Auswahl im Check bestätigt deshalb kein genitourinäres Menopausensyndrom. Progesteronmangel ist keine pauschale Erklärung für diese Beschwerden.',
    observe: 'Beschreiben Sie, ob Trockenheit, Schmerzen oder akute Beschwerden beim Wasserlassen im Vordergrund stehen. Lokale und systemische Behandlungen erfüllen unterschiedliche Aufgaben.',
    certainty: 'Zusammenhang mit geringerer Östrogenwirkung gut beschrieben',
    sources: [hormoneSources.nice]
  });
  if (symptoms.includes('fatigue')) education.push({
    title: 'Müdigkeit: oft eine indirekte Verbindung zu Hormonen',
    text: 'Wenn hormonbedingte Hitzewallungen oder Nachtschweiß den Schlaf stören, kann daraus tagsüber Erschöpfung entstehen. Auch Stimmung, Belastung und veränderte Erholung wirken mit. Bei stärkeren Blutungen ist zudem ein Eisenmangel als zusätzliche Ursache zu bedenken.',
    limitation: 'Müdigkeit allein erlaubt keine Zuordnung zu Östrogen oder Progesteron. Schilddrüse, Anämie, Schlafstörungen, Medikamente und weitere Ursachen können unabhängig von den Wechseljahren bestehen.',
    observe: 'Begann die Erschöpfung mit Schlaf- oder Blutungsveränderungen? Welche Belastungen gab es vorher? Das hilft bei einer gezielten statt pauschalen Diagnostik.',
    certainty: 'Unspezifisches Symptom; keine verlässliche Hormonzuordnung',
    sources: [hormoneSources.heat]
  });
  if (symptoms.includes('weight')) education.push({
    title: 'Gewicht und Körpergefühl: mehr als Östrogen und Progesteron',
    text: 'Die hormonelle Umstellung kann zur veränderten Fettverteilung beitragen. Gleichzeitig verändern sich mit dem Alter Muskelmasse und Energiebedarf; Schlaf, Bewegung, Ernährung und Medikamente wirken ebenfalls mit. Eine Veränderung am Bauch ist daher kein messbares persönliches Hormonprofil.',
    limitation: 'Gewichtszunahme belegt weder „Östrogendominanz“ noch einen Progesteronmangel. Der Check empfiehlt daraus keine Hormonbehandlung zum Abnehmen.',
    observe: 'Wichtig sind der zeitliche Verlauf und die gemeinsame Betrachtung von Ernährung, Bewegung, Schlaf und Gesundheit.',
    certainty: 'Mehrere Einflussfaktoren; kein spezifisches Hormonzeichen',
    sources: [hormoneSources.physiology]
  });
  if (symptoms.includes('libido')) education.push({
    title: 'Sexuelle Lust: Hormonwirkung, Beschwerden und Lebenssituation',
    text: 'Geringere Östrogenwirkung kann über Trockenheit oder Schmerzen die Sexualität beeinträchtigen. Auch Schlaf, Stimmung, Medikamente, Beziehung und Belastungen spielen eine Rolle. Weniger Lust lässt sich deshalb nicht einfach einem niedrigen Östrogen- oder Progesteronwert zuordnen.',
    limitation: 'Die Auswahl beweist auch keinen Testosteronmangel. Eine Entscheidung über eine Behandlung braucht eine eigene, umfassende Einordnung.',
    observe: 'Was steht im Vordergrund: weniger Lust, Schmerzen, Trockenheit oder Erschöpfung? Das sind unterschiedliche Ansatzpunkte für das Gespräch.',
    certainty: 'Meist multifaktoriell; keine Hormonmangeldiagnose aus dem Symptom',
    sources: [hormoneSources.nice]
  });
  if (symptoms.includes('joints')) education.push({
    title: 'Gelenke und Muskeln: möglicher Zusammenhang, keine eindeutige Ursache',
    text: 'Gelenk- und Muskelbeschwerden werden im Wechseljahresübergang beschrieben. Eine veränderte Östrogenwirkung kann beteiligt sein. Gleichzeitig sind Belastung, Training, Verletzungen und andere Erkrankungen mögliche Ursachen.',
    limitation: 'Schmerzen beweisen keinen Östrogen- oder Progesteronmangel. Neu geschwollene, überwärmte oder deutlich schmerzhafte Gelenke sollten unabhängig vom Wechseljahrescheck ärztlich beurteilt werden.',
    observe: 'Wo bestehen die Schmerzen? Gibt es Schwellung, Morgensteifigkeit oder einen Bezug zu Bewegung?',
    certainty: 'Beschwerde beschrieben; persönliche Ursache nicht aus dem Check bestimmbar',
    sources: [hormoneSources.nice]
  });
  return education;
}

export function evaluate(answers) {
  const warnings = [];
  const symptoms = answers.symptoms || [];
  let stage = 'open';
  let title = 'Aus diesen Angaben lässt sich die Lebensphase nicht sicher einordnen.';
  let explanation = 'Ein kurzer Check kann eine Perimenopause weder bestätigen noch ausschließen. Entscheidend sind Verlauf, Beschwerden und Ihre gesundheitliche Situation.';
  let next = 'Notieren Sie Zyklusverlauf, Beschwerden und deren Beginn. Besprechen Sie anhaltende oder belastende Veränderungen ärztlich.';

  if (answers.context === 'surgery') {
    stage = 'surgical';
    title = 'Nach Entfernung beider Eierstöcke braucht es eine eigene Einordnung.';
    explanation = 'Die Entfernung beider Eierstöcke vor der natürlichen Menopause führt zu einer operativ ausgelösten Menopause. Ein Zykluscheck ist dafür nicht geeignet; bei einer späteren Operation hängt die Einordnung von der Vorgeschichte ab.';
    next = 'Besprechen Sie Beschwerden, bisherige Behandlung sowie Knochen- und Herz-Kreislauf-Gesundheit mit Ihrer behandelnden Ärztin oder Ihrem Arzt.';
  } else if (answers.context !== 'none') {
    stage = 'context';
    title = 'Die Blutung allein erlaubt hier keine Einordnung.';
    explanation = 'Hormone, Schwangerschaft, Stillzeit, eine fehlende Gebärmutter, langjährig unregelmäßige Zyklen oder medizinische Behandlungen können das Blutungsmuster verändern. Deshalb wenden wir die üblichen Zykluskriterien hier nicht an.';
    next = 'Lassen Sie Ihre Beschwerden mit Blick auf diesen besonderen Umstand einordnen. Medikamente oder Verhütung bitte nicht aufgrund dieses Checks verändern.';
  } else if (answers.age === 'under40') {
    stage = 'younger';
    title = 'Unter 40: neue Zyklusveränderungen gezielt abklären.';
    explanation = 'Beschwerden sind ernst zu nehmen. In diesem Alter sollten unter anderem eine Schwangerschaft, andere Ursachen ausbleibender Blutungen und gegebenenfalls eine vorzeitige Einschränkung der Eierstockfunktion abgeklärt werden. Eine Online-Zuordnung zur Perimenopause wäre zu unsicher.';
    next = 'Bei ausbleibender oder deutlich veränderter Periode vereinbaren Sie zeitnah einen gynäkologischen Termin. Bei möglicher Schwangerschaft ist ein Schwangerschaftstest sinnvoll.';
  } else if (answers.age === '40to44') {
    stage = 'early';
    title = 'Zwischen 40 und 44: ein früher Übergang ist möglich.';
    explanation = 'Zyklusveränderungen und Beschwerden können zu einem frühen Wechseljahresübergang passen, haben aber auch andere Ursachen. Vor 45 sollte die ärztliche Abklärung gezielt erfolgen; gegebenenfalls ist Hormonlabor hilfreich.';
    next = 'Besprechen Sie neue Zyklusveränderungen oder längeres Ausbleiben der Periode zeitnah gynäkologisch. Dieser Check legt keine frühe Menopause fest.';
  } else if (answers.period === 'year') {
    stage = 'post';
    title = 'Mindestens zwölf Monate ohne natürliche Periode: eine Postmenopause ist möglich.';
    explanation = 'Ab 45 passt dieses Muster zur Zeit nach der letzten Menstruation, sofern keine andere Ursache das Ausbleiben erklärt. Die letzte natürliche Menstruation lässt sich erst rückblickend als Menopause einordnen.';
    next = 'Bei Beschwerden können Sie Behandlungsmöglichkeiten besprechen. Neue Blutungen nach dieser Pause müssen gynäkologisch abgeklärt werden.';
  } else if (answers.period === 'gap') {
    stage = 'late';
    title = 'Eine neue Pause ab 60 Tagen kann zum späteren Übergang passen.';
    explanation = 'Wenn zuvor regelmäßige natürliche Zyklen bestanden, kann eine solche längere Pause ein Hinweis auf die späte Übergangsphase sein. Eine Menopause ist damit noch nicht festgestellt. Andere Ursachen, insbesondere eine Schwangerschaft, müssen berücksichtigt werden.';
  } else if (answers.change === 'yes' && answers.period === 'recent') {
    stage = 'transition';
    title = 'Neue Zyklusveränderungen können zur Perimenopause passen.';
    explanation = symptoms.includes('heat')
      ? 'Neue Zyklusveränderungen zusammen mit Hitzewallungen oder Nachtschweiß sind typische Hinweise ab 45. Eine individuelle Diagnose stellt dieser Check nicht.'
      : 'Wenn die Länge natürlicher Zyklen wiederholt deutlich schwankt, kann ein Übergang begonnen haben. Ein einzelner unregelmäßiger Zyklus oder unspezifische Beschwerden reichen für die Einordnung nicht aus.';
  } else if (symptoms.length) {
    stage = 'symptoms';
    title = 'Ihre Beschwerden verdienen eine Einordnung – auch bei regelmäßiger Periode.';
    explanation = 'Beschwerden können schon vor einem deutlichen Zykluswechsel auftreten. Sie belegen für sich aber keine Perimenopause und keinen bestimmten Hormonmangel. Auch Schlaf, Schilddrüse, Eisenstatus, Medikamente und psychische Belastungen können eine Rolle spielen.';
  }

  if (answers.warning === 'emergency') {
    warnings.push({ level: 'urgent', text: 'Bitte holen Sie jetzt medizinische Hilfe: Bei sehr starker Blutung mit Kreislaufproblemen, Ohnmacht, akuter Atemnot oder Brustschmerz rufen Sie 112. Warten Sie nicht auf einen regulären Praxis- oder HER-Termin.' });
  } else if (answers.warning === 'postbleeding') {
    warnings.push({ level: 'prompt', text: 'Bitte lassen Sie eine neue Blutung nach mindestens zwölf Monaten ohne natürliche Periode zeitnah gynäkologisch abklären – auch eine leichte oder einmalige Blutung. Unter Hormontherapie hängt die Einordnung vom Behandlungsschema und Verlauf ab; besprechen Sie die Blutung mit Ihrer behandelnden Praxis.' });
  } else if (answers.warning === 'abnormal') {
    warnings.push({ level: 'prompt', text: 'Stärkere oder längere Blutungen, Blutungen zwischen den Perioden oder nach dem Sex sollten gynäkologisch abgeklärt werden. Sie sollten nicht automatisch als Wechseljahresbeschwerden gelten.' });
  }
  if (answers.burden === 'strong') warnings.push({ level: 'care', text: 'Ihre Beschwerden beeinträchtigen den Alltag stark. Vereinbaren Sie zeitnah eine ärztliche Besprechung, auch wenn die Lebensphase noch unklar ist.' });
  if (symptoms.includes('urinary')) warnings.push({ level: 'care', text: 'Bei akuten Harnwegsbeschwerden mit Fieber oder Flankenschmerzen ist eine rasche ärztliche Abklärung nötig. Der Check kann eine Infektion nicht ausschließen.' });

  if (answers.warning === 'emergency') {
    stage = 'urgent';
    title = 'Jetzt hat die medizinische Abklärung Vorrang.';
    explanation = 'Diese akuten Beschwerden lassen sich mit einem Wechseljahrescheck nicht beurteilen.';
    next = 'Bitte folgen Sie dem Hinweis oben. Die Einordnung einer möglichen Wechseljahresphase kann warten.';
  }

  const education = explainHormones(answers, stage);

  return { stage, title, explanation, next, warnings, education, selectedSymptoms: symptoms.map(key => symptomLabels[key]).filter(Boolean) };
}
