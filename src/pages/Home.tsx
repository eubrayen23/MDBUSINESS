import StudioHero from '../components/StudioHero';
import ArtMarquee from '../components/ArtMarquee';
import FounderQuote from '../components/FounderQuote';
import ServicePricing from '../components/ServicePricing';
import ArtCarousel from '../components/ArtCarousel';
import CollectionShowcase from '../components/CollectionShowcase';
import InteractiveArtPartner from '../components/InteractiveArtPartner';
import BottomPillNav from '../components/BottomPillNav';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      <StudioHero />
      <ArtMarquee />
      <FounderQuote />
      <ServicePricing />
      <ArtCarousel />
      <CollectionShowcase />
      <InteractiveArtPartner />

      {/* Custom Footer for Home */}
      <footer className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-t border-studio-accent/10 pt-12">
          <div>
            <a
              href="https://wa.me/244934859497"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-studio-primary"
            >
              {t('studio.cta_chat')}
            </a>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-mono uppercase text-studio-muted mb-2">Studio</h4>
              <a href="/shop" className="text-base text-studio-dark hover:opacity-70 transition-opacity">{t('nav.shop')}</a>
              <a href="/about" className="text-base text-studio-dark hover:opacity-70 transition-opacity">{t('nav.about')}</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-mono uppercase text-studio-muted mb-2">Social</h4>
              <a href="#" className="flex items-center gap-1 text-base text-studio-dark hover:opacity-70 transition-opacity">
                Instagram <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#" className="flex items-center gap-1 text-base text-studio-dark hover:opacity-70 transition-opacity">
                LinkedIn <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-24 text-sm text-studio-muted">
          <p>Ekton Afrik Arts Studio Limited</p>
          <p>Luanda, Angola 🇦🇴</p>
        </div>
      </footer>

      <BottomPillNav />
    </div>
  );
}
