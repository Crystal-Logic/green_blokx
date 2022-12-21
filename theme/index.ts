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

const gradientDark =
  'linear-gradient(356.36deg, #2B2B2B 5.41%, rgba(56, 56, 56, 0.58) 15.45%, #2E2E2E 24.02%, rgba(58, 58, 58, 0.77) 32.78%, #2E2E2E 43.79%, rgba(43, 43, 43, 0.51) 55.28%, #111111 77.16%, rgba(53, 53, 53, 0.81) 90.36%);';

const gradientLight =
  'linear-gradient(356.37deg, #FFFFFF -1.8%, #FFFFFF -1.8%, rgba(58, 174, 5, 0.44) 3.91%, #FFFFFF 7.73%, #FFFFFF 29.05%, rgba(58, 174, 5, 0.4) 35.48%, #FFFFFF 45.57%, #FFFFFF 60.13%, rgba(58, 174, 5, 0.17) 67.08%, #FFFFFF 90.33%);';

const cursorPointer = 'url(/images/cursor_pointer-green.png) 10 10, auto';

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
        bg: mode(gradientLight, `white ${gradientDark}`)(props),
      },
      '.custom_pointer-cursor': {
        cursor: cursorPointer,
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
          cursor: cursorPointer,
        },
        track: {
          bg: mode('white', 'brand.dark')(props),
          border: '1px solid',
          borderColor: 'brand.green',
          cursor: cursorPointer,
        },
        container: { cursor: cursorPointer },
      }),
    },
    Button: {
      baseStyle: { cursor: cursorPointer },
      variants: {
        outlineGreen: {
          cursor: cursorPointer,
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
    initialColorMode: 'white',
    useSystemColorMode: false,
  },
});

export { Fonts };
