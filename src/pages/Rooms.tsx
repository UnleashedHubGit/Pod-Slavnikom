import { motion } from 'motion/react';
import { Bed, Users, Square, Wifi, Coffee, Wind, Sparkles, ArrowRight } from 'lucide-react';
import BookingForm from '../components/BookingForm';

const rooms = [
  {
    id: 1,
    name: 'Prenočišče št. 1',
    subtitle: 'Razgled na vas',
    type: 'Dvoposteljno prenočišče',
    desc: 'Svetla in prostorna soba z lastnim vhodom, opremljena z masivnim lesenim pohištvom za popolno udobje v osrčju Podgorja.',
    size: '22 m²',
    capacity: '2 osebi',
    image: 'https://return.imindevelopment.com/wp-content/uploads/2026/04/712604320.jpg'
  },
  {
    id: 2,
    name: 'Prenočišče št. 2',
    subtitle: 'Mirni kotiček',
    type: 'Dvoposteljno prenočišče',
    desc: 'Idealno za tiste, ki se želite popolnoma odklopiti. Soba je brez televizije, kar zagotavlja nemoten mir in pristen stik z okolico.',
    size: '20 m²',
    capacity: '2 osebi',
    image: 'https://return.imindevelopment.com/wp-content/uploads/2026/04/712604309.jpg',
    note: 'Brez TV'
  },
  {
    id: 3,
    name: 'Prenočišče št. 3',
    subtitle: 'Udobje in tišina',
    type: 'Dvoposteljno prenočišče',
    desc: 'Soba, kjer se prepletata funkcionalnost in domačnost. Zasnovana za popotnike, ki iščejo udobno bazo za raziskovanje Slavnika.',
    size: '21 m²',
    capacity: '2 osebi',
    image: 'https://return.imindevelopment.com/wp-content/uploads/2026/04/712604311.jpg',
    note: 'Brez delovne mize'
  },
  {
    id: 4,
    name: 'Prenočišče št. 4',
    subtitle: 'Kraški ambient',
    type: 'Zakonca ali par',
    desc: 'Najbolj priljubljena izbira za pare. Zvočno izolirana soba, ki nudi popolno zasebnost po dolgem dnevu pohodništva.',
    size: '22 m²',
    capacity: '2 osebe',
    image: 'https://return.imindevelopment.com/wp-content/uploads/2026/04/712604318.jpg'
  },
  {
    id: 5,
    name: 'Prenočišče št. 5',
    subtitle: 'Preprostost bivana',
    type: 'Dvoposteljno prenočišče',
    desc: 'Za tiste, ki cenite minimalističen pristop. Brez TV in mize, le vi in narava, ki vas obdaja.',
    size: '19 m²',
    capacity: '2 osebi',
    image: 'https://return.imindevelopment.com/wp-content/uploads/2026/04/712604400.jpg',
    note: 'Brez TV in mize'
  }
];

export default function Rooms() {
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
             <div className="vertical-rail text-brand-gold">Spanje & Mir</div>
          </div>
          <div className="lg:col-span-11 flex flex-col lg:flex-row gap-20 items-center justify-between">
            <div className="lg:w-5/12">
              <span className="text-brand-gold uppercase tracking-[0.5em] text-[9px] font-bold block mb-8 font-display">Vaše zatočišče</span>
              <h1 className="text-6xl md:text-8xl font-serif mb-12 leading-[0.85] tracking-tighter italic font-black uppercase">Sanje pod <br /> Slavnikom.</h1>
              <div className="w-20 h-[1px] bg-brand-gold mb-10"></div>
              <p className="text-brand-stone text-xl mb-12 leading-relaxed font-light italic max-w-sm font-serif">
                Naših pet na novo opremljenih sob je zasnovanih za miren spanec in prijetno bivanje v mirni vasici Podgorje.
              </p>
              <div className="space-y-6 text-brand-stone/70 text-sm leading-relaxed font-serif italic max-w-md">
                <p>Vsaka soba ima lasten vhod, klimatsko napravo, kopalnico in zvočno izolacijo. Gostom so na voljo brezplačen Wi-Fi, kakovostna posteljnina in toaletni pripomočki. Zajtrk je na voljo in vključen v rezervacije prek Bookinga.</p>
                <p className="text-brand-gold font-bold">Kmalu bo na voljo šesti apartma s privatnim SPA-jem.</p>
              </div>
            </div>
            <div className="lg:w-6/12 relative group w-full">
               <div className="rounded-[100px] md:rounded-[150px] oval-mask aspect-[4/5] md:aspect-[3/4] overflow-hidden luxury-shadow relative">
                  <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/712604439.jpg" className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-105" alt="Udobno prenočišče" />
                  <div className="absolute inset-0 bg-brand-wood/10"></div>
               </div>
               <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-56 h-56 bg-brand-gold rounded-full flex items-center justify-center p-10 text-brand-wood text-center shadow-2xl skew-y-3 hidden xl:flex border-4 border-brand-cream animate-pulse-slow z-20">
                  <p className="text-sm font-serif italic line-clamp-4 leading-tight opacity-90">"Zbudila sem se s ptičjim petjem in vonjem po sveže pečenem kruhu."</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Selection - Boutique Grid */}
      <section className="px-6 max-w-7xl mx-auto py-32 border-t border-brand-wood/5">
        <div className="text-center mb-32">
           <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-6 font-display">Izberite svojo sobo</span>
           <h2 className="text-5xl md:text-7xl font-serif italic tracking-tighter">Brezčasno udobje</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-48">
          {rooms.map((room, idx) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col group ${idx % 2 !== 0 ? 'md:pt-24' : ''}`}
            >
              <div className="relative mb-12 overflow-hidden rounded-[60px] md:rounded-[100px] luxury-shadow aspect-[4/5]">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-brand-wood/10 group-hover:bg-transparent transition-colors duration-1000"></div>
                {room.note && (
                  <div className="absolute top-10 left-10 bg-white text-brand-wood px-8 py-3 rounded-full text-[9px] uppercase font-black tracking-[0.2em] luxury-shadow font-display border border-brand-wood/5 z-10">
                    {room.note}
                  </div>
                )}
                <div className="absolute bottom-10 right-10 flex flex-col items-end gap-1 opacity-40 z-10">
                  <div className="w-12 h-[1px] bg-white"></div>
                  <div className="w-6 h-[1px] bg-white"></div>
                </div>
              </div>
              <div className="flex justify-between items-start mb-6">
                 <div>
                    <span className="text-brand-gold text-[9px] uppercase tracking-[0.4em] font-bold block mb-4 font-display opacity-60">{room.subtitle}</span>
                    <h3 className="text-4xl font-serif tracking-tight leading-none uppercase">{room.name}</h3>
                 </div>
                 <span className="text-sm font-serif italic text-brand-wood/20 group-hover:text-brand-gold transition-colors duration-700 font-bold">NO. 0{room.id}</span>
              </div>
              <p className="text-lg text-brand-stone leading-relaxed mb-10 font-serif italic opacity-80">
                {room.desc}
              </p>
              <div className="flex flex-wrap gap-x-10 gap-y-3 mb-10 border-y border-brand-wood/5 py-6">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold font-display text-brand-wood/60">
                   <Users className="w-3 h-3 text-brand-gold" /> {room.capacity}
                </div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold font-display text-brand-wood/60">
                   <Square className="w-3 h-3 text-brand-gold" /> {room.size}
                </div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold font-display text-brand-wood/60">
                   <Wifi className="w-3 h-3 text-brand-gold transition-all group-hover:scale-125" /> Brezplačen WiFi
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Booking form Integrated */}
      <section className="py-40 px-6 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-start">
           <div className="lg:w-1/2 lg:sticky lg:top-40">
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-10 font-display">Rezervacija</span>
              <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-[0.85] tracking-tighter italic">Začnite svojo <br /> <span className="not-italic">zgodbo.</span></h2>
              <div className="w-20 h-[1px] bg-brand-gold mb-12"></div>
              <p className="text-brand-stone text-xl mb-12 leading-relaxed font-serif italic font-light max-w-lg">
                Izpolnite povpraševanje za svoj termin. Naše osebje bo preverilo razpoložljivost in se vam oglasilo s potrditvijo ter vsemi podrobnostmi.
              </p>
              
              <div className="grid grid-cols-2 gap-12 mt-20 border-t border-brand-wood/10 pt-12">
                 <div className="flex flex-col gap-4">
                    <span className="text-brand-gold text-[9px] uppercase tracking-widest font-black font-display">Kontakt</span>
                    <p className="text-brand-wood font-medium">unleashed.official@gmail.com</p>
                 </div>
                 <div className="flex flex-col gap-4">
                    <span className="text-brand-gold text-[9px] uppercase tracking-widest font-black font-display">Lokacija</span>
                    <p className="text-brand-wood font-medium">Podgorje 1, Koper</p>
                 </div>
              </div>
           </div>
           
           <div className="lg:w-1/2 w-full">
              <BookingForm type="room" />
           </div>
        </div>
      </section>

      {/* Surroundings Section */}
      <section className="py-48 px-6 bg-brand-wood text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-32 items-center relative z-10">
           <div className="lg:w-1/2 relative group">
              <div className="rounded-[100px] overflow-hidden aspect-[4/5] luxury-shadow border border-white/5">
                 <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/712602758.jpg" className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-110" alt="Okolica" />
                 <div className="absolute inset-0 bg-brand-wood/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-gold rounded-full flex items-center justify-center p-6 border-4 border-brand-wood shadow-2xl skew-x-3 group-hover:skew-x-0 transition-transform duration-1000">
                 <Sparkles className="text-brand-wood w-12 h-12" />
              </div>
           </div>
           <div className="lg:w-1/2">
              <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-10 font-display">Okolica</span>
              <h2 className="text-6xl font-serif mb-16 tracking-tight italic">Umetnost miru.</h2>
              <div className="space-y-12">
                {[
                  { n: '01', t: 'Vrh Slavnika', d: 'Za ljubitelje panoramskih razgledov in gorskega zraka.' },
                  { n: '02', t: 'Pohodniške poti', d: 'Odlično izhodišče za vse stopnje zahtevnosti.' },
                  { n: '03', t: 'Prvinska narava', d: 'Tišina, ki jo prekinja le naravno šumenje gozdov.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-10 group cursor-default">
                    <span className="font-serif text-5xl text-brand-gold/20 group-hover:text-brand-gold transition-all duration-700">{item.n}</span>
                    <div className="pt-2">
                      <h4 className="font-serif text-2xl mb-3 leading-none italic group-hover:text-brand-gold transition-colors">{item.t}</h4>
                      <p className="text-brand-cream/40 text-base font-light leading-relaxed max-w-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>
    </motion.div>
  );
}
