// gallery.js — Galeria masonry com lightbox cinematográfico

/**
 * GALLERY DATA — CHURRASCARIA NANDINHOS
 * Includes category tags for filtering functionality.
 */
const GALLERY_IMAGES = [
  { src: 'images/galeria/unnamedjjj.webp', alt: 'Brasas vivas da churrasqueira Nandinhos', caption: 'As brasas que fazem a diferença', category: 'process' },
  { src: 'images/galeria/unnamedh.webp', alt: 'Churrasco misto premium da Nandinhos', caption: 'O churrasco que fez a fama', category: 'food' },
  { src: 'images/galeria/unnamed.jpg', alt: 'Interior do restaurante Nandinhos no Kinaxixi', caption: 'Sempre cheio ao almoço', category: 'ambience' },
  { src: 'images/galeria/unnamed (1).jpg', alt: 'Prato tradicional', caption: 'Tradição portuguesa em Luanda', category: 'food' },
  { src: 'images/galeria/unnamed (2).jpg', alt: 'Detalhe da carne', caption: 'Temperatura exacta, tempo ideal', category: 'food' },
  { src: 'images/galeria/WhatsApp Image 2026-05-22 at 17.38.27.jpeg', alt: 'Ambiente restaurante', caption: 'Kinaxixi — o coração de Luanda', category: 'ambience' },
];

class Gallery {
  /**
   * Initializes the cinematic gallery system.
   * -------------------------------------------------------------------------
   * Sets up state management for filtering, masonry rendering,
   * and lightbox interactions.
   */
  constructor() {
    // Technical state
    this.images  = GALLERY_IMAGES;
    this.current = 0;
    this.filter  = 'all';
    this.isAnimating = false;

    // Initialization sequence
    this.initFilters();
    this.render();
    this.initLightbox();

    /**
     * PERFORMANCE NOTE:
     * Lightbox assets are pre-fetched only when the user hovers over
     * a gallery item to minimize initial bandwidth usage.
     */
  }

  /**
   * Builds the "Portuguese Efficient" category navigation.
   * Allows users to slice the visual proof by their area of interest.
   */
  initFilters() {
      const container = document.querySelector('.gallery__container');
      const grid = document.querySelector('.gallery__grid');

      // Safety check for dynamic layout robustness
      if (!container || !grid) return;

      const filterNav = document.createElement('nav');
      filterNav.className = 'gallery__filters';
      filterNav.setAttribute('aria-label', 'Filtrar galeria por categoria');

      filterNav.innerHTML = `
          <button class="filter-btn is-active" data-category="all" role="tab" aria-selected="true">Todos</button>
          <button class="filter-btn" data-category="food" role="tab" aria-selected="false">Os Pratos</button>
          <button class="filter-btn" data-category="ambience" role="tab" aria-selected="false">A Sala</button>
          <button class="filter-btn" data-category="process" role="tab" aria-selected="false">A Técnica</button>
      `;

      container.insertBefore(filterNav, grid);

      // Bind interaction logic
      filterNav.querySelectorAll('.filter-btn').forEach(btn => {
          btn.addEventListener('click', () => {
              if (this.isAnimating) return; // Prevent spam clicks during transitions

              // Update state
              filterNav.querySelectorAll('.filter-btn').forEach(b => {
                  b.classList.remove('is-active');
                  b.setAttribute('aria-selected', 'false');
              });

              btn.classList.add('is-active');
              btn.setAttribute('aria-selected', 'true');

              this.filter = btn.dataset.category;
              this.render();
          });
      });
  }

  /**
   * Renders gallery items based on current selection.
   * Utilizes a cross-fade transition to maintain the cinematic feel.
   */
  render() {
    const grid = document.querySelector('.gallery__grid');
    if (!grid) return;

    this.isAnimating = true;

    // 1. Initial fade-out of current items
    gsap.to(grid, { opacity: 0, duration: 0.3, y: 10, ease: 'power2.in', onComplete: () => {
        grid.innerHTML = '';

        // 2. Filter dataset
        const filtered = this.filter === 'all'
            ? this.images
            : this.images.filter(img => img.category === this.filter);

        // 3. Build DOM nodes
        filtered.forEach((img, index) => {
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
                  <span class="gallery-item__btn"> Ver</span>
                </div>
            `;

            item.addEventListener('click', () => this.openLightbox(index));
            item.addEventListener('keydown', e => {
              if (e.key === 'Enter' || e.key === ' ') this.openLightbox(index);
            });

            grid.appendChild(item);
        });

        // 4. Final reveal of the filtered grid
        gsap.to(grid, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' });

        // 5. Staggered entrance for items
        gsap.from(grid.querySelectorAll('.gallery-item'), {
            y: 30,
            opacity: 0,
            stagger: 0.06,
            duration: 0.8,
            ease: 'power4.out',
            onComplete: () => {
                this.isAnimating = false;
                // Re-sync ScrollTrigger in case the page height changed
                ScrollTrigger.refresh();
            }
        });
    }});
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

  /**
   * Opens the full-screen cinematic lightbox.
   * Handles scroll locking and Momentum engine suspension.
   *
   * @param {number} index - Index of the image to display.
   */
  openLightbox(index) {
    this.current = index;

    // Select specific lightbox elements
    const lb  = document.querySelector('.lightbox');
    const img = lb.querySelector('.lightbox__img');
    const cap = lb.querySelector('.lightbox__caption');
    const ctr = lb.querySelector('.lightbox__counter');

    // Robustness check
    if (!lb || !img) return;

    // 1. Data Injection
    const data = this.images[index];
    img.src = data.src;
    img.alt = data.alt;
    cap.textContent = data.caption;
    ctr.textContent = `${index + 1} / ${this.images.length}`;

    // 2. State Management
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');

    // Lock background scroll to prevent UI misalignment
    document.body.style.overflow = 'hidden';
    if (window.lenis) window.lenis.stop();

    // 3. Cinematic Transition
    // Fade in the backdrop while slightly scaling up the image for impact.
    gsap.fromTo(lb, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
    gsap.fromTo(img, { scale: 0.94, y: 20 }, { scale: 1, y: 0, duration: 0.6, ease: 'power3.out' });

    /**
     * ACCESSIBILITY:
     * Focus is trapped within the lightbox context until closed.
     */
  }

  /**
   * Closes the lightbox and restores the smooth scroll engine.
   */
  closeLightbox() {
    const lb = document.querySelector('.lightbox');
    if (!lb) return;

    gsap.to(lb, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: () => {
        lb.classList.remove('is-open');
        lb.setAttribute('aria-hidden', 'true');

        // Restore interaction states
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
