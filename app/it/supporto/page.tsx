import ContactSection from "app/Contact";
import { Metadata } from "next";

const title = 'Supporto'
const description = 'Siamo qui per aiutarti a sfruttare al meglio la nostra app di bilancio e finanza personale. Se hai problemi a configurare il tuo account o hai bisogno di assistenza per gestire il tuo budget, il nostro team è qui per darti una mano.'

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/it/supporto',
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
    canonical: '/it/supporto'
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
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Supporto</h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">Siamo qui per aiutarti a sfruttare al meglio la nostra app di bilancio e finanza personale. Se hai problemi a configurare il tuo account o hai bisogno di assistenza per gestire il tuo budget, il nostro team è qui per darti una mano.</p>
            <p className="mt-2 text-lg leading-8 text-gray-600">Crediamo che la gestione delle tue finanze debba essere facile e senza stress, per questo abbiamo progettato la nostra app per essere il più semplice possibile. Ma sappiamo che a volte potresti avere domande o problemi, ed è qui che entriamo in gioco noi!</p>

            <p className="mt-2 text-lg leading-8 text-gray-600">Quindi, se hai domande, feedback o suggerimenti, non esitare a compilare il modulo sottostante. Ti risponderemo al più presto e ti promettiamo di fare tutto il possibile per aiutarti a raggiungere i tuoi obiettivi finanziari.</p>

            <p className="mt-2 text-lg leading-8 text-gray-600">Grazie per aver scelto MoneyCoach - siamo entusiasti di far parte del tuo percorso finanziario!</p>
          </div>
          <div className="mt-20">
            <ContactSection />
          </div>
          
        </div>
      </div>
      </>
    )
  }