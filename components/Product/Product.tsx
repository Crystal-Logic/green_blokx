import { Box, Text, Image, UnorderedList, ListItem, Flex, ListIcon } from '@chakra-ui/react';

const productPoints = [
  '100% recyclable',
  'Maximize energy efficiency',
  'Sound proof',
  'Thermal insulation',
  'Easy to assemble and disassemble',
  'Reduces carbon footprint',
];

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
          bg={'linear-gradient(0deg, rgba(58, 174, 5, 0.7), rgba(58, 174, 5, 0.7)), rgba(57, 57, 57, 0.3);'}
          boxShadow={'0px 100px 100px rgba(0, 0, 0, 0.1459)'}
          borderRadius={'20px'}
          py={{ base: 7, lg: 20 }}
          pl={{ base: 5, md: 7 }}
          pr={{ base: 16, md: 7 }}
        >
          <UnorderedList
            fontSize={{ base: '20px', md: '22px' }}
            lineHeight={{ base: '25px', md: '27px' }}
            fontWeight="500"
            spacing={7}
            listStyleType="none"
          >
            {productPoints.map((point) => (
              <ListItem key={point} display={'flex'} alignItems={'center'}>
                <ListIcon
                  as={Box}
                  h={{ base: '15px', lg: '20px' }}
                  w={{ base: '15px', lg: '20px' }}
                  bg={'white'}
                  borderRadius={'50%'}
                  mr={{ base: 5, lg: 10 }}
                />
                {point}
              </ListItem>
            ))}
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
          <Image src="/images/plate_1.png" alt="plate image" />
        </Flex>
      </Flex>
    </Box>
  );
};
