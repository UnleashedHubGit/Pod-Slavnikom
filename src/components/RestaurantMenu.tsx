import { useRef, useState, type KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UtensilsCrossed, ChefHat, Wine, Users, Phone } from 'lucide-react';

/**
 * Accessible, responsive menu navigation for the restaurant page.
 *
 * The tab labels are client-approved (Degustacijski meniji, À la carte,
 * Vinska klet, Skupine & avtobusi). No detailed menu/price/wine/group content
 * has been approved yet, so each panel ships its full visual structure with a
 * neutral "content pending" notice for the specifics — nothing is invented.
 */

type MenuTab = {
  id: string;
  label: string;
  icon: typeof UtensilsCrossed;
  eyebrow: string;
  title: string;
  /** Short framing drawn only from already-approved copy. */
  intro: string;
  /** What the pending block is standing in for. */
  pendingFor: string;
  cta: { label: string; href: string };
};

const PHONE_HREF = 'tel:+38641321379';

const TABS: MenuTab[] = [
  {
    id: 'a-la-carte',
    label: 'À la carte',
    icon: UtensilsCrossed,
    eyebrow: 'Stalna ponudba',
    title: 'À la carte',
    intro:
      'Naša stalna ponudba temelji na divjačini iz slovenskih gozdov in ročno izdelanih raviolih — kilometer nič, od gozda do krožnika.',
    pendingFor: 'Podroben à la carte jedilnik s cenami',
    cta: { label: 'Rezervirajte mizo', href: PHONE_HREF },
  },
  {
    id: 'degustacijski-meniji',
    label: 'Degustacijski meniji',
    icon: ChefHat,
    eyebrow: 'Doživetja',
    title: 'Degustacijski meniji',
    intro:
      'Sezonski degustacijski meniji, med njimi naša podpisana Medvedja večerja (La Cena dell’Orso), postrežena v kamniti kleti.',
    pendingFor: 'Sestava hodov in cene posameznih menijev',
    cta: { label: 'Povprašajte za termin', href: PHONE_HREF },
  },
  {
    id: 'vinska-klet',
    label: 'Vinska klet',
    icon: Wine,
    eyebrow: 'Ob jedi',
    title: 'Vinska klet',
    intro:
      'Izbor vin iz naše kleti, ki dopolnjuje divjačinske jedi in degustacijske menije.',
    pendingFor: 'Vinska karta z etiketami in ceniki',
    cta: { label: 'Vprašajte o izboru', href: PHONE_HREF },
  },
  {
    id: 'skupine-avtobusi',
    label: 'Skupine & avtobusi',
    icon: Users,
    eyebrow: 'Za večje družbe',
    title: 'Skupine & avtobusi',
    intro:
      'Skupine in avtobusne goste sprejmemo po predhodnem dogovoru.',
    pendingFor: 'Pogoji, meniji in cene za skupine',
    cta: { label: 'Kontaktirajte nas', href: PHONE_HREF },
  },
];

// Default to À la carte — the most useful general menu tab.
const DEFAULT_INDEX = TABS.findIndex((t) => t.id === 'a-la-carte');

export default function RestaurantMenu() {
  const [active, setActive] = useState(DEFAULT_INDEX === -1 ? 0 : DEFAULT_INDEX);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (index: number) => {
    setActive(index);
    tabRefs.current[index]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = TABS.length - 1;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        focusTab(index === last ? 0 : index + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        focusTab(index === 0 ? last : index - 1);
        break;
      case 'Home':
        e.preventDefault();
        focusTab(0);
        break;
      case 'End':
        e.preventDefault();
        focusTab(last);
        break;
      default:
        break;
    }
  };

  const current = TABS[active];

  return (
    <section
      id="jedilnik"
      className="py-24 px-6 bg-brand-cream-soft border-y border-brand-gold/10 relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] font-bold block font-display">
            Jedilnik
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-wood leading-tight">
            Naša ponudba
          </h2>
        </div>

        {/* Tab row — one refined horizontal row on desktop, horizontal scroll on mobile */}
        <div className="relative border-b border-brand-wood/10 mb-10">
          <div
            role="tablist"
            aria-label="Restavracijski jedilnik"
            className="flex md:justify-center gap-2 md:gap-8 overflow-x-auto hide-scrollbar -mb-px"
          >
            {TABS.map((tab, index) => {
              const selected = index === active;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(index)}
                  onKeyDown={(e) => onKeyDown(e, index)}
                  className={`relative flex items-center gap-2 whitespace-nowrap px-3 md:px-4 pb-4 pt-2 font-display text-[11px] uppercase tracking-[0.2em] font-bold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream-soft rounded-sm ${
                    selected
                      ? 'text-brand-wood'
                      : 'text-brand-stone/60 hover:text-brand-wood'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{tab.label}</span>
                  {selected && (
                    <motion.span
                      layoutId="menuTabIndicator"
                      className="absolute left-0 right-0 -bottom-px h-[2px] bg-brand-gold"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            role="tabpanel"
            id={`panel-${current.id}`}
            aria-labelledby={`tab-${current.id}`}
            tabIndex={0}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[32px] border border-brand-gold/15 luxury-shadow p-8 md:p-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/50"
          >
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <span className="text-brand-gold uppercase tracking-[0.35em] text-[9px] font-bold block font-display">
                {current.eyebrow}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-brand-wood leading-tight">
                {current.title}
              </h3>
              <p className="text-brand-stone text-base leading-relaxed font-sans">
                {current.intro}
              </p>

              <div className="mt-2 rounded-2xl border border-dashed border-brand-gold/40 bg-brand-cream-soft/60 px-6 py-8">
                <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-gold/80 font-display mb-3">
                  {current.pendingFor}
                </p>
                <p className="text-brand-stone font-serif italic text-lg">
                  Vsebina bo dodana po potrditvi.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={current.cta.href}
                  className="inline-flex items-center gap-2 bg-brand-wood text-brand-cream px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest font-display hover:bg-brand-gold hover:text-brand-wood transition-colors duration-300 shadow-lg"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {current.cta.label}
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
