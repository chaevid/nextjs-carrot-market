import Layout from 'components/layout';
import FloatingButton from 'components/floating-button';
import { NextPage } from 'next';
import StreamThumbnail from 'components/stream-thumbnail';
import Link from 'next/link';

const Streams: NextPage = () => {
  return (
    <Layout
      title="Live"
      hasBtmNav>
      <div className="mx-auto flex-col items-center justify-center space-y-4 divide-y last:pb-4">
        {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
          <div key={i}>
            <Link href={`/streams/${i}`}>
              <StreamThumbnail
                id={i}
                title={`Let's Try Potatoes!!!!!`}
              />
            </Link>
          </div>
        ))}
        <FloatingButton href="streams/create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6">
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Streams;
