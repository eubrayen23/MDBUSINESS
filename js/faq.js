/**
 * FAQ SECTION LOGIC
 * Handles accordion functionality with GSAP animations
 */

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');
        const answer = item.querySelector('.faq__answer');

        if (!question || !answer) return;

        // Set initial state
        gsap.set(answer, { height: 0, opacity: 0, overflow: 'hidden' });

        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            // Close all others
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('is-open')) {
                    const otherAnswer = otherItem.querySelector('.faq__answer');
                    otherItem.classList.remove('is-open');
                    gsap.to(otherAnswer, {
                        height: 0,
                        opacity: 0,
                        duration: 0.5,
                        ease: 'power2.inOut'
                    });
                }
            });

            // Toggle current
            if (isOpen) {
                item.classList.remove('is-open');
                gsap.to(answer, {
                    height: 0,
                    opacity: 0,
                    duration: 0.5,
                    ease: 'power2.inOut'
                });
            } else {
                item.classList.add('is-open');
                gsap.to(answer, {
                    height: 'auto',
                    opacity: 1,
                    duration: 0.6,
                    ease: 'power3.out'
                });
            }
        });
    });
});
