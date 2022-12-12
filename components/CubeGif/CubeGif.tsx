import { Image, ImageProps, useColorModeValue } from '@chakra-ui/react';

export const CubeGif = (props: ImageProps) => {
  const imgSrc = useColorModeValue('/images/light-1.gif', '/images/dark-1-2.gif');

  return <Image src={imgSrc} {...props} />;
};
