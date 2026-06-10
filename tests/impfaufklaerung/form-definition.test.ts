import { describe, expect, it } from "vitest";

import {
  createDefaultImpfaufklaerungValues,
  createImpfaufklaerungSchema,
  impfaufklaerungQuestions,
  impfaufklaerungTextFields,
} from "@/app/anamnese/impfaufklaerung/form-definition";

describe("impfaufklaerung form definition", () => {
  it("contains every patient field from the PDF", () => {
    expect(impfaufklaerungTextFields.map((field) => field.name)).toEqual([
      "vaccineName",
      "patientName",
      "birthdate",
      "address",
      "phone",
      "email",
      "legalRepresentativeName",
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

  it("validates required consent, place/date, and signature", () => {
    const result = createImpfaufklaerungSchema().safeParse(createDefaultImpfaufklaerungValues());

    expect(result.success).toBe(false);
    expect(result.error?.issues.map((issue) => issue.path.join("."))).toEqual(
      expect.arrayContaining(["vaccineName", "patientName", "birthdate", "placeDate", "consentAccepted", "signature"])
    );
  });
});

