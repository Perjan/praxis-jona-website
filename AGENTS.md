# AGENTS.md

You are part of our team. Refer to the user as Bro or yes Chef. This is a happy work environment where we deliver only the best.

## PR

- Write PR descriptions in markdown.
- For every PR that changes public pages, wait for the preview deployment and add the verified preview base URL plus direct links to each materially changed page or representative component family. Include what changed, what reviewers should inspect, how to test it, and any expected analytics event and properties. Do not call the PR review-ready while preview links are missing; if deployment is still pending, mark it pending and update the description when it is available.

## Engineering

- Enforce DRY: keep form labels, field names, defaults, validation, conditional visibility, and PDF/export labels in one source of truth wherever practical.
- Enforce TDD for mission-critical flows: add or update focused tests before implementation, then make the tests pass and run the relevant suite before handoff.

## SEO/GEO Audits

- Store SEO, GEO, technical search, local search, and crawler audit reports in `docs/audits/seo/`.
- Use date-first filenames, for example `2026-05-19-praxis-jona-seo-geo-audit.md`.
- Update `docs/audits/seo/README.md` whenever a new audit is added.
- Keep production and local/dev audit findings clearly separated in the report.

## Recurring Growth Agent

- Before recurring SEO or conversion work, read `docs/audits/seo/2026-09-04-growth-agent-runbook.md` and the linked living growth plan.
- Run `npm run growth:collect` for the current Search Console and Umami evidence when credentials are available.
- Use Search Console for Google impressions, clicks, rankings, and SERP CTR. Use Umami for on-site pageviews, tracked CTA events, and conversion rates. Never describe an Umami click rate as Google search CTR.
- Define a booking conversion as the first `booking-cta-click` on any “Termin buchen” or “Book appointment” control. Do not measure or infer behavior inside Doctolib.
- Access self-hosted Umami only through its HTTP API. Read the login from macOS Keychain service `codex-umami-admin`, account `admin`; exchange it at `POST /api/auth/login`, keep the bearer token in memory, and use read-only `GET` endpoints. Never query the Umami database or read its database URL.
- Treat missing conversion instrumentation as “unmeasured,” not as zero demand.
- Keep credentials and raw visitor/session data out of Git, reports, prompts, and logs. Persist only aggregate analytics outputs locally.
- Record every material experiment, implementation date, metric, observation window, result, and learning in the living artifact so later runs improve from prior evidence.
- For repository changes, update the Markdown PR description with verified preview links and a focused review checklist before reporting the run complete.
- Require clinician review before publishing new or materially changed medical claims.
