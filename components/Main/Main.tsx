import React, { useState, useRef, useEffect } from 'react';
import {
  Switch,
  Flex,
  Image,
  Text,
  Box,
  Hide,
  useColorMode,
  VStack,
  Button,
  FormLabel,
  useColorModeValue,
} from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { NavBar } from 'components/NavBar';
import { CubesBG } from './CubesBG';

export const Main = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isShowVideo, setIsShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: inViewRef, inView: isVideoVisible } = useInView({ threshold: 0.5 });

  const { toggleColorMode, colorMode } = useColorMode();
  const buttonColor = useColorModeValue('brand.dark', 'white');
  const playIcon = useColorModeValue('/images/play_icon-dark.svg', '/images/play_icon.svg');

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
      <Flex flex={'1'} direction={'column'} position={'relative'} backgroundSize="cover">
        <Box
          pt={{ base: '40px', lg: '50px' }}
          position={'relative'}
          zIndex={20}
          visibility={isShowVideo ? 'hidden' : 'initial'}
        >
          <NavBar onContactUs={onOpenModal} />
        </Box>

        <video
          ref={videoRef}
          style={{
            zIndex: 11,
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

        <Box zIndex={12} maxW={{ base: 'full', md: '90%', xl: '80%' }} pl={{ base: 5, md: 44 }}>
          <Button
            padding={0}
            onClick={toggleVideo}
            aria-label="Play video"
            variant={'outline'}
            colorScheme={isShowVideo ? 'white' : buttonColor}
            mb={{ base: '50px', lg: 16 }}
            w={{ base: '49px', lg: '67px' }}
            h={{ base: '49px', lg: '67px' }}
            borderColor={isShowVideo ? 'white' : buttonColor}
            borderRadius="none"
            border={'2px solid'}
            className={'custom_pointer-cursor'}
          >
            {!isShowVideo ? (
              <Image
                src={playIcon}
                alt={'play button'}
                w={{ base: '16px', md: '25px' }}
                h={{ base: '15px', md: '22px' }}
                className={'custom_pointer-cursor'}
              />
            ) : (
              <Box
                borderRadius="2px"
                w={{ base: '16px', md: '24px' }}
                h={{ base: '16px', md: '24px' }}
                bgColor="#fff"
                className={'custom_pointer-cursor'}
              />
            )}
          </Button>
          <Text
            fontSize={{ base: '32px', md: '60px' }}
            lineHeight={{ base: '40px', md: '75px' }}
            fontWeight="500"
            pb={{ base: 6, md: 8 }}
            visibility={isShowVideo ? 'hidden' : 'initial'}
          >
            The World`s first tokenized ECO factory
          </Text>
          <Text
            fontSize={{ base: '20px', md: '25px' }}
            lineHeight={{ base: '25px', md: '31px' }}
            fontWeight="900"
            visibility={isShowVideo ? 'hidden' : 'initial'}
          >
            BY&nbsp;
            <Text as={'span'} color="brand.green">
              GREENBLOKX
            </Text>
          </Text>
        </Box>

        <Hide above="lg">
          <VStack mx={5} mt={40} alignSelf={'end'} zIndex={10}>
            <Switch id="change-theme" onChange={toggleColorMode} isChecked={colorMode === 'dark'} size="lg" />
            <FormLabel htmlFor="change-theme">
              <Text fontSize="12px" lineHeight="15px" fontWeight="700" color={'white'}>
                {colorMode === 'dark' ? 'Light' : 'Dark'} mode
              </Text>
            </FormLabel>
          </VStack>
        </Hide>

        {/* Cubes layout */}
        <CubesBG display={!isShowVideo} />
      </Flex>
    </Flex>
  );
};
