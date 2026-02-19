
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './ui/Magnetic';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="w-full h-full bg-gradient-to-br from-teal-tertiary to-[#050505] flex flex-col justify-between overflow-hidden relative px-6 md:px-12 py-12 md:py-16">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
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
                        Ready to 10x <br />
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
                <div className="flex flex-col items-center justify-center w-full mb-32 md:mb-56 gap-8">
                    <Magnetic strength={40}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative flex items-center gap-4 bg-white text-dark-base px-8 py-4 md:px-10 md:py-5 rounded-full text-lg md:text-xl font-bold shadow-premium transition-all hover:bg-white/90"
                        >
                            <span className="relative z-10">Let's Talk Growth</span>
                            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </motion.button>
                    </Magnetic>
                </div>
            </div>

            {/* Bottom Tier: Links and Copyright */}
            <div className="relative z-10 w-full max-w-7xl mx-auto border-t border-white/5 pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs font-mono uppercase tracking-widest text-light-dim dark:text-white/40">
                    {/* Left: Copyright */}
                    <div className="w-full md:w-auto text-center md:text-left">
                        <span>© {new Date().getFullYear()} Engaze Digital Inc.</span>
                    </div>

                    {/* Center: Social Links */}
                    <div className="w-full md:w-auto flex justify-center gap-8">
                        {['LINKEDIN', 'INSTAGRAM', 'TWITTER'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="hover:text-white transition-colors"
                            >
                                {social}
                            </a>
                        ))}
                    </div>

                    {/* Right: Legal */}
                    <div className="w-full md:w-auto flex justify-center md:justify-end gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
