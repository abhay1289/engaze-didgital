
import React, { useState, useMemo } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence, MotionValue } from 'framer-motion';
import Footer from './Footer';
import { ArrowUpRight, ArrowDown, LayoutGrid, List } from 'lucide-react';
import Magnetic from './ui/Magnetic';

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
        <section className="min-h-[40vh] md:min-h-[50vh] flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 bg-dark-base pt-32 text-left">
            <div className="max-w-[1600px] mx-auto w-full text-left">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 text-left">
                    <div className="text-left">
                        <motion.h1 
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-6xl md:text-[10rem] leading-[0.9] md:leading-[0.8] font-bold text-light-neutral dark:text-white tracking-tighter text-left"
                        >
                            ARCHIVE
                        </motion.h1>
                    </div>
                    <div className="flex gap-12 mb-4 text-left">
                        <div className="flex flex-col text-left">
                            <span className="text-light-dim text-xs font-mono uppercase tracking-widest mb-2 text-left">Total Projects</span>
                            <span className="text-3xl md:text-4xl text-light-neutral dark:text-white font-light text-left">54</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

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
            className="group relative border-t border-dark-border dark:border-white/10 py-10 md:py-16 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-500 cursor-pointer overflow-hidden text-left"
        >
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start md:items-center text-left">
                <div className="md:col-span-2 flex flex-row md:flex-col gap-4 md:gap-2 items-center md:items-start justify-between md:justify-start text-left">
                    <div className="flex gap-4 items-baseline text-left">
                        <span className="font-mono text-sm text-light-dim group-hover:text-teal-primary text-left">0{index + 1}</span>
                        <span className="font-mono text-xs text-light-dim uppercase tracking-wider text-left">{project.year}</span>
                    </div>
                    <div className="md:hidden">
                         <ArrowUpRight size={18} className="text-light-dim" />
                    </div>
                </div>
                <div className="md:col-span-5 text-left">
                    <h2 className="text-3xl md:text-6xl font-bold text-light-neutral dark:text-white tracking-tight leading-[1] text-left">
                        {project.client}
                    </h2>
                    <p className="text-base md:text-lg text-light-dim mt-2 text-left">
                        {project.title}
                    </p>
                </div>
                <div className="col-span-1 md:col-span-3 flex flex-wrap gap-2 mt-2 md:mt-0 text-left">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 border border-dark-border dark:border-white/10 rounded-full text-[10px] md:text-xs font-mono text-light-dim text-left">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="hidden md:flex md:col-span-2 justify-end">
                    <div className="w-12 h-12 rounded-full border border-dark-border dark:border-white/20 flex items-center justify-center group-hover:bg-teal-primary group-hover:border-teal-primary group-hover:text-white transition-all duration-300">
                        <ArrowUpRight size={20} />
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

    return (
        <div 
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="bg-dark-base min-h-screen text-light-neutral dark:text-white transition-colors duration-500 cursor-default text-left"
        >
            <WorkHero />
            <div className="sticky top-20 md:top-24 z-40 bg-dark-base/80 backdrop-blur-xl border-y border-dark-border dark:border-white/10 py-4 text-left">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center text-left">
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto text-left">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${
                                    filter === cat 
                                        ? 'bg-teal-primary border-teal-primary text-white' 
                                        : 'border-transparent text-light-dim hover:text-light-neutral dark:hover:text-white'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="min-h-[50vh] pb-32 text-left">
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
