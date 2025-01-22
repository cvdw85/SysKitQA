class DataGridPage {
    constructor(page) {
        this.page = page;
        // Locators

        // Microsoft login buttons and input fields
        this.searchItem = 'Chronos';
        this.microsoftSignInButton = this.page.getByRole('button', { name: 'Sign in' });
        this.userNameInputField = this.page.getByPlaceholder('Email, phone, or Skype');
        this.loginNextButton = this.page.getByRole('button', { name: 'Next' });
        this.userPasswordInputField = this.page.locator('#i0118');
        this.noButton = this.page.getByRole('button', { name: 'No' });
    
        // Left Side Bar Options Panel
        this.teamsAndGroupsOption = this.page.locator('#tooltip__groups');

        // Top Mid Toolbar
        this.searchInputField = this.page.locator('input[aria-label="Search in the data grid"]');

        // Table Row Items
        this.searchItemInTable = this.page.getByRole('link', { name: this.searchItem, exact: true });
        this.getItemRelativeRow = this.page.locator('tr.dx-row.dx-data-row.dx-column-lines', { 
            has: this.searchItemInTable, exact: true
          });
        this.getItemRelativeCheckbox = this.getItemRelativeRow.getByRole('checkbox');

        // Right Panel Action Panel
        this.deleteOptionButton = page.locator('#report-action__delete-site');
        this.confirmDeletionInputField = page.locator('div.confirmation-box > div > div > div.dx-texteditor-input-container > input');
        this.confirmDeleteButton = page.locator('[data-testid="generic-dialog-save"]');
    }
  
    // Actions
    async visit(home){
        await this.page.goto(home);
    }

    async microsoftLogin(userName, userPassword) {
        await this.microsoftSignInButton.click();
        await this.userNameInputField.click();
        await this.userNameInputField.fill(userName);
        await this.loginNextButton.click();
        await this.userPasswordInputField.click();
        await this.userPasswordInputField.fill(userPassword);
        await this.microsoftSignInButton.click();
        await this.noButton.click();
    }

    async clickTeamsAndGroupsOption() {
        await this.teamsAndGroupsOption.click();
    }

    async searchForItem(searchItem) {
        await this.searchInputField.fill(searchItem);
        await this.page.waitForTimeout(500); // Wait for search results to load
    }
  
    async clickSearchItemInTable() {
        await this.searchItemInTable.click();
    }

    async clickCheckboxForSearchItem() {
        await this.getItemRelativeCheckbox.click();
    }

    async clickDeleteOptionButton() {
        await this.deleteOptionButton.click();
    }

    async enterDeleteConfirmationText() {
        await this.confirmDeletionInputField.fill('DELETE');
    }

    async clickConfirmDeleteButton() {
        await this.confirmDeleteButton.click();
    }
  }
  
  module.exports = DataGridPage;