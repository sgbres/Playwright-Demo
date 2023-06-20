import { expect, Locator, Page } from "@playwright/test";

export class JQueryMenuPage {
    readonly page: Page;
    readonly enabledLink: Locator;
    readonly downloadsLink: Locator;
    readonly csvLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.enabledLink = page.getByRole('link', { name: 'Enabled' });
        this.downloadsLink = page.getByRole('link', { name: 'Downloads' });
        this.csvLink = page.getByRole('link', { name: 'CSV' });
    }

    async gotoJQueryMenuPage() {
        await this.page.goto('/jqueryui/menu');
        await expect(this.enabledLink).toBeVisible();
    }

    async clickEnabledLink() {
        await this.enabledLink.click();
    }

    async clickDownloadsLink() {
        await this.downloadsLink.click();
    }

    async clickCsvLink() {
        await this.csvLink.click();
    }

    async downloadCSVFile() {
        const downLoadPromise = this.page.waitForEvent('download');

        await this.clickEnabledLink();
        await this.clickDownloadsLink();
        await this.clickCsvLink();

        const download = await downLoadPromise;

        return download.path();
    }
}
