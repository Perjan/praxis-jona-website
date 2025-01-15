import React from 'react';
import { ozempicPackages } from './NutritionPricingData';
import PricingCard from './PricingCard';

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
            default:
                return 'bg-white';
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-serif font-medium leading-8 text-primaryLighter max-w-7xl mx-auto px-4 lg:px-0 mb-8">
                {language === 'de' ? 'Abnehmspritze' : 'Weight Loss Injection'}
                <span className='sr-only'>Ozempic, Mounjaro, Wegovy</span>
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {ozempicPackages.map((plan) => (
                    <PricingCard
                        key={plan.title[language]}
                        package={plan}
                        language={language}
                        getBackgroundStyle={getBackgroundStyle}
                    />
                ))}
            </div>
        </div>
    );
} 