/* ================================================================
   COMPREHENSIVE GUIDE TO LOCATORS IN PLAYWRIGHT
   ================================================================
   
   FUNDAMENTAL CONCEPTS:
   
   1. DOM (Document Object Model)
      - A tree structure representing all HTML elements on a page
      - JavaScript and test automation use the DOM to find elements
   
   2. Web Element
      - Any HTML element on the page (button, input, link, div, etc.)
      - Examples: <button>, <input>, <a href="...">, <h1>
   
   3. LOCATOR - The heart of Playwright automation!
      - A locator is a way to "find" or "address" a web element on the page
      - Think of it like using GPS coordinates to find a location
      - Without locators, we can't interact with the page
   
   ================================================================
   LOCATOR STRATEGIES IN PLAYWRIGHT
   ================================================================
   
   Playwright provides TWO categories of locators:
   
   A) RECOMMENDED LOCATORS (Use these first!):
      These are resilient to UI changes because they find elements
      by their purpose or user-visible text, not HTML implementation.
      
      1. getByRole() - Find by ARIA role (BEST PRACTICE!)
         Examples: button, link, textbox, heading, checkbox, radio
         Why: Most resilient to HTML changes
      
      2. getByLabel() - Find inputs by associated <label> text
         Why: Users see the label, so this is user-focused
      
      3. getByPlaceholder() - Find inputs by placeholder text
         Why: Users see the placeholder
      
      4. getByText() - Find elements by visible text content
         Why: Users see the text
      
      5. getByAltText() - Find images by alt text
         Why: Alt text is meant to describe images
      
      6. getByTitle() - Find elements by title attribute
         Why: Title is visible on hover
      
      7. getByTestId() - Find by data-testid attribute
         Why: Explicitly added for testing (requires dev support)
   
   B) FALLBACK LOCATORS (Use when recommended locators don't work):
      These find elements by their HTML structure.
      Be careful: these can break if HTML structure changes.
      
      8. CSS Selectors - Find by HTML tags, ids, classes, attributes
         Syntax: tagname, tagname#id, tagname.class, [attribute='value']
      
      9. XPath - Find by element path in the XML/HTML tree
         Syntax: //tagname[@attribute='value']
   
================================================================
   
   CSS SELECTOR PATTERNS (Detailed):
   ================================================
   
   Pattern 1: Select by TAG NAME
      Selector: input
      Meaning: Find the first <input> element
   
   Pattern 2: Select by ID
      Selector: input#username
      Meaning: Find <input> with id="username"
      Note: IDs are unique, so this finds exactly one element
   
   Pattern 3: Select by CLASS
      Selector: input.oxd-input--active
      Meaning: Find <input> with class="oxd-input--active"
      Note: Multiple elements can have the same class
   
   Pattern 4: Select by ATTRIBUTE VALUE (exact match)
      Selector: input[placeholder="Username"]
      Meaning: Find <input> with placeholder="Username"
      This is useful for finding form inputs
   
   Pattern 5: Select by ATTRIBUTE VALUE (partial match)
      Selector: input[placeholder*="User"]
      Meaning: Find <input> where placeholder contains "User"
      The *= means "contains" this text
   
   Pattern 6: Select by POSITION
      Selector: input.someclass
      With .nth(0): Gets the first matching element
      With .nth(1): Gets the second matching element
   
   ================================================
   PRACTICAL CSS EXAMPLES:
   ================================================
   
   // Example 1: Find by placeholder attribute
   await page.locator('input[placeholder="Username"]').fill('standard_user');
   
   // Example 2: Find first input element
   await page.locator('input').nth(0).fill('standard_user');
   
   // Example 3: Find by class name
   await page.locator('input.oxd-input--active').fill('standard_user');
   
   // Example 4: Find by id attribute
   await page.locator('input#username').fill('standard_user');


   
   DETAILED GUIDE: getByRole() - Most Recommended Locator
   ================================================
   
   WHAT IS A ROLE?
   - A role is the "purpose" or "function" of an HTML element
   - Roles are part of the Accessibility API (ARIA)
   - getByRole() is RESILIENT because it finds elements by purpose,
     not by HTML tags or CSS
   
   HTML TAG TO ROLE MAPPING:
   ===============================================
   HTML Element          →    Role to Use
   ===============================================
   <button>              →    'button'
   <a href="...">        →    'link'
   <input type="text">   →    'textbox'
   <input type="checkbox"> →  'checkbox'
   <input type="radio">  →    'radio'
   <h1> to <h6>          →    'heading'
   <input type="search"> →    'searchbox'
   <select>              →    'combobox' or 'listbox'
   ===============================================
   
   SYNTAX:
   getByRole('role', { name: 'visible text' })
   
   The 'name' is the visible text the user sees!
   
   EXAMPLES WITH EXPLANATIONS:
   ================================================
   
   // Find a link with text "Watch tutorials" and click it
   await page.getByRole('link', { name: 'Watch tutorials' }).click();
   
   // Find a button with text "Submit" and click it
   await page.getByRole('button', { name: 'Submit' }).click();
   
   // Find a checkbox with label "Remember me" and check it
   await page.getByRole('checkbox', { name: 'Remember me' }).check();
   
   // Find a radio button with label "Male" and select it
   await page.getByRole('radio', { name: 'Male' }).check();
   
   // Find a heading with text "Welcome to Playwright" and verify it exists
   await page.getByRole('heading', { name: 'Welcome to Playwright' }).isVisible();
   
   // Find a textbox (input type="text") with label "Username" and fill it
   await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
   
   WHY GETBYROLE IS BEST:
   ✓ Finds elements by PURPOSE, not HTML implementation
   ✓ Tests what users actually see
   ✓ Encourages accessible code
   ✓ Breaks less often when HTML changes

   
   getByLabel() - Find inputs by their <label>
   ================================================
   Used for: Form inputs that have associated <label> elements
   Best for: Radio buttons, checkboxes, labeled text inputs
   
   Example HTML:
   <label>Yes</label>
   <input type="radio" value="yes">
   
   Usage:
   await page.getByLabel('Yes').click();
   
   
   getByPlaceholder() - Find inputs by placeholder text
   ================================================
   Used for: Form inputs with placeholder attribute
   Best for: Text inputs that show hint text
   
   Example HTML:
   <input type="text" placeholder="Username">
   
   Usage:
   await page.getByPlaceholder('Username').fill('standard_user');
   
   
   getByText() - Find elements by visible text content
   ================================================
   Used for: Any element that contains specific text
   Best for: Buttons, links, headings, paragraphs with text
   
   Example HTML:
   <span>Username : Admin</span>
   
   Usage:
   await page.getByText('Username : Admin').isVisible();
   
   
   getByTestId() - Find elements by test id attribute
   ================================================
   Used for: Elements with data-testid attribute
   Best for: When developers add testid specifically for testing
   
   Example HTML:
   <input data-testid="username" type="text">
   
   Usage:
   await page.getByTestId('username').fill('standard_user');
   
   NOTE: This requires development team to add data-testid attributes

   
================================================================ */

// Import test and expect from Playwright
import {test, expect} from '@playwright/test';

/* TEST: Playwright Basic Actions and Assertions
   Description: Demonstrates fundamental Playwright operations
*/
test('Playwright Basic Actions and assertions', async ({page}) => {     

    await page.goto('https://xqa.io/practice');
    await expect(page).toHaveURL('https://xqa.io/practice');      // Assertions/validations
    
    console.log(await page.title());

    await expect(page).toHaveTitle(/Practice Exercises/i);        // Assertions/validations
    await page.getByRole('heading', { name: 'Elements'}).click();
    await expect(page.getByLabel('Full Name')).toBeVisible();     // Assertions/validations
    await page.locator('input#userName').fill('Playwright User');
    
    // get the value of the input field and print it in the console
    console.log(await page.locator('input#userName').inputValue());

    await expect(page.locator('input#userName')).toHaveValue('Playwright User'); // Assertions/validations
    await page.getByPlaceholder('name@example.com').fill('playwright@example.com');
    await page.getByLabel('Current Address').fill('123 Main Street, Anytown, USA');
    await page.getByLabel('Permanent Address').pressSequentially('456 Elm Street, Othertown, USA', {delay: 100});
  
 // Keyboard actions

   await page.getByLabel('Current Address').press('Control+A'); // Select all text
   await page.locator('textarea#currentAddress').clear(); // Clear the selected text
   await page.getByLabel('Permanent Address').dblclick(); // Double click to select the text
   await page.getByLabel('Permanent Address').press('Backspace'); // Delete the selected text

   await expect(page.getByLabel('Current Address')).toBeEmpty(); // Assertions/validations
   await page.locator('textarea#currentAddress').pressSequentially('Updated 123 Main Street, Anytown, USA', {delay: 100});
   await page.getByLabel('Permanent Address').fill('Updated 456 Elm Street, Othertown, USA');

// await page.getByRole('button', { name: 'Submit' }).hover(); // Hover over the submit button //tooltip

// await expect(page.getByText('Welcome to Homepage')).toBeVisible(); // Assertions/validations

   await page.getByLabel('Permanent Address').press('Tab');
   await page.getByRole('button', { name: 'Submit' }).press('Enter'); // Press Enter key to submit the form

   await page.waitForTimeout(5000); 

//Locator chaining
 
   console.log(await page.locator('#output').locator('[class="mb-1"]').count());

   //text content of the first p tag inside the output div
   //Diffrence between textcontent and input value
   const nameText= await page.locator('#output').locator('p').first().textContent();
   console.log(nameText);

   const emailText= await page.locator('#output').locator('p').nth(1).textContent();
   console.log(emailText);

   const currentAddressText= await page.locator('#output').locator('p').nth(2).textContent();
   console.log(currentAddressText);

   const permanentAddressText= await page.locator('#output').locator('p').last().textContent();
   console.log(permanentAddressText);

//most imp question diff between toHaveText and toContainText
await expect(page.locator('#output').locator('p').first()).toHaveText('Name: Playwright User'); // Assertions/validations
await expect(page.locator('#output').locator('p').nth(1)).toContainText('playwright@example.com'); // Assertions/validations
await expect(page.locator('#output').filter({hasText: 'Updated 123 Main Street, Anytown, USA'})).toBeVisible();
await expect(page.locator('#output').getByText('Updated 456 Elm Street, Othertown, USA')).toBeVisible();

await page.locator('input#userName').scrollIntoViewIfNeeded();

await page.evaluate(() => {
 window.scroll(0, 500); // Scroll down by 500 pixels
});

await page.waitForTimeout(10000);

//Browser Navigations
await page.goto('https://xqa.io/');
await expect(page).toHaveURL('https://xqa.io/');
await page.goBack();
await expect(page).toHaveURL('https://xqa.io/practice/text-box');
await page.goForward();
await expect(page).toHaveURL('https://xqa.io/');
await page.reload();


});