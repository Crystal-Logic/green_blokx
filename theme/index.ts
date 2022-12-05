import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';
import { Fonts } from './fonts';

const font = '"Orbitron", sans-serif';
const brand = {
  black: '#000',
  white: '#fff',
  dark: '#313131',
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
      '.custom_pointer-cursor': {
        cursor: 'url(/images/cursor_pointer-green.png) 16 16, auto',
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
          cursor: 'url(/images/cursor_pointer-green.png) 16 16, auto',
        },
        track: {
          bg: mode('white', 'brand.dark')(props),
          border: '1px solid',
          borderColor: 'brand.green',
          cursor: 'url(/images/cursor_pointer-green.png) 16 16, auto',
        },
        container: { cursor: 'url(/images/cursor_pointer-green.png) 16 16, auto' },
      }),
    },
    Button: {
      variants: {
        outlineGreen: {
          cursor: 'url(/images/cursor_pointer-green.png) 16 16, auto',
          flexDirection: 'column',
          alignItems: 'flex-end',
          color: 'brand.green',
          colorScheme: 'brand.green',
          borderRadius: 'none',
          borderWidth: '2px 2px 2px 0px',
          borderColor: 'brand.green',

          _hover: {
            color: 'brand.red',
            colorScheme: 'brand.red',
            borderColor: 'brand.red',
            bg: 'transparent',
          },
        },
      },
      sizes: {
        lg: {
          height: '135px',
          fontSize: '32px',
          lineHeight: '40px',
          fontWeight: '500',
          paddingY: 12,
          paddingRight: 20,
        },
        sm: {
          height: '82px',
          fontSize: '18px',
          lineHeight: '23px',
          fontWeight: '500',
          paddingY: 8,
          paddingRight: 8,
          borderWidth: '1px 1px 1px 0px',
        },
      },
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

export { Fonts };
