// =====================================================
// ARRAYS DE PRATOS - DADOS COMPLETOS DA EMENTA
// =====================================================

/**
 * MENU DATA SYSTEM - CHURRASCARIA NANDINHOS
 * -------------------------------------------------------------------------
 */

const MENU_DATA = {
  churrasco: {
    label: 'Grelhados & Brasas',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M8 12h8m-8 4h8m-10-8h12M4 20h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"></path></svg>',
    desc:  'Especialidades da casa. Carnes seleccionadas, temperadas com rigor e grelhadas em brasas de carvão vegetal de alta densidade.',
    items: [
      {
        id: 'frango-churrasco',
        name: 'Frango de Churrasco Inteiro',
        desc: 'O frango mais famoso de Luanda. Aberto pelas costas, marinado em molho de limão e alho, grelhado até atingir a pele crocante perfeita e carne suculenta.',
        price: '12.000 Kz',
        tags: ['bestseller', 'assinatura'],
        technical_notes: 'Frango de produção nacional (Kwanza Sul), peso médio 1.2kg.',
        allergens: ['nenhum']
      },
      {
        id: 'frango-churrasco-meio',
        name: 'Meio Frango de Churrasco',
        desc: 'Metade do nosso frango lendário, acompanhado com o nosso molho piripiri caseiro.',
        price: '6.500 Kz',
        tags: ['popular'],
      },
      {
        id: 'picanha',
        name: 'Picanha Brasileira Premium',
        desc: 'Corte seleccionado de picanha com a camada de gordura ideal, grelhada com flor de sal.',
        price: '13.000 Kz',
        tags: ['premium'],
      },
      {
        id: 'churrasco-misto',
        name: 'Churrasco Misto Nandinhos',
        desc: 'A melhor forma de provar a nossa mestria: Picanha, entrecosto, salsicha toscana e frango.',
        price: '14.500 Kz',
        tags: ['popular', 'completo'],
      }
    ],
  },
  peixe: {
    label: 'Mar & Marisco',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M20 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"></path><path d="M12 8v8m-4-4h8"></path></svg>',
    desc:  'Produtos capturados nas águas angolanas, servidos com foco na frescura.',
    items: [
      {
        id: 'choco-grelhado',
        name: 'Choco Grelhado à Portuguesa',
        desc: 'Choco fresco grelhado inteiro, servido com azeite virgem extra e alho.',
        price: '10.500 Kz',
        tags: ['clássico'],
      },
      {
        id: 'peixe-dia',
        name: 'Peixe Fresco do Dia',
        desc: 'Pargo, Garoupa ou Corvina, dependendo da captura matinal.',
        price: 'Preço do Dia',
        tags: ['fresco'],
      }
    ],
  },
  bacalhau: {
    label: 'Bacalhau Tradicional',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>',
    desc:  'A herança gastronómica portuguesa. Bacalhau de cura tradicional.',
    items: [
      {
        id: 'bacalhau-cozido',
        name: 'Bacalhau Cozido com Todos',
        desc: 'Posta alta de bacalhau cozida no ponto, acompanhada com grão-de-bico, batata, ovo e legumes.',
        price: '13.500 Kz',
        tags: ['tradicional'],
      },
      {
        id: 'bacalhau-bras',
        name: 'Bacalhau à Brás Tradicional',
        desc: 'Bacalhau desfiado, envolvido em batata palha caseira, cebolada e ovos frescos.',
        price: '11.500 Kz',
        tags: ['popular'],
      }
    ],
  },
  sobremesas: {
    label: 'Sobremesas',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>',
    desc:  'Receitas tradicionais e docaria clássica.',
    items: [
      {
        id: 'mousse-maracuja',
        name: 'Mousse de Maracujá Real',
        desc: 'A sobremesa mais icónica da casa. Feita com polpa de maracujá fresco.',
        price: '3.500 Kz',
        tags: ['bestseller', 'assinatura'],
      },
      {
        id: 'bolo-chocolate',
        name: 'Bolo de Chocolate Húmido',
        desc: 'Uma fatia generosa de bolo de chocolate artesanal.',
        price: '4.000 Kz',
        tags: ['chocolatras'],
      }
    ],
  }
};

function renderMenu(filter = '') {
  const container = document.querySelector('.menu__tabs-content');
  const tabsNav   = document.querySelector('.menu__tabs-nav');

  if (!container || !tabsNav) return;

  container.innerHTML = '';
  if (!filter) tabsNav.innerHTML = '';

  const activeCategory = document.querySelector('.menu-tab.is-active')?.dataset.category || Object.keys(MENU_DATA)[0];

  Object.keys(MENU_DATA).forEach((key, index) => {
    const cat = MENU_DATA[key];

    if (!filter) {
        const tab = document.createElement('button');
        tab.className = `menu-tab${key === activeCategory ? ' is-active' : ''}`;
        tab.dataset.category = key;
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-selected', key === activeCategory ? 'true' : 'false');
        tab.innerHTML = `${cat.icon} <span>${cat.label}</span>`;
        tabsNav.appendChild(tab);
    }

    const panel = document.createElement('div');
    panel.className = `menu__panel${key === activeCategory ? ' is-active' : ''}`;
    panel.dataset.category = key;
    panel.setAttribute('role', 'tabpanel');

    panel.innerHTML = `
        <div class="menu__panel-header">
            <span class="icon" aria-hidden="true">${cat.icon}</span>
            <div>
                <h3>${cat.label}</h3>
                <p>${cat.desc}</p>
            </div>
        </div>
        <div class="menu__grid" id="grid-${key}"></div>
    `;

    const grid = panel.querySelector(`#grid-${key}`);
    let visibleItems = 0;

    cat.items.forEach(item => {
      if (filter && !item.name.toLowerCase().includes(filter.toLowerCase()) && !item.desc.toLowerCase().includes(filter.toLowerCase())) {
          return;
      }

      visibleItems++;
      const card = document.createElement('article');
      card.className = 'menu-card';
      card.setAttribute('data-reveal', 'fade-up');

      const tagsHtml = (item.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
      const itemImage = item.image || `https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400`;

      card.innerHTML = `
          <div class="menu-card__image-wrapper">
              <img src="${itemImage}" alt="${item.name}" loading="lazy">
          </div>
          <div class="menu-card__inner">
              <div class="menu-card__meta">${tagsHtml}</div>
              <h4 class="menu-card__title">${item.name}</h4>
              <p class="menu-card__desc">${item.desc}</p>

              <div class="menu-card__specs">
                  ${item.technical_notes ? `<span class="spec-tech"><strong>Técnica:</strong> ${item.technical_notes}</span>` : ''}
                  ${item.allergens ? `<span class="spec-allergens"><strong>Alérgenos:</strong> ${item.allergens.join(', ')}</span>` : ''}
              </div>

              <div class="menu-card__footer">
                  <span class="menu-card__price">${item.price}</span>
                  <button class="menu-card__action btn-add-to-cart" aria-label="Adicionar à Mesa">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M12 5v14M5 12h14"/>
                      </svg>
                  </button>
              </div>
          </div>
      `;

      const addBtn = card.querySelector('.btn-add-to-cart');
      if (addBtn) {
          addBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              if (window.cartSystem) {
                  window.cartSystem.addItem({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      image: itemImage
                  });
              }
          });
      }

      grid.appendChild(card);
    });

    if (visibleItems > 0) {
        container.appendChild(panel);
    }
  });

  initTabLogic();
}

function initMenuSearch() {
    const searchInput = document.getElementById('menuSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', Utils.debounce((e) => {
        const val = e.target.value.trim();
        renderMenu(val);

        const tabsNav = document.querySelector('.menu__tabs-nav');
        if (val.length > 0) {
            document.querySelectorAll('.menu__panel').forEach(p => p.classList.add('is-active'));
            if (tabsNav) tabsNav.style.display = 'none';
        } else {
            if (tabsNav) tabsNav.style.display = 'flex';
            const activeTab = document.querySelector('.menu-tab.is-active')?.dataset.category;
            document.querySelectorAll('.menu__panel').forEach(p => {
                p.classList.toggle('is-active', p.dataset.category === activeTab);
            });
        }
    }, 250));
}

function initTabLogic() {
  const tabs   = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu__panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.category;
      tabs.forEach(t => {
          t.classList.remove('is-active');
          t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => p.classList.remove('is-active'));

      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');

      const activePanel = document.querySelector(`.menu__panel[data-category="${target}"]`);
      if (activePanel) {
        activePanel.classList.add('is-active');
        gsap.from(activePanel.querySelectorAll('.menu-card'), {
          opacity: 0,
          y: 20,
          stagger: 0.05,
          duration: 0.4,
          ease: 'power2.out',
          clearProps: 'all'
        });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    initMenuSearch();
});
