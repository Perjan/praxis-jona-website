import { NextRequest, NextResponse } from "next/server";

import { dataUrlToBlob, getFileExtensionFromMime } from "@/app/api/anamnese/pdf";
import {
  calculateGlp1Bmi,
  createGlp1SubmissionSchema,
  deriveGlp1ReviewFlags,
  glp1IntakeCopy,
} from "@/app/glp1/intake-definition";
import { createGlp1Filename, generateGlp1Pdf } from "./pdf";

const MAX_REQUEST_BYTES = 1_750_000;

const json = (body: unknown, status = 200) => {
  const response = NextResponse.json(body, { status });
  response.headers.set("Cache-Control", "no-store, max-age=0");
  return response;
};

const shouldMockDelivery = () =>
  process.env.NODE_ENV !== "production" && process.env.ANAMNESE_DELIVERY_MODE !== "live";

export async function POST(request: NextRequest) {
  let locale: "de" | "en" = "de";

  try {
    const contentLength = Number(request.headers.get("content-length") ?? 0);
    if (contentLength > MAX_REQUEST_BYTES) {
      return json({ success: false, message: glp1IntakeCopy.de.api.invalid }, 413);
    }

    const raw = await request.json();
    locale = raw?.locale === "en" ? "en" : "de";
    const parsed = createGlp1SubmissionSchema(locale).safeParse(raw);
    if (!parsed.success) {
      return json({ success: false, message: glp1IntakeCopy[locale].api.invalid }, 400);
    }

    const submission = parsed.data;
    const reviewFlags = deriveGlp1ReviewFlags(submission);
    const bmi = submission.flow === "new"
      ? calculateGlp1Bmi(submission.answers.heightCm, submission.answers.weightKg)
      : null;
    const pdfBuffer = Buffer.from(generateGlp1Pdf(submission), "base64");
    const filename = createGlp1Filename(submission);

    if (shouldMockDelivery()) {
      console.info("GLP-1 intake validated; skipping n8n delivery in local mock mode.", {
        submissionId: submission.submissionId,
        flow: submission.flow,
        locale: submission.locale,
      });
      return json({
        success: true,
        submissionId: submission.submissionId,
        message: glp1IntakeCopy[locale].api.success,
      });
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!webhookUrl) throw new Error("GLP-1 intake delivery is not configured");

    const { signature: _signature, website: _website, ...metadataSubmission } = submission;
    const formData = new FormData();
    formData.append("file", new Blob([pdfBuffer], { type: "application/pdf" }), filename);
    formData.append("patientName", submission.patient.name);
    formData.append("patientEmail", submission.patient.email);
    formData.append("patientPhone", submission.patient.phone);
    formData.append("flow", submission.flow);
    formData.append("submissionId", submission.submissionId);
    formData.append("submittedAt", new Date().toISOString());
    formData.append(
      "metadata",
      JSON.stringify({
        ...metadataSubmission,
        bmi,
        reviewFlags,
      }),
    );

    try {
      const { blob, mimeType } = dataUrlToBlob(submission.signature);
      formData.append("signatureImage", blob, `signature.${getFileExtensionFromMime(mimeType)}`);
    } catch {
      throw new Error("GLP-1 intake signature could not be processed");
    }

    const delivery = await fetch(webhookUrl, { method: "POST", body: formData });
    if (!delivery.ok) throw new Error("GLP-1 intake delivery failed");

    console.info("GLP-1 intake delivered to n8n.", {
      submissionId: submission.submissionId,
      flow: submission.flow,
      locale: submission.locale,
    });

    return json({
      success: true,
      submissionId: submission.submissionId,
      message: glp1IntakeCopy[locale].api.success,
    });
  } catch (error) {
    console.error("GLP-1 intake processing failed", error instanceof Error ? error.message : "unknown error");
    return json({ success: false, message: glp1IntakeCopy[locale].api.error }, 500);
  }
}
