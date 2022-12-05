import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

export const InfoText = ({ children, showPoints, viewType }: any) => {
  const [isShowText, setIsShowText] = useState(false);

  const toggleText = () => setIsShowText(!isShowText);

  useEffect(() => {
    if (!showPoints) {
      setIsShowText(false);
    }
  }, [showPoints]);

  return (
    <Box h={9} w={9} position={'relative'} onClick={toggleText}>
      <Box
        bgImage={'url("/images/green_dot.svg")'}
        bgRepeat={'no-repeat'}
        h={9}
        w={9}
        className={'custom_pointer-cursor'}
      ></Box>
      {viewType === 'left' && (
        <>
          <Box
            display={isShowText ? 'block' : 'none'}
            position={'absolute'}
            border="1px solid"
            borderColor={'brand.green'}
            borderWidth={'1px 0 0 1px'}
            w={'200px'}
            h={'35px'}
            right={'35px'}
            top={'15px'}
          ></Box>
          <Box
            display={isShowText ? 'block' : 'none'}
            position={'absolute'}
            border="1px solid"
            borderColor={'brand.green'}
            py={2.5}
            pl={5}
            pr={8}
            left="-300px"
            top="50px"
          >
            {children}
          </Box>
        </>
      )}
      {viewType === 'right' && (
        <>
          <Box
            display={isShowText ? 'block' : 'none'}
            position={'absolute'}
            border="1px solid"
            borderColor={'brand.green'}
            borderWidth={'1px 0 0 1px'}
            w={'100px'}
            h={'82px'}
            left={'17px'}
            bottom={'38px'}
          ></Box>
          <Box
            display={isShowText ? 'block' : 'none'}
            position={'absolute'}
            border="1px solid"
            borderColor={'brand.green'}
            py={2.5}
            pl={5}
            pr={8}
            left="116px"
            bottom="50px"
          >
            {children}
          </Box>
        </>
      )}
      {viewType === 'bottom' && (
        <>
          <Box
            display={isShowText ? 'block' : 'none'}
            position={'absolute'}
            border="1px solid"
            borderColor={'brand.green'}
            borderWidth={'1px 1px 1px 0'}
            w={'80px'}
            h={'120px'}
            left={'35px'}
            top={'15px'}
          ></Box>
          <Box
            display={isShowText ? 'block' : 'none'}
            position={'absolute'}
            border="1px solid"
            borderColor={'brand.green'}
            py={2.5}
            pl={5}
            pr={8}
            right="0px"
            top="80px"
          >
            {children}
          </Box>
        </>
      )}
    </Box>
  );
};
