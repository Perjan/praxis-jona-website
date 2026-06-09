import {
  AnamnesePayload,
  CONSENT_TEXT_VERSION,
  createDefaultAnamneseValues,
} from "@/app/anamnese/form-definition";

export const TEST_SIGNATURE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAFgwJ/lY6N9wAAAABJRU5ErkJggg==";

export const createValidAnamnesePayload = (overrides: Partial<AnamnesePayload> = {}): AnamnesePayload => ({
  ...createDefaultAnamneseValues("de"),
  patient: {
    name: "Max Mustermann",
    birthdate: "1985-04-12",
    height: "180",
    weight: "82",
    occupation: "Ingenieur",
    email: "max@example.com",
    ...(overrides.patient ?? {}),
  },
  medicalHistory: {
    currentComplaints: "Müdigkeit",
    programGoals: "Mehr Energie",
    previousDiseases: "Keine",
    operations: "Keine",
    familyHeartStroke: "Vater",
    familyCancer: "",
    familyDementia: "",
    familyDiabetes: "Großmutter",
    medications: "Keine",
    supplements: "Vitamin D",
    ...(overrides.medicalHistory ?? {}),
  },
  lifestyle: {
    exerciseFrequency: "3x pro Woche",
    sleepQuality: "gut",
    diet: "mediterran",
    smoking: "nein",
    smokingAmount: "",
    alcohol: "gelegentlich",
    stressLevel: "mittel",
    ...(overrides.lifestyle ?? {}),
  },
  sexSpecific: {
    gender: "male",
    cycleRegular: "",
    femaleLibidoEnergy: "",
    pregnancies: "",
    children: "",
    hormonalContraception: "",
    hormonalContraceptionDetails: "",
    maleLibidoEnergy: "normal",
    testosteroneMeasured: "nein",
    testosteroneSubstitution: "",
    ...(overrides.sexSpecific ?? {}),
  },
  consent: {
    accepted: true,
    textVersion: CONSENT_TEXT_VERSION,
    acceptedAt: "2026-06-09T10:00:00.000Z",
    ...(overrides.consent ?? {}),
  },
  locale: overrides.locale ?? "de",
  signature: overrides.signature ?? TEST_SIGNATURE,
});
