import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://syskit-point-e2e-test.syskit365demo.com/');
  await page.goto('https://syskit-point-e2e-test.syskit365demo.com/#/');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or Skype.' }).fill('meganb@M365x34323490.onmicrosoft.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#i0118').fill('q989nxOYcB');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'No' }).click();
  await page.getByTestId('users').click();
  await page.getByRole('button', { name: 'close' }).click();
  await page.getByRole('link', { name: 'Adele Vance' }).click();
  await page.getByRole('button', { name: 'close' }).click();
  // Megan visits the user 'Adele Vance' and is able to see her e-mail. Since she has the role Global Reader assigned to her, she should be able to see it.
  await expect(page.locator('#app > div.app-content > div.user-details > div.user-details__tiles > div.detail-tile.general-info-tile > div.detail-tile__body > div > div > div > div:nth-child(6) > span > span')).toHaveText('AdeleV­@M365x34323490­.OnMicrosoft­.com');
});