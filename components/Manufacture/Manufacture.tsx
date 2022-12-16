import React, { useRef, useEffect, useState } from 'react';
import { Box, Flex, Text, useColorModeValue, useOutsideClick } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';

const steps = [0, 1, 2];

export const Manufacture = () => {
  const videoSteps = ['/video/step1.mp4', '/video/step2.mp4', '/video/step3.mp4'];
  const [currStep, setCurrStep] = useState(steps[0]);
  const [isShowInfoArea, setIsShowInfoArea] = useState(false);

  const { ref: inViewRef, inView: isVideoVisible } = useInView({ threshold: 0.5 });
  const videoRef = useRef<HTMLVideoElement & HTMLDivElement>(null);
  const infoAreaRef = useRef<HTMLDivElement>(null);

  const bgColor = useColorModeValue('rgba(255, 255, 255, 0.3);', 'rgba(255, 255, 255, 0.03);');

  const resetAnimation = () => {
    if (videoRef.current) {
      setCurrStep(steps[0]);
      videoRef.current.currentTime = 0;
      videoRef.current.pause();
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
      videoRef.current.currentTime <= 1.5
    ) {
      videoRef.current.pause();
      setIsShowInfoArea(true);
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
      }
    },
  });

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
      </Box>
      <Box
        ref={inViewRef}
        h={{ base: '360px', md: 'auto' }}
        w={'full'}
        flex={{ lg: '1' }}
        boxShadow={'100px 100px 100px rgba(0, 0, 0, 0.15)'}
        position={'relative'}
        className={'custom_pointer-cursor'}
      >
        <Box
          ref={videoRef}
          as="video"
          muted={true}
          loop={currStep === 2}
          w={'full'}
          onClick={nextStep}
          onTimeUpdate={pause}
          src={videoSteps[currStep]}
        ></Box>
        <Box
          ref={infoAreaRef}
          display={isShowInfoArea ? 'block' : 'none'}
          position={'absolute'}
          top={0}
          right={0}
          bottom={0}
          left={0}
          zIndex={100}
          className={'custom_pointer-cursor'}
          h={'auto'}
        ></Box>
      </Box>
    </Flex>
  );
};
