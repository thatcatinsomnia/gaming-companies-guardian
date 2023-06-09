import { useQuery } from '@tanstack/react-query';
import pb from '#/lib/pocketbase';

type Company = {
  id: string;
  name: string;
  tax_id_number: string;
};

const getCompanies = async (query: string = '') => {
  try {
    const res = await pb.collection('company').getFullList<Company>({
      filter: `name ~ ${query} || tax_id_number ~ ${query}`
    });

    return res;
  } catch (error) {
    throw error;
  }
};

export default function useSearchCompanies(query: string = '') {
  const { data, refetch, isFetching, isError, error } = useQuery({
    queryKey: ['search-companies', query],
    queryFn: () => getCompanies(query),
    enabled: false
  });

  return {
    data,
    refetch,
    isLoading: isFetching,
    isError,
    error
  };
}
