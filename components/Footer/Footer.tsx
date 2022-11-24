import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

export const Footer = () => {
  const bg = useColorModeValue('brand.green', 'white');

  return (
    <Flex
      h={'90px'}
      borderTop={'3px solid'}
      borderColor={'brand.green'}
      alignItems={'center'}
      justifyContent={'space-around'}
      color={'white'}
      bg={bg}
    >
      <Text fontSize="18px" lineHeight="23px" fontWeight="400">
        Privacy policy
      </Text>
      <Text fontSize="18px" lineHeight="23px" fontWeight="400">
        2022 GreenBlokx Inc. All rights reserved
      </Text>
      <Text fontSize="18px" lineHeight="23px" fontWeight="400">
        by
      </Text>
    </Flex>
  );
};
