import { Box, Text, Image, UnorderedList, ListItem, Flex } from '@chakra-ui/react';

export const Product = () => {
  return (
    <Box pb={20}>
      <Text
        fontSize={{ base: '20px', md: '50px' }}
        lineHeight={{ base: '25px', md: '63px' }}
        fontWeight="600"
        color={'brand.green'}
        mt={{ base: 5, md: 16 }}
        pl={48}
      >
        Product
      </Text>
      <Text
        fontSize={{ base: '20px', md: '22px' }}
        lineHeight={{ base: '25px', md: '27px' }}
        fontWeight="500"
        pt={{ base: 5, md: 7 }}
        maxW={{ base: '800px' }}
        pl={48}
        pb={16}
      >
        GreenBLOKX Manufactures and designs Smart eco Sandwich panels for building envelopes.
      </Text>

      <Flex pr={40} pl={48} mb={28}>
        <Box
          mr={16}
          w={'55%'}
          bg={' linear-gradient(0deg, rgba(58, 174, 5, 0.7), rgba(58, 174, 5, 0.7)), rgba(57, 57, 57, 0.3);'}
          boxShadow={'0px 100px 100px rgba(0, 0, 0, 0.1459)'}
          borderRadius={'20px'}
          py={20}
        >
          <UnorderedList
            fontSize={{ base: '20px', md: '22px' }}
            lineHeight={{ base: '25px', md: '27px' }}
            fontWeight="500"
            pt={{ base: 5, md: 7 }}
            px={{ base: 5, md: 7 }}
          >
            <ListItem>100% recyclable</ListItem>
            <ListItem>Maximize energy efficiency</ListItem>
            <ListItem>Sound proof</ListItem>
            <ListItem>Thermal insulation</ListItem>
            <ListItem>Easy to assemble and disassemble</ListItem>
            <ListItem>Reduces carbon footprint</ListItem>
          </UnorderedList>
        </Box>
        <Box flex={'1'} py={20}>
          <Image src="/images/plate_1.png" />
        </Box>
      </Flex>
    </Box>
  );
};
