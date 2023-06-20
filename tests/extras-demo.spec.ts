import { test, expect } from '@playwright/test';
import { HoverPage } from '../page_objects/HoverPage';
import { SliderPage } from '../page_objects/SliderPage';
import { ShadowDomPage } from '../page_objects/ShadowDomPage';

const userNames = ['name: user1', 'name: user2', 'name: user3']

test.describe('Extras Test Suite', () => {
  test('Hover Test', async ({ page }) => {
    const hoverPage = new HoverPage(page);

    // steps to hover image and get text and click last view profile link
    await hoverPage.gotoHoverPage();
    await hoverPage.getHoverImageAndText(userNames);

    // asserts page navigates to the users page
    await expect(page).toHaveURL(/\/users/);
  });

  // test.('Horizontal Slider Test', async ({ page }) => {
  //   const sliderPage = new SliderPage(page);

  //   // steps to interact with slider values of 0, 1.5, 4, and 5
  //   await sliderPage.gotoSliderPage();
  // });

  test('Shadow Dom Test', async ({ page }) => {
    const shadowDomPage = new ShadowDomPage(page);

    // steps to get text from shadow dom element
    await shadowDomPage.gotoShadowDomPage();
    expect(shadowDomPage.hiddenText.first()).toContainText('My default text');
  });

});
