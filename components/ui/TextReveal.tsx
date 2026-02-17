import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  type?: 'word' | 'char';
  gradient?: boolean;
  stagger?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ text, className = "", delay = 0, type = 'char', gradient = false, stagger }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: stagger !== undefined ? stagger : (type === 'char' ? 0.015 : 0.05), 
        delayChildren: delay * i 
      },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 30, // Increased movement
      rotateX: 45, // Add rotation for 3D feel
    },
  };

  if (type === 'char') {
    return (
      <motion.div
        ref={ref}
        style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
      >
        {text.split(" ").map((word, i) => (
           <div key={i} className="inline-flex overflow-hidden pb-2 mr-[0.2em]">
             {Array.from(word).map((char, j) => (
               <motion.span variants={child} key={j} className={gradient ? 'text-gradient-teal' : ''}>
                 {char}
               </motion.span>
             ))}
           </div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {text.split(" ").map((word, index) => (
        <motion.span variants={child} key={index} className="mr-[0.25em] inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextReveal;