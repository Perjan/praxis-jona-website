import { expect, test } from '@playwright/test';

for (const viewport of [
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1180, height: 820 },
  { width: 1279, height: 800 },
]) {
  test(`hamburger menu opens and closes at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/');
    await page.getByRole('button', { name: 'Open main menu', exact: true }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog.getByRole('link', { name: 'Team', exact: true })).toBeVisible();
    await expect(dialog.getByRole('link', { name: 'Team', exact: true })).toBeInViewport();
    await dialog.getByRole('button', { name: 'Close main menu', exact: true }).click();
    await expect(page.getByRole('button', { name: 'Close main menu', exact: true })).toBeHidden();
  });
}
