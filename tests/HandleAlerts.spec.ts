
// ===== HANDLING DIALOGS AND ALERTS =====
// 
// What is an Alert?
// An alert is a popup window that displays a message to the user.
//
// Types of Dialogs in Playwright:
// 1. Simple Alert - Shows a message with an OK button
// 2. Confirmation Dialog - Shows a message with OK and Cancel buttons
// 3. Prompt Dialog - Shows a message with a text input field and OK/Cancel buttons
// 4. Modern Alert - A styled modal dialog (not a browser alert)
//
// How to Handle Dialogs:
// We can handle dialogs using two methods:
// 1. page.on('dialog') - Listens for any dialog and handles it automatically
// 2. page.waitForEvent('dialog') - Waits for a specific dialog to appear
//
// Dialog Actions:
// - dialog.accept() - Click OK button (or enter text for prompt)
// - dialog.dismiss() - Click Cancel button
// - dialog.type() - Get the type of dialog (alert, confirm, prompt, beforeunload)
// - dialog.message() - Get the message text from the dialog

import {test, expect} from '@playwright/test';


test('handle simple alert', async({page}) => {

await page.goto('/alerts');

 page.on('dialog', async dialog => {
   
    console.log(dialog.message());
    await dialog.accept();
})

await page.getByRole('button', {name: 'Simple Alert'}).click();

await page.waitForTimeout(5000);


});


test('confirm alert', async({page}) => {

await page.goto('https://letcode.in/alert');


 page.on('dialog', async dialog => {
 
    console.log(dialog.message());
    await dialog.dismiss(); //ok

})
await page.locator('#confirm').click();

await page.waitForTimeout(5000);


});

test('prompt alert', async({page}) => {

await page.goto('https://letcode.in/alert');


 page.on('dialog', async dialog => {
 
    console.log(dialog.message());
    console.log(dialog.type());
    await dialog.accept("Plywright Alert"); //ok

})
await page.locator('#prompt').click();

await page.waitForTimeout(5000);

await expect(page.locator('#myName')).toContainText('Plywright Alert');


});

test('modern alert', async({page}) => {

await page.goto('https://letcode.in/alert');

await page.getByRole('button', {name: 'Modern Alert'}).click();

console.log(await page.locator('.modal-content').textContent());

await page.locator('.modal-close').click();

});


test('handle multiple alerts in one test', async({page}) => {

await page.goto('https://letcode.in/alert');

// Single dialog handler for all types of dialogs
page.on('dialog', async dialog => {
   const dialogType = dialog.type();
   const dialogMessage = dialog.message();
   
   console.log(`===================================`);
   console.log(`Dialog Type: ${dialogType}`);
   console.log(`Dialog Message: ${dialogMessage}`);
   
   if (dialogType === 'alert') {
      console.log('Handling: Simple Alert');
      await dialog.accept();
   } 
   else if (dialogType === 'confirm') {
      console.log('Handling: Confirmation Dialog');
      await dialog.accept();
   }
   else if (dialogType === 'prompt') {
      console.log('Handling: Prompt Dialog');
      await dialog.accept('Playwright Combined Test');
   }

   console.log(`===================================`);
});

// Test 1: Simple Alert
await page.getByRole('button', {name: 'Simple Alert'}).click();
await page.waitForTimeout(2000);

// Test 2: Confirm Alert
await page.locator('#confirm').click();
await page.waitForTimeout(2000);

// Test 3: Prompt Alert
await page.locator('#prompt').click();
await page.waitForTimeout(2000);

await page.screenshot({path: 'Screenshot/screenshot.png'});
await page.locator('#prompt').screenshot({path: 'Screenshot/selector.png'});

await expect(page.locator('#3333myName')).toContainText('Playwright Combined Test');

//await page.screenshot({path:'Screenshot/screenshot.png'});
//await page.getByRole('link', {name: 'Products'}).screenshot({path:'Screenshot/products.png'});
});





