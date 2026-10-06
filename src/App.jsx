import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AmbientBackground from './components/AmbientBackground';
import IntroOverlay from './components/IntroOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="relative min-h-screen">
      <AmbientBackground />
      <IntroOverlay onDone={() => setIntroDone(true)} />

      <AnimatePresence>
        {introDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}