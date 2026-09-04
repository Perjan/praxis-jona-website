# Praxis Jona: 31-Day Search, Visibility & Bookings Growth Plan

Date created: 2026-09-04
Sprint window: 2026-09-04 through 2026-10-04
Primary market: Berlin, especially Berlin-Mitte / Rosenthaler Platz
Primary demand clusters: `eiseninfusion berlin`, `prp behandlung berlin`
Primary business outcome: more qualified appointment starts and attributable outbound bookings
Status: **Living operating document — update every working day**

## How To Use This Living Artifact

This is the sprint's source of truth. Do not make a second plan.

1. Update the daily row's status: `Not started`, `In progress`, `Blocked`, `Shipped`, or `Measured`.
2. Add the production URL, pull request, reviewer, and measurement note to the execution log.
3. Update the KPI scoreboard every Monday from Search Console and analytics.
4. Record meaningful scope changes in the decision log; do not silently change the keyword-to-URL map.
5. A page is not `Shipped` until it is live, indexable, internally linked, medically reviewed, measured, and submitted for recrawl.

Last updated: 2026-09-04
Next operating review: 2026-09-07
Clinical reviewer: **TBD before publishing new medical claims**
Growth owner: **TBD**
Engineering owner: **TBD**

---

## Executive Verdict

Praxis Jona does not need 31 days of indiscriminate publishing. It needs two different growth plays:

- **Iron is already the demand engine.** Protect the existing ranking, lift CTR, resolve intent overlap through careful internal linking, and convert more of the demand already being earned.
- **PRP is an authority and intent-architecture problem.** The site has substantial commercial pages, but German PRP visibility remains weak and fragmented across skin, eyes, scars, microneedling, hair, and prices. Build a clinically credible cluster around the existing hubs rather than creating another generic `PRP Berlin` page.
- **Bookings are partially measured, but not yet end to end.** Self-hosted Umami records pageviews plus generic header and homepage-hero booking events. Service CTA, insurance selection, Doctolib outbound, and completed booking are not distinguishable. The immediate north-star metric must become a qualified outbound booking event containing service, source page, language, insurance selection, and appointment motive.
- **Local prominence is a distribution problem as much as a website problem.** Directories occupy several top results. Google says local visibility is mainly shaped by relevance, distance, and prominence, including links and reviews. The website, Google Business Profile, Doctolib, Jameda, Doctify, and other accurate listings must reinforce one entity.

The sprint should ship **six to eight excellent German medical assets or material refreshes**, not dozens of thin pages. Every asset must add something competitors do not: named physician review, transparent evidence, local logistics, prices or cost mechanics, candidacy limits, risks, and a clear next step.

## 31-Day Outcomes

These are ambitious operating targets, not guarantees.

| Outcome | Baseline | Day-31 target | Why it matters |
|---|---:|---:|---|
| Qualified booking outbound events | Umami tracks two generic booking events, but not service outbound | 100% of service CTAs tracked; establish first clean outbound baseline; target +30% after instrumentation | Closest observable proxy for bookings |
| Sitewide web impressions | 22,260 per latest 28 days | +20% versus comparable prior window | Measures exposure growth |
| Sitewide web CTR | 2.13% | Recover to at least 2.4% | Rankings improved while CTR fell |
| `eiseninfusion berlin` clicks | 76 / 762 impressions | +15–25% clicks while keeping top-eight visibility | Existing high-intent winner |
| `eiseninfusion kosten` CTR | 0.56% at position 7.8 | At least 1.0% without losing price transparency | Largest immediate CTR gap |
| Iron cluster CTR | 1.99% | At least 2.7% | Impressions grew faster than clicks |
| PRP cluster clicks | 6 / 1,397 impressions | At least 15 clicks and +25% non-brand impressions | Establishes early traction |
| `prp behandlung berlin` position | 59.3 | Reach top 40 as an early signal | A page-one outcome usually needs longer than 31 days |
| Local entity consistency | Phone discrepancy exists on directories | 100% audited priority listings consistent | Trust and local discovery |
| Publishing quality | One German iron article; no PRP editorial cluster | 6–8 physician-reviewed launches/refreshes | Topical authority without content spam |

## Measurement Baseline

Search Console was fetched on 2026-09-04. The current window is 2026-08-06 through 2026-09-02; the comparison window is the preceding 28 days. Web-search rows are used below.

### What “CTR” means in this plan

Do not combine search CTR with on-site conversion rates. They answer different questions.

| Metric | Formula | System of record | Decision it supports |
|---|---|---|---|
| Search-result CTR | Google organic clicks ÷ Google impressions | Google Search Console | Whether title, snippet and query/page fit earn the click |
| CTA click rate | Tracked CTA clicks ÷ pageviews of the same page | Umami | Whether the page persuades visits to start booking |
| Unique-visitor CTA rate | Unique visitors who clicked ÷ unique visitors who viewed the page | Umami | Reduces distortion from repeat pageviews/clicks |
| Modal progression rate | Insurance selections ÷ booking modal opens | Umami after instrumentation | Whether the insurance choice creates friction |
| Booking outbound rate | Doctolib outbound events ÷ pageviews or unique visitors | Umami after instrumentation | Best current proxy for qualified booking intent |
| Booking completion rate | Confirmed Doctolib bookings ÷ outbound sessions | Doctolib/approved server-side import | True commercial conversion; not currently available |

Search Console is the only source in this stack that can measure Google SERP CTR because only Google has organic impression counts. Umami can segment landing traffic and measure behavior after arrival, but referrer data must not be substituted for search impressions.

| Segment | Current clicks | Current impressions | Current CTR | Current avg. position | Previous clicks | Previous impressions | Previous CTR | Previous avg. position |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Whole site | 475 | 22,260 | 2.13% | 18.7 | 493 | 20,288 | 2.43% | 25.9 |
| Iron / ferritin cluster | 136 | 6,829 | 1.99% | 11.4 | 121 | 2,688 | 4.50% | 10.6 |
| Iron + Berlin cluster | 114 | 1,119 | 10.19% | 5.7 | 113 | 1,212 | 9.32% | 5.8 |
| PRP / Eigenblut cluster | 6 | 1,397 | 0.43% | 22.1 | 3 | 1,445 | 0.21% | 25.5 |
| PRP + Berlin cluster | 4 | 265 | 1.51% | 33.9 | 2 | 318 | 0.63% | 31.1 |

Interpretation:

- Whole-site impressions increased 9.7% and average reported position improved, but clicks fell 3.7% and CTR fell from 2.43% to 2.13%.
- Iron/ferritin impressions increased 154%, but CTR fell sharply. This is a title/snippet and intent-expansion opportunity, not a reason to create another generic iron landing page.
- `eiseninfusion berlin` is already healthy: 76 clicks, 762 impressions, 9.97% CTR, position 5.7.
- `eiseninfusion kosten` has 2,136 impressions, 12 clicks, 0.56% CTR, and position 7.8. It is the fastest organic conversion opportunity.
- `eiseninfusion berlin kosten` is already position 1.7 with 15.38% CTR. Preserve the combination of location, price, and process.
- `prp behandlung berlin` has only one click from 32 impressions at position 59.3. It needs stronger intent ownership and authority, not a minor title-only edit.

### Self-hosted Umami baseline

Access was validated on 2026-09-04 against the self-hosted Umami service. The repository now collects recurring analytics exclusively through the official HTTP API; the server's storage layer is deliberately outside this workflow. The site is `praxisjona.de`, website ID `cc9a5b16-c893-492f-af55-e6b79a844358`. The comparison below uses the same current period as Search Console, with an exclusive end timestamp of 2026-09-03.

| Umami metric | Current 28 days | Previous 28 days | Change | Interpretation |
|---|---:|---:|---:|---|
| Pageviews | 4,980 | 5,206 | -4.3% | Site traffic softened despite higher Google impressions |
| Unique visitors | 1,755 | 1,835 | -4.4% | Confirms traffic decline is not only repeat-view noise |
| `button-in-header` events | 97 | 167 | -41.9% | Needs investigation by page/device/source |
| `button-in-home-hero` events | 74 | Not tracked | New event | Total booking-event comparison is invalid across periods |
| All current custom events | 171 | 167 | +2.4% | Not like-for-like because the hero event was newly introduced |

Current and previous page-level signals:

| Page / cluster | Current views / visitors | Current tracked event rate | Previous views / visitors | Previous tracked event rate | Readout |
|---|---:|---:|---:|---:|---|
| German iron-cost page | 262 / 197 | 13 header clicks; 4.96% per view; 6.60% per visitor | 295 / 202 | 8 clicks; 2.71% per view; 3.47% per visitor | Persuasion signal improved, but this still misses in-page service CTAs |
| German infusion hub | 174 / 129 | 6 header clicks; 3.45% per view; 3.88% per visitor | 242 / 168 | 11 clicks; 4.55% per view; 4.76% per visitor | Traffic and measured intent declined |
| German iron blog article | 54 / 47 | 1 header click | 14 / 13 | 0 clicks | Discovery grew; sample is too small for a conversion verdict |
| All PRP/Vampire paths | 112 / 57 | 0 measurable custom events | 84 / 37 | 0 measurable custom events | Views grew 33%; absence of service-CTA tracking makes conversion unknown, not zero |

Current referrer snapshot: `google.com` and `google.de` contributed 1,221 pageviews, about 24.5% of recorded pageviews. This is useful for landing-page segmentation but cannot calculate Google CTR because Umami does not observe impressions.

### Umami access and automation path

- The tracker and public collection endpoint are live at `https://analytics.moneycoach.ai`.
- Unauthenticated statistics endpoints correctly return `401`.
- The official self-hosted API supports `POST /api/auth/login`, followed by bearer-token requests to website stats, pageviews, metrics and events endpoints. See [Umami authentication](https://docs.umami.is/docs/api/authentication), [website statistics](https://docs.umami.is/docs/api/website-stats), and [events](https://docs.umami.is/docs/api/events).
- The admin login is stored outside the repository in macOS Keychain service `codex-umami-admin`, account `admin`. The weekly collector exchanges it for a temporary bearer token and keeps that token in memory only.
- All recurring collection now uses read-only Umami HTTP API endpoints. Direct database access and database URL discovery are prohibited.
- The deployed legacy v2 API does not expose unique visitors per custom event. Until the server API is upgraded, use exact event-per-pageview rates and label event-per-visitor rates unavailable rather than zero.
- Durable least-privilege target: move the workflow to a view-only reporting user once it can see every required website. Never commit a token or password.

High-opportunity iron queries already receiving impressions include:

| Query | Clicks | Impressions | CTR | Position | Action |
|---|---:|---:|---:|---:|---|
| `eiseninfusion kosten` | 12 | 2,136 | 0.56% | 7.8 | Rewrite snippet promise and validate query/page match |
| `eisen infusion kosten` | 0 | 318 | 0% | 9.7 | Cover spelling variant naturally in body/FAQ |
| `was kostet eine eiseninfusion` | 0 | 149 | 0% | 6.4 | Put direct answer near top and in meta description |
| `eiseninfusion wirkung` | 0 | 121 | 0% | 29.7 | Publish evidence-led timing/expectations article |
| `eiseninfusion wann wirkung` | 0 | 121 | 0% | 26.6 | Same article; do not create a duplicate |
| `eiseninfusion wie oft` | 0 | 82 | 0% | 20.4 | Add frequency/dosing decision section with no universal prescription |
| `eiseninfusion während periode` | 0 | 46 | 0% | 8.0 | Refresh the existing women article |
| `eiseninfusion ablauf` | 0 | 29 | 0% | 10.9 | Improve main service page section/snippet |

High-opportunity PRP queries include:

| Query | Clicks | Impressions | CTR | Position | Action |
|---|---:|---:|---:|---:|---|
| `microneedling prp kosten` | 0 | 46 | 0% | 10.8 | Strengthen cost inclusion and comparison on existing page |
| `prp preise deutschland` | 0 | 46 | 0% | 10.5 | Add a transparent price explainer; avoid creating a national doorway page |
| `prp preis` | 0 | 41 | 0% | 11.0 | Improve pricing hub anchors and snippet |
| `prp behandlung preise` | 0 | 39 | 0% | 23.6 | Create one authoritative cost guide |
| `prp behandlung berlin` | 1 | 32 | 3.13% | 59.3 | Make existing PRP hub the canonical owner |
| `prp haare berlin kosten` | 0 | 33 | 0% | 23.3 | Deepen existing PRP hair page and link to price guide |
| `prp behandlung berlin preise` | 2 | 25 | 8.0% | 8.9 | Protect this high-intent foothold |
| `prp behandlung gesicht berlin` | 0 | 9 | 0% | 12.8 | Strengthen existing face child page, not a new duplicate |

## Non-Negotiable Medical And Search Guardrails

This is health content and therefore YMYL. Google explicitly gives more weight to strong trust signals for health topics and recommends clear authorship, expert review, original value, and people-first purpose. See [Google's people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

Every medical page must include:

- named physician author or reviewer with linked credentials;
- original publication and meaningful-update dates;
- primary or authoritative references appropriate to the exact claim;
- plain-language benefits, limitations, alternatives, contraindications, risks, and red flags;
- an explicit statement that suitability, dose, number of sessions, response, and coverage are individual;
- no guaranteed outcomes, universal ferritin thresholds, “detox” claims, guaranteed energy/hair recovery, or “risk-free” PRP language;
- no fake freshness changes and no mass-produced query variants;
- clinical and, for promotional claims or imagery, specialist legal review.

The [German Heilmittelwerbegesetz](https://www.gesetze-im-internet.de/heilmwerbg/) prohibits misleading advertising, including attributing effects a treatment does not have or implying certain success. Before/after and outcome marketing must receive specific legal review.

Iron content should reflect the need for diagnostic confirmation and careful monitoring. A current [AWMF guideline on preoperative anaemia](https://register.awmf.org/assets/guidelines/001-024k_S3_Diagnostik-Therapie-Praeoperative-Anaemie_2026-06.pdf) emphasizes diagnostic proof of iron deficiency, limitations of oral treatment, individualized choice, and monitoring for serious infusion reactions.

PRP content must present uncertainty honestly. A [2024 systematic review and meta-analysis](https://pubmed.ncbi.nlm.nih.gov/39013743/) found a possible hair-density benefit but rated the evidence low quality with high heterogeneity and publication bias.

## SERP Research Method

Research date: 2026-09-04. A locked local browser and Google's challenge page prevented a stable anonymous Google two-page capture. The competitor snapshots below use live anonymous Brave DE results and direct inspection of every relevant site, robots file, sitemap, page, and article cluster. Result order varies by engine, device, neighbourhood, and personalization; treat the rank as a reproducible competitor-discovery snapshot, not a Google rank report. Search Console remains the authority for Praxis Jona performance.

## `eiseninfusion berlin`: Competitor Landscape

### Two-page result snapshot

| Approx. order | Result | URL | Intent / note |
|---:|---|---|---|
| 1 | Praxis Dr Reiche | https://drreiche.de/eiseninfusion-berlin/ | Exact local service |
| 2 | Praxis Ariadne Klinkenberg | https://www.praxis-ariadne-klinkenberg.de/infusions-therapie/eiseninfusion/ | Exact service, price and Doctolib |
| 3 | AIVA Institut | https://aiva-institut.de/infusiontherapie-berlin/ | Generic infusion service |
| 4 | Jameda | https://www.jameda.de/ | Directory/local discovery |
| 5 | Doctify | https://www.doctify.com/de/ | Directory/local discovery |
| 6 | Praxis Jona | https://praxisjona.de/leistungen/eiseninfusion-kosten | Exact local cost and process page |
| 7 | Doctolib | https://www.doctolib.de/ | Directory/booking |
| 8 | Praxis Galerie | https://praxis-galerie.de/eisentherapie-berlin-prenzlauer-berg/ | Local service |
| 9 | Regenera | https://regenera-berlin.de/therapiens/chelattherapie/ | Canonical/slug mismatch |
| 10 | Berlin Allgemeinarzt | https://berlin-allgemeinarzt.de/infusion/ | Generic infusion service |
| 11 | HNO Help | https://www.hno-help.de/eisenmangel-ade/ | Educational article |
| 12 | Dr Emi | https://dr-emi.de/infusion-berlin/ | Generic infusion service |
| 13 | Praxis Jona infusion hub | https://praxisjona.de/leistungen/infusionstherapie | Potential same-query overlap |
| 14 | Dr Reiche infusion hub | https://drreiche.de/infusionen-berlin/ | Generic infusion service |
| 16 | CityPraxen | https://www.citypraxen.de/krankheiten/blut-immunsystem/eisenmangel-eisenmangelanaemie-ferritinmangel/ | Deep informational page |
| Page 2 | Sport Check-up | https://www.sport-checkup.de/eisen-infusion/ | Large iron knowledge cluster |
| Page 2 | ViveCura | https://vivecura.com/blog/eiseninfusion-ablauf-wie-lange-wie-oft | Large, fresh iron knowledge cluster |
| Page 2 | Mahakala | https://mahakala-center.com/de/infusionstherapie/ | Generic price/service page |
| Page 2 | Vitabliss | https://www.vitabliss.de/eiseninfusion-in-berlin | Dedicated local page omitted from sitemap |

### Competitor sitemap and content findings

| Competitor | Sitemap / relevant footprint | What it has built | Opening for Praxis Jona |
|---|---|---|---|
| ViveCura | [Sitemap](https://vivecura.com/sitemap.xml); about 48 German iron/ferritin URLs | Recent cluster spanning symptoms, ferritin, normal Hb, women, pregnancy, athletes, tablets versus infusion, costs, process, reactions and follow-up | Beat it on conservative evidence, clinician review, transparent uncertainty, and Berlin primary-care integration |
| Sport Check-up | [Sitemap index](https://www.sport-checkup.de/sitemap_index.xml); about 66 iron/ferritin URLs | Deep diagnostic, laboratory, symptom, athlete, pregnancy, safety, cost and preparation coverage | It is Hannover-based; build a smaller, stronger Berlin-local cluster |
| Dr Reiche | [Sitemap index](https://drreiche.de/sitemap_index.xml); two relevant service pages | Strong local match, process and follow-up, limited editorial depth | Win on transparent cost, safety, citations, FAQs, booking, and internal cluster |
| Klinkenberg | [Sitemap](https://www.praxis-ariadne-klinkenberg.de/sitemap.xml) | Lab prerequisites, explicit prices, follow-up, FAQ, Doctolib | Its ranking page appears omitted from sitemap; win technical completeness and authority |
| AIVA | [Sitemap](https://www.aiva-institut.de/sitemap.xml); one generic infusion URL | Broad infusion positioning | Exact iron intent and evidence are underdeveloped |
| Praxis Galerie | [Sitemap index](https://praxis-galerie.de/sitemap_index.xml); two relevant pages | Basic local service and FAQ | Limited cluster and citations |
| Vitabliss | [Sitemap](https://www.vitabliss.de/sitemap.xml); dedicated service absent from sitemap | Diagnosis, safety and FAQ | Technical omission and no supporting cluster |
| CityPraxen | [Sitemap](https://www.citypraxen.de/sitemap.xml) | Comprehensive single condition page | Dated appearance and weak conversion path |

Takeaway: most page-one direct clinics are thin. Praxis Jona can outperform them without matching the 48–66 URL content farms. The correct move is one clear local commercial owner plus six high-value, tightly interlinked decision-support assets.

## `prp behandlung berlin`: Competitor Landscape

### Two-page result snapshot

| Approx. order | Result | URL | Intent / note |
|---:|---|---|---|
| 1 | Jameda | https://www.jameda.de/leistungen/prp-behandlung/berlin | Directory/provider comparison |
| 2 | Kalia Lab | https://www.kalialab.de/behandlungen/prp-behandlung-berlin | Polished local skin/hair service |
| 3 | BellaDerma | https://www.belladerma.de/prp-therapie-berlin.html | Comprehensive local PRP hub |
| 4 | Injectablesbooking | https://injectablesbooking.de/spezialisten/berlin/prp-behandlung | Directory, price and reviews |
| 5 | Jameda hybrid PRP | https://www.jameda.de/leistungen/hyaluron-prp-behandlung/berlin | Directory/hybrid intent |
| 6 | DermaPraxisBerlin | https://berlindermapraxis.de/prp-behandlung | Thin exact local service |
| 7 | Beautified Berlin | https://www.beautified.berlin/behandlungen-preise | Transactional price page |
| 8 | IFUE | https://www.ifue-haartransplantation.de/prp-therapie/ | PRP hair-loss specialist |
| 9 | Skinwise Berlin | https://skinwise-berlin.de/platelet-rich-plasma/ | Skin and hair service |
| 10 | IFUE practice page | https://www.ifue-haartransplantation.de/praxis/ | Local supporting entity page |
| 11 | MKG Praxisklinik Dahlem | https://mkg-chirurg-berlin.de/de/behandlungen/ | Service category |
| 12 | Laserpraxis Dr Ihle | https://laserpraxis-berlin.de/haarausfall-behandlung/ | Hair-loss page mentioning PRP |

### Competitor sitemap and content findings

| Competitor | Sitemap / scale | What it has built | Opening for Praxis Jona |
|---|---|---|---|
| Kalia Lab | [302 sitemap URLs](https://www.kalialab.de/sitemap.xml) | Berlin PRP hub plus Vampire Lifting, hair, and eyes; excellent design, price, doctors, multilingual booking | Little dedicated PRP editorial depth; win on evidence and decision support |
| BellaDerma | [478 sitemap URLs](https://belladerma.de/sitemap.xml) | Local master page plus eyes, acne scars, hair loss and Vampire Lifting pages, price, FAQ and lead form | Beat it with clearer evidence limits, candidacy and cost inclusions |
| IFUE | [146 sitemap URLs](https://www.ifue-haartransplantation.de/sitemap.xml) | Strongest hair cluster: PRP/PRF/CGF, men/women, risks, price, process, causes, publications and physician authority | Match the cluster mechanics with more measured claims and integrated diagnostics |
| Skinwise | [Sitemap index](https://skinwise-berlin.de/sitemap_index.xml) | One compact PRP service with price, time, recovery and FAQ | Limited editorial cluster and static schema depth |
| DermaPraxisBerlin | No working standard sitemap found | One thin exact-match page with WhatsApp/contact | Easy depth and technical-quality win |
| Beautified | Empty robots; no standard sitemap found | PRP as a priced section on a broad treatment page | Win on independent intent ownership and trust |

Takeaway: the PRP SERP is fragmented among directories, facial aesthetics, hair loss, and orthopaedics. Praxis Jona must state which intent each URL owns. BellaDerma is the local architecture benchmark; IFUE is the hair topical-authority benchmark; Kalia is the conversion/design benchmark.

## The Winning Site Architecture

Do not change established URLs during this sprint unless Search Console proves a canonical problem.

| Existing URL | Single primary job | Primary query family | Required work |
|---|---|---|---|
| `/leistungen/eiseninfusion-kosten` | Main Berlin iron service/conversion page | Eiseninfusion Berlin, Kosten, Ablauf, Selbstzahler | CTR test, evidence references, clearer preparation, contextual cluster links |
| `/leistungen/infusionstherapie` | Broad vitamin/micronutrient infusion hub | Infusionstherapie Berlin, Vitamininfusion Berlin | Stop competing for the exact iron head term; point iron intent to cost page |
| `/blog/eiseninfusion-frauen-eisenmangel-vorteile` | Women/heavy-period educational asset | Eisenmangel Frauen, Periode, Haarausfall | Substantive refresh; narrow overbroad “benefits” framing |
| `/aesthetik/prp-behandlung` | Main skin/aesthetic PRP Berlin hub | PRP Behandlung Berlin, Eigenbluttherapie Berlin | Remove duplicated lead, add visible evidence/limitations, FAQ schema, contextual links |
| `/leistungen/prp-haarausfall` | Main German PRP hair conversion page | PRP Haare Berlin, PRP Haarausfall Berlin | Deepen diagnostics, evidence, cost inclusions, alternatives and iron/ferritin link |
| `/aesthetik/prp-behandlung/prp-gesicht` | Face intent owner | PRP Gesicht Berlin | Add candidacy, aftercare, limitations and local proof |
| `/aesthetik/prp-behandlung/prp-augenregion-bei-dunklen-augenringen` | Eye intent owner | PRP Augenringe Berlin | Add differential/candidacy and realistic limits |
| `/aesthetik/preise` | Cross-service price owner | PRP Preis, PRP Kosten | Add anchored cost explainer links back to intent pages |

### New or materially refreshed editorial assets, in priority order

| Priority | Working title | URL recommendation | Intent | Format | Conversion bridge |
|---:|---|---|---|---|---|
| 1 | Eiseninfusion: Wann setzt die Wirkung ein – und was ist realistisch? | `/blog/eiseninfusion-wirkung-wann` | Existing 500+ combined timing/effect impressions | Answer-first evidence article | Diagnostic consultation / iron service |
| 2 | Eisentabletten oder Eiseninfusion? Unterschiede, Grenzen und ärztliche Entscheidung | `/blog/eisentabletten-oder-eiseninfusion` | Consideration | Comparison table + decision guide | Iron service |
| 3 | Eiseninfusion: Nebenwirkungen, Risiken und wann Sie Hilfe suchen sollten | `/blog/eiseninfusion-nebenwirkungen-risiken` | Safety / high trust | Risk guide with red flags | Consultation, not hard sell |
| 4 | Existing women article: heavy periods, ferritin, hair loss and pregnancy boundaries | Keep existing URL | Existing rankings and links | Major refresh | Diagnostics and iron service |
| 5 | PRP-Behandlung: Was die Evidenz zeigt – und was nicht | `/blog/prp-behandlung-evidenz` | Trust / consideration | Evidence explainer | Skin or hair hub based on intent |
| 6 | PRP-Kosten in Berlin: Was ist enthalten und wie viele Sitzungen sind üblich? | `/blog/prp-kosten-berlin` | High commercial intent | Transparent cost guide | PRP hub, hair page, pricing hub |
| 7 | Nach PRP: Vorbereitung, Ausfallzeit und Nachsorge | `/blog/prp-nachsorge-vorbereitung` | Implementation / decision | Checklist | PRP booking |
| 8 | PRP, Microneedling, PRF und CGF: Begriffe und Unterschiede | `/blog/prp-prf-cgf-microneedling-unterschied` | Comparison / informational | Neutral glossary-comparison | Appropriate service only |

Do not create separate posts for every spelling variant or every “how often / how long / when” phrase. One excellent page should satisfy the whole intent family.

## Standard For Every New Article

Every brief must define one primary query family, one canonical URL, one conversion bridge, and the pages that will link in and out.

The cornerstone articles in this sprint must use the `research-backed-feature-article` workflow. This applies at minimum to the iron effect/timing article, the tablets-versus-infusion comparison, the iron safety article, and the PRP evidence article. Each one requires a research dossier before drafting:

| Research field | Required record |
|---|---|
| Source | Title, direct URL, authors/organization and publication year |
| Supported claim | The single exact claim the source supports |
| Evidence type | Guideline, systematic review, randomized trial, cohort, framework or authoritative public guidance |
| Limitation | Population, setting, study quality, heterogeneity, indirectness or recency |
| Approved wording | “The study found,” “the evidence suggests,” or other calibrated language |
| Placement | Exact article section and paragraph where the inline citation belongs |

Preferred evidence order: peer-reviewed papers and publisher pages; current medical guidelines; government or professional-body guidance; reputable research organizations with transparent methodology. General health explainers may help discover primary sources but should not carry important efficacy or safety claims.

Cornerstone structure:

1. Open with the patient problem and a direct answer.
2. Explain the treatment or decision in plain language.
3. State the research-backed thesis and cite its foundational source in the same paragraph.
4. For each major claim: patient question → clinical principle → supporting citation → practical implication.
5. Explain individual variation, alternatives and evidence limitations.
6. Include a visible **“Was wir nicht behaupten”** section.
7. Close with a medically appropriate next step, not a guaranteed-outcome sales pitch.
8. End with an editorially useful references list while retaining paragraph-level citations.
9. Extract one GBP angle, one physician-video answer, one carousel and one newsletter angle from the strongest evidence after publication.

Required content blocks:

1. Direct answer in the first 80–120 words.
2. “What this page can and cannot tell you.”
3. Physician author/reviewer block with credentials.
4. Practical Berlin/local context only when it genuinely helps the patient.
5. Evidence summary with claim-level references and an honest certainty statement.
6. Candidacy, exclusions, alternatives, risks, and red flags.
7. Transparent cost mechanics where relevant.
8. Five to eight useful FAQs visible on the page; structured data only when it exactly matches visible content.
9. One primary CTA and one softer consultation/contact CTA.
10. Three to six contextual internal links, not a generic card dump.
11. Original clinic photography, diagram, table, checklist, or physician commentary.
12. `BlogPosting`/`Article`, breadcrumb, author identity, `datePublished`, and `dateModified` validation.

## Conversion And Attribution Specification

Until Doctolib completion can be imported, the north-star event is `booking_outbound`.

Current state: `button-in-header` and `button-in-home-hero` are the only custom events present in the latest 28-day Umami data. They provide a partial booking-intent signal, but they do not identify service, placement beyond those two labels, insurance path, appointment motive, or actual Doctolib outbound navigation.

| Event | Fires when | Required properties |
|---|---|---|
| `booking_cta_click` | Any booking CTA is activated | `page_path`, `placement`, `service`, `language` |
| `booking_modal_open` | Insurance/booking modal opens | `page_path`, `service`, `appointment_motive` |
| `booking_insurance_selected` | User selects insurance path | `page_path`, `service`, `insurance_sector` |
| `booking_outbound` | User leaves for Doctolib | All above plus `destination`, `cta_copy` |
| `phone_click` | Mobile telephone link is used | `page_path`, `service`, `placement` |
| `email_click` | Email link is used | `page_path`, `service`, `placement` |

Engineering requirements:

- define event names and properties once, not separately in each button;
- write focused tests before changing the mission-critical booking flow;
- preserve UTM/service identifiers through every redirect where possible;
- build a weekly funnel: landing page → CTA → modal → insurance → outbound;
- report by organic, GBP, directory, social, and paid source;
- never send health details or personally identifiable information into analytics.

## Local Exposure Plan

Google's [local ranking guidance](https://support.google.com/business/answer/7091) says complete information, review responses, photos, links, reviews, relevance, distance, and prominence matter. Execute the following as one entity-cleanup program:

- Verify the exact practice name, primary category, secondary categories, address, hours, holiday hours, phone, website, appointment link, and services in Google Business Profile.
- Resolve the observed phone conflict: the website uses `+49 30 40054273`, while some telephone directories show `030 40 05 42 74`.
- Add separate accurate GBP services for Eiseninfusion, PRP/Eigenblut for the face, and PRP for hair only if each is actually offered and policy-compliant.
- Publish two useful GBP updates per week, derived from reviewed site content; do not use exaggerated claims.
- Upload four new real clinic/physician/process photos per week with descriptive filenames and natural captions.
- Ask patients for honest reviews through the existing `/qr-google-review` route without incentives, gating, or suggested wording; reply professionally without exposing health information.
- Claim and normalize Doctolib, Jameda, Doctify, and relevant directory profiles. Treat directories as acquisition channels because they occupy the SERP, not merely as competitors.
- Build local links and referral mentions through medical colleagues, Berlin women's-health partners, dermatology/hair specialists, laboratories, reputable local publications, and relevant professional associations. No paid link schemes.

## Fast Paid-Demand Option

Organic authority will not fully mature in 31 days. If budget and legal review are available, run a controlled 14-day Google Search pilot:

- Berlin radius only; clinic-hours bid adjustments after enough data;
- exact and phrase match around `eiseninfusion berlin`, `eiseninfusion berlin kosten`, `prp behandlung berlin`, and `prp behandlung berlin preise`;
- separate iron and PRP campaigns and landing pages;
- negative keywords for jobs, DIY, wholesale, training, devices, and irrelevant orthopaedic PRP where not offered;
- start at a capped €30–€60/day total, then move budget only on measured qualified booking outbound rate;
- no outcome guarantees or sensational health claims;
- pause any ad group after sufficient clicks with zero qualified booking intent; do not optimize to raw traffic.

## The 31-Day Execution Calendar

| Day | Status | Hard deliverable | Owner | Success signal |
|---:|---|---|---|---|
| 1 | In progress | Freeze this baseline, keyword-to-URL map, targets and owners | Growth | One agreed scoreboard; no competing plans |
| 2 | Not started | Write tests and implement booking funnel events across all service CTAs | Eng | Valid events include service, placement, language and insurance; no PII |
| 3 | Not started | Build analytics funnel and source dashboard; verify outbound events in production | Eng/Growth | A test journey appears from CTA to Doctolib outbound |
| 4 | Not started | Fix duplicated PRP hub lead; add/validate visible FAQ schema and service schema | Eng/Clinical | One H1/lead, valid markup, unchanged visible truth |
| 5 | Not started | Map query overlap between iron cost and infusion pages; rewrite internal anchors | SEO/Eng | Exact iron anchors favor cost page; generic infusion anchors favor hub |
| 6 | Not started | Rewrite/test title and meta description for `eiseninfusion kosten`; retain price and Berlin | SEO/Clinical | Snippet directly answers price, location and medical qualification |
| 7 | Not started | Audit GBP, Doctolib, Jameda, Doctify and top directories; fix NAP discrepancy | Local | Priority profiles consistent and claimed |
| 8 | Not started | Clinical research/brief for iron effect/timing article | Clinical/Content | Approved sources, claims, outline and red flags |
| 9 | Not started | Publish iron effect/timing article and contextual links | Content/Eng | Live, reviewed, indexable, linked from both iron pages |
| 10 | Not started | Distribute article: GBP post, physician LinkedIn, Instagram carousel/Reel, newsletter block | Growth | Four tracked distribution links live |
| 11 | Not started | Publish/refresh iron tablets-versus-infusion decision guide | Clinical/Content | Comparison is balanced, sourced and routes to consultation |
| 12 | Not started | Refresh existing women/iron article; cover periods and pregnancy boundaries carefully | Clinical/Content | Existing URL improved without overlap/new duplicate |
| 13 | Not started | Create downloadable one-page “Questions for your iron consultation” PDF | Design/Clinical | Useful, non-diagnostic, linkable PDF with source date |
| 14 | Not started | Launch paid search pilot if approved; otherwise build campaign ready for approval | Growth | Separate campaigns, negatives, UTMs and conversion events |
| 15 | Not started | Week-2 measurement review; inspect pages/queries, CTR and booking funnel | Growth | Decisions recorded; no reaction to one-day rank noise |
| 16 | Not started | Clinical research/brief for PRP evidence article | Clinical/Content | Evidence certainty and limitations approved |
| 17 | Not started | Publish PRP evidence article; link from skin and hair hubs | Content/Eng | One neutral authority asset supports both intents |
| 18 | Not started | Deepen PRP hair page: diagnostics, alternatives, cost inclusions, evidence and ferritin link | Clinical/Eng | Page clearly owns hair intent and cross-links iron diagnostics |
| 19 | Not started | Publish PRP cost guide; link all price cards and relevant pages | Content/Eng | Cost intent has one canonical editorial owner |
| 20 | Not started | Improve PRP face and under-eye child pages with candidacy, limits, aftercare and local proof | Clinical/Content | Each page is distinct, substantial and non-duplicative |
| 21 | Not started | Publish PRP preparation/aftercare guide | Clinical/Content | Checklist answers downtime and red flags without promises |
| 22 | Not started | PRP distribution burst: GBP, directory updates, short video, carousel and email | Growth | Every asset uses tracked URL and reviewed claims |
| 23 | Not started | Add contextual cluster links and breadcrumbs across all iron/PRP pages | SEO/Eng | Every new asset has 3+ relevant incoming internal links |
| 24 | Not started | Validate sitemap, canonicals, hreflang, schema, mobile render and indexability | Eng/SEO | All priority URLs pass automated and manual checks |
| 25 | Not started | Submit new/updated URLs for recrawl; update Bing/IndexNow if configured | SEO | Submission log complete; sitemap has accurate dates |
| 26 | Not started | Local proof day: new clinic photos, service descriptions, review request workflow | Local | Four photos live; ethical review flow active |
| 27 | Not started | Authority outreach: 15 relevant Berlin/medical/referral prospects with tailored pitches | PR/Founder | 15 quality contacts; no bulk link spam |
| 28 | Not started | Publish physician Q&A video/article addressing the top real iron or PRP objection | Clinical/Growth | One original expert asset embedded and repurposed |
| 29 | Not started | Evaluate paid pilot and directories by qualified outbound rate, not clicks | Growth | Keep/kill/scale decision documented by service |
| 30 | Not started | Run full 28-day GSC and analytics comparison; inspect cannibalization and indexing | SEO/Data | Query/page deltas and funnel rates captured |
| 31 | Not started | Executive review and next 60-day backlog; refresh this artifact | Team | Honest verdict, lessons, next owners and dates recorded |

## Weekly Publishing And Distribution Cadence

Every substantial asset becomes a small distribution package after clinical approval:

- one primary website article or refresh;
- one GBP post pointing to the relevant page;
- one 30–60 second physician video answering one exact question;
- one carousel or static explainer;
- one newsletter paragraph;
- one directory/service-profile improvement where appropriate;
- one outreach angle for a relevant local or medical partner.

The goal is not identical cross-posting. The website carries the full evidence; GBP carries local utility; social carries one memorable answer; email carries a reason to return; partner outreach carries original expertise.

## Quality Gates Before Deployment

- [ ] Search intent and canonical owner are written in the brief.
- [ ] Clinical reviewer approved every medical claim.
- [ ] Legal review completed when claims, testimonials, pricing promotions, or before/after material warrant it.
- [ ] Title, description, H1, intro and CTA are unique.
- [ ] Risks, limits, alternatives and red flags are visible.
- [ ] Sources are authoritative and support the exact adjacent claim.
- [ ] Author/reviewer credentials and dates are visible.
- [ ] Existing related URLs were checked for cannibalization.
- [ ] Three or more contextual incoming internal links are planned.
- [ ] Schema matches visible content and passes validation.
- [ ] Images are original/licensed, compressed, descriptive and not misleading.
- [ ] Booking, phone, email and outbound events pass focused tests.
- [ ] Canonical, hreflang, indexability, mobile layout and sitemap entry are correct.
- [ ] Production URL is manually verified after deployment.

## Weekly KPI Scoreboard

| Review date | Organic clicks | Impressions | CTR | Iron clicks / CTR | PRP clicks / CTR | Booking CTA | Insurance selected | Booking outbound | Calls | Notes / decision |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| 2026-09-04 baseline | 475 | 22,260 | 2.13% | 136 / 1.99% | 6 / 0.43% | 171 generic Umami events | N/A | N/A | N/A | 4,980 Umami pageviews; instrumentation first |
| 2026-09-07 |  |  |  |  |  |  |  |  |  |  |
| 2026-09-14 |  |  |  |  |  |  |  |  |  |  |
| 2026-09-21 |  |  |  |  |  |  |  |  |  |  |
| 2026-09-28 |  |  |  |  |  |  |  |  |  |  |
| 2026-10-04 |  |  |  |  |  |  |  |  |  |  |

## Decision Rules

- If an existing page is already positions 4–10 with impressions but weak CTR, improve the page/snippet before creating another URL.
- If two Praxis Jona URLs alternate for one query, first clarify their intent, anchors and internal hierarchy. Do not redirect or canonicalize blindly.
- If a new page is not indexed after 10–14 days, inspect discovery, internal links, canonical, rendered content and duplication before publishing more.
- If a page gains impressions but no qualified booking intent, inspect intent and CTA before celebrating traffic.
- If PRP head-term movement is slow but long-tail impressions grow, keep the cluster strategy; authority compounds beyond 31 days.
- If paid search produces clicks without qualified outbound events, stop or rewrite the ad/landing-page match.
- If clinical review cannot keep pace, ship fewer pages. Never trade medical trust for publishing velocity.

## Execution Log

- **2026-09-04 — Durable analytics + agent memory:** added the recurring growth-agent runbook, a tested aggregate-only Umami API collector (`npm run umami:fetch`), a combined GSC + Umami collection command (`npm run growth:collect`), and explicit separation between Google SERP CTR and on-site CTA conversion rates. Direct database access was retired; the collector authenticates through the self-hosted API using a Keychain credential and makes read-only requests.

| Date | Work item | Status | Production URL / PR | Reviewer | Measurement note |
|---|---|---|---|---|---|
| 2026-09-04 | Competitor SERP, sitemap and content research | Complete | This document | Internal research | Brave snapshot; direct site verification |
| 2026-09-04 | Fresh Search Console baseline | Complete | `data/gsc/raw/search-analytics-latest.json` | Internal data | 2026-08-06 through 2026-09-02 |
| 2026-09-04 | Self-hosted Umami access and aggregate baseline | Complete | `analytics.moneycoach.ai` | Internal data | Historical baseline: 4,980 views, 1,755 visitors, 171 generic events; future collection is API-only |

## Decision Log

| Date | Decision | Rationale | Revisit when |
|---|---|---|---|
| 2026-09-04 | Keep `/leistungen/eiseninfusion-kosten` as the main exact iron local/cost owner | It already earns high-intent visibility and clicks | Query/page data shows sustained displacement |
| 2026-09-04 | Keep `/aesthetik/prp-behandlung` as the main skin/aesthetic PRP Berlin owner | Avoid a new generic duplicate | A materially different intent is proven |
| 2026-09-04 | Measure qualified Doctolib outbound as the interim north star | Completed booking is not observable in current code | A reliable booking-completion import exists |
| 2026-09-04 | Cap first sprint at 6–8 strong German assets/refreshes | Medical review and originality are the limiting resources | Clinical throughput supports more without quality loss |
| 2026-09-04 | Require `research-backed-feature-article` workflow for cornerstone medical content | Ensures claim-level sources, calibrated wording, explicit limitations and reusable distribution angles | A stronger clinical editorial standard replaces it |

## Primary Sources And Reference Set

- [Google: Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Google: LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google: Sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google Business Profile: Improve local ranking](https://support.google.com/business/answer/7091)
- [German Heilmittelwerbegesetz](https://www.gesetze-im-internet.de/heilmwerbg/)
- [AWMF: Diagnostik und Therapie der präoperativen Anämie, 2026](https://register.awmf.org/assets/guidelines/001-024k_S3_Diagnostik-Therapie-Praeoperative-Anaemie_2026-06.pdf)
- [PubMed: PRP for androgenetic alopecia systematic review/meta-analysis, 2024](https://pubmed.ncbi.nlm.nih.gov/39013743/)
- [Praxis Jona iron service](https://praxisjona.de/leistungen/eiseninfusion-kosten)
- [Praxis Jona infusion hub](https://praxisjona.de/leistungen/infusionstherapie)
- [Praxis Jona PRP hub](https://praxisjona.de/aesthetik/prp-behandlung)
- [Praxis Jona PRP hair service](https://praxisjona.de/leistungen/prp-haarausfall)

---

The aggressive advantage is not publishing the most pages. It is combining Praxis Jona's existing page-one iron visibility, transparent pricing, medical credibility, local entity signals, fast implementation, and measured conversion into a system competitors have not assembled in one place.
