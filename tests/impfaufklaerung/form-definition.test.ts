import { describe, expect, it } from "vitest";

import {
  createDefaultImpfaufklaerungValues,
  createImpfaufklaerungSchema,
  impfaufklaerungCopy,
  impfaufklaerungQuestions,
  impfaufklaerungTextFields,
} from "@/app/anamnese/impfaufklaerung/form-definition";

describe("impfaufklaerung form definition", () => {
  it("contains every patient field from the PDF", () => {
    expect(impfaufklaerungTextFields).toEqual([
      { name: "vaccineName", label: "Name der Schutzimpfung", required: true },
      { name: "patientName", label: "Familienname, Vorname", required: true },
      { name: "birthdate", label: "Geburtsdatum (TT.MM.JJJJ)", required: true },
      { name: "address", label: "Adresse (Postleitzahl, Ort, Straße, Hausnummer)", required: false },
      { name: "phone", label: "Telefonnummer", required: false },
      { name: "email", label: "E-Mail-Adresse", required: false },
      { name: "legalRepresentativeName", label: "Ggf. Name der gesetzlichen Vertretung", required: false },
    ]);
  });

  it("contains all 11 PDF medical screening questions with detail fields", () => {
    expect(impfaufklaerungQuestions).toHaveLength(11);
    expect(impfaufklaerungQuestions.map((question) => question.id)).toEqual([
      "acuteIllness",
      "allergy",
      "allergicShock",
      "recentVaccinationOrHyposensitization",
      "bloodProducts",
      "bloodThinners",
      "chemoRadiationImmunosuppressants",
      "previousVaccineReaction",
      "chronicDisease",
      "recentOrPlannedSurgery",
      "pregnancy",
    ]);
    expect(impfaufklaerungQuestions.every((question) => question.detailName)).toBe(true);
  });

  it("preserves the German screening wording from the original implementation commit", () => {
    expect(impfaufklaerungQuestions.map(({ question, detailLabel }) => ({ question, detailLabel }))).toEqual([
      {
        question:
          "1. Leidet oder litt die zu impfende Person in den letzten 7 Tagen an einer akuten Erkrankung oder Infektion (z. B. Fieber, Husten, Schnupfen, Halsschmerzen, andere)?",
        detailLabel: "Wenn ja, woran?",
      },
      {
        question: "2. Besteht bei der zu impfenden Person eine Allergie auf Medikamente oder Inhaltsstoffe irgendeines Impfstoffes?",
        detailLabel: "Wenn ja, welche?",
      },
      {
        question:
          "3. Hatte die zu impfende Person schon einmal einen allergischen Schock mit Blutdruckabfall, schwerer Atemnot oder Kollaps?",
        detailLabel: "Wenn ja, worauf?",
      },
      {
        question:
          "4. Erfolgte bei der zu impfenden Person in den letzten 4 Wochen eine andere Impfung, oder wird derzeit eine allergenspezifische Immuntherapie/Hyposensibilisierung bei der zu impfenden Person durchgeführt?",
        detailLabel: "Wenn ja, welche und wann?",
      },
      {
        question: "5. Hat die zu impfende Person in den letzten 3 Monaten Blut, Blutprodukte oder Immunglobuline erhalten?",
        detailLabel: "Wenn ja, was und wann?",
      },
      {
        question: "6. Nimmt die zu impfende Person regelmäßig blutverdünnende Medikamente?",
        detailLabel: "Wenn ja, welche?",
      },
      {
        question:
          "7. Wird bei der zu impfenden Person derzeit eine Chemo- und/oder Strahlentherapie durchgeführt oder nimmt die zu impfende Person immunschwächende Medikamente ein (z. B. Cortison)?",
        detailLabel: "Wenn ja, welche?",
      },
      {
        question:
          "8. Bestanden bei der zu impfenden Person in der Vergangenheit nach einer Impfung Beschwerden oder Nebenwirkungen (mit Ausnahme von leichten Lokalreaktionen wie Rötung, Schwellung, Schmerzen an der Stichstelle oder leichtes Fieber)?",
        detailLabel: "Wenn ja, nach welcher Impfung und welche?",
      },
      {
        question:
          "9. Liegen bei der zu impfenden Person schwere oder chronische Erkrankungen (z. B. Immunschwäche, Krebserkrankung, Autoimmunerkrankung, Blutgerinnungsstörung, chronisch entzündliche Erkrankungen) vor?",
        detailLabel: "Wenn ja, welche?",
      },
      {
        question:
          "10. Wurde vor kurzem bei der zu impfenden Person ein operativer Eingriff durchgeführt oder ist ein solcher bei der zu impfenden Person geplant?",
        detailLabel: "Wenn ja, wann?",
      },
      {
        question: "11. Besteht eine Schwangerschaft bei der zu impfenden Person?",
        detailLabel: "Wenn ja, welche Schwangerschaftswoche?",
      },
    ]);
    expect(impfaufklaerungCopy.de.riskInformation.bullets).toEqual(
      expect.arrayContaining([
        "Nach jeder Impfung kann es zu einer Rötung und schmerzhaften Schwellung kommen. (>10%)",
        "Über Hautausschlag berichten bis zu 10 % der Geimpften.",
        "Sehr selten ist nach Impfungen das Guillain-Barre-Syndrom, eine lebensbedrohliche Nervenlähmung. (Häufigkeit derzeit geschätzt 6 bis 10 Patienten auf 1 Million geimpfter Patienten)",
      ]),
    );
  });

  it("validates required consent, place/date, and signature", () => {
    const result = createImpfaufklaerungSchema().safeParse(createDefaultImpfaufklaerungValues());

    expect(result.success).toBe(false);
    expect(result.error?.issues.map((issue) => issue.path.join("."))).toEqual(
      expect.arrayContaining(["vaccineName", "patientName", "birthdate", "placeDate", "consentAccepted", "signature"])
    );
  });

  it("keeps English labels and validation messages localized", () => {
    const values = createDefaultImpfaufklaerungValues("en");
    const result = createImpfaufklaerungSchema("en").safeParse(values);

    expect(values.locale).toBe("en");
    expect(impfaufklaerungCopy.en.title).toBe("Vaccination Consent");
    expect(impfaufklaerungCopy.en.medicalLegalReviewNote).toContain("requires human medical/legal review");
    expect(impfaufklaerungCopy.en.fields[0].label).toBe("Name of vaccination");
    expect(impfaufklaerungCopy.en.genderOptions.map((option) => option.label)).toEqual(["Female", "Male", "Diverse"]);
    expect(result.success).toBe(false);
    expect(result.error?.issues.map((issue) => issue.message)).toContain("This field is required");
  });
});
