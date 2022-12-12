import { Box, Text, Button, UnorderedList, ListItem, Flex } from '@chakra-ui/react';

export const TokenBlock = () => {
  return (
    <Box>
      <Text
        as={'h3'}
        fontSize={{ base: '20px', md: '70px' }}
        lineHeight={{ base: '25px', md: '88px' }}
        fontWeight="600"
        pt={{ base: 5, md: 60 }}
        textAlign={'center'}
      >
        <Text as={'span'} color="brand.green">
          GREEN
        </Text>
        BLOKX tokenized
      </Text>
      <Text
        fontSize={{ base: '20px', md: '20px' }}
        lineHeight={{ base: '25px', md: '26px' }}
        fontWeight="500"
        pt={{ base: 5, md: 7 }}
        textAlign={'center'}
        maxW={{ base: '800px' }}
        mx={'auto'}
      >
        GreenBLOKX will be the first ever smart factory to issue a revenue share token on the blockchain through smart
        contracts. The primary benefits of revenue share tokens gives participants a share of the gross revenue paid in
        stable coins or FIAT currency. As the Revenue generated grows so does the return to token holders.
      </Text>
      <Flex justifyContent={'center'} mt={24} mb={48}>
        <Button
          bg={'brand.green'}
          color={'white'}
          py={6}
          px={5}
          fontSize={{ base: '20px', md: '25px' }}
          lineHeight={{ base: '25px', md: '22px' }}
          fontWeight="400"
          h={'80px'}
          borderRadius={'12px'}
        >
          read token paper
        </Button>
      </Flex>
      <Flex pr={40} pl={48} mb={28}>
        <Box
          mr={16}
          w={'50%'}
          bg={'rgba(57, 57, 57, 0.7);'}
          boxShadow={'0px 100px 100px rgba(0, 0, 0, 0.1459)'}
          borderRadius={'20px'}
          py={20}
        >
          <Text
            fontSize={{ base: '20px', md: '38px' }}
            lineHeight={{ base: '25px', md: '48px' }}
            fontWeight="500"
            color={'white'}
            pt={{ base: 5, md: 7 }}
            px={{ base: 5, md: 7 }}
            mb={10}
          >
            Unlocking true Token power
          </Text>
          <UnorderedList
            fontSize={{ base: '20px', md: '20px' }}
            lineHeight={{ base: '25px', md: '26px' }}
            fontWeight="500"
            color={'white'}
            pt={{ base: 5, md: 7 }}
            px={{ base: 5, md: 7 }}
          >
            <ListItem>Instant access to liquidity upon TGE</ListItem>
            <ListItem>Tradable tokens on the exchange</ListItem>
            <ListItem>Scaling returns that are directly tied to GreenBLOKX</ListItem>
            <ListItem>High Yielding and forced dividend</ListItem>
            <ListItem>Increased returns on the price of the tokens themselves</ListItem>
          </UnorderedList>
        </Box>
        <Box
          w={'50%'}
          bg={'rgba(47, 151, 0, 0.7);'}
          boxShadow={'0px 100px 100px rgba(0, 0, 0, 0.1459)'}
          borderRadius={'20px'}
          py={20}
        >
          <Text
            fontSize={{ base: '20px', md: '38px' }}
            lineHeight={{ base: '25px', md: '48px' }}
            fontWeight="500"
            color={'white'}
            pt={{ base: 5, md: 7 }}
            px={{ base: 5, md: 7 }}
            mb={20}
          >
            Green
          </Text>
          <Text
            fontSize={{ base: '20px', md: '22px' }}
            lineHeight={{ base: '25px', md: '28px' }}
            fontWeight="500"
            color={'white'}
            pt={{ base: 5, md: 7 }}
            px={{ base: 5, md: 7 }}
          >
            GreenBLOKX is building the future of the sustainable building.
            <br />
            <br />
            With the assistance of Blockchain GreenBLOKX aims to tackle manufacturing’s primary problems. Audibility,
            accountability, and traceability.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
