
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import { Mail, MapPin, Send, Globe, CheckCircle, ArrowDown } from 'lucide-react';
import Magnetic from './ui/Magnetic';

const ContactPage: React.FC = () => {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <div className="bg-dark-base min-h-screen text-light-neutral dark:text-white transition-colors duration-500 overflow-hidden relative">
            <section className="pt-32 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen flex flex-col justify-center relative z-10 text-left">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start text-left">
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:sticky lg:top-32 text-left"
                    >
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12 leading-[0.9] text-left">
                            Let's <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-primary to-teal-secondary">Engineer</span> <br/> Growth.
                        </h1>
                        <p className="text-xl text-light-dim leading-relaxed mb-16 max-w-md font-light text-left">
                            We are selective with our partners. Tell us about your ambition, and we'll tell you how we can build the infrastructure to achieve it.
                        </p>
                        <div className="space-y-8 text-left">
                            <div className="flex items-center gap-6 group rounded-2xl text-left">
                                <div className="p-4 rounded-full bg-teal-primary/10 text-teal-primary">
                                    <Mail />
                                </div>
                                <div className="text-left">
                                    <h3 className="font-bold text-lg mb-1 text-left">Direct Line</h3>
                                    <a href="mailto:hello@teal.inc" className="text-light-dim hover:text-teal-primary transition-colors text-lg text-left">hello@teal.inc</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/80 dark:bg-[#0A0A0A]/60 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] border border-dark-border dark:border-white/10 shadow-premium relative overflow-hidden text-left"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10 text-left">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                                <div className="relative group text-left">
                                    <label className={`block text-xs font-mono uppercase tracking-widest mb-2 transition-colors ${focusedField === 'name' ? 'text-teal-primary' : 'text-light-dim'} text-left`}>Name</label>
                                    <input 
                                        type="text" 
                                        required
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full bg-dark-base/5 dark:bg-white/5 rounded-lg py-4 px-4 text-lg focus:outline-none transition-all text-light-neutral dark:text-white placeholder:text-light-dim/30 text-left"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>
                            <div className="relative group text-left">
                                <label className={`block text-xs font-mono uppercase tracking-widest mb-2 transition-colors ${focusedField === 'email' ? 'text-teal-primary' : 'text-light-dim'} text-left`}>Email</label>
                                <input 
                                    type="email" 
                                    required
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full bg-dark-base/5 dark:bg-white/5 rounded-lg py-4 px-4 text-lg focus:outline-none transition-all text-light-neutral dark:text-white placeholder:text-light-dim/30 text-left"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="relative group text-left">
                                <label className={`block text-xs font-mono uppercase tracking-widest mb-2 transition-colors ${focusedField === 'message' ? 'text-teal-primary' : 'text-light-dim'} text-left`}>Brief</label>
                                <textarea 
                                    rows={4}
                                    required
                                    onFocus={() => setFocusedField('message')}
                                    onBlur={() => setFocusedField(null)}
                                    className="w-full bg-dark-base/5 dark:bg-white/5 rounded-lg py-4 px-4 text-lg focus:outline-none transition-all text-light-neutral dark:text-white resize-none placeholder:text-light-dim/30 text-left"
                                    placeholder="Tell us about your project..."
                                />
                            </div>
                            <div className="pt-8 text-left">
                                <Magnetic>
                                    <button 
                                        type="submit"
                                        disabled={isSubmitted}
                                        className="w-full bg-light-neutral dark:bg-white text-white dark:text-dark-base py-5 rounded-full font-bold text-lg hover:bg-teal-primary transition-all duration-300 shadow-premium flex items-center justify-center gap-3"
                                    >
                                        Transmit Request
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
