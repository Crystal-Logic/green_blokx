import React from 'react';
import {
  Switch,
  Center,
  Flex,
  Grid,
  GridItem,
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

export const Main = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { isOpen, onClose, onToggle } = useDisclosure();

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
        <Box w={'100px'}>
          <Grid h="100%" w={100} templateRows="repeat(3, 1fr)" templateColumns="repeat(1, 1fr)" gap={0}>
            <GridItem colSpan={1} rowSpan={1}>
              <Center pt={'30px'} pr={'5px'} pl={'5px'}>
                <Image src="/images/logo.png" w={'65px'} h={'75px'} alt="logo" />
              </Center>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1} alignItems="center" justifyContent="center" display="flex" w="inherit">
              <Text
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
              >
                Contact us
              </Text>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1} alignItems="center" justifyContent="center" display="flex">
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
              />

              <Drawer isOpen={isOpen} placement="left" onClose={onClose} variant={'menu'} size={'md'}>
                <DrawerOverlay
                  backgroundImage={'/images/backgroundMenu.png'}
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                />
                <DrawerContent left={'110px !important'}>
                  <DrawerBody>
                    <Text py={'100px'} pl={'10px'} fontSize="30px" fontWeight="500">
                      GreenBLOKX
                    </Text>
                    <VStack alignItems="baseline" ml={'70px'} align="center" spacing="25">
                      {menuItems.map(({ text, href }, idx) => (
                        <Text
                          as={'button'}
                          key={idx}
                          fontSize="32px"
                          fontWeight="500"
                          lineHeight={'40px'}
                          _hover={{ color: 'brand.green' }}
                          onClick={() => navigateTo(href)}
                        >
                          {text}
                        </Text>
                      ))}
                    </VStack>
                  </DrawerBody>
                  <DrawerFooter></DrawerFooter>
                </DrawerContent>
              </Drawer>
            </GridItem>
          </Grid>
        </Box>
      </Hide>

      <Box
        bg={`linear-gradient(0deg, rgba(43, 43, 43, 0.75), rgba(43, 43, 43, 0.75)), url(/images/background.png)`}
        flex={'1'}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Grid h="100%" templateRows="repeat(3, 1fr)" templateColumns="repeat(3, 1fr)" gap={0}>
          <GridItem colSpan={1} rowSpan={1} display="flex"></GridItem>

          {/* <GridItem colSpan={1} rowSpan={1} pt={'50px'} justifyContent={'center'}>
            Contact
          </GridItem> */}
          <Hide below="md">
            <GridItem colSpan={1} rowSpan={1} display="flex" pt={'50px'} justifyContent={'center'}>
              <VStack mr={30}>
                <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark'} size="lg" />
                <Text fontSize="14px" lineHeight="25px" fontWeight="700" color={'white'}>
                  {colorMode === 'dark' ? 'Light' : 'Dark'} mode
                </Text>
              </VStack>
            </GridItem>
          </Hide>

          <GridItem colSpan={3} rowSpan={1}>
            <Text
              fontSize={{ base: '32px', md: '54px' }}
              lineHeight={{ base: '40px', md: '68px' }}
              fontWeight="500"
              color="white"
              pl={{ base: '20px', md: '105px' }}
              pb={{ base: '25px', md: '55px' }}
            >
              The World`s first tokenized{' '}
              <Hide below="md">
                <br />
              </Hide>{' '}
              ECO{' '}
              <Hide above="md">
                <br />
              </Hide>
              factory
            </Text>
            <Text
              fontSize={{ base: '20px', md: '25px' }}
              lineHeight={{ base: '25px', md: '31px' }}
              fontWeight="900"
              color="white"
              pl={{ base: '20px', md: '105px' }}
            >
              BY&nbsp;
              <Text as={'span'} color="brand.green">
                GREENBLOKX
              </Text>
            </Text>
          </GridItem>
          <Hide above="md">
            <GridItem
              colSpan={2}
              rowSpan={1}
              display="flex"
              pt={'50px'}
              justifyContent={'flex-start'}
              alignItems={'flex-end'}
            >
              <VStack mr={30} ml={'20px'} pb={'30px'}>
                <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark'} size="lg" />
                <Text fontSize="14px" lineHeight="25px" fontWeight="700" color={'white'}>
                  {colorMode === 'dark' ? 'Light' : 'Dark'} mode
                </Text>
              </VStack>
            </GridItem>
          </Hide>
        </Grid>
      </Box>
    </Flex>
  );
};
