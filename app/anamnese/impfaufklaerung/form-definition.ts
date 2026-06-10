import { z } from "zod";

const required = "Dieses Feld ist erforderlich";
const yesNo = z.enum(["ja", "nein"], { message: "Bitte wählen Sie Ja oder Nein" });

export const impfaufklaerungTextFields = [
  { name: "vaccineName", label: "Name der Schutzimpfung", required: true },
  { name: "patientName", label: "Familienname, Vorname", required: true },
  { name: "birthdate", label: "Geburtsdatum (TT.MM.JJJJ)", required: true },
  { name: "address", label: "Adresse (Postleitzahl, Ort, Straße, Hausnummer)", required: false },
  { name: "phone", label: "Telefonnummer", required: false },
  { name: "email", label: "E-Mail-Adresse", required: false },
  { name: "legalRepresentativeName", label: "Ggf. Name der gesetzlichen Vertretung", required: false },
] as const;

export const impfaufklaerungQuestions = [
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
] as const;

const questionSchema = impfaufklaerungQuestions.reduce((shape, question) => {
  return {
    ...shape,
    [question.id]: yesNo,
    [question.detailName]: z.string().optional().default(""),
  };
}, {} as Record<string, z.ZodTypeAny>);

export function createImpfaufklaerungSchema() {
  return z.object({
    vaccineName: z.string().min(1, required),
    patientName: z.string().min(1, required),
    gender: z.enum(["weiblich", "männlich", "divers"], { message: "Bitte wählen Sie ein Geschlecht" }),
    birthdate: z.string().min(1, required),
    address: z.string().optional().default(""),
    phone: z.string().optional().default(""),
    email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein").or(z.literal("")).default(""),
    legalRepresentativeName: z.string().optional().default(""),
    ...questionSchema,
    riskInformationRead: z.boolean().refine((value) => value === true, "Bitte bestätigen Sie die Impfaufklärung"),
    consentAccepted: z.boolean().refine((value) => value === true, "Bitte bestätigen Sie Ihr Einverständnis"),
    placeDate: z.string().min(1, required),
    signature: z.string().min(1, "Bitte unterschreiben Sie den Bogen"),
  });
}

export type ImpfaufklaerungPayload = z.infer<ReturnType<typeof createImpfaufklaerungSchema>>;

export const createDefaultImpfaufklaerungValues = (): ImpfaufklaerungPayload => ({
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
