import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

export const InfoTextMobile = ({ children, viewType, show }: any) => {
  const bg = useColorModeValue('white', 'brand.dark');

  return (
    <Box h={'15px'} w={'15px'} position={'relative'}>
      <Box bgImage={'url("/images/green_dot.svg")'} bgRepeat={'no-repeat'} h={'15px'} w={'15px'}></Box>
      {viewType === 'left' && (
        <>
          <Box
            display={show ? 'block' : 'none'}
            position={'absolute'}
            border="1px solid"
            borderColor={'brand.green'}
            borderWidth={'1px 0 1px 1px'}
            w={'30px'}
            h={'130px'}
            right={'15px'}
            top={'7px'}
          ></Box>
          <Box
            display={show ? 'block' : 'none'}
            position={'absolute'}
            border="1px solid"
            borderColor={'brand.green'}
            py={2.5}
            px={3}
            left="0px"
            top="80px"
            w={'270px'}
            bgColor={bg}
          >
            {children}
          </Box>
        </>
      )}
      {viewType === 'right' && (
        <>
          <Box
            display={show ? 'block' : 'none'}
            position={'absolute'}
            border="1px solid"
            borderColor={'brand.green'}
            borderWidth={'1px  1px 1px 0'}
            w={'40px'}
            h={'170px'}
            left={'15px'}
            top={'7px'}
          ></Box>
          <Box
            display={show ? 'block' : 'none'}
            position={'absolute'}
            border="1px solid"
            borderColor={'brand.green'}
            py={2.5}
            px={3}
            right="0px"
            top="150px"
            w={'230px'}
            bgColor={bg}
          >
            {children}
          </Box>
        </>
      )}
      {viewType === 'bottom' && (
        <>
          <Box
            display={show ? 'block' : 'none'}
            position={'absolute'}
            border="1px solid"
            borderColor={'brand.green'}
            borderWidth={'1px 1px 1px 0'}
            w={'60px'}
            h={'60px'}
            left={'5px'}
            top={'7px'}
          ></Box>
          <Box
            display={show ? 'block' : 'none'}
            position={'absolute'}
            border="1px solid"
            borderColor={'brand.green'}
            py={2.5}
            px={3}
            right="-10px"
            top="50px"
            w={'230px'}
            bgColor={bg}
          >
            {children}
          </Box>
        </>
      )}
    </Box>
  );
};
