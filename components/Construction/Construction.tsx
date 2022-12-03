import React, { useRef } from 'react';
import { Box, Heading, Text, Hide, useColorMode } from '@chakra-ui/react';

export const Construction = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { colorMode } = useColorMode();

  const cursorPointer = 'url(/images/cursor_pointer-green.png) 16 16, auto';

  const playVideo = () => {
    videoRef.current && videoRef.current.play();
  };

  return (
    <Box id="about_us">
      <Box w={'full'} pl={{ base: 5, lg: 205 }} pt={{ base: 12, lg: 24 }}>
        <Hide below="xl">
          <Heading
            as="h2"
            fontSize={{ base: '25px', md: '32px' }}
            lineHeight={{ base: '31px', md: '40px' }}
            fontWeight="800"
            pb={{ base: 5, xl: 0 }}
            display={'flex'}
            w={'full'}
          >
            <Text as={'span'} w={{ base: 'full', xl: 'auto' }}>
              Intelligent{' '}
              <Hide above="md">
                <br />
              </Hide>
              Construction Design&nbsp;
            </Text>
            for a
            <Text
              as={'span'}
              color="brand.green"
              flex={'1'}
              ml={{ base: 2 }}
              borderBottom={'3px solid'}
              borderColor={'brand.green'}
            >
              Greener Future
            </Text>
          </Heading>
        </Hide>
        <Box display={{ base: 'none', md: 'block', xl: 'none' }}>
          <Heading
            as="h2"
            fontSize={{ base: '25px', md: '32px' }}
            lineHeight={{ base: '31px', md: '40px' }}
            fontWeight="800"
            pb={{ base: 5, xl: 0 }}
            display={'flex'}
            flexDirection={'column'}
            w={'full'}
          >
            <Text as={'span'} w={{ base: 'full', xl: 'auto' }}>
              Intelligent{' '}
              <Hide above="md">
                <br />
              </Hide>
              Construction Design&nbsp;
            </Text>
            <Text as={'span'} w={'full'} display={'flex'}>
              for a
              <Text
                as={'span'}
                color="brand.green"
                flex={'1'}
                ml={{ base: 2 }}
                borderBottom={'3px solid'}
                borderColor={'brand.green'}
              >
                Greener Future
              </Text>
            </Text>
          </Heading>
        </Box>
        <Hide above="sm">
          <Heading
            as="h2"
            fontSize={{ base: '25px', md: '32px' }}
            lineHeight={{ base: '31px', md: '40px' }}
            fontWeight="800"
            pb={{ base: 5, xl: 0 }}
            display={'flex'}
            flexDirection={'column'}
            w={'full'}
          >
            <Text as={'span'} w={{ base: 'full', xl: 'auto' }}>
              Intelligent <br />
              Construction Design&nbsp;
            </Text>
            <Text as={'span'} w={'full'} display={'flex'}>
              for a
              <Text
                as={'span'}
                color="brand.green"
                flex={'1'}
                ml={{ base: 2 }}
                borderBottom={'3px solid'}
                borderColor={'brand.green'}
              >
                Greener Future
              </Text>
            </Text>
          </Heading>
        </Hide>
        <Text
          fontSize={{ base: '14px', md: '22px' }}
          lineHeight={{ base: '18px', md: '28px' }}
          fontWeight="500"
          pb={{ base: 10 }}
        >
          Tokenized{' '}
          <Text as={'span'} color="brand.green">
            Eco Panel
          </Text>{' '}
          Manufacturing
        </Text>
      </Box>
      <Box position={'relative'}>
        <Box
          position={'absolute'}
          top={0}
          right={0}
          bottom={0}
          left={0}
          onClick={playVideo}
          zIndex={10}
          cursor={cursorPointer}
        ></Box>
        <video
          ref={videoRef}
          src={colorMode === 'dark' ? '/images/Full_Animation_Black.mp4' : '/images/Full_Animation_White.mp4'}
        ></video>
      </Box>
    </Box>
  );
};
