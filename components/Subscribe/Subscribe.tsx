import { Box, Text, Button, Flex, InputGroup, Input, InputRightElement, Hide, useColorMode } from '@chakra-ui/react';

export const Subscribe = () => {
  const { colorMode } = useColorMode();

  return (
    <Box my={{ base: 24, md: 60 }}>
      <Text
        as={'h3'}
        fontSize={{ base: '32px', md: '70px' }}
        lineHeight={{ base: '40px', md: '88px' }}
        fontWeight="600"
        textAlign={'center'}
      >
        <Text as={'span'} color="brand.green">
          Subscribe
        </Text>{' '}
        <Hide above="md">
          <br />
        </Hide>
        to our newsletter
      </Text>
      <Flex justifyContent={'center'} mt={{ base: 16, lg: 24 }} mb={{ base: 12, lg: 48 }}>
        <InputGroup w={{ base: '90%', lg: '50%', xl: '40%' }}>
          <Input
            placeholder="Email address"
            _placeholder={{
              opacity: 1,
              color: 'white',
              fontSize: { base: '14px', md: '20px' },
              lineHeight: { base: '18px', md: '25px' },
            }}
            h={{ base: '70px' }}
            borderRadius={'12px'}
            borderColor={'brand.green'}
            bg={'rgba(58, 174, 5, 0.4);'}
          />
          <InputRightElement h={'full'} w={'fit-content'} px={3.5}>
            <Button
              bg={'brand.green'}
              color={'white'}
              px={5}
              fontSize={{ base: '18px' }}
              lineHeight={{ base: '22px' }}
              fontWeight="400"
              h={'50px'}
              borderRadius={'12px'}
              _hover={{
                color: colorMode === 'dark' ? 'white' : 'brand.dark',
                bg: 'initial',
              }}
            >
              Subscribe
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};
