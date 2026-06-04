import HeroSection from '../components/HeroSection';
import ArtMarquee from '../components/ArtMarquee';
import FeaturedProducts from '../components/FeaturedProducts';
import CategoriesSection from '../components/CategoriesSection';
import InteractiveArtPartner from '../components/InteractiveArtPartner';
import BottomPillNav from '../components/BottomPillNav';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="bg-ebony-black">
      <HeroSection />

      <div className="bg-white">
        <ArtMarquee />
        <FeaturedProducts />
        <CategoriesSection />
        <InteractiveArtPartner />
      </div>

      {/* Custom Footer for Home */}
      <footer className="bg-ebony-black px-6 py-24">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-t border-white/10 pt-12">
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-white tracking-widest uppercase">Ekton Afrik Arts</h3>
            <p className="text-white/40 font-sans text-sm">{t('footer.tagline')}</p>
            <a
              href="https://wa.me/244934859497"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-terracotta text-white rounded-full px-7 py-3 transition-all hover:bg-ochre-gold mt-4"
            >
              {t('studio.cta_chat')}
            </a>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-mono uppercase text-white/30 mb-2">Explore</h4>
              <a href="/shop" className="text-base text-white/70 hover:text-white transition-all">{t('nav.shop')}</a>
              <a href="/about" className="text-base text-white/70 hover:text-white transition-all">{t('nav.about')}</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-mono uppercase text-white/30 mb-2">Social</h4>
              <a href="#" className="flex items-center gap-1 text-base text-white/70 hover:text-white transition-all">
                Instagram <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#" className="flex items-center gap-1 text-base text-white/70 hover:text-white transition-all">
                LinkedIn <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mt-24 text-[10px] text-white/20 uppercase tracking-widest font-mono">
          <p>{t('footer.rights')}</p>
          <p>{t('footer.made_in')}</p>
        </div>
      </footer>

      <BottomPillNav />
    </div>
  );
}
