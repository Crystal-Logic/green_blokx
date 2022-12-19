import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

export const InfoTextMobile = ({ children, viewType, show }: any) => {
  //   const bg = useColorModeValue('white', 'brand.dark');
  const bg = 'transparent';

  return (
    <Box h={'10px'} w={'10px'} position={'relative'}>
      <Box
        bgImage={'url("/images/green_dot.svg")'}
        bgRepeat={'no-repeat'}
        h={'10px'}
        w={'10px'}
        className={'custom_pointer-cursor'}
      ></Box>
      {viewType === 'left' && (
        <>
          <Box
            display={show ? 'block' : 'none'}
            position={'absolute'}
            border="1px solid"
            borderColor={'brand.green'}
            borderWidth={'0 0 1px 1px'}
            w={'50px'}
            h={'25px'}
            right={'10px'}
            bottom={'5px'}
          ></Box>
          <Box
            display={show ? 'block' : 'none'}
            position={'absolute'}
            border="1px solid"
            borderColor={'brand.green'}
            py={2.5}
            px={3}
            left="-100px"
            bottom="30px"
            w={'220px'}
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
            borderWidth={'0 1px 1px 0'}
            w={'50px'}
            h={'45px'}
            left={'10px'}
            bottom={'5px'}
          ></Box>
          <Box
            display={show ? 'block' : 'none'}
            position={'absolute'}
            border="1px solid"
            borderColor={'brand.green'}
            py={2.5}
            px={3}
            left="-130px"
            bottom="50px"
            w={'245px'}
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
            borderWidth={'0 1px 1px 0'}
            w={'60px'}
            h={'65px'}
            left={'10px'}
            bottom={'5px'}
          ></Box>
          <Box
            display={show ? 'block' : 'none'}
            position={'absolute'}
            border="1px solid"
            borderColor={'brand.green'}
            py={2.5}
            px={3}
            right="-120px"
            bottom="70px"
            w={'240px'}
            bgColor={bg}
          >
            {children}
          </Box>
        </>
      )}
    </Box>
  );
};
