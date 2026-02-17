
import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Rocket, Monitor, Code, Search, Cpu, Palette, ShoppingBag, Glasses, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: "01",
    title: "Performance",
    subtitle: "Paid Media & Acquisition",
    desc: "Algorithmic campaign management driving immediate ROAS lift.",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    id: "02",
    title: "Web Design",
    subtitle: "Digital Experience",
    desc: "Immersive, high-performance websites that convert traffic into revenue.",
    icon: <Monitor className="w-6 h-6" />
  },
  {
    id: "03",
    title: "Engineering",
    subtitle: "Custom Software",
    desc: "Scalable, secure, and robust architectures tailored to enterprise needs.",
    icon: <Code className="w-6 h-6" />
  },
  {
    id: "04",
    title: "SEO",
    subtitle: "Organic Growth",
    desc: "Dominate search rankings with technical precision and content authority.",
    icon: <Search className="w-6 h-6" />
  },
  {
    id: "05",
    title: "AI Systems",
    subtitle: "Artificial Intelligence",
    desc: "Integrating predictive models to automate and enhance business logic.",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    id: "06",
    title: "Branding",
    subtitle: "UI/UX Design",
    desc: "Forging memorable brand identities and intuitive user journeys.",
    icon: <Palette className="w-6 h-6" />
  },
  {
    id: "07",
    title: "Ecommerce",
    subtitle: "DTC Acceleration",
    desc: "Full-funnel strategies designed for high-volume transaction environments.",
    icon: <ShoppingBag className="w-6 h-6" />
  },
  {
    id: "08",
    title: "Spatial",
    subtitle: "AR Driven Marketing",
    desc: "Next-gen engagement using Augmented Reality to bridge worlds.",
    icon: <Glasses className="w-6 h-6" />
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
        
        <motion.div style={{ x }} className="flex h-full items-center pl-6 md:pl-24 w-max">
            
            <div className="w-[90vw] md:w-[500px] shrink-0 mr-16 md:mr-32 relative z-20 flex flex-col justify-center items-start px-6 md:px-0">
                 <span className="text-teal-primary font-mono text-[11px] uppercase tracking-[0.4em] mb-6 block">The Engine</span>
                 <h2 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter text-light-neutral dark:text-white">
                    Our <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-primary via-teal-secondary to-teal-tertiary italic">Stack</span>
                 </h2>
                 <p className="text-light-dim text-xl md:text-2xl leading-relaxed font-light max-w-sm opacity-80">
                    A holistic suite of revenue-generating services designed for the modern enterprise.
                 </p>
                 <div className="mt-12 flex items-center gap-4 text-[10px] font-mono text-teal-primary uppercase tracking-[0.25em] bg-teal-primary/5 border border-teal-primary/10 px-4 py-2 rounded-full">
                    <span className="w-1.5 h-1.5 bg-teal-primary rounded-full animate-ping" />
                    <span>Scroll to explore</span>
                 </div>
            </div>

            <div className="flex gap-8 md:gap-16 pr-24 md:pr-48 relative z-20">
                {services.map((service, index) => (
                    <div 
                        key={index}
                        className="group relative w-[85vw] md:w-[480px] h-[65vh] md:h-[650px] bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-3xl border border-dark-border dark:border-white/10 transition-all duration-700 rounded-[3rem] p-10 md:p-14 flex flex-col justify-between overflow-hidden shadow-2xl shrink-0"
                    >
                        <div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
                            <div className="flex justify-between items-start mb-16 md:mb-20">
                                <span className="font-mono text-xs font-bold text-teal-primary bg-teal-primary/10 px-4 py-2 rounded-full">
                                    {service.id}
                                </span>
                                <div className="p-5 rounded-2xl bg-dark-base/5 dark:bg-white/5 text-light-neutral dark:text-white group-hover:bg-teal-primary group-hover:text-dark-base transition-all duration-500 shadow-inner border border-dark-border dark:border-white/10 group-hover:rotate-12">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-medium text-light-neutral dark:text-white mb-6 tracking-tight">{service.title}</h3>
                            <div className="text-teal-primary text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-8 opacity-80">{service.subtitle}</div>
                        </div>

                        <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                            <p className="text-light-dim text-lg md:text-xl leading-relaxed mb-10 group-hover:text-light-neutral dark:group-hover:text-white transition-colors font-light">
                                {service.desc}
                            </p>
                            <button className="flex items-center gap-4 text-[13px] font-bold text-light-neutral dark:text-white group-hover:text-teal-primary transition-all duration-300 hover:gap-6 origin-left tracking-widest uppercase">
                                EXPLORE <ArrowUpRight size={18} />
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
