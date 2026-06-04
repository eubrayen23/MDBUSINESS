import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, X, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { useProductStore } from '@/store/productStore';
import { ProductCard } from '@/components/ProductCard';

const Shop: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const products = useProductStore((state) => state.products);

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>(searchParams.get('category') || 'all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState<string>('recent');
  const [visibleCount, setVisibleCount] = useState(9);

  const categories = ['all', 'pinturas', 'esculturas', 'paisagens', 'artefactos', 'artesanato'];

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setCategoryFilter(cat);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (categoryFilter !== 'all') {
      result = result.filter((p) => p.category === categoryFilter);
    }

    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (sortBy === 'price_asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price_desc') {
      result.sort((a, b) => b.price - a.price);
    } else {
      // Default recent: assuming higher ID or just original order for now
      result.sort((a, b) => (b.year || 0) - (a.year || 0));
    }

    return result;
  }, [products, categoryFilter, priceRange, sortBy]);

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const handleCategoryChange = (cat: string) => {
    setCategoryFilter(cat);
    if (cat === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
    setVisibleCount(9);
  };

  return (
    <main className="bg-cream-white min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-display text-ebony-black mb-4">Galeria</h1>
            <p className="text-ebony-black/50 font-sans tracking-widest uppercase text-xs">
              {filteredProducts.length} Peças Encontradas
            </p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
             <button
               onClick={() => setIsFilterOpen(!isFilterOpen)}
               className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-white border border-ebony-black/5 rounded-full px-6 py-3 font-sans text-[10px] uppercase tracking-widest font-bold hover:bg-ebony-black hover:text-white transition-all shadow-sm"
             >
               <Filter className="w-3.5 h-3.5" />
               {t('shop.filters')}
             </button>

             <div className="relative flex-1 md:flex-none">
               <select
                 value={sortBy}
                 onChange={(e) => setSortBy(e.target.value)}
                 className="w-full appearance-none bg-white border border-ebony-black/5 rounded-full px-6 py-3 font-sans text-[10px] uppercase tracking-widest font-bold pr-10 focus:outline-none focus:ring-1 focus:ring-ochre-gold shadow-sm cursor-pointer"
               >
                 <option value="recent">{t('shop.recent')}</option>
                 <option value="price_asc">{t('shop.price_asc')}</option>
                 <option value="price_desc">{t('shop.price_desc')}</option>
               </select>
               <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none text-ebony-black/40" />
             </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar (Desktop) */}
          <aside className={`lg:w-64 space-y-10 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
             <div>
               <h4 className="font-display text-lg mb-6 uppercase tracking-widest text-terracotta">{t('shop.category')}</h4>
               <div className="flex flex-col gap-3">
                 {categories.map((cat) => (
                   <button
                     key={cat}
                     onClick={() => handleCategoryChange(cat)}
                     className={`text-left font-sans text-xs uppercase tracking-[0.2em] transition-all py-1 border-l-2 pl-4 ${
                       categoryFilter === cat
                         ? 'border-ochre-gold text-ebony-black font-bold'
                         : 'border-transparent text-ebony-black/40 hover:text-ebony-black hover:border-ebony-black/10'
                     }`}
                   >
                     {cat === 'all' ? t('shop.all') : t(`categories.${cat}`)}
                   </button>
                 ))}
               </div>
             </div>

             <div>
               <h4 className="font-display text-lg mb-6 uppercase tracking-widest text-terracotta">{t('shop.price_range')}</h4>
               <div className="space-y-4">
                 <input
                   type="range"
                   min="0"
                   max="5000"
                   step="100"
                   value={priceRange[1]}
                   onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                   className="w-full accent-terracotta"
                 />
                 <div className="flex justify-between font-mono text-[10px] text-ebony-black/60">
                   <span>$0</span>
                   <span>${priceRange[1]}</span>
                 </div>
               </div>
             </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {displayedProducts.map((product, i) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="py-32 text-center bg-white rounded-[40px] border border-ebony-black/5">
                <p className="text-ebony-black/40 font-display text-2xl italic">Nenhuma obra encontrada para estes critérios.</p>
                <button
                  onClick={() => { handleCategoryChange('all'); setPriceRange([0, 5000]); }}
                  className="mt-6 text-terracotta font-sans text-[10px] uppercase tracking-widest font-bold underline underline-offset-4"
                >
                  Limpar Filtros
                </button>
              </div>
            )}

            {filteredProducts.length > visibleCount && (
              <div className="mt-20 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 9)}
                  className="btn-primary"
                >
                  {t('shop.load_more')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Shop;
