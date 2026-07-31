import { useSeo } from '../lib/seo';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BadgeInfo } from 'lucide-react';

const roomList = [
  {
    slug: 'enoposteljna-soba-5',
    name: 'Enoposteljna soba 5 (1+0)',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80',
    tag: 'Enoposteljna',
    meta: '1 oseba · 1+0',
    desc: 'Udobna in mirna enoposteljna soba (Soba 5), opremljena z naravnimi materiali. Popolna izbira za samostojne popotnike in hribolazce.',
    amenities: ['📶 WiFi', '🚿 Tuš', '❄️ Klima', '🌲 Pogled']
  },
  {
    slug: 'dvoposteljna-soba',
    name: 'Dvoposteljna soba 1, 2, 3, 4 (2+0)',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=900&q=80',
    tag: 'Dvoposteljna',
    meta: '2 osebi · 2+0',
    desc: 'Prijetne dvoposteljne sobe (Sobe 1, 2, 3, 4) s toplim lesenim pohištvom. Ponujajo vso potrebno udobje za sproščen oddih pod Slavnikom.',
    amenities: ['📶 WiFi', '🚿 Tuš', '❄️ Klima', '🌲 Pogled']
  },
  {
    slug: 'podstresna-suite',
    name: 'Studio s prosto stoječo kadjo',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&q=80',
    tag: 'Ekskluzivno',
    meta: '2 osebi · Studio',
    desc: 'Čudovit in romantičen studio, katerega osrednji del je prosto stoječa kad za vrhunsko sprostitev. Popolno gnezdo za nepozabne trenutke.',
    amenities: ['📶 WiFi', '🛁 Prosto stoječa kad', '🌿 Balkon', '❄️ Klima']
  }
];

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

export default function Rooms() {
  useSeo(
    'Sobe & prenočišča | Pod Slavnikom',
    'Udobne sobe in studio ob vznožju Slavnika v Podgorju. Preverite razpoložljivost in rezervirajte neposredno prek sistema Bentral.',
  );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-32"
    >
      {/* Rooms Header with Rating */}
      <section className="px-6 py-12 max-w-7xl mx-auto border-b border-brand-wood/10 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 pb-12">
          <div className="max-w-3xl space-y-6">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block font-display">Nastanitev</span>
            <h1 className="text-4xl md:text-6xl font-serif text-brand-wood leading-tight">
              Soba, ki je ne boš <br />
              <span className="italic text-brand-gold">zapustil hitro.</span>
            </h1>
            <p className="text-brand-stone text-lg leading-relaxed font-serif font-light">
              Naše sobe ponujajo udobno kraško-alpsko zavetje. Les, kamen, naravni materiali. Pogled na borov gozd ali na urejen gorski vrt.
            </p>
          </div>
          <div className="p-8 bg-white border border-brand-gold/15 rounded-3xl text-center min-w-[240px] luxury-shadow font-sans">
            <div className="flex justify-center gap-1 text-brand-gold mb-3 text-lg">
              ★ ★ ★ ★ ★
            </div>
            <div className="text-4xl font-serif text-brand-wood font-black leading-none mb-2">
              9.1<span className="text-sm text-brand-gold">/10</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-brand-stone font-bold font-display">Booking.com · 150+ ocen</p>
          </div>
        </div>
      </section>

      {/* Rooms List Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {roomList.map((room, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.4 } }}
              className="bg-white rounded-[40px] overflow-hidden border border-brand-gold/10 luxury-shadow hover:border-brand-gold/30 transition-all duration-500 flex flex-col h-full group relative"
            >
              <Link to={`/sobe/${room.slug}`} className="aspect-[4/3] w-full overflow-hidden relative bg-brand-bark block">
                <img 
                  src={room.image} 
                  className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105" 
                  alt={room.name} 
                  referrerPolicy="no-referrer" loading="lazy" decoding="async"
                />
                <span className="absolute top-6 left-6 bg-brand-gold text-brand-wood text-[9px] uppercase tracking-[0.2em] font-bold py-2 px-5 rounded-full shadow-lg z-10">
                  {room.tag}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </Link>
              <div className="p-8 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <Link to={`/sobe/${room.slug}`}>
                    <h3 className="font-serif text-2xl text-brand-wood font-bold group-hover:text-brand-gold transition-colors">{room.name}</h3>
                  </Link>
                  <p className="text-[10px] font-display font-bold uppercase tracking-wider text-brand-gold">{room.meta}</p>
                  <p className="text-brand-stone text-sm leading-relaxed font-sans">{room.desc}</p>
                </div>
                <div className="pt-6 border-t border-brand-gold/10 flex flex-col space-y-6">
                  <div className="flex flex-wrap gap-4 text-xs font-bold text-brand-wood-deep">
                    {room.amenities.map((item, id) => (
                      <span key={id} className="flex items-center gap-1.5">{item}</span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link 
                      to={`/sobe/${room.slug}`}
                      className="w-full bg-brand-wood text-brand-cream py-3.5 px-6 rounded-full text-[11px] font-bold uppercase tracking-widest font-display hover:bg-brand-gold hover:text-brand-wood transition-all duration-300 text-center flex items-center justify-center"
                    >
                      Podrobnosti & Rezervacija
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Direct Booking Callout */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-brand-wood text-brand-cream p-12 md:p-16 rounded-[60px] relative overflow-hidden border border-brand-gold/20 luxury-shadow">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-3xl md:text-4xl font-serif text-brand-cream">
                Rezervirajte <br />
                <span className="italic text-brand-gold">neposredno pri nas.</span>
              </h3>
              <p className="text-brand-cream/80 text-sm max-w-xl">
                Z rezervacijo prek našega sistema Bentral se dogovorite neposredno z gostiščem Pod Slavnikom. Aktualne cene in razpoložljivost so prikazane v rezervacijskem sistemu, pogoji odpovedi in plačila pa ob rezervaciji.
              </p>
              <div className="flex items-center gap-2 pt-4 font-sans">
                <BadgeInfo className="w-4 h-4 text-brand-gold-light" />
                <span className="text-[11px] uppercase tracking-wider text-brand-cream/50">Razpoložljivost in proste termine preverite <Link to="/sobe/dvoposteljna-soba#rezervacija" className="underline text-brand-gold hover:text-brand-gold-light">neposredno prek sistema Bentral ↗</Link></span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-dashed border-brand-gold/40 bg-brand-wood-deep/50 p-8 rounded-3xl text-center space-y-4">
                <span className="text-brand-gold text-[9px] uppercase tracking-[0.25em] font-bold block">Bentral · Direktna rezervacija</span>
                <strong className="text-brand-gold-light font-serif text-lg font-light block">Brezplačne informacije & podpora</strong>
                <p className="text-brand-cream/50 text-xs font-sans">Izberite poljubno sobo zgoraj in preverite proste termine v nekaj sekundah.</p>
                <div className="pt-4">
                  <a 
                    href="tel:+38641321379" 
                    className="inline-block bg-brand-gold text-brand-wood px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest font-display hover:bg-brand-gold-light transition-colors"
                  >
                    Pokliči: +386 41 321 379
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
