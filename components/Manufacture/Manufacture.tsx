import { Box, Flex, Text } from '@chakra-ui/react';

export const Manufacture = () => {
  return (
    <Flex>
      <Box w={'52%'}>
        {' '}
        <Text
          flex="1"
          fontSize={{ base: '14px', md: '25px' }}
          lineHeight={{ base: '18px', md: '31px' }}
          fontWeight="500"
          alignSelf={'center'}
          pl={{ base: 5, md: 100 }}
          pr={{ base: 5, md: 20 }}
          py={{ base: 5, md: 20 }}
        >
          GreenBLOKX is building the future of the sustainable building. With the assistance of Blockchain GreenBLOKX
          aims to tackle manufacturing’s primary problems. Audibility, accountability, and traceability.
        </Text>
      </Box>{' '}
      <Box flex={'1'} bg={'rgba(59, 173, 5, 0.4)'} boxShadow={'100px 100px 100px rgba(0, 0, 0, 0.15)'}></Box>
    </Flex>
  );
};
