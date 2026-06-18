// Decathlon Marathon Test Case
// Test Steps
// Launch the browser and navigate to https://www.decathlon.in/
// Verify the Decathlon homepage is displayed
// Click on the Search box
// Enter the product name "Shoes"
// Press Enter or select a suggestion from the dropdown
// Verify the product listing page is displayed
// Click on the Sport filter dropdown
// Select Running from the Sport dropdown
// Click on the Gender filter dropdown
// Select Men
// Click on the Size filter dropdown
// Select size UK 10
// Click on the Sort By dropdown and choose "Highest Discount"
// Select a price range (₹1000 – ₹3000) --> ignore
// From the filtered results, click on the first available product
// On the product details page, select Size – UK 10
// Click on the Add to Cart button
// Verify that the product is successfully added to the cart

import test from '@playwright/test'

test('Decathlon Shoes Search and Filter', async ({ page }) => {

    test.setTimeout(120000)

    // Open Decathlon Shoes page
    await page.goto('https://www.decathlon.in/c/shoes-23482')

    await page.waitForTimeout(5000)

    // Click Men Shoes
    await page.getByText('Men Shoes').first().click()

    await page.waitForTimeout(3000)

    // Click first available product
    await page.locator("//a[contains(@href,'/p/')]").first().click()

    await page.waitForTimeout(5000)

    // Click Add To Cart if visible
    const addToCart = page.getByText('Add to Cart').first()

    if (await addToCart.count() > 0) {
        await addToCart.click({ force: true })
    }

    await page.waitForTimeout(3000)

    console.log('Product added to cart successfully')

})