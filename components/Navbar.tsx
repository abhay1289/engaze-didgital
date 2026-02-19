
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
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

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
            backgroundColor: scrolled || isMobileMenuOpen ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0)",
            backdropFilter: scrolled || isMobileMenuOpen ? "blur(20px)" : "blur(0px)",
            borderColor: scrolled || isMobileMenuOpen ? "var(--border-color)" : "transparent",
            paddingTop: scrolled || isMobileMenuOpen ? "12px" : "16px",
            paddingBottom: scrolled || isMobileMenuOpen ? "12px" : "16px",
            paddingLeft: scrolled || isMobileMenuOpen ? "24px" : "0px",
            paddingRight: scrolled || isMobileMenuOpen ? "24px" : "0px",
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            '--border-color': isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
          } as any}
          className="flex justify-between items-center rounded-full border dark:bg-[#0A0A0A]/80"
        >

          <a href="#" onClick={(e) => handleNav(e, 'home')} className="flex items-center gap-2 group relative z-50 shrink-0">
            <img src="/Engaze1__1_-removebg-preview.png" alt="Engaze Digital Logo" className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {['About', 'Services', 'Work'].map((item) => (
              <li key={item}>
                <Magnetic strength={5}>
                  <a
                    href="#"
                    onClick={(e) => handleNav(e, item.toLowerCase())}
                    className={`text-sm font-medium tracking-tight transition-all duration-300 relative group overflow-hidden ${currentRoute === item.toLowerCase() ? 'text-teal-primary' : 'text-light-neutral/80 dark:text-white/80 hover:text-teal-primary'}`}
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-teal-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <Magnetic strength={5}>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-light-neutral dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </Magnetic>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-light-neutral dark:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
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
                className="group flex items-center gap-2 px-5 py-2.5 bg-light-neutral dark:bg-white text-white dark:text-dark-base rounded-full text-[13px] font-bold hover:bg-teal-primary dark:hover:bg-teal-primary hover:text-white transition-all duration-300 shadow-sm overflow-hidden relative"
              >
                <span className="relative z-10">Contact</span>
                <ArrowUpRight size={14} className="relative z-10 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                <div className="absolute inset-0 bg-teal-primary/10 dark:bg-dark-base/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
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
              className="md:hidden w-full bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-2xl border border-dark-border dark:border-white/10 rounded-[2rem] shadow-2xl p-8 flex flex-col items-center gap-6"
            >
              {['About', 'Services', 'Work', 'Contact'].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  href="#"
                  onClick={(e) => handleNav(e, item.toLowerCase())}
                  className={`text-3xl font-bold tracking-tight ${currentRoute === item.toLowerCase() ? 'text-teal-primary' : 'text-light-neutral dark:text-white'}`}
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
