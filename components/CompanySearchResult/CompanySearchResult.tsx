import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { Hash, Building2 } from 'lucide-react';
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
    return <p>error!!!</p>;
  }

  return (
    <div className="space-y-4">
      {data?.length === 0 && <p>沒有資料</p>}

      {data?.map(company => (
        <div
          key={company.id}
          className="p-6 flex items-center gap-10 border border-slate-300 rounded"
        >
          <div>
            <FieldName icon={<Hash size={16} />}>統一編號</FieldName>
            <p>{company.tax_id_number}</p>
          </div>
          <div>
            <FieldName icon={<Building2 size={16} />}>公司名稱</FieldName>
            <p>{company.name}</p>
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
