
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './ui/Magnetic';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="w-full h-full bg-gradient-to-br from-teal-tertiary to-[#050505] flex flex-col justify-between overflow-hidden relative px-6 md:px-12 py-16 md:py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
             <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        </div>

        {/* Content Wrapper for Scroll Reveal */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center justify-center flex-1 text-center">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full text-center"
             >
                 <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold text-light-neutral dark:text-white mb-6 md:mb-10 tracking-tighter leading-[0.9]">
                    Ready to 10x <br/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-primary to-teal-secondary italic">Your Growth?</span>
                 </h2>
             </motion.div>
             
             <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-2xl text-light-dim dark:text-white/60 mb-10 md:mb-12 font-light max-w-2xl mx-auto text-center leading-relaxed"
             >
                Book a free strategy session. We audit your stack, you keep the roadmap. No pitch, just value.
             </motion.p>

            {/* Middle Tier: The CTA Button */}
            <div className="flex justify-center w-full mb-8 md:mb-0">
                <Magnetic strength={40}>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex items-center gap-6 bg-light-neutral dark:bg-white text-white dark:text-dark-base px-8 py-5 md:px-12 md:py-7 rounded-full text-xl md:text-2xl font-bold shadow-premium transition-all hover:bg-teal-primary dark:hover:bg-teal-primary hover:text-white"
                    >
                        <span className="relative z-10">Let's Talk Growth</span>
                        <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-teal-primary/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                    </motion.button>
                </Magnetic>
            </div>
        </div>
        
        {/* Bottom Tier: Links and Copyright */}
        <div className="relative z-10 w-full max-w-7xl mx-auto pt-10 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8 font-mono uppercase tracking-[0.2em] text-[10px] md:text-xs text-light-dim dark:text-white/30">
                <div className="flex flex-col md:flex-row items-center gap-x-10 gap-y-4">
                    <span className="text-teal-primary/50">© 2024 ENGAZE DIGITAL INC.</span>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-teal-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-teal-primary transition-colors">Terms</a>
                    </div>
                </div>
                
                <div className="flex gap-10">
                    {['LinkedIn', 'Instagram', 'X'].map((social) => (
                        <a 
                            key={social} 
                            href="#" 
                            className="group flex items-center gap-2 hover:text-teal-primary transition-colors"
                        >
                            {social}
                            <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
