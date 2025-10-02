import{test, Expect, expect} from '@playwright/test';


test.beforeEach(async ({page})=>{

        await page.goto('https://www.amazon.in/');
    
    });
test ('dropdown', async({page})=>{

    

    

        const dropdownval = await page.locator('#searchDropdownBox');
        await dropdownval.selectOption({value: 'search-alias=fashion'});


        const currentValue = await dropdownval.inputValue();
        console.log('the value is', currentValue);
       expect(currentValue).toBe('search-alias=fashion');

   
});