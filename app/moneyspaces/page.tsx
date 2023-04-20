import Image from "next/image";
import { Metadata } from "next";
import { ArrowsRightLeftIcon, ChatBubbleLeftRightIcon, MapPinIcon, ShieldCheckIcon, UserIcon, UsersIcon, BanknotesIcon, CurrencyDollarIcon, HeartIcon } from '@heroicons/react/20/solid'


import Feature1Image from "/public/images/moneyCoachAccounts.png"
import MoneySpacesHeroImage from "/public/images/moneyspaces-hero-image.png"
import MoneySpacesAllDevices from "/public/images/moneyspaces-all-devices.png"
import MoneySpacesAllowance from "/public/images/moneyspaces-allowance.png"
import MoneySpacesFriends from "/public/images/moneyspaces-friends-screenshot.png"
import MoneySpacesRoomates from "/public/images/moneyspaces-roommates.png"


const title = 'MoneySpaces'
const description = "MoneySpaces is, possibly, the ultimate budgeting app for families, couples, roommates, and more!"

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        type: 'website',
        url: '/moneyspaces',
        images: [
            {
                url: '/images/moneyspaces-hero-image.png',
                width: 1200,
                height: 600,
                alt: 'MoneySpaces app screenshot'
            }
        ],
    },
    alternates: {
        canonical: '/moneyspaces'
    },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: ['/images/moneyspaces-hero-image.png']
    }
}

const feature1 = [
    {
        name: "Manage Family Finances.",
        description: "Create budgets, accounts or spaces and share them with your partner. Tracking couple expenses has never been easier.",
        icon: HeartIcon,
    },
    {
        name: "Set Up Allowances.",
        description: "Easily set up allowances for your kids and track how they spend their money.",
        icon: CurrencyDollarIcon,
    }
]

const feature2 = [
    {
        name: "Manage Debts.",
        description: "Create shared spaces, invite your friends and keep track of who owes who.",
        icon: ArrowsRightLeftIcon,
    },
    {
        name: "Plan Vacations.",
        description: "Use MoneySpaces to plan the perfect trip with shared expenses. Collaborate and engage in conversations for the best deals.",
        icon: MapPinIcon,
    }
]

const feature3 = [
    {
        name: "Personal Space.",
        description: "Create your personal and private spaces and track all of your daily expenses.",
        icon: UserIcon,
    },
    {
        name: "Shared Space.",
        description: "Create a shared space, invite your roommate and track all of the split expenses.",
        icon: UsersIcon,
    }
]

const moneySpaceesFeatures = [
    {
        name: 'Personal & Shared',
        description:
            "MoneySpaces is perfect for keeping track of your own personal expenses and any shared expenses with family or friends.",
        href: '#',
        icon: BanknotesIcon,
    },
    {
        name: 'Private & Secure',
        description:
            "MoneySpaces does not require any registration or login. Your information is securely stored on your private iCloud.",
        href: '#',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Collaborative & Customizable',
        description:
            "MoneySpaces lets you engage in conversations with your family and friends for any specific transaction. Fully customize the look and feel of the app.",
        href: '#',
        icon: ChatBubbleLeftRightIcon,
    },
]

export default function Features() {
    return (
        <>

            <div className="relative isolate overflow-hidden bg-gray-900">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
                        <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
                </svg>
                <div
                    className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                    <div className="mx-auto my-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                        <div className="mt-24 sm:mt-32 lg:mt-16">
                            {/* <a href="#" className="inline-flex space-x-6">
                                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                                    <span>Just shipped v1.0</span>
                                    <ChevronRightIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                </span>
                            </a> */}
                        </div>
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Shared Finances Made Easy
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            MoneySpaces lets you create budgets, accounts or any money lists and is perfect to help you track all of your expenses.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <a
                                href="https://apps.apple.com/app/apple-store/id1633780211?pt=118449936&ct=MoneyCoach%20Web&mt=8"
                                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                            >
                                Download Now
                            </a>
                            {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
                                Learn more <span aria-hidden="true">→</span>
                            </a> */}
                        </div>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <Image
                                src={MoneySpacesHeroImage}
                                alt="App screenshot"
                                className="w-[76rem] rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="relative isolate pt-14">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="py-24 sm:py-32 lg:pb-40">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    What's MoneySpaces
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    With MoneySpaces, you can easily create and share budgets, accounts, and money lists with anyone, whether it's your family, friends, or work colleagues.
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">Plus, you can collaborate, comment, and manage your financial spaces together, all while keeping your information secure with iCloud and CloudKit.
                                </p>
                            </div>
                            <div className="mt-16 flow-root sm:mt-24">
                                <div className="-m-2 rounded-xl lg:-m-4 lg:rounded-2xl lg:p-4">
                                    <Image
                                        src={MoneySpacesAllDevices}
                                        alt="MoneySpaces App Screenshot"
                                        className="rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="my-auto lg:pr-8 lg:pt-12">
                            <div className="lg:max-w-lg">
                                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Perfect For Families</p>
                                <p className="mt-6 text-lg leading-8 text-gray-300">
                                    MoneySpaces is, possibly, the ultimate budgeting app for families and couples!
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                                    {feature1.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-white">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <Image
                            src={MoneySpacesAllowance}
                            alt="MoneyCoach Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="my-auto lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Perfect For Friends</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">Keep track of your debts or plan your group's next big adventure.</p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
                                    {feature2.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <div className="flex items-start justify-end lg:order-first">
                            <Image src={MoneySpacesFriends}
                                alt="Product screenshot"
                                className="w-[48rem] max-w-none sm:w-[57rem]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="my-auto lg:pr-8 lg:pt-12">
                            <div className="lg:max-w-lg">
                                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Perfect For Students & Roommates</p>
                                <p className="mt-6 text-lg leading-8 text-gray-300">Easily keep track of your personal daily expenses and of all the split living expenses with your roommates.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                                    {feature3.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-white">
                                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <Image
                            src={MoneySpacesRoomates}
                            alt="MoneySpace Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0"
                            priority
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Fully Packed</h2> */}
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Simple. Secure. Customizable.
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                        Think of MoneySpaces as your own personal Notes app, but specifically designed for your finances. 
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            {moneySpaceesFeatures.map((feature) => (
                                <div key={feature.name} className="flex flex-col">
                                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                        <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="flex-auto">{feature.description}</p>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>

            <div className="bg-indigo-100">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Learn how to use MoneySpaces.
                        <br />
                        Check out all of our tutorials.
                    </h2>
                    <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
                        <a
                            href="/blog#moneyspaces-tutorial"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Read Tutorials
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <h1 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Download MoneySpaces</h1>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">MoneySpaces is an iOS-exclusive app available on iPhone, iPad, and Mac.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="https://apps.apple.com/app/apple-store/id1633780211?pt=118449936&ct=MoneyCoach%20Web&mt=8" target="_blank" rel="noopener noreferrer" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Download Now</a>
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
        </>
    );
}
