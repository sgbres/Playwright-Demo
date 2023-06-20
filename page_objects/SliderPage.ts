import { expect, Locator, Page } from "@playwright/test";

export class SliderPage {
    readonly page: Page;
    readonly slider: Locator;
    readonly rangeValue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.slider = page.getByRole('slider');
        this.rangeValue = page.locator('#range');
    }

    async gotoSliderPage() {
        await this.page.goto('/horizontal_slider');
        await expect(this.slider).toBeVisible();
    }
}
