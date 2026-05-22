// gallery.js — Galeria masonry com lightbox cinematográfico

const GALLERY_IMAGES = [
  { src: 'images/galeria/unnamedjjj.webp', alt: 'Brasas vivas da churrasqueira Nandinhos', caption: 'As brasas que fazem a diferença' },
  { src: 'images/galeria/unnamedh.webp', alt: 'Churrasco misto premium da Nandinhos', caption: 'O churrasco que fez a fama' },
  { src: 'images/galeria/unnamed.jpg', alt: 'Interior do restaurante Nandinhos no Kinaxixi', caption: 'Sempre cheio ao almoço' },
  { src: 'images/galeria/unnamed (1).jpg', alt: 'Prato tradicional', caption: 'Tradição portuguesa em Luanda' },
  { src: 'images/galeria/unnamed (2).jpg', alt: 'Detalhe da carne', caption: 'Temperatura exacta, tempo ideal' },
  { src: 'images/galeria/WhatsApp Image 2026-05-22 at 17.38.27.jpeg', alt: 'Ambiente restaurante', caption: 'Kinaxixi — o coração de Luanda' },
];

class Gallery {
  constructor() {
    this.images  = GALLERY_IMAGES;
    this.current = 0;
    this.render();
    this.initLightbox();
  }

  render() {
    const grid = document.querySelector('.gallery__grid');
    if (!grid) return;

    this.images.forEach((img, index) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      item.dataset.index = index;
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', `Ver foto: ${img.caption}`);

      item.innerHTML = `
          <img src="${img.src}" alt="${img.alt}" loading="lazy">
          <div class="gallery-item__overlay">
            <p class="gallery-item__caption">${img.caption}</p>
            <span class="gallery-item__btn">✦ Ver</span>
          </div>
      `;

      item.addEventListener('click', () => this.openLightbox(index));
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') this.openLightbox(index);
      });

      grid.appendChild(item);
    });
  }

  initLightbox() {
    const lb = document.querySelector('.lightbox');
    if (!lb) return;

    lb.addEventListener('click', e => {
      if (e.target === lb || e.target.classList.contains('lightbox__close')) {
        this.closeLightbox();
      }
    });

    document.addEventListener('keydown', e => {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape')     this.closeLightbox();
      if (e.key === 'ArrowRight') this.nextImage();
      if (e.key === 'ArrowLeft')  this.prevImage();
    });

    document.querySelector('.lightbox__prev')?.addEventListener('click', (e) => { e.stopPropagation(); this.prevImage(); });
    document.querySelector('.lightbox__next')?.addEventListener('click', (e) => { e.stopPropagation(); this.nextImage(); });
  }

  openLightbox(index) {
    this.current = index;
    const lb  = document.querySelector('.lightbox');
    const img = lb.querySelector('.lightbox__img');
    const cap = lb.querySelector('.lightbox__caption');
    const ctr = lb.querySelector('.lightbox__counter');

    img.src = this.images[index].src;
    img.alt = this.images[index].alt;
    cap.textContent = this.images[index].caption;
    ctr.textContent = `${index + 1} / ${this.images.length}`;

    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (window.lenis) window.lenis.stop();

    gsap.fromTo(lb, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
    gsap.fromTo(img, { scale: 0.92 }, { scale: 1, duration: 0.5, ease: 'power3.out' });
  }

  closeLightbox() {
    const lb = document.querySelector('.lightbox');
    gsap.to(lb, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        lb.classList.remove('is-open');
        lb.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (window.lenis) window.lenis.start();
      }
    });
  }

  nextImage() {
    this.openLightbox((this.current + 1) % this.images.length);
  }

  prevImage() {
    this.openLightbox((this.current - 1 + this.images.length) % this.images.length);
  }
}

document.addEventListener('DOMContentLoaded', () => new Gallery());
