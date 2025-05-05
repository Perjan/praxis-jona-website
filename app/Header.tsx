"use client"

import Link from 'next/link'
import { Fragment, useState, useEffect } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import Image from 'next/image'

import {
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'
import { cn } from './lib/utils'

import Logo from "/public/images/praxis-jona-web-logo.png"
import { Constants } from './Constants'
import { LanguagePicker } from './LanguagePicker'

const navigationItemsGerman = [
    { title: "Schwerpunkte", href: "/schwerpunkte" },
    { title: "Leistungen", href: "/leistungen" },
    { title: "Team", href: "/team" },
    { title: "Aktuelles", href: "/aktuelles" },
    { title: "Apps", href: "/apps" },
    { title: "Kontakt", href: "/kontakt" }
]

const navigationItemsEnglish = [
    { title: "Specialty Areas", href: "/en/focus-areas" },
    { title: "Services", href: "/en/services" },
    { title: "Team", href: "/en/team" },
    { title: "Apps", href: "/en/apps" },
    { title: "Latest News", href: "/en/latest-news" },
    { title: "Contact", href: "/en/contact" }
]

const menuItemClassName = "-mx-3 block rounded-lg py-2 px-3 font-semibold leading-7 hover:bg-slate-200"

const downloadUrl = Constants.downloadUrl

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function bookAppointmentTitle(locale: string) {
    if (locale === "en") {
        return "Book Appointment"
    } else {
        return "Termin buchen"
    }
}

export function DownloadButton({ url, locale }) {
    return (
        <Link
            href={Constants.appointmentUrl}
            target="_blank"
            className="block rounded-xl bg-primary py-2.5 px-4 lg:px-6 text-base font-serif leading-7 text-white hover:bg-primaryDarker"
            data-umami-event="button-in-header"
        >{bookAppointmentTitle(locale)}
        </Link>
    )
}

export function localeFromPathname(pathname: string) {
    if (pathname.startsWith("/en/") || pathname === "/en") {
        return "en"
    } else {
        return "de"
    }
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const scrollPosition = useScrollPosition()

    const locale = localeFromPathname(pathname)

    var navigationItems = []

    var languageLabel = "Sprache"

    switch (locale) {
        case "en":
            navigationItems = navigationItemsEnglish
            languageLabel = "Language"
            break;
        default:
            navigationItems = navigationItemsGerman
            break;
    }

    const navigationItemsMobile = [
        { title: "Home", href: locale === "de" ? "/" : "/" + locale }
    ]
    navigationItemsMobile.push(...navigationItems)

    return (
        <header
            className={classNames(
                scrollPosition > 0 ? 'shadow-lg' : 'shadow-none',
                'sticky top-0 z-20 transition-shadow backdrop-blur-md bg-white/30',
            )}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 ml-0 cursor-pointer">
                    <Link
                        href={locale === "de" ? "/" : "/" + locale}
                        className="-m-1.5 p-1.5"
                    >
                        <Image
                            priority={true}
                            className="h-14 w-auto object-contain cursor-pointer"
                            src={Logo}
                            alt="Praxis Jona Logo"
                            aria-hidden="true"
                        />
                        <span className="sr-only hidden">Praxis Jona</span>
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <CustomHamburgerIcon />
                    </button>
                </div>
                <div className="hidden lg:flex lg:flex-2 lg:justify-end">
                    <Popover.Group className="hidden pr-10 lg:flex items-center lg:gap-x-8">
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
                                    cn(pathname === item.href ? "text-green-700" : "text-gray-900",
                                        "text-md tracking-wide font-medium font-serif leading-6 hover:text-green-600")
                                }
                            >{item.title}
                            </Link>

                        )}
                    </Popover.Group>
                    <DownloadButton url={downloadUrl} locale={locale} />
                </div>
                <div className="hidden mt-0 pl-4 space-x-1 leading-5 text-gray-500 md:order-1 lg:flex items-center">
                    {LanguagePicker(locale)}
                </div>
            </nav>
            <MobileMenuDialog
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                navigationItemsMobile={navigationItemsMobile}
                pathname={pathname}
                downloadUrl={downloadUrl}
                locale={locale}
                languageLabel={languageLabel}
            />
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

const CustomHamburgerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
        <path d="M4 5L20 5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12L20 12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 19L20 19" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const CustomCloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
        <path d="M6 6L18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 6L6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

function MobileMenuDialog({ mobileMenuOpen, setMobileMenuOpen, navigationItemsMobile, pathname, downloadUrl, locale, languageLabel }) {
    return (
        <Transition show={mobileMenuOpen} as={Fragment}>
            <Dialog as="div" className="lg:hidden" static open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 z-40 bg-black bg-opacity-25" />
                </Transition.Child>

                <Transition.Child
                    as={Fragment}
                    enter="transition ease-out duration-300 transform"
                    enterFrom="translate-x-full opacity-0"
                    enterTo="translate-x-0 opacity-100"
                    leave="transition ease-out duration-300 transform"
                    leaveFrom="translate-x-0 opacity-100"
                    leaveTo="translate-x-full opacity-0"
                >
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto backdrop-filter backdrop-blur-md bg-white/80 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex justify-end mt-4">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close main menu</span>
                                <CustomCloseIcon aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="py-6">
                                    <DownloadButton url={downloadUrl} locale={locale} />
                                </div>
                                <div className="space-y-2 py-6">
                                    {navigationItemsMobile.map((item) =>
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className={
                                                cn(pathname === item.href ? "text-green-700" : "text-gray-900",
                                                    menuItemClassName)
                                            }
                                            onClick={() => setMobileMenuOpen(false)}
                                        >{item.title}
                                        </Link>
                                    )}
                                    {/* Add Blog link at the bottom of the mobile menu */}
                                    <Link
                                        href="/blog"
                                        className={cn(pathname === "/blog" ? "text-green-700" : "text-gray-900", menuItemClassName)}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Blog
                                    </Link>
                                </div>
                                <div className="mt-0 space-x-1 leading-5md:order-1 pt-8">
                                    <span className=" text-gray-500">{languageLabel}:</span>
                                    {LanguagePicker(locale)}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
            </Dialog>
        </Transition>
    )
}