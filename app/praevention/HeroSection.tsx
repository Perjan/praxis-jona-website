interface HeroSectionProps {
    locale?: 'de' | 'en';
}

export default function HeroSection({ locale = 'de' }: HeroSectionProps) {
    const isGerman = locale === 'de';

    const title = isGerman
        ? 'Gesundheit ist kein Zufall. Sondern eine Entscheidung.'
        : 'Health is not a coincidence. It\'s a decision.';

    const description = isGerman
        ? 'Wir machen Prävention planbar. Mit ärztlicher Diagnostik, interdisziplinärer Expertise und individueller Begleitung.'
        : 'We make prevention plannable. With medical diagnostics, interdisciplinary expertise and individual support.';

    const ctaText = isGerman
        ? 'Unverbindliches Erstgespräch anfragen'
        : 'Request non-binding initial consultation';

    return (
        <div className="bg-primary/10">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-serif font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                        {title}
                    </h1>
                    <p className="mt-6 text-xl leading-8 text-primaryLighter">
                        {description}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="mailto:praevention@praxisjona.de"
                            className="rounded-xl bg-primary px-6 py-3.5 text-lg font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primaryLighter hover:shadow-md no-underline"
                        >
                            {ctaText}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
