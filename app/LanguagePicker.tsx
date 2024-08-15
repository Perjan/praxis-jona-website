import Link from 'next/link';
import { cn } from './lib/utils';

function classNamesForSelection(locale, selectedLocale) {
    return cn(locale === selectedLocale ? "text-green-700 font-bold" : "text-gray-900");
}
export function LanguagePicker(locale) {
    return (
        <>
            <Link prefetch={false} href="/" className={classNamesForSelection(locale, "de")}>DE</Link>
            <span className="text-gray-400">|</span>
            <Link prefetch={false} href="/en" className={classNamesForSelection(locale, "en")}>EN</Link>
        </>
    );
}
