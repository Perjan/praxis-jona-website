import React from 'react';

interface PricingCardProps {
    title: string;
    price: string;
    billingCycle: string;
    description: string;
    details: string[];
    buttonText: string;
    link: string;
    getBackgroundStyle: (title: string) => string;
}

export default function PricingCard({
    title,
    price,
    billingCycle,
    description,
    details,
    buttonText,
    link,
    getBackgroundStyle
}: PricingCardProps) {
    return (
        <div 
            className={`flex flex-col justify-between rounded-lg p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300 ${getBackgroundStyle(title)}`}
        >
            <div>
                <h3 className="text-center text-2xl font-serif font-medium text-primary">{title}</h3>
                <p className="mt-0 text-center font-bold text-primaryLighter">{billingCycle}</p>
                <p className="mt-4 text-center text-4xl font-serif font-bold text-primary">{price}</p>
                <p className="mt-4 text-center text-sm text-primary font-medium">{description}</p>
                <ul className="mt-6 space-y-2 text-sm text-gray-600">
                    {details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>{detail}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-8">
                <a
                    href={link}
                    className="block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primaryDarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                    {buttonText}
                </a>
            </div>
        </div>
    );
} 