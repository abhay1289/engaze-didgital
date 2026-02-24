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

    // Universal "Single Scroll" Logic (Mobile & Desktop snap behavior)
    useEffect(() => {
        let touchStartY = 0;
        let isNavigating = false;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (isNavigating) return;
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchStartY - touchEndY;

            if (deltaY > 30 && window.scrollY < 50) {
                isNavigating = true;
                const heroHeight = containerRef.current?.offsetHeight || window.innerHeight;
                window.scrollTo({
                    top: heroHeight,
                    behavior: 'smooth'
                });
                setTimeout(() => { isNavigating = false; }, 1000);
            }
        };

        const handleWheel = (e: WheelEvent) => {
            if (isNavigating) return;
            if (e.deltaY > 5 && window.scrollY < 50) {
                isNavigating = true;
                const heroHeight = containerRef.current?.offsetHeight || window.innerHeight;

                window.scrollTo({
                    top: heroHeight,
                    behavior: 'smooth'
                });

                e.preventDefault();
                setTimeout(() => { isNavigating = false; }, 1200);
            }
        };

        const container = containerRef.current;
        if (container) {
            window.addEventListener('wheel', handleWheel, { passive: false });
            window.addEventListener('touchstart', handleTouchStart, { passive: true });
            window.addEventListener('touchend', handleTouchEnd, { passive: true });
        }

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
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
            className="relative w-full h-[100dvh] md:h-[110vh] bg-[#030303] flex flex-col justify-center items-center overflow-hidden group cursor-none md:cursor-default"
        >
            {/* BACKGROUND LAYER 1: Deep Noise & Vignette */}
            <div className="absolute inset-0 pointer-events-none z-50 mix-blend-overlay opacity-[0.03]">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-100 contrast-150" />
            </div>

            {/* Ambient Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,3,3,1)_100%)] z-10 pointer-events-none" />

            <motion.div style={{ scale: bgScale }} className="absolute inset-0 z-0 h-full w-full pointer-events-none">
                {/* BACKGROUND LAYER 2: Grid and Light Sweep */}
                <div className="absolute inset-0 z-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                </div>

                {/* Massive Animated Glow */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] bg-teal-500/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none"
                />

                {/* Secondary Glow */}
                <div className="absolute bottom-0 left-1/4 w-[40vw] h-[40vh] bg-indigo-500/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
            </motion.div>

            {/* Premium Mouse Aura (reveals underlying highlight) */}
            <motion.div
                className="pointer-events-none absolute -inset-px z-20 opacity-0 transition duration-500 group-hover:opacity-100 hidden md:block"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            1000px circle at ${springX}px ${springY}px,
                            rgba(45, 212, 191, 0.08),
                            transparent 80%
                        )
                    `,
                    opacity: isHovered ? 1 : 0
                }}
            />

            {/* CONTENT LAYER */}
            <motion.div
                style={{ y: textY, opacity: textOpacity, scale: textScale }}
                className="relative z-30 flex flex-col items-center justify-center text-center w-full px-4 h-full md:h-auto"
            >
                {/* Premium Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 md:mb-12 cursor-pointer mt-16 md:mt-0"
                >
                    <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/20 bg-teal-500/5 backdrop-blur-xl overflow-hidden hover:bg-teal-500/10 transition-colors duration-500">
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-shimmer pointer-events-none" />
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                        </span>
                        <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-teal-400">Welcome to the Next Era</span>
                        <ChevronRight className="w-4 h-4 text-teal-500 hidden md:block" />
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
                                className="text-[17vw] md:text-[11vw] font-black leading-[0.85] tracking-tighter text-white"
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
                                className="text-[17vw] md:text-[11vw] font-black leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-teal-100 to-teal-600"
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
                    <p className="text-base md:text-2xl text-white/50 font-light leading-relaxed tracking-wide text-center">
                        We don't just build websites. We construct <span className="text-white font-medium">high-velocity cognitive revenue engines</span> engineered for the top 1% of global brands.
                    </p>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute bottom-16 md:bottom-20 z-40 w-full flex justify-center"
                >
                    <Magnetic strength={30}>
                        <button className="group relative flex items-center justify-center gap-4 px-8 md:px-10 py-4 md:py-5 bg-white text-[#030303] rounded-full text-[10px] md:text-xs font-black tracking-[0.2em] uppercase transition-all duration-500 hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] overflow-hidden">
                            <span className="relative z-10 flex items-center gap-2">
                                Start The Project <ArrowUpRight size={16} className="group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                            {/* Reflection Sweep */}
                            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-sweep pointer-events-none" />
                        </button>
                    </Magnetic>
                </motion.div>
            </motion.div>

            {/* Global Frame Lines */}
            <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-white-[0.03] hidden lg:block" />
            <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-white-[0.03] hidden lg:block" />
        </section>
    );
};

export default Hero;
