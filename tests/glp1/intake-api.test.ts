import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { POST } from "@/app/api/glp1-intake/route";
import {
  GLP1_CONSENT_TEXT_VERSION,
  createDefaultGlp1Submission,
} from "@/app/glp1/intake-definition";
import { generateGlp1Pdf } from "@/app/api/glp1-intake/pdf";

const signature =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAFgwJ/lY6N9wAAAABJRU5ErkJggg==";

function validPayload() {
  const defaults = createDefaultGlp1Submission("new", "de");
  return {
    ...defaults,
    submissionId: "d9766e7d-80d6-4e96-85b0-26223447a0fb",
    patient: {
      name: "Max Mustermann",
      birthdate: "1985-04-12",
      email: "max@example.com",
      phone: "+49 30 1234567",
    },
    answers: {
      ...defaults.answers,
      heightCm: "180",
      weightKg: "95",
      previousWeightLossAttempts: "yes",
      weightRelatedConditions: "Bluthochdruck",
      pregnantOrBreastfeeding: "not_applicable",
      diabetes: "no",
      glucoseLoweringMedication: "no",
      pancreatitisOrGallbladderDisease: "yes",
      severeGastrointestinalDisease: "no",
      kidneyOrLiverDisease: "no",
      eyeComplications: "no",
      thyroidCancerOrMen2History: "no",
      allergiesOrPriorIntolerance: "no",
      treatmentGoals: "Gewicht reduzieren",
    },
    consent: {
      accepted: true,
      textVersion: GLP1_CONSENT_TEXT_VERSION,
      acceptedAt: "2026-09-02T10:00:00.000Z",
    },
    signature,
  };
}

function request(payload: unknown) {
  return new Request("http://localhost/api/glp1-intake", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
}

function validFollowUpPayload() {
  const defaults = createDefaultGlp1Submission("follow-up", "en");
  return {
    ...defaults,
    submissionId: "c456d9ca-ff39-4b38-b7eb-4df1a6c302dd",
    patient: {
      name: "Jane Patient",
      birthdate: "1988-03-20",
      email: "jane@example.com",
      phone: "+49 30 7654321",
    },
    answers: {
      ...defaults.answers,
      currentMedication: "Medicine as prescribed",
      currentDose: "current pen setting",
      frequency: "once weekly",
      treatmentStartDate: "2026-01-10",
      mostRecentDoseDate: "2026-08-28",
      doseRequest: "increase",
      desiredDose: "next prescribed step",
      doseRationale: "Appetite effect has reduced.",
      currentWeightKg: "82",
      progress: "Weight has decreased gradually.",
      appetiteEffect: "returning",
      missedDoses: "no",
      treatmentGoals: "Continue steady progress.",
      sideEffectSeverity: "moderate",
      pregnancyStatus: "not_applicable",
    },
    consent: {
      accepted: true,
      textVersion: GLP1_CONSENT_TEXT_VERSION,
      acceptedAt: "2026-09-02T10:00:00.000Z",
    },
    signature,
  };
}

describe("POST /api/glp1-intake", () => {
  beforeEach(() => {
    process.env.ANAMNESE_DELIVERY_MODE = "live";
    process.env.N8N_WEBHOOK_URL = "https://n8n.example.test/webhook/glp1";
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(null, { status: 200 })));
  });

  afterEach(() => {
    delete process.env.ANAMNESE_DELIVERY_MODE;
    delete process.env.N8N_WEBHOOK_URL;
    vi.unstubAllGlobals();
  });

  it("sends PDF, structured metadata, flags, and idempotency reference to n8n", async () => {
    const infoSpy = vi.spyOn(console, "info").mockImplementation(() => undefined);
    const response = await POST(request(validPayload()) as any);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.submissionId).toBe("d9766e7d-80d6-4e96-85b0-26223447a0fb");
    expect(fetch).toHaveBeenCalledWith(
      "https://n8n.example.test/webhook/glp1",
      expect.objectContaining({ method: "POST", body: expect.any(FormData) }),
    );

    const sent = (vi.mocked(fetch).mock.calls[0][1] as RequestInit).body as FormData;
    const metadata = JSON.parse(sent.get("metadata") as string);
    expect(sent.get("file")).toBeInstanceOf(Blob);
    expect(sent.get("patientEmail")).toBe("max@example.com");
    expect(sent.get("submissionId")).toBe(body.submissionId);
    expect(metadata.bmi).toBe(29.3);
    expect(metadata.reviewFlags).toContain("pancreatitis_or_gallbladder_history");
    expect(metadata.signature).toBeUndefined();
    const logged = JSON.stringify(infoSpy.mock.calls);
    expect(logged).toContain(body.submissionId);
    expect(logged).not.toContain("Max Mustermann");
    expect(logged).not.toContain("Bluthochdruck");
  });

  it("returns no-store validation errors without calling n8n", async () => {
    const response = await POST(request({ flow: "new" }) as any);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(response.headers.get("cache-control")).toContain("no-store");
    expect(body.success).toBe(false);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("delivers a localized follow-up request with server-derived flags", async () => {
    const response = await POST(request(validFollowUpPayload()) as any);
    expect(response.status).toBe(200);

    const sent = (vi.mocked(fetch).mock.calls[0][1] as RequestInit).body as FormData;
    const metadata = JSON.parse(sent.get("metadata") as string);
    expect(sent.get("flow")).toBe("follow-up");
    expect((sent.get("file") as File).name).toContain("Folgebeurteilung");
    expect(metadata.locale).toBe("en");
    expect(metadata.reviewFlags).toEqual(expect.arrayContaining(["dose_change_requested", "moderate_or_severe_side_effects"]));
  });

  it("rejects honeypot submissions", async () => {
    const payload = { ...validPayload(), website: "spam.example" };
    const response = await POST(request(payload) as any);

    expect(response.status).toBe(400);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("returns a generic delivery error when n8n fails", async () => {
    vi.mocked(fetch).mockResolvedValueOnce(new Response(null, { status: 503 }));

    const response = await POST(request(validPayload()) as any);
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.success).toBe(false);
    expect(body.message).not.toContain("503");
  });

  it("fails safely when the webhook is missing without logging medical answers", async () => {
    delete process.env.N8N_WEBHOOK_URL;
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => undefined);

    const response = await POST(request(validPayload()) as any);
    const logged = errorSpy.mock.calls.flat().join(" ");

    expect(response.status).toBe(500);
    expect(logged).not.toContain("Max Mustermann");
    expect(logged).not.toContain("Bluthochdruck");
  });

  it("keeps PDF generation available when a signature image cannot be embedded", () => {
    const payload = { ...validPayload(), signature: "data:image/png;base64,AAAA" };
    expect(() => generateGlp1Pdf(payload as any, new Date("2026-09-02T12:00:00.000Z"))).not.toThrow();
  });
});
