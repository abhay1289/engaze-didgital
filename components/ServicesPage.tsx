
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue, AnimatePresence } from 'framer-motion';
import Footer from './Footer';
import {
    ArrowUpRight, Terminal, Cpu, Activity, Zap,
    Layers, Globe, Shield, Database, Layout, Command,
    GitBranch, Box, Lock, Search, ShoppingBag, Palette, Glasses, Monitor, Rocket, Code
} from 'lucide-react';

const EngineeringVisual = () => (
    <div className="w-full h-full bg-[#080808] rounded-xl border border-white/10 p-5 font-mono text-[10px] md:text-xs text-teal-primary/80 overflow-hidden relative shadow-inner-light text-left">
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
        <section className="min-h-screen pt-32 pb-20 px-6 bg-dark-base relative overflow-hidden flex flex-col justify-center">
            <div className="max-w-[1600px] mx-auto w-full relative z-10 text-left">
                <div className="flex flex-col gap-4 mb-12 items-start">
                    <motion.span
                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-teal-primary font-mono text-xs uppercase tracking-[0.4em]"
                    >
                        Service Architecture
                    </motion.span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className="lg:col-span-8 text-left">
                        <h1 className="text-7xl md:text-[8rem] font-bold text-light-neutral dark:text-white tracking-tighter leading-[0.85] mb-12 text-left">
                            Systems for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-primary to-teal-secondary">Scale.</span>
                        </h1>
                    </div>
                    <div className="lg:col-span-4 flex flex-col justify-end text-left">
                        <p className="text-light-dim text-xl leading-relaxed text-left">
                            We don't sell hours. We sell <span className="text-white">velocity</span>. Our modular service stack is designed to plug directly into enterprise workflows, eliminating technical debt and accelerating revenue.
                        </p>
                    </div>
                </div>
            </div>
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
        <section className="py-32 bg-dark-base relative z-10 text-left">
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="mb-20 text-left">
                    <motion.h2 className="text-4xl md:text-5xl font-bold text-light-neutral dark:text-white mb-6 tracking-tight text-left">
                        Core Modules
                    </motion.h2>
                    <motion.p className="text-light-dim max-w-xl text-lg text-left">
                        Select a protocol to initialize.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((s, i) => (
                        <motion.div
                            key={i}
                            className="group h-[520px] bg-light-surface dark:bg-[#080808] border border-dark-border dark:border-white/10 rounded-[2rem] p-3 flex flex-col relative overflow-hidden shadow-premium transition-all duration-700 text-left"
                        >
                            <div className="p-6 pb-0 relative z-10 text-left">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-dark-base dark:bg-white/5 border border-dark-border dark:border-white/10 flex items-center justify-center font-mono text-sm text-teal-primary">
                                        <s.icon size={20} />
                                    </div>
                                    <div className="font-mono text-[10px] text-light-dim border border-white/10 px-2 py-1 rounded-full bg-white/5">0{i + 1}</div>
                                </div>
                                <h3 className="text-3xl font-bold text-light-neutral dark:text-white mb-3 tracking-tight text-left">{s.title}</h3>
                                <p className="text-sm text-light-dim leading-relaxed mb-6 min-h-[40px] font-light text-left">{s.desc}</p>
                                <div className="flex gap-2 mb-8 flex-wrap">
                                    {s.tags.map(t => (
                                        <span key={t} className="text-[9px] font-mono uppercase px-2 py-1.5 rounded-md bg-dark-base dark:bg-white/5 text-light-neutral dark:text-white/50 tracking-wider">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-auto h-[240px] w-full bg-dark-base dark:bg-[#030303] rounded-2xl overflow-hidden relative border border-dark-border dark:border-white/5 mx-auto mb-1">
                                <div className="absolute inset-0 p-5">
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
        <section className="py-32 bg-dark-base relative overflow-hidden text-left">
            <div className="max-w-[1600px] mx-auto px-6 relative z-10 text-left">
                <div className="flex flex-col md:flex-row justify-between mb-24 items-start text-left">
                    <div className="text-left">
                        <span className="text-teal-primary font-mono text-xs uppercase tracking-[0.2em] mb-4 block">The Arsenal</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-light-neutral dark:text-white tracking-tighter text-left">Technology <br /> Stack.</h2>
                    </div>
                    <p className="max-w-md text-light-dim mt-8 md:mt-0 text-lg font-light leading-relaxed text-left">
                        We audit and select the optimal stack for your specific requirements.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
                    {categories.map((cat, i) => (
                        <div key={i} className="flex flex-col gap-6 text-left">
                            <div className="flex items-center gap-3 mb-2 pb-4 border-b border-dark-border dark:border-white/10 text-left">
                                <h3 className="font-bold text-xl text-light-neutral dark:text-white tracking-tight">{cat.name}</h3>
                            </div>
                            <div className="flex flex-col gap-3 text-left">
                                {cat.tools.map((tool, j) => (
                                    <div key={j} className="flex items-center justify-between p-2 -mx-2 rounded hover:bg-white/5 transition-colors text-left">
                                        <span className="text-light-dim transition-colors font-mono text-sm text-left">{tool}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServicesPage: React.FC = () => {
    return (
        <div className="bg-dark-base min-h-screen text-light-neutral dark:text-white transition-colors duration-500">
            <ServiceHero />
            <Modules />
            <TechTable />
            <Footer />
        </div>
    );
};

export default ServicesPage;
