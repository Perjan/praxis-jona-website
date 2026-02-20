import Link from 'next/link';
import { cn } from './lib/utils';
import { Locale, localizedPathForLocale } from './lib/i18n-routing';

function classNamesForSelection(locale, selectedLocale) {
    return cn(locale === selectedLocale ? "text-green-700 font-bold" : "text-gray-900");
}
export function LanguagePicker({ locale, pathname }: { locale: Locale; pathname: string }) {
    const deHref = localizedPathForLocale(pathname, "de");
    const enHref = localizedPathForLocale(pathname, "en");

    return (
        <>
            <Link prefetch={false} href={deHref} className={classNamesForSelection(locale, "de")}>DE</Link>
            <span className="text-gray-400">|</span>
            <Link prefetch={false} href={enHref} className={classNamesForSelection(locale, "en")}>EN</Link>
        </>
    );
}
