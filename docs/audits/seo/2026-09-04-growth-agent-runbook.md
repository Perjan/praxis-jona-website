# Praxis Jona Growth Agent Runbook

Date: 2026-09-04
Scope: recurring SEO, GEO, content, conversion, and booking-growth work for `praxisjona.de`
Primary living plan: [31-Day Search & Bookings Growth Plan](./2026-09-04-31-day-search-bookings-growth-plan.md)

## Purpose

This runbook is the durable memory for recurring growth work. A future agent should be able to collect the same evidence, distinguish search performance from on-site conversion, choose one high-confidence improvement, verify it, and record what changed without rediscovering credentials or definitions.

## Tools And Access

### Google Search Console

- Purpose: impressions, clicks, average position, and Google SERP CTR.
- Property: `sc-domain:praxisjona.de`.
- Authentication: Google Application Default Credentials already used by the repository workflow. Never add credential JSON to the repository.
- Full collection command: `npm run gsc:weekly`.
- Configuration: `config/gsc-dashboard.config.json`.
- Local output: `data/gsc/` (raw generated artifacts are ignored; deliberate baselines and implementation history may be retained).

### Self-Hosted Umami

- Purpose: on-site pageviews, visitors, tracked CTA events, and conversion rates after the search click.
- Base URL: `https://analytics.moneycoach.ai`.
- Website: `praxisjona.de`.
- Website ID: `cc9a5b16-c893-492f-af55-e6b79a844358` (public tracker identifier, not a credential).
- Collector: `scripts/umami/fetch-growth-analytics.mjs`.
- Configuration: `config/umami-growth.config.json`.
- Command: `npm run umami:fetch`.
- Combined collection: `npm run growth:collect`.
- Local output: `data/umami/raw/` and ignored by Git.
- Authentication: macOS Keychain service `codex-umami-admin`, account `admin`; the collector exchanges the password at `POST /api/auth/login` and keeps the bearer token in memory only.

The collector uses only the official Umami HTTP API and persists aggregate output only. It never reads an Umami database URL, connects to the database, or stores bearer tokens, passwords, session IDs, IP addresses, or individual event rows. Direct database access is prohibited. `UMAMI_KEYCHAIN_SERVICE` and `UMAMI_KEYCHAIN_ACCOUNT` may override the Keychain identifiers for another machine without putting credentials in the repository.

The deployed server currently exposes Umami's legacy v2 API contract. It provides exact pageviews, aggregate event counts, and per-URL visitors, but not unique visitors per custom event. Therefore event-level and CTA conversion rates per visitor must remain `null`/“unavailable”; never convert that missing value to zero. Pageview-based CTA rates remain measurable.

Umami API authentication and reporting endpoints are documented in the official [authentication](https://docs.umami.is/docs/api/authentication), [website stats](https://docs.umami.is/docs/api/website-stats), and [events](https://docs.umami.is/docs/api/events) references. Although the configured credential is currently an admin account, this workflow must remain read-only; replace it with a least-privilege reporting account when that account can see all required websites.

### Public Search And Competitor Research

- Use live Google result pages for the exact target query and location; record the observation date because rankings move.
- Open result URLs, inspect `robots.txt`, sitemap indexes, page sitemaps, article hubs, titles, publication/update dates, and internal-link patterns.
- Treat rankings as observations, not permanent truth.
- Never copy competitor prose. Extract topic coverage, information architecture, proof patterns, and search intent.

### Research-Backed Medical Articles

- For cornerstone research articles, use `/Users/perjanduro/.agents/skills/research-backed-feature-article/SKILL.md`.
- Maintain a claim dossier and a “what we must not claim” section.
- Prefer current guidelines, systematic reviews, and primary research. Medical copy needs clinician review before publication when claims, indications, contraindications, or outcomes change.

## Measurement Contract

These metrics answer different questions and must never be merged into one “CTR” number:

| Metric | Formula | Source | Decision it supports |
|---|---|---|---|
| Search CTR | Google organic clicks / Google impressions | Search Console | Titles, descriptions, rich results, and query fit |
| Booking CTA rate per pageview | `booking-cta-click` events / pageviews | Umami | Agreed conversion: first click on any appointment CTA |

Umami referral traffic from Google is directional acquisition context. It is not search CTR because Umami does not know Google impressions.

## Required Event Taxonomy

The conversion event is `booking-cta-click`. It fires on the first click, before any insurance selection or Doctolib navigation. Required non-personal properties are `destination`, `element`, `locale`, and `placement`; Umami supplies the page URL. Do not measure or infer what happens inside Doctolib.

Legacy events `button-in-header` and `button-in-home-hero` remain in historical reports but are retired for new traffic. Before the unified event reaches production, zero `booking-cta-click` events must be labeled “not deployed/unmeasured,” not “no demand.”

## Weekly Self-Improvement Loop

1. Read `AGENTS.md`, this runbook, and the living 31-day plan.
2. Run `npm run growth:collect`. If one source fails, continue with the other and record the limitation.
3. Compare the latest complete 28 days with the immediately preceding 28 days. Use GSC's two-day lag consistently.
4. Segment by query cluster, landing page, language, device, and tracked conversion event. Do not optimize from site-wide averages alone.
5. Diagnose the largest evidence-backed bottleneck:
   - impressions low: coverage, indexation, authority, or internal links;
   - impressions healthy but search CTR low: title/description/query fit;
   - organic landings healthy but CTA rate low: offer, proof, friction, or CTA visibility;
   - visits healthy but booking CTA rate low: offer, proof, friction, or CTA visibility.
6. Select one primary experiment with a measurable hypothesis and a baseline. Prefer changes that can produce a clean read over broad simultaneous rewrites.
7. Implement only safe, reversible repository changes. Add focused tests first for mission-critical tracking, forms, and booking flows.
8. Run the relevant tests, production build where proportionate, and a local/production verification appropriate to the change.
9. Record the implementation date, pages, expected metric, observation window, and rollback trigger in the living plan and GSC implementation history.
10. After opening or updating a PR, wait for its preview deployment. Update the Markdown PR description with the verified preview base URL and direct preview links for every materially changed public page or representative component family. State what changed, what to inspect, how to test it, and the expected analytics event and properties. If the preview is not ready, mark the section pending and update it before calling the PR review-ready.
11. Summarize outcomes, uncertainty, and the next experiment in the thread. Do not claim causality from a single before/after movement.

## Decision Thresholds

- Do not evaluate an SEO title test before enough impressions accrue; use at least 500 impressions for a directional read unless the page is business-critical and the evidence is unusually strong.
- Treat fewer than 20 conversion events as qualitative/directional, not a stable conversion-rate result.
- Investigate a tracking break before interpreting a sudden zero, especially after navigation, modal, or analytics-script changes.
- Roll back or revise when a changed page loses both relevant clicks and downstream conversions across a meaningful comparison window without an offsetting gain.
- Prioritize bookings and qualified local intent over raw traffic volume.

## Guardrails

- Never store analytics credentials, database URLs, raw session identifiers, IP addresses, or patient/health data in Git, artifacts, prompts, or logs.
- Do not autonomously publish new medical efficacy or safety claims without clinician review.
- Do not make ad spend, external account, production deployment, or irreversible publishing changes unless the user has placed that action in scope.
- Keep production findings separate from local/dev findings.
- Preserve unrelated worktree changes.
- Update `docs/audits/seo/README.md` for every new audit or material recurring-growth report.

## Recurring Agent Definition Of Done

A scheduled run is complete only when it has collected available evidence, selected or advanced one bounded experiment, verified any code change, updated the living artifact, added verified preview links and review instructions to the PR description when public pages changed, and reported the next observation date. A no-change run is valid when the evidence says to preserve the current experiment; it must still record why waiting is the correct action.

Codex thread automations are appropriate because they return to the same durable conversation and preserve accumulated context; see OpenAI's [long-running work guidance](https://cdn.openai.com/pdf/8a9f00cf-d379-4e20-b06f-dd7ba5196a11/OAI_WhitePaper_Codex-maxxing26.pdf).
