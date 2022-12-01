import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { Fonts } from './fonts';

const font = '"Orbitron", sans-serif';
const brand = {
  black: '#000',
  white: '#fff',
  dark: '#2B2B2B',
  green: '#3AAE05',
  red: '#D25757',
};

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const baseModalStyle = (props: any) =>
  definePartsStyle({
    dialog: {
      bg: mode('white', 'brand.dark')(props),
    },
  });

const baseDrawerStyle = (props: any) =>
  definePartsStyle({
    dialog: {
      bg: mode('white', 'brand.dark')(props),
    },
  });

const menuDrawerStyle = definePartsStyle({
  dialogContainer: {
    left: '100px',
    top: { base: '130px !important', lg: '0px !important' },
  },
  overlay: {
    left: '100px',
    top: { base: '130px !important', lg: '0px !important' },
  },
  dialog: {
    left: '100px',
    top: { base: '130px !important', lg: '0px !important' },
  },
});

export const theme = extendTheme({
  colors: { brand },
  fonts: {
    heading: font,
    body: font,
  },
  styles: {
    global: (props: any) => ({
      '*': {
        cursor: 'url(/images/cursor-green.png) 16 16, auto',
      },
      'html, body': {
        bg: mode('white', 'brand.dark')(props),
      },
    }),
  },
  components: {
    Select: {
      sizes: {
        lg: {
          field: {
            borderRadius: 'none',
          },
        },
      },
      defaultProps: {
        size: 'lg',
      },
    },
    Input: {
      sizes: {
        lg: {
          field: {
            borderRadius: 'none',
          },
        },
      },
      variants: {
        outline: {
          borderRadius: 0,
        },
      },
      defaultProps: {
        size: 'lg',
      },
    },
    Modal: {
      baseStyle: baseModalStyle,
    },
    Drawer: {
      baseStyle: baseDrawerStyle,
      variants: { menu: menuDrawerStyle },
    },
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
