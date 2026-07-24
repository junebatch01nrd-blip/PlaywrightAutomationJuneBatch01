import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',

  timeout: 60 * 1000,
  expect:{
    timeout: 15000
  },

  /* Run tests in files in parallel */
  fullyParallel: true,
  retries: 1,
  workers: 2,

  reporter: [
    ['html', {open:'never'}],
    ['line'],
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['allure-playwright',
      {resultsDir:'allure-results', suiteTitle: false,}
    ],   
],


  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    trace: 'retain-on-failure',
    video: 'on-first-retry',
    testIdAttribute: 'data-test',
    screenshot: 'only-on-failure',

    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
  },

  /* Configure projects for major browsers */
  //Cross browswer testing
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chorme'] },
    },


  ],

    
});
