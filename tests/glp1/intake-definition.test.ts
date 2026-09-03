import { describe, expect, it } from "vitest";

import {
  GLP1_CONSENT_TEXT_VERSION,
  GLP1_SCHEMA_VERSION,
  calculateGlp1Bmi,
  createDefaultGlp1Submission,
  createGlp1SubmissionSchema,
  deriveGlp1ReviewFlags,
  glp1StepFieldPaths,
} from "@/app/glp1/intake-definition";
import { getGlp1Copy } from "@/app/glp1/intake-copy";

const signature =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAFgwJ/lY6N9wAAAABJRU5ErkJggg==";

function validNewSubmission() {
  const submission = createDefaultGlp1Submission("new", "de");
  return {
    ...submission,
    submissionId: "d9766e7d-80d6-4e96-85b0-26223447a0fb",
    patient: {
      name: "Max Mustermann",
      birthdate: "1985-04-12",
      email: "max@example.com",
      phone: "+49 30 1234567",
    },
    answers: {
      ...submission.answers,
      heightCm: "180",
      weightKg: "95",
      previousWeightLossAttempts: "yes",
      weightRelatedConditions: "Bluthochdruck",
      pregnantOrBreastfeeding: "not_applicable",
      diabetes: "no",
      glucoseLoweringMedication: "no",
      pancreatitisOrGallbladderDisease: "no",
      severeGastrointestinalDisease: "no",
      kidneyOrLiverDisease: "no",
      eyeComplications: "no",
      thyroidCancerOrMen2History: "no",
      allergiesOrPriorIntolerance: "no",
      treatmentGoals: "Gesund Gewicht reduzieren",
    },
    consent: {
      accepted: true as const,
      textVersion: GLP1_CONSENT_TEXT_VERSION,
      acceptedAt: "2026-09-02T10:00:00.000Z",
    },
    signature,
  };
}

describe("GLP-1 intake definition", () => {
  it("creates versioned bilingual defaults for both flows", () => {
    const newSubmission = createDefaultGlp1Submission("new", "de");
    const followUp = createDefaultGlp1Submission("follow-up", "en");

    expect(newSubmission.schemaVersion).toBe(GLP1_SCHEMA_VERSION);
    expect(newSubmission.flow).toBe("new");
    expect(followUp.flow).toBe("follow-up");
    expect(followUp.locale).toBe("en");
    expect(followUp.consent.textVersion).toBe(GLP1_CONSENT_TEXT_VERSION);
  });

  it("omits application frequency and uses localized starting-weight labels", () => {
    const followUp = createDefaultGlp1Submission("follow-up", "de");

    expect(followUp.answers).not.toHaveProperty("frequency");
    expect(glp1StepFieldPaths["follow-up"][1]).not.toContain("answers.frequency");
    expect(getGlp1Copy("de").fields).not.toHaveProperty("frequency");
    expect(getGlp1Copy("en").fields).not.toHaveProperty("frequency");
    expect(getGlp1Copy("de").fields.startingWeightKg).toBe("Startgewicht (kg)");
    expect(getGlp1Copy("en").fields.startingWeightKg).toBe("Starting weight (kg)");
  });

  it("validates a complete new-patient submission and calculates BMI", () => {
    const parsed = createGlp1SubmissionSchema("de").parse(validNewSubmission());

    expect(parsed.patient.email).toBe("max@example.com");
    expect(parsed.flow).toBe("new");
    if (parsed.flow === "new") {
      expect(calculateGlp1Bmi(parsed.answers.heightCm, parsed.answers.weightKg)).toBe(29.3);
    }
  });

  it("rejects patients under 18 before intake", () => {
    const submission = validNewSubmission();
    submission.patient.birthdate = "2012-01-01";

    const result = createGlp1SubmissionSchema("de").safeParse(submission);

    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.some((issue) => issue.path.join(".") === "patient.birthdate")).toBe(true);
    }
  });

  it("requires desired dose and rationale only for dose changes", () => {
    const submission = createDefaultGlp1Submission("follow-up", "en");
    const payload = {
      ...submission,
      submissionId: "d9766e7d-80d6-4e96-85b0-26223447a0fb",
      patient: {
        name: "Jane Patient",
        birthdate: "1988-03-20",
        email: "jane@example.com",
        phone: "+49 30 7654321",
      },
      answers: {
        ...submission.answers,
        currentMedication: "Custom GLP-1 medicine",
        currentDose: "custom dose",
        treatmentStartDate: "2026-01-01",
        mostRecentDoseDate: "2026-08-30",
        doseRequest: "increase" as const,
        currentWeightKg: "80",
        progress: "Weight is decreasing slowly",
        appetiteEffect: "reduced",
        missedDoses: "no",
        treatmentGoals: "Continue treatment",
        sideEffectSeverity: "mild",
        pregnancyStatus: "not_applicable",
      },
      consent: {
        accepted: true as const,
        textVersion: GLP1_CONSENT_TEXT_VERSION,
        acceptedAt: "2026-09-02T10:00:00.000Z",
      },
      signature,
    };

    expect(createGlp1SubmissionSchema("en").safeParse(payload).success).toBe(false);
    payload.answers.desiredDose = "next dose requested";
    payload.answers.doseRationale = "Current effect is insufficient";
    expect(createGlp1SubmissionSchema("en").safeParse(payload).success).toBe(true);
  });

  it("derives silent physician review flags on the server", () => {
    const submission = validNewSubmission();
    submission.answers.pregnantOrBreastfeeding = "yes";
    submission.answers.pancreatitisOrGallbladderDisease = "yes";

    const parsed = createGlp1SubmissionSchema("de").parse(submission);
    const flags = deriveGlp1ReviewFlags(parsed);

    expect(flags).toContain("pregnancy_or_breastfeeding");
    expect(flags).toContain("pancreatitis_or_gallbladder_history");
    expect(flags).not.toContain("minor");
  });
});
