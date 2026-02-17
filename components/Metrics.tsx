
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

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
    return (
        <div className="group relative p-10 md:p-12 lg:p-16 flex flex-col justify-between min-h-[340px] md:h-[400px] bg-dark-base transition-colors duration-700 border-b md:border-b-0 last:border-b-0 dark:border-white/5">
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                     <span className="font-mono text-[10px] md:text-xs text-teal-primary uppercase tracking-[0.3em] border border-teal-primary/20 px-3 py-1.5 rounded backdrop-blur-sm">
                        {label}
                     </span>
                </div>
            </div>

            <div className="relative z-10 flex flex-col items-start">
                <div className="flex items-baseline gap-1 mb-6 md:mb-8 text-light-neutral dark:text-white overflow-hidden">
                    <motion.span 
                        className="text-7xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-none"
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
                        className="text-4xl md:text-4xl lg:text-5xl text-teal-primary font-light"
                    >
                        {suffix}
                    </motion.span>
                </div>
                
                <p className="text-light-dim text-base md:text-lg max-w-xs leading-relaxed font-light text-left">
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
                    value={2.4} 
                    suffix="B" 
                    label="Revenue" 
                    description="Total client revenue attributed to our engineered campaigns since inception."
                />
                <MetricCard 
                    index={1}
                    value={340} 
                    suffix="%" 
                    label="Growth" 
                    description="Average Return on Ad Spend lift across our enterprise portfolio."
                />
                <MetricCard 
                    index={2}
                    value={87} 
                    suffix="" 
                    label="Scale" 
                    description="Global brands currently utilizing our engagement infrastructure."
                />
                <MetricCard 
                    index={3}
                    value={12} 
                    suffix="+" 
                    label="Legacy" 
                    description="Continuous market leadership and algorithmic refinement."
                />
            </div>
        </div>
    </section>
  );
};

export default Metrics;
