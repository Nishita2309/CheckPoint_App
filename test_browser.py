from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.on("console", lambda msg: print(f"CONSOLE: {msg.text}"))
        page.on("pageerror", lambda err: print(f"ERROR: {err}"))
        page.goto("http://localhost:8080/login.html")
        page.wait_for_timeout(2000)
        print("Page loaded")
        
        # Test clicking sign up
        page.fill('#auth-email', 'test@example.com')
        page.fill('#auth-password', 'password123')
        page.click('button.m-confirm')
        page.wait_for_timeout(2000)
        
        browser.close()

if __name__ == "__main__":
    run()
