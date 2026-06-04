import { Product } from './productStore';

import p1 from '../assets/product1.jpg';
import p2 from '../assets/product2.jpg';
import p3 from '../assets/product3.jpg';
import p4 from '../assets/product4.jpg';
import p5 from '../assets/product5.jpg';
import p6 from '../assets/product6.jpg';
import p7 from '../assets/product7.jpg';
import p8 from '../assets/product8.jpg';
import p9 from '../assets/product9.jpg';
import p10 from '../assets/product10.jpg';

export const initialProducts: Product[] = [
  {
    id: 'p1',
    name: { pt: 'Pensamento Profundo', en: 'Deep Thought', fr: 'Pensée Profonde' },
    artist: 'Matias Domingos',
    category: 'pinturas',
    price: 1200,
    currency: 'USD',
    images: [p1],
    description: {
      pt: 'Uma representação contemporânea da introspeção africana.',
      en: 'A contemporary representation of African introspection.',
      fr: 'Une représentation contemporaine de l\'introspection africaine.'
    },
    dimensions: '100x120cm',
    medium: 'Óleo sobre tela',
    year: 2024,
    inStock: true,
    featured: true
  },
  {
    id: 'p2',
    name: { pt: 'Guerreira Mumuila', en: 'Mumuila Warrior', fr: 'Guerrière Mumuila' },
    artist: 'Ana Silva',
    category: 'esculturas',
    price: 850,
    currency: 'USD',
    images: [p2],
    description: {
      pt: 'Escultura em bronze celebrando a força das mulheres da Huíla.',
      en: 'Bronze sculpture celebrating the strength of Huila women.',
      fr: 'Sculpture en bronze célébrant la force des femmes de Huila.'
    },
    dimensions: '45cm altura',
    medium: 'Bronze',
    year: 2023,
    inStock: true,
    featured: true
  },
  {
    id: 'p3',
    name: { pt: 'Pôr do Sol no Mussulo', en: 'Sunset at Mussulo', fr: 'Coucher de soleil au Mussulo' },
    artist: 'José Gaspar',
    category: 'paisagens',
    price: 600,
    currency: 'USD',
    images: [p3],
    description: {
      pt: 'A serenidade das águas de Luanda ao entardecer.',
      en: 'The serenity of Luanda waters at dusk.',
      fr: 'La sérénité des eaux de Luanda au crépuscule.'
    },
    dimensions: '80x60cm',
    medium: 'Acrílico',
    year: 2024,
    inStock: true,
    featured: true
  },
  {
    id: 'p4',
    name: { pt: 'Máscara Mwana Pwo', en: 'Mwana Pwo Mask', fr: 'Masque Mwana Pwo' },
    artist: 'Mestre Kapela',
    category: 'artefactos',
    price: 2500,
    currency: 'USD',
    images: [p4],
    description: {
      pt: 'Réplica autêntica de máscara ritual Chokwe.',
      en: 'Authentic replica of Chokwe ritual mask.',
      fr: 'Réplique authentique du masque rituel Chokwe.'
    },
    dimensions: '30cm',
    medium: 'Madeira e ráfia',
    year: 2022,
    inStock: true,
    featured: true
  },
  {
    id: 'p5',
    name: { pt: 'Ritmo Urbano', en: 'Urban Rhythm', fr: 'Rythme Urbain' },
    artist: 'Matias Domingos',
    category: 'pinturas',
    price: 950,
    currency: 'USD',
    images: [p5],
    description: {
      pt: 'O caos vibrante e a energia de Luanda.',
      en: 'The vibrant chaos and energy of Luanda.',
      fr: 'Le chaos vibrant et l\'énergie de Luanda.'
    },
    dimensions: '90x90cm',
    medium: 'Mista',
    year: 2024,
    inStock: true,
    featured: true
  },
  {
    id: 'p6',
    name: { pt: 'Ancestralidade', en: 'Ancestry', fr: 'Ancestralité' },
    artist: 'Manuel Agostinho',
    category: 'esculturas',
    price: 1800,
    currency: 'USD',
    images: [p6],
    description: {
      pt: 'Diálogo entre o passado e o presente.',
      en: 'Dialogue between past and present.',
      fr: 'Dialogue entre le passé et le présent.'
    },
    dimensions: '120cm',
    medium: 'Ébano',
    year: 2023,
    inStock: true,
    featured: true
  },
  {
    id: 'p7',
    name: { pt: 'Kalandula em Tons Azuis', en: 'Kalandula in Blue Tones', fr: 'Kalandula en tons bleus' },
    artist: 'Ana Silva',
    category: 'paisagens',
    price: 1100,
    currency: 'USD',
    images: [p7],
    description: {
      pt: 'A majestade das quedas de Kalandula.',
      en: 'The majesty of Kalandula falls.',
      fr: 'La majesté des chutes de Kalandula.'
    },
    dimensions: '150x100cm',
    medium: 'Óleo',
    year: 2024,
    inStock: true,
    featured: false
  },
  {
    id: 'p8',
    name: { pt: 'Cesto de Benguela', en: 'Benguela Basket', fr: 'Panier de Benguela' },
    artist: 'Artesãos de Omaka',
    category: 'artesanato',
    price: 150,
    currency: 'USD',
    images: [p8],
    description: {
      pt: 'Tecelagem tradicional com fibras naturais.',
      en: 'Traditional weaving with natural fibers.',
      fr: 'Tissage traditionnel avec des fibres naturelles.'
    },
    dimensions: '40cm diâmetro',
    medium: 'Fibras vegetais',
    year: 2024,
    inStock: true,
    featured: false
  },
  {
    id: 'p9',
    name: { pt: 'O Pescador', en: 'The Fisherman', fr: 'Le Pêcheur' },
    artist: 'José Gaspar',
    category: 'pinturas',
    price: 750,
    currency: 'USD',
    images: [p9],
    description: {
      pt: 'Homenagem aos pescadores da Ilha do Cabo.',
      en: 'Tribute to the fishermen of Ilha do Cabo.',
      fr: 'Hommage aux pêcheurs d\'Ilha do Cabo.'
    },
    dimensions: '70x100cm',
    medium: 'Acrílico',
    year: 2023,
    inStock: true,
    featured: false
  },
  {
    id: 'p10',
    name: { pt: 'Tecidos Africanos', en: 'African Textiles', fr: 'Textiles Africains' },
    artist: 'Mestre Kapela',
    category: 'artesanato',
    price: 450,
    currency: 'USD',
    images: [p10],
    description: {
      pt: 'Coleção de tecidos tradicionais com padrões africanos autênticos.',
      en: 'Collection of traditional fabrics with authentic African patterns.',
      fr: 'Collection de tissus traditionnels aux motifs africains authentiques.'
    },
    dimensions: 'Variável',
    medium: 'Algodão',
    year: 2024,
    inStock: true,
    featured: false
  },
  {
    id: 'p11',
    name: { pt: 'Mercado do Roque Santeiro', en: 'Roque Santeiro Market', fr: 'Marché Roque Santeiro' },
    artist: 'Manuel Agostinho',
    category: 'pinturas',
    price: 1400,
    currency: 'USD',
    images: [p1],
    description: {
      pt: 'Memória visual de um dos maiores mercados de África.',
      en: 'Visual memory of one of Africa\'s largest markets.',
      fr: 'Mémoire visuelle de l\'un des plus grands marchés d\'Afrique.'
    },
    dimensions: '120x150cm',
    medium: 'Mista',
    year: 2022,
    inStock: true,
    featured: false
  },
  {
    id: 'p12',
    name: { pt: 'Estatueta Tchokwe', en: 'Tchokwe Statuette', fr: 'Statuette Tchokwe' },
    artist: 'Artesãos da Lunda',
    category: 'artesanato',
    price: 300,
    currency: 'USD',
    images: [p2],
    description: {
      pt: 'Pequena estatueta em madeira representando a fertilidade.',
      en: 'Small wooden statuette representing fertility.',
      fr: 'Petite statuette en bois representando la fertilité.'
    },
    dimensions: '20cm',
    medium: 'Madeira',
    year: 2024,
    inStock: true,
    featured: false
  }
];
