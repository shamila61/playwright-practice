//Test1 "Verify that the login page displays: Username field,password field,Login button"

import { test ,expect} from "@playwright/test";

test("Login display", async({page})=>{

    await page.goto("https://www.saucedemo.com");
    await expect(page.getByPlaceholder("Username")).toBeVisible();
    await expect(page.getByPlaceholder("Password")).toBeVisible();
    await expect(page.getByRole("button",{name:"Login"})).toBeVisible();   
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:"Login"}).click();
    console.log(await page.url());
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.locator('[data-test="title"]')).toHaveText("Products");
    const product=page.locator(".inventory_item_name");
    await expect(product).toHaveCount(6);

});





