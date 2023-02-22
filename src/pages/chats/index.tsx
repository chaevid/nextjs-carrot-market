import Chat from '@/components/chat';
import Layout from '@/components/layout';
import { NextPage } from 'next';

const Chats: NextPage = () => {
  return (
    <Layout
      title="Chats"
      hasBtmNav>
      <div className="divide-y">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Chat
            key={i}
            id={i}
            nickname={`User ${i}`}
            message={`Hello?? 당근해요!! ${i}`}></Chat>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
