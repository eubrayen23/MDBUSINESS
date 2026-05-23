document.addEventListener('DOMContentLoaded', () => {

  /**
   * REVEAL ANIMATIONS ENGINE — CHURRASCARIA NANDINHOS
   * -------------------------------------------------------------------------
   * This module acts as the digital stage director, coordinating the entrance
   * and exit of every visual element on the page. By leveraging GSAP's
   * ScrollTrigger, we ensure that performance remains high while achieving
   * a "Cinematic" feel that respects the "Portuguese Efficient" brand.
   *
   * PRINCIPLES:
   * 1. Purposeful Motion: Every animation must guide the user's eye to key content.
   * 2. Staggered Delays: Groups of elements (like cards) enter in sequence, not at once.
   * 3. Directional Flow: Elements generally enter from the direction of scroll (bottom-up).
   * 4. Ease of Use: Standardizing on 'power3.out' for a physical, decelerating feel.
   */

  /**
   * 1. FADE UP REVEALS
   * -------------------------------------------------------------------------
   * The most common reveal type. Elements start slightly lower (y: 50) and
   * at zero opacity, sliding up to their final position as they enter the
   * lower quadrant of the viewport.
   *
   * Targets: Headlines, paragraphs, standard buttons.
   */
  gsap.utils.toArray('[data-reveal="fade-up"]').forEach(el => {
    // Check for custom delay defined in data-attributes (useful for grids)
    const delay = parseFloat(el.dataset.revealDelay || 0);

    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      delay: delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%', // Trigger when element is 88% from the top of the viewport
        once: true,      // Animation runs only once to prevent visual fatigue
      },
    });
  });

  /**
   * 2. FADE LEFT REVEALS (Entering from Right)
   * -------------------------------------------------------------------------
   * Elements slide in from the right of the screen. This creates a sense of
   * lateral discovery, commonly used for the right-hand column in 60/40 layouts.
   */
  gsap.utils.toArray('[data-reveal="fade-left"]').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      x: 60,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true
      },
    });
  });

  /**
   * 3. FADE RIGHT REVEALS (Entering from Left)
   * -------------------------------------------------------------------------
   * Complementary to fade-left. Used to create a "pincer" movement where
   * two columns meet in the middle, or to emphasize a left-aligned visual.
   */
  gsap.utils.toArray('[data-reveal="fade-right"]').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      x: -60,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true
      },
    });
  });

  // 4. LINHA DECORATIVA — expande horizontalmente
  gsap.utils.toArray('.section-divider').forEach(line => {
    gsap.from(line, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 1.2,
      ease: 'power3.inOut',
      scrollTrigger: { trigger: line, start: 'top 90%', once: true },
    });
  });

  // 5. TÍTULO com Splitting — caracteres entram em stagger (excepto hero que já tem animação própria)
  gsap.utils.toArray('h2[data-splitting]').forEach(el => {
    const chars = el.querySelectorAll('.char');
    if (!chars.length) return;

    gsap.from(chars, {
      opacity: 0,
      y: '110%',
      duration: 0.8,
      ease: 'power4.out',
      stagger: { amount: 0.5 },
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });

  // 6. PARALLAX EM IMAGENS
  const mm = gsap.matchMedia();

  mm.add("(min-width: 1025px)", () => {
    gsap.utils.toArray('.parallax-img').forEach(img => {
      gsap.to(img, {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: img.closest('section') || img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
  });

  mm.add("(max-width: 1024px)", () => {
    gsap.utils.toArray('.parallax-img').forEach(img => {
      gsap.set(img, { yPercent: 0 }); // No parallax on mobile to prevent overflow
    });
  });

  /**
   * 7. NAVBAR — SCROLL ADAPTATION ENGINE
   * -------------------------------------------------------------------------
   * Implements two key behaviors:
   * A) Transition to opaque/blurred state after initial hero scroll.
   * B) "Smart Hide" — hiding the navbar on scroll down and revealing on up.
   */
  let lastScroll = 0;
  const navbar = document.getElementById('navbar');

  // Logic A: Opacity Shift
  ScrollTrigger.create({
    start: 80, // Threshold in pixels
    onUpdate: self => {
      const isScrolled = self.scroll() > 80;
      navbar.classList.toggle('is-scrolled', isScrolled);

      /**
       * ACCESSIBILITY NOTE:
       * We ensure that even when transparent, the navbar maintains
       * enough contrast via the hero__overlay--top shadow.
       */
    },
  });

  // Logic B: Smart Directional Toggle
  const handleNavbarVisibility = () => {
    const current = window.scrollY;

    // Condition 1: Hide if scrolling down and past the header area
    if (current > lastScroll && current > 200) {
      navbar.classList.add('is-hidden');
    }
    // Condition 2: Reveal if scrolling up
    else {
      navbar.classList.remove('is-hidden');
    }

    lastScroll = current;
  };

  /**
   * PERFORMANCE:
   * Standard passive listeners are highly optimized in modern browsers.
   */
  window.addEventListener('scroll', handleNavbarVisibility, { passive: true });

  // 8. WHATSAPP FLOAT LINK
  const floatBtn = document.getElementById('whatsappFloat');
  if (floatBtn) {
    const msg = encodeURIComponent('Olá! Vim pelo site da Churrascaria Nandinhos e gostaria de mais informações.');
    floatBtn.href = `https://wa.me/244934859497?text=${msg}`;
  }

  /**
   * 9. SCROLL PROGRESS INDICATOR
   * Choreographs the top progress bar with global scroll depth.
   */
  const progressBar = document.querySelector('.scroll-progress__bar');
  if (progressBar) {
      gsap.to(progressBar, {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
              trigger: document.body,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.3
          }
      });
  }

  /**
   * 10. DYNAMIC BACKGROUND THEMING
   * Modified to support the new light-themed revision while maintaining
   * immersive transitions.
   */
  const sections = gsap.utils.toArray('section');
  document.body.classList.add('bg-shift-active');

  sections.forEach((section, i) => {
      let targetTheme = 'theme-cream';

      // Keep dark themes for Hero and Stats only for cinematic impact
      if (section.classList.contains('hero')) targetTheme = 'theme-coal';
      if (section.classList.contains('stats')) targetTheme = 'theme-ash';

      ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => {
              document.body.classList.remove('theme-coal', 'theme-ash', 'theme-cream');
              document.body.classList.add(targetTheme);
          },
          onEnterBack: () => {
              document.body.classList.remove('theme-coal', 'theme-ash', 'theme-cream');
              document.body.classList.add(targetTheme);
          },
      });
  });

  /**
   * 11. GLOBAL IMAGE REVEAL STAGGER
   * Standardizes the entrance of all gallery and menu items to ensure
   * a cohesive choreographed experience. This system targets elements
   * marked with [data-reveal="scale"] or [data-reveal="fade-up"].
   */
  const standardReveals = gsap.utils.toArray('[data-reveal="scale"]');
  standardReveals.forEach((el, index) => {
      // Calculate a slight delay based on document order to ensure grid flow
      const gridDelay = (index % 3) * 0.1;

      gsap.from(el, {
          opacity: 0,
          scale: 0.92,
          y: 30,
          duration: 1.4,
          delay: gridDelay,
          ease: 'power4.out', // Use a smoother ease for heavy scale-ins
          scrollTrigger: {
              trigger: el,
              start: 'top 92%',
              once: true,
              // Invalidate on refresh ensures calculations stay accurate on resize
              invalidateOnRefresh: true
          }
      });
  });

  /**
   * 12. PARALLAX TEXT ACCENTS
   * Applies subtle independent movement to section badges to imply
   * a multi-layered interface depth. This "Effective" parallax
   * adds dynamic energy without distracting from the primary data.
   */
  const floatingBadges = gsap.utils.toArray('.section-badge');
  floatingBadges.forEach(badge => {
      gsap.to(badge, {
          y: -40,
          ease: 'none',
          scrollTrigger: {
              trigger: badge,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
              // technical: prevent jitter on mobile devices
              anticipatePin: 1
          }
      });
  });

  /**
   * 12B. SECTION TITLE STAGGERED ENTRANCE
   * Coordinates the main headings with their respective section badges.
   */
  gsap.utils.toArray('.section-title').forEach(title => {
      gsap.from(title, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
              trigger: title,
              start: 'top 90%',
              once: true
          }
      });
  });

  /**
   * 13. DYNAMIC CURSOR THEME SYNC
   * Adjusts the custom cursor color based on the section's background theme.
   */
  ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
          const isDark = document.body.classList.contains('theme-coal') || document.body.classList.contains('theme-ash');
          const cursorDot = document.querySelector('.cursor-dot');
          const cursorRing = document.querySelector('.cursor-ring');

          if (cursorDot && cursorRing) {
              if (isDark) {
                  gsap.to(cursorDot, { backgroundColor: '#FFFFFF', duration: 0.4 });
                  gsap.to(cursorRing, { borderColor: 'rgba(255,255,255,0.5)', duration: 0.4 });
              } else {
                  gsap.to(cursorDot, { backgroundColor: '#E31212', duration: 0.4 });
                  gsap.to(cursorRing, { borderColor: 'rgba(227, 18, 18, 0.5)', duration: 0.4 });
              }
          }
      }
  });

  /**
   * 14. FOOTER ENTRANCE CHOREOGRAPHY
   * Ensures the site concludes with a high-impact reveal of the credits
   * and brand sign-off.
   */
  const footerTl = gsap.timeline({
      scrollTrigger: {
          trigger: '.footer',
          start: 'top 80%',
          once: true
      }
  });

  footerTl.from('.footer__logo', { opacity: 0, y: 20, duration: 0.8, ease: 'power3.out' })
          .from('.footer__nav a', { opacity: 0, x: -10, stagger: 0.05, duration: 0.6, ease: 'power2.out' }, '-=0.4')
          .from('.footer__credits', { opacity: 0, duration: 1 }, '-=0.5');

  /**
   * 15. BACK TO TOP ENGINE
   * -------------------------------------------------------------------------
   * Implements a functional and visual feedback loop for navigating back
   * to the start of the experience. The component features a circular
   * progress bar that fills as the user approaches the bottom of the page.
   */
  const backToTop = document.getElementById('backToTop');
  const progressCircle = backToTop?.querySelector('circle');

  if (backToTop && progressCircle) {
      // Physical calculations for the SVG stroke
      const radius = progressCircle.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;

      /**
       * CLICK HANDLER
       * Leverages the Lenis engine for a smooth, physical climb back to 0.
       */
      backToTop.addEventListener('click', () => {
          if (window.lenis) {
              window.lenis.scrollTo(0, {
                  duration: 2,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
              });
          } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
          }
      });

      /**
       * SCROLL SYNC
       * Tracks global progress and updates the UI accordingly.
       */
      ScrollTrigger.create({
          start: 'top -20%', // Activate after 20% scroll depth
          onUpdate: (self) => {
              // Toggle physical visibility
              // Condition: user must be at least 500px down the stage
              const isVisible = self.scroll() > 500;
              backToTop.classList.toggle('is-visible', isVisible);

              // Update circular progress ring
              const progress = self.progress;
              const offset = circumference - (progress * circumference);
              progressCircle.style.strokeDashoffset = offset;
          }
      });
  }

});
