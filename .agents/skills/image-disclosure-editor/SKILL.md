---
name: image-disclosure-editor
description: Add, audit, or refine visible AI and model-image disclosures on Praxis Jona pages, cards, blog images, and display slides. Use for image-origin labels, not general image generation.
---

# Image disclosure editor

Use a small, readable disclosure at the first image exposure. Keep the clinic's article wording and medical claims unchanged.

## Source of truth

- `data/image-disclosures.json` maps exact public asset paths to evidence groups and disclosure kinds.
- `app/components/imageDisclosureRegistry.ts` resolves paths and translates the labels.
- `app/components/ImageDisclosure.tsx` owns the shared visual treatment.
- Blog front matter can explicitly identify a new AI cover through `coverImageIsAiGenerated`. Prefer the registry for reused assets.

Add new image classifications to the registry. Do not infer AI origin from a model's appearance, filename, directory, or missing metadata.
Use `ai-generated` for confirmed AI content. Use `model` for an illustrative model photo whose AI origin is unconfirmed.
Record the basis in its evidence group. Keep real staff portraits and documentary clinic photos unlabelled unless evidence supports another classification.

## Edit the badge

Keep the label visible without hovering, clicking, or opening another page.
The current compact treatment uses normal 12px text, 16px line height, small padding, and a near-opaque white background.
Use at least 4.5:1 contrast for small text. Do not shrink or fade the label to make it less noticeable.
These dimensions are a project choice, not a statutory minimum.

Use the existing localized wording: `KI-generiert` / `AI-generated` or `Symbolbild` / `Illustrative image`.
The component compensates for the TV canvas scale. Preserve this when editing its text sizing.
Keep one label per displayed image. Place it inside a positioned image container, after decorative overlays.
Do not put it inside a fading layer, an `aria-hidden` container, or a crop that hides the text.
An immediately adjacent readable caption is also possible when an overlay would obscure important content.

## Cover all reuses

Search for the asset path and its mapping keys. Check shared renderers, both languages, and responsive duplicates.
Current renderers include treatment pricing cards, Botox hero/detail cards, blog covers/listings/related cards, `ArticleImage`, and TV treatment slides.
For an added renderer, pass the exact source and locale to `ImageDisclosure`. Keep the image's dimensions, crop, links, and alt text intact.
Preserve original files and available provenance metadata. Do not regenerate or edit an image merely to change its HTML badge.
For exported graphics and social preview assets, assess the exported image separately: an HTML overlay does not travel with the file.

## Check the result

Run the local audit from the repository root:

```sh
python3 .agents/skills/image-disclosure-editor/scripts/audit_images.py
npx vitest run tests/seo/model-image-disclosure.test.tsx tests/seo/blog-image-disclosure.test.tsx
```

The audit reports missing assets, unregistered model filenames, and AI provenance hints. It does not prove image origin or legal compliance.
Check the hero and a representative card on desktop and mobile. Confirm readable labels, loaded images, no overflow, and no labels on real staff photos.
Run the relevant build checks before handoff. Follow the repository's preview-link rules for public-page PRs.
Do not publish to production or contact third parties unless the user authorizes that action.

## Legal scope

Read [the legal notes](references/legal-notes.md) for provenance decisions or legal explanations.
Recheck current official sources when the user requests current legal requirements or when those requirements affect a new publication.
Do not describe the entire site as legally compliant based only on badge coverage.
