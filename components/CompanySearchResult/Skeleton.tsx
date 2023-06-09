export function CompanySearchResultSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="p-6 h-24 flex items-center gap-10 border border-slate-300 rounded animate-pulse"
        >
          <ColumnSkeleton />
          <ColumnSkeleton />
        </div>
      ))}
    </div>
  );
}

function ColumnSkeleton() {
  return (
    <div>
      <p className="w-[6em] mb-1 h-6 bg-slate-200 rounded"></p>
      <p className="w-[8em] h-6 bg-slate-200 rounded"></p>
    </div>
  );
}