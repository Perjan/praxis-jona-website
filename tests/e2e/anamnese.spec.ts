import { expect, test } from "@playwright/test";

async function mockAnamneseApi(page: any) {
  await page.route("**/api/anamnese", async (route: any) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: true }),
    });
  });
}

async function setDateInput(page: any, value: string) {
  await page.locator('input[name="patient.birthdate"]').evaluate((input: HTMLInputElement, nextValue: string) => {
    const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")?.set;
    setter?.call(input, nextValue);
    input.dispatchEvent(new Event("input", { bubbles: true }));
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }, value);
}

async function drawSignature(page: any) {
  await page.locator("canvas").evaluate((canvas: HTMLCanvasElement) => {
    canvas.dispatchEvent(
      new CustomEvent("signature-pad:test-signature", {
        detail:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAFgwJ/lY6N9wAAAABJRU5ErkJggg==",
        bubbles: true,
      })
    );
    const rect = canvas.getBoundingClientRect();
    const points = [
      [rect.left + 30, rect.top + 80],
      [rect.left + 160, rect.top + 110],
      [rect.left + 260, rect.top + 70],
    ];
    const dispatch = (type: string, x: number, y: number) => {
      if (typeof PointerEvent !== "undefined") {
        canvas.dispatchEvent(
          new PointerEvent(type, {
            bubbles: true,
            cancelable: true,
            pointerId: 1,
            pointerType: "pen",
            isPrimary: true,
            clientX: x,
            clientY: y,
            pressure: type === "pointerup" ? 0 : 0.5,
          })
        );
      }

      const mouseType = type === "pointerdown" ? "mousedown" : type === "pointermove" ? "mousemove" : "mouseup";
      canvas.dispatchEvent(
        new MouseEvent(mouseType, {
          bubbles: true,
          cancelable: true,
          clientX: x,
          clientY: y,
        })
      );

    };
    dispatch("pointerdown", points[0][0], points[0][1]);
    dispatch("pointermove", points[1][0], points[1][1]);
    dispatch("pointermove", points[2][0], points[2][1]);
    dispatch("pointerup", points[2][0], points[2][1]);
  });
}

async function completeGermanHappyPath(page: any) {
  await page.locator('input[name="patient.name"]').click();
  await page.locator('input[name="patient.name"]').type("Max Mustermann");
  await setDateInput(page, "1985-04-12");
  await page.locator('input[name="patient.weight"]').fill("82");
  await page.locator('input[name="patient.height"]').fill("180");
  await page.locator('input[name="patient.occupation"]').fill("Ingenieur");
  await page.locator('input[name="patient.email"]').fill("max@example.com");
  await page.getByRole("button", { name: "Weiter" }).click();

  await page.getByLabel(/gesundheitliche Beschwerden/).fill("Müdigkeit");
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByLabel("gut").click();
  await page.getByLabel("mediterran").click();
  await page.getByLabel("nein").first().click();
  await page.getByLabel("gelegentlich").click();
  await page.getByRole("radio", { name: "mittel", exact: true }).click();
  await page.getByRole("button", { name: "Weiter" }).click();

  await page.getByLabel("Männlich").click();
  await page.getByRole("button", { name: "Weiter" }).click();
  await page.getByRole("checkbox", { name: /Einwilligung/ }).click();
  await drawSignature(page);
  await page.getByRole("button", { name: "Weiter" }).click();
}

test.describe("digital anamnese", () => {
  test("German happy path submits and resets", async ({ page }) => {
    await mockAnamneseApi(page);
    await page.goto("/anamnese");

    await completeGermanHappyPath(page);
    const submitButton = page.getByRole("button", { name: "Absenden" });
    if (await submitButton.isVisible()) {
      await submitButton.click();
    }

    await expect(page.getByText("Vielen Dank!")).toBeVisible();
    await page.getByRole("button", { name: "Neuer Patient" }).click();
    await expect(page.getByLabel(/Name/)).toBeVisible();
  });

  test("English happy path renders English route", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium", "English desktop coverage only");
    await mockAnamneseApi(page);
    await page.goto("/en/anamnese");

    await expect(page.getByRole("heading", { name: "Medical History Form" })).toBeVisible();
    await page.locator('input[name="patient.name"]').click();
    await page.locator('input[name="patient.name"]').type("Jane Patient");
    await setDateInput(page, "1990-03-10");
    await page.locator('input[name="patient.weight"]').fill("65");
    await page.locator('input[name="patient.height"]').fill("170");
    await page.locator('input[name="patient.occupation"]').fill("Designer");
    await page.locator('input[name="patient.email"]').fill("jane@example.com");
    await page.getByRole("button", { name: "Next" }).click();
    await expect(page.getByRole("heading", { name: "Current Concerns & Goals" })).toBeVisible();
  });

  test("validation blocks missing required fields", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium", "Validation smoke coverage on Chromium");
    await page.goto("/anamnese");

    await page.getByRole("button", { name: "Weiter" }).click();

    await expect(page.getByText("Name muss mindestens 2 Zeichen lang sein")).toBeVisible();
    await expect(page.getByLabel(/Name/)).toHaveAttribute("aria-invalid", "true");
  });
});
