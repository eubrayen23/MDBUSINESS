// counter.js — contadores animados com ScrollTrigger
class AnimatedCounter {
  constructor() {
    this.counters = document.querySelectorAll('.stat-number');
    if (!this.counters.length) return;
    this.init();
  }

  init() {
    this.counters.forEach(counter => {
      const target   = parseFloat(counter.dataset.target);
      const suffix   = counter.dataset.suffix   || '';
      const prefix   = counter.dataset.prefix   || '';
      const decimals = parseInt(counter.dataset.decimals) || 0;

      ScrollTrigger.create({
        trigger: counter,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to({ val: 0 }, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate() {
              counter.textContent = prefix + this.targets()[0].val
                .toFixed(decimals) + suffix;
            },
          });
        },
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => new AnimatedCounter());
