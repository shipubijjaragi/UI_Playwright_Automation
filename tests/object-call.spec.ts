
import{test, expect} from '@playwright/test';
import {NavigationPage} from '../utils/methods'
test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/')

})


test('test1', async({page})=>{

  const navigatePage = new NavigationPage(page);
 await navigatePage.Formlayoutpage()

})
