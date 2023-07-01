import type { ReactNode } from 'react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  color?: 'blue' | 'gray'
};

const ColorClasses = {
  'blue': 'bg-blue-600 hover:bg-blue-700',
  'gray': 'bg-gray-500 hover:bg-gray-600'
};

const MotionPanel = motion(Dialog.Panel);

export default function Modal({ isOpen, onClose, color = 'blue', children }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          className="relative z-50"
          open={isOpen}
          onClose={onClose}
        >
          <motion.div 
            className="flex items-center justify-center fixed inset-0 bg-slate-900/50" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <MotionPanel 
            className="m-auto p-4 w-full max-w-sm h-72 flex flex-col align-center fixed inset-0 bg-white rounded shadow"
            initial={{ opacity: 0, y: -60, scale: 0.95 }}
            animate={{ opacity: 1, y: -100, scale: 1, transition: { delay: 0.08 } }}
            exit={{ opacity: 0, y: -60, scale: 0.95 }}
          >
            <div className="flex-1 flex items-center justify-center text-slate-700 overflow-hidden">
              {children}
            </div>
            
            <button
              className={`px-6 py-2 text-white ${ColorClasses[color]} transition-colors rounded`}
              onClick={onClose}
            >
              確定
            </button>
          </MotionPanel>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
