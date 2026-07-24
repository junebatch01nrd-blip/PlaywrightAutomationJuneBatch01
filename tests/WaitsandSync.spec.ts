import {test, expect} from '@playwright/test';

//How to use waits in playwright--
//Auto waiting --- awiat, visible,enable,editable,attached
// Auto waiting available for few methods in playwright ex- click(), fill()
// page load states-- load, domcontentloaded, networkidle

test('Waits and synchronization', async({page})=> {

 await page.goto('https://automationexercise.com/');

 //check HTML content loaded or not
 await page.waitForLoadState('domcontentloaded'); //it will take very less time

 //HTML, CSS, Images, script 
 await page.waitForLoadState('load'); //

//network requests..
await page.waitForLoadState('networkidle');

// Element state waits
await page.screenshot({path:'Screenshot/screenshot.png'});
await page.getByRole('link', {name: 'Products'}).screenshot({path:'Screenshot/products.png'});
await page.locator('h2.title.text-center').waitFor({state:'visible', timeout:10000});
await page.locator('h2.title.text-center').waitFor({state:'attached', timeout:15000});
await page.locator('h2.title.text-center').waitFor({state:'hidden', timeout:15000});
await page.locator('h2.title.text-center').waitFor({state:'detached', timeout:15000});

//expect ...

await expect(page.locator('#do_action')).toBeVisible({timeout:10000});

//wait for event trigger
await page.waitForEvent('dialog')

//hard waits
await page.waitForTimeout(2000);

// wait for URL change  

 await page.getByRole('link', {name: 'Test Cases'}).click();
 await page.waitForURL('https://automationexercise.com/test_cases');
 await page.locator("a[href='#collapse1']").click();






















});