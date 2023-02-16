import Layout from 'components/layout';
import type { NextPage } from 'next';

const CommunityPostDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="space-y-4 divide-y">
        <div className="flex flex-col items-start px-4 pt-4 lg:px-6">
          <span className=" rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
            동네질문
          </span>
          <div className="flex w-full cursor-pointer items-center space-x-3 py-4">
            <div className="h-10 w-10 rounded-full bg-slate-300" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">
                Steve Jebs
              </span>
              <span className="text-xs font-medium text-gray-500">
                View profile &rarr;
              </span>
            </div>
          </div>
          <div className="my-2 text-xl text-gray-700 ">
            <span className="pr-2 font-bold text-orange-500">Q.</span>
            Where is the best mandu restaurant?
          </div>
        </div>

        <div className="flex w-full space-x-5 border-t px-6 pt-4  text-gray-700">
          <span className="flex items-center space-x-2 text-sm">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>궁금해요 1</span>
          </span>
          <span className="flex items-center space-x-2 text-sm">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            <span>답변 1</span>
          </span>
        </div>

        <div className="my-4 space-y-4">
          <div className="mt-4 flex items-start space-x-3 px-4">
            <div className="aspect-square w-8 rounded-full bg-slate-200" />
            <div>
              <span className="block text-sm font-medium text-gray-700">
                Steve Jebs
              </span>
              <span className="block text-xs text-gray-500 ">2시간 전</span>
              <p className="mt-2 text-gray-700">
                The best mandu restaurant is the one next to my house.
              </p>
            </div>
          </div>
          <div className="px-4">
            <textarea
              className="mt-1 w-full resize-none rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 "
              rows={4}
              placeholder="Answer this question!"
            />
            <button className="mt-2 w-full rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ">
              Reply
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
