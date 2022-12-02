import { Flex, Text, Image, useColorModeValue, Hide, Link } from '@chakra-ui/react';

export const Footer = () => {
  const bg = useColorModeValue('brand.green', 'brand.dark');
  const cursorPointer = 'url(/images/cursor_pointer-green.png) 16 16, auto';

  return (
    <Flex
      h={{ base: '52px', md: '90px' }}
      borderTop={'3px solid'}
      borderColor={'brand.green'}
      alignItems={'center'}
      justifyContent={'space-around'}
      color={'white'}
      bg={bg}
    >
      <Text
        fontSize={{ base: '9px', md: '18px' }}
        lineHeight={{ base: '12px', md: '23px' }}
        fontWeight="400"
        order={{ base: 1, md: 'unset' }}
      >
        Privacy{' '}
        <Hide above="md">
          <br />
        </Hide>
        policy
      </Text>
      <Text
        fontSize={{ base: '9px', md: '18px' }}
        lineHeight={{ base: '12px', md: '23px' }}
        fontWeight="400"
        order={{ base: 3, md: 'unset' }}
      >
        2022 GreenBlokx Inc.{' '}
        <Hide above="md">
          <br />
        </Hide>{' '}
        All rights reserved
      </Text>
      <Link href={'https://intencioagency.com/'} isExternal>
        <Flex h={'53px'} w={'49px'} alignItems={'center'} position={'relative'} order={{ base: 2, md: 'unset' }}>
          <Text
            fontSize={{ base: '9px', md: '18px' }}
            lineHeight={{ base: '12px', md: '23px' }}
            fontWeight="400"
            cursor={cursorPointer}
          >
            by{' '}
          </Text>
          <Image
            src="/images/int_logo.png"
            alt="intencio logo"
            w={{ base: '25px', md: '49px' }}
            h={{ base: '22px', md: '53px' }}
            position={'absolute'}
            top={{ base: '20px', md: '6px' }}
            right={{ base: '20px', md: '-10px' }}
            cursor={cursorPointer}
          />
        </Flex>
      </Link>
    </Flex>
  );
};
