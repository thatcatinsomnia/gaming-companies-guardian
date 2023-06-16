export default function RequestForm() {
  return (
    <form className="space-y-12">
      <div>
        <label className="block mb-1" htmlFor="id">公司統編：</label>
        <input id="id" className="p-4 w-full border border-slate-200 rounded" />
      </div>

      <div>
        <label className="block mb-1" htmlFor="name">公司名稱：</label>
        <input id="name" className="p-4 w-full border border-slate-200 rounded" />
      </div>

      <div className="flex flex-col sm:flex-row gap-1 text-white">
        <button className="px-12 py-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded">新增</button>
        <button className="px-12 py-2 bg-slate-500 hover:bg-slate-600 transition-colors rounded">取消</button>
      </div>
    </form>
  );
}
