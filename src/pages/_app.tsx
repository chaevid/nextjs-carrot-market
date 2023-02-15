import '@/styles/globals.css';
import Layout from 'components/layout';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto w-full max-w-lg">
      <Component {...pageProps} />
    </div>
  );
}
