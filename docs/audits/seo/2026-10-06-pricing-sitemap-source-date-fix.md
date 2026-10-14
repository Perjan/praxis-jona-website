# Aesthetic pricing sitemap source dates

Date: 2026-10-06
Status: preview verified; [PR #18](https://github.com/Perjan/praxis-jona-website/pull/18) awaits review
Scope: `/aesthetik/preise` and `/en/aesthetics/prices`

## Production finding

Read-only requests to `https://praxisjona.de/sitemap-0.xml` returned HTTP 200.
The German pricing entry had `lastmod` `2026-09-17T08:48:01+02:00`.
The English pricing entry had `lastmod` `2026-09-17T06:39:38+02:00`.
The German pricing title, H1 and description changed through PR #17 on October 5.
Both routes use `app/components/pricing/pricingData.ts` for their page configuration.
The sitemap instead selected the broad aesthetic markdown or renderer source.

## Local fix and checks

- Add exact rules for both pricing routes before the broad aesthetic prefix rules.
- Use the existing shared pricing data file as their source.
- Keep the existing Git-date cache and missing-history omission behavior.
- Keep sibling aesthetic routes on their existing sources.
- Leave all page text, prices, metadata, canonicals and booking controls unchanged.

Eight regression tests use fixed dates and mocked filesystem/Git dependencies.
Five tests failed before implementation. All eight pass after implementation.
The full test command passes: 20 offline SEO validator tests and 159 Vitest tests.
The real local transform returns `2026-10-05T07:54:36+02:00` for both routes.
That value matches the pricing source's latest Git commit date.
No analytics collection, CTA click or recrawl submission ran during these checks.

## Search basis and limits

Google uses `lastmod` when it remains consistently accurate.
It should describe a significant page update, not every deployment.
See [Google's sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
This fix corrects source ownership. It does not guarantee recrawling, indexing or higher rankings.

The shared pricing file serves both languages and several price sections.
Its file-level date is coarse: a German-only edit also changes the English route's source date.
This follows the existing file-level model; it is not a per-language review date.
Do not describe it as medical-review freshness.
Broader pricing routes and template dependencies remain outside this bounded fix.

## Review and rollback

The [preview sitemap](https://praxis-jona-website-git-codex-pricing-s-e1de39-perjans-projects.vercel.app/sitemap-0.xml) returns HTTP 200.
Both pricing entries use `2026-10-05T07:54:36+02:00`.
The PRP hub keeps its production date, `2026-09-17T08:48:01+02:00`.
Both preview pricing pages match production titles, descriptions, canonicals and footer booking markers.
The Vercel deployment passed. These checks did not trigger a CTA event.

Check both pricing entries in the preview sitemap after deployment.
Check the two public pricing pages for unchanged titles, descriptions, canonicals and CTA markers.
Compare a sibling aesthetic entry before and after the fix.
No new event or property is expected.
Keep the active PRP and iron snippet observation windows unchanged.
After merge, check the production sitemap once. Revert the exact source rules if a route gets an unrelated date.
