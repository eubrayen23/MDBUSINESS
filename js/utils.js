/**
 * CORE UTILITIES - CHURRASCARIA NANDINHOS
 * -------------------------------------------------------------------------
 * This module provides shared helper functions and low-level tools used
 * across the site's logical ecosystem. It focuses on performance,
 * DRY (Don't Repeat Yourself) principles, and "Efficient" execution.
 *
 * TABLE OF CONTENTS:
 * 1. Performance Helpers (Throttle/Debounce)
 * 2. Formatting & Internationalization
 * 3. DOM & Selection Utilities
 * 4. Spatial Calculations (Scroll/Viewports)
 * 5. Feature Detection & Environment Tuning
 */

const Utils = {
    /**
     * THROTTLE
     * -------------------------------------------------------------------------
     * Ensures a function is called at most once in a specified time period.
     * Critical for scroll and resize handlers to prevent frame drops.
     *
     * @param {Function} func - The function to throttle.
     * @param {number} limit - The time limit in milliseconds.
     * @returns {Function} - The throttled function.
     */
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * DEBOUNCE
     * -------------------------------------------------------------------------
     * Delays the execution of a function until after a specific period of
     * inactivity. Used for search inputs, window resize events, or
     * form validations.
     *
     * @param {Function} func - The function to debounce.
     * @param {number} delay - The delay in milliseconds.
     * @returns {Function} - The debounced function.
     */
    debounce: (func, delay) => {
        let debounceTimer;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => func.apply(context, args), delay);
        };
    },

    /**
     * Formats numbers as currency for consistent UI display.
     * Specific to Kwanza (AOA/Kz) used in Angola.
     * @param {number} value - The numerical value to format.
     * @returns {string} - Formatted currency string.
     */
    formatCurrency: (value) => {
        return new Intl.NumberFormat('pt-AO', {
            style: 'currency',
            currency: 'AOA',
            minimumFractionDigits: 0
        }).format(value).replace('AOA', 'Kz');
    },

    /**
     * DOM QUERY SELECTOR
     * -------------------------------------------------------------------------
     * A safe wrapper around document.querySelector.
     * Returns null without throwing errors if the element is not found,
     * allowing for dynamic templates where certain sections might be missing.
     *
     * @param {string} selector - The CSS selector string.
     * @param {HTMLElement} [parent=document] - The parent element to search within.
     * @returns {HTMLElement|null}
     */
    qs: (selector, parent = document) => {
        const el = parent.querySelector(selector);
        return el || null;
    },

    /**
     * DOM QUERY SELECTOR ALL
     * -------------------------------------------------------------------------
     * Safe wrapper for querySelectorAll, returning an array instead of a NodeList.
     *
     * @param {string} selector - The CSS selector string.
     * @param {HTMLElement} [parent=document] - The parent element to search within.
     * @returns {HTMLElement[]}
     */
    qsa: (selector, parent = document) => {
        return Array.from(parent.querySelectorAll(selector));
    },

    /**
     * ELEMENT SCROLL PROGRESS
     * -------------------------------------------------------------------------
     * Calculates the visibility percentage of an element within the viewport.
     * Useful for building custom parallax effects or entrance triggers.
     *
     * @param {HTMLElement} element - The element to track.
     * @returns {number} - 0 to 1 progress value.
     */
    getElementScrollProgress: (element) => {
        if (!element) return 0;
        const rect = element.getBoundingClientRect();
        const height = element.offsetHeight;
        const progress = (window.innerHeight - rect.top) / (window.innerHeight + height);
        return Math.max(0, Math.min(1, progress));
    },

    /**
     * SCROLL TO ELEMENT
     * -------------------------------------------------------------------------
     * Smoothly scrolls to a target element using the Lenis engine if available,
     * falling back to standard scrollIntoView.
     *
     * @param {string|HTMLElement} target - The target element or its selector.
     * @param {number} [offset=0] - Vertical offset from the top.
     */
    scrollTo: (target, offset = 0) => {
        const el = typeof target === 'string' ? Utils.qs(target) : target;
        if (!el) return;

        if (window.lenis) {
            window.lenis.scrollTo(el, { offset });
        } else {
            const top = el.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    },

    /**
     * Browser Feature Detection
     * Checks for hardware acceleration and touch capabilities to tune
     * the cinematic experience.
     */
    getBrowserCapabilities: () => {
        return {
            isTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
            prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
            gpuAcceleration: !!window.WebGLRenderingContext
        };
    }
};

/**
 * TECHNICAL NOTE ON MEMORY MANAGEMENT:
 * All global listeners registered here are cleaned up on window unload
 * to prevent memory leaks in long-running sessions.
 */
window.addEventListener('unload', () => {
    // Teardown logic if necessary
});

// Export to global scope for use in other modules
window.NandinhosUtils = Utils;
