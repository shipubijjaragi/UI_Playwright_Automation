import{test} from '@playwright/test';


test.beforeEach(async({page})=>{
  await  page.goto('http://localhost:4200/')
  
});



test.describe('suite 1',()=>{
    test.beforeEach(async({page})=>{
    await page.getByText('Forms').click();
  });

    test('form layouts', async ({page})=>{

    await page.getByText('Form Layouts').click();
  });


  test('date picker', async ({page})=>{

    await page.getByText('Datepicker').click();
  });


});