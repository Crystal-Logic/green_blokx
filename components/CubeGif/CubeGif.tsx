import { useColorModeValue, Image, ImageProps } from '@chakra-ui/react';

export const CubeGif = (props: ImageProps) => {
  const imgSrc = useColorModeValue('/images/light4.gif', '/images/dark4.gif');

  return <Image src={imgSrc} width={100} height={100} alt={'background cube'} {...props} />;
};
