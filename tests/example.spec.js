// @ts-check
const { test } = require('@playwright/test');

test('TATERSALL', async ({ page }) => {
  await page.goto('https://getcar.cl/catalogo')
  await page.waitForTimeout(2000);
  const titlesTATERSALL = await page.locator('//div[contains(@class,\'product-detail\')]//h5').allInnerTexts()
  const pricesTATERSALL = await page.locator('//div[contains(@class,\'btn-container\')]//h5').allInnerTexts();
  const activitysTATERSALL = await page.locator('//div[contains(@class,\'btn-container\')]//span').allInnerTexts();
  // const immediateDeliveryTATERSALL = await page.locator('//div[contains(@class,\'btn-container\')]//span[contains(@class,\'btn btn-info text-white py-1 btn-sm rounded-pill\')]').allInnerTexts();
  const autosTATERSALL = [];
  titlesTATERSALL.map((title,index) => {
      const auto = {
        titulo : titlesTATERSALL[index],
        precio : pricesTATERSALL[index],
        actividad : activitysTATERSALL[index]
      };
    autosTATERSALL.push(auto);
  })
  console.log(autosTATERSALL)
}); 

test('TRIPP', async ({ page }) => {
  await page.goto('https://tripp.cl/10-renting-autos-nuevos')
  await page.waitForTimeout(2000);
  const titlesTRIPP = await page.locator('//div[contains(@class,\'thumbnail-container\')]//h2').allInnerTexts();
  const pricesTRIPP= await page.locator('//div[contains(@class,\'product-price\')]//span[contains(@class,\'prede2\')]').allInnerTexts();
  const activitysTRIPP = await page.locator('//div[contains(@class,\'ultripp\')]//span').allInnerTexts();
  const autosTRIPP = [];
  titlesTRIPP.map((titleT,index) => {
      const auto = {
        titles : titlesTRIPP[index],
        precio : pricesTRIPP[index],
        actividad : activitysTRIPP[index]
      };
    autosTRIPP.push(auto);
  })
  console.log(autosTRIPP)
}); 