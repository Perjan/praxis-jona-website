import { describe, expect, it } from "vitest";

import {
  CONSENT_TEXT_VERSION,
  anamneseCopy,
  calculateAgeFromBirthdate,
  createAnamneseSchema,
  emptyFormValuesForUi,
  getVisibleSexSpecificFields,
  parseBirthdateInput,
  sanitizeFilenamePart,
} from "@/app/anamnese/form-definition";
import { createValidAnamnesePayload } from "./fixtures";

describe("anamnese form definition", () => {
  it("creates empty UI defaults with consent unchecked", () => {
    const defaults = emptyFormValuesForUi("de");

    expect(defaults.locale).toBe("de");
    expect(defaults.patient.name).toBe("");
    expect(defaults.consent.accepted).toBe(false);
    expect(defaults.consent.textVersion).toBe(CONSENT_TEXT_VERSION);
  });

  it("calculates age from a birthdate", () => {
    expect(calculateAgeFromBirthdate("2000-01-01")).toMatch(/^\d+$/);
    expect(calculateAgeFromBirthdate("04/12/2000")).toMatch(/^\d+$/);
    expect(calculateAgeFromBirthdate("12.04.2000")).toMatch(/^\d+$/);
    expect(calculateAgeFromBirthdate("")).toBe("");
    expect(calculateAgeFromBirthdate("not-a-date")).toBe("");
  });

  it("parses ISO, Safari slash, and German dot date inputs", () => {
    expect(parseBirthdateInput("1985-04-12")?.getFullYear()).toBe(1985);
    expect(parseBirthdateInput("04/12/1985")?.getMonth()).toBe(3);
    expect(parseBirthdateInput("12.04.1985")?.getDate()).toBe(12);
    expect(parseBirthdateInput("not-a-date")).toBeNull();
  });

  it("validates a complete German payload", () => {
    const payload = createValidAnamnesePayload();

    expect(createAnamneseSchema("de").parse(payload).patient.email).toBe("max@example.com");
  });

  it("rejects required field and consent failures", () => {
    const payload = createValidAnamnesePayload({
      patient: { ...createValidAnamnesePayload().patient, email: "invalid" },
      consent: { accepted: false, textVersion: CONSENT_TEXT_VERSION, acceptedAt: "" },
      signature: "",
    });

    const result = createAnamneseSchema("de").safeParse(payload);

    expect(result.success).toBe(false);
    expect(result.error?.issues.map((issue) => issue.path.join("."))).toEqual(
      expect.arrayContaining(["patient.email", "consent.accepted", "consent.acceptedAt", "signature"])
    );
  });

  it("keeps labels localized", () => {
    expect(anamneseCopy.de.title).toBe("Anamnesebogen");
    expect(anamneseCopy.en.title).toBe("Medical History Form");
    expect(anamneseCopy.en.options.mediterran).toBe("Mediterranean");
  });

  it("keeps German Longevity source wording", () => {
    expect(anamneseCopy.de.intro).toContain("Ihr Longevity-Programm individuell zu gestalten");
    expect(anamneseCopy.de.fields).toMatchObject({
      name: "Name",
      birthdate: "Geburtsdatum",
      age: "Alter",
      years: "Jahre",
      height: "Größe (cm)",
      weight: "Gewicht (kg)",
      occupation: "Beruf",
      email: "Kontakt / E-Mail",
      currentComplaints: "Haben Sie aktuell gesundheitliche Beschwerden? Wenn ja, welche?",
      programGoals: "Was sind Ihre Ziele mit diesem Programm? (z. B. mehr Energie, Prävention, Muskelaufbau, Leistungsfähigkeit)",
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
      smokingAmount: "wie viel:",
      alcohol: "Alkohol",
      stressLevel: "Stressbelastung",
      cycleRegular: "Zyklus regelmäßig?",
      femaleLibidoEnergy: "Libido / Energie",
      pregnancies: "Schwangerschaften",
      children: "Kinder",
      hormonalContraception: "Hormonelle Verhütung oder Therapie",
      hormonalContraceptionDetails: "Falls ja, welche:",
      forWomen: "Für Frauen:",
      forMen: "Für Männer",
      maleLibidoEnergy: "Libido / Energie",
      testosteroneMeasured: "Testosteronwerte jemals gemessen?",
      testosteroneSubstitution: "Falls Mangel, ist eine Substitution erfolgt?",
    });
    expect(anamneseCopy.de.options).toMatchObject({
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
    });
  });

  it("returns visible conditional sex-specific fields", () => {
    expect(getVisibleSexSpecificFields("female")).toContain("sexSpecific.cycleRegular");
    expect(getVisibleSexSpecificFields("male")).toContain("sexSpecific.testosteroneMeasured");
    expect(getVisibleSexSpecificFields("diverse")).toEqual([]);
  });

  it("sanitizes filename parts", () => {
    expect(sanitizeFilenamePart(" Max / Test Patient ")).toBe("Max__Test_Patient");
    expect(sanitizeFilenamePart("")).toBe("Patient");
  });
});
