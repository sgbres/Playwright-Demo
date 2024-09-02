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
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    timeout: 30000,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 0,
        ignoreHTTPSErrors: true,
    },
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
    ],
};

export default config;
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
