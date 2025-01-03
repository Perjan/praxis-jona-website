import React from 'react';
import { nutritionPricingPlans } from './NutritionPricingData';

interface NutritionPricingProps {
    buttonText: string;
    language: 'de' | 'en';
}

export default function NutritionPricing({ buttonText, language }: NutritionPricingProps) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {nutritionPricingPlans.map((plan) => (
                    <div key={plan.title[language]} className="flex flex-col justify-between rounded-lg bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <div>
                            <h3 className="text-center text-2xl font-serif font-medium text-primary">{plan.title[language]}</h3>
                            <p className="mt-4 text-center text-sm text-primaryLighter">{plan.subtitle[language]}</p>
                            <p className="mt-4 text-center text-4xl font-serif font-bold text-primary">{plan.price}</p>
                        </div>
                        <div className="mt-6">
                            <a
                                href={plan.link}
                                className="block w-full rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-primaryDarker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                            >
                                {buttonText}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 