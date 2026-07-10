# Praxis Jona — design system conventions

Component library for **Praxis Jona**, a medical practice in Berlin. UI copy is
**German** unless you are explicitly asked for English. Tone: calm, precise,
professional — this is a doctor's office, not a consumer app.

## Setup: no provider, no wrapper

These components read **no React context and no theme object**. There is no
`ThemeProvider` to wrap anything in. Render them directly:

```jsx
<Button>Termin buchen</Button>
```

Styling comes entirely from `styles.css`, which defines the design tokens on
`:root` and carries the compiled component styles. It is already loaded — do not
re-import it, and do not add a wrapper element to "activate" the theme.

## Styling idiom: Tailwind utility classes

This is a **Tailwind utility-class system**. Every component accepts `className`,
merged through `tailwind-merge`, so **a class you pass always beats the
component's default**. Style your own layout with the same utilities.

Brand palette — use these for anything expressing the practice's identity:

| Class family | Values | Use |
|---|---|---|
| `bg-primary` `text-primary` `border-primary` | deep green `#0D322B` | primary actions, headings |
| `bg-primaryDarker` `bg-primaryLighter` | `#081F1A` / `#144D42` | hover/depth variants |
| `text-primary-foreground` | white | text on `bg-primary` |
| `bg-lightBeige` `bg-darkBeige` | `#F9EDDF` / `#CAAB8C` | warm section surfaces |
| `bg-tealColor` `bg-tealColorDark` | `#D3E0D6` / `#092320` | accent surfaces |
| `bg-neutralColor` | `#FFF3E7` | page background wash |

Semantic tokens (HSL `var(--*)` on `:root`, same names as shadcn) — use these for
UI chrome so light/dark and state changes stay consistent:
`bg-background` `text-foreground` `bg-card` `text-card-foreground`
`bg-secondary` `text-secondary-foreground` `bg-muted` `text-muted-foreground`
`bg-accent` `text-accent-foreground` `bg-destructive` `text-destructive`
`border-border` `border-input` `ring-ring`

Prefer a semantic token over a raw brand hex when the element is UI chrome
(borders, muted captions, cards). Reach for the brand palette for surfaces and
calls to action. **Never invent class names** — anything outside the compiled
stylesheet renders as nothing.

## Component contracts that bite

- **Invalid states need two attributes.** Set `data-invalid={true}` on the
  wrapping `Field` / `FieldSet` (this turns label, legend, and error text red)
  **and** `aria-invalid={true}` on the control itself (`Input`, `Textarea`,
  `Checkbox`, `RadioGroup`, `RadioGroupItem` — these carry the red border).
  Setting only one looks half-broken.
- **`FieldError` renders `null` when it has no children.** Always give it a message.
- **`Progress` defaults `value` to `0`** — an empty bar. Always pass a real value.
- **`Separator orientation="vertical"` collapses to zero height** unless its
  parent has an explicit height.
- **`RadioGroupItem` must live inside a `RadioGroup`.** The idiomatic option row is
  `<FieldLabel className="flex items-center gap-2 font-normal">`.
- **Card sub-parts** (`CardHeader`, `CardTitle`, `CardDescription`, `CardContent`,
  `CardFooter`) take only `className` + children. Compose them inside a `Card`.

## Where the truth lives

Read `_ds/<folder>/styles.css` and the `@import`ed stylesheets for the exact class
and token vocabulary. Each component's `<Name>.prompt.md` and `<Name>.d.ts` are the
authoritative API — read them before passing a prop.

## Idiomatic example

```jsx
<div className="bg-lightBeige p-6">
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Eiseninfusion</CardTitle>
      <CardDescription>Bei nachgewiesenem Eisenmangel</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Dauer ca. 30 Minuten. Eine vorherige Blutuntersuchung ist erforderlich.
      </p>
    </CardContent>
    <CardFooter className="justify-between">
      <span className="font-semibold text-primary">ab 120 €</span>
      <Button>Termin buchen</Button>
    </CardFooter>
  </Card>
</div>
```

The `Card` is a library component; the surrounding `bg-lightBeige p-6` wrapper and
the footer's `justify-between` are the agent's own layout glue, written in the same
utility vocabulary.
