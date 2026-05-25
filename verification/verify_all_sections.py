from playwright.sync_api import sync_playwright
import os
import time

def run_verification(page, is_mobile=False):
    if is_mobile:
        page.set_viewport_size({"width": 375, "height": 812})
        suffix = "_mobile"
    else:
        page.set_viewport_size({"width": 1440, "height": 900})
        suffix = "_desktop"

    page.goto("http://localhost:4175")

    # Wait for splash screen
    time.sleep(4)

    # Click Skip if present
    try:
        page.get_by_role("button", name="Saltar Introdução").click(timeout=1000)
    except:
        pass

    time.sleep(1)
    page.screenshot(path=f"verification/screenshots/01_hero{suffix}.png")

    # Scroll to sections and take screenshots based on actual App.jsx content
    sections = [
        ("Soluções Clínicas de Alta Complexidade", "02_servicos"),
        ("Compromisso com a Perfeição Clínica", "03_sobre"),
        ("Mestria Técnica", "04_equipa"),
        ("Resultados de Excelência", "05_resultados"),
        ("Testemunhos Institucionais", "06_testemunhos"),
        ("Estabelecer Contacto", "07_contacto")
    ]

    for text, name in sections:
        try:
            # Using partial text match for more robustness
            element = page.get_by_text(text).first
            element.scroll_into_view_if_needed()
            time.sleep(1.5) # Wait for animations (Framer Motion)
            page.screenshot(path=f"verification/screenshots/{name}{suffix}.png")
            print(f"Captured {name}{suffix}")
        except Exception as e:
            print(f"Could not capture {name}{suffix}: {e}")

    # Verify Booking System
    try:
        page.get_by_role("button", name="Iniciar Marcação Agora").click()
        time.sleep(1)
        page.screenshot(path=f"verification/screenshots/08_booking_step1{suffix}.png")
        print(f"Captured booking_step1{suffix}")
    except Exception as e:
        print(f"Could not capture booking{suffix}: {e}")

if __name__ == "__main__":
    if not os.path.exists("verification/screenshots"):
        os.makedirs("verification/screenshots")

    with sync_playwright() as p:
        # Desktop
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        print("Running Desktop Verification...")
        run_verification(page, is_mobile=False)

        # Mobile
        run_verification(page, is_mobile=True)

        browser.close()
