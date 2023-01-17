import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://syskit-point-e2e-test.syskit365demo.com/');
  await page.goto('https://syskit-point-e2e-test.syskit365demo.com/#/');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Email, phone, or Skype').click();
  await page.getByPlaceholder('Email, phone, or Skype').fill('meganb@M365x34323490.onmicrosoft.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#i0118').fill('q989nxOYcB');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'No' }).click();
  await page.getByTestId('users').click();
  await page.getByRole('button', { name: 'close' }).click();
  await page.getByRole('textbox', { name: 'Search in the data grid' }).click();
  await page.getByRole('textbox', { name: 'Search in the data grid' }).fill('megan');
  await page.getByRole('link', { name: 'Megan Bowen' }).click();
  await page.getByRole('button', { name: 'close' }).click();
  // Megan checks her name to make sure she is looking at her profile summary.
  await expect(page.locator('#app > div.app-content > div.user-details > div.user-details__tiles > div.detail-tile.general-info-tile > div.detail-tile__body > div > div > div > div:nth-child(1) > span')).toHaveText('Megan Bowen');
  // Megan checks her roles to make sure she has the 'Global Reader' role assigned to her.
  await expect(page.locator('#app > div.app-content > div.user-details > div.user-details__tiles > div.detail-tile.general-info-tile > div.detail-tile__body > div > div > div > div:nth-child(8) > span')).toHaveText('Global Reader');
});