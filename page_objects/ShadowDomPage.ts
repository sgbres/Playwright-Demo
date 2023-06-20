import { test, Locator, Page, expect } from "@playwright/test";

export class ShadowDomPage {
    readonly page: Page;
    readonly pageHeader: Locator;
    readonly hiddenText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeader = page.getByRole('heading', { name: 'Simple template' });
        this.hiddenText = page.locator('my-paragraph');
    }

    async gotoShadowDomPage() {
        await this.page.goto('/shadowdom');
        await expect(this.pageHeader).toBeVisible();
    }
}
