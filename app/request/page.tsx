import Link from 'next/link';
import { motion } from 'framer-motion';
import GoBack from '#/components/GoBack';
import RequestForm from '#/components/RequestForm';

export default function Page() {
  return (
    <div className="p-8 mx-auto max-w-2xl rounded">
      <GoBack />
      <RequestForm />
    </div>
  );
}