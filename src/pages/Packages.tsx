import { useSeo } from '../lib/seo';
import { motion } from 'motion/react';
import { Check, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Owner-confirmed packages. Prices marked "Na povpraševanje" are the ones the
 * owner has not yet confirmed — no older, unverified price is carried over.
 */
const packageList = [
  {
    name: 'Vikend Relax',
    secondaryName: null,
    image: '/images/client/wellness/wellness-private-spa-01.jpg',
    tagline: 'Telo se ustavi prej, kot misli.',
    sub: 'Dva dni brez ur',
    price: 'Na povpraševanje',
    priceLabel: '2 noči',
    features: [
      '2 noči v izbrani sobi z zajtrkom',
      '1 × večerja: meni Gozdna pojedina za 2 osebi',
      '1 × najem zasebnega wellnessa za 3 ure'
    ]
  },
  {
    name: 'Vikend & SPA',
    secondaryName: null,
    image: '/images/client/wellness/wellness-sauna-01.jpg',
    tagline: 'Vikend, ki diši po gozdu in pari.',
    sub: 'Smreka in para',
    price: 'Na povpraševanje',
    priceLabel: '2 noči',
    features: [
      '2 noči v izbrani sobi z zajtrkom',
      '1 × najem zasebnega wellnessa za 3 ure',
      'Mir, rezerviran samo za vaju'
    ]
  },
  {
    name: 'Divja eleganca',
    secondaryName: null,
    image: '/images/client/restaurant/restaurant-food-03.jpg',
    tagline: 'Ena noč in divjačina, kakršne drugje ne najdeš.',
    sub: null,
    price: '180 €',
    priceLabel: '1 noč',
    features: [
      '1 noč v izbrani sobi z zajtrkom',
      '1 × večerja: meni Divja eleganca za 2 osebi'
    ]
  },
  {
    name: 'Medvedja večerja',
    secondaryName: 'La Cena dell’Orso',
    image: '/images/client/restaurant/restaurant-interior-01.jpg',
    tagline: 'Edinstven kulinarični ritual.',
    sub: null,
    price: '190 €',
    priceLabel: '1 noč',
    features: [
      '1 noč v izbrani sobi z zajtrkom',
      '1 × večerja: Medved v objemu gastronomije za 2 osebi'
    ]
  }
];

const TOURIST_TAX_NOTE =
  'Turistična taksa ni vključena in se obračuna posebej v višini 2,50 € na osebo na noč.';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Packages() {
  useSeo(
    'Paketi & doživetja | Pod Slavnikom',
    'Doživljajski paketi z nastanitvijo, wellnessom in kulinariko — Vikend Relax, Vikend & SPA, Divja eleganca in Medvedja večerja.',
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-32"
    >
      {/* Intro Header */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center space-y-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none"></div>
        <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block font-display">Paketi &amp; doživetja</span>
        <h1 className="text-4xl md:text-6xl font-serif text-brand-wood leading-tight">
          Združimo vse, kar je <br />
          <span className="italic text-brand-gold font-serif">najlepše.</span>
        </h1>
        <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
        <p className="text-brand-stone text-xl leading-relaxed font-serif font-light max-w-2xl mx-auto">
          Sobo, savno, večerjo, gozd. Štiri kombinacije, ki imajo smisel. Vsaka prilagojena za drugačno priložnost.
        </p>
      </section>

      {/* Grid of Packages */}
      <section className="py-16 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
        >
          {packageList.map((pkg, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.4 } }}
              className="flex flex-col h-full bg-white rounded-[40px] overflow-hidden border border-brand-gold/10 hover:border-brand-gold/40 transition-all duration-500 luxury-shadow group relative"
            >
              {/* Card Image */}
              <div className="aspect-[16/11] w-full overflow-hidden relative bg-brand-bark">
                <img
                  src={pkg.image}
                  className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105"
                  alt={pkg.name}
                  referrerPolicy="no-referrer" loading="lazy" decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col justify-between gap-8">
                <div className="space-y-4 flex-grow">
                  {pkg.sub && (
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold italic block font-serif">
                      {pkg.sub}
                    </span>
                  )}
                  <div>
                    <h3 className="font-serif text-2xl text-brand-wood font-bold leading-tight">{pkg.name}</h3>
                    {pkg.secondaryName && (
                      <span className="block mt-1.5 font-serif italic text-sm text-brand-gold-dim">
                        {pkg.secondaryName}
                      </span>
                    )}
                  </div>
                  <p className="text-brand-gold-dim text-sm italic font-serif leading-relaxed">{pkg.tagline}</p>

                  <ul className="space-y-3 pt-4 border-t border-brand-gold/10">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-brand-stone text-xs leading-relaxed flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                {/* Uniform footer: price above a full-width CTA, so every card in
                    the row ends on the same rhythm regardless of price length. */}
                <div className="pt-6 border-t border-brand-gold/10 space-y-4">
                  <div className="min-w-0">
                    <span className="text-[8px] uppercase tracking-widest text-brand-stone font-bold font-display block mb-1">
                      {pkg.priceLabel}
                    </span>
                    <span className="font-serif text-xl md:text-2xl text-brand-wood font-black leading-tight block">
                      {pkg.price}
                    </span>
                  </div>
                  <Link
                    to="/kontakt"
                    className="block w-full text-center px-5 py-3.5 bg-brand-wood text-white rounded-full font-bold uppercase tracking-widest text-[9px] hover:bg-brand-gold hover:text-brand-wood transition-colors font-display shadow-sm"
                  >
                    Povpraševanje
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-12 max-w-3xl mx-auto flex items-start gap-3 text-xs md:text-sm text-brand-stone leading-relaxed font-sans">
          <Info className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
          <span>{TOURIST_TAX_NOTE}</span>
        </p>
      </section>
    </motion.div>
  );
}
