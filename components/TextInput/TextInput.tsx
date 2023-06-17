import type { ComponentProps } from 'react';
import type  { UseFormRegisterReturn } from 'react-hook-form';
import { forwardRef } from 'react';

type Props = {
  isError?: boolean;
  error?: string;
  register?: UseFormRegisterReturn;
} & ComponentProps<'input'>;

const TextInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { isError, error, register, ...delegated } = props;

  const outlineClass = isError && 'outline-rose-500';

  return (
    <div className="relative">
      <input
        className={`p-4 w-full border border-slate-200 rounded ${outlineClass}`}
        ref={ref}
        type="text"
        autoComplete="off"
        {...register}
        {...delegated}
      />

      {isError && <small className="text-rose-500 absolute left-0 top-[calc(100%+2px)]">{error}</small>}
    </div>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
