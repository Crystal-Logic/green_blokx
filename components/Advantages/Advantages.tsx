import { Box, Heading, Text, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

type NumBoxProps = {
  children: ReactNode;
  number: string;
};

const NumberBox = ({ children, number }: NumBoxProps) => (
  <Flex mt={5} alignItems={'center'}>
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
  <Box pt={{ base: 10, lg: 40 }} pb={{ base: 10, lg: 20 }}>
    <Flex h={{ base: 'auto' }} direction={{ base: 'column', md: 'row' }}>
      <Box flex="1" pl={{ base: 10, xl: 52 }}>
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

        <NumberBox number="01">Compliant offering through a registered broker-dealer</NumberBox>

        <NumberBox number="02">
          No need to lock / stake them they provide passive stable cash flow based on company performance
        </NumberBox>

        <NumberBox number="03">Transparent automated payments are easy to record</NumberBox>

        <NumberBox number="04">Decentralized and available for self custody</NumberBox>

        <NumberBox number="05">
          Does not affect company equity dilution and allows companies / projects to scale easily
        </NumberBox>
      </Box>
      <Box
        h={{ base: 200, md: 'auto' }}
        w={{ base: 'full', md: '30%' }}
        mt={{ base: 10, md: 0 }}
        ml={{ md: 8 }}
        bg="url('/images/advantages.webp')"
        backgroundSize="cover"
      ></Box>
    </Flex>
  </Box>
);
