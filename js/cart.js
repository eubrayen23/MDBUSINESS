/**
 * CART SYSTEM - CHURRASCARIA NANDINHOS
 * -------------------------------------------------------------------------
 * Manages the "Minha Mesa" shopping cart functionality.
 */

class CartSystem {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('nandinhos_cart')) || [];
        this.sidebar = document.getElementById('cartSidebar');
        this.trigger = document.getElementById('cartTrigger');
        this.countLabel = document.querySelector('.cart-trigger__count');
        this.itemsContainer = document.querySelector('.cart-sidebar__items');
        this.totalLabel = document.getElementById('cartTotal');

        this.init();
    }

    init() {
        if (!this.sidebar) return;

        // Open cart
        this.trigger.addEventListener('click', () => this.open());

        // Close cart
        const closeBtn = this.sidebar.querySelector('.cart-sidebar__close');
        const overlay = this.sidebar.querySelector('.cart-sidebar__overlay');

        closeBtn.addEventListener('click', () => this.close());
        overlay.addEventListener('click', () => this.close());

        // Order button
        const orderBtn = document.getElementById('btnFinalizarPedido');
        if (orderBtn) {
            orderBtn.addEventListener('click', () => this.checkout());
        }

        this.render();
    }

    open() {
        this.sidebar.classList.add('is-active');
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.sidebar.classList.remove('is-active');
        document.body.style.overflow = '';
    }

    addItem(product) {
        const existing = this.items.find(i => i.id === product.id);

        if (existing) {
            existing.qty += 1;
        } else {
            this.items.push({
                ...product,
                qty: 1
            });
        }

        this.save();
        this.render();
        this.open();

        // Success animation on trigger
        gsap.fromTo(this.trigger, { scale: 1 }, { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1 });
    }

    removeItem(id) {
        this.items = this.items.filter(i => i.id !== id);
        this.save();
        this.render();
    }

    updateQty(id, delta) {
        const item = this.items.find(i => i.id === id);
        if (!item) return;

        item.qty += delta;
        if (item.qty <= 0) {
            this.removeItem(id);
        } else {
            this.save();
            this.render();
        }
    }

    save() {
        localStorage.setItem('nandinhos_cart', JSON.stringify(this.items));
    }

    render() {
        if (!this.itemsContainer) return;

        if (this.items.length === 0) {
            this.itemsContainer.innerHTML = '<div class="cart-empty-message">A sua mesa está vazia. Comece a adicionar pratos!</div>';
            this.countLabel.textContent = '0';
            this.totalLabel.textContent = '0 Kz';
            return;
        }

        this.itemsContainer.innerHTML = '';
        let total = 0;
        let count = 0;

        this.items.forEach(item => {
            const priceValue = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
            total += priceValue * item.qty;
            count += item.qty;

            const el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item__image">
                <div class="cart-item__details">
                    <h4 class="cart-item__title">${item.name}</h4>
                    <div class="cart-item__price">${item.price}</div>
                    <div class="cart-item__controls">
                        <div class="cart-item__qty">
                            <button class="qty-btn" onclick="window.cartSystem.updateQty('${item.id}', -1)">-</button>
                            <span>${item.qty}</span>
                            <button class="qty-btn" onclick="window.cartSystem.updateQty('${item.id}', 1)">+</button>
                        </div>
                        <button class="cart-item__remove" onclick="window.cartSystem.removeItem('${item.id}')">Remover</button>
                    </div>
                </div>
            `;
            this.itemsContainer.appendChild(el);
        });

        this.countLabel.textContent = count;
        this.totalLabel.textContent = total.toLocaleString('pt-PT') + ' Kz';
    }

    checkout() {
        if (this.items.length === 0) return;

        const WHATSAPP_NUMBER = '244934859497';

        let message = `*Novo Pedido - Churrascaria Nandinhos*\n\n`;
        let total = 0;

        this.items.forEach(item => {
            const priceValue = parseInt(item.price.replace(/[^\d]/g, '')) || 0;
            const subtotal = priceValue * item.qty;
            total += subtotal;

            message += `• ${item.qty}x ${item.name} (${item.price})\n`;
        });

        message += `\n*Total Estimado:* ${total.toLocaleString('pt-PT')} Kz\n\n`;
        message += `Gostaria de confirmar a disponibilidade e o tempo de espera.`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }
}

// Make globally accessible
document.addEventListener('DOMContentLoaded', () => {
    window.cartSystem = new CartSystem();
});
