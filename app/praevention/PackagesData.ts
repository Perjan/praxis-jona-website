export interface Package {
    id: string;
    name: string;
    price: string;
    description: string;
    url: string;
}

export const PackagesDE: Package[] = [
    {
        id: 'basic',
        name: 'BASIC',
        price: 'ab 1.200 Euro',
        description: 'Fundament medizinischer Prävention.',
        url: '/praevention/basic'
    },
    {
        id: 'medium',
        name: 'MEDIUM',
        price: 'ab 2.400 Euro',
        description: 'Erweiterte Diagnostik, Leistungsanalyse und Stoffwechselparameter.',
        url: '/praevention/medium'
    },
    {
        id: 'premium',
        name: 'PREMIUM',
        price: 'ab 4.000 Euro',
        description: 'Präventionsniveau auf Spitzensportstandard. Erweiterte Bildgebung, Zellbiologie, Immunologie und tiefe Analyse der persönlichen Leistungsfähigkeit.',
        url: '/praevention/premium'
    }
];

export const PackagesEN: Package[] = [
    {
        id: 'basic',
        name: 'BASIC',
        price: 'from €1,200',
        description: 'Foundation of medical prevention.',
        url: '/en/prevention/basic'
    },
    {
        id: 'medium',
        name: 'MEDIUM',
        price: 'from €2,400',
        description: 'Extended diagnostics, performance analysis and metabolic parameters.',
        url: '/en/prevention/medium'
    },
    {
        id: 'premium',
        name: 'PREMIUM',
        price: 'from €4,000',
        description: 'Prevention at elite sports standard. Extended imaging, cell biology, immunology and deep analysis of personal performance.',
        url: '/en/prevention/premium'
    }
];
