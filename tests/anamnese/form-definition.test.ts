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
