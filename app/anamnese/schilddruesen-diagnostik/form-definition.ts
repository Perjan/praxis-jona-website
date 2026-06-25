import { z } from "zod";

import { Locale } from "../form-definition";

const yesNoValues = ["ja", "nein"] as const;

export const thyroidCopy = {
  de: {
    validation: {
      required: "Dieses Feld ist erforderlich",
      yesNo: "Bitte wählen Sie Ja oder Nein",
      signature: "Bitte unterschreiben Sie den Bogen",
      privacyConsent: "Bitte bestätigen Sie die Einwilligung",
    },
    title: "Fragebogen zur Schilddrüsen-Diagnostik",
    navLabel: "Schilddrüsen-Diagnostik Navigation",
    subtitle: "(Vom Patienten auszufüllen)",
    medicalLegalReviewNote: "German thyroid diagnostics and privacy copy is the source of truth.",
    back: "Zurück",
    submit: "Absenden",
    submitting: "Wird übermittelt...",
    error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
    thanks: "Vielen Dank!",
    returnDevice: "Bitte geben Sie das Gerät an der Rezeption zurück.",
    newForm: "Neues Formular",
    scrollDown: "Weiter nach unten",
    clearSignature: "Unterschrift löschen",
    yes: "Ja",
    no: "Nein",
    unknown: "Unbekannt",
    noInformation: "-",
    filenamePrefix: "Schilddruesen_Diagnostik_Datenschutz",
    successMessage: "Schilddrüsen-Fragebogen erfolgreich gesendet",
    mockMessage: "Schilddrüsen-Fragebogen lokal validiert",
    sections: {
      base: "Basisangaben",
      thyroid: "Schilddrüse",
      general: "Allgemeine Beschwerden",
      privacy: "Patienteninformation - Einwilligungserklärung in die Datenweitergabe und Dateneinholung",
      signature: "Unterschrift",
    },
    fields: {
      reason: "Grund der Schilddrüsenuntersuchung (in Stichworten)",
      age: "Alter",
      height: "Größe",
      weight: "Gewicht",
      details: "Welche / sonstige Angaben",
      since: "Seit wann?",
      when: "Wann?",
      which: "Welche?",
      who: "Bei wem?",
      dose: "Bitte geben Sie alle Medikamente an, die Sie z. Z. einnehmen (einschließlich Dosis)",
      patientName: "Name",
      birthdate: "Geboren am",
      address: "Adresse",
      placeDate: "Ort und Datum",
      signature: "Unterschrift des Patienten/in, ggf. des gesetzlichen Vertreters",
    },
    thyroidQuestions: [
      { id: "throatComplaints", label: "Haben Sie Beschwerden im Halsbereich?", detailLabel: "Welche (z. B. Kloßgefühl, Schmerzen, Luftnot, Schluckbeschwerden, Heiserkeit, Druckgefühl)? Sonstige:" },
      { id: "neckCircumferenceIncreased", label: "Hat der Halsumfang zugenommen?" },
      { id: "familyThyroidDisease", label: "Ist bei einem Verwandten eine Erkrankung der Schilddrüse bekannt?", detailLabel: "Welche? Bei wem?" },
      { id: "enlargedOrNodularThyroid", label: "Haben Sie eine vergrößerte oder knotige Schilddrüse?", detailLabel: "Bekannt seit?" },
      { id: "thyroidSurgery", label: "Behandlung durch Operation?", detailLabel: "Wann?" },
      { id: "radioiodineTreatment", label: "Behandlung durch Radiojod?", detailLabel: "Wann?" },
      { id: "thyroidMedication", label: "Behandlung der Schilddrüse mit Medikamenten?", detailLabel: "Wann? Welche?" },
      { id: "contrastMediaRecent", label: "Wurde bei Ihnen in den letzten Monaten eine Röntgen-Kontrastmitteluntersuchung durchgeführt (Niere, Gallenblase, Gefäße)?" },
      { id: "iodizedSalt", label: "Verwenden Sie Jodsalz im Haushalt?" },
      { id: "femaleHormones", label: "Für Frauen: Nehmen Sie die Pille oder andere weibliche Hormone (Östrogen)?", detailLabel: "Präparat?" },
      { id: "pregnancy", label: "Besteht eine Schwangerschaft?" },
    ],
    symptomQuestions: [
      { id: "nervous", label: "Sind Sie sehr nervös?" },
      { id: "innerRestless", label: "Sind Sie in den letzten Wochen/Monaten innerlich unruhig geworden?" },
      { id: "claustrophobia", label: "Leiden Sie unter Platzangst?" },
      { id: "sleepDisorders", label: "Leiden Sie an Schlafstörungen?" },
      { id: "sweating", label: "Neigen Sie zu ständigem Schwitzen?" },
      { id: "heatSensitive", label: "Sind Sie eher wärmeempfindlich?" },
      { id: "weightLoss", label: "Haben Sie an Körpergewicht abgenommen?", detailLabel: "In welcher Zeit? Um wieviel kg?" },
      { id: "frequentBowelMovements", label: "Besteht in letzter Zeit ein vermehrter Stuhlgang?" },
      { id: "hairLoss", label: "Leiden Sie an Haarausfall?" },
      { id: "heartSymptoms", label: "Haben Sie Herzjagen, Herzschmerzen, Herzstolpern, Herzklopfen (gelegentlich/immer)?" },
      { id: "constipation", label: "Leiden Sie zunehmend unter Verstopfung?" },
      { id: "eyeComplaints", label: "Haben Sie Beschwerden an den Augen?", detailLabel: "Welche (z. B. Augentränen, geschwollene Lider, Seh-Ausfälle, Doppelbilder, hervorgetretene Augen, Druck hinter den Augen, Sonstiges)?" },
      { id: "sluggish", label: "Sind Sie in den letzten Monaten zunehmend träger geworden?" },
      { id: "tired", label: "Sind Sie müder, langsamer geworden?" },
      { id: "coldSensitive", label: "Frieren Sie leichter?" },
      { id: "weightGain", label: "Haben Sie an Körpergewicht zugenommen?", detailLabel: "In welcher Zeit? Um wieviel kg?" },
      { id: "drySkin", label: "Ist ihre Haut in den letzten Monaten trockener geworden?" },
      { id: "brittleNails", label: "Sind Ihre Nägel brüchig?" },
    ],
    extraFields: {
      otherDiseasesOperations: "Sonstige (schwere) Krankheiten oder Operationen (wann?)",
      cigarettesPerDay: "Zigaretten: Wie viele pro Tag?",
      lowerAbdominalOperations: "Unterleibsoperationen (wann?)",
      lastPeriodDate: "Datum der letzen Regelblutung",
      otherSymptoms: "Sonstige Beschwerden",
    },
    privacyText: [
      "Liebe Patientin, lieber Patient,",
      "der Schutz Ihrer Daten ist uns in unserer Praxis besonders wichtig. Wir müssen im Rahmen Ihrer Behandlung aber personenbezogene Daten, wie z. B. Ihr Alter, Ihre Krankenkasse, Ihre Diagnose usw. unter Beachtung der geltenden Datenschutzbestimmungen erheben und verarbeiten.",
      "Diese Daten müssen wir ggf. an weitere Ärzte, Krankenhäuser, Labore und andere Leistungserbringer im Gesundheitswesen im Zusammenhang mit Ihrer Behandlung übermitteln. Dies kann z. B. durch einen Arztbrief erfolgen. Unter Umständen benötigen wir für Ihre Behandlung aber auch Daten von anderen Ärzten und sonstigen Leistungserbringern.",
      "Um Ihre Daten zu übermitteln oder auch einzuholen zu dürfen, benötigen wir Ihre Einwilligung. Bitte beachten Sie, dass ohne diese Einwilligung eine sinnvolle Behandlung und Information der anderen Ärzte und sonstigen Leistungserbringern in der Regel nicht möglich ist. Selbstverständlich gilt auch bei dieser Übermittlung Ihrer Daten die ärztliche Schweigepflicht.",
      "Wollen Sie uns die Einwilligung nicht erteilen, müssen Sie Ihre Daten selbst an die Leistungserbringer übermitteln oder von diesen einholen.",
      "Daher bitten wir Sie auch in Ihrem eigenen Interesse um folgende Einwilligung, die Sie bitte vor Unterzeichnung sorgfältig lesen:",
    ],
    privacyConsent:
      "Hiermit willige ich ein, dass meine personenbezogenen Daten (z. B. Name, Krankenkasse, Anamnese, Diagnose) über die Behandlung bei Praxis Jona Dr. Jonida Gjolli, Torstr. 125, 10119 Berlin in dem erforderlichen Umfang weitergegeben und von diesen über meine Behandlung dort im erforderlichen Umfang eingeholt werden dürfen. Mir ist bekannt, dass ich diese Einwilligung gegenüber der Ärztin/dem Arzt jederzeit formlos widerrufen kann. Der Widerruf gilt nur mit Wirkung für die Zukunft; bisherige Datenweitergaben bleiben rechtmäßig.",
  },
  en: {
    validation: {
      required: "This field is required",
      yesNo: "Please choose yes or no",
      signature: "Please sign the form",
      privacyConsent: "Please confirm consent",
    },
    title: "Thyroid Diagnostics Questionnaire",
    navLabel: "Thyroid diagnostics navigation",
    subtitle: "(To be completed by the patient)",
    medicalLegalReviewNote:
      "English thyroid diagnostics and privacy copy is drafted from the German source and requires human medical/legal review before operational use.",
    back: "Back",
    submit: "Submit",
    submitting: "Submitting...",
    error: "An error occurred. Please try again later.",
    thanks: "Thank you!",
    returnDevice: "Please return the device to reception.",
    newForm: "New form",
    scrollDown: "Scroll down",
    clearSignature: "Clear signature",
    yes: "Yes",
    no: "No",
    unknown: "Unknown",
    noInformation: "-",
    filenamePrefix: "Thyroid_Diagnostics_Privacy_Consent",
    successMessage: "Thyroid questionnaire sent successfully",
    mockMessage: "Thyroid questionnaire locally validated",
    sections: {
      base: "Basic Information",
      thyroid: "Thyroid",
      general: "General Symptoms",
      privacy: "Patient Information - Consent to Data Transfer and Data Collection",
      signature: "Signature",
    },
    fields: {
      reason: "Reason for thyroid examination",
      age: "Age",
      height: "Height",
      weight: "Weight",
      details: "Details / other information",
      since: "Since when?",
      when: "When?",
      which: "Which?",
      who: "Who?",
      dose: "Please list all current medications, including dose",
      patientName: "Name",
      birthdate: "Date of birth",
      address: "Address",
      placeDate: "Place and date",
      signature: "Patient signature, or legal representative if applicable",
    },
    thyroidQuestions: [
      { id: "throatComplaints", label: "Do you have symptoms in the throat/neck area?", detailLabel: "Which symptoms (e.g. lump sensation, pain, shortness of breath, difficulty swallowing, hoarseness, pressure)? Other:" },
      { id: "neckCircumferenceIncreased", label: "Has your neck circumference increased?" },
      { id: "familyThyroidDisease", label: "Is thyroid disease known in a relative?", detailLabel: "Which disease? In whom?" },
      { id: "enlargedOrNodularThyroid", label: "Do you have an enlarged or nodular thyroid?", detailLabel: "Known since?" },
      { id: "thyroidSurgery", label: "Treatment by surgery?", detailLabel: "When?" },
      { id: "radioiodineTreatment", label: "Treatment by radioiodine?", detailLabel: "When?" },
      { id: "thyroidMedication", label: "Treatment of the thyroid with medication?", detailLabel: "When? Which?" },
      { id: "contrastMediaRecent", label: "Have you had an X-ray contrast examination in recent months (kidney, gallbladder, blood vessels)?" },
      { id: "iodizedSalt", label: "Do you use iodized salt at home?" },
      { id: "femaleHormones", label: "For women: do you take the pill or other female hormones (estrogen)?", detailLabel: "Preparation?" },
      { id: "pregnancy", label: "Are you pregnant?" },
    ],
    symptomQuestions: [
      { id: "nervous", label: "Are you very nervous?" },
      { id: "innerRestless", label: "Have you become internally restless in recent weeks/months?" },
      { id: "claustrophobia", label: "Do you suffer from claustrophobia?" },
      { id: "sleepDisorders", label: "Do you suffer from sleep disorders?" },
      { id: "sweating", label: "Do you tend to sweat constantly?" },
      { id: "heatSensitive", label: "Are you more sensitive to heat?" },
      { id: "weightLoss", label: "Have you lost body weight?", detailLabel: "Over what period? How many kg?" },
      { id: "frequentBowelMovements", label: "Have you recently had more frequent bowel movements?" },
      { id: "hairLoss", label: "Do you suffer from hair loss?" },
      { id: "heartSymptoms", label: "Do you have racing heart, heart pain, skipped beats, or palpitations (occasionally/always)?" },
      { id: "constipation", label: "Are you increasingly constipated?" },
      { id: "eyeComplaints", label: "Do you have eye symptoms?", detailLabel: "Which symptoms (e.g. tearing, swollen eyelids, visual field defects, double vision, protruding eyes, pressure behind the eyes, other)?" },
      { id: "sluggish", label: "Have you become increasingly sluggish in recent months?" },
      { id: "tired", label: "Have you become more tired or slower?" },
      { id: "coldSensitive", label: "Do you feel cold more easily?" },
      { id: "weightGain", label: "Have you gained body weight?", detailLabel: "Over what period? How many kg?" },
      { id: "drySkin", label: "Has your skin become drier in recent months?" },
      { id: "brittleNails", label: "Are your nails brittle?" },
    ],
    extraFields: {
      otherDiseasesOperations: "Other serious illnesses or operations (when?)",
      cigarettesPerDay: "Cigarettes: how many per day?",
      lowerAbdominalOperations: "Lower abdominal operations (when?)",
      lastPeriodDate: "Date of last menstrual period",
      otherSymptoms: "Other symptoms",
    },
    privacyText: [
      "Protecting your data is especially important to our practice. As part of your treatment, we must collect and process personal data such as your age, health insurance, and diagnosis in accordance with applicable data protection regulations.",
      "We may need to transfer this data to other doctors, hospitals, laboratories, and other healthcare providers in connection with your treatment. We may also need data from other doctors and providers for your treatment.",
      "We need your consent to transfer or obtain your data. Without this consent, meaningful treatment and information exchange with other providers is generally not possible.",
    ],
    privacyConsent:
      "I consent to my personal data concerning treatment at Praxis Jona Dr. Jonida Gjolli, Torstr. 125, 10119 Berlin being transferred and obtained to the required extent.",
  },
} as const;

const optionalString = z.string().optional().default("");

const questionShape = (locale: Locale, questions: readonly { id: string; detailLabel?: string }[]) => {
  const t = thyroidCopy[locale].validation;
  return questions.reduce((shape, question) => {
    shape[question.id] = z.enum(yesNoValues, { message: t.yesNo }).or(z.literal("")).default("");
    if (question.detailLabel) {
      shape[`${question.id}Details`] = optionalString;
    }
    return shape;
  }, {} as Record<string, z.ZodTypeAny>);
};

export function createThyroidSchema(locale: Locale = "de") {
  const t = thyroidCopy[locale].validation;

  return z.object({
    locale: z.enum(["de", "en"]).default(locale),
    reason: optionalString,
    age: optionalString,
    height: optionalString,
    weight: optionalString,
    thyroid: z.object({
      ...questionShape(locale, thyroidCopy.de.thyroidQuestions),
      otherDiseasesOperations: optionalString,
      currentMedications: optionalString,
      cigarettesPerDay: optionalString,
      lowerAbdominalOperations: optionalString,
      lastPeriodDate: optionalString,
      pregnancyUnknown: z.boolean().default(false),
    }),
    symptoms: z.object({
      ...questionShape(locale, thyroidCopy.de.symptomQuestions),
      otherSymptoms: optionalString,
    }),
    privacy: z.object({
      patientName: z.string().min(1, t.required),
      birthdate: z.string().min(1, t.required),
      address: z.string().min(1, t.required),
      furtherTreatment: z.boolean().default(false),
      medicalCare: z.boolean().default(false),
      completeDocumentation: z.boolean().default(false),
      dataCollection: z.boolean().default(false),
      consentAccepted: z.boolean().refine((value) => value === true, t.privacyConsent),
      placeDate: z.string().min(1, t.required),
    }),
    signature: z.string().min(1, t.signature),
  });
}

export type ThyroidPayload = z.infer<ReturnType<typeof createThyroidSchema>>;

const defaultQuestionValues = (questions: readonly { id: string; detailLabel?: string }[]) =>
  questions.reduce((values, question) => {
    values[question.id] = "";
    if (question.detailLabel) {
      values[`${question.id}Details`] = "";
    }
    return values;
  }, {} as Record<string, string>);

export const createDefaultThyroidValues = (locale: Locale = "de"): ThyroidPayload => ({
  locale,
  reason: "",
  age: "",
  height: "",
  weight: "",
  thyroid: {
    ...defaultQuestionValues(thyroidCopy.de.thyroidQuestions),
    otherDiseasesOperations: "",
    currentMedications: "",
    cigarettesPerDay: "",
    lowerAbdominalOperations: "",
    lastPeriodDate: "",
    pregnancyUnknown: false,
  },
  symptoms: {
    ...defaultQuestionValues(thyroidCopy.de.symptomQuestions),
    otherSymptoms: "",
  },
  privacy: {
    patientName: "",
    birthdate: "",
    address: "",
    furtherTreatment: false,
    medicalCare: false,
    completeDocumentation: false,
    dataCollection: false,
    consentAccepted: false,
    placeDate: "",
  },
  signature: "",
} as ThyroidPayload);
