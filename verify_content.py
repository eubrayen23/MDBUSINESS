import os
import sys
from playwright.sync_api import sync_playwright

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Load the index.html file
        path = os.path.abspath("index.html")
        page.goto(f"file://{path}")

        # Check for original branding (case insensitive due to CSS text-transform)
        logo = page.locator(".logo").first
        text = logo.inner_text().upper()
        if "MD BUSINESS AO" not in text:
            print(f"Error: Logo text mismatch. Found: {text}")
            sys.exit(1)

        # Check for marketplace section
        marketplace = page.locator("#marketplace h2")
        if "Destaques do Marketplace" not in marketplace.inner_text():
            print(f"Error: Marketplace section missing. Found: {marketplace.inner_text()}")
            sys.exit(1)

        # Check for original slogan in hero
        hero_subtitle = page.locator(".hero-subtitle")
        if "Loja & Marketplace" not in hero_subtitle.inner_text():
            print(f"Error: Hero subtitle mismatch. Found: {hero_subtitle.inner_text()}")
            sys.exit(1)

        print("Content verification passed!")
        browser.close()

if __name__ == "__main__":
    verify()
