/**
 * ART OF THE GRILL - TECHNICAL COORDINATION ENGINE
 * -------------------------------------------------------------------------
 * This module manages the synchronization between the instructional steps
 * of the grilling process and their corresponding visual representations.
 *
 * ARCHITECTURE:
 * - Trigger: Each .art-step acts as a ScrollTrigger anchor.
 * - State Management: Single-source-of-truth index tracking.
 * - Visual Handlers: CSS-driven transitions for performance, orchestrated by JS.
 */

document.addEventListener('DOMContentLoaded', () => {
    /**
     * SELECTORS & PRE-FLIGHT CHECKS
     * We convert NodeLists to Arrays immediately to leverage GSAP's utility
     * functions and native array methods.
     */
    const steps = gsap.utils.toArray('.art-step');
    const visuals = gsap.utils.toArray('.art-visual');

    // Abort if the DOM structure doesn't match the expected schema
    if (!steps.length || !visuals.length) {
        // Technical note: Failing silently to prevent breaking global JS execution
        return;
    }

    /**
     * SCROLLTRIGGER ORCHESTRATION
     * We loop through each technical step and create a dedicated observer.
     * The 'start' and 'end' markers are tuned for Luanda's vertical reading flow.
     */
    steps.forEach((step, i) => {
        ScrollTrigger.create({
            trigger: step,
            // Activation happens when the step title crosses the center-line
            start: 'top center+=100',
            end: 'bottom center',

            // Sync forward scroll
            onEnter: () => updateArtStep(i),

            // Sync backward scroll (critical for cinematic consistency)
            onEnterBack: () => updateArtStep(i),

            // Technical metadata (Development only)
            // id: `grill-step-${i}`
        });
    });

    /**
     * STATE UPDATE HANDLER
     * Centralized function to manage the 'is-active' classes.
     * Leveraging CSS transitions (defined in stats.css) for smooth cross-fades.
     *
     * @param {number} index - The active step index (0-indexed).
     */
    function updateArtStep(index) {
        // Batch updates to minimize layout thrashing
        steps.forEach((s, i) => {
            const isActive = i === index;
            s.classList.toggle('is-active', isActive);

            // Update ARIA states for accessibility
            s.setAttribute('aria-current', isActive ? 'step' : 'false');
        });

        visuals.forEach((v, i) => {
            v.classList.toggle('is-active', i === index);
        });

        /**
         * CINEMATIC REFINEMENT
         * Add a subtle scale nudge to the active visual to imply depth.
         */
        if (visuals[index]) {
            gsap.to(visuals[index], {
                scale: 1,
                duration: 1.2,
                ease: 'power2.out',
                overwrite: true
            });
        }
    }
});
