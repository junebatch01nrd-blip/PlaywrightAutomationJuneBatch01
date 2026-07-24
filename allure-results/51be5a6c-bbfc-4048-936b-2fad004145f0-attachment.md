# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> inValid orangeHRM login
- Location: tests\login.spec.ts:15:6

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { LoginPage } from '../Pages/LoginPage';
  3  | 
  4  | test('valid orangeHRM login', async({page}) =>{
  5  | 
  6  | const loginPage = new LoginPage(page);
  7  | 
  8  | await page.goto('/');
  9  | await loginPage.validLogin('Admin', 'admin123');
  10 | await expect(loginPage.dashboardHeading).toBeVisible();
  11 | 
  12 | })
  13 | 
  14 | 
  15 | test.only('inValid orangeHRM login', async({page}) =>{
  16 | 
  17 | const loginPage = new LoginPage(page);
  18 | 
> 19 | await page.goto('/');
     |            ^ Error: page.goto: Test ended.
  20 | await loginPage.validLogin('Admin', 'IncorrectPassword');
  21 | await expect(page.getByText('Invalid credentials')).toBeVisible();
  22 | 
  23 | })
```