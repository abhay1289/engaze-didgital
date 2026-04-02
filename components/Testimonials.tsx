
import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';

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

const CARD_WIDTH = 440;
const GAP = 24;
const SPEED = 0.4;

const Testimonials: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const xRef = useRef(0);
    const [isPaused, setIsPaused] = useState(false);

    const doubled = [...testimonials, ...testimonials];
    const totalWidth = testimonials.length * (CARD_WIDTH + GAP);

    useAnimationFrame(() => {
        if (isPaused || !scrollRef.current) return;
        xRef.current -= SPEED;
        if (Math.abs(xRef.current) >= totalWidth) {
            xRef.current = 0;
        }
        scrollRef.current.style.transform = `translateX(${xRef.current}px)`;
    });

    return (
        <section className="py-24 md:py-32 bg-[#F8F9FB] overflow-hidden relative border-t border-slate-100 selection:bg-teal-primary selection:text-white">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-16 md:mb-20 flex flex-col items-center text-center">
                    <span className="inline-block px-4 py-1.5 bg-slate-100 rounded-full text-teal-primary text-[10px] font-mono uppercase tracking-[0.3em] border border-slate-200 mb-8">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tighter uppercase">
                        What Our <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-primary to-teal-secondary">Clients Say.</span>
                    </h2>
                </div>
            </div>

            <div
                className="relative w-full overflow-hidden"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#F8F9FB] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#F8F9FB] to-transparent z-10 pointer-events-none" />

                <div
                    ref={scrollRef}
                    className="flex gap-6 pl-6 will-change-transform"
                    style={{ width: 'max-content' }}
                >
                    {doubled.map((item, i) => (
                        <div
                            key={i}
                            className="group relative bg-white border border-slate-200 rounded-2xl p-8 md:p-10 flex flex-col justify-between hover:border-teal-primary/40 transition-all duration-500 overflow-hidden text-left shrink-0 hover:shadow-lg"
                            style={{ width: CARD_WIDTH, minHeight: 280 }}
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-teal-primary/5 rounded-full blur-[60px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10 mb-8">
                                <div className="text-teal-primary text-4xl font-serif leading-none mb-4 opacity-30 group-hover:opacity-70 transition-opacity duration-500">&ldquo;</div>
                                <p className="text-slate-600 text-base leading-relaxed font-light">
                                    {item.quote}
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-mono text-slate-400 group-hover:text-teal-primary group-hover:border-teal-primary/30 transition-colors text-sm uppercase">
                                    {item.author.charAt(0)}
                                </div>
                                <div className="flex flex-col">
                                    <div className="font-bold text-[#0F172A] text-sm leading-tight tracking-wide">{item.author}</div>
                                    <div className="text-[10px] text-teal-600 font-mono uppercase tracking-widest mt-0.5">{item.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
