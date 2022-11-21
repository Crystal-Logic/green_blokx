import { Box, Heading, Text, Image } from '@chakra-ui/react';

export const Construction = () => (
  <Box minH={'100vh'}>
    <Box w={'full'} pl={205} pt={88} pb={41}>
      <Heading as="h2" fontSize="32px" lineHeight="40px" fontWeight="800">
        Intelligent Construction Design for a{' '}
        <Text as={'span'} color="brand.green">
          Greener Future
        </Text>
      </Heading>
      <Text fontSize="22px" fontWeight="500" lineHeight="28px">
        Tokenized{' '}
        <Text as={'span'} color="brand.green">
          Eco Panel
        </Text>{' '}
        Manufacturing
      </Text>
    </Box>
    <Image src="/images/video_placeholder.png" width={'full'} alt="construction video" />
  </Box>
);
