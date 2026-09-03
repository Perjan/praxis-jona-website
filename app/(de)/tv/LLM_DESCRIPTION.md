# TV New LLM Description

This folder contains the TV slideshow implementation and its editable content source.

## Goal
Design high-legibility, high-impact 16:9 TV slides for a waiting-room display, while keeping Praxis Jona branding and palette.

## Files
- `TVNewPageClient.tsx`: Layout/visual system and slide rendering logic.
- `content.ts`: Primary content/config source (text, background images, QR references, list items).

## Editing Rules for LLMs
1. Prefer editing `content.ts` for copy/background/QR changes.
2. Do **not** change timing constants unless explicitly asked:
   - `SLIDE_DURATION = 30000`
   - `ANIMATION_DURATION = 4000`
3. Keep all slides readable from distance:
   - Short headlines
   - Limited bullets per panel
   - High contrast against background image
4. Keep palette aligned with brand tones:
   - Deep green (`#123932` family)
   - Light mint / beige accents
5. QR assets should live in `public/tv/qr/` and be referenced from `content.ts`.
6. If adding slides, update both:
   - `content.ts`
   - `slides` list in `TVNewPageClient.tsx`

## Content Model
Each slide entry in `content.ts` can define:
- `bg`: background image path
- `overlay`: overlay utility class
- `kicker`, `title`, `subtitle`
- `infoUrl`
- `qr`, `qrLabel`
- slide-specific arrays like `items`, `bullets`, `cards`, `steps`, `team`

## Safe Update Workflow
1. Edit `content.ts`.
2. Run `npm run lint`.
3. Preview with:
   - `/tv` (normal slideshow)
   - `/tv?slide=N` (single slide debug)
