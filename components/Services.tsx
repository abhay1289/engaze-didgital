
import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Rocket, Monitor, Code, Search, Cpu, Palette, ShoppingBag, Glasses, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Digital Strategy",
    subtitle: "Roadmapping & Consulting",
    desc: "Data-backed blueprints for digital transformation. We align technical capability with business objectives to minimize risk and maximize velocity.",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    id: "02",
    title: "Experience Design",
    subtitle: "UI/UX & Brand Identity",
    desc: "Crafting intuitive, accessible, and stunning interfaces that reduce friction and elevate brand perception across every touchpoint.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    id: "03",
    title: "Enterprise Eng.",
    subtitle: "Full-Stack Development",
    desc: "Robust, scalable, and secure applications built on modern architectures (Next.js, React, Node) designed to handle high-volume traffic.",
    icon: <Code className="w-6 h-6" />
  },
  {
    id: "04",
    title: "Growth Systems",
    subtitle: "SEO & Performance Marketing",
    desc: "Holistic growth engines integrating technical SEO, conversion rate optimization (CRO), and programmatic paid acquisition.",
    icon: <Search className="w-6 h-6" />
  },
  {
    id: "05",
    title: "Intelligent Auto.",
    subtitle: "AI & Workflows",
    desc: "automating repetitive business processes and enhancing decision-making through custom AI integrations and smart workflows.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: "06",
    title: "E-Commerce",
    subtitle: "DTC & B2B Solutions",
    desc: "High-conversion storefronts optimized for speed, average order value (AOV), and seamless checkout experiences.",
    icon: <ShoppingBag className="w-6 h-6" />
  }
];

const Services: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  return (
    <section ref={targetRef} id="services" className="relative h-[600vh] bg-dark-base transition-colors duration-500">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

        <motion.div style={{ x }} className="flex h-full items-center pl-6 md:pl-12 lg:pl-24 w-max">

          <div className="w-[90vw] md:w-[500px] shrink-0 mr-12 md:mr-24 lg:mr-32 relative z-20 flex flex-col justify-center items-start px-2 md:px-0">
            <span className="text-teal-primary font-mono text-[11px] uppercase tracking-[0.4em] mb-6 block">The Engine</span>
            <h2 className="text-5xl md:text-8xl font-bold leading-[0.95] md:leading-[0.9] mb-8 tracking-tighter text-light-neutral dark:text-white">
              Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-primary via-teal-secondary to-teal-tertiary italic">Stack</span>
            </h2>
            <p className="text-light-dim text-lg md:text-2xl leading-relaxed font-light max-w-sm opacity-80">
              A holistic suite of revenue-generating services designed for the modern enterprise.
            </p>
            <div className="mt-12 flex items-center gap-4 text-[10px] font-mono text-teal-primary uppercase tracking-[0.25em] bg-teal-primary/5 border border-teal-primary/10 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-teal-primary rounded-full animate-ping" />
              <span>Scroll to explore</span>
            </div>
          </div>

          <div className="flex gap-4 md:gap-8 lg:gap-16 pr-6 md:pr-12 lg:pr-48 relative z-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative w-[85vw] md:w-[480px] h-[60vh] md:h-[650px] bg-gradient-to-br from-white to-[#F8FAFC] dark:from-[#0A0A0A] dark:to-[#050505] backdrop-blur-3xl border border-dark-border dark:border-white/10 transition-all duration-700 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 flex flex-col justify-between overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-premium shrink-0"
              >
                {/* Subtle Grain/Noise Texture for Realism */}
                <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none mix-blend-multiply dark:mix-blend-overlay" />

                {/* Hover Glow */}
                <div className="absolute -right-24 -top-24 w-80 h-80 bg-teal-primary/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
                  <div className="flex justify-between items-start mb-12 md:mb-20">
                    <span className="font-mono text-xs font-bold text-teal-primary bg-teal-primary/10 px-4 py-2 rounded-full border border-teal-primary/10">
                      {service.id}
                    </span>
                    <div className="p-4 md:p-5 rounded-2xl bg-white dark:bg-white/5 text-light-neutral dark:text-white group-hover:bg-teal-primary group-hover:text-dark-base transition-all duration-500 shadow-sm border border-black/5 dark:border-white/10 group-hover:rotate-12 group-hover:border-transparent">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-medium text-light-neutral dark:text-white mb-4 md:mb-6 tracking-tight leading-tight">{service.title}</h3>
                  <div className="text-teal-primary text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6 md:mb-8 opacity-80">{service.subtitle}</div>
                </div>

                <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  <p className="text-light-dim text-base md:text-xl leading-relaxed mb-8 md:mb-10 group-hover:text-light-neutral dark:group-hover:text-white transition-colors font-light">
                    {service.desc}
                  </p>
                  <button className="flex items-center gap-4 text-[13px] font-bold text-light-neutral dark:text-white group-hover:text-teal-primary transition-all duration-300 hover:gap-6 origin-left tracking-widest uppercase relative w-fit">
                    EXPLORE <ArrowUpRight size={18} />
                    <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-teal-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
