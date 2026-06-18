import { test, expect } from '@playwright/test'

test('Create Lead in Salesforce', async ({ page }) => {

  // Login to Salesforce
  await page.goto('https://login.salesforce.com/?locale=in')

  await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')

  await page.locator('#password').fill('TestLeaf@2025')

  await page.locator('#Login').click()

  // Click App Launcher (Toggle Menu)
  await page.locator('.slds-icon-waffle').click()

  // Click View All
  await page.getByText('View All').click()

  // Open Sales App
  await page.getByTitle('Sales').click()

  // Click Leads tab
  await page.getByRole('link', { name: 'Leads' }).click()

  // Click New button
  await page.getByRole('button', { name: 'New' }).click()

  // Select Salutation
  await page.locator('button[name="salutation"]').click()
  await page.getByText('Ms.').click()

  // Enter Last Name
  await page.locator('input[name="lastName"]').fill('Sharma')

  // Enter Company Name
  await page.locator('input[name="Company"]').fill('TestLeaf')

  // Click Save
  await page.getByRole('button', { name: 'Save', exact: true }).click()

  // Verify Lead Created
  const leadName = page.locator('lightning-formatted-name')

  await expect(leadName).toContainText('Sharma')

  console.log('Lead created successfully')
})