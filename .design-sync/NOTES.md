# design-sync notes — praxis-jona-website

Repo-specific gotchas for future syncs. Read this before running anything.

## This repo is an app, not a design system

There is no `dist/`, no library build, no Storybook, and `package.json` is
`"private": true` with no `main`/`module`/`exports`. The converter therefore runs
in **synth-entry mode**: it walks `cfg.srcDir` (`components/`) and synthesizes an
entry from the `.tsx` files it finds. Only `components/ui/` is exported —
`app/components/*` are page-level components that import `next/image`,
`next/link`, `next/navigation` and `contentlayer`, and would not bundle.

- **The `node_modules/praxisjona-website` self-symlink is required.** The converter
  resolves the package at `<node-modules>/<pkg>`; npm never self-installs, so
  without the link `package-build.mjs` dies with `ENOENT … praxisjona-website/package.json`.
  It is gitignored, so **recreate it on every fresh clone**:
  `ln -sfn ../ node_modules/praxisjona-website`
- Do NOT pass `--entry`. An `--entry` pointing anywhere in this repo makes the
  converter look for a shipped `.d.ts` tree, find none, and fall through to
  "tokens-only DS" (zero components). No `--entry` → synth-entry → 21 components.

## CSS: Tailwind must be compiled before every build

`app/globals.css` is uncompiled Tailwind source (`@tailwind base;` …). Shipping it
as `cssEntry` would ship those directives as literal text and every design built
from this DS would render unstyled.

`cfg.buildCmd` compiles `.design-sync/ds-tailwind.css` → `.design-sync/.cache/ds.css`
using `.design-sync/tailwind.ds.js`, and `cfg.cssEntry` points at the compiled output.
**Always run `cfg.buildCmd` before `package-build.mjs`.** The resync driver does this.

- `tailwind.ds.js` scans **the whole site** (`app/**`, `components/**`), not just
  `components/ui/**`. Tailwind only emits utilities it finds in scanned content, and
  the shipped stylesheet is the entire style vocabulary available to designs built
  from this system. Narrowing the content glob silently strips the design agent's
  vocabulary.
- Its `safelist` adds (a) the full brand palette across `bg|text|border|ring|…`
  prefixes, since some brand colors appear nowhere in `app/` yet, and (b) a layout
  vocabulary (flex/grid/gap/padding/max-w/rounded/text-size/font-weight).
  The layout safelist exists because `lib/preview-rebuild.mjs` **links the already-
  compiled `_ds_bundle.css` and never regenerates it** — so a class a preview reaches
  for must already be compiled. Subagents authoring previews cannot add classes.

## Playwright / chromium

The repo pins `@playwright/test@1.48.2` (chromium build 1140), which is **not** in
the local cache. The cache (`~/Library/Caches/ms-playwright`) has chromium 1112,
1208, 1228. `playwright@1.61.0` pins chromium 1228 → installed into `.ds-sync/`,
launches from cache, no ~200MB download. If the render check dies with
`browserType.launch: Executable doesn't exist`, re-derive the match: read
`https://raw.githubusercontent.com/microsoft/playwright/v<X.Y.Z>/packages/playwright-core/browsers.json`.

## TypeScript: validate's `.d.ts` check needs TS >= 5.5-ish, and lies when it doesn't

`package-validate.mjs` does `await import('typescript')` then calls `ts.ScriptTarget`.
The repo's own **typescript 5.0.2 is CommonJS with no named ESM exports**, so
`ts.ScriptTarget` is `undefined`, the resulting `TypeError` is swallowed by the
surrounding `catch`, and validate prints the misleading
`(.d.ts parse check skipped — typescript not in node_modules)` — **even though
typescript is installed**. The `.d.ts` contract then goes unverified.

Fix: `npm i typescript@5.9.3` inside `.ds-sync/` (5.9 exposes named exports).
Validate should print `all .d.ts parse cleanly`. **If you ever see the "skipped"
line, do not believe it** — check the TS version in `.ds-sync/node_modules` first.

## Component API facts (learned while authoring previews)

- **`FieldError` returns `null` when it has no children.** Always give it a child.
- **The invalid cascade needs two attributes**: `data-invalid={true}` on the wrapping
  `Field`/`FieldSet` (turns label/legend/error text destructive) AND `aria-invalid={true}`
  on the control (`Input`/`Textarea`/`RadioGroup`/`RadioGroupItem`/`Checkbox`, which
  carry `aria-[invalid=true]:border-destructive`). One without the other looks half-broken.
- **`Progress` defaults `value` to 0** → an empty bar. Always pass a real value.
  Track is `bg-secondary` (renders lightBeige), fill is `bg-primary` (dark green).
- **`Separator orientation="vertical"` collapses to zero height** unless its parent
  has an explicit height. The `Separator.tsx` preview uses an inline `style={{height:40}}`
  on the flex-row parent — the only intentional inline style in the preview set.
- **`RadioGroupItem` requires a parent `RadioGroup`.** Idiomatic option row:
  `<FieldLabel className="flex items-center gap-2 font-normal"><RadioGroupItem value="ja" /> Ja</FieldLabel>`
- Static previews cannot click. Checked/selected states must use uncontrolled
  defaults: `<Checkbox defaultChecked />`, `<RadioGroup defaultValue="ja">`.
- All `Card` sub-parts are prop-less `forwardRef` wrappers (`className` + children only).

## Preview content source

German patient-intake copy is ported from `app/anamnese/medical-history/page.tsx`
and `app/anamnese/form-definition.ts` (`optionValues`: sleepQuality, stressLevel,
diet, yesNo). Keep previews in German — this is a Berlin practice.

## Known render warns

`package-validate.mjs` emits these and they are expected, not regressions:

- `[RENDER_BLANK]` on any component **before** its preview is authored — the
  component renders with bare crash-prevention props (an empty `<Input/>` really is
  a <5KB PNG). All 21 now have authored previews, so a fresh `[RENDER_BLANK]` on a
  named component means that component's preview `.tsx` broke.
- `tokens: … (1 missing, below threshold)` — one `var(--*)` referenced by the
  compiled CSS with no definition; below the converter's own warn threshold.

## Re-sync risks — what can silently go stale

- **The self-symlink is gitignored.** A fresh clone has no `node_modules/praxisjona-website`
  and the build dies immediately. Recreate it (see above). This is the single most
  likely first failure on another machine.
- **The layout safelist in `tailwind.ds.js` is hand-maintained.** If someone authors a
  preview using a class outside it *and* outside what `app/` happens to use, that
  preview renders unstyled and the grader may not notice on a small element. When
  adding previews, verify each class exists in `ds-bundle/_ds_bundle.css` first.
- **`components/ui/` is shadcn-generated.** A `shadcn add`/upgrade can rewrite these
  files wholesale, changing class strings and prop APIs. Preview `.tsx` files pin
  props (e.g. `variant="outline"`); a shadcn style change could invalidate them
  without breaking the build. Re-grade after any shadcn upgrade.
- **Fonts are never shipped.** `tailwind.config.js` sets `fontFamily.sans: ['Arial','sans-serif']`
  and `display: ['Open Sans']`. No `@font-face` is bundled, so previews and designs
  render in Arial / the fallback. This is the site's actual configured theme, not a
  sync bug — but if the practice adopts a real brand webfont, wire it via `cfg.extraFonts`.
- **Only `components/ui/` is synced.** The brand's page-level components
  (`PricingCard`, `ServiceCards`, `InstagramCard`, `PrimaryButton`, …) live in
  `app/components/` and are excluded because they depend on Next.js. If they are ever
  wanted in Claude Design, they need `next/link` + `next/image` shims — that is a
  deliberate scope decision, not an oversight.
- Tokens live in `.design-sync/ds-tailwind.css` as a **copy** of the `:root` block in
  `app/globals.css`. If the palette changes in `globals.css`, this copy does not follow.
  Diff the two on re-sync.
