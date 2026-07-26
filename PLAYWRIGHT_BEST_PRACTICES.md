# Playwright Best Practices

## Purpose
This document lists best practices to follow before creating a new test in this Playwright framework.

## 1. Test Design
- Keep tests focused on one behavior or scenario.
- Prefer end-to-end coverage only for high-value flows.
- Avoid asserting too many unrelated things in a single test.
- Use clear, descriptive test names and `test.describe` grouping.

## 2. Reuse through Page Objects
- Use the `pages/` folder for page objects and UI interaction helpers.
- Expose actions as methods like `login`, `navigateTo`, `selectOption`, `submitForm`.
- Keep page objects thin: they should encapsulate page behavior, not business logic.

## 3. Locator strategy
- Prefer stable selectors: `data-test`, `data-testid`, or other test-specific attributes.
- Avoid selectors based on text content when text may change.
- Do not rely on absolute XPath or complex CSS unless necessary.
- Use `locator('selector')` and avoid raw `page.$()` unless required.

## 4. Test data and setup
- Keep test data separate from test code; use `testData/` or fixture functions.
- Use fixtures in Playwright config for reusable login, environment, and setup data.
- Seed the environment with predictable state when possible.
- Clean up after tests if they modify shared data or state.

## 5. Use Playwright features
- Use `page.goto()` with `baseURL` from `playwright.config.ts` where possible.
- Use `await expect(locator).toBeVisible()` or `toHaveText()` for clear assertions.
- Prefer `test.step()` for complex flows to improve report readability.
- Use `trace: 'retain-on-failure'` and `screenshot: 'only-on-failure'` to capture failures.

## 6. Stability and timing
- Avoid fixed delays like `page.waitForTimeout()` unless there is no better option.
- Use built-in waiting and assertions for element state.
- Ensure actions are performed against visible, enabled elements.
- Explicitly wait for network or navigation when needed.

## 7. CI and parallel execution
- Keep tests independent so they can run in parallel.
- Avoid shared state in tests that run concurrently.
- Keep `fullyParallel: true` and use `workers` configured in `playwright.config.ts`.
- Validate new tests locally before committing, then run them in CI.

## 8. Reporting
- Ensure new tests generate results in `allure-results` and `playwright-report`.
- Use `test.info().attach()` only when additional failure context is necessary.
- Keep reporter configuration consistent with existing pipeline setup.

## 9. Code quality
- Keep test helpers in `utility/` or `pages/` rather than duplicating logic in each test.
- Follow project TypeScript settings from `tsconfig.json`.
- Use consistent formatting and linting rules if available.

## 10. Review before adding new tests
- Check for an existing test covering the same flow.
- Confirm new test adds value and does not duplicate coverage.
- Update related documentation or test plan if the new test represents a new scenario.
- Review the test with the team if the flow or assertions are non-trivial.

## Quick checklist before creating a new test
- [ ] Is the scenario already covered by an existing test?
- [ ] Is this a single behavior or scenario?
- [ ] Are selectors stable and maintainable?
- [ ] Does this use page objects or helper utilities?
- [ ] Will the test run independently in CI?
- [ ] Are all assertions purposeful and easy to understand?
- [ ] Is test data separated from test logic?
- [ ] Is failure debugging supported with traces/screenshots?
