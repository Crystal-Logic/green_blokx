import { Box, Heading, Flex } from '@chakra-ui/react';

export const Partners = () => {
  return (
    <Box id="partners" minH={'100vh'}>
      <Flex h={'96px'}>
        <Box flex={'1'} bg="brand.green"></Box>
        <Flex w={'400px'} justifyContent="center" alignItems={'center'}>
          <Heading as="h2" fontSize="32px" lineHeight="40px" fontWeight="500">
            Partners
          </Heading>
        </Flex>
        <Box w={'150px'} bg="brand.green"></Box>
      </Flex>
    </Box>
  );
};
