import type { NextPage } from 'next';

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        <label
          className="flex h-64 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-gray-400
          hover:border-orange-400 hover:text-orange-500">
          <svg
            className="h-16 w-16 "
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
            className="hidden"
            type="file"
          />
        </label>
      </div>
      <div className="my-4">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <div className="relative flex items-center ">
          <div className="pointer-events-none absolute left-4 text-sm text-gray-500">
            <span>$</span>
          </div>
          <input
            id="price"
            step="0.1"
            className="my-2 w-full appearance-none rounded-md border border-gray-300 py-3 pl-8 pr-14 placeholder-gray-300 shadow-sm 
            focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            type="number"
            placeholder="0.00"
          />
          <div className="pointer-events-none absolute right-4 text-sm text-gray-500">
            <span>USD</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          className="my-2 w-full resize-none rounded-md border-gray-300 shadow-sm
          focus:border-orange-500 focus:outline-none focus:ring-orange-500 "
          rows={5}
        />
      </div>
      <button
        className="my-2 w-full rounded-md border border-transparent bg-orange-500 px-4 py-3 font-medium text-white shadow-sm 
          hover:bg-orange-600
          focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
