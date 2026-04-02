
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

const Testimonials: React.FC = () => {
    return (
        <section className="py-32 md:py-48 bg-[#F8F9FB] overflow-hidden relative border-t border-slate-100 selection:bg-teal-primary selection:text-white">
            {/* Custom Grain Overlay */}
            <div className="pointer-events-none absolute inset-0 z-0 opacity-10 mix-blend-overlay">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-100 contrast-100" />
            </div>

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 text-left">
                <div className="mb-20 md:mb-32 flex flex-col items-center text-center">
                    <span className="inline-block px-4 py-1.5 bg-slate-100 rounded-full text-teal-primary text-[10px] font-mono uppercase tracking-[0.3em] border border-slate-200 mb-8 backdrop-blur-md">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tighter uppercase">
                        What Our <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-primary to-teal-secondary">Clients Say.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 auto-rows-[auto]">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                            className={`group relative bg-white border border-slate-200 p-10 md:p-16 rounded-[2rem] flex flex-col justify-between hover:border-teal-primary/30 transition-all duration-500 overflow-hidden text-left ${i === 0 || i === 3 ? 'md:col-span-1 lg:row-span-2 bg-slate-50 shadow-[0_0_50px_rgba(54,184,165,0.02)] hover:bg-slate-50' : 'md:col-span-1 bg-white'
                                }`}
                        >
                            {/* Inner Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-primary/10 rounded-full blur-[80px] origin-top-right group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

                            <div className="relative z-10 text-left mb-12">
                                <div className="text-teal-primary text-6xl font-serif leading-none mb-6 opacity-30 group-hover:opacity-100 transition-opacity duration-500 text-left">"</div>
                                <p className={`text-slate-500 font-light leading-relaxed tracking-wide text-left ${i === 0 || i === 3 ? 'text-lg md:text-xl' : 'text-base md:text-lg'}`}>
                                    {item.quote}
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center gap-5 pt-8 border-t border-slate-200 text-left mt-auto">
                                <div className="w-14 h-14 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-mono text-slate-400 group-hover:text-teal-primary transition-colors text-lg uppercase">
                                    {item.author.charAt(0)}
                                </div>
                                <div className="text-left flex flex-col gap-1">
                                    <div className="font-bold text-[#0F172A] text-lg leading-tight uppercase tracking-wide">{item.author}</div>
                                    <div className="text-[10px] text-teal-primary font-mono uppercase tracking-widest">{item.role}</div>
                                </div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-slate-200 rounded-tl-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-4 pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-slate-200 rounded-br-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-4 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
