import { test, expect } from '@playwright/test'

test('Create Individual in Salesforce', async ({ page }) => {

  // Login to Salesforce
  await page.goto('https://login.salesforce.com/?locale=in')

  // Enter username
  await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')

  // Enter password
  await page.locator('#password').fill('TestLeaf@2025')

  // Click Login
  await page.locator('#Login').click()

  // Wait for page to load
  await page.waitForLoadState('domcontentloaded')

  // Click Individuals tab
  await page.locator("//span[text()='Individuals']").evaluate((element: HTMLElement) => element.click())

  // Click New button
  await page.getByRole('button', { name: 'New' }).click()

  // Enter Last Name
  await page.locator("//input[@placeholder='Last Name']").fill('Sharma')

  // Click Save
  await page.getByRole('button', { name: 'Save', exact: true }).click()

  // Verify Individual Name
  await expect(page.getByText('Sharma').first()).toBeVisible()

  console.log('Individual created successfully')

})