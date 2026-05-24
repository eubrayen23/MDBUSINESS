import asyncio
from playwright.async_api import async_playwright
import os

async def capture():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={"width": 1920, "height": 1080})
        page = await context.new_page()

        await page.goto("http://localhost:5173", wait_until="networkidle")
        # Wait a bit longer for heavy JS/Motion
        await asyncio.sleep(2)

        os.makedirs("verification/screenshots", exist_ok=True)

        await page.screenshot(path="verification/screenshots/final_hero_desktop.png")

        await page.evaluate("window.scrollTo(0, 1200)")
        await asyncio.sleep(1)
        await page.screenshot(path="verification/screenshots/final_services_desktop.png")

        # Mobile
        mobile_context = await browser.new_context(viewport={"width": 375, "height": 812}, is_mobile=True)
        mobile_page = await mobile_context.new_page()
        await mobile_page.goto("http://localhost:5173", wait_until="networkidle")
        await asyncio.sleep(2)
        await mobile_page.screenshot(path="verification/screenshots/final_mobile_hero.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(capture())
