
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
    quote: string;
    author: string;
    role: string;
    logo: string;
}

const testimonials: Testimonial[] = [
    { quote: "They didn't just market our product, they redefined our category.", author: "Sarah J.", role: "CMO, TechFlow", logo: "TF" },
    { quote: "The ROI we've seen in Q1 alone covers their fees for the next 5 years.", author: "Mike R.", role: "Founder, ScaleUp", logo: "SU" },
    { quote: "Finally, an agency that cares about bottom-line revenue, not just vanity metrics.", author: "Elena V.", role: "VP Growth, HealthPlus", logo: "HP" },
    { quote: "Strategic partners in the truest sense. Essential to our roadmap.", author: "David K.", role: "CEO, Innovate", logo: "IN" },
];

const MarqueeCard: React.FC<{ item: Testimonial }> = ({ item }) => (
    <div className="w-[320px] md:w-[450px] min-h-[300px] md:h-[320px] flex-shrink-0 bg-white/80 dark:bg-[#0F0F0F]/80 backdrop-blur-md border border-dark-border dark:border-white/5 p-8 md:p-10 rounded-[2rem] mx-3 md:mx-6 flex flex-col justify-between hover:border-teal-primary/30 transition-colors duration-500 group relative overflow-hidden shadow-premium text-left">
        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 text-left">
             <div className="text-teal-primary text-3xl md:text-4xl font-serif mb-4 opacity-50 text-left">"</div>
             <p className="text-lg md:text-xl text-light-neutral/90 dark:text-light-neutral/90 font-light leading-relaxed tracking-wide text-left">{item.quote}</p>
        </div>

        <div className="relative z-10 flex items-center gap-4 md:gap-5 pt-6 md:pt-8 border-t border-dark-border dark:border-white/5 text-left">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-teal-tertiary to-teal-secondary flex items-center justify-center font-bold text-white shadow-lg text-[10px] md:text-sm tracking-wider border border-white/10 shrink-0">
                {item.logo}
            </div>
            <div className="text-left">
                <div className="font-bold text-light-neutral dark:text-white text-base md:text-lg text-left leading-tight">{item.author}</div>
                <div className="text-[11px] md:text-sm text-teal-primary font-mono text-left">{item.role}</div>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
  const [duration, setDuration] = useState(25);

  useEffect(() => {
    const handleResize = () => {
      // Hyper-speed for mobile (reduced from 4s to 2s for extreme velocity)
      // Desktop remains snappy at 25s.
      setDuration(window.innerWidth < 768 ? 2 : 25);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-24 md:py-40 bg-dark-base overflow-hidden relative transition-colors duration-500">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />
        
        <div className="mb-16 md:mb-24 px-8 text-center relative z-10">
             <span className="inline-block px-3 py-1 bg-teal-primary/10 rounded-full text-teal-primary text-xs font-bold uppercase tracking-[0.2em] border border-teal-primary/20 mb-6">
                Validation
             </span>
             <h2 className="text-4xl md:text-5xl font-bold text-light-neutral dark:text-light-neutral tracking-tight">Validated by Visionaries</h2>
        </div>

        <div className="relative w-full overflow-hidden">
            {/* Soft Edge Masks for smooth fading */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-dark-base to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-dark-base to-transparent z-20 pointer-events-none" />
            
            <motion.div 
                key={duration} 
                className="flex"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                    duration: duration, 
                    repeat: Infinity, 
                    ease: "linear",
                    repeatType: "loop"
                }}
            >
                {/* Multiplying items even more to ensure absolute smoothness at high velocity */}
                {[...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, i) => (
                    <MarqueeCard key={i} item={t} />
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default Testimonials;
