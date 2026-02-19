import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import Footer from './Footer';
import {
    ArrowUpRight, Terminal, Cpu, Activity, Zap,
    Layers, Globe, Shield, Database, Layout, Command,
    GitBranch, Box, Lock, Search, ShoppingBag, Palette, Glasses, Monitor, Rocket, Code
} from 'lucide-react';

// --- Shared / Utility Components ---

const GrainOverlay = () => (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-100 contrast-100" />
    </div>
);

// --- Hero Section: "System Initialization" ---

const ServiceHero = () => {
    const [bootStep, setBootStep] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setBootStep(prev => (prev < 4 ? prev + 1 : prev));
        }, 800);
        return () => clearInterval(interval);
    }, []);

    const bootLogs = [
        "> INITIALIZING_CORE_SERVICES...",
        "> LOAD_MODULE: [SCALE_ENGINE_V9]",
        "> ESTABLISHING_NEURAL_LINK...",
        "> ACCESS_GRANTED: AGENCY_OS"
    ];

    return (
        <section ref={containerRef} className="h-screen bg-dark-base relative overflow-hidden flex flex-col justify-center items-center text-center px-6">
            {/* Background Grid & Noise */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-dark-base via-transparent to-dark-base" />

            {/* Neural Network Abstract Visualization */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] border border-white/5 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-white/5 rounded-full border-dashed"
                />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto w-full">
                {/* Boot Sequence Text */}
                <div className="font-mono text-teal-primary/60 text-xs md:text-sm mb-8 h-24 flex flex-col items-center justify-end">
                    {bootLogs.map((log, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: bootStep >= i ? 1 : 0, y: bootStep >= i ? 0 : 10 }}
                            className="tracking-widest"
                        >
                            {log}
                        </motion.div>
                    ))}
                </div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: bootStep >= 3 ? 1 : 0, scale: bootStep >= 3 ? 1 : 0.9 }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="text-6xl md:text-[8rem] font-black text-white tracking-tighter leading-[0.9] md:leading-[0.85] uppercase mb-12"
                >
                    Systems for <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-primary to-teal-secondary relative">
                        Hyper-Scale
                        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-teal-primary opacity-50 blur-sm" />
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: bootStep >= 4 ? 1 : 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-white/50 text-xl font-light max-w-2xl mx-auto leading-relaxed"
                >
                    We engineer the digital infrastructure that powers the world's most ambitious brands. Modular, scalable, and built for velocity.
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: bootStep >= 4 ? 1 : 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 flex flex-col items-center gap-2"
            >
                <span className="font-mono text-[10px] text-teal-primary uppercase tracking-widest">Scroll to Initialize</span>
                <div className="w-[1px] h-12 bg-white/10 overflow-hidden relative">
                    <motion.div
                        animate={{ top: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute left-0 w-full h-1/2 bg-teal-primary"
                    />
                </div>
            </motion.div>
        </section>
    );
};

// --- Modules Section: Horizontal Scroll "Dossier" ---

const visuals = {
    engineering: (
        <div className="w-full h-full bg-black/40 backdrop-blur-md rounded-xl border border-white/10 p-6 font-mono text-xs text-teal-primary overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(54,184,165,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(54,184,165,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="relative z-10 space-y-2 opacity-80">
                <p><span className="text-purple-400">class</span> <span className="text-yellow-300">ScaleEngine</span> <span className="text-white">extends</span> <span className="text-purple-400">Core</span> {'{'}</p>
                <div className="pl-4 border-l border-white/10 ml-1">
                    <p><span className="text-blue-400">async</span> <span className="text-yellow-300">deploy</span>() {'{'}</p>
                    <p className="pl-4 text-green-400">// Initializing nodes...</p>
                    <p className="pl-4"><span className="text-purple-400">await</span> <span className="text-white">this.cluster.init({'{'}</span></p>
                    <p className="pl-8">nodes: <span className="text-orange-400">1024</span>,</p>
                    <p className="pl-8">mode: <span className="text-green-300">'hyper-scale'</span></p>
                    <p className="pl-4"><span className="text-white">{'}'})</span>;</p>
                    <p>{'}'}</p>
                </div>
                <p>{'}'}</p>
                <div className="mt-8 flex items-center gap-2 text-white/40">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Build Passing (v9.2.1)</span>
                </div>
            </div>
        </div>
    ),
    design: (
        <div className="w-full h-full relative flex items-center justify-center p-8">
            <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-48 h-32 bg-white/5 border border-white/20 backdrop-blur-md rounded-xl relative transform-style-3d shadow-[0_0_50px_rgba(54,184,165,0.2)]"
            >
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-primary to-blue-500" />
                    <div className="w-20 h-2 bg-white/10 rounded-full" />
                </div>
            </motion.div>
        </div>
    ),
    ai: (
        <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-teal-primary rounded-full"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                    }}
                    transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, delay: Math.random() * 2 }}
                />
            ))}
            <div className="relative z-10 w-24 h-24 rounded-full border border-teal-primary/30 flex items-center justify-center bg-teal-primary/5 backdrop-blur-sm">
                <Cpu className="text-teal-primary w-8 h-8" />
                <div className="absolute inset-0 border border-teal-primary/50 rounded-full animate-ping opacity-20" />
            </div>
        </div>
    ),
    seo: (
        <div className="w-full h-full p-8 flex flex-col gap-4 relative overflow-hidden">
            <div className="w-full h-10 bg-white/5 rounded-full border border-white/10 flex items-center px-4 gap-3">
                <Search size={14} className="text-teal-primary" />
                <div className="h-1.5 w-32 bg-white/10 rounded-full" />
            </div>
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="w-full p-4 bg-white/[0.02] border border-white/5 rounded-xl flex flex-col gap-2"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                    <div className="h-1.5 w-1/3 bg-teal-primary/60 rounded-full" />
                    <div className="h-1.5 w-3/4 bg-white/10 rounded-full" />
                </motion.div>
            ))}
        </div>
    ),
};

const services = [
    { title: "Engineering", category: "Core Infrastructure", desc: "Scalable, secure architectures built on React, Node, and Python. We build the backbone of your digital business.", visual: visuals.engineering, tags: ["Full-Stack", "Cloud", "Security"] },
    { title: "Interface Design", category: "User Experience", desc: "Pixel-perfect, immersive experiences using WebGL and Framer Motion. We design for conversion and delight.", visual: visuals.design, tags: ["UI/UX", "WebGL", "Motion"] },
    { title: "AI Systems", category: "Intelligence", desc: "Predictive models, automation logic, and LLM integration. Future-proof your operations with custom AI.", visual: visuals.ai, tags: ["LLMs", "Neural", "Automation"] },
    { title: "Technical SEO", category: "Growth", desc: "Data-driven rankings and authority. We optimize every scan line for maximum visibility.", visual: visuals.seo, tags: ["Audit", "Rankings", "Vitals"] },
];

const Modules = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-dark-base">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-16 px-12 md:px-32 items-center">
                    {/* Intro Card */}
                    <div className="min-w-[400px] md:min-w-[600px] flex flex-col justify-center">
                        <span className="font-mono text-teal-primary text-xs uppercase tracking-[0.4em] mb-4">The Suite</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                            Core <br /> Modules
                        </h2>
                        <p className="mt-8 text-white/50 text-xl max-w-sm">
                            Scroll to explore our protocol stack. Each module is designed to integrate seamlessly into your enterprise.
                        </p>
                    </div>

                    {/* Service Cards */}
                    {services.map((s, i) => (
                        <div key={i} className="min-w-[85vw] md:min-w-[1000px] h-[60vh] relative group">
                            <div className="absolute inset-0 bg-white/[0.02] border border-white/10 backdrop-blur-sm rounded-[2rem] overflow-hidden flex flex-col md:flex-row transition-colors duration-500 group-hover:border-teal-primary/30">
                                {/* Content Side */}
                                <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-between relative z-10 bg-dark-base/50">
                                    <div>
                                        <div className="flex justify-between items-start mb-12">
                                            <span className="font-mono text-[10px] text-teal-primary border border-teal-primary/30 px-3 py-1 rounded-full uppercase tracking-widest">{s.category}</span>
                                            <span className="font-mono text-4xl text-white/10 font-bold">0{i + 1}</span>
                                        </div>
                                        <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-none">{s.title}</h3>
                                        <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light">{s.desc}</p>
                                    </div>

                                    <div className="flex gap-2 flex-wrap mt-12">
                                        {s.tags.map(t => (
                                            <span key={t} className="text-[10px] font-mono uppercase px-3 py-2 rounded bg-white/5 text-white/70 border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Visual Side */}
                                <div className="w-full md:w-1/2 bg-black/20 border-l border-white/5 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center p-12">
                                        {s.visual}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Padding for end of scroll */}
                    <div className="min-w-[20vw]" />
                </motion.div>
            </div>
        </section>
    );
};

// --- Tech Stack: "Constellation" ---

const TechStack = () => {
    return (
        <section className="py-32 bg-dark-base border-t border-white/5 overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 text-center">
                <div className="mb-24">
                    <span className="font-mono text-teal-primary text-[10px] uppercase tracking-[0.4em] mb-4 block">The Arsenal</span>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">High-Velocity Stack</h2>
                </div>

                <div className="relative h-[600px] md:h-[800px] w-full border border-white/5 bg-white/[0.01] rounded-[3rem] overflow-hidden flex items-center justify-center">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

                    {/* Floating Nodes */}
                    {[
                        { name: "React", x: "20%", y: "20%", size: 6, icon: "⚛️" },
                        { name: "Next.js", x: "50%", y: "50%", size: 8, icon: "▲" },
                        { name: "Node.js", x: "80%", y: "30%", size: 5, icon: "🟢" },
                        { name: "Python", x: "30%", y: "70%", size: 6, icon: "🐍" },
                        { name: "TypeScript", x: "70%", y: "80%", size: 5, icon: "TS" },
                        { name: "WebGL", x: "60%", y: "20%", size: 4, icon: "🎲" },
                        { name: "AWS", x: "10%", y: "50%", size: 5, icon: "☁️" },
                        { name: "Docker", x: "90%", y: "60%", size: 4, icon: "🐳" }
                    ].map((tech, i) => (
                        <motion.div
                            key={i}
                            className="absolute flex flex-col items-center gap-4 cursor-pointer group"
                            style={{ left: tech.x, top: tech.y }}
                            animate={{
                                y: [0, -20, 0],
                                x: [0, 10, 0]
                            }}
                            transition={{
                                duration: 5 + Math.random() * 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i
                            }}
                        >
                            <div
                                className="rounded-full bg-dark-base border border-white/10 flex items-center justify-center group-hover:border-teal-primary/50 group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-10 backdrop-blur-sm"
                                style={{ width: `${tech.size}rem`, height: `${tech.size}rem` }}
                            >
                                <span className={`text-2xl text-teal-primary opacity-80 group-hover:opacity-100`}>
                                    {tech.icon || "⚡"}
                                </span>
                            </div>
                            <span className="absolute top-full mt-2 font-mono text-xs text-white/40 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/80 px-2 py-1 rounded border border-white/10">
                                {tech.name}
                            </span>

                            {/* Connecting Lines (Fake) */}
                            <div className="absolute top-1/2 left-1/2 w-[200px] h-[1px] bg-gradient-to-r from-teal-primary/20 to-transparent -z-10 origin-left animate-pulse"
                                style={{ transform: `rotate(${Math.random() * 360}deg)` }}
                            />
                        </motion.div>
                    ))}

                    <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-transparent to-dark-base pointer-events-none" />
                </div>
            </div>
        </section>
    );
}

const ServicesPage: React.FC = () => {
    return (
        <div className="bg-dark-base min-h-screen text-white transition-colors duration-500 selection:bg-teal-primary selection:text-black">
            <GrainOverlay />
            <ServiceHero />
            <Modules />
            <TechStack />
            <Footer />
        </div>
    );
};

export default ServicesPage;
