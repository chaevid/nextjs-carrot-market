import InputMessage from 'components/input-message';
import Layout from 'components/layout';
import Message from 'components/message';
import type { NextPage } from 'next';

const ChatDetail: NextPage = () => {
  return (
    <Layout
      title="{Nickname}"
      canGoBack>
      <div className="mb-12 space-y-4 py-10 px-4">
        <Message message="Hi how much are you selling them for?"></Message>
        <Message
          reversed
          message="I want ￦20,000"></Message>
        <Message message="미쳤어"></Message>
      </div>
      <InputMessage onClick={() => console.log('Input Message')} />
    </Layout>
  );
};

export default ChatDetail;
