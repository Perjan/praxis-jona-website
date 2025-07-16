import React from 'react';
import { nutritionPricingPlans } from './NutritionPricingData';
import PrimaryButton from './PrimaryButton';
import PricingCard from './PricingCard';

interface NutritionPricingProps {
    buttonText: string;
    language: 'de' | 'en';
}

export default function NutritionPricing({ buttonText, language }: NutritionPricingProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl font-serif font-medium leading-8 text-primaryLighter max-w-7xl mx-auto px-4 lg:px-0 mb-8">
                {language === 'de' ? 'Unsere Ernährungspakete' : 'Our Nutrition Packages'}
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {nutritionPricingPlans.map((plan) => (
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