import { motion } from 'motion/react';
import { Gift, Heart, Coffee, Star, ShoppingBag, ArrowRight } from 'lucide-react';

const vouchers = [
  {
    title: 'Kulinarično doživetje',
    type: 'Veerja s 4 hodi',
    price: '45 €',
    desc: 'Najboljše iz naše kuhinje v štirih dejanjih. Primerno za rojstne dneve in obletnice.',
    icon: Coffee,
    color: 'bg-orange-50'
  },
  {
    title: 'SPA Dan za dva',
    type: '3-urna privatna sprostitev',
    price: '80 €',
    desc: 'Podarite mir. Paket vključuje savno, jacuzzi, penino in sadje v popolni intimi.',
    icon: Star,
    color: 'bg-blue-50'
  },
  {
    title: 'Gourmet vikend paket',
    type: 'Nočitev + večerja + SPA',
    price: '185 €',
    desc: 'Popoln vikend oddih. Vključuje nočitev v sobi št. 6, kulinarično razvajanje in SPA.',
    icon: Heart,
    color: 'bg-rose-50'
  },
  {
    title: 'Darilni bon poljubne vrednosti',
    type: 'Vrednostni bon',
    price: 'od 20 €',
    desc: 'Naj si obdarovanec sam izbere svojo najljubšo izkušnjo pri nas.',
    icon: Gift,
    color: 'bg-brand-warm-gray'
  }
];

export default function Packages() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <section className="px-6 mb-32 max-w-[1400px] mx-auto text-center overflow-hidden">
        <div className="relative py-20">
          <span className="text-brand-gold uppercase tracking-[0.6em] text-[9px] font-bold block mb-10 font-display">Darilo doživetij</span>
          <h1 className="text-6xl md:text-[90px] font-serif mb-12 max-w-5xl mx-auto leading-[0.85] tracking-tighter italic">Podarite spomine, ki <br/> ostanejo.</h1>
          <div className="w-20 h-[1px] bg-brand-gold mx-auto mb-12"></div>
          <p className="text-brand-stone text-xl max-w-2xl mx-auto leading-relaxed font-serif italic">
            Iščete popolno darilo za svoje bližnje, prijatelje ali poslovne partnerje? Izberite enega izmed naših butičnih paketov ali vrednostni bon poljubne vrednosti.
          </p>
        </div>
      </section>

      {/* Vouchers Grid - Refined Layout */}
      <section className="px-6 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
        {vouchers.map((voucher, idx) => (
          <motion.div 
            key={voucher.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-brand-warm-gray/50 rounded-[60px] p-10 md:p-16 flex flex-col lg:flex-row gap-12 items-center border border-brand-wood/5 hover:bg-white hover:scale-[1.02] transition-all duration-700 luxury-shadow"
          >
            <div className="w-28 h-28 bg-white rounded-[40px] flex items-center justify-center shrink-0 shadow-xl border border-brand-wood/5 group-hover:rotate-6 transition-transform duration-700">
              <voucher.icon className="w-10 h-10 text-brand-gold" />
            </div>
            <div className="flex-grow text-center lg:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
                <div>
                  <span className="text-brand-gold text-[9px] uppercase tracking-widest font-black block mb-2 font-display">{voucher.type}</span>
                  <h3 className="text-3xl font-serif tracking-tight">{voucher.title}</h3>
                </div>
                <span className="text-4xl font-serif text-brand-wood italic">{voucher.price}</span>
              </div>
              <p className="text-brand-stone text-base mb-10 leading-relaxed font-light font-serif italic">
                {voucher.desc}
              </p>
              <button className="inline-flex items-center gap-4 bg-brand-wood text-white px-10 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold font-display hover:bg-brand-gold hover:scale-105 transition-all duration-500 shadow-2xl">
                Izberite bon <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Custom Packages - Editorial Finish */}
      <section className="bg-brand-wood text-brand-cream py-48 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <div>
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-10 font-display">Dogodki po meri</span>
            <h2 className="text-6xl md:text-8xl font-serif mb-12 text-white leading-[0.85] tracking-tight italic">Paket, ustvarjen <br/> samo za vas.</h2>
            <p className="text-brand-cream/50 text-xl mb-16 leading-relaxed font-serif max-w-lg">
              Načrtujete poseben dogodek, praznovanje ali team building? Z veseljem bomo pripravili ponudbo, ki bo vključevala kulinarične užitke, nastanitev in SPA po vaših željah.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              {[
                { t: 'Individualen pristop', d: 'Vsak detajl dogodka prilagodimo.' },
                { t: 'Unikaten meni', d: 'Kuhinja, ki sledi vašim željam.' },
                { t: 'Popolna zasebnost', d: 'Možnost ekskluzivnega najema.' },
                { t: 'Prenočišče & SPA', d: 'Brezskrbno bivanje za vse.' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                   <h4 className="text-brand-gold font-bold font-display uppercase tracking-widest text-xs">{item.t}</h4>
                   <p className="text-sm text-brand-cream/40 font-light">{item.d}</p>
                </div>
              ))}
            </div>
            <button className="bg-brand-gold text-brand-wood px-14 py-6 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold font-display hover:bg-white hover:scale-105 transition-all duration-500 luxury-shadow">Pošljite povpraševanje</button>
          </div>
          <div className="relative group">
            <div className="rounded-[100px] overflow-hidden aspect-square lg:aspect-[4/5] shadow-2xl relative border-8 border-white/5">
              <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/715205411.jpg" className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110" alt="Darilo" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-wood/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-48 h-48 bg-brand-gold rounded-full luxury-shadow flex items-center justify-center p-8 text-brand-wood text-center shadow-2xl skew-x-3 hidden md:flex border-4 border-brand-wood/10 animate-pulse-slow">
               <span className="text-[10px] uppercase font-black tracking-widest leading-tight font-display">Najboljše iz Slovenije</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - Visual Steps */}
      <section className="py-48 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-32">
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-4 font-display">Enostavno</span>
          <h2 className="text-6xl font-serif tracking-tight italic">Kako do darila?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-center">
          {[
            { n: '01', t: 'Izberite doživetje', d: 'Prebrskajte naše butične pakete ali izberite poljubno vrednost bona.' },
            { n: '02', t: 'Osebna nota', d: 'Dodajte svoje podatke in poljubno osebno posvetilo obdarovancu.' },
            { n: '03', t: 'Takojšen prejem', d: 'Po varnem plačilu bon prejmete v PDF obliki na vaš e-naslov.' }
          ].map((item, i) => (
            <div key={i} className="group flex flex-col items-center">
               <span className="font-serif text-8xl text-brand-gold/10 mb-10 group-hover:text-brand-gold/30 transition-colors duration-700">{item.n}</span>
               <h4 className="text-2xl font-serif mb-6 italic tracking-tight">{item.t}</h4>
               <div className="w-12 h-[1px] bg-brand-gold/30 mb-8 mx-auto group-hover:w-20 transition-all"></div>
               <p className="text-brand-stone text-base leading-relaxed font-light max-w-xs">{item.d}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
