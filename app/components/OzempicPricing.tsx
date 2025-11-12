import React from 'react';
import Image from 'next/image';
import { glp1TherapyPackage } from './NutritionPricingData';
import PricingCard from './PricingCard';
import PrimaryButton from './PrimaryButton';
import { appsEN } from '../data/appsEN';
import { appsDE } from '../data/appsDE';

interface OzempicPricingProps {
    buttonText: string;
    language: 'de' | 'en';
}

export default function OzempicPricing({ buttonText, language }: OzempicPricingProps) {
    // Get Velto app data based on language
    const veltoApp = language === 'de' ? appsDE[0] : appsEN[0];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="w-full">
                <PricingCard
                    key={glp1TherapyPackage.title[language]}
                    package={glp1TherapyPackage}
                    language={language}
                />
            </div>
            
            <div className="max-w-7xl mx-auto px-4 lg:px-0 mt-8">
                <h2 className="text-2xl font-serif font-medium leading-8 text-primaryLighter mb-4">
                    {language === 'de' ? 'Medizinisches Monitoring' : 'Medical Monitoring'}
                </h2>
                <p className="text-lg leading-8 text-primaryLighter mb-4">
                    {language === 'de' 
                        ? 'Zur Sicherstellung der Wirksamkeit und Sicherheit der Therapie erfolgt eine regelmäßige medizinische Verlaufskontrolle:'
                        : 'To ensure the effectiveness and safety of the therapy, regular medical monitoring is carried out:'}
                </p>
                <ul className="px-8 list-disc text-lg leading-8 text-primaryLighter mb-4">
                    <li className="mt-2">
                        {language === 'de' ? 'Blutkontrollen nach 3 und 6 Monaten' : 'Blood checks after 3 and 6 months'}
                    </li>
                    <li className="mt-2">
                        {language === 'de' ? 'Ultraschall der Bauchorgane' : 'Ultrasound of abdominal organs'}
                    </li>
                </ul>
                <p className="text-lg leading-8 text-primaryLighter">
                    {language === 'de' 
                        ? 'Diese Leistungen werden ebenfalls nach GOÄ abgerechnet.'
                        : 'These services are also billed according to GOÄ and can be.'}
                </p>
            </div>
            
            <h2 className="text-2xl font-serif font-medium leading-8 text-primaryLighter max-w-7xl mx-auto px-4 lg:px-0 mt-16 mb-8">
                {language === 'de' ? 'Verfolgen Sie Ihre Injektionen' : 'Track Your Injections'}
            </h2>
            
            <div className="bg-gradient-to-br from-[#f5f5f7] to-[#e5e7eb] backdrop-blur-sm bg-opacity-50 rounded-xl overflow-hidden shadow-lg p-6 mb-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                        <h3 className="text-xl font-bold text-primary mb-4">{veltoApp.name}</h3>
                        <p className="text-primaryLighter mb-6">{veltoApp.description}</p>
                        
                        <ul className="space-y-3 mb-6 mt-6 space-y-2 text-sm text-gray-600">
                            {veltoApp.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className="flex flex-row gap-4">
                            <PrimaryButton 
                                href={veltoApp.downloadLink.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                fullWidth={true}
                            >
                                {language === 'de' ? 'Website besuchen' : 'Visit Website'}
                            </PrimaryButton>
                            
                            {veltoApp.downloadLink.ios && (
                                <PrimaryButton 
                                    href={veltoApp.downloadLink.ios}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    fullWidth={true}
                                >
                                    {language === 'de' ? 'App Store' : 'App Store'}
                                </PrimaryButton>
                            )}
                        </div>
                    </div>
                    
                    <div className="lg:w-1/2 flex justify-center items-center">
                        <Image 
                            src={veltoApp.image} 
                            alt={veltoApp.name} 
                            width={600} 
                            height={400} 
                            className="rounded-lg object-contain h-[300px] w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} 