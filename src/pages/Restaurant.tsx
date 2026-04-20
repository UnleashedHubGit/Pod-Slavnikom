import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Utensils, Award, Clock, Users, Sparkles, Heart, ChefHat } from 'lucide-react';

const specialties = [
  {
    name: 'Počasno pečen medvedov golaž',
    desc: 'Dolgo kuhana specialiteta z izbranimi začimbami in kruhovim cmokom.',
    price: '24,00 €',
    image: 'https://return.imindevelopment.com/wp-content/uploads/2026/04/688459811.jpg'
  },
  {
    name: 'Srnji file z borovnicami',
    desc: 'Nežen file srne s sladko-kislo borovničevo omako in bučnim pirejem.',
    price: '22,00 €',
    image: 'https://return.imindevelopment.com/wp-content/uploads/2026/04/688459813.jpg'
  },
  {
    name: 'Domači ravioli s tartufi',
    desc: 'Ročno izdelani ravioli, polnjeni s skuto in sveže naribanimi istrskimi tartufi.',
    price: '18,50 €',
    image: 'https://return.imindevelopment.com/wp-content/uploads/2026/04/688459811.jpg'
  },
  {
    name: 'Narezek "Pod Slavnikom"',
    desc: 'Izbor domačih sušenih mesnin, divjačinske salame in lokalnih sirov.',
    price: '14,00 €',
    image: 'https://return.imindevelopment.com/wp-content/uploads/2026/04/688459813.jpg'
  }
];

export default function Restaurant() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-0 overflow-hidden"
    >
      {/* Editorial Header */}
      <section className="px-6 mb-32 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-1 hidden lg:block">
             <div className="vertical-rail text-brand-gold">Okusi & Tradicija</div>
          </div>
          <div className="lg:col-span-5">
            <span className="text-brand-gold uppercase tracking-[0.5em] text-[9px] font-bold block mb-8 font-display">Gostilna s tradicijo</span>
            <h1 className="text-6xl md:text-8xl font-serif mb-12 leading-[0.85] tracking-tighter italic font-black uppercase">Okusi, ki <br /> ostanejo.</h1>
            <div className="w-20 h-[1px] bg-brand-gold mb-10"></div>
            <p className="text-brand-stone text-xl mb-12 leading-relaxed font-light italic max-w-sm font-serif">
              Od leta 1993 negujemo umetnost slovenske kuhinje s poudarkom na divjačini in domačih testeninah.
            </p>
            <div className="flex items-center gap-6 group">
                <ChefHat className="w-6 h-6 text-brand-gold" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-wood font-display">Glavni kuhar Igor</span>
            </div>
          </div>
          <div className="lg:col-span-6 relative w-full pt-12 lg:pt-0">
             <div className="rounded-[100px] md:rounded-[150px] aspect-[4/5] md:aspect-[3/4] overflow-hidden luxury-shadow relative group">
                <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/IMG_20220519_183807_595.jpg" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105" alt="Zunanjost Gostilne" />
                <div className="absolute inset-0 bg-brand-wood/10"></div>
             </div>
             <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-brand-gold rounded-full flex items-center justify-center p-8 text-brand-wood text-center shadow-2xl skew-x-3 hidden md:flex border-4 border-brand-cream z-20">
                <p className="text-[10px] uppercase font-black text-center leading-tight font-display tracking-widest leading-relaxed">Tradicija<br />od 1993</p>
             </div>
          </div>
        </div>
      </section>

      {/* The Traditional Menu View - Refined Paper Design */}
      <section className="relative py-48 px-4 bg-brand-cream overflow-hidden border-y border-brand-wood/5">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-20">
             <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-6 font-display">Sezonska ponudba</span>
             <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter">Velikonočni Meni</h2>
          </div>

          <div className="bg-white p-12 md:p-32 rounded-[60px] md:rounded-[100px] luxury-shadow relative overflow-hidden group border border-brand-wood/5">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]"></div>
            
            <div className="absolute bottom-12 right-12 w-40 h-40 hidden md:flex rounded-full bg-brand-gold shadow-2xl flex-col items-center justify-center transform rotate-6 border border-white/20 z-20">
               <span className="text-5xl font-serif font-black text-brand-wood leading-none">48</span>
               <span className="text-lg font-serif font-bold text-brand-wood opacity-60">EUR</span>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-16">
              {[
                { label: 'Predjed', title: 'Velikonočni narezek "Pod Slavnikom"', desc: 'Izbor domačih sušenih mesnin, divjačinske salame in lokalnih sirov.' },
                { label: 'Prva topla jed', title: 'Pasticcio z jurčki', desc: 'Domače testenine z gorgonzolo, jurčki in divjimi šparglji.' },
                { label: 'Druga topla jed', title: 'Ravioli s šparglji', desc: 'Naši sloviti domači ravioli z nadevom iz divjih šparglji.' },
                { label: 'Glavna jed (po izbiri)', title: 'Specialiteta hiše', desc: 'Medvedja pečenka, file jelenčka, telečja krača ali tagliata.', isChoice: true },
                { label: 'Sladica', title: 'Velikonočno presenečenje', desc: 'Domača sladica dneva izpod prstov naših slaščičarjev.' }
              ].map((item, i) => (
                <div key={i} className="text-center space-y-3 group/item">
                   <h4 className="text-brand-gold text-[9px] uppercase tracking-[0.4em] font-bold font-display opacity-60 group-hover/item:opacity-100 transition-opacity">{item.label}</h4>
                   <h3 className="text-2xl md:text-3xl font-serif italic mb-1 uppercase tracking-tight">{item.title}</h3>
                   <p className="text-brand-stone/60 text-sm italic font-serif max-w-md mx-auto">{item.desc}</p>
                   {i < 4 && <div className="w-12 h-[1px] bg-brand-gold/10 mx-auto mt-8"></div>}
                </div>
              ))}
            </div>

            <div className="mt-32 pt-16 border-t border-brand-wood/5 text-center">
               <p className="font-serif text-3xl md:text-5xl text-brand-wood font-black tracking-tight italic opacity-90 leading-tight">
                 Odprto za <br />
                 Velikonočni ponedeljek
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy - Narrative Details */}
      <section className="py-60 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="rounded-[80px] overflow-hidden aspect-[4/5] luxury-shadow group relative">
                <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/712603356.jpg" className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-110" alt="Notranjost" />
                <div className="absolute inset-0 bg-brand-wood/20 group-hover:bg-transparent transition-colors"></div>
             </div>
             <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-gold rounded-full flex items-center justify-center p-6 border-4 border-brand-cream shadow-2xl skew-x-3 group-hover:skew-x-0 transition-transform duration-1000">
                <Heart className="text-brand-wood w-12 h-12" />
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-10 font-display">Naša Filozofija</span>
            <h2 className="text-6xl font-serif mb-16 tracking-tight italic leading-tight">Iskrenost <br /> na krožniku.</h2>
            <div className="space-y-12">
               {[
                { t: 'Domača izdelava', d: 'Vsak ravioli je unikaten, plod potrpežljivih rok in ljubezni do tradicije.' },
                { t: 'Lokalne surovine', d: 'Zelišča s Slavnika in divjačina iz okoliških gozdov.' },
                { t: 'Krušna peč', d: 'Vsakodnevno sveže pečen kruh z vonjem po domačnosti.' }
               ].map((item, i) => (
                  <div key={i} className="flex gap-10 group cursor-default">
                    <span className="font-serif text-5xl text-brand-gold/20 group-hover:text-brand-gold transition-all duration-700">0{i+1}</span>
                    <div className="pt-2">
                      <h4 className="font-serif text-2xl mb-3 leading-none italic group-hover:text-brand-gold transition-colors">{item.t}</h4>
                      <p className="text-brand-stone text-base font-light leading-relaxed max-w-sm italic opacity-70">{item.d}</p>
                    </div>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Atmospheric Gallery */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto border-t border-brand-wood/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
            <div className="max-w-xl">
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-8 font-display">Pristnost</span>
              <h2 className="text-5xl md:text-7xl font-serif tracking-tighter italic">Kraški ambient.</h2>
            </div>
            <p className="text-brand-stone font-serif italic text-lg max-w-xs md:text-right opacity-60">
              Kjer se prepletajo les, kamen in toplina domačega ognjišča.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 rounded-[80px] overflow-hidden luxury-shadow group h-[500px] relative">
               <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/712603346.jpg" className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110" alt="Ambient 1" />
            </div>
            <div className="md:col-span-8 rounded-[80px] overflow-hidden luxury-shadow group h-[500px] relative">
               <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/715205305.jpg" className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110" alt="Ambient 2" />
            </div>
            <div className="md:col-span-12 rounded-[80px] overflow-hidden luxury-shadow group h-[400px] relative">
               <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/715205411.jpg" className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105" alt="Ambient 3" />
               <div className="absolute inset-0 bg-brand-wood/10"></div>
            </div>
        </div>
      </section>

      {/* Featured Dishes - High End Grid */}
      <section className="py-40 px-6 bg-brand-wood text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32">
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-8 font-display">Gurmanski izbor</span>
            <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter">Naše Specialitete</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {specialties.slice(0, 2).map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-12 group items-center">
                 <div className="w-full md:w-1/2 aspect-square rounded-[60px] overflow-hidden luxury-shadow relative">
                    <img src={item.image} className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110" alt={item.name} />
                    <div className="absolute inset-0 bg-brand-wood/10"></div>
                 </div>
                 <div className="w-full md:w-1/2">
                    <span className="text-brand-gold font-serif text-3xl font-black italic block mb-6">{item.price}</span>
                    <h4 className="text-3xl font-serif italic mb-6 leading-tight uppercase tracking-tight">{item.name}</h4>
                    <p className="text-brand-cream/40 text-lg leading-relaxed italic mb-8 border-l border-brand-gold/20 pl-6">{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-60 px-6 bg-brand-cream relative text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-10 font-display">Rezervacija mize</span>
          <h2 className="text-6xl md:text-8xl font-serif mb-16 tracking-tighter italic">Doživite harmonijo.</h2>
          <p className="text-brand-stone text-xl leading-relaxed mb-20 font-serif max-w-xl mx-auto italic font-light">
            Svetujemo rezervacijo vsaj 2 dni vnaprej. Pokličite nas in si zagotovite svojo mizo v našem pristnem ambientu.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="tel:+38656870170" className="bg-brand-wood text-white px-14 py-8 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-brand-gold hover:text-brand-wood hover:scale-105 transition-all duration-700 font-display shadow-2xl">
              Pokličite za mizo
            </a>
            <Link to="/kontakt" className="bg-white border border-brand-wood/10 text-brand-wood px-14 py-8 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-brand-warm-gray transition-all duration-700 font-display shadow-lg">
              Spletno povpraševanje
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
