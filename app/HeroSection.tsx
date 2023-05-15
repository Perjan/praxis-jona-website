import {
    ChevronRightIcon,
    PlayCircleIcon,
    SparklesIcon
} from '@heroicons/react/20/solid'

import Image from 'next/image'
import Link from 'next/link'

import AppOfTheDay from "/public/images/app-of-the-day.png"
import AccoladesCombo from "/public/images/accolades-combo.png"
import HeroImage from "/public/images/moneycoach-all-devices.png"

const title = "Modern Cash And Budget Tracker"
const description = "Track all your cash spending, manage your personal budgets and reduce your financial stress. That's what MoneyCoach is all about."
const whatsNewUrl = "/whats-new-in-moneycoach-8-4-4"
const downloadUrl = "https://apps.apple.com/us/app/moneycoach-budget-spendings/id989642198"
const videoUrl = "https://www.youtube.com/watch?v=phpFfo80LPI&t=22s"
const previewUrl = "https://www.youtube.com/shorts/rh5_8mVDx4Q"

export type HeroConfig = {
    downloadNowTitle: string
}

export default function HeroSection(params: { config: HeroConfig }) {
    return (
        <div className="relative isolate overflow-hidden bg-white">
            <svg
                className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
            >
                <defs>
                    <pattern
                        id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                        width={200}
                        height={200}
                        x="50%"
                        y={-1}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
            </svg>
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-0 py-0 sm:pb-32 lg:flex lg:px-8 lg:py-2 lg:pt-0">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                    {/* <Image className="h-11" src="/images/mocoHead.png" alt='MoneyCoach app icon' width={44} height={44} /> */}
                    <div className="mt-0 sm:mt-4 lg:mt-24 h-0 collapse sm:visible">
                        <Link href={whatsNewUrl} className="inline-flex space-x-6">
                            <span className="rounded-full inline-flex items-center space-x-2 bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primaryDarker ring-1 ring-inset ring-indigo-600/10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                                </svg>

                                {"Just shipped v8.4.4"}
                                <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            </span>
                        </Link>
                    </div>
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl capitalize">
                        {title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        {description}
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <Link
                            href={downloadUrl}
                            target='_blank'
                            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {params.config.downloadNowTitle}
                        </Link>

                        <Link
                            href={previewUrl}
                            target='_blank'
                            className="rounded-md inline-flex bg-slate-300 px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:text-white hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/90"
                        >
                            <PlayCircleIcon className="h-5 w-5 mr-2" aria-hidden="true" />
                            <span>Watch Video</span>
                        </Link>
                    </div>
                    <div className="grid gap-x-4 pr-6 grid-cols-2 mt-12 mb-10 w-[36rem]">
                        <div>
                            <Image
                                className="rounded-md"
                                src={AppOfTheDay}
                                alt='MoneyCoach App Of The Day'
                                priority={true}
                                placeholder='blur'
                            />
                        </div>
                        <div>
                            <Image
                                className="rounded-md"
                                src={AccoladesCombo}
                                alt='MoneyCoach Accolades screenshot'
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
                <div className="mx-auto mt-16 pt-10 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <div className="-m-2 rounded-xl p-2 lg:-m-4 lg:rounded-2xl lg:p-4">
                            <Image
                                className="w-[76rem] rounded-md"
                                src={HeroImage}
                                alt='MoneyCoach app screenshot'
                                priority={true}
                                // placeholder='blur'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
