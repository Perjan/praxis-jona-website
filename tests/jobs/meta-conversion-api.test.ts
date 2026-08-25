import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { POST } from "@/app/api/meta-conversion/route";
import { physicianJobByLocale } from "@/app/data/jobs";

const eventId = "0d507ffa-5f9a-4b12-991b-427a1d24fe8b";

function createRequest(body: unknown) {
    return new Request("https://praxisjona.de/api/meta-conversion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "User-Agent": "Test Browser",
            "X-Forwarded-For": "203.0.113.42, 10.0.0.1",
        },
        body: JSON.stringify(body),
    }) as any;
}

describe("POST /api/meta-conversion", () => {
    beforeEach(() => {
        process.env.META_CONVERSIONS_ACCESS_TOKEN = "test-token";
        process.env.META_CONVERSIONS_TEST_EVENT_CODE = "TEST123";
        vi.useFakeTimers();
        vi.setSystemTime(new Date("2026-08-25T12:00:00Z"));
        vi.stubGlobal(
            "fetch",
            vi.fn().mockResolvedValue({
                ok: true,
                status: 200,
                json: vi.fn().mockResolvedValue({ events_received: 1 }),
            })
        );
    });

    afterEach(() => {
        delete process.env.META_CONVERSIONS_ACCESS_TOKEN;
        delete process.env.META_CONVERSIONS_TEST_EVENT_CODE;
        vi.useRealTimers();
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    it("sends a server-side Lead event for the known job", async () => {
        const response = await POST(
            createRequest({
                eventId,
                jobId: physicianJobByLocale.de.id,
                fbc: "fb.1.1787659200000.MetaClickId123",
            })
        );

        expect(response.status).toBe(204);
        expect(fetch).toHaveBeenCalledOnce();

        const [url, init] = vi.mocked(fetch).mock.calls[0];
        expect(url).toBe(
            "https://graph.facebook.com/v26.0/2115299572705878/events?access_token=test-token"
        );
        expect(init).toMatchObject({
            method: "POST",
            headers: { "Content-Type": "application/json" },
        });

        const payload = JSON.parse(init?.body as string);
        expect(payload.test_event_code).toBe("TEST123");
        expect(payload.data).toEqual([
            expect.objectContaining({
                event_name: "Lead",
                event_time: 1787659200,
                event_id: eventId,
                event_source_url: `https://praxisjona.de${physicianJobByLocale.de.url}`,
                action_source: "website",
                user_data: {
                    client_ip_address: "203.0.113.42",
                    client_user_agent: "Test Browser",
                    fbc: "fb.1.1787659200000.MetaClickId123",
                },
                custom_data: {
                    content_category: "Jobs",
                    content_name: physicianJobByLocale.de.title,
                },
            }),
        ]);
    });

    it("rejects unknown jobs and malformed event identifiers", async () => {
        for (const body of [
            { eventId, jobId: "unknown-job", fbc: "fb.1.1787659200000.MetaClickId123" },
            {
                eventId: "not-a-uuid",
                jobId: physicianJobByLocale.de.id,
                fbc: "fb.1.1787659200000.MetaClickId123",
            },
        ]) {
            expect((await POST(createRequest(body))).status).toBe(400);
        }

        expect(fetch).not.toHaveBeenCalled();
    });

    it("does not accept an invalid Meta click identifier", async () => {
        const response = await POST(
            createRequest({
                eventId,
                jobId: physicianJobByLocale.de.id,
                fbc: "not-valid",
            })
        );

        expect(response.status).toBe(400);
        expect(fetch).not.toHaveBeenCalled();
    });

    it("reports missing server configuration without exposing a token", async () => {
        delete process.env.META_CONVERSIONS_ACCESS_TOKEN;

        const response = await POST(
            createRequest({
                eventId,
                jobId: physicianJobByLocale.de.id,
                fbc: "fb.1.1787659200000.MetaClickId123",
            })
        );

        expect(response.status).toBe(503);
        expect(await response.json()).toEqual({ error: "Meta Conversions API is not configured" });
        expect(fetch).not.toHaveBeenCalled();
    });

    it("returns a gateway error when Meta rejects the event", async () => {
        vi.mocked(fetch).mockResolvedValueOnce({ ok: false, status: 400 } as Response);

        const response = await POST(
            createRequest({
                eventId,
                jobId: physicianJobByLocale.de.id,
                fbc: "fb.1.1787659200000.MetaClickId123",
            })
        );

        expect(response.status).toBe(502);
        expect(await response.json()).toEqual({ error: "Meta rejected the conversion event" });
    });

    it("returns a gateway error when Meta cannot be reached", async () => {
        vi.mocked(fetch).mockRejectedValueOnce(new Error("network unavailable"));

        const response = await POST(
            createRequest({
                eventId,
                jobId: physicianJobByLocale.de.id,
                fbc: "fb.1.1787659200000.MetaClickId123",
            })
        );

        expect(response.status).toBe(502);
        expect(await response.json()).toEqual({ error: "Meta rejected the conversion event" });
    });
});
