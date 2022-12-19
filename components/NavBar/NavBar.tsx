import React from 'react';
import NextLink from 'next/link';
import {
  Switch,
  Flex,
  Image,
  Text,
  Hide,
  useColorMode,
  VStack,
  useDisclosure,
  DrawerOverlay,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Box,
  Link,
  FormLabel,
} from '@chakra-ui/react';
import { Navigation } from './Navigation';

const drawerBG =
  'white linear-gradient(356.36deg, #696969 -1.46%, rgba(30, 30, 30, 0.81) -1.44%, #2E2E2E 19.68%, rgba(17, 17, 17, 0.97) 66.71%, rgba(53, 53, 53, 0.79) 89.43%);';

export const NavBar = ({ onContactUs }: { onContactUs: () => void }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex justifyContent="space-between" alignItems="center" px={{ base: '20px', xl: '128px' }} mb="80px" zIndex="1000">
      <Link as={NextLink} href="/">
        <Image src="/images/logo.png" alt="logo" w={{ base: '53px', md: '65px' }} className={'custom_pointer-cursor'} />
      </Link>
      <Hide above="lg">
        <Box onClick={onOpen}>
          <Image src="/images/drawer_off.svg" alt="drawer_off" />
        </Box>
      </Hide>

      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent bg={drawerBG}>
          <DrawerHeader>
            <Flex justifyContent="space-between" alignItems="center" mb="60px">
              <Link as={NextLink} href="/">
                <Image src="/images/logo.png" alt="logo" w={{ base: '53px', md: '65px' }} />
              </Link>
              <Box onClick={onClose}>
                <Image src="/images/drawer_on.svg" alt="drawer_on" />
              </Box>
            </Flex>
          </DrawerHeader>
          <DrawerBody bg="transparent">
            <Navigation isDrawerActive contactUs={onContactUs} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Hide below="lg">
        <Navigation isDrawerActive={false} contactUs={onContactUs} />
      </Hide>

      <Hide below="lg">
        <VStack>
          <Switch id="change-theme" onChange={toggleColorMode} isChecked={colorMode === 'dark'} size="lg" />
          <FormLabel htmlFor="change-theme">
            <Text fontSize="14px" lineHeight="25px" fontWeight="700">
              {colorMode === 'dark' ? 'Light' : 'Dark'} mode
            </Text>
          </FormLabel>
        </VStack>
      </Hide>
    </Flex>
  );
};
