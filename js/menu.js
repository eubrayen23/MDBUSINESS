// =====================================================
// ARRAYS DE PRATOS — DADOS COMPLETOS DA EMENTA
// =====================================================

/**
 * MENU DATA SYSTEM - CHURRASCARIA NANDINHOS
 * -------------------------------------------------------------------------
 * This module manages the restaurant's culinary offerings.
 *
 * DESIGN PHILOSOPHY:
 * The data is structured to allow for rapid updates and high-performance rendering.
 * Each section represents a distinct part of the "Portuguese Efficient" experience
 * that has made Nandinhos a legend in Luanda's Kinaxixi district.
 */

const MENU_DATA = {

  churrasco: {
    label: 'Grelhados & Brasas',
    icon:  '🔥',
    desc:  'A nossa especialidade absoluta. Carnes seleccionadas, temperadas com segredos de décadas e grelhadas em brasas vivas de carvão vegetal de alta densidade.',
    items: [
      {
        id: 'frango-churrasco',
        name: 'Frango de Churrasco Inteiro',
        desc: 'O frango mais famoso de Luanda. Aberto pelas costas, marinado em molho de limão e alho, grelhado até atingir a pele crocante perfeita e carne suculenta.',
        price: '12.000 Kz',
        tags: ['bestseller', 'assinatura'],
        technical_notes: 'Frango de produção nacional (Kwanza Sul), peso médio 1.2kg. Grelhado a 350°C durante 25 minutos.',
        allergens: ['nenhum']
      },
      {
        id: 'frango-churrasco-meio',
        name: 'Meio Frango de Churrasco',
        desc: 'Metade do nosso frango lendário, acompanhado com o nosso molho piripiri caseiro (suave ou forte).',
        price: '6.500 Kz',
        tags: ['popular'],
      },
      {
        id: 'picanha',
        name: 'Picanha Brasileira Premium',
        desc: 'Corte seleccionado de picanha com a camada de gordura ideal, grelhada com flor de sal para realçar o sabor natural da carne.',
        price: '13.000 Kz',
        tags: ['premium'],
        technical_notes: 'Corte de importação certificada. Grelhado exclusivamente com flor de sal de Benguela.',
        allergens: ['nenhum']
      },
      {
        id: 'churrasco-misto',
        name: 'Churrasco Misto à Nandinhos',
        desc: 'A melhor forma de provar a nossa mestria: Picanha, entrecosto, salsicha toscana e frango. Ideal para partilhar em família.',
        price: '14.500 Kz',
        tags: ['popular', 'completo'],
      },
      {
        id: 'entrecosto',
        name: 'Entrecosto de Porco Grelhado',
        desc: 'Costelas de porco suculentas, marinadas em vinho branco, louro e ervas aromáticas, grelhadas lentamente nas brasas.',
        price: '11.000 Kz',
        tags: ['tradicional'],
      },
      {
        id: 'bife-vazia',
        name: 'Bife da Vazia na Grelha',
        desc: 'Corte nobre de novilho, grelhado exactamente ao seu gosto (mal, médio ou bem passado). Macio e cheio de sabor.',
        price: '12.500 Kz',
        tags: [],
      },
      {
        id: 'costeletas-borrego',
        name: 'Costeletas de Borrego',
        desc: 'Costeletas de borrego da melhor qualidade, temperadas com alecrim e alho fresco antes de irem ao fogo.',
        price: '15.500 Kz',
        tags: ['premium'],
      },
      {
        id: 'maminha-grelhada',
        name: 'Maminha na Brasa',
        desc: 'Um corte extremamente macio e saboroso, fatiado finamente após a grelha. Acompanha molho chimichurri caseiro.',
        price: '12.000 Kz',
        tags: ['novo'],
      },
      {
        id: 'salsicha-toscana',
        name: 'Salsicha Toscana Grelhada',
        desc: 'Salsicha de porco de produção artesanal, grelhada até ao ponto de estalido. Ideal como entrada ou complemento.',
        price: '4.500 Kz',
        tags: ['petisco'],
      },
      {
        id: 'piano-porco',
        name: 'Piano de Porco',
        desc: 'Entrecosto fino e crocante, temperado apenas com sal e limão. Uma delícia para comer com as mãos.',
        price: '9.500 Kz',
        tags: ['tradicional'],
      }
    ],
  },

  peixe: {
    label: 'Mar & Marisco',
    icon:  '🐟',
    desc:  'A frescura das águas angolanas directamente para a sua mesa, respeitando o ciclo natural da pesca.',
    items: [
      {
        id: 'choco-grelhado',
        name: 'Choco Grelhado à Portuguesa',
        desc: 'Choco fresco grelhado inteiro, servido com a sua própria tinta (opcional) e regado com azeite virgem extra e alho.',
        price: '10.500 Kz',
        tags: ['clássico', 'favorito'],
        technical_notes: 'Limpeza artesanal, preservando a textura. Grelhado em fogo médio para evitar o endurecimento das fibras.',
        allergens: ['moluscos']
      },
      {
        id: 'peixe-dia',
        name: 'Peixe Fresco do Dia (Grelhado)',
        desc: 'Pargo, Garoupa ou Corvina, dependendo da captura matinal. Grelhado com escamas para manter a humidade.',
        price: 'Preço do Dia',
        tags: ['fresco', 'recomendado'],
      },
      {
        id: 'camarao-tigre',
        name: 'Camarão Tigre Grelhado (XL)',
        desc: 'Dois camarões tigre de grande calibre, abertos em borboleta e grelhados com manteiga de alho e coentros.',
        price: '18.000 Kz',
        tags: ['premium', 'exclusivo'],
      },
      {
        id: 'lulas-grelhadas',
        name: 'Lulas da Costa Grelhadas',
        desc: 'Lulas tenras grelhadas com um toque de limão e salsa fresca. Servidas com batata cozida e legumes.',
        price: '11.000 Kz',
        tags: [],
      },
      {
        id: 'salmao-grelhado',
        name: 'Salmão na Brasa com Ervas',
        desc: 'Lombo de salmão fresco, grelhado com pele para preservar a suculência, finalizado com manteiga de ervas finas.',
        price: '14.000 Kz',
        tags: ['ómega-3'],
      },
      {
        id: 'bacalhau-assado-azeite',
        name: 'Bacalhau Assado na Brasa',
        desc: 'Uma alternativa ao cozido. Lombo de bacalhau passado pelas brasas e mergulhado em azeite quente com alho.',
        price: '15.500 Kz',
        tags: ['assinatura'],
      }
    ],
  },

  bacalhau: {
    label: 'Fiel Amigo (Bacalhau)',
    icon:  '🧆',
    desc:  'A tradição portuguesa fielmente transportada para o Kinaxixi. Usamos bacalhau de cura tradicional, demolhado na casa.',
    items: [
      {
        id: 'bacalhau-cozido',
        name: 'Bacalhau Cozido com Todos',
        desc: 'Posta alta de bacalhau cozida no ponto, acompanhada com grão-de-bico, batata, ovo, cenoura e couve portuguesa. Regado com azeite virgem.',
        price: '13.500 Kz',
        tags: ['tradicional', 'saudável'],
        technical_notes: 'Bacalhau Gadus Morhua, cura de 12 meses. Demolhado em água controlada a 4°C durante 72 horas.',
        allergens: ['peixe', 'ovos']
      },
      {
        id: 'bacalhau-bras',
        name: 'Bacalhau à Brás Tradicional',
        desc: 'Bacalhau desfiado, envolvido em batata palha caseira, cebolada e ovos frescos. Finalizado com azeitonas pretas e salsa.',
        price: '11.500 Kz',
        tags: ['popular', 'clássico'],
      },
      {
        id: 'bacalhau-lagareiro',
        name: 'Bacalhau à Lagareiro',
        desc: 'Lombo de bacalhau assado no forno com batatinhas a murro, muito alho e azeite em abundância.',
        price: '14.500 Kz',
        tags: ['premium'],
      },
      {
        id: 'bacalhau-natas',
        name: 'Bacalhau com Natas Nandinhos',
        desc: 'Versão cremosa gratinada no forno com um toque de queijo e noz-moscada. Receita da casa.',
        price: '12.000 Kz',
        tags: ['conforto'],
      }
    ],
  },

  acompanhamentos: {
    label: 'Acompanhamentos & Guarnições',
    icon:  '🍟',
    desc:  'O complemento ideal para as nossas carnes e peixes. Ingredientes frescos preparados diariamente.',
    items: [
      { id: 'batata-frita', name: 'Batata Frita à Rodela', desc: 'Batata nacional cortada à mão e frita em azeite/óleo de qualidade. Sempre crocante.', price: '2.500 Kz', tags: ['bestseller'] },
      { id: 'arroz-branco', name: 'Arroz Branco Solto', desc: 'Arroz agulha de primeira qualidade, cozido com um dente de alho.', price: '1.500 Kz', tags: [] },
      { id: 'feijao', name: 'Feijão à Moda de Angola', desc: 'Feijão temperado com refogado de cebola, alho e louro. Sabor caseiro autêntico.', price: '2.000 Kz', tags: ['angolano', 'favorito'] },
      { id: 'funge', name: 'Funge de Mandioca / Milho', desc: 'O acompanhamento essencial da gastronomia angolana. Feito de forma tradicional.', price: '1.500 Kz', tags: ['angolano', 'tradicional'] },
      { id: 'salada-mista', name: 'Salada Mista Fresca', desc: 'Alface, tomate, cebola e pepino, temperada com azeite e vinagre.', price: '2.200 Kz', tags: ['fresco'] },
      { id: 'espargregatado', name: 'Esparregado de Espinafres', desc: 'Cremoso e saboroso, ideal para acompanhar grelhados.', price: '3.000 Kz', tags: ['vegetariano'] }
    ],
  },

  sobremesas: {
    label: 'Doces & Sobremesas',
    icon:  '🍮',
    desc:  'Receitas caseiras que atravessam gerações. O final perfeito para a sua refeição na Nandinhos.',
    items: [
      {
        id: 'mousse-maracuja',
        name: 'Mousse de Maracujá Real',
        desc: 'A sobremesa mais icónica da casa. Feita com polpa de maracujá fresco, cremosa e com o equilíbrio perfeito entre o doce e o ácido.',
        price: '3.500 Kz',
        tags: ['bestseller', 'assinatura'],
        technical_notes: 'Fruta fresca seleccionada. Sem corantes ou conservantes artificiais. Batida em baixa rotação para textura aerada.',
        allergens: ['lácteos']
      },
      {
        id: 'bolo-chocolate',
        name: 'Bolo de Chocolate Húmido',
        desc: 'Uma fatia generosa de bolo de chocolate artesanal, com cobertura de chocolate negro.',
        price: '4.000 Kz',
        tags: ['chocólatras'],
      },
      {
        id: 'pudim-flan',
        name: 'Pudim Flan à Portuguesa',
        desc: 'Receita tradicional de ovos e caramelo, com textura sedosa.',
        price: '3.000 Kz',
        tags: ['clássico'],
      },
      {
        id: 'fruta-epoca',
        name: 'Fruta Tropical da Época',
        desc: 'Manga, Papaia ou Abacaxi fresco e fatiado.',
        price: '2.500 Kz',
        tags: ['saudável', 'fresco'],
      }
    ],
  },

  bebidas: {
    label: 'Bar & Bebidas',
    icon:  '🍺',
    desc:  'Bebidas servidas à temperatura ideal para acompanhar o calor das nossas brasas.',
    items: [
      { id: 'fino-sb', name: 'Fino Super Bock (Pressão)', desc: 'Cerveja de pressão bem gelada, servida em copo refrescado.', price: '1.200 Kz', tags: ['popular'] },
      { id: 'cuca-lata', name: 'Cerveja Cuca (Lata/Garrafa)', desc: 'A cerveja nacional de Angola, sempre gelada.', price: '1.000 Kz', tags: ['nacional'] },
      { id: 'vinho-copo', name: 'Copo de Vinho da Casa', desc: 'Tinto ou Branco de qualidade seleccionada.', price: '2.500 Kz', tags: [] },
      { id: 'refrigerantes', name: 'Refrigerantes Diversos', desc: 'Coca-Cola, Fanta, Sumol, Sprite (33cl).', price: '1.200 Kz', tags: [] },
      { id: 'agua-mineral', name: 'Água Mineral (50cl)', desc: 'Com ou sem gás, natural ou fresca.', price: '800 Kz', tags: [] },
      { id: 'sangria-tinta', name: 'Sangria de Vinho Tinto (1L)', desc: 'Preparada com fruta fresca e um toque de canela. Ideal para partilhar.', price: '12.000 Kz', tags: ['para partilhar'] },
      { id: 'sangria-branca', name: 'Sangria de Vinho Branco (1L)', desc: 'Fresca e leve, com frutos tropicais angolanos.', price: '12.000 Kz', tags: ['fresco'] },
      { id: 'sumo-natural', name: 'Sumo Natural do Dia', desc: 'Manga, Múcua ou Papaia, feito na hora.', price: '1.500 Kz', tags: ['vitamina'] },
      { id: 'caipirinha', name: 'Caipirinha Tradicional', desc: 'Cachaça de qualidade, lima e açúcar mascavado.', price: '3.500 Kz', tags: [] }
    ],
  },

  sopas: {
    label: 'Sopas & Entradas',
    icon:  '🍲',
    desc:  'A abertura da experiência gastronómica. Receitas reconfortantes que preparam o paladar para a intensidade das brasas.',
    items: [
      {
        id: 'caldo-verde',
        name: 'Caldo Verde à Portuguesa',
        desc: 'Sopa de batata e couve galega finamente cortada, com rodelas de chouriço de fumeiro. Um clássico incontornável.',
        price: '3.500 Kz',
        tags: ['clássico'],
        technical_notes: 'Couve cortada em juliana milimétrica. Chouriço de porco preto para profundidade de sabor.',
        allergens: ['nenhum']
      },
      {
        id: 'sopa-legumes',
        name: 'Sementeira de Legumes',
        desc: 'Creme aveludado de legumes da época, sem adição de natas. Saudável e rico em nutrientes.',
        price: '2.500 Kz',
        tags: ['vegan'],
        technical_notes: 'Processado a baixa velocidade para manter as fibras vegetais intactas.',
        allergens: ['nenhum']
      },
      {
        id: 'paio-portugues',
        name: 'Paio de Lombo do Alentejo',
        desc: 'Fatias finas de paio de lombo de porco seleccionado, com cura natural. O início perfeito para partilhar.',
        price: '4.500 Kz',
        tags: ['petisco'],
        technical_notes: 'Fatiado em lâminas de 0.5mm para maximizar a libertação de oleicos.',
        allergens: ['nenhum']
      },
      {
        id: 'pao-couvert',
        name: 'Cesto de Pão & Manteiga',
        desc: 'Pão rústico acabado de sair do forno, manteiga de vaca e azeitonas marinadas em alho e louro.',
        price: '1.500 Kz',
        tags: [],
        technical_notes: 'Trigo de moagem lenta, fermentação natural de 12 horas.',
        allergens: ['glúten', 'lácteos']
      }
    ]
  },

  /**
   * PREMIUM CUTS — THE NANDINHOS ELITE
   * -------------------------------------------------------------------------
   * These items represent the pinnacle of our grilling technology.
   */
  premium: {
    label: 'Cortes de Assinatura',
    icon:  '🌟',
    desc:  'Cortes exclusivos de disponibilidade limitada, preparados com protocolos térmicos avançados.',
    items: [
      {
        id: 'tomahawk-reserva',
        name: 'Tomahawk Black Angus (1.2kg)',
        desc: 'O rei dos cortes. Um rib-eye com osso longo, grelhado em três fases para uma textura inigualável. Ideal para 2 a 3 pessoas.',
        price: '45.000 Kz',
        tags: ['premium', 'exclusivo'],
        technical_notes: 'Maturação Dry-Aged de 21 dias. Grelha calibrada para selagem de osso condutora.',
        allergens: ['nenhum']
      },
      {
        id: 'tbone-nandinhos',
        name: 'T-Bone Steak Especial',
        desc: 'O melhor de dois mundos: Lombo e Vazia unidos pelo osso. Corte de espessura generosa (4cm), servido ao ponto.',
        price: '28.000 Kz',
        tags: ['premium'],
        technical_notes: 'Calibração de calor assimétrica para respeitar os diferentes tempos de cozedura do lombo.',
        allergens: ['nenhum']
      },
      {
        id: 'costelao-6-horas',
        name: 'Costelão de Novilho (Slow-Cook)',
        desc: 'Costela de novilho seleccionada, passada pela brasa e terminada em calor indirecto durante 6 horas até se soltar do osso.',
        price: '22.000 Kz',
        tags: ['assinatura', 'lento'],
        technical_notes: 'Temperatura de câmara mantida a constantes 110°C.',
        allergens: ['nenhum']
      }
    ]
  },

  vinhos: {
    label: 'Carta de Vinhos',
    icon:  '🍷',
    desc:  'Uma viagem pelas melhores regiões vinícolas de Portugal, seleccionada para harmonizar com a intensidade das nossas brasas.',
    items: [
      {
        id: 'vinho-reserva-douro',
        name: 'Douro Reserva (Tinto)',
        desc: 'Vinho encorpado com notas de frutos pretos e madeira. Perfeito para acompanhar a nossa Picanha ou Churrasco Misto.',
        price: '15.000 Kz',
        tags: ['premium', 'recomendado']
      },
      {
        id: 'alentejo-superior',
        name: 'Alentejo Superior (Tinto)',
        desc: 'Um clássico alentejano, macio e estruturado. Harmoniza idealmente com o Entrecosto.',
        price: '13.500 Kz',
        tags: []
      },
      {
        id: 'vinho-verde-alvarinho',
        name: 'Alvarinho (Branco)',
        desc: 'Fresco, mineral e vibrante. A escolha lógica para o nosso Choco Grelhado ou Peixe do Dia.',
        price: '12.000 Kz',
        tags: ['fresco']
      },
      {
        id: 'dao-branco',
        name: 'Dão Encruzado (Branco)',
        desc: 'Vinho com volume e elegância, excelente para pratos de Bacalhau.',
        price: '11.000 Kz',
        tags: []
      },
      {
        id: 'espumante-bruto',
        name: 'Espumante Bruto Bairrada',
        desc: 'Bolha fina e persistente. Para começar a refeição ou celebrar momentos especiais.',
        price: '18.000 Kz',
        tags: ['celebração']
      },
      {
        id: 'vinho-porto',
        name: 'Copo de Vinho do Porto',
        desc: 'O final clássico. Tawny ou Ruby para acompanhar as nossas sobremesas de chocolate.',
        price: '3.500 Kz',
        tags: ['digestivo']
      }
    ]
  },

  cafetaria: {
    label: 'Cafetaria & Digestivos',
    icon:  '☕',
    desc:  'O fecho da experiência Nandinhos, com o rigor do café bem tirado.',
    items: [
      { id: 'cafe-expresso', name: 'Café Expresso', desc: 'Lote seleccionado, tirado com pressão perfeita.', price: '500 Kz', tags: [] },
      { id: 'cafe-duplo', name: 'Café Duplo', desc: 'Para quem precisa de energia extra.', price: '900 Kz', tags: [] },
      { id: 'cafe-pingado', name: 'Café Pingado', desc: 'O clássico café com um pingo de leite quente.', price: '600 Kz', tags: [] },
      { id: 'galao', name: 'Galão à Portuguesa', desc: 'Servido em copo alto, a harmonia perfeita entre café e leite.', price: '1.200 Kz', tags: [] },
      { id: 'cha-infusoes', name: 'Chás & Infusões', desc: 'Diversas variedades: Cidreira, Hortelã, Chá Verde.', price: '800 Kz', tags: [] },
      { id: 'bagaceira', name: 'Aguardente Bagaceira', desc: 'Digestivo tradicional português forte e aromático.', price: '2.500 Kz', tags: [] },
      { id: 'licor-beirao', name: 'Licor Beirão', desc: 'O licor de Portugal, servido com gelo e limão.', price: '3.000 Kz', tags: [] },
      { id: 'whisky-velho', name: 'Whisky Velho Reserva', desc: 'Selecção de maltes envelhecidos para um final sofisticado.', price: '5.500 Kz', tags: ['premium'] }
    ]
  },

  /**
   * SPECIAL COMBOS — LUNCH EFFICIENCY
   * -------------------------------------------------------------------------
   * Designed for the Luanda professional who demands quality and speed.
   */
  combos: {
    label: 'Executivo & Combos',
    icon:  '💼',
    desc:  'Soluções completas desenhadas para o profissional que valoriza um almoço de qualidade superior mas necessita de um serviço ágil e eficiente.',
    items: [
      {
        id: 'menu-executivo-frango',
        name: 'Menu Executivo Frango',
        desc: 'Meio frango grelhado nas brasas, acompanhado por arroz branco solto, batata frita à rodela, salada mista e uma bebida à escolha.',
        price: '8.500 Kz',
        tags: ['eficiência', 'equilibrado'],
        technical_notes: 'Preparação rápida em linha dedicada. Tempo de espera inferior a 15 min.',
        allergens: ['nenhum']
      },
      {
        id: 'menu-executivo-picanha',
        name: 'Menu Executivo Picanha',
        desc: 'Dose individual de picanha premium (aprox. 200g), feijão preto temperado, arroz, batata e bebida.',
        price: '10.500 Kz',
        tags: ['bestseller', 'proteína'],
        technical_notes: 'Picanha fatiada para selagem rápida e máxima retenção de sucos.',
        allergens: ['nenhum']
      },
      {
        id: 'menu-bacalhau-rapido',
        name: 'Menu Bacalhau à Brás',
        desc: 'A nossa famosa receita de bacalhau à brás em dose individual, acompanhada por salada fresca e bebida.',
        price: '9.500 Kz',
        tags: ['tradicional'],
        technical_notes: 'Bacalhau demolhado na casa, batata palha artesanal.',
        allergens: ['peixe', 'ovos']
      },
      {
        id: 'menu-executivo-peixe',
        name: 'Menu Executivo Peixe do Dia',
        desc: 'Filete de peixe grelhado (conforme disponibilidade), batata cozida, legumes ao vapor e bebida.',
        price: '11.000 Kz',
        tags: ['saudável'],
        technical_notes: 'Peixe branco de baixo teor lipídico, grelhado ao vapor/brasa.',
        allergens: ['peixe']
      },
      {
        id: 'menu-familia-4',
        name: 'Combo Família (4 Pessoas)',
        desc: 'Frango inteiro, dose de picanha, arroz, batata, feijão e 1.5L de refrigerante.',
        price: '32.000 Kz',
        tags: ['partilhar'],
        technical_notes: 'Travessa completa optimizada para grupos de 4 adultos.',
        allergens: ['nenhum']
      }
    ]
  },

  /**
   * ACCOMPANIMENTS — THE PORTUGUESE SIDE
   * -------------------------------------------------------------------------
   * Extra portions of our traditional sides to customize your experience.
   */
  extras: {
    label: 'Extras & Guarnições',
    icon:  '➕',
    desc:  'Doses extra dos nossos acompanhamentos tradicionais para personalizar a sua refeição.',
    items: [
      { id: 'extra-arroz', name: 'Dose Extra Arroz', desc: 'Uma taça generosa de arroz agulha solto.', price: '1.500 Kz', tags: [] },
      { id: 'extra-batata', name: 'Dose Extra Batata', desc: 'Batata nacional frita no ponto ideal.', price: '2.500 Kz', tags: [] },
      { id: 'extra-feijao', name: 'Dose Extra Feijão', desc: 'O nosso feijão temperado com refogado caseiro.', price: '2.000 Kz', tags: [] },
      { id: 'extra-salada', name: 'Dose Extra Salada', desc: 'Salada mista com vegetais seleccionados no dia.', price: '2.200 Kz', tags: [] },
      { id: 'extra-funge', name: 'Dose Extra Funge', desc: 'Funge de mandioca ou milho acabado de bater.', price: '1.500 Kz', tags: [] },
      { id: 'molho-piripiri', name: 'Pote de Piripiri Caseiro', desc: 'A nossa receita secreta de picante (100ml) para levar.', price: '3.000 Kz', tags: ['takeaway'] },
      { id: 'molho-alho', name: 'Molho de Alho Caseiro', desc: 'Base de maionese artesanal e alho fresco.', price: '1.500 Kz', tags: [] },
      { id: 'pao-alho', name: 'Pão de Alho na Brasa', desc: 'Fatias de pão rústico com manteiga de alho e ervas.', price: '2.500 Kz', tags: ['popular'] }
    ]
  },

  /**
   * INFANTIL — LITTLE MASTERS
   * -------------------------------------------------------------------------
   * Balanced portions and flavors for our younger guests.
   */
  kids: {
    label: 'Menu Infantil',
    icon:  '👶',
    desc:  'Doses e sabores equilibrados para os nossos pequenos grandes mestres. Ingredientes naturais e preparação cuidada.',
    items: [
      {
        id: 'bitoque-mini',
        name: 'Mini Bitoque da Casa',
        desc: 'Bife de novilho macio (100g), ovo estrelado, arroz branco e batata frita à rodela.',
        price: '6.500 Kz',
        tags: ['clássico'],
        technical_notes: 'Corte de lombo batido para máxima ternura.',
        allergens: ['ovos']
      },
      {
        id: 'frango-dedinhos',
        name: 'Dedinhos de Frango Grelhado',
        desc: 'Peito de frango grelhado na brasa e cortado em tiras fáceis, servido com arroz ou puré.',
        price: '5.000 Kz',
        tags: ['suave'],
        technical_notes: 'Grelhado sem adição de gorduras saturadas.',
        allergens: ['nenhum']
      },
      {
          id: 'esparguete-bolonhesa',
          name: 'Esparguete à Bolonhesa Kids',
          desc: 'Massa italiana com carne de novilho picada e molho de tomate natural.',
          price: '5.500 Kz',
          tags: ['favorito'],
          technical_notes: 'Carne picada na hora para garantir a frescura.',
          allergens: ['glúten']
      }
    ]
  },

  /**
   * TAKE-AWAY SOLUTIONS
   * -------------------------------------------------------------------------
   * Optimized packaging for maintaining thermal integrity.
   */
  takeaway: {
    label: 'Nandinhos em Casa',
    icon:  '🥡',
    desc:  'Leve o sabor da nossa brasa para o seu lar. Embalagens térmicas especiais incluídas.',
    items: [
      { id: 'frango-caixa', name: 'Frango Inteiro (Take-away)', desc: 'Inclui batata e arroz. Pronto a levar.', price: '12.500 Kz', tags: ['rápido'] },
      { id: 'pote-piripiri-grande', name: 'Molho Piripiri Extra (250ml)', desc: 'Para os verdadeiros amantes do picante Nandinhos.', price: '5.500 Kz', tags: ['essencial'] }
    ]
  }
};

/**
 * Renders the complete menu system into the DOM.
 * It builds both the navigation tabs and the content panels dynamically
 * based on the MENU_DATA constant.
 */
function renderMenu(filter = '') {
  const container = document.querySelector('.menu__tabs-content');
  const tabsNav   = document.querySelector('.menu__tabs-nav');

  if (!container || !tabsNav) return;

  // Clear existing content if this is a re-render (e.g. search)
  container.innerHTML = '';
  if (!filter) tabsNav.innerHTML = '';

  const activeCategory = document.querySelector('.menu-tab.is-active')?.dataset.category || Object.keys(MENU_DATA)[0];

  Object.keys(MENU_DATA).forEach((key, index) => {
    const cat = MENU_DATA[key];

    // 1. Build Navigation Tab (only on initial load)
    if (!filter) {
        const tab = document.createElement('button');
        tab.className = `menu-tab${key === activeCategory ? ' is-active' : ''}`;
        tab.dataset.category = key;
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-selected', key === activeCategory ? 'true' : 'false');
        tab.innerHTML = `${cat.icon} <span>${cat.label}</span>`;
        tabsNav.appendChild(tab);
    }

    // 2. Build Content Panel
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
      // Apply search filter if present
      if (filter && !item.name.toLowerCase().includes(filter.toLowerCase()) && !item.desc.toLowerCase().includes(filter.toLowerCase())) {
          return;
      }

      visibleItems++;
      const card = document.createElement('article');
      card.className = 'menu-card';
      card.setAttribute('data-reveal', 'fade-up');

      const tagsHtml = item.tags.map(t => `<span class="tag">${t}</span>`).join('');

      card.innerHTML = `
          <div class="menu-card__inner">
              <div class="menu-card__meta">${tagsHtml}</div>
              <h4 class="menu-card__title">${item.name}</h4>
              <p class="menu-card__desc">${item.desc}</p>

              <!-- Technical Specs (Visible on hover or mobile details) -->
              <div class="menu-card__specs">
                  ${item.technical_notes ? `<span class="spec-tech"><strong>Técnica:</strong> ${item.technical_notes}</span>` : ''}
                  ${item.allergens ? `<span class="spec-allergens"><strong>Alérgenos:</strong> ${item.allergens.join(', ')}</span>` : ''}
              </div>

              <div class="menu-card__footer">
                  <span class="menu-card__price">${item.price}</span>
                  <button class="menu-card__action" aria-label="Pedir via WhatsApp" onclick="window.location.href='#reservas'">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                  </button>
              </div>
          </div>
      `;
      grid.appendChild(card);
    });

    // Only append panel if it contains items matching the search
    if (visibleItems > 0) {
        container.appendChild(panel);
    }
  });

  // Re-bind tab logic after render
  initTabLogic();
}

/**
 * RE-RENDER HANDLER
 * -------------------------------------------------------------------------
 * This function is used by the search engine and category filters.
 * It clears the DOM and rebuilds the menu components from the MENU_DATA.
 *
 * @param {string} [filter=''] - Search term to match against name/desc.
 */
function triggerMenuUpdate(filter = '') {
    renderMenu(filter);

    /**
     * TECHNICAL NOTE:
     * After re-rendering, we must inform ScrollTrigger that the
     * document height might have changed to prevent marker misalignment.
     */
    ScrollTrigger.refresh();
}

/**
 * Global Initialization for Menu
 */
function initMenuSearch() {
    const searchInput = document.getElementById('menuSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.trim();
        renderMenu(val);

        // If searching, show all panels that have results
        if (val.length > 0) {
            document.querySelectorAll('.menu__panel').forEach(p => p.classList.add('is-active'));
            document.querySelector('.menu__tabs-nav').style.display = 'none';
        } else {
            document.querySelector('.menu__tabs-nav').style.display = 'flex';
            // Reset to default active tab
            const activeTab = document.querySelector('.menu-tab.is-active').dataset.category;
            document.querySelectorAll('.menu__panel').forEach(p => {
                p.classList.toggle('is-active', p.dataset.category === activeTab);
            });
        }
    });
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

/**
 * SEARCH & FILTERING ENGINE
 * -------------------------------------------------------------------------
 * Implements a high-performance filtering system that scans both names
 * and technical descriptions. Uses a re-render strategy with GSAP
 * entrance choreography to maintain the cinematic feel.
 */
function initMenuSearch() {
    const searchInput = document.getElementById('menuSearch');
    if (!searchInput) return;

    searchInput.addEventListener('input', Utils.debounce((e) => {
        const val = e.target.value.trim();

        /**
         * TECHNICAL NOTE:
         * We use the Utils.debounce helper to prevent heavy DOM
         * manipulations on every keystroke, ensuring 60fps performance
         * even on mid-range mobile devices common in Luanda.
         */
        renderMenu(val);

        const tabsNav = document.querySelector('.menu__tabs-nav');

        if (val.length > 0) {
            // Reveal all relevant panels simultaneously during search
            document.querySelectorAll('.menu__panel').forEach(p => p.classList.add('is-active'));
            if (tabsNav) tabsNav.style.display = 'none';
        } else {
            // Restore tabbed interface when search is cleared
            if (tabsNav) tabsNav.style.display = 'flex';
            const activeTab = document.querySelector('.menu-tab.is-active').dataset.category;
            document.querySelectorAll('.menu__panel').forEach(p => {
                p.classList.toggle('is-active', p.dataset.category === activeTab);
            });
        }
    }, 250));
}

/**
 * CATEGORY NAVIGATION ENGINE
 * -------------------------------------------------------------------------
 * Manages the "Portuguese Efficient" tab system. Ensures ARIA compliance
 * and triggers staggered entrance animations for menu cards.
 */
function initTabLogic() {
  const tabs   = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu__panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.category;

      // Update UI State
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

        /**
         * CHOREOGRAPHY:
         * We use a slight vertical offset (y: 20) and a short stagger
         * to create a "cascading" effect as the menu opens.
         */
        gsap.from(activePanel.querySelectorAll('.menu-card'), {
          opacity: 0,
          y: 20,
          stagger: 0.05,
          duration: 0.4,
          ease: 'power2.out',
          clearProps: 'all' // Clean up inline styles after animation
        });
      }
    });
  });
}

/**
 * SCHEMA.ORG GENERATOR (SEO)
 * -------------------------------------------------------------------------
 * Generates structured data for search engines. This makes every dish
 * on the menu discoverable via Google Search and rich snippets.
 */
function injectMenuSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Menu",
        "name": "Ementa Churrascaria Nandinhos",
        "mainEntityOfPage": "https://www.nandinhos.ao/#menu",
        "hasMenuSection": Object.keys(MENU_DATA).map(key => ({
            "@type": "MenuSection",
            "name": MENU_DATA[key].label,
            "description": MENU_DATA[key].desc,
            "hasMenuItem": MENU_DATA[key].items.map(item => ({
                "@type": "MenuItem",
                "name": item.name,
                "description": item.desc,
                "offers": {
                    "@type": "Offer",
                    "price": item.price.replace(' Kz', '').replace('.', ''),
                    "priceCurrency": "AOA"
                }
            }))
        }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
}

/**
 * CORE INITIALIZATION SEQUENCE
 * -------------------------------------------------------------------------
 * Executes the render and binding logic once the DOM is ready.
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Technical Render
    renderMenu();

    // 2. Logic Bindings
    initMenuSearch();

    // 3. SEO Injection
    injectMenuSchema();

    /**
     * PERFORMANCE NOTE:
     * We initialize Schema.org injection last to ensure it doesn't
     * block the critical rendering path (CRP) of the menu visuals.
     */
});
