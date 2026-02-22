import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionTemplate, useMotionValue } from 'framer-motion';
import Footer from './Footer';
import Magnetic from './ui/Magnetic';
import { ArrowUpRight, Globe, Target, Zap, Shield, ChevronDown, Plus, Code, Box, Layers, Activity, Hexagon, Cpu } from 'lucide-react';

// --- Shared Components ---

const GrainOverlay = () => (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.02] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-100 contrast-100" />
    </div>
);

const SectionHeader = ({ label, title, subtitle }: { label: string, title: React.ReactNode, subtitle?: string }) => (
    <div className="mb-24 px-6 md:px-12 max-w-[1800px] mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pb-12 border-b border-white/10 relative">
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 opacity-50" />
            <div className="text-left w-full max-w-4xl">
                <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-teal-400 bg-teal-400/10 px-4 py-2 rounded-full border border-teal-400/20 backdrop-blur-md">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
                        {label}
                    </div>
                </div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                    {title}
                </h2>
                {subtitle && (
                    <p className="mt-8 text-xl text-white/50 font-light max-w-2xl leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    </div>
);

// --- Hero Section: Cinematic 3D Depth ---

const AboutHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative h-[130vh] flex justify-center items-center overflow-hidden bg-[#030303] perspective-1000"
        >
            {/* Deep Background Grid */}
            <motion.div style={{ y: y2, scale }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
            </motion.div>

            {/* Glowing Mouse Orb */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            800px circle at ${mouseX}px ${mouseY}px,
                            rgba(45, 212, 191, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Dynamic Abstract Shapes */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
            />

            <motion.div style={{ y: y1, opacity }} className="relative z-10 w-full px-6 flex flex-col items-center text-center mt-[-10vh]">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-md mb-12">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-teal-400">Pioneering the Digital Frontier</span>
                </div>

                <h1 className="text-[12vw] sm:text-[10vw] font-black tracking-tighter leading-[0.85] text-white mix-blend-plus-lighter relative">
                    <span className="block overflow-hidden relative pb-4">
                        <motion.span
                            initial={{ y: 200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="block"
                        >
                            ENGINEERING
                        </motion.span>
                    </span>
                    <span className="block overflow-hidden relative">
                        <motion.span
                            initial={{ y: 200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-white to-teal-400"
                        >
                            THE IMPOSSIBLE
                        </motion.span>
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                    className="mt-12 max-w-3xl text-xl md:text-3xl text-white/50 font-light leading-relaxed tracking-wide"
                >
                    We build infrastructure for billion-dollar ambitions. A convergence of design, engineering, and raw velocity.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-[-15vh] w-[1px] h-32 bg-gradient-to-b from-teal-500 to-transparent"
                />
            </motion.div>
        </section>
    );
};

// --- Philosophy: Premium Manifesto ---

const Manifesto = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.8", "end 0.4"]
    });

    const content = "Status quo is the enemy. In an era of infinite leverage, the only moat is velocity. We strip away the unnecessary, challenge first principles, and construct digital revenue engines that scale ruthlessly. We don't just write code; we architect the future.";
    const words = content.split(" ");

    return (
        <section className="py-40 px-6 md:px-12 bg-[#030303] relative z-10 text-left overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-teal-500/5 blur-[150px] rounded-full" />
            </div>

            <div ref={container} className="max-w-[1400px] mx-auto relative z-10">
                <p className="text-4xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight text-white/10 flex flex-wrap gap-x-4 gap-y-2 lg:gap-x-6 lg:gap-y-4">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const colorProgress = useTransform(scrollYProgress, [start, end], ["rgba(255,255,255,0.1)", "rgba(255,255,255,1)"]);

                        return (
                            <motion.span key={i} style={{ color: colorProgress }} className="relative">
                                {word}
                            </motion.span>
                        );
                    })}
                </p>

                <div className="mt-32 flex items-center gap-6 border-l border-teal-500 pl-6">
                    <p className="text-teal-400 font-mono text-sm uppercase tracking-[0.2em] max-w-md leading-relaxed">
                        This is our doctrine. No compromises. No bloated timelines. Just pure, unadulterated execution.
                    </p>
                </div>
            </div>
        </section>
    );
};

// --- Bento Grid Values ---

const BentoCard = ({ title, desc, icon: Icon, span = "col-span-1", delay = 0 }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay }}
            onMouseMove={handleMouseMove}
            className={`group relative flex flex-col justify-between p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden ${span}`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(45, 212, 191, 0.1),
                            transparent 80%
                        )
                    `,
                }}
            />
            {/* Glossy top border effect */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex justify-between items-start mb-16">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 group-hover:bg-teal-500/20 group-hover:border-teal-500/50 transition-all duration-500">
                    <Icon className="text-white group-hover:text-teal-400 transition-colors duration-500" size={32} strokeWidth={1.5} />
                </div>
                <ArrowUpRight className="text-white/20 group-hover:text-teal-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" size={24} />
            </div>

            <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">{title}</h3>
                <p className="text-white/50 text-lg leading-relaxed">{desc}</p>
            </div>

            {/* Background Icon Decoration */}
            <div className="absolute -bottom-10 -right-10 opacity-[0.03] transform group-hover:scale-110 group-hover:opacity-[0.05] transition-all duration-700 pointer-events-none">
                <Icon size={300} strokeWidth={0.5} />
            </div>
        </motion.div>
    );
};

const ProtocolSection = () => {
    return (
        <section className="bg-[#030303] py-40 relative border-t border-white/5">
            <SectionHeader
                label="The Ecosystem"
                title="Bento Framework"
                subtitle="A modular, first-principles approach to digital architecture. Each component is designed for maximum leverage and absolute autonomy."
            />

            <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <BentoCard
                        title="Quantum Velocity"
                        desc="We bypass the traditional agile bloat. Our shipping cycles are measured in days, not quarters. Speed is our ultimate weapon."
                        icon={Zap}
                        span="lg:col-span-2"
                        delay={0.1}
                    />
                    <BentoCard
                        title="First Principles"
                        desc="Deconstructing assumptions to build from fundamental truths. Zero legacy code."
                        icon={Hexagon}
                        delay={0.2}
                    />
                    <BentoCard
                        title="Modular Systems"
                        desc="Infinite scalability through decoupled, isolated components."
                        icon={Layers}
                        delay={0.3}
                    />
                    <BentoCard
                        title="Data Dominance"
                        desc="Gut feelings are obsolete. Every micro-interaction is tracked, analyzed, and optimized."
                        icon={Activity}
                        delay={0.4}
                    />
                    <BentoCard
                        title="Fortress Security"
                        desc="Military-grade encryption and zero-trust protocols baked into the core DNA of every build."
                        icon={Shield}
                        span="lg:col-span-2 md:col-span-2"
                        delay={0.5}
                    />
                </div>
            </div>
        </section>
    );
};

// --- Horizontal Timeline: Cinematic ---

const Timeline = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    const events = [
        { year: "2018", title: "Genesis Block", desc: "Engaze founded. A skeleton crew focusing on pure code architecture for early-stage startups." },
        { year: "2020", title: "Series A Partners", desc: "Expanded to enterprise services. Became the technical backbone for 3 unicorns." },
        { year: "2022", title: "Global Mesh", desc: "Opened distributed hubs in Singapore and Berlin. Launched 'Engaze Labs' for internal R&D." },
        { year: "2024", title: "The Singularity", desc: "Integration of AI-native workflows. Delivering billion-dollar infrastructure as a service." },
        { year: "2026", title: "Spatial Web", desc: "Next-gen immersive interfaces and Web3 integrations becoming our new standard." }
    ];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#030303]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-32 left-6 md:left-12 z-20">
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal-400 bg-teal-400/10 px-4 py-2 rounded-full border border-teal-400/20 backdrop-blur-md inline-block">
                        Evolution Graph
                    </div>
                </div>

                {/* Horizontal Progress Line */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 z-0">
                    <motion.div
                        className="h-full bg-gradient-to-r from-teal-500/0 via-teal-500 to-teal-500 shadow-[0_0_20px_rgba(45,212,191,0.5)]"
                        style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                    />
                </div>

                <motion.div style={{ x }} className="flex gap-32 px-[10vw] relative z-10 w-[200vw]">
                    {events.map((event, i) => (
                        <div key={i} className="flex flex-col justify-center min-w-[400px] md:min-w-[600px] group">
                            {/* Dot on line */}
                            <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#030303] border-4 border-white/10 group-hover:border-teal-400 transition-colors duration-500 flex items-center justify-center z-10">
                                <div className="w-2 h-2 rounded-full bg-white/50 group-hover:bg-teal-400 transition-colors duration-500" />
                            </div>

                            <div className={`transform ${i % 2 === 0 ? '-translate-y-48' : 'translate-y-48'} transition-all duration-700`}>
                                <div className="text-[6rem] md:text-[8rem] font-black text-white/5 tracking-tighter leading-none mb-4 group-hover:text-white/10 transition-colors">
                                    {event.year}
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight flex items-center gap-4">
                                    {event.title}
                                    <ArrowUpRight className="text-teal-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" />
                                </h3>
                                <p className="text-white/50 text-lg md:text-xl leading-relaxed max-w-sm group-hover:text-white/70 transition-colors">
                                    {event.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Global Vignette for depth */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(3,3,3,1)]" />
            </div>
        </section>
    );
};

// --- Statistics with Number Roll ---

const StatBox = ({ value, label, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, { stiffness: 50, damping: 20 });

    useEffect(() => {
        if (isInView) {
            springValue.set(parseInt(value));
        }
    }, [isInView, value, springValue]);

    const displayValue = useTransform(springValue, (current) => Math.floor(current));

    return (
        <div ref={ref} className="flex flex-col relative group py-12 px-8 border-l border-white/10 hover:bg-white/[0.02] transition-colors duration-500">
            <div className="absolute top-0 left-0 w-[2px] h-0 bg-teal-500 group-hover:h-full transition-all duration-500" />
            <div className="flex items-baseline gap-1">
                <motion.span className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                    {displayValue}
                </motion.span>
                <span className="text-6xl md:text-8xl font-black text-teal-500">{suffix}</span>
            </div>
            <span className="font-mono text-sm uppercase tracking-[0.2em] text-white/40 mt-6 block">{label}</span>
        </div>
    );
};

const Metrics = () => (
    <section className="py-24 bg-[#030303] border-y border-white/10 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-r border-white/10">
                <StatBox value="10" label="Years Experience" suffix="+" />
                <StatBox value="250" label="Enterprise Projects" suffix="+" />
                <StatBox value="14" label="Global Awards" suffix="" />
                <StatBox value="99" label="System Uptime" suffix="%" />
            </div>
        </div>
    </section>
);

// --- Leadership: Cursor Follow Cards ---

const Leadership = () => {
    const leaders = [
        { name: "Alexander Volt", role: "Chief Executive Architect", desc: "Former Tech Lead at Stripe. Obsessed with scalable microservices.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
        { name: "Sarah Jenkins", role: "VP of Digital Experience", desc: "Award-winning creative director. Bridges logic and emotion.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop" },
        { name: "David Lin", role: "Head of AI Integration", desc: "PhD in Machine Learning. Integrating LLMs into legacy pipelines.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" }
    ];

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    return (
        <section className="py-40 bg-[#030303] relative border-t border-white/5 cursor-default" onMouseMove={handleMouseMove}>
            <SectionHeader label="The Syndicate" title="Operating Core" subtitle="The minds behind the machine. A concentrated group of industry outliers." />

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative">
                <div className="flex flex-col">
                    {leaders.map((leader, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative border-b border-white/5 py-16 transition-all duration-500 hover:px-8 hover:bg-white/[0.02]"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                                <div>
                                    <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white/50 group-hover:text-white transition-colors duration-500">
                                        {leader.name}
                                    </h3>
                                    <p className="text-teal-400 font-mono text-sm uppercase tracking-widest mt-4">
                                        {leader.role}
                                    </p>
                                </div>
                                <div className="max-w-md text-white/40 group-hover:text-white/80 transition-colors duration-500 md:text-right text-lg">
                                    {leader.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Floating Image Reveal */}
                <motion.div
                    className="pointer-events-none fixed top-0 left-0 w-[400px] h-[500px] z-50 overflow-hidden rounded-2xl hidden md:block border border-white/10 shadow-2xl"
                    style={{
                        x: useTransform(mouseX, (val) => val + 20),
                        y: useTransform(mouseY, (val) => val - 250),
                        opacity: hoveredIndex !== null ? 1 : 0,
                        scale: hoveredIndex !== null ? 1 : 0.8,
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    {leaders.map((leader, i) => (
                        <motion.img
                            key={i}
                            src={leader.img}
                            alt={leader.name}
                            className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 contrast-125 mix-blend-luminosity"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredIndex === i ? 1 : 0, scale: hoveredIndex === i ? 1 : 1.1 }}
                            transition={{ duration: 0.4 }}
                        />
                    ))}
                    {/* Glass overlay */}
                    <div className="absolute inset-0 bg-teal-500/20 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

// --- Global Footprint: 3D Ring System ---

const GlobalFootprint = () => {
    return (
        <section className="py-40 bg-[#030303] border-t border-white/5 overflow-hidden relative">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-20">
                <div className="w-full lg:w-1/2 text-left z-10 relative">
                    <div className="inline-block px-4 py-2 border border-white/10 rounded-full font-mono text-xs uppercase tracking-widest text-white/50 mb-8 backdrop-blur-md">
                        Global Infrastructure
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                        EDGE <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-600">NETWORK.</span>
                    </h2>
                    <p className="text-white/50 text-xl leading-relaxed max-w-lg mb-12">
                        Deployments across 14 edge regions. Millisecond latency routing. We build systems that never sleep, serving billions of requests without breaking a sweat.
                    </p>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        {["San Francisco", "London", "Tokyo", "Berlin", "Singapore", "New York"].map((city, i) => (
                            <div key={i} className="flex items-center gap-4 group">
                                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:border-teal-500 transition-colors">
                                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full group-hover:scale-150 group-hover:shadow-[0_0_10px_#2dd4bf] transition-all" />
                                </div>
                                <span className="text-white font-medium text-lg tracking-wide group-hover:text-teal-400 transition-colors">{city}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center pointer-events-none">
                    {/* Mindblowing CSS Gyroscope */}
                    <div className="relative w-[500px] h-[500px] opacity-80 mix-blend-screen perspective-1000">
                        {/* Center Node */}
                        <div className="absolute inset-[40%] rounded-full bg-teal-500 shadow-[0_0_100px_40px_rgba(45,212,191,0.4)] animate-pulse" />

                        {/* Orbit Circles */}
                        {[
                            { delay: 0, rx: 360, ry: 180, rz: 0, size: "inset-0", border: "border-white/10 border-dashed" },
                            { delay: 5, rx: 180, ry: 360, rz: 90, size: "inset-[10%]", border: "border-teal-500/30" },
                            { delay: 10, rx: -360, ry: 180, rz: 180, size: "inset-[20%]", border: "border-white/20" },
                            { delay: 15, rx: 180, ry: -360, rz: 270, size: "inset-[30%]", border: "border-teal-400/50" }
                        ].map((ring, i) => (
                            <motion.div
                                key={i}
                                animate={{ rotateX: ring.rx, rotateY: ring.ry, rotateZ: ring.rz }}
                                transition={{ duration: 25 + ring.delay, repeat: Infinity, ease: "linear" }}
                                className={`absolute ${ring.size} rounded-full border ${ring.border}`}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Satellites */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Infinite Client Marquee ---

const TrustedBy = () => {
    const brands = ["Veridian Dynamics", "Axiom", "Nexus", "Stark Ind.", "Wayland", "Cyberdyne", "LexCorp", "Massive Dynamic"];

    return (
        <section className="py-32 bg-[#020202] border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <span className="font-mono text-teal-500 text-xs uppercase tracking-[0.4em]">Securing The Top 1%</span>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none" />

                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    className="flex items-center gap-24 px-12"
                >
                    {[...brands, ...brands, ...brands].map((brand, i) => (
                        <span key={i} className="text-4xl md:text-5xl font-black text-white/5 uppercase tracking-tighter hover:text-white/20 transition-colors whitespace-nowrap cursor-default">
                            {brand}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

// --- CTA ---

const StartBuild = () => {
    return (
        <section className="relative py-48 bg-[#030303] overflow-hidden flex items-center justify-center">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-teal-500/10 blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
                <Magnetic strength={0.2}>
                    <div className="w-24 h-24 mb-12 rounded-full border border-teal-500/30 flex items-center justify-center bg-teal-500/10 backdrop-blur-xl group cursor-pointer hover:bg-teal-500/20 transition-all duration-500 shadow-[0_0_30px_rgba(45,212,191,0.2)]">
                        <Cpu className="text-teal-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" size={40} />
                    </div>
                </Magnetic>

                <h2 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter leading-[0.85] mb-8">
                    INITIATE <br /><span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">SEQUENCE.</span>
                </h2>

                <p className="text-white/50 text-2xl font-light mb-16 max-w-2xl">
                    Stop building for the present. The future is already here. Let's engineer your competitive advantage.
                </p>

                <Magnetic strength={50}>
                    <button className="relative group px-12 py-6 bg-white rounded-full overflow-hidden">
                        <div className="absolute inset-0 w-full h-full bg-teal-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        <span className="relative z-10 flex items-center gap-4 text-black font-black uppercase tracking-[0.2em] text-sm">
                            Deploy Project <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" size={18} />
                        </span>
                    </button>
                </Magnetic>
            </div>
        </section>
    );
};

const About: React.FC = () => {
    return (
        <div className="bg-[#030303] min-h-screen relative overflow-x-hidden font-sans selection:bg-teal-400 selection:text-black transition-colors duration-500 text-left">
            <GrainOverlay />
            <AboutHero />
            <Metrics />
            <Manifesto />
            <ProtocolSection />
            <Timeline />
            <Leadership />
            <GlobalFootprint />
            <TrustedBy />
            <StartBuild />
            <Footer />
        </div>
    );
};

export default About;
