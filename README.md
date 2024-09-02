# Playwright Framework Project

## Overview

This project uses the Playwright framework to automate browser testing. Playwright enables reliable end-to-end testing for modern web apps across all modern browsers. This README provides instructions for setting up, installing dependencies, running tests, and understanding the project structure.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Running Tests](#running-tests)
4. [Project Structure](#project-structure)
5. [Configuration](#configuration)
6. [Writing Tests](#writing-tests)
7. [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (>= 12.x)
- npm (>= 6.x) or Yarn (>= 1.x)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Install Playwright browsers:
    ```bash
    npx playwright install
    ```

## Running Tests

To run the tests, use the following command:
```bash
npx playwright test
```

Running Specific Tests
To run a specific test file:

```bash
npx playwright test path/to/test-file.spec.ts
```

Running Tests in Headless Mode
By default, tests run in headless mode. To run tests with the browser UI, use:

```bash
npx playwright test --headed
```

Running Tests in Different Browsers
Playwright supports testing in Chromium, Firefox, and WebKit. To run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Project Structure

The project structure is as follows:

```bash
your-repo-name/
│
├── tests/                   # Test files
│   ├── example.spec.ts      # Example test file
│
├── playwright.config.ts     # Playwright configuration file
├── package.json             # npm package configuration
├── tsconfig.json            # TypeScript configuration
├── README.md                # Project README file
```

## Configuration

Playwright is highly configurable. The primary configuration file is playwright.config.ts. Here you can set global options like timeouts, test directory, and browser settings.

Example configuration (playwright.config.ts):

```typescript
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://the-internet.herokuapp.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    /* Capture screenshot on test failure */
    screenshot: 'only-on-failure',

    /* Capture video on test failure */
    video: 'retain-on-failure'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ..devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
```


## Writing Tests

Tests are written in TypeScript and located in the tests/ directory. Each test file should have a .spec.ts extension.

Example test (tests/example.spec.ts):

```typescript
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
});
```

## License

This project is licensed under the MIT License. See the LICENSE file for details.

Thank you for using this Playwright project! If you have any questions or need further assistance, feel free to open an issue or reach out.
