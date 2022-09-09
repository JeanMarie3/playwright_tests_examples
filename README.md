#Installing Playwright
npm init playwright@latest

#Running all tests
npx playwright test

#HTML Test Reports
npx playwright show-report

#Running a single test file
npx playwright test example.spec.js

#Run a set of test files
npx playwright test tests/todo-page/ tests/landing-page/

#Running tests in headed mode
npx playwright test example.spec.js --headed

#Running Tests on specific browsers
npx playwright test example.spec.js --project=chromium