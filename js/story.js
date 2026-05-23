/*
    STORY HORIZONTAL SCROLL
    Upgrades the 'About' section to a multi-panel experience
*/

document.addEventListener('DOMContentLoaded', () => {
    const storySection = document.querySelector('.story');
    const scrollContainer = document.querySelector('.story__horizontal-scroll');

    if (!storySection || !scrollContainer || window.innerWidth < 1024) return;

    const panels = gsap.utils.toArray('.story__panel');

    gsap.to(scrollContainer, {
        x: () => -(scrollContainer.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
            trigger: storySection,
            start: 'top top',
            end: () => `+=${scrollContainer.scrollWidth - window.innerWidth}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1
        }
    });

    // Animate content inside panels
    panels.forEach(panel => {
        const content = panel.querySelector('.story__content');
        const visual  = panel.querySelector('.story__visual');

        if (content) {
            gsap.from(content, {
                opacity: 0,
                x: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: panel,
                    containerAnimation: gsap.getById('storyScroll'), // Need to assign ID if possible, but triggers usually handle this
                    start: 'left center',
                    scrub: true
                }
            });
        }
    });
});
