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

const title = "Finanz Berichte"
const description = "Entdecke die Macht der aufschlussreichen Berichte, um dein Finanzmanagement zu verbessern. Unsere umfassenden Berichte bieten eine detaillierte Aufschlüsselung von Ausgaben, Einnahmen, der Entwicklung des Nettovermögens, Lebenshaltungskosten und mehr. Mit übersichtlichen Darstellungen und prägnanten Zusammenfassungen erhältst du wertvolle Einblicke in deine finanzielle Gesundheit, verfolgst Ausgabenmuster und triffst fundierte Entscheidungen, um deine finanziellen Ziele zu erreichen."

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
        url: '/de/berichte',
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
        canonical: '/financial-reports',
        languages: {
            en: '/financial-reports',
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
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h1>
                                <p className="mt-6 text-lg leading-8 text-gray-300">{description}</p>
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
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kategorien-Zusammenfassung</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">Dieser umfassende Bericht bietet dir einen detaillierten Überblick über den gesamten Verlauf der Nutzung von Kategorien und Unterkategorien. Anhand eines aussagekräftigen Diagramms kannst du Trends und Muster leicht analysieren und erhältst so wertvolle Einblicke in die Leistung der Kategorie im Laufe der Zeit.</p>
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
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Transaktionen nach Kategorien</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">Dieser detaillierte Bericht bietet eine umfassende Aufschlüsselung der Ausgaben und Einnahmen für jede einzelne Kategorie. Anhand eines ansprechenden Tortendiagramms kannst du dir schnell einen Überblick über die Verteilung deiner Ausgaben auf die verschiedenen Kategorien verschaffen, um fundierte finanzielle Entscheidungen zu treffen und Einsparpotenziale zu erkennen.</p>
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
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Abo-Auswertungen</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Dieser aufschlussreiche Bericht bietet einen transparenten Überblick über die wahren Kosten einer wiederkehrenden Zahlung, indem er den für die Dienstleistung gezahlten Betrag über verschiedene Zeiträume hinweg anzeigt. Du kannst deine Ausgaben leicht nachverfolgen und die kumulativen Auswirkungen der wiederkehrenden Zahlung verstehen. Außerdem enthält der Bericht auch die Anzahl der durchgeführten Transaktionen und bietet so einen umfassenden Überblick über das Zahlungsverhalten im Zusammenhang mit dem Dienst.</p>
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
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Järliche Projektionen</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">Der Projektionsbericht bietet dir einen wertvollen Einblick in dein Nettovermögen für das laufende Jahr, indem er deine Ausgabengewohnheiten analysiert. Durch die Analyse von Einnahmen, Ausgaben und Sparmustern erstellt der Bericht eine Prognose des Nettovermögens, die dir einen klaren Überblick über deine finanzielle Entwicklung gibt und dir hilft, fundierte Entscheidungen zu treffen, um deine finanziellen Ziele zu erreichen.</p>
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
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Eeinkommen Vs Ausgaben</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Dieser umfassende Bericht gibt dir einen klaren Überblick über Einnahmen und Ausgaben auf monatlicher Basis und ermöglicht es dir, deine finanzielle Leistung im Laufe der Zeit zu verfolgen. Mit einer detaillierten Aufschlüsselung der Einnahmen und Ausgaben nach Kategorien erhältst du wertvolle Einblicke in dein Ausgabenverhalten, erkennst Bereiche mit hohen Ausgaben und kannst fundierte Entscheidungen treffen, um deine finanzielle Gesundheit zu optimieren.</p>
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
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Abonnement & Fixkosten</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">Dieser Bericht bietet dir einen umfassenden Überblick über deine aktiven Abonnements und Rechnungen und stellt sie zusammen mit den zugehörigen Kosten für den aktuellen Monat separat dar. So kannst du deine festen monatlichen Ausgaben leicht überwachen und nachverfolgen. So kannst du deine Finanzen besser verwalten und fundierte Entscheidungen über deine Abonnements und wiederkehrenden Zahlungen treffen.</p>
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
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Zahlungsempfänger</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Der aufschlussreiche Bericht gliedert alle Transaktionen nach Zahlungsempfänger oder Unternehmen und gibt dir einen klaren Überblick über dein Ausgabenverhalten bei verschiedenen Unternehmen. Indem du die Transaktionen in Gruppen zusammenfasst, kannst du leicht erkennen, welche Ausgaben mit bestimmten Zahlungsempfängern oder Unternehmen verbunden sind. Das hilft dir, deine finanziellen Beziehungen besser zu verstehen, und erleichtert dir die Budgetplanung und Ausgabenverfolgung.</p>
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
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Überblick</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">Dieser zusammenfassende Bericht bietet dir einen prägnanten Überblick über deine finanziellen Aktivitäten für einen bestimmten Monat oder Zeitraum, so dass du deine finanzielle Leistung schnell und auf einen Blick beurteilen kannst.</p>
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
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Stichworte</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Der aufschlussreiche Bericht ordnet alle Transaktionen nach Tags. Indem du die Transaktionen in Gruppen zusammenfasst, kannst du leicht erkennen, welche Ausgaben mit bestimmten Tags verbunden sind. Das hilft dir, deine finanziellen Beziehungen besser zu verstehen, und erleichtert die Budgetierung und die Nachverfolgung von Ausgaben.</p>
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
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Monatlichen Lebenshaltungskosten</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">Der umfassende Bericht bietet eine detaillierte Aufschlüsselung der monatlichen Lebenshaltungskosten, so dass du verfolgen kannst, wofür dein Geld ausgegeben wird. Indem du die Ausgaben für Wohnen, Versorgung, Lebensmittel, Transport und andere lebensnotwendige Kosten in Kategorien einteilst, bekommst du einen klaren Überblick über dein Ausgabenverhalten und erkennst Bereiche, in denen du möglicherweise sparen oder dein Budget anpassen kannst.</p>
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
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mein Eigenkapital</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Der Bericht über die Entwicklung deines Nettovermögens bietet dir einen wertvollen Einblick in dein finanzielles Wachstum und deine Stabilität im Laufe der Zeit. Indem er die Veränderungen deines Nettowertes verfolgt, bietet der Bericht einen umfassenden Überblick über die Entwicklung deines Nettowertes. So kannst du deine finanziellen Fortschritte beurteilen, Ziele setzen und strategische Entscheidungen treffen, um dein finanzielles Wohlergehen zu verbessern.</p>
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


