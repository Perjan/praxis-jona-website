import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { POST } from "@/app/api/impfaufklaerung/route";
import { createDefaultImpfaufklaerungValues, impfaufklaerungQuestions } from "@/app/anamnese/impfaufklaerung/form-definition";

const createRequest = (body: unknown) =>
  new Request("http://localhost/api/impfaufklaerung", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }) as any;

const createValidPayload = (overrides: Record<string, unknown> = {}) => ({
  ...createDefaultImpfaufklaerungValues(),
  vaccineName: "FSME",
  patientName: "Julia Gjolli",
  gender: "weiblich",
  birthdate: "02.01.2001",
  address: "12345 Berlin, Musterstr. 1",
  phone: "030 123456",
  email: "julia@example.com",
  placeDate: "Berlin, 09.06.2026",
  riskInformationRead: true,
  consentAccepted: true,
  signature: "data:image/png;base64,aW1wZg==",
  ...impfaufklaerungQuestions.reduce((values, question) => {
    return {
      ...values,
      [question.id]: "nein",
      [question.detailName]: "",
    };
  }, {}),
  ...overrides,
});

describe("POST /api/impfaufklaerung", () => {
  const originalWebhook = process.env.N8N_WEBHOOK_URL;
  const originalDeliveryMode = process.env.ANAMNESE_DELIVERY_MODE;

  beforeEach(() => {
    process.env.N8N_WEBHOOK_URL = "https://n8n.example.test/webhook/impfaufklaerung";
    process.env.ANAMNESE_DELIVERY_MODE = "live";
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
      })
    );
  });

  afterEach(() => {
    process.env.N8N_WEBHOOK_URL = originalWebhook;
    process.env.ANAMNESE_DELIVERY_MODE = originalDeliveryMode;
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("accepts a valid submission and sends multipart metadata", async () => {
    const response = await POST(createRequest(createValidPayload()));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(fetch).toHaveBeenCalledWith(
      "https://n8n.example.test/webhook/impfaufklaerung",
      expect.objectContaining({ method: "POST", body: expect.any(FormData) })
    );

    const sentFormData = (vi.mocked(fetch).mock.calls[0][1] as RequestInit).body as FormData;
    expect(sentFormData.get("patientName")).toBe("Julia Gjolli");
    expect(JSON.parse(sentFormData.get("metadata") as string).vaccineName).toBe("FSME");
    expect(sentFormData.get("file")).toBeInstanceOf(Blob);
  });

  it("rejects missing consent and signature", async () => {
    const response = await POST(
      createRequest(createValidPayload({ riskInformationRead: false, consentAccepted: false, signature: "" }))
    );

    expect(response.status).toBe(500);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("returns a server error when webhook config is missing", async () => {
    delete process.env.N8N_WEBHOOK_URL;

    const response = await POST(createRequest(createValidPayload()));

    expect(response.status).toBe(500);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("returns a server error when n8n fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 502,
      })
    );

    const response = await POST(createRequest(createValidPayload()));

    expect(response.status).toBe(500);
  });

  it("allows local mock delivery without calling the webhook", async () => {
    delete process.env.ANAMNESE_DELIVERY_MODE;

    const response = await POST(createRequest(createValidPayload()));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(fetch).not.toHaveBeenCalled();
  });
});
