import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps {
  label: string;
  name: string;
  category?: 'text' | 'phone' | 'price';
  type: string;
  register: UseFormRegisterReturn;
  required: boolean;
}

export default function Input({
  label,
  name,
  category = 'text',
  type,
  register,
  required,
}: InputProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {category === 'text' ? (
        <input
          id={name}
          type={type}
          required={required}
          {...register}
          className="w-full appearance-none rounded-md border border-gray-300 py-3 px-4 placeholder-gray-300 shadow-sm 
            focus:border-orange-500 focus:outline-none focus:ring-orange-500"
        />
      ) : null}
      {category === 'price' ? (
        <div className="relative flex items-center">
          <div className="pointer-events-none absolute left-4 text-sm text-gray-500">
            <span>$</span>
          </div>
          <input
            id={name}
            type={type}
            required={required}
            step="1"
            placeholder="0"
            {...register}
            className="w-full appearance-none rounded-md border border-gray-300 py-3 pl-8 pr-14 placeholder-gray-300 shadow-sm 
          focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          />
          <div className="pointer-events-none absolute right-4 text-sm text-gray-500">
            <span>USD</span>
          </div>
        </div>
      ) : null}
      {category === 'phone' ? (
        <div className="flex items-center">
          <span className="rounded-l-md border border-r-0 border-gray-300 px-2 py-3 text-gray-500">
            +82
          </span>
          <input
            id={name}
            required={required}
            type={type}
            placeholder="010-0000-0000"
            {...register}
            className="w-full appearance-none rounded-md rounded-l-none border border-gray-300 px-4 py-3 placeholder-gray-300 shadow-sm 
          focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          />
        </div>
      ) : null}
    </div>
  );
}
