/*
    PRELOADER LOGIC
    Creates a cinematic entry experience
*/

class Preloader {
    constructor() {
        this.container = document.querySelector('.preloader');
        this.progressBar = document.querySelector('.preloader__progress-bar');
        this.progressNumber = document.querySelector('.preloader__progress-number');
        this.logo = document.querySelector('.preloader__logo');
        this.quote = document.querySelector('.preloader__quote');
        this.curtain = document.querySelector('.preloader__curtain');

        this.init();
    }

    init() {
        // Stop scroll during loading
        if (window.lenis) window.lenis.stop();
        document.body.style.overflow = 'hidden';

        const tl = gsap.timeline();

        // 1. Initial logo fade in
        tl.fromTo(this.logo,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
        );

        // 2. Progress animation
        const progressObj = { value: 0 };
        tl.to(progressObj, {
            value: 100,
            duration: 2.5,
            ease: 'none',
            onUpdate: () => {
                const p = Math.round(progressObj.value);
                this.progressBar.style.width = `${p}%`;
                this.progressNumber.textContent = p < 10 ? `0${p}` : p;
            }
        }, "-=0.5");

        // 3. Quote fade in
        tl.to(this.quote, {
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        }, "-=1.5");

        // 4. Exit sequence
        tl.to([this.logo, this.progressNumber, this.progressBar, this.quote], {
            opacity: 0,
            y: -20,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.in'
        });

        tl.to(this.curtain, {
            y: '0%',
            duration: 0.8,
            ease: 'power4.inOut'
        });

        tl.to(this.container, {
            y: '-100%',
            duration: 1,
            ease: 'power4.inOut',
            onComplete: () => {
                this.container.remove();
                if (window.lenis) window.lenis.start();
                document.body.style.overflow = '';

                // Final Reveal of the body after curtain lift
                gsap.to('body', { opacity: 1, duration: 0.5 });

                // Trigger Hero Animation if it exists
                window.dispatchEvent(new CustomEvent('preloaderComplete'));
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure styles are ready
    setTimeout(() => new Preloader(), 100);
});
