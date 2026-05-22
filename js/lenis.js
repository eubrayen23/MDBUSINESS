// INICIALIZAÇÃO DO LENIS — física de momentum premium
document.addEventListener('DOMContentLoaded', () => {
  const lenis = new Lenis({
    duration: 1.4,         // duração do momentum
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    smoothTouch: false,    // desactivar em mobile (melhor UX)
    touchMultiplier: 2,
  });

  // Sincronizar Lenis com o ticker do GSAP — obrigatório para ScrollTrigger funcionar
  gsap.registerPlugin(ScrollTrigger);

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Tornar lenis acessível globalmente
  window.lenis = lenis;

  // Links de navegação com scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const targetAttr = anchor.getAttribute('href');
      if (targetAttr === '#') return;

      const target = document.querySelector(targetAttr);
      if (target) lenis.scrollTo(target, { offset: -80, duration: 1.6 });
    });
  });
});
