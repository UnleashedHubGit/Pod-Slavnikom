import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'O nas', path: '/o-nas' },
  { name: 'Gostilna', path: '/restavracija' },
  { name: 'Wellness', path: '/spa' },
  { name: 'Sobe', path: '/sobe' },
  { name: 'Paketi', path: '/paketi' },
  { name: 'Okolica', path: '/okolica' },
  { name: 'Kontakt', path: '/kontakt' },
];

// Desktop-only left/right grouping (mobile menu keeps navLinks' original order above)
const desktopLeftLinks = [
  { name: 'O nas', path: '/o-nas' },
  { name: 'Gostilna', path: '/restavracija' },
  { name: 'Sobe', path: '/sobe' },
  { name: 'Wellness', path: '/spa' },
];
const desktopRightLinks = [
  { name: 'Paketi', path: '/paketi' },
  { name: 'Okolica', path: '/okolica' },
  { name: 'Kontakt', path: '/kontakt' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';
  const useWhiteText = isHomePage && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out pointer-events-none ${
        scrolled ? 'bg-brand-cream/80 backdrop-blur-xl py-3 shadow-[0_1px_3px_0_rgba(45,27,16,0.02)]' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-8 md:px-12 pointer-events-auto">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          {/* Left Nav */}
          <div className="hidden lg:flex items-center space-x-6 col-start-1 min-w-0">
            {desktopLeftLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[9px] uppercase tracking-[0.5em] font-bold font-display transition-all duration-300 relative pb-2 whitespace-nowrap ${
                    isActive
                      ? 'text-brand-gold'
                      : useWhiteText
                        ? 'text-white/70 hover:text-white'
                        : 'text-brand-wood/50 hover:text-brand-wood'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-gold"
                      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Logo - optically and mathematically centered; reserved middle column keeps it independent of side group widths */}
          <Link
            to="/"
            aria-label="Pod Slavnikom – domača stran"
            className="col-start-2 justify-self-center px-4 group"
          >
            <img
              src={useWhiteText ? "/images/client/brand/pod-slavnikom-logo-on-dark.svg" : "/images/client/brand/pod-slavnikom-logo-on-light.svg"}
              alt=""
              className="w-[168px] md:w-[188px] xl:w-[208px] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Right Nav + Mobile Toggle */}
          <div className="flex items-center justify-end col-start-3 min-w-0">
            <div className="hidden lg:flex items-center space-x-6 min-w-0">
              {desktopRightLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-[9px] uppercase tracking-[0.5em] font-bold font-display transition-all duration-300 relative pb-2 whitespace-nowrap ${
                      isActive
                        ? 'text-brand-gold'
                        : useWhiteText
                          ? 'text-white/70 hover:text-white'
                          : 'text-brand-wood/50 hover:text-brand-wood'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-gold"
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                to="/kontakt"
                className={`px-6 py-3 -translate-y-[4px] rounded-full text-[9px] uppercase tracking-[0.4em] font-bold font-display transition-all duration-300 whitespace-nowrap ${
                  useWhiteText
                    ? 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand-wood'
                    : 'bg-brand-wood-deep text-brand-cream hover:bg-brand-gold hover:text-brand-wood-deep'
                }`}
              >
                Rezervacija
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              aria-label={isOpen ? 'Zapri meni' : 'Odpri meni'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              className={`lg:hidden p-2 transition-colors duration-300 ${
                useWhiteText ? 'text-white' : 'text-brand-wood'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-cream border-t border-brand-wood/10 shadow-xl lg:hidden h-screen px-6 py-8 pointer-events-auto"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-2xl font-serif ${
                    location.pathname === link.path ? 'text-brand-olive' : 'text-brand-wood'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/kontakt" 
                className="inline-flex bg-brand-wood text-brand-cream px-8 py-4 rounded-full text-lg font-medium hover:bg-brand-olive transition-colors w-full justify-center"
              >
                Rezerviraj zdaj
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
