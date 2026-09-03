import { expect, test, type Page } from "@playwright/test";

const signature =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAFgwJ/lY6N9wAAAABJRU5ErkJggg==";

async function setDate(page: Page, name: string, value: string) {
  await page.locator(`input[name="${name}"]`).evaluate((input: HTMLInputElement, nextValue: string) => {
    const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
    setter?.call(input, nextValue);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }, value);
}

async function drawSignature(page: Page) {
  await page.locator("canvas").evaluate((canvas: HTMLCanvasElement, value: string) => {
    canvas.dispatchEvent(new CustomEvent("signature-pad:test-signature", { detail: value, bubbles: true }));
    const rect = canvas.getBoundingClientRect();
    const eventOptions = (x: number, y: number) => ({
      bubbles: true,
      cancelable: true,
      pointerId: 1,
      pointerType: "pen",
      isPrimary: true,
      clientX: x,
      clientY: y,
      pressure: 0.5,
    });
    canvas.dispatchEvent(new PointerEvent("pointerdown", eventOptions(rect.left + 25, rect.top + 55)));
    canvas.dispatchEvent(new PointerEvent("pointermove", eventOptions(rect.left + 130, rect.top + 85)));
    canvas.dispatchEvent(new PointerEvent("pointermove", eventOptions(rect.left + 245, rect.top + 45)));
    canvas.dispatchEvent(new PointerEvent("pointerup", eventOptions(rect.left + 245, rect.top + 45)));
  }, signature);
}

async function mockSubmission(page: Page) {
  await page.route("**/api/glp1-intake", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: true, submissionId: "e2e-submission-reference", message: "ok" }),
    });
  });
}

async function fillPatient(page: Page, locale: "de" | "en") {
  await page.getByLabel(locale === "de" ? "Vollständiger Name" : "Full name").fill("Test Patient");
  await setDate(page, "patient.birthdate", "1985-04-12");
  await page.getByLabel(locale === "de" ? "E-Mail-Adresse" : "Email address").fill("patient@example.com");
  await page.getByLabel(locale === "de" ? "Telefonnummer" : "Phone number").fill("+49 160 1234567");
}

test.describe("GLP-1 intake", () => {
  test("localized landing exposes both intake paths and locale switch", async ({ page }) => {
    await page.goto("/glp-1-check");
    await expect(page.getByRole("heading", { name: "GLP-1-Behandlung medizinisch prüfen lassen." })).toBeVisible();
    await expect(page.getByRole("link", { name: "Fragebogen starten" }).first()).toHaveAttribute("href", "/glp-1-check/new");
    await expect(page.getByRole("link", { name: "Ich bin bereits in Behandlung" }).first()).toHaveAttribute("href", "/glp-1-check/follow-up");
    await page.getByRole("link", { name: "Switch to English" }).click();
    await expect(page).toHaveURL(/\/en\/glp-1-check$/);
    await expect(page.getByRole("heading", { name: "Have your GLP-1 treatment medically reviewed." })).toBeVisible();
  });

  test("German new-patient flow submits all six steps", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium", "Full new-patient path runs once on desktop Chromium");
    await mockSubmission(page);
    await page.goto("/glp-1-check/new");
    await fillPatient(page, "de");
    await page.getByRole("button", { name: "Weiter" }).click();

    await page.getByLabel("Größe (cm)").fill("175");
    await page.getByLabel("Gewicht (kg)").fill("95");
    await page.locator('input[name="answers.previousWeightLossAttempts"][value="no"]').check();
    await page.getByRole("button", { name: "Weiter" }).click();

    for (const name of [
      "pregnantOrBreastfeeding",
      "diabetes",
      "glucoseLoweringMedication",
      "pancreatitisOrGallbladderDisease",
      "severeGastrointestinalDisease",
      "kidneyOrLiverDisease",
      "eyeComplications",
      "thyroidCancerOrMen2History",
      "allergiesOrPriorIntolerance",
    ]) {
      await page.locator(`input[name="answers.${name}"][value="no"]`).check();
    }
    await page.getByRole("button", { name: "Weiter" }).click();
    await page.getByLabel("Ihre Behandlungsziele").fill("Gesund und nachhaltig Gewicht reduzieren.");
    await page.getByRole("button", { name: "Weiter" }).click();
    await expect(page.getByText("Test Patient")).toBeVisible();
    await page.getByRole("button", { name: "Weiter" }).click();
    await page.getByRole("checkbox", { name: /Einwilligung zur Verarbeitung/ }).check();
    await drawSignature(page);
    await page.getByRole("button", { name: "Verbindlich absenden" }).click();
    await expect(page.getByRole("heading", { name: "Vielen Dank für Ihre Angaben." })).toBeVisible();
    await expect(page.getByText("e2e-submission-reference")).toBeVisible();
  });

  test("English follow-up supports a free-text dose-change request", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium", "Full follow-up path runs once on desktop Chromium");
    await mockSubmission(page);
    await page.goto("/en/glp-1-check/follow-up");
    await fillPatient(page, "en");
    await page.getByRole("button", { name: "Next" }).click();

    await page.getByLabel("Current GLP-1 medication").fill("Medication as prescribed");
    await page.getByLabel("Current dose").fill("current pen setting");
    await page.getByLabel("Frequency of use").fill("once weekly");
    await setDate(page, "answers.treatmentStartDate", "2026-01-10");
    await setDate(page, "answers.mostRecentDoseDate", "2026-08-28");
    await page.getByRole("button", { name: "Next" }).click();

    await page.locator('input[name="answers.doseRequest"][value="increase"]').check();
    await page.getByLabel("Requested dose").fill("next prescribed step");
    await page.getByLabel("Reason for the requested change").fill("Appetite effect has reduced.");
    await page.getByRole("button", { name: "Next" }).click();

    await page.getByLabel("Current weight (kg)").fill("82");
    await page.getByLabel("How has your weight changed?").fill("Weight has decreased gradually.");
    await page.locator('input[name="answers.appetiteEffect"][value="returning"]').check();
    await page.locator('input[name="answers.missedDoses"][value="no"]').check();
    await page.getByLabel("Your treatment goals").fill("Continue steady progress.");
    await page.getByRole("button", { name: "Next" }).click();

    await page.locator('input[name="answers.sideEffectSeverity"][value="none"]').check();
    await page.locator('input[name="answers.pregnancyStatus"][value="not_applicable"]').check();
    await page.getByRole("button", { name: "Next" }).click();
    await expect(page.getByText("next prescribed step")).toBeVisible();
    await page.getByRole("checkbox", { name: /Consent to health-data processing/ }).check();
    await drawSignature(page);
    await page.getByRole("button", { name: "Submit securely" }).click();
    await expect(page.getByRole("heading", { name: "Thank you for your information." })).toBeVisible();
  });

  test("under-18 patient stops before health questions", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium", "Age-stop behavior runs once on Chromium");
    await page.goto("/glp-1-check/new");
    await page.getByLabel("Vollständiger Name").fill("Junge Person");
    await setDate(page, "patient.birthdate", "2012-01-01");
    await page.getByLabel("E-Mail-Adresse").fill("person@example.com");
    await page.getByLabel("Telefonnummer").fill("+49 160 1234567");
    await page.getByRole("button", { name: "Weiter" }).click();
    await expect(page.getByRole("heading", { name: "Dieser Fragebogen ist für Erwachsene vorgesehen." })).toBeVisible();
    await expect(page.getByLabel("Größe (cm)")).toHaveCount(0);
  });

  test("mobile shell has accessible progress, sticky controls, and session-only state", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile-webkit", "Mobile behavior runs on the mobile project");
    await page.goto("/en/glp-1-check/new");
    await expect(page.getByRole("progressbar", { name: "Step 1 of 6" })).toBeVisible();
    const toolbar = page.getByTestId("glp1-bottom-toolbar");
    await expect(toolbar).toBeVisible();
    await expect(toolbar.getByRole("button", { name: "Back" })).toBeDisabled();
    await page.getByLabel("Full name").fill("Temporary Patient");
    await expect(page.evaluate(() => Object.keys(localStorage).filter((key) => key.toLowerCase().includes("glp")))).resolves.toEqual([]);
    await page.reload();
    await expect(page.getByLabel("Full name")).toHaveValue("");
  });
});
