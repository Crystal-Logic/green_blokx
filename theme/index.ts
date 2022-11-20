import { extendTheme } from '@chakra-ui/react';

import { Fonts } from './fonts';

const font = '"Orbitron", sans-serif';
const brand = {
  black: '#000',
  white: '#fff',
  brandDark: '#2B2B2B',
  brandGreen: '#3AAE05',
};

export const theme = extendTheme({
  colors: { brand },
  fonts: {
    heading: font,
    body: font,
  },
});

export { Fonts };
