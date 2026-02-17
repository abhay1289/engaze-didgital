import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Cpu, Layers, Code } from 'lucide-react';

const Ecosystem: React.FC = () => {
  return (
    <section className="py-32 bg-dark-base relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-20 max-w-2xl">
                <span className="text-teal-primary font-mono text-xs uppercase tracking-[0.2em] mb-4 block">The Infrastructure</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
                    Built for <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-primary to-teal-secondary">Hyper-Scale.</span>
                </h2>
                <p className="text-light-dim text-lg">
                    Our proprietary stack integrates seamlessly with your existing architecture, providing real-time intelligence and automated optimization.
                </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                
                {/* Large Card - Analytics */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 row-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl bg-[#0A0A0A] border border-white/10 p-8 flex flex-col justify-between hover:border-teal-primary/30 transition-colors duration-500"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                        <div className="w-10 h-10 rounded-lg bg-teal-primary/10 flex items-center justify-center text-teal-primary mb-6">
                            <Zap size={20} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Real-Time Telemetry</h3>
                        <p className="text-light-dim max-w-md">Monitor engagement metrics, conversion funnels, and user behavior with millisecond precision.</p>
                    </div>
                    {/* Mockup Graphic */}
                    <div className="relative z-10 mt-8 w-full h-64 bg-white/5 rounded-t-xl border-t border-l border-r border-white/10 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1]" />
                        <div className="p-4 flex gap-4 border-b border-white/5">
                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                            <div className="w-2 h-2 rounded-full bg-green-500/50" />
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="w-3/4 h-4 bg-white/10 rounded-full animate-pulse" />
                            <div className="w-1/2 h-4 bg-white/10 rounded-full animate-pulse delay-75" />
                            <div className="w-full h-32 bg-gradient-to-t from-teal-primary/10 to-transparent rounded mt-4 border-b border-teal-primary/30" />
                        </div>
                    </div>
                </motion.div>

                {/* Small Card - Global */}
                <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 }}
                     className="group relative overflow-hidden rounded-3xl bg-[#0A0A0A] border border-white/10 p-8 flex flex-col justify-between hover:border-teal-primary/30 transition-colors duration-500"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-secondary/10 blur-[50px] rounded-full pointer-events-none" />
                    <div>
                        <Globe className="text-white mb-6" size={24} />
                        <h3 className="text-xl font-bold text-white mb-2">Global Edge CDN</h3>
                        <p className="text-sm text-light-dim">Content delivered from 280+ cities worldwide.</p>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-teal-primary text-xs font-mono uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-primary animate-pulse" />
                        All Systems Operational
                    </div>
                </motion.div>

                {/* Small Card - API */}
                <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.2 }}
                     className="group relative overflow-hidden rounded-3xl bg-[#0A0A0A] border border-white/10 p-8 flex flex-col justify-between hover:border-teal-primary/30 transition-colors duration-500"
                >
                    <div>
                        <Code className="text-white mb-6" size={24} />
                        <h3 className="text-xl font-bold text-white mb-2">API-First Design</h3>
                        <p className="text-sm text-light-dim">Headless architecture for ultimate flexibility.</p>
                    </div>
                     <div className="mt-4 font-mono text-xs text-white/40 bg-black/50 p-3 rounded border border-white/5">
                        <span className="text-teal-primary">GET</span> /v1/analytics/stream
                     </div>
                </motion.div>

                 {/* Wide Card - Security */}
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="md:col-span-1 group relative overflow-hidden rounded-3xl bg-[#0A0A0A] border border-white/10 p-8 flex flex-col justify-center items-center text-center hover:border-teal-primary/30 transition-colors duration-500"
                >
                     <div className="absolute inset-0 bg-grid opacity-[0.05]" />
                     <Shield className="text-teal-primary mb-4 w-12 h-12" strokeWidth={1} />
                     <h3 className="text-xl font-bold text-white mb-2">Enterprise Grade</h3>
                     <p className="text-sm text-light-dim">SOC2 Type II Compliant.</p>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Ecosystem;