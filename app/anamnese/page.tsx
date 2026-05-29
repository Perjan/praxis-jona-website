'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { z } from 'zod';
import Logo from '/public/images/praxis-jona-web-logo.png';
import SignaturePadField, { SignaturePadHandle } from './SignaturePad';

type Locale = 'de' | 'en';

const copy = {
  de: {
    validation: {
      name: 'Name muss mindestens 2 Zeichen lang sein',
      birthdate: 'Geburtsdatum kann nicht in der Zukunft liegen',
      height: 'Größe muss zwischen 50 und 250 cm liegen',
      weight: 'Gewicht muss zwischen 20 und 300 kg liegen',
      occupation: 'Beruf ist erforderlich',
      email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
      signature: 'Bitte unterschreiben Sie den Bogen',
    },
    title: 'Anamnesebogen',
    intro: 'Bitte füllen Sie diesen Bogen möglichst vollständig aus. Die Angaben helfen uns, Ihr Gesundheitsprofil ganzheitlich zu verstehen und Ihre Behandlung individuell zu gestalten.',
    personal: 'Persönliche Angaben',
    birthdate: 'Geburtsdatum',
    age: 'Alter',
    years: 'Jahre',
    weight: 'Gewicht (kg)',
    height: 'Größe (cm)',
    occupation: 'Beruf',
    email: 'Kontakt / E-Mail',
    complaintsGoals: 'Beschwerden & Ziele',
    complaintsQuestion: 'Haben Sie aktuell gesundheitliche Beschwerden? Wenn ja, welche?',
    goalsQuestion: 'Was sind Ihre Ziele? (z. B. mehr Energie, Prävention, Muskelaufbau, Leistungsfähigkeit)',
    history: 'Vorerkrankungen & Operationen',
    diseasesQuestion: 'Wurden bei Ihnen relevante Erkrankungen diagnostiziert (z. B. Herz, Stoffwechsel, Autoimmun)?',
    operationsQuestion: 'Haben Sie Operationen hinter sich?',
    familyHistory: 'Familienanamnese',
    familyIntro: 'Gab es in Ihrer Familie (Eltern/Großeltern) Erkrankungen wie:',
    heartStroke: 'Herzinfarkt / Schlaganfall',
    cancer: 'Krebs (Art?)',
    dementia: 'Demenz / Alzheimer',
    diabetes: 'Diabetes / Stoffwechselstörungen',
    medicationsSupplements: 'Medikamente & Nahrungsergänzung',
    medicationsQuestion: 'Nehmen Sie regelmäßig Medikamente ein? Wenn ja, welche?',
    supplementsQuestion: 'Nehmen Sie Nahrungsergänzungsmittel ein? Wenn ja, welche?',
    lifestyle: 'Lebensstil',
    exerciseQuestion: 'Bewegung: Wie oft pro Woche trainieren Sie?',
    sleep: 'Schlaf',
    diet: 'Ernährung',
    smoking: 'Rauchen',
    smokingNo: 'nein',
    smokingYes: 'ja, wie viel:',
    alcohol: 'Alkohol',
    stress: 'Stressbelastung',
    genderSpecific: 'Geschlechtsspezifische Angaben',
    gender: 'Geschlecht',
    female: 'Weiblich',
    male: 'Männlich',
    diverse: 'Divers',
    forWomen: 'Für Frauen:',
    cycleRegular: 'Zyklus regelmäßig?',
    libidoEnergy: 'Libido / Energie',
    pregnancies: 'Schwangerschaften',
    children: 'Kinder',
    hormonal: 'Hormonelle Verhütung oder Therapie',
    ifYesWhich: 'Falls ja, welche:',
    forMen: 'Für Männer:',
    testosteroneMeasured: 'Testosteronwerte jemals gemessen?',
    testosteroneSubstitution: 'Falls Mangel, ist eine Substitution erfolgt?',
    signature: 'Unterschrift',
    signatureConfirm: 'Bitte bestätigen Sie mit Ihrer Unterschrift, dass die gemachten Angaben der Wahrheit entsprechen.',
    clearSignature: 'Unterschrift löschen',
    submit: 'Absenden',
    submitting: 'Wird übermittelt...',
    thanks: 'Vielen Dank!',
    returnDevice: 'Bitte geben Sie das Gerät an der Rezeption zurück.',
    newPatient: 'Neuer Patient',
    error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
    checkFields: 'Bitte überprüfen Sie die markierten Felder.',
    options: {
      gut: 'gut',
      mittelmaessig: 'mittelmäßig',
      schlecht: 'schlecht',
      mischkoestlich: 'mischköstlich',
      vegetarisch: 'vegetarisch',
      vegan: 'vegan',
      lowCarb: 'low carb',
      mediterran: 'mediterran',
      nein: 'nein',
      ja: 'ja',
      gelegentlich: 'gelegentlich',
      regelmaessig: 'regelmäßig',
      niedrig: 'niedrig',
      mittel: 'mittel',
      hoch: 'hoch',
      normal: 'normal',
      vermindert: 'vermindert',
    },
  },
  en: {
    validation: {
      name: 'Name must be at least 2 characters long',
      birthdate: 'Date of birth cannot be in the future',
      height: 'Height must be between 50 and 250 cm',
      weight: 'Weight must be between 20 and 300 kg',
      occupation: 'Occupation is required',
      email: 'Please enter a valid email address',
      signature: 'Please sign the form',
    },
    title: 'Medical History Form',
    intro: 'Please complete this form as fully as possible. Your answers help us understand your health profile and prepare your care individually.',
    personal: 'Personal Information',
    birthdate: 'Date of birth',
    age: 'Age',
    years: 'years',
    weight: 'Weight (kg)',
    height: 'Height (cm)',
    occupation: 'Occupation',
    email: 'Contact / Email',
    complaintsGoals: 'Current Concerns & Goals',
    complaintsQuestion: 'Do you currently have any health concerns? If yes, which ones?',
    goalsQuestion: 'What are your goals? (e.g. more energy, prevention, muscle building, performance)',
    history: 'Previous Conditions & Operations',
    diseasesQuestion: 'Have you been diagnosed with relevant conditions (e.g. heart, metabolism, autoimmune)?',
    operationsQuestion: 'Have you had any operations?',
    familyHistory: 'Family History',
    familyIntro: 'Have any of the following occurred in your family (parents/grandparents):',
    heartStroke: 'Heart attack / stroke',
    cancer: 'Cancer (type?)',
    dementia: 'Dementia / Alzheimer’s',
    diabetes: 'Diabetes / metabolic disorders',
    medicationsSupplements: 'Medication & Supplements',
    medicationsQuestion: 'Do you regularly take medication? If yes, which?',
    supplementsQuestion: 'Do you take supplements? If yes, which?',
    lifestyle: 'Lifestyle',
    exerciseQuestion: 'Exercise: how often do you train per week?',
    sleep: 'Sleep',
    diet: 'Diet',
    smoking: 'Smoking',
    smokingNo: 'no',
    smokingYes: 'yes, how much:',
    alcohol: 'Alcohol',
    stress: 'Stress level',
    genderSpecific: 'Sex-Specific Information',
    gender: 'Sex',
    female: 'Female',
    male: 'Male',
    diverse: 'Diverse',
    forWomen: 'For women:',
    cycleRegular: 'Regular cycle?',
    libidoEnergy: 'Libido / energy',
    pregnancies: 'Pregnancies',
    children: 'Children',
    hormonal: 'Hormonal contraception or therapy',
    ifYesWhich: 'If yes, which:',
    forMen: 'For men:',
    testosteroneMeasured: 'Have testosterone levels ever been measured?',
    testosteroneSubstitution: 'If deficient, has substitution been started?',
    signature: 'Signature',
    signatureConfirm: 'Please confirm with your signature that the information provided is true.',
    clearSignature: 'Clear signature',
    submit: 'Submit',
    submitting: 'Submitting...',
    thanks: 'Thank you!',
    returnDevice: 'Please return the device to reception.',
    newPatient: 'New patient',
    error: 'An error occurred. Please try again later.',
    checkFields: 'Please check the marked fields.',
    options: {
      gut: 'good',
      mittelmaessig: 'moderate',
      schlecht: 'poor',
      mischkoestlich: 'mixed diet',
      vegetarisch: 'vegetarian',
      vegan: 'vegan',
      lowCarb: 'low carb',
      mediterran: 'Mediterranean',
      nein: 'no',
      ja: 'yes',
      gelegentlich: 'occasionally',
      regelmaessig: 'regularly',
      niedrig: 'low',
      mittel: 'medium',
      hoch: 'high',
      normal: 'normal',
      vermindert: 'reduced',
    },
  },
} as const;

interface FormData {
  // Persoenliche Angaben
  name: string;
  birthdate: string;
  age: string;
  height: string;
  weight: string;
  occupation: string;
  email: string;

  // Beschwerden & Ziele
  currentComplaints: string;
  programGoals: string;

  // Vorerkrankungen & Operationen
  previousDiseases: string;
  operations: string;

  // Familienanamnese
  familyHeartStroke: string;
  familyCancer: string;
  familyDementia: string;
  familyDiabetes: string;

  // Medikamente & Nahrungsergaenzung
  medications: string;
  supplements: string;

  // Lebensstil
  exerciseFrequency: string;
  sleepQuality: 'gut' | 'mittelmäßig' | 'schlecht' | '';
  diet: 'mischköstlich' | 'vegetarisch' | 'vegan' | 'low carb' | 'mediterran' | '';
  smoking: 'nein' | 'ja' | '';
  smokingAmount: string;
  alcohol: 'nein' | 'gelegentlich' | 'regelmäßig' | '';
  stressLevel: 'niedrig' | 'mittel' | 'hoch' | '';

  // Geschlechtsspezifisch
  gender: 'female' | 'male' | 'diverse' | '';

  // Fuer Frauen
  cycleRegular: 'ja' | 'nein' | '';
  femaleLibidoEnergy: 'normal' | 'vermindert' | '';
  pregnancies: string;
  children: string;
  hormonalContraception: 'ja' | 'nein' | '';
  hormonalContraceptionDetails: string;

  // Fuer Maenner
  maleLibidoEnergy: 'normal' | 'vermindert' | '';
  testosteroneMeasured: 'ja' | 'nein' | '';
  testosteroneSubstitution: 'ja' | 'nein' | '';
  signature: string;
}

// Zod validation schema
function anamneseSchema(locale: Locale) {
  const t = copy[locale].validation;

  return z.object({
  // Personal information - all required
  name: z.string().min(2, t.name),
  birthdate: z.string().refine((date) => {
    const birthDate = new Date(date);
    const today = new Date();
    return birthDate <= today;
  }, t.birthdate),
  age: z.string().optional(),
  height: z.string().refine((val) => {
    const num = parseInt(val);
    return num >= 50 && num <= 250;
  }, t.height),
  weight: z.string().refine((val) => {
    const num = parseInt(val);
    return num >= 20 && num <= 300;
  }, t.weight),
  occupation: z.string().min(1, t.occupation),
  email: z.string().email(t.email),

  // Optional medical history fields
  currentComplaints: z.string().optional(),
  programGoals: z.string().optional(),
  previousDiseases: z.string().optional(),
  operations: z.string().optional(),
  familyHeartStroke: z.string().optional(),
  familyCancer: z.string().optional(),
  familyDementia: z.string().optional(),
  familyDiabetes: z.string().optional(),
  medications: z.string().optional(),
  supplements: z.string().optional(),
  exerciseFrequency: z.string().optional(),
  sleepQuality: z.string().optional(),
  diet: z.string().optional(),
  smoking: z.string().optional(),
  smokingAmount: z.string().optional(),
  alcohol: z.string().optional(),
  stressLevel: z.string().optional(),
  gender: z.string().optional(),
  cycleRegular: z.string().optional(),
  femaleLibidoEnergy: z.string().optional(),
  pregnancies: z.string().optional(),
  children: z.string().optional(),
  hormonalContraception: z.string().optional(),
  hormonalContraceptionDetails: z.string().optional(),
  maleLibidoEnergy: z.string().optional(),
  testosteroneMeasured: z.string().optional(),
  testosteroneSubstitution: z.string().optional(),
  signature: z.string().min(1, t.signature),
  });
}

// Helper component for error display
const ErrorMessage = ({ error }: { error?: string }) => {
  if (!error) return null;
  return <p className="mt-1 text-sm text-red-600">{error}</p>;
};

const calculateAgeFromBirthdate = (dateStr: string) => {
  if (!dateStr) return '';
  const birthDate = new Date(dateStr);
  if (Number.isNaN(birthDate.getTime())) return '';

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age -= 1;
  }

  return age >= 0 ? String(age) : '';
};

export default function AnamnesePage({ locale = 'de' }: { locale?: Locale } = {}) {
  const t = copy[locale];
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthdate: '',
    age: '',
    height: '',
    weight: '',
    occupation: '',
    email: '',
    currentComplaints: '',
    programGoals: '',
    previousDiseases: '',
    operations: '',
    familyHeartStroke: '',
    familyCancer: '',
    familyDementia: '',
    familyDiabetes: '',
    medications: '',
    supplements: '',
    exerciseFrequency: '',
    sleepQuality: '',
    diet: '',
    smoking: '',
    smokingAmount: '',
    alcohol: '',
    stressLevel: '',
    gender: '',
    cycleRegular: '',
    femaleLibidoEnergy: '',
    pregnancies: '',
    children: '',
    hormonalContraception: '',
    hormonalContraceptionDetails: '',
    maleLibidoEnergy: '',
    testosteroneMeasured: '',
    testosteroneSubstitution: '',
    signature: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const signaturePadRef = useRef<SignaturePadHandle | null>(null);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => {
      const updated = { ...prev, [field]: value };
      if (field === 'birthdate') {
        updated.age = calculateAgeFromBirthdate(value);
      }
      return updated;
    });
    // Clear validation error for this field when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
    if (field === 'birthdate' && validationErrors.age) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.age;
        return newErrors;
      });
    }
  };

  // Hide header/footer navigation like in TV page
  useEffect(() => {
    // Hide header and footer
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    if (header) {
      (header as HTMLElement).style.display = 'none';
    }
    if (footer) {
      (footer as HTMLElement).style.display = 'none';
    }

    // Cleanup: restore header and footer when component unmounts
    return () => {
      if (header) {
        (header as HTMLElement).style.display = '';
      }
      if (footer) {
        (footer as HTMLElement).style.display = '';
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setValidationErrors({});

    try {
      const signatureData = signaturePadRef.current?.getSignature() ?? formData.signature;
      const dataToValidate = { ...formData, signature: signatureData };

      if (signatureData !== formData.signature) {
        setFormData(prev => ({ ...prev, signature: signatureData }));
      }

      // Validate form data with Zod
      const validatedData = anamneseSchema(locale).parse(dataToValidate);

      const response = await fetch('/api/anamnese', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validatedData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setSubmitMessage(t.error);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const errors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path && issue.path[0]) {
            errors[issue.path[0] as string] = issue.message;
          }
        });
        setValidationErrors(errors);
        setSubmitMessage(t.checkFields);
      } else {
        console.error('Form submission error:', error);
        setSubmitMessage(t.error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewPatient = () => {
    setFormData({
      name: '',
      birthdate: '',
      age: '',
      height: '',
      weight: '',
      occupation: '',
      email: '',
      currentComplaints: '',
      programGoals: '',
      previousDiseases: '',
      operations: '',
      familyHeartStroke: '',
      familyCancer: '',
      familyDementia: '',
      familyDiabetes: '',
      medications: '',
      supplements: '',
      exerciseFrequency: '',
      sleepQuality: '',
      diet: '',
      smoking: '',
      smokingAmount: '',
      alcohol: '',
      stressLevel: '',
      gender: '',
      cycleRegular: '',
      femaleLibidoEnergy: '',
      pregnancies: '',
      children: '',
      hormonalContraception: '',
      hormonalContraceptionDetails: '',
      maleLibidoEnergy: '',
      testosteroneMeasured: '',
      testosteroneSubstitution: '',
      signature: '',
    });
    setIsSubmitted(false);
    setSubmitMessage('');
    setValidationErrors({});
    signaturePadRef.current?.clear();
  };

  // Thank you screen
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 w-screen h-screen bg-primary flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mb-8">
            <svg
              className="mx-auto h-24 w-24 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t.thanks}</h1>
          <p className="text-2xl md:text-3xl text-white mb-12">
            {t.returnDevice}
          </p>
          <button
            onClick={handleNewPatient}
            className="bg-white text-primary px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            {t.newPatient}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src={Logo}
            alt="Praxis Jona Logo"
            className="h-16 w-auto object-contain"
            priority
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">{t.title}</h1>
        <p className="text-gray-600 mb-8 text-center">
          {t.intro}
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Persönliche Angaben */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.personal}</h2>
            <div className="flex flex-wrap gap-4">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  id="name" name="name" aria-label="name" value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                    validationErrors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <ErrorMessage error={validationErrors.name} />
              </div>
              <div className="w-full md:w-[calc(50%-0.5rem)]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.birthdate} <span className="text-red-600">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="date"
                    required
                    id="birthdate" name="birthdate" aria-label="birthdate" value={formData.birthdate}
                    onChange={(e) => handleInputChange('birthdate', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                      validationErrors.birthdate ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formData.age && (
                    <span className="text-sm text-gray-600 whitespace-nowrap">
                      {t.age}: <span className="font-semibold">{formData.age}</span> {t.years}
                    </span>
                  )}
                </div>
                <ErrorMessage error={validationErrors.birthdate} />
              </div>
              <div className="w-full md:w-[calc(50%-0.5rem)]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.weight} <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  required
                  id="weight" name="weight" aria-label="weight" value={formData.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                    validationErrors.weight ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <ErrorMessage error={validationErrors.weight} />
              </div>
              <div className="w-full md:w-[calc(50%-0.5rem)]">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.height} <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  required
                  id="height" name="height" aria-label="height" value={formData.height}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                    validationErrors.height ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <ErrorMessage error={validationErrors.height} />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.occupation} <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  id="occupation" name="occupation" aria-label="occupation" value={formData.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                    validationErrors.occupation ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <ErrorMessage error={validationErrors.occupation} />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.email} <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  id="email" name="email" aria-label="email" value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                    validationErrors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <ErrorMessage error={validationErrors.email} />
              </div>
            </div>
          </section>

          {/* Beschwerden & Ziele */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.complaintsGoals}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.complaintsQuestion}
                </label>
                <textarea
                  rows={3}
                  id="currentComplaints" name="currentComplaints" aria-label="currentComplaints" value={formData.currentComplaints}
                  onChange={(e) => handleInputChange('currentComplaints', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.goalsQuestion}
                </label>
                <textarea
                  rows={3}
                  id="programGoals" name="programGoals" aria-label="programGoals" value={formData.programGoals}
                  onChange={(e) => handleInputChange('programGoals', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </section>

          {/* Vorerkrankungen & Operationen */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.history}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.diseasesQuestion}
                </label>
                <textarea
                  rows={3}
                  id="previousDiseases" name="previousDiseases" aria-label="previousDiseases" value={formData.previousDiseases}
                  onChange={(e) => handleInputChange('previousDiseases', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.operationsQuestion}
                </label>
                <textarea
                  rows={3}
                  id="operations" name="operations" aria-label="operations" value={formData.operations}
                  onChange={(e) => handleInputChange('operations', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </section>

          {/* Familienanamnese */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.familyHistory}</h2>
            <p className="text-sm text-gray-600 mb-4">{t.familyIntro}</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.heartStroke}</label>
                <input
                  type="text"
                  id="familyHeartStroke" name="familyHeartStroke" aria-label="familyHeartStroke" value={formData.familyHeartStroke}
                  onChange={(e) => handleInputChange('familyHeartStroke', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.cancer}</label>
                <input
                  type="text"
                  id="familyCancer" name="familyCancer" aria-label="familyCancer" value={formData.familyCancer}
                  onChange={(e) => handleInputChange('familyCancer', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.dementia}</label>
                <input
                  type="text"
                  id="familyDementia" name="familyDementia" aria-label="familyDementia" value={formData.familyDementia}
                  onChange={(e) => handleInputChange('familyDementia', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.diabetes}</label>
                <input
                  type="text"
                  id="familyDiabetes" name="familyDiabetes" aria-label="familyDiabetes" value={formData.familyDiabetes}
                  onChange={(e) => handleInputChange('familyDiabetes', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </section>

          {/* Medikamente & Nahrungsergänzung */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.medicationsSupplements}</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.medicationsQuestion}
                </label>
                <textarea
                  rows={4}
                  id="medications" name="medications" aria-label="medications" value={formData.medications}
                  onChange={(e) => handleInputChange('medications', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.supplementsQuestion}
                </label>
                <textarea
                  rows={4}
                  id="supplements" name="supplements" aria-label="supplements" value={formData.supplements}
                  onChange={(e) => handleInputChange('supplements', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </section>

          {/* Lebensstil */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.lifestyle}</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t.exerciseQuestion}
                </label>
                <input
                  type="text"
                  id="exerciseFrequency" name="exerciseFrequency" aria-label="exerciseFrequency" value={formData.exerciseFrequency}
                  onChange={(e) => handleInputChange('exerciseFrequency', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">{t.sleep}</label>
                <div className="flex gap-4">
                  {(['gut', 'mittelmäßig', 'schlecht'] as const).map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        value={option}
                        checked={formData.sleepQuality === option}
                        onChange={(e) => handleInputChange('sleepQuality', e.target.value)}
                        className="mr-2"
                      />
                      {option === 'gut' ? t.options.gut : option === 'mittelmäßig' ? t.options.mittelmaessig : t.options.schlecht}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">{t.diet}</label>
                <div className="flex flex-wrap gap-4">
                  {(['mischköstlich', 'vegetarisch', 'vegan', 'low carb', 'mediterran'] as const).map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        value={option}
                        checked={formData.diet === option}
                        onChange={(e) => handleInputChange('diet', e.target.value)}
                        className="mr-2"
                      />
                      {option === 'mischköstlich' ? t.options.mischkoestlich : option === 'vegetarisch' ? t.options.vegetarisch : option === 'vegan' ? t.options.vegan : option === 'low carb' ? t.options.lowCarb : t.options.mediterran}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">{t.smoking}</label>
                <div className="flex gap-4 items-center">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="nein"
                      checked={formData.smoking === 'nein'}
                      onChange={(e) => handleInputChange('smoking', e.target.value)}
                      className="mr-2"
                    />
                    {t.smokingNo}
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="ja"
                      checked={formData.smoking === 'ja'}
                      onChange={(e) => handleInputChange('smoking', e.target.value)}
                      className="mr-2"
                    />
                    {t.smokingYes}
                  </label>
                  <input
                    type="text"
                    disabled={formData.smoking !== 'ja'}
                    id="smokingAmount" name="smokingAmount" aria-label="smokingAmount" value={formData.smokingAmount}
                    onChange={(e) => handleInputChange('smokingAmount', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary disabled:bg-gray-100"
                  />
                </div>
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">{t.alcohol}</label>
                <div className="flex gap-4">
                  {(['nein', 'gelegentlich', 'regelmäßig'] as const).map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        value={option}
                        checked={formData.alcohol === option}
                        onChange={(e) => handleInputChange('alcohol', e.target.value)}
                        className="mr-2"
                      />
                      {option === 'nein' ? t.options.nein : option === 'gelegentlich' ? t.options.gelegentlich : t.options.regelmaessig}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">{t.stress}</label>
                <div className="flex gap-4">
                  {(['niedrig', 'mittel', 'hoch'] as const).map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        value={option}
                        checked={formData.stressLevel === option}
                        onChange={(e) => handleInputChange('stressLevel', e.target.value)}
                        className="mr-2"
                      />
                      {option === 'niedrig' ? t.options.niedrig : option === 'mittel' ? t.options.mittel : t.options.hoch}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Geschlechtsspezifische Fragen */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.genderSpecific}</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.gender}</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="mr-2"
                  />
                  {t.female}
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="mr-2"
                  />
                  {t.male}
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="diverse"
                    checked={formData.gender === 'diverse'}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="mr-2"
                  />
                  {t.diverse}
                </label>
              </div>
            </div>

            {/* Fuer Frauen */}
            {formData.gender === 'female' && (
              <div className="space-y-4 bg-pink-50 p-4 rounded-md">
                <h3 className="font-semibold text-gray-800">{t.forWomen}</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.cycleRegular}</label>
                  <div className="flex gap-4">
                    {(['ja', 'nein'] as const).map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          value={option}
                          checked={formData.cycleRegular === option}
                          onChange={(e) => handleInputChange('cycleRegular', e.target.value)}
                          className="mr-2"
                        />
                        {option === 'ja' ? t.options.ja : t.options.nein}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.libidoEnergy}</label>
                  <div className="flex gap-4">
                    {(['normal', 'vermindert'] as const).map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          value={option}
                          checked={formData.femaleLibidoEnergy === option}
                          onChange={(e) => handleInputChange('femaleLibidoEnergy', e.target.value)}
                          className="mr-2"
                        />
                        {option === 'normal' ? t.options.normal : t.options.vermindert}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.pregnancies}</label>
                    <input
                      type="text"
                      id="pregnancies" name="pregnancies" aria-label="pregnancies" value={formData.pregnancies}
                      onChange={(e) => handleInputChange('pregnancies', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{t.children}</label>
                    <input
                      type="text"
                      id="children" name="children" aria-label="children" value={formData.children}
                      onChange={(e) => handleInputChange('children', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.hormonal}
                  </label>
                  <div className="flex gap-4 mb-2">
                    {(['ja', 'nein'] as const).map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          value={option}
                          checked={formData.hormonalContraception === option}
                          onChange={(e) => handleInputChange('hormonalContraception', e.target.value)}
                          className="mr-2"
                        />
                        {option === 'ja' ? t.options.ja : t.options.nein}
                      </label>
                    ))}
                  </div>
                  {formData.hormonalContraception === 'ja' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{t.ifYesWhich}</label>
                      <input
                        type="text"
                        id="hormonalContraceptionDetails" name="hormonalContraceptionDetails" aria-label="hormonalContraceptionDetails" value={formData.hormonalContraceptionDetails}
                        onChange={(e) => handleInputChange('hormonalContraceptionDetails', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Für Männer */}
            {formData.gender === 'male' && (
              <div className="space-y-4 bg-blue-50 p-4 rounded-md">
                <h3 className="font-semibold text-gray-800">{t.forMen}</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t.libidoEnergy}</label>
                  <div className="flex gap-4">
                    {(['normal', 'vermindert'] as const).map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          value={option}
                          checked={formData.maleLibidoEnergy === option}
                          onChange={(e) => handleInputChange('maleLibidoEnergy', e.target.value)}
                          className="mr-2"
                        />
                        {option === 'normal' ? t.options.normal : t.options.vermindert}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.testosteroneMeasured}
                  </label>
                  <div className="flex gap-4">
                    {(['ja', 'nein'] as const).map((option) => (
                      <label key={option} className="flex items-center">
                        <input
                          type="radio"
                          value={option}
                          checked={formData.testosteroneMeasured === option}
                          onChange={(e) => handleInputChange('testosteroneMeasured', e.target.value)}
                          className="mr-2"
                        />
                        {option === 'ja' ? t.options.ja : t.options.nein}
                      </label>
                    ))}
                  </div>
                </div>
                {formData.testosteroneMeasured === 'ja' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.testosteroneSubstitution}
                    </label>
                    <div className="flex gap-4">
                      {(['ja', 'nein'] as const).map((option) => (
                        <label key={option} className="flex items-center">
                          <input
                            type="radio"
                            value={option}
                            checked={formData.testosteroneSubstitution === option}
                            onChange={(e) => handleInputChange('testosteroneSubstitution', e.target.value)}
                            className="mr-2"
                          />
                          {option === 'ja' ? t.options.ja : t.options.nein}
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>

          {/* Unterschrift */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">{t.signature}</h2>
            <p className="text-gray-600 mb-4">
              {t.signatureConfirm}
            </p>
            <SignaturePadField
              ref={signaturePadRef}
              value={formData.signature}
              onChange={(dataUrl) => handleInputChange('signature', dataUrl)}
              clearLabel={t.clearSignature}
            />
            <ErrorMessage error={validationErrors.signature} />
          </section>

          {/* Submit Button */}
          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary/90 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? t.submitting : t.submit}
            </button>
            {submitMessage && (
              <p className={`text-sm ${submitMessage === t.error ? 'text-red-600' : 'text-green-600'}`}>
                {submitMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
