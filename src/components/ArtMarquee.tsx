import art1 from '../assets/art1.jpg';
import art2 from '../assets/art2.jpg';
import art3 from '../assets/art3.jpg';
import market1 from '../assets/market1.jpg';
import market_sign from '../assets/market_sign.jpg';
import fortress from '../assets/fortress.webp';
import curio_shop from '../assets/curio_shop.jpg';
import mask_ritual from '../assets/mask_ritual.jpg';

const IMAGES = [
  art1, art2, art3,
  market1, market_sign, fortress,
  curio_shop, mask_ritual
];

export default function ArtMarquee() {
  return (
    <section className="w-full overflow-hidden my-16 md:my-20">
      <div className="animate-marquee flex">
        {[...IMAGES, ...IMAGES].map((src, i) => (
          <div key={i} className="flex-shrink-0 mx-3">
            <img
              src={src}
              alt={`Art ${i}`}
              className="h-[280px] md:h-[500px] w-auto object-cover rounded-2xl shadow-float"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
