import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Footer from './Footer';
import { ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: "01",
        client: "NovaBank",
        title: "The Future of Fintech",
        category: "Product",
        year: "2024",
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop",
        tags: ["Fintech", "Mobile App", "Strategy"],
        desc: "Redefining the banking experience for the Gen Z demographic through gamified savings."
    },
    {
        id: "02",
        client: "Aura",
        title: "Ambient Computing",
        category: "Hardware",
        year: "2023",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
        tags: ["IoT", "Interface", "R&D"],
        desc: "A headless interface system for the next generation of smart home devices."
    },
    {
        id: "03",
        client: "Vanguard",
        title: "Logistics OS",
        category: "Enterprise",
        year: "2023",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
        tags: ["SaaS", "Dashboard", "System"],
        desc: "Global fleet management dashboard visualizing millions of data points in real-time."
    },
    {
        id: "04",
        client: "Echo",
        title: "Sonic Branding",
        category: "Brand",
        year: "2022",
        img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2670&auto=format&fit=crop",
        tags: ["Identity", "Audio", "Campaign"],
        desc: "Visualizing sound waves to create a distinct identity for a music streaming platform."
    },
    {
        id: "05",
        client: "Helix",
        title: "Genomic Data Vis",
        category: "Data",
        year: "2022",
        img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2680&auto=format&fit=crop",
        tags: ["Healthcare", "WebGL", "Analytics"],
        desc: "Simplifying complex genomic sequences into actionable insights for patients."
    },
    {
        id: "06",
        client: "Orbital",
        title: "Satellite Mapping",
        category: "Enterprise",
        year: "2021",
        img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
        tags: ["Geospatial", "React", "Three.js"],
        desc: "Mapping the stars. A 3D visualization tool for commercial satellite tracking."
    }
];

const categories = ["All", "Product", "Brand", "Enterprise", "Hardware", "Data"];

const GrainOverlay = () => (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-100 contrast-100" />
    </div>
);

const WorkHero = () => {
    const { scrollYProgress } = useScroll();
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <section className="min-h-[50vh] flex flex-col justify-end px-6 md:px-12 pb-24 bg-dark-base pt-48 relative overflow-hidden">
            {/* Abstract Background Element */}
            <motion.div
                style={{ rotate }}
                className="absolute -right-[10%] -top-[20%] w-[50vw] h-[50vw] border border-white/5 rounded-full border-dashed opacity-20 pointer-events-none"
            />

            <div className="max-w-[1800px] mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                >
                    <span className="text-teal-primary font-mono text-xs uppercase tracking-[0.4em] mb-6 block ml-2">Selected Works (2021-2024)</span>
                    <h1 className="text-[12vw] md:text-[10rem] leading-[0.85] font-black text-white tracking-tighter uppercase mix-blend-difference">
                        Archive
                    </h1>
                </motion.div>
            </div>
        </section>
    );
};

const WorkPage = () => {
    const [filter, setFilter] = useState("All");
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse spring
    const springX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouseMove = (e: React.MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    const filteredProjects = useMemo(() => {
        if (filter === "All") return projects;
        return projects.filter(p => p.category === filter);
    }, [filter]);

    return (
        <div onMouseMove={handleMouseMove} className="bg-dark-base min-h-screen text-white cursor-default selection:bg-teal-primary selection:text-black relative">
            <GrainOverlay />
            <WorkHero />

            {/* Sticky Filter Bar */}
            <div className="sticky top-0 z-40 bg-dark-base/80 backdrop-blur-xl border-y border-white/5 py-4">
                <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center gap-2 overflow-x-auto no-scrollbar">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all border ${filter === cat
                                    ? 'bg-white text-black border-white'
                                    : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Project List */}
            <div className="min-h-screen pb-48">
                {filteredProjects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        layoutId={project.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        onMouseEnter={() => setHoveredProject(i)}
                        onMouseLeave={() => setHoveredProject(null)}
                        className="group border-b border-white/5 py-12 md:py-20 relative z-10 hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer"
                    >
                        <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-2">
                                <span className="font-mono text-xs text-white/30 group-hover:text-teal-primary transition-colors">0{i + 1} / {project.year}</span>
                            </div>
                            <div className="md:col-span-6">
                                <h3 className="text-4xl md:text-7xl font-bold text-white group-hover:translate-x-4 transition-transform duration-500 will-change-transform">
                                    {project.client}
                                </h3>
                                <p className="text-white/40 mt-2 text-lg md:hidden">{project.title}</p>
                            </div>
                            <div className="md:col-span-4 flex flex-col items-end gap-4 opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-xl text-white/60">{project.title}</span>
                                <div className="flex gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[10px] font-mono uppercase border border-white/10 px-2 py-1 rounded text-white/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Floating Image Preview */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                className="fixed top-0 left-0 w-[400px] h-[500px] rounded-2xl overflow-hidden pointer-events-none z-50 hidden md:block" // Hidden on mobile
            >
                <AnimatePresence mode="wait">
                    {hoveredProject !== null && (
                        <motion.div
                            key={filteredProjects[hoveredProject].id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                            className="w-full h-full relative"
                        >
                            <img
                                src={filteredProjects[hoveredProject].img}
                                alt={filteredProjects[hoveredProject].title}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay info on image */}
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="flex justify-between items-center text-white backdrop-blur-md bg-white/10 p-4 rounded-xl border border-white/20">
                                    <span className="font-bold">{filteredProjects[hoveredProject].client}</span>
                                    <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            <Footer />
        </div>
    );
};

export default WorkPage;
