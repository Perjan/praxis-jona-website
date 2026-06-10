import { z } from "zod";

const required = "Dieses Feld ist erforderlich";

export const eisenaufklaerungConsentText =
  "Ich habe die Informationen gründlich durchgelesen, alle Punkte zur Kenntnis genommen und möchte die Eiseninfusion(en) durchführen lassen. Das Einverständnis ist für alle Eiseninfusionen während der geplanten Therapie ab Unterschriftsdatum gültig.";

export const eisenaufklaerungMonitoringWaiverText =
  "Ich verzichte auf die 30 Min. Überwachung nach der Infusion in der Praxis, entgegen der Empfehlung meines Arztes aufgrund der Gefahr einer allergischen Reaktion, welche bis zum Schockzustand führen kann. Mir ist bewusst, dass die Praxis bei Verzicht auf die Überwachung durch mich, für allfällige gesundheitliche Folgen nicht verantwortlich gemacht werden kann.";

export const eisenaufklaerungInformationSections = [
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
] as const;

export const eisenaufklaerungFields = [
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
] as const;

export function createEisenaufklaerungSchema() {
  return z.object({
    patientName: z.string().min(1, required),
    monitoringWaiverAccepted: z.boolean().default(false),
    consentAccepted: z.boolean().refine((value) => value === true, "Bitte bestätigen Sie Ihr Einverständnis"),
    doctorInitials: z.string().optional().default(""),
    date: z.string().min(1, required),
    signature: z.string().min(1, "Bitte unterschreiben Sie den Bogen"),
  });
}

export type EisenaufklaerungPayload = z.infer<ReturnType<typeof createEisenaufklaerungSchema>>;

export const createDefaultEisenaufklaerungValues = (): EisenaufklaerungPayload => ({
  patientName: "",
  monitoringWaiverAccepted: false,
  consentAccepted: false,
  doctorInitials: "",
  date: "",
  signature: "",
});
