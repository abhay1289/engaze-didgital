
import React, { useState, useMemo } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence, MotionValue } from 'framer-motion';
import Footer from './Footer';
import { ArrowUpRight, ArrowDown, LayoutGrid, List } from 'lucide-react';
import Magnetic from './ui/Magnetic';

// Custom Grain Overlay
const GrainOverlay = () => (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-100 contrast-100" />
    </div>
);

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

type Project = typeof projects[0];

const categories = ["All", "Product", "Brand", "Enterprise", "Hardware", "Data"];

const WorkHero = () => {
    return (
        <section className="min-h-[50vh] flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 bg-[#050505] pt-40 relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-teal-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

            <div className="max-w-[1800px] mx-auto w-full relative z-10 text-left">
                <div className="flex flex-col gap-6 mb-8 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
                        className="inline-flex w-fit items-center gap-3 px-4 py-2 border border-teal-primary/30 rounded-full bg-teal-primary/5 backdrop-blur-md"
                    >
                        <div className="w-2 h-2 rounded-full bg-teal-primary animate-pulse" />
                        <span className="text-teal-primary font-mono text-[10px] uppercase tracking-[0.4em]">Engineered Successes</span>
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 text-left">
                    <div className="text-left">
                        <motion.h1
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-6xl md:text-[12rem] leading-[0.85] font-black text-white tracking-tighter text-left uppercase"
                        >
                            ARCHIVE<span className="text-teal-primary">.</span>
                        </motion.h1>
                    </div>
                    <div className="flex gap-12 mb-4 text-left border-l border-white/10 pl-8">
                        <div className="flex flex-col text-left">
                            <span className="text-white/40 text-[10px] font-mono uppercase tracking-[0.2em] mb-2 text-left">Total Deployed</span>
                            <span className="text-4xl md:text-5xl text-white font-light text-left">54+</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

interface ProjectRowProps {
    project: Project;
    index: number;
    setHoveredProject: (index: number | null) => void;
    onMobileTouch: (index: number | null, e?: React.TouchEvent) => void;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project, index, setHoveredProject, onMobileTouch }) => {
    return (
        <motion.div
            layout
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            onTouchStart={(e) => onMobileTouch(index, e)}
            onTouchEnd={() => onMobileTouch(null)}
            className="group relative border-b border-white/5 py-12 md:py-20 hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer overflow-hidden text-left"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-primary/0 via-teal-primary/5 to-teal-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start md:items-center text-left">
                <div className="md:col-span-2 flex flex-row md:flex-col gap-4 md:gap-2 items-center md:items-start justify-between md:justify-start text-left">
                    <div className="flex gap-4 items-baseline text-left">
                        <span className="font-mono text-sm text-white/30 group-hover:text-teal-primary transition-colors text-left uppercase tracking-widest">0{index + 1}</span>
                        <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] text-left">{project.year}</span>
                    </div>
                    <div className="md:hidden">
                        <ArrowUpRight size={18} className="text-white/40" />
                    </div>
                </div>
                <div className="md:col-span-5 text-left relative">
                    <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] text-left transition-transform duration-500 group-hover:translate-x-4 uppercase origin-left">
                        {project.client}
                    </h2>
                    <p className="text-base md:text-xl text-white/50 mt-4 text-left font-light max-w-md transition-transform duration-500 group-hover:translate-x-4 delay-75">
                        {project.title}
                    </p>
                </div>
                <div className="col-span-1 md:col-span-3 flex flex-wrap gap-2 mt-4 md:mt-0 text-left">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-2 bg-black border border-white/10 rounded-full text-[10px] md:text-[10px] font-mono text-white/50 text-left uppercase tracking-widest group-hover:border-white/30 group-hover:text-white transition-colors duration-300">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="hidden md:flex md:col-span-2 justify-end">
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-teal-primary group-hover:border-teal-primary group-hover:text-black group-hover:scale-110 transition-all duration-500 bg-black text-white">
                        <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform duration-500" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const WorkPage: React.FC = () => {
    const [filter, setFilter] = useState("All");
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const { clientX, clientY } = e.touches[0];
        mouseX.set(clientX);
        mouseY.set(clientY);
    };

    const handleMobileTouch = (index: number | null, e?: React.TouchEvent) => {
        if (index !== null && e) {
            const { clientX, clientY } = e.touches[0];
            mouseX.set(clientX);
            mouseY.set(clientY);
        }
        if (index === null) {
            setHoveredProject(null);
            return;
        }
        const project = filteredProjects[index];
        const originalIndex = projects.findIndex(p => p.id === project.id);
        setHoveredProject(originalIndex);
    };

    const filteredProjects = useMemo(() => {
        if (filter === "All") return projects;
        return projects.filter(p => p.category === filter);
    }, [filter]);

    const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    return (
        <div
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="bg-[#050505] min-h-screen text-white transition-colors duration-500 cursor-default text-left relative selection:bg-teal-primary selection:text-black"
        >
            <GrainOverlay />
            <WorkHero />

            {/* Hover Image Reveal */}
            <motion.div
                className="fixed top-0 left-0 w-[350px] h-[450px] pointer-events-none z-50 overflow-hidden hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: hoveredProject !== null ? 1 : 0,
                    scale: hoveredProject !== null ? 1 : 0.8,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
            >
                {projects.map((p, i) => (
                    <motion.img
                        key={p.id}
                        src={p.img}
                        alt={p.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-xl"
                        animate={{ opacity: hoveredProject === i ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />
                ))}
            </motion.div>

            <div className="sticky top-20 md:top-24 z-40 bg-[#050505]/70 backdrop-blur-2xl border-y border-white/5 py-4 text-left">
                <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center text-left">
                    <div className="flex items-center gap-3 overflow-x-auto no-scrollbar w-full md:w-auto text-left py-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] transition-all whitespace-nowrap border ${filter === cat
                                    ? 'bg-white border-white text-black'
                                    : 'bg-black border-white/20 text-white/50 hover:text-white hover:border-white/50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* The List Wrapper */}
            <div className="min-h-[50vh] pb-32 pt-8 text-left border-t border-white/5" onMouseLeave={() => setHoveredProject(null)}>
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((p, i) => (
                        <ProjectRow
                            key={p.id}
                            project={p}
                            index={i}
                            setHoveredProject={(idx) => {
                                if (idx === null) {
                                    setHoveredProject(null);
                                    return;
                                }
                                const originalIndex = projects.findIndex(proj => proj.id === p.id);
                                setHoveredProject(originalIndex);
                            }}
                            onMobileTouch={handleMobileTouch}
                        />
                    ))}
                </AnimatePresence>
            </div>
            <Footer />
        </div>
    );
};

export default WorkPage;
