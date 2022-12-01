import { Box, Heading, Text, Flex, Image, SimpleGrid, useColorModeValue, Hide } from '@chakra-ui/react';

type StepProps = {
  text: string;
};

const Step = ({ text }: StepProps) => {
  const activeColor = useColorModeValue('brand.dark', 'white');

  return (
    <Box borderRight={'1px solid'} borderColor={'brand.green'} h={'13px'} position="relative">
      <Text
        fontSize={{ base: '12px', md: '18px' }}
        lineHeight={{ base: '15px', md: '23px' }}
        fontWeight="400"
        color="brand.green"
        position={'absolute'}
        top={15}
        right={{ base: '-20px', md: '-30px' }}
        cursor={'pointer'}
        _hover={{
          color: activeColor,
          fontSize: { base: '15px', md: '32px' },
          lineHeight: { base: '18px', md: '40px' },
          fontWeight: '500',
          right: { base: '-30px', md: '-50px' },
        }}
      >
        {' '}
        {text}
      </Text>
    </Box>
  );
};

export const Technology = () => {
  return (
    <Box id="technology">
      <Flex h={{ base: '60px', md: '87px' }}>
        <Box flex={'1'} bg="brand.green"></Box>
        <Flex w={{ base: '200px', md: '400px' }} justifyContent="center" alignItems={'center'}>
          <Heading
            as="h2"
            fontSize={{ base: '25px', md: '32px' }}
            lineHeight={{ base: '31px', md: '40px' }}
            fontWeight="500"
          >
            Technology
          </Heading>
        </Flex>
        <Box w={{ base: '15px', md: '150px' }} bg="brand.green"></Box>
      </Flex>

      <Text
        fontSize={{ base: '14px', md: '18px' }}
        lineHeight={{ base: '18px', md: '23px' }}
        fontWeight="600"
        pl={['20px', null, null, '205px']}
        pr={['20px', null, null, '272px']}
        pt={'51px'}
      >
        We are building the{' '}
        <Text as={'span'} color="brand.green">
          first tokenized factory
        </Text>{' '}
        using blockchain and a fractionalized revenue share.
        <Hide above="xl">
          <br />
          <br />
        </Hide>
        Unlike traditional blockchain funding models, our token is directly tied to our gross revenue through a
        compliant Reg D 506c security offering.
      </Text>

      <Image
        src="/images/video_placeholder.png"
        w={'full'}
        h={{ base: '360px', md: '461px' }}
        pt={{ base: '35px', md: '26px' }}
        pb={{ base: '10px', md: '26px' }}
        alt="construction video"
      />

      <Flex h={'100px'} borderTop={'1px solid'} borderColor={'brand.green'}>
        <SimpleGrid columns={4} spacing={0} w={'full'}>
          <Step text="Step 1" />
          <Step text="Step 2" />
          <Step text="Step 3" />
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
