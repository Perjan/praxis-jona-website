import React from 'react';
import { privateCheckupPlans } from './PrivateCheckupPricing';
import PricingCard from './PricingCard';
import PrimaryButton from './PrimaryButton';

interface PrivateCheckupPricingProps {
    buttonText: string;
    language: 'de' | 'en';
}

export default function PrivateCheckupPricingComponent({ buttonText, language }: PrivateCheckupPricingProps) {
    const getBackgroundStyle = (title: string) => {
        switch (title.toLowerCase()) {
            case 'silber':
            case 'silver':
                return 'bg-gradient-to-br from-[#f5f5f7] to-[#e5e7eb] backdrop-blur-sm bg-opacity-50';
            case 'gold':
                return 'bg-gradient-to-br from-[#fff9e6] to-[#fff3cc] backdrop-blur-sm bg-opacity-50';
            default:
                return 'bg-white';
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-serif font-medium leading-8 text-primaryLighter max-w-7xl mx-auto px-4 lg:px-0 mb-8">
                {language === 'de' ? 'Gesundheits-Check' : 'Health Check-up'}
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {privateCheckupPlans.map((plan) => (
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