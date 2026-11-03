import { describe, expect, it } from "vitest";
import { Constants } from "../../app/Constants";

describe("PhilArt booking destinations", () => {
  it.each([
    ["skinboosterPhilartEye", "16017783"],
    ["skinboosterPhilartFace", "16017781"],
  ] as const)("selects the correct Polynukleotide appointment for %s", (service, motiveId) => {
    const urls = Constants.appointmentUrlsByService[service];

    for (const insurance of ["private", "public"] as const) {
      const url = new URL(urls[insurance]);
      expect(url.hostname).toBe("www.doctolib.de");
      expect(url.pathname).toBe(`/internist/berlin/gjolli-jonida/booking/${insurance === "private" ? "availabilities" : "error"}`);
      expect(url.searchParams.get("visit_motive_category_ids[]")).toBe("554449");
      expect(url.searchParams.get("motiveIds[]")).toBe(motiveId);
      expect(url.searchParams.get("insuranceSector")).toBe(insurance);
    }
  });
});
