"use client"

import Link from 'next/link';
import { PackagesDE, PackagesEN } from './PackagesData';

interface PackagesSectionProps {
    locale?: 'de' | 'en';
}

export default function PackagesSection({ locale = 'de' }: PackagesSectionProps) {
    const isGerman = locale === 'de';
    const packages = isGerman ? PackagesDE : PackagesEN;

    const title = isGerman ? 'Unsere Pakete' : 'Our Packages';
    const subtitle = isGerman
        ? 'Wir bieten drei Leistungsstufen, die sich im Umfang von Diagnostik, Auswertung und Empfehlungen unterscheiden.'
        : 'We offer three service levels that differ in the scope of diagnostics, evaluation and recommendations.';

    return (
        <div className="bg-white mt-2 sm:mt-10 pb-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">
                        {title}
                    </h1>
                    <h2 className="mt-2 text-lg leading-8 text-primaryLighter">
                        {subtitle}
                    </h2>
                </div>

                <ul role="list" className="mt-8 space-y-4 overflow-visible">
                    {packages.map((pkg) => (
                        <li
                            key={pkg.id}
                            className="relative flex items-center gap-4 px-4 py-5 rounded-xl bg-lightBeige hover:bg-primary hover:bg-opacity-20 sm:px-6 lg:px-8 transition duration-300"
                        >
                            <Link href={pkg.url} className="flex justify-between items-center w-full">
                                <div className="flex flex-col w-full">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-row items-baseline gap-2.5">
                                            <h3 className="text-2xl font-medium font-serif text-primary">
                                                {pkg.name}
                                            </h3>
                                            <span className="text-base font-serif text-primaryLighter">
                                                {pkg.price}
                                            </span>
                                        </div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-6 h-6 text-primary flex-shrink-0 ml-4"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-md pt-2 leading-6 pr-2 text-primaryLighter break-words">
                                        {pkg.description}
                                    </p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
