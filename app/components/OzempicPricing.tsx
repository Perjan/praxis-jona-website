import React from 'react';
import { ozempicPackages } from './NutritionPricingData';
import PrimaryButton from './PrimaryButton';

interface OzempicPricingProps {
    buttonText: string;
    language: 'de' | 'en';
}

export default function OzempicPricing({ buttonText, language }: OzempicPricingProps) {
    const getBackgroundStyle = (title: string) => {
        switch (title.toLowerCase()) {
            case 'abnehmspritze':
            case 'weight loss injection':
                return 'bg-gradient-to-br from-[#f5f5f7] to-[#e5e7eb] backdrop-blur-sm bg-opacity-50';
            case 'rundum-sorglos':
            case 'all-inclusive':
                return 'bg-gradient-to-br from-[#fff9e6] to-[#fff3cc] backdrop-blur-sm bg-opacity-50';
            case 'nährstoffberatung':
            case 'nutrient consultation':
                return 'bg-gradient-to-br from-[#fdf1ec] to-[#f7e6e0] backdrop-blur-sm bg-opacity-50';
            default:
                return 'bg-white';
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-serif font-medium leading-8 text-primaryLighter max-w-7xl mx-auto px-4 lg:px-0 mb-8">
                {language === 'de' ? 'Abnehmspritze & Nährstoffberatung' : 'Weight Loss Injection & Nutrient Consultation'}
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {ozempicPackages.map((plan) => (
                    <div 
                        key={plan.title[language]} 
                        className={`flex flex-col justify-between rounded-lg p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300 ${getBackgroundStyle(plan.title[language])}`}
                    >
                        <div>
                            <h3 className="text-center text-2xl font-serif font-medium text-primary">{plan.title[language]}</h3>
                            <p className="mt-4 text-center text-4xl font-serif font-bold text-primary">{plan.price[language]}</p>
                            <p className="mt-2 text-center text-sm text-primaryLighter">{plan.billingCycle[language]}</p>
                            <p className="mt-4 text-center text-sm text-primary font-medium">{plan.description[language]}</p>
                            <ul className="mt-6 space-y-2 text-sm text-gray-600">
                                {plan.details[language].map((detail, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-8">
                            <PrimaryButton
                                href={plan.link[language]}
                                fullWidth
                            >
                                {plan.buttonText[language]}
                            </PrimaryButton>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 