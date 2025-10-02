import {test, expect} from '@playwright/test';

test('api test', async({request})=>{

    const response = await request.get('https://reqres.in/api/users/1');
    console.log(response);
    expect(response.status()).toBe(200);
    const text1 = await response.text();

    expect(text1).toContain('George')

   // expect(response).
})
test ('api 2', async({request})=>{
    const responce2 = await request.get('https://reqres.in/api/users/2');

    expect(responce2.status()).toBe(200);

    const text2 = await responce2.text();
    expect(text2).toContain('Weaver');
})

test.only ('api 3', async({request})=>{
    const responce3 = await request.get('https://cdnjs.cloudflare.com/ajax/libs/ionicons/7.4.0/ionicons/svg/arrow-back-outline.svg');

    expect(responce3.status()).toBe(200);

    const text3 = await responce3.text();
    console.log(text3)
    expect(text3).toContain('round');
})