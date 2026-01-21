interface WhyItMattersProps {
    locale?: 'de' | 'en';
}

export default function WhyItMattersSection({ locale = 'de' }: WhyItMattersProps) {
    const isGerman = locale === 'de';

    const title = isGerman ? 'Warum es sich lohnt' : 'Why It\'s Worth It';

    const paragraphs = isGerman ? [
        'In vielen Programmen endet Prävention bei Messwerten. Labor, EKG oder Belastungstests liefern Daten, doch oft bleibt die entscheidende Frage offen: Was bedeuten diese Ergebnisse im Zusammenspiel und wie lassen sich daraus konkrete Schritte ableiten?',
        'Genau hier setzt unser Ansatz an. Wir verbinden Diagnostik mit Interpretation und praxisnaher Umsetzung. Die Untersuchungen sind nicht das Ziel, sondern das Werkzeug. Der eigentliche Wert entsteht durch Struktur, Expertise und ein Team, das die Ergebnisse gemeinsam betrachtet.',
        'Statt punktueller Momentaufnahmen verfolgen wir eine Entwicklung über Zeit. Fortschritte werden messbar und Veränderungen nachvollziehbar. Prävention wird so zu einem Prozess, der Wirkung entfaltet, statt zu einer einmaligen Bestandsaufnahme.',
        'Und schließlich geht es nicht um einzelne Maßnahmen, sondern um ein abgestimmtes, interdisziplinäres Konzept. Prävention kann nur dann langfristig erfolgreich sein, wenn medizinische Erkenntnisse, Training und Lebensstil ganzheitlich gedacht werden.'
    ] : [
        'In many programs, prevention ends with measured values. Laboratory tests, ECGs or stress tests provide data, but often the crucial question remains unanswered: What do these results mean in combination and how can concrete steps be derived from them?',
        'This is exactly where our approach comes in. We combine diagnostics with interpretation and practical implementation. The examinations are not the goal, but the tool. The real value is created through structure, expertise and a team that looks at the results together.',
        'Instead of isolated snapshots, we track development over time. Progress becomes measurable and changes comprehensible. Prevention thus becomes a process that unfolds its effect, rather than a one-time assessment.',
        'And finally, it\'s not about individual measures, but about a coordinated, interdisciplinary concept. Prevention can only be successful in the long term if medical findings, training and lifestyle are considered holistically.'
    ];

    const conclusion = isGerman
        ? 'Das ist der Unterschied: nicht mehr Diagnostik, sondern bessere Gesundheit. nicht kürzere Wege, sondern nachhaltige Wirkung.'
        : 'That\'s the difference: not more diagnostics, but better health. not shorter paths, but sustainable impact.';

    const ctaText = isGerman
        ? 'Unverbindliches Erstgespräch anfragen'
        : 'Request non-binding initial consultation';

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <h1 className="text-3xl font-semibold tracking-tight font-serif text-primary sm:text-4xl">
                    {title}
                </h1>

                <div className="mt-8 space-y-6">
                    {paragraphs.map((paragraph, index) => (
                        <p key={index} className="text-xl leading-8 text-primaryLighter">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <p className="mt-8 text-xl font-semibold leading-8 text-primary">
                    {conclusion}
                </p>

                <div className="mt-10 flex items-center justify-center">
                    <a
                        href="mailto:praevention@praxisjona.de"
                        className="rounded-xl bg-primary px-6 py-3.5 text-lg font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primaryLighter hover:shadow-md no-underline"
                    >
                        {ctaText}
                    </a>
                </div>
            </div>
        </div>
    );
}
