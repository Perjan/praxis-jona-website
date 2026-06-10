import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { POST } from "@/app/api/eisenaufklaerung/route";
import { createDefaultEisenaufklaerungValues } from "@/app/anamnese/eiseninfusion/form-definition";

const createRequest = (body: unknown) =>
  new Request("http://localhost/api/eisenaufklaerung", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }) as any;

const createValidPayload = (overrides: Record<string, unknown> = {}) => ({
  ...createDefaultEisenaufklaerungValues(),
  patientName: "Julia Gjolli",
  monitoringWaiverAccepted: false,
  consentAccepted: true,
  doctorInitials: "JG",
  date: "09.06.2026",
  signature: "data:image/png;base64,ZWlzZW4=",
  ...overrides,
});

describe("POST /api/eisenaufklaerung", () => {
  const originalWebhook = process.env.N8N_WEBHOOK_URL;
  const originalDeliveryMode = process.env.ANAMNESE_DELIVERY_MODE;

  beforeEach(() => {
    process.env.N8N_WEBHOOK_URL = "https://n8n.example.test/webhook/eisenaufklaerung";
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
      "https://n8n.example.test/webhook/eisenaufklaerung",
      expect.objectContaining({ method: "POST", body: expect.any(FormData) })
    );

    const sentFormData = (vi.mocked(fetch).mock.calls[0][1] as RequestInit).body as FormData;
    expect(sentFormData.get("patientName")).toBe("Julia Gjolli");
    expect(JSON.parse(sentFormData.get("metadata") as string).doctorInitials).toBe("JG");
    expect(sentFormData.get("file")).toBeInstanceOf(Blob);
  });

  it("rejects missing consent and signature", async () => {
    const response = await POST(createRequest(createValidPayload({ consentAccepted: false, signature: "" })));

    expect(response.status).toBe(500);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("returns a server error when webhook config is missing", async () => {
    delete process.env.N8N_WEBHOOK_URL;

    const response = await POST(createRequest(createValidPayload()));

    expect(response.status).toBe(500);
    expect(fetch).not.toHaveBeenCalled();
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
