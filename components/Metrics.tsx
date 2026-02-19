
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate, useMotionTemplate } from 'framer-motion';

const Counter = ({ from, to, duration = 2.5, delay = 0 }: { from: number; to: number; duration?: number; delay?: number }) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, to, {
                duration,
                delay,
                ease: [0.25, 1, 0.5, 1]
            });
            return controls.stop;
        }
    }, [isInView, to, duration, delay, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

interface MetricProps {
    value: number;
    suffix?: string;
    label: string;
    description: string;
    index: number;
}

const MetricCard: React.FC<MetricProps> = ({ value, suffix = "", label, description, index }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            className="group relative p-6 md:p-12 lg:p-16 flex flex-col justify-between min-h-[300px] md:h-[400px] bg-dark-base transition-colors duration-700 border-b md:border-b-0 last:border-b-0 dark:border-white/5 overflow-hidden"
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(54, 184, 165, 0.1),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <span className="font-mono text-[10px] md:text-xs text-teal-primary uppercase tracking-[0.3em] border border-teal-primary/20 px-3 py-1.5 rounded backdrop-blur-sm">
                        {label}
                    </span>
                </div>
            </div>

            <div className="relative z-10 flex flex-col items-start">
                <div className="flex items-baseline gap-1 mb-4 md:mb-8 text-light-neutral dark:text-white overflow-hidden">
                    <motion.span
                        className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-none"
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <Counter from={0} to={value} delay={index * 0.1 + 0.3} />
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                        className="text-3xl md:text-4xl lg:text-5xl text-teal-primary font-light"
                    >
                        {suffix}
                    </motion.span>
                </div>

                <p className="text-light-dim text-sm md:text-lg max-w-xs leading-relaxed font-light text-left group-hover:text-light-neutral dark:group-hover:text-white transition-colors duration-500">
                    {description}
                </p>
            </div>
        </div>
    );
};

const Metrics: React.FC = () => {
    return (
        <section className="relative py-32 md:py-48 bg-dark-base overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-16 md:mb-28 flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 items-start">
                    <div className="text-left w-full md:w-auto">
                        <span className="block font-mono text-[11px] md:text-xs text-teal-primary uppercase tracking-[0.4em] mb-6">
                            System Performance
                        </span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-light-neutral dark:text-light-neutral tracking-tighter leading-[1] mb-2">
                            Impact at Scale
                        </h2>
                    </div>
                    <p className="text-light-dim max-w-md text-lg md:text-xl leading-relaxed text-left font-light opacity-80 pt-4 md:pt-0">
                        Quantifiable results derived from our proprietary engagement engines.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark-border dark:bg-white/10 border border-dark-border dark:border-white/10 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl mt-12 md:mt-0">
                    <MetricCard
                        index={0}
                        value={50}
                        suffix="M+"
                        label="Value"
                        description="Revenue generated for our partners through strategic digital initiatives."
                    />
                    <MetricCard
                        index={1}
                        value={400}
                        suffix="%"
                        label="Growth"
                        description="Average digital traffic increase within first 12 months of engagement."
                    />
                    <MetricCard
                        index={2}
                        value={40}
                        suffix="+"
                        label="Clients"
                        description="Enterprise and high-growth startups trust us with their digital roadmap."
                    />
                    <MetricCard
                        index={3}
                        value={98}
                        suffix="%"
                        label="Retention"
                        description="Client retention rate. We build long-term partnerships, not one-off projects."
                    />
                </div>
            </div>
        </section>
    );
};

export default Metrics;
