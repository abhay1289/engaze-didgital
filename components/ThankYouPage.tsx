import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './ui/Magnetic';

interface ThankYouPageProps {
  onNavigate?: (route: string) => void;
  source?: 'contact' | 'questionnaire';
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.8, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] }, opacity: { duration: 0.2 } },
  },
};

const CheckmarkAnimation = () => (
  <motion.div
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.2 }}
    className="relative w-28 h-28 md:w-32 md:h-32 mx-auto mb-10"
  >
    {/* Outer ring */}
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 0.1 }}
      className="absolute inset-0 rounded-full border-2 border-teal-primary/20"
    />

    {/* Inner glow ring */}
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 22, delay: 0.3 }}
      className="absolute inset-2 rounded-full bg-gradient-to-br from-teal-primary/10 to-teal-secondary/5"
    />

    {/* Core circle */}
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.4 }}
      className="absolute inset-4 rounded-full bg-gradient-to-br from-teal-primary to-teal-secondary shadow-[0_0_40px_rgba(54,184,165,0.3)]"
    />

    {/* SVG Checkmark with draw animation */}
    <motion.svg
      viewBox="0 0 50 50"
      className="absolute inset-0 w-full h-full p-7"
      initial="hidden"
      animate="visible"
    >
      <motion.path
        d="M14 27 L22 35 L36 18"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={draw}
        transition={{ delay: 0.7 }}
      />
    </motion.svg>

    {/* Particle burst */}
    {[...Array(8)].map((_, i) => {
      const angle = (i / 8) * Math.PI * 2;
      const x = Math.cos(angle) * 60;
      const y = Math.sin(angle) * 60;
      return (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, scale: 1, opacity: 0.8 }}
          animate={{ x, y, scale: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 + i * 0.03, ease: [0.25, 1, 0.5, 1] }}
          className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-teal-primary"
          style={{ marginLeft: -3, marginTop: -3 }}
        />
      );
    })}
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as [number, number, number, number] },
  },
};

const steps = [
  { num: '01', title: 'Confirmation Email', desc: 'You will receive a confirmation email within minutes.' },
  { num: '02', title: 'Team Review', desc: 'Our team reviews your submission and prepares a tailored response.' },
  { num: '03', title: 'Personal Follow-Up', desc: 'Expect a direct response from us within 24 hours.' },
];

const ThankYouPage: React.FC<ThankYouPageProps> = ({ onNavigate, source = 'contact' }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const isQuestionnaire = source === 'questionnaire';

  return (
    <div className="bg-[#030303] min-h-screen text-white relative overflow-hidden selection:bg-teal-primary selection:text-black">
      {/* Noise texture */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

      {/* Ambient background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-teal-primary/8 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-teal-secondary/5 rounded-full blur-[120px]" />
      </motion.div>

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none" />

      <AnimatePresence>
        {showContent && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-32"
          >
            {/* Checkmark */}
            <motion.div variants={itemVariants}>
              <CheckmarkAnimation />
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.9] uppercase">
                {isQuestionnaire ? 'Questionnaire' : 'Message'}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-primary to-teal-secondary">
                  Received.
                </span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-center text-base md:text-lg text-white/50 font-light max-w-lg mx-auto leading-relaxed mb-16"
            >
              {isQuestionnaire
                ? 'Thank you for completing the onboarding questionnaire. We have everything we need to get started.'
                : 'Thank you for reaching out. Your message has been securely delivered to our team.'}
            </motion.p>

            {/* Timeline steps */}
            <motion.div variants={itemVariants} className="w-full max-w-2xl mx-auto mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + i * 0.15, duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                    className="group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-teal-primary/20 hover:bg-white/[0.05] transition-all duration-500"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-[10px] text-teal-primary tracking-[0.2em] bg-teal-primary/10 border border-teal-primary/20 px-2.5 py-1 rounded-full">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1.5 tracking-tight">{step.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed font-light">{step.desc}</p>

                    {/* Connecting line for desktop */}
                    {i < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 md:-right-3.5 w-6 md:w-7 h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Reference ID */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-12 px-4 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02]"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-teal-primary" />
              <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">
                Ref #{Math.random().toString(36).substring(2, 10).toUpperCase()}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Magnetic strength={15}>
                <button
                  onClick={() => onNavigate?.('home')}
                  className="group relative flex items-center gap-3 px-8 py-4 bg-white text-[#030303] rounded-full text-xs font-bold tracking-[0.15em] uppercase overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Back to Home
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-teal-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                </button>
              </Magnetic>

              {!isQuestionnaire && (
                <button
                  onClick={() => onNavigate?.('questionnaire')}
                  className="group flex items-center gap-2 px-6 py-4 text-xs font-mono text-white/40 uppercase tracking-[0.2em] hover:text-teal-primary transition-colors duration-300"
                >
                  Fill Questionnaire
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              )}
            </motion.div>

            {/* Bottom decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-teal-primary/30 to-transparent origin-center"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThankYouPage;
