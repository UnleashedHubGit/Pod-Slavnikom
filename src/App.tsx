import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Route-level code splitting: each page ships as its own chunk so the initial
// load only pulls the shell (Navbar/Footer) plus the current route.
const Home = lazy(() => import('./pages/Home'));
const Restaurant = lazy(() => import('./pages/Restaurant'));
const Rooms = lazy(() => import('./pages/Rooms'));
const RoomDetail = lazy(() => import('./pages/RoomDetail'));
const Spa = lazy(() => import('./pages/Spa'));
const Packages = lazy(() => import('./pages/Packages'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Surroundings = lazy(() => import('./pages/Surroundings'));

function RouteFallback() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-brand-cream"
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-brand-gold/25 border-t-brand-gold animate-spin"></div>
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold font-display">
          Nalaganje…
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen relative">
        <div className="noise-overlay"></div>
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<RouteFallback />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restavracija" element={<Restaurant />} />
                <Route path="/sobe" element={<Rooms />} />
                <Route path="/sobe/:roomId" element={<RoomDetail />} />
                <Route path="/spa" element={<Spa />} />
                <Route path="/paketi" element={<Packages />} />
                <Route path="/o-nas" element={<About />} />
                <Route path="/okolica" element={<Surroundings />} />
                <Route path="/kontakt" element={<Contact />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
