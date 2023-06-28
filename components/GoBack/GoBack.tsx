'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const MotionLink = motion(Link);

export default function GoBack() {
  return (
    <MotionLink 
      href="/" 
      className="mb-4 px-4 py-2 rounded inline-flex items-center gap-1 hover:bg-slate-100 transition-colors group"
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: '0%' }}
      transition={{ delay: 0.2 }}
    >
      <ArrowLeft size={16} className="-translate-x-4 group-hover:translate-x-0 transition-transform" />
      <span className="-translate-x-4 group-hover:translate-x-0 transition-transform">Back</span>
    </MotionLink>
  );
}
