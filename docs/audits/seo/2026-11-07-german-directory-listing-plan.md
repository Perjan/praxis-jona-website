# German Doctor And Aesthetic Directory Listing Plan

Research date: 2026-11-07. Environment: live third-party sites and this repository. No local or preview site was used. Nothing was submitted, claimed or paid.

**Execution:** [MCW-630](https://linear.app/moneycoach/issue/MCW-630/praxis-jona-claim-or-create-profiles-on-german-doctor-and-aesthetic) holds the field pack, owner inputs and advertising rules. Each row below has one subtask. Hours and team changes on 2027-01-04 are in [MCW-658](https://linear.app/moneycoach/issue/MCW-658/all-live-listings-change-to-the-2027-hours-and-team-on-4-january).

**Evidence:** "Operator" means the directory's own page. "Third-party" means another source. "Unknown" means not verified. Most directories do not publish their form fields before login, so this report does not state them. The requirements for a form behind a login must be recorded in its subtask when they are seen.

## Directories

| Issue | Directory | Type | Priority | Current state | Cost | Evidence |
|---|---|---|---|---|---|---|
| MCW-631 | Doctolib | Medical | High | Live; hours wrong on 2026-09-15 | Existing account | Audit |
| MCW-632 | jameda | Medical | High | Exists; looked unclaimed on 2026-09-15 | Basic free | Audit, third-party |
| MCW-633 | Arzt-Auskunft | Medical | High | Exists; Monday hours wrong | Basic free | Operator, audit |
| MCW-634 | sanego | Medical | High | Unknown | Basic free | Operator |
| MCW-635 | DocInsider | Medical | Medium | Unknown | Basic free | Operator |
| MCW-636 | Doctify | Medical | Low | Not verified | Unknown for Germany | Third-party |
| MCW-637 | medführer | Medical | Low | Unknown | Free listing | Operator |
| MCW-638 | KV Berlin Arztsuche / 116117 | Official | High | Not checked | Expected free | Third-party |
| MCW-639 | DGBT | Aesthetic society | High, owner decision | No profile found | 100 € + 170 € a year | Operator |
| MCW-640 | Estheticon | Aesthetic | Medium | None seen; partial check | Basis free | Operator |
| MCW-641 | injectablesbooking.de | Aesthetic | Medium | None seen; partial check | Profile free; prices unseen | Operator |
| MCW-642 | WhatClinic | Aesthetic | Low | Unknown | Unknown | Listing pages only |
| MCW-643 | RealSelf | Aesthetic | Low | Unknown | Unknown | Not verified |
| MCW-644 | DGÄM | Aesthetic society | Low | Unknown | Unknown | Not verified |
| MCW-645 | IGÄM | Aesthetic society | Low | Unknown | Unknown | Not verified |
| MCW-646 | Merz Aesthetics Arztsuche | Manufacturer | Low | Unknown | Unknown | Third-party |
| MCW-647 | IBSA (Profhilo) | Manufacturer | Low | No finder found | Unknown | Not verified |
| MCW-648 | Croma (PhilArt) | Manufacturer | Low | Finder not confirmed | Unknown | Third-party |
| MCW-649 | Google Business Profile | Local | High | Claimed | Free | Audit |
| MCW-650 | Apple Business Connect | Local | High | Place exists; claim unknown | Free | Third-party |
| MCW-651 | Bing Places | Local | Medium | Unknown | Free | Third-party |
| MCW-652 | Gelbe Seiten | Local | High | Exists; no hours or website URL | Basic free | Operator, checked 2026-11-07 |
| MCW-653 | Das Örtliche | Local | High | Wrong phone on 2026-09-15 | Standard free | Audit, third-party |
| MCW-654 | Das Telefonbuch | Local | Medium | Not checked | Standard free | Third-party |
| MCW-655 | golocal | Local | Medium | Entry likely | Free | Third-party |
| MCW-656 | 11880.com | Local | Low | Not checked | Free form | Third-party |
| MCW-657 | Yelp Germany | Local | Low | Not checked | Claim free | Third-party |

## Left Out

| Directory | Reason |
|---|---|
| FOCUS Arztsuche | Third-party source says Arzt-Auskunft feeds it |
| Weisse Liste / AOK | No self-listing route found |
| Apotheken Umschau, netdoktor | No self-listing route found |
| Ärztekammer Berlin | No public search confirmed; nothing to claim |
| clickdoc | Tied to a competing booking product; no operator signup page found |
| meinestadt.de | No self-service route found |
| DGPRÄC, VDÄPC, DGÄPC | Third-party and society sources show that only plastic-surgery specialists can join |
| sanoplast.de, Treatwell | Surgeon or salon focus is likely; not verified |
| Bookimed | Medical-tourism referral platform; wrong audience |
| docaesthetic.com | Operator page could not be verified; it appeared to be in preview |

## Corrections To Earlier Records

- MCW-620 shows only the hours that end on 2026-12-20. Use the hours in MCW-630.
- MCW-620 adds "ab" to PRP prices. `app/components/pricing/pricingData.ts` shows fixed PRP prices.
- MCW-620 keeps Frau Buhrman in its staffing note. The site announcement says she leaves on 2026-12-31 and spells the name "Buhrmann". The team page spells it "Buhrman".

## Limits

- jameda could not be opened on 2026-11-07. Its state comes from the 2026-09-15 audit.
- Absence of a profile is confirmed for no directory. Several checks were partial.
- This report is not legal advice. MCW-630 requires a legal check of aesthetic text before publication.
