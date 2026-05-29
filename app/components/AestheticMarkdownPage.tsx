import Image from "next/image";
import Link from "next/link";
import { CalendarDaysIcon, ClockIcon, CreditCardIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { Constants } from "app/Constants";
import type { AppointmentBookingUrls } from "app/Constants";
import AppointmentBookingButton from "app/components/AppointmentBookingButton";
import { MotionCard, MotionSection } from "app/components/Motion";
import TreatmentPricingBlock from "app/components/pricing/TreatmentPricingBlock";
import { pricingSections, type PricingLocale, type PricingSection } from "app/components/pricing/pricingData";
import { getAestheticSectionMarkdown, getAestheticSectionTitle, type AestheticSectionKey } from "app/content/aesthetikSource";

type MarkdownNode =
  | { type: "h1" | "h2" | "h3" | "p" | "rule"; text?: string }
  | { type: "list"; items: string[] };

type AestheticDetailPage = {
  sectionKey: AestheticSectionKey;
  slug: string;
  deSlug?: string;
  title: string;
  href: string;
  alternate?: string;
  description?: string[];
  content?: MarkdownNode[];
};

const detailPages: Partial<Record<AestheticSectionKey, AestheticDetailPage[]>> = {
  prp: [
    { sectionKey: "prp", slug: "prp-gesicht", title: "PRP Gesicht", href: "/aesthetik/prp-behandlung/prp-gesicht" },
    { sectionKey: "prp", slug: "prp-augenregion-bei-dunklen-augenringen", title: "PRP Augenregion bei dunklen Augenringen", href: "/aesthetik/prp-behandlung/prp-augenregion-bei-dunklen-augenringen" },
    { sectionKey: "prp", slug: "prp-gesicht-hals-und-dekollete", title: "PRP Gesicht, Hals & Dekolleté", href: "/aesthetik/prp-behandlung/prp-gesicht-hals-und-dekollete" },
    { sectionKey: "prp", slug: "vampire-lifting-prp-kombiniert-mit-medizinischem-microneedling", title: "Vampire Lifting / PRP kombiniert mit medizinischem Microneedling", href: "/aesthetik/prp-behandlung/vampire-lifting-prp-kombiniert-mit-medizinischem-microneedling" },
  ],
  microneedling: [
    {
      sectionKey: "microneedling",
      slug: "vampirelift-medizinisches-microneedling-gesicht",
      title: "Vampirelift + med. Microneedling Gesicht",
      href: "/aesthetik/microneedling/vampirelift-medizinisches-microneedling-gesicht",
      description: [
        "Bei dieser Behandlung wird medizinisches Microneedling im Gesicht mit PRP / Eigenblut kombiniert, um die Hautregeneration intensiver zu unterstützen.",
        "Die Kombination verbindet die strukturverbessernde Wirkung der Mikrokanäle mit den regenerativen Bestandteilen des Eigenbluts und eignet sich besonders, wenn die Haut frischer, gleichmäßiger und erholter wirken soll.",
      ],
    },
    {
      sectionKey: "microneedling",
      slug: "microneedling-gesicht",
      title: "Microneedling Gesicht",
      href: "/aesthetik/microneedling/microneedling-gesicht",
      description: [
        "Medizinisches Microneedling im Gesicht unterstützt die Hauterneuerung und kann bei Poren, feinen Linien, fahlem Hautbild oder ausgewählten Narben sinnvoll sein.",
        "Ziel ist ein feineres, glatteres Hautbild mit mehr Frische, ohne die natürliche Mimik oder Gesichtszüge zu verändern.",
      ],
    },
    {
      sectionKey: "microneedling",
      slug: "microneedling-gesicht-hals",
      title: "Microneedling Gesicht + Hals",
      href: "/aesthetik/microneedling/microneedling-gesicht-hals",
      description: [
        "Diese Behandlung umfasst Gesicht und Hals, wenn Hautstruktur, Elastizität und Hautqualität in beiden Bereichen gemeinsam verbessert werden sollen.",
        "Das ist sinnvoll, wenn nicht nur das Gesicht, sondern auch der Hals Zeichen von Trockenheit, feinen Linien oder nachlassender Spannkraft zeigt.",
      ],
    },
    {
      sectionKey: "microneedling",
      slug: "microneedling-gesicht-hals-dekollete",
      title: "Microneedling Gesicht + Hals + Dekolleté",
      href: "/aesthetik/microneedling/microneedling-gesicht-hals-dekollete",
      description: [
        "Diese größere Microneedling-Behandlung umfasst Gesicht, Hals und Dekolleté für ein einheitlicheres Hautbild in den häufig sichtbaren Hautarealen.",
        "So können die drei sichtbaren Hautzonen gemeinsam behandelt werden, damit Hautstruktur, Frische und Übergänge harmonischer zusammenpassen.",
      ],
    },
    {
      sectionKey: "microneedling",
      slug: "microneedling-face-nctf",
      title: "Microneedling FACE + NCTF",
      href: "/aesthetik/microneedling/microneedling-face-nctf",
      description: [
        "Bei Microneedling FACE + NCTF wird das Gesicht behandelt und zusätzlich ein regenerativer NCTF®-Wirkstoffkomplex in die Haut eingebracht.",
        "Diese Kombination passt besonders zu feuchtigkeitsarmer, müder oder gestresster Haut, wenn neben Struktur auch Glow und Hautqualität unterstützt werden sollen.",
      ],
    },
    {
      sectionKey: "microneedling",
      slug: "microneedling-gesicht-exosome",
      title: "Microneedling Gesicht Exosome",
      href: "/aesthetik/microneedling/microneedling-gesicht-exosome",
      description: [
        "Bei dieser Behandlung wird medizinisches Microneedling im Gesicht mit Exosomen kombiniert, um die Regeneration und Hautqualität zusätzlich zu unterstützen.",
        "Der Fokus liegt auf intensiver Regeneration: Die Exosomen ergänzen das Microneedling, wenn die Haut mehr Unterstützung bei Erholung, Elastizität und ebenmäßigerer Struktur braucht.",
      ],
    },
  ],
  hair: [
    {
      sectionKey: "hair",
      slug: "microneedling-haare",
      title: "Microneedling Haare",
      href: "/leistungen/haarausfall-berlin-mitte/microneedling-haare",
      description: [
        "Medizinisches Microneedling der Kopfhaut erzeugt kontrollierte Mikrokanäle, um regenerative Prozesse der Kopfhaut zu unterstützen.",
        "Die Behandlung kann sinnvoll sein, wenn die Kopfhaut gestärkt, die Haarqualität unterstützt oder regenerative Wirkstoffkomplexe gezielt eingebracht werden sollen.",
      ],
    },
    {
      sectionKey: "hair",
      slug: "prp-haare",
      title: "PRP Haare",
      href: "/leistungen/haarausfall-berlin-mitte/prp-haare",
      description: [
        "Bei PRP Haare wird körpereigenes plättchenreiches Plasma gezielt in die Kopfhaut eingebracht.",
        "Die enthaltenen Wachstumsfaktoren können regenerative Prozesse der Haarfollikel unterstützen und die Kopfhaut stimulieren.",
      ],
    },
    {
      sectionKey: "hair",
      slug: "polynukleotide-haare",
      title: "Polynukleotide Haare",
      href: "/leistungen/haarausfall-berlin-mitte/polynukleotide-haare",
      description: [
        "Polynukleotide (PhilArt Hair®) werden zur Unterstützung regenerativer Prozesse der Kopfhaut eingesetzt.",
        "Die Behandlung kann sinnvoll sein, wenn Kopfhautqualität, Haarfollikel und Regeneration gezielt unterstützt werden sollen.",
      ],
    },
  ],
  skinbooster: [
    {
      sectionKey: "skinbooster",
      slug: "nctf-ha-gesicht",
      title: "NCTF HA Gesicht",
      href: "/aesthetik/polynukleotide/nctf-ha-gesicht",
      description: [
        "NCTF HA Gesicht ist eine regenerative Skinbooster-Behandlung für Hautfeuchtigkeit, Hautfrische und feinere Hautqualität im Gesicht.",
        "Die Behandlung kann sinnvoll sein, wenn fahle, müde oder feuchtigkeitsarme Haut gezielt unterstützt werden soll.",
      ],
    },
    {
      sectionKey: "skinbooster",
      slug: "nctf-ha-gesicht-hals",
      title: "NCTF HA Gesicht + Hals",
      href: "/aesthetik/polynukleotide/nctf-ha-gesicht-hals",
      description: [
        "NCTF HA Gesicht + Hals erweitert die Skinbooster-Behandlung auf zwei sichtbare Areale mit häufig gemeinsamem Behandlungsziel.",
        "Der Fokus liegt auf Hautfeuchtigkeit, Hautvitalität und einer gleichmäßigeren Hautqualität in Gesicht und Hals.",
      ],
    },
    {
      sectionKey: "skinbooster",
      slug: "nctf-ha-gesicht-hals-dekollete",
      title: "NCTF HA Gesicht + Hals + Dekolleté",
      href: "/aesthetik/polynukleotide/nctf-ha-gesicht-hals-dekollete",
      description: [
        "Diese NCTF HA Behandlung umfasst Gesicht, Hals und Dekolleté, wenn Hautqualität und Feuchtigkeit in den sichtbaren Arealen gemeinsam unterstützt werden sollen.",
        "Die Planung erfolgt nach Hautbefund, Areal und realistischem Behandlungsziel.",
      ],
    },
    {
      sectionKey: "skinbooster",
      slug: "philart-gesicht",
      title: "PhilArt Gesicht",
      href: "/aesthetik/polynukleotide/philart-gesicht",
      description: [
        "PhilArt Gesicht wird als regenerative Polynukleotid-Behandlung eingesetzt, wenn Hautqualität, Elastizität und natürliche Regeneration im Vordergrund stehen.",
        "Im Fokus steht nicht Volumenaufbau, sondern die Unterstützung biologischer Reparatur- und Regenerationsprozesse der Haut.",
      ],
    },
    {
      sectionKey: "skinbooster",
      slug: "philart-auge",
      title: "PhilArt Auge",
      href: "/aesthetik/polynukleotide/philart-auge",
      description: [
        "PhilArt Auge ist auf die empfindliche Augenregion ausgerichtet, etwa bei dünner Haut, feinen Linien oder dunklen Schatten.",
        "Ziel ist eine natürlich frischere und ruhigere Hautqualität ohne künstliche Veränderung der Augenregion.",
      ],
    },
    {
      sectionKey: "skinbooster",
      slug: "profhilo",
      title: "Profhilo",
      href: "/aesthetik/polynukleotide/profhilo",
      description: [
        "Profhilo ist ein Skinbooster zur Unterstützung von Hautqualität, Feuchtigkeit, Elastizität und Spannkraft.",
        "Die Behandlung wird nach Hautbefund geplant, wenn Bioremodellierung und Hautspannung stärker im Fokus stehen.",
      ],
    },
  ],
};

const englishDetailPages: Partial<Record<AestheticSectionKey, AestheticDetailPage[]>> = {
  prp: [
    {
      sectionKey: "prp",
      slug: "prp-face",
      deSlug: "prp-gesicht",
      title: "PRP Face",
      href: "/en/aesthetics/prp-treatment/prp-face",
      alternate: "/aesthetik/prp-behandlung/prp-gesicht",
      description: [
        "PRP for the face uses platelet-rich plasma from your own blood to support skin regeneration and skin quality.",
        "The treatment may be suitable when the goal is fresher, smoother-looking skin without changing facial expression or volume.",
      ],
      content: [
        { type: "h3", text: "When this may be suitable" },
        { type: "p", text: "PRP face treatment can be discussed for tired-looking skin, fine lines, uneven texture or a wish to support natural regeneration." },
        { type: "list", items: ["medical consultation before treatment", "autologous blood preparation in the practice", "individual planning by skin findings and goals"] },
        { type: "h3", text: "Treatment approach" },
        { type: "p", text: "A small blood sample is processed to concentrate platelet-rich plasma. The PRP is then applied by injection or combined with suitable regenerative techniques depending on the indication." },
      ],
    },
    {
      sectionKey: "prp",
      slug: "prp-under-eye-area-dark-circles",
      deSlug: "prp-augenregion-bei-dunklen-augenringen",
      title: "PRP Under-Eye Area for Dark Circles",
      href: "/en/aesthetics/prp-treatment/prp-under-eye-area-dark-circles",
      alternate: "/aesthetik/prp-behandlung/prp-augenregion-bei-dunklen-augenringen",
      description: [
        "PRP for the under-eye area is a regenerative option for selected patients with tired-looking skin, thin skin or dark under-eye shadows.",
        "The area is delicate, so suitability, limits and realistic expectations are assessed carefully before treatment.",
      ],
      content: [
        { type: "h3", text: "Focus of the treatment" },
        { type: "p", text: "The goal is to support skin quality and regeneration in the under-eye region. PRP is not a filler and does not replace volume correction when volume loss is the main cause." },
        { type: "h3", text: "Medical assessment" },
        { type: "p", text: "We assess skin thickness, vascular shadows, pigmentation, anatomy and possible contraindications before recommending treatment." },
      ],
    },
    {
      sectionKey: "prp",
      slug: "prp-face-neck-decollete",
      deSlug: "prp-gesicht-hals-und-dekollete",
      title: "PRP Face, Neck and Decollete",
      href: "/en/aesthetics/prp-treatment/prp-face-neck-decollete",
      alternate: "/aesthetik/prp-behandlung/prp-gesicht-hals-und-dekollete",
      description: [
        "This PRP treatment extends the regenerative concept from the face to the neck and decollete.",
        "It can be useful when visible skin areas should be treated together for a more coherent skin-quality plan.",
      ],
      content: [
        { type: "h3", text: "Treatment areas" },
        { type: "p", text: "Face, neck and decollete often show texture, dryness or fine lines together. Treating them as one plan can make the result appear more balanced." },
        { type: "h3", text: "Planning" },
        { type: "p", text: "The exact areas, session count and combination options are chosen after assessing skin quality, healing capacity and treatment goals." },
      ],
    },
    {
      sectionKey: "prp",
      slug: "vampire-lifting-prp-microneedling",
      deSlug: "vampire-lifting-prp-kombiniert-mit-medizinischem-microneedling",
      title: "Vampire Lifting / PRP Combined with Medical Microneedling",
      href: "/en/aesthetics/prp-treatment/vampire-lifting-prp-microneedling",
      alternate: "/aesthetik/prp-behandlung/vampire-lifting-prp-kombiniert-mit-medizinischem-microneedling",
      description: [
        "Vampire lifting combines PRP with medical microneedling to support skin texture and regeneration in one appointment.",
        "The combination may be considered for dull skin, uneven texture, fine lines or selected scar patterns.",
      ],
      content: [
        { type: "h3", text: "How the combination works" },
        { type: "p", text: "Microneedling creates controlled microchannels in the skin while PRP provides autologous regenerative components from your own blood." },
        { type: "list", items: ["medical microneedling with regenerative PRP", "often planned as a treatment series", "aftercare and downtime are discussed before treatment"] },
      ],
    },
  ],
  microneedling: [
    {
      sectionKey: "microneedling",
      slug: "vampire-lift-medical-microneedling-face",
      deSlug: "vampirelift-medizinisches-microneedling-gesicht",
      title: "Vampire Lift + Medical Microneedling Face",
      href: "/en/aesthetics/microneedling/vampire-lift-medical-microneedling-face",
      alternate: "/aesthetik/microneedling/vampirelift-medizinisches-microneedling-gesicht",
      description: ["Medical facial microneedling can be combined with PRP when stronger regenerative support is desired."],
      content: [
        { type: "h3", text: "When this may be suitable" },
        { type: "p", text: "This option may fit dull skin, fine lines, uneven texture or selected acne-scar patterns when PRP is medically suitable." },
        { type: "h3", text: "Treatment concept" },
        { type: "p", text: "The microneedling component supports controlled skin renewal, while PRP adds autologous regenerative components prepared from your own blood." },
      ],
    },
    {
      sectionKey: "microneedling",
      slug: "microneedling-face",
      deSlug: "microneedling-gesicht",
      title: "Microneedling Face",
      href: "/en/aesthetics/microneedling/microneedling-face",
      alternate: "/aesthetik/microneedling/microneedling-gesicht",
      description: ["Medical facial microneedling supports skin renewal and can be discussed for pores, fine lines, dull skin or selected scars."],
      content: [
        { type: "h3", text: "Focus" },
        { type: "p", text: "The goal is smoother, fresher-looking skin quality while preserving natural facial expression and features." },
      ],
    },
    {
      sectionKey: "microneedling",
      slug: "microneedling-face-neck",
      deSlug: "microneedling-gesicht-hals",
      title: "Microneedling Face + Neck",
      href: "/en/aesthetics/microneedling/microneedling-face-neck",
      alternate: "/aesthetik/microneedling/microneedling-gesicht-hals",
      description: ["This treatment includes face and neck when skin texture, elasticity and skin quality should be addressed together."],
      content: [
        { type: "h3", text: "Treatment areas" },
        { type: "p", text: "Face and neck are planned together when both areas show dryness, fine lines or reduced firmness." },
      ],
    },
    {
      sectionKey: "microneedling",
      slug: "microneedling-face-neck-decollete",
      deSlug: "microneedling-gesicht-hals-dekollete",
      title: "Microneedling Face + Neck + Decollete",
      href: "/en/aesthetics/microneedling/microneedling-face-neck-decollete",
      alternate: "/aesthetik/microneedling/microneedling-gesicht-hals-dekollete",
      description: ["A larger microneedling treatment for visible skin areas across face, neck and decollete."],
      content: [
        { type: "h3", text: "Treatment concept" },
        { type: "p", text: "The three areas are treated as one coherent skin-quality plan, especially when texture and freshness should align across visible zones." },
      ],
    },
    {
      sectionKey: "microneedling",
      slug: "microneedling-face-nctf",
      deSlug: "microneedling-face-nctf",
      title: "Microneedling FACE + NCTF",
      href: "/en/aesthetics/microneedling/microneedling-face-nctf",
      alternate: "/aesthetik/microneedling/microneedling-face-nctf",
      description: ["Medical microneedling can be combined with NCTF® when hydration, glow and skin quality are part of the treatment goal."],
      content: [
        { type: "h3", text: "About NCTF" },
        { type: "p", text: "NCTF® combines hyaluronic acid with vitamins, amino acids, coenzymes and antioxidants. Suitability is decided after assessing the skin and treatment goal." },
      ],
    },
    {
      sectionKey: "microneedling",
      slug: "microneedling-face-exosomes",
      deSlug: "microneedling-gesicht-exosome",
      title: "Microneedling Face Exosomes",
      href: "/en/aesthetics/microneedling/microneedling-face-exosomes",
      alternate: "/aesthetik/microneedling/microneedling-gesicht-exosome",
      description: ["Medical facial microneedling may be combined with exosomes to support regeneration and skin quality."],
      content: [
        { type: "h3", text: "Regenerative support" },
        { type: "p", text: "Exosome combinations are considered when the skin needs additional support for recovery, elasticity and a more even texture." },
      ],
    },
  ],
  hair: [
    {
      sectionKey: "hair",
      slug: "scalp-microneedling",
      deSlug: "microneedling-haare",
      title: "Scalp Microneedling",
      href: "/en/services/hair-loss-berlin-mitte/scalp-microneedling",
      alternate: "/leistungen/haarausfall-berlin-mitte/microneedling-haare",
      description: ["Medical scalp microneedling creates controlled microchannels to support regenerative scalp processes."],
      content: [
        { type: "h3", text: "When this may be suitable" },
        { type: "p", text: "Scalp microneedling may be discussed when scalp quality, hair quality or targeted regenerative ingredient delivery should be supported." },
      ],
    },
    {
      sectionKey: "hair",
      slug: "prp-hair",
      deSlug: "prp-haare",
      title: "PRP Hair / Scalp",
      href: "/en/services/hair-loss-berlin-mitte/prp-hair",
      alternate: "/leistungen/haarausfall-berlin-mitte/prp-haare",
      description: ["PRP hair treatment uses platelet-rich plasma from your own blood and applies it to the scalp after medical assessment."],
      content: [
        { type: "h3", text: "Treatment concept" },
        { type: "p", text: "Growth-factor-rich plasma can support regenerative processes around the hair follicles and scalp. The indication depends on diagnosis and findings." },
      ],
    },
    {
      sectionKey: "hair",
      slug: "hair-polynucleotides",
      deSlug: "polynukleotide-haare",
      title: "Hair Polynucleotides",
      href: "/en/services/hair-loss-berlin-mitte/hair-polynucleotides",
      alternate: "/leistungen/haarausfall-berlin-mitte/polynukleotide-haare",
      description: ["Polynucleotides such as PhilArt Hair® may be used to support regenerative scalp processes."],
      content: [
        { type: "h3", text: "Medical positioning" },
        { type: "p", text: "The treatment can be considered when scalp quality, follicles and regeneration should be supported as part of a broader hair-loss concept." },
      ],
    },
  ],
  skinbooster: [
    {
      sectionKey: "skinbooster",
      slug: "nctf-ha-face",
      deSlug: "nctf-ha-gesicht",
      title: "NCTF HA Face",
      href: "/en/aesthetics/polynucleotides/nctf-ha-face",
      alternate: "/aesthetik/polynukleotide/nctf-ha-gesicht",
      description: ["NCTF HA face is a regenerative skin-booster treatment for hydration, freshness and refined skin quality."],
      content: [{ type: "p", text: "This option focuses on the face when dehydrated, dull or tired-looking skin should be supported." }],
    },
    {
      sectionKey: "skinbooster",
      slug: "nctf-ha-face-neck",
      deSlug: "nctf-ha-gesicht-hals",
      title: "NCTF HA Face + Neck",
      href: "/en/aesthetics/polynucleotides/nctf-ha-face-neck",
      alternate: "/aesthetik/polynukleotide/nctf-ha-gesicht-hals",
      description: ["NCTF HA face + neck extends the skin-booster concept to two visible treatment areas."],
      content: [{ type: "p", text: "The focus is hydration, vitality and more even skin quality across face and neck." }],
    },
    {
      sectionKey: "skinbooster",
      slug: "nctf-ha-face-neck-decollete",
      deSlug: "nctf-ha-gesicht-hals-dekollete",
      title: "NCTF HA Face + Neck + Decollete",
      href: "/en/aesthetics/polynucleotides/nctf-ha-face-neck-decollete",
      alternate: "/aesthetik/polynukleotide/nctf-ha-gesicht-hals-dekollete",
      description: ["This NCTF HA treatment covers face, neck and decollete for a connected skin-quality plan."],
      content: [{ type: "p", text: "Planning depends on skin findings, treatment area and a realistic regenerative goal." }],
    },
    {
      sectionKey: "skinbooster",
      slug: "philart-face",
      deSlug: "philart-gesicht",
      title: "PhilArt Face",
      href: "/en/aesthetics/polynucleotides/philart-face",
      alternate: "/aesthetik/polynukleotide/philart-gesicht",
      description: ["PhilArt face is a regenerative polynucleotide treatment focused on skin quality, elasticity and natural regeneration."],
      content: [{ type: "p", text: "The goal is not volume replacement, but support for biological repair and regenerative processes in the skin." }],
    },
    {
      sectionKey: "skinbooster",
      slug: "philart-eye",
      deSlug: "philart-auge",
      title: "PhilArt Eye",
      href: "/en/aesthetics/polynucleotides/philart-eye",
      alternate: "/aesthetik/polynukleotide/philart-auge",
      description: ["PhilArt eye is planned for the delicate eye area, for example with thin skin, fine lines or dark shadows."],
      content: [{ type: "p", text: "The aim is naturally fresher-looking skin quality without an artificial change to the eye area." }],
    },
    {
      sectionKey: "skinbooster",
      slug: "profhilo",
      deSlug: "profhilo",
      title: "Profhilo",
      href: "/en/aesthetics/polynucleotides/profhilo",
      alternate: "/aesthetik/polynukleotide/profhilo",
      description: ["Profhilo is a skin-booster treatment for skin quality, hydration, elasticity and firmness."],
      content: [{ type: "p", text: "The treatment is planned after skin assessment when bioremodelling and skin firmness are key goals." }],
    },
  ],
};

const heroImages: Record<AestheticSectionKey, { src: string; alt: string; objectPositionClass?: string }> = {
  hub: {
    src: "/images/clinic/clinic-philo-2025.jpg",
    alt: "Behandlungsstuhl für ästhetische Medizin in der Praxis Jona in Berlin-Mitte",
    objectPositionClass: "object-[28%_68%]",
  },
  botulinumtoxin: {
    src: "/images/clinic/clinic-newA.jpg",
    alt: "Behandlungsraum der Praxis Jona in Berlin-Mitte",
    objectPositionClass: "object-[22%_50%]",
  },
  prp: {
    src: "/images/clinic/clinic-newA.jpg",
    alt: "Behandlungsraum der Praxis Jona für regenerative Ästhetik und PRP in Berlin-Mitte",
    objectPositionClass: "object-[22%_50%]",
  },
  microneedling: {
    src: "/images/clinic/clinic-newA-new2.jpg",
    alt: "Praxis Jona Behandlungsraum für medizinisches Microneedling in Berlin-Mitte",
    objectPositionClass: "object-[35%_50%]",
  },
  hair: {
    src: "/images/clinic/clinic-hero-2025.jpg",
    alt: "Praxis Jona in Berlin-Mitte für Haartherapie bei Haarausfall",
    objectPositionClass: "object-[30%_50%]",
  },
  skinbooster: {
    src: "/images/clinic/clinic-philo-2025.jpg",
    alt: "Behandlungsstuhl der Praxis Jona für Skinbooster und regenerative Hauttherapien in Berlin-Mitte",
    objectPositionClass: "object-[28%_68%]",
  },
};

const subpages = [
  { title: "Botulinumtoxin-Behandlungen", href: "/botox-behandlung", eyebrow: "Mimik & Linien" },
  { title: "PRP / Eigenbluttherapie", href: "/aesthetik/prp-behandlung", eyebrow: "Regeneration" },
  { title: "Medizinisches Microneedling", href: "/aesthetik/microneedling", eyebrow: "Struktur" },
  { title: "Haartherapie bei Haarausfall", href: "/leistungen/haarausfall-berlin-mitte", eyebrow: "Haar & Kopfhaut" },
  { title: "Skinbooster & regenerative Hauttherapien", href: "/aesthetik/polynukleotide", eyebrow: "Skin Quality" },
];

const sectionFacts: Record<Exclude<AestheticSectionKey, "hub" | "botulinumtoxin">, { title: string; value: string; icon: typeof ClockIcon }[]> = {
  prp: [
    { title: "Dauer", value: "45 bis 60 Minuten", icon: ClockIcon },
    { title: "Serie", value: "3–4 Behandlungen", icon: CalendarDaysIcon },
    { title: "Fokus", value: "Hautqualität", icon: SparklesIcon },
  ],
  microneedling: [
    { title: "Dauer", value: "45 bis 60 Minuten", icon: ClockIcon },
    { title: "Sitzungen", value: "3–5 Sitzungen", icon: CalendarDaysIcon },
    { title: "Technologie", value: "Dermapen®", icon: SparklesIcon },
  ],
  hair: [
    { title: "Dauer", value: "45 bis 60 Minuten", icon: ClockIcon },
    { title: "Sitzungen", value: "3–4 Sitzungen", icon: CalendarDaysIcon },
    { title: "Preis", value: "ab 249 €", icon: SparklesIcon },
  ],
  skinbooster: [
    { title: "Dauer", value: "30 bis 45 Minuten", icon: ClockIcon },
    { title: "Sitzungen", value: "3–4 Sitzungen", icon: CalendarDaysIcon },
    { title: "Fokus", value: "Hautqualität", icon: SparklesIcon },
  ],
};

const prpCommonSectionTitles = [
  "Wie läuft die Behandlung ab?",
  "Wie oft sind PRP- oder Vampire-Lifting-Behandlungen sinnvoll?",
  "Was sollte ich nach der Behandlung beachten?",
  "Wann sind Ergebnisse sichtbar?",
  "Individuelle regenerative Behandlungskonzepte",
];

const microneedlingCommonSectionTitles = [
  "Wie läuft die Behandlung ab?",
  "Wie viele Sitzungen sind sinnvoll?",
  "Optionale regenerative Wirkstoffkombinationen",
  "Wann können zusätzliche regenerative Wirkstoffe sinnvoll sein?",
  "Was sollte ich nach der Behandlung beachten?",
  "Wann sind Ergebnisse sichtbar?",
];

const skinboosterCommonSectionTitles = [
  "Wie laufen Skinbooster-Behandlungen ab?",
  "Wie viele Sitzungen sind bei Skinboostern sinnvoll?",
  "Kombination mit anderen regenerativen Behandlungen",
];

const eyebrowClassName = "text-sm font-semibold uppercase tracking-[0.22em] text-primary/70";

function hasText(node: MarkdownNode): node is Extract<MarkdownNode, { text?: string }> & { text: string } {
  return "text" in node && typeof node.text === "string";
}

function stripBold(text: string) {
  return text.replace(/^\*\*(.*)\*\*$/, "$1");
}

function sectionId(text: string | undefined) {
  if (!text) {
    return undefined;
  }

  return text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "und")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getAestheticDetailPages(sectionKey: AestheticSectionKey, locale: PricingLocale = "de") {
  return (locale === "en" ? englishDetailPages : detailPages)[sectionKey] ?? [];
}

export function getAestheticDetailPage(sectionKey: AestheticSectionKey, slug: string, locale: PricingLocale = "de") {
  return getAestheticDetailPages(sectionKey, locale).find((page) => page.slug === slug);
}

export function englishAestheticSlugForGerman(sectionKey: AestheticSectionKey, slug: string) {
  return getAestheticDetailPages(sectionKey, "en").find((page) => page.deSlug === slug)?.slug;
}

export function germanAestheticSlugForEnglish(sectionKey: AestheticSectionKey, slug: string) {
  return getAestheticDetailPage(sectionKey, slug, "en")?.deSlug;
}

function parseMarkdown(markdown: string): MarkdownNode[] {
  const nodes: MarkdownNode[] = [];
  const lines = markdown.split("\n");
  let listItems: string[] = [];
  let inCodeBlock = false;

  const flushList = () => {
    if (listItems.length > 0) {
      nodes.push({ type: "list", items: listItems });
      listItems = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (line.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (!line) {
      flushList();
      continue;
    }

    if (inCodeBlock) {
      nodes.push({ type: "p", text: line });
      continue;
    }

    if (line === "⸻") {
      flushList();
      nodes.push({ type: "rule" });
      continue;
    }

    if (line.startsWith("# ")) {
      flushList();
      nodes.push({ type: "h1", text: line.replace(/^# /, "") });
      continue;
    }

    if (line.startsWith("## ")) {
      flushList();
      nodes.push({ type: "h2", text: line.replace(/^## /, "") });
      continue;
    }

    if (line.startsWith("### ")) {
      flushList();
      nodes.push({ type: "h2", text: line.replace(/^### /, "") });
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("* ") || line.startsWith("✔ ")) {
      listItems.push(line.replace(/^[-*]\s+/, "").replace(/^✔\s+/, ""));
      continue;
    }

    flushList();
    nodes.push({ type: /^\*\*.*\*\*$/.test(line) ? "h3" : "p", text: stripBold(line) });
  }

  flushList();
  return nodes;
}

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

const priceAnchorBySection: Partial<Record<AestheticSectionKey, string>> = {
  botulinumtoxin: "botox",
  prp: "prp",
  microneedling: "microneedling",
  hair: "haarausfall",
  skinbooster: "skinbooster",
};

function CtaButtons({ sectionKey, bookingUrls, locale = "de" }: { sectionKey: AestheticSectionKey; bookingUrls?: AppointmentBookingUrls; locale?: PricingLocale }) {
  const priceAnchor = priceAnchorBySection[sectionKey];
  const priceBaseHref = locale === "en" ? "/en/aesthetics/prices" : "/aesthetik/preise";
  const priceHref = priceAnchor ? `${priceBaseHref}#${priceAnchor}` : priceBaseHref;
  const bookingUrlsBySection: Partial<Record<AestheticSectionKey, typeof Constants.appointmentUrls>> = {
    botulinumtoxin: Constants.appointmentUrlsByService.botulinumtoxin,
    prp: Constants.appointmentUrlsByService.prp,
    microneedling: Constants.appointmentUrlsByService.microneedling,
    hair: Constants.appointmentUrlsByService.hairTherapy,
    skinbooster: Constants.appointmentUrlsByService.skinbooster,
  };

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <AppointmentBookingButton
        locale={locale}
        urls={bookingUrls ?? bookingUrlsBySection[sectionKey]}
        className="inline-flex justify-center rounded-xl bg-primary px-6 py-3 text-base font-serif font-medium text-white shadow-sm transition hover:bg-primaryDarker"
      >
        {locale === "en" ? "Book appointment" : "Termin buchen"}
      </AppointmentBookingButton>
      <Link
        href={priceHref}
        className="inline-flex justify-center rounded-xl border border-primary/20 bg-white px-6 py-3 text-base font-serif font-medium text-primary transition hover:border-primary/40 hover:bg-stone-50"
      >
        {locale === "en" ? "View prices" : "Preise ansehen"}
      </Link>
    </div>
  );
}

function HeroImage({ sectionKey, className = "" }: { sectionKey: AestheticSectionKey; className?: string }) {
  const image = heroImages[sectionKey];

  return (
    <div className={`relative overflow-hidden rounded-xl bg-lightBeige shadow-xl ring-1 ring-primary/10 ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={900}
        height={720}
        priority
        sizes="(min-width: 1024px) 36vw, 92vw"
        className={`h-72 w-full object-cover sm:h-96 lg:h-[30rem] ${image.objectPositionClass ?? "object-center"}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-white/20" />
    </div>
  );
}

function FactStrip({ sectionKey }: { sectionKey: AestheticSectionKey }) {
  if (sectionKey === "hub" || sectionKey === "botulinumtoxin") {
    return null;
  }

  return (
    <MotionSection className="relative z-20 -mt-[50px] px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-primary shadow-2xl shadow-primary/20 ring-1 ring-white/10">
          <div className="grid grid-cols-1 divide-y divide-white/15 md:grid-cols-3 md:divide-x md:divide-y-0">
            {sectionFacts[sectionKey].map((fact) => {
              const Icon = fact.icon;

              return (
                <div key={fact.title} className="flex min-h-[112px] items-start gap-4 p-5 sm:p-6 lg:min-h-[132px] lg:p-7">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 sm:h-[52px] sm:w-[52px]">
                    <Icon className="h-6 w-6 stroke-[2.2] text-white sm:h-7 sm:w-7" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-sans text-base font-semibold leading-tight text-white sm:text-lg">{fact.title}</h2>
                    <p className="mt-2 text-base leading-7 text-white/75 sm:text-lg">{fact.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function RenderNodes({ nodes, skipFirstHeading = false }: { nodes: MarkdownNode[]; skipFirstHeading?: boolean }) {
  let firstHeadingSkipped = false;

  return (
    <div className="space-y-7">
      {nodes.map((node, index) => {
        if (skipFirstHeading && node.type === "h1" && !firstHeadingSkipped) {
          firstHeadingSkipped = true;
          return null;
        }

        if (node.type === "h1") {
          return <h2 key={index} className="font-serif text-3xl font-semibold tracking-tight text-primary sm:text-4xl">{node.text}</h2>;
        }

        if (node.type === "h2") {
          return <h2 key={index} className="pt-8 font-serif text-3xl font-semibold text-primary">{node.text}</h2>;
        }

        if (node.type === "h3") {
          return <h3 key={index} className="pt-3 font-serif text-2xl font-semibold text-primary">{node.text}</h3>;
        }

        if (node.type === "p") {
          return <p key={index} className="text-lg leading-8 text-primaryLighter">{node.text}</p>;
        }

        if (node.type === "list") {
          return (
            <ul key={index} className="space-y-3 text-lg leading-8 text-primaryLighter">
              {node.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        return <div key={index} className="h-px bg-primary/10" />;
      })}
    </div>
  );
}

function renderCompactNodes(nodes: MarkdownNode[]) {
  return nodes.map((node, index) => {
    if (node.type === "p") {
      return <p key={index} className="leading-7 text-primaryLighter">{node.text}</p>;
    }

    if (node.type === "list") {
      return (
        <ul key={index} className="space-y-2 text-primaryLighter">
          {node.items.map((item) => (
            <li key={item} className="flex gap-3 leading-7">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (node.type === "rule") {
      return <div key={index} className="h-px bg-primary/10" />;
    }

    if (node.type === "h3") {
      return <h3 key={index} className="pt-2 font-serif text-xl font-semibold text-primary">{node.text}</h3>;
    }

    if (node.type === "h2") {
      return <h2 key={index} className="pt-2 font-serif text-2xl font-semibold text-primary">{node.text}</h2>;
    }

    return null;
  });
}

function ParagraphNodes({ nodes }: { nodes: MarkdownNode[] }) {
  return <div className="space-y-5 text-lg leading-8 text-primaryLighter">{renderCompactNodes(nodes)}</div>;
}

function takeUntilHeading(nodes: MarkdownNode[], start: number) {
  const children: MarkdownNode[] = [];
  let cursor = start;

  while (cursor < nodes.length && nodes[cursor].type !== "h2" && nodes[cursor].type !== "h3") {
    if (nodes[cursor].type !== "rule") {
      children.push(nodes[cursor]);
    }
    cursor += 1;
  }

  return { children, cursor };
}

function takeUntilRule(nodes: MarkdownNode[], start: number) {
  const children: MarkdownNode[] = [];
  let cursor = start;

  while (cursor < nodes.length && nodes[cursor].type !== "rule") {
    children.push(nodes[cursor]);
    cursor += 1;
  }

  if (cursor < nodes.length && nodes[cursor].type === "rule") {
    cursor += 1;
  }

  return { children, cursor };
}

function takeUntilHeadingTitle(nodes: MarkdownNode[], start: number, stopTitles: string[]) {
  const children: MarkdownNode[] = [];
  let cursor = start;

  while (cursor < nodes.length) {
    const node = nodes[cursor];

    if ((node.type === "h2" || node.type === "h3") && node.text && stopTitles.includes(node.text)) {
      break;
    }

    children.push(node);
    cursor += 1;
  }

  return { children, cursor };
}

function getDetailHrefByTitle(sectionKey: AestheticSectionKey) {
  const hrefByTitle = Object.fromEntries(getAestheticDetailPages(sectionKey).map((page) => [page.title, page.href]));

  if (sectionKey === "hair") {
    return {
      ...hrefByTitle,
      "PRP bei Haarausfall / Eigenbluttherapie der Kopfhaut": "/leistungen/haarausfall-berlin-mitte/prp-haare",
      "Medizinisches Microneedling der Kopfhaut bei Haarausfall": "/leistungen/haarausfall-berlin-mitte/microneedling-haare",
      "Polynukleotide / PhilArt Hair®": "/leistungen/haarausfall-berlin-mitte/polynukleotide-haare",
    };
  }

  return hrefByTitle;
}

function getDetailPageByHref(sectionKey: AestheticSectionKey, href: string) {
  return getAestheticDetailPages(sectionKey).find((page) => page.href === href);
}

function takeHairDetailCardSection(nodes: MarkdownNode[], title: string, start: number) {
  const nextDetailTitlesByTitle: Record<string, string[]> = {
    "PRP bei Haarausfall / Eigenbluttherapie der Kopfhaut": ["Medizinisches Microneedling der Kopfhaut bei Haarausfall"],
    "Medizinisches Microneedling der Kopfhaut bei Haarausfall": ["Polynukleotide / PhilArt Hair®"],
    "Polynukleotide / PhilArt Hair®": ["Medizinische Diagnostik bei Haarausfall"],
  };
  const stopTitles = nextDetailTitlesByTitle[title];

  return stopTitles ? takeUntilHeadingTitle(nodes, start, stopTitles) : takeUntilRule(nodes, start);
}

function getDetailBookingUrls(sectionKey: AestheticSectionKey, detailPage: AestheticDetailPage) {
  const detailHrefBySection = {
    prp: "/aesthetik/prp-behandlung",
    microneedling: "/aesthetik/microneedling",
    hair: "/leistungen/haarausfall-berlin-mitte",
    skinbooster: "/aesthetik/polynukleotide",
  } satisfies Partial<Record<AestheticSectionKey, string>>;
  const detailHrefPrefix = detailHrefBySection[sectionKey];

  if (!detailHrefPrefix) {
    return undefined;
  }

  const sectionsByKey: Partial<Record<AestheticSectionKey, PricingSection>> = {
    prp: pricingSections.prp,
    microneedling: pricingSections.microneedling,
    hair: pricingSections.hairTherapy,
    skinbooster: pricingSections.skinbooster,
  };

  const detailHref = `${detailHrefPrefix}/${detailPage.deSlug ?? detailPage.slug}`;
  const rows = sectionsByKey[sectionKey]?.rows.filter((row) => row.detailHref?.de === detailHref) ?? [];
  const germanDetailPage = detailPage.deSlug ? getAestheticDetailPage(sectionKey, detailPage.deSlug, "de") : detailPage;
  const normalizedTitle = (germanDetailPage?.title ?? detailPage.title).replace(/,/g, "").replace(/&/g, "+");
  const matchingLabelRow = rows.find((row) => row.label.de.replace(/,/g, "").replace(/&/g, "+") === normalizedTitle);

  return (matchingLabelRow ?? rows[0])?.bookingUrls;
}

function extractTitledSection(nodes: MarkdownNode[], title: string) {
  const index = nodes.findIndex((node) => (node.type === "h2" || node.type === "h3") && node.text === title);

  if (index < 0) {
    return [];
  }

  return takeUntilHeading(nodes, index + 1).children;
}

function extractDetailNodes(nodes: MarkdownNode[], title: string) {
  const index = nodes.findIndex((node) => (node.type === "h2" || node.type === "h3") && node.text === title);

  if (index < 0) {
    return [];
  }

  return takeUntilRule(nodes, index + 1).children;
}

function extractSections(nodes: MarkdownNode[], titles: string[]) {
  return titles.flatMap((title) => {
    const section = extractTitledSection(nodes, title);

    return section.length > 0 ? [{ type: "h3", text: title } as MarkdownNode, ...section] : [];
  });
}

function pickListItems(nodes: MarkdownNode[], allowedItems: string[]) {
  return nodes.map((node) => {
    if (node.type !== "list") {
      return node;
    }

    return { ...node, items: node.items.filter((item) => allowedItems.includes(item)) };
  }).filter((node) => node.type !== "list" || node.items.length > 0);
}

const microneedlingNctfNodes: MarkdownNode[] = [
  { type: "h3", text: "Microneedling FACE + NCTF" },
  {
    type: "p",
    text: "Bei dieser Behandlung wird medizinisches Microneedling im Gesicht mit NCTF® 135 HA kombiniert. Die Mikrokanäle des Microneedlings ermöglichen das gezielte Einbringen des regenerativen Wirkstoffkomplexes in die Haut.",
  },
  {
    type: "list",
    items: ["feuchtigkeitsarme oder gestresste Haut", "fahler Teint", "feine Linien", "ungleichmäßiges Hautbild", "Wunsch nach intensiverer Hautqualität"],
  },
  {
    type: "p",
    text: "NCTF® 135 HA kombiniert Hyaluronsäure mit Vitaminen, Aminosäuren, Coenzymen und Antioxidantien. Ob die Kombination sinnvoll ist, wird nach Hautbild und Behandlungsziel individuell festgelegt.",
  },
];

const microneedlingVampireliftNodes: MarkdownNode[] = [
  { type: "h3", text: "Vampirelift + med. Microneedling Gesicht" },
  {
    type: "p",
    text: "Beim Vampirelift wird PRP / Eigenbluttherapie mit medizinischem Microneedling im Gesicht kombiniert. Das PRP wird dabei während der Behandlung gleichmäßig in die Haut eingearbeitet.",
  },
  {
    type: "p",
    text: "Die Kombination kann sinnvoll sein, wenn neben Hautstruktur und Kollagenaufbau auch regenerative Eigenblutbestandteile gezielt genutzt werden sollen.",
  },
  {
    type: "list",
    items: ["müder oder fahler Haut", "feinen Linien", "unruhigem Hautbild", "Aknenarben oder anderen Narben", "Wunsch nach intensiver Regeneration"],
  },
];

function getMicroneedlingIntroNodes(nodes: MarkdownNode[]) {
  const firstSectionIndex = nodes.findIndex((item) => item.type === "h3" && item.text === "Was ist medizinisches Microneedling?");

  return nodes.filter((node, index) => {
    if (index === 0 || node.type === "h1") {
      return false;
    }

    return firstSectionIndex < 0 ? true : index < firstSectionIndex;
  });
}

function getMicroneedlingDetailNodes(nodes: MarkdownNode[], slug: string) {
  const basicSections = extractSections(nodes, [
    "Was ist medizinisches Microneedling?",
    "Für welche Hautprobleme kann Microneedling sinnvoll sein?",
  ]);

  if (slug === "vampirelift-medizinisches-microneedling-gesicht") {
    return [
      ...microneedlingVampireliftNodes,
      ...basicSections,
      ...extractSections(nodes, ["Wie läuft die Behandlung ab?", "Wie viele Sitzungen sind sinnvoll?", "Was sollte ich nach der Behandlung beachten?"]),
    ];
  }

  if (slug === "microneedling-face-nctf") {
    return [
      ...microneedlingNctfNodes,
      ...basicSections,
      ...extractSections(nodes, [
        "Optionale regenerative Wirkstoffkombinationen",
        "Wann können zusätzliche regenerative Wirkstoffe sinnvoll sein?",
        "Was sollte ich nach der Behandlung beachten?",
      ]),
    ];
  }

  if (slug === "microneedling-gesicht-exosome") {
    return [
      ...extractSections(nodes, [
        "Was sind Exosome?",
        "Welche Exosome verwenden wir?",
        "Wann können Exosome sinnvoll sein?",
        "Können Exosome mit anderen Behandlungen kombiniert werden?",
      ]),
    ];
  }

  const regionItemsBySlug: Record<string, string[]> = {
    "microneedling-gesicht": ["Gesicht"],
    "microneedling-gesicht-hals": ["Gesicht", "Hals"],
    "microneedling-gesicht-hals-dekollete": ["Gesicht", "Hals", "Dekolleté"],
  };
  const regionNodes = pickListItems(
    extractSections(nodes, ["Welche Regionen können behandelt werden?"]),
    regionItemsBySlug[slug] ?? [],
  );

  return [...basicSections, ...regionNodes];
}

function getHairDetailNodes(nodes: MarkdownNode[], slug: string) {
  if (slug === "prp-haare") {
    return [
      { type: "h3", text: "PRP bei Haarausfall / Eigenbluttherapie der Kopfhaut" } as MarkdownNode,
      ...extractDetailNodes(nodes, "PRP bei Haarausfall / Eigenbluttherapie der Kopfhaut"),
      ...extractSections(nodes, [
        "Wie läuft die PRP-Haartherapie ab?",
        "Wie viele PRP-Behandlungen sind sinnvoll?",
        "PRP nach Haartransplantationen",
        "Medizinische Diagnostik bei Haarausfall",
        "Mikronährstofftherapie & Infusionstherapie",
      ]),
    ];
  }

  if (slug === "polynukleotide-haare") {
    return [
      { type: "h3", text: "Polynukleotide / PhilArt Hair®" } as MarkdownNode,
      ...extractDetailNodes(nodes, "Polynukleotide / PhilArt Hair®"),
      ...extractSections(nodes, [
        "Medizinische Diagnostik bei Haarausfall",
        "Mikronährstofftherapie & Infusionstherapie",
      ]),
    ];
  }

  if (slug === "microneedling-haare") {
    return [
      { type: "h3", text: "Medizinisches Microneedling der Kopfhaut bei Haarausfall" } as MarkdownNode,
      ...extractDetailNodes(nodes, "Medizinisches Microneedling der Kopfhaut bei Haarausfall"),
      ...extractSections(nodes, [
        "Microneedling nach Haartransplantation",
        "Exosome & regenerative Wirkstoffkomplexe",
        "Polynukleotide / PhilArt Hair®",
        "Medizinische Diagnostik bei Haarausfall",
        "Mikronährstofftherapie & Infusionstherapie",
      ]),
    ];
  }

  return [];
}

function getSkinboosterDetailNodes(nodes: MarkdownNode[], slug: string) {
  const nctfSection = [
    { type: "h3", text: "NCTF® 135 HA" } as MarkdownNode,
    ...extractDetailNodes(nodes, "NCTF® 135 HA"),
  ];
  const regionNodesBySlug: Record<string, MarkdownNode[]> = {
    "nctf-ha-gesicht": [
      { type: "h3", text: "Behandlungsareal Gesicht" },
      { type: "p", text: "Diese Variante konzentriert sich auf das Gesicht, wenn Hautfeuchtigkeit, Hautfrische und ein gleichmäßigeres Hautbild im Vordergrund stehen." },
    ],
    "nctf-ha-gesicht-hals": [
      { type: "h3", text: "Behandlungsareale Gesicht und Hals" },
      { type: "p", text: "Diese Variante umfasst Gesicht und Hals, wenn beide Areale gemeinsam mit einem regenerativen Skinbooster-Konzept unterstützt werden sollen." },
    ],
    "nctf-ha-gesicht-hals-dekollete": [
      { type: "h3", text: "Behandlungsareale Gesicht, Hals und Dekolleté" },
      { type: "p", text: "Diese Variante umfasst Gesicht, Hals und Dekolleté für ein zusammenhängendes Behandlungskonzept der sichtbaren Hautareale." },
    ],
  };

  if (slug.startsWith("nctf-ha-")) {
    return [...nctfSection, ...(regionNodesBySlug[slug] ?? [])];
  }

  if (slug === "philart-auge") {
    return [
      { type: "h3", text: "Polynukleotide für die Augenregion & dunkle Augenringe" } as MarkdownNode,
      ...extractDetailNodes(nodes, "Polynukleotide für die Augenregion & dunkle Augenringe"),
    ];
  }

  if (slug === "philart-gesicht") {
    return [
      { type: "h3", text: "Was sind Polynukleotide?" } as MarkdownNode,
      ...extractDetailNodes(nodes, "Was sind Polynukleotide?"),
    ];
  }

  if (slug === "profhilo") {
    return [
      { type: "h3", text: "Profhilo®" } as MarkdownNode,
      ...extractDetailNodes(nodes, "Profhilo®"),
    ];
  }

  return [];
}

function getDetailNodes(sectionKey: AestheticSectionKey, nodes: MarkdownNode[], detailPage: AestheticDetailPage) {
  if (sectionKey === "microneedling") {
    return getMicroneedlingDetailNodes(nodes, detailPage.slug);
  }

  if (sectionKey === "hair") {
    return getHairDetailNodes(nodes, detailPage.slug);
  }

  if (sectionKey === "skinbooster") {
    return getSkinboosterDetailNodes(nodes, detailPage.slug);
  }

  return extractDetailNodes(nodes, detailPage.title);
}

function detailSummary(sectionKey: AestheticSectionKey, nodes: MarkdownNode[], detailPage: AestheticDetailPage) {
  for (const node of getDetailNodes(sectionKey, nodes, detailPage)) {
    if (hasText(node)) {
      return node.text;
    }
  }

  return "";
}

function extractFaqs(nodes: MarkdownNode[]) {
  const faqIndex = nodes.findIndex((node) => node.type === "h2" && node.text && /^Häufige Fragen/.test(node.text));

  if (faqIndex < 0) {
    return { title: "Häufige Fragen", items: [] as { question: string; answer: MarkdownNode[] }[] };
  }

  const faqNode = nodes[faqIndex];
  const title = hasText(faqNode) ? faqNode.text : "Häufige Fragen";
  const items: { question: string; answer: MarkdownNode[] }[] = [];
  let index = faqIndex + 1;

  while (index < nodes.length && nodes[index].type !== "h2") {
    const node = nodes[index];

    if (node.type === "h3" && node.text) {
      const answer = takeUntilHeading(nodes, index + 1);
      items.push({ question: node.text, answer: answer.children });
      index = answer.cursor;
      continue;
    }

    index += 1;
  }

  return { title, items };
}

function formatDetailPrice(sectionKey: AestheticSectionKey, detailPage: AestheticDetailPage, locale: PricingLocale) {
  const sectionsByKey: Partial<Record<AestheticSectionKey, PricingSection>> = {
    prp: pricingSections.prp,
    microneedling: pricingSections.microneedling,
    hair: pricingSections.hairTherapy,
    skinbooster: pricingSections.skinbooster,
  };
  const rows = ((sectionsByKey[sectionKey] ?? pricingSections.prp) as PricingSection).rows;
  const row = rows.find((item) => item.detailHref?.de?.endsWith(`/${detailPage.deSlug ?? detailPage.slug}`));
  const amount = row?.price?.amount;

  if (amount) {
    return locale === "en" ? `from €${amount}` : `ab ${amount} €`;
  }

  if (row?.price?.displayOverride?.[locale]) {
    return row.price.displayOverride[locale];
  }

  return locale === "en" ? (sectionKey === "prp" ? "from €199" : "from €249") : sectionKey === "prp" ? "ab 199 €" : "ab 249 €";
}

function AestheticDetailFacts({ sectionKey, detailPage, className = "", overlapHero = true, locale = "de" }: { sectionKey: AestheticSectionKey; detailPage: AestheticDetailPage; className?: string; overlapHero?: boolean; locale?: PricingLocale }) {
  const slug = detailPage.deSlug ?? detailPage.slug;
  const facts =
    sectionKey === "microneedling" || sectionKey === "hair"
      ? [
          {
            title: locale === "en" ? "Duration" : "Dauer",
            icon: ClockIcon,
            body: (
              <>
                {locale === "en" ? "Treatment usually takes " : "Die Behandlung dauert in der Regel "}<strong>45 bis 60 Minuten</strong>.
              </>
            ),
          },
          {
            title: locale === "en" ? "Sessions" : "Sitzungen",
            icon: SparklesIcon,
            body: (
              <>
                {locale === "en" ? "Usually " : "Meist "}
                <strong>{sectionKey === "hair" && slug === "microneedling-haare" ? (locale === "en" ? "4-6 sessions" : "4–6 Sitzungen") : sectionKey === "hair" ? (locale === "en" ? "3-4 sessions" : "3–4 Sitzungen") : (locale === "en" ? "3-5 sessions" : "3–5 Sitzungen")}</strong>
                {locale === "en" ? " spaced about 4-6 weeks apart." : " im Abstand von etwa 4–6 Wochen."}
              </>
            ),
          },
          {
            title: locale === "en" ? "Price" : "Preis",
            icon: CreditCardIcon,
            body: <strong>{formatDetailPrice(sectionKey, detailPage, locale)}</strong>,
          },
        ]
      : [
          {
            title: locale === "en" ? "Duration" : "Dauer",
            icon: ClockIcon,
            body: (
              <>
                {locale === "en" ? "Treatment usually takes " : "Die Behandlung dauert in der Regel "}<strong>{sectionKey === "skinbooster" ? "30 bis 45 Minuten" : "45 bis 60 Minuten"}</strong>.
              </>
            ),
          },
          {
            title: locale === "en" ? "Series" : "Serie",
            icon: SparklesIcon,
            body: (
              <>
                {locale === "en" ? "Often initially " : "Häufig zunächst "}<strong>{locale === "en" ? "3-4 treatments" : "3–4 Behandlungen"}</strong>{locale === "en" ? " spaced about 3-4 weeks apart." : " im Abstand von etwa 3–4 Wochen."}
              </>
            ),
          },
          {
            title: locale === "en" ? "Price" : "Preis",
            icon: CreditCardIcon,
            body: <strong>{formatDetailPrice(sectionKey, detailPage, locale)}</strong>,
          },
        ];

  return (
    <MotionSection className={`relative z-20 ${overlapHero ? "-mt-[50px]" : ""} px-4 pb-10 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-primary shadow-2xl shadow-primary/20 ring-1 ring-white/10">
          <div className="grid grid-cols-1 divide-y divide-white/15 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {facts.map((fact) => {
              const Icon = fact.icon;

              return (
                <div key={fact.title} className="flex min-h-[112px] items-start gap-4 p-5 sm:p-6 lg:min-h-[132px] lg:p-7">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 sm:h-16 sm:w-16">
                    <Icon className="h-8 w-8 stroke-[2.2] text-white sm:h-9 sm:w-9" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-sans text-xl font-semibold leading-tight text-white sm:text-2xl">{fact.title}</h2>
                    <p className="mt-2 text-base leading-7 text-white/70 sm:text-lg [&_strong]:font-semibold [&_strong]:text-white/70">{fact.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function MicroneedlingIntroBlock({ nodes }: { nodes: MarkdownNode[] }) {
  const introNodes = getMicroneedlingIntroNodes(nodes);

  if (introNodes.length === 0) {
    return null;
  }

  const textNodes = introNodes.filter(hasText);
  const heading = textNodes.find((node) => node.type === "h3" || node.type === "h2");
  const paragraphs = textNodes.filter((node) => node.type === "p");

  return (
    <MotionSection className="bg-tealColor px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.4fr] lg:items-start lg:gap-16">
        {heading && (
          <h2 className="font-serif text-3xl font-semibold leading-tight text-primaryLighter sm:text-4xl lg:max-w-xl">
            {heading.text}
          </h2>
        )}
        <div className="max-w-3xl space-y-5 text-lg leading-8 text-primaryLighter">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.text}>{paragraph.text}</p>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function AestheticCommonSections({ sectionKey, nodes }: { sectionKey: AestheticSectionKey; nodes: MarkdownNode[] }) {
  const commonSectionTitles =
    sectionKey === "microneedling"
      ? microneedlingCommonSectionTitles
      : sectionKey === "skinbooster"
        ? skinboosterCommonSectionTitles
        : prpCommonSectionTitles;
  const sections = commonSectionTitles
    .map((title) => ({ title, nodes: extractTitledSection(nodes, title) }))
    .filter((section) => section.nodes.length > 0);

  return (
    <MotionSection className="bg-lightBeige/70 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {sections.map((section) => (
          <MotionCard key={section.title} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10">
            <h2 className="font-serif text-2xl font-semibold text-primary">{section.title}</h2>
            <div className="mt-5">
              <ParagraphNodes nodes={section.nodes} />
            </div>
          </MotionCard>
        ))}
      </div>
    </MotionSection>
  );
}

function AestheticFaqSection({ nodes }: { nodes: MarkdownNode[] }) {
  const faq = extractFaqs(nodes);

  if (faq.items.length === 0) {
    return null;
  }

  return (
    <MotionSection className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="font-serif text-3xl font-semibold text-primary">{faq.title}</h2>
      <div className="mt-8 space-y-4">
        {faq.items.map((item) => (
          <details key={item.question} className="rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-serif text-lg font-semibold text-primary">{item.question}</summary>
            <div className="mt-4">
              <ParagraphNodes nodes={item.answer} />
            </div>
          </details>
        ))}
      </div>
    </MotionSection>
  );
}

function AestheticDetailContentSection({ nodes }: { nodes: MarkdownNode[] }) {
  return (
    <MotionSection className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <ParagraphNodes nodes={nodes} />
    </MotionSection>
  );
}

function StructuredBody({ nodes, sectionKey }: { nodes: MarkdownNode[]; sectionKey: AestheticSectionKey }) {
  const sections: JSX.Element[] = [];
  const detailHrefByTitle = sectionKey === "prp" || sectionKey === "hair" ? getDetailHrefByTitle(sectionKey) : {};
  let index = 0;

  const createDetailCard = (node: MarkdownNode & { text: string }, detailHref: string, start: number) => {
    const result = sectionKey === "hair" ? takeHairDetailCardSection(nodes, node.text, start) : takeUntilRule(nodes, start);
    const detailPage = getDetailPageByHref(sectionKey, detailHref);
    const cardNodes = sectionKey === "hair" && detailPage?.description
      ? detailPage.description.map((text) => ({ type: "p", text }) as MarkdownNode)
      : result.children;
    const card = (
      <MotionCard className="h-full rounded-lg border border-primary/10 bg-white p-6 shadow-sm transition hover:shadow-lg">
        <h2 className="font-serif text-2xl font-semibold text-primary">{node.text}</h2>
        <div className="mt-5 space-y-3">{renderCompactNodes(cardNodes)}</div>
        <span className="mt-6 block text-sm font-semibold text-primary underline underline-offset-4">Mehr erfahren</span>
      </MotionCard>
    );

    sections.push(
      <Link id={sectionId(node.text)} key={`card-${sections.length}`} href={detailHref} className="block h-full scroll-mt-28">
        {card}
      </Link>,
    );

    return result.cursor;
  };

  while (index < nodes.length) {
    const node = nodes[index];

    if (node.type === "rule") {
      index += 1;
      continue;
    }

    if (node.type === "h2" && node.text && /^(Häufige Fragen|Frequently asked questions)/.test(node.text)) {
      const faqs: { question: string; answer: MarkdownNode[] }[] = [];
      index += 1;

      while (index < nodes.length) {
        const question = nodes[index];

        if (question.type === "h2") {
          break;
        }

        if (question.type === "h3" && question.text) {
          const result = takeUntilHeading(nodes, index + 1);
          faqs.push({ question: question.text, answer: result.children });
          index = result.cursor;
          continue;
        }

        index += 1;
      }

      sections.push(
        <MotionSection key={`faq-${sections.length}`} className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-primary">{node.text}</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details id={sectionId(faq.question)} key={faq.question} className="scroll-mt-28 rounded-lg border border-primary/10 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer font-serif text-lg font-semibold text-primary">{faq.question}</summary>
                <div className="mt-4 space-y-3">{renderCompactNodes(faq.answer)}</div>
              </details>
            ))}
          </div>
        </MotionSection>,
      );
      continue;
    }

    if (node.type === "h2") {
      const detailHref = node.text ? detailHrefByTitle[node.text] : undefined;

      if (node.text && detailHref) {
        if (sectionKey === "hair") {
          index = takeHairDetailCardSection(nodes, node.text, index + 1).cursor;
          continue;
        }

        index = createDetailCard({ ...node, text: node.text }, detailHref, index + 1);
        continue;
      }

      sections.push(
        <MotionSection id={sectionId(node.text)} key={`heading-${sections.length}`} className="mx-auto max-w-5xl scroll-mt-28 px-4 pt-14 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold text-primary">{node.text}</h2>
        </MotionSection>,
      );
      index += 1;
      continue;
    }

    if (node.type === "h3" && node.text) {
      const detailHref = detailHrefByTitle[node.text];

      if (detailHref) {
        if (sectionKey === "hair") {
          index = takeHairDetailCardSection(nodes, node.text, index + 1).cursor;
          continue;
        }

        index = createDetailCard({ ...node, text: node.text }, detailHref, index + 1);
        continue;
      }

      const nextContentNode = nodes.slice(index + 1).find((item) => item.type !== "rule");

      if (nextContentNode?.type === "h3") {
        sections.push(
          <MotionSection id={sectionId(node.text)} key={`heading-${sections.length}`} className="mx-auto max-w-5xl scroll-mt-28 px-4 pt-14 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-semibold text-primary">{node.text}</h2>
          </MotionSection>,
        );
        index += 1;
        continue;
      }

      const result = takeUntilHeading(nodes, index + 1);
      sections.push(
        <MotionCard id={sectionId(node.text)} key={`card-${sections.length}`} className="scroll-mt-28 rounded-lg border border-primary/10 bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold text-primary">{node.text}</h2>
          <div className="mt-5 space-y-3">{renderCompactNodes(result.children)}</div>
        </MotionCard>,
      );
      index = result.cursor;
      continue;
    }

    const result = takeUntilHeading(nodes, index);

    if (result.children.length > 0) {
      sections.push(
        <MotionSection key={`intro-${sections.length}`} className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="space-y-5 text-lg leading-8 text-primaryLighter">{renderCompactNodes(result.children)}</div>
        </MotionSection>,
      );
    }

    index = result.cursor;
  }

  const groupedSections: JSX.Element[] = [];
  let pendingCards: JSX.Element[] = [];

  const flushCards = () => {
    if (pendingCards.length > 0) {
      groupedSections.push(
        <MotionSection key={`grid-${groupedSections.length}`} className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">{pendingCards}</div>
        </MotionSection>,
      );
      pendingCards = [];
    }
  };

  sections.forEach((section) => {
    if (section.key?.toString().includes("card-")) {
      pendingCards.push(section);
      return;
    }

    flushCards();
    groupedSections.push(section);
  });

  flushCards();

  return <>{groupedSections}</>;
}

export function AestheticMarkdownPage({ sectionKey, canonical }: { sectionKey: AestheticSectionKey; canonical: string }) {
  const markdown = getAestheticSectionMarkdown(sectionKey);
  const nodes = parseMarkdown(markdown);
  const title = getAestheticSectionTitle(sectionKey);
  const heroNodes = nodes.filter((node) => node.type !== "h1").slice(0, 2);
  const mobileHeroLeadNodes = heroNodes.slice(0, 1);
  const mobileHeroBodyNodes = heroNodes.slice(1);
  const bodyNodes = nodes.filter((node) => node.type !== "h1").slice(2);
  const descriptionNode = nodes.filter(hasText).find((node) => node.type === "h3" || node.type === "p");
  const description = descriptionNode?.text ?? title;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Praxis Jona", item: Constants.baseUrl },
      { "@type": "ListItem", position: 2, name: title, item: `${Constants.baseUrl}${canonical}` },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: title,
    description,
    provider: { "@id": `${Constants.baseUrl}/#organization`, name: "Praxis Jona" },
    areaServed: "Berlin-Mitte",
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <div className="overflow-hidden bg-white">
        <MotionSection className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/70">Ästhetik</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl">{title}</h1>
            <div className="mt-6 hidden lg:block">
              <RenderNodes nodes={heroNodes} />
            </div>
            <div className="mt-6 lg:hidden">
              <RenderNodes nodes={mobileHeroLeadNodes} />
              <HeroImage sectionKey={sectionKey} className="mt-8" />
              <div className="mt-8">
                <RenderNodes nodes={mobileHeroBodyNodes} />
              </div>
            </div>
            <CtaButtons sectionKey={sectionKey} />
          </div>
          <HeroImage sectionKey={sectionKey} className="hidden lg:block" />
        </MotionSection>

        <FactStrip sectionKey={sectionKey} />
        <TreatmentPricingBlock canonical={canonical} locale="de" />
        <div id="behandlungsdetails" className="scroll-mt-28">
          <StructuredBody nodes={bodyNodes} sectionKey={sectionKey} />
        </div>

        <MotionSection className="bg-lightBeige/70 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex max-w-3xl items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <SparklesIcon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-3xl font-semibold text-primary">Weitere ästhetische Behandlungen</h2>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {subpages
                .filter((item) => item.href !== canonical)
                .map((item, index) => (
                  <Link key={item.href} href={item.href} className="block h-full">
                    <MotionCard delay={Math.min(index * 0.04, 0.2)} className="h-full rounded-lg border border-primary/10 bg-white p-6 shadow-sm transition hover:shadow-lg">
                      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-lightBeige text-primary">
                        <CalendarDaysIcon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryLighter">{item.eyebrow}</p>
                      <h3 className="font-serif text-xl font-semibold text-primary">{item.title}</h3>
                      <span className="mt-6 block text-sm font-semibold text-primary underline underline-offset-4">Mehr erfahren</span>
                    </MotionCard>
                  </Link>
                ))}
            </div>
          </div>
        </MotionSection>
      </div>
    </>
  );
}

export function AestheticMarkdownDetailPage({ sectionKey, slug, parentCanonical, locale = "de" }: { sectionKey: AestheticSectionKey; slug: string; parentCanonical: string; locale?: PricingLocale }) {
  const detailPage = getAestheticDetailPage(sectionKey, slug, locale);

  if (!detailPage) {
    return null;
  }

  const markdown = getAestheticSectionMarkdown(sectionKey);
  const nodes = parseMarkdown(markdown);
  const parentTitle = locale === "en" ? pricingSections[sectionKey === "hair" ? "hairTherapy" : sectionKey].title.en : getAestheticSectionTitle(sectionKey);
  const detailNodes = locale === "en" ? detailPage.content ?? [] : getDetailNodes(sectionKey, nodes, detailPage);
  const descriptionNode = detailNodes.find(hasText);
  const leadDescription = detailPage.description ?? [];
  const [mobileLeadDescription, ...mobileFollowupDescription] = leadDescription;
  const description = leadDescription.length > 0 ? leadDescription.join(" ") : descriptionNode?.text ?? `${detailPage.title} ${locale === "en" ? "at Praxis Jona Berlin-Mitte." : "in der Praxis Jona Berlin-Mitte."}`;
  const bookingUrls = getDetailBookingUrls(sectionKey, detailPage);
  const siblings = getAestheticDetailPages(sectionKey, locale).filter((page) => page.slug !== slug);
  const relatedHeading =
    locale === "en"
      ? sectionKey === "microneedling"
        ? "More microneedling topics"
        : sectionKey === "hair"
          ? "More hair therapies"
          : sectionKey === "skinbooster"
            ? "More skin boosters"
            : "More PRP treatments"
      : sectionKey === "microneedling"
        ? "Weitere Microneedling-Themen"
        : sectionKey === "hair"
          ? "Weitere Haartherapien"
          : sectionKey === "skinbooster"
            ? "Weitere Skinbooster"
            : "Weitere PRP-Behandlungen";
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Praxis Jona", item: Constants.baseUrl },
      { "@type": "ListItem", position: 2, name: parentTitle, item: `${Constants.baseUrl}${parentCanonical}` },
      { "@type": "ListItem", position: 3, name: detailPage.title, item: `${Constants.baseUrl}${detailPage.href}` },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: detailPage.title,
    description,
    provider: { "@id": `${Constants.baseUrl}/#organization`, name: "Praxis Jona" },
    areaServed: "Berlin-Mitte",
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <div className="overflow-hidden bg-white">
        <MotionSection className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8 lg:py-24">
          <div>
            <p className={eyebrowClassName}>{parentTitle}</p>
            <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl">{detailPage.title}</h1>
            {leadDescription.length > 0 && (
              <div className="mt-6 hidden space-y-4 text-lg leading-8 text-primaryLighter lg:block">
                {leadDescription.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
            {mobileLeadDescription && <p className="mt-6 text-lg leading-8 text-primaryLighter lg:hidden">{mobileLeadDescription}</p>}
            <div className="mt-8 lg:hidden">
              <HeroImage sectionKey={sectionKey} />
            </div>
            <div className="mt-6 lg:hidden">
              {mobileFollowupDescription.length > 0 && (
                <div className="mb-6 space-y-4 text-lg leading-8 text-primaryLighter">
                  {mobileFollowupDescription.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}
              <AestheticDetailFacts sectionKey={sectionKey} detailPage={detailPage} locale={locale} className="mt-8 !px-0 pb-8 sm:!px-0 md:!px-0 lg:hidden" overlapHero={false} />
              <CtaButtons sectionKey={sectionKey} bookingUrls={bookingUrls} locale={locale} />
            </div>
            <div className="mt-6 hidden lg:block">
              <CtaButtons sectionKey={sectionKey} bookingUrls={bookingUrls} locale={locale} />
            </div>
          </div>
          <div className="hidden lg:block">
            <HeroImage sectionKey={sectionKey} />
          </div>
        </MotionSection>

        <AestheticDetailFacts sectionKey={sectionKey} detailPage={detailPage} locale={locale} className="hidden lg:block" />
        {locale === "de" && sectionKey === "microneedling" && <MicroneedlingIntroBlock nodes={nodes} />}
        <AestheticDetailContentSection nodes={detailNodes} />
        {locale === "de" && <AestheticCommonSections sectionKey={sectionKey} nodes={nodes} />}
        {locale === "de" && <AestheticFaqSection nodes={nodes} />}

        <MotionSection className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-lightBeige p-8">
            <h2 className="font-serif text-3xl font-semibold text-primary">
              {relatedHeading}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {siblings.map((item, index) => (
                <Link key={item.href} href={item.href} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-primary/10 transition hover:shadow-md">
                  <MotionCard delay={Math.min(index * 0.04, 0.2)} className="h-full">
                    <h3 className="font-serif text-xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-primaryLighter">{locale === "en" ? item.description?.[0] ?? "" : detailSummary(sectionKey, nodes, item)}</p>
                    <span className="mt-6 block text-sm font-semibold text-primary underline underline-offset-4">{locale === "en" ? "Learn more" : "Mehr erfahren"}</span>
                  </MotionCard>
                </Link>
              ))}
            </div>
          </div>
        </MotionSection>
      </div>
    </>
  );
}

export function AestheticMarkdownHub() {
  const markdown = getAestheticSectionMarkdown("hub");
  const nodes = parseMarkdown(markdown);
  const subpageIndex = nodes.findIndex((node) => node.type === "h2" && node.text === "Subpages");
  const introNodes = subpageIndex >= 0 ? nodes.slice(0, subpageIndex) : nodes;
  const mobileLeadNodes = introNodes.slice(0, 2);
  const mobileBodyNodes = introNodes.slice(2);

  return (
    <div className="overflow-hidden bg-white">
      <MotionSection className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-8 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/70">Haut, Mimik & Regeneration</p>
          <div className="hidden lg:block">
            <RenderNodes nodes={introNodes} />
          </div>
          <div className="lg:hidden">
            <RenderNodes nodes={mobileLeadNodes} />
            <HeroImage sectionKey="hub" className="mt-8" />
            <div className="mt-8">
              <RenderNodes nodes={mobileBodyNodes} />
            </div>
          </div>
          <CtaButtons sectionKey="hub" />
        </div>
        <HeroImage sectionKey="hub" className="hidden lg:block" />
      </MotionSection>

      <MotionSection className="bg-lightBeige/70 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-serif text-3xl font-semibold text-primary">Ästhetische Behandlungen</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {subpages.map((item, index) => (
              <Link key={item.href} href={item.href} className="block h-full">
                <MotionCard delay={Math.min(index * 0.04, 0.2)} className="h-full rounded-lg border border-primary/10 bg-white p-6 shadow-sm transition hover:shadow-lg">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryLighter">{item.eyebrow}</p>
                  <h3 className="font-serif text-xl font-semibold text-primary">{item.title}</h3>
                  <span className="mt-6 block text-sm font-semibold text-primary underline underline-offset-4">Mehr erfahren</span>
                </MotionCard>
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
