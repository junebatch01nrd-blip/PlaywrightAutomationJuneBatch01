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

Locator: locator('oxd-table-card').filter({ hasText: '0401' })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('oxd-table-card').filter({ hasText: '0401' })

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Employee Information" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints..."
- text: Employee Id
- textbox: "0401"
- text: Employment Status -- Select --  Include Current Employees Only  Supervisor Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (1) Record Found
- table:
  - rowgroup:
    - row " Id  First (& Middle) Name  Last Name  Job Title  Employment Status  Sub Unit  Supervisor  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Id "
      - columnheader "First (& Middle) Name "
      - columnheader "Last Name "
      - columnheader "Job Title "
      - columnheader "Employment Status "
      - columnheader "Sub Unit "
      - columnheader "Supervisor "
      - columnheader "Actions"
  - rowgroup:
    - row " 0401 Jitesh verma  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0401"
      - cell "Jitesh"
      - cell "verma"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1   | import {test, expect} from '@playwright/test';
  2   | 
  3   | test('end to end Orange HRM test', async({page}) =>{
  4   | 
  5   | //Go to Login page
  6   | await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  7   | await expect(page.getByRole('img', {name:'OrangeHRM'})).toBeVisible();
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
  48  | const employee = page.locator('oxd-table-card').filter({hasText:employeeIdValue});
  49  | 
> 50  | await expect(employee).toBeVisible()
      |                        ^ Error: expect(locator).toBeVisible() failed
  51  | 
  52  | await employee.click();
  53  | await expect(page.getByRole('heading', {name:'Personal Details'})).toBeVisible();
  54  | 
  55  | await page.locator('.oxd-input-group')
  56  | .filter({has:page.locator('label',{hasText:"Driver's License Number"})})
  57  | .locator('.oxd-input.oxd-input--active').fill("DL123456");
  58  | 
  59  | await page.getByPlaceholder('yyyy-dd-mm').fill('2025-31-12');
  60  | 
  61  | 
  62  | 
  63  | 
  64  | 
  65  | 
  66  | 
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
  78  | /* 
  79  | --Firstname
  80  | page.locator('.oxd-input-group')    ------------main parent class
  81  | 
  82  | .locator('.oxd-input.oxd-input--active')---------class which u want to perform click/fill action
  83  | 
  84  | 
  85  | 
  86  | --Lastname
  87  | page.locator('.oxd-input-group')    ------------main parent class
  88  | .locator('.oxd-input.oxd-input--active')
  89  | 
  90  | --EmployeeId
  91  | page.locator('.oxd-input-group')    ------------main parent class
  92  | 
  93  | 
  94  | .locator('.oxd-input.oxd-input--active')
  95  | 
  96  | 
  97  | Search ('.oxd-input-group') -- filter with EmployeeID label
  98  | 
  99  | - Firstname 
  100 | - Lastname
  101 | - EmployeeId
  102 | 
  103 | 
  104 | await page.locator('.oxd-input-group')
  105 | .locator('.oxd-input.oxd-input--active').fill("Sample input")
  106 | 
  107 | 
  108 | */
  109 | 
  110 | 
  111 | 
  112 | 
  113 | 
  114 | 
  115 | })
```