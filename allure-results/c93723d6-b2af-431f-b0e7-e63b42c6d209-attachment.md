# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> valid login
- Location: tests\login.spec.ts:4:1

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
  3  | 
  4  | test('valid login', async({page}) =>{
  5  | 
  6  | const loginPage = new LoginPage(page)
  7  | //Go to Login page
> 8  | await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     |            ^ Error: page.goto: Test timeout of 60000ms exceeded.
  9  | 
  10 | await loginPage.login('Admin', 'admin123')
  11 | await expect(loginPage.dashboardHeading).toBeVisible();
  12 | 
  13 | });
  14 | 
  15 | 
  16 | test('inValid login', async({page}) =>{
  17 | 
  18 | const loginPage = new LoginPage(page)
  19 | //Go to Login page
  20 | await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  21 | 
  22 | await loginPage.login('Admin', 'InvalidPassword')
  23 | await expect(page.getByText("invalid credentials")).toBeVisible();
  24 | 
  25 | 
  26 | 
  27 | });
```