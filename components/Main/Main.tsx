import React, { useState, useRef } from 'react';
import {
  Switch,
  Center,
  Flex,
  Image,
  Text,
  Box,
  Hide,
  useColorMode,
  VStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Link,
  HStack,
  Button,
} from '@chakra-ui/react';

const menuItems = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About Us',
    href: 'about_us',
  },
  {
    text: 'Technology',
    href: 'technology',
  },
  {
    text: 'Why blockchain?',
    href: 'why_blockchain',
  },
  {
    text: 'Our Team',
    href: 'team',
  },
  {
    text: 'Partners',
    href: 'partners',
  },
];

export const Main = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [isShowVideo, setIsShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { toggleColorMode, colorMode } = useColorMode();
  const { isOpen, onClose, onToggle } = useDisclosure();
  const bg = useColorModeValue('white', 'brand.dark');
  const gradientStyle = useColorModeValue(
    'linear-gradient(0deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01))',
    'linear-gradient(0deg, rgba(43, 43, 43, 0.75), rgba(43, 43, 43, 0.75))',
  );

  const cursorPointer = 'url(/images/cursor_pointer-green.png) 16 16, auto';

  const playVideo = () => {
    videoRef.current && videoRef.current.play();
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

  const scroll2El = (elID: string) => {
    const element = document.getElementById(elID);
    element && element.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateTo = (id: string) => {
    onClose();
    setTimeout(() => {
      scroll2El(id);
    }, 100);
  };

  const toggleMenu = () => {
    if (!isOpen) {
      window.scrollTo(0, 0);
    }
    onToggle();
  };

  return (
    <Flex minH="100vh" w={'full'}>
      <Hide below="md">
        <Flex w={'100px'} direction={'column'} justifyContent={'space-between'} alignItems={'center'} py={20}>
          <Image src="/images/logo.png" w={'65px'} h={'75px'} alt="logo" />
          <Text
            onClick={onOpenModal}
            sx={{
              transform: 'rotate(271deg)',
              lineHeight: '25px',
              whiteSpace: 'nowrap',
            }}
            fontWeight="400"
            fontSize="20px"
            _hover={{
              color: 'brand.red',
            }}
            cursor={cursorPointer}
          >
            Contact us
          </Text>
          <Center
            onClick={toggleMenu}
            as={'button'}
            width={35}
            height={35}
            backgroundImage={isOpen ? '/images/green_button2.png' : '/images/green_button1.png'}
            backgroundSize="cover"
            _hover={{
              backgroundImage: isOpen ? '/images/red_button2.png' : '/images/red_button.png',
            }}
            cursor={cursorPointer}
          />
        </Flex>
      </Hide>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        variant={'menu'}
        size={{ base: 'xs', md: 'md', xl: 'lg' }}
      >
        <DrawerOverlay
          backgroundImage={'/images/backgroundMenu.webp'}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        />
        <DrawerContent
          top={{ base: '130px !important', lg: '0px !important' }}
          left={{ base: 0, lg: '110px !important' }}
        >
          <DrawerBody>
            <Hide below="lg">
              <Flex justifyContent={'space-between'} pr={10}>
                <Text py={'100px'} fontSize="30px" fontWeight="500">
                  GreenBLOKX
                </Text>
                <HStack>
                  <Link href={'https://twitter.com/greenblokx'} isExternal>
                    <Image
                      src="/images/twitter_logo.png"
                      alt="twitter logo"
                      h={'44px'}
                      w={'44px'}
                      cursor={cursorPointer}
                    />
                  </Link>
                  <Link href={'https://medium.com/@greenblokx'} isExternal pl={3}>
                    <Image
                      src="/images/medium_logo.png"
                      alt="medium logo"
                      h={'44px'}
                      w={'44px'}
                      cursor={cursorPointer}
                    />
                  </Link>
                </HStack>
              </Flex>
            </Hide>
            <VStack alignItems="baseline" ml={{ base: 5, lg: 16 }} mt={{ base: 5, lg: 0 }} align="center" spacing="25">
              {menuItems.map(({ text, href }, idx) => (
                <Text
                  as={'button'}
                  key={idx}
                  fontSize={{ base: '28px', md: '32px' }}
                  lineHeight={{ base: '35px', md: '40px' }}
                  fontWeight="500"
                  textAlign={'left'}
                  _hover={{ color: 'brand.green' }}
                  onClick={() => navigateTo(href)}
                  cursor={cursorPointer}
                >
                  {text}
                </Text>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Flex
        flex={'1'}
        direction={'column'}
        justifyContent={{ base: 'space-between', lg: 'center' }}
        position={'relative'}
        bg={`${gradientStyle}, url(/images/background.webp)`}
        backgroundSize="cover"
      >
        <video
          ref={videoRef}
          style={{ objectFit: 'cover', height: '100vh', position: 'absolute', zIndex: isShowVideo ? 1 : -1 }}
          className="videoTag"
          poster="/images/background.webp"
        >
          <source src={'/images/GreenBlokX_bg.mp4'} type="video/mp4" />
        </video>

        {/* mobile menu */}
        <Hide above="lg">
          <Box
            h={120}
            w={'full'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            bg={isOpen ? bg : 'transparent'}
            px={5}
          >
            <Image src="/images/logo.png" w={'53px'} h={'63px'} alt="logo" />
            <Text fontWeight="400" fontSize="20px" lineHeight={'25px'} color={isOpen ? 'unset' : 'white'}>
              Contact us
            </Text>
            <Box
              onClick={toggleMenu}
              as={'button'}
              width={35}
              height={35}
              backgroundImage={isOpen ? '/images/green_button2.png' : '/images/green_button1.png'}
              backgroundSize="cover"
            />
          </Box>
        </Hide>
        {/* mobile menu  end*/}

        <Hide below="md">
          <VStack position={'absolute'} top={24} right={44} zIndex={10}>
            <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark'} size="lg" cursor={cursorPointer} />
            <Text fontSize="14px" lineHeight="25px" fontWeight="700" color={'white'}>
              {colorMode === 'dark' ? 'Light' : 'Dark'} mode
            </Text>
          </VStack>
        </Hide>

        <Hide below="md">
          <HStack position={'absolute'} bottom={20} right={32} zIndex={10}>
            <Link href={'https://twitter.com/greenblokx'} isExternal>
              <Image src="/images/twitter_logo.png" alt="twitter logo" h={'44px'} w={'44px'} cursor={cursorPointer} />
            </Link>
            <Link href={'https://medium.com/@greenblokx'} isExternal pl={3}>
              <Image src="/images/medium_logo.png" alt="medium logo" h={'44px'} w={'44px'} cursor={cursorPointer} />
            </Link>
          </HStack>
        </Hide>

        <Box maxW={{ base: 'full', lg: 900, xl: 950 }} pl={{ base: 5, md: 100 }} zIndex={10}>
          <Button
            onClick={toggleVideo}
            variant={'outline'}
            colorScheme={'white'}
            mb={20}
            w={'67px'}
            h={'67px'}
            borderRadius="none"
            border={'2px solid'}
            cursor={cursorPointer}
          >
            <Image src="/images/play_icon.png" w={'25px'} h={'22px'} cursor={cursorPointer}></Image>
          </Button>
          <Text
            fontSize={{ base: '32px', md: '54px' }}
            lineHeight={{ base: '40px', md: '68px' }}
            fontWeight="500"
            color="white"
            pb={{ base: 6, md: 55 }}
          >
            The World`s first tokenized ECO factory
          </Text>
          <Text
            fontSize={{ base: '20px', md: '25px' }}
            lineHeight={{ base: '25px', md: '31px' }}
            fontWeight="900"
            color="white"
          >
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
      </Flex>
    </Flex>
  );
};
