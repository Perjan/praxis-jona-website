# Approved articles and free tools: SEO/GEO implementation

Date: 2026-11-02. Status: prepared for PR #37; not deployed to production.

## Access and scope

OpenSEO discovery returned no matching plugin. No OpenSEO tools were exposed in this chat.
The authenticated repository GSC workflow supplied real search data for `sc-domain:praxisjona.de`.
`npm run growth:collect` also collected aggregate Umami statistics through its read-only HTTP API.
Credentials stayed in memory. No patient answers, result classifications or visitor records entered this research.

The new 34 articles and eight hub/check routes have no production search history.
Existing iron pages provide related evidence. Perimenopause has no returned query rows in this collection.
This absence does not establish zero demand. English recommendations use a much smaller evidence base.

## Production evidence

GSC web window: October 4–31, 2026. Previous window: September 6–October 3.
The detail response includes October 31. Umami uses the same dates, with November 1 as its exclusive end.
The separate aggregate-only [baseline](../../../data/gsc/baselines/2026-11-02-articles-tools.json) stores the selected GSC evidence.

### Search results

The property aggregate records 1,576 clicks and 49,937 impressions: 3.16% search CTR, average position 11.13.
The previous window records 1,495 clicks and 47,161 impressions: 3.17% search CTR, average position 11.37.
These figures do not measure the unlaunched content.

| Existing landing page | Language | Clicks | Impressions | Search CTR | Position |
| --- | --- | ---: | ---: | ---: | ---: |
| `/leistungen/eiseninfusion-kosten` | DE | 366 | 13,162 | 2.78% | 5.14 |
| `/en/services/iron-infusion-costs` | EN | 70 | 1,978 | 3.54% | 4.03 |
| `/blog/eiseninfusion-frauen-eisenmangel-vorteile` | DE | 50 | 6,743 | 0.74% | 10.29 |
| `/en/blog/iron-infusion-women-iron-deficiency-benefits` | EN | 0 | 259 | 0.00% | 12.04 |

These are direct `dimensions: ['page']` web aggregates, including queries omitted from query-level reports.
Language labels identify landing-page locales. They do not identify the visitor's language.

| Query-only aggregate | Clicks | Impressions | Search CTR | Position |
| --- | ---: | ---: | ---: | ---: |
| `ab wann eiseninfusion` | 2 | 145 | 1.38% | 6.36 |
| `eiseninfusion kosten` | 24 | 3,222 | 0.74% | 3.86 |
| `eiseninfusion berlin` | 111 | 783 | 14.18% | 2.46 |
| `iron infusion` | 4 | 230 | 1.74% | 5.91 |
| `iron infusion for women` | 0 | 51 | 0.00% | 32.78 |
| `iron infusion berlin` | 12 | 83 | 14.46% | 3.01 |

Do not sum page/query/detail impressions into property totals.
The detail export includes fragment URLs and omits anonymized queries.
For example, its German-page rows sum to 935 impressions for `ab wann eiseninfusion`.
The query-only aggregate records 145. Use the latter for the query baseline.
The dashboard's detail-derived web total of 724 clicks and 35,228 impressions is also not the complete property total.

Device segmentation of related iron/menopause query-visible landing rows shows mobile emphasis.
German routes record 198 mobile clicks across 10,732 impressions; desktop records 59 across 2,815.
English routes record nine mobile clicks across 466 impressions; desktop records five across 143.
These are diagnostic detail sums, including fragment rows. They are not deduplicated property or query totals.

### On-site activity

Umami records 8,273 pageviews, 3,047 visitors and 722 `booking-cta-click` events.
The booking CTA rate is 8.73% per pageview; 558 visitors generated a booking CTA event.
The German iron-cost page records 821 views and 141 booking events: 17.17% per pageview.
The German iron article records 82 views and no recorded booking events.
Its small sample supports investigation, not a zero-demand conclusion.
The English iron-cost page records 237 views. Its conversion rate is not supplied by the configured cluster report.
New articles and tools remain unmeasured until production launch.
These are on-site rates. They are not Google search CTR or completed Doctolib bookings.

## Changes prepared on the branch

- Add the existing `health` category to all 34 new articles. They can now appear in the blog's Health filter.
- Add specific bilingual tags for each article's subject. Keep the existing broad topic tags.
- Use shared tags for three relevant footer recommendations. Replace arbitrary chronological recommendations and exclude hidden articles.
- Localize footer labels and author-profile links. Use the existing article tags as the single recommendation source.
- Refine the new iron-infusion article's DE/EN SEO title and description around its existing indication and risk content.
- Keep the established service page as the cost/local owner. Preserve its active snippet.
- Add links from the established DE/EN iron articles to three new iron articles and the relevant free check.
- Add article language, canonical page identity and topic keywords to BlogPosting data.
- Put clinical reviewer attribution on the associated WebPage, where Schema.org defines `reviewedBy`.
- Omit inferred `dateModified` for posts with a medical reviewer. The publication date remains distinct from clinical review.
- Add WebPage and BreadcrumbList data to six checks, from the existing visible heading, description and hierarchy.

The clinical engines, medical prose and tool route hierarchy remain unchanged.
The added link labels describe existing articles. They add no medical treatment claim.

## Official documentation decisions

[Google AI features](https://developers.google.com/search/docs/appearance/ai-features) requires ordinary search eligibility and useful, discoverable text.
It does not require special AI files or schema. No percentage uplift from the skill is treated as a prediction.
[Google title guidance](https://developers.google.com/search/docs/appearance/title-link) supports concise, descriptive, distinct titles.
[Google link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) supports relevant crawlable anchors.
[Google Article guidance](https://developers.google.com/search/docs/appearance/structured-data/article) supports author identity and accurate article metadata.
[Schema.org WebPage](https://schema.org/WebPage) defines `reviewedBy`; no actual review date was supplied.
[Google breadcrumb guidance](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) supports the visible hub/check hierarchy.
No FAQ eligibility, software rich result, rating, medical review date or AI citation increase is claimed.
The existing crawler policy already allows search and AI crawlers on public routes. No crawler-policy change was needed.

## Verification and release limits

The production build passes and generates 298 pages. Local builds skip production recrawl submissions.
All 40 built article/check routes pass one-H1, canonical, language and relevant JSON-LD checks.
The six new tool SEO tests pass. All 18 focused free-tool tests pass.
Focused ESLint and build TypeScript checks pass.
The full suite records 242 passing Vitest tests and one existing failure.
The unrelated fixture in `tests/seo/clinic-treatment-copy.test.tsx` expects `20,11Euro`; the existing page uses `20,11 €`.
The supplied clinical node checks also pass. Clinical engines were not modified.
The previous implementation verified 12 Chromium/mobile-WebKit checks; this metadata increment does not rerun those interaction checks.
Live Rich Results Test validation remains a release check; local schema assertions do not replace Google's external validator.

## Observation contract

Hypothesis: relevant topic recommendations and established-page links improve discovery of the approved articles and checks.
The indication title should better describe the new article for related infusion questions.
Start observation only after production launch. Record the actual launch date before scheduling relative checkpoints.
At 7 days, inspect discovery and indexability. At 14 and 28 days, compare DE/EN query and landing-page results.
Use 500 page impressions before a directional title verdict, unless a technical fault needs immediate repair.
Track existing `booking-cta-click` with `destination`, `element`, `locale` and `placement` only.
Do not add answer, laboratory value, symptom, classification or result properties to analytics.
Treat fewer than 20 booking events as directional. No measurement can observe completed Doctolib bookings here.
Revise links or metadata if relevant clicks and booking starts both decline across a meaningful comparison window.
Do not attribute an outcome to these changes from one before/after comparison.
