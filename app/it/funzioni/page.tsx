import Image from "next/image";
import { Metadata } from "next";
import Hero1 from "/public/images/features/hero1.jpg";
import Hero2 from "/public/images/features/hero2.jpg";
import Hero3 from "/public/images/features/hero3.jpg";
import Hero4 from "/public/images/features/hero4.jpg";
import Hero5 from "/public/images/features/hero5.jpg";


const title = 'Funzioni'
const description = "Visualizza le funzioni che MoneyCoach ha da offrire. Esplora l'applicazione e scopri come può aiutarti a gestire il vostro denaro, a fare un bilancio e a tenere traccia delle vostre spese."

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/it/funzioni',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 600,
        alt: 'MoneyCoach app screenshot'
      }
    ],
  },
  alternates: {
    canonical: '/features',
    languages: {
      en: "/features",
      it: "/it/funzioni",
      de: "/de/features"
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/images/og-image.png']
  }
}

// features list with title, description, and image from the Features() component
const features = [
  {
    title: "Multi-Valuta",
    description:
      "MoneyCoach è perfetto per chi ha conti in più valute. Scopri quanto è il tuo patrimonio netto, convertito in tempo reale.",
    image: "/images/features/multicurrencyFeature.png",
  },
  {
    title: "Budget Personalizzabili",
    description:
      "Sei in vacanza? Viaggio d'affari? Vacanze imminenti? Crea un budget, rispetta il budget e risparmia di più!",
    image: "/images/features/budgetsFeature.png",
  },
  {
    title: "Gestisci le Carte di Credito",
    description:
      "Traccia e gestisci le tue carte di credito. Imposta promemoria di pagamento per non dover mai pagare gli interessi della carta e altro ancora.",
    image: "/images/features/creditCardFeature.png",
  },
  {
    title: "Obiettivi Personalizzabili",
    description:
      "Crea un obiettivo personalizzato e inizia il tuo percorso per raggiungerlo. Acquista la console dei tuoi sogni, il laptop, l'auto o persino la casa. MoneyCoach è qui per aiutarti.",
    image: "/images/features/goalsFeature.png",
  },
  {
    title: "Scorciatoie Siri",
    description:
      "Crea scorciatoie per aggiungere rapidamente i tuoi movimenti di routine o per chiedere a Siri il tuo patrimonio netto.",
    image: "/images/features/siriFeature.png",
  },
  {
    title: "Widgets & Live Activities",
    description:
      "Dai un'occhiata al tuo budget residuo per evitare di spendere troppo o per motivarti a risparmiare di più e a realizzare i tuoi sogni più velocemente.",
    image: "/images/features/widgetsFeature.png",
  },
  {
    title: "Allegati",
    description:
      "Allega informazioni aggiuntive come: Immagini, PDF, note, parole chiave, ecc. a un movimento inserito in MoneyCoach.",
    image: "/images/features/attachmentsFeature.png",
  },
  {
    title: "Importa Apple Card CSV",
    description:
      "È sufficiente un solo tocco per importare gli estratti conto della Apple Card in un file CSV. MoneyCoach importerà e categorizzerà automaticamente i movimenti della Apple Card.",
    image: "/images/features/appleCardFeature.png",
  },
  {
    title: "Modifica in Blocco dei Movimenti",
    description:
      "Seleziona movimenti per modificarli rapidamente in blocco. È possibile cancellarli rapidamente o modificarne la data, il conto e persino la categoria in un colpo solo.",
    image: "/images/features/bulkFeature.png",
  },
  {
    title: "Academia MoneyCoach",
    description:
      "Una serie di lezioni finanziarie curate che vi insegneranno dalle basi della gestione del denaro con il budget a come prepararvi per un'eventuale emergenza futura.",
    image: "/images/features/academyFeature.png",
  },
  {
    title: "Navigazione Semplicee",
    description:
      "Il nuovo menu principale consente di raggiungere qualsiasi punto dell'applicazione e di fare praticamente tutto. La barra delle carte è stata sostituita da una barra laterale per una navigazione migliore e più rapida.",
    image: "/images/features/navigationFeature.png",
  },
  {
    title: "Menu Contestuali",
    description:
      "Cliccando con il tasto destro del mouse su molti elementi diversi, si ottengono azioni specifiche per il contesto che possono essere eseguite rapidamente sul posto. Nascondi le carte, modifica o cancella movimenti, budget e molto altro ancora.",
    image: "/images/features/menuFeature.png",
  },
  {
    title: "Altamente Personalizzabile",
    description:
      "MoneyCoach può essere personalizzato a piacimento. Mostra o nascondi le carte sommario, ordinale come preferisci, cambia il tema, l'icona dell'app e altro ancora.",
    image: "/images/features/personalizeFeature.png",
  },
  {
    title: "Barre Laterali",
    description: "La maggior parte delle schermate è stata arricchita da barre laterali che trasformano completamente e migliorano drasticamente la navigazione nelle diverse schede.",
    image: "/images/features/sidebarFeature.png",
  },

  {
    image: '/images/features/darkModeFeature.png',
    title: 'Modalita Oscura',
    description: 'MoneyCoach supporta una vera modalità oscura e ha un aspetto straordinario.'
  },
  {
    image: '/images/features/keyboardFeature.png',
    title: 'Scorciatoie da Tastiera',
    description: 'Aggiungi rapidamente nuove spese, entrate, trasferimenti e molto altro con le scorciatoie da tastiera.'
  },
  {
    image: '/images/features/syncFeature.png',
    title: 'Sincronizzazione Universale',
    description: 'MoneyCoach è disponibile su tutti i dispositivi Apple. Sincronizza i tuoi dati tra iPhone, iPad, Apple Watch, HomePod e infine Mac.'
  },
  {
    image: '/images/features/csvFeature.png',
    title: 'Importazione ed Esportazione CSV',
    description: 'In MoneyCoach è possibile importare i dati da qualsiasi app precedente o da un estratto conto bancario tramite CSV.'
  },
  {
    image: '/images/features/notificationsFeature.png',
    title: 'Notifiche Intelligenti',
    description: 'Ricevi promemoria delle fatture e altre notifiche per essere sempre al corrente dei tuoi dati finanziari.'
  },
  {
    image: '/images/features/securityFeature.png',
    title: 'Privato e Sicuro',
    description: "MoneyCoach non richiede il login, quindi i tuoi dati sono sempre al sicuro. Accedi all'app tramite TouchID o FaceID."
  },
  {
    image: '/images/features/backupFeature.png',
    title: 'Backup e Ripristino',
    description: 'Esegui manualmente il backup o il ripristino dei tuoi dati dove e quando vuoi. Perfetto quando acquisti un nuovo dispositivo Apple.'
  },
  {
    image: '/images/features/reportFeature.png',
    title: 'Rapporti Dettagliati',
    description: "Capisci dove vanno a finire i tuoi soldi con l'aiuto dei report dettagliati. Filtra i conti che vuoi vedere o nascondi quelli che non vuoi."
  },
  {
    image: '/images/features/watchFeature.png',
    title: 'Apple Watch App',
    description: 'Con MoneyCoach sul tuo Apple Watch, puoi aggiungere nuovi movimenti in modo facile e veloce, controllare i saldi e vedere quali sono i prossimi impegni.'
  },
  // {
  //   image: '/images/features/calendarFeature.png',
  //   title: 'Calendario Utile',
  //   description: 'Il calendario è un ottimo modo per vedere i prossimi movimenti. Puoi aggiungere rapidamente nuovi movimenti, controllare i saldi e vedere quali sono le prossime scadenze.'
  // },
  {
    image: '/images/features/payeesFeature.png',
    title: 'Persone e Aziende',
    description: 'Tieni traccia di tutti i tuoi beneficiari e delle aziende con cui fai affari. Questa funzione è perfetta per tenere traccia di quanto hai speso, prestato o dovuto a un determinato beneficiario o azienda.'
  }
];

export default function Features() {
  return (
    <>

      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-6 sm:pt-16 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Scopri tutte le funzioni <br/>di MoneyCoach</h1>
              <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">MoneyCoach si limita all'essenziale per la finanza. Le funzioni avanzate non sono presenti fino a quando non ne hai effettivamente bisogno.</p>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div
                className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <Image src={Hero1} placeholder="blur" alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                  </div>
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <Image src={Hero2} alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                  </div>
                </div>
                <div className="relative">
                  <Image src={Hero3} alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                  </div>
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <Image src={Hero5} alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                  </div>
                </div>
                <div className="relative">
                  <Image src={Hero4} alt=""
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {features.map((feature, index) => (
              <li key={index}>
                <Image
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={feature.image}
                  width={306}
                  height={204}
                  alt={feature.description}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
