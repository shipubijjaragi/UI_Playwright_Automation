import{test, expect} from '@playwright/test';
test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/')

})


test.describe('suite 1',()=>{
test.beforeEach( async({page})=>{
    await page.getByText('Forms').click();
});
test('test1', async({page})=>{
await page.getByText('Form Layout').click();

});
test('test2', async({page})=>{
await page.getByText('DatePicker').click();

});


});