import { NextRequest, NextResponse } from "next/server";
import { jsPDF } from "jspdf";

import { createImpfaufklaerungSchema, impfaufklaerungQuestions, impfaufklaerungTextFields } from "@/app/anamnese/impfaufklaerung/form-definition";

const shouldMockDelivery = () =>
  process.env.NODE_ENV !== "production" && process.env.ANAMNESE_DELIVERY_MODE !== "live";

const valueOrDash = (value?: string) => value || "-";

function generateImpfaufklaerungPDF(data: any) {
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
  addText("Impfaufklärung", true);
  doc.setFontSize(10);
  y += 4;

  impfaufklaerungTextFields.forEach((field) => addText(`${field.label}: ${valueOrDash(data[field.name])}`));
  addText(`Geschlecht: ${valueOrDash(data.gender)}`);
  y += 4;

  impfaufklaerungQuestions.forEach((question) => {
    addText(`${question.question} ${valueOrDash(data[question.id])}`, true);
    addText(`${question.detailLabel}: ${valueOrDash(data[question.detailName])}`);
  });

  y += 4;
  addText("Ich bin über die Impfung aufgeklärt worden und bin mit der Impfung einverstanden.", true);
  addText(`Risikoaufklärung gelesen: ${data.riskInformationRead ? "Ja" : "Nein"}`);
  addText(`Einverständnis: ${data.consentAccepted ? "Ja" : "Nein"}`);
  addText(`Ort, Datum: ${valueOrDash(data.placeDate)}`);
  addText(`Unterschrift: ${data.signature ? "vorhanden" : "-"}`);

  return doc.output("datauristring").split(",")[1];
}

export async function POST(request: NextRequest) {
  try {
    const rawData = await request.json();
    const formData = createImpfaufklaerungSchema().parse(rawData);
    const pdfBase64 = generateImpfaufklaerungPDF(formData);

    if (shouldMockDelivery()) {
      console.info("Impfaufklärung validated; skipping n8n delivery in local mock mode.", {
        patientName: formData.patientName,
      });
      return NextResponse.json({ success: true, message: "Impfaufklärung lokal validiert" });
    }

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!n8nWebhookUrl) {
      throw new Error("N8N_WEBHOOK_URL environment variable is not configured");
    }

    const n8nFormData = new FormData();
    n8nFormData.append(
      "file",
      new Blob([Buffer.from(pdfBase64, "base64")], { type: "application/pdf" }),
      `Impfaufklaerung_${formData.patientName.replace(/\s+/g, "_")}.pdf`
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

    return NextResponse.json({ success: true, message: "Impfaufklärung erfolgreich gesendet" });
  } catch (error) {
    console.error("Error processing impfaufklaerung form:", error);
    return NextResponse.json({ success: false, message: "Fehler beim Verarbeiten des Formulars" }, { status: 500 });
  }
}
