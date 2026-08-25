import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { JobApplicationLink } from "@/app/components/JobApplicationLink";
import { physicianJobByLocale } from "@/app/data/jobs";

describe("JobApplicationLink", () => {
    beforeEach(() => {
        window.history.replaceState(
            {},
            "",
            `${physicianJobByLocale.de.url}?fbclid=MetaClickId123&utm_source=facebook`
        );
        vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true }));
        vi.spyOn(globalThis.crypto, "randomUUID").mockReturnValue(
            "0d507ffa-5f9a-4b12-991b-427a1d24fe8b"
        );
        vi.spyOn(Date, "now").mockReturnValue(1787659200000);
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    it("keeps the mail link and sends a non-blocking conversion request on click", () => {
        render(
            <JobApplicationLink
                job={physicianJobByLocale.de}
                className="apply-link"
            />
        );

        const link = screen.getByRole("link", { name: physicianJobByLocale.de.applyCta });
        expect(link).toHaveAttribute("href", expect.stringContaining("mailto:"));
        link.addEventListener("click", (event) => event.preventDefault());

        fireEvent.click(link);

        expect(fetch).toHaveBeenCalledWith("/api/meta-conversion", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                eventId: "0d507ffa-5f9a-4b12-991b-427a1d24fe8b",
                jobId: physicianJobByLocale.de.id,
                fbc: "fb.1.1787659200000.MetaClickId123",
            }),
            keepalive: true,
        });
    });

    it("does not send organic applicants to Meta", () => {
        window.history.replaceState({}, "", physicianJobByLocale.en.url);
        render(<JobApplicationLink job={physicianJobByLocale.en} className="apply-link" />);

        const link = screen.getByRole("link", { name: physicianJobByLocale.en.applyCta });
        link.addEventListener("click", (event) => event.preventDefault());
        fireEvent.click(link);

        expect(fetch).not.toHaveBeenCalled();
    });
});
