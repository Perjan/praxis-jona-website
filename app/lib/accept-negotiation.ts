/**
 * RFC 9110 §12.5.1 Accept-header parsing, shared by the middleware (edge) and
 * the markdown route handler (node). Kept dependency-free on purpose so it can
 * run in both runtimes.
 *
 * See https://acceptmarkdown.com/guides/accept-parsing
 */

export const PRODUCES = ["text/html", "text/markdown"] as const;

type AcceptEntry = { type: string; q: number; specificity: number };

function parseAccept(header: string): AcceptEntry[] {
  return header.split(",").map((raw) => {
    const parts = raw
      .trim()
      .split(";")
      .map((s) => s.trim());
    const type = parts[0].toLowerCase();
    let q = 1;

    for (const param of parts.slice(1)) {
      const [name, value] = param.split("=").map((s) => s.trim());
      if (name === "q") {
        const parsed = Number(value);
        if (!Number.isNaN(parsed)) q = Math.max(0, Math.min(1, parsed));
      }
    }

    const specificity = type === "*/*" ? 0 : type.endsWith("/*") ? 1 : 2;
    return { type, q, specificity };
  });
}

function matches(entry: AcceptEntry, candidate: string): boolean {
  if (entry.type === "*/*") return true;
  if (entry.type.endsWith("/*")) return candidate.startsWith(entry.type.slice(0, -1));
  return entry.type === candidate;
}

/**
 * Returns the media type to serve, or null when the client explicitly rejects
 * everything this site can produce (the only case that warrants a 406).
 */
export function preferredType(header: string | null): string | null {
  if (!header) return PRODUCES[0];

  const entries = parseAccept(header);
  if (entries.length === 0) return PRODUCES[0];

  let bestType: string | null = null;
  let bestQ = -1;
  let bestPosition = Infinity;

  for (const candidate of PRODUCES) {
    // A more specific range overrides a less specific one regardless of q, so
    // "text/html;q=0, */*" rejects HTML rather than letting the wildcard win.
    let matched: AcceptEntry | null = null;
    let matchedPosition = Infinity;

    for (let idx = 0; idx < entries.length; idx++) {
      const entry = entries[idx];
      if (!matches(entry, candidate)) continue;
      if (
        matched === null ||
        entry.specificity > matched.specificity ||
        (entry.specificity === matched.specificity && idx < matchedPosition)
      ) {
        matched = entry;
        matchedPosition = idx;
      }
    }

    if (matched === null) continue;
    if (matched.q <= 0) continue; // explicit rejection

    if (matched.q > bestQ || (matched.q === bestQ && matchedPosition < bestPosition)) {
      bestQ = matched.q;
      bestPosition = matchedPosition;
      bestType = candidate;
    }
  }

  return bestType;
}

/** Adds Accept to Vary without clobbering the tokens Next.js already set. */
export function appendVaryAccept(headers: Headers): void {
  const existing = headers.get("Vary");

  if (!existing) {
    headers.set("Vary", "Accept");
    return;
  }

  const tokens = existing.split(",").map((s) => s.trim().toLowerCase());
  if (!tokens.includes("accept")) {
    headers.set("Vary", `${existing}, Accept`);
  }
}
