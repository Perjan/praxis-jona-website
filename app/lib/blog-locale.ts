import type { Locale } from './i18n-routing';

export function isPostInLocale(post: { language?: string }, locale: Locale): boolean {
  return (post.language ?? 'de') === locale;
}
