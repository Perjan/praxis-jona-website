
import { Metadata } from 'next';
import Image from 'next/image';

const imageWidth = 408;
const imageHeight = 513;

const title = 'Press Kit | MoneyCoach'
const description = "Access MoneyCoach's press kit to learn more about the app and the media coverage it has received."

export const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description,
        type: 'website',
        url: '/company/press-kit',
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
        canonical: '/company/press-kit'
      },
    twitter: {
        card: 'summary_large_image',
        title: title,
        description: description,
        images: ['/images/og-image.png']
    }
}

export default function PressKit() {
    return (
        <>
            <div className="bg-white">
                <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
                    <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
                        <div className="px-6 lg:px-0 lg:pt-4">
                            <div className="mx-auto max-w-2xl">
                                <div className="max-w-lg">
                                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Press Kit</h1>
                                    <p className="mt-6 text-lg leading-8 text-gray-600">If you’d like to write about MoneyCoach, please explore
                                        our Press Kit or email us at <a target="_blank" rel='noopener noreferrer nofollow' href="mailto:info@moneycoach.ai">info@moneycoach.ai</a>.</p>
                                    <div className="mt-10 flex items-center gap-x-6">
                                        <a target="_blank" rel='noopener noreferrer nofollow' href="https://moneycoach.medium.com/moneycoach-press-kit-15be601f4aa1"
                                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Access
                                            Press Kit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image className="mx-auto object-center lg:max-h-96 lg:max-w-sm"
                            width={483}
                            height={853}
                            src="/images/moco-press-love.png" alt="" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
                </div>
            </div>

            <div className="bg-white py-24 md:py-32">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
                    <div className="max-w-2xl xl:col-span-2">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">MoneyCoach In The Media</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Check out what companies, news outlets and blogs have said about
                            MoneyCoach.</p>
                    </div>
                    <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
                        
                        <li className="flex flex-col gap-10 pt-12 sm:flex-row">
                            <Image width={imageWidth} height={imageHeight} className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/press/apple.png" alt="" />
                            <div className="max-w-xl flex-auto">
                                <h3 className="text-lg font-medium leading-8 tracking-tight text-gray-900">Apple</h3>
                                <h2 className="text-2xl font-semibold leading-8 tracking-tight text-gray-900 pt-4">Developer Spotlight: Try a
                                    friendlier finance app</h2>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a target="_blank" rel='noopener noreferrer nofollow' href="https://apps.apple.com/us/story/id1591098240"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read
                                        More</a>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col gap-10 pt-12 sm:flex-row">
                            <Image width={imageWidth} height={imageHeight} className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/press/9to5mac.png" alt="" />
                            <div className="max-w-xl flex-auto">
                                <h3 className="text-lg font-medium leading-8 tracking-tight text-gray-900">9to5mac</h3>
                                <h2 className="text-2xl font-semibold leading-8 tracking-tight text-gray-900 pt-4">MoneyCoach finance app adds XL widgets, Apple Watch updates, more</h2>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a target="_blank" rel='noopener noreferrer nofollow' href="https://9to5mac.com/2021/09/21/improve-financial-habits-universal-app-moneycoach-ios-15/"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read
                                        More</a>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col gap-10 pt-12 sm:flex-row">
                            <Image width={imageWidth} height={imageHeight} className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/press/apfelfunk.png" alt="" />
                            <div className="max-w-xl flex-auto">
                                <h3 className="text-lg font-medium leading-8 tracking-tight text-gray-900">apfelfunk</h3>
                                <h2 className="text-2xl font-semibold leading-8 tracking-tight text-gray-900 pt-4">Apps Made In Germany: MoneyCoach</h2>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a target="_blank" rel='noopener noreferrer nofollow' href="https://apfelfunk.com/apps-made-in-germany-moneycoach/"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read
                                        More</a>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col gap-10 pt-12 sm:flex-row">
                            <Image width={imageWidth} height={imageHeight} className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/press/appgefahren.png" alt="" />
                            <div className="max-w-xl flex-auto">
                                <h3 className="text-lg font-medium leading-8 tracking-tight text-gray-900">appgefahren</h3>
                                <h2 className="text-2xl font-semibold leading-8 tracking-tight text-gray-900 pt-4">MoneyCoach: Finanz-App behält
                                    eure Budgets und Konten im Blick</h2>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a target="_blank" rel='noopener noreferrer nofollow' href="https://www.appgefahren.de/moneycoach-finanz-app-behaelt-eure-budgets-und-konten-im-blick-332749.html"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read
                                        More</a>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col gap-10 pt-12 sm:flex-row">
                            <Image width={imageWidth} height={imageHeight} className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/press/gq.png" alt="" />
                            <div className="max-w-xl flex-auto">
                                <h3 className="text-lg font-medium leading-8 tracking-tight text-gray-900">GQ</h3>
                                <h2 className="text-2xl font-semibold leading-8 tracking-tight text-gray-900 pt-4">Apps "made in Germany": 5
                                    Erfolgsgeschichten aus dem Apple App Store</h2>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a target="_blank" rel='noopener noreferrer nofollow' href="https://www.gq-magazin.de/technik/artikel/apps-made-in-germany-5-erfolgsgeschichten-aus-dem-apple-app-store"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read
                                        More</a>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col gap-10 pt-12 sm:flex-row">
                            <Image width={imageWidth} height={imageHeight} className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/press/maclife.png" alt="" />
                            <div className="max-w-xl flex-auto">
                                <h3 className="text-lg font-medium leading-8 tracking-tight text-gray-900">MacLife</h3>
                                <h2 className="text-2xl font-semibold leading-8 tracking-tight text-gray-900 pt-4">MoneyCoach: Finanzielle
                                    Bildungs- und Haushaltsapp in einem Paket</h2>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a target="_blank" rel='noopener noreferrer nofollow' href="https://www.maclife.de/test/moneycoach-finanzielle-bildungs-haushaltsapp-einem-paket-100119292.html"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read
                                        More</a>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col gap-10 pt-12 sm:flex-row">
                            <Image width={imageWidth} height={imageHeight} className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/press/slashdigit.png" alt="" />
                            <div className="max-w-xl flex-auto">
                                <h3 className="text-lg font-medium leading-8 tracking-tight text-gray-900">SlashDigit</h3>
                                <h2 className="text-2xl font-semibold leading-8 tracking-tight text-gray-900 pt-4">Running on all iOS devices
                                    and being able to be synced across these devices is what differentiates MoneyCoach from other budgeting
                                    apps.</h2>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a target="_blank" rel='noopener noreferrer nofollow' href="https://www.slashdigit.com/review-moneycoach-budget-app-for-ios/"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read
                                        More</a>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col gap-10 pt-12 sm:flex-row">
                            <Image width={imageWidth} height={imageHeight} className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/press/macwelt.png" alt="" />
                            <div className="max-w-xl flex-auto">
                                <h3 className="text-lg font-medium leading-8 tracking-tight text-gray-900">MacWelt</h3>
                                <h2 className="text-2xl font-semibold leading-8 tracking-tight text-gray-900 pt-4">Die WWDC-Energie ist
                                    ansteckend</h2>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a target="_blank" rel='noopener noreferrer nofollow' href="https://www.macwelt.de/article/985465/money-coach-die-wwdc-energie-ist-ansteckend.html"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read
                                        More</a>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col gap-10 pt-12 sm:flex-row">
                            <Image width={imageWidth} height={imageHeight} className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/press/mrapple.png" alt="" />
                            <div className="max-w-xl flex-auto">
                                <h3 className="text-lg font-medium leading-8 tracking-tight text-gray-900">Mr.Apple</h3>
                                <h2 className="text-2xl font-semibold leading-8 tracking-tight text-gray-900 pt-4">Le finanze da un’altra
                                    prospettiva</h2>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a target="_blank" rel='noopener noreferrer nofollow' href="https://www.mrapple.it/moneycoach-premium-le-finanze-da-unaltra-prospettiva/"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read
                                        More</a>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col gap-10 pt-12 sm:flex-row">
                            <Image width={imageWidth} height={imageHeight} className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/press/appadvice.png" alt="" />
                            <div className="max-w-xl flex-auto">
                                <h3 className="text-lg font-medium leading-8 tracking-tight text-gray-900">AppAdvice</h3>
                                <h2 className="text-2xl font-semibold leading-8 tracking-tight text-gray-900 pt-4">Trying to better understand
                                    where your finances is definitely a difficult task. But MoneyCoach can make that task much easier.</h2>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a target="_blank" rel='noopener noreferrer nofollow' href="https://appadvice.com/post/build-better-financial-habits-moneycoach/769091"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read
                                        More</a>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col gap-10 pt-12 sm:flex-row">
                            <Image width={imageWidth} height={imageHeight} className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src="/images/press/melamorsicata.png" alt="" />
                            <div className="max-w-xl flex-auto">
                                <h3 className="text-lg font-medium leading-8 tracking-tight text-gray-900">Melamorsicata</h3>
                                <h2 className="text-2xl font-semibold leading-8 tracking-tight text-gray-900 pt-4">{"MoneyCoach, un'app per gestire le finanze personali"}</h2>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <a target="_blank" rel='noopener noreferrer nofollow' href="https://www.melamorsicata.it/2017/02/07/moneycoach-unapp-gestire-le-finanze-personali/"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read
                                        More</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}