import { Constants } from "app/Constants";

export type Locale = "de" | "en";

export type ServiceLink = {
  title: string;
  description: string;
  href: string;
  eyebrow?: string;
};

export type CategoryContent = {
  locale: Locale;
  title: string;
  description: string;
  eyebrow: string;
  heroImage?: {
    src: string;
    alt: string;
  };
  cta: string;
  ctaHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
  sections: {
    title: string;
    intro: string;
    services: ServiceLink[];
  }[];
  faq: { question: string; answer: string }[];
};

export type LandingContent = {
  locale: Locale;
  title: string;
  description: string;
  eyebrow: string;
  canonical: string;
  alternate: string;
  cta: string;
  secondaryCta?: string;
  secondaryHref?: string;
  intro: string;
  facts: { label: string; value: string }[];
  sections: { title: string; body: string[]; bullets?: string[] }[];
  related: ServiceLink[];
  faq: { question: string; answer: string }[];
};

export const categoryContent: Record<string, CategoryContent> = {
  generalDe: {
    locale: "de",
    title: "Hausärztliche Leistungen in Berlin-Mitte",
    eyebrow: "Allgemeinmedizin & Innere Medizin",
    description: "Strukturierte hausärztliche Versorgung, akute Abklärung, Vorsorge und Diagnostik in der Praxis Jona am Rosenthaler Platz.",
    cta: "Termin buchen",
    ctaHref: Constants.appointmentUrl,
    secondaryCta: "Kontakt aufnehmen",
    secondaryHref: "/kontakt",
    sections: [
      {
        title: "Versorgung im Alltag",
        intro: "Für akute Beschwerden und kontinuierliche Betreuung verbinden wir persönliche Anamnese, körperliche Untersuchung und sinnvolle Diagnostik.",
        services: [
          { title: "Akutsprechstunde", href: "/kontakt", description: "Einschätzung akuter Beschwerden mit klarer Empfehlung zum weiteren Vorgehen." },
          { title: "Hausärztliche Versorgung", href: "/hausaerztliche-leistungen", description: "Kontinuierliche Betreuung bei internistischen und allgemeinmedizinischen Anliegen." },
          { title: "Impfungen", href: "/hausaerztliche-leistungen", description: "Impfstatus-Check und Auffrischungen nach aktueller medizinischer Empfehlung." },
          { title: "Gesetzlicher Check-up", href: "/leistungen/gesetzliche-check-up", description: "Vorsorgeuntersuchung mit Anamnese, Untersuchung und Basisdiagnostik." },
        ],
      },
    ],
    faq: [
      { question: "Kann ich mit akuten Beschwerden kommen?", answer: "Bitte kontaktieren Sie die Praxis vorab, besonders bei Fieber oder ansteckenden Symptomen. So können wir den passenden Ablauf planen." },
      { question: "Welche Leistungen sind gesetzlich?", answer: "Die gesetzliche Versorgung umfasst unter anderem hausärztliche Betreuung, Impfberatung und Check-ups nach den Vorgaben der Krankenkassen." },
      { question: "Wo befindet sich die Praxis?", answer: "Die Praxis Jona liegt in der Torstraße 125 in Berlin-Mitte, gut erreichbar am Rosenthaler Platz." },
    ],
  },
  generalEn: {
    locale: "en",
    title: "General Medicine in Berlin-Mitte",
    eyebrow: "General & Internal Medicine",
    description: "Structured primary care, acute assessment, preventive care and diagnostics at Praxis Jona near Rosenthaler Platz.",
    cta: "Book appointment",
    ctaHref: Constants.appointmentUrl,
    secondaryCta: "Contact",
    secondaryHref: "/en/contact",
    sections: [
      {
        title: "Everyday medical care",
        intro: "For acute symptoms and ongoing care, we combine personal history, physical examination and appropriate diagnostics.",
        services: [
          { title: "Acute consultation", href: "/en/contact", description: "Assessment of acute symptoms with a clear recommendation for next steps." },
          { title: "General medical care", href: "/en/general-medicine", description: "Ongoing support for internal medicine and general medical concerns." },
          { title: "Vaccinations", href: "/en/general-medicine", description: "Vaccination status checks and boosters according to medical guidance." },
          { title: "Public insurance check-up", href: "/en/services/public-insurance-check-up", description: "Preventive check-up with medical history, examination and basic diagnostics." },
        ],
      },
    ],
    faq: [
      { question: "Can I come in with acute symptoms?", answer: "Please contact the practice in advance, especially if you have fever or infectious symptoms, so we can plan the right process." },
      { question: "Which services are statutory/public-insurance services?", answer: "Public-insurance care includes general medical care, vaccination guidance and check-ups according to insurer rules." },
      { question: "Where is the practice located?", answer: "Praxis Jona is located at Torstraße 125 in Berlin-Mitte, close to Rosenthaler Platz." },
    ],
  },
  aestheticDe: {
    locale: "de",
    title: "Ästhetische Medizin in Berlin-Mitte",
    eyebrow: "Ärztliche Ästhetik",
    description: "Botulinumtoxin, PRP, Microneedling und Polynukleotide in der Praxis Jona am Rosenthaler Platz. Natürlich wirkende Ergebnisse beginnen mit einer guten ärztlichen Einschätzung.",
    heroImage: {
      src: "/images/clinic/clinic-philo-2025.jpg",
      alt: "Behandlungsstuhl für ästhetische Medizin in der Praxis Jona in Berlin-Mitte",
    },
    cta: "Termin buchen",
    ctaHref: Constants.appointmentUrl,
    secondaryCta: "Botox-Preise ansehen",
    secondaryHref: "/botox-preise",
    sections: [
      {
        title: "Ästhetische Behandlungen mit medizinischer Einordnung",
        intro: "Wir behandeln nicht nach Schema, sondern nach Anatomie, Hautbild, Mimik und Zielsetzung. In der Beratung klären wir, welches Verfahren zu Ihrem Anliegen passt und wo die Grenzen liegen.",
        services: [
          { title: "Botulinumtoxin", href: "/botox-behandlung", eyebrow: "Mimik & Falten", description: "Für Patientinnen und Patienten, die mimische Falten wie Zornesfalte, Stirn oder Krähenfüße gezielt behandeln lassen möchten." },
          { title: "PRP Gesicht & Haut", href: "/aesthetik/prp-behandlung", eyebrow: "Regeneration", description: "Eigenblutbasiertes Verfahren, das je nach Befund Hautqualität, Frische und Regeneration unterstützen kann." },
          { title: "PRP bei Haarausfall", href: "/leistungen/prp-haarausfall", eyebrow: "Haarkonzept", description: "PRP der Kopfhaut als möglicher Bestandteil eines ärztlichen Behandlungskonzepts bei Haarausfall." },
          { title: "Microneedling", href: "/aesthetik/microneedling", eyebrow: "Struktur", description: "Für Hautstruktur, Porenbild, feine Linien und ausgewählte Narbenbilder nach individueller Hautanalyse." },
          { title: "Polynukleotide", href: "/aesthetik/polynukleotide", eyebrow: "Skin Quality", description: "Regenerative Behandlung für Hautqualität, Spannkraft und sensible Areale wie die Augenpartie." },
          { title: "Hautbild & Regeneration", href: "/aesthetik/hautbild-verbessern", eyebrow: "Vergleich", description: "Vergleichen Sie PRP, Microneedling und Polynukleotide nach Ziel, Hautbild und Behandlungslogik." },
        ],
      },
      {
        title: "Welche Behandlung passt zu welchem Ziel?",
        intro: "Viele Patientinnen und Patienten wissen bereits, was sie stört, aber nicht, welches Verfahren sinnvoll ist. Diese Orientierung ersetzt keine Beratung, hilft aber bei der ersten Einordnung.",
        services: [
          { title: "Mimikfalten gezielt behandeln", href: "/botox-behandlung", description: "Botulinumtoxin kann geeignet sein, wenn dynamische Falten durch Muskelaktivität im Vordergrund stehen." },
          { title: "Hautqualität regenerativ unterstützen", href: "/aesthetik/prp-behandlung", description: "PRP kann infrage kommen, wenn Hautfrische, Regeneration und ein eigenblutbasiertes Verfahren gewünscht sind." },
          { title: "Haarausfall ärztlich einordnen", href: "/leistungen/prp-haarausfall", description: "PRP der Kopfhaut kann je nach Ursache und Befund Teil eines individuellen Haarkonzepts sein." },
          { title: "Struktur und Porenbild verbessern", href: "/aesthetik/microneedling", description: "Microneedling kann bei unruhiger Hautstruktur, Porenbild, feinen Linien und ausgewählten Narbenbildern besprochen werden." },
          { title: "Spannkraft und Augenpartie", href: "/aesthetik/polynukleotide", description: "Polynukleotide können je nach Befund für Hautqualität, Elastizität und sensible Areale interessant sein." },
        ],
      },
      {
        title: "Warum Praxis Jona für ästhetische Medizin?",
        intro: "Ästhetische Medizin ist Vertrauenssache. In der Praxis Jona stehen ärztliche Beratung, zurückhaltende Planung und transparente Aufklärung im Vordergrund.",
        services: [
          { title: "Ärztlich geführt", href: "/team", description: "Die Behandlung wird medizinisch eingeordnet und orientiert sich an Befund, Anatomie und gesundheitlicher Situation." },
          { title: "Natürlich statt schematisch", href: "/aesthetik", description: "Ziel ist kein standardisiertes Ergebnis, sondern eine Behandlung, die zu Gesicht, Haut und Mimik passt." },
          { title: "Zentral in Berlin-Mitte", href: "/kontakt", description: "Die Praxis liegt in der Torstraße 125 am Rosenthaler Platz und ist mit U-Bahn und Tram gut erreichbar." },
        ],
      },
      {
        title: "So läuft ein ästhetischer Beratungstermin ab",
        intro: "Vor jeder Behandlung klären wir, welches Anliegen im Vordergrund steht, welche Methode geeignet sein kann und welche Erwartungen realistisch sind.",
        services: [
          { title: "1. Anliegen verstehen", href: "/kontakt", description: "Wir besprechen, was Sie verändern, erhalten oder verbessern möchten." },
          { title: "2. Befund einordnen", href: "/team", description: "Hautbild, Mimik, Anatomie, Vorgeschichte und mögliche Gegenanzeigen werden berücksichtigt." },
          { title: "3. Konzept festlegen", href: "/aesthetik/hautbild-verbessern", description: "Sie erhalten eine Empfehlung mit Ablauf, Grenzen, möglichen Risiken und passenden nächsten Schritten." },
        ],
      },
    ],
    faq: [
      { question: "Welche ästhetischen Behandlungen bietet Praxis Jona an?", answer: "Wir bieten Botulinumtoxin, PRP für Gesicht und Haut, PRP bei Haarausfall, Microneedling, Polynukleotide und individuelle Konzepte zur Verbesserung der Hautqualität an." },
      { question: "Was ist der Unterschied zwischen Botox, PRP, Microneedling und Polynukleotiden?", answer: "Botulinumtoxin zielt auf mimische Muskelaktivität. PRP ist ein Eigenblutverfahren zur Unterstützung der Regeneration. Microneedling adressiert Struktur und Porenbild. Polynukleotide werden zur Unterstützung der Hautqualität und Spannkraft eingesetzt." },
      { question: "Welche Behandlung passt zu mir?", answer: "Das hängt von Hautbild, Mimik, Zielsetzung und Befund ab. In der Beratung klären wir, welches Verfahren sinnvoll sein kann." },
      { question: "Sind natürliche Ergebnisse möglich?", answer: "Der Fokus liegt auf einer zurückhaltenden ärztlichen Planung. Ergebnisse und Dauer können individuell variieren." },
      { question: "Wie läuft ein ästhetischer Beratungstermin ab?", answer: "Wir besprechen Ihr Anliegen, prüfen Hautbild, Mimik und medizinische Faktoren und erklären geeignete Optionen, Grenzen, Ablauf und Kosten." },
      { question: "Kann ich Botox-Preise vorab ansehen?", answer: "Ja. Die Botox-Preise sind auf einer eigenen Preisseite transparent aufgeführt." },
      { question: "Ist die Praxis gut erreichbar?", answer: "Ja. Die Praxis Jona liegt in Berlin-Mitte in der Torstraße 125 am Rosenthaler Platz." },
      { question: "Kann ich direkt online buchen?", answer: "Ja. Sie können einen Termin online über Doctolib vereinbaren." },
    ],
  },
  aestheticEn: {
    locale: "en",
    title: "Aesthetic Medicine in Berlin-Mitte",
    eyebrow: "Physician-led aesthetics",
    description: "Botulinum toxin, PRP, microneedling and polynucleotides at Praxis Jona near Rosenthaler Platz. Natural-looking results begin with careful medical assessment.",
    heroImage: {
      src: "/images/clinic/clinic-philo-2025.jpg",
      alt: "Treatment chair for aesthetic medicine at Praxis Jona in Berlin-Mitte",
    },
    cta: "Book appointment",
    ctaHref: Constants.appointmentUrl,
    secondaryCta: "View Botox prices",
    secondaryHref: "/en/botox-prices",
    sections: [
      {
        title: "Aesthetic treatments with medical assessment",
        intro: "We do not treat by template. We plan around anatomy, skin quality, facial expression and your goals. During consultation, we clarify which treatment may fit your concern and where the limits are.",
        services: [
          { title: "Botulinum toxin", href: "/en/botox-treatment", eyebrow: "Expression & lines", description: "For patients who want targeted treatment of expression lines such as frown lines, forehead lines or crow's feet." },
          { title: "PRP face & skin", href: "/en/aesthetics/prp-treatment", eyebrow: "Regeneration", description: "An autologous blood-based procedure that may support skin quality, freshness and regeneration depending on findings." },
          { title: "PRP for hair loss", href: "/en/services/prp-hair-loss", eyebrow: "Hair concept", description: "Scalp PRP as a possible part of a physician-led treatment concept for hair loss." },
          { title: "Microneedling", href: "/en/aesthetics/microneedling", eyebrow: "Texture", description: "For skin texture, pore appearance, fine lines and selected scar patterns after individual skin assessment." },
          { title: "Polynucleotides", href: "/en/aesthetics/polynucleotides", eyebrow: "Skin quality", description: "Regenerative treatment for skin quality, firmness and delicate areas such as the eye area." },
          { title: "Skin quality & regeneration", href: "/en/aesthetics/improve-skin-quality", eyebrow: "Compare", description: "Compare PRP, microneedling and polynucleotides by goal, skin findings and treatment logic." },
        ],
      },
      {
        title: "Which treatment fits which goal?",
        intro: "Many patients know what bothers them, but not which procedure makes sense. This overview helps with orientation and does not replace consultation.",
        services: [
          { title: "Treat expression lines", href: "/en/botox-treatment", description: "Botulinum toxin may be suitable when dynamic lines caused by muscle activity are the main concern." },
          { title: "Support skin regeneration", href: "/en/aesthetics/prp-treatment", description: "PRP may be considered when skin freshness, regeneration and an autologous procedure are desired." },
          { title: "Assess hair loss medically", href: "/en/services/prp-hair-loss", description: "Scalp PRP may be part of an individual hair concept depending on cause and findings." },
          { title: "Improve texture and pore appearance", href: "/en/aesthetics/microneedling", description: "Microneedling can be discussed for uneven texture, pore appearance, fine lines and selected scars." },
          { title: "Firmness and eye area", href: "/en/aesthetics/polynucleotides", description: "Polynucleotides may be of interest for skin quality, elasticity and delicate areas depending on findings." },
        ],
      },
      {
        title: "Why Praxis Jona for aesthetic medicine?",
        intro: "Aesthetic medicine is built on trust. At Praxis Jona, medical consultation, measured planning and transparent information come first.",
        services: [
          { title: "Physician-led", href: "/en/team", description: "Treatment is medically assessed and guided by findings, anatomy and health situation." },
          { title: "Natural, not templated", href: "/en/aesthetics", description: "The goal is not a standardized look, but a treatment plan that fits your face, skin and expression." },
          { title: "Central Berlin-Mitte location", href: "/en/contact", description: "The practice is located at Torstraße 125 near Rosenthaler Platz, with easy access by U-Bahn and tram." },
        ],
      },
      {
        title: "How an aesthetic consultation works",
        intro: "Before any treatment, we clarify your main concern, which method may be suitable and which expectations are realistic.",
        services: [
          { title: "1. Understand your concern", href: "/en/contact", description: "We discuss what you want to change, preserve or improve." },
          { title: "2. Assess findings", href: "/en/team", description: "Skin, facial expression, anatomy, history and possible contraindications are considered." },
          { title: "3. Define a plan", href: "/en/aesthetics/improve-skin-quality", description: "You receive a recommendation with process, limits, possible risks and suitable next steps." },
        ],
      },
    ],
    faq: [
      { question: "Which aesthetic treatments does Praxis Jona offer?", answer: "We offer botulinum toxin, PRP for face and skin, PRP for hair loss, microneedling, polynucleotides and individual concepts for improving skin quality." },
      { question: "What is the difference between Botox, PRP, microneedling and polynucleotides?", answer: "Botulinum toxin targets facial muscle activity. PRP is an autologous blood-based procedure to support regeneration. Microneedling addresses texture and pore appearance. Polynucleotides are used to support skin quality and firmness." },
      { question: "Which treatment is right for me?", answer: "That depends on your skin, facial expression, goals and medical findings. During consultation, we clarify which procedure may be suitable." },
      { question: "Are natural-looking results possible?", answer: "The focus is on careful physician-led planning. Results and duration can vary individually." },
      { question: "How does an aesthetic consultation work?", answer: "We discuss your concern, assess skin, facial expression and medical factors, and explain suitable options, limits, process and cost." },
      { question: "Can I view Botox prices in advance?", answer: "Yes. Botox prices are listed transparently on a separate price page." },
      { question: "Is the practice easy to reach?", answer: "Yes. Praxis Jona is located in Berlin-Mitte at Torstraße 125 near Rosenthaler Platz." },
      { question: "Can I book online?", answer: "Yes. You can book an appointment online via Doctolib." },
    ],
  },
  longevityDe: {
    locale: "de",
    title: "Health / Longevity in Berlin-Mitte",
    eyebrow: "Prävention, Stoffwechsel & Vitalität",
    description: "Präventionsmedizin, Check-ups, Ernährung, Mikronährstoffe, Infusionen und medizinische Gewichtsreduktion mit ärztlicher Einordnung.",
    cta: "Termin zur Abklärung buchen",
    ctaHref: Constants.appointmentUrl,
    secondaryCta: "Präventionspakete ansehen",
    secondaryHref: "/praevention",
    sections: [
      {
        title: "Medizinisch geführte Gesundheitsoptimierung",
        intro: "Wir verbinden Laborwerte, Symptome, Risikoprofil und persönliche Ziele zu einer nachvollziehbaren ärztlichen Empfehlung.",
        services: [
          { title: "Eiseninfusion", href: "/leistungen/eiseninfusion-kosten", description: "Bei passendem Befund und medizinischer Indikation. Festpreis: 150,95 €." },
          { title: "Vitamininfusion", href: "/leistungen/infusionstherapie", description: "Gezielte Infusionen bei relevantem Mangel oder passender medizinischer Fragestellung." },
          { title: "Abnehmspritze", href: "/leistungen/abnehmspritze", description: "Ärztlich begleitete Gewichtsreduktion mit GLP-1-basierten Medikamenten, wenn geeignet." },
          { title: "Ernährungsberatung", href: "/leistungen/ernaehrungsmedizin", description: "Medizinische Ernährungstherapie für Stoffwechsel, Gewicht und langfristige Gesundheit." },
          { title: "Premium Check-up", href: "/leistungen/private-check-up", description: "Erweiterte Vorsorge über gesetzliche Leistungen hinaus." },
          { title: "Prävention / Longevity", href: "/praevention", description: "Strukturierte Pakete von Basic bis Premium für langfristige Gesundheitsziele." },
          { title: "Mikronährstofftherapie", href: "/leistungen/mikronahrstoffanalyse", description: "Diagnostik und Therapieplanung auf Basis relevanter Laborwerte." },
          { title: "Reiseimpfung", href: "/leistungen/reiseimpfungen", description: "Reisemedizinische Beratung und Impfungen nach Ziel, Risiko und Vorgeschichte." },
          { title: "Haarausfall-Abklärung", href: "/leistungen/haarausfall-berlin-mitte", description: "Ärztliches Konzept mit Diagnostik, PRP und Mikronährstofftherapie nach Befund." },
        ],
      },
    ],
    faq: [
      { question: "Ist Health / Longevity nur für Privatpatienten?", answer: "Viele erweiterte Leistungen sind Selbstzahlerleistungen. Wir besprechen Kosten und medizinische Sinnhaftigkeit transparent vorab." },
      { question: "Wann ist eine Infusion sinnvoll?", answer: "Infusionen kommen nach ärztlicher Einschätzung und bei passender Indikation infrage, zum Beispiel bei relevantem Mangel oder Unverträglichkeit oraler Therapie." },
      { question: "Was kostet die Eiseninfusion?", answer: "Die Eiseninfusion kostet als Festpreis 150,95 €." },
    ],
  },
  longevityEn: {
    locale: "en",
    title: "Health / Longevity in Berlin-Mitte",
    eyebrow: "Prevention, metabolism & vitality",
    description: "Preventive medicine, check-ups, nutrition, micronutrients, infusions and medical weight management with physician-led assessment.",
    cta: "Book assessment",
    ctaHref: Constants.appointmentUrl,
    secondaryCta: "View prevention packages",
    secondaryHref: "/en/prevention",
    sections: [
      {
        title: "Physician-led health optimization",
        intro: "We connect lab values, symptoms, risk profile and personal goals into a clear medical recommendation.",
        services: [
          { title: "Iron infusion", href: "/en/services/iron-infusion-costs", description: "When findings and medical indication fit. Fixed price: €150.95." },
          { title: "Vitamin infusion", href: "/en/services/infusion-therapy", description: "Targeted infusions for relevant deficiencies or suitable medical indications." },
          { title: "Weight-loss injection", href: "/en/services/weight-loss-injection", description: "Physician-supervised weight management with GLP-1-based medication when suitable." },
          { title: "Nutrition counseling", href: "/en/services/nutritional-medicine", description: "Medical nutrition therapy for metabolism, weight and long-term health." },
          { title: "Premium check-up", href: "/en/services/private-insurance-check-up", description: "Extended preventive care beyond standard public insurance services." },
          { title: "Prevention / Longevity", href: "/en/prevention", description: "Structured packages from Basic to Premium for long-term health goals." },
          { title: "Micronutrient therapy", href: "/en/services/micronutrient-analysis", description: "Diagnostics and therapy planning based on relevant laboratory values." },
          { title: "Travel vaccination", href: "/en/services/travel-vaccinations", description: "Travel medicine advice and vaccinations based on destination, risk and history." },
          { title: "Hair-loss assessment", href: "/en/services/hair-loss-berlin-mitte", description: "Medical concept with diagnostics, PRP and micronutrient therapy depending on findings." },
        ],
      },
    ],
    faq: [
      { question: "Is Health / Longevity only for privately insured patients?", answer: "Many extended services are self-pay services. We discuss cost and medical suitability transparently in advance." },
      { question: "When is an infusion useful?", answer: "Infusions may be considered after medical assessment and suitable indication, for example relevant deficiency or intolerance of oral therapy." },
      { question: "What does the iron infusion cost?", answer: "The iron infusion has a fixed price of €150.95." },
    ],
  },
};

export const landingPages: Record<string, LandingContent> = {
  prpAestheticDe: {
    locale: "de",
    title: "PRP Behandlung in Berlin-Mitte",
    eyebrow: "Eigenblutverfahren für Hautqualität",
    description: "PRP für Gesicht und Haut in Berlin-Mitte: ärztliche Beratung, Eigenblutverfahren und individuelle Einschätzung in der Praxis Jona.",
    canonical: "/aesthetik/prp-behandlung",
    alternate: "/en/aesthetics/prp-treatment",
    cta: "PRP-Beratung buchen",
    secondaryCta: "Hautbild-Übersicht",
    secondaryHref: "/aesthetik/hautbild-verbessern",
    intro: "PRP ist ein Eigenblutverfahren, bei dem plättchenreiches Plasma aus einer kleinen Blutprobe gewonnen und in ausgewählte Hautareale eingebracht wird. Ob PRP sinnvoll ist, klären wir individuell.",
    facts: [
      { label: "Fokus", value: "Hautqualität, Regeneration, Frische" },
      { label: "Ablauf", value: "Beratung, Blutentnahme, Aufbereitung, Behandlung" },
      { label: "Wichtig", value: "Ergebnisse können individuell variieren" },
    ],
    sections: [
      { title: "Für wen PRP infrage kommen kann", body: ["PRP kann für Patientinnen und Patienten interessant sein, die ihre Hautqualität ärztlich begleitet unterstützen möchten."], bullets: ["müde wirkendes Hautbild", "feine Linien", "Regenerationswunsch", "Kombination mit Microneedling nach Einschätzung"] },
      { title: "So läuft die Behandlung ab", body: ["Nach der ärztlichen Einschätzung wird Blut entnommen, aufbereitet und das plättchenreiche Plasma gezielt in die Haut eingebracht. Vorab besprechen wir Grenzen, Risiken und realistische Erwartungen."] },
      { title: "Medizinische Einordnung", body: ["PRP ist kein Sofort-Lifting und kein garantiertes Anti-Aging-Verfahren. Es kann je nach Befund Teil eines individuellen Behandlungskonzepts sein."] },
    ],
    related: [
      { title: "Microneedling", href: "/aesthetik/microneedling", description: "Struktur und Porenbild verbessern." },
      { title: "Polynukleotide", href: "/aesthetik/polynukleotide", description: "Regenerative Hautqualität unterstützen." },
    ],
    faq: [
      { question: "Ist PRP für jeden geeignet?", answer: "Nein. Ob PRP geeignet ist, hängt von Befund, Zielsetzung und medizinischer Situation ab." },
      { question: "Kann PRP mit Microneedling kombiniert werden?", answer: "Eine Kombination kann je nach Hautbild sinnvoll sein und wird individuell besprochen." },
      { question: "Wann sieht man Ergebnisse?", answer: "Die Wahrnehmung ist individuell. PRP ist auf Regeneration ausgelegt und nicht auf einen sofortigen Volumeneffekt." },
    ],
  },
  prpAestheticEn: {
    locale: "en",
    title: "PRP Treatment in Berlin-Mitte",
    eyebrow: "Autologous treatment for skin quality",
    description: "PRP for face and skin in Berlin-Mitte: medical consultation, autologous blood-based treatment and individual assessment at Praxis Jona.",
    canonical: "/en/aesthetics/prp-treatment",
    alternate: "/aesthetik/prp-behandlung",
    cta: "Book PRP consultation",
    secondaryCta: "Skin quality overview",
    secondaryHref: "/en/aesthetics/improve-skin-quality",
    intro: "PRP is an autologous procedure in which platelet-rich plasma is prepared from a small blood sample and applied to selected skin areas. We assess individually whether PRP is suitable.",
    facts: [
      { label: "Focus", value: "Skin quality, regeneration, freshness" },
      { label: "Process", value: "Consultation, blood draw, preparation, treatment" },
      { label: "Important", value: "Results can vary individually" },
    ],
    sections: [
      { title: "Who PRP may be suitable for", body: ["PRP may be of interest for patients who want physician-led support for skin quality."], bullets: ["tired-looking skin", "fine lines", "regeneration goals", "combination with microneedling after assessment"] },
      { title: "How treatment works", body: ["After medical assessment, blood is drawn, prepared and the platelet-rich plasma is applied to the skin. We discuss limits, risks and realistic expectations beforehand."] },
      { title: "Medical positioning", body: ["PRP is not an instant lifting procedure and does not guarantee anti-aging results. Depending on findings, it may be part of an individual treatment concept."] },
    ],
    related: [
      { title: "Microneedling", href: "/en/aesthetics/microneedling", description: "Improve skin texture and pore appearance." },
      { title: "Polynucleotides", href: "/en/aesthetics/polynucleotides", description: "Support regenerative skin quality." },
    ],
    faq: [
      { question: "Is PRP suitable for everyone?", answer: "No. Suitability depends on findings, goals and medical situation." },
      { question: "Can PRP be combined with microneedling?", answer: "A combination may be useful depending on skin findings and is discussed individually." },
      { question: "When are results visible?", answer: "Perception varies individually. PRP is aimed at regeneration, not an immediate volume effect." },
    ],
  },
};

function treatmentPage(input: Omit<LandingContent, "facts" | "sections" | "related" | "faq"> & {
  focus: string;
  process: string;
  suitable: string[];
  limits: string;
  related: ServiceLink[];
  faq: { question: string; answer: string }[];
}): LandingContent {
  const isEn = input.locale === "en";
  return {
    ...input,
    facts: [
      { label: isEn ? "Focus" : "Fokus", value: input.focus },
      { label: isEn ? "Process" : "Ablauf", value: input.process },
      { label: isEn ? "Important" : "Wichtig", value: input.limits },
    ],
    sections: [
      {
        title: isEn ? "When this may be suitable" : "Wann die Behandlung infrage kommen kann",
        body: [input.suitable.length ? (isEn ? "The treatment may be considered for selected concerns after medical assessment." : "Die Behandlung kann nach ärztlicher Einschätzung bei ausgewählten Anliegen infrage kommen.") : input.description],
        bullets: input.suitable,
      },
      {
        title: isEn ? "How we proceed" : "So gehen wir vor",
        body: [isEn ? "At the beginning there is a physician-led consultation. We assess your goals, findings, possible contraindications, expected process and realistic limits before any treatment." : "Am Anfang steht eine ärztliche Beratung. Wir prüfen Zielsetzung, Befund, mögliche Gegenanzeigen, den voraussichtlichen Ablauf und realistische Grenzen vor jeder Behandlung."],
      },
      {
        title: isEn ? "Medical positioning" : "Medizinische Einordnung",
        body: [input.limits],
      },
    ],
    related: input.related,
    faq: input.faq,
  };
}

Object.assign(landingPages, {
  microneedlingDe: treatmentPage({
    locale: "de",
    title: "Microneedling in Berlin-Mitte",
    eyebrow: "Hautstruktur & Porenbild",
    description: "Microneedling in Berlin-Mitte zur ärztlich begleiteten Verbesserung von Hautstruktur, Porenbild, feinen Linien und ausgewählten Narbenbildern.",
    canonical: "/aesthetik/microneedling",
    alternate: "/en/aesthetics/microneedling",
    cta: "Microneedling-Beratung buchen",
    secondaryCta: "PRP ansehen",
    secondaryHref: "/aesthetik/prp-behandlung",
    intro: "Microneedling setzt kontrollierte Mikroimpulse in der Haut. Ziel ist die Unterstützung natürlicher Regenerationsprozesse und eine Verbesserung der Hautstruktur nach individueller Einschätzung.",
    focus: "Hautstruktur, Poren, feine Linien",
    process: "Beratung, Hautanalyse, Behandlung, Pflegehinweise",
    limits: "Ergebnisse und Anzahl der Sitzungen hängen vom Hautbild und Behandlungsziel ab.",
    suitable: ["großporige Haut", "unruhige Hautstruktur", "feine Linien", "ausgewählte Aknenarben"],
    related: [
      { title: "PRP Gesicht & Haut", href: "/aesthetik/prp-behandlung", description: "Eigenblutbasiertes Verfahren zur Unterstützung der Regeneration." },
      { title: "Hautbild & Regeneration", href: "/aesthetik/hautbild-verbessern", description: "Alle Optionen zur Verbesserung der Hautqualität." },
    ],
    faq: [
      { question: "Ist Microneedling für jede Haut geeignet?", answer: "Nein. Die Eignung hängt unter anderem von Hautzustand, Entzündungen, Medikamenten und Zielsetzung ab." },
      { question: "Wie viele Sitzungen sind sinnvoll?", answer: "Das wird individuell geplant. Häufig sind mehrere Sitzungen sinnvoll, abhängig vom Ausgangsbefund." },
      { question: "Kann Microneedling mit PRP kombiniert werden?", answer: "Eine Kombination kann je nach Befund besprochen werden." },
    ],
  }),
  microneedlingEn: treatmentPage({
    locale: "en",
    title: "Microneedling in Berlin-Mitte",
    eyebrow: "Skin texture & pores",
    description: "Microneedling in Berlin-Mitte to support skin texture, pore appearance, fine lines and selected scar patterns under medical guidance.",
    canonical: "/en/aesthetics/microneedling",
    alternate: "/aesthetik/microneedling",
    cta: "Book microneedling consultation",
    secondaryCta: "View PRP",
    secondaryHref: "/en/aesthetics/prp-treatment",
    intro: "Microneedling creates controlled micro-stimulation in the skin. The goal is to support natural regeneration and improve skin texture after individual assessment.",
    focus: "Texture, pores, fine lines",
    process: "Consultation, skin assessment, treatment, aftercare guidance",
    limits: "Results and number of sessions depend on skin findings and treatment goals.",
    suitable: ["enlarged pore appearance", "uneven texture", "fine lines", "selected acne scar patterns"],
    related: [
      { title: "PRP face & skin", href: "/en/aesthetics/prp-treatment", description: "Autologous procedure to support regeneration." },
      { title: "Skin quality & regeneration", href: "/en/aesthetics/improve-skin-quality", description: "All options for improving skin quality." },
    ],
    faq: [
      { question: "Is microneedling suitable for every skin type?", answer: "No. Suitability depends on skin condition, inflammation, medication and goals." },
      { question: "How many sessions are useful?", answer: "This is planned individually. Several sessions are often useful depending on baseline findings." },
      { question: "Can microneedling be combined with PRP?", answer: "A combination can be discussed depending on findings." },
    ],
  }),
  polynucleotidesDe: treatmentPage({
    locale: "de",
    title: "Polynukleotide in Berlin-Mitte",
    eyebrow: "Regenerative Skin Booster",
    description: "Polynukleotide in Berlin-Mitte für Hautqualität, Spannkraft und sensible Areale nach individueller ärztlicher Beratung.",
    canonical: "/aesthetik/polynukleotide",
    alternate: "/en/aesthetics/polynucleotides",
    cta: "Beratung buchen",
    secondaryCta: "Hautbild-Übersicht",
    secondaryHref: "/aesthetik/hautbild-verbessern",
    intro: "Polynukleotide werden als regenerative Behandlung zur Unterstützung der Hautqualität eingesetzt. Ob sie zu Ihrem Befund passen, klären wir im persönlichen Gespräch.",
    focus: "Hautqualität, Spannkraft, Augenpartie",
    process: "Beratung, Befund, Behandlungsplan",
    limits: "Keine Behandlung ersetzt eine ärztliche Einschätzung; Ergebnisse können variieren.",
    suitable: ["feine Linien", "trockene oder beanspruchte Haut", "Augenpartie nach Befund", "regenerationsbedürftige Haut"],
    related: [
      { title: "PRP Gesicht & Haut", href: "/aesthetik/prp-behandlung", description: "Eigenblutverfahren für Hautqualität." },
      { title: "Microneedling", href: "/aesthetik/microneedling", description: "Hautstruktur und Porenbild verbessern." },
    ],
    faq: [
      { question: "Was sind Polynukleotide?", answer: "Polynukleotide werden in der ästhetischen Medizin zur Unterstützung regenerativer Prozesse der Haut eingesetzt." },
      { question: "Für welche Areale sind sie interessant?", answer: "Je nach Befund können Gesicht, Hals oder sensible Areale wie die Augenpartie besprochen werden." },
      { question: "Ist das ein Ersatz für Botox?", answer: "Nein. Polynukleotide und Botulinumtoxin haben unterschiedliche Zielsetzungen." },
    ],
  }),
  polynucleotidesEn: treatmentPage({
    locale: "en",
    title: "Polynucleotides in Berlin-Mitte",
    eyebrow: "Regenerative skin booster",
    description: "Polynucleotides in Berlin-Mitte for skin quality, firmness and delicate areas after individual medical consultation.",
    canonical: "/en/aesthetics/polynucleotides",
    alternate: "/aesthetik/polynukleotide",
    cta: "Book consultation",
    secondaryCta: "Skin quality overview",
    secondaryHref: "/en/aesthetics/improve-skin-quality",
    intro: "Polynucleotides are used as a regenerative treatment to support skin quality. We clarify whether they fit your findings in a personal consultation.",
    focus: "Skin quality, firmness, eye area",
    process: "Consultation, findings, treatment plan",
    limits: "No treatment replaces medical assessment; results can vary.",
    suitable: ["fine lines", "dry or stressed skin", "eye area depending on findings", "skin needing regenerative support"],
    related: [
      { title: "PRP face & skin", href: "/en/aesthetics/prp-treatment", description: "Autologous procedure for skin quality." },
      { title: "Microneedling", href: "/en/aesthetics/microneedling", description: "Improve texture and pore appearance." },
    ],
    faq: [
      { question: "What are polynucleotides?", answer: "Polynucleotides are used in aesthetic medicine to support regenerative processes in the skin." },
      { question: "Which areas can be discussed?", answer: "Depending on findings, the face, neck or delicate areas such as the eye area can be discussed." },
      { question: "Is this a replacement for Botox?", answer: "No. Polynucleotides and botulinum toxin have different treatment goals." },
    ],
  }),
  skinQualityDe: treatmentPage({
    locale: "de",
    title: "Hautbild verbessern in Berlin-Mitte",
    eyebrow: "Hautbild & Regeneration",
    description: "Hautbild verbessern in Berlin-Mitte mit PRP, Microneedling und Polynukleotiden nach ärztlicher Einschätzung.",
    canonical: "/aesthetik/hautbild-verbessern",
    alternate: "/en/aesthetics/improve-skin-quality",
    cta: "Hautbild-Beratung buchen",
    secondaryCta: "Ästhetik ansehen",
    secondaryHref: "/aesthetik",
    intro: "Für Hautqualität, Struktur und Regeneration gibt es unterschiedliche Verfahren. In der Praxis Jona wählen wir nicht pauschal, sondern nach Hautbild, Ziel und medizinischer Einschätzung.",
    focus: "Feuchtigkeit, Struktur, Regeneration",
    process: "Beratung, Hautbefund, individuelles Konzept",
    limits: "Die passende Behandlung hängt vom Befund ab; Kombinationen werden individuell entschieden.",
    suitable: ["müdes Hautbild", "feine Linien", "großporige Haut", "Wunsch nach natürlicher Regeneration"],
    related: [
      { title: "PRP Gesicht & Haut", href: "/aesthetik/prp-behandlung", description: "Eigenblutbasiert und regenerativ." },
      { title: "Microneedling", href: "/aesthetik/microneedling", description: "Für Struktur, Poren und ausgewählte Narben." },
      { title: "Polynukleotide", href: "/aesthetik/polynukleotide", description: "Für Hautqualität und sensible Areale." },
    ],
    faq: [
      { question: "Welche Behandlung verbessert das Hautbild am besten?", answer: "Das hängt vom Hautbefund ab. PRP, Microneedling und Polynukleotide haben unterschiedliche Schwerpunkte." },
      { question: "Kann man Verfahren kombinieren?", answer: "Ja, wenn es medizinisch und ästhetisch sinnvoll ist. Das wird individuell geplant." },
      { question: "Ist eine Beratung notwendig?", answer: "Ja. Die Beratung hilft, Ziele, Grenzen und geeignete Verfahren sauber einzuordnen." },
    ],
  }),
  skinQualityEn: treatmentPage({
    locale: "en",
    title: "Improve Skin Quality in Berlin-Mitte",
    eyebrow: "Skin quality & regeneration",
    description: "Improve skin quality in Berlin-Mitte with PRP, microneedling and polynucleotides after medical assessment.",
    canonical: "/en/aesthetics/improve-skin-quality",
    alternate: "/aesthetik/hautbild-verbessern",
    cta: "Book skin consultation",
    secondaryCta: "View aesthetics",
    secondaryHref: "/en/aesthetics",
    intro: "Different procedures can support skin quality, texture and regeneration. At Praxis Jona we choose based on skin findings, goals and medical assessment.",
    focus: "Hydration, texture, regeneration",
    process: "Consultation, skin findings, individual concept",
    limits: "The suitable treatment depends on findings; combinations are decided individually.",
    suitable: ["tired-looking skin", "fine lines", "enlarged pore appearance", "desire for natural regenerative support"],
    related: [
      { title: "PRP face & skin", href: "/en/aesthetics/prp-treatment", description: "Autologous and regenerative." },
      { title: "Microneedling", href: "/en/aesthetics/microneedling", description: "For texture, pores and selected scars." },
      { title: "Polynucleotides", href: "/en/aesthetics/polynucleotides", description: "For skin quality and delicate areas." },
    ],
    faq: [
      { question: "Which treatment improves skin quality best?", answer: "It depends on skin findings. PRP, microneedling and polynucleotides have different focuses." },
      { question: "Can procedures be combined?", answer: "Yes, if medically and aesthetically appropriate. This is planned individually." },
      { question: "Is consultation necessary?", answer: "Yes. Consultation helps clarify goals, limits and suitable procedures." },
    ],
  }),
  hairLossDe: treatmentPage({
    locale: "de",
    title: "Haarausfall in Berlin-Mitte: Diagnostik & PRP",
    eyebrow: "Ärztliches Haarkonzept",
    description: "Haarausfall-Abklärung in Berlin-Mitte mit ärztlicher Diagnostik, Mikronährstoffanalyse und PRP als möglichem Bestandteil eines individuellen Konzepts.",
    canonical: "/leistungen/haarausfall-berlin-mitte",
    alternate: "/en/services/hair-loss-berlin-mitte",
    cta: "Haarausfall-Abklärung buchen",
    secondaryCta: "PRP bei Haarausfall",
    secondaryHref: "/leistungen/prp-haarausfall",
    intro: "Haarausfall kann viele Ursachen haben. Deshalb steht am Anfang eine ärztliche Einschätzung. Je nach Befund können PRP, Mikronährstoffdiagnostik und gezielte Therapieempfehlungen sinnvoll sein.",
    focus: "Diagnostik, PRP, Mikronährstoffe",
    process: "Anamnese, Befund, Laborplanung, Therapiekonzept",
    limits: "PRP kann je nach Ursache Teil eines Konzepts sein, ersetzt aber keine Abklärung.",
    suitable: ["diffuser Haarausfall", "androgenetische Alopezie nach Einschätzung", "Verdacht auf Mikronährstoffmangel", "Haarausfall mit Müdigkeit oder Zyklusveränderungen"],
    related: [
      { title: "PRP bei Haarausfall", href: "/leistungen/prp-haarausfall", description: "Eigenblutverfahren für die Kopfhaut nach Befund." },
      { title: "Mikronährstoffanalyse", href: "/leistungen/mikronahrstoffanalyse", description: "Laborbasierte Einordnung möglicher Mängel." },
      { title: "Eiseninfusion", href: "/leistungen/eiseninfusion-kosten", description: "Bei nachgewiesenem Eisenmangel und Indikation." },
    ],
    faq: [
      { question: "Sollte Haarausfall zuerst abgeklärt werden?", answer: "Ja. Ursache und Verlauf sind wichtig, bevor eine Behandlung geplant wird." },
      { question: "Hilft PRP immer gegen Haarausfall?", answer: "Nein. Die Wirkung hängt unter anderem von Ursache und individuellem Befund ab." },
      { question: "Welche Laborwerte sind relevant?", answer: "Das wird individuell entschieden. Häufig können Eisenstatus, Schilddrüsenwerte und ausgewählte Mikronährstoffe relevant sein." },
    ],
  }),
  hairLossEn: treatmentPage({
    locale: "en",
    title: "Hair Loss in Berlin-Mitte: Diagnostics & PRP",
    eyebrow: "Physician-led hair concept",
    description: "Hair-loss assessment in Berlin-Mitte with medical diagnostics, micronutrient analysis and PRP as a possible part of an individual concept.",
    canonical: "/en/services/hair-loss-berlin-mitte",
    alternate: "/leistungen/haarausfall-berlin-mitte",
    cta: "Book hair-loss assessment",
    secondaryCta: "PRP for hair loss",
    secondaryHref: "/en/services/prp-hair-loss",
    intro: "Hair loss can have many causes. Medical assessment comes first. Depending on findings, PRP, micronutrient diagnostics and targeted therapy recommendations may be useful.",
    focus: "Diagnostics, PRP, micronutrients",
    process: "History, findings, lab planning, treatment concept",
    limits: "PRP may be part of a concept depending on cause, but does not replace assessment.",
    suitable: ["diffuse hair loss", "androgenetic alopecia after assessment", "suspected micronutrient deficiency", "hair loss with fatigue or cycle changes"],
    related: [
      { title: "PRP for hair loss", href: "/en/services/prp-hair-loss", description: "Autologous scalp treatment depending on findings." },
      { title: "Micronutrient analysis", href: "/en/services/micronutrient-analysis", description: "Lab-based assessment of possible deficiencies." },
      { title: "Iron infusion", href: "/en/services/iron-infusion-costs", description: "For documented iron deficiency and indication." },
    ],
    faq: [
      { question: "Should hair loss be assessed first?", answer: "Yes. Cause and pattern matter before treatment is planned." },
      { question: "Does PRP always help hair loss?", answer: "No. Effect depends on cause and individual findings." },
      { question: "Which lab values are relevant?", answer: "This is decided individually. Iron status, thyroid values and selected micronutrients may be relevant." },
    ],
  }),
  prpHairDe: treatmentPage({
    locale: "de",
    title: "PRP bei Haarausfall in Berlin-Mitte",
    eyebrow: "Eigenblutbehandlung der Kopfhaut",
    description: "PRP bei Haarausfall in Berlin-Mitte nach ärztlicher Einschätzung und als Teil eines individuellen Behandlungskonzepts.",
    canonical: "/leistungen/prp-haarausfall",
    alternate: "/en/services/prp-hair-loss",
    cta: "PRP-Beratung buchen",
    secondaryCta: "Haarausfall-Abklärung",
    secondaryHref: "/leistungen/haarausfall-berlin-mitte",
    intro: "PRP bei Haarausfall ist ein Eigenblutverfahren, bei dem plättchenreiches Plasma in die Kopfhaut eingebracht wird. Ob das Verfahren passt, hängt von Ursache und Befund ab.",
    focus: "Kopfhaut, Haarwurzelumfeld, Befund",
    process: "Abklärung, Blutentnahme, PRP-Aufbereitung, Kopfhautbehandlung",
    limits: "Die Studienlage ist positiv, aber heterogen; ein Erfolg kann nicht garantiert werden.",
    suitable: ["frühe androgenetische Alopezie nach Einschätzung", "Verlaufskontrolle möglich", "Kombination mit Diagnostik", "realistische Erwartungen"],
    related: [
      { title: "Haarausfall-Abklärung", href: "/leistungen/haarausfall-berlin-mitte", description: "Diagnostik vor Therapieplanung." },
      { title: "Mikronährstoffanalyse", href: "/leistungen/mikronahrstoffanalyse", description: "Mögliche Mängel gezielt prüfen." },
    ],
    faq: [
      { question: "Wie funktioniert PRP bei Haarausfall?", answer: "Aus einer Blutprobe wird plättchenreiches Plasma gewonnen und in die Kopfhaut eingebracht." },
      { question: "Ist PRP garantiert wirksam?", answer: "Nein. Die Ergebnisse variieren und hängen vom Befund ab." },
      { question: "Brauche ich vorher Laborwerte?", answer: "Je nach Situation können Laborwerte sinnvoll sein, besonders bei diffusem Haarausfall oder Mangelverdacht." },
    ],
  }),
  prpHairEn: treatmentPage({
    locale: "en",
    title: "PRP for Hair Loss in Berlin-Mitte",
    eyebrow: "Autologous scalp treatment",
    description: "PRP for hair loss in Berlin-Mitte after medical assessment and as part of an individual treatment concept.",
    canonical: "/en/services/prp-hair-loss",
    alternate: "/leistungen/prp-haarausfall",
    cta: "Book PRP consultation",
    secondaryCta: "Hair-loss assessment",
    secondaryHref: "/en/services/hair-loss-berlin-mitte",
    intro: "PRP for hair loss is an autologous procedure in which platelet-rich plasma is applied to the scalp. Suitability depends on cause and findings.",
    focus: "Scalp, hair-follicle environment, findings",
    process: "Assessment, blood draw, PRP preparation, scalp treatment",
    limits: "The evidence is positive but heterogeneous; success cannot be guaranteed.",
    suitable: ["early androgenetic alopecia after assessment", "possible follow-up monitoring", "combined with diagnostics", "realistic expectations"],
    related: [
      { title: "Hair-loss assessment", href: "/en/services/hair-loss-berlin-mitte", description: "Diagnostics before treatment planning." },
      { title: "Micronutrient analysis", href: "/en/services/micronutrient-analysis", description: "Targeted testing for possible deficiencies." },
    ],
    faq: [
      { question: "How does PRP for hair loss work?", answer: "Platelet-rich plasma is prepared from a blood sample and applied to the scalp." },
      { question: "Is PRP guaranteed to work?", answer: "No. Results vary and depend on findings." },
      { question: "Do I need lab values first?", answer: "Depending on the situation, lab values may be useful, especially with diffuse hair loss or suspected deficiency." },
    ],
  }),
});
