import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { POST } from "@/app/api/schilddruesen-diagnostik/route";
import { createDefaultThyroidValues } from "@/app/anamnese/schilddruesen-diagnostik/form-definition";

const createRequest = (body: unknown) =>
  new Request("http://localhost/api/schilddruesen-diagnostik", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }) as any;

const createValidPayload = (overrides: Record<string, unknown> = {}) => ({
  ...createDefaultThyroidValues(),
  reason: "Kontrolle",
  age: "35",
  height: "170",
  weight: "65",
  thyroid: {
    ...createDefaultThyroidValues().thyroid,
    throatComplaints: "nein",
    iodizedSalt: "ja",
  },
  symptoms: {
    ...createDefaultThyroidValues().symptoms,
    nervous: "nein",
    tired: "ja",
  },
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
  ...overrides,
});

describe("POST /api/schilddruesen-diagnostik", () => {
  const originalWebhook = process.env.N8N_WEBHOOK_URL;
  const originalDeliveryMode = process.env.ANAMNESE_DELIVERY_MODE;

  beforeEach(() => {
    process.env.N8N_WEBHOOK_URL = "https://n8n.example.test/webhook/schilddruesen-diagnostik";
    process.env.ANAMNESE_DELIVERY_MODE = "live";
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
      }),
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

    const sentFormData = (vi.mocked(fetch).mock.calls[0][1] as RequestInit).body as FormData;
    expect(sentFormData.get("patientName")).toBe("Julia Gjolli");
    expect(JSON.parse(sentFormData.get("metadata") as string).locale).toBe("de");
    expect(sentFormData.get("file")).toBeInstanceOf(Blob);
  });

  it("accepts a valid English submission and sends localized metadata", async () => {
    const response = await POST(createRequest(createValidPayload({ locale: "en" })));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.message).toBe("Thyroid questionnaire sent successfully");

    const sentFormData = (vi.mocked(fetch).mock.calls[0][1] as RequestInit).body as FormData;
    expect(JSON.parse(sentFormData.get("metadata") as string).locale).toBe("en");
  });

  it("rejects missing privacy consent and signature", async () => {
    const response = await POST(
      createRequest(
        createValidPayload({
          privacy: { ...createValidPayload().privacy, consentAccepted: false },
          signature: "",
        }),
      ),
    );

    expect(response.status).toBe(500);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("allows local mock delivery without calling the webhook", async () => {
    delete process.env.ANAMNESE_DELIVERY_MODE;

    const response = await POST(createRequest(createValidPayload()));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.message).toBe("Schilddrüsen-Fragebogen lokal validiert");
    expect(fetch).not.toHaveBeenCalled();
  });
});
