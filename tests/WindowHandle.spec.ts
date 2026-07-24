import {test, expect} from '@playwright/test';


//How to handle child window 

test('Handle child window', async({page, context})=> {

 await page.goto('https://letcode.in/window');

 console.log(page.url());

 const [newPage] = await Promise.all([

    context.waitForEvent('page'),
    await page.getByRole('button', {name: 'Open Home Page'}).click()

 ]);

 await newPage.waitForLoadState();
 console.log(newPage.url());

 await newPage.getByRole('link', {name: 'Contact'}).first().click();
 await expect(newPage.getByRole('heading', {name: 'Koushik Chatterjee'})).toBeVisible();

 await page.bringToFront();

 await newPage.close();

 await page.waitForTimeout(5000);

});