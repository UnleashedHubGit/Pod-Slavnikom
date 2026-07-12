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

export default function Spa() {
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 relative z-10 space-y-8">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block font-display">Wellness SPA</span>
            <h1 className="text-4xl md:text-6xl font-serif text-brand-wood leading-tight">
              Zasebno. <br />
              Tiho. <br />
              <span className="italic text-brand-gold font-serif">Samo vaše.</span>
            </h1>
            <div className="w-16 h-[1px] bg-brand-gold"></div>
            <p className="text-brand-stone text-lg leading-relaxed font-serif max-w-md italic font-light">
              Naš wellness ni javni bazen s tujci. Je zasebni prostor, rezerviran izključno za vas — vašo skupino, vaš par, vašo družino. Ko vstopite, se vrata zaprejo za vami.
            </p>
            <div className="p-6 bg-brand-cream border-l-2 border-brand-gold text-brand-gold-dim font-serif italic rounded-r-3xl luxury-shadow">
              Ekskluzivno zasebno — samo vaša skupina. 3 termini dnevno.
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
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              <div className="rounded-[40px] overflow-hidden luxury-shadow group relative border border-brand-gold/10">
                <img 
                  src="/images/client/wellness/wellness-steam-cabin-01.jpg"
                  className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105" 
                  alt="Parna kopel" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              <div className="rounded-[40px] overflow-hidden luxury-shadow group relative border border-brand-gold/10">
                <img 
                  src="/images/client/wellness/wellness-private-spa-01.jpg"
                  className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105" 
                  alt="Jacuzzi" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-brand-wood text-brand-cream py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
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

      {/* Pricing Options */}
      <section className="py-24 px-6 max-w-5xl mx-auto relative">
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="text-center mb-16">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-4 font-display">Cenik zakupa</span>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-wood">Izberite svoj wellness odklop</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto relative z-10">
          {/* Osnovni */}
          <div className="bg-white p-10 rounded-[40px] border border-brand-gold/15 text-center space-y-6 luxury-shadow hover:scale-[1.02] hover:border-brand-gold/30 transition-all duration-500">
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold font-display block">Osnovni paket</span>
            <div className="font-serif text-5xl text-brand-wood font-black">
              80€
            </div>
            <p className="text-brand-stone text-sm font-sans">2 uri • Ekskluzivno zasebno za vas</p>
          </div>

          {/* Premium */}
          <div className="bg-brand-cream-soft p-10 rounded-[40px] border-2 border-brand-gold text-center space-y-6 luxury-shadow relative hover:scale-[1.02] hover:bg-white transition-all duration-500">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-wood text-[9px] uppercase tracking-[0.25em] font-bold py-2 px-6 rounded-full">
              Najpogosteje izbrano
            </div>
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold font-display block pt-2">Premium paket</span>
            <div className="font-serif text-5xl text-brand-wood font-black">
              150€
            </div>
            <p className="text-brand-stone text-sm font-sans">3 ure • Ekskluzivno zasebno za vas</p>
          </div>
        </div>
      </section>

      {/* Booking CTA and Cancellation Policy */}
      <section className="py-20 px-6 bg-brand-cream-soft text-center border-t border-brand-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        <div className="max-w-2xl mx-auto space-y-8 relative z-10">
          <div className="p-8 md:p-12 border border-dashed border-brand-gold bg-white rounded-[40px] luxury-shadow">
            <h3 className="font-serif text-2xl text-brand-wood mb-2">Rezervacija termina online</h3>
            <p className="text-brand-stone text-sm font-sans">Izberi datum + termin • Vse cene in možnosti v rezervaciji</p>
            <div className="mt-6">
              <a 
                href="tel:+38641321379" 
                className="inline-flex bg-brand-wood text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest font-display hover:bg-brand-gold hover:text-brand-wood transition-colors duration-500 shadow-lg"
              >
                Preveri razpoložljivost: +386 41 321 379
              </a>
            </div>
          </div>
          <p className="text-xs text-brand-stone italic font-sans">
            Brezplačna odpoved do 24h pred terminom. Po 24h: 50% povračilo.
          </p>
        </div>
      </section>
    </motion.div>
  );
}
