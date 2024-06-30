"use client"

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import { bool } from 'sharp';

const { Panel: DialogPanel, Title: DialogTitle } = Dialog;

export default function ServicesSection() {

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
      name: 'Botulinumtoxin',
      href: '#2',
      imageSrc: '/images/leistungen/botox.png',
      description: "Botulinumtoxin, oft als Botox bezeichnet, ist ein Neurotoxin, das von dem Bakterium Clostridium botulinum produziert wird. Die Injektion von Botulinumtoxin in einen Muskel führt zu einer temporären Lähmung dieses Muskels. Dies verhindert Muskelkontraktionen, entspannt den Muskel und glättet die darüberliegende Haut, wodurch Falten reduziert werden. Die Wirkung ist vorübergehend und erfordert regelmäßige Nachbehandlungen, um den Effekt aufrechtzuerhalten. \n\n\n\n** Verwendung und Anwendungen\n\n**1. Ästhetische Medizin:\n\n - Faltenbehandlung: Botox wird verwendet, um mimische Falten wie Zornesfalten, Stirnfalten und Krähenfüße zu glätten, indem es die Muskelkontraktionen verringert.\n\n - Gesichtsstraffung: Es kann auch in anderen Bereichen des Gesichts eingesetzt werden, um ein jüngeres Aussehen zu erzielen.\n\n\n\n**2. Medizinische Anwendungen:\n\n - Hyperhidrose (übermäßiges Schwitzen): Botox kann in die Haut von Achseln, Händen, Füßen oder anderen Bereichen injiziert werden, um die Schweißproduktion zu reduzieren.\n\n - Migräne: Bei chronischen Migränepatienten kann Botox helfen, die Häufigkeit und Schwere der Kopfschmerzen zu verringern.\n\n - Spastizität und Muskelkrämpfe: Es wird zur Behandlung von Muskelspastizität bei Zuständen wie Zähneknirschen (Bruxismus) verwendet.\n\n\n\n** Nach der Behandlung:\n\n Patienten wird geraten, für 3-4 Tage auf körperliche Aktivitäten wie Sport, Schwimmen und Saunabesuche zu verzichten.\n\n Es ist wichtig, die Injektionsstellen nicht zu massieren oder unnötigem Druck auszusetzen, um eine unerwünschte Ausbreitung des Toxins zu vermeiden."
    },
    {
      id: 3,
      name: 'Diagnostik der Bauchorgane (Abdomensonographie)',
      href: '#3',
      imageSrc: '/images/leistungen/abdomen.png',
      description: "Die Ultraschalluntersuchung des Bauchraums dient der Diagnose und Überwachung verschiedener Erkrankungen. Mit dieser Methode können die Größe, Struktur und Position von Bauchorganen wie Leber, Gallenblase, Milz, Nieren, Pankreas, Prostata, Lymphknoten, Bauchaorta, Harnblase und Darm beurteilt werden. Für eine optimale Untersuchung sollte man nüchtern sein, um Darmgasüberlagerungen zu vermeiden und eine gefüllte Gallenblase zu gewährleisten."
    },
    {
      id: 4,
      name: 'Labordiagnostik',
      href: '#4',
      imageSrc: '/images/leistungen/lab.png',
      description: "In unserer Praxis führen wir neben Anamnese und körperlicher Untersuchung falls notwendig auch ein breites Spektrum an Laboruntersuchungen durch. Dies umfasst Standardtests für akute und chronische Erkrankungen sowie spezielle Blutanalysen, wie Mikronährstoff- und Vitaminbestimmungen, Darmmikrobiomanalyse. Wir beraten Sie gerne ausführlich dazu."
    },
    {
      id: 5,
      name: 'Check-up',
      href: '#5',
      imageSrc: '/images/leistungen/checkupPremium.png',
      description: "Ab 35 Jahre besteht die Möglichkeit alle 3 Jahre eine Vorsorgeuntersuchung durchführen zu lassen. Zusätzlich gibt es jetzt die Möglichkeit, dass Versicherte einmalig zwischen ihrem 18. und 35. Geburtstag einen Check-up in Anspruch nehmen können.\n\n\nVon der gesetzlichen Krankenkasse wird übernommen\n\n- Anamnese\n\n- körperliche Untersuchung\n\n- Ruhe-EKG\n\n- Beratung 15 Minuten\n\n- Labor (Blutbild, Eisen, Cholesterinwert, Leber-, Schilddrüsen- und Nierenwerte, Nüchtern Blutzucker, HbA1C, UrinStix)\n\n- Männer ab 50 Jahren: Zwei Darmspiegelungen im Abstand von 10 Jahren, Test auf verborgenes Blut alle zwei Jahre\n\n- Frauen ab 55 Jahren: Zwei Darmspiegelungen im Abstand von 10 Jahren, Test auf verborgenes Blut alle zwei Jahre\n\n- Ab 65 Jahren einmalig Ultraschall der Bauchaorta zur Früherkennung der Bauchaortenaneurysma\n\n\n\n**Zusätzliches Labor (für Selbstzahler, Berechnung nach der GOÄ)\n\n- Spurenelemente, Vitamin D, sowie Hormonspiegel\n\n- Parameter des Immunsystems, Blutgruppe\n\n- Auswertung der Befunde und Beratung bezüglich Nahrungsergänzungsmittel.\n\n\nSprechen Sie uns an und wir beraten Sie gerne dazu."
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
      description: "Wir betreuen Sie auch bei Ihren hausärztlichen Problemen. Unsere Praxis bietet ein breites Spektrum an Diagnoseverfahren, wodurch zusätzliche Arztbesuche oft unnötig werden. Einige Leistungen können wir nur als Selbst- oder Privatzahler abrechnen. Hierzu beraten wir Sie gerne."
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

  const [open, setOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleScrollToProduct = (id) => {
    const product = products.find(p => p.id === id);
    setSelectedProduct(product);
    setOpen(true);
    const element = document.getElementById(`details-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="bg-white">
      <Transition show={open}>
        <Dialog className="relative z-50" onClose={() => setOpen(false)}>
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                <div className="absolute right-0 top-0 pr-4 pt-6 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 max-w-3xl text-center sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" className="text-base font-semibold text-primary">
                    {selectedProduct?.name}
                    </DialogTitle>
                    <div className="relative mt-6 flex-1 text-primaryLighter">
                        <div className="overflow-y-auto max-h-[500px] lg:max-h-[800px]">
                          {selectedProduct?.description.split(/\n{2}/).map((text, i) => (
                            <span key={i} className="text-base text-primaryLighter">
                              {text.split(/\n/).map((line, j) => (
                                <span key={j}>
                                  {line.startsWith('##') ? <h2>{line.substring(2)}</h2> : line.startsWith('**') ? <strong>{line.substring(2)}</strong> : line}
                                  <br />
                                </span>
                              ))}
                            </span>
                          ))}

                        </div>
                      </div>
                  </div>
                </div>
              </DialogPanel>
            </Transition.Child>
          </div>
        </div>
        </Dialog>
      </Transition>
      <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
          <h2 className="text-4xl font-serif tracking-tight text-primary">Leistungen</h2>
        </div>

        <div className="relative mt-8">
          <div className="relative -mb-6 w-full overflow-x-auto pb-6">
            <ul
              role="list"
              className="mx-4 grid grid-cols-1 gap-y-16 sm:mx-6 md:grid-cols-2 lg:mx-0 lg:grid-cols-4 lg:gap-x-8"
            >
              {products.map((product) => (
                <li key={product.id} className="flex w-full flex-col text-center">
                  <div className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-[rgba(249,237,223,0.3)]">
                      <a href={`#details-${product.id}`} onClick={(e) => {
                        e.preventDefault();
                        handleScrollToProduct(product.id);
                      }}>
                        <Image
                          src={product.imageSrc}
                          alt={product.name}
                          width={280}
                          height={210}
                          className="w-3/4 h-auto object-cover object-center group-hover:opacity-75 mx-auto"
                        />
                      </a>
                    </div>
                    <div className="mt-6">
                      <h3 className="mt-1 text-lg font-semibold font-serif text-primary">
                        <a href={`#details-${product.id}`} onClick={(e) => {
                          e.preventDefault();
                          handleScrollToProduct(product.id);
                        }}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      {product.id == 2 && <span className='bg-primaryDarker px-4 py-1 rounded-xl text-sm font-bold text-white'>Demnächst</span>}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="overflow-hidden py-8 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul
              role="list"
              className="mx-auto grid max-w-2xl grid-cols-1 gap-y-8 sm:gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-1"
            >
              {products.map((product, index) => (
                <li key={product.id} className={`grid grid-cols-1 ${index % 2 === 0 ? 'bg-white' : ''} w-full rounded-lg overflow-hidden`} id={`details-${product.id}`} style={{ backgroundColor: index % 2 !== 0 ? 'rgba(249, 237, 223, 0.3)' : '' }}>
                  <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="w-full sm:w-1/3">
                      <img
                        src={product.imageSrc}
                        alt="Product screenshot"
                        className="w-3/4 h-auto mx-auto object-cover"
                      />
                    </div>
                    <div className="w-full sm:w-2/3 p-4 sm:p-0">
                      <div className="lg:max-w-2xl py-8">
                        <p className="mt-2 text-xl font-medium font-serif tracking-normal text-primary sm:text-2xl">{product.name}</p>
                        <h3 className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-primaryLighter" dangerouslySetInnerHTML={{ __html: product.description.replace(/\n\n/g, '<br>') }}></h3>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </div >

  )
}
