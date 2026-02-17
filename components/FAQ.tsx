
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
    {
        id: '01',
        question: "How does algorithmic marketing differ from traditional agencies?",
        answer: "Traditional agencies rely on intuition. We rely on data infrastructure. Our proprietary engine analyzes millions of data points across your funnel to automate bid management, creative rotation, and audience targeting in real-time."
    },
    {
        id: '02',
        question: "What is the typical timeline for infrastructure integration?",
        answer: "For most enterprise clients, our 'Audit to Launch' phase takes 4-6 weeks. This includes a full tech stack audit, pixel implementation, and dashboard setup before we begin active campaign management."
    },
    {
        id: '03',
        question: "Do you support headless commerce architectures?",
        answer: "Absolutely. We specialize in headless environments including Shopify Plus, Hydrogen, Next.js, and Vercel. Our API-first approach ensures seamless data flow regardless of your frontend stack."
    },
    {
        id: '04',
        question: "What minimum ad spend do you require?",
        answer: "Our infrastructure is designed for scale. We typically work with brands spending a minimum of $50k/month on paid channels to ensure our algorithms have sufficient data density for optimization."
    }
];

const FAQItem: React.FC<{ faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <motion.div 
            layout 
            onClick={onClick}
            className={`group cursor-pointer border-t border-dark-border dark:border-white/10 py-8 md:py-12 transition-colors duration-500 ${isOpen ? 'bg-teal-primary/5' : 'hover:bg-black/[0.02] dark:hover:bg-white/[0.02]'}`}
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
            <div className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 md:mb-20">
                    <span className="text-teal-primary font-mono text-xs uppercase tracking-[0.2em] mb-4 block">Knowledge Base</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light-neutral dark:text-white tracking-tight text-left leading-tight">Frequently Asked<br/>Questions</h2>
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
