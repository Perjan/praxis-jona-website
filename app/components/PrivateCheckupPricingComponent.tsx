import React from 'react';
import { privateCheckupPlans } from './PrivateCheckupPricing';
import PricingCard from './PricingCard';

interface PrivateCheckupPricingProps {
    buttonText: string;
    language: 'de' | 'en';
}

export default function PrivateCheckupPricingComponent({ buttonText, language }: PrivateCheckupPricingProps) {
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
                    />
                ))}
            </div>
        </div>
    );
} 