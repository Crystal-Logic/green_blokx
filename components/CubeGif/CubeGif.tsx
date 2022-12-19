import { useColorModeValue } from '@chakra-ui/react';
import { ImageNext } from 'components/ImageNext';

export const CubeGif = (props: any) => {
  const imgSrc = useColorModeValue('/images/cube-light.gif', '/images/cube-dark.gif');

  return <ImageNext src={imgSrc} width={100} height={100} alt={'background cube'} {...props} />;
};
