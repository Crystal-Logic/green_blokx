import { Box, Text } from '@chakra-ui/react';

export const FutureBlock = () => {
  return (
    <Box pt={{ base: 36, lg: 48 }} pb={{ base: 60, lg: 60 }} pl={{ base: 6, lg: 44 }} pr={{ base: 3, lg: 48 }}>
      <Text
        as={'h3'}
        fontSize={{ base: '30px', md: '65px' }}
        lineHeight={{ base: '38px', md: '81px' }}
        fontWeight="800"
      >
        The Future is in your hands… Join the movement towards a greener future with <br />
        <Text as={'span'} color="brand.green">
          GreenBLOKX
        </Text>
      </Text>
    </Box>
  );
};
