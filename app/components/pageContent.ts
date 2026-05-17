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
    objectPositionClass?: string;
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
    title: "Innere Medizin in Berlin-Mitte",
    eyebrow: "INNERE MEDIZIN & HAUSÄRZTLICHE LEISTUNGEN",
    description: "Praxis Jona am Rosenthaler Platz, hausärztliche Versorgung, Schilddrüsendiagnostik, Vorsorgeuntersuchungen, Akuttermine und moderne internistische Diagnostik in Berlin-Mitte.",
    cta: "Termin buchen",
    ctaHref: Constants.appointmentUrl,
    secondaryCta: "Kontakt aufnehmen",
    secondaryHref: "/kontakt",
    sections: [
      {
        title: "Internistische und hausärztliche Versorgung",
        intro: "Für akute Beschwerden, Vorsorge und gezielte Diagnostik verbinden wir Anamnese, Untersuchung, Labor und apparative Diagnostik nach medizinischer Notwendigkeit.",
        services: [
          { title: "Schilddrüse", href: "/schwerpunkte/schilddruese", description: "Schilddrüsendiagnostik mit Labor, Ultraschall und Einordnung häufiger Funktionsstörungen." },
          { title: "Akutsprechstunde", href: "/hausaerztliche-leistungen/akutsprechstunde", description: "Einschätzung akuter Beschwerden mit klarer Empfehlung zum weiteren Vorgehen." },
          { title: "Langzeit-Blutdruckmessung", href: "/hausaerztliche-leistungen/langzeit-blutdruckmessung", description: "24-Stunden-Blutdruckmessung zur realistischen Beurteilung Ihrer Werte im Alltag." },
          { title: "Ultraschalluntersuchung", href: "/hausaerztliche-leistungen/ultraschalluntersuchung", description: "Schonende Sonographie von Bauchorganen, Schilddrüse und ausgewählten Gefäßen." },
          { title: "Gesundheitsuntersuchung", href: "/hausaerztliche-leistungen/gesundheitsuntersuchung-check-up", description: "Gesetzlicher Check-up zur Früherkennung häufiger internistischer Erkrankungen." },
          { title: "EKG", href: "/hausaerztliche-leistungen/ekg", description: "Ruhe-EKG und Belastungs-EKG zur Beurteilung von Herzrhythmus und Belastbarkeit." },
          { title: "Prä- und postoperative Versorgung", href: "/hausaerztliche-leistungen/praeoperative-untersuchung", description: "Hausärztliche Abklärung vor Operationen und Begleitung im weiteren Verlauf." },
          { title: "Impfungen", href: "/hausaerztliche-leistungen/impfungen", description: "Impfstatus-Check, Auffrischungen und individuelle Impfberatung nach STIKO." },
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
    title: "Internal Medicine in Berlin-Mitte",
    eyebrow: "General & Internal Medicine",
    description: "Praxis Jona near Rosenthaler Platz: primary care, thyroid diagnostics, preventive check-ups, acute appointments and modern internal medicine diagnostics in Berlin-Mitte.",
    cta: "Book appointment",
    ctaHref: Constants.appointmentUrl,
    secondaryCta: "Contact",
    secondaryHref: "/en/contact",
    sections: [
      {
        title: "Internal medicine and primary care",
        intro: "For acute symptoms, preventive care and targeted diagnostics, we combine medical history, physical examination, lab testing and technical diagnostics when medically indicated.",
        services: [
          { title: "Thyroid diagnostics", href: "/en/focus-areas/thyroid-gland", description: "Thyroid assessment with lab testing, ultrasound and interpretation of common dysfunctions." },
          { title: "Acute consultation", href: "/en/general-medicine/acute-consultation", description: "Assessment of acute symptoms with a clear recommendation for next steps." },
          { title: "24-hour blood pressure monitoring", href: "/en/general-medicine/24-hour-blood-pressure-monitoring", description: "Ambulatory blood pressure monitoring for realistic values in daily life." },
          { title: "Ultrasound examination", href: "/en/general-medicine/ultrasound-examination", description: "Gentle sonography of abdominal organs, thyroid and selected blood vessels." },
          { title: "Preventive health check-up", href: "/en/general-medicine/preventive-check-up", description: "Public-insurance check-up for early detection of common internal medicine conditions." },
          { title: "ECG", href: "/en/general-medicine/ecg", description: "Resting ECG and exercise ECG to assess heart rhythm and exercise capacity." },
          { title: "Pre- and postoperative care", href: "/en/general-medicine/preoperative-examination", description: "Primary-care assessment before surgery and support during the further course." },
          { title: "Vaccinations", href: "/en/general-medicine/vaccinations", description: "Vaccination status check, boosters and individual vaccination advice according to STIKO guidance." },
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
      objectPositionClass: "object-[28%_72%] lg:object-center",
    },
    cta: "Termin buchen",
    ctaHref: Constants.appointmentUrl,
    secondaryCta: "Preise ansehen",
    secondaryHref: "/aesthetik/preise",
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
      { question: "Was ist der Unterschied zwischen Botulinumtoxin, PRP, Microneedling und Polynukleotiden?", answer: "Botulinumtoxin zielt auf mimische Muskelaktivität. PRP ist ein Eigenblutverfahren zur Unterstützung der Regeneration. Microneedling adressiert Struktur und Porenbild. Polynukleotide werden zur Unterstützung der Hautqualität und Spannkraft eingesetzt." },
      { question: "Welche Behandlung passt zu mir?", answer: "Das hängt von Hautbild, Mimik, Zielsetzung und Befund ab. In der Beratung klären wir, welches Verfahren sinnvoll sein kann." },
      { question: "Sind natürliche Ergebnisse möglich?", answer: "Der Fokus liegt auf einer zurückhaltenden ärztlichen Planung. Ergebnisse und Dauer können individuell variieren." },
      { question: "Wie läuft ein ästhetischer Beratungstermin ab?", answer: "Wir besprechen Ihr Anliegen, prüfen Hautbild, Mimik und medizinische Faktoren und erklären geeignete Optionen, Grenzen, Ablauf und Kosten." },
      { question: "Kann ich Preise vorab ansehen?", answer: "Ja. Die Ästhetik-Preise sind in einer eigenen Preisübersicht transparent aufgeführt. Für Botulinumtoxin gibt es zusätzlich eine eigene Preisseite." },
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
      objectPositionClass: "object-[28%_72%] lg:object-center",
    },
    cta: "Book appointment",
    ctaHref: Constants.appointmentUrl,
    secondaryCta: "View prices",
    secondaryHref: "/en/aesthetics/prices",
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
      { question: "What is the difference between botulinum toxin, PRP, microneedling and polynucleotides?", answer: "Botulinum toxin targets facial muscle activity. PRP is an autologous blood-based procedure to support regeneration. Microneedling addresses texture and pore appearance. Polynucleotides are used to support skin quality and firmness." },
      { question: "Which treatment is right for me?", answer: "That depends on your skin, facial expression, goals and medical findings. During consultation, we clarify which procedure may be suitable." },
      { question: "Are natural-looking results possible?", answer: "The focus is on careful physician-led planning. Results and duration can vary individually." },
      { question: "How does an aesthetic consultation work?", answer: "We discuss your concern, assess skin, facial expression and medical factors, and explain suitable options, limits, process and cost." },
      { question: "Can I view prices in advance?", answer: "Yes. Aesthetic prices are listed transparently in a dedicated price overview. Botulinum toxin also has its own price page." },
      { question: "Is the practice easy to reach?", answer: "Yes. Praxis Jona is located in Berlin-Mitte at Torstraße 125 near Rosenthaler Platz." },
      { question: "Can I book online?", answer: "Yes. You can book an appointment online via Doctolib." },
    ],
  },
  longevityDe: {
    locale: "de",
    title: "Health / Longevity in Berlin-Mitte",
    eyebrow: "Prävention, Stoffwechsel & Vitalität",
    description: "Ärztlich geführte Prävention, Check-ups, Ernährung, Mikronährstoffe, Infusionen und medizinische Gewichtsreduktion in der Praxis Jona am Rosenthaler Platz.",
    heroImage: {
      src: "/images/clinic/clinic-newA.jpg",
      alt: "Ruhiger Behandlungs- und Beratungsraum der Praxis Jona für Health und Longevity in Berlin-Mitte",
      objectPositionClass: "object-[18%_55%] lg:object-[22%_50%]",
    },
    cta: "Termin zur Abklärung buchen",
    ctaHref: Constants.appointmentUrl,
    secondaryCta: "Preise ansehen",
    secondaryHref: "/health-longevity/preise",
    sections: [
      {
        title: "Medizinisch geführte Gesundheitsoptimierung",
        intro: "Longevity beginnt nicht mit einzelnen Trends, sondern mit einer klaren ärztlichen Einordnung. Wir verbinden Beschwerden, Laborwerte, Risikoprofil und persönliche Ziele zu konkreten nächsten Schritten.",
        services: [
          { title: "Eiseninfusion", href: "/leistungen/eiseninfusion-kosten", eyebrow: "Mangel & Energie", description: "Bei nachgewiesenem Eisenmangel und passender Indikation. Festpreis: 150,95 €." },
          { title: "Vitamininfusion", href: "/leistungen/infusionstherapie", eyebrow: "Gezielte Auffüllung", description: "Infusionen bei relevantem Mangel oder passender medizinischer Fragestellung, nicht als pauschale Wellnesslösung." },
          { title: "Abnehmspritze", href: "/leistungen/abnehmspritze", eyebrow: "Gewicht & Stoffwechsel", description: "Ärztlich begleitete Gewichtsreduktion mit GLP-1-basierten Medikamenten, wenn sie medizinisch geeignet ist." },
          { title: "Ernährungsberatung", href: "/leistungen/ernaehrungsmedizin", eyebrow: "Alltag & Stoffwechsel", description: "Medizinische Ernährungstherapie für Gewicht, Stoffwechselwerte und langfristige Gesundheitsziele." },
          { title: "Premium Check-up", href: "/leistungen/private-check-up", eyebrow: "Erweiterte Diagnostik", description: "Vorsorge über gesetzliche Leistungen hinaus mit strukturierter ärztlicher Auswertung." },
          { title: "Prävention / Longevity", href: "/praevention", eyebrow: "Programm", description: "Strukturierte Pakete von Basic bis Premium für Menschen, die Gesundheit planbarer machen möchten." },
          { title: "Mikronährstofftherapie", href: "/leistungen/mikronahrstoffanalyse", eyebrow: "Laborbasiert", description: "Diagnostik und Therapieplanung auf Basis relevanter Laborwerte, Symptome und Ernährungssituation." },
          { title: "Reiseimpfung", href: "/leistungen/reiseimpfungen", eyebrow: "Reisemedizin", description: "Reisemedizinische Beratung und Impfungen nach Ziel, Risiko, Impfstatus und Vorgeschichte." },
          { title: "Haarausfall-Abklärung", href: "/leistungen/haarausfall-berlin-mitte", eyebrow: "Diagnostik & PRP", description: "Ärztliches Konzept mit Diagnostik, PRP und Mikronährstofftherapie nach Befund." },
        ],
      },
      {
        title: "Welche Leistung passt zu welchem Anliegen?",
        intro: "Viele Beschwerden sind unspezifisch. Müdigkeit, Gewichtszunahme, Haarausfall oder Leistungsabfall können unterschiedliche Ursachen haben. Deshalb beginnt die Empfehlung mit einer medizinischen Einordnung.",
        services: [
          { title: "Müdigkeit und niedrige Speicher", href: "/leistungen/eiseninfusion-kosten", description: "Bei Eisenmangel prüfen wir, ob Tabletten ausreichen oder eine Eiseninfusion medizinisch sinnvoll ist." },
          { title: "Gesundheit proaktiv messen", href: "/praevention", description: "Für Menschen, die Risiken früh erkennen und aus Messwerten konkrete Schritte ableiten möchten." },
          { title: "Gewicht medizinisch begleiten", href: "/leistungen/abnehmspritze", description: "Für Patientinnen und Patienten, bei denen Ernährung, Stoffwechsel und medikamentöse Optionen zusammen gedacht werden sollen." },
          { title: "Mängel gezielt prüfen", href: "/leistungen/mikronahrstoffanalyse", description: "Wenn Ernährung, Symptome oder Verlauf eine laborbasierte Mikronährstoffdiagnostik sinnvoll machen." },
        ],
      },
      {
        title: "Warum Praxis Jona für Health / Longevity?",
        intro: "Unser Anspruch ist nicht möglichst viel Diagnostik, sondern sinnvolle Diagnostik mit verständlicher Auswertung. Entscheidend ist, was aus den Ergebnissen folgt.",
        services: [
          { title: "Ärztliche Priorisierung", href: "/team", description: "Wir ordnen Werte, Symptome und Risiken medizinisch ein, damit aus Daten ein nachvollziehbarer Plan wird." },
          { title: "Transparente Selbstzahlerleistungen", href: "/kontakt", description: "Kosten, Nutzen und Grenzen privater Leistungen werden vorab besprochen." },
          { title: "Zentral am Rosenthaler Platz", href: "/kontakt", description: "Die Praxis liegt in Berlin-Mitte und ist mit U-Bahn und Tram gut erreichbar." },
        ],
      },
      {
        title: "So läuft die Abklärung ab",
        intro: "Health / Longevity ist ein Prozess. Am Anfang steht die Frage, welches Ziel Sie verfolgen und welche Diagnostik dafür wirklich hilfreich ist.",
        services: [
          { title: "1. Anliegen klären", href: "/kontakt", description: "Wir besprechen Beschwerden, Ziele, Vorgeschichte, Medikamente und vorhandene Befunde." },
          { title: "2. Diagnostik planen", href: "/leistungen/mikronahrstoffanalyse", description: "Labor, Check-up oder weiterführende Diagnostik werden gezielt und nicht pauschal ausgewählt." },
          { title: "3. Empfehlung ableiten", href: "/praevention", description: "Sie erhalten eine ärztliche Einordnung mit konkreten nächsten Schritten und Verlaufsempfehlung." },
        ],
      },
    ],
    faq: [
      { question: "Was bedeutet Health / Longevity in der Praxis Jona?", answer: "Wir verstehen darunter ärztlich geführte Prävention, Diagnostik und Therapieplanung für langfristige Gesundheitsziele, nicht pauschale Wellnessangebote." },
      { question: "Ist Health / Longevity nur für Privatpatienten?", answer: "Viele erweiterte Leistungen sind Selbstzahlerleistungen. Wir besprechen Kosten und medizinische Sinnhaftigkeit transparent vorab." },
      { question: "Wann ist eine Infusion sinnvoll?", answer: "Infusionen kommen nach ärztlicher Einschätzung und bei passender Indikation infrage, zum Beispiel bei relevantem Mangel oder Unverträglichkeit oraler Therapie." },
      { question: "Was kostet die Eiseninfusion?", answer: "Die Eiseninfusion kostet als Festpreis 150,95 €." },
      { question: "Wann ist eine Mikronährstoffanalyse sinnvoll?", answer: "Sie kann sinnvoll sein, wenn Beschwerden, Ernährung, Haarausfall, Müdigkeit oder Verlaufskontrollen auf mögliche Mängel hinweisen." },
      { question: "Was ist der Unterschied zwischen Check-up und Präventionspaket?", answer: "Ein Check-up ist eine diagnostische Bestandsaufnahme. Die Präventionspakete gehen weiter und verbinden Diagnostik, Auswertung und längerfristige Begleitung." },
      { question: "Kann ich eine Abnehmspritze direkt buchen?", answer: "Vor einer medikamentösen Gewichtsreduktion steht eine ärztliche Einschätzung, ob die Behandlung geeignet ist und welche Begleitung sinnvoll ist." },
      { question: "Wie buche ich einen Termin?", answer: "Sie können online über Doctolib oder telefonisch mit der Praxis einen Termin vereinbaren." },
    ],
  },
  longevityEn: {
    locale: "en",
    title: "Health / Longevity in Berlin-Mitte",
    eyebrow: "Prevention, metabolism & vitality",
    description: "Physician-led prevention, check-ups, nutrition, micronutrients, infusions and medical weight management at Praxis Jona near Rosenthaler Platz.",
    heroImage: {
      src: "/images/clinic/clinic-newA.jpg",
      alt: "Calm consultation and treatment room at Praxis Jona for Health and Longevity in Berlin-Mitte",
      objectPositionClass: "object-[18%_55%] lg:object-[22%_50%]",
    },
    cta: "Book assessment",
    ctaHref: Constants.appointmentUrl,
    secondaryCta: "View prices",
    secondaryHref: "/en/health-longevity/prices",
    sections: [
      {
        title: "Physician-led health optimization",
        intro: "Longevity does not start with trends. It starts with clear medical assessment. We connect symptoms, lab values, risk profile and personal goals into concrete next steps.",
        services: [
          { title: "Iron infusion", href: "/en/services/iron-infusion-costs", eyebrow: "Deficiency & energy", description: "For documented iron deficiency and suitable indication. Fixed price: €150.95." },
          { title: "Vitamin infusion", href: "/en/services/infusion-therapy", eyebrow: "Targeted repletion", description: "Infusions for relevant deficiencies or suitable medical questions, not as a generic wellness product." },
          { title: "Weight-loss injection", href: "/en/services/weight-loss-injection", eyebrow: "Weight & metabolism", description: "Physician-supervised weight management with GLP-1-based medication when medically suitable." },
          { title: "Nutrition counseling", href: "/en/services/nutritional-medicine", eyebrow: "Daily habits & metabolism", description: "Medical nutrition therapy for weight, metabolic values and long-term health goals." },
          { title: "Premium check-up", href: "/en/services/private-insurance-check-up", eyebrow: "Extended diagnostics", description: "Preventive care beyond standard public insurance services with structured medical interpretation." },
          { title: "Prevention / Longevity", href: "/en/prevention", eyebrow: "Program", description: "Structured packages from Basic to Premium for patients who want to make health more measurable." },
          { title: "Micronutrient therapy", href: "/en/services/micronutrient-analysis", eyebrow: "Lab-based", description: "Diagnostics and treatment planning based on lab values, symptoms and nutrition context." },
          { title: "Travel vaccination", href: "/en/services/travel-vaccinations", eyebrow: "Travel medicine", description: "Travel medicine advice and vaccination planning based on destination, risk, records and history." },
          { title: "Hair-loss assessment", href: "/en/services/hair-loss-berlin-mitte", eyebrow: "Diagnostics & PRP", description: "Medical concept with diagnostics, PRP and micronutrient therapy depending on findings." },
        ],
      },
      {
        title: "Which service fits which concern?",
        intro: "Many symptoms are non-specific. Fatigue, weight gain, hair loss or lower performance can have different causes. That is why every recommendation starts with medical assessment.",
        services: [
          { title: "Fatigue and low stores", href: "/en/services/iron-infusion-costs", description: "With iron deficiency, we assess whether tablets are enough or whether an iron infusion is medically reasonable." },
          { title: "Measure health proactively", href: "/en/prevention", description: "For patients who want to identify risks earlier and translate measurements into practical next steps." },
          { title: "Support weight medically", href: "/en/services/weight-loss-injection", description: "For patients who want nutrition, metabolism and medication options considered together." },
          { title: "Check deficiencies deliberately", href: "/en/services/micronutrient-analysis", description: "When diet, symptoms or follow-up make lab-based micronutrient diagnostics useful." },
        ],
      },
      {
        title: "Why Praxis Jona for Health / Longevity?",
        intro: "Our goal is not maximum testing. It is useful testing with clear interpretation. What matters is what follows from the results.",
        services: [
          { title: "Medical prioritization", href: "/en/team", description: "We interpret values, symptoms and risks medically so data becomes a clear plan." },
          { title: "Transparent self-pay services", href: "/en/contact", description: "Cost, benefit and limits of private services are discussed before treatment." },
          { title: "Central Berlin-Mitte location", href: "/en/contact", description: "The practice is located in Berlin-Mitte and is easy to reach by U-Bahn and tram." },
        ],
      },
      {
        title: "How the assessment works",
        intro: "Health / Longevity is a process. It starts with the goal you are pursuing and which diagnostics are actually useful for it.",
        services: [
          { title: "1. Clarify the concern", href: "/en/contact", description: "We discuss symptoms, goals, medical history, medication and existing findings." },
          { title: "2. Plan diagnostics", href: "/en/services/micronutrient-analysis", description: "Lab testing, check-ups or further diagnostics are selected deliberately, not generically." },
          { title: "3. Derive recommendations", href: "/en/prevention", description: "You receive medical interpretation with concrete next steps and follow-up recommendations." },
        ],
      },
    ],
    faq: [
      { question: "What does Health / Longevity mean at Praxis Jona?", answer: "It means physician-led prevention, diagnostics and treatment planning for long-term health goals, not generic wellness services." },
      { question: "Is Health / Longevity only for privately insured patients?", answer: "Many extended services are self-pay services. We discuss cost and medical suitability transparently in advance." },
      { question: "When is an infusion useful?", answer: "Infusions may be considered after medical assessment and suitable indication, for example relevant deficiency or intolerance of oral therapy." },
      { question: "What does the iron infusion cost?", answer: "The iron infusion has a fixed price of €150.95." },
      { question: "When is micronutrient analysis useful?", answer: "It may be useful when symptoms, diet, hair loss, fatigue or follow-up suggest possible deficiencies." },
      { question: "What is the difference between a check-up and a prevention package?", answer: "A check-up is a diagnostic snapshot. Prevention packages go further and combine diagnostics, interpretation and longer-term guidance." },
      { question: "Can I book a weight-loss injection directly?", answer: "Before medication-based weight management, we assess whether treatment is suitable and what support is useful." },
      { question: "How do I book an appointment?", answer: "You can book online via Doctolib or contact the practice by phone." },
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
      { label: "Behandlungsart", value: "Eigenblutverfahren mit PRP" },
      { label: "Ablauf", value: "Beratung, Blutentnahme, Aufbereitung, Behandlung" },
      { label: "Ausfallzeit", value: "meist gering, abhängig von Hautreaktion" },
      { label: "Serie", value: "individuell nach Hautbefund" },
      { label: "Kombination", value: "ggf. mit Microneedling nach Einschätzung" },
      { label: "Wichtig", value: "Ergebnisse können individuell variieren" },
    ],
    sections: [
      { title: "Was ist PRP?", body: ["PRP steht für plättchenreiches Plasma. Es wird aus einer kleinen Blutprobe gewonnen und anschließend in ausgewählte Hautareale eingebracht.", "Das Verfahren wird eingesetzt, um regenerative Prozesse und Hautqualität nach ärztlicher Einschätzung zu unterstützen."] },
      { title: "Für wen PRP infrage kommen kann", body: ["PRP kann für Patientinnen und Patienten interessant sein, die ihre Hautqualität ärztlich begleitet unterstützen möchten."], bullets: ["müde wirkendes Hautbild", "feine Linien", "Regenerationswunsch", "Kombination mit Microneedling nach Einschätzung"] },
      { title: "So läuft die Behandlung ab", body: ["Nach der ärztlichen Einschätzung wird Blut entnommen, aufbereitet und das plättchenreiche Plasma gezielt in die Haut eingebracht. Vorab besprechen wir Grenzen, Risiken und realistische Erwartungen."] },
      { title: "Wann Ergebnisse sichtbar werden können", body: ["PRP ist nicht auf einen Soforteffekt ausgelegt. Veränderungen werden individuell wahrgenommen und hängen unter anderem von Hautbild, Behandlungsziel und Verlauf ab."] },
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
      { question: "Wie viele PRP-Behandlungen sind sinnvoll?", answer: "Das hängt von Ausgangsbefund, Ziel und Verlauf ab. Eine Serie kann sinnvoll sein, wird aber individuell geplant." },
      { question: "Welche Nebenwirkungen sind möglich?", answer: "Möglich sind vorübergehende Rötungen, Schwellungen, kleine Blutergüsse oder ein Spannungsgefühl. Individuelle Risiken werden vorab besprochen." },
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
      { label: "Treatment type", value: "Autologous PRP procedure" },
      { label: "Process", value: "Consultation, blood draw, preparation, treatment" },
      { label: "Downtime", value: "usually low, depending on skin reaction" },
      { label: "Series", value: "individual, based on skin findings" },
      { label: "Combination", value: "possibly with microneedling after assessment" },
      { label: "Important", value: "Results can vary individually" },
    ],
    sections: [
      { title: "What is PRP?", body: ["PRP means platelet-rich plasma. It is prepared from a small blood sample and applied to selected skin areas.", "The procedure is used to support regenerative processes and skin quality after medical assessment."] },
      { title: "Who PRP may be suitable for", body: ["PRP may be of interest for patients who want physician-led support for skin quality."], bullets: ["tired-looking skin", "fine lines", "regeneration goals", "combination with microneedling after assessment"] },
      { title: "How treatment works", body: ["After medical assessment, blood is drawn, prepared and the platelet-rich plasma is applied to the skin. We discuss limits, risks and realistic expectations beforehand."] },
      { title: "When results may be visible", body: ["PRP is not designed as an immediate effect treatment. Perceived changes vary and depend on skin findings, treatment goals and course."] },
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
      { question: "How many PRP treatments are useful?", answer: "This depends on baseline findings, goals and course. A series can be useful but is planned individually." },
      { question: "What side effects are possible?", answer: "Temporary redness, swelling, small bruises or tightness can occur. Individual risks are discussed beforehand." },
    ],
  },
};

function treatmentPage(input: Omit<LandingContent, "facts" | "sections" | "related" | "faq"> & {
  focus: string;
  process: string;
  duration?: string;
  downtime?: string;
  sessions?: string;
  cost?: string;
  suitable: string[];
  limits: string;
  related: ServiceLink[];
  faq: { question: string; answer: string }[];
}): LandingContent {
  const isEn = input.locale === "en";
  const facts = [
    { label: isEn ? "Focus" : "Fokus", value: input.focus },
    { label: isEn ? "Process" : "Ablauf", value: input.process },
    input.duration ? { label: isEn ? "Duration" : "Dauer", value: input.duration } : null,
    input.downtime ? { label: isEn ? "Downtime" : "Ausfallzeit", value: input.downtime } : null,
    input.sessions ? { label: isEn ? "Sessions" : "Sitzungen", value: input.sessions } : null,
    input.cost ? { label: isEn ? "Cost" : "Kosten", value: input.cost } : null,
    { label: isEn ? "Important" : "Wichtig", value: input.limits },
  ].filter(Boolean) as { label: string; value: string }[];

  return {
    ...input,
    facts,
    sections: [
      {
        title: isEn ? `What is ${input.title.split(" in ")[0]}?` : `Was ist ${input.title.split(" in ")[0]}?`,
        body: [input.description, input.intro],
      },
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
    duration: "je nach Areal und Hautbild",
    downtime: "Rötung meist vorübergehend",
    sessions: "häufig mehrere Sitzungen",
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
      { question: "Wann ist man nach Microneedling wieder gesellschaftsfähig?", answer: "Rötungen und Empfindlichkeit können vorübergehend auftreten. Die konkrete Nachpflege und Ausfallzeit besprechen wir beim Termin." },
      { question: "Hilft Microneedling bei Aknenarben?", answer: "Bei ausgewählten Narbenbildern kann Microneedling infrage kommen. Ob es passt, hängt vom Befund ab." },
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
    duration: "depends on area and skin findings",
    downtime: "redness is usually temporary",
    sessions: "often several sessions",
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
      { question: "When can I return to normal activities?", answer: "Redness and sensitivity can occur temporarily. Specific aftercare and downtime are discussed at the appointment." },
      { question: "Can microneedling help acne scars?", answer: "Microneedling may be considered for selected scar patterns. Suitability depends on findings." },
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
    duration: "wenige Minuten bis kurz, je nach Areal",
    downtime: "mögliche Rötung oder Schwellung",
    sessions: "individuell, oft als Konzept geplant",
    limits: "Keine Behandlung ersetzt eine ärztliche Einschätzung; Ergebnisse können variieren.",
    suitable: ["feine Linien", "trockene oder beanspruchte Haut", "Augenpartie nach Befund", "regenerationsbedürftige Haut"],
    related: [
      { title: "PRP Gesicht & Haut", href: "/aesthetik/prp-behandlung", description: "Eigenblutverfahren für Hautqualität." },
      { title: "Microneedling", href: "/aesthetik/microneedling", description: "Hautstruktur und Porenbild verbessern." },
    ],
    faq: [
      { question: "Was sind Polynukleotide?", answer: "Polynukleotide werden in der ästhetischen Medizin zur Unterstützung regenerativer Prozesse der Haut eingesetzt." },
      { question: "Für welche Areale sind sie interessant?", answer: "Je nach Befund können Gesicht, Hals oder sensible Areale wie die Augenpartie besprochen werden." },
      { question: "Ist das ein Ersatz für Botulinumtoxin?", answer: "Nein. Polynukleotide und Botulinumtoxin haben unterschiedliche Zielsetzungen." },
      { question: "Wann sieht man Ergebnisse?", answer: "Das ist individuell unterschiedlich. Polynukleotide sind auf Hautqualität und Regeneration ausgelegt, nicht auf einen sofortigen Volumeneffekt." },
      { question: "Welche Nebenwirkungen sind möglich?", answer: "Vorübergehende Rötungen, Schwellungen oder kleine Blutergüsse können auftreten. Individuelle Risiken werden ärztlich besprochen." },
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
    duration: "short, depending on area",
    downtime: "possible redness or swelling",
    sessions: "individual, often planned as a concept",
    limits: "No treatment replaces medical assessment; results can vary.",
    suitable: ["fine lines", "dry or stressed skin", "eye area depending on findings", "skin needing regenerative support"],
    related: [
      { title: "PRP face & skin", href: "/en/aesthetics/prp-treatment", description: "Autologous procedure for skin quality." },
      { title: "Microneedling", href: "/en/aesthetics/microneedling", description: "Improve texture and pore appearance." },
    ],
    faq: [
      { question: "What are polynucleotides?", answer: "Polynucleotides are used in aesthetic medicine to support regenerative processes in the skin." },
      { question: "Which areas can be discussed?", answer: "Depending on findings, the face, neck or delicate areas such as the eye area can be discussed." },
      { question: "Is this a replacement for botulinum toxin?", answer: "No. Polynucleotides and botulinum toxin have different treatment goals." },
      { question: "When are results visible?", answer: "This varies individually. Polynucleotides focus on skin quality and regeneration, not an immediate volume effect." },
      { question: "What side effects are possible?", answer: "Temporary redness, swelling or small bruises can occur. Individual risks are discussed medically." },
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
    sessions: "abhängig von Verfahren und Ziel",
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
      { question: "Was ist der Unterschied zu Botulinumtoxin?", answer: "Botulinumtoxin zielt auf mimische Muskelaktivität. PRP, Microneedling und Polynukleotide zielen stärker auf Hautqualität, Struktur und Regeneration." },
      { question: "Welche Behandlung passt bei großen Poren?", answer: "Bei Porenbild und Hautstruktur wird häufig Microneedling besprochen. Die Entscheidung hängt vom Hautbefund ab." },
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
    sessions: "depends on procedure and goal",
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
      { question: "How is this different from botulinum toxin?", answer: "Botulinum toxin targets facial muscle activity. PRP, microneedling and polynucleotides focus more on skin quality, texture and regeneration." },
      { question: "Which treatment fits enlarged pores?", answer: "Microneedling is often discussed for pore appearance and texture. The decision depends on skin findings." },
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
    duration: "Beratung nach Anliegen und Befund",
    sessions: "Therapieplan abhängig von Ursache",
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
      { question: "Was ist der Unterschied zwischen diffusem und anlagebedingtem Haarausfall?", answer: "Diffuser Haarausfall betrifft häufig die gesamte Kopfhaut und kann verschiedene Auslöser haben. Anlagebedingter Haarausfall folgt eher typischen Mustern. Die Einordnung erfolgt ärztlich." },
      { question: "Kann Eisenmangel Haarausfall verstärken?", answer: "Ein relevanter Eisenmangel kann bei manchen Patientinnen und Patienten eine Rolle spielen. Ob das zutrifft, wird anhand von Beschwerden und Laborwerten eingeordnet." },
      { question: "Wird direkt PRP empfohlen?", answer: "Nicht automatisch. Am Anfang steht die Abklärung; PRP ist nur eine mögliche Option je nach Befund." },
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
    duration: "consultation depends on concern and findings",
    sessions: "treatment plan depends on cause",
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
      { question: "What is the difference between diffuse and pattern hair loss?", answer: "Diffuse hair loss often affects the whole scalp and can have different triggers. Pattern hair loss usually follows typical patterns. Medical assessment clarifies this." },
      { question: "Can iron deficiency worsen hair loss?", answer: "Relevant iron deficiency can contribute in some patients. This is assessed through symptoms and lab values." },
      { question: "Is PRP recommended immediately?", answer: "Not automatically. Assessment comes first; PRP is one possible option depending on findings." },
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
    duration: "Behandlung nach Areal und Plan",
    sessions: "meist als Serie zu besprechen",
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
      { question: "Wie viele PRP-Sitzungen sind bei Haarausfall sinnvoll?", answer: "Das wird individuell geplant. Häufig wird eine Serie besprochen, abhängig von Befund, Verlauf und Ziel." },
      { question: "Wann sieht man Veränderungen?", answer: "Das ist individuell unterschiedlich und hängt unter anderem von Ursache, Ausgangsbefund und Verlauf ab." },
      { question: "Welche Nebenwirkungen sind möglich?", answer: "Möglich sind vorübergehende Rötungen, Druckgefühl, kleine Blutergüsse oder Empfindlichkeit der Kopfhaut." },
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
    duration: "depends on area and plan",
    sessions: "often discussed as a series",
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
      { question: "How many PRP sessions are useful for hair loss?", answer: "This is planned individually. A series is often discussed depending on findings, course and goal." },
      { question: "When are changes visible?", answer: "This varies and depends on cause, baseline findings and course." },
      { question: "What side effects are possible?", answer: "Temporary redness, pressure sensation, small bruises or scalp sensitivity can occur." },
    ],
  }),
});

Object.assign(landingPages, {
  acuteConsultationDe: {
    locale: "de",
    title: "Akutsprechstunde in Berlin-Mitte",
    eyebrow: "Innere Medizin & Hausarztpraxis",
    description: "Akutsprechstunde in der Praxis Jona am Rosenthaler Platz für akute Beschwerden, Infekte, Schmerzen und kurzfristige medizinische Einschätzung.",
    canonical: "/hausaerztliche-leistungen/akutsprechstunde",
    alternate: "/en/general-medicine/acute-consultation",
    cta: "Termin anfragen",
    secondaryCta: "Innere Medizin ansehen",
    secondaryHref: "/hausaerztliche-leistungen",
    intro: "In der Akutsprechstunde klären wir kurzfristige Beschwerden, ordnen Symptome medizinisch ein und besprechen, welche nächsten Schritte sinnvoll sind.",
    facts: [
      { label: "Anliegen", value: "akute Beschwerden" },
      { label: "Wichtig", value: "bitte vorab kontaktieren" },
      { label: "Infekt oder Fieber", value: "bei Terminvereinbarung angeben" },
      { label: "Ziel", value: "klare Einschätzung und weiteres Vorgehen" },
    ],
    sections: [
      { title: "Wann ist die Akutsprechstunde sinnvoll?", body: ["Die Akutsprechstunde ist für Beschwerden gedacht, die zeitnah medizinisch eingeordnet werden sollten, aber nicht unmittelbar ein Notfall sind."], bullets: ["Infekte und Fieber", "akute Schmerzen", "Magen-Darm-Beschwerden", "Schwindel oder Kreislaufbeschwerden", "unklare Verschlechterung des Allgemeinzustands"] },
      { title: "Was wir vorab wissen müssen", body: ["Bitte kontaktieren Sie die Praxis vorab. Besonders bei Fieber, Atemwegsinfekten oder möglichen ansteckenden Erkrankungen hilft uns diese Information, den Ablauf für alle Patientinnen und Patienten sicher zu planen."] },
      { title: "Was im Termin passiert", body: ["Wir besprechen Ihre Beschwerden, führen die notwendige Untersuchung durch und entscheiden, ob Labor, EKG, Ultraschall, eine Arbeitsunfähigkeit oder eine weiterführende Abklärung notwendig ist."] },
    ],
    related: [
      { title: "EKG", href: "/hausaerztliche-leistungen/ekg", description: "Herzrhythmus und Belastbarkeit beurteilen." },
      { title: "Ultraschalluntersuchung", href: "/hausaerztliche-leistungen/ultraschalluntersuchung", description: "Schonende Diagnostik direkt in der Praxis." },
      { title: "Langzeit-Blutdruckmessung", href: "/hausaerztliche-leistungen/langzeit-blutdruckmessung", description: "Blutdruckwerte im Alltag erfassen." },
    ],
    faq: [
      { question: "Kann ich ohne Voranmeldung kommen?", answer: "Bitte kontaktieren Sie die Praxis vorab, damit wir den passenden Ablauf planen können." },
      { question: "Was gilt bei Fieber oder Infekt?", answer: "Bitte geben Sie Fieber, Atemwegsinfekte oder mögliche ansteckende Erkrankungen bereits bei der Terminvereinbarung an." },
      { question: "Ist die Akutsprechstunde ein Notdienst?", answer: "Nein. Bei lebensbedrohlichen Beschwerden wenden Sie sich bitte an den Rettungsdienst oder die Notaufnahme." },
    ],
  },
  acuteConsultationEn: {
    locale: "en",
    title: "Acute Consultation in Berlin-Mitte",
    eyebrow: "Internal medicine & primary care",
    description: "Acute consultation at Praxis Jona near Rosenthaler Platz for acute symptoms, infections, pain and short-notice medical assessment.",
    canonical: "/en/general-medicine/acute-consultation",
    alternate: "/hausaerztliche-leistungen/akutsprechstunde",
    cta: "Request appointment",
    secondaryCta: "View internal medicine",
    secondaryHref: "/en/general-medicine",
    intro: "During acute consultation, we assess short-term symptoms, classify them medically and discuss which next steps are appropriate.",
    facts: [
      { label: "Concern", value: "acute symptoms" },
      { label: "Important", value: "please contact us first" },
      { label: "Infection or fever", value: "mention when booking" },
      { label: "Goal", value: "clear assessment and next steps" },
    ],
    sections: [
      { title: "When is acute consultation useful?", body: ["Acute consultation is intended for symptoms that should be assessed promptly but are not immediately an emergency."], bullets: ["infections and fever", "acute pain", "gastrointestinal symptoms", "dizziness or circulatory symptoms", "unclear deterioration in general condition"] },
      { title: "What we need to know in advance", body: ["Please contact the practice before coming in. If you have fever, respiratory symptoms or a possible infectious disease, this helps us plan the safest process for all patients."] },
      { title: "What happens at the appointment", body: ["We discuss your symptoms, perform the necessary examination and decide whether lab testing, ECG, ultrasound, sick leave documentation or further assessment is needed."] },
    ],
    related: [
      { title: "ECG", href: "/en/general-medicine/ecg", description: "Assess heart rhythm and exercise capacity." },
      { title: "Ultrasound examination", href: "/en/general-medicine/ultrasound-examination", description: "Gentle diagnostics directly in the practice." },
      { title: "24-hour blood pressure monitoring", href: "/en/general-medicine/24-hour-blood-pressure-monitoring", description: "Record blood pressure values in daily life." },
    ],
    faq: [
      { question: "Can I come without contacting the practice first?", answer: "Please contact the practice in advance so we can plan the right process." },
      { question: "What applies if I have fever or an infection?", answer: "Please mention fever, respiratory symptoms or possible infectious disease when booking." },
      { question: "Is acute consultation an emergency service?", answer: "No. For life-threatening symptoms, please contact emergency services or an emergency department." },
    ],
  },
  bloodPressureMonitoringDe: {
    locale: "de",
    title: "Langzeit-Blutdruckmessung in Berlin-Mitte",
    eyebrow: "24h-Blutdruckmessung",
    description: "Langzeit-Blutdruckmessung in Berlin-Mitte: 24 Stunden automatische Blutdruckmessung zur Abklärung von Bluthochdruck und Therapiekontrolle.",
    canonical: "/hausaerztliche-leistungen/langzeit-blutdruckmessung",
    alternate: "/en/general-medicine/24-hour-blood-pressure-monitoring",
    cta: "Termin buchen",
    secondaryCta: "Innere Medizin ansehen",
    secondaryHref: "/hausaerztliche-leistungen",
    intro: "Mit der Langzeit-Blutdruckmessung wird Ihr Blutdruck über 24 Stunden automatisch aufgezeichnet, tagsüber und während des Schlafs. So entsteht ein realistisches Bild Ihrer Blutdruckwerte im Alltag.",
    facts: [
      { label: "Dauer", value: "24 Stunden" },
      { label: "Messintervall", value: "tagsüber ca. alle 15-20 Minuten" },
      { label: "Nachts", value: "ca. alle 30 Minuten" },
      { label: "Ziel", value: "Alltagswerte und Therapie beurteilen" },
    ],
    sections: [
      { title: "Was ist eine Langzeit-Blutdruckmessung?", body: ["Bei dieser Untersuchung wird Ihr Blutdruck über einen gesamten Tag und eine Nacht hinweg gemessen. Dadurch erkennen wir Schwankungen im Tagesverlauf, nächtliche Blutdruckwerte und Auffälligkeiten, die bei einzelnen Messungen in der Praxis verborgen bleiben können."] },
      { title: "Wie läuft die Untersuchung ab?", body: ["In der Praxis wird eine Blutdruckmanschette am Oberarm angelegt, die mit einem kleinen tragbaren Messgerät verbunden ist. Sie nehmen das Gerät mit nach Hause und führen Ihren normalen Alltag möglichst wie gewohnt fort."], bullets: ["tagsüber automatische Messung etwa alle 15-20 Minuten", "nachts automatische Messung etwa alle 30 Minuten", "Rückgabe des Geräts am nächsten Tag"] },
      { title: "Was sollte ich während der Messung beachten?", body: ["Bitte gehen Sie Ihrem Alltag möglichst wie gewohnt nach. Halten Sie den Arm während der Messung ruhig und gestreckt, vermeiden Sie starke Bewegung beim Aufpumpen und führen Sie ein kurzes Protokoll über Aktivitäten, Ruhezeiten und Schlafenszeiten."] },
      { title: "Was passiert nach den 24 Stunden?", body: ["Am nächsten Tag bringen Sie das Gerät zurück in die Praxis. Wir werten die Daten aus und besprechen, ob ein Bluthochdruck vorliegt, wie sich Ihr Blutdruck im Alltag verhält und ob eine Behandlung sinnvoll oder bereits gut eingestellt ist."] },
    ],
    related: [
      { title: "EKG", href: "/hausaerztliche-leistungen/ekg", description: "Herzdiagnostik bei Rhythmus- oder Belastungsfragen." },
      { title: "Gesundheitsuntersuchung", href: "/hausaerztliche-leistungen/gesundheitsuntersuchung-check-up", description: "Risiken frühzeitig erkennen." },
      { title: "Akutsprechstunde", href: "/hausaerztliche-leistungen/akutsprechstunde", description: "Akute Beschwerden zeitnah einordnen." },
    ],
    faq: [
      { question: "Ist die Langzeit-Blutdruckmessung unangenehm?", answer: "Die Manschette kann beim Aufpumpen kurzfristig drücken, besonders nachts. Die Untersuchung ist harmlos, sicher und meist gut verträglich." },
      { question: "Kann ich während der Messung normal arbeiten?", answer: "In der Regel ja. Gerade ein möglichst normaler Alltag macht die Werte aussagekräftig." },
      { question: "Wann werden die Ergebnisse besprochen?", answer: "Nach Rückgabe des Geräts werten wir die Daten aus und besprechen die Ergebnisse mit Ihnen." },
    ],
  },
  bloodPressureMonitoringEn: {
    locale: "en",
    title: "24-Hour Blood Pressure Monitoring in Berlin-Mitte",
    eyebrow: "Ambulatory blood pressure monitoring",
    description: "24-hour blood pressure monitoring in Berlin-Mitte: automatic ambulatory measurement to assess hypertension and treatment control.",
    canonical: "/en/general-medicine/24-hour-blood-pressure-monitoring",
    alternate: "/hausaerztliche-leistungen/langzeit-blutdruckmessung",
    cta: "Book appointment",
    secondaryCta: "View internal medicine",
    secondaryHref: "/en/general-medicine",
    intro: "With 24-hour blood pressure monitoring, your blood pressure is recorded automatically over a full day and night. This gives a realistic picture of your values in daily life.",
    facts: [
      { label: "Duration", value: "24 hours" },
      { label: "Interval", value: "about every 15-20 minutes during the day" },
      { label: "At night", value: "about every 30 minutes" },
      { label: "Goal", value: "assess daily values and treatment" },
    ],
    sections: [
      { title: "What is 24-hour blood pressure monitoring?", body: ["Your blood pressure is measured over a complete day and night. This helps detect daily fluctuations, night-time values and abnormalities that can be missed by a single measurement in the practice."] },
      { title: "How does the examination work?", body: ["A blood pressure cuff is placed on your upper arm and connected to a small portable device. You take the device home and continue your usual daily routine as much as possible."], bullets: ["automatic measurement about every 15-20 minutes during the day", "automatic measurement about every 30 minutes at night", "return of the device the following day"] },
      { title: "What should I consider during measurement?", body: ["Please continue your routine as normally as possible. Keep your arm still and extended during measurement, avoid strong movement while the cuff inflates and keep a short record of activities, rest periods and sleep times."] },
      { title: "What happens after 24 hours?", body: ["You return the device to the practice the next day. We evaluate the data and discuss whether hypertension is present, how your blood pressure behaves in daily life and whether treatment is useful or already well adjusted."] },
    ],
    related: [
      { title: "ECG", href: "/en/general-medicine/ecg", description: "Cardiac diagnostics for rhythm or exercise questions." },
      { title: "Preventive health check-up", href: "/en/general-medicine/preventive-check-up", description: "Detect risks early." },
      { title: "Acute consultation", href: "/en/general-medicine/acute-consultation", description: "Assess acute symptoms promptly." },
    ],
    faq: [
      { question: "Is 24-hour blood pressure monitoring uncomfortable?", answer: "The cuff can briefly feel tight while inflating, especially at night. The examination is harmless, safe and usually well tolerated." },
      { question: "Can I work normally during monitoring?", answer: "Usually yes. A normal daily routine makes the values more meaningful." },
      { question: "When are the results discussed?", answer: "After you return the device, we evaluate the data and discuss the results with you." },
    ],
  },
});

Object.assign(landingPages, {
  ecgInternalDe: {
    locale: "de",
    title: "EKG-Untersuchung in Berlin-Mitte",
    eyebrow: "Herzdiagnostik",
    description: "EKG in Berlin-Mitte: Ruhe-EKG und Belastungs-EKG zur Beurteilung von Herzrhythmus, Herzfrequenz, Beschwerden und Belastbarkeit.",
    canonical: "/hausaerztliche-leistungen/ekg",
    alternate: "/en/general-medicine/ecg",
    cta: "Termin buchen",
    secondaryCta: "Innere Medizin ansehen",
    secondaryHref: "/hausaerztliche-leistungen",
    intro: "Das Elektrokardiogramm zeichnet die elektrische Aktivität des Herzens auf. Die Untersuchung hilft, Herzrhythmusstörungen, Durchblutungsstörungen oder andere Veränderungen der Herzfunktion frühzeitig zu erkennen.",
    facts: [
      { label: "Verfahren", value: "Ruhe-EKG und Belastungs-EKG" },
      { label: "Dauer", value: "meist wenige Minuten" },
      { label: "Ziel", value: "Herzrhythmus und Belastbarkeit" },
      { label: "Durchführung", value: "schmerzfrei" },
    ],
    sections: [
      { title: "Wann wird ein EKG durchgeführt?", body: ["Ein EKG kann bei Beschwerden, bekannten Erkrankungen, Vorsorgeuntersuchungen oder sportmedizinischen Fragestellungen sinnvoll sein."], bullets: ["Herzstolpern oder Herzrasen", "Brustschmerzen oder Druckgefühl", "Schwindel oder Ohnmachtsanfälle", "Luftnot oder eingeschränkte Belastbarkeit", "Bluthochdruck", "Kontrolle bekannter Herzerkrankungen"] },
      { title: "Ruhe-EKG", body: ["Beim Ruhe-EKG werden Elektroden auf Brust, Arme und Beine geklebt, während Sie entspannt liegen. Die Untersuchung dauert nur wenige Minuten und zeigt unter anderem Herzrhythmus, Herzfrequenz, Hinweise auf Rhythmusstörungen sowie mögliche Durchblutungsstörungen oder frühere Herzbelastungen."] },
      { title: "Belastungs-EKG", body: ["Beim Belastungs-EKG erfolgt die Aufzeichnung unter körperlicher Belastung, meist auf einem Fahrradergometer. So kann beurteilt werden, wie Ihr Herz unter Belastung arbeitet, ob Beschwerden auftreten und ob Hinweise auf Durchblutungsstörungen bestehen. Herzfrequenz, Blutdruck und EKG werden kontinuierlich überwacht."] },
    ],
    related: [
      { title: "Langzeit-Blutdruckmessung", href: "/hausaerztliche-leistungen/langzeit-blutdruckmessung", description: "Blutdruckwerte über 24 Stunden erfassen." },
      { title: "Gesundheitsuntersuchung", href: "/hausaerztliche-leistungen/gesundheitsuntersuchung-check-up", description: "Herz-Kreislauf-Risiken früh erkennen." },
      { title: "Akutsprechstunde", href: "/hausaerztliche-leistungen/akutsprechstunde", description: "Akute Beschwerden zeitnah einordnen." },
    ],
    faq: [
      { question: "Ist ein EKG schmerzhaft?", answer: "Nein. Ruhe-EKG und Belastungs-EKG sind schmerzfrei." },
      { question: "Wann ist ein Belastungs-EKG sinnvoll?", answer: "Ein Belastungs-EKG kann sinnvoll sein, wenn Beschwerden unter Belastung auftreten oder die Belastbarkeit des Herzens beurteilt werden soll." },
      { question: "Wie lange dauert ein Ruhe-EKG?", answer: "Das Ruhe-EKG dauert meist nur wenige Minuten." },
    ],
  },
  ecgInternalEn: {
    locale: "en",
    title: "ECG Examination in Berlin-Mitte",
    eyebrow: "Cardiac diagnostics",
    description: "ECG in Berlin-Mitte: resting ECG and exercise ECG to assess heart rhythm, heart rate, symptoms and exercise capacity.",
    canonical: "/en/general-medicine/ecg",
    alternate: "/hausaerztliche-leistungen/ekg",
    cta: "Book appointment",
    secondaryCta: "View internal medicine",
    secondaryHref: "/en/general-medicine",
    intro: "An electrocardiogram records the electrical activity of the heart. It helps detect rhythm disturbances, circulation problems or other changes in heart function early.",
    facts: [
      { label: "Method", value: "resting ECG and exercise ECG" },
      { label: "Duration", value: "usually a few minutes" },
      { label: "Goal", value: "heart rhythm and exercise capacity" },
      { label: "Procedure", value: "painless" },
    ],
    sections: [
      { title: "When is an ECG performed?", body: ["An ECG can be useful for symptoms, known conditions, preventive examinations or sports medicine questions."], bullets: ["palpitations or racing heartbeat", "chest pain or pressure", "dizziness or fainting", "shortness of breath or reduced exercise capacity", "high blood pressure", "monitoring known heart disease"] },
      { title: "Resting ECG", body: ["For a resting ECG, electrodes are attached to the chest, arms and legs while you lie relaxed. The examination takes only a few minutes and shows heart rhythm, heart rate, indications of rhythm disturbances and possible circulation problems or previous strain on the heart."] },
      { title: "Exercise ECG", body: ["During an exercise ECG, recording takes place under physical exertion, usually on a bicycle ergometer. This helps assess how your heart works under load, whether symptoms occur and whether there are signs of circulation problems. Heart rate, blood pressure and ECG are monitored continuously."] },
    ],
    related: [
      { title: "24-hour blood pressure monitoring", href: "/en/general-medicine/24-hour-blood-pressure-monitoring", description: "Record blood pressure over 24 hours." },
      { title: "Preventive health check-up", href: "/en/general-medicine/preventive-check-up", description: "Detect cardiovascular risks early." },
      { title: "Acute consultation", href: "/en/general-medicine/acute-consultation", description: "Assess acute symptoms promptly." },
    ],
    faq: [
      { question: "Is an ECG painful?", answer: "No. Resting ECG and exercise ECG are painless." },
      { question: "When is an exercise ECG useful?", answer: "An exercise ECG may be useful when symptoms occur under exertion or when the heart's exercise capacity should be assessed." },
      { question: "How long does a resting ECG take?", answer: "A resting ECG usually takes only a few minutes." },
    ],
  },
  vaccinationsInternalDe: {
    locale: "de",
    title: "Impfberatung und Schutzimpfungen in Berlin-Mitte",
    eyebrow: "Impfschutz nach STIKO",
    description: "Impfberatung in Berlin-Mitte: Impfstatus prüfen, Auffrischungen planen und Schutzimpfungen nach STIKO individuell besprechen.",
    canonical: "/hausaerztliche-leistungen/impfungen",
    alternate: "/en/general-medicine/vaccinations",
    cta: "Impftermin buchen",
    secondaryCta: "Innere Medizin ansehen",
    secondaryHref: "/hausaerztliche-leistungen",
    intro: "Ein aktueller Impfschutz ist ein wichtiger Bestandteil der Gesundheitsvorsorge. Wir überprüfen gemeinsam Ihren Impfstatus nach den Empfehlungen der STIKO und beraten zu notwendigen Auffrischungen oder fehlenden Impfungen.",
    facts: [
      { label: "Grundlage", value: "STIKO-Empfehlungen" },
      { label: "Intervall", value: "Status idealerweise alle 10 Jahre prüfen" },
      { label: "Bitte mitbringen", value: "Impfausweis" },
      { label: "Beratung", value: "nach Alter, Risiko und Vorgeschichte" },
    ],
    sections: [
      { title: "Welche Impfungen sind für Erwachsene wichtig?", body: ["Die STIKO empfiehlt Erwachsenen, den Impfstatus regelmäßig überprüfen zu lassen, idealerweise alle 10 Jahre. Dazu gehören unter anderem Auffrischimpfungen gegen Tetanus, Diphtherie, Keuchhusten und Polio. Je nach Alter, Vorerkrankungen oder persönlichem Risiko können weitere Impfungen sinnvoll sein."] },
      { title: "Empfohlene Impfungen ab 60 Jahren", body: ["Für Menschen ab 60 Jahren empfiehlt die STIKO unter anderem die jährliche Grippeimpfung, regelmäßige COVID-19-Auffrischimpfungen, Pneumokokken-Impfung, RSV-Impfung ab 75 Jahren und eine einmalige Impfung gegen Gürtelrose."] },
      { title: "Individuelle Impfberatung", body: ["Bei chronischen Erkrankungen, Kinderwunsch oder Schwangerschaft, Reisen, beruflichen Risiken oder unvollständigem Impfstatus beraten wir individuell zu sinnvollen Schutzimpfungen. Bitte bringen Sie Ihren Impfausweis zum Termin mit."] },
    ],
    related: [
      { title: "Gesundheitsuntersuchung", href: "/hausaerztliche-leistungen/gesundheitsuntersuchung-check-up", description: "Vorsorge und Impfstatus gemeinsam prüfen." },
      { title: "Akutsprechstunde", href: "/hausaerztliche-leistungen/akutsprechstunde", description: "Akute Beschwerden einordnen." },
      { title: "Reiseimpfung", href: "/leistungen/reiseimpfungen", description: "Reisemedizinische Beratung nach Ziel und Risiko." },
    ],
    faq: [
      { question: "Muss ich meinen Impfausweis mitbringen?", answer: "Ja, bitte bringen Sie Ihren Impfausweis mit, damit wir den Impfstatus vollständig prüfen können." },
      { question: "Wie oft sollte der Impfstatus geprüft werden?", answer: "Idealerweise alle 10 Jahre oder bei besonderen Anlässen wie Reise, Schwangerschaft, beruflichem Risiko oder chronischer Erkrankung." },
      { question: "Welche Impfungen sind ab 60 wichtig?", answer: "Je nach Situation gehören dazu unter anderem Influenza, COVID-19-Auffrischungen, Pneumokokken, RSV ab 75 Jahren und Herpes Zoster." },
    ],
  },
  vaccinationsInternalEn: {
    locale: "en",
    title: "Vaccination Advice and Immunizations in Berlin-Mitte",
    eyebrow: "Protection according to STIKO guidance",
    description: "Vaccination advice in Berlin-Mitte: check vaccination status, plan boosters and discuss immunizations individually according to STIKO guidance.",
    canonical: "/en/general-medicine/vaccinations",
    alternate: "/hausaerztliche-leistungen/impfungen",
    cta: "Book vaccination appointment",
    secondaryCta: "View internal medicine",
    secondaryHref: "/en/general-medicine",
    intro: "Up-to-date vaccination protection is an important part of preventive care. We review your vaccination status according to STIKO recommendations and advise on necessary boosters or missing vaccinations.",
    facts: [
      { label: "Basis", value: "STIKO recommendations" },
      { label: "Interval", value: "ideally check status every 10 years" },
      { label: "Please bring", value: "vaccination record" },
      { label: "Advice", value: "based on age, risk and history" },
    ],
    sections: [
      { title: "Which vaccinations are important for adults?", body: ["STIKO recommends that adults have their vaccination status checked regularly, ideally every 10 years. This includes boosters against tetanus, diphtheria, pertussis and polio. Depending on age, pre-existing conditions or personal risk, further vaccinations may be useful."] },
      { title: "Recommended vaccinations from age 60", body: ["For people aged 60 and older, STIKO recommends annual influenza vaccination, regular COVID-19 boosters, pneumococcal vaccination, RSV vaccination from age 75 and a one-time shingles vaccination."] },
      { title: "Individual vaccination advice", body: ["For chronic conditions, pregnancy planning or pregnancy, travel, occupational risks or incomplete vaccination status, we provide individual advice on useful immunizations. Please bring your vaccination record to the appointment."] },
    ],
    related: [
      { title: "Preventive health check-up", href: "/en/general-medicine/preventive-check-up", description: "Review prevention and vaccination status together." },
      { title: "Acute consultation", href: "/en/general-medicine/acute-consultation", description: "Assess acute symptoms." },
      { title: "Travel vaccination", href: "/en/services/travel-vaccinations", description: "Travel medicine advice based on destination and risk." },
    ],
    faq: [
      { question: "Do I need to bring my vaccination record?", answer: "Yes, please bring your vaccination record so we can review your status completely." },
      { question: "How often should vaccination status be checked?", answer: "Ideally every 10 years or for specific reasons such as travel, pregnancy, occupational risk or chronic illness." },
      { question: "Which vaccinations are important from age 60?", answer: "Depending on the situation, these include influenza, COVID-19 boosters, pneumococcal vaccination, RSV from age 75 and shingles." },
    ],
  },
  preoperativeInternalDe: {
    locale: "de",
    title: "Präoperative Untersuchung in Berlin-Mitte",
    eyebrow: "Vor Operationen",
    description: "Präoperative hausärztliche Untersuchung in Berlin-Mitte vor ambulanten oder stationären Operationen mit Anamnese, Untersuchung, EKG und Labor nach Bedarf.",
    canonical: "/hausaerztliche-leistungen/praeoperative-untersuchung",
    alternate: "/en/general-medicine/preoperative-examination",
    cta: "Termin buchen",
    secondaryCta: "Innere Medizin ansehen",
    secondaryHref: "/hausaerztliche-leistungen",
    intro: "Vor vielen ambulanten oder stationären Operationen ist eine hausärztliche präoperative Untersuchung notwendig. Dabei prüfen wir, ob aus internistischer Sicht Risiken bestehen und ob Sie für den geplanten Eingriff gut vorbereitet sind.",
    facts: [
      { label: "Anlass", value: "geplante Operation" },
      { label: "Inhalte", value: "Anamnese, Untersuchung, EKG, Labor" },
      { label: "Bitte mitbringen", value: "OP-Unterlagen und Medikamentenplan" },
      { label: "Kosten", value: "mit Überweisung meist Kassenleistung" },
    ],
    sections: [
      { title: "Was beinhaltet die präoperative Untersuchung?", body: ["Je nach geplanter Operation und Vorerkrankungen umfasst die Untersuchung eine ausführliche Anamnese, körperliche Untersuchung, Blutdruckkontrolle, Ruhe-EKG, Laboruntersuchungen und gegebenenfalls weitere Diagnostik wie Lungenfunktion. Außerdem prüfen wir bestehende Erkrankungen, Medikamente und Risikofaktoren für Narkose oder Eingriff."] },
      { title: "Was muss ich zum Termin mitbringen?", body: ["Bitte bringen Sie möglichst die Überweisung oder Anforderung des Operateurs beziehungsweise der Klinik, vorhandene Unterlagen zur Operation, Ihren Medikamentenplan und relevante Vorbefunde mit. Das erleichtert die Einschätzung und verhindert unnötige Doppeluntersuchungen."] },
      { title: "Kostenübernahme", body: ["Präoperative Untersuchungen mit entsprechender Überweisung vor einem geplanten Eingriff werden in der Regel von den gesetzlichen Krankenkassen übernommen."] },
      { title: "Warum ist die Untersuchung wichtig?", body: ["Die präoperative Untersuchung hilft, mögliche Risiken frühzeitig zu erkennen, bestehende Erkrankungen optimal einzustellen und die Sicherheit während Operation und Narkose zu verbessern. So kann der Eingriff möglichst sicher und komplikationsarm durchgeführt werden."] },
    ],
    related: [
      { title: "EKG", href: "/hausaerztliche-leistungen/ekg", description: "Ruhe-EKG oder Belastungs-EKG nach Bedarf." },
      { title: "Gesundheitsuntersuchung", href: "/hausaerztliche-leistungen/gesundheitsuntersuchung-check-up", description: "Vorsorge und Risikofaktoren prüfen." },
      { title: "Ultraschalluntersuchung", href: "/hausaerztliche-leistungen/ultraschalluntersuchung", description: "Zusätzliche Diagnostik nach medizinischer Indikation." },
    ],
    faq: [
      { question: "Für welche Operationen wird eine präoperative Untersuchung benötigt?", answer: "Häufig vor Katarakt-Operationen, Knie- oder Hüftoperationen, Arthroskopien, Hernienoperationen, kleineren chirurgischen Eingriffen oder ambulanten Operationen mit Narkose oder Sedierung." },
      { question: "Welche Unterlagen sollte ich mitbringen?", answer: "Bitte bringen Sie OP-Anforderung oder Überweisung, OP-Unterlagen, Medikamentenplan und relevante Vorbefunde mit." },
      { question: "Übernimmt die Krankenkasse die Kosten?", answer: "Mit entsprechender Überweisung vor einem geplanten Eingriff wird die Untersuchung in der Regel von gesetzlichen Krankenkassen übernommen." },
    ],
  },
  preoperativeInternalEn: {
    locale: "en",
    title: "Preoperative Examination in Berlin-Mitte",
    eyebrow: "Before surgery",
    description: "Preoperative primary-care examination in Berlin-Mitte before outpatient or inpatient surgery, with history, examination, ECG and lab testing when needed.",
    canonical: "/en/general-medicine/preoperative-examination",
    alternate: "/hausaerztliche-leistungen/praeoperative-untersuchung",
    cta: "Book appointment",
    secondaryCta: "View internal medicine",
    secondaryHref: "/en/general-medicine",
    intro: "Before many outpatient or inpatient operations, a preoperative primary-care examination is required. We assess whether there are internal medicine risks and whether you are well prepared for the planned procedure.",
    facts: [
      { label: "Reason", value: "planned surgery" },
      { label: "Includes", value: "history, examination, ECG, lab testing" },
      { label: "Please bring", value: "surgery documents and medication plan" },
      { label: "Cost", value: "usually covered with referral" },
    ],
    sections: [
      { title: "What does the preoperative examination include?", body: ["Depending on the planned operation and pre-existing conditions, the examination includes medical history, physical examination, blood pressure check, resting ECG, lab testing and, if needed, further diagnostics such as lung function testing. We also review existing conditions, medication and risk factors for anesthesia or surgery."] },
      { title: "What should I bring to the appointment?", body: ["Please bring the referral or request from the surgeon or clinic, available surgery documents, your medication plan and relevant previous findings. This supports assessment and helps avoid unnecessary duplicate testing."] },
      { title: "Cost coverage", body: ["Preoperative examinations with a corresponding referral before a planned procedure are usually covered by public health insurance."] },
      { title: "Why is the examination important?", body: ["The preoperative examination helps identify risks early, optimize existing conditions and improve safety during surgery and anesthesia. This supports the safest possible procedure with fewer complications."] },
    ],
    related: [
      { title: "ECG", href: "/en/general-medicine/ecg", description: "Resting ECG or exercise ECG when needed." },
      { title: "Preventive health check-up", href: "/en/general-medicine/preventive-check-up", description: "Review prevention and risk factors." },
      { title: "Ultrasound examination", href: "/en/general-medicine/ultrasound-examination", description: "Additional diagnostics when medically indicated." },
    ],
    faq: [
      { question: "For which operations is a preoperative examination needed?", answer: "Often before cataract surgery, knee or hip surgery, arthroscopy, hernia surgery, smaller surgical procedures or outpatient surgery with anesthesia or sedation." },
      { question: "Which documents should I bring?", answer: "Please bring the surgical request or referral, surgery documents, medication plan and relevant previous findings." },
      { question: "Does public insurance cover the cost?", answer: "With a corresponding referral before a planned procedure, the examination is usually covered by public health insurance." },
    ],
  },
});

Object.assign(landingPages, {
  ultrasoundInternalDe: {
    locale: "de",
    title: "Ultraschalluntersuchung in Berlin-Mitte",
    eyebrow: "Sonographie",
    description: "Ultraschalluntersuchung in Berlin-Mitte: schmerzfreie und strahlenfreie Sonographie von Bauchorganen, Schilddrüse, Bauchaorta und ausgewählten Gefäßen.",
    canonical: "/hausaerztliche-leistungen/ultraschalluntersuchung",
    alternate: "/en/general-medicine/ultrasound-examination",
    cta: "Termin buchen",
    secondaryCta: "Preise ansehen",
    secondaryHref: "/hausaerztliche-leistungen/preise",
    intro: "Die Ultraschalluntersuchung ist ein schonendes, schmerzfreies und strahlenfreies Verfahren zur Darstellung innerer Organe. Sie ermöglicht eine schnelle Beurteilung vieler Beschwerden direkt in der Praxis.",
    facts: [
      { label: "Verfahren", value: "schmerzfrei und strahlenfrei" },
      { label: "Dauer", value: "meist nur wenige Minuten" },
      { label: "Befund", value: "Bilder direkt sichtbar" },
      { label: "Einsatz", value: "Organe und Gefäße" },
    ],
    sections: [
      { title: "Wann wird eine Ultraschalluntersuchung durchgeführt?", body: ["Eine Sonographie erfolgt bei medizinischer Notwendigkeit, zum Beispiel bei Beschwerden, auffälligen Laborwerten oder zur Kontrolle bekannter Befunde. Auch Vorsorgeuntersuchungen ohne akute Beschwerden können sinnvoll sein und erfolgen dann meist als individuelle Gesundheitsleistung."], bullets: ["Bauchschmerzen, Übelkeit oder Verdauungsbeschwerden", "Verdacht auf Veränderungen an Leber, Gallenblase, Nieren, Milz oder Bauchspeicheldrüse", "Abklärung von Schilddrüsenveränderungen", "Kontrolle bekannter Befunde wie Zysten, Steine oder Organvergrößerungen", "Nachsorge nach Erkrankungen oder Operationen"] },
      { title: "Welche Vorteile bietet die Sonographie?", body: ["Ultraschall ist direkt in der Praxis durchführbar, gut verträglich und beliebig wiederholbar. Die Untersuchung hilft zu entscheiden, ob weitere Diagnostik notwendig ist."], bullets: ["keine Strahlenbelastung", "schmerzfrei", "Ergebnisse sofort sichtbar", "keine besondere Vorbereitung in den meisten Fällen"] },
      { title: "Wie läuft die Untersuchung ab?", body: ["Die Untersuchung findet im Liegen statt. Ein spezielles Gel wird auf die Haut aufgetragen, anschließend werden die Organe mit einem Ultraschallkopf in Echtzeit dargestellt und direkt beurteilt."] },
      { title: "Ultraschall der Bauchschlagader", body: ["Ein Bauchaortenaneurysma ist eine Erweiterung der Hauptschlagader im Bauchraum und verursacht oft lange keine Beschwerden. Gesetzlich versicherte Männer ab 65 Jahren haben einmalig Anspruch auf eine Ultraschalluntersuchung der Bauchaorta zur Früherkennung. Für Frauen kann die Untersuchung auf Wunsch als individuelle Gesundheitsleistung durchgeführt werden."] },
    ],
    related: [
      { title: "Schilddrüse", href: "/schwerpunkte/schilddruese", description: "Schilddrüsendiagnostik mit Labor und Ultraschall." },
      { title: "Gesundheitsuntersuchung", href: "/hausaerztliche-leistungen/gesundheitsuntersuchung-check-up", description: "Vorsorge und Risikoeinschätzung." },
      { title: "EKG", href: "/hausaerztliche-leistungen/ekg", description: "Herzdiagnostik in der Praxis." },
    ],
    faq: [
      { question: "Ist eine Ultraschalluntersuchung schmerzhaft?", answer: "Nein. Die Untersuchung ist schmerzfrei und kommt ohne Strahlenbelastung aus." },
      { question: "Welche Ultraschalluntersuchungen bietet die Praxis an?", answer: "Wir bieten unter anderem Bauchultraschall, Schilddrüsenultraschall, Ultraschall der Bauchaorta, Ultraschall der Halsschlagadern und je nach Situation weitere Untersuchungen an." },
      { question: "Übernimmt die Krankenkasse die Kosten?", answer: "Bei medizinischer Notwendigkeit kann die Untersuchung Kassenleistung sein. Vorsorgeuntersuchungen ohne akute Beschwerden erfolgen häufig als individuelle Gesundheitsleistung." },
    ],
  },
  ultrasoundInternalEn: {
    locale: "en",
    title: "Ultrasound Examination in Berlin-Mitte",
    eyebrow: "Sonography",
    description: "Ultrasound examination in Berlin-Mitte: painless and radiation-free sonography of abdominal organs, thyroid, abdominal aorta and selected vessels.",
    canonical: "/en/general-medicine/ultrasound-examination",
    alternate: "/hausaerztliche-leistungen/ultraschalluntersuchung",
    cta: "Book appointment",
    secondaryCta: "View prices",
    secondaryHref: "/en/general-medicine/prices",
    intro: "Ultrasound is a gentle, painless and radiation-free method for visualizing internal organs. It enables quick assessment of many symptoms directly in the practice.",
    facts: [
      { label: "Method", value: "painless and radiation-free" },
      { label: "Duration", value: "usually only a few minutes" },
      { label: "Findings", value: "images visible immediately" },
      { label: "Use", value: "organs and vessels" },
    ],
    sections: [
      { title: "When is ultrasound performed?", body: ["Sonography is performed when medically indicated, for example for symptoms, abnormal lab values or follow-up of known findings. Preventive examinations without acute symptoms may also be useful and are usually individual self-pay services."], bullets: ["abdominal pain, nausea or digestive symptoms", "suspected changes in liver, gallbladder, kidneys, spleen or pancreas", "assessment of thyroid changes", "follow-up of known findings such as cysts, stones or organ enlargement", "follow-up after illness or surgery"] },
      { title: "What are the advantages of sonography?", body: ["Ultrasound can be performed directly in the practice, is well tolerated and can be repeated as needed. It helps decide whether further diagnostics are necessary."], bullets: ["no radiation exposure", "painless", "results visible immediately", "usually no special preparation required"] },
      { title: "How does the examination work?", body: ["The examination is performed while lying down. A special gel is applied to the skin, then the organs are displayed in real time with an ultrasound probe and assessed directly."] },
      { title: "Ultrasound of the abdominal aorta", body: ["An abdominal aortic aneurysm is an enlargement of the main artery in the abdomen and often causes no symptoms for a long time. Publicly insured men aged 65 and older are entitled to a one-time ultrasound screening of the abdominal aorta. For women, the examination can be performed on request as an individual self-pay service."] },
    ],
    related: [
      { title: "Thyroid diagnostics", href: "/en/focus-areas/thyroid-gland", description: "Thyroid assessment with lab testing and ultrasound." },
      { title: "Preventive health check-up", href: "/en/general-medicine/preventive-check-up", description: "Prevention and risk assessment." },
      { title: "ECG", href: "/en/general-medicine/ecg", description: "Cardiac diagnostics in the practice." },
    ],
    faq: [
      { question: "Is an ultrasound examination painful?", answer: "No. The examination is painless and does not involve radiation exposure." },
      { question: "Which ultrasound examinations does the practice offer?", answer: "We offer abdominal ultrasound, thyroid ultrasound, ultrasound of the abdominal aorta, ultrasound of the carotid arteries and further examinations depending on the situation." },
      { question: "Does public insurance cover the cost?", answer: "When medically indicated, ultrasound may be covered. Preventive examinations without acute symptoms are often individual self-pay services." },
    ],
  },
  checkupInternalDe: {
    locale: "de",
    title: "Gesundheitsuntersuchung Check-up in Berlin-Mitte",
    eyebrow: "Vorsorgeuntersuchung",
    description: "Gesetzlicher Check-up in Berlin-Mitte zur Früherkennung von Bluthochdruck, Diabetes, Fettstoffwechselstörungen und Nierenerkrankungen.",
    canonical: "/hausaerztliche-leistungen/gesundheitsuntersuchung-check-up",
    alternate: "/en/general-medicine/preventive-check-up",
    cta: "Check-up buchen",
    secondaryCta: "Preise ansehen",
    secondaryHref: "/hausaerztliche-leistungen/preise",
    intro: "Der Check-up ist eine Vorsorgeuntersuchung der gesetzlichen Krankenkassen zur Früherkennung häufiger Erkrankungen. Ziel ist es, gesundheitliche Risiken frühzeitig zu erkennen, bevor Beschwerden entstehen.",
    facts: [
      { label: "Anspruch", value: "18-34 einmalig, ab 35 alle 3 Jahre" },
      { label: "Kosten", value: "gesetzliche Kassenleistung nach Anspruch" },
      { label: "Ziel", value: "Risiken früh erkennen" },
      { label: "Ergänzungen", value: "IGeL nach Wunsch und Befund" },
    ],
    sections: [
      { title: "Wer hat Anspruch auf den Check-up?", body: ["Zwischen 18 und 34 Jahren besteht einmalig Anspruch auf den Check-up. Ab 35 Jahren kann die Gesundheitsuntersuchung alle drei Jahre durchgeführt werden. Die Kosten werden nach den gesetzlichen Vorgaben von den Krankenkassen übernommen."] },
      { title: "Was beinhaltet die Untersuchung?", body: ["Wir sprechen über Ihre persönliche Krankengeschichte, familiäre Risiken, Allergien, Vorbefunde, Krankenhausaufenthalte, frühere Untersuchungen und Lebensstilfaktoren. Je nach Situation folgen körperliche Untersuchung, Blutdruckmessung, Herz- und Lungenuntersuchung sowie die gemeinsame Auswertung."] },
      { title: "Laboruntersuchungen", body: ["Zwischen 18 und 34 Jahren erfolgen Laboruntersuchungen bei medizinischer Notwendigkeit nach ärztlicher Einschätzung. Ab 35 Jahren sind unter anderem Nüchternblutzucker, Cholesterinwerte, ein einmaliges Hepatitis-B- und Hepatitis-C-Screening sowie eine Urinuntersuchung vorgesehen."] },
      { title: "Erweiterte Vorsorge und zusätzliche Untersuchungen", body: ["Auf Wunsch können ergänzend weitere Laborwerte oder diagnostische Untersuchungen durchgeführt werden, zum Beispiel differenziertes Blutbild, Leberwerte, Nierenwerte, Schilddrüsenwerte, Vitamin- und Mineralstoffanalysen, erweitertes Lipidprofil, Ultraschall, EKG, Lungenfunktionstest oder Langzeit-Blutdruckmessung. Diese Leistungen erfolgen in der Regel als individuelle Gesundheitsleistungen."] },
    ],
    related: [
      { title: "Langzeit-Blutdruckmessung", href: "/hausaerztliche-leistungen/langzeit-blutdruckmessung", description: "Blutdruck im Alltag beurteilen." },
      { title: "Ultraschalluntersuchung", href: "/hausaerztliche-leistungen/ultraschalluntersuchung", description: "Erweiterte Diagnostik nach Befund." },
      { title: "Impfungen", href: "/hausaerztliche-leistungen/impfungen", description: "Impfschutz im Rahmen der Vorsorge prüfen." },
    ],
    faq: [
      { question: "Wie oft kann ich den gesetzlichen Check-up machen?", answer: "Zwischen 18 und 34 Jahren einmalig, ab 35 Jahren alle drei Jahre." },
      { question: "Welche Laborwerte sind enthalten?", answer: "Ab 35 Jahren sind unter anderem Nüchternblutzucker, Cholesterinwerte, Hepatitis-B- und Hepatitis-C-Screening einmal im Leben sowie Urinuntersuchung vorgesehen." },
      { question: "Kann ich zusätzliche Werte prüfen lassen?", answer: "Ja. Erweiterte Labor- oder Diagnostikleistungen können nach Wunsch und medizinischer Einschätzung als individuelle Gesundheitsleistungen ergänzt werden." },
    ],
  },
  checkupInternalEn: {
    locale: "en",
    title: "Preventive Health Check-up in Berlin-Mitte",
    eyebrow: "Public-insurance preventive care",
    description: "Public-insurance health check-up in Berlin-Mitte for early detection of hypertension, diabetes, lipid disorders and kidney disease.",
    canonical: "/en/general-medicine/preventive-check-up",
    alternate: "/hausaerztliche-leistungen/gesundheitsuntersuchung-check-up",
    cta: "Book check-up",
    secondaryCta: "View prices",
    secondaryHref: "/en/general-medicine/prices",
    intro: "The health check-up is a preventive examination covered by public insurers according to eligibility. The goal is to detect health risks early, before symptoms develop.",
    facts: [
      { label: "Eligibility", value: "18-34 once, from 35 every 3 years" },
      { label: "Cost", value: "public insurance service when eligible" },
      { label: "Goal", value: "early risk detection" },
      { label: "Add-ons", value: "self-pay services by request and findings" },
    ],
    sections: [
      { title: "Who is eligible for the check-up?", body: ["Between ages 18 and 34, the check-up can be used once. From age 35, it can be performed every three years. Costs are covered by public insurers according to statutory rules."] },
      { title: "What does the examination include?", body: ["We discuss your personal medical history, family risks, allergies, previous findings, hospital stays, earlier examinations and lifestyle factors. Depending on the situation, this is followed by physical examination, blood pressure measurement, heart and lung examination and joint review of results."] },
      { title: "Lab testing", body: ["Between ages 18 and 34, lab tests are performed when medically indicated after physician assessment. From age 35, statutory testing includes fasting blood glucose, cholesterol values, one-time hepatitis B and C screening and urine testing."] },
      { title: "Extended prevention and additional diagnostics", body: ["Additional lab values or diagnostics can be added on request, for example differential blood count, liver values, kidney values, thyroid values, vitamin and mineral analysis, extended lipid profile, ultrasound, ECG, lung function testing or 24-hour blood pressure monitoring. These are usually individual self-pay services."] },
    ],
    related: [
      { title: "24-hour blood pressure monitoring", href: "/en/general-medicine/24-hour-blood-pressure-monitoring", description: "Assess blood pressure in daily life." },
      { title: "Ultrasound examination", href: "/en/general-medicine/ultrasound-examination", description: "Additional diagnostics depending on findings." },
      { title: "Vaccinations", href: "/en/general-medicine/vaccinations", description: "Check vaccination protection as part of prevention." },
    ],
    faq: [
      { question: "How often can I have the public-insurance check-up?", answer: "Once between ages 18 and 34, then every three years from age 35." },
      { question: "Which lab values are included?", answer: "From age 35, statutory testing includes fasting blood glucose, cholesterol values, one-time hepatitis B and C screening and urine testing." },
      { question: "Can I add additional lab values?", answer: "Yes. Extended lab or diagnostic services can be added as individual self-pay services depending on request and medical assessment." },
    ],
  },
});
