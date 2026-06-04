import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Plus, Trash2, Edit2, LogIn, Save, X, Image as ImageIcon } from 'lucide-react';
import { useProductStore, Product } from '@/store/productStore';
import toast from 'react-hot-toast';

const Admin: React.FC = () => {
  const { t } = useTranslation();
  const { products, addProduct, updateProduct, deleteProduct } = useProductStore();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Product>>({
    name: { pt: '', en: '', fr: '' },
    description: { pt: '', en: '', fr: '' },
    artist: '',
    category: 'pinturas',
    price: 0,
    images: [''],
    featured: false,
    inStock: true,
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'ektonarts2025') {
      setIsAuthenticated(true);
      toast.success('Admin autenticado com sucesso');
    } else {
      toast.error('Senha incorreta');
    }
  };

  const handleSave = () => {
    if (!formData.name?.pt || !formData.artist || !formData.price) {
      toast.error('Preencha os campos obrigatórios (Nome PT, Artista, Preço)');
      return;
    }

    const finalProduct = {
      ...formData,
      id: editingId || `p-${Date.now()}`,
      currency: 'USD' as const,
    } as Product;

    if (editingId) {
      updateProduct(editingId, finalProduct);
      toast.success('Produto atualizado');
    } else {
      addProduct(finalProduct);
      toast.success('Produto adicionado');
    }

    resetForm();
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      name: { pt: '', en: '', fr: '' },
      description: { pt: '', en: '', fr: '' },
      artist: '',
      category: 'pinturas',
      price: 0,
      images: [''],
      featured: false,
      inStock: true,
    });
  };

  const startEdit = (p: Product) => {
    setEditingId(p.id);
    setFormData(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-ebony-black flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[48px] w-full max-w-md shadow-2xl"
        >
          <div className="w-16 h-16 bg-ochre-gold rounded-full flex items-center justify-center text-ebony-black text-2xl mx-auto mb-8">
            ✦
          </div>
          <h1 className="text-3xl font-display text-center mb-8 uppercase tracking-widest font-bold">Admin Portal</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="password"
              placeholder="Senha de Acesso"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-cream-white border border-ebony-black/5 rounded-full px-8 py-4 font-sans focus:outline-none focus:ring-2 focus:ring-ochre-gold"
            />
            <button type="submit" className="w-full btn-primary py-5 flex items-center justify-center gap-2">
              <LogIn className="w-5 h-5" /> Entrar
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="bg-cream-white min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-16">
           <h1 className="text-5xl md:text-7xl font-display text-ebony-black">Admin</h1>
           <button onClick={() => setIsAuthenticated(false)} className="text-ebony-black/40 font-sans text-xs uppercase tracking-widest font-bold hover:text-terracotta">Sair do Painel</button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-10 rounded-[48px] border border-ebony-black/5 shadow-lg sticky top-32">
              <h2 className="text-2xl font-display mb-8 uppercase tracking-widest text-terracotta">
                {editingId ? 'Editar Obra' : 'Nova Obra'}
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-ebony-black/40 mb-2">Nome (PT)</label>
                  <input
                    className="w-full bg-cream-white border-0 rounded-2xl px-6 py-3 font-sans text-sm"
                    value={formData.name?.pt}
                    onChange={(e) => setFormData({ ...formData, name: { ...formData.name!, pt: e.target.value } })}
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-ebony-black/40 mb-2">Nome (EN)</label>
                  <input
                    className="w-full bg-cream-white border-0 rounded-2xl px-6 py-3 font-sans text-sm"
                    value={formData.name?.en}
                    onChange={(e) => setFormData({ ...formData, name: { ...formData.name!, en: e.target.value } })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-ebony-black/40 mb-2">Preço ($)</label>
                    <input
                      type="number"
                      className="w-full bg-cream-white border-0 rounded-2xl px-6 py-3 font-sans text-sm"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) })}
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-ebony-black/40 mb-2">Categoria</label>
                    <select
                      className="w-full bg-cream-white border-0 rounded-2xl px-6 py-3 font-sans text-sm appearance-none"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    >
                      <option value="pinturas">Pinturas</option>
                      <option value="esculturas">Esculturas</option>
                      <option value="paisagens">Paisagens</option>
                      <option value="artefactos">Artefactos</option>
                      <option value="artesanato">Artesanato</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-ebony-black/40 mb-2">Artista</label>
                  <input
                    className="w-full bg-cream-white border-0 rounded-2xl px-6 py-3 font-sans text-sm"
                    value={formData.artist}
                    onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-widest text-ebony-black/40 mb-2">URL da Imagem</label>
                  <input
                    className="w-full bg-cream-white border-0 rounded-2xl px-6 py-3 font-sans text-sm"
                    value={formData.images?.[0]}
                    onChange={(e) => setFormData({ ...formData, images: [e.target.value] })}
                  />
                </div>
                <div className="flex items-center gap-4 py-4">
                   <label className="flex items-center gap-2 cursor-pointer">
                     <input
                       type="checkbox"
                       checked={formData.featured}
                       onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                       className="w-4 h-4 accent-terracotta"
                     />
                     <span className="font-sans text-[10px] uppercase tracking-widest text-ebony-black/60">Destaque</span>
                   </label>
                </div>

                <div className="flex gap-4">
                  <button onClick={handleSave} className="flex-1 btn-primary py-4 text-xs tracking-widest font-bold uppercase">
                    {editingId ? <Save className="w-4 h-4 inline mr-2" /> : <Plus className="w-4 h-4 inline mr-2" />}
                    {editingId ? 'Salvar' : 'Adicionar'}
                  </button>
                  {editingId && (
                    <button onClick={resetForm} className="bg-ebony-black text-white px-6 rounded-full">
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-display text-ebony-black mb-8">Obras Atuais ({products.length})</h2>
            <div className="grid grid-cols-1 gap-6">
              {products.map((p) => (
                <div key={p.id} className="bg-white p-6 rounded-[32px] border border-ebony-black/5 flex flex-col sm:flex-row items-center gap-8 shadow-sm">
                  <div className="w-20 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-cream-white">
                    <img src={p.images[0]} alt={p.name.pt} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                     <h3 className="font-display text-xl">{p.name.pt}</h3>
                     <p className="font-sans text-[10px] text-ebony-black/40 uppercase tracking-widest">{p.artist} • ${p.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => startEdit(p)} className="w-10 h-10 rounded-full bg-cream-white flex items-center justify-center hover:bg-ochre-gold hover:text-white transition-all">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button onClick={() => { if(confirm('Eliminar obra?')) deleteProduct(p.id) }} className="w-10 h-10 rounded-full bg-cream-white flex items-center justify-center hover:bg-terracotta hover:text-white transition-all">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admin;
