document.addEventListener('DOMContentLoaded', () => {
  // Inicializar Splitting.js — divide título em caracteres
  Splitting();

  const tl = gsap.timeline({ delay: 0.3 });

  // 1. Zoom out da imagem hero
  tl.from('.hero__image', {
    scale: 1.15,
    duration: 2.5,
    ease: 'power2.out',
  }, 0);

  // 2. Badge de prémio — fade in
  tl.to('.hero__badge', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out',
  }, 0.5);

  // 3. Caracteres do título — entram de baixo, staggered
  tl.to('.hero__title .char', {
    y: 0,
    opacity: 1,
    duration: 1.0,
    ease: 'power4.out',
    stagger: { amount: 0.6, from: 'start' },
  }, 0.7);

  // 4. Linha decorativa — expande
  tl.to('.hero__divider-line', {
    width: 80,
    duration: 0.8,
    ease: 'power2.inOut',
  }, 1.2);

  // 5. Subtítulo
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

  // PARALLAX — imagem hero move a 0.5x velocidade do scroll
  gsap.to('.hero__media', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  // Fade out do conteúdo hero ao fazer scroll
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
