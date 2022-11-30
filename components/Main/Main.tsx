import React from 'react';
import {
  Switch,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Select,
  Text,
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
    <Grid minH="100vh" templateRows="repeat(3, 1fr)" templateColumns="repeat(15, 1fr)" gap={0}>
      <GridItem colSpan={1} rowSpan={3} w={100}>
        <Grid h="100%" w={100} templateRows="repeat(3, 1fr)" templateColumns="repeat(1, 1fr)" gap={0}>
          <GridItem colSpan={1} rowSpan={1}>
            <Center pt={'30px'} pr={'5px'} pl={'5px'}>
              <Image src="/images/logo.png" width={'80px'} height={'92px'} alt="logo" />
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
      </GridItem>

      <GridItem
        bg={`linear-gradient(0deg, rgba(43, 43, 43, 0.75), rgba(43, 43, 43, 0.75)), url(/images/background.png)`}
        colSpan={14}
        rowSpan={3}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Grid h="100%" templateRows="repeat(3, 1fr)" templateColumns="repeat(3, 1fr)" gap={0}>
          <GridItem colSpan={1} rowSpan={1} display="flex"></GridItem>

          <GridItem colSpan={1} rowSpan={1} pt={'50px'} justifyContent={'center'}></GridItem>
          <GridItem colSpan={1} rowSpan={1} display="flex" pt={'50px'} justifyContent={'center'}>
            <VStack mr={30}>
              <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark'} size="lg" />
              <Text fontSize="14px" lineHeight="25px" fontWeight="700" color={'white'}>
                {colorMode === 'dark' ? 'Light' : 'Dark'} mode
              </Text>
            </VStack>
            {/* <Select size="xs" w={'60px'}>
              <option value="EN" selected>
                EN
              </option>
              <option value="RO">RO</option>
            </Select> */}
          </GridItem>

          <GridItem colSpan={3} rowSpan={1}>
            <Flex>
              <Text
                fontSize="54px"
                color="white"
                justifyContent="bottom"
                alignItems="bottom"
                display="flex"
                pl={'105px'}
                fontWeight="500"
              >
                The World`s first tokenized <br /> ECO factory
              </Text>
            </Flex>
            <Text
              fontSize="25px"
              justifyContent="bottom"
              alignItems="bottom"
              display="flex"
              pl={'105px'}
              color="white"
              fontWeight="900"
            >
              BY&nbsp;
              <Text as={'span'} color="brand.green" fontWeight="900">
                GREENBLOKX
              </Text>
            </Text>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};
