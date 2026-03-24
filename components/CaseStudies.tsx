
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "Fintech Core",
        category: "Banking",
        year: "2024",
        services: "Product Design / Security",
        img: "https://images.unsplash.com/photo-1639322537228-ad714dd474f5?q=80&w=2670&auto=format&fit=crop"
    },
    {
        title: "Global Logistics",
        category: "Supply Chain",
        year: "2023",
        services: "Dashboard / Real-time Data",
        img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop"
    },
    {
        title: "Luxury Commerce",
        category: "Retail",
        year: "2023",
        services: "Headless Shopify / 3D",
        img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop"
    },
    {
        title: "Telehealth App",
        category: "Healthcare",
        year: "2022",
        services: "Mobile App / HIPAA Comp.",
        img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop"
    }
];

const CaseStudies: React.FC = () => {
    const [activeProject, setActiveProject] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 120, mass: 0.8 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        mouseX.set(clientX);
        mouseY.set(clientY);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const { clientX, clientY } = e.touches[0];
        mouseX.set(clientX);
        mouseY.set(clientY);
    };

    return (
        <section
            id="work"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative py-32 md:py-48 bg-[#020202] border-t border-white/5 overflow-hidden cursor-auto md:cursor-none z-20 transition-colors duration-500 selection:bg-teal-primary selection:text-black"
        >
            {/* Ambient Base Light */}
            <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-teal-primary/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 mix-blend-screen" />

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 pb-8 border-b border-white/10">
                    <div className="text-left">
                        <span className="text-teal-primary font-mono text-[10px] uppercase tracking-[0.3em] block mb-4 border border-teal-primary/30 py-1.5 px-4 rounded-full w-fit bg-teal-primary/5">
                            Selected Works
                        </span>
                        <h2 className="text-5xl md:text-8xl lg:text-[9rem] font-black text-white tracking-tighter leading-[0.85] uppercase">
                            Provenance.
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-0 md:text-right w-full md:w-auto text-left flex flex-col items-start md:items-end">
                        <span className="font-mono text-[10px] text-white/40 block mb-2 uppercase tracking-[0.2em] md:text-right">Total Impact</span>
                        <div className="text-2xl md:text-4xl font-light text-white font-mono">$12.4B<span className="text-teal-primary">+</span></div>
                    </div>
                </div>

                <div className="flex flex-col">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            onMouseEnter={() => setActiveProject(index)}
                            onMouseLeave={() => setActiveProject(null)}
                            onTouchStart={(e) => {
                                const { clientX, clientY } = e.touches[0];
                                mouseX.set(clientX);
                                mouseY.set(clientY);
                                setActiveProject(index);
                            }}
                            onTouchEnd={() => setActiveProject(null)}
                            className="group relative flex flex-col py-12 md:py-20 border-b border-white/5 transition-all duration-500 hover:border-teal-primary/30 px-4 -mx-4 cursor-pointer overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-primary/0 via-teal-primary/5 to-teal-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full relative z-10">
                                <div className="flex items-baseline gap-6 md:gap-16 w-full mb-8 md:mb-0">
                                    <span className="font-mono text-sm text-white/30 group-hover:text-teal-primary transition-colors duration-500 w-8">
                                        0{index + 1}
                                    </span>
                                    <h3 className="text-4xl md:text-6xl lg:text-[5rem] font-black text-white/50 group-hover:text-white transition-all duration-500 tracking-tighter w-full uppercase origin-left group-hover:translate-x-4">
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-8 md:gap-12 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 md:transform md:translate-y-4 group-hover:translate-y-0 min-w-max w-full md:w-auto pl-14 md:pl-0">
                                    <div className="flex flex-col gap-2">
                                        <span className="text-[10px] font-mono tracking-widest uppercase text-teal-primary border border-teal-primary/20 px-3 py-1 bg-teal-primary/5 rounded-full w-fit">{project.services}</span>
                                        <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 px-3">{project.year}</span>
                                    </div>
                                    <div className="hidden md:flex w-14 h-14 rounded-full border border-white/20 items-center justify-center bg-black text-white ml-auto group-hover:bg-teal-primary group-hover:text-black group-hover:border-teal-primary group-hover:scale-110 transition-all duration-500">
                                        <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>

            <motion.div
                style={{
                    x,
                    y,
                    top: 0,
                    left: 0,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                className="fixed pointer-events-none z-50 w-[280px] h-[180px] md:w-[480px] md:h-[320px]"
            >
                <AnimatePresence>
                    {activeProject !== null && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.5, rotate: 5 }}
                            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                            className="relative w-full h-full p-2 bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-2xl border border-dark-border dark:border-white/10 shadow-2xl"
                        >
                            <div className="w-full h-full overflow-hidden rounded-xl bg-dark-surface relative">
                                <img
                                    src={projects[activeProject].img}
                                    alt="Project Preview"
                                    className="w-full h-full object-cover scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                    <div className="px-3 py-1 bg-white rounded-full text-black text-[10px] font-bold uppercase tracking-widest">
                                        {projects[activeProject].category}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default CaseStudies;
