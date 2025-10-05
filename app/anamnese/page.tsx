'use client';

import { useState } from 'react';

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
  sleepQuality: 'gut' | 'mittelmaessig' | 'schlecht' | '';
  diet: 'mischkoestlich' | 'vegetarisch' | 'vegan' | 'low carb' | 'mediterran' | '';
  smoking: 'nein' | 'ja' | '';
  smokingAmount: string;
  alcohol: 'nein' | 'gelegentlich' | 'regelmaessig' | '';
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

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/anamnese', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Vielen Dank! Ihr Anamnesebogen wurde erfolgreich uebermittelt.');
        // Reset form
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
      } else {
        setSubmitMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es spaeter erneut.');
      }
    } catch (error) {
      setSubmitMessage('Ein Fehler ist aufgetreten. Bitte versuchen Sie es spaeter erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Anamnesebogen</h1>
        <p className="text-gray-600 mb-8">
          Bitte fuellen Sie diesen Bogen moeglichst vollstaendig aus. Die Angaben helfen uns, Ihr Gesundheitsprofil ganzheitlich zu verstehen und Ihr Longevity-Programm individuell zu gestalten.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Persoenliche Angaben */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Persoenliche Angaben</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Geburtsdatum</label>
                <input
                  type="date"
                  required
                  value={formData.birthdate}
                  onChange={(e) => handleInputChange('birthdate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Alter (Jahre)</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Groesse (cm)</label>
                <input
                  type="number"
                  value={formData.height}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gewicht (kg)</label>
                <input
                  type="number"
                  value={formData.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Beruf</label>
                <input
                  type="text"
                  value={formData.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Kontakt / E-Mail</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </section>

          {/* Beschwerden & Ziele */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Beschwerden & Ziele</h2>
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
                  Was sind Ihre Ziele mit diesem Programm? (z. B. mehr Energie, Praevention, Muskelaufbau, Leistungsfaehigkeit)
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vorerkrankungen & Operationen</h2>
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Familienanamnese</h2>
            <p className="text-sm text-gray-600 mb-4">Gab es in Ihrer Familie (Eltern/Grosseltern) Erkrankungen wie:</p>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Diabetes / Stoffwechselstoerungen</label>
                <input
                  type="text"
                  value={formData.familyDiabetes}
                  onChange={(e) => handleInputChange('familyDiabetes', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
            </div>
          </section>

          {/* Medikamente & Nahrungsergaenzung */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Medikamente & Nahrungsergaenzung</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nehmen Sie regelmaessig Medikamente ein? Wenn ja, welche?
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
                  Nehmen Sie Nahrungsergaenzungsmittel ein? Wenn ja, welche?
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lebensstil</h2>
            <div className="space-y-4">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Schlaf</label>
                <div className="flex gap-4">
                  {(['gut', 'mittelmaessig', 'schlecht'] as const).map((option) => (
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Ernaehrung</label>
                <div className="flex flex-wrap gap-4">
                  {(['mischkoestlich', 'vegetarisch', 'vegan', 'low carb', 'mediterran'] as const).map((option) => (
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Rauchen</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Alkohol</label>
                <div className="flex gap-4">
                  {(['nein', 'gelegentlich', 'regelmaessig'] as const).map((option) => (
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Stressbelastung</label>
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
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Geschlechtsspezifische Angaben</h2>
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
                <h3 className="font-semibold text-gray-800">Fuer Frauen:</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Zyklus regelmaessig?</label>
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
                    Hormonelle Verhuetung oder Therapie
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

            {/* Fuer Maenner */}
            {formData.gender === 'male' && (
              <div className="space-y-4 bg-blue-50 p-4 rounded-md">
                <h3 className="font-semibold text-gray-800">Fuer Maenner:</h3>
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
              {isSubmitting ? 'Wird uebermittelt...' : 'Absenden'}
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
