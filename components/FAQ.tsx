
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
            className={`group cursor-pointer border-t border-dark-border dark:border-white/10 py-6 md:py-12 transition-colors duration-500 ${isOpen ? 'bg-teal-primary/5' : 'hover:bg-black/[0.02] dark:hover:bg-white/[0.02]'}`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="w-12 shrink-0 pt-1">
                    <span className={`font-mono text-sm transition-colors duration-300 ${isOpen ? 'text-teal-primary' : 'text-light-dim'}`}>
                        {faq.id}
                    </span>
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-start gap-4">
                        <motion.h3
                            animate={{
                                x: isOpen ? 12 : 0,
                                color: isOpen ? '#36B8A5' : 'var(--text-main)'
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="text-xl md:text-2xl font-medium pr-8 leading-snug text-light-neutral dark:text-white"
                        >
                            {faq.question}
                        </motion.h3>

                        <motion.div
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-colors duration-300 ${isOpen ? 'border-teal-primary text-teal-primary' : 'border-dark-border dark:border-white/20 text-light-neutral/60 dark:text-white/60 group-hover:border-teal-primary group-hover:text-teal-primary'}`}
                        >
                            <Plus size={18} />
                        </motion.div>
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                className="overflow-hidden"
                            >
                                <motion.p
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="text-light-dim text-lg leading-relaxed max-w-3xl"
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
        <section className="bg-dark-base border-t border-dark-border dark:border-white/10 relative overflow-hidden transition-colors duration-500">
            <div className="py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-20">
                    <span className="text-teal-primary font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Knowledge Base</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light-neutral dark:text-white tracking-tight text-left leading-tight">Frequently Asked<br />Questions</h2>
                </div>

                <div className="flex flex-col border-b border-dark-border dark:border-white/10">
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
