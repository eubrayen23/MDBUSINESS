from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 2000})
        try:
            page.goto("https://mdbusinessao.netlify.app/", wait_until="networkidle")
            page.wait_for_timeout(5000)
            page.screenshot(path="verification/screenshots/reference_site.png", full_page=True)
            with open("verification/reference_content.html", "w") as f:
                f.write(page.content())
            print("Successfully captured reference site.")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
