import { test, expect } from '@playwright/test';

test('Handle Radio buttons', async ({ page }) => {

//How to Handle radios

await page.goto('https://letcode.in/radio');

//select radio

await page.locator('#yes').check();  //diffrence between click and check

const isCheckedYes =await page.locator('#yes').isChecked(); //return result either true or false
const isCheckedNo =await page.locator('#no').isChecked(); //return result either true or false

console.log(isCheckedYes);
console.log(isCheckedNo);

await expect(page.locator('#yes')).toBeChecked();

await page.locator('#no').check(); 
const isCheckedNoAfterChecked =await page.locator('#no').isChecked();  //return result either true or false
console.log(isCheckedNoAfterChecked);
await expect(page.locator('#no')).toBeChecked();


});

//How to handle checkboxes

test('verify checkbox selection', async({page}) =>{


await page.goto('https://letcode.in/radio');

await page.getByLabel('Remember me').uncheck();
await expect(page.getByLabel('Remember me')).not.toBeChecked();

await page.getByLabel('I agree to the Fake terms and conditions').check();

await expect(page.getByLabel('I agree to the Fake terms and conditions')).toBeChecked();

console.log(await page.locator('#maybe').isDisabled());
console.log(await page.locator('#maybe').isEnabled());


});


