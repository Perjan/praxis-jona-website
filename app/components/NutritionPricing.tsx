import React from 'react';
import { nutritionConsultationPackage } from './NutritionPricingData';
import PrimaryButton from './PrimaryButton';
import PricingCard from './PricingCard';

interface NutritionPricingProps {
    buttonText: string;
    language: 'de' | 'en';
}

export default function NutritionPricing({ buttonText, language }: NutritionPricingProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="w-full">
                <PricingCard
                    key={nutritionConsultationPackage.title[language]}
                    package={nutritionConsultationPackage}
                    language={language}
                />
            </div>
        </div>
    );
} 