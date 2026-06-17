import test, { expect } from "@playwright/test"

test("Automating frame and alert interactions", async ({ page }) => {

    // Load the application
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
    await page.waitForTimeout(2000)

    // Switch to the iframe
    const frame = page.frameLocator("#iframeResult")

    // Handle the alert and click OK
    page.once("dialog", async dialog => {
        console.log(`Alert message: ${dialog.message()}`)
        await dialog.accept()
    })

    // Click the Try It button inside the frame
    await frame.getByRole("button", { name: "Try it" }).click()
    await page.waitForTimeout(2000)

    // Verify the displayed text
    await expect(frame.locator("#demo"))
        .toHaveText("You pressed OK!")

    console.log("OK action verified successfully")
})