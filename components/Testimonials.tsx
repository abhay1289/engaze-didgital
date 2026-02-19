
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

const testimonials: Testimonial[] = [
    { quote: "Engaze transformed our legacy platform into a modern, scalable ecosystem. Their engineering rigor is unmatched.", author: "James T.", role: "CTO, Fintech Enterprise" },
    { quote: "We saw a 300% increase in conversion rates within 3 months of the new site launch. The design is simply world-class.", author: "Sarah L.", role: "VP Marketing, Retail Giant" },
    { quote: "A true partner in every sense. They didn't just build what we asked for; they built what we actually needed to scale.", author: "Michael R.", role: "Founder, Series B Startup" },
    { quote: "The strategic insight provided by the Engaze team was pivotal in our recent rebranding effort.", author: "Elena K.", role: "CMO, Healthcare Group" },
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
