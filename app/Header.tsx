"use client"

import Link from 'next/link'
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import Image from 'next/image'

import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import { cn } from './lib/utils'

import Logo from "/public/images/moneycoach-web-logo.png"
import LogoMoneySpaces from "/public/images/moneyspaces-logo.png"
import { Constants } from './Constants'

const navigationItemsEnglish = [
    { title: "Features", href: "/features" },
    { title: "Guides", href: "/guides" },
    { title: "Blog", href: "/blog" },
    { title: "Company", href: "/company" }
]

const navigationItemsItalian = [
    { title: "Funzioni", href: "/it/funzioni" },
    { title: "Guide", href: "/it/guide" },
    { title: "Blog", href: "/it/blog" },
    { title: "Chi Siamo", href: "/it/chi-siamo" }
]

const navigationItemsGerman = [
    { title: "Funktionen", href: "/de/funktionen" },
    { title: "Einführungen", href: "/de/einfuehrungen" },
    { title: "Blog", href: "/de/blog" },
    { title: "Über Uns", href: "/de/ueber-uns" }
]

const menuItemClassName = "-mx-3 block rounded-lg py-2 px-3 font-semibold leading-7 hover:bg-gray-50"

const downloadUrl = Constants.downloadUrl
const downloadUrlMoneySpaces = "https://apps.apple.com/app/apple-store/id1633780211?pt=118449936&ct=MoneyCoach%20Web&mt=8"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function downloadAppTitle(locale: string) {
    if (locale === "it") {
        return "Scarica l'app"
    } else if (locale === "de") {
        return "App Herunterladen"
    } else {
        return "Download App"
    }
}

export function DownloadButton({ url, locale }) {
    return (
        <Link
            href={url}
            target='_blank'
            className="-mx-3 block rounded-xl bg-primary py-2.5 px-6 text-base font-semibold leading-7 text-white hover:bg-primaryDarker"
            data-umami-event="mc-app-download-button-in-header"
        >{downloadAppTitle(locale)}
        </Link>
    )
}

export function DownloadButtonMoneySpaces({ url, locale }) {
    return (
        <Link
            href={url}
            target='_blank'
            className="-mx-3 block rounded-xl bg-indigo-600 py-2.5 px-6 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
            data-umami-event="ms-app-download-button-in-header"
        >{downloadAppTitle(locale)}
        </Link>
    )
}

export function localeFromPathname(pathname: string) {
    if (pathname.startsWith("/it")) {
        return "it"
    } else if (pathname.startsWith("/de")) {
        return "de"
    } else {
        return "en"
    }
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const scrollPosition = useScrollPosition()

    const isMoneySpaces = pathname === "/moneyspaces"

    const locale = localeFromPathname(pathname)

    var navigationItems = []

    var languageLabel = "Language"

    switch (locale) {
        case "it":
            navigationItems = navigationItemsItalian
            languageLabel = "Lingua"
            break;
        case "de":
            navigationItems = navigationItemsGerman
            languageLabel = "Sprache"
            break;
        default:
            navigationItems = navigationItemsEnglish
            break;
    }

    const navigationItemsMobile = [
        { title: "Home", href: locale === "en" ? "/" : "/" + locale }
    ]
    navigationItemsMobile.push(...navigationItems)

    if (isMoneySpaces) {
        return (
            <header
                // className="bg-white sticky top-0"
                className={classNames(
                    scrollPosition > 0 ? 'shadow-lg' : 'shadow-none',
                    'sticky top-0 z-20 bg-white transition-shadow',
                )}
            >
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1 ml-0 md:ml-14 lg:ml-0">
                        <Link
                            href="/"
                            className="-m-1.5 p-1.5"
                        >
                            <span className="sr-only">MoneySpaces</span>
                            <Image
                                priority={true}
                                className="h-14 w-auto object-contain"
                                src={LogoMoneySpaces}
                                alt="MoneySpaces Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <DownloadButtonMoneySpaces url={downloadUrlMoneySpaces} locale={locale} />
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <DownloadButtonMoneySpaces url={downloadUrlMoneySpaces} locale={locale} />
                    </div>
                </nav>
            </header>
        )
    }

    return (
        <header
            // className="bg-white sticky top-0"
            className={classNames(
                scrollPosition > 0 ? 'shadow-lg' : 'shadow-none',
                'sticky top-0 z-20 bg-white transition-shadow',
            )}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 ml-0 md:ml-14 lg:ml-0">
                    <Link
                        href={locale === "en" ? "/" : "/" + locale}
                        className="-m-1.5 p-1.5"
                    >
                        <span className="sr-only">MoneyCoach</span>
                        <Image
                            priority={true}
                            className="h-14 w-auto object-contain"
                            src={Logo}
                            alt="MoneyCoach Logo"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                        </Transition>
                    </Popover>
                    {navigationItems.map((item) =>
                        <Link
                            key={item.title}
                            href={item.href}
                            scroll={true}
                            className={
                                cn(pathname === item.href ? "text-primary" : "text-gray-900",
                                    "text-sm font-semibold leading-6")
                            }
                        >{item.title}
                        </Link>

                    )}
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <DownloadButton url={downloadUrl} locale={locale} />
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-40" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto backdrop-filter backdrop-blur-sm bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="items-end content-end">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigationItemsMobile.map((item) =>
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className={
                                            cn(pathname === item.href ? "text-primary" : "text-gray-900",
                                                menuItemClassName)
                                        }
                                        onClick={() => setMobileMenuOpen(false)}
                                    >{item.title}
                                    </Link>

                                )}
                            </div>
                            <div className="py-6">
                                <DownloadButton url={downloadUrl} locale={locale} />
                            </div>

                            <div className="mt-0 space-x-1 leading-5 text-gray-500 md:order-1 pt-8">
                                <span>{languageLabel}:</span>
                                <Link href="/">🇬🇧 /</Link>
                                <Link href="/de">🇩🇪 /</Link>
                                <Link href="/it">🇮🇹</Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}


export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset)
        }

        window.addEventListener('scroll', updatePosition)

        updatePosition()

        return () => window.removeEventListener('scroll', updatePosition)
    }, [])

    return scrollPosition
}