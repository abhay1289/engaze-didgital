
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Magnetic from './ui/Magnetic';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (route: string) => void;
  currentRoute?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentRoute = 'home' }) => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      // Force dark for premium aesthetic
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !isMobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const handleNav = (e: React.MouseEvent, route: string, href?: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(route);
      if (href && route === 'home') {
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-120%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 pointer-events-none"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center pointer-events-auto">
        {/* Header Main Pill with smooth glassmorphism */}
        <motion.div
          animate={{
            width: scrolled || isMobileMenuOpen ? "100%" : "100%",
            backgroundColor: scrolled || isMobileMenuOpen ? "rgba(2, 2, 2, 0.85)" : "rgba(2, 2, 2, 0)",
            backdropFilter: scrolled || isMobileMenuOpen ? "blur(24px)" : "blur(0px)",
            borderColor: scrolled || isMobileMenuOpen ? "rgba(255, 255, 255, 0.05)" : "transparent",
            paddingTop: scrolled || isMobileMenuOpen ? "14px" : "20px",
            paddingBottom: scrolled || isMobileMenuOpen ? "14px" : "20px",
            paddingLeft: scrolled || isMobileMenuOpen ? "28px" : "12px",
            paddingRight: scrolled || isMobileMenuOpen ? "28px" : "12px",
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-between items-center rounded-full border border-transparent shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-shadow duration-500 w-full"
        >

          <a href="#" onClick={(e) => handleNav(e, 'home')} className="flex items-center gap-3 group relative z-50 shrink-0">
            <img src="/Engaze1__1_-removebg-preview.png" alt="Engaze Digital Logo" className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
            {['About', 'Services', 'Work', 'Questionnaire'].map((item) => (
              <li key={item}>
                <Magnetic strength={5}>
                  <a
                    href="#"
                    onClick={(e) => handleNav(e, item.toLowerCase())}
                    className={`text-[12px] font-mono uppercase tracking-[0.2em] transition-all duration-300 relative group overflow-hidden ${currentRoute === item.toLowerCase() ? 'text-teal-primary' : 'text-white/60 hover:text-white'}`}
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-teal-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 shrink-0">
            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
            >
              <AnimatePresence mode='wait'>
                {isMobileMenuOpen ?
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <X size={20} />
                  </motion.div> :
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <Menu size={20} />
                  </motion.div>
                }
              </AnimatePresence>
            </button>

            <Magnetic>
              <button
                onClick={(e) => handleNav(e as any, 'contact')}
                className="group flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full text-sm font-bold hover:bg-teal-primary transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(54,184,165,0.4)] overflow-hidden relative"
              >
                <span className="relative z-10 tracking-wide uppercase">Contact</span>
                <div className="w-5 h-5 rounded-full bg-black/10 group-hover:bg-black/20 flex items-center justify-center relative z-10 transition-colors">
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
            </Magnetic>
          </div>
        </motion.div>

        {/* Mobile Expanded Menu (Island Style) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 12, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden w-full bg-[#050505]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] p-8 flex flex-col items-center gap-8 z-50 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-primary/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
              {['About', 'Services', 'Work', 'Questionnaire', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  href="#"
                  onClick={(e) => handleNav(e, item.toLowerCase())}
                  className={`text-4xl font-black tracking-tighter uppercase transition-colors duration-300 ${currentRoute === item.toLowerCase() ? 'text-teal-primary' : 'text-white hover:text-teal-primary/70'}`}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
