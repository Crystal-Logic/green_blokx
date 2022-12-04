import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

export const InfoText = ({ children, textPositions, showPoints }: any) => {
  const [isShowText, setIsShowText] = useState(false);

  const toggleText = () => setIsShowText(!isShowText);

  useEffect(() => {
    if (!showPoints) {
      setIsShowText(false);
    }
  }, [showPoints]);

  return (
    <Box h={9} w={9} position={'relative'} onClick={toggleText}>
      <Box bgImage={'url("/images/green_dot.svg")'} bgRepeat={'no-repeat'} h={9} w={9}></Box>
      <Box
        display={isShowText ? 'block' : 'none'}
        position={'absolute'}
        border="1px solid green"
        borderColor={'brand.green'}
        py={2.5}
        pl={5}
        pr={8}
        {...textPositions}
      >
        {children}
      </Box>
    </Box>
  );
};
