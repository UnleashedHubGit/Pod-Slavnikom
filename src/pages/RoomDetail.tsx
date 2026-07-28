import { useSeo } from '../lib/seo';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Info, Check, ShieldAlert } from 'lucide-react';

const roomDetails = {
  'enoposteljna-soba-5': {
    name: 'Enoposteljna soba 5 (1+0)',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
    tag: 'Enoposteljna',
    meta: '1 oseba · 1+0',
    desc: 'Udobna in mirna enoposteljna soba (Soba 5), opremljena z naravnimi materiali. Popolna izbira za samostojne popotnike, planince in vse, ki si želijo miren kotiček za počitek po raziskovanju okolice Slavnika.',
    longDesc: 'Soba 5 je zasnovana za tiste, ki potujejo sami in cenijo pristen stik z naravo ter vrhunsko udobje. Nahaja se v mirnem delu gostišča in ponuja čudovit pogled na borov gozd, ki obdaja gostišče. Opremljena je s skrbno izbranimi kosi pohištva iz naravnega lesa, vrhunskim ležiščem za miren spanec in sodobnimi kopalniškimi prostori.',
    amenities: ['📶 Brezplačen WiFi', '🚿 Privatni tuš', '❄️ Klima', '🌲 Pogled na gozd', '📺 TV sprejemnik', '🧴 Naravna kozmetika'],
    bentralBookingUrl: 'https://www.bentral.com/service/embed/booking.js?id=5f7a55794d515f4d&unit=5f44597a4d415f4f&title=0&width=full&poweredby=0&lang=sl&key=5198bd0c408529a8fedb74d2925208ab',
    bentralCalendarUrl: 'https://www.bentral.com/service/embed/calendar.js?uid=5f44597a4d415f4f&last=true&poweredby=0&lang=sl&key=5198bd0c408529a8fedb74d2925208ab',
    bentralPriceListUrl: 'https://www.bentral.com/service/embed/price-list.js?uid=5f44597a4d415f4f&id=5f7a55794d515f4d&poweredby=0&lang=sl&key=5198bd0c408529a8fedb74d2925208ab'
  },
  'dvoposteljna-soba': {
    name: 'Dvoposteljna soba 1, 2, 3, 4 (2+0)',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80',
    tag: 'Dvoposteljna',
    meta: '2 osebi · 2+0',
    desc: 'Prijetne dvoposteljne sobe (Sobe 1, 2, 3, 4) s toplim lesenim pohištvom in umerjeno svetlobo. Ponujajo vso potrebno udobje za sproščen oddih pod Slavnikom.',
    longDesc: 'Naše štiri dvoposteljne sobe so idealno zatočišče za pare, ki iščejo miren odmik iz mestnega vrveža. Vsaka soba nosi svojo unikatno noto, združuje pa jih ljubezen do tradicije in naravnih materialov. Sobe ponujajo čudovit razgled, vrhunsko zakonsko posteljo in sodobno opremljeno kopalnico.',
    amenities: ['📶 Brezplačen WiFi', '🚿 Privatni tuš', '❄️ Klima', '🌲 Pogled na gozd ali hribe', '📺 TV sprejemnik', '🧴 Naravna kozmetika', '🧣 Mehke brisače'],
    bentralBookingUrl: 'https://www.bentral.com/service/embed/booking.js?id=5f7a55794d515f4d&unit=5f44597a4d675f4f&title=0&width=full&poweredby=0&lang=sl&key=5198bd0c408529a8fedb74d2925208ab',
    bentralCalendarUrl: 'https://www.bentral.com/service/embed/calendar.js?uid=5f44597a4d675f4f&last=true&poweredby=0&lang=sl&key=5198bd0c408529a8fedb74d2925208ab',
    bentralPriceListUrl: 'https://www.bentral.com/service/embed/price-list.js?uid=5f44597a4d675f4f&id=5f7a55794d515f4d&poweredby=0&lang=sl&key=5198bd0c408529a8fedb74d2925208ab'
  },
  'podstresna-suite': {
    name: 'Podstrešna suite s prosto stoječo kadjo',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
    tag: 'Ekskluzivno',
    meta: '2 osebi · Suite',
    desc: 'Čudovita in romantična podstrešna suite, katere osrednji del je prosto stoječa kad za vrhunsko sprostitev v dvoje. Popolno gnezdo za nepozabne trenutke.',
    longDesc: 'Najprestižnejša nastanitev v našem gostišču je zasnovana z mislijo na popolno romantiko in estetiko. Prostorna podstrešna suite z visokimi stropi ponuja izjemno prostornost ter intimnost. Prosto stoječa kad neposredno v sobi ponuja kraljevsko sprostitev ob soju sveč po dolgem dnevu v naravi ali wellnessu.',
    amenities: ['📶 Brezplačen WiFi', '🛁 Prosto stoječa kad v sobi', '🌿 Balkon obrnjen proti vrtu', '❄️ Klima', '📺 Velik TV sprejemnik', '🧴 Premium kozmetika', '☕ Kavni kotiček', '🥋 Kopalni plašči'],
    bentralBookingUrl: 'https://www.bentral.com/service/embed/booking.js?id=5f7a55794d515f4d&unit=5f5459334f54494d&title=0&width=full&poweredby=0&lang=sl&key=5198bd0c408529a8fedb74d2925208ab',
    bentralCalendarUrl: 'https://www.bentral.com/service/embed/calendar.js?uid=5f5459334f54494d&last=true&poweredby=0&lang=sl&key=5198bd0c408529a8fedb74d2925208ab',
    bentralPriceListUrl: 'https://www.bentral.com/service/embed/price-list.js?uid=5f5459334f54494d&id=5f7a55794d515f4d&poweredby=0&lang=sl&key=5198bd0c408529a8fedb74d2925208ab'
  }
};

function BentralWidget({ url }: { url: string }) {
  const srcDoc = `
    <!DOCTYPE html>
    <html lang="sl">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <style>
        body {
          margin: 0;
          padding: 10px;
          background: transparent;
          font-family: 'Montserrat', sans-serif;
          color: #2d2a26;
          overflow: hidden; /* Prevent internal scrollbars in body */
        }
        /* Custom reset to align with boutique style */
        .bentral-calendar, .bentral-booking, .bentral-price-list {
          font-family: 'Montserrat', sans-serif !important;
        }
        input, select, button, td, th {
          font-family: 'Montserrat', sans-serif !important;
        }
        #bentral-booking-form, .bentral-container {
          max-width: 100% !important;
          width: 100% !important;
        }
        /* Elegance enhancements */
        table {
          border-collapse: collapse !important;
          width: 100% !important;
        }
        th {
          background-color: #2d4a2f !important;
          color: #f5f0e8 !important;
          font-weight: 500 !important;
        }
        .btn-bentral, input[type="submit"] {
          background-color: #c4a35a !important;
          color: #1a2a1e !important;
          border-radius: 9999px !important;
          font-weight: 600 !important;
          text-transform: uppercase !important;
          letter-spacing: 0.15em !important;
          padding: 12px 28px !important;
          border: none !important;
          cursor: pointer !important;
          transition: all 0.3s !important;
        }
        .btn-bentral:hover, input[type="submit"]:hover {
          background-color: #e8c97a !important;
        }
      </style>
    </head>
    <body>
      <div class="bentral-container">
        <script src="${url}"></script>
      </div>
      <script>
        window.addEventListener('load', () => {
          const updateHeight = () => {
            const height = document.body.scrollHeight || document.documentElement.scrollHeight;
            if (window.frameElement) {
              window.frameElement.style.height = (height + 30) + 'px';
            }
          };
          
          updateHeight();
          // Periodical checks to accommodate external JS injecting contents
          setTimeout(updateHeight, 300);
          setTimeout(updateHeight, 800);
          setTimeout(updateHeight, 1500);
          setTimeout(updateHeight, 3000);
          setTimeout(updateHeight, 5000);
          
          window.addEventListener('resize', updateHeight);
          
          const observer = new MutationObserver(updateHeight);
          observer.observe(document.body, { 
            attributes: true, 
            childList: true, 
            subtree: true 
          });
        });
      </script>
    </body>
    </html>
  `;

  return (
    <div className="w-full bg-white rounded-3xl border border-brand-gold/15 p-4 shadow-sm overflow-hidden">
      <iframe
        srcDoc={srcDoc}
        className="w-full border-0 transition-all duration-300"
        style={{ height: '500px', minHeight: '150px' }}
        title="Bentral Widget"
        scrolling="no"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      />
    </div>
  );
}

export default function RoomDetail() {
  const { roomId } = useParams<{ roomId: string }>();

  const room = roomId ? roomDetails[roomId as keyof typeof roomDetails] : null;

  useSeo(
    room ? `${room.name} | Sobe Pod Slavnikom` : 'Soba | Pod Slavnikom',
    room ? room.desc : 'Nastanitev v gostišču Pod Slavnikom ob vznožju Slavnika. Neposredna rezervacija prek sistema Bentral.',
  );

  if (!room) {
    return (
      <div className="min-h-screen bg-brand-cream py-32 px-6 text-center flex flex-col items-center justify-center">
        <p className="font-serif text-3xl italic text-brand-wood mb-6">Soba ni bila najdena</p>
        <Link to="/sobe" className="bg-brand-wood text-brand-cream px-8 py-3 rounded-full font-display text-xs uppercase tracking-widest font-semibold hover:bg-brand-gold hover:text-brand-wood transition-colors">
          Nazaj na vse sobe
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-brand-cream-soft min-h-screen pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Back navigation */}
        <Link 
          to="/sobe" 
          className="relative z-30 inline-flex items-center gap-2 text-brand-wood-deep/60 hover:text-brand-gold text-xs uppercase tracking-widest font-black font-display mb-12 transition-colors group cursor-pointer pointer-events-auto"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Nazaj na vse sobe</span>
        </Link>

        {/* Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Room info (left side) */}
          <div className="lg:col-span-7 space-y-8 lg:sticky lg:top-32 h-fit">
            <div className="aspect-[4/3] rounded-[32px] overflow-hidden border border-brand-gold/15 relative luxury-shadow">
              <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
              <div className="absolute top-6 left-6 bg-brand-gold text-brand-wood text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full shadow-md">
                {room.tag}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-brand-gold text-[10px] uppercase tracking-[0.3em] font-black font-display">{room.meta}</p>
              <h1 className="font-serif text-3xl md:text-4xl text-brand-wood leading-tight">{room.name}</h1>
              <p className="text-brand-stone text-sm leading-relaxed font-sans">{room.desc}</p>
              <p className="text-brand-stone/80 text-sm leading-relaxed font-sans">{room.longDesc}</p>
            </div>

            <div className="pt-8 border-t border-brand-gold/15">
              <h3 className="font-serif text-lg text-brand-wood italic mb-6">Udobnosti in oprema</h3>
              <div className="grid grid-cols-2 gap-4">
                {room.amenities.map((item, id) => (
                  <div key={id} className="flex items-center gap-2.5 text-xs font-semibold text-brand-wood-deep font-sans">
                    <span className="w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold"><Check className="w-3 h-3" /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-brand-wood text-brand-cream border border-brand-gold/15 space-y-4 shadow-md font-sans">
              <div className="flex gap-3 items-start">
                <ShieldAlert className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-brand-gold uppercase tracking-wider font-display">Informacije o prihodu in odpovedi</h4>
                  <p className="text-xs text-brand-cream/70 leading-relaxed">
                    Prihod do 22.00. Odhod do 10.00. <br />
                    Pogoji odpovedi in plačila so prikazani ob rezervaciji.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bentral Reservation System (right side) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-[40px] border border-brand-gold/15 overflow-hidden luxury-shadow flex flex-col">
              
              {/* Info banner */}
              <div className="p-6 bg-brand-wood text-brand-cream border-b border-brand-gold/15 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold shrink-0">
                  <Info className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-base text-brand-gold-light italic">Direktna rezervacija</h3>
                  <p className="text-xs text-brand-cream/70 leading-relaxed font-sans">
                    Spodaj rezervirate neposredno pri nas prek sistema Bentral. Aktualne cene so prikazane v uradnem ceniku, pogoji odpovedi in plačila pa ob rezervaciji.
                  </p>
                </div>
              </div>

              {/* Vertical list of Bentral embeds */}
              <div className="p-6 md:p-8 space-y-12 bg-brand-cream-soft/30">
                
                {/* 1. Rezervacijski obrazec */}
                <div id="rezervacija" className="space-y-4">
                  <div className="flex items-center gap-3 pb-2 border-b border-brand-gold/10">
                    <span className="w-7 h-7 rounded-full bg-brand-wood text-brand-cream text-xs font-bold font-display flex items-center justify-center">1</span>
                    <h3 className="font-serif text-lg text-brand-wood font-bold">Rezervacijski obrazec</h3>
                  </div>
                  <p className="text-xs text-brand-stone font-sans">Izberite datume, vnesite svoje podatke in oddajte rezervacijo:</p>
                  <BentralWidget url={room.bentralBookingUrl} />
                </div>

                {/* 2. Cenik */}
                <div id="cenik" className="space-y-4">
                  <div className="flex items-center gap-3 pb-2 border-b border-brand-gold/10">
                    <span className="w-7 h-7 rounded-full bg-brand-wood text-brand-cream text-xs font-bold font-display flex items-center justify-center">2</span>
                    <h3 className="font-serif text-lg text-brand-wood font-bold">Informativni cenik</h3>
                  </div>
                  <p className="text-xs text-brand-stone font-sans">Pregled cen najema sobe glede na sezone:</p>
                  <BentralWidget url={room.bentralPriceListUrl} />
                </div>

              </div>

              {/* Call support */}
              <div className="p-6 bg-brand-wood-deep text-brand-cream/80 text-center text-xs font-sans border-t border-brand-gold/15 space-y-1">
                <p>Imate težave z vnosom podatkov ali vprašanje? Dosegljivi smo na <a href="tel:+38641321379" className="text-brand-gold font-bold hover:underline">+386 41 321 379</a></p>
                <p className="text-[10px] text-brand-cream/30">Gostišče Pod Slavnikom · Podgorje 1 · 6216 Podgorje</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
