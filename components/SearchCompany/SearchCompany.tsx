'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { SearchIcon } from 'lucide-react';
import CompanySearchResult from '#/components/CompanySearchResult';

export default function SearchCompany() {
  const [query, setQuery] = useState<string>();

  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    setQuery(ref.current?.value);
  };

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ delay: 0.06, duration: 0.16, bounce: 0 }}
      >
        <div className="mb-4 h-12 flex">
          <input className="p-2 h-full text-lg flex-1 border border-slate-300 rounded-tl rounded-bl outline-blue-500" placeholder="統邊或公司名稱" ref={ref} />

          <button className="p-2 w-12 h-12 flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-tr rounded-br" onClick={handleSearch}>
            <SearchIcon />
          </button>
        </div>

        <CompanySearchResult query={query} />
      </motion.div>
    </div>
  );
}
