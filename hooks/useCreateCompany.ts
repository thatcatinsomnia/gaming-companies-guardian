import { useMutation } from '@tanstack/react-query';

type Data = {
  name: string;
  taxIdNumber?: string;
};

async function createCompany(data: Data) {
  try {
    const res = await fetch('/api/companies', {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({ data })
    });
    
    const json = await res.json();

    return json as { id: string };
  } catch (error) {
    throw error;
  }
}

export default function useCreateCompany() {
  const mutation = useMutation({
    mutationKey: ['companies'],
    mutationFn: (data: Data) => createCompany(data)
  });
  
  return mutation;
}
