import React from 'react';
import PrimaryButton from './PrimaryButton';

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
    bottomText?: {
        de: string;
        en: string;
    };
    priceAppend?: {
        de: string;
        en: string;
    };
    color?: string;
}

interface PricingCardProps {
    package: Package;
    language: 'de' | 'en';
    getBackgroundStyle?: (title: string) => string;
}

export default function PricingCard({
    package: pkg,
    language,
    getBackgroundStyle
}: PricingCardProps) {
    // Use color from dataset if available, otherwise fall back to getBackgroundStyle function
    const backgroundStyle = pkg.color || (getBackgroundStyle ? getBackgroundStyle(pkg.title[language]) : 'bg-white');
    
    return (
        <div 
            className={`flex flex-col justify-between rounded-lg p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300 ${backgroundStyle}`}
        >
            <div>
                <h3 className="text-center text-2xl font-serif font-medium text-primary">{pkg.title[language]}</h3>
                <p className="mt-0 text-center font-bold text-primaryLighter">{pkg.billingCycle[language]}</p>
                <div className="mt-4 text-center flex items-baseline justify-center gap-2">
                    <p className="text-4xl font-serif font-bold text-primary">{pkg.price[language]}</p>
                    {pkg.priceAppend && (
                        <p className="text-sm text-primary font-semibold">{pkg.priceAppend[language]}</p>
                    )}
                </div>
                <p className="mt-4 text-center text-sm text-primary font-medium">{pkg.description[language]}</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-600">
                    {pkg.details[language].map((detail, index) => (
                        <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{detail}</span>
                        </li>
                    ))}
                </ul>
                {pkg.bottomText && (
                    <p className="mt-4 text-center text-sm text-primary font-medium">{pkg.bottomText[language]}</p>
                )}
            </div>
            <div className="mt-8">
                <PrimaryButton
                    href={pkg.link[language]}
                    fullWidth={true}
                >
                    {pkg.buttonText[language]}
                </PrimaryButton>
            </div>
        </div>
    );
} 