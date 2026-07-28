import { useSeo } from '../lib/seo';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

/** Owner-confirmed private hire pricing: duration × time window. */
const SPA_SLOTS = [
  {
    name: 'Dopoldanski termin',
    window: 'med 09.00 in 13.00',
    prices: [
      { duration: '2 uri', price: '70 €' },
      { duration: '3 ure', price: '90 €' }
    ]
  },
  {
    name: 'Popoldanski termin',
    window: 'med 14.00 in 18.00',
    prices: [
      { duration: '2 uri', price: '75 €' },
      { duration: '3 ure', price: '100 €' }
    ]
  },
  {
    name: 'Večerni termin',
    window: 'med 19.00 in 22.00',
    prices: [
      { duration: '2 uri', price: '80 €' },
      { duration: '3 ure', price: '110 €' }
    ]
  }
];

export default function Spa() {
  useSeo(
    'Zasebni wellness & SPA | Pod Slavnikom',
    'Zasebni wellness s savno, parno kopeljo in jacuzzijem — rezerviran samo za vas. Sprostitev ob vznožju Slavnika v Podgorju.',
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
      <section className="px-6 py-20 max-w-7xl mx-auto relative">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
        {/* A 12-track grid pays for 11 gutters, so lg:gap-24 (11 × 96px = 1056px)
            alone exceeded the content box at 1024px and forced the mosaic out of
            the page. The wide gap now starts at xl, where there is room for it,
            leaving the ≥1280px composition unchanged. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-24 items-center">
          <div className="lg:col-span-5 relative z-10 space-y-8">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block font-display">Wellness SPA</span>
            <h1 className="text-4xl md:text-6xl font-serif text-brand-wood leading-tight">
              Zasebno. <br />
              Tiho. <br />
              <span className="italic text-brand-gold font-serif">Samo vaše.</span>
            </h1>
            <div className="w-16 h-[1px] bg-brand-gold"></div>
            <p className="text-brand-stone text-lg leading-relaxed font-serif max-w-md font-light">
              Naš wellness ni javni bazen s tujci. Je zasebni prostor, rezerviran izključno za vas — vašo skupino, vaš par, vašo družino. Ko vstopite, se vrata zaprejo za vami.
            </p>
            <div className="p-6 bg-brand-cream border-l-2 border-brand-gold text-brand-gold-dim font-serif italic rounded-r-3xl luxury-shadow">
              Ekskluzivni zasebni najem, samo za vašo družbo. Trije termini dnevno, 2 ali 3 ure.
            </div>
          </div>

          <div className="lg:col-span-7 relative w-full">
            {/* Mosaic of Images as specified in HTML */}
            <div className="grid grid-cols-2 gap-4 aspect-square max-w-xl mx-auto">
              <div className="row-span-2 rounded-[40px] overflow-hidden luxury-shadow group relative border border-brand-gold/10">
                <img 
                  src="/images/client/wellness/wellness-sauna-01.jpg"
                  className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105" 
                  alt="Finska savna" 
                  referrerPolicy="no-referrer" loading="lazy" decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              <div className="rounded-[40px] overflow-hidden luxury-shadow group relative border border-brand-gold/10">
                <img 
                  src="/images/client/wellness/wellness-steam-cabin-01.jpg"
                  className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105" 
                  alt="Parna kopel" 
                  referrerPolicy="no-referrer" loading="lazy" decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              <div className="rounded-[40px] overflow-hidden luxury-shadow group relative border border-brand-gold/10">
                <img 
                  src="/images/client/wellness/wellness-private-spa-01.jpg"
                  className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105" 
                  alt="Jacuzzi" 
                  referrerPolicy="no-referrer" loading="lazy" decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-brand-wood text-brand-cream py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain-texture"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          <div className="text-center">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-4 font-display">Udobje in oprema</span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-cream">Sprostitev v objemu intimnosti</h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={cardVariants} className="bg-brand-wood-deep/50 border border-brand-gold/15 p-8 rounded-[32px] hover:border-brand-gold/60 hover:bg-brand-wood-deep transition-all duration-500">
              <span className="text-3xl mb-4 block">🔥</span>
              <h3 className="font-serif text-xl text-brand-gold-light mb-2">Finska savna</h3>
              <p className="text-brand-cream/60 text-sm leading-relaxed font-sans">Suha toplota do 90°C</p>
            </motion.div>
            <motion.div variants={cardVariants} className="bg-brand-wood-deep/50 border border-brand-gold/15 p-8 rounded-[32px] hover:border-brand-gold/60 hover:bg-brand-wood-deep transition-all duration-500">
              <span className="text-3xl mb-4 block">💧</span>
              <h3 className="font-serif text-xl text-brand-gold-light mb-2">Parna kopel</h3>
              <p className="text-brand-cream/60 text-sm leading-relaxed font-sans">Vlažna para z eteričnimi olji</p>
            </motion.div>
            <motion.div variants={cardVariants} className="bg-brand-wood-deep/50 border border-brand-gold/15 p-8 rounded-[32px] hover:border-brand-gold/60 hover:bg-brand-wood-deep transition-all duration-500">
              <span className="text-3xl mb-4 block">🛁</span>
              <h3 className="font-serif text-xl text-brand-gold-light mb-2">Jacuzzi</h3>
              <p className="text-brand-cream/60 text-sm leading-relaxed font-sans">Vroča voda, masažni curki</p>
            </motion.div>
            <motion.div variants={cardVariants} className="bg-brand-wood-deep/50 border border-brand-gold/15 p-8 rounded-[32px] hover:border-brand-gold/60 hover:bg-brand-wood-deep transition-all duration-500">
              <span className="text-3xl mb-4 block">🛏</span>
              <h3 className="font-serif text-xl text-brand-gold-light mb-2">Grelni ležalniki</h3>
              <p className="text-brand-cream/60 text-sm leading-relaxed font-sans">Počitek po savni. Topli, tihi.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing — private hire by duration and time window */}
      <section className="py-24 px-6 max-w-5xl mx-auto relative">
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="text-center mb-16">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-4 font-display">Cenik zakupa</span>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-wood">Ekskluzivni zasebni najem</h2>
          <p className="text-brand-stone text-sm md:text-base font-sans mt-6 max-w-xl mx-auto leading-relaxed">
            Wellness lahko rezervirate za 2 ali 3 ure. Cena je odvisna od termina, ki ga izberete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {SPA_SLOTS.map((slot) => (
            <div
              key={slot.name}
              className="bg-white p-8 rounded-[40px] border border-brand-gold/15 luxury-shadow hover:border-brand-gold/40 transition-all duration-500 flex flex-col"
            >
              <div className="text-center pb-6 border-b border-brand-gold/15">
                <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold font-display block">
                  {slot.name}
                </span>
                <p className="font-serif text-lg text-brand-wood mt-2 whitespace-nowrap">
                  {slot.window}
                </p>
              </div>

              <dl className="pt-6 space-y-4">
                {slot.prices.map((row) => (
                  <div
                    key={row.duration}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <dt className="font-display text-[11px] uppercase tracking-[0.18em] font-bold text-brand-stone">
                      {row.duration}
                    </dt>
                    <dd className="font-serif text-2xl md:text-3xl text-brand-wood font-black leading-none whitespace-nowrap">
                      {row.price}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <div className="mt-8 relative z-10 rounded-[32px] border border-dashed border-brand-gold/40 bg-brand-cream-soft/70 px-8 py-6 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold font-display block mb-1">
              Dodatna možnost
            </span>
            <p className="font-serif text-lg text-brand-wood">Penina in prigrizek</p>
          </div>
          <span className="font-serif text-2xl text-brand-wood font-black leading-none whitespace-nowrap ml-auto">
            40 €
          </span>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 px-6 bg-brand-cream-soft text-center border-t border-brand-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain-texture"></div>
        <div className="max-w-2xl mx-auto space-y-8 relative z-10">
          <div className="p-8 md:p-12 border border-dashed border-brand-gold bg-white rounded-[40px] luxury-shadow">
            <h3 className="font-serif text-2xl text-brand-wood mb-2">Rezervacija termina</h3>
            <p className="text-brand-stone text-sm font-sans">Pokličite nas in skupaj izberemo datum ter termin.</p>
            <div className="mt-6">
              <a
                href="tel:+38641321379"
                className="inline-flex bg-brand-wood text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest font-display hover:bg-brand-gold hover:text-brand-wood transition-colors duration-500 shadow-lg"
              >
                Preveri razpoložljivost: +386 41 321 379
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
