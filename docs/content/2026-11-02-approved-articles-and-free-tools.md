# Approved articles and free tools

Source: `Perjan-Nur-Blogbeitraege-und-Tools-2026-10-31.zip`.

The owner confirmed Jonida's completed review in the implementation chat on November 2, 2026. This confirmation applies to the supplied German material. English content translates that material. The actual medical review date was not supplied. No medical review date is displayed or inferred.

The import contains 17 German articles, 17 English translations, and three bilingual tools. German source prose and medical decision rules remain intact. Prototype links now resolve to website routes. Editorial handoff notes are excluded from public pages.

Publication dates in article metadata identify this content increment. They do not identify the medical review date. The pages are not live until this branch is deployed to production.

## Routes and source files

`app/free-tools/article-pairs.json` records all article titles and reciprocal slugs. `app/free-tools/catalog.ts` records the tool hierarchy:

| German | English |
| --- | --- |
| `/free-tools` | `/en/free-tools` |
| `/free-tools/eisenstatus-check` | `/en/free-tools/iron-status-check` |
| `/free-tools/eisentabletten-check` | `/en/free-tools/iron-tablets-check` |
| `/free-tools/perimenopause-check` | `/en/free-tools/perimenopause-check` |

`app/free-tools/clinical/iron.mjs` and `perimenopause.mjs` retain the source decision engines without changes. Their original tests are retained in `tests/free-tools/*.node-test.mjs`. Only the test import paths changed. English output uses `clinical/english.json`; option values and clinical branches remain shared.

Health answers remain in React state. The tools use no server action, API request, storage, analytics event, or URL parameter for answers or results. Reset clears the state. Input changes clear previous results. The normal site pageview and existing booking tracking remain separate. No new analytics events were added.

## Verification

Run `node --test tests/free-tools/*.node-test.mjs` for the supplied clinical checks. Run `npx vitest run tests/free-tools` for integration and field parity. Run `npx playwright test tests/e2e/free-tools.spec.ts` for browser flows. The normal `npm test` command includes the supplied clinical checks.

## SEO/GEO handoff

The requested follow-up chat must use `/Users/perjanduro/.agents/skills/seo-geo/SKILL.md` and discover OpenSEO tools. It must use real Search Console data for `sc-domain:praxisjona.de`. It must distinguish Search Console search CTR from Umami on-site conversion rates. Read the growth runbook and living growth plan before collecting data. If OpenSEO is unavailable, report that limitation and use the existing authenticated GSC workflow for real data.

Improve page titles, descriptions, article tags, internal links and eligible structured data from measured query intent. Preserve the approved medical meaning and the `/free-tools` hierarchy. Do not invent search volume, medical review dates, keyword metrics, or clinical claims. New pages have no production search history until deployment; use related existing page and query data where needed. Store any audit in `docs/audits/seo/` and update that directory's index.
