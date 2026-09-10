import { expect, test, type Page } from "@playwright/test";

type BookingEvent = {
  name: string;
  data?: Record<string, string>;
};

const previewBaseUrl = process.env.BOOKING_CTA_TEST_BASE_URL;

function testUrl(path: string) {
  return previewBaseUrl ? new URL(path, previewBaseUrl).toString() : path;
}

async function captureUmamiEvents(page: Page) {
  await page.route("https://analytics.moneycoach.ai/script.js", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/javascript",
      body: `
        window.__bookingTestEvents = [];
        window.umami = {
          track(name, data) {
            window.__bookingTestEvents.push({ name, data });
          }
        };
      `,
    });
  });
}

async function bookingEvents(page: Page): Promise<BookingEvent[]> {
  return page.evaluate(() =>
    (window as typeof window & { __bookingTestEvents?: BookingEvent[] })
      .__bookingTestEvents ?? [],
  );
}

test.describe("booking CTA attribution", () => {
  test("the homepage CTA sends exactly one complete Umami event", async ({
    page,
  }) => {
    await captureUmamiEvents(page);
    await page.goto(testUrl("/"));

    const cta = page.locator(
      'a[data-booking-cta="doctolib"][data-booking-placement="home-hero"]',
    );
    await expect(cta).toBeVisible();
    await cta.evaluate((element) =>
      element.addEventListener("click", (event) => event.preventDefault()),
    );
    await cta.click();

    await expect.poll(() => bookingEvents(page)).toEqual([
      {
        name: "booking-cta-click",
        data: {
          destination: "doctolib",
          element: "a",
          locale: "de",
          placement: "home-hero",
        },
      },
    ]);
  });

  test("the PRP appointment button sends its event before opening the dialog", async ({
    page,
  }) => {
    await captureUmamiEvents(page);
    await page.goto(testUrl("/aesthetik/prp-behandlung"));

    const cta = page.locator(
      'button[data-booking-cta="insurance-dialog"][data-booking-placement="header"]',
    ).first();
    await expect(cta).toBeVisible();
    await cta.click();

    await expect(
      page.getByRole("heading", { name: "Versicherungsart auswählen" }),
    ).toBeVisible();
    await expect.poll(() => bookingEvents(page)).toEqual([
      {
        name: "booking-cta-click",
        data: {
          destination: "insurance-dialog",
          element: "button",
          locale: "de",
          placement: "header",
        },
      },
    ]);
  });
});
