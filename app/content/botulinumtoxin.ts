export type BotulinumtoxinService = {
  slug: string;
  pricingSlug: string;
  title: string;
  image: {
    src: string;
    alt: string;
    objectPositionClass?: string;
  };
  paragraphs: string[];
  bullets?: string[];
};

export type BotulinumtoxinPageContent = {
  locale: "de" | "en";
  intro: {
    title: string;
    subtitle: string;
    description: string;
    secondaryDescription: string;
    canonical: string;
    alternate: string;
  };
  overview: {
    title: string;
    paragraphs: string[];
  };
  services: BotulinumtoxinService[];
  commonSections: { title: string; paragraphs: string[] }[];
  faq: { question: string; answer: string }[];
  labels: {
    treatmentEyebrow: string;
    basicsEyebrow: string;
    areasEyebrow: string;
    areasTitle: string;
    book: string;
    prices: string;
    learnMore: string;
    faqTitle: string;
    moreAreas: string;
  };
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

const botulinumtoxinImages = {
  zornesfalte: "/images/botulinumtoxin/zornesfalte-glabella.webp",
  stirnfalten: "/images/botulinumtoxin/stirnfalten.webp",
  kraehenfuesse: "/images/botulinumtoxin/kraehenfuesse.webp",
  browLift: "/images/botulinumtoxin/brow-lift-augenbrauenlifting.webp",
  bunnyLines: "/images/botulinumtoxin/bunny-lines.webp",
  gummySmile: "/images/botulinumtoxin/gummy-smile.webp",
  lipFlip: "/images/botulinumtoxin/lip-flip.webp",
  mundwinkel: "/images/botulinumtoxin/mundwinkel-anheben.webp",
  hyperhidrose: "/images/botulinumtoxin/hyperhidrose-starkes-schwitzen.webp",
  masseter: "/images/botulinumtoxin/masseter-bruxismus.webp",
  trapezmuskel: "/images/botulinumtoxin/trapezmuskel-barbie-botox.webp",
  migraene: "/images/botulinumtoxin/chronische-migraene.webp",
} as const;

export const botulinumtoxinServices: BotulinumtoxinService[] = [
  {
    slug: "zornesfalte",
    pricingSlug: "zornesfalte",
    title: "Zornesfalte (Glabella)",
    image: { src: botulinumtoxinImages.zornesfalte, alt: "Modell mit Fokus auf die Zornesfalte zwischen den Augenbrauen" },
    paragraphs: [
      "Die Zornesfalte entsteht durch wiederholte Aktivität der Muskulatur zwischen den Augenbrauen und kann zu einem angespannten oder müden Ausdruck führen.",
      "Durch gezielte Injektionen mit Botulinumtoxin kann die Muskelaktivität reduziert und die Falte sichtbar entspannt werden, ohne die natürliche Mimik vollständig zu verändern.",
    ],
  },
  {
    slug: "stirnfalten",
    pricingSlug: "stirnfalten",
    title: "Stirnfalten",
    image: { src: botulinumtoxinImages.stirnfalten, alt: "Modell mit Fokus auf horizontale Stirnfalten" },
    paragraphs: [
      "Horizontale Stirnfalten entstehen häufig durch ausgeprägte Mimik und wiederholtes Anheben der Augenbrauen.",
      "Ziel der Behandlung ist eine natürlich wirkende Glättung der Stirn bei erhaltener Ausdrucksfähigkeit und harmonischer Bewegung.",
      "Das ist übrigens einer der Bereiche, bei denen schlechte Behandlungen sofort künstlich wirken. Genau deshalb ist Anatomie wichtiger als „Einheiten verkaufen“.",
    ],
  },
  {
    slug: "kraehenfuesse",
    pricingSlug: "kraehenfuesse",
    title: "Krähenfüße",
    image: { src: botulinumtoxinImages.kraehenfuesse, alt: "Modell mit Fokus auf Krähenfüße im äußeren Augenbereich" },
    paragraphs: [
      "Kleine Fältchen im Bereich der Augen entstehen oft beim Lachen oder Zusammenkneifen der Augen.",
      "Eine gezielte Behandlung kann die Haut um die Augen ruhiger und frischer wirken lassen, ohne den natürlichen Ausdruck zu verlieren.",
    ],
  },
  {
    slug: "brow-lift-augenbrauenlifting",
    pricingSlug: "browlift",
    title: "Brow Lift / Augenbrauenlifting",
    image: { src: botulinumtoxinImages.browLift, alt: "Modell mit Fokus auf Augenbrauen und Brow-Lift-Bereich" },
    paragraphs: [
      "Durch eine gezielte Entspannung bestimmter Muskelgruppen kann die Augenbrauenregion leicht angehoben und der Blick offener wirken.",
      "Die Behandlung erfolgt individuell angepasst an Anatomie und Mimik.",
    ],
  },
  {
    slug: "bunny-lines",
    pricingSlug: "bunny-lines",
    title: "Bunny Lines",
    image: { src: botulinumtoxinImages.bunnyLines, alt: "Modell mit Fokus auf Bunny Lines seitlich der Nase" },
    paragraphs: [
      "Feine Falten seitlich der Nase entstehen häufig beim Lachen oder Zusammenziehen der Gesichtsmuskulatur.",
      "Eine dezente Behandlung kann die Region harmonischer wirken lassen.",
    ],
  },
  {
    slug: "gummy-smile",
    pricingSlug: "gummy-smile",
    title: "Gummy Smile",
    image: { src: botulinumtoxinImages.gummySmile, alt: "Modell mit Fokus auf Oberlippe und Gummy-Smile-Bereich" },
    paragraphs: [
      "Wenn beim Lächeln besonders viel Zahnfleisch sichtbar wird, kann Botulinumtoxin helfen, die Oberlippenmuskulatur sanft zu entspannen.",
      "Das Ziel ist ein natürlicheres und harmonischeres Lächeln.",
    ],
  },
  {
    slug: "lip-flip",
    pricingSlug: "lip-flip",
    title: "Lip Flip",
    image: { src: botulinumtoxinImages.lipFlip, alt: "Modell mit Fokus auf die Oberlippe für Lip Flip" },
    paragraphs: [
      "Beim sogenannten Lip Flip wird die Muskulatur der Oberlippe gezielt entspannt, wodurch die Lippe beim Lächeln leicht nach außen kippen kann.",
      "Die Behandlung eignet sich für dezente Veränderungen ohne zusätzliches Volumen.",
    ],
  },
  {
    slug: "mundwinkel-anheben",
    pricingSlug: "mundwinkel",
    title: "Mundwinkel anheben",
    image: { src: botulinumtoxinImages.mundwinkel, alt: "Modell mit Fokus auf Mundwinkel und unteres Gesicht" },
    paragraphs: [
      "Mit zunehmender Muskelaktivität oder altersbedingten Veränderungen können die Mundwinkel nach unten gezogen wirken und dem Gesicht einen müden oder angespannten Ausdruck verleihen.",
      "Durch die gezielte Behandlung bestimmter Muskelgruppen mit Botulinumtoxin können die Mundwinkel sanft entlastet und die Gesichtszüge harmonischer wirken.",
      "Das Ziel ist ein natürlicher, entspannter Ausdruck ohne künstliche Veränderung der Mimik.",
    ],
  },
  {
    slug: "hyperhidrose-starkes-schwitzen",
    pricingSlug: "hyperhidrose",
    title: "Hyperhidrose (starkes Schwitzen)",
    image: { src: botulinumtoxinImages.hyperhidrose, alt: "Modell mit Fokus auf Achselbereich bei Hyperhidrose" },
    paragraphs: [
      "Bei übermäßigem Schwitzen kann Botulinumtoxin eingesetzt werden, um die Aktivität der Schweißdrüsen gezielt zu reduzieren.",
      "Häufig behandelte Regionen sind:",
      "Die Behandlung kann die Lebensqualität bei ausgeprägtem Schwitzen deutlich verbessern.",
    ],
    bullets: ["Achseln", "Hände", "Stirn"],
  },
  {
    slug: "masseter-zaehneknirschen-bruxismus",
    pricingSlug: "bruxismus",
    title: "Masseter-Behandlung / Zähneknirschen (Bruxismus)",
    image: { src: botulinumtoxinImages.masseter, alt: "Modell mit Fokus auf Kiefer und Masseter-Muskel" },
    paragraphs: [
      "Eine überaktive Kaumuskulatur kann zu Zähneknirschen, Verspannungen oder einer ausgeprägten Kieferpartie führen.",
      "Botulinumtoxin kann die Muskelaktivität reduzieren und dadurch Beschwerden lindern sowie die Kieferkontur harmonisieren.",
    ],
  },
  {
    slug: "trapezmuskel-barbie-botox",
    pricingSlug: "trapezmuskel",
    title: "Trapezmuskel-Behandlung mit Botulinumtoxin (“Barbie-Botox”)",
    image: { src: botulinumtoxinImages.trapezmuskel, alt: "Modell mit Fokus auf Nacken, Schultern und Trapezmuskel" },
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
    pricingSlug: "migraene",
    title: "Botulinumtoxin bei chronischer Migräne",
    image: { src: botulinumtoxinImages.migraene, alt: "Modell mit Fokus auf Schläfenbereich bei chronischer Migräne" },
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

export const botulinumtoxinIntroEn = {
  title: "Botulinum toxin treatment in Berlin-Mitte",
  subtitle: "Natural results through precise aesthetic medicine",
  description:
    "At Praxis Jona near Rosenthaler Platz, we use botulinum toxin (“Botox”) individually and with medical precision, aiming to gently relax expression lines while preserving natural radiance.",
  secondaryDescription:
    "We do not treat according to fixed standard protocols. We plan around anatomy, muscle activity, skin quality and your personal goals.",
  canonical: "/en/botox-treatment",
  alternate: "/botox-behandlung",
};

export const botulinumtoxinOverviewEn = {
  title: "What is botulinum toxin?",
  paragraphs: [
    "Botulinum toxin is a medication that has been established for many years in aesthetic and medical treatment.",
    "It selectively reduces the activity of specific muscles and can therefore smooth expression lines or help prevent them from becoming deeper.",
    "Our focus is on natural-looking results, not stiff facial features or overcorrected expression. Most people today want to look fresher, not “different”. That is an important distinction that surprisingly many treatments ignore.",
  ],
};

export const botulinumtoxinServicesEn: BotulinumtoxinService[] = [
  {
    slug: "frown-lines-glabella",
    pricingSlug: "zornesfalte",
    title: "Frown lines (glabella)",
    image: { src: botulinumtoxinImages.zornesfalte, alt: "Model with focus on frown lines between the eyebrows" },
    paragraphs: [
      "Frown lines develop through repeated activity of the muscles between the eyebrows and can create a tense or tired expression.",
      "Targeted injections with botulinum toxin can reduce muscle activity and visibly relax the line without completely changing natural facial expression.",
    ],
  },
  {
    slug: "forehead-lines",
    pricingSlug: "stirnfalten",
    title: "Forehead lines",
    image: { src: botulinumtoxinImages.stirnfalten, alt: "Model with focus on horizontal forehead lines" },
    paragraphs: [
      "Horizontal forehead lines often develop through pronounced facial expression and repeated lifting of the eyebrows.",
      "The goal of treatment is natural-looking smoothing of the forehead while preserving expressiveness and harmonious movement.",
      "This is one of the areas where poor treatments immediately look artificial. That is exactly why anatomy matters more than “selling units”.",
    ],
  },
  {
    slug: "crows-feet",
    pricingSlug: "kraehenfuesse",
    title: "Crow’s feet",
    image: { src: botulinumtoxinImages.kraehenfuesse, alt: "Model with focus on crow's feet around the outer eye" },
    paragraphs: [
      "Small lines around the eyes often appear when laughing or squinting.",
      "Targeted treatment can make the skin around the eyes look calmer and fresher without losing natural expression.",
    ],
  },
  {
    slug: "brow-lift",
    pricingSlug: "browlift",
    title: "Brow lift / eyebrow lift",
    image: { src: botulinumtoxinImages.browLift, alt: "Model with focus on eyebrows and brow lift area" },
    paragraphs: [
      "Targeted relaxation of specific muscle groups can slightly lift the brow region and make the eyes appear more open.",
      "Treatment is individually adapted to anatomy and facial movement.",
    ],
  },
  {
    slug: "bunny-lines",
    pricingSlug: "bunny-lines",
    title: "Bunny lines",
    image: { src: botulinumtoxinImages.bunnyLines, alt: "Model with focus on bunny lines beside the nose" },
    paragraphs: [
      "Fine lines at the sides of the nose often appear when laughing or contracting facial muscles.",
      "A subtle treatment can make the region appear more harmonious.",
    ],
  },
  {
    slug: "gummy-smile",
    pricingSlug: "gummy-smile",
    title: "Gummy smile",
    image: { src: botulinumtoxinImages.gummySmile, alt: "Model with focus on upper lip and gummy smile area" },
    paragraphs: [
      "If a lot of gum is visible when smiling, botulinum toxin can help gently relax the upper lip muscles.",
      "The goal is a more natural and harmonious smile.",
    ],
  },
  {
    slug: "lip-flip",
    pricingSlug: "lip-flip",
    title: "Lip flip",
    image: { src: botulinumtoxinImages.lipFlip, alt: "Model with focus on the upper lip for lip flip" },
    paragraphs: [
      "In a so-called lip flip, the upper lip muscle is selectively relaxed, which can allow the lip to turn slightly outward when smiling.",
      "The treatment is suitable for subtle changes without adding volume.",
    ],
  },
  {
    slug: "mouth-corners",
    pricingSlug: "mundwinkel",
    title: "Lifting the corners of the mouth",
    image: { src: botulinumtoxinImages.mundwinkel, alt: "Model with focus on mouth corners and lower face" },
    paragraphs: [
      "With increasing muscle activity or age-related changes, the corners of the mouth can appear pulled downward and give the face a tired or tense expression.",
      "Targeted treatment of specific muscle groups with botulinum toxin can gently relieve the corners of the mouth and make facial features appear more harmonious.",
      "The goal is a natural, relaxed expression without artificial changes to facial movement.",
    ],
  },
  {
    slug: "hyperhidrosis-excessive-sweating",
    pricingSlug: "hyperhidrose",
    title: "Hyperhidrosis (excessive sweating)",
    image: { src: botulinumtoxinImages.hyperhidrose, alt: "Model with focus on the underarm area for hyperhidrosis" },
    paragraphs: [
      "In cases of excessive sweating, botulinum toxin can be used to selectively reduce sweat gland activity.",
      "Commonly treated areas are:",
      "Treatment can significantly improve quality of life in pronounced sweating.",
    ],
    bullets: ["armpits", "hands", "forehead"],
  },
  {
    slug: "masseter-bruxism",
    pricingSlug: "bruxismus",
    title: "Masseter treatment / teeth grinding (bruxism)",
    image: { src: botulinumtoxinImages.masseter, alt: "Model with focus on jaw and masseter muscle" },
    paragraphs: [
      "Overactive chewing muscles can cause teeth grinding, tension or a pronounced jaw area.",
      "Botulinum toxin can reduce muscle activity and thereby relieve symptoms as well as harmonize the jaw contour.",
    ],
  },
  {
    slug: "trapezius-barbie-botox",
    pricingSlug: "trapezmuskel",
    title: "Trapezius treatment with botulinum toxin (“Barbie Botox”)",
    image: { src: botulinumtoxinImages.trapezmuskel, alt: "Model with focus on neck, shoulders and trapezius muscle" },
    paragraphs: [
      "Pronounced muscle tension in the shoulder and neck area can lead to symptoms such as tightness, pressure or muscular overactivity. In some cases, the shoulder area also appears very broad or permanently tense.",
      "Targeted treatment of the trapezius muscle with botulinum toxin can reduce muscle activity and relieve the shoulder and neck region.",
      "The treatment may help to:",
      "Before every treatment, an individual medical examination and assessment of anatomy and muscular activity is carried out.",
    ],
    bullets: [
      "reduce muscular tension,",
      "relieve symptoms in the shoulder and neck area,",
      "and make the shoulder contour appear more harmonious.",
    ],
  },
  {
    slug: "chronic-migraine",
    pricingSlug: "migraene",
    title: "Botulinum toxin for chronic migraine",
    image: { src: botulinumtoxinImages.migraene, alt: "Model with focus on temple area for chronic migraine" },
    paragraphs: [
      "Botulinum toxin can be used supportively in selected cases for the treatment of chronic migraine.",
      "The medication is injected into defined muscle and trigger points in the area of the forehead, temples, back of the head, neck and shoulders.",
      "The treatment can help to:",
      "Whether treatment is useful depends on the type, frequency and history of the symptoms and is assessed individually by a physician.",
    ],
    bullets: [
      "reduce the frequency of migraine attacks,",
      "reduce muscular tension,",
      "and improve quality of life in chronic migraine.",
    ],
  },
];

export const botulinumtoxinCommonSectionsEn = [
  {
    title: "How does the treatment work?",
    paragraphs: [
      "Before every treatment, there is a detailed medical consultation and analysis of your facial expression as well as the affected muscle areas.",
      "The treatment itself usually takes about 30 minutes and is performed as an outpatient procedure in our practice in Berlin-Mitte.",
      "The botulinum toxin is injected into the relevant muscle groups with very fine needles. The treatment is usually well tolerated and generally requires no downtime.",
    ],
  },
  {
    title: "When does the effect start?",
    paragraphs: [
      "The effect usually begins after a few days and develops fully after about 14 days.",
      "How long the effect lasts varies individually and depends, among other things, on metabolism, muscle activity and the treated region.",
    ],
  },
  {
    title: "What should I keep in mind after treatment?",
    paragraphs: [
      "Immediately after treatment, intensive physical activity, sauna, solarium or strong pressure massage in the treated area should be avoided for several hours.",
      "In everyday life, you are usually socially presentable again immediately.",
    ],
  },
  {
    title: "What does botulinum toxin treatment cost?",
    paragraphs: [
      "Costs start from €199, depending on treatment area, muscle activity and individual effort.",
      "During a personal consultation, we transparently discuss the expected costs and the suitable treatment concept.",
    ],
  },
  {
    title: "Individual aesthetic medicine instead of standard protocols",
    paragraphs: [
      "Every face is different. That is why we develop individual treatment concepts at Praxis Jona instead of standardized “one-size-fits-all” treatments.",
      "Our approach combines aesthetic medicine with anatomical understanding, modern diagnostics and a natural view of aesthetics and skin aging.",
    ],
  },
];

export const botulinumtoxinFaqEn = [
  { question: "At what age does treatment make sense?", answer: "This depends less on age than on skin quality, facial expression and individual muscle activity. In some people, expression lines appear early, while others consider treatment later." },
  { question: "Will I look unnatural after treatment?", answer: "Our goal is natural results with preserved facial expression. Treatment is adapted individually to anatomy, muscle activity and facial expression." },
  { question: "How long does the effect of botulinum toxin last?", answer: "The effect usually lasts about 3 to 4 months. Duration and intensity can vary individually." },
  { question: "When should I wait before exercising after treatment?", answer: "Intensive physical activity, sauna or solarium should be avoided for 24 hours after treatment." },
  { question: "Is the treatment painful?", answer: "Treatment is performed with very fine needles and is usually well tolerated. Most patients experience the injections only as a brief, light pinch. For sensitive areas or on request, a local anesthetic cream can be applied before treatment." },
  { question: "Can botulinum toxin be used preventively?", answer: "Yes. In selected cases, early treatment can help reduce deep expression lines over the long term and make the skin appear more even." },
  { question: "What is the difference between botulinum toxin and hyaluronic acid?", answer: "Botulinum toxin selectively relaxes specific muscles and thereby reduces expression lines. Hyaluronic acid is mainly used for volume restoration or supporting skin hydration." },
  { question: "How often does treatment need to be repeated?", answer: "Treatment is usually repeated every 3 to 6 months, depending on muscle activity, metabolism and desired result." },
  { question: "Can I work or go out directly after treatment?", answer: "Yes. In general, you are socially presentable again directly after treatment." },
  { question: "Are there side effects?", answer: "Temporary mild redness, small swellings or rarely small bruises at the injection sites can occur. Serious side effects are rare when treatment is performed professionally." },
  { question: "Is treatment individually adapted?", answer: "Yes. Every treatment is based on anatomy, muscle activity, skin quality and personal goals. In the practice, we do not work with standardized “unit schemes”." },
  {
    question: "Can botulinum toxin be combined with other treatments?",
    answer:
      "Yes. We often combine botulinum toxin with regenerative procedures such as PRP, medical microneedling, skin boosters or polynucleotides to additionally support skin quality, skin texture and natural results.\n\nCombinations of botulinum toxin and medical microneedling can also be useful because different levels of skin aging and muscle activity are treated.\n\nWhich combination is suitable depends on skin findings, anatomy, symptoms and individual goals and is decided individually during medical consultation.",
  },
];

export const botulinumtoxinContentDe: BotulinumtoxinPageContent = {
  locale: "de",
  intro: botulinumtoxinIntro,
  overview: botulinumtoxinOverview,
  services: botulinumtoxinServices,
  commonSections: botulinumtoxinCommonSections,
  faq: botulinumtoxinFaq,
  labels: {
    treatmentEyebrow: "Botulinumtoxin Behandlung",
    basicsEyebrow: "Grundlagen",
    areasEyebrow: "Behandlungsbereiche",
    areasTitle: "Behandlungsbereiche mit Botulinumtoxin",
    book: "Termin buchen",
    prices: "Preise ansehen",
    learnMore: "Mehr erfahren",
    faqTitle: "Häufige Fragen zur Botulinumtoxin-Behandlung",
    moreAreas: "Weitere Behandlungsbereiche",
  },
};

export const botulinumtoxinContentEn: BotulinumtoxinPageContent = {
  locale: "en",
  intro: botulinumtoxinIntroEn,
  overview: botulinumtoxinOverviewEn,
  services: botulinumtoxinServicesEn,
  commonSections: botulinumtoxinCommonSectionsEn,
  faq: botulinumtoxinFaqEn,
  labels: {
    treatmentEyebrow: "Botulinum toxin treatment",
    basicsEyebrow: "Basics",
    areasEyebrow: "Treatment areas",
    areasTitle: "Treatment areas with botulinum toxin",
    book: "Book appointment",
    prices: "View prices",
    learnMore: "Learn more",
    faqTitle: "Frequently asked questions about botulinum toxin treatment",
    moreAreas: "More treatment areas",
  },
};

export const botulinumtoxinSlugPairs = botulinumtoxinServices.map((service, index) => ({
  de: service.slug,
  en: botulinumtoxinServicesEn[index].slug,
}));

export function getBotulinumtoxinServiceEn(slug: string) {
  return botulinumtoxinServicesEn.find((service) => service.slug === slug);
}

export function englishBotulinumtoxinSlugForGerman(slug: string) {
  return botulinumtoxinSlugPairs.find((pair) => pair.de === slug)?.en;
}

export function germanBotulinumtoxinSlugForEnglish(slug: string) {
  return botulinumtoxinSlugPairs.find((pair) => pair.en === slug)?.de;
}
