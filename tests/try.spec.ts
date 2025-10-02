import{test, expect} from '@playwright/test';

test.beforeEach(async ({page})=>{
    await page.goto('http://amazon.in/');
})

test.describe('new test', ()=>{

test.beforeEach(async ({page})=>{
await page.locator('//span[@id="nav-cart-count"]').click();
await page.locator('//a[@id="nav-logo-sprites"]').click()
const storename = await
})

test ('test1', async({page})=>{
const dropdown = await page.locator('#searchDropdownBox');

await dropdown.selectOption({value: 'search-alias=amazon-devices'});

const device = await dropdown.inputValue();
console.log('the selected value is', device);
expect(device).toBe('search-alias=amazon-devices');


})

test ('test2' , async({page})=>{

await page.goto('https://www.amazon.in/');

await page.locator('//input[@id="twotabsearchtextbox"]').fill('iphone')

})

})