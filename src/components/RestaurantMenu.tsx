import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UtensilsCrossed, ChefHat, Wine, Users, Phone, Mail } from 'lucide-react';

/**
 * Accessible, responsive menu navigation for the restaurant page.
 *
 * The tab labels are client-approved (Degustacijski meniji, À la carte,
 * Vinska klet, Skupine & avtobusi). The group content is owner-confirmed and
 * fully implemented; the menu, degustation and wine documents are still being
 * prepared by the owner, so those panels keep a neutral pending state instead
 * of invented dishes, prices or download links.
 */

type Stat = { value: string; label: string; unit?: string };

type MenuTab = {
  id: string;
  label: string;
  icon: typeof UtensilsCrossed;
  eyebrow: string;
  title: string;
  /** Short framing drawn only from already-approved copy. */
  intro: string;
  /** Additional owner-confirmed paragraphs (implemented tabs only). */
  body?: string[];
  stats?: Stat[];
  /** Present only while the owner's document is still pending. */
  pendingFor?: string;
  cta: { label: string; href: string; icon: typeof Phone };
};

const PHONE_HREF = 'tel:+38641321379';
const GROUPS_MAIL_HREF =
  'mailto:podslavnikom@gmail.com?subject=Povpra%C5%A1evanje%20za%20skupine';

const TABS: MenuTab[] = [
  {
    id: 'a-la-carte',
    label: 'À la carte',
    icon: UtensilsCrossed,
    eyebrow: 'Stalna ponudba',
    title: 'À la carte',
    intro:
      'Naša stalna ponudba temelji na divjačini iz slovenskih gozdov in ročno pripravljenih raviolih, njokih in fužih.',
    pendingFor: 'Jedilnik à la carte',
    cta: { label: 'Rezervirajte mizo', href: PHONE_HREF, icon: Phone },
  },
  {
    id: 'degustacijski-meniji',
    label: 'Degustacijski meniji',
    icon: ChefHat,
    eyebrow: 'Doživetja',
    title: 'Degustacijski meniji',
    intro:
      'Degustacijski meniji so del naše ponudbe, med njimi meni Medved v objemu gastronomije, postrežen v kamniti kleti.',
    pendingFor: 'Degustacijski meniji',
    cta: { label: 'Povprašajte za termin', href: PHONE_HREF, icon: Phone },
  },
  {
    id: 'vinska-klet',
    label: 'Vinska klet',
    icon: Wine,
    eyebrow: 'Ob jedi',
    title: 'Vinska klet',
    intro:
      'Izbor vin iz naše kleti, ki dopolnjuje divjačinske jedi in degustacijske menije.',
    pendingFor: 'Vinska karta',
    cta: { label: 'Vprašajte o izboru', href: PHONE_HREF, icon: Phone },
  },
  {
    id: 'skupine-avtobusi',
    label: 'Skupine & avtobusi',
    icon: Users,
    eyebrow: 'Za večje družbe',
    title: 'Velika sala do 60 oseb in zasebna klet do 20 oseb',
    intro:
      'Velika sala sprejme do 60 oseb za praznovanja, poslovna kosila in avtobusne ture. Kamnita klet pa je vaš zasebni prostor za do 20 oseb, za sestanke, degustacije in bolj intimna druženja.',
    body: [
      'Divjačina je naša osnova, ni pa naša edina zgodba. Za skupine pripravimo tudi telečje pečenke, krače in druge vrste mesa. Povejte nam, kaj si želite, in sestavimo meni po vaši meri.',
      'Skupinski meniji se začnejo pri 25 € na osebo.',
      'Za večje skupine smo po predhodnem dogovoru na voljo vse dni v tednu.',
      'Povejte nam datum in število oseb, pripravimo predlog menija.',
    ],
    stats: [
      { value: '60', label: 'Velika sala', unit: 'oseb' },
      { value: '20', label: 'Zasebna klet', unit: 'oseb' },
      { value: '25 €', label: 'Meni od', unit: 'na osebo' },
    ],
    cta: { label: 'Povpraševanje za skupine', href: GROUPS_MAIL_HREF, icon: Mail },
  },
];

// Default to À la carte — the most useful general menu tab.
const DEFAULT_INDEX = TABS.findIndex((t) => t.id === 'a-la-carte');

export default function RestaurantMenu() {
  const [active, setActive] = useState(DEFAULT_INDEX === -1 ? 0 : DEFAULT_INDEX);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [hasMoreTabs, setHasMoreTabs] = useState(false);

  const syncScrollHint = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setHasMoreTabs(el.scrollWidth - el.clientWidth - el.scrollLeft > 4);
  }, []);

  useEffect(() => {
    syncScrollHint();
    const el = scrollerRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver(syncScrollHint);
    observer.observe(el);
    // Also watch the row itself, so the hint settles once the display font loads
    // and the tab labels take their final width.
    if (el.firstElementChild) observer.observe(el.firstElementChild);
    return () => observer.disconnect();
  }, [syncScrollHint]);

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
  const CtaIcon = current.cta.icon;

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

        {/* Tab row — one refined centred row when it fits, horizontal scroll when it does not */}
        <div className="relative border-b border-brand-wood/10 mb-10">
          <div
            ref={scrollerRef}
            onScroll={syncScrollHint}
            className="overflow-x-auto hide-scrollbar -mb-px"
          >
            <div
              role="tablist"
              aria-label="Restavracijski jedilnik"
              // w-max + mx-auto centres the row while it fits and falls back to a
              // plain left-aligned scroll row once it does not, so no tab can end
              // up clipped outside the scrollable area.
              className="flex w-max mx-auto gap-2 md:gap-8"
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
          {/* Subtle hint that there are more tabs to the right, shown only while
              the row actually scrolls and there is something left to reveal. */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute right-0 top-0 bottom-px w-12 bg-gradient-to-l from-brand-cream-soft to-transparent transition-opacity duration-300 ${
              hasMoreTabs ? 'opacity-100' : 'opacity-0'
            }`}
          />
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
              <h3 className="text-2xl md:text-3xl font-serif text-brand-wood leading-tight text-balance">
                {current.title}
              </h3>
              <p className="text-brand-stone text-base leading-relaxed font-sans">
                {current.intro}
              </p>

              {current.body?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-brand-stone text-base leading-relaxed font-sans"
                >
                  {paragraph}
                </p>
              ))}

              {current.stats && (
                <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {current.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-brand-gold/20 bg-brand-cream-soft/60 px-4 py-6"
                    >
                      <dd className="font-serif text-3xl md:text-4xl text-brand-wood font-black leading-none">
                        {stat.value}
                      </dd>
                      <dt className="mt-3 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold font-display">
                        {stat.label}
                      </dt>
                      {stat.unit && (
                        <p className="text-[11px] text-brand-stone/70 font-sans mt-1">
                          {stat.unit}
                        </p>
                      )}
                    </div>
                  ))}
                </dl>
              )}

              {current.pendingFor && (
                <div className="mt-2 rounded-2xl border border-dashed border-brand-gold/40 bg-brand-cream-soft/60 px-6 py-8">
                  <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-gold/80 font-display mb-3">
                    {current.pendingFor}
                  </p>
                  <p className="text-brand-stone font-serif italic text-lg leading-relaxed">
                    Dokument je v pripravi in bo objavljen, ko bo na voljo.
                  </p>
                </div>
              )}

              <div className="pt-2">
                <a
                  href={current.cta.href}
                  className="inline-flex items-center gap-2 bg-brand-wood text-brand-cream px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest font-display hover:bg-brand-gold hover:text-brand-wood transition-colors duration-300 shadow-lg"
                >
                  <CtaIcon className="w-4 h-4 shrink-0" aria-hidden="true" />
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
