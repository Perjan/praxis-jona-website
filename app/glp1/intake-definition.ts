import { z } from "zod";

export type Glp1Locale = "de" | "en";
export type Glp1Flow = "new" | "follow-up";
export type YesNoAnswer = "yes" | "no";
export type YesNoNotApplicableAnswer = YesNoAnswer | "not_applicable";
export type DoseRequest = "maintain" | "increase" | "reduce";
export type SideEffectSeverity = "none" | "mild" | "moderate" | "severe";

export const GLP1_SCHEMA_VERSION = "praxis-jona-glp1-2026-09-02";
export const GLP1_CONSENT_TEXT_VERSION = "praxis-jona-glp1-consent-2026-09-02";

export const glp1StepFieldPaths = {
  new: [
    ["patient.name", "patient.birthdate", "patient.email", "patient.phone"],
    ["answers.heightCm", "answers.weightKg", "answers.previousWeightLossAttempts", "answers.weightRelatedConditions"],
    [
      "answers.pregnantOrBreastfeeding",
      "answers.diabetes",
      "answers.glucoseLoweringMedication",
      "answers.pancreatitisOrGallbladderDisease",
      "answers.severeGastrointestinalDisease",
      "answers.kidneyOrLiverDisease",
      "answers.eyeComplications",
      "answers.thyroidCancerOrMen2History",
      "answers.allergiesOrPriorIntolerance",
    ],
    ["answers.currentMedication", "answers.previousGlp1Experience", "answers.relevantDiagnoses", "answers.treatmentGoals"],
    [],
    ["consent.accepted", "consent.acceptedAt", "signature"],
  ],
  "follow-up": [
    ["patient.name", "patient.birthdate", "patient.email", "patient.phone"],
    ["answers.currentMedication", "answers.currentDose", "answers.frequency", "answers.treatmentStartDate", "answers.mostRecentDoseDate"],
    ["answers.doseRequest", "answers.desiredDose", "answers.doseRationale"],
    ["answers.currentWeightKg", "answers.startingWeightKg", "answers.progress", "answers.appetiteEffect", "answers.missedDoses", "answers.treatmentGoals"],
    ["answers.sideEffectSeverity", "answers.sideEffectSymptoms", "answers.newDiagnoses", "answers.newMedication", "answers.pregnancyStatus", "answers.otherChanges"],
    ["consent.accepted", "consent.acceptedAt", "signature"],
  ],
} as const;

export type Glp1Patient = {
  name: string;
  birthdate: string;
  email: string;
  phone: string;
};

export type NewPatientAnswers = {
  heightCm: string;
  weightKg: string;
  previousWeightLossAttempts: YesNoAnswer | "";
  weightRelatedConditions: string;
  pregnantOrBreastfeeding: YesNoNotApplicableAnswer | "";
  diabetes: YesNoAnswer | "";
  glucoseLoweringMedication: YesNoAnswer | "";
  pancreatitisOrGallbladderDisease: YesNoAnswer | "";
  severeGastrointestinalDisease: YesNoAnswer | "";
  kidneyOrLiverDisease: YesNoAnswer | "";
  eyeComplications: YesNoAnswer | "";
  thyroidCancerOrMen2History: YesNoAnswer | "";
  allergiesOrPriorIntolerance: YesNoAnswer | "";
  currentMedication: string;
  previousGlp1Experience: string;
  relevantDiagnoses: string;
  treatmentGoals: string;
};

export type FollowUpAnswers = {
  currentMedication: string;
  currentDose: string;
  frequency: string;
  treatmentStartDate: string;
  mostRecentDoseDate: string;
  doseRequest: DoseRequest | "";
  desiredDose: string;
  doseRationale: string;
  currentWeightKg: string;
  startingWeightKg: string;
  progress: string;
  appetiteEffect: "reduced" | "unchanged" | "returning" | "";
  missedDoses: YesNoAnswer | "";
  treatmentGoals: string;
  sideEffectSeverity: SideEffectSeverity | "";
  sideEffectSymptoms: string;
  newDiagnoses: string;
  newMedication: string;
  pregnancyStatus: YesNoNotApplicableAnswer | "";
  otherChanges: string;
};

type Consent = {
  accepted: boolean;
  textVersion: string;
  acceptedAt: string;
};

type SubmissionBase = {
  schemaVersion: string;
  submissionId: string;
  locale: Glp1Locale;
  patient: Glp1Patient;
  consent: Consent;
  signature: string;
  website: string;
};

export type NewPatientSubmission = SubmissionBase & {
  flow: "new";
  answers: NewPatientAnswers;
};

export type FollowUpSubmission = SubmissionBase & {
  flow: "follow-up";
  answers: FollowUpAnswers;
};

export type Glp1Submission = NewPatientSubmission | FollowUpSubmission;

const copy = {
  de: {
    validation: {
      required: "Bitte beantworten Sie diese Frage.",
      name: "Bitte geben Sie Ihren vollständigen Namen ein.",
      birthdate: "Bitte geben Sie ein gültiges Geburtsdatum ein.",
      adult: "Dieser digitale Fragebogen ist nur für Personen ab 18 Jahren verfügbar.",
      email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      phone: "Bitte geben Sie eine gültige Telefonnummer ein.",
      height: "Die Größe muss zwischen 50 und 250 cm liegen.",
      weight: "Das Gewicht muss zwischen 20 und 400 kg liegen.",
      consent: "Bitte stimmen Sie der Datenverarbeitung zu.",
      signature: "Bitte unterschreiben Sie den Fragebogen.",
      doseChange: "Bitte geben Sie die gewünschte Dosis und den Grund für die Änderung an.",
    },
    api: {
      success: "Ihre Angaben wurden sicher übermittelt und werden ärztlich geprüft.",
      error: "Die Übermittlung ist fehlgeschlagen. Bitte versuchen Sie es erneut.",
      invalid: "Bitte überprüfen Sie Ihre Angaben.",
    },
  },
  en: {
    validation: {
      required: "Please answer this question.",
      name: "Please enter your full name.",
      birthdate: "Please enter a valid date of birth.",
      adult: "This digital questionnaire is available only to people aged 18 or older.",
      email: "Please enter a valid email address.",
      phone: "Please enter a valid phone number.",
      height: "Height must be between 50 and 250 cm.",
      weight: "Weight must be between 20 and 400 kg.",
      consent: "Please consent to the processing of your health data.",
      signature: "Please sign the questionnaire.",
      doseChange: "Please enter the requested dose and the reason for the change.",
    },
    api: {
      success: "Your information was submitted securely and will be reviewed by a physician.",
      error: "Submission failed. Please try again.",
      invalid: "Please review your information.",
    },
  },
} as const;

export const glp1IntakeCopy = copy;

function parseIsoDate(value: string) {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return null;
  const [, year, month, day] = match;
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  if (
    date.getFullYear() !== Number(year) ||
    date.getMonth() !== Number(month) - 1 ||
    date.getDate() !== Number(day)
  ) {
    return null;
  }
  return date;
}

export function calculateGlp1Age(birthdate: string, now = new Date()) {
  const date = parseIsoDate(birthdate);
  if (!date || date > now) return null;
  let age = now.getFullYear() - date.getFullYear();
  if (
    now.getMonth() < date.getMonth() ||
    (now.getMonth() === date.getMonth() && now.getDate() < date.getDate())
  ) {
    age -= 1;
  }
  return age;
}

export function calculateGlp1Bmi(heightCm: string, weightKg: string) {
  const height = Number(heightCm) / 100;
  const weight = Number(weightKg);
  if (!Number.isFinite(height) || !Number.isFinite(weight) || height <= 0 || weight <= 0) return null;
  return Math.round((weight / (height * height)) * 10) / 10;
}

const limitedString = (max: number) => z.string().trim().max(max);

export function createGlp1SubmissionSchema(locale: Glp1Locale) {
  const t = copy[locale].validation;
  const requiredString = limitedString(1000).refine((value) => value.length > 0, t.required);
  const yesNo = z.enum(["yes", "no"], { message: t.required });
  const yesNoNotApplicable = z.enum(["yes", "no", "not_applicable"], { message: t.required });

  const patient = z.object({
    name: limitedString(120).refine((value) => value.length >= 2, t.name),
    birthdate: z
      .string()
      .refine((value) => calculateGlp1Age(value) !== null, t.birthdate)
      .refine((value) => (calculateGlp1Age(value) ?? -1) >= 18, t.adult),
    email: z.string().trim().max(160).email(t.email),
    phone: limitedString(40).refine((value) => /^[+()\d\s/.-]{6,40}$/.test(value), t.phone),
  });

  const common = {
    schemaVersion: z.literal(GLP1_SCHEMA_VERSION),
    submissionId: z.string().uuid(),
    locale: z.literal(locale),
    patient,
    consent: z.object({
      accepted: z.literal(true, { message: t.consent }),
      textVersion: z.literal(GLP1_CONSENT_TEXT_VERSION),
      acceptedAt: z.string().datetime(),
    }),
    signature: z
      .string()
      .max(1_500_000)
      .regex(/^data:image\/(png|jpeg);base64,[A-Za-z0-9+/=]+$/, t.signature),
    website: z.string().max(0).default(""),
  };

  const newPatient = z.object({
    ...common,
    flow: z.literal("new"),
    answers: z.object({
      heightCm: z.string().refine((value) => {
        const height = Number(value);
        return Number.isFinite(height) && height >= 50 && height <= 250;
      }, t.height),
      weightKg: z.string().refine((value) => {
        const weight = Number(value);
        return Number.isFinite(weight) && weight >= 20 && weight <= 400;
      }, t.weight),
      previousWeightLossAttempts: yesNo,
      weightRelatedConditions: limitedString(1000),
      pregnantOrBreastfeeding: yesNoNotApplicable,
      diabetes: yesNo,
      glucoseLoweringMedication: yesNo,
      pancreatitisOrGallbladderDisease: yesNo,
      severeGastrointestinalDisease: yesNo,
      kidneyOrLiverDisease: yesNo,
      eyeComplications: yesNo,
      thyroidCancerOrMen2History: yesNo,
      allergiesOrPriorIntolerance: yesNo,
      currentMedication: limitedString(1000),
      previousGlp1Experience: limitedString(1000),
      relevantDiagnoses: limitedString(1000),
      treatmentGoals: requiredString,
    }),
  });

  const followUp = z.object({
      ...common,
      flow: z.literal("follow-up"),
      answers: z.object({
        currentMedication: limitedString(160).refine((value) => value.length > 0, t.required),
        currentDose: limitedString(80).refine((value) => value.length > 0, t.required),
        frequency: limitedString(80).refine((value) => value.length > 0, t.required),
        treatmentStartDate: z.string().refine((value) => parseIsoDate(value) !== null, t.required),
        mostRecentDoseDate: z.string().refine((value) => parseIsoDate(value) !== null, t.required),
        doseRequest: z.enum(["maintain", "increase", "reduce"], { message: t.required }),
        desiredDose: limitedString(80),
        doseRationale: limitedString(1000),
        currentWeightKg: z.string().refine((value) => {
          const weight = Number(value);
          return Number.isFinite(weight) && weight >= 20 && weight <= 400;
        }, t.weight),
        startingWeightKg: z.string().refine((value) => {
          if (!value) return true;
          const weight = Number(value);
          return Number.isFinite(weight) && weight >= 20 && weight <= 400;
        }, t.weight),
        progress: requiredString,
        appetiteEffect: z.enum(["reduced", "unchanged", "returning"], { message: t.required }),
        missedDoses: yesNo,
        treatmentGoals: requiredString,
        sideEffectSeverity: z.enum(["none", "mild", "moderate", "severe"], { message: t.required }),
        sideEffectSymptoms: limitedString(1000),
        newDiagnoses: limitedString(1000),
        newMedication: limitedString(1000),
        pregnancyStatus: yesNoNotApplicable,
        otherChanges: limitedString(1000),
      }),
    });

  return z.discriminatedUnion("flow", [newPatient, followUp]).superRefine((submission, context) => {
      if (submission.flow !== "follow-up") return;
      if (submission.answers.doseRequest === "maintain") return;
      if (!submission.answers.desiredDose) {
        context.addIssue({ code: "custom", path: ["answers", "desiredDose"], message: t.doseChange });
      }
      if (!submission.answers.doseRationale) {
        context.addIssue({ code: "custom", path: ["answers", "doseRationale"], message: t.doseChange });
      }
    }) as z.ZodType<Glp1Submission>;
}

const baseDefaults = (locale: Glp1Locale): SubmissionBase => ({
  schemaVersion: GLP1_SCHEMA_VERSION,
  submissionId: "",
  locale,
  patient: { name: "", birthdate: "", email: "", phone: "" },
  consent: { accepted: false, textVersion: GLP1_CONSENT_TEXT_VERSION, acceptedAt: "" },
  signature: "",
  website: "",
});

export function createDefaultGlp1Submission(flow: "new", locale: Glp1Locale): NewPatientSubmission;
export function createDefaultGlp1Submission(flow: "follow-up", locale: Glp1Locale): FollowUpSubmission;
export function createDefaultGlp1Submission(flow: Glp1Flow, locale: Glp1Locale): Glp1Submission;
export function createDefaultGlp1Submission(flow: Glp1Flow, locale: Glp1Locale): Glp1Submission {
  if (flow === "new") {
    return {
      ...baseDefaults(locale),
      flow,
      answers: {
        heightCm: "",
        weightKg: "",
        previousWeightLossAttempts: "",
        weightRelatedConditions: "",
        pregnantOrBreastfeeding: "",
        diabetes: "",
        glucoseLoweringMedication: "",
        pancreatitisOrGallbladderDisease: "",
        severeGastrointestinalDisease: "",
        kidneyOrLiverDisease: "",
        eyeComplications: "",
        thyroidCancerOrMen2History: "",
        allergiesOrPriorIntolerance: "",
        currentMedication: "",
        previousGlp1Experience: "",
        relevantDiagnoses: "",
        treatmentGoals: "",
      },
    };
  }

  return {
    ...baseDefaults(locale),
    flow,
    answers: {
      currentMedication: "",
      currentDose: "",
      frequency: "",
      treatmentStartDate: "",
      mostRecentDoseDate: "",
      doseRequest: "",
      desiredDose: "",
      doseRationale: "",
      currentWeightKg: "",
      startingWeightKg: "",
      progress: "",
      appetiteEffect: "",
      missedDoses: "",
      treatmentGoals: "",
      sideEffectSeverity: "",
      sideEffectSymptoms: "",
      newDiagnoses: "",
      newMedication: "",
      pregnancyStatus: "",
      otherChanges: "",
    },
  };
}

export type Glp1ReviewFlag =
  | "bmi_below_service_threshold"
  | "pregnancy_or_breastfeeding"
  | "diabetes"
  | "glucose_lowering_medication"
  | "pancreatitis_or_gallbladder_history"
  | "gastrointestinal_history"
  | "kidney_or_liver_history"
  | "eye_complication_history"
  | "thyroid_cancer_or_men2_history"
  | "allergy_or_prior_intolerance"
  | "dose_change_requested"
  | "moderate_or_severe_side_effects"
  | "missed_doses"
  | "new_diagnosis"
  | "new_medication";

export function deriveGlp1ReviewFlags(submission: Glp1Submission): Glp1ReviewFlag[] {
  const flags: Glp1ReviewFlag[] = [];
  if (submission.flow === "new") {
    const answers = submission.answers;
    const bmi = calculateGlp1Bmi(answers.heightCm, answers.weightKg);
    if (bmi !== null && bmi < 27) flags.push("bmi_below_service_threshold");
    if (answers.pregnantOrBreastfeeding === "yes") flags.push("pregnancy_or_breastfeeding");
    if (answers.diabetes === "yes") flags.push("diabetes");
    if (answers.glucoseLoweringMedication === "yes") flags.push("glucose_lowering_medication");
    if (answers.pancreatitisOrGallbladderDisease === "yes") flags.push("pancreatitis_or_gallbladder_history");
    if (answers.severeGastrointestinalDisease === "yes") flags.push("gastrointestinal_history");
    if (answers.kidneyOrLiverDisease === "yes") flags.push("kidney_or_liver_history");
    if (answers.eyeComplications === "yes") flags.push("eye_complication_history");
    if (answers.thyroidCancerOrMen2History === "yes") flags.push("thyroid_cancer_or_men2_history");
    if (answers.allergiesOrPriorIntolerance === "yes") flags.push("allergy_or_prior_intolerance");
  } else {
    const answers = submission.answers;
    if (answers.doseRequest !== "maintain") flags.push("dose_change_requested");
    if (answers.sideEffectSeverity === "moderate" || answers.sideEffectSeverity === "severe") {
      flags.push("moderate_or_severe_side_effects");
    }
    if (answers.missedDoses === "yes") flags.push("missed_doses");
    if (answers.pregnancyStatus === "yes") flags.push("pregnancy_or_breastfeeding");
    if (answers.newDiagnoses) flags.push("new_diagnosis");
    if (answers.newMedication) flags.push("new_medication");
  }
  return flags;
}

export function sanitizeGlp1FilenamePart(value: string) {
  return (
    value
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9_.-]/g, "")
      .slice(0, 80) || "Patient"
  );
}
