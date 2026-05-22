class MagneticCursor {
  constructor() {
    this.dot  = document.querySelector('.cursor-dot');
    this.ring = document.querySelector('.cursor-ring');
    this.mouse = { x: 0, y: 0 };
    this.ringPos = { x: 0, y: 0 };
    this.speed = 0.12; // lag do anel — quanto menor mais lag

    if (!this.dot || !this.ring) return;

    this.bindEvents();
    this.loop();
    this.initMagnetic();
  }

  bindEvents() {
    document.addEventListener('mousemove', e => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;

      gsap.set(this.dot, { x: e.clientX, y: e.clientY });
    });

    // Hover em elementos interactivos
    const updateHoverTargets = () => {
      const hoverTargets = document.querySelectorAll('a, button, .menu-tab, .gallery-item');
      hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', () => this.ring.classList.add('is-hovering'));
        el.addEventListener('mouseleave', () => this.ring.classList.remove('is-hovering'));
      });
    };

    updateHoverTargets();
    // Observe DOM changes to re-bind hover events if needed
    const observer = new MutationObserver(updateHoverTargets);
    observer.observe(document.body, { childList: true, subtree: true });

    // Esconder quando sai da janela
    document.addEventListener('mouseleave', () => {
      this.dot.style.opacity = '0';
      this.ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      this.dot.style.opacity = '1';
      this.ring.style.opacity = '1';
    });
  }

  // Efeito magnético — botões atraem o cursor quando perto
  initMagnetic() {
    const magneticBtns = document.querySelectorAll('.btn-magnetic');
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top  + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.3;
        const deltaY = (e.clientY - centerY) * 0.3;

        gsap.to(btn, { x: deltaX, y: deltaY, duration: 0.4, ease: 'power2.out' });
        this.ring.classList.add('is-magnetic');
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.5)' });
        this.ring.classList.remove('is-magnetic');
      });
    });
  }

  // RAF loop — anel segue com suavidade (lerp)
  loop() {
    this.ringPos.x += (this.mouse.x - this.ringPos.x) * this.speed;
    this.ringPos.y += (this.mouse.y - this.ringPos.y) * this.speed;

    gsap.set(this.ring, { x: this.ringPos.x, y: this.ringPos.y });
    requestAnimationFrame(() => this.loop());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 1024) {
    new MagneticCursor();
  }
});
