import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { theme, Fonts } from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
