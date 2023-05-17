import ContactSection from "app/Contact";
import { Metadata } from "next";

const title = 'Support'
const description = 'Wir sind hier, um dir zu helfen, das Beste aus unserer App für Haushaltsführung und persönliche Finanzen herauszuholen. Egal, ob du Probleme bei der Einrichtung deines Kontos hast oder Hilfe bei der Verwaltung deines Budgets brauchst, unser Team hilft dir gerne weiter.'

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/de/support',
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
    canonical: '/support',
    languages: {
      en: '/support',
      it: '/it/supporto',
      de: '/de/support',
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
      <>
      <div className="bg-white mt-2 sm:mt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Support</h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">Wir sind hier, um dir zu helfen, das Beste aus unserer App für Haushaltsführung und persönliche Finanzen herauszuholen. Egal, ob du Probleme bei der Einrichtung deines Kontos hast oder Hilfe bei der Verwaltung deines Budgets brauchst, unser Team von Finanzexperten hilft dir gerne weiter.</p>
            <p className="mt-2 text-lg leading-8 text-gray-600">Wir glauben, dass die Verwaltung deiner Finanzen stressfrei und einfach sein sollte. Deshalb haben wir unsere App so benutzerfreundlich wie möglich gestaltet. Aber wir wissen, dass du manchmal trotzdem Fragen oder Probleme hast, und genau da kommen wir ins Spiel!</p>

            <p className="mt-2 text-lg leading-8 text-gray-600">Wenn du also Fragen, Feedback oder Anregungen hast, zögere nicht, das untenstehende Formular auszufüllen. Wir werden uns so schnell wie möglich bei dir melden und versprechen dir, alles zu tun, damit du deine finanziellen Ziele erreichst.</p>

            <p className="mt-2 text-lg leading-8 text-gray-600">Danke, dass du dich für MoneyCoach entschieden hast - wir freuen uns darauf, Teil deiner finanziellen Reise zu sein!</p>
          </div>
          <div className="mt-20">
            <ContactSection />
          </div>
          
        </div>
      </div>
      </>
    )
  }