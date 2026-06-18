import { test } from '@playwright/test'

test('Edit Individual in Salesforce', async ({ page }) => {

  await page.goto('https://login.salesforce.com/?locale=in')

  await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')

  await page.locator('#password').fill('TestLeaf@2025')

  await page.locator('#Login').click()

  await page.waitForTimeout(5000)

  // Click Individuals tab
  await page.locator("//span[text()='Individuals']").evaluate((element: HTMLElement) => element.click())

  await page.waitForTimeout(3000)

  // Search Individual
  await page.getByPlaceholder('Search this list...').fill('Sharma')

  await page.keyboard.press('Enter')

  await page.waitForTimeout(3000)

  // Open dropdown of first record
  await page.locator("//table/tbody/tr[1]//button").click()

  // Click Edit
  await page.getByRole('menuitem', { name: 'Edit' }).click()

  await page.waitForTimeout(3000)

  // Click Salutation dropdown
  await page.locator("//div[contains(@class,'salutation')]//a[@role='button']").click()

  await page.waitForTimeout(2000)

  // Select Mr.
  await page.locator("//a[@title='Mr.']").click()

  // Enter First Name
  await page.locator("//input[@placeholder='First Name']").fill('Preeti')

  // Click Save
  await page.getByRole('button', { name: 'Save', exact: true }).click()

  await page.waitForTimeout(3000)

  console.log('Individual updated successfully')

})