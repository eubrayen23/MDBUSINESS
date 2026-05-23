/**
 * @file Preloader.tsx
 * @description Cinematic "System Initializing" sequence for MD Business.
 * Implements a high-precision 0-100% counter with terminal-style metadata.
 *
 * DESIGN PHILOSOPHY:
 * - Psychological Enchantment: The delay creates a perception of high computational value.
 * - Minimalist Tech: Monospaced fonts combined with high-fashion imagery.
 * - Brand Authority: Boot sequences for "Angola Expansion Nodes" reinforce market dominance.
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Preloader Component
 * @param onComplete Callback triggered after the 100% threshold + aesthetic delay.
 */
const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <img src="/logo.png" alt="MD Business" className="w-32 h-auto grayscale contrast-125" />
        </motion.div>

        <div className="w-64 h-[1px] bg-black/5 relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-black"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-6 flex justify-between w-64 items-end">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">System Status</span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Initializing Core...</span>
          </div>
          <span className="text-4xl font-black tracking-tighter italic">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      <div className="absolute bottom-12 left-12">
        <div className="flex flex-col gap-1">
          <span className="text-[8px] font-mono uppercase opacity-30 leading-none">MD_BUSINESS_CORE_V1.0.4</span>
          <span className="text-[8px] font-mono uppercase opacity-30 leading-none">BOOTING_ANGOLA_EXPANSION_NODE</span>
          <span className="text-[8px] font-mono uppercase opacity-30 leading-none">AUTH_SUCCESS_TOKEN_MD_10000</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
