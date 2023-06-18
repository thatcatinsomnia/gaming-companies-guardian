import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import RequestForm from '#/components/RequestForm';

export default function Page() {
  return (
    <div className="mx-auto max-w-2xl rounded p-8 ">
      <Link href="/" className="px-4 py-2 rounded inline-flex items-center gap-1 hover:bg-slate-100 transition-colors group">
        <ArrowLeft size={16} className="-translate-x-4 group-hover:translate-x-0 transition-transform" />
        <span className="-translate-x-4 group-hover:translate-x-0 transition-transform" >Back</span>
      </Link>
      <h2 className="mb-4 py-4 text-3xl">新增公司</h2>
      <RequestForm />
    </div>
  );
}