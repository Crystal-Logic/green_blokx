import { useColorModeValue, Image, ImageProps } from '@chakra-ui/react';

export const CubeGif = (props: ImageProps) => {
  const imgSrc = useColorModeValue('/images/cube_light.gif', '/images/cube_dark.gif');

  return <Image src={imgSrc} width={100} height={100} alt={'background cube'} {...props} />;
};
