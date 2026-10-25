import { Constants } from "app/Constants";
import { formatPrice, pricingSections, type PricingRow } from "app/components/pricing/pricingData";

const nutritionBookingLink = Constants.appointmentUrlsByService.nutrition30.private;
const micronutrientsBookingLink = Constants.appointmentUrlsByService.micronutrients.private;
const weightLossBookingLink = Constants.appointmentUrlsByService.weightLossInjection.private;
const localizePrice = (section: "nutrition" | "glp1", slug: string) => {
    const rows = pricingSections[section].rows as PricingRow[];
    const price = rows.find((item) => item.slug === slug)?.price;
    return { de: formatPrice(price, "de"), en: formatPrice(price, "en") };
};
const nutritionInitialPrice = localizePrice("nutrition", "erstgespraech");
const nutritionFollowUpPrice = localizePrice("nutrition", "folgegespraech");
const gjolliInitialPrice = localizePrice("glp1", "umfassender-ersttermin");
const gjolliFollowUpPrice = localizePrice("glp1", "folgegespraech");
const shabasInitialPrice = localizePrice("glp1", "shabas-ersttermin");
const shabasFollowUpPrice = localizePrice("glp1", "shabas-folgegespraech");
const digitalInitialPrice = localizePrice("glp1", "digitaler-ersttermin");
const digitalMonthlyPrice = localizePrice("glp1", "online-folgeformular");
const videoPrice = localizePrice("glp1", "video-bedarf");

export const nutritionConsultationPackage = {
    title: {
        de: 'Ernährungsmedizinische Beratung',
        en: 'Nutritional Medicine Consultation'
    },
    price: {
        de: nutritionInitialPrice.de,
        en: nutritionInitialPrice.en
    },
    firstPriceLabel: {
        de: '60-minütiges Erstgespräch',
        en: '60-minute initial consultation'
    },
    secondPrice: {
        de: nutritionFollowUpPrice.de,
        en: nutritionFollowUpPrice.en
    },
    secondPriceLabel: {
        de: '30-minütiges Folgegespräch',
        en: '30-minute follow-up consultation'
    },
    billingCycle: {
        de: 'Individuelle Ernährungsstrategie',
        en: 'Individual nutrition strategy'
    },
    description: {
        de: 'In der ernährungsmedizinischen Sprechstunde entwickeln wir gemeinsam eine individuelle Ernährungsstrategie, die zu Ihrer gesundheitlichen Situation, Ihren persönlichen Zielen und Ihrem Alltag passt.',
        en: 'In the nutritional medicine consultation, we develop an individual nutrition strategy together that fits your health situation, personal goals and everyday life.'
    },
    details: {
        de: [
            'Ausführliche Ernährungs- und Lebensstilanamnese',
            'Analyse Ihres Ernährungstagebuchs',
            'Ermittlung Ihres individuellen Kalorien- und Proteinbedarfs',
            'Individuelle Ernährungsempfehlungen und persönlicher Ernährungsplan',
            'Empfehlungen zu Bewegung und Lebensstil'
        ],
        en: [
            'Detailed nutrition and lifestyle history',
            'Analysis of your nutrition diary',
            'Calculation of your individual calorie and protein needs',
            'Individual nutrition recommendations and personal nutrition plan',
            'Recommendations for movement and lifestyle'
        ]
    },
    bottomText: {
        de: 'Eine vollständige oder teilweise Erstattung durch gesetzliche oder private Krankenversicherungen ist abhängig von der jeweiligen Krankenkasse beziehungsweise Ihrem individuellen Versicherungstarif und kann nicht garantiert werden.',
        en: 'Full or partial reimbursement by statutory or private health insurance depends on the respective health insurer or your individual insurance tariff and cannot be guaranteed.'
    },
    buttonText: {
        de: 'Termin buchen',
        en: 'Book appointment'
    },
    link: {
        de: nutritionBookingLink,
        en: nutritionBookingLink
    },
    color: 'bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] backdrop-blur-sm bg-opacity-50'
};

export const nutritionPricingPlans = [
    {
        title: {
            de: 'Erstgespräch',
            en: 'Initial Consultation'
        },
        price: {
            de: nutritionInitialPrice.de,
            en: nutritionInitialPrice.en
        },
        billingCycle: {
            de: '60 Minuten',
            en: '60 minutes'
        },
        description: {
            de: 'Ausführliche Analyse Ihrer aktuellen Ernährung und Entwicklung eines individuellen Ernährungsplans.',
            en: 'Detailed analysis of your current nutrition and development of an individual nutrition plan.'
        },
        details: {
            de: [
                'Ausführliche Ernährungs- und Lebensstilanamnese',
                'Analyse Ihres Ernährungstagebuchs',
                'Ermittlung Ihres individuellen Kalorien- und Proteinbedarfs',
                'Persönlicher Ernährungsplan und realistische Zielplanung'
            ],
            en: [
                'Detailed nutrition and lifestyle history',
                'Analysis of your nutrition diary',
                'Calculation of your individual calorie and protein needs',
                'Personal nutrition plan and realistic goal planning'
            ]
        },
        bottomText: {
            de: 'Vorhandene Laborwerte und bestehende Erkrankungen können berücksichtigt werden.',
            en: 'Existing laboratory values and current medical conditions can be taken into account.'
        },
        buttonText: {
            de: 'Termin buchen',
            en: 'Book appointment'
        },
        link: {
            de: nutritionBookingLink,
            en: nutritionBookingLink
        },
        color: 'bg-gradient-to-br from-[#fdf1ec] to-[#f7e6e0] backdrop-blur-sm bg-opacity-50'
    },
    {
        title: {
            de: 'Folgegespräch',
            en: 'Follow-up Consultation'
        },
        price: {
            de: nutritionFollowUpPrice.de,
            en: nutritionFollowUpPrice.en
        },
        billingCycle: {
            de: '30 Minuten',
            en: '30 minutes'
        },
        description: {
            de: 'Überprüfung Ihrer Fortschritte und Anpassung der Ernährungsstrategie.',
            en: 'Review of your progress and adjustment of the nutrition strategy.'
        },
        details: {
            de: [
                'Analyse Ihrer erreichten Ziele',
                'Besprechung von Schwierigkeiten im Alltag',
                'Analyse Ihres aktuellen Ernährungsprotokolls',
                'Anpassung von Empfehlungen, Kalorien- und Proteinbedarf'
            ],
            en: [
                'Analysis of your achieved goals',
                'Discussion of everyday difficulties',
                'Analysis of your current nutrition log',
                'Adjustment of recommendations, calorie and protein needs'
            ]
        },
        bottomText: {
            de: 'Für eine nachhaltige Ernährungsumstellung sind je nach Ausgangssituation in der Regel 3-5 Beratungen sinnvoll.',
            en: 'For sustainable nutrition change, 3-5 consultations are usually useful depending on the starting situation.'
        },
        buttonText: {
            de: 'Termin buchen',
        en: 'Book appointment'
        },
        link: {
            de: nutritionBookingLink,
            en: nutritionBookingLink
        },
        color: 'bg-gradient-to-br from-[#f5f5f7] to-[#e5e7eb] backdrop-blur-sm bg-opacity-50'
    },
{
    title: {
        de: 'Nährstofftherapie',
        en: 'Micronutrient Therapy'
    },
    price: {
        de: '299€',
        en: '299€'
    },
    billingCycle: {
        de: 'Einmalig',
        en: 'One-time'
    },
    description: {
        de: 'Individuelle Nährstoffberatung und Therapie',
        en: 'Individual micronutrient consultation and therapy'
    },
    details: {
        de: [
            '1. Termin: Umfassende Anamnese, bei der wir deine Ernährung, sportliche Aktivitäten und Beschwerden analysieren und entscheiden, welche Laborparameter im Rahmen deiner individuellen Bedürfnisse sinnvoll sind (Dauer: 60 Minuten).',
            '2. Termin: Besprechung der Laborbefunde',
            'Ein persönlicher Plan als PDF, mit Empfehlungen zu Supplementen, deren Dosierung und optimalen Einnahmezeitpunkten',
            'Planung der nächsten Laborkontrolle, um Fortschritte zu überprüfen und den Plan anzupassen'
        ],
        en: [
            '1st appointment: Medical history and analysis parameter decision (60 minutes)',
            '2nd appointment: Discussion of laboratory findings',
            'Personal PDF plan (supplements, dosage, timing)',
            'Planning of next laboratory check'
        ]
    },
    buttonText: {
        de: 'Termin buchen',
        en: 'Book appointment'
    },
    link: {
        de: micronutrientsBookingLink,
        en: micronutrientsBookingLink
    },
    color: 'bg-gradient-to-br from-[#fdf1ec] to-[#f7e6e0] backdrop-blur-sm bg-opacity-50'
}
];

export const nutrientTherapyPackage = {
    title: {
        de: 'Nährstofftherapie',
        en: 'Micronutrient Therapy'
    },
    price: {
        de: '299€',
        en: '299€'
    },
    billingCycle: {
        de: 'Einmalig',
        en: 'One-time'
    },
    description: {
        de: 'Individuelle Nährstoffberatung und Therapie',
        en: 'Individual micronutrient consultation and therapy'
    },
    details: {
        de: [
            '1. Termin: Umfassende Anamnese, bei der wir deine Ernährung, sportliche Aktivitäten und Beschwerden analysieren und entscheiden, welche Laborparameter im Rahmen deiner individuellen Bedürfnisse sinnvoll sind (Dauer: 60 Minuten).',
            '2. Termin: Besprechung der Laborbefunde',
            'Ein persönlicher Plan als PDF, mit Empfehlungen zu Supplementen, deren Dosierung und optimalen Einnahmezeitpunkten',
            'Planung der nächsten Laborkontrolle, um Fortschritte zu überprüfen und den Plan anzupassen'
        ],
        en: [
            '1st appointment: Medical history and analysis parameter decision (60 minutes)',
            '2nd appointment: Discussion of laboratory findings',
            'Personal PDF plan (supplements, dosage, timing)',
            'Planning of next laboratory check'
        ]
    },
    buttonText: {
        de: 'Termin buchen',
        en: 'Book appointment'
    },
    link: {
        de: micronutrientsBookingLink,
        en: micronutrientsBookingLink
    },
    color: 'bg-gradient-to-br from-[#fdf1ec] to-[#f7e6e0] backdrop-blur-sm bg-opacity-50'
};

export const glp1TherapyPackage = {
    title: {
        de: 'Medizinische Gewichtsreduktion & GLP-1-Therapie',
        en: 'Medical Weight Loss & GLP-1 Therapy'
    },
    price: {
        de: gjolliInitialPrice.de,
        en: gjolliInitialPrice.en
    },
    priceAppend: {
        de: '(nach GOÄ)',
        en: '(according to GOÄ)'
    },
    firstPriceLabel: {
        de: 'Umfassender Ersttermin vor Ort',
        en: 'Comprehensive in-practice initial appointment'
    },
    secondPrice: {
        de: gjolliFollowUpPrice.de,
        en: gjolliFollowUpPrice.en
    },
    secondPriceLabel: {
        de: '30-minütiges Folgegespräch mit Ernährungsberatung',
        en: '30-minute follow-up with nutrition counseling'
    },
    billingCycle: {
        de: 'Vor Ort oder digital',
        en: 'In practice or digital'
    },
    description: {
        de: 'Eine erfolgreiche Gewichtsreduktion ist mehr als die Verordnung einer Abnehmspritze. Wir bieten medizinische Begleitung von der umfassenden Betreuung in der Praxis bis zur digitalen GLP-1-Therapie.',
        en: 'Successful weight loss is more than prescribing a weight-loss injection. We offer medical support from comprehensive in-practice care to digital GLP-1 therapy.'
    },
    details: {
        de: [
            `Dr. Gjolli: 60-minütiger Ersttermin mit Ernährungsberatung, ${gjolliInitialPrice.de}`,
            `Dr. Gjolli: 30-minütiges Folgegespräch mit Ernährungsberatung, ${gjolliFollowUpPrice.de}`,
            `Dr. Shabas: Ersttermin ohne Ernährungsberatung ab Januar 2027, ${shabasInitialPrice.de}; Folgegespräch ${shabasFollowUpPrice.de}`,
            `Digitaler Ersttermin: 20-minütiges Videogespräch, ${digitalInitialPrice.de}; Online-Folgeformular ${digitalMonthlyPrice.de} monatlich; zusätzliches Videogespräch ${videoPrice.de}`
        ],
        en: [
            `Dr. Gjolli: 60-minute initial appointment with nutrition counseling, ${gjolliInitialPrice.en}`,
            `Dr. Gjolli: 30-minute follow-up with nutrition counseling, ${gjolliFollowUpPrice.en}`,
            `Dr. Shabas: initial appointment without nutrition counseling from January 2027, ${shabasInitialPrice.en}; follow-up ${shabasFollowUpPrice.en}`,
            `Digital initial appointment: 20-minute video consultation, ${digitalInitialPrice.en}; online follow-up form ${digitalMonthlyPrice.en} monthly; additional video consultation ${videoPrice.en}`
        ]
    },
    bottomText: {
        de: 'Die Kosten der Medikamente sind nicht enthalten. Eine Verordnung erfolgt ausschließlich nach ärztlicher Prüfung und bei bestehender medizinischer Indikation.',
        en: 'Medication costs are not included. A prescription is issued only after physician review and when there is an existing medical indication.'
    },
    buttonText: {
        de: 'Termin buchen',
        en: 'Book appointment'
    },
    link: {
        de: weightLossBookingLink,
        en: weightLossBookingLink
    },
    color: 'bg-gradient-to-br from-[#f5f5f7] to-[#e5e7eb] backdrop-blur-sm bg-opacity-50'
};

export const ozempicPackages = [
    {
        title: {
            de: 'Dr. Gjolli: Ersttermin mit Ernährungsberatung',
            en: 'Dr. Gjolli: initial appointment with nutrition counseling'
        },
        price: {
            de: gjolliInitialPrice.de,
            en: gjolliInitialPrice.en
        },
        billingCycle: {
            de: '60 Minuten · vor Ort',
            en: '60 minutes · in practice'
        },
        description: {
            de: 'Ausführliche medizinische Einschätzung und Therapieplanung in der Praxis',
            en: 'Detailed medical assessment and therapy planning in the practice'
        },
        details: {
            de: [
                'Ausführliche medizinische Anamnese und Analyse bisheriger Abnehmversuche',
                'Körperliche Untersuchung, Ultraschall und Beurteilung vorhandener Laborwerte',
                'Prüfung, ob Wegovy® oder Mounjaro® medizinisch geeignet ist',
                'Aufklärung, Therapieziele und Rezeptausstellung bei entsprechender medizinischer Indikation'
            ],
            en: [
                'Detailed medical history and analysis of previous weight-loss attempts',
                'Physical examination, ultrasound and assessment of existing laboratory values',
                'Evaluation of whether Wegovy® or Mounjaro® is medically suitable',
                'Information, therapy goals and prescription when medically indicated'
            ]
        },
        bottomText: {
            de: 'Die Abrechnung erfolgt nach GOÄ entsprechend den tatsächlich erbrachten Leistungen. Medikamentenkosten sind nicht enthalten.',
            en: 'Billing is according to GOÄ, based on the services actually provided. Medication costs are not included.'
        },
        buttonText: {
            de: 'Termin buchen',
            en: 'Book appointment'
        },
        link: {
            de: weightLossBookingLink,
            en: weightLossBookingLink
        },
        color: 'bg-gradient-to-br from-[#f5f5f7] to-[#e5e7eb] backdrop-blur-sm bg-opacity-50'
    },
    {
        title: {
            de: 'Digitale Betreuung',
            en: 'Digital care'
        },
        price: {
            de: digitalInitialPrice.de,
            en: digitalInitialPrice.en
        },
        billingCycle: {
            de: 'Digitaler Ersttermin',
            en: 'Digital initial appointment'
        },
        description: {
            de: 'Digitaler Behandlungsweg mit ärztlicher Prüfung',
            en: 'Digital care pathway with physician review'
        },
        details: {
            de: [
                'Online-Anamnesebogen und ärztliche Videosprechstunde',
                'Prüfung der medizinischen Eignung, Medikamentenauswahl und Aufklärung',
                `Online-Folgeformular: ${digitalMonthlyPrice.de} monatlich`,
                `Ärztliche Videosprechstunde bei Bedarf: ${videoPrice.de}`
            ],
            en: [
                'Online medical history form and physician video consultation',
                'Medical suitability check, medication selection and information',
                `Online follow-up form: ${digitalMonthlyPrice.en} monthly`,
                `Physician video consultation when needed: ${videoPrice.en}`
            ]
        },
        bottomText: {
            de: 'Eine Verordnung erfolgt ausschließlich nach ärztlicher Prüfung und bei bestehender medizinischer Indikation. Medikamentenkosten sind nicht enthalten.',
            en: 'A prescription is issued only after physician review and when there is an existing medical indication. Medication costs are not included.'
        },
        buttonText: {
            de: 'Termin buchen',
            en: 'Book appointment'
        },
        link: {
            de: weightLossBookingLink,
            en: weightLossBookingLink
        },
        color: 'bg-gradient-to-br from-[#fff9e6] to-[#fff3cc] backdrop-blur-sm bg-opacity-50'
    }
];
