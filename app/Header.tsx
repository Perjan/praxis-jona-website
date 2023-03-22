"use client"

import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import Image from 'next/image'

import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'
import { cn } from './lib/utils'

const navigationItems = [
    { title: "Playground", href: "/playground" },
    { title: "Features", href: "/features" },
    { title: "Guide", href: "https://moneycoach.ai/getting-started-with-moneycoach/" },
    { title: "Company", href: "/company" },
    { title: "Contact", href: "/contact" },
    { title: "Blog-beta", href: "/posts" }
]

const menuItemClassName = "-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function DownloadButton() {
    return (
        <a
            href="#"
            className="-mx-3 block rounded-xl bg-primary py-2.5 px-6 text-base font-semibold leading-7 text-gray-900 hover:text-yellow-50 hover:bg-indigo-600"
        >
            Download App
        </a>
    )
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname();
    console.log({pathname});

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">MoneyCoach</span>
                        <Image priority={true} className="h-14 w-auto object-contain" src="https://moneycoach.ai/wp-content/uploads/2023/01/MoneyCoach-Logo-Web-114.png" width={390} height={114} alt="" />
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
                    {navigationItems.map( (item) =>
                        <Link 
                            key={item.title} 
                            href={item.href}
                                className={
                                    cn(pathname === item.href ? "text-red-500" : "text-gray-900",
                                    "text-sm font-semibold leading-6")
                                }
                        >{item.title}
                        </Link>
                        
                    )}
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <DownloadButton />
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
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
                                <Link href="/features" className={menuItemClassName}>Features</Link>
                                <Link href="https://moneycoach.ai/getting-started-with-moneycoach/" className={menuItemClassName}>Guide</Link>
                                <Link href="https://moneycoach.ai/blog/" className={menuItemClassName}>Blog</Link>
                                <Link href="https://moneycoach.ai/financial-calculators/" className={menuItemClassName}>Calculators</Link>
                                <Link href="/company" className={menuItemClassName}>Company</Link>
                                <Link href="/contact" className={menuItemClassName}>Contact</Link>

                            </div>
                            <div className="py-6">
                                <DownloadButton />
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
