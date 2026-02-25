
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue, AnimatePresence } from 'framer-motion';
import Footer from './Footer';
import {
    ArrowUpRight, Terminal, Cpu, Activity, Zap,
    Layers, Globe, Shield, Database, Layout, Command,
    GitBranch, Box, Lock, Search, ShoppingBag, Palette, Glasses, Monitor, Rocket, Code
} from 'lucide-react';

// Custom Grain Overlay
const GrainOverlay = () => (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-100 contrast-100" />
    </div>
);

const EngineeringVisual = () => (
    <div className="w-full h-full bg-[#050505] rounded-xl border border-white/10 p-5 font-mono text-[10px] md:text-xs text-teal-primary/80 overflow-hidden relative shadow-inner-light text-left group-hover:border-teal-primary/30 transition-colors duration-500">
        <div className="space-y-3 opacity-90 leading-relaxed font-light">
            <p><span className="text-purple-400">import</span> <span className="text-white">{'{'}</span> <span className="text-yellow-400">ScaleEngine</span> <span className="text-white">{'}'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'@teal/core'</span>;</p>
            <p className="text-white/40">// Initialize high-velocity clusters</p>
            <p><span className="text-blue-400">const</span> <span className="text-white">cluster</span> = <span className="text-blue-400">await</span> ScaleEngine.<span className="text-yellow-300">deploy</span>({'{'}</p>
            <div className="pl-4 ml-1">
                <p>region: <span className="text-green-300">'global-edge'</span>,</p>
                <p>nodes: <span className="text-orange-400">1024</span>,</p>
                <p>redundancy: <span className="text-purple-400">true</span>,</p>
                <p>security: <span className="text-green-300">'military-grade'</span></p>
            </div>
            <p>{'}'});</p>
            <div className="mt-6 flex gap-2 items-center text-teal-primary/60 bg-teal-primary/5 p-2 rounded">
                <span>System Operational</span>
            </div>
        </div>
    </div>
);

const WebDesignVisual = () => (
    <div className="w-full h-full relative flex items-center justify-center perspective-1000">
        {[0, 1, 2].map((i) => (
            <motion.div
                key={i}
                animate={{
                    y: [0, -8, 0],
                    rotateX: [5, 0, 5],
                    rotateY: [-5, 0, -5],
                    zIndex: 3 - i
                }}
                transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                style={{
                    marginLeft: i * -25,
                    marginTop: i * 25,
                    backdropFilter: "blur(12px)"
                }}
                className="w-48 h-32 bg-white/5 border border-white/20 rounded-xl p-4 shadow-glass relative group transition-colors"
            >
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-primary to-blue-600 shadow-lg" />
                    <div className="h-2 w-20 bg-white/10 rounded-full" />
                </div>
                <div className="space-y-2">
                    <div className="h-2 w-full bg-white/5 rounded-full" />
                    <div className="h-2 w-3/4 bg-white/5 rounded-full" />
                </div>
            </motion.div>
        ))}
    </div>
);

const PerformanceVisual = () => (
    <div className="w-full h-full relative flex items-end justify-center gap-3 p-8 pb-0">
        {[40, 65, 50, 85, 60, 95, 100].map((h, i) => (
            <motion.div
                key={i}
                initial={{ height: "0%" }}
                whileInView={{ height: `${h}%` }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="w-8 bg-teal-primary/10 relative group rounded-t-sm"
            >
                <div className="absolute inset-0 bg-gradient-to-t from-teal-primary/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
        ))}
    </div>
);

const SeoVisual = () => (
    <div className="w-full h-full p-8 flex flex-col gap-4 relative overflow-hidden text-left">
        <div className="w-full h-10 bg-white/5 rounded-full border border-white/10 flex items-center px-4 gap-3">
            <Search size={14} className="text-teal-primary" />
            <div className="h-1.5 w-32 bg-white/10 rounded-full" />
        </div>
        {[1, 2, 3].map((i) => (
            <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.15, ease: "easeOut" }}
                className="w-full p-4 bg-white/[0.02] border border-white/5 rounded-xl flex flex-col gap-2"
            >
                <div className="h-1.5 w-1/3 bg-teal-primary/60 rounded-full" />
                <div className="h-1.5 w-3/4 bg-white/10 rounded-full" />
            </motion.div>
        ))}
    </div>
);

const AiVisual = () => (
    <div className="w-full h-full relative flex items-center justify-center">
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-2 h-2 bg-teal-primary rounded-full shadow-[0_0_15px_#36B8A5]"
                style={{
                    top: `${50 + 35 * Math.sin(i * (Math.PI / 3))}%`,
                    left: `${50 + 35 * Math.cos(i * (Math.PI / 3))}%`,
                }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2.5, delay: i * 0.2, repeat: Infinity }}
            />
        ))}
        <div className="absolute w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full z-10 border border-white/20 flex items-center justify-center">
            <Cpu size={20} className="text-white" />
        </div>
    </div>
);

const BrandingVisual = () => (
    <div className="w-full h-full flex items-center justify-center overflow-hidden bg-black relative">
        <div className="relative z-10 text-center mix-blend-difference">
            <motion.div
                className="text-5xl font-black text-white tracking-tighter"
            >
                BRAND
            </motion.div>
        </div>
    </div>
);

const EcommerceVisual = () => (
    <div className="w-full h-full p-8 flex flex-col justify-center gap-3 text-left">
        {[1, 2, 3, 4].map((i) => (
            <motion.div
                key={i}
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
                className="flex justify-between items-center p-3 bg-white/[0.03] rounded-lg border border-white/5 backdrop-blur-sm"
            >
                <div className="flex items-center gap-3">
                    <ShoppingBag size={14} className="text-teal-primary" />
                    <div className="space-y-1">
                        <div className="h-1.5 w-20 bg-white/20 rounded-full" />
                    </div>
                </div>
                <div className="text-[10px] font-mono text-green-400 font-bold bg-green-400/10 px-2 py-1 rounded">+$129</div>
            </motion.div>
        ))}
    </div>
);

const SpatialVisual = () => (
    <div className="w-full h-full flex items-center justify-center perspective-1000">
        <motion.div
            animate={{ rotateX: 360, rotateY: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 border border-teal-primary/30 relative rounded-2xl"
        >
            <div className="absolute inset-0 bg-teal-primary/5 rounded-2xl backdrop-blur-[2px]" />
        </motion.div>
        <Glasses className="absolute text-white mix-blend-overlay opacity-60 z-50" size={56} />
    </div>
);

const ServiceHero = () => {
    return (
        <section className="min-h-screen pt-32 pb-20 px-6 bg-[#030303] relative overflow-hidden flex flex-col justify-center">
            {/* Grid Matrix Background */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-teal-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

            <div className="max-w-[1800px] mx-auto w-full relative z-10 text-left">
                <div className="flex flex-col gap-4 mb-12 items-start">
                    <motion.span
                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-teal-primary font-mono text-[10px] px-3 py-1 border border-teal-primary/30 rounded-full uppercase tracking-[0.4em] backdrop-blur-md bg-teal-primary/5"
                    >
                        Service Architecture
                    </motion.span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className="lg:col-span-8 text-left relative">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ cascade: true, duration: 1 }}
                            className="text-6xl md:text-[9rem] font-black text-white tracking-tighter leading-[0.85] mb-12 text-left uppercase"
                        >
                            SYSTEMS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-primary via-white to-teal-secondary relative">
                                FOR SCALE.
                                <div className="absolute -inset-2 bg-teal-primary/20 blur-2xl -z-10" />
                            </span>
                        </motion.h1>
                    </div>
                    <div className="lg:col-span-4 flex flex-col justify-end text-left pb-12">
                        <p className="text-white/50 text-xl md:text-2xl leading-relaxed text-left font-light border-l border-teal-primary/30 pl-6">
                            We don't sell hours. We sell <span className="text-white font-medium">unrestricted velocity</span>. Our modular stack plugs directly into enterprise pipelines, eliminating technical debt.
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
                className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-white/30"
            >
                <div className="w-[1px] h-12 bg-white/10 overflow-hidden relative">
                    <motion.div
                        animate={{ top: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-0 w-full h-1/2 bg-teal-primary"
                    />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest">Scroll to Initialize</span>
            </motion.div>
        </section>
    );
};

const services = [
    { title: "Performance", desc: "Algorithmic campaign management & ROAS lift.", visual: <PerformanceVisual />, tags: ["Paid", "Social", "Search"], icon: Rocket },
    { title: "Web Design", desc: "Immersive experiences that convert.", visual: <WebDesignVisual />, tags: ["UI/UX", "WebGL", "Framer"], icon: Monitor },
    { title: "Engineering", desc: "Scalable, secure, robust architectures.", visual: <EngineeringVisual />, tags: ["React", "Node", "Python"], icon: Code },
    { title: "SEO", desc: "Technical precision & content authority.", visual: <SeoVisual />, tags: ["Rankings", "Audit", "Growth"], icon: Search },
    { title: "AI Systems", desc: "Predictive models & automation logic.", visual: <AiVisual />, tags: ["LLMs", "Neural", "Data"], icon: Cpu },
    { title: "Branding", desc: "Memorable identities & visual systems.", visual: <BrandingVisual />, tags: ["Identity", "Strategy", "Visual"], icon: Palette },
    { title: "Ecommerce", desc: "Full-funnel strategies for high volume.", visual: <EcommerceVisual />, tags: ["Shopify", "DTC", "Sales"], icon: ShoppingBag },
    { title: "Spatial", desc: "Next-gen AR & 3D engagement.", visual: <SpatialVisual />, tags: ["AR", "VR", "Meta"], icon: Glasses }
];

const Modules = () => {
    return (
        <section className="py-32 bg-[#050505] relative z-10 text-left border-t border-white/5">
            <div className="max-w-[1800px] mx-auto px-6">
                <div className="mb-24 text-left flex flex-col items-center justify-center text-center">
                    <motion.h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase">
                        Core Modules
                    </motion.h2>
                    <motion.p className="text-white/40 max-w-xl text-xl font-light">
                        Select a protocol to initialize.
                    </motion.p>
                </div>
                {/* Asymmetrical Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`group h-[480px] bg-white/[0.02] border border-white/10 hover:border-teal-primary/30 p-1 flex flex-col relative overflow-hidden shadow-premium transition-all duration-700 text-left ${i === 0 || i === 3 ? 'lg:col-span-2' : 'col-span-1'}`}
                        >
                            {/* Hover Gradient Reveal */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="p-8 pb-0 relative z-10 flex flex-col flex-1 text-left">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-12 rounded-full border border-white/10 bg-black flex items-center justify-center font-mono text-sm text-teal-primary group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(54,184,165,0)] group-hover:shadow-[0_0_20px_rgba(54,184,165,0.2)]">
                                        <s.icon size={20} className="group-hover:animate-pulse" />
                                    </div>
                                    <div className="font-mono text-[9px] text-white/30 border border-white/10 px-3 py-1 bg-black uppercase tracking-widest">Mode 0{i + 1}</div>
                                </div>

                                <h3 className="text-3xl font-black text-white mb-3 tracking-tight uppercase group-hover:text-teal-primary transition-colors text-left">{s.title}</h3>
                                <p className="text-base text-white/50 leading-relaxed min-h-[40px] font-light text-left max-w-md">{s.desc}</p>

                                <div className="flex gap-2 mt-auto mb-6 flex-wrap opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                    {s.tags.map(t => (
                                        <span key={t} className="text-[9px] font-mono uppercase px-2 py-1 bg-white/5 border border-white/10 text-white/50 tracking-wider">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="h-[200px] w-full bg-black relative border-t border-white/5 overflow-hidden">
                                <div className="absolute inset-0 p-5 scale-95 group-hover:scale-100 transition-transform duration-700">
                                    {s.visual}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TechTable = () => {
    const categories = [
        { name: "Frontend", tools: ["React", "Next.js", "Vue", "Svelte", "WebGL", "Three.js"] },
        { name: "Backend", tools: ["Node.js", "Python", "Go", "Rust", "GraphQL", "tRPC"] },
        { name: "DevOps", tools: ["AWS", "GCP", "Docker", "K8s", "Terraform", "Vercel"] },
        { name: "Data", tools: ["Postgres", "Redis", "Mongo", "Snowflake", "BigQuery", "Kafka"] },
    ];

    return (
        <section className="py-32 bg-[#020202] relative overflow-hidden text-left border-t border-white/5">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

            <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6">
                <span className="text-teal-primary font-mono text-[10px] uppercase tracking-[0.4em] mb-4 block border border-teal-primary/30 px-3 py-1 rounded-full">The Arsenal</span>
                <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6">
                    Technology Stack.
                </h2>
                <p className="max-w-xl text-white/50 text-xl font-light mb-24">
                    We don't just use frameworks. We weaponize them. Auditing and selecting the precise stack for maximum leverage.
                </p>
            </div>

            {/* Marquee Ticker */}
            <div className="relative flex overflow-x-hidden group pb-12 w-full">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none" />

                <div className="animate-marquee whitespace-nowrap flex items-center gap-6 px-6">
                    {categories.flatMap(cat => cat.tools).map((tool, i) => (
                        <div key={i} className="px-6 py-4 border border-white/10 bg-white/[0.02] rounded-full flex items-center gap-3 hover:bg-white/10 hover:border-teal-primary transition-all duration-300 cursor-default">
                            <div className="w-2 h-2 rounded-full bg-teal-primary/50" />
                            <span className="text-xl md:text-3xl font-black text-white/30 hover:text-white uppercase tracking-tighter transition-colors">{tool}</span>
                        </div>
                    ))}
                    {/* Duplicate for infinite effect */}
                    {categories.flatMap(cat => cat.tools).map((tool, i) => (
                        <div key={`dup-${i}`} className="px-6 py-4 border border-white/10 bg-white/[0.02] rounded-full flex items-center gap-3 hover:bg-white/10 hover:border-teal-primary transition-all duration-300 cursor-default">
                            <div className="w-2 h-2 rounded-full bg-teal-primary/50" />
                            <span className="text-xl md:text-3xl font-black text-white/30 hover:text-white uppercase tracking-tighter transition-colors">{tool}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative flex overflow-x-hidden group w-full" style={{ "--marquee-direction": "reverse" } as any}>
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none" />

                <div className="animate-marquee whitespace-nowrap flex items-center gap-6 px-6 [animation-direction:reverse]">
                    {categories.flatMap(cat => cat.tools).reverse().map((tool, i) => (
                        <div key={i} className="px-6 py-4 border border-white/10 bg-white/[0.02] rounded-full flex items-center gap-3 hover:bg-white/10 hover:border-teal-primary transition-all duration-300 cursor-default">
                            <div className="w-2 h-2 rounded-full bg-teal-primary/50" />
                            <span className="text-xl md:text-3xl font-black text-white/30 hover:text-white uppercase tracking-tighter transition-colors">{tool}</span>
                        </div>
                    ))}
                    {/* Duplicate for infinite effect */}
                    {categories.flatMap(cat => cat.tools).reverse().map((tool, i) => (
                        <div key={`dup-${i}`} className="px-6 py-4 border border-white/10 bg-white/[0.02] rounded-full flex items-center gap-3 hover:bg-white/10 hover:border-teal-primary transition-all duration-300 cursor-default">
                            <div className="w-2 h-2 rounded-full bg-teal-primary/50" />
                            <span className="text-xl md:text-3xl font-black text-white/30 hover:text-white uppercase tracking-tighter transition-colors">{tool}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServicesPage: React.FC = () => {
    return (
        <div className="bg-dark-base min-h-screen text-white transition-colors duration-500 selection:bg-teal-primary selection:text-black">
            <GrainOverlay />
            <ServiceHero />
            <Modules />
            <TechTable />
            <Footer />
        </div>
    );
};

export default ServicesPage;
