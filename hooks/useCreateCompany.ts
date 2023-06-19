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
        'content-type': 'application/json',
      },
      body: JSON.stringify({ data })
    });
    
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const { id } = await res.json();

    return id as string;
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
