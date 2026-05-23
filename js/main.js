/*
 * MAIN UI & NAVIGATION ENGINE — CHURRASCARIA NANDINHOS
 * -------------------------------------------------------------------------
 * This module handles global interactions, magnetic effects, and the mobile
 * navigation system. It coordinates with GSAP for smooth animations.
*/

/**
 * MAGNETIC BUTTONS EFFECT
 * Creates a physical attraction between the cursor and interactive elements.
 * Improves discoverability and adds a premium feel to the UI.
 */
function initMagneticButtons() {
    // Select all elements that should exhibit magnetic behavior
    const btns = document.querySelectorAll('.btn, .menu-tab, .navbar__logo, .whatsapp-float');

    btns.forEach(btn => {
        // Track mouse movement over the element
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();

            // Calculate distance from center
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Move element towards mouse with a 30% dampening factor
            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.4,
                ease: 'power2.out'
            });
        });

        // Reset position when mouse leaves
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.6,
                // Use an elastic ease for a more physical, snappy return
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });
}

/**
 * CORE INITIALIZATION
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize premium interactions if not on a touch device
    if (window.innerWidth > 1024) {
        initMagneticButtons();
    }

    /**
     * MOBILE MENU LOGIC
     * Handles the top-down overlay and synchronization with the smooth scroll engine.
     */
    const mobileToggle = document.querySelector('.navbar__mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            // Toggle the active class on both the menu and the hamburger button
            const isActive = mobileMenu.classList.toggle('is-active');
            mobileToggle.classList.toggle('is-active');

            // Sync with global scroll state
            if (isActive) {
                // Disable scrolling to prevent "scroll leaking" through the overlay
                document.body.style.overflow = 'hidden';
                if (window.lenis) window.lenis.stop();

                // Entrance animation for links
                gsap.from('.mobile-nav-link', {
                    y: 30,
                    opacity: 0,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: 'power3.out'
                });
            } else {
                // Re-enable scrolling when menu is closed
                document.body.style.overflow = '';
                if (window.lenis) window.lenis.start();
            }
        });

        // Close menu automatically when a navigation link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('is-active');
                mobileToggle.classList.remove('is-active');
                document.body.style.overflow = '';
                if (window.lenis) window.lenis.start();
            });
        });
    }

    /**
     * NAVBAR SCROLL PROGRESS
     * Updates a CSS variable based on scroll depth for advanced styling (optional).
     */
    window.addEventListener('scroll', () => {
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        document.documentElement.style.setProperty('--scroll-progress', scrollPercent);
    }, { passive: true });
});
