'use client';

import { useForm } from 'react-hook-form';
import TextInput from '#/components/TextInput';

type FormValues = {
  taxIdNumber: string;
  name: string;
};

export default function RequestForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const createNewCompany = (data: FormValues) => {
    // todo: add creating logic
    console.log('submit');
  };

  return (
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
        <button className="px-12 py-2 bg-blue-600 hover:bg-blue-700 transition-colors rounded">新增</button>
        <button className="px-12 py-2 bg-slate-500 hover:bg-slate-600 transition-colors rounded" type="button">取消</button>
      </div>
    </form>
  );
}
