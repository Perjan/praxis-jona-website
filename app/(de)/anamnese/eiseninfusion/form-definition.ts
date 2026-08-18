import { z } from "zod";

import { Locale } from "../form-definition";

export const eisenaufklaerungCopy = {
  de: {
    validation: {
      required: "Dieses Feld ist erforderlich",
      consentAccepted: "Bitte bestätigen Sie Ihr Einverständnis",
      signature: "Bitte unterschreiben Sie den Bogen",
    },
    title: "Eiseninfusion",
    medicalLegalReviewNote: "German iron infusion copy is the source of truth.",
    navLabel: "Eiseninfusion Navigation",
    heading: "Einverständniserklärung zur Eiseninfusion mit Ferinject, Monofer, Venofer und Fermed",
    monitoringHeading: "Patienteneigene Verantwortung bei Verzicht auf Überwachungszeit nach der Infusion",
    monitoringIntro: "(Bitte nur ankreuzen, wenn Sie auf eigene Verantwortung auf die Überwachungszeit verzichten möchten)",
    consentHeading: "Einverständniserklärung",
    back: "Zurück",
    submit: "Absenden",
    submitting: "Wird übermittelt...",
    error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
    thanks: "Vielen Dank!",
    returnDevice: "Bitte geben Sie das Gerät an der Rezeption zurück.",
    newForm: "Neues Formular",
    scrollDown: "Weiter nach unten",
    clearSignature: "Unterschrift löschen",
    yes: "Ja",
    no: "Nein",
    signaturePresent: "vorhanden",
    noInformation: "-",
    filenamePrefix: "Eisenaufklaerung",
    successMessage: "Eisenaufklärung erfolgreich gesendet",
    mockMessage: "Eisenaufklärung lokal validiert",
    monitoringWaiverText:
      "Ich verzichte auf die 30 Min. Überwachung nach der Infusion in der Praxis, entgegen der Empfehlung meines Arztes aufgrund der Gefahr einer allergischen Reaktion, welche bis zum Schockzustand führen kann. Mir ist bewusst, dass die Praxis bei Verzicht auf die Überwachung durch mich, für allfällige gesundheitliche Folgen nicht verantwortlich gemacht werden kann.",
    consentText:
      "Ich habe die Informationen gründlich durchgelesen, alle Punkte zur Kenntnis genommen und möchte die Eiseninfusion(en) durchführen lassen. Das Einverständnis ist für alle Eiseninfusionen während der geplanten Therapie ab Unterschriftsdatum gültig.",
    informationSections: [
      {
        title: "Nebenwirkungen und wichtige Hinweise",
        paragraphs: [
          "Ferinject, Monofer, Venofer und Fermed werden häufig verabreicht und sind in der Regel gut verträglich. Mögliche Nebenwirkungen sind unter anderem ein metallischer Geschmack, Hitzewallungen, Kopfschmerzen, Schwindel, Bauchschmerzen, Übelkeit, Blutdruckschwankungen, Beschwerden an der Einstichstelle sowie in seltenen Fällen Kreislaufreaktionen.",
          "Zusätzlich können allergische Reaktionen bis hin zum allergischen Schock auftreten. Nach der Infusion bleiben Sie in der Regel noch 30 Minuten in der Praxis zur Beobachtung. Die Praxis verfügt über eine Notfallausrüstung für die sofortige medizinische Behandlung im Falle einer allergischen oder anderen akuten Reaktion.",
          "Bei Ferinject tritt zudem sehr häufig eine Hypophosphatämie auf. Sollten Sie während der Infusion Schmerzen, Brennen oder Druck/Schwellung an der Infusionsstelle verspüren, informieren Sie bitte umgehend das Praxisteam. Es kann vorkommen, dass die Infusion nicht korrekt in die Vene läuft (paravenös). In diesem Fall kann das Austreten von Infusionsflüssigkeit in das Gewebe zu einer anhaltenden Braunverfärbung der Haut führen, welche Monate bis Jahre sichtbar bleibt. Bitte vermeiden Sie aus diesem Grund übermäßige Bewegungen des Arms während der Infusionstherapie.",
        ],
      },
      {
        title: "Allergierate und Wirkstoffe",
        bullets: [
          "Ferinject - Ferric Carboxymaltose - ca. 0,01-0,1 %",
          "Monofer - Ferric Derisomaltose - ca. 0,01-0,05 %",
          "Venofer - Eisen(III)-Saccharose - ca. 0,002-0,01 %",
          "Fermed - Eisen(III)-Saccharose - genauso wie Venofer",
        ],
      },
      {
        title: "Maximale Dosierungen",
        bullets: [
          "Fermed / Venofer: maximale Dosis 200 mg pro Tag, maximal 1000 mg pro Woche",
          "Ferinject / Monofer: maximale Dosis 500 mg pro Tag, maximal 1000 mg pro Woche",
        ],
      },
      {
        title: "Wann darf keine Eiseninfusion durchgeführt werden?",
        bullets: [
          "In den ersten 3 Monaten einer Schwangerschaft",
          "Bei bekannter Allergie/Überempfindlichkeit auf einen Wirk-/Hilfsstoff",
          "Bei Krankheiten mit Eisenüberladung",
        ],
      },
    ],
    fields: [
      { name: "patientName", label: "Patientenname", required: true },
      {
        name: "monitoringWaiverAccepted",
        label: "Patienteneigene Verantwortung bei Verzicht auf Überwachungszeit nach der Infusion",
        required: false,
      },
      { name: "consentAccepted", label: "Einverständniserklärung", required: true },
      { name: "doctorInitials", label: "Kürzel Arzt", required: false },
      { name: "date", label: "Datum", required: true },
      { name: "signature", label: "Unterschrift Patient", required: true },
    ],
  },
  en: {
    validation: {
      required: "This field is required",
      consentAccepted: "Please confirm your consent",
      signature: "Please sign the form",
    },
    title: "Iron Infusion",
    medicalLegalReviewNote:
      "English iron infusion medical/legal copy is drafted from the German source and requires human medical/legal review before operational use.",
    navLabel: "Iron infusion navigation",
    heading: "Consent form for iron infusion with Ferinject, Monofer, Venofer, and Fermed",
    monitoringHeading: "Patient responsibility when waiving the monitoring period after the infusion",
    monitoringIntro: "(Please only tick this if you wish to waive the monitoring period on your own responsibility)",
    consentHeading: "Consent",
    back: "Back",
    submit: "Submit",
    submitting: "Submitting...",
    error: "An error occurred. Please try again later.",
    thanks: "Thank you!",
    returnDevice: "Please return the device to reception.",
    newForm: "New form",
    scrollDown: "Scroll down",
    clearSignature: "Clear signature",
    yes: "Yes",
    no: "No",
    signaturePresent: "present",
    noInformation: "-",
    filenamePrefix: "Iron_Infusion_Consent",
    successMessage: "Iron infusion consent sent successfully",
    mockMessage: "Iron infusion consent locally validated",
    monitoringWaiverText:
      "I waive the 30-minute monitoring period after the infusion in the practice, against my doctor's recommendation, because of the risk of an allergic reaction that may progress to shock. I understand that if I waive monitoring, the practice cannot be held responsible for any health consequences.",
    consentText:
      "I have carefully read the information, acknowledge all points, and would like to receive the iron infusion(s). This consent is valid for all iron infusions during the planned treatment from the date of signature.",
    informationSections: [
      {
        title: "Side effects and important information",
        paragraphs: [
          "Ferinject, Monofer, Venofer, and Fermed are commonly administered and are generally well tolerated. Possible side effects include metallic taste, hot flushes, headache, dizziness, abdominal pain, nausea, blood pressure changes, discomfort at the injection site, and, in rare cases, circulatory reactions.",
          "Allergic reactions, including allergic shock, may also occur. After the infusion, you usually remain in the practice for another 30 minutes for observation. The practice has emergency equipment for immediate medical treatment in case of an allergic or other acute reaction.",
          "Hypophosphatemia is also very common with Ferinject. If you experience pain, burning, pressure, or swelling at the infusion site during the infusion, please inform the practice team immediately. It can happen that the infusion does not run correctly into the vein (paravenous administration). In that case, leakage of infusion fluid into the tissue can cause persistent brown discoloration of the skin, which may remain visible for months to years. For this reason, please avoid excessive arm movement during infusion therapy.",
        ],
      },
      {
        title: "Allergy rate and active substances",
        bullets: [
          "Ferinject - ferric carboxymaltose - approx. 0.01-0.1%",
          "Monofer - ferric derisomaltose - approx. 0.01-0.05%",
          "Venofer - iron(III) sucrose - approx. 0.002-0.01%",
          "Fermed - iron(III) sucrose - same as Venofer",
        ],
      },
      {
        title: "Maximum dosages",
        bullets: [
          "Fermed / Venofer: maximum dose 200 mg per day, maximum 1000 mg per week",
          "Ferinject / Monofer: maximum dose 500 mg per day, maximum 1000 mg per week",
        ],
      },
      {
        title: "When must an iron infusion not be performed?",
        bullets: [
          "During the first 3 months of pregnancy",
          "In case of known allergy/hypersensitivity to an active ingredient or excipient",
          "In diseases with iron overload",
        ],
      },
    ],
    fields: [
      { name: "patientName", label: "Patient name", required: true },
      {
        name: "monitoringWaiverAccepted",
        label: "Patient responsibility when waiving the monitoring period after the infusion",
        required: false,
      },
      { name: "consentAccepted", label: "Consent", required: true },
      { name: "doctorInitials", label: "Doctor initials", required: false },
      { name: "date", label: "Date", required: true },
      { name: "signature", label: "Patient signature", required: true },
    ],
  },
} as const;

export const eisenaufklaerungConsentText = eisenaufklaerungCopy.de.consentText;
export const eisenaufklaerungMonitoringWaiverText = eisenaufklaerungCopy.de.monitoringWaiverText;
export const eisenaufklaerungInformationSections = eisenaufklaerungCopy.de.informationSections;
export const eisenaufklaerungFields = eisenaufklaerungCopy.de.fields;

export function createEisenaufklaerungSchema(locale: Locale = "de") {
  const t = eisenaufklaerungCopy[locale].validation;

  return z.object({
    locale: z.enum(["de", "en"]).default(locale),
    patientName: z.string().min(1, t.required),
    monitoringWaiverAccepted: z.boolean().default(false),
    consentAccepted: z.boolean().refine((value) => value === true, t.consentAccepted),
    doctorInitials: z.string().optional().default(""),
    date: z.string().min(1, t.required),
    signature: z.string().min(1, t.signature),
  });
}

export type EisenaufklaerungPayload = z.infer<ReturnType<typeof createEisenaufklaerungSchema>>;

export const createDefaultEisenaufklaerungValues = (locale: Locale = "de"): EisenaufklaerungPayload => ({
  locale,
  patientName: "",
  monitoringWaiverAccepted: false,
  consentAccepted: false,
  doctorInitials: "",
  date: "",
  signature: "",
});
