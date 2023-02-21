interface InputImageProps {
  name: string;
  category: 'product' | 'profile';
}

export default function InputImage({ name, category }: InputImageProps) {
  return (
    <>
      {category === 'product' ? (
        <label
          htmlFor={name}
          className="flex h-72 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-gray-400
        hover:border-orange-400 hover:text-orange-500">
          <svg
            className="h-16 w-16"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true">
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            id={name}
            type="file"
            accept="image/*"
            className="hidden"
          />
        </label>
      ) : null}
      {category === 'profile' ? (
        <label
          htmlFor={name}
          className="flex cursor-pointer rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700
  focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
          Change Photo
          <input
            id={name}
            type="file"
            accept="image/*"
            className="hidden"
          />
        </label>
      ) : null}
    </>
  );
}
