import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { Hash, Building2, AlertTriangle } from 'lucide-react';
import useSearchCompanies from '#/hooks/useSearchCompanies';
import { CompanySearchResultSkeleton } from '#/components/CompanySearchResult';

type Props = {
  query?: string;
};

export default function CompanySearchResult({ query }: Props) {
  const { data, refetch, isLoading, isError, error } = useSearchCompanies(query);

  useEffect(() => {
    if (!query) {
      return;
    }

    refetch();
  }, [query, refetch]);

  if (isLoading) {
    return <CompanySearchResultSkeleton />;
  }

  if (isError) {
    return (
      <div className="px-4 py-8 flex items-center gap-4 bg-red-200 rouned text-rose-900 rounded">
        <AlertTriangle className="shrink-0" />
        <p>{(error as Error)?.message}</p>
      </div>
    );
  }

  return (
    <div className="py-6 space-y-4">
      {data?.length === 0 && <p>沒有資料</p>}

      {data?.map(company => (
        <div
          key={company.id}
          className="p-6 grid grid-cols-3 border border-slate-300 rounded"
        >
          <div>
            <FieldName icon={<Building2 size={15} />}>公司名稱</FieldName>
            <p>{company.name}</p>
          </div>

          <div>
            <FieldName icon={<Hash size={15} />}>統一編號</FieldName>
            <p>{company.tax_id_number || '-'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function FieldName({ icon, children }: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-1 text-slate-500">
      {icon}
      <small>{children}</small>
    </div>
  );
}
