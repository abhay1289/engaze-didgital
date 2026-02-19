import React, { useRef, useState, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView, MotionValue } from 'framer-motion';
import Footer from './Footer';
import Magnetic from './ui/Magnetic';
import { ArrowUpRight, Globe, Target, Zap, Shield, ChevronDown, Plus } from 'lucide-react';

// --- Shared Components ---

const SectionHeader = ({ label, title, light = false }: { label: string, title: React.ReactNode, light?: boolean }) => (
    <div className="mb-20 md:mb-32 px-6 md:px-12 max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-8 border-b border-current" style={{ borderColor: light ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' }}>
            <div className="text-left">
                <span className={`font-mono text-[10px] uppercase tracking-[0.4em] mb-6 block ${light ? 'text-teal-primary' : 'text-teal-primary'}`}>
                    {label}
                </span>
                <h2 className={`text-4xl md:text-7xl font-bold tracking-tighter leading-[0.9] text-left ${light ? 'text-dark-base' : 'text-white'}`}>
                    {title}
                </h2>
            </div>
            <div className={`hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest ${light ? 'text-dark-base/40' : 'text-white/40'}`}>
                <div className="w-2 h-2 rounded-full bg-teal-primary animate-pulse" />
                System_Active
            </div>
        </div>
    </div>
);

// --- Hero Section ---

const AboutHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const words = ["ENGINEERING", "THE_FUTURE"];

    return (
        <section ref={containerRef} className="relative h-[120vh] flex flex-col justify-center items-center overflow-hidden bg-dark-base">
            {/* Background Grid Engine */}
            <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_90%)]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
                <motion.div
                    animate={{ top: ["-10%", "110%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-primary/30 to-transparent"
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
                        className="font-mono text-[10px] text-teal-primary tracking-[0.5em] uppercase"
                    >
                        Since 2018
                    </motion.span>
                </div>

                <div className="flex flex-col items-center leading-none">
                    {words.map((word, i) => (
                        <div key={i} className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    delay: 0.2 + (i * 0.1),
                                    duration: 1.5,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className="text-[12vw] font-black tracking-tighter text-white mix-blend-difference"
                            >
                                {word}
                            </motion.h1>
                        </div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="mt-12 max-w-xl text-lg md:text-xl text-white/50 font-light leading-relaxed"
                >
                    We are the anomaly. Architects of algorithmic infrastructure for billion-dollar valuations.
                </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20"
            >
                <div className="w-[1px] h-12 bg-white/10" />
                <span className="text-[9px] font-mono tracking-[0.3em] uppercase">Scroll to Initialize</span>
            </motion.div>
        </section>
    );
};

// --- Manifesto Section ---

const ManifestoWord = ({ word, i, length, scrollYProgress }: { word: string, i: number, length: number, scrollYProgress: any }) => {
    const start = i / length;
    const end = start + (1 / length);
    const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

    return (
        <motion.span style={{ opacity }} className="text-white transition-opacity duration-300">
            {word}
        </motion.span>
    );
};

const Manifesto = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.8", "end 0.8"]
    });

    const content = "Old models are obsolete. We bridge the gap between high-level strategy and relentless engineering. We don't just build websites; we architect revenue engines.";
    const words = content.split(" ");

    return (
        <section className="py-32 md:py-48 px-6 md:px-12 bg-dark-base relative z-10 text-left">
            <div ref={container} className="max-w-6xl mx-auto">
                <p className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] justify-start text-left">
                    {words.map((word, i) => (
                        <ManifestoWord
                            key={i}
                            word={word}
                            i={i}
                            length={words.length}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </p>
                <div className="mt-20 w-full h-[1px] bg-white/10" />
            </div>
        </section>
    );
};

// --- Horizontal Timeline ---

const timelineItems = [
    { year: "2018", title: "Inception", desc: "Founded with a mission to bridge the gap in digital engineering.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c" },
    { year: "2020", title: "Evolution", desc: "Shifted focus to enterprise-grade digital transformation.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b" },
    { year: "2022", title: "Expansion", desc: "Established distributed teams across key global markets.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" },
    { year: "2024", title: "Scale", desc: "Partnering with Fortune 500 innovators on critical infrastructure.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" },
];

const HorizontalTimeline = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={targetRef} className="hidden md:block relative h-[400vh] bg-dark-base">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="absolute top-12 left-12 z-20 text-left">
                    <span className="font-mono text-[10px] text-teal-primary tracking-[0.4em] uppercase">Chronology</span>
                </div>

                <motion.div style={{ x }} className="flex gap-24 px-24 h-[70vh] items-center">
                    {timelineItems.map((item, i) => (
                        <div key={i} className="relative w-[40vw] h-full flex-shrink-0 group text-left">
                            <div className="absolute -top-16 left-0 text-[120px] font-bold text-white/5 font-mono leading-none">
                                {item.year}
                            </div>
                            <div className="relative w-full h-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ease-out border-l border-white/10 pl-8">
                                <div className="w-full h-[60%] overflow-hidden relative mb-8">
                                    <div className="absolute inset-0 bg-teal-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <motion.img
                                        src={`${item.img}?auto=format&fit=crop&w=1600&q=80`}
                                        alt={item.title}
                                        className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                    />
                                </div>

                                <div className="flex flex-col gap-4 text-left">
                                    <span className="font-mono text-teal-primary text-xs tracking-widest uppercase">/ {item.year}</span>
                                    <h3 className="text-4xl font-bold text-white tracking-tight">{item.title}</h3>
                                    <p className="text-white/60 text-lg font-light leading-relaxed max-w-md">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Progress Line */}
                <div className="absolute bottom-24 left-0 w-full h-[1px] bg-white/5">
                    <motion.div style={{ scaleX: scrollYProgress, originX: 0 }} className="h-full bg-teal-primary" />
                </div>
            </div>
        </section>
    );
};

// --- Mobile Timeline Fallback ---
const MobileTimeline = () => (
    <section className="md:hidden py-24 bg-dark-base px-6 text-left">
        <SectionHeader label="Chronology" title="Our Journey" />
        <div className="flex flex-col gap-16 border-l border-white/10 pl-8 ml-4 text-left">
            {timelineItems.map((item, i) => (
                <div key={i} className="relative text-left">
                    <div className="absolute -left-[39px] top-0 w-5 h-5 rounded-full bg-dark-base border border-teal-primary flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-teal-primary rounded-full" />
                    </div>
                    <span className="text-teal-primary font-mono text-xs mb-2 block">{item.year}</span>
                    <h3 className="text-3xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-6">{item.desc}</p>
                    <div className="h-48 overflow-hidden relative">
                        <img src={`${item.img}?auto=format&fit=crop&w=800&q=80`} alt={item.title} className="w-full h-full object-cover grayscale" />
                    </div>
                </div>
            ))}
        </div>
    </section>
);


// --- Protocol (Sticky Cards) ---

const cards = [
    { title: "Data Truth", desc: "We simplify complexity. Our decisions are rooted in measurable data points, not assumptions.", icon: Target, id: "01" },
    { title: "Velocity", desc: "Speed is a feature. We engineer systems designed for rapid deployment and continuous iteration.", icon: Zap, id: "02" },
    { title: "Precision", desc: "Quality is non-negotiable. We adhere to strict coding standards and automated testing protocols.", icon: Shield, id: "03" },
];

const ProtocolSection = () => {
    return (
        <div className="bg-dark-base py-32 md:py-48">
            <SectionHeader label="The Protocol" title={<>Engineer. <span className="text-white/40">Scale.</span></>} />

            <div className="flex flex-col items-center px-4 md:px-6 gap-6 md:gap-12">
                {cards.map((card, i) => {
                    return (
                        <div
                            key={i}
                            className="sticky top-32 w-full max-w-5xl bg-[#0A0A0A] border border-white/10 p-8 md:p-16 flex flex-col md:flex-row justify-between gap-12 group transition-all duration-500 hover:border-teal-primary/30 text-left"
                            style={{
                                minHeight: '400px',
                                transformOrigin: 'top center',
                            }}
                        >
                            {/* Decorative Corner */}
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="text-teal-primary" />
                            </div>

                            <div className="flex flex-col justify-between h-full relative z-10 text-left">
                                <div className="text-left">
                                    <span className="font-mono text-xs text-teal-primary tracking-widest mb-6 block">/ {card.id}</span>
                                    <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white mb-8 group-hover:bg-teal-primary group-hover:text-black transition-colors duration-500">
                                        <card.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight text-left">{card.title}</h3>
                                </div>
                                <div className="hidden md:block w-8 h-[1px] bg-white/20 group-hover:w-24 group-hover:bg-teal-primary transition-all duration-500" />
                            </div>

                            <div className="md:max-w-xs flex flex-col justify-end text-left">
                                <p className="text-lg text-white/60 font-light leading-relaxed text-left">
                                    {card.desc}
                                </p>
                            </div>

                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// --- Leadership (The Architects) ---

const leaders = [
    { name: "Alex V.", role: "Principal Architect", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400" },
    { name: "Sarah J.", role: "Design Director", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=400&h=400" },
    { name: "David L.", role: "Tech Lead", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=400&h=400" },
    { name: "Emily R.", role: "Growth Strategist", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?fit=crop&w=400&h=400" }
];

const Leadership = () => (
    <section className="py-32 bg-dark-base border-t border-white/5">
        <SectionHeader label="Leadership" title="The Architects" />
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {leaders.map((leader, i) => (
                <div key={i} className="group cursor-pointer text-left">
                    <div className="relative overflow-hidden mb-8 aspect-[3/4]">
                        <div className="absolute inset-0 bg-teal-primary/20 mix-blend-color z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                            src={leader.img}
                            alt={leader.name}
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                        />
                        {/* Editorial Lines */}
                        <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex flex-col gap-1 items-start text-left">
                        <h3 className="text-2xl font-bold text-white text-left">{leader.name}</h3>
                        <span className="font-mono text-xs text-teal-primary tracking-widest uppercase text-left">{leader.role}</span>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

// --- Global Footprint ---

const locations = [
    { city: "New York", code: "NYC", coords: "40.7128° N, 74.0060° W", status: "Active" },
    { city: "London", code: "LDN", coords: "51.5074° N, 0.1278° W", status: "Active" },
    { city: "Singapore", code: "SGP", coords: "1.3521° N, 103.8198° E", status: "Active" },
    { city: "Berlin", code: "BER", coords: "52.5200° N, 13.4050° E", status: "Active" },
];

const GlobalFootprint = () => {
    return (
        <section className="py-32 bg-dark-base border-t border-white/5">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between mb-24 items-start md:items-end">
                    <div className="text-left">
                        <span className="font-mono text-[10px] text-teal-primary uppercase tracking-[0.4em] mb-4 block">Network</span>
                        <h2 className="text-4xl font-bold text-white">Global Nodes</h2>
                    </div>
                    <div className="hidden md:flex items-center gap-2 self-end text-white/40 font-mono text-xs">
                        <Globe size={14} />
                        Distributed Operations
                    </div>
                </div>

                <div className="grid grid-cols-1 border-t border-white/10">
                    {locations.map((loc, i) => (
                        <div key={i} className="group flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors cursor-default md:px-8 gap-8 md:gap-0">
                            <div className="flex items-center gap-12 w-full md:w-auto text-left">
                                <span className="font-mono text-white/20 text-xs">0{i + 1}</span>
                                <span className="text-5xl md:text-7xl font-bold text-white/40 group-hover:text-white transition-colors duration-500 uppercase tracking-tighter">
                                    {loc.code}
                                </span>
                            </div>

                            <div className="flex justify-between w-full md:w-auto md:gap-32 mt-0 md:mt-0 items-center">
                                <div className="flex flex-col text-left">
                                    <span className="text-white text-lg font-bold">{loc.city}</span>
                                    <span className="text-white/40 font-mono text-xs">{loc.coords}</span>
                                </div>
                                <div className="w-2 h-2 rounded-full bg-teal-primary shadow-[0_0_10px_#36B8A5]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Main Layout ---

const About: React.FC = () => {
    return (
        <div className="bg-dark-base min-h-screen relative overflow-x-hidden font-sans selection:bg-teal-primary selection:text-black transition-colors duration-500 text-left">
            <AboutHero />
            <Manifesto />
            <HorizontalTimeline />
            <MobileTimeline />
            <ProtocolSection />
            <Leadership />
            <GlobalFootprint />
            <Footer />
        </div>
    );
};

export default About;
