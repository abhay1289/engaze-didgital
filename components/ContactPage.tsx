
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import { Mail, MapPin, Send, Globe, CheckCircle, ArrowDown, ArrowUpRight } from 'lucide-react';
import Magnetic from './ui/Magnetic';

// Custom Grain Overlay
const GrainOverlay = () => (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat brightness-100 contrast-100" />
    </div>
);

const ContactPage: React.FC = () => {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <div className="bg-dark-base min-h-screen text-light-neutral dark:text-white transition-colors duration-500 overflow-hidden relative selection:bg-teal-primary selection:text-black">
            <GrainOverlay />

            {/* Ambient Background Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-primary/10 blur-[150px] mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen pointer-events-none" />

            <section className="pt-32 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto min-h-screen flex flex-col justify-center relative z-10 text-left">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-12 items-start text-left">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 lg:sticky lg:top-40 text-left pr-0 lg:pr-12"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-primary" />
                            <span className="font-mono text-teal-primary text-xs uppercase tracking-[0.3em]">Contact Us</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[0.9] text-left uppercase text-white">
                            GET IN <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-primary to-teal-secondary">TOUCH.</span>
                        </h1>
                        <p className="text-base md:text-lg text-white/50 leading-relaxed mb-16 max-w-md font-light text-left">
                            Tell us about your project and goals. We'll get back to you within 24 hours.
                        </p>

                        <div className="space-y-8 text-left border-t border-white/10 pt-12">
                            <div className="flex items-start gap-6 group text-left cursor-pointer">
                                <div className="p-4 rounded-full border border-white/10 bg-white/5 group-hover:border-teal-primary/50 group-hover:bg-teal-primary/10 transition-all duration-500 text-teal-primary mt-1">
                                    <Mail size={24} />
                                </div>
                                <div className="text-left flex flex-col">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-2">Email</span>
                                    <a href="mailto:hello@engazedigital.com" className="text-xl font-bold text-white group-hover:text-teal-primary transition-colors text-left flex items-center gap-3">
                                        hello@engazedigital.com
                                        <ArrowUpRight size={20} className="opacity-0 -translate-x-2 -translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group text-left mt-8">
                                <div className="p-4 rounded-full border border-white/10 bg-white/5 text-white/50 mt-1">
                                    <MapPin size={24} />
                                </div>
                                <div className="text-left flex flex-col">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-2">Location</span>
                                    <span className="text-base text-white/80 leading-relaxed">
                                        Level 42, The Shard<br />
                                        London Area, SE1 9SG
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7 bg-[#050505] p-8 md:p-16 rounded-[2rem] border border-white/10 shadow-[0_0_100px_rgba(54,184,165,0.05)] relative overflow-hidden text-left group"
                    >
                        {/* Subtle dynamic background in form */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-primary/5 rounded-full blur-[80px] group-hover:bg-teal-primary/10 transition-colors duration-1000 -z-10" />

                        <form onSubmit={handleSubmit} className="space-y-10 relative z-10 text-left">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                                <div className="relative text-left flex flex-col">
                                    <label className={`block font-mono text-[10px] uppercase tracking-[0.2em] mb-4 transition-colors ${focusedField === 'name' ? 'text-teal-primary' : 'text-white/40'} text-left`}>Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full bg-transparent border-b border-white/20 py-3 text-base focus:outline-none focus:border-teal-primary transition-all text-white placeholder:text-white/10 text-left"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="relative text-left flex flex-col">
                                    <label className={`block font-mono text-[10px] uppercase tracking-[0.2em] mb-4 transition-colors ${focusedField === 'email' ? 'text-teal-primary' : 'text-white/40'} text-left`}>Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full bg-transparent border-b border-white/20 py-3 text-base focus:outline-none focus:border-teal-primary transition-all text-white placeholder:text-white/10 text-left"
                                        placeholder="name@domain.com"
                                    />
                                </div>
                            </div>

                            <div className="relative text-left flex flex-col mt-4">
                                <label className={`block font-mono text-[10px] uppercase tracking-[0.2em] mb-4 transition-colors ${focusedField === 'company' ? 'text-teal-primary' : 'text-white/40'} text-left`}>Company</label>
                                <input
                                    type="text"
                                    onFocus={() => setFocusedField('company')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-base focus:outline-none focus:border-teal-primary transition-all text-white placeholder:text-white/10 text-left"
                                    placeholder="Your Organization"
                                />
                            </div>

                            <div className="relative text-left flex flex-col mt-4">
                                <label className={`block font-mono text-[10px] uppercase tracking-[0.2em] mb-4 transition-colors ${focusedField === 'message' ? 'text-teal-primary' : 'text-white/40'} text-left`}>Project Details</label>
                                <textarea
                                    rows={5}
                                    required
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-base focus:outline-none focus:border-teal-primary transition-all text-white resize-none placeholder:text-white/10 text-left"
                                    placeholder="Detail your objectives..."
                                />
                            </div>

                            <div className="pt-8 text-left mt-12 flex items-center justify-between border-t border-white/10 pt-10">
                                <span className="hidden md:inline-block text-white/30 font-mono text-[10px] uppercase tracking-widest">We typically respond within <span className="text-teal-primary/80">24 hours</span></span>
                                <Magnetic strength={20}>
                                    <button
                                        type="submit"
                                        disabled={isSubmitted}
                                        className="group relative overflow-hidden bg-white text-dark-base px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-50"
                                    >
                                        <span className="relative z-10">{isSubmitted ? 'Sent' : 'Send Message'}</span>
                                        {isSubmitted ? <CheckCircle size={18} className="relative z-10" /> : <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                        <div className="absolute inset-0 bg-teal-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                                    </button>
                                </Magnetic>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ContactPage;
