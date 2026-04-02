import React, { useRef, useMemo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import Magnetic from './ui/Magnetic';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Mobile Detection
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);


    // Mouse position for the premium 'Aura' effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    // Smooth spring for the aura follow
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.1,
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Subtly transform text on scroll (disabled on mobile for cleaner UX)
    const textY = useTransform(smoothProgress, [0, 1], ["0%", isMobile ? "0%" : "50%"]);
    const textOpacity = useTransform(smoothProgress, [0, 0.5], [1, isMobile ? 1 : 0]);
    const textScale = useTransform(smoothProgress, [0, 0.5], [1, isMobile ? 1 : 1.5]);
    const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);

    const characters = useMemo(() => ({
        top: "ENGAZE".split(""),
        bottom: "DIGITAL".split("")
    }), []);

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full h-[100dvh] md:h-[110vh] bg-[#F8F9FB] flex flex-col justify-center items-center overflow-hidden group"
        >
            {/* BACKGROUND LAYER 1: Deep Noise & Vignette */}
            <div className="absolute inset-0 pointer-events-none z-50 mix-blend-overlay opacity-[0.03]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-100 contrast-150" />
            </div>

            {/* Ambient Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(248,249,251,1)_100%)] z-10 pointer-events-none" />

            <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0 h-full w-full pointer-events-none">
                {/* BACKGROUND LAYER 2: Grid and Light Sweep */}
                <div className="absolute inset-0 z-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                </div>

                {/* Massive Animated Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] bg-teal-500/10 rounded-full blur-[150px] pointer-events-none"
                />

                {/* Secondary Glow */}
                <div className="absolute bottom-0 left-1/4 w-[40vw] h-[40vh] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
            </motion.div>

            {/* Premium Mouse Aura (reveals underlying highlight) */}
            <motion.div
                className="pointer-events-none absolute -inset-px z-20 opacity-0 transition duration-500 group-hover:opacity-100 hidden md:block"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            1000px circle at ${springX}px ${springY}px,
                            rgba(45, 212, 191, 0.06),
                            transparent 80%
                        )
                    `,
                    opacity: isHovered ? 1 : 0
                }}
            />

            {/* CONTENT LAYER */}
            <motion.div
                style={{ y: textY, opacity: textOpacity, scale: textScale }}
                className="relative z-30 flex flex-col items-center justify-center text-center w-full px-4"
            >
                {/* Premium Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 md:mb-12 cursor-pointer mt-16 md:mt-0"
                >
                    <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-xl overflow-hidden hover:bg-teal-500/15 transition-colors duration-500">
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-teal-500"></span>
                        <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-teal-600">Digital Growth Agency</span>
                        <ChevronRight className="w-3.5 h-3.5 text-teal-500 hidden md:block" />
                    </div>
                </motion.div>

                {/* Typography Architecture */}
                <div className="flex flex-col items-center gap-1 md:gap-0 select-none cursor-default perspective-1000">
                    {/* Top Word */}
                    <div className="flex overflow-hidden pb-1 md:pb-4">
                        {characters.top.map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: "100%", opacity: 0, rotateX: -90 }}
                                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                transition={{
                                    delay: 0.2 + (i * 0.05),
                                    duration: 1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className="text-[14vw] md:text-[9vw] font-black leading-[0.85] tracking-tighter text-[#0F172A]"
                                style={{ transformOrigin: "bottom center" }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>

                    {/* Bottom Word (Gradient) */}
                    <div className="flex overflow-hidden -mt-2 md:mt-0">
                        {characters.bottom.map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: "100%", opacity: 0, rotateX: -90 }}
                                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                transition={{
                                    delay: 0.4 + (i * 0.05),
                                    duration: 1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className="text-[14vw] md:text-[9vw] font-black leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-teal-300 via-teal-500 to-teal-700"
                                style={{ transformOrigin: "bottom center" }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Architectural Subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="mt-6 md:mt-12 max-w-2xl px-2 relative"
                >
                    <p className="text-sm md:text-lg text-slate-500 font-light leading-relaxed tracking-wide text-center">
                        We design, build, and scale <span className="text-[#0F172A] font-medium">digital experiences that drive measurable growth</span> for ambitious brands.
                    </p>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-10 md:mt-14 z-40 flex justify-center"
                >
                    <Magnetic strength={30}>
                        <button className="group relative flex items-center justify-center gap-3 px-7 md:px-9 py-3.5 md:py-4 bg-[#0F172A] text-white rounded-full text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase transition-all duration-500 hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(15,23,42,0.1)] overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Start a Project <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                        </button>
                    </Magnetic>
                </motion.div>
            </motion.div>

            {/* Global Frame Lines */}
            <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-slate-200 hidden lg:block" />
            <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-slate-200 hidden lg:block" />
        </section>
    );
};

export default Hero;
