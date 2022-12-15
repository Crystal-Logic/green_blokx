import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Lottie from 'react-lottie';
import * as animationData from 'public/animation/anim2.json';

export const Manufacture = () => {
  const bgColor = useColorModeValue('rgba(255, 255, 255, 0.3);', 'rgba(255, 255, 255, 0.03);');
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Flex direction={{ base: 'column', lg: 'row' }}>
      <Box w={{ lg: '52%' }} mb={{ base: 12, lg: 0 }} bg={bgColor}>
        {' '}
        <Text
          flex="1"
          fontSize={{ base: '20px', md: '25px' }}
          lineHeight={{ base: '25px', md: '31px' }}
          fontWeight="500"
          alignSelf={'center'}
          pl={{ base: 5, md: 100 }}
          pr={{ base: 5, md: 20 }}
          py={{ base: 16, md: 20 }}
        >
          GreenBLOKX is building the future of the sustainable building. With the assistance of Blockchain GreenBLOKX
          aims to tackle manufacturing’s primary problems. Audibility, accountability, and traceability.
        </Text>
      </Box>{' '}
      <Box
        h={{ base: '360px', md: 'auto' }}
        flex={{ lg: '1' }}
        w={'full'}
        boxShadow={'100px 100px 100px rgba(0, 0, 0, 0.15)'}
      >
        <Lottie
          options={defaultOptions}
          height={'inherit'}
          width={'auto'}
          // isStopped={this.state.isStopped}
          // isPaused={this.state.isPaused}
        />
      </Box>
    </Flex>
  );
};
