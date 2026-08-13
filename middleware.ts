import { NextRequest, NextResponse } from "next/server";
import { canonicalGermanPathname } from "./app/lib/i18n-routing";
import { requestLocaleHeaders } from "./app/lib/request-locale";

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/de" || pathname.startsWith("/de/")) {
    const canonicalPath = canonicalGermanPathname(pathname);
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = canonicalPath;
    redirectUrl.search = search;

    return NextResponse.redirect(redirectUrl, 308);
  }

  return NextResponse.next({
    request: {
      headers: requestLocaleHeaders(request.headers, pathname),
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
