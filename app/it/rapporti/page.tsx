import { Metadata } from "next"
import Image from 'next/image'
import CategoryInsights from "/public/images/reports/report-category-insights.png"
import IncomeVsExpense from "/public/images/reports/report-income-vs-expense.png"
import LivingExpenses from "/public/images/reports/report-monthly-living-expenses.png"
import MyNetWorth from "/public/images/reports/report-my-net-worth.png"
import SubscriptionsBills from "/public/images/reports/report-subscriptions-bills.png"
import Summary from "/public/images/reports/report-summary.png"
import Tags from "/public/images/reports/report-tags.png"
import PieChart from "/public/images/reports/report-transactions-by-category.png"
import YearlyProjections from "/public/images/reports/report-yearly-projections.png"
import Payees from "/public/images/reports/report-payees.png"
import SubscriptionInsights from "/public/images/reports/report-subscription-insights.png"
import ReportsHero from "/public/images/reports/reports-hero.png"







import { Fragment } from 'react'
import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid'

const title = "Vetrina Dei Rapporti"
const description = "Scopri il potere dei report approfonditi per migliorare la tua gestione finanziaria. I nostri rapporti completi forniscono una ripartizione dettagliata delle spese, del reddito, della progressione del patrimonio netto, delle spese di vita e molto altro ancora. Grazie a visualizzazioni chiare e riepiloghi concisi, puoi ottenere informazioni preziose sulla tua salute finanziaria, monitorare i modelli di spesa e prendere decisioni informate per raggiungere i tuoi obiettivi finanziari."

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        type: 'website',
        url: '/it/rapporti',
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
        canonical: '/reports-showcase',
        languages: {
            en: '/reports-showcasee',
            it: '/it/rapporti',
            de: '/de/berichte',
          }
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: ['/images/og-image.png']
    }
}

export default async function Page() {
    return (
        <>
            <main>
                <div className="overflow-hidden bg-gray-900 relative isolate pt-14">
                    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true">
                        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]">
                        </div>
                    </div>
                    <div className="py-24 sm:py-32 lg:pb-16">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center">
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Vetrina Dei Rapporti</h1>
                                <p className="mt-6 text-lg leading-8 text-gray-300">Scopri il potere dei report approfonditi per migliorare la tua gestione finanziaria. I nostri report completi forniscono una ripartizione dettagliata delle spese, del reddito, della progressione del patrimonio netto, delle spese di vita e molto altro ancora. Grazie a visualizzazioni chiare e riepiloghi concisi, puoi ottenere informazioni preziose sulla tua salute finanziaria, monitorare i modelli di spesa e prendere decisioni informate per raggiungere i tuoi obiettivi finanziari.</p>
                            </div>
                            <Image
                                src={ReportsHero}
                                alt="App screenshot"
                                className="mt-16 shadow-2xl ring-white/10 sm:mt-24" />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Riepilogo Della Categoria</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">Questo rapporto completo ti offre una panoramica dettagliata dell'intera storia dell'utilizzo di categorie e sottocategorie. Grazie all'inclusione di un grafico informativo, puoi analizzare facilmente le tendenze e gli schemi, ottenendo preziose informazioni sulle prestazioni della categoria nel tempo.</p>
                                </div>
                            </div>
                            <Image src={CategoryInsights}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:ml-auto lg:pl-4 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Movimenti Per Categoria</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">Questo rapporto dettagliato offre una ripartizione completa delle spese e delle entrate per ogni categoria specifica. Accompagnato da un grafico a torta visivamente accattivante, ti permette di capire rapidamente la distribuzione delle tue spese tra le varie categorie, consentendoti di prendere decisioni finanziarie informate e di individuare le aree di potenziale risparmio.</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-end lg:order-first">
                                <Image src={PieChart}
                                    alt="Product screenshot"
                                    className="w-[48rem] max-w-none sm:w-[57rem]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Info Peer Sottoscrizioni</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Questo rapporto approfondito fornisce una visione trasparente del costo reale di un pagamento ricorrente visualizzando l'importo pagato per il servizio in diversi periodi di tempo. Puoi facilmente tenere traccia delle tue spese e capire l'impatto cumulativo del pagamento ricorrente. Inoltre, il report include anche il numero di transazioni effettuate, offrendo una panoramica completa della cronologia dei pagamenti associati al servizio.</p>
                                </div>
                            </div>
                            <Image src={SubscriptionInsights}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0" />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:ml-auto lg:pl-4 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Proiezioni Annuali</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">Il rapporto di proiezione ti offre una preziosa visione del tuo patrimonio netto per l'anno in corso analizzando le tue abitudini di spesa. Analizzando le entrate, le spese e i modelli di risparmio, il report genera una previsione del patrimonio netto, fornendoti una chiara comprensione della tua traiettoria finanziaria e aiutandoti a prendere decisioni informate per raggiungere i tuoi obiettivi finanziari.</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-end lg:order-first">
                                <Image src={YearlyProjections}
                                    alt="Product screenshot"
                                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Reddito Vs Spese</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Questo rapporto completo presenta una chiara panoramica delle entrate e delle uscite su base mensile, consentendoti di monitorare la tua performance finanziaria nel tempo. Grazie alla ripartizione dettagliata delle entrate e delle uscite per categorie, puoi ottenere informazioni preziose sui tuoi modelli di spesa, identificare le aree di maggior spesa e prendere decisioni informate per ottimizzare la tua salute finanziaria.</p>
                                </div>
                            </div>
                            <Image src={IncomeVsExpense}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0" />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:ml-auto lg:pl-4 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Sottoscrizioni & Fatture</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">Questo rapporto ti offre una visione completa dei tuoi abbonamenti e delle tue bollette attive, presentandoli separatamente insieme ai costi associati per il mese in corso. In questo modo potrai facilmente monitorare e tenere traccia delle tue spese fisse mensili, consentendoti di gestire al meglio le tue finanze e di prendere decisioni informate riguardo ai tuoi abbonamenti e ai pagamenti ricorrenti.</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-end lg:order-first">
                                <Image src={SubscriptionsBills}
                                    alt="Product screenshot"
                                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Persone/Aziende</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                    L'accurato rapporto organizza tutti i movimenti in base al beneficiario o all'azienda, fornendoti una chiara panoramica dei tuoi modelli di spesa con diverse entità. Raggruppando i movimenti, puoi identificare facilmente le spese associate a specifici beneficiari o aziende, aiutandoti a comprendere meglio le tue relazioni finanziarie e facilitando la stesura del budget e il monitoraggio delle spese.</p>
                                </div>
                            </div>
                            <Image src={Payees}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0" />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:ml-auto lg:pl-4 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Sommario</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">Questo rapporto riassuntivo ti offre una panoramica concisa della tua attività finanziaria per un mese o un periodo specifico, consentendoti di valutare rapidamente la tua performance finanziaria con un colpo d'occhio.</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-end lg:order-first">
                                <Image src={Summary}
                                    alt="Product screenshot"
                                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tags</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Il rapporto di approfondimento organizza tutte i movimenti in base ai tag. Raggruppando i movimenti, puoi identificare facilmente le spese associate a tag specifici, aiutandoti a comprendere meglio le tue relazioni finanziarie e facilitando la stesura del budget e il monitoraggio delle spese.</p>
                                </div>
                            </div>
                            <Image src={Tags}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0" />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:ml-auto lg:pl-4 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Costo Mensilee Di Soggiorni</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">Questo rapporto completo fornisce una ripartizione dettagliata delle spese di vita mensili, permettendoti di monitorare dove viene speso il tuo denaro. Classificando le spese relative all'alloggio, alle utenze, ai generi alimentari, ai trasporti e ad altri costi di vita essenziali, puoi ottenere una chiara comprensione dei tuoi modelli di spesa e identificare le aree in cui puoi potenzialmente risparmiare o apportare modifiche al tuo budget.</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-end lg:order-first">
                                <Image src={LivingExpenses}
                                    alt="Product screenshot"
                                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto content-center lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Patrimonio Netto</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Il rapporto sulla progressione del patrimonio netto ti offre una visione preziosa della tua crescita e stabilità finanziaria nel tempo. Tracciando i cambiamenti del tuo patrimonio netto, il report fornisce una visione completa dell'evoluzione del tuo patrimonio netto. Questo ti permette di valutare i tuoi progressi finanziari, di fissare obiettivi e di prendere decisioni strategiche per migliorare il tuo benessere finanziario complessivo.</p>
                                </div>
                            </div>
                            <Image src={MyNetWorth}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0" />
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}


