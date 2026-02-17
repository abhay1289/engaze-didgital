
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Magnetic from './ui/Magnetic';
import { ArrowUpRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAutoScrolled, setHasAutoScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { 
    mass: 0.4,
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  // Calculate dynamic ranges for mobile vs desktop to control "speed"
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const scaleLimit = isMobile ? 4 : 5;
  const zoomEndRange = isMobile ? 0.18 : 0.45; // Significantly tighter range for mobile speed

  const textScale = useTransform(smoothProgress, [0, zoomEndRange], [1, scaleLimit]); 
  
  // Adjust blur and opacity to trigger sooner on mobile to maintain rhythm
  const blurStart = isMobile ? 0.15 : 0.4;
  const blurEnd = isMobile ? 0.4 : 0.8;
  const textBlur = useTransform(smoothProgress, [blurStart, blurEnd], ["0px", "10px"]);
  
  const opacityStart = isMobile ? 0.35 : 0.7;
  const textOpacity = useTransform(smoothProgress, [opacityStart, 1], [1, 0]);

  const uiOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const uiY = useTransform(smoothProgress, [0, 0.2], [0, 30]);

  // First-scroll auto-transition logic - Ultra responsive for mobile
  useEffect(() => {
    const handleFirstScroll = (e: Event) => {
        if (!hasAutoScrolled && window.scrollY < 50) {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                setHasAutoScrolled(true);
                servicesSection.scrollIntoView({ behavior: 'smooth' });
                // Clean up listener immediately
                window.removeEventListener('wheel', handleFirstScroll);
                window.removeEventListener('touchstart', handleFirstScroll, { capture: true });
            }
        }
    };

    window.addEventListener('wheel', handleFirstScroll, { passive: true });
    window.addEventListener('touchstart', handleFirstScroll, { passive: true, capture: true });
    
    return () => {
      window.removeEventListener('wheel', handleFirstScroll);
      window.removeEventListener('touchstart', handleFirstScroll);
    };
  }, [hasAutoScrolled]);

  return (
    <section 
        ref={containerRef} 
        className="relative w-full h-[130vh] md:h-[120vh] bg-dark-base transition-colors duration-700"
    >
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden perspective-1000 px-6">
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-b from-dark-base via-transparent to-dark-base" />
            </div>

            <motion.div 
                style={{ 
                    scale: textScale, 
                    opacity: textOpacity, 
                    filter: textBlur 
                }}
                className="relative z-10 flex flex-col items-center justify-center text-center origin-center will-change-[transform,opacity,filter] pointer-events-none"
            >
                <h1 className="text-[16vw] md:text-[11vw] font-bold leading-[0.85] tracking-tighter select-none mix-blend-overlay opacity-90">
                    <span className="block text-light-neutral dark:text-white">ENGAZE</span>
                    <span className="block text-teal-primary/50 dark:text-teal-primary/80">DIGITAL</span>
                </h1>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 mix-blend-normal">
                     <h1 className="text-[16vw] md:text-[11vw] font-bold leading-[0.85] tracking-tighter select-none">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-light-neutral to-light-neutral/50 dark:from-white dark:to-white/50">ENGAZE</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-teal-primary to-teal-secondary">DIGITAL</span>
                    </h1>
                </div>
            </motion.div>

            <motion.div 
                style={{ opacity: uiOpacity, y: uiY }}
                className="absolute bottom-24 z-20 flex flex-col items-center w-full px-6 md:px-12"
            >
                <p className="max-w-lg text-center text-light-dim mb-8 text-lg md:text-xl font-light leading-relaxed tracking-wide">
                    We build the operating systems for <span className="text-light-neutral dark:text-white font-medium pb-1">billion-dollar growth</span>.
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full md:w-auto">
                    <Magnetic strength={30}>
                        <button className="w-full md:w-auto h-14 md:h-12 px-8 rounded-full bg-light-neutral dark:bg-white text-white dark:text-dark-base font-bold text-[14px] md:text-[13px] tracking-tight flex items-center justify-center gap-3 hover:bg-teal-primary dark:hover:bg-teal-primary hover:text-white transition-all duration-500 shadow-premium group">
                            START ENGINE <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                    </Magnetic>
                    <Magnetic strength={20}>
                        <button className="w-full md:w-auto flex items-center justify-center gap-3 h-14 md:h-12 px-7 rounded-full border border-dark-border dark:border-white/10 text-light-neutral dark:text-white font-medium text-[14px] md:text-[13px] tracking-tight hover:bg-black/5 dark:hover:bg-white/5 transition-colors backdrop-blur-md group">
                            <div className="w-5 h-5 rounded-full bg-teal-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play size={8} fill="currentColor" className="text-teal-primary" />
                            </div>
                            SHOWREEL
                        </button>
                    </Magnetic>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default Hero;
