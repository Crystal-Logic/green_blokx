import { Box, Text, Button, Flex } from '@chakra-ui/react';

export const Subscribe = () => {
  return (
    <Box my={{ base: 5, md: 60 }}>
      <Text
        as={'h3'}
        fontSize={{ base: '20px', md: '70px' }}
        lineHeight={{ base: '25px', md: '88px' }}
        fontWeight="600"
        textAlign={'center'}
      >
        <Text as={'span'} color="brand.green">
          Subscribe
        </Text>{' '}
        to our newsletter
      </Text>
      <Flex justifyContent={'center'} mt={24} mb={48}>
        <Button
          bg={'brand.green'}
          color={'white'}
          py={6}
          px={5}
          fontSize={{ base: '20px', md: '25px' }}
          lineHeight={{ base: '25px', md: '22px' }}
          fontWeight="400"
          h={'80px'}
          borderRadius={'12px'}
        >
          Subscribe
        </Button>
      </Flex>
    </Box>
  );
};
