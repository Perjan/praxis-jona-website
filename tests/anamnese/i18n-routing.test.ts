import { describe, expect, it } from "vitest";

import { localizedPathForLocale } from "@/app/lib/i18n-routing";

describe("anamnese i18n routing", () => {
  it("maps every anamnese subpage between German and English routes", () => {
    expect(localizedPathForLocale("/anamnese/medical-history", "en")).toBe("/en/anamnese/medical-history");
    expect(localizedPathForLocale("/anamnese/impfaufklaerung", "en")).toBe("/en/anamnese/impfaufklaerung");
    expect(localizedPathForLocale("/anamnese/eiseninfusion", "en")).toBe("/en/anamnese/eiseninfusion");
    expect(localizedPathForLocale("/anamnese/schilddruesen-diagnostik", "en")).toBe(
      "/en/anamnese/thyroid-diagnostics",
    );

    expect(localizedPathForLocale("/en/anamnese/medical-history", "de")).toBe("/anamnese/medical-history");
    expect(localizedPathForLocale("/en/anamnese/impfaufklaerung", "de")).toBe("/anamnese/impfaufklaerung");
    expect(localizedPathForLocale("/en/anamnese/eiseninfusion", "de")).toBe("/anamnese/eiseninfusion");
    expect(localizedPathForLocale("/en/anamnese/thyroid-diagnostics", "de")).toBe(
      "/anamnese/schilddruesen-diagnostik",
    );
  });
});
