import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Rooms from './pages/Rooms';
import Spa from './pages/Spa';
import Packages from './pages/Packages';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <div className="noise-overlay"></div>
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/restavracija" element={<Restaurant />} />
              <Route path="/sobe" element={<Rooms />} />
              <Route path="/spa" element={<Spa />} />
              <Route path="/paketi" element={<Packages />} />
              <Route path="/o-nas" element={<About />} />
              <Route path="/kontakt" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
