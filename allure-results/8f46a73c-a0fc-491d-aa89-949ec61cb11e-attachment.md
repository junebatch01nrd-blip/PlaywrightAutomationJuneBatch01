# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: endToEndOrangeHrmTest.spec.ts >> end to end Orange HRM test
- Location: tests\endToEndOrangeHrmTest.spec.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('img', { name: 'OrangeHRM' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByRole('img', { name: 'OrangeHRM' })

```

# Test source

```ts
  1   | import {test, expect} from '@playwright/test';
  2   | 
  3   | test('end to end Orange HRM test', async({page}) =>{
  4   | 
  5   | //Go to Login page
  6   | await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
> 7   | await expect(page.getByRole('img', {name:'OrangeHRM'})).toBeVisible();
      |                                                         ^ Error: expect(locator).toBeVisible() failed
  8   | 
  9   | 1//Login to Application
  10  | await page.getByPlaceholder('Username').fill('Admin');
  11  | await page.getByRole('textbox', {name: 'Password'}).fill('admin123');
  12  | await page.getByRole('button', {name: 'Login'}).click();
  13  | await expect(page.getByRole('heading', {name:'Dashboard'})).toBeVisible();
  14  | 
  15  | await page.getByRole('link', {name:'PIM'}).click();
  16  | await expect(page.getByRole('heading', {name:'PIM', exact:true})).toBeVisible();
  17  | await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
  18  | 
  19  | 
  20  | 2//Add New Employee
  21  | 
  22  | await page.getByRole('button', {name:'Add'}).click();
  23  | await expect(page.getByText('Employee Full Name')).toBeVisible();
  24  | await page.getByRole('textbox', { name: 'First Name' }).fill('Jitesh');
  25  | await page.getByPlaceholder('Last Name').fill('verma');
  26  | 
  27  | const employeeID = page.locator('.oxd-input-group')
  28  | .filter({has:page.locator('label',{hasText:'Employee Id'})})
  29  | .locator('.oxd-input.oxd-input--active')
  30  | 
  31  | const employeeIdValue= await employeeID.inputValue();
  32  | 
  33  | console.log("Auto Generated EMPID:", employeeIdValue);
  34  | 
  35  | await page.getByRole('button', {name:'Save'}).click();
  36  | 
  37  | await expect(page.getByRole('heading', {name:'Personal Details'})).toBeVisible();
  38  | 
  39  | 
  40  | 3//Fill the employee details
  41  | 
  42  | await page.getByRole('link', {name:'PIM'}).click();
  43  | 
  44  | 
  45  | await employeeID.fill(employeeIdValue);
  46  | await page.getByRole('button', {name:'Search'}).click();
  47  | 
  48  | const employee =  page.locator('.oxd-table-card').filter({hasText:employeeIdValue});
  49  | 
  50  | await expect(employee).toBeVisible({timeout:30000})
  51  | 
  52  | await employee.click();
  53  | await expect(page.getByRole('heading', {name:'Personal Details'})).toBeVisible();
  54  | 
  55  | await page.locator('.oxd-input-group')
  56  | .filter({has:page.locator('label',{hasText:"Driver's License Number"})})
  57  | .locator('.oxd-input.oxd-input--active').fill("DL123456");
  58  | 
  59  | await page.locator('.oxd-input-group')
  60  | .filter({has:page.locator('label',{hasText:"License Expiry Date"})})
  61  | .getByPlaceholder('yyyy-dd-mm').fill('2025-31-12');
  62  | 
  63  | const dupelementCount = await page.locator('.oxd-input-group')
  64  | .locator('.oxd-input.oxd-input--active').count();
  65  | 
  66  | console.log(dupelementCount);
  67  | 
  68  | 
  69  | 
  70  | 
  71  | 
  72  | 
  73  | 
  74  | 
  75  | 
  76  | 
  77  | 
  78  | 
  79  | 
  80  | 
  81  | 
  82  | 
  83  | 
  84  | 
  85  | /* 
  86  | --Firstname
  87  | page.locator('.oxd-input-group')    ------------main parent class
  88  | 
  89  | .locator('.oxd-input.oxd-input--active')---------class which u want to perform click/fill action
  90  | 
  91  | 
  92  | 
  93  | --Lastname
  94  | page.locator('.oxd-input-group')    ------------main parent class
  95  | .locator('.oxd-input.oxd-input--active')
  96  | 
  97  | --EmployeeId
  98  | page.locator('.oxd-input-group')    ------------main parent class
  99  | 
  100 | 
  101 | .locator('.oxd-input.oxd-input--active')
  102 | 
  103 | 
  104 | Search ('.oxd-input-group') -- filter with EmployeeID label
  105 | 
  106 | - Firstname 
  107 | - Lastname
```