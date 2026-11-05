# Praxis Jona SEO recheck

Date: 2026-10-15. Production crawl captured at 06:07:34 CEST (2026-10-15T04:07:34Z).

This report supersedes the action status in the [earlier full-site audit](./2026-10-15-praxis-jona-full-site-seo-audit.md). The earlier evidence remains a historical snapshot.

## Result

The completed copy corrections are verified on the deployed preview. They must not be presented as unfinished implementation work. Production still serves the earlier copy at the checked URLs.

The production technical foundation still passes. All 188 sitemap URLs return 200 and pass the checked canonical, language, hreflang, metadata, H1, and indexing-directive rules. All 54 priority server/desktop/mobile snapshots pass. Eleven additional mobile samples render without audit errors.

## Rechecked findings

| Finding | Current production evidence | Corrected status and next action |
|---|---|---|
| SEO-01: iron-page author/reviewer | The German and English rendered main content still lacks visible attribution to Jonida Gjolli. | **Open on production.** Add the verified German author and medical reviewer with the canonical profile link. Confirm any English review attribution. Leave dates unset. Preview attribution was not re-audited in this run. |
| SEO-02: internal SEO note | Still appears on all seven German Microneedling URLs. | **Fixed in deployed preview; production release pending.** All seven preview HTML responses return 200 and omit the note. No further implementation is required for this removal. |
| SEO-03: internal-link islands | The same 12 sitemap URLs remain unreachable from the homepage anchor graph. | **Open on production.** Confirm which pages should remain active, then add relevant links or prepare justified retirement changes. Preview link architecture was not re-audited. |
| SEO-04: treatment-template overlap | The same heuristic finds 107 same-language URL pairs above 0.82 shingle similarity. | **Open for content review.** Similarity is not proof of cannibalisation or a Google penalty. Preview treatment differentiation was not re-audited. |
| SEO-05: overlapping legacy/new intent | The ultrasound, check-up, and PRP-hair route pairs still return 200 and self-canonicalise. | **Open for intent assessment.** Use query evidence before deciding on redirects or consolidation. No new Google query data was collected. |
| SEO-06: sitemap source mapping | The broad `/en/services` mapping still points to `longevity-source-en.md`, including inline-copy routes. | **Open in the checked source.** Correct mappings and verify the generated dates. Preview sitemap generation was not tested. |

## Completed preview corrections

Preview base: https://praxis-jona-website-9nlx57shu-perjans-projects.vercel.app

The following are fresh checks of the deployed preview's HTML, not assumptions from the local source. All 18 distinct URLs return HTTP 200. The checks search extracted page text and descriptions for the specific previous wording. They do not constitute a full preview SEO crawl or clinical approval.

| Correction | Preview URLs checked | Result |
|---|---:|---|
| Internal SEO note removed | 7 | Verified |
| Patient jokes removed | 5 | Verified |
| Care guarantee removed | 1 | Verified |
| Broad private screening claims replaced | 2 | Verified |
| Flagged app superlatives and health promises removed | 2 | Verified |
| Literal prevention translation corrected | 1 | Verified |

Representative direct links:

- [Microneedling](https://praxis-jona-website-9nlx57shu-perjans-projects.vercel.app/aesthetik/microneedling)
- [Check-up](https://praxis-jona-website-9nlx57shu-perjans-projects.vercel.app/hausaerztliche-leistungen/gesundheitsuntersuchung-check-up)
- [Private check-up](https://praxis-jona-website-9nlx57shu-perjans-projects.vercel.app/leistungen/private-check-up)
- [Apps](https://praxis-jona-website-9nlx57shu-perjans-projects.vercel.app/apps)
- [English prevention](https://praxis-jona-website-9nlx57shu-perjans-projects.vercel.app/en/prevention)

The production Microneedling overview still contains the editing note. The production check-up page still contains the patient joke. The production private check-up page still contains the earlier cancer-screening wording. This confirms an environment difference; it does not establish why production has not changed.

## Production technical revalidation

- 188 sitemap URLs fetched successfully; eight additional HTML-linked targets return 200.
- One matching self-canonical, expected HTML language, one H1, title, and description on every sitemap URL.
- No `noindex` or `none` in the checked sitemap page meta or HTTP directives.
- All declared hreflang targets return 200, match their canonicals, and provide the expected self/return links.
- No title or description changes compared with the earlier coverage CSV. This comparison covers those two fields, not every byte of page content.
- The existing iron/PRP tool reports zero issues across 54 server/desktop/mobile snapshots.
- Eleven further production mobile snapshots complete without errors. Iron-page author attribution remains absent in the rendered main content.
- JSON-LD is inspected after browser rendering. No missing-schema claim is based only on stripped text.

Fresh page evidence: [recheck coverage CSV](./2026-10-15-praxis-jona-seo-recheck-coverage.csv).

### Isolated page pairs

The graph result remains unchanged. Each URL's incoming link in the crawled sitemap-page graph comes from its opposite-language counterpart. All remain discoverable in the sitemap. External backlinks and button-driven navigation were not measured.

- https://praxisjona.de/apps
- https://praxisjona.de/jobs/mfa-mwd-berlin-mitte
- https://praxisjona.de/leistungen/ernaehrungsmedizin/pakete/bronze
- https://praxisjona.de/leistungen/ernaehrungsmedizin/pakete/silber
- https://praxisjona.de/leistungen/ernaehrungsmedizin/pakete/gold
- https://praxisjona.de/leistungen/ultraschalluntersuchung
- https://praxisjona.de/en/apps
- https://praxisjona.de/en/jobs/medical-assistant-berlin-mitte
- https://praxisjona.de/en/services/nutritional-medicine/packages/bronze
- https://praxisjona.de/en/services/nutritional-medicine/packages/gold
- https://praxisjona.de/en/services/nutritional-medicine/packages/silver
- https://praxisjona.de/en/services/ultrasound-examination

### Sitemap-date observations

Equal timestamps alone do not establish an error. The source-mapping mismatch remains the actionable finding.

- `https://praxisjona.de/en/services/iron-infusion-costs`: `2026-09-23T18:57:57+02:00`
- `https://praxisjona.de/en/services/public-insurance-check-up`: `2026-09-23T18:57:57+02:00`
- `https://praxisjona.de/en/services/private-insurance-check-up`: `2026-09-23T18:57:57+02:00`

## What remains unverified

- Current Google-selected canonicals, full Google index coverage, and ranking movement were not re-queried. The September 30 indexed-version findings remain historical.
- No new Search Console or Umami collection occurred. No current traffic or conversion claim is made.
- Field Core Web Vitals remain unmeasured. The initial audit's PageSpeed API requests returned 429. They were not retried in this recheck.
- This run does not substitute for clinical review of the changed medical wording.

## Revised next steps

1. Review the completed preview changes for production publication. Do not reimplement the note and copy removals.
2. Add the verified iron-page attribution. Do not invent a medical-review date.
3. Decide the purpose of the isolated pages and overlapping legacy routes before changing links or redirects.
4. Review treatment differentiation using current query evidence at the next measurement checkpoint.
5. Correct the sitemap source mappings and verify their behaviour.

No application code, deployment, redirect, indexing setting, or medical-review date changed in this rerun. Only the audit records and index were updated.
