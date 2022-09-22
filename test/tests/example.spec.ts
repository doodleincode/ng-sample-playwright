import { test, Page } from '@playwright/test'

test('modal closure - without ng-cloak', async ({ page }) => {
  await page.goto('http://localhost:30000/#!/without')

  await testModalClosure(page)
});

test('modal closure - with ng-cloak', async ({ page }) => {
  await page.goto('http://localhost:30000/#!/with')

  await testModalClosure(page)
})

async function testModalClosure(page: Page) {
  // Click the first modal button
  await page.locator('button', { hasText: 'Open 1st Modal' }).click()

  // Get handle to first modal
  const modal1 = page.locator('md-dialog', { hasText: 'Modal One' })

  // Wait for first modal to appear
  await modal1.waitFor()

  // Click on the second modal button
  await modal1.locator('button', { hasText: 'Open 2nd Modal' }).click()

  // Get handle to second modal
  const modal2 = page.locator('md-dialog', { hasText: 'Modal Two' })

  // Wait for second modal to appear
  await modal2.waitFor()

  // Close the second modal
  await modal2.locator('button', { hasText: 'Close'}).click()

  // Close the first modal
  await modal1.locator('button', { hasText: 'Close'}).click()
}