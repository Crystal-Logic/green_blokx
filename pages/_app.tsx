import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { Layout } from 'components/Layout';
import { theme, Fonts } from '../theme';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
