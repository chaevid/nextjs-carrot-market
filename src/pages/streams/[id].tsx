import { NextPage } from 'next';
const chatBubbles: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 213, 14, 2, 2, 2, 2, 2, 2,
];

const StreamDetail: NextPage = () => {
  return (
    <div className="mx-auto flex-col items-center justify-center px-4 py-10">
      <div className="aspect-video rounded-md bg-slate-300 shadow-sm"></div>
      <h3 className="mt-2 items-start text-2xl font-medium text-gray-700">
        Let&apos;s Try Potatoes!
      </h3>

      <div className="my-8 h-[50vh] space-y-6 overflow-auto">
        {chatBubbles.map((val, i) => (
          <div
            key={i}
            className="flex items-center space-x-3">
            <div className="aspect-square w-8 rounded-full bg-slate-400" />
            <div className="rounded-md bg-slate-200 py-2 px-4 text-sm text-gray-700">
              <p>Hi how much are you selling them for? {val}</p>
            </div>
          </div>
        ))}

        <div className="flex flex-row-reverse items-center space-x-4 space-x-reverse">
          {/* <div className="aspect-square w-8 rounded-full bg-slate-400" /> */}
          <div className="rounded-md bg-orange-500 py-2 px-4 text-sm text-gray-50">
            <p>I want ￦20,000</p>
          </div>
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

export default StreamDetail;
