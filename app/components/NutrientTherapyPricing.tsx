import React from 'react';
import { nutrientTherapyPackage } from './NutritionPricingData';
import PricingCard from './PricingCard';

interface NutrientTherapyPricingProps {
    buttonText: string;
    language: 'de' | 'en';
}

export default function NutrientTherapyPricing({ language }: NutrientTherapyPricingProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-serif font-medium leading-8 text-primaryLighter max-w-7xl mx-auto px-4 lg:px-0 mb-8">
                {language === 'de' ? 'Nährstofftherapie' : 'Micronutrient Therapy'}
            </h2>
            <div className="grid grid-cols-1">
                <PricingCard
                    package={nutrientTherapyPackage}
                    language={language}
                />
            </div>
        </div>
    );
} 