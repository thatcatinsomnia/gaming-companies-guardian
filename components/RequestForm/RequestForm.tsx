'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import confetti from 'canvas-confetti';
import { randomInRange } from '#/lib/helper';
import TextInput from '#/components/TextInput';
import useCreateCompany from '#/hooks/useCreateCompany';
import LoadingSpinner from '#/components/LoadingSpinner';
import Modal from '#/components/Modal';

type FormValues = {
  taxIdNumber: string;
  name: string;
};

export default function RequestForm() {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();
  const mutation = useCreateCompany();
  const router = useRouter();

  const createNewCompany = async (data: FormValues) => {
    mutation.mutate(data, {
      onSuccess: () => {
        reset();
        setIsOpen(true);
        
        confetti({
          angle: randomInRange(55, 125),
          spread: randomInRange(50, 70),
          particleCount: randomInRange(50, 100),
          origin: { y: 0.45 }
        });
      }
    });
  };

  return (
    <>
      <form className="space-y-12" onSubmit={handleSubmit(createNewCompany)}>
        <div>
          <label className="block mb-1" htmlFor="taxIdNumber">公司統編</label>
          <TextInput
            id="taxIdNumber"
            register={register('taxIdNumber', {
              pattern: /^[0-9]{8}$/
            })}
            isError={!!errors.taxIdNumber}
            error="公司統邊格式錯誤"
          />
        </div>

        <div>
          <label className="block mb-1" htmlFor="name">公司名稱<span className="px-1 text-rose-500">*</span></label>
          <TextInput
            id="name"
            register={register('name', { required: true })}
            isError={!!errors.name}
            error="請輸入公司名稱"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-1 text-white">
          <button className="p-2 w-full md:w-36 flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/40 transition-colors rounded" disabled={mutation.isLoading}>
            {mutation.isLoading ? <LoadingSpinner /> : '新增'}
          </button>
          <button className="p-2 w-full md:w-36 bg-slate-500 hover:bg-slate-600 disabled:bg-slate-600/40 transition-colors rounded" type="button" disabled={mutation.isLoading} onClick={() => router.push('/')}>取消</button>
        </div>
      </form>
  
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>成功新增公司 🎉</Modal>
    </>
  );
}
