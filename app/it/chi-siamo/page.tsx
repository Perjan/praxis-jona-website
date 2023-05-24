import Image from 'next/image'
import { Metadata } from 'next'


  const title = 'Chi Siamo'
  const description = "Scopri il team che sta dietro a MoneyCoach, l'app che ti aiuta a gestire il tuo denaro e a raggiungere i tuoi obiettivi finanziari."

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/it/chi-siamo',
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
    canonical: '/company',
    languages: {
      en: '/company',
      it: '/it/chi-siamo',
      de: '/de/ueber-uns',
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: ['/images/og-image.png']
  }
}

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

/// https://beta.nextjs.org/docs/installation
export default function Page() {
  return (
    <>
      <main>
        <div className="relative isolate">
          <svg className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]" aria-hidden="true">
            <defs>
              <pattern id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
              <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
            <svg viewBox="0 0 801 1036" aria-hidden="true" className="w-[50.0625rem]">
              <path fill="url(#70656b7e-db44-4b9b-b7d2-1f06791bed52)" fillOpacity=".3" d="m282.279 843.371 32.285 192.609-313.61-25.32 281.325-167.289-58.145-346.888c94.5 92.652 277.002 213.246 251.009-45.597C442.651 127.331 248.072 10.369 449.268.891c160.956-7.583 301.235 116.434 351.256 179.39L507.001 307.557l270.983 241.04-495.705 294.774Z" />
              <defs>
                <linearGradient id="70656b7e-db44-4b9b-b7d2-1f06791bed52" x1="508.179" x2="-28.677" y1="-116.221" y2="1091.63" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9089FC" />
                  <stop offset="1" stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-10 sm:pt-60 lg:px-8 lg:pt-12">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">La Nostra Storia</h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">MoneyCoach è stata creata da Perjan Duro per risolvere i suoi problemi di gestione delle finanze personali. Perjan stava perdendo denaro perché non sapeva dove andava a finire e dove incanalare le energie per guadagnare di più e spendere di meno.</p>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Per non parlare del fatto che tenere traccia di così tanti conti era una totale perdita di tempo.</p>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Milioni di freelance, piccole startup e persone normali con più di 3 conti (carta di credito, libretto di risparmio, conto corrente, ecc.) si trovano ad affrontare questo problema ogni giorno. Hanno bisogno di un modo semplice e veloce per tenere traccia dei loro conti e di nuove tecniche per guadagnare di più.</p>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Per questo motivo abbiamo creato MoneyCoach.</p>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Abbiamo esaminato e provato diverse app durante un anno, ma le soluzioni attuali erano eccessivamente semplificate o ingombranti e buggate. Le app che erano superiori alla massa, richiedevano sempre pagamenti aggiuntivi per sbloccare anche un semplice grafico.</p>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Negli ultimi mesi, MoneyCoach è migliorata notevolmente, grazie alla comunità che la circonda e agli utenti che suggeriscono le funzionalità che semplificano la loro vita.</p>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Grazie a funzioni come Smart Budgets, Smart Goals, Rapporti Fantastici e molto altro ancora, MoneyCoach è, probabilmente, uno dei migliori app per la gestione dei soldi!</p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        src="/images/moneycoach-team-in-amsterdam.png"
                        height={1528}
                        width={200}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        src="/images/monecoach-ceo-in-wwdc.png"
                        height={1528}
                        width={200}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/moneycoach-offices.png"
                        height={1528}
                        width={200}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        src="/images/moneycoach-fuel.png"
                        height={1528}
                        width={200}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                    <div className="relative">
                      <Image
                        src="/images/moneycoach-team-john-wick-4.png"
                        height={1528}
                        width={200}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Press Kit</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Se vuoi scrivere su MoneyCoach, esplora il nostro Press Kit o scrivici un'e-mail all'indirizzo <a href="mailto:info@moneycoach.ai">info@moneycoach.ai</a></p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="https://moneycoach.medium.com/moneycoach-press-kit-15be601f4aa1" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Accedi Press Kit</a>
              </div>
              <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fill-opacity="0.7" />
                <defs>
                  <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                    <stop stop-color="#7775D6" />
                    <stop offset="1" stop-color="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* <!-- Ecosystem Section --> */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ecosistema MoneyCoach</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">Dai un'occhiata alle nostre applicazioni "da MoneyCoach". Ce n'è per tutti i gusti!</p>
            </div>
            <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              <li>
                <a href="https://apps.apple.com/us/app/family-budget-moneyspaces/id1633780211">
                  <Image
                    className="aspect-[3/2] w-full rounded-2xl object-cover duration-300 ease-in-out hover:scale-105"
                    width={300}
                    height={200}
                    src="/images/moneyspacesIcon.png"
                    alt=""
                  />
                </a>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">MoneySpaces</h3>
              </li>

              <li>
                <a href="https://itunes.apple.com/us/app/bitcoin-tracker-by-moneycoach/id1204742867?mt=8">
                  <Image
                    className="aspect-[3/2] w-full rounded-2xl object-cover duration-300 ease-in-out hover:scale-105"
                    width={300}
                    height={200}
                    src="/images/btcIcon.png"
                    alt=""
                  />
                </a>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Bitcoin Crypto Ticker</h3>
              </li>

              <li>
                <a href="https://apps.apple.com/de/app/web-dashboard-decky/id6449291563?l=en&mt=12">
                  <Image
                    className="aspect-[3/2] w-full rounded-2xl object-cover duration-300 ease-in-out hover:scale-105"
                    width={300}
                    height={200}
                    src="/images/decky-icon.jpg"
                    alt=""
                  />
                </a>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Web Dashboard Decky</h3>
              </li>

              <li>
                <a href="https://apps.apple.com/us/app/iban-calculator-by-moneycoach/id1017293567">
                  <Image
                    className="aspect-[3/2] w-full rounded-2xl object-cover duration-300 ease-in-out hover:scale-105"
                    width={300}
                    height={200}
                    src="/images/iban-calculator-Icon.jpg"
                    alt=""
                  />
                </a>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">IBAN Calculator</h3>
              </li>

              <li>
                <a href="https://itunes.apple.com/vn/app/riku/id1262876845?mt=8">
                  <Image
                    className="aspect-[3/2] w-full rounded-2xl object-cover duration-300 ease-in-out hover:scale-105"
                    width={300}
                    height={200}
                    src="/images/rikuIcon.png"
                    alt=""
                  />
                </a>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Riku</h3>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- /Ecosystem Section --> */}
      </main>
    </>
  )
}