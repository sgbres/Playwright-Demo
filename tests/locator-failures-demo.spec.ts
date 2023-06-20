import { test, expect } from '@playwright/test';
import { DynamicControlsPage } from '../page_objects/DynamicControlsPage';

test.describe('Failures Test Suite', () => {
  test.skip('Soft & Fast Fail Test', async ({ page }) => {
    const dynamicControlsPage = new DynamicControlsPage(page);

    // steps to click remove btn and assert checkbox disappears, its gone label should appear
    await dynamicControlsPage.gotoDynamicControlsPage();

    // soft assertion for checkbox 'checked' state
    await expect.soft(dynamicControlsPage.checkbox).toBeChecked()

    // continue with test
    await dynamicControlsPage.clickRemoveButton();
    await expect(dynamicControlsPage.checkbox).toBeHidden();
    await expect(dynamicControlsPage.itsGoneLabel).toBeVisible();

    // steps to click add btn and assert checkbox appears, its back label should appear
    await dynamicControlsPage.clickAddButton();
    await expect(dynamicControlsPage.checkbox).toBeVisible();

    // fail fast as add button is not attached, final assertion not tested
    await expect(dynamicControlsPage.addButton).toBeAttached();
    await expect(dynamicControlsPage.itsBackLabel).toBeVisible();
  });

});
