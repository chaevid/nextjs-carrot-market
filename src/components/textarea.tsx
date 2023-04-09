import { UseFormRegisterReturn } from 'react-hook-form';

interface TextareaProps {
  hideLabel?: boolean;
  label: string;
  name: string;
  rows: number;
  placeholder?: string;
  register: UseFormRegisterReturn;
  [key: string]: any;
}
export default function Textarea({
  hideLabel = false,
  label,
  name,
  rows,
  placeholder,
  register,
  ...rest
}: TextareaProps) {
  return (
    <div className="space-y-2">
      {hideLabel ? null : (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        id={name}
        {...register}
        name={name}
        rows={rows}
        placeholder={placeholder}
        {...rest}
        className="my-2 w-full resize-none rounded-md border-gray-300 placeholder-gray-300 shadow-sm
                focus:border-orange-500 focus:outline-none focus:ring-orange-500 "
      />
    </div>
  );
}
