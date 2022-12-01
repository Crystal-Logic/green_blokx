import { Box, Heading, Text, Image, Flex, Hide } from '@chakra-ui/react';
import { ReactNode } from 'react';

type NumBoxProps = {
  children: ReactNode;
  number: string;
};

const NumberBox = ({ children, number }: NumBoxProps) => (
  <Flex mb={'18px'} alignItems={'center'}>
    <Flex
      h={{ base: '43px', md: '84px' }}
      w={{ base: '43px', md: '84px' }}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Text
        fontSize={{ base: '35px', md: '64px' }}
        lineHeight={{ base: '42px', md: '78px' }}
        fontWeight="500"
        color="brand.green"
        fontFamily={'Montserrat'}
        _hover={{
          color: 'brand.red',
        }}
        sx={{
          WebkitTextStrokeWidth: '2px',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {number}
      </Text>
    </Flex>
    <Text
      flex="1"
      fontSize={{ base: '14px', md: '24px' }}
      lineHeight={{ base: '18px', md: '30px' }}
      fontWeight="500"
      alignSelf={'center'}
      pl={{ base: '22px', md: '12px' }}
    >
      {children}
    </Text>
  </Flex>
);

export const Advantages = () => (
  <Box h={{ base: 'auto', md: '100vh' }}>
    <Flex h={{ base: 'auto', md: '567px' }} direction={{ base: 'column', md: 'row' }} my={{ base: '62px', md: '94px' }}>
      <Box flex="1" pl={['20px', null, null, '205px']}>
        <Heading
          as="h2"
          fontSize={{ base: '25px', md: '40px' }}
          lineHeight={{ base: '31px', md: '50px' }}
          fontWeight="500"
          mb={['43px', null, '52px']}
        >
          <Text as={'span'} color="brand.green">
            Our{' '}
          </Text>
          Advantages
        </Heading>

        <NumberBox number="01">
          Compliant offering through a registered{' '}
          <Hide below="md">
            <br />
          </Hide>{' '}
          broker-dealer
        </NumberBox>

        <NumberBox number="02">
          No need to lock / stake them they provide passive{' '}
          <Hide below="md">
            <br />
          </Hide>{' '}
          stable cash flow based on company performance
        </NumberBox>

        <NumberBox number="03">
          Transparent automated payments are{' '}
          <Hide below="md">
            <br />
          </Hide>{' '}
          easy to record
        </NumberBox>

        <NumberBox number="04">Decentralized and available for self custody</NumberBox>

        <NumberBox number="05">
          Does not affect company equity dilution and{' '}
          <Hide below="md">
            <br />
          </Hide>{' '}
          allows companies / projects to scale easily
        </NumberBox>
      </Box>
      <Box h={{ base: '197px', md: 'full' }} w={{ base: 'full', md: '435px' }} mt={{ base: '40px', md: 0 }}>
        <Image
          src="/images/advantages.png"
          alt="logo white"
          h={{ base: '197px', md: 'full' }}
          w={{ base: 'full', md: '435px' }}
          objectFit={'cover'}
        />
      </Box>
    </Flex>
  </Box>
);
