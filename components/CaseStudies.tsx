
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
            className="relative py-24 md:py-32 bg-dark-base border-t border-dark-border dark:border-white/5 overflow-hidden cursor-auto md:cursor-none z-20 transition-colors duration-500"
        >
            <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-teal-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 pb-8 border-b border-dark-border dark:border-white/10">
                    <div className="text-left">
                        <span className="text-teal-primary font-mono text-xs uppercase tracking-[0.2em] block mb-4">
                            Selected Works
                        </span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-light-neutral dark:text-white tracking-tighter leading-[0.9]">
                            Provenance.
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-0 md:text-right w-full md:w-auto text-left">
                        <span className="font-mono text-xs text-light-dim block mb-2 md:text-right">Total Impact</span>
                        <div className="text-xl md:text-2xl font-light text-light-neutral dark:text-white">$12.4B Generated</div>
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
                            className="group relative flex flex-col py-10 md:py-16 border-b border-dark-border dark:border-white/5 transition-all duration-500 hover:border-teal-primary/30 px-4 -mx-4 cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black/[0.02] dark:bg-white/[0.02] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center -z-10" />

                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                                <div className="flex items-baseline gap-6 md:gap-16 w-full mb-6 md:mb-0">
                                    <span className="font-mono text-sm text-light-dim group-hover:text-teal-primary transition-colors duration-500 w-8">
                                        0{index + 1}
                                    </span>
                                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-light-neutral dark:text-white md:text-light-neutral/40 md:dark:text-white/40 md:group-hover:text-light-neutral md:dark:group-hover:text-white transition-colors duration-500 tracking-tighter w-full">
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-8 md:gap-12 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:transform md:translate-y-4 group-hover:translate-y-0 min-w-max w-full md:w-auto pl-14 md:pl-0">
                                    <div className="flex flex-col md:flex-row gap-1 md:gap-12">
                                        <span className="text-xs md:text-sm font-mono tracking-wider uppercase text-teal-primary">{project.services}</span>
                                        <span className="text-xs md:text-sm font-mono text-light-dim">{project.year}</span>
                                    </div>
                                    <div className="hidden md:flex w-10 h-10 rounded-full border border-dark-border dark:border-white/20 items-center justify-center text-light-neutral dark:text-white ml-auto">
                                        <ArrowUpRight size={16} />
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
