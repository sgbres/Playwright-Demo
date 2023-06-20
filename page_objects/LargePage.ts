import { expect, Locator, Page } from '@playwright/test';

export class LargePage {
    readonly page: Page;
    readonly siblingsElements: Locator;
    readonly tableElements: Locator;
    readonly singleSibling: Locator;

    constructor(page: Page) {
        this.page = page;
        this.siblingsElements = page.locator('#siblings');
        this.tableElements = page.locator('//table[@id="large-table"]');
        this.singleSibling = page.locator('#siblings').getByText('25.3');
    }

    async gotoLargePage() {
        await this.page.goto('/large');
    }
}
