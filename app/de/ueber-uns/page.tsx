import Image from 'next/image'
import { Metadata } from 'next'


  const title = 'Über uns'
  const description = "Lies mehr über das Team hinter MoneyCoach, der App, die dir hilft, dein Geld zu verwalten und deine finanziellen Ziele zu erreichen."

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'website',
    url: '/de/ueber-uns',
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
        en: "/company",
        it: "/it/chi-siamo",
        de: "/de/ueber-uns"
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
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Unsere Geschichte</h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">MoneyCoach wurde von Perjan Duro gegründet, um seine eigenen Probleme mit dem persönlichen Finanzmanagement zu lösen. Perjan verlor Geld, weil er nicht wusste, wohin das Geld ging und wohin er seine Energie lenken sollte, um mehr zu verdienen und weniger auszugeben.</p>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Ganz zu schweigen von der Tatsache, dass es reine Zeitverschwendung war, den Überblick über so viele Konten zu behalten.</p>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Millionen von Freiberuflern, kleinen Start-ups und normalen Menschen mit mehr als 3 Konten (Kreditkarten, Sparkonten, Debitkonten usw.) stehen jeden Tag vor diesem Problem. Sie brauchen eine schnelle und einfache Möglichkeit, ihre Konten zu verfolgen und neue Techniken, um mehr Geld zu verdienen.</p>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Aus dieser Motivation heraus haben wir MoneyCoach entwickelt.</p>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Wir haben uns umgesehen und ein Jahr lang verschiedene Apps ausprobiert, aber die aktuellen Lösungen waren entweder zu einfach oder überladen und fehlerhaft. Die Apps, die über der Masse lagen, brauchten immer zusätzliche Zahlungen, um auch nur eine einfache Tabelle freizuschalten.</p>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">In den letzten Monaten hat sich MoneyCoach dank der Community und der Nutzer, die Funktionen vorschlagen, die ihnen das Leben leichter machen, stark verbessert.</p>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">Mit einzigartigen Funktionen wie Smart Budgets, Smart Goals, KI-Vorschlägen, einer Apple Watch App und vielem mehr ist MoneyCoach wahrscheinlich einer der besten Budgetmanager, die es gibt!</p>
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
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Pressemappe</h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Wenn du über MoneyCoach schreiben möchtest, schau dir bitte unsere Pressemappe an oder schreibe uns eine E-Mail an <a href="mailto:info@moneycoach.ai">info@moneycoach.ai</a></p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a href="https://moneycoach.medium.com/moneycoach-press-kit-15be601f4aa1" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Zugang zur Pressemappe</a>
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
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">MoneyCoach Ökosystem</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">Wirf einen Blick auf unsere "by MoneyCoach" Apps. Da ist für fast jeden etwas dabei!</p>
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
                <a href="https://apps.apple.com/app/apple-store/id6452629146?pt=118449936&ct=website&mt=8">
                  <Image
                    className="aspect-[3/2] w-full rounded-2xl object-cover duration-300 ease-in-out hover:scale-105"
                    width={300}
                    height={200}
                    src="/images/screenTimeIcon.jpg"
                    alt=""
                  />
                </a>
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">Screen Time Realtime</h3>
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