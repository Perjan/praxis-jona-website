# Broken Images

## Scope

- Production evidence: Ahrefs crawler export `praxisjona_10-aug-2026_page-has-broken-image_2026-08-13_10-24-16.csv`, exported 2026-08-13.
- Local verification target: `http://localhost:3001` on 2026-08-13.

## Production Finding

The export listed 13 affected pages and 11 distinct failed image requests:

- Eight recipe images from `s625661756.online.de` failed with HTTP 502 when fetched through the Praxis Jona Next Image endpoint.
- The `jonaClinic-old.jpg` blog cover failed with HTTP 400 because the available asset used the `.jpeg` extension and was stored outside the blog image directory.
- The SandFlow card used a nested Next Image URL whose upstream source was removed; it failed with HTTP 400 on both locale pages.

Impact: Medium. The pages returned HTTP 200, but broken images reduced content quality and caused avoidable crawler errors.

## Fix

- Stored the eight original recipe photos under `public/images/blog-images/recipes/` and changed the MDX references to local URLs.
- Stored the clinic cover at `public/images/blog-images/jonaClinic-old.jpeg` and corrected both locale posts.
- Stored SandFlow's current first-party device screenshot at `public/images/apps/sandflow-all-devices.webp` and updated both locale card definitions.
- Added `tests/seo/broken-images.test.ts` to verify local content image files exist and the two fragile external optimizer patterns do not return.

## Local Verification

- All replacement assets exist and are valid JPEG or WebP files.
- The focused SEO regression suite passes.
- The affected local pages and their generated image requests return HTTP 200 after rebuilding content.

## Follow-Up

Deploy the changes, rerun the crawler against production, and confirm the issue count falls from 13 pages to zero.
