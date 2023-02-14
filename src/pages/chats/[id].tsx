import type { NextPage } from 'next';

const ChatDetail: NextPage = () => {
  return (
    <div className="mb-12 space-y-4 py-10 px-4">
      <div className="flex items-center space-x-3">
        <div className="aspect-square w-8 rounded-full bg-slate-400" />
        <div className="rounded-md bg-slate-200 py-2 px-4 text-sm text-gray-700">
          <p>Hi how much are you selling them for?</p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center space-x-4 space-x-reverse">
        {/* <div className="aspect-square w-8 rounded-full bg-slate-400" /> */}
        <div className="rounded-md bg-orange-500 py-2 px-4 text-sm text-gray-50">
          <p>I want ￦20,000</p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="aspect-square w-8 rounded-full bg-slate-400" />
        <div className="rounded-md bg-slate-200 py-2 px-4 text-sm text-gray-700">
          <p>미쳤어</p>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-4 mx-auto w-full max-w-screen-md px-4">
        <div className="relative flex items-center ">
          <input
            type="text"
            className="w-full rounded-full border-gray-300 py-3 pr-16
            shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
          <div className="absolute right-3 flex">
            <button
              className="flex aspect-square h-8 items-center justify-center rounded-full bg-orange-500 text-white
            hover:bg-orange-600
              focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
