import { NextRequest, NextResponse } from "next/server";
import TurndownService from "turndown";
import { Constants } from "app/Constants";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MARKDOWN_CONTENT_TYPE = "text/markdown; charset=utf-8";
const CACHE_CONTROL = "public, s-maxage=3600, stale-while-revalidate=86400";

/**
 * The site's content lives in React Server Components, not in .md files, so the
 * markdown representation is produced by rendering the same URL to HTML and
 * converting it. The result is edge-cached, so the extra origin hit happens
 * once per URL per hour rather than once per agent request.
 *
 * See https://acceptmarkdown.com/recipes/nextjs
 */

const turndown = new TurndownService({
  headingStyle: "atx",
  hr: "---",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  linkStyle: "inlined",
});

// Chrome, nav rails and interactive widgets add tokens without adding meaning.
turndown.remove(["script", "style", "noscript", "iframe", "form", "button", "template"] as any);

function stripTag(html: string, tag: string): string {
  return html.replace(new RegExp(`<${tag}\\b[^>]*>[\\s\\S]*?</${tag}>`, "gi"), "");
}

function extractBetween(html: string, open: RegExp, closeTag: string): string | null {
  const match = open.exec(html);
  if (!match) return null;

  const start = match.index + match[0].length;
  const end = html.lastIndexOf(`</${closeTag}>`);
  if (end <= start) return null;

  return html.slice(start, end);
}

function decodeEntities(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function firstMatch(html: string, pattern: RegExp): string | null {
  const match = pattern.exec(html);
  return match ? decodeEntities(match[1]).trim() : null;
}

/**
 * Agents read the markdown out of band, so root-relative links are useless to
 * them. Next's image optimizer URLs are unwrapped back to the original asset.
 */
function absolutizeUrls(markdown: string): string {
  return markdown.replace(/\]\((\/[^)\s]*)\)/g, (_match, href: string) => {
    if (href.startsWith("/_next/image")) {
      const inner = /[?&]url=([^&]+)/.exec(href);
      if (!inner) return "](#)";
      const decoded = decodeURIComponent(inner[1]);
      return `](${decoded.startsWith("/") ? `${Constants.baseUrl}${decoded}` : decoded})`;
    }
    return `](${Constants.baseUrl}${href})`;
  });
}

function htmlToMarkdown(html: string): string {
  const main =
    extractBetween(html, /<main\b[^>]*>/i, "main") ??
    extractBetween(html, /<body\b[^>]*>/i, "body") ??
    html;

  const cleaned = ["script", "style", "noscript", "svg", "template"].reduce(stripTag, main);

  return absolutizeUrls(turndown.turndown(cleaned))
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function markdownResponse(body: string, status = 200) {
  return new NextResponse(body, {
    status,
    headers: {
      "Content-Type": MARKDOWN_CONTENT_TYPE,
      Vary: "Accept",
      "Cache-Control": status === 200 ? CACHE_CONTROL : "no-store",
      "X-Robots-Tag": "noindex",
    },
  });
}

function notFoundMarkdown(canonicalUrl: string): string {
  return [
    "# 404 — Seite nicht gefunden / Page not found",
    "",
    `\`${canonicalUrl}\` existiert nicht. / This path does not exist.`,
    "",
    "## Wo es weitergeht / Where to go next",
    "",
    `- [Startseite / Home](${Constants.baseUrl}/)`,
    `- [English home](${Constants.baseUrl}/en)`,
    `- [Kontakt & Anfahrt / Contact](${Constants.baseUrl}/kontakt)`,
    `- [Leistungen / Services](${Constants.baseUrl}/leistungen)`,
    `- [Preise / Prices](${Constants.baseUrl}/preise)`,
    `- [Termin buchen / Book an appointment](${Constants.baseUrl}/termin-buchen)`,
    `- [Blog](${Constants.baseUrl}/blog)`,
    "",
    "## Maschinenlesbar / Machine-readable",
    "",
    `- Vollständiger Seitenindex / Full index: ${Constants.baseUrl}/sitemap.xml`,
    `- Agenten-Anleitung / Agent guide: ${Constants.baseUrl}/llms.txt`,
    `- robots.txt: ${Constants.baseUrl}/robots.txt`,
    "",
  ].join("\n");
}

export async function GET(request: NextRequest, { params }: { params: { slug?: string[] } }) {
  const segments = params.slug ?? [];
  // middleware maps "/" to the handler root, and the /index.md alternate URL to
  // ["index"]; both mean the home page.
  const normalized = segments.length === 1 && segments[0] === "index" ? [] : segments;
  const pathname = normalized.length ? `/${normalized.join("/")}` : "/";
  const canonicalUrl = `${Constants.baseUrl}${pathname}`;

  const target = new URL(pathname, request.nextUrl.origin);
  target.search = request.nextUrl.search;

  let upstream: Response;
  try {
    upstream = await fetch(target, {
      headers: {
        Accept: "text/html",
        "User-Agent": "PraxisJona-MarkdownRenderer/1.0",
      },
      cache: "no-store",
    });
  } catch {
    return markdownResponse(notFoundMarkdown(canonicalUrl), 502);
  }

  if (!upstream.ok) {
    return markdownResponse(notFoundMarkdown(canonicalUrl), upstream.status === 404 ? 404 : upstream.status);
  }

  const html = await upstream.text();
  const title = firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const description = firstMatch(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
  const body = htmlToMarkdown(html);

  const document = [
    title ? `# ${title}` : null,
    description ? `> ${description}` : null,
    `_Quelle / Source: ${canonicalUrl}_`,
    "",
    body,
    "",
    "---",
    "",
    `Praxis Jona · Torstraße 125 · 10119 Berlin · ${Constants.contact.phone} · ${Constants.contact.email}`,
    `Agenten-Anleitung / agent guide: ${Constants.baseUrl}/llms.txt · Index: ${Constants.baseUrl}/sitemap.xml`,
    "",
  ]
    .filter((line) => line !== null)
    .join("\n");

  return markdownResponse(document);
}

export const HEAD = GET;
