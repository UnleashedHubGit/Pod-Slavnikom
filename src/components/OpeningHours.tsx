import { Clock, Info } from 'lucide-react';

/**
 * Owner-confirmed restaurant opening hours, kept in one place so the footer,
 * the restaurant page and the contact page can never drift apart.
 */

type Row = { days: string; value: string; note?: string; closed?: boolean };

const FULL_ROWS: Row[] = [
  { days: 'Ponedeljek', value: 'Zaprto', closed: true },
  { days: 'Torek', value: 'Zaprto', closed: true },
  { days: 'Sreda', value: '19.00–22.00', note: 'ob predhodni rezervaciji' },
  { days: 'Četrtek', value: '19.00–22.00', note: 'ob predhodni rezervaciji' },
  { days: 'Petek', value: '12.00–15.00 in 19.00–22.00' },
  { days: 'Sobota', value: '12.00–22.00' },
  { days: 'Nedelja', value: '12.00–22.00' },
];

const COMPACT_ROWS: Row[] = [
  { days: 'Pon, Tor', value: 'Zaprto', closed: true },
  { days: 'Sre, Čet', value: '19.00–22.00', note: 'ob predhodni rezervaciji' },
  { days: 'Petek', value: '12.00–15.00, 19.00–22.00' },
  { days: 'Sob, Ned', value: '12.00–22.00' },
];

export const GUEST_DINNER_NOTE =
  'Za goste, ki bivajo pri nas, je gostilna za večerjo odprta vsak dan med 19.00 in 22.00 po predhodnem dogovoru.';

export const GROUPS_NOTE =
  'Za večje skupine smo po dogovoru na voljo tudi druge dni v tednu.';

/** Compact schedule for the dark footer column. */
export function OpeningHoursCompact() {
  return (
    <ul className="space-y-3 text-sm text-brand-cream/70 font-light font-sans">
      {COMPACT_ROWS.map((row) => (
        <li
          key={row.days}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-brand-cream/10 pb-2 last:border-b-0 last:pb-0"
        >
          <span className="text-brand-cream/60 shrink-0">{row.days}</span>
          <span className="ml-auto text-right">
            <span
              className={
                row.closed
                  ? 'text-brand-gold/90 font-semibold tracking-wide text-xs uppercase'
                  : 'text-brand-cream font-medium text-[13px] whitespace-nowrap'
              }
            >
              {row.value}
            </span>
            {row.note && (
              <span className="block text-[10px] text-brand-cream/45 leading-snug">
                {row.note}
              </span>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Full schedule for the restaurant and contact pages. */
export function OpeningHoursFull({ className = '' }: { className?: string }) {
  return (
    <div
      className={`bg-white rounded-[40px] border border-brand-gold/15 luxury-shadow p-8 md:p-12 ${className}`}
    >
      <div className="flex items-center gap-3 mb-8">
        <span className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold shrink-0">
          <Clock className="w-5 h-5" aria-hidden="true" />
        </span>
        <div>
          <span className="text-brand-gold uppercase tracking-[0.3em] text-[9px] font-bold block font-display">
            Gostilna
          </span>
          <h3 className="font-serif text-xl md:text-2xl text-brand-wood leading-tight">
            Odpiralni čas
          </h3>
        </div>
      </div>

      <ul className="space-y-3">
        {FULL_ROWS.map((row) => (
          <li
            key={row.days}
            className="flex flex-wrap items-baseline justify-between gap-x-3 sm:gap-x-6 gap-y-1 border-b border-brand-gold/10 pb-3 last:border-b-0 last:pb-0"
          >
            <span className="font-display text-[11px] uppercase tracking-[0.18em] font-bold text-brand-wood shrink-0">
              {row.days}
            </span>
            <span className="ml-auto text-right">
              <span
                className={
                  row.closed
                    ? 'font-display text-[11px] uppercase tracking-[0.18em] font-bold text-brand-gold'
                    : 'font-serif text-[15px] md:text-base text-brand-wood'
                }
              >
                {row.value}
              </span>
              {row.note && (
                <span className="block text-[11px] text-brand-stone/70 font-sans leading-snug">
                  {row.note}
                </span>
              )}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8 space-y-3">
        {[GUEST_DINNER_NOTE, GROUPS_NOTE].map((note) => (
          <p
            key={note}
            className="flex items-start gap-3 text-xs text-brand-stone leading-relaxed font-sans"
          >
            <Info className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
            <span>{note}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
