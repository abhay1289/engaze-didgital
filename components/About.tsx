
import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import Footer from './Footer';
import { Target, Zap, Shield, ArrowUpRight, Globe, Users } from 'lucide-react';

const RevealText = ({ children, delay = 0 }: { children?: React.ReactNode, delay?: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });
    return (
        <span ref={ref} className="inline-block overflow-hidden align-bottom">
            <motion.span
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay }}
                className="inline-block"
            >
                {children}
            </motion.span>
        </span>
    );
};

const AboutHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="min-h-[90vh] relative flex flex-col justify-end pb-12 px-6 md:px-12 overflow-hidden bg-dark-base transition-colors duration-500 pt-32 md:pt-0">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay" />
            
            <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-12 items-start">
                    <div className="text-left">
                         <div className="flex items-center gap-4 mb-8">
                            <motion.span 
                                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-teal-primary font-mono text-xs uppercase tracking-[0.4em]"
                            >
                                Since 2018
                            </motion.span>
                        </div>
                        <h1 className="text-[15vw] md:text-[12vw] leading-[0.85] md:leading-[0.8] font-bold text-light-neutral dark:text-white tracking-tighter mix-blend-difference">
                            <RevealText>ENGINEERING</RevealText> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-primary to-teal-secondary">
                                <RevealText delay={0.1}>THE_FUTURE</RevealText>
                            </span>
                        </h1>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="max-w-md pb-4"
                    >
                        <p className="text-light-dim text-lg leading-relaxed font-light text-left pl-0">
                            We are the anomaly in the agency world. We don't just design; we build the algorithmic infrastructure that powers billion-dollar valuations.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

const Manifesto = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({ target: container, offset: ["start 0.9", "end 0.9"] });

    const content = "Old models are obsolete. We bridge the gap between high-level strategy and relentless engineering. We don't just build websites; we architect revenue engines.";
    const words = content.split(" ");

    return (
        <section className="py-20 md:py-32 px-6 md:px-12 bg-dark-base relative z-10 transition-colors duration-500">
             <div ref={container} className="max-w-[1400px] mx-auto text-left">
                <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.2] md:leading-[1.1] tracking-tight flex flex-wrap gap-x-[0.25em] gap-y-[0.1em] justify-start">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
                        return (
                            <motion.span key={i} style={{ opacity }} className="text-light-neutral dark:text-white transition-opacity">
                                {word}
                            </motion.span>
                        )
                    })}
                </p>
             </div>
        </section>
    );
};

const timelineItems = [
    { year: "2018", title: "Genesis", desc: "Founded in a garage in NYC with a single laptop and a vision to disrupt.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" },
    { year: "2020", title: "The Pivot", desc: "Shifted from generalist dev to algorithmic growth infrastructure.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" },
    { year: "2022", title: "Global Expansion", desc: "Opened nodes in London & Singapore. Team grew to 50+ engineers.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" },
    { year: "2024", title: "Market Dominance", desc: "Surpassed $12B in client revenue generated. SOC2 Type II Certified.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop" },
];

const HorizontalTimeline = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.5 });
    const x = useTransform(smoothProgress, [0, 1], ["0%", "-75%"]);

    return (
        <>
            <section ref={targetRef} className="hidden md:block relative h-[300vh] bg-dark-surface">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex h-full w-[400%] will-change-transform">
                        {timelineItems.map((item, i) => (
                            <div key={i} className="w-screen h-full flex-shrink-0 relative flex items-end">
                                <div className="absolute inset-0 z-0 overflow-hidden">
                                    <div className="absolute inset-0 bg-dark-base/40 z-10" />
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 ease-out" 
                                    />
                                </div>
                                <div className="relative z-20 p-24 w-full max-w-4xl bg-gradient-to-t from-black via-black/80 to-transparent text-left">
                                    <div className="text-[16rem] font-bold text-white/5 absolute -top-[60%] left-0 leading-none select-none pointer-events-none">
                                        {item.year}
                                    </div>
                                    <div className="relative">
                                        <span className="text-teal-primary font-mono text-xl">{item.year}</span>
                                        <h3 className="text-8xl font-bold text-white tracking-tighter mb-6">{item.title}</h3>
                                        <p className="text-white/70 text-2xl font-light leading-relaxed max-w-2xl">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="md:hidden py-20 bg-dark-base px-6 text-left">
                 <span className="text-light-neutral dark:text-white font-mono text-xs uppercase tracking-[0.2em] block mb-12 bg-dark-base/50 border border-dark-border dark:border-white/10 px-3 py-1 rounded-full w-fit">
                    Timeline
                 </span>
                 <div className="flex flex-col gap-12">
                     {timelineItems.map((item, i) => (
                         <div key={i} className="relative pb-8 text-left">
                             <span className="text-teal-primary font-mono text-sm mb-2 block">{item.year}</span>
                             <div className="mb-4 rounded-xl overflow-hidden h-48">
                                 <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale" />
                             </div>
                             <h3 className="text-3xl font-bold text-light-neutral dark:text-white mb-2">{item.title}</h3>
                             <p className="text-light-dim text-sm leading-relaxed">{item.desc}</p>
                         </div>
                     ))}
                 </div>
            </section>
        </>
    );
};

const cards = [
    { title: "Data Truth", desc: "We ignore opinions. We trust data. Every decision is backed by a proprietary 40-point analytics framework.", icon: Target, color: "bg-blue-500" },
    { title: "Velocity", desc: "Speed is the ultimate currency. We deploy production-grade code in days, not months.", icon: Zap, color: "bg-teal-primary" },
    { title: "Precision", desc: "Pixel-perfect is the bare minimum. We engineer robust, scalable systems that don't break.", icon: Shield, color: "bg-purple-500" },
];

const StickyCard: React.FC<{ card: typeof cards[0], index: number, total: number }> = ({ card, index, total }) => {
    return (
        <div 
            className="sticky top-24 md:top-28 mb-4 md:mb-8 w-full max-w-[1000px] min-h-[400px] md:h-[500px] rounded-3xl bg-light-surface dark:bg-[#0F0F0F] p-8 md:p-12 shadow-premium flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center justify-between overflow-hidden group transition-all duration-500"
            style={{ 
                marginTop: index * 20, 
                marginBottom: (total - index - 1) * 20 + 40
            }}
        >
            <div className="relative z-10 flex-1 text-left">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-dark-base/5 dark:bg-white/5 flex items-center justify-center text-teal-primary mb-6 border border-dark-border dark:border-white/10 shadow-lg">
                    <card.icon size={24} />
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-light-neutral dark:text-white mb-4 tracking-tight">{card.title}</h3>
                <p className="text-base md:text-lg text-light-dim dark:text-white/60 leading-relaxed max-w-lg">{card.desc}</p>
            </div>
            <div className="relative z-10 w-full md:w-auto text-left md:text-right mt-4 md:mt-0">
                <span className="font-mono text-6xl md:text-8xl font-bold text-dark-base/5 dark:text-white/5 select-none">0{index + 1}</span>
            </div>
        </div>
    );
};

const ProtocolSection = () => {
    return (
        <div className="relative bg-dark-base py-24">
             <div className="max-w-5xl mx-auto px-6 mb-12 md:mb-24 text-left md:text-center">
                 <span className="text-teal-primary font-mono text-sm uppercase tracking-[0.2em]">The Protocol</span>
                 <h2 className="text-4xl md:text-6xl font-bold text-light-neutral dark:text-white mt-4 tracking-tight">Three Laws of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-primary to-teal-secondary">Engagement</span></h2>
             </div>
             <div className="flex flex-col items-center px-4 md:px-6">
                {cards.map((card, i) => (
                    <StickyCard key={i} card={card} index={i} total={cards.length} />
                ))}
             </div>
        </div>
    );
};

const locations = [
    { city: "New York", country: "USA", coords: "40.7128° N, 74.0060° W", time: "EST", team: 24 },
    { city: "London", country: "UK", coords: "51.5074° N, 0.1278° W", time: "GMT", team: 12 },
    { city: "Singapore", country: "SG", coords: "1.3521° N, 103.8198° E", time: "SGT", team: 8 },
    { city: "Tokyo", country: "JP", coords: "35.6762° N, 139.6503° E", time: "JST", team: 6 },
];

const GlobalFootprint = () => {
    return (
        <section className="py-24 bg-dark-base relative overflow-hidden">
             <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end">
                    <div className="text-left">
                         <span className="text-teal-primary font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Network</span>
                         <h2 className="text-3xl md:text-5xl font-bold text-light-neutral dark:text-white tracking-tight">Global <br/>Footprint.</h2>
                    </div>
                    <div className="flex items-center gap-2 text-light-dim dark:text-white/40 font-mono text-sm mt-8 md:mt-0">
                        <Globe size={16} />
                        <span>OPERATING ACROSS 4 TIMEZONES</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {locations.map((loc, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 border border-dark-border dark:border-white/10 bg-light-surface dark:bg-[#0F0F0F] hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-500 relative overflow-hidden rounded-xl flex flex-col justify-between h-[260px] text-left"
                        >
                             <div>
                                <h3 className="text-3xl font-bold text-light-neutral dark:text-white mb-1 group-hover:text-teal-primary transition-colors">{loc.city}</h3>
                                <div className="text-light-dim dark:text-white/40 text-sm">{loc.country}</div>
                             </div>
                             <div className="mt-8 pt-6 flex justify-between items-center border-t border-dark-border dark:border-white/5">
                                <div className="flex items-center gap-2">
                                     <span className="text-xs font-mono text-light-dim dark:text-white/60">{loc.team} Operators</span>
                                </div>
                                <span className="text-xs font-mono text-light-dim dark:text-white/60">{loc.time}</span>
                             </div>
                        </motion.div>
                    ))}
                </div>
             </div>
        </section>
    );
};

const teamMembers = [
    { name: "Alex Chen", role: "Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop" },
    { name: "Sarah Vance", role: "Product", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop" },
    { name: "Marcus Thorne", role: "Tech Lead", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop" },
    { name: "Elena Rivas", role: "Design", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop" },
    { name: "David Kim", role: "Strategy", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop" },
];

const TeamSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative py-24 bg-dark-base overflow-hidden transition-colors duration-500">
             <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-12">
                 <div className="mb-16 flex justify-between items-end border-b border-dark-border dark:border-white/20 pb-8">
                     <h2 className="text-5xl md:text-8xl font-bold text-light-neutral dark:text-white tracking-tighter text-left">OPERATORS</h2>
                 </div>
                 <div className="flex flex-col">
                     {teamMembers.map((member, i) => (
                         <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group flex items-center justify-between py-6 md:py-8 border-b border-dark-border dark:border-white/10 cursor-pointer relative text-left"
                         >
                             <div className="flex items-baseline gap-4 md:gap-16 transition-transform duration-500 group-hover:translate-x-4">
                                 <span className="font-mono text-sm text-light-dim dark:text-white/40 group-hover:text-teal-primary w-6 text-left">0{i + 1}</span>
                                 <h3 className="text-3xl md:text-6xl font-medium text-light-neutral dark:text-white/80 group-hover:text-light-neutral dark:group-hover:text-white transition-colors tracking-tight text-left">
                                     {member.name}
                                 </h3>
                             </div>
                             <div className="flex items-center gap-2 md:gap-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500">
                                 <span className="font-mono text-teal-primary uppercase tracking-widest text-[10px] md:text-sm px-2 py-1 rounded bg-teal-primary/5 hidden sm:block">{member.role}</span>
                                 <ArrowUpRight className="text-light-neutral dark:text-white" size={18} />
                             </div>
                         </motion.div>
                     ))}
                 </div>
             </div>
        </section>
    );
};

const About: React.FC = () => {
  return (
    <div className="bg-dark-base min-h-screen relative overflow-x-hidden font-sans selection:bg-teal-primary selection:text-black transition-colors duration-500">
        <AboutHero />
        <Manifesto />
        <HorizontalTimeline />
        <ProtocolSection />
        <GlobalFootprint />
        <TeamSection />
        <Footer />
    </div>
  );
};

export default About;
