import NextImage from 'next/image';

import { chakra } from '@chakra-ui/react';

export const ImageNext = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ['width', 'height', 'src', 'alt', 'quality', 'placeholder', 'blurDataURL', 'loader '].includes(prop),
});
