/**
 * MAIN ORCHESTRATION ENGINE - CHURRASCARIA NANDINHOS
 * -------------------------------------------------------------------------
 * This is the central hub for all global UI logic. It coordinates
 * state management, navigation interactions, and initializes
 * the cinematic effects suite.
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. MOBILE MENU ORCHESTRATION
    const toggle = document.querySelector('.navbar__mobile-toggle');
    const menu   = document.querySelector('.mobile-menu');
    const links  = document.querySelectorAll('.mobile-nav-link');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            const isOpen = menu.classList.contains('is-active');

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    links.forEach(link => {
        link.addEventListener('click', () => closeMenu());
    });

    function openMenu() {
        menu.classList.add('is-active');
        toggle.classList.add('is-active');
        document.body.style.overflow = 'hidden';

        // Animate links in
        gsap.fromTo('.mobile-nav-link',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2, ease: 'power3.out' }
        );
    }

    function closeMenu() {
        menu.classList.remove('is-active');
        toggle.classList.remove('is-active');
        document.body.style.overflow = '';
    }

    // 3. SMOOTH ANCHOR NAVIGATION
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                if (window.lenis) {
                    window.lenis.scrollTo(target, { offset: -80, duration: 1.5 });
                } else {
                    const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }
        });
    });

    // 4. IMAGE LOADING OPTIMIZATION
    const observerOptions = {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('is-loaded');
                }
                observer.unobserve(img);
            }
        });
    }, observerOptions);

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
});

// 5. GLOBAL ERROR HANDLING FOR CANVAS
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'CANVAS' || e.message.includes('getContext')) {
        console.warn('Cinematic Canvas Effects disabled due to browser limitation.');
        document.body.classList.add('no-canvas');
    }
}, true);
