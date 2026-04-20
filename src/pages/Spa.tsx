import { motion } from 'motion/react';
import { Thermometer, Waves, Sun, Sparkles, Sofa, Palette, CloudRain, Bath, ArrowRight, Heart } from 'lucide-react';
import BookingForm from '../components/BookingForm';

const spaFeatures = [
  { icon: Thermometer, title: 'Finska savna', desc: 'Tradicionalna vročina za globinsko razstrupljanje in sprostitev telesa.' },
  { icon: CloudRain, title: 'Turška savna (hamam)', desc: 'Nežna para, ki blagodejno vpliva na dihala.' },
  { icon: Bath, title: 'Jacuzzi', desc: 'Masažni bazen s toplimi curki pod sojem intime.' },
  { icon: Sofa, title: 'Ogrevani ležalniki', desc: 'Udobje, ki ohranja telesno toplino med cikli.' },
  { icon: Palette, title: 'Barvna terapija', desc: 'Poseben ambient za harmonijo vašega razpoloženja.' }
];

export default function Spa() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <section className="px-6 mb-40 max-w-[1400px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-1 hidden lg:block">
             <div className="vertical-rail text-brand-gold">Privatni Mir</div>
          </div>
          <div className="lg:col-span-11 flex flex-col lg:flex-row gap-20 items-center justify-between">
            <div className="lg:w-5/12">
              <span className="text-brand-gold uppercase tracking-[0.5em] text-[9px] font-bold block mb-8 font-display">nič drugega kot mir, toplina in popoln odklop.</span>
              <h1 className="text-6xl md:text-8xl font-serif mb-12 leading-[0.85] tracking-tighter italic font-black uppercase">Privatni SPA <br /> Pod Slavnikom.</h1>
              <div className="w-20 h-[1px] bg-brand-gold mb-10"></div>
              <p className="text-brand-stone text-xl mb-12 leading-relaxed font-light italic max-w-sm font-serif">
                Ekskluzivna izkušnja, rezervirana samo za vas. Brez gneče. Brez deljenja. Samo vi in vaš trenutek.
              </p>
              <div className="flex items-center gap-8">
                 <div className="w-16 h-[1px] bg-brand-gold"></div>
                 <div className="flex items-center gap-4">
                    <Heart className="w-4 h-4 text-brand-gold animate-pulse" />
                    <p className="text-brand-gold text-[11px] uppercase font-bold tracking-[0.4em] font-display">Pobeg od vsakdana</p>
                 </div>
              </div>
            </div>
            <div className="lg:w-6/12 relative group w-full">
               <div className="rounded-[100px] md:rounded-[150px] aspect-[4/5] md:aspect-[3/4] overflow-hidden luxury-shadow relative">
                  <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/hf_20260419_192735_41475472-07e9-4659-8797-7df84544be1d-scaled.png" className="w-full h-full object-cover transition-transform duration-[12s] group-hover:scale-105" alt="Privatni Wellness" />
                  <div className="absolute inset-x-0 bottom-0 p-12 md:p-24 bg-gradient-to-t from-brand-wood/80 via-transparent to-transparent">
                  </div>
                  <div className="absolute inset-0 bg-brand-wood/10"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Gallery - Atmospheric Focus */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto border-t border-brand-wood/5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 rounded-[80px] overflow-hidden luxury-shadow group h-[600px] relative">
               <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/hf_20260419_193107_b6e54a8e-bdce-4ced-9bec-83bdbf5aa085-scaled.png" className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110" alt="SPA 1" />
               <div className="absolute inset-0 bg-brand-wood/10 group-hover:opacity-0 transition-opacity"></div>
            </div>
            <div className="md:col-span-8 space-y-12">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
                  <div className="rounded-[80px] overflow-hidden luxury-shadow group h-[300px] md:h-full relative">
                     <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/hf_20260419_193419_3f1a3dcb-e698-4775-8ad2-fd19b789418e-scaled.png" className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110" alt="SPA 2" />
                  </div>
                  <div className="rounded-[80px] overflow-hidden luxury-shadow group h-[300px] md:h-full relative">
                     <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/hf_20260419_193520_5b837cb7-47a9-4651-8021-7a3e8c3a6aef-scaled.png" className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110" alt="SPA 3" />
                  </div>
               </div>
            </div>
        </div>
      </section>

      {/* Spa Features - Detailed Immersion */}
      <section className="bg-brand-wood text-brand-cream py-60 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
             <div>
                <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-10 font-display">Udobje in detajli</span>
                <h2 className="text-6xl font-serif mb-16 tracking-tight italic">Popoln odklop.</h2>
                <div className="space-y-12">
                   {spaFeatures.map((f, i) => (
                    <div key={i} className="flex gap-10 group">
                      <div className="w-14 h-14 shrink-0 rounded-full border border-brand-gold/20 flex items-center justify-center group-hover:bg-brand-gold transition-all duration-700">
                        <f.icon className="w-5 h-5 text-brand-gold group-hover:text-brand-wood" />
                      </div>
                      <div>
                        <h4 className="font-serif text-2xl mb-2 italic">{f.title}</h4>
                        <p className="text-brand-cream/40 text-sm leading-relaxed max-w-sm">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="bg-brand-cream/5 p-16 rounded-[100px] border border-white/5 backdrop-blur-2xl">
                <span className="text-brand-gold text-[9px] uppercase tracking-[0.4em] font-bold block mb-10 font-display">Vaš paket vključuje</span>
                <ul className="space-y-8 text-xl font-serif italic text-brand-cream/70">
                   <li className="flex items-center gap-6"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div> Domač zeliščni čaj</li>
                   <li className="flex items-center gap-6"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div> Sveže sezonsko sadje</li>
                   <li className="flex items-center gap-6"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div> Kakovostne brisače in rjuhe</li>
                   <li className="flex items-center gap-6"><div className="w-1.5 h-1.5 rounded-full bg-brand-gold"></div> Ohlajena penina (Premium paket)</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* SPA Booking Form Section */}
      <section className="py-48 px-6 bg-brand-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-start">
           <div className="lg:w-1/2 lg:sticky lg:top-40">
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-10 font-display">Rezervacija termina</span>
              <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-[0.85] tracking-tighter italic">Privatni mir <br /> <span className="not-italic">za vaju.</span></h2>
              <div className="w-20 h-[1px] bg-brand-gold mb-12"></div>
              
              <div className="space-y-12 mb-20">
                 <div className="flex gap-10">
                    <div className="text-brand-gold font-serif text-3xl font-black italic">60€</div>
                    <div>
                       <h4 className="font-serif text-xl italic mb-1">Osnovni paket (2 uri)</h4>
                       <p className="text-brand-stone/60 text-sm italic">Popoln popoldanski odklop.</p>
                    </div>
                 </div>
                 <div className="flex gap-10">
                    <div className="text-brand-gold font-serif text-3xl font-black italic">80€</div>
                    <div>
                       <h4 className="font-serif text-xl italic mb-1">Premium paket (3 ure)</h4>
                       <p className="text-brand-stone/60 text-sm italic">Vključuje ohlajeno penino.</p>
                    </div>
                 </div>
              </div>

              <div className="text-[10px] uppercase tracking-widest font-black text-brand-gold">Samo za vas — brez drugih gostov.</div>
           </div>
           
           <div className="lg:w-1/2 w-full">
              <BookingForm type="spa" title="Rezerviraj svoj SPA" subtitle="Preveri prosti termin" />
           </div>
        </div>
      </section>
    </motion.div>
  );
}
