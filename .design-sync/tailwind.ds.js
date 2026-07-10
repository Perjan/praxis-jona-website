// Tailwind config for the design-sync export.
//
// Content deliberately spans the whole site, not just components/ui: Tailwind
// only emits utilities it finds in scanned content, and the stylesheet we ship
// is the entire style vocabulary available to designs built from this system.
// Scanning app/ makes every utility the real site uses resolve in a design.
// The safelist covers the brand palette across the prefixes a designer reaches
// for, since some brand colors are used nowhere in app/ yet.
const base = require('../tailwind.config.js')

const brand = [
  'primary', 'primaryDarker', 'primaryLighter', 'primary-foreground',
  'darkBeige', 'lightBeige', 'tealColor', 'tealColorDark', 'neutralColor',
  'background', 'foreground', 'card', 'muted', 'accent', 'secondary',
  'destructive', 'border', 'input', 'ring',
]

module.exports = {
  ...base,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './.design-sync/previews/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    { pattern: new RegExp(`^(bg|text|border|ring|fill|stroke|from|to|via)-(${brand.join('|')})$`) },
    { pattern: new RegExp(`^(bg|text|border)-(${brand.join('|')})-foreground$`) },
    // Layout vocabulary. Preview cards are rebuilt by preview-rebuild.mjs, which
    // links the already-compiled _ds_bundle.css rather than regenerating it — so
    // any class a preview reaches for must exist here ahead of time. This is also
    // the glue vocabulary the design agent uses to lay out its own compositions.
    { pattern: /^(flex|inline-flex|grid|block|inline-block|hidden)$/ },
    { pattern: /^(flex-col|flex-row|flex-wrap|flex-1|shrink-0|grow)$/ },
    { pattern: /^(items|justify|self)-(start|end|center|between|around|stretch|baseline)$/ },
    { pattern: /^grid-cols-[1-6]$/ },
    { pattern: /^(gap|gap-x|gap-y)-(0|1|1\.5|2|2\.5|3|4|5|6|8|10|12)$/ },
    { pattern: /^(p|px|py|pt|pb|pl|pr)-(0|1|2|3|4|5|6|8|10|12)$/ },
    { pattern: /^(m|mx|my|mt|mb|ml|mr)-(0|1|2|3|4|5|6|8|auto)$/ },
    { pattern: /^(space-y|space-x)-(1|2|3|4|6|8)$/ },
    { pattern: /^(w|h)-(full|auto|px|4|5|6|8|10|12|16)$/ },
    { pattern: /^max-w-(xs|sm|md|lg|xl|2xl|full|none)$/ },
    { pattern: /^min-h-(0|full|24|screen)$/ },
    { pattern: /^rounded(-none|-sm|-md|-lg|-xl|-2xl|-full)?$/ },
    { pattern: /^border(-0|-2|-4|-t|-b|-l|-r)?$/ },
    { pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl)$/ },
    { pattern: /^font-(normal|medium|semibold|bold)$/ },
    { pattern: /^(bg|text)-(white|black|transparent)$/ },
    { pattern: /^shadow(-sm|-md|-lg|-none)?$/ },
    { pattern: /^opacity-(50|70|100)$/ },
    { pattern: /^leading-(none|tight|snug|normal|relaxed)$/ },
  ],
}
