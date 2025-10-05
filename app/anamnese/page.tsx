'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { z } from 'zod';
import Logo from '/public/images/praxis-jona-web-logo.png';

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
  gender: 'female' | 'male' | '';

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
}

// Zod validation schema
const anamneseSchema = z.object({
  // Personal information - all required
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  birthdate: z.string().refine((date) => {
    const birthDate = new Date(date);
    const today = new Date();
    return birthDate <= today;
  }, 'Geburtsdatum kann nicht in der Zukunft liegen'),
  age: z.string().refine((val) => {
    const num = parseInt(val);
    return num >= 0 && num <= 150;
  }, 'Alter muss zwischen 0 und 150 Jahren liegen'),
  height: z.string().refine((val) => {
    const num = parseInt(val);
    return num >= 50 && num <= 250;
  }, 'Größe muss zwischen 50 und 250 cm liegen'),
  weight: z.string().refine((val) => {
    const num = parseInt(val);
    return num >= 20 && num <= 300;
  }, 'Gewicht muss zwischen 20 und 300 kg liegen'),
  occupation: z.string().min(1, 'Beruf ist erforderlich'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),

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
});

// Helper component for error display
const ErrorMessage = ({ error }: { error?: string }) => {
  if (!error) return null;
  return <p className="mt-1 text-sm text-red-600">{error}</p>;
};

export default function AnamnesePage() {
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
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear validation error for this field when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
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
      // Validate form data with Zod
      const validatedData = anamneseSchema.parse(formData);

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
        setSubmitMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
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
        setSubmitMessage('Bitte überprüfen Sie die markierten Felder.');
      } else {
        console.error('Form submission error:', error);
        setSubmitMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.');
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
    });
    setIsSubmitted(false);
    setSubmitMessage('');
    setValidationErrors({});
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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Vielen Dank!</h1>
          <p className="text-2xl md:text-3xl text-white mb-12">
            Bitte geben Sie das Gerät an der Rezeption zurück.
          </p>
          <button
            onClick={handleNewPatient}
            className="bg-white text-primary px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Neuer Patient
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

        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Anamnesebogen</h1>
        <p className="text-gray-600 mb-8 text-center">
          Bitte füllen Sie diesen Bogen möglichst vollständig aus. Die Angaben helfen uns, Ihr Gesundheitsprofil ganzheitlich zu verstehen und Ihre Behandlung individuell zu gestalten.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Persönliche Angaben */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Persönliche Angaben</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                    validationErrors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <ErrorMessage error={validationErrors.name} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Geburtsdatum <span className="text-red-600">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.birthdate}
                  onChange={(e) => handleInputChange('birthdate', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                    validationErrors.birthdate ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <ErrorMessage error={validationErrors.birthdate} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alter (Jahre) <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  required
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                    validationErrors.age ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <ErrorMessage error={validationErrors.age} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Größe (cm) <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  required
                  value={formData.height}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                    validationErrors.height ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <ErrorMessage error={validationErrors.height} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gewicht (kg) <span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  required
                  value={formData.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                    validationErrors.weight ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <ErrorMessage error={validationErrors.weight} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Beruf <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-primary focus:border-primary ${
                    validationErrors.occupation ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <ErrorMessage error={validationErrors.occupation} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kontakt / E-Mail <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Beschwerden & Ziele</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Haben Sie aktuell gesundheitliche Beschwerden? Wenn ja, welche?
                </label>
                <textarea
                  rows={3}
                  value={formData.currentComplaints}
                  onChange={(e) => handleInputChange('currentComplaints', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Was sind Ihre Ziele? (z. B. mehr Energie, Prävention, Muskelaufbau, Leistungsfähigkeit)
                </label>
                <textarea
                  rows={3}
                  value={formData.programGoals}
                  onChange={(e) => handleInputChange('programGoals', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </section>

          {/* Vorerkrankungen & Operationen */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Vorerkrankungen & Operationen</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Wurden bei Ihnen relevante Erkrankungen diagnostiziert (z. B. Herz, Stoffwechsel, Autoimmun)?
                </label>
                <textarea
                  rows={3}
                  value={formData.previousDiseases}
                  onChange={(e) => handleInputChange('previousDiseases', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Haben Sie Operationen hinter sich?
                </label>
                <textarea
                  rows={3}
                  value={formData.operations}
                  onChange={(e) => handleInputChange('operations', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </section>

          {/* Familienanamnese */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Familienanamnese</h2>
            <p className="text-sm text-gray-600 mb-4">Gab es in Ihrer Familie (Eltern/Großeltern) Erkrankungen wie:</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Herzinfarkt / Schlaganfall</label>
                <input
                  type="text"
                  value={formData.familyHeartStroke}
                  onChange={(e) => handleInputChange('familyHeartStroke', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Krebs (Art?)</label>
                <input
                  type="text"
                  value={formData.familyCancer}
                  onChange={(e) => handleInputChange('familyCancer', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Demenz / Alzheimer</label>
                <input
                  type="text"
                  value={formData.familyDementia}
                  onChange={(e) => handleInputChange('familyDementia', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Diabetes / Stoffwechselstörungen</label>
                <input
                  type="text"
                  value={formData.familyDiabetes}
                  onChange={(e) => handleInputChange('familyDiabetes', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </section>

          {/* Medikamente & Nahrungsergänzung */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Medikamente & Nahrungsergänzung</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nehmen Sie regelmäßig Medikamente ein? Wenn ja, welche?
                </label>
                <textarea
                  rows={4}
                  value={formData.medications}
                  onChange={(e) => handleInputChange('medications', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nehmen Sie Nahrungsergänzungsmittel ein? Wenn ja, welche?
                </label>
                <textarea
                  rows={4}
                  value={formData.supplements}
                  onChange={(e) => handleInputChange('supplements', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </section>

          {/* Lebensstil */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lebensstil</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bewegung: Wie oft pro Woche trainieren Sie?
                </label>
                <input
                  type="text"
                  value={formData.exerciseFrequency}
                  onChange={(e) => handleInputChange('exerciseFrequency', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">Schlaf</label>
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
                      {option}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">Ernährung</label>
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
                      {option}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">Rauchen</label>
                <div className="flex gap-4 items-center">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="nein"
                      checked={formData.smoking === 'nein'}
                      onChange={(e) => handleInputChange('smoking', e.target.value)}
                      className="mr-2"
                    />
                    nein
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="ja"
                      checked={formData.smoking === 'ja'}
                      onChange={(e) => handleInputChange('smoking', e.target.value)}
                      className="mr-2"
                    />
                    ja, wie viel:
                  </label>
                  <input
                    type="text"
                    disabled={formData.smoking !== 'ja'}
                    value={formData.smokingAmount}
                    onChange={(e) => handleInputChange('smokingAmount', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary disabled:bg-gray-100"
                  />
                </div>
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">Alkohol</label>
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
                      {option}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-2">Stressbelastung</label>
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
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Geschlechtsspezifische Fragen */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Geschlechtsspezifische Angaben</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Geschlecht</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="mr-2"
                  />
                  Weiblich
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={(e) => handleInputChange('gender', e.target.value)}
                    className="mr-2"
                  />
                  Maennlich
                </label>
              </div>
            </div>

            {/* Fuer Frauen */}
            {formData.gender === 'female' && (
              <div className="space-y-4 bg-pink-50 p-4 rounded-md">
                <h3 className="font-semibold text-gray-800">Für Frauen:</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Zyklus regelmäßig?</label>
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
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Libido / Energie</label>
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
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Schwangerschaften</label>
                    <input
                      type="text"
                      value={formData.pregnancies}
                      onChange={(e) => handleInputChange('pregnancies', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Kinder</label>
                    <input
                      type="text"
                      value={formData.children}
                      onChange={(e) => handleInputChange('children', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hormonelle Verhütung oder Therapie
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
                        {option}
                      </label>
                    ))}
                  </div>
                  {formData.hormonalContraception === 'ja' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Falls ja, welche:</label>
                      <input
                        type="text"
                        value={formData.hormonalContraceptionDetails}
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
                <h3 className="font-semibold text-gray-800">Für Männer:</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Libido / Energie</label>
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
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Testosteronwerte jemals gemessen?
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
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
                {formData.testosteroneMeasured === 'ja' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Falls Mangel, ist eine Substitution erfolgt?
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
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>

          {/* Submit Button */}
          <div className="flex flex-col items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary/90 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Wird übermittelt...' : 'Absenden'}
            </button>
            {submitMessage && (
              <p className={`text-sm ${submitMessage.includes('Fehler') ? 'text-red-600' : 'text-green-600'}`}>
                {submitMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
