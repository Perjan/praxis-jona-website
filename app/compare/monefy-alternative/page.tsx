import { Metadata } from "next"
import Image from 'next/image'
import MonefyImage from "/public/images/Monefy.png"
import Feature1 from "/public/images/addTransactions2.png"
import Feature2 from "/public/images/moneycoach-all-devices.png"
import Feature3 from "/public/images/moneycoach-reports-showcase.png"
import Feature4 from "/public/images/smartGoals.png"
import Feature5 from "/public/images/accessible-finances.png"

import { Fragment } from 'react'
import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid'

const title = "Monefy Alternative"
const description = "What is the Best Alternative to Monefy?"

const tiers = [
    {
        name: 'Monefy',
        id: 'monefy',
        href: '#',
        priceMonthly: '$9',
        description: 'Quis suspendisse ut fermentum neque vivamus non tellus.',
        mostPopular: false,
    },
    {
        name: 'MoneyCoach',
        id: 'moneycoach',
        href: '#',
        priceMonthly: '$29',
        description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
        mostPopular: true,
    },
]
const sections = [
    {
        name: 'Features',
        features: [
            { name: 'Manual Entry', tiers: { Monefy: true, MoneyCoach: true } },
            { name: 'Budgets', tiers: { Monefy: true, MoneyCoach: true } },
            { name: 'Android Version ', tiers: { Monefy: true, MoneyCoach: false } },
            { name: 'Smart Goals', tiers: { Monefy: false, MoneyCoach: true } },
            { name: 'Home & Lock Screen Widgets', tiers: { Monefy: false, MoneyCoach: true } },
            { name: 'Siri Shortcuts', tiers: { Monefy: false, MoneyCoach: true } },
            { name: 'Financial Reports', tiers: { Monefy: false, MoneyCoach: true } },
            { name: 'CSV Import', tiers: { Monefy: false, MoneyCoach: true } },
            { name: 'Desktop-class iPad App', tiers: { Monefy: false, MoneyCoach: true } },
            { name: 'Native Mac App', tiers: { Monefy: false, MoneyCoach: true } },
            { name: 'Apple Watch App', tiers: { Monefy: false, MoneyCoach: true } },
        ],
    }
]

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
        url: '/monefy-alternative',
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
        canonical: '/monefy-alternative'
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
                            <div className="mx-auto max-w-3xl text-center">
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">What is the Best Alternative to Monefy?</h1>
                                <p className="mt-6 text-lg leading-8 text-gray-300">Monefy is a simple budgeting app to organize and take control over your money. While Monefy allows you add new records fast, it lacks the option to manually set up goals, import data via CSV, the ability to customise the app to your needs and much more.</p>
                                <p className="mt-6 text-lg leading-8 text-gray-300">MoneyCoach is designed to be the one stop shop when it comes to managing your accounts, budgets, goals and so much more.</p>
                            </div>
                            <Image
                                src={MonefyImage}
                                alt="App screenshot"
                                className="mt-16 shadow-2xl ring-white/10 sm:mt-24" />
                        </div>
                        <div className="py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                            <h2 className="text-base font-semibold leading-7 text-indigo-400">Features Comparison</h2>
                            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                Monefy vs. MoneyCoach
                            </p>
                        </div>
                        {/* xs to lg */}
                        <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
                            {tiers.map((tier) => (
                                <section
                                    key={tier.id}
                                    className={classNames(
                                        tier.mostPopular ? 'rounded-xl bg-white/5 ring-1 ring-inset ring-white/10' : '',
                                        'p-8'
                                    )}
                                >
                                    <h3 id={tier.id} className="text-sm font-semibold leading-6 text-white">
                                        {tier.name}
                                    </h3>
                                    <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-white">
                                        {sections.map((section) => (
                                            <li key={section.name}>
                                                <ul role="list" className="space-y-4">
                                                    {section.features.map((feature) =>
                                                        feature.tiers[tier.name] ? (
                                                            <li key={feature.name} className="flex gap-x-3">
                                                                <CheckIcon className="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                                                                <span>
                                                                    {feature.name}{' '}
                                                                    {typeof feature.tiers[tier.name] === 'string' ? (
                                                                        <span className="text-sm leading-6 text-gray-400">({feature.tiers[tier.name]})</span>
                                                                    ) : null}
                                                                </span>
                                                            </li>
                                                        ) : null
                                                    )}
                                                </ul>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            ))}
                        </div>

                        {/* lg+ */}
                        <div className="isolate mt-20 hidden lg:block">
                            <div className="relative -mx-8">
                                {tiers.some((tier) => tier.mostPopular) ? (
                                    <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                                        <div
                                            className="flex w-1/4 px-4"
                                            aria-hidden="true"
                                            style={{ marginLeft: `75%` }}
                                        >
                                            <div className="w-full rounded-xl border-x border-t border-white/10 bg-white/5" />
                                        </div>
                                    </div>
                                ) : null}
                                <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
                                    <caption className="sr-only">Monefy vs MoneyCoach Feature Comparison</caption>
                                    <colgroup>
                                        <col className="w-1/2" />
                                        <col className="w-1/4" />
                                        <col className="w-1/4" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <td />
                                            {tiers.map((tier) => (
                                                <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                                                    <div className="text-center text-sm font-semibold leading-7 text-white">{tier.name}</div>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sections.map((section, sectionIdx) => (
                                            <Fragment key={section.name}>
                                                <tr>
                                                    <th
                                                        scope="colgroup"
                                                        colSpan={3}
                                                        className={classNames(
                                                            sectionIdx === 0 ? 'pt-8' : 'pt-16',
                                                            'pb-4 text-sm font-semibold leading-6 text-white'
                                                        )}
                                                    >
                                                        {section.name}
                                                        <div className="absolute inset-x-8 mt-4 h-px bg-white/10" />
                                                    </th>
                                                </tr>
                                                {section.features.map((feature) => (
                                                    <tr key={feature.name}>
                                                        <th scope="row" className="py-4 text-sm font-normal leading-6 text-white">
                                                            {feature.name}
                                                            <div className="absolute inset-x-8 mt-4 h-px bg-white/5" />
                                                        </th>
                                                        {tiers.map((tier) => (
                                                            <td key={tier.id} className="px-6 py-4 xl:px-8">
                                                                {typeof feature.tiers[tier.name] === 'string' ? (
                                                                    <div className="text-center text-sm leading-6 text-gray-300">
                                                                        {feature.tiers[tier.name]}
                                                                    </div>
                                                                ) : (
                                                                    <>
                                                                        {feature.tiers[tier.name] === true ? (
                                                                            <CheckIcon className="mx-auto h-5 w-5 text-indigo-400" aria-hidden="true" />
                                                                        ) : (
                                                                            <MinusIcon className="mx-auto h-5 w-5 text-gray-500" aria-hidden="true" />
                                                                        )}

                                                                        <span className="sr-only">
                                                                            {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                                                                        </span>
                                                                    </>
                                                                )}
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </Fragment>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true">
                        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]">
                        </div>
                    </div>
                </div>

                

                <div className="overflow-hidden bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                            <div className="my-auto lg:pr-8 lg:pt-4">
                                <div className="lg:max-w-lg">
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Powerful Cash
                                        Tracking</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">You can enter a new transaction pretty fast in Monefy. However you don't have the ability to add tags, payees, locations or attachments. With MoneyCoach we have taken manual tracking to the next level. </p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">You can enter a transaction in less than 2 seconds. It supports Shortcuts; you can import any bank statements via CSV, and the app will automatically categorize your expenses. You can add tags, payees, locations and even attachments to any transaction.</p>
                                </div>
                            </div>
                            <Image src={Feature1}
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
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Native Apple Product
                                        Feel</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">Monefy features a very barebones look and doesn't really feel like a modern app. It’s also not on iPad, Apple Watch or Mac.</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">MoneyCoach is built to look and feel like an Apple product with deep iOS and Mac integration. You can use it on your iPhone, iPad, Mac, and Apple Watch, and everything is synced seamlessly across your devices via iCloud.</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">All without the need to register or log in.</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-end lg:order-first">
                                <Image src={Feature2}
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
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Powerful Suite of
                                        Reports</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                        While Monefy features some simple insights, you cannot have a total breakdown of your financial life. MoneyCoach currently includes over 11 powerful intuitive reports, with more coming in the future, that will help you understand where your money goes and where you can save more.</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                        You can deep dive and see what category you are spending the most, understand the real cost of your subscriptions, see a future projection of your finances based on your spending habits and so much more.</p>
                                </div>
                            </div>
                            <Image src={Feature3}
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
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Smart Goals</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">This feature is completely missing in Monefy. Smart Goals are an integral part of MoneyCoach as they allow you to set an goal and the app helps you in many different ways to achieve that.</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-300">Having that dream vacation or buying the latest MacBook Pro has never felt more achievable than with MoneyCoach.</p>
                                </div>
                            </div>
                            <div className="flex items-start justify-end lg:order-first">
                                <Image src={Feature4}
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
                                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">We Make Finances Accessible</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">
                                        Managing finances is a difficult task for most people. MoneyCoach was designed to tackle that problem, to make managing your financial life as accessible and fun as it can be.</p>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">Everything you see in the app has been meticulously designed in a way that makes sense so you always know how your financial situation is. But if you still have trouble understanding, our extensive tutorials will clear up any confusion just like that.</p>
                                </div>
                            </div>
                            <Image src={Feature5}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none sm:w-[57rem] md:-ml-4 lg:-ml-0" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


