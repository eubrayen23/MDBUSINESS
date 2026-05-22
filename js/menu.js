// =====================================================
// ARRAYS DE PRATOS — DADOS COMPLETOS DA EMENTA
// =====================================================

const MENU_DATA = {

  churrasco: {
    label: 'Grelhados',
    icon:  '🔥',
    desc:  'A nossa especialidade. Brasas reais, carnes premium.',
    items: [
      {
        id: 'frango-churrasco',
        name: 'Frango de Churrasco',
        desc: 'O frango mais famoso de Luanda. Suculento e crocante.',
        price: '12.000 Kz',
        tags: ['bestseller'],
      },
      {
        id: 'picanha',
        name: 'Picanha na Brasa',
        desc: 'Selecção premium, grelhada ao ponto com flor de sal.',
        price: '13.000 Kz',
        tags: ['premium'],
      },
      {
        id: 'churrasco-misto',
        name: 'Churrasco Misto',
        desc: 'Uma selecção das nossas melhores carnes na brasa.',
        price: '14.500 Kz',
        tags: ['popular'],
      },
      {
        id: 'entrecosto',
        name: 'Entrecosto Grelhado',
        desc: 'Carnes tenras e suculentas directamente da grelha.',
        price: '11.000 Kz',
        tags: [],
      }
    ],
  },

  peixe: {
    label: 'Peixe & Marisco',
    icon:  '🐟',
    desc:  'O mar de Luanda à sua mesa.',
    items: [
      {
        id: 'choco-grelhado',
        name: 'Choco Grelhado',
        desc: 'Choco fresco grelhado com azeite e alho.',
        price: '10.500 Kz',
        tags: ['clássico'],
      },
      {
        id: 'peixe-dia',
        name: 'Peixe Fresco do Dia',
        desc: 'Captura diária dos nossos pescadores locais.',
        price: 'Consultar',
        tags: ['fresco'],
      },
      {
        id: 'camarao-tigre',
        name: 'Camarão Tigre Grelhado',
        desc: 'Camarão tigre com manteiga de alho e ervas.',
        price: '18.000 Kz',
        tags: ['premium'],
      }
    ],
  },

  bacalhau: {
    label: 'Bacalhau',
    icon:  '🧆',
    desc:  'A tradição portuguesa fielmente recriada.',
    items: [
      {
        id: 'bacalhau-cozido',
        name: 'Bacalhau Cozido com Grão',
        desc: 'Lombo de bacalhau, grão, batata e ovo cozido.',
        price: '13.500 Kz',
        tags: ['tradicional'],
      },
      {
        id: 'bacalhau-bras',
        name: 'Bacalhau à Brás',
        desc: 'Bacalhau desfiado, batata palha e ovos.',
        price: '11.500 Kz',
        tags: ['popular'],
      }
    ],
  },

  acompanhamentos: {
    label: 'Guarnições',
    icon:  '🍟',
    desc:  'Para acompanhar o seu grelhado.',
    items: [
      { id: 'batata-frita', name: 'Batata Frita Caseira', desc: 'Frita na hora, crocante.', price: '2.500 Kz', tags: [] },
      { id: 'arroz-branco', name: 'Arroz Branco', desc: 'Solto e saboroso.', price: '1.500 Kz', tags: [] },
      { id: 'feijao', name: 'Feijão Temperado', desc: 'Receita tradicional angolana.', price: '2.000 Kz', tags: ['angolano'] },
      { id: 'funge', name: 'Funge de Mandioca', desc: 'O clássico acompanhamento nacional.', price: '1.500 Kz', tags: ['angolano'] }
    ],
  },

  sobremesas: {
    label: 'Sobremesas',
    icon:  '🍮',
    desc:  'A doçura final que não pode faltar.',
    items: [
      {
        id: 'mousse-maracuja',
        name: 'Mousse de Maracujá',
        desc: 'Cremosa e refrescante. A favorita da Nandinhos.',
        price: '3.500 Kz',
        tags: ['bestseller'],
      },
      {
        id: 'bolo-chocolate',
        name: 'Bolo de Chocolate Artesanal',
        desc: 'Receita caseira húmida e intensa.',
        price: '4.000 Kz',
        tags: [],
      }
    ],
  },

  bebidas: {
    label: 'Bebidas',
    icon:  '🍺',
    desc:  'Frescura garantida.',
    items: [
      { id: 'fino', name: 'Fino Gelado', desc: 'Imperial Super Bock ou Cuca.', price: '1.000 Kz', tags: [] },
      { id: 'vinho-casa', name: 'Vinho da Casa (75cl)', desc: 'Tinto ou Branco seleccionado.', price: '8.500 Kz', tags: [] },
      { id: 'agua', name: 'Água Mineral', desc: 'Com ou sem gás.', price: '800 Kz', tags: [] }
    ],
  }
};

function renderMenu() {
  const container = document.querySelector('.menu__tabs-content');
  const tabsNav   = document.querySelector('.menu__tabs-nav');

  if (!container || !tabsNav) return;

  Object.keys(MENU_DATA).forEach((key, index) => {
    const cat = MENU_DATA[key];
    const tab = document.createElement('button');
    tab.className = `menu-tab${index === 0 ? ' is-active' : ''}`;
    tab.dataset.category = key;
    tab.innerHTML = `${cat.icon} <span>${cat.label}</span>`;
    tabsNav.appendChild(tab);

    const panel = document.createElement('div');
    panel.className = `menu__panel${index === 0 ? ' is-active' : ''}`;
    panel.dataset.category = key;
    panel.innerHTML = `
        <div class="menu__panel-header">
            <span class="icon">${cat.icon}</span>
            <div>
                <h3>${cat.label}</h3>
                <p>${cat.desc}</p>
            </div>
        </div>
        <div class="menu__grid" id="grid-${key}"></div>
    `;

    const grid = panel.querySelector(`#grid-${key}`);
    cat.items.forEach(item => {
      const card = document.createElement('article');
      card.className = 'menu-card';
      const tagsHtml = item.tags.map(t => `<span class="tag">${t}</span>`).join('');
      card.innerHTML = `
          <div class="menu-card__meta">${tagsHtml}</div>
          <h4 class="menu-card__title">${item.name}</h4>
          <p class="menu-card__desc">${item.desc}</p>
          <div class="menu-card__footer">
              <span class="menu-card__price">${item.price}</span>
          </div>
      `;
      grid.appendChild(card);
    });

    container.appendChild(panel);
  });

  initTabLogic();
}

function initTabLogic() {
  const tabs   = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu__panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.category;
      tabs.forEach(t => t.classList.remove('is-active'));
      panels.forEach(p => p.classList.remove('is-active'));

      tab.classList.add('is-active');
      const activePanel = document.querySelector(`.menu__panel[data-category="${target}"]`);
      if (activePanel) {
        activePanel.classList.add('is-active');
        gsap.from(activePanel.querySelectorAll('.menu-card'), {
          opacity: 0,
          y: 20,
          stagger: 0.05,
          duration: 0.4,
          ease: 'power2.out'
        });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', renderMenu);
