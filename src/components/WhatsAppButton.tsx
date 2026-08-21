/**
 * Floating WhatsApp click-to-chat button.
 *
 * Deliberately dependency-free: a plain anchor to the official wa.me
 * endpoint, with no SDK, no embedded chat widget and no tracking pixel.
 * No pre-filled message is attached, so the guest opens a normal empty
 * conversation and writes in their own words.
 *
 * Layering: z-40 keeps it under the navbar (z-50), so the full-screen
 * mobile menu covers it rather than the button poking through. Bottom-right
 * placement clears the shared ImageSlider controls, whose arrows sit at the
 * vertical centre and whose dots sit bottom-centre.
 */

/** Owner-confirmed WhatsApp number, digits only for the wa.me endpoint. */
const WHATSAPP_NUMBER = '38641321379';
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pišite nam prek aplikacije WhatsApp (odpre se v novem oknu)"
      title="Pišite nam prek WhatsAppa"
      className="group fixed z-40 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] ring-1 ring-black/5 transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-cream"
      style={{
        bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))',
        right: 'calc(1rem + env(safe-area-inset-right, 0px))',
      }}
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 fill-current" aria-hidden="true" focusable="false">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.335 11.949-11.893a11.821 11.821 0 0 0-3.480-8.413Z" />
      </svg>

      {/* Desktop-only label; hidden from assistive tech since the anchor
          already carries a full aria-label. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 hidden lg:block whitespace-nowrap rounded-full bg-brand-wood px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream opacity-0 translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 font-display"
      >
        Pišite nam
      </span>
    </a>
  );
}
