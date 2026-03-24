
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
        <section id="process" className="py-32 md:py-48 bg-[#020202] relative overflow-hidden transition-colors duration-500 border-t border-white/5 selection:bg-teal-primary selection:text-black">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-teal-primary/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen -z-10" />

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 text-left">
                <div className="flex flex-col md:flex-row justify-between mb-20 md:mb-32 items-start md:items-end border-b border-white/10 pb-8">
                    <div className="text-left">
                        <span className="text-teal-primary font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block border border-teal-primary/30 py-1.5 px-4 rounded-full w-fit bg-teal-primary/5">
                            Process
                        </span>
                        <h2 className="text-5xl md:text-8xl lg:text-[9rem] font-black text-white tracking-tighter text-left leading-[0.85] uppercase">
                            The <br /> Methodology.
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-0 flex items-center text-teal-primary font-mono text-[10px] px-4 py-2 rounded-full border border-teal-primary/30 h-fit w-fit text-left uppercase tracking-[0.2em]">
                        Proprietary Framework
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-left">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                            className="group relative bg-[#050505] border border-white/10 p-8 md:p-12 rounded-[2rem] hover:border-teal-primary/30 transition-all duration-500 flex flex-col justify-between min-h-[400px] text-left overflow-hidden hover:bg-white/[0.02]"
                        >
                            {/* Inner Depth Gradient */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-start justify-between h-full text-left gap-8">
                                <div className="font-mono text-3xl md:text-5xl font-black text-white/10 group-hover:text-teal-primary/50 text-left transition-colors duration-500 w-full flex justify-end">
                                    {step.num}
                                </div>

                                <div className="text-left mt-auto">
                                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4 text-left tracking-tight uppercase group-hover:translate-x-2 transition-transform duration-500">{step.title}</h3>
                                    <p className="text-white/40 text-lg leading-relaxed font-light text-left group-hover:text-white/80 transition-colors duration-500">{step.desc}</p>
                                </div>
                            </div>

                            {/* Progress Line */}
                            <div className="absolute bottom-0 left-0 h-1.5 bg-teal-primary w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
