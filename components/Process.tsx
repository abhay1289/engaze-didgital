
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    { num: '01', title: 'Audit', desc: 'Full infrastructure teardown and deep-dive analysis of existing stacks.' },
    { num: '02', title: 'Strategy', desc: 'Designing the algorithmic roadmap and architectural blueprints.' },
    { num: '03', title: 'Build', desc: 'High-velocity development sprints implementing the core engine.' },
    { num: '04', title: 'Scale', desc: 'Automated revenue optimization and global edge deployment.' },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-32 bg-dark-base relative overflow-hidden transition-colors duration-500">
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
                        className="group relative bg-white dark:bg-[#0A0A0A] border border-dark-border dark:border-white/10 p-8 md:p-10 lg:p-12 rounded-3xl hover:border-teal-primary/40 transition-colors duration-500 shadow-premium flex flex-col justify-between h-[280px] md:h-[340px] text-left"
                    >
                        <div className="relative z-10 flex justify-between items-start text-left">
                            <h3 className="text-3xl md:text-4xl font-bold text-light-neutral dark:text-white mb-2 text-left tracking-tight">{step.title}</h3>
                            <div className="font-mono text-xl md:text-2xl text-light-dim/30 text-left">
                                {step.num}
                            </div>
                        </div>

                        <div className="relative z-10 text-left">
                            <p className="text-light-dim text-base md:text-lg leading-relaxed font-light text-left max-w-sm">{step.desc}</p>
                        </div>
                    </motion.div>
                ))}
             </div>
        </div>
    </section>
  );
};

export default Process;
