import { Box, Text, Button, UnorderedList, ListItem, ListIcon, Flex, Hide, Link, useColorMode } from '@chakra-ui/react';
import { CubeGif } from 'components/CubeGif/CubeGif';

const tokenPoints = [
  'Instant access to liquidity upon TGE',
  'Tradable tokens on the exchange',
  'Scaling returns that are directly tied to GreenBLOKX',
  'High Yielding and forced dividend',
  'Increased returns on the price of the tokens themselves',
];

export const TokenBlock = () => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Text
        as={'h3'}
        fontSize={{ base: '32px', md: '70px' }}
        lineHeight={{ base: '40px', md: '88px' }}
        fontWeight="600"
        pt={{ base: 28, md: 60 }}
        textAlign={'center'}
      >
        <Text as={'span'} color="brand.green">
          Green
        </Text>
        BLOKX tokenized
      </Text>
      <Text
        fontSize={{ base: '18px', md: '20px' }}
        lineHeight={{ base: '22px', md: '26px' }}
        fontWeight="500"
        pt={{ base: 10, md: 7 }}
        px={6}
        textAlign={'center'}
        maxW={{ base: '800px' }}
        mx={'auto'}
      >
        GreenBLOKX will be the first ever smart factory to issue a revenue share token on the blockchain through smart
        contracts.
        <Hide above="md">
          <br />
          <br />
        </Hide>
        The primary benefits of revenue share tokens gives participants a share of the gross revenue paid in stable
        coins or FIAT currency.
        <Hide above="md">
          <br />
          <br />
        </Hide>
        As the Revenue generated grows so does the return to token holders.
      </Text>
      <Flex justifyContent={'center'} mt={{ base: 10, lg: 24 }} mb={{ base: 20, lg: 48 }}>
        <Link isExternal href={'https://docsend.com/view/s/sd9mvfdtsfk86set'} _hover={{ textDecoration: 'none' }}>
          <Button
            bg={'brand.green'}
            color={'white'}
            px={5}
            fontSize={{ base: '16px', md: '25px' }}
            lineHeight={{ base: '20px', md: '22px' }}
            fontWeight="400"
            h={{ base: '50px', lg: '80px' }}
            borderRadius={'12px'}
            _hover={{
              color: colorMode === 'dark' ? 'white' : 'brand.dark',
              bg: 'initial',
            }}
          >
            read token paper
          </Button>
        </Link>
      </Flex>
      <Flex direction={{ base: 'column', lg: 'row' }} pr={{ base: 5, lg: 40 }} pl={{ base: 5, lg: 48 }} mb={28}>
        <Box
          mr={16}
          w={{ base: 'full', lg: '50%' }}
          bg={'rgba(57, 57, 57, 0.7);'}
          boxShadow={'0px 100px 100px rgba(0, 0, 0, 0.1459)'}
          borderRadius={'20px'}
          py={{ base: 14, lg: 20 }}
          mb={{ base: 16, lg: 0 }}
          pl={{ base: 6, md: 7 }}
          pr={{ base: 6, md: 10 }}
        >
          <Text
            fontSize={{ base: '28px', md: '38px' }}
            lineHeight={{ base: '35px', md: '48px' }}
            fontWeight="500"
            color={'white'}
            mb={10}
          >
            Unlocking true Token power
          </Text>
          <UnorderedList
            fontSize={{ base: '20px', md: '20px' }}
            lineHeight={{ base: '25px', md: '26px' }}
            fontWeight="500"
            color={'white'}
            spacing={7}
          >
            {tokenPoints.map((point) => (
              <ListItem display={'flex'} alignItems={'center'}>
                <ListIcon
                  key={point}
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
        <Box
          w={{ lg: '50%' }}
          bg={'rgba(47, 151, 0, 0.7);'}
          boxShadow={'0px 100px 100px rgba(0, 0, 0, 0.1459)'}
          borderRadius={'20px'}
          pt={{ base: 14, lg: 20 }}
          pb={{ base: 44, lg: 56 }}
          mb={{ base: 16, lg: 0 }}
          pl={{ base: 6, md: 7 }}
          pr={{ base: 6, md: 10 }}
          position={'relative'}
        >
          <Text
            fontSize={{ base: '28px', md: '38px' }}
            lineHeight={{ base: '35px', md: '48px' }}
            fontWeight="500"
            color={'white'}
            mb={20}
          >
            Green
          </Text>
          <Text
            fontSize={{ base: '20px', md: '22px' }}
            lineHeight={{ base: '25px', md: '28px' }}
            fontWeight="500"
            color={'white'}
            position={'relative'}
            zIndex={10}
          >
            GreenBLOKX is building the future of the sustainable building.
            <br />
            <br />
            With the assistance of Blockchain GreenBLOKX aims to tackle manufacturing’s primary problems. Audibility,
            accountability, and traceability.
          </Text>

          <CubeGif
            position={'absolute'}
            w={{ base: 60 }}
            h={{ base: 60 }}
            bottom={{ base: '10px' }}
            right={{ base: '10px' }}
            opacity={'0.7'}
          />
        </Box>
      </Flex>
    </Box>
  );
};
