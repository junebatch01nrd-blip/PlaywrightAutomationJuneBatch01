# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: endToEndOrangeHrmTest.spec.ts >> end to end OrangeHrm test 
- Location: tests\endToEndOrangeHrmTest.spec.ts:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  getByAltText('orangehrm-logo').first()
Expected: visible
Received: hidden
Timeout:  15000ms

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByAltText('orangehrm-logo').first()
    28 × locator resolved to <img data-v-6adfd385="" alt="orangehrm-logo" src="/web/images/ohrm_logo.png"/>
       - unexpected value "hidden"

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
```

# Test source

```ts
  1 | import {test, expect} from 'playwright/test';
  2 | 
  3 | test('end to end OrangeHrm test ', async({page}) =>{
  4 | 
  5 | await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
> 6 | await expect(page.getByAltText("orangehrm-logo").first()).toBeVisible();
    |                                                           ^ Error: expect(locator).toBeVisible() failed
  7 | 
  8 | 
  9 | })
```