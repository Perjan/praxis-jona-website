import { describe, expect, it } from "vitest";

import {
  createDefaultEisenaufklaerungValues,
  createEisenaufklaerungSchema,
  eisenaufklaerungCopy,
  eisenaufklaerungConsentText,
  eisenaufklaerungFields,
  eisenaufklaerungInformationSections,
  eisenaufklaerungMonitoringWaiverText,
} from "@/app/anamnese/eiseninfusion/form-definition";

describe("eisenaufklaerung form definition", () => {
  it("contains every visible field from the Pages document", () => {
    expect(eisenaufklaerungFields).toEqual([
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
    ]);
  });

  it("keeps the consent text from the document in one source of truth", () => {
    expect(eisenaufklaerungConsentText).toContain("Ich habe die Informationen gründlich durchgelesen");
    expect(eisenaufklaerungConsentText).toContain("Das Einverständnis ist für alle Eiseninfusionen");
    expect(eisenaufklaerungCopy.en.consentText).toContain("I have carefully read the information");
  });

  it("preserves the German medical/legal wording from the original implementation commit", () => {
    expect(eisenaufklaerungMonitoringWaiverText).toBe(
      "Ich verzichte auf die 30 Min. Überwachung nach der Infusion in der Praxis, entgegen der Empfehlung meines Arztes aufgrund der Gefahr einer allergischen Reaktion, welche bis zum Schockzustand führen kann. Mir ist bewusst, dass die Praxis bei Verzicht auf die Überwachung durch mich, für allfällige gesundheitliche Folgen nicht verantwortlich gemacht werden kann."
    );
    expect(eisenaufklaerungInformationSections).toEqual([
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
    ]);
  });

  it("validates required patient consent fields", () => {
    const result = createEisenaufklaerungSchema().safeParse(createDefaultEisenaufklaerungValues());

    expect(result.success).toBe(false);
    if (!result.success) {
      const paths = result.error.issues.map((issue) => issue.path.join("."));
      expect(paths).toEqual(expect.arrayContaining(["patientName", "consentAccepted", "date", "signature"]));
    }
  });

  it("keeps English labels and validation messages localized", () => {
    const values = createDefaultEisenaufklaerungValues("en");
    const result = createEisenaufklaerungSchema("en").safeParse(values);

    expect(values.locale).toBe("en");
    expect(eisenaufklaerungCopy.en.title).toBe("Iron Infusion");
    expect(eisenaufklaerungCopy.en.medicalLegalReviewNote).toContain("requires human medical/legal review");
    expect(eisenaufklaerungCopy.en.fields[0].label).toBe("Patient name");
    expect(result.success).toBe(false);
    expect(result.error?.issues.map((issue) => issue.message)).toContain("This field is required");
  });
});
