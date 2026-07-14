import { motion } from 'motion/react';
import { Compass, ShieldCheck, Award, Heart } from 'lucide-react';

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

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-32"
    >
      {/* Editorial Header */}
      <section className="px-6 py-20 max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-brand-gold/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-5 relative z-10">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-8 font-display">O gostišču</span>
            <h1 className="text-4xl md:text-6xl font-serif mb-10 leading-[1.1] tracking-tight text-brand-wood">
              Nekateri kraji obstajajo, <br />
              <span className="italic text-brand-gold font-serif">da jih obiščeš.</span> <br />
              Ta obstaja, <br />
              <span className="italic text-brand-gold font-serif">da se v njem ustaviš.</span>
            </h1>
            <div className="w-16 h-[1px] bg-brand-gold mb-10"></div>
            <p className="text-brand-wood/80 text-lg mb-8 leading-relaxed font-serif italic max-w-md">
              Gostišče Pod Slavnikom ni hotel. Je hiša, ki ima dušo — in kuhinja, ki ima spomin. Za mizo pri nas ne sediš med tujci. Sediš tam, kjer so sedeli gostje, ki so se prvič ustavili le za eno noč in se vračali vsako jesen.
            </p>
          </div>
          <div className="lg:col-span-7 relative group">
             <div className="rounded-[80px] overflow-hidden aspect-[4/3] md:aspect-[16/11] luxury-shadow relative border border-brand-gold/10">
                <img 
                  src="/images/client/restaurant/restaurant-interior-01.jpg"
                  className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-105" 
                  alt="Notranjost gostišča" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-wood-deep/10 group-hover:bg-transparent transition-colors"></div>
             </div>
             <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-brand-gold rounded-full flex items-center justify-center p-6 text-brand-wood text-center shadow-2xl skew-x-3 hidden md:flex border-4 border-brand-cream z-10">
                <p className="text-[10px] uppercase font-black tracking-widest leading-tight font-display">Od leta 1993 z vami</p>
             </div>
          </div>
        </div>
      </section>

      {/* Narrative Section with Forest Background */}
      <section className="bg-brand-wood text-brand-cream py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
          <p className="text-xl md:text-2xl leading-relaxed font-serif italic text-brand-cream/90 font-light">
            "Podgorje je vasica, kjer čas teče drugače. Na meji dveh svetov — mediteranskega in celinskega, Krasa in Istre, gozda in morja. Ta razpoka med klimama je razlog, da tu divjačina okusi drugače, da je pomlad daljša in jesen bogatejša."
          </p>
          <div className="w-12 h-[1px] bg-brand-gold mx-auto"></div>
          <p className="text-base text-brand-cream/70 leading-relaxed font-sans max-w-2xl mx-auto">
            Danes Pod Slavnikom ponuja, kar malo krajev zmore: da v enem mestu poješ divjačino iz slovenskih gozdov, se v zasebnem wellnessu odmakneš od sveta in zaspiš tam, kjer je edini zvok burja, ki šviga med borovci.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8">
            <span className="text-[11px] uppercase tracking-wider font-bold text-brand-gold bg-brand-olive/30 border border-brand-gold/20 px-6 py-3 rounded-full hover:bg-brand-olive/50 transition-colors cursor-default">🏔 Slavnik 1028 m</span>
            <span className="text-[11px] uppercase tracking-wider font-bold text-brand-gold bg-brand-olive/30 border border-brand-gold/20 px-6 py-3 rounded-full hover:bg-brand-olive/50 transition-colors cursor-default">🚗 20 min Koper</span>
            <span className="text-[11px] uppercase tracking-wider font-bold text-brand-gold bg-brand-olive/30 border border-brand-gold/20 px-6 py-3 rounded-full hover:bg-brand-olive/50 transition-colors cursor-default">🚗 20 min Trst</span>
            <span className="text-[11px] uppercase tracking-wider font-bold text-brand-gold bg-brand-olive/30 border border-brand-gold/20 px-6 py-3 rounded-full hover:bg-brand-olive/50 transition-colors cursor-default">🌊 25 min Piran</span>
          </div>
        </div>
      </section>

      {/* Values & Philosophy Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="text-center mb-24">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block mb-4 font-display">Vrednote</span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-brand-wood">Naša filozofija in načela.</h2>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10"
        >
           {[
              { icon: Heart, title: 'Gostoljubje', text: 'Vsakega gosta sprejmemo kot del naše družine. Osebni pristop je naša prioriteta.' },
              { icon: Compass, title: 'Lokalnost', text: 'Sodelujemo z lokalnimi dobavitelji in spoštujemo naravne darove naše okolice.' },
              { icon: Award, title: 'Kakovost', text: 'Brez kompromisov pri sestavinah. Samo najboljše iz narave je dovolj dobro za našo mizo.' },
              { icon: ShieldCheck, title: 'Avtentičnost', text: 'Ohranjamo izvorne recepte in tradicijo proizvodnje domačih raviolov ter kulinarike.' }
           ].map((v, i) => (
             <motion.div 
               key={i} 
               variants={cardVariants}
               className="group text-center bg-brand-cream-soft p-10 rounded-[40px] border border-brand-gold/10 hover:border-brand-gold/30 hover:bg-white transition-all duration-500 hover:scale-[1.02] luxury-shadow"
             >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto text-brand-gold mb-8 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 border border-brand-gold/20">
                  <v.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display uppercase tracking-widest mb-4 text-brand-wood">{v.title}</h3>
                <p className="text-sm text-brand-stone leading-relaxed font-sans">{v.text}</p>
             </motion.div>
           ))}
         </motion.div>
      </section>

      {/* Atmospheric Full Screen Photo */}
      <section className="h-[60vh] relative overflow-hidden">
         <img
           src="/images/client/additional/main-exterior-03.jpg"
           className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-105"
           alt="Pod Slavnikom Okolica"
           referrerPolicy="no-referrer"
         />
         <div className="absolute inset-0 bg-brand-wood-deep/30"></div>
         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <span className="text-brand-gold text-[11px] uppercase tracking-[0.5em] font-bold mb-6 font-display">Pridružite se nam</span>
            <h2 className="text-white text-4xl md:text-7xl font-serif leading-[1.1] tracking-tight italic">
              Zaspite tam, kjer je edini <br />
              zvok burja med borovci.
            </h2>
         </div>
      </section>
    </motion.div>
  );
}
