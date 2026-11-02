export const references = {
  ash: { title: 'ASH 2026 – Diagnoseleitlinie, offizielle Lehrfolien', url: 'https://www.hematology.org/-/media/hematology/files/clinicians/guidelines/diagnosis-of-iron-deficiency-teaching-slides-pdf.pdf' },
  agaDiagnosis: { title: 'AGA 2020 – Diagnostik bei Eisenmangelanämie', url: 'https://gastro.org/clinical-guidance/gastrointestinal-evaluation-of-iron-deficiency-anemia/' },
  agaTreatment: { title: 'AGA 2024 – Clinical Practice Update zur Behandlung', url: 'https://gastro.org/clinical-guidance/management-of-iron-deficiency-anemia/' },
  hepcidin: { title: 'Stoffel et al. 2017 – alternierende Einnahme', url: 'https://pubmed.ncbi.nlm.nih.gov/29032957/' },
  dosing: { title: 'Stoffel et al. 2020 – Dosis und Hepcidin', url: 'https://pubmed.ncbi.nlm.nih.gov/32650997/' },
  vitaminC: { title: 'Li et al. 2020 – Vitamin C im randomisierten Vergleich', url: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2772395' },
  nhsTiming: { title: 'NHS – Einnahme von Ferrosulfat', url: 'https://www.nhs.uk/medicines/ferrous-sulfate/about-ferrous-sulfate/' },
  interactions: { title: 'NHS – Wechselwirkungen von Ferrosulfat', url: 'https://www.nhs.uk/medicines/ferrous-sulfate/taking-ferrous-sulfate-with-other-medicines-and-herbal-supplements/' },
  fatigue: { title: 'Vaucher et al. 2012 – Müdigkeit ohne Anämie', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3414597/' },
  rls: { title: 'AASM 2025 – Restless-Legs-Leitlinie', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11701286/' },
  phosphate: { title: 'FDA 2026 – Eisencarboxymaltose und Phosphatmangel', url: 'https://www.fda.gov/drugs/drug-safety-communications/fda-adds-boxed-warning-labeling-ferric-carboxymaltose-injection-injectafer-describe-risk-low' }
};

export function parseLab(value, label, maximum) {
  if (value === undefined || value === null || String(value).trim() === '') return null;
  const clean = String(value).trim();
  if (!/^\d+(?:[.,]\d+)?$/.test(clean)) throw new Error(`${label}: Bitte nur eine Zahl ohne Tausendertrennzeichen eingeben, z. B. 28,5.`);
  const number = Number(clean.replace(',', '.'));
  if (!Number.isFinite(number) || number < 0 || number > maximum) throw new Error(`${label}: Bitte Einheit und Zahlenwert prüfen.`);
  return number;
}

function item(title, text, source, level = 'info') {
  return { title, text, source, level };
}

function acuteResult() {
  return { code:'urgent', title:'Bitte holen Sie jetzt medizinische Hilfe.', intro:'Akute Atemnot, Brustschmerz, Ohnmacht oder eine starke Blutung mit Kreislaufproblemen lassen sich mit diesem Check nicht abklären. Bei einem Notfall rufen Sie 112. Warten Sie nicht auf einen regulären Praxistermin.', sections:[], urgent:true };
}

export function evaluateIron(answers) {
  if (answers.warning === 'acute') return acuteResult();
  if (answers.group !== 'adult') return { code:'special',title:'Hier ist eine individuelle Einordnung nötig.',intro:'Für Kinder, Jugendliche, Schwangerschaft und Wochenbett gelten besondere Empfehlungen. Der allgemeine Erwachsenencheck ordnet in dieser Situation keine Grenzwerte zu. Bitte besprechen Sie Befunde und Beschwerden mit Ihrer behandelnden Praxis.',sections:[],urgent:false };
  const ferritin = parseLab(answers.ferritin, 'Ferritin', 10000);
  const tsat = parseLab(answers.tsat, 'Transferrinsättigung', 100);
  const symptoms = answers.symptoms || [];
  const risks = answers.risks || [];
  const inflammation = answers.crp === 'high' || risks.includes('inflammation');
  const sections = [];
  let code = 'open';
  let title = 'Die vorhandenen Angaben reichen nicht für eine eindeutige Einordnung.';
  let intro = 'Beschwerden allein beweisen keinen Eisenmangel. Ferritin, Blutbild und gegebenenfalls die Transferrinsättigung helfen bei der ärztlichen Beurteilung.';

  if (answers.recent === 'yes' || risks.includes('overload')) {
    code = 'context'; title = 'Diese Befunde brauchen eine gesonderte ärztliche Einordnung.';
    intro = 'Eine kürzliche Eiseninfusion, Bluttransfusion oder bekannte Eisenüberladung verändert die Aussagekraft beziehungsweise das weitere Vorgehen. Der Check wendet hier die einfachen Grenzbereiche nicht an. Bitte nehmen Sie nicht zusätzlich auf eigene Entscheidung Eisen ein.';
  } else if (ferritin !== null && ferritin >= 1000) {
    code = 'high'; title = 'Deutlich erhöhtes Ferritin bitte ärztlich abklären lassen.';
    intro = 'Ein solcher Wert ist kein Grund, auf Verdacht Eisen einzunehmen. Entzündung, Lebererkrankungen, Eisenüberladung und andere Ursachen kommen infrage. Ein hoher Wert allein beweist keine Eisenüberladung und schließt bei bestimmten Erkrankungen eine gestörte Eisenverfügbarkeit nicht aus.';
  } else if (tsat !== null && tsat >= 45) {
    code = 'discordant'; title = 'Die erhöhte Transferrinsättigung braucht eine Einordnung.';
    intro = 'Bitte prüfen Sie die gemeinsame Bedeutung der Werte ärztlich, bevor Sie Eisen beginnen oder erhöhen. Einnahme kurz vor der Blutabnahme und andere Umstände können Werte beeinflussen. Bei gleichzeitig niedrigem Ferritin sind die Befunde besonders sorgfältig zu beurteilen.';
  } else if (ferritin !== null && ferritin <= 30) {
    code = 'deficiency'; title = 'Ferritin ≤30 ng/ml: diagnostischer Eisenmangelbereich.';
    intro = 'Dieser Wert spricht deutlich für verminderte Eisenspeicher – auch bei normalem Hämoglobin. Die ASH-Leitlinie 2026 verwendet ≤30 ng/ml als diagnostischen Grenzwert. Der Laborhinweis erklärt aber weder automatisch die Ursache noch jede einzelne Beschwerde und legt keine Infusion fest.';
  } else if (inflammation) {
    if ((ferritin !== null && ferritin < 100) || (tsat !== null && tsat < 20)) {
      code = 'inflammatory'; title = 'Bei Entzündung ist ein Eisenmangel beziehungsweise eine eingeschränkte Verfügbarkeit möglich.';
      intro = 'Ferritin kann durch Entzündung ansteigen. Ferritin unter 100 ng/ml oder eine Transferrinsättigung unter 20 % sind in diesem Zusammenhang wichtige Hinweise. Diese Orientierungswerte sind keine universellen harten Grenzwerte für jede Erkrankung. Ob ein absoluter Mangel, eine entzündungsbedingte Einschränkung oder beides vorliegt, muss ärztlich geklärt werden.';
    } else {
      code = 'inflammation-open'; title = 'Bei Entzündung reicht Ferritin allein nicht aus.';
      intro = tsat === null ? 'Ergänzend ist die Transferrinsättigung wichtig. Ein unauffälliges oder erhöhtes Ferritin kann einen Mangel verdecken.' : 'Die angegebenen Werte ergeben nach diesen Orientierungsbereichen keinen eindeutigen Hinweis. Sie schließen jedoch nicht jede Störung der Eisenversorgung aus. Krankheitsbezogene Kriterien und das Blutbild bleiben wichtig.';
    }
  } else if (ferritin !== null && ferritin <= 50 && (symptoms.length > 0 || risks.length > 0)) {
    code = 'symptom-range'; title = 'Ferritin über 30 bis 50 ng/ml: bei Symptomen oder Risiken relevant.';
    intro = 'Dies ist kein Bereich, in dem Beschwerden grundsätzlich ausgeschlossen wären. Die ASH-Leitlinie 2026 nennt ≤50 ng/ml bei passenden Symptomen oder zusätzlichen Risiken als mögliche diagnostische Entscheidungsschwelle. Der Wert allein beweist nicht, dass Ihre Müdigkeit oder Ihr Haarausfall vom Eisen kommt. Ursachen und Behandlung gehören in ein ärztliches Gespräch.';
  } else if (answers.hb === 'low' && ferritin !== null && ferritin < 45) {
    code = 'anemia'; title = 'Niedriger Hb und Ferritin unter 45 ng/ml sollten gemeinsam abgeklärt werden.';
    intro = 'Bei bereits vorhandener Anämie verwendet die AGA für die gastroenterologische Abklärung einen Ferritin-Grenzwert von 45 ng/ml. Das ist ein anderer Anwendungskontext als ein allgemeiner Symptomcheck. Auch andere Anämieursachen können vorliegen.';
  } else if (tsat !== null && tsat < 20) {
    code = 'availability'; title = 'Die niedrige Transferrinsättigung ist ein zusätzlicher Hinweis.';
    intro = 'Sie kann auf eine eingeschränkte Eisenverfügbarkeit hinweisen. Ferritin, Entzündung, Blutbild und Zeitpunkt der Blutabnahme müssen gemeinsam betrachtet werden. Der Check kann Ursache und Behandlungsbedarf daraus nicht sicher bestimmen.';
  } else if (ferritin !== null && ferritin <= 50) {
    code = 'borderline'; title = 'Ferritin über 30 bis 50 ng/ml: Kontext statt pauschaler Diagnose.';
    intro = 'Ohne angegebene Beschwerden oder Risiken ergibt sich aus diesem Wert allein keine sichere persönliche Diagnose. Ob eine Behandlung sinnvoll ist, hängt von Blutbild, Vorgeschichte und weiteren Befunden ab.';
  } else if (ferritin !== null) {
    code = 'not-proven'; title = 'Ein Eisenmangel ist durch Ferritin allein hier nicht belegt.';
    intro = 'Das bedeutet nicht automatisch, dass alle Beschwerden geklärt sind. Bei Entzündung, besonderen Erkrankungen oder Restless Legs kann eine andere Einordnung nötig sein. Bitte behandeln Sie anhaltende Beschwerden nicht allein auf Verdacht mit mehr Eisen.';
  }
  if (answers.warning === 'bleeding') sections.push(item('Blutverlust abklären','Sichtbares Blut im Stuhl, teerartiger klebriger Stuhl, ungewöhnliche Blutungen oder deutlich stärkere Perioden sollten ärztlich abgeklärt werden. Eisen kann den Stuhl dunkel färben; dadurch sollte eine mögliche Blutung aber nicht übersehen werden.','agaDiagnosis','attention'));
  if (answers.hb === 'low') sections.push(item('Hämoglobin ist zusätzlich erniedrigt','Eine Anämie muss nach Ausprägung, Beschwerden und Ursache eingeordnet werden. Ein Eisencheck ersetzt diese Abklärung nicht. Bei Anämie ist der AGA-Grenzwert von 45 ng/ml ein zusätzlicher diagnostischer Kontext, kein Therapieautomatismus.','agaDiagnosis','attention'));
  if (answers.hb === 'normal') sections.push(item('Normaler Hb schließt leere Eisenspeicher nicht aus','Hb beschreibt den roten Blutfarbstoff. Ferritin hilft bei der Einschätzung der Speicher. Ob eine Anämie vorliegt, wird nicht am Ferritin allein entschieden.','ash'));
  if (inflammation) sections.push(item('Warum Entzündung die Bewertung verändert','Ferritin ist ein Akutphaseprotein. Gleichzeitig kann Hepcidin die Aufnahme aus dem Darm und die Freisetzung gespeicherten Eisens bremsen. Darum werden Ferritin und Transferrinsättigung zusammen beurteilt. Ein normales CRP hebt eine bekannte entzündliche Erkrankung nicht automatisch auf.','ash'));
  if (answers.crp === 'unknown' && !inflammation) sections.push(item('Entzündungsstatus unklar','Ein fehlender CRP-Befund ist kein Nachweis, dass keine Entzündung vorliegt. Falls der Verdacht besteht, sollte die Bewertung ergänzt werden.','ash'));
  if (answers.rls === 'yes') sections.push(item('Restless Legs hat eigene Entscheidungsschwellen','Bei ärztlich diagnostiziertem, klinisch relevantem RLS werden nach AASM Ferritin ≤75 ng/ml oder TSAT <20 % für die Entscheidung über Eisen berücksichtigt. Das ist kein allgemeiner Mangelnachweis und keine automatische Infusionsindikation.','rls'));
  if (answers.recent === 'yes' || risks.includes('overload')) return {code,title,intro,sections,urgent:false};
  sections.push(item('Was jetzt sinnvoll ist','Besprechen Sie Ursachen wie Blutverlust, starke Menstruation, Ernährung oder Aufnahmestörungen. Bei Männern und nach der Menopause ist ungeklärter Eisenmangel besonders sorgfältig abzuklären. Behandlung und Kontrollen richten sich nach dem gesamten Befund.','agaDiagnosis'));
  return {code,title,intro,sections,urgent:false};
}

export function evaluateIntake(answers) {
  if (answers.warning === 'acute') return acuteResult();
  const sections = [];
  const issues = [];
  if (answers.group !== 'adult') return {code:'special',title:'Bitte die Einnahme individuell besprechen.',intro:'Dieser Einnahmecheck ist für Erwachsene außerhalb von Schwangerschaft und Wochenbett gedacht. In Ihrer Situation gelten besondere Empfehlungen. Ändern Sie Dosis und Rhythmus nicht anhand dieses Checks.',sections,urgent:false};
  if (answers.taking === 'no') return {code:'not-taking',title:'Der Check ist für eine bereits begonnene orale Eisenbehandlung gedacht.',intro:'Bitte beginnen Sie nicht allein wegen Müdigkeit oder eines Checkergebnisses mit Eisen. Zuerst sollten Indikation und geeignete Behandlung geklärt werden.',sections,urgent:false};
  if (answers.confirmed !== 'yes') sections.push(item('Zuerst klären, warum Sie Eisen nehmen','Ob ein Mangel tatsächlich vorliegt und ob die gewählte Dosis dazu passt, ist noch unklar. Lassen Sie die Indikation prüfen, bevor Sie mehr einnehmen.','ash','attention'));
  if (answers.warning === 'bleeding') sections.push(item('Blutung oder auffällige Beschwerden prüfen','Neue Blutungszeichen, teerartiger klebriger Stuhl oder ausgeprägte Bauchschmerzen gehören ärztlich beurteilt. Dunkler Stuhl durch Eisen allein kann harmlos sein; eine Blutung wird damit aber nicht ausgeschlossen.','agaDiagnosis','attention'));
  if (answers.adherence !== 'regular') { issues.push('Regelmäßigkeit'); sections.push(item('Einnahme gelingt nicht regelmäßig','Vergessene Einnahmen, Pausen oder Absetzen wegen Nebenwirkungen können den Erfolg begrenzen. Eine durchhaltbare Behandlung ist wichtiger als ein theoretisch perfekter Plan. Nicht doppelt nachnehmen, ohne die Präparatehinweise zu beachten.','agaTreatment','attention')); }
  if (answers.dose === 'unknown') { issues.push('Elementares Eisen unklar'); sections.push(item('Was bedeutet die Milligrammzahl?','Prüfen Sie die Menge an elementarem Eisen pro Einnahme. Sie ist nicht dasselbe wie das Gewicht der Eisenverbindung. Packung oder Beipackzettel beim Arzt- oder Apothekengespräch zeigen.','dosing','attention')); }
  if (answers.schedule === 'multiple') { issues.push('Mehrere Tagesdosen'); sections.push(item('Mehrere Einnahmen pro Tag überprüfen','Die AGA empfiehlt orales Eisen höchstens einmal täglich. Gerade klassische Eisensalze können Hepcidin erhöhen und damit weitere Dosen schlechter nutzbar machen. Wenn mehrere Tagesdosen verordnet wurden, besprechen Sie das Schema, statt es eigenständig umzustellen.','agaTreatment','attention')); }
  if (answers.dose === '60plus' && answers.type === 'salt' && answers.schedule === 'daily') {
    sections.push(item('Ab 60 mg: tägliche oder alternierende Einnahme besprechen','Bei klassischen Eisensalzen zeigen Absorptionsstudien ab etwa 60 mg elementarem Eisen einen Hepcidinanstieg, der die Aufnahme einer weiteren Dosis am Folgetag vermindern kann. Eine Einzeldosis jeden zweiten Tag ist deshalb eine gut begründete Option. Tägliche Einnahme ist nach AGA trotzdem nicht automatisch falsch. Entscheidend sind Anämie, gewünschte Geschwindigkeit, Verträglichkeit und Verordnung.','dosing'));
  } else sections.push(item('Was Hepcidin für den Rhythmus bedeutet','Hepcidin reguliert den Eisenübertritt ins Blut. Orales Eisen kann es vorübergehend erhöhen. Ein alternierendes Schema kann Aufnahme und Verträglichkeit unterstützen, besonders bei klassischen Eisensalzen. Es ist aber keine starre Regel für jedes Präparat und jede Dosis.','hepcidin'));
  if (answers.schedule === 'alternate') sections.push(item('Jeden zweiten Tag ist eine anerkannte Option','Das passt zu einem möglichen alternierenden Behandlungsschema. Es bestätigt nicht automatisch, dass Ihre individuelle Dosis oder Indikation richtig ist.','agaTreatment'));
  if (answers.dose === 'under60') sections.push(item('Unter 60 mg ist nicht automatisch zu wenig','Auch niedrigere Dosen können passend sein. Ob die Menge reicht, hängt von Präparat, Mangel, Verträglichkeit und Verlauf ab. Der Check gibt keine Mindestdosis vor.','agaTreatment'));
  if (answers.food === 'with' || answers.food === 'under30' || answers.food === 'unknown') {
    issues.push('Mahlzeitenabstand');
    sections.push(item('Nüchtern wird klassisches Eisen meist besser aufgenommen','Mit einer Mahlzeit kann weniger Eisen aufgenommen werden. Als Beispiel kommen morgens mindestens 30 Minuten vor dem Essen oder abends mindestens zwei, praktisch oft zwei bis drei Stunden nach der letzten Mahlzeit infrage. Beachten Sie immer die Hinweise Ihres Präparats. Bei Magenproblemen kann Einnahme mit Essen bewusst sinnvoller sein als Absetzen.','nhsTiming','attention'));
  } else sections.push(item('Ihr Mahlzeitenabstand ist grundsätzlich plausibel','Mindestens 30 Minuten vor dem Essen oder mindestens zwei Stunden danach passt zur nüchternen Einnahme vieler klassischer Präparate. Die abendliche Variante ist eine praktische Alternative, aber nicht erwiesenermaßen für jede Frau genauso günstig wie die morgendliche. Eine zusätzliche Abenddosis nach einer Morgendosis ist damit nicht gemeint.','nhsTiming'));
  const blockers = answers.blockers || [];
  if (blockers.includes('coffee') || blockers.includes('calcium')) { issues.push('Kaffee, Tee oder Calcium'); sections.push(item('Kaffee, Tee und Calcium zeitlich trennen','Kaffee, Tee und calciumreiche Lebensmittel oder Präparate können die Aufnahme klassischer Eisensalze beeinträchtigen. Ein Abstand von etwa zwei Stunden ist eine praktische Orientierung; die Präparatehinweise bleiben maßgeblich. Es geht um den Abstand, nicht um ein Verbot dieser Lebensmittel.','nhsTiming','attention')); }
  if (blockers.includes('minerals')) { issues.push('Mineralstoffabstand'); sections.push(item('Magnesium und Zink nicht gleichzeitig einplanen','Mineralstoffpräparate und Antazida können mit Eisen wechselwirken; Eisen kann auch die Zinkaufnahme beeinträchtigen. Planen Sie getrennte Einnahmezeiten, häufig mindestens zwei Stunden Abstand, abhängig vom Präparat.','interactions','attention')); }
  if (blockers.includes('medication')) { issues.push('Medikamentenabstand'); sections.push(item('Medikamente brauchen einen eigenen Abstandsplan','Bei Levothyroxin und bestimmten Antibiotika gelten präparatespezifische Abstände, die länger sein können als zwei Stunden. Lassen Sie Apotheke oder Praxis die Kombination prüfen. Nicht alle Medikamente nach derselben Zwei-Stunden-Regel behandeln.','interactions','attention')); }
  if (blockers.includes('ppi')) sections.push(item('Säureblocker können eine Rolle spielen','Protonenpumpenhemmer können die Eisenaufnahme bei manchen Menschen beeinträchtigen. Bitte nicht einfach absetzen; Indikation, Präparat und Verlauf gemeinsam prüfen.','agaTreatment'));
  sections.push(item(answers.vitamin === 'yes' ? 'Vitamin C: möglich, aber kein Erfolgsbeweis' : 'Vitamin C fehlt: nicht automatisch ein Einnahmefehler','Die AGA 2024 empfiehlt Vitamin C zur Unterstützung der Aufnahme. Eine randomisierte Studie fand jedoch vergleichbare Verbesserungen von Hb und Ferritin mit Eisen allein. Vitamin C ist daher eine mögliche Ergänzung, aber keine zwingende Voraussetzung für einen Anstieg. Fehlendes Vitamin C erklärt das Ausbleiben einer Wirkung nicht automatisch.','vitaminC'));
  if (answers.tolerance !== 'good') { issues.push('Verträglichkeit'); sections.push(item('Nebenwirkungen sind ein wichtiger Teil des Plans','Übelkeit, Bauchschmerzen, Verstopfung oder Durchfall können dazu führen, dass Eisen nicht regelmäßig genommen wird. Besprechen Sie einen verträglichen Rhythmus, gegebenenfalls ein anderes Präparat oder eine andere Therapie. Die teuerste Form ist nicht automatisch die wirksamste.','agaTreatment','attention')); }
  if (answers.duration === 'early') sections.push(item('Nach kurzer Zeit ist Ferritin noch kein verlässliches Erfolgsurteil','In den ersten Wochen kann sich bei einer Anämie zunächst die Blutbildung verbessern, bevor die Speicher deutlich steigen. Der Kontrollzeitpunkt wird mit der Praxis geplant. Es gibt keinen festen Ferritinanstieg pro eingenommenen Milligramm.','agaTreatment'));
  if (answers.response === 'flat' && answers.duration !== 'early') sections.push(item('Ferritin steigt trotz Behandlung nicht: systematisch weiterprüfen','Wenn der Kontrollzeitpunkt passt und die Einnahme gelingt, müssen fortbestehender Blutverlust, Entzündung, Zöliakie, andere Aufnahmestörungen, Operationen und Medikamente geprüft werden. Fehlender Anstieg ist nicht automatisch Ihre Schuld. Unter passenden Voraussetzungen kann intravenöses Eisen besprochen werden; ein Monat ohne Anstieg allein legt keine Infusion fest.','agaTreatment','attention'));
  if (answers.response === 'unknown' || answers.duration === 'unknown') sections.push(item('Verlauf und Kontrolltermin klären','Ohne bekannte Behandlungsdauer und vergleichbare Verlaufslabore lässt sich fehlendes Ansprechen nicht sicher beurteilen. Fragen Sie nach dem geplanten Kontrolltermin und danach, ob zunächst Hb, Ferritin oder beides verfolgt werden soll.','agaTreatment'));
  if ((answers.conditions || []).length) sections.push(item('Ihre Begleitumstände sind zusätzlich wichtig','Starke Blutungen, entzündliche Erkrankungen, Zöliakie oder Magen-Darm-Operationen können Wirkung und Behandlungsweg verändern. Ein guter Einnahmeabstand allein behebt diese Ursachen nicht.','agaTreatment','attention'));
  return {code:issues.length?'review':'no-obvious',title:issues.length?'Hier gibt es Punkte, die Sie bei der Einnahme prüfen können.':'Aus Ihren Angaben fällt kein eindeutiger Einnahmefehler auf.',intro:issues.length?`Besonders relevant: ${issues.join(', ')}. Das sind mögliche Ansatzpunkte, kein Beweis für die Ursache eines niedrigen Ferritins. Ändern Sie eine ärztliche Verordnung nicht eigenständig.`:'Eine gut geplante Einnahme schließt Blutverlust, Entzündung oder Aufnahmestörungen nicht aus. Wenn die Werte nicht reagieren, sollte die Ursache ärztlich geprüft werden.',sections,urgent:false};
}
