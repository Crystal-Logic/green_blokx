import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { ColorModeScript } from '@chakra-ui/react';
import { theme } from '../theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>GREENBLOKX</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="The World`s first tokenized ECO factory" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
