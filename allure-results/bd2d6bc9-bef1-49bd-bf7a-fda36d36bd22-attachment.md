# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> inValid login
- Location: tests\login.spec.ts:23:1

# Error details

```
TypeError: Cannot read properties of undefined (reading 'username')
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { LoginPage } from '../Pages/LoginPage';
  3  | import { DashboardPage } from '../pages/DashboardPage';
  4  | import testData from '../testData/testData.json' with { type: 'json' };
  5  | import { ExcelUtils } from '../utils/ExcelUtils';
  6  | 
  7  | test('valid login', async({page}) =>{
  8  | 
  9  | const loginPage = new LoginPage(page)
  10 | const dashboardPage = new DashboardPage(page)
  11 | 
  12 | 
  13 | //Go to Login page
  14 | await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  15 | 
  16 | await loginPage.login(testData.username, testData.password);
  17 | await expect(dashboardPage.dashboardHeading).toBeVisible();
  18 | 
  19 | 
  20 | });
  21 | 
  22 | 
  23 | test('inValid login', async({page}) =>{
  24 | 
  25 | const loginPage = new LoginPage(page)
  26 | 
  27 | const userData = ExcelUtils.getData('./testData/credentials.xlsx', 'credentials', 0)
  28 | 
  29 | //Go to Login page
  30 | await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  31 | 
> 32 | await loginPage.login(userData.username, userData.password);
     |                                ^ TypeError: Cannot read properties of undefined (reading 'username')
  33 | await expect(page.getByText("invalid credentials")).toBeVisible();
  34 | 
  35 | 
  36 | 
  37 | });
```