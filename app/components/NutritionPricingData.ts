import { Constants } from "app/Constants";

const nutritionBookingLink = Constants.appointmentUrlsByService.nutrition30.private;
const micronutrientsBookingLink = Constants.appointmentUrlsByService.micronutrients.private;
const weightLossBookingLink = Constants.appointmentUrlsByService.weightLossInjection.private;

export const nutritionConsultationPackage = {
    title: {
        de: 'Ernährungsmedizinische Beratung',
        en: 'Nutritional Medicine Consultation'
    },
    price: {
        de: '240,26€',
        en: '€240.26'
    },
    priceAppend: {
        de: '(nach GOÄ)',
        en: '(according to GOÄ)'
    },
    firstPriceLabel: {
        de: '60-minütiges Erstgespräch',
        en: '60-minute initial consultation'
    },
    secondPrice: {
        de: '120,65€',
        en: '€120.65'
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
            de: '240,26€',
            en: '€240.26'
        },
        priceAppend: {
            de: '(nach GOÄ)',
            en: '(according to GOÄ)'
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
            de: '120,65€',
            en: '€120.65'
        },
        priceAppend: {
            de: '(nach GOÄ)',
            en: '(according to GOÄ)'
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
        de: 'ca. 289€',
        en: 'approx. €289'
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
        de: 'ca. 89€',
        en: 'approx. €89'
    },
    secondPriceLabel: {
        de: 'Digitaler Ersttermin',
        en: 'Digital initial appointment'
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
            'Umfassender Ersttermin mit Anamnese, Untersuchung, Ultraschall, Laborbeurteilung und Therapieauswahl',
            'Folgegespräch: 20 Minuten, ca. 139€ nach GOÄ',
            'Kurzer Therapie-Check telefonisch: bis ca. 10 Minuten, 69€',
            'Velto Premium: digitale Begleitung und monatlicher Rezeptservice nach ärztlicher Prüfung, 20€ monatlich'
        ],
        en: [
            'Comprehensive initial appointment with history, examination, ultrasound, lab review and therapy selection',
            'Follow-up consultation: 20 minutes, approx. €139 according to GOÄ',
            'Short therapy check by telephone: up to approx. 10 minutes, €69',
            'Velto Premium: digital support and monthly prescription service after physician review, €20 monthly'
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
            de: 'Medizinische Gewichtssprechstunde',
            en: 'Medical Weight Consultation'
        },
        price: {
            de: 'ca. 289€',
            en: 'approx. €289'
        },
        billingCycle: {
            de: 'Umfassender Ersttermin',
            en: 'Comprehensive initial appointment'
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
            de: 'Velto DIGITAL',
            en: 'Velto DIGITAL'
        },
        price: {
            de: 'ca. 89€',
            en: 'approx. €89'
        },
        billingCycle: {
            de: 'Digitaler Ersttermin',
            en: 'Digital initial appointment'
        },
        description: {
            de: 'Digitaler Behandlungsweg für Patientinnen und Patienten ohne umfassende Betreuung vor Ort',
            en: 'Digital treatment pathway for patients who do not need comprehensive on-site care'
        },
        details: {
            de: [
                'Online-Anamnesebogen und ärztliche Videosprechstunde',
                'Prüfung der medizinischen Eignung, Medikamentenauswahl und Aufklärung',
                'Velto Premium optional: 20€ monatlich, monatlich kündbar',
                'Ärztliche Videosprechstunde bei Bedarf: 69€ pro Termin nach GOÄ'
            ],
            en: [
                'Online medical history form and physician video consultation',
                'Medical suitability check, medication selection and information',
                'Velto Premium optional: €20 monthly, cancellable monthly',
                'Physician video consultation when needed: €69 per appointment according to GOÄ'
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
