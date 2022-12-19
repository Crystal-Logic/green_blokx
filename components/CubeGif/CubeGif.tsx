import { useColorModeValue, Image, ImageProps } from '@chakra-ui/react';

export const CubeGif = (props: ImageProps) => {
  const imgSrc = useColorModeValue('/images/cube-light.gif', '/images/cube-dark.gif');

  return <Image src={imgSrc} width={100} height={100} alt={'background cube'} {...props} />;
};
