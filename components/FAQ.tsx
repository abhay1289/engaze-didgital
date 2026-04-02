
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
    {
        id: '01',
        question: "How do you structure your engagements?",
        answer: "We prefer long-term partnerships but also execute high-impact sprints. Our typical engagement starts with a 'Discovery & Blueprint' phase to align technical requirements with business goals before moving into execution."
    },
    {
        id: '02',
        question: "What industries do you specialize in?",
        answer: "We have deep expertise in Fintech, Healthcare, and E-Commerce. Our team is adept at navigating complex regulatory environments (HIPAA, PCI compliance) while delivering consumer-grade user experiences."
    },
    {
        id: '03',
        question: "Do you work with startups or enterprises?",
        answer: "Both. We empower high-growth startups to scale their infrastructure rapidly and help established enterprises modernize their legacy systems. Our sweet spot is organizations looking to '10x' their digital capability."
    },
    {
        id: '04',
        question: "What is your typical project timeline?",
        answer: "It varies by scope. A comprehensive brand and web overhaul typically takes 8-12 weeks, while custom software products can take 3-6 months. We prioritize 'speed to value' over endless planning cycles."
    }
];

const FAQItem: React.FC<{ faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <motion.div
            layout
            onClick={onClick}
            className={`group cursor-pointer border-t border-slate-100 py-8 md:py-16 transition-colors duration-500 relative overflow-hidden ${isOpen ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
        >
            {/* Hover Glow */}
            <div className={`absolute inset-0 bg-gradient-to-r from-teal-primary/0 via-teal-primary/5 to-teal-primary/0 opacity-0 transition-opacity duration-700 pointer-events-none ${isOpen ? 'opacity-100' : 'group-hover:opacity-100'}`} />

            <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-6 md:gap-16 relative z-10 text-left">
                <div className="w-12 shrink-0 pt-1 text-left">
                    <span className={`font-mono text-sm transition-colors duration-300 ${isOpen ? 'text-teal-primary' : 'text-slate-300 group-hover:text-teal-primary'}`}>
                        {faq.id}
                    </span>
                </div>

                <div className="flex-1 text-left">
                    <div className="flex justify-between items-start gap-4 text-left w-full">
                        <motion.h3
                            animate={{
                                x: isOpen ? 12 : 0,
                                color: isOpen ? '#36B8A5' : '#0F172A'
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className={`text-xl md:text-3xl font-black pr-8 leading-tight tracking-tighter uppercase transition-colors duration-500 text-left`}
                        >
                            {faq.question}
                        </motion.h3>

                        <motion.div
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={`shrink-0 w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-500 ${isOpen ? 'border-teal-primary bg-teal-primary text-black scale-110' : 'border-slate-300 text-slate-700 group-hover:bg-teal-primary group-hover:text-black group-hover:border-teal-primary group-hover:scale-110'}`}
                        >
                            <Plus size={24} />
                        </motion.div>
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                animate={{ height: "auto", opacity: 1, marginTop: 32 }}
                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                className="overflow-hidden text-left"
                            >
                                <motion.p
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="text-slate-500 text-base font-light leading-relaxed max-w-3xl text-left pl-0 md:pl-3 border-l md:border-teal-primary/30"
                                >
                                    {faq.answer}
                                </motion.p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-[#F8F9FB] border-t border-slate-100 relative overflow-hidden transition-colors duration-500 selection:bg-teal-primary selection:text-white">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-primary/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen -z-10" />

            <div className="py-32 md:py-48 text-left">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-20 md:mb-32 text-left">
                    <span className="text-teal-primary font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block border border-teal-primary/30 py-1.5 px-4 rounded-full w-fit bg-teal-primary/10">
                        Knowledge Base
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#0F172A] tracking-tighter leading-[0.85] uppercase text-left">
                        Frequently Asked <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-teal-primary to-teal-secondary">Questions.</span>
                    </h2>
                </div>

                <div className="flex flex-col border-b border-slate-100 text-left">
                    {faqs.map((faq, i) => (
                        <FAQItem
                            key={i}
                            faq={faq}
                            isOpen={openIndex === i}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
