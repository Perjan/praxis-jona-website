import React from 'react';
import { nutrientTherapyPackage } from './NutritionPricingData';

interface NutrientTherapyPricingProps {
    buttonText: string;
    language: 'de' | 'en';
}

export default function NutrientTherapyPricing({ buttonText, language }: NutrientTherapyPricingProps) {
    const getBackgroundStyle = () => {
        return 'bg-gradient-to-br from-[#fdf1ec] to-[#f7e6e0] backdrop-blur-sm bg-opacity-50';
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-serif font-medium leading-8 text-primaryLighter max-w-7xl mx-auto px-4 lg:px-0 mb-8">
                {language === 'de' ? 'Nährstofftherapie' : 'Nutrient Therapy'}
            </h2>
            <div className="grid grid-cols-1">
                <div 
                    className={`flex flex-col justify-between rounded-lg p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300 ${getBackgroundStyle()}`}
                >
                    <div>
                        <h3 className="text-center text-2xl font-serif font-medium text-primary">{nutrientTherapyPackage.title[language]}</h3>
                        <p className="mt-4 text-center text-4xl font-serif font-bold text-primary">{nutrientTherapyPackage.price[language]}</p>
                        <p className="mt-2 text-center text-sm text-primaryLighter">{nutrientTherapyPackage.billingCycle[language]}</p>
                        <p className="mt-4 text-center text-sm text-primary font-medium">{nutrientTherapyPackage.description[language]}</p>
                        <ul className="mt-6 space-y-2 text-sm text-gray-600">
                            {nutrientTherapyPackage.details[language].map((detail, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-8">
                        <a
                            href={nutrientTherapyPackage.link[language]}
                            className="block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primaryDarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            {nutrientTherapyPackage.buttonText[language]}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
} 