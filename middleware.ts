import { NextRequest, NextResponse } from "next/server";
import { canonicalGermanPathname } from "./app/lib/i18n-routing";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/de" || pathname.startsWith("/de/")) {
    const canonicalPath = canonicalGermanPathname(pathname);
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = canonicalPath;
    redirectUrl.search = search;

    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/de/:path*", "/de"],
};
