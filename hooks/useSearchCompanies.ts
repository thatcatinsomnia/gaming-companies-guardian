import type { ClientResponseError } from 'pocketbase';
import type Company from '#/types/Company';
import { useQuery } from '@tanstack/react-query';

const getCompanies = async (query: string = '') => {
  try {
    const res = await fetch(`/api/companies?query=${query}`);
    
    if (!res.ok) {
      const error = await res.json(); 
      throw new Error(error.message);
    }

    const { data } = await res.json();
    return data as Company[];
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
