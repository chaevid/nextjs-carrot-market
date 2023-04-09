import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        // refreshInterval: 2000, // 2 seconds
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
      }}>
      <div className="mx-auto w-full max-w-3xl">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  );
}
