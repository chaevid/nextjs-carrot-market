import Item from 'components/item';
import Layout from 'components/layout';
import { NextPage } from 'next';

const Sold: NextPage = () => {
  return (
    <Layout
      title="Sold"
      canGoBack>
      <div className="flex flex-col space-y-4 divide-y">
        {[1, 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
            title={`${i} Sold Item`}
            location={`Songpa-gu`}
            price={99}
            comments={0}
            hearts={0}></Item>
        ))}
      </div>
    </Layout>
  );
};

export default Sold;
