# SEO/GEO Audits

This folder stores SEO, GEO, technical search, local search, and crawler audit reports for Praxis Jona.

Use date-first filenames so audits sort chronologically:

```text
YYYY-MM-DD-short-description.md
```

## Audits

| Date | Target | Report |
|---|---|---|
| 2026-05-19 | `https://praxisjona.de` and `http://localhost:3001` | [Praxis Jona SEO/GEO Audit](./2026-05-19-praxis-jona-seo-geo-audit.md) |
| 2026-08-13 | `https://praxisjona.de` crawler export and `http://localhost:3001` verification | [Hreflang And HTML Lang Mismatch](./2026-08-13-hreflang-html-lang-mismatch.md) |
| 2026-08-13 | `https://praxisjona.de` crawler export and `http://localhost:3001` verification | [Broken Images](./2026-08-13-broken-images.md) |
| 2026-08-24 | Search Console, `sc-domain:praxisjona.de` — scheduled follow-up | [28-Day Measurement Task](./2026-08-24-28-day-measurement-task.md) |

## Notes For Future Audits

- Keep live production and local/dev findings separate.
- Mention crawler/tool used, target URL, date, and whether the server was production or development.
- Treat localhost performance/security warnings carefully because dev servers often produce noisy results.
- Add new reports to the table above.
