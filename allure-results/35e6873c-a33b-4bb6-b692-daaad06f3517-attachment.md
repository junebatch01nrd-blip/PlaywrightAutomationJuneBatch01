# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: endToEndOrangeHrmTest.spec.ts >> end to end Orange HRM test
- Location: tests\endToEndOrangeHrmTest.spec.ts:3:1

# Error details

```
Error: locator.fill: Error: strict mode violation: getByPlaceholder('yyyy-dd-mm') resolved to 2 elements:
    1) <input data-v-1f99f73c="" data-v-4a95a2e0="" placeholder="yyyy-dd-mm" class="oxd-input oxd-input--active"/> aka getByRole('textbox', { name: 'yyyy-dd-mm' }).first()
    2) <input data-v-1f99f73c="" data-v-4a95a2e0="" placeholder="yyyy-dd-mm" class="oxd-input oxd-input--active"/> aka getByRole('textbox', { name: 'yyyy-dd-mm' }).nth(1)

Call log:
  - waiting for getByPlaceholder('yyyy-dd-mm')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic:
    - complementary [ref=e4]:
      - navigation "Sidepanel" [ref=e5]:
        - generic [ref=e6]:
          - link "client brand banner" [ref=e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=e9]
          - text: 
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e12]:
              - textbox "Search" [ref=e15]
              - button "" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: 
            - separator [ref=e18]
          - list [ref=e19]:
            - listitem [ref=e20]:
              - link "Admin" [ref=e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
                - generic [ref=e24]: Admin
            - listitem [ref=e25]:
              - link "PIM" [ref=e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
                - generic [ref=e40]: PIM
            - listitem [ref=e41]:
              - link "Leave" [ref=e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
                - generic [ref=e45]: Leave
            - listitem [ref=e46]:
              - link "Time" [ref=e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
                - generic [ref=e53]: Time
            - listitem [ref=e54]:
              - link "Recruitment" [ref=e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
                - generic [ref=e61]: Recruitment
            - listitem [ref=e62]:
              - link "My Info" [ref=e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
                - generic [ref=e69]: My Info
            - listitem [ref=e70]:
              - link "Performance" [ref=e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
                - generic [ref=e79]: Performance
            - listitem [ref=e80]:
              - link "Dashboard" [ref=e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
                - generic [ref=e84]: Dashboard
            - listitem [ref=e85]:
              - link "Directory" [ref=e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
                - generic [ref=e89]: Directory
            - listitem [ref=e90]:
              - link "Maintenance" [ref=e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
                - generic [ref=e95]: Maintenance
            - listitem [ref=e96]:
              - link "Claim" [ref=e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
                - img [ref=e100]
                - generic [ref=e104]: Claim
            - listitem [ref=e105]:
              - link "Buzz" [ref=e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
                - generic [ref=e109]: Buzz
    - banner [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - text: 
          - heading "PIM" [level=6] [ref=e114]
        - link "Upgrade" [ref=e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=e117] [cursor=pointer]: Upgrade
        - list [ref=e123]:
          - listitem [ref=e124]:
            - generic [ref=e125] [cursor=pointer]:
              - img "profile picture" [ref=e126]
              - paragraph [ref=e127]: eBkQnwHdPY user
              - generic [ref=e128]: 
      - navigation "Topbar Menu" [ref=e130]:
        - list [ref=e131]:
          - listitem [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - text: Configuration
              - generic [ref=e134]: 
          - listitem [ref=e135] [cursor=pointer]:
            - link "Employee List" [ref=e136]:
              - /url: "#"
          - listitem [ref=e137] [cursor=pointer]:
            - link "Add Employee" [ref=e138]:
              - /url: "#"
          - listitem [ref=e139] [cursor=pointer]:
            - link "Reports" [ref=e140]:
              - /url: "#"
          - button "" [ref=e142] [cursor=pointer]:
            - generic [ref=e143]: 
  - generic [ref=e144]:
    - generic [ref=e148]:
      - generic [ref=e149]:
        - generic [ref=e150]:
          - heading "Jitesh verma" [level=6] [ref=e152]
          - img "profile picture" [ref=e155] [cursor=pointer]
        - tablist [ref=e156]:
          - tab "Personal Details" [ref=e157]:
            - link "Personal Details" [ref=e158] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/209
          - tab "Contact Details" [ref=e159]:
            - link "Contact Details" [ref=e160] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/209
          - tab "Emergency Contacts" [ref=e161]:
            - link "Emergency Contacts" [ref=e162] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/209
          - tab "Dependents" [ref=e163]:
            - link "Dependents" [ref=e164] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/209
          - tab "Immigration" [ref=e165]:
            - link "Immigration" [ref=e166] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/209
          - tab "Job" [ref=e167]:
            - link "Job" [ref=e168] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/209
          - tab "Salary" [ref=e169]:
            - link "Salary" [ref=e170] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/209
          - tab "Report-to" [ref=e171]:
            - link "Report-to" [ref=e172] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/209
          - tab "Qualifications" [ref=e173]:
            - link "Qualifications" [ref=e174] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/209
          - tab "Memberships" [ref=e175]:
            - link "Memberships" [ref=e176] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/209
      - generic [ref=e177]:
        - generic [ref=e178]:
          - heading "Personal Details" [level=6] [ref=e179]
          - separator [ref=e180]
          - generic [ref=e181]:
            - generic [ref=e185]:
              - generic [ref=e187]: Employee Full Name*
              - generic [ref=e188]:
                - textbox "First Name" [ref=e191]: Jitesh
                - textbox "Middle Name" [ref=e194]
                - textbox "Last Name" [ref=e197]: verma
            - separator [ref=e198]
            - generic [ref=e199]:
              - generic [ref=e200]:
                - generic [ref=e202]:
                  - generic [ref=e204]: Employee Id
                  - textbox [ref=e206]: "0412"
                - generic [ref=e208]:
                  - generic [ref=e210]: Other Id
                  - textbox [ref=e212]
              - generic [ref=e213]:
                - generic [ref=e215]:
                  - generic [ref=e217]: Driver's License Number
                  - textbox [active] [ref=e219]
                - generic [ref=e221]:
                  - generic [ref=e223]: License Expiry Date
                  - generic [ref=e226]:
                    - textbox "yyyy-dd-mm" [ref=e227]
                    - generic [ref=e228] [cursor=pointer]: 
            - separator [ref=e229]
            - generic [ref=e230]:
              - generic [ref=e231]:
                - generic [ref=e233]:
                  - generic [ref=e235]: Nationality
                  - generic [ref=e238] [cursor=pointer]:
                    - generic [ref=e239]: "-- Select --"
                    - generic [ref=e241]: 
                - generic [ref=e243]:
                  - generic [ref=e245]: Marital Status
                  - generic [ref=e248] [cursor=pointer]:
                    - generic [ref=e249]: "-- Select --"
                    - generic [ref=e251]: 
              - generic [ref=e252]:
                - generic [ref=e254]:
                  - generic [ref=e256]: Date of Birth
                  - generic [ref=e259]:
                    - textbox "yyyy-dd-mm" [ref=e260]
                    - generic [ref=e261] [cursor=pointer]: 
                - generic [ref=e263]:
                  - generic [ref=e265]: Gender
                  - generic [ref=e266]:
                    - generic [ref=e270] [cursor=pointer]:
                      - radio "Male" [ref=e271]
                      - text: Male
                    - generic [ref=e276] [cursor=pointer]:
                      - radio "Female" [ref=e277]
                      - text: Female
            - separator [ref=e279]
            - generic [ref=e280]:
              - paragraph [ref=e281]: "* Required"
              - button "Save" [ref=e282] [cursor=pointer]
        - generic [ref=e283]:
          - separator [ref=e284]
          - generic [ref=e285]:
            - heading "Custom Fields" [level=6] [ref=e286]
            - separator [ref=e287]
            - generic [ref=e288]:
              - generic [ref=e290]:
                - generic [ref=e292]:
                  - generic [ref=e294]: Blood Type
                  - generic [ref=e297] [cursor=pointer]:
                    - generic [ref=e298]: "-- Select --"
                    - generic [ref=e300]: 
                - generic [ref=e302]:
                  - generic [ref=e304]: Test_Field
                  - textbox [ref=e306]
              - separator [ref=e307]
              - button "Save" [ref=e309] [cursor=pointer]
        - generic [ref=e310]:
          - separator [ref=e311]
          - generic [ref=e313]:
            - heading "Attachments" [level=6] [ref=e314]
            - button " Add" [ref=e315] [cursor=pointer]:
              - generic [ref=e316]: 
              - text: Add
          - generic [ref=e317]:
            - separator [ref=e318]
            - generic [ref=e320]: No Records Found
          - table [ref=e322]:
            - rowgroup [ref=e323]:
              - row " File Name Description Size Type Date Added Added By Actions" [ref=e324]:
                - columnheader "" [ref=e325]:
                  - generic [ref=e327] [cursor=pointer]:
                    - checkbox "" [ref=e328]
                    - generic [ref=e330]: 
                - columnheader "File Name" [ref=e331]
                - columnheader "Description" [ref=e332]
                - columnheader "Size" [ref=e333]
                - columnheader "Type" [ref=e334]
                - columnheader "Date Added" [ref=e335]
                - columnheader "Added By" [ref=e336]
                - columnheader "Actions" [ref=e337]
            - rowgroup
    - generic [ref=e338]:
      - paragraph [ref=e339]: OrangeHRM OS 5.9
      - paragraph [ref=e340]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=e341] [cursor=pointer]:
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
> 59  | await page.getByPlaceholder('yyyy-dd-mm').fill('2025-31-12');
      |                                           ^ Error: locator.fill: Error: strict mode violation: getByPlaceholder('yyyy-dd-mm') resolved to 2 elements:
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