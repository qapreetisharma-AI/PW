import test, { expect } from "@playwright/test";

test("Salesforce Login using CSS Selectors", async ({ page }) => {

    // Step 1: Navigate to Salesforce login page
    await page.goto("https://login.salesforce.com/?locale=in");

    // Step 2: Locate username field using ID selector
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.waitForTimeout(2000)
    
    // Step 3: Locate password field using Attribute selector
    await page.locator('#password').fill('TestLeaf@2025');
    await page.waitForTimeout(2000);

    // Step 4: Click Login button 
    await page.locator('#Login').click();
    await page.waitForTimeout(2000);
    
    console.log("Login Successful");
});