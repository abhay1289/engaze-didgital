
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './ui/Magnetic';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="w-full bg-[#020202] flex flex-col justify-between overflow-hidden relative px-6 md:px-12 py-32 md:py-48 border-t border-white/5 selection:bg-teal-primary selection:text-black">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-primary/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none -translate-y-1/2" />
            </div>

            {/* Content Wrapper for Scroll Reveal */}
            <div className="relative z-10 max-w-[1600px] mx-auto w-full flex flex-col items-center justify-center flex-1 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full text-center flex flex-col items-center"
                >
                    <span className="text-teal-primary font-mono text-[10px] uppercase tracking-[0.3em] block mb-8 border border-teal-primary/30 py-1.5 px-4 rounded-full w-fit bg-teal-primary/5">
                        Initiate Protocol
                    </span>
                    <h2 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black text-white mb-8 md:mb-12 tracking-tighter uppercase leading-[0.85]">
                        Ready to 10x <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-primary to-teal-secondary relative">
                            Your Growth?
                            <div className="absolute -inset-4 bg-teal-primary/20 blur-3xl -z-10" />
                        </span>
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-xl md:text-3xl text-white/50 mb-16 md:mb-24 font-light max-w-3xl mx-auto text-center leading-relaxed"
                >
                    Book a free strategy session. We audit your stack, you keep the roadmap. No pitch, just value.
                </motion.p>

                {/* Middle Tier: The CTA Button */}
                <div className="flex flex-col items-center justify-center w-full mb-32 md:mb-48 gap-8">
                    <Magnetic strength={40}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative flex items-center justify-between gap-6 bg-white text-black px-8 py-5 md:px-12 md:py-6 rounded-full text-xl md:text-2xl font-black shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all hover:bg-teal-primary hover:shadow-[0_0_50px_rgba(54,184,165,0.4)] uppercase tracking-tight"
                        >
                            <span className="relative z-10">Let's Talk Growth</span>
                            <div className="w-12 h-12 rounded-full bg-black/10 group-hover:bg-black/20 flex items-center justify-center transition-colors">
                                <ArrowUpRight className="w-6 h-6 border-white/20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </motion.button>
                    </Magnetic>
                </div>
            </div>

            {/* Bottom Tier: Links and Copyright */}
            <div className="relative z-10 w-full max-w-[1600px] mx-auto border-t border-white/10 pt-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-white/40">
                    {/* Left: Copyright */}
                    <div className="w-full md:w-auto text-center md:text-left">
                        <span className="hover:text-white transition-colors cursor-pointer">© {new Date().getFullYear()} Engaze Digital Inc.</span>
                    </div>

                    {/* Center: Social Links */}
                    <div className="w-full md:w-auto flex justify-center gap-10">
                        {['LINKEDIN', 'INSTAGRAM', 'TWITTER'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="hover:text-teal-primary transition-colors hover:shadow-text-glow"
                            >
                                {social}
                            </a>
                        ))}
                    </div>

                    {/* Right: Legal */}
                    <div className="w-full md:w-auto flex justify-center md:justify-end gap-10">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
