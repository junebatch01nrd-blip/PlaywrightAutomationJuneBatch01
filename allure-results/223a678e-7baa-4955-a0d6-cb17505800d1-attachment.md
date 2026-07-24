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

Locator: getByAltText('OrangeHRM')
Expected: visible
Error: strict mode violation: getByAltText('OrangeHRM') resolved to 2 elements:
    1) <img data-v-6adfd385="" alt="orangehrm-logo" src="/web/images/ohrm_logo.png"/> aka getByAltText('orangehrm-logo').first()
    2) <img data-v-6adfd385="" alt="orangehrm-logo" src="/web/images/ohrm_logo.png"/> aka getByRole('img', { name: 'orangehrm-logo' })

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByAltText('OrangeHRM')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.9
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
```

# Test source

```ts
  1 | import {test, expect} from 'playwright/test';
  2 | 
  3 | test('end to end OrangeHrm test ', async({page}) =>{
  4 | 
  5 | await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
> 6 | await expect(page.getByAltText("OrangeHRM")).toBeVisible();
    |                                              ^ Error: expect(locator).toBeVisible() failed
  7 | 
  8 | 
  9 | })
```