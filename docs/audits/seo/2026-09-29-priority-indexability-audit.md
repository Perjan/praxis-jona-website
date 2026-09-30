# Priority Iron/PRP Indexability Audit

Date: 2026-09-29; indexed-version and live Google follow-up: 2026-09-30. Production: `https://praxisjona.de`.
Scope: nine German/English page pairs (18 URLs), server HTML plus rendered Chromium at 1440×900 and 390×844. Final capture: 07:06:45 UTC.

## Executive verdict

No blocking technical finding in the checked scope: all 18 URLs return HTTP 200 without redirects, self-canonicalize, appear in the 188-URL production sitemap, and declare reciprocal German/English alternates. All 54 server/desktop/mobile snapshots passed the automated checks. No public page, medical claim, booking flow or iron snippet changed.

The September 29 crawl established **technical eligibility**, not Google indexing. The September 30 follow-up confirmed the indexed status and selected canonical for all 18 URLs in Search Console. Neither result proves ranking improvement, future index retention or guaranteed rich-result display. Full structured-data property validation on every page and field Core Web Vitals remain outside this check.

## Production evidence

Each row covers the German URL and its English alternate, both inspected directly.

| German page | English page | Result |
|---|---|---|
| [Iron costs](https://praxisjona.de/leistungen/eiseninfusion-kosten) | [Iron costs EN](https://praxisjona.de/en/services/iron-infusion-costs) | Pass |
| [Infusion hub](https://praxisjona.de/leistungen/infusionstherapie) | [Infusion hub EN](https://praxisjona.de/en/services/infusion-therapy) | Pass |
| [PRP hair](https://praxisjona.de/leistungen/prp-haarausfall) | [PRP hair EN](https://praxisjona.de/en/services/prp-hair-loss) | Pass |
| [Hair-loss hub](https://praxisjona.de/leistungen/haarausfall-berlin-mitte) | [Hair-loss hub EN](https://praxisjona.de/en/services/hair-loss-berlin-mitte) | Pass |
| [PRP hub](https://praxisjona.de/aesthetik/prp-behandlung) | [PRP hub EN](https://praxisjona.de/en/aesthetics/prp-treatment) | Pass |
| [PRP face](https://praxisjona.de/aesthetik/prp-behandlung/prp-gesicht) | [PRP face EN](https://praxisjona.de/en/aesthetics/prp-treatment/prp-face) | Pass |
| [PRP eyes](https://praxisjona.de/aesthetik/prp-behandlung/prp-augenregion-bei-dunklen-augenringen) | [PRP eyes EN](https://praxisjona.de/en/aesthetics/prp-treatment/prp-under-eye-area-dark-circles) | Pass |
| [Aesthetic prices](https://praxisjona.de/aesthetik/preise) | [Aesthetic prices EN](https://praxisjona.de/en/aesthetics/prices) | Pass |
| [Women/iron article](https://praxisjona.de/blog/eiseninfusion-frauen-eisenmangel-vorteile) | [Women/iron article EN](https://praxisjona.de/en/blog/iron-infusion-women-iron-deficiency-benefits) | Pass |

Checked:

- HTTP status, absence of redirects, exactly one matching canonical, and sitemap membership.
- No `noindex`/`none` in page robots, Googlebot meta directives or X-Robots-Tag.
- Correct server-rendered and hydrated HTML language, self-hreflang and return links; each declared target was included in the audited URL set and checked for HTTP/canonical agreement.
- One H1 and present title/description in all three snapshots. No arbitrary character-count ranking rule applied.
- JSON-LD parses, rendered service pages include `BreadcrumbList`, and both blog versions include `BlogPosting`.
- FAQ question/answer text matches page DOM content with scripts excluded. This checks text correspondence, not medical accuracy, complete schema semantics or FAQ rich-result eligibility. Expandable content is included; CSS visibility was not tested for every FAQ.
- No horizontal document overflow at either viewport. Manual mobile screenshots of the iron-cost and PRP hubs show readable headers, copy and loaded hero images; the iron booking CTA is visible. No CTA was clicked.

Manual robots review: [robots.txt](https://praxisjona.de/robots.txt) allows `/` in the wildcard group, blocks only the documented patient-intake paths, and points to the working [sitemap index](https://praxisjona.de/sitemap.xml). None of the checked public routes matches those disallows. The current tool does not implement a general robots rule engine.

The blog pair has no `x-default`; this is not a blocking error. Google recommends considering a fallback but requires self/reciprocal references for declared language versions. Existing HTML hreflang is sufficient; adding a second sitemap-based implementation is unnecessary. [Google localized-version guidance](https://developers.google.com/search/docs/specialty/international/localized-versions).

Self-canonicals and matching sitemap URLs align signals; they do not force Google to select that canonical. [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls). Sitemap discovery likewise does not guarantee indexing. [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

### September 30 Google indexed-version and live-test follow-up

Read-only Search Console [URL Inspection API](https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect) requests were made for all 18 URLs in the verified `sc-domain:praxisjona.de` property. The API uses HTTP POST for an inspection query but does not submit a live indexing request. All 18 returned `PASS`, “Submitted and indexed,” `ALLOWED` robots, `INDEXING_ALLOWED`, and a Google-selected canonical exactly matching the declared self-canonical. Crawl timestamps vary by page (August 22–September 25); the API reports the indexed version, **not a live URL test**. Some responses omitted known-sitemap entries despite the “Submitted and indexed” coverage state and production sitemap membership; do not interpret an empty `sitemap[]` in this response as absence from the live sitemap. No raw response or credential was committed.

Google's live [Rich Results Test](https://search.google.com/test/rich-results) was then run with its smartphone user agent on representative templates:

| Live URL | Google result | Detail |
|---|---|---|
| [Iron costs](https://praxisjona.de/leistungen/eiseninfusion-kosten) | 1 valid item | Breadcrumbs |
| [PRP hub](https://praxisjona.de/aesthetik/prp-behandlung) | 1 valid item | Breadcrumbs |
| [Women/iron article](https://praxisjona.de/blog/eiseninfusion-frauen-eisenmangel-vorteile) | 1 valid item | Articles |
| [Aesthetic prices](https://praxisjona.de/aesthetik/preise) | 5 valid items | Breadcrumbs (1), Local businesses (2), Organization (2) |

The pricing page's Physician item has two **non-critical, optional** warnings: missing `priceRange` and `telephone`. The clinic/organization item already declares its real public telephone and a price-range value. Do not duplicate those fields on the Physician entity solely to quiet a validator; first assess entity semantics and source-of-truth reuse in a separate, bounded change. No blocking structured-data error was seen in these four live tests. `FAQPage` and `MedicalProcedure` appear in rendered JSON-LD but are not claimed here as Google-rich-result features. A valid test does not guarantee appearance in Search. [Google structured-data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

## Local implementation and regression prevention

Added `scripts/seo/priority-indexability.mjs` with one priority-pair inventory and a reusable snapshot validator. The command reads production only, renders pages without interaction, blocks analytics GETs before navigation and aborts all browser non-GET requests. No Umami API or Doctolib behavior is accessed; the audit cannot create booking events.

```sh
npm run seo:test-priority
npm run seo:audit-priority
```

The live audit prints page-level metadata and findings, exits nonzero for failures, and requires the installed Playwright Chromium browser. It is deliberately not part of a daily measurement loop or a production build. Offline regression tests are included in `npm test`; no live network/browser is used by those tests.

Verification: 20 new Node tests pass, including noindex, wrong canonicals, redirects, missing sitemap entries, language/return-link mistakes, invalid JSON, FAQ mismatches, mobile overflow and telemetry blocking. Existing eight SEO tests pass; the full `npm test` passes all 20 Node tests plus 149 Vitest tests. A parser-specific test prevents false FAQ mismatches caused by adjacent paragraphs and prevents the JSON-LD itself from satisfying the content check.

Generated snapshots/screenshots were retained locally in `/tmp`, not committed. Main-worktree user changes were untouched. No application build required: only audit tooling, tests and internal documentation changed.

## Prioritized next steps

1. Keep the iron snippet unchanged through the declared 28-day window; use the September 28 baseline, not fresh daily collections.
2. Keep URL Inspection and live Rich Results Test as separate checks: the former sees Google's indexed copy, while the latter fetches the current page. Repeat only after meaningful route/schema changes or a suspected issue, not daily. If a future structured-data change affects another template, test that representative template directly.
3. Treat the two optional Physician warnings as low priority. Investigate the source of truth only if changing that entity for another reason; do not claim they suppress indexing or current rich-result eligibility.
4. Continue the clinician-review handoff for the iron-effect article. This audit adds no new clinical approval requirement and does not substitute for the outstanding claim review.

KPI hypothesis: early detection prevents accidental loss of crawl/index eligibility; no immediate traffic uplift is claimed. Measurement: rerun after route/metadata/template changes or a suspected incident, and keep business KPIs on the Monday cadence. Rollback: remove/revert the audit tooling if it produces misleading findings or telemetry leakage; no public-page rollback is needed.
