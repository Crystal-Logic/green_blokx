import React, { useRef, useEffect, useState } from 'react';
import { Box, Flex, Text, useColorModeValue, useOutsideClick, useColorMode } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import { InfoText } from './InfoText';

const steps = [0, 1, 2];
const videoSteps = ['step1.mp4', 'step2.mp4', 'step3.mp4'];

export const Manufacture = () => {
  const [currStep, setCurrStep] = useState(steps[0]);
  const [isShowInfoArea, setIsShowInfoArea] = useState(false);
  const [showMobileBox, setShowMobileBox] = useState(0);
  const [isShowInfoPoints, setIsShowInfoPoints] = useState(false);

  const { ref: inViewRef, inView: isVideoVisible } = useInView({ threshold: 0.5 });
  const videoRef = useRef<HTMLVideoElement & HTMLDivElement>(null);
  const infoAreaRef = useRef<HTMLDivElement>(null);

  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue('rgba(255, 255, 255, 0.3);', 'rgba(255, 255, 255, 0.03);');
  const videoBoxShadow = useColorModeValue('rgba(241, 248, 237, 0.9)', 'rgba(43, 43, 43, 1)');

  const resetAnimation = () => {
    if (videoRef.current) {
      setCurrStep(steps[0]);
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
      setShowMobileBox(0);
      setIsShowInfoPoints(false);
      setIsShowInfoArea(false);
    }
  };

  const playVideo = () => {
    if (videoRef.current && videoRef.current.currentTime !== videoRef.current.duration) {
      videoRef.current && videoRef.current.play();
    }
  };

  const pause = () => {
    if (
      currStep === 1 &&
      videoRef.current &&
      videoRef.current.currentTime > 0.98 &&
      videoRef.current.currentTime <= 1.4
    ) {
      videoRef.current.pause();
      videoRef.current.currentTime = 1.4;
      setIsShowInfoArea(true);
      setIsShowInfoPoints(true);
    } else if (currStep === 1 && videoRef.current && videoRef.current.currentTime === videoRef.current.duration) {
      nextStep();
    }
  };

  const nextStep = () => {
    if (videoRef.current) {
      setCurrStep(currStep + 1);
    }
  };

  useEffect(() => {
    if (currStep) {
      playVideo();
    }
  }, [currStep]);

  useEffect(() => {
    if (isVideoVisible) {
      playVideo();
    } else {
      resetAnimation();
    }
  }, [isVideoVisible]);

  useOutsideClick({
    ref: infoAreaRef,
    enabled: true,
    handler: () => {
      if (isShowInfoArea && currStep === 1) {
        playVideo();
        setIsShowInfoPoints(false);
      }
    },
  });

  return (
    <Box>
      <Flex
        maxW={{ base: 'full', md: '90%', xl: '70%' }}
        flex={'1'}
        pl={{ base: 5, md: 24 }}
        pb={{ base: 5, lg: '50px' }}
        zIndex={10}
      >
        <Text
          alignSelf={'end'}
          fontSize={{ base: '28px', md: '50px' }}
          lineHeight={{ base: '35px', md: '63px' }}
          fontWeight="600"
          pos={'relative'}
          zIndex={20}
        >
          <Text as={'span'} color="brand.green">
            Why&nbsp;
          </Text>
          Greenblokx?
        </Text>
      </Flex>

      <Flex direction={{ base: 'column', lg: 'row' }}>
        <Box w={{ lg: '52%' }} mb={{ base: 12, lg: 0 }} bg={bgColor} pos={'relative'} zIndex={20}>
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
        </Box>
        <Box
          ref={inViewRef}
          h={{ base: '360px', md: 'auto' }}
          w={'full'}
          flex={{ lg: '1' }}
          boxShadow={{ base: `0px -300px 300px 100px ${videoBoxShadow}`, md: `0px 0px 300px 100px ${videoBoxShadow}` }}
          position={'relative'}
        >
          <Box pos={'relative'} height={'min-content'}>
            <Box
              ref={videoRef}
              as="video"
              muted={true}
              loop={currStep === 2}
              w={'full'}
              onClick={nextStep}
              onTimeUpdate={pause}
              className={'custom_pointer-cursor'}
              src={
                colorMode === 'dark' ? `/video/dark/${videoSteps[currStep]}` : `/video/white/${videoSteps[currStep]}`
              }
            ></Box>
            <Box
              ref={infoAreaRef}
              display={isShowInfoArea ? 'block' : 'none'}
              position={'absolute'}
              top={0}
              right={0}
              bottom={0}
              left={0}
              zIndex={50}
              h={'auto'}
            >
              {/* SM textboxes */}
              <Box display={{ base: isShowInfoPoints ? 'block' : 'none' }}>
                <Box
                  position="absolute"
                  zIndex={100}
                  top={{ base: '100px', sm: '170px' }}
                  right={{ base: '140px', sm: '260px' }}
                  onClick={() => setShowMobileBox(1)}
                >
                  <InfoText viewType={'right'} show={showMobileBox === 1}>
                    <Text fontSize={{ base: '8px' }} lineHeight={{ base: '10px' }} fontWeight="500">
                      100% recyclable light weight, thermal and energy saving Foam composition structure allows each Eco
                      Sandwich panel to be completely flexible in it’s specifications creating installation right from
                      refrigeration systems to building envelopes.
                      <br />
                      <br />
                      This provides buildings with extremely lower energy use on heating and cooling.
                    </Text>
                  </InfoText>
                </Box>
                <Box
                  position="absolute"
                  zIndex={100}
                  top={{ base: '80px', sm: '145px' }}
                  right={{ base: '150px', sm: '310px' }}
                  onClick={() => setShowMobileBox(2)}
                >
                  <InfoText viewType={'left'} show={showMobileBox === 2}>
                    <Text fontSize={{ base: '8px' }} lineHeight={{ base: '10px' }} fontWeight="500">
                      Colour coded corrugated iron metal sheets that meet design standards to suit all climates
                      strengths and durability these sheets come in a range of thickness starting from 0.3 to 0.7
                      millimetres in thickness.
                    </Text>
                  </InfoText>
                </Box>
                <Box
                  position="absolute"
                  zIndex={100}
                  top={{ base: '120px', sm: '195px' }}
                  right={{ base: '160px', sm: '275px' }}
                  onClick={() => setShowMobileBox(3)}
                >
                  <InfoText viewType={'bottom'} show={showMobileBox === 3}>
                    <Text fontSize={{ base: '8px' }} lineHeight={{ base: '10px' }} fontWeight="500">
                      Quick and easy to install click and screw to each panel. The light weight metal sheets are
                      typically flat and lightly grooved panels. This side can be colour coded to personal choice.
                    </Text>
                  </InfoText>
                </Box>
              </Box>
              {/* SM textboxes end */}
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
