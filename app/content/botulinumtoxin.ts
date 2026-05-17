export type BotulinumtoxinService = {
  slug: string;
  title: string;
  image: {
    src: string;
    alt: string;
    objectPositionClass?: string;
  };
  paragraphs: string[];
  bullets?: string[];
};

export const botulinumtoxinIntro = {
  title: "Botulinumtoxin-Behandlung in Berlin-Mitte",
  subtitle: "Natürliche Ergebnisse durch präzise ästhetische Medizin",
  description:
    "In der Praxis Jona am Rosenthaler Platz setzen wir Botulinumtoxin („Botox“) individuell und medizinisch fundiert ein, mit dem Ziel, mimische Falten sanft zu entspannen und die natürliche Ausstrahlung zu erhalten.",
  secondaryDescription:
    "Wir behandeln nicht nach festen Standardschemata, sondern orientieren uns an Anatomie, Muskelaktivität, Hautqualität und Ihren persönlichen Zielen.",
  canonical: "/botox-behandlung",
  alternate: "/en/botox-treatment",
};

export const botulinumtoxinOverview = {
  title: "Was ist Botulinumtoxin?",
  paragraphs: [
    "Botulinumtoxin ist ein seit vielen Jahren etabliertes Medikament in der ästhetischen und medizinischen Behandlung.",
    "Es reduziert gezielt die Aktivität bestimmter Muskeln und kann dadurch mimische Falten glätten oder einer Vertiefung vorbeugen.",
    "Unser Fokus liegt auf natürlich wirkenden Ergebnissen, nicht auf starren Gesichtszügen oder überkorrigierter Mimik. Menschen wollen heute meistens frischer aussehen, nicht „anders“. Ein wichtiger Unterschied, den erstaunlich viele Behandlungen ignorieren.",
  ],
};

const placeholderImages = [
  "/images/clinic/clinic-philo-2025.jpg",
  "/images/clinic/clinic-newA.jpg",
  "/images/clinic/clinic-newA-new2.jpg",
  "/images/clinic/clinic-hero-2025.jpg",
];

export const botulinumtoxinServices: BotulinumtoxinService[] = [
  {
    slug: "zornesfalte",
    title: "Zornesfalte (Glabella)",
    image: { src: placeholderImages[0], alt: "Placeholder für Botulinumtoxin-Behandlung der Zornesfalte" },
    paragraphs: [
      "Die Zornesfalte entsteht durch wiederholte Aktivität der Muskulatur zwischen den Augenbrauen und kann zu einem angespannten oder müden Ausdruck führen.",
      "Durch gezielte Injektionen mit Botulinumtoxin kann die Muskelaktivität reduziert und die Falte sichtbar entspannt werden, ohne die natürliche Mimik vollständig zu verändern.",
    ],
  },
  {
    slug: "stirnfalten",
    title: "Stirnfalten",
    image: { src: placeholderImages[1], alt: "Placeholder für Botulinumtoxin-Behandlung von Stirnfalten" },
    paragraphs: [
      "Horizontale Stirnfalten entstehen häufig durch ausgeprägte Mimik und wiederholtes Anheben der Augenbrauen.",
      "Ziel der Behandlung ist eine natürlich wirkende Glättung der Stirn bei erhaltener Ausdrucksfähigkeit und harmonischer Bewegung.",
      "Das ist übrigens einer der Bereiche, bei denen schlechte Behandlungen sofort künstlich wirken. Genau deshalb ist Anatomie wichtiger als „Einheiten verkaufen“.",
    ],
  },
  {
    slug: "kraehenfuesse",
    title: "Krähenfüße",
    image: { src: placeholderImages[2], alt: "Placeholder für Botulinumtoxin-Behandlung von Krähenfüßen" },
    paragraphs: [
      "Kleine Fältchen im Bereich der Augen entstehen oft beim Lachen oder Zusammenkneifen der Augen.",
      "Eine gezielte Behandlung kann die Haut um die Augen ruhiger und frischer wirken lassen, ohne den natürlichen Ausdruck zu verlieren.",
    ],
  },
  {
    slug: "brow-lift-augenbrauenlifting",
    title: "Brow Lift / Augenbrauenlifting",
    image: { src: placeholderImages[3], alt: "Placeholder für Brow Lift mit Botulinumtoxin" },
    paragraphs: [
      "Durch eine gezielte Entspannung bestimmter Muskelgruppen kann die Augenbrauenregion leicht angehoben und der Blick offener wirken.",
      "Die Behandlung erfolgt individuell angepasst an Anatomie und Mimik.",
    ],
  },
  {
    slug: "bunny-lines",
    title: "Bunny Lines",
    image: { src: placeholderImages[0], alt: "Placeholder für Bunny Lines Behandlung mit Botulinumtoxin" },
    paragraphs: [
      "Feine Falten seitlich der Nase entstehen häufig beim Lachen oder Zusammenziehen der Gesichtsmuskulatur.",
      "Eine dezente Behandlung kann die Region harmonischer wirken lassen.",
    ],
  },
  {
    slug: "gummy-smile",
    title: "Gummy Smile",
    image: { src: placeholderImages[1], alt: "Placeholder für Gummy Smile Behandlung mit Botulinumtoxin" },
    paragraphs: [
      "Wenn beim Lächeln besonders viel Zahnfleisch sichtbar wird, kann Botulinumtoxin helfen, die Oberlippenmuskulatur sanft zu entspannen.",
      "Das Ziel ist ein natürlicheres und harmonischeres Lächeln.",
    ],
  },
  {
    slug: "lip-flip",
    title: "Lip Flip",
    image: { src: placeholderImages[2], alt: "Placeholder für Lip Flip mit Botulinumtoxin" },
    paragraphs: [
      "Beim sogenannten Lip Flip wird die Muskulatur der Oberlippe gezielt entspannt, wodurch die Lippe beim Lächeln leicht nach außen kippen kann.",
      "Die Behandlung eignet sich für dezente Veränderungen ohne zusätzliches Volumen.",
    ],
  },
  {
    slug: "mundwinkel-anheben",
    title: "Mundwinkel anheben",
    image: { src: placeholderImages[3], alt: "Placeholder für Mundwinkel anheben mit Botulinumtoxin" },
    paragraphs: [
      "Mit zunehmender Muskelaktivität oder altersbedingten Veränderungen können die Mundwinkel nach unten gezogen wirken und dem Gesicht einen müden oder angespannten Ausdruck verleihen.",
      "Durch die gezielte Behandlung bestimmter Muskelgruppen mit Botulinumtoxin können die Mundwinkel sanft entlastet und die Gesichtszüge harmonischer wirken.",
      "Das Ziel ist ein natürlicher, entspannter Ausdruck ohne künstliche Veränderung der Mimik.",
    ],
  },
  {
    slug: "hyperhidrose-starkes-schwitzen",
    title: "Hyperhidrose (starkes Schwitzen)",
    image: { src: placeholderImages[0], alt: "Placeholder für Hyperhidrose-Behandlung mit Botulinumtoxin" },
    paragraphs: [
      "Bei übermäßigem Schwitzen kann Botulinumtoxin eingesetzt werden, um die Aktivität der Schweißdrüsen gezielt zu reduzieren.",
      "Häufig behandelte Regionen sind:",
      "Die Behandlung kann die Lebensqualität bei ausgeprägtem Schwitzen deutlich verbessern.",
    ],
    bullets: ["Achseln", "Hände", "Stirn"],
  },
  {
    slug: "masseter-zaehneknirschen-bruxismus",
    title: "Masseter-Behandlung / Zähneknirschen (Bruxismus)",
    image: { src: placeholderImages[1], alt: "Placeholder für Masseter-Behandlung mit Botulinumtoxin" },
    paragraphs: [
      "Eine überaktive Kaumuskulatur kann zu Zähneknirschen, Verspannungen oder einer ausgeprägten Kieferpartie führen.",
      "Botulinumtoxin kann die Muskelaktivität reduzieren und dadurch Beschwerden lindern sowie die Kieferkontur harmonisieren.",
    ],
  },
  {
    slug: "trapezmuskel-barbie-botox",
    title: "Trapezmuskel-Behandlung mit Botulinumtoxin (“Barbie-Botox”)",
    image: { src: placeholderImages[2], alt: "Placeholder für Trapezmuskel-Behandlung mit Botulinumtoxin" },
    paragraphs: [
      "Eine ausgeprägte Muskelspannung im Schulter- und Nackenbereich kann zu Beschwerden wie Verspannungen, Druckgefühl oder muskulärer Überaktivität führen. In manchen Fällen wirkt die Schulterpartie zusätzlich sehr breit oder dauerhaft angespannt.",
      "Durch die gezielte Behandlung des Trapezmuskels mit Botulinumtoxin kann die Muskelaktivität reduziert und die Schulter-Nacken-Region entlastet werden.",
      "Die Behandlung kann unter anderem dazu beitragen:",
      "Vor jeder Behandlung erfolgt eine individuelle ärztliche Untersuchung und Einschätzung der Anatomie sowie der muskulären Aktivität.",
    ],
    bullets: [
      "muskuläre Verspannungen zu reduzieren,",
      "Beschwerden im Schulter- und Nackenbereich zu lindern,",
      "und die Schulterkontur harmonischer wirken zu lassen.",
    ],
  },
  {
    slug: "chronische-migraene",
    title: "Botulinumtoxin bei chronischer Migräne",
    image: { src: placeholderImages[3], alt: "Placeholder für Botulinumtoxin bei chronischer Migräne" },
    paragraphs: [
      "Botulinumtoxin kann in bestimmten Fällen unterstützend zur Behandlung chronischer Migräne eingesetzt werden.",
      "Dabei wird das Medikament gezielt in definierte Muskel- und Triggerpunkte im Bereich von Stirn, Schläfen, Hinterkopf, Nacken und Schultern injiziert.",
      "Die Behandlung kann helfen:",
      "Ob eine Behandlung sinnvoll ist, hängt von Art, Häufigkeit und Vorgeschichte der Beschwerden ab und wird individuell ärztlich beurteilt.",
    ],
    bullets: [
      "die Häufigkeit von Migräneattacken zu reduzieren,",
      "muskuläre Spannung zu verringern,",
      "und die Lebensqualität bei chronischer Migräne zu verbessern.",
    ],
  },
];

export const botulinumtoxinCommonSections = [
  {
    title: "Wie läuft die Behandlung ab?",
    paragraphs: [
      "Vor jeder Behandlung erfolgt eine ausführliche ärztliche Beratung und Analyse Ihrer Mimik sowie der betroffenen Muskelbereiche.",
      "Die Behandlung selbst dauert in der Regel etwa 30 Minuten und erfolgt ambulant in unserer Praxis in Berlin-Mitte.",
      "Das Botulinumtoxin wird mit sehr feinen Nadeln gezielt in die entsprechenden Muskelgruppen injiziert. Die Behandlung ist meist gut verträglich und erfordert in der Regel keine Ausfallzeit.",
    ],
  },
  {
    title: "Wann tritt die Wirkung ein?",
    paragraphs: [
      "Die Wirkung beginnt meist nach wenigen Tagen und entfaltet sich vollständig nach etwa 14 Tagen.",
      "Wie lange die Wirkung anhält, ist individuell unterschiedlich und hängt unter anderem von Stoffwechsel, Muskelaktivität und behandelter Region ab.",
    ],
  },
  {
    title: "Was sollte ich nach der Behandlung beachten?",
    paragraphs: [
      "Direkt nach der Behandlung sollten intensive körperliche Belastung, Sauna, Solarium oder starke Druckmassage im behandelten Bereich für einige Stunden vermieden werden.",
      "Im Alltag sind Sie in der Regel sofort wieder gesellschaftsfähig.",
    ],
  },
  {
    title: "Was kostet eine Botulinumtoxin-Behandlung?",
    paragraphs: [
      "Die Kosten beginnen ab 199 €, abhängig von Behandlungsareal, Muskelaktivität und individuellem Aufwand.",
      "Im Rahmen eines persönlichen Beratungsgesprächs besprechen wir transparent die voraussichtlichen Kosten und das passende Behandlungskonzept.",
    ],
  },
  {
    title: "Individuelle ästhetische Medizin statt Standardprotokolle",
    paragraphs: [
      "Jedes Gesicht ist unterschiedlich. Deshalb entwickeln wir in der Praxis Jona individuelle Behandlungskonzepte statt standardisierter „One-size-fits-all“-Behandlungen.",
      "Unser Ansatz kombiniert ästhetische Medizin mit anatomischem Verständnis, moderner Diagnostik und einem natürlichen Blick auf Ästhetik und Hautalterung.",
    ],
  },
];

export const botulinumtoxinFaq = [
  {
    question: "Ab welchem Alter ist eine Behandlung sinnvoll?",
    answer:
      "Das hängt weniger vom Alter als von Hautqualität, Mimik und individueller Muskelaktivität ab. Bei manchen Menschen entstehen mimische Falten bereits früh, während andere erst später eine Behandlung wünschen.",
  },
  {
    question: "Sieht man nach der Behandlung unnatürlich aus?",
    answer:
      "Unser Ziel sind natürliche Ergebnisse mit erhaltener Mimik. Die Behandlung wird individuell an Anatomie, Muskelaktivität und Gesichtsausdruck angepasst.",
  },
  {
    question: "Wie lange hält die Wirkung von Botulinumtoxin an?",
    answer: "Die Wirkung hält meist etwa 3 bis 4 Monate an. Dauer und Intensität können individuell unterschiedlich sein.",
  },
  {
    question: "Wann sollte ich mit Sport nach der Behandlung warten?",
    answer: "Auf intensive körperliche Belastung, Sauna oder Solarium sollte für 24 Stunden nach der Behandlung verzichtet werden.",
  },
  {
    question: "Ist die Behandlung schmerzhaft?",
    answer:
      "Die Behandlung wird mit sehr feinen Nadeln durchgeführt und ist in der Regel gut verträglich. Die meisten Patientinnen und Patienten empfinden die Injektionen nur als kurzes leichtes Piksen. Bei empfindlichen Regionen oder auf Wunsch kann vor der Behandlung eine lokale Betäubung mittels Betäubungscreme durchgeführt werden.",
  },
  {
    question: "Kann Botulinumtoxin vorbeugend eingesetzt werden?",
    answer:
      "Ja. In bestimmten Fällen kann eine frühzeitige Behandlung helfen, tiefe mimische Falten langfristig zu reduzieren und die Haut gleichmäßiger wirken zu lassen.",
  },
  {
    question: "Was ist der Unterschied zwischen Botulinumtoxin und Hyaluronsäure?",
    answer:
      "Botulinumtoxin entspannt gezielt bestimmte Muskeln und reduziert dadurch mimische Falten. Hyaluronsäure dient dagegen vor allem dem Volumenaufbau oder der Unterstützung der Hautfeuchtigkeit.",
  },
  {
    question: "Wie oft muss die Behandlung wiederholt werden?",
    answer:
      "Die Behandlung wird meist alle 3 bis 6 Monate wiederholt, abhängig von Muskelaktivität, Stoffwechsel und gewünschtem Ergebnis.",
  },
  {
    question: "Kann ich direkt nach der Behandlung arbeiten oder ausgehen?",
    answer: "Ja. In der Regel sind Sie direkt nach der Behandlung wieder gesellschaftsfähig.",
  },
  {
    question: "Gibt es Nebenwirkungen?",
    answer:
      "Vorübergehend können leichte Rötungen, kleine Schwellungen oder selten kleine Hämatome an den Einstichstellen auftreten. Schwerwiegende Nebenwirkungen sind bei fachgerechter Anwendung selten.",
  },
  {
    question: "Wird die Behandlung individuell angepasst?",
    answer:
      "Ja. Jede Behandlung erfolgt auf Basis von Anatomie, Muskelaktivität, Hautqualität und persönlichen Zielen. In der Praxis arbeiten wir nicht mit standardisierten „Einheiten-Schemata“.",
  },
  {
    question: "Kann Botulinumtoxin mit anderen Behandlungen kombiniert werden?",
    answer:
      "Ja. Häufig kombinieren wir Botulinumtoxin mit regenerativen Verfahren wie PRP, medizinischem Microneedling, Skin Boostern oder Polynukleotiden, um Hautqualität, Hautstruktur und natürliche Ergebnisse zusätzlich zu unterstützen.\n\nAuch Kombinationen aus Botulinumtoxin und medizinischem Microneedling können sinnvoll sein, da unterschiedliche Ebenen der Hautalterung und Muskelaktivität behandelt werden.\n\nWelche Kombination geeignet ist, hängt von Hautbild, Anatomie, Beschwerden und individuellen Zielen ab und wird im Rahmen der ärztlichen Beratung individuell entschieden.",
  },
];

export function getBotulinumtoxinService(slug: string) {
  return botulinumtoxinServices.find((service) => service.slug === slug);
}
