import { test, expect } from '@playwright/test';
require('dotenv').config();
const userName = process.env.SYSKITUSERNAME;
const userPassword = process.env.SYSKITPASSWORD;

test('Adele Fails To Delete The Chronos Group Test', async ({ page }) => {
  await page.goto('https://syskit-point-e2e-task-2025.syskit365demo.com/');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Email, phone, or Skype').click();
  await page.getByPlaceholder('Email, phone, or Skype').fill(userName);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#i0118').fill(userPassword);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'No' }).click();

  // To make sure Adele can not delete the Chronos group, we must attempt to delete it in both possible ways.
  // 1) Delete the Chronos Group via the user's profile page
  await page.locator('#tooltip__groups').click();
  const searchInput = page.locator('input[aria-label="Search in the data grid"]');
  await searchInput.fill('Chronos');
  const specificItem = page.getByRole('link', { name: 'Chronos', exact: true });
  await specificItem.click();
  await page.locator('#report-action__delete-site').click();
  await page.locator('div.confirmation-box > div > div > div.dx-texteditor-input-container > input').fill('DELETE');
  await page.locator('[data-testid="generic-dialog-save"]').click();
  
  // 2) Delete the Chronos Group via selecting the checkbox in the table only
  await page.locator('#tooltip__groups').click();
  await searchInput.fill('Chronos');
  const row = page.locator('tr.dx-row.dx-data-row.dx-column-lines', { 
    has: specificItem, exact: true
  });
  const checkbox = row.getByRole('checkbox');
  await checkbox.click();
  await page.locator('#report-action__delete-site').click();
  await page.locator('div.confirmation-box > div > div > div.dx-texteditor-input-container > input').fill('DELETE');
  await page.locator('[data-testid="generic-dialog-save"]').click();

  // Now we must assert that the Chronos group was not deleted
  await page.locator('#tooltip__groups').click();
  await searchInput.fill('Chronos');
  await expect(page.getByRole('link', { name: 'Chronos', exact: true })).toBeVisible();
});