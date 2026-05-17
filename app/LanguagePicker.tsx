import Link from 'next/link';
import { cn } from './lib/utils';
import { localizedPathForLocale, type Locale } from './lib/i18n-routing';

function classNamesForSelection(locale: Locale, selectedLocale: Locale, className?: string) {
    return cn(
        locale === selectedLocale ? "text-green-700" : "text-gray-900",
        className,
    );
}

export function LanguagePicker({
    locale,
    pathname = "/",
    linkClassName,
    separatorClassName,
}: {
    locale: Locale;
    pathname?: string;
    linkClassName?: string;
    separatorClassName?: string;
}) {
    return (
        <>
            <Link prefetch={false} href={localizedPathForLocale(pathname, "de")} className={classNamesForSelection(locale, "de", linkClassName)}>DE</Link>
            <span className={cn("text-gray-500", separatorClassName)}>|</span>
            <Link prefetch={false} href={localizedPathForLocale(pathname, "en")} className={classNamesForSelection(locale, "en", linkClassName)}>EN</Link>
        </>
    );
}
