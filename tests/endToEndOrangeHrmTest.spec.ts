import {test, expect} from '@playwright/test';

test('end to end Orange HRM test', async({page}) =>{

//Go to Login page
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await expect(page.getByRole('img', {name:'OrangeHRM'})).toBeVisible();

1//Login to Application

await page.getByPlaceholder('Username').fill('Admin');
await page.getByRole('textbox', {name: 'Password'}).fill('admin123');
await page.getByRole('button', {name: 'Login'}).click();
await expect(page.getByRole('heading', {name:'Dashboard'})).toBeVisible();

await page.getByRole('link', {name:'PIM'}).click();
await expect(page.getByRole('heading', {name:'PIM', exact:true})).toBeVisible();
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')


2//Add New Employee

await page.getByRole('button', {name:'Add'}).click();
await expect(page.getByText('Employee Full Name')).toBeVisible();
await page.getByRole('textbox', { name: 'First Name' }).fill('Jitesh');
await page.getByPlaceholder('Last Name').fill('verma');

const employeeID = page.locator('.oxd-input-group')
.filter({has:page.locator('label',{hasText:'Employee Id'})})
.locator('.oxd-input.oxd-input--active')

const employeeIdValue= await employeeID.inputValue();

console.log("Auto Generated EMPID:", employeeIdValue);

await page.getByRole('button', {name:'Save'}).click();

await expect(page.getByRole('heading', {name:'Personal Details'})).toBeVisible();


3//Fill the employee details

await page.getByRole('link', {name:'PIM'}).click();


await employeeID.fill(employeeIdValue);
await page.getByRole('button', {name:'Search'}).click();

const employee =  page.locator('.oxd-table-card').filter({hasText:employeeIdValue});

await expect(employee).toBeVisible({timeout:30000})

await employee.click();
await expect(page.getByRole('heading', {name:'Personal Details'})).toBeVisible();

await page.locator('.oxd-input-group')
.filter({has:page.locator('label',{hasText:"Driver's License Number"})})
.locator('.oxd-input.oxd-input--active').fill("DL123456");

await page.locator('.oxd-input-group')
.filter({has:page.locator('label',{hasText:"License Expiry Date"})})
.getByPlaceholder('yyyy-dd-mm').fill('2025-31-12');


//Alternate approach to handle the calendar

const calendar =  page.locator('.oxd-input-group')
.filter({has:page.locator('label',{hasText:"Date of Birth"})})
.getByPlaceholder('yyyy-dd-mm')

await calendar.click();

const year = '1997'
const month= 'Jan'
const day = '22'

const calendarDropdown= page.locator('.oxd-date-input-calendar')

await calendarDropdown.waitFor({state:'visible', timeout:15000});

await calendarDropdown.getByText('2026', { exact: true }).click();

await calendarDropdown.getByText(year).click();

await calendarDropdown.getByText('July', { exact: true }).click();

await calendarDropdown.getByText(month).click();

await calendarDropdown.getByText(day).click();

await expect(calendar).toHaveValue('1997-22-01');


})