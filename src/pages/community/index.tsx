import FloatingButton from 'components/floating-button';
import Layout from 'components/layout';
import LocalQuestion from 'components/local-question';
import type { NextPage } from 'next';
import Link from 'next/link';

const Community: NextPage = () => {
  const createdTime = new Date(2023, 1, 21, 17, 30, 25, 9); // new Date(year, monthIndex, day, hours, minutes, seconds)

  return (
    <Layout
      title="My Local"
      hasBtmNav>
      <div className="space-y-4 divide-y lg:px-6">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <LocalQuestion
            id={i}
            key={i}
            user={'CHAEVID'}
            location={'Jamsil'}
            question={'Where is the best mandu restaurant?'}
            createdTime={createdTime}
            interested={5}
            replies={3}></LocalQuestion>
        ))}
      </div>
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
    </Layout>
  );
};

export default Community;
