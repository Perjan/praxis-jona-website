import Image from "next/image";
import { Metadata } from "next";
import Hero1 from "/public/images/features/hero1.jpg";
import Hero2 from "/public/images/features/hero2.jpg";
import Hero3 from "/public/images/features/hero3.jpg";
import Hero4 from "/public/images/features/hero4.jpg";
import Hero5 from "/public/images/features/hero5.jpg";


const title = 'Funktionen'
const description = "Sieh dir einige der Funktionen an, die MoneyCoach zu bieten hat. Erkunde die App und erfahre, wie sie dir helfen kann, dein Geld zu verwalten, ein Budget zu erstellen und deine Ausgaben zu verfolgen."

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/de/funktionen',
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
      de: "/de/funktionen"
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
    title: "Familien Synchronisierung",
    description:
      "Teile deine Daten mit deiner Frau, deinem Mann, deinem Partner oder anderen Nutzern, die unterschiedliche Apple IDs verwenden.",
    image: "/images/features/familySyncFeature.png",
  },
  {
    title: "Kreditkarten verwalten",
    description:
      "Verfolge und verwalte deine Kreditkartenkonten. Richte Zahlungserinnerungen ein, damit du nie Kartenzinsen zahlen musst und vieles mehr.",
    image: "/images/features/creditCardFeature.png",
  },
  {
    title: "Apple Pay Integration",
    description:
      "Du kannst jetzt automatisch Transaktionen von Apple Pay / Wallet über eine Shortcut-Automatisierung importieren.",
    image: "/images/features/apple-pay-import.png",
  },
  {
    title: "Interaktives Widget",
    description:
      "Füge Transaktionen zu jeder deiner Kategorien von jedem deiner MoneyCoach-Konten direkt auf dem Homescreen hinzu.",
    image: "/images/features/interactive-widget.png",
  },
  {
    title: "Personalisierbare Budgets",
    description:
      "Bist du im Urlaub? Geschäftsreise? Steht ein Urlaub bevor? Erstelle ein Budget, halte dein Budget ein und spare mehr Geld!",
    image: "/images/features/budgetsFeature.png",
  },
  {
    title: "Mehrere Währungen",
    description:
      "MoneyCoach ist perfekt für alle, die Konten in mehreren Währungen haben. Sieh, wie hoch dein Nettowert ist, umgerechnet in Echtzeit.",
    image: "/images/features/multicurrencyFeature.png",
  },
  {
    title: "Anpassbare Smart Goals",
    description:
      "Erstelle ein individuelles Ziel und beginne deine Reise, um es zu erreichen. Kaufe die Traumkonsole, den Laptop, das Auto oder sogar das Haus. MoneyCoach ist hier, um dir zu helfen.",
    image: "/images/features/goalsFeature.png",
  },
  {
    title: "Siri-Kurzbefehle",
    description:
      "Erstelle Verknüpfungen, um schnell deine Routinetransaktionen hinzuzufügen oder Siri nach deinem Nettowert zu fragen.",
    image: "/images/features/siriFeature.png",
  },
  {
    title: "Widgets & Live Activities",
    description:
      "Wirf schnell einen Blick auf dein verbleibendes Budget, um dich vor zu hohen Ausgaben zu schützen oder dich zu motivieren, mehr Geld zu sparen und deine Träume schneller zu verwirklichen.",
    image: "/images/features/widgetsFeature.png",
  },
  {
    title: "Anhänge",
    description:
      "Füge zusätzliche Informationen an wie: Bilder, PDFs, Notizen, Schlüsselwörter, was auch immer du willst, an eine Transaktion, die du in MoneyCoach eingegeben hast.",
    image: "/images/features/attachmentsFeature.png",
  },
  {
    title: "Apple Card CSV Importieren",
    description:
      "Mit einem Tastendruck kannst du deine Apple Card Kontoauszüge als CSV-Datei importieren. MoneyCoach importiert und kategorisiert dann automatisch deine Apple Card-Transaktionen.",
    image: "/images/features/appleCardFeature.png",
  },
  {
    title: "Massenbearbeitung von Vorgängen",
    description:
      "Wähle mehrere Transaktionen aus, um sie schnell zu bearbeiten. Du kannst sie schnell löschen, das Datum ändern, das Konto wechseln und sogar die Kategorie auf einen Schlag ändern.",
    image: "/images/features/bulkFeature.png",
  },
  {
    title: "MoneyCoach Academy",
    description:
      "In einer Reihe von kuratierten Finanzlektionen lernst du von den Grundlagen der Verwaltung deines Geldes mit Budgets bis hin zu der Frage, wie du dich auf einen eventuellen Notfall in der Zukunft vorbereiten kannst.",
    image: "/images/features/academyFeature.png",
  },
  {
    title: "Saubere Übersicht",
    description:
      "Wir haben versucht, das gleiche Gefühl wie bei der iPadOS-Version beizubehalten und einige zusätzliche macOS-Funktionen eingebaut, damit sich die App auf großen Displays besser anfühlt.",
    image: "/images/features/overviewFeature.png",
  },
  {
    title: "Einfache Navigation",
    description:
      "Mit dem neuen Hauptmenü kannst du überall hin gelangen und fast alles in der App erledigen. Außerdem haben wir die Tab-Leiste durch eine Seitenleiste ersetzt, um eine bessere und schnellere Navigation zu ermöglichen.",
    image: "/images/features/navigationFeature.png",
  },
  {
    title: "Kontext-Menüs",
    description:
      "Wenn du mit der rechten Maustaste auf die vielen verschiedenen Elemente klickst, erhältst du kontextspezifische Aktionen, die du schnell an Ort und Stelle ausführen kannst. Blende Karten aus, bearbeite oder lösche Transaktionen, Budgets und mehr.",
    image: "/images/features/menuFeature.png",
  },
  {
    title: "Hochgradig Personalisierbar",
    description:
      "Du kannst MoneyCoach ganz nach deinen Wünschen anpassen. Blende die Übersichtskarten ein oder aus, sortiere sie, wie du willst, ändere das Thema, das App-Symbol und mehr.",
    image: "/images/features/personalizeFeature.png",
  },
  {
    title: "Sidebars",
    description: "Auf den meisten Bildschirmen haben wir Seitenleisten hinzugefügt, die die Navigation in den vielen verschiedenen Tabs komplett verändern und drastisch verbessern.",
    image: "/images/features/sidebarFeature.png",
  },

  {
    image: '/images/features/darkModeFeature.png',
    title: 'Dunkler Modus',
    description: 'Wir lieben den dunklen Modus, deshalb haben wir MoneyCoach komplett neu gestaltet, um einen echten dunklen Modus zu unterstützen. Das sieht umwerfend aus!'
  },
  {
    image: '/images/features/keyboardFeature.png',
    title: 'Tastaturkurzbefehle',
    description: 'Füge mit Tastaturkürzeln schnell neue Ausgaben, Einnahmen, Überweisungen und vieles mehr hinzu. Natürlich kannst du auch deine eigenen einrichten.'
  },
//   {
//     image: '/images/features/touchbarFeature.png',
//     title: 'Touch Bar Support',
//     description: 'MoneyCoach has full support for the Touch Bar on MacBooks that offer that. Quickly navigate in the app or add new transactions with just one tap.'
//   },
  {
    image: '/images/features/syncFeature.png',
    title: 'Überall Synchronisieren',
    description: 'MoneyCoach ist auf jedem Apple-Gerät verfügbar. Synchronisiere deine Daten zwischen deinem iPhone, iPad, deiner Apple Watch, deinem HomePod und schließlich deinem Mac.'
  },
  {
    image: '/images/features/csvFeature.png',
    title: 'CSV Importieren & Exportieren',
    description: 'In MoneyCoach kannst du deine Daten aus einer anderen App oder einem Kontoauszug per CSV importieren.'
  },
  {
    image: '/images/features/notificationsFeature.png',
    title: 'Intelligente Benachrichtigungen',
    description: 'Erhalte Rechnungserinnerungen und Money Insights-Benachrichtigungen, damit du immer den Überblick über deine Finanzen behältst'
  },
  {
    image: '/images/features/securityFeature.png',
    title: 'Privat & Sicher',
    description: 'MoneyCoach erfordert keine Anmeldung, damit deine Daten immer sicher sind. Der Zugriff auf die App erfolgt über TouchID oder FaceID.'
  },
  {
    image: '/images/features/backupFeature.png',
    title: 'Sichern & Wiederherstellen',
    description: 'Du kannst deine Daten manuell sichern oder wiederherstellen, wo und wann du willst. Perfekt, wenn du ein neues, frisches Apple-Gerät bekommst.'
  },
  {
    image: '/images/features/reportFeature.png',
    title: 'Detaillierte Berichte',
    description: 'Verstehe mit Hilfe der detaillierten Berichte, wohin dein Geld fließt. Filtere die Konten, die du sehen willst, oder blende die aus, die du nicht sehen willst.'
  },
  {
    image: '/images/features/watchFeature.png',
    title: 'Apple Watch App',
    description: 'Mit MoneyCoach auf deiner Apple Watch kannst du schnell und einfach neue Transaktionen hinzufügen, deinen Kontostand überprüfen und sehen, was als Nächstes ansteht.'
  },
  {
    image: '/images/features/calendarFeature.png',
    title: 'Hilfreicher Kalender',
    description: 'Der Kalender ist eine tolle Möglichkeit, um zu sehen, was als Nächstes ansteht. Du kannst schnell neue Transaktionen hinzufügen, deinen Kontostand prüfen und sehen, was als Nächstes ansteht.'
  },
  {
    image: '/images/features/payeesFeature.png',
    title: 'Personen & Unternehmen',
    description: 'Behalte den Überblick über alle deine Zahlungsempfänger und Unternehmen, mit denen du Geschäfte machst. Mit dieser Funktion kannst du nachverfolgen, wie viel Geld du für einen bestimmten Zahlungsempfänger oder ein bestimmtes Unternehmen ausgegeben, geliehen oder geschuldet hast.'
  }
];

export default function Features() {
  return (
    <>

      <div className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-32 pt-6 sm:pt-16 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Vollgepackt <br/>mit Funktionen</h1>
              <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">MoneyCoach beschränkt sich auf das, was für die Finanzen wichtig ist. Die erweiterten Funktionen sind aus dem Weg, bis du sie tatsächlich brauchst.</p>
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
