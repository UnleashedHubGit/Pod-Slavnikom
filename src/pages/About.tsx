import { motion } from 'motion/react';
import { History, Heart, Map, Trophy } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      {/* Intro Section */}
      <section className="px-6 mb-40 max-w-[1400px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 relative z-10">
            <span className="text-brand-gold uppercase tracking-[0.5em] text-[9px] font-bold block mb-8 font-display">Naša Zapuščina</span>
            <h1 className="text-6xl md:text-8xl font-serif mb-12 leading-[0.85] tracking-tighter italic">Družinska <br /> tradicija.</h1>
            <div className="w-20 h-[1px] bg-brand-gold mb-12"></div>
            <p className="text-brand-stone text-xl mb-10 leading-relaxed font-serif max-w-sm">
              Zgodovina Gostilne Pod Slavnikom se je začela leta 1993, ko smo z vizijo o ohranjanju pristnih slovenskih okusov odprli vrata v majhni vasici Podgorje.
            </p>
            <p className="text-brand-stone text-base leading-relaxed font-light max-w-md">
              Danes naša gostilna ni le prostor za obrok, temveč destinacija za vse, ki iščejo pristen stik z naravo, vrhunsko kulinariko in srčno gostoljubje pod vznožjem gore.
            </p>
          </div>
          <div className="lg:col-span-7 relative group">
             <div className="rounded-[100px] oval-mask aspect-square lg:aspect-[16/14] overflow-hidden luxury-shadow relative">
                <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/IMG_20220519_183807_595.jpg" className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110" alt="Gostilna nekoč" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-brand-wood/10 group-hover:bg-transparent transition-colors"></div>
             </div>
             <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-brand-gold rounded-full flex items-center justify-center p-8 text-brand-wood text-center shadow-2xl skew-x-3 hidden md:flex border-4 border-white animate-pulse-slow">
                <p className="text-[10px] uppercase font-black tracking-widest leading-tight font-display">Od leta 1993 z vami</p>
             </div>
          </div>
        </div>
      </section>

      {/* Values Timeline - Improved Visuals */}
      <section className="bg-brand-wood text-brand-cream py-48 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-32">
            <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-4 font-display">Časovnica</span>
            <h2 className="text-5xl md:text-7xl font-serif tracking-tight italic">Mejniki na naši poti.</h2>
          </div>

          <div className="relative space-y-32 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-brand-gold/30 before:to-transparent">
            {[
              { year: '1993', icon: History, text: 'Prva postrežena večerja. Začetek naše poti z vizijo o najboljši divjačini v regiji.' },
              { year: '2008', icon: Map, text: 'Razširitev restavracije in pridobitev prvih 4 sob za goste sredi neokrnjene narave.' },
              { year: '2023', icon: Heart, text: 'Praznovanje 30. obletnice in odprtje popolnoma novega, modernega privatnega SPA-ja.' }
            ].map((item, i) => (
              <motion.div 
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full border border-brand-gold/20 bg-brand-wood text-brand-gold shadow-2xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-wood transition-all duration-700">
                  <item.icon className="w-6 h-6" />
                </div>
                <div className="w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] p-12 bg-white/5 backdrop-blur-xl rounded-[60px] border border-white/5 group-hover:border-brand-gold/20 transition-all duration-700 luxury-shadow">
                  <div className="font-serif text-5xl text-brand-gold mb-6 italic tracking-tight">{item.year}</div>
                  <div className="text-brand-cream/50 text-base leading-relaxed font-light">{item.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section - High End Grid */}
      <section className="py-48 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-brand-gold uppercase tracking-[0.5em] text-[10px] font-bold block mb-4 font-display">Vrednote</span>
          <h2 className="text-5xl font-serif tracking-tight italic">Na kaj prisegamo.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
           {[
              { icon: Heart, title: 'Gostoljubje', text: 'Vsakega gosta sprejmemo kot del naše družine. Osebni pristop je naša prioriteta.' },
              { icon: Map, title: 'Lokalnost', text: 'Sodelujemo z lokalnimi kmeti in spoštujemo naravne darove naše okolice.' },
              { icon: Trophy, title: 'Kakovost', text: 'Brez kompromisov pri sestavinah. Samo najboljše je dovolj dobro za našo mizo.' },
              { icon: Star, title: 'Avtentičnost', text: 'Ohranjamo izvorne recepte, ki nam dajejo unikatno identiteto na kulinaričnem zemljevidu.' }
           ].map((v, i) => (
             <div key={i} className="group text-center">
                <div className="w-20 h-20 bg-brand-warm-gray rounded-full flex items-center justify-center mx-auto text-brand-wood mb-10 group-hover:bg-brand-gold group-hover:scale-110 transition-all duration-700 luxury-shadow">
                  <v.icon className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                </div>
                <h3 className="text-xl font-bold font-display uppercase tracking-widest mb-4">{v.title}</h3>
                <div className="w-8 h-[1px] bg-brand-gold mx-auto mb-6 opacity-40 group-hover:w-16 transition-all"></div>
                <p className="text-sm text-brand-stone leading-relaxed font-serif">{v.text}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Full Width Image - Moody Finish */}
      <section className="h-[70vh] relative overflow-hidden">
         <img src="https://return.imindevelopment.com/wp-content/uploads/2026/04/712602758.jpg" className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-105" alt="Pod Slavnikom Okolica" referrerPolicy="no-referrer" />
         <div className="absolute inset-0 bg-brand-wood/30"></div>
         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="text-brand-gold text-[11px] uppercase tracking-[0.6em] font-bold mb-10 font-display">Pridružite se nam</span>
            <h2 className="text-white text-6xl md:text-[100px] font-serif leading-[0.85] tracking-tighter italic">Postanite del <br />naše zgodbe.</h2>
         </div>
      </section>
    </motion.div>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
