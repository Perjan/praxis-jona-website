"use client"

import { CloudArrowUpIcon, LockClosedIcon, ArrowPathIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline'
const { Panel: DialogPanel, Title: DialogTitle } = Dialog;



export default function Example() {

    const schwerpunktes = [
        {
            name: 'Schilddrüse',
            id: '1',
            description:
                'Die Schilddrüse, ein kleines, schmetterlingsförmiges Organ im Halsbereich, spielt eine zentrale Rolle für unseren Stoffwechsel. Sie produziert Hormone, die für zahlreiche Körperfunktionen wichtig sind, wie die Regulation der Körpertemperatur, des Energiehaushalts und des Herzschlags.',
            descriptionRest: '\n\n Eine Fehlfunktion der Schilddrüse kann vielfältige Symptome verursachen und beeinträchtigt das Wohlbefinden erheblich. Die häufigsten Erkrankungen sind Hypothyreose (z.B. Hashimoto), Hyperthyreose (z.B. M. Basedow) und Schilddrüsenknoten. Die Schilddrüsendiagnostik ist entscheidend, um solche Erkrankungen frühzeitig zu erkennen und zu behandeln.\n\n\n\n Wir bieten:\n\n - Blutuntersuchungen\n\n Überprüfung der Schilddrüsenhormone im Blut, um die Funktion der Schilddrüse zu beurteilen.\n\n - Ultraschalluntersuchung\n\n Eine bildgebende Methode, um die Größe, Struktur und mögliche Knoten oder Zysten in der Schilddrüse zu erkennen.\n\n\n\n Die frühzeitige Diagnose und adäquate Behandlung von Schilddrüsenerkrankungen können die Lebensqualität signifikant verbessern.',
            image: '/images/throat.jpg',
            icon: CloudArrowUpIcon,
        },
        {
            name: 'Bluthochdruck',
            id: '2',
            description:
                'Hypertonie, auch bekannt als Bluthochdruck, ist eine weit verbreitete Erkrankung, die das Risiko für schwerwiegende Gesundheitsprobleme wie Herzinfarkt, Schlaganfall, Herzinsuffizienz und Nierenerkrankungen erhöht. Da Hypertonie häufig ohne offensichtliche Symptome verläuft, wird sie oft als „stiller Killer“ bezeichnet.',
            descriptionRest: '\n\n Die Diagnose von Hypertonie basiert primär auf der Messung des Blutdrucks. Wir bieten 24h-Langzeitblutdruckmessungen an, jedoch die regelmäßige Kontrolle zu Hause kann zusätzliche Informationen liefern und zur Therapieüberwachung beitragen.\n\n\n\n Zusätzlich können wir weitere Untersuchungen wie\n\n - Bluttests\n\n - Urinanalysen\n\n - Herz-Kreislauf-Untersuchungen\n\n\n\n Um mögliche Ursachen des hohen Blutdrucks zu ermitteln und Folgeschäden zu beurteilen. Eine frühzeitige Diagnose und Behandlung von Hypertonie ist essentiell, um das Risiko schwerwiegender Komplikationen zu minimieren.',
            image: '/images/blood-pressure.jpeg',
            icon: LockClosedIcon,
        },
        {
            name: 'Fettstoffwechselstörungen',
            id: '3',
            description:
                'Fettstoffwechselstörungen, auch Dyslipidämien genannt, bezeichnen eine Gruppe von Erkrankungen, bei denen es zu einer Abweichung der Blutfettwerte von der Norm kommt. Diese Störungen können das Risiko für Herz-Kreislauf-Erkrankungen wie Herzinfarkt und Schlaganfall erhöhen, da abnormale Fettwerte zur Bildung von Plaques in den Arterien führen können, die das Risiko einer Arterienverkalkung (Atherosklerose) erhöhen.',
            descriptionRest: '\n\n Die Diagnostik von Fettstoffwechselstörungen erfolgt hauptsächlich durch Blutuntersuchungen, die Aufschluss über die verschiedenen Fettwerte im Blut geben.\n\n\n\n Unsere Leistungen:\n\n - Lipidprofil: Dieser Test misst Gesamtcholesterin, LDL-Cholesterin, HDL-Cholesterin und Triglyceride. Es ist oft empfehlenswert, für diesen Test nüchtern zu sein.\n\n\n - Weitere Blutuntersuchungen: Je nach Befund können zusätzliche Bluttests angeordnet werden, um zugrunde liegende Ursachen oder assoziierte Erkrankungen zu erkennen, wie Diabetes, Schilddrüsenstörungen oder Nierenerkrankungen.\n\n - Beratung über Änderungen des Lebensstils, wie eine gesunde Ernährung, regelmäßige körperliche Aktivität, Gewichtsmanagement und Rauchentwöhnung.\n\n\n\n Da Fettstoffwechselstörungen oft keine direkten Symptome verursachen, ist die regelmäßige medizinische Kontrolle entscheidend, um mögliche Risiken frühzeitig zu erkennen und zu behandeln.',
            image: '/images/metabolism.jpeg',
            icon: ArrowPathIcon,
        },
    ]

    const [expanded, setExpanded] = useState({});
    const [open, setOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleScrollToProduct = (id) => {
        const schwerpunkte = schwerpunktes.find(p => p.id === id);
        setSelectedProduct(schwerpunkte);
        setOpen(true);
        const element = document.getElementById(`details-${id}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      };

    const toggleExpanded = (name) => {
        setExpanded(prevExpanded => ({
            ...prevExpanded,
            [name]: !prevExpanded[name]
        }));
    };
    return (
        <div className="bg-white py-24 sm:py-32">
            <Transition show={open}>
        <Dialog className="relative z-50" onClose={() => setOpen(false)}>
          <Transition.Child
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0" />
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-0 sm:pl-8">

                <Transition.Child
                  className="my-auto"
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >


                  <DialogPanel className="pointer-events-auto w-screen max-w-2xl">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <DialogTitle className="text-lg font-semibold leading-6 text-primary">
                            {selectedProduct?.name}
                          </DialogTitle>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-primaryLighter hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                              onClick={() => setOpen(false)}
                            >
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              <span className="sr-only">Close panel</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6 text-primaryLighter">
                        <p>{selectedProduct?.description}</p>
                        {selectedProduct?.descriptionRest.split('\n\n').map((text, i) => (
                                    <span key={i} className="text-base leading-7 text-primaryLighter">
                                        {text}
                                        <br />
                                    </span>
                                ))}
                      </div>
                    </div>
                  </DialogPanel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-serif tracking-tight text-primary sm:text-4xl">Schwerpunkte</h2>
                    <p className="mt-6 text-lg leading-8 text-primaryLighter">
                        Besondere Schwerpunkte unserer Praxis sind die Behandlung von Bluthochdruck, Fettstoffwechselstörungen und Ernährungsmedizin.
                    </p>
                </div>

                <ul role="list" className=" mt-8 space-y-4 overflow-visible">
                    {schwerpunktes.map((schwerpunkte) => (
                        <li
                            key={schwerpunkte.id}
                            className="relative flex flex-col gap-y-8 px-4 py-5 rounded-xl bg-lightBeige bg-opacity-30 hover:bg-lightBeige sm:px-6 lg:px-8"
                        >
                            <a href={`#details-${schwerpunkte.id}`} onClick={(e) => {
                        e.preventDefault();
                        handleScrollToProduct(schwerpunkte.id);
                      }}>
                            <div className="flex justify-between">
                                <p className="text-2xl font-medium font-serif leading-6 text-primary">
                                    {schwerpunkte.name}
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-md leading-6 text-primaryLighter break-words">{schwerpunkte.description}</p>
                            </div>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* <ul
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
                                <button onClick={() => toggleExpanded(schwerpunkte.name)} className="text-primary hover:text-primaryDarker font-semibold mt-4 transition duration-300 ease-in-out">
                                    {expanded[schwerpunkte.name] ? 'Schließen' : 'Weiterlesen'}
                                </button>
                            )}
                        </li>
                    ))}
                </ul> */}
            </div>
        </div>
    )
}