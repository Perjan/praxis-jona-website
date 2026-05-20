# Praxis Jona SEO/GEO Audit

Date: 2026-05-19  
Scope: `https://praxisjona.de`, `http://localhost:3001`, local Next.js repository, homepage, major service hubs, sitemap, robots.txt, metadata, schema, internal links, content structure, GEO visibility, CRO and UI/UX signals.

## Executive Summary

Praxis Jona has a solid technical base: HTTPS works on production, robots.txt allows crawling, the sitemap is discoverable, core metadata exists, hreflang is present on sampled localized pages, and important templates already support JSON-LD. The live production crawler scored the site **81/100, grade B**. The local server at `http://localhost:3001` scored **63/100, grade D**, but that local score is heavily distorted by expected dev-server noise: HTTP instead of HTTPS, unminified multi-megabyte dev bundles, source maps, and sitemap URLs pointing to the production domain.

The biggest growth blockers are not basic crawlability. They are:

1. **Production deployment drift / broken strategic routes**: several important routes return 404 on the live site, including `/praevention-longevity`, `/hausaerztliche-leistungen`, `/aesthetik`, `/preise`, and `/en/general-medicine`, while the same routes are crawlable locally.
2. **Source-level local issues**: the local crawl found missing H1s on `/aesthetik`, `/praevention-longevity`, and `/en/prevention-longevity`, invalid definition-list markup, duplicate metadata for hair-loss pages, and pricing pages with multiple `<main>` landmarks.
3. **Thin homepage and hub content**: the homepage has roughly 278 rendered words on production; local hub pages such as `/leistungen`, `/aesthetik`, `/praevention-longevity`, `/kontakt`, and `/hausaerztliche-leistungen` remain under 300 words.
4. **Weak internal linking on production**: crawler found 11 orphan/near-orphan pages and 5 pages with only one internal link.
5. **GEO gaps**: homepage has `MedicalClinic` schema, but lacks answer-first medical/local facts, FAQ schema, physician E-E-A-T detail, opening-hours schema, geo coordinates, citations and concise extractable sections.
6. **Metadata quality variance**: production found 22 title warnings and 40 meta description warnings; local found 29 title warnings and 61 meta description warnings.
7. **Performance/image issues**: production tracked about 3.7 MB of resources; local dev tracked about 32.45 MB, mostly expected dev-server JS noise. Real image/LCP issues remain.
8. **CRO clarity issue**: the homepage hero says the brand clearly, but the service promise and primary action are not as search-intent-specific as competitors.

## Evidence Snapshot

Live crawler result from `squirrel audit https://praxisjona.de --format llm`:

| Area | Score |
|---|---:|
| Overall | 81 / B |
| Performance | 85 |
| Content | 92 |
| Core SEO | 94 |
| Social Media | 88 |
| Accessibility | 100 |
| Images | 91 |
| Crawlability | 90 |
| Security | 89 |
| E-E-A-T | 81 |
| Links | 91 |
| Internationalization | 100 |
| Structured Data | 100 |

Sample live page checks:

| URL | Status | Main Finding |
|---|---:|---|
| `/` | 200 | Title, description, canonical, hreflang, OG/Twitter and `MedicalClinic` schema exist; content is thin for a homepage. |
| `/leistungen` | 200 | Good title/description, but only around 146 rendered words and no schema on live page. |
| `/en/services` | 200 | Good metadata baseline, but only around 163 rendered words and no schema on live page. |
| `/praevention-longevity` | 404 | Local route exists, live route is missing. |
| `/hausaerztliche-leistungen` | 404 | Local route exists, live route is missing. |
| `/aesthetik` | 404 | Local route exists, live route is missing. |
| `/preise` | 404 | Local route exists, live route is missing. |
| `/en/general-medicine` | 404 | Local route exists, live route is missing. |

Fast curl timing looked good for cached HTML:

| URL | TTFB | Total |
|---|---:|---:|
| `/` | 0.125 s | 0.137 s |
| `/leistungen` | 0.106 s | 0.124 s |
| `/blog` | 0.101 s | 0.177 s |

## Localhost Audit Snapshot

Local crawler result from `squirrel audit http://localhost:3001 --format llm`:

| Area | Score |
|---|---:|
| Overall | 63 / D |
| Security | 54 |
| Accessibility | 91 |
| Performance | 68 |
| Core SEO | 88 |
| Crawlability | 86 |
| Content | 78 |
| Social Media | 88 |
| Images | 91 |
| E-E-A-T | 81 |
| Internationalization | 100 |
| Structured Data | 100 |

Interpretation:

The local score should not be compared directly to the live score because `localhost:3001` is a development server. The crawler penalized expected local conditions: no HTTPS, unminified Next.js dev bundles, source maps, HTTP/2 unavailable without HTTPS, and a sitemap whose URLs point to `https://praxisjona.de` instead of `localhost`.

Useful local findings:

| Issue | Affected Routes | Priority |
|---|---|---:|
| Missing H1 | `/aesthetik`, `/praevention-longevity`, `/en/prevention-longevity` | P1 |
| Thin content under 300 words | `/leistungen`, `/aesthetik`, `/praevention-longevity`, `/kontakt`, `/hausaerztliche-leistungen` | P1 |
| Duplicate title and description | `/aesthetik/haarausfall`, `/leistungen/haarausfall-berlin-mitte` | P2 |
| Invalid definition list structure | Multiple service/template pages, including check-up, ECG, acute consultation, vaccinations and aesthetics detail pages | P1 |
| Multiple main landmarks | Pricing pages such as `/preise`, `/aesthetik/preise`, `/en/prices`, `/hausaerztliche-leistungen/preise`, `/praevention-longevity/preise` | P1 |
| Pricing tables lack accessible names | Pricing pages | P2 |
| Generic link text | "Mehr erfahren", "Learn more", "Details" across multiple pages | P2 |
| OG image size warning | 90 local pages | P2 |
| E-E-A-T conventional page detection | No conventional About/Privacy page found | P2 |

Useful local vs production conclusion:

The routes that are 404 in production are crawlable on localhost. That confirms the live 404 issue is most likely deployment drift or stale production build, not missing source files. Fixing deployment should move several important hub pages back into the production crawl.

## Critical Issues

### 1. Strategic Local Routes 404 In Production

Where:

- `/praevention-longevity`
- `/hausaerztliche-leistungen`
- `/hausaerztliche-leistungen/gesundheitsuntersuchung-check-up`
- `/aesthetik`
- `/preise`
- `/en/general-medicine`

Why it matters:

These are the exact routes that should build topical authority for prevention, longevity, internal medicine, aesthetics, pricing and English international visitors. Several are present locally under `app/`, so this looks like production deployment drift or stale live build, not a content strategy decision.

What to do:

1. Deploy the current local build or investigate why those routes are not included in production.
2. After deployment, run a full crawl and verify every static route in `app/**/page.tsx` returns either 200 or an intentional redirect/noindex.
3. Add a CI smoke test that fetches priority routes after deployment.

Priority: P0

### 2. Local Source Pages Missing H1

Where:

- `/aesthetik`
- `/praevention-longevity`
- `/en/prevention-longevity`

Why it matters:

Each indexable page needs one clear H1 that states the page topic. Missing H1s weaken page-level relevance, hurt accessibility, and make AI extraction less reliable.

What to do:

1. Inspect the hub templates rendering these pages.
2. Ensure the parsed markdown first heading renders as `<h1>`, not only as generic body content.
3. Add tests or a route-level smoke check for one visible H1 on each indexable route.

Priority: P1

### 3. Invalid Definition List Markup On Local Templates

Where:

- Multiple pages generated by shared service/detail templates.
- Examples from local crawl:
  - `/aesthetik/hautbild-verbessern`
  - `/hausaerztliche-leistungen/akutsprechstunde`
  - `/hausaerztliche-leistungen/ekg`
  - `/hausaerztliche-leistungen/gesundheitsuntersuchung-check-up`
  - `/hausaerztliche-leistungen/impfungen`

Why it matters:

The crawler found `dt` and `dd` elements outside valid `dl` structure. That is an accessibility and semantic HTML issue. It can also reduce the extractability of fact strips and key-value medical information.

What to do:

1. Locate the shared fact-strip component that renders `dt` / `dd`.
2. Ensure each `dt` / `dd` pair is a direct child of a `<dl>`, or use neutral semantic markup if the layout cannot support a valid definition list.
3. Re-run the local crawl after the template fix; this should clear many repeated accessibility failures at once.

Priority: P1

### 4. Pricing Pages Have Multiple Main Landmarks

Where:

- `/preise`
- `/aesthetik/preise`
- `/en/prices`
- `/hausaerztliche-leistungen/preise`
- `/praevention-longevity/preise`
- English equivalents.

Why it matters:

The root layout already wraps page content in `<main id="main-content">`. Pricing templates appear to render another `<main>` inside it. Pages should expose one main landmark for screen readers and assistive navigation.

What to do:

1. Replace nested `<main>` in pricing page layout with `<section>` or `<div>`.
2. Keep the root layout as the only page-level `<main>`.
3. Add accessible names/captions to pricing tables while editing the pricing template.

Priority: P1

### 5. Homepage Is Too Thin For Local SEO And GEO

Where:

- `/`
- `app/page.tsx`
- `app/HeroSection.tsx`
- `app/components/ServiceCards.tsx`
- `app/ClinicSection.tsx`

Current state:

- H1: `PRAXIS JONA`
- Hero supporting text: "Ganzheitliche Betreuung für ein gesundes Leben..."
- Rendered homepage content: roughly 278 words.
- Crawler flagged homepage as thin content.

Why it matters:

For Google, the homepage should clearly establish entity, location, specialties and patient intent. For AI engines, the homepage should be easy to cite with answer-first sentences such as "Praxis Jona is an internal medicine and general medicine practice in Berlin-Mitte..." Right now, the homepage is visually clear but semantically underpowered.

What to do:

1. Add an answer-first intro below the hero:
   - "Praxis Jona ist eine Praxis für Allgemeinmedizin und Innere Medizin in Berlin-Mitte nahe Rosenthaler Platz. Schwerpunkte sind Prävention, Schilddrüse, Bluthochdruck, Fettstoffwechsel, Ernährungsmedizin, Diagnostik und Health/Longevity."
2. Add a concise "Was Patientinnen und Patienten hier finden" section with 5 to 7 bullets.
3. Add an FAQ section to homepage with 5 localized questions:
   - "Welche Leistungen bietet Praxis Jona in Berlin-Mitte?"
   - "Kann ich online einen Termin buchen?"
   - "Welche Schwerpunkte behandelt die Praxis?"
   - "Wo befindet sich Praxis Jona?"
   - "Gibt es private Check-ups und Präventionsleistungen?"
4. Add FAQPage JSON-LD for the FAQ.
5. Add explicit links from the homepage to all major hubs.

Priority: P1

### 6. Weak Internal Linking And Orphan Pages

Crawler findings:

- 11 orphan pages with fewer than 2 incoming links.
- 5 pages have only 1 internal link.
- Examples: `/botox-preise`, `/en/botox-prices`, `/leistungen/eiseninfusion-kosten`, `/leistungen/ultraschalluntersuchung`, `/en/services/iron-infusion-costs`.

Why it matters:

Internal links help Google discover pages, establish site architecture and understand priority. AI search systems also benefit from clear hub-and-spoke structures because content becomes easier to extract by topic.

What to do:

1. Create stronger hub pages:
   - `/leistungen`
   - `/hausaerztliche-leistungen`
   - `/praevention-longevity`
   - `/aesthetik`
   - `/preise`
2. Add "related services" blocks across every service detail page.
3. Add pricing links from service pages to matching pricing sections.
4. Link diagnosis pages to service pages:
   - Bluthochdruck -> Langzeit-Blutdruckmessung, EKG, Check-up.
   - Schilddrüse -> Ultraschall, Labor, Check-up.
   - Fettstoffwechsel -> Ernährungsmedizin, Check-up, Labor.
5. Add breadcrumb schema consistently on all detail pages.

Priority: P1

### 7. Sitemap And Indexability Mismatches

Crawler findings:

- `/anamnese` is in sitemap but has noindex/nofollow.
- 3 indexable pages are not in sitemap:
  - `/impressum-datenschutz`
  - `/imprint-privacy`
  - `/blog/authors/jonida-gjolli`

Why it matters:

Sitemaps should list canonical indexable URLs. Google says sitemaps help indicate canonical URLs and should be submitted in Search Console. Noindexed pages in a sitemap create mixed signals.

What to do:

1. Exclude `/anamnese` from sitemap if it should remain noindex.
2. Decide whether `/blog/authors/jonida-gjolli` should be indexable. If yes, include it in sitemap and add author profile schema. If no, add noindex.
3. Legal pages were excluded in `next-sitemap.config.js`, but crawler considers them indexable. Either keep them excluded intentionally or add noindex if they should not be search landing pages.

Priority: P1

### 8. Structured Data Is Good Locally, But Underused On Live Core Pages

Where:

- `app/page.tsx`
- `app/kontakt/page.tsx`
- `app/components/PageTemplates.tsx`
- `app/components/LongevityMarkdownPage.tsx`
- `app/components/pricing/pricingSchema.ts`

Current state:

- Homepage has `MedicalClinic`.
- Contact page has `ContactPage`.
- Local templates support `BreadcrumbList`, `FAQPage`, `MedicalBusiness`, `MedicalProcedure`, and pricing schema.
- Live `/leistungen` and `/en/services` showed no schema in rendered sample.

Why it matters:

Google's LocalBusiness structured data documentation recommends describing business details such as business hours, geo, address and other local attributes. GEO also benefits from schema because AI systems can extract clean entities and relationships.

What to do:

1. Expand the homepage `MedicalClinic` schema with:
   - `openingHoursSpecification`
   - `geo`
   - `priceRange`
   - `areaServed`
   - `availableService`
   - `founder` or `employee` with physician details
   - `sameAs` including Doctolib and Google Maps if stable
2. Add `WebSite` schema with `name`, `url`, `inLanguage`.
3. Add `WebPage` schema for major hubs.
4. Add `FAQPage` schema wherever FAQs are visible.
5. Add `Physician` or `Person` schema on the team/doctor page.

Priority: P1

### 9. Metadata Needs Tightening Across Long-Tail Pages

Crawler findings:

- 22 title warnings.
- 40 meta description warnings.
- Examples flagged: `/botox-preise`, `/blog/digitale-zahlungen`, `/blog/ernahrungsempfehlungen-bei-fettstoffwechselstorungen`, `/leistungen/abnehmspritze`, `/leistungen/eiseninfusion-kosten`, `/leistungen/infusionstherapie`.

Why it matters:

Titles and descriptions influence click-through rate and clarify page intent. For local search, titles should combine service + city/district + brand without becoming bloated.

What to do:

Use this pattern:

```text
{Service} in Berlin-Mitte | Praxis Jona
```

Examples:

```text
Eiseninfusion in Berlin-Mitte | Praxis Jona
Botox Preise Berlin-Mitte | Praxis Jona
Langzeit-Blutdruckmessung in Berlin-Mitte | Praxis Jona
```

Description pattern:

```text
{Service} bei Praxis Jona in Berlin-Mitte: {main benefit}, {process/detail}, Termin online oder telefonisch vereinbaren.
```

Priority: P2

### 10. Images And Performance Need Polish

Crawler findings:

- Total tracked resources: about 3.7 MB.
- Images above 200 KB:
  - `/images/clinic/clinic-1.jpeg` via Next image at 3840 width: 245.9 KB.
  - `/images/clinic/clinic-2.jpeg` via Next image at 3840 width: 231.1 KB.
  - One remote Substack image in a blog article: 239.2 KB.
- Above-fold images are lazy-loaded on several pages.
- LCP image preload hints are missing on multiple pages.

Why it matters:

Cached HTML is fast, but images can affect LCP and mobile experience. Page speed is also a citation-adjacent quality signal for AI search and a direct user conversion factor.

What to do:

1. Use `priority` for true above-fold hero images.
2. Add `sizes` to all major Next images.
3. Compress clinic images and large blog images to modern formats where possible.
4. Avoid loading 3840-width images for layout slots that never need them.
5. Replace CSS background hero image with `next/image` if it is the LCP element, or explicitly preload it.

Priority: P2

### 11. Social Image Size Warning

Crawler finding:

- `og:image may be too small` across many pages.

Current state:

- Homepage declares `/images/og-image.png`, width 1200, height 600.

Why it matters:

Most social previews prefer 1200 x 630. Current metadata reports 1200 x 600, which may be accepted but triggers warnings and can crop less predictably.

What to do:

1. Create a 1200 x 630 OG image.
2. Set the actual dimensions in metadata.
3. Consider page-specific OG images for major service hubs.

Priority: P2

### 12. E-E-A-T Signals Are Present But Not Prominent Enough

Crawler findings:

- E-E-A-T score: 81.
- Crawler reported no About page found and no Privacy Policy page found, likely because pages are named/team/legal rather than conventional about/privacy.

Why it matters:

Medical pages are YMYL content. Trust signals need to be explicit, easy to find, and attached to medical claims.

What to do:

1. Add or alias `/ueber-uns` and `/datenschutz`.
2. Add a physician authority block to homepage and service pages:
   - Dr. med. Jonida Gjolli
   - Fachärztin für Innere Medizin
   - Focus areas
   - Link to team profile
3. Add medical review/update dates on blog and service content.
4. Add cited sources on medical content pages where claims are clinical:
   - DEGAM, RKI, STIKO, KBV, BZgA, ESC/EAS, WHO, Charite/medical society pages as relevant.
5. Add author/reviewer schema for medical articles.

Priority: P1

## GEO Audit

GEO means optimizing for AI engines that cite sources rather than only rank pages. The site has a good base but currently misses several citation-friendly patterns.

### Current GEO Strengths

- Robots.txt allows all crawlers:

```text
User-agent: *
Allow: /
```

- This means major AI crawlers are not blocked by default.
- Homepage has entity schema for `MedicalClinic`.
- Site has bilingual route structure.
- Several local templates already generate `FAQPage`, `BreadcrumbList` and medical schema.

### GEO Gaps

1. **No explicit OAI-SearchBot / GPTBot / PerplexityBot allow rules**  
   The wildcard allow is sufficient in ordinary robots.txt interpretation, but explicit rules make intent clear. OpenAI documents `OAI-SearchBot`, `GPTBot`, and `ChatGPT-User`; Perplexity recommends allowing `PerplexityBot`.

2. **Thin answer-first content**  
   AI engines prefer compact direct answers. Important pages should start with "what this is, who it is for, where it is, what happens next."

3. **Few citations**  
   Medical pages should cite authoritative sources when discussing prevention, hypertension, lipid disorders, thyroid topics, vaccinations and check-ups.

4. **FAQ schema not universal**  
   FAQPage schema exists in templates but not on all live priority pages.

5. **Entity completeness**  
   Schema should connect the clinic, physician, services, address, geo coordinates, opening hours, sameAs links and booking action.

### Recommended Robots.txt Addition

Keep the existing wildcard allow, then make AI-search intent explicit:

```text
User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /
```

Priority: P2

### Recommended AI-Citable Homepage Answer Block

Add near the top of the homepage:

```text
Praxis Jona ist eine Praxis für Allgemeinmedizin und Innere Medizin in Berlin-Mitte nahe Rosenthaler Platz. Dr. med. Jonida Gjolli und das Team betreuen Patientinnen und Patienten bei akuten Beschwerden, Vorsorge, Check-ups, Schilddrüsenerkrankungen, Bluthochdruck, Fettstoffwechselstörungen, Ernährungsmedizin und moderner Präventionsmedizin.
```

Why this works:

- Names the entity.
- Names the location.
- Names the medical category.
- Names the physician.
- Names the service clusters.
- Is directly extractable by AI systems.

Priority: P1

## Keyword And Positioning Opportunities

Competitor and search-result sampling shows Berlin-Mitte competitors commonly lead with direct service/location combinations:

- "Innere Medizin Berlin Mitte"
- "Allgemeinmedizin Berlin Mitte"
- "Hausarzt Berlin Mitte"
- "Check-up Berlin Mitte"
- "Gesundheitsvorsorge Berlin Mitte"
- "Ultraschall Schilddrüse Berlin Mitte"
- "Langzeit-Blutdruckmessung Berlin Mitte"
- "Ernährungsmedizin Berlin Mitte"

Recommended primary clusters:

| Cluster | Target Pages | Intent |
|---|---|---|
| Allgemeinmedizin Berlin-Mitte | `/`, `/hausaerztliche-leistungen`, `/leistungen` | Local GP / primary care |
| Innere Medizin Berlin-Mitte | `/`, `/hausaerztliche-leistungen`, `/schwerpunkte` | Specialist/internal medicine |
| Check-up Berlin-Mitte | `/leistungen/gesetzliche-check-up`, `/leistungen/private-check-up`, `/preise` | Preventive check-up booking |
| Prävention / Longevity Berlin | `/praevention-longevity`, package pages | Private prevention, high-value service |
| Schilddrüse Berlin-Mitte | `/schwerpunkte/schilddruese`, ultrasound/lab pages | Diagnostic specialty |
| Bluthochdruck Berlin-Mitte | `/schwerpunkte/bluthochdruck`, BP monitoring page | Condition + diagnostic pathway |
| Fettstoffwechsel / Lipidologie Berlin | `/schwerpunkte/fettstoffwechselstoerungen`, nutrition pages | Specialty authority |
| Ernährungsmedizin Berlin-Mitte | `/leistungen/ernaehrungsmedizin`, package pages | Program/service conversion |

## CRO And UX Findings

### Homepage Hero

What works:

- Brand is visible in first viewport.
- Visual identity is warm and professional.
- Service cards are clear entry points.

What is missing:

- The hero does not immediately say "Allgemeinmedizin & Innere Medizin in Berlin-Mitte" in the visible headline.
- The primary conversion action is not visible in the hero itself.
- The CTA after the quote links to `/praevention-longevity`, which currently 404s in production.

Action:

1. Change hero supporting copy to include location and service category.
2. Add primary CTA: "Termin online buchen".
3. Add secondary CTA: "Leistungen ansehen".
4. Fix production 404 before using `/praevention-longevity` as a CTA destination.

### Service Hub Pages

What works:

- `/leistungen` is simple and scannable.

What is missing:

- Too little explanatory copy.
- No visible FAQ.
- No schema in live sampled HTML.
- No reason to choose Praxis Jona over another local practice.

Action:

1. Add a short intro: who the page is for, what services are covered, when to book.
2. Group services by patient intent, not only service type:
   - Acute help
   - Prevention/check-up
   - Diagnostics
   - Chronic conditions
   - Private/self-pay services
3. Add trust strip: location, physician specialty, online booking, diagnostic options.

## Prioritized Action Plan

### P0: Fix Broken Production Routes

- Deploy or debug missing local routes.
- Verify `/praevention-longevity`, `/hausaerztliche-leistungen`, `/aesthetik`, `/preise`, `/en/general-medicine`.
- Re-run crawl after deploy.

### P1: Build Search Authority

- Expand homepage content to at least 600-900 high-quality words.
- Add homepage FAQ and FAQPage schema.
- Add clinic/physician E-E-A-T block.
- Fix sitemap/noindex conflicts.
- Strengthen internal links from hubs to detail pages.
- Add or alias conventional `/ueber-uns` and `/datenschutz` pages.
- Fix missing H1s on `/aesthetik`, `/praevention-longevity`, and `/en/prevention-longevity`.
- Fix invalid definition-list markup in shared service/detail templates.
- Remove nested `<main>` landmarks from pricing templates.

### P2: Improve Metadata And Schema Depth

- Rewrite long/short titles and descriptions.
- Expand `MedicalClinic` schema.
- Add `WebSite`, `WebPage`, `Physician`, `Service`, `FAQPage`, `BreadcrumbList` consistently.
- Add explicit AI bot allow rules.
- Create 1200 x 630 OG image.

### P3: Performance Polish

- Compress large clinic and blog images.
- Add `priority` and `sizes` to above-fold images.
- Avoid oversized image candidates.
- Replace/preload CSS background hero image if it is LCP.

## Suggested Homepage Structure

1. Hero:
   - H1: `Praxis Jona Berlin-Mitte`
   - Subhead: `Allgemeinmedizin, Innere Medizin, Prävention und Diagnostik nahe Rosenthaler Platz.`
   - CTAs: `Termin online buchen`, `Leistungen ansehen`
2. Answer-first intro paragraph.
3. Service cards:
   - Allgemeinmedizin & Innere Medizin
   - Prävention & Check-ups
   - Diagnostik
   - Schwerpunkte
   - Ästhetik
4. Physician trust block.
5. "Wann Sie zu uns kommen können" section.
6. Location/opening hours/NAP block.
7. FAQ.

## Validation Checklist

After implementing fixes:

- [ ] `npm run build` succeeds.
- [ ] `npm run gen-sitemap` generates expected sitemap.
- [ ] All priority routes return 200 or intentional redirect.
- [ ] Local priority routes have exactly one visible H1.
- [ ] Pricing pages expose only one `<main>` landmark.
- [ ] Service/detail fact strips use valid semantic markup.
- [ ] Pricing tables have accessible names or captions.
- [ ] `/anamnese` is removed from sitemap if noindex remains.
- [ ] Rich Results Test passes for homepage, contact, service hubs, FAQ pages.
- [ ] Google Search Console sitemap is resubmitted.
- [ ] Bing Webmaster Tools sitemap is submitted.
- [ ] Crawler score improves from 81 to 90+.
- [ ] Local dev crawl is interpreted separately from production crawl, or production-like local audit is run with `npm run build && npm run start`.
- [ ] No homepage CTA points to a 404.

## Source Links

- Live site: https://praxisjona.de
- Robots: https://praxisjona.de/robots.txt
- Sitemap index: https://praxisjona.de/sitemap.xml
- Google LocalBusiness structured data: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Google canonical guidance: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- OpenAI crawler documentation: https://platform.openai.com/docs/bots
- Perplexity crawler documentation: https://docs.perplexity.ai/guides/bots
- Competitor examples sampled from current search results: innere-medizin-berlin-mitte.de, dr-immler.de, praxis-thormann.de, praxisteammitte.de, arztpraxis-berlin-mitte.de, praxisverbund-berlin.de.
