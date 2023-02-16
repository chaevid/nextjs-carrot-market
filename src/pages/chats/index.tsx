import Layout from 'components/layout';
import { NextPage } from 'next';

const Chats: NextPage = () => {
  return (
    <Layout
      title="Chats"
      hasBtmNav>
      <div className="divide-y">
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            key={i}
            className="flex cursor-pointer items-center space-x-3 py-4 px-4">
            <div className="aspect-square w-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-gray-700">Steve Jebs</p>
              <p className="text-sm font-medium text-gray-500">
                See you tommorrow in the corner at 2pm!
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
