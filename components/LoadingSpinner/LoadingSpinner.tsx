import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionLoader = motion(Loader2);

export default function LoadingSpinner() {
  return (
    <MotionLoader animate={{ rotate: 360 }} transition={{ repeat: Infinity, ease: 'easeOut', duration: 0.36 }} />
  );
}
