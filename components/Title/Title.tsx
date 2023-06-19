'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function Title({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 overflow-hidden">
      <motion.h1 
        className="py-4 text-center text-5xl font-bold tracking-widest"
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ duration: 0.2, bounce: 0 }}
      >
        {children}
      </motion.h1>
    </div>
  );
}
