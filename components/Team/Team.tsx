import { Box, Heading, Text, Flex, Image, Button } from '@chakra-ui/react';

export const Team = () => {
  return (
    <Box id="team" minH={'100vh'} pt={'53px'} mb={'93px'} position={'relative'}>
      <Flex h={'100px'} w={'full'} pl={'205px'} position={'absolute'}>
        <Flex flex={'1'} alignItems={'center'}>
          <Box h={'0px'} w={'full'} borderBottom={'3px solid'} borderColor={'brand.green'}></Box>
        </Flex>
        <Flex w={'290px'} bg="brand.green" alignItems={'center'} pl={'43px'}>
          <Heading as="h2" fontSize="32px" lineHeight="40px" fontWeight="500">
            Team
          </Heading>
        </Flex>
      </Flex>
      <Flex h={'106px'} w={'full'} position={'absolute'} top={'700px'}>
        <Flex w={'160px'} bg="brand.green">
          <Image
            src="/images/logo_white.png"
            alt="logo white"
            position={'absolute'}
            left={'10px'}
            top={'8px'}
            h={'88px'}
          />
        </Flex>
        <Flex w={'550px'}></Flex>
        <Flex flex={'1'}>
          <Box h={'full'} w={'full'} borderBottom={'3px solid'} borderColor={'brand.green'}></Box>
        </Flex>
      </Flex>
      <Box position={'absolute'} top={'900px'}>
        <Button
          variant="outline"
          color="brand.green"
          colorScheme={'brand.green'}
          borderRadius="none"
          borderWidth="2px 2px 2px 0px"
          h={'135px'}
          minW={'815px'}
          fontSize="32px"
          lineHeight="40px"
          fontWeight="500"
          position={'relative'}
          _hover={{
            color: 'brand.red',
            colorScheme: 'brand.red',
            bg: 'transparent',
          }}
        >
          <Text as={'span'} position={'absolute'} right={'85px'}>
            Contact us
          </Text>
        </Button>
      </Box>
    </Box>
  );
};
