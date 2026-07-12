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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 pointer-events-none ${
        scrolled ? 'bg-brand-cream/80 backdrop-blur-xl py-3 shadow-[0_1px_3px_0_rgba(45,27,16,0.02)]' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-8 md:px-12 pointer-events-auto">
        <div className="flex items-center justify-between">
          {/* Left Nav */}
          <div className="hidden lg:flex items-center space-x-12 flex-1">
            {navLinks.slice(0, 3).map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[9px] uppercase tracking-[0.5em] font-bold font-display transition-all duration-500 relative pb-2 whitespace-nowrap ${
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

          {/* Logo Center */}
          <Link to="/" className="flex flex-col items-center group px-12 scale-90 md:scale-100">
            <div className="h-16 md:h-20 transition-all duration-700 group-hover:scale-105">
              <img 
                src={useWhiteText ? "https://return.imindevelopment.com/wp-content/uploads/2026/04/Pod-Slavnikom-logo-white-scaled.png" : "https://return.imindevelopment.com/wp-content/uploads/2026/04/Pod-Slavnikom-logo-black-scaled.png"} 
                alt="Pod Slavnikom" 
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </Link>

          {/* Right Nav */}
          <div className="hidden lg:flex items-center justify-end space-x-12 flex-1">
            {navLinks.slice(3, 7).map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[9px] uppercase tracking-[0.5em] font-bold font-display transition-all duration-500 relative pb-2 ${
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
              className={`px-8 py-3 rounded-full text-[9px] uppercase tracking-[0.4em] font-bold font-display transition-all duration-700 ${
                scrolled 
                  ? 'bg-brand-wood text-white hover:bg-brand-gold' 
                  : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-brand-wood'
              }`}
            >
              Rezervacija
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 transition-colors duration-500 ${
              useWhiteText ? 'text-white' : 'text-brand-wood'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
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
