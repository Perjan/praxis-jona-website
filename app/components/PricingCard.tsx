import React from 'react';

interface Package {
    title: {
        de: string;
        en: string;
    };
    price: {
        de: string;
        en: string;
    };
    billingCycle: {
        de: string;
        en: string;
    };
    description: {
        de: string;
        en: string;
    };
    details: {
        de: string[];
        en: string[];
    };
    buttonText: {
        de: string;
        en: string;
    };
    link: {
        de: string;
        en: string;
    };
}

interface PricingCardProps {
    package: Package;
    language: 'de' | 'en';
    getBackgroundStyle: (title: string) => string;
}

export default function PricingCard({
    package: pkg,
    language,
    getBackgroundStyle
}: PricingCardProps) {
    return (
        <div 
            className={`flex flex-col justify-between rounded-lg p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300 ${getBackgroundStyle(pkg.title[language])}`}
        >
            <div>
                <h3 className="text-center text-2xl font-serif font-medium text-primary">{pkg.title[language]}</h3>
                <p className="mt-0 text-center font-bold text-primaryLighter">{pkg.billingCycle[language]}</p>
                <p className="mt-4 text-center text-4xl font-serif font-bold text-primary">{pkg.price[language]}</p>
                <p className="mt-4 text-center text-sm text-primary font-medium">{pkg.description[language]}</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-600">
                    {pkg.details[language].map((detail, index) => (
                        <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{detail}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-8">
                <a
                    href={pkg.link[language]}
                    className="block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primaryDarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    {pkg.buttonText[language]}
                </a>
            </div>
        </div>
    );
} 