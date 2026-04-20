import { motion } from 'motion/react';
import { useRef } from 'react';
import { UtensilsCrossed, Bed, Sparkles, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heritage Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#2a1d15]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://return.imindevelopment.com/wp-content/uploads/2026/04/715205411.jpg" 
            className="w-full h-full object-cover opacity-40 transition-transform duration-[12000ms] hover:scale-105"
            alt="Interior Gostilne"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a1d15]/70 via-transparent to-[#2a1d15]/80"></div>
          {/* Subtle light leak effect */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 blur-[120px] -translate-y-1/2 translate-x-1/3 rounded-full"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl py-20">
           {/* Logo / Illustration */}
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             className="mb-16"
           >
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="space-y-6 mt-4">
                  <span className="text-[10px] md:text-[11px] uppercase tracking-[0.6em] font-bold text-brand-gold font-display block">Gostilna s prenočišči</span>
                  <p className="text-brand-cream/80 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium max-w-lg mx-auto leading-relaxed">
                    Kjer se srečajo Kras, Mediteran, Kraški rob in Slavnik. <br/> Gostilna s tradicijo in proizvodnja domačih raviolov!
                  </p>
                  <h1 className="text-6xl md:text-[100px] uppercase tracking-normal font-serif font-black text-brand-cream leading-[0.85] filter drop-shadow-sm pt-4">
                    Pod Slavnikom
                  </h1>
                  <p className="script-font text-4xl md:text-6xl text-brand-gold/90 transition-transform duration-700">Tradicija od leta 1993</p>
                </div>
              </div>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.8, duration: 1.2 }}
             className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-20"
           >
              <Link to="/restavracija" className="group flex flex-col items-center gap-5">
                <div className="w-20 h-20 rounded-full border border-brand-cream/10 bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:border-brand-gold transition-all duration-700">
                  <UtensilsCrossed className="w-7 h-7 text-brand-cream group-hover:text-brand-gold transition-colors" />
                </div>
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-cream/60 group-hover:text-brand-gold transition-colors font-display">Restavracija</span>
              </Link>

              <div className="h-[1px] w-12 bg-brand-gold/20 hidden lg:block"></div>

              <Link to="/sobe" className="group flex flex-col items-center gap-5">
                <div className="w-20 h-20 rounded-full border border-brand-cream/10 bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:border-brand-gold transition-all duration-700">
                  <Bed className="w-7 h-7 text-brand-cream group-hover:text-brand-gold transition-colors" />
                </div>
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-cream/60 group-hover:text-brand-gold transition-colors font-display">Prenočišča</span>
              </Link>

              <div className="h-[1px] w-12 bg-brand-gold/20 hidden lg:block"></div>

              <Link to="/spa" className="group flex flex-col items-center gap-5">
                <div className="w-20 h-20 rounded-full border border-brand-cream/10 bg-white/5 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:border-brand-gold transition-all duration-700">
                  <Sparkles className="w-7 h-7 text-brand-cream group-hover:text-brand-gold transition-colors" />
                </div>
                <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-cream/60 group-hover:text-brand-gold transition-colors font-display">Privatni SPA</span>
              </Link>
           </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
           <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-brand-gold"></div>
           <span className="text-[8px] uppercase tracking-[0.5em] font-bold text-brand-gold -rotate-90 origin-left translate-x-[4px] font-display">Spoznajte nas</span>
        </div>
      </section>

      {/* 1. RESTAVRACIJA - Culinaric Excellence */}
      <section className="py-40 px-6 bg-brand-cream relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
           <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 border border-brand-gold/10 rounded-[64px] -z-10 group-hover:inset-0 transition-all duration-1000"></div>
              <div className="overflow-hidden rounded-[80px] luxury-shadow">
                <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/715205305.jpg" className="w-full aspect-[4/5] object-cover transition-transform duration-[3s] group-hover:scale-105" alt="Gostilna Pod Slavnikom" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 gold-badge rotate-[15deg] z-10 border-4 border-brand-cream shadow-2xl">
                 <span className="text-[10px] uppercase font-bold tracking-widest text-brand-wood leading-tight text-center">Pristni<br/>Okusi</span>
              </div>
           </div>
           
           <div className="lg:w-1/2">
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-8 font-display">Okusite tradicijo</span>
              <h2 className="text-6xl md:text-[80px] font-serif mb-10 leading-[0.85] tracking-tighter italic">Restavracija <br /> <span className="not-italic">& Kulinarika.</span></h2>
              <div className="w-20 h-[1px] bg-brand-gold mb-10"></div>
              <p className="text-brand-stone text-xl mb-12 leading-relaxed font-serif italic max-w-xl">
                Divjačina po receptu naših prednikov, ročno izdelane testenine in sveža zelišča z okoliških travnikov. Vsak krožnik je poklon naravi pod Slavnikom.
              </p>
              <div className="space-y-6 mb-16">
                 {['Divjačinski golaž z dolgotrajno pripravo', 'Domači ravioli in njoki babice Marije', 'Sezonske dobrote iz okoliških gozdov'].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold group-hover:scale-150 transition-transform"></div>
                      <span className="text-[11px] uppercase tracking-widest font-bold text-brand-wood/80">{item}</span>
                   </div>
                 ))}
              </div>
              <Link to="/restavracija" className="inline-flex items-center gap-6 bg-brand-wood text-brand-cream px-12 py-6 rounded-full group hover:bg-brand-gold hover:text-brand-wood hover:scale-105 transition-all duration-500 shadow-xl font-display">
                <span className="uppercase tracking-[0.4em] font-bold text-[10px]">Odkrijte meni</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
           </div>
        </div>
      </section>

      {/* 2. PRENOČIŠČA - Sanctuary of Peace */}
      <section className="py-40 px-6 bg-brand-wood text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse gap-24 items-center">
           <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 border border-brand-gold/20 rounded-[100px] -z-10 group-hover:inset-0 transition-all duration-1000"></div>
              <div className="overflow-hidden rounded-[100px] luxury-shadow">
                <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/712604439.jpg" className="w-full aspect-[4/5] object-cover transition-transform duration-[3s] group-hover:scale-105" alt="Udobna soba" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-brand-gold/90 backdrop-blur-md rounded-full flex items-center justify-center -rotate-12 border-4 border-brand-wood shadow-2xl p-8 animate-pulse-slow">
                 <p className="text-[10px] uppercase font-black tracking-widest text-brand-wood leading-tight text-center font-display">Spanje v objemu narave</p>
              </div>
           </div>
           
           <div className="lg:w-1/2">
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-8 font-display">Mir & Počitek</span>
              <h2 className="text-6xl md:text-[80px] font-serif mb-10 leading-[0.85] tracking-tighter italic">Prenočišča <br /> <span className="not-italic">& Sanje.</span></h2>
              <div className="w-20 h-[1px] bg-brand-gold mb-10"></div>
              <p className="text-brand-cream/60 text-xl mb-12 leading-relaxed font-serif italic max-w-xl">
                Naših 6 butičnih prenočišč je poimenovanih po okoliških vrhovih in rastlinah. Vsako nudi unikatno izkušnjo udobja, prežeto z vonjem po masivnem lesu in svežem gorskem zraku.
              </p>
              <div className="grid grid-cols-2 gap-10 mb-16">
                 <div>
                    <h4 className="text-brand-gold font-serif text-3xl italic mb-2">6</h4>
                    <p className="text-[9px] uppercase tracking-widest opacity-40">Unikatnih enot</p>
                 </div>
                 <div>
                    <h4 className="text-brand-gold font-serif text-3xl italic mb-2">100%</h4>
                    <p className="text-[9px] uppercase tracking-widest opacity-40">Domač les</p>
                 </div>
              </div>
              <Link to="/sobe" className="inline-flex items-center gap-6 bg-brand-gold text-brand-wood px-12 py-6 rounded-full group hover:bg-white hover:scale-105 transition-all duration-500 shadow-xl font-display">
                <span className="uppercase tracking-[0.4em] font-bold text-[10px]">Izberite svoje zatočišče</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
           </div>
        </div>
      </section>

      {/* 3. SPA - Ultimate Relaxation */}
      <section className="py-40 px-6 bg-brand-cream relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-gold/5 blur-[120px] rounded-full translate-y-1/3 -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
           <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 border border-brand-gold/10 rounded-[80px] -z-10 group-hover:inset-0 transition-all duration-1000"></div>
              <div className="overflow-hidden rounded-[80px] luxury-shadow">
                <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/hf_20260419_193107_b6e54a8e-bdce-4ced-9bec-83bdbf5aa085-scaled.png" className="w-full aspect-[16/10] lg:aspect-square object-cover transition-transform duration-[3s] group-hover:scale-105" alt="Privatni SPA" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute top-10 right-10 flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-brand-gold animate-ping"></div>
                 <span className="text-[9px] uppercase tracking-widest font-bold text-brand-wood">Popolna zasebnost</span>
              </div>
           </div>
           
           <div className="lg:w-1/2">
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-8 font-display">Sprostitev</span>
              <h2 className="text-6xl md:text-[80px] font-serif mb-10 leading-[0.85] tracking-tighter italic">Privatni SPA <br /> <span className="not-italic">& Wellness.</span></h2>
              <div className="w-20 h-[1px] bg-brand-gold mb-10"></div>
              <p className="text-brand-stone text-xl mb-12 leading-relaxed font-serif italic max-w-xl">
                Privoščite si trenutke popolne sprostitve v našem wellness kotičku. Savna, masažni bazen in zeliščni čaj izpod Slavnika bodo prebudili vaše čute in regenerirali telo.
              </p>
              <div className="flex gap-12 mb-16">
                 <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                       <Sparkles className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest opacity-60">Savna</span>
                 </div>
                 <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                       <UtensilsCrossed className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest opacity-60">Razvajanje</span>
                 </div>
              </div>
              <Link to="/spa" className="inline-flex items-center gap-6 text-brand-wood group boutique-underline py-2">
                <span className="uppercase tracking-[0.4em] font-bold text-[10px] font-display">Rezervirajte svoj termin</span>
                <div className="w-10 h-10 rounded-full border border-brand-wood/10 flex items-center justify-center group-hover:bg-brand-wood group-hover:text-white transition-all duration-500">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
           </div>
        </div>
      </section>

      {/* Mood Section / English Introduction */}
      <section className="py-40 px-6 bg-brand-cream relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-10 font-display">Podeželski šarm</span>
                 <h2 className="text-5xl md:text-7xl font-serif mb-12 tracking-tighter italic">Izkusite <br/> mir.</h2>
                 <div className="space-y-8 text-brand-stone text-lg leading-relaxed font-serif italic">
                    <p>Gostišče Pod Slavnikom se nahaja v mirni majhni slovenski vasici Podgorje in ponuja sobe z brezplačnim brezžičnim internetom. Restavracija z jedmi po naročilu streže sveže pripravljene jedi iz divjačine ter izbor lokalnih in mednarodnih vin.</p>
                    <p>Sobe so opremljene z lesenimi podi, imajo pogled na vrt ali gore in zasebno kopalnico s prho. Gostje se lahko sprostijo na skupni terasi ali poskusijo domače oljčno olje.</p>
                    <p>V bližini lahko uživate v pohodništvu ali kolesarjenju. Številna mesta, kot so Ljubljana, Reka, Pulj ali Trst, so dosegljiva v 1 uri vožnje. Škocjanske jame in center Kopra so oddaljeni 20 minut vožnje od Pod Slavnikom.</p>
                 </div>
              </div>
              <div className="relative">
                 <div className="bg-brand-wood p-12 rounded-[60px] text-brand-cream luxury-shadow">
                    <h4 className="font-display text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-12">Opremljenost in storitve</h4>
                    <ul className="space-y-8">
                       {[
                         'Brezplačno parkirišče', 'Brezplačen WiFi', 'Restavracija', 'Sobe za nekadilce', 'Bar', 'Odličen zajtrk'
                       ].map((item, i) => (
                         <li key={i} className="flex items-center gap-6 group">
                            <div className="w-2 h-2 rounded-full bg-brand-gold/40 group-hover:bg-brand-gold transition-colors"></div>
                            <span className="text-sm uppercase tracking-[0.2em] font-medium opacity-80 group-hover:opacity-100 transition-opacity font-display">{item}</span>
                         </li>
                       ))}
                    </ul>
                    <div className="mt-16 pt-12 border-t border-white/5">
                       <p className="text-brand-gold font-serif text-3xl italic mb-2">9.0</p>
                       <p className="text-[9px] uppercase tracking-widest opacity-40">Ocena za potovanje v paru</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Location Insight - Podgorje & Slavnik */}
      <section className="py-40 px-6 bg-brand-wood text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/natural-paper-paged.png')]"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center relative z-10">
           <div className="lg:w-1/2 relative group">
              <div className="overflow-hidden rounded-[100px] luxury-shadow border border-white/5">
                <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/332890_MOK_foto_Jaka_Ivancic-scaled-1.webp" className="w-full aspect-[4/5] object-cover transition-transform duration-[5s] group-hover:scale-105" alt="Vas Podgorje" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-brand-gold rounded-full flex items-center justify-center p-8 text-brand-wood text-center text-[10px] uppercase font-black tracking-widest luxury-shadow border-4 border-brand-wood -rotate-6">
                Skriti dragulj slovenske Istre
              </div>
           </div>
           <div className="lg:w-1/2">
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-10 font-display">Lokacija & Narava</span>
              <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-[0.85] tracking-tighter italic">Podgorje <br /> <span className="not-italic">& Slavnik.</span></h2>
              <div className="w-20 h-[1px] bg-brand-gold mb-12"></div>
              <p className="text-brand-cream/80 text-xl mb-10 leading-relaxed font-serif italic font-light">
                Podgorje je očarljiva vasica v slovenski Istri, ki leži tik pod pobočji Slavnika – enega najlepših in najbolj dostopnih vrhov v jugozahodni Sloveniji.
              </p>
              <div className="space-y-8 text-brand-cream/60 text-lg leading-relaxed font-serif italic">
                <p>Območje je priljubljeno med pohodniki, kolesarji in ljubitelji narave zaradi neokrnjene pokrajine, panoramskih poti in mirnega vzdušja. Vas je tiha in prijazna, obdana z gozdovi in travniki, hkrati pa le 20 minut vožnje oddaljena od obalnih mest Koper in Ankaran.</p>
                <p>Ta regija ponuja popolno ravnovesje svežega gorskega zraka, mediteranskega podnebja in podeželske preprostosti – pravi skriti dragulj za goste, ki želijo ubežati gneči in se povezati z naravo.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Host Bio - Igor */}
      <section className="py-48 px-6 bg-brand-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
           <div className="w-40 h-40 rounded-full overflow-hidden mb-16 luxury-shadow border-4 border-white group">
              <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/712603346.jpg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Igor - vaš gostitelj" referrerPolicy="no-referrer" />
           </div>
           <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] font-bold block mb-8 font-display">Vaš gostitelj</span>
           <h3 className="text-5xl md:text-7xl font-serif mb-12 italic tracking-tighter">"Iskrena skrb za <br/> vsakega gosta."</h3>
           <div className="space-y-8 text-brand-stone text-xl leading-relaxed font-serif italic max-w-2xl">
              <p>Pozdravljeni, sem Igor – vaš gostitelj v Prenočiščih Pod Slavnikom. V gostinstvu delam že vrsto let in ponosen sem na to, da za svoje goste ustvarjam toplo, sproščeno in pristno izkušnjo.</p>
              <p>Verjamem, da najboljša bivanja izvirajo iz majhnih detajlov in iskrene skrbi, ne pa iz bleščečega luksuza. Vedno vam z veseljem pomagam odkriti najboljše pohodniške poti, lokalne kotičke s hrano ali pa vam zgolj ponudim miren prostor za počitek.</p>
           </div>
           <div className="mt-16 italic font-serif text-brand-gold text-2xl">Igor</div>
        </div>
      </section>

      {/* Guest Reviews Section - Horizontal Slider */}
      <section className="py-48 px-6 bg-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="flex justify-center items-center gap-6 mb-10">
               <img src="https://upload.wikimedia.org/wikipedia/commons/b/be/Booking.com_logo.svg" className="h-5" alt="Booking.com logo" referrerPolicy="no-referrer" />
               <div className="w-12 h-[1px] bg-brand-gold/20"></div>
               <div className="flex gap-1">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 text-brand-gold fill-current" />)}
               </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter leading-none mb-6">Mnenja naših gostov</h2>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold font-display">Preverjene ocene iz portala Booking.com</p>
          </div>

          <div className="relative">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20 hidden md:block">
              <button 
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full bg-white luxury-shadow flex items-center justify-center text-brand-wood hover:bg-brand-gold hover:text-white transition-all border border-brand-wood/5"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20 hidden md:block">
              <button 
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full bg-white luxury-shadow flex items-center justify-center text-brand-wood hover:bg-brand-gold hover:text-white transition-all border border-brand-wood/5"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div 
              ref={scrollRef}
              className="flex gap-4 md:gap-6 overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar group cursor-grab active:cursor-grabbing px-4"
            >
              {[
                { name: 'Jana', type: 'Soba', stay: '1 noč', client: 'Par', date: 'Feb 2026', title: 'Super nočitev za raziskovanje hribov', score: '10', badge: 'Izjemno' },
                { name: 'Boštjan', type: 'Soba', stay: '1 noč', client: 'Par', date: 'Avg 2025', title: 'Osebje zelo prijazno, odličen zajtrk.', score: '10', badge: 'Izjemno' },
                { name: 'Tone', type: 'Soba', stay: '2 noči', client: 'Skupina', date: 'Nov 2024', title: 'Odlična hrana in mirna okolica so razlog, da se vračamo.', score: '10', badge: 'Izjemno' },
                { name: 'Vlasta', type: 'Soba', stay: '1 noč', client: 'Par', date: 'Nov 2024', title: 'Hrana vrhunska.', score: '10', badge: 'Izjemno' },
                { name: 'Milan', type: 'Soba', stay: '1 noč', client: 'Par', date: 'Okt 2024', title: 'Odlična lokacija, osebje in hrana.', score: '10', badge: 'Izjemno' },
                { name: 'Korotaj', type: 'Soba', stay: '1 noč', client: 'Par', date: 'Okt 2024', title: 'Zajtrk in sproščenost osebja.', score: '9.0', badge: 'Vrhunsko' },
                { name: 'Tilen', type: 'Soba', stay: '1 noč', client: 'Skupina', date: 'Sep 2024', title: 'Pristnost, domačnost', score: '10', badge: 'Izjemno' },
                { name: 'Sale75', type: 'Soba', stay: '1 noč', client: 'Solo', date: 'Avg 2024', title: 'Vse, mirna lokacija, prijazno osebje', score: '10', badge: 'Izjemno' },
                { name: 'Tea', type: 'Soba', stay: '1 noč', client: 'Par', date: 'Maj 2024', title: 'Zelo mirno, nobenih glasnih gostov.', score: '9.0', badge: 'Vrhunsko' },
                { name: 'Vanessa', type: 'Soba', stay: '1 noč', client: 'Par', date: 'Jul 2023', title: 'Prijaznost osebja je nalezljiva.', score: '10', badge: 'Izjemno' }
              ].map((rev, i) => (
                <div 
                  key={i}
                  className="min-w-[260px] md:min-w-[320px] snap-center py-4"
                >
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 md:p-8 rounded-[30px] luxury-shadow border border-brand-wood/5 h-full flex flex-col justify-between hover:border-brand-gold/30 transition-colors duration-500"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-5">
                        <div className="w-8 h-8 rounded-full bg-brand-warm-gray flex items-center justify-center text-brand-wood font-serif italic text-xs">{rev.name[0]}</div>
                        <div className="flex flex-col items-end gap-1">
                          <div className="bg-brand-gold/10 text-brand-gold px-2 py-0.5 rounded-lg flex items-center gap-1">
                            <span className="text-sm font-bold font-serif">{rev.score}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="text-[8px] uppercase tracking-[0.3em] font-bold text-brand-gold mb-1.5 font-display">{rev.badge}</p>
                        <h4 className="text-sm md:text-base font-serif italic mb-3 leading-snug">"{rev.title}"</h4>
                      </div>
                    </div>
                    <div className="pt-5 border-t border-brand-wood/5 flex justify-between items-center">
                       <div>
                         <p className="text-[9px] font-bold text-brand-wood uppercase tracking-wider">{rev.name}</p>
                         <p className="text-[7px] uppercase tracking-widest text-brand-stone opacity-50 font-display">{rev.client}</p>
                       </div>
                       <span className="text-[7px] uppercase tracking-widest text-brand-stone/40 font-bold font-display">Booking.com</span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-0 px-0 bg-brand-cream relative">
        <div className="w-full h-[600px] relative group">
          <iframe 
            src="https://www.google.com/maps?q=Gosti%C5%A1%C4%8De%20s%20preno%C4%8Di%C5%A1%C4%8Di%20Pod%20Slavnikom&hl=sl&z=16&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]"></div>
          <div className="absolute bottom-10 right-10 p-12 bg-brand-wood/90 backdrop-blur-xl text-brand-cream rounded-[60px] luxury-shadow border border-white/5 max-w-sm hidden md:block">
            <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-6 font-display">Naša lokacija</p>
            <h3 className="text-3xl font-serif italic mb-6 leading-tight">Podgorje 1, <br />Koper 6216</h3>
            <div className="w-12 h-[1px] bg-brand-gold mb-8"></div>
            <p className="text-sm text-brand-cream/60 leading-relaxed font-light italic">
              Le 20 minut iz Kopra, a sredi popolnega miru Kraškega roba.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Embeds - Instagram & Facebook Placeholders */}
      <section className="py-40 px-6 bg-brand-warm-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-10 font-display">Družbena Omrežja</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-20 tracking-tighter italic text-center">Spremljajte nas v živo</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
               {/* Instagram Placeholder */}
               <div className="bg-white rounded-[60px] p-8 md:p-12 luxury-shadow min-h-[600px] flex flex-col items-center justify-center border border-brand-wood/5 group relative overflow-hidden transition-all duration-700 hover:scale-[1.01]">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
                  <div className="mb-12 flex flex-col items-center gap-6">
                     <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-1 scale-90 group-hover:scale-100 transition-transform duration-700">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-brand-wood">
                           <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.058-1.69-.072-4.949-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </div>
                     </div>
                     <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold font-display">Instagram utrinki</span>
                  </div>
                  <div className="w-full text-center italic font-serif text-brand-stone/40 mb-12 flex-1 flex items-center justify-center p-12 border-2 border-dashed border-brand-wood/10 rounded-[40px]">
                     Tu bo viden vaš Instagram zid.
                  </div>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[9px] uppercase tracking-widest font-black text-brand-wood boutique-underline py-2">Obiščite naš profil</a>
               </div>

               {/* Facebook Placeholder */}
               <div className="bg-white rounded-[60px] p-8 md:p-12 luxury-shadow min-h-[600px] flex flex-col items-center justify-center border border-brand-wood/5 group relative overflow-hidden transition-all duration-700 hover:scale-[1.01]">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
                  <div className="mb-12 flex flex-col items-center gap-6">
                     <div className="w-24 h-24 rounded-full bg-[#1877F2] p-1 scale-90 group-hover:scale-100 transition-transform duration-700">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-[#1877F2]">
                           <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                        </div>
                     </div>
                     <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#1877F2] font-display">Facebook stran</span>
                  </div>
                  <div className="w-full text-center italic font-serif text-brand-stone/40 mb-12 flex-1 flex items-center justify-center p-12 border-2 border-dashed border-brand-wood/10 rounded-[40px]">
                     Tu bo viden vaš Facebook zid.
                  </div>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[9px] uppercase tracking-widest font-black text-brand-wood boutique-underline py-2">Pridružite se nam na FB</a>
               </div>
            </div>
        </div>
      </section>
    </motion.div>
  );
}
