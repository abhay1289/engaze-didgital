import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, useMotionValue, useMotionTemplate } from 'framer-motion';
import Footer from './Footer';
import Magnetic from './ui/Magnetic';
import { ArrowUpRight, Globe, Target, Zap, Shield, ChevronDown, Plus, Radio, MoveUpRight, Code, Box, Layers, Activity } from 'lucide-react';

// --- Shared Components ---

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

const AboutHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-[120vh] flex flex-col justify-center items-center overflow-hidden bg-dark-base">
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

            {/* Layered Ambient Orbs (Matched to Home) */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-1/4 top-0 w-[60vw] h-[60vw] bg-teal-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
            />
            <motion.div
                animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-1/4 bottom-0 w-[50vw] h-[50vw] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"
            />

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

                <div className="flex flex-col items-center leading-none relative">
                    {/* Glitch Effect Duplicate */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-30 blur-[2px] pointer-events-none mix-blend-screen">
                        <h1 className="text-[14vw] font-black tracking-tighter text-teal-primary/50 translate-x-[2px]">THE ANOMALY</h1>
                    </div>

                    <h1 className="text-[14vw] font-black tracking-tighter text-white mix-blend-screen relative z-10">
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

            <motion.div
                style={{ opacity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20"
            >
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

// --- Manifesto Section: "The Code" ---

// --- Manifesto Section: "The Code" (Scramble Effect) ---

const ScrambleString = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    const [display, setDisplay] = useState("");
    const [done, setDone] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
        let iteration = 0;

        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplay(
                    text
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                    setDone(true);
                }

                iteration += 1 / 2; // Speed of decoding
            }, 30);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [isInView, text, delay]);

    return (
        <span ref={ref} className={`${done ? "text-white" : "text-teal-primary"} transition-colors duration-500 font-mono`}>
            {display}
        </span>
    );
}

const Manifesto = () => {
    const content = "Legacy systems are the enemy of speed. In a world of infinite leverage, the only competitive advantage is velocity. We bridge the gap between high-level strategy and relentless engineering. We build the operating systems that power billion-dollar growth.";
    const words = content.split(" ");

    return (
        <section className="py-32 md:py-64 px-6 md:px-12 bg-dark-base relative z-10 text-left">
            <div className="max-w-7xl mx-auto">
                <p className="text-xl md:text-4xl lg:text-5xl font-bold leading-[1.4] tracking-tight text-left text-white/50">
                    {/* We treat the whole paragraph as a series of scrambled words for effect, or just chunks */}
                    {content.split('. ').map((sentence, i) => (
                        <span key={i} className="mr-2 inline-block">
                            <ScrambleString text={sentence + (i < content.split('. ').length - 1 ? '.' : '')} delay={i * 2000} />
                        </span>
                    ))}
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

const SpotlightCard = ({ item, index }: { item: any, index: number }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group relative border border-white/10 bg-white/[0.02] overflow-hidden p-8 md:p-12 transition-all duration-500 hover:border-teal-primary/30 flex flex-col justify-between h-[400px] text-left"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(54, 184, 165, 0.15), transparent 40%)`,
                }}
            />

            <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity z-20">
                <ArrowUpRight size={20} className="text-teal-primary" />
            </div>

            <div className="relative z-10">
                <span className="font-mono text-[9px] text-teal-primary tracking-widest uppercase mb-4 block">/ 0{index + 1}</span>
                <item.icon size={40} strokeWidth={1} className="text-white mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:text-teal-primary" />
            </div>

            <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed max-w-sm group-hover:text-white/80 transition-colors">
                    {item.desc}
                </p>
            </div>
        </div>
    );
};

const ProtocolSection = () => {
    const values = [
        { title: "Radical Transparency", desc: "No black boxes. We share our process, our code, and our data. Trust is engineered, not promised.", icon: Code },
        { title: "Velocity Over Perfection", desc: "Ship fast, break things, fix faster. The market rewards speed, not hesitation.", icon: Zap },
        { title: "First Principles", desc: "We don't copy. We deconstruct problems to their core truths and build up from there.", icon: Box },
        { title: "Modular Architecture", desc: "Systems designed to scale. Component-driven development ensuring infinite flexibility.", icon: Layers },
        { title: "Data-Driven Design", desc: "Aesthetics backed by analytics. Every pixel serves a purpose in the user journey.", icon: Activity },
        { title: "Global Compliance", desc: "Built for the world. Standards-compliant code that works across borders and devices.", icon: Globe },
    ];

    return (
        <section className="bg-dark-base py-32 border-t border-white/5">
            <SectionHeader label="The Protocol" title="Core Axioms" />
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((v, i) => (
                    <SpotlightCard key={i} item={v} index={i} />
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
            {/* Center Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {timelineEvents.map((event, i) => (
                    <div key={i} className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-24 mb-24 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        {/* Content Side */}
                        <div className="w-full md:w-1/2 text-left">
                            <div className={`p-8 border border-white/10 bg-white/[0.02] hover:border-teal-primary/50 transition-colors duration-500 relative group`}>
                                <span className="font-mono text-teal-primary text-xs mb-2 block">{event.year}</span>
                                <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{event.desc}</p>

                                {/* Connector Node */}
                                <div className={`absolute top-1/2 ${i % 2 === 0 ? '-left-[53px]' : '-right-[53px]'} w-3 h-3 bg-dark-base border border-teal-primary rounded-full hidden md:block z-20`}>
                                    <div className="absolute inset-0 bg-teal-primary animate-ping opacity-50 rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Spacer for Center Line */}
                        <div className="hidden md:block w-[1px]" />

                        {/* Empty Side for Balance */}
                        <div className="w-full md:w-1/2 hidden md:block" />
                    </div>
                ))}
            </div>
        </section>
    );
};


// --- Leadership: "Holographic Cards" ---

const Leadership = () => {
    const leaders = [
        { name: "Alex V.", role: "Principal Architect", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80" },
        { name: "Sarah J.", role: "Design Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=800&q=80" },
        { name: "David L.", role: "Tech Lead", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=800&q=80" },
        { name: "Emily R.", role: "Growth Strategist", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=800&q=80" }
    ];

    return (
        <section className="py-32 bg-dark-base border-t border-white/5">
            <SectionHeader label="Intelligence" title="The Architects" />
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {leaders.map((leader, i) => (
                    <div key={i} className="group cursor-pointer relative h-[500px] overflow-hidden">
                        <img
                            src={leader.img}
                            alt={leader.name}
                            className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-transparent to-transparent opacity-90" />

                        <div className="absolute bottom-0 left-0 w-full p-8 text-left">
                            <div className="w-full h-[1px] bg-white/20 mb-6 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            <h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{leader.name}</h3>
                            <span className="text-teal-primary font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 block">{leader.role}</span>
                        </div>

                        {/* Editorial Lines */}
                        <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                ))}
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

                <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center opacity-40 mix-blend-screen">
                    {/* Simplified CSS Sphere Representation */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-[400px] h-[400px] border border-teal-primary/30 rounded-full relative"
                    >
                        <div className="absolute inset-0 border border-white/10 rounded-full rotate-45 transform scale-90" />
                        <div className="absolute inset-0 border border-white/10 rounded-full -rotate-45 transform scale-90" />
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-teal-primary/20" />
                        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-teal-primary/20" />
                    </motion.div>
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
            <AboutHero />
            <Metrics />
            <Manifesto />
            <ProtocolSection />
            <Timeline />
            <Leadership />
            <GlobalFootprint />
            <StartBuild />
            <Footer />
        </div>
    );
};

export default About;
