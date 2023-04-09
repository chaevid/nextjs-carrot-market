import Layout from '@/components/layout';
import FloatingButton from '@/components/floating-button';
import Item from '@/components/item';
import '../lib/server/client';
import useUser from '@/lib/client/useUser';
import Head from 'next/head';
import useSWR from 'swr';
import { Product } from '@prisma/client';
import { NextPage } from 'next';

interface ProductsResponse {
  ok: boolean;
  products: Product[];
}

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  const { data } = useSWR<ProductsResponse>('/api/products');

  return (
    <Layout
      title="Home"
      hasBtmNav>
      <Head>
        <title>HOME</title>
      </Head>
      <div className=" flex flex-col space-y-4 divide-y">
        {data?.products?.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            title={product.name}
            location={`Songpa-gu`}
            price={product.price}
            comments={0}
            hearts={0}></Item>
        ))}
        <FloatingButton href="products/upload">
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </FloatingButton>
      </div>
    </Layout>
  );
};

export default Home;
