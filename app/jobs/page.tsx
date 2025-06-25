import { Metadata } from "next";

const title = 'Karriere'
const description = "Werden Sie Teil unseres Teams bei Praxis Jona"
const url = "/jobs"

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        type: 'website',
        url: url,
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 600,
                alt: 'Praxis Jona'
            }
        ],
    },
    alternates: {
        canonical: url,
        languages: {
            de: url,
        }
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: ['/images/og-image.png']
    }
}

export default function Page() {
    return (
        <div className="bg-white mt-2 sm:mt-10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">{title}</h1>
                    <p className="mt-2 text-lg leading-8 text-primaryLighter">{description}</p>
                </div>
                
                <div className="mt-16 space-y-16">
                    {/* Job Listing */}
                    <article className="max-w-4xl mx-auto">
                        <div className="rounded-2xl bg-lightBeige bg-opacity-40 p-8 sm:p-10">
                            <h2 className="text-2xl font-serif font-semibold text-primary mb-8">
                                Praxismanagerin für Organisation & Patientenkommunikation (m/w/d)
                            </h2>
                            
                            <div className="prose prose-lg max-w-none text-primaryLighter">
                                <div className="mb-8 pb-8 border-b border-gray-300">
                                    <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                                        Werde Teil unserer Praxis in Berlin Mitte!
                                    </h3>
                                    <p className="mb-4">
                                        Bist du bereit für eine aufregende neue Herausforderung im Herzen Berlins? Möchtest du Teil eines Teams sein, das sich mit Leidenschaft der ganzheitlichen Medizin verschrieben hat und wirklich etwas bewegt? Dann bist du bei Praxis Jona genau richtig!
                                    </p>
                                    <p>
                                        Wir sind eine moderne, internistische Praxis direkt am Rosenthaler Platz, die sich darauf konzentriert, die Ursachen von Gesundheitsproblemen zu finden und individuelle Behandlungspläne zu erstellen. Bei uns erwartet dich ein dynamisches Umfeld, in dem innovative Diagnostik und patientenzentrierte Versorgung Hand in Hand gehen. Wenn du nicht nur einen Job suchst, sondern eine echte Berufung, bei der du jeden Tag einen Unterschied im Leben unserer Patienten machen kannst – dann lies weiter!
                                    </p>
                                </div>

                                <div className="mb-8 pb-8 border-b border-gray-300">
                                    <h3 className="text-xl font-serif font-semibold text-primary mb-4">Aufgabenbereich</h3>
                                    <p className="mb-4">
                                        Die Praxismanagerin übernimmt eine zentrale koordinierende Funktion in unserer internistisch-hausärztlichen Praxis mit Spezialisierung auf Lipidologie und Ernährungsmedizin. Zu ihren Aufgaben zählen insbesondere:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Organisation, Steuerung und kontinuierliche Optimierung aller internen Praxisabläufe (z. B. Terminmanagement, Sprechstundenkoordination, Hausbesuchsplanung)</li>
                                        <li>Koordination und Umsetzung von Ernährungs- und Präventionsprogrammen in enger Zusammenarbeit mit dem ärztlichen Team</li>
                                        <li>Entwicklung und Durchführung von Patientenbildungsangeboten, insbesondere zu den Themen Lipidstoffwechsel, metabolisches Syndrom und Ernährung</li>
                                        <li>Betreuung und kultursensible Kommunikation mit dem albanisch- und englischsprachigen Patient:innenstamm zur Verbesserung von Compliance und Gesundheitsverständnis</li>
                                        <li>Unterstützung bei Abrechnungsvorgängen, statistischer Auswertung, Material- und Sprechstundenbedarfsplanung</li>
                                        <li>Strategische Weiterentwicklung der Praxis, u. a. durch den Aufbau strukturierter Gesundheitsprogramme</li>
                                        <li>Qualitätsmanagement (inkl. Entwicklung und Dokumentation von Arbeitsprozessen)</li>
                                        <li>Planung von Investitionen und Beschaffung von Praxisinventar</li>
                                        <li>Führung und Einsatzplanung des nichtärztlichen Personals (inkl. Auswahl, Einstellung, Entwicklung und ggf. Trennung)</li>
                                        <li>Anleitung, Supervision und jährliche Zielvereinbarungsgespräche mit Medizinischen Fachangestellten (MFA)</li>
                                        <li>Erstellung der Urlaubs- und Einsatzpläne</li>
                                        <li>Sicherstellung und Kontrolle der Einhaltung aller geltenden Hygienevorschriften</li>
                                    </ul>
                                </div>

                                <div className="mb-8 pb-8 border-b border-gray-300">
                                    <h3 className="text-xl font-serif font-semibold text-primary mb-4">Anforderungsprofil</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Abgeschlossenes Hochschulstudium im Bereich Biologie, Chemie oder einer vergleichbaren naturwissenschaftlichen Fachrichtung</li>
                                        <li>Mehrjährige Leitungserfahrung, idealerweise mit Verantwortung für Personal und Organisation</li>
                                        <li>Ausgezeichnete Organisationsfähigkeiten, Verantwortungsbewusstsein und ausgeprägte soziale Kompetenz</li>
                                        <li>Fließende Sprachkenntnisse in Albanisch und gute Kenntnisse in Englisch</li>
                                        <li>Idealerweise Erfahrung im medizinisch-therapeutischen Umfeld oder Interesse an ernährungsmedizinischen Themen</li>
                                    </ul>
                                </div>

                                <div className="mb-8 pb-8 border-b border-gray-300">
                                    <h3 className="text-xl font-serif font-semibold text-primary mb-4">Das bieten wir Ihnen</h3>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Exzellente Verkehrsanbindung:</strong> Unsere Praxis befindet sich zentral in Berlin und ist mit öffentlichen Verkehrsmitteln schnell und bequem erreichbar.</li>
                                        <li><strong>Feste Arbeitszeiten – keine Wochenendarbeit:</strong> Geregelte Arbeitszeiten von Montag bis Freitag sorgen für Planbarkeit und Work-Life-Balance.</li>
                                        <li><strong>28 Urlaubstage pro Jahr:</strong> Erholung ist uns wichtig – deshalb bieten wir überdurchschnittlichen Urlaubsanspruch.</li>
                                        <li><strong>Attraktive Mitarbeiterrabatte:</strong> Zugang zu exklusiven Vergünstigungen in den Bereichen Mode, Technik und Veranstaltungen.</li>
                                        <li><strong>Strukturierte Einarbeitung & kontinuierliche Unterstützung:</strong> Ein kollegiales, interdisziplinäres Team steht Ihnen zur Seite – von Anfang an.</li>
                                        <li><strong>Wertschätzende Arbeitsatmosphäre:</strong> Wir leben eine offene, respektvolle Zusammenarbeit in einem modernen, patientenzentrierten Umfeld.</li>
                                    </ul>
                                </div>

                                <div className="bg-white rounded-lg p-6 mt-8">
                                    <h3 className="text-xl font-serif font-semibold text-primary mb-4">Haben wir Ihr Interesse geweckt?</h3>
                                    <p className="mb-4">
                                        Dann freuen wir uns auf Ihre Bewerbung mit Angabe Ihres frühestmöglichen Eintrittstermins und Ihrer Gehaltsvorstellung.
                                    </p>
                                    <p>
                                        Bitte senden Sie Ihre Unterlagen per E-Mail an Praxis Jona unter{' '}
                                        <a href="mailto:info@praxisjona.de" className="text-primary font-semibold underline hover:text-primaryDarker">
                                            info@praxisjona.de
                                        </a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}