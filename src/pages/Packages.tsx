import { useSeo } from '../lib/seo';
import { motion } from 'motion/react';
import { Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const packageList = [
  {
    name: 'Vikend Relax',
    badge: 'Vikend Relax',
    image: '/images/client/wellness/wellness-private-spa-01.jpg',
    tagline: 'Telo se ustavi prej kot misli.',
    sub: 'Dva dni brez ur',
    price: '350€',
    priceLabel: '2 noči · za 2',
    features: [
      '2 noči v izbrani sobi z zajtrkom',
      'Večerja: meni Gozdna pojedina',
      'Zasebni wellness'
    ],
    featured: false
  },
  {
    name: 'Vikend & SPA',
    badge: 'Najbolj iskan',
    image: '/images/client/wellness/wellness-sauna-01.jpg',
    tagline: 'Vikend, ki diši po gozdu in pari.',
    sub: 'Smreka in para',
    price: '280€',
    priceLabel: '2 noči · za 2',
    features: [
      '2 noči v izbrani sobi z zajtrkom',
      'Zasebni wellness (savna, parna kopel, jacuzzi)',
      'Mir, rezerviran samo za vaju'
    ],
    featured: true
  },
  {
    name: 'Divja eleganca',
    badge: 'Divja eleganca',
    image: '/images/client/restaurant/restaurant-food-03.jpg',
    tagline: 'Ena noč in divjačina, kakršne drugje ne najdeš.',
    sub: 'Divja eleganca',
    price: '200€',
    priceLabel: '1 noč · za 2',
    features: [
      '1 noč v izbrani sobi z zajtrkom',
      'Večerja: meni Divja eleganca'
    ],
    featured: false
  },
  {
    name: 'Medvedja večerja',
    badge: '🐻 Enkrat na leto',
    image: '/images/client/restaurant/restaurant-interior-01.jpg',
    tagline: 'Edinstven kulinarični ritual v kamniti kleti.',
    sub: 'La Cena dell\'Orso',
    price: 'Na povpraševanje',
    priceLabel: 'Sezonsko',
    features: [
      '1 noč v izbrani sobi z zajtrkom',
      'Mesto pri Medvedji večerji (sezonsko, omejeno)',
      'Rezervacija obvezna vnaprej'
    ],
    featured: false
  }
];

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
          Sobo, savno, večerjo, gozd. Tri kombinacije, ki imajo smisel. Vsaka prilagojena za drugačno priložnost.
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
              className={`flex flex-col h-full bg-white rounded-[40px] overflow-hidden border transition-all duration-500 luxury-shadow group relative ${
                pkg.featured 
                  ? 'border-brand-gold border-2 lg:-translate-y-4' 
                  : 'border-brand-gold/10 hover:border-brand-gold/40'
              }`}
            >
              {pkg.featured && pkg.badge !== pkg.name && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-wood text-[8px] uppercase tracking-[0.25em] font-bold py-1.5 px-4 rounded-full z-20 shadow-md flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5" /> {pkg.badge}
                </div>
              )}

              {/* Card Image */}
              <div className="aspect-[16/11] w-full overflow-hidden relative bg-brand-bark">
                <img 
                  src={pkg.image} 
                  className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105" 
                  alt={pkg.name} 
                  referrerPolicy="no-referrer" loading="lazy" decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                {!pkg.featured && pkg.badge !== pkg.name && (
                  <span className="absolute top-6 left-6 text-[9px] uppercase tracking-[0.2em] font-bold py-2 px-5 rounded-full shadow-lg bg-brand-wood text-brand-gold">
                    {pkg.badge}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col justify-between space-y-8">
                <div className="space-y-4 flex-grow">
                  {pkg.sub !== pkg.name && (
                    <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold italic block font-serif">
                      {pkg.sub}
                    </span>
                  )}
                  <h3 className="font-serif text-2xl text-brand-wood font-bold">{pkg.name}</h3>
                  <p className="text-brand-gold-dim text-sm italic font-serif leading-relaxed">{pkg.tagline}</p>
                  
                  <ul className="space-y-3 pt-4 border-t border-brand-gold/10 flex-grow">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-brand-stone text-xs leading-relaxed flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="pt-6 border-t border-brand-gold/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="min-w-0">
                    <span className="text-[8px] uppercase tracking-widest text-brand-stone font-bold font-display block">
                      {pkg.priceLabel}
                    </span>
                    <span className="font-serif text-2xl text-brand-wood font-black leading-none">
                      {pkg.price}
                    </span>
                  </div>
                  <Link
                    to="/kontakt"
                    className="shrink-0 px-5 py-3 bg-brand-wood text-white rounded-full font-bold uppercase tracking-widest text-[9px] hover:bg-brand-gold hover:text-brand-wood transition-colors font-display shadow-sm"
                  >
                    Rezerviraj
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
}
