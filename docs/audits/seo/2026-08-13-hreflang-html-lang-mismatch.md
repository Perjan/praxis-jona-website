# Hreflang And HTML Lang Mismatch

## Executive Summary

The supplied crawler export reported 93 English URLs where the self-referencing hreflang was `en` but the server-rendered `<html lang>` was `de`. The issue was site-wide for `/en` routes.

The root layout used a hard-coded German language attribute and corrected it only in a client-side effect after hydration. Crawlers and browsers reading the initial HTML therefore received the wrong language. English blog routes also used `force-static`, which cached the default German document shell.

The local implementation now derives the document language from the canonical request pathname before rendering. All 93 URLs from the report pass a raw-HTML verification with zero failures.

## Production Finding

- Audit date: 2026-08-13
- Source: `praxisjona_10-aug-2026_hreflang-and-html-lang_2026-08-13_10-23-18.csv`
- Target: `https://praxisjona.de`
- Rows: 93
- URL pattern: every reported URL is under `/en`.
- HTML language: `de` on all 93 rows.
- Self-hreflang: `en` on all 93 rows.
- Severity: Medium. The mismatch weakens language signaling for browsers and search engines that consume the HTML language attribute.

## Root Cause

1. `app/layout.tsx` rendered `<html lang="de">` for every route.
2. `app/HtmlLangSync.tsx` changed the language only after client hydration, which does not repair initial server HTML.
3. `app/en/blog/page.tsx` and `app/en/blog/[slug]/page.tsx` forced static rendering, so their document shell could not use the per-request locale signal.

## Local Fix

- Middleware now sets an internal request locale header for all page requests, based on the canonical pathname.
- The root layout reads that header and server-renders `lang="en"` for `/en` routes and `lang="de"` for German routes.
- The hydration-only language synchronizer was removed.
- English blog routes no longer force static rendering, allowing the correct server-rendered document language.

## Verification

- Focused regression tests: 4 passed across request locale and existing i18n routing tests.
- Raw HTML spot checks passed for `/`, `/en`, `/en/jobs`, `/en/botox-treatment`, and `/botox-behandlung`.
- Every URL from the supplied CSV was requested from the local server and checked for HTTP 200, matching server-rendered HTML language, and matching self-hreflang.
- Result: 93 checked, 0 failures.

## Deployment Note

The production finding remains present until this implementation is deployed. After deployment, rerun the same crawler report to confirm production has converged with the verified local result.
