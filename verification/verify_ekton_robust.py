import asyncio
from playwright.async_api import async_playwright
import os

async def run_verification():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        print("Navigating to Home...")
        await page.goto('http://localhost:5173/')
        await page.wait_for_timeout(2000)

        print("Navigating to Shop...")
        await page.goto('http://localhost:5173/shop')
        await page.wait_for_timeout(2000)

        print("Testing Language Switcher...")
        en_button = page.locator('button:has-text("EN")')
        if await en_button.is_visible():
            await en_button.click()
            await page.wait_for_timeout(1000)
            print("Switched to EN")

        print("Testing Cart Flow...")
        # Check for product cards
        product_cards = page.locator('div.group.relative') # Common for my product cards
        count = await product_cards.count()
        print(f"Found {count} products")

        if count > 0:
            # Click on the first product card to go to details
            await product_cards.first.click()
            await page.wait_for_timeout(2000)
            print(f"On product detail page: {page.url}")

            # Click Add to Cart
            add_button = page.get_by_role("button", name="Add to Cart")
            if await add_button.is_visible():
                await add_button.click()
                print("Clicked Add to Cart button")
            else:
                # Try finding by text if role fails
                await page.click('button:has-text("Add to Cart")')
                print("Clicked Add to Cart via text")

            await page.wait_for_timeout(1000)
        else:
            print("No products found in shop!")

        # Navigate to Cart
        print("Navigating to Cart...")
        await page.goto('http://localhost:5173/cart')
        await page.wait_for_timeout(2000)
        await page.screenshot(path='verification/screenshots/cart_final.png', full_page=True)

        # Check for checkout button (Complete Purchase in EN)
        checkout_button = page.get_by_role("button", name="Complete Purchase")
        is_visible = await checkout_button.is_visible()
        print(f"Checkout button (Complete Purchase) visible: {is_visible}")

        if not is_visible:
            # Check for empty cart message
            empty_msg = page.locator('text=Your cart is empty')
            if await empty_msg.is_visible():
                print("Cart is unexpectedly empty")
            else:
                print("Checkout button not found but cart is not empty?")
                # Print all button texts
                buttons = await page.get_by_role("button").all_text_contents()
                print(f"Buttons on page: {buttons}")

        await browser.close()

if __name__ == "__main__":
    os.makedirs('verification/screenshots', exist_ok=True)
    asyncio.run(run_verification())
