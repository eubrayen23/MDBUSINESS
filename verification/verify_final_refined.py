from playwright.sync_api import sync_playwright
import os

def run_cuj(page):
    page.set_viewport_size({"width": 1280, "height": 800})
    page.goto("http://localhost:4175")

    # Wait for splash screen (it takes up to 3.5s)
    # The progress bar is controlled by a timer that adds 1 every 20ms, so 100 * 20 = 2000ms.
    # Plus a 500ms timeout.
    page.wait_for_timeout(4000)

    # Click Saltar Introdução if it's still there
    try:
        page.get_by_role("button", name="Saltar Introdução").click(timeout=1000)
    except:
        pass

    page.wait_for_timeout(1000)
    page.screenshot(path="verification/screenshots/hero_refined.png")

    # Scroll to Services
    page.get_by_role("link", name="Serviços").first.click()
    page.wait_for_timeout(1000)
    page.screenshot(path="verification/screenshots/services_refined.png")

    # Scroll to Results (Métricas)
    page.evaluate("window.scrollTo(0, document.body.scrollHeight / 2)")
    page.wait_for_timeout(1000)
    page.screenshot(path="verification/screenshots/results_refined.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()
