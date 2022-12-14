import React, { useState, useRef, useEffect } from 'react';
import { Switch, Flex, Image, Text, Box, Hide, useColorMode, VStack, Button } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { NavBar } from '../NavBar';

export const Main = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isShowVideo, setIsShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: inViewRef, inView: isVideoVisible } = useInView({ threshold: 0.5 });

  const { toggleColorMode, colorMode } = useColorMode();

  const playVideo = () => {
    videoRef.current && videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current && videoRef.current.pause();
  };

  const stopAndResetVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const toggleVideo = () => {
    if (isShowVideo) {
      setIsShowVideo(false);
      stopAndResetVideo();
    } else {
      setIsShowVideo(true);
      playVideo();
    }
  };

  useEffect(() => {
    if (isShowVideo) {
      if (isVideoVisible) {
        playVideo();
      } else {
        pauseVideo();
      }
    }
  }, [isVideoVisible]);

  return (
    <Flex minH="100vh" w={'full'} ref={inViewRef}>
      <Flex
        flex={'1'}
        direction={'column'}
        justifyContent={{ base: 'space-between' }}
        position={'relative'}
        backgroundSize="cover"
      >
        <Box pt={{ base: '50px' }}>
          <NavBar />
        </Box>
        <video
          ref={videoRef}
          style={{
            objectFit: 'cover',
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            display: isShowVideo ? 'block' : 'none',
          }}
          className="videoTag"
        >
          <source src={'/video/GreenBlokX_bg.mp4'} type="video/mp4" />
        </video>

        <Box maxW={{ base: 'full', md: '90%', xl: '80%' }} pl={{ base: 5, md: 44 }} zIndex={10}>
          <Button
            onClick={toggleVideo}
            variant={'outline'}
            colorScheme={'white'}
            mb={16}
            w={'67px'}
            h={'67px'}
            borderColor={'white'}
            borderRadius="none"
            border={'2px solid'}
            className={'custom_pointer-cursor'}
          >
            {!isShowVideo ? (
              <Image src="/images/play_icon.png" w={'25px'} h={'22px'} className={'custom_pointer-cursor'}></Image>
            ) : (
              <Image src="/images/pause_icon.png" w={'25px'} h={'22px'} className={'custom_pointer-cursor'}></Image>
            )}
          </Button>
          <Text
            fontSize={{ base: '32px', md: '60px' }}
            lineHeight={{ base: '40px', md: '75px' }}
            fontWeight="500"
            pb={{ base: 6, md: 8 }}
          >
            The World`s first tokenized ECO factory
          </Text>
          <Text fontSize={{ base: '20px', md: '25px' }} lineHeight={{ base: '25px', md: '31px' }} fontWeight="900">
            BY&nbsp;
            <Text as={'span'} color="brand.green">
              GREENBLOKX
            </Text>
          </Text>
        </Box>

        <Hide above="lg">
          <VStack ml={5} pb={10} alignSelf={'flex-start'} zIndex={10}>
            <Text fontSize="12px" lineHeight="15px" fontWeight="700" color={'white'}>
              {colorMode === 'dark' ? 'Light' : 'Dark'} mode
            </Text>
            <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark'} size="lg" />
          </VStack>
        </Hide>

        <Flex
          maxW={{ base: 'full', md: '90%', xl: '70%' }}
          flex={'1'}
          pl={{ base: 5, md: 44 }}
          pb={{ base: '50px' }}
          zIndex={10}
        >
          <Text
            alignSelf={'end'}
            fontSize={{ base: '20px', md: '50px' }}
            lineHeight={{ base: '25px', md: '63px' }}
            fontWeight="600"
          >
            <Text as={'span'} color="brand.green">
              Wny&nbsp;
            </Text>
            Greenblokx?
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
