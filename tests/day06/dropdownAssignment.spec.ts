import { test, expect } from '@playwright/test'

test('Create Lead using dropdown selections', async ({ page }) => {

  // Step 1: Open the application
  await page.goto('http://leaftaps.com/opentaps/')

  // Step 2 & 3: Login with valid credentials
  await page.locator('#username').fill('democsr')
  await page.locator('#password').fill('crmsfa')
  await page.locator('.decorativeSubmit').click()

  // Step 4: Navigate to CRM/SFA
  await page.getByText('CRM/SFA').click()

  // Step 5: Open Leads section
  await page.getByRole('link', { name: 'Leads' }).click()

  // Step 6: Click Create Lead
  await page.getByText('Create Lead').click()

  // Step 7: Fill mandatory fields
  await page.locator('#createLeadForm_companyName').fill('Apple Technologies')
  await page.locator('#createLeadForm_firstName').fill('Preeti')
  await page.locator('#createLeadForm_lastName').fill('Sharma')

  // Step 8: Select Employee from Source dropdown using index
  await page.locator('#createLeadForm_dataSourceId').selectOption({ index: 4 })

  // Step 9: Select Automobile from Marketing Campaign using visible text
  await page.locator('#createLeadForm_marketingCampaignId').selectOption({
    label: 'Automobile'
  })

  // Step 10: Select Corporation from Ownership using value
  await page.locator('#createLeadForm_ownershipEnumId').selectOption({
    value: 'OWN_CCORP'
  })

  // Step 11: Create the lead
  await page.locator('.smallSubmit').click()

  // Step 12: Verify page title
  await expect(page).toHaveTitle(/View Lead/i)

  console.log('Lead created successfully and title verified')
})