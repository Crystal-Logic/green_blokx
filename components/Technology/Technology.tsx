import { Box, Heading, Text, Center, Flex, Image, SimpleGrid, useColorModeValue } from '@chakra-ui/react';

export const Technology = () => {
  const activeColor = useColorModeValue('brand.dark', 'white');

  return (
    <Box id="technology" minH={'100vh'}>
      <Flex h={'87px'}>
        <Box flex={'1'} bg="brand.green"></Box>
        <Box w={'400px'}>
          <Center>
            <Heading as="h2" fontSize="32px" lineHeight="40px" fontWeight="500" pt={'20px'}>
              Technology
            </Heading>
          </Center>
        </Box>
        <Box w={'150px'} bg="brand.green"></Box>
      </Flex>

      <Text fontSize="18px" lineHeight="23px" fontWeight="600" pl={'205px'} pr={'272px'} pt={'51px'}>
        We are building the{' '}
        <Text as={'span'} color="brand.green">
          first tokenized factory
        </Text>{' '}
        using blockchain and a fractionalized revenue share. Unlike traditional blockchain funding models, our token is
        directly tied to our gross revenue through a compliant Reg D 506c security offering.
      </Text>

      <Image src="/images/video_placeholder.png" w={'full'} h={'461px'} py={'26px'} alt="construction video" />

      <Flex h={'100px'} borderTop={'1px solid'} borderColor={'brand.green'}>
        <SimpleGrid columns={4} spacing={0} w={'full'}>
          <Box borderRight={'1px solid'} borderColor={'brand.green'} h={'13px'} position="relative">
            <Text
              fontSize="18px"
              lineHeight="23px"
              fontWeight="400"
              color="brand.green"
              position={'absolute'}
              top={15}
              right={'-30px'}
              cursor={'pointer'}
              _hover={{
                color: activeColor,
                fontSize: '32px',
                lineHeight: '40px',
                fontWeight: '500',
                right: '-50px',
              }}
            >
              {' '}
              Step 1
            </Text>
          </Box>
          <Box borderRight={'1px solid'} borderColor={'brand.green'} h={'13px'} position="relative">
            <Text
              fontSize="18px"
              lineHeight="23px"
              fontWeight="400"
              color="brand.green"
              position={'absolute'}
              top={15}
              right={'-30px'}
              cursor={'pointer'}
              _hover={{
                color: activeColor,
                fontSize: '32px',
                lineHeight: '40px',
                fontWeight: '500',
                right: '-50px',
              }}
            >
              {' '}
              Step 2
            </Text>
          </Box>
          <Box borderRight={'1px solid'} borderColor={'brand.green'} h={'13px'} position="relative">
            <Text
              fontSize="18px"
              lineHeight="23px"
              fontWeight="400"
              color="brand.green"
              position={'absolute'}
              top={15}
              right={'-30px'}
              cursor={'pointer'}
              _hover={{
                color: activeColor,
                fontSize: '32px',
                lineHeight: '40px',
                fontWeight: '500',
                right: '-50px',
              }}
            >
              {' '}
              Step 3
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
