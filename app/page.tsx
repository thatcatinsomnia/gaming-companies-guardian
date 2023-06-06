import { SearchIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-14 mx-auto max-w-xs">
      <h1 className="py-4 text-center text-4xl font-bold tracking-widest">博奕守護者</h1>
      <div className="h-12 flex">
        <input className="p-2 h-full text-lg flex-1 border border-slate-300 rounded-tl rounded-bl outline-blue-500" placeholder="統邊或公司名稱" />

        <button className="p-2 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-tr rounded-br">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}
