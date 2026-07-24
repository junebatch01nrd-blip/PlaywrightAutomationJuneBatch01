# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> inValid login
- Location: tests\login.spec.ts:20:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.goto: Test timeout of 60000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { LoginPage } from '../Pages/LoginPage';
  3  | import { DashboardPage } from '../pages/DashboardPage';
  4  | import testData from '../testData/testData.json' with { type: 'json' };
  5  | 
  6  | test('valid login', async({page}) =>{
  7  | 
  8  | const loginPage = new LoginPage(page)
  9  | const dashboardPage = new DashboardPage(page)
  10 | //Go to Login page
  11 | await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  12 | 
  13 | await loginPage.login(testData.username, testData.password);
  14 | await expect(dashboardPage.dashboardHeading).toBeVisible();
  15 | 
  16 | 
  17 | });
  18 | 
  19 | 
  20 | test('inValid login', async({page}) =>{
  21 | 
  22 | const loginPage = new LoginPage(page)
  23 | //Go to Login page
> 24 | await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     |            ^ Error: page.goto: Test timeout of 60000ms exceeded.
  25 | 
  26 | await loginPage.login('Admin', 'InvalidPassword')
  27 | await expect(page.getByText("invalid credentials")).toBeVisible();
  28 | 
  29 | 
  30 | 
  31 | });
```