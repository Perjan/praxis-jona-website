import { expect, test } from '@playwright/test';

test.use({ colorScheme: 'dark', reducedMotion: 'reduce' });

test('TV colors and QR remain unchanged under automatic dark mode', async ({ page, browserName }) => {
  test.skip(browserName !== 'chromium', 'Automatic dark mode uses the Chromium DevTools protocol.');
  await page.goto('/tv/velto');
  const qr = page.getByRole('img', { name: /QR Code:/ });
  await expect(qr).toBeVisible();
  await page.evaluate(() => document.fonts.ready);
  // Compare rendered pixels: automatic dark mode does not change computed CSS colors.
  const normal = await qr.screenshot({ animations: 'disabled' });
  const session = await page.context().newCDPSession(page);
  await session.send('Emulation.setAutoDarkModeOverride', { enabled: true });
  const forcedDark = await qr.screenshot({ animations: 'disabled' });
  expect(forcedDark.equals(normal)).toBe(true);
  await expect(page.locator('meta[name="color-scheme"]')).toHaveAttribute('content', 'only light');
});
