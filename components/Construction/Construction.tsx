import React, { useRef, useEffect, useState } from 'react';
import { Box, Heading, Text, Hide, useColorMode, Flex } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { InfoText } from './InfoText';

const steps = [0, 1, 2];
const seconds = [4.5, 6.7, 8];

export const Construction = () => {
  const [currStep, setCurrStep] = useState(steps[0]);
  const [pauseSec, setPauseSec] = useState(seconds[currStep]);
  const [isShowInfoPoints, setIsShowInfoPoints] = useState(false);
  const [videoPadding, setVideoPadding] = useState(20);

  const { colorMode } = useColorMode();
  const { ref: inViewRef, inView: isVideoVisible } = useInView({ threshold: 0.5 });
  const videoRef = useRef<HTMLVideoElement & HTMLDivElement>(null);

  const cursorPointer = 'url(/images/cursor_pointer-green.png) 16 16, auto';

  const playVideo = () => {
    if (videoRef.current && videoRef.current.currentTime !== videoRef.current.duration) {
      videoRef.current && videoRef.current.play();
    }
  };

  const pause = () => {
    if (
      videoRef.current &&
      videoRef.current.currentTime >= pauseSec &&
      videoRef.current &&
      videoRef.current.currentTime < videoRef.current.duration
    ) {
      videoRef.current.pause();
      setCurrStep(currStep + 1);
    }

    if (videoRef.current && videoRef.current.currentTime === videoRef.current.duration) {
      setIsShowInfoPoints(true);
    }

    if (videoRef.current && videoRef.current.currentTime) {
      if (videoRef.current.currentTime < 4.6) {
        setVideoPadding(20);
      } else if (videoRef.current.currentTime >= 4.6 && videoRef.current.currentTime < 6.6) {
        setVideoPadding(0);
      } else {
        setVideoPadding(52);
      }
    }
  };

  useEffect(() => {
    setPauseSec(seconds[currStep]);
  }, [currStep]);

  useEffect(() => {
    if (isVideoVisible) {
      playVideo();
    } else {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        setCurrStep(steps[0]);
        setIsShowInfoPoints(false);
      }
    }
  }, [isVideoVisible]);

  return (
    <Box id="about_us" h={'100vh'}>
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
      <Flex h={'full'} position={'relative'} justifyContent={'center'} alignItems={'flex-start'}>
        <Box
          position={'absolute'}
          top={0}
          right={0}
          bottom={0}
          left={0}
          onClick={playVideo}
          zIndex={10}
          cursor={cursorPointer}
          ref={inViewRef}
        ></Box>
        <Box
          ref={videoRef}
          as="video"
          w={'full'}
          // maxH={'500px'}
          px={videoPadding}
          // pl={currStep === 0 ? '200px' : 0}
          objectFit={'fill'}
          onTimeUpdate={pause}
          src={colorMode === 'dark' ? '/images/full_dark.mp4' : '/images/full_white.mp4'}
        ></Box>
        {/* XL textboxes */}
        <Box display={isShowInfoPoints ? 'block' : 'none'}>
          <Box position="absolute" zIndex={20} top={'250px'} left={'350px'}>
            <InfoText textPositions={{ left: '-300px' }}>
              <Text
                w={{ lg: '220px' }}
                fontSize={{ base: '14px', lg: '12px' }}
                lineHeight={{ base: '18px', lg: '15px' }}
                fontWeight="500"
              >
                100% recyclable light weight, thermal and energy saving Foam composition structure allows each Eco
                Sandwich panel to be completely flexible in it’s specifications creating installation right from
                refrigeration systems to building envelopes.
                <br />
                <br />
                This provides buildings with extremely lower energy use on heating and cooling.
              </Text>
            </InfoText>
          </Box>
          <Box position="absolute" zIndex={20} top={'130px'} right={'370px'}>
            <InfoText textPositions={{ left: '50px', bottom: '30px' }}>
              <Text
                w={{ lg: '220px' }}
                fontSize={{ base: '14px', lg: '12px' }}
                lineHeight={{ base: '18px', lg: '15px' }}
                fontWeight="500"
              >
                Colour coded corrugated iron metal sheets that meet design standards to suit all climates strengths and
                durability these sheets come in a range of thickness starting from 0.3 to 0.7 millimetres in thickness.
              </Text>
            </InfoText>
          </Box>
          <Box position="absolute" zIndex={20} top={'410px'} right={'370px'}>
            <InfoText textPositions={{ right: '50px', top: '100px' }}>
              <Text
                w={{ lg: '220px' }}
                fontSize={{ base: '14px', lg: '12px' }}
                lineHeight={{ base: '18px', lg: '15px' }}
                fontWeight="500"
              >
                Quick and easy to install click and screw to each panel. The light weight metal sheets are typically
                flat and lightly grooved panels. This side can be colour coded to personal choice.
              </Text>
            </InfoText>
          </Box>
        </Box>
        {/* XL textboxes end*/}
      </Flex>
    </Box>
  );
};
