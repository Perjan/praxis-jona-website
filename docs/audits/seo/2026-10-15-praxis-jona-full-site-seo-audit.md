# Praxis Jona full-site SEO audit

Status: See the [fresh production and deployed-preview recheck](./2026-10-15-praxis-jona-seo-recheck.md) for current action status. This report retains the earlier capture.

Date: 2026-10-15. Production: https://praxisjona.de. Full-site crawl captured at 05:53:40 CEST.

## Executive summary

The checked production pages have a sound crawl and metadata foundation. No blocking crawl or index-eligibility error appeared in this scope.

All 188 sitemap URLs return HTTP 200. Each has one self-canonical, one H1, a title, a description, and the expected HTML language. All declared German/English hreflang pairs pass the target and return-link checks. No sitemap page contains a meta or HTTP indexing block.

The priorities concern content quality and discovery:

1. Attribute the iron-cost page to its known author and medical reviewer.
2. Remove the internal SEO note still visible on seven production pages.
3. Resolve the purpose and internal links of six isolated German/English page pairs.
4. Differentiate closely overlapping treatment pages before adding more URLs.
5. Correct sitemap source mappings so future changes produce meaningful last-modified dates.

This establishes technical eligibility. It does not establish current Google indexing, rankings, traffic gains, or field Core Web Vitals.

## Scope and method

- Crawled all 188 production sitemap URLs: 94 German and 94 English.
- Checked eight additional internal targets discovered in HTML links. All eight return HTTP 200.
- Checked status, redirect destination, canonical, robots directives, language, hreflang, title, description, H1, image alt presence, and internal links.
- Ran the existing priority audit against 18 iron/PRP URLs. All 54 server, desktop, and mobile snapshots pass its checks.
- Rendered 11 further representative production pages in Chromium at 390×844. Inspected actual JSON-LD scripts, visible page text, viewport overflow, and in-view images.
- Inspected source files and existing aggregate search reports. No fresh analytics collection, form submission, booking interaction, or indexing request occurred.
- Used five-word shingles to screen main-text overlap. Excluded script, style, header, navigation, and footer text. Similarity scores are diagnostic heuristics.
- Used the HTML anchor graph to calculate homepage reachability. This excludes sitemaps, hreflang tags, external backlinks, and untested button navigation.

Per-URL evidence: [coverage CSV](./2026-10-15-praxis-jona-full-site-seo-audit-coverage.csv). Public metadata only; no visitor or patient data.

## Production technical results

| Check | Result | Interpretation |
|---|---|---|
| Sitemap HTTP status | 188/188 HTTP 200 | No failed sitemap URL in this crawl |
| Self-canonical | 188/188 pass | One canonical matching each requested URL; homepage trailing slash normalised |
| Index directives | 188/188 allowed | No `noindex` or `none` in checked page or HTTP directives |
| HTML language | 188/188 pass | German and English match their route |
| Hreflang | 188/188 pass | Self-reference, return link, target status, and target canonical match |
| Titles and descriptions | Present on 188/188 | No missing descriptions or same-language duplicate titles found |
| H1 | One on 188/188 | No missing or duplicate H1 in server HTML |
| Linked internal targets outside sitemap | 8/8 HTTP 200 | Includes authors, legal pages, and intentionally private intake entries |
| Mobile/desktop priority audit | 54/54 snapshots pass | Includes rendered JSON-LD parse, expected types, FAQ text correspondence, and overflow checks |
| Additional mobile samples | 11/11 render without document overflow | In-view images loaded in these samples |
| Canonical redirects | HTTP, www, and sampled trailing slash use one 308 hop | Each reaches the intended HTTPS non-www URL |
| Unknown route | HTTP 404 | Sampled nonexistent route is not an HTTP-200 soft error |
| HSTS | `max-age=63072000` observed | Transport-security signal present |

Robots permits public content and excludes the documented patient-intake paths. No sitemap page matches those disallows. The sitemap index is referenced correctly.

There are 160 pages with `x-default`; 28 omit it. This is not a blocking hreflang error. HTML hreflang is sufficient; duplicating it into XML is unnecessary. [Google guidance](https://developers.google.com/search/docs/specialty/international/localized-versions).

Two duplicate title strings occur only across languages: the blog index and Diabetes Mellitus. A shared term across language variants does not establish harmful duplication. There are no duplicate meta descriptions in the sitemap scope. Character counts were not treated as ranking rules.

## Prioritised findings

### SEO-01 — The iron-cost page lacks visible medical attribution

**Impact:** High trust and editorial priority. **Priority:** P1. Not an indexation blocker.

**Evidence:** On the [German iron-cost page](https://praxisjona.de/leistungen/eiseninfusion-kosten), rendered main content contains no Jonida Gjolli byline or medical-review attribution. The English counterpart also lacks visible attribution. The German page renders BreadcrumbList, MedicalProcedure, and FAQPage JSON-LD; none establishes a visible author/reviewer relationship.

The project instructions identify Dr. med. Jonida Gjolli as the German page's author and medical reviewer. The last medical-review date is undocumented.

**Fix:** Add a visible author and medical-reviewer line linking her name to `/blog/authors/jonida-gjolli`. Use the English author profile where an English attribution is confirmed. Do not assume that translation review occurred. Add corresponding page-level author/reviewer relationships only when they match the visible, verified facts. Leave review dates unset.

**Validation:** Check the visible byline, author link, canonical author profile, and rendered schema. Do not infer a ranking gain from adding attribution.

### SEO-02 — Internal SEO instructions remain visible on production

**Impact:** High content-quality priority. **Priority:** P1.

**Evidence:** Seven German Microneedling pages display an internal editing sentence followed by a keyword list. The shared source is `app/content/aesthetik-source.md`. The branch fix removes it; production still displays it during this audit.

Affected routes:

- `/aesthetik/microneedling`
- `/aesthetik/microneedling/vampirelift-medizinisches-microneedling-gesicht`
- `/aesthetik/microneedling/microneedling-gesicht`
- `/aesthetik/microneedling/microneedling-gesicht-hals`
- `/aesthetik/microneedling/microneedling-gesicht-hals-dekollete`
- `/aesthetik/microneedling/microneedling-face-nctf`
- `/aesthetik/microneedling/microneedling-gesicht-exosome`

**Fix:** Publish the reviewed source correction after the branch's publication requirements are met. Recheck all seven production URLs. Keep internal search-planning notes outside rendered content sources.

**Validation:** Check rendered text and fetched HTML. This is a visible editorial defect; no Google penalty is claimed.

### SEO-03 — Six page pairs form isolated internal-link islands

**Impact:** Medium discovery and navigation priority. **Priority:** P2.

**Evidence:** Twelve sitemap URLs have no anchor path from the homepage in the crawled HTML graph. Each receives its only incoming link from its opposite-language counterpart:

| German | English |
|---|---|
| `/apps` | `/en/apps` |
| `/jobs/mfa-mwd-berlin-mitte` | `/en/jobs/medical-assistant-berlin-mitte` |
| `/leistungen/ernaehrungsmedizin/pakete/bronze` | `/en/services/nutritional-medicine/packages/bronze` |
| `/leistungen/ernaehrungsmedizin/pakete/silber` | `/en/services/nutritional-medicine/packages/silver` |
| `/leistungen/ernaehrungsmedizin/pakete/gold` | `/en/services/nutritional-medicine/packages/gold` |
| `/leistungen/ultraschalluntersuchung` | `/en/services/ultrasound-examination` |

The rendered nutrition hubs also expose no package-detail anchors. Sitemap discovery still exists, so these pages are not wholly undiscoverable. External backlinks were not measured.

Another 15 sitemap pages require four or five anchor hops. The legacy German PRP hair page requires five in this graph.

**Fix:** Decide which pages still serve a distinct purpose. Link active package pages from their nutrition hub with descriptive anchors. Link relevant apps contextually. Confirm whether the MFA vacancy remains active. Assess the legacy ultrasound route before adding links or retiring it.

**Validation:** Rebuild the anchor graph. Confirm a relevant incoming content link for each retained page. Do not add unrelated footer links merely to reduce depth.

### SEO-04 — Several treatment pages have substantial template overlap

**Impact:** Medium content differentiation priority. **Priority:** P2.

**Evidence:** The main-text screening found 107 same-language URL pairs above 0.82 five-word-shingle Jaccard similarity. These are candidate pairs, not 107 independent defects. For example, English Gummy Smile and Lip Flip score 0.940; the German pair scores 0.938. Rendered samples confirm distinct page headings with substantial shared explanatory content.

**Fix:** Start with those two treatment intents. Keep useful shared safety information. Add clinician-approved differences in suitability, assessment, treatment area, limits, and FAQs. Review the remaining candidates by intent before expanding the cluster.

**Validation:** Assess useful unique content and query-to-page behaviour in GSC. Similarity alone does not prove cannibalisation, spam, or a penalty. Do not canonicalise genuinely different treatments solely to reduce a score. [Google canonicalization guidance](https://developers.google.com/search/docs/crawling-indexing/canonicalization).

### SEO-05 — Legacy and newer routes overlap in search intent

**Impact:** Medium architecture priority. **Priority:** P2; requires query evidence before consolidation.

**Evidence:** Both ultrasound routes return 200 and self-canonicalise: `/leistungen/ultraschalluntersuchung` and `/hausaerztliche-leistungen/ultraschalluntersuchung`. The older route is isolated from the homepage graph. Similar overlapping topics exist for the two check-up routes and the PRP-hair routes.

**Fix:** Map one primary search intent to each retained URL. Use page/query GSC evidence to decide whether the older route has a distinct audience or should redirect. Update internal links, sitemap, canonical signals, and both language variants together if consolidating.

**Validation:** Confirm retained content, redirect behaviour, and query movement. This audit does not establish that these URLs compete in Google results.

### SEO-06 — Sitemap last-modified mapping is too broad for English services

**Impact:** Low freshness-signal accuracy priority. **Priority:** P3.

**Evidence:** `next-sitemap.config.js` maps the entire `/en/services` prefix to `app/content/longevity-source-en.md`, except the earlier PRP-hair rule. Some service routes contain inline copy. The live iron, public check-up, and private check-up English URLs all declare `2026-09-23T18:57:57+02:00`. Equal dates alone are not an error; the mismatched source mapping is the finding.

**Fix:** Map exceptions to the source that supplies their actual content, or let inline pages use their own route file. Consider the newest relevant source change where several files supply a page. Do not substitute build timestamps or invent medical-review dates.

**Validation:** Change one inline service page in a test fixture. Confirm its sitemap date responds to that source, without changing unrelated routes.

## Performance and indexing evidence gaps

### Field Core Web Vitals are unmeasured

Mobile PageSpeed API requests for the homepage and iron-cost page returned HTTP 429. No current CrUX, LCP, INP, or CLS result was obtained. Browser screenshots and fetch durations cannot establish passing field Core Web Vitals.

**Next step:** Retrieve PageSpeed/CrUX data when quota permits, or inspect Search Console's Core Web Vitals report. Separate lab diagnostics from field results. [Metric definitions](https://web.dev/articles/defining-core-web-vitals-thresholds/).

### Current Google index selection and traffic were not re-queried

The September 30 audit records 18 priority URLs as indexed with matching Google-selected canonicals. That is historical evidence. This audit did not re-query current URL Inspection, Search Analytics, backlink services, or Google Business Profile.

The existing dashboard covers July 25–August 21 and was generated August 23. The living growth plan records a later August 30–September 26 GSC window. Neither is a current October 15 traffic baseline. No ranking loss, present index count, booking decline, or effect of the preview changes is inferred.

**Next step:** Use the scheduled collection cadence and inspect representative overlapping/isolated URLs. Measure Google impressions, clicks, position, and SERP CTR in GSC. Measure booking-CTA events separately in Umami. Do not infer Doctolib completion.

## Preview and local changes — separate from production

Branch: `codex/brand-review-corrections`. Commit: `18719a1d93419eb3cfbcb92071dfb76ef5c8022a`.

Vercel reported this [preview deployment](https://praxis-jona-website-9nlx57shu-perjans-projects.vercel.app) Ready in the preceding deployment task. That task verified 26 local production-rendered pages and a successful build. It did not publish production changes.

The branch removes the SEO note, patient jokes, and care guarantee. It softens private check-up and app copy and improves selected translations. These remain production findings until release and re-verification. The preview does not resolve iron-page attribution, isolated links, source mappings, or treatment differentiation.

This SEO audit did not run a new full crawl of the preview or change application code. Clinical wording still needs clinician approval before production publication. The clinic requested that the news policy-review date remain unset.

## Action plan

1. **P1:** Prepare the verified iron-page attribution; leave dates unset. Finish the clinical review required for the existing branch.
2. **P1:** Release the approved editorial cleanup through the normal deployment process. Recheck the seven Microneedling pages on production.
3. **P2:** Confirm the purpose of the six isolated page pairs. Add relevant links or prepare justified retirement/consolidation changes.
4. **P2:** Review Gummy Smile/Lip Flip differentiation and legacy/new route intent using current GSC evidence at the next checkpoint.
5. **P3:** Correct sitemap source mapping and verify meaningful date behaviour.
6. **Measurement:** Obtain field performance evidence and current indexed-version evidence before making speed or index-coverage claims.

No automatic redirects, noindex changes, content expansion, indexing requests, or medical publication occurred during this audit.

## Evidence and limitations

- Coverage CSV retains the 188 public sitemap records and page-level metadata.
- Raw crawl, graph calculations, rendered JSON-LD snapshots, screenshots, and unavailable performance responses remain under `/tmp/jona-seo-*` locally.
- The priority audit reports zero issues across 54 snapshots. This checks its defined rules, not every Google rich-result property.
- JSON-LD was inspected after rendering. No absent-schema finding relies solely on script-stripped text.
- No horizontal overflow appeared in the tested rendered scope. Full interactive accessibility, all asset URLs, browser compatibility, security penetration testing, and external backlinks were outside scope.
- GSC-selected canonicals, rich-result eligibility, and field metrics require their own evidence. Technical tags alone cannot prove them.
