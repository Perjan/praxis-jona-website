"use client"

import { CloudArrowUpIcon, LockClosedIcon, ArrowPathIcon } from '@heroicons/react/20/solid'
import { Dialog, Transition } from '@headlessui/react';
const { Panel: DialogPanel, Title: DialogTitle } = Dialog;

import { ChevronRightIcon } from '@heroicons/react/20/solid'; // Import the ChevronRightIcon component


export default function Page() {

  const schwerpunktes = [
    {
      name: 'Schilddrüse',
      id: '1',
      description:
        'Die Schilddrüse, ein kleines, schmetterlingsförmiges Organ im Halsbereich, spielt eine zentrale Rolle für unseren Stoffwechsel. Sie produziert Hormone (T4, T3 und Calcitonin), die für zahlreiche Körperfunktionen wichtig sind, wie die Regulation der Körpertemperatur, der Energiehaushalt und der Herzschlag.',
      descriptionRest: '\n\n Eine Fehlfunktion der Schilddrüse kann vielfältige Symptome verursachen und beeinträchtigt das Wohlbefinden erheblich. Die häufigsten Erkrankungen sind Hypothyreose (z.B. Hashimoto), Hyperthyreose (z.B. M. Basedow) und Schilddrüsenknoten. Die Schilddrüsendiagnostik ist entscheidend, um solche Erkrankungen frühzeitig zu erkennen und zu behandeln.\n\n\n\n Wir bieten:\n\n - Blutuntersuchungen\n\n Überprüfung der Schilddrüsenhormone im Blut, um die Funktion der Schilddrüse zu beurteilen.\n\n - Ultraschalluntersuchung\n\n Eine bildgebende Methode, um die Größe, Struktur und mögliche Knoten oder Zysten in der Schilddrüse zu erkennen.\n\n\n\n Die frühzeitige Diagnose und adäquate Behandlung von Schilddrüsenerkrankungen können die Lebensqualität signifikant verbessern.',
      url: '/schwerpunkte/schilddruse',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Bluthochdruck',
      id: '2',
      description:
        'Hypertonie, auch bekannt als Bluthochdruck, ist eine weit verbreitete Erkrankung, die das Risiko für schwerwiegende Gesundheitsprobleme wie Herzinfarkt, Schlaganfall, Herzinsuffizienz und Nierenerkrankungen erhöht. Da Hypertonie häufig ohne offensichtliche Symptome verläuft, wird sie oft als „stiller Killer“ bezeichnet.',
      descriptionRest: '\n\n Die Diagnose von Hypertonie basiert primär auf der Messung des Blutdrucks. Wir bieten 24h-Langzeitblutdruckmessungen an, jedoch die regelmäßige Kontrolle zu Hause kann zusätzliche Informationen liefern und zur Therapieüberwachung beitragen.\n\n\n\n Zusätzlich können wir weitere Untersuchungen wie\n\n - Bluttests\n\n - Urinanalysen\n\n - Herz-Kreislauf-Untersuchungen\n\n\n\n Um mögliche Ursachen des hohen Blutdrucks zu ermitteln und Folgeschäden zu beurteilen. Eine frühzeitige Diagnose und Behandlung von Hypertonie ist essentiell, um das Risiko schwerwiegender Komplikationen zu minimieren.',
      url: '/schwerpunkte/bluthochdruck',
      icon: LockClosedIcon,
    },
    {
      name: 'Fettstoffwechselstörungen',
      id: '3',
      description:
        'Fettstoffwechselstörungen, auch Dyslipidämien genannt, bezeichnen eine Gruppe von Erkrankungen, bei denen es zu einer Abweichung der Blutfettwerte von der Norm kommt. Diese Störungen können das Risiko für Herz-Kreislauf-Erkrankungen wie Herzinfarkt und Schlaganfall erhöhen, da abnormale Fettwerte zur Bildung von Plaques in den Arterien führen können, die das Risiko einer Arterienverkalkung (Arteriosklerose) erhöhen.',
      descriptionRest: '\n\n Die Diagnostik von Fettstoffwechselstörungen erfolgt hauptsächlich durch Blutuntersuchungen, die Aufschluss über die verschiedenen Fettwerte im Blut geben.\n\n\n\n Unsere Leistungen:\n\n - Lipidprofil: Dieser Test misst Gesamtcholesterin, LDL-Cholesterin, HDL-Cholesterin und Triglyceride. Es ist oft empfehlenswert, für diesen Test nüchtern zu sein.\n\n\n - Weitere Blutuntersuchungen: Je nach Befund können zusätzliche Bluttests angeordnet werden, um zugrunde liegende Ursachen oder assoziierte Erkrankungen zu erkennen, wie Diabetes, Schilddrüsenstörungen oder Nierenerkrankungen.\n\n - Beratung über Änderungen des Lebensstils, wie eine gesunde Ernährung, regelmäßige körperliche Aktivität, Gewichtsmanagement und Rauchentwöhnung.\n\n\n\n Da Fettstoffwechselstörungen oft keine direkten Symptome verursachen, ist die regelmäßige medizinische Kontrolle entscheidend, um mögliche Risiken frühzeitig zu erkennen und zu behandeln.',
      url: '/schwerpunkte/fettstoffwechselstorungen',
      icon: ArrowPathIcon,
    },
    {
      name: 'Ernährungsmedizin',
      id: '4',
      description:
        'Übergewicht ist ein zunehmendes Gesundheitsproblem, das viele Menschen in der modernen Gesellschaft betrifft. Sie kann zu einer Vielzahl von Gesundheitsproblemen führen, darunter Herz-Kreislauf-Erkrankungen, Diabetes Typ 2, Gelenkprobleme und ein erhöhtes Risiko für bestimmte Krebsarten.',
      descriptionRest: '\n\n Die Diagnostik von Fettstoffwechselstörungen erfolgt hauptsächlich durch Blutuntersuchungen, die Aufschluss über die verschiedenen Fettwerte im Blut geben.\n\n\n\n Unsere Leistungen:\n\n - Lipidprofil: Dieser Test misst Gesamtcholesterin, LDL-Cholesterin, HDL-Cholesterin und Triglyceride. Es ist oft empfehlenswert, für diesen Test nüchtern zu sein.\n\n\n - Weitere Blutuntersuchungen: Je nach Befund können zusätzliche Bluttests angeordnet werden, um zugrunde liegende Ursachen oder assoziierte Erkrankungen zu erkennen, wie Diabetes, Schilddrüsenstörungen oder Nierenerkrankungen.\n\n - Beratung über Änderungen des Lebensstils, wie eine gesunde Ernährung, regelmäßige körperliche Aktivität, Gewichtsmanagement und Rauchentwöhnung.\n\n\n\n Da Fettstoffwechselstörungen oft keine direkten Symptome verursachen, ist die regelmäßige medizinische Kontrolle entscheidend, um mögliche Risiken frühzeitig zu erkennen und zu behandeln.',
      url: '/schwerpunkte/ernahrungsmedizin',
      icon: ArrowPathIcon,
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0">
          <h1 className="text-3xl font-serif tracking-tight text-primary sm:text-4xl">Schwerpunkte</h1>
          <p className="mt-6 text-lg leading-8 text-primaryLighter">
            Besondere Schwerpunkte unserer Praxis sind die Behandlung von Schilddrüsenerkrankungen, Bluthochdruck, Fettstoffwechselstörungen und Ernährungsmedizin.
          </p>
        </div>

        <ul role="list" className="mt-8 space-y-4 overflow-visible">
          {schwerpunktes.map((schwerpunkte) => (
            <li
              key={schwerpunkte.id}
              className="relative flex items-center gap-4 px-4 py-5 rounded-xl bg-lightBeige hover:bg-primary hover:bg-opacity-20 sm:px-6 lg:px-8 transition duration-300"
            >
              <a href={schwerpunkte.url} onClick={(e) => { }} className="flex justify-between items-center w-full">
                <div className="flex flex-col w-full">
                  <h3 className="text-2xl font-medium font-serif leading-6 text-primary">
                    {schwerpunkte.name}
                  </h3>
                  <p className="text-md pt-2 leading-6 pr-8 text-primaryLighter break-words">{schwerpunkte.description}</p>
                </div>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-6 w-6 text-primary" /> {/* Add the ChevronRightIcon */}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}