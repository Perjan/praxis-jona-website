import { describe, expect, it } from "vitest";

import {
    buildJobPostingStructuredData,
    buildJobsListingStructuredData,
    getVisibleJobListings,
    jobListingsByLocale,
    physicianJobByLocale,
} from "@/app/data/jobs";
import { localizedPathForLocale } from "@/app/lib/i18n-routing";

describe("physician job opening", () => {
    it("maps the German and English job routes both ways", () => {
        expect(localizedPathForLocale(physicianJobByLocale.de.url, "en")).toBe(physicianJobByLocale.en.url);
        expect(localizedPathForLocale(physicianJobByLocale.en.url, "de")).toBe(physicianJobByLocale.de.url);
    });

    it("builds Google JobPosting structured data from the shared job content", () => {
        const structuredData = buildJobPostingStructuredData(physicianJobByLocale.de);

        expect(structuredData["@type"]).toBe("JobPosting");
        expect(structuredData.title).toBe("Facharzt für Allgemeinmedizin oder Innere Medizin (m/w/d)");
        expect(structuredData.datePosted).toBe("2026-07-04");
        expect(structuredData.employmentType).toEqual(["FULL_TIME"]);
        expect(structuredData.url).toContain(physicianJobByLocale.de.url);
        expect(structuredData.description).toContain("38,5");
        expect(structuredData.qualifications).toContain("Abdomen-Sonographie");
    });

    it("keeps the MFA listing in code but hides it from the public career indexes and schema", () => {
        expect(jobListingsByLocale.de.some((job) => job.href === "/jobs/mfa-mwd-berlin-mitte")).toBe(true);
        expect(jobListingsByLocale.en.some((job) => job.href === "/en/jobs/medical-assistant-berlin-mitte")).toBe(true);

        const visibleGermanJobs = getVisibleJobListings("de");
        const visibleEnglishJobs = getVisibleJobListings("en");

        expect(jobListingsByLocale.de[0].href).toBe(physicianJobByLocale.de.url);
        expect(jobListingsByLocale.en[0].href).toBe(physicianJobByLocale.en.url);
        expect(visibleGermanJobs.map((job) => job.href)).toEqual([physicianJobByLocale.de.url]);
        expect(visibleEnglishJobs.map((job) => job.href)).toEqual([physicianJobByLocale.en.url]);

        const germanListingSchema = buildJobsListingStructuredData("de");
        const englishListingSchema = buildJobsListingStructuredData("en");

        expect(germanListingSchema.mainEntity.itemListElement[0].name).toBe(physicianJobByLocale.de.title);
        expect(englishListingSchema.mainEntity.itemListElement[0].name).toBe(physicianJobByLocale.en.title);
        expect(germanListingSchema.mainEntity.itemListElement).toHaveLength(1);
        expect(englishListingSchema.mainEntity.itemListElement).toHaveLength(1);
    });
});
