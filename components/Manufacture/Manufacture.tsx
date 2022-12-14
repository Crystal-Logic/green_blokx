import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

export const Manufacture = () => {
  const bgColor = useColorModeValue('rgba(255, 255, 255, 0.3);', 'rgba(255, 255, 255, 0.03);');

  return (
    <Flex direction={{ base: 'column', lg: 'row' }}>
      <Box w={{ lg: '52%' }} mb={{ base: 12, lg: 0 }} bg={bgColor}>
        {' '}
        <Text
          flex="1"
          fontSize={{ base: '20px', md: '25px' }}
          lineHeight={{ base: '25px', md: '31px' }}
          fontWeight="500"
          alignSelf={'center'}
          pl={{ base: 5, md: 100 }}
          pr={{ base: 5, md: 20 }}
          py={{ base: 16, md: 20 }}
        >
          GreenBLOKX is building the future of the sustainable building. With the assistance of Blockchain GreenBLOKX
          aims to tackle manufacturing’s primary problems. Audibility, accountability, and traceability.
        </Text>
      </Box>{' '}
      <Box
        h={{ base: '360px' }}
        w={'full'}
        flex={{ lg: '1' }}
        bg={'rgba(59, 173, 5, 0.4)'}
        boxShadow={'100px 100px 100px rgba(0, 0, 0, 0.15)'}
      ></Box>
    </Flex>
  );
};
