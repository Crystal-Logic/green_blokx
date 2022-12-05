import { Flex, Text, Image, useColorModeValue, Hide, Link } from '@chakra-ui/react';

export const Footer = () => {
  const bg = useColorModeValue('brand.green', 'brand.dark');

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
      <Link href={'https://drive.google.com/file/d/1ORsanQxlAzypAwd3QcaSv22OnY8kdfvM/view?usp=share_link'} isExternal>
        <Text
          fontSize={{ base: '9px', md: '18px' }}
          lineHeight={{ base: '12px', md: '23px' }}
          fontWeight="400"
          order={{ base: 1, md: 'unset' }}
          className={'custom_pointer-cursor'}
        >
          Privacy{' '}
          <Hide above="md">
            <br />
          </Hide>
          policy
        </Text>
      </Link>
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
            className={'custom_pointer-cursor'}
          >
            by{' '}
          </Text>
          <Image
            src="/images/intencio_logo.svg"
            alt="intencio logo"
            w={{ base: '25px', md: '49px' }}
            h={{ base: '22px', md: '53px' }}
            position={'absolute'}
            top={{ base: '20px', md: '6px' }}
            right={{ base: '20px', md: '-10px' }}
            className={'custom_pointer-cursor'}
          />
        </Flex>
      </Link>
    </Flex>
  );
};
