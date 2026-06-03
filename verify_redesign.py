import asyncio
from playwright.async_api import async_playwright
import os

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Load the file
        current_dir = os.getcwd()
        file_url = f"file://{current_dir}/index.html"
        await page.goto(file_url)

        # Wait for fonts and icons
        await page.wait_for_timeout(2000)

        # Take screenshots
        os.makedirs("verification", exist_ok=True)
        await page.screenshot(path="verification/desktop_redesign.png", full_page=True)

        # Check mobile
        await page.set_viewport_size({"width": 390, "height": 844})
        await page.wait_for_timeout(1000)
        await page.screenshot(path="verification/mobile_redesign.png", full_page=True)

        # Check mobile menu
        await page.click("#open-menu")
        await page.wait_for_timeout(500)
        await page.screenshot(path="verification/mobile_menu_redesign.png")

        # Check for errors
        errors = []
        page.on("pageerror", lambda exc: errors.append(str(exc)))

        print(f"Screenshots saved in verification/ folder.")
        if errors:
            print(f"Found errors: {errors}")
        else:
            print("No JS errors found.")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
