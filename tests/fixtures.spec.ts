import {test,expect} from '@playwright/test';
/* this test is to verify title swag labs are visible after login

test('Example test', async({page})=>{
    await page.goto("https://saucedemo.com");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:"Login"}).click();
    await expect(page).toHaveTitle("Swag Labs");
});
*/
test("Example test2",async({page})=>{
    await page.goto("https://saucedemo.com");
    await expect(page).toHaveTitle("Swag Labs");
    await expect(page.getByRole("textbox",{name:"Username"})).toBeVisible();
    await expect(page.getByRole("button",{name:"Login"})).toBeVisible();
});