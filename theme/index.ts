import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

import { Fonts } from './fonts';

const font = '"Orbitron", sans-serif';
const brand = {
  black: '#000',
  white: '#fff',
  dark: '#2B2B2B',
  green: '#3AAE05',
};

export const theme = extendTheme({
  colors: { brand },
  fonts: {
    heading: font,
    body: font,
  },
  components: {
    Switch: {
      baseStyle: (props: any) => ({
        thumb: {
          bg: mode('brand.green', 'white')(props),
        },
        track: {
          bg: mode('white', 'brand.dark')(props),
          border: '1px solid',
          borderColor: 'brand.green',
        },
      }),
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

export { Fonts };
