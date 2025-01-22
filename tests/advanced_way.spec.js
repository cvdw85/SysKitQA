import { test, expect } from '@playwright/test';
const DataGridPage = require('../pages/DataGridPage');
require('dotenv').config();
const home = 'https://syskit-point-e2e-task-2025.syskit365demo.com/';
const userName = process.env.SYSKITUSERNAME;
const userPassword = process.env.SYSKITPASSWORD;
const searchItem = 'Chronos';

test('Adele Fails To Delete The Chronos Group Test', async ({ page }) => {
    const dataGridPage = new DataGridPage(page);
    await dataGridPage.visit(home);
    await dataGridPage.microsoftLogin(userName, userPassword);

    // To make sure Adele can not delete the Chronos group, we must attempt to delete it in both possible ways.
    // 1) Delete the Chronos Group via the user's profile page
    await dataGridPage.clickTeamsAndGroupsOption();
    await dataGridPage.searchForItem(searchItem);
    await dataGridPage.clickSearchItemInTable();
    await dataGridPage.clickDeleteOptionButton();
    await dataGridPage.enterDeleteConfirmationText();
    await dataGridPage.clickConfirmDeleteButton();
  
    // 2) Delete the Chronos Group via selecting the checkbox in the table only
    await dataGridPage.clickTeamsAndGroupsOption();
    await dataGridPage.searchForItem(searchItem);
    await dataGridPage.clickCheckboxForSearchItem();
    await dataGridPage.clickDeleteOptionButton();
    await dataGridPage.enterDeleteConfirmationText();
    await dataGridPage.clickConfirmDeleteButton();

    // Now we must assert that the Chronos group was not deleted
    await dataGridPage.clickTeamsAndGroupsOption();
    await dataGridPage.searchForItem(searchItem);
    await expect(dataGridPage.searchItemInTable).toBeVisible();
});