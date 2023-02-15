import type { NextPage } from 'next';

const Create: NextPage = () => {
  return (
    <div className="space-y-4 px-4 py-10">
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="email"
          className="my-2 w-full appearance-none rounded-md border border-gray-300 py-3 pl-8 pr-14 placeholder-gray-300 shadow-sm 
            focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          required
        />
      </div>
      <div>
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
      <div>
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
        Go Live
      </button>
    </div>
  );
};

export default Create;
