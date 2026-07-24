
import {test, expect} from '@playwright/test';

//How to Handle Uploads and Downloads....

test('File Uploads', async({page}) =>{

await page.goto('https://letcode.in/file');

await page.setInputFiles('input[type="file"]', "C:/Users/Admin/Downloads/sample.xlsx" )  //"C:\Users\Admin\Downloads\sample.xlsx"

await expect(page.getByText('Sample.xlsx')).toBeVisible();

await page.waitForTimeout(5000);


});

test('File Uploads without Input tag', async({page})=> {

await page.goto('https://trace.playwright.dev/');

const [filechooser]= await Promise.all([

page.waitForEvent('filechooser'),
await page.getByRole('button', {name: 'Select file'}).click()
]);

await filechooser.setFiles("C:/Users/Admin/Downloads/trace.zip")  //"C:\Users\Admin\Downloads\trace.zip"

await page.waitForTimeout(5000);
await expect(page.locator('.title').first()).toContainText('HandleAlert.spec.ts');


});

test('Upload Multiple Files with setInputFiles', async({page})=> {

await page.goto('https://letcode.in/file');

// Upload multiple files at once
await page.setInputFiles('input[type="file"]', [
  "C:/Users/Admin/Downloads/sample.xlsx",
  "C:/Users/Admin/Downloads/sample2.xlsx",
  "C:/Users/Admin/Downloads/sample3.xlsx"
]);

await expect(page.getByText('Sample.xlsx')).toBeVisible(); //15 sec wait 

await page.waitForTimeout(5000);

});


test('File Download', async({page})=> {

await page.goto('https://letcode.in/file');

const [download] = await Promise.all([

  page.waitForEvent('download'), //pending //fullfill //reject
  await page.getByRole('link', {name: 'Download Excel'}).click()

]);

await download.saveAs('.downloads/excel-download.xlsx');
//await download.suggestedFilename();

await page.waitForTimeout(5000);



});

