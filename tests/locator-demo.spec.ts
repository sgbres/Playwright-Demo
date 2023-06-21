import { test, expect } from '@playwright/test';
import { LargePage } from '../page_objects/LargePage';
import { DynamicControlsPage } from '../page_objects/DynamicControlsPage';
import { JQueryMenuPage } from '../page_objects/JQueryMenuPage';

test.describe('Demo Test Suite', () => {
  test.only('Locator Test', async ({ page }) => {
    const largePage = new LargePage(page);

    // steps to goto Large page and assert elements with specified text are present
    await largePage.gotoLargePage();
    await expect(largePage.siblingsElements).toContainText("25.3");
    await expect(largePage.singleSibling).toBeVisible();
    await expect(largePage.tableElements).toContainText("25.25");
  });

  test.only('Locator Test with steps', async ({ page }) => {
    const largePage = new LargePage(page);

    await test.step('Open large page', async () => {
      await largePage.gotoLargePage();
    });

    // steps to goto Large page and assert elements with specified text are present
    await test.step('Validate the siblings contain 25.3', async () => {
      await expect(largePage.siblingsElements).toContainText("25.3");
      await expect(largePage.singleSibling).toBeVisible();
    });

    await test.step('Validate the siblings contain 25.3', async () => {
      await expect(largePage.tableElements).toContainText("25.25");
    });
  });

  test('Dynamic Elements Test - Add/Remove', async ({ page }) => {
    const dynamicControlsPage = new DynamicControlsPage(page);

    // steps to click remove btn and assert checkbox disappears, its gone label should appear
    await dynamicControlsPage.gotoDynamicControlsPage();
    await dynamicControlsPage.clickRemoveButton();
    await expect(dynamicControlsPage.checkbox).toBeHidden();
    await expect(dynamicControlsPage.itsGoneLabel).toBeVisible();

    // steps to click add btn and assert checkbox appears, its back label should appear
    await dynamicControlsPage.clickAddButton();
    await expect(dynamicControlsPage.checkbox).toBeVisible();
    await expect(dynamicControlsPage.itsBackLabel).toBeVisible();
  });

  test('Dynamic Elements Test - Enable/Disable', async ({ page }) => {
    const dynamicControlsPage = new DynamicControlsPage(page);

    // steps to click enable btn and assert its enabled label should appear
    await dynamicControlsPage.gotoDynamicControlsPage();
    await dynamicControlsPage.clickEnableButton();
    await expect(dynamicControlsPage.itsEnabledLabel).toBeVisible();

    // steps to click disable btn and assert its disabled label should appear
    await dynamicControlsPage.clickDisableButton();
    await expect(dynamicControlsPage.itsDisabledLabel).toBeVisible();
  });

  test('Custom Menu Test', async ({ page }) => {

    // steps to goto menu page and download csv file, log filepath to console
    const jqueryMenuPage = new JQueryMenuPage(page);
    await jqueryMenuPage.gotoJQueryMenuPage();
    const downloadPath = await jqueryMenuPage.downloadCSVFile();

    console.log(downloadPath);
  });

});
