import FloatingButton from 'components/floating-button';
import Layout from 'components/layout';
import type { NextPage } from 'next';

const Community: NextPage = () => {
  return (
    <Layout
      title="My Local"
      hasBtmNav>
      <div className="space-y-4 divide-y-2 px-4 last:mb-4 lg:px-6">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div
            key={i}
            className="flex cursor-pointer flex-col items-start pt-4">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
              동네질문
            </span>
            <div className="mt-4 text-xl text-gray-700 ">
              <span className="pr-2 font-bold text-orange-500">Q.</span>
              Where is the best mandu restaurant?
            </div>
            <div className="flex w-full items-center justify-between py-4 text-sm font-medium text-gray-500">
              <span>니꼬</span>
              <span>18시간 전</span>
            </div>

            <div className="flex w-full space-x-8 border-t pt-4 text-gray-700">
              <span className="flex items-center space-x-2">
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
              <span className="flex items-center space-x-2">
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
          </div>
        ))}
        <FloatingButton href="community/write">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Community;
