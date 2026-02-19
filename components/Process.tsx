
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { num: '01', title: 'Discovery', desc: 'Deep-dive analysis of business goals, technical auditing, and strategic roadmapping.' },
    { num: '02', title: 'Architecture', desc: 'Designing the systems, interfaces, and user journeys that will power the solution.' },
    { num: '03', title: 'Execution', desc: 'Agile development and rigorous testing to deploy production-grade software rapidly.' },
    { num: '04', title: 'Evolution', desc: 'Continuous optimization, data analysis, and feature iteration for long-term growth.' },
];

const Process: React.FC = () => {
    return (
        <section id="process" className="py-24 md:py-32 bg-dark-base relative overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
                <div className="flex flex-col md:flex-row justify-between mb-12 md:mb-20 items-start">
                    <div className="text-left">
                        <span className="text-teal-primary font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Process</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light-neutral dark:text-light-neutral tracking-tight text-left leading-tight">
                            The Methodology
                        </h2>
                    </div>
                    <div className="mt-6 md:mt-0 flex items-center gap-2 text-teal-primary font-mono text-sm px-4 py-2 rounded-full bg-teal-primary/5 border border-teal-primary/10 h-fit w-fit text-left">
                        PROPRIETARY FRAMEWORK
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 text-left">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative bg-gradient-to-br from-white to-[#F8FAFC] dark:from-[#0A0A0A] dark:to-[#050505] border border-dark-border/50 dark:border-white/10 p-6 md:p-10 lg:p-12 rounded-[2rem] hover:border-teal-primary/20 transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-none flex flex-col justify-between h-[280px] md:h-[340px] text-left overflow-hidden"
                        >
                            {/* Inner Depth Gradient */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10 flex justify-between items-start text-left">
                                <h3 className="text-3xl md:text-4xl font-bold text-light-neutral dark:text-white mb-2 text-left tracking-tight group-hover:translate-x-2 transition-transform duration-500">{step.title}</h3>
                                <div className="font-mono text-xl md:text-2xl text-teal-primary/20 group-hover:text-teal-primary/60 text-left transition-colors duration-500">
                                    {step.num}
                                </div>
                            </div>

                            <div className="relative z-10 text-left">
                                <p className="text-light-dim text-base md:text-lg leading-relaxed font-light text-left max-w-sm group-hover:text-light-neutral dark:group-hover:text-white transition-colors duration-500">{step.desc}</p>
                            </div>

                            {/* Progress Line */}
                            <div className="absolute bottom-0 left-0 h-1 bg-teal-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
