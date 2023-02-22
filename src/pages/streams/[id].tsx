import Chat from '@/components/chat';
import InputMessage from '@/components/input-message';
import Layout from '@/components/layout';
import Message from '@/components/message';
import StreamThumbnail from '@/components/stream-thumbnail';
import { NextPage } from 'next';
const chatBubbles: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const StreamDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="mx-auto flex-col items-center justify-center">
        <StreamThumbnail
          largeTitle
          id={0}
          title={`Let's Try Potatoes!`}></StreamThumbnail>

        <div className="mt-4 h-[50vh] space-y-6 overflow-auto px-4 pb-16">
          {chatBubbles.map((val, i) => (
            <Message
              key={i}
              message={`Hi how much are you selling them for? ${val}`}
            />
          ))}
          <Message
            reversed
            message={`I want ￦20,000`}
          />
        </div>
      </div>
      <InputMessage onClick={() => console.log('Input Message')} />
    </Layout>
  );
};

export default StreamDetail;
