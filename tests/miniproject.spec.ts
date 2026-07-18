import {test,expect} from "@playwright/test";

test("Login and adding product to the cart", async ({page}) => {
    await page.goto("https://www.saucedemo.com");
    await expect (page.getByPlaceholder("Username")).toBeVisible();
    await expect (page.getByPlaceholder("Password")).toBeVisible();
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:"Login"}).click();
    await expect (page).toHaveURL("https://www.saucedemo.com/inventory.html");
    const product=page.locator(".inventory_item_name");
    await expect(product).toHaveCount(6);
    const names= await product.allTextContents();
    console.log(names);
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    const cartbadge=page.locator('[data-test="shopping-cart-badge"]');
    await expect(cartbadge).toHaveText("2");
    //await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText("2");
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");
    const cartproduct=page.locator(".inventory_item_name");
    await expect(cartproduct).toContainText(["Sauce Labs Backpack", "Sauce Labs Bike Light"]);
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
    await expect(cartbadge).toHaveText("1");
    await expect(cartproduct).not.toContainText("Sauce Labs Backpack");
    await page.getByRole("button",{name:"Continue Shopping"}).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();







});