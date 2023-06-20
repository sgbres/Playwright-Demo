import { expect, Locator, Page } from '@playwright/test';

export class DynamicControlsPage {
    readonly page: Page;
    readonly checkbox: Locator;
    readonly removeButton: Locator;
    readonly addButton: Locator;
    readonly enableButton: Locator;
    readonly disableButton: Locator;
    readonly itsGoneLabel: Locator;
    readonly itsBackLabel: Locator;
    readonly itsEnabledLabel: Locator;
    readonly itsDisabledLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkbox = page.getByRole('checkbox');
        this.removeButton = page.getByRole('button', { name: 'Remove' });
        this.addButton = page.getByRole('button', { name: 'Add' });
        this.enableButton = page.getByRole('button', { name: 'Enable' });
        this.disableButton = page.getByRole('button', { name: 'Disable' });
        this.itsGoneLabel = page.getByText('It\'s gone!')
        this.itsBackLabel = page.getByText('It\'s back!')
        this.itsEnabledLabel = page.getByText('It\'s enabled!')
        this.itsDisabledLabel = page.getByText('It\'s disabled!')
    }

    async gotoDynamicControlsPage() {
        await this.page.goto('/dynamic_controls');
        await expect(this.checkbox).toBeVisible();
    }

    async clickRemoveButton() {
        await this.removeButton.click();
    }

    async clickAddButton() {
        await this.addButton.click();
    }

    async clickEnableButton() {
        await this.enableButton.click();
    }

    async clickDisableButton() {
        await this.disableButton.click();
    }
}
