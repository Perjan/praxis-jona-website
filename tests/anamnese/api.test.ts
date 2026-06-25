import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { POST } from "@/app/api/anamnese/route";
import { createValidAnamnesePayload } from "./fixtures";

const createRequest = (body: unknown) =>
  new Request("http://localhost/api/anamnese", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }) as any;

describe("POST /api/anamnese", () => {
  const originalWebhook = process.env.N8N_WEBHOOK_URL;
  const originalDeliveryMode = process.env.ANAMNESE_DELIVERY_MODE;

  beforeEach(() => {
    process.env.N8N_WEBHOOK_URL = "https://n8n.example.test/webhook/anamnese";
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

  it("accepts a valid German submission and sends multipart data", async () => {
    const response = await POST(createRequest(createValidAnamnesePayload()));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(fetch).toHaveBeenCalledWith(
      "https://n8n.example.test/webhook/anamnese",
      expect.objectContaining({ method: "POST", body: expect.any(FormData) })
    );

    const sentFormData = (vi.mocked(fetch).mock.calls[0][1] as RequestInit).body as FormData;
    expect(sentFormData.get("patientName")).toBe("Max Mustermann");
    expect(sentFormData.get("patientEmail")).toBe("max@example.com");
    expect(JSON.parse(sentFormData.get("metadata") as string).locale).toBe("de");
    expect(sentFormData.get("file")).toBeInstanceOf(Blob);
  });

  it("accepts a valid English submission", async () => {
    const response = await POST(createRequest(createValidAnamnesePayload({ locale: "en" })));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.message).toBe("Medical history form sent successfully");
    const sentFormData = (vi.mocked(fetch).mock.calls[0][1] as RequestInit).body as FormData;
    expect(JSON.parse(sentFormData.get("metadata") as string).locale).toBe("en");
  });

  it("rejects missing consent and signature", async () => {
    const payload = createValidAnamnesePayload({
      consent: { accepted: false, textVersion: "", acceptedAt: "" },
      signature: "",
    });

    const response = await POST(createRequest(payload));

    expect(response.status).toBe(500);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("returns a server error when webhook config is missing", async () => {
    delete process.env.N8N_WEBHOOK_URL;

    const response = await POST(createRequest(createValidAnamnesePayload()));

    expect(response.status).toBe(500);
    expect(fetch).not.toHaveBeenCalled();
  });

  it("returns a localized server error for English submissions", async () => {
    delete process.env.N8N_WEBHOOK_URL;

    const response = await POST(createRequest(createValidAnamnesePayload({ locale: "en" })));
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.message).toBe("An error occurred. Please try again later.");
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

    const response = await POST(createRequest(createValidAnamnesePayload()));

    expect(response.status).toBe(500);
  });

  it("falls back safely for malformed signature image data", async () => {
    const response = await POST(createRequest(createValidAnamnesePayload({ signature: "not-a-data-url" })));

    expect(response.status).toBe(200);
    const sentFormData = (vi.mocked(fetch).mock.calls[0][1] as RequestInit).body as FormData;
    expect(sentFormData.get("signatureImageDataUrl")).toBe("not-a-data-url");
  });

  it("allows local mock delivery without calling the webhook", async () => {
    delete process.env.ANAMNESE_DELIVERY_MODE;

    const response = await POST(createRequest(createValidAnamnesePayload()));
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(body.message).toBe("Anamnesebogen lokal validiert");
    expect(fetch).not.toHaveBeenCalled();
  });
});
