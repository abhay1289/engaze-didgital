import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Cpu, Layers, Code } from 'lucide-react';

const Ecosystem: React.FC = () => {
    return (
        <section className="py-32 md:py-48 bg-[#020202] relative overflow-hidden text-left border-t border-white/5 selection:bg-teal-primary selection:text-black">
            {/* Ambient Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/4 mix-blend-screen" />

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 text-left">
                <div className="mb-20 md:mb-32 max-w-2xl text-left">
                    <span className="text-teal-primary font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block border border-teal-primary/30 py-1.5 px-4 rounded-full w-fit bg-teal-primary/5">The Infrastructure</span>
                    <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8 uppercase text-left">
                        Built for <br /> <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-primary to-teal-secondary relative">
                            Hyper-Scale.
                            <div className="absolute -inset-2 bg-teal-primary/20 blur-2xl -z-10" />
                        </span>
                    </h2>
                    <p className="text-white/50 text-xl font-light leading-relaxed text-left border-l border-teal-primary/30 pl-6">
                        Our proprietary stack integrates seamlessly with your existing architecture, providing real-time intelligence and automated optimization.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px] text-left">

                    {/* Large Card - Analytics */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
                        className="md:col-span-2 row-span-1 md:row-span-2 group relative overflow-hidden rounded-[2rem] bg-[#050505] border border-white/10 p-8 md:p-12 flex flex-col justify-between hover:border-teal-primary/30 transition-all duration-500 shadow-[0_0_50px_rgba(54,184,165,0.02)] hover:bg-white/[0.02]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        <div className="relative z-10 text-left">
                            <div className="w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center text-teal-primary mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:border-teal-primary/50 shadow-[0_0_15px_rgba(54,184,165,0)] group-hover:shadow-[0_0_20px_rgba(54,184,165,0.2)]">
                                <Zap size={24} className="group-hover:animate-pulse" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-teal-primary transition-colors duration-500 text-left">Real-Time Telemetry</h3>
                            <p className="text-white/40 max-w-md text-lg font-light leading-relaxed text-left">Monitor engagement metrics, conversion funnels, and user behavior with millisecond precision.</p>
                        </div>
                        {/* Mockup Graphic */}
                        <div className="relative z-10 mt-12 w-full h-64 bg-black rounded-t-xl border-t border-l border-r border-white/10 overflow-hidden shadow-2xl group-hover:border-teal-primary/30 transition-colors duration-500">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
                            <div className="p-4 flex gap-4 border-b border-white/5 bg-white/[0.02]">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="w-3/4 h-4 bg-white/10 rounded-full animate-pulse" />
                                <div className="w-1/2 h-4 bg-white/10 rounded-full animate-pulse delay-75" />
                                <div className="w-full h-32 bg-gradient-to-t from-teal-primary/10 to-transparent rounded mt-4 border-b border-teal-primary/30" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Small Card - Global */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                        className="group relative overflow-hidden rounded-[2rem] bg-[#050505] border border-white/10 p-8 md:p-12 flex flex-col justify-between hover:border-teal-primary/30 transition-all duration-500 text-left hover:bg-white/[0.02]"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-primary/10 blur-[60px] rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:border-teal-primary/30 group-hover:text-teal-primary transition-all duration-500">
                                <Globe size={24} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight text-left">Global Edge CDN</h3>
                            <p className="text-lg font-light text-white/40 leading-relaxed text-left group-hover:text-white/60 transition-colors duration-500">Content delivered from 280+ cities worldwide.</p>
                        </div>
                        <div className="mt-8 flex items-center gap-3 text-teal-primary text-[10px] font-mono uppercase bg-teal-primary/5 border border-teal-primary/20 w-fit px-3 py-1.5 rounded-full relative z-10">
                            <span className="w-2 h-2 rounded-full bg-teal-primary animate-pulse shadow-[0_0_10px_rgba(54,184,165,0.8)]" />
                            All Systems Operational
                        </div>
                    </motion.div>

                    {/* Small Card - API */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="group relative overflow-hidden rounded-[2rem] bg-[#050505] border border-white/10 p-8 md:p-12 flex flex-col justify-between hover:border-teal-primary/30 transition-all duration-500 text-left hover:bg-white/[0.02]"
                    >
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-teal-primary/5 blur-[60px] rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:border-teal-primary/30 group-hover:text-teal-primary transition-all duration-500">
                                <Code size={24} />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight text-left">API-First Design</h3>
                            <p className="text-lg font-light text-white/40 leading-relaxed text-left group-hover:text-white/60 transition-colors duration-500">Headless architecture for ultimate flexibility.</p>
                        </div>
                        <div className="mt-8 font-mono text-[10px] text-white/40 bg-black p-4 rounded-xl border border-white/10 relative z-10 shadow-inner group-hover:border-teal-primary/30 transition-colors duration-500">
                            <span className="text-teal-primary mr-2 uppercase">GET</span>/v1/analytics/stream
                        </div>
                    </motion.div>

                    {/* Wide Card - Security */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                        className="md:col-span-1 group relative overflow-hidden rounded-[2rem] bg-[#050505] border border-white/10 p-8 md:p-12 flex flex-col justify-center items-center text-center hover:border-teal-primary/30 transition-all duration-500 hover:bg-white/[0.02]"
                    >
                        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:20px_20px]" />
                        <div className="w-20 h-20 rounded-full border border-teal-primary/20 flex items-center justify-center mb-8 bg-teal-primary/5 group-hover:scale-110 group-hover:bg-teal-primary/10 transition-all duration-500 relative z-10 shadow-[0_0_30px_rgba(54,184,165,0.1)]">
                            <Shield className="text-teal-primary" strokeWidth={1.5} size={32} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight relative z-10">Enterprise Grade</h3>
                        <p className="text-lg font-light text-white/40 relative z-10 border border-white/10 px-4 py-1.5 rounded-full bg-black mt-2">SOC2 Type II Compliant.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;