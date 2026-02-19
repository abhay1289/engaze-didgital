import React, { useRef, useMemo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Magnetic from './ui/Magnetic';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position for the premium 'Aura' effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            mouseX.set(clientX - rect.left);
            mouseY.set(clientY - rect.top);
        }
    };

    const auraX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const auraY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.5,
        stiffness: 80,
        damping: 30,
        restDelta: 0.001
    });

    // Dynamic transforms for premium layering
    const textScale = useTransform(smoothProgress, [0, 0.5], [1, 2.8]);
    const textOpacity = useTransform(smoothProgress, [0.1, 0.45], [1, 0]);
    const textBlur = useTransform(smoothProgress, [0, 0.4], ["blur(0px)", "blur(15px)"]);
    const letterSpacing = useTransform(smoothProgress, [0, 0.4], ["-0.05em", "0.15em"]);

    const uiOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
    const uiY = useTransform(smoothProgress, [0, 0.25], [0, 30]);

    const orb1Y = useTransform(smoothProgress, [0, 1], ["-10%", "30%"]);
    const orb2Y = useTransform(smoothProgress, [0, 1], ["20%", "-40%"]);

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
            className="relative w-full h-[250vh] bg-dark-base overflow-clip cursor-none"
        >
            {/* BACKGROUND LAYER: The "Architected Environment" */}
            <div className="sticky top-0 z-10 h-screen md:h-[100dvh] w-full flex flex-col items-center justify-center overflow-visible md:overflow-hidden">

                {/* Precision Grid */}
                <div className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:50px_50px]" />
                </div>

                {/* Layered Ambient Orbs */}
                <motion.div
                    style={{ y: orb1Y }}
                    className="absolute -left-1/4 top-0 w-[60vw] h-[60vw] bg-teal-primary/5 rounded-full blur-[120px] mix-blend-screen"
                />
                <motion.div
                    style={{ y: orb2Y }}
                    className="absolute -right-1/4 bottom-0 w-[50vw] h-[50vw] bg-teal-secondary/5 rounded-full blur-[100px] mix-blend-screen"
                />

                {/* Premium Mouse Aura */}
                <motion.div
                    style={{ left: auraX, top: auraY }}
                    className="fixed w-[400px] h-[400px] bg-teal-primary/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />

                {/* branding: Typography Architecture */}
                <motion.div
                    style={{
                        scale: textScale,
                        opacity: textOpacity,
                        filter: textBlur,
                        letterSpacing: letterSpacing
                    }}
                    className="relative z-10 flex flex-col items-center justify-center text-center origin-center will-change-transform w-full py-12 md:py-0"
                >
                    <div className="flex flex-col items-center gap-0">
                        {/* Top Word with Sophisticated Reveal */}
                        <div className="flex overflow-hidden pb-1 md:pb-4">
                            {characters.top.map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: "110%", opacity: 0, scale: 0.8 }}
                                    animate={{ y: 0, opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 0.1 + (i * 0.04),
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="text-[17vw] md:text-[11vw] font-black leading-none tracking-tighter text-white select-none drop-shadow-2xl"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>

                        {/* Bottom Word with Gradient Mask */}
                        <div className="flex overflow-hidden -mt-2 md:-mt-8">
                            {characters.bottom.map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: "110%", opacity: 0, scale: 0.8 }}
                                    animate={{ y: 0, opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 0.2 + (i * 0.04),
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="text-[17vw] md:text-[11vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-teal-primary via-teal-secondary to-teal-tertiary select-none"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Architectural Subtitle */}
                    <div className="relative mt-8 md:mt-12 overflow-hidden px-4 md:px-8 max-w-[90vw] md:max-w-none">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
                            className="absolute inset-0 bg-white/5 backdrop-blur-sm -z-10 rounded-full border border-white/10 hidden md:block"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="px-2 md:px-6 py-2 font-mono text-[11px] md:text-[10px] text-teal-primary/80 tracking-[0.1em] md:tracking-[0.6em] uppercase text-center leading-relaxed md:whitespace-nowrap"
                        >
                            We build the operating systems for <span className="text-white font-bold">billion-dollar growth</span>
                        </motion.p>
                    </div>
                </motion.div>

                {/* CTA LAYER (Integrated into Grid) */}
                <motion.div
                    style={{ opacity: uiOpacity, y: uiY }}
                    className="relative md:absolute bottom-0 md:bottom-24 z-20 flex flex-col items-center w-full px-6 pb-24 md:pb-0"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-6xl">
                        <div className="flex gap-4 w-full md:w-auto justify-center">
                            <Magnetic strength={20}>
                                <button className="group relative flex items-center justify-center gap-4 md:gap-6 px-8 md:px-12 py-4 md:py-5 bg-white text-dark-base rounded-full text-[11px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase transition-all duration-500 hover:scale-105 shadow-glow overflow-hidden whitespace-nowrap w-full md:w-auto">
                                    <span className="relative z-10">Connect With Us</span>
                                    <ArrowUpRight size={16} className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-primary to-teal-tertiary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </button>
                            </Magnetic>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
