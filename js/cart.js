/**
 * MINHA MESA (CART) ENGINE
 * -------------------------------------------------------------------------
 * Manages the selection of dishes across the cinematic experience.
 */
class CartSystem {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('nandinhos_cart')) || [];
        this.overlay = document.getElementById('cartOverlay');
        this.container = document.getElementById('cartItems');
        this.totalEl = document.getElementById('cartTotalValue');
        this.countEls = document.querySelectorAll('.cart-count');

        this.init();
        this.update();
    }

    init() {
        // Toggle cart
        document.querySelectorAll('#openCart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.open();
            });
        });

        const closeBtn = document.getElementById('closeCart');
        if (closeBtn) closeBtn.addEventListener('click', () => this.close());

        if (this.overlay) {
            this.overlay.addEventListener('click', (e) => {
                if (e.target === this.overlay) this.close();
            });
        }

        // Add to cart delegation (works for dynamically rendered cards)
        document.body.addEventListener('click', (e) => {
            const btn = e.target.closest('.add-to-cart');
            if (btn) {
                const id = btn.dataset.id;
                const name = btn.dataset.name;
                const price = btn.dataset.price;
                this.addItem(id, name, price);
            }
        });

        // Checkout
        const checkoutBtn = document.getElementById('checkoutWhatsApp');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => this.checkout());
        }
    }

    addItem(id, name, price) {
        this.items.push({ id, name, price });
        this.save();
        this.update();
        this.open();
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.save();
        this.update();
    }

    save() {
        localStorage.setItem('nandinhos_cart', JSON.stringify(this.items));
    }

    update() {
        // Update counts
        this.countEls.forEach(el => el.textContent = this.items.length);

        // Render items
        if (!this.container) return;

        if (this.items.length === 0) {
            this.container.innerHTML = '<div class="cart-empty">A sua mesa está vazia. Adicione pratos da ementa.</div>';
            if (this.totalEl) this.totalEl.textContent = '0 Kz';
            return;
        }

        this.container.innerHTML = this.items.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${item.price}</div>
                    <button class="cart-item-remove" onclick="window.cartSystem.removeItem(${index})">Remover</button>
                </div>
            </div>
        `).join('');

        // Calculate total
        let total = 0;
        this.items.forEach(item => {
            const p = parseInt(item.price.replace(/[^0-9]/g, '')) || 0;
            total += p;
        });

        if (this.totalEl) {
            this.totalEl.textContent = total.toLocaleString('pt-AO') + ' Kz';
        }
    }

    open() {
        if (this.overlay) this.overlay.classList.add('is-open');
        if (window.lenis) window.lenis.stop();
    }

    close() {
        if (this.overlay) this.overlay.classList.remove('is-open');
        if (window.lenis) window.lenis.start();
    }

    checkout() {
        if (this.items.length === 0) return;

        const WHATSAPP_NUMBER = '244934859497';
        let msg = 'Olá! Gostaria de fazer um pedido para a minha mesa:\n\n';

        this.items.forEach((item, i) => {
            msg += `${i+1}. ${item.name} (${item.price})\n`;
        });

        msg += `\nTotal Estimado: ${this.totalEl.textContent}`;
        msg += '\n\nAguardo confirmação. Obrigado!';

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.cartSystem = new CartSystem();
});
