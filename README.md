# Install

1. Install dependencies: `npm ci`
2. Copy AngularJS dependencies to app path: `mkdir -p app/lib && cp -r node_modules/{angular,angular-*} app/lib`

# Run

1. Start the dev server: `npm run start`
2. View the app at http://localhost:30000

# Tests

1. Go to the test direction: `cd test`
2. Install dependencies: `npm ci`
3. Update Playwright browsers: `npx playwright install`
3. Run tests: `npx playwright test`