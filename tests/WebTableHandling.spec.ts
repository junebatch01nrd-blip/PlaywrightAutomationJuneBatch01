import {test, expect} from '@playwright/test'


//How to handle web tables in playwright
test('Handle web tables', async({page})=> {

await page.goto('https://the-internet.herokuapp.com/');
await page.getByRole('link', {name: 'Sortable Data Tables'}).click();

await page.waitForLoadState('networkidle');
//Count rows
 const rowCount= page.locator('#table1 tbody tr');
 console.log(await rowCount.count());

 //count column
 const columns = page.locator('#table1 thead tr th');
 console.log(await columns.count());

 //How to read data from first row

 const firstRow= page.locator('#table1 tbody tr').first();

 console.log(await firstRow.textContent());

 //validate specific cell data
 //Find the emailCell with jdoe@hotmail.com

 const emailCell = page.locator('#table1 tbody tr').filter({hasText:'jdoe@hotmail.com'})
 .locator('td').nth(2);

 const emailtext = await emailCell.textContent();
 console.log(emailtext);

 //Get the due amount from the same email row (next column after email)

 const dueCell= page.locator('#table1 tbody tr').filter({hasText:'jdoe@hotmail.com'})
 .locator('td').nth(3);

  const dueAmount = await dueCell.textContent();
  console.log(dueAmount);

  //Validation
  expect (emailtext).toContain('jdoe@hotmail.com');
  expect (dueAmount).toContain('$100.00');


})

