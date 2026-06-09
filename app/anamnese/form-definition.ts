import { z } from "zod";

export type Locale = "de" | "en";

export const CONSENT_TEXT_VERSION = "praxis-jona-anamnese-consent-2026-06-09";

export const optionValues = {
  sleepQuality: ["gut", "mittelmäßig", "schlecht"],
  diet: ["mischköstlich", "vegetarisch", "vegan", "low carb", "mediterran"],
  yesNo: ["ja", "nein"],
  alcohol: ["nein", "gelegentlich", "regelmäßig"],
  stressLevel: ["niedrig", "mittel", "hoch"],
  gender: ["female", "male", "diverse"],
  libidoEnergy: ["normal", "vermindert"],
} as const;

export const anamneseCopy = {
  de: {
    validation: {
      name: "Name muss mindestens 2 Zeichen lang sein",
      birthdate: "Geburtsdatum ist erforderlich und darf nicht in der Zukunft liegen",
      height: "Größe muss zwischen 50 und 250 cm liegen",
      weight: "Gewicht muss zwischen 20 und 300 kg liegen",
      occupation: "Beruf ist erforderlich",
      email: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
      consent: "Bitte bestätigen Sie die Datenverarbeitung",
      signature: "Bitte unterschreiben Sie den Bogen",
    },
    title: "Anamnesebogen",
    intro: "Bitte füllen Sie diesen Bogen möglichst vollständig aus. Die Angaben helfen uns, Ihr Gesundheitsprofil ganzheitlich zu verstehen und Ihre Behandlung individuell zu gestalten.",
    next: "Weiter",
    back: "Zurück",
    submit: "Absenden",
    submitting: "Wird übermittelt...",
    review: "Prüfen & unterschreiben",
    step: "Schritt",
    of: "von",
    thanks: "Vielen Dank!",
    returnDevice: "Bitte geben Sie das Gerät an der Rezeption zurück.",
    newPatient: "Neuer Patient",
    error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
    checkFields: "Bitte überprüfen Sie die markierten Felder.",
    consent: "Ich bin damit einverstanden, dass Praxis Jona meine Angaben zur medizinischen Vorbereitung und Behandlung verarbeitet und elektronisch an die Praxis übermittelt.",
    signatureConfirm: "Bitte bestätigen Sie mit Ihrer Unterschrift, dass die gemachten Angaben der Wahrheit entsprechen.",
    sections: {
      personal: "Persönliche Angaben",
      complaints: "Beschwerden & Ziele",
      history: "Vorerkrankungen & Operationen",
      family: "Familienanamnese",
      medication: "Medikamente & Nahrungsergänzung",
      lifestyle: "Lebensstil",
      sexSpecific: "Geschlechtsspezifische Angaben",
      consent: "Einwilligung",
      review: "Prüfen & unterschreiben",
    },
    fields: {
      name: "Name",
      birthdate: "Geburtsdatum",
      age: "Alter",
      years: "Jahre",
      height: "Größe (cm)",
      weight: "Gewicht (kg)",
      occupation: "Beruf",
      email: "Kontakt / E-Mail",
      currentComplaints: "Haben Sie aktuell gesundheitliche Beschwerden? Wenn ja, welche?",
      programGoals: "Was sind Ihre Ziele? (z. B. mehr Energie, Prävention, Muskelaufbau, Leistungsfähigkeit)",
      previousDiseases: "Wurden bei Ihnen relevante Erkrankungen diagnostiziert (z. B. Herz, Stoffwechsel, Autoimmun)?",
      operations: "Haben Sie Operationen hinter sich?",
      familyIntro: "Gab es in Ihrer Familie (Eltern/Großeltern) Erkrankungen wie:",
      familyHeartStroke: "Herzinfarkt / Schlaganfall",
      familyCancer: "Krebs (Art?)",
      familyDementia: "Demenz / Alzheimer",
      familyDiabetes: "Diabetes / Stoffwechselstörungen",
      medications: "Nehmen Sie regelmäßig Medikamente ein? Wenn ja, welche?",
      supplements: "Nehmen Sie Nahrungsergänzungsmittel ein? Wenn ja, welche?",
      exerciseFrequency: "Bewegung: Wie oft pro Woche trainieren Sie?",
      sleepQuality: "Schlaf",
      diet: "Ernährung",
      smoking: "Rauchen",
      smokingAmount: "Wie viel?",
      alcohol: "Alkohol",
      stressLevel: "Stressbelastung",
      gender: "Geschlecht",
      cycleRegular: "Zyklus regelmäßig?",
      femaleLibidoEnergy: "Libido / Energie",
      pregnancies: "Schwangerschaften",
      children: "Kinder",
      hormonalContraception: "Hormonelle Verhütung oder Therapie",
      hormonalContraceptionDetails: "Falls ja, welche:",
      maleLibidoEnergy: "Libido / Energie",
      testosteroneMeasured: "Testosteronwerte jemals gemessen?",
      testosteroneSubstitution: "Falls Mangel, ist eine Substitution erfolgt?",
      signature: "Unterschrift",
    },
    options: {
      gut: "gut",
      "mittelmäßig": "mittelmäßig",
      schlecht: "schlecht",
      "mischköstlich": "mischköstlich",
      vegetarisch: "vegetarisch",
      vegan: "vegan",
      "low carb": "low carb",
      mediterran: "mediterran",
      nein: "nein",
      ja: "ja",
      gelegentlich: "gelegentlich",
      regelmäßig: "regelmäßig",
      niedrig: "niedrig",
      mittel: "mittel",
      hoch: "hoch",
      normal: "normal",
      vermindert: "vermindert",
      female: "Weiblich",
      male: "Männlich",
      diverse: "Divers",
    },
    pdf: {
      submittedAt: "Ausgefüllt am",
      noInformation: "Keine Angaben",
      consentAccepted: "Einwilligung bestätigt",
      signatureFallback: "Hinweis: Unterschrift konnte nicht eingebettet werden.",
    },
  },
  en: {
    validation: {
      name: "Name must be at least 2 characters long",
      birthdate: "Date of birth is required and cannot be in the future",
      height: "Height must be between 50 and 250 cm",
      weight: "Weight must be between 20 and 300 kg",
      occupation: "Occupation is required",
      email: "Please enter a valid email address",
      consent: "Please confirm data processing consent",
      signature: "Please sign the form",
    },
    title: "Medical History Form",
    intro: "Please complete this form as fully as possible. Your answers help us understand your health profile and prepare your care individually.",
    next: "Next",
    back: "Back",
    submit: "Submit",
    submitting: "Submitting...",
    review: "Review & sign",
    step: "Step",
    of: "of",
    thanks: "Thank you!",
    returnDevice: "Please return the device to reception.",
    newPatient: "New patient",
    error: "An error occurred. Please try again later.",
    checkFields: "Please check the marked fields.",
    consent: "I consent to Praxis Jona processing my information for medical preparation and treatment and transmitting it electronically to the practice.",
    signatureConfirm: "Please confirm with your signature that the information provided is true.",
    sections: {
      personal: "Personal Information",
      complaints: "Current Concerns & Goals",
      history: "Previous Conditions & Operations",
      family: "Family History",
      medication: "Medication & Supplements",
      lifestyle: "Lifestyle",
      sexSpecific: "Sex-Specific Information",
      consent: "Consent",
      review: "Review & sign",
    },
    fields: {
      name: "Name",
      birthdate: "Date of birth",
      age: "Age",
      years: "years",
      height: "Height (cm)",
      weight: "Weight (kg)",
      occupation: "Occupation",
      email: "Contact / Email",
      currentComplaints: "Do you currently have any health concerns? If yes, which ones?",
      programGoals: "What are your goals? (e.g. more energy, prevention, muscle building, performance)",
      previousDiseases: "Have you been diagnosed with relevant conditions (e.g. heart, metabolism, autoimmune)?",
      operations: "Have you had any operations?",
      familyIntro: "Have any of the following occurred in your family (parents/grandparents):",
      familyHeartStroke: "Heart attack / stroke",
      familyCancer: "Cancer (type?)",
      familyDementia: "Dementia / Alzheimer’s",
      familyDiabetes: "Diabetes / metabolic disorders",
      medications: "Do you regularly take medication? If yes, which?",
      supplements: "Do you take supplements? If yes, which?",
      exerciseFrequency: "Exercise: how often do you train per week?",
      sleepQuality: "Sleep",
      diet: "Diet",
      smoking: "Smoking",
      smokingAmount: "How much?",
      alcohol: "Alcohol",
      stressLevel: "Stress level",
      gender: "Sex",
      cycleRegular: "Regular cycle?",
      femaleLibidoEnergy: "Libido / energy",
      pregnancies: "Pregnancies",
      children: "Children",
      hormonalContraception: "Hormonal contraception or therapy",
      hormonalContraceptionDetails: "If yes, which:",
      maleLibidoEnergy: "Libido / energy",
      testosteroneMeasured: "Have testosterone levels ever been measured?",
      testosteroneSubstitution: "If deficient, has substitution been started?",
      signature: "Signature",
    },
    options: {
      gut: "good",
      "mittelmäßig": "moderate",
      schlecht: "poor",
      "mischköstlich": "mixed diet",
      vegetarisch: "vegetarian",
      vegan: "vegan",
      "low carb": "low carb",
      mediterran: "Mediterranean",
      nein: "no",
      ja: "yes",
      gelegentlich: "occasionally",
      regelmäßig: "regularly",
      niedrig: "low",
      mittel: "medium",
      hoch: "high",
      normal: "normal",
      vermindert: "reduced",
      female: "Female",
      male: "Male",
      diverse: "Diverse",
    },
    pdf: {
      submittedAt: "Submitted on",
      noInformation: "No information",
      consentAccepted: "Consent confirmed",
      signatureFallback: "Note: Signature could not be embedded.",
    },
  },
} as const;

const optionalString = z.string().optional().default("");

export const calculateAgeFromBirthdate = (dateStr: string) => {
  if (!dateStr) return "";
  const birthDate = parseBirthdateInput(dateStr);
  if (!birthDate) return "";

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age -= 1;
  }

  return age >= 0 ? String(age) : "";
};

export const parseBirthdateInput = (dateStr: string) => {
  if (!dateStr) return null;
  const trimmed = dateStr.trim();

  const isoMatch = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (isoMatch) {
    const [, year, month, day] = isoMatch;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  const slashMatch = trimmed.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (slashMatch) {
    const [, month, day, year] = slashMatch;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  const dotMatch = trimmed.match(/^(\d{1,2})\.(\d{1,2})\.(\d{4})$/);
  if (dotMatch) {
    const [, day, month, year] = dotMatch;
    return new Date(Number(year), Number(month) - 1, Number(day));
  }

  const parsed = new Date(trimmed);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

export function createAnamneseSchema(locale: Locale) {
  const t = anamneseCopy[locale].validation;

  return z.object({
    locale: z.enum(["de", "en"]),
    patient: z.object({
      name: z.string().min(2, t.name),
      birthdate: z.string().min(1, t.birthdate).refine((date) => {
        const birthDate = parseBirthdateInput(date);
        return !!birthDate && birthDate <= new Date();
      }, t.birthdate),
      height: z.string().refine((val) => {
        const num = Number.parseInt(val, 10);
        return num >= 50 && num <= 250;
      }, t.height),
      weight: z.string().refine((val) => {
        const num = Number.parseInt(val, 10);
        return num >= 20 && num <= 300;
      }, t.weight),
      occupation: z.string().min(1, t.occupation),
      email: z.string().email(t.email),
    }),
    medicalHistory: z.object({
      currentComplaints: optionalString,
      programGoals: optionalString,
      previousDiseases: optionalString,
      operations: optionalString,
      familyHeartStroke: optionalString,
      familyCancer: optionalString,
      familyDementia: optionalString,
      familyDiabetes: optionalString,
      medications: optionalString,
      supplements: optionalString,
    }),
    lifestyle: z.object({
      exerciseFrequency: optionalString,
      sleepQuality: z.string().optional().default(""),
      diet: z.string().optional().default(""),
      smoking: z.string().optional().default(""),
      smokingAmount: optionalString,
      alcohol: z.string().optional().default(""),
      stressLevel: z.string().optional().default(""),
    }),
    sexSpecific: z.object({
      gender: z.string().optional().default(""),
      cycleRegular: z.string().optional().default(""),
      femaleLibidoEnergy: z.string().optional().default(""),
      pregnancies: optionalString,
      children: optionalString,
      hormonalContraception: z.string().optional().default(""),
      hormonalContraceptionDetails: optionalString,
      maleLibidoEnergy: z.string().optional().default(""),
      testosteroneMeasured: z.string().optional().default(""),
      testosteroneSubstitution: z.string().optional().default(""),
    }),
    consent: z.object({
      accepted: z.boolean().refine((value) => value === true, t.consent),
      textVersion: z.string().min(1),
      acceptedAt: z.string().min(1),
    }),
    signature: z.string().min(1, t.signature),
  });
}

export type AnamnesePayload = z.infer<ReturnType<typeof createAnamneseSchema>>;

export const createDefaultAnamneseValues = (locale: Locale = "de"): AnamnesePayload => ({
  locale,
  patient: {
    name: "",
    birthdate: "",
    height: "",
    weight: "",
    occupation: "",
    email: "",
  },
  medicalHistory: {
    currentComplaints: "",
    programGoals: "",
    previousDiseases: "",
    operations: "",
    familyHeartStroke: "",
    familyCancer: "",
    familyDementia: "",
    familyDiabetes: "",
    medications: "",
    supplements: "",
  },
  lifestyle: {
    exerciseFrequency: "",
    sleepQuality: "",
    diet: "",
    smoking: "",
    smokingAmount: "",
    alcohol: "",
    stressLevel: "",
  },
  sexSpecific: {
    gender: "",
    cycleRegular: "",
    femaleLibidoEnergy: "",
    pregnancies: "",
    children: "",
    hormonalContraception: "",
    hormonalContraceptionDetails: "",
    maleLibidoEnergy: "",
    testosteroneMeasured: "",
    testosteroneSubstitution: "",
  },
  consent: {
    accepted: false,
    textVersion: CONSENT_TEXT_VERSION,
    acceptedAt: "",
  },
  signature: "",
});

export const emptyFormValuesForUi = (locale: Locale = "de"): AnamnesePayload => ({
  ...createDefaultAnamneseValues(locale),
});

export const getVisibleSexSpecificFields = (gender: string) => {
  if (gender === "female") {
    return [
      "sexSpecific.cycleRegular",
      "sexSpecific.femaleLibidoEnergy",
      "sexSpecific.pregnancies",
      "sexSpecific.children",
      "sexSpecific.hormonalContraception",
      "sexSpecific.hormonalContraceptionDetails",
    ];
  }
  if (gender === "male") {
    return [
      "sexSpecific.maleLibidoEnergy",
      "sexSpecific.testosteroneMeasured",
      "sexSpecific.testosteroneSubstitution",
    ];
  }
  return [];
};

export const sanitizeFilenamePart = (value: string) =>
  value
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9_.-]/g, "")
    .slice(0, 80) || "Patient";
