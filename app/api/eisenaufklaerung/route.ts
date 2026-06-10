import { NextRequest, NextResponse } from "next/server";
import { jsPDF } from "jspdf";

import {
  createEisenaufklaerungSchema,
  eisenaufklaerungConsentText,
  eisenaufklaerungFields,
  eisenaufklaerungInformationSections,
  eisenaufklaerungMonitoringWaiverText,
} from "@/app/anamnese/eiseninfusion/form-definition";

const shouldMockDelivery = () =>
  process.env.NODE_ENV !== "production" && process.env.ANAMNESE_DELIVERY_MODE !== "live";

const valueOrDash = (value?: string) => value || "-";

function generateEisenaufklaerungPDF(data: any) {
  const doc = new jsPDF();
  let y = 20;
  const margin = 20;
  const lineHeight = 7;
  const pageHeight = doc.internal.pageSize.height;

  const addText = (text: string, bold = false) => {
    if (y > pageHeight - margin) {
      doc.addPage();
      y = 20;
    }
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.splitTextToSize(text, 170).forEach((line: string) => {
      doc.text(line, margin, y);
      y += lineHeight;
    });
  };

  doc.setFontSize(16);
  addText("Einverständniserklärung zur Eiseninfusion mit Ferinject, Monofer, Venofer und Fermed", true);
  doc.setFontSize(10);
  y += 4;

  addText(`Patientenname: ${valueOrDash(data.patientName)}`);
  y += 4;

  eisenaufklaerungInformationSections.forEach((section) => {
    addText(section.title, true);
    if ("paragraphs" in section) {
      section.paragraphs.forEach((paragraph) => addText(paragraph));
    }
    if ("bullets" in section) {
      section.bullets.forEach((bullet) => addText(`- ${bullet}`));
    }
    y += 2;
  });

  addText(eisenaufklaerungFields[1].label, true);
  addText(`Angekreuzt: ${data.monitoringWaiverAccepted ? "Ja" : "Nein"}`);
  addText(eisenaufklaerungMonitoringWaiverText);
  y += 2;

  addText("Einverständniserklärung", true);
  addText(eisenaufklaerungConsentText);
  addText(`Bestätigt: ${data.consentAccepted ? "Ja" : "Nein"}`);
  addText(`Kürzel Arzt: ${valueOrDash(data.doctorInitials)}`);
  addText(`Datum: ${valueOrDash(data.date)}`);
  addText(`Unterschrift Patient: ${data.signature ? "vorhanden" : "-"}`);

  return doc.output("datauristring").split(",")[1];
}

export async function POST(request: NextRequest) {
  try {
    const rawData = await request.json();
    const formData = createEisenaufklaerungSchema().parse(rawData);
    const pdfBase64 = generateEisenaufklaerungPDF(formData);

    if (shouldMockDelivery()) {
      console.info("Eisenaufklärung validated; skipping n8n delivery in local mock mode.", {
        patientName: formData.patientName,
      });
      return NextResponse.json({ success: true, message: "Eisenaufklärung lokal validiert" });
    }

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!n8nWebhookUrl) {
      throw new Error("N8N_WEBHOOK_URL environment variable is not configured");
    }

    const n8nFormData = new FormData();
    n8nFormData.append(
      "file",
      new Blob([Buffer.from(pdfBase64, "base64")], { type: "application/pdf" }),
      `Eisenaufklaerung_${formData.patientName.replace(/\s+/g, "_")}.pdf`
    );
    n8nFormData.append("patientName", formData.patientName);
    n8nFormData.append("submittedAt", new Date().toISOString());
    n8nFormData.append("metadata", JSON.stringify(formData));

    const response = await fetch(n8nWebhookUrl, {
      method: "POST",
      body: n8nFormData,
    });

    if (!response.ok) {
      throw new Error(`N8N webhook failed with status: ${response.status}`);
    }

    return NextResponse.json({ success: true, message: "Eisenaufklärung erfolgreich gesendet" });
  } catch (error) {
    console.error("Error processing eisenaufklaerung form:", error);
    return NextResponse.json({ success: false, message: "Fehler beim Verarbeiten des Formulars" }, { status: 500 });
  }
}
