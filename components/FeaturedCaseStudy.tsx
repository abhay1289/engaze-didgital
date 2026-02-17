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
    <section ref={containerRef} className="relative py-32 bg-dark-base overflow-hidden border-t border-dark-border transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            
            {/* Visual Side (Left) */}
            <div className="w-full lg:w-[60%] relative z-0">
                <div className="relative rounded-3xl overflow-hidden aspect-[16/9] lg:aspect-[4/3] group border border-white/10 shadow-2xl shadow-black/20">
                    {/* Image with Parallax Scale */}
                    <motion.div 
                        style={{ scale: imgScale }}
                        className="w-full h-full"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" 
                            alt="Dashboard Interface" 
                            className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                        />
                    </motion.div>
                    
                    {/* Overlay Gradient for Text Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent z-20 pointer-events-none" />
                    
                    {/* Floating Badge on Image */}
                    <div className="absolute top-8 left-8 z-30 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-teal-primary animate-pulse" />
                        <span className="text-xs font-mono text-white/90 uppercase tracking-wider">Live Production</span>
                    </div>
                </div>
                
                {/* Background Glow Blob */}
                <motion.div 
                    style={{ y }}
                    className="absolute -bottom-12 -left-12 w-96 h-96 bg-teal-secondary/10 rounded-full blur-[100px] pointer-events-none" 
                />
            </div>

            {/* Content Side (Right) - Magnetic Glass Panel */}
            <div className="w-full lg:w-[40%] relative z-10 lg:-ml-32 lg:mt-32">
                <Magnetic strength={20}>
                    <div className="relative bg-white/80 dark:bg-[#0F0F0F]/80 backdrop-blur-xl border border-dark-border dark:border-white/10 p-10 md:p-14 rounded-3xl shadow-premium overflow-hidden group hover:border-teal-primary/30 transition-all duration-500">
                        {/* Interactive Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.4] dark:from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        
                        <div className="relative z-10">
                            {/* Client Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-tertiary to-dark-surface flex items-center justify-center border border-white/10 shadow-lg text-white">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-light-neutral font-bold text-lg leading-none mb-1">NovaBank</div>
                                    <span className="text-teal-primary font-mono text-[10px] uppercase tracking-widest">Fintech Expansion</span>
                                </div>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold text-light-neutral mb-6 leading-[1.1]">
                                Scaling to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-primary to-teal-secondary">$100M ARR</span> in 18 Months
                            </h2>

                            <p className="text-light-dim text-lg leading-relaxed mb-10 font-light">
                                By restructuring the acquisition funnel and implementing our proprietary attribution model, we unlocked a new vector of growth in the saturated EU market.
                            </p>

                            {/* Key Metrics Grid */}
                            <div className="grid grid-cols-2 gap-y-8 gap-x-4 mb-10 py-8 border-t border-b border-dark-border/50 dark:border-white/5">
                                <div>
                                    <div className="flex items-center gap-2 text-teal-primary mb-2">
                                        <TrendingUp size={18} />
                                        <span className="font-bold text-3xl tracking-tight">240%</span>
                                    </div>
                                    <p className="text-xs text-light-dim uppercase tracking-wider font-mono">YoY Revenue Growth</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-teal-primary mb-2">
                                        <Users size={18} />
                                        <span className="font-bold text-3xl tracking-tight">3.5M</span>
                                    </div>
                                    <p className="text-xs text-light-dim uppercase tracking-wider font-mono">New Users Acquired</p>
                                </div>
                                <div className="col-span-2">
                                    <div className="flex items-center gap-2 text-teal-primary mb-2">
                                        <Activity size={18} />
                                        <span className="font-bold text-3xl tracking-tight">-45%</span>
                                    </div>
                                    <p className="text-xs text-light-dim uppercase tracking-wider font-mono">CAC Reduction (Cost Per Acquisition)</p>
                                </div>
                            </div>

                            {/* CTA with Micro-Animation */}
                            <button className="group w-full flex items-center justify-between bg-dark-base dark:bg-white text-white dark:text-dark-base px-6 py-4 rounded-full font-bold text-lg hover:bg-teal-primary dark:hover:bg-teal-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-glow">
                                <span>Read Full Case Study</span>
                                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/10 dark:bg-black/10 group-hover:bg-white/20 transition-colors overflow-hidden">
                                    {/* Animated Arrow */}
                                    <motion.div
                                        initial={{ x: 0, y: 0 }}
                                        whileHover={{ x: 2, y: -2 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        <ArrowUpRight size={18} />
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