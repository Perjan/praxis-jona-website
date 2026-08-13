import { localeFromPathname } from "./i18n-routing";

export const REQUEST_LOCALE_HEADER = "x-praxis-locale";

export function requestLocaleHeaders(headers: Headers, pathname: string) {
  const requestHeaders = new Headers(headers);
  requestHeaders.set(REQUEST_LOCALE_HEADER, localeFromPathname(pathname));
  return requestHeaders;
}
