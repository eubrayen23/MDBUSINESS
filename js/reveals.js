document.addEventListener('DOMContentLoaded', () => {

  // 1. FADE UP — elemento padrão de reveal
  gsap.utils.toArray('[data-reveal="fade-up"]').forEach(el => {
    const delay = parseFloat(el.dataset.revealDelay || 0);
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1.0,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        once: true,
      },
    });
  });

  // 2. FADE LEFT
  gsap.utils.toArray('[data-reveal="fade-left"]').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      x: 60,
      duration: 1.0,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });

  // 3. FADE RIGHT
  gsap.utils.toArray('[data-reveal="fade-right"]').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      x: -60,
      duration: 1.0,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
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

  // 7. NAVBAR — esconder ao scroll para baixo, mostrar ao subir
  let lastScroll = 0;
  const navbar = document.getElementById('navbar');

  ScrollTrigger.create({
    start: 80,
    onUpdate: self => {
      navbar.classList.toggle('is-scrolled', self.scroll() > 80);
    },
  });

  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > lastScroll && current > 200) {
      navbar.classList.add('is-hidden');
    } else {
      navbar.classList.remove('is-hidden');
    }
    lastScroll = current;
  }, { passive: true });

  // 8. WHATSAPP FLOAT LINK
  const floatBtn = document.getElementById('whatsappFloat');
  if (floatBtn) {
    const msg = encodeURIComponent('Olá! Vim pelo site da Churrascaria Nandinhos e gostaria de mais informações.');
    floatBtn.href = `https://wa.me/244934859497?text=${msg}`;
  }

});
