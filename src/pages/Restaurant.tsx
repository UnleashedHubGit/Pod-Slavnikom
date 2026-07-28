import { useSeo } from '../lib/seo';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import RestaurantMenu from '../components/RestaurantMenu';
import { OpeningHoursFull } from '../components/OpeningHours';

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
  useSeo(
    'Gostilna & kulinarika | Pod Slavnikom',
    'Divjačina iz slovenskih gozdov, ročno izdelani ravioli in degustacijski meniji. Medvedja večerja (La Cena dell’Orso) v kamniti kleti gostišča Pod Slavnikom.',
  );
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
        <p className="text-brand-stone text-xl leading-relaxed font-serif max-w-2xl mx-auto font-light">
          Ne sledimo trendom. Sledimo naravi. Divjačina iz slovenskih gozdov, ročno pripravljeni ravioli, njoki in fuži ter sezonske sestavine ustvarjajo kulinariko, ki je pristna, iskrena in neločljivo povezana s Pod Slavnikom.
        </p>
      </section>

      {/* Grid: Meso & Ravioli */}
      <section className="py-24 bg-brand-cream-soft border-y border-brand-gold/10 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto px-6 space-y-20 md:space-y-24"
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
                src="/images/client/restaurant/restaurant-food-02.jpg"
                className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105" 
                alt="Divjačinska jed" 
                referrerPolicy="no-referrer" loading="lazy" decoding="async"
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
                referrerPolicy="no-referrer" loading="lazy" decoding="async"
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
                Ravioli Pod Slavnikom so nastali iz želje ustvariti izdelek, na katerega smo lahko ponosni. Z leti smo recepture izpopolnjevali in danes jih pripravljamo z enakim spoštovanjem do kakovosti, kot ga namenjamo jedem v naši gostilni.
              </p>

              <div className="rounded-3xl border border-brand-gold/15 bg-white p-6 md:p-8 luxury-shadow">
                <h3 className="font-display text-[10px] uppercase tracking-[0.25em] font-bold text-brand-gold mb-3">
                  Kje so na voljo
                </h3>
                <p className="text-brand-stone leading-relaxed text-sm font-sans">
                  Naše raviole lahko najdete v KZ Agraria, KZ Tolmin, PE Zajček, Celjskih mesninah, Mesninček Kozina, ter pri izbranih mesnicah in gostincih po Sloveniji.
                </p>
              </div>

              <div className="rounded-3xl border border-brand-gold/25 bg-brand-cream p-6 md:p-8 luxury-shadow space-y-5">
                <h3 className="font-serif text-xl md:text-2xl text-brand-wood leading-tight">
                  Ste trgovina, mesnica ali gostinec?
                </h3>
                <p className="text-brand-stone leading-relaxed text-sm font-sans">
                  Z veseljem sodelujemo z novimi partnerji, ki cenijo kakovostne domače izdelke. Če želite naše raviole vključiti v svojo ponudbo, nas kontaktirajte. Z veseljem vam predstavimo možnosti sodelovanja.
                </p>
                <a
                  href="mailto:podslavnikom@gmail.com?subject=Povpra%C5%A1evanje%20za%20B2B%20sodelovanje"
                  className="inline-flex items-center gap-2 bg-brand-wood text-brand-cream px-7 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest font-display hover:bg-brand-gold hover:text-brand-wood transition-colors duration-300 shadow-lg"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  Povpraševanje za B2B sodelovanje
                </a>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </section>

      {/* Menu Navigation (client-approved tabs) */}
      <RestaurantMenu />

      {/* Signature Event: Medvedja večerja */}
      <section className="relative py-24 md:py-28 px-6 bg-brand-bark-deep text-brand-cream overflow-hidden">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <img 
            src="/images/client/restaurant/restaurant-interior-01.jpg"
            className="w-full h-full object-cover filter blur-[1px]" 
            alt="Medvedja večerja ambient" 
            referrerPolicy="no-referrer" loading="lazy" decoding="async"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#180f08]/90 via-transparent to-[#180f08]/95 opacity-95"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block font-display">Poseben dogodek</span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-cream leading-tight">
            Medvedja večerja
          </h2>
          <span className="block text-brand-gold/80 text-sm md:text-base font-serif italic tracking-wide">La Cena dell'Orso</span>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto"></div>
          <p className="text-brand-cream/90 text-lg font-serif max-w-2xl mx-auto leading-relaxed">
            Medved pri nas ni enkraten dogodek. Ponujamo ga skozi vse leto. Naša medvedja večerja je meni Medved v objemu gastronomije: golaž iz medveda za predjed, medvedja pečenka s prilogo za glavno jed in domača sladica.
          </p>
          <p className="text-brand-cream/75 text-sm max-w-xl mx-auto leading-relaxed font-sans">
            Medvedina je bogato, temno meso z izrazitim značajem in noto gozda. Ob koncih tedna jo imamo praviloma na voljo, vendar ne zagotovljeno, zato je rezervacija priporočljiva. File medveda ponujamo občasno kot samostojno jed.
          </p>
        </div>
      </section>

      {/* Opening hours — full, owner-confirmed schedule */}
      <section className="py-24 px-6 relative">
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <OpeningHoursFull />
        </div>
      </section>

      {/* Reservation Section */}
      <section className="py-24 px-6 bg-brand-cream-soft text-center border-t border-brand-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grain-texture"></div>
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-bold block font-display">Rezervacija mize</span>
          <h2 className="text-4xl md:text-6xl font-serif text-brand-wood italic">Doživite pristne okuse.</h2>
          <p className="text-brand-stone text-lg leading-relaxed max-w-xl mx-auto font-serif font-light">
            Ob sredah in četrtkih smo odprti ob predhodni rezervaciji. Pokličite nas in si zagotovite svojo mizo v našem pristnem ambientu.
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
