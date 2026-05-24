// =====================================================
// ARRAYS DE PRATOS - DADOS COMPLETOS DA EMENTA
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
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M8 12h8m-8 4h8m-10-8h12M4 20h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z"></path></svg>',
    desc:  'Especialidades da casa. Carnes seleccionadas, temperadas com rigor e grelhadas em brasas de carvo vegetal de alta densidade.',
    items: [
      {
        id: 'frango-churrasco',
        name: 'Frango de Churrasco Inteiro',
        desc: 'O frango mais famoso de Luanda. Aberto pelas costas, marinado em molho de limo e alho, grelhado at atingir a pele crocante perfeita e carne suculenta.',
        price: '12.000 Kz',
        tags: ['bestseller', 'assinatura'],
        technical_notes: 'Frango de produo nacional (Kwanza Sul), peso mdio 1.2kg. Grelhado a 350C durante 25 minutos.',
        allergens: ['nenhum']
      },
      {
        id: 'frango-churrasco-meio',
        name: 'Meio Frango de Churrasco',
        desc: 'Metade do nosso frango lendrio, acompanhado com o nosso molho piripiri caseiro (suave ou forte).',
        price: '6.500 Kz',
        tags: ['popular'],
      },
      {
        id: 'picanha',
        name: 'Picanha Brasileira Premium',
        desc: 'Corte seleccionado de picanha com a camada de gordura ideal, grelhada com flor de sal para realar o sabor natural da carne.',
        price: '13.000 Kz',
        tags: ['premium'],
        technical_notes: 'Corte de importao certificada. Grelhado exclusivamente com flor de sal de Benguela.',
        allergens: ['nenhum']
      },
      {
        id: 'churrasco-misto',
        name: 'Churrasco Misto  Nandinhos',
        desc: 'A melhor forma de provar a nossa mestria: Picanha, entrecosto, salsicha toscana e frango. Ideal para partilhar em famlia.',
        price: '14.500 Kz',
        tags: ['popular', 'completo'],
      },
      {
        id: 'entrecosto',
        name: 'Entrecosto de Porco Grelhado',
        desc: 'Costelas de porco suculentas, marinadas em vinho branco, louro e ervas aromticas, grelhadas lentamente nas brasas.',
        price: '11.000 Kz',
        tags: ['tradicional'],
      },
      {
        id: 'bife-vazia',
        name: 'Bife da Vazia na Grelha',
        desc: 'Corte nobre de novilho, grelhado exactamente ao seu gosto (mal, mdio ou bem passado). Macio e cheio de sabor.',
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
        desc: 'Um corte extremamente macio e saboroso, fatiado finamente aps a grelha. Acompanha molho chimichurri caseiro.',
        price: '12.000 Kz',
        tags: ['novo'],
      },
      {
        id: 'salsicha-toscana',
        name: 'Salsicha Toscana Grelhada',
        desc: 'Salsicha de porco de produo artesanal, grelhada at ao ponto de estalido. Ideal como entrada ou complemento.',
        price: '4.500 Kz',
        tags: ['petisco'],
      },
      {
        id: 'piano-porco',
        name: 'Piano de Porco',
        desc: 'Entrecosto fino e crocante, temperado apenas com sal e limo. Uma delcia para comer com as mos.',
        price: '9.500 Kz',
        tags: ['tradicional'],
      }
    ],
  },

  peixe: {
    label: 'Mar & Marisco',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M20 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8z"></path><path d="M12 8v8m-4-4h8"></path></svg>',
    desc:  'Produtos capturados nas guas angolanas, servidos com foco na frescura e integridade da matria-prima.',
    items: [
      {
        id: 'choco-grelhado',
        name: 'Choco Grelhado  Portuguesa',
        desc: 'Choco fresco grelhado inteiro, servido com a sua prpria tinta (opcional) e regado com azeite virgem extra e alho.',
        price: '10.500 Kz',
        tags: ['clssico', 'favorito'],
        technical_notes: 'Limpeza artesanal, preservando a textura. Grelhado em fogo mdio para evitar o endurecimento das fibras.',
        allergens: ['moluscos']
      },
      {
        id: 'peixe-dia',
        name: 'Peixe Fresco do Dia (Grelhado)',
        desc: 'Pargo, Garoupa ou Corvina, dependendo da captura matinal. Grelhado com escamas para manter a humidade.',
        price: 'Preo do Dia',
        tags: ['fresco', 'recomendado'],
      },
      {
        id: 'camarao-tigre',
        name: 'Camaro Tigre Grelhado (XL)',
        desc: 'Dois camares tigre de grande calibre, abertos em borboleta e grelhados com manteiga de alho e coentros.',
        price: '18.000 Kz',
        tags: ['premium', 'exclusivo'],
      },
      {
        id: 'lulas-grelhadas',
        name: 'Lulas da Costa Grelhadas',
        desc: 'Lulas tenras grelhadas com um toque de limo e salsa fresca. Servidas com batata cozida e legumes.',
        price: '11.000 Kz',
        tags: [],
      },
      {
        id: 'salmao-grelhado',
        name: 'Salmo na Brasa com Ervas',
        desc: 'Lombo de salmo fresco, grelhado com pele para preservar a suculncia, finalizado com manteiga de ervas finas.',
        price: '14.000 Kz',
        tags: ['mega-3'],
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
    label: 'Bacalhau Tradicional',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>',
    desc:  'A herana gastronmica portuguesa. Bacalhau de cura tradicional, demolhado rigorosamente nas nossas instalaes.',
    items: [
      {
        id: 'bacalhau-cozido',
        name: 'Bacalhau Cozido com Todos',
        desc: 'Posta alta de bacalhau cozida no ponto, acompanhada com gro-de-bico, batata, ovo, cenoura e couve portuguesa. Regado com azeite virgem.',
        price: '13.500 Kz',
        tags: ['tradicional', 'saudvel'],
        technical_notes: 'Bacalhau Gadus Morhua, cura de 12 meses. Demolhado em gua controlada a 4C durante 72 horas.',
        allergens: ['peixe', 'ovos']
      },
      {
        id: 'bacalhau-bras',
        name: 'Bacalhau  Brs Tradicional',
        desc: 'Bacalhau desfiado, envolvido em batata palha caseira, cebolada e ovos frescos. Finalizado com azeitonas pretas e salsa.',
        price: '11.500 Kz',
        tags: ['popular', 'clssico'],
      },
      {
        id: 'bacalhau-lagareiro',
        name: 'Bacalhau  Lagareiro',
        desc: 'Lombo de bacalhau assado no forno com batatinhas a murro, muito alho e azeite em abundncia.',
        price: '14.500 Kz',
        tags: ['premium'],
      },
      {
        id: 'bacalhau-natas',
        name: 'Bacalhau com Natas Nandinhos',
        desc: 'Verso cremosa gratinada no forno com um toque de queijo e noz-moscada. Receita da casa.',
        price: '12.000 Kz',
        tags: ['conforto'],
      }
    ],
  },

  acompanhamentos: {
    label: 'Acompanhamentos',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
    desc:  'Complementos essenciais. Ingredientes frescos processados diariamente para acompanhar grelhados e peixes.',
    items: [
      { id: 'batata-frita', name: 'Batata Frita  Rodela', desc: 'Batata nacional cortada  mo e frita em azeite/leo de qualidade. Sempre crocante.', price: '2.500 Kz', tags: ['bestseller'] },
      { id: 'arroz-branco', name: 'Arroz Branco Solto', desc: 'Arroz agulha de primeira qualidade, cozido com um dente de alho.', price: '1.500 Kz', tags: [] },
      { id: 'feijao', name: 'Feijo  Moda de Angola', desc: 'Feijo temperado com refogado de cebola, alho e louro. Sabor caseiro autntico.', price: '2.000 Kz', tags: ['angolano', 'favorito'] },
      { id: 'funge', name: 'Funge de Mandioca / Milho', desc: 'O acompanhamento essencial da gastronomia angolana. Feito de forma tradicional.', price: '1.500 Kz', tags: ['angolano', 'tradicional'] },
      { id: 'salada-mista', name: 'Salada Mista Fresca', desc: 'Alface, tomate, cebola e pepino, temperada com azeite e vinagre.', price: '2.200 Kz', tags: ['fresco'] },
      { id: 'espargregatado', name: 'Esparregado de Espinafres', desc: 'Cremoso e saboroso, ideal para acompanhar grelhados.', price: '3.000 Kz', tags: ['vegetariano'] }
    ],
  },

  sobremesas: {
    label: 'Sobremesas',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>',
    desc:  'Receitas tradicionais. O encerramento da experincia gastronmica com foco na doaria clssica.',
    items: [
      {
        id: 'mousse-maracuja',
        name: 'Mousse de Maracuj Real',
        desc: 'A sobremesa mais icnica da casa. Feita com polpa de maracuj fresco, cremosa e com o equilbrio perfeito entre o doce e o cido.',
        price: '3.500 Kz',
        tags: ['bestseller', 'assinatura'],
        technical_notes: 'Fruta fresca seleccionada. Sem corantes ou conservantes artificiais. Batida em baixa rotao para textura aerada.',
        allergens: ['lcteos']
      },
      {
        id: 'bolo-chocolate',
        name: 'Bolo de Chocolate Hmido',
        desc: 'Uma fatia generosa de bolo de chocolate artesanal, com cobertura de chocolate negro.',
        price: '4.000 Kz',
        tags: ['choclatras'],
      },
      {
        id: 'pudim-flan',
        name: 'Pudim Flan  Portuguesa',
        desc: 'Receita tradicional de ovos e caramelo, com textura sedosa.',
        price: '3.000 Kz',
        tags: ['clssico'],
      },
      {
        id: 'fruta-epoca',
        name: 'Fruta Tropical da poca',
        desc: 'Manga, Papaia ou Abacaxi fresco e fatiado.',
        price: '2.500 Kz',
        tags: ['saudvel', 'fresco'],
      }
    ],
  },

  bebidas: {
    label: 'Bebidas & Bar',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',
    desc:  'Seleco de bebidas mantidas em temperatura controlada para harmonizao.',
    items: [
      { id: 'fino-sb', name: 'Fino Super Bock (Presso)', desc: 'Cerveja de presso bem gelada, servida em copo refrescado.', price: '1.200 Kz', tags: ['popular'] },
      { id: 'cuca-lata', name: 'Cerveja Cuca (Lata/Garrafa)', desc: 'A cerveja nacional de Angola, sempre gelada.', price: '1.000 Kz', tags: ['nacional'] },
      { id: 'vinho-copo', name: 'Copo de Vinho da Casa', desc: 'Tinto ou Branco de qualidade seleccionada.', price: '2.500 Kz', tags: [] },
      { id: 'refrigerantes', name: 'Refrigerantes Diversos', desc: 'Coca-Cola, Fanta, Sumol, Sprite (33cl).', price: '1.200 Kz', tags: [] },
      { id: 'agua-mineral', name: 'gua Mineral (50cl)', desc: 'Com ou sem gs, natural ou fresca.', price: '800 Kz', tags: [] },
      { id: 'sangria-tinta', name: 'Sangria de Vinho Tinto (1L)', desc: 'Preparada com fruta fresca e um toque de canela. Ideal para partilhar.', price: '12.000 Kz', tags: ['para partilhar'] },
      { id: 'sangria-branca', name: 'Sangria de Vinho Branco (1L)', desc: 'Fresca e leve, com frutos tropicais angolanos.', price: '12.000 Kz', tags: ['fresco'] },
      { id: 'sumo-natural', name: 'Sumo Natural do Dia', desc: 'Manga, Mcua ou Papaia, feito na hora.', price: '1.500 Kz', tags: ['vitamina'] },
      { id: 'caipirinha', name: 'Caipirinha Tradicional', desc: 'Cachaa de qualidade, lima e acar mascavado.', price: '3.500 Kz', tags: [] }
    ],
  },

  sopas: {
    label: 'Entradas & Sopas',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
    desc:  'Incio da experincia. Receitas equilibradas que preparam o paladar para a intensidade da brasa.',
    items: [
      {
        id: 'caldo-verde',
        name: 'Caldo Verde  Portuguesa',
        desc: 'Sopa de batata e couve galega finamente cortada, com rodelas de chourio de fumeiro. Um clssico incontornvel.',
        price: '3.500 Kz',
        tags: ['clssico'],
        technical_notes: 'Couve cortada em juliana milimtrica. Chourio de porco preto para profundidade de sabor.',
        allergens: ['nenhum']
      },
      {
        id: 'sopa-legumes',
        name: 'Sementeira de Legumes',
        desc: 'Creme aveludado de legumes da poca, sem adio de natas. Saudvel e rico em nutrientes.',
        price: '2.500 Kz',
        tags: ['vegan'],
        technical_notes: 'Processado a baixa velocidade para manter as fibras vegetais intactas.',
        allergens: ['nenhum']
      },
      {
        id: 'paio-portugues',
        name: 'Paio de Lombo do Alentejo',
        desc: 'Fatias finas de paio de lombo de porco seleccionado, com cura natural. O incio perfeito para partilhar.',
        price: '4.500 Kz',
        tags: ['petisco'],
        technical_notes: 'Fatiado em lminas de 0.5mm para maximizar a libertao de oleicos.',
        allergens: ['nenhum']
      },
      {
        id: 'pao-couvert',
        name: 'Cesto de Po & Manteiga',
        desc: 'Po rstico acabado de sair do forno, manteiga de vaca e azeitonas marinadas em alho e louro.',
        price: '1.500 Kz',
        tags: [],
        technical_notes: 'Trigo de moagem lenta, fermentao natural de 12 horas.',
        allergens: ['glten', 'lcteos']
      }
    ]
  },

  /**
   * PREMIUM CUTS - THE NANDINHOS ELITE
   * -------------------------------------------------------------------------
   * These items represent the pinnacle of our grilling technology.
   */
  premium: {
    label: 'Cortes Especiais',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
    desc:  'Disponibilidade limitada. Cortes submetidos a protocolos trmicos de alta preciso.',
    items: [
      {
        id: 'tomahawk-reserva',
        name: 'Tomahawk Black Angus (1.2kg)',
        desc: 'O rei dos cortes. Um rib-eye com osso longo, grelhado em trs fases para uma textura inigualvel. Ideal para 2 a 3 pessoas.',
        price: '45.000 Kz',
        tags: ['premium', 'exclusivo'],
        technical_notes: 'Maturao Dry-Aged de 21 dias. Grelha calibrada para selagem de osso condutora.',
        allergens: ['nenhum']
      },
      {
        id: 'tbone-nandinhos',
        name: 'T-Bone Steak Especial',
        desc: 'O melhor de dois mundos: Lombo e Vazia unidos pelo osso. Corte de espessura generosa (4cm), servido ao ponto.',
        price: '28.000 Kz',
        tags: ['premium'],
        technical_notes: 'Calibrao de calor assimtrica para respeitar os diferentes tempos de cozedura do lombo.',
        allergens: ['nenhum']
      },
      {
        id: 'costelao-6-horas',
        name: 'Costelo de Novilho (Slow-Cook)',
        desc: 'Costela de novilho seleccionada, passada pela brasa e terminada em calor indirecto durante 6 horas at se soltar do osso.',
        price: '22.000 Kz',
        tags: ['assinatura', 'lento'],
        technical_notes: 'Temperatura de cmara mantida a constantes 110C.',
        allergens: ['nenhum']
      }
    ]
  },

  vinhos: {
    label: 'Garrafeira',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',
    desc:  'Curadoria de vinhos portugueses seleccionados para harmonizao com grelhados.',
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
        desc: 'Um clssico alentejano, macio e estruturado. Harmoniza idealmente com o Entrecosto.',
        price: '13.500 Kz',
        tags: []
      },
      {
        id: 'vinho-verde-alvarinho',
        name: 'Alvarinho (Branco)',
        desc: 'Fresco, mineral e vibrante. A escolha lgica para o nosso Choco Grelhado ou Peixe do Dia.',
        price: '12.000 Kz',
        tags: ['fresco']
      },
      {
        id: 'dao-branco',
        name: 'Do Encruzado (Branco)',
        desc: 'Vinho com volume e elegncia, excelente para pratos de Bacalhau.',
        price: '11.000 Kz',
        tags: []
      },
      {
        id: 'espumante-bruto',
        name: 'Espumante Bruto Bairrada',
        desc: 'Bolha fina e persistente. Para comear a refeio ou celebrar momentos especiais.',
        price: '18.000 Kz',
        tags: ['celebrao']
      },
      {
        id: 'vinho-porto',
        name: 'Copo de Vinho do Porto',
        desc: 'O final clssico. Tawny ou Ruby para acompanhar as nossas sobremesas de chocolate.',
        price: '3.500 Kz',
        tags: ['digestivo']
      }
    ]
  },

  cafetaria: {
    label: 'Cafetaria & Digestivos',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>',
    desc:  'Encerramento do servio. Protocolo de extrao de caf e seleco de digestivos.',
    items: [
      { id: 'cafe-expresso', name: 'Caf Expresso', desc: 'Lote seleccionado, tirado com presso perfeita.', price: '500 Kz', tags: [] },
      { id: 'cafe-duplo', name: 'Caf Duplo', desc: 'Para quem precisa de energia extra.', price: '900 Kz', tags: [] },
      { id: 'cafe-pingado', name: 'Caf Pingado', desc: 'O clssico caf com um pingo de leite quente.', price: '600 Kz', tags: [] },
      { id: 'galao', name: 'Galo  Portuguesa', desc: 'Servido em copo alto, a harmonia perfeita entre caf e leite.', price: '1.200 Kz', tags: [] },
      { id: 'cha-infusoes', name: 'Chs & Infuses', desc: 'Diversas variedades: Cidreira, Hortel, Ch Verde.', price: '800 Kz', tags: [] },
      { id: 'bagaceira', name: 'Aguardente Bagaceira', desc: 'Digestivo tradicional portugus forte e aromtico.', price: '2.500 Kz', tags: [] },
      { id: 'licor-beirao', name: 'Licor Beiro', desc: 'O licor de Portugal, servido com gelo e limo.', price: '3.000 Kz', tags: [] },
      { id: 'whisky-velho', name: 'Whisky Velho Reserva', desc: 'Seleco de maltes envelhecidos para um final sofisticado.', price: '5.500 Kz', tags: ['premium'] }
    ]
  },

  /**
   * SPECIAL COMBOS - LUNCH EFFICIENCY
   * -------------------------------------------------------------------------
   * Designed for the Luanda professional who demands quality and speed.
   */
  combos: {
    label: 'Menus Executivos',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
    desc:  'Solues optimizadas para o sector corporativo que exige qualidade e agilidade no servio.',
    items: [
      {
        id: 'menu-executivo-frango',
        name: 'Menu Executivo Frango',
        desc: 'Meio frango grelhado nas brasas, acompanhado por arroz branco solto, batata frita  rodela, salada mista e uma bebida  escolha.',
        price: '8.500 Kz',
        tags: ['eficincia', 'equilibrado'],
        technical_notes: 'Preparao rpida em linha dedicada. Tempo de espera inferior a 15 min.',
        allergens: ['nenhum']
      },
      {
        id: 'menu-executivo-picanha',
        name: 'Menu Executivo Picanha',
        desc: 'Dose individual de picanha premium (aprox. 200g), feijo preto temperado, arroz, batata e bebida.',
        price: '10.500 Kz',
        tags: ['bestseller', 'protena'],
        technical_notes: 'Picanha fatiada para selagem rpida e mxima reteno de sucos.',
        allergens: ['nenhum']
      },
      {
        id: 'menu-bacalhau-rapido',
        name: 'Menu Bacalhau  Brs',
        desc: 'A nossa famosa receita de bacalhau  brs em dose individual, acompanhada por salada fresca e bebida.',
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
        tags: ['saudvel'],
        technical_notes: 'Peixe branco de baixo teor lipdico, grelhado ao vapor/brasa.',
        allergens: ['peixe']
      },
      {
        id: 'menu-familia-4',
        name: 'Combo Famlia (4 Pessoas)',
        desc: 'Frango inteiro, dose de picanha, arroz, batata, feijo e 1.5L de refrigerante.',
        price: '32.000 Kz',
        tags: ['partilhar'],
        technical_notes: 'Travessa completa optimizada para grupos de 4 adultos.',
        allergens: ['nenhum']
      }
    ]
  },

  /**
   * ACCOMPANIMENTS - THE PORTUGUESE SIDE
   * -------------------------------------------------------------------------
   * Extra portions of our traditional sides to customize your experience.
   */
  extras: {
    label: 'Guarnies Extra',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
    desc:  'Personalizao da refeio atravs de pores adicionais de acompanhamentos.',
    items: [
      { id: 'extra-arroz', name: 'Dose Extra Arroz', desc: 'Uma taa generosa de arroz agulha solto.', price: '1.500 Kz', tags: [] },
      { id: 'extra-batata', name: 'Dose Extra Batata', desc: 'Batata nacional frita no ponto ideal.', price: '2.500 Kz', tags: [] },
      { id: 'extra-feijao', name: 'Dose Extra Feijo', desc: 'O nosso feijo temperado com refogado caseiro.', price: '2.000 Kz', tags: [] },
      { id: 'extra-salada', name: 'Dose Extra Salada', desc: 'Salada mista com vegetais seleccionados no dia.', price: '2.200 Kz', tags: [] },
      { id: 'extra-funge', name: 'Dose Extra Funge', desc: 'Funge de mandioca ou milho acabado de bater.', price: '1.500 Kz', tags: [] },
      { id: 'molho-piripiri', name: 'Pote de Piripiri Caseiro', desc: 'A nossa receita secreta de picante (100ml) para levar.', price: '3.000 Kz', tags: ['takeaway'] },
      { id: 'molho-alho', name: 'Molho de Alho Caseiro', desc: 'Base de maionese artesanal e alho fresco.', price: '1.500 Kz', tags: [] },
      { id: 'pao-alho', name: 'Po de Alho na Brasa', desc: 'Fatias de po rstico com manteiga de alho e ervas.', price: '2.500 Kz', tags: ['popular'] }
    ]
  },

  /**
   * INFANTIL - LITTLE MASTERS
   * -------------------------------------------------------------------------
   * Balanced portions and flavors for our younger guests.
   */
  kids: {
    label: 'Menu Infantil',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
    desc:  'Pores e temperos ajustados para o pblico infantil. Foco na nutrio e segurana alimentar.',
    items: [
      {
        id: 'bitoque-mini',
        name: 'Mini Bitoque da Casa',
        desc: 'Bife de novilho macio (100g), ovo estrelado, arroz branco e batata frita  rodela.',
        price: '6.500 Kz',
        tags: ['clssico'],
        technical_notes: 'Corte de lombo batido para mxima ternura.',
        allergens: ['ovos']
      },
      {
        id: 'frango-dedinhos',
        name: 'Dedinhos de Frango Grelhado',
        desc: 'Peito de frango grelhado na brasa e cortado em tiras fceis, servido com arroz ou pur.',
        price: '5.000 Kz',
        tags: ['suave'],
        technical_notes: 'Grelhado sem adio de gorduras saturadas.',
        allergens: ['nenhum']
      },
      {
          id: 'esparguete-bolonhesa',
          name: 'Esparguete  Bolonhesa Kids',
          desc: 'Massa italiana com carne de novilho picada e molho de tomate natural.',
          price: '5.500 Kz',
          tags: ['favorito'],
          technical_notes: 'Carne picada na hora para garantir a frescura.',
          allergens: ['glten']
      }
    ]
  },

  /**
   * TAKE-AWAY SOLUTIONS
   * -------------------------------------------------------------------------
   * Optimized packaging for maintaining thermal integrity.
   */
  takeaway: {
    label: 'Servio Take-away',
    icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>',
    desc:  'Logstica de recolha local. Embalagem tcnica para manuteno da integridade trmica.',
    items: [
      { id: 'frango-caixa', name: 'Frango Inteiro (Take-away)', desc: 'Inclui batata e arroz. Pronto a levar.', price: '12.500 Kz', tags: ['rpido'] },
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

      // Select a placeholder image from galeria if item doesn't have one
      const itemImage = item.image || `images/galeria/unnamed (${(index % 2) + 1}).jpg`;

      card.innerHTML = `
          <div class="menu-card__image-wrapper">
              <img src="${itemImage}" alt="${item.name}" loading="lazy">
          </div>
          <div class="menu-card__inner">
              <div class="menu-card__meta">${tagsHtml}</div>
              <h4 class="menu-card__title">${item.name}</h4>
              <p class="menu-card__desc">${item.desc}</p>

              <!-- Technical Specs (Visible on hover or mobile details) -->
              <div class="menu-card__specs">
                  ${item.technical_notes ? `<span class="spec-tech"><strong>Tcnica:</strong> ${item.technical_notes}</span>` : ''}
                  ${item.allergens ? `<span class="spec-allergens"><strong>Alrgenos:</strong> ${item.allergens.join(', ')}</span>` : ''}
              </div>

              <div class="menu-card__footer">
                  <span class="menu-card__price">${item.price}</span>
                  <button class="menu-card__action add-to-cart" aria-label="Adicionar à Mesa" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M12 5v14M5 12h14"/>
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
  initDragToScroll();
}

function initDragToScroll() {
  const slider = document.querySelector('.menu__tabs-nav');
  if (!slider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
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
});

// Reuse functions from higher scope or define once
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
            const activeTab = document.querySelector('.menu-tab.is-active').dataset.category;
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
