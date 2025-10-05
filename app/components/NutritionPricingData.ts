import { Constants } from "app/Constants";

export const nutritionPricingPlans = [
    {
        title: {
            de: 'Paket BASIS',
            en: 'BASIC Package'
        },
        price: {
            de: '249,51€ ',
            en: '249,51€ '
        },
        priceAppend: {
            de: '(nach GOÄ)',
            en: '(after GOÄ)'
        },
        billingCycle: {
            de: '3 Termine, jeweils 30 Minuten',
            en: '3 appointments of 30 minutes each'
        },
        description: {
            de: 'Ideal für den Einstieg oder gezielte Beratung bei klarer Fragestellung.',
            en: 'Ideal for the first step or targeted advice in case of a clear question.'
        },
        details: {
            de: [
                '3 persönliche Ernährungsberatungen (je 30 Min)',
                'Zieldefinition & individuelle Ernährungsempfehlungen',
                'Körperzusammensetzung mit BIA-Messung bei jedem Termin',
                'Medizinische Einschätzung & praxisnahe Umsetzungstipps'
            ],
            en: [
                '3 personal nutrition consultations (30 min each)',
                'Goal definition & individual nutrition recommendations',
                'Body composition measurement with BIA at each appointment',
                'Medical assessment & practical implementation tips'
            ]
        },
        bottomText: {
            de: 'Auswertung eines detaillierten 3-Tage-Ernährungsprotokolls – Zusatzkosten je nach Umfang möglich (nach GOÄ).',
            en: 'Evaluation of a detailed 3-day nutrition protocol – additional costs possible (after GOÄ).'
        },
        buttonText: {
            de: 'Termin buchen',
            en: 'Book appointment'
        },
        link: {
            de: Constants.appointmentUrl,
            en: Constants.appointmentUrl
        },
        color: 'bg-gradient-to-br from-[#fdf1ec] to-[#f7e6e0] backdrop-blur-sm bg-opacity-50'
    },
    {
        title: {
            de: 'Paket INTENSIV',
            en: 'INTENSIVE Package'
        },
        price: {
            de: '415,85€ ',
            en: '415,85€ '
        },
        priceAppend: {
            de: '(nach GOÄ)',
            en: '(after GOÄ)'
        },
        billingCycle: {
            de: '5 Termine, jeweils 30 Minuten',
            en: '5 appointments of 30 minutes each'
        },
        description: {
            de: 'Empfohlen für nachhaltige Umstellung, komplexe Themen oder begleitend zur Abnehmspritze..',
            en: 'Recommended for long-term support and goal achievement.'
        },
        details: {
            de: [
                '5 persönliche Ernährungsberatungen (je 30 Min)',
                'Langfristige Zielplanung & stufenweise Anpassung',
                'Körperzusammensetzung mit BIA-Messung bei jedem Termin',
                'Regelmäßige Evaluation von Fortschritten & Hürden'
            ],
            en: [
                '5 personal nutrition consultations (30 min each)',
                'Long-term goal planning & gradual adjustment',
                'Body composition measurement with BIA at each appointment',
                'Regular evaluation of progress & obstacles'
            ]
        },
        bottomText: {
            de: 'Auswertung eines detaillierten 3-Tage-Ernährungsprotokolls – Zusatzkosten je nach Aufwand möglich.',
            en: 'Evaluation of a detailed 3-day nutrition protocol – additional costs possible.'
        },
        buttonText: {
            de: 'Termin buchen',
        en: 'Book appointment'
        },
        link: {
            de: Constants.appointmentUrl,
            en: Constants.appointmentUrl
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
        de: Constants.appointmentUrl,
        en: Constants.appointmentUrl
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
        de: Constants.appointmentUrl,
        en: Constants.appointmentUrl
    },
    color: 'bg-gradient-to-br from-[#fdf1ec] to-[#f7e6e0] backdrop-blur-sm bg-opacity-50'
};

export const ozempicPackages = [
    {
        title: {
            de: 'Abnehmspritze',
            en: 'Weight Loss Injection'
        },
        price: {
            de: '499€',
            en: '499€'
        },
        billingCycle: {
            de: 'Einmalig',
            en: 'One-time'
        },
        description: {
            de: 'Ärztlich begleitetes Abnehmen mit der Abnehmspritze',
            en: 'Medically supervised weight loss with weight loss injection'
        },
        details: {
            de: [
                'Erstgespräch (ca. 60 Min): Aufklärung zu Wirkung & Nebenwirkungen, Laborbesprechung, BIA-Messung, Analyse deines 3-Tage-Ernährungsprotokolls, individuelle Ernährungsempfehlungen, Rezeptausstellung',
                '4 Ernährungsberatungen à 30 Min (alle 4 Wochen): Gewichtskontrolle, erneute Ernährungsanalyse, Zielanpassung & Begleitung bis zur Erhaltungsdosis',
                'Medizinisches Monitoring: Blutkontrollen (nach 3 & 6 Monaten) und Ultraschall der Bauchorgane – eventuell Kassenleistung, je nach gewählten Laborparametern'
            ],
            en: [
                'Initial consultation: Check for contraindications and detailed consultation on dietary changes',
                'Consultation on lab values and interpretation of results',
                'Prescription for weight loss injection',
                'Check-ins every 4 weeks until maintenance dose (30 minutes)',
                'Lab value consultation (lab values billed separately)'
            ]
        },
        bottomText: {
            de: 'Wichtig: Die Kosten für die Abnehmspritze sind nicht enthalten und werden nicht von der Krankenkasse übernommen.',
            en: 'Important: The cost of the weight loss injection is not included and is not covered by the health insurance.'
        },
        buttonText: {
            de: 'Termin buchen',
            en: 'Book appointment'
        },
        link: {
            de: Constants.appointmentUrl,
            en: Constants.appointmentUrl
        },
        color: 'bg-gradient-to-br from-[#f5f5f7] to-[#e5e7eb] backdrop-blur-sm bg-opacity-50'
    },
    {
        title: {
            de: 'Abnehmspritze Rundum-Sorglos',
            en: 'All-Inclusive Weight Loss Injection'
        },
        price: {
            de: '1499€',
            en: '1499€'
        },
        billingCycle: {
            de: 'Mindestlaufzeit: 3 Monate',
            en: 'Minimum duration: 3 months'
        },
        description: {
            de: 'Alles in der Praxis - Ärztlich begleitetes Abnehmen mit Abnehmspritze',
            en: 'Everything in-house - Medically supervised weight loss with weight loss injection'
        },
        details: {
            de: [
                'Inhalte des Silber-Pakets',
                'Abnehmspritze inklusive',
                'Wöchentliche Injektion durch medizinisches Fachpersonal',
                'Körperzusammensetzungs-Messung mit Bioimpedanzwaage'
            ],
            en: [
                'Contents of Silver package',
                'Weight loss injection included',
                'Weekly injection by medical professionals',
                'Body composition measurement with bioimpedance scale'
            ]
        },
        buttonText: {
            de: 'Termin buchen',
            en: 'Book appointment'
        },
        link: {
            de: Constants.appointmentUrl,
            en: Constants.appointmentUrl
        },
        color: 'bg-gradient-to-br from-[#fff9e6] to-[#fff3cc] backdrop-blur-sm bg-opacity-50'
    }
];