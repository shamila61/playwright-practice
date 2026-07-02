import { test, expect } from '@playwright/test';

test('Should log in, add item to cart, and verify badge', async ({ page }) => {
  await page.goto('https://saucedemo.com');

  // Login steps
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // 1. Click the "Add to cart" button for the backpack
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

  // 2. Locate the shopping cart badge element
  const cartBadge = page.locator('[data-test="shopping-cart-badge"]');

  // 3. Assert that the badge is visible and displays the number '1'
  await expect(cartBadge).toBeVisible();
  await expect(cartBadge).toHaveText('1');
});
