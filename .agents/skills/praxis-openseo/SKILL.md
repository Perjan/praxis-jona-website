---
name: praxis-openseo
description: Use OpenSEO for Praxis Jona SEO, GEO, local search, keyword, competitor, backlink, AI visibility, and Google index-status work. Use with the growth runbook for recurring growth runs and before any paid OpenSEO research on praxisjona.de.
---

# Praxis Jona OpenSEO workflow

This skill connects OpenSEO to the repository's growth process. The rules, cadence, and metrics are in `docs/audits/seo/2026-09-04-growth-agent-runbook.md`. Read that runbook first.

## Source of truth

| Data | Source |
|---|---|
| Project ID, business identity, local grid baseline | `config/openseo.config.json` |
| 28-day baselines, title candidates, KPI scoreboard | `npm run growth:collect` |
| Booking conversions (`booking-cta-click`) | Umami |
| Keyword volume, SERPs, competitors, backlinks, Maps ranks, AI answers | OpenSEO |
| Google index status and selected canonicals | OpenSEO `inspect_urls` |
| Business context and research log | OpenSEO project context |
| Audit reports and experiment history | `docs/audits/seo/` and `data/gsc/implementation-history.jsonl` |

## Start of every run

1. Call `whoami` and read the credit balance. If the connector is not available, go to "Without the connector".
2. Read `projectId` from `config/openseo.config.json`, then call `get_project_context`.
3. Read the research log. Do not buy research that the log already covers, unless its stated repeat date has passed.
4. Compare the context with the repository. Propose corrections to out-of-date notes.

## Choose the tool

| Question | Use | Credits |
|---|---|---|
| Is a page indexed? Which canonical did Google select? | `npm run seo:openseo-plan`, then `inspect_urls` for each batch | Free |
| Quick Search Console check between baselines | `get_search_console_performance` | Free |
| What is wrong with the site, and what comes first? | OpenSEO `seo-audit` skill | Paid |
| Which keywords should a page or a new page target? | `keyword-research`, then `keyword-clustering` | Paid |
| Who wins the search results, and why? | `competitive-landscape`, `competitor-analysis` | Paid |
| Where do we rank on Google Maps? | `local-seo` skill, `get_local_rank_grid` | Paid per grid point |
| Which sites could link to us? | `link-prospecting` skill | Paid |
| How do AI answers show the practice? | `ai-prompt-research`, `ai-visibility-audit` skills | Paid |

Treat a tool as paid unless its description says that it uses no credits.

## Spend rules

- Get approval before you spend credits, unless the request already includes that research.
- Before an approved spend, use the estimate tool if one exists: `estimate_ai_visibility_cost` or `estimate_rank_tracker_cost`. For a rank grid, calculate `gridSize` squared.
- Do not start a schedule or a recurring tracker without explicit approval, because it spends credits again.
- After a paid run, add a summary with `update_project_context` and `appendResearchLog`. Include the date and the earliest date to repeat it.

## Keep results comparable

- Use only the repository pipeline for baselines and KPI comparisons. OpenSEO limits filtered results to the top 1,000 rows and has a different data lag.
- Do not use `get_search_opportunities` or other GA4 tools. This project has no GA4 connection, and Umami measures conversions.
- For a local grid comparison, use `localGridBaseline` and `business` from the config without changes.
- Keep Maps ranks separate from organic Search Console rankings. A grid is a point-in-time diagnostic.
- Search results are dated observations, not permanent facts.

## Boundaries

- Do not use `submit_indexnow_urls`. `scripts/seo/submit-recrawl.mjs` already submits with the repository's IndexNow key, and a second key adds a host file for no benefit.
- `inspect_urls` reads stored status only. It does not request a crawl or test the live URL.
- Do not store reviewer names, review text, patient details, or raw provider responses in the repository or the project context. Store aggregate findings.
- Do not send credentials or visitor-level analytics to OpenSEO.
- New or changed medical claims need clinician review, whatever the keyword data shows.

## Record the result

- Save material audits as `docs/audits/seo/YYYY-MM-DD-short-description.md` and update `docs/audits/seo/README.md`. Keep production and local findings separate.
- Record material changes with `npm run gsc:record-implementation` and in the living growth plan.
- Use the `seo-report` skill only for a report that the user requests. The repository copy stays the record.

## Without the connector

Continue with `npm run growth:collect`, `npm run seo:audit-priority`, and public search research. State in the report that OpenSEO evidence was not available. Do not estimate volumes, ranks, or index status.
