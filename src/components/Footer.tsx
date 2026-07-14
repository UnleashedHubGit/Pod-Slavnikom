import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-wood-deep text-brand-cream py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <Link to="/" className="block w-[165px] md:w-[180px] mb-4">
              <img
                src="/images/client/brand/pod-slavnikom-logo-on-dark.svg"
                alt="Pod Slavnikom"
                className="w-full h-auto object-contain"
              />
            </Link>
            <div className="w-12 h-[1px] bg-brand-gold"></div>
          </div>
          <p className="text-brand-cream/60 text-sm leading-relaxed max-w-xs font-light font-sans">
            Divjačina, ki ve, od kod prihaja. Wellness, ki je samo vaš. Soba, ki je ne boš zapustil hitro.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all duration-500"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all duration-500"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-8">Ponudba</h4>
          <ul className="space-y-4 text-sm text-brand-cream/60 font-light font-sans">
            <li><Link to="/restavracija" className="hover:text-brand-gold transition-colors boutique-underline">Gostilna</Link></li>
            <li><Link to="/restavracija" className="hover:text-brand-gold transition-colors boutique-underline">Medvedja večerja</Link></li>
            <li><Link to="/spa" className="hover:text-brand-gold transition-colors boutique-underline">Wellness SPA</Link></li>
            <li><Link to="/sobe" className="hover:text-brand-gold transition-colors boutique-underline">Nastanitev</Link></li>
            <li><Link to="/restavracija" className="hover:text-brand-gold transition-colors boutique-underline">Ravioli & B2B</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-8">Kontakt</h4>
          <ul className="space-y-6 text-sm text-brand-cream/60 font-light font-sans">
            <li className="flex items-start gap-4">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-1" />
              <span className="leading-relaxed">Podgorje 1, <br/> 6216 Podgorje, Slovenija</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-4 h-4 text-brand-gold shrink-0" />
              <a href="tel:+38641321379" className="hover:text-brand-gold transition-colors">+386 41 321 379</a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-4 h-4 text-brand-gold shrink-0" />
              <a href="mailto:info@podslavnikom.si" className="hover:text-brand-gold transition-colors font-sans">info@podslavnikom.si</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-8">Urnik</h4>
          <ul className="space-y-4 text-sm text-brand-cream/60 font-light font-sans">
            <li className="flex justify-between border-b border-brand-cream/5 pb-2">
              <span>Sreda – Nedelja</span>
              <span className="text-brand-cream font-medium">12:00 – 22:00</span>
            </li>
            <li className="flex justify-between text-brand-gold/40">
              <span>Ponedeljek, Torek</span>
              <span>ZAPRTO</span>
            </li>
          </ul>
          <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/5 font-sans">
            <p className="text-[9px] uppercase tracking-[0.2em] leading-relaxed text-brand-cream/40">
              Nastanitve in SPA so na voljo 7 dni v tednu po predhodnem dogovoru.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 mt-20 border-t border-brand-cream/5 flex flex-col md:flex-row justify-between items-center gap-8 font-sans">
        <p className="text-[10px] uppercase tracking-widest text-brand-cream/30 font-display">
          © 2026 Gostišče Pod Slavnikom · Vse pravice pridržane
        </p>
        <div className="flex gap-10 text-[9px] uppercase tracking-[0.3em] text-brand-cream/30 font-display">
          <span>SI</span>
          <span className="opacity-40">EN</span>
          <span className="opacity-40">IT</span>
        </div>
      </div>
    </footer>
  );
}
