// Marathon Test Case – PVR Cinemas Booking Flow
// Test Steps
// Launch the browser and open https://www.pvrcinemas.com/
// Select any available movie
// Select the date
// Select the cinema
// Select the show timing
// Click on the Book button
// Click on Accept for the Terms & Conditions
// Select two available seats
// Click on the Proceed button
// Verify and note the "To be Paid" amount displayed on the screen

import test from '@playwright/test'

test('PVR Booking Ahmedabad COCKTAIL 2 F Row', async ({ page }) => {

  test.setTimeout(120000)

  await page.goto('https://www.pvrcinemas.com/')

  await page.locator("//span[text()='Ahmedabad']").click()
  await page.waitForTimeout(3000)

  await page.locator("//span[text()='Select Movie']").click()
  await page.locator("//li[contains(@class,'p-dropdown-item')]//span[contains(text(),'COCKTAIL 2')]").click()

  await page.waitForTimeout(2000)

  await page.locator("//span[text()='Tomorrow']").click()
  await page.waitForTimeout(3000)

  await page.locator("//li[contains(@class,'p-dropdown-item')]").first().click()
  await page.waitForTimeout(2000)

  await page.locator("//li[contains(@class,'p-dropdown-item')]").first().click()
  await page.waitForTimeout(2000)

  await page.locator("//button[@aria-label='Submit']").click()
  await page.waitForTimeout(5000)

  // Accept Terms popup
  await page.locator("//button[normalize-space()='Accept']").click()
  await page.waitForTimeout(3000)

  // Select F row seat
  const fSeat = page.locator("//*[contains(@id,'F:')]").first()
  await fSeat.click({ force: true })

  await page.waitForTimeout(3000)

  // Get only movie price
  const seatPriceText = await page.locator('body').innerText()

  const priceMatch = seatPriceText.match(/Rs\.?\s*\d+|₹\s*\d+/)

  const moviePrice = priceMatch ? priceMatch[0] : 'Price not found'

  console.log(`Movie Price : ${moviePrice}`)

  // Click Proceed
  await page.getByText('Proceed').first().click({ force: true })

  await page.waitForTimeout(3000)

  // Skip food popup if displayed
  const skipButton = page.getByText('Skip & Proceed')

  if (await skipButton.count() > 0) {
    await skipButton.first().click({ force: true })
  }

})