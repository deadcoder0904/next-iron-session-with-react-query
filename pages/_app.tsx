import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import fetchJson from 'lib/fetchJson';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
