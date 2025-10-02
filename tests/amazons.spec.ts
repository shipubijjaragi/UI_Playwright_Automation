import{test, expect} from '@playwright/test'
import {shiva} from '../utils/amazon'

test.beforeEach(async({page})=>{

await page.goto('https://www.amazon.in/')


})

test('test1', async({page})=>{
const method1 = new shiva(page);

await method1.searchMobile()
// await method1.button1.click()

//login changes added

//no oringin
//upstream
})
