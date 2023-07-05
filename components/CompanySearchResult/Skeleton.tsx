export function CompanySearchResultSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="p-6 flex flex-col gap-4 border border-slate-300 rounded animate-pulse"
        >
          <div>
            <p className="w-[6em] mb-0.5 h-5 bg-slate-200 rounded"></p>
            <p className="w-[8em] h-5 bg-slate-200 rounded"></p>
          </div>

          <div>
            <p className="w-[6em] mb-0.5 h-5 bg-slate-200 rounded"></p>
            <p className="w-[16em] h-5 bg-slate-200 rounded"></p>
          </div>
        </div>
      ))}
    </div>
  );
}
