import { describe, expect, it } from "vitest";

import {
  createDefaultThyroidValues,
  createThyroidSchema,
  thyroidCopy,
} from "@/app/anamnese/schilddruesen-diagnostik/form-definition";

describe("thyroid diagnostics form definition", () => {
  it("keeps German source document wording in one source of truth", () => {
    expect(thyroidCopy.de.title).toBe("Fragebogen zur Schilddrüsen-Diagnostik");
    expect(thyroidCopy.de.fields.reason).toBe("Grund der Schilddrüsenuntersuchung (in Stichworten)");
    expect(thyroidCopy.de.thyroidQuestions.map((question) => question.label)).toEqual(
      expect.arrayContaining([
        "Haben Sie Beschwerden im Halsbereich?",
        "Behandlung der Schilddrüse mit Medikamenten?",
        "Wurde bei Ihnen in den letzten Monaten eine Röntgen-Kontrastmitteluntersuchung durchgeführt (Niere, Gallenblase, Gefäße)?",
        "Besteht eine Schwangerschaft?",
      ]),
    );
    expect(thyroidCopy.de.symptomQuestions.map((question) => question.label)).toEqual(
      expect.arrayContaining([
        "Sind Sie sehr nervös?",
        "Haben Sie Beschwerden an den Augen?",
        "Sind Sie müder, langsamer geworden?",
        "Sind Ihre Nägel brüchig?",
      ]),
    );
    expect(thyroidCopy.de.extraFields.lastPeriodDate).toBe("Datum der letzen Regelblutung");
    expect(thyroidCopy.de.privacyText).toEqual(
      expect.arrayContaining([
        "Wollen Sie uns die Einwilligung nicht erteilen, müssen Sie Ihre Daten selbst an die Leistungserbringer übermitteln oder von diesen einholen.",
        "Daher bitten wir Sie auch in Ihrem eigenen Interesse um folgende Einwilligung, die Sie bitte vor Unterzeichnung sorgfältig lesen:",
      ]),
    );
    expect(thyroidCopy.de.privacyConsent).toContain("Praxis Jona Dr. Jonida Gjolli, Torstr. 125, 10119 Berlin");
    expect(thyroidCopy.de.privacyConsent).toContain("bisherige Datenweitergaben bleiben rechtmäßig");
  });

  it("validates German and English complete payloads", () => {
    const german = createDefaultThyroidValues("de");
    const english = createDefaultThyroidValues("en");

    const complete = {
      privacy: {
        patientName: "Julia Gjolli",
        birthdate: "02.01.2001",
        address: "Torstr. 125, 10119 Berlin",
        furtherTreatment: true,
        medicalCare: true,
        completeDocumentation: true,
        dataCollection: true,
        consentAccepted: true,
        placeDate: "Berlin, 09.06.2026",
      },
      signature: "data:image/png;base64,c2Q=",
    };

    expect(createThyroidSchema("de").parse({ ...german, ...complete }).locale).toBe("de");
    expect(createThyroidSchema("en").parse({ ...english, ...complete }).locale).toBe("en");
  });

  it("rejects missing privacy consent and signature", () => {
    const result = createThyroidSchema("de").safeParse(createDefaultThyroidValues("de"));

    expect(result.success).toBe(false);
    expect(result.error?.issues.map((issue) => issue.path.join("."))).toEqual(
      expect.arrayContaining(["privacy.patientName", "privacy.birthdate", "privacy.address", "privacy.consentAccepted", "signature"]),
    );
  });
});
