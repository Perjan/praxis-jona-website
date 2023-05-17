import { Metadata } from 'next'
import MajorFeatureSection from 'app/MajorFeatureSection'
import FeaturesSection from 'app/FeaturesSection'
import NewsletterSection, { defaultNewsletterSectionProps, germanNewsletterSectionProps } from 'app/NewsletterSection'
import HeroSection, { HeroConfig, germanHeroConfig } from 'app/HeroSection'
import FeatureWithLargeScreenshotSection from 'app/FeatureWithLargeScreenshotSection'
import FeatureSectionWithProductScreenshotOnDark from 'app/FeatureSectionWithProductScreenshotOnDark'
import AppleWatchSection from 'app/AppleWatchSection'
import FeatureSectionWithProductScreenshotPanel from 'app/FeatureSectionWithProductScreenshotPanel'
import AppleLovesMoneyCoachSection from 'app/AppleLovesMoneyCoachSection'
import FaqSection from 'app/FaqSection'
import FinancialOverview from 'app/FinancialOverview'
import {
  PlusCircleIcon,
  BanknotesIcon,
  UserIcon,
  CalendarDaysIcon,
  AdjustmentsVerticalIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ArrowPathIcon,
  FingerPrintIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Bank, Bargeld, Kreditkarten.',
    description: 'Füge alle deine Offline-Bankkonten, Sparkonten und Kreditkarten manuell hinzu und verfolge sie.',
    icon: BanknotesIcon,
  },
  {
    name: 'Verfolge deine Ausgaben.',
    description: 'Protokolliere alle Einnahmen und Ausgaben und überprüfe deinen Nettowert in Echtzeit.',
    icon: PlusCircleIcon,
  }
]

const budgetSectionFeatures = [
  {
    name: 'Personalisierte Budgets.',
    description: 'Für dich maßgeschneiderte Budgets. Sag MoneyCoach, was du im Durchschnitt jeden Monat ausgibst, und er stellt dir personalisierte Budgets zusammen, mit denen du jeden Monat eine Menge Geld sparen kannst',
    icon: UserIcon,
  },
  {
    name: 'Budgets für jeden Tag.',
    description: 'Essen, Getränke, Unterhaltung, Technik, Videospiele, was auch immer. Erstelle ein Budget für eine oder mehrere bestimmte Kategorien, halte dich an dieses Budget und spare mehr Geld.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Budgets für jede Gelegenheit.',
    description: 'Urlaub? Geschäftsreise? Weihnachten steht vor der Tür? Erstelle einfach ein Budget, wähle die Kategorien aus, die du verfolgen möchtest, halte dich an dieses Budget und spare jedes Mal mehr Geld.',
    icon: BanknotesIcon,
  }
]

const goalsSectionFeatures = [
  {
    name: 'Benutzerdefinierte Ziele.',
    description:
      'Setze dir ein individuelles Ziel und beginne deine Reise, um es zu erreichen. Setze dir ein Ziel für die neue Konsole, das Handy, den Laptop, den Urlaub, das Auto, das Haus oder was auch immer und motiviere dich, Geld zu sparen und deine Träume zu verwirklichen..',
    icon: AdjustmentsVerticalIcon,
  },
  {
    name: 'Digitales Geld-Coaching.',
    description: 'Gehe durch den Ablauf der personalisierten Ziele. Dein digitaler Geldcoach wird dich fragen, was deine kurz- und langfristigen Ziele sind und ob du laufende Schulden hast oder nicht.',
    icon: UserIcon,
  }
]


const watchSectionFeatures = [
  {
    title: "Blick auf Einblicke",
    description: "Prüfe, wie viel Geld du noch ausgeben kannst, wie viel du heute ausgegeben hast und wie viel du diesen Monat ausgegeben hast.",
    image: "/images/watch2.png",
  },
  {
    title: "Blick auf Budgets",
    description: "Prüfe, wie viel Geld du noch für bestimmte Budgets ausgeben kannst",
    image: "/images/watch1.png",
  },
  {
    title: "Blick auf Nettowert",
    description: "Prüfe Einblicke und erhalte einen Überblick über alle deine Konten und dein Vermögen",
    image: "/images/watch3.png",
  },
]

const macSectionFeatures = [
  {
    name: 'Native Mac Erfahrung.',
    description:
      'MoneyCoach auf dem Mac wurde als echte Mac-App entwickelt. Es unterstützt alle großartigen Mac-Funktionen wie Seitenleisten, Tastenkombinationen usw. MoneyCoach ist auf dem Mac extrem leistungsfähig.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Apple Ökosystem.',
    description: 'Dies ist für die Apple-Fans. Jetzt kannst du MoneyCoach auf deiner Apple Watch, deinem iPhone, iPad, HomePod und Mac nahtlos über Data Sync nutzen.',
    icon: CpuChipIcon,
  }
]


const featuresSectionItems = [
  {
    name: 'Unterstützung mehrerer Währungen',
    description:
      'MoneyCoach ist perfekt für alle, die Konten in mehreren Währungen haben. Sieh, wie hoch dein Nettowert ist, umgerechnet in Echtzeit.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Intelligente Budgets & Ziele',
    description:
      'Erstelle intelligente Budgets, um dein Budget einzuhalten, und intelligente Ziele, um dich zu motivieren, mehr Geld zu sparen!',
    icon: LockClosedIcon,
  },
  {
    name: 'Tiefe iOS-Integration',
    description:
      'Gib Transaktionen über Siri ein. Überprüfe deine Finanzen auf deinem Sperr-/Heimbildschirm über Widgets und Live-Aktivitäten und vieles mehr.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Äußerst personalisierbar',
    description:
      'Du kannst MoneyCoach ganz nach deinen Wünschen anpassen. Blende die Übersichtskarten ein oder aus, sortiere sie, wie du willst, ändere das App-Symbol, die App-Farbe und mehr.',
    icon: FingerPrintIcon,
  },
]

/// https://beta.nextjs.org/docs/installation
export default function Home() {
  return (
    <main>

      <HeroSection config={germanHeroConfig} />

      <FinancialOverview
        subtitle="Vollständige Übersicht"
        title="Verfolge alle deine Konten an einem Ort"
        description="MoneyCoach gibt dir die volle Kontrolle über alle deine Konten, inklusive Bargeld."
        features={features}
      />

      <FeatureWithLargeScreenshotSection
        subtitle="Intelligente Budgets"
        title="Mehr Geld sparen mit personalisierten intelligenten Budgets"
        description="Erstelle ein Budget, das für dich funktioniert. Schränke deine Ausgaben ein, so dass du jedes Jahr bis zu 2.000 Euro sparen kannst.."
        features={budgetSectionFeatures}
      />

      <MajorFeatureSection
        title='Füge deine Barauslagen in Sekundenschnelle hinzu'
        description={'Bei MoneyCoach dreht sich alles um Geschwindigkeit, Personalisierung und Effizienz. Du kannst Transaktionen in 3 Sekunden über den normalen Weg hinzufügen. In 2 Sekunden über die Schnelleingabe oder im Handumdrehen über die Shortcuts.\n\nOder du kannst Siri die ganze schwere Arbeit mit nur einem Tippen erledigen lassen.'}
        imageUrl='/images/addTransactions2.png'
      />

      <FeatureSectionWithProductScreenshotOnDark
        subtitle="Intelligente Ziele"
        title="Spare und erreiche deine Träume mit intelligenten Zielen"
        description="MoneyCoach macht das Erreichen deiner Träume einfacher. Prüfe schnell, wie viel Geld du jeden Tag sparen musst, um deine Ziele innerhalb deiner Frist zu erreichen."
        features={goalsSectionFeatures} 
      />

      <AppleWatchSection
        title='MoneyCoach auf der Apple Watch'
        description='Eine Geldmanagement-App, die deine Finanzen an dein Handgelenk bringt. Überprüfe unterwegs deine Budgets, Konten, dein Vermögen und mehr.'
        features={watchSectionFeatures}
      />

      <FeatureSectionWithProductScreenshotPanel
        title="MoneyCoach für macOS"
        subtitle='Ein wunderbares Erlebnis auf deinem Mac'
        description='Verfügbar auf allen Macs mit macOS 12 Monterey oder höher.'
        features={macSectionFeatures}
      />

      <AppleLovesMoneyCoachSection
        description={"MoneyCoach wird schon seit einigen Jahren weltweit mehrfach in den App Stores vorgestellt. Auch auf der Apple-Website wurden wir schon mehrmals vorgestellt. Wir hatten einen Auftritt während der WWDC20 und WWDC21 Keynotes. Wir haben auch eine eigene Developer Story im App Store.\n\nVerrückt, oder?"}
      />


      <FeaturesSection
        features={featuresSectionItems}
        title='MoneyCoach hat eine Menge hilfreicher und leistungsstarker Funktionen.'
        sectionTitle='Vollgepackt mit Funktionen'
        buttonTitle='Alle Funktionen anzeigen'
        href='/de/funktionen'
      />

      <FaqSection
        locale='de'
        title='Häufig gestellte Fragen'
        buttonTitle='Alle FAQs anzeigen'
        href='/de/faq'
      />

      <NewsletterSection props={germanNewsletterSectionProps} />

    </main>
  );
}