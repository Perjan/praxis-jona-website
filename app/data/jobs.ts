import { Constants } from "app/Constants";

export type JobLocale = "de" | "en";

export type JobDetailSection = {
    icon: string;
    title: string;
    items?: string[];
    paragraphs?: string[];
};

export type JobDetailContent = {
    id: string;
    locale: JobLocale;
    inLanguage: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    headline: string;
    subtitle: string;
    intro: string[];
    sections: JobDetailSection[];
    whyHeading: string;
    whyParagraphs: string[];
    applicationHeading: string;
    applicationIntro: string;
    applyCta: string;
    backLabel: string;
    jobsUrl: string;
    url: string;
    alternateUrl: string;
    applicationSubject: string;
    applicationEmail: string;
    datePosted: string;
    employmentType: string[];
    workHours: string;
    schemaDescription: string;
    schemaResponsibilities: string[];
    schemaQualifications: string[];
    schemaBenefits: string[];
};

export type JobListingItem = {
    href: string;
    title: string;
    location: string;
    summary: string;
    cta: string;
    isVisible?: boolean;
};

export type JobsPageCopy = {
    title: string;
    description: string;
    url: string;
    heading: string;
    intro: string;
};

export type JobNewsCardContent = {
    label: string;
    title: string;
    description: string;
    meta: string;
    href: string;
    cta: string;
};

export const physicianJobRoutes = {
    de: "/jobs/facharzt-allgemeinmedizin-innere-medizin-berlin-mitte",
    en: "/en/jobs/general-practitioner-internal-medicine-specialist-berlin-mitte",
} as const;

const applicationEmail = "jonida.gjolli@praxisjona.de";
const datePosted = "2026-07-04";

export const newJobOpeningCount = 1;

export const physicianJobByLocale: Record<JobLocale, JobDetailContent> = {
    de: {
        id: "facharzt-allgemeinmedizin-innere-medizin-berlin-mitte",
        locale: "de",
        inLanguage: "de-DE",
        title: "Facharzt für Allgemeinmedizin oder Innere Medizin (m/w/d)",
        metaTitle: "Facharzt Allgemeinmedizin / Innere Medizin (m/w/d) | Praxis Jona",
        metaDescription:
            "Praxis Jona in Berlin-Mitte sucht einen Facharzt für Allgemeinmedizin oder Innere Medizin (m/w/d) in Vollzeit mit Zeit für gute Medizin.",
        headline: "Facharzt für Allgemeinmedizin oder Innere Medizin (m/w/d) gesucht",
        subtitle: "Vollzeit (38,5 Stunden/Woche) | Praxis Jona | Berlin-Mitte",
        intro: [
            "Moderne Hausarztmedizin mit Zeit für gute Medizin.",
            "Sie möchten sich auf Ihre Patientinnen und Patienten konzentrieren, anstatt ständig unter Zeitdruck zu arbeiten?",
            "Dann freuen wir uns darauf, Sie kennenzulernen.",
            "Die Praxis Jona ist eine moderne, vollständig digitalisierte hausärztlich-internistische Praxis im Herzen von Berlin-Mitte. Neben der klassischen Hausarztmedizin legen wir besonderen Wert auf Präventionsmedizin, Ernährungsmedizin und Longevity. Als kleine Praxis mit kurzen Entscheidungswegen verbinden wir moderne Diagnostik mit einer persönlichen und hochwertigen medizinischen Versorgung.",
        ],
        sections: [
            {
                icon: "✨",
                title: "Das erwartet Sie",
                items: [
                    "Eigenverantwortliche hausärztliche Tätigkeit in einer modernen, digitalisierten Praxis",
                    "Ca. 15 Minuten pro Patient, damit ausreichend Zeit für Diagnostik, Beratung und Prävention bleibt",
                    "Nur ca. 25 Stunden Sprechstunde pro Woche",
                    "Die restliche Arbeitszeit ist bewusst für Laborbefunde, Arztbriefe, Reha- und Kuranträge, Hausbesuche sowie organisatorische Aufgaben eingeplant",
                    "Möglichkeit, Laborbefunde und Dokumentation teilweise flexibel im Homeoffice zu erledigen",
                    "Flexible Gestaltung Ihrer Sprechstunde",
                    "Keine Wochenend-, Nacht- oder Bereitschaftsdienste",
                    "Kaum administrativer Aufwand - Abrechnung und Organisation übernehmen wir",
                    "Unterstützung durch ein eingespieltes Team aus vier Medizinischen Fachangestellten und einer Auszubildenden für zwei Ärztinnen und Ärzte",
                    "Moderne Ultraschalldiagnostik (Abdomen und Schilddrüse)",
                    "Möglichkeit, eigene Schwerpunkte und Interessen aktiv einzubringen und weiterzuentwickeln",
                    "Strukturierte Einarbeitung über ca. einen Monat",
                ],
            },
            {
                icon: "✅",
                title: "Ihr Profil",
                items: [
                    "Facharzt für Allgemeinmedizin oder Innere Medizin",
                    "Erfahrung in der hausärztlichen Versorgung",
                    "Sicher in der Abdomen-Sonographie",
                    "Idealerweise Erfahrung in der Schilddrüsensonographie",
                    "Interesse an Präventionsmedizin, Ernährungsmedizin und modernen Versorgungskonzepten",
                    "Freude an einer patientenorientierten Medizin",
                    "Teamfähigkeit und Eigeninitiative",
                ],
            },
            {
                icon: "💬",
                title: "Wir bieten Ihnen",
                items: [
                    "Unbefristete Festanstellung",
                    "Vollzeit (38,5 Stunden/Woche)",
                    "30 Urlaubstage",
                    "5 Fortbildungstage pro Jahr",
                    "50 € monatlicher Sachbezugs- oder Essenszuschuss",
                    "Übernahme des Deutschlandtickets/BVG-Tickets",
                    "Flexible Arbeitszeiten innerhalb der Praxisorganisation",
                    "Urlaub zwischen Weihnachten und Silvester nach Absprache möglich",
                    "Moderne Praxisräume in zentraler Lage in Berlin-Mitte (Torstraße 125)",
                    "Vollständig digitalisierte Arbeitsabläufe mit papierarmer Praxis",
                    "Direkter Austausch mit der Praxisinhaberin und kurze Entscheidungswege",
                ],
            },
        ],
        whyHeading: "Warum Praxis Jona?",
        whyParagraphs: [
            "Wir möchten eine Praxis schaffen, in der Ärztinnen und Ärzte langfristig gerne arbeiten.",
            "Deshalb planen wir unsere Sprechstunden bewusst so, dass genügend Zeit für medizinische Qualität bleibt und administrative Aufgaben nicht erst nach Feierabend erledigt werden müssen. Gleichzeitig möchten wir gemeinsam moderne Hausarztmedizin weiterentwickeln und unseren Patientinnen und Patienten neben der klassischen Versorgung auch Präventionsmedizin, Ernährungsmedizin und Longevity auf höchstem Niveau anbieten.",
            "Neue Ideen, medizinische Schwerpunkte und digitale Lösungen sind bei uns ausdrücklich willkommen.",
            "Wenn Sie Freude an moderner Hausarztmedizin haben und Teil eines engagierten kleinen Teams werden möchten, freuen wir uns auf Ihre Bewerbung.",
        ],
        applicationHeading: "Bewerbung",
        applicationIntro: "Wir freuen uns auf Ihre Bewerbung per E-Mail.",
        applyCta: "Jetzt per E-Mail bewerben",
        backLabel: "← Zurück zu Karriere",
        jobsUrl: "/jobs",
        url: physicianJobRoutes.de,
        alternateUrl: physicianJobRoutes.en,
        applicationSubject: "Bewerbung: Facharzt für Allgemeinmedizin oder Innere Medizin (m/w/d)",
        applicationEmail,
        datePosted,
        employmentType: ["FULL_TIME"],
        workHours: "38,5 Stunden/Woche",
        schemaDescription:
            "Praxis Jona in Berlin-Mitte sucht einen Facharzt für Allgemeinmedizin oder Innere Medizin (m/w/d) in Vollzeit (38,5 Stunden/Woche). Die moderne, vollständig digitalisierte hausärztlich-internistische Praxis bietet ca. 15 Minuten pro Patient, ca. 25 Stunden Sprechstunde pro Woche, flexible Arbeitszeiten, keine Wochenend-, Nacht- oder Bereitschaftsdienste und Raum für Präventionsmedizin, Ernährungsmedizin und Longevity.",
        schemaResponsibilities: [
            "Eigenverantwortliche hausärztliche Tätigkeit",
            "Diagnostik, Beratung und Prävention mit ca. 15 Minuten pro Patient",
            "Bearbeitung von Laborbefunden, Arztbriefen, Reha- und Kuranträgen, Hausbesuchen und organisatorischen Aufgaben",
            "Ultraschalldiagnostik von Abdomen und Schilddrüse",
        ],
        schemaQualifications: [
            "Facharzt für Allgemeinmedizin oder Innere Medizin",
            "Erfahrung in der hausärztlichen Versorgung",
            "Sicher in der Abdomen-Sonographie",
            "Interesse an Präventionsmedizin, Ernährungsmedizin und modernen Versorgungskonzepten",
        ],
        schemaBenefits: [
            "Unbefristete Festanstellung",
            "30 Urlaubstage",
            "5 Fortbildungstage pro Jahr",
            "50 EUR monatlicher Sachbezugs- oder Essenszuschuss",
            "Übernahme des Deutschlandtickets/BVG-Tickets",
            "Flexible Arbeitszeiten und teilweise Homeoffice für Befunde und Dokumentation",
        ],
    },
    en: {
        id: "general-practitioner-internal-medicine-specialist-berlin-mitte",
        locale: "en",
        inLanguage: "en-US",
        title: "Specialist in General Medicine or Internal Medicine (f/m/d)",
        metaTitle: "General Medicine / Internal Medicine Specialist (f/m/d) | Praxis Jona",
        metaDescription:
            "Praxis Jona in Berlin-Mitte is hiring a full-time specialist in general medicine or internal medicine with time for high-quality patient care.",
        headline: "Specialist in General Medicine or Internal Medicine (f/m/d) wanted",
        subtitle: "Full-time (38.5 hours/week) | Praxis Jona | Berlin-Mitte",
        intro: [
            "Modern family medicine with time for good medicine.",
            "Would you like to focus on your patients instead of constantly working under time pressure?",
            "Then we look forward to getting to know you.",
            "Praxis Jona is a modern, fully digitalized general medicine and internal medicine practice in the heart of Berlin-Mitte. Alongside classic family medicine, we place particular emphasis on preventive medicine, nutritional medicine and longevity. As a small practice with short decision-making paths, we combine modern diagnostics with personal, high-quality medical care.",
        ],
        sections: [
            {
                icon: "✨",
                title: "What awaits you",
                items: [
                    "Independent general practice work in a modern, digitalized practice",
                    "Around 15 minutes per patient, leaving enough time for diagnostics, consultation and prevention",
                    "Only around 25 hours of consultation time per week",
                    "The remaining working time is intentionally reserved for lab results, physician letters, rehabilitation and spa applications, home visits and organizational tasks",
                    "Option to complete lab result review and documentation partly and flexibly from home",
                    "Flexible structuring of your consultation hours",
                    "No weekend, night or on-call duties",
                    "Very little administrative workload - we handle billing and organization",
                    "Support from an experienced team of four medical assistants and one trainee for two physicians",
                    "Modern ultrasound diagnostics (abdomen and thyroid)",
                    "Opportunity to actively contribute and further develop your own focus areas and interests",
                    "Structured onboarding over around one month",
                ],
            },
            {
                icon: "✅",
                title: "Your profile",
                items: [
                    "Specialist qualification in general medicine or internal medicine",
                    "Experience in family medicine/general practice care",
                    "Confident in abdominal sonography",
                    "Ideally experience in thyroid ultrasound",
                    "Interest in preventive medicine, nutritional medicine and modern care concepts",
                    "Enjoyment of patient-oriented medicine",
                    "Team spirit and initiative",
                ],
            },
            {
                icon: "💬",
                title: "What we offer",
                items: [
                    "Permanent employment contract",
                    "Full-time role (38.5 hours/week)",
                    "30 vacation days",
                    "5 continuing education days per year",
                    "EUR 50 monthly non-cash benefit or meal subsidy",
                    "Coverage of the Deutschlandticket/BVG ticket",
                    "Flexible working hours within the practice organization",
                    "Vacation between Christmas and New Year possible by arrangement",
                    "Modern practice rooms in a central Berlin-Mitte location (Torstraße 125)",
                    "Fully digitalized workflows in a low-paper practice",
                    "Direct exchange with the practice owner and short decision-making paths",
                ],
            },
        ],
        whyHeading: "Why Praxis Jona?",
        whyParagraphs: [
            "We want to create a practice where physicians enjoy working for the long term.",
            "That is why we deliberately plan consultation hours so there is enough time for medical quality and administrative tasks do not have to be completed after hours. At the same time, we want to further develop modern family medicine together and offer our patients preventive medicine, nutritional medicine and longevity at the highest level alongside classic care.",
            "New ideas, medical focus areas and digital solutions are explicitly welcome.",
            "If you enjoy modern family medicine and would like to become part of a committed small team, we look forward to receiving your application.",
        ],
        applicationHeading: "Application",
        applicationIntro: "We look forward to receiving your application by email.",
        applyCta: "Apply via email",
        backLabel: "← Back to jobs",
        jobsUrl: "/en/jobs",
        url: physicianJobRoutes.en,
        alternateUrl: physicianJobRoutes.de,
        applicationSubject: "Application: Specialist in General Medicine or Internal Medicine (f/m/d)",
        applicationEmail,
        datePosted,
        employmentType: ["FULL_TIME"],
        workHours: "38.5 hours/week",
        schemaDescription:
            "Praxis Jona in Berlin-Mitte is hiring a full-time specialist in general medicine or internal medicine (38.5 hours/week). The modern, fully digitalized general medicine and internal medicine practice offers around 15 minutes per patient, around 25 hours of consultation time per week, flexible working hours, no weekend, night or on-call duties, and room to develop preventive medicine, nutritional medicine and longevity.",
        schemaResponsibilities: [
            "Independent general practice care",
            "Diagnostics, consultation and prevention with around 15 minutes per patient",
            "Reviewing lab results, physician letters, rehabilitation and spa applications, home visits and organizational tasks",
            "Abdominal and thyroid ultrasound diagnostics",
        ],
        schemaQualifications: [
            "Specialist qualification in general medicine or internal medicine",
            "Experience in family medicine/general practice care",
            "Confident in abdominal sonography",
            "Interest in preventive medicine, nutritional medicine and modern care concepts",
        ],
        schemaBenefits: [
            "Permanent employment contract",
            "30 vacation days",
            "5 continuing education days per year",
            "EUR 50 monthly non-cash benefit or meal subsidy",
            "Coverage of the Deutschlandticket/BVG ticket",
            "Flexible working hours and partial remote work for result review and documentation",
        ],
    },
};

export const jobsPageCopyByLocale: Record<JobLocale, JobsPageCopy> = {
    de: {
        title: "Karriere bei Praxis Jona in Berlin-Mitte",
        description: "Entdecken Sie aktuelle Stellenangebote bei Praxis Jona in Berlin-Mitte und werden Sie Teil unseres engagierten medizinischen Teams.",
        url: "/jobs",
        heading: "Offene Stellen",
        intro: "Hier finden Sie alle aktuellen Jobangebote der Praxis Jona.",
    },
    en: {
        title: "Jobs at Praxis Jona in Berlin",
        description: "Discover current open positions at Praxis Jona in Berlin-Mitte and join our patient-focused medical team.",
        url: "/en/jobs",
        heading: "Open Positions",
        intro: "This page is the central place for current job openings at Praxis Jona.",
    },
};

export const jobListingsByLocale: Record<JobLocale, JobListingItem[]> = {
    de: [
        {
            href: physicianJobByLocale.de.url,
            title: physicianJobByLocale.de.title,
            location: "Praxis Jona, Torstraße 125, 10119 Berlin-Mitte.",
            summary: "Vollzeitstelle für moderne Hausarztmedizin mit Zeit für Diagnostik, Beratung und Prävention.",
            cta: "Zur Stellenanzeige",
        },
        {
            href: "/jobs/mfa-mwd-berlin-mitte",
            title: "MFA (m/w/d) in Teil- oder Vollzeit",
            location: "Praxis Jona, Torstraße 125, 10119 Berlin-Mitte.",
            summary: "Freundliche, engagierte und teamfähige medizinische Fachangestellte gesucht.",
            cta: "Zur Stellenanzeige",
            isVisible: false,
        },
    ],
    en: [
        {
            href: physicianJobByLocale.en.url,
            title: physicianJobByLocale.en.title,
            location: "Praxis Jona, Torstraße 125, 10119 Berlin-Mitte.",
            summary: "Full-time role for modern family medicine with time for diagnostics, consultation and prevention.",
            cta: "View job posting",
        },
        {
            href: "/en/jobs/medical-assistant-berlin-mitte",
            title: "Medical Assistant (MFA) (f/m/d), part-time or full-time",
            location: "Praxis Jona, Torstraße 125, 10119 Berlin-Mitte.",
            summary: "We are looking for a friendly, committed and team-oriented medical assistant.",
            cta: "View job posting",
            isVisible: false,
        },
    ],
};

export function getVisibleJobListings(locale: JobLocale) {
    return jobListingsByLocale[locale].filter((job) => job.isVisible !== false);
}

export const physicianJobNewsCardByLocale: Record<JobLocale, JobNewsCardContent> = {
    de: {
        label: "Neue Stelle",
        title: "Wir suchen: Facharzt für Allgemeinmedizin oder Innere Medizin (m/w/d)",
        description: "Vollzeit in Berlin-Mitte mit ca. 15 Minuten pro Patient, moderner Diagnostik und Raum für Prävention, Ernährungsmedizin und Longevity.",
        meta: "Praxis Jona | 38,5 Stunden/Woche | keine Wochenend-, Nacht- oder Bereitschaftsdienste",
        href: physicianJobByLocale.de.url,
        cta: "Zur Stellenanzeige",
    },
    en: {
        label: "New opening",
        title: "We are hiring: Specialist in General Medicine or Internal Medicine (f/m/d)",
        description: "Full-time role in Berlin-Mitte with around 15 minutes per patient, modern diagnostics and room for prevention, nutritional medicine and longevity.",
        meta: "Praxis Jona | 38.5 hours/week | no weekend, night or on-call duties",
        href: physicianJobByLocale.en.url,
        cta: "View job posting",
    },
};

export function getJobApplicationMailTo(job: JobDetailContent) {
    return `mailto:${job.applicationEmail}?subject=${encodeURIComponent(job.applicationSubject)}`;
}

export function buildJobPostingStructuredData(job: JobDetailContent) {
    return {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: job.title,
        description: job.schemaDescription,
        datePosted: job.datePosted,
        employmentType: job.employmentType,
        workHours: job.workHours,
        industry: "Healthcare",
        identifier: {
            "@type": "PropertyValue",
            name: "Praxis Jona",
            value: job.id,
        },
        hiringOrganization: {
            "@type": "Organization",
            name: "Praxis Jona",
            sameAs: Constants.baseUrl,
            logo: `${Constants.baseUrl}/images/og-image.png`,
        },
        jobLocation: {
            "@type": "Place",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Torstraße 125",
                addressLocality: "Berlin",
                postalCode: "10119",
                addressCountry: "DE",
            },
        },
        inLanguage: job.inLanguage,
        url: `${Constants.baseUrl}${job.url}`,
        responsibilities: job.schemaResponsibilities.join("\n"),
        qualifications: job.schemaQualifications.join("\n"),
        jobBenefits: job.schemaBenefits.join("\n"),
    };
}

export function buildJobBreadcrumbStructuredData(job: JobDetailContent) {
    const homeName = job.locale === "de" ? "Startseite" : "Home";
    const jobsName = job.locale === "de" ? "Karriere" : "Jobs";
    const homeUrl = job.locale === "de" ? Constants.baseUrl : `${Constants.baseUrl}/en`;

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: homeName,
                item: homeUrl,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: jobsName,
                item: `${Constants.baseUrl}${job.jobsUrl}`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: job.title,
                item: `${Constants.baseUrl}${job.url}`,
            },
        ],
    };
}

export function buildJobsListingStructuredData(locale: JobLocale) {
    const page = jobsPageCopyByLocale[locale];
    const visibleJobListings = getVisibleJobListings(locale);

    return {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: page.title,
        description: page.description,
        url: `${Constants.baseUrl}${page.url}`,
        inLanguage: locale === "de" ? "de-DE" : "en-US",
        mainEntity: {
            "@type": "ItemList",
            itemListElement: visibleJobListings.map((job, index) => ({
                "@type": "ListItem",
                position: index + 1,
                url: `${Constants.baseUrl}${job.href}`,
                name: job.title,
            })),
        },
    };
}
