import { expect, test } from '@playwright/test';
import { fieldsForTool, tools, toolPath } from '../../app/free-tools/definition';

for (const locale of ['de', 'en'] as const) {
  test(`${locale}: tools are discoverable with matching metadata and language links`, async ({ page }) => {
    await page.goto(`${locale === 'en' ? '/en' : ''}/free-tools`);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(locale === 'en' ? 'Free health checks' : 'Kostenlose Gesundheits-Checks');
    for (const tool of tools) {
      await expect(page.locator(`main a[href="${toolPath(tool.kind, locale)}"]`)).toHaveCount(1);
      await page.goto(toolPath(tool.kind, locale));
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(tool.heading[locale]);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://praxisjona.de${toolPath(tool.kind, locale)}`);
      await expect(page.locator(`link[rel="alternate"][hreflang="${locale === 'en' ? 'de' : 'en'}"]`)).toHaveAttribute('href', `https://praxisjona.de${toolPath(tool.kind, locale === 'en' ? 'de' : 'en')}`);
      await expect(page.locator('body')).not.toContainText('Application error');
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      await page.goto(`${locale === 'en' ? '/en' : ''}/free-tools`);
    }
  });
  test(`${locale}: iron results, edits and reset stay local`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    const requests: string[] = [];
    page.on('request', request => requests.push(request.url() + (request.postData() ?? '')));
    await page.goto(toolPath('status', locale));
    const answers = { group: 'adult', warning: 'none', ferritin: '28.5', tsat: '18', hb: 'normal', crp: 'normal', recent: 'no', rls: 'no' };
    for (const field of fieldsForTool('status', locale)) {
      if (field.type === 'number') await page.locator(`input[name="${field.name}"]`).fill(answers[field.name]);
      else if (field.type === 'radio') await page.locator(`input[name="${field.name}"][value="${answers[field.name]}"]`).check();
    }
    await page.getByRole('button', { name: locale === 'en' ? 'View my guidance' : 'Meine Orientierung ansehen' }).click();
    await expect(page.locator('#tool-result-title')).toContainText('≤30');
    await expect(page.locator('.health-check-result')).toContainText('28.5');
    await page.locator('input[name="ferritin"]').fill('80');
    await expect(page.locator('#tool-result-title')).toHaveCount(0);
    await page.getByRole('button', { name: locale === 'en' ? 'Reset everything' : 'Alles zurücksetzen' }).click();
    await expect(page.locator('input[name="ferritin"]')).toHaveValue('');
    expect(await page.locator('form input:checked').count()).toBe(0);
    expect(await page.evaluate(() => [localStorage.length, sessionStorage.length])).toEqual([0, 0]);
    expect(requests.join('\n')).not.toMatch(/ferritin=|28\.5|tsat=|symptoms=/);
    expect(errors).toEqual([]);
  });
  test(`${locale}: emergency guidance overrides incomplete answers and booking promotion`, async ({ page }) => {
    await page.goto(toolPath('perimenopause', locale));
    await page.locator('input[name="warning"][value="emergency"]').check();
    await expect(page.locator('.health-check').getByRole('alert')).toContainText('112');
    await expect(page.locator('input[name="age"]')).toHaveCount(0);
    await expect(page.locator('header').first()).not.toBeVisible();
    await expect(page.locator('.free-tools-support')).not.toBeVisible();
    await page.getByRole('button', { name: locale === 'en' ? 'View my guidance' : 'Meine Orientierung ansehen' }).click();
    await expect(page.locator('#tool-result-title')).toBeVisible();
    await expect(page.locator('.health-check-result a')).toHaveCount(0);
    await page.getByRole('button', { name: locale === 'en' ? 'Reset everything' : 'Alles zurücksetzen' }).click();
    await expect(page.locator('header').first()).toBeVisible();
    await expect(page.locator('input[name="age"]').first()).toBeVisible();
  });
}
