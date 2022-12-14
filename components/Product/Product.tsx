import { Box, Text, Image, UnorderedList, ListItem, Flex } from '@chakra-ui/react';

export const Product = () => {
  return (
    <Box
      pb={{ lg: 20 }}
      pt={{ base: 5, md: 16 }}
      pl={{ base: 6, lg: 48 }}
      pr={{ base: 5, lg: 40 }}
      overflowX={'hidden'}
    >
      <Text
        fontSize={{ base: '28px', md: '50px' }}
        lineHeight={{ base: '35px', md: '63px' }}
        fontWeight="600"
        color={'brand.green'}
      >
        The Product
      </Text>
      <Text
        fontSize={{ base: '20px', md: '22px' }}
        lineHeight={{ base: '25px', md: '27px' }}
        fontWeight="500"
        pt={{ base: 7 }}
        maxW={{ lg: '800px' }}
        pb={16}
      >
        GreenBLOKX Manufactures and designs Smart eco Sandwich panels for building envelopes.
      </Text>

      <Flex mb={28} position={'relative'}>
        <Box
          mr={{ lg: 16 }}
          w={{ base: 'full', lg: '55%' }}
          bg={' linear-gradient(0deg, rgba(58, 174, 5, 0.7), rgba(58, 174, 5, 0.7)), rgba(57, 57, 57, 0.3);'}
          boxShadow={'0px 100px 100px rgba(0, 0, 0, 0.1459)'}
          borderRadius={'20px'}
          py={{ base: 7, lg: 20 }}
          px={{ base: 5, md: 7 }}
        >
          <UnorderedList
            fontSize={{ base: '20px', md: '22px' }}
            lineHeight={{ base: '25px', md: '27px' }}
            fontWeight="500"
            spacing={7}
          >
            <ListItem>100% recyclable</ListItem>
            <ListItem>Maximize energy efficiency</ListItem>
            <ListItem>Sound proof</ListItem>
            <ListItem>Thermal insulation</ListItem>
            <ListItem>Easy to assemble and disassemble</ListItem>
            <ListItem>Reduces carbon footprint</ListItem>
          </UnorderedList>
        </Box>
        <Flex
          alignItems={'center'}
          flex={{ lg: '1' }}
          position={{ base: 'absolute', lg: 'unset' }}
          bottom={'-110px'}
          right={'-70px'}
          w={{ base: '290px', lg: 'unset' }}
        >
          <Image src="/images/plate_1.png" />
        </Flex>
      </Flex>
    </Box>
  );
};
