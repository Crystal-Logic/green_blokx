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
  useColorModeValue,
  keyframes,
} from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { NavBar } from '../NavBar';
import { CubeGif } from 'components/CubeGif/CubeGif';

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}
`;

export const Main = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isShowVideo, setIsShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: inViewRef, inView: isVideoVisible } = useInView({ threshold: 0.5 });

  const { toggleColorMode, colorMode } = useColorMode();
  const buttonColor = useColorModeValue('brand.dark', 'white');
  const playIcon = useColorModeValue('/images/play_icon-dark.svg', '/images/play_icon.svg');
  const pauseIcon = useColorModeValue('/images/pause_icon-dark.svg', '/images/pause_icon.svg');

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
            colorScheme={buttonColor}
            mb={{ base: '50px', lg: 16 }}
            w={{ base: '49px', lg: '67px' }}
            h={{ base: '49px', lg: '67px' }}
            borderColor={buttonColor}
            borderRadius="none"
            border={'2px solid'}
            className={'custom_pointer-cursor'}
          >
            {!isShowVideo ? (
              <Image
                src={playIcon}
                w={{ base: '16px', md: '25px' }}
                h={{ base: '15px', md: '22px' }}
                className={'custom_pointer-cursor'}
              ></Image>
            ) : (
              <Image
                src={pauseIcon}
                w={{ base: 'full', md: '35px' }}
                h={{ base: 'full', md: '32px' }}
                className={'custom_pointer-cursor'}
              ></Image>
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
          <VStack mx={5} mt={40} alignSelf={'end'} zIndex={10}>
            <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark'} size="lg" />
            <Text fontSize="12px" lineHeight="15px" fontWeight="700" color={'white'}>
              {colorMode === 'dark' ? 'Light' : 'Dark'} mode
            </Text>
          </VStack>
        </Hide>

        {/* Cubes layout */}
        <Box
          pos={'absolute'}
          top={0}
          bottom={0}
          right={0}
          left={0}
          overflowX={'hidden'}
          display={isShowVideo ? 'none' : 'block'}
        >
          <CubeGif
            w={'140px'}
            h={'140px'}
            position={'absolute'}
            left={'13%'}
            top={'10%'}
            transform="rotate(-15.89deg)"
          />
          <CubeGif
            w={'60px'}
            h={'60px'}
            position={'absolute'}
            left={'40px'}
            top={'135px'}
            transform="rotate(20.59deg)"
          />
          <CubeGif
            w={'100px'}
            h={'100px'}
            position={'absolute'}
            left={'50px'}
            top={'190px'}
            transform="rotate(-11.93deg)"
          />
          <CubeGif
            w={'120px'}
            h={'120px'}
            position={'absolute'}
            left={'80px'}
            top={'40%'}
            transform="rotate(21.31deg)"
          />
          <CubeGif
            w={'60px'}
            h={'60px'}
            position={'absolute'}
            left={'140px'}
            top={'72%'}
            transform="rotate(-11.66deg)"
          />
          <CubeGif
            w={'60px'}
            h={'60px'}
            position={'absolute'}
            left={'300px'}
            top={'68%'}
            transform="rotate(-17.84deg)"
          />
          <CubeGif
            w={'150px'}
            h={'150px'}
            position={'absolute'}
            left={'400px'}
            top={'72%'}
            transform="rotate(2.85deg)"
          />
          {/* right part */}
          <CubeGif w={'80px'} h={'80px'} position={'absolute'} left={'68%'} top={'8%'} transform="rotate(25.88deg)" />
          <CubeGif w={'60px'} h={'60px'} position={'absolute'} left={'77%'} top={'16%'} transform="rotate(8.41deg)" />
          <CubeGif w={'70px'} h={'70px'} position={'absolute'} left={'82%'} top={'26%'} transform="rotate(8.41deg)" />
          <CubeGif w={'150px'} h={'150px'} position={'absolute'} left={'87%'} top={'18%'} transform="rotate(8.63deg)" />
          <CubeGif
            w={'180px'}
            h={'180px'}
            position={'absolute'}
            left={'70%'}
            top={'30%'}
            transform="rotate(1.08deg)"
            animation={`${spin} 20s infinite linear`}
          />
          <CubeGif w={'70px'} h={'70px'} position={'absolute'} left={'92%'} top={'42%'} transform="rotate(8.41deg)" />
          <CubeGif
            w={'130px'}
            h={'130px'}
            position={'absolute'}
            left={'84%'}
            top={'50%'}
            transform="rotate(158.3deg)"
          />
          <CubeGif w={'100px'} h={'100px'} position={'absolute'} left={'72%'} top={'60%'} transform="rotate(8.41deg)" />
          <CubeGif
            w={'100px'}
            h={'100px'}
            position={'absolute'}
            left={'91%'}
            top={'65%'}
            transform="rotate(-11.93deg)"
          />
          <CubeGif
            w={'100px'}
            h={'100px'}
            position={'absolute'}
            left={'60%'}
            top={'80%'}
            transform="rotate(-5.03deg)"
          />
          <CubeGif
            w={'180px'}
            h={'180px'}
            position={'absolute'}
            left={'74%'}
            top={'74%'}
            transform="rotate(-10.59deg)"
          />
        </Box>
      </Flex>
    </Flex>
  );
};
