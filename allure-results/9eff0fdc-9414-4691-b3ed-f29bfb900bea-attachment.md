# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> valid orangeHRM login
- Location: tests\login.spec.ts:6:1

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Username')

```

# Test source

```ts
  1  | import {Page} from '@playwright/test'
  2  | 
  3  | export class LoginPage{
  4  | 
  5  | readonly page:Page;
  6  | 
  7  | 
  8  | constructor(page:Page){
  9  | 
  10 | this.page = page;
  11 | 
  12 | 
  13 | }
  14 | 
  15 | 
  16 | get userNameField(){
  17 | 
  18 |     return this.page.getByPlaceholder('Username')
  19 | }
  20 | 
  21 | get passwordField(){
  22 | 
  23 |     return this.page.getByRole('textbox', {name: 'Password'})
  24 | }
  25 | 
  26 | get loginButton(){
  27 | 
  28 |     return this.page.getByRole('button', {name: 'Login'})
  29 | }
  30 | 
  31 | get dashboardHeading(){
  32 | 
  33 |     return this.page.getByRole('heading', {name:'Dashboard'})
  34 | }
  35 | 
  36 | 
  37 | 
  38 | async validLogin(username, password){
  39 | 
> 40 |    await this.userNameField.fill(username)
     |                             ^ Error: locator.click: Test timeout of 60000ms exceeded.
  41 |    await this.passwordField.fill(password);
  42 |    await this.loginButton.click();
  43 | 
  44 | }
  45 | 
  46 | 
  47 | 
  48 | 
  49 | 
  50 | 
  51 | 
  52 | }
```