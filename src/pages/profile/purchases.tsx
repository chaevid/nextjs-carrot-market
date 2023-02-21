import Item from 'components/item';
import Layout from 'components/layout';
import { NextPage } from 'next';

const Purchases: NextPage = () => {
  return (
    <Layout
      title="Purchases"
      canGoBack>
      <div className="flex flex-col space-y-4 divide-y">
        {[1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
            title={`${i} Purchase Item`}
            location={`Songpa-gu`}
            price={99}
            comments={0}
            hearts={0}></Item>
        ))}
      </div>
    </Layout>
  );
};

export default Purchases;
