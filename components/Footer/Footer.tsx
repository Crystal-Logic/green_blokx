import { Flex, Text, Image, useColorModeValue } from '@chakra-ui/react';

export const Footer = () => {
  const bg = useColorModeValue('brand.green', 'brand.dark');

  return (
    <Flex
      h={'90px'}
      borderTop={'3px solid'}
      borderColor={'brand.green'}
      alignItems={'center'}
      justifyContent={'space-around'}
      color={'white'}
      bg={bg}
    >
      <Text fontSize="18px" lineHeight="23px" fontWeight="400">
        Privacy policy
      </Text>
      <Text fontSize="18px" lineHeight="23px" fontWeight="400">
        2022 GreenBlokx Inc. All rights reserved
      </Text>
      <Flex h={'53px'} w={'49px'} alignItems={'center'} position={'relative'}>
        <Text fontSize="18px" lineHeight="23px" fontWeight="400">
          by{' '}
        </Text>
        <Image
          src="/images/int_logo.png"
          alt="intencio logo"
          w={'49px'}
          h={'53px'}
          position={'absolute'}
          top={'6px'}
          right={'-10px'}
        />
      </Flex>
    </Flex>
  );
};
