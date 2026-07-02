import { test, expect } from '@playwright/test';

test('Should sort products by price from high to low', async ({ page }) => {
  // 1. Navigate and log in
  await page.goto('https://saucedemo.com');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // 2. Select the "Price (high to low)" option from the dropdown menu
  // The 'hilo' value represents High to Low sorting
  await page.locator('[data-test="product-sort-container"]').selectOption('hilo');

  // 3. Extract the price text of the very first product item displayed
  const firstProductPrice = await page.locator('.inventory_item_price').first().innerText();

  // 4. Assert that the most expensive item ($49.99) is now at the top
  expect(firstProductPrice).toBe('$49.99');
});
