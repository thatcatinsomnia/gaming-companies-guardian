'use client';

import { motion } from 'framer-motion';

export default function RequestButton() {
  return (
    <motion.button
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white transition-colors rounded"
      initial={{ opacity: 0, scale: 0.5  }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.08 }}
    >
      Request
    </motion.button>
  );
}
