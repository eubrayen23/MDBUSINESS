document.addEventListener('DOMContentLoaded', () => {
  // Inicializar Splitting.js - divide ttulo em caracteres
  Splitting();

  // Listen for preloader completion
  window.addEventListener('preloaderComplete', initHero);
});

function initHero() {
  const tl = gsap.timeline({ delay: 0.2 });

  // 1. Zoom out da imagem hero
  tl.from('.hero__image', {
    scale: 1.3,
    duration: 3,
    ease: 'power2.out',
  }, 0);

  // Floating items entry
  tl.from('.hero__float-item', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    stagger: 0.2,
    ease: 'power3.out'
  }, 0.5);

  // 2. Badge de prmio - fade in
  tl.to('.hero__badge', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
  }, 0.5);

  // 3. Caracteres do ttulo - entram de baixo, staggered
  tl.to('.hero__title .char', {
    y: 0,
    opacity: 1,
    duration: 1.0,
    ease: 'power4.out',
    stagger: { amount: 0.6, from: 'start' },
  }, 0.7);

  // 4. Linha decorativa - expande
  tl.to('.hero__divider-line', {
    width: 80,
    duration: 0.8,
    ease: 'power2.inOut',
  }, 1.2);

  // 5. Subttulo
  tl.to('.hero__subtitle', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
  }, 1.4);

  // 6. CTAs
  tl.to('.hero__ctas', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power3.out',
  }, 1.6);

  // 7. Scroll indicator
  tl.to('.hero__scroll-indicator', {
    opacity: 1,
    duration: 1.0,
    ease: 'power2.out',
  }, 2.0);

  // PARALLAX - imagem hero move a 0.5x velocidade do scroll
  gsap.to('.hero__media-inner', {
    yPercent: 20,
    scale: 1.1,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  // Floating parallax
  document.querySelectorAll('.hero__float-item').forEach(item => {
    const speed = parseFloat(item.dataset.speed);
    gsap.to(item, {
      y: (index, target) => -ScrollTrigger.maxScroll(window) * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // Fade out do contedo hero ao fazer scroll
  gsap.to('.hero__content', {
    opacity: 0,
    y: -60,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'center top',
      end: 'bottom top',
      scrub: true,
    },
  });
});
