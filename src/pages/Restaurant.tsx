import { motion } from 'motion/react';
import { ChefHat, ArrowRight, Heart, Sparkles } from 'lucide-react';

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

export default function Restaurant() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-32"
    >
      {/* Intro Hero Section */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center space-y-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-brand-gold/5 blur-[90px] rounded-full pointer-events-none"></div>
        <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block font-display">Kulinarika</span>
        <h1 className="text-4xl md:text-6xl font-serif text-brand-wood leading-tight">
          Hrana, ki ve, <br />
          <span className="italic text-brand-gold font-serif">od kod prihaja.</span>
        </h1>
        <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
        <p className="text-brand-stone text-xl leading-relaxed font-serif max-w-2xl mx-auto italic font-light">
          V naši kuhinji ni skrivnosti. Meso pride iz gozda, ki ga vidiš skozi okno. Zelišča iz vrta za hišo. Ravioli so narejeni z rokami — in ko jih dobiš na mizo, to čutiš.
        </p>
      </section>

      {/* Grid: Meso & Ravioli */}
      <section className="py-24 bg-brand-cream-soft border-y border-brand-gold/10 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-6 space-y-32"
        >
          
          {/* Section 1: Meso iz slovenskih gozdov */}
          <motion.div variants={cardVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <span className="font-serif text-brand-gold text-sm italic tracking-widest">— 01</span>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-wood leading-tight">
                Meso iz <span className="italic text-brand-gold font-serif">slovenskih gozdov.</span> <br />
                Kilometer nič.
              </h2>
              <div className="w-12 h-[1px] bg-brand-gold"></div>
              <p className="text-brand-stone leading-relaxed text-base">
                Divjačina v naši kuhinji ni specialiteta — je osnova. Jelenina, srnjad, merjasec, medved. Vse prihaja iz slovenskih gozdov: zanjo že več kot trideset let skrbi naš dobavitelj <strong className="text-brand-wood">Nimrod</strong>, suhomesne izdelke iz divjačine pa pripravljajo v <strong className="text-brand-wood">Meglenu</strong>.
              </p>
              <p className="text-brand-stone leading-relaxed text-base italic font-serif">
                Vemo, od kod pride vsak kos. To je razlika, ki se okusi.
              </p>
            </div>
            <div className="rounded-[60px] overflow-hidden aspect-[4/3] md:aspect-[16/11] luxury-shadow group relative border border-brand-gold/10">
              <img 
                src="https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=1400&q=80" 
                className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105" 
                alt="Divjačinska jed" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          {/* Section 2: Ravioli - Domači izdelki */}
          <motion.div variants={cardVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[60px] overflow-hidden aspect-[4/3] md:aspect-[16/11] luxury-shadow group relative lg:order-2 border border-brand-gold/10">
              <img 
                src="https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=1400&q=80" 
                className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105" 
                alt="Domači ravioli" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            <div className="space-y-8 lg:order-1">
              <span className="font-serif text-brand-gold text-sm italic tracking-widest">— 02</span>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-wood leading-tight">
                Nekaj, kar smo <br />
                <span className="italic text-brand-gold font-serif">ustvarili sami.</span>
              </h2>
              <div className="w-12 h-[1px] bg-brand-gold"></div>
              <p className="text-brand-stone leading-relaxed text-base">
                Ravioli Pod Slavnikom so nastali iz želje, da bi tudi sami naredili nekaj posebnega. Virgilija in Boris sta pred mnogimi leti vložila veliko časa v to, da jih danes lahko ponudimo takšne, kot so.
              </p>
              <p className="text-brand-stone leading-relaxed text-base italic font-serif">
                Najdete jih v izbranih trgovinah in pri izbranih gostincih.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* Signature Event: Medvedja večerja */}
      <section className="relative py-40 px-6 bg-brand-bark-deep text-brand-cream overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2000&q=80" 
            className="w-full h-full object-cover filter blur-[1px]" 
            alt="Medvedja večerja ambient" 
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#180f08]/90 via-transparent to-[#180f08]/95 opacity-95"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block font-display">Signature event</span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-cream leading-tight">
            La Cena dell'Orso <br />
            <span className="italic text-brand-gold font-serif">Medvedja večerja</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
          <p className="text-brand-cream/90 text-lg font-serif italic max-w-2xl mx-auto leading-relaxed">
            Enkrat na leto, ko sezona to dovoli, prižgemo luči v kleti. Postavimo dolgo mizo. In za tiste, ki so pravočasno rezervirali, pripravljamo večerjo, ki je ni v nobenem restavracijskem vodniku.
          </p>
          <p className="text-brand-cream/75 text-sm max-w-xl mx-auto leading-relaxed font-sans">
            Medvedina je meso, ki ga v Evropi zakonito postreže le peščica kuhinj. Je bogato, temno, z noto gozdnih tal. Vsak hod prinese drugačno pripravo. Vino iz naše kleti. Tišina, ki jo prekinejo le pogovori za mizo.
          </p>

          <div className="border border-brand-gold/25 bg-brand-bark-deep/80 backdrop-blur-md p-10 max-w-xl mx-auto rounded-[32px] luxury-shadow">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="block text-brand-gold-light text-[9px] tracking-widest uppercase font-bold">🇮🇹 Italiano</span>
            </div>
            <p className="text-brand-cream/90 font-serif italic text-sm leading-relaxed">
              La Cena dell'Orso è un'esperienza gastronomica unica nel suo genere — un menù di selvaggina autentica, servito nella cantina di pietra del Gostišče Pod Slavnikom.
            </p>
          </div>
        </div>
      </section>

      {/* B2B Ravioli Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-[60px] overflow-hidden aspect-[4/3] md:aspect-[16/11] luxury-shadow group relative border border-brand-gold/10">
            <img 
              src="https://images.unsplash.com/photo-1587740908075-9e245070dfaa?w=1400&q=80" 
              className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105" 
              alt="Naši ravioli pridejo tudi domov" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          <div className="space-y-8">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block font-display">Ravioli — produkt</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-wood leading-tight">
              Naši ravioli <br />
              <span className="italic text-brand-gold font-serif">pridejo tudi domov.</span>
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold"></div>
            <p className="text-brand-stone leading-relaxed text-base font-sans">
              Domači ravioli z divjačino, zeliščni, sezonski. Sveži ali zamrznjeni. Na voljo v gostišču in v izbranih trgovinah po Istri.
            </p>
            <div className="p-8 bg-brand-cream rounded-3xl border border-brand-gold/15 luxury-shadow">
              <h4 className="font-bold text-brand-wood font-display text-xs uppercase tracking-widest mb-2">B2B Sodelovanje</h4>
              <p className="text-brand-stone text-sm leading-relaxed font-sans">
                Za B2B partnerje — restavracije, delikatese, gostilne — pripravljamo redne dobave. Pišite nam za pogoje in vzorce na naš kontaktni naslov.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-24 px-6 bg-brand-cream-soft text-center border-t border-brand-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-bold block font-display">Rezervacija mize</span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-wood italic">Doživite pristne okuse.</h2>
          <p className="text-brand-stone text-lg leading-relaxed max-w-xl mx-auto font-serif italic font-light">
            Svetujemo rezervacijo vsaj 2 dni vnaprej. Pokličite nas in si zagotovite svojo mizo v našem pristnem ambientu.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
            <a 
              href="tel:+38641321379" 
              className="px-10 py-5 bg-brand-wood text-white rounded-full font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-brand-gold hover:text-brand-wood hover:scale-105 transition-all duration-500 font-display shadow-xl"
            >
              Pokličite: +386 41 321 379
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
