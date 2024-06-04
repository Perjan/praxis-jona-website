const products = [
  {
    id: 1,
    name: 'Akutsprechstunde',
    href: '#1',
    imageSrc: '/images/leistungen/acuteEmergency.png',
    description: "In unserer Praxis steht für unsere Patienten eine Akutsprechstunde zur Verfügung. Wir bemühen uns stets, die Wartezeiten so gering wie möglich zu halten, möchten jedoch darauf hinweisen, dass es gelegentlich zu Verzögerungen kommen kann. Für den Fall, dass Sie an einer ansteckenden Krankheit leiden oder Fieber haben, bitten wir Sie, dies bereits bei der Terminvereinbarung anzugeben. So können wir sicherstellen, dass angemessene Vorsichtsmaßnahmen ergriffen werden, um die Gesundheit aller unserer Patienten und des Praxisteams zu schützen."
  },
  {
    id: 2,
    name: 'Ernährungsberatung',
    href: '#2',
    imageSrc: '/images/leistungen/nutrition.png',
    description: "Übergewicht ist ein zunehmendes Gesundheitsproblem, das viele Menschen in der modernen Gesellschaft betrifft. Sie kann zu einer Vielzahl von Gesundheitsproblemen führen, darunter Herz-Kreislauf-Erkrankungen, Diabetes Typ 2, Gelenkprobleme und ein erhöhtes Risiko für bestimmte Krebsarten. Die Ursachen für Übergewicht sind vielfältig und umfassen genetische Faktoren, Lebensstilentscheidungen wie unzureichende Bewegung und unausgewogene Ernährung, sowie psychologische Komponenten wie Stress und emotionales Essen.\n\n\n\n Eine erfolgreiche Behandlung von Übergewicht erfordert oft eine umfassende Herangehensweise, die eine gesündere Ernährung, regelmäßige körperliche Aktivität und gegebenenfalls psychologische Unterstützung umfasst. Das Ziel ist nicht nur die Gewichtsreduktion, sondern auch die Förderung eines langfristig gesunden und ausgewogenen Lebensstils. Dafür beraten und betreuen wir Sie gern."
  },
  {
    id: 3,
    name: 'Diagnostik der Bauchorgane (Abdomensonographie)',
    href: '#3',
    imageSrc: '/images/leistungen/abdomen.png',
    description: "Die Ultraschalluntersuchung des Bauchraums dient der Diagnose und Überwachung verschiedener Erkrankungen. Mit dieser Methode können die Größe, Struktur und Position von Bauchorganen wie Leber, Gallenblase, Milz, Nieren, Pankreas, Prostata, Lymphknoten, Bauchaorta, Harnblase, Gebärmutter und Darm beurteilt werden. Für eine optimale Untersuchung sollte man nüchtern sein, um Darmgasüberlagerungen zu vermeiden und eine gefüllte Gallenblase zu gewährleisten. "
  },
  {
    id: 4,
    name: 'Labordiagnostik',
    href: '#4',
    imageSrc: '/images/leistungen/lab.png',
    description: "In unserer Praxis führen wir neben Anamnese und körperlicher Untersuchung falls notwendig auch ein breites Spektrum an Laboruntersuchungen durch. Dies umfasst Standardtests für akute und chronische Erkrankungen sowie spezielle Blutanalysen, wie Mikronährstoff- und Vitaminbestimmungen, Tumor-Markern. Wir beraten Sie gerne ausführlich dazu."
  },
  {
    id: 5,
    name: 'Check-up',
    href: '#5',
    imageSrc: '/images/leistungen/checkupPremium.png',
    description: "- Anamnese\n\n - körperliche Untersuchung\n\n - Labor (Blutbild, Cholesterin (HDL,LDL-Cholesterin) Triglyceride, Leberwerte, Bauchspeicheldrüsenwerte, Nierenwerte, Harnsäure, Schilddrüsenwerte, Nüchtern-Blutzucker und HbA1C (Früherkennung Diabetes mellitus), Elektrolyte, Urinstatus und eventuell Eisen, Vitamin B12, Vitamin D, Folsäure, Zink\n\n - EKG bzw. Belastungs-EKG zur Früherkennung von Erkrankungen der Herzkranzgefäße\n\n - Abdomensonographie: Ultraschall der Leber und Gallenblase, der Nieren, der Bauchspeicheldrüse, der Milz und der großen Gefäße\n\n - Ggf. bei Risikofaktoren wie Rauchen: Lungenfunktionsuntersuchung\n\n - Auswertung und Beratung"
  },
  {
    id: 6,
    name: 'Impfungen',
    href: '#6',
    imageSrc: '/images/leistungen/syringe.png',
    description: "Wir überprüfen mit Ihnen gemeinsam nach den STIKO Empfehlungen bestehende Impflücken oder Auffrischimpfungen. Es wird allen Erwachsenen empfohlen, den Impfschutz alle 10 Jahre überprüfen zu lassen und ab 60 Jahre alt jährlich Grippe-, Pneumokokken- und Covid-19 Impfung sowie einmalig Gürtelrose-Impfung. Hierzu beraten wir Sie gerne ausführlich. Bringen Sie den Impfausweis gern mit zu Ihrem Termin in die Praxis und lassen Sie den Impfstatus checken."
  },
  {
    id: 7,
    name: 'Hausärztliche Versorgung',
    href: '#7',
    imageSrc: '/images/leistungen/medpack.png',
    description: "Wir betreuen Sie auch bei Ihren hausärztlichen Problemen. Unsere Praxis bietet ein breites Spektrum an Diagnoseverfahren, wodurch zusätzliche Arztbesuche oft unnötig werden. Einige Leistungen können wir nur als Selbst- oder Privatzahler abrechnen. Hierzu beraten wir Sie gerne.\n\n\n\n Für die Untersuchung von Herz, Kreislauf und Lunge im Rahmen der kardiopulmonalen Diagnostik können folgende Methoden verwendet werden:\n\n - Ruhe-EKG\n\n - Belastungs-EKG (Ergometrie)\n\n - 24 Stunden-Blutdruckmessung\n\n - Lungenfunktionsuntersuchung\n\n - Ultraschall der Venen und Arterien im Bereich der Extremitäten und der hirnversorgenden Gefäße"
  },
  // {
  //   id: 8,
  //   name: 'Check-up (alle drei Jahre) bei Frauen und Männern ab dem Alter von 35 Jahren',
  //   href: '#',
  //   imageSrc: '/images/leistungen/checkup.png',
  //   description: "Hinweis: Zusätzlich gibt es jetzt die Möglichkeit, dass Versicherte einmalig zwischen ihrem 18. und 35. Geburtstag einen Check-up in Anspruch nehmen können.\n\n\n\n Übernahme von der gesetzlichen Krankenkasse\n\n - Anamnese\n\n - körperliche Untersuchung\n\n - Ruhe-EKG\n\n - Beratung\n\n - Labor (Blutbild, Eisen, Cholesterinwert, Leber- und Nierenwerte, Nüchtern Blutzucker, UrinStix)\n\n - Männer ab 50 Jahren: Zwei Darmspiegelungen im Abstand von 10 Jahren, Test auf verborgenes Blut alle zwei Jahre\n\n - Frauen ab 55 Jahren: Zwei Darmspiegelungen im Abstand von 10 Jahren, Test auf verborgenes Blut alle zwei Jahre\n\n - Ab 65 Jahren einmalig Ultraschall der Bauchaorta zur Früherkennung der Bauchaortenaneurysma\n\n\n\n Zusätzliches Labor (für Selbstzahler, Berechnung nach der GOÄ)\n\n - Schilddrüsen- , Vitamin B12-, Vitamin D- werte, sowie Hormonspiegel\n\n - Parameter des Immunsystems, Blutgruppe\n\n\n\n Apparative Untersuchung (für Selbstzahler, Berechnung nach der GOÄ)\n\n - Intervall-Check-up Laboruntersuchungen (seit dem 01.04.2019 zahlen die gesetzlichen Krankenkassen die Vorsorgeuntersuchung /Check up 35+ nur noch alle 3 Jahre. Daher empfehle ich einen Laborcheck zur Hälfte der Zeit (nach 1,5 Jahren).\n\n - EKG, Belastungs-EKG\n\n - Lungenfunktionstest\n\n - Körperfettmessung\n\n - Ernährungsberatung\n\n - Ultraschall der Bauchorgane\n\n - Ultraschall der Schilddrüse"
  // },
  // More products...
]

//import Services from 'app/leistungen/ServicesDataSource'

export default function ServicesSection() {
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-4xl font-serif tracking-tight text-gray-900">Leistungen</h2>
        </div>

        <div className="relative mt-8 hidden sm:block"> {/* Hide on mobile */}
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 gap-y-16 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
            >
              {products.map((product) => (
                <li key={product.id} className="inline-flex w-64 flex-col text-center lg:w-auto" id={`product-${product.id}`}>
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md" style={{ backgroundColor: 'rgba(239, 219, 178, 0.3)' }}>
                      <a href={`#product-${product.id}`}>
                        <img
                          src={product.imageSrc}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </a>
                    </div>
                    <div className="mt-6">
                      <h3 className="mt-1 font-semibold font-serif text-gray-900">
                        <a href={`#product-${product.id}`}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="overflow-hidden py-8 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul
              role="list"
              className="mx-auto grid max-w-2xl grid-cols-1 gap-y-8 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-1"
            >
              {products.map((product, index) => (
                <li key={product.id} className={`grid grid-cols-1 ${index % 2 === 0 ? 'bg-white' : ''} w-full rounded-lg overflow-hidden`} id={`product-${product.id}`} style={{ backgroundColor: index % 2 !== 0 ? 'rgba(239, 219, 178, 0.3)' : '' }}>
                  <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="w-full sm:w-1/3">
                      <img
                        src={product.imageSrc}
                        alt="Product screenshot"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="w-full sm:w-2/3 p-4 sm:p-0">
                      <div className="lg:max-w-2xl py-8">
                        <p className="mt-2 text-xl font-serif tracking-tight text-gray-900 sm:text-2xl">{product.name}</p>
                        <h3 className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-500" dangerouslySetInnerHTML={{ __html: product.description.replace(/\n\n/g, '<br>') }}></h3>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div >
  )
}
