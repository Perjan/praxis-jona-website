# Eiseninfusion-Kosten Page SEO Audit

Date: 2026-09-08

Production target: `https://praxisjona.de/leistungen/eiseninfusion-kosten`

Method: rendered Chromium inspection, HTTP/header checks, robots and sitemap verification, repository inspection, Google Search Console and aggregate Umami evidence

## Executive summary

The page is indexable, self-canonical, present in the sitemap, reciprocally linked to its English alternate, and already earns meaningful high-intent visibility. The main near-term opportunity is not another competing URL: it is improving the existing result's click appeal for cost intent. The approved snippet experiment is therefore justified by first-party Search Console evidence and Google's own title/snippet guidance.

One material structured-data defect was also confirmed in the rendered production page: the FAQ schema marked up 13 questions, including non-FAQ section headings, and reused the hero sentence as every answer. PR #9 corrects it so the schema contains only the five visible FAQ items and their actual visible answers.

No clinical claims were rewritten in this pass. Trust/editorial improvements remain gated on clinician review.

## Evidence baseline

Search Console, 2026-08-10 through 2026-09-06:

| Scope | Clicks | Impressions | CTR | Average position |
|---|---:|---:|---:|---:|
| Page | 80 | 5,238 | 1.53% | 8.59 |
| `eiseninfusion kosten` | 14 | 2,461 | 0.57% | 7.03 |
| `eisen infusion kosten` | 2 | 359 | 0.56% | 8.92 |
| `was kostet eine eiseninfusion` | 0 | 208 | 0% | 6.13 |
| `eiseninfusion berlin kosten` | 14 | 72 | 19.44% | 1.88 |

Aggregate Umami for the aligned 28-day window: 313 pageviews, 233 visitors, 7 first booking-CTA clicks and 7 unique converters, or 2.24% per pageview and 3.00% per visitor. This is on-site conversion evidence, not Google search CTR.

## Production findings

### P0 — FAQ structured data did not represent the visible FAQ

- **Issue:** Rendered JSON-LD contained 13 `Question` items and assigned the same hero description to every `acceptedAnswer`. Eight ordinary content headings were also treated as FAQs.
- **Impact:** The markup was syntactically valid but materially inaccurate. Google states that structured data must be a true representation of visible page content and warns against irrelevant or misleading markup.
- **Evidence:** Rendered-browser extraction on 2026-09-08; for example, `Wie viele Infusionen sind notwendig?` incorrectly had `Eiseninfusion bei Eisenmangel – ärztlich geführt, ab 150,95 € nach GOÄ` as its answer.
- **Fix:** Implemented in PR #9. Parse only the visible FAQ section and serialize each visible answer, including list content, into its matching schema answer. Added a focused regression test.
- **Reference:** [Google's general structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies).

### P1 — High-impression cost intent has weak CTR

- **Issue:** The page ranks on the first page for several cost queries but earns only 0–0.57% CTR on the largest variants. The current description is mechanically truncated and spends much of its space repeating the opening copy.
- **Impact:** At 5,238 page impressions, even a bounded CTR improvement can produce qualified traffic without waiting for a new URL to rank.
- **Evidence:** Search Console table above. The location-plus-cost query already performs strongly at position 1.88, which supports preserving both location and price in the experiment.
- **Fix:** Approved and implemented in PR #9:
  - Rendered title: `Eiseninfusion Berlin: Kosten ab 150,95 € | Praxis Jona`
  - Description: `Eiseninfusion in Berlin-Mitte ab 150,95 € nach GOÄ. Erfahren Sie mehr über Diagnostik, ärztliche Prüfung, Ablauf und Terminbuchung bei Praxis Jona.`
- **Why this is defensible:** Google recommends concise, descriptive titles and says title links may use the title, H1, prominent text, and other page signals. Google also says descriptions should be page-specific and may consolidate relevant information such as price. Every term in this snippet is supported by visible page content.
- **Measurement:** Begin only after production deployment. Evaluate after 14 days or 500 page impressions, whichever is later. Target page CTR at least 1.8% and `eiseninfusion kosten` CTR at least 0.8%; revise or roll back if CTR declines while average position worsens by more than two positions. Google may generate a different title or snippet and may need days to weeks to recrawl/process the change.
- **References:** [Google title-link guidance](https://developers.google.com/search/docs/appearance/title-link) and [Google snippet guidance](https://developers.google.com/search/docs/appearance/snippet).

### P1 — Confirmed medical authorship is not yet visible on the service page

- **Issue:** The 718-word medical service page has no visible author/reviewer, review date, or cited clinical sources. Global metadata names authors, but visitors do not see an accountable clinical reviewer on this page.
- **Impact:** This is health/YMYL content. Google says its systems give more weight to signals aligned with strong E-E-A-T for health topics and strongly encourages accurate authorship information where readers expect it.
- **Evidence:** Rendered page and repository inspection on 2026-09-08.
- **Confirmed editorial fact:** Dr. med. Jonida Gjolli, owner of Praxis Jona and Fachärztin für Innere Medizin, wrote and medically reviewed this page. Her canonical German author profile is `/blog/authors/jonida-gjolli`.
- **Recommended fix:** Add a visible author/reviewer block linking to that profile after the actual last-review date is supplied. Add claim-adjacent references for indications, oral-versus-IV decision factors, monitoring, expected timing, and adverse effects. Correct the incomplete sentence ending `sowie die Aufklärung`. Do not manufacture freshness by changing dates without a substantive review.
- **Reference:** [Google's people-first content and E-E-A-T guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

### P2 — The page does not link readers to the existing evidence article

- **Issue:** The service page links to the generic infusion service and related services, but not to the existing physician-authored iron article. The article does link back to the service page.
- **Impact:** Readers seeking evidence, risks, and decision context must search again or leave the service funnel. A reciprocal contextual link would improve usefulness and clarify the topical relationship without creating a competing URL.
- **Evidence:** Rendered internal-link inventory and repository search.
- **Recommended fix:** After clinical review of the article's current claims, add one descriptive contextual link such as `Eiseninfusion bei Frauen: Nutzen, Ablauf und Evidenz` near the oral-versus-IV or FAQ section.
- **Reference:** Google asks whether content is substantial, clearly sourced, and leaves readers feeling they learned enough to achieve their goal in its [people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

### P2 — Performance evidence is currently unavailable

- **Issue:** The PageSpeed Insights API quota was exhausted during this audit, so no lab or field Core Web Vitals result was available. The rendered DOM contains the same priority hero image twice for responsive layouts; this is a test candidate, not proof of a performance problem.
- **Impact:** Core Web Vitals are used by Google's ranking systems, but relevance remains primary and no performance claim should be made without measurements.
- **Recommended fix:** Re-run mobile PageSpeed/CrUX when quota is available. If LCP is poor, verify network requests before changing the responsive hero implementation.
- **Reference:** [Google's Core Web Vitals guidance](https://developers.google.com/search/docs/appearance/core-web-vitals).

## Checks that passed in production

- HTTP 200 over HTTPS; HTTP redirects once to HTTPS; HSTS present.
- `robots.txt` allows crawling and names the sitemap.
- Page is in `sitemap-0.xml`; current impressions confirm Google has indexed and served it.
- One visible H1; German page declares `lang="de"`.
- Self-referencing canonical is correct.
- `de`, `en`, and `x-default` alternates are present. The English URL returns the German link, satisfying Google's return-link requirement.
- Primary content image has a descriptive alt attribute and explicit dimensions.
- Breadcrumb and `MedicalProcedure` JSON-LD are present.

References: [Google localized-version guidance](https://developers.google.com/search/docs/specialty/international/localized-versions) and [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

## PR/local findings

- Focused test was written first and failed on the old title/schema behavior.
- The focused test now passes with the approved metadata and FAQ answer mapping; the full suite passes 162/162, lint is clean, and the production build succeeds.
- The visible H1 and clinical body remain unchanged; the layout template appends `| Praxis Jona` once to the page-level title.
- Verified preview: `https://praxis-jona-website-git-codex-umami-v3-bd4414-perjans-projects.vercel.app/leistungen/eiseninfusion-kosten`.
- The rendered preview has the exact approved title and description, production canonical and reciprocal alternates, one H1, and exactly five FAQ questions with distinct answers matching the visible copy.
- Production measurement does not begin from the preview.

## Prioritized next actions

1. Merge/deploy the snippet and FAQ-schema correction only after preview verification.
2. Record the production implementation timestamp and request recrawl in Search Console.
3. Hold the title/description constant for at least 14 days or 500 page impressions.
4. Have the clinician review the medical copy, evidence article, sources, authorship block, and update date as one trust pass.
5. Add the contextual article link after that review.
6. Re-run mobile Core Web Vitals when field or lab data is available.
