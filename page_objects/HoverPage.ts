import { expect, Locator, Page } from "@playwright/test";

export class HoverPage {
    readonly page: Page;
    readonly hoverImages: Locator;
    readonly hoverText: Locator;
    readonly viewProfileLinks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.hoverImages = page.locator('.figure');
        this.viewProfileLinks = page.locator('//a[contains(@href, "/users/")]');
    }

    async gotoHoverPage() {
        await this.page.goto('/hovers')
    }

    async getHoverImageAndText(name: string[]) {
        const imageCount = await this.hoverImages.count();

        for (let index = 0; index < imageCount; index++) {
            const specificImage = this.hoverImages.nth(index);
            await specificImage.hover();
            await expect(this.page.locator('h5').nth(index)).toContainText(name[index]);

            if (index == (imageCount - 1)) {
                await this.viewProfileLinks.last().click();
            }
        }
    }

}
