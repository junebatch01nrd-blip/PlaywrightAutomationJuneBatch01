// Import the 'test' function from Playwright's test library
// We only import 'test' here (we don't need expect for these tests)
import { test} from '@playwright/test';

/* ================================================================
   UNDERSTANDING FIXTURES IN PLAYWRIGHT
   ================================================================
   
   WHAT IS A FIXTURE?
   A fixture is a pre-configured environment that sets up the initial state
   for your tests. It ensures all tests start with the same known conditions,
   making test results repeatable and reliable.
   
   ANALOGY: If tests were cooking recipes, fixtures are your prep work
   (washing dishes, gathering ingredients) done BEFORE you start cooking.
   
   WHY USE FIXTURES?
   ✓ Consistency: Every test starts fresh with the same setup
   ✓ Less code duplication: Don't repeat setup code in every test
   ✓ Better organization: Separate setup from test logic
   ✓ Automatic cleanup: Resources are cleaned up after each test
   
   BUILT-IN FIXTURES IN PLAYWRIGHT:
   1. browser - A Browser instance for creating contexts and pages
   2. context - A BrowserContext for isolating page state
   3. page    - A Page (tab) for interacting with websites
                (MOST COMMONLY USED)
   4. Custom fixtures - Create your own for specific needs
   
   HOW TO USE FIXTURES:
   - They are passed as parameters in the async function
   - async ({ page }) => { } - Using the page fixture
   - async ({ browser }) => { } - Using the browser fixture
   - Each fixture is automatically created fresh for each test
   - Each fixture is automatically cleaned up after the test
================================================================ */
/* TEST 1: Using Browser Fixture (Lower-level approach)
   This test demonstrates working with the browser fixture directly.
   It requires more manual steps but gives you more control.
*/
test('basic test with browser fixture', async ({browser}) => {
  // *** STEP 1: Create a new browser context ***
  // A context is like a separate browser profile (incognito window)
  // Multiple tests can have different contexts running in parallel
  // This isolates test data and cookies between tests
  const context = await browser.newContext();
  
  // *** STEP 2: Create a new page (tab) in that context ***
  // A page is where we interact with the website
  // We need both context AND page to navigate and interact
  const page = await context.newPage();
  
  // *** STEP 3: Navigate to a website ***
  // goto() loads a URL and waits for the page to load
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  // *** STEP 4: Pause execution for debugging ***
  // pause() opens the Playwright Inspector and stops execution
  // Press 'Resume' in the Inspector to continue
  await page.pause();
  
  /* NOTE: When using browser fixture, you have full control but also
     have to manually create/destroy contexts. For most tests, just use
     the 'page' fixture (see next test) - it's simpler! */
});

/* TEST 2: Using Page Fixture (Recommended approach)
   This is the simplest and most common way to write Playwright tests.
   The page fixture is automatically created and cleaned up for you.
*/
test('basic test with page fixture', async ({page}) => {
  /* The 'page' fixture is already provided by Playwright
     It's already set up with a browser context, so we can just use it directly
     
     ADVANTAGE: Simpler code, less boilerplate
     DISADVANTAGE: Less control over context configuration (rarely needed)
  */
  
  // *** Navigate to the login page ***
  // The page is ready to use immediately
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  // *** Pause for debugging ***
  await page.pause();
  
  /* KEY TAKEAWAY:
     This is MUCH cleaner than the browser fixture approach!
     Unless you need fine-grained context control, always use the page fixture. */
});

/* TEST 3: Login Test - A Real-World Example
   Description: Complete login workflow on the SauceDemo practice website
   This demonstrates a practical, end-to-end user interaction
*/
test('basic login test', async ({page}) => {
  // *** STEP 1: Navigate to the login page ***
  await page.goto('https://www.saucedemo.com/');
  
  /* *** STEP 2: Fill the username field ***
     getByPlaceholder('Username') finds the input by its placeholder text
     This is a reliable way to find form fields
     fill() clears any existing text and enters the new value
  */
  await page.getByPlaceholder('Username').fill('standard_user');
  
  /* *** STEP 3: Fill the password field ***
     getByPlaceholder('Password') finds the password input
     'secret_sauce' is a test credential for this practice site
  */
  await page.getByPlaceholder('Password').fill('secret_sauce');
  
  /* *** STEP 4: Click the Login button ***
     getByRole('button', { name: 'Login' }) finds a button with the text 'Login'
     click() performs a mouse click on that button
     This submits the login form
  */
  await page.getByRole('button', { name: 'Login' }).click();
  
  /* *** STEP 5: Wait for page to load ***
     waitForTimeout(5000) pauses for 5 seconds
     This gives the page time to process the login and navigate
     NOTE: It's better to wait for a specific element to appear
     than to use a fixed timeout (see dropdown tests for better practices)
  */
  await page.waitForTimeout(5000);
  
  /* WHAT HAPPENS AFTER LOGIN?
     If credentials are correct, user is taken to the products page
     In a real test, we would verify this with expect() assertions
     Example: await expect(page.getByText('Products')).toBeVisible();
  */
});

