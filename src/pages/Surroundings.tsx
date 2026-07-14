import { motion } from 'motion/react';
import { Map, MapPin, Compass, Landmark, Library, Bike, Route } from 'lucide-react';

const paths = [
  {
    icon: '🗻',
    dist: 'Izhodišče Podgorje',
    title: 'Kraški rob — Kojnik, Golič, Žbevnica',
    desc: 'Greben, ki ločuje Istro od Krasa in Čičarije — od Devina pri Trstu do Učke pri Reki. Travnati grebeni nad prepadom, perunike spomladi, ruj v ognju jeseni.',
    stats: ['30 km ture', '6–7h hoje', '4 vrhovi']
  },
  {
    icon: '🏞',
    dist: '25 min vožnje',
    title: 'Dolina Glinščice (Val Rosandra)',
    desc: 'Edina površinska reka na tržaškem Krasu. V kanjonu: nekdanja železnica iz 1887 z viadukti in predori, 40-metrski slap Supot, ostanki rimskega akvedukta. Krpanova pot za tihotapljenje soli.',
    stats: ['1887 proga', '40 m slap']
  },
  {
    icon: '👂',
    dist: '45 min vožnje',
    title: 'Istrska ušesa (Veli Badin)',
    desc: 'Mogočni previsi na jugu Kraškega roba pri Sočergi, izoblikovani v obliki slonjih ušes. Dom ogroženih gnezdilk. Jeseni, ko ruj zardi, eno najbolj fotogeničnih mest v Istri.',
    stats: ['3h hoje', '250 m višine']
  },
  {
    icon: '🏰',
    dist: '30 min vožnje',
    title: 'Grad Socerb & Sveta jama',
    desc: 'Grajske razvaline na robu kraške planote z razgledom na Tržaški zaliv. Tik ob gradu: Sveta jama — edina podzemna cerkev v Sloveniji, 44 m globoka, opisana pri Valvazorju.',
    stats: ['44 m globina', 'Ne 14:00']
  },
  {
    icon: '🌸',
    dist: 'Pomlad & jesen',
    title: 'Cvetna planota Slavnika',
    desc: 'Spomladi: žafrani, narcise, perunike, gorske kosmatince. Jeseni: ruj, ki spremeni grebene v rdeč ocean. To je razlog, da se gostje vračajo dvakrat letno — vsakič na drug spekter barv.',
    stats: ['🌷 Marec', '🍂 Oktober']
  }
];

const landmarks = [
  {
    icon: '🇮🇹',
    dist: '20 min · druga država',
    title: 'Trst',
    desc: 'Habsburška arhitektura, Piazza Unità d\'Italia ob morju, zgodovinske kavarne (San Marco, degli Specchi), tržnice in Miramare. Dvajset minut po avtocesti — in povsem drug svet. Mnogi naši italijanski gostje pridejo v Podgorje prav zato, da iz Trsta uidejo Trstu.',
    large: true
  },
  {
    icon: '🗺',
    dist: '35 min · UNESCO',
    title: 'Škocjanske jame',
    desc: 'UNESCO svetovna naravna dediščina. Podzemna soteska, visoka 200 metrov — eden največjih podzemnih prostorov na Zemlji. Stojiš nad propadom in slišiš reko, ki teče stotine metrov pod tabo. Doživetje, ki se ga ne pozabi.',
    large: true
  },
  {
    icon: '🏛',
    dist: '20 min',
    title: 'Koper',
    desc: 'Tlakovani Titov trg, Pretorska palača, beneška arhitektura. Najpomembnejše mesto slovenskega Primorja.'
  },
  {
    icon: '🌊',
    dist: '25 min',
    title: 'Piran & Sečoveljske soline',
    desc: 'Ozke ulice, Tartinijev trg, vonj po soli. Soline — predelava na enak način kot pred 500 leti.'
  },
  {
    icon: '🐎',
    dist: '30 min',
    title: 'Kobilarna Lipica',
    desc: 'Zibelka lipicanca od leta 1580. UNESCO dediščina. Predstava Lipiške jahalne šole, vožnja s kočijo.'
  },
  {
    icon: '⛪',
    dist: '20 min',
    title: 'Hrastovlje',
    desc: 'Romanska cerkev z gotskimi freskami iz 1490. Mrtvaški ples — kulturni biser, ki ga marsikdo ne pozna.'
  },
  {
    icon: '🍷',
    dist: '15–40 min',
    title: 'Istrska vina & olja',
    desc: 'Refošk, teran, malvazija. Oljčna olja nagrajevana mednarodno. Tartufi — uro vožnje v hrvaško Istro.'
  },
  {
    icon: '📍',
    dist: 'GPS: Podgorje 1',
    title: 'Kako do nas',
    desc: 'Z avtoceste Ljubljana–Koper izstopi na Kastelcu or Kozini. Sledi znakom za Podgorje. Parkirišče ob gostišču.'
  }
];

const longPaths = [
  {
    icon: '🚴',
    title: 'Parenzana',
    desc: 'Nekdanja ozkotirna železnica Trst–Poreč, danes ena najbolj priljubljenih kolesarsko-pohodniških poti severnega Jadrana. Začne se tik ob nas in vodi skozi vinograde Istre.',
    scale: '123 km',
    subScale: 'Trst → Poreč',
    type: 'Kolo · peš'
  },
  {
    icon: '🌊',
    title: 'EuroVelo 8 — Mediteranska pot',
    desc: 'Evropska kolesarska arterija od Cádiza do Aten. Skozi naše okolje povezuje Trst, Koper in Piran z naprej Hrvaško. Vsako leto jo prevozi na tisoče kolesarjev iz vse celine.',
    scale: '7.500 km',
    subScale: 'Cádiz → Atene',
    type: 'Kolo'
  },
  {
    icon: '🥾',
    title: 'Slovenska planinska pot',
    desc: 'Najstarejša povezovalna planinska pot v Evropi (1953), od Maribora do Ankarana. Slavnik tik nad nami je ena od kontrolnih točk z žigom — zadnji veliki vrh pred morjem.',
    scale: '599 km',
    subScale: 'Maribor → Ankaran',
    type: 'Peš'
  },
  {
    icon: '📖',
    title: 'La Via della Bora — Paolo Rumiz',
    desc: 'Tržaški pisatelj Paolo Rumiz je peš prehodil Čičarijo, Podgorski Kras in Istro ter o tem pisal za Il Piccolo. Njegovi knjigi A Piedi in La Via della Bora vodita bralce naravnost skozi naš kraj — gostje pogosto pridejo z njegovo knjigo v roki.',
    scale: '2 knjigi',
    subScale: 'Trst → Istra',
    type: 'Literarna pot'
  },
  {
    icon: '🐺',
    title: 'Via Dinarica',
    desc: 'Daljinska pot čez celotne Dinaride, ki povezuje sedem držav od Slovenije do Albanije. Njena obalna linija prestopi iz Slovenije v Hrvaško prav prek grebena Slavnik–Žbevnica, po malo znani Sakomanovi poti. Tu, nad Podgorjem, se Dinaridi začnejo.',
    scale: '1.260 km',
    subScale: 'Slovenija → Albanija',
    type: 'Peš · trans-Balkan',
    badge: 'Skrita pot'
  }
];

const corridorStops = [
  { name: 'Trst', flag: true },
  { name: 'Glinščica' },
  { name: 'Škocjanske jame' },
  { name: 'Osp' },
  { name: 'Socerb' },
  { name: 'Kraški rob' },
  { name: 'Slavnik · Podgorje', active: true },
  { name: 'Golič' },
  { name: 'Žbevnica' },
  { name: 'Učka' },
  { name: 'Opatija' },
  { name: 'Reka', flag: true }
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

export default function Surroundings() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-32"
    >
      {/* Surroundings Header */}
      <section className="px-6 py-20 max-w-7xl mx-auto space-y-6 relative">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
        <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block font-display">Okolica · Narava & poti</span>
        <h1 className="text-4xl md:text-6xl font-serif text-brand-wood leading-tight">
          Idealno izhodišče za <br />
          <span className="italic text-brand-gold font-serif">vse, kar je najboljšega.</span>
        </h1>
        <div className="w-16 h-[1px] bg-brand-gold"></div>
        <p className="text-brand-stone text-xl leading-relaxed font-serif italic font-light max-w-2xl">
          Podgorje leži na točki, kjer se trije svetovi dotikajo: Kraška planota, Istra in obala. Tu so poti, ki vodijo do neba, in poti, ki vodijo do morja — vse se začnejo pri naših vratih.
        </p>
      </section>

      {/* Slavnik Featured Section */}
      <section className="py-12 bg-brand-wood text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-brand-wood-deep/80 rounded-[60px] border border-brand-gold/15 overflow-hidden">
            <div className="lg:col-span-6 aspect-[4/3] md:aspect-square relative bg-brand-bark min-h-[400px]">
              <img
                src="/images/client/surroundings/slavnik-summit-viewpoint.webp"
                className="w-full h-full object-cover object-center transition-transform duration-[8s] hover:scale-105"
                alt="Obiskovalci na vrhu Slavnika ob razgledni orientacijski plošči"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-wood-deep/60 via-transparent to-transparent"></div>
              <div className="absolute top-8 left-8 text-white space-y-2">
                <span className="font-serif text-5xl md:text-7xl font-black leading-none drop-shadow-lg block">1028 m</span>
                <span className="text-brand-gold text-[10px] uppercase tracking-widest font-black block font-display">Primorski Triglav</span>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 md:p-16 space-y-8">
              <span className="text-brand-gold uppercase tracking-[0.3em] text-[10px] font-bold block font-display">🏔 Tik za hišo</span>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-cream leading-tight">
                Slavnik — vrh, ki <br />
                <span className="italic text-brand-gold font-serif">se vidi do Benetk.</span>
              </h2>
              <div className="w-12 h-[1px] bg-brand-gold"></div>
              <p className="text-brand-cream/80 text-sm leading-relaxed">
                Tisoč osemindvajset metrov. Domačini mu pravijo primorski Triglav. Pot se začne pri naši hiši — lahka (1h 40min) ali strma (1h).
              </p>
              <p className="text-brand-cream/70 text-sm leading-relaxed italic font-serif">
                Z vrha: morje na eni strani, Alpe na drugi, ob jasnem dnevu do Benetk. Spomladi planota cveti z žafrani in narcisami. Na vrhu Tumova koča — odprta ob vikendih.
              </p>
              
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-brand-gold/20 text-center">
                <div>
                  <span className="font-serif text-2xl text-brand-gold block font-black">1h</span>
                  <span className="text-[9px] uppercase tracking-wider text-brand-cream/50">Strma pot</span>
                </div>
                <div>
                  <span className="font-serif text-2xl text-brand-gold block font-black">1h 40'</span>
                  <span className="text-[9px] uppercase tracking-wider text-brand-cream/50">Lahka pot</span>
                </div>
                <div>
                  <span className="font-serif text-2xl text-brand-gold block font-black">0 m</span>
                  <span className="text-[9px] uppercase tracking-wider text-brand-cream/50">Od gostišča</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surrounding Paths Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16 relative">
        <div className="absolute top-1/2 left-10 w-80 h-80 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {paths.map((p, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              className="bg-brand-cream p-10 rounded-[40px] border border-brand-gold/15 luxury-shadow hover:scale-[1.02] hover:border-brand-gold/35 hover:bg-white transition-all duration-500 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-4xl block">{p.icon}</span>
                <span className="text-[8px] uppercase tracking-[0.25em] text-brand-gold font-bold font-display block">{p.dist}</span>
                <h3 className="font-serif text-xl text-brand-wood font-bold">{p.title}</h3>
                <p className="text-brand-stone text-xs leading-relaxed font-sans">{p.desc}</p>
              </div>
              <div className="pt-6 border-t border-brand-gold/10 flex gap-4 text-[10px] text-brand-stone font-bold">
                {p.stats.map((st, i) => (
                  <span key={i}>{st}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Cultural Attractions */}
      <section className="py-24 px-6 bg-brand-cream-soft border-t border-brand-gold/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="text-center space-y-4">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block font-display">Okolica · Kultura & mesta</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-wood">V pol ure od vsakega svetá.</h2>
            <p className="text-brand-stone text-base max-w-xl mx-auto italic font-serif">Beneška obala, habsburški Trst, kraške jame, srednjeveške freske, lipicanci. Vse v krogu, ki ga prevoziš for polovico delovnega dne.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {landmarks.map((l, idx) => (
              <motion.div 
                key={idx} 
                variants={cardVariants}
                className={`bg-white p-8 rounded-[40px] border border-brand-gold/10 luxury-shadow flex flex-col justify-between space-y-6 hover:border-brand-gold/30 hover:scale-[1.02] transition-all duration-500 ${
                  l.large ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-3xl block">{l.icon}</span>
                    <span className="text-[8px] uppercase tracking-widest text-brand-gold font-bold font-display">{l.dist}</span>
                  </div>
                  <h3 className="font-serif text-xl text-brand-wood font-bold">{l.title}</h3>
                  <p className="text-brand-stone text-xs leading-relaxed font-sans">{l.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Cycling Banner */}
          <div className="bg-brand-wood text-brand-cream p-12 md:p-16 rounded-[60px] relative overflow-hidden border border-brand-gold/20 luxury-shadow grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="absolute right-0 bottom-0 opacity-5 select-none pointer-events-none text-9xl">
              🚴
            </div>
            <div className="lg:col-span-2 text-brand-gold text-[10px] uppercase tracking-[0.4em] font-bold font-display lg:border-r border-brand-gold/20 lg:pr-8 py-2">
              Kolesarjenje
            </div>
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl md:text-3xl font-serif">Kolesarjenje pod Slavnikom</h3>
              <p className="text-brand-cream/80 text-sm leading-relaxed max-w-xl">
                Izhodišče v Podgorju ponuja gorsko kolesarjenje na Slavnik, Golič in Kojnik, cestno kolesarjenje po slikovitih istrskih vasicah ter neposredno povezavo na mednarodno traso Parenzana.
              </p>
            </div>
            <div className="lg:col-span-3 lg:border-l border-brand-gold/20 lg:pl-8 text-center lg:text-left">
              <span className="font-serif text-4xl text-brand-gold font-black block">150 km+</span>
              <span className="text-[9px] uppercase tracking-widest text-brand-cream/50">Označenih poti</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Corridor and Long Distance Trails */}
      <section className="py-24 px-6 bg-brand-wood-deep text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-20">
          <div className="max-w-4xl space-y-6">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block font-display">Potencial območja</span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-cream">Med Trstom in Reko, <span className="italic text-brand-gold">na stičišču Evrope.</span></h2>
            <p className="text-brand-cream/80 text-base leading-relaxed">
              Med Tržaškim in Kvarnerskim zalivom je najkrajša kopenska povezava prav tod — čez Podgorje. Tu se srečata Zahod in Vzhod, Brkini in Istra, Kras in morje.
            </p>
            <p className="text-brand-cream/60 text-sm leading-relaxed italic font-serif">
              To ni obrobje. To je prag. Stoletja so tu prehajali pastirji, tihotapci in romarji; danes isto pot izberejo kolesarji, daljinski pohodniki in svetovni popotniki. Greben nad našo hišo — Slavnik, Golič, Žbevnica — je rob, kjer se slovenska Istra preveša v hrvaško in kjer se začenjajo Dinaridi. Kdor prečka to mejo peš ali s kolesom, jo pogosto prečka prav tu.
            </p>
          </div>

          {/* Interactive Corridor Stops Slider */}
          <div className="border-t border-b border-brand-gold/25 py-12 space-y-8">
            <div className="text-center text-brand-gold uppercase tracking-[0.3em] text-[10px] font-bold font-display">Zahod ↔ Vzhod · naravni koridor čez Podgorje</div>
            
            <div className="flex justify-between text-[10px] text-brand-gold-dim uppercase tracking-wider font-bold">
              <span>← Zahod · Trst & morje</span>
              <span>Vzhod · Reka & Balkan →</span>
            </div>

            <div className="overflow-x-auto pb-4 hide-scrollbar">
              <div className="flex items-start min-width-[1000px] relative pt-4 min-w-[900px]">
                <div className="absolute top-7 left-[4%] right-[4%] h-[1px] bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"></div>
                {corridorStops.map((stop, idx) => (
                  <div key={idx} className="flex-1 text-center relative z-10 space-y-4">
                    <span className={`w-3.5 h-3.5 rounded-full border border-brand-gold mx-auto block transition-all ${
                      stop.active 
                        ? 'bg-brand-gold scale-125 shadow-[0_0_0_6px_rgba(196,163,90,0.18)]' 
                        : 'bg-brand-wood-deep'
                    }`}></span>
                    <span className={`block text-[10px] ${
                      stop.active 
                        ? 'text-brand-gold-light font-bold font-serif italic text-xs' 
                        : stop.flag 
                          ? 'text-brand-gold font-semibold' 
                          : 'text-brand-cream/70'
                    }`}>{stop.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Long distance trails list */}
          <div className="space-y-6 pt-12 border-t border-brand-gold/20">
            {longPaths.map((l, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-8 rounded-[32px] bg-brand-wood/40 border border-brand-gold/10 hover:border-brand-gold transition-colors duration-500">
                <div className="lg:col-span-1 text-4xl text-center">{l.icon}</div>
                <div className="lg:col-span-7 space-y-2">
                  <div className="flex items-center gap-3">
                    <h4 className="font-serif text-xl text-brand-cream font-bold">{l.title}</h4>
                    {l.badge && (
                      <span className="text-[8px] bg-brand-gold text-brand-wood font-black uppercase tracking-widest py-1 px-3 rounded-full">{l.badge}</span>
                    )}
                  </div>
                  <p className="text-brand-cream/70 text-xs leading-relaxed">{l.desc}</p>
                </div>
                <div className="lg:col-span-2 text-brand-gold font-display text-[10px] uppercase tracking-wider font-bold">
                  {l.type}
                </div>
                <div className="lg:col-span-2 text-right">
                  <span className="font-serif text-2xl text-brand-gold-light italic block">{l.scale}</span>
                  <span className="text-[10px] text-brand-cream/40 block">{l.subScale}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Traveler Quote Box */}
          <div className="bg-brand-wood/60 border border-brand-gold/20 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 max-w-4xl mx-auto">
            <p className="font-serif italic text-lg text-brand-gold-light">
              »Podgorje za takšne ljudi ni postaja — je razlog za pavzo.«
            </p>
            <div className="text-right border-l border-brand-gold/20 pl-6 shrink-0">
              <strong className="block font-serif text-brand-cream text-lg font-light">@pjeroad____</strong>
              <span className="text-[10px] uppercase tracking-wider text-brand-gold font-bold font-display">Svetovni popotnik</span>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
