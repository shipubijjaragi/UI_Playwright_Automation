import{test,expect}from '@playwright/test'

import {boom} from '../utils/flipkart'

test.beforeEach(async({page})=>{

await page.goto('https://www.amazon.in/');

})
test.describe('the flow1', async()=>{
test('hello',async({page})=>{

    const coldplay = new boom(page);
    await coldplay.form()
})
test('hello1',async({page})=>{

    const coldplay = new boom(page);
    await coldplay.form()
})


})
