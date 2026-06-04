import { Product } from './productStore';

import horse from '../assets/Equestrian-Figure-13th-15th-century-747x1024.jpg';
import tribalArt from '../assets/History_of_African_Tribal_Art_-_Image_2.webp';
import mask from '../assets/mascara-africana.webp';
import market from '../assets/merca1-1240x827.jpg';
import fortress from '../assets/fortaleza-sao-miguel-luanda.webp';
import abstract from '../assets/0c541d4a0a60212c00bf7b7a6b80408a.jpg';
import painting1 from '../assets/product1.jpg';
import painting2 from '../assets/product5.jpg';
import sculpture1 from '../assets/product2.jpg';
import sculpture2 from '../assets/product6.jpg';

export const initialProducts: Product[] = [
  {
    id: 'p1',
    name: {
      pt: 'Figura Equestre (Séc. XIII-XV)',
      en: 'Equestrian Figure (13th-15th Century)',
      fr: 'Figure Équestre (XIIIe-XVe siècle)'
    },
    artist: 'Mestre Desconhecido (Cultura do Mali/Níger)',
    category: 'artefactos',
    price: 45000,
    currency: 'USD',
    images: [horse],
    description: {
      pt: 'Uma peça monumental de terracota representando a autoridade e o prestígio militar das antigas civilizações da África Ocidental. Um item de museu para coleccionadores sérios.',
      en: 'A monumental terracotta piece representing the authority and military prestige of ancient West African civilizations. A museum-grade item for serious collectors.',
      fr: 'Une pièce monumentale en terre cuite représentant l\'autorité et le prestige militaire des anciennes civilisations d\'Afrique de l\'Ouest. Un objet de qualité musée pour les collectionneurs sérieux.'
    },
    dimensions: '74x102cm',
    medium: 'Terracota Envelhecida',
    year: 1450,
    inStock: true,
    featured: true
  },
  {
    id: 'p2',
    name: {
      pt: 'Máscara Cerimonial Mwana Pwo',
      en: 'Mwana Pwo Ceremonial Mask',
      fr: 'Masque Cérémoniel Mwana Pwo'
    },
    artist: 'Mestre Escultor Chokwe',
    category: 'esculturas',
    price: 12500,
    currency: 'USD',
    images: [mask],
    description: {
      pt: 'Símbolo da feminilidade ancestral e da fertilidade, esta máscara Chokwe apresenta pormenores esculpidos com precisão em madeira de sândalo e fibras naturais.',
      en: 'A symbol of ancestral femininity and fertility, this Chokwe mask features precision-carved details in sandalwood and natural fibers.',
      fr: 'Symbole de féminité ancestrale et de fertilité, ce masque Chokwe présente des détails sculptés avec précision dans du bois de santal et des fibres naturelles.'
    },
    dimensions: '45cm altura',
    medium: 'Madeira e Ráfia',
    year: 2023,
    inStock: true,
    featured: true
  },
  {
    id: 'p3',
    name: {
      pt: 'Convergência Abstracta',
      en: 'Abstract Convergence',
      fr: 'Convergence Abstraite'
    },
    artist: 'Matias Domingos',
    category: 'pinturas',
    price: 8900,
    currency: 'USD',
    images: [abstract],
    description: {
      pt: 'Uma exploração visceral das texturas e cores da terra angolana. Esta obra de Matias Domingos capta a energia crua da modernidade africana.',
      en: 'A visceral exploration of the textures and colors of Angolan soil. This work by Matias Domingos captures the raw energy of African modernity.',
      fr: 'Une exploration viscérale des textures et des couleurs du sol angolais. Cette œuvre de Matias Domingos capture l\'énergie brute de la modernité africaine.'
    },
    dimensions: '120x120cm',
    medium: 'Mista sobre tela',
    year: 2024,
    inStock: true,
    featured: true
  },
  {
    id: 'p4',
    name: {
      pt: 'Fortaleza de São Miguel',
      en: 'São Miguel Fortress',
      fr: 'Forteresse de São Miguel'
    },
    artist: 'José Gaspar',
    category: 'paisagens',
    price: 6800,
    currency: 'USD',
    images: [fortress],
    description: {
      pt: 'Uma vista panorâmica da sentinela histórica de Luanda. Gaspar utiliza uma paleta de ocres e azuis para evocar a nostalgia colonial e a resiliência nacional.',
      en: 'A panoramic view of Luanda\'s historical sentinel. Gaspar uses a palette of ochres and blues to evoke colonial nostalgia and national resilience.',
      fr: 'Une vue panoramique de la sentinelle historique de Luanda. Gaspar utilise une palette d\'ocres et de bleus pour évoquer la nostalgie coloniale et la résilience nationale.'
    },
    dimensions: '150x80cm',
    medium: 'Óleo sobre tela',
    year: 2024,
    inStock: true,
    featured: true
  },
  {
    id: 'p5',
    name: {
      pt: 'Mercado de Artesanato',
      en: 'Craft Market',
      fr: 'Marché Artisanal'
    },
    artist: 'Ana Silva',
    category: 'artesanato',
    price: 4500,
    currency: 'USD',
    images: [market],
    description: {
      pt: 'Uma representação vibrante do comércio tradicional em Luanda. Esta obra celebra a vida quotidiana e o génio criativo dos artesãos locais.',
      en: 'A vibrant depiction of traditional commerce in Luanda. This work celebrates the daily life and creative genius of local artisans.',
      fr: 'Une représentation vibrante du commerce traditionnel à Luanda. Cette œuvre célèbre la vie quotidienne et le génie créatif des artisans locaux.'
    },
    dimensions: '100x70cm',
    medium: 'Acrílico',
    year: 2024,
    inStock: true,
    featured: true
  },
  {
    id: 'p6',
    name: {
      pt: 'História Tribal II',
      en: 'Tribal History II',
      fr: 'Histoire Tribale II'
    },
    artist: 'Manuel Agostinho',
    category: 'esculturas',
    price: 15500,
    currency: 'USD',
    images: [tribalArt],
    description: {
      pt: 'Uma composição escultural que dialoga com os mitos de criação dos povos Bantu. Peça única executada em ébano e bronze.',
      en: 'A sculptural composition that dialogues with the creation myths of the Bantu peoples. Unique piece executed in ebony and bronze.',
      fr: 'Une composition sculpturale qui dialogue avec les mythes de création des peuples bantous. Pièce unique exécutée en ébène et bronze.'
    },
    dimensions: '180cm',
    medium: 'Ébano e Bronze',
    year: 2023,
    inStock: true,
    featured: true
  }
];
