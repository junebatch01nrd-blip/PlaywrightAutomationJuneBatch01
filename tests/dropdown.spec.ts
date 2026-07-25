// Import test and expect from Playwright's test library
// 'test' - used to define individual test cases
// 'expect' - used to create assertions (verify expected behavior)
import { test, expect } from '@playwright/test';

/* ================================================================
   DROPDOWN HANDLING IN PLAYWRIGHT
   ================================================================
   This file demonstrates how to work with dropdown menus in Playwright.
   Dropdowns are HTML <select> elements with <option> children.
   
   Key Learning Points:
   - selectOption() method is used for dropdown selection
   - Multiple ways to select: by value, label, index, or text
   - Static dropdowns: pre-defined options
   - Multi-select dropdowns: multiple options can be selected
   - Auto-suggestions: dynamic dropdowns that filter as you type
================================================================ */

/* TEST 1: Handle Static Dropdown using select tag
   Description: Demonstrates how to interact with a basic dropdown menu
   where all options are predefined in the HTML <select> element
*/
test('Handle Static Dropdown using select tag',({tag:'@smoke'}), async ({ page }) => {
  // Step 1: Navigate to the test website
  await page.goto('https://letcode.in/test');

  // Step 2: Click on the 'Drop-Down' link to navigate to dropdown test page
  await page.getByRole('link', { name: 'Drop-Down' }).click();
  
  // Step 3: Verify that the Dropdown page has loaded successfully
  // expect() - assertion function that checks if something is true
  // toBeVisible() - waits for element and verifies it's visible on the page
  await expect(page.getByRole('heading', { name: 'Dropdown' })).toBeVisible();

  /* ========== Method 1: Select by Value ==========
     Use this when you know the 'value' attribute of the option element
     HTML Example: <option value="0">Apple</option>
  */
  await page.locator('#fruits').selectOption({value:'0'});
  // Verify that selecting value '0' (Apple) was successful
  await expect(page.getByText('You have selected Apple')).toBeVisible();

  /* ========== Method 2: Select by Visible Text ==========
     Use this when you can see the text in the dropdown
     This is the simplest and most readable approach
  */
  await page.locator('#fruits').selectOption('Orange');
  // Verify that Orange was selected
  await expect(page.getByText('You have selected Orange')).toBeVisible();

  /* ========== Method 3: Select by Label ==========
     Use when the option has a specific label attribute
     Less commonly used than other methods
  */
  await page.locator('#fruits').selectOption({label:'Mango'});

  /* ========== Method 4: Select by Index ==========
     Use when you want to select by position (0-based indexing)
     Index 0 = first option, Index 1 = second option, etc.
     {index:3} means select the 4th option
  */
  await page.locator('#fruits').selectOption({index:3});
  // Verify the selection
  await expect(page.getByText('You have selected Orange')).toBeVisible();




});

/* TEST 2: Multi-Select Dropdown
   Description: Demonstrates how to select MULTIPLE options from a dropdown
   when the dropdown allows multiple selections (has 'multiple' attribute)
*/
test('MultiSlect Dropdown', async({page}) => {
  // Step 1: Navigate to the test website
  await page.goto('https://letcode.in/test');

  // Step 2: Click on the 'Drop-Down' link
  await page.getByRole('link', { name: 'Drop-Down' }).click();
  
  // Step 3: Verify page has loaded
  await expect(page.getByRole('heading', { name: 'Dropdown' })).toBeVisible();

  /* MULTIPLE SELECTION
     To select multiple options, pass an ARRAY of option labels
     The #superheros dropdown has the 'multiple' attribute in its HTML
     This selects: Aquaman, Batman, and Captain America all at once
  */
  await page.locator('#superheros').selectOption(['Aquaman', 'Batman', 'Captain America']);
  
  // Verify that at least one of the selected options is visible
  await expect(page.getByText('You have selected Aquaman')).toBeVisible();


});

/* TEST 3: Select the Last Option and Print All Options
   Description: Advanced dropdown handling - getting all options dynamically
   and selecting the last one programmatically
   
   Learning Goals:
   - Get all options from a dropdown
   - Count the number of options
   - Select last option using dynamic index calculation
   - Use console.log() to debug and see values
*/
test('Select the last programming language and print all the options', async({page}) => {
  // Step 1: Navigate to the website
  await page.goto('https://letcode.in/test');

  // Step 2: Click on the Drop-Down link
  await page.getByRole('link', { name: 'Drop-Down' }).click();
  
  // Step 3: Verify the dropdown page is loaded
  await expect(page.getByRole('heading', { name: 'Dropdown' })).toBeVisible();

  /* STEP 4: Store a reference to the dropdown element
     locator() returns a Locator object that we can reuse multiple times
     This is more efficient than writing the selector multiple times
  */
  const dropdownProgrammingLanguage = await page.locator('#lang');

  /* STEP 5: Get all option text values
     allTextContents() returns an array of all text content from matching elements
     locator('option') finds all <option> elements inside the dropdown
     Result: ['JavaScript', 'Python', 'Java', ... etc]
  */
  const allOptionText = await dropdownProgrammingLanguage.locator('option').allTextContents();
  // Print all options to the browser console (useful for debugging)
  console.log(allOptionText);

  /* STEP 6: Count total number of options
     count() returns a number representing how many matching elements exist
  */
  const optionCount = await dropdownProgrammingLanguage.locator('option').count();
  console.log(optionCount); // This dropdown has 15 options

  /* STEP 7: Select the LAST option dynamically
     optionCount - 1 = index of last option
     If there are 15 options (indices 0-14), the last index is 14
     So: 15 - 1 = 14 (last index)
  */
  await dropdownProgrammingLanguage.selectOption({index: optionCount - 1});

  // Wait 10 seconds for visibility (good practice to see results)
  await page.waitForTimeout(10000);


});


/* TEST 4: Auto Suggestions Select (Dynamic Dropdown)
   Description: Working with autocomplete/suggestion dropdowns that appear
   dynamically as you type. These are NOT standard <select> elements.
   
   IMPORTANT: test.only() means ONLY this test will run
   Remove .only to run all tests
   
   Learning Goals:
   - Handle dynamically appearing elements
   - Wait for elements with specific conditions (visible, stable)
   - Filter elements by their text content
   - Work with suggestion/autocomplete dropdowns
*/
test('Auto suggestions select', async({page}) => {
  // Step 1: Navigate to Wikipedia
  await page.goto('https://www.wikipedia.org/');
  
  /* Step 2: Fill the search input
     getByLabel('Search Wikipedia') finds the input by its associated label
     fill() enters text into the input field
     This typing will trigger the autocomplete dropdown to appear
  */
  await page.getByLabel('Search Wikipedia').fill('India');

  /* Step 3: WAIT for the suggestions dropdown to appear and be stable
     waitFor() pauses execution until a condition is met
     {state: 'visible'} - wait until the dropdown is visible
     {timeout: 15000} - wait maximum 15 seconds (15000 milliseconds)
     This is crucial for dynamic dropdowns that take time to load
  */
  await page.locator('.suggestions-dropdown').waitFor({state: 'visible', timeout: 15000});

  /* Step 4: Get all suggestion links
     page.locator() stores a reference to all matching elements
     'a.suggestion-link' selects all <a> tags with class 'suggestion-link'
     At this point, we haven't selected anything yet - just storing the reference
  */
  const suggestionLinks = page.locator('a.suggestion-link');
  console.log(await suggestionLinks.count()); // Print how many suggestions appeared

  /* Step 5: Filter and click the specific suggestion
     filter() narrows down the locator to elements matching a condition
     {hasText: 'Indian National Congress'} - find the suggestion with this exact text
     click() performs a mouse click on that element
  */
  await suggestionLinks.filter({hasText: 'Indian National Congress'}).click();

  /* Step 6: Verify the page navigated to the correct article
     getByRole('heading') finds elements with heading role
     We verify that the heading shows the article title we clicked
  */
  await expect(page.getByRole('heading', {name: 'Indian National Congress'})).toBeVisible();

  // Wait 10 seconds to observe the result
  await page.waitForTimeout(10000);
});  