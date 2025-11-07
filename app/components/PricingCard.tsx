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
    secondPrice?: {
        de: string;
        en: string;
    };
    secondPriceLabel?: {
        de: string;
        en: string;
    };
    firstPriceLabel?: {
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
                {pkg.secondPrice ? (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4">
                        <div className="text-center space-y-1 pb-6 border-b border-gray-300 md:border-b-0 md:border-r md:border-gray-300 md:pb-0 md:pr-4">
                            {pkg.firstPriceLabel && (
                                <p className="text-base text-primaryLighter font-semibold">{pkg.firstPriceLabel[language]}</p>
                            )}
                            <div className="flex items-baseline justify-center gap-2">
                                <p className="text-4xl font-serif font-bold text-primary">{pkg.price[language]}</p>
                                {pkg.priceAppend && (
                                    <p className="text-sm text-primary font-semibold">{pkg.priceAppend[language]}</p>
                                )}
                            </div>
                        </div>
                        <div className="text-center space-y-1 pt-6 md:pt-0 md:pl-4">
                            {pkg.secondPriceLabel && (
                                <p className="text-base text-primaryLighter font-semibold">{pkg.secondPriceLabel[language]}</p>
                            )}
                            <div className="flex items-baseline justify-center gap-2">
                                <p className="text-4xl font-serif font-bold text-primary">{pkg.secondPrice[language]}</p>
                                {pkg.priceAppend && (
                                    <p className="text-sm text-primary font-semibold">{pkg.priceAppend[language]}</p>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="mt-4 text-center flex items-baseline justify-center gap-2">
                        <p className="text-4xl font-serif font-bold text-primary">{pkg.price[language]}</p>
                        {pkg.priceAppend && (
                            <p className="text-sm text-primary font-semibold">{pkg.priceAppend[language]}</p>
                        )}
                    </div>
                )}
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