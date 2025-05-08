import { Constants } from "app/Constants";

export const privateCheckupPlans = [
    {
        title: {
            de: 'Silber',
            en: 'Silver'
        },
        price: {
            de: 'ab 213,34€',
            en: 'from 213.34€'
        },
        billingCycle: {
            de: 'nach GOÄ',
            en: 'according to GOÄ'
        },
        description: {
            de: 'Umfassender Gesundheitscheck',
            en: 'Comprehensive health check'
        },
        details: {
            de: [
                'Anamnese',
                'Körperliche Untersuchung',
                'Beratung',
                'Impfberatung',
                'Ruhe-EKG und ein Belastung-EKG wird bei Indikation erstellt (Belastung-EKG wird extra nach GOÄ abgerechnet)',
                'Labordiagnostik (Großes BB, Kreatinin, Natrium, Kalium, Calcium, GOT, GPT, GGT, Harnsäure, Gesamtcholesterin, LDL, HDL, Triglyceride, TSH, Ferritin, Nüchtern Blutzucker, HbA1c)',
                'Nährstoffe, falls gewünscht, werden extra vom Labor abgerechnet',
                'Ultraschall der Bauchorgane',
                'Ultraschall der Schilddrüse'
            ],
            en: [
                'Medical history',
                'Physical examination',
                'Consultation',
                'Vaccination advice',
                'Resting ECG and stress ECG if indicated (stress ECG charged separately according to GOÄ)',
                'Laboratory diagnostics (Complete blood count, creatinine, sodium, potassium, calcium, GOT, GPT, GGT, uric acid, total cholesterol, LDL, HDL, triglycerides, TSH, ferritin, fasting blood glucose, HbA1c)',
                'Nutrients, if desired, are billed separately by the laboratory',
                'Abdominal ultrasound',
                'Thyroid ultrasound'
            ]
        },
        buttonText: {
            de: 'Termin buchen',
            en: 'Book appointment'
        },
        link: {
            de: Constants.appointmentUrl,
            en: Constants.appointmentUrl
        }
    },
    {
        title: {
            de: 'Gold',
            en: 'Gold'
        },
        price: {
            de: 'ab 371,30€',
            en: 'from 371.30€'
        },
        billingCycle: {
            de: 'nach GOÄ',
            en: 'according to GOÄ'
        },
        description: {
            de: 'Premium Gesundheitscheck',
            en: 'Premium health check'
        },
        details: {
            de: [
                'Anamnese',
                'Körperliche Untersuchung',
                'Beratung',
                'Impfberatung',
                'Ruhe-EKG und ein Belastung-EKG wird bei Indikation erstellt (Belastung-EKG wird extra nach GOÄ abgerechnet)',
                'Labordiagnostik (Großes BB, Kreatinin, Natrium, Kalium, Calcium, GOT, GPT, GGT, Harnsäure, Gesamtcholesterin, LDL, HDL, Triglyceride, TSH, Ferritin, Nüchtern Blutzucker, HbA1c, Eiweißelektrophorese)',
                'Nährstoffe, falls gewünscht, werden extra vom Labor abgerechnet',
                'Ultraschall der Bauchorgane',
                'Ultraschall der Schilddrüse',
                'Schlaganfall Vorsorgeuntersuchung mittels Ultraschall der Halsschlagadern'
            ],
            en: [
                'Medical history',
                'Physical examination',
                'Consultation',
                'Vaccination advice',
                'Resting ECG and stress ECG if indicated (stress ECG charged separately according to GOÄ)',
                'Laboratory diagnostics (Complete blood count, creatinine, sodium, potassium, calcium, GOT, GPT, GGT, uric acid, total cholesterol, LDL, HDL, triglycerides, TSH, ferritin, fasting blood glucose, HbA1c, protein electrophoresis)',
                'Nutrients, if desired, are billed separately by the laboratory',
                'Abdominal ultrasound',
                'Thyroid ultrasound',
                'Stroke prevention examination via ultrasound of the carotid arteries'
            ]
        },
        buttonText: {
            de: 'Termin buchen',
            en: 'Book appointment'
        },
        link: {
            de: Constants.appointmentUrl,
            en: Constants.appointmentUrl
        }
    }
]; 