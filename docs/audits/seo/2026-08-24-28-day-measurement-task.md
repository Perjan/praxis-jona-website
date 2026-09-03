# 28-Day Measurement Task (copy)

**This is a reference copy, not the live file.** The scheduler reads from
`~/.claude/scheduled-tasks/praxis-jona-seo-28-day-check/SKILL.md`, which is
outside the repository and not version controlled. Editing this copy does not
change what runs; it exists so the prompt survives if that directory is lost,
and so anyone else on the project can see what is scheduled and why.

- **Fires:** once, 23 September 2026, 09:00 Europe/Berlin
- **Baseline it compares against:** `data/gsc/baselines/playbook-baseline-2026-08-21.json`
  (25 Jul – 21 Aug 2026 — 22 queries, 4,165 impressions, 14 clicks, 0.34% CTR)
- **Why that date:** GSC lags two days, so a 23 Sep fetch covers 25 Aug – 21 Sep,
  which begins the day after the changes went live
- **Runs:** `npm run gsc:fetch && npm run gsc:compare`
- **Caveat:** scheduled tasks only run while the app is open; otherwise the task
  fires on next launch. The fetch needs valid gcloud application-default
  credentials (`gcloud auth application-default login` if it 401s).

---

---
name: praxis-jona-seo-28-day-check
description: Measure the 28-day results of the Aug 2026 Praxis Jona SEO work against its captured baseline
---

Measure the 28-day results of SEO work done on praxisjona.de in late August 2026. You have no memory of that session, so everything you need is below.

## Repository
`/Users/perjanduro/Developer/praxis-jona-website` — work from there.

## What to run

```
npm run gsc:fetch && npm run gsc:compare
```

`gsc:fetch` pulls live Google Search Console data (authenticates via the user's gcloud application-default credentials; if it 401s, tell the user to run `gcloud auth application-default login`). `gsc:compare` diffs the fresh pull against the captured baseline at `data/gsc/baselines/playbook-baseline-2026-08-21.json`.

The baseline covers 25 Jul – 21 Aug 2026, before any changes: **22 tracked queries, 4,165 impressions, 14 clicks, 0.34% CTR**. Changes went live 23–24 August, so this run's window should be almost entirely post-change.

## What was changed, so you can interpret the diff

- **`/botox-preise`** — biggest single bet. Had 4,555 impressions at 0.09% CTR from position 21.8. Title now names Botox using the legally-approved `Botulinumtoxin („Botox“)` construction, states a price, and the page gained 12 anchored per-zone cost sections (Stirnfalten, Zornesfalte, Krähenfüße, etc. plus 2/3/4-zone combinations).
- **`/leistungen/eiseninfusion-kosten`** — ranked for "eiseninfusion kosten" (1,579 impressions, position 10.6) while neither title nor description mentioned cost. Both now do, leading with "ab 150,95 € nach GOÄ". Cost section also deepened.
- **`/aesthetik/preise`** — was position 48 with only a price list; gained five substantive FAQs and FAQPage schema.
- **English PRP pages** — titles now signal cost ("PRP Face Treatment Cost").
- **Hyperhidrosis page** — expanded from three sentences to real clinical depth; title now leads with "Starkes Schwitzen".
- Structural: one consistent `#organization` schema entity, GeoCoordinates/openingHours/Physician schema added, hreflang gaps closed, homepage JSON-LD cut from 113 KB to 67 KB.

## How to read the results — this matters

1. **Judge CTR first.** Ranking movement needs longer than one reporting cycle. A query whose position is flat but whose CTR rose is a success; do not report it as a failure.
2. **`/botox-preise` is the dominant variable.** It alone accounts for most of the projected range. If its CTR moved meaningfully, the programme worked.
3. **Watch `/leistungen/infusionstherapie` vs `/leistungen/eiseninfusion-kosten` on the query "eiseninfusion berlin".** They compete: infusionstherapie ranked 5.1 with 51 clicks, eiseninfusion-kosten 14.0 with 12. That pair is the practice's best non-brand asset. Report which way it moved but **do not recommend forcing a resolution** — it was deliberately left to settle on its own.
4. Expected outcome was **1.6x to 2.5x** on the tracked queries, not more. If it came in lower, say so plainly rather than finding a flattering framing.

## Deliverable

Update the existing playbook artifact at `https://claude.ai/code/artifact/d61a5140-99f7-46b2-9434-81a420d45823` — pass that URL as the `url` parameter so it updates in place rather than creating a new one. Add a results section showing the per-query before/after and an honest verdict on whether the work paid off.

Then tell the user, in a short message: what moved, what did not, and what the data says to do next. Lead with the actual number, not the process.

## Still outstanding, if they ask

GLP-1 page title (a positioning decision only the practice can make — the current heading is test-locked and deliberate), the English microneedling pages at position 69–80 (need content investment), the English-site scope question, and a Google Business Profile audit to pair with the local schema that went live in August.