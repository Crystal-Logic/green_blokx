import { extendTheme } from '@chakra-ui/react';

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
});

export { Fonts };
