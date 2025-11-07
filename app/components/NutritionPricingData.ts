import { Constants } from "app/Constants";

export const nutritionConsultationPackage = {
    title: {
        de: 'Ernährungsberatung',
        en: 'Nutrition Consultation'
    },
    price: {
        de: 'ab 90€ ',
        en: 'from 90€ '
    },
    priceAppend: {
        de: '(nach GOÄ)',
        en: '(after GOÄ)'
    },
    billingCycle: {
        de: 'ca. 30 Minuten Ernährungsberatung',
        en: 'approx. 30 minutes nutrition consultation'
    },
    description: {
        de: 'Die Ernährungsberatung erfolgt individuell, medizinisch fundiert und wird vollständig gemäß der Gebührenordnung für Ärzte (GOÄ) abgerechnet. Sie richtet sich an Personen, die ihre Ernährung gezielt zur Verbesserung ihres Wohlbefindens, zur Gewichtsregulation oder im Rahmen bestimmter Erkrankungen optimieren möchten.',
        en: 'Nutrition consultation is provided individually, based on medical evidence, and is fully billed according to the German Medical Fee Schedule (GOÄ). It is aimed at people who want to optimize their nutrition specifically to improve their well-being, for weight regulation, or in the context of certain diseases.'
    },
    details: {
        de: [
            'BIA-Messung zur Bestimmung der Körperzusammensetzung',
            'Auswertung eines 3-Tage-Ernährungsprotokolls',
            'Erarbeitung individueller Ernährungsstrategien und praktischer Umsetzungsempfehlungen'
        ],
        en: [
            'BIA measurement to determine body composition',
            'Evaluation of a 3-day nutrition protocol',
            'Development of individual nutrition strategies and practical implementation recommendations'
        ]
    },
    bottomText: {
        de: 'Die Kosten der ernährungsmedizinischen Beratung sind Selbstzahlerleistungen und werden nicht von den gesetzlichen Krankenkassen übernommen. In Einzelfällen kann bei privat Versicherten eine Erstattung nach GOÄ erfolgen – abhängig vom jeweiligen Versicherungsvertrag.',
        en: 'The costs of nutritional medicine consultation are self-pay services and are not covered by statutory health insurance. In individual cases, privately insured patients may receive reimbursement according to GOÄ – depending on the respective insurance contract.'
    },
    buttonText: {
        de: 'Termin buchen',
        en: 'Book appointment'
    },
    link: {
        de: Constants.appointmentUrl,
        en: Constants.appointmentUrl
    },
    color: 'bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] backdrop-blur-sm bg-opacity-50'
};

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

export const glp1TherapyPackage = {
    title: {
        de: 'Medizinische Begleitung bei der Therapie mit GLP-1-Analoga („Abnehmspritze")',
        en: 'Medical Support for GLP-1 Analogue Therapy ("Weight Loss Injection")'
    },
    price: {
        de: 'ab 90€',
        en: 'from 90€'
    },
    priceAppend: {
        de: '(nach GOÄ)',
        en: '(after GOÄ)'
    },
    firstPriceLabel: {
        de: 'ca. 30 Minuten Ernährungsberatung',
        en: 'approx. 30 minutes nutrition consultation'
    },
    secondPrice: {
        de: 'ab 50€',
        en: 'from 50€'
    },
    secondPriceLabel: {
        de: 'In der Erhaltungsphase, ca. 15 Minuten',
        en: 'In maintenance phase, approx. 15 minutes'
    },
    billingCycle: {
        de: 'Ernährungsmedizinische Beratung',
        en: 'Nutritional Medicine Consultation'
    },
    description: {
        de: 'Die Behandlung erfolgt individuell nach ärztlicher Verordnung und wird vollständig gemäß der Gebührenordnung für Ärzte (GOÄ) abgerechnet.',
        en: 'Treatment is provided individually according to medical prescription and is fully billed according to the German Medical Fee Schedule (GOÄ).'
    },
    details: {
        de: [
            'BIA-Messung zur Bestimmung der Körperzusammensetzung',
            'Besprechung der Laborwerte (sofern vorhanden)',
            'Auswertung eines 3-Tage-Ernährungsprotokolls',
            'Ernährungsanpassung entsprechend des aktuellen Therapieabschnitts',
            'Medizinisches Monitoring: Blutkontrollen nach 3 und 6 Monaten',
            'Ultraschall der Bauchorgane'
        ],
        en: [
            'BIA measurement to determine body composition',
            'Discussion of laboratory values (if available)',
            'Evaluation of a 3-day nutrition protocol',
            'Nutrition adjustment according to current therapy phase',
            'Medical monitoring: Blood checks after 3 and 6 months',
            'Ultrasound of abdominal organs'
        ]
    },
    bottomText: {
        de: 'Die Kosten für das Medikament (GLP-1-Analogon) sind nicht im Preis enthalten. Weder die Kosten für das Medikament noch die Kosten für die ärztliche Beratung und Begleitung werden derzeit von den gesetzlichen Krankenkassen übernommen.',
        en: 'The costs for the medication (GLP-1 analogue) are not included in the price. Neither the costs for the medication nor the costs for medical consultation and support are currently covered by statutory health insurance.'
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