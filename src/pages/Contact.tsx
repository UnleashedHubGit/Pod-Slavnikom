import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, Send } from 'lucide-react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32"
    >
      <section className="px-6 mb-40 max-w-[1400px] mx-auto overflow-hidden">
        <div className="text-center pt-24 mb-32 relative">
          <span className="text-brand-gold uppercase tracking-[0.6em] text-[9px] font-bold block mb-10 font-display">Kontakt & Lokacija</span>
          <h1 className="text-6xl md:text-[90px] font-serif mb-12 max-w-5xl mx-auto leading-[0.85] tracking-tighter italic">Z veseljem vas <br /> pričakujemo.</h1>
          <div className="w-20 h-[1px] bg-brand-gold mx-auto mb-12"></div>
          <p className="text-brand-stone text-xl max-w-2xl mx-auto leading-relaxed font-serif italic">
            Imate vprašanje o naši ponudbi ali želite rezervirati svoj termin? Izpolnite spodnji obrazec ali nas kontaktirajte prek spodnjih podatkov.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          {/* Contact Details - Editorial Columns */}
          <div className="lg:col-span-5 space-y-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="group">
                <span className="text-brand-gold text-[9px] uppercase tracking-widest font-black block mb-6 font-display">Telefonska številka</span>
                <a href="tel:+38656870170" className="text-2xl font-serif text-brand-wood hover:text-brand-gold transition-colors duration-500 italic block underline-offset-8 decoration-brand-gold/20 hover:decoration-brand-gold">+386 5 687 01 70</a>
                <p className="text-xs text-brand-stone/60 mt-4 font-light">Za takojšnje rezervacije in vprašanja.</p>
              </div>
              <div className="group">
                <span className="text-brand-gold text-[9px] uppercase tracking-widest font-black block mb-6 font-display">Elektronska pošta</span>
                <a href="mailto:podslavnikom@gmail.com" className="text-2xl font-serif text-brand-wood hover:text-brand-gold transition-colors duration-500 italic block underline-offset-8 decoration-brand-gold/20 hover:decoration-brand-gold">podslavnikom@gmail.com</a>
                <p className="text-xs text-brand-stone/60 mt-4 font-light">Za povpraševanja in darilne bone.</p>
              </div>
            </div>

            <div className="bg-brand-wood text-brand-cream p-16 rounded-[60px] luxury-shadow relative overflow-hidden group">
               <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
               <div className="relative z-10">
                 <div className="flex items-start gap-6 mb-12">
                    <div className="w-14 h-14 bg-brand-gold rounded-2xl flex items-center justify-center shrink-0 shadow-2xl skew-x-3">
                       <MapPin className="w-6 h-6 text-brand-wood" />
                    </div>
                    <div>
                      <span className="text-brand-gold text-[9px] uppercase tracking-widest font-black block mb-2 font-display">Naš naslov</span>
                      <h4 className="font-serif text-3xl italic tracking-tight leading-none mb-3">Podgorje 1, <br/> Koper 6216</h4>
                      <p className="text-brand-cream/40 text-xs font-light">Slovenija — Ob vznožju Slavnika</p>
                    </div>
                 </div>
                 
                 {/* Map Framing */}
                 <div className="w-full aspect-[16/10] rounded-[40px] overflow-hidden shadow-2xl relative border border-white/5 mb-12">
                    <iframe 
                      src="https://www.google.com/maps?q=Gosti%C5%A1%C4%8De%20s%20preno%C4%8Di%C5%A1%C4%8Di%20Pod%20Slavnikom&hl=si&z=16&output=embed" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    ></iframe>
                 </div>
                 
                 <div className="flex flex-col sm:flex-row gap-6">
                   <a href="https://share.google/ouZrP5566c06oagoZ" target="_blank" rel="noopener noreferrer" className="flex-1 bg-brand-gold text-brand-wood px-8 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold font-display text-center hover:bg-white transition-all duration-500 luxury-shadow">Odpri v Google Maps</a>
                   <div className="flex gap-4 justify-center">
                      <a href="#" className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-wood hover:border-brand-gold transition-all duration-500"><Instagram className="w-5 h-5" /></a>
                      <a href="#" className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-wood hover:border-brand-gold transition-all duration-500"><Facebook className="w-5 h-5" /></a>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Form - Boutique Editorial Style */}
          <div className="lg:col-span-7 bg-white p-10 md:p-20 rounded-[80px] luxury-shadow border border-brand-wood/5 relative">
            <div className="absolute top-10 right-10 opacity-5">
               <Send className="w-24 h-24 text-brand-wood" />
            </div>
            <h3 className="text-4xl md:text-5xl font-serif mb-12 text-brand-wood italic tracking-tight">Pošljite sporočilo.</h3>
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="block text-[9px] uppercase tracking-[0.4em] font-black text-brand-gold font-display">Ime in priimek</label>
                  <input type="text" className="w-full bg-brand-warm-gray/50 border-b border-brand-wood/10 rounded-2xl p-6 focus:bg-white focus:border-brand-gold transition-all outline-none font-serif italic text-lg" placeholder="Janez Novak" />
                </div>
                <div className="space-y-4">
                  <label className="block text-[9px] uppercase tracking-[0.4em] font-black text-brand-gold font-display">E-naslov</label>
                  <input type="email" className="w-full bg-brand-warm-gray/50 border-b border-brand-wood/10 rounded-2xl p-6 focus:bg-white focus:border-brand-gold transition-all outline-none font-serif italic text-lg" placeholder="janez@primer.si" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="block text-[9px] uppercase tracking-[0.4em] font-black text-brand-gold font-display">Vrsta povpraševanja</label>
                <div className="relative">
                  <select className="w-full bg-brand-warm-gray/50 border-b border-brand-wood/10 rounded-2xl p-6 focus:bg-white focus:border-brand-gold transition-all outline-none appearance-none font-serif italic text-lg">
                    <option>Rezervacija mize v restavraciji</option>
                    <option>Nastanitev - Prenočišča</option>
                    <option>Rezervacija SPA termina</option>
                    <option>Darilni boni in paketi</option>
                    <option>Drugo</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gold">↓</div>
                </div>
              </div>
              <div className="space-y-4">
                <label className="block text-[9px] uppercase tracking-[0.4em] font-black text-brand-gold font-display">Vaše sporočilo</label>
                <textarea rows={5} className="w-full bg-brand-warm-gray/50 border-b border-brand-wood/10 rounded-[32px] p-6 focus:bg-white focus:border-brand-gold transition-all outline-none resize-none font-serif italic text-lg" placeholder="Zapišite vaše želje ali vprašanja..."></textarea>
              </div>
              <div className="flex items-start gap-4 p-4">
                <div className="pt-1">
                   <input type="checkbox" className="w-5 h-5 rounded accent-brand-gold" id="privacy" />
                </div>
                <label htmlFor="privacy" className="text-[10px] text-brand-stone leading-relaxed uppercase tracking-widest font-medium">Strinjam se z <a href="#" className="text-brand-gold underline decoration-brand-gold/20">varstvom osebnih podatkov</a> in pravili uporabe spletne strani.</label>
              </div>
              <button className="w-full bg-brand-wood text-white px-12 py-8 rounded-full text-xs uppercase tracking-[0.5em] font-black font-display hover:bg-brand-gold hover:scale-[1.02] transition-all duration-500 luxury-shadow flex items-center justify-center gap-6">
                Pošljite sporočilo <Send className="w-5 h-5 transition-transform group-hover:translate-x-2 group-hover:-translate-y-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Sections - Refined Reveal */}
      <section className="py-48 px-6 bg-brand-warm-gray/30 relative">
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-4 font-display">Pogosta vprašanja</span>
            <h2 className="text-5xl font-serif tracking-tight italic">Morda vas zanima.</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: 'Ali sprejemate večje skupine?', a: 'Da, naša gostilna lahko v notranjosti sprejme do 60 oseb, na terasi pa še dodatnih 40. Za skupine nad 10 oseb prosimo za predhodno rezervacijo in dogovor o meniju.' },
              { q: 'Ali se lahko prijavim v prenočišče kasneje?', a: 'Uradna prijava je možna med 14:00 in 20:00. V kolikor nameravate prispeti kasneje, nas prosim o tem vnaprej obvestite, da vam pripravimo dostop.' },
              { q: 'Ali so hišni ljubljenčki dobrodošli?', a: 'V restavraciji so vaši zvesti prijatelji dobrodošli. Glede psov v nastanitvenih objektih pa se prosimo predhodno posvetujte z nami (na voljo so določena prenočišča).' }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-[40px] p-8 md:p-12 border border-brand-wood/5 transition-all duration-500 luxury-shadow open:bg-white select-none">
                <summary className="flex justify-between items-center font-serif text-2xl italic tracking-tight cursor-pointer list-none">
                   <span>{faq.q}</span>
                   <div className="w-12 h-12 rounded-full bg-brand-warm-gray flex items-center justify-center group-open:rotate-180 group-open:bg-brand-gold group-open:text-brand-wood transition-all duration-700">↓</div>
                </summary>
                <div className="overflow-hidden">
                   <p className="mt-8 text-lg text-brand-stone leading-relaxed font-serif animate-in fade-in slide-in-from-top-4 duration-700">
                     {faq.a}
                   </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
