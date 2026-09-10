import { NextRequest, NextResponse } from "next/server";
import { canonicalGermanPathname } from "./app/lib/i18n-routing";
import { appendVaryAccept, preferredType } from "./app/lib/accept-negotiation";

const MARKDOWN_HANDLER_PREFIX = "/api/markdown";

function isNegotiable(request: NextRequest): boolean {
  return request.method === "GET" || request.method === "HEAD";
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/de" || pathname.startsWith("/de/")) {
    const canonicalPath = canonicalGermanPathname(pathname);
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = canonicalPath;
    redirectUrl.search = search;

    return NextResponse.redirect(redirectUrl, 308);
  }

  if (!isNegotiable(request)) {
    return NextResponse.next();
  }

  // Explicit .md URL: always markdown, whatever the Accept header says. Crawlers
  // that follow the Link: rel="alternate" hint may send no Accept header at all.
  if (pathname.endsWith(".md")) {
    const url = request.nextUrl.clone();
    url.pathname = `${MARKDOWN_HANDLER_PREFIX}${pathname.slice(0, -3)}`;
    const rewritten = NextResponse.rewrite(url);
    appendVaryAccept(rewritten.headers);
    return rewritten;
  }

  const acceptHeader = request.headers.get("accept");
  const chosen = preferredType(acceptHeader);

  if (chosen === "text/markdown") {
    const url = request.nextUrl.clone();
    url.pathname = `${MARKDOWN_HANDLER_PREFIX}${pathname === "/" ? "" : pathname}`;
    const rewritten = NextResponse.rewrite(url);
    appendVaryAccept(rewritten.headers);
    return rewritten;
  }

  if (chosen === null && acceptHeader) {
    return new NextResponse("Not Acceptable\n\nAvailable: text/html, text/markdown\n", {
      status: 406,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        Vary: "Accept",
      },
    });
  }

  // Rewriting to the same URL rather than calling next() is deliberate: on the
  // next() path Next.js overwrites Vary with its own router tokens and drops the
  // Accept token, which is exactly the header caches need to key on.
  const response = NextResponse.rewrite(request.nextUrl);
  appendVaryAccept(response.headers);
  response.headers.set(
    "Link",
    `<${request.nextUrl.origin}${pathname === "/" ? "/index" : pathname}.md>; rel="alternate"; type="text/markdown"`
  );
  return response;
}

export const config = {
  // Everything except Next internals and the API routes (which includes the
  // markdown handler itself, so the rewrite above cannot loop).
  matcher: ["/((?!api/|_next/|_vercel/).*)"],
};
