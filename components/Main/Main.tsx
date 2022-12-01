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
  useColorModeValue,
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
  const { toggleColorMode, colorMode } = useColorMode();
  const { isOpen, onClose, onToggle } = useDisclosure();
  const bg = useColorModeValue('white', 'brand.dark');

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
                cursor="url(/images/cursor-red.png) 16 16, auto"
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
            </GridItem>
          </Grid>
        </Box>
      </Hide>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} variant={'menu'} size={{ base: 'xs', md: 'md' }}>
        <DrawerOverlay
          backgroundImage={'/images/backgroundMenu.png'}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        />
        <DrawerContent
          top={{ base: '130px !important', md: '0px !important' }}
          left={{ base: 0, md: '110px !important' }}
        >
          <DrawerBody>
            <Hide below="md">
              <Text py={'100px'} pl={'10px'} fontSize="30px" fontWeight="500">
                GreenBLOKX
              </Text>
            </Hide>
            <VStack
              alignItems="baseline"
              ml={{ base: '20px', md: '70px' }}
              mt={{ base: '20px', md: 0 }}
              align="center"
              spacing="25"
            >
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
                >
                  {text}
                </Text>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Box
        bg={`linear-gradient(0deg, rgba(43, 43, 43, 0.75), rgba(43, 43, 43, 0.75)), url(/images/background.png)`}
        flex={'1'}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Grid h="100%" templateRows="repeat(3, 1fr)" templateColumns="repeat(3, 1fr)" gap={0}>
          {/* mobile menu */}
          <Hide above="md">
            <GridItem h={'122px'} colSpan={3} rowSpan={1}>
              <Box
                h={'full'}
                w={'full'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                bg={isOpen ? bg : 'transparent'}
                px={'20px'}
              >
                <Image src="/images/logo.png" w={'53px'} h={'63px'} alt="logo" />
                <Text
                  cursor="url(/images/cursor-red.png) 16 16, auto"
                  fontWeight="400"
                  fontSize="20px"
                  lineHeight={'25px'}
                  color={isOpen ? 'unset' : 'white'}
                >
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
            </GridItem>
          </Hide>
          {/* mobile menu  end*/}

          <Hide below="md">
            <GridItem colSpan={3} rowSpan={1} display="flex" pt={'50px'} justifyContent={'flex-end'}>
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
