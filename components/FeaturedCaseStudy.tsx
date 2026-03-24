import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Users, Activity, Layers } from 'lucide-react';
import Magnetic from './ui/Magnetic';

const FeaturedCaseStudy: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

    return (
        <section ref={containerRef} className="relative py-32 md:py-48 bg-[#020202] overflow-hidden border-t border-white/5 transition-colors duration-500 selection:bg-teal-primary selection:text-black">
            {/* Background Decor */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-teal-primary/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Visual Side (Left) */}
                    <div className="w-full lg:w-[60%] relative z-0 text-left">
                        <div className="relative rounded-[2rem] overflow-hidden aspect-[16/9] lg:aspect-[4/3] group border border-white/10 shadow-[0_0_50px_rgba(54,184,165,0.05)]">
                            {/* Image with Parallax Scale */}
                            <motion.div
                                style={{ scale: imgScale }}
                                className="w-full h-full"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                                    alt="Dashboard Interface"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                />
                            </motion.div>

                            {/* Overlay Gradient for Text Contrast */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#020202]/80 via-transparent to-transparent z-20 pointer-events-none" />

                            {/* Floating Badge on Image */}
                            <div className="absolute top-8 left-8 z-30 flex items-center gap-3 px-5 py-2.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                                <div className="w-2 h-2 rounded-full bg-teal-primary animate-pulse shadow-[0_0_10px_rgba(54,184,165,0.8)]" />
                                <span className="text-[10px] font-mono text-white uppercase tracking-[0.2em]">Live Production</span>
                            </div>
                        </div>

                        {/* Background Glow Blob */}
                        <motion.div
                            style={{ y }}
                            className="absolute -bottom-12 -left-12 w-[500px] h-[500px] bg-teal-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen"
                        />
                    </div>

                    {/* Content Side (Right) - Magnetic Glass Panel */}
                    <div className="w-full lg:w-[40%] relative z-10 lg:-ml-32 lg:mt-32 text-left">
                        <Magnetic strength={20}>
                            <div className="relative bg-[#050505] backdrop-blur-2xl border border-white/10 p-10 md:p-16 rounded-[2rem] shadow-2xl overflow-hidden group hover:border-teal-primary/30 transition-all duration-500">
                                {/* Interactive Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 text-left">
                                    {/* Client Header */}
                                    <div className="flex items-center gap-5 mb-10 text-left">
                                        <div className="w-14 h-14 rounded-2xl bg-[#080808] flex items-center justify-center border border-white/10 shadow-lg text-teal-primary group-hover:scale-110 transition-transform duration-500">
                                            <Layers className="w-6 h-6" />
                                        </div>
                                        <div className="text-left">
                                            <div className="text-white font-black text-2xl leading-none mb-1.5 uppercase tracking-tight">NovaBank</div>
                                            <span className="text-teal-primary font-mono text-[10px] uppercase tracking-[0.2em] border border-teal-primary/20 px-3 py-1 rounded-full bg-teal-primary/5">Fintech Expansion</span>
                                        </div>
                                    </div>

                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase text-left group-hover:text-teal-primary transition-colors duration-500">
                                        Scaling to <br /> <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-primary to-teal-secondary">$100M ARR</span> <br /> in 18 Months
                                    </h2>

                                    <p className="text-white/50 text-xl leading-relaxed mb-12 font-light text-left group-hover:text-white/70 transition-colors duration-500">
                                        By restructuring the acquisition funnel and implementing our proprietary attribution model, we unlocked a new vector of growth in the saturated EU market.
                                    </p>

                                    {/* Key Metrics Grid */}
                                    <div className="grid grid-cols-2 gap-y-10 gap-x-6 mb-12 py-10 border-t border-b border-white/10 text-left">
                                        <div>
                                            <div className="flex items-center gap-3 text-teal-primary mb-3 text-left">
                                                <TrendingUp size={20} />
                                                <span className="font-black text-4xl tracking-tighter">240%</span>
                                            </div>
                                            <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-mono text-left">YoY Revenue Growth</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 text-teal-primary mb-3 text-left">
                                                <Users size={20} />
                                                <span className="font-black text-4xl tracking-tighter">3.5M</span>
                                            </div>
                                            <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-mono text-left">New Users Acquired</p>
                                        </div>
                                        <div className="col-span-2 mt-4 text-left">
                                            <div className="flex items-center gap-3 text-teal-primary mb-3 text-left">
                                                <Activity size={20} />
                                                <span className="font-black text-4xl tracking-tighter">-45%</span>
                                            </div>
                                            <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-mono text-left">CAC Reduction (Cost Per Acquisition)</p>
                                        </div>
                                    </div>

                                    {/* CTA with Micro-Animation */}
                                    <button className="group/btn w-full flex items-center justify-between bg-white text-black px-8 py-5 rounded-full font-bold text-lg hover:bg-teal-primary transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(54,184,165,0.3)] uppercase tracking-wide">
                                        <span>Read Full Case Study</span>
                                        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-black/10 group-hover/btn:bg-black/20 transition-colors overflow-hidden">
                                            {/* Animated Arrow */}
                                            <motion.div
                                                initial={{ x: 0, y: 0 }}
                                                whileHover={{ x: 4, y: -4 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            >
                                                <ArrowUpRight size={20} />
                                            </motion.div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </Magnetic>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedCaseStudy;