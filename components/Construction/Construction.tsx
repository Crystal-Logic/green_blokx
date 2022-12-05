import React, { useRef, useEffect, useState } from 'react';
import { Box, Heading, Text, Hide, useColorMode, Flex, useOutsideClick } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { InfoText } from './InfoText';
import { InfoTextMobile } from './InfoTextMobile';

const steps = [0, 1, 2];
const seconds = [4.5, 6.7, 8];

export const Construction = () => {
  const [currStep, setCurrStep] = useState(steps[0]);
  const [pauseSec, setPauseSec] = useState(seconds[currStep]);
  const [isShowInfoPoints, setIsShowInfoPoints] = useState(false);
  const [videoPadding, setVideoPadding] = useState('80px');
  const [showMobileBox, setShowMobileBox] = useState(0);

  const { colorMode } = useColorMode();
  const { ref: inViewRef, inView: isVideoVisible } = useInView({ threshold: 0.5 });
  const videoRef = useRef<HTMLVideoElement & HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const resetAnimation = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrStep(steps[0]);
      setIsShowInfoPoints(false);
      setShowMobileBox(0);
      setVideoPadding('90px');
      videoRef.current.pause();
    }
  };

  useOutsideClick({
    ref: videoContainerRef,
    enabled: true,
    handler: () => resetAnimation(),
  });

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

    // padding for timeframes
    if (videoRef.current && videoRef.current.currentTime) {
      if (videoRef.current.currentTime < 4.8) {
        setVideoPadding('90px');
      } else if (videoRef.current.currentTime >= 4.8 && videoRef.current.currentTime < 6.9) {
        setVideoPadding('0px');
      } else if (videoRef.current.currentTime >= 6.9) {
        setVideoPadding('220px');
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
      resetAnimation();
    }
  }, [isVideoVisible]);

  return (
    <Box id="about_us" h={{ lg: '100vh' }} minH={{ base: '480px', md: '600px' }}>
      <Box w={'full'} pl={{ base: 5, lg: 205 }} pt={{ base: 12, lg: 20 }}>
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
          pb={{ base: 8, lg: 10, xl: 5 }}
        >
          Tokenized{' '}
          <Text as={'span'} color="brand.green">
            Eco Panel
          </Text>{' '}
          Manufacturing
        </Text>
      </Box>
      <Flex
        ref={videoContainerRef}
        h={{ base: 'full', lg: 'unset' }}
        position={'relative'}
        justifyContent={'center'}
        alignItems={'flex-start'}
      >
        <Box
          position={'absolute'}
          top={0}
          right={0}
          bottom={0}
          left={0}
          onClick={playVideo}
          zIndex={10}
          ref={inViewRef}
          className={'custom_pointer-cursor'}
          h={'auto'}
        ></Box>
        <Box
          ref={videoRef}
          as="video"
          muted={true}
          w={'full'}
          maxH={{ base: '240px', lg: videoPadding === '0px' ? '710px' : 'unset' }}
          pb={{ lg: videoPadding === '0px' ? 20 : 'unset' }}
          px={{ base: videoPadding === '0px' ? 0 : 5, md: 12, lg: videoPadding || '90px' }}
          objectFit={'fill'}
          onTimeUpdate={pause}
          src={colorMode === 'dark' ? '/video/dark/full_dark.mp4' : '/video/white/full_white.mp4'}
        ></Box>
        {/* XL textboxes */}
        <Box display={{ base: 'none', lg: isShowInfoPoints ? 'block' : 'none' }}>
          <Box position="absolute" zIndex={20} top={{ lg: '150px', xl: '250px' }} left={{ lg: '310px' }}>
            <InfoText viewType={'left'} showPoints={isShowInfoPoints}>
              <Text
                w={{ lg: '200px' }}
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
          <Box position="absolute" zIndex={20} top={{ lg: '60px', xl: '130px' }} right={{ lg: '370px', xl: '390px' }}>
            <InfoText viewType={'right'} showPoints={isShowInfoPoints}>
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
          <Box position="absolute" zIndex={20} top={{ lg: '250px', xl: '430px' }} right={{ lg: '250px', xl: '370px' }}>
            <InfoText viewType={'bottom'} showPoints={isShowInfoPoints}>
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
        {/* SM textboxes */}
        <Box display={{ base: isShowInfoPoints ? 'block' : 'none', lg: 'none' }}>
          <Box
            position="absolute"
            zIndex={20}
            top={{ base: '90px', sm: '130px' }}
            left={{ base: '50px', sm: '80px' }}
            onClick={() => setShowMobileBox(1)}
          >
            <InfoTextMobile viewType={'left'} show={showMobileBox === 1}>
              <Text fontSize={{ base: '8px' }} lineHeight={{ base: '10px' }} fontWeight="500">
                100% recyclable light weight, thermal and energy saving Foam composition structure allows each Eco
                Sandwich panel to be completely flexible in it’s specifications creating installation right from
                refrigeration systems to building envelopes.
                <br />
                <br />
                This provides buildings with extremely lower energy use on heating and cooling.
              </Text>
            </InfoTextMobile>
          </Box>
          <Box
            position="absolute"
            zIndex={20}
            top={{ base: '30px', sm: '60px' }}
            right={{ base: '90px', sm: '130px' }}
            onClick={() => setShowMobileBox(2)}
          >
            <InfoTextMobile viewType={'right'} show={showMobileBox === 2}>
              <Text fontSize={{ base: '8px' }} lineHeight={{ base: '10px' }} fontWeight="500">
                Colour coded corrugated iron metal sheets that meet design standards to suit all climates strengths and
                durability these sheets come in a range of thickness starting from 0.3 to 0.7 millimetres in thickness.
              </Text>
            </InfoTextMobile>
          </Box>
          <Box
            position="absolute"
            zIndex={20}
            top={{ base: '135px', sm: '180px' }}
            right={{ base: '110px' }}
            onClick={() => setShowMobileBox(3)}
          >
            <InfoTextMobile viewType={'bottom'} show={showMobileBox === 3}>
              <Text fontSize={{ base: '8px' }} lineHeight={{ base: '10px' }} fontWeight="500">
                Quick and easy to install click and screw to each panel. The light weight metal sheets are typically
                flat and lightly grooved panels. This side can be colour coded to personal choice.
              </Text>
            </InfoTextMobile>
          </Box>
        </Box>
        {/* SM textboxes end */}
      </Flex>
    </Box>
  );
};
