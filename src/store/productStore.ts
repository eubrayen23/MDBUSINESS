import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { initialProducts } from './seedData';

export interface Product {
  id: string;
  name: { pt: string; en: string; fr: string };
  artist: string;
  category: 'pinturas' | 'esculturas' | 'paisagens' | 'artefactos' | 'artesanato';
  price: number; // USD
  currency: 'USD';
  images: string[];
  description: { pt: string; en: string; fr: string };
  dimensions?: string;
  medium?: string;
  year?: number;
  inStock: boolean;
  featured: boolean;
}

interface ProductState {
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (id: string, product: Product) => void;
  deleteProduct: (id: string) => void;
  setProducts: (products: Product[]) => void;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      products: initialProducts,
      addProduct: (product) => {
        set((state) => ({ products: [...state.products, product] }));
      },
      updateProduct: (id, updatedProduct) => {
        set((state) => ({
          products: state.products.map((p) => (p.id === id ? updatedProduct : p)),
        }));
      },
      deleteProduct: (id) => {
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        }));
      },
      setProducts: (products) => set({ products }),
    }),
    {
      name: 'ekton-product-storage',
    }
  )
);
