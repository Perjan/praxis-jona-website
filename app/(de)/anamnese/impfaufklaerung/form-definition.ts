import { z } from "zod";

import { Locale } from "../form-definition";

const yesNoValues = ["ja", "nein"] as const;
const genderValues = ["weiblich", "männlich", "divers"] as const;

export const impfaufklaerungCopy = {
  de: {
    validation: {
      required: "Dieses Feld ist erforderlich",
      yesNo: "Bitte wählen Sie Ja oder Nein",
      gender: "Bitte wählen Sie ein Geschlecht",
      email: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
      riskInformationRead: "Bitte bestätigen Sie die Impfaufklärung",
      consentAccepted: "Bitte bestätigen Sie Ihr Einverständnis",
      signature: "Bitte unterschreiben Sie den Bogen",
    },
    title: "Impfaufklärung",
    medicalLegalReviewNote: "German vaccination copy is the source of truth.",
    navLabel: "Impfaufklärung Navigation",
    personalHeading: "Persönliche Daten der zu impfenden Person",
    personalIntro: "Bitte füllen Sie alle Felder aus, die im PDF-Impfaufklärungsbogen vorgesehen sind.",
    questionsHeading: "Fragen für die zu impfende Person",
    consentHeading: "Einverständnis",
    consentDescription: "Ich bin über die Impfung aufgeklärt worden und bin mit der Impfung einverstanden.",
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
    genderLabel: "Geschlecht",
    genderOptions: [
      { value: "weiblich", label: "weiblich" },
      { value: "männlich", label: "männlich" },
      { value: "divers", label: "divers" },
    ],
    riskInformationReadLabel: "Ich habe die Impfkomplikationen und Risikoaufklärung gelesen.",
    consentAcceptedLabel: "Ich bin mit der Impfung einverstanden.",
    riskInformation: {
      paragraphs: [
        "Impfkomplikationen sind seltene, über das normale Maß einer Impfreaktion hinausgehende Folgen der Impfung, die den Gesundheitszustand des Impflings deutlich belasten.",
        "Wir möchten Sie mit diesen Informationen nicht verunsichern oder von Impfungen abraten, sind jedoch aus juristischen Gründen gezwungen, Sie über eventuelle Risiken aufzuklären.",
      ],
      bullets: [
        "Nach jeder Impfung kann es zu einer Rötung und schmerzhaften Schwellung kommen. (>10%)",
        "Die Schwellung an der Impfstelle kann auch ausgeprägt sein, tritt in der Regel innerhalb von 3 Tagen auf, seltener auch länger anhaltend. Sie kann die gesamte Extremität betreffen und manchmal auch mit Blasenbildung einhergehen. In der Regel bilden sich die Symptome innerhalb von wenigen Tagen zurück.",
        "Ebenfalls innerhalb von 1 bis 3 Tagen nach der Impfung, seltener auch länger anhaltend, kann es zu Allgemeinsymptomen wie Krankheitsgefühl, Fieber, Übelkeit, Erbrechen, Durchfall, Gelenk- und Muskelschmerzen kommen.",
        "Über Hautausschlag berichten bis zu 10 % der Geimpften.",
        "In sehr seltenen Fällen kann es zu Überempfindlichkeiten der Haut- und Atemwege und allergischen Sofortreaktionen (anaphylaktischer Schock) kommen.",
        "In Einzelfällen werden auch vorübergehende Erkrankungen des Nervensystems, Nervenlähmungen, Neuropathien berichtet.",
        "Sehr selten ist nach Impfungen das Guillain-Barre-Syndrom, eine lebensbedrohliche Nervenlähmung. (Häufigkeit derzeit geschätzt 6 bis 10 Patienten auf 1 Million geimpfter Patienten)",
      ],
    },
    fields: [
      { name: "vaccineName", label: "Name der Schutzimpfung", required: true },
      { name: "patientName", label: "Familienname, Vorname", required: true },
      { name: "birthdate", label: "Geburtsdatum (TT.MM.JJJJ)", required: true },
      { name: "address", label: "Adresse (Postleitzahl, Ort, Straße, Hausnummer)", required: false },
      { name: "phone", label: "Telefonnummer", required: false },
      { name: "email", label: "E-Mail-Adresse", required: false },
      { name: "legalRepresentativeName", label: "Ggf. Name der gesetzlichen Vertretung", required: false },
    ],
    questions: [
      {
        id: "acuteIllness",
        question:
          "1. Leidet oder litt die zu impfende Person in den letzten 7 Tagen an einer akuten Erkrankung oder Infektion (z. B. Fieber, Husten, Schnupfen, Halsschmerzen, andere)?",
        detailName: "acuteIllnessDetails",
        detailLabel: "Wenn ja, woran?",
      },
      {
        id: "allergy",
        question: "2. Besteht bei der zu impfenden Person eine Allergie auf Medikamente oder Inhaltsstoffe irgendeines Impfstoffes?",
        detailName: "allergyDetails",
        detailLabel: "Wenn ja, welche?",
      },
      {
        id: "allergicShock",
        question:
          "3. Hatte die zu impfende Person schon einmal einen allergischen Schock mit Blutdruckabfall, schwerer Atemnot oder Kollaps?",
        detailName: "allergicShockDetails",
        detailLabel: "Wenn ja, worauf?",
      },
      {
        id: "recentVaccinationOrHyposensitization",
        question:
          "4. Erfolgte bei der zu impfenden Person in den letzten 4 Wochen eine andere Impfung, oder wird derzeit eine allergenspezifische Immuntherapie/Hyposensibilisierung bei der zu impfenden Person durchgeführt?",
        detailName: "recentVaccinationOrHyposensitizationDetails",
        detailLabel: "Wenn ja, welche und wann?",
      },
      {
        id: "bloodProducts",
        question: "5. Hat die zu impfende Person in den letzten 3 Monaten Blut, Blutprodukte oder Immunglobuline erhalten?",
        detailName: "bloodProductsDetails",
        detailLabel: "Wenn ja, was und wann?",
      },
      {
        id: "bloodThinners",
        question: "6. Nimmt die zu impfende Person regelmäßig blutverdünnende Medikamente?",
        detailName: "bloodThinnersDetails",
        detailLabel: "Wenn ja, welche?",
      },
      {
        id: "chemoRadiationImmunosuppressants",
        question:
          "7. Wird bei der zu impfenden Person derzeit eine Chemo- und/oder Strahlentherapie durchgeführt oder nimmt die zu impfende Person immunschwächende Medikamente ein (z. B. Cortison)?",
        detailName: "chemoRadiationImmunosuppressantsDetails",
        detailLabel: "Wenn ja, welche?",
      },
      {
        id: "previousVaccineReaction",
        question:
          "8. Bestanden bei der zu impfenden Person in der Vergangenheit nach einer Impfung Beschwerden oder Nebenwirkungen (mit Ausnahme von leichten Lokalreaktionen wie Rötung, Schwellung, Schmerzen an der Stichstelle oder leichtes Fieber)?",
        detailName: "previousVaccineReactionDetails",
        detailLabel: "Wenn ja, nach welcher Impfung und welche?",
      },
      {
        id: "chronicDisease",
        question:
          "9. Liegen bei der zu impfenden Person schwere oder chronische Erkrankungen (z. B. Immunschwäche, Krebserkrankung, Autoimmunerkrankung, Blutgerinnungsstörung, chronisch entzündliche Erkrankungen) vor?",
        detailName: "chronicDiseaseDetails",
        detailLabel: "Wenn ja, welche?",
      },
      {
        id: "recentOrPlannedSurgery",
        question:
          "10. Wurde vor kurzem bei der zu impfenden Person ein operativer Eingriff durchgeführt oder ist ein solcher bei der zu impfenden Person geplant?",
        detailName: "recentOrPlannedSurgeryDetails",
        detailLabel: "Wenn ja, wann?",
      },
      {
        id: "pregnancy",
        question: "11. Besteht eine Schwangerschaft bei der zu impfenden Person?",
        detailName: "pregnancyWeek",
        detailLabel: "Wenn ja, welche Schwangerschaftswoche?",
      },
    ],
    pdf: {
      title: "Impfaufklärung",
      gender: "Geschlecht",
      riskInformationRead: "Risikoaufklärung gelesen",
      consentAccepted: "Einverständnis",
      placeDate: "Ort, Datum",
      signature: "Unterschrift",
      signaturePresent: "vorhanden",
      noInformation: "-",
      filenamePrefix: "Impfaufklaerung",
      successMessage: "Impfaufklärung erfolgreich gesendet",
      mockMessage: "Impfaufklärung lokal validiert",
    },
  },
  en: {
    validation: {
      required: "This field is required",
      yesNo: "Please choose yes or no",
      gender: "Please choose a sex",
      email: "Please enter a valid email address",
      riskInformationRead: "Please confirm that you have read the vaccination information",
      consentAccepted: "Please confirm your consent",
      signature: "Please sign the form",
    },
    title: "Vaccination Consent",
    medicalLegalReviewNote:
      "English vaccination medical/legal copy is drafted from the German source and requires human medical/legal review before operational use.",
    navLabel: "Vaccination consent navigation",
    personalHeading: "Personal details of the person to be vaccinated",
    personalIntro: "Please complete all fields included in the vaccination consent form.",
    questionsHeading: "Questions for the person to be vaccinated",
    consentHeading: "Consent",
    consentDescription: "I have been informed about the vaccination and consent to receiving it.",
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
    genderLabel: "Sex",
    genderOptions: [
      { value: "weiblich", label: "Female" },
      { value: "männlich", label: "Male" },
      { value: "divers", label: "Diverse" },
    ],
    riskInformationReadLabel: "I have read the vaccination complication and risk information.",
    consentAcceptedLabel: "I consent to the vaccination.",
    riskInformation: {
      paragraphs: [
        "Vaccination complications are rare effects beyond the normal degree of a vaccine reaction that significantly affect the vaccinated person's health.",
        "We do not wish to unsettle you with this information or advise against vaccinations, but for legal reasons we are required to inform you about possible risks.",
      ],
      bullets: [
        "After any vaccination, redness and painful swelling may occur. (>10%)",
        "Swelling at the vaccination site can also be pronounced, usually occurring within 3 days and more rarely lasting longer. It may affect the entire limb and sometimes include blistering. Symptoms usually resolve within a few days.",
        "Within 1 to 3 days after vaccination, and more rarely lasting longer, general symptoms such as feeling ill, fever, nausea, vomiting, diarrhea, joint pain, and muscle pain may occur.",
        "Skin rash is reported by up to 10% of vaccinated people.",
        "In very rare cases, hypersensitivity of the skin and airways and immediate allergic reactions (anaphylactic shock) may occur.",
        "Temporary diseases of the nervous system, nerve paralysis, and neuropathies have also been reported in individual cases.",
        "Very rarely, Guillain-Barre syndrome, a life-threatening nerve paralysis, occurs after vaccination. (Current estimated frequency: 6 to 10 patients per 1 million vaccinated patients)",
      ],
    },
    fields: [
      { name: "vaccineName", label: "Name of vaccination", required: true },
      { name: "patientName", label: "Last name, first name", required: true },
      { name: "birthdate", label: "Date of birth (DD.MM.YYYY)", required: true },
      { name: "address", label: "Address (postal code, city, street, house number)", required: false },
      { name: "phone", label: "Phone number", required: false },
      { name: "email", label: "Email address", required: false },
      { name: "legalRepresentativeName", label: "Name of legal representative, if applicable", required: false },
    ],
    questions: [
      {
        id: "acuteIllness",
        question:
          "1. Has the person to be vaccinated had an acute illness or infection in the last 7 days (e.g. fever, cough, runny nose, sore throat, other symptoms)?",
        detailName: "acuteIllnessDetails",
        detailLabel: "If yes, what illness or symptoms?",
      },
      {
        id: "allergy",
        question: "2. Does the person to be vaccinated have an allergy to medicines or ingredients of any vaccine?",
        detailName: "allergyDetails",
        detailLabel: "If yes, which ones?",
      },
      {
        id: "allergicShock",
        question:
          "3. Has the person to be vaccinated ever had allergic shock with a drop in blood pressure, severe shortness of breath, or collapse?",
        detailName: "allergicShockDetails",
        detailLabel: "If yes, caused by what?",
      },
      {
        id: "recentVaccinationOrHyposensitization",
        question:
          "4. Has the person to be vaccinated received another vaccination in the last 4 weeks, or are they currently receiving allergen-specific immunotherapy/desensitization?",
        detailName: "recentVaccinationOrHyposensitizationDetails",
        detailLabel: "If yes, which and when?",
      },
      {
        id: "bloodProducts",
        question: "5. Has the person to be vaccinated received blood, blood products, or immunoglobulins in the last 3 months?",
        detailName: "bloodProductsDetails",
        detailLabel: "If yes, what and when?",
      },
      {
        id: "bloodThinners",
        question: "6. Does the person to be vaccinated regularly take blood-thinning medication?",
        detailName: "bloodThinnersDetails",
        detailLabel: "If yes, which ones?",
      },
      {
        id: "chemoRadiationImmunosuppressants",
        question:
          "7. Is the person to be vaccinated currently receiving chemotherapy and/or radiotherapy, or taking immunosuppressive medication (e.g. cortisone)?",
        detailName: "chemoRadiationImmunosuppressantsDetails",
        detailLabel: "If yes, which ones?",
      },
      {
        id: "previousVaccineReaction",
        question:
          "8. Has the person to be vaccinated previously had symptoms or side effects after a vaccination, other than mild local reactions such as redness, swelling, pain at the injection site, or mild fever?",
        detailName: "previousVaccineReactionDetails",
        detailLabel: "If yes, after which vaccination and what symptoms?",
      },
      {
        id: "chronicDisease",
        question:
          "9. Does the person to be vaccinated have severe or chronic diseases (e.g. immune deficiency, cancer, autoimmune disease, blood clotting disorder, chronic inflammatory disease)?",
        detailName: "chronicDiseaseDetails",
        detailLabel: "If yes, which ones?",
      },
      {
        id: "recentOrPlannedSurgery",
        question: "10. Has the person to be vaccinated recently had surgery, or is surgery planned?",
        detailName: "recentOrPlannedSurgeryDetails",
        detailLabel: "If yes, when?",
      },
      {
        id: "pregnancy",
        question: "11. Is the person to be vaccinated pregnant?",
        detailName: "pregnancyWeek",
        detailLabel: "If yes, which week of pregnancy?",
      },
    ],
    pdf: {
      title: "Vaccination Consent",
      gender: "Sex",
      riskInformationRead: "Risk information read",
      consentAccepted: "Consent",
      placeDate: "Place, date",
      signature: "Signature",
      signaturePresent: "present",
      noInformation: "-",
      filenamePrefix: "Vaccination_Consent",
      successMessage: "Vaccination consent sent successfully",
      mockMessage: "Vaccination consent locally validated",
    },
  },
} as const;

export const impfaufklaerungTextFields = impfaufklaerungCopy.de.fields;
export const impfaufklaerungQuestions = impfaufklaerungCopy.de.questions;

const questionSchema = (locale: Locale) => {
  const t = impfaufklaerungCopy[locale].validation;
  return impfaufklaerungQuestions.reduce((shape, question) => {
    return {
      ...shape,
      [question.id]: z.enum(yesNoValues, { message: t.yesNo }),
      [question.detailName]: z.string().optional().default(""),
    };
  }, {} as Record<string, z.ZodTypeAny>);
};

export function createImpfaufklaerungSchema(locale: Locale = "de") {
  const t = impfaufklaerungCopy[locale].validation;

  return z.object({
    locale: z.enum(["de", "en"]).default(locale),
    vaccineName: z.string().min(1, t.required),
    patientName: z.string().min(1, t.required),
    gender: z.enum(genderValues, { message: t.gender }),
    birthdate: z.string().min(1, t.required),
    address: z.string().optional().default(""),
    phone: z.string().optional().default(""),
    email: z.string().email(t.email).or(z.literal("")).default(""),
    legalRepresentativeName: z.string().optional().default(""),
    ...questionSchema(locale),
    riskInformationRead: z.boolean().refine((value) => value === true, t.riskInformationRead),
    consentAccepted: z.boolean().refine((value) => value === true, t.consentAccepted),
    placeDate: z.string().min(1, t.required),
    signature: z.string().min(1, t.signature),
  });
}

export type ImpfaufklaerungPayload = z.infer<ReturnType<typeof createImpfaufklaerungSchema>>;

export const createDefaultImpfaufklaerungValues = (locale: Locale = "de"): ImpfaufklaerungPayload => ({
  locale,
  vaccineName: "",
  patientName: "",
  gender: "" as ImpfaufklaerungPayload["gender"],
  birthdate: "",
  address: "",
  phone: "",
  email: "",
  legalRepresentativeName: "",
  ...impfaufklaerungQuestions.reduce((values, question) => {
    return {
      ...values,
      [question.id]: "" as "ja",
      [question.detailName]: "",
    };
  }, {} as Record<string, string>),
  riskInformationRead: false,
  consentAccepted: false,
  placeDate: "",
  signature: "",
} as ImpfaufklaerungPayload);
