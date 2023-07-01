'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function Title({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 overflow-hidden">
      <motion.h1 
        className="py-4 text-center text-5xl font-bold tracking-widest"
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.16, bounce: 0 }}
      >
        {children}
      </motion.h1>
    </div>
  );
}
