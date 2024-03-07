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

import Logo from "/public/images/praxis-jona-web-logo.png"
import { Constants } from './Constants'

const navigationItemsEnglish = [
    { title: "Schwerpunkte", href: "/schwerpunkte" },
    { title: "Leistungen", href: "/leistungen" },
    { title: "Blog", href: "/blog" },
    { title: "Team", href: "/team" },
   // { title: "Termin", href: "/faqs" },
   //{ title: "Contact", href: "/contact" }
]

const menuItemClassName = "-mx-3 block rounded-lg py-2 px-3 font-semibold leading-7 hover:bg-slate-200"

const downloadUrl = Constants.downloadUrl

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

function downloadAppTitle(locale: string) {
   return "Termin Buchen"
}


export function DownloadButton({ url, locale }) {
    return (
        <Link
            href={url}
            target='_blank'
            className="block rounded-xl bg-primary py-1 lg:py-2.5 px-4 lg:px-6 text-base font-serif leading-7 text-white hover:bg-primaryDarker"
            data-umami-event="mc-app-download-button-in-header"
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

    const locale = localeFromPathname(pathname)

    var navigationItems = []

    var languageLabel = "Language"

    switch (locale) {
        default:
            navigationItems = navigationItemsEnglish
            break;
    }

    const navigationItemsMobile = [
        { title: "Home", href: locale === "en" ? "/" : "/" + locale }
    ]
    navigationItemsMobile.push(...navigationItems)

    return (
        <header
            // className="bg-white sticky top-0"
            className={classNames(
                scrollPosition > 0 ? 'shadow-lg' : 'shadow-none',
                'sticky top-0 z-20 transition-shadow backdrop-blur-md bg-white/30',
            )}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 ml-0 md:ml-14 lg:ml-0">
                    <Link
                        href={locale === "en" ? "/" : "/" + locale}
                        className="-m-1.5 p-1.5"
                    >
                        <span className="sr-only">Praxis Jona</span>
                        <Image
                            priority={true}
                            className="h-14 w-auto object-contain"
                            src={Logo}
                            alt="Praxis Jona Logo"
                        />
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <div className='mr-2'>
                        <DownloadButton url={downloadUrl} locale={locale} />
                    </div>

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
                                    "text-md font-medium font-serif leading-6")
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
                <Dialog.Panel className="fixed inset-y-0 right-0 z-40 w-full overflow-y-auto backdrop-filter backdrop-blur-md bg-white/80 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                                            cn(pathname === item.href ? "text-primary" : "text-gray-700",
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