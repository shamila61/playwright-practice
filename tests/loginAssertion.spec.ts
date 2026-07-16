import {test,expect} from '@playwright/test';

test ('Login ', async ({page}) => {
    await page.goto("https://www.saucedemo.com");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});


/* import {test, expect} from 'playwright/test';

test('Dashboard',async ({page})=> {


    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
    await expect(page.locator('#username')).toHaveValue('Shamila');
    await expect(page.getByRole('button',{name:'Submit'})).toBeDisabled();






});
*/

test.beforeEach(async({page})=> {
    await page.goto("https://www.example.com");
});

test('Login', async({page}) =>{

    await page.getByPlaceholder("Username").fill("user");
    await page.getByPlaceholder("Password").fill("password");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL("https://www.example.com/dashboard");
});

test('Logout', async({page})=>{
    await page.getByPlaceholder("Username").fill("user");
    await page.getByPlaceholder("Password").fill("password");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL("https://www.example.com/dashboard");
    await page.getByRole("button",{name:"Logout"}).click()
    await expect(page).toHaveURL("https://www.example.com")
});
