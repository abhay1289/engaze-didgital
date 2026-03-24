
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
    <section ref={targetRef} id="services" className="relative h-[600vh] bg-[#020202] transition-colors duration-500 selection:bg-teal-primary selection:text-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(54,184,165,0.05),transparent_60%)] pointer-events-none" />

        <motion.div style={{ x }} className="flex h-full items-center pl-6 md:pl-12 lg:pl-24 w-max">

          <div className="w-[90vw] md:w-[500px] shrink-0 mr-12 md:mr-24 lg:mr-32 relative z-20 flex flex-col justify-center items-start px-2 md:px-0 text-left">
            <span className="text-teal-primary font-mono text-[10px] uppercase tracking-[0.3em] mb-6 block border border-teal-primary/30 py-1.5 px-4 rounded-full w-fit bg-teal-primary/5">The Engine</span>
            <h2 className="text-5xl md:text-[6rem] lg:text-[7rem] font-black leading-[0.85] mb-8 tracking-tighter text-white uppercase text-left">
              Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-primary to-teal-secondary relative">
                Stack
                <div className="absolute -inset-4 bg-teal-primary/20 blur-3xl -z-10" />
              </span>
            </h2>
            <p className="text-white/50 text-xl md:text-2xl leading-relaxed font-light max-w-sm text-left border-l border-teal-primary/30 pl-6">
              A holistic suite of revenue-generating services designed for the modern enterprise.
            </p>
            <div className="mt-12 flex items-center gap-4 text-[10px] font-mono text-teal-primary uppercase tracking-[0.25em] bg-teal-primary/5 border border-teal-primary/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-teal-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(54,184,165,0.8)]" />
              <span>Scroll to explore</span>
            </div>
          </div>

          <div className="flex gap-4 md:gap-8 lg:gap-16 pr-6 md:pr-12 lg:pr-48 relative z-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative w-[85vw] md:w-[500px] h-[60vh] md:h-[650px] bg-[#050505] backdrop-blur-3xl border border-white/10 hover:border-teal-primary/30 transition-all duration-700 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 flex flex-col justify-between overflow-hidden shadow-[0_0_50px_rgba(54,184,165,0.02)] shrink-0 text-left hover:bg-white/[0.02]"
              >
                {/* Subtle Grain/Noise Texture for Realism */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay" />

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-2 text-left">
                  <div className="flex justify-between items-start mb-12 md:mb-20">
                    <span className="font-mono text-[10px] font-bold text-teal-primary bg-teal-primary/5 px-4 py-2 rounded-full border border-teal-primary/20 tracking-[0.2em]">
                      {service.id}
                    </span>
                    <div className="p-4 rounded-2xl bg-black text-teal-primary border border-white/10 group-hover:scale-110 group-hover:bg-teal-primary/10 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(54,184,165,0.2)]">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tighter leading-[0.9] uppercase text-left group-hover:text-teal-primary transition-colors duration-500">{service.title}</h3>
                  <div className="text-teal-primary text-[10px] font-mono tracking-[0.3em] uppercase mb-6 md:mb-8 text-left">{service.subtitle}</div>
                </div>

                <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-all duration-700 text-left">
                  <p className="text-white/40 text-lg md:text-xl leading-relaxed mb-10 group-hover:text-white/70 transition-colors font-light text-left">
                    {service.desc}
                  </p>
                  <button className="flex items-center gap-4 text-[11px] font-bold text-white group-hover:text-teal-primary transition-all duration-500 hover:gap-6 origin-left tracking-[0.2em] uppercase relative w-fit">
                    EXPLORE <ArrowUpRight size={18} />
                    <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-teal-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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
