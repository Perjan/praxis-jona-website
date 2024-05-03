export interface Service {
    id: number;
    name: string;
    href: string;
    imageSrc: string;
    description: string;
}

export const Services: Service[] = [
    {
        id: 1,
        name: 'Akutsprechstunde',
        href: '#',
        imageSrc: '/images/leistungen/openhours.png',
        description: "In unserer Praxis steht für unsere Patienten eine Akutsprechstunde zur Verfügung. Wir bemühen uns stets, die Wartezeiten so gering wie möglich zu halten, möchten jedoch darauf hinweisen, dass es gelegentlich zu Verzögerungen kommen kann. Für den Fall, dass Sie an einer ansteckenden Krankheit leiden oder Fieber haben, bitten wir Sie, dies bereits bei der Terminvereinbarung anzugeben. So können wir sicherstellen, dass angemessene Vorsichtsmaßnahmen ergriffen werden, um die Gesundheit aller unserer Patienten und des Praxisteams zu schützen."
      },
      {
          id: 2,
          name: 'Ernährungsberatung',
          href: '#',
          imageSrc: '/images/leistungen/nutrition.png',
          description: "Übergewicht ist ein zunehmendes Gesundheitsproblem, das viele Menschen in der modernen Gesellschaft betrifft. Sie kann zu einer Vielzahl von Gesundheitsproblemen führen, darunter Herz-Kreislauf-Erkrankungen, Diabetes Typ 2, Gelenkprobleme und ein erhöhtes Risiko für bestimmte Krebsarten. Die Ursachen für Übergewicht sind vielfältig und umfassen genetische Faktoren, Lebensstilentscheidungen wie unzureichende Bewegung und unausgewogene Ernährung, sowie psychologische Komponenten wie Stress und emotionales Essen.\n\n\n\n Eine erfolgreiche Behandlung von Übergewicht erfordert oft eine umfassende Herangehensweise, die eine gesündere Ernährung, regelmäßige körperliche Aktivität und gegebenenfalls psychologische Unterstützung umfasst. Das Ziel ist nicht nur die Gewichtsreduktion, sondern auch die Förderung eines langfristig gesunden und ausgewogenen Lebensstils. Dafür beraten und betreuen wir Sie gern."
        },
        {
          id: 3,
          name: 'Diagnostik der Bauchorgane (Abdomensonographie)',
          href: '#',
          imageSrc: '/images/leistungen/abdomen.png',
          description: "Die Ultraschalluntersuchung des Bauchraums dient der Diagnose und Überwachung verschiedener Erkrankungen. Mit dieser Methode können die Größe, Struktur und Position von Bauchorganen wie Leber, Gallenblase, Milz, Nieren, Pankreas, Prostata, Lymphknoten, Bauchaorta, Harnblase, Gebärmutter und Darm beurteilt werden. Für eine optimale Untersuchung sollte man nüchtern sein, um Darmgasüberlagerungen zu vermeiden und eine gefüllte Gallenblase zu gewährleisten. "
        },
        {
          id: 4,
          name: 'Labordiagnostik',
          href: '#',
          imageSrc: '/images/leistungen/lab.png',
          description: "In unserer Praxis führen wir neben Anamnese und körperlicher Untersuchung falls notwendig auch ein breites Spektrum an Laboruntersuchungen durch. Dies umfasst Standardtests für akute und chronische Erkrankungen sowie spezielle Blutanalysen, wie Mikronährstoff- und Vitaminbestimmungen, Tumor-Markern. Wir beraten Sie gerne ausführlich dazu."
        },
        {
          id: 5,
          name: 'Check-up ab 35 Jahren für private Krankenversicherung und Selbstzahler',
          href: '#',
          imageSrc: '/images/leistungen/checkupPremium.png',
          description: "- Anamnese\n\n - körperliche Untersuchung\n\n - Labor (Blutbild, Cholesterin (HDL,LDL-Cholesterin) Triglyceride, Leberwerte, Bauchspeicheldrüsenwerte, Nierenwerte, Harnsäure, Schilddrüsenwerte, Nüchtern-Blutzucker und HbA1C (Früherkennung Diabetes mellitus), Elektrolyte, Urinstatus und eventuell Eisen, Vitamin B12, Vitamin D, Folsäure, Zink\n\n - EKG bzw. Belastungs-EKG zur Früherkennung von Erkrankungen der Herzkranzgefäße\n\n - Abdomensonographie: Ultraschall der Leber und Gallenblase, der Nieren, der Bauchspeicheldrüse, der Milz und der großen Gefäße\n\n - Ggf. bei Risikofaktoren wie Rauchen: Lungenfunktionsuntersuchung\n\n - Auswertung und Beratung"
        },
        {
          id: 6,
          name: 'Impfungen',
          href: '#',
          imageSrc: '/images/leistungen/syringe.png',
          description: "Wir überprüfen mit Ihnen gemeinsam nach den STIKO Empfehlungen bestehende Impflücken oder Auffrischimpfungen. Es wird allen Erwachsenen empfohlen, den Impfschutz alle 10 Jahre überprüfen zu lassen und ab 60 Jahre alt jährlich Grippe-, Pneumokokken- und Covid-19 Impfung sowie einmalig Gürtelrose-Impfung. Hierzu beraten wir Sie gerne ausführlich. Bringen Sie den Impfausweis gern mit zu Ihrem Termin in die Praxis und lassen Sie den Impfstatus checken."
        },
        {
          id: 7,
          name: 'Hausärztliche Versorgung',
          href: '#',
          imageSrc: '/images/leistungen/medpack.png',
          description: "Wir betreuen Sie auch bei Ihren hausärztlichen Problemen. Unsere Praxis bietet ein breites Spektrum an Diagnoseverfahren, wodurch zusätzliche Arztbesuche oft unnötig werden. Einige Leistungen können wir nur als Selbst- oder Privatzahler abrechnen. Hierzu beraten wir Sie gerne.\n\n\n\n Für die Untersuchung von Herz, Kreislauf und Lunge im Rahmen der kardiopulmonalen Diagnostik können folgende Methoden verwendet werden:\n\n - Ruhe-EKG\n\n - Belastungs-EKG (Ergometrie)\n\n - 24 Stunden-Blutdruckmessung\n\n - Lungenfunktionsuntersuchung\n\n - Ultraschall der Venen und Arterien im Bereich der Extremitäten und der hirnversorgenden Gefäße"
        },
        {
          id: 8,
          name: 'Check-up (alle drei Jahre) bei Frauen und Männern ab dem Alter von 35 Jahren',
          href: '#',
          imageSrc: '/images/leistungen/checkup.png',
          description: "Hinweis: Zusätzlich gibt es jetzt die Möglichkeit, dass Versicherte einmalig zwischen ihrem 18. und 35. Geburtstag einen Check-up in Anspruch nehmen können.\n\n\n\n Übernahme von der gesetzlichen Krankenkasse\n\n - Anamnese\n\n - körperliche Untersuchung\n\n - Ruhe-EKG\n\n - Beratung\n\n - Labor (Blutbild, Eisen, Cholesterinwert, Leber- und Nierenwerte, Nüchtern Blutzucker, UrinStix)\n\n - Männer ab 50 Jahren: Zwei Darmspiegelungen im Abstand von 10 Jahren, Test auf verborgenes Blut alle zwei Jahre\n\n - Frauen ab 55 Jahren: Zwei Darmspiegelungen im Abstand von 10 Jahren, Test auf verborgenes Blut alle zwei Jahre\n\n - Ab 65 Jahren einmalig Ultraschall der Bauchaorta zur Früherkennung der Bauchaortenaneurysma\n\n\n\n Zusätzliches Labor (für Selbstzahler, Berechnung nach der GOÄ)\n\n - Schilddrüsen- , Vitamin B12-, Vitamin D- werte, sowie Hormonspiegel\n\n - Parameter des Immunsystems, Blutgruppe\n\n\n\n Apparative Untersuchung (für Selbstzahler, Berechnung nach der GOÄ)\n\n - Intervall-Check-up Laboruntersuchungen (seit dem 01.04.2019 zahlen die gesetzlichen Krankenkassen die Vorsorgeuntersuchung /Check up 35+ nur noch alle 3 Jahre. Daher empfehle ich einen Laborcheck zur Hälfte der Zeit (nach 1,5 Jahren).\n\n - EKG, Belastungs-EKG\n\n - Lungenfunktionstest\n\n - Körperfettmessung\n\n - Ernährungsberatung\n\n - Ultraschall der Bauchorgane\n\n - Ultraschall der Schilddrüse"
        },
]