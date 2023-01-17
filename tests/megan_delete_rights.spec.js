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
  await page.getByRole('row', { name: 'Select row User Adele Vance AdeleV@M365x34323490.OnMicrosoft.com Retail Allowed' }).getByRole('checkbox').click();
  await page.getByText('Delete User').click();
  await page.getByRole('button', { name: 'Delete User' }).click();
  await page.getByRole('link', { name: 'Check details.' }).click();
  // After Megan tries to delete Adele Vance, she should get a message that says the action was executed, but failed. She goes to see why.
  await expect(page.locator('#app > div.app-content > div.notification-details > div.notification-details__data > div.notification-actions > div > div.table-body > ul > div > div:nth-child(1) > span')).toHaveText('User Adele Vance failed to be deleted.');
  // According to the error message, Megan sees that she does not have the rights to delete users.
  await expect(page.locator('#app > div.app-content > div.notification-details > div.notification-details__data > div.notification-actions > div > div.table-body > ul > div > div.table-column.status > span')).toHaveText('Error: Insufficient privileges to complete the operation.');
  // Megan navigates back to the list of users to double check if Adele Vance is still in the list and truly has not been deleted.
  await page.getByTestId('svg-icon-moveTo').locator('use').click();
  // Megan makes the assertion by clicking on Adele just to make sure she wasn't deleted inspite of the error message confirmations that she shouldn't have been deleted.
  await page.getByRole('link', { name: 'Adele Vance' }).click();
  await page.getByRole('button', { name: 'close' }).click();
  // Megan asserts that the corresponding name 'Adele Vance' is displaying correctly after attempted deletion.
  await expect(page.locator('#app > div.app-content > div.user-details > div.user-details__tiles > div.detail-tile.general-info-tile > div.detail-tile__body > div > div > div > div:nth-child(1) > span')).toHaveText('Adele Vance');
});