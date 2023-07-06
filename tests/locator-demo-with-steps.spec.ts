import { test, expect } from '@playwright/test';
import { LargePage } from '../page_objects/LargePage';
import { DynamicControlsPage } from '../page_objects/DynamicControlsPage';
import { JQueryMenuPage } from '../page_objects/JQueryMenuPage';

var downloadPath;

test.describe('Demo Test Suite With Test Steps', () => {
  test('TC_01_Dynamic Elements Test - Siblings/Table with steps', async ({ page }) => {
    const largePage = new LargePage(page);

    await test.step('Open large page', async () => {
      await largePage.gotoLargePage();
    });

    await test.step('Validate the siblings contain 25.3', async () => {
      await expect(largePage.siblingsElements).toContainText("25.3");
      await expect(largePage.singleSibling).toBeVisible();
    });

    await test.step('Validate the table contain 25.25', async () => {
      await expect(largePage.tableElements).toContainText("25.25");
    });
  });

  test('TC_02_Dynamic Elements Test - Add/Remove with steps', async ({ page }) => {
    const dynamicControlsPage = new DynamicControlsPage(page);

    await test.step('Open dynamic controls page and click "Remove" button',async () => {
      await dynamicControlsPage.gotoDynamicControlsPage();
      await dynamicControlsPage.clickRemoveButton();
    });

    await test.step('Verify the checkbox is hidden and the "It\'s gone" label is present', async () => {
      await expect(dynamicControlsPage.checkbox).toBeHidden();
      await expect(dynamicControlsPage.itsGoneLabel).toBeVisible();
    });

    await test.step('On the dynamic controls page click the "Add" button', async () => {
      await dynamicControlsPage.clickAddButton();
    });

    await test.step('Verify the checkbox is visible and the "It\'s back" label is present', async () => {
      await expect(dynamicControlsPage.checkbox).toBeVisible();
      await expect(dynamicControlsPage.itsBackLabel).toBeVisible();
    });
  });

  test('TC_03_Dynamic Elements Test - Enable/Disable with steps', async ({ page }) => {
    const dynamicControlsPage = new DynamicControlsPage(page);

    await test.step('Open dynamic controls page and click "Enable" button',async () => {
      await dynamicControlsPage.gotoDynamicControlsPage();
      await dynamicControlsPage.clickEnableButton();
    });

    await test.step('Verify the "It\'s enabled" label is visible', async () => {
      await expect(dynamicControlsPage.itsEnabledLabel).toBeVisible();
    });

    await test.step('On the dynamic controls page click the "Disable" button', async () => {
      await dynamicControlsPage.clickDisableButton();
    });

    await test.step('Verify the "It\'s disabled" label is visible', async () => {
      await expect(dynamicControlsPage.itsDisabledLabel).toBeVisible();
    }); 
    
  });

  test('TC_04_Custom Menu Test with steps', async ({ page }) => {
    const jqueryMenuPage = new JQueryMenuPage(page);


    await test.step('Open the jquery menu page', async () => {
      await jqueryMenuPage.gotoJQueryMenuPage();
    });

    await test.step('Download the csv file', async () => {
      downloadPath = await jqueryMenuPage.downloadCSVFile();
    });
    
    await test.step('Verify the downladed file path', async () => {
      console.log(downloadPath);
    });
  });

});
