import { test, expect } from '@playwright/test';

test.describe('Smoke Test', () => {
  const consoleErrors: string[] = [];

  test.beforeEach(async ({ page }) => {
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
  });

  test('should load the home page without console errors', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);
    expect(consoleErrors).toHaveLength(0);
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/#about$/);

    await page.getByRole('navigation').getByRole('link', { name: 'Classes' }).click();
    await expect(page).toHaveURL(/#classes$/);

    await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL(/#contact$/);
  });
});
