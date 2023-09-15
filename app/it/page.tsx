import { Metadata } from 'next'
import FeaturesSection from 'app/FeaturesSection'
import NewsletterSection, { defaultNewsletterSectionProps, italianNewsletterSectionProps } from 'app/NewsletterSection'
import MajorFeatureSection from 'app/MajorFeatureSection'
import MajorFeatureSectionWithButton from 'app/MajorFeatureSectionWithButton'
import HeroSection, { HeroConfig, italianHeroConfig } from 'app/HeroSection'
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
  UserGroupIcon,
  LinkIcon,
  RectangleGroupIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Banca, Contanti, Carte di Credito.',
    description: 'Aggiungi manualmente e tieni traccia di tutti i tuoi conti bancari offline, conti di risparmio e carte di credito.',
    icon: BanknotesIcon,
  },
  {
    name: 'Traccia le spese.',
    description: 'Registra tutte le entrate e le uscite e controlla il tuo patrimonio netto in tempo reale.',
    icon: PlusCircleIcon,
  }
]

const budgetSectionFeatures = [
  {
    name: 'Budget personalizzati.',
    description: "Di' a MoneyCoach quanto spendi in media ogni mese e lui ti preparerà dei budget personalizzati che ti faranno risparmiare molto denaro ogni mese.",
    icon: UserIcon,
  },
  {
    name: 'Budget per ogni giorno.',
    description: 'Cibo, bevande, intrattenimento, tecnologia, videogiochi, qualsiasi cosa. Crea un budget "a busta" che tenga conto di una o più categorie specifiche, segui questo budget e risparmia di più.',
    icon: CalendarDaysIcon,
  },
  {
    name: 'Budget per ogni occasione.',
    description: 'Vacanze? Viaggio di lavoro? Vacanze? Il Natale è alle porte? Basta creare un budget, selezionare le categorie che si desidera monitorare, attenersi a questo budget e risparmiare ogni volta di più.',
    icon: BanknotesIcon,
  }
]

const goalsSectionFeatures = [
  {
    name: 'Obiettivi personalizzati.',
    description:
      "Crea un obiettivo personalizzato e inizia il tuo percorso per raggiungerlo. Crea un obiettivo per una nuova console, un telefono, un computer portatile, una vacanza, un'auto, una casa o qualsiasi altra cosa e motivatevi a risparmiare e a realizzare i tuoi sogni.",
    icon: AdjustmentsVerticalIcon,
  },
  {
    name: 'Coaching digitale sul denaro.',
    description: 'Segui il flusso degli obiettivi personalizzati. Il tuo money coach digitale ti chiederà quali sono i tuoi obiettivi a breve e lungo termine e se hai o no debiti in corso e lui si occuperà del resto.',
    icon: UserIcon,
  }
]

const watchSectionFeatures = [
  {
    title: "Approfondimenti a Colpo d'Occhio",
    description: "Controlla quanto denaro hai speso oggi e quanto ti rimane da spendere.",
    image: "/images/watch1-new.png",
  },
  {
    title: "Budgets a Colpo d'Occhio",
    description: "Controlla quanto denaro ti rimane da spendere per budget specifici.",
    image: "/images/watch2-new.png",
  },
  {
    title: "Scorciatoie",
    description: "Aggiungi movimenti direttamente dalla Apple Watch con un solo tocco.",
    image: "/images/watch3-new.png",
  },
]

const macSectionFeatures = [
  {
    name: 'Esperienza nativa Mac.',
    description:
      'MoneyCoach su Mac è stato progettato come una vera e propria applicazione per Mac. Supporta tutte le grandi caratteristiche del Mac, come le barre laterali, le scorciatoie da tastiera, le scorciatoie da touch bar, ecc. MoneyCoach è estremamente potente su Mac.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Ecosistema Apple.',
    description: 'Questo è per gli appassionati di Apple. Ora è possibile utilizzare MoneyCoach su Apple Watch, iPhone, iPad, HomePod e Mac grazie alla sincronizzazione dei dati via iCloud.',
    icon: CpuChipIcon,
  }
]

const featuresSectionItems = [
  {
    name: 'Condividi Con La Famiglia',
    description:
      'Condividi i tuoi dati con tua moglie, tuo marito, il tuo partner o qualsiasi altro utente che utilizza ID Apple diversi.',
    icon: UserGroupIcon,
  },
  {
    name: 'Supporto multi-valuta',
    description:
      'MoneyCoach è perfetto per chi ha conti in più valute. Scopri quanto è il tuo patrimonio netto, convertito in tempo reale.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Budget & Obiettivi intelligenti',
    description:
      'Crea budget e obiettivi intelligenti per motivarti a risparmiare di più!',
    icon: LockClosedIcon,
  },
  {
    name: 'Profonda integrazione con iOS',
    description:
      'Inserisci movimenti tramite Siri. Controlla le tue finanze sulla schermata di blocco/casa tramite widget e Live Activities e molto altro ancora.',
    icon: ArrowPathIcon,
  }
]

const familySyncFeatures = [
  {
    name: 'Esperienza Unificata.',
    description:
    "Condividi i tuoi dati con tua moglie, tuo marito o il tuo partner e avrai un'esperienza unificata in cui potrai vedere i tuoi conti condivisi, i bilanci, gli obiettivi, ecc.",
    icon: LinkIcon,
  },
  {
    name: 'Panoramica Personale.',
    description: 'Anche se tutto è condiviso, ogni utente può personalizzare la propria panoramica selezionando quali conti mostrare o nascondere.',
    icon: RectangleGroupIcon,
  }
]

/// https://beta.nextjs.org/docs/installation
export default function Home() {
  return (
    <main>

      <HeroSection config={italianHeroConfig} />

      <FeatureSectionWithProductScreenshotPanel
        title="Condividi i tuoi dati con il tuo partner"
        subtitle='Condividi Con La Famiglia'
        description='Disponibile su MoneyCoach 8.6 o versioni successive.'
        image = "/images/familySyncHeroNew.png"
        features={familySyncFeatures}
      />

      <MajorFeatureSectionWithButton
      title="Importa i movimenti di Apple Pay / Wallet"
      description={"Importa automaticamente i movimenti da Apple Pay / Wallet tramite una automazione dai Comandi Rapidi. Una volta effettuato un pagamento con una qualsiasi delle tue carte, il movimento verrà automaticamente aggiunto a MoneyCoach.\n\nLa configurazione dell'automazione richiede solo un minuto e deve essere eseguita una sola volta."}
      url='/guides/how-to-import-apple-pay-wallet-transactions-to-moneycoach'
      imageUrl='/images/apple-pay-wallet-import.png'
      />

      <FinancialOverview
        subtitle="Panoramica Completa"
        title="Tieni traccia di tutti i tuoi conti in un unico posto"
        description="MoneyCoach vi garantisce il controllo totale di tutti i vostri conti, compresi i contanti."
        features={features}
      />

      <FeatureWithLargeScreenshotSection
        subtitle="Budget Intelligenti"
        title="Risparmia di più con bilanci intelligenti personalizzati"
        description="Crea budgets che funzionano per te. Limita le tue spese in modo da risparmiare fino a 2.000 euro all'anno."
        features={budgetSectionFeatures}
      />

      <MajorFeatureSection
        title='Aggiungi le tue spese in contanti in pochi secondi'
        description={"MoneyCoach è caratterizzato da velocità, personalizzazione ed efficienza. Aggiungi movimenti in 3 secondi con il metodo normale. In 2 secondi con l'inserimento rapido o in un istante con le Scorciatoie, oppure potete far fare a Siri tutto il lavoro pesante con un solo tocco."}
        imageUrl='/images/addTransactions2.png'
      />

      <FeatureSectionWithProductScreenshotOnDark
        subtitle="Obiettivi Intelligenti"
        title="Risparmia e realizza i tuoi sogni con gli obiettivi intelligenti"
        description="MoneyCoach facilita la realizzazione dei tuoi sogni. Controlla rapidamente quanto denaro devi risparmiare ogni giorno per raggiungere i tuoi obiettivi entro la scadenza."
        features={goalsSectionFeatures} 
      />

      <AppleWatchSection
        title='MoneyCoach & Apple Watch'
        description='MoneyCoach e disponibile anche su Apple Watch. Con l’app per Apple Watch puoi tenere sotto controllo il tuo budget, le tue spese e il tuo patrimonio netto in un attimo.'
        features={watchSectionFeatures}
      />


      <FeatureSectionWithProductScreenshotPanel
        title="MoneyCoach per macOS"
        subtitle="Un'esperienza straordinaria sul vostro Mac"
        description='Disponibile su tutti i Mac con sistema operativo macOS 12 Monterey o successivo.'
        image = "/images/moneyCoachOnMacNew.png"
        features={macSectionFeatures}
      />

      <AppleLovesMoneyCoachSection
        description={"MoneyCoach è continuamente presentato in primo piano negli App Store di tutto il mondo da diversi anni. Siamo apparsi sul sito web di Apple un paio di volte. Siamo apparsi durante i keynote WWDC20 e della WWDC21. Abbiamo anche ottenuto una Developer Story dedicata sull'App Store.\n\nPazzesco, vero?"}
      />

      <FeaturesSection
        features={featuresSectionItems}
        title= 'MoneyCoach ha un sacco di funzioni utili e potenti.'
        sectionTitle='Ricco di funzioni'
        buttonTitle='Visualizza tutte le funzioni'
        href='/it/funzioni'
      />

      <FaqSection
        locale='it'
        title='Domande frequenti'
        buttonTitle='Visualizza tutte le FAQ'
        href='/it/domande-frequenti'
      />

      <NewsletterSection props={italianNewsletterSectionProps} />

    </main>
  );
}