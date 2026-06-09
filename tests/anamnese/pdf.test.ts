import { describe, expect, it } from "vitest";

import {
  createAnamneseFilename,
  dataUrlToBlob,
  generateAnamnesePDF,
  getFileExtensionFromMime,
  getImageFormatFromMime,
  parseDataUrl,
} from "@/app/api/anamnese/pdf";
import { TEST_SIGNATURE, createValidAnamnesePayload } from "./fixtures";

describe("anamnese pdf helpers", () => {
  it("parses signature data URLs", () => {
    expect(parseDataUrl(TEST_SIGNATURE).mimeType).toBe("image/png");
    expect(dataUrlToBlob(TEST_SIGNATURE).blob.type).toBe("image/png");
  });

  it("maps image mime types", () => {
    expect(getImageFormatFromMime("image/png")).toBe("PNG");
    expect(getImageFormatFromMime("image/jpeg")).toBe("JPEG");
    expect(getFileExtensionFromMime("image/jpeg")).toBe("jpg");
  });

  it("creates sanitized filenames", () => {
    const payload = createValidAnamnesePayload({
      patient: { ...createValidAnamnesePayload().patient, name: "Max / Mustermann" },
    });

    expect(createAnamneseFilename(payload, new Date("2026-06-09T00:00:00.000Z"))).toBe(
      "Anamnesebogen_Max__Mustermann_2026-06-09.pdf"
    );
  });

  it("generates a base64 PDF string for German and English payloads", () => {
    const german = generateAnamnesePDF(createValidAnamnesePayload(), new Date("2026-06-09T00:00:00.000Z"));
    const english = generateAnamnesePDF(
      createValidAnamnesePayload({ locale: "en" }),
      new Date("2026-06-09T00:00:00.000Z")
    );

    expect(german.length).toBeGreaterThan(100);
    expect(english.length).toBeGreaterThan(100);
  });
});
