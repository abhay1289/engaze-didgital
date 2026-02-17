
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
            {/* Header Main Pill */}
            <div className={`w-full flex justify-between items-center rounded-full transition-all duration-500 border border-dark-border dark:border-white/10 ${scrolled || isMobileMenuOpen ? 'bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-xl shadow-glass px-6 py-2.5 md:py-3' : 'bg-transparent px-0 py-4 border-transparent'}`}>
                
                <a href="#" onClick={(e) => handleNav(e, 'home')} className="flex items-center gap-2 group relative z-50">
                    <span className="font-bold tracking-tighter text-light-neutral dark:text-white text-lg">TEAL<span className="opacity-30">.INC</span></span>
                </a>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex items-center gap-10">
                    {['About', 'Services', 'Work'].map((item) => (
                        <li key={item}>
                            <Magnetic strength={5}>
                                <a
                                  href="#"
                                  onClick={(e) => handleNav(e, item.toLowerCase())}
                                  className={`text-sm font-semibold tracking-tight transition-colors ${currentRoute === item.toLowerCase() ? 'text-teal-primary' : 'text-light-neutral/70 dark:text-white/70 hover:text-teal-primary'}`}
                                >
                                  {item}
                                </a>
                            </Magnetic>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2 md:gap-4">
                    <Magnetic strength={5}>
                        <button 
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-light-neutral dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                            {isDark ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                    </Magnetic>

                    {/* Mobile Toggle */}
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-light-neutral dark:text-white"
                    >
                        {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>

                    <Magnetic>
                        <button 
                            onClick={(e) => handleNav(e as any, 'contact')}
                            className="flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 bg-light-neutral dark:bg-white text-white dark:text-dark-base rounded-full text-[13px] font-bold hover:bg-teal-primary dark:hover:bg-teal-primary hover:text-white transition-all duration-300 shadow-sm"
                        >
                            Contact <ArrowUpRight size={13} className="opacity-60" />
                        </button>
                    </Magnetic>
                </div>
            </div>

            {/* Mobile Expanded Menu (Island Style) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 10, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="md:hidden w-full bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-xl border border-dark-border dark:border-white/10 rounded-[2rem] shadow-glass p-8 flex flex-col items-center gap-6"
                    >
                        {['About', 'Services', 'Work', 'Contact'].map((item, i) => (
                            <motion.a
                                key={item}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                href="#"
                                onClick={(e) => handleNav(e, item.toLowerCase())}
                                className={`text-2xl font-bold tracking-tight ${currentRoute === item.toLowerCase() ? 'text-teal-primary' : 'text-light-neutral dark:text-white'}`}
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
