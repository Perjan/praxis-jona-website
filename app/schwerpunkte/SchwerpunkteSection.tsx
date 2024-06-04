"use client"
import { useState } from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ArrowPathIcon } from '@heroicons/react/20/solid'

const schwerpunktes = [
    {
        name: 'Schilddrüse',
        description:
            'Die Schilddrüse, ein kleines, schmetterlingsförmiges Organ im Halsbereich, spielt eine zentrale Rolle für unseren Stoffwechsel. Sie produziert Hormone, die für zahlreiche Körperfunktionen wichtig sind, wie die Regulation der Körpertemperatur, des Energiehaushalts und des Herzschlags.',
        descriptionRest: '\n\n Eine Fehlfunktion der Schilddrüse kann vielfältige Symptome verursachen und beeinträchtigt das Wohlbefinden erheblich. Die häufigsten Erkrankungen sind Hypothyreose (z.B. Hashimoto), Hyperthyreose (z.B. M. Basedow) und Schilddrüsenknoten. Die Schilddrüsendiagnostik ist entscheidend, um solche Erkrankungen frühzeitig zu erkennen und zu behandeln.\n\n\n\n Wir bieten:\n\n - Blutuntersuchungen\n\n Überprüfung der Schilddrüsenhormone im Blut, um die Funktion der Schilddrüse zu beurteilen.\n\n - Ultraschalluntersuchung\n\n Eine bildgebende Methode, um die Größe, Struktur und mögliche Knoten oder Zysten in der Schilddrüse zu erkennen.\n\n\n\n Die frühzeitige Diagnose und adäquate Behandlung von Schilddrüsenerkrankungen können die Lebensqualität signifikant verbessern.',
        image: '/images/throat.jpg',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Bluthochdruck',
        description:
            'Hypertonie, auch bekannt als Bluthochdruck, ist eine weit verbreitete Erkrankung, die das Risiko für schwerwiegende Gesundheitsprobleme wie Herzinfarkt, Schlaganfall, Herzinsuffizienz und Nierenerkrankungen erhöht. Da Hypertonie häufig ohne offensichtliche Symptome verläuft, wird sie oft als „stiller Killer“ bezeichnet.',
        descriptionRest: '\n\n Die Diagnose von Hypertonie basiert primär auf der Messung des Blutdrucks. Wir bieten 24h-Langzeitblutdruckmessungen an, jedoch die regelmäßige Kontrolle zu Hause kann zusätzliche Informationen liefern und zur Therapieüberwachung beitragen.\n\n\n\n Zusätzlich können wir weitere Untersuchungen wie\n\n - Bluttests\n\n - Urinanalysen\n\n - Herz-Kreislauf-Untersuchungen\n\n\n\n um mögliche Ursachen des hohen Blutdrucks zu ermitteln und Folgeschäden zu beurteilen. Eine frühzeitige Diagnose und Behandlung von Hypertonie ist essentiell, um das Risiko schwerwiegender Komplikationen zu minimieren.',
        image: '/images/blood-pressure.jpeg',
        icon: LockClosedIcon,
    },
    {
        name: 'Fettstoffwechselstörungen',
        description:
            'Fettstoffwechselstörungen, auch Dyslipidämien genannt, bezeichnen eine Gruppe von Erkrankungen, bei denen es zu einer Abweichung der Blutfettwerte von der Norm kommt. Diese Störungen können das Risiko für Herz-Kreislauf-Erkrankungen wie Herzinfarkt und Schlaganfall erhöhen, da abnormale Fettwerte zur Bildung von Plaques in den Arterien führen können, die das Risiko einer Arterienverkalkung (Atherosklerose) erhöhen.',
        descriptionRest: '\n\n Die Diagnostik von Fettstoffwechselstörungen erfolgt hauptsächlich durch Blutuntersuchungen, die Aufschluss über die verschiedenen Fettwerte im Blut geben.\n\n\n\n Unsere Leistungen:\n\n - Lipidprofil: Dieser Test misst Gesamtcholesterin, LDL-Cholesterin, HDL-Cholesterin und Triglyceride. Es ist oft empfehlenswert, für diesen Test nüchtern zu sein.\n\n\n - Weitere Blutuntersuchungen: Je nach Befund können zusätzliche Bluttests angeordnet werden, um zugrunde liegende Ursachen oder assoziierte Erkrankungen zu erkennen, wie Diabetes, Schilddrüsenstörungen oder Nierenerkrankungen.\n\n - Beratung über Änderungen des Lebensstils, wie eine gesunde Ernährung, regelmäßige körperliche Aktivität, Gewichtsmanagement und Rauchentwöhnung.\n\n\n\n Da Fettstoffwechselstörungen oft keine direkten Symptome verursachen, ist die regelmäßige medizinische Kontrolle entscheidend, um mögliche Risiken frühzeitig zu erkennen und zu behandeln.',
        image: '/images/metabolism.jpeg',
        icon: ArrowPathIcon,
    },
]

export default function Example() {
    const [expanded, setExpanded] = useState({});

    const toggleExpanded = (name) => {
        setExpanded(prevExpanded => ({
            ...prevExpanded,
            [name]: !prevExpanded[name]
        }));
    };
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-serif tracking-tight text-gray-900 sm:text-4xl">Schwerpunkte</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Besondere Schwerpunkte unserer Praxis sind die Behandlung von Bluthochdruck, Fettstoffwechselstörungen und Ernährungsmedizin.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                >
                    {schwerpunktes.map((schwerpunkte) => (
                        <li key={schwerpunkte.name}>
                            <img className="aspect-[3/2] w-full rounded-2xl object-cover" src={schwerpunkte.image} alt="" />
                            <h3 className="mt-6 text-2xl font-serif leading-8 tracking-tight text-gray-900">{schwerpunkte.name}</h3>
                            <p className="text-base mt-4 leading-7 text-gray-600">{schwerpunkte.description}</p>

                            <div style={{ maxHeight: expanded[schwerpunkte.name] ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.5s ease-in-out' }}>
                                {schwerpunkte.descriptionRest.split('\n\n').map((text, i) => (
                                    <span key={i} className="text-base leading-7 text-gray-600">
                                        {text}
                                        <br />
                                    </span>
                                ))}
                            </div>
                            {schwerpunkte.descriptionRest.split('\n\n').length > 1 && (
                                <button onClick={() => toggleExpanded(schwerpunkte.name)} className="text-blue-500 mt-4">
                                    {expanded[schwerpunkte.name] ? 'Schließen' : 'Weiterlesen'}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}