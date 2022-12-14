import React from 'react';
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
} from '@chakra-ui/react';
import { Navigation } from './Navigation';

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex justifyContent="space-between" alignItems="center" px={{ base: '20px', xl: '128px' }} mb="80px" zIndex="1000">
      <Image src="/images/logo.png" alt="logo" w={{ base: '53px', md: '65px' }} />
      <Hide above="lg">
        <Box onClick={onOpen}>
          <Image src="/images/drawer_off.svg" alt="drawer_off" />
        </Box>
      </Hide>

      <Drawer onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Flex justifyContent="space-between" alignItems="center" mb="60px">
              <Image src="/images/logo.png" alt="logo" w={{ base: '53px', md: '65px' }} />
              <Box onClick={onClose}>
                <Image src="/images/drawer_on.svg" alt="drawer_on" />
              </Box>
            </Flex>
          </DrawerHeader>
          <DrawerBody bg="transparent">
            <Navigation isDrawerActive />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Hide below="lg">
        <Navigation isDrawerActive={false} />
      </Hide>

      <Hide below="lg">
        <VStack>
          <Switch onChange={toggleColorMode} isChecked={colorMode === 'dark'} size="lg" />
          <Text fontSize="14px" lineHeight="25px" fontWeight="700">
            {colorMode === 'dark' ? 'Light' : 'Dark'} mode
          </Text>
        </VStack>
      </Hide>
    </Flex>
  );
};
