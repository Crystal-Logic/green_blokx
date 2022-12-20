import React, { useState } from 'react';
import { Box, Text, Button, Flex, InputGroup, Input, InputRightElement, Hide, useColorMode } from '@chakra-ui/react';
import { CubesBG } from './CubesBG';
// import emailjs from '@emailjs/browser';

export const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { colorMode } = useColorMode();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email) {
      e.preventDefault();
      console.log(email);
      setIsLoading(true);
      setTimeout(() => {
        setEmail('');
        setIsLoading(false);
      }, 3000);

      // emailjs.send('service_ccs0h9f', 'template_lnyppx8', { email }, '7yDIJacuZxYO3bjCB').then(
      //   (response: any) => {
      //     console.log('SUCCESS!', response.status, response.text);
      //     // showSuccess(true);
      //   },
      //   (error: any) => {
      //     console.log('FAILED...', error);
      //   },
      // );
    }
  };

  return (
    <Box py={{ base: 24, md: 60 }} pos={'relative'}>
      <Text
        as={'h3'}
        fontSize={{ base: '32px', md: '70px' }}
        lineHeight={{ base: '40px', md: '88px' }}
        fontWeight="600"
        textAlign={'center'}
        position={'relative'}
        zIndex={10}
      >
        <Text as={'span'} color="brand.green">
          Subscribe
        </Text>{' '}
        <Hide above="md">
          <br />
        </Hide>
        to our newsletter
      </Text>
      <form onSubmit={handleSubmit}>
        <Flex
          justifyContent={'center'}
          mt={{ base: 16, lg: 24 }}
          mb={{ base: 12, lg: 48 }}
          position={'relative'}
          zIndex={10}
        >
          <InputGroup w={{ base: '90%', lg: '50%', xl: '40%' }}>
            <Input
              placeholder="Email address"
              type="email"
              onChange={(event) => setEmail(event.currentTarget.value)}
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
                isLoading={isLoading}
                type="submit"
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
      </form>

      <CubesBG />
    </Box>
  );
};
