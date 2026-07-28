import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { OpeningHoursCompact, GUEST_DINNER_NOTE } from './OpeningHours';

export default function Footer() {
  return (
    <footer className="bg-brand-wood-deep text-brand-cream py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-10">
        <div className="space-y-8 lg:col-span-2">
          <Link to="/" aria-label="Pod Slavnikom – domača stran" className="block w-[180px] md:w-[210px] mb-2">
            <img
              src="/images/client/brand/pod-slavnikom-logo-on-dark.svg"
              alt=""
              className="w-full h-auto object-contain"
            />
          </Link>
          <p className="text-brand-cream/70 text-sm leading-relaxed max-w-sm font-light font-sans">
            Divjačina, ki ve, od kod prihaja. Wellness, ki je samo vaš. Soba, ki je ne boš zapustil hitro.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/podslavnikom/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Odpri Instagram profil Gostilne Pod Slavnikom"
              className="w-10 h-10 rounded-full border border-brand-cream/10 flex items-center justify-center text-brand-cream/60 hover:text-brand-gold hover:border-brand-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/gostilna.podslavnikom/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Odpri Facebook stran Gostilne Pod Slavnikom"
              className="w-10 h-10 rounded-full border border-brand-cream/10 flex items-center justify-center text-brand-cream/60 hover:text-brand-gold hover:border-brand-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              <Facebook className="w-4 h-4" aria-hidden="true" />
            </a>
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
              <a href="mailto:podslavnikom@gmail.com" className="hover:text-brand-gold transition-colors font-sans">podslavnikom@gmail.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-8">Urnik gostilne</h4>
          <OpeningHoursCompact />
          <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 font-sans space-y-3">
            <p className="text-xs leading-relaxed text-brand-cream/70">
              {GUEST_DINNER_NOTE}
            </p>
            <p className="text-xs leading-relaxed text-brand-cream/70">
              Nastanitve in SPA so na voljo 7 dni v tednu po predhodnem dogovoru.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 mt-20 border-t border-brand-cream/10 grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-8 text-center font-sans">
        {/* Left: copyright */}
        <p className="text-[10px] uppercase tracking-widest text-brand-cream/60 font-display md:text-left">
          © 2026 Gostišče Pod Slavnikom. Vse pravice pridržane.
        </p>

        {/* Center: language selector (SL active; EN/IT in preparation) */}
        <div
          className="flex justify-center gap-6 text-[10px] uppercase tracking-[0.3em] font-display"
          role="group"
          aria-label="Izbira jezika"
        >
          <span aria-current="true" className="text-brand-gold font-bold">SL</span>
          <button
            type="button"
            disabled
            aria-disabled="true"
            title="Angleška različica je v pripravi"
            className="text-brand-cream/70 cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:text-brand-gold"
          >
            EN
          </button>
          <button
            type="button"
            disabled
            aria-disabled="true"
            title="Italijanska različica je v pripravi"
            className="text-brand-cream/70 cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:text-brand-gold"
          >
            IT
          </button>
        </div>

        {/* Right: studio credit */}
        <p className="text-[10px] uppercase tracking-widest text-brand-cream/60 font-display md:text-right">
          Oblikovanje, razvoj in avtomatizacija:{' '}
          <a
            href="https://aithena.co/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Aithena (povezava se odpre v novem zavihku)"
            className="text-brand-cream/85 underline decoration-brand-gold/30 underline-offset-2 hover:text-brand-gold focus-visible:text-brand-gold focus-visible:outline-none transition-colors"
          >
            Aithena
          </a>
        </p>
      </div>
    </footer>
  );
}
