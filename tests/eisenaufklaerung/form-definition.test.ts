import { describe, expect, it } from "vitest";

import {
  createDefaultEisenaufklaerungValues,
  createEisenaufklaerungSchema,
  eisenaufklaerungConsentText,
  eisenaufklaerungFields,
} from "@/app/anamnese/eiseninfusion/form-definition";

describe("eisenaufklaerung form definition", () => {
  it("contains every visible field from the Pages document", () => {
    expect(eisenaufklaerungFields.map((field) => field.name)).toEqual([
      "patientName",
      "monitoringWaiverAccepted",
      "consentAccepted",
      "doctorInitials",
      "date",
      "signature",
    ]);
  });

  it("keeps the consent text from the document in one source of truth", () => {
    expect(eisenaufklaerungConsentText).toContain("Ich habe die Informationen gründlich durchgelesen");
    expect(eisenaufklaerungConsentText).toContain("Das Einverständnis ist für alle Eiseninfusionen");
  });

  it("validates required patient consent fields", () => {
    const result = createEisenaufklaerungSchema().safeParse(createDefaultEisenaufklaerungValues());

    expect(result.success).toBe(false);
    if (!result.success) {
      const paths = result.error.issues.map((issue) => issue.path.join("."));
      expect(paths).toEqual(expect.arrayContaining(["patientName", "consentAccepted", "date", "signature"]));
    }
  });
});
