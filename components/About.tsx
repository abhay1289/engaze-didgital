import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, useMotionTemplate } from 'framer-motion';
import Footer from './Footer';
import Magnetic from './ui/Magnetic';
import { ArrowUpRight, Globe, Target, Zap, Shield, ChevronDown, Plus, Radio, MoveUpRight, Code, Box, Layers, Activity } from 'lucide-react';

// --- Shared Components ---

// Custom Grain Overlay
const GrainOverlay = () => (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-100 contrast-100" />
    </div>
);

const SectionHeader = ({ label, title, light = false }: { label: string, title: React.ReactNode, light?: boolean }) => (
    <div className="mb-20 md:mb-32 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-8 border-b border-white/10">
            <div className="text-left w-full">
                <div className="flex items-center justify-between w-full mb-6">
                    <span className={`font-mono text-[10px] uppercase tracking-[0.4em] ${light ? 'text-teal-primary' : 'text-teal-primary'}`}>
                        {label}
                    </span>
                    <div className="hidden md:flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-white/30">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-primary animate-pulse" />
                        System_Active
                    </div>
                </div>
                <h2 className={`text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-left uppercase ${light ? 'text-dark-base' : 'text-white'}`}>
                    {title}
                </h2>
            </div>
        </div>
    </div>
);

// --- Hero Section: "The Digital Void" ---

// --- Hero Section: "The Digital Void" ---

const AboutHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    // Mouse Spotlight Logic
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative h-[120vh] flex flex-col justify-center items-center overflow-hidden bg-dark-base"
        >
            {/* Background: Digital Noise & Grid */}
            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-150" />
            <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_90%)]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            {/* Scanning Light Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vh] h-[200vh] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_340deg,rgba(54,184,165,0.05)_360deg)]"
                />
            </div>

            {/* Content */}
            <motion.div style={{ y, opacity }} className="relative z-10 w-full px-6 flex flex-col items-center text-center">
                <div className="mb-12 flex flex-col items-center gap-4">
                    <motion.div
                        initial={{ height: 0 }} animate={{ height: 60 }} transition={{ duration: 1, ease: "circOut" }}
                        className="w-[1px] bg-gradient-to-b from-transparent via-teal-primary to-transparent"
                    />
                    <motion.span
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
                        className="font-mono text-[9px] text-teal-primary tracking-[0.5em] uppercase border border-teal-primary/30 px-3 py-1 rounded-full backdrop-blur-md"
                    >
                        Est. 2018 — Global Operations
                    </motion.span>
                </div>

                <div className="flex flex-col items-center leading-none relative group cursor-default">
                    {/* Spotlight Title */}
                    <h1
                        className="text-[14vw] font-black tracking-tighter text-white/10 relative z-10"
                        style={{
                            backgroundImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,1), rgba(255,255,255,0.1))`,
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                            transition: "background-image 0s" // Instant update for mouse
                        }}
                    >
                        THE ANOMALY
                    </h1>
                    {/* Base dim layer to ensure partial visibility */}
                    <h1 className="text-[14vw] font-black tracking-tighter text-white/5 absolute inset-0 z-0">
                        THE ANOMALY
                    </h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="mt-12 max-w-2xl text-lg md:text-2xl text-white/60 font-light leading-relaxed tracking-wide"
                >
                    We don't just write code. We architect <span className="text-white font-medium">revenue engines</span> for the world's most ambitious brands.
                </motion.p>
            </motion.div>

            {/* HUD Elements */}
            <div className="absolute bottom-12 left-12 hidden md:flex flex-col gap-2 text-white/20 font-mono text-[9px] uppercase tracking-widest text-left">
                <span>Coordinates: 40.7128° N, 74.0060° W</span>
                <span>System Status: Optimal</span>
            </div>
        </section>
    );
};

// --- Manifesto Section: "The Code" ---

// --- Manifesto Section: "The Code" (Scramble Effect) ---

// --- Manifesto Section: "Unused" (Removed ScrambleString) ---

// --- Manifesto Section: "The Code" (Focus Reveal) ---
// Uses a mask to reveal text based on scroll position

const Manifesto = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "end 0.5"]
    });

    const content = "Legacy systems are the enemy of speed. In a world of infinite leverage, the only competitive advantage is velocity. We bridge the gap between high-level strategy and relentless engineering. We build the operating systems that power billion-dollar growth.";
    const words = content.split(" ");

    return (
        <section className="py-32 md:py-64 px-6 md:px-12 bg-dark-base relative z-10 text-left">
            <div ref={container} className="max-w-7xl mx-auto">
                <p className="text-4xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-left flex flex-wrap gap-x-4 gap-y-2">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

                        return (
                            <motion.span key={i} style={{ opacity }} className="text-white">
                                {word}
                            </motion.span>
                        );
                    })}
                </p>
                <div className="mt-20 flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-teal-primary" />
                    <span className="font-mono text-teal-primary text-xs uppercase tracking-widest">Our Doctrine</span>
                </div>
            </div>
        </section>
    );
};

// --- Values: "The Protocol" (Grid) ---

// --- Values: "The Protocol" (Sticky Stack) ---

const ProtocolCard = ({ item, index, progress }: { item: any, index: number, progress: any }) => {
    return (
        <motion.div
            className="sticky top-[20vh] flex flex-col items-start justify-between min-h-[60vh] p-12 mb-24 border border-white/10 bg-[#0A0A0A] backdrop-blur-xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            style={{
                scale: useTransform(progress, [0, 1], [1, 0.95]),
                marginBottom: `${(5 - index) * 10}px`
            }}
        >
            <div className="absolute top-0 right-0 p-12 opacity-20">
                <item.icon size={120} strokeWidth={0.5} className="text-white" />
            </div>

            <div className="relative z-10">
                <span className="font-mono text-teal-primary text-xs uppercase tracking-widest mb-4 block">/ 0{index + 1} _ Axiom</span>
                <h3 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase">{item.title}</h3>
            </div>

            <div className="relative z-10 max-w-2xl">
                <p className="text-white/60 text-xl md:text-2xl leading-relaxed">
                    {item.desc}
                </p>
            </div>

            {/* Animated Gradient Border */}
            <div className="absolute inset-0 border border-teal-primary/0 hover:border-teal-primary/20 transition-colors duration-500 pointer-events-none" />
        </motion.div>
    );
}

const ProtocolSection = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });

    const values = [
        { title: "Radical Transparency", desc: "No black boxes. We share our process, our code, and our data. Trust is engineered, not promised.", icon: Code },
        { title: "Velocity Over Perfection", desc: "Ship fast, break things, fix faster. The market rewards speed, not hesitation.", icon: Zap },
        { title: "First Principles", desc: "We don't copy. We deconstruct problems to their core truths and build up from there.", icon: Box },
        { title: "Modular Architecture", desc: "Systems designed to scale. Component-driven development ensuring infinite flexibility.", icon: Layers },
        { title: "Data-Driven Design", desc: "Aesthetics backed by analytics. Every pixel serves a purpose in the user journey.", icon: Activity },
        { title: "Global Compliance", desc: "Built for the world. Standards-compliant code that works across borders and devices.", icon: Globe },
    ];

    return (
        <section ref={container} className="bg-dark-base py-32 border-t border-white/5 relative">
            <SectionHeader label="The Protocol" title="Core Axioms" />
            <div className="max-w-5xl mx-auto px-6">
                {values.map((v, i) => (
                    <ProtocolCard key={i} item={v} index={i} progress={scrollYProgress} />
                ))}
            </div>
        </section>
    );
};

// --- Timeline: "Vertical Neural Spine" ---

const timelineEvents = [
    { year: "2018", title: "Genesis Block", desc: "Engaze founded. A skeleton crew focusing on pure code architecture for early-stage startups." },
    { year: "2020", title: "Series A Partners", desc: "Expanded to enterprise services. Became the technical backbone for 3 unicorns." },
    { year: "2022", title: "Global Mesh", desc: "Opened distributed hubs in Singapore and Berlin. Launched 'Engaze Labs' for internal R&D." },
    { year: "2024", title: "The Singularity", desc: "Integration of AI-native workflows. Delivering billion-dollar infrastructure as a service." },
];

const Timeline = () => {
    return (
        <section className="py-32 bg-dark-base relative overflow-hidden">
            {/* Center Line with Scanning Effect */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2">
                <motion.div
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-transparent via-teal-primary to-transparent opacity-50"
                />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {timelineEvents.map((event, i) => (
                    <div key={i} className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-24 mb-32 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        {/* Content Side */}
                        <div className="w-full md:w-1/2 text-left">
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`p-8 border-l-2 ${i % 2 === 0 ? 'md:border-l-0 md:border-r-2 md:text-right' : 'border-l-2'} border-teal-primary/30 relative`}
                            >
                                <span className="font-mono text-teal-primary text-4xl font-bold opacity-20 absolute -top-10 left-0 md:left-auto md:right-0">{event.year}</span>
                                <h3 className="text-3xl font-bold text-white mb-4 relative z-10">{event.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed relative z-10">{event.desc}</p>
                            </motion.div>
                        </div>

                        {/* Spacer for Center Line */}
                        <div className="hidden md:block w-[1px] relative">
                            {/* Central Node Pulse */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-dark-base border border-teal-primary">
                                <motion.div
                                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 rounded-full bg-teal-primary"
                                />
                            </div>
                        </div>

                        {/* Empty Side for Balance */}
                        <div className="w-full md:w-1/2 hidden md:block" />
                    </div>
                ))}
            </div>
        </section>
    );
};


// --- Leadership: "Holographic Cards" ---

// --- Leadership: "Holographic Cards" ---

// --- Leadership: "Interactive Index" ---

const Leadership = () => {
    const leaders = [
        { name: "Alex V.", role: "Principal Architect", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" },
        { name: "Sarah J.", role: "Design Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800&q=80" },
        { name: "David L.", role: "Tech Lead", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=800&q=80" },
        { name: "Emily R.", role: "Growth Strategist", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=800&q=80" }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-32 bg-dark-base border-t border-white/5 relative min-h-screen flex flex-col justify-center">
            <SectionHeader label="Intelligence" title="The Architects" />

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row gap-24">
                {/* List Side */}
                <div className="w-full md:w-1/2 flex flex-col pointer-events-auto z-20">
                    {leaders.map((leader, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setActiveIndex(i)}
                            onMouseLeave={() => setActiveIndex(null)}
                            className="group relative border-b border-white/10 py-12 cursor-pointer transition-all duration-300 hover:pl-8"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter transition-colors duration-300 ${activeIndex === i ? 'text-teal-primary' : 'text-white/40 group-hover:text-white'}`}>
                                    {leader.name}
                                </h3>
                                <ArrowUpRight className={`transition-all duration-300 ${activeIndex === i ? 'text-teal-primary opacity-100 rotate-45' : 'text-white/20 opacity-0'}`} size={32} />
                            </div>
                            <span className="font-mono text-xs uppercase tracking-widest text-white/40 mt-2 block group-hover:text-white transition-colors">{leader.role}</span>
                        </div>
                    ))}
                </div>

                {/* Preview Side (Fixed) */}
                <div className="hidden md:block w-full md:w-1/2 relative h-[600px]">
                    <div className="sticky top-32 w-full h-full">
                        {leaders.map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                                animate={{
                                    opacity: activeIndex === i ? 1 : 0,
                                    scale: activeIndex === i ? 1 : 0.9,
                                    rotate: activeIndex === i ? 0 : -2
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute inset-0 bg-white/[0.05] border border-white/10 overflow-hidden"
                            >
                                <img src={leader.img} alt={leader.name} className="w-full h-full object-cover opacity-80" />
                                <div className="absolute inset-0 bg-teal-primary/10 mix-blend-overlay" />

                                {/* Scanline */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_51%)] bg-[size:100%_4px] opacity-20" />

                                <div className="absolute bottom-8 left-8 p-4 bg-black/50 backdrop-blur-md border border-white/10">
                                    <span className="text-teal-primary font-mono text-xs uppercase block">{leader.role}</span>
                                </div>
                            </motion.div>
                        ))}

                        {activeIndex === null && (
                            <div className="absolute inset-0 flex items-center justify-center border border-white/5 bg-white/[0.01]">
                                <span className="font-mono text-white/20 text-xs uppercase tracking-widest">Select an Agent</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Metrics: "Impact Data" with CountUp ---
const Counter = ({ value, label }: { value: string, label: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const numericValue = parseInt(value.replace(/\D/g, '')); // Extract number
    const suffix = value.replace(/[0-9]/g, ''); // Extract suffix like '+'

    const springValue = useSpring(0, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        if (isInView) {
            springValue.set(numericValue);
        }
    }, [isInView, numericValue, springValue]);

    const displayValue = useTransform(springValue, (current) => Math.round(current) + suffix);

    return (
        <div ref={ref} className="flex flex-col items-center md:items-start group">
            <motion.span className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-2 group-hover:text-teal-primary transition-colors duration-500">
                {String(value).includes('06') || String(value).includes('04') ? <motion.span>{displayValue}</motion.span> : <span>{value}</span>}
            </motion.span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-teal-primary/60 group-hover:text-teal-primary transition-colors">{label}</span>
        </div>
    );
};

const Metrics = () => (
    <section className="py-24 bg-teal-primary/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            {[
                { label: "Years Active", value: "06" },
                { label: "Projects Shipped", value: "140+" },
                { label: "Team Members", value: "45" },
                { label: "Global Hubs", value: "04" },
            ].map((stat, i) => (
                <Counter key={i} value={stat.value} label={stat.label} />
            ))}
        </div>
    </section>
);


// --- Global Footprint: "Wireframe Globe" ---
const GlobalFootprint = () => {
    return (
        <section className="py-32 bg-dark-base border-t border-white/5 overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2 text-left">
                    <span className="font-mono text-teal-primary text-xs uppercase tracking-widest mb-6 block">Global Infrastructure</span>
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
                        DISTRIBUTED <br /><span className="text-white/30">OPERATIONS.</span>
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed max-w-md mb-12">
                        Our decentralized network ensures 24/7 uptime and rapid deployment capabilities across all major time zones.
                    </p>

                    <div className="grid grid-cols-2 gap-8">
                        {["New York", "London", "Singapore", "Berlin"].map((city, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-teal-primary rounded-full animate-pulse" />
                                <span className="text-white font-mono uppercase tracking-widest text-xs">{city}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center">
                    {/* Complex Gyroscope Globe */}
                    <div className="relative w-[400px] h-[400px] opacity-60 mix-blend-screen">

                        {/* Core Sphere */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-4 rounded-full border border-teal-primary/20"
                        >
                            <div className="absolute inset-0 rounded-full border border-white/5 rotate-45" />
                        </motion.div>

                        {/* Outer Ring 1 */}
                        <motion.div
                            animate={{ rotateX: 360, rotateY: 180 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-teal-primary/30"
                        />

                        {/* Outer Ring 2 (Offset) */}
                        <motion.div
                            animate={{ rotateX: 180, rotateY: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-indigo-500/30"
                        />

                        {/* Axis Ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-12 rounded-full border border-white/5 border-dashed"
                        />

                        {/* Core Glow */}
                        <div className="absolute inset-0 bg-teal-primary/5 blur-3xl rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};


// --- Awards Section: "Recognition" ---

const Awards = () => {
    return (
        <section className="py-24 bg-dark-base border-t border-white/5 relative overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="text-left">
                        <span className="font-mono text-teal-primary text-[10px] uppercase tracking-[0.4em] mb-4 block">Recognition</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Hall of Vapor</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-teal-primary animate-pulse" />
                        <span className="text-white/40 font-mono text-xs uppercase tracking-widest">Awwwards / FWA / CSS Design Awards</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-8">
                    {[
                        { year: "2024", award: "Site of the Day", org: "Awwwards", project: "Vertex Finance" },
                        { year: "2023", award: "Best UI/UX", org: "CSS Design Awards", project: "Nexus API" },
                        { year: "2023", award: "Mobile Excellence", org: "FWA", project: "Orbital" },
                    ].map((item, i) => (
                        <div key={i} className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-500 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                            <div className="flex justify-between items-start mb-8">
                                <span className="font-mono text-teal-primary text-xs">{item.year}</span>
                                <ArrowUpRight className="text-white/20 group-hover:text-teal-primary transition-colors" size={16} />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{item.award}</h3>
                            <div className="flex justify-between items-end">
                                <span className="text-white/40 text-sm font-mono uppercase tracking-wider">{item.org}</span>
                                <span className="text-white text-sm font-medium">{item.project}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Trusted By: "The Network" ---

// --- Trusted By: "The Network" ---

const TrustedBy = () => {
    return (
        <section className="py-24 bg-teal-primary/5 border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-12">
                <span className="font-mono text-teal-primary text-[10px] uppercase tracking-[0.4em]">Trusted By Industry Leaders</span>
            </div>

            <div className="relative flex overflow-x-hidden group">
                {/* Gradient Masks for Smooth Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-teal-primary/5 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-teal-primary/5 to-transparent z-10" />

                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-32 px-16">
                    {/* Repeated Logos Text for Effect (since we don't have SVGs handy, using stylized text) */}
                    {["Google", "Stripe", "Vercel", "Linear", "Raycast", "Shopify", "Airbnb", "Discord"].map((brand, i) => (
                        <span key={i} className="text-3xl md:text-5xl font-black text-white/10 uppercase tracking-tighter hover:text-white/30 transition-colors cursor-default">
                            {brand}
                        </span>
                    ))}
                    {["Google", "Stripe", "Vercel", "Linear", "Raycast", "Shopify", "Airbnb", "Discord"].map((brand, i) => (
                        <span key={`dup-${i}`} className="text-3xl md:text-5xl font-black text-white/10 uppercase tracking-tighter hover:text-white/30 transition-colors cursor-default">
                            {brand}
                        </span>
                    ))}
                </div>

                <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 md:gap-32 px-16">
                    {/* Duplicate for seamless loop */}
                    {["Google", "Stripe", "Vercel", "Linear", "Raycast", "Shopify", "Airbnb", "Discord"].map((brand, i) => (
                        <span key={i} className="text-3xl md:text-5xl font-black text-white/10 uppercase tracking-tighter hover:text-white/30 transition-colors cursor-default">
                            {brand}
                        </span>
                    ))}
                    {["Google", "Stripe", "Vercel", "Linear", "Raycast", "Shopify", "Airbnb", "Discord"].map((brand, i) => (
                        <span key={`dup-${i}`} className="text-3xl md:text-5xl font-black text-white/10 uppercase tracking-tighter hover:text-white/30 transition-colors cursor-default">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};


const StartBuild = () => (
    <section className="py-32 md:py-48 bg-dark-base relative overflow-hidden flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative z-10 max-w-4xl mx-auto">
            <span className="font-mono text-teal-primary text-xs uppercase tracking-widest mb-6 block">Ready to deploy?</span>
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-12 leading-[0.9]">
                SCALE YOUR <br /><span className="text-teal-primary">VISION.</span>
            </h2>

            <div className="flex justify-center">
                <Magnetic strength={30}>
                    <button className="group relative flex items-center justify-center gap-4 px-12 py-6 bg-white text-dark-base rounded-full text-xs font-black tracking-[0.3em] uppercase transition-all duration-500 hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] overflow-hidden">
                        <span className="relative z-10">Start The Project</span>
                        <ArrowUpRight size={18} className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-teal-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                </Magnetic>
            </div>
        </div>
    </section>
);

const About: React.FC = () => {
    return (
        <div className="bg-dark-base min-h-screen relative overflow-x-hidden font-sans selection:bg-teal-primary selection:text-black transition-colors duration-500 text-left">
            <GrainOverlay />
            <AboutHero />
            <Metrics />
            <Manifesto />
            <ProtocolSection />
            <Timeline />
            <Leadership />
            <GlobalFootprint />
            <Awards />
            <TrustedBy />
            <StartBuild />
            <Footer />
        </div>
    );
};

export default About;
